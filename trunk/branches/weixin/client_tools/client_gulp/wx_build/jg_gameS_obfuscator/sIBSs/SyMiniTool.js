var K = wx.$S;
var szw09kc = this && this['__extends'] || function () {
  var imx_c2 = function (mx7nt, y5pqh) {
    return imx_c2 = Object['setPrototypeOf'] || { '__proto__': [] } instanceof Array && function (t2xnim, zov3kr) {
      t2xnim['__proto__'] = zov3kr;
    } || function ($y5dah, $hyda) {
      for (var mxn7t2 in $hyda) if ($hyda['hasOwnProperty'](mxn7t2)) $y5dah[mxn7t2] = $hyda[mxn7t2];
    }, imx_c2(mx7nt, y5pqh);
  };return function (ck9w0z, gpj81q) {
    imx_c2(ck9w0z, gpj81q);function jpsq1g() {
      this['constructor'] = ck9w0z;
    }ck9w0z['prototype'] = gpj81q === null ? Object['create'](gpj81q) : (jpsq1g['prototype'] = gpj81q['prototype'], new jpsq1g());
  };
}(),
    shyps5q = window['Sygame'],
    sqgyhp = ![],
    sed$45 = function () {
  function qb1g8() {}return qb1g8['init'] = function () {
    sqgyhp ? this['sygame'] = { 'channel': '3477d2273abd484ba2a0e04ad4971b3c', 'role_id': undefined, 'openid': 'oxmOf5biumkGash-Xht9FVAlswVk', 'appid': 'wx2936121c4817bf46' } : this['sygame'] = shyps5q;
  }, qb1g8['getTimeStamp'] = function () {
    return new Date()['getTime']();
  }, qb1g8['setResMap'] = function (o3u4e, pgy) {
    this['resMap'][o3u4e] = o3u4e + '?' + pgy;
  }, qb1g8['getResMap'] = function (cwk09z) {
    return this['resMap'][cwk09z];
  }, qb1g8['resMap'] = {}, qb1g8;
}(),
    spsjq1g = function () {
  function gj1s() {
    this['getIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png', this['copyIcon'] = 'https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png', sed$45['init'](), this['getBoxCheckoutCode']();
  }return gj1s['prototype']['send'] = function (m2xci_, gspqyh, i0mcx_, jb18g6, nim_x2) {
    jb18g6 === void 0x0 && (jb18g6 = 'get');nim_x2 === void 0x0 && (nim_x2 = '' || null);var sgpq1j = new Laya['HttpRequest']();sgpq1j['http']['timeout'] = 0x2710, sgpq1j['once'](Laya['Event']['COMPLETE'], this, gspqyh), sgpq1j['once'](Laya['Event']['ERROR'], this, i0mcx_), sgpq1j['send'](m2xci_, nim_x2, jb18g6, 'text');
  }, gj1s['prototype']['postSidebarApi'] = function () {
    var gsqyph = sed$45['sygame']['openid'],
        are4 = '&channel=' + sed$45['sygame']['channel'] + '&wecha_id=' + gsqyph;this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi' + are4, this['completeHandler'], this['errorHandler']);
  }, gj1s['prototype']['getBoxCheckoutCode'] = function () {
    var d5a4h = Sygame['SY_CONF']['commitId'];this['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode', this['getBoxCheckoutCodeRes'], this['errorHandler'], 'post', { 'commitId': d5a4h });
  }, gj1s['prototype']['getBoxCheckoutCodeRes'] = function (bj8gq) {
    var yqhsg = JSON['parse'](bj8gq);console['log']('getBoxCheckoutCode:', yqhsg);if (yqhsg['status'] == 0x3e9) {
      var pydh = yqhsg['info'];pydh == 0xfa1 ? this['postSidebarApi']() : console['error']('盛也盒子\x20不显示' + yqhsg);
    } else console['error']('盛也盒子 getBoxCheckoutCodeRes 其他错误' + yqhsg);
  }, gj1s['prototype']['completeHandler'] = function (j86bg1) {
    var ix2mn_ = JSON['parse'](j86bg1);console['log'](ix2mn_);switch (ix2mn_['status']) {case 0x3e9:
        var yqsph5 = [];ix2mn_['msg']['basics_image_url'] && yqsph5['push']({ 'url': ix2mn_['msg']['basics_image_url'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['public_code'] && yqsph5['push']({ 'url': ix2mn_['msg']['public_code'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['vip_customer_service'] && yqsph5['push']({ 'url': ix2mn_['msg']['vip_customer_service'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['vip_customer_service_not_add'] && yqsph5['push']({ 'url': ix2mn_['msg']['vip_customer_service_not_add'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['game_center_image_url'] && yqsph5['push']({ 'url': ix2mn_['msg']['game_center_image_url'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['vip_qrcode'] && yqsph5['push']({ 'url': ix2mn_['msg']['vip_qrcode'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['getIcon'] && yqsph5['push']({ 'url': this['getIcon'], 'type': Laya['Loader']['IMAGE'] }), ix2mn_['msg']['copyIcon'] && yqsph5['push']({ 'url': this['copyIcon'], 'type': Laya['Loader']['IMAGE'] });for (var hsdp = 0x0, p8jq1 = ix2mn_['msg']['follow_gift_list']; hsdp < p8jq1['length']; hsdp++) {
          var dahsy = p8jq1[hsdp];yqsph5['push']({ 'url': dahsy['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var psgq1j = 0x0, jpqsg1 = ix2mn_['msg']['vip_box_list']; psgq1j < jpqsg1['length']; psgq1j++) {
          var dahsy = jpqsg1[psgq1j];yqsph5['push']({ 'url': dahsy['url'], 'type': Laya['Loader']['IMAGE'] });
        }for (var kvw9o = 0x0; kvw9o < yqsph5['length']; kvw9o++) {
          sed$45['setResMap'](yqsph5[kvw9o]['url'], sed$45['getTimeStamp']()), yqsph5[kvw9o]['url'] = sed$45['getResMap'](yqsph5[kvw9o]['url']);
        }Laya['loader']['load'](yqsph5, Laya['Handler']['create'](this, this['initGame'])), this['data'] = ix2mn_['msg'];break;case 0x3ea:
        sg18qj['msg']('空的游戏channel');break;case 0x3eb:
        sg18qj['msg']('错误的游戏channel');break;case 0x3ec:
        sg18qj['msg']('未找到对应游戏大类');break;case 0x3ed:
        sg18qj['msg']('未设置侧边栏');break;}
  }, gj1s['prototype']['errorHandler'] = function (a4d$5) {}, gj1s['prototype']['initGame'] = function () {
    var mxc_ = new s_wk0(this);mxc_['show']();
  }, gj1s;
}(),
    s_wk0 = function () {
  function ydhs(mtn) {
    this['page'] = 0x3, this['rolePriceData'] = {}, this['boxlist'] = [], this['donwX'] = 0x0, this['downY'] = 0x0, this['tool'] = mtn;
  }return ydhs['prototype']['setChildMouseThroughs'] = function (_0ckw9) {
    var q5shp = _0ckw9['_childs'] || [];for (var erau4$ = 0x0; erau4$ < q5shp['length']; erau4$++) {
      q5shp[erau4$] && (q5shp[erau4$]['mouseThrough'] = !![]);
    }
  }, ydhs['prototype']['show'] = function () {
    if (this['tool']['data']['on'] === '1') {
      this['main'] = new sqjgysp['demoui']['MainUI'](), Laya['stage']['addChild'](this['main']), this['main']['mouseThrough'] = !![];var qgpshy = this['main']['_childs'] || [];for (var ourz3v = 0x0; ourz3v < qgpshy['length']; ourz3v++) {
        qgpshy[ourz3v]['mouseThrough'] = !![];
      }this['setChildMouseThroughs'](this['main']['_childs']), this['setChildMouseThroughs'](this['main']['_childs'][0x0]), this['initIcon'](), this['initEvent'](), this['initView'](), sg18qj['init'](), this['main']['bg']['x'] = -0x2ee;
    }
  }, ydhs['prototype']['initView'] = function () {
    var d4a$5 = this,
        de54$a = this['tool']['data']['follow_down_words']['replace'](/\\n/g, '\x0a');this['main']['box_1_lab_info']['text'] = de54$a;for (var sh5yd = 0x1; sh5yd <= this['tool']['data']['follow_gift_list']['length']; sh5yd++) {
      var w9kzov = this['tool']['data']['follow_gift_list'][sh5yd - 0x1];this['main']['box_1_img_' + sh5yd]['skin'] = w9kzov['url'], this['main']['box_1_lab_' + sh5yd]['text'] = w9kzov['name'];
    }for (var sh5yd = 0x1; sh5yd <= this['tool']['data']['vip_box_list']['length']; sh5yd++) {
      var w9kzov = this['tool']['data']['vip_box_list'][sh5yd - 0x1];this['main']['box_2_img_' + sh5yd]['skin'] = w9kzov['url'], this['main']['box_2_lab_' + sh5yd]['text'] = w9kzov['name'];
    }this['main']['box_2_lab_m_1']['text'] = '方法一：单日充值' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_m_2']['text'] = '方法二：历史累计充值' + +this['tool']['data']['y'] + '元', this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元', this['main']['box_2_btn_copy']['skin'] = this['tool']['copyIcon'], this['main']['box_2_btn_get']['skin'] = this['tool']['getIcon'], this['main']['box_2_btn_copy']['visible'] = ![], this['main']['box_2_btn_get']['on'](Laya['Event']['CLICK'], this, function () {
      if (d4a$5['rolePriceData']['is_vip'] == 0x0) {
        sg18qj['msg']('请先获取vip资格');return;
      }d4a$5['main']['box_2_lab_wx']['text'] = this['rolePriceData']['vip_wx'], d4a$5['main']['box_2_btn_copy']['visible'] = !![];
    }), this['main']['box_2_btn_copy']['on'](Laya['Event']['CLICK'], this, function () {
      d4a$5['copyText'](this['rolePriceData']['vip_wx']);
    }), this['main']['box_2_addclick']['on'](Laya['Event']['CLICK'], this, function () {
      if (d4a$5['rolePriceData']['is_vip'] == 0x0) return;this['main']['box_help_qrcode']['skin'] = d4a$5['rolePriceData']['vip_qrcode'], d4a$5['main']['box_help']['visible'] = !![];
    }), this['main']['box_help_close']['on'](Laya['Event']['CLICK'], this, function () {
      d4a$5['main']['box_help']['visible'] = ![];
    }), this['main']['box_help_bg']['skin'] = this['tool']['data']['vip_customer_service_not_add'], this['main']['box_help_qrcode']['skin'] = d4a$5['rolePriceData']['vip_qrcode'], this['main']['box_help_qrcode']['scaleX'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_help_qrcode']['scaleY'] = 0xa0 / this['main']['box_help_qrcode']['width'], this['main']['box_3_panel']['vScrollBar']['visible'] = ![], this['main']['box_3_panel']['vScrollBarSkin'] = 'common_atlas/scrollBar.png';
  }, ydhs['prototype']['initIcon'] = function () {
    this['icon'] = new Laya['Image'](), this['icon']['skin'] = this['tool']['data']['basics_image_url'], this['icon']['x'] = 0x0, this['icon']['y'] = 0xc8, this['icon']['width'] = 0x66, this['icon']['height'] = 0x6f, this['main']['addChild'](this['icon']), this['icon']['on'](Laya['Event']['MOUSE_DOWN'], this, this['iconPress']), this['icon']['on'](Laya['Event']['MOUSE_UP'], this, this['iconUp']), this['icon']['on'](Laya['Event']['MOUSE_WHEEL'], this, this['iconMove']), this['dragRect'] = new Laya['Rectangle'](-this['icon']['width'] / 0x2, 0x0, Laya['stage']['width'], Laya['stage']['height'] - this['icon']['height'] / 0x2);
  }, ydhs['prototype']['initEvent'] = function () {
    var fbl18 = this;this['main']['btn_1']['on'](Laya['Event']['CLICK'], this, function () {
      if (fbl18['page'] == 0x1) return;fbl18['page1']();
    }), this['main']['btn_2']['on'](Laya['Event']['CLICK'], this, function () {
      if (fbl18['page'] == 0x2) return;fbl18['page2']();
    }), this['main']['btn_3']['on'](Laya['Event']['CLICK'], this, function () {
      if (fbl18['page'] == 0x3) return;fbl18['page3']();
    }), this['main']['btn_close']['on'](Laya['Event']['CLICK'], this, function () {
      fbl18['main']['bg']['x'] = -0x2ee, fbl18['icon']['visible'] = !![];
    });
  }, ydhs['prototype']['initBoard'] = function () {
    this['isInitBoard'] = !![], this['page1']();
  }, ydhs['prototype']['showBoard'] = function () {
    this['main']['bg']['x'] = 0x0, this['icon']['visible'] = ![];var psqgyh = s1X4['selectedServer']['server_id'],
        xic_2m = s1X4['selectedServer']['server_name'],
        oev3ur = s1X4['roleId'],
        qp = s1X4['roleName'],
        jb618l = sed$45['sygame']['openid'],
        b8j1gq = '&role_id=' + sed$45['sygame']['role_id'] + '&channel=' + sed$45['sygame']['channel'] + '&server_id=' + psqgyh + '&server_name=' + xic_2m + '&wecha_id=' + jb618l + '&role_id=' + oev3ur + '&role_name=' + qp;this['tool']['send']('https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId' + b8j1gq, this['rolePriceHandler']['bind'](this), this['roleError']['bind'](this));
  }, ydhs['prototype']['page1'] = function () {
     if(!ydhs.prototype.page1Bg){
            ydhs.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
            this.main.bg.addChildAt(ydhs.prototype.page1Bg,0)
        }
        if(ydhs.prototype.page1Bg) ydhs.prototype.page1Bg.visible = true; 
        if(ydhs.prototype.page2Bg) ydhs.prototype.page2Bg.visible = false; 
        if(ydhs.prototype.page3Bg) ydhs.prototype.page3Bg.visible = false;      
    this['page'] = 0x1,  this['main']['box_1_show']['visible'] = !![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = ![];
  }, ydhs['prototype']['page2'] = function () {
    if(!ydhs.prototype.page2Bg){
      ydhs.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
      this.main.bg.addChildAt(ydhs.prototype.page2Bg,0)
  }
  if(ydhs.prototype.page1Bg) ydhs.prototype.page1Bg.visible = false; 
  if(ydhs.prototype.page2Bg) ydhs.prototype.page2Bg.visible = true; 
  if(ydhs.prototype.page3Bg) ydhs.prototype.page3Bg.visible = false;    
    this['page'] = 0x2, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = !![], this['main']['box_3_show']['visible'] = ![];
  }, ydhs['prototype']['page3'] = function () {
    if(!ydhs.prototype.page3Bg){
      ydhs.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
      this.main.bg.addChildAt(ydhs.prototype.page3Bg,0)
  }
  if(ydhs.prototype.page1Bg) ydhs.prototype.page1Bg.visible = false; 
  if(ydhs.prototype.page2Bg) ydhs.prototype.page2Bg.visible = false; 
  if(ydhs.prototype.page3Bg) ydhs.prototype.page3Bg.visible = true; 
    this['page'] = 0x3, this['main']['box_1_show']['visible'] = ![], this['main']['box_2_show']['visible'] = ![], this['main']['box_3_show']['visible'] = !![], this['sendBox'] || this['getBoxList'](0x0), this['sendBox'] = !![], shyps5q && shyps5q['syClickOpenBox']();
  }, ydhs['prototype']['getBoxList'] = function (mi2_n) {
    var rzk3ov = this;shyps5q && shyps5q['syGetBoxList']({ 'page': mi2_n, 'count': 0xc })['then'](function (gpjqy) {
      var j186bl = gpjqy['data'];j186bl['status'] == 0x3e9 ? j186bl['data'] && j186bl['data']['length'] && (rzk3ov['boxlist'] = rzk3ov['boxlist']['concat'](j186bl['data']), mi2_n++, rzk3ov['getBoxList'](mi2_n)) : rzk3ov['boxListHandler']();
    });
  }, ydhs['prototype']['copyText'] = function (a4eru$) {
    try {
      wx['setClipboardData']({ 'data': a4eru$, 'success': function (_wkc0) {
          console['log']('复制成功:', _wkc0);
        } });
    } catch (hday) {}
  }, ydhs['prototype']['rolePriceHandler'] = function (r3zvo) {
    this['rolePriceData'] = JSON['parse'](r3zvo);switch (this['rolePriceData']['status']) {case 0x3e9:
        this['main']['box_2_lab_v_1']['text'] = (this['rolePriceData']['todayPrice'] || 0x0) + '/' + +this['tool']['data']['x'] + '元', this['main']['box_2_lab_v_2']['text'] = (this['rolePriceData']['allPrice'] || 0x0) + '/' + +this['tool']['data']['y'] + '元';break;case 0x3ea:
        break;case 0x3eb:
        break;}
  }, ydhs['prototype']['roleError'] = function () {}, ydhs['prototype']['boxListHandler'] = function () {
    var ahd5s = function (xi2tmn) {
      var js1g = e3vor['boxlist'][xi2tmn],
          s5hpd = new sqjgysp['demoui']['BoxItemUI']();s5hpd['icon']['skin'] = js1g['icon'], s5hpd['title']['text'] = js1g['title'], s5hpd['x'] = 0xa0 * (xi2tmn % 0x3), s5hpd['y'] = 0xa0 * (xi2tmn / 0x3 ^ 0x0), e3vor['main']['box_3_panel']['addChild'](s5hpd);var pqyh5 = { 'appid': sed$45['sygame']['appid'], 'game_id': js1g['game_id'], 'jump_appid': js1g['jump_appid'], 'jump_path': js1g['jump_path'], 'tunnel_id': js1g['tunnel_id'], 'uv': 0x0, 'wecha_id': sed$45['sygame']['openid'] },
          r4u3oe = js1g['preview_img'],
          qpyjs = js1g['jump_type'],
          c0x = js1g['kf_session'];s5hpd['on'](Laya['Event']['CLICK'], e3vor, function () {
        shyps5q && shyps5q['syClickBox']({ 'game_id': js1g['game_id'], 'tunnel_id': js1g['tunnel_id'], 'jump_appid': js1g['jump_appid'], 'jump_path': js1g['jump_path'] })['then'](function (xi2ntm) {
          if (qpyjs === '0') wx['navigateToMiniProgram']({ 'appId': pqyh5['jump_appid'], 'path': pqyh5['jump_path'], 'fail': function (sqhy5) {
              if (!r4u3oe) return;wx['previewImage']({ 'urls': [r4u3oe] });
            } });else {
            if (qpyjs === '1') {
              if (!r4u3oe) return;wx['previewImage']({ 'urls': [r4u3oe] });
            } else {
              if (qpyjs === '2') {
                if (!c0x) return;wx['openCustomerServiceConversation']({ 'sessionFrom': c0x, 'showMessageCard': !![], 'sendMessageTitle': '', 'sendMessagePath': '', 'sendMessageImg': '' });
              }
            }
          }
        });
      });
    },
        e3vor = this;for (var z9wkc0 = 0x0; z9wkc0 < this['boxlist']['length']; z9wkc0++) {
      ahd5s(z9wkc0);
    }
  }, ydhs['prototype']['boxListError'] = function () {}, ydhs['prototype']['boxClickHandler'] = function () {}, ydhs['prototype']['iconPress'] = function (imtn2x) {
    this['donwX'] = imtn2x['target']['x'], this['donwY'] = imtn2x['target']['y'], this['icon']['startDrag'](this['dragRect']), this['isMove'] = ![], this['isPress'] = !![];
  }, ydhs['prototype']['iconMove'] = function (jgpysq) {
    this['isMove'] = !![];
  }, ydhs['prototype']['iconUp'] = function (v9wz) {
    var z09vwk = v9wz['target']['x'],
        $ua4ed = v9wz['target']['y'];this['icon']['stopDrag'](), z09vwk == this['donwX'] && this['donwY'] == $ua4ed && (this['isInitBoard'] || this['initBoard'](), this['showBoard']()), this['isMove'] = ![], this['isPress'] = ![];
  }, ydhs;
}(),
    sqjgysp;(function (ci0m_x) {
  var im2_xn;(function (yghsqp) {
    var jyqpg = function (ygsjp) {
      szw09kc(b1qg8, ygsjp);function b1qg8() {
        return ygsjp['call'](this) || this;
      }return b1qg8['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), ygsjp['prototype']['createChildren']['call'](this), this['createView'](ci0m_x['demoui']['BoxItemUI']['uiView']);
      }, b1qg8['uiView'] = { 'type': 'View', 'props': { 'width': 0xb4, 'height': 0xa0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x3, 'x': 0x20, 'width': 0x73, 'var': 'icon', 'height': 0x73 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x79, 'x': -0x21, 'width': 0xb4, 'var': 'title', 'valign': 'middle', 'height': 0x22, 'fontSize': 0x16, 'color': '#441d1c', 'align': 'center' } }] }] }, b1qg8;
    }(laya['ui']['View']);yghsqp['BoxItemUI'] = jyqpg;
  })(im2_xn = ci0m_x['demoui'] || (ci0m_x['demoui'] = {}));
})(sqjgysp || (sqjgysp = {})), function (da5hsy) {
  var eo;(function (v90zwk) {
    var _2xicm = function (kvo93) {
      szw09kc(yhs5d, kvo93);function yhs5d() {
        return kvo93['call'](this) || this;
      }return yhs5d['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), kvo93['prototype']['createChildren']['call'](this), this['createView'](da5hsy['demoui']['MainUI']['uiView']);
      }, yhs5d['uiView'] = { 'type': 'View', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'top': 0x0, 'right': 0x0, 'left': 0x0, 'height': 0x536, 'bottom': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x2ee, 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'width': 0x2ee, 'var': 'bg', 'height': 0x536 }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_1_show', 'height': 0x536, 'centerY': 0x0 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x253, 'x': 0x2e, 'width': 0x1d0, 'var': 'box_1_lab_info', 'leading': 0xa, 'height': 0x97, 'fontSize': 0x18, 'color': '#a959ee' } }, { 'type': 'HBox', 'props': { 'y': 0x2ee, 'x': 0x14, 'width': 0x1fe, 'space': 0x35, 'height': 0x78, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'width': 0x58, 'var': 'box_1_img_1', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_1', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xa, 'x': 0xa, 'width': 0x58, 'var': 'box_1_img_2', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_2', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x14, 'x': 0x14, 'width': 0x58, 'var': 'box_1_img_3', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_3', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x1e, 'x': 0x1e, 'width': 0x58, 'var': 'box_1_img_4', 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x60, 'x': -0x10, 'width': 0x77, 'var': 'box_1_lab_4', 'height': 0x16, 'fontSize': 0x12, 'color': '#a959ee', 'align': 'center' } }] }] }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_2_show' }, 'child': [{ 'type': 'HBox', 'props': { 'y': 0x220, 'x': 0x18, 'width': 0x1f4, 'space': 0x2c, 'height': 0x56, 'align': 'top' }, 'child': [{ 'type': 'Image', 'props': { 'y': 2.5, 'x': 0x0, 'width': 0x58, 'var': 'box_2_img_1', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_1', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0xc, 'x': 0xa, 'width': 0x58, 'var': 'box_2_img_2', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_2', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x16, 'x': 0x14, 'width': 0x58, 'var': 'box_2_img_3', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_3', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x20, 'x': 0x1e, 'width': 0x58, 'var': 'box_2_img_4', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_4', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }, { 'type': 'Image', 'props': { 'y': 0x2a, 'x': 0x28, 'width': 0x58, 'var': 'box_2_img_5', 'scaleY': 0.74, 'scaleX': 0.74, 'height': 0x58 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x5f, 'x': -0x1b, 'width': 0x8f, 'var': 'box_2_lab_5', 'height': 0x1a, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'center' } }] }] }, { 'type': 'Box', 'props': { 'y': 0x384, 'x': 0x0, 'width': 0x221, 'height': 0x44 }, 'child': [{ 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_1', 'text': '方法一\uFF1A单日充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x28, 'width': 0x122, 'var': 'box_2_lab_m_2', 'text': '方法一\uFF1A历史累计充值1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300' } }, { 'type': 'Text', 'props': { 'y': 0x0, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_1', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }, { 'type': 'Text', 'props': { 'y': 0x1e, 'x': 0x141, 'width': 0xa4, 'var': 'box_2_lab_v_2', 'text': '1000/1000元', 'height': 0x1d, 'fontSize': 0x14, 'color': '#ff0300', 'align': 'right' } }] }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_get', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Image', 'props': { 'y': 0x1aa, 'x': 0x159, 'width': 0x66, 'var': 'box_2_btn_copy', 'stateNum': 0x1, 'height': 0x26 } }, { 'type': 'Button', 'props': { 'y': 0x1d2, 'x': 0x126, 'width': 0xc9, 'var': 'box_2_addclick', 'stateNum': 0x1, 'height': 0x1b } }, { 'type': 'Text', 'props': { 'y': 0x13c, 'x': 0x17a, 'width': 0xa3, 'var': 'box_2_lab_wx', 'height': 0x1f, 'fontSize': 0x1a, 'color': '#a959ee', 'align': 'left' } }] }, { 'type': 'Image', 'props': { 'y': 0x0, 'x': 0x0, 'visible': ![], 'var': 'box_3_show' }, 'child': [{ 'type': 'Panel', 'props': { 'y': 0xf5, 'x': 0x10, 'width': 0x201, 'var': 'box_3_panel', 'vScrollBarSkin': '', 'height': 0x29e } }] }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x0, 'width': 0xbb, 'var': 'btn_1', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0xba, 'width': 0xbb, 'var': 'btn_2', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x3c8, 'x': 0x177, 'width': 0xbb, 'var': 'btn_3', 'height': 0x57 } }, { 'type': 'Button', 'props': { 'y': 0x203, 'x': 0x22e, 'width': 0x25, 'var': 'btn_close', 'height': 0x8f } }, { 'type': 'Box', 'props': { 'width': 0x2ee, 'visible': ![], 'var': 'box_help', 'height': 0x536 }, 'child': [{ 'type': 'Sprite', 'props': { 'y': 0x0, 'x': 0x0, 'mouseThrough': ![], 'alpha': 0.7 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x2ee, 'lineWidth': 0x1, 'height': 0x536, 'fillColor': '#000000' } }] }, { 'type': 'Image', 'props': { 'y': 0x158, 'x': 0x28, 'width': 0x1d2, 'var': 'box_help_bg', 'height': 0x203 }, 'child': [{ 'type': 'Button', 'props': { 'y': -0x1, 'x': 0x1a0, 'width': 0x33, 'var': 'box_help_close', 'height': 0x28 } }, { 'type': 'Image', 'props': { 'y': 0x3f, 'x': 0x98, 'width': 0xa0, 'var': 'box_help_qrcode', 'height': 0xa0 } }] }] }] }] }] }, yhs5d;
    }(laya['ui']['View']);v90zwk['MainUI'] = _2xicm;
  })(eo = da5hsy['demoui'] || (da5hsy['demoui'] = {}));
}(sqjgysp || (sqjgysp = {})), function (n2t7m) {
  var r43u$;(function (jsgp1q) {
    var s1g = function (x2ni_m) {
      szw09kc(c9wk0_, x2ni_m);function c9wk0_() {
        return x2ni_m['call'](this) || this;
      }return c9wk0_['prototype']['createChildren'] = function () {
        laya['ui']['View']['regComponent']('Text', laya['display']['Text']), x2ni_m['prototype']['createChildren']['call'](this), this['createView'](n2t7m['demoui']['ToastUI']['uiView']);
      }, c9wk0_['uiView'] = { 'type': 'View', 'props': { 'width': 0x2ee, 'height': 0x536 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerY': 0x0, 'centerX': 0x0 }, 'child': [{ 'type': 'Box', 'props': { 'width': 0x12c, 'height': 0x32, 'centerX': 0x0, 'alpha': 0.5 }, 'child': [{ 'type': 'Rect', 'props': { 'width': 0x12c, 'lineWidth': 0x1, 'height': 0x32, 'fillColor': '#382f2f' } }] }, { 'type': 'Text', 'props': { 'width': 0x12c, 'var': 'lab_msg', 'valign': 'middle', 'text': 'text', 'height': 0x32, 'fontSize': 0x18, 'color': '#ffffff', 'align': 'center' } }] }] }, c9wk0_;
    }(laya['ui']['View']);jsgp1q['ToastUI'] = s1g;
  })(r43u$ = n2t7m['demoui'] || (n2t7m['demoui'] = {}));
}(sqjgysp || (sqjgysp = {}));var sg18qj = function () {
  function sjgyp() {}return sjgyp['init'] = function () {
    !this['ui'] && (this['ui'] = new sqjgysp['demoui']['ToastUI'](), this['ui']['visible'] = ![], Laya['stage']['addChild'](this['ui']));
  }, sjgyp['msg'] = function (e4$aur) {
    var ozk9vw = this;!this['ui'] && sjgyp['init'](), this['ui']['visible'] = !![], this['ui']['lab_msg']['text'] = e4$aur, clearTimeout(this['interval']), this['interval'] = setTimeout(function () {
      ozk9vw['ui']['visible'] = ![];
    }, 0x7d0);
  }, sjgyp;
}();window['minitool'] = spsjq1g;