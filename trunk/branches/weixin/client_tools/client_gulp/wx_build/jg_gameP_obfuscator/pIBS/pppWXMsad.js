var E = wx.$p;
(function (window, document, utm_xf) {
  var xtup = utm_xf['un'],
      e589qn = utm_xf['uns'],
      luxf = utm_xf['static'],
      zrv2 = utm_xf['class'],
      k4ihj = utm_xf['getset'],
      u4lxtp = utm_xf['__newvec'],
      oux_ = laya['utils']['Browser'],
      q89en5 = laya['events']['Event'],
      jkish4 = laya['events']['EventDispatcher'],
      ls4pht = laya['resource']['HTMLImage'],
      r$1 = laya['utils']['Handler'],
      zv0r72 = laya['display']['Input'],
      tpu4lx = laya['net']['Loader'],
      $6yv71 = laya['maths']['Matrix'],
      i6v1y = laya['renders']['Render'],
      j6kyi$ = laya['utils']['RunDriver'],
      mftx_u = laya['media']['Sound'],
      acbqd = laya['media']['SoundChannel'],
      ikjh4 = laya['media']['SoundManager'],
      o_xfum = laya['display']['Stage'],
      h4slk = laya['net']['URL'],
      n05w3 = laya['utils']['Utils'],
      uxp = function () {
    function $y16ji() {}return zrv2($y16ji, 'laya.wx.mini.MiniAdpter'), $y16ji['getJson'] = function (hps4t) {
      return JSON['parse'](hps4t);
    }, $y16ji['init'] = function (pftul, x4plts) {
      pftul === void 0x0 && (pftul = ![]), x4plts === void 0x0 && (x4plts = ![]);if ($y16ji['_inited']) return;$y16ji['window'] = window;if ($y16ji['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$y16ji['_inited'] = !![], $y16ji['isZiYu'] = x4plts, $y16ji['isPosMsgYu'] = pftul, $y16ji['EnvConfig'] = {}, !$y16ji['isZiYu'] && (ebaq['setNativeFileDir']('/layaairGame'), ebaq['existDir'](ebaq['fileNativeDir'], r$1['create']($y16ji, $y16ji['onMkdirCallBack']))), $y16ji['window']['focus'] = function () {}, utm_xf['getUrlPath'] = function () {}, $y16ji['window']['logtime'] = function (plshk4) {}, $y16ji['window']['alertTimeLog'] = function (xl_tfu) {}, $y16ji['window']['resetShareInfo'] = function () {}, $y16ji['window']['CanvasRenderingContext2D'] = function () {}, $y16ji['window']['CanvasRenderingContext2D']['prototype'] = $y16ji['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $y16ji['window']['document']['body']['appendChild'] = function () {}, $y16ji['EnvConfig']['pixelRatioInt'] = 0x0, j6kyi$['getPixelRatio'] = $y16ji['pixelRatio'], $y16ji['_preCreateElement'] = oux_['createElement'], oux_['createElement'] = $y16ji['createElement'], j6kyi$['createShaderCondition'] = $y16ji['createShaderCondition'], n05w3['parseXMLFromString'] = $y16ji['parseXMLFromString'], zv0r72['_createInputElement'] = _xflut['_createInputElement'], $y16ji['EnvConfig']['load'] = tpu4lx['prototype']['load'], tpu4lx['prototype']['load'] = r261['prototype']['load'], $y16ji['isZiYu'] && pftul && wx['onMessage'](function (kjy) {
        kjy['isLoad'] && (ebaq['ziyuFileData'][kjy['url']] = kjy['data']);
      });
    }, $y16ji['onMkdirCallBack'] = function (sk4hl, r32z) {
      if (!sk4hl) ebaq['filesListObj'] = JSON['parse'](r32z['data']);
    }, $y16ji['pixelRatio'] = function () {
      if (!$y16ji['EnvConfig']['pixelRatioInt']) try {
        var bq98ga = wx['getSystemInfoSync']();return $y16ji['EnvConfig']['pixelRatioInt'] = bq98ga['pixelRatio'], bq98ga = bq98ga, bq98ga['pixelRatio'];
      } catch (yskih) {}return $y16ji['EnvConfig']['pixelRatioInt'];
    }, $y16ji['createElement'] = function (xftlu) {
      if (xftlu == 'canvas') {
        var kiyhj$;return $y16ji['idx'] == 0x1 ? $y16ji['isZiYu'] ? (kiyhj$ = sharedCanvas, kiyhj$['style'] = {}) : kiyhj$ = window['canvas'] : kiyhj$ = window['wx']['createCanvas'](), $y16ji['idx']++, kiyhj$;
      } else {
        if (xftlu == 'textarea' || xftlu == 'input') return $y16ji['onCreateInput'](xftlu);else {
          if (xftlu == 'div') {
            var l_xtfu = $y16ji['_preCreateElement'](xftlu);return l_xtfu['contains'] = function (n053w) {
              return null;
            }, l_xtfu['removeChild'] = function (ufx_tm) {}, l_xtfu;
          } else return $y16ji['_preCreateElement'](xftlu);
        }
      }
    }, $y16ji['onCreateInput'] = function (n5ze) {
      var ne3zw = $y16ji['_preCreateElement'](n5ze);return ne3zw['focus'] = _xflut['wxinputFocus'], ne3zw['blur'] = _xflut['wxinputblur'], ne3zw['style'] = {}, ne3zw['value'] = 0x0, ne3zw['parentElement'] = {}, ne3zw['placeholder'] = {}, ne3zw['type'] = {}, ne3zw['setColor'] = function (_xfuo) {}, ne3zw['setType'] = function (i6$y1) {}, ne3zw['setFontFace'] = function (ij4h) {}, ne3zw['addEventListener'] = function (ki6j) {}, ne3zw['contains'] = function (n05z3w) {
        return null;
      }, ne3zw['removeChild'] = function (hkpsj4) {}, ne3zw;
    }, $y16ji['createShaderCondition'] = function (fxumo_) {
      var o_ufx = this,
          wz053 = function () {
        var acbqg = fxumo_;return o_ufx[fxumo_['replace']('this.', '')];
      };return wz053;
    }, $y16ji['EnvConfig'] = null, $y16ji['window'] = null, $y16ji['_preCreateElement'] = null, $y16ji['_inited'] = ![], $y16ji['wxRequest'] = null, $y16ji['systemInfo'] = null, $y16ji['version'] = '0.0.1', $y16ji['isZiYu'] = ![], $y16ji['isPosMsgYu'] = ![], $y16ji['parseXMLFromString'] = function (r67$v1) {
      var be98nq, i6j$k;r67$v1 = r67$v1['replace'](/>\s+</g, '><');try {
        be98nq = new window['Parser']['DOMParser']()['parseFromString'](r67$v1, 'text/xml');
      } catch (cabq) {
        throw '需要引入xml解析库文件';
      }return be98nq;
    }, $y16ji['idx'] = 0x1, $y16ji;
  }(),
      thslp4 = function () {
    function w98e5n() {}zrv2(w98e5n, 'laya.wx.mini.MiniImage');var r2701 = w98e5n['prototype'];return r2701['_loadImage'] = function (z5023w) {
      var a89qg = this,
          bca = ![];z5023w['indexOf']('layaNativeDir/') == -0x1 && (bca = !![], z5023w = h4slk['formatURL'](z5023w));if (!ebaq['getFileInfo'](z5023w)) {
        if (z5023w['indexOf']('http://') != -0x1 || z5023w['indexOf']('https://') != -0x1) ebaq['downImg'](z5023w, new r$1(w98e5n, w98e5n['onDownImgCallBack'], [z5023w, a89qg]), z5023w);else w98e5n['onCreateImage'](z5023w, a89qg, !![]);
      } else w98e5n['onCreateImage'](z5023w, a89qg, !bca);
    }, w98e5n['onDownImgCallBack'] = function (zew5n, hsp4lt, $jyk6) {
      if (!$jyk6) w98e5n['onCreateImage'](zew5n, hsp4lt);else hsp4lt['onError'](null);
    }, w98e5n['onCreateImage'] = function ($6yij1, js4kih, mftu_) {
      mftu_ === void 0x0 && (mftu_ = ![]);var beaq89;if (!mftu_) {
        var ox_mf = ebaq['getFileInfo']($6yij1),
            e8nq95 = ox_mf['md5'];beaq89 = ebaq['getFileNativePath'](e8nq95);
      } else beaq89 = $6yij1;if (js4kih['imgCache'] == null) js4kih['imgCache'] = {};var g8bqac;function enw5z3() {
        g8bqac['onload'] = null, g8bqac['onerror'] = null, delete js4kih['imgCache'][$6yij1];
      };var puxflt = function () {
        enw5z3(), js4kih['onLoaded'](g8bqac);
      },
          t_xul = function () {
        enw5z3(), js4kih['event']('error', 'Load image failed');
      };js4kih['_type'] == 'nativeimage' ? (g8bqac = new oux_['window']['Image'](), g8bqac['crossOrigin'] = '', g8bqac['onload'] = puxflt, g8bqac['onerror'] = t_xul, g8bqac['src'] = beaq89, js4kih['imgCache'][$6yij1] = g8bqac) : new ls4pht['create'](beaq89, { 'onload': puxflt, 'onerror': t_xul, 'onCreate': function (a9g) {
          g8bqac = a9g, js4kih['imgCache'][$6yij1] = a9g;
        } });
    }, w98e5n;
  }(),
      _xflut = function () {
    function w35z0n() {}return zrv2(w35z0n, 'laya.wx.mini.MiniInput'), w35z0n['_createInputElement'] = function () {
      zv0r72['_initInput'](zv0r72['area'] = oux_['createElement']('textarea')), zv0r72['_initInput'](zv0r72['input'] = oux_['createElement']('input')), zv0r72['inputContainer'] = oux_['createElement']('div'), zv0r72['inputContainer']['style']['position'] = 'absolute', zv0r72['inputContainer']['style']['zIndex'] = 0x186a0, oux_['container']['appendChild'](zv0r72['inputContainer']), zv0r72['inputContainer']['setPos'] = function (jkph, s4jhpk) {
        zv0r72['inputContainer']['style']['left'] = jkph + 'px', zv0r72['inputContainer']['style']['top'] = s4jhpk + 'px';
      }, utm_xf['stage']['on']('resize', null, w35z0n['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_umxf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ikjh4['_soundClass'] = j6yki$, ikjh4['_musicClass'] = j6yki$;
    }, w35z0n['_onStageResize'] = function () {
      var txlfup = utm_xf['stage']['_canvasTransform']['identity']();txlfup['scale'](oux_['width'] / i6v1y['canvas']['width'] / j6kyi$['getPixelRatio'](), oux_['height'] / i6v1y['canvas']['height'] / j6kyi$['getPixelRatio']());
    }, w35z0n['wxinputFocus'] = function (fm_tu) {
      var z20vr = zv0r72['inputElement']['target'];if (z20vr && !z20vr['editable']) return;uxp['window']['wx']['offKeyboardConfirm'](), uxp['window']['wx']['offKeyboardInput'](), uxp['window']['wx']['showKeyboard']({ 'defaultValue': z20vr['text'], 'maxLength': z20vr['maxChars'], 'multiple': z20vr['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gcd) {}, 'fail': function (y$167v) {} }), uxp['window']['wx']['onKeyboardConfirm'](function (rv271) {
        var k4pslh = rv271 ? rv271['value'] : '';z20vr['text'] = k4pslh, z20vr['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), uxp['window']['wx']['onKeyboardInput'](function (shtp4l) {
        var o_fxmu = shtp4l ? shtp4l['value'] : '';if (!z20vr['multiline']) {
          if (o_fxmu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }z20vr['text'] = o_fxmu, z20vr['event']('input');
      });
    }, w35z0n['inputEnter'] = function () {
      zv0r72['inputElement']['target']['focus'] = ![];
    }, w35z0n['wxinputblur'] = function () {
      w35z0n['hideKeyboard']();
    }, w35z0n['hideKeyboard'] = function () {
      uxp['window']['wx']['offKeyboardConfirm'](), uxp['window']['wx']['offKeyboardInput'](), uxp['window']['wx']['hideKeyboard']({ 'success': function ($khij) {
          console['log']('隐藏键盘');
        }, 'fail': function (kj4i) {
          console['log']('隐藏键盘出错:' + (kj4i ? kj4i['errMsg'] : ''));
        } });
    }, w35z0n;
  }(),
      r261 = function () {
    function ltpuf() {}zrv2(ltpuf, 'laya.wx.mini.MiniLoader');var qbne98 = ltpuf['prototype'];return qbne98['load'] = function (q5n89e, qg8cba, hkps4l, bqga9, gb98) {
      hkps4l === void 0x0 && (hkps4l = !![]), gb98 === void 0x0 && (gb98 = ![]);var gc8b = this;gc8b['_url'] = q5n89e;if (q5n89e['indexOf']('data:image') === 0x0) gc8b['_type'] = qg8cba = 'image';else gc8b['_type'] = qg8cba || (qg8cba = gc8b['getTypeFromUrl'](q5n89e));gc8b['_cache'] = hkps4l, gc8b['_data'] = null;var g89baq = 'ascii';if (q5n89e['indexOf']('.fnt') != -0x1) g89baq = 'utf8';else qg8cba == 'arraybuffer' && (g89baq = '');;var tfum_ = n05w3['getFileExtension'](q5n89e);if (ltpuf['_fileTypeArr']['indexOf'](tfum_) != -0x1) uxp['EnvConfig']['load']['call'](this, q5n89e, qg8cba, hkps4l, bqga9, gb98);else {
        if (!ebaq['getFileInfo'](q5n89e)) {
          if (q5n89e['indexOf']('layaNativeDir/') != -0x1) {
            if (uxp['isZiYu']) {
              var j1$6iy = ebaq['ziyuFileData'][q5n89e];gc8b['onLoaded'](j1$6iy);return;
            } else {
              cosnole['log']('read read'), ebaq['read'](q5n89e, g89baq, new r$1(ltpuf, ltpuf['onReadNativeCallBack'], [g89baq, q5n89e, qg8cba, hkps4l, bqga9, gb98, gc8b]));return;
            }
          }if (h4slk['rootPath'] == '') var lx4p = q5n89e;else lx4p = q5n89e['split'](h4slk['rootPath'])[0x0];q5n89e['indexOf']('http://') != -0x1 || q5n89e['indexOf']('https://') != -0x1 ? uxp['EnvConfig']['load']['call'](gc8b, q5n89e, qg8cba, hkps4l, bqga9, gb98) : ebaq['readFile'](lx4p, g89baq, new r$1(ltpuf, ltpuf['onReadNativeCallBack'], [g89baq, q5n89e, qg8cba, hkps4l, bqga9, gb98, gc8b]), q5n89e);
        } else uxp['EnvConfig']['load']['call'](this, q5n89e, qg8cba, hkps4l, bqga9, gb98);
      }
    }, qbne98['resMgrLoad'] = function (txu_mf, mou_f, qad, ihsyj, qgcb8a, jpk4s, ik6$j) {
      qad === void 0x0 && (qad = 0x0), ihsyj === void 0x0 && (ihsyj = ![]), qgcb8a === void 0x0 && (qgcb8a = ![]), jpk4s === void 0x0 && (jpk4s = 0x0), ik6$j === void 0x0 && (ik6$j = 0x3), txu_mf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', txu_mf), uxp['EnvConfig']['resMgrLoad'](txu_mf, (y$16i, kj6$yi, jhpks) => {
        ltpuf['prototype']['resMgrLoadCallBack'](y$16i, kj6$yi, jhpks, mou_f);
      }, qad, ihsyj, qgcb8a, jpk4s, ik6$j);
    }, qbne98['resMgrLoadCallBack'] = function (hsl4k, vr0271, lh4tps, ikh$j) {
      console['log']('buff:::', hsl4k, lh4tps, ebaq['fileNativeDir'] + '///' + ebaq['fileListName']), ikh$j(hsl4k, vr0271, lh4tps);
    }, qbne98['clearRes'] = function (ijksh, xtlpuf) {
      xtlpuf === void 0x0 && (xtlpuf = ![]);var splk = this;splk['clearRes'](ijksh, xtlpuf);var wn859e = ebaq['getFileInfo'](ijksh);if (wn859e && (ijksh['indexOf']('http://') != -0x1 || ijksh['indexOf']('https://') != -0x1)) {
        var qb8n = wn859e['md5'],
            z0352 = ebaq['getFileNativePath'](qb8n);ebaq['remove'](z0352);
      }
    }, ltpuf['onReadNativeCallBack'] = function (hsplt4, gcaqd, r2zw0, yij, v$6i1, z0r327, pkhs4l, $ijykh, v7r6$1) {
      yij === void 0x0 && (yij = !![]), z0r327 === void 0x0 && (z0r327 = ![]), $ijykh === void 0x0 && ($ijykh = 0x0);if (!$ijykh) {
        var y1$;if (r2zw0 == 'json' || r2zw0 == 'atlas') y1$ = uxp['getJson'](v7r6$1['data']);else r2zw0 == 'xml' ? y1$ = n05w3['parseXMLFromString'](v7r6$1['data']) : y1$ = v7r6$1['data'];pkhs4l['onLoaded'](y1$), !uxp['isZiYu'] && uxp['isPosMsgYu'] && r2zw0 != 'arraybuffer' && wx['postMessage']({ 'url': gcaqd, 'data': y1$, 'isLoad': !![] });
      } else $ijykh == 0x1 && uxp['EnvConfig']['load']['call'](pkhs4l, gcaqd, r2zw0, yij, v$6i1, z0r327);
    }, luxf(ltpuf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ltpuf;
  }(),
      ebaq = function (e39n5) {
    function bea9q8() {
      bea9q8['__super']['call'](this);;
    }return zrv2(bea9q8, 'laya.wx.mini.MiniFileMgr', e39n5), bea9q8['isLoadFile'] = function (v7621) {
      return bea9q8['_fileTypeArr']['indexOf'](v7621) != -0x1 ? !![] : ![];
    }, bea9q8['getFileInfo'] = function (ulx) {
      var dgqcab = ulx['split']('?')[0x0],
          q859 = bea9q8['filesListObj'][dgqcab];if (q859 == null) return null;else return q859;return null;
    }, bea9q8['onFileUpdate'] = function (yikshj, $jy61i) {
      var gaqdb = yikshj['split']('/'),
          a9beq8 = gaqdb[gaqdb['length'] - 0x1],
          ne95w8 = bea9q8['getFileInfo']($jy61i);if (ne95w8 == null) bea9q8['onSaveFile']($jy61i, a9beq8);else {
        if (ne95w8['readyUrl'] != $jy61i) bea9q8['remove'](a9beq8, $jy61i);
      }
    }, bea9q8['exits'] = function (uf_txl, e8b9qn) {
      var z3we = bea9q8['getFileNativePath'](uf_txl);bea9q8['fs']['getFileInfo']({ 'filePath': z3we, 'success': function (nwe395) {
          e8b9qn != null && e8b9qn['runWith']([0x0, nwe395]);
        }, 'fail': function (z7203) {
          e8b9qn != null && e8b9qn['runWith']([0x1, z7203]);
        } });
    }, bea9q8['read'] = function (e5n39, y$6kji, jik$6y, hjsi4) {
      y$6kji === void 0x0 && (y$6kji = 'ascill'), hjsi4 === void 0x0 && (hjsi4 = '');var q89nbe;hjsi4 != '' ? q89nbe = bea9q8['getFileNativePath'](e5n39) : q89nbe = e5n39, bea9q8['fs']['readFile']({ 'filePath': q89nbe, 'encoding': y$6kji, 'success': function (um_ofx) {
          jik$6y != null && jik$6y['runWith']([0x0, um_ofx]);
        }, 'fail': function (v61i) {
          if (v61i && hjsi4 != '') bea9q8['down'](hjsi4, y$6kji, jik$6y, hjsi4);else jik$6y != null && jik$6y['runWith']([0x1]);
        } });
    }, bea9q8['readNativeFile'] = function (lut4x, n98eq) {
      bea9q8['fs']['readFile']({ 'filePath': lut4x, 'encoding': '', 'success': function (upxft) {
          n98eq != null && n98eq['runWith']([0x0]);
        }, 'fail': function (aqeb98) {
          n98eq != null && n98eq['runWith']([0x1]);
        } });
    }, bea9q8['down'] = function (bcgqad, cbg8a, q9ne58, k6yi$j) {
      cbg8a === void 0x0 && (cbg8a = 'ascill'), k6yi$j === void 0x0 && (k6yi$j = '');var w32r0 = bea9q8['getFileNativePath'](k6yi$j),
          i6$kj = bea9q8['wxdown']({ 'url': bcgqad, 'filePath': w32r0, 'success': function (i$6y1j) {
          if (i$6y1j['statusCode'] === 0xc8) bea9q8['readFile'](i$6y1j['filePath'], cbg8a, q9ne58, k6yi$j);
        }, 'fail': function (p4tuxl) {
          q9ne58 != null && q9ne58['runWith']([0x1, p4tuxl]);
        } });i6$kj['onProgressUpdate'](function (xmf_ut) {
        q9ne58 != null && q9ne58['runWith']([0x2, xmf_ut['progress']]);
      });
    }, bea9q8['readFile'] = function (ihsk, iy$jk, m_ox, r702zv) {
      iy$jk === void 0x0 && (iy$jk = 'ascill'), r702zv === void 0x0 && (r702zv = ''), bea9q8['fs']['readFile']({ 'filePath': ihsk, 'encoding': iy$jk, 'success': function (v70z2) {
          if (ihsk['indexOf']('http://') != -0x1 || ihsk['indexOf']('https://') != -0x1) bea9q8['onFileUpdate'](ihsk, r702zv);m_ox != null && m_ox['runWith']([0x0, v70z2]);
        }, 'fail': function (cdaqb) {
          if (cdaqb) m_ox != null && m_ox['runWith']([0x1, cdaqb]);
        } });
    }, bea9q8['downImg'] = function (zwn30, z50, ijh$) {
      ijh$ === void 0x0 && (ijh$ = '');var hlp4k = bea9q8['wxdown']({ 'url': zwn30, 'success': function (dbgqa) {
          dbgqa['statusCode'] === 0xc8 && bea9q8['copyFile'](dbgqa['tempFilePath'], ijh$, z50);
        }, 'fail': function (jkhi4) {
          z50 != null && z50['runWith']([0x1, jkhi4]);
        } });
    }, bea9q8['copyFile'] = function (abqgc, txlsp4, z035nw) {
      var ji$k6 = abqgc['split']('/'),
          xtl4sp = ji$k6[ji$k6['length'] - 0x1],
          bag9q = txlsp4['split']('?')[0x0],
          qcg8ba = bea9q8['getFileInfo'](txlsp4),
          pjhsk4 = bea9q8['getFileNativePath'](xtl4sp);bea9q8['fs']['copyFile']({ 'srcPath': abqgc, 'destPath': pjhsk4, 'success': function (pls4xt) {
          if (!qcg8ba) bea9q8['onSaveFile'](txlsp4, xtl4sp), z035nw != null && z035nw['runWith']([0x0]);else {
            if (qcg8ba['readyUrl'] != txlsp4) bea9q8['remove'](xtl4sp, txlsp4, z035nw);
          }
        }, 'fail': function (z207r) {
          z035nw != null && z035nw['runWith']([0x1, z207r]);
        } });
    }, bea9q8['getFileNativePath'] = function (_ufmxo) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _ufmxo;
    }, bea9q8['remove'] = function (tup4xl, zw5en, vz0r27) {
      zw5en === void 0x0 && (zw5en = '');var v27r6 = bea9q8['getFileInfo'](zw5en),
          z0w23 = bea9q8['getFileNativePath'](v27r6['md5']);utm_xf['loader']['clearRes'](v27r6['readyUrl']), bea9q8['fs']['unlink']({ 'filePath': z0w23, 'success': function (xt4ls) {
          if (zw5en != '') bea9q8['onSaveFile'](zw5en, tup4xl);vz0r27 != null && vz0r27['runWith']([0x0]);
        }, 'fail': function (_ulxft) {} });
    }, bea9q8['onSaveFile'] = function (iv$y61, t_mx) {
      var n39ew5 = iv$y61['split']('?')[0x0];bea9q8['filesListObj'][n39ew5] = { 'md5': t_mx, 'readyUrl': iv$y61 }, bea9q8['fs']['writeFile']({ 'filePath': bea9q8['fileNativeDir'] + '/' + bea9q8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bea9q8['filesListObj']), 'success': function (tfu_) {
          console['log']('写入测试测试成功：', tfu_);
        }, 'fail': function (ps4xl) {
          console['log']('写入测试测试失败：', ps4xl);
        } });
    }, bea9q8['existDir'] = function (lshp4t, jhs) {
      bea9q8['fs']['mkdir']({ 'dirPath': lshp4t, 'success': function (jsihyk) {
          jhs != null && jhs['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (x4pts) {
          if (x4pts['errMsg']['indexOf']('file already exists') != -0x1) bea9q8['readSync'](bea9q8['fileListName'], 'utf8', jhs);else jhs != null && jhs['runWith']([0x1, x4pts]);
        } });
    }, bea9q8['readSync'] = function (iy6$kj, eqab89, b8e, lpshk) {
      eqab89 === void 0x0 && (eqab89 = 'ascill'), lpshk === void 0x0 && (lpshk = '');var jk4sih = bea9q8['getFileNativePath'](iy6$kj),
          zew5;try {
        zew5 = bea9q8['fs']['readFileSync'](jk4sih), b8e != null && b8e['runWith']([0x0, { 'data': zew5 }]);
      } catch ($yvi61) {
        b8e != null && b8e['runWith']([0x1]);
      }
    }, bea9q8['readCache'] = function () {}, bea9q8['writeCache'] = function (fxltup) {
      var x_fmo = readyUrl['split']('?')[0x0];bea9q8['filesListObj'][x_fmo] = { 'md5': md5Name, 'readyUrl': readyUrl }, bea9q8['fs']['writeFile']({ 'filePath': bea9q8['fileNativeDir'] + '/' + bea9q8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bea9q8['filesListObj']), 'success': function (ihskyj) {}, 'fail': function (agbq8c) {} });
    }, bea9q8['setNativeFileDir'] = function (sjpkh) {
      bea9q8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sjpkh;
    }, bea9q8['filesListObj'] = {}, bea9q8['fileNativeDir'] = null, bea9q8['fileListName'] = 'layaairfiles.txt', bea9q8['ziyuFileData'] = {}, luxf(bea9q8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bea9q8;
  }(jkish4),
      j6yki$ = function (v7$61y) {
    function h$kjyi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], h$kjyi['__super']['call'](this), this['_sound'] = h$kjyi['_createSound']();
    }zrv2(h$kjyi, 'laya.wx.mini.MiniSound', v7$61y);var _tulf = h$kjyi['prototype'];return _tulf['load'] = function (z2r3w) {
      var lp4tu = this;z2r3w = h4slk['formatURL'](z2r3w), this['url'] = z2r3w;if (h$kjyi['_audioCache'][z2r3w]) {
        this['event']('complete');return;
      }function cdqagb() {
        if (h$kjyi['_null'] != undefined) lp4tu['_sound']['onCanplay'](h$kjyi['_null']), lp4tu['_sound']['onError'](h$kjyi['_null']);else try {
          lp4tu['_sound']['onCanplay'](null), lp4tu['_sound']['onError'](null), h$kjyi['_null'] = null;
        } catch (r20z7v) {
          console['warn']('[wxmini] _clearSound:' + r20z7v), lp4tu['_sound']['onCanplay'](b9n), lp4tu['_sound']['onError'](b9n), h$kjyi['_null'] = b9n;
        }
      }function pxts() {
        cdqagb(), s4jikh['loaded'] = !![], s4jikh['event']('complete'), h$kjyi['_audioCache'][s4jikh['url']] = s4jikh;
      }function xl4up(pt4slx) {
        console['error']('errCode=' + pt4slx['errCode'] + '  errMsg=' + pt4slx['errMsg']), cdqagb(), s4jikh['event']('error');
      }function b9n() {}this['_sound']['onCanplay'](pxts), this['_sound']['onError'](xl4up), this['_sound']['src'] = z2r3w;var s4jikh = this;
    }, _tulf['play'] = function (ez5w3n, vy$6i) {
      ez5w3n === void 0x0 && (ez5w3n = 0x0), vy$6i === void 0x0 && (vy$6i = 0x0);var kyihsj;if (this['url'] == ikjh4['_tMusic']) {
        if (!h$kjyi['_musicAudio']) h$kjyi['_musicAudio'] = h$kjyi['_createSound']();kyihsj = h$kjyi['_musicAudio'];
      } else kyihsj = h$kjyi['_createSound']();kyihsj['src'] = this['url'];var r02z3w = new $kiy6(kyihsj);return r02z3w['url'] = this['url'], r02z3w['loops'] = vy$6i, r02z3w['startTime'] = ez5w3n, r02z3w['play'](), ikjh4['addChannel'](r02z3w), r02z3w;
    }, _tulf['dispose'] = function () {
      var jpshk = h$kjyi['_audioCache'][this['url']];jpshk && (jpshk['src'] = '', delete h$kjyi['_audioCache'][this['url']]);
    }, k4ihj(0x0, _tulf, 'duration', function () {
      return this['_sound']['duration'];
    }), h$kjyi['_createSound'] = function () {
      return h$kjyi['_id']++, uxp['window']['wx']['createInnerAudioContext']();
    }, h$kjyi['_musicAudio'] = null, h$kjyi['_id'] = 0x0, h$kjyi['_audioCache'] = {}, h$kjyi['_null'] = undefined, h$kjyi;
  }(jkish4),
      $kiy6 = function (yi$16j) {
    function f_lxtu(e95qn) {
      this['_audio'] = null, this['_onEnd'] = null, f_lxtu['__super']['call'](this), this['_audio'] = e95qn, this['_onEnd'] = n05w3['bind'](this['__onEnd'], this), e95qn['onEnded'](this['_onEnd']);
    }zrv2(f_lxtu, 'laya.wx.mini.MiniSoundChannel', yi$16j);var w20 = f_lxtu['prototype'];return w20['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (utm_xf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, w20['__onNull'] = function () {}, w20['play'] = function () {
      this['isStopped'] = ![], ikjh4['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, w20['stop'] = function () {
      this['isStopped'] = !![], ikjh4['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (f_lxtu['_null'] != undefined) this['_audio']['onEnded'](f_lxtu['_null']);else try {
        this['_audio']['onEnded'](null), f_lxtu['_null'] = null;
      } catch (ptxl4s) {
        console['warn']('[wxmini] stop:' + ptxl4s), this['_audio']['onEnded'](n05w3['bind'](this['__onNull'], this)), f_lxtu['_null'] = n05w3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, w20['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, w20['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ikjh4['addChannel'](this), this['_audio']['play']();
    }, k4ihj(0x0, w20, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k4ihj(0x0, w20, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k4ihj(0x0, w20, 'volume', function () {
      return 0x1;
    }, function (qag8cb) {}), f_lxtu['_null'] = undefined, f_lxtu;
  }(acbqd);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m_tfx in Laya) {
    var tpluf = Laya[m_tfx];tpluf && tpluf['__isclass'] && (exports[m_tfx] = tpluf);
  }
});