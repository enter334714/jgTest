var k = wx.$f;
(function (window, document, equ59a) {
  var fcy6jw = equ59a['un'],
      umxh = equ59a['uns'],
      rn_4b = equ59a['static'],
      hmux = equ59a['class'],
      mehx7 = equ59a['getset'],
      f218ws = equ59a['__newvec'],
      a9u5e = laya['utils']['Browser'],
      tvq5pa = laya['events']['Event'],
      ry04_n = laya['events']['EventDispatcher'],
      w1jfc6 = laya['resource']['HTMLImage'],
      h7ezm = laya['utils']['Handler'],
      jywf = laya['display']['Input'],
      cf1w28 = laya['net']['Loader'],
      uxmh9 = laya['maths']['Matrix'],
      rk_i = laya['renders']['Render'],
      yj6fwc = laya['utils']['RunDriver'],
      rnki = laya['media']['Sound'],
      mzxhe7 = laya['media']['SoundChannel'],
      ny460j = laya['media']['SoundManager'],
      pva5u = laya['display']['Stage'],
      jwy0 = laya['net']['URL'],
      iob_3k = laya['utils']['Utils'],
      pq5va = function () {
    function wf2c8() {}return hmux(wf2c8, 'laya.wx.mini.MiniAdpter'), wf2c8['getJson'] = function (a9um5) {
      return JSON['parse'](a9um5);
    }, wf2c8['init'] = function (r4b_0, in_krb) {
      r4b_0 === void 0x0 && (r4b_0 = ![]), in_krb === void 0x0 && (in_krb = ![]);if (wf2c8['_inited']) return;wf2c8['window'] = window;if (wf2c8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wf2c8['_inited'] = !![], wf2c8['isZiYu'] = in_krb, wf2c8['isPosMsgYu'] = r4b_0, wf2c8['EnvConfig'] = {}, !wf2c8['isZiYu'] && (yfw6c['setNativeFileDir']('/layaairGame'), yfw6c['existDir'](yfw6c['fileNativeDir'], h7ezm['create'](wf2c8, wf2c8['onMkdirCallBack']))), wf2c8['window']['focus'] = function () {}, equ59a['getUrlPath'] = function () {}, wf2c8['window']['logtime'] = function (jw6yc0) {}, wf2c8['window']['alertTimeLog'] = function ($k3boi) {}, wf2c8['window']['resetShareInfo'] = function () {}, wf2c8['window']['CanvasRenderingContext2D'] = function () {}, wf2c8['window']['CanvasRenderingContext2D']['prototype'] = wf2c8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wf2c8['window']['document']['body']['appendChild'] = function () {}, wf2c8['EnvConfig']['pixelRatioInt'] = 0x0, yj6fwc['getPixelRatio'] = wf2c8['pixelRatio'], wf2c8['_preCreateElement'] = a9u5e['createElement'], a9u5e['createElement'] = wf2c8['createElement'], yj6fwc['createShaderCondition'] = wf2c8['createShaderCondition'], iob_3k['parseXMLFromString'] = wf2c8['parseXMLFromString'], jywf['_createInputElement'] = qptsvd['_createInputElement'], wf2c8['EnvConfig']['load'] = cf1w28['prototype']['load'], cf1w28['prototype']['load'] = kgo$['prototype']['load'], wf2c8['isZiYu'] && r4b_0 && wx['onMessage'](function (obi3_) {
        obi3_['isLoad'] && (yfw6c['ziyuFileData'][obi3_['url']] = obi3_['data']);
      });
    }, wf2c8['onMkdirCallBack'] = function (wc812, qtv5a) {
      if (!wc812) yfw6c['filesListObj'] = JSON['parse'](qtv5a['data']);
    }, wf2c8['pixelRatio'] = function () {
      if (!wf2c8['EnvConfig']['pixelRatioInt']) try {
        var f1cwj6 = wx['getSystemInfoSync']();return wf2c8['EnvConfig']['pixelRatioInt'] = f1cwj6['pixelRatio'], f1cwj6 = f1cwj6, f1cwj6['pixelRatio'];
      } catch ($i3og) {}return wf2c8['EnvConfig']['pixelRatioInt'];
    }, wf2c8['createElement'] = function (qvs) {
      if (qvs == 'canvas') {
        var mz9x;return wf2c8['idx'] == 0x1 ? wf2c8['isZiYu'] ? (mz9x = sharedCanvas, mz9x['style'] = {}) : mz9x = window['canvas'] : mz9x = window['wx']['createCanvas'](), wf2c8['idx']++, mz9x;
      } else {
        if (qvs == 'textarea' || qvs == 'input') return wf2c8['onCreateInput'](qvs);else {
          if (qvs == 'div') {
            var ehxm = wf2c8['_preCreateElement'](qvs);return ehxm['contains'] = function (inbr_) {
              return null;
            }, ehxm['removeChild'] = function (sdpt) {}, ehxm;
          } else return wf2c8['_preCreateElement'](qvs);
        }
      }
    }, wf2c8['onCreateInput'] = function (yjf6w) {
      var o$kg3i = wf2c8['_preCreateElement'](yjf6w);return o$kg3i['focus'] = qptsvd['wxinputFocus'], o$kg3i['blur'] = qptsvd['wxinputblur'], o$kg3i['style'] = {}, o$kg3i['value'] = 0x0, o$kg3i['parentElement'] = {}, o$kg3i['placeholder'] = {}, o$kg3i['type'] = {}, o$kg3i['setColor'] = function (sd182t) {}, o$kg3i['setType'] = function (n4ry_0) {}, o$kg3i['setFontFace'] = function (tap5qv) {}, o$kg3i['addEventListener'] = function (cf82w) {}, o$kg3i['contains'] = function (d1s28t) {
        return null;
      }, o$kg3i['removeChild'] = function (e7hx) {}, o$kg3i;
    }, wf2c8['createShaderCondition'] = function (cw81fj) {
      var d1t2s8 = this,
          _3oik = function () {
        var n4_0b = cw81fj;return d1t2s8[cw81fj['replace']('this.', '')];
      };return _3oik;
    }, wf2c8['EnvConfig'] = null, wf2c8['window'] = null, wf2c8['_preCreateElement'] = null, wf2c8['_inited'] = ![], wf2c8['wxRequest'] = null, wf2c8['systemInfo'] = null, wf2c8['version'] = '0.0.1', wf2c8['isZiYu'] = ![], wf2c8['isPosMsgYu'] = ![], wf2c8['parseXMLFromString'] = function (rb04_) {
      var bki3r_, w1fjc;rb04_ = rb04_['replace'](/>\s+</g, '><');try {
        bki3r_ = new window['Parser']['DOMParser']()['parseFromString'](rb04_, 'text/xml');
      } catch (krb) {
        throw '需要引入xml解析库文件';
      }return bki3r_;
    }, wf2c8['idx'] = 0x1, wf2c8;
  }(),
      td8v = function () {
    function _n40b() {}hmux(_n40b, 'laya.wx.mini.MiniImage');var puvaq5 = _n40b['prototype'];return puvaq5['_loadImage'] = function (qdtp5) {
      var hz7xm = this,
          b3i_k = ![];qdtp5['indexOf']('layaNativeDir/') == -0x1 && (b3i_k = !![], qdtp5 = jwy0['formatURL'](qdtp5));if (!yfw6c['getFileInfo'](qdtp5)) {
        if (qdtp5['indexOf']('http://') != -0x1 || qdtp5['indexOf']('https://') != -0x1) yfw6c['downImg'](qdtp5, new h7ezm(_n40b, _n40b['onDownImgCallBack'], [qdtp5, hz7xm]), qdtp5);else _n40b['onCreateImage'](qdtp5, hz7xm, !![]);
      } else _n40b['onCreateImage'](qdtp5, hz7xm, !b3i_k);
    }, _n40b['onDownImgCallBack'] = function (kinrb, s821wf, i_k3bo) {
      if (!i_k3bo) _n40b['onCreateImage'](kinrb, s821wf);else s821wf['onError'](null);
    }, _n40b['onCreateImage'] = function (m7exhz, k_bnri, c81fw) {
      c81fw === void 0x0 && (c81fw = ![]);var b_r3k;if (!c81fw) {
        var x7em = yfw6c['getFileInfo'](m7exhz),
            humex9 = x7em['md5'];b_r3k = yfw6c['getFileNativePath'](humex9);
      } else b_r3k = m7exhz;if (k_bnri['imgCache'] == null) k_bnri['imgCache'] = {};var u9pq5;function j4n06() {
        u9pq5['onload'] = null, u9pq5['onerror'] = null, delete k_bnri['imgCache'][m7exhz];
      };var jn4y06 = function () {
        j4n06(), k_bnri['onLoaded'](u9pq5);
      },
          ry4_0n = function () {
        j4n06(), k_bnri['event']('error', 'Load image failed');
      };k_bnri['_type'] == 'nativeimage' ? (u9pq5 = new a9u5e['window']['Image'](), u9pq5['crossOrigin'] = '', u9pq5['onload'] = jn4y06, u9pq5['onerror'] = ry4_0n, u9pq5['src'] = b_r3k, k_bnri['imgCache'][m7exhz] = u9pq5) : new w1jfc6['create'](b_r3k, { 'onload': jn4y06, 'onerror': ry4_0n, 'onCreate': function (bkri_3) {
          u9pq5 = bkri_3, k_bnri['imgCache'][m7exhz] = bkri_3;
        } });
    }, _n40b;
  }(),
      qptsvd = function () {
    function u9pqa() {}return hmux(u9pqa, 'laya.wx.mini.MiniInput'), u9pqa['_createInputElement'] = function () {
      jywf['_initInput'](jywf['area'] = a9u5e['createElement']('textarea')), jywf['_initInput'](jywf['input'] = a9u5e['createElement']('input')), jywf['inputContainer'] = a9u5e['createElement']('div'), jywf['inputContainer']['style']['position'] = 'absolute', jywf['inputContainer']['style']['zIndex'] = 0x186a0, a9u5e['container']['appendChild'](jywf['inputContainer']), jywf['inputContainer']['setPos'] = function (s2vt8d, _knbri) {
        jywf['inputContainer']['style']['left'] = s2vt8d + 'px', jywf['inputContainer']['style']['top'] = _knbri + 'px';
      }, equ59a['stage']['on']('resize', null, u9pqa['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xze7m) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ny460j['_soundClass'] = n_ibkr, ny460j['_musicClass'] = n_ibkr;
    }, u9pqa['_onStageResize'] = function () {
      var inb4_ = equ59a['stage']['_canvasTransform']['identity']();inb4_['scale'](a9u5e['width'] / rk_i['canvas']['width'] / yj6fwc['getPixelRatio'](), a9u5e['height'] / rk_i['canvas']['height'] / yj6fwc['getPixelRatio']());
    }, u9pqa['wxinputFocus'] = function (nyr46) {
      var wyfcj6 = jywf['inputElement']['target'];if (wyfcj6 && !wyfcj6['editable']) return;pq5va['window']['wx']['offKeyboardConfirm'](), pq5va['window']['wx']['offKeyboardInput'](), pq5va['window']['wx']['showKeyboard']({ 'defaultValue': wyfcj6['text'], 'maxLength': wyfcj6['maxChars'], 'multiple': wyfcj6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (i_k3) {}, 'fail': function (j4y60n) {} }), pq5va['window']['wx']['onKeyboardConfirm'](function (jy604) {
        var ptqa5 = jy604 ? jy604['value'] : '';wyfcj6['text'] = ptqa5, wyfcj6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), pq5va['window']['wx']['onKeyboardInput'](function (_3biok) {
        var jfwc8 = _3biok ? _3biok['value'] : '';if (!wyfcj6['multiline']) {
          if (jfwc8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wyfcj6['text'] = jfwc8, wyfcj6['event']('input');
      });
    }, u9pqa['inputEnter'] = function () {
      jywf['inputElement']['target']['focus'] = ![];
    }, u9pqa['wxinputblur'] = function () {
      u9pqa['hideKeyboard']();
    }, u9pqa['hideKeyboard'] = function () {
      pq5va['window']['wx']['offKeyboardConfirm'](), pq5va['window']['wx']['offKeyboardInput'](), pq5va['window']['wx']['hideKeyboard']({ 'success': function (n60y) {
          console['log']('隐藏键盘');
        }, 'fail': function (f2cw18) {
          console['log']('隐藏键盘出错:' + (f2cw18 ? f2cw18['errMsg'] : ''));
        } });
    }, u9pqa;
  }(),
      kgo$ = function () {
    function yj64n0() {}hmux(yj64n0, 'laya.wx.mini.MiniLoader');var ik3b_o = yj64n0['prototype'];return ik3b_o['load'] = function (tq5, kr3ib_, c8fwj1, goki$3, o3kg$) {
      c8fwj1 === void 0x0 && (c8fwj1 = !![]), o3kg$ === void 0x0 && (o3kg$ = ![]);var u5qp9a = this;u5qp9a['_url'] = tq5;if (tq5['indexOf']('data:image') === 0x0) u5qp9a['_type'] = kr3ib_ = 'image';else u5qp9a['_type'] = kr3ib_ || (kr3ib_ = u5qp9a['getTypeFromUrl'](tq5));u5qp9a['_cache'] = c8fwj1, u5qp9a['_data'] = null;var apqv = 'ascii';if (tq5['indexOf']('.fnt') != -0x1) apqv = 'utf8';else kr3ib_ == 'arraybuffer' && (apqv = '');;var c6wyj0 = iob_3k['getFileExtension'](tq5);if (yj64n0['_fileTypeArr']['indexOf'](c6wyj0) != -0x1) pq5va['EnvConfig']['load']['call'](this, tq5, kr3ib_, c8fwj1, goki$3, o3kg$);else {
        if (!yfw6c['getFileInfo'](tq5)) {
          if (tq5['indexOf']('layaNativeDir/') != -0x1) {
            if (pq5va['isZiYu']) {
              var jy046n = yfw6c['ziyuFileData'][tq5];u5qp9a['onLoaded'](jy046n);return;
            } else {
              cosnole['log']('read read'), yfw6c['read'](tq5, apqv, new h7ezm(yj64n0, yj64n0['onReadNativeCallBack'], [apqv, tq5, kr3ib_, c8fwj1, goki$3, o3kg$, u5qp9a]));return;
            }
          }if (jwy0['rootPath'] == '') var v5ptqa = tq5;else v5ptqa = tq5['split'](jwy0['rootPath'])[0x0];tq5['indexOf']('http://') != -0x1 || tq5['indexOf']('https://') != -0x1 ? pq5va['EnvConfig']['load']['call'](u5qp9a, tq5, kr3ib_, c8fwj1, goki$3, o3kg$) : yfw6c['readFile'](v5ptqa, apqv, new h7ezm(yj64n0, yj64n0['onReadNativeCallBack'], [apqv, tq5, kr3ib_, c8fwj1, goki$3, o3kg$, u5qp9a]), tq5);
        } else pq5va['EnvConfig']['load']['call'](this, tq5, kr3ib_, c8fwj1, goki$3, o3kg$);
      }
    }, ik3b_o['resMgrLoad'] = function (j8w1cf, n4rb_i, irb3_, y04nj6, kbni_r, wcj6y0, o3i$gk) {
      irb3_ === void 0x0 && (irb3_ = 0x0), y04nj6 === void 0x0 && (y04nj6 = ![]), kbni_r === void 0x0 && (kbni_r = ![]), wcj6y0 === void 0x0 && (wcj6y0 = 0x0), o3i$gk === void 0x0 && (o3i$gk = 0x3), j8w1cf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', j8w1cf), pq5va['EnvConfig']['resMgrLoad'](j8w1cf, (ze7mxh, gi$k, _nrbki) => {
        yj64n0['prototype']['resMgrLoadCallBack'](ze7mxh, gi$k, _nrbki, n4rb_i);
      }, irb3_, y04nj6, kbni_r, wcj6y0, o3i$gk);
    }, ik3b_o['resMgrLoadCallBack'] = function (aqtp, tv2dps, v2pd, dq5vt) {
      console['log']('buff:::', aqtp, v2pd, yfw6c['fileNativeDir'] + '///' + yfw6c['fileListName']), dq5vt(aqtp, tv2dps, v2pd);
    }, ik3b_o['clearRes'] = function (yc4j6, vtq5pa) {
      vtq5pa === void 0x0 && (vtq5pa = ![]);var ob$i3k = this;ob$i3k['clearRes'](yc4j6, vtq5pa);var qv5apu = yfw6c['getFileInfo'](yc4j6);if (qv5apu && (yc4j6['indexOf']('http://') != -0x1 || yc4j6['indexOf']('https://') != -0x1)) {
        var rn_b04 = qv5apu['md5'],
            qau5p9 = yfw6c['getFileNativePath'](rn_b04);yfw6c['remove'](qau5p9);
      }
    }, yj64n0['onReadNativeCallBack'] = function (ko_bi, f61wcj, bk$3i, y0r6, xezhm, wj61cf, f6ycj, _iok, ob3i$) {
      y0r6 === void 0x0 && (y0r6 = !![]), wj61cf === void 0x0 && (wj61cf = ![]), _iok === void 0x0 && (_iok = 0x0);if (!_iok) {
        var w81f;if (bk$3i == 'json' || bk$3i == 'atlas') w81f = pq5va['getJson'](ob3i$['data']);else bk$3i == 'xml' ? w81f = iob_3k['parseXMLFromString'](ob3i$['data']) : w81f = ob3i$['data'];f6ycj['onLoaded'](w81f), !pq5va['isZiYu'] && pq5va['isPosMsgYu'] && bk$3i != 'arraybuffer' && wx['postMessage']({ 'url': f61wcj, 'data': w81f, 'isLoad': !![] });
      } else _iok == 0x1 && pq5va['EnvConfig']['load']['call'](f6ycj, f61wcj, bk$3i, y0r6, xezhm, wj61cf);
    }, rn_4b(yj64n0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), yj64n0;
  }(),
      yfw6c = function (u9ap5) {
    function igo() {
      igo['__super']['call'](this);;
    }return hmux(igo, 'laya.wx.mini.MiniFileMgr', u9ap5), igo['isLoadFile'] = function (up9q5) {
      return igo['_fileTypeArr']['indexOf'](up9q5) != -0x1 ? !![] : ![];
    }, igo['getFileInfo'] = function (ob_3ik) {
      var ikb_r3 = ob_3ik['split']('?')[0x0],
          d5pv = igo['filesListObj'][ikb_r3];if (d5pv == null) return null;else return d5pv;return null;
    }, igo['onFileUpdate'] = function (i_4nbr, eu59aq) {
      var fyj6w = i_4nbr['split']('/'),
          nyj604 = fyj6w[fyj6w['length'] - 0x1],
          bok3$i = igo['getFileInfo'](eu59aq);if (bok3$i == null) igo['onSaveFile'](eu59aq, nyj604);else {
        if (bok3$i['readyUrl'] != eu59aq) igo['remove'](nyj604, eu59aq);
      }
    }, igo['exits'] = function ($io3kb, k3bi_r) {
      var igo$k = igo['getFileNativePath']($io3kb);igo['fs']['getFileInfo']({ 'filePath': igo$k, 'success': function (y0r_) {
          k3bi_r != null && k3bi_r['runWith']([0x0, y0r_]);
        }, 'fail': function (t8s) {
          k3bi_r != null && k3bi_r['runWith']([0x1, t8s]);
        } });
    }, igo['read'] = function (_ibo, y4c0, d82tv, boik$3) {
      y4c0 === void 0x0 && (y4c0 = 'ascill'), boik$3 === void 0x0 && (boik$3 = '');var _ri3;boik$3 != '' ? _ri3 = igo['getFileNativePath'](_ibo) : _ri3 = _ibo, igo['fs']['readFile']({ 'filePath': _ri3, 'encoding': y4c0, 'success': function (m5ae) {
          d82tv != null && d82tv['runWith']([0x0, m5ae]);
        }, 'fail': function (_bn4i) {
          if (_bn4i && boik$3 != '') igo['down'](boik$3, y4c0, d82tv, boik$3);else d82tv != null && d82tv['runWith']([0x1]);
        } });
    }, igo['readNativeFile'] = function (k3ibo, c6w0j) {
      igo['fs']['readFile']({ 'filePath': k3ibo, 'encoding': '', 'success': function (mxz7he) {
          c6w0j != null && c6w0j['runWith']([0x0]);
        }, 'fail': function (ikbnr_) {
          c6w0j != null && c6w0j['runWith']([0x1]);
        } });
    }, igo['down'] = function (wc16f, _kob3i, ha9m, nr406) {
      _kob3i === void 0x0 && (_kob3i = 'ascill'), nr406 === void 0x0 && (nr406 = '');var u9aq5 = igo['getFileNativePath'](nr406),
          qu95 = igo['wxdown']({ 'url': wc16f, 'filePath': u9aq5, 'success': function (d82fs) {
          if (d82fs['statusCode'] === 0xc8) igo['readFile'](d82fs['filePath'], _kob3i, ha9m, nr406);
        }, 'fail': function (_4nri) {
          ha9m != null && ha9m['runWith']([0x1, _4nri]);
        } });qu95['onProgressUpdate'](function (nkri_b) {
        ha9m != null && ha9m['runWith']([0x2, nkri_b['progress']]);
      });
    }, igo['readFile'] = function (fs18, kr3b_i, t5qpva, fcw6j1) {
      kr3b_i === void 0x0 && (kr3b_i = 'ascill'), fcw6j1 === void 0x0 && (fcw6j1 = ''), igo['fs']['readFile']({ 'filePath': fs18, 'encoding': kr3b_i, 'success': function (wc61) {
          if (fs18['indexOf']('http://') != -0x1 || fs18['indexOf']('https://') != -0x1) igo['onFileUpdate'](fs18, fcw6j1);t5qpva != null && t5qpva['runWith']([0x0, wc61]);
        }, 'fail': function (brni_4) {
          if (brni_4) t5qpva != null && t5qpva['runWith']([0x1, brni_4]);
        } });
    }, igo['downImg'] = function (hmexu9, c04j6, kgi$) {
      kgi$ === void 0x0 && (kgi$ = '');var jny = igo['wxdown']({ 'url': hmexu9, 'success': function (qpu59a) {
          qpu59a['statusCode'] === 0xc8 && igo['copyFile'](qpu59a['tempFilePath'], kgi$, c04j6);
        }, 'fail': function (n4_bri) {
          c04j6 != null && c04j6['runWith']([0x1, n4_bri]);
        } });
    }, igo['copyFile'] = function (y0c4, j1w6c, pvdq) {
      var vsdtpq = y0c4['split']('/'),
          r04bn_ = vsdtpq[vsdtpq['length'] - 0x1],
          ki3_o = j1w6c['split']('?')[0x0],
          ds28f = igo['getFileInfo'](j1w6c),
          cjy46 = igo['getFileNativePath'](r04bn_);igo['fs']['copyFile']({ 'srcPath': y0c4, 'destPath': cjy46, 'success': function (koib3_) {
          if (!ds28f) igo['onSaveFile'](j1w6c, r04bn_), pvdq != null && pvdq['runWith']([0x0]);else {
            if (ds28f['readyUrl'] != j1w6c) igo['remove'](r04bn_, j1w6c, pvdq);
          }
        }, 'fail': function (i4r_bn) {
          pvdq != null && pvdq['runWith']([0x1, i4r_bn]);
        } });
    }, igo['getFileNativePath'] = function (n6yj) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + n6yj;
    }, igo['remove'] = function (s2dtvp, okg, w6yfc) {
      okg === void 0x0 && (okg = '');var obi3$k = igo['getFileInfo'](okg),
          tvpsd = igo['getFileNativePath'](obi3$k['md5']);equ59a['loader']['clearRes'](obi3$k['readyUrl']), igo['fs']['unlink']({ 'filePath': tvpsd, 'success': function (oki$g3) {
          if (okg != '') igo['onSaveFile'](okg, s2dtvp);w6yfc != null && w6yfc['runWith']([0x0]);
        }, 'fail': function (nrbk_i) {} });
    }, igo['onSaveFile'] = function (wc16jf, w8s21) {
      var c6jy = wc16jf['split']('?')[0x0];igo['filesListObj'][c6jy] = { 'md5': w8s21, 'readyUrl': wc16jf }, igo['fs']['writeFile']({ 'filePath': igo['fileNativeDir'] + '/' + igo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](igo['filesListObj']), 'success': function (ap5tqv) {
          console['log']('写入测试测试成功：', ap5tqv);
        }, 'fail': function (_ir4nb) {
          console['log']('写入测试测试失败：', _ir4nb);
        } });
    }, igo['existDir'] = function (ptaq, gio$k3) {
      igo['fs']['mkdir']({ 'dirPath': ptaq, 'success': function (f6wj1c) {
          gio$k3 != null && gio$k3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jfcy6w) {
          if (jfcy6w['errMsg']['indexOf']('file already exists') != -0x1) igo['readSync'](igo['fileListName'], 'utf8', gio$k3);else gio$k3 != null && gio$k3['runWith']([0x1, jfcy6w]);
        } });
    }, igo['readSync'] = function (v2pdst, hz9, ycj06w, vtps) {
      hz9 === void 0x0 && (hz9 = 'ascill'), vtps === void 0x0 && (vtps = '');var io3gk$ = igo['getFileNativePath'](v2pdst),
          nr_4ib;try {
        nr_4ib = igo['fs']['readFileSync'](io3gk$), ycj06w != null && ycj06w['runWith']([0x0, { 'data': nr_4ib }]);
      } catch (h9ezm) {
        ycj06w != null && ycj06w['runWith']([0x1]);
      }
    }, igo['readCache'] = function () {}, igo['writeCache'] = function (cy6jwf) {
      var tvd8s = readyUrl['split']('?')[0x0];igo['filesListObj'][tvd8s] = { 'md5': md5Name, 'readyUrl': readyUrl }, igo['fs']['writeFile']({ 'filePath': igo['fileNativeDir'] + '/' + igo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](igo['filesListObj']), 'success': function (v2dpts) {}, 'fail': function (j064cy) {} });
    }, igo['setNativeFileDir'] = function (au9q) {
      igo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + au9q;
    }, igo['filesListObj'] = {}, igo['fileNativeDir'] = null, igo['fileListName'] = 'layaairfiles.txt', igo['ziyuFileData'] = {}, rn_4b(igo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), igo;
  }(ry04_n),
      n_ibkr = function (t2sd18) {
    function xmhu9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xmhu9['__super']['call'](this), this['_sound'] = xmhu9['_createSound']();
    }hmux(xmhu9, 'laya.wx.mini.MiniSound', t2sd18);var r3kb_i = xmhu9['prototype'];return r3kb_i['load'] = function (io$k3g) {
      var y6cfwj = this;io$k3g = jwy0['formatURL'](io$k3g), this['url'] = io$k3g;if (xmhu9['_audioCache'][io$k3g]) {
        this['event']('complete');return;
      }function m9hxez() {
        if (xmhu9['_null'] != undefined) y6cfwj['_sound']['onCanplay'](xmhu9['_null']), y6cfwj['_sound']['onError'](xmhu9['_null']);else try {
          y6cfwj['_sound']['onCanplay'](null), y6cfwj['_sound']['onError'](null), xmhu9['_null'] = null;
        } catch (sd1f82) {
          console['warn']('[wxmini] _clearSound:' + sd1f82), y6cfwj['_sound']['onCanplay'](koi3g), y6cfwj['_sound']['onError'](koi3g), xmhu9['_null'] = koi3g;
        }
      }function xemh9u() {
        m9hxez(), f2w18s['loaded'] = !![], f2w18s['event']('complete'), xmhu9['_audioCache'][f2w18s['url']] = f2w18s;
      }function m9xhz(wjc) {
        console['error']('errCode=' + wjc['errCode'] + '  errMsg=' + wjc['errMsg']), m9hxez(), f2w18s['event']('error');
      }function koi3g() {}this['_sound']['onCanplay'](xemh9u), this['_sound']['onError'](m9xhz), this['_sound']['src'] = io$k3g;var f2w18s = this;
    }, r3kb_i['play'] = function (atq, u5pa) {
      atq === void 0x0 && (atq = 0x0), u5pa === void 0x0 && (u5pa = 0x0);var c1fj;if (this['url'] == ny460j['_tMusic']) {
        if (!xmhu9['_musicAudio']) xmhu9['_musicAudio'] = xmhu9['_createSound']();c1fj = xmhu9['_musicAudio'];
      } else c1fj = xmhu9['_createSound']();c1fj['src'] = this['url'];var taqv5 = new irbkn_(c1fj);return taqv5['url'] = this['url'], taqv5['loops'] = u5pa, taqv5['startTime'] = atq, taqv5['play'](), ny460j['addChannel'](taqv5), taqv5;
    }, r3kb_i['dispose'] = function () {
      var ik_nbr = xmhu9['_audioCache'][this['url']];ik_nbr && (ik_nbr['src'] = '', delete xmhu9['_audioCache'][this['url']]);
    }, mehx7(0x0, r3kb_i, 'duration', function () {
      return this['_sound']['duration'];
    }), xmhu9['_createSound'] = function () {
      return xmhu9['_id']++, pq5va['window']['wx']['createInnerAudioContext']();
    }, xmhu9['_musicAudio'] = null, xmhu9['_id'] = 0x0, xmhu9['_audioCache'] = {}, xmhu9['_null'] = undefined, xmhu9;
  }(ry04_n),
      irbkn_ = function (jw60yc) {
    function s8w21(n_b4ri) {
      this['_audio'] = null, this['_onEnd'] = null, s8w21['__super']['call'](this), this['_audio'] = n_b4ri, this['_onEnd'] = iob_3k['bind'](this['__onEnd'], this), n_b4ri['onEnded'](this['_onEnd']);
    }hmux(s8w21, 'laya.wx.mini.MiniSoundChannel', jw60yc);var tpqa = s8w21['prototype'];return tpqa['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (equ59a['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, tpqa['__onNull'] = function () {}, tpqa['play'] = function () {
      this['isStopped'] = ![], ny460j['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, tpqa['stop'] = function () {
      this['isStopped'] = !![], ny460j['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (s8w21['_null'] != undefined) this['_audio']['onEnded'](s8w21['_null']);else try {
        this['_audio']['onEnded'](null), s8w21['_null'] = null;
      } catch (v5pqua) {
        console['warn']('[wxmini] stop:' + v5pqua), this['_audio']['onEnded'](iob_3k['bind'](this['__onNull'], this)), s8w21['_null'] = iob_3k['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, tpqa['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, tpqa['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ny460j['addChannel'](this), this['_audio']['play']();
    }, mehx7(0x0, tpqa, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), mehx7(0x0, tpqa, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), mehx7(0x0, tpqa, 'volume', function () {
      return 0x1;
    }, function (mx9zhe) {}), s8w21['_null'] = undefined, s8w21;
  }(mzxhe7);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t2s8vd in Laya) {
    var yjwc6 = Laya[t2s8vd];yjwc6 && yjwc6['__isclass'] && (exports[t2s8vd] = yjwc6);
  }
});