var M = wx.$T;
(function (window, document, buajks) {
  var h5w681 = buajks['un'],
      _6mh5w = buajks['uns'],
      f7ozpe = buajks['static'],
      pfv9d$ = buajks['class'],
      ye_0qx = buajks['getset'],
      vcd$i9 = buajks['__newvec'],
      wyh_m = laya['utils']['Browser'],
      $9vtic = laya['events']['Event'],
      tc294 = laya['events']['EventDispatcher'],
      qeyox = laya['resource']['HTMLImage'],
      kjsarb = laya['utils']['Handler'],
      il4c2 = laya['display']['Input'],
      eoq0z = laya['net']['Loader'],
      _56wh = laya['maths']['Matrix'],
      f7pzeo = laya['renders']['Render'],
      brg3n = laya['utils']['RunDriver'],
      p7odz = laya['media']['Sound'],
      kgbja = laya['media']['SoundChannel'],
      h65m_ = laya['media']['SoundManager'],
      hmw5y_ = laya['display']['Stage'],
      exoy = laya['net']['URL'],
      fdoz7p = laya['utils']['Utils'],
      gj3brn = function () {
    function d$c9vi() {}return pfv9d$(d$c9vi, 'laya.wx.mini.MiniAdpter'), d$c9vi['getJson'] = function (z7qoef) {
      return JSON['parse'](z7qoef);
    }, d$c9vi['init'] = function (oq7zf, agbn) {
      oq7zf === void 0x0 && (oq7zf = ![]), agbn === void 0x0 && (agbn = ![]);if (d$c9vi['_inited']) return;d$c9vi['window'] = window;if (d$c9vi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;d$c9vi['_inited'] = !![], d$c9vi['isZiYu'] = agbn, d$c9vi['isPosMsgYu'] = oq7zf, d$c9vi['EnvConfig'] = {}, !d$c9vi['isZiYu'] && (mhy_0['setNativeFileDir']('/layaairGame'), mhy_0['existDir'](mhy_0['fileNativeDir'], kjsarb['create'](d$c9vi, d$c9vi['onMkdirCallBack']))), d$c9vi['window']['focus'] = function () {}, buajks['getUrlPath'] = function () {}, d$c9vi['window']['logtime'] = function (ticv29) {}, d$c9vi['window']['alertTimeLog'] = function (hm5w) {}, d$c9vi['window']['resetShareInfo'] = function () {}, d$c9vi['window']['CanvasRenderingContext2D'] = function () {}, d$c9vi['window']['CanvasRenderingContext2D']['prototype'] = d$c9vi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d$c9vi['window']['document']['body']['appendChild'] = function () {}, d$c9vi['EnvConfig']['pixelRatioInt'] = 0x0, brg3n['getPixelRatio'] = d$c9vi['pixelRatio'], d$c9vi['_preCreateElement'] = wyh_m['createElement'], wyh_m['createElement'] = d$c9vi['createElement'], brg3n['createShaderCondition'] = d$c9vi['createShaderCondition'], fdoz7p['parseXMLFromString'] = d$c9vi['parseXMLFromString'], il4c2['_createInputElement'] = anrjg['_createInputElement'], d$c9vi['EnvConfig']['load'] = eoq0z['prototype']['load'], eoq0z['prototype']['load'] = x_qmy['prototype']['load'], d$c9vi['isZiYu'] && oq7zf && wx['onMessage'](function (p$id9v) {
        p$id9v['isLoad'] && (mhy_0['ziyuFileData'][p$id9v['url']] = p$id9v['data']);
      });
    }, d$c9vi['onMkdirCallBack'] = function (dvi9c$, vci$t) {
      if (!dvi9c$) mhy_0['filesListObj'] = JSON['parse'](vci$t['data']);
    }, d$c9vi['pixelRatio'] = function () {
      if (!d$c9vi['EnvConfig']['pixelRatioInt']) try {
        var pf9v$ = wx['getSystemInfoSync']();return d$c9vi['EnvConfig']['pixelRatioInt'] = pf9v$['pixelRatio'], pf9v$ = pf9v$, pf9v$['pixelRatio'];
      } catch (ci42t) {}return d$c9vi['EnvConfig']['pixelRatioInt'];
    }, d$c9vi['createElement'] = function (fpzo) {
      if (fpzo == 'canvas') {
        var _mqy0;return d$c9vi['idx'] == 0x1 ? d$c9vi['isZiYu'] ? (_mqy0 = sharedCanvas, _mqy0['style'] = {}) : _mqy0 = window['canvas'] : _mqy0 = window['wx']['createCanvas'](), d$c9vi['idx']++, _mqy0;
      } else {
        if (fpzo == 'textarea' || fpzo == 'input') return d$c9vi['onCreateInput'](fpzo);else {
          if (fpzo == 'div') {
            var usbj = d$c9vi['_preCreateElement'](fpzo);return usbj['contains'] = function (tci42) {
              return null;
            }, usbj['removeChild'] = function (asbjkr) {}, usbj;
          } else return d$c9vi['_preCreateElement'](fpzo);
        }
      }
    }, d$c9vi['onCreateInput'] = function (epzo7f) {
      var it9$ = d$c9vi['_preCreateElement'](epzo7f);return it9$['focus'] = anrjg['wxinputFocus'], it9$['blur'] = anrjg['wxinputblur'], it9$['style'] = {}, it9$['value'] = 0x0, it9$['parentElement'] = {}, it9$['placeholder'] = {}, it9$['type'] = {}, it9$['setColor'] = function (epfo7) {}, it9$['setType'] = function (yxq0_m) {}, it9$['setFontFace'] = function (w6531) {}, it9$['addEventListener'] = function (n136g8) {}, it9$['contains'] = function (dfvpz$) {
        return null;
      }, it9$['removeChild'] = function (q0xe_y) {}, it9$;
    }, d$c9vi['createShaderCondition'] = function (tc2v) {
      var ezfqo7 = this,
          $ci = function () {
        var f$pd7z = tc2v;return ezfqo7[tc2v['replace']('this.', '')];
      };return $ci;
    }, d$c9vi['EnvConfig'] = null, d$c9vi['window'] = null, d$c9vi['_preCreateElement'] = null, d$c9vi['_inited'] = ![], d$c9vi['wxRequest'] = null, d$c9vi['systemInfo'] = null, d$c9vi['version'] = '0.0.1', d$c9vi['isZiYu'] = ![], d$c9vi['isPosMsgYu'] = ![], d$c9vi['parseXMLFromString'] = function (eo0xy) {
      var qe_yx, fpv$dz;eo0xy = eo0xy['replace'](/>\s+</g, '><');try {
        qe_yx = new window['Parser']['DOMParser']()['parseFromString'](eo0xy, 'text/xml');
      } catch (ksarj) {
        throw '需要引入xml解析库文件';
      }return qe_yx;
    }, d$c9vi['idx'] = 0x1, d$c9vi;
  }(),
      vipd$ = function () {
    function ym_w() {}pfv9d$(ym_w, 'laya.wx.mini.MiniImage');var iv2ct9 = ym_w['prototype'];return iv2ct9['_loadImage'] = function (pfdz7o) {
      var vdf = this,
          zofq7e = ![];pfdz7o['indexOf']('layaNativeDir/') == -0x1 && (zofq7e = !![], pfdz7o = exoy['formatURL'](pfdz7o));if (!mhy_0['getFileInfo'](pfdz7o)) {
        if (pfdz7o['indexOf']('http://') != -0x1 || pfdz7o['indexOf']('https://') != -0x1) mhy_0['downImg'](pfdz7o, new kjsarb(ym_w, ym_w['onDownImgCallBack'], [pfdz7o, vdf]), pfdz7o);else ym_w['onCreateImage'](pfdz7o, vdf, !![]);
      } else ym_w['onCreateImage'](pfdz7o, vdf, !zofq7e);
    }, ym_w['onDownImgCallBack'] = function (xy0oq, yh_w, xqe_0) {
      if (!xqe_0) ym_w['onCreateImage'](xy0oq, yh_w);else yh_w['onError'](null);
    }, ym_w['onCreateImage'] = function ($zpdf7, xoqe7, vi9$tc) {
      vi9$tc === void 0x0 && (vi9$tc = ![]);var m_h0yx;if (!vi9$tc) {
        var vp$di = mhy_0['getFileInfo']($zpdf7),
            ic4tl = vp$di['md5'];m_h0yx = mhy_0['getFileNativePath'](ic4tl);
      } else m_h0yx = $zpdf7;if (xoqe7['imgCache'] == null) xoqe7['imgCache'] = {};var whmy_5;function yex0q_() {
        whmy_5['onload'] = null, whmy_5['onerror'] = null, delete xoqe7['imgCache'][$zpdf7];
      };var qyxm = function () {
        yex0q_(), xoqe7['onLoaded'](whmy_5);
      },
          $z7f = function () {
        yex0q_(), xoqe7['event']('error', 'Load image failed');
      };xoqe7['_type'] == 'nativeimage' ? (whmy_5 = new wyh_m['window']['Image'](), whmy_5['crossOrigin'] = '', whmy_5['onload'] = qyxm, whmy_5['onerror'] = $z7f, whmy_5['src'] = m_h0yx, xoqe7['imgCache'][$zpdf7] = whmy_5) : new qeyox['create'](m_h0yx, { 'onload': qyxm, 'onerror': $z7f, 'onCreate': function (qzo7e) {
          whmy_5 = qzo7e, xoqe7['imgCache'][$zpdf7] = qzo7e;
        } });
    }, ym_w;
  }(),
      anrjg = function () {
    function fo7zd() {}return pfv9d$(fo7zd, 'laya.wx.mini.MiniInput'), fo7zd['_createInputElement'] = function () {
      il4c2['_initInput'](il4c2['area'] = wyh_m['createElement']('textarea')), il4c2['_initInput'](il4c2['input'] = wyh_m['createElement']('input')), il4c2['inputContainer'] = wyh_m['createElement']('div'), il4c2['inputContainer']['style']['position'] = 'absolute', il4c2['inputContainer']['style']['zIndex'] = 0x186a0, wyh_m['container']['appendChild'](il4c2['inputContainer']), il4c2['inputContainer']['setPos'] = function (f7ozp, t2vic9) {
        il4c2['inputContainer']['style']['left'] = f7ozp + 'px', il4c2['inputContainer']['style']['top'] = t2vic9 + 'px';
      }, buajks['stage']['on']('resize', null, fo7zd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (asbrj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), h65m_['_soundClass'] = jas, h65m_['_musicClass'] = jas;
    }, fo7zd['_onStageResize'] = function () {
      var jrg3bn = buajks['stage']['_canvasTransform']['identity']();jrg3bn['scale'](wyh_m['width'] / f7pzeo['canvas']['width'] / brg3n['getPixelRatio'](), wyh_m['height'] / f7pzeo['canvas']['height'] / brg3n['getPixelRatio']());
    }, fo7zd['wxinputFocus'] = function (yxqm_) {
      var $ic9tv = il4c2['inputElement']['target'];if ($ic9tv && !$ic9tv['editable']) return;gj3brn['window']['wx']['offKeyboardConfirm'](), gj3brn['window']['wx']['offKeyboardInput'](), gj3brn['window']['wx']['showKeyboard']({ 'defaultValue': $ic9tv['text'], 'maxLength': $ic9tv['maxChars'], 'multiple': $ic9tv['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (yh_mx) {}, 'fail': function (zd7po) {} }), gj3brn['window']['wx']['onKeyboardConfirm'](function (xwymh) {
        var $zdpvf = xwymh ? xwymh['value'] : '';$ic9tv['text'] = $zdpvf, $ic9tv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gj3brn['window']['wx']['onKeyboardInput'](function (bau) {
        var h516wm = bau ? bau['value'] : '';if (!$ic9tv['multiline']) {
          if (h516wm['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$ic9tv['text'] = h516wm, $ic9tv['event']('input');
      });
    }, fo7zd['inputEnter'] = function () {
      il4c2['inputElement']['target']['focus'] = ![];
    }, fo7zd['wxinputblur'] = function () {
      fo7zd['hideKeyboard']();
    }, fo7zd['hideKeyboard'] = function () {
      gj3brn['window']['wx']['offKeyboardConfirm'](), gj3brn['window']['wx']['offKeyboardInput'](), gj3brn['window']['wx']['hideKeyboard']({ 'success': function (qy0m_x) {
          console['log']('隐藏键盘');
        }, 'fail': function (kjrabg) {
          console['log']('隐藏键盘出错:' + (kjrabg ? kjrabg['errMsg'] : ''));
        } });
    }, fo7zd;
  }(),
      x_qmy = function () {
    function vpf$z() {}pfv9d$(vpf$z, 'laya.wx.mini.MiniLoader');var fo7zq = vpf$z['prototype'];return fo7zq['load'] = function (anjrg, m_hyxw, ti4l2c, $vip9, mwh_65) {
      ti4l2c === void 0x0 && (ti4l2c = !![]), mwh_65 === void 0x0 && (mwh_65 = ![]);var akjsu = this;akjsu['_url'] = anjrg;if (anjrg['indexOf']('data:image') === 0x0) akjsu['_type'] = m_hyxw = 'image';else akjsu['_type'] = m_hyxw || (m_hyxw = akjsu['getTypeFromUrl'](anjrg));akjsu['_cache'] = ti4l2c, akjsu['_data'] = null;var mw_yh5 = 'ascii';if (anjrg['indexOf']('.fnt') != -0x1) mw_yh5 = 'utf8';else m_hyxw == 'arraybuffer' && (mw_yh5 = '');;var f7p$dz = fdoz7p['getFileExtension'](anjrg);if (vpf$z['_fileTypeArr']['indexOf'](f7p$dz) != -0x1) gj3brn['EnvConfig']['load']['call'](this, anjrg, m_hyxw, ti4l2c, $vip9, mwh_65);else {
        if (!mhy_0['getFileInfo'](anjrg)) {
          if (anjrg['indexOf']('layaNativeDir/') != -0x1) {
            if (gj3brn['isZiYu']) {
              var qfe7o = mhy_0['ziyuFileData'][anjrg];akjsu['onLoaded'](qfe7o);return;
            } else {
              cosnole['log']('read read'), mhy_0['read'](anjrg, mw_yh5, new kjsarb(vpf$z, vpf$z['onReadNativeCallBack'], [mw_yh5, anjrg, m_hyxw, ti4l2c, $vip9, mwh_65, akjsu]));return;
            }
          }if (exoy['rootPath'] == '') var v$fd = anjrg;else v$fd = anjrg['split'](exoy['rootPath'])[0x0];anjrg['indexOf']('http://') != -0x1 || anjrg['indexOf']('https://') != -0x1 ? gj3brn['EnvConfig']['load']['call'](akjsu, anjrg, m_hyxw, ti4l2c, $vip9, mwh_65) : mhy_0['readFile'](v$fd, mw_yh5, new kjsarb(vpf$z, vpf$z['onReadNativeCallBack'], [mw_yh5, anjrg, m_hyxw, ti4l2c, $vip9, mwh_65, akjsu]), anjrg);
        } else gj3brn['EnvConfig']['load']['call'](this, anjrg, m_hyxw, ti4l2c, $vip9, mwh_65);
      }
    }, fo7zq['resMgrLoad'] = function (x_ywh, pdofz, mx_0y, ksuj, rjgba, f$9vpd, cl42) {
      mx_0y === void 0x0 && (mx_0y = 0x0), ksuj === void 0x0 && (ksuj = ![]), rjgba === void 0x0 && (rjgba = ![]), f$9vpd === void 0x0 && (f$9vpd = 0x0), cl42 === void 0x0 && (cl42 = 0x3), x_ywh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x_ywh), gj3brn['EnvConfig']['resMgrLoad'](x_ywh, ($dzf7, d9$pv, rngj3) => {
        vpf$z['prototype']['resMgrLoadCallBack']($dzf7, d9$pv, rngj3, pdofz);
      }, mx_0y, ksuj, rjgba, f$9vpd, cl42);
    }, fo7zq['resMgrLoadCallBack'] = function (_mx0y, eo07q, it249c, askbuj) {
      console['log']('buff:::', _mx0y, it249c, mhy_0['fileNativeDir'] + '///' + mhy_0['fileListName']), askbuj(_mx0y, eo07q, it249c);
    }, fo7zq['clearRes'] = function (p$9fv, n36g) {
      n36g === void 0x0 && (n36g = ![]);var ox0eq7 = this;ox0eq7['clearRes'](p$9fv, n36g);var fz$pv = mhy_0['getFileInfo'](p$9fv);if (fz$pv && (p$9fv['indexOf']('http://') != -0x1 || p$9fv['indexOf']('https://') != -0x1)) {
        var _5w = fz$pv['md5'],
            hwm5_y = mhy_0['getFileNativePath'](_5w);mhy_0['remove'](hwm5_y);
      }
    }, vpf$z['onReadNativeCallBack'] = function (i92cv, h5m6w, ubjksa, rkaj, m_yx0q, dpzo7, v9id, p7fzeo, bgj3n) {
      rkaj === void 0x0 && (rkaj = !![]), dpzo7 === void 0x0 && (dpzo7 = ![]), p7fzeo === void 0x0 && (p7fzeo = 0x0);if (!p7fzeo) {
        var x_mwhy;if (ubjksa == 'json' || ubjksa == 'atlas') x_mwhy = gj3brn['getJson'](bgj3n['data']);else ubjksa == 'xml' ? x_mwhy = fdoz7p['parseXMLFromString'](bgj3n['data']) : x_mwhy = bgj3n['data'];v9id['onLoaded'](x_mwhy), !gj3brn['isZiYu'] && gj3brn['isPosMsgYu'] && ubjksa != 'arraybuffer' && wx['postMessage']({ 'url': h5m6w, 'data': x_mwhy, 'isLoad': !![] });
      } else p7fzeo == 0x1 && gj3brn['EnvConfig']['load']['call'](v9id, h5m6w, ubjksa, rkaj, m_yx0q, dpzo7);
    }, f7ozpe(vpf$z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vpf$z;
  }(),
      mhy_0 = function (nrgbj3) {
    function auskb() {
      auskb['__super']['call'](this);;
    }return pfv9d$(auskb, 'laya.wx.mini.MiniFileMgr', nrgbj3), auskb['isLoadFile'] = function (qex) {
      return auskb['_fileTypeArr']['indexOf'](qex) != -0x1 ? !![] : ![];
    }, auskb['getFileInfo'] = function ($dvic) {
      var div$ = $dvic['split']('?')[0x0],
          rnjga = auskb['filesListObj'][div$];if (rnjga == null) return null;else return rnjga;return null;
    }, auskb['onFileUpdate'] = function (_yxwh, uksa) {
      var i2vt = _yxwh['split']('/'),
          ozepf7 = i2vt[i2vt['length'] - 0x1],
          d7p$zf = auskb['getFileInfo'](uksa);if (d7p$zf == null) auskb['onSaveFile'](uksa, ozepf7);else {
        if (d7p$zf['readyUrl'] != uksa) auskb['remove'](ozepf7, uksa);
      }
    }, auskb['exits'] = function (bgjnr3, pd9$fv) {
      var p$d9vi = auskb['getFileNativePath'](bgjnr3);auskb['fs']['getFileInfo']({ 'filePath': p$d9vi, 'success': function (myx_0) {
          pd9$fv != null && pd9$fv['runWith']([0x0, myx_0]);
        }, 'fail': function (hwy_5m) {
          pd9$fv != null && pd9$fv['runWith']([0x1, hwy_5m]);
        } });
    }, auskb['read'] = function (bjksua, $9cdvi, v9p$d, _xyhmw) {
      $9cdvi === void 0x0 && ($9cdvi = 'ascill'), _xyhmw === void 0x0 && (_xyhmw = '');var rbn3jg;_xyhmw != '' ? rbn3jg = auskb['getFileNativePath'](bjksua) : rbn3jg = bjksua, auskb['fs']['readFile']({ 'filePath': rbn3jg, 'encoding': $9cdvi, 'success': function (ofep) {
          v9p$d != null && v9p$d['runWith']([0x0, ofep]);
        }, 'fail': function (bkasu) {
          if (bkasu && _xyhmw != '') auskb['down'](_xyhmw, $9cdvi, v9p$d, _xyhmw);else v9p$d != null && v9p$d['runWith']([0x1]);
        } });
    }, auskb['readNativeFile'] = function (fdpv9$, i9v2t) {
      auskb['fs']['readFile']({ 'filePath': fdpv9$, 'encoding': '', 'success': function (m6hw5_) {
          i9v2t != null && i9v2t['runWith']([0x0]);
        }, 'fail': function (q7e0o) {
          i9v2t != null && i9v2t['runWith']([0x1]);
        } });
    }, auskb['down'] = function (_xmyhw, pzoe, h_w56m, jgbkar) {
      pzoe === void 0x0 && (pzoe = 'ascill'), jgbkar === void 0x0 && (jgbkar = '');var bng = auskb['getFileNativePath'](jgbkar),
          buaksj = auskb['wxdown']({ 'url': _xmyhw, 'filePath': bng, 'success': function (_hxm0y) {
          if (_hxm0y['statusCode'] === 0xc8) auskb['readFile'](_hxm0y['filePath'], pzoe, h_w56m, jgbkar);
        }, 'fail': function (c92i4t) {
          h_w56m != null && h_w56m['runWith']([0x1, c92i4t]);
        } });buaksj['onProgressUpdate'](function (bnagrj) {
        h_w56m != null && h_w56m['runWith']([0x2, bnagrj['progress']]);
      });
    }, auskb['readFile'] = function (b3rjng, nrbjag, $zdp7f, c$9vd) {
      nrbjag === void 0x0 && (nrbjag = 'ascill'), c$9vd === void 0x0 && (c$9vd = ''), auskb['fs']['readFile']({ 'filePath': b3rjng, 'encoding': nrbjag, 'success': function (n1g836) {
          if (b3rjng['indexOf']('http://') != -0x1 || b3rjng['indexOf']('https://') != -0x1) auskb['onFileUpdate'](b3rjng, c$9vd);$zdp7f != null && $zdp7f['runWith']([0x0, n1g836]);
        }, 'fail': function (i2t94) {
          if (i2t94) $zdp7f != null && $zdp7f['runWith']([0x1, i2t94]);
        } });
    }, auskb['downImg'] = function ($d9f, $d7, jkaubs) {
      jkaubs === void 0x0 && (jkaubs = '');var fvd9$p = auskb['wxdown']({ 'url': $d9f, 'success': function (q0xoe7) {
          q0xoe7['statusCode'] === 0xc8 && auskb['copyFile'](q0xoe7['tempFilePath'], jkaubs, $d7);
        }, 'fail': function (vf$pz) {
          $d7 != null && $d7['runWith']([0x1, vf$pz]);
        } });
    }, auskb['copyFile'] = function (vdci$, xyw_, gabjrk) {
      var w65h_m = vdci$['split']('/'),
          mw5hy_ = w65h_m[w65h_m['length'] - 0x1],
          v$it9c = xyw_['split']('?')[0x0],
          qx_m0 = auskb['getFileInfo'](xyw_),
          xy_0h = auskb['getFileNativePath'](mw5hy_);auskb['fs']['copyFile']({ 'srcPath': vdci$, 'destPath': xy_0h, 'success': function (ngrbja) {
          if (!qx_m0) auskb['onSaveFile'](xyw_, mw5hy_), gabjrk != null && gabjrk['runWith']([0x0]);else {
            if (qx_m0['readyUrl'] != xyw_) auskb['remove'](mw5hy_, xyw_, gabjrk);
          }
        }, 'fail': function (zo7fdp) {
          gabjrk != null && gabjrk['runWith']([0x1, zo7fdp]);
        } });
    }, auskb['getFileNativePath'] = function (v2i9t) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v2i9t;
    }, auskb['remove'] = function ($icvt, w56183, h5w_my) {
      w56183 === void 0x0 && (w56183 = '');var sarbk = auskb['getFileInfo'](w56183),
          $fv9p = auskb['getFileNativePath'](sarbk['md5']);buajks['loader']['clearRes'](sarbk['readyUrl']), auskb['fs']['unlink']({ 'filePath': $fv9p, 'success': function (bj) {
          if (w56183 != '') auskb['onSaveFile'](w56183, $icvt);h5w_my != null && h5w_my['runWith']([0x0]);
        }, 'fail': function (exy_q0) {} });
    }, auskb['onSaveFile'] = function (oez7f, vtic$9) {
      var g18rn3 = oez7f['split']('?')[0x0];auskb['filesListObj'][g18rn3] = { 'md5': vtic$9, 'readyUrl': oez7f }, auskb['fs']['writeFile']({ 'filePath': auskb['fileNativeDir'] + '/' + auskb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](auskb['filesListObj']), 'success': function (v2ic9) {
          console['log']('写入测试测试成功：', v2ic9);
        }, 'fail': function (yeoqx0) {
          console['log']('写入测试测试失败：', yeoqx0);
        } });
    }, auskb['existDir'] = function (gjkrb, pd9fv) {
      auskb['fs']['mkdir']({ 'dirPath': gjkrb, 'success': function (h5wm6) {
          pd9fv != null && pd9fv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (yhwmx) {
          if (yhwmx['errMsg']['indexOf']('file already exists') != -0x1) auskb['readSync'](auskb['fileListName'], 'utf8', pd9fv);else pd9fv != null && pd9fv['runWith']([0x1, yhwmx]);
        } });
    }, auskb['readSync'] = function (id$vc, bakjrs, dvpf, garkbj) {
      bakjrs === void 0x0 && (bakjrs = 'ascill'), garkbj === void 0x0 && (garkbj = '');var ujabk = auskb['getFileNativePath'](id$vc),
          x0m_h;try {
        x0m_h = auskb['fs']['readFileSync'](ujabk), dvpf != null && dvpf['runWith']([0x0, { 'data': x0m_h }]);
      } catch (p7dzf$) {
        dvpf != null && dvpf['runWith']([0x1]);
      }
    }, auskb['readCache'] = function () {}, auskb['writeCache'] = function (yo0exq) {
      var mh56_w = readyUrl['split']('?')[0x0];auskb['filesListObj'][mh56_w] = { 'md5': md5Name, 'readyUrl': readyUrl }, auskb['fs']['writeFile']({ 'filePath': auskb['fileNativeDir'] + '/' + auskb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](auskb['filesListObj']), 'success': function (arg) {}, 'fail': function (ksubj) {} });
    }, auskb['setNativeFileDir'] = function (eoy) {
      auskb['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + eoy;
    }, auskb['filesListObj'] = {}, auskb['fileNativeDir'] = null, auskb['fileListName'] = 'layaairfiles.txt', auskb['ziyuFileData'] = {}, f7ozpe(auskb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), auskb;
  }(tc294),
      jas = function (foqe) {
    function ubskj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ubskj['__super']['call'](this), this['_sound'] = ubskj['_createSound']();
    }pfv9d$(ubskj, 'laya.wx.mini.MiniSound', foqe);var efo7p = ubskj['prototype'];return efo7p['load'] = function (fvd9) {
      var ticv9 = this;fvd9 = exoy['formatURL'](fvd9), this['url'] = fvd9;if (ubskj['_audioCache'][fvd9]) {
        this['event']('complete');return;
      }function abrkjs() {
        if (ubskj['_null'] != undefined) ticv9['_sound']['onCanplay'](ubskj['_null']), ticv9['_sound']['onError'](ubskj['_null']);else try {
          ticv9['_sound']['onCanplay'](null), ticv9['_sound']['onError'](null), ubskj['_null'] = null;
        } catch (zdfvp$) {
          console['warn']('[wxmini] _clearSound:' + zdfvp$), ticv9['_sound']['onCanplay'](gn386), ticv9['_sound']['onError'](gn386), ubskj['_null'] = gn386;
        }
      }function h_wyxm() {
        abrkjs(), h5my['loaded'] = !![], h5my['event']('complete'), ubskj['_audioCache'][h5my['url']] = h5my;
      }function kusbaj(rnjabg) {
        console['error']('errCode=' + rnjabg['errCode'] + '  errMsg=' + rnjabg['errMsg']), abrkjs(), h5my['event']('error');
      }function gn386() {}this['_sound']['onCanplay'](h_wyxm), this['_sound']['onError'](kusbaj), this['_sound']['src'] = fvd9;var h5my = this;
    }, efo7p['play'] = function (t$9i, x0hym_) {
      t$9i === void 0x0 && (t$9i = 0x0), x0hym_ === void 0x0 && (x0hym_ = 0x0);var mh_w6;if (this['url'] == h65m_['_tMusic']) {
        if (!ubskj['_musicAudio']) ubskj['_musicAudio'] = ubskj['_createSound']();mh_w6 = ubskj['_musicAudio'];
      } else mh_w6 = ubskj['_createSound']();mh_w6['src'] = this['url'];var _5my = new hw1658(mh_w6);return _5my['url'] = this['url'], _5my['loops'] = x0hym_, _5my['startTime'] = t$9i, _5my['play'](), h65m_['addChannel'](_5my), _5my;
    }, efo7p['dispose'] = function () {
      var qxoy0e = ubskj['_audioCache'][this['url']];qxoy0e && (qxoy0e['src'] = '', delete ubskj['_audioCache'][this['url']]);
    }, ye_0qx(0x0, efo7p, 'duration', function () {
      return this['_sound']['duration'];
    }), ubskj['_createSound'] = function () {
      return ubskj['_id']++, gj3brn['window']['wx']['createInnerAudioContext']();
    }, ubskj['_musicAudio'] = null, ubskj['_id'] = 0x0, ubskj['_audioCache'] = {}, ubskj['_null'] = undefined, ubskj;
  }(tc294),
      hw1658 = function (v9$fpd) {
    function oe0z(qyxoe0) {
      this['_audio'] = null, this['_onEnd'] = null, oe0z['__super']['call'](this), this['_audio'] = qyxoe0, this['_onEnd'] = fdoz7p['bind'](this['__onEnd'], this), qyxoe0['onEnded'](this['_onEnd']);
    }pfv9d$(oe0z, 'laya.wx.mini.MiniSoundChannel', v9$fpd);var t9ic4 = oe0z['prototype'];return t9ic4['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (buajks['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, t9ic4['__onNull'] = function () {}, t9ic4['play'] = function () {
      this['isStopped'] = ![], h65m_['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, t9ic4['stop'] = function () {
      this['isStopped'] = !![], h65m_['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (oe0z['_null'] != undefined) this['_audio']['onEnded'](oe0z['_null']);else try {
        this['_audio']['onEnded'](null), oe0z['_null'] = null;
      } catch (argkjb) {
        console['warn']('[wxmini] stop:' + argkjb), this['_audio']['onEnded'](fdoz7p['bind'](this['__onNull'], this)), oe0z['_null'] = fdoz7p['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, t9ic4['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, t9ic4['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], h65m_['addChannel'](this), this['_audio']['play']();
    }, ye_0qx(0x0, t9ic4, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ye_0qx(0x0, t9ic4, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ye_0qx(0x0, t9ic4, 'volume', function () {
      return 0x1;
    }, function (v$9dpi) {}), oe0z['_null'] = undefined, oe0z;
  }(kgbja);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var r3j in Laya) {
    var v9ic$d = Laya[r3j];v9ic$d && v9ic$d['__isclass'] && (exports[r3j] = v9ic$d);
  }
});