var E = wx.$p;
(function (window, document, g8abcq) {
  var xl_uft = g8abcq['un'],
      h$yi = g8abcq['uns'],
      hpslt4 = g8abcq['static'],
      i$6y1v = g8abcq['class'],
      w5032 = g8abcq['getset'],
      ftux_m = g8abcq['__newvec'],
      $v1i = laya['utils']['Browser'],
      e95n8q = laya['events']['Event'],
      jskp = laya['events']['EventDispatcher'],
      oxm_ = laya['resource']['HTMLImage'],
      xtmu_ = laya['utils']['Handler'],
      _xumof = laya['display']['Input'],
      jkh4is = laya['net']['Loader'],
      l4xst = laya['maths']['Matrix'],
      uf_txm = laya['renders']['Render'],
      uplx4t = laya['utils']['RunDriver'],
      qne58 = laya['media']['Sound'],
      qbdacg = laya['media']['SoundChannel'],
      n3 = laya['media']['SoundManager'],
      w02z = laya['display']['Stage'],
      xlfpt = laya['net']['URL'],
      r107v2 = laya['utils']['Utils'],
      $6iv = function () {
    function q59ne() {}return i$6y1v(q59ne, 'laya.wx.mini.MiniAdpter'), q59ne['getJson'] = function (w5230z) {
      return JSON['parse'](w5230z);
    }, q59ne['init'] = function (enq98, rz0v27) {
      enq98 === void 0x0 && (enq98 = ![]), rz0v27 === void 0x0 && (rz0v27 = ![]);if (q59ne['_inited']) return;q59ne['window'] = window;if (q59ne['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;q59ne['_inited'] = !![], q59ne['isZiYu'] = rz0v27, q59ne['isPosMsgYu'] = enq98, q59ne['EnvConfig'] = {}, !q59ne['isZiYu'] && (y6v$1['setNativeFileDir']('/layaairGame'), y6v$1['existDir'](y6v$1['fileNativeDir'], xtmu_['create'](q59ne, q59ne['onMkdirCallBack']))), q59ne['window']['focus'] = function () {}, g8abcq['getUrlPath'] = function () {}, q59ne['window']['logtime'] = function (qeb9n) {}, q59ne['window']['alertTimeLog'] = function (tf_xmu) {}, q59ne['window']['resetShareInfo'] = function () {}, q59ne['window']['CanvasRenderingContext2D'] = function () {}, q59ne['window']['CanvasRenderingContext2D']['prototype'] = q59ne['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], q59ne['window']['document']['body']['appendChild'] = function () {}, q59ne['EnvConfig']['pixelRatioInt'] = 0x0, uplx4t['getPixelRatio'] = q59ne['pixelRatio'], q59ne['_preCreateElement'] = $v1i['createElement'], $v1i['createElement'] = q59ne['createElement'], uplx4t['createShaderCondition'] = q59ne['createShaderCondition'], r107v2['parseXMLFromString'] = q59ne['parseXMLFromString'], _xumof['_createInputElement'] = um_oxf['_createInputElement'], q59ne['EnvConfig']['load'] = jkh4is['prototype']['load'], jkh4is['prototype']['load'] = ea9qb8['prototype']['load'], q59ne['isZiYu'] && enq98 && wx['onMessage'](function (of_umx) {
        of_umx['isLoad'] && (y6v$1['ziyuFileData'][of_umx['url']] = of_umx['data']);
      });
    }, q59ne['onMkdirCallBack'] = function (v$7y61, i$jky6) {
      if (!v$7y61) y6v$1['filesListObj'] = JSON['parse'](i$jky6['data']);
    }, q59ne['pixelRatio'] = function () {
      if (!q59ne['EnvConfig']['pixelRatioInt']) try {
        var ih4j = wx['getSystemInfoSync']();return q59ne['EnvConfig']['pixelRatioInt'] = ih4j['pixelRatio'], ih4j = ih4j, ih4j['pixelRatio'];
      } catch (we53) {}return q59ne['EnvConfig']['pixelRatioInt'];
    }, q59ne['createElement'] = function (z35ne) {
      if (z35ne == 'canvas') {
        var isy;return q59ne['idx'] == 0x1 ? q59ne['isZiYu'] ? (isy = sharedCanvas, isy['style'] = {}) : isy = window['canvas'] : isy = window['wx']['createCanvas'](), q59ne['idx']++, isy;
      } else {
        if (z35ne == 'textarea' || z35ne == 'input') return q59ne['onCreateInput'](z35ne);else {
          if (z35ne == 'div') {
            var qdb = q59ne['_preCreateElement'](z35ne);return qdb['contains'] = function (n5w3) {
              return null;
            }, qdb['removeChild'] = function (xptl4u) {}, qdb;
          } else return q59ne['_preCreateElement'](z35ne);
        }
      }
    }, q59ne['onCreateInput'] = function (w3zn0) {
      var m_fuxt = q59ne['_preCreateElement'](w3zn0);return m_fuxt['focus'] = um_oxf['wxinputFocus'], m_fuxt['blur'] = um_oxf['wxinputblur'], m_fuxt['style'] = {}, m_fuxt['value'] = 0x0, m_fuxt['parentElement'] = {}, m_fuxt['placeholder'] = {}, m_fuxt['type'] = {}, m_fuxt['setColor'] = function (ijh4s) {}, m_fuxt['setType'] = function (qg8b9) {}, m_fuxt['setFontFace'] = function ($v61) {}, m_fuxt['addEventListener'] = function (txum_f) {}, m_fuxt['contains'] = function (oux_fm) {
        return null;
      }, m_fuxt['removeChild'] = function (v762r1) {}, m_fuxt;
    }, q59ne['createShaderCondition'] = function (q9e5n) {
      var splk4h = this,
          pxufl = function () {
        var l_fxut = q9e5n;return splk4h[q9e5n['replace']('this.', '')];
      };return pxufl;
    }, q59ne['EnvConfig'] = null, q59ne['window'] = null, q59ne['_preCreateElement'] = null, q59ne['_inited'] = ![], q59ne['wxRequest'] = null, q59ne['systemInfo'] = null, q59ne['version'] = '0.0.1', q59ne['isZiYu'] = ![], q59ne['isPosMsgYu'] = ![], q59ne['parseXMLFromString'] = function (lshp4k) {
      var z5wn, eb8n9q;lshp4k = lshp4k['replace'](/>\s+</g, '><');try {
        z5wn = new window['Parser']['DOMParser']()['parseFromString'](lshp4k, 'text/xml');
      } catch (yi1j$6) {
        throw '需要引入xml解析库文件';
      }return z5wn;
    }, q59ne['idx'] = 0x1, q59ne;
  }(),
      muo_ = function () {
    function j4sikh() {}i$6y1v(j4sikh, 'laya.wx.mini.MiniImage');var y716 = j4sikh['prototype'];return y716['_loadImage'] = function (klphs4) {
      var sp4lh = this,
          l4pxts = ![];klphs4['indexOf']('layaNativeDir/') == -0x1 && (l4pxts = !![], klphs4 = xlfpt['formatURL'](klphs4));if (!y6v$1['getFileInfo'](klphs4)) {
        if (klphs4['indexOf']('http://') != -0x1 || klphs4['indexOf']('https://') != -0x1) y6v$1['downImg'](klphs4, new xtmu_(j4sikh, j4sikh['onDownImgCallBack'], [klphs4, sp4lh]), klphs4);else j4sikh['onCreateImage'](klphs4, sp4lh, !![]);
      } else j4sikh['onCreateImage'](klphs4, sp4lh, !l4pxts);
    }, j4sikh['onDownImgCallBack'] = function (khpjs4, hpls4, mo) {
      if (!mo) j4sikh['onCreateImage'](khpjs4, hpls4);else hpls4['onError'](null);
    }, j4sikh['onCreateImage'] = function (k$hiy, w5n, uxfl_t) {
      uxfl_t === void 0x0 && (uxfl_t = ![]);var lftuxp;if (!uxfl_t) {
        var rv27 = y6v$1['getFileInfo'](k$hiy),
            $6r7 = rv27['md5'];lftuxp = y6v$1['getFileNativePath']($6r7);
      } else lftuxp = k$hiy;if (w5n['imgCache'] == null) w5n['imgCache'] = {};var k4shi;function lu4xt() {
        k4shi['onload'] = null, k4shi['onerror'] = null, delete w5n['imgCache'][k$hiy];
      };var wnz30 = function () {
        lu4xt(), w5n['onLoaded'](k4shi);
      },
          nw3z = function () {
        lu4xt(), w5n['event']('error', 'Load image failed');
      };w5n['_type'] == 'nativeimage' ? (k4shi = new $v1i['window']['Image'](), k4shi['crossOrigin'] = '', k4shi['onload'] = wnz30, k4shi['onerror'] = nw3z, k4shi['src'] = lftuxp, w5n['imgCache'][k$hiy] = k4shi) : new oxm_['create'](lftuxp, { 'onload': wnz30, 'onerror': nw3z, 'onCreate': function (x_fltu) {
          k4shi = x_fltu, w5n['imgCache'][k$hiy] = x_fltu;
        } });
    }, j4sikh;
  }(),
      um_oxf = function () {
    function v61r2() {}return i$6y1v(v61r2, 'laya.wx.mini.MiniInput'), v61r2['_createInputElement'] = function () {
      _xumof['_initInput'](_xumof['area'] = $v1i['createElement']('textarea')), _xumof['_initInput'](_xumof['input'] = $v1i['createElement']('input')), _xumof['inputContainer'] = $v1i['createElement']('div'), _xumof['inputContainer']['style']['position'] = 'absolute', _xumof['inputContainer']['style']['zIndex'] = 0x186a0, $v1i['container']['appendChild'](_xumof['inputContainer']), _xumof['inputContainer']['setPos'] = function (yki$h, kspl4) {
        _xumof['inputContainer']['style']['left'] = yki$h + 'px', _xumof['inputContainer']['style']['top'] = kspl4 + 'px';
      }, g8abcq['stage']['on']('resize', null, v61r2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (puxtf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), n3['_soundClass'] = fmxt, n3['_musicClass'] = fmxt;
    }, v61r2['_onStageResize'] = function () {
      var wz5n0 = g8abcq['stage']['_canvasTransform']['identity']();wz5n0['scale']($v1i['width'] / uf_txm['canvas']['width'] / uplx4t['getPixelRatio'](), $v1i['height'] / uf_txm['canvas']['height'] / uplx4t['getPixelRatio']());
    }, v61r2['wxinputFocus'] = function (pxt4ls) {
      var om_fux = _xumof['inputElement']['target'];if (om_fux && !om_fux['editable']) return;$6iv['window']['wx']['offKeyboardConfirm'](), $6iv['window']['wx']['offKeyboardInput'](), $6iv['window']['wx']['showKeyboard']({ 'defaultValue': om_fux['text'], 'maxLength': om_fux['maxChars'], 'multiple': om_fux['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tl_uxf) {}, 'fail': function (pulxt) {} }), $6iv['window']['wx']['onKeyboardConfirm'](function (hik$j) {
        var bqe9a8 = hik$j ? hik$j['value'] : '';om_fux['text'] = bqe9a8, om_fux['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $6iv['window']['wx']['onKeyboardInput'](function (jshi4k) {
        var yv6i1 = jshi4k ? jshi4k['value'] : '';if (!om_fux['multiline']) {
          if (yv6i1['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }om_fux['text'] = yv6i1, om_fux['event']('input');
      });
    }, v61r2['inputEnter'] = function () {
      _xumof['inputElement']['target']['focus'] = ![];
    }, v61r2['wxinputblur'] = function () {
      v61r2['hideKeyboard']();
    }, v61r2['hideKeyboard'] = function () {
      $6iv['window']['wx']['offKeyboardConfirm'](), $6iv['window']['wx']['offKeyboardInput'](), $6iv['window']['wx']['hideKeyboard']({ 'success': function (pxf) {
          console['log']('隐藏键盘');
        }, 'fail': function (bqcgad) {
          console['log']('隐藏键盘出错:' + (bqcgad ? bqcgad['errMsg'] : ''));
        } });
    }, v61r2;
  }(),
      ea9qb8 = function () {
    function sthp4() {}i$6y1v(sthp4, 'laya.wx.mini.MiniLoader');var cagdb = sthp4['prototype'];return cagdb['load'] = function (hkis, jsyhk, zn0w35, y61i$, j6y1$) {
      zn0w35 === void 0x0 && (zn0w35 = !![]), j6y1$ === void 0x0 && (j6y1$ = ![]);var yj6i$ = this;yj6i$['_url'] = hkis;if (hkis['indexOf']('data:image') === 0x0) yj6i$['_type'] = jsyhk = 'image';else yj6i$['_type'] = jsyhk || (jsyhk = yj6i$['getTypeFromUrl'](hkis));yj6i$['_cache'] = zn0w35, yj6i$['_data'] = null;var g98aqb = 'ascii';if (hkis['indexOf']('.fnt') != -0x1) g98aqb = 'utf8';else jsyhk == 'arraybuffer' && (g98aqb = '');;var rv16 = r107v2['getFileExtension'](hkis);if (sthp4['_fileTypeArr']['indexOf'](rv16) != -0x1) $6iv['EnvConfig']['load']['call'](this, hkis, jsyhk, zn0w35, y61i$, j6y1$);else {
        if (!y6v$1['getFileInfo'](hkis)) {
          if (hkis['indexOf']('layaNativeDir/') != -0x1) {
            if ($6iv['isZiYu']) {
              var v6i$y = y6v$1['ziyuFileData'][hkis];yj6i$['onLoaded'](v6i$y);return;
            } else {
              cosnole['log']('read read'), y6v$1['read'](hkis, g98aqb, new xtmu_(sthp4, sthp4['onReadNativeCallBack'], [g98aqb, hkis, jsyhk, zn0w35, y61i$, j6y1$, yj6i$]));return;
            }
          }if (xlfpt['rootPath'] == '') var n9e8qb = hkis;else n9e8qb = hkis['split'](xlfpt['rootPath'])[0x0];hkis['indexOf']('http://') != -0x1 || hkis['indexOf']('https://') != -0x1 ? $6iv['EnvConfig']['load']['call'](yj6i$, hkis, jsyhk, zn0w35, y61i$, j6y1$) : y6v$1['readFile'](n9e8qb, g98aqb, new xtmu_(sthp4, sthp4['onReadNativeCallBack'], [g98aqb, hkis, jsyhk, zn0w35, y61i$, j6y1$, yj6i$]), hkis);
        } else $6iv['EnvConfig']['load']['call'](this, hkis, jsyhk, zn0w35, y61i$, j6y1$);
      }
    }, cagdb['resMgrLoad'] = function (ls, n8we, upxl, w532z, xtfup, $hyikj, $khjyi) {
      upxl === void 0x0 && (upxl = 0x0), w532z === void 0x0 && (w532z = ![]), xtfup === void 0x0 && (xtfup = ![]), $hyikj === void 0x0 && ($hyikj = 0x0), $khjyi === void 0x0 && ($khjyi = 0x3), ls['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ls), $6iv['EnvConfig']['resMgrLoad'](ls, (wn05, r$v7, skphl) => {
        sthp4['prototype']['resMgrLoadCallBack'](wn05, r$v7, skphl, n8we);
      }, upxl, w532z, xtfup, $hyikj, $khjyi);
    }, cagdb['resMgrLoadCallBack'] = function (khi$yj, i$1yv, mfx_o, h4jisk) {
      console['log']('buff:::', khi$yj, mfx_o, y6v$1['fileNativeDir'] + '///' + y6v$1['fileListName']), h4jisk(khi$yj, i$1yv, mfx_o);
    }, cagdb['clearRes'] = function (htlsp4, qnb9e) {
      qnb9e === void 0x0 && (qnb9e = ![]);var w0z3r2 = this;w0z3r2['clearRes'](htlsp4, qnb9e);var uxtp4 = y6v$1['getFileInfo'](htlsp4);if (uxtp4 && (htlsp4['indexOf']('http://') != -0x1 || htlsp4['indexOf']('https://') != -0x1)) {
        var v0r712 = uxtp4['md5'],
            jk$yi6 = y6v$1['getFileNativePath'](v0r712);y6v$1['remove'](jk$yi6);
      }
    }, sthp4['onReadNativeCallBack'] = function ($716vr, uofm_x, gabdq, wz3r, ltu4, of_m, ew3nz, eq8b9a, k4lhs) {
      wz3r === void 0x0 && (wz3r = !![]), of_m === void 0x0 && (of_m = ![]), eq8b9a === void 0x0 && (eq8b9a = 0x0);if (!eq8b9a) {
        var nz50w;if (gabdq == 'json' || gabdq == 'atlas') nz50w = $6iv['getJson'](k4lhs['data']);else gabdq == 'xml' ? nz50w = r107v2['parseXMLFromString'](k4lhs['data']) : nz50w = k4lhs['data'];ew3nz['onLoaded'](nz50w), !$6iv['isZiYu'] && $6iv['isPosMsgYu'] && gabdq != 'arraybuffer' && wx['postMessage']({ 'url': uofm_x, 'data': nz50w, 'isLoad': !![] });
      } else eq8b9a == 0x1 && $6iv['EnvConfig']['load']['call'](ew3nz, uofm_x, gabdq, wz3r, ltu4, of_m);
    }, hpslt4(sthp4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), sthp4;
  }(),
      y6v$1 = function (ew8) {
    function lp4uxt() {
      lp4uxt['__super']['call'](this);;
    }return i$6y1v(lp4uxt, 'laya.wx.mini.MiniFileMgr', ew8), lp4uxt['isLoadFile'] = function (fxtl_) {
      return lp4uxt['_fileTypeArr']['indexOf'](fxtl_) != -0x1 ? !![] : ![];
    }, lp4uxt['getFileInfo'] = function (nwz3e5) {
      var lfu = nwz3e5['split']('?')[0x0],
          jiyk$h = lp4uxt['filesListObj'][lfu];if (jiyk$h == null) return null;else return jiyk$h;return null;
    }, lp4uxt['onFileUpdate'] = function (px4tsl, qgb8ac) {
      var y67v1$ = px4tsl['split']('/'),
          h4tp = y67v1$[y67v1$['length'] - 0x1],
          $hkj = lp4uxt['getFileInfo'](qgb8ac);if ($hkj == null) lp4uxt['onSaveFile'](qgb8ac, h4tp);else {
        if ($hkj['readyUrl'] != qgb8ac) lp4uxt['remove'](h4tp, qgb8ac);
      }
    }, lp4uxt['exits'] = function (z07r3, aqgbcd) {
      var skplh = lp4uxt['getFileNativePath'](z07r3);lp4uxt['fs']['getFileInfo']({ 'filePath': skplh, 'success': function (tsxp4) {
          aqgbcd != null && aqgbcd['runWith']([0x0, tsxp4]);
        }, 'fail': function (m_oxu) {
          aqgbcd != null && aqgbcd['runWith']([0x1, m_oxu]);
        } });
    }, lp4uxt['read'] = function (v61$7, b8qca, jh4ski, hisk) {
      b8qca === void 0x0 && (b8qca = 'ascill'), hisk === void 0x0 && (hisk = '');var sjhkp4;hisk != '' ? sjhkp4 = lp4uxt['getFileNativePath'](v61$7) : sjhkp4 = v61$7, lp4uxt['fs']['readFile']({ 'filePath': sjhkp4, 'encoding': b8qca, 'success': function (khsij4) {
          jh4ski != null && jh4ski['runWith']([0x0, khsij4]);
        }, 'fail': function (_mtx) {
          if (_mtx && hisk != '') lp4uxt['down'](hisk, b8qca, jh4ski, hisk);else jh4ski != null && jh4ski['runWith']([0x1]);
        } });
    }, lp4uxt['readNativeFile'] = function ($1r6v, qn5) {
      lp4uxt['fs']['readFile']({ 'filePath': $1r6v, 'encoding': '', 'success': function ($1yi) {
          qn5 != null && qn5['runWith']([0x0]);
        }, 'fail': function (htsl) {
          qn5 != null && qn5['runWith']([0x1]);
        } });
    }, lp4uxt['down'] = function (mfx_ou, ea98, hky$ji, iy$16) {
      ea98 === void 0x0 && (ea98 = 'ascill'), iy$16 === void 0x0 && (iy$16 = '');var y16i$ = lp4uxt['getFileNativePath'](iy$16),
          bqgcda = lp4uxt['wxdown']({ 'url': mfx_ou, 'filePath': y16i$, 'success': function ($iv6) {
          if ($iv6['statusCode'] === 0xc8) lp4uxt['readFile']($iv6['filePath'], ea98, hky$ji, iy$16);
        }, 'fail': function (qacgb) {
          hky$ji != null && hky$ji['runWith']([0x1, qacgb]);
        } });bqgcda['onProgressUpdate'](function (yisjhk) {
        hky$ji != null && hky$ji['runWith']([0x2, yisjhk['progress']]);
      });
    }, lp4uxt['readFile'] = function (xu4ltp, vy761$, hk, qbg8c) {
      vy761$ === void 0x0 && (vy761$ = 'ascill'), qbg8c === void 0x0 && (qbg8c = ''), lp4uxt['fs']['readFile']({ 'filePath': xu4ltp, 'encoding': vy761$, 'success': function (hlk4sp) {
          if (xu4ltp['indexOf']('http://') != -0x1 || xu4ltp['indexOf']('https://') != -0x1) lp4uxt['onFileUpdate'](xu4ltp, qbg8c);hk != null && hk['runWith']([0x0, hlk4sp]);
        }, 'fail': function (ba98) {
          if (ba98) hk != null && hk['runWith']([0x1, ba98]);
        } });
    }, lp4uxt['downImg'] = function (kjps4h, qacg8, gcaq8b) {
      gcaq8b === void 0x0 && (gcaq8b = '');var y$jkhi = lp4uxt['wxdown']({ 'url': kjps4h, 'success': function (l4upt) {
          l4upt['statusCode'] === 0xc8 && lp4uxt['copyFile'](l4upt['tempFilePath'], gcaq8b, qacg8);
        }, 'fail': function (k4slhp) {
          qacg8 != null && qacg8['runWith']([0x1, k4slhp]);
        } });
    }, lp4uxt['copyFile'] = function (r1$7, w23, hjsky) {
      var q98neb = r1$7['split']('/'),
          z53wn0 = q98neb[q98neb['length'] - 0x1],
          sl4t = w23['split']('?')[0x0],
          rw032 = lp4uxt['getFileInfo'](w23),
          lp4tx = lp4uxt['getFileNativePath'](z53wn0);lp4uxt['fs']['copyFile']({ 'srcPath': r1$7, 'destPath': lp4tx, 'success': function (baqgcd) {
          if (!rw032) lp4uxt['onSaveFile'](w23, z53wn0), hjsky != null && hjsky['runWith']([0x0]);else {
            if (rw032['readyUrl'] != w23) lp4uxt['remove'](z53wn0, w23, hjsky);
          }
        }, 'fail': function (ksph) {
          hjsky != null && hjsky['runWith']([0x1, ksph]);
        } });
    }, lp4uxt['getFileNativePath'] = function (j$i61y) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + j$i61y;
    }, lp4uxt['remove'] = function (zew3n, px4slt, dabqg) {
      px4slt === void 0x0 && (px4slt = '');var tuxf_m = lp4uxt['getFileInfo'](px4slt),
          a9g8 = lp4uxt['getFileNativePath'](tuxf_m['md5']);g8abcq['loader']['clearRes'](tuxf_m['readyUrl']), lp4uxt['fs']['unlink']({ 'filePath': a9g8, 'success': function (hkjis4) {
          if (px4slt != '') lp4uxt['onSaveFile'](px4slt, zew3n);dabqg != null && dabqg['runWith']([0x0]);
        }, 'fail': function (ki6j) {} });
    }, lp4uxt['onSaveFile'] = function (t4phl, bag9q8) {
      var ks4jih = t4phl['split']('?')[0x0];lp4uxt['filesListObj'][ks4jih] = { 'md5': bag9q8, 'readyUrl': t4phl }, lp4uxt['fs']['writeFile']({ 'filePath': lp4uxt['fileNativeDir'] + '/' + lp4uxt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lp4uxt['filesListObj']), 'success': function (j16$yi) {
          console['log']('写入测试测试成功：', j16$yi);
        }, 'fail': function (plxt4) {
          console['log']('写入测试测试失败：', plxt4);
        } });
    }, lp4uxt['existDir'] = function (uftm_x, s4l) {
      lp4uxt['fs']['mkdir']({ 'dirPath': uftm_x, 'success': function (_moxuf) {
          s4l != null && s4l['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (w95) {
          if (w95['errMsg']['indexOf']('file already exists') != -0x1) lp4uxt['readSync'](lp4uxt['fileListName'], 'utf8', s4l);else s4l != null && s4l['runWith']([0x1, w95]);
        } });
    }, lp4uxt['readSync'] = function (e5q8n9, v1$67y, slh4tp, ksyi) {
      v1$67y === void 0x0 && (v1$67y = 'ascill'), ksyi === void 0x0 && (ksyi = '');var oufx_ = lp4uxt['getFileNativePath'](e5q8n9),
          jhp4;try {
        jhp4 = lp4uxt['fs']['readFileSync'](oufx_), slh4tp != null && slh4tp['runWith']([0x0, { 'data': jhp4 }]);
      } catch (l4shk) {
        slh4tp != null && slh4tp['runWith']([0x1]);
      }
    }, lp4uxt['readCache'] = function () {}, lp4uxt['writeCache'] = function (gcqa) {
      var y6$ik = readyUrl['split']('?')[0x0];lp4uxt['filesListObj'][y6$ik] = { 'md5': md5Name, 'readyUrl': readyUrl }, lp4uxt['fs']['writeFile']({ 'filePath': lp4uxt['fileNativeDir'] + '/' + lp4uxt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lp4uxt['filesListObj']), 'success': function (ltpsh) {}, 'fail': function (lt4spx) {} });
    }, lp4uxt['setNativeFileDir'] = function (psl4hk) {
      lp4uxt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + psl4hk;
    }, lp4uxt['filesListObj'] = {}, lp4uxt['fileNativeDir'] = null, lp4uxt['fileListName'] = 'layaairfiles.txt', lp4uxt['ziyuFileData'] = {}, hpslt4(lp4uxt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), lp4uxt;
  }(jskp),
      fmxt = function (pstl) {
    function ne598() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ne598['__super']['call'](this), this['_sound'] = ne598['_createSound']();
    }i$6y1v(ne598, 'laya.wx.mini.MiniSound', pstl);var plths4 = ne598['prototype'];return plths4['load'] = function (cqgadb) {
      var plsx4 = this;cqgadb = xlfpt['formatURL'](cqgadb), this['url'] = cqgadb;if (ne598['_audioCache'][cqgadb]) {
        this['event']('complete');return;
      }function hps4tl() {
        if (ne598['_null'] != undefined) plsx4['_sound']['onCanplay'](ne598['_null']), plsx4['_sound']['onError'](ne598['_null']);else try {
          plsx4['_sound']['onCanplay'](null), plsx4['_sound']['onError'](null), ne598['_null'] = null;
        } catch (wen958) {
          console['warn']('[wxmini] _clearSound:' + wen958), plsx4['_sound']['onCanplay'](h4ski), plsx4['_sound']['onError'](h4ski), ne598['_null'] = h4ski;
        }
      }function ysij() {
        hps4tl(), jy61$['loaded'] = !![], jy61$['event']('complete'), ne598['_audioCache'][jy61$['url']] = jy61$;
      }function ga8bcq(xt_fm) {
        console['error']('errCode=' + xt_fm['errCode'] + '  errMsg=' + xt_fm['errMsg']), hps4tl(), jy61$['event']('error');
      }function h4ski() {}this['_sound']['onCanplay'](ysij), this['_sound']['onError'](ga8bcq), this['_sound']['src'] = cqgadb;var jy61$ = this;
    }, plths4['play'] = function (qab8, qe85n) {
      qab8 === void 0x0 && (qab8 = 0x0), qe85n === void 0x0 && (qe85n = 0x0);var j$yik6;if (this['url'] == n3['_tMusic']) {
        if (!ne598['_musicAudio']) ne598['_musicAudio'] = ne598['_createSound']();j$yik6 = ne598['_musicAudio'];
      } else j$yik6 = ne598['_createSound']();j$yik6['src'] = this['url'];var _mxuft = new _tuxm(j$yik6);return _mxuft['url'] = this['url'], _mxuft['loops'] = qe85n, _mxuft['startTime'] = qab8, _mxuft['play'](), n3['addChannel'](_mxuft), _mxuft;
    }, plths4['dispose'] = function () {
      var stl4 = ne598['_audioCache'][this['url']];stl4 && (stl4['src'] = '', delete ne598['_audioCache'][this['url']]);
    }, w5032(0x0, plths4, 'duration', function () {
      return this['_sound']['duration'];
    }), ne598['_createSound'] = function () {
      return ne598['_id']++, $6iv['window']['wx']['createInnerAudioContext']();
    }, ne598['_musicAudio'] = null, ne598['_id'] = 0x0, ne598['_audioCache'] = {}, ne598['_null'] = undefined, ne598;
  }(jskp),
      _tuxm = function (pkh4s) {
    function q5n(i6$yj1) {
      this['_audio'] = null, this['_onEnd'] = null, q5n['__super']['call'](this), this['_audio'] = i6$yj1, this['_onEnd'] = r107v2['bind'](this['__onEnd'], this), i6$yj1['onEnded'](this['_onEnd']);
    }i$6y1v(q5n, 'laya.wx.mini.MiniSoundChannel', pkh4s);var ksp4lh = q5n['prototype'];return ksp4lh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (g8abcq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ksp4lh['__onNull'] = function () {}, ksp4lh['play'] = function () {
      this['isStopped'] = ![], n3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ksp4lh['stop'] = function () {
      this['isStopped'] = !![], n3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (q5n['_null'] != undefined) this['_audio']['onEnded'](q5n['_null']);else try {
        this['_audio']['onEnded'](null), q5n['_null'] = null;
      } catch (iy$j) {
        console['warn']('[wxmini] stop:' + iy$j), this['_audio']['onEnded'](r107v2['bind'](this['__onNull'], this)), q5n['_null'] = r107v2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ksp4lh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ksp4lh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], n3['addChannel'](this), this['_audio']['play']();
    }, w5032(0x0, ksp4lh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), w5032(0x0, ksp4lh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), w5032(0x0, ksp4lh, 'volume', function () {
      return 0x1;
    }, function (v2r71) {}), q5n['_null'] = undefined, q5n;
  }(qbdacg);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h4kps in Laya) {
    var qcgab8 = Laya[h4kps];qcgab8 && qcgab8['__isclass'] && (exports[h4kps] = qcgab8);
  }
});