var O = wx.$C;
(function (window, document, x17qw) {
  var o5pc = x17qw['un'],
      lpoct = x17qw['uns'],
      hxw07q = x17qw['static'],
      biae62 = x17qw['class'],
      jw0hd9 = x17qw['getset'],
      dz9rh = x17qw['__newvec'],
      fv_g = laya['utils']['Browser'],
      wqh0d = laya['events']['Event'],
      cu$pr8 = laya['events']['EventDispatcher'],
      n_s6ya = laya['resource']['HTMLImage'],
      wq71x0 = laya['utils']['Handler'],
      siy6a = laya['display']['Input'],
      x1q30 = laya['net']['Loader'],
      f3_ = laya['maths']['Matrix'],
      c5mlo = laya['renders']['Render'],
      k5om = laya['utils']['RunDriver'],
      yav_ns = laya['media']['Sound'],
      xdwjh = laya['media']['SoundChannel'],
      hrzd = laya['media']['SoundManager'],
      ygsn_v = laya['display']['Stage'],
      r8pz = laya['net']['URL'],
      f_snvg = laya['utils']['Utils'],
      zrj$ = function () {
    function o5lcpt() {}return biae62(o5lcpt, 'laya.wx.mini.MiniAdpter'), o5lcpt['getJson'] = function (jw9zd) {
      return JSON['parse'](jw9zd);
    }, o5lcpt['init'] = function (ucr, ay6s2n) {
      ucr === void 0x0 && (ucr = ![]), ay6s2n === void 0x0 && (ay6s2n = ![]);if (o5lcpt['_inited']) return;o5lcpt['window'] = window;if (o5lcpt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o5lcpt['_inited'] = !![], o5lcpt['isZiYu'] = ay6s2n, o5lcpt['isPosMsgYu'] = ucr, o5lcpt['EnvConfig'] = {}, !o5lcpt['isZiYu'] && (qxwh70['setNativeFileDir']('/layaairGame'), qxwh70['existDir'](qxwh70['fileNativeDir'], wq71x0['create'](o5lcpt, o5lcpt['onMkdirCallBack']))), o5lcpt['window']['focus'] = function () {}, x17qw['getUrlPath'] = function () {}, o5lcpt['window']['logtime'] = function (ns6_a) {}, o5lcpt['window']['alertTimeLog'] = function (sfv_n) {}, o5lcpt['window']['resetShareInfo'] = function () {}, o5lcpt['window']['CanvasRenderingContext2D'] = function () {}, o5lcpt['window']['CanvasRenderingContext2D']['prototype'] = o5lcpt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o5lcpt['window']['document']['body']['appendChild'] = function () {}, o5lcpt['EnvConfig']['pixelRatioInt'] = 0x0, k5om['getPixelRatio'] = o5lcpt['pixelRatio'], o5lcpt['_preCreateElement'] = fv_g['createElement'], fv_g['createElement'] = o5lcpt['createElement'], k5om['createShaderCondition'] = o5lcpt['createShaderCondition'], f_snvg['parseXMLFromString'] = o5lcpt['parseXMLFromString'], siy6a['_createInputElement'] = tpolc5['_createInputElement'], o5lcpt['EnvConfig']['load'] = x1q30['prototype']['load'], x1q30['prototype']['load'] = whxqd['prototype']['load'], o5lcpt['isZiYu'] && ucr && wx['onMessage'](function (asy6n) {
        asy6n['isLoad'] && (qxwh70['ziyuFileData'][asy6n['url']] = asy6n['data']);
      });
    }, o5lcpt['onMkdirCallBack'] = function (_n4vf, sfgv_) {
      if (!_n4vf) qxwh70['filesListObj'] = JSON['parse'](sfgv_['data']);
    }, o5lcpt['pixelRatio'] = function () {
      if (!o5lcpt['EnvConfig']['pixelRatioInt']) try {
        var yvs = wx['getSystemInfoSync']();return o5lcpt['EnvConfig']['pixelRatioInt'] = yvs['pixelRatio'], yvs = yvs, yvs['pixelRatio'];
      } catch (jzhdw9) {}return o5lcpt['EnvConfig']['pixelRatioInt'];
    }, o5lcpt['createElement'] = function (bei62) {
      if (bei62 == 'canvas') {
        var $przu;return o5lcpt['idx'] == 0x1 ? o5lcpt['isZiYu'] ? ($przu = sharedCanvas, $przu['style'] = {}) : $przu = window['canvas'] : $przu = window['wx']['createCanvas'](), o5lcpt['idx']++, $przu;
      } else {
        if (bei62 == 'textarea' || bei62 == 'input') return o5lcpt['onCreateInput'](bei62);else {
          if (bei62 == 'div') {
            var opcul5 = o5lcpt['_preCreateElement'](bei62);return opcul5['contains'] = function ($rpuz) {
              return null;
            }, opcul5['removeChild'] = function (c5topl) {}, opcul5;
          } else return o5lcpt['_preCreateElement'](bei62);
        }
      }
    }, o5lcpt['onCreateInput'] = function (zr98d) {
      var _gyvns = o5lcpt['_preCreateElement'](zr98d);return _gyvns['focus'] = tpolc5['wxinputFocus'], _gyvns['blur'] = tpolc5['wxinputblur'], _gyvns['style'] = {}, _gyvns['value'] = 0x0, _gyvns['parentElement'] = {}, _gyvns['placeholder'] = {}, _gyvns['type'] = {}, _gyvns['setColor'] = function (hjz9r) {}, _gyvns['setType'] = function (rupz$) {}, _gyvns['setFontFace'] = function (w70xq) {}, _gyvns['addEventListener'] = function (y6_nsa) {}, _gyvns['contains'] = function (dhj9rz) {
        return null;
      }, _gyvns['removeChild'] = function (vnfg4_) {}, _gyvns;
    }, o5lcpt['createShaderCondition'] = function (syvg_n) {
      var _gfn = this,
          xw017 = function () {
        var r8jd = syvg_n;return _gfn[syvg_n['replace']('this.', '')];
      };return xw017;
    }, o5lcpt['EnvConfig'] = null, o5lcpt['window'] = null, o5lcpt['_preCreateElement'] = null, o5lcpt['_inited'] = ![], o5lcpt['wxRequest'] = null, o5lcpt['systemInfo'] = null, o5lcpt['version'] = '0.0.1', o5lcpt['isZiYu'] = ![], o5lcpt['isPosMsgYu'] = ![], o5lcpt['parseXMLFromString'] = function (s_ny6) {
      var i6e2a, f413v;s_ny6 = s_ny6['replace'](/>\s+</g, '><');try {
        i6e2a = new window['Parser']['DOMParser']()['parseFromString'](s_ny6, 'text/xml');
      } catch (ib2ay6) {
        throw '需要引入xml解析库文件';
      }return i6e2a;
    }, o5lcpt['idx'] = 0x1, o5lcpt;
  }(),
      gnsyv = function () {
    function as_vyn() {}biae62(as_vyn, 'laya.wx.mini.MiniImage');var nsv_fg = as_vyn['prototype'];return nsv_fg['_loadImage'] = function (syna26) {
      var q0xw71 = this,
          _3g4 = ![];syna26['indexOf']('layaNativeDir/') == -0x1 && (_3g4 = !![], syna26 = r8pz['formatURL'](syna26));if (!qxwh70['getFileInfo'](syna26)) {
        if (syna26['indexOf']('http://') != -0x1 || syna26['indexOf']('https://') != -0x1) qxwh70['downImg'](syna26, new wq71x0(as_vyn, as_vyn['onDownImgCallBack'], [syna26, q0xw71]), syna26);else as_vyn['onCreateImage'](syna26, q0xw71, !![]);
      } else as_vyn['onCreateImage'](syna26, q0xw71, !_3g4);
    }, as_vyn['onDownImgCallBack'] = function (oulc5, zhd9, cup8l$) {
      if (!cup8l$) as_vyn['onCreateImage'](oulc5, zhd9);else zhd9['onError'](null);
    }, as_vyn['onCreateImage'] = function (ltco, s6yn_, vns_fg) {
      vns_fg === void 0x0 && (vns_fg = ![]);var u5cp$l;if (!vns_fg) {
        var jr89zd = qxwh70['getFileInfo'](ltco),
            jdwh90 = jr89zd['md5'];u5cp$l = qxwh70['getFileNativePath'](jdwh90);
      } else u5cp$l = ltco;if (s6yn_['imgCache'] == null) s6yn_['imgCache'] = {};var vs_nf;function j89rd() {
        vs_nf['onload'] = null, vs_nf['onerror'] = null, delete s6yn_['imgCache'][ltco];
      };var s_gyn = function () {
        j89rd(), s6yn_['onLoaded'](vs_nf);
      },
          avys_ = function () {
        j89rd(), s6yn_['event']('error', 'Load image failed');
      };s6yn_['_type'] == 'nativeimage' ? (vs_nf = new fv_g['window']['Image'](), vs_nf['crossOrigin'] = '', vs_nf['onload'] = s_gyn, vs_nf['onerror'] = avys_, vs_nf['src'] = u5cp$l, s6yn_['imgCache'][ltco] = vs_nf) : new n_s6ya['create'](u5cp$l, { 'onload': s_gyn, 'onerror': avys_, 'onCreate': function (_4vg3) {
          vs_nf = _4vg3, s6yn_['imgCache'][ltco] = _4vg3;
        } });
    }, as_vyn;
  }(),
      tpolc5 = function () {
    function xqdhw0() {}return biae62(xqdhw0, 'laya.wx.mini.MiniInput'), xqdhw0['_createInputElement'] = function () {
      siy6a['_initInput'](siy6a['area'] = fv_g['createElement']('textarea')), siy6a['_initInput'](siy6a['input'] = fv_g['createElement']('input')), siy6a['inputContainer'] = fv_g['createElement']('div'), siy6a['inputContainer']['style']['position'] = 'absolute', siy6a['inputContainer']['style']['zIndex'] = 0x186a0, fv_g['container']['appendChild'](siy6a['inputContainer']), siy6a['inputContainer']['setPos'] = function (svnf_g, _syvna) {
        siy6a['inputContainer']['style']['left'] = svnf_g + 'px', siy6a['inputContainer']['style']['top'] = _syvna + 'px';
      }, x17qw['stage']['on']('resize', null, xqdhw0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (olt5m) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), hrzd['_soundClass'] = pu8cr$, hrzd['_musicClass'] = pu8cr$;
    }, xqdhw0['_onStageResize'] = function () {
      var g1vf3 = x17qw['stage']['_canvasTransform']['identity']();g1vf3['scale'](fv_g['width'] / c5mlo['canvas']['width'] / k5om['getPixelRatio'](), fv_g['height'] / c5mlo['canvas']['height'] / k5om['getPixelRatio']());
    }, xqdhw0['wxinputFocus'] = function (w71qx) {
      var n_vgsy = siy6a['inputElement']['target'];if (n_vgsy && !n_vgsy['editable']) return;zrj$['window']['wx']['offKeyboardConfirm'](), zrj$['window']['wx']['offKeyboardInput'](), zrj$['window']['wx']['showKeyboard']({ 'defaultValue': n_vgsy['text'], 'maxLength': n_vgsy['maxChars'], 'multiple': n_vgsy['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qf1734) {}, 'fail': function (fsgvn) {} }), zrj$['window']['wx']['onKeyboardConfirm'](function (yv_sgn) {
        var tl5opc = yv_sgn ? yv_sgn['value'] : '';n_vgsy['text'] = tl5opc, n_vgsy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zrj$['window']['wx']['onKeyboardInput'](function (i2a6eb) {
        var i6a2be = i2a6eb ? i2a6eb['value'] : '';if (!n_vgsy['multiline']) {
          if (i6a2be['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n_vgsy['text'] = i6a2be, n_vgsy['event']('input');
      });
    }, xqdhw0['inputEnter'] = function () {
      siy6a['inputElement']['target']['focus'] = ![];
    }, xqdhw0['wxinputblur'] = function () {
      xqdhw0['hideKeyboard']();
    }, xqdhw0['hideKeyboard'] = function () {
      zrj$['window']['wx']['offKeyboardConfirm'](), zrj$['window']['wx']['offKeyboardInput'](), zrj$['window']['wx']['hideKeyboard']({ 'success': function (tp5co) {
          console['log']('隐藏键盘');
        }, 'fail': function (p$rzu8) {
          console['log']('隐藏键盘出错:' + (p$rzu8 ? p$rzu8['errMsg'] : ''));
        } });
    }, xqdhw0;
  }(),
      whxqd = function () {
    function rd8j9() {}biae62(rd8j9, 'laya.wx.mini.MiniLoader');var b6eai2 = rd8j9['prototype'];return b6eai2['load'] = function (p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx) {
      x7wq1 === void 0x0 && (x7wq1 = !![]), dw0jhx === void 0x0 && (dw0jhx = ![]);var ny_sa = this;ny_sa['_url'] = p8cul$;if (p8cul$['indexOf']('data:image') === 0x0) ny_sa['_type'] = vg31f = 'image';else ny_sa['_type'] = vg31f || (vg31f = ny_sa['getTypeFromUrl'](p8cul$));ny_sa['_cache'] = x7wq1, ny_sa['_data'] = null;var dhjrz = 'ascii';if (p8cul$['indexOf']('.fnt') != -0x1) dhjrz = 'utf8';else vg31f == 'arraybuffer' && (dhjrz = '');;var ba62e = f_snvg['getFileExtension'](p8cul$);if (rd8j9['_fileTypeArr']['indexOf'](ba62e) != -0x1) zrj$['EnvConfig']['load']['call'](this, p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx);else {
        if (!qxwh70['getFileInfo'](p8cul$)) {
          if (p8cul$['indexOf']('layaNativeDir/') != -0x1) {
            if (zrj$['isZiYu']) {
              var lc8p$ = qxwh70['ziyuFileData'][p8cul$];ny_sa['onLoaded'](lc8p$);return;
            } else {
              cosnole['log']('read read'), qxwh70['read'](p8cul$, dhjrz, new wq71x0(rd8j9, rd8j9['onReadNativeCallBack'], [dhjrz, p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx, ny_sa]));return;
            }
          }if (r8pz['rootPath'] == '') var lpo5uc = p8cul$;else lpo5uc = p8cul$['split'](r8pz['rootPath'])[0x0];p8cul$['indexOf']('http://') != -0x1 || p8cul$['indexOf']('https://') != -0x1 ? zrj$['EnvConfig']['load']['call'](ny_sa, p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx) : qxwh70['readFile'](lpo5uc, dhjrz, new wq71x0(rd8j9, rd8j9['onReadNativeCallBack'], [dhjrz, p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx, ny_sa]), p8cul$);
        } else zrj$['EnvConfig']['load']['call'](this, p8cul$, vg31f, x7wq1, jxh0dw, dw0jhx);
      }
    }, b6eai2['resMgrLoad'] = function (s6an2, snv_gf, lou5pc, asy_v, n_gys, qw0x71, aby26i) {
      lou5pc === void 0x0 && (lou5pc = 0x0), asy_v === void 0x0 && (asy_v = ![]), n_gys === void 0x0 && (n_gys = ![]), qw0x71 === void 0x0 && (qw0x71 = 0x0), aby26i === void 0x0 && (aby26i = 0x3), s6an2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s6an2), zrj$['EnvConfig']['resMgrLoad'](s6an2, (ans6, tlo5mk, f34vg) => {
        rd8j9['prototype']['resMgrLoadCallBack'](ans6, tlo5mk, f34vg, snv_gf);
      }, lou5pc, asy_v, n_gys, qw0x71, aby26i);
    }, b6eai2['resMgrLoadCallBack'] = function (dwhqx0, v3fg_, gn_4vf, jwz9) {
      console['log']('buff:::', dwhqx0, gn_4vf, qxwh70['fileNativeDir'] + '///' + qxwh70['fileListName']), jwz9(dwhqx0, v3fg_, gn_4vf);
    }, b6eai2['clearRes'] = function ($ul8pc, v4fng) {
      v4fng === void 0x0 && (v4fng = ![]);var plcu5$ = this;plcu5$['clearRes']($ul8pc, v4fng);var _vnay = qxwh70['getFileInfo']($ul8pc);if (_vnay && ($ul8pc['indexOf']('http://') != -0x1 || $ul8pc['indexOf']('https://') != -0x1)) {
        var ctmol = _vnay['md5'],
            r8dj9 = qxwh70['getFileNativePath'](ctmol);qxwh70['remove'](r8dj9);
      }
    }, rd8j9['onReadNativeCallBack'] = function (i2a6by, lpc8u, jhd0w, syai62, fn_sg, r89$zu, cu8$l, rhzj9, as2yn6) {
      syai62 === void 0x0 && (syai62 = !![]), r89$zu === void 0x0 && (r89$zu = ![]), rhzj9 === void 0x0 && (rhzj9 = 0x0);if (!rhzj9) {
        var o5ltmc;if (jhd0w == 'json' || jhd0w == 'atlas') o5ltmc = zrj$['getJson'](as2yn6['data']);else jhd0w == 'xml' ? o5ltmc = f_snvg['parseXMLFromString'](as2yn6['data']) : o5ltmc = as2yn6['data'];cu8$l['onLoaded'](o5ltmc), !zrj$['isZiYu'] && zrj$['isPosMsgYu'] && jhd0w != 'arraybuffer' && wx['postMessage']({ 'url': lpc8u, 'data': o5ltmc, 'isLoad': !![] });
      } else rhzj9 == 0x1 && zrj$['EnvConfig']['load']['call'](cu8$l, lpc8u, jhd0w, syai62, fn_sg, r89$zu);
    }, hxw07q(rd8j9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), rd8j9;
  }(),
      qxwh70 = function (g3v4_f) {
    function r8$zu() {
      r8$zu['__super']['call'](this);;
    }return biae62(r8$zu, 'laya.wx.mini.MiniFileMgr', g3v4_f), r8$zu['isLoadFile'] = function (_fvn) {
      return r8$zu['_fileTypeArr']['indexOf'](_fvn) != -0x1 ? !![] : ![];
    }, r8$zu['getFileInfo'] = function (_fgns) {
      var g34f = _fgns['split']('?')[0x0],
          j8zr9$ = r8$zu['filesListObj'][g34f];if (j8zr9$ == null) return null;else return j8zr9$;return null;
    }, r8$zu['onFileUpdate'] = function (p$lc8, v_f4g) {
      var o5u = p$lc8['split']('/'),
          g3v = o5u[o5u['length'] - 0x1],
          dzhw9 = r8$zu['getFileInfo'](v_f4g);if (dzhw9 == null) r8$zu['onSaveFile'](v_f4g, g3v);else {
        if (dzhw9['readyUrl'] != v_f4g) r8$zu['remove'](g3v, v_f4g);
      }
    }, r8$zu['exits'] = function (s_ay, j9hdw0) {
      var $u5cl = r8$zu['getFileNativePath'](s_ay);r8$zu['fs']['getFileInfo']({ 'filePath': $u5cl, 'success': function (f3gv14) {
          j9hdw0 != null && j9hdw0['runWith']([0x0, f3gv14]);
        }, 'fail': function (nasvy_) {
          j9hdw0 != null && j9hdw0['runWith']([0x1, nasvy_]);
        } });
    }, r8$zu['read'] = function (qd0xwh, yn6as, urz, b6yia) {
      yn6as === void 0x0 && (yn6as = 'ascill'), b6yia === void 0x0 && (b6yia = '');var cru$8p;b6yia != '' ? cru$8p = r8$zu['getFileNativePath'](qd0xwh) : cru$8p = qd0xwh, r8$zu['fs']['readFile']({ 'filePath': cru$8p, 'encoding': yn6as, 'success': function (cr$p8u) {
          urz != null && urz['runWith']([0x0, cr$p8u]);
        }, 'fail': function ($lcpu) {
          if ($lcpu && b6yia != '') r8$zu['down'](b6yia, yn6as, urz, b6yia);else urz != null && urz['runWith']([0x1]);
        } });
    }, r8$zu['readNativeFile'] = function (fgv341, d9hrj) {
      r8$zu['fs']['readFile']({ 'filePath': fgv341, 'encoding': '', 'success': function (lc5u$p) {
          d9hrj != null && d9hrj['runWith']([0x0]);
        }, 'fail': function (zd9r8) {
          d9hrj != null && d9hrj['runWith']([0x1]);
        } });
    }, r8$zu['down'] = function (uz$r, urpz$8, kmtl, f_svng) {
      urpz$8 === void 0x0 && (urpz$8 = 'ascill'), f_svng === void 0x0 && (f_svng = '');var rzdj9 = r8$zu['getFileNativePath'](f_svng),
          dh9jw = r8$zu['wxdown']({ 'url': uz$r, 'filePath': rzdj9, 'success': function (x0qw17) {
          if (x0qw17['statusCode'] === 0xc8) r8$zu['readFile'](x0qw17['filePath'], urpz$8, kmtl, f_svng);
        }, 'fail': function (k5lmto) {
          kmtl != null && kmtl['runWith']([0x1, k5lmto]);
        } });dh9jw['onProgressUpdate'](function (u9r8z) {
        kmtl != null && kmtl['runWith']([0x2, u9r8z['progress']]);
      });
    }, r8$zu['readFile'] = function (xqw01, ib6y2, _v4gnf, vg4f3_) {
      ib6y2 === void 0x0 && (ib6y2 = 'ascill'), vg4f3_ === void 0x0 && (vg4f3_ = ''), r8$zu['fs']['readFile']({ 'filePath': xqw01, 'encoding': ib6y2, 'success': function (x0q731) {
          if (xqw01['indexOf']('http://') != -0x1 || xqw01['indexOf']('https://') != -0x1) r8$zu['onFileUpdate'](xqw01, vg4f3_);_v4gnf != null && _v4gnf['runWith']([0x0, x0q731]);
        }, 'fail': function (oc5mlt) {
          if (oc5mlt) _v4gnf != null && _v4gnf['runWith']([0x1, oc5mlt]);
        } });
    }, r8$zu['downImg'] = function (f4g31v, w1, $lucp8) {
      $lucp8 === void 0x0 && ($lucp8 = '');var d09jh = r8$zu['wxdown']({ 'url': f4g31v, 'success': function (tm5klo) {
          tm5klo['statusCode'] === 0xc8 && r8$zu['copyFile'](tm5klo['tempFilePath'], $lucp8, w1);
        }, 'fail': function ($r9zu) {
          w1 != null && w1['runWith']([0x1, $r9zu]);
        } });
    }, r8$zu['copyFile'] = function (hxd0w, lpuc$, anys26) {
      var i2y6b = hxd0w['split']('/'),
          yvgsn_ = i2y6b[i2y6b['length'] - 0x1],
          jz9hd = lpuc$['split']('?')[0x0],
          nys_a = r8$zu['getFileInfo'](lpuc$),
          uzr8 = r8$zu['getFileNativePath'](yvgsn_);r8$zu['fs']['copyFile']({ 'srcPath': hxd0w, 'destPath': uzr8, 'success': function (f741g3) {
          if (!nys_a) r8$zu['onSaveFile'](lpuc$, yvgsn_), anys26 != null && anys26['runWith']([0x0]);else {
            if (nys_a['readyUrl'] != lpuc$) r8$zu['remove'](yvgsn_, lpuc$, anys26);
          }
        }, 'fail': function (vsayn_) {
          anys26 != null && anys26['runWith']([0x1, vsayn_]);
        } });
    }, r8$zu['getFileNativePath'] = function (q70x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + q70x;
    }, r8$zu['remove'] = function (fgv_s, cmt5, xw7qh) {
      cmt5 === void 0x0 && (cmt5 = '');var pu = r8$zu['getFileInfo'](cmt5),
          $8pzu = r8$zu['getFileNativePath'](pu['md5']);x17qw['loader']['clearRes'](pu['readyUrl']), r8$zu['fs']['unlink']({ 'filePath': $8pzu, 'success': function (pu$c5l) {
          if (cmt5 != '') r8$zu['onSaveFile'](cmt5, fgv_s);xw7qh != null && xw7qh['runWith']([0x0]);
        }, 'fail': function (rjzd9) {} });
    }, r8$zu['onSaveFile'] = function (yan_, yi62ab) {
      var pluco = yan_['split']('?')[0x0];r8$zu['filesListObj'][pluco] = { 'md5': yi62ab, 'readyUrl': yan_ }, r8$zu['fs']['writeFile']({ 'filePath': r8$zu['fileNativeDir'] + '/' + r8$zu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8$zu['filesListObj']), 'success': function (snvya_) {
          console['log']('写入测试测试成功：', snvya_);
        }, 'fail': function (zur$98) {
          console['log']('写入测试测试失败：', zur$98);
        } });
    }, r8$zu['existDir'] = function (x0hqw7, wqxhd0) {
      r8$zu['fs']['mkdir']({ 'dirPath': x0hqw7, 'success': function (lc5top) {
          wqxhd0 != null && wqxhd0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gf4v_3) {
          if (gf4v_3['errMsg']['indexOf']('file already exists') != -0x1) r8$zu['readSync'](r8$zu['fileListName'], 'utf8', wqxhd0);else wqxhd0 != null && wqxhd0['runWith']([0x1, gf4v_3]);
        } });
    }, r8$zu['readSync'] = function (v_sna, jwz9d, dhxw0j, h9zdr) {
      jwz9d === void 0x0 && (jwz9d = 'ascill'), h9zdr === void 0x0 && (h9zdr = '');var i6asy = r8$zu['getFileNativePath'](v_sna),
          zj9h;try {
        zj9h = r8$zu['fs']['readFileSync'](i6asy), dhxw0j != null && dhxw0j['runWith']([0x0, { 'data': zj9h }]);
      } catch ($9uz8) {
        dhxw0j != null && dhxw0j['runWith']([0x1]);
      }
    }, r8$zu['readCache'] = function () {}, r8$zu['writeCache'] = function (f43g_) {
      var anys6_ = readyUrl['split']('?')[0x0];r8$zu['filesListObj'][anys6_] = { 'md5': md5Name, 'readyUrl': readyUrl }, r8$zu['fs']['writeFile']({ 'filePath': r8$zu['fileNativeDir'] + '/' + r8$zu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8$zu['filesListObj']), 'success': function (w0x7q) {}, 'fail': function (lo5km) {} });
    }, r8$zu['setNativeFileDir'] = function (p8uc$r) {
      r8$zu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p8uc$r;
    }, r8$zu['filesListObj'] = {}, r8$zu['fileNativeDir'] = null, r8$zu['fileListName'] = 'layaairfiles.txt', r8$zu['ziyuFileData'] = {}, hxw07q(r8$zu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r8$zu;
  }(cu$pr8),
      pu8cr$ = function (i26y) {
    function $8zrj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $8zrj['__super']['call'](this), this['_sound'] = $8zrj['_createSound']();
    }biae62($8zrj, 'laya.wx.mini.MiniSound', i26y);var qh07w = $8zrj['prototype'];return qh07w['load'] = function (cuo5pl) {
      var pclt5o = this;cuo5pl = r8pz['formatURL'](cuo5pl), this['url'] = cuo5pl;if ($8zrj['_audioCache'][cuo5pl]) {
        this['event']('complete');return;
      }function uc8rp$() {
        if ($8zrj['_null'] != undefined) pclt5o['_sound']['onCanplay']($8zrj['_null']), pclt5o['_sound']['onError']($8zrj['_null']);else try {
          pclt5o['_sound']['onCanplay'](null), pclt5o['_sound']['onError'](null), $8zrj['_null'] = null;
        } catch (lomt) {
          console['warn']('[wxmini] _clearSound:' + lomt), pclt5o['_sound']['onCanplay'](dqh0x), pclt5o['_sound']['onError'](dqh0x), $8zrj['_null'] = dqh0x;
        }
      }function u$rz98() {
        uc8rp$(), i2e['loaded'] = !![], i2e['event']('complete'), $8zrj['_audioCache'][i2e['url']] = i2e;
      }function gf7143(z$pr8u) {
        console['error']('errCode=' + z$pr8u['errCode'] + '  errMsg=' + z$pr8u['errMsg']), uc8rp$(), i2e['event']('error');
      }function dqh0x() {}this['_sound']['onCanplay'](u$rz98), this['_sound']['onError'](gf7143), this['_sound']['src'] = cuo5pl;var i2e = this;
    }, qh07w['play'] = function (dw9jz, f4nv) {
      dw9jz === void 0x0 && (dw9jz = 0x0), f4nv === void 0x0 && (f4nv = 0x0);var upc5$;if (this['url'] == hrzd['_tMusic']) {
        if (!$8zrj['_musicAudio']) $8zrj['_musicAudio'] = $8zrj['_createSound']();upc5$ = $8zrj['_musicAudio'];
      } else upc5$ = $8zrj['_createSound']();upc5$['src'] = this['url'];var h0djw = new s_nvg(upc5$);return h0djw['url'] = this['url'], h0djw['loops'] = f4nv, h0djw['startTime'] = dw9jz, h0djw['play'](), hrzd['addChannel'](h0djw), h0djw;
    }, qh07w['dispose'] = function () {
      var $u9r = $8zrj['_audioCache'][this['url']];$u9r && ($u9r['src'] = '', delete $8zrj['_audioCache'][this['url']]);
    }, jw0hd9(0x0, qh07w, 'duration', function () {
      return this['_sound']['duration'];
    }), $8zrj['_createSound'] = function () {
      return $8zrj['_id']++, zrj$['window']['wx']['createInnerAudioContext']();
    }, $8zrj['_musicAudio'] = null, $8zrj['_id'] = 0x0, $8zrj['_audioCache'] = {}, $8zrj['_null'] = undefined, $8zrj;
  }(cu$pr8),
      s_nvg = function (jzd8r) {
    function r8cp$u(iy2s6) {
      this['_audio'] = null, this['_onEnd'] = null, r8cp$u['__super']['call'](this), this['_audio'] = iy2s6, this['_onEnd'] = f_snvg['bind'](this['__onEnd'], this), iy2s6['onEnded'](this['_onEnd']);
    }biae62(r8cp$u, 'laya.wx.mini.MiniSoundChannel', jzd8r);var _ys6a = r8cp$u['prototype'];return _ys6a['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x17qw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _ys6a['__onNull'] = function () {}, _ys6a['play'] = function () {
      this['isStopped'] = ![], hrzd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _ys6a['stop'] = function () {
      this['isStopped'] = !![], hrzd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (r8cp$u['_null'] != undefined) this['_audio']['onEnded'](r8cp$u['_null']);else try {
        this['_audio']['onEnded'](null), r8cp$u['_null'] = null;
      } catch (aiy6s) {
        console['warn']('[wxmini] stop:' + aiy6s), this['_audio']['onEnded'](f_snvg['bind'](this['__onNull'], this)), r8cp$u['_null'] = f_snvg['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _ys6a['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _ys6a['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], hrzd['addChannel'](this), this['_audio']['play']();
    }, jw0hd9(0x0, _ys6a, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jw0hd9(0x0, _ys6a, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jw0hd9(0x0, _ys6a, 'volume', function () {
      return 0x1;
    }, function ($z8u9) {}), r8cp$u['_null'] = undefined, r8cp$u;
  }(xdwjh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ur8pc$ in Laya) {
    var g341 = Laya[ur8pc$];g341 && g341['__isclass'] && (exports[ur8pc$] = g341);
  }
});