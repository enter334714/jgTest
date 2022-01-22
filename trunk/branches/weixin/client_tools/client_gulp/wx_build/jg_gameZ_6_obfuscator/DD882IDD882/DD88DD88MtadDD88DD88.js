var G = wx.$E;
(function (window, document, k645$c) {
  var fmw8b = k645$c['un'],
      m78v = k645$c['uns'],
      id65j = k645$c['static'],
      ypolnx = k645$c['class'],
      uvwra = k645$c['getset'],
      yn9gph = k645$c['__newvec'],
      oxpy = laya['utils']['Browser'],
      quv = laya['events']['Event'],
      $mkbc4 = laya['events']['EventDispatcher'],
      k4b = laya['resource']['HTMLImage'],
      xlnyop = laya['utils']['Handler'],
      $bckm = laya['display']['Input'],
      i_dj1 = laya['net']['Loader'],
      _3t20s = laya['maths']['Matrix'],
      f7w8m = laya['renders']['Render'],
      awruvq = laya['utils']['RunDriver'],
      d5_j1 = laya['media']['Sound'],
      yupg = laya['media']['SoundChannel'],
      yxpo = laya['media']['SoundManager'],
      h9qaug = laya['display']['Stage'],
      i65j1 = laya['net']['URL'],
      avurq = laya['utils']['Utils'],
      d6kij5 = function () {
    function f87vw() {}return ypolnx(f87vw, 'laya.wx.mini.MiniAdpter'), f87vw['getJson'] = function (tsd_1i) {
      return JSON['parse'](tsd_1i);
    }, f87vw['init'] = function (ti_2s1, xgypln) {
      ti_2s1 === void 0x0 && (ti_2s1 = ![]), xgypln === void 0x0 && (xgypln = ![]);if (f87vw['_inited']) return;f87vw['window'] = window;if (f87vw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;f87vw['_inited'] = !![], f87vw['isZiYu'] = xgypln, f87vw['isPosMsgYu'] = ti_2s1, f87vw['EnvConfig'] = {}, !f87vw['isZiYu'] && (puh9g['setNativeFileDir']('/layaairGame'), puh9g['existDir'](puh9g['fileNativeDir'], xlnyop['create'](f87vw, f87vw['onMkdirCallBack']))), f87vw['window']['focus'] = function () {}, k645$c['getUrlPath'] = function () {}, f87vw['window']['logtime'] = function (ghn9y) {}, f87vw['window']['alertTimeLog'] = function (jd5$k6) {}, f87vw['window']['resetShareInfo'] = function () {}, f87vw['window']['CanvasRenderingContext2D'] = function () {}, f87vw['window']['CanvasRenderingContext2D']['prototype'] = f87vw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f87vw['window']['document']['body']['appendChild'] = function () {}, f87vw['EnvConfig']['pixelRatioInt'] = 0x0, awruvq['getPixelRatio'] = f87vw['pixelRatio'], f87vw['_preCreateElement'] = oxpy['createElement'], oxpy['createElement'] = f87vw['createElement'], awruvq['createShaderCondition'] = f87vw['createShaderCondition'], avurq['parseXMLFromString'] = f87vw['parseXMLFromString'], $bckm['_createInputElement'] = _tijd['_createInputElement'], f87vw['EnvConfig']['load'] = i_dj1['prototype']['load'], i_dj1['prototype']['load'] = uvwrq['prototype']['load'], f87vw['isZiYu'] && ti_2s1 && wx['onMessage'](function (kj6id) {
        kj6id['isLoad'] && (puh9g['ziyuFileData'][kj6id['url']] = kj6id['data']);
      });
    }, f87vw['onMkdirCallBack'] = function (f8w7m, t0s2z3) {
      if (!f8w7m) puh9g['filesListObj'] = JSON['parse'](t0s2z3['data']);
    }, f87vw['pixelRatio'] = function () {
      if (!f87vw['EnvConfig']['pixelRatioInt']) try {
        var r9uaqv = wx['getSystemInfoSync']();return f87vw['EnvConfig']['pixelRatioInt'] = r9uaqv['pixelRatio'], r9uaqv = r9uaqv, r9uaqv['pixelRatio'];
      } catch (i6k5dj) {}return f87vw['EnvConfig']['pixelRatioInt'];
    }, f87vw['createElement'] = function (f7bm48) {
      if (f7bm48 == 'canvas') {
        var _32s1;return f87vw['idx'] == 0x1 ? f87vw['isZiYu'] ? (_32s1 = sharedCanvas, _32s1['style'] = {}) : _32s1 = window['canvas'] : _32s1 = window['wx']['createCanvas'](), f87vw['idx']++, _32s1;
      } else {
        if (f7bm48 == 'textarea' || f7bm48 == 'input') return f87vw['onCreateInput'](f7bm48);else {
          if (f7bm48 == 'div') {
            var g9phuy = f87vw['_preCreateElement'](f7bm48);return g9phuy['contains'] = function (kbcm$4) {
              return null;
            }, g9phuy['removeChild'] = function (hnpy) {}, g9phuy;
          } else return f87vw['_preCreateElement'](f7bm48);
        }
      }
    }, f87vw['onCreateInput'] = function (qrva9) {
      var f8vwq = f87vw['_preCreateElement'](qrva9);return f8vwq['focus'] = _tijd['wxinputFocus'], f8vwq['blur'] = _tijd['wxinputblur'], f8vwq['style'] = {}, f8vwq['value'] = 0x0, f8vwq['parentElement'] = {}, f8vwq['placeholder'] = {}, f8vwq['type'] = {}, f8vwq['setColor'] = function (urv9aq) {}, f8vwq['setType'] = function (_jdti) {}, f8vwq['setFontFace'] = function (rw8a) {}, f8vwq['addEventListener'] = function (d5j6k) {}, f8vwq['contains'] = function (j65ck) {
        return null;
      }, f8vwq['removeChild'] = function (dit_1j) {}, f8vwq;
    }, f87vw['createShaderCondition'] = function (i_td1j) {
      var pagu9 = this,
          g9qahu = function () {
        var wmv8 = i_td1j;return pagu9[i_td1j['replace']('this.', '')];
      };return g9qahu;
    }, f87vw['EnvConfig'] = null, f87vw['window'] = null, f87vw['_preCreateElement'] = null, f87vw['_inited'] = ![], f87vw['wxRequest'] = null, f87vw['systemInfo'] = null, f87vw['version'] = '0.0.1', f87vw['isZiYu'] = ![], f87vw['isPosMsgYu'] = ![], f87vw['parseXMLFromString'] = function (qa9rhu) {
      var wavq8r, qwf8rv;qa9rhu = qa9rhu['replace'](/>\s+</g, '><');try {
        wavq8r = new window['Parser']['DOMParser']()['parseFromString'](qa9rhu, 'text/xml');
      } catch (_tdis) {
        throw '需要引入xml解析库文件';
      }return wavq8r;
    }, f87vw['idx'] = 0x1, f87vw;
  }(),
      $5d6jk = function () {
    function wr8qvf() {}ypolnx(wr8qvf, 'laya.wx.mini.MiniImage');var wvfr7 = wr8qvf['prototype'];return wvfr7['_loadImage'] = function (qvru9) {
      var yplxgn = this,
          lypn = ![];qvru9['indexOf']('layaNativeDir/') == -0x1 && (lypn = !![], qvru9 = i65j1['formatURL'](qvru9));if (!puh9g['getFileInfo'](qvru9)) {
        if (qvru9['indexOf']('http://') != -0x1 || qvru9['indexOf']('https://') != -0x1) puh9g['downImg'](qvru9, new xlnyop(wr8qvf, wr8qvf['onDownImgCallBack'], [qvru9, yplxgn]), qvru9);else wr8qvf['onCreateImage'](qvru9, yplxgn, !![]);
      } else wr8qvf['onCreateImage'](qvru9, yplxgn, !lypn);
    }, wr8qvf['onDownImgCallBack'] = function (hurqa9, yg9hpu, wvrf7) {
      if (!wvrf7) wr8qvf['onCreateImage'](hurqa9, yg9hpu);else yg9hpu['onError'](null);
    }, wr8qvf['onCreateImage'] = function (ijd65, hqua9r, q8vwrf) {
      q8vwrf === void 0x0 && (q8vwrf = ![]);var kc$654;if (!q8vwrf) {
        var i65dk = puh9g['getFileInfo'](ijd65),
            fbm847 = i65dk['md5'];kc$654 = puh9g['getFileNativePath'](fbm847);
      } else kc$654 = ijd65;if (hqua9r['imgCache'] == null) hqua9r['imgCache'] = {};var t231_;function _ji5() {
        t231_['onload'] = null, t231_['onerror'] = null, delete hqua9r['imgCache'][ijd65];
      };var wauvq = function () {
        _ji5(), hqua9r['onLoaded'](t231_);
      },
          $kcmb = function () {
        _ji5(), hqua9r['event']('error', 'Load image failed');
      };hqua9r['_type'] == 'nativeimage' ? (t231_ = new oxpy['window']['Image'](), t231_['crossOrigin'] = '', t231_['onload'] = wauvq, t231_['onerror'] = $kcmb, t231_['src'] = kc$654, hqua9r['imgCache'][ijd65] = t231_) : new k4b['create'](kc$654, { 'onload': wauvq, 'onerror': $kcmb, 'onCreate': function (k6jdi5) {
          t231_ = k6jdi5, hqua9r['imgCache'][ijd65] = k6jdi5;
        } });
    }, wr8qvf;
  }(),
      _tijd = function () {
    function ug9yp() {}return ypolnx(ug9yp, 'laya.wx.mini.MiniInput'), ug9yp['_createInputElement'] = function () {
      $bckm['_initInput']($bckm['area'] = oxpy['createElement']('textarea')), $bckm['_initInput']($bckm['input'] = oxpy['createElement']('input')), $bckm['inputContainer'] = oxpy['createElement']('div'), $bckm['inputContainer']['style']['position'] = 'absolute', $bckm['inputContainer']['style']['zIndex'] = 0x186a0, oxpy['container']['appendChild']($bckm['inputContainer']), $bckm['inputContainer']['setPos'] = function (b7fm4, m4$ck) {
        $bckm['inputContainer']['style']['left'] = b7fm4 + 'px', $bckm['inputContainer']['style']['top'] = m4$ck + 'px';
      }, k645$c['stage']['on']('resize', null, ug9yp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qrwu) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yxpo['_soundClass'] = pgyn9, yxpo['_musicClass'] = pgyn9;
    }, ug9yp['_onStageResize'] = function () {
      var c7fm4b = k645$c['stage']['_canvasTransform']['identity']();c7fm4b['scale'](oxpy['width'] / f7w8m['canvas']['width'] / awruvq['getPixelRatio'](), oxpy['height'] / f7w8m['canvas']['height'] / awruvq['getPixelRatio']());
    }, ug9yp['wxinputFocus'] = function (bm8fw7) {
      var mcb4$7 = $bckm['inputElement']['target'];if (mcb4$7 && !mcb4$7['editable']) return;d6kij5['window']['wx']['offKeyboardConfirm'](), d6kij5['window']['wx']['offKeyboardInput'](), d6kij5['window']['wx']['showKeyboard']({ 'defaultValue': mcb4$7['text'], 'maxLength': mcb4$7['maxChars'], 'multiple': mcb4$7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (i_1dts) {}, 'fail': function (bcm4$) {} }), d6kij5['window']['wx']['onKeyboardConfirm'](function (_d1tis) {
        var dt_1ji = _d1tis ? _d1tis['value'] : '';mcb4$7['text'] = dt_1ji, mcb4$7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), d6kij5['window']['wx']['onKeyboardInput'](function (dj$5) {
        var b4mf7c = dj$5 ? dj$5['value'] : '';if (!mcb4$7['multiline']) {
          if (b4mf7c['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }mcb4$7['text'] = b4mf7c, mcb4$7['event']('input');
      });
    }, ug9yp['inputEnter'] = function () {
      $bckm['inputElement']['target']['focus'] = ![];
    }, ug9yp['wxinputblur'] = function () {
      ug9yp['hideKeyboard']();
    }, ug9yp['hideKeyboard'] = function () {
      d6kij5['window']['wx']['offKeyboardConfirm'](), d6kij5['window']['wx']['offKeyboardInput'](), d6kij5['window']['wx']['hideKeyboard']({ 'success': function (jc$6) {
          console['log']('隐藏键盘');
        }, 'fail': function (vw7fm) {
          console['log']('隐藏键盘出错:' + (vw7fm ? vw7fm['errMsg'] : ''));
        } });
    }, ug9yp;
  }(),
      uvwrq = function () {
    function d1t_() {}ypolnx(d1t_, 'laya.wx.mini.MiniLoader');var _si12 = d1t_['prototype'];return _si12['load'] = function (ghy9pn, j_1ti, xpn, pxoly, yngx) {
      xpn === void 0x0 && (xpn = !![]), yngx === void 0x0 && (yngx = ![]);var ylpghn = this;ylpghn['_url'] = ghy9pn;if (ghy9pn['indexOf']('data:image') === 0x0) ylpghn['_type'] = j_1ti = 'image';else ylpghn['_type'] = j_1ti || (j_1ti = ylpghn['getTypeFromUrl'](ghy9pn));ylpghn['_cache'] = xpn, ylpghn['_data'] = null;var cm7b4f = 'ascii';if (ghy9pn['indexOf']('.fnt') != -0x1) cm7b4f = 'utf8';else j_1ti == 'arraybuffer' && (cm7b4f = '');;var ts32z = avurq['getFileExtension'](ghy9pn);if (d1t_['_fileTypeArr']['indexOf'](ts32z) != -0x1) d6kij5['EnvConfig']['load']['call'](this, ghy9pn, j_1ti, xpn, pxoly, yngx);else {
        if (!puh9g['getFileInfo'](ghy9pn)) {
          if (ghy9pn['indexOf']('layaNativeDir/') != -0x1) {
            if (d6kij5['isZiYu']) {
              var kj5$6d = puh9g['ziyuFileData'][ghy9pn];ylpghn['onLoaded'](kj5$6d);return;
            } else {
              cosnole['log']('read read'), puh9g['read'](ghy9pn, cm7b4f, new xlnyop(d1t_, d1t_['onReadNativeCallBack'], [cm7b4f, ghy9pn, j_1ti, xpn, pxoly, yngx, ylpghn]));return;
            }
          }if (i65j1['rootPath'] == '') var s21_3t = ghy9pn;else s21_3t = ghy9pn['split'](i65j1['rootPath'])[0x0];ghy9pn['indexOf']('http://') != -0x1 || ghy9pn['indexOf']('https://') != -0x1 ? d6kij5['EnvConfig']['load']['call'](ylpghn, ghy9pn, j_1ti, xpn, pxoly, yngx) : puh9g['readFile'](s21_3t, cm7b4f, new xlnyop(d1t_, d1t_['onReadNativeCallBack'], [cm7b4f, ghy9pn, j_1ti, xpn, pxoly, yngx, ylpghn]), ghy9pn);
        } else d6kij5['EnvConfig']['load']['call'](this, ghy9pn, j_1ti, xpn, pxoly, yngx);
      }
    }, _si12['resMgrLoad'] = function (cbkm$4, rwuaq, c46, mf78b, s2_03t, wbf78, i_t2) {
      c46 === void 0x0 && (c46 = 0x0), mf78b === void 0x0 && (mf78b = ![]), s2_03t === void 0x0 && (s2_03t = ![]), wbf78 === void 0x0 && (wbf78 = 0x0), i_t2 === void 0x0 && (i_t2 = 0x3), cbkm$4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cbkm$4), d6kij5['EnvConfig']['resMgrLoad'](cbkm$4, (cf4mb7, nlyhg, yol) => {
        d1t_['prototype']['resMgrLoadCallBack'](cf4mb7, nlyhg, yol, rwuaq);
      }, c46, mf78b, s2_03t, wbf78, i_t2);
    }, _si12['resMgrLoadCallBack'] = function (uph9, mf7b4, hglpn, hygu) {
      console['log']('buff:::', uph9, hglpn, puh9g['fileNativeDir'] + '///' + puh9g['fileListName']), hygu(uph9, mf7b4, hglpn);
    }, _si12['clearRes'] = function (mwf78, ah) {
      ah === void 0x0 && (ah = ![]);var h9rqu = this;h9rqu['clearRes'](mwf78, ah);var vwr7f8 = puh9g['getFileInfo'](mwf78);if (vwr7f8 && (mwf78['indexOf']('http://') != -0x1 || mwf78['indexOf']('https://') != -0x1)) {
        var fm74b8 = vwr7f8['md5'],
            uhpy9g = puh9g['getFileNativePath'](fm74b8);puh9g['remove'](uhpy9g);
      }
    }, d1t_['onReadNativeCallBack'] = function (si21t_, ugahq, kcb$64, f87, rqf8wv, v8rqwf, u9hagq, _idtj1, c6b$k) {
      f87 === void 0x0 && (f87 = !![]), v8rqwf === void 0x0 && (v8rqwf = ![]), _idtj1 === void 0x0 && (_idtj1 = 0x0);if (!_idtj1) {
        var _ts321;if (kcb$64 == 'json' || kcb$64 == 'atlas') _ts321 = d6kij5['getJson'](c6b$k['data']);else kcb$64 == 'xml' ? _ts321 = avurq['parseXMLFromString'](c6b$k['data']) : _ts321 = c6b$k['data'];u9hagq['onLoaded'](_ts321), !d6kij5['isZiYu'] && d6kij5['isPosMsgYu'] && kcb$64 != 'arraybuffer' && wx['postMessage']({ 'url': ugahq, 'data': _ts321, 'isLoad': !![] });
      } else _idtj1 == 0x1 && d6kij5['EnvConfig']['load']['call'](u9hagq, ugahq, kcb$64, f87, rqf8wv, v8rqwf);
    }, id65j(d1t_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), d1t_;
  }(),
      puh9g = function (wvaruq) {
    function jkc56() {
      jkc56['__super']['call'](this);;
    }return ypolnx(jkc56, 'laya.wx.mini.MiniFileMgr', wvaruq), jkc56['isLoadFile'] = function (w7v8mf) {
      return jkc56['_fileTypeArr']['indexOf'](w7v8mf) != -0x1 ? !![] : ![];
    }, jkc56['getFileInfo'] = function (ck$56j) {
      var ij15_d = ck$56j['split']('?')[0x0],
          its_d = jkc56['filesListObj'][ij15_d];if (its_d == null) return null;else return its_d;return null;
    }, jkc56['onFileUpdate'] = function (gu9qah, qv9a) {
      var lgxynp = gu9qah['split']('/'),
          w8vqrf = lgxynp[lgxynp['length'] - 0x1],
          apghu9 = jkc56['getFileInfo'](qv9a);if (apghu9 == null) jkc56['onSaveFile'](qv9a, w8vqrf);else {
        if (apghu9['readyUrl'] != qv9a) jkc56['remove'](w8vqrf, qv9a);
      }
    }, jkc56['exits'] = function (i1_jdt, tid1j) {
      var fmbc7 = jkc56['getFileNativePath'](i1_jdt);jkc56['fs']['getFileInfo']({ 'filePath': fmbc7, 'success': function (ti21_s) {
          tid1j != null && tid1j['runWith']([0x0, ti21_s]);
        }, 'fail': function (lxonp) {
          tid1j != null && tid1j['runWith']([0x1, lxonp]);
        } });
    }, jkc56['read'] = function (pxgyn, mwf8v7, mvwf7, j$d6k5) {
      mwf8v7 === void 0x0 && (mwf8v7 = 'ascill'), j$d6k5 === void 0x0 && (j$d6k5 = '');var $4bmck;j$d6k5 != '' ? $4bmck = jkc56['getFileNativePath'](pxgyn) : $4bmck = pxgyn, jkc56['fs']['readFile']({ 'filePath': $4bmck, 'encoding': mwf8v7, 'success': function (g9hyp) {
          mvwf7 != null && mvwf7['runWith']([0x0, g9hyp]);
        }, 'fail': function (fqvr) {
          if (fqvr && j$d6k5 != '') jkc56['down'](j$d6k5, mwf8v7, mvwf7, j$d6k5);else mvwf7 != null && mvwf7['runWith']([0x1]);
        } });
    }, jkc56['readNativeFile'] = function (xyn, gh9ypu) {
      jkc56['fs']['readFile']({ 'filePath': xyn, 'encoding': '', 'success': function (cm$4b) {
          gh9ypu != null && gh9ypu['runWith']([0x0]);
        }, 'fail': function (qvuraw) {
          gh9ypu != null && gh9ypu['runWith']([0x1]);
        } });
    }, jkc56['down'] = function (wf8b7m, kjdi5, ki5d6, rv8aqw) {
      kjdi5 === void 0x0 && (kjdi5 = 'ascill'), rv8aqw === void 0x0 && (rv8aqw = '');var pu9gah = jkc56['getFileNativePath'](rv8aqw),
          rwvq8 = jkc56['wxdown']({ 'url': wf8b7m, 'filePath': pu9gah, 'success': function (uvarw) {
          if (uvarw['statusCode'] === 0xc8) jkc56['readFile'](uvarw['filePath'], kjdi5, ki5d6, rv8aqw);
        }, 'fail': function (qv9ru) {
          ki5d6 != null && ki5d6['runWith']([0x1, qv9ru]);
        } });rwvq8['onProgressUpdate'](function (c$74mb) {
        ki5d6 != null && ki5d6['runWith']([0x2, c$74mb['progress']]);
      });
    }, jkc56['readFile'] = function (yonp, au9qhg, h9ygu, bf4) {
      au9qhg === void 0x0 && (au9qhg = 'ascill'), bf4 === void 0x0 && (bf4 = ''), jkc56['fs']['readFile']({ 'filePath': yonp, 'encoding': au9qhg, 'success': function (mfv78w) {
          if (yonp['indexOf']('http://') != -0x1 || yonp['indexOf']('https://') != -0x1) jkc56['onFileUpdate'](yonp, bf4);h9ygu != null && h9ygu['runWith']([0x0, mfv78w]);
        }, 'fail': function (qvw8rf) {
          if (qvw8rf) h9ygu != null && h9ygu['runWith']([0x1, qvw8rf]);
        } });
    }, jkc56['downImg'] = function (bc$m, idj6k, k4b6$) {
      k4b6$ === void 0x0 && (k4b6$ = '');var mf7b8 = jkc56['wxdown']({ 'url': bc$m, 'success': function (nxgypl) {
          nxgypl['statusCode'] === 0xc8 && jkc56['copyFile'](nxgypl['tempFilePath'], k4b6$, idj6k);
        }, 'fail': function (yh9pu) {
          idj6k != null && idj6k['runWith']([0x1, yh9pu]);
        } });
    }, jkc56['copyFile'] = function (vm78w, kid56, k6$d5) {
      var ckbm4$ = vm78w['split']('/'),
          cb$47 = ckbm4$[ckbm4$['length'] - 0x1],
          glhynp = kid56['split']('?')[0x0],
          hu9qg = jkc56['getFileInfo'](kid56),
          gxypln = jkc56['getFileNativePath'](cb$47);jkc56['fs']['copyFile']({ 'srcPath': vm78w, 'destPath': gxypln, 'success': function (vuraqw) {
          if (!hu9qg) jkc56['onSaveFile'](kid56, cb$47), k6$d5 != null && k6$d5['runWith']([0x0]);else {
            if (hu9qg['readyUrl'] != kid56) jkc56['remove'](cb$47, kid56, k6$d5);
          }
        }, 'fail': function (qrvuaw) {
          k6$d5 != null && k6$d5['runWith']([0x1, qrvuaw]);
        } });
    }, jkc56['getFileNativePath'] = function (t_dij1) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t_dij1;
    }, jkc56['remove'] = function (wfb7, ughyp, rawqv) {
      ughyp === void 0x0 && (ughyp = '');var no = jkc56['getFileInfo'](ughyp),
          c6k5$4 = jkc56['getFileNativePath'](no['md5']);k645$c['loader']['clearRes'](no['readyUrl']), jkc56['fs']['unlink']({ 'filePath': c6k5$4, 'success': function (jd1_i5) {
          if (ughyp != '') jkc56['onSaveFile'](ughyp, wfb7);rawqv != null && rawqv['runWith']([0x0]);
        }, 'fail': function (r87wvf) {} });
    }, jkc56['onSaveFile'] = function (_jd1ti, id61) {
      var fm4b = _jd1ti['split']('?')[0x0];jkc56['filesListObj'][fm4b] = { 'md5': id61, 'readyUrl': _jd1ti }, jkc56['fs']['writeFile']({ 'filePath': jkc56['fileNativeDir'] + '/' + jkc56['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jkc56['filesListObj']), 'success': function (c4) {
          console['log']('写入测试测试成功：', c4);
        }, 'fail': function (j56dk$) {
          console['log']('写入测试测试失败：', j56dk$);
        } });
    }, jkc56['existDir'] = function (bm$k4c, bc4km$) {
      jkc56['fs']['mkdir']({ 'dirPath': bm$k4c, 'success': function (g9yhu) {
          bc4km$ != null && bc4km$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lhpyn) {
          if (lhpyn['errMsg']['indexOf']('file already exists') != -0x1) jkc56['readSync'](jkc56['fileListName'], 'utf8', bc4km$);else bc4km$ != null && bc4km$['runWith']([0x1, lhpyn]);
        } });
    }, jkc56['readSync'] = function (is_d1, v8raw, fcm4, b487mf) {
      v8raw === void 0x0 && (v8raw = 'ascill'), b487mf === void 0x0 && (b487mf = '');var _21ts = jkc56['getFileNativePath'](is_d1),
          gplhn;try {
        gplhn = jkc56['fs']['readFileSync'](_21ts), fcm4 != null && fcm4['runWith']([0x0, { 'data': gplhn }]);
      } catch (r8qa) {
        fcm4 != null && fcm4['runWith']([0x1]);
      }
    }, jkc56['readCache'] = function () {}, jkc56['writeCache'] = function (qravu9) {
      var s_1t32 = readyUrl['split']('?')[0x0];jkc56['filesListObj'][s_1t32] = { 'md5': md5Name, 'readyUrl': readyUrl }, jkc56['fs']['writeFile']({ 'filePath': jkc56['fileNativeDir'] + '/' + jkc56['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jkc56['filesListObj']), 'success': function (jc6k$) {}, 'fail': function (uwravq) {} });
    }, jkc56['setNativeFileDir'] = function (jik6d5) {
      jkc56['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jik6d5;
    }, jkc56['filesListObj'] = {}, jkc56['fileNativeDir'] = null, jkc56['fileListName'] = 'layaairfiles.txt', jkc56['ziyuFileData'] = {}, id65j(jkc56, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), jkc56;
  }($mkbc4),
      pgyn9 = function (lhnyp) {
    function fwm87() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fwm87['__super']['call'](this), this['_sound'] = fwm87['_createSound']();
    }ypolnx(fwm87, 'laya.wx.mini.MiniSound', lhnyp);var aqruv9 = fwm87['prototype'];return aqruv9['load'] = function (uhapg9) {
      var ha9qug = this;uhapg9 = i65j1['formatURL'](uhapg9), this['url'] = uhapg9;if (fwm87['_audioCache'][uhapg9]) {
        this['event']('complete');return;
      }function yh9upg() {
        if (fwm87['_null'] != undefined) ha9qug['_sound']['onCanplay'](fwm87['_null']), ha9qug['_sound']['onError'](fwm87['_null']);else try {
          ha9qug['_sound']['onCanplay'](null), ha9qug['_sound']['onError'](null), fwm87['_null'] = null;
        } catch (j65i1d) {
          console['warn']('[wxmini] _clearSound:' + j65i1d), ha9qug['_sound']['onCanplay'](fv8mw), ha9qug['_sound']['onError'](fv8mw), fwm87['_null'] = fv8mw;
        }
      }function ruqwv() {
        yh9upg(), m7$bc4['loaded'] = !![], m7$bc4['event']('complete'), fwm87['_audioCache'][m7$bc4['url']] = m7$bc4;
      }function u9rqha(gnl) {
        console['error']('errCode=' + gnl['errCode'] + '  errMsg=' + gnl['errMsg']), yh9upg(), m7$bc4['event']('error');
      }function fv8mw() {}this['_sound']['onCanplay'](ruqwv), this['_sound']['onError'](u9rqha), this['_sound']['src'] = uhapg9;var m7$bc4 = this;
    }, aqruv9['play'] = function (f8rvw7, $kcb) {
      f8rvw7 === void 0x0 && (f8rvw7 = 0x0), $kcb === void 0x0 && ($kcb = 0x0);var rvf7w8;if (this['url'] == yxpo['_tMusic']) {
        if (!fwm87['_musicAudio']) fwm87['_musicAudio'] = fwm87['_createSound']();rvf7w8 = fwm87['_musicAudio'];
      } else rvf7w8 = fwm87['_createSound']();rvf7w8['src'] = this['url'];var rhaq9 = new kj5c$(rvf7w8);return rhaq9['url'] = this['url'], rhaq9['loops'] = $kcb, rhaq9['startTime'] = f8rvw7, rhaq9['play'](), yxpo['addChannel'](rhaq9), rhaq9;
    }, aqruv9['dispose'] = function () {
      var py9hng = fwm87['_audioCache'][this['url']];py9hng && (py9hng['src'] = '', delete fwm87['_audioCache'][this['url']]);
    }, uvwra(0x0, aqruv9, 'duration', function () {
      return this['_sound']['duration'];
    }), fwm87['_createSound'] = function () {
      return fwm87['_id']++, d6kij5['window']['wx']['createInnerAudioContext']();
    }, fwm87['_musicAudio'] = null, fwm87['_id'] = 0x0, fwm87['_audioCache'] = {}, fwm87['_null'] = undefined, fwm87;
  }($mkbc4),
      kj5c$ = function (mf8w7) {
    function py9gnh(w8f7m) {
      this['_audio'] = null, this['_onEnd'] = null, py9gnh['__super']['call'](this), this['_audio'] = w8f7m, this['_onEnd'] = avurq['bind'](this['__onEnd'], this), w8f7m['onEnded'](this['_onEnd']);
    }ypolnx(py9gnh, 'laya.wx.mini.MiniSoundChannel', mf8w7);var it1d = py9gnh['prototype'];return it1d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (k645$c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, it1d['__onNull'] = function () {}, it1d['play'] = function () {
      this['isStopped'] = ![], yxpo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, it1d['stop'] = function () {
      this['isStopped'] = !![], yxpo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (py9gnh['_null'] != undefined) this['_audio']['onEnded'](py9gnh['_null']);else try {
        this['_audio']['onEnded'](null), py9gnh['_null'] = null;
      } catch (vru9a) {
        console['warn']('[wxmini] stop:' + vru9a), this['_audio']['onEnded'](avurq['bind'](this['__onNull'], this)), py9gnh['_null'] = avurq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, it1d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, it1d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yxpo['addChannel'](this), this['_audio']['play']();
    }, uvwra(0x0, it1d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), uvwra(0x0, it1d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), uvwra(0x0, it1d, 'volume', function () {
      return 0x1;
    }, function (is_dt1) {}), py9gnh['_null'] = undefined, py9gnh;
  }(yupg);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wruqva in Laya) {
    var rva8 = Laya[wruqva];rva8 && rva8['__isclass'] && (exports[wruqva] = rva8);
  }
});