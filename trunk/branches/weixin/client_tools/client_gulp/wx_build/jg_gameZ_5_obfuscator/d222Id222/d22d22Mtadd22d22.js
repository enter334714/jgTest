var F = wx.$D;
(function (window, document, cseu0) {
  var e3u0cs = cseu0['un'],
      m5aogl = cseu0['uns'],
      zli_m = cseu0['static'],
      n28h = cseu0['class'],
      ecus0 = cseu0['getset'],
      qvkxw = cseu0['__newvec'],
      u3c0b = laya['utils']['Browser'],
      u9b3f = laya['events']['Event'],
      wj6qxk = laya['events']['EventDispatcher'],
      skwtv = laya['resource']['HTMLImage'],
      n1$h28 = laya['utils']['Handler'],
      agkj = laya['display']['Input'],
      iz2_rh = laya['net']['Loader'],
      ec3p = laya['maths']['Matrix'],
      bpcu30 = laya['renders']['Render'],
      cb30u = laya['utils']['RunDriver'],
      hr182 = laya['media']['Sound'],
      qetwsv = laya['media']['SoundChannel'],
      xj6kqw = laya['media']['SoundManager'],
      lzi_mo = laya['display']['Stage'],
      zh1rn = laya['net']['URL'],
      r1n8 = laya['utils']['Utils'],
      ubp3c0 = function () {
    function xk6jaw() {}return n28h(xk6jaw, 'laya.wx.mini.MiniAdpter'), xk6jaw['getJson'] = function (rh128) {
      return JSON['parse'](rh128);
    }, xk6jaw['init'] = function (pu3cb, _zlrio) {
      pu3cb === void 0x0 && (pu3cb = ![]), _zlrio === void 0x0 && (_zlrio = ![]);if (xk6jaw['_inited']) return;xk6jaw['window'] = window;if (xk6jaw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xk6jaw['_inited'] = !![], xk6jaw['isZiYu'] = _zlrio, xk6jaw['isPosMsgYu'] = pu3cb, xk6jaw['EnvConfig'] = {}, !xk6jaw['isZiYu'] && (i_m5o['setNativeFileDir']('/layaairGame'), i_m5o['existDir'](i_m5o['fileNativeDir'], n1$h28['create'](xk6jaw, xk6jaw['onMkdirCallBack']))), xk6jaw['window']['focus'] = function () {}, cseu0['getUrlPath'] = function () {}, xk6jaw['window']['logtime'] = function (_h2izr) {}, xk6jaw['window']['alertTimeLog'] = function (l5g_) {}, xk6jaw['window']['resetShareInfo'] = function () {}, xk6jaw['window']['CanvasRenderingContext2D'] = function () {}, xk6jaw['window']['CanvasRenderingContext2D']['prototype'] = xk6jaw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xk6jaw['window']['document']['body']['appendChild'] = function () {}, xk6jaw['EnvConfig']['pixelRatioInt'] = 0x0, cb30u['getPixelRatio'] = xk6jaw['pixelRatio'], xk6jaw['_preCreateElement'] = u3c0b['createElement'], u3c0b['createElement'] = xk6jaw['createElement'], cb30u['createShaderCondition'] = xk6jaw['createShaderCondition'], r1n8['parseXMLFromString'] = xk6jaw['parseXMLFromString'], agkj['_createInputElement'] = c3up0b['_createInputElement'], xk6jaw['EnvConfig']['load'] = iz2_rh['prototype']['load'], iz2_rh['prototype']['load'] = nzr12h['prototype']['load'], xk6jaw['isZiYu'] && pu3cb && wx['onMessage'](function (bucp39) {
        bucp39['isLoad'] && (i_m5o['ziyuFileData'][bucp39['url']] = bucp39['data']);
      });
    }, xk6jaw['onMkdirCallBack'] = function (w6qxv, qesv) {
      if (!w6qxv) i_m5o['filesListObj'] = JSON['parse'](qesv['data']);
    }, xk6jaw['pixelRatio'] = function () {
      if (!xk6jaw['EnvConfig']['pixelRatioInt']) try {
        var oa5gj = wx['getSystemInfoSync']();return xk6jaw['EnvConfig']['pixelRatioInt'] = oa5gj['pixelRatio'], oa5gj = oa5gj, oa5gj['pixelRatio'];
      } catch (tvqesw) {}return xk6jaw['EnvConfig']['pixelRatioInt'];
    }, xk6jaw['createElement'] = function (go) {
      if (go == 'canvas') {
        var evq;return xk6jaw['idx'] == 0x1 ? xk6jaw['isZiYu'] ? (evq = sharedCanvas, evq['style'] = {}) : evq = window['canvas'] : evq = window['wx']['createCanvas'](), xk6jaw['idx']++, evq;
      } else {
        if (go == 'textarea' || go == 'input') return xk6jaw['onCreateInput'](go);else {
          if (go == 'div') {
            var cupb93 = xk6jaw['_preCreateElement'](go);return cupb93['contains'] = function (ucs30) {
              return null;
            }, cupb93['removeChild'] = function (s0tce3) {}, cupb93;
          } else return xk6jaw['_preCreateElement'](go);
        }
      }
    }, xk6jaw['onCreateInput'] = function (t6qkw) {
      var kx6wja = xk6jaw['_preCreateElement'](t6qkw);return kx6wja['focus'] = c3up0b['wxinputFocus'], kx6wja['blur'] = c3up0b['wxinputblur'], kx6wja['style'] = {}, kx6wja['value'] = 0x0, kx6wja['parentElement'] = {}, kx6wja['placeholder'] = {}, kx6wja['type'] = {}, kx6wja['setColor'] = function (r1h2z) {}, kx6wja['setType'] = function (i_m5) {}, kx6wja['setFontFace'] = function (buf3) {}, kx6wja['addEventListener'] = function (eu3s0c) {}, kx6wja['contains'] = function (nhzr21) {
        return null;
      }, kx6wja['removeChild'] = function (o5glma) {}, kx6wja;
    }, xk6jaw['createShaderCondition'] = function (y1$8h) {
      var ewtsq = this,
          qsevw = function () {
        var $1hn82 = y1$8h;return ewtsq[y1$8h['replace']('this.', '')];
      };return qsevw;
    }, xk6jaw['EnvConfig'] = null, xk6jaw['window'] = null, xk6jaw['_preCreateElement'] = null, xk6jaw['_inited'] = ![], xk6jaw['wxRequest'] = null, xk6jaw['systemInfo'] = null, xk6jaw['version'] = '0.0.1', xk6jaw['isZiYu'] = ![], xk6jaw['isPosMsgYu'] = ![], xk6jaw['parseXMLFromString'] = function (z_l2) {
      var h8ny1, vtecs;z_l2 = z_l2['replace'](/>\s+</g, '><');try {
        h8ny1 = new window['Parser']['DOMParser']()['parseFromString'](z_l2, 'text/xml');
      } catch (z1rhi) {
        throw '需要引入xml解析库文件';
      }return h8ny1;
    }, xk6jaw['idx'] = 0x1, xk6jaw;
  }(),
      a65 = function () {
    function _l2zri() {}n28h(_l2zri, 'laya.wx.mini.MiniImage');var oi_lz = _l2zri['prototype'];return oi_lz['_loadImage'] = function (g6akx) {
      var _iorlz = this,
          ajg5o = ![];g6akx['indexOf']('layaNativeDir/') == -0x1 && (ajg5o = !![], g6akx = zh1rn['formatURL'](g6akx));if (!i_m5o['getFileInfo'](g6akx)) {
        if (g6akx['indexOf']('http://') != -0x1 || g6akx['indexOf']('https://') != -0x1) i_m5o['downImg'](g6akx, new n1$h28(_l2zri, _l2zri['onDownImgCallBack'], [g6akx, _iorlz]), g6akx);else _l2zri['onCreateImage'](g6akx, _iorlz, !![]);
      } else _l2zri['onCreateImage'](g6akx, _iorlz, !ajg5o);
    }, _l2zri['onDownImgCallBack'] = function (_moil, es30c, v0seqt) {
      if (!v0seqt) _l2zri['onCreateImage'](_moil, es30c);else es30c['onError'](null);
    }, _l2zri['onCreateImage'] = function (rzli, seqvw, olm_iz) {
      olm_iz === void 0x0 && (olm_iz = ![]);var oam5gl;if (!olm_iz) {
        var ml5oag = i_m5o['getFileInfo'](rzli),
            izh12 = ml5oag['md5'];oam5gl = i_m5o['getFileNativePath'](izh12);
      } else oam5gl = rzli;if (seqvw['imgCache'] == null) seqvw['imgCache'] = {};var qk6wvt;function _lg5om() {
        qk6wvt['onload'] = null, qk6wvt['onerror'] = null, delete seqvw['imgCache'][rzli];
      };var y$1h8n = function () {
        _lg5om(), seqvw['onLoaded'](qk6wvt);
      },
          up3 = function () {
        _lg5om(), seqvw['event']('error', 'Load image failed');
      };seqvw['_type'] == 'nativeimage' ? (qk6wvt = new u3c0b['window']['Image'](), qk6wvt['crossOrigin'] = '', qk6wvt['onload'] = y$1h8n, qk6wvt['onerror'] = up3, qk6wvt['src'] = oam5gl, seqvw['imgCache'][rzli] = qk6wvt) : new skwtv['create'](oam5gl, { 'onload': y$1h8n, 'onerror': up3, 'onCreate': function (kgxa) {
          qk6wvt = kgxa, seqvw['imgCache'][rzli] = kgxa;
        } });
    }, _l2zri;
  }(),
      c3up0b = function () {
    function ri2_zl() {}return n28h(ri2_zl, 'laya.wx.mini.MiniInput'), ri2_zl['_createInputElement'] = function () {
      agkj['_initInput'](agkj['area'] = u3c0b['createElement']('textarea')), agkj['_initInput'](agkj['input'] = u3c0b['createElement']('input')), agkj['inputContainer'] = u3c0b['createElement']('div'), agkj['inputContainer']['style']['position'] = 'absolute', agkj['inputContainer']['style']['zIndex'] = 0x186a0, u3c0b['container']['appendChild'](agkj['inputContainer']), agkj['inputContainer']['setPos'] = function (qvtswe, omlz) {
        agkj['inputContainer']['style']['left'] = qvtswe + 'px', agkj['inputContainer']['style']['top'] = omlz + 'px';
      }, cseu0['stage']['on']('resize', null, ri2_zl['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hn$2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xj6kqw['_soundClass'] = xa65j, xj6kqw['_musicClass'] = xa65j;
    }, ri2_zl['_onStageResize'] = function () {
      var sqtv0 = cseu0['stage']['_canvasTransform']['identity']();sqtv0['scale'](u3c0b['width'] / bpcu30['canvas']['width'] / cb30u['getPixelRatio'](), u3c0b['height'] / bpcu30['canvas']['height'] / cb30u['getPixelRatio']());
    }, ri2_zl['wxinputFocus'] = function (z2h1) {
      var i_lmzo = agkj['inputElement']['target'];if (i_lmzo && !i_lmzo['editable']) return;ubp3c0['window']['wx']['offKeyboardConfirm'](), ubp3c0['window']['wx']['offKeyboardInput'](), ubp3c0['window']['wx']['showKeyboard']({ 'defaultValue': i_lmzo['text'], 'maxLength': i_lmzo['maxChars'], 'multiple': i_lmzo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lg_5o) {}, 'fail': function (fub7p) {} }), ubp3c0['window']['wx']['onKeyboardConfirm'](function (z2hir) {
        var kwsvtq = z2hir ? z2hir['value'] : '';i_lmzo['text'] = kwsvtq, i_lmzo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ubp3c0['window']['wx']['onKeyboardInput'](function (ect03) {
        var z_oilr = ect03 ? ect03['value'] : '';if (!i_lmzo['multiline']) {
          if (z_oilr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }i_lmzo['text'] = z_oilr, i_lmzo['event']('input');
      });
    }, ri2_zl['inputEnter'] = function () {
      agkj['inputElement']['target']['focus'] = ![];
    }, ri2_zl['wxinputblur'] = function () {
      ri2_zl['hideKeyboard']();
    }, ri2_zl['hideKeyboard'] = function () {
      ubp3c0['window']['wx']['offKeyboardConfirm'](), ubp3c0['window']['wx']['offKeyboardInput'](), ubp3c0['window']['wx']['hideKeyboard']({ 'success': function (pc93ub) {
          console['log']('隐藏键盘');
        }, 'fail': function (tvqksw) {
          console['log']('隐藏键盘出错:' + (tvqksw ? tvqksw['errMsg'] : ''));
        } });
    }, ri2_zl;
  }(),
      nzr12h = function () {
    function m5o_il() {}n28h(m5o_il, 'laya.wx.mini.MiniLoader');var j5mx = m5o_il['prototype'];return j5mx['load'] = function (c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t) {
      ajxw6k === void 0x0 && (ajxw6k = !![]), qvkw6t === void 0x0 && (qvkw6t = ![]);var fb3 = this;fb3['_url'] = c3s0ue;if (c3s0ue['indexOf']('data:image') === 0x0) fb3['_type'] = mgo5aj = 'image';else fb3['_type'] = mgo5aj || (mgo5aj = fb3['getTypeFromUrl'](c3s0ue));fb3['_cache'] = ajxw6k, fb3['_data'] = null;var p79uf = 'ascii';if (c3s0ue['indexOf']('.fnt') != -0x1) p79uf = 'utf8';else mgo5aj == 'arraybuffer' && (p79uf = '');;var ajgx5m = r1n8['getFileExtension'](c3s0ue);if (m5o_il['_fileTypeArr']['indexOf'](ajgx5m) != -0x1) ubp3c0['EnvConfig']['load']['call'](this, c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t);else {
        if (!i_m5o['getFileInfo'](c3s0ue)) {
          if (c3s0ue['indexOf']('layaNativeDir/') != -0x1) {
            if (ubp3c0['isZiYu']) {
              var i5lm_o = i_m5o['ziyuFileData'][c3s0ue];fb3['onLoaded'](i5lm_o);return;
            } else {
              cosnole['log']('read read'), i_m5o['read'](c3s0ue, p79uf, new n1$h28(m5o_il, m5o_il['onReadNativeCallBack'], [p79uf, c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t, fb3]));return;
            }
          }if (zh1rn['rootPath'] == '') var b9p3u = c3s0ue;else b9p3u = c3s0ue['split'](zh1rn['rootPath'])[0x0];c3s0ue['indexOf']('http://') != -0x1 || c3s0ue['indexOf']('https://') != -0x1 ? ubp3c0['EnvConfig']['load']['call'](fb3, c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t) : i_m5o['readFile'](b9p3u, p79uf, new n1$h28(m5o_il, m5o_il['onReadNativeCallBack'], [p79uf, c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t, fb3]), c3s0ue);
        } else ubp3c0['EnvConfig']['load']['call'](this, c3s0ue, mgo5aj, ajxw6k, h2riz1, qvkw6t);
      }
    }, j5mx['resMgrLoad'] = function (eq0st, gxmj, l5i_mo, lomg5a, oizm, rzoi_l, p30cue) {
      l5i_mo === void 0x0 && (l5i_mo = 0x0), lomg5a === void 0x0 && (lomg5a = ![]), oizm === void 0x0 && (oizm = ![]), rzoi_l === void 0x0 && (rzoi_l = 0x0), p30cue === void 0x0 && (p30cue = 0x3), eq0st['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', eq0st), ubp3c0['EnvConfig']['resMgrLoad'](eq0st, (mla, cs0vte, tk6wq) => {
        m5o_il['prototype']['resMgrLoadCallBack'](mla, cs0vte, tk6wq, gxmj);
      }, l5i_mo, lomg5a, oizm, rzoi_l, p30cue);
    }, j5mx['resMgrLoadCallBack'] = function (p0ceu, i_l5o, g5am, _2lirz) {
      console['log']('buff:::', p0ceu, g5am, i_m5o['fileNativeDir'] + '///' + i_m5o['fileListName']), _2lirz(p0ceu, i_l5o, g5am);
    }, j5mx['clearRes'] = function (tv6qwk, i_mz) {
      i_mz === void 0x0 && (i_mz = ![]);var qwsetv = this;qwsetv['clearRes'](tv6qwk, i_mz);var zrl_io = i_m5o['getFileInfo'](tv6qwk);if (zrl_io && (tv6qwk['indexOf']('http://') != -0x1 || tv6qwk['indexOf']('https://') != -0x1)) {
        var gmalo = zrl_io['md5'],
            xjwk6 = i_m5o['getFileNativePath'](gmalo);i_m5o['remove'](xjwk6);
      }
    }, m5o_il['onReadNativeCallBack'] = function (n$81, yh18$n, n2h81, zh1r2i, og5mla, stc30e, _miolz, bfpu79, tvsqe) {
      zh1r2i === void 0x0 && (zh1r2i = !![]), stc30e === void 0x0 && (stc30e = ![]), bfpu79 === void 0x0 && (bfpu79 = 0x0);if (!bfpu79) {
        var cvest0;if (n2h81 == 'json' || n2h81 == 'atlas') cvest0 = ubp3c0['getJson'](tvsqe['data']);else n2h81 == 'xml' ? cvest0 = r1n8['parseXMLFromString'](tvsqe['data']) : cvest0 = tvsqe['data'];_miolz['onLoaded'](cvest0), !ubp3c0['isZiYu'] && ubp3c0['isPosMsgYu'] && n2h81 != 'arraybuffer' && wx['postMessage']({ 'url': yh18$n, 'data': cvest0, 'isLoad': !![] });
      } else bfpu79 == 0x1 && ubp3c0['EnvConfig']['load']['call'](_miolz, yh18$n, n2h81, zh1r2i, og5mla, stc30e);
    }, zli_m(m5o_il, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), m5o_il;
  }(),
      i_m5o = function (qevt0) {
    function uf7b9() {
      uf7b9['__super']['call'](this);;
    }return n28h(uf7b9, 'laya.wx.mini.MiniFileMgr', qevt0), uf7b9['isLoadFile'] = function (cu03pb) {
      return uf7b9['_fileTypeArr']['indexOf'](cu03pb) != -0x1 ? !![] : ![];
    }, uf7b9['getFileInfo'] = function (vwkqt) {
      var ao5lg = vwkqt['split']('?')[0x0],
          kwjq = uf7b9['filesListObj'][ao5lg];if (kwjq == null) return null;else return kwjq;return null;
    }, uf7b9['onFileUpdate'] = function (iz_ol, s30uec) {
      var b30upc = iz_ol['split']('/'),
          oimz_ = b30upc[b30upc['length'] - 0x1],
          vqkwt = uf7b9['getFileInfo'](s30uec);if (vqkwt == null) uf7b9['onSaveFile'](s30uec, oimz_);else {
        if (vqkwt['readyUrl'] != s30uec) uf7b9['remove'](oimz_, s30uec);
      }
    }, uf7b9['exits'] = function (wkt6v, $28hn) {
      var hnzr = uf7b9['getFileNativePath'](wkt6v);uf7b9['fs']['getFileInfo']({ 'filePath': hnzr, 'success': function (g6kxaj) {
          $28hn != null && $28hn['runWith']([0x0, g6kxaj]);
        }, 'fail': function (t3cse) {
          $28hn != null && $28hn['runWith']([0x1, t3cse]);
        } });
    }, uf7b9['read'] = function (et0sc, c3bup9, ucb, a5mgxj) {
      c3bup9 === void 0x0 && (c3bup9 = 'ascill'), a5mgxj === void 0x0 && (a5mgxj = '');var pf79ub;a5mgxj != '' ? pf79ub = uf7b9['getFileNativePath'](et0sc) : pf79ub = et0sc, uf7b9['fs']['readFile']({ 'filePath': pf79ub, 'encoding': c3bup9, 'success': function (eqts0v) {
          ucb != null && ucb['runWith']([0x0, eqts0v]);
        }, 'fail': function (jw6ak) {
          if (jw6ak && a5mgxj != '') uf7b9['down'](a5mgxj, c3bup9, ucb, a5mgxj);else ucb != null && ucb['runWith']([0x1]);
        } });
    }, uf7b9['readNativeFile'] = function (alg5m, wvsqe) {
      uf7b9['fs']['readFile']({ 'filePath': alg5m, 'encoding': '', 'success': function (g_ol5m) {
          wvsqe != null && wvsqe['runWith']([0x0]);
        }, 'fail': function (teq0vs) {
          wvsqe != null && wvsqe['runWith']([0x1]);
        } });
    }, uf7b9['down'] = function (hyn$1, hr18, bp7uf9, qwk6v) {
      hr18 === void 0x0 && (hr18 = 'ascill'), qwk6v === void 0x0 && (qwk6v = '');var bcu30 = uf7b9['getFileNativePath'](qwk6v),
          j6ga5 = uf7b9['wxdown']({ 'url': hyn$1, 'filePath': bcu30, 'success': function (z_h2r) {
          if (z_h2r['statusCode'] === 0xc8) uf7b9['readFile'](z_h2r['filePath'], hr18, bp7uf9, qwk6v);
        }, 'fail': function (ufp39b) {
          bp7uf9 != null && bp7uf9['runWith']([0x1, ufp39b]);
        } });j6ga5['onProgressUpdate'](function (b9puc) {
        bp7uf9 != null && bp7uf9['runWith']([0x2, b9puc['progress']]);
      });
    }, uf7b9['readFile'] = function (hizr21, mil, vsetwq, l2r_zi) {
      mil === void 0x0 && (mil = 'ascill'), l2r_zi === void 0x0 && (l2r_zi = ''), uf7b9['fs']['readFile']({ 'filePath': hizr21, 'encoding': mil, 'success': function (fp9b4) {
          if (hizr21['indexOf']('http://') != -0x1 || hizr21['indexOf']('https://') != -0x1) uf7b9['onFileUpdate'](hizr21, l2r_zi);vsetwq != null && vsetwq['runWith']([0x0, fp9b4]);
        }, 'fail': function (ax5) {
          if (ax5) vsetwq != null && vsetwq['runWith']([0x1, ax5]);
        } });
    }, uf7b9['downImg'] = function (ziolm, bu39, jxkwq) {
      jxkwq === void 0x0 && (jxkwq = '');var gloam = uf7b9['wxdown']({ 'url': ziolm, 'success': function (moi5l_) {
          moi5l_['statusCode'] === 0xc8 && uf7b9['copyFile'](moi5l_['tempFilePath'], jxkwq, bu39);
        }, 'fail': function (x6qwkj) {
          bu39 != null && bu39['runWith']([0x1, x6qwkj]);
        } });
    }, uf7b9['copyFile'] = function (c0tesv, s0qtev, i_zl) {
      var etvsq = c0tesv['split']('/'),
          xjkg6a = etvsq[etvsq['length'] - 0x1],
          jgm = s0qtev['split']('?')[0x0],
          buf97 = uf7b9['getFileInfo'](s0qtev),
          zrh12 = uf7b9['getFileNativePath'](xjkg6a);uf7b9['fs']['copyFile']({ 'srcPath': c0tesv, 'destPath': zrh12, 'success': function (ri_l2z) {
          if (!buf97) uf7b9['onSaveFile'](s0qtev, xjkg6a), i_zl != null && i_zl['runWith']([0x0]);else {
            if (buf97['readyUrl'] != s0qtev) uf7b9['remove'](xjkg6a, s0qtev, i_zl);
          }
        }, 'fail': function (qevw) {
          i_zl != null && i_zl['runWith']([0x1, qevw]);
        } });
    }, uf7b9['getFileNativePath'] = function (c0bpu3) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + c0bpu3;
    }, uf7b9['remove'] = function (tvqe0, p74, lgmo_) {
      p74 === void 0x0 && (p74 = '');var q6xwkj = uf7b9['getFileInfo'](p74),
          ce3s = uf7b9['getFileNativePath'](q6xwkj['md5']);cseu0['loader']['clearRes'](q6xwkj['readyUrl']), uf7b9['fs']['unlink']({ 'filePath': ce3s, 'success': function (hzi_) {
          if (p74 != '') uf7b9['onSaveFile'](p74, tvqe0);lgmo_ != null && lgmo_['runWith']([0x0]);
        }, 'fail': function (b9f) {} });
    }, uf7b9['onSaveFile'] = function (l5oma, pc0ue3) {
      var wj6 = l5oma['split']('?')[0x0];uf7b9['filesListObj'][wj6] = { 'md5': pc0ue3, 'readyUrl': l5oma }, uf7b9['fs']['writeFile']({ 'filePath': uf7b9['fileNativeDir'] + '/' + uf7b9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](uf7b9['filesListObj']), 'success': function (kga6jx) {
          console['log']('写入测试测试成功：', kga6jx);
        }, 'fail': function (pbc30u) {
          console['log']('写入测试测试失败：', pbc30u);
        } });
    }, uf7b9['existDir'] = function (tvqks, qvwsk) {
      uf7b9['fs']['mkdir']({ 'dirPath': tvqks, 'success': function (iom_lz) {
          qvwsk != null && qvwsk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pf39) {
          if (pf39['errMsg']['indexOf']('file already exists') != -0x1) uf7b9['readSync'](uf7b9['fileListName'], 'utf8', qvwsk);else qvwsk != null && qvwsk['runWith']([0x1, pf39]);
        } });
    }, uf7b9['readSync'] = function (ajgkx6, wjxqk6, k6wvtq, r218n) {
      wjxqk6 === void 0x0 && (wjxqk6 = 'ascill'), r218n === void 0x0 && (r218n = '');var ml_og5 = uf7b9['getFileNativePath'](ajgkx6),
          tes03;try {
        tes03 = uf7b9['fs']['readFileSync'](ml_og5), k6wvtq != null && k6wvtq['runWith']([0x0, { 'data': tes03 }]);
      } catch (ev0s) {
        k6wvtq != null && k6wvtq['runWith']([0x1]);
      }
    }, uf7b9['readCache'] = function () {}, uf7b9['writeCache'] = function (r1n28) {
      var tves = readyUrl['split']('?')[0x0];uf7b9['filesListObj'][tves] = { 'md5': md5Name, 'readyUrl': readyUrl }, uf7b9['fs']['writeFile']({ 'filePath': uf7b9['fileNativeDir'] + '/' + uf7b9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](uf7b9['filesListObj']), 'success': function (vetswq) {}, 'fail': function (vsc0) {} });
    }, uf7b9['setNativeFileDir'] = function (fu97pb) {
      uf7b9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fu97pb;
    }, uf7b9['filesListObj'] = {}, uf7b9['fileNativeDir'] = null, uf7b9['fileListName'] = 'layaairfiles.txt', uf7b9['ziyuFileData'] = {}, zli_m(uf7b9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), uf7b9;
  }(wj6qxk),
      xa65j = function (sc3) {
    function jxg56a() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jxg56a['__super']['call'](this), this['_sound'] = jxg56a['_createSound']();
    }n28h(jxg56a, 'laya.wx.mini.MiniSound', sc3);var xqv6wk = jxg56a['prototype'];return xqv6wk['load'] = function (te3cs) {
      var etsv0 = this;te3cs = zh1rn['formatURL'](te3cs), this['url'] = te3cs;if (jxg56a['_audioCache'][te3cs]) {
        this['event']('complete');return;
      }function n1hr2() {
        if (jxg56a['_null'] != undefined) etsv0['_sound']['onCanplay'](jxg56a['_null']), etsv0['_sound']['onError'](jxg56a['_null']);else try {
          etsv0['_sound']['onCanplay'](null), etsv0['_sound']['onError'](null), jxg56a['_null'] = null;
        } catch (z_ilor) {
          console['warn']('[wxmini] _clearSound:' + z_ilor), etsv0['_sound']['onCanplay'](lz_2i), etsv0['_sound']['onError'](lz_2i), jxg56a['_null'] = lz_2i;
        }
      }function zh12nr() {
        n1hr2(), x6aj['loaded'] = !![], x6aj['event']('complete'), jxg56a['_audioCache'][x6aj['url']] = x6aj;
      }function wtqksv(eucp30) {
        console['error']('errCode=' + eucp30['errCode'] + '  errMsg=' + eucp30['errMsg']), n1hr2(), x6aj['event']('error');
      }function lz_2i() {}this['_sound']['onCanplay'](zh12nr), this['_sound']['onError'](wtqksv), this['_sound']['src'] = te3cs;var x6aj = this;
    }, xqv6wk['play'] = function (wkq6vx, tqsevw) {
      wkq6vx === void 0x0 && (wkq6vx = 0x0), tqsevw === void 0x0 && (tqsevw = 0x0);var esu3c0;if (this['url'] == xj6kqw['_tMusic']) {
        if (!jxg56a['_musicAudio']) jxg56a['_musicAudio'] = jxg56a['_createSound']();esu3c0 = jxg56a['_musicAudio'];
      } else esu3c0 = jxg56a['_createSound']();esu3c0['src'] = this['url'];var kjgx6a = new u30pbc(esu3c0);return kjgx6a['url'] = this['url'], kjgx6a['loops'] = tqsevw, kjgx6a['startTime'] = wkq6vx, kjgx6a['play'](), xj6kqw['addChannel'](kjgx6a), kjgx6a;
    }, xqv6wk['dispose'] = function () {
      var vqt0 = jxg56a['_audioCache'][this['url']];vqt0 && (vqt0['src'] = '', delete jxg56a['_audioCache'][this['url']]);
    }, ecus0(0x0, xqv6wk, 'duration', function () {
      return this['_sound']['duration'];
    }), jxg56a['_createSound'] = function () {
      return jxg56a['_id']++, ubp3c0['window']['wx']['createInnerAudioContext']();
    }, jxg56a['_musicAudio'] = null, jxg56a['_id'] = 0x0, jxg56a['_audioCache'] = {}, jxg56a['_null'] = undefined, jxg56a;
  }(wj6qxk),
      u30pbc = function (b39fup) {
    function et30c(upb93) {
      this['_audio'] = null, this['_onEnd'] = null, et30c['__super']['call'](this), this['_audio'] = upb93, this['_onEnd'] = r1n8['bind'](this['__onEnd'], this), upb93['onEnded'](this['_onEnd']);
    }n28h(et30c, 'laya.wx.mini.MiniSoundChannel', b39fup);var xkwja6 = et30c['prototype'];return xkwja6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cseu0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xkwja6['__onNull'] = function () {}, xkwja6['play'] = function () {
      this['isStopped'] = ![], xj6kqw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, xkwja6['stop'] = function () {
      this['isStopped'] = !![], xj6kqw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (et30c['_null'] != undefined) this['_audio']['onEnded'](et30c['_null']);else try {
        this['_audio']['onEnded'](null), et30c['_null'] = null;
      } catch (l5mi) {
        console['warn']('[wxmini] stop:' + l5mi), this['_audio']['onEnded'](r1n8['bind'](this['__onNull'], this)), et30c['_null'] = r1n8['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, xkwja6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, xkwja6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xj6kqw['addChannel'](this), this['_audio']['play']();
    }, ecus0(0x0, xkwja6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ecus0(0x0, xkwja6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ecus0(0x0, xkwja6, 'volume', function () {
      return 0x1;
    }, function (f3pub9) {}), et30c['_null'] = undefined, et30c;
  }(qetwsv);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var axjk6 in Laya) {
    var ecsu30 = Laya[axjk6];ecsu30 && ecsu30['__isclass'] && (exports[axjk6] = ecsu30);
  }
});