var W = wx.$l;
(function (window, document, sy$ql) {
  var y3gpt = sy$ql['un'],
      g86otr = sy$ql['uns'],
      gtr8 = sy$ql['static'],
      v1zdab = sy$ql['class'],
      lt6p3y = sy$ql['getset'],
      vaz1db = sy$ql['__newvec'],
      duv1bj = laya['utils']['Browser'],
      tr86g = laya['events']['Event'],
      ltyp6 = laya['events']['EventDispatcher'],
      r0mni = laya['resource']['HTMLImage'],
      zjbv1d = laya['utils']['Handler'],
      pqt3l = laya['display']['Input'],
      yqplt = laya['net']['Loader'],
      cwkef7 = laya['maths']['Matrix'],
      f7ck2 = laya['renders']['Render'],
      d1vujb = laya['utils']['RunDriver'],
      d1bvj = laya['media']['Sound'],
      abz5d4 = laya['media']['SoundChannel'],
      ubvdj = laya['media']['SoundManager'],
      y3pg6 = laya['display']['Stage'],
      $ys3ql = laya['net']['URL'],
      zbd5va = laya['utils']['Utils'],
      inr8 = function () {
    function r6io8() {}return v1zdab(r6io8, 'laya.wx.mini.MiniAdpter'), r6io8['getJson'] = function (or8mig) {
      return JSON['parse'](or8mig);
    }, r6io8['init'] = function (tr6og, f$72s) {
      tr6og === void 0x0 && (tr6og = ![]), f$72s === void 0x0 && (f$72s = ![]);if (r6io8['_inited']) return;r6io8['window'] = window;if (r6io8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;r6io8['_inited'] = !![], r6io8['isZiYu'] = f$72s, r6io8['isPosMsgYu'] = tr6og, r6io8['EnvConfig'] = {}, !r6io8['isZiYu'] && (ewfk['setNativeFileDir']('/layaairGame'), ewfk['existDir'](ewfk['fileNativeDir'], zjbv1d['create'](r6io8, r6io8['onMkdirCallBack']))), r6io8['window']['focus'] = function () {}, sy$ql['getUrlPath'] = function () {}, r6io8['window']['logtime'] = function (c7_kwe) {}, r6io8['window']['alertTimeLog'] = function (igmor) {}, r6io8['window']['resetShareInfo'] = function () {}, r6io8['window']['CanvasRenderingContext2D'] = function () {}, r6io8['window']['CanvasRenderingContext2D']['prototype'] = r6io8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], r6io8['window']['document']['body']['appendChild'] = function () {}, r6io8['EnvConfig']['pixelRatioInt'] = 0x0, d1vujb['getPixelRatio'] = r6io8['pixelRatio'], r6io8['_preCreateElement'] = duv1bj['createElement'], duv1bj['createElement'] = r6io8['createElement'], d1vujb['createShaderCondition'] = r6io8['createShaderCondition'], zbd5va['parseXMLFromString'] = r6io8['parseXMLFromString'], pqt3l['_createInputElement'] = o6ypt['_createInputElement'], r6io8['EnvConfig']['load'] = yqplt['prototype']['load'], yqplt['prototype']['load'] = v1jbzd['prototype']['load'], r6io8['isZiYu'] && tr6og && wx['onMessage'](function (na04) {
        na04['isLoad'] && (ewfk['ziyuFileData'][na04['url']] = na04['data']);
      });
    }, r6io8['onMkdirCallBack'] = function (n45a0z, tqy3lp) {
      if (!n45a0z) ewfk['filesListObj'] = JSON['parse'](tqy3lp['data']);
    }, r6io8['pixelRatio'] = function () {
      if (!r6io8['EnvConfig']['pixelRatioInt']) try {
        var r80mni = wx['getSystemInfoSync']();return r6io8['EnvConfig']['pixelRatioInt'] = r80mni['pixelRatio'], r80mni = r80mni, r80mni['pixelRatio'];
      } catch (py6got) {}return r6io8['EnvConfig']['pixelRatioInt'];
    }, r6io8['createElement'] = function (i80nr) {
      if (i80nr == 'canvas') {
        var ro0m8i;return r6io8['idx'] == 0x1 ? r6io8['isZiYu'] ? (ro0m8i = sharedCanvas, ro0m8i['style'] = {}) : ro0m8i = window['canvas'] : ro0m8i = window['wx']['createCanvas'](), r6io8['idx']++, ro0m8i;
      } else {
        if (i80nr == 'textarea' || i80nr == 'input') return r6io8['onCreateInput'](i80nr);else {
          if (i80nr == 'div') {
            var wck7ef = r6io8['_preCreateElement'](i80nr);return wck7ef['contains'] = function (tor6g8) {
              return null;
            }, wck7ef['removeChild'] = function (gi6r8) {}, wck7ef;
          } else return r6io8['_preCreateElement'](i80nr);
        }
      }
    }, r6io8['onCreateInput'] = function (wf$2s7) {
      var t6oypg = r6io8['_preCreateElement'](wf$2s7);return t6oypg['focus'] = o6ypt['wxinputFocus'], t6oypg['blur'] = o6ypt['wxinputblur'], t6oypg['style'] = {}, t6oypg['value'] = 0x0, t6oypg['parentElement'] = {}, t6oypg['placeholder'] = {}, t6oypg['type'] = {}, t6oypg['setColor'] = function (g6r) {}, t6oypg['setType'] = function (rg8im) {}, t6oypg['setFontFace'] = function ($7sfq2) {}, t6oypg['addEventListener'] = function (y63gpt) {}, t6oypg['contains'] = function (ck9e_x) {
        return null;
      }, t6oypg['removeChild'] = function (inm4r) {}, t6oypg;
    }, r6io8['createShaderCondition'] = function (y$l3qp) {
      var $y = this,
          n0am5 = function () {
        var l$pyq3 = y$l3qp;return $y[y$l3qp['replace']('this.', '')];
      };return n0am5;
    }, r6io8['EnvConfig'] = null, r6io8['window'] = null, r6io8['_preCreateElement'] = null, r6io8['_inited'] = ![], r6io8['wxRequest'] = null, r6io8['systemInfo'] = null, r6io8['version'] = '0.0.1', r6io8['isZiYu'] = ![], r6io8['isPosMsgYu'] = ![], r6io8['parseXMLFromString'] = function (jvdu1b) {
      var l2$s, k2wfs;jvdu1b = jvdu1b['replace'](/>\s+</g, '><');try {
        l2$s = new window['Parser']['DOMParser']()['parseFromString'](jvdu1b, 'text/xml');
      } catch (ogr86) {
        throw '需要引入xml解析库文件';
      }return l2$s;
    }, r6io8['idx'] = 0x1, r6io8;
  }(),
      efc7 = function () {
    function hu1jdv() {}v1zdab(hu1jdv, 'laya.wx.mini.MiniImage');var m4nr0 = hu1jdv['prototype'];return m4nr0['_loadImage'] = function (wf27$) {
      var imo80r = this,
          vbd = ![];wf27$['indexOf']('layaNativeDir/') == -0x1 && (vbd = !![], wf27$ = $ys3ql['formatURL'](wf27$));if (!ewfk['getFileInfo'](wf27$)) {
        if (wf27$['indexOf']('http://') != -0x1 || wf27$['indexOf']('https://') != -0x1) ewfk['downImg'](wf27$, new zjbv1d(hu1jdv, hu1jdv['onDownImgCallBack'], [wf27$, imo80r]), wf27$);else hu1jdv['onCreateImage'](wf27$, imo80r, !![]);
      } else hu1jdv['onCreateImage'](wf27$, imo80r, !vbd);
    }, hu1jdv['onDownImgCallBack'] = function (kf2w7c, $wf7, sf$27) {
      if (!sf$27) hu1jdv['onCreateImage'](kf2w7c, $wf7);else $wf7['onError'](null);
    }, hu1jdv['onCreateImage'] = function (xecw_, g6ior, s2fw$7) {
      s2fw$7 === void 0x0 && (s2fw$7 = ![]);var t36gpy;if (!s2fw$7) {
        var ior6g8 = ewfk['getFileInfo'](xecw_),
            t8or = ior6g8['md5'];t36gpy = ewfk['getFileNativePath'](t8or);
      } else t36gpy = xecw_;if (g6ior['imgCache'] == null) g6ior['imgCache'] = {};var sl$f;function swf7k2() {
        sl$f['onload'] = null, sl$f['onerror'] = null, delete g6ior['imgCache'][xecw_];
      };var gpt6o = function () {
        swf7k2(), g6ior['onLoaded'](sl$f);
      },
          f2kws = function () {
        swf7k2(), g6ior['event']('error', 'Load image failed');
      };g6ior['_type'] == 'nativeimage' ? (sl$f = new duv1bj['window']['Image'](), sl$f['crossOrigin'] = '', sl$f['onload'] = gpt6o, sl$f['onerror'] = f2kws, sl$f['src'] = t36gpy, g6ior['imgCache'][xecw_] = sl$f) : new r0mni['create'](t36gpy, { 'onload': gpt6o, 'onerror': f2kws, 'onCreate': function (p$lq3) {
          sl$f = p$lq3, g6ior['imgCache'][xecw_] = p$lq3;
        } });
    }, hu1jdv;
  }(),
      o6ypt = function () {
    function vabd() {}return v1zdab(vabd, 'laya.wx.mini.MiniInput'), vabd['_createInputElement'] = function () {
      pqt3l['_initInput'](pqt3l['area'] = duv1bj['createElement']('textarea')), pqt3l['_initInput'](pqt3l['input'] = duv1bj['createElement']('input')), pqt3l['inputContainer'] = duv1bj['createElement']('div'), pqt3l['inputContainer']['style']['position'] = 'absolute', pqt3l['inputContainer']['style']['zIndex'] = 0x186a0, duv1bj['container']['appendChild'](pqt3l['inputContainer']), pqt3l['inputContainer']['setPos'] = function (qyl$3s, g6o8tr) {
        pqt3l['inputContainer']['style']['left'] = qyl$3s + 'px', pqt3l['inputContainer']['style']['top'] = g6o8tr + 'px';
      }, sy$ql['stage']['on']('resize', null, vabd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bvdz1a) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ubvdj['_soundClass'] = vu1hj, ubvdj['_musicClass'] = vu1hj, window['_videoClass'] = t6y3g;
    }, vabd['_onStageResize'] = function () {
      var ptyql = sy$ql['stage']['_canvasTransform']['identity']();ptyql['scale'](duv1bj['width'] / f7ck2['canvas']['width'] / d1vujb['getPixelRatio'](), duv1bj['height'] / f7ck2['canvas']['height'] / d1vujb['getPixelRatio']());
    }, vabd['wxinputFocus'] = function (w7cekf) {
      var g68o = pqt3l['inputElement']['target'];if (g68o && !g68o['editable']) return;inr8['window']['wx']['offKeyboardConfirm'](), inr8['window']['wx']['offKeyboardInput'](), inr8['window']['wx']['showKeyboard']({ 'defaultValue': g68o['text'], 'maxLength': g68o['maxChars'], 'multiple': g68o['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (cewf) {}, 'fail': function (qpt3) {} }), inr8['window']['wx']['onKeyboardConfirm'](function (e_cxkw) {
        var ew_xc = e_cxkw ? e_cxkw['value'] : '';g68o['text'] = ew_xc, g68o['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), inr8['window']['wx']['onKeyboardInput'](function (v1uh) {
        var sfk72w = v1uh ? v1uh['value'] : '';if (!g68o['multiline']) {
          if (sfk72w['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }g68o['text'] = sfk72w, g68o['event']('input');
      });
    }, vabd['inputEnter'] = function () {
      pqt3l['inputElement']['target']['focus'] = ![];
    }, vabd['wxinputblur'] = function () {
      vabd['hideKeyboard']();
    }, vabd['hideKeyboard'] = function () {
      inr8['window']['wx']['offKeyboardConfirm'](), inr8['window']['wx']['offKeyboardInput'](), inr8['window']['wx']['hideKeyboard']({ 'success': function ($wfs7) {
          console['log']('隐藏键盘');
        }, 'fail': function (l$sq) {
          console['log']('隐藏键盘出错:' + (l$sq ? l$sq['errMsg'] : ''));
        } });
    }, vabd;
  }(),
      v1jbzd = function () {
    function ckfw72() {}v1zdab(ckfw72, 'laya.wx.mini.MiniLoader');var tpyg6 = ckfw72['prototype'];return tpyg6['load'] = function (i0m8o, n405i, cek9x, r4n0m, e9_xc) {
      cek9x === void 0x0 && (cek9x = !![]), e9_xc === void 0x0 && (e9_xc = ![]);var vb5az = this;vb5az['_url'] = i0m8o;if (i0m8o['indexOf']('data:image') === 0x0) vb5az['_type'] = n405i = 'image';else vb5az['_type'] = n405i || (n405i = vb5az['getTypeFromUrl'](i0m8o));vb5az['_cache'] = cek9x, vb5az['_data'] = null;var cf2w = 'ascii';if (i0m8o['indexOf']('.fnt') != -0x1) cf2w = 'utf8';else n405i == 'arraybuffer' && (cf2w = '');;var z5vadb = zbd5va['getFileExtension'](i0m8o);if (ckfw72['_fileTypeArr']['indexOf'](z5vadb) != -0x1) inr8['EnvConfig']['load']['call'](this, i0m8o, n405i, cek9x, r4n0m, e9_xc);else {
        if (!ewfk['getFileInfo'](i0m8o)) {
          if (i0m8o['indexOf']('layaNativeDir/') != -0x1) {
            if (inr8['isZiYu']) {
              var f7kce = ewfk['ziyuFileData'][i0m8o];vb5az['onLoaded'](f7kce);return;
            } else {
              cosnole['log']('read read'), ewfk['read'](i0m8o, cf2w, new zjbv1d(ckfw72, ckfw72['onReadNativeCallBack'], [cf2w, i0m8o, n405i, cek9x, r4n0m, e9_xc, vb5az]));return;
            }
          }if ($ys3ql['rootPath'] == '') var $3qy = i0m8o;else $3qy = i0m8o['split']($ys3ql['rootPath'])[0x0];i0m8o['indexOf']('http://') != -0x1 || i0m8o['indexOf']('https://') != -0x1 ? inr8['EnvConfig']['load']['call'](vb5az, i0m8o, n405i, cek9x, r4n0m, e9_xc) : ewfk['readFile']($3qy, cf2w, new zjbv1d(ckfw72, ckfw72['onReadNativeCallBack'], [cf2w, i0m8o, n405i, cek9x, r4n0m, e9_xc, vb5az]), i0m8o);
        } else inr8['EnvConfig']['load']['call'](this, i0m8o, n405i, cek9x, r4n0m, e9_xc);
      }
    }, tpyg6['resMgrLoad'] = function (lq3yp$, yqtl, min40r, wkc7e, dzvjb1, z1jv, _wexk) {
      min40r === void 0x0 && (min40r = 0x0), wkc7e === void 0x0 && (wkc7e = ![]), dzvjb1 === void 0x0 && (dzvjb1 = ![]), z1jv === void 0x0 && (z1jv = 0x0), _wexk === void 0x0 && (_wexk = 0x3), lq3yp$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lq3yp$), inr8['EnvConfig']['resMgrLoad'](lq3yp$, (lq32s$, rog6t8, zvdab5) => {
        ckfw72['prototype']['resMgrLoadCallBack'](lq32s$, rog6t8, zvdab5, yqtl);
      }, min40r, wkc7e, dzvjb1, z1jv, _wexk);
    }, tpyg6['resMgrLoadCallBack'] = function (vdza1, rm4i0, bz5a4d, wk2fs) {
      console['log']('buff:::', vdza1, bz5a4d, ewfk['fileNativeDir'] + '///' + ewfk['fileListName']), wk2fs(vdza1, rm4i0, bz5a4d);
    }, tpyg6['clearRes'] = function (k_e9cx, rogt6) {
      rogt6 === void 0x0 && (rogt6 = ![]);var pt3yg6 = this;pt3yg6['clearRes'](k_e9cx, rogt6);var udhv1 = ewfk['getFileInfo'](k_e9cx);if (udhv1 && (k_e9cx['indexOf']('http://') != -0x1 || k_e9cx['indexOf']('https://') != -0x1)) {
        var bzjd = udhv1['md5'],
            ogypt = ewfk['getFileNativePath'](bzjd);ewfk['remove'](ogypt);
      }
    }, ckfw72['onReadNativeCallBack'] = function (lq$fs, $72sfq, bad5zv, bz4da, tr6o8g, duhv1j, qpl3t, qs72f, we7k_) {
      bz4da === void 0x0 && (bz4da = !![]), duhv1j === void 0x0 && (duhv1j = ![]), qs72f === void 0x0 && (qs72f = 0x0);if (!qs72f) {
        var m04rni;if (bad5zv == 'json' || bad5zv == 'atlas') m04rni = inr8['getJson'](we7k_['data']);else bad5zv == 'xml' ? m04rni = zbd5va['parseXMLFromString'](we7k_['data']) : m04rni = we7k_['data'];qpl3t['onLoaded'](m04rni), !inr8['isZiYu'] && inr8['isPosMsgYu'] && bad5zv != 'arraybuffer' && wx['postMessage']({ 'url': $72sfq, 'data': m04rni, 'isLoad': !![] });
      } else qs72f == 0x1 && inr8['EnvConfig']['load']['call'](qpl3t, $72sfq, bad5zv, bz4da, tr6o8g, duhv1j);
    }, gtr8(ckfw72, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ckfw72;
  }(),
      ewfk = function (ot6pg) {
    function y6t3pl() {
      y6t3pl['__super']['call'](this);;
    }return v1zdab(y6t3pl, 'laya.wx.mini.MiniFileMgr', ot6pg), y6t3pl['isLoadFile'] = function (qy3l) {
      return y6t3pl['_fileTypeArr']['indexOf'](qy3l) != -0x1 ? !![] : ![];
    }, y6t3pl['getFileInfo'] = function (fqs7) {
      var typ3ql = fqs7['split']('?')[0x0],
          c7fkw = y6t3pl['filesListObj'][typ3ql];if (c7fkw == null) return null;else return c7fkw;return null;
    }, y6t3pl['onFileUpdate'] = function (kcf2, b4z5an) {
      var ls$fq = kcf2['split']('/'),
          xe9_c = ls$fq[ls$fq['length'] - 0x1],
          rmin80 = y6t3pl['getFileInfo'](b4z5an);if (rmin80 == null) y6t3pl['onSaveFile'](b4z5an, xe9_c);else {
        if (rmin80['readyUrl'] != b4z5an) y6t3pl['remove'](xe9_c, b4z5an);
      }
    }, y6t3pl['exits'] = function (az5n0, n50z) {
      var s$3q2l = y6t3pl['getFileNativePath'](az5n0);y6t3pl['fs']['getFileInfo']({ 'filePath': s$3q2l, 'success': function ($q3syl) {
          n50z != null && n50z['runWith']([0x0, $q3syl]);
        }, 'fail': function (sf72$w) {
          n50z != null && n50z['runWith']([0x1, sf72$w]);
        } });
    }, y6t3pl['read'] = function (dvab1, ujvdh, j1zvbd, e7cwkf) {
      ujvdh === void 0x0 && (ujvdh = 'ascill'), e7cwkf === void 0x0 && (e7cwkf = '');var z1vdba;e7cwkf != '' ? z1vdba = y6t3pl['getFileNativePath'](dvab1) : z1vdba = dvab1, y6t3pl['fs']['readFile']({ 'filePath': z1vdba, 'encoding': ujvdh, 'success': function (dbv5za) {
          j1zvbd != null && j1zvbd['runWith']([0x0, dbv5za]);
        }, 'fail': function (e_x9ck) {
          if (e_x9ck && e7cwkf != '') y6t3pl['down'](e7cwkf, ujvdh, j1zvbd, e7cwkf);else j1zvbd != null && j1zvbd['runWith']([0x1]);
        } });
    }, y6t3pl['readNativeFile'] = function (azn45b, o8ptg) {
      y6t3pl['fs']['readFile']({ 'filePath': azn45b, 'encoding': '', 'success': function (q7sf2) {
          o8ptg != null && o8ptg['runWith']([0x0]);
        }, 'fail': function (fw7s) {
          o8ptg != null && o8ptg['runWith']([0x1]);
        } });
    }, y6t3pl['down'] = function (lt3pq, _w7c, vzd5b, xwc_e) {
      _w7c === void 0x0 && (_w7c = 'ascill'), xwc_e === void 0x0 && (xwc_e = '');var $sqy3l = y6t3pl['getFileNativePath'](xwc_e),
          igro68 = y6t3pl['wxdown']({ 'url': lt3pq, 'filePath': $sqy3l, 'success': function (y6ot) {
          if (y6ot['statusCode'] === 0xc8) y6t3pl['readFile'](y6ot['filePath'], _w7c, vzd5b, xwc_e);
        }, 'fail': function (bjvdz) {
          vzd5b != null && vzd5b['runWith']([0x1, bjvdz]);
        } });igro68['onProgressUpdate'](function (wkc7fe) {
        vzd5b != null && vzd5b['runWith']([0x2, wkc7fe['progress']]);
      });
    }, y6t3pl['readFile'] = function (dabz5v, l$yqp, $y3ls, r0im8n) {
      l$yqp === void 0x0 && (l$yqp = 'ascill'), r0im8n === void 0x0 && (r0im8n = ''), y6t3pl['fs']['readFile']({ 'filePath': dabz5v, 'encoding': l$yqp, 'success': function (w2ks7) {
          if (dabz5v['indexOf']('http://') != -0x1 || dabz5v['indexOf']('https://') != -0x1) y6t3pl['onFileUpdate'](dabz5v, r0im8n);$y3ls != null && $y3ls['runWith']([0x0, w2ks7]);
        }, 'fail': function (zvjb) {
          if (zvjb) $y3ls != null && $y3ls['runWith']([0x1, zvjb]);
        } });
    }, y6t3pl['downImg'] = function (o86pgt, d5zabv, g6r8o) {
      g6r8o === void 0x0 && (g6r8o = '');var p68gt = y6t3pl['wxdown']({ 'url': o86pgt, 'success': function (f2qsl) {
          f2qsl['statusCode'] === 0xc8 && y6t3pl['copyFile'](f2qsl['tempFilePath'], g6r8o, d5zabv);
        }, 'fail': function (uhd1vj) {
          d5zabv != null && d5zabv['runWith']([0x1, uhd1vj]);
        } });
    }, y6t3pl['copyFile'] = function (rmio8g, jbzd, rio68) {
      var rm8oig = rmio8g['split']('/'),
          ptl3y = rm8oig[rm8oig['length'] - 0x1],
          orm8i = jbzd['split']('?')[0x0],
          q$lp3y = y6t3pl['getFileInfo'](jbzd),
          fke7w = y6t3pl['getFileNativePath'](ptl3y);y6t3pl['fs']['copyFile']({ 'srcPath': rmio8g, 'destPath': fke7w, 'success': function (uvdhj1) {
          if (!q$lp3y) y6t3pl['onSaveFile'](jbzd, ptl3y), rio68 != null && rio68['runWith']([0x0]);else {
            if (q$lp3y['readyUrl'] != jbzd) y6t3pl['remove'](ptl3y, jbzd, rio68);
          }
        }, 'fail': function (o6g8ir) {
          rio68 != null && rio68['runWith']([0x1, o6g8ir]);
        } });
    }, y6t3pl['getFileNativePath'] = function (ke9c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ke9c;
    }, y6t3pl['remove'] = function (swk72, xe_9, _kcw7) {
      xe_9 === void 0x0 && (xe_9 = '');var irn08 = y6t3pl['getFileInfo'](xe_9),
          zda5vb = y6t3pl['getFileNativePath'](irn08['md5']);sy$ql['loader']['clearRes'](irn08['readyUrl']), y6t3pl['fs']['unlink']({ 'filePath': zda5vb, 'success': function (lsqf$2) {
          if (xe_9 != '') y6t3pl['onSaveFile'](xe_9, swk72);_kcw7 != null && _kcw7['runWith']([0x0]);
        }, 'fail': function (p86gt) {} });
    }, y6t3pl['onSaveFile'] = function (kwc_e, py3tlq) {
      var giro = kwc_e['split']('?')[0x0];y6t3pl['filesListObj'][giro] = { 'md5': py3tlq, 'readyUrl': kwc_e }, y6t3pl['fs']['writeFile']({ 'filePath': y6t3pl['fileNativeDir'] + '/' + y6t3pl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y6t3pl['filesListObj']), 'success': function (yqp$l) {
          console['log']('写入测试测试成功：', yqp$l);
        }, 'fail': function (gi6or) {
          console['log']('写入测试测试失败：', gi6or);
        } });
    }, y6t3pl['existDir'] = function (l2s$f, adzb) {
      y6t3pl['fs']['mkdir']({ 'dirPath': l2s$f, 'success': function (fw$27) {
          adzb != null && adzb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jvuhd1) {
          if (jvuhd1['errMsg']['indexOf']('file already exists') != -0x1) y6t3pl['readSync'](y6t3pl['fileListName'], 'utf8', adzb);else adzb != null && adzb['runWith']([0x1, jvuhd1]);
        } });
    }, y6t3pl['readSync'] = function (dbjvz1, b1dujv, jbdv1z, q2lf) {
      b1dujv === void 0x0 && (b1dujv = 'ascill'), q2lf === void 0x0 && (q2lf = '');var tp86g = y6t3pl['getFileNativePath'](dbjvz1),
          in80r;try {
        in80r = y6t3pl['fs']['readFileSync'](tp86g), jbdv1z != null && jbdv1z['runWith']([0x0, { 'data': in80r }]);
      } catch (m80rn) {
        jbdv1z != null && jbdv1z['runWith']([0x1]);
      }
    }, y6t3pl['readCache'] = function () {}, y6t3pl['writeCache'] = function (t6g) {
      var a5d4 = readyUrl['split']('?')[0x0];y6t3pl['filesListObj'][a5d4] = { 'md5': md5Name, 'readyUrl': readyUrl }, y6t3pl['fs']['writeFile']({ 'filePath': y6t3pl['fileNativeDir'] + '/' + y6t3pl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y6t3pl['filesListObj']), 'success': function (i8omr0) {}, 'fail': function (bjdu) {} });
    }, y6t3pl['setNativeFileDir'] = function (in80mr) {
      y6t3pl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + in80mr;
    }, y6t3pl['filesListObj'] = {}, y6t3pl['fileNativeDir'] = null, y6t3pl['fileListName'] = 'layaairfiles.txt', y6t3pl['ziyuFileData'] = {}, gtr8(y6t3pl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), y6t3pl;
  }(ltyp6),
      vu1hj = function (yp$3l) {
    function w$s72() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], w$s72['__super']['call'](this), this['_sound'] = w$s72['_createSound'](), this['_chanell'] = new kws72(this['_sound']);
    }v1zdab(w$s72, 'laya.wx.mini.MiniSound', yp$3l);var y36tp = w$s72['prototype'];return y36tp['load'] = function (ex9k_) {
      var pyt3ql = this;ex9k_ = $ys3ql['formatURL'](ex9k_), this['url'] = ex9k_;if (w$s72['_audioCache'][ex9k_]) {
        this['event']('complete');return;
      }function ty6l3p() {
        if (w$s72['_null'] != undefined) pyt3ql['_sound']['onCanplay'](w$s72['_null']), pyt3ql['_sound']['onError'](w$s72['_null']);else try {
          pyt3ql['_sound']['onCanplay'](null), pyt3ql['_sound']['onError'](null), w$s72['_null'] = null;
        } catch (rgt) {
          console['warn']('[wxmini] _clearSound:' + rgt), pyt3ql['_sound']['onCanplay'](hj1duv), pyt3ql['_sound']['onError'](hj1duv), w$s72['_null'] = hj1duv;
        }
      }function nrmi4() {
        tgo8p['loaded'] = !![], tgo8p['event']('complete'), w$s72['_audioCache'][tgo8p['url']] = tgo8p;
      }function o8pg6t(or8mg) {
        console['error']('errCode=' + or8mg['errCode'] + '  errMsg=' + or8mg['errMsg']), tgo8p['event']('error');
      }function hj1duv() {}this['_sound']['onCanplay'](nrmi4), this['_sound']['onError'](o8pg6t), this['_sound']['src'] = ex9k_;var tgo8p = this;
    }, y36tp['play'] = function (n5i4m0, p3$yq) {
      n5i4m0 === void 0x0 && (n5i4m0 = 0x0), p3$yq === void 0x0 && (p3$yq = 0x0);var zdbj1, pql3yt;if (this['url'] == ubvdj['_tMusic']) {
        if (!w$s72['_musicAudio']) w$s72['_musicAudio'] = this['_sound'];zdbj1 = w$s72['_musicAudio'], pql3yt = this['_chanell'];
      } else zdbj1 = this['_sound'], pql3yt = this['_chanell'];return zdbj1['src'] = this['url'], zdbj1['startTime'] = 0x0, pql3yt['isStopped'] && (pql3yt['url'] = this['url'], pql3yt['loops'] = p3$yq, pql3yt['startTime'] = n5i4m0, pql3yt['play'](), ubvdj['addChannel'](pql3yt)), pql3yt;
    }, y36tp['dispose'] = function () {
      var mi08ro = w$s72['_audioCache'][this['url']];mi08ro && (mi08ro['src'] = '', delete w$s72['_audioCache'][this['url']]);
    }, lt6p3y(0x0, y36tp, 'duration', function () {
      return this['_sound']['duration'];
    }), w$s72['_createSound'] = function () {
      w$s72['_id']++;var wcf7 = inr8['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return wcf7;
    }, w$s72['_musicAudio'] = null, w$s72['_id'] = 0x0, w$s72['_audioCache'] = {}, w$s72['_null'] = undefined, w$s72;
  }(ltyp6),
      kws72 = function (ori8) {
    function ekwc_(cke_9) {
      this['_audio'] = null, this['_onEnd'] = null, ekwc_['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = cke_9, this['_onEnd'] = zbd5va['bind'](this['__onEnd'], this), cke_9['onEnded'](this['_onEnd']);
    }v1zdab(ekwc_, 'laya.wx.mini.MiniSoundChannel', ori8);var ecxkw = ekwc_['prototype'];return ecxkw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sy$ql['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ecxkw['__onNull'] = function () {}, ecxkw['play'] = function () {
      this['isStopped'] = ![], ubvdj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ecxkw['stop'] = function () {
      this['isStopped'] = !![], ubvdj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, ecxkw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ecxkw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ubvdj['addChannel'](this), this['_audio']['play']();
    }, lt6p3y(0x0, ecxkw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), lt6p3y(0x0, ecxkw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), lt6p3y(0x0, ecxkw, 'volume', function () {
      return 0x1;
    }, function (s3lqy) {}), ekwc_['_null'] = undefined, ekwc_;
  }(abz5d4),
      t6y3g = function () {
    function $qyp3() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = inr8['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }v1zdab($qyp3, 'laya.wx.mini.MiniVideo');var qyp$3 = $qyp3['prototype'];return qyp$3['on'] = function (k_9cxe, tp63gy, nbz5) {
      if (k_9cxe == 'loadedmetadata') this['onPlayFunc'] = nbz5['bind'](tp63gy), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else k_9cxe == 'ended' && (this['onEndedFunC'] = nbz5['bind'](tp63gy), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, qyp$3['onTimeUpdateFunc'] = function (fw2ck7) {
      this['position'] = fw2ck7['position'], this['_duration'] = fw2ck7['duration'];
    }, qyp$3['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, qyp$3['onended'] = function (k_7ew, m0r4in) {
      this['onEndedFunC'] = m0r4in['bind'](k_7ew), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, qyp$3['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, qyp$3['off'] = function (ekwc7_, hd1jvu, we7_k) {
      if (ekwc7_ == 'loadedmetadata') this['onPlayFunc'] = we7_k['bind'](hd1jvu), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ekwc7_ == 'ended' && (this['onEndedFunC'] = we7_k['bind'](hd1jvu), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, qyp$3['load'] = function (gmrio8) {
      if (!this['videoElement']) return;this['videoElement']['src'] = gmrio8;
    }, qyp$3['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, qyp$3['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, qyp$3['size'] = function (_9kce, xweck) {
      if (!this['videoElement']) return;this['videoElement']['width'] = _9kce, this['videoElement']['height'] = xweck;
    }, qyp$3['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, qyp$3['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, lt6p3y(0x0, qyp$3, 'duration', function () {
      return this['_duration'];
    }), lt6p3y(0x0, qyp$3, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function ($s27f) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = $s27f;
    }), lt6p3y(0x0, qyp$3, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), lt6p3y(0x0, qyp$3, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), lt6p3y(0x0, qyp$3, 'ended', function () {
      return this['videoend'];
    }), lt6p3y(0x0, qyp$3, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (ud1b) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = ud1b;
    }), lt6p3y(0x0, qyp$3, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (oyp) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = oyp;
    }), lt6p3y(0x0, qyp$3, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (fwc2k7) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = fwc2k7;
    }), lt6p3y(0x0, qyp$3, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), lt6p3y(0x0, qyp$3, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (kf7c2) {
      if (!this['videoElement']) return;this['videoElement']['x'] = kf7c2;
    }), lt6p3y(0x0, qyp$3, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (zb1va) {
      if (!this['videoElement']) return;this['videoElement']['y'] = zb1va;
    }), lt6p3y(0x0, qyp$3, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), lt6p3y(0x0, qyp$3, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (nza4b) {
      if (!this['videoElement']) return;this['videoElement']['src'] = nza4b;
    }), lt6p3y(0x0, qyp$3, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (l$3) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = l$3;
    }), lt6p3y(0x0, qyp$3, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (bz1jvd) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = bz1jvd;
    }), $qyp3;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bz1jv in Laya) {
    var _cx = Laya[bz1jv];_cx && _cx['__isclass'] && (exports[bz1jv] = _cx);
  }
});