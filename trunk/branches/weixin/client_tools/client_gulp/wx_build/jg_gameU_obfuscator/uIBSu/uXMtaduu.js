var o = wx.$U;
(function (window, document, l7owq) {
  var _vnks$ = l7owq['un'],
      _vak6 = l7owq['uns'],
      pf$se = l7owq['static'],
      ca0kr6 = l7owq['class'],
      esf$n = l7owq['getset'],
      k6vac = l7owq['__newvec'],
      sv$uen = laya['utils']['Browser'],
      dzg = laya['events']['Event'],
      lqmiho = laya['events']['EventDispatcher'],
      sev$ = laya['resource']['HTMLImage'],
      wgxl = laya['utils']['Handler'],
      ck_v = laya['display']['Input'],
      gxl7wq = laya['net']['Loader'],
      lwg97 = laya['maths']['Matrix'],
      dg5t = laya['renders']['Render'],
      n_ka6 = laya['utils']['RunDriver'],
      r108cb = laya['media']['Sound'],
      vak_sn = laya['media']['SoundChannel'],
      vk_nsa = laya['media']['SoundManager'],
      ryb1 = laya['display']['Stage'],
      _nsk$ = laya['net']['URL'],
      akc6v = laya['utils']['Utils'],
      ca860 = function () {
    function rb81() {}return ca0kr6(rb81, 'laya.wx.mini.MiniAdpter'), rb81['getJson'] = function (jh4f) {
      return JSON['parse'](jh4f);
    }, rb81['init'] = function (qxl7g, g7wq) {
      qxl7g === void 0x0 && (qxl7g = ![]), g7wq === void 0x0 && (g7wq = ![]);if (rb81['_inited']) return;rb81['window'] = window;if (rb81['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rb81['_inited'] = !![], rb81['isZiYu'] = g7wq, rb81['isPosMsgYu'] = qxl7g, rb81['EnvConfig'] = {}, !rb81['isZiYu'] && (rc180['setNativeFileDir']('/layaairGame'), rc180['existDir'](rc180['fileNativeDir'], wgxl['create'](rb81, rb81['onMkdirCallBack']))), rb81['window']['focus'] = function () {}, l7owq['getUrlPath'] = function () {}, rb81['window']['logtime'] = function (c6r0ak) {}, rb81['window']['alertTimeLog'] = function (sv_$nk) {}, rb81['window']['resetShareInfo'] = function () {}, rb81['window']['CanvasRenderingContext2D'] = function () {}, rb81['window']['CanvasRenderingContext2D']['prototype'] = rb81['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rb81['window']['document']['body']['appendChild'] = function () {}, rb81['EnvConfig']['pixelRatioInt'] = 0x0, n_ka6['getPixelRatio'] = rb81['pixelRatio'], rb81['_preCreateElement'] = sv$uen['createElement'], sv$uen['createElement'] = rb81['createElement'], n_ka6['createShaderCondition'] = rb81['createShaderCondition'], akc6v['parseXMLFromString'] = rb81['parseXMLFromString'], ck_v['_createInputElement'] = iomlxq['_createInputElement'], rb81['EnvConfig']['load'] = gxl7wq['prototype']['load'], gxl7wq['prototype']['load'] = ns$fe['prototype']['load'], rb81['isZiYu'] && qxl7g && wx['onMessage'](function (p4h3m) {
        p4h3m['isLoad'] && (rc180['ziyuFileData'][p4h3m['url']] = p4h3m['data']);
      });
    }, rb81['onMkdirCallBack'] = function (z9g7xw, dg59zw) {
      if (!z9g7xw) rc180['filesListObj'] = JSON['parse'](dg59zw['data']);
    }, rb81['pixelRatio'] = function () {
      if (!rb81['EnvConfig']['pixelRatioInt']) try {
        var d9zgw5 = wx['getSystemInfoSync']();return rb81['EnvConfig']['pixelRatioInt'] = d9zgw5['pixelRatio'], d9zgw5 = d9zgw5, d9zgw5['pixelRatio'];
      } catch (bry801) {}return rb81['EnvConfig']['pixelRatioInt'];
    }, rb81['createElement'] = function (sv_$) {
      if (sv_$ == 'canvas') {
        var d5z9tg;return rb81['idx'] == 0x1 ? rb81['isZiYu'] ? (d5z9tg = sharedCanvas, d5z9tg['style'] = {}) : d5z9tg = window['canvas'] : d5z9tg = window['wx']['createCanvas'](), rb81['idx']++, d5z9tg;
      } else {
        if (sv_$ == 'textarea' || sv_$ == 'input') return rb81['onCreateInput'](sv_$);else {
          if (sv_$ == 'div') {
            var g5wd9 = rb81['_preCreateElement'](sv_$);return g5wd9['contains'] = function (r8ac60) {
              return null;
            }, g5wd9['removeChild'] = function (qjomih) {}, g5wd9;
          } else return rb81['_preCreateElement'](sv_$);
        }
      }
    }, rb81['onCreateInput'] = function (wg97zx) {
      var avk_6 = rb81['_preCreateElement'](wg97zx);return avk_6['focus'] = iomlxq['wxinputFocus'], avk_6['blur'] = iomlxq['wxinputblur'], avk_6['style'] = {}, avk_6['value'] = 0x0, avk_6['parentElement'] = {}, avk_6['placeholder'] = {}, avk_6['type'] = {}, avk_6['setColor'] = function (p4u$ef) {}, avk_6['setType'] = function (ilxq7o) {}, avk_6['setFontFace'] = function (gd95zt) {}, avk_6['addEventListener'] = function (ensuv) {}, avk_6['contains'] = function (ak_v6) {
        return null;
      }, avk_6['removeChild'] = function (wgz7d9) {}, avk_6;
    }, rb81['createShaderCondition'] = function (mojhqi) {
      var tgdz9 = this,
          qlo7ix = function () {
        var pf3j4h = mojhqi;return tgdz9[mojhqi['replace']('this.', '')];
      };return qlo7ix;
    }, rb81['EnvConfig'] = null, rb81['window'] = null, rb81['_preCreateElement'] = null, rb81['_inited'] = ![], rb81['wxRequest'] = null, rb81['systemInfo'] = null, rb81['version'] = '0.0.1', rb81['isZiYu'] = ![], rb81['isPosMsgYu'] = ![], rb81['parseXMLFromString'] = function (hmij3) {
      var ql7w, vnka_;hmij3 = hmij3['replace'](/>\s+</g, '><');try {
        ql7w = new window['Parser']['DOMParser']()['parseFromString'](hmij3, 'text/xml');
      } catch (m3oijh) {
        throw '需要引入xml解析库文件';
      }return ql7w;
    }, rb81['idx'] = 0x1, rb81;
  }(),
      w9g7dz = function () {
    function f3p4() {}ca0kr6(f3p4, 'laya.wx.mini.MiniImage');var nfuse$ = f3p4['prototype'];return nfuse$['_loadImage'] = function (jpfh43) {
      var kv_ca6 = this,
          fspue$ = ![];jpfh43['indexOf']('layaNativeDir/') == -0x1 && (fspue$ = !![], jpfh43 = _nsk$['formatURL'](jpfh43));if (!rc180['getFileInfo'](jpfh43)) {
        if (jpfh43['indexOf']('http://') != -0x1 || jpfh43['indexOf']('https://') != -0x1) rc180['downImg'](jpfh43, new wgxl(f3p4, f3p4['onDownImgCallBack'], [jpfh43, kv_ca6]), jpfh43);else f3p4['onCreateImage'](jpfh43, kv_ca6, !![]);
      } else f3p4['onCreateImage'](jpfh43, kv_ca6, !fspue$);
    }, f3p4['onDownImgCallBack'] = function (qjhmo, vus$n, xq7g) {
      if (!xq7g) f3p4['onCreateImage'](qjhmo, vus$n);else vus$n['onError'](null);
    }, f3p4['onCreateImage'] = function (ijmoh, _ar6kc, ank_vs) {
      ank_vs === void 0x0 && (ank_vs = ![]);var c180;if (!ank_vs) {
        var dwg = rc180['getFileInfo'](ijmoh),
            p3j4fh = dwg['md5'];c180 = rc180['getFileNativePath'](p3j4fh);
      } else c180 = ijmoh;if (_ar6kc['imgCache'] == null) _ar6kc['imgCache'] = {};var hqjmio;function mojq() {
        hqjmio['onload'] = null, hqjmio['onerror'] = null, delete _ar6kc['imgCache'][ijmoh];
      };var fpjh4 = function () {
        mojq(), _ar6kc['onLoaded'](hqjmio);
      },
          eus$fn = function () {
        mojq(), _ar6kc['event']('error', 'Load image failed');
      };_ar6kc['_type'] == 'nativeimage' ? (hqjmio = new sv$uen['window']['Image'](), hqjmio['crossOrigin'] = '', hqjmio['onload'] = fpjh4, hqjmio['onerror'] = eus$fn, hqjmio['src'] = c180, _ar6kc['imgCache'][ijmoh] = hqjmio) : new sev$['create'](c180, { 'onload': fpjh4, 'onerror': eus$fn, 'onCreate': function (_aknv) {
          hqjmio = _aknv, _ar6kc['imgCache'][ijmoh] = _aknv;
        } });
    }, f3p4;
  }(),
      iomlxq = function () {
    function ohjm() {}return ca0kr6(ohjm, 'laya.wx.mini.MiniInput'), ohjm['_createInputElement'] = function () {
      ck_v['_initInput'](ck_v['area'] = sv$uen['createElement']('textarea')), ck_v['_initInput'](ck_v['input'] = sv$uen['createElement']('input')), ck_v['inputContainer'] = sv$uen['createElement']('div'), ck_v['inputContainer']['style']['position'] = 'absolute', ck_v['inputContainer']['style']['zIndex'] = 0x186a0, sv$uen['container']['appendChild'](ck_v['inputContainer']), ck_v['inputContainer']['setPos'] = function (pm3jh, euf$sn) {
        ck_v['inputContainer']['style']['left'] = pm3jh + 'px', ck_v['inputContainer']['style']['top'] = euf$sn + 'px';
      }, l7owq['stage']['on']('resize', null, ohjm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ufpj43) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vk_nsa['_soundClass'] = c10rb8, vk_nsa['_musicClass'] = c10rb8;
    }, ohjm['_onStageResize'] = function () {
      var qol7ix = l7owq['stage']['_canvasTransform']['identity']();qol7ix['scale'](sv$uen['width'] / dg5t['canvas']['width'] / n_ka6['getPixelRatio'](), sv$uen['height'] / dg5t['canvas']['height'] / n_ka6['getPixelRatio']());
    }, ohjm['wxinputFocus'] = function (ijmho3) {
      var _knvs = ck_v['inputElement']['target'];if (_knvs && !_knvs['editable']) return;ca860['window']['wx']['offKeyboardConfirm'](), ca860['window']['wx']['offKeyboardInput'](), ca860['window']['wx']['showKeyboard']({ 'defaultValue': _knvs['text'], 'maxLength': _knvs['maxChars'], 'multiple': _knvs['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (svkna) {}, 'fail': function (xl79) {} }), ca860['window']['wx']['onKeyboardConfirm'](function (a6rck) {
        var kna6_ = a6rck ? a6rck['value'] : '';_knvs['text'] = kna6_, _knvs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ca860['window']['wx']['onKeyboardInput'](function (n$esvu) {
        var $svnk_ = n$esvu ? n$esvu['value'] : '';if (!_knvs['multiline']) {
          if ($svnk_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_knvs['text'] = $svnk_, _knvs['event']('input');
      });
    }, ohjm['inputEnter'] = function () {
      ck_v['inputElement']['target']['focus'] = ![];
    }, ohjm['wxinputblur'] = function () {
      ohjm['hideKeyboard']();
    }, ohjm['hideKeyboard'] = function () {
      ca860['window']['wx']['offKeyboardConfirm'](), ca860['window']['wx']['offKeyboardInput'](), ca860['window']['wx']['hideKeyboard']({ 'success': function (p34fh) {
          console['log']('隐藏键盘');
        }, 'fail': function (qwlg7) {
          console['log']('隐藏键盘出错:' + (qwlg7 ? qwlg7['errMsg'] : ''));
        } });
    }, ohjm;
  }(),
      ns$fe = function () {
    function e$vn() {}ca0kr6(e$vn, 'laya.wx.mini.MiniLoader');var i3mhj = e$vn['prototype'];return i3mhj['load'] = function (xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v) {
      sun$ev === void 0x0 && (sun$ev = !![]), nesu$v === void 0x0 && (nesu$v = ![]);var c8rb0 = this;c8rb0['_url'] = xlqmoi;if (xlqmoi['indexOf']('data:image') === 0x0) c8rb0['_type'] = im3j4h = 'image';else c8rb0['_type'] = im3j4h || (im3j4h = c8rb0['getTypeFromUrl'](xlqmoi));c8rb0['_cache'] = sun$ev, c8rb0['_data'] = null;var loxw7 = 'ascii';if (xlqmoi['indexOf']('.fnt') != -0x1) loxw7 = 'utf8';else im3j4h == 'arraybuffer' && (loxw7 = '');;var lwqox = akc6v['getFileExtension'](xlqmoi);if (e$vn['_fileTypeArr']['indexOf'](lwqox) != -0x1) ca860['EnvConfig']['load']['call'](this, xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v);else {
        if (!rc180['getFileInfo'](xlqmoi)) {
          if (xlqmoi['indexOf']('layaNativeDir/') != -0x1) {
            if (ca860['isZiYu']) {
              var xlg7 = rc180['ziyuFileData'][xlqmoi];c8rb0['onLoaded'](xlg7);return;
            } else {
              cosnole['log']('read read'), rc180['read'](xlqmoi, loxw7, new wgxl(e$vn, e$vn['onReadNativeCallBack'], [loxw7, xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v, c8rb0]));return;
            }
          }if (_nsk$['rootPath'] == '') var c081r = xlqmoi;else c081r = xlqmoi['split'](_nsk$['rootPath'])[0x0];xlqmoi['indexOf']('http://') != -0x1 || xlqmoi['indexOf']('https://') != -0x1 ? ca860['EnvConfig']['load']['call'](c8rb0, xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v) : rc180['readFile'](c081r, loxw7, new wgxl(e$vn, e$vn['onReadNativeCallBack'], [loxw7, xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v, c8rb0]), xlqmoi);
        } else ca860['EnvConfig']['load']['call'](this, xlqmoi, im3j4h, sun$ev, ar8c0, nesu$v);
      }
    }, i3mhj['resMgrLoad'] = function (w9zxg, rc810b, xoqmi, _sk$, _vesn$, vkns_$, _n$evs) {
      xoqmi === void 0x0 && (xoqmi = 0x0), _sk$ === void 0x0 && (_sk$ = ![]), _vesn$ === void 0x0 && (_vesn$ = ![]), vkns_$ === void 0x0 && (vkns_$ = 0x0), _n$evs === void 0x0 && (_n$evs = 0x3), w9zxg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w9zxg), ca860['EnvConfig']['resMgrLoad'](w9zxg, (qolihm, en$_vs, iq7oxl) => {
        e$vn['prototype']['resMgrLoadCallBack'](qolihm, en$_vs, iq7oxl, rc810b);
      }, xoqmi, _sk$, _vesn$, vkns_$, _n$evs);
    }, i3mhj['resMgrLoadCallBack'] = function (b8c01, hqmoij, unsf$e, c610) {
      console['log']('buff:::', b8c01, unsf$e, rc180['fileNativeDir'] + '///' + rc180['fileListName']), c610(b8c01, hqmoij, unsf$e);
    }, i3mhj['clearRes'] = function (pu3ef4, _e$snv) {
      _e$snv === void 0x0 && (_e$snv = ![]);var $svn = this;$svn['clearRes'](pu3ef4, _e$snv);var vsen$u = rc180['getFileInfo'](pu3ef4);if (vsen$u && (pu3ef4['indexOf']('http://') != -0x1 || pu3ef4['indexOf']('https://') != -0x1)) {
        var nvsk$ = vsen$u['md5'],
            r8cb10 = rc180['getFileNativePath'](nvsk$);rc180['remove'](r8cb10);
      }
    }, e$vn['onReadNativeCallBack'] = function (w5d9z, c_avk6, zx, ol7q, d95gt, ckr_a6, mloxqi, unefs$, r860c1) {
      ol7q === void 0x0 && (ol7q = !![]), ckr_a6 === void 0x0 && (ckr_a6 = ![]), unefs$ === void 0x0 && (unefs$ = 0x0);if (!unefs$) {
        var jh4m;if (zx == 'json' || zx == 'atlas') jh4m = ca860['getJson'](r860c1['data']);else zx == 'xml' ? jh4m = akc6v['parseXMLFromString'](r860c1['data']) : jh4m = r860c1['data'];mloxqi['onLoaded'](jh4m), !ca860['isZiYu'] && ca860['isPosMsgYu'] && zx != 'arraybuffer' && wx['postMessage']({ 'url': c_avk6, 'data': jh4m, 'isLoad': !![] });
      } else unefs$ == 0x1 && ca860['EnvConfig']['load']['call'](mloxqi, c_avk6, zx, ol7q, d95gt, ckr_a6);
    }, pf$se(e$vn, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), e$vn;
  }(),
      rc180 = function (fupse) {
    function yb10r() {
      yb10r['__super']['call'](this);;
    }return ca0kr6(yb10r, 'laya.wx.mini.MiniFileMgr', fupse), yb10r['isLoadFile'] = function (snk_$v) {
      return yb10r['_fileTypeArr']['indexOf'](snk_$v) != -0x1 ? !![] : ![];
    }, yb10r['getFileInfo'] = function (n$vs_k) {
      var zd9t = n$vs_k['split']('?')[0x0],
          ef4up = yb10r['filesListObj'][zd9t];if (ef4up == null) return null;else return ef4up;return null;
    }, yb10r['onFileUpdate'] = function (h4p3mj, xilomq) {
      var oiq7 = h4p3mj['split']('/'),
          dg59t = oiq7[oiq7['length'] - 0x1],
          gxz9w = yb10r['getFileInfo'](xilomq);if (gxz9w == null) yb10r['onSaveFile'](xilomq, dg59t);else {
        if (gxz9w['readyUrl'] != xilomq) yb10r['remove'](dg59t, xilomq);
      }
    }, yb10r['exits'] = function (r1cb, jiqh) {
      var k_acr = yb10r['getFileNativePath'](r1cb);yb10r['fs']['getFileInfo']({ 'filePath': k_acr, 'success': function (_v6ck) {
          jiqh != null && jiqh['runWith']([0x0, _v6ck]);
        }, 'fail': function (e$nusf) {
          jiqh != null && jiqh['runWith']([0x1, e$nusf]);
        } });
    }, yb10r['read'] = function (ck6_ar, kv6a_c, t5g, jp3m4) {
      kv6a_c === void 0x0 && (kv6a_c = 'ascill'), jp3m4 === void 0x0 && (jp3m4 = '');var r10y8b;jp3m4 != '' ? r10y8b = yb10r['getFileNativePath'](ck6_ar) : r10y8b = ck6_ar, yb10r['fs']['readFile']({ 'filePath': r10y8b, 'encoding': kv6a_c, 'success': function (o7iql) {
          t5g != null && t5g['runWith']([0x0, o7iql]);
        }, 'fail': function (pufe3) {
          if (pufe3 && jp3m4 != '') yb10r['down'](jp3m4, kv6a_c, t5g, jp3m4);else t5g != null && t5g['runWith']([0x1]);
        } });
    }, yb10r['readNativeFile'] = function (g7qwlx, gzx79) {
      yb10r['fs']['readFile']({ 'filePath': g7qwlx, 'encoding': '', 'success': function (zdg9t) {
          gzx79 != null && gzx79['runWith']([0x0]);
        }, 'fail': function (ankvs) {
          gzx79 != null && gzx79['runWith']([0x1]);
        } });
    }, yb10r['down'] = function (n$se_, w7xlqo, lmioxq, xowq7) {
      w7xlqo === void 0x0 && (w7xlqo = 'ascill'), xowq7 === void 0x0 && (xowq7 = '');var ilmxq = yb10r['getFileNativePath'](xowq7),
          $efnus = yb10r['wxdown']({ 'url': n$se_, 'filePath': ilmxq, 'success': function (x7g9wz) {
          if (x7g9wz['statusCode'] === 0xc8) yb10r['readFile'](x7g9wz['filePath'], w7xlqo, lmioxq, xowq7);
        }, 'fail': function (ixol) {
          lmioxq != null && lmioxq['runWith']([0x1, ixol]);
        } });$efnus['onProgressUpdate'](function (nufe$s) {
        lmioxq != null && lmioxq['runWith']([0x2, nufe$s['progress']]);
      });
    }, yb10r['readFile'] = function (van_sk, ybr801, $v_kns, _6rkac) {
      ybr801 === void 0x0 && (ybr801 = 'ascill'), _6rkac === void 0x0 && (_6rkac = ''), yb10r['fs']['readFile']({ 'filePath': van_sk, 'encoding': ybr801, 'success': function (snak) {
          if (van_sk['indexOf']('http://') != -0x1 || van_sk['indexOf']('https://') != -0x1) yb10r['onFileUpdate'](van_sk, _6rkac);$v_kns != null && $v_kns['runWith']([0x0, snak]);
        }, 'fail': function (hjmio3) {
          if (hjmio3) $v_kns != null && $v_kns['runWith']([0x1, hjmio3]);
        } });
    }, yb10r['downImg'] = function (lw7gx9, hmoi3, _ns$vk) {
      _ns$vk === void 0x0 && (_ns$vk = '');var kvc6a = yb10r['wxdown']({ 'url': lw7gx9, 'success': function (hqji) {
          hqji['statusCode'] === 0xc8 && yb10r['copyFile'](hqji['tempFilePath'], _ns$vk, hmoi3);
        }, 'fail': function (hpj4f) {
          hmoi3 != null && hmoi3['runWith']([0x1, hpj4f]);
        } });
    }, yb10r['copyFile'] = function (rkc0, iqo7xl, fp3j4u) {
      var zdwg9 = rkc0['split']('/'),
          h4p3f = zdwg9[zdwg9['length'] - 0x1],
          miho3j = iqo7xl['split']('?')[0x0],
          mqoji = yb10r['getFileInfo'](iqo7xl),
          hijm3o = yb10r['getFileNativePath'](h4p3f);yb10r['fs']['copyFile']({ 'srcPath': rkc0, 'destPath': hijm3o, 'success': function (mqlhi) {
          if (!mqoji) yb10r['onSaveFile'](iqo7xl, h4p3f), fp3j4u != null && fp3j4u['runWith']([0x0]);else {
            if (mqoji['readyUrl'] != iqo7xl) yb10r['remove'](h4p3f, iqo7xl, fp3j4u);
          }
        }, 'fail': function (cr6180) {
          fp3j4u != null && fp3j4u['runWith']([0x1, cr6180]);
        } });
    }, yb10r['getFileNativePath'] = function (v_es) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v_es;
    }, yb10r['remove'] = function (omji, r01y8, p3juf4) {
      r01y8 === void 0x0 && (r01y8 = '');var xqlw7o = yb10r['getFileInfo'](r01y8),
          c_vak = yb10r['getFileNativePath'](xqlw7o['md5']);l7owq['loader']['clearRes'](xqlw7o['readyUrl']), yb10r['fs']['unlink']({ 'filePath': c_vak, 'success': function (m4p3jh) {
          if (r01y8 != '') yb10r['onSaveFile'](r01y8, omji);p3juf4 != null && p3juf4['runWith']([0x0]);
        }, 'fail': function (c0r861) {} });
    }, yb10r['onSaveFile'] = function (glxw9, jhfp43) {
      var f3u4 = glxw9['split']('?')[0x0];yb10r['filesListObj'][f3u4] = { 'md5': jhfp43, 'readyUrl': glxw9 }, yb10r['fs']['writeFile']({ 'filePath': yb10r['fileNativeDir'] + '/' + yb10r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yb10r['filesListObj']), 'success': function (xwo7) {
          console['log']('写入测试测试成功：', xwo7);
        }, 'fail': function (mp4hj3) {
          console['log']('写入测试测试失败：', mp4hj3);
        } });
    }, yb10r['existDir'] = function (oql7, tz952d) {
      yb10r['fs']['mkdir']({ 'dirPath': oql7, 'success': function (h3ji) {
          tz952d != null && tz952d['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zd95t2) {
          if (zd95t2['errMsg']['indexOf']('file already exists') != -0x1) yb10r['readSync'](yb10r['fileListName'], 'utf8', tz952d);else tz952d != null && tz952d['runWith']([0x1, zd95t2]);
        } });
    }, yb10r['readSync'] = function (eup4$f, dz, f4uj, jqhomi) {
      dz === void 0x0 && (dz = 'ascill'), jqhomi === void 0x0 && (jqhomi = '');var rc06k = yb10r['getFileNativePath'](eup4$f),
          anvk6_;try {
        anvk6_ = yb10r['fs']['readFileSync'](rc06k), f4uj != null && f4uj['runWith']([0x0, { 'data': anvk6_ }]);
      } catch (pmjh3) {
        f4uj != null && f4uj['runWith']([0x1]);
      }
    }, yb10r['readCache'] = function () {}, yb10r['writeCache'] = function (s$epf) {
      var lw79 = readyUrl['split']('?')[0x0];yb10r['filesListObj'][lw79] = { 'md5': md5Name, 'readyUrl': readyUrl }, yb10r['fs']['writeFile']({ 'filePath': yb10r['fileNativeDir'] + '/' + yb10r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yb10r['filesListObj']), 'success': function (hijqm) {}, 'fail': function (mqohli) {} });
    }, yb10r['setNativeFileDir'] = function (arc6) {
      yb10r['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + arc6;
    }, yb10r['filesListObj'] = {}, yb10r['fileNativeDir'] = null, yb10r['fileListName'] = 'layaairfiles.txt', yb10r['ziyuFileData'] = {}, pf$se(yb10r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yb10r;
  }(lqmiho),
      c10rb8 = function (qoxli7) {
    function qhiojm() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qhiojm['__super']['call'](this), this['_sound'] = qhiojm['_createSound']();
    }ca0kr6(qhiojm, 'laya.wx.mini.MiniSound', qoxli7);var ckav_ = qhiojm['prototype'];return ckav_['load'] = function (holi) {
      var na_sv = this;holi = _nsk$['formatURL'](holi), this['url'] = holi;if (qhiojm['_audioCache'][holi]) {
        this['event']('complete');return;
      }function b08yr1() {
        if (qhiojm['_null'] != undefined) na_sv['_sound']['onCanplay'](qhiojm['_null']), na_sv['_sound']['onError'](qhiojm['_null']);else try {
          na_sv['_sound']['onCanplay'](null), na_sv['_sound']['onError'](null), qhiojm['_null'] = null;
        } catch ($esufn) {
          console['warn']('[wxmini] _clearSound:' + $esufn), na_sv['_sound']['onCanplay'](ac8r60), na_sv['_sound']['onError'](ac8r60), qhiojm['_null'] = ac8r60;
        }
      }function hj3p() {
        b08yr1(), seufp$['loaded'] = !![], seufp$['event']('complete'), qhiojm['_audioCache'][seufp$['url']] = seufp$;
      }function eu43fp(hmpj43) {
        console['error']('errCode=' + hmpj43['errCode'] + '  errMsg=' + hmpj43['errMsg']), b08yr1(), seufp$['event']('error');
      }function ac8r60() {}this['_sound']['onCanplay'](hj3p), this['_sound']['onError'](eu43fp), this['_sound']['src'] = holi;var seufp$ = this;
    }, ckav_['play'] = function (c1086r, vc6k_) {
      c1086r === void 0x0 && (c1086r = 0x0), vc6k_ === void 0x0 && (vc6k_ = 0x0);var hqilmo;if (this['url'] == vk_nsa['_tMusic']) {
        if (!qhiojm['_musicAudio']) qhiojm['_musicAudio'] = qhiojm['_createSound']();hqilmo = qhiojm['_musicAudio'];
      } else hqilmo = qhiojm['_createSound']();hqilmo['src'] = this['url'];var limho = new wlg7x9(hqilmo);return limho['url'] = this['url'], limho['loops'] = vc6k_, limho['startTime'] = c1086r, limho['play'](), vk_nsa['addChannel'](limho), limho;
    }, ckav_['dispose'] = function () {
      var h3jfp = qhiojm['_audioCache'][this['url']];h3jfp && (h3jfp['src'] = '', delete qhiojm['_audioCache'][this['url']]);
    }, esf$n(0x0, ckav_, 'duration', function () {
      return this['_sound']['duration'];
    }), qhiojm['_createSound'] = function () {
      return qhiojm['_id']++, ca860['window']['wx']['createInnerAudioContext']();
    }, qhiojm['_musicAudio'] = null, qhiojm['_id'] = 0x0, qhiojm['_audioCache'] = {}, qhiojm['_null'] = undefined, qhiojm;
  }(lqmiho),
      wlg7x9 = function (mixoql) {
    function car08(e$us) {
      this['_audio'] = null, this['_onEnd'] = null, car08['__super']['call'](this), this['_audio'] = e$us, this['_onEnd'] = akc6v['bind'](this['__onEnd'], this), e$us['onEnded'](this['_onEnd']);
    }ca0kr6(car08, 'laya.wx.mini.MiniSoundChannel', mixoql);var krc6_ = car08['prototype'];return krc6_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (l7owq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, krc6_['__onNull'] = function () {}, krc6_['play'] = function () {
      this['isStopped'] = ![], vk_nsa['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, krc6_['stop'] = function () {
      this['isStopped'] = !![], vk_nsa['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (car08['_null'] != undefined) this['_audio']['onEnded'](car08['_null']);else try {
        this['_audio']['onEnded'](null), car08['_null'] = null;
      } catch (a_r6c) {
        console['warn']('[wxmini] stop:' + a_r6c), this['_audio']['onEnded'](akc6v['bind'](this['__onNull'], this)), car08['_null'] = akc6v['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, krc6_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, krc6_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vk_nsa['addChannel'](this), this['_audio']['play']();
    }, esf$n(0x0, krc6_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), esf$n(0x0, krc6_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), esf$n(0x0, krc6_, 'volume', function () {
      return 0x1;
    }, function (es$unv) {}), car08['_null'] = undefined, car08;
  }(vak_sn);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hmij34 in Laya) {
    var qlg = Laya[hmij34];qlg && qlg['__isclass'] && (exports[hmij34] = qlg);
  }
});