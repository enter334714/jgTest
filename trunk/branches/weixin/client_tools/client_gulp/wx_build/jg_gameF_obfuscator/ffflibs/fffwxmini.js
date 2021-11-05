var k = wx.$f;
(function (window, document, ya$r7) {
  var tk50h = ya$r7['un'],
      ya$p3 = ya$r7['uns'],
      himt = ya$r7['static'],
      ivb1 = ya$r7['class'],
      enzr8x = ya$r7['getset'],
      fth0qm = ya$r7['__newvec'],
      exzn8r = laya['utils']['Browser'],
      wsojd = laya['events']['Event'],
      swdc = laya['events']['EventDispatcher'],
      nswcj = laya['resource']['HTMLImage'],
      mqh = laya['utils']['Handler'],
      vubi1m = laya['display']['Input'],
      edxn = laya['net']['Loader'],
      ifthm0 = laya['maths']['Matrix'],
      f0mhq = laya['renders']['Render'],
      zer78 = laya['utils']['RunDriver'],
      e78rzx = laya['media']['Sound'],
      uvmifb = laya['media']['SoundChannel'],
      ods6cj = laya['media']['SoundManager'],
      nxw = laya['display']['Stage'],
      o6cj24 = laya['net']['URL'],
      $3a7p = laya['utils']['Utils'],
      k24o_ = function () {
    function wnex() {}return ivb1(wnex, 'laya.wx.mini.MiniAdpter'), wnex['getJson'] = function (imhftb) {
      return JSON['parse'](imhftb);
    }, wnex['init'] = function (ubv1m, $7r3z) {
      ubv1m === void 0x0 && (ubv1m = ![]), $7r3z === void 0x0 && ($7r3z = ![]);if (wnex['_inited']) return;wnex['window'] = window;if (wnex['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wnex['_inited'] = !![], wnex['isZiYu'] = $7r3z, wnex['isPosMsgYu'] = ubv1m, wnex['EnvConfig'] = {}, !wnex['isZiYu'] && (oc24['setNativeFileDir']('/layaairGame'), oc24['existDir'](oc24['fileNativeDir'], mqh['create'](wnex, wnex['onMkdirCallBack']))), wnex['window']['focus'] = function () {}, ya$r7['getUrlPath'] = function () {}, wnex['window']['logtime'] = function (_o4k62) {}, wnex['window']['alertTimeLog'] = function (xendws) {}, wnex['window']['resetShareInfo'] = function () {}, wnex['window']['CanvasRenderingContext2D'] = function () {}, wnex['window']['CanvasRenderingContext2D']['prototype'] = wnex['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wnex['window']['document']['body']['appendChild'] = function () {}, wnex['EnvConfig']['pixelRatioInt'] = 0x0, zer78['getPixelRatio'] = wnex['pixelRatio'], wnex['_preCreateElement'] = exzn8r['createElement'], exzn8r['createElement'] = wnex['createElement'], zer78['createShaderCondition'] = wnex['createShaderCondition'], $3a7p['parseXMLFromString'] = wnex['parseXMLFromString'], vubi1m['_createInputElement'] = tbhfi['_createInputElement'], wnex['EnvConfig']['load'] = edxn['prototype']['load'], edxn['prototype']['load'] = tvfm['prototype']['load'], wnex['isZiYu'] && ubv1m && wx['onMessage'](function (xzen8r) {
        xzen8r['isLoad'] && (oc24['ziyuFileData'][xzen8r['url']] = xzen8r['data']);
      });
    }, wnex['onMkdirCallBack'] = function (bg19v, zwnex) {
      if (!bg19v) oc24['filesListObj'] = JSON['parse'](zwnex['data']);
    }, wnex['pixelRatio'] = function () {
      if (!wnex['EnvConfig']['pixelRatioInt']) try {
        var o6_2c4 = wx['getSystemInfoSync']();return wnex['EnvConfig']['pixelRatioInt'] = o6_2c4['pixelRatio'], o6_2c4 = o6_2c4, o6_2c4['pixelRatio'];
      } catch (qtfh0) {}return wnex['EnvConfig']['pixelRatioInt'];
    }, wnex['createElement'] = function (hftq) {
      if (hftq == 'canvas') {
        var sowd;return wnex['idx'] == 0x1 ? wnex['isZiYu'] ? (sowd = sharedCanvas, sowd['style'] = {}) : sowd = window['canvas'] : sowd = window['wx']['createCanvas'](), wnex['idx']++, sowd;
      } else {
        if (hftq == 'textarea' || hftq == 'input') return wnex['onCreateInput'](hftq);else {
          if (hftq == 'div') {
            var tfmvib = wnex['_preCreateElement'](hftq);return tfmvib['contains'] = function (sj6) {
              return null;
            }, tfmvib['removeChild'] = function (hmfq) {}, tfmvib;
          } else return wnex['_preCreateElement'](hftq);
        }
      }
    }, wnex['onCreateInput'] = function (njdscw) {
      var a$y37 = wnex['_preCreateElement'](njdscw);return a$y37['focus'] = tbhfi['wxinputFocus'], a$y37['blur'] = tbhfi['wxinputblur'], a$y37['style'] = {}, a$y37['value'] = 0x0, a$y37['parentElement'] = {}, a$y37['placeholder'] = {}, a$y37['type'] = {}, a$y37['setColor'] = function (bivu19) {}, a$y37['setType'] = function ($r783z) {}, a$y37['setFontFace'] = function (fi0tmh) {}, a$y37['addEventListener'] = function (vbim1u) {}, a$y37['contains'] = function (e7xz8) {
        return null;
      }, a$y37['removeChild'] = function (k24_) {}, a$y37;
    }, wnex['createShaderCondition'] = function ($a37r) {
      var $37yp = this,
          _6o24c = function () {
        var $8rz37 = $a37r;return $37yp[$a37r['replace']('this.', '')];
      };return _6o24c;
    }, wnex['EnvConfig'] = null, wnex['window'] = null, wnex['_preCreateElement'] = null, wnex['_inited'] = ![], wnex['wxRequest'] = null, wnex['systemInfo'] = null, wnex['version'] = '0.0.1', wnex['isZiYu'] = ![], wnex['isPosMsgYu'] = ![], wnex['parseXMLFromString'] = function (_kq05h) {
      var _2465k, c6jdos;_kq05h = _kq05h['replace'](/>\s+</g, '><');try {
        _2465k = new window['Parser']['DOMParser']()['parseFromString'](_kq05h, 'text/xml');
      } catch (wesz) {
        throw '需要引入xml解析库文件';
      }return _2465k;
    }, wnex['idx'] = 0x1, wnex;
  }(),
      $r7ez8 = function () {
    function z7$() {}ivb1(z7$, 'laya.wx.mini.MiniImage');var _2k4 = z7$['prototype'];return _2k4['_loadImage'] = function (bmfviu) {
      var rz8ex = this,
          ez87r = ![];bmfviu['indexOf']('layaNativeDir/') == -0x1 && (ez87r = !![], bmfviu = o6cj24['formatURL'](bmfviu));if (!oc24['getFileInfo'](bmfviu)) {
        if (bmfviu['indexOf']('http://') != -0x1 || bmfviu['indexOf']('https://') != -0x1) oc24['downImg'](bmfviu, new mqh(z7$, z7$['onDownImgCallBack'], [bmfviu, rz8ex]), bmfviu);else z7$['onCreateImage'](bmfviu, rz8ex, !![]);
      } else z7$['onCreateImage'](bmfviu, rz8ex, !ez87r);
    }, z7$['onDownImgCallBack'] = function ($7y3ap, buim, bu19gv) {
      if (!bu19gv) z7$['onCreateImage']($7y3ap, buim);else buim['onError'](null);
    }, z7$['onCreateImage'] = function (qk504, u91vib, k5q40_) {
      k5q40_ === void 0x0 && (k5q40_ = ![]);var qhmft;if (!k5q40_) {
        var k_50qh = oc24['getFileInfo'](qk504),
            xjsdnw = k_50qh['md5'];qhmft = oc24['getFileNativePath'](xjsdnw);
      } else qhmft = qk504;if (u91vib['imgCache'] == null) u91vib['imgCache'] = {};var exzr87;function qk5_24() {
        exzr87['onload'] = null, exzr87['onerror'] = null, delete u91vib['imgCache'][qk504];
      };var rex7z8 = function () {
        qk5_24(), u91vib['onLoaded'](exzr87);
      },
          htfq50 = function () {
        qk5_24(), u91vib['event']('error', 'Load image failed');
      };u91vib['_type'] == 'nativeimage' ? (exzr87 = new exzn8r['window']['Image'](), exzr87['crossOrigin'] = '', exzr87['onload'] = rex7z8, exzr87['onerror'] = htfq50, exzr87['src'] = qhmft, u91vib['imgCache'][qk504] = exzr87) : new nswcj['create'](qhmft, { 'onload': rex7z8, 'onerror': htfq50, 'onCreate': function (hfq05t) {
          exzr87 = hfq05t, u91vib['imgCache'][qk504] = hfq05t;
        } });
    }, z7$;
  }(),
      tbhfi = function () {
    function k5htq0() {}return ivb1(k5htq0, 'laya.wx.mini.MiniInput'), k5htq0['_createInputElement'] = function () {
      vubi1m['_initInput'](vubi1m['area'] = exzn8r['createElement']('textarea')), vubi1m['_initInput'](vubi1m['input'] = exzn8r['createElement']('input')), vubi1m['inputContainer'] = exzn8r['createElement']('div'), vubi1m['inputContainer']['style']['position'] = 'absolute', vubi1m['inputContainer']['style']['zIndex'] = 0x186a0, exzn8r['container']['appendChild'](vubi1m['inputContainer']), vubi1m['inputContainer']['setPos'] = function (nexws, coj246) {
        vubi1m['inputContainer']['style']['left'] = nexws + 'px', vubi1m['inputContainer']['style']['top'] = coj246 + 'px';
      }, ya$r7['stage']['on']('resize', null, k5htq0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k6_2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ods6cj['_soundClass'] = u1v9g, ods6cj['_musicClass'] = u1v9g;
    }, k5htq0['_onStageResize'] = function () {
      var fibv = ya$r7['stage']['_canvasTransform']['identity']();fibv['scale'](exzn8r['width'] / f0mhq['canvas']['width'] / zer78['getPixelRatio'](), exzn8r['height'] / f0mhq['canvas']['height'] / zer78['getPixelRatio']());
    }, k5htq0['wxinputFocus'] = function (uv9ib1) {
      var _624ok = vubi1m['inputElement']['target'];if (_624ok && !_624ok['editable']) return;k24o_['window']['wx']['offKeyboardConfirm'](), k24o_['window']['wx']['offKeyboardInput'](), k24o_['window']['wx']['showKeyboard']({ 'defaultValue': _624ok['text'], 'maxLength': _624ok['maxChars'], 'multiple': _624ok['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (khtq50) {}, 'fail': function (enwsx) {} }), k24o_['window']['wx']['onKeyboardConfirm'](function (bhtm) {
        var jc64 = bhtm ? bhtm['value'] : '';_624ok['text'] = jc64, _624ok['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), k24o_['window']['wx']['onKeyboardInput'](function (z7xre) {
        var bv9g1u = z7xre ? z7xre['value'] : '';if (!_624ok['multiline']) {
          if (bv9g1u['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_624ok['text'] = bv9g1u, _624ok['event']('input');
      });
    }, k5htq0['inputEnter'] = function () {
      vubi1m['inputElement']['target']['focus'] = ![];
    }, k5htq0['wxinputblur'] = function () {
      k5htq0['hideKeyboard']();
    }, k5htq0['hideKeyboard'] = function () {
      k24o_['window']['wx']['offKeyboardConfirm'](), k24o_['window']['wx']['offKeyboardInput'](), k24o_['window']['wx']['hideKeyboard']({ 'success': function ($3z87r) {
          console['log']('隐藏键盘');
        }, 'fail': function (mibf) {
          console['log']('隐藏键盘出错:' + (mibf ? mibf['errMsg'] : ''));
        } });
    }, k5htq0;
  }(),
      tvfm = function () {
    function vibtf() {}ivb1(vibtf, 'laya.wx.mini.MiniLoader');var k24q = vibtf['prototype'];return k24q['load'] = function (vmft, t50qfh, hf0mqt, mbfiuv, tifvbm) {
      hf0mqt === void 0x0 && (hf0mqt = !![]), tifvbm === void 0x0 && (tifvbm = ![]);var xsde = this;xsde['_url'] = vmft;if (vmft['indexOf']('data:image') === 0x0) xsde['_type'] = t50qfh = 'image';else xsde['_type'] = t50qfh || (t50qfh = xsde['getTypeFromUrl'](vmft));xsde['_cache'] = hf0mqt, xsde['_data'] = null;var xsn = 'ascii';if (vmft['indexOf']('.fnt') != -0x1) xsn = 'utf8';else t50qfh == 'arraybuffer' && (xsn = '');;var i19vu = $3a7p['getFileExtension'](vmft);if (vibtf['_fileTypeArr']['indexOf'](i19vu) != -0x1) k24o_['EnvConfig']['load']['call'](this, vmft, t50qfh, hf0mqt, mbfiuv, tifvbm);else {
        if (!oc24['getFileInfo'](vmft)) {
          if (vmft['indexOf']('layaNativeDir/') != -0x1) {
            if (k24o_['isZiYu']) {
              var g9bv1 = oc24['ziyuFileData'][vmft];xsde['onLoaded'](g9bv1);return;
            } else {
              cosnole['log']('read read'), oc24['read'](vmft, xsn, new mqh(vibtf, vibtf['onReadNativeCallBack'], [xsn, vmft, t50qfh, hf0mqt, mbfiuv, tifvbm, xsde]));return;
            }
          }if (o6cj24['rootPath'] == '') var ih0fmt = vmft;else ih0fmt = vmft['split'](o6cj24['rootPath'])[0x0];vmft['indexOf']('http://') != -0x1 || vmft['indexOf']('https://') != -0x1 ? k24o_['EnvConfig']['load']['call'](xsde, vmft, t50qfh, hf0mqt, mbfiuv, tifvbm) : oc24['readFile'](ih0fmt, xsn, new mqh(vibtf, vibtf['onReadNativeCallBack'], [xsn, vmft, t50qfh, hf0mqt, mbfiuv, tifvbm, xsde]), vmft);
        } else k24o_['EnvConfig']['load']['call'](this, vmft, t50qfh, hf0mqt, mbfiuv, tifvbm);
      }
    }, k24q['resMgrLoad'] = function (k625_, tvmfb, fibuvm, o2_c64, sjowcd, _k2o64, b9vui1) {
      fibuvm === void 0x0 && (fibuvm = 0x0), o2_c64 === void 0x0 && (o2_c64 = ![]), sjowcd === void 0x0 && (sjowcd = ![]), _k2o64 === void 0x0 && (_k2o64 = 0x0), b9vui1 === void 0x0 && (b9vui1 = 0x3), k625_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k625_), k24o_['EnvConfig']['resMgrLoad'](k625_, (jdwsco, $ze87, $rz38) => {
        vibtf['prototype']['resMgrLoadCallBack'](jdwsco, $ze87, $rz38, tvmfb);
      }, fibuvm, o2_c64, sjowcd, _k2o64, b9vui1);
    }, k24q['resMgrLoadCallBack'] = function (z3$87, o_26k4, mvu, rz7) {
      console['log']('buff:::', z3$87, mvu, oc24['fileNativeDir'] + '///' + oc24['fileListName']), rz7(z3$87, o_26k4, mvu);
    }, k24q['clearRes'] = function (uvmf, apy37$) {
      apy37$ === void 0x0 && (apy37$ = ![]);var r8zn = this;r8zn['clearRes'](uvmf, apy37$);var hq5ft0 = oc24['getFileInfo'](uvmf);if (hq5ft0 && (uvmf['indexOf']('http://') != -0x1 || uvmf['indexOf']('https://') != -0x1)) {
        var vu1i = hq5ft0['md5'],
            zren8x = oc24['getFileNativePath'](vu1i);oc24['remove'](zren8x);
      }
    }, vibtf['onReadNativeCallBack'] = function (hmtibf, xerz8, bmvtf, ifht0, bumi1, i0hm, mfibt, guv9b, buv9i) {
      ifht0 === void 0x0 && (ifht0 = !![]), i0hm === void 0x0 && (i0hm = ![]), guv9b === void 0x0 && (guv9b = 0x0);if (!guv9b) {
        var k5_2;if (bmvtf == 'json' || bmvtf == 'atlas') k5_2 = k24o_['getJson'](buv9i['data']);else bmvtf == 'xml' ? k5_2 = $3a7p['parseXMLFromString'](buv9i['data']) : k5_2 = buv9i['data'];mfibt['onLoaded'](k5_2), !k24o_['isZiYu'] && k24o_['isPosMsgYu'] && bmvtf != 'arraybuffer' && wx['postMessage']({ 'url': xerz8, 'data': k5_2, 'isLoad': !![] });
      } else guv9b == 0x1 && k24o_['EnvConfig']['load']['call'](mfibt, xerz8, bmvtf, ifht0, bumi1, i0hm);
    }, himt(vibtf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vibtf;
  }(),
      oc24 = function (nzxsew) {
    function kq42() {
      kq42['__super']['call'](this);;
    }return ivb1(kq42, 'laya.wx.mini.MiniFileMgr', nzxsew), kq42['isLoadFile'] = function (zr$87) {
      return kq42['_fileTypeArr']['indexOf'](zr$87) != -0x1 ? !![] : ![];
    }, kq42['getFileInfo'] = function (ifu) {
      var vfubi = ifu['split']('?')[0x0],
          qkh5t0 = kq42['filesListObj'][vfubi];if (qkh5t0 == null) return null;else return qkh5t0;return null;
    }, kq42['onFileUpdate'] = function (k_642o, q0m) {
      var wjdos = k_642o['split']('/'),
          m1bi = wjdos[wjdos['length'] - 0x1],
          jsdncw = kq42['getFileInfo'](q0m);if (jsdncw == null) kq42['onSaveFile'](q0m, m1bi);else {
        if (jsdncw['readyUrl'] != q0m) kq42['remove'](m1bi, q0m);
      }
    }, kq42['exits'] = function (_456, k46_52) {
      var _2c46o = kq42['getFileNativePath'](_456);kq42['fs']['getFileInfo']({ 'filePath': _2c46o, 'success': function (g91bu) {
          k46_52 != null && k46_52['runWith']([0x0, g91bu]);
        }, 'fail': function (cdo2j6) {
          k46_52 != null && k46_52['runWith']([0x1, cdo2j6]);
        } });
    }, kq42['read'] = function (kq0, t0fh, q5k24_, t05hkq) {
      t0fh === void 0x0 && (t0fh = 'ascill'), t05hkq === void 0x0 && (t05hkq = '');var snxwe;t05hkq != '' ? snxwe = kq42['getFileNativePath'](kq0) : snxwe = kq0, kq42['fs']['readFile']({ 'filePath': snxwe, 'encoding': t0fh, 'success': function (_254k) {
          q5k24_ != null && q5k24_['runWith']([0x0, _254k]);
        }, 'fail': function (sdwcoj) {
          if (sdwcoj && t05hkq != '') kq42['down'](t05hkq, t0fh, q5k24_, t05hkq);else q5k24_ != null && q5k24_['runWith']([0x1]);
        } });
    }, kq42['readNativeFile'] = function (_542q, mvbfu) {
      kq42['fs']['readFile']({ 'filePath': _542q, 'encoding': '', 'success': function (hfibmt) {
          mvbfu != null && mvbfu['runWith']([0x0]);
        }, 'fail': function (wdjsco) {
          mvbfu != null && mvbfu['runWith']([0x1]);
        } });
    }, kq42['down'] = function (t50hqf, ezr$8, jcdo2, swncj) {
      ezr$8 === void 0x0 && (ezr$8 = 'ascill'), swncj === void 0x0 && (swncj = '');var it0mhf = kq42['getFileNativePath'](swncj),
          mbhif = kq42['wxdown']({ 'url': t50hqf, 'filePath': it0mhf, 'success': function (o62cj) {
          if (o62cj['statusCode'] === 0xc8) kq42['readFile'](o62cj['filePath'], ezr$8, jcdo2, swncj);
        }, 'fail': function (xwsdjn) {
          jcdo2 != null && jcdo2['runWith']([0x1, xwsdjn]);
        } });mbhif['onProgressUpdate'](function (fvibt) {
        jcdo2 != null && jcdo2['runWith']([0x2, fvibt['progress']]);
      });
    }, kq42['readFile'] = function (zx8e7r, hi0tfm, mfhit, gv1b) {
      hi0tfm === void 0x0 && (hi0tfm = 'ascill'), gv1b === void 0x0 && (gv1b = ''), kq42['fs']['readFile']({ 'filePath': zx8e7r, 'encoding': hi0tfm, 'success': function (cwjdo) {
          if (zx8e7r['indexOf']('http://') != -0x1 || zx8e7r['indexOf']('https://') != -0x1) kq42['onFileUpdate'](zx8e7r, gv1b);mfhit != null && mfhit['runWith']([0x0, cwjdo]);
        }, 'fail': function (r8$37) {
          if (r8$37) mfhit != null && mfhit['runWith']([0x1, r8$37]);
        } });
    }, kq42['downImg'] = function (jd6s, b1vu9, ap7y$3) {
      ap7y$3 === void 0x0 && (ap7y$3 = '');var hftq05 = kq42['wxdown']({ 'url': jd6s, 'success': function (ze7r) {
          ze7r['statusCode'] === 0xc8 && kq42['copyFile'](ze7r['tempFilePath'], ap7y$3, b1vu9);
        }, 'fail': function (o2d6c) {
          b1vu9 != null && b1vu9['runWith']([0x1, o2d6c]);
        } });
    }, kq42['copyFile'] = function (njcwsd, _oc42, cj4o26) {
      var o2cjd = njcwsd['split']('/'),
          _k4q2 = o2cjd[o2cjd['length'] - 0x1],
          ub = _oc42['split']('?')[0x0],
          ncswj = kq42['getFileInfo'](_oc42),
          mtif = kq42['getFileNativePath'](_k4q2);kq42['fs']['copyFile']({ 'srcPath': njcwsd, 'destPath': mtif, 'success': function (_k05q) {
          if (!ncswj) kq42['onSaveFile'](_oc42, _k4q2), cj4o26 != null && cj4o26['runWith']([0x0]);else {
            if (ncswj['readyUrl'] != _oc42) kq42['remove'](_k4q2, _oc42, cj4o26);
          }
        }, 'fail': function (q0tfhm) {
          cj4o26 != null && cj4o26['runWith']([0x1, q0tfhm]);
        } });
    }, kq42['getFileNativePath'] = function (r837$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r837$;
    }, kq42['remove'] = function (t5q0f, mfubv, s6jd) {
      mfubv === void 0x0 && (mfubv = '');var k5th0 = kq42['getFileInfo'](mfubv),
          z7$8re = kq42['getFileNativePath'](k5th0['md5']);ya$r7['loader']['clearRes'](k5th0['readyUrl']), kq42['fs']['unlink']({ 'filePath': z7$8re, 'success': function (ibmvfu) {
          if (mfubv != '') kq42['onSaveFile'](mfubv, t5q0f);s6jd != null && s6jd['runWith']([0x0]);
        }, 'fail': function (q5_k) {} });
    }, kq42['onSaveFile'] = function (co6j2, xwsend) {
      var j6co42 = co6j2['split']('?')[0x0];kq42['filesListObj'][j6co42] = { 'md5': xwsend, 'readyUrl': co6j2 }, kq42['fs']['writeFile']({ 'filePath': kq42['fileNativeDir'] + '/' + kq42['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kq42['filesListObj']), 'success': function (yr873) {
          console['log']('写入测试测试成功：', yr873);
        }, 'fail': function ($3yap7) {
          console['log']('写入测试测试失败：', $3yap7);
        } });
    }, kq42['existDir'] = function (gvb, $e) {
      kq42['fs']['mkdir']({ 'dirPath': gvb, 'success': function (btmivf) {
          $e != null && $e['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (bh) {
          if (bh['errMsg']['indexOf']('file already exists') != -0x1) kq42['readSync'](kq42['fileListName'], 'utf8', $e);else $e != null && $e['runWith']([0x1, bh]);
        } });
    }, kq42['readSync'] = function (r8nzx, x7er, enxz8w, q50htf) {
      x7er === void 0x0 && (x7er = 'ascill'), q50htf === void 0x0 && (q50htf = '');var uvbmi = kq42['getFileNativePath'](r8nzx),
          dxens;try {
        dxens = kq42['fs']['readFileSync'](uvbmi), enxz8w != null && enxz8w['runWith']([0x0, { 'data': dxens }]);
      } catch (sxdwe) {
        enxz8w != null && enxz8w['runWith']([0x1]);
      }
    }, kq42['readCache'] = function () {}, kq42['writeCache'] = function (tqh0k5) {
      var xsenzw = readyUrl['split']('?')[0x0];kq42['filesListObj'][xsenzw] = { 'md5': md5Name, 'readyUrl': readyUrl }, kq42['fs']['writeFile']({ 'filePath': kq42['fileNativeDir'] + '/' + kq42['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kq42['filesListObj']), 'success': function (k_4q25) {}, 'fail': function (hm0tf) {} });
    }, kq42['setNativeFileDir'] = function (sxdjwn) {
      kq42['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sxdjwn;
    }, kq42['filesListObj'] = {}, kq42['fileNativeDir'] = null, kq42['fileListName'] = 'layaairfiles.txt', kq42['ziyuFileData'] = {}, himt(kq42, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kq42;
  }(swdc),
      u1v9g = function (wsenz) {
    function xwn8e() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xwn8e['__super']['call'](this), this['_sound'] = xwn8e['_createSound']();
    }ivb1(xwn8e, 'laya.wx.mini.MiniSound', wsenz);var r$873 = xwn8e['prototype'];return r$873['load'] = function (hfm0tq) {
      var ezrn8 = this;hfm0tq = o6cj24['formatURL'](hfm0tq), this['url'] = hfm0tq;if (xwn8e['_audioCache'][hfm0tq]) {
        this['event']('complete');return;
      }function y7r$38() {
        if (xwn8e['_null'] != undefined) ezrn8['_sound']['onCanplay'](xwn8e['_null']), ezrn8['_sound']['onError'](xwn8e['_null']);else try {
          ezrn8['_sound']['onCanplay'](null), ezrn8['_sound']['onError'](null), xwn8e['_null'] = null;
        } catch (xezn) {
          console['warn']('[wxmini] _clearSound:' + xezn), ezrn8['_sound']['onCanplay'](nez8xr), ezrn8['_sound']['onError'](nez8xr), xwn8e['_null'] = nez8xr;
        }
      }function qkt05() {
        y7r$38(), re7z['loaded'] = !![], re7z['event']('complete'), xwn8e['_audioCache'][re7z['url']] = re7z;
      }function d2co6(kqh_05) {
        console['error']('errCode=' + kqh_05['errCode'] + '  errMsg=' + kqh_05['errMsg']), y7r$38(), re7z['event']('error');
      }function nez8xr() {}this['_sound']['onCanplay'](qkt05), this['_sound']['onError'](d2co6), this['_sound']['src'] = hfm0tq;var re7z = this;
    }, r$873['play'] = function (djswnc, ihfbtm) {
      djswnc === void 0x0 && (djswnc = 0x0), ihfbtm === void 0x0 && (ihfbtm = 0x0);var h_50k;if (this['url'] == ods6cj['_tMusic']) {
        if (!xwn8e['_musicAudio']) xwn8e['_musicAudio'] = xwn8e['_createSound']();h_50k = xwn8e['_musicAudio'];
      } else h_50k = xwn8e['_createSound']();h_50k['src'] = this['url'];var _26c4 = new sdxne(h_50k);return _26c4['url'] = this['url'], _26c4['loops'] = ihfbtm, _26c4['startTime'] = djswnc, _26c4['play'](), ods6cj['addChannel'](_26c4), _26c4;
    }, r$873['dispose'] = function () {
      var pay73 = xwn8e['_audioCache'][this['url']];pay73 && (pay73['src'] = '', delete xwn8e['_audioCache'][this['url']]);
    }, enzr8x(0x0, r$873, 'duration', function () {
      return this['_sound']['duration'];
    }), xwn8e['_createSound'] = function () {
      return xwn8e['_id']++, k24o_['window']['wx']['createInnerAudioContext']();
    }, xwn8e['_musicAudio'] = null, xwn8e['_id'] = 0x0, xwn8e['_audioCache'] = {}, xwn8e['_null'] = undefined, xwn8e;
  }(swdc),
      sdxne = function (c62o_4) {
    function fmbiu(xwen8z) {
      this['_audio'] = null, this['_onEnd'] = null, fmbiu['__super']['call'](this), this['_audio'] = xwen8z, this['_onEnd'] = $3a7p['bind'](this['__onEnd'], this), xwen8z['onEnded'](this['_onEnd']);
    }ivb1(fmbiu, 'laya.wx.mini.MiniSoundChannel', c62o_4);var qtk5h0 = fmbiu['prototype'];return qtk5h0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ya$r7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qtk5h0['__onNull'] = function () {}, qtk5h0['play'] = function () {
      this['isStopped'] = ![], ods6cj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qtk5h0['stop'] = function () {
      this['isStopped'] = !![], ods6cj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fmbiu['_null'] != undefined) this['_audio']['onEnded'](fmbiu['_null']);else try {
        this['_audio']['onEnded'](null), fmbiu['_null'] = null;
      } catch (dcswnj) {
        console['warn']('[wxmini] stop:' + dcswnj), this['_audio']['onEnded']($3a7p['bind'](this['__onNull'], this)), fmbiu['_null'] = $3a7p['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qtk5h0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qtk5h0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ods6cj['addChannel'](this), this['_audio']['play']();
    }, enzr8x(0x0, qtk5h0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), enzr8x(0x0, qtk5h0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), enzr8x(0x0, qtk5h0, 'volume', function () {
      return 0x1;
    }, function (hbtfm) {}), fmbiu['_null'] = undefined, fmbiu;
  }(uvmifb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _q40k in Laya) {
    var d26oc = Laya[_q40k];d26oc && d26oc['__isclass'] && (exports[_q40k] = d26oc);
  }
});