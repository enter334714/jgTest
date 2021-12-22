var M = wx.$T;
(function (window, document, uksjb) {
  var w586 = uksjb['un'],
      oexyq0 = uksjb['uns'],
      q70xoe = uksjb['static'],
      it2lc4 = uksjb['class'],
      d7zfop = uksjb['getset'],
      zpof7 = uksjb['__newvec'],
      wh5y_ = laya['utils']['Browser'],
      d$c9i = laya['events']['Event'],
      njg3b = laya['events']['EventDispatcher'],
      qe7ox0 = laya['resource']['HTMLImage'],
      ksubja = laya['utils']['Handler'],
      jnbgr3 = laya['display']['Input'],
      z0qe = laya['net']['Loader'],
      banrgj = laya['maths']['Matrix'],
      qy0xe = laya['renders']['Render'],
      pv$fz = laya['utils']['RunDriver'],
      hywm_x = laya['media']['Sound'],
      jskarb = laya['media']['SoundChannel'],
      m_w6h = laya['media']['SoundManager'],
      oyq0x = laya['display']['Stage'],
      o7ze0q = laya['net']['URL'],
      _5wm6 = laya['utils']['Utils'],
      wmh_ = function () {
    function w683() {}return it2lc4(w683, 'laya.wx.mini.MiniAdpter'), w683['getJson'] = function (p9fvd) {
      return JSON['parse'](p9fvd);
    }, w683['init'] = function (_ym0hx, icl42) {
      _ym0hx === void 0x0 && (_ym0hx = ![]), icl42 === void 0x0 && (icl42 = ![]);if (w683['_inited']) return;w683['window'] = window;if (w683['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;w683['_inited'] = !![], w683['isZiYu'] = icl42, w683['isPosMsgYu'] = _ym0hx, w683['EnvConfig'] = {}, !w683['isZiYu'] && (c9t24['setNativeFileDir']('/layaairGame'), c9t24['existDir'](c9t24['fileNativeDir'], ksubja['create'](w683, w683['onMkdirCallBack']))), w683['window']['focus'] = function () {}, uksjb['getUrlPath'] = function () {}, w683['window']['logtime'] = function (df9vp) {}, w683['window']['alertTimeLog'] = function (dv$9pi) {}, w683['window']['resetShareInfo'] = function () {}, w683['window']['CanvasRenderingContext2D'] = function () {}, w683['window']['CanvasRenderingContext2D']['prototype'] = w683['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], w683['window']['document']['body']['appendChild'] = function () {}, w683['EnvConfig']['pixelRatioInt'] = 0x0, pv$fz['getPixelRatio'] = w683['pixelRatio'], w683['_preCreateElement'] = wh5y_['createElement'], wh5y_['createElement'] = w683['createElement'], pv$fz['createShaderCondition'] = w683['createShaderCondition'], _5wm6['parseXMLFromString'] = w683['parseXMLFromString'], jnbgr3['_createInputElement'] = h0m_x['_createInputElement'], w683['EnvConfig']['load'] = z0qe['prototype']['load'], z0qe['prototype']['load'] = xhy['prototype']['load'], w683['isZiYu'] && _ym0hx && wx['onMessage'](function (_qexy0) {
        _qexy0['isLoad'] && (c9t24['ziyuFileData'][_qexy0['url']] = _qexy0['data']);
      });
    }, w683['onMkdirCallBack'] = function (jrksb, y5_hm) {
      if (!jrksb) c9t24['filesListObj'] = JSON['parse'](y5_hm['data']);
    }, w683['pixelRatio'] = function () {
      if (!w683['EnvConfig']['pixelRatioInt']) try {
        var grjbk = wx['getSystemInfoSync']();return w683['EnvConfig']['pixelRatioInt'] = grjbk['pixelRatio'], grjbk = grjbk, grjbk['pixelRatio'];
      } catch (ozq0) {}return w683['EnvConfig']['pixelRatioInt'];
    }, w683['createElement'] = function (yxo) {
      if (yxo == 'canvas') {
        var akjbr;return w683['idx'] == 0x1 ? w683['isZiYu'] ? (akjbr = sharedCanvas, akjbr['style'] = {}) : akjbr = window['canvas'] : akjbr = window['wx']['createCanvas'](), w683['idx']++, akjbr;
      } else {
        if (yxo == 'textarea' || yxo == 'input') return w683['onCreateInput'](yxo);else {
          if (yxo == 'div') {
            var vpz = w683['_preCreateElement'](yxo);return vpz['contains'] = function (fvpzd$) {
              return null;
            }, vpz['removeChild'] = function (df$zp) {}, vpz;
          } else return w683['_preCreateElement'](yxo);
        }
      }
    }, w683['onCreateInput'] = function (y0oxqe) {
      var w18h5 = w683['_preCreateElement'](y0oxqe);return w18h5['focus'] = h0m_x['wxinputFocus'], w18h5['blur'] = h0m_x['wxinputblur'], w18h5['style'] = {}, w18h5['value'] = 0x0, w18h5['parentElement'] = {}, w18h5['placeholder'] = {}, w18h5['type'] = {}, w18h5['setColor'] = function (hm_5y) {}, w18h5['setType'] = function (kgbaj) {}, w18h5['setFontFace'] = function (_qe0xy) {}, w18h5['addEventListener'] = function (qyx_0) {}, w18h5['contains'] = function (fvz$) {
        return null;
      }, w18h5['removeChild'] = function (cv$i) {}, w18h5;
    }, w683['createShaderCondition'] = function (v9dip$) {
      var sjr = this,
          v9i = function () {
        var iv$tc9 = v9dip$;return sjr[v9dip$['replace']('this.', '')];
      };return v9i;
    }, w683['EnvConfig'] = null, w683['window'] = null, w683['_preCreateElement'] = null, w683['_inited'] = ![], w683['wxRequest'] = null, w683['systemInfo'] = null, w683['version'] = '0.0.1', w683['isZiYu'] = ![], w683['isPosMsgYu'] = ![], w683['parseXMLFromString'] = function (vc$i) {
      var asbj, i94c2t;vc$i = vc$i['replace'](/>\s+</g, '><');try {
        asbj = new window['Parser']['DOMParser']()['parseFromString'](vc$i, 'text/xml');
      } catch ($df) {
        throw '需要引入xml解析库文件';
      }return asbj;
    }, w683['idx'] = 0x1, w683;
  }(),
      usaj = function () {
    function mwyx_() {}it2lc4(mwyx_, 'laya.wx.mini.MiniImage');var xe70oq = mwyx_['prototype'];return xe70oq['_loadImage'] = function (xy_e) {
      var gr13n = this,
          l4c2ti = ![];xy_e['indexOf']('layaNativeDir/') == -0x1 && (l4c2ti = !![], xy_e = o7ze0q['formatURL'](xy_e));if (!c9t24['getFileInfo'](xy_e)) {
        if (xy_e['indexOf']('http://') != -0x1 || xy_e['indexOf']('https://') != -0x1) c9t24['downImg'](xy_e, new ksubja(mwyx_, mwyx_['onDownImgCallBack'], [xy_e, gr13n]), xy_e);else mwyx_['onCreateImage'](xy_e, gr13n, !![]);
      } else mwyx_['onCreateImage'](xy_e, gr13n, !l4c2ti);
    }, mwyx_['onDownImgCallBack'] = function (cvd9$i, y0xoeq, tcv$9) {
      if (!tcv$9) mwyx_['onCreateImage'](cvd9$i, y0xoeq);else y0xoeq['onError'](null);
    }, mwyx_['onCreateImage'] = function (ezfoq, i9cv, $pivd9) {
      $pivd9 === void 0x0 && ($pivd9 = ![]);var fdv9$;if (!$pivd9) {
        var p$zfd7 = c9t24['getFileInfo'](ezfoq),
            qefo7z = p$zfd7['md5'];fdv9$ = c9t24['getFileNativePath'](qefo7z);
      } else fdv9$ = ezfoq;if (i9cv['imgCache'] == null) i9cv['imgCache'] = {};var yh_xm;function n831() {
        yh_xm['onload'] = null, yh_xm['onerror'] = null, delete i9cv['imgCache'][ezfoq];
      };var yhm_5w = function () {
        n831(), i9cv['onLoaded'](yh_xm);
      },
          ip9v$d = function () {
        n831(), i9cv['event']('error', 'Load image failed');
      };i9cv['_type'] == 'nativeimage' ? (yh_xm = new wh5y_['window']['Image'](), yh_xm['crossOrigin'] = '', yh_xm['onload'] = yhm_5w, yh_xm['onerror'] = ip9v$d, yh_xm['src'] = fdv9$, i9cv['imgCache'][ezfoq] = yh_xm) : new qe7ox0['create'](fdv9$, { 'onload': yhm_5w, 'onerror': ip9v$d, 'onCreate': function (d$v9p) {
          yh_xm = d$v9p, i9cv['imgCache'][ezfoq] = d$v9p;
        } });
    }, mwyx_;
  }(),
      h0m_x = function () {
    function eo7z0q() {}return it2lc4(eo7z0q, 'laya.wx.mini.MiniInput'), eo7z0q['_createInputElement'] = function () {
      jnbgr3['_initInput'](jnbgr3['area'] = wh5y_['createElement']('textarea')), jnbgr3['_initInput'](jnbgr3['input'] = wh5y_['createElement']('input')), jnbgr3['inputContainer'] = wh5y_['createElement']('div'), jnbgr3['inputContainer']['style']['position'] = 'absolute', jnbgr3['inputContainer']['style']['zIndex'] = 0x186a0, wh5y_['container']['appendChild'](jnbgr3['inputContainer']), jnbgr3['inputContainer']['setPos'] = function (brsa, gajnr) {
        jnbgr3['inputContainer']['style']['left'] = brsa + 'px', jnbgr3['inputContainer']['style']['top'] = gajnr + 'px';
      }, uksjb['stage']['on']('resize', null, eo7z0q['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_mh5y) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), m_w6h['_soundClass'] = dfopz, m_w6h['_musicClass'] = dfopz;
    }, eo7z0q['_onStageResize'] = function () {
      var tic2v = uksjb['stage']['_canvasTransform']['identity']();tic2v['scale'](wh5y_['width'] / qy0xe['canvas']['width'] / pv$fz['getPixelRatio'](), wh5y_['height'] / qy0xe['canvas']['height'] / pv$fz['getPixelRatio']());
    }, eo7z0q['wxinputFocus'] = function (rn3gj) {
      var v$dci = jnbgr3['inputElement']['target'];if (v$dci && !v$dci['editable']) return;wmh_['window']['wx']['offKeyboardConfirm'](), wmh_['window']['wx']['offKeyboardInput'](), wmh_['window']['wx']['showKeyboard']({ 'defaultValue': v$dci['text'], 'maxLength': v$dci['maxChars'], 'multiple': v$dci['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (cil24) {}, 'fail': function (xwm_yh) {} }), wmh_['window']['wx']['onKeyboardConfirm'](function (g3jr) {
        var xy_wh = g3jr ? g3jr['value'] : '';v$dci['text'] = xy_wh, v$dci['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wmh_['window']['wx']['onKeyboardInput'](function ($vi9cd) {
        var skajbu = $vi9cd ? $vi9cd['value'] : '';if (!v$dci['multiline']) {
          if (skajbu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v$dci['text'] = skajbu, v$dci['event']('input');
      });
    }, eo7z0q['inputEnter'] = function () {
      jnbgr3['inputElement']['target']['focus'] = ![];
    }, eo7z0q['wxinputblur'] = function () {
      eo7z0q['hideKeyboard']();
    }, eo7z0q['hideKeyboard'] = function () {
      wmh_['window']['wx']['offKeyboardConfirm'](), wmh_['window']['wx']['offKeyboardInput'](), wmh_['window']['wx']['hideKeyboard']({ 'success': function (garjnb) {
          console['log']('隐藏键盘');
        }, 'fail': function (eq0yox) {
          console['log']('隐藏键盘出错:' + (eq0yox ? eq0yox['errMsg'] : ''));
        } });
    }, eo7z0q;
  }(),
      xhy = function () {
    function _mw6h() {}it2lc4(_mw6h, 'laya.wx.mini.MiniLoader');var jkbasr = _mw6h['prototype'];return jkbasr['load'] = function (ng318r, n8316g, n8jr3g, oz7fp, dipv) {
      n8jr3g === void 0x0 && (n8jr3g = !![]), dipv === void 0x0 && (dipv = ![]);var y_xeq0 = this;y_xeq0['_url'] = ng318r;if (ng318r['indexOf']('data:image') === 0x0) y_xeq0['_type'] = n8316g = 'image';else y_xeq0['_type'] = n8316g || (n8316g = y_xeq0['getTypeFromUrl'](ng318r));y_xeq0['_cache'] = n8jr3g, y_xeq0['_data'] = null;var w863 = 'ascii';if (ng318r['indexOf']('.fnt') != -0x1) w863 = 'utf8';else n8316g == 'arraybuffer' && (w863 = '');;var ef7zoq = _5wm6['getFileExtension'](ng318r);if (_mw6h['_fileTypeArr']['indexOf'](ef7zoq) != -0x1) wmh_['EnvConfig']['load']['call'](this, ng318r, n8316g, n8jr3g, oz7fp, dipv);else {
        if (!c9t24['getFileInfo'](ng318r)) {
          if (ng318r['indexOf']('layaNativeDir/') != -0x1) {
            if (wmh_['isZiYu']) {
              var opef7z = c9t24['ziyuFileData'][ng318r];y_xeq0['onLoaded'](opef7z);return;
            } else {
              cosnole['log']('read read'), c9t24['read'](ng318r, w863, new ksubja(_mw6h, _mw6h['onReadNativeCallBack'], [w863, ng318r, n8316g, n8jr3g, oz7fp, dipv, y_xeq0]));return;
            }
          }if (o7ze0q['rootPath'] == '') var o7efz = ng318r;else o7efz = ng318r['split'](o7ze0q['rootPath'])[0x0];ng318r['indexOf']('http://') != -0x1 || ng318r['indexOf']('https://') != -0x1 ? wmh_['EnvConfig']['load']['call'](y_xeq0, ng318r, n8316g, n8jr3g, oz7fp, dipv) : c9t24['readFile'](o7efz, w863, new ksubja(_mw6h, _mw6h['onReadNativeCallBack'], [w863, ng318r, n8316g, n8jr3g, oz7fp, dipv, y_xeq0]), ng318r);
        } else wmh_['EnvConfig']['load']['call'](this, ng318r, n8316g, n8jr3g, oz7fp, dipv);
      }
    }, jkbasr['resMgrLoad'] = function (m65h1w, dfvzp$, eoyqx, q_e0yx, abjsr, _hmwyx, d$9ivp) {
      eoyqx === void 0x0 && (eoyqx = 0x0), q_e0yx === void 0x0 && (q_e0yx = ![]), abjsr === void 0x0 && (abjsr = ![]), _hmwyx === void 0x0 && (_hmwyx = 0x0), d$9ivp === void 0x0 && (d$9ivp = 0x3), m65h1w['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m65h1w), wmh_['EnvConfig']['resMgrLoad'](m65h1w, (peoz7f, n3156, wh56) => {
        _mw6h['prototype']['resMgrLoadCallBack'](peoz7f, n3156, wh56, dfvzp$);
      }, eoyqx, q_e0yx, abjsr, _hmwyx, d$9ivp);
    }, jkbasr['resMgrLoadCallBack'] = function (rabjs, pdzv$, x07oqe, jbanrg) {
      console['log']('buff:::', rabjs, x07oqe, c9t24['fileNativeDir'] + '///' + c9t24['fileListName']), jbanrg(rabjs, pdzv$, x07oqe);
    }, jkbasr['clearRes'] = function (nrgbaj, r13g8) {
      r13g8 === void 0x0 && (r13g8 = ![]);var w65m = this;w65m['clearRes'](nrgbaj, r13g8);var mhw_xy = c9t24['getFileInfo'](nrgbaj);if (mhw_xy && (nrgbaj['indexOf']('http://') != -0x1 || nrgbaj['indexOf']('https://') != -0x1)) {
        var jngba = mhw_xy['md5'],
            _eqy0x = c9t24['getFileNativePath'](jngba);c9t24['remove'](_eqy0x);
      }
    }, _mw6h['onReadNativeCallBack'] = function (qo07, e0qoyx, _56hw, fp7$z, rnbagj, m_0h, f$pvd, sbrkaj, yxqoe) {
      fp7$z === void 0x0 && (fp7$z = !![]), m_0h === void 0x0 && (m_0h = ![]), sbrkaj === void 0x0 && (sbrkaj = 0x0);if (!sbrkaj) {
        var kgraj;if (_56hw == 'json' || _56hw == 'atlas') kgraj = wmh_['getJson'](yxqoe['data']);else _56hw == 'xml' ? kgraj = _5wm6['parseXMLFromString'](yxqoe['data']) : kgraj = yxqoe['data'];f$pvd['onLoaded'](kgraj), !wmh_['isZiYu'] && wmh_['isPosMsgYu'] && _56hw != 'arraybuffer' && wx['postMessage']({ 'url': e0qoyx, 'data': kgraj, 'isLoad': !![] });
      } else sbrkaj == 0x1 && wmh_['EnvConfig']['load']['call'](f$pvd, e0qoyx, _56hw, fp7$z, rnbagj, m_0h);
    }, q70xoe(_mw6h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _mw6h;
  }(),
      c9t24 = function (jbak) {
    function nbr3j() {
      nbr3j['__super']['call'](this);;
    }return it2lc4(nbr3j, 'laya.wx.mini.MiniFileMgr', jbak), nbr3j['isLoadFile'] = function (ic94) {
      return nbr3j['_fileTypeArr']['indexOf'](ic94) != -0x1 ? !![] : ![];
    }, nbr3j['getFileInfo'] = function (kjgbar) {
      var myh5 = kjgbar['split']('?')[0x0],
          vti$9c = nbr3j['filesListObj'][myh5];if (vti$9c == null) return null;else return vti$9c;return null;
    }, nbr3j['onFileUpdate'] = function (kasrj, oyex0q) {
      var pd9i$ = kasrj['split']('/'),
          brganj = pd9i$[pd9i$['length'] - 0x1],
          jbgnra = nbr3j['getFileInfo'](oyex0q);if (jbgnra == null) nbr3j['onSaveFile'](oyex0q, brganj);else {
        if (jbgnra['readyUrl'] != oyex0q) nbr3j['remove'](brganj, oyex0q);
      }
    }, nbr3j['exits'] = function ($7pz, $7zpf) {
      var _hxmy = nbr3j['getFileNativePath']($7pz);nbr3j['fs']['getFileInfo']({ 'filePath': _hxmy, 'success': function (ofe7zq) {
          $7zpf != null && $7zpf['runWith']([0x0, ofe7zq]);
        }, 'fail': function (xoq7e0) {
          $7zpf != null && $7zpf['runWith']([0x1, xoq7e0]);
        } });
    }, nbr3j['read'] = function (xmy_h, ci$v9t, zfpdo, tvci29) {
      ci$v9t === void 0x0 && (ci$v9t = 'ascill'), tvci29 === void 0x0 && (tvci29 = '');var xhm_0y;tvci29 != '' ? xhm_0y = nbr3j['getFileNativePath'](xmy_h) : xhm_0y = xmy_h, nbr3j['fs']['readFile']({ 'filePath': xhm_0y, 'encoding': ci$v9t, 'success': function (zfp7d$) {
          zfpdo != null && zfpdo['runWith']([0x0, zfp7d$]);
        }, 'fail': function (v$zpf) {
          if (v$zpf && tvci29 != '') nbr3j['down'](tvci29, ci$v9t, zfpdo, tvci29);else zfpdo != null && zfpdo['runWith']([0x1]);
        } });
    }, nbr3j['readNativeFile'] = function (qoexy, zpd$f) {
      nbr3j['fs']['readFile']({ 'filePath': qoexy, 'encoding': '', 'success': function (f7qzeo) {
          zpd$f != null && zpd$f['runWith']([0x0]);
        }, 'fail': function (jasku) {
          zpd$f != null && zpd$f['runWith']([0x1]);
        } });
    }, nbr3j['down'] = function (v92tci, hw16, yq0xoe, xmq0y_) {
      hw16 === void 0x0 && (hw16 = 'ascill'), xmq0y_ === void 0x0 && (xmq0y_ = '');var wmhxy_ = nbr3j['getFileNativePath'](xmq0y_),
          kjbsra = nbr3j['wxdown']({ 'url': v92tci, 'filePath': wmhxy_, 'success': function (i4c92t) {
          if (i4c92t['statusCode'] === 0xc8) nbr3j['readFile'](i4c92t['filePath'], hw16, yq0xoe, xmq0y_);
        }, 'fail': function (_xmhyw) {
          yq0xoe != null && yq0xoe['runWith']([0x1, _xmhyw]);
        } });kjbsra['onProgressUpdate'](function (saju) {
        yq0xoe != null && yq0xoe['runWith']([0x2, saju['progress']]);
      });
    }, nbr3j['readFile'] = function (exy, bjagrn, m5_6h, qzo0e) {
      bjagrn === void 0x0 && (bjagrn = 'ascill'), qzo0e === void 0x0 && (qzo0e = ''), nbr3j['fs']['readFile']({ 'filePath': exy, 'encoding': bjagrn, 'success': function (vid$p9) {
          if (exy['indexOf']('http://') != -0x1 || exy['indexOf']('https://') != -0x1) nbr3j['onFileUpdate'](exy, qzo0e);m5_6h != null && m5_6h['runWith']([0x0, vid$p9]);
        }, 'fail': function (x_mh0) {
          if (x_mh0) m5_6h != null && m5_6h['runWith']([0x1, x_mh0]);
        } });
    }, nbr3j['downImg'] = function (ct2iv, zdp7o, wmh5_y) {
      wmh5_y === void 0x0 && (wmh5_y = '');var m615w = nbr3j['wxdown']({ 'url': ct2iv, 'success': function (r1n3g) {
          r1n3g['statusCode'] === 0xc8 && nbr3j['copyFile'](r1n3g['tempFilePath'], wmh5_y, zdp7o);
        }, 'fail': function (ic$v) {
          zdp7o != null && zdp7o['runWith']([0x1, ic$v]);
        } });
    }, nbr3j['copyFile'] = function ($iv9d, w6315, w1563) {
      var wym_5h = $iv9d['split']('/'),
          fzod7 = wym_5h[wym_5h['length'] - 0x1],
          oex = w6315['split']('?')[0x0],
          pf$9dv = nbr3j['getFileInfo'](w6315),
          dfp$v9 = nbr3j['getFileNativePath'](fzod7);nbr3j['fs']['copyFile']({ 'srcPath': $iv9d, 'destPath': dfp$v9, 'success': function (bajkrg) {
          if (!pf$9dv) nbr3j['onSaveFile'](w6315, fzod7), w1563 != null && w1563['runWith']([0x0]);else {
            if (pf$9dv['readyUrl'] != w6315) nbr3j['remove'](fzod7, w6315, w1563);
          }
        }, 'fail': function (ltc2) {
          w1563 != null && w1563['runWith']([0x1, ltc2]);
        } });
    }, nbr3j['getFileNativePath'] = function (hw51m) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hw51m;
    }, nbr3j['remove'] = function (dpf$z, m_y0qx, ct2il) {
      m_y0qx === void 0x0 && (m_y0qx = '');var ajsu = nbr3j['getFileInfo'](m_y0qx),
          ti92c4 = nbr3j['getFileNativePath'](ajsu['md5']);uksjb['loader']['clearRes'](ajsu['readyUrl']), nbr3j['fs']['unlink']({ 'filePath': ti92c4, 'success': function (_0qmxy) {
          if (m_y0qx != '') nbr3j['onSaveFile'](m_y0qx, dpf$z);ct2il != null && ct2il['runWith']([0x0]);
        }, 'fail': function (fo7qz) {} });
    }, nbr3j['onSaveFile'] = function ($dvfp9, $p9v) {
      var xo7e0 = $dvfp9['split']('?')[0x0];nbr3j['filesListObj'][xo7e0] = { 'md5': $p9v, 'readyUrl': $dvfp9 }, nbr3j['fs']['writeFile']({ 'filePath': nbr3j['fileNativeDir'] + '/' + nbr3j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nbr3j['filesListObj']), 'success': function (bjkg) {
          console['log']('写入测试测试成功：', bjkg);
        }, 'fail': function (xq7oe0) {
          console['log']('写入测试测试失败：', xq7oe0);
        } });
    }, nbr3j['existDir'] = function (w16h5, zpf$d7) {
      nbr3j['fs']['mkdir']({ 'dirPath': w16h5, 'success': function (t24ci9) {
          zpf$d7 != null && zpf$d7['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (p9i$dv) {
          if (p9i$dv['errMsg']['indexOf']('file already exists') != -0x1) nbr3j['readSync'](nbr3j['fileListName'], 'utf8', zpf$d7);else zpf$d7 != null && zpf$d7['runWith']([0x1, p9i$dv]);
        } });
    }, nbr3j['readSync'] = function (zqeo7, vc9$t, _h56w, mwyh5) {
      vc9$t === void 0x0 && (vc9$t = 'ascill'), mwyh5 === void 0x0 && (mwyh5 = '');var q7xeo0 = nbr3j['getFileNativePath'](zqeo7),
          w_y5h;try {
        w_y5h = nbr3j['fs']['readFileSync'](q7xeo0), _h56w != null && _h56w['runWith']([0x0, { 'data': w_y5h }]);
      } catch (n35816) {
        _h56w != null && _h56w['runWith']([0x1]);
      }
    }, nbr3j['readCache'] = function () {}, nbr3j['writeCache'] = function (myh5_) {
      var ex07oq = readyUrl['split']('?')[0x0];nbr3j['filesListObj'][ex07oq] = { 'md5': md5Name, 'readyUrl': readyUrl }, nbr3j['fs']['writeFile']({ 'filePath': nbr3j['fileNativeDir'] + '/' + nbr3j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nbr3j['filesListObj']), 'success': function (rjagn) {}, 'fail': function (tiv9$c) {} });
    }, nbr3j['setNativeFileDir'] = function (q0xe7o) {
      nbr3j['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q0xe7o;
    }, nbr3j['filesListObj'] = {}, nbr3j['fileNativeDir'] = null, nbr3j['fileListName'] = 'layaairfiles.txt', nbr3j['ziyuFileData'] = {}, q70xoe(nbr3j, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nbr3j;
  }(njg3b),
      dfopz = function (w5h_m) {
    function _xwhm() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _xwhm['__super']['call'](this), this['_sound'] = _xwhm['_createSound']();
    }it2lc4(_xwhm, 'laya.wx.mini.MiniSound', w5h_m);var w31865 = _xwhm['prototype'];return w31865['load'] = function (rbjksa) {
      var jbkrga = this;rbjksa = o7ze0q['formatURL'](rbjksa), this['url'] = rbjksa;if (_xwhm['_audioCache'][rbjksa]) {
        this['event']('complete');return;
      }function c4it2l() {
        if (_xwhm['_null'] != undefined) jbkrga['_sound']['onCanplay'](_xwhm['_null']), jbkrga['_sound']['onError'](_xwhm['_null']);else try {
          jbkrga['_sound']['onCanplay'](null), jbkrga['_sound']['onError'](null), _xwhm['_null'] = null;
        } catch (do7pf) {
          console['warn']('[wxmini] _clearSound:' + do7pf), jbkrga['_sound']['onCanplay'](bujaks), jbkrga['_sound']['onError'](bujaks), _xwhm['_null'] = bujaks;
        }
      }function zfoe7() {
        c4it2l(), m16h5['loaded'] = !![], m16h5['event']('complete'), _xwhm['_audioCache'][m16h5['url']] = m16h5;
      }function ci$vd(y_mx) {
        console['error']('errCode=' + y_mx['errCode'] + '  errMsg=' + y_mx['errMsg']), c4it2l(), m16h5['event']('error');
      }function bujaks() {}this['_sound']['onCanplay'](zfoe7), this['_sound']['onError'](ci$vd), this['_sound']['src'] = rbjksa;var m16h5 = this;
    }, w31865['play'] = function (r1gn, pv9id$) {
      r1gn === void 0x0 && (r1gn = 0x0), pv9id$ === void 0x0 && (pv9id$ = 0x0);var dp$iv;if (this['url'] == m_w6h['_tMusic']) {
        if (!_xwhm['_musicAudio']) _xwhm['_musicAudio'] = _xwhm['_createSound']();dp$iv = _xwhm['_musicAudio'];
      } else dp$iv = _xwhm['_createSound']();dp$iv['src'] = this['url'];var tvc92i = new n8rjg(dp$iv);return tvc92i['url'] = this['url'], tvc92i['loops'] = pv9id$, tvc92i['startTime'] = r1gn, tvc92i['play'](), m_w6h['addChannel'](tvc92i), tvc92i;
    }, w31865['dispose'] = function () {
      var v9c$ti = _xwhm['_audioCache'][this['url']];v9c$ti && (v9c$ti['src'] = '', delete _xwhm['_audioCache'][this['url']]);
    }, d7zfop(0x0, w31865, 'duration', function () {
      return this['_sound']['duration'];
    }), _xwhm['_createSound'] = function () {
      return _xwhm['_id']++, wmh_['window']['wx']['createInnerAudioContext']();
    }, _xwhm['_musicAudio'] = null, _xwhm['_id'] = 0x0, _xwhm['_audioCache'] = {}, _xwhm['_null'] = undefined, _xwhm;
  }(njg3b),
      n8rjg = function (h6w1m) {
    function argkj(_mh5yw) {
      this['_audio'] = null, this['_onEnd'] = null, argkj['__super']['call'](this), this['_audio'] = _mh5yw, this['_onEnd'] = _5wm6['bind'](this['__onEnd'], this), _mh5yw['onEnded'](this['_onEnd']);
    }it2lc4(argkj, 'laya.wx.mini.MiniSoundChannel', h6w1m);var h0m_ = argkj['prototype'];return h0m_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (uksjb['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h0m_['__onNull'] = function () {}, h0m_['play'] = function () {
      this['isStopped'] = ![], m_w6h['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h0m_['stop'] = function () {
      this['isStopped'] = !![], m_w6h['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (argkj['_null'] != undefined) this['_audio']['onEnded'](argkj['_null']);else try {
        this['_audio']['onEnded'](null), argkj['_null'] = null;
      } catch (g8rn1) {
        console['warn']('[wxmini] stop:' + g8rn1), this['_audio']['onEnded'](_5wm6['bind'](this['__onNull'], this)), argkj['_null'] = _5wm6['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, h0m_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h0m_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], m_w6h['addChannel'](this), this['_audio']['play']();
    }, d7zfop(0x0, h0m_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), d7zfop(0x0, h0m_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), d7zfop(0x0, h0m_, 'volume', function () {
      return 0x1;
    }, function (_0mqxy) {}), argkj['_null'] = undefined, argkj;
  }(jskarb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var f$pvd9 in Laya) {
    var $tcvi = Laya[f$pvd9];$tcvi && $tcvi['__isclass'] && (exports[f$pvd9] = $tcvi);
  }
});