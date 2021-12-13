var c = wx.$o;
var o_ozch = this && this['__extends'] || function () {
  var hbg4xo = function (hb4g, hrz8cp) {
    return hbg4xo = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (_3nvl, y_v3n) {
      _3nvl['__proto__'] = y_v3n;
    } || function (zcprh, nal3v6) {
      for (var pcr85m in nal3v6) if (nal3v6['hasOwnProperty'](pcr85m)) zcprh[pcr85m] = nal3v6[pcr85m];
    }, hbg4xo(hb4g, hrz8cp);
  };return function (l3uanv, mpcr85) {
    hbg4xo(l3uanv, mpcr85);function w192i() {
      this['constructor'] = l3uanv;
    }l3uanv['prototype'] = mpcr85 === null ? Object['create'](mpcr85) : (w192i['prototype'] = mpcr85['prototype'], new w192i());
  };
}(),
    o_hb4ox = window['Sygame'],
    o_mrz = ![],
    o_zr8cpm = function () {
  function trmqp() {}return trmqp['init'] = function () {
    o_mrz ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = o_hb4ox;
  }, trmqp['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, trmqp['setResMap'] = function (c85rmp, zbog8) {
    this['resMap'][c85rmp] = c85rmp + '?' + zbog8;
  }, trmqp['getResMap'] = function (f12i9) {
    return this['resMap'][f12i9];
  }, trmqp['resMap'] = {}, trmqp;
}(),
    o_$0yk_ = function () {
  function obh() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', o_zr8cpm['init'](), this['getBoxCheckoutCode']();
  }return obh['prototype']['send'] = function (fid21, i62dal, f4g9, xfw19, ozg8h) {
    xfw19 === void 0x0 && (xfw19 = 'get');ozg8h === void 0x0 && (ozg8h = '' || null);var ali6d = new Laya['HttpRequest']();ali6d['http']['timeout'] = 0x2710, ali6d['once'](Laya['Event']['COMPLETE'], this, i62dal), ali6d['once'](Laya['Event']['ERROR'], this, f4g9), ali6d['send'](fid21, ozg8h, xfw19, 'text');
  }, obh['prototype']['postSidebarApi'] = function () {
    var u_ekn = o_zr8cpm['sygame']['openid'],
        pz8m = '&channel=' + o_zr8cpm['sygame']['channel'] + '&wecha_id=' + u_ekn;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + pz8m, this['completeHandler'], this['errorHandler']);
  }, obh['prototype']['getBoxCheckoutCode'] = function () {
    var fw1i2 = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': fw1i2 });
  }, obh['prototype']['getBoxCheckoutCodeRes'] = function (d3vl) {
    var $_0ky = JSON['parse'](d3vl);console['log']('getBoxCheckoutCode:', $_0ky);if ($_0ky['status'] == 0x3e9) {
      var mc5r = $_0ky['info'];mc5r == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + $_0ky);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + $_0ky);
  }, obh['prototype']['completeHandler'] = function (_kyeu) {
    var qpmtr5 = JSON['parse'](_kyeu);console['log'](qpmtr5);switch (qpmtr5['status']) {case 0x3e9:
        var aunl3 = [];qpmtr5['msg']['basics_image_url'] && aunl3['push']({ 'url': qpmtr5['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['public_code'] && aunl3['push']({ 'url': qpmtr5['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['vip_customer_service'] && aunl3['push']({ 'url': qpmtr5['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['vip_customer_service_not_add'] && aunl3['push']({ 'url': qpmtr5['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['game_center_image_url'] && aunl3['push']({ 'url': qpmtr5['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['vip_qrcode'] && aunl3['push']({ 'url': qpmtr5['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['getIcon'] && aunl3['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), qpmtr5['msg']['copyIcon'] && aunl3['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var i9w12f = 0x0, ad6lv2 = qpmtr5['msg']['follow_gift_list']; i9w12f < ad6lv2['length']; i9w12f++) {
          var w1f2i9 = ad6lv2[i9w12f];aunl3['push']({ 'url': w1f2i9['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var l2dai = 0x0, bp8hcz = qpmtr5['msg']['vip_box_list']; l2dai < bp8hcz['length']; l2dai++) {
          var w1f2i9 = bp8hcz[l2dai];aunl3['push']({ 'url': w1f2i9['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var wf4x9g = 0x0; wf4x9g < aunl3['length']; wf4x9g++) {
          o_zr8cpm['setResMap'](aunl3[wf4x9g]['url'], o_zr8cpm['getTimeStamp']()), aunl3[wf4x9g]['url'] = o_zr8cpm['getResMap'](aunl3[wf4x9g]['url']);
        }Laya['loader']['load'](aunl3, Laya['Handler']['create'](this, this['initGame'])), this['data'] = qpmtr5['msg'];break;case 0x3ea:
        o_mrsq5t['msg']('空的游戏channel');break;case 0x3eb:
        o_mrsq5t['msg']('错误的游戏channel');break;case 0x3ec:
        o_mrsq5t['msg']('未找到对应游戏大类');break;case 0x3ed:
        o_mrsq5t['msg']('未设置侧边栏');break;}
  }, obh['prototype']['errorHandler'] = function (l3uvan) {}, obh['prototype']['initGame'] = function () {
    var w9fix = new o_nykeu_(this);w9fix['show']();
  }, obh;
}(),
    o_nykeu_ = function () {
  function zog4h(l26id) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = l26id;
  }return zog4h['prototype']['setChildMouseThroughs'] = function (yu_3n) {
    var fo49x = yu_3n['_childs'] || [];for (var p8zrhc = 0x0; p8zrhc < fo49x['length']; p8zrhc++) {
      fo49x[p8zrhc] && (fo49x[p8zrhc]['mouseThrough'] = !![]);
    }
  }, zog4h['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new o_mq57s['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var p5c8r = this['main']['_childs'] || [];for (var rmtqp = 0x0; rmtqp < p5c8r['length']; rmtqp++) {
        p5c8r[rmtqp]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), o_mrsq5t['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, zog4h['prototype']['initView'] = function () {
    var f9w21 = this,
        bzcho = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = bzcho;for (var pzcr8h = 0x1; pzcr8h <= this['tool']['data']['follow_gift_list']['length']; pzcr8h++) {
      var ct5rmp = this['tool']['data']['follow_gift_list'][pzcr8h - 0x1];this['main']['box_1_img_' + pzcr8h]['skin'] = ct5rmp['url'], this['main']['box_1_lab_' + pzcr8h]['text'] = ct5rmp['name'];
    }for (var pzcr8h = 0x1; pzcr8h <= this['tool']['data']['vip_box_list']['length']; pzcr8h++) {
      var ct5rmp = this['tool']['data']['vip_box_list'][pzcr8h - 0x1];this['main']['box_2_img_' + pzcr8h]['skin'] = ct5rmp['url'], this['main']['box_2_lab_' + pzcr8h]['text'] = ct5rmp['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (f9w21['rolePriceData']['is_vip'] == 0x0) {
        o_mrsq5t['msg']('请先获取vip资格');return;
      }f9w21['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], f9w21['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      f9w21['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (f9w21['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = f9w21['rolePriceData']['vip_qrcode'], f9w21['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      f9w21['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = f9w21['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, zog4h['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, zog4h['prototype']['initEvent'] = function () {
    var hozbg = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (hozbg['page'] == 0x1) return;hozbg['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (hozbg['page'] == 0x2) return;hozbg['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (hozbg['page'] == 0x3) return;hozbg['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      hozbg['main']['bg']['x'] = -0x2ee, hozbg['icon']['visible'] = !![];
    });
  }, zog4h['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, zog4h['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var da3v6 = _oAE['selectedServer']['server_id'],
        pm5tcr = _oAE['selectedServer']['server_name'],
        wf9i12 = _oAE['roleId'],
        f2wdi1 = _oAE['roleName'],
        rqtms = o_zr8cpm['sygame']['openid'],
        u_y0 = '&role_id=' + o_zr8cpm['sygame']['role_id'] + '&channel=' + o_zr8cpm['sygame']['channel'] + '&server_id=' + da3v6 + '&server_name=' + pm5tcr + '&wecha_id=' + rqtms + '&role_id=' + wf9i12 + '&role_name=' + f2wdi1;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + u_y0, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, zog4h['prototype']['page1'] = function () {
    this['page'] = 0x1, this['main']['bg']['skin'] = this['tool']['data']['public_code'], this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, zog4h['prototype']['page2'] = function () {
    this['page'] = 0x2, this['main']['bg']['skin'] = this['tool']['data']['vip_customer_service'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, zog4h['prototype']['page3'] = function () {
    this['page'] = 0x3, this['main']['bg']['skin'] = this['tool']['data']['game_center_image_url'], this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], o_hb4ox && o_hb4ox['syClickOpenBox']();
  }, zog4h['prototype']['getBoxList'] = function (y_u0ek) {
    var m5rptc = this;o_hb4ox && o_hb4ox['syGetBoxList']({ 'page': y_u0ek, 'count': 0xc })['then'](function (chz8rp) {
      var n_3uvy = chz8rp['data'];n_3uvy['status'] == 0x3e9 ? n_3uvy['data'] && n_3uvy['data']['length'] && (m5rptc['boxlist'] = m5rptc['boxlist']['concat'](n_3uvy['data']), y_u0ek++, m5rptc['getBoxList'](y_u0ek)) : m5rptc['boxListHandler']();
    });
  }, zog4h['prototype']['copyText'] = function (prmc) {
    try {
      wx['setClipboardData']({ 'data': prmc, 'success': function (s5rq) {
          console['log']('复制成功:', s5rq);
        } });
    } catch (di2w61) {}
  }, zog4h['prototype']['rolePriceHandler'] = function (je0) {
    this['rolePriceData'] = JSON['parse'](je0);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, zog4h['prototype']['roleError'] = function () {}, zog4h['prototype']['boxListHandler'] = function () {
    var bx9go4 = function (bhx4go) {
      var _kyneu = h8g['boxlist'][bhx4go],
          cpb8 = new o_mq57s['demoui']['BoxItemUI']();cpb8['icon']['skin'] = _kyneu['icon'], cpb8['title']['text'] = _kyneu['title'], cpb8['x'] = 0xa0 * (bhx4go % 0x3), cpb8['y'] = 0xa0 * (bhx4go / 0x3 ^ 0x0), h8g['main']['box_3_panel']['addChild'](cpb8);var _ek$0 = { 'appid': o_zr8cpm['sygame']['appid'], 'game_id': _kyneu['game_id'], 'jump_appid': _kyneu['jump_appid'], 'jump_path': _kyneu['jump_path'], 'tunnel_id': _kyneu['tunnel_id'], 'uv': 0x0, 'wecha_id': o_zr8cpm['sygame']['openid'] },
          dv63a = _kyneu['preview_img'],
          y_0ku = _kyneu['jump_type'],
          f4gxw = _kyneu['kf_session'];cpb8['on'](Laya['Event']['CLICK'], h8g, function () {
        o_hb4ox && o_hb4ox['syClickBox']({ 'game_id': _kyneu['game_id'], 'tunnel_id': _kyneu['tunnel_id'], 'jump_appid': _kyneu['jump_appid'], 'jump_path': _kyneu['jump_path'] })['then'](function (hpzrc) {
          if (y_0ku === '0') wx['navigateToMiniProgram']({ 'appId': _ek$0['jump_appid'], 'path': _ek$0['jump_path'], 'fail': function (y3ue_) {
              if (!dv63a) return;wx['previewImage']({ 'urls': [dv63a] });
            } });else {
            if (y_0ku === '1') {
              if (!dv63a) return;wx['previewImage']({ 'urls': [dv63a] });
            } else {
              if (y_0ku === '2') {
                if (!f4gxw) return;wx['openCustomerServiceConversation']({ 'sessionFrom': f4gxw, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        h8g = this;for (var lnva = 0x0; lnva < this['boxlist']['length']; lnva++) {
      bx9go4(lnva);
    }
  }, zog4h['prototype']['boxListError'] = function () {}, zog4h['prototype']['boxClickHandler'] = function () {}, zog4h['prototype']['iconPress'] = function (fx1w49) {
    this['donwX'] = fx1w49['target']['x'], this['donwY'] = fx1w49['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, zog4h['prototype']['iconMove'] = function (tpc5m) {
    this['isMove'] = !![];
  }, zog4h['prototype']['iconUp'] = function (g9xb) {
    var fgw9 = g9xb['target']['x'],
        f192i = g9xb['target']['y'];this['icon']['stopDrag'](), fgw9 == this['donwX'] && this['donwY'] == f192i && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, zog4h;
}(),
    o_mq57s;(function (yj$ek0) {
  var ch8bp;(function (x91fw) {
    var nu3va = function (dla62v) {
      o_ozch(r85cmp, dla62v);function r85cmp() {
        return dla62v['call'](this) || this;
      }return r85cmp['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), dla62v['prototype']['createChildren']['call'](this), this['createView'](yj$ek0['demoui']['BoxItemUI']['uiView']);
      }, r85cmp['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, r85cmp;
    }(laya['ui']['View']);x91fw['BoxItemUI'] = nu3va;
  })(ch8bp = yj$ek0['demoui'] || (yj$ek0['demoui'] = {}));
})(o_mq57s || (o_mq57s = {})), function (zbhg8) {
  var ynv3;(function (rzcpm) {
    var _3unlv = function (ai16d2) {
      o_ozch(fxog94, ai16d2);function fxog94() {
        return ai16d2['call'](this) || this;
      }return fxog94['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ai16d2['prototype']['createChildren']['call'](this), this['createView'](zbhg8['demoui']['MainUI']['uiView']);
      }, fxog94['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, fxog94;
    }(laya['ui']['View']);rzcpm['MainUI'] = _3unlv;
  })(ynv3 = zbhg8['demoui'] || (zbhg8['demoui'] = {}));
}(o_mq57s || (o_mq57s = {})), function (n3ual) {
  var nl3va6;(function (kuye_) {
    var uk_0e = function (l26i) {
      o_ozch(gox4bh, l26i);function gox4bh() {
        return l26i['call'](this) || this;
      }return gox4bh['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), l26i['prototype']['createChildren']['call'](this), this['createView'](n3ual['demoui']['ToastUI']['uiView']);
      }, gox4bh['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, gox4bh;
    }(laya['ui']['View']);kuye_['ToastUI'] = uk_0e;
  })(nl3va6 = n3ual['demoui'] || (n3ual['demoui'] = {}));
}(o_mq57s || (o_mq57s = {}));var o_mrsq5t = function () {
  function e0$jk() {}return e0$jk['init'] = function () {
    !this['ui'] && (this['ui'] = new o_mq57s['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, e0$jk['msg'] = function (hxb) {
    var fi9x1 = this;!this['ui'] && e0$jk['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = hxb, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      fi9x1['ui']['visible'] = ![];
    }, 0x7d0);
  }, e0$jk;
}();window['minitool'] = o_$0yk_;