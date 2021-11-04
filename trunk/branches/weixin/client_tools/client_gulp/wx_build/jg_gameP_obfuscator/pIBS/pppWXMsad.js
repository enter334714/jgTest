var E = wx.$p;
(function (window, document, slt4) {
  var v20r1 = slt4['un'],
      r01 = slt4['uns'],
      gcqbad = slt4['static'],
      zw32r = slt4['class'],
      acgbqd = slt4['getset'],
      hj4p = slt4['__newvec'],
      r0zw32 = laya['utils']['Browser'],
      qagdcb = laya['events']['Event'],
      kis4j = laya['events']['EventDispatcher'],
      pklsh = laya['resource']['HTMLImage'],
      v$i61y = laya['utils']['Handler'],
      r7v61$ = laya['display']['Input'],
      bgq8a = laya['net']['Loader'],
      $kyhj = laya['maths']['Matrix'],
      phs4kj = laya['renders']['Render'],
      l4k = laya['utils']['RunDriver'],
      ksihj4 = laya['media']['Sound'],
      lp4x = laya['media']['SoundChannel'],
      xumf_ = laya['media']['SoundManager'],
      f_o = laya['display']['Stage'],
      ihjk = laya['net']['URL'],
      e89qn5 = laya['utils']['Utils'],
      xputfl = function () {
    function ykjhi() {}return zw32r(ykjhi, 'laya.wx.mini.MiniAdpter'), ykjhi['getJson'] = function (eqb89n) {
      return JSON['parse'](eqb89n);
    }, ykjhi['init'] = function (i4kjsh, foum) {
      i4kjsh === void 0x0 && (i4kjsh = ![]), foum === void 0x0 && (foum = ![]);if (ykjhi['_inited']) return;ykjhi['window'] = window;if (ykjhi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ykjhi['_inited'] = !![], ykjhi['isZiYu'] = foum, ykjhi['isPosMsgYu'] = i4kjsh, ykjhi['EnvConfig'] = {}, !ykjhi['isZiYu'] && (txlufp['setNativeFileDir']('/layaairGame'), txlufp['existDir'](txlufp['fileNativeDir'], v$i61y['create'](ykjhi, ykjhi['onMkdirCallBack']))), ykjhi['window']['focus'] = function () {}, slt4['getUrlPath'] = function () {}, ykjhi['window']['logtime'] = function (xof_um) {}, ykjhi['window']['alertTimeLog'] = function (zr7230) {}, ykjhi['window']['resetShareInfo'] = function () {}, ykjhi['window']['CanvasRenderingContext2D'] = function () {}, ykjhi['window']['CanvasRenderingContext2D']['prototype'] = ykjhi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ykjhi['window']['document']['body']['appendChild'] = function () {}, ykjhi['EnvConfig']['pixelRatioInt'] = 0x0, l4k['getPixelRatio'] = ykjhi['pixelRatio'], ykjhi['_preCreateElement'] = r0zw32['createElement'], r0zw32['createElement'] = ykjhi['createElement'], l4k['createShaderCondition'] = ykjhi['createShaderCondition'], e89qn5['parseXMLFromString'] = ykjhi['parseXMLFromString'], r7v61$['_createInputElement'] = nw0['_createInputElement'], ykjhi['EnvConfig']['load'] = bgq8a['prototype']['load'], bgq8a['prototype']['load'] = hs4pkl['prototype']['load'], ykjhi['isZiYu'] && i4kjsh && wx['onMessage'](function (xo_mf) {
        xo_mf['isLoad'] && (txlufp['ziyuFileData'][xo_mf['url']] = xo_mf['data']);
      });
    }, ykjhi['onMkdirCallBack'] = function (t4luxp, zr0) {
      if (!t4luxp) txlufp['filesListObj'] = JSON['parse'](zr0['data']);
    }, ykjhi['pixelRatio'] = function () {
      if (!ykjhi['EnvConfig']['pixelRatioInt']) try {
        var r0v217 = wx['getSystemInfoSync']();return ykjhi['EnvConfig']['pixelRatioInt'] = r0v217['pixelRatio'], r0v217 = r0v217, r0v217['pixelRatio'];
      } catch (q9b8e) {}return ykjhi['EnvConfig']['pixelRatioInt'];
    }, ykjhi['createElement'] = function ($y7v16) {
      if ($y7v16 == 'canvas') {
        var _lxuft;return ykjhi['idx'] == 0x1 ? ykjhi['isZiYu'] ? (_lxuft = sharedCanvas, _lxuft['style'] = {}) : _lxuft = window['canvas'] : _lxuft = window['wx']['createCanvas'](), ykjhi['idx']++, _lxuft;
      } else {
        if ($y7v16 == 'textarea' || $y7v16 == 'input') return ykjhi['onCreateInput']($y7v16);else {
          if ($y7v16 == 'div') {
            var v72z0 = ykjhi['_preCreateElement']($y7v16);return v72z0['contains'] = function (q9eab) {
              return null;
            }, v72z0['removeChild'] = function (v20r7z) {}, v72z0;
          } else return ykjhi['_preCreateElement']($y7v16);
        }
      }
    }, ykjhi['onCreateInput'] = function (cqdgb) {
      var hs4i = ykjhi['_preCreateElement'](cqdgb);return hs4i['focus'] = nw0['wxinputFocus'], hs4i['blur'] = nw0['wxinputblur'], hs4i['style'] = {}, hs4i['value'] = 0x0, hs4i['parentElement'] = {}, hs4i['placeholder'] = {}, hs4i['type'] = {}, hs4i['setColor'] = function (pkl4sh) {}, hs4i['setType'] = function (y761v$) {}, hs4i['setFontFace'] = function (_oumxf) {}, hs4i['addEventListener'] = function (sykihj) {}, hs4i['contains'] = function (s4pkh) {
        return null;
      }, hs4i['removeChild'] = function (lxts4) {}, hs4i;
    }, ykjhi['createShaderCondition'] = function (gb89aq) {
      var h$yji = this,
          rv67$ = function () {
        var e9nw53 = gb89aq;return h$yji[gb89aq['replace']('this.', '')];
      };return rv67$;
    }, ykjhi['EnvConfig'] = null, ykjhi['window'] = null, ykjhi['_preCreateElement'] = null, ykjhi['_inited'] = ![], ykjhi['wxRequest'] = null, ykjhi['systemInfo'] = null, ykjhi['version'] = '0.0.1', ykjhi['isZiYu'] = ![], ykjhi['isPosMsgYu'] = ![], ykjhi['parseXMLFromString'] = function (v2z70r) {
      var yisjhk, z2w35;v2z70r = v2z70r['replace'](/>\s+</g, '><');try {
        yisjhk = new window['Parser']['DOMParser']()['parseFromString'](v2z70r, 'text/xml');
      } catch (abgdcq) {
        throw '需要引入xml解析库文件';
      }return yisjhk;
    }, ykjhi['idx'] = 0x1, ykjhi;
  }(),
      sl4hpk = function () {
    function rz370() {}zw32r(rz370, 'laya.wx.mini.MiniImage');var xtu_fl = rz370['prototype'];return xtu_fl['_loadImage'] = function (e539wn) {
      var neq89b = this,
          v$r617 = ![];e539wn['indexOf']('layaNativeDir/') == -0x1 && (v$r617 = !![], e539wn = ihjk['formatURL'](e539wn));if (!txlufp['getFileInfo'](e539wn)) {
        if (e539wn['indexOf']('http://') != -0x1 || e539wn['indexOf']('https://') != -0x1) txlufp['downImg'](e539wn, new v$i61y(rz370, rz370['onDownImgCallBack'], [e539wn, neq89b]), e539wn);else rz370['onCreateImage'](e539wn, neq89b, !![]);
      } else rz370['onCreateImage'](e539wn, neq89b, !v$r617);
    }, rz370['onDownImgCallBack'] = function (iyhjk$, vr7, y1j$6) {
      if (!y1j$6) rz370['onCreateImage'](iyhjk$, vr7);else vr7['onError'](null);
    }, rz370['onCreateImage'] = function (vyi, r$6v, ufxt_) {
      ufxt_ === void 0x0 && (ufxt_ = ![]);var spxtl4;if (!ufxt_) {
        var tpxul = txlufp['getFileInfo'](vyi),
            p4lhts = tpxul['md5'];spxtl4 = txlufp['getFileNativePath'](p4lhts);
      } else spxtl4 = vyi;if (r$6v['imgCache'] == null) r$6v['imgCache'] = {};var dabcg;function rv021() {
        dabcg['onload'] = null, dabcg['onerror'] = null, delete r$6v['imgCache'][vyi];
      };var uxftl = function () {
        rv021(), r$6v['onLoaded'](dabcg);
      },
          m_xuf = function () {
        rv021(), r$6v['event']('error', 'Load image failed');
      };r$6v['_type'] == 'nativeimage' ? (dabcg = new r0zw32['window']['Image'](), dabcg['crossOrigin'] = '', dabcg['onload'] = uxftl, dabcg['onerror'] = m_xuf, dabcg['src'] = spxtl4, r$6v['imgCache'][vyi] = dabcg) : new pklsh['create'](spxtl4, { 'onload': uxftl, 'onerror': m_xuf, 'onCreate': function (tl4xs) {
          dabcg = tl4xs, r$6v['imgCache'][vyi] = tl4xs;
        } });
    }, rz370;
  }(),
      nw0 = function () {
    function z320r() {}return zw32r(z320r, 'laya.wx.mini.MiniInput'), z320r['_createInputElement'] = function () {
      r7v61$['_initInput'](r7v61$['area'] = r0zw32['createElement']('textarea')), r7v61$['_initInput'](r7v61$['input'] = r0zw32['createElement']('input')), r7v61$['inputContainer'] = r0zw32['createElement']('div'), r7v61$['inputContainer']['style']['position'] = 'absolute', r7v61$['inputContainer']['style']['zIndex'] = 0x186a0, r0zw32['container']['appendChild'](r7v61$['inputContainer']), r7v61$['inputContainer']['setPos'] = function (pl4txu, wn5z) {
        r7v61$['inputContainer']['style']['left'] = pl4txu + 'px', r7v61$['inputContainer']['style']['top'] = wn5z + 'px';
      }, slt4['stage']['on']('resize', null, z320r['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($r176) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xumf_['_soundClass'] = rw, xumf_['_musicClass'] = rw;
    }, z320r['_onStageResize'] = function () {
      var ksp4hj = slt4['stage']['_canvasTransform']['identity']();ksp4hj['scale'](r0zw32['width'] / phs4kj['canvas']['width'] / l4k['getPixelRatio'](), r0zw32['height'] / phs4kj['canvas']['height'] / l4k['getPixelRatio']());
    }, z320r['wxinputFocus'] = function (klhp4) {
      var z5320 = r7v61$['inputElement']['target'];if (z5320 && !z5320['editable']) return;xputfl['window']['wx']['offKeyboardConfirm'](), xputfl['window']['wx']['offKeyboardInput'](), xputfl['window']['wx']['showKeyboard']({ 'defaultValue': z5320['text'], 'maxLength': z5320['maxChars'], 'multiple': z5320['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y6$v7) {}, 'fail': function (tlsh4p) {} }), xputfl['window']['wx']['onKeyboardConfirm'](function (zw2r) {
        var jyi$ = zw2r ? zw2r['value'] : '';z5320['text'] = jyi$, z5320['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xputfl['window']['wx']['onKeyboardInput'](function (cqdag) {
        var rvz27 = cqdag ? cqdag['value'] : '';if (!z5320['multiline']) {
          if (rvz27['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }z5320['text'] = rvz27, z5320['event']('input');
      });
    }, z320r['inputEnter'] = function () {
      r7v61$['inputElement']['target']['focus'] = ![];
    }, z320r['wxinputblur'] = function () {
      z320r['hideKeyboard']();
    }, z320r['hideKeyboard'] = function () {
      xputfl['window']['wx']['offKeyboardConfirm'](), xputfl['window']['wx']['offKeyboardInput'](), xputfl['window']['wx']['hideKeyboard']({ 'success': function (jski) {
          console['log']('隐藏键盘');
        }, 'fail': function (shklp4) {
          console['log']('隐藏键盘出错:' + (shklp4 ? shklp4['errMsg'] : ''));
        } });
    }, z320r;
  }(),
      hs4pkl = function () {
    function ykhj() {}zw32r(ykhj, 'laya.wx.mini.MiniLoader');var lxt_u = ykhj['prototype'];return lxt_u['load'] = function (hpjsk, vr2671, e593nw, r67v2, yi1$) {
      e593nw === void 0x0 && (e593nw = !![]), yi1$ === void 0x0 && (yi1$ = ![]);var hpts4l = this;hpts4l['_url'] = hpjsk;if (hpjsk['indexOf']('data:image') === 0x0) hpts4l['_type'] = vr2671 = 'image';else hpts4l['_type'] = vr2671 || (vr2671 = hpts4l['getTypeFromUrl'](hpjsk));hpts4l['_cache'] = e593nw, hpts4l['_data'] = null;var abqgcd = 'ascii';if (hpjsk['indexOf']('.fnt') != -0x1) abqgcd = 'utf8';else vr2671 == 'arraybuffer' && (abqgcd = '');;var j4phs = e89qn5['getFileExtension'](hpjsk);if (ykhj['_fileTypeArr']['indexOf'](j4phs) != -0x1) xputfl['EnvConfig']['load']['call'](this, hpjsk, vr2671, e593nw, r67v2, yi1$);else {
        if (!txlufp['getFileInfo'](hpjsk)) {
          if (hpjsk['indexOf']('layaNativeDir/') != -0x1) {
            if (xputfl['isZiYu']) {
              var i16y$j = txlufp['ziyuFileData'][hpjsk];hpts4l['onLoaded'](i16y$j);return;
            } else {
              cosnole['log']('read read'), txlufp['read'](hpjsk, abqgcd, new v$i61y(ykhj, ykhj['onReadNativeCallBack'], [abqgcd, hpjsk, vr2671, e593nw, r67v2, yi1$, hpts4l]));return;
            }
          }if (ihjk['rootPath'] == '') var n8eq5 = hpjsk;else n8eq5 = hpjsk['split'](ihjk['rootPath'])[0x0];hpjsk['indexOf']('http://') != -0x1 || hpjsk['indexOf']('https://') != -0x1 ? xputfl['EnvConfig']['load']['call'](hpts4l, hpjsk, vr2671, e593nw, r67v2, yi1$) : txlufp['readFile'](n8eq5, abqgcd, new v$i61y(ykhj, ykhj['onReadNativeCallBack'], [abqgcd, hpjsk, vr2671, e593nw, r67v2, yi1$, hpts4l]), hpjsk);
        } else xputfl['EnvConfig']['load']['call'](this, hpjsk, vr2671, e593nw, r67v2, yi1$);
      }
    }, lxt_u['resMgrLoad'] = function (xumo, vy6i$, qgb9a, shp4tl, n89w5e, gba89, v1$yi) {
      qgb9a === void 0x0 && (qgb9a = 0x0), shp4tl === void 0x0 && (shp4tl = ![]), n89w5e === void 0x0 && (n89w5e = ![]), gba89 === void 0x0 && (gba89 = 0x0), v1$yi === void 0x0 && (v1$yi = 0x3), xumo['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xumo), xputfl['EnvConfig']['resMgrLoad'](xumo, (c8qa, cbq8ag, w30z52) => {
        ykhj['prototype']['resMgrLoadCallBack'](c8qa, cbq8ag, w30z52, vy6i$);
      }, qgb9a, shp4tl, n89w5e, gba89, v1$yi);
    }, lxt_u['resMgrLoadCallBack'] = function (lhs, kyh$j, xtuf_, j6$kiy) {
      console['log']('buff:::', lhs, xtuf_, txlufp['fileNativeDir'] + '///' + txlufp['fileListName']), j6$kiy(lhs, kyh$j, xtuf_);
    }, lxt_u['clearRes'] = function (gabd, n0w3z5) {
      n0w3z5 === void 0x0 && (n0w3z5 = ![]);var qagd = this;qagd['clearRes'](gabd, n0w3z5);var kps4lh = txlufp['getFileInfo'](gabd);if (kps4lh && (gabd['indexOf']('http://') != -0x1 || gabd['indexOf']('https://') != -0x1)) {
        var agb8q = kps4lh['md5'],
            fxu_m = txlufp['getFileNativePath'](agb8q);txlufp['remove'](fxu_m);
      }
    }, ykhj['onReadNativeCallBack'] = function (nq8b9e, e8q59, rwz2, n35w9e, rz0w3, e35nwz, ewzn35, tx_fl, gcqb) {
      n35w9e === void 0x0 && (n35w9e = !![]), e35nwz === void 0x0 && (e35nwz = ![]), tx_fl === void 0x0 && (tx_fl = 0x0);if (!tx_fl) {
        var ikhyj$;if (rwz2 == 'json' || rwz2 == 'atlas') ikhyj$ = xputfl['getJson'](gcqb['data']);else rwz2 == 'xml' ? ikhyj$ = e89qn5['parseXMLFromString'](gcqb['data']) : ikhyj$ = gcqb['data'];ewzn35['onLoaded'](ikhyj$), !xputfl['isZiYu'] && xputfl['isPosMsgYu'] && rwz2 != 'arraybuffer' && wx['postMessage']({ 'url': e8q59, 'data': ikhyj$, 'isLoad': !![] });
      } else tx_fl == 0x1 && xputfl['EnvConfig']['load']['call'](ewzn35, e8q59, rwz2, n35w9e, rz0w3, e35nwz);
    }, gcqbad(ykhj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ykhj;
  }(),
      txlufp = function (w89n5) {
    function _txfu() {
      _txfu['__super']['call'](this);;
    }return zw32r(_txfu, 'laya.wx.mini.MiniFileMgr', w89n5), _txfu['isLoadFile'] = function (bqadcg) {
      return _txfu['_fileTypeArr']['indexOf'](bqadcg) != -0x1 ? !![] : ![];
    }, _txfu['getFileInfo'] = function (h$jiky) {
      var e98qnb = h$jiky['split']('?')[0x0],
          e589w = _txfu['filesListObj'][e98qnb];if (e589w == null) return null;else return e589w;return null;
    }, _txfu['onFileUpdate'] = function (k4shl, fmx) {
      var phts4l = k4shl['split']('/'),
          x4plts = phts4l[phts4l['length'] - 0x1],
          wz30 = _txfu['getFileInfo'](fmx);if (wz30 == null) _txfu['onSaveFile'](fmx, x4plts);else {
        if (wz30['readyUrl'] != fmx) _txfu['remove'](x4plts, fmx);
      }
    }, _txfu['exits'] = function (ji6y$k, q9b8ea) {
      var z302 = _txfu['getFileNativePath'](ji6y$k);_txfu['fs']['getFileInfo']({ 'filePath': z302, 'success': function (mx_fuo) {
          q9b8ea != null && q9b8ea['runWith']([0x0, mx_fuo]);
        }, 'fail': function (vr102) {
          q9b8ea != null && q9b8ea['runWith']([0x1, vr102]);
        } });
    }, _txfu['read'] = function (phslk4, wz052, jkh4, v$yi6) {
      wz052 === void 0x0 && (wz052 = 'ascill'), v$yi6 === void 0x0 && (v$yi6 = '');var jhkisy;v$yi6 != '' ? jhkisy = _txfu['getFileNativePath'](phslk4) : jhkisy = phslk4, _txfu['fs']['readFile']({ 'filePath': jhkisy, 'encoding': wz052, 'success': function (n59e8) {
          jkh4 != null && jkh4['runWith']([0x0, n59e8]);
        }, 'fail': function (y$ikhj) {
          if (y$ikhj && v$yi6 != '') _txfu['down'](v$yi6, wz052, jkh4, v$yi6);else jkh4 != null && jkh4['runWith']([0x1]);
        } });
    }, _txfu['readNativeFile'] = function (pksl4, bg89qa) {
      _txfu['fs']['readFile']({ 'filePath': pksl4, 'encoding': '', 'success': function (zv0r2) {
          bg89qa != null && bg89qa['runWith']([0x0]);
        }, 'fail': function (v1r) {
          bg89qa != null && bg89qa['runWith']([0x1]);
        } });
    }, _txfu['down'] = function (e8aqb9, $i1j6, r7v16$, r$v71) {
      $i1j6 === void 0x0 && ($i1j6 = 'ascill'), r$v71 === void 0x0 && (r$v71 = '');var xutfl = _txfu['getFileNativePath'](r$v71),
          qn9e5 = _txfu['wxdown']({ 'url': e8aqb9, 'filePath': xutfl, 'success': function (wzne5) {
          if (wzne5['statusCode'] === 0xc8) _txfu['readFile'](wzne5['filePath'], $i1j6, r7v16$, r$v71);
        }, 'fail': function (kih$y) {
          r7v16$ != null && r7v16$['runWith']([0x1, kih$y]);
        } });qn9e5['onProgressUpdate'](function (pftux) {
        r7v16$ != null && r7v16$['runWith']([0x2, pftux['progress']]);
      });
    }, _txfu['readFile'] = function (i1y, ou_m, q89e, qn8eb) {
      ou_m === void 0x0 && (ou_m = 'ascill'), qn8eb === void 0x0 && (qn8eb = ''), _txfu['fs']['readFile']({ 'filePath': i1y, 'encoding': ou_m, 'success': function (n3w50) {
          if (i1y['indexOf']('http://') != -0x1 || i1y['indexOf']('https://') != -0x1) _txfu['onFileUpdate'](i1y, qn8eb);q89e != null && q89e['runWith']([0x0, n3w50]);
        }, 'fail': function (nw895e) {
          if (nw895e) q89e != null && q89e['runWith']([0x1, nw895e]);
        } });
    }, _txfu['downImg'] = function (j$ik6y, f_omx, w5n3e9) {
      w5n3e9 === void 0x0 && (w5n3e9 = '');var hyks = _txfu['wxdown']({ 'url': j$ik6y, 'success': function (v72rz0) {
          v72rz0['statusCode'] === 0xc8 && _txfu['copyFile'](v72rz0['tempFilePath'], w5n3e9, f_omx);
        }, 'fail': function (jihysk) {
          f_omx != null && f_omx['runWith']([0x1, jihysk]);
        } });
    }, _txfu['copyFile'] = function (z2wr, plxst4, tflpux) {
      var fo_mxu = z2wr['split']('/'),
          eqa9b = fo_mxu[fo_mxu['length'] - 0x1],
          zenw5 = plxst4['split']('?')[0x0],
          acqgbd = _txfu['getFileInfo'](plxst4),
          ux4tlp = _txfu['getFileNativePath'](eqa9b);_txfu['fs']['copyFile']({ 'srcPath': z2wr, 'destPath': ux4tlp, 'success': function (gb9aq) {
          if (!acqgbd) _txfu['onSaveFile'](plxst4, eqa9b), tflpux != null && tflpux['runWith']([0x0]);else {
            if (acqgbd['readyUrl'] != plxst4) _txfu['remove'](eqa9b, plxst4, tflpux);
          }
        }, 'fail': function (r0vz72) {
          tflpux != null && tflpux['runWith']([0x1, r0vz72]);
        } });
    }, _txfu['getFileNativePath'] = function (wne395) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wne395;
    }, _txfu['remove'] = function (xlt4up, xut4l, y1$v7) {
      xut4l === void 0x0 && (xut4l = '');var u_tlx = _txfu['getFileInfo'](xut4l),
          r2w0z3 = _txfu['getFileNativePath'](u_tlx['md5']);slt4['loader']['clearRes'](u_tlx['readyUrl']), _txfu['fs']['unlink']({ 'filePath': r2w0z3, 'success': function (fo_x) {
          if (xut4l != '') _txfu['onSaveFile'](xut4l, xlt4up);y1$v7 != null && y1$v7['runWith']([0x0]);
        }, 'fail': function (z2307) {} });
    }, _txfu['onSaveFile'] = function (cbadq, kshl4) {
      var jph4ks = cbadq['split']('?')[0x0];_txfu['filesListObj'][jph4ks] = { 'md5': kshl4, 'readyUrl': cbadq }, _txfu['fs']['writeFile']({ 'filePath': _txfu['fileNativeDir'] + '/' + _txfu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_txfu['filesListObj']), 'success': function (qdcagb) {
          console['log']('写入测试测试成功：', qdcagb);
        }, 'fail': function (flup) {
          console['log']('写入测试测试失败：', flup);
        } });
    }, _txfu['existDir'] = function (pxs4t, k4plsh) {
      _txfu['fs']['mkdir']({ 'dirPath': pxs4t, 'success': function (mftux) {
          k4plsh != null && k4plsh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (v$7y6) {
          if (v$7y6['errMsg']['indexOf']('file already exists') != -0x1) _txfu['readSync'](_txfu['fileListName'], 'utf8', k4plsh);else k4plsh != null && k4plsh['runWith']([0x1, v$7y6]);
        } });
    }, _txfu['readSync'] = function (stlh, v7021, y6i1$j, r0z72) {
      v7021 === void 0x0 && (v7021 = 'ascill'), r0z72 === void 0x0 && (r0z72 = '');var xomuf_ = _txfu['getFileNativePath'](stlh),
          _txfl;try {
        _txfl = _txfu['fs']['readFileSync'](xomuf_), y6i1$j != null && y6i1$j['runWith']([0x0, { 'data': _txfl }]);
      } catch (kisj4) {
        y6i1$j != null && y6i1$j['runWith']([0x1]);
      }
    }, _txfu['readCache'] = function () {}, _txfu['writeCache'] = function (ptl4x) {
      var lxtf_ = readyUrl['split']('?')[0x0];_txfu['filesListObj'][lxtf_] = { 'md5': md5Name, 'readyUrl': readyUrl }, _txfu['fs']['writeFile']({ 'filePath': _txfu['fileNativeDir'] + '/' + _txfu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_txfu['filesListObj']), 'success': function (w8e59) {}, 'fail': function (ltxf) {} });
    }, _txfu['setNativeFileDir'] = function (shij4k) {
      _txfu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + shij4k;
    }, _txfu['filesListObj'] = {}, _txfu['fileNativeDir'] = null, _txfu['fileListName'] = 'layaairfiles.txt', _txfu['ziyuFileData'] = {}, gcqbad(_txfu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _txfu;
  }(kis4j),
      rw = function (sk4jih) {
    function skh4l() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], skh4l['__super']['call'](this), this['_sound'] = skh4l['_createSound']();
    }zw32r(skh4l, 'laya.wx.mini.MiniSound', sk4jih);var xt_fum = skh4l['prototype'];return xt_fum['load'] = function (r0w32z) {
      var o_um = this;r0w32z = ihjk['formatURL'](r0w32z), this['url'] = r0w32z;if (skh4l['_audioCache'][r0w32z]) {
        this['event']('complete');return;
      }function acg() {
        if (skh4l['_null'] != undefined) o_um['_sound']['onCanplay'](skh4l['_null']), o_um['_sound']['onError'](skh4l['_null']);else try {
          o_um['_sound']['onCanplay'](null), o_um['_sound']['onError'](null), skh4l['_null'] = null;
        } catch (spl4xt) {
          console['warn']('[wxmini] _clearSound:' + spl4xt), o_um['_sound']['onCanplay'](q8ca), o_um['_sound']['onError'](q8ca), skh4l['_null'] = q8ca;
        }
      }function bgcdqa() {
        acg(), tplh['loaded'] = !![], tplh['event']('complete'), skh4l['_audioCache'][tplh['url']] = tplh;
      }function gcq8ba(htsl4) {
        console['error']('errCode=' + htsl4['errCode'] + '  errMsg=' + htsl4['errMsg']), acg(), tplh['event']('error');
      }function q8ca() {}this['_sound']['onCanplay'](bgcdqa), this['_sound']['onError'](gcq8ba), this['_sound']['src'] = r0w32z;var tplh = this;
    }, xt_fum['play'] = function (g8qbca, m_fut) {
      g8qbca === void 0x0 && (g8qbca = 0x0), m_fut === void 0x0 && (m_fut = 0x0);var _utl;if (this['url'] == xumf_['_tMusic']) {
        if (!skh4l['_musicAudio']) skh4l['_musicAudio'] = skh4l['_createSound']();_utl = skh4l['_musicAudio'];
      } else _utl = skh4l['_createSound']();_utl['src'] = this['url'];var h4jsi = new ne3wz5(_utl);return h4jsi['url'] = this['url'], h4jsi['loops'] = m_fut, h4jsi['startTime'] = g8qbca, h4jsi['play'](), xumf_['addChannel'](h4jsi), h4jsi;
    }, xt_fum['dispose'] = function () {
      var hjsk = skh4l['_audioCache'][this['url']];hjsk && (hjsk['src'] = '', delete skh4l['_audioCache'][this['url']]);
    }, acgbqd(0x0, xt_fum, 'duration', function () {
      return this['_sound']['duration'];
    }), skh4l['_createSound'] = function () {
      return skh4l['_id']++, xputfl['window']['wx']['createInnerAudioContext']();
    }, skh4l['_musicAudio'] = null, skh4l['_id'] = 0x0, skh4l['_audioCache'] = {}, skh4l['_null'] = undefined, skh4l;
  }(kis4j),
      ne3wz5 = function (_tluf) {
    function v1y76(z5enw3) {
      this['_audio'] = null, this['_onEnd'] = null, v1y76['__super']['call'](this), this['_audio'] = z5enw3, this['_onEnd'] = e89qn5['bind'](this['__onEnd'], this), z5enw3['onEnded'](this['_onEnd']);
    }zw32r(v1y76, 'laya.wx.mini.MiniSoundChannel', _tluf);var wz2r = v1y76['prototype'];return wz2r['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (slt4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wz2r['__onNull'] = function () {}, wz2r['play'] = function () {
      this['isStopped'] = ![], xumf_['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, wz2r['stop'] = function () {
      this['isStopped'] = !![], xumf_['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (v1y76['_null'] != undefined) this['_audio']['onEnded'](v1y76['_null']);else try {
        this['_audio']['onEnded'](null), v1y76['_null'] = null;
      } catch (wn958) {
        console['warn']('[wxmini] stop:' + wn958), this['_audio']['onEnded'](e89qn5['bind'](this['__onNull'], this)), v1y76['_null'] = e89qn5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, wz2r['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, wz2r['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xumf_['addChannel'](this), this['_audio']['play']();
    }, acgbqd(0x0, wz2r, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), acgbqd(0x0, wz2r, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), acgbqd(0x0, wz2r, 'volume', function () {
      return 0x1;
    }, function (lxtu4p) {}), v1y76['_null'] = undefined, v1y76;
  }(lp4x);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _ufxtl in Laya) {
    var n305zw = Laya[_ufxtl];n305zw && n305zw['__isclass'] && (exports[_ufxtl] = n305zw);
  }
});