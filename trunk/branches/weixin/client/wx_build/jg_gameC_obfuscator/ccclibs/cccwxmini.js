var p = wx.$h;
!function (sc47bt, m1wonq) {
  m1wonq['un'], m1wonq['uns'];var z76b = m1wonq['static'],
      _53g = m1wonq['class'],
      k742c = m1wonq['getset'];m1wonq['__newvec'];var mov0a = laya['utils']['Browser'],
      o1mwvn = (laya['events']['Event'], laya['events']['EventDispatcher']),
      sb6 = laya['resource']['HTMLImage'],
      _regx = laya['utils']['Handler'],
      sb74 = laya['display']['Input'],
      yr5gd = laya['net']['Loader'];laya['maths']['Matrix'];var ygd_xr = laya['renders']['Render'],
      bt96z = laya['utils']['RunDriver'];laya['media']['Sound'];var jk$ = laya['media']['SoundChannel'],
      _xdgyr = laya['media']['SoundManager'],
      vaz09l = (laya['display']['Stage'], laya['net']['URL']),
      mv1oa = laya['utils']['Utils'],
      am01ov = (_53g(t6bs7, 'laya.wx.mini.MiniAdpter'), t6bs7['getJson'] = function (z7lbt) {
    return JSON['parse'](z7lbt);
  }, t6bs7['init'] = function (e_xgrj, stb67c) {
    void 0x0 === e_xgrj && (e_xgrj = !0x1), void 0x0 === stb67c && (stb67c = !0x1), t6bs7['_inited'] || (t6bs7['window'] = sc47bt)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (t6bs7['_inited'] = !0x0, t6bs7['isZiYu'] = stb67c, t6bs7['isPosMsgYu'] = e_xgrj, t6bs7['EnvConfig'] = {}, t6bs7['isZiYu'] || (kc4s['setNativeFileDir']('/layaairGame'), kc4s['existDir'](kc4s['fileNativeDir'], _regx['create'](t6bs7, t6bs7['onMkdirCallBack']))), t6bs7['window']['focus'] = function () {}, m1wonq['getUrlPath'] = function () {}, t6bs7['window']['logtime'] = function (_yr5) {}, t6bs7['window']['alertTimeLog'] = function (kjx2) {}, t6bs7['window']['resetShareInfo'] = function () {}, t6bs7['window']['CanvasRenderingContext2D'] = function () {}, t6bs7['window']['CanvasRenderingContext2D']['prototype'] = t6bs7['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t6bs7['window']['document']['body']['appendChild'] = function () {}, t6bs7['EnvConfig']['pixelRatioInt'] = 0x0, bt96z['getPixelRatio'] = t6bs7['pixelRatio'], t6bs7['_preCreateElement'] = mov0a['createElement'], mov0a['createElement'] = t6bs7['createElement'], bt96z['createShaderCondition'] = t6bs7['createShaderCondition'], mv1oa['parseXMLFromString'] = t6bs7['parseXMLFromString'], sb74['_createInputElement'] = m0oav1['_createInputElement'], t6bs7['EnvConfig']['load'] = yr5gd['prototype']['load'], yr5gd['prototype']['load'] = vam09['prototype']['load'], t6bs7['isZiYu'] && e_xgrj && wx['onMessage'](function (rgd_) {
      rgd_['isLoad'] && (kc4s['ziyuFileData'][rgd_['url']] = rgd_['data']);
    }));
  }, t6bs7['onMkdirCallBack'] = function (t76blz, b96tz) {
    t76blz || (kc4s['filesListObj'] = JSON['parse'](b96tz['data']));
  }, t6bs7['pixelRatio'] = function () {
    if (!t6bs7['EnvConfig']['pixelRatioInt']) try {
      var jxrg$ = wx['getSystemInfoSync']();return t6bs7['EnvConfig']['pixelRatioInt'] = jxrg$['pixelRatio'], jxrg$['pixelRatio'];
    } catch (wnmov) {}return t6bs7['EnvConfig']['pixelRatioInt'];
  }, t6bs7['createElement'] = function (fwn) {
    var g_5;if ('canvas' == fwn) return 0x1 == t6bs7['idx'] ? t6bs7['isZiYu'] ? (g_5 = sharedCanvas)['style'] = {} : g_5 = sc47bt['canvas'] : g_5 = sc47bt['wx']['createCanvas'](), t6bs7['idx']++, g_5;if ('textarea' == fwn || 'input' == fwn) return t6bs7['onCreateInput'](fwn);if ('div' != fwn) return t6bs7['_preCreateElement'](fwn);return fwn = t6bs7['_preCreateElement'](fwn), (fwn['contains'] = function (wm1oq) {
      return null;
    }, fwn['removeChild'] = function (ex2j$r) {}, fwn);
  }, t6bs7['onCreateInput'] = function (a90l6) {
    return a90l6 = t6bs7['_preCreateElement'](a90l6), (a90l6['focus'] = m0oav1['wxinputFocus'], a90l6['blur'] = m0oav1['wxinputblur'], a90l6['style'] = {}, a90l6['value'] = 0x0, a90l6['parentElement'] = {}, a90l6['placeholder'] = {}, a90l6['type'] = {}, a90l6['setColor'] = function (j$xke) {}, a90l6['setType'] = function (c4k7sb) {}, a90l6['setFontFace'] = function ($k2c4e) {}, a90l6['addEventListener'] = function (ltb69) {}, a90l6['contains'] = function (zltb67) {
      return null;
    }, a90l6['removeChild'] = function (q8wih) {}, a90l6);
  }, t6bs7['createShaderCondition'] = function (laz09) {
    var omq = this;return function () {
      return omq[laz09['replace']('this.', '')];
    };
  }, t6bs7['EnvConfig'] = null, t6bs7['window'] = null, t6bs7['_preCreateElement'] = null, t6bs7['_inited'] = !0x1, t6bs7['wxRequest'] = null, t6bs7['systemInfo'] = null, t6bs7['version'] = '0.0.1', t6bs7['isZiYu'] = !0x1, t6bs7['isPosMsgYu'] = !0x1, t6bs7['parseXMLFromString'] = function (w1vnom) {
    var lv09;w1vnom = w1vnom['replace'](/>\s+</g, '><');try {
      lv09 = new sc47bt['Parser']['DOMParser']()['parseFromString'](w1vnom, 'text/xml');
    } catch (f8hwi) {
      throw '需要引入xml解析库文件';
    }return lv09;
  }, t6bs7['idx'] = 0x1, t6bs7);function t6bs7() {}_53g(v1ow, 'laya.wx.mini.MiniImage'), v1ow['prototype']['_loadImage'] = function (g_53) {
    var bt47 = !0x1;-0x1 == g_53['indexOf']('layaNativeDir/') && (bt47 = !0x0, g_53 = vaz09l['formatURL'](g_53)), kc4s['getFileInfo'](g_53) ? v1ow['onCreateImage'](g_53, this, !bt47) : -0x1 != g_53['indexOf']('http://') || -0x1 != g_53['indexOf']('https://') ? kc4s['downImg'](g_53, new _regx(v1ow, v1ow['onDownImgCallBack'], [g_53, this]), g_53) : v1ow['onCreateImage'](g_53, this, !0x0);
  }, v1ow['onDownImgCallBack'] = function (st4b, wfqhi8, a1m0) {
    a1m0 ? wfqhi8['onError'](null) : v1ow['onCreateImage'](st4b, wfqhi8);
  }, v1ow['onCreateImage'] = function ($rjgxe, za9vl0, va9lz) {
    var $jxeg, _xgdy;function exjr2() {
      _xgdy['onload'] = null, _xgdy['onerror'] = null, delete za9vl0['imgCache'][$rjgxe];
    }$jxeg = (va9lz = void 0x0 === va9lz ? !0x1 : va9lz) ? $rjgxe : (nvo1wm = kc4s['getFileInfo']($rjgxe)['md5'], kc4s['getFileNativePath'](nvo1wm)), null == za9vl0['imgCache'] && (za9vl0['imgCache'] = {}), va9lz = function () {
      exjr2(), za9vl0['onLoaded'](_xgdy);
    };var nvo1wm = function () {
      exjr2(), za9vl0['event']('error', 'Load image failed');
    };'nativeimage' == za9vl0['_type'] ? ((_xgdy = new mov0a['window']['Image']())['crossOrigin'] = '', _xgdy['onload'] = va9lz, _xgdy['onerror'] = nvo1wm, _xgdy['src'] = $jxeg, za9vl0['imgCache'][$rjgxe] = _xgdy) : new sb6['create']($jxeg, { 'onload': va9lz, 'onerror': nvo1wm, 'onCreate': function (la6z0) {
        _xgdy = la6z0, za9vl0['imgCache'][$rjgxe] = la6z0;
      } });
  };function v1ow() {}var m0oav1 = (_53g(ek$c2, 'laya.wx.mini.MiniInput'), ek$c2['_createInputElement'] = function () {
    sb74['_initInput'](sb74['area'] = mov0a['createElement']('textarea')), sb74['_initInput'](sb74['input'] = mov0a['createElement']('input')), sb74['inputContainer'] = mov0a['createElement']('div'), sb74['inputContainer']['style']['position'] = 'absolute', sb74['inputContainer']['style']['zIndex'] = 0x186a0, mov0a['container']['appendChild'](sb74['inputContainer']), sb74['inputContainer']['setPos'] = function (yp3d5_, g_r5) {
      sb74['inputContainer']['style']['left'] = yp3d5_ + 'px', sb74['inputContainer']['style']['top'] = g_r5 + 'px';
    }, m1wonq['stage']['on']('resize', null, ek$c2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t6zl9b) {
      sc47bt['dispatchEvent'] && sc47bt['dispatchEvent']('resize');
    }), _xdgyr['_soundClass'] = gexjr_, _xdgyr['_musicClass'] = gexjr_;
  }, ek$c2['_onStageResize'] = function () {
    m1wonq['stage']['_canvasTransform']['identity']()['scale'](mov0a['width'] / ygd_xr['canvas']['width'] / bt96z['getPixelRatio'](), mov0a['height'] / ygd_xr['canvas']['height'] / bt96z['getPixelRatio']());
  }, ek$c2['wxinputFocus'] = function (z0o9v) {
    var gd_rxy = sb74['inputElement']['target'];gd_rxy && !gd_rxy['editable'] || (am01ov['window']['wx']['offKeyboardConfirm'](), am01ov['window']['wx']['offKeyboardInput'](), am01ov['window']['wx']['showKeyboard']({ 'defaultValue': gd_rxy['text'], 'maxLength': gd_rxy['maxChars'], 'multiple': gd_rxy['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (stb47c) {}, 'fail': function (ifqwh) {} }), am01ov['window']['wx']['onKeyboardConfirm'](function (hwqi8) {
      hwqi8 = hwqi8 ? hwqi8['value'] : '', (gd_rxy['text'] = hwqi8, gd_rxy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), am01ov['window']['wx']['onKeyboardInput'](function (nm8w) {
      nm8w = nm8w ? nm8w['value'] : '', gd_rxy['multiline'] || -0x1 == nm8w['indexOf']('\x0a') ? (gd_rxy['text'] = nm8w, gd_rxy['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ek$c2['inputEnter'] = function () {
    sb74['inputElement']['target']['focus'] = !0x1;
  }, ek$c2['wxinputblur'] = function () {
    ek$c2['hideKeyboard']();
  }, ek$c2['hideKeyboard'] = function () {
    am01ov['window']['wx']['offKeyboardConfirm'](), am01ov['window']['wx']['offKeyboardInput'](), am01ov['window']['wx']['hideKeyboard']({ 'success': function (nmo0v) {
        console['log']('隐藏键盘');
      }, 'fail': function (v90la) {
        console['log']('隐藏键盘出错:' + (v90la ? v90la['errMsg'] : ''));
      } });
  }, ek$c2);function ek$c2() {}var vam09 = function () {
    function voa09() {}_53g(voa09, 'laya.wx.mini.MiniLoader');var bc7sk = voa09['prototype'];return bc7sk['load'] = function (zbt7l, dr_x, g5dr_, mno0, c7s24k) {
      void 0x0 === g5dr_ && (g5dr_ = !0x0), void 0x0 === c7s24k && (c7s24k = !0x1);var nq18m = this;0x0 === (nq18m['_url'] = zbt7l)['indexOf']('data:image') ? nq18m['_type'] = dr_x = 'image' : nq18m['_type'] = dr_x = dr_x || nq18m['getTypeFromUrl'](zbt7l), nq18m['_cache'] = g5dr_, nq18m['_data'] = null;var z6tl = 'ascii';-0x1 != zbt7l['indexOf']('.fnt') ? z6tl = 'utf8' : 'arraybuffer' == dr_x && (z6tl = '');var wo1nvm = mv1oa['getFileExtension'](zbt7l);if (-0x1 != voa09['_fileTypeArr']['indexOf'](wo1nvm)) am01ov['EnvConfig']['load']['call'](this, zbt7l, dr_x, g5dr_, mno0, c7s24k);else {
        if (kc4s['getFileInfo'](zbt7l)) am01ov['EnvConfig']['load']['call'](this, zbt7l, dr_x, g5dr_, mno0, c7s24k);else {
          if (-0x1 != zbt7l['indexOf']('layaNativeDir/')) {
            if (am01ov['isZiYu']) {
              var ej24$k = kc4s['ziyuFileData'][zbt7l];return void nq18m['onLoaded'](ej24$k);
            }return cosnole['log']('read read'), void kc4s['read'](zbt7l, z6tl, new _regx(voa09, voa09['onReadNativeCallBack'], [z6tl, zbt7l, dr_x, g5dr_, mno0, c7s24k, nq18m]));
          }ej24$k = '' == vaz09l['rootPath'] ? zbt7l : zbt7l['split'](vaz09l['rootPath'])[0x0], -0x1 != zbt7l['indexOf']('http://') || -0x1 != zbt7l['indexOf']('https://') ? am01ov['EnvConfig']['load']['call'](nq18m, zbt7l, dr_x, g5dr_, mno0, c7s24k) : kc4s['readFile'](ej24$k, z6tl, new _regx(voa09, voa09['onReadNativeCallBack'], [z6tl, zbt7l, dr_x, g5dr_, mno0, c7s24k, nq18m]), zbt7l);
        }
      }
    }, bc7sk['resMgrLoad'] = function (yrgd_5, a90v, _p5d, k$2j, zt6l, $e2k, vm0a9o) {
      void 0x0 === _p5d && (_p5d = 0x0), void 0x0 === k$2j && (k$2j = !0x1), void 0x0 === zt6l && (zt6l = !0x1), void 0x0 === $e2k && ($e2k = 0x0), void 0x0 === vm0a9o && (vm0a9o = 0x3), -0x1 != yrgd_5['indexOf']('mpack') && console['log']('=============resMgrLoad url:', yrgd_5), am01ov['EnvConfig']['resMgrLoad'](yrgd_5, (a9z6tl, kb7s4c, m1wn8) => {
        voa09['prototype']['resMgrLoadCallBack'](a9z6tl, kb7s4c, m1wn8, a90v);
      }, _p5d, k$2j, zt6l, $e2k, vm0a9o);
    }, bc7sk['resMgrLoadCallBack'] = function (y_rxj, _dygr, gd_3y, k$cs4) {
      console['log']('buff:::', y_rxj, gd_3y, kc4s['fileNativeDir'] + '///' + kc4s['fileListName']), k$cs4(y_rxj, _dygr, gd_3y);
    }, bc7sk['clearRes'] = function (mq1now, vm) {
      this['clearRes'](mq1now, vm = void 0x0 === vm ? !0x1 : vm), vm = kc4s['getFileInfo'](mq1now), !vm || -0x1 == mq1now['indexOf']('http://') && -0x1 == mq1now['indexOf']('https://') || (vm = vm['md5'], vm = kc4s['getFileNativePath'](vm), kc4s['remove'](vm));
    }, voa09['onReadNativeCallBack'] = function (ec4k$2, y53_gd, o1vm0, k4ec$2, w1omnq, _5d3yp, st76lb, _rxgy, kc4$s2) {
      void 0x0 === k4ec$2 && (k4ec$2 = !0x0), void 0x0 === _5d3yp && (_5d3yp = !0x1), (_rxgy = void 0x0 === _rxgy ? 0x0 : _rxgy) ? 0x1 == _rxgy && am01ov['EnvConfig']['load']['call'](st76lb, y53_gd, o1vm0, k4ec$2, w1omnq, _5d3yp) : (kc4$s2 = 'json' == o1vm0 || 'atlas' == o1vm0 ? am01ov['getJson'](kc4$s2['data']) : 'xml' == o1vm0 ? mv1oa['parseXMLFromString'](kc4$s2['data']) : kc4$s2['data'], st76lb['onLoaded'](kc4$s2), !am01ov['isZiYu'] && am01ov['isPosMsgYu'] && 'arraybuffer' != o1vm0 && wx['postMessage']({ 'url': y53_gd, 'data': kc4$s2, 'isLoad': !0x0 }));
    }, z76b(voa09, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), voa09;
  }(),
      kc4s = (_53g(c4k7s, 'laya.wx.mini.MiniFileMgr', o1mwvn), c4k7s['isLoadFile'] = function (a0vl) {
    return -0x1 != c4k7s['_fileTypeArr']['indexOf'](a0vl);
  }, c4k7s['getFileInfo'] = function (qfnw81) {
    return qfnw81 = qfnw81['split']('?')[0x0], qfnw81 = c4k7s['filesListObj'][qfnw81], null == qfnw81 ? null : qfnw81;
  }, c4k7s['onFileUpdate'] = function (n10m, _py) {
    var tzl9b = n10m['split']('/');n10m = tzl9b[tzl9b['length'] - 0x1], tzl9b = c4k7s['getFileInfo'](_py), null == tzl9b ? c4k7s['onSaveFile'](_py, n10m) : tzl9b['readyUrl'] != _py && c4k7s['remove'](n10m, _py);
  }, c4k7s['exits'] = function (t6az, hfi8wq) {
    t6az = c4k7s['getFileNativePath'](t6az), c4k7s['fs']['getFileInfo']({ 'filePath': t6az, 'success': function (lzt7) {
        null != hfi8wq && hfi8wq['runWith']([0x0, lzt7]);
      }, 'fail': function ($jxe) {
        null != hfi8wq && hfi8wq['runWith']([0x1, $jxe]);
      } });
  }, c4k7s['read'] = function (y_gxrd, tcbs4, kc42, b6tc7s) {
    void 0x0 === tcbs4 && (tcbs4 = 'ascill'), y_gxrd = '' != (b6tc7s = void 0x0 === b6tc7s ? '' : b6tc7s) ? c4k7s['getFileNativePath'](y_gxrd) : y_gxrd, c4k7s['fs']['readFile']({ 'filePath': y_gxrd, 'encoding': tcbs4, 'success': function (j$re2) {
        null != kc42 && kc42['runWith']([0x0, j$re2]);
      }, 'fail': function (vno1) {
        vno1 && '' != b6tc7s ? c4k7s['down'](b6tc7s, tcbs4, kc42, b6tc7s) : null != kc42 && kc42['runWith']([0x1]);
      } });
  }, c4k7s['readNativeFile'] = function (nfw1q, o0vm9) {
    c4k7s['fs']['readFile']({ 'filePath': nfw1q, 'encoding': '', 'success': function (fi8qhw) {
        null != o0vm9 && o0vm9['runWith']([0x0]);
      }, 'fail': function (nmv1) {
        null != o0vm9 && o0vm9['runWith']([0x1]);
      } });
  }, c4k7s['down'] = function (tblz69, ejkx$2, fw8n, rdy5g_) {
    void 0x0 === ejkx$2 && (ejkx$2 = 'ascill'), void 0x0 === rdy5g_ && (rdy5g_ = '');var y_jxgr = c4k7s['getFileNativePath'](rdy5g_);c4k7s['wxdown']({ 'url': tblz69, 'filePath': y_jxgr, 'success': function (la9tz6) {
        0xc8 === la9tz6['statusCode'] && c4k7s['readFile'](la9tz6['filePath'], ejkx$2, fw8n, rdy5g_);
      }, 'fail': function (ypd3) {
        null != fw8n && fw8n['runWith']([0x1, ypd3]);
      } })['onProgressUpdate'](function (x_gry) {
      null != fw8n && fw8n['runWith']([0x2, x_gry['progress']]);
    });
  }, c4k7s['readFile'] = function (jerx, nw1q, gx$re, xd_) {
    void 0x0 === xd_ && (xd_ = ''), c4k7s['fs']['readFile']({ 'filePath': jerx, 'encoding': nw1q = void 0x0 === nw1q ? 'ascill' : nw1q, 'success': function (wqn18) {
        -0x1 == jerx['indexOf']('http://') && -0x1 == jerx['indexOf']('https://') || c4k7s['onFileUpdate'](jerx, xd_), null != gx$re && gx$re['runWith']([0x0, wqn18]);
      }, 'fail': function (j_xyg) {
        j_xyg && null != gx$re && gx$re['runWith']([0x1, j_xyg]);
      } });
  }, c4k7s['downImg'] = function (va1m, zova0, nwmov1) {
    void 0x0 === nwmov1 && (nwmov1 = ''), c4k7s['wxdown']({ 'url': va1m, 'success': function (hfwi8) {
        0xc8 === hfwi8['statusCode'] && c4k7s['copyFile'](hfwi8['tempFilePath'], nwmov1, zova0);
      }, 'fail': function (k2$c4) {
        null != zova0 && zova0['runWith']([0x1, k2$c4]);
      } });
  }, c4k7s['copyFile'] = function (om1vnw, vm09oa, c4$s2) {
    var e2kjx$ = om1vnw['split']('/'),
        dyg = e2kjx$[e2kjx$['length'] - 0x1];vm09oa['split']('?')[0x0];var gdy_35 = c4k7s['getFileInfo'](vm09oa);e2kjx$ = c4k7s['getFileNativePath'](dyg), c4k7s['fs']['copyFile']({ 'srcPath': om1vnw, 'destPath': e2kjx$, 'success': function (nh8qf) {
        gdy_35 ? gdy_35['readyUrl'] != vm09oa && c4k7s['remove'](dyg, vm09oa, c4$s2) : (c4k7s['onSaveFile'](vm09oa, dyg), null != c4$s2 && c4$s2['runWith']([0x0]));
      }, 'fail': function (oqwnm) {
        null != c4$s2 && c4$s2['runWith']([0x1, oqwnm]);
      } });
  }, c4k7s['getFileNativePath'] = function (wn8h) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wn8h;
  }, c4k7s['remove'] = function (c42k$s, tb6z9, exg$jr) {
    void 0x0 === tb6z9 && (tb6z9 = '');var t4c7b = c4k7s['getFileInfo'](tb6z9),
        _gdxry = c4k7s['getFileNativePath'](t4c7b['md5']);m1wonq['loader']['clearRes'](t4c7b['readyUrl']), c4k7s['fs']['unlink']({ 'filePath': _gdxry, 'success': function (om09av) {
        '' != tb6z9 && c4k7s['onSaveFile'](tb6z9, c42k$s), null != exg$jr && exg$jr['runWith']([0x0]);
      }, 'fail': function (r$jex2) {} });
  }, c4k7s['onSaveFile'] = function (erj_, mv9o) {
    var sk2c47 = erj_['split']('?')[0x0];c4k7s['filesListObj'][sk2c47] = { 'md5': mv9o, 'readyUrl': erj_ }, c4k7s['fs']['writeFile']({ 'filePath': c4k7s['fileNativeDir'] + '/' + c4k7s['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c4k7s['filesListObj']), 'success': function (wnmq) {
        console['log']('写入测试测试成功：', wnmq);
      }, 'fail': function (onv1wm) {
        console['log']('写入测试测试失败：', onv1wm);
      } });
  }, c4k7s['existDir'] = function (ma10, jr2x) {
    c4k7s['fs']['mkdir']({ 'dirPath': ma10, 'success': function (m0av9) {
        null != jr2x && jr2x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (sc4b7k) {
        -0x1 != sc4b7k['errMsg']['indexOf']('file already exists') ? c4k7s['readSync'](c4k7s['fileListName'], 'utf8', jr2x) : null != jr2x && jr2x['runWith']([0x1, sc4b7k]);
      } });
  }, c4k7s['readSync'] = function (onv1m0, xg_ydr, wonmv, w8fiq) {
    void 0x0 === xg_ydr && (xg_ydr = 'ascill'), void 0x0 === w8fiq && (w8fiq = ''), onv1m0 = c4k7s['getFileNativePath'](onv1m0);var s$k;try {
      s$k = c4k7s['fs']['readFileSync'](onv1m0), null != wonmv && wonmv['runWith']([0x0, { 'data': s$k }]);
    } catch (lst76b) {
      null != wonmv && wonmv['runWith']([0x1]);
    }
  }, c4k7s['readCache'] = function () {}, c4k7s['writeCache'] = function (ks4$2c) {
    var v09oaz = readyUrl['split']('?')[0x0];c4k7s['filesListObj'][v09oaz] = { 'md5': md5Name, 'readyUrl': readyUrl }, c4k7s['fs']['writeFile']({ 'filePath': c4k7s['fileNativeDir'] + '/' + c4k7s['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c4k7s['filesListObj']), 'success': function (w8nfq) {}, 'fail': function (b6ztl) {} });
  }, c4k7s['setNativeFileDir'] = function (altz96) {
    c4k7s['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + altz96;
  }, c4k7s['filesListObj'] = {}, c4k7s['fileNativeDir'] = null, c4k7s['fileListName'] = 'layaairfiles.txt', c4k7s['ziyuFileData'] = {}, z76b(c4k7s, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), c4k7s);function c4k7s() {
    c4k7s['__super']['call'](this);
  }var gexjr_ = function () {
    function jy_rgx() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, jy_rgx['__super']['call'](this), this['_sound'] = jy_rgx['_createSound']();
    }_53g(jy_rgx, 'laya.wx.mini.MiniSound', o1mwvn);var zbtl7 = jy_rgx['prototype'];return zbtl7['load'] = function (wqf8hi) {
      var $jxrg = this,
          q8m1n;function oa9v0() {
        if (null != jy_rgx['_null']) $jxrg['_sound']['onCanplay'](jy_rgx['_null']), $jxrg['_sound']['onError'](jy_rgx['_null']);else try {
          $jxrg['_sound']['onCanplay'](null), $jxrg['_sound']['onError'](null), jy_rgx['_null'] = null;
        } catch (x_jgr) {
          console['warn']('[wxmini] _clearSound:' + x_jgr), $jxrg['_sound']['onCanplay'](kc$s4), $jxrg['_sound']['onError'](kc$s4), jy_rgx['_null'] = kc$s4;
        }
      }function kc$s4() {}wqf8hi = vaz09l['formatURL'](wqf8hi), this['url'] = wqf8hi, jy_rgx['_audioCache'][wqf8hi] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        oa9v0(), q8m1n['loaded'] = !0x0, q8m1n['event']('complete'), jy_rgx['_audioCache'][q8m1n['url']] = q8m1n;
      }), this['_sound']['onError'](function (lz9a) {
        console['error']('errCode=' + lz9a['errCode'] + '  errMsg=' + lz9a['errMsg']), oa9v0(), q8m1n['event']('error');
      }), this['_sound']['src'] = wqf8hi, q8m1n = this);
    }, zbtl7['play'] = function (c74tsb, nmo) {
      void 0x0 === c74tsb && (c74tsb = 0x0), void 0x0 === nmo && (nmo = 0x0), (ov0z9 = this['url'] == _xdgyr['_tMusic'] ? (jy_rgx['_musicAudio'] || (jy_rgx['_musicAudio'] = jy_rgx['_createSound']()), jy_rgx['_musicAudio']) : jy_rgx['_createSound']())['src'] = this['url'];var ov0z9 = new $e4j(ov0z9);return ov0z9['url'] = this['url'], ov0z9['loops'] = nmo, ov0z9['startTime'] = c74tsb, ov0z9['play'](), _xdgyr['addChannel'](ov0z9), ov0z9;
    }, zbtl7['dispose'] = function () {
      var jgxe_r = jy_rgx['_audioCache'][this['url']];jgxe_r && (jgxe_r['src'] = '', delete jy_rgx['_audioCache'][this['url']]);
    }, k742c(0x0, zbtl7, 'duration', function () {
      return this['_sound']['duration'];
    }), jy_rgx['_createSound'] = function () {
      return jy_rgx['_id']++, am01ov['window']['wx']['createInnerAudioContext']();
    }, jy_rgx['_musicAudio'] = null, jy_rgx['_id'] = 0x0, jy_rgx['_audioCache'] = {}, jy_rgx['_null'] = void 0x0, jy_rgx;
  }(),
      $e4j = function () {
    function o1nmwq(k7sb4c) {
      this['_audio'] = null, this['_onEnd'] = null, o1nmwq['__super']['call'](this), this['_audio'] = k7sb4c, this['_onEnd'] = mv1oa['bind'](this['__onEnd'], this), k7sb4c['onEnded'](this['_onEnd']);
    }_53g(o1nmwq, 'laya.wx.mini.MiniSoundChannel', jk$);var jxy_gr = o1nmwq['prototype'];return jxy_gr['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (m1wonq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jxy_gr['__onNull'] = function () {}, jxy_gr['play'] = function () {
      this['isStopped'] = !0x1, _xdgyr['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, jxy_gr['stop'] = function () {
      if (this['isStopped'] = !0x0, _xdgyr['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != o1nmwq['_null']) this['_audio']['onEnded'](o1nmwq['_null']);else try {
          this['_audio']['onEnded'](null), o1nmwq['_null'] = null;
        } catch (rg5) {
          console['warn']('[wxmini] stop:' + rg5), this['_audio']['onEnded'](mv1oa['bind'](this['__onNull'], this)), o1nmwq['_null'] = mv1oa['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, jxy_gr['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, jxy_gr['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, _xdgyr['addChannel'](this), this['_audio']['play']());
    }, k742c(0x0, jxy_gr, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), k742c(0x0, jxy_gr, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), k742c(0x0, jxy_gr, 'volume', function () {
      return 0x1;
    }, function (kj4e2$) {}), o1nmwq['_null'] = void 0x0, o1nmwq;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (vnomw, dg3_y5) {
  'use strict';

  for (var qwh8i in Object['defineProperty'](dg3_y5, '__esModule', { 'value': !0x0 }), Laya) {
    var pdy3_ = Laya[qwh8i];pdy3_ && pdy3_['__isclass'] && (dg3_y5[qwh8i] = pdy3_);
  }
});