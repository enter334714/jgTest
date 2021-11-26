var B = wx.$z;
(function (window, document, jq$mi) {
  var h1xsa = jq$mi['un'],
      do8y = jq$mi['uns'],
      f4gp6 = jq$mi['static'],
      r_25wu = jq$mi['class'],
      in3lm7 = jq$mi['getset'],
      g14ph = jq$mi['__newvec'],
      r52_u = laya['utils']['Browser'],
      uw502_ = laya['events']['Event'],
      rk8dby = laya['events']['EventDispatcher'],
      qj3m = laya['resource']['HTMLImage'],
      i$qjm = laya['utils']['Handler'],
      lfi7vn = laya['display']['Input'],
      j3$miq = laya['net']['Loader'],
      phg914 = laya['maths']['Matrix'],
      x1ha9 = laya['renders']['Render'],
      sxzeta = laya['utils']['RunDriver'],
      vf7ln = laya['media']['Sound'],
      dzyet = laya['media']['SoundChannel'],
      d8ybr = laya['media']['SoundManager'],
      etozas = laya['display']['Stage'],
      p9h1s = laya['net']['URL'],
      rb85_ = laya['utils']['Utils'],
      x9gph = function () {
    function fv7nl6() {}return r_25wu(fv7nl6, 'laya.wx.mini.MiniAdpter'), fv7nl6['getJson'] = function (bdok) {
      return JSON['parse'](bdok);
    }, fv7nl6['init'] = function (u8_5r2, _wu5) {
      u8_5r2 === void 0x0 && (u8_5r2 = ![]), _wu5 === void 0x0 && (_wu5 = ![]);if (fv7nl6['_inited']) return;fv7nl6['window'] = window;if (fv7nl6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fv7nl6['_inited'] = !![], fv7nl6['isZiYu'] = _wu5, fv7nl6['isPosMsgYu'] = u8_5r2, fv7nl6['EnvConfig'] = {}, !fv7nl6['isZiYu'] && (zstoea['setNativeFileDir']('/layaairGame'), zstoea['existDir'](zstoea['fileNativeDir'], i$qjm['create'](fv7nl6, fv7nl6['onMkdirCallBack']))), fv7nl6['window']['focus'] = function () {}, jq$mi['getUrlPath'] = function () {}, fv7nl6['window']['logtime'] = function (xhpg19) {}, fv7nl6['window']['alertTimeLog'] = function (fp6gv) {}, fv7nl6['window']['resetShareInfo'] = function () {}, fv7nl6['window']['CanvasRenderingContext2D'] = function () {}, fv7nl6['window']['CanvasRenderingContext2D']['prototype'] = fv7nl6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fv7nl6['window']['document']['body']['appendChild'] = function () {}, fv7nl6['EnvConfig']['pixelRatioInt'] = 0x0, sxzeta['getPixelRatio'] = fv7nl6['pixelRatio'], fv7nl6['_preCreateElement'] = r52_u['createElement'], r52_u['createElement'] = fv7nl6['createElement'], sxzeta['createShaderCondition'] = fv7nl6['createShaderCondition'], rb85_['parseXMLFromString'] = fv7nl6['parseXMLFromString'], lfi7vn['_createInputElement'] = dtzy['_createInputElement'], fv7nl6['EnvConfig']['load'] = j3$miq['prototype']['load'], j3$miq['prototype']['load'] = q$m3ji['prototype']['load'], fv7nl6['isZiYu'] && u8_5r2 && wx['onMessage'](function (jmq$3) {
        jmq$3['isLoad'] && (zstoea['ziyuFileData'][jmq$3['url']] = jmq$3['data']);
      });
    }, fv7nl6['onMkdirCallBack'] = function (f4pgv, qm3$j) {
      if (!f4pgv) zstoea['filesListObj'] = JSON['parse'](qm3$j['data']);
    }, fv7nl6['pixelRatio'] = function () {
      if (!fv7nl6['EnvConfig']['pixelRatioInt']) try {
        var _bk85r = wx['getSystemInfoSync']();return fv7nl6['EnvConfig']['pixelRatioInt'] = _bk85r['pixelRatio'], _bk85r = _bk85r, _bk85r['pixelRatio'];
      } catch (l4v6f) {}return fv7nl6['EnvConfig']['pixelRatioInt'];
    }, fv7nl6['createElement'] = function ($7q3im) {
      if ($7q3im == 'canvas') {
        var imq$3j;return fv7nl6['idx'] == 0x1 ? fv7nl6['isZiYu'] ? (imq$3j = sharedCanvas, imq$3j['style'] = {}) : imq$3j = window['canvas'] : imq$3j = window['wx']['createCanvas'](), fv7nl6['idx']++, imq$3j;
      } else {
        if ($7q3im == 'textarea' || $7q3im == 'input') return fv7nl6['onCreateInput']($7q3im);else {
          if ($7q3im == 'div') {
            var zoatse = fv7nl6['_preCreateElement']($7q3im);return zoatse['contains'] = function (nm7i3q) {
              return null;
            }, zoatse['removeChild'] = function (_w205u) {}, zoatse;
          } else return fv7nl6['_preCreateElement']($7q3im);
        }
      }
    }, fv7nl6['onCreateInput'] = function (pfh6g) {
      var mqi73 = fv7nl6['_preCreateElement'](pfh6g);return mqi73['focus'] = dtzy['wxinputFocus'], mqi73['blur'] = dtzy['wxinputblur'], mqi73['style'] = {}, mqi73['value'] = 0x0, mqi73['parentElement'] = {}, mqi73['placeholder'] = {}, mqi73['type'] = {}, mqi73['setColor'] = function (i7nlfv) {}, mqi73['setType'] = function (u_52rw) {}, mqi73['setFontFace'] = function (bk8d) {}, mqi73['addEventListener'] = function (hf46g) {}, mqi73['contains'] = function (kr_y8) {
        return null;
      }, mqi73['removeChild'] = function (p4fg) {}, mqi73;
    }, fv7nl6['createShaderCondition'] = function (s9xph1) {
      var b5_r82 = this,
          h19gp = function () {
        var rkb_8y = s9xph1;return b5_r82[s9xph1['replace']('this.', '')];
      };return h19gp;
    }, fv7nl6['EnvConfig'] = null, fv7nl6['window'] = null, fv7nl6['_preCreateElement'] = null, fv7nl6['_inited'] = ![], fv7nl6['wxRequest'] = null, fv7nl6['systemInfo'] = null, fv7nl6['version'] = '0.0.1', fv7nl6['isZiYu'] = ![], fv7nl6['isPosMsgYu'] = ![], fv7nl6['parseXMLFromString'] = function (l76f) {
      var yodzet, eaxs9z;l76f = l76f['replace'](/>\s+</g, '><');try {
        yodzet = new window['Parser']['DOMParser']()['parseFromString'](l76f, 'text/xml');
      } catch (v76nfl) {
        throw '需要引入xml解析库文件';
      }return yodzet;
    }, fv7nl6['idx'] = 0x1, fv7nl6;
  }(),
      otdybk = function () {
    function r_5uw() {}r_25wu(r_5uw, 'laya.wx.mini.MiniImage');var m3l7n = r_5uw['prototype'];return m3l7n['_loadImage'] = function (g16p4h) {
      var jmi = this,
          qnmi3 = ![];g16p4h['indexOf']('layaNativeDir/') == -0x1 && (qnmi3 = !![], g16p4h = p9h1s['formatURL'](g16p4h));if (!zstoea['getFileInfo'](g16p4h)) {
        if (g16p4h['indexOf']('http://') != -0x1 || g16p4h['indexOf']('https://') != -0x1) zstoea['downImg'](g16p4h, new i$qjm(r_5uw, r_5uw['onDownImgCallBack'], [g16p4h, jmi]), g16p4h);else r_5uw['onCreateImage'](g16p4h, jmi, !![]);
      } else r_5uw['onCreateImage'](g16p4h, jmi, !qnmi3);
    }, r_5uw['onDownImgCallBack'] = function (eydoz, zxta, g19xhp) {
      if (!g19xhp) r_5uw['onCreateImage'](eydoz, zxta);else zxta['onError'](null);
    }, r_5uw['onCreateImage'] = function (l3nm7i, l7vim, zsaxe9) {
      zsaxe9 === void 0x0 && (zsaxe9 = ![]);var h4gp;if (!zsaxe9) {
        var gh4p9 = zstoea['getFileInfo'](l3nm7i),
            kzoydt = gh4p9['md5'];h4gp = zstoea['getFileNativePath'](kzoydt);
      } else h4gp = l3nm7i;if (l7vim['imgCache'] == null) l7vim['imgCache'] = {};var rybk_;function byr8k_() {
        rybk_['onload'] = null, rybk_['onerror'] = null, delete l7vim['imgCache'][l3nm7i];
      };var axs1e9 = function () {
        byr8k_(), l7vim['onLoaded'](rybk_);
      },
          zsea = function () {
        byr8k_(), l7vim['event']('error', 'Load image failed');
      };l7vim['_type'] == 'nativeimage' ? (rybk_ = new r52_u['window']['Image'](), rybk_['crossOrigin'] = '', rybk_['onload'] = axs1e9, rybk_['onerror'] = zsea, rybk_['src'] = h4gp, l7vim['imgCache'][l3nm7i] = rybk_) : new qj3m['create'](h4gp, { 'onload': axs1e9, 'onerror': zsea, 'onCreate': function (_r2b85) {
          rybk_ = _r2b85, l7vim['imgCache'][l3nm7i] = _r2b85;
        } });
    }, r_5uw;
  }(),
      dtzy = function () {
    function xe91() {}return r_25wu(xe91, 'laya.wx.mini.MiniInput'), xe91['_createInputElement'] = function () {
      lfi7vn['_initInput'](lfi7vn['area'] = r52_u['createElement']('textarea')), lfi7vn['_initInput'](lfi7vn['input'] = r52_u['createElement']('input')), lfi7vn['inputContainer'] = r52_u['createElement']('div'), lfi7vn['inputContainer']['style']['position'] = 'absolute', lfi7vn['inputContainer']['style']['zIndex'] = 0x186a0, r52_u['container']['appendChild'](lfi7vn['inputContainer']), lfi7vn['inputContainer']['setPos'] = function (azxte, fg6lv) {
        lfi7vn['inputContainer']['style']['left'] = azxte + 'px', lfi7vn['inputContainer']['style']['top'] = fg6lv + 'px';
      }, jq$mi['stage']['on']('resize', null, xe91['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($qj3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), d8ybr['_soundClass'] = hg64fp, d8ybr['_musicClass'] = hg64fp;
    }, xe91['_onStageResize'] = function () {
      var q$i3j = jq$mi['stage']['_canvasTransform']['identity']();q$i3j['scale'](r52_u['width'] / x1ha9['canvas']['width'] / sxzeta['getPixelRatio'](), r52_u['height'] / x1ha9['canvas']['height'] / sxzeta['getPixelRatio']());
    }, xe91['wxinputFocus'] = function (r_u) {
      var s9xe = lfi7vn['inputElement']['target'];if (s9xe && !s9xe['editable']) return;x9gph['window']['wx']['offKeyboardConfirm'](), x9gph['window']['wx']['offKeyboardInput'](), x9gph['window']['wx']['showKeyboard']({ 'defaultValue': s9xe['text'], 'maxLength': s9xe['maxChars'], 'multiple': s9xe['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dtbk) {}, 'fail': function (_0u5w) {} }), x9gph['window']['wx']['onKeyboardConfirm'](function (vf4g6p) {
        var zsxae9 = vf4g6p ? vf4g6p['value'] : '';s9xe['text'] = zsxae9, s9xe['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), x9gph['window']['wx']['onKeyboardInput'](function (i3qm$) {
        var nqm73 = i3qm$ ? i3qm$['value'] : '';if (!s9xe['multiline']) {
          if (nqm73['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s9xe['text'] = nqm73, s9xe['event']('input');
      });
    }, xe91['inputEnter'] = function () {
      lfi7vn['inputElement']['target']['focus'] = ![];
    }, xe91['wxinputblur'] = function () {
      xe91['hideKeyboard']();
    }, xe91['hideKeyboard'] = function () {
      x9gph['window']['wx']['offKeyboardConfirm'](), x9gph['window']['wx']['offKeyboardInput'](), x9gph['window']['wx']['hideKeyboard']({ 'success': function ($miqj3) {
          console['log']('隐藏键盘');
        }, 'fail': function (jq$3m) {
          console['log']('隐藏键盘出错:' + (jq$3m ? jq$3m['errMsg'] : ''));
        } });
    }, xe91;
  }(),
      q$m3ji = function () {
    function ybto() {}r_25wu(ybto, 'laya.wx.mini.MiniLoader');var v4pg = ybto['prototype'];return v4pg['load'] = function (ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58) {
      eas9zx === void 0x0 && (eas9zx = !![]), _bkr58 === void 0x0 && (_bkr58 = ![]);var eodzta = this;eodzta['_url'] = ln64vf;if (ln64vf['indexOf']('data:image') === 0x0) eodzta['_type'] = kb_r8y = 'image';else eodzta['_type'] = kb_r8y || (kb_r8y = eodzta['getTypeFromUrl'](ln64vf));eodzta['_cache'] = eas9zx, eodzta['_data'] = null;var f6vl4g = 'ascii';if (ln64vf['indexOf']('.fnt') != -0x1) f6vl4g = 'utf8';else kb_r8y == 'arraybuffer' && (f6vl4g = '');;var e1ax9s = rb85_['getFileExtension'](ln64vf);if (ybto['_fileTypeArr']['indexOf'](e1ax9s) != -0x1) x9gph['EnvConfig']['load']['call'](this, ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58);else {
        if (!zstoea['getFileInfo'](ln64vf)) {
          if (ln64vf['indexOf']('layaNativeDir/') != -0x1) {
            if (x9gph['isZiYu']) {
              var dyzt = zstoea['ziyuFileData'][ln64vf];eodzta['onLoaded'](dyzt);return;
            } else {
              cosnole['log']('read read'), zstoea['read'](ln64vf, f6vl4g, new i$qjm(ybto, ybto['onReadNativeCallBack'], [f6vl4g, ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58, eodzta]));return;
            }
          }if (p9h1s['rootPath'] == '') var obydt = ln64vf;else obydt = ln64vf['split'](p9h1s['rootPath'])[0x0];ln64vf['indexOf']('http://') != -0x1 || ln64vf['indexOf']('https://') != -0x1 ? x9gph['EnvConfig']['load']['call'](eodzta, ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58) : zstoea['readFile'](obydt, f6vl4g, new i$qjm(ybto, ybto['onReadNativeCallBack'], [f6vl4g, ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58, eodzta]), ln64vf);
        } else x9gph['EnvConfig']['load']['call'](this, ln64vf, kb_r8y, eas9zx, mi7nvl, _bkr58);
      }
    }, v4pg['resMgrLoad'] = function (tdao, _ykr8b, ezdot, qm37$i, zxsaet, bykd, rb2_) {
      ezdot === void 0x0 && (ezdot = 0x0), qm37$i === void 0x0 && (qm37$i = ![]), zxsaet === void 0x0 && (zxsaet = ![]), bykd === void 0x0 && (bykd = 0x0), rb2_ === void 0x0 && (rb2_ = 0x3), tdao['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tdao), x9gph['EnvConfig']['resMgrLoad'](tdao, (p941h, b8r_5, h41g) => {
        ybto['prototype']['resMgrLoadCallBack'](p941h, b8r_5, h41g, _ykr8b);
      }, ezdot, qm37$i, zxsaet, bykd, rb2_);
    }, v4pg['resMgrLoadCallBack'] = function (szxtea, m$iq73, iq3mj, m3qji) {
      console['log']('buff:::', szxtea, iq3mj, zstoea['fileNativeDir'] + '///' + zstoea['fileListName']), m3qji(szxtea, m$iq73, iq3mj);
    }, v4pg['clearRes'] = function (hg49p1, i3l) {
      i3l === void 0x0 && (i3l = ![]);var nlvmi = this;nlvmi['clearRes'](hg49p1, i3l);var i7l3m = zstoea['getFileInfo'](hg49p1);if (i7l3m && (hg49p1['indexOf']('http://') != -0x1 || hg49p1['indexOf']('https://') != -0x1)) {
        var r2 = i7l3m['md5'],
            zxest = zstoea['getFileNativePath'](r2);zstoea['remove'](zxest);
      }
    }, ybto['onReadNativeCallBack'] = function (ea9xsz, b8r5_, fh46gp, esxatz, glv4f, r_25u, taeszo, _b8r25, nf7vi) {
      esxatz === void 0x0 && (esxatz = !![]), r_25u === void 0x0 && (r_25u = ![]), _b8r25 === void 0x0 && (_b8r25 = 0x0);if (!_b8r25) {
        var r528_b;if (fh46gp == 'json' || fh46gp == 'atlas') r528_b = x9gph['getJson'](nf7vi['data']);else fh46gp == 'xml' ? r528_b = rb85_['parseXMLFromString'](nf7vi['data']) : r528_b = nf7vi['data'];taeszo['onLoaded'](r528_b), !x9gph['isZiYu'] && x9gph['isPosMsgYu'] && fh46gp != 'arraybuffer' && wx['postMessage']({ 'url': b8r5_, 'data': r528_b, 'isLoad': !![] });
      } else _b8r25 == 0x1 && x9gph['EnvConfig']['load']['call'](taeszo, b8r5_, fh46gp, esxatz, glv4f, r_25u);
    }, f4gp6(ybto, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ybto;
  }(),
      zstoea = function (ur_w5) {
    function sexza() {
      sexza['__super']['call'](this);;
    }return r_25wu(sexza, 'laya.wx.mini.MiniFileMgr', ur_w5), sexza['isLoadFile'] = function (asx9e1) {
      return sexza['_fileTypeArr']['indexOf'](asx9e1) != -0x1 ? !![] : ![];
    }, sexza['getFileInfo'] = function (_58br) {
      var jq3mi$ = _58br['split']('?')[0x0],
          xaezt = sexza['filesListObj'][jq3mi$];if (xaezt == null) return null;else return xaezt;return null;
    }, sexza['onFileUpdate'] = function (dzytk, v46lfn) {
      var ghp1 = dzytk['split']('/'),
          tzyodk = ghp1[ghp1['length'] - 0x1],
          otdyb = sexza['getFileInfo'](v46lfn);if (otdyb == null) sexza['onSaveFile'](v46lfn, tzyodk);else {
        if (otdyb['readyUrl'] != v46lfn) sexza['remove'](tzyodk, v46lfn);
      }
    }, sexza['exits'] = function (w_u52r, ezxs) {
      var r_8yb = sexza['getFileNativePath'](w_u52r);sexza['fs']['getFileInfo']({ 'filePath': r_8yb, 'success': function (qm73i$) {
          ezxs != null && ezxs['runWith']([0x0, qm73i$]);
        }, 'fail': function (gpf64) {
          ezxs != null && ezxs['runWith']([0x1, gpf64]);
        } });
    }, sexza['read'] = function (p64ghf, vinl, d8yrk, r8_byk) {
      vinl === void 0x0 && (vinl = 'ascill'), r8_byk === void 0x0 && (r8_byk = '');var tkboy;r8_byk != '' ? tkboy = sexza['getFileNativePath'](p64ghf) : tkboy = p64ghf, sexza['fs']['readFile']({ 'filePath': tkboy, 'encoding': vinl, 'success': function (pxg1h9) {
          d8yrk != null && d8yrk['runWith']([0x0, pxg1h9]);
        }, 'fail': function (byktd) {
          if (byktd && r8_byk != '') sexza['down'](r8_byk, vinl, d8yrk, r8_byk);else d8yrk != null && d8yrk['runWith']([0x1]);
        } });
    }, sexza['readNativeFile'] = function (lfin7, vp6f4) {
      sexza['fs']['readFile']({ 'filePath': lfin7, 'encoding': '', 'success': function (setzx) {
          vp6f4 != null && vp6f4['runWith']([0x0]);
        }, 'fail': function (sxztea) {
          vp6f4 != null && vp6f4['runWith']([0x1]);
        } });
    }, sexza['down'] = function (eyoz, xzat, ex19s, krbdy) {
      xzat === void 0x0 && (xzat = 'ascill'), krbdy === void 0x0 && (krbdy = '');var f46g = sexza['getFileNativePath'](krbdy),
          u50_2w = sexza['wxdown']({ 'url': eyoz, 'filePath': f46g, 'success': function (aezs9) {
          if (aezs9['statusCode'] === 0xc8) sexza['readFile'](aezs9['filePath'], xzat, ex19s, krbdy);
        }, 'fail': function (v6f7l) {
          ex19s != null && ex19s['runWith']([0x1, v6f7l]);
        } });u50_2w['onProgressUpdate'](function (xae9sz) {
        ex19s != null && ex19s['runWith']([0x2, xae9sz['progress']]);
      });
    }, sexza['readFile'] = function (n76flv, bkr_y, teazso, fh64) {
      bkr_y === void 0x0 && (bkr_y = 'ascill'), fh64 === void 0x0 && (fh64 = ''), sexza['fs']['readFile']({ 'filePath': n76flv, 'encoding': bkr_y, 'success': function (a9s1xh) {
          if (n76flv['indexOf']('http://') != -0x1 || n76flv['indexOf']('https://') != -0x1) sexza['onFileUpdate'](n76flv, fh64);teazso != null && teazso['runWith']([0x0, a9s1xh]);
        }, 'fail': function (zyoedt) {
          if (zyoedt) teazso != null && teazso['runWith']([0x1, zyoedt]);
        } });
    }, sexza['downImg'] = function (mli3n, minl7, h4gp61) {
      h4gp61 === void 0x0 && (h4gp61 = '');var dtzeoa = sexza['wxdown']({ 'url': mli3n, 'success': function (uw52_) {
          uw52_['statusCode'] === 0xc8 && sexza['copyFile'](uw52_['tempFilePath'], h4gp61, minl7);
        }, 'fail': function (yrkd8) {
          minl7 != null && minl7['runWith']([0x1, yrkd8]);
        } });
    }, sexza['copyFile'] = function (qm3, xpsh1, g6p41h) {
      var u_rw52 = qm3['split']('/'),
          rbyk8 = u_rw52[u_rw52['length'] - 0x1],
          br82_ = xpsh1['split']('?')[0x0],
          saot = sexza['getFileInfo'](xpsh1),
          dytb = sexza['getFileNativePath'](rbyk8);sexza['fs']['copyFile']({ 'srcPath': qm3, 'destPath': dytb, 'success': function (sh19xp) {
          if (!saot) sexza['onSaveFile'](xpsh1, rbyk8), g6p41h != null && g6p41h['runWith']([0x0]);else {
            if (saot['readyUrl'] != xpsh1) sexza['remove'](rbyk8, xpsh1, g6p41h);
          }
        }, 'fail': function (bo8yk) {
          g6p41h != null && g6p41h['runWith']([0x1, bo8yk]);
        } });
    }, sexza['getFileNativePath'] = function (w_50u2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + w_50u2;
    }, sexza['remove'] = function (rby8, b582_r, inv7fl) {
      b582_r === void 0x0 && (b582_r = '');var dty = sexza['getFileInfo'](b582_r),
          koty = sexza['getFileNativePath'](dty['md5']);jq$mi['loader']['clearRes'](dty['readyUrl']), sexza['fs']['unlink']({ 'filePath': koty, 'success': function (kbydr8) {
          if (b582_r != '') sexza['onSaveFile'](b582_r, rby8);inv7fl != null && inv7fl['runWith']([0x0]);
        }, 'fail': function (vn4f6l) {} });
    }, sexza['onSaveFile'] = function (_8y, r2_u85) {
      var saeztx = _8y['split']('?')[0x0];sexza['filesListObj'][saeztx] = { 'md5': r2_u85, 'readyUrl': _8y }, sexza['fs']['writeFile']({ 'filePath': sexza['fileNativeDir'] + '/' + sexza['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sexza['filesListObj']), 'success': function (im7lvn) {
          console['log']('写入测试测试成功：', im7lvn);
        }, 'fail': function (_58r2b) {
          console['log']('写入测试测试失败：', _58r2b);
        } });
    }, sexza['existDir'] = function (vpg4f, pg9x1h) {
      sexza['fs']['mkdir']({ 'dirPath': vpg4f, 'success': function (v7iml) {
          pg9x1h != null && pg9x1h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (exzs9a) {
          if (exzs9a['errMsg']['indexOf']('file already exists') != -0x1) sexza['readSync'](sexza['fileListName'], 'utf8', pg9x1h);else pg9x1h != null && pg9x1h['runWith']([0x1, exzs9a]);
        } });
    }, sexza['readSync'] = function (dk8yob, zate, fl7n, easzo) {
      zate === void 0x0 && (zate = 'ascill'), easzo === void 0x0 && (easzo = '');var l3n7m = sexza['getFileNativePath'](dk8yob),
          i3mjq;try {
        i3mjq = sexza['fs']['readFileSync'](l3n7m), fl7n != null && fl7n['runWith']([0x0, { 'data': i3mjq }]);
      } catch (xetasz) {
        fl7n != null && fl7n['runWith']([0x1]);
      }
    }, sexza['readCache'] = function () {}, sexza['writeCache'] = function ($m37i) {
      var ozktd = readyUrl['split']('?')[0x0];sexza['filesListObj'][ozktd] = { 'md5': md5Name, 'readyUrl': readyUrl }, sexza['fs']['writeFile']({ 'filePath': sexza['fileNativeDir'] + '/' + sexza['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sexza['filesListObj']), 'success': function (pvf4) {}, 'fail': function (jqm) {} });
    }, sexza['setNativeFileDir'] = function (lnfvi) {
      sexza['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lnfvi;
    }, sexza['filesListObj'] = {}, sexza['fileNativeDir'] = null, sexza['fileListName'] = 'layaairfiles.txt', sexza['ziyuFileData'] = {}, f4gp6(sexza, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), sexza;
  }(rk8dby),
      hg64fp = function (b8r52) {
    function ytdkz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ytdkz['__super']['call'](this), this['_sound'] = ytdkz['_createSound']();
    }r_25wu(ytdkz, 'laya.wx.mini.MiniSound', b8r52);var fl6n7 = ytdkz['prototype'];return fl6n7['load'] = function (q7n3mi) {
      var f67lv = this;q7n3mi = p9h1s['formatURL'](q7n3mi), this['url'] = q7n3mi;if (ytdkz['_audioCache'][q7n3mi]) {
        this['event']('complete');return;
      }function yb8krd() {
        if (ytdkz['_null'] != undefined) f67lv['_sound']['onCanplay'](ytdkz['_null']), f67lv['_sound']['onError'](ytdkz['_null']);else try {
          f67lv['_sound']['onCanplay'](null), f67lv['_sound']['onError'](null), ytdkz['_null'] = null;
        } catch (tyo) {
          console['warn']('[wxmini] _clearSound:' + tyo), f67lv['_sound']['onCanplay'](br8y_k), f67lv['_sound']['onError'](br8y_k), ytdkz['_null'] = br8y_k;
        }
      }function _r52wu() {
        yb8krd(), h19g['loaded'] = !![], h19g['event']('complete'), ytdkz['_audioCache'][h19g['url']] = h19g;
      }function xzsa9(hx9ps) {
        console['error']('errCode=' + hx9ps['errCode'] + '  errMsg=' + hx9ps['errMsg']), yb8krd(), h19g['event']('error');
      }function br8y_k() {}this['_sound']['onCanplay'](_r52wu), this['_sound']['onError'](xzsa9), this['_sound']['src'] = q7n3mi;var h19g = this;
    }, fl6n7['play'] = function (pg6v4, tsaexz) {
      pg6v4 === void 0x0 && (pg6v4 = 0x0), tsaexz === void 0x0 && (tsaexz = 0x0);var satzx;if (this['url'] == d8ybr['_tMusic']) {
        if (!ytdkz['_musicAudio']) ytdkz['_musicAudio'] = ytdkz['_createSound']();satzx = ytdkz['_musicAudio'];
      } else satzx = ytdkz['_createSound']();satzx['src'] = this['url'];var vn6l = new ru25_w(satzx);return vn6l['url'] = this['url'], vn6l['loops'] = tsaexz, vn6l['startTime'] = pg6v4, vn6l['play'](), d8ybr['addChannel'](vn6l), vn6l;
    }, fl6n7['dispose'] = function () {
      var axztes = ytdkz['_audioCache'][this['url']];axztes && (axztes['src'] = '', delete ytdkz['_audioCache'][this['url']]);
    }, in3lm7(0x0, fl6n7, 'duration', function () {
      return this['_sound']['duration'];
    }), ytdkz['_createSound'] = function () {
      return ytdkz['_id']++, x9gph['window']['wx']['createInnerAudioContext']();
    }, ytdkz['_musicAudio'] = null, ytdkz['_id'] = 0x0, ytdkz['_audioCache'] = {}, ytdkz['_null'] = undefined, ytdkz;
  }(rk8dby),
      ru25_w = function (yk8rd) {
    function dtzea(saoz) {
      this['_audio'] = null, this['_onEnd'] = null, dtzea['__super']['call'](this), this['_audio'] = saoz, this['_onEnd'] = rb85_['bind'](this['__onEnd'], this), saoz['onEnded'](this['_onEnd']);
    }r_25wu(dtzea, 'laya.wx.mini.MiniSoundChannel', yk8rd);var kbdyr8 = dtzea['prototype'];return kbdyr8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (jq$mi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kbdyr8['__onNull'] = function () {}, kbdyr8['play'] = function () {
      this['isStopped'] = ![], d8ybr['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kbdyr8['stop'] = function () {
      this['isStopped'] = !![], d8ybr['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (dtzea['_null'] != undefined) this['_audio']['onEnded'](dtzea['_null']);else try {
        this['_audio']['onEnded'](null), dtzea['_null'] = null;
      } catch (vil7f) {
        console['warn']('[wxmini] stop:' + vil7f), this['_audio']['onEnded'](rb85_['bind'](this['__onNull'], this)), dtzea['_null'] = rb85_['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kbdyr8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kbdyr8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], d8ybr['addChannel'](this), this['_audio']['play']();
    }, in3lm7(0x0, kbdyr8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), in3lm7(0x0, kbdyr8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), in3lm7(0x0, kbdyr8, 'volume', function () {
      return 0x1;
    }, function (k8byr_) {}), dtzea['_null'] = undefined, dtzea;
  }(dzyet);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w2u_05 in Laya) {
    var x9s1hp = Laya[w2u_05];x9s1hp && x9s1hp['__isclass'] && (exports[w2u_05] = x9s1hp);
  }
});