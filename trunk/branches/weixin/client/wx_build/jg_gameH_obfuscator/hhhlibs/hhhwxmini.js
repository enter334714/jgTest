var O = wx.$c;
!function (fdb6s, ui5o2) {
  ui5o2['un'], ui5o2['uns'];var zg71$q = ui5o2['static'],
      w05u2i = ui5o2['class'],
      h89arv = ui5o2['getset'];ui5o2['__newvec'];var le9n = laya['utils']['Browser'],
      u50o2 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      yvh8ra = laya['resource']['HTMLImage'],
      nl9v = laya['utils']['Handler'],
      iw_23t = laya['display']['Input'],
      lven = laya['net']['Loader'];laya['maths']['Matrix'];var dyfbsk = laya['renders']['Render'],
      by8r = laya['utils']['RunDriver'];laya['media']['Sound'];var arhb = laya['media']['SoundChannel'],
      cmlen9 = laya['media']['SoundManager'],
      twj = (laya['display']['Stage'], laya['net']['URL']),
      fk6sb = laya['utils']['Utils'],
      $_3g = (w05u2i(xqfs61, 'laya.wx.mini.MiniAdpter'), xqfs61['getJson'] = function (haky) {
    return JSON['parse'](haky);
  }, xqfs61['init'] = function (_t$jg, $gzjq) {
    void 0x0 === _t$jg && (_t$jg = !0x1), void 0x0 === $gzjq && ($gzjq = !0x1), xqfs61['_inited'] || (xqfs61['window'] = fdb6s)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (xqfs61['_inited'] = !0x0, xqfs61['isZiYu'] = $gzjq, xqfs61['isPosMsgYu'] = _t$jg, xqfs61['EnvConfig'] = {}, xqfs61['isZiYu'] || (vcl9n8['setNativeFileDir']('/layaairGame'), vcl9n8['existDir'](vcl9n8['fileNativeDir'], nl9v['create'](xqfs61, xqfs61['onMkdirCallBack']))), xqfs61['window']['focus'] = function () {}, ui5o2['getUrlPath'] = function () {}, xqfs61['window']['logtime'] = function (gtzj$) {}, xqfs61['window']['alertTimeLog'] = function (n8v9l) {}, xqfs61['window']['resetShareInfo'] = function () {}, xqfs61['window']['CanvasRenderingContext2D'] = function () {}, xqfs61['window']['CanvasRenderingContext2D']['prototype'] = xqfs61['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xqfs61['window']['document']['body']['appendChild'] = function () {}, xqfs61['EnvConfig']['pixelRatioInt'] = 0x0, by8r['getPixelRatio'] = xqfs61['pixelRatio'], xqfs61['_preCreateElement'] = le9n['createElement'], le9n['createElement'] = xqfs61['createElement'], by8r['createShaderCondition'] = xqfs61['createShaderCondition'], fk6sb['parseXMLFromString'] = xqfs61['parseXMLFromString'], iw_23t['_createInputElement'] = w3ij['_createInputElement'], xqfs61['EnvConfig']['load'] = lven['prototype']['load'], lven['prototype']['load'] = bafk['prototype']['load'], xqfs61['isZiYu'] && _t$jg && wx['onMessage'](function (fskx) {
      fskx['isLoad'] && (vcl9n8['ziyuFileData'][fskx['url']] = fskx['data']);
    }));
  }, xqfs61['onMkdirCallBack'] = function (x6s, t32i_) {
    x6s || (vcl9n8['filesListObj'] = JSON['parse'](t32i_['data']));
  }, xqfs61['pixelRatio'] = function () {
    if (!xqfs61['EnvConfig']['pixelRatioInt']) try {
      var wtj$_3 = wx['getSystemInfoSync']();return xqfs61['EnvConfig']['pixelRatioInt'] = wtj$_3['pixelRatio'], wtj$_3['pixelRatio'];
    } catch (abdkyh) {}return xqfs61['EnvConfig']['pixelRatioInt'];
  }, xqfs61['createElement'] = function (bdk6s) {
    var t$_w3;if ('canvas' == bdk6s) return 0x1 == xqfs61['idx'] ? xqfs61['isZiYu'] ? (t$_w3 = sharedCanvas)['style'] = {} : t$_w3 = fdb6s['canvas'] : t$_w3 = fdb6s['wx']['createCanvas'](), xqfs61['idx']++, t$_w3;if ('textarea' == bdk6s || 'input' == bdk6s) return xqfs61['onCreateInput'](bdk6s);if ('div' != bdk6s) return xqfs61['_preCreateElement'](bdk6s);return bdk6s = xqfs61['_preCreateElement'](bdk6s), (bdk6s['contains'] = function (fdk6sx) {
      return null;
    }, bdk6s['removeChild'] = function (s1xq67) {}, bdk6s);
  }, xqfs61['onCreateInput'] = function (aydbh) {
    return aydbh = xqfs61['_preCreateElement'](aydbh), (aydbh['focus'] = w3ij['wxinputFocus'], aydbh['blur'] = w3ij['wxinputblur'], aydbh['style'] = {}, aydbh['value'] = 0x0, aydbh['parentElement'] = {}, aydbh['placeholder'] = {}, aydbh['type'] = {}, aydbh['setColor'] = function ($qz1) {}, aydbh['setType'] = function (wjt$) {}, aydbh['setFontFace'] = function (o502iu) {}, aydbh['addEventListener'] = function (lem9c) {}, aydbh['contains'] = function (dfkyba) {
      return null;
    }, aydbh['removeChild'] = function (fydb) {}, aydbh);
  }, xqfs61['createShaderCondition'] = function (i20_w) {
    var iu_0w2 = this;return function () {
      return iu_0w2[i20_w['replace']('this.', '')];
    };
  }, xqfs61['EnvConfig'] = null, xqfs61['window'] = null, xqfs61['_preCreateElement'] = null, xqfs61['_inited'] = !0x1, xqfs61['wxRequest'] = null, xqfs61['systemInfo'] = null, xqfs61['version'] = '0.0.1', xqfs61['isZiYu'] = !0x1, xqfs61['isPosMsgYu'] = !0x1, xqfs61['parseXMLFromString'] = function (ybadfk) {
    var sdb6k;ybadfk = ybadfk['replace'](/>\s+</g, '><');try {
      sdb6k = new fdb6s['Parser']['DOMParser']()['parseFromString'](ybadfk, 'text/xml');
    } catch (r9nl) {
      throw '需要引入xml解析库文件';
    }return sdb6k;
  }, xqfs61['idx'] = 0x1, xqfs61);function xqfs61() {}w05u2i(o54u, 'laya.wx.mini.MiniImage'), o54u['prototype']['_loadImage'] = function (bdhaky) {
    var ui05 = !0x1;-0x1 == bdhaky['indexOf']('layaNativeDir/') && (ui05 = !0x0, bdhaky = twj['formatURL'](bdhaky)), vcl9n8['getFileInfo'](bdhaky) ? o54u['onCreateImage'](bdhaky, this, !ui05) : -0x1 != bdhaky['indexOf']('http://') || -0x1 != bdhaky['indexOf']('https://') ? vcl9n8['downImg'](bdhaky, new nl9v(o54u, o54u['onDownImgCallBack'], [bdhaky, this]), bdhaky) : o54u['onCreateImage'](bdhaky, this, !0x0);
  }, o54u['onDownImgCallBack'] = function (vclen9, s6fq1, ah8r9) {
    ah8r9 ? s6fq1['onError'](null) : o54u['onCreateImage'](vclen9, s6fq1);
  }, o54u['onCreateImage'] = function (w5u2i, z7x6q1, nv8cl) {
    var r8bah, w0iu_2;function y8arv() {
      w0iu_2['onload'] = null, w0iu_2['onerror'] = null, delete z7x6q1['imgCache'][w5u2i];
    }r8bah = (nv8cl = void 0x0 === nv8cl ? !0x1 : nv8cl) ? w5u2i : (zqx176 = vcl9n8['getFileInfo'](w5u2i)['md5'], vcl9n8['getFileNativePath'](zqx176)), null == z7x6q1['imgCache'] && (z7x6q1['imgCache'] = {}), nv8cl = function () {
      y8arv(), z7x6q1['onLoaded'](w0iu_2);
    };var zqx176 = function () {
      y8arv(), z7x6q1['event']('error', 'Load image failed');
    };'nativeimage' == z7x6q1['_type'] ? ((w0iu_2 = new le9n['window']['Image']())['crossOrigin'] = '', w0iu_2['onload'] = nv8cl, w0iu_2['onerror'] = zqx176, w0iu_2['src'] = r8bah, z7x6q1['imgCache'][w5u2i] = w0iu_2) : new yvh8ra['create'](r8bah, { 'onload': nv8cl, 'onerror': zqx176, 'onCreate': function (bdafk) {
        w0iu_2 = bdafk, z7x6q1['imgCache'][w5u2i] = bdafk;
      } });
  };function o54u() {}var w3ij = (w05u2i(kfbs6d, 'laya.wx.mini.MiniInput'), kfbs6d['_createInputElement'] = function () {
    iw_23t['_initInput'](iw_23t['area'] = le9n['createElement']('textarea')), iw_23t['_initInput'](iw_23t['input'] = le9n['createElement']('input')), iw_23t['inputContainer'] = le9n['createElement']('div'), iw_23t['inputContainer']['style']['position'] = 'absolute', iw_23t['inputContainer']['style']['zIndex'] = 0x186a0, le9n['container']['appendChild'](iw_23t['inputContainer']), iw_23t['inputContainer']['setPos'] = function (rlv98, d16xf) {
      iw_23t['inputContainer']['style']['left'] = rlv98 + 'px', iw_23t['inputContainer']['style']['top'] = d16xf + 'px';
    }, ui5o2['stage']['on']('resize', null, kfbs6d['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (v9rnl8) {
      fdb6s['dispatchEvent'] && fdb6s['dispatchEvent']('resize');
    }), cmlen9['_soundClass'] = io20, cmlen9['_musicClass'] = io20;
  }, kfbs6d['_onStageResize'] = function () {
    ui5o2['stage']['_canvasTransform']['identity']()['scale'](le9n['width'] / dyfbsk['canvas']['width'] / by8r['getPixelRatio'](), le9n['height'] / dyfbsk['canvas']['height'] / by8r['getPixelRatio']());
  }, kfbs6d['wxinputFocus'] = function (s7q16x) {
    var _02iuw = iw_23t['inputElement']['target'];_02iuw && !_02iuw['editable'] || ($_3g['window']['wx']['offKeyboardConfirm'](), $_3g['window']['wx']['offKeyboardInput'](), $_3g['window']['wx']['showKeyboard']({ 'defaultValue': _02iuw['text'], 'maxLength': _02iuw['maxChars'], 'multiple': _02iuw['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (rbhayk) {}, 'fail': function (i2_3t) {} }), $_3g['window']['wx']['onKeyboardConfirm'](function (_tij3w) {
      _tij3w = _tij3w ? _tij3w['value'] : '', (_02iuw['text'] = _tij3w, _02iuw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $_3g['window']['wx']['onKeyboardInput'](function (zq$7g) {
      zq$7g = zq$7g ? zq$7g['value'] : '', _02iuw['multiline'] || -0x1 == zq$7g['indexOf']('\x0a') ? (_02iuw['text'] = zq$7g, _02iuw['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, kfbs6d['inputEnter'] = function () {
    iw_23t['inputElement']['target']['focus'] = !0x1;
  }, kfbs6d['wxinputblur'] = function () {
    kfbs6d['hideKeyboard']();
  }, kfbs6d['hideKeyboard'] = function () {
    $_3g['window']['wx']['offKeyboardConfirm'](), $_3g['window']['wx']['offKeyboardInput'](), $_3g['window']['wx']['hideKeyboard']({ 'success': function (yhdba) {
        console['log']('隐藏键盘');
      }, 'fail': function (bhary) {
        console['log']('隐藏键盘出错:' + (bhary ? bhary['errMsg'] : ''));
      } });
  }, kfbs6d);function kfbs6d() {}var bafk = function () {
    function qz167() {}w05u2i(qz167, 'laya.wx.mini.MiniLoader');var u5024o = qz167['prototype'];return u5024o['load'] = function (b6fk, zt7j$g, cnlm, i0w2u, r9vlh) {
      void 0x0 === cnlm && (cnlm = !0x0), void 0x0 === r9vlh && (r9vlh = !0x1);var khydba = this;0x0 === (khydba['_url'] = b6fk)['indexOf']('data:image') ? khydba['_type'] = zt7j$g = 'image' : khydba['_type'] = zt7j$g = zt7j$g || khydba['getTypeFromUrl'](b6fk), khydba['_cache'] = cnlm, khydba['_data'] = null;var me9l = 'ascii';-0x1 != b6fk['indexOf']('.fnt') ? me9l = 'utf8' : 'arraybuffer' == zt7j$g && (me9l = '');var fx6ds = fk6sb['getFileExtension'](b6fk);if (-0x1 != qz167['_fileTypeArr']['indexOf'](fx6ds)) $_3g['EnvConfig']['load']['call'](this, b6fk, zt7j$g, cnlm, i0w2u, r9vlh);else {
        if (vcl9n8['getFileInfo'](b6fk)) $_3g['EnvConfig']['load']['call'](this, b6fk, zt7j$g, cnlm, i0w2u, r9vlh);else {
          if (-0x1 != b6fk['indexOf']('layaNativeDir/')) {
            if ($_3g['isZiYu']) {
              var i3tj = vcl9n8['ziyuFileData'][b6fk];return void khydba['onLoaded'](i3tj);
            }return cosnole['log']('read read'), void vcl9n8['read'](b6fk, me9l, new nl9v(qz167, qz167['onReadNativeCallBack'], [me9l, b6fk, zt7j$g, cnlm, i0w2u, r9vlh, khydba]));
          }i3tj = '' == twj['rootPath'] ? b6fk : b6fk['split'](twj['rootPath'])[0x0], -0x1 != b6fk['indexOf']('http://') || -0x1 != b6fk['indexOf']('https://') ? $_3g['EnvConfig']['load']['call'](khydba, b6fk, zt7j$g, cnlm, i0w2u, r9vlh) : vcl9n8['readFile'](i3tj, me9l, new nl9v(qz167, qz167['onReadNativeCallBack'], [me9l, b6fk, zt7j$g, cnlm, i0w2u, r9vlh, khydba]), b6fk);
        }
      }
    }, u5024o['resMgrLoad'] = function (ij3w_, g$3_tj, g7qjz$, zq$7jg, ykrh, rh8lv, ksbf6d) {
      void 0x0 === g7qjz$ && (g7qjz$ = 0x0), void 0x0 === zq$7jg && (zq$7jg = !0x1), void 0x0 === ykrh && (ykrh = !0x1), void 0x0 === rh8lv && (rh8lv = 0x0), void 0x0 === ksbf6d && (ksbf6d = 0x3), -0x1 != ij3w_['indexOf']('mpack') && console['log']('=============resMgrLoad url:', ij3w_), $_3g['EnvConfig']['resMgrLoad'](ij3w_, (zgt$j7, xdsk6f, aydfk) => {
        qz167['prototype']['resMgrLoadCallBack'](zgt$j7, xdsk6f, aydfk, g$3_tj);
      }, g7qjz$, zq$7jg, ykrh, rh8lv, ksbf6d);
    }, u5024o['resMgrLoadCallBack'] = function (qs6x1f, n9cve, f6xsq1, mlc9en) {
      console['log']('buff:::', qs6x1f, f6xsq1, vcl9n8['fileNativeDir'] + '///' + vcl9n8['fileListName']), mlc9en(qs6x1f, n9cve, f6xsq1);
    }, u5024o['clearRes'] = function (ui5w02, rv89a) {
      this['clearRes'](ui5w02, rv89a = void 0x0 === rv89a ? !0x1 : rv89a), rv89a = vcl9n8['getFileInfo'](ui5w02), !rv89a || -0x1 == ui5w02['indexOf']('http://') && -0x1 == ui5w02['indexOf']('https://') || (rv89a = rv89a['md5'], rv89a = vcl9n8['getFileNativePath'](rv89a), vcl9n8['remove'](rv89a));
    }, qz167['onReadNativeCallBack'] = function (cmeln9, r8a9vh, le9nc, nec9m, t3i_2, kxd6s, byhk, t$7gj, ahb) {
      void 0x0 === nec9m && (nec9m = !0x0), void 0x0 === kxd6s && (kxd6s = !0x1), (t$7gj = void 0x0 === t$7gj ? 0x0 : t$7gj) ? 0x1 == t$7gj && $_3g['EnvConfig']['load']['call'](byhk, r8a9vh, le9nc, nec9m, t3i_2, kxd6s) : (ahb = 'json' == le9nc || 'atlas' == le9nc ? $_3g['getJson'](ahb['data']) : 'xml' == le9nc ? fk6sb['parseXMLFromString'](ahb['data']) : ahb['data'], byhk['onLoaded'](ahb), !$_3g['isZiYu'] && $_3g['isPosMsgYu'] && 'arraybuffer' != le9nc && wx['postMessage']({ 'url': r8a9vh, 'data': ahb, 'isLoad': !0x0 }));
    }, zg71$q(qz167, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qz167;
  }(),
      vcl9n8 = (w05u2i(g$7z1, 'laya.wx.mini.MiniFileMgr', u50o2), g$7z1['isLoadFile'] = function (q6x17z) {
    return -0x1 != g$7z1['_fileTypeArr']['indexOf'](q6x17z);
  }, g$7z1['getFileInfo'] = function (mln9) {
    return mln9 = mln9['split']('?')[0x0], mln9 = g$7z1['filesListObj'][mln9], null == mln9 ? null : mln9;
  }, g$7z1['onFileUpdate'] = function (kbdsyf, qj$7g) {
    var kdfbs = kbdsyf['split']('/');kbdsyf = kdfbs[kdfbs['length'] - 0x1], kdfbs = g$7z1['getFileInfo'](qj$7g), null == kdfbs ? g$7z1['onSaveFile'](qj$7g, kbdsyf) : kdfbs['readyUrl'] != qj$7g && g$7z1['remove'](kbdsyf, qj$7g);
  }, g$7z1['exits'] = function (s6qx1f, t_wij) {
    s6qx1f = g$7z1['getFileNativePath'](s6qx1f), g$7z1['fs']['getFileInfo']({ 'filePath': s6qx1f, 'success': function (t3jg$_) {
        null != t_wij && t_wij['runWith']([0x0, t3jg$_]);
      }, 'fail': function (s6qf1) {
        null != t_wij && t_wij['runWith']([0x1, s6qf1]);
      } });
  }, g$7z1['read'] = function (i_wtj, _gj$, n9cvel, i23w_0) {
    void 0x0 === _gj$ && (_gj$ = 'ascill'), i_wtj = '' != (i23w_0 = void 0x0 === i23w_0 ? '' : i23w_0) ? g$7z1['getFileNativePath'](i_wtj) : i_wtj, g$7z1['fs']['readFile']({ 'filePath': i_wtj, 'encoding': _gj$, 'success': function (jg7$t) {
        null != n9cvel && n9cvel['runWith']([0x0, jg7$t]);
      }, 'fail': function (o2450u) {
        o2450u && '' != i23w_0 ? g$7z1['down'](i23w_0, _gj$, n9cvel, i23w_0) : null != n9cvel && n9cvel['runWith']([0x1]);
      } });
  }, g$7z1['readNativeFile'] = function (tjz7g, _0uwi) {
    g$7z1['fs']['readFile']({ 'filePath': tjz7g, 'encoding': '', 'success': function (akydhb) {
        null != _0uwi && _0uwi['runWith']([0x0]);
      }, 'fail': function (w02i5) {
        null != _0uwi && _0uwi['runWith']([0x1]);
      } });
  }, g$7z1['down'] = function (dsx16f, gj$_3t, ev9ln, s6bfdk) {
    void 0x0 === gj$_3t && (gj$_3t = 'ascill'), void 0x0 === s6bfdk && (s6bfdk = '');var $z17qg = g$7z1['getFileNativePath'](s6bfdk);g$7z1['wxdown']({ 'url': dsx16f, 'filePath': $z17qg, 'success': function (sfdxk6) {
        0xc8 === sfdxk6['statusCode'] && g$7z1['readFile'](sfdxk6['filePath'], gj$_3t, ev9ln, s6bfdk);
      }, 'fail': function (hbyadk) {
        null != ev9ln && ev9ln['runWith']([0x1, hbyadk]);
      } })['onProgressUpdate'](function (vcen9l) {
      null != ev9ln && ev9ln['runWith']([0x2, vcen9l['progress']]);
    });
  }, g$7z1['readFile'] = function (gjz3$t, rayhv8, u5wi2, bsdk6) {
    void 0x0 === bsdk6 && (bsdk6 = ''), g$7z1['fs']['readFile']({ 'filePath': gjz3$t, 'encoding': rayhv8 = void 0x0 === rayhv8 ? 'ascill' : rayhv8, 'success': function (_jg3) {
        -0x1 == gjz3$t['indexOf']('http://') && -0x1 == gjz3$t['indexOf']('https://') || g$7z1['onFileUpdate'](gjz3$t, bsdk6), null != u5wi2 && u5wi2['runWith']([0x0, _jg3]);
      }, 'fail': function (u5io02) {
        u5io02 && null != u5wi2 && u5wi2['runWith']([0x1, u5io02]);
      } });
  }, g$7z1['downImg'] = function (enml, $_t3gj, yrbah8) {
    void 0x0 === yrbah8 && (yrbah8 = ''), g$7z1['wxdown']({ 'url': enml, 'success': function (yvah8) {
        0xc8 === yvah8['statusCode'] && g$7z1['copyFile'](yvah8['tempFilePath'], yrbah8, $_t3gj);
      }, 'fail': function (vn8cl9) {
        null != $_t3gj && $_t3gj['runWith']([0x1, vn8cl9]);
      } });
  }, g$7z1['copyFile'] = function (_twij, t_3, f6dsbk) {
    var j$7gqz = _twij['split']('/'),
        syfdbk = j$7gqz[j$7gqz['length'] - 0x1];t_3['split']('?')[0x0];var ahbkd = g$7z1['getFileInfo'](t_3);j$7gqz = g$7z1['getFileNativePath'](syfdbk), g$7z1['fs']['copyFile']({ 'srcPath': _twij, 'destPath': j$7gqz, 'success': function (tj3_wi) {
        ahbkd ? ahbkd['readyUrl'] != t_3 && g$7z1['remove'](syfdbk, t_3, f6dsbk) : (g$7z1['onSaveFile'](t_3, syfdbk), null != f6dsbk && f6dsbk['runWith']([0x0]));
      }, 'fail': function (abhy) {
        null != f6dsbk && f6dsbk['runWith']([0x1, abhy]);
      } });
  }, g$7z1['getFileNativePath'] = function (wu25i0) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wu25i0;
  }, g$7z1['remove'] = function (gx1q7, lr8vn, yakh) {
    void 0x0 === lr8vn && (lr8vn = '');var nlvc89 = g$7z1['getFileInfo'](lr8vn),
        bdkfs6 = g$7z1['getFileNativePath'](nlvc89['md5']);ui5o2['loader']['clearRes'](nlvc89['readyUrl']), g$7z1['fs']['unlink']({ 'filePath': bdkfs6, 'success': function (nc9lve) {
        '' != lr8vn && g$7z1['onSaveFile'](lr8vn, gx1q7), null != yakh && yakh['runWith']([0x0]);
      }, 'fail': function (gxq7z1) {} });
  }, g$7z1['onSaveFile'] = function (_3tg, fq1s6) {
    var rv8nl9 = _3tg['split']('?')[0x0];g$7z1['filesListObj'][rv8nl9] = { 'md5': fq1s6, 'readyUrl': _3tg }, g$7z1['fs']['writeFile']({ 'filePath': g$7z1['fileNativeDir'] + '/' + g$7z1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](g$7z1['filesListObj']), 'success': function (q$jzg7) {
        console['log']('写入测试测试成功：', q$jzg7);
      }, 'fail': function (kxs) {
        console['log']('写入测试测试失败：', kxs);
      } });
  }, g$7z1['existDir'] = function (khbrya, df6kxs) {
    g$7z1['fs']['mkdir']({ 'dirPath': khbrya, 'success': function (rb8hya) {
        null != df6kxs && df6kxs['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (fksd6) {
        -0x1 != fksd6['errMsg']['indexOf']('file already exists') ? g$7z1['readSync'](g$7z1['fileListName'], 'utf8', df6kxs) : null != df6kxs && df6kxs['runWith']([0x1, fksd6]);
      } });
  }, g$7z1['readSync'] = function (rlhv, w$3_tj, lenvc, t_$3j) {
    void 0x0 === w$3_tj && (w$3_tj = 'ascill'), void 0x0 === t_$3j && (t_$3j = ''), rlhv = g$7z1['getFileNativePath'](rlhv);var w2t3;try {
      w2t3 = g$7z1['fs']['readFileSync'](rlhv), null != lenvc && lenvc['runWith']([0x0, { 'data': w2t3 }]);
    } catch (uio2) {
      null != lenvc && lenvc['runWith']([0x1]);
    }
  }, g$7z1['readCache'] = function () {}, g$7z1['writeCache'] = function (dsx6) {
    var qzgx = readyUrl['split']('?')[0x0];g$7z1['filesListObj'][qzgx] = { 'md5': md5Name, 'readyUrl': readyUrl }, g$7z1['fs']['writeFile']({ 'filePath': g$7z1['fileNativeDir'] + '/' + g$7z1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](g$7z1['filesListObj']), 'success': function (t$zg3j) {}, 'fail': function (d61sx) {} });
  }, g$7z1['setNativeFileDir'] = function (sdfk6x) {
    g$7z1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sdfk6x;
  }, g$7z1['filesListObj'] = {}, g$7z1['fileNativeDir'] = null, g$7z1['fileListName'] = 'layaairfiles.txt', g$7z1['ziyuFileData'] = {}, zg71$q(g$7z1, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), g$7z1);function g$7z1() {
    g$7z1['__super']['call'](this);
  }var io20 = function () {
    function a8ybrh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, a8ybrh['__super']['call'](this), this['_sound'] = a8ybrh['_createSound']();
    }w05u2i(a8ybrh, 'laya.wx.mini.MiniSound', u50o2);var z7q$1g = a8ybrh['prototype'];return z7q$1g['load'] = function (ah8yrv) {
      var u405o = this,
          $gt7;function fqx() {
        if (null != a8ybrh['_null']) u405o['_sound']['onCanplay'](a8ybrh['_null']), u405o['_sound']['onError'](a8ybrh['_null']);else try {
          u405o['_sound']['onCanplay'](null), u405o['_sound']['onError'](null), a8ybrh['_null'] = null;
        } catch (bdfyks) {
          console['warn']('[wxmini] _clearSound:' + bdfyks), u405o['_sound']['onCanplay'](x6s17q), u405o['_sound']['onError'](x6s17q), a8ybrh['_null'] = x6s17q;
        }
      }function x6s17q() {}ah8yrv = twj['formatURL'](ah8yrv), this['url'] = ah8yrv, a8ybrh['_audioCache'][ah8yrv] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        fqx(), $gt7['loaded'] = !0x0, $gt7['event']('complete'), a8ybrh['_audioCache'][$gt7['url']] = $gt7;
      }), this['_sound']['onError'](function (ydbsk) {
        console['error']('errCode=' + ydbsk['errCode'] + '  errMsg=' + ydbsk['errMsg']), fqx(), $gt7['event']('error');
      }), this['_sound']['src'] = ah8yrv, $gt7 = this);
    }, z7q$1g['play'] = function (avyhr8, w205u) {
      void 0x0 === avyhr8 && (avyhr8 = 0x0), void 0x0 === w205u && (w205u = 0x0), (ykhab = this['url'] == cmlen9['_tMusic'] ? (a8ybrh['_musicAudio'] || (a8ybrh['_musicAudio'] = a8ybrh['_createSound']()), a8ybrh['_musicAudio']) : a8ybrh['_createSound']())['src'] = this['url'];var ykhab = new lr8n9(ykhab);return ykhab['url'] = this['url'], ykhab['loops'] = w205u, ykhab['startTime'] = avyhr8, ykhab['play'](), cmlen9['addChannel'](ykhab), ykhab;
    }, z7q$1g['dispose'] = function () {
      var sfx1q6 = a8ybrh['_audioCache'][this['url']];sfx1q6 && (sfx1q6['src'] = '', delete a8ybrh['_audioCache'][this['url']]);
    }, h89arv(0x0, z7q$1g, 'duration', function () {
      return this['_sound']['duration'];
    }), a8ybrh['_createSound'] = function () {
      return a8ybrh['_id']++, $_3g['window']['wx']['createInnerAudioContext']();
    }, a8ybrh['_musicAudio'] = null, a8ybrh['_id'] = 0x0, a8ybrh['_audioCache'] = {}, a8ybrh['_null'] = void 0x0, a8ybrh;
  }(),
      lr8n9 = function () {
    function i0_wu(bkfysd) {
      this['_audio'] = null, this['_onEnd'] = null, i0_wu['__super']['call'](this), this['_audio'] = bkfysd, this['_onEnd'] = fk6sb['bind'](this['__onEnd'], this), bkfysd['onEnded'](this['_onEnd']);
    }w05u2i(i0_wu, 'laya.wx.mini.MiniSoundChannel', arhb);var w_t3j = i0_wu['prototype'];return w_t3j['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (ui5o2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, w_t3j['__onNull'] = function () {}, w_t3j['play'] = function () {
      this['isStopped'] = !0x1, cmlen9['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, w_t3j['stop'] = function () {
      if (this['isStopped'] = !0x0, cmlen9['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != i0_wu['_null']) this['_audio']['onEnded'](i0_wu['_null']);else try {
          this['_audio']['onEnded'](null), i0_wu['_null'] = null;
        } catch (vh9rl) {
          console['warn']('[wxmini] stop:' + vh9rl), this['_audio']['onEnded'](fk6sb['bind'](this['__onNull'], this)), i0_wu['_null'] = fk6sb['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, w_t3j['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, w_t3j['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, cmlen9['addChannel'](this), this['_audio']['play']());
    }, h89arv(0x0, w_t3j, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), h89arv(0x0, w_t3j, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), h89arv(0x0, w_t3j, 'volume', function () {
      return 0x1;
    }, function (cnm9) {}), i0_wu['_null'] = void 0x0, i0_wu;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (fkday, ysdbkf) {
  'use strict';

  for (var ah89 in Object['defineProperty'](ysdbkf, '__esModule', { 'value': !0x0 }), Laya) {
    var $3gjt = Laya[ah89];$3gjt && $3gjt['__isclass'] && (ysdbkf[ah89] = $3gjt);
  }
});