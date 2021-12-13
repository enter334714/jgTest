var E = wx.$p;
(function (window, document, ptlx4s) {
  var j4ikh = ptlx4s['un'],
      tlpf = ptlx4s['uns'],
      lhtsp = ptlx4s['static'],
      $ikj6 = ptlx4s['class'],
      skih = ptlx4s['getset'],
      newz5 = ptlx4s['__newvec'],
      gbq89 = laya['utils']['Browser'],
      spk4hl = laya['events']['Event'],
      j$ = laya['events']['EventDispatcher'],
      fmut_ = laya['resource']['HTMLImage'],
      be8q = laya['utils']['Handler'],
      hklp4s = laya['display']['Input'],
      e35nz = laya['net']['Loader'],
      n89w = laya['maths']['Matrix'],
      xf_muo = laya['renders']['Render'],
      $6ji1 = laya['utils']['RunDriver'],
      fo_u = laya['media']['Sound'],
      fm_uo = laya['media']['SoundChannel'],
      vy6$17 = laya['media']['SoundManager'],
      s4kl = laya['display']['Stage'],
      z302 = laya['net']['URL'],
      htps4 = laya['utils']['Utils'],
      _fltxu = function () {
    function iy$jk6() {}return $ikj6(iy$jk6, 'laya.wx.mini.MiniAdpter'), iy$jk6['getJson'] = function (lh4skp) {
      return JSON['parse'](lh4skp);
    }, iy$jk6['init'] = function (qbn98e, n39) {
      qbn98e === void 0x0 && (qbn98e = ![]), n39 === void 0x0 && (n39 = ![]);if (iy$jk6['_inited']) return;iy$jk6['window'] = window;if (iy$jk6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;iy$jk6['_inited'] = !![], iy$jk6['isZiYu'] = n39, iy$jk6['isPosMsgYu'] = qbn98e, iy$jk6['EnvConfig'] = {}, !iy$jk6['isZiYu'] && (om_uxf['setNativeFileDir']('/layaairGame'), om_uxf['existDir'](om_uxf['fileNativeDir'], be8q['create'](iy$jk6, iy$jk6['onMkdirCallBack']))), iy$jk6['window']['focus'] = function () {}, ptlx4s['getUrlPath'] = function () {}, iy$jk6['window']['logtime'] = function (dbgaqc) {}, iy$jk6['window']['alertTimeLog'] = function (qgbcad) {}, iy$jk6['window']['resetShareInfo'] = function () {}, iy$jk6['window']['CanvasRenderingContext2D'] = function () {}, iy$jk6['window']['CanvasRenderingContext2D']['prototype'] = iy$jk6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], iy$jk6['window']['document']['body']['appendChild'] = function () {}, iy$jk6['EnvConfig']['pixelRatioInt'] = 0x0, $6ji1['getPixelRatio'] = iy$jk6['pixelRatio'], iy$jk6['_preCreateElement'] = gbq89['createElement'], gbq89['createElement'] = iy$jk6['createElement'], $6ji1['createShaderCondition'] = iy$jk6['createShaderCondition'], htps4['parseXMLFromString'] = iy$jk6['parseXMLFromString'], hklp4s['_createInputElement'] = bcagqd['_createInputElement'], iy$jk6['EnvConfig']['load'] = e35nz['prototype']['load'], e35nz['prototype']['load'] = v2z0r['prototype']['load'], iy$jk6['isZiYu'] && qbn98e && wx['onMessage'](function (w53en) {
        w53en['isLoad'] && (om_uxf['ziyuFileData'][w53en['url']] = w53en['data']);
      });
    }, iy$jk6['onMkdirCallBack'] = function (a8q9eb, a98qgb) {
      if (!a8q9eb) om_uxf['filesListObj'] = JSON['parse'](a98qgb['data']);
    }, iy$jk6['pixelRatio'] = function () {
      if (!iy$jk6['EnvConfig']['pixelRatioInt']) try {
        var y$1i6j = wx['getSystemInfoSync']();return iy$jk6['EnvConfig']['pixelRatioInt'] = y$1i6j['pixelRatio'], y$1i6j = y$1i6j, y$1i6j['pixelRatio'];
      } catch (mxfut) {}return iy$jk6['EnvConfig']['pixelRatioInt'];
    }, iy$jk6['createElement'] = function (j$iy61) {
      if (j$iy61 == 'canvas') {
        var y$kij6;return iy$jk6['idx'] == 0x1 ? iy$jk6['isZiYu'] ? (y$kij6 = sharedCanvas, y$kij6['style'] = {}) : y$kij6 = window['canvas'] : y$kij6 = window['wx']['createCanvas'](), iy$jk6['idx']++, y$kij6;
      } else {
        if (j$iy61 == 'textarea' || j$iy61 == 'input') return iy$jk6['onCreateInput'](j$iy61);else {
          if (j$iy61 == 'div') {
            var l4uxp = iy$jk6['_preCreateElement'](j$iy61);return l4uxp['contains'] = function (vy61) {
              return null;
            }, l4uxp['removeChild'] = function (ab8) {}, l4uxp;
          } else return iy$jk6['_preCreateElement'](j$iy61);
        }
      }
    }, iy$jk6['onCreateInput'] = function (ptshl4) {
      var ivy6$ = iy$jk6['_preCreateElement'](ptshl4);return ivy6$['focus'] = bcagqd['wxinputFocus'], ivy6$['blur'] = bcagqd['wxinputblur'], ivy6$['style'] = {}, ivy6$['value'] = 0x0, ivy6$['parentElement'] = {}, ivy6$['placeholder'] = {}, ivy6$['type'] = {}, ivy6$['setColor'] = function (tp4hs) {}, ivy6$['setType'] = function (n3zw05) {}, ivy6$['setFontFace'] = function (dgabc) {}, ivy6$['addEventListener'] = function (w985n) {}, ivy6$['contains'] = function (ufxt_) {
        return null;
      }, ivy6$['removeChild'] = function (jskh4i) {}, ivy6$;
    }, iy$jk6['createShaderCondition'] = function (ew35n) {
      var t4pxlu = this,
          lsxpt4 = function () {
        var qgbdc = ew35n;return t4pxlu[ew35n['replace']('this.', '')];
      };return lsxpt4;
    }, iy$jk6['EnvConfig'] = null, iy$jk6['window'] = null, iy$jk6['_preCreateElement'] = null, iy$jk6['_inited'] = ![], iy$jk6['wxRequest'] = null, iy$jk6['systemInfo'] = null, iy$jk6['version'] = '0.0.1', iy$jk6['isZiYu'] = ![], iy$jk6['isPosMsgYu'] = ![], iy$jk6['parseXMLFromString'] = function (q8b9en) {
      var ba89, adcqg;q8b9en = q8b9en['replace'](/>\s+</g, '><');try {
        ba89 = new window['Parser']['DOMParser']()['parseFromString'](q8b9en, 'text/xml');
      } catch (q98eb) {
        throw '需要引入xml解析库文件';
      }return ba89;
    }, iy$jk6['idx'] = 0x1, iy$jk6;
  }(),
      q8bgac = function () {
    function v120r() {}$ikj6(v120r, 'laya.wx.mini.MiniImage');var hjks4 = v120r['prototype'];return hjks4['_loadImage'] = function ($r71v6) {
      var hskp4 = this,
          y1$ = ![];$r71v6['indexOf']('layaNativeDir/') == -0x1 && (y1$ = !![], $r71v6 = z302['formatURL']($r71v6));if (!om_uxf['getFileInfo']($r71v6)) {
        if ($r71v6['indexOf']('http://') != -0x1 || $r71v6['indexOf']('https://') != -0x1) om_uxf['downImg']($r71v6, new be8q(v120r, v120r['onDownImgCallBack'], [$r71v6, hskp4]), $r71v6);else v120r['onCreateImage']($r71v6, hskp4, !![]);
      } else v120r['onCreateImage']($r71v6, hskp4, !y1$);
    }, v120r['onDownImgCallBack'] = function (v7r21, ufo_m, $yj61) {
      if (!$yj61) v120r['onCreateImage'](v7r21, ufo_m);else ufo_m['onError'](null);
    }, v120r['onCreateImage'] = function (xp4ts, pkhjs, znw35e) {
      znw35e === void 0x0 && (znw35e = ![]);var sjkhi;if (!znw35e) {
        var qdcg = om_uxf['getFileInfo'](xp4ts),
            ulpf = qdcg['md5'];sjkhi = om_uxf['getFileNativePath'](ulpf);
      } else sjkhi = xp4ts;if (pkhjs['imgCache'] == null) pkhjs['imgCache'] = {};var w0253;function pskl4h() {
        w0253['onload'] = null, w0253['onerror'] = null, delete pkhjs['imgCache'][xp4ts];
      };var j$i1 = function () {
        pskl4h(), pkhjs['onLoaded'](w0253);
      },
          _t = function () {
        pskl4h(), pkhjs['event']('error', 'Load image failed');
      };pkhjs['_type'] == 'nativeimage' ? (w0253 = new gbq89['window']['Image'](), w0253['crossOrigin'] = '', w0253['onload'] = j$i1, w0253['onerror'] = _t, w0253['src'] = sjkhi, pkhjs['imgCache'][xp4ts] = w0253) : new fmut_['create'](sjkhi, { 'onload': j$i1, 'onerror': _t, 'onCreate': function (hj4skp) {
          w0253 = hj4skp, pkhjs['imgCache'][xp4ts] = hj4skp;
        } });
    }, v120r;
  }(),
      bcagqd = function () {
    function fpult() {}return $ikj6(fpult, 'laya.wx.mini.MiniInput'), fpult['_createInputElement'] = function () {
      hklp4s['_initInput'](hklp4s['area'] = gbq89['createElement']('textarea')), hklp4s['_initInput'](hklp4s['input'] = gbq89['createElement']('input')), hklp4s['inputContainer'] = gbq89['createElement']('div'), hklp4s['inputContainer']['style']['position'] = 'absolute', hklp4s['inputContainer']['style']['zIndex'] = 0x186a0, gbq89['container']['appendChild'](hklp4s['inputContainer']), hklp4s['inputContainer']['setPos'] = function (qe9bn, z3r20w) {
        hklp4s['inputContainer']['style']['left'] = qe9bn + 'px', hklp4s['inputContainer']['style']['top'] = z3r20w + 'px';
      }, ptlx4s['stage']['on']('resize', null, fpult['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gcbqa) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vy6$17['_soundClass'] = hykisj, vy6$17['_musicClass'] = hykisj;
    }, fpult['_onStageResize'] = function () {
      var lpsk4 = ptlx4s['stage']['_canvasTransform']['identity']();lpsk4['scale'](gbq89['width'] / xf_muo['canvas']['width'] / $6ji1['getPixelRatio'](), gbq89['height'] / xf_muo['canvas']['height'] / $6ji1['getPixelRatio']());
    }, fpult['wxinputFocus'] = function (xp4l) {
      var z20v7 = hklp4s['inputElement']['target'];if (z20v7 && !z20v7['editable']) return;_fltxu['window']['wx']['offKeyboardConfirm'](), _fltxu['window']['wx']['offKeyboardInput'](), _fltxu['window']['wx']['showKeyboard']({ 'defaultValue': z20v7['text'], 'maxLength': z20v7['maxChars'], 'multiple': z20v7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (kjph4) {}, 'fail': function (ltsp4h) {} }), _fltxu['window']['wx']['onKeyboardConfirm'](function (stpx) {
        var v$r716 = stpx ? stpx['value'] : '';z20v7['text'] = v$r716, z20v7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _fltxu['window']['wx']['onKeyboardInput'](function (p4skhl) {
        var ptxful = p4skhl ? p4skhl['value'] : '';if (!z20v7['multiline']) {
          if (ptxful['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }z20v7['text'] = ptxful, z20v7['event']('input');
      });
    }, fpult['inputEnter'] = function () {
      hklp4s['inputElement']['target']['focus'] = ![];
    }, fpult['wxinputblur'] = function () {
      fpult['hideKeyboard']();
    }, fpult['hideKeyboard'] = function () {
      _fltxu['window']['wx']['offKeyboardConfirm'](), _fltxu['window']['wx']['offKeyboardInput'](), _fltxu['window']['wx']['hideKeyboard']({ 'success': function (yk$jh) {
          console['log']('隐藏键盘');
        }, 'fail': function (z520w3) {
          console['log']('隐藏键盘出错:' + (z520w3 ? z520w3['errMsg'] : ''));
        } });
    }, fpult;
  }(),
      v2z0r = function () {
    function v720() {}$ikj6(v720, 'laya.wx.mini.MiniLoader');var e9n8w = v720['prototype'];return e9n8w['load'] = function (e5nq9, r2v1, q98a, hi$kjy, i$v1y6) {
      q98a === void 0x0 && (q98a = !![]), i$v1y6 === void 0x0 && (i$v1y6 = ![]);var $61iyj = this;$61iyj['_url'] = e5nq9;if (e5nq9['indexOf']('data:image') === 0x0) $61iyj['_type'] = r2v1 = 'image';else $61iyj['_type'] = r2v1 || (r2v1 = $61iyj['getTypeFromUrl'](e5nq9));$61iyj['_cache'] = q98a, $61iyj['_data'] = null;var gbqadc = 'ascii';if (e5nq9['indexOf']('.fnt') != -0x1) gbqadc = 'utf8';else r2v1 == 'arraybuffer' && (gbqadc = '');;var v01r7 = htps4['getFileExtension'](e5nq9);if (v720['_fileTypeArr']['indexOf'](v01r7) != -0x1) _fltxu['EnvConfig']['load']['call'](this, e5nq9, r2v1, q98a, hi$kjy, i$v1y6);else {
        if (!om_uxf['getFileInfo'](e5nq9)) {
          if (e5nq9['indexOf']('layaNativeDir/') != -0x1) {
            if (_fltxu['isZiYu']) {
              var xufp = om_uxf['ziyuFileData'][e5nq9];$61iyj['onLoaded'](xufp);return;
            } else {
              cosnole['log']('read read'), om_uxf['read'](e5nq9, gbqadc, new be8q(v720, v720['onReadNativeCallBack'], [gbqadc, e5nq9, r2v1, q98a, hi$kjy, i$v1y6, $61iyj]));return;
            }
          }if (z302['rootPath'] == '') var y71$6v = e5nq9;else y71$6v = e5nq9['split'](z302['rootPath'])[0x0];e5nq9['indexOf']('http://') != -0x1 || e5nq9['indexOf']('https://') != -0x1 ? _fltxu['EnvConfig']['load']['call']($61iyj, e5nq9, r2v1, q98a, hi$kjy, i$v1y6) : om_uxf['readFile'](y71$6v, gbqadc, new be8q(v720, v720['onReadNativeCallBack'], [gbqadc, e5nq9, r2v1, q98a, hi$kjy, i$v1y6, $61iyj]), e5nq9);
        } else _fltxu['EnvConfig']['load']['call'](this, e5nq9, r2v1, q98a, hi$kjy, i$v1y6);
      }
    }, e9n8w['resMgrLoad'] = function (bne8q, luxt4p, z503w, $1i6, nq859, q9en5, fxp) {
      z503w === void 0x0 && (z503w = 0x0), $1i6 === void 0x0 && ($1i6 = ![]), nq859 === void 0x0 && (nq859 = ![]), q9en5 === void 0x0 && (q9en5 = 0x0), fxp === void 0x0 && (fxp = 0x3), bne8q['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bne8q), _fltxu['EnvConfig']['resMgrLoad'](bne8q, (lu4, tlxsp4, a89ebq) => {
        v720['prototype']['resMgrLoadCallBack'](lu4, tlxsp4, a89ebq, luxt4p);
      }, z503w, $1i6, nq859, q9en5, fxp);
    }, e9n8w['resMgrLoadCallBack'] = function (tl4shp, z3nw50, _mo, $v7) {
      console['log']('buff:::', tl4shp, _mo, om_uxf['fileNativeDir'] + '///' + om_uxf['fileListName']), $v7(tl4shp, z3nw50, _mo);
    }, e9n8w['clearRes'] = function (r0zw3, e5n98) {
      e5n98 === void 0x0 && (e5n98 = ![]);var plkhs4 = this;plkhs4['clearRes'](r0zw3, e5n98);var kh4i = om_uxf['getFileInfo'](r0zw3);if (kh4i && (r0zw3['indexOf']('http://') != -0x1 || r0zw3['indexOf']('https://') != -0x1)) {
        var $jk6y = kh4i['md5'],
            xspl4t = om_uxf['getFileNativePath']($jk6y);om_uxf['remove'](xspl4t);
      }
    }, v720['onReadNativeCallBack'] = function (ih$kjy, lxtu4, nb8q, $hjki, n5qe8, f_mx, $7rv16, en9q, e9q58) {
      $hjki === void 0x0 && ($hjki = !![]), f_mx === void 0x0 && (f_mx = ![]), en9q === void 0x0 && (en9q = 0x0);if (!en9q) {
        var xptsl4;if (nb8q == 'json' || nb8q == 'atlas') xptsl4 = _fltxu['getJson'](e9q58['data']);else nb8q == 'xml' ? xptsl4 = htps4['parseXMLFromString'](e9q58['data']) : xptsl4 = e9q58['data'];$7rv16['onLoaded'](xptsl4), !_fltxu['isZiYu'] && _fltxu['isPosMsgYu'] && nb8q != 'arraybuffer' && wx['postMessage']({ 'url': lxtu4, 'data': xptsl4, 'isLoad': !![] });
      } else en9q == 0x1 && _fltxu['EnvConfig']['load']['call']($7rv16, lxtu4, nb8q, $hjki, n5qe8, f_mx);
    }, lhtsp(v720, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), v720;
  }(),
      om_uxf = function (qb9ae) {
    function his4() {
      his4['__super']['call'](this);;
    }return $ikj6(his4, 'laya.wx.mini.MiniFileMgr', qb9ae), his4['isLoadFile'] = function (yshi) {
      return his4['_fileTypeArr']['indexOf'](yshi) != -0x1 ? !![] : ![];
    }, his4['getFileInfo'] = function (qdbac) {
      var ulx4pt = qdbac['split']('?')[0x0],
          vr16$ = his4['filesListObj'][ulx4pt];if (vr16$ == null) return null;else return vr16$;return null;
    }, his4['onFileUpdate'] = function (yjkhis, c8gba) {
      var kj6y$i = yjkhis['split']('/'),
          h4tlsp = kj6y$i[kj6y$i['length'] - 0x1],
          tlpxs4 = his4['getFileInfo'](c8gba);if (tlpxs4 == null) his4['onSaveFile'](c8gba, h4tlsp);else {
        if (tlpxs4['readyUrl'] != c8gba) his4['remove'](h4tlsp, c8gba);
      }
    }, his4['exits'] = function (kijh4s, ut4lx) {
      var lfx_ = his4['getFileNativePath'](kijh4s);his4['fs']['getFileInfo']({ 'filePath': lfx_, 'success': function (n35wez) {
          ut4lx != null && ut4lx['runWith']([0x0, n35wez]);
        }, 'fail': function (ij6$yk) {
          ut4lx != null && ut4lx['runWith']([0x1, ij6$yk]);
        } });
    }, his4['read'] = function (w589n, qbgadc, cqdgab, tpl4x) {
      qbgadc === void 0x0 && (qbgadc = 'ascill'), tpl4x === void 0x0 && (tpl4x = '');var jki4s;tpl4x != '' ? jki4s = his4['getFileNativePath'](w589n) : jki4s = w589n, his4['fs']['readFile']({ 'filePath': jki4s, 'encoding': qbgadc, 'success': function (uxpl4) {
          cqdgab != null && cqdgab['runWith']([0x0, uxpl4]);
        }, 'fail': function (v$iy) {
          if (v$iy && tpl4x != '') his4['down'](tpl4x, qbgadc, cqdgab, tpl4x);else cqdgab != null && cqdgab['runWith']([0x1]);
        } });
    }, his4['readNativeFile'] = function (ksyijh, y1v$76) {
      his4['fs']['readFile']({ 'filePath': ksyijh, 'encoding': '', 'success': function (ks4hpj) {
          y1v$76 != null && y1v$76['runWith']([0x0]);
        }, 'fail': function (w3nze5) {
          y1v$76 != null && y1v$76['runWith']([0x1]);
        } });
    }, his4['down'] = function (eb98n, i6v$y, e5w9, $v7r6) {
      i6v$y === void 0x0 && (i6v$y = 'ascill'), $v7r6 === void 0x0 && ($v7r6 = '');var hk4psj = his4['getFileNativePath']($v7r6),
          umofx_ = his4['wxdown']({ 'url': eb98n, 'filePath': hk4psj, 'success': function (nw59e) {
          if (nw59e['statusCode'] === 0xc8) his4['readFile'](nw59e['filePath'], i6v$y, e5w9, $v7r6);
        }, 'fail': function (hkys) {
          e5w9 != null && e5w9['runWith']([0x1, hkys]);
        } });umofx_['onProgressUpdate'](function (q9be8) {
        e5w9 != null && e5w9['runWith']([0x2, q9be8['progress']]);
      });
    }, his4['readFile'] = function (p4sxl, kyshji, tlufx, hps4lt) {
      kyshji === void 0x0 && (kyshji = 'ascill'), hps4lt === void 0x0 && (hps4lt = ''), his4['fs']['readFile']({ 'filePath': p4sxl, 'encoding': kyshji, 'success': function (eabq98) {
          if (p4sxl['indexOf']('http://') != -0x1 || p4sxl['indexOf']('https://') != -0x1) his4['onFileUpdate'](p4sxl, hps4lt);tlufx != null && tlufx['runWith']([0x0, eabq98]);
        }, 'fail': function (lhs4pk) {
          if (lhs4pk) tlufx != null && tlufx['runWith']([0x1, lhs4pk]);
        } });
    }, his4['downImg'] = function (lsk4, v$61i, b9eq8a) {
      b9eq8a === void 0x0 && (b9eq8a = '');var lxfup = his4['wxdown']({ 'url': lsk4, 'success': function (bacdq) {
          bacdq['statusCode'] === 0xc8 && his4['copyFile'](bacdq['tempFilePath'], b9eq8a, v$61i);
        }, 'fail': function (hstl4) {
          v$61i != null && v$61i['runWith']([0x1, hstl4]);
        } });
    }, his4['copyFile'] = function (ksjhp, hsji, l4hts) {
      var v27r16 = ksjhp['split']('/'),
          xt_mfu = v27r16[v27r16['length'] - 0x1],
          xs4pt = hsji['split']('?')[0x0],
          cg8qa = his4['getFileInfo'](hsji),
          n85eq9 = his4['getFileNativePath'](xt_mfu);his4['fs']['copyFile']({ 'srcPath': ksjhp, 'destPath': n85eq9, 'success': function (gabq98) {
          if (!cg8qa) his4['onSaveFile'](hsji, xt_mfu), l4hts != null && l4hts['runWith']([0x0]);else {
            if (cg8qa['readyUrl'] != hsji) his4['remove'](xt_mfu, hsji, l4hts);
          }
        }, 'fail': function (dqcga) {
          l4hts != null && l4hts['runWith']([0x1, dqcga]);
        } });
    }, his4['getFileNativePath'] = function (r02v71) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r02v71;
    }, his4['remove'] = function (xu4lp, tfxu_l, fuxt) {
      tfxu_l === void 0x0 && (tfxu_l = '');var iy1j6$ = his4['getFileInfo'](tfxu_l),
          _fxumo = his4['getFileNativePath'](iy1j6$['md5']);ptlx4s['loader']['clearRes'](iy1j6$['readyUrl']), his4['fs']['unlink']({ 'filePath': _fxumo, 'success': function (xutfm_) {
          if (tfxu_l != '') his4['onSaveFile'](tfxu_l, xu4lp);fuxt != null && fuxt['runWith']([0x0]);
        }, 'fail': function (pk4sj) {} });
    }, his4['onSaveFile'] = function (l4putx, ut) {
      var r1v6 = l4putx['split']('?')[0x0];his4['filesListObj'][r1v6] = { 'md5': ut, 'readyUrl': l4putx }, his4['fs']['writeFile']({ 'filePath': his4['fileNativeDir'] + '/' + his4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](his4['filesListObj']), 'success': function (dagb) {
          console['log']('写入测试测试成功：', dagb);
        }, 'fail': function (lp4sxt) {
          console['log']('写入测试测试失败：', lp4sxt);
        } });
    }, his4['existDir'] = function (h4lts, iy1v$6) {
      his4['fs']['mkdir']({ 'dirPath': h4lts, 'success': function (sk4ij) {
          iy1v$6 != null && iy1v$6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (tx4pul) {
          if (tx4pul['errMsg']['indexOf']('file already exists') != -0x1) his4['readSync'](his4['fileListName'], 'utf8', iy1v$6);else iy1v$6 != null && iy1v$6['runWith']([0x1, tx4pul]);
        } });
    }, his4['readSync'] = function (nw3z5e, p4ltx, z53wen, pstlx) {
      p4ltx === void 0x0 && (p4ltx = 'ascill'), pstlx === void 0x0 && (pstlx = '');var t_uxlf = his4['getFileNativePath'](nw3z5e),
          aqgb9;try {
        aqgb9 = his4['fs']['readFileSync'](t_uxlf), z53wen != null && z53wen['runWith']([0x0, { 'data': aqgb9 }]);
      } catch (e5n8w) {
        z53wen != null && z53wen['runWith']([0x1]);
      }
    }, his4['readCache'] = function () {}, his4['writeCache'] = function ($61vyi) {
      var yv1i$ = readyUrl['split']('?')[0x0];his4['filesListObj'][yv1i$] = { 'md5': md5Name, 'readyUrl': readyUrl }, his4['fs']['writeFile']({ 'filePath': his4['fileNativeDir'] + '/' + his4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](his4['filesListObj']), 'success': function (e8w5) {}, 'fail': function (hpj4k) {} });
    }, his4['setNativeFileDir'] = function (flt_) {
      his4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + flt_;
    }, his4['filesListObj'] = {}, his4['fileNativeDir'] = null, his4['fileListName'] = 'layaairfiles.txt', his4['ziyuFileData'] = {}, lhtsp(his4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), his4;
  }(j$),
      hykisj = function (ufxpl) {
    function ne589w() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ne589w['__super']['call'](this), this['_sound'] = ne589w['_createSound']();
    }$ikj6(ne589w, 'laya.wx.mini.MiniSound', ufxpl);var ksh4j = ne589w['prototype'];return ksh4j['load'] = function (cbagd) {
      var mutf_ = this;cbagd = z302['formatURL'](cbagd), this['url'] = cbagd;if (ne589w['_audioCache'][cbagd]) {
        this['event']('complete');return;
      }function kyjshi() {
        if (ne589w['_null'] != undefined) mutf_['_sound']['onCanplay'](ne589w['_null']), mutf_['_sound']['onError'](ne589w['_null']);else try {
          mutf_['_sound']['onCanplay'](null), mutf_['_sound']['onError'](null), ne589w['_null'] = null;
        } catch (ftlpxu) {
          console['warn']('[wxmini] _clearSound:' + ftlpxu), mutf_['_sound']['onCanplay'](mftxu), mutf_['_sound']['onError'](mftxu), ne589w['_null'] = mftxu;
        }
      }function lpuf() {
        kyjshi(), agq8['loaded'] = !![], agq8['event']('complete'), ne589w['_audioCache'][agq8['url']] = agq8;
      }function tlufx_(r7v$61) {
        console['error']('errCode=' + r7v$61['errCode'] + '  errMsg=' + r7v$61['errMsg']), kyjshi(), agq8['event']('error');
      }function mftxu() {}this['_sound']['onCanplay'](lpuf), this['_sound']['onError'](tlufx_), this['_sound']['src'] = cbagd;var agq8 = this;
    }, ksh4j['play'] = function (j6y$i, lxfut) {
      j6y$i === void 0x0 && (j6y$i = 0x0), lxfut === void 0x0 && (lxfut = 0x0);var w302;if (this['url'] == vy6$17['_tMusic']) {
        if (!ne589w['_musicAudio']) ne589w['_musicAudio'] = ne589w['_createSound']();w302 = ne589w['_musicAudio'];
      } else w302 = ne589w['_createSound']();w302['src'] = this['url'];var z7vr02 = new wz23r0(w302);return z7vr02['url'] = this['url'], z7vr02['loops'] = lxfut, z7vr02['startTime'] = j6y$i, z7vr02['play'](), vy6$17['addChannel'](z7vr02), z7vr02;
    }, ksh4j['dispose'] = function () {
      var _xumft = ne589w['_audioCache'][this['url']];_xumft && (_xumft['src'] = '', delete ne589w['_audioCache'][this['url']]);
    }, skih(0x0, ksh4j, 'duration', function () {
      return this['_sound']['duration'];
    }), ne589w['_createSound'] = function () {
      return ne589w['_id']++, _fltxu['window']['wx']['createInnerAudioContext']();
    }, ne589w['_musicAudio'] = null, ne589w['_id'] = 0x0, ne589w['_audioCache'] = {}, ne589w['_null'] = undefined, ne589w;
  }(j$),
      wz23r0 = function (qe985n) {
    function qbga89(b8qe9a) {
      this['_audio'] = null, this['_onEnd'] = null, qbga89['__super']['call'](this), this['_audio'] = b8qe9a, this['_onEnd'] = htps4['bind'](this['__onEnd'], this), b8qe9a['onEnded'](this['_onEnd']);
    }$ikj6(qbga89, 'laya.wx.mini.MiniSoundChannel', qe985n);var r716 = qbga89['prototype'];return r716['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ptlx4s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r716['__onNull'] = function () {}, r716['play'] = function () {
      this['isStopped'] = ![], vy6$17['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r716['stop'] = function () {
      this['isStopped'] = !![], vy6$17['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qbga89['_null'] != undefined) this['_audio']['onEnded'](qbga89['_null']);else try {
        this['_audio']['onEnded'](null), qbga89['_null'] = null;
      } catch (_lfutx) {
        console['warn']('[wxmini] stop:' + _lfutx), this['_audio']['onEnded'](htps4['bind'](this['__onNull'], this)), qbga89['_null'] = htps4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, r716['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r716['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vy6$17['addChannel'](this), this['_audio']['play']();
    }, skih(0x0, r716, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), skih(0x0, r716, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), skih(0x0, r716, 'volume', function () {
      return 0x1;
    }, function (en95q) {}), qbga89['_null'] = undefined, qbga89;
  }(fm_uo);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t_xfm in Laya) {
    var lputf = Laya[t_xfm];lputf && lputf['__isclass'] && (exports[t_xfm] = lputf);
  }
});