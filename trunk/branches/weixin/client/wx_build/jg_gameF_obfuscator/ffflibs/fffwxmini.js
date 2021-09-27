var k = wx.$f;
!function (de5b, zduxw2) {
  zduxw2['un'], zduxw2['uns'];var ey5 = zduxw2['static'],
      gjo08a = zduxw2['class'],
      j8o19k = zduxw2['getset'];zduxw2['__newvec'];var buzd25 = laya['utils']['Browser'],
      hf3qti = (laya['events']['Event'], laya['events']['EventDispatcher']),
      d5bezy = laya['resource']['HTMLImage'],
      aog0j = laya['utils']['Handler'],
      bym5 = laya['display']['Input'],
      $g6ao0 = laya['net']['Loader'];laya['maths']['Matrix'];var tf3iqh = laya['renders']['Render'],
      a08oj = laya['utils']['RunDriver'];laya['media']['Sound'];var jga08o = laya['media']['SoundChannel'],
      n1sk9_ = laya['media']['SoundManager'],
      dbeyz5 = (laya['display']['Stage'], laya['net']['URL']),
      $0ar6g = laya['utils']['Utils'],
      o068ga = (gjo08a(wb2z, 'laya.wx.mini.MiniAdpter'), wb2z['getJson'] = function (nx_9w) {
    return JSON['parse'](nx_9w);
  }, wb2z['init'] = function (cvy7, d_2u) {
    void 0x0 === cvy7 && (cvy7 = !0x1), void 0x0 === d_2u && (d_2u = !0x1), wb2z['_inited'] || (wb2z['window'] = de5b)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (wb2z['_inited'] = !0x0, wb2z['isZiYu'] = d_2u, wb2z['isPosMsgYu'] = cvy7, wb2z['EnvConfig'] = {}, wb2z['isZiYu'] || (g$a0o6['setNativeFileDir']('/layaairGame'), g$a0o6['existDir'](g$a0o6['fileNativeDir'], aog0j['create'](wb2z, wb2z['onMkdirCallBack']))), wb2z['window']['focus'] = function () {}, zduxw2['getUrlPath'] = function () {}, wb2z['window']['logtime'] = function (ga6o0$) {}, wb2z['window']['alertTimeLog'] = function (cey5mv) {}, wb2z['window']['resetShareInfo'] = function () {}, wb2z['window']['CanvasRenderingContext2D'] = function () {}, wb2z['window']['CanvasRenderingContext2D']['prototype'] = wb2z['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wb2z['window']['document']['body']['appendChild'] = function () {}, wb2z['EnvConfig']['pixelRatioInt'] = 0x0, a08oj['getPixelRatio'] = wb2z['pixelRatio'], wb2z['_preCreateElement'] = buzd25['createElement'], buzd25['createElement'] = wb2z['createElement'], a08oj['createShaderCondition'] = wb2z['createShaderCondition'], $0ar6g['parseXMLFromString'] = wb2z['parseXMLFromString'], bym5['_createInputElement'] = k0jg8['_createInputElement'], wb2z['EnvConfig']['load'] = $g6ao0['prototype']['load'], $g6ao0['prototype']['load'] = nxu_sw['prototype']['load'], wb2z['isZiYu'] && cvy7 && wx['onMessage'](function (ebdyz) {
      ebdyz['isLoad'] && (g$a0o6['ziyuFileData'][ebdyz['url']] = ebdyz['data']);
    }));
  }, wb2z['onMkdirCallBack'] = function (zu, trh$f) {
    zu || (g$a0o6['filesListObj'] = JSON['parse'](trh$f['data']));
  }, wb2z['pixelRatio'] = function () {
    if (!wb2z['EnvConfig']['pixelRatioInt']) try {
      var ecvm5 = wx['getSystemInfoSync']();return wb2z['EnvConfig']['pixelRatioInt'] = ecvm5['pixelRatio'], ecvm5['pixelRatio'];
    } catch (y5evmb) {}return wb2z['EnvConfig']['pixelRatioInt'];
  }, wb2z['createElement'] = function (x9ws_n) {
    var rqtfh3;if ('canvas' == x9ws_n) return 0x1 == wb2z['idx'] ? wb2z['isZiYu'] ? (rqtfh3 = sharedCanvas)['style'] = {} : rqtfh3 = de5b['canvas'] : rqtfh3 = de5b['wx']['createCanvas'](), wb2z['idx']++, rqtfh3;if ('textarea' == x9ws_n || 'input' == x9ws_n) return wb2z['onCreateInput'](x9ws_n);if ('div' != x9ws_n) return wb2z['_preCreateElement'](x9ws_n);return x9ws_n = wb2z['_preCreateElement'](x9ws_n), (x9ws_n['contains'] = function (jn19s) {
      return null;
    }, x9ws_n['removeChild'] = function (fqpi3h) {}, x9ws_n);
  }, wb2z['onCreateInput'] = function (tiqh) {
    return tiqh = wb2z['_preCreateElement'](tiqh), (tiqh['focus'] = k0jg8['wxinputFocus'], tiqh['blur'] = k0jg8['wxinputblur'], tiqh['style'] = {}, tiqh['value'] = 0x0, tiqh['parentElement'] = {}, tiqh['placeholder'] = {}, tiqh['type'] = {}, tiqh['setColor'] = function (vy7mec) {}, tiqh['setType'] = function (_nuxw) {}, tiqh['setFontFace'] = function (_9nks1) {}, tiqh['addEventListener'] = function (yb25) {}, tiqh['contains'] = function (wzu2db) {
      return null;
    }, tiqh['removeChild'] = function (ih3qtf) {}, tiqh);
  }, wb2z['createShaderCondition'] = function (qthif3) {
    var e5b = this;return function () {
      return e5b[qthif3['replace']('this.', '')];
    };
  }, wb2z['EnvConfig'] = null, wb2z['window'] = null, wb2z['_preCreateElement'] = null, wb2z['_inited'] = !0x1, wb2z['wxRequest'] = null, wb2z['systemInfo'] = null, wb2z['version'] = '0.0.1', wb2z['isZiYu'] = !0x1, wb2z['isPosMsgYu'] = !0x1, wb2z['parseXMLFromString'] = function (o8g1j) {
    var ar6$t0;o8g1j = o8g1j['replace'](/>\s+</g, '><');try {
      ar6$t0 = new de5b['Parser']['DOMParser']()['parseFromString'](o8g1j, 'text/xml');
    } catch (e5d) {
      throw '需要引入xml解析库文件';
    }return ar6$t0;
  }, wb2z['idx'] = 0x1, wb2z);function wb2z() {}gjo08a(g6ra0, 'laya.wx.mini.MiniImage'), g6ra0['prototype']['_loadImage'] = function (xuw2d_) {
    var zey5db = !0x1;-0x1 == xuw2d_['indexOf']('layaNativeDir/') && (zey5db = !0x0, xuw2d_ = dbeyz5['formatURL'](xuw2d_)), g$a0o6['getFileInfo'](xuw2d_) ? g6ra0['onCreateImage'](xuw2d_, this, !zey5db) : -0x1 != xuw2d_['indexOf']('http://') || -0x1 != xuw2d_['indexOf']('https://') ? g$a0o6['downImg'](xuw2d_, new aog0j(g6ra0, g6ra0['onDownImgCallBack'], [xuw2d_, this]), xuw2d_) : g6ra0['onCreateImage'](xuw2d_, this, !0x0);
  }, g6ra0['onDownImgCallBack'] = function (gj8o0a, budz52, rt63a) {
    rt63a ? budz52['onError'](null) : g6ra0['onCreateImage'](gj8o0a, budz52);
  }, g6ra0['onCreateImage'] = function (zbym5e, udz2wb, xn_usw) {
    var ebmyv, t0ar6$;function jk819o() {
      t0ar6$['onload'] = null, t0ar6$['onerror'] = null, delete udz2wb['imgCache'][zbym5e];
    }ebmyv = (xn_usw = void 0x0 === xn_usw ? !0x1 : xn_usw) ? zbym5e : (a$og6 = g$a0o6['getFileInfo'](zbym5e)['md5'], g$a0o6['getFileNativePath'](a$og6)), null == udz2wb['imgCache'] && (udz2wb['imgCache'] = {}), xn_usw = function () {
      jk819o(), udz2wb['onLoaded'](t0ar6$);
    };var a$og6 = function () {
      jk819o(), udz2wb['event']('error', 'Load image failed');
    };'nativeimage' == udz2wb['_type'] ? ((t0ar6$ = new buzd25['window']['Image']())['crossOrigin'] = '', t0ar6$['onload'] = xn_usw, t0ar6$['onerror'] = a$og6, t0ar6$['src'] = ebmyv, udz2wb['imgCache'][zbym5e] = t0ar6$) : new d5bezy['create'](ebmyv, { 'onload': xn_usw, 'onerror': a$og6, 'onCreate': function (u2d) {
        t0ar6$ = u2d, udz2wb['imgCache'][zbym5e] = u2d;
      } });
  };function g6ra0() {}var k0jg8 = (gjo08a(qp3fih, 'laya.wx.mini.MiniInput'), qp3fih['_createInputElement'] = function () {
    bym5['_initInput'](bym5['area'] = buzd25['createElement']('textarea')), bym5['_initInput'](bym5['input'] = buzd25['createElement']('input')), bym5['inputContainer'] = buzd25['createElement']('div'), bym5['inputContainer']['style']['position'] = 'absolute', bym5['inputContainer']['style']['zIndex'] = 0x186a0, buzd25['container']['appendChild'](bym5['inputContainer']), bym5['inputContainer']['setPos'] = function (thr$3, u2dzb5) {
      bym5['inputContainer']['style']['left'] = thr$3 + 'px', bym5['inputContainer']['style']['top'] = u2dzb5 + 'px';
    }, zduxw2['stage']['on']('resize', null, qp3fih['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ub5z2) {
      de5b['dispatchEvent'] && de5b['dispatchEvent']('resize');
    }), n1sk9_['_soundClass'] = _swuxn, n1sk9_['_musicClass'] = _swuxn;
  }, qp3fih['_onStageResize'] = function () {
    zduxw2['stage']['_canvasTransform']['identity']()['scale'](buzd25['width'] / tf3iqh['canvas']['width'] / a08oj['getPixelRatio'](), buzd25['height'] / tf3iqh['canvas']['height'] / a08oj['getPixelRatio']());
  }, qp3fih['wxinputFocus'] = function (w2bud) {
    var qhr3ft = bym5['inputElement']['target'];qhr3ft && !qhr3ft['editable'] || (o068ga['window']['wx']['offKeyboardConfirm'](), o068ga['window']['wx']['offKeyboardInput'](), o068ga['window']['wx']['showKeyboard']({ 'defaultValue': qhr3ft['text'], 'maxLength': qhr3ft['maxChars'], 'multiple': qhr3ft['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (_s9nw) {}, 'fail': function (x19_ns) {} }), o068ga['window']['wx']['onKeyboardConfirm'](function (o06a) {
      o06a = o06a ? o06a['value'] : '', (qhr3ft['text'] = o06a, qhr3ft['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), o068ga['window']['wx']['onKeyboardInput'](function ($3tf) {
      $3tf = $3tf ? $3tf['value'] : '', qhr3ft['multiline'] || -0x1 == $3tf['indexOf']('\x0a') ? (qhr3ft['text'] = $3tf, qhr3ft['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, qp3fih['inputEnter'] = function () {
    bym5['inputElement']['target']['focus'] = !0x1;
  }, qp3fih['wxinputblur'] = function () {
    qp3fih['hideKeyboard']();
  }, qp3fih['hideKeyboard'] = function () {
    o068ga['window']['wx']['offKeyboardConfirm'](), o068ga['window']['wx']['offKeyboardInput'](), o068ga['window']['wx']['hideKeyboard']({ 'success': function (ydbe5) {
        console['log']('隐藏键盘');
      }, 'fail': function ($frth) {
        console['log']('隐藏键盘出错:' + ($frth ? $frth['errMsg'] : ''));
      } });
  }, qp3fih);function qp3fih() {}var nxu_sw = function () {
    function $3trfh() {}gjo08a($3trfh, 'laya.wx.mini.MiniLoader');var _sn9xw = $3trfh['prototype'];return _sn9xw['load'] = function (g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx) {
      void 0x0 === mycve && (mycve = !0x0), void 0x0 === uz2wdx && (uz2wdx = !0x1);var n1x9_ = this;0x0 === (n1x9_['_url'] = g6a$0r)['indexOf']('data:image') ? n1x9_['_type'] = mcy5ev = 'image' : n1x9_['_type'] = mcy5ev = mcy5ev || n1x9_['getTypeFromUrl'](g6a$0r), n1x9_['_cache'] = mycve, n1x9_['_data'] = null;var ud52bz = 'ascii';-0x1 != g6a$0r['indexOf']('.fnt') ? ud52bz = 'utf8' : 'arraybuffer' == mcy5ev && (ud52bz = '');var r$ga = $0ar6g['getFileExtension'](g6a$0r);if (-0x1 != $3trfh['_fileTypeArr']['indexOf'](r$ga)) o068ga['EnvConfig']['load']['call'](this, g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx);else {
        if (g$a0o6['getFileInfo'](g6a$0r)) o068ga['EnvConfig']['load']['call'](this, g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx);else {
          if (-0x1 != g6a$0r['indexOf']('layaNativeDir/')) {
            if (o068ga['isZiYu']) {
              var u2xwdz = g$a0o6['ziyuFileData'][g6a$0r];return void n1x9_['onLoaded'](u2xwdz);
            }return cosnole['log']('read read'), void g$a0o6['read'](g6a$0r, ud52bz, new aog0j($3trfh, $3trfh['onReadNativeCallBack'], [ud52bz, g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx, n1x9_]));
          }u2xwdz = '' == dbeyz5['rootPath'] ? g6a$0r : g6a$0r['split'](dbeyz5['rootPath'])[0x0], -0x1 != g6a$0r['indexOf']('http://') || -0x1 != g6a$0r['indexOf']('https://') ? o068ga['EnvConfig']['load']['call'](n1x9_, g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx) : g$a0o6['readFile'](u2xwdz, ud52bz, new aog0j($3trfh, $3trfh['onReadNativeCallBack'], [ud52bz, g6a$0r, mcy5ev, mycve, hrfq3t, uz2wdx, n1x9_]), g6a$0r);
        }
      }
    }, _sn9xw['resMgrLoad'] = function (qfh4i, o819k, nksj91, su_xw, ajg8o, nx_s19, a0og6) {
      void 0x0 === nksj91 && (nksj91 = 0x0), void 0x0 === su_xw && (su_xw = !0x1), void 0x0 === ajg8o && (ajg8o = !0x1), void 0x0 === nx_s19 && (nx_s19 = 0x0), void 0x0 === a0og6 && (a0og6 = 0x3), -0x1 != qfh4i['indexOf']('mpack') && console['log']('=============resMgrLoad url:', qfh4i), o068ga['EnvConfig']['resMgrLoad'](qfh4i, (p4hqfi, knj91, j189o) => {
        $3trfh['prototype']['resMgrLoadCallBack'](p4hqfi, knj91, j189o, o819k);
      }, nksj91, su_xw, ajg8o, nx_s19, a0og6);
    }, _sn9xw['resMgrLoadCallBack'] = function (bd2uwz, usx2w_, kn1_9, vm5yc) {
      console['log']('buff:::', bd2uwz, kn1_9, g$a0o6['fileNativeDir'] + '///' + g$a0o6['fileListName']), vm5yc(bd2uwz, usx2w_, kn1_9);
    }, _sn9xw['clearRes'] = function (a8g0jo, gojk1) {
      this['clearRes'](a8g0jo, gojk1 = void 0x0 === gojk1 ? !0x1 : gojk1), gojk1 = g$a0o6['getFileInfo'](a8g0jo), !gojk1 || -0x1 == a8g0jo['indexOf']('http://') && -0x1 == a8g0jo['indexOf']('https://') || (gojk1 = gojk1['md5'], gojk1 = g$a0o6['getFileNativePath'](gojk1), g$a0o6['remove'](gojk1));
    }, $3trfh['onReadNativeCallBack'] = function (by2d5, t6r3a$, wns9_, q3pifh, d52bu, jk91s, kg0o8j, _k9s1, uzxw2) {
      void 0x0 === q3pifh && (q3pifh = !0x0), void 0x0 === jk91s && (jk91s = !0x1), (_k9s1 = void 0x0 === _k9s1 ? 0x0 : _k9s1) ? 0x1 == _k9s1 && o068ga['EnvConfig']['load']['call'](kg0o8j, t6r3a$, wns9_, q3pifh, d52bu, jk91s) : (uzxw2 = 'json' == wns9_ || 'atlas' == wns9_ ? o068ga['getJson'](uzxw2['data']) : 'xml' == wns9_ ? $0ar6g['parseXMLFromString'](uzxw2['data']) : uzxw2['data'], kg0o8j['onLoaded'](uzxw2), !o068ga['isZiYu'] && o068ga['isPosMsgYu'] && 'arraybuffer' != wns9_ && wx['postMessage']({ 'url': t6r3a$, 'data': uzxw2, 'isLoad': !0x0 }));
    }, ey5($3trfh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $3trfh;
  }(),
      g$a0o6 = (gjo08a(uz5b, 'laya.wx.mini.MiniFileMgr', hf3qti), uz5b['isLoadFile'] = function (ifht) {
    return -0x1 != uz5b['_fileTypeArr']['indexOf'](ifht);
  }, uz5b['getFileInfo'] = function (r$a36) {
    return r$a36 = r$a36['split']('?')[0x0], r$a36 = uz5b['filesListObj'][r$a36], null == r$a36 ? null : r$a36;
  }, uz5b['onFileUpdate'] = function (zb5em, f3htrq) {
    var ce7y = zb5em['split']('/');zb5em = ce7y[ce7y['length'] - 0x1], ce7y = uz5b['getFileInfo'](f3htrq), null == ce7y ? uz5b['onSaveFile'](f3htrq, zb5em) : ce7y['readyUrl'] != f3htrq && uz5b['remove'](zb5em, f3htrq);
  }, uz5b['exits'] = function (trfhq, b5zeyd) {
    trfhq = uz5b['getFileNativePath'](trfhq), uz5b['fs']['getFileInfo']({ 'filePath': trfhq, 'success': function (r06at$) {
        null != b5zeyd && b5zeyd['runWith']([0x0, r06at$]);
      }, 'fail': function (agoj80) {
        null != b5zeyd && b5zeyd['runWith']([0x1, agoj80]);
      } });
  }, uz5b['read'] = function (ub, g$0, r6t3$, uzdxw2) {
    void 0x0 === g$0 && (g$0 = 'ascill'), ub = '' != (uzdxw2 = void 0x0 === uzdxw2 ? '' : uzdxw2) ? uz5b['getFileNativePath'](ub) : ub, uz5b['fs']['readFile']({ 'filePath': ub, 'encoding': g$0, 'success': function (zu2d5) {
        null != r6t3$ && r6t3$['runWith']([0x0, zu2d5]);
      }, 'fail': function (k91_s) {
        k91_s && '' != uzdxw2 ? uz5b['down'](uzdxw2, g$0, r6t3$, uzdxw2) : null != r6t3$ && r6t3$['runWith']([0x1]);
      } });
  }, uz5b['readNativeFile'] = function (zy25bd, j9n1ks) {
    uz5b['fs']['readFile']({ 'filePath': zy25bd, 'encoding': '', 'success': function (f3t$rh) {
        null != j9n1ks && j9n1ks['runWith']([0x0]);
      }, 'fail': function (m5evy) {
        null != j9n1ks && j9n1ks['runWith']([0x1]);
      } });
  }, uz5b['down'] = function (trfq3, bm5ye, ihp3q, xs_w9) {
    void 0x0 === bm5ye && (bm5ye = 'ascill'), void 0x0 === xs_w9 && (xs_w9 = '');var udwz2 = uz5b['getFileNativePath'](xs_w9);uz5b['wxdown']({ 'url': trfq3, 'filePath': udwz2, 'success': function (fiqh3t) {
        0xc8 === fiqh3t['statusCode'] && uz5b['readFile'](fiqh3t['filePath'], bm5ye, ihp3q, xs_w9);
      }, 'fail': function (pqhf3) {
        null != ihp3q && ihp3q['runWith']([0x1, pqhf3]);
      } })['onProgressUpdate'](function (emy5zb) {
      null != ihp3q && ihp3q['runWith']([0x2, emy5zb['progress']]);
    });
  }, uz5b['readFile'] = function (uxw_n, u_nwsx, ybz2, h3ifq) {
    void 0x0 === h3ifq && (h3ifq = ''), uz5b['fs']['readFile']({ 'filePath': uxw_n, 'encoding': u_nwsx = void 0x0 === u_nwsx ? 'ascill' : u_nwsx, 'success': function (nx19) {
        -0x1 == uxw_n['indexOf']('http://') && -0x1 == uxw_n['indexOf']('https://') || uz5b['onFileUpdate'](uxw_n, h3ifq), null != ybz2 && ybz2['runWith']([0x0, nx19]);
      }, 'fail': function (bduz5) {
        bduz5 && null != ybz2 && ybz2['runWith']([0x1, bduz5]);
      } });
  }, uz5b['downImg'] = function ($r3ft, frhtq, h3fqt) {
    void 0x0 === h3fqt && (h3fqt = ''), uz5b['wxdown']({ 'url': $r3ft, 'success': function (k9sn1j) {
        0xc8 === k9sn1j['statusCode'] && uz5b['copyFile'](k9sn1j['tempFilePath'], h3fqt, frhtq);
      }, 'fail': function (udz2b5) {
        null != frhtq && frhtq['runWith']([0x1, udz2b5]);
      } });
  }, uz5b['copyFile'] = function (wz2xd, a68go0, mcy7e) {
    var aj0go8 = wz2xd['split']('/'),
        evymc7 = aj0go8[aj0go8['length'] - 0x1];a68go0['split']('?')[0x0];var nj8k91 = uz5b['getFileInfo'](a68go0);aj0go8 = uz5b['getFileNativePath'](evymc7), uz5b['fs']['copyFile']({ 'srcPath': wz2xd, 'destPath': aj0go8, 'success': function ($0rag) {
        nj8k91 ? nj8k91['readyUrl'] != a68go0 && uz5b['remove'](evymc7, a68go0, mcy7e) : (uz5b['onSaveFile'](a68go0, evymc7), null != mcy7e && mcy7e['runWith']([0x0]));
      }, 'fail': function (bzmey5) {
        null != mcy7e && mcy7e['runWith']([0x1, bzmey5]);
      } });
  }, uz5b['getFileNativePath'] = function (_u2dw) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _u2dw;
  }, uz5b['remove'] = function (w_9sx, m5vcey, $6at0r) {
    void 0x0 === m5vcey && (m5vcey = '');var frq3h = uz5b['getFileInfo'](m5vcey),
        uz52bd = uz5b['getFileNativePath'](frq3h['md5']);zduxw2['loader']['clearRes'](frq3h['readyUrl']), uz5b['fs']['unlink']({ 'filePath': uz52bd, 'success': function (o8kjg0) {
        '' != m5vcey && uz5b['onSaveFile'](m5vcey, w_9sx), null != $6at0r && $6at0r['runWith']([0x0]);
      }, 'fail': function (pqhf4) {} });
  }, uz5b['onSaveFile'] = function (z2u5, w9x_n) {
    var u2zbwd = z2u5['split']('?')[0x0];uz5b['filesListObj'][u2zbwd] = { 'md5': w9x_n, 'readyUrl': z2u5 }, uz5b['fs']['writeFile']({ 'filePath': uz5b['fileNativeDir'] + '/' + uz5b['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](uz5b['filesListObj']), 'success': function ($a6r0) {
        console['log']('写入测试测试成功：', $a6r0);
      }, 'fail': function (xdu2_w) {
        console['log']('写入测试测试失败：', xdu2_w);
      } });
  }, uz5b['existDir'] = function (iqht3, udx) {
    uz5b['fs']['mkdir']({ 'dirPath': iqht3, 'success': function (j9s1) {
        null != udx && udx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (a60$rg) {
        -0x1 != a60$rg['errMsg']['indexOf']('file already exists') ? uz5b['readSync'](uz5b['fileListName'], 'utf8', udx) : null != udx && udx['runWith']([0x1, a60$rg]);
      } });
  }, uz5b['readSync'] = function (duzw2x, pi3h, i4hfq, _xnsw) {
    void 0x0 === pi3h && (pi3h = 'ascill'), void 0x0 === _xnsw && (_xnsw = ''), duzw2x = uz5b['getFileNativePath'](duzw2x);var _nsk9;try {
      _nsk9 = uz5b['fs']['readFileSync'](duzw2x), null != i4hfq && i4hfq['runWith']([0x0, { 'data': _nsk9 }]);
    } catch (bwu2zd) {
      null != i4hfq && i4hfq['runWith']([0x1]);
    }
  }, uz5b['readCache'] = function () {}, uz5b['writeCache'] = function (nsk1_) {
    var ok8j9 = readyUrl['split']('?')[0x0];uz5b['filesListObj'][ok8j9] = { 'md5': md5Name, 'readyUrl': readyUrl }, uz5b['fs']['writeFile']({ 'filePath': uz5b['fileNativeDir'] + '/' + uz5b['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](uz5b['filesListObj']), 'success': function (wn_s9x) {}, 'fail': function (j9kns) {} });
  }, uz5b['setNativeFileDir'] = function (zmybe) {
    uz5b['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zmybe;
  }, uz5b['filesListObj'] = {}, uz5b['fileNativeDir'] = null, uz5b['fileListName'] = 'layaairfiles.txt', uz5b['ziyuFileData'] = {}, ey5(uz5b, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), uz5b);function uz5b() {
    uz5b['__super']['call'](this);
  }var _swuxn = function () {
    function o$a0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, o$a0['__super']['call'](this), this['_sound'] = o$a0['_createSound']();
    }gjo08a(o$a0, 'laya.wx.mini.MiniSound', hf3qti);var u2dwzx = o$a0['prototype'];return u2dwzx['load'] = function (g8o0ja) {
      var e5yc = this,
          y2b5z;function _x2wud() {
        if (null != o$a0['_null']) e5yc['_sound']['onCanplay'](o$a0['_null']), e5yc['_sound']['onError'](o$a0['_null']);else try {
          e5yc['_sound']['onCanplay'](null), e5yc['_sound']['onError'](null), o$a0['_null'] = null;
        } catch (uwz2) {
          console['warn']('[wxmini] _clearSound:' + uwz2), e5yc['_sound']['onCanplay'](g08aj), e5yc['_sound']['onError'](g08aj), o$a0['_null'] = g08aj;
        }
      }function g08aj() {}g8o0ja = dbeyz5['formatURL'](g8o0ja), this['url'] = g8o0ja, o$a0['_audioCache'][g8o0ja] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        _x2wud(), y2b5z['loaded'] = !0x0, y2b5z['event']('complete'), o$a0['_audioCache'][y2b5z['url']] = y2b5z;
      }), this['_sound']['onError'](function (yev7c) {
        console['error']('errCode=' + yev7c['errCode'] + '  errMsg=' + yev7c['errMsg']), _x2wud(), y2b5z['event']('error');
      }), this['_sound']['src'] = g8o0ja, y2b5z = this);
    }, u2dwzx['play'] = function (dzwu2, oa0j8) {
      void 0x0 === dzwu2 && (dzwu2 = 0x0), void 0x0 === oa0j8 && (oa0j8 = 0x0), (j1kn9 = this['url'] == n1sk9_['_tMusic'] ? (o$a0['_musicAudio'] || (o$a0['_musicAudio'] = o$a0['_createSound']()), o$a0['_musicAudio']) : o$a0['_createSound']())['src'] = this['url'];var j1kn9 = new s_19n(j1kn9);return j1kn9['url'] = this['url'], j1kn9['loops'] = oa0j8, j1kn9['startTime'] = dzwu2, j1kn9['play'](), n1sk9_['addChannel'](j1kn9), j1kn9;
    }, u2dwzx['dispose'] = function () {
      var ga8jo = o$a0['_audioCache'][this['url']];ga8jo && (ga8jo['src'] = '', delete o$a0['_audioCache'][this['url']]);
    }, j8o19k(0x0, u2dwzx, 'duration', function () {
      return this['_sound']['duration'];
    }), o$a0['_createSound'] = function () {
      return o$a0['_id']++, o068ga['window']['wx']['createInnerAudioContext']();
    }, o$a0['_musicAudio'] = null, o$a0['_id'] = 0x0, o$a0['_audioCache'] = {}, o$a0['_null'] = void 0x0, o$a0;
  }(),
      s_19n = function () {
    function nsk_19(hpq3fi) {
      this['_audio'] = null, this['_onEnd'] = null, nsk_19['__super']['call'](this), this['_audio'] = hpq3fi, this['_onEnd'] = $0ar6g['bind'](this['__onEnd'], this), hpq3fi['onEnded'](this['_onEnd']);
    }gjo08a(nsk_19, 'laya.wx.mini.MiniSoundChannel', jga08o);var rt$hf3 = nsk_19['prototype'];return rt$hf3['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (zduxw2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rt$hf3['__onNull'] = function () {}, rt$hf3['play'] = function () {
      this['isStopped'] = !0x1, n1sk9_['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, rt$hf3['stop'] = function () {
      if (this['isStopped'] = !0x0, n1sk9_['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != nsk_19['_null']) this['_audio']['onEnded'](nsk_19['_null']);else try {
          this['_audio']['onEnded'](null), nsk_19['_null'] = null;
        } catch (jo8g0) {
          console['warn']('[wxmini] stop:' + jo8g0), this['_audio']['onEnded']($0ar6g['bind'](this['__onNull'], this)), nsk_19['_null'] = $0ar6g['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, rt$hf3['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, rt$hf3['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, n1sk9_['addChannel'](this), this['_audio']['play']());
    }, j8o19k(0x0, rt$hf3, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), j8o19k(0x0, rt$hf3, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), j8o19k(0x0, rt$hf3, 'volume', function () {
      return 0x1;
    }, function (o0ga$) {}), nsk_19['_null'] = void 0x0, nsk_19;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (bzed5, ojgk8) {
  'use strict';

  for (var _nwuxs in Object['defineProperty'](ojgk8, '__esModule', { 'value': !0x0 }), Laya) {
    var t06r = Laya[_nwuxs];t06r && t06r['__isclass'] && (ojgk8[_nwuxs] = t06r);
  }
});