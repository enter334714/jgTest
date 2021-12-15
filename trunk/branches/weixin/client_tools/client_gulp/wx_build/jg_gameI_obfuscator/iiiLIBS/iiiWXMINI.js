var Q = wx.$I;
(function (window, document, a87j63) {
  var vmt9ir = a87j63['un'],
      _f1pmc = a87j63['uns'],
      q2n54w = a87j63['static'],
      pm1f_c = a87j63['class'],
      c91mvp = a87j63['getset'],
      k2qse = a87j63['__newvec'],
      p1vc9m = laya['utils']['Browser'],
      kn5q2w = laya['events']['Event'],
      ilz$ = laya['events']['EventDispatcher'],
      _6faj = laya['resource']['HTMLImage'],
      _f1cm = laya['utils']['Handler'],
      _jcf = laya['display']['Input'],
      tmr9iv = laya['net']['Loader'],
      lizr0 = laya['maths']['Matrix'],
      g0oydz = laya['renders']['Render'],
      w4q5n2 = laya['utils']['RunDriver'],
      qesk2 = laya['media']['Sound'],
      c91mtv = laya['media']['SoundChannel'],
      b36 = laya['media']['SoundManager'],
      pvfc1 = laya['display']['Stage'],
      zl0i = laya['net']['URL'],
      bu73se = laya['utils']['Utils'],
      b6ea = function () {
    function ig0$z() {}return pm1f_c(ig0$z, 'laya.wx.mini.MiniAdpter'), ig0$z['getJson'] = function (v1tm) {
      return JSON['parse'](v1tm);
    }, ig0$z['init'] = function (v91mc, o0dgy) {
      v91mc === void 0x0 && (v91mc = ![]), o0dgy === void 0x0 && (o0dgy = ![]);if (ig0$z['_inited']) return;ig0$z['window'] = window;if (ig0$z['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ig0$z['_inited'] = !![], ig0$z['isZiYu'] = o0dgy, ig0$z['isPosMsgYu'] = v91mc, ig0$z['EnvConfig'] = {}, !ig0$z['isZiYu'] && (lzri['setNativeFileDir']('/layaairGame'), lzri['existDir'](lzri['fileNativeDir'], _f1cm['create'](ig0$z, ig0$z['onMkdirCallBack']))), ig0$z['window']['focus'] = function () {}, a87j63['getUrlPath'] = function () {}, ig0$z['window']['logtime'] = function (qnk5u2) {}, ig0$z['window']['alertTimeLog'] = function (lgoz$) {}, ig0$z['window']['resetShareInfo'] = function () {}, ig0$z['window']['CanvasRenderingContext2D'] = function () {}, ig0$z['window']['CanvasRenderingContext2D']['prototype'] = ig0$z['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ig0$z['window']['document']['body']['appendChild'] = function () {}, ig0$z['EnvConfig']['pixelRatioInt'] = 0x0, w4q5n2['getPixelRatio'] = ig0$z['pixelRatio'], ig0$z['_preCreateElement'] = p1vc9m['createElement'], p1vc9m['createElement'] = ig0$z['createElement'], w4q5n2['createShaderCondition'] = ig0$z['createShaderCondition'], bu73se['parseXMLFromString'] = ig0$z['parseXMLFromString'], _jcf['_createInputElement'] = a836_j['_createInputElement'], ig0$z['EnvConfig']['load'] = tmr9iv['prototype']['load'], tmr9iv['prototype']['load'] = knus2q['prototype']['load'], ig0$z['isZiYu'] && v91mc && wx['onMessage'](function ($zirl) {
        $zirl['isLoad'] && (lzri['ziyuFileData'][$zirl['url']] = $zirl['data']);
      });
    }, ig0$z['onMkdirCallBack'] = function (besquk, c91tmv) {
      if (!besquk) lzri['filesListObj'] = JSON['parse'](c91tmv['data']);
    }, ig0$z['pixelRatio'] = function () {
      if (!ig0$z['EnvConfig']['pixelRatioInt']) try {
        var $zltir = wx['getSystemInfoSync']();return ig0$z['EnvConfig']['pixelRatioInt'] = $zltir['pixelRatio'], $zltir = $zltir, $zltir['pixelRatio'];
      } catch (q42) {}return ig0$z['EnvConfig']['pixelRatioInt'];
    }, ig0$z['createElement'] = function (bse76) {
      if (bse76 == 'canvas') {
        var _a63;return ig0$z['idx'] == 0x1 ? ig0$z['isZiYu'] ? (_a63 = sharedCanvas, _a63['style'] = {}) : _a63 = window['canvas'] : _a63 = window['wx']['createCanvas'](), ig0$z['idx']++, _a63;
      } else {
        if (bse76 == 'textarea' || bse76 == 'input') return ig0$z['onCreateInput'](bse76);else {
          if (bse76 == 'div') {
            var knqs = ig0$z['_preCreateElement'](bse76);return knqs['contains'] = function (jf_pc) {
              return null;
            }, knqs['removeChild'] = function (zr$l) {}, knqs;
          } else return ig0$z['_preCreateElement'](bse76);
        }
      }
    }, ig0$z['onCreateInput'] = function (_3j68a) {
      var rli0$ = ig0$z['_preCreateElement'](_3j68a);return rli0$['focus'] = a836_j['wxinputFocus'], rli0$['blur'] = a836_j['wxinputblur'], rli0$['style'] = {}, rli0$['value'] = 0x0, rli0$['parentElement'] = {}, rli0$['placeholder'] = {}, rli0$['type'] = {}, rli0$['setColor'] = function (n54h) {}, rli0$['setType'] = function (s3b6) {}, rli0$['setFontFace'] = function (ab3e) {}, rli0$['addEventListener'] = function (gz0oly) {}, rli0$['contains'] = function (fcmpv1) {
        return null;
      }, rli0$['removeChild'] = function (nq2us) {}, rli0$;
    }, ig0$z['createShaderCondition'] = function (vtr1m9) {
      var es2ukq = this,
          wk25nq = function () {
        var j8_ap = vtr1m9;return es2ukq[vtr1m9['replace']('this.', '')];
      };return wk25nq;
    }, ig0$z['EnvConfig'] = null, ig0$z['window'] = null, ig0$z['_preCreateElement'] = null, ig0$z['_inited'] = ![], ig0$z['wxRequest'] = null, ig0$z['systemInfo'] = null, ig0$z['version'] = '0.0.1', ig0$z['isZiYu'] = ![], ig0$z['isPosMsgYu'] = ![], ig0$z['parseXMLFromString'] = function (us2kq) {
      var itz, c1f8;us2kq = us2kq['replace'](/>\s+</g, '><');try {
        itz = new window['Parser']['DOMParser']()['parseFromString'](us2kq, 'text/xml');
      } catch (ja_6f8) {
        throw '需要引入xml解析库文件';
      }return itz;
    }, ig0$z['idx'] = 0x1, ig0$z;
  }(),
      bqsuke = function () {
    function kqwn5() {}pm1f_c(kqwn5, 'laya.wx.mini.MiniImage');var tc9v1m = kqwn5['prototype'];return tc9v1m['_loadImage'] = function (z0g) {
      var g$zl0 = this,
          eukq = ![];z0g['indexOf']('layaNativeDir/') == -0x1 && (eukq = !![], z0g = zl0i['formatURL'](z0g));if (!lzri['getFileInfo'](z0g)) {
        if (z0g['indexOf']('http://') != -0x1 || z0g['indexOf']('https://') != -0x1) lzri['downImg'](z0g, new _f1cm(kqwn5, kqwn5['onDownImgCallBack'], [z0g, g$zl0]), z0g);else kqwn5['onCreateImage'](z0g, g$zl0, !![]);
      } else kqwn5['onCreateImage'](z0g, g$zl0, !eukq);
    }, kqwn5['onDownImgCallBack'] = function (zody0g, h4nx5, rl9t$) {
      if (!rl9t$) kqwn5['onCreateImage'](zody0g, h4nx5);else h4nx5['onError'](null);
    }, kqwn5['onCreateImage'] = function (tr9im, rtil9, u52nqk) {
      u52nqk === void 0x0 && (u52nqk = ![]);var l0g$zi;if (!u52nqk) {
        var ku2n5 = lzri['getFileInfo'](tr9im),
            zdo0gy = ku2n5['md5'];l0g$zi = lzri['getFileNativePath'](zdo0gy);
      } else l0g$zi = tr9im;if (rtil9['imgCache'] == null) rtil9['imgCache'] = {};var gydz0o;function _6aj8f() {
        gydz0o['onload'] = null, gydz0o['onerror'] = null, delete rtil9['imgCache'][tr9im];
      };var g$0lzo = function () {
        _6aj8f(), rtil9['onLoaded'](gydz0o);
      },
          ue3bs7 = function () {
        _6aj8f(), rtil9['event']('error', 'Load image failed');
      };rtil9['_type'] == 'nativeimage' ? (gydz0o = new p1vc9m['window']['Image'](), gydz0o['crossOrigin'] = '', gydz0o['onload'] = g$0lzo, gydz0o['onerror'] = ue3bs7, gydz0o['src'] = l0g$zi, rtil9['imgCache'][tr9im] = gydz0o) : new _6faj['create'](l0g$zi, { 'onload': g$0lzo, 'onerror': ue3bs7, 'onCreate': function (og0zl) {
          gydz0o = og0zl, rtil9['imgCache'][tr9im] = og0zl;
        } });
    }, kqwn5;
  }(),
      a836_j = function () {
    function w2q5n() {}return pm1f_c(w2q5n, 'laya.wx.mini.MiniInput'), w2q5n['_createInputElement'] = function () {
      _jcf['_initInput'](_jcf['area'] = p1vc9m['createElement']('textarea')), _jcf['_initInput'](_jcf['input'] = p1vc9m['createElement']('input')), _jcf['inputContainer'] = p1vc9m['createElement']('div'), _jcf['inputContainer']['style']['position'] = 'absolute', _jcf['inputContainer']['style']['zIndex'] = 0x186a0, p1vc9m['container']['appendChild'](_jcf['inputContainer']), _jcf['inputContainer']['setPos'] = function (l$oz0g, c8f_p) {
        _jcf['inputContainer']['style']['left'] = l$oz0g + 'px', _jcf['inputContainer']['style']['top'] = c8f_p + 'px';
      }, a87j63['stage']['on']('resize', null, w2q5n['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rti$v) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b36['_soundClass'] = rilt, b36['_musicClass'] = rilt;
    }, w2q5n['_onStageResize'] = function () {
      var cmfp1v = a87j63['stage']['_canvasTransform']['identity']();cmfp1v['scale'](p1vc9m['width'] / g0oydz['canvas']['width'] / w4q5n2['getPixelRatio'](), p1vc9m['height'] / g0oydz['canvas']['height'] / w4q5n2['getPixelRatio']());
    }, w2q5n['wxinputFocus'] = function (qbske) {
      var ti9$r = _jcf['inputElement']['target'];if (ti9$r && !ti9$r['editable']) return;b6ea['window']['wx']['offKeyboardConfirm'](), b6ea['window']['wx']['offKeyboardInput'](), b6ea['window']['wx']['showKeyboard']({ 'defaultValue': ti9$r['text'], 'maxLength': ti9$r['maxChars'], 'multiple': ti9$r['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (esuk7) {}, 'fail': function (e73us) {} }), b6ea['window']['wx']['onKeyboardConfirm'](function (_p8faj) {
        var u7sb = _p8faj ? _p8faj['value'] : '';ti9$r['text'] = u7sb, ti9$r['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), b6ea['window']['wx']['onKeyboardInput'](function ($zrtil) {
        var b7j63a = $zrtil ? $zrtil['value'] : '';if (!ti9$r['multiline']) {
          if (b7j63a['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ti9$r['text'] = b7j63a, ti9$r['event']('input');
      });
    }, w2q5n['inputEnter'] = function () {
      _jcf['inputElement']['target']['focus'] = ![];
    }, w2q5n['wxinputblur'] = function () {
      w2q5n['hideKeyboard']();
    }, w2q5n['hideKeyboard'] = function () {
      b6ea['window']['wx']['offKeyboardConfirm'](), b6ea['window']['wx']['offKeyboardInput'](), b6ea['window']['wx']['hideKeyboard']({ 'success': function (jf8pc) {
          console['log']('隐藏键盘');
        }, 'fail': function (mc9v1) {
          console['log']('隐藏键盘出错:' + (mc9v1 ? mc9v1['errMsg'] : ''));
        } });
    }, w2q5n;
  }(),
      knus2q = function () {
    function i9$v() {}pm1f_c(i9$v, 'laya.wx.mini.MiniLoader');var a376be = i9$v['prototype'];return a376be['load'] = function (fp18, vi9$, pa8f_j, xhw45, r$zil0) {
      pa8f_j === void 0x0 && (pa8f_j = !![]), r$zil0 === void 0x0 && (r$zil0 = ![]);var es367b = this;es367b['_url'] = fp18;if (fp18['indexOf']('data:image') === 0x0) es367b['_type'] = vi9$ = 'image';else es367b['_type'] = vi9$ || (vi9$ = es367b['getTypeFromUrl'](fp18));es367b['_cache'] = pa8f_j, es367b['_data'] = null;var j86_a = 'ascii';if (fp18['indexOf']('.fnt') != -0x1) j86_a = 'utf8';else vi9$ == 'arraybuffer' && (j86_a = '');;var c_1fp8 = bu73se['getFileExtension'](fp18);if (i9$v['_fileTypeArr']['indexOf'](c_1fp8) != -0x1) b6ea['EnvConfig']['load']['call'](this, fp18, vi9$, pa8f_j, xhw45, r$zil0);else {
        if (!lzri['getFileInfo'](fp18)) {
          if (fp18['indexOf']('layaNativeDir/') != -0x1) {
            if (b6ea['isZiYu']) {
              var ti9vr = lzri['ziyuFileData'][fp18];es367b['onLoaded'](ti9vr);return;
            } else {
              cosnole['log']('read read'), lzri['read'](fp18, j86_a, new _f1cm(i9$v, i9$v['onReadNativeCallBack'], [j86_a, fp18, vi9$, pa8f_j, xhw45, r$zil0, es367b]));return;
            }
          }if (zl0i['rootPath'] == '') var usqb = fp18;else usqb = fp18['split'](zl0i['rootPath'])[0x0];fp18['indexOf']('http://') != -0x1 || fp18['indexOf']('https://') != -0x1 ? b6ea['EnvConfig']['load']['call'](es367b, fp18, vi9$, pa8f_j, xhw45, r$zil0) : lzri['readFile'](usqb, j86_a, new _f1cm(i9$v, i9$v['onReadNativeCallBack'], [j86_a, fp18, vi9$, pa8f_j, xhw45, r$zil0, es367b]), fp18);
        } else b6ea['EnvConfig']['load']['call'](this, fp18, vi9$, pa8f_j, xhw45, r$zil0);
      }
    }, a376be['resMgrLoad'] = function (ygo0l, gzli$0, c1mf, ogdy0z, f_a6, v19pc, pcv19m) {
      c1mf === void 0x0 && (c1mf = 0x0), ogdy0z === void 0x0 && (ogdy0z = ![]), f_a6 === void 0x0 && (f_a6 = ![]), v19pc === void 0x0 && (v19pc = 0x0), pcv19m === void 0x0 && (pcv19m = 0x3), ygo0l['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ygo0l), b6ea['EnvConfig']['resMgrLoad'](ygo0l, ($v9itr, ae6, buek) => {
        i9$v['prototype']['resMgrLoadCallBack']($v9itr, ae6, buek, gzli$0);
      }, c1mf, ogdy0z, f_a6, v19pc, pcv19m);
    }, a376be['resMgrLoadCallBack'] = function (esb3u7, e7su3, z0ig, gl0o$z) {
      console['log']('buff:::', esb3u7, z0ig, lzri['fileNativeDir'] + '///' + lzri['fileListName']), gl0o$z(esb3u7, e7su3, z0ig);
    }, a376be['clearRes'] = function (eqs2u, j_6af) {
      j_6af === void 0x0 && (j_6af = ![]);var z$lrit = this;z$lrit['clearRes'](eqs2u, j_6af);var $o0lz = lzri['getFileInfo'](eqs2u);if ($o0lz && (eqs2u['indexOf']('http://') != -0x1 || eqs2u['indexOf']('https://') != -0x1)) {
        var tvm91 = $o0lz['md5'],
            w5 = lzri['getFileNativePath'](tvm91);lzri['remove'](w5);
      }
    }, i9$v['onReadNativeCallBack'] = function (fpm1_, mp1f, pfm1cv, eb36a, m_1cp, u7b3s, mr9vi, imtr9, w452q) {
      eb36a === void 0x0 && (eb36a = !![]), u7b3s === void 0x0 && (u7b3s = ![]), imtr9 === void 0x0 && (imtr9 = 0x0);if (!imtr9) {
        var _81;if (pfm1cv == 'json' || pfm1cv == 'atlas') _81 = b6ea['getJson'](w452q['data']);else pfm1cv == 'xml' ? _81 = bu73se['parseXMLFromString'](w452q['data']) : _81 = w452q['data'];mr9vi['onLoaded'](_81), !b6ea['isZiYu'] && b6ea['isPosMsgYu'] && pfm1cv != 'arraybuffer' && wx['postMessage']({ 'url': mp1f, 'data': _81, 'isLoad': !![] });
      } else imtr9 == 0x1 && b6ea['EnvConfig']['load']['call'](mr9vi, mp1f, pfm1cv, eb36a, m_1cp, u7b3s);
    }, q2n54w(i9$v, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), i9$v;
  }(),
      lzri = function (p9cm1) {
    function w425h() {
      w425h['__super']['call'](this);;
    }return pm1f_c(w425h, 'laya.wx.mini.MiniFileMgr', p9cm1), w425h['isLoadFile'] = function (v$i9t) {
      return w425h['_fileTypeArr']['indexOf'](v$i9t) != -0x1 ? !![] : ![];
    }, w425h['getFileInfo'] = function (vr9it$) {
      var rmti = vr9it$['split']('?')[0x0],
          ilrt$ = w425h['filesListObj'][rmti];if (ilrt$ == null) return null;else return ilrt$;return null;
    }, w425h['onFileUpdate'] = function (go$zl, c91tm) {
      var zlo0g = go$zl['split']('/'),
          m9itrv = zlo0g[zlo0g['length'] - 0x1],
          fp_8c = w425h['getFileInfo'](c91tm);if (fp_8c == null) w425h['onSaveFile'](c91tm, m9itrv);else {
        if (fp_8c['readyUrl'] != c91tm) w425h['remove'](m9itrv, c91tm);
      }
    }, w425h['exits'] = function (zlgy0, ksb7) {
      var rmv9t1 = w425h['getFileNativePath'](zlgy0);w425h['fs']['getFileInfo']({ 'filePath': rmv9t1, 'success': function (j8a3) {
          ksb7 != null && ksb7['runWith']([0x0, j8a3]);
        }, 'fail': function (t9vr) {
          ksb7 != null && ksb7['runWith']([0x1, t9vr]);
        } });
    }, w425h['read'] = function (ksqube, g0yo, zgd0, j_8ap) {
      g0yo === void 0x0 && (g0yo = 'ascill'), j_8ap === void 0x0 && (j_8ap = '');var l0irz;j_8ap != '' ? l0irz = w425h['getFileNativePath'](ksqube) : l0irz = ksqube, w425h['fs']['readFile']({ 'filePath': l0irz, 'encoding': g0yo, 'success': function (r1t) {
          zgd0 != null && zgd0['runWith']([0x0, r1t]);
        }, 'fail': function (itv9) {
          if (itv9 && j_8ap != '') w425h['down'](j_8ap, g0yo, zgd0, j_8ap);else zgd0 != null && zgd0['runWith']([0x1]);
        } });
    }, w425h['readNativeFile'] = function (kubqes, z$0lg) {
      w425h['fs']['readFile']({ 'filePath': kubqes, 'encoding': '', 'success': function (gzylo) {
          z$0lg != null && z$0lg['runWith']([0x0]);
        }, 'fail': function ($0zir) {
          z$0lg != null && z$0lg['runWith']([0x1]);
        } });
    }, w425h['down'] = function (q2k5w, r0iz$l, gl$0z, pvc) {
      r0iz$l === void 0x0 && (r0iz$l = 'ascill'), pvc === void 0x0 && (pvc = '');var uqk2 = w425h['getFileNativePath'](pvc),
          vr9t = w425h['wxdown']({ 'url': q2k5w, 'filePath': uqk2, 'success': function (f6ja_8) {
          if (f6ja_8['statusCode'] === 0xc8) w425h['readFile'](f6ja_8['filePath'], r0iz$l, gl$0z, pvc);
        }, 'fail': function (u2ke) {
          gl$0z != null && gl$0z['runWith']([0x1, u2ke]);
        } });vr9t['onProgressUpdate'](function (a786j) {
        gl$0z != null && gl$0z['runWith']([0x2, a786j['progress']]);
      });
    }, w425h['readFile'] = function (jf68a_, cvm1p9, seuk7b, usqnk) {
      cvm1p9 === void 0x0 && (cvm1p9 = 'ascill'), usqnk === void 0x0 && (usqnk = ''), w425h['fs']['readFile']({ 'filePath': jf68a_, 'encoding': cvm1p9, 'success': function (su7bek) {
          if (jf68a_['indexOf']('http://') != -0x1 || jf68a_['indexOf']('https://') != -0x1) w425h['onFileUpdate'](jf68a_, usqnk);seuk7b != null && seuk7b['runWith']([0x0, su7bek]);
        }, 'fail': function (eu7b) {
          if (eu7b) seuk7b != null && seuk7b['runWith']([0x1, eu7b]);
        } });
    }, w425h['downImg'] = function (nk, j6_38a, ubs73) {
      ubs73 === void 0x0 && (ubs73 = '');var _fa8j = w425h['wxdown']({ 'url': nk, 'success': function (suqk2) {
          suqk2['statusCode'] === 0xc8 && w425h['copyFile'](suqk2['tempFilePath'], ubs73, j6_38a);
        }, 'fail': function (g0ozy) {
          j6_38a != null && j6_38a['runWith']([0x1, g0ozy]);
        } });
    }, w425h['copyFile'] = function (buke7, z$g0o, w5nx4h) {
      var izg0 = buke7['split']('/'),
          glo0z = izg0[izg0['length'] - 0x1],
          j8paf_ = z$g0o['split']('?')[0x0],
          ydg0o = w425h['getFileInfo'](z$g0o),
          p81_ = w425h['getFileNativePath'](glo0z);w425h['fs']['copyFile']({ 'srcPath': buke7, 'destPath': p81_, 'success': function (e2suk) {
          if (!ydg0o) w425h['onSaveFile'](z$g0o, glo0z), w5nx4h != null && w5nx4h['runWith']([0x0]);else {
            if (ydg0o['readyUrl'] != z$g0o) w425h['remove'](glo0z, z$g0o, w5nx4h);
          }
        }, 'fail': function (kbeuq) {
          w5nx4h != null && w5nx4h['runWith']([0x1, kbeuq]);
        } });
    }, w425h['getFileNativePath'] = function (pcf1_m) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pcf1_m;
    }, w425h['remove'] = function (quk2n, a7j63b, rzil) {
      a7j63b === void 0x0 && (a7j63b = '');var f_c8p1 = w425h['getFileInfo'](a7j63b),
          w42nh5 = w425h['getFileNativePath'](f_c8p1['md5']);a87j63['loader']['clearRes'](f_c8p1['readyUrl']), w425h['fs']['unlink']({ 'filePath': w42nh5, 'success': function (uke2sq) {
          if (a7j63b != '') w425h['onSaveFile'](a7j63b, quk2n);rzil != null && rzil['runWith']([0x0]);
        }, 'fail': function (p_cf8j) {} });
    }, w425h['onSaveFile'] = function (_j83a, ti9rmv) {
      var eu73 = _j83a['split']('?')[0x0];w425h['filesListObj'][eu73] = { 'md5': ti9rmv, 'readyUrl': _j83a }, w425h['fs']['writeFile']({ 'filePath': w425h['fileNativeDir'] + '/' + w425h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w425h['filesListObj']), 'success': function (mtc9v1) {
          console['log']('写入测试测试成功：', mtc9v1);
        }, 'fail': function (loz0$) {
          console['log']('写入测试测试失败：', loz0$);
        } });
    }, w425h['existDir'] = function (l0z$, pf8aj) {
      w425h['fs']['mkdir']({ 'dirPath': l0z$, 'success': function (esqkub) {
          pf8aj != null && pf8aj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (yd0gzo) {
          if (yd0gzo['errMsg']['indexOf']('file already exists') != -0x1) w425h['readSync'](w425h['fileListName'], 'utf8', pf8aj);else pf8aj != null && pf8aj['runWith']([0x1, yd0gzo]);
        } });
    }, w425h['readSync'] = function (l$g0oz, kus2, vmct19, nkqs) {
      kus2 === void 0x0 && (kus2 = 'ascill'), nkqs === void 0x0 && (nkqs = '');var subkqe = w425h['getFileNativePath'](l$g0oz),
          p8cf1_;try {
        p8cf1_ = w425h['fs']['readFileSync'](subkqe), vmct19 != null && vmct19['runWith']([0x0, { 'data': p8cf1_ }]);
      } catch (fj8c_p) {
        vmct19 != null && vmct19['runWith']([0x1]);
      }
    }, w425h['readCache'] = function () {}, w425h['writeCache'] = function (ig$l0z) {
      var do0yzg = readyUrl['split']('?')[0x0];w425h['filesListObj'][do0yzg] = { 'md5': md5Name, 'readyUrl': readyUrl }, w425h['fs']['writeFile']({ 'filePath': w425h['fileNativeDir'] + '/' + w425h['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w425h['filesListObj']), 'success': function (zl0$gi) {}, 'fail': function (skeub7) {} });
    }, w425h['setNativeFileDir'] = function (bj3) {
      w425h['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bj3;
    }, w425h['filesListObj'] = {}, w425h['fileNativeDir'] = null, w425h['fileListName'] = 'layaairfiles.txt', w425h['ziyuFileData'] = {}, q2n54w(w425h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), w425h;
  }(ilz$),
      rilt = function (e7kusb) {
    function m9cvp1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m9cvp1['__super']['call'](this), this['_sound'] = m9cvp1['_createSound']();
    }pm1f_c(m9cvp1, 'laya.wx.mini.MiniSound', e7kusb);var keb7s = m9cvp1['prototype'];return keb7s['load'] = function (_1p) {
      var hw2n54 = this;_1p = zl0i['formatURL'](_1p), this['url'] = _1p;if (m9cvp1['_audioCache'][_1p]) {
        this['event']('complete');return;
      }function l$izg() {
        if (m9cvp1['_null'] != undefined) hw2n54['_sound']['onCanplay'](m9cvp1['_null']), hw2n54['_sound']['onError'](m9cvp1['_null']);else try {
          hw2n54['_sound']['onCanplay'](null), hw2n54['_sound']['onError'](null), m9cvp1['_null'] = null;
        } catch (e7sukb) {
          console['warn']('[wxmini] _clearSound:' + e7sukb), hw2n54['_sound']['onCanplay'](lz0$og), hw2n54['_sound']['onError'](lz0$og), m9cvp1['_null'] = lz0$og;
        }
      }function _pjaf() {
        l$izg(), gli0z$['loaded'] = !![], gli0z$['event']('complete'), m9cvp1['_audioCache'][gli0z$['url']] = gli0z$;
      }function w5h4x(s7e63b) {
        console['error']('errCode=' + s7e63b['errCode'] + '  errMsg=' + s7e63b['errMsg']), l$izg(), gli0z$['event']('error');
      }function lz0$og() {}this['_sound']['onCanplay'](_pjaf), this['_sound']['onError'](w5h4x), this['_sound']['src'] = _1p;var gli0z$ = this;
    }, keb7s['play'] = function (unq2sk, c_) {
      unq2sk === void 0x0 && (unq2sk = 0x0), c_ === void 0x0 && (c_ = 0x0);var p_cj;if (this['url'] == b36['_tMusic']) {
        if (!m9cvp1['_musicAudio']) m9cvp1['_musicAudio'] = m9cvp1['_createSound']();p_cj = m9cvp1['_musicAudio'];
      } else p_cj = m9cvp1['_createSound']();p_cj['src'] = this['url'];var aj_6 = new qn5uk2(p_cj);return aj_6['url'] = this['url'], aj_6['loops'] = c_, aj_6['startTime'] = unq2sk, aj_6['play'](), b36['addChannel'](aj_6), aj_6;
    }, keb7s['dispose'] = function () {
      var s6b37 = m9cvp1['_audioCache'][this['url']];s6b37 && (s6b37['src'] = '', delete m9cvp1['_audioCache'][this['url']]);
    }, c91mvp(0x0, keb7s, 'duration', function () {
      return this['_sound']['duration'];
    }), m9cvp1['_createSound'] = function () {
      return m9cvp1['_id']++, b6ea['window']['wx']['createInnerAudioContext']();
    }, m9cvp1['_musicAudio'] = null, m9cvp1['_id'] = 0x0, m9cvp1['_audioCache'] = {}, m9cvp1['_null'] = undefined, m9cvp1;
  }(ilz$),
      qn5uk2 = function (nx5h4) {
    function ab63j(gz$l0) {
      this['_audio'] = null, this['_onEnd'] = null, ab63j['__super']['call'](this), this['_audio'] = gz$l0, this['_onEnd'] = bu73se['bind'](this['__onEnd'], this), gz$l0['onEnded'](this['_onEnd']);
    }pm1f_c(ab63j, 'laya.wx.mini.MiniSoundChannel', nx5h4);var sbe3 = ab63j['prototype'];return sbe3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (a87j63['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sbe3['__onNull'] = function () {}, sbe3['play'] = function () {
      this['isStopped'] = ![], b36['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sbe3['stop'] = function () {
      this['isStopped'] = !![], b36['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ab63j['_null'] != undefined) this['_audio']['onEnded'](ab63j['_null']);else try {
        this['_audio']['onEnded'](null), ab63j['_null'] = null;
      } catch (ku2qse) {
        console['warn']('[wxmini] stop:' + ku2qse), this['_audio']['onEnded'](bu73se['bind'](this['__onNull'], this)), ab63j['_null'] = bu73se['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sbe3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sbe3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b36['addChannel'](this), this['_audio']['play']();
    }, c91mvp(0x0, sbe3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), c91mvp(0x0, sbe3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), c91mvp(0x0, sbe3, 'volume', function () {
      return 0x1;
    }, function (vr9mti) {}), ab63j['_null'] = undefined, ab63j;
  }(c91mtv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $lr0zi in Laya) {
    var ub = Laya[$lr0zi];ub && ub['__isclass'] && (exports[$lr0zi] = ub);
  }
});