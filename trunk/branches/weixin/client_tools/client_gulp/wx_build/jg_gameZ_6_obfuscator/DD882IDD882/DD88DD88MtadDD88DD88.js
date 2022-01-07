var G = wx.$E;
(function (window, document, s3_1t) {
  var gpnlyh = s3_1t['un'],
      vqrau = s3_1t['uns'],
      mbk4 = s3_1t['static'],
      lpynox = s3_1t['class'],
      f8w7b = s3_1t['getset'],
      guhq = s3_1t['__newvec'],
      c4m$kb = laya['utils']['Browser'],
      z02ts3 = laya['events']['Event'],
      di5j16 = laya['events']['EventDispatcher'],
      uvwraq = laya['resource']['HTMLImage'],
      ghau9 = laya['utils']['Handler'],
      itj_d1 = laya['display']['Input'],
      avqr9u = laya['net']['Loader'],
      fv8wr7 = laya['maths']['Matrix'],
      uh9pyg = laya['renders']['Render'],
      uaq9h = laya['utils']['RunDriver'],
      kb$cm4 = laya['media']['Sound'],
      ck46b$ = laya['media']['SoundChannel'],
      fb78mw = laya['media']['SoundManager'],
      cb4m7$ = laya['display']['Stage'],
      cf4b = laya['net']['URL'],
      au9qh = laya['utils']['Utils'],
      s12it_ = function () {
    function d$6j5() {}return lpynox(d$6j5, 'laya.wx.mini.MiniAdpter'), d$6j5['getJson'] = function (ts21_i) {
      return JSON['parse'](ts21_i);
    }, d$6j5['init'] = function (d$k56j, lpgn) {
      d$k56j === void 0x0 && (d$k56j = ![]), lpgn === void 0x0 && (lpgn = ![]);if (d$6j5['_inited']) return;d$6j5['window'] = window;if (d$6j5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;d$6j5['_inited'] = !![], d$6j5['isZiYu'] = lpgn, d$6j5['isPosMsgYu'] = d$k56j, d$6j5['EnvConfig'] = {}, !d$6j5['isZiYu'] && (lpyo['setNativeFileDir']('/layaairGame'), lpyo['existDir'](lpyo['fileNativeDir'], ghau9['create'](d$6j5, d$6j5['onMkdirCallBack']))), d$6j5['window']['focus'] = function () {}, s3_1t['getUrlPath'] = function () {}, d$6j5['window']['logtime'] = function (pnxyo) {}, d$6j5['window']['alertTimeLog'] = function (uh9g) {}, d$6j5['window']['resetShareInfo'] = function () {}, d$6j5['window']['CanvasRenderingContext2D'] = function () {}, d$6j5['window']['CanvasRenderingContext2D']['prototype'] = d$6j5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d$6j5['window']['document']['body']['appendChild'] = function () {}, d$6j5['EnvConfig']['pixelRatioInt'] = 0x0, uaq9h['getPixelRatio'] = d$6j5['pixelRatio'], d$6j5['_preCreateElement'] = c4m$kb['createElement'], c4m$kb['createElement'] = d$6j5['createElement'], uaq9h['createShaderCondition'] = d$6j5['createShaderCondition'], au9qh['parseXMLFromString'] = d$6j5['parseXMLFromString'], itj_d1['_createInputElement'] = r8vwa['_createInputElement'], d$6j5['EnvConfig']['load'] = avqr9u['prototype']['load'], avqr9u['prototype']['load'] = i1td['prototype']['load'], d$6j5['isZiYu'] && d$k56j && wx['onMessage'](function (t21s_i) {
        t21s_i['isLoad'] && (lpyo['ziyuFileData'][t21s_i['url']] = t21s_i['data']);
      });
    }, d$6j5['onMkdirCallBack'] = function ($bkm4, rf7w) {
      if (!$bkm4) lpyo['filesListObj'] = JSON['parse'](rf7w['data']);
    }, d$6j5['pixelRatio'] = function () {
      if (!d$6j5['EnvConfig']['pixelRatioInt']) try {
        var cb47m$ = wx['getSystemInfoSync']();return d$6j5['EnvConfig']['pixelRatioInt'] = cb47m$['pixelRatio'], cb47m$ = cb47m$, cb47m$['pixelRatio'];
      } catch (wqvu) {}return d$6j5['EnvConfig']['pixelRatioInt'];
    }, d$6j5['createElement'] = function (sdi1t_) {
      if (sdi1t_ == 'canvas') {
        var i21s_t;return d$6j5['idx'] == 0x1 ? d$6j5['isZiYu'] ? (i21s_t = sharedCanvas, i21s_t['style'] = {}) : i21s_t = window['canvas'] : i21s_t = window['wx']['createCanvas'](), d$6j5['idx']++, i21s_t;
      } else {
        if (sdi1t_ == 'textarea' || sdi1t_ == 'input') return d$6j5['onCreateInput'](sdi1t_);else {
          if (sdi1t_ == 'div') {
            var _jt1 = d$6j5['_preCreateElement'](sdi1t_);return _jt1['contains'] = function (s1itd_) {
              return null;
            }, _jt1['removeChild'] = function (j1_it) {}, _jt1;
          } else return d$6j5['_preCreateElement'](sdi1t_);
        }
      }
    }, d$6j5['onCreateInput'] = function (kij5d6) {
      var vf8wr7 = d$6j5['_preCreateElement'](kij5d6);return vf8wr7['focus'] = r8vwa['wxinputFocus'], vf8wr7['blur'] = r8vwa['wxinputblur'], vf8wr7['style'] = {}, vf8wr7['value'] = 0x0, vf8wr7['parentElement'] = {}, vf8wr7['placeholder'] = {}, vf8wr7['type'] = {}, vf8wr7['setColor'] = function (z20s3t) {}, vf8wr7['setType'] = function (wvuarq) {}, vf8wr7['setFontFace'] = function (gypnxl) {}, vf8wr7['addEventListener'] = function (mv8f) {}, vf8wr7['contains'] = function (oynxl) {
        return null;
      }, vf8wr7['removeChild'] = function (t30z) {}, vf8wr7;
    }, d$6j5['createShaderCondition'] = function (fw8v) {
      var hynlp = this,
          c4kb$6 = function () {
        var uva = fw8v;return hynlp[fw8v['replace']('this.', '')];
      };return c4kb$6;
    }, d$6j5['EnvConfig'] = null, d$6j5['window'] = null, d$6j5['_preCreateElement'] = null, d$6j5['_inited'] = ![], d$6j5['wxRequest'] = null, d$6j5['systemInfo'] = null, d$6j5['version'] = '0.0.1', d$6j5['isZiYu'] = ![], d$6j5['isPosMsgYu'] = ![], d$6j5['parseXMLFromString'] = function (qr9) {
      var qah9gu, nh9gp;qr9 = qr9['replace'](/>\s+</g, '><');try {
        qah9gu = new window['Parser']['DOMParser']()['parseFromString'](qr9, 'text/xml');
      } catch ($45) {
        throw '需要引入xml解析库文件';
      }return qah9gu;
    }, d$6j5['idx'] = 0x1, d$6j5;
  }(),
      t2_30s = function () {
    function urqah() {}lpynox(urqah, 'laya.wx.mini.MiniImage');var hplygn = urqah['prototype'];return hplygn['_loadImage'] = function (w87fv) {
      var ckj6$5 = this,
          plyxno = ![];w87fv['indexOf']('layaNativeDir/') == -0x1 && (plyxno = !![], w87fv = cf4b['formatURL'](w87fv));if (!lpyo['getFileInfo'](w87fv)) {
        if (w87fv['indexOf']('http://') != -0x1 || w87fv['indexOf']('https://') != -0x1) lpyo['downImg'](w87fv, new ghau9(urqah, urqah['onDownImgCallBack'], [w87fv, ckj6$5]), w87fv);else urqah['onCreateImage'](w87fv, ckj6$5, !![]);
      } else urqah['onCreateImage'](w87fv, ckj6$5, !plyxno);
    }, urqah['onDownImgCallBack'] = function (fm8v, lgh, j6i5k) {
      if (!j6i5k) urqah['onCreateImage'](fm8v, lgh);else lgh['onError'](null);
    }, urqah['onCreateImage'] = function (t12_s, zs20t, hq9gau) {
      hq9gau === void 0x0 && (hq9gau = ![]);var aqug9;if (!hq9gau) {
        var gaqh9 = lpyo['getFileInfo'](t12_s),
            dji51_ = gaqh9['md5'];aqug9 = lpyo['getFileNativePath'](dji51_);
      } else aqug9 = t12_s;if (zs20t['imgCache'] == null) zs20t['imgCache'] = {};var b64k$;function _ts21() {
        b64k$['onload'] = null, b64k$['onerror'] = null, delete zs20t['imgCache'][t12_s];
      };var s320t = function () {
        _ts21(), zs20t['onLoaded'](b64k$);
      },
          qrwf8v = function () {
        _ts21(), zs20t['event']('error', 'Load image failed');
      };zs20t['_type'] == 'nativeimage' ? (b64k$ = new c4m$kb['window']['Image'](), b64k$['crossOrigin'] = '', b64k$['onload'] = s320t, b64k$['onerror'] = qrwf8v, b64k$['src'] = aqug9, zs20t['imgCache'][t12_s] = b64k$) : new uvwraq['create'](aqug9, { 'onload': s320t, 'onerror': qrwf8v, 'onCreate': function (_ji1d5) {
          b64k$ = _ji1d5, zs20t['imgCache'][t12_s] = _ji1d5;
        } });
    }, urqah;
  }(),
      r8vwa = function () {
    function glny() {}return lpynox(glny, 'laya.wx.mini.MiniInput'), glny['_createInputElement'] = function () {
      itj_d1['_initInput'](itj_d1['area'] = c4m$kb['createElement']('textarea')), itj_d1['_initInput'](itj_d1['input'] = c4m$kb['createElement']('input')), itj_d1['inputContainer'] = c4m$kb['createElement']('div'), itj_d1['inputContainer']['style']['position'] = 'absolute', itj_d1['inputContainer']['style']['zIndex'] = 0x186a0, c4m$kb['container']['appendChild'](itj_d1['inputContainer']), itj_d1['inputContainer']['setPos'] = function (gxnpy, s21_i) {
        itj_d1['inputContainer']['style']['left'] = gxnpy + 'px', itj_d1['inputContainer']['style']['top'] = s21_i + 'px';
      }, s3_1t['stage']['on']('resize', null, glny['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mk4cb) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fb78mw['_soundClass'] = up9g, fb78mw['_musicClass'] = up9g;
    }, glny['_onStageResize'] = function () {
      var qhug9 = s3_1t['stage']['_canvasTransform']['identity']();qhug9['scale'](c4m$kb['width'] / uh9pyg['canvas']['width'] / uaq9h['getPixelRatio'](), c4m$kb['height'] / uh9pyg['canvas']['height'] / uaq9h['getPixelRatio']());
    }, glny['wxinputFocus'] = function (t_dsi) {
      var qrf8 = itj_d1['inputElement']['target'];if (qrf8 && !qrf8['editable']) return;s12it_['window']['wx']['offKeyboardConfirm'](), s12it_['window']['wx']['offKeyboardInput'](), s12it_['window']['wx']['showKeyboard']({ 'defaultValue': qrf8['text'], 'maxLength': qrf8['maxChars'], 'multiple': qrf8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xgyln) {}, 'fail': function (ck65) {} }), s12it_['window']['wx']['onKeyboardConfirm'](function (fw87) {
        var b7fm8w = fw87 ? fw87['value'] : '';qrf8['text'] = b7fm8w, qrf8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), s12it_['window']['wx']['onKeyboardInput'](function (yh9up) {
        var d5_ij1 = yh9up ? yh9up['value'] : '';if (!qrf8['multiline']) {
          if (d5_ij1['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qrf8['text'] = d5_ij1, qrf8['event']('input');
      });
    }, glny['inputEnter'] = function () {
      itj_d1['inputElement']['target']['focus'] = ![];
    }, glny['wxinputblur'] = function () {
      glny['hideKeyboard']();
    }, glny['hideKeyboard'] = function () {
      s12it_['window']['wx']['offKeyboardConfirm'](), s12it_['window']['wx']['offKeyboardInput'](), s12it_['window']['wx']['hideKeyboard']({ 'success': function (j1_d5i) {
          console['log']('隐藏键盘');
        }, 'fail': function ($4ck6b) {
          console['log']('隐藏键盘出错:' + ($4ck6b ? $4ck6b['errMsg'] : ''));
        } });
    }, glny;
  }(),
      i1td = function () {
    function qaruh() {}lpynox(qaruh, 'laya.wx.mini.MiniLoader');var pgnxy = qaruh['prototype'];return pgnxy['load'] = function (itd_s, _21t3s, fmw7v, id51_, c$kb) {
      fmw7v === void 0x0 && (fmw7v = !![]), c$kb === void 0x0 && (c$kb = ![]);var uv9arq = this;uv9arq['_url'] = itd_s;if (itd_s['indexOf']('data:image') === 0x0) uv9arq['_type'] = _21t3s = 'image';else uv9arq['_type'] = _21t3s || (_21t3s = uv9arq['getTypeFromUrl'](itd_s));uv9arq['_cache'] = fmw7v, uv9arq['_data'] = null;var pyngh9 = 'ascii';if (itd_s['indexOf']('.fnt') != -0x1) pyngh9 = 'utf8';else _21t3s == 'arraybuffer' && (pyngh9 = '');;var $456 = au9qh['getFileExtension'](itd_s);if (qaruh['_fileTypeArr']['indexOf']($456) != -0x1) s12it_['EnvConfig']['load']['call'](this, itd_s, _21t3s, fmw7v, id51_, c$kb);else {
        if (!lpyo['getFileInfo'](itd_s)) {
          if (itd_s['indexOf']('layaNativeDir/') != -0x1) {
            if (s12it_['isZiYu']) {
              var gpxynl = lpyo['ziyuFileData'][itd_s];uv9arq['onLoaded'](gpxynl);return;
            } else {
              cosnole['log']('read read'), lpyo['read'](itd_s, pyngh9, new ghau9(qaruh, qaruh['onReadNativeCallBack'], [pyngh9, itd_s, _21t3s, fmw7v, id51_, c$kb, uv9arq]));return;
            }
          }if (cf4b['rootPath'] == '') var f7m48b = itd_s;else f7m48b = itd_s['split'](cf4b['rootPath'])[0x0];itd_s['indexOf']('http://') != -0x1 || itd_s['indexOf']('https://') != -0x1 ? s12it_['EnvConfig']['load']['call'](uv9arq, itd_s, _21t3s, fmw7v, id51_, c$kb) : lpyo['readFile'](f7m48b, pyngh9, new ghau9(qaruh, qaruh['onReadNativeCallBack'], [pyngh9, itd_s, _21t3s, fmw7v, id51_, c$kb, uv9arq]), itd_s);
        } else s12it_['EnvConfig']['load']['call'](this, itd_s, _21t3s, fmw7v, id51_, c$kb);
      }
    }, pgnxy['resMgrLoad'] = function (m4cfb7, $bc4m, td1j_i, rqvu9, wvf8, uphg9a, lpynx) {
      td1j_i === void 0x0 && (td1j_i = 0x0), rqvu9 === void 0x0 && (rqvu9 = ![]), wvf8 === void 0x0 && (wvf8 = ![]), uphg9a === void 0x0 && (uphg9a = 0x0), lpynx === void 0x0 && (lpynx = 0x3), m4cfb7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m4cfb7), s12it_['EnvConfig']['resMgrLoad'](m4cfb7, (vau, a9guq, quraw) => {
        qaruh['prototype']['resMgrLoadCallBack'](vau, a9guq, quraw, $bc4m);
      }, td1j_i, rqvu9, wvf8, uphg9a, lpynx);
    }, pgnxy['resMgrLoadCallBack'] = function (b4$6c, aurvwq, ynpxgl, ylpxo) {
      console['log']('buff:::', b4$6c, ynpxgl, lpyo['fileNativeDir'] + '///' + lpyo['fileListName']), ylpxo(b4$6c, aurvwq, ynpxgl);
    }, pgnxy['clearRes'] = function (k6di5, f74bmc) {
      f74bmc === void 0x0 && (f74bmc = ![]);var it1_sd = this;it1_sd['clearRes'](k6di5, f74bmc);var v78wm = lpyo['getFileInfo'](k6di5);if (v78wm && (k6di5['indexOf']('http://') != -0x1 || k6di5['indexOf']('https://') != -0x1)) {
        var qrha = v78wm['md5'],
            fm74b8 = lpyo['getFileNativePath'](qrha);lpyo['remove'](fm74b8);
      }
    }, qaruh['onReadNativeCallBack'] = function (kj6, w8mv, k4m$, d6j5k, qauhr, rqav8w, z023ts, b$cm4k, z230st) {
      d6j5k === void 0x0 && (d6j5k = !![]), rqav8w === void 0x0 && (rqav8w = ![]), b$cm4k === void 0x0 && (b$cm4k = 0x0);if (!b$cm4k) {
        var yn9hp;if (k4m$ == 'json' || k4m$ == 'atlas') yn9hp = s12it_['getJson'](z230st['data']);else k4m$ == 'xml' ? yn9hp = au9qh['parseXMLFromString'](z230st['data']) : yn9hp = z230st['data'];z023ts['onLoaded'](yn9hp), !s12it_['isZiYu'] && s12it_['isPosMsgYu'] && k4m$ != 'arraybuffer' && wx['postMessage']({ 'url': w8mv, 'data': yn9hp, 'isLoad': !![] });
      } else b$cm4k == 0x1 && s12it_['EnvConfig']['load']['call'](z023ts, w8mv, k4m$, d6j5k, qauhr, rqav8w);
    }, mbk4(qaruh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qaruh;
  }(),
      lpyo = function (wvqra8) {
    function fv87() {
      fv87['__super']['call'](this);;
    }return lpynox(fv87, 'laya.wx.mini.MiniFileMgr', wvqra8), fv87['isLoadFile'] = function (rqauv9) {
      return fv87['_fileTypeArr']['indexOf'](rqauv9) != -0x1 ? !![] : ![];
    }, fv87['getFileInfo'] = function (j561) {
      var aurqv = j561['split']('?')[0x0],
          it1d_j = fv87['filesListObj'][aurqv];if (it1d_j == null) return null;else return it1d_j;return null;
    }, fv87['onFileUpdate'] = function (ghl, $k5j6) {
      var frw8v7 = ghl['split']('/'),
          plygxn = frw8v7[frw8v7['length'] - 0x1],
          hny9pg = fv87['getFileInfo']($k5j6);if (hny9pg == null) fv87['onSaveFile']($k5j6, plygxn);else {
        if (hny9pg['readyUrl'] != $k5j6) fv87['remove'](plygxn, $k5j6);
      }
    }, fv87['exits'] = function (rwuqa, c645k$) {
      var a9vqru = fv87['getFileNativePath'](rwuqa);fv87['fs']['getFileInfo']({ 'filePath': a9vqru, 'success': function (r9quah) {
          c645k$ != null && c645k$['runWith']([0x0, r9quah]);
        }, 'fail': function (ghyp) {
          c645k$ != null && c645k$['runWith']([0x1, ghyp]);
        } });
    }, fv87['read'] = function (m78wvf, tsi_, cj65k$, v8qfrw) {
      tsi_ === void 0x0 && (tsi_ = 'ascill'), v8qfrw === void 0x0 && (v8qfrw = '');var nygpxl;v8qfrw != '' ? nygpxl = fv87['getFileNativePath'](m78wvf) : nygpxl = m78wvf, fv87['fs']['readFile']({ 'filePath': nygpxl, 'encoding': tsi_, 'success': function (nlxpy) {
          cj65k$ != null && cj65k$['runWith']([0x0, nlxpy]);
        }, 'fail': function (j5$6ck) {
          if (j5$6ck && v8qfrw != '') fv87['down'](v8qfrw, tsi_, cj65k$, v8qfrw);else cj65k$ != null && cj65k$['runWith']([0x1]);
        } });
    }, fv87['readNativeFile'] = function (ij1_d5, fwmb7) {
      fv87['fs']['readFile']({ 'filePath': ij1_d5, 'encoding': '', 'success': function (aur9vq) {
          fwmb7 != null && fwmb7['runWith']([0x0]);
        }, 'fail': function (dt_i) {
          fwmb7 != null && fwmb7['runWith']([0x1]);
        } });
    }, fv87['down'] = function (lngphy, $c6b, fm48b, nxplo) {
      $c6b === void 0x0 && ($c6b = 'ascill'), nxplo === void 0x0 && (nxplo = '');var mc4f7b = fv87['getFileNativePath'](nxplo),
          c74mb = fv87['wxdown']({ 'url': lngphy, 'filePath': mc4f7b, 'success': function (pny9hg) {
          if (pny9hg['statusCode'] === 0xc8) fv87['readFile'](pny9hg['filePath'], $c6b, fm48b, nxplo);
        }, 'fail': function (aupg) {
          fm48b != null && fm48b['runWith']([0x1, aupg]);
        } });c74mb['onProgressUpdate'](function (s0t2z) {
        fm48b != null && fm48b['runWith']([0x2, s0t2z['progress']]);
      });
    }, fv87['readFile'] = function (s2, t21i_, rqv9au, i21_st) {
      t21i_ === void 0x0 && (t21i_ = 'ascill'), i21_st === void 0x0 && (i21_st = ''), fv87['fs']['readFile']({ 'filePath': s2, 'encoding': t21i_, 'success': function (hugqa) {
          if (s2['indexOf']('http://') != -0x1 || s2['indexOf']('https://') != -0x1) fv87['onFileUpdate'](s2, i21_st);rqv9au != null && rqv9au['runWith']([0x0, hugqa]);
        }, 'fail': function (t1jdi) {
          if (t1jdi) rqv9au != null && rqv9au['runWith']([0x1, t1jdi]);
        } });
    }, fv87['downImg'] = function (puagh, r9aq, quvrwa) {
      quvrwa === void 0x0 && (quvrwa = '');var bmf7c4 = fv87['wxdown']({ 'url': puagh, 'success': function (ahgu) {
          ahgu['statusCode'] === 0xc8 && fv87['copyFile'](ahgu['tempFilePath'], quvrwa, r9aq);
        }, 'fail': function (lyno) {
          r9aq != null && r9aq['runWith']([0x1, lyno]);
        } });
    }, fv87['copyFile'] = function (v8wm7f, plxoyn, $k6c4b) {
      var ti2s1_ = v8wm7f['split']('/'),
          b7f = ti2s1_[ti2s1_['length'] - 0x1],
          j$c56k = plxoyn['split']('?')[0x0],
          ruqah9 = fv87['getFileInfo'](plxoyn),
          k$c4mb = fv87['getFileNativePath'](b7f);fv87['fs']['copyFile']({ 'srcPath': v8wm7f, 'destPath': k$c4mb, 'success': function (rvqf8) {
          if (!ruqah9) fv87['onSaveFile'](plxoyn, b7f), $k6c4b != null && $k6c4b['runWith']([0x0]);else {
            if (ruqah9['readyUrl'] != plxoyn) fv87['remove'](b7f, plxoyn, $k6c4b);
          }
        }, 'fail': function (bm78fw) {
          $k6c4b != null && $k6c4b['runWith']([0x1, bm78fw]);
        } });
    }, fv87['getFileNativePath'] = function (fmc) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fmc;
    }, fv87['remove'] = function (_12st3, d5j61i, bk$c6) {
      d5j61i === void 0x0 && (d5j61i = '');var yxlnpg = fv87['getFileInfo'](d5j61i),
          _ist21 = fv87['getFileNativePath'](yxlnpg['md5']);s3_1t['loader']['clearRes'](yxlnpg['readyUrl']), fv87['fs']['unlink']({ 'filePath': _ist21, 'success': function (huagp9) {
          if (d5j61i != '') fv87['onSaveFile'](d5j61i, _12st3);bk$c6 != null && bk$c6['runWith']([0x0]);
        }, 'fail': function (hpagu) {} });
    }, fv87['onSaveFile'] = function ($j6k5, mcb4$) {
      var _sitd1 = $j6k5['split']('?')[0x0];fv87['filesListObj'][_sitd1] = { 'md5': mcb4$, 'readyUrl': $j6k5 }, fv87['fs']['writeFile']({ 'filePath': fv87['fileNativeDir'] + '/' + fv87['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fv87['filesListObj']), 'success': function (v8fr7) {
          console['log']('写入测试测试成功：', v8fr7);
        }, 'fail': function (rvaqu9) {
          console['log']('写入测试测试失败：', rvaqu9);
        } });
    }, fv87['existDir'] = function (r8qav, f87mbw) {
      fv87['fs']['mkdir']({ 'dirPath': r8qav, 'success': function (s_2t13) {
          f87mbw != null && f87mbw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wrua) {
          if (wrua['errMsg']['indexOf']('file already exists') != -0x1) fv87['readSync'](fv87['fileListName'], 'utf8', f87mbw);else f87mbw != null && f87mbw['runWith']([0x1, wrua]);
        } });
    }, fv87['readSync'] = function (qw8vra, ck$4bm, d$56, wqav8r) {
      ck$4bm === void 0x0 && (ck$4bm = 'ascill'), wqav8r === void 0x0 && (wqav8r = '');var pnglhy = fv87['getFileNativePath'](qw8vra),
          cb$4mk;try {
        cb$4mk = fv87['fs']['readFileSync'](pnglhy), d$56 != null && d$56['runWith']([0x0, { 'data': cb$4mk }]);
      } catch ($5djk) {
        d$56 != null && d$56['runWith']([0x1]);
      }
    }, fv87['readCache'] = function () {}, fv87['writeCache'] = function (w7mb8f) {
      var d_jt = readyUrl['split']('?')[0x0];fv87['filesListObj'][d_jt] = { 'md5': md5Name, 'readyUrl': readyUrl }, fv87['fs']['writeFile']({ 'filePath': fv87['fileNativeDir'] + '/' + fv87['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fv87['filesListObj']), 'success': function (c$k4) {}, 'fail': function (c64kb) {} });
    }, fv87['setNativeFileDir'] = function (kd$5) {
      fv87['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kd$5;
    }, fv87['filesListObj'] = {}, fv87['fileNativeDir'] = null, fv87['fileListName'] = 'layaairfiles.txt', fv87['ziyuFileData'] = {}, mbk4(fv87, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fv87;
  }(di5j16),
      up9g = function (rahu9) {
    function loxp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], loxp['__super']['call'](this), this['_sound'] = loxp['_createSound']();
    }lpynox(loxp, 'laya.wx.mini.MiniSound', rahu9);var m4$c7 = loxp['prototype'];return m4$c7['load'] = function (std1i) {
      var j_1i5 = this;std1i = cf4b['formatURL'](std1i), this['url'] = std1i;if (loxp['_audioCache'][std1i]) {
        this['event']('complete');return;
      }function gy9p() {
        if (loxp['_null'] != undefined) j_1i5['_sound']['onCanplay'](loxp['_null']), j_1i5['_sound']['onError'](loxp['_null']);else try {
          j_1i5['_sound']['onCanplay'](null), j_1i5['_sound']['onError'](null), loxp['_null'] = null;
        } catch (b$mk4) {
          console['warn']('[wxmini] _clearSound:' + b$mk4), j_1i5['_sound']['onCanplay'](gnplyx), j_1i5['_sound']['onError'](gnplyx), loxp['_null'] = gnplyx;
        }
      }function ti_ds() {
        gy9p(), v9a['loaded'] = !![], v9a['event']('complete'), loxp['_audioCache'][v9a['url']] = v9a;
      }function nplx(kdj$) {
        console['error']('errCode=' + kdj$['errCode'] + '  errMsg=' + kdj$['errMsg']), gy9p(), v9a['event']('error');
      }function gnplyx() {}this['_sound']['onCanplay'](ti_ds), this['_sound']['onError'](nplx), this['_sound']['src'] = std1i;var v9a = this;
    }, m4$c7['play'] = function (gypl, k5c6$j) {
      gypl === void 0x0 && (gypl = 0x0), k5c6$j === void 0x0 && (k5c6$j = 0x0);var v87wfm;if (this['url'] == fb78mw['_tMusic']) {
        if (!loxp['_musicAudio']) loxp['_musicAudio'] = loxp['_createSound']();v87wfm = loxp['_musicAudio'];
      } else v87wfm = loxp['_createSound']();v87wfm['src'] = this['url'];var h9gpua = new fwr8v(v87wfm);return h9gpua['url'] = this['url'], h9gpua['loops'] = k5c6$j, h9gpua['startTime'] = gypl, h9gpua['play'](), fb78mw['addChannel'](h9gpua), h9gpua;
    }, m4$c7['dispose'] = function () {
      var j$5dk6 = loxp['_audioCache'][this['url']];j$5dk6 && (j$5dk6['src'] = '', delete loxp['_audioCache'][this['url']]);
    }, f8w7b(0x0, m4$c7, 'duration', function () {
      return this['_sound']['duration'];
    }), loxp['_createSound'] = function () {
      return loxp['_id']++, s12it_['window']['wx']['createInnerAudioContext']();
    }, loxp['_musicAudio'] = null, loxp['_id'] = 0x0, loxp['_audioCache'] = {}, loxp['_null'] = undefined, loxp;
  }(di5j16),
      fwr8v = function (ck$6b4) {
    function jdi516(lopxy) {
      this['_audio'] = null, this['_onEnd'] = null, jdi516['__super']['call'](this), this['_audio'] = lopxy, this['_onEnd'] = au9qh['bind'](this['__onEnd'], this), lopxy['onEnded'](this['_onEnd']);
    }lpynox(jdi516, 'laya.wx.mini.MiniSoundChannel', ck$6b4);var bfm87w = jdi516['prototype'];return bfm87w['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (s3_1t['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bfm87w['__onNull'] = function () {}, bfm87w['play'] = function () {
      this['isStopped'] = ![], fb78mw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bfm87w['stop'] = function () {
      this['isStopped'] = !![], fb78mw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jdi516['_null'] != undefined) this['_audio']['onEnded'](jdi516['_null']);else try {
        this['_audio']['onEnded'](null), jdi516['_null'] = null;
      } catch (jdi51) {
        console['warn']('[wxmini] stop:' + jdi51), this['_audio']['onEnded'](au9qh['bind'](this['__onNull'], this)), jdi516['_null'] = au9qh['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, bfm87w['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bfm87w['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fb78mw['addChannel'](this), this['_audio']['play']();
    }, f8w7b(0x0, bfm87w, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f8w7b(0x0, bfm87w, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f8w7b(0x0, bfm87w, 'volume', function () {
      return 0x1;
    }, function (puahg) {}), jdi516['_null'] = undefined, jdi516;
  }(ck46b$);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var b4kcm in Laya) {
    var uhpy9g = Laya[b4kcm];uhpy9g && uhpy9g['__isclass'] && (exports[b4kcm] = uhpy9g);
  }
});