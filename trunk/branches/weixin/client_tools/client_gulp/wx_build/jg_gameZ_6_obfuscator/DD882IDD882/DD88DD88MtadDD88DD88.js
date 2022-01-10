var G = wx.$E;
(function (window, document, $5c6kj) {
  var rw8qa = $5c6kj['un'],
      wvfq8r = $5c6kj['uns'],
      s1ti = $5c6kj['static'],
      oxpny = $5c6kj['class'],
      frq8w = $5c6kj['getset'],
      xpoly = $5c6kj['__newvec'],
      ck6j$ = laya['utils']['Browser'],
      kd65i = laya['events']['Event'],
      $4bck6 = laya['events']['EventDispatcher'],
      $56dk = laya['resource']['HTMLImage'],
      k$cj65 = laya['utils']['Handler'],
      npylg = laya['display']['Input'],
      m4fc = laya['net']['Loader'],
      gpynlh = laya['maths']['Matrix'],
      hgu9ap = laya['renders']['Render'],
      fq = laya['utils']['RunDriver'],
      i6k = laya['media']['Sound'],
      nhp9yg = laya['media']['SoundChannel'],
      pyo = laya['media']['SoundManager'],
      lygnxp = laya['display']['Stage'],
      nglyx = laya['net']['URL'],
      yhg9up = laya['utils']['Utils'],
      c5$k46 = function () {
    function vm8f7() {}return oxpny(vm8f7, 'laya.wx.mini.MiniAdpter'), vm8f7['getJson'] = function (s_t2i1) {
      return JSON['parse'](s_t2i1);
    }, vm8f7['init'] = function (ypxgn, _s3t) {
      ypxgn === void 0x0 && (ypxgn = ![]), _s3t === void 0x0 && (_s3t = ![]);if (vm8f7['_inited']) return;vm8f7['window'] = window;if (vm8f7['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vm8f7['_inited'] = !![], vm8f7['isZiYu'] = _s3t, vm8f7['isPosMsgYu'] = ypxgn, vm8f7['EnvConfig'] = {}, !vm8f7['isZiYu'] && (t2i1_['setNativeFileDir']('/layaairGame'), t2i1_['existDir'](t2i1_['fileNativeDir'], k$cj65['create'](vm8f7, vm8f7['onMkdirCallBack']))), vm8f7['window']['focus'] = function () {}, $5c6kj['getUrlPath'] = function () {}, vm8f7['window']['logtime'] = function (idj1t) {}, vm8f7['window']['alertTimeLog'] = function ($bk4c6) {}, vm8f7['window']['resetShareInfo'] = function () {}, vm8f7['window']['CanvasRenderingContext2D'] = function () {}, vm8f7['window']['CanvasRenderingContext2D']['prototype'] = vm8f7['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vm8f7['window']['document']['body']['appendChild'] = function () {}, vm8f7['EnvConfig']['pixelRatioInt'] = 0x0, fq['getPixelRatio'] = vm8f7['pixelRatio'], vm8f7['_preCreateElement'] = ck6j$['createElement'], ck6j$['createElement'] = vm8f7['createElement'], fq['createShaderCondition'] = vm8f7['createShaderCondition'], yhg9up['parseXMLFromString'] = vm8f7['parseXMLFromString'], npylg['_createInputElement'] = mvfw8['_createInputElement'], vm8f7['EnvConfig']['load'] = m4fc['prototype']['load'], m4fc['prototype']['load'] = i1_dj5['prototype']['load'], vm8f7['isZiYu'] && ypxgn && wx['onMessage'](function (rvqfw) {
        rvqfw['isLoad'] && (t2i1_['ziyuFileData'][rvqfw['url']] = rvqfw['data']);
      });
    }, vm8f7['onMkdirCallBack'] = function (s3_t1, lynopx) {
      if (!s3_t1) t2i1_['filesListObj'] = JSON['parse'](lynopx['data']);
    }, vm8f7['pixelRatio'] = function () {
      if (!vm8f7['EnvConfig']['pixelRatioInt']) try {
        var si1_dt = wx['getSystemInfoSync']();return vm8f7['EnvConfig']['pixelRatioInt'] = si1_dt['pixelRatio'], si1_dt = si1_dt, si1_dt['pixelRatio'];
      } catch (bm4k$c) {}return vm8f7['EnvConfig']['pixelRatioInt'];
    }, vm8f7['createElement'] = function (g9n) {
      if (g9n == 'canvas') {
        var yhpng9;return vm8f7['idx'] == 0x1 ? vm8f7['isZiYu'] ? (yhpng9 = sharedCanvas, yhpng9['style'] = {}) : yhpng9 = window['canvas'] : yhpng9 = window['wx']['createCanvas'](), vm8f7['idx']++, yhpng9;
      } else {
        if (g9n == 'textarea' || g9n == 'input') return vm8f7['onCreateInput'](g9n);else {
          if (g9n == 'div') {
            var pyxgnl = vm8f7['_preCreateElement'](g9n);return pyxgnl['contains'] = function (d5i1_) {
              return null;
            }, pyxgnl['removeChild'] = function (t_1) {}, pyxgnl;
          } else return vm8f7['_preCreateElement'](g9n);
        }
      }
    }, vm8f7['onCreateInput'] = function (apuh9g) {
      var r87fv = vm8f7['_preCreateElement'](apuh9g);return r87fv['focus'] = mvfw8['wxinputFocus'], r87fv['blur'] = mvfw8['wxinputblur'], r87fv['style'] = {}, r87fv['value'] = 0x0, r87fv['parentElement'] = {}, r87fv['placeholder'] = {}, r87fv['type'] = {}, r87fv['setColor'] = function (uhag) {}, r87fv['setType'] = function (i1_st) {}, r87fv['setFontFace'] = function (ti1_sd) {}, r87fv['addEventListener'] = function (j$ck) {}, r87fv['contains'] = function (bfm478) {
        return null;
      }, r87fv['removeChild'] = function (avqrw) {}, r87fv;
    }, vm8f7['createShaderCondition'] = function (kj5$6d) {
      var fvwm = this,
          ahp9u = function () {
        var _1tsi2 = kj5$6d;return fvwm[kj5$6d['replace']('this.', '')];
      };return ahp9u;
    }, vm8f7['EnvConfig'] = null, vm8f7['window'] = null, vm8f7['_preCreateElement'] = null, vm8f7['_inited'] = ![], vm8f7['wxRequest'] = null, vm8f7['systemInfo'] = null, vm8f7['version'] = '0.0.1', vm8f7['isZiYu'] = ![], vm8f7['isPosMsgYu'] = ![], vm8f7['parseXMLFromString'] = function (g9aphu) {
      var _132ts, ylnpox;g9aphu = g9aphu['replace'](/>\s+</g, '><');try {
        _132ts = new window['Parser']['DOMParser']()['parseFromString'](g9aphu, 'text/xml');
      } catch (hq9ag) {
        throw '需要引入xml解析库文件';
      }return _132ts;
    }, vm8f7['idx'] = 0x1, vm8f7;
  }(),
      gylp = function () {
    function qvwaur() {}oxpny(qvwaur, 'laya.wx.mini.MiniImage');var uqa9g = qvwaur['prototype'];return uqa9g['_loadImage'] = function (hpyn9) {
      var lxonp = this,
          c$4mb7 = ![];hpyn9['indexOf']('layaNativeDir/') == -0x1 && (c$4mb7 = !![], hpyn9 = nglyx['formatURL'](hpyn9));if (!t2i1_['getFileInfo'](hpyn9)) {
        if (hpyn9['indexOf']('http://') != -0x1 || hpyn9['indexOf']('https://') != -0x1) t2i1_['downImg'](hpyn9, new k$cj65(qvwaur, qvwaur['onDownImgCallBack'], [hpyn9, lxonp]), hpyn9);else qvwaur['onCreateImage'](hpyn9, lxonp, !![]);
      } else qvwaur['onCreateImage'](hpyn9, lxonp, !c$4mb7);
    }, qvwaur['onDownImgCallBack'] = function (w8, c$j5, aurq9h) {
      if (!aurq9h) qvwaur['onCreateImage'](w8, c$j5);else c$j5['onError'](null);
    }, qvwaur['onCreateImage'] = function (hua9g, itd1_s, b$c46) {
      b$c46 === void 0x0 && (b$c46 = ![]);var fv78wr;if (!b$c46) {
        var pylon = t2i1_['getFileInfo'](hua9g),
            b7mc4f = pylon['md5'];fv78wr = t2i1_['getFileNativePath'](b7mc4f);
      } else fv78wr = hua9g;if (itd1_s['imgCache'] == null) itd1_s['imgCache'] = {};var pn9y;function lgpxn() {
        pn9y['onload'] = null, pn9y['onerror'] = null, delete itd1_s['imgCache'][hua9g];
      };var rauqw = function () {
        lgpxn(), itd1_s['onLoaded'](pn9y);
      },
          t23s1_ = function () {
        lgpxn(), itd1_s['event']('error', 'Load image failed');
      };itd1_s['_type'] == 'nativeimage' ? (pn9y = new ck6j$['window']['Image'](), pn9y['crossOrigin'] = '', pn9y['onload'] = rauqw, pn9y['onerror'] = t23s1_, pn9y['src'] = fv78wr, itd1_s['imgCache'][hua9g] = pn9y) : new $56dk['create'](fv78wr, { 'onload': rauqw, 'onerror': t23s1_, 'onCreate': function (q9uvra) {
          pn9y = q9uvra, itd1_s['imgCache'][hua9g] = q9uvra;
        } });
    }, qvwaur;
  }(),
      mvfw8 = function () {
    function frqvw() {}return oxpny(frqvw, 'laya.wx.mini.MiniInput'), frqvw['_createInputElement'] = function () {
      npylg['_initInput'](npylg['area'] = ck6j$['createElement']('textarea')), npylg['_initInput'](npylg['input'] = ck6j$['createElement']('input')), npylg['inputContainer'] = ck6j$['createElement']('div'), npylg['inputContainer']['style']['position'] = 'absolute', npylg['inputContainer']['style']['zIndex'] = 0x186a0, ck6j$['container']['appendChild'](npylg['inputContainer']), npylg['inputContainer']['setPos'] = function (d15j6, cmb47$) {
        npylg['inputContainer']['style']['left'] = d15j6 + 'px', npylg['inputContainer']['style']['top'] = cmb47$ + 'px';
      }, $5c6kj['stage']['on']('resize', null, frqvw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (j5_1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pyo['_soundClass'] = cbm7$, pyo['_musicClass'] = cbm7$;
    }, frqvw['_onStageResize'] = function () {
      var pu9ahg = $5c6kj['stage']['_canvasTransform']['identity']();pu9ahg['scale'](ck6j$['width'] / hgu9ap['canvas']['width'] / fq['getPixelRatio'](), ck6j$['height'] / hgu9ap['canvas']['height'] / fq['getPixelRatio']());
    }, frqvw['wxinputFocus'] = function (c56j$k) {
      var j65kc$ = npylg['inputElement']['target'];if (j65kc$ && !j65kc$['editable']) return;c5$k46['window']['wx']['offKeyboardConfirm'](), c5$k46['window']['wx']['offKeyboardInput'](), c5$k46['window']['wx']['showKeyboard']({ 'defaultValue': j65kc$['text'], 'maxLength': j65kc$['maxChars'], 'multiple': j65kc$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xpylng) {}, 'fail': function (yph9gn) {} }), c5$k46['window']['wx']['onKeyboardConfirm'](function (qwravu) {
        var pgyl = qwravu ? qwravu['value'] : '';j65kc$['text'] = pgyl, j65kc$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), c5$k46['window']['wx']['onKeyboardInput'](function (hqgau) {
        var $6c4bk = hqgau ? hqgau['value'] : '';if (!j65kc$['multiline']) {
          if ($6c4bk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }j65kc$['text'] = $6c4bk, j65kc$['event']('input');
      });
    }, frqvw['inputEnter'] = function () {
      npylg['inputElement']['target']['focus'] = ![];
    }, frqvw['wxinputblur'] = function () {
      frqvw['hideKeyboard']();
    }, frqvw['hideKeyboard'] = function () {
      c5$k46['window']['wx']['offKeyboardConfirm'](), c5$k46['window']['wx']['offKeyboardInput'](), c5$k46['window']['wx']['hideKeyboard']({ 'success': function (t2_3s1) {
          console['log']('隐藏键盘');
        }, 'fail': function (nlypx) {
          console['log']('隐藏键盘出错:' + (nlypx ? nlypx['errMsg'] : ''));
        } });
    }, frqvw;
  }(),
      i1_dj5 = function () {
    function s3z0t() {}oxpny(s3z0t, 'laya.wx.mini.MiniLoader');var uavq9r = s3z0t['prototype'];return uavq9r['load'] = function (s123_, $5k64, wvuaqr, fb47c, vw8m) {
      wvuaqr === void 0x0 && (wvuaqr = !![]), vw8m === void 0x0 && (vw8m = ![]);var t3_s12 = this;t3_s12['_url'] = s123_;if (s123_['indexOf']('data:image') === 0x0) t3_s12['_type'] = $5k64 = 'image';else t3_s12['_type'] = $5k64 || ($5k64 = t3_s12['getTypeFromUrl'](s123_));t3_s12['_cache'] = wvuaqr, t3_s12['_data'] = null;var yug9h = 'ascii';if (s123_['indexOf']('.fnt') != -0x1) yug9h = 'utf8';else $5k64 == 'arraybuffer' && (yug9h = '');;var v9qru = yhg9up['getFileExtension'](s123_);if (s3z0t['_fileTypeArr']['indexOf'](v9qru) != -0x1) c5$k46['EnvConfig']['load']['call'](this, s123_, $5k64, wvuaqr, fb47c, vw8m);else {
        if (!t2i1_['getFileInfo'](s123_)) {
          if (s123_['indexOf']('layaNativeDir/') != -0x1) {
            if (c5$k46['isZiYu']) {
              var m8bw7 = t2i1_['ziyuFileData'][s123_];t3_s12['onLoaded'](m8bw7);return;
            } else {
              cosnole['log']('read read'), t2i1_['read'](s123_, yug9h, new k$cj65(s3z0t, s3z0t['onReadNativeCallBack'], [yug9h, s123_, $5k64, wvuaqr, fb47c, vw8m, t3_s12]));return;
            }
          }if (nglyx['rootPath'] == '') var $5jd6k = s123_;else $5jd6k = s123_['split'](nglyx['rootPath'])[0x0];s123_['indexOf']('http://') != -0x1 || s123_['indexOf']('https://') != -0x1 ? c5$k46['EnvConfig']['load']['call'](t3_s12, s123_, $5k64, wvuaqr, fb47c, vw8m) : t2i1_['readFile']($5jd6k, yug9h, new k$cj65(s3z0t, s3z0t['onReadNativeCallBack'], [yug9h, s123_, $5k64, wvuaqr, fb47c, vw8m, t3_s12]), s123_);
        } else c5$k46['EnvConfig']['load']['call'](this, s123_, $5k64, wvuaqr, fb47c, vw8m);
      }
    }, uavq9r['resMgrLoad'] = function (mvw87f, nhgply, ijd6, tidj_, gnlpy, k$4cb, _s3t1) {
      ijd6 === void 0x0 && (ijd6 = 0x0), tidj_ === void 0x0 && (tidj_ = ![]), gnlpy === void 0x0 && (gnlpy = ![]), k$4cb === void 0x0 && (k$4cb = 0x0), _s3t1 === void 0x0 && (_s3t1 = 0x3), mvw87f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mvw87f), c5$k46['EnvConfig']['resMgrLoad'](mvw87f, (itd_s1, lnyxp, c$k4) => {
        s3z0t['prototype']['resMgrLoadCallBack'](itd_s1, lnyxp, c$k4, nhgply);
      }, ijd6, tidj_, gnlpy, k$4cb, _s3t1);
    }, uavq9r['resMgrLoadCallBack'] = function (auhp, rqwva, s1i_t2, qr8avw) {
      console['log']('buff:::', auhp, s1i_t2, t2i1_['fileNativeDir'] + '///' + t2i1_['fileListName']), qr8avw(auhp, rqwva, s1i_t2);
    }, uavq9r['clearRes'] = function (nlxpy, nhgypl) {
      nhgypl === void 0x0 && (nhgypl = ![]);var qwv = this;qwv['clearRes'](nlxpy, nhgypl);var $jkc5 = t2i1_['getFileInfo'](nlxpy);if ($jkc5 && (nlxpy['indexOf']('http://') != -0x1 || nlxpy['indexOf']('https://') != -0x1)) {
        var wv8qrf = $jkc5['md5'],
            ynglx = t2i1_['getFileNativePath'](wv8qrf);t2i1_['remove'](ynglx);
      }
    }, s3z0t['onReadNativeCallBack'] = function (kc465, uga9h, mb874, a9qur, t_13, b74fmc, i_std1, zt32s, y9hnpg) {
      a9qur === void 0x0 && (a9qur = !![]), b74fmc === void 0x0 && (b74fmc = ![]), zt32s === void 0x0 && (zt32s = 0x0);if (!zt32s) {
        var olypxn;if (mb874 == 'json' || mb874 == 'atlas') olypxn = c5$k46['getJson'](y9hnpg['data']);else mb874 == 'xml' ? olypxn = yhg9up['parseXMLFromString'](y9hnpg['data']) : olypxn = y9hnpg['data'];i_std1['onLoaded'](olypxn), !c5$k46['isZiYu'] && c5$k46['isPosMsgYu'] && mb874 != 'arraybuffer' && wx['postMessage']({ 'url': uga9h, 'data': olypxn, 'isLoad': !![] });
      } else zt32s == 0x1 && c5$k46['EnvConfig']['load']['call'](i_std1, uga9h, mb874, a9qur, t_13, b74fmc);
    }, s1ti(s3z0t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s3z0t;
  }(),
      t2i1_ = function (_jd5i1) {
    function fqr8() {
      fqr8['__super']['call'](this);;
    }return oxpny(fqr8, 'laya.wx.mini.MiniFileMgr', _jd5i1), fqr8['isLoadFile'] = function (qgah9u) {
      return fqr8['_fileTypeArr']['indexOf'](qgah9u) != -0x1 ? !![] : ![];
    }, fqr8['getFileInfo'] = function (mk$4c) {
      var idst_1 = mk$4c['split']('?')[0x0],
          ts230_ = fqr8['filesListObj'][idst_1];if (ts230_ == null) return null;else return ts230_;return null;
    }, fqr8['onFileUpdate'] = function (s_dti1, ruhq9a) {
      var k$5cj = s_dti1['split']('/'),
          _1sdit = k$5cj[k$5cj['length'] - 0x1],
          $5j6d = fqr8['getFileInfo'](ruhq9a);if ($5j6d == null) fqr8['onSaveFile'](ruhq9a, _1sdit);else {
        if ($5j6d['readyUrl'] != ruhq9a) fqr8['remove'](_1sdit, ruhq9a);
      }
    }, fqr8['exits'] = function (p9yhu, fw7vm8) {
      var w8rqa = fqr8['getFileNativePath'](p9yhu);fqr8['fs']['getFileInfo']({ 'filePath': w8rqa, 'success': function (_s32t) {
          fw7vm8 != null && fw7vm8['runWith']([0x0, _s32t]);
        }, 'fail': function (gh9au) {
          fw7vm8 != null && fw7vm8['runWith']([0x1, gh9au]);
        } });
    }, fqr8['read'] = function (_dit, _02s, hqgu, vmwf) {
      _02s === void 0x0 && (_02s = 'ascill'), vmwf === void 0x0 && (vmwf = '');var rvw8f7;vmwf != '' ? rvw8f7 = fqr8['getFileNativePath'](_dit) : rvw8f7 = _dit, fqr8['fs']['readFile']({ 'filePath': rvw8f7, 'encoding': _02s, 'success': function (c$mb4) {
          hqgu != null && hqgu['runWith']([0x0, c$mb4]);
        }, 'fail': function (nyoxpl) {
          if (nyoxpl && vmwf != '') fqr8['down'](vmwf, _02s, hqgu, vmwf);else hqgu != null && hqgu['runWith']([0x1]);
        } });
    }, fqr8['readNativeFile'] = function (wm7v8, ti21_) {
      fqr8['fs']['readFile']({ 'filePath': wm7v8, 'encoding': '', 'success': function (yonl) {
          ti21_ != null && ti21_['runWith']([0x0]);
        }, 'fail': function (tij_d1) {
          ti21_ != null && ti21_['runWith']([0x1]);
        } });
    }, fqr8['down'] = function (y9phng, b87mf, b$c4km, mc4b$7) {
      b87mf === void 0x0 && (b87mf = 'ascill'), mc4b$7 === void 0x0 && (mc4b$7 = '');var i65dk = fqr8['getFileNativePath'](mc4b$7),
          h9puyg = fqr8['wxdown']({ 'url': y9phng, 'filePath': i65dk, 'success': function (t0_32s) {
          if (t0_32s['statusCode'] === 0xc8) fqr8['readFile'](t0_32s['filePath'], b87mf, b$c4km, mc4b$7);
        }, 'fail': function (ts_di1) {
          b$c4km != null && b$c4km['runWith']([0x1, ts_di1]);
        } });h9puyg['onProgressUpdate'](function (dj561i) {
        b$c4km != null && b$c4km['runWith']([0x2, dj561i['progress']]);
      });
    }, fqr8['readFile'] = function (onlxpy, fm4c, aqrwvu, t2_3s) {
      fm4c === void 0x0 && (fm4c = 'ascill'), t2_3s === void 0x0 && (t2_3s = ''), fqr8['fs']['readFile']({ 'filePath': onlxpy, 'encoding': fm4c, 'success': function (c6$kb4) {
          if (onlxpy['indexOf']('http://') != -0x1 || onlxpy['indexOf']('https://') != -0x1) fqr8['onFileUpdate'](onlxpy, t2_3s);aqrwvu != null && aqrwvu['runWith']([0x0, c6$kb4]);
        }, 'fail': function (ahguq) {
          if (ahguq) aqrwvu != null && aqrwvu['runWith']([0x1, ahguq]);
        } });
    }, fqr8['downImg'] = function (k5d6ij, di_1st, cbk6) {
      cbk6 === void 0x0 && (cbk6 = '');var fm78wv = fqr8['wxdown']({ 'url': k5d6ij, 'success': function (mv7wf8) {
          mv7wf8['statusCode'] === 0xc8 && fqr8['copyFile'](mv7wf8['tempFilePath'], cbk6, di_1st);
        }, 'fail': function (kcj65$) {
          di_1st != null && di_1st['runWith']([0x1, kcj65$]);
        } });
    }, fqr8['copyFile'] = function (w7fmv, c$mkb4, _t2s) {
      var w87vrf = w7fmv['split']('/'),
          qarh9u = w87vrf[w87vrf['length'] - 0x1],
          lyngp = c$mkb4['split']('?')[0x0],
          uq9gha = fqr8['getFileInfo'](c$mkb4),
          pnyxl = fqr8['getFileNativePath'](qarh9u);fqr8['fs']['copyFile']({ 'srcPath': w7fmv, 'destPath': pnyxl, 'success': function (q9uhga) {
          if (!uq9gha) fqr8['onSaveFile'](c$mkb4, qarh9u), _t2s != null && _t2s['runWith']([0x0]);else {
            if (uq9gha['readyUrl'] != c$mkb4) fqr8['remove'](qarh9u, c$mkb4, _t2s);
          }
        }, 'fail': function (wfb78) {
          _t2s != null && _t2s['runWith']([0x1, wfb78]);
        } });
    }, fqr8['getFileNativePath'] = function (m7bfc4) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + m7bfc4;
    }, fqr8['remove'] = function (_si12, cm4b$7, rf8v7) {
      cm4b$7 === void 0x0 && (cm4b$7 = '');var hyu9p = fqr8['getFileInfo'](cm4b$7),
          ynlo = fqr8['getFileNativePath'](hyu9p['md5']);$5c6kj['loader']['clearRes'](hyu9p['readyUrl']), fqr8['fs']['unlink']({ 'filePath': ynlo, 'success': function (_1dtj) {
          if (cm4b$7 != '') fqr8['onSaveFile'](cm4b$7, _si12);rf8v7 != null && rf8v7['runWith']([0x0]);
        }, 'fail': function (m847) {} });
    }, fqr8['onSaveFile'] = function (poyx, $b4k6) {
      var glxynp = poyx['split']('?')[0x0];fqr8['filesListObj'][glxynp] = { 'md5': $b4k6, 'readyUrl': poyx }, fqr8['fs']['writeFile']({ 'filePath': fqr8['fileNativeDir'] + '/' + fqr8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fqr8['filesListObj']), 'success': function (m$74c) {
          console['log']('写入测试测试成功：', m$74c);
        }, 'fail': function (wf8vqr) {
          console['log']('写入测试测试失败：', wf8vqr);
        } });
    }, fqr8['existDir'] = function (dt1si_, $4kbm) {
      fqr8['fs']['mkdir']({ 'dirPath': dt1si_, 'success': function (qrv9u) {
          $4kbm != null && $4kbm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ij5d6) {
          if (ij5d6['errMsg']['indexOf']('file already exists') != -0x1) fqr8['readSync'](fqr8['fileListName'], 'utf8', $4kbm);else $4kbm != null && $4kbm['runWith']([0x1, ij5d6]);
        } });
    }, fqr8['readSync'] = function (i_2t1s, j15i_, j61di, vwq8) {
      j15i_ === void 0x0 && (j15i_ = 'ascill'), vwq8 === void 0x0 && (vwq8 = '');var uawvq = fqr8['getFileNativePath'](i_2t1s),
          wrva;try {
        wrva = fqr8['fs']['readFileSync'](uawvq), j61di != null && j61di['runWith']([0x0, { 'data': wrva }]);
      } catch (ra8q) {
        j61di != null && j61di['runWith']([0x1]);
      }
    }, fqr8['readCache'] = function () {}, fqr8['writeCache'] = function (s_2t) {
      var ugah = readyUrl['split']('?')[0x0];fqr8['filesListObj'][ugah] = { 'md5': md5Name, 'readyUrl': readyUrl }, fqr8['fs']['writeFile']({ 'filePath': fqr8['fileNativeDir'] + '/' + fqr8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fqr8['filesListObj']), 'success': function (_1tsi) {}, 'fail': function (h9uagq) {} });
    }, fqr8['setNativeFileDir'] = function (nphygl) {
      fqr8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nphygl;
    }, fqr8['filesListObj'] = {}, fqr8['fileNativeDir'] = null, fqr8['fileListName'] = 'layaairfiles.txt', fqr8['ziyuFileData'] = {}, s1ti(fqr8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fqr8;
  }($4bck6),
      cbm7$ = function (lxypo) {
    function auvwrq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], auvwrq['__super']['call'](this), this['_sound'] = auvwrq['_createSound']();
    }oxpny(auvwrq, 'laya.wx.mini.MiniSound', lxypo);var s_dt = auvwrq['prototype'];return s_dt['load'] = function (z320ts) {
      var xpyoln = this;z320ts = nglyx['formatURL'](z320ts), this['url'] = z320ts;if (auvwrq['_audioCache'][z320ts]) {
        this['event']('complete');return;
      }function plxon() {
        if (auvwrq['_null'] != undefined) xpyoln['_sound']['onCanplay'](auvwrq['_null']), xpyoln['_sound']['onError'](auvwrq['_null']);else try {
          xpyoln['_sound']['onCanplay'](null), xpyoln['_sound']['onError'](null), auvwrq['_null'] = null;
        } catch (m874) {
          console['warn']('[wxmini] _clearSound:' + m874), xpyoln['_sound']['onCanplay'](uhgaq9), xpyoln['_sound']['onError'](uhgaq9), auvwrq['_null'] = uhgaq9;
        }
      }function yph9ug() {
        plxon(), gnlph['loaded'] = !![], gnlph['event']('complete'), auvwrq['_audioCache'][gnlph['url']] = gnlph;
      }function hua9r(lpoxy) {
        console['error']('errCode=' + lpoxy['errCode'] + '  errMsg=' + lpoxy['errMsg']), plxon(), gnlph['event']('error');
      }function uhgaq9() {}this['_sound']['onCanplay'](yph9ug), this['_sound']['onError'](hua9r), this['_sound']['src'] = z320ts;var gnlph = this;
    }, s_dt['play'] = function (vf7r, nyhg9p) {
      vf7r === void 0x0 && (vf7r = 0x0), nyhg9p === void 0x0 && (nyhg9p = 0x0);var _23;if (this['url'] == pyo['_tMusic']) {
        if (!auvwrq['_musicAudio']) auvwrq['_musicAudio'] = auvwrq['_createSound']();_23 = auvwrq['_musicAudio'];
      } else _23 = auvwrq['_createSound']();_23['src'] = this['url'];var vwf78 = new mw78bf(_23);return vwf78['url'] = this['url'], vwf78['loops'] = nyhg9p, vwf78['startTime'] = vf7r, vwf78['play'](), pyo['addChannel'](vwf78), vwf78;
    }, s_dt['dispose'] = function () {
      var $7mcb4 = auvwrq['_audioCache'][this['url']];$7mcb4 && ($7mcb4['src'] = '', delete auvwrq['_audioCache'][this['url']]);
    }, frq8w(0x0, s_dt, 'duration', function () {
      return this['_sound']['duration'];
    }), auvwrq['_createSound'] = function () {
      return auvwrq['_id']++, c5$k46['window']['wx']['createInnerAudioContext']();
    }, auvwrq['_musicAudio'] = null, auvwrq['_id'] = 0x0, auvwrq['_audioCache'] = {}, auvwrq['_null'] = undefined, auvwrq;
  }($4bck6),
      mw78bf = function (k6$j5c) {
    function $4kcm(gap) {
      this['_audio'] = null, this['_onEnd'] = null, $4kcm['__super']['call'](this), this['_audio'] = gap, this['_onEnd'] = yhg9up['bind'](this['__onEnd'], this), gap['onEnded'](this['_onEnd']);
    }oxpny($4kcm, 'laya.wx.mini.MiniSoundChannel', k6$j5c);var uyp9 = $4kcm['prototype'];return uyp9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($5c6kj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uyp9['__onNull'] = function () {}, uyp9['play'] = function () {
      this['isStopped'] = ![], pyo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, uyp9['stop'] = function () {
      this['isStopped'] = !![], pyo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($4kcm['_null'] != undefined) this['_audio']['onEnded']($4kcm['_null']);else try {
        this['_audio']['onEnded'](null), $4kcm['_null'] = null;
      } catch (sdt_) {
        console['warn']('[wxmini] stop:' + sdt_), this['_audio']['onEnded'](yhg9up['bind'](this['__onNull'], this)), $4kcm['_null'] = yhg9up['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, uyp9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, uyp9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pyo['addChannel'](this), this['_audio']['play']();
    }, frq8w(0x0, uyp9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), frq8w(0x0, uyp9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), frq8w(0x0, uyp9, 'volume', function () {
      return 0x1;
    }, function (b8m7fw) {}), $4kcm['_null'] = undefined, $4kcm;
  }(nhp9yg);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wfm87 in Laya) {
    var $c4bk = Laya[wfm87];$c4bk && $c4bk['__isclass'] && (exports[wfm87] = $c4bk);
  }
});