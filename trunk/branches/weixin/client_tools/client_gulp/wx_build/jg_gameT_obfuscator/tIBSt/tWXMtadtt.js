var M = wx.$T;
(function (window, document, pdfv9$) {
  var dpoz7f = pdfv9$['un'],
      cdiv9$ = pdfv9$['uns'],
      kbr = pdfv9$['static'],
      g81r3n = pdfv9$['class'],
      tiv9$c = pdfv9$['getset'],
      rgjan = pdfv9$['__newvec'],
      _yeq0x = laya['utils']['Browser'],
      r3ng8j = laya['events']['Event'],
      n83jg = laya['events']['EventDispatcher'],
      g8n163 = laya['resource']['HTMLImage'],
      zopf7 = laya['utils']['Handler'],
      pf9vd = laya['display']['Input'],
      pdf7oz = laya['net']['Loader'],
      yhm0_x = laya['maths']['Matrix'],
      jabgrn = laya['renders']['Render'],
      r3ng1 = laya['utils']['RunDriver'],
      p$iv9d = laya['media']['Sound'],
      zfod7p = laya['media']['SoundChannel'],
      w1hm = laya['media']['SoundManager'],
      grnbj3 = laya['display']['Stage'],
      xyh_m = laya['net']['URL'],
      nr3gj = laya['utils']['Utils'],
      dz$pv = function () {
    function dp$vi9() {}return g81r3n(dp$vi9, 'laya.wx.mini.MiniAdpter'), dp$vi9['getJson'] = function (foep) {
      return JSON['parse'](foep);
    }, dp$vi9['init'] = function (_wh56m, pdfo7z) {
      _wh56m === void 0x0 && (_wh56m = ![]), pdfo7z === void 0x0 && (pdfo7z = ![]);if (dp$vi9['_inited']) return;dp$vi9['window'] = window;if (dp$vi9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;dp$vi9['_inited'] = !![], dp$vi9['isZiYu'] = pdfo7z, dp$vi9['isPosMsgYu'] = _wh56m, dp$vi9['EnvConfig'] = {}, !dp$vi9['isZiYu'] && (xy_qe0['setNativeFileDir']('/layaairGame'), xy_qe0['existDir'](xy_qe0['fileNativeDir'], zopf7['create'](dp$vi9, dp$vi9['onMkdirCallBack']))), dp$vi9['window']['focus'] = function () {}, pdfv9$['getUrlPath'] = function () {}, dp$vi9['window']['logtime'] = function (ajrbk) {}, dp$vi9['window']['alertTimeLog'] = function (_xyhm) {}, dp$vi9['window']['resetShareInfo'] = function () {}, dp$vi9['window']['CanvasRenderingContext2D'] = function () {}, dp$vi9['window']['CanvasRenderingContext2D']['prototype'] = dp$vi9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dp$vi9['window']['document']['body']['appendChild'] = function () {}, dp$vi9['EnvConfig']['pixelRatioInt'] = 0x0, r3ng1['getPixelRatio'] = dp$vi9['pixelRatio'], dp$vi9['_preCreateElement'] = _yeq0x['createElement'], _yeq0x['createElement'] = dp$vi9['createElement'], r3ng1['createShaderCondition'] = dp$vi9['createShaderCondition'], nr3gj['parseXMLFromString'] = dp$vi9['parseXMLFromString'], pf9vd['_createInputElement'] = n386['_createInputElement'], dp$vi9['EnvConfig']['load'] = pdf7oz['prototype']['load'], pdf7oz['prototype']['load'] = vi$9dp['prototype']['load'], dp$vi9['isZiYu'] && _wh56m && wx['onMessage'](function (oxqy0e) {
        oxqy0e['isLoad'] && (xy_qe0['ziyuFileData'][oxqy0e['url']] = oxqy0e['data']);
      });
    }, dp$vi9['onMkdirCallBack'] = function (vt92c, _y0mxq) {
      if (!vt92c) xy_qe0['filesListObj'] = JSON['parse'](_y0mxq['data']);
    }, dp$vi9['pixelRatio'] = function () {
      if (!dp$vi9['EnvConfig']['pixelRatioInt']) try {
        var bajrkg = wx['getSystemInfoSync']();return dp$vi9['EnvConfig']['pixelRatioInt'] = bajrkg['pixelRatio'], bajrkg = bajrkg, bajrkg['pixelRatio'];
      } catch (h0_xy) {}return dp$vi9['EnvConfig']['pixelRatioInt'];
    }, dp$vi9['createElement'] = function (hywmx_) {
      if (hywmx_ == 'canvas') {
        var y0xqm;return dp$vi9['idx'] == 0x1 ? dp$vi9['isZiYu'] ? (y0xqm = sharedCanvas, y0xqm['style'] = {}) : y0xqm = window['canvas'] : y0xqm = window['wx']['createCanvas'](), dp$vi9['idx']++, y0xqm;
      } else {
        if (hywmx_ == 'textarea' || hywmx_ == 'input') return dp$vi9['onCreateInput'](hywmx_);else {
          if (hywmx_ == 'div') {
            var p9i = dp$vi9['_preCreateElement'](hywmx_);return p9i['contains'] = function (oq7ez0) {
              return null;
            }, p9i['removeChild'] = function (x0eq7) {}, p9i;
          } else return dp$vi9['_preCreateElement'](hywmx_);
        }
      }
    }, dp$vi9['onCreateInput'] = function (eo7q) {
      var pzfdo = dp$vi9['_preCreateElement'](eo7q);return pzfdo['focus'] = n386['wxinputFocus'], pzfdo['blur'] = n386['wxinputblur'], pzfdo['style'] = {}, pzfdo['value'] = 0x0, pzfdo['parentElement'] = {}, pzfdo['placeholder'] = {}, pzfdo['type'] = {}, pzfdo['setColor'] = function (i4lc2) {}, pzfdo['setType'] = function (i2ctl4) {}, pzfdo['setFontFace'] = function (ngr381) {}, pzfdo['addEventListener'] = function (pf7eoz) {}, pzfdo['contains'] = function (yxhmw_) {
        return null;
      }, pzfdo['removeChild'] = function (r8ng13) {}, pzfdo;
    }, dp$vi9['createShaderCondition'] = function (ze70o) {
      var gn316 = this,
          pdof7 = function () {
        var zq0e = ze70o;return gn316[ze70o['replace']('this.', '')];
      };return pdof7;
    }, dp$vi9['EnvConfig'] = null, dp$vi9['window'] = null, dp$vi9['_preCreateElement'] = null, dp$vi9['_inited'] = ![], dp$vi9['wxRequest'] = null, dp$vi9['systemInfo'] = null, dp$vi9['version'] = '0.0.1', dp$vi9['isZiYu'] = ![], dp$vi9['isPosMsgYu'] = ![], dp$vi9['parseXMLFromString'] = function (w61h) {
      var e0qxo7, pvd$zf;w61h = w61h['replace'](/>\s+</g, '><');try {
        e0qxo7 = new window['Parser']['DOMParser']()['parseFromString'](w61h, 'text/xml');
      } catch (v$df) {
        throw '需要引入xml解析库文件';
      }return e0qxo7;
    }, dp$vi9['idx'] = 0x1, dp$vi9;
  }(),
      i4t29 = function () {
    function yxo0() {}g81r3n(yxo0, 'laya.wx.mini.MiniImage');var gj3n8 = yxo0['prototype'];return gj3n8['_loadImage'] = function (xyo) {
      var bjsark = this,
          ajbksr = ![];xyo['indexOf']('layaNativeDir/') == -0x1 && (ajbksr = !![], xyo = xyh_m['formatURL'](xyo));if (!xy_qe0['getFileInfo'](xyo)) {
        if (xyo['indexOf']('http://') != -0x1 || xyo['indexOf']('https://') != -0x1) xy_qe0['downImg'](xyo, new zopf7(yxo0, yxo0['onDownImgCallBack'], [xyo, bjsark]), xyo);else yxo0['onCreateImage'](xyo, bjsark, !![]);
      } else yxo0['onCreateImage'](xyo, bjsark, !ajbksr);
    }, yxo0['onDownImgCallBack'] = function (x7qo, i9c$vt, pidv9) {
      if (!pidv9) yxo0['onCreateImage'](x7qo, i9c$vt);else i9c$vt['onError'](null);
    }, yxo0['onCreateImage'] = function (hm_w5, fo7qze, c$v9di) {
      c$v9di === void 0x0 && (c$v9di = ![]);var p9vd$i;if (!c$v9di) {
        var wmh5y = xy_qe0['getFileInfo'](hm_w5),
            j3gnb = wmh5y['md5'];p9vd$i = xy_qe0['getFileNativePath'](j3gnb);
      } else p9vd$i = hm_w5;if (fo7qze['imgCache'] == null) fo7qze['imgCache'] = {};var w136;function vci9t() {
        w136['onload'] = null, w136['onerror'] = null, delete fo7qze['imgCache'][hm_w5];
      };var d7ozfp = function () {
        vci9t(), fo7qze['onLoaded'](w136);
      },
          x_qey0 = function () {
        vci9t(), fo7qze['event']('error', 'Load image failed');
      };fo7qze['_type'] == 'nativeimage' ? (w136 = new _yeq0x['window']['Image'](), w136['crossOrigin'] = '', w136['onload'] = d7ozfp, w136['onerror'] = x_qey0, w136['src'] = p9vd$i, fo7qze['imgCache'][hm_w5] = w136) : new g8n163['create'](p9vd$i, { 'onload': d7ozfp, 'onerror': x_qey0, 'onCreate': function (t9icv2) {
          w136 = t9icv2, fo7qze['imgCache'][hm_w5] = t9icv2;
        } });
    }, yxo0;
  }(),
      n386 = function () {
    function m15h6() {}return g81r3n(m15h6, 'laya.wx.mini.MiniInput'), m15h6['_createInputElement'] = function () {
      pf9vd['_initInput'](pf9vd['area'] = _yeq0x['createElement']('textarea')), pf9vd['_initInput'](pf9vd['input'] = _yeq0x['createElement']('input')), pf9vd['inputContainer'] = _yeq0x['createElement']('div'), pf9vd['inputContainer']['style']['position'] = 'absolute', pf9vd['inputContainer']['style']['zIndex'] = 0x186a0, _yeq0x['container']['appendChild'](pf9vd['inputContainer']), pf9vd['inputContainer']['setPos'] = function (wm5h_y, ex7q0o) {
        pf9vd['inputContainer']['style']['left'] = wm5h_y + 'px', pf9vd['inputContainer']['style']['top'] = ex7q0o + 'px';
      }, pdfv9$['stage']['on']('resize', null, m15h6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h8156) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w1hm['_soundClass'] = xymq0, w1hm['_musicClass'] = xymq0;
    }, m15h6['_onStageResize'] = function () {
      var q0oxey = pdfv9$['stage']['_canvasTransform']['identity']();q0oxey['scale'](_yeq0x['width'] / jabgrn['canvas']['width'] / r3ng1['getPixelRatio'](), _yeq0x['height'] / jabgrn['canvas']['height'] / r3ng1['getPixelRatio']());
    }, m15h6['wxinputFocus'] = function (v9$ct) {
      var x07eqo = pf9vd['inputElement']['target'];if (x07eqo && !x07eqo['editable']) return;dz$pv['window']['wx']['offKeyboardConfirm'](), dz$pv['window']['wx']['offKeyboardInput'](), dz$pv['window']['wx']['showKeyboard']({ 'defaultValue': x07eqo['text'], 'maxLength': x07eqo['maxChars'], 'multiple': x07eqo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (arbk) {}, 'fail': function (bjsaku) {} }), dz$pv['window']['wx']['onKeyboardConfirm'](function (grkba) {
        var it29 = grkba ? grkba['value'] : '';x07eqo['text'] = it29, x07eqo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dz$pv['window']['wx']['onKeyboardInput'](function (sarbk) {
        var skbaju = sarbk ? sarbk['value'] : '';if (!x07eqo['multiline']) {
          if (skbaju['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x07eqo['text'] = skbaju, x07eqo['event']('input');
      });
    }, m15h6['inputEnter'] = function () {
      pf9vd['inputElement']['target']['focus'] = ![];
    }, m15h6['wxinputblur'] = function () {
      m15h6['hideKeyboard']();
    }, m15h6['hideKeyboard'] = function () {
      dz$pv['window']['wx']['offKeyboardConfirm'](), dz$pv['window']['wx']['offKeyboardInput'](), dz$pv['window']['wx']['hideKeyboard']({ 'success': function (n183gr) {
          console['log']('隐藏键盘');
        }, 'fail': function (rjnga) {
          console['log']('隐藏键盘出错:' + (rjnga ? rjnga['errMsg'] : ''));
        } });
    }, m15h6;
  }(),
      vi$9dp = function () {
    function hx_y() {}g81r3n(hx_y, 'laya.wx.mini.MiniLoader');var wyx_m = hx_y['prototype'];return wyx_m['load'] = function (oqeyx, fvdp$z, jkasub, c$id, yx0qm_) {
      jkasub === void 0x0 && (jkasub = !![]), yx0qm_ === void 0x0 && (yx0qm_ = ![]);var zdp$f = this;zdp$f['_url'] = oqeyx;if (oqeyx['indexOf']('data:image') === 0x0) zdp$f['_type'] = fvdp$z = 'image';else zdp$f['_type'] = fvdp$z || (fvdp$z = zdp$f['getTypeFromUrl'](oqeyx));zdp$f['_cache'] = jkasub, zdp$f['_data'] = null;var til24 = 'ascii';if (oqeyx['indexOf']('.fnt') != -0x1) til24 = 'utf8';else fvdp$z == 'arraybuffer' && (til24 = '');;var l2ti4 = nr3gj['getFileExtension'](oqeyx);if (hx_y['_fileTypeArr']['indexOf'](l2ti4) != -0x1) dz$pv['EnvConfig']['load']['call'](this, oqeyx, fvdp$z, jkasub, c$id, yx0qm_);else {
        if (!xy_qe0['getFileInfo'](oqeyx)) {
          if (oqeyx['indexOf']('layaNativeDir/') != -0x1) {
            if (dz$pv['isZiYu']) {
              var ltc42 = xy_qe0['ziyuFileData'][oqeyx];zdp$f['onLoaded'](ltc42);return;
            } else {
              cosnole['log']('read read'), xy_qe0['read'](oqeyx, til24, new zopf7(hx_y, hx_y['onReadNativeCallBack'], [til24, oqeyx, fvdp$z, jkasub, c$id, yx0qm_, zdp$f]));return;
            }
          }if (xyh_m['rootPath'] == '') var gak = oqeyx;else gak = oqeyx['split'](xyh_m['rootPath'])[0x0];oqeyx['indexOf']('http://') != -0x1 || oqeyx['indexOf']('https://') != -0x1 ? dz$pv['EnvConfig']['load']['call'](zdp$f, oqeyx, fvdp$z, jkasub, c$id, yx0qm_) : xy_qe0['readFile'](gak, til24, new zopf7(hx_y, hx_y['onReadNativeCallBack'], [til24, oqeyx, fvdp$z, jkasub, c$id, yx0qm_, zdp$f]), oqeyx);
        } else dz$pv['EnvConfig']['load']['call'](this, oqeyx, fvdp$z, jkasub, c$id, yx0qm_);
      }
    }, wyx_m['resMgrLoad'] = function (g8n361, oeq0z, bjsak, df$vp, m6w5_h, aubjsk, jkagrb) {
      bjsak === void 0x0 && (bjsak = 0x0), df$vp === void 0x0 && (df$vp = ![]), m6w5_h === void 0x0 && (m6w5_h = ![]), aubjsk === void 0x0 && (aubjsk = 0x0), jkagrb === void 0x0 && (jkagrb = 0x3), g8n361['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', g8n361), dz$pv['EnvConfig']['resMgrLoad'](g8n361, (ozd7, dp9f, oexqy) => {
        hx_y['prototype']['resMgrLoadCallBack'](ozd7, dp9f, oexqy, oeq0z);
      }, bjsak, df$vp, m6w5_h, aubjsk, jkagrb);
    }, wyx_m['resMgrLoadCallBack'] = function (fz7peo, zeofp, hmy5w, opz7e) {
      console['log']('buff:::', fz7peo, hmy5w, xy_qe0['fileNativeDir'] + '///' + xy_qe0['fileListName']), opz7e(fz7peo, zeofp, hmy5w);
    }, wyx_m['clearRes'] = function (ivcd, w861h) {
      w861h === void 0x0 && (w861h = ![]);var q0xeo = this;q0xeo['clearRes'](ivcd, w861h);var $9pvi = xy_qe0['getFileInfo'](ivcd);if ($9pvi && (ivcd['indexOf']('http://') != -0x1 || ivcd['indexOf']('https://') != -0x1)) {
        var qzo7 = $9pvi['md5'],
            hy5_w = xy_qe0['getFileNativePath'](qzo7);xy_qe0['remove'](hy5_w);
      }
    }, hx_y['onReadNativeCallBack'] = function (m_yw5, ez7pf, ozpf7d, il24c, jgn3r8, arbjsk, _qex, ksbr, sbaju) {
      il24c === void 0x0 && (il24c = !![]), arbjsk === void 0x0 && (arbjsk = ![]), ksbr === void 0x0 && (ksbr = 0x0);if (!ksbr) {
        var vdp9$;if (ozpf7d == 'json' || ozpf7d == 'atlas') vdp9$ = dz$pv['getJson'](sbaju['data']);else ozpf7d == 'xml' ? vdp9$ = nr3gj['parseXMLFromString'](sbaju['data']) : vdp9$ = sbaju['data'];_qex['onLoaded'](vdp9$), !dz$pv['isZiYu'] && dz$pv['isPosMsgYu'] && ozpf7d != 'arraybuffer' && wx['postMessage']({ 'url': ez7pf, 'data': vdp9$, 'isLoad': !![] });
      } else ksbr == 0x1 && dz$pv['EnvConfig']['load']['call'](_qex, ez7pf, ozpf7d, il24c, jgn3r8, arbjsk);
    }, kbr(hx_y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hx_y;
  }(),
      xy_qe0 = function (xqoy0e) {
    function rjbgka() {
      rjbgka['__super']['call'](this);;
    }return g81r3n(rjbgka, 'laya.wx.mini.MiniFileMgr', xqoy0e), rjbgka['isLoadFile'] = function (yxeo) {
      return rjbgka['_fileTypeArr']['indexOf'](yxeo) != -0x1 ? !![] : ![];
    }, rjbgka['getFileInfo'] = function (vi$dc) {
      var dp$9vf = vi$dc['split']('?')[0x0],
          oefpz7 = rjbgka['filesListObj'][dp$9vf];if (oefpz7 == null) return null;else return oefpz7;return null;
    }, rjbgka['onFileUpdate'] = function ($fvpzd, c9id) {
      var ajrbng = $fvpzd['split']('/'),
          wy5hm_ = ajrbng[ajrbng['length'] - 0x1],
          lct42i = rjbgka['getFileInfo'](c9id);if (lct42i == null) rjbgka['onSaveFile'](c9id, wy5hm_);else {
        if (lct42i['readyUrl'] != c9id) rjbgka['remove'](wy5hm_, c9id);
      }
    }, rjbgka['exits'] = function (vd9, v9$d) {
      var z$fvdp = rjbgka['getFileNativePath'](vd9);rjbgka['fs']['getFileInfo']({ 'filePath': z$fvdp, 'success': function (p7fd$) {
          v9$d != null && v9$d['runWith']([0x0, p7fd$]);
        }, 'fail': function (pfoez7) {
          v9$d != null && v9$d['runWith']([0x1, pfoez7]);
        } });
    }, rjbgka['read'] = function (oexq, y_h0xm, w516h, zp$dv) {
      y_h0xm === void 0x0 && (y_h0xm = 'ascill'), zp$dv === void 0x0 && (zp$dv = '');var bujsak;zp$dv != '' ? bujsak = rjbgka['getFileNativePath'](oexq) : bujsak = oexq, rjbgka['fs']['readFile']({ 'filePath': bujsak, 'encoding': y_h0xm, 'success': function (njagbr) {
          w516h != null && w516h['runWith']([0x0, njagbr]);
        }, 'fail': function (jkau) {
          if (jkau && zp$dv != '') rjbgka['down'](zp$dv, y_h0xm, w516h, zp$dv);else w516h != null && w516h['runWith']([0x1]);
        } });
    }, rjbgka['readNativeFile'] = function ($t9ivc, whxy_) {
      rjbgka['fs']['readFile']({ 'filePath': $t9ivc, 'encoding': '', 'success': function (vt$ci) {
          whxy_ != null && whxy_['runWith']([0x0]);
        }, 'fail': function (tlic42) {
          whxy_ != null && whxy_['runWith']([0x1]);
        } });
    }, rjbgka['down'] = function (dp9v$, grj8, $9dpiv, h5m61) {
      grj8 === void 0x0 && (grj8 = 'ascill'), h5m61 === void 0x0 && (h5m61 = '');var _m56h = rjbgka['getFileNativePath'](h5m61),
          ic$9vd = rjbgka['wxdown']({ 'url': dp9v$, 'filePath': _m56h, 'success': function (xyeq0o) {
          if (xyeq0o['statusCode'] === 0xc8) rjbgka['readFile'](xyeq0o['filePath'], grj8, $9dpiv, h5m61);
        }, 'fail': function (ofpez7) {
          $9dpiv != null && $9dpiv['runWith']([0x1, ofpez7]);
        } });ic$9vd['onProgressUpdate'](function (g3n18) {
        $9dpiv != null && $9dpiv['runWith']([0x2, g3n18['progress']]);
      });
    }, rjbgka['readFile'] = function (grn1, arjkb, icd$9v, jrgkba) {
      arjkb === void 0x0 && (arjkb = 'ascill'), jrgkba === void 0x0 && (jrgkba = ''), rjbgka['fs']['readFile']({ 'filePath': grn1, 'encoding': arjkb, 'success': function (q0_xy) {
          if (grn1['indexOf']('http://') != -0x1 || grn1['indexOf']('https://') != -0x1) rjbgka['onFileUpdate'](grn1, jrgkba);icd$9v != null && icd$9v['runWith']([0x0, q0_xy]);
        }, 'fail': function (fz$vpd) {
          if (fz$vpd) icd$9v != null && icd$9v['runWith']([0x1, fz$vpd]);
        } });
    }, rjbgka['downImg'] = function (ga, d$cvi9, e07xoq) {
      e07xoq === void 0x0 && (e07xoq = '');var hmwy_x = rjbgka['wxdown']({ 'url': ga, 'success': function (t49ci) {
          t49ci['statusCode'] === 0xc8 && rjbgka['copyFile'](t49ci['tempFilePath'], e07xoq, d$cvi9);
        }, 'fail': function (ngj) {
          d$cvi9 != null && d$cvi9['runWith']([0x1, ngj]);
        } });
    }, rjbgka['copyFile'] = function (jrkga, hwm_y5, jbnrga) {
      var _hmy0 = jrkga['split']('/'),
          gr38n1 = _hmy0[_hmy0['length'] - 0x1],
          whymx_ = hwm_y5['split']('?')[0x0],
          $ticv = rjbgka['getFileInfo'](hwm_y5),
          myx_h0 = rjbgka['getFileNativePath'](gr38n1);rjbgka['fs']['copyFile']({ 'srcPath': jrkga, 'destPath': myx_h0, 'success': function (jrsak) {
          if (!$ticv) rjbgka['onSaveFile'](hwm_y5, gr38n1), jbnrga != null && jbnrga['runWith']([0x0]);else {
            if ($ticv['readyUrl'] != hwm_y5) rjbgka['remove'](gr38n1, hwm_y5, jbnrga);
          }
        }, 'fail': function (vdpf) {
          jbnrga != null && jbnrga['runWith']([0x1, vdpf]);
        } });
    }, rjbgka['getFileNativePath'] = function (bsrjk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + bsrjk;
    }, rjbgka['remove'] = function (qyeo0, brng3, eqfoz) {
      brng3 === void 0x0 && (brng3 = '');var wh56_m = rjbgka['getFileInfo'](brng3),
          q0_xey = rjbgka['getFileNativePath'](wh56_m['md5']);pdfv9$['loader']['clearRes'](wh56_m['readyUrl']), rjbgka['fs']['unlink']({ 'filePath': q0_xey, 'success': function (m6w1h5) {
          if (brng3 != '') rjbgka['onSaveFile'](brng3, qyeo0);eqfoz != null && eqfoz['runWith']([0x0]);
        }, 'fail': function (bsukaj) {} });
    }, rjbgka['onSaveFile'] = function (xy0qoe, f7qoe) {
      var eq0y_ = xy0qoe['split']('?')[0x0];rjbgka['filesListObj'][eq0y_] = { 'md5': f7qoe, 'readyUrl': xy0qoe }, rjbgka['fs']['writeFile']({ 'filePath': rjbgka['fileNativeDir'] + '/' + rjbgka['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rjbgka['filesListObj']), 'success': function (_yxmw) {
          console['log']('写入测试测试成功：', _yxmw);
        }, 'fail': function (ict94) {
          console['log']('写入测试测试失败：', ict94);
        } });
    }, rjbgka['existDir'] = function (h6mw15, n8361) {
      rjbgka['fs']['mkdir']({ 'dirPath': h6mw15, 'success': function (c94t2) {
          n8361 != null && n8361['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (w63158) {
          if (w63158['errMsg']['indexOf']('file already exists') != -0x1) rjbgka['readSync'](rjbgka['fileListName'], 'utf8', n8361);else n8361 != null && n8361['runWith']([0x1, w63158]);
        } });
    }, rjbgka['readSync'] = function (jbksu, zpe7of, ubksj, sjbrka) {
      zpe7of === void 0x0 && (zpe7of = 'ascill'), sjbrka === void 0x0 && (sjbrka = '');var eqy0x = rjbgka['getFileNativePath'](jbksu),
          gabkrj;try {
        gabkrj = rjbgka['fs']['readFileSync'](eqy0x), ubksj != null && ubksj['runWith']([0x0, { 'data': gabkrj }]);
      } catch (w1h586) {
        ubksj != null && ubksj['runWith']([0x1]);
      }
    }, rjbgka['readCache'] = function () {}, rjbgka['writeCache'] = function (p7fz$d) {
      var tvci9 = readyUrl['split']('?')[0x0];rjbgka['filesListObj'][tvci9] = { 'md5': md5Name, 'readyUrl': readyUrl }, rjbgka['fs']['writeFile']({ 'filePath': rjbgka['fileNativeDir'] + '/' + rjbgka['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rjbgka['filesListObj']), 'success': function (cd9vi$) {}, 'fail': function (rabkgj) {} });
    }, rjbgka['setNativeFileDir'] = function (dz$vf) {
      rjbgka['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dz$vf;
    }, rjbgka['filesListObj'] = {}, rjbgka['fileNativeDir'] = null, rjbgka['fileListName'] = 'layaairfiles.txt', rjbgka['ziyuFileData'] = {}, kbr(rjbgka, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rjbgka;
  }(n83jg),
      xymq0 = function (o7pefz) {
    function _5mhw6() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _5mhw6['__super']['call'](this), this['_sound'] = _5mhw6['_createSound']();
    }g81r3n(_5mhw6, 'laya.wx.mini.MiniSound', o7pefz);var vct92i = _5mhw6['prototype'];return vct92i['load'] = function (yx0q_m) {
      var gkrab = this;yx0q_m = xyh_m['formatURL'](yx0q_m), this['url'] = yx0q_m;if (_5mhw6['_audioCache'][yx0q_m]) {
        this['event']('complete');return;
      }function my5hw_() {
        if (_5mhw6['_null'] != undefined) gkrab['_sound']['onCanplay'](_5mhw6['_null']), gkrab['_sound']['onError'](_5mhw6['_null']);else try {
          gkrab['_sound']['onCanplay'](null), gkrab['_sound']['onError'](null), _5mhw6['_null'] = null;
        } catch (c9it) {
          console['warn']('[wxmini] _clearSound:' + c9it), gkrab['_sound']['onCanplay'](q0e7o), gkrab['_sound']['onError'](q0e7o), _5mhw6['_null'] = q0e7o;
        }
      }function i9vpd() {
        my5hw_(), grabjn['loaded'] = !![], grabjn['event']('complete'), _5mhw6['_audioCache'][grabjn['url']] = grabjn;
      }function ctil2(usba) {
        console['error']('errCode=' + usba['errCode'] + '  errMsg=' + usba['errMsg']), my5hw_(), grabjn['event']('error');
      }function q0e7o() {}this['_sound']['onCanplay'](i9vpd), this['_sound']['onError'](ctil2), this['_sound']['src'] = yx0q_m;var grabjn = this;
    }, vct92i['play'] = function (jukbs, zeo7q) {
      jukbs === void 0x0 && (jukbs = 0x0), zeo7q === void 0x0 && (zeo7q = 0x0);var yqeo;if (this['url'] == w1hm['_tMusic']) {
        if (!_5mhw6['_musicAudio']) _5mhw6['_musicAudio'] = _5mhw6['_createSound']();yqeo = _5mhw6['_musicAudio'];
      } else yqeo = _5mhw6['_createSound']();yqeo['src'] = this['url'];var o7efzp = new bsaku(yqeo);return o7efzp['url'] = this['url'], o7efzp['loops'] = zeo7q, o7efzp['startTime'] = jukbs, o7efzp['play'](), w1hm['addChannel'](o7efzp), o7efzp;
    }, vct92i['dispose'] = function () {
      var f9p$vd = _5mhw6['_audioCache'][this['url']];f9p$vd && (f9p$vd['src'] = '', delete _5mhw6['_audioCache'][this['url']]);
    }, tiv9$c(0x0, vct92i, 'duration', function () {
      return this['_sound']['duration'];
    }), _5mhw6['_createSound'] = function () {
      return _5mhw6['_id']++, dz$pv['window']['wx']['createInnerAudioContext']();
    }, _5mhw6['_musicAudio'] = null, _5mhw6['_id'] = 0x0, _5mhw6['_audioCache'] = {}, _5mhw6['_null'] = undefined, _5mhw6;
  }(n83jg),
      bsaku = function (n1) {
    function ze7of(zeo7) {
      this['_audio'] = null, this['_onEnd'] = null, ze7of['__super']['call'](this), this['_audio'] = zeo7, this['_onEnd'] = nr3gj['bind'](this['__onEnd'], this), zeo7['onEnded'](this['_onEnd']);
    }g81r3n(ze7of, 'laya.wx.mini.MiniSoundChannel', n1);var myh5w_ = ze7of['prototype'];return myh5w_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (pdfv9$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, myh5w_['__onNull'] = function () {}, myh5w_['play'] = function () {
      this['isStopped'] = ![], w1hm['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, myh5w_['stop'] = function () {
      this['isStopped'] = !![], w1hm['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ze7of['_null'] != undefined) this['_audio']['onEnded'](ze7of['_null']);else try {
        this['_audio']['onEnded'](null), ze7of['_null'] = null;
      } catch (t24il) {
        console['warn']('[wxmini] stop:' + t24il), this['_audio']['onEnded'](nr3gj['bind'](this['__onNull'], this)), ze7of['_null'] = nr3gj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, myh5w_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, myh5w_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w1hm['addChannel'](this), this['_audio']['play']();
    }, tiv9$c(0x0, myh5w_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tiv9$c(0x0, myh5w_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tiv9$c(0x0, myh5w_, 'volume', function () {
      return 0x1;
    }, function (c2vi) {}), ze7of['_null'] = undefined, ze7of;
  }(zfod7p);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var c42t9 in Laya) {
    var qoe70z = Laya[c42t9];qoe70z && qoe70z['__isclass'] && (exports[c42t9] = qoe70z);
  }
});