var M = wx.$T;
(function (window, document, yxmh_0) {
  var $9ivp = yxmh_0['un'],
      wm_yxh = yxmh_0['uns'],
      zfq7o = yxmh_0['static'],
      oz0e7q = yxmh_0['class'],
      $cv = yxmh_0['getset'],
      j3rngb = yxmh_0['__newvec'],
      qoe = laya['utils']['Browser'],
      o7exq0 = laya['events']['Event'],
      i4c = laya['events']['EventDispatcher'],
      mx_q0y = laya['resource']['HTMLImage'],
      r1g8n3 = laya['utils']['Handler'],
      jbgrn3 = laya['display']['Input'],
      rang = laya['net']['Loader'],
      jsakbr = laya['maths']['Matrix'],
      qm_y0x = laya['renders']['Render'],
      mhwyx = laya['utils']['RunDriver'],
      zf7dpo = laya['media']['Sound'],
      bsrkj = laya['media']['SoundChannel'],
      $vfzd = laya['media']['SoundManager'],
      i4l = laya['display']['Stage'],
      xy0e = laya['net']['URL'],
      z7fo = laya['utils']['Utils'],
      _wm65 = function () {
    function gr3jn8() {}return oz0e7q(gr3jn8, 'laya.wx.mini.MiniAdpter'), gr3jn8['getJson'] = function (ox7qe) {
      return JSON['parse'](ox7qe);
    }, gr3jn8['init'] = function (vi9c2, m6_h) {
      vi9c2 === void 0x0 && (vi9c2 = ![]), m6_h === void 0x0 && (m6_h = ![]);if (gr3jn8['_inited']) return;gr3jn8['window'] = window;if (gr3jn8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;gr3jn8['_inited'] = !![], gr3jn8['isZiYu'] = m6_h, gr3jn8['isPosMsgYu'] = vi9c2, gr3jn8['EnvConfig'] = {}, !gr3jn8['isZiYu'] && (fpdv['setNativeFileDir']('/layaairGame'), fpdv['existDir'](fpdv['fileNativeDir'], r1g8n3['create'](gr3jn8, gr3jn8['onMkdirCallBack']))), gr3jn8['window']['focus'] = function () {}, yxmh_0['getUrlPath'] = function () {}, gr3jn8['window']['logtime'] = function (sbjrk) {}, gr3jn8['window']['alertTimeLog'] = function (_x0qye) {}, gr3jn8['window']['resetShareInfo'] = function () {}, gr3jn8['window']['CanvasRenderingContext2D'] = function () {}, gr3jn8['window']['CanvasRenderingContext2D']['prototype'] = gr3jn8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gr3jn8['window']['document']['body']['appendChild'] = function () {}, gr3jn8['EnvConfig']['pixelRatioInt'] = 0x0, mhwyx['getPixelRatio'] = gr3jn8['pixelRatio'], gr3jn8['_preCreateElement'] = qoe['createElement'], qoe['createElement'] = gr3jn8['createElement'], mhwyx['createShaderCondition'] = gr3jn8['createShaderCondition'], z7fo['parseXMLFromString'] = gr3jn8['parseXMLFromString'], jbgrn3['_createInputElement'] = fpd7z['_createInputElement'], gr3jn8['EnvConfig']['load'] = rang['prototype']['load'], rang['prototype']['load'] = rnabg['prototype']['load'], gr3jn8['isZiYu'] && vi9c2 && wx['onMessage'](function (ict29v) {
        ict29v['isLoad'] && (fpdv['ziyuFileData'][ict29v['url']] = ict29v['data']);
      });
    }, gr3jn8['onMkdirCallBack'] = function (fd7$zp, yoq0x) {
      if (!fd7$zp) fpdv['filesListObj'] = JSON['parse'](yoq0x['data']);
    }, gr3jn8['pixelRatio'] = function () {
      if (!gr3jn8['EnvConfig']['pixelRatioInt']) try {
        var $f9pvd = wx['getSystemInfoSync']();return gr3jn8['EnvConfig']['pixelRatioInt'] = $f9pvd['pixelRatio'], $f9pvd = $f9pvd, $f9pvd['pixelRatio'];
      } catch (dozpf) {}return gr3jn8['EnvConfig']['pixelRatioInt'];
    }, gr3jn8['createElement'] = function (eqyx) {
      if (eqyx == 'canvas') {
        var pd9;return gr3jn8['idx'] == 0x1 ? gr3jn8['isZiYu'] ? (pd9 = sharedCanvas, pd9['style'] = {}) : pd9 = window['canvas'] : pd9 = window['wx']['createCanvas'](), gr3jn8['idx']++, pd9;
      } else {
        if (eqyx == 'textarea' || eqyx == 'input') return gr3jn8['onCreateInput'](eqyx);else {
          if (eqyx == 'div') {
            var p7d$ = gr3jn8['_preCreateElement'](eqyx);return p7d$['contains'] = function (ilct4) {
              return null;
            }, p7d$['removeChild'] = function (n8r1g) {}, p7d$;
          } else return gr3jn8['_preCreateElement'](eqyx);
        }
      }
    }, gr3jn8['onCreateInput'] = function (ex_) {
      var fpzd$7 = gr3jn8['_preCreateElement'](ex_);return fpzd$7['focus'] = fpd7z['wxinputFocus'], fpzd$7['blur'] = fpd7z['wxinputblur'], fpzd$7['style'] = {}, fpzd$7['value'] = 0x0, fpzd$7['parentElement'] = {}, fpzd$7['placeholder'] = {}, fpzd$7['type'] = {}, fpzd$7['setColor'] = function (brkgja) {}, fpzd$7['setType'] = function ($pv9fd) {}, fpzd$7['setFontFace'] = function (h6wm15) {}, fpzd$7['addEventListener'] = function (yqm0) {}, fpzd$7['contains'] = function (r8nj) {
        return null;
      }, fpzd$7['removeChild'] = function (_yqx) {}, fpzd$7;
    }, gr3jn8['createShaderCondition'] = function (n8jr) {
      var h5681w = this,
          pze7of = function () {
        var vti29 = n8jr;return h5681w[n8jr['replace']('this.', '')];
      };return pze7of;
    }, gr3jn8['EnvConfig'] = null, gr3jn8['window'] = null, gr3jn8['_preCreateElement'] = null, gr3jn8['_inited'] = ![], gr3jn8['wxRequest'] = null, gr3jn8['systemInfo'] = null, gr3jn8['version'] = '0.0.1', gr3jn8['isZiYu'] = ![], gr3jn8['isPosMsgYu'] = ![], gr3jn8['parseXMLFromString'] = function (jg83nr) {
      var _hxmwy, h_mxy0;jg83nr = jg83nr['replace'](/>\s+</g, '><');try {
        _hxmwy = new window['Parser']['DOMParser']()['parseFromString'](jg83nr, 'text/xml');
      } catch (hyw_5m) {
        throw '需要引入xml解析库文件';
      }return _hxmwy;
    }, gr3jn8['idx'] = 0x1, gr3jn8;
  }(),
      ct92v = function () {
    function ubk() {}oz0e7q(ubk, 'laya.wx.mini.MiniImage');var fpeo7 = ubk['prototype'];return fpeo7['_loadImage'] = function (pze) {
      var fzd7op = this,
          dp7zf$ = ![];pze['indexOf']('layaNativeDir/') == -0x1 && (dp7zf$ = !![], pze = xy0e['formatURL'](pze));if (!fpdv['getFileInfo'](pze)) {
        if (pze['indexOf']('http://') != -0x1 || pze['indexOf']('https://') != -0x1) fpdv['downImg'](pze, new r1g8n3(ubk, ubk['onDownImgCallBack'], [pze, fzd7op]), pze);else ubk['onCreateImage'](pze, fzd7op, !![]);
      } else ubk['onCreateImage'](pze, fzd7op, !dp7zf$);
    }, ubk['onDownImgCallBack'] = function (hw6518, bgjakr, n8g1r3) {
      if (!n8g1r3) ubk['onCreateImage'](hw6518, bgjakr);else bgjakr['onError'](null);
    }, ubk['onCreateImage'] = function (c9$itv, brnag, m0q_x) {
      m0q_x === void 0x0 && (m0q_x = ![]);var c24il;if (!m0q_x) {
        var j3bnr = fpdv['getFileInfo'](c9$itv),
            ymxwh = j3bnr['md5'];c24il = fpdv['getFileNativePath'](ymxwh);
      } else c24il = c9$itv;if (brnag['imgCache'] == null) brnag['imgCache'] = {};var z7dp$;function abrjgk() {
        z7dp$['onload'] = null, z7dp$['onerror'] = null, delete brnag['imgCache'][c9$itv];
      };var p7dzf$ = function () {
        abrjgk(), brnag['onLoaded'](z7dp$);
      },
          jr3bgn = function () {
        abrjgk(), brnag['event']('error', 'Load image failed');
      };brnag['_type'] == 'nativeimage' ? (z7dp$ = new qoe['window']['Image'](), z7dp$['crossOrigin'] = '', z7dp$['onload'] = p7dzf$, z7dp$['onerror'] = jr3bgn, z7dp$['src'] = c24il, brnag['imgCache'][c9$itv] = z7dp$) : new mx_q0y['create'](c24il, { 'onload': p7dzf$, 'onerror': jr3bgn, 'onCreate': function (_xwhm) {
          z7dp$ = _xwhm, brnag['imgCache'][c9$itv] = _xwhm;
        } });
    }, ubk;
  }(),
      fpd7z = function () {
    function n8g1r() {}return oz0e7q(n8g1r, 'laya.wx.mini.MiniInput'), n8g1r['_createInputElement'] = function () {
      jbgrn3['_initInput'](jbgrn3['area'] = qoe['createElement']('textarea')), jbgrn3['_initInput'](jbgrn3['input'] = qoe['createElement']('input')), jbgrn3['inputContainer'] = qoe['createElement']('div'), jbgrn3['inputContainer']['style']['position'] = 'absolute', jbgrn3['inputContainer']['style']['zIndex'] = 0x186a0, qoe['container']['appendChild'](jbgrn3['inputContainer']), jbgrn3['inputContainer']['setPos'] = function (xqey_0, pd$vf) {
        jbgrn3['inputContainer']['style']['left'] = xqey_0 + 'px', jbgrn3['inputContainer']['style']['top'] = pd$vf + 'px';
      }, yxmh_0['stage']['on']('resize', null, n8g1r['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d$9ip) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $vfzd['_soundClass'] = fv$9, $vfzd['_musicClass'] = fv$9;
    }, n8g1r['_onStageResize'] = function () {
      var e7o0xq = yxmh_0['stage']['_canvasTransform']['identity']();e7o0xq['scale'](qoe['width'] / qm_y0x['canvas']['width'] / mhwyx['getPixelRatio'](), qoe['height'] / qm_y0x['canvas']['height'] / mhwyx['getPixelRatio']());
    }, n8g1r['wxinputFocus'] = function (rbskaj) {
      var f9dp$ = jbgrn3['inputElement']['target'];if (f9dp$ && !f9dp$['editable']) return;_wm65['window']['wx']['offKeyboardConfirm'](), _wm65['window']['wx']['offKeyboardInput'](), _wm65['window']['wx']['showKeyboard']({ 'defaultValue': f9dp$['text'], 'maxLength': f9dp$['maxChars'], 'multiple': f9dp$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yx0_hm) {}, 'fail': function (gabrj) {} }), _wm65['window']['wx']['onKeyboardConfirm'](function (h_yw5) {
        var jsuabk = h_yw5 ? h_yw5['value'] : '';f9dp$['text'] = jsuabk, f9dp$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _wm65['window']['wx']['onKeyboardInput'](function (b3nrg) {
        var ng83r = b3nrg ? b3nrg['value'] : '';if (!f9dp$['multiline']) {
          if (ng83r['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }f9dp$['text'] = ng83r, f9dp$['event']('input');
      });
    }, n8g1r['inputEnter'] = function () {
      jbgrn3['inputElement']['target']['focus'] = ![];
    }, n8g1r['wxinputblur'] = function () {
      n8g1r['hideKeyboard']();
    }, n8g1r['hideKeyboard'] = function () {
      _wm65['window']['wx']['offKeyboardConfirm'](), _wm65['window']['wx']['offKeyboardInput'](), _wm65['window']['wx']['hideKeyboard']({ 'success': function (gbanj) {
          console['log']('隐藏键盘');
        }, 'fail': function (xhmy) {
          console['log']('隐藏键盘出错:' + (xhmy ? xhmy['errMsg'] : ''));
        } });
    }, n8g1r;
  }(),
      rnabg = function () {
    function jsrk() {}oz0e7q(jsrk, 'laya.wx.mini.MiniLoader');var h5y_wm = jsrk['prototype'];return h5y_wm['load'] = function (y0xm_q, _h0m, z7fd$, $d9vi, zoeq07) {
      z7fd$ === void 0x0 && (z7fd$ = !![]), zoeq07 === void 0x0 && (zoeq07 = ![]);var ef7zop = this;ef7zop['_url'] = y0xm_q;if (y0xm_q['indexOf']('data:image') === 0x0) ef7zop['_type'] = _h0m = 'image';else ef7zop['_type'] = _h0m || (_h0m = ef7zop['getTypeFromUrl'](y0xm_q));ef7zop['_cache'] = z7fd$, ef7zop['_data'] = null;var gn81 = 'ascii';if (y0xm_q['indexOf']('.fnt') != -0x1) gn81 = 'utf8';else _h0m == 'arraybuffer' && (gn81 = '');;var t4icl2 = z7fo['getFileExtension'](y0xm_q);if (jsrk['_fileTypeArr']['indexOf'](t4icl2) != -0x1) _wm65['EnvConfig']['load']['call'](this, y0xm_q, _h0m, z7fd$, $d9vi, zoeq07);else {
        if (!fpdv['getFileInfo'](y0xm_q)) {
          if (y0xm_q['indexOf']('layaNativeDir/') != -0x1) {
            if (_wm65['isZiYu']) {
              var n65831 = fpdv['ziyuFileData'][y0xm_q];ef7zop['onLoaded'](n65831);return;
            } else {
              cosnole['log']('read read'), fpdv['read'](y0xm_q, gn81, new r1g8n3(jsrk, jsrk['onReadNativeCallBack'], [gn81, y0xm_q, _h0m, z7fd$, $d9vi, zoeq07, ef7zop]));return;
            }
          }if (xy0e['rootPath'] == '') var krbjg = y0xm_q;else krbjg = y0xm_q['split'](xy0e['rootPath'])[0x0];y0xm_q['indexOf']('http://') != -0x1 || y0xm_q['indexOf']('https://') != -0x1 ? _wm65['EnvConfig']['load']['call'](ef7zop, y0xm_q, _h0m, z7fd$, $d9vi, zoeq07) : fpdv['readFile'](krbjg, gn81, new r1g8n3(jsrk, jsrk['onReadNativeCallBack'], [gn81, y0xm_q, _h0m, z7fd$, $d9vi, zoeq07, ef7zop]), y0xm_q);
        } else _wm65['EnvConfig']['load']['call'](this, y0xm_q, _h0m, z7fd$, $d9vi, zoeq07);
      }
    }, h5y_wm['resMgrLoad'] = function (ngjba, zf7e, xyeq0, rbgkaj, krsaj, jang, mh0_yx) {
      xyeq0 === void 0x0 && (xyeq0 = 0x0), rbgkaj === void 0x0 && (rbgkaj = ![]), krsaj === void 0x0 && (krsaj = ![]), jang === void 0x0 && (jang = 0x0), mh0_yx === void 0x0 && (mh0_yx = 0x3), ngjba['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ngjba), _wm65['EnvConfig']['resMgrLoad'](ngjba, (ozpef7, _mwh56, _ywh5m) => {
        jsrk['prototype']['resMgrLoadCallBack'](ozpef7, _mwh56, _ywh5m, zf7e);
      }, xyeq0, rbgkaj, krsaj, jang, mh0_yx);
    }, h5y_wm['resMgrLoadCallBack'] = function (jabrsk, $fv9pd, qo7f, yqxo0e) {
      console['log']('buff:::', jabrsk, qo7f, fpdv['fileNativeDir'] + '///' + fpdv['fileListName']), yqxo0e(jabrsk, $fv9pd, qo7f);
    }, h5y_wm['clearRes'] = function ($vpz, c2it9) {
      c2it9 === void 0x0 && (c2it9 = ![]);var $fzdv = this;$fzdv['clearRes']($vpz, c2it9);var jbrk = fpdv['getFileInfo']($vpz);if (jbrk && ($vpz['indexOf']('http://') != -0x1 || $vpz['indexOf']('https://') != -0x1)) {
        var yoqx0 = jbrk['md5'],
            y_mw = fpdv['getFileNativePath'](yoqx0);fpdv['remove'](y_mw);
      }
    }, jsrk['onReadNativeCallBack'] = function (kubs, _0my, hm5w61, _hxy0m, w_yhxm, yxh_0m, b3njg, r81g3, g8n16) {
      _hxy0m === void 0x0 && (_hxy0m = !![]), yxh_0m === void 0x0 && (yxh_0m = ![]), r81g3 === void 0x0 && (r81g3 = 0x0);if (!r81g3) {
        var wh_my;if (hm5w61 == 'json' || hm5w61 == 'atlas') wh_my = _wm65['getJson'](g8n16['data']);else hm5w61 == 'xml' ? wh_my = z7fo['parseXMLFromString'](g8n16['data']) : wh_my = g8n16['data'];b3njg['onLoaded'](wh_my), !_wm65['isZiYu'] && _wm65['isPosMsgYu'] && hm5w61 != 'arraybuffer' && wx['postMessage']({ 'url': _0my, 'data': wh_my, 'isLoad': !![] });
      } else r81g3 == 0x1 && _wm65['EnvConfig']['load']['call'](b3njg, _0my, hm5w61, _hxy0m, w_yhxm, yxh_0m);
    }, zfq7o(jsrk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jsrk;
  }(),
      fpdv = function (ex_q) {
    function jrakgb() {
      jrakgb['__super']['call'](this);;
    }return oz0e7q(jrakgb, 'laya.wx.mini.MiniFileMgr', ex_q), jrakgb['isLoadFile'] = function (j3r) {
      return jrakgb['_fileTypeArr']['indexOf'](j3r) != -0x1 ? !![] : ![];
    }, jrakgb['getFileInfo'] = function (efzp7) {
      var vdi9$ = efzp7['split']('?')[0x0],
          f7po = jrakgb['filesListObj'][vdi9$];if (f7po == null) return null;else return f7po;return null;
    }, jrakgb['onFileUpdate'] = function (w831, gjkr) {
      var zopd = w831['split']('/'),
          eyoq0 = zopd[zopd['length'] - 0x1],
          fpd$9v = jrakgb['getFileInfo'](gjkr);if (fpd$9v == null) jrakgb['onSaveFile'](gjkr, eyoq0);else {
        if (fpd$9v['readyUrl'] != gjkr) jrakgb['remove'](eyoq0, gjkr);
      }
    }, jrakgb['exits'] = function (fd9$v, x0_qm) {
      var jng83 = jrakgb['getFileNativePath'](fd9$v);jrakgb['fs']['getFileInfo']({ 'filePath': jng83, 'success': function (ex0q_) {
          x0_qm != null && x0_qm['runWith']([0x0, ex0q_]);
        }, 'fail': function (sabk) {
          x0_qm != null && x0_qm['runWith']([0x1, sabk]);
        } });
    }, jrakgb['read'] = function (ez0q7o, usjakb, $vpfz, gjar) {
      usjakb === void 0x0 && (usjakb = 'ascill'), gjar === void 0x0 && (gjar = '');var bakjr;gjar != '' ? bakjr = jrakgb['getFileNativePath'](ez0q7o) : bakjr = ez0q7o, jrakgb['fs']['readFile']({ 'filePath': bakjr, 'encoding': usjakb, 'success': function (zvp$df) {
          $vpfz != null && $vpfz['runWith']([0x0, zvp$df]);
        }, 'fail': function (jrn8) {
          if (jrn8 && gjar != '') jrakgb['down'](gjar, usjakb, $vpfz, gjar);else $vpfz != null && $vpfz['runWith']([0x1]);
        } });
    }, jrakgb['readNativeFile'] = function (f7epo, rkbga) {
      jrakgb['fs']['readFile']({ 'filePath': f7epo, 'encoding': '', 'success': function (yex0q) {
          rkbga != null && rkbga['runWith']([0x0]);
        }, 'fail': function (_h6m5w) {
          rkbga != null && rkbga['runWith']([0x1]);
        } });
    }, jrakgb['down'] = function (gabrnj, bku, _hw5, tl) {
      bku === void 0x0 && (bku = 'ascill'), tl === void 0x0 && (tl = '');var $c9itv = jrakgb['getFileNativePath'](tl),
          idvp$9 = jrakgb['wxdown']({ 'url': gabrnj, 'filePath': $c9itv, 'success': function (_hwmy5) {
          if (_hwmy5['statusCode'] === 0xc8) jrakgb['readFile'](_hwmy5['filePath'], bku, _hw5, tl);
        }, 'fail': function (i4c29) {
          _hw5 != null && _hw5['runWith']([0x1, i4c29]);
        } });idvp$9['onProgressUpdate'](function (w651h) {
        _hw5 != null && _hw5['runWith']([0x2, w651h['progress']]);
      });
    }, jrakgb['readFile'] = function (pfv9$d, bnrjga, pzvd$, $zvpdf) {
      bnrjga === void 0x0 && (bnrjga = 'ascill'), $zvpdf === void 0x0 && ($zvpdf = ''), jrakgb['fs']['readFile']({ 'filePath': pfv9$d, 'encoding': bnrjga, 'success': function (h_0xm) {
          if (pfv9$d['indexOf']('http://') != -0x1 || pfv9$d['indexOf']('https://') != -0x1) jrakgb['onFileUpdate'](pfv9$d, $zvpdf);pzvd$ != null && pzvd$['runWith']([0x0, h_0xm]);
        }, 'fail': function (oy0eq) {
          if (oy0eq) pzvd$ != null && pzvd$['runWith']([0x1, oy0eq]);
        } });
    }, jrakgb['downImg'] = function (dfz7p$, qe7z, _whxym) {
      _whxym === void 0x0 && (_whxym = '');var pdi$ = jrakgb['wxdown']({ 'url': dfz7p$, 'success': function (h165w8) {
          h165w8['statusCode'] === 0xc8 && jrakgb['copyFile'](h165w8['tempFilePath'], _whxym, qe7z);
        }, 'fail': function (y_m0hx) {
          qe7z != null && qe7z['runWith']([0x1, y_m0hx]);
        } });
    }, jrakgb['copyFile'] = function (kbragj, ict94, fz7p$d) {
      var t2vc = kbragj['split']('/'),
          x0_eqy = t2vc[t2vc['length'] - 0x1],
          jrbgn = ict94['split']('?')[0x0],
          ezof = jrakgb['getFileInfo'](ict94),
          whmyx = jrakgb['getFileNativePath'](x0_eqy);jrakgb['fs']['copyFile']({ 'srcPath': kbragj, 'destPath': whmyx, 'success': function (m_xq0) {
          if (!ezof) jrakgb['onSaveFile'](ict94, x0_eqy), fz7p$d != null && fz7p$d['runWith']([0x0]);else {
            if (ezof['readyUrl'] != ict94) jrakgb['remove'](x0_eqy, ict94, fz7p$d);
          }
        }, 'fail': function (jgarbn) {
          fz7p$d != null && fz7p$d['runWith']([0x1, jgarbn]);
        } });
    }, jrakgb['getFileNativePath'] = function (my_q0x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + my_q0x;
    }, jrakgb['remove'] = function (hy0x, dz7fop, dzvfp$) {
      dz7fop === void 0x0 && (dz7fop = '');var myhw_ = jrakgb['getFileInfo'](dz7fop),
          dvf$ = jrakgb['getFileNativePath'](myhw_['md5']);yxmh_0['loader']['clearRes'](myhw_['readyUrl']), jrakgb['fs']['unlink']({ 'filePath': dvf$, 'success': function (it2cl) {
          if (dz7fop != '') jrakgb['onSaveFile'](dz7fop, hy0x);dzvfp$ != null && dzvfp$['runWith']([0x0]);
        }, 'fail': function (ofzdp7) {} });
    }, jrakgb['onSaveFile'] = function (ct9$, y0m_qx) {
      var q_mx = ct9$['split']('?')[0x0];jrakgb['filesListObj'][q_mx] = { 'md5': y0m_qx, 'readyUrl': ct9$ }, jrakgb['fs']['writeFile']({ 'filePath': jrakgb['fileNativeDir'] + '/' + jrakgb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jrakgb['filesListObj']), 'success': function (t2i4l) {
          console['log']('写入测试测试成功：', t2i4l);
        }, 'fail': function (n5316) {
          console['log']('写入测试测试失败：', n5316);
        } });
    }, jrakgb['existDir'] = function (x_0yq, cv9t$) {
      jrakgb['fs']['mkdir']({ 'dirPath': x_0yq, 'success': function (w165h) {
          cv9t$ != null && cv9t$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (h6w1m5) {
          if (h6w1m5['errMsg']['indexOf']('file already exists') != -0x1) jrakgb['readSync'](jrakgb['fileListName'], 'utf8', cv9t$);else cv9t$ != null && cv9t$['runWith']([0x1, h6w1m5]);
        } });
    }, jrakgb['readSync'] = function (us, buskj, vti, m0xqy) {
      buskj === void 0x0 && (buskj = 'ascill'), m0xqy === void 0x0 && (m0xqy = '');var c4t2 = jrakgb['getFileNativePath'](us),
          qm_yx0;try {
        qm_yx0 = jrakgb['fs']['readFileSync'](c4t2), vti != null && vti['runWith']([0x0, { 'data': qm_yx0 }]);
      } catch (mw_yh) {
        vti != null && vti['runWith']([0x1]);
      }
    }, jrakgb['readCache'] = function () {}, jrakgb['writeCache'] = function (qy_m0) {
      var agrjkb = readyUrl['split']('?')[0x0];jrakgb['filesListObj'][agrjkb] = { 'md5': md5Name, 'readyUrl': readyUrl }, jrakgb['fs']['writeFile']({ 'filePath': jrakgb['fileNativeDir'] + '/' + jrakgb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jrakgb['filesListObj']), 'success': function (w_h5m6) {}, 'fail': function (sjbkra) {} });
    }, jrakgb['setNativeFileDir'] = function (oq0z) {
      jrakgb['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oq0z;
    }, jrakgb['filesListObj'] = {}, jrakgb['fileNativeDir'] = null, jrakgb['fileListName'] = 'layaairfiles.txt', jrakgb['ziyuFileData'] = {}, zfq7o(jrakgb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), jrakgb;
  }(i4c),
      fv$9 = function (dvp9i$) {
    function y0q_xm() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y0q_xm['__super']['call'](this), this['_sound'] = y0q_xm['_createSound']();
    }oz0e7q(y0q_xm, 'laya.wx.mini.MiniSound', dvp9i$);var xyq_m = y0q_xm['prototype'];return xyq_m['load'] = function (ng183r) {
      var q0x7 = this;ng183r = xy0e['formatURL'](ng183r), this['url'] = ng183r;if (y0q_xm['_audioCache'][ng183r]) {
        this['event']('complete');return;
      }function q0mxy() {
        if (y0q_xm['_null'] != undefined) q0x7['_sound']['onCanplay'](y0q_xm['_null']), q0x7['_sound']['onError'](y0q_xm['_null']);else try {
          q0x7['_sound']['onCanplay'](null), q0x7['_sound']['onError'](null), y0q_xm['_null'] = null;
        } catch (jrgb3n) {
          console['warn']('[wxmini] _clearSound:' + jrgb3n), q0x7['_sound']['onCanplay'](bgn3), q0x7['_sound']['onError'](bgn3), y0q_xm['_null'] = bgn3;
        }
      }function c429i() {
        q0mxy(), g31r8n['loaded'] = !![], g31r8n['event']('complete'), y0q_xm['_audioCache'][g31r8n['url']] = g31r8n;
      }function t49c2i(oxq7e0) {
        console['error']('errCode=' + oxq7e0['errCode'] + '  errMsg=' + oxq7e0['errMsg']), q0mxy(), g31r8n['event']('error');
      }function bgn3() {}this['_sound']['onCanplay'](c429i), this['_sound']['onError'](t49c2i), this['_sound']['src'] = ng183r;var g31r8n = this;
    }, xyq_m['play'] = function (_wmhxy, xymwh_) {
      _wmhxy === void 0x0 && (_wmhxy = 0x0), xymwh_ === void 0x0 && (xymwh_ = 0x0);var ng6138;if (this['url'] == $vfzd['_tMusic']) {
        if (!y0q_xm['_musicAudio']) y0q_xm['_musicAudio'] = y0q_xm['_createSound']();ng6138 = y0q_xm['_musicAudio'];
      } else ng6138 = y0q_xm['_createSound']();ng6138['src'] = this['url'];var m5w16h = new odfp7z(ng6138);return m5w16h['url'] = this['url'], m5w16h['loops'] = xymwh_, m5w16h['startTime'] = _wmhxy, m5w16h['play'](), $vfzd['addChannel'](m5w16h), m5w16h;
    }, xyq_m['dispose'] = function () {
      var ngjar = y0q_xm['_audioCache'][this['url']];ngjar && (ngjar['src'] = '', delete y0q_xm['_audioCache'][this['url']]);
    }, $cv(0x0, xyq_m, 'duration', function () {
      return this['_sound']['duration'];
    }), y0q_xm['_createSound'] = function () {
      return y0q_xm['_id']++, _wm65['window']['wx']['createInnerAudioContext']();
    }, y0q_xm['_musicAudio'] = null, y0q_xm['_id'] = 0x0, y0q_xm['_audioCache'] = {}, y0q_xm['_null'] = undefined, y0q_xm;
  }(i4c),
      odfp7z = function (xoq7e0) {
    function hm_(zd7op) {
      this['_audio'] = null, this['_onEnd'] = null, hm_['__super']['call'](this), this['_audio'] = zd7op, this['_onEnd'] = z7fo['bind'](this['__onEnd'], this), zd7op['onEnded'](this['_onEnd']);
    }oz0e7q(hm_, 'laya.wx.mini.MiniSoundChannel', xoq7e0);var qo7x0 = hm_['prototype'];return qo7x0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yxmh_0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qo7x0['__onNull'] = function () {}, qo7x0['play'] = function () {
      this['isStopped'] = ![], $vfzd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qo7x0['stop'] = function () {
      this['isStopped'] = !![], $vfzd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (hm_['_null'] != undefined) this['_audio']['onEnded'](hm_['_null']);else try {
        this['_audio']['onEnded'](null), hm_['_null'] = null;
      } catch (dv9fp) {
        console['warn']('[wxmini] stop:' + dv9fp), this['_audio']['onEnded'](z7fo['bind'](this['__onNull'], this)), hm_['_null'] = z7fo['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qo7x0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qo7x0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $vfzd['addChannel'](this), this['_audio']['play']();
    }, $cv(0x0, qo7x0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), $cv(0x0, qo7x0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), $cv(0x0, qo7x0, 'volume', function () {
      return 0x1;
    }, function (n368g1) {}), hm_['_null'] = undefined, hm_;
  }(bsrkj);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fz7p in Laya) {
    var $vdip9 = Laya[fz7p];$vdip9 && $vdip9['__isclass'] && (exports[fz7p] = $vdip9);
  }
});