var k = wx.$f;
(function (window, document, bthmf) {
  var xnwdes = bthmf['un'],
      fitbh = bthmf['uns'],
      cdwsj = bthmf['static'],
      mtfhi0 = bthmf['class'],
      tibf = bthmf['getset'],
      mhif0t = bthmf['__newvec'],
      _04q5 = laya['utils']['Browser'],
      ft0mqh = laya['events']['Event'],
      vimu1b = laya['events']['EventDispatcher'],
      wedsnx = laya['resource']['HTMLImage'],
      w8e = laya['utils']['Handler'],
      fm0tqh = laya['display']['Input'],
      jncw = laya['net']['Loader'],
      scowdj = laya['maths']['Matrix'],
      cd2j6o = laya['renders']['Render'],
      _co426 = laya['utils']['RunDriver'],
      itfhmb = laya['media']['Sound'],
      z7xre8 = laya['media']['SoundChannel'],
      jsxnw = laya['media']['SoundManager'],
      x78erz = laya['display']['Stage'],
      i1bmu = laya['net']['URL'],
      fqt0m = laya['utils']['Utils'],
      sewzxn = function () {
    function $erz() {}return mtfhi0($erz, 'laya.wx.mini.MiniAdpter'), $erz['getJson'] = function (ft0ih) {
      return JSON['parse'](ft0ih);
    }, $erz['init'] = function (ray, tf0hq5) {
      ray === void 0x0 && (ray = ![]), tf0hq5 === void 0x0 && (tf0hq5 = ![]);if ($erz['_inited']) return;$erz['window'] = window;if ($erz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$erz['_inited'] = !![], $erz['isZiYu'] = tf0hq5, $erz['isPosMsgYu'] = ray, $erz['EnvConfig'] = {}, !$erz['isZiYu'] && (bu19gv['setNativeFileDir']('/layaairGame'), bu19gv['existDir'](bu19gv['fileNativeDir'], w8e['create']($erz, $erz['onMkdirCallBack']))), $erz['window']['focus'] = function () {}, bthmf['getUrlPath'] = function () {}, $erz['window']['logtime'] = function (z$78) {}, $erz['window']['alertTimeLog'] = function (d6joc2) {}, $erz['window']['resetShareInfo'] = function () {}, $erz['window']['CanvasRenderingContext2D'] = function () {}, $erz['window']['CanvasRenderingContext2D']['prototype'] = $erz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $erz['window']['document']['body']['appendChild'] = function () {}, $erz['EnvConfig']['pixelRatioInt'] = 0x0, _co426['getPixelRatio'] = $erz['pixelRatio'], $erz['_preCreateElement'] = _04q5['createElement'], _04q5['createElement'] = $erz['createElement'], _co426['createShaderCondition'] = $erz['createShaderCondition'], fqt0m['parseXMLFromString'] = $erz['parseXMLFromString'], fm0tqh['_createInputElement'] = sxeznw['_createInputElement'], $erz['EnvConfig']['load'] = jncw['prototype']['load'], jncw['prototype']['load'] = hmq0tf['prototype']['load'], $erz['isZiYu'] && ray && wx['onMessage'](function (h0ft5) {
        h0ft5['isLoad'] && (bu19gv['ziyuFileData'][h0ft5['url']] = h0ft5['data']);
      });
    }, $erz['onMkdirCallBack'] = function (hfqt, vmbt) {
      if (!hfqt) bu19gv['filesListObj'] = JSON['parse'](vmbt['data']);
    }, $erz['pixelRatio'] = function () {
      if (!$erz['EnvConfig']['pixelRatioInt']) try {
        var njcswd = wx['getSystemInfoSync']();return $erz['EnvConfig']['pixelRatioInt'] = njcswd['pixelRatio'], njcswd = njcswd, njcswd['pixelRatio'];
      } catch (bvm) {}return $erz['EnvConfig']['pixelRatioInt'];
    }, $erz['createElement'] = function (fbtmh) {
      if (fbtmh == 'canvas') {
        var $873;return $erz['idx'] == 0x1 ? $erz['isZiYu'] ? ($873 = sharedCanvas, $873['style'] = {}) : $873 = window['canvas'] : $873 = window['wx']['createCanvas'](), $erz['idx']++, $873;
      } else {
        if (fbtmh == 'textarea' || fbtmh == 'input') return $erz['onCreateInput'](fbtmh);else {
          if (fbtmh == 'div') {
            var xzr87 = $erz['_preCreateElement'](fbtmh);return xzr87['contains'] = function (dewsxn) {
              return null;
            }, xzr87['removeChild'] = function (a$3) {}, xzr87;
          } else return $erz['_preCreateElement'](fbtmh);
        }
      }
    }, $erz['onCreateInput'] = function (mfibvt) {
      var bmivf = $erz['_preCreateElement'](mfibvt);return bmivf['focus'] = sxeznw['wxinputFocus'], bmivf['blur'] = sxeznw['wxinputblur'], bmivf['style'] = {}, bmivf['value'] = 0x0, bmivf['parentElement'] = {}, bmivf['placeholder'] = {}, bmivf['type'] = {}, bmivf['setColor'] = function (tvfib) {}, bmivf['setType'] = function (ihft) {}, bmivf['setFontFace'] = function (tq0mf) {}, bmivf['addEventListener'] = function (r8$3y7) {}, bmivf['contains'] = function (t0ih) {
        return null;
      }, bmivf['removeChild'] = function (q50_k4) {}, bmivf;
    }, $erz['createShaderCondition'] = function (xn8e) {
      var k50h_ = this,
          wenzs = function () {
        var mu1v = xn8e;return k50h_[xn8e['replace']('this.', '')];
      };return wenzs;
    }, $erz['EnvConfig'] = null, $erz['window'] = null, $erz['_preCreateElement'] = null, $erz['_inited'] = ![], $erz['wxRequest'] = null, $erz['systemInfo'] = null, $erz['version'] = '0.0.1', $erz['isZiYu'] = ![], $erz['isPosMsgYu'] = ![], $erz['parseXMLFromString'] = function (mbivf) {
      var tqhk05, p7$3y;mbivf = mbivf['replace'](/>\s+</g, '><');try {
        tqhk05 = new window['Parser']['DOMParser']()['parseFromString'](mbivf, 'text/xml');
      } catch (r8z3$7) {
        throw '需要引入xml解析库文件';
      }return tqhk05;
    }, $erz['idx'] = 0x1, $erz;
  }(),
      xe8rz7 = function () {
    function cdws() {}mtfhi0(cdws, 'laya.wx.mini.MiniImage');var c64_2o = cdws['prototype'];return c64_2o['_loadImage'] = function (fuivb) {
      var q54_k0 = this,
          er$8 = ![];fuivb['indexOf']('layaNativeDir/') == -0x1 && (er$8 = !![], fuivb = i1bmu['formatURL'](fuivb));if (!bu19gv['getFileInfo'](fuivb)) {
        if (fuivb['indexOf']('http://') != -0x1 || fuivb['indexOf']('https://') != -0x1) bu19gv['downImg'](fuivb, new w8e(cdws, cdws['onDownImgCallBack'], [fuivb, q54_k0]), fuivb);else cdws['onCreateImage'](fuivb, q54_k0, !![]);
      } else cdws['onCreateImage'](fuivb, q54_k0, !er$8);
    }, cdws['onDownImgCallBack'] = function (mbivfu, z8nwex, tvbfi) {
      if (!tvbfi) cdws['onCreateImage'](mbivfu, z8nwex);else z8nwex['onError'](null);
    }, cdws['onCreateImage'] = function (j24, p3$7, rz73$) {
      rz73$ === void 0x0 && (rz73$ = ![]);var zr$8e;if (!rz73$) {
        var uivfmb = bu19gv['getFileInfo'](j24),
            $7ray = uivfmb['md5'];zr$8e = bu19gv['getFileNativePath']($7ray);
      } else zr$8e = j24;if (p3$7['imgCache'] == null) p3$7['imgCache'] = {};var a$y;function rnex8() {
        a$y['onload'] = null, a$y['onerror'] = null, delete p3$7['imgCache'][j24];
      };var k6_4o2 = function () {
        rnex8(), p3$7['onLoaded'](a$y);
      },
          r38$7z = function () {
        rnex8(), p3$7['event']('error', 'Load image failed');
      };p3$7['_type'] == 'nativeimage' ? (a$y = new _04q5['window']['Image'](), a$y['crossOrigin'] = '', a$y['onload'] = k6_4o2, a$y['onerror'] = r38$7z, a$y['src'] = zr$8e, p3$7['imgCache'][j24] = a$y) : new wedsnx['create'](zr$8e, { 'onload': k6_4o2, 'onerror': r38$7z, 'onCreate': function (rz78) {
          a$y = rz78, p3$7['imgCache'][j24] = rz78;
        } });
    }, cdws;
  }(),
      sxeznw = function () {
    function vbum1() {}return mtfhi0(vbum1, 'laya.wx.mini.MiniInput'), vbum1['_createInputElement'] = function () {
      fm0tqh['_initInput'](fm0tqh['area'] = _04q5['createElement']('textarea')), fm0tqh['_initInput'](fm0tqh['input'] = _04q5['createElement']('input')), fm0tqh['inputContainer'] = _04q5['createElement']('div'), fm0tqh['inputContainer']['style']['position'] = 'absolute', fm0tqh['inputContainer']['style']['zIndex'] = 0x186a0, _04q5['container']['appendChild'](fm0tqh['inputContainer']), fm0tqh['inputContainer']['setPos'] = function (_6c42, ez78x) {
        fm0tqh['inputContainer']['style']['left'] = _6c42 + 'px', fm0tqh['inputContainer']['style']['top'] = ez78x + 'px';
      }, bthmf['stage']['on']('resize', null, vbum1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (z7x8r) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jsxnw['_soundClass'] = ayp37, jsxnw['_musicClass'] = ayp37;
    }, vbum1['_onStageResize'] = function () {
      var wdnse = bthmf['stage']['_canvasTransform']['identity']();wdnse['scale'](_04q5['width'] / cd2j6o['canvas']['width'] / _co426['getPixelRatio'](), _04q5['height'] / cd2j6o['canvas']['height'] / _co426['getPixelRatio']());
    }, vbum1['wxinputFocus'] = function (ezr8) {
      var e8xzw = fm0tqh['inputElement']['target'];if (e8xzw && !e8xzw['editable']) return;sewzxn['window']['wx']['offKeyboardConfirm'](), sewzxn['window']['wx']['offKeyboardInput'](), sewzxn['window']['wx']['showKeyboard']({ 'defaultValue': e8xzw['text'], 'maxLength': e8xzw['maxChars'], 'multiple': e8xzw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qthfm0) {}, 'fail': function (k465) {} }), sewzxn['window']['wx']['onKeyboardConfirm'](function (t0fm) {
        var ko26_4 = t0fm ? t0fm['value'] : '';e8xzw['text'] = ko26_4, e8xzw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sewzxn['window']['wx']['onKeyboardInput'](function (dcwojs) {
        var r$z78 = dcwojs ? dcwojs['value'] : '';if (!e8xzw['multiline']) {
          if (r$z78['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }e8xzw['text'] = r$z78, e8xzw['event']('input');
      });
    }, vbum1['inputEnter'] = function () {
      fm0tqh['inputElement']['target']['focus'] = ![];
    }, vbum1['wxinputblur'] = function () {
      vbum1['hideKeyboard']();
    }, vbum1['hideKeyboard'] = function () {
      sewzxn['window']['wx']['offKeyboardConfirm'](), sewzxn['window']['wx']['offKeyboardInput'](), sewzxn['window']['wx']['hideKeyboard']({ 'success': function (tbfihm) {
          console['log']('隐藏键盘');
        }, 'fail': function (rz8) {
          console['log']('隐藏键盘出错:' + (rz8 ? rz8['errMsg'] : ''));
        } });
    }, vbum1;
  }(),
      hmq0tf = function () {
    function qk50th() {}mtfhi0(qk50th, 'laya.wx.mini.MiniLoader');var esznxw = qk50th['prototype'];return esznxw['load'] = function (r73y, wcds, wcsjdn, i1bvu9, mtifv) {
      wcsjdn === void 0x0 && (wcsjdn = !![]), mtifv === void 0x0 && (mtifv = ![]);var ivb = this;ivb['_url'] = r73y;if (r73y['indexOf']('data:image') === 0x0) ivb['_type'] = wcds = 'image';else ivb['_type'] = wcds || (wcds = ivb['getTypeFromUrl'](r73y));ivb['_cache'] = wcsjdn, ivb['_data'] = null;var _k5624 = 'ascii';if (r73y['indexOf']('.fnt') != -0x1) _k5624 = 'utf8';else wcds == 'arraybuffer' && (_k5624 = '');;var jdo6s = fqt0m['getFileExtension'](r73y);if (qk50th['_fileTypeArr']['indexOf'](jdo6s) != -0x1) sewzxn['EnvConfig']['load']['call'](this, r73y, wcds, wcsjdn, i1bvu9, mtifv);else {
        if (!bu19gv['getFileInfo'](r73y)) {
          if (r73y['indexOf']('layaNativeDir/') != -0x1) {
            if (sewzxn['isZiYu']) {
              var $y7r3 = bu19gv['ziyuFileData'][r73y];ivb['onLoaded']($y7r3);return;
            } else {
              cosnole['log']('read read'), bu19gv['read'](r73y, _k5624, new w8e(qk50th, qk50th['onReadNativeCallBack'], [_k5624, r73y, wcds, wcsjdn, i1bvu9, mtifv, ivb]));return;
            }
          }if (i1bmu['rootPath'] == '') var g9u1 = r73y;else g9u1 = r73y['split'](i1bmu['rootPath'])[0x0];r73y['indexOf']('http://') != -0x1 || r73y['indexOf']('https://') != -0x1 ? sewzxn['EnvConfig']['load']['call'](ivb, r73y, wcds, wcsjdn, i1bvu9, mtifv) : bu19gv['readFile'](g9u1, _k5624, new w8e(qk50th, qk50th['onReadNativeCallBack'], [_k5624, r73y, wcds, wcsjdn, i1bvu9, mtifv, ivb]), r73y);
        } else sewzxn['EnvConfig']['load']['call'](this, r73y, wcds, wcsjdn, i1bvu9, mtifv);
      }
    }, esznxw['resMgrLoad'] = function (i0htmf, bftmvi, bfmv, en8zx, uv9i, cjdswo, sxznwe) {
      bfmv === void 0x0 && (bfmv = 0x0), en8zx === void 0x0 && (en8zx = ![]), uv9i === void 0x0 && (uv9i = ![]), cjdswo === void 0x0 && (cjdswo = 0x0), sxznwe === void 0x0 && (sxznwe = 0x3), i0htmf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i0htmf), sewzxn['EnvConfig']['resMgrLoad'](i0htmf, (_0q5hk, r8zxne, zew8xn) => {
        qk50th['prototype']['resMgrLoadCallBack'](_0q5hk, r8zxne, zew8xn, bftmvi);
      }, bfmv, en8zx, uv9i, cjdswo, sxznwe);
    }, esznxw['resMgrLoadCallBack'] = function (fmtb, dxsnw, imftb, fm0t) {
      console['log']('buff:::', fmtb, imftb, bu19gv['fileNativeDir'] + '///' + bu19gv['fileListName']), fm0t(fmtb, dxsnw, imftb);
    }, esznxw['clearRes'] = function (nxer8z, apy$37) {
      apy$37 === void 0x0 && (apy$37 = ![]);var v1ug9b = this;v1ug9b['clearRes'](nxer8z, apy$37);var a7p3 = bu19gv['getFileInfo'](nxer8z);if (a7p3 && (nxer8z['indexOf']('http://') != -0x1 || nxer8z['indexOf']('https://') != -0x1)) {
        var d26cj = a7p3['md5'],
            mvu1 = bu19gv['getFileNativePath'](d26cj);bu19gv['remove'](mvu1);
      }
    }, qk50th['onReadNativeCallBack'] = function ($73yp, k0_hq, kq_45, djo6c, xswnjd, umvifb, wnsed, rxezn, ya3p$7) {
      djo6c === void 0x0 && (djo6c = !![]), umvifb === void 0x0 && (umvifb = ![]), rxezn === void 0x0 && (rxezn = 0x0);if (!rxezn) {
        var mti;if (kq_45 == 'json' || kq_45 == 'atlas') mti = sewzxn['getJson'](ya3p$7['data']);else kq_45 == 'xml' ? mti = fqt0m['parseXMLFromString'](ya3p$7['data']) : mti = ya3p$7['data'];wnsed['onLoaded'](mti), !sewzxn['isZiYu'] && sewzxn['isPosMsgYu'] && kq_45 != 'arraybuffer' && wx['postMessage']({ 'url': k0_hq, 'data': mti, 'isLoad': !![] });
      } else rxezn == 0x1 && sewzxn['EnvConfig']['load']['call'](wnsed, k0_hq, kq_45, djo6c, xswnjd, umvifb);
    }, cdwsj(qk50th, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qk50th;
  }(),
      bu19gv = function (coj24) {
    function enrxz() {
      enrxz['__super']['call'](this);;
    }return mtfhi0(enrxz, 'laya.wx.mini.MiniFileMgr', coj24), enrxz['isLoadFile'] = function (rz87x) {
      return enrxz['_fileTypeArr']['indexOf'](rz87x) != -0x1 ? !![] : ![];
    }, enrxz['getFileInfo'] = function (fbmu) {
      var fh0mq = fbmu['split']('?')[0x0],
          tvmf = enrxz['filesListObj'][fh0mq];if (tvmf == null) return null;else return tvmf;return null;
    }, enrxz['onFileUpdate'] = function (v1bi, fq50t) {
      var $e8z7 = v1bi['split']('/'),
          sxnjd = $e8z7[$e8z7['length'] - 0x1],
          nrex = enrxz['getFileInfo'](fq50t);if (nrex == null) enrxz['onSaveFile'](fq50t, sxnjd);else {
        if (nrex['readyUrl'] != fq50t) enrxz['remove'](sxnjd, fq50t);
      }
    }, enrxz['exits'] = function (k_5426, itbmv) {
      var vu1imb = enrxz['getFileNativePath'](k_5426);enrxz['fs']['getFileInfo']({ 'filePath': vu1imb, 'success': function ($8r7z) {
          itbmv != null && itbmv['runWith']([0x0, $8r7z]);
        }, 'fail': function (tfmhq0) {
          itbmv != null && itbmv['runWith']([0x1, tfmhq0]);
        } });
    }, enrxz['read'] = function (ndscw, wcjdo, t0kqh, xnerz) {
      wcjdo === void 0x0 && (wcjdo = 'ascill'), xnerz === void 0x0 && (xnerz = '');var tmih;xnerz != '' ? tmih = enrxz['getFileNativePath'](ndscw) : tmih = ndscw, enrxz['fs']['readFile']({ 'filePath': tmih, 'encoding': wcjdo, 'success': function (_0k5qh) {
          t0kqh != null && t0kqh['runWith']([0x0, _0k5qh]);
        }, 'fail': function (f0mthi) {
          if (f0mthi && xnerz != '') enrxz['down'](xnerz, wcjdo, t0kqh, xnerz);else t0kqh != null && t0kqh['runWith']([0x1]);
        } });
    }, enrxz['readNativeFile'] = function (q05ht, ya3p) {
      enrxz['fs']['readFile']({ 'filePath': q05ht, 'encoding': '', 'success': function (py73) {
          ya3p != null && ya3p['runWith']([0x0]);
        }, 'fail': function (sncjdw) {
          ya3p != null && ya3p['runWith']([0x1]);
        } });
    }, enrxz['down'] = function (imufb, r8$3y, sodcwj, c6oj2) {
      r8$3y === void 0x0 && (r8$3y = 'ascill'), c6oj2 === void 0x0 && (c6oj2 = '');var swdxjn = enrxz['getFileNativePath'](c6oj2),
          _5k0q = enrxz['wxdown']({ 'url': imufb, 'filePath': swdxjn, 'success': function (hq0) {
          if (hq0['statusCode'] === 0xc8) enrxz['readFile'](hq0['filePath'], r8$3y, sodcwj, c6oj2);
        }, 'fail': function (ubi) {
          sodcwj != null && sodcwj['runWith']([0x1, ubi]);
        } });_5k0q['onProgressUpdate'](function (ezxn8) {
        sodcwj != null && sodcwj['runWith']([0x2, ezxn8['progress']]);
      });
    }, enrxz['readFile'] = function (bmhti, zwsx, vbi91, ya$73r) {
      zwsx === void 0x0 && (zwsx = 'ascill'), ya$73r === void 0x0 && (ya$73r = ''), enrxz['fs']['readFile']({ 'filePath': bmhti, 'encoding': zwsx, 'success': function (ndxwsj) {
          if (bmhti['indexOf']('http://') != -0x1 || bmhti['indexOf']('https://') != -0x1) enrxz['onFileUpdate'](bmhti, ya$73r);vbi91 != null && vbi91['runWith']([0x0, ndxwsj]);
        }, 'fail': function (bv1imu) {
          if (bv1imu) vbi91 != null && vbi91['runWith']([0x1, bv1imu]);
        } });
    }, enrxz['downImg'] = function (vbu9g, bimvu1, _6oc24) {
      _6oc24 === void 0x0 && (_6oc24 = '');var ub19v = enrxz['wxdown']({ 'url': vbu9g, 'success': function (jdscw) {
          jdscw['statusCode'] === 0xc8 && enrxz['copyFile'](jdscw['tempFilePath'], _6oc24, bimvu1);
        }, 'fail': function (c6o24) {
          bimvu1 != null && bimvu1['runWith']([0x1, c6o24]);
        } });
    }, enrxz['copyFile'] = function (_q40, y78r, btmi) {
      var sxwnz = _q40['split']('/'),
          tfmvb = sxwnz[sxwnz['length'] - 0x1],
          d2o = y78r['split']('?')[0x0],
          bfvium = enrxz['getFileInfo'](y78r),
          _46c2 = enrxz['getFileNativePath'](tfmvb);enrxz['fs']['copyFile']({ 'srcPath': _q40, 'destPath': _46c2, 'success': function (mufvib) {
          if (!bfvium) enrxz['onSaveFile'](y78r, tfmvb), btmi != null && btmi['runWith']([0x0]);else {
            if (bfvium['readyUrl'] != y78r) enrxz['remove'](tfmvb, y78r, btmi);
          }
        }, 'fail': function (_k40) {
          btmi != null && btmi['runWith']([0x1, _k40]);
        } });
    }, enrxz['getFileNativePath'] = function (oc62j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + oc62j;
    }, enrxz['remove'] = function (y$7a3p, er8z7x, sjwcn) {
      er8z7x === void 0x0 && (er8z7x = '');var sjcwd = enrxz['getFileInfo'](er8z7x),
          m0ft = enrxz['getFileNativePath'](sjcwd['md5']);bthmf['loader']['clearRes'](sjcwd['readyUrl']), enrxz['fs']['unlink']({ 'filePath': m0ft, 'success': function (_26ok) {
          if (er8z7x != '') enrxz['onSaveFile'](er8z7x, y$7a3p);sjwcn != null && sjwcn['runWith']([0x0]);
        }, 'fail': function (k64o_) {} });
    }, enrxz['onSaveFile'] = function (yr3$8, swoj) {
      var r83z = yr3$8['split']('?')[0x0];enrxz['filesListObj'][r83z] = { 'md5': swoj, 'readyUrl': yr3$8 }, enrxz['fs']['writeFile']({ 'filePath': enrxz['fileNativeDir'] + '/' + enrxz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](enrxz['filesListObj']), 'success': function (v1bum) {
          console['log']('写入测试测试成功：', v1bum);
        }, 'fail': function (scojwd) {
          console['log']('写入测试测试失败：', scojwd);
        } });
    }, enrxz['existDir'] = function (nzesxw, o26_k4) {
      enrxz['fs']['mkdir']({ 'dirPath': nzesxw, 'success': function (h0imft) {
          o26_k4 != null && o26_k4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mbfvui) {
          if (mbfvui['errMsg']['indexOf']('file already exists') != -0x1) enrxz['readSync'](enrxz['fileListName'], 'utf8', o26_k4);else o26_k4 != null && o26_k4['runWith']([0x1, mbfvui]);
        } });
    }, enrxz['readSync'] = function ($78y3r, fm0thi, owsdj, rzx87e) {
      fm0thi === void 0x0 && (fm0thi = 'ascill'), rzx87e === void 0x0 && (rzx87e = '');var co4_2 = enrxz['getFileNativePath']($78y3r),
          z8$7er;try {
        z8$7er = enrxz['fs']['readFileSync'](co4_2), owsdj != null && owsdj['runWith']([0x0, { 'data': z8$7er }]);
      } catch (bm1ivu) {
        owsdj != null && owsdj['runWith']([0x1]);
      }
    }, enrxz['readCache'] = function () {}, enrxz['writeCache'] = function (e8rz7$) {
      var dc6osj = readyUrl['split']('?')[0x0];enrxz['filesListObj'][dc6osj] = { 'md5': md5Name, 'readyUrl': readyUrl }, enrxz['fs']['writeFile']({ 'filePath': enrxz['fileNativeDir'] + '/' + enrxz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](enrxz['filesListObj']), 'success': function (nxjwds) {}, 'fail': function (rze78) {} });
    }, enrxz['setNativeFileDir'] = function (_526k4) {
      enrxz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _526k4;
    }, enrxz['filesListObj'] = {}, enrxz['fileNativeDir'] = null, enrxz['fileListName'] = 'layaairfiles.txt', enrxz['ziyuFileData'] = {}, cdwsj(enrxz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), enrxz;
  }(vimu1b),
      ayp37 = function (ivbu9) {
    function y$73r8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y$73r8['__super']['call'](this), this['_sound'] = y$73r8['_createSound']();
    }mtfhi0(y$73r8, 'laya.wx.mini.MiniSound', ivbu9);var b1gu = y$73r8['prototype'];return b1gu['load'] = function (fh0t5q) {
      var tqmh0f = this;fh0t5q = i1bmu['formatURL'](fh0t5q), this['url'] = fh0t5q;if (y$73r8['_audioCache'][fh0t5q]) {
        this['event']('complete');return;
      }function a$3yp() {
        if (y$73r8['_null'] != undefined) tqmh0f['_sound']['onCanplay'](y$73r8['_null']), tqmh0f['_sound']['onError'](y$73r8['_null']);else try {
          tqmh0f['_sound']['onCanplay'](null), tqmh0f['_sound']['onError'](null), y$73r8['_null'] = null;
        } catch (dnswcj) {
          console['warn']('[wxmini] _clearSound:' + dnswcj), tqmh0f['_sound']['onCanplay'](sdojc6), tqmh0f['_sound']['onError'](sdojc6), y$73r8['_null'] = sdojc6;
        }
      }function bmvf() {
        a$3yp(), nrxe8['loaded'] = !![], nrxe8['event']('complete'), y$73r8['_audioCache'][nrxe8['url']] = nrxe8;
      }function c4o62_(cwsdj) {
        console['error']('errCode=' + cwsdj['errCode'] + '  errMsg=' + cwsdj['errMsg']), a$3yp(), nrxe8['event']('error');
      }function sdojc6() {}this['_sound']['onCanplay'](bmvf), this['_sound']['onError'](c4o62_), this['_sound']['src'] = fh0t5q;var nrxe8 = this;
    }, b1gu['play'] = function ($yr73, ezxsw) {
      $yr73 === void 0x0 && ($yr73 = 0x0), ezxsw === void 0x0 && (ezxsw = 0x0);var k0_54q;if (this['url'] == jsxnw['_tMusic']) {
        if (!y$73r8['_musicAudio']) y$73r8['_musicAudio'] = y$73r8['_createSound']();k0_54q = y$73r8['_musicAudio'];
      } else k0_54q = y$73r8['_createSound']();k0_54q['src'] = this['url'];var vbufi = new btfhim(k0_54q);return vbufi['url'] = this['url'], vbufi['loops'] = ezxsw, vbufi['startTime'] = $yr73, vbufi['play'](), jsxnw['addChannel'](vbufi), vbufi;
    }, b1gu['dispose'] = function () {
      var z$e7 = y$73r8['_audioCache'][this['url']];z$e7 && (z$e7['src'] = '', delete y$73r8['_audioCache'][this['url']]);
    }, tibf(0x0, b1gu, 'duration', function () {
      return this['_sound']['duration'];
    }), y$73r8['_createSound'] = function () {
      return y$73r8['_id']++, sewzxn['window']['wx']['createInnerAudioContext']();
    }, y$73r8['_musicAudio'] = null, y$73r8['_id'] = 0x0, y$73r8['_audioCache'] = {}, y$73r8['_null'] = undefined, y$73r8;
  }(vimu1b),
      btfhim = function (xzre7) {
    function vufibm(od6csj) {
      this['_audio'] = null, this['_onEnd'] = null, vufibm['__super']['call'](this), this['_audio'] = od6csj, this['_onEnd'] = fqt0m['bind'](this['__onEnd'], this), od6csj['onEnded'](this['_onEnd']);
    }mtfhi0(vufibm, 'laya.wx.mini.MiniSoundChannel', xzre7);var hq0ft = vufibm['prototype'];return hq0ft['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bthmf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hq0ft['__onNull'] = function () {}, hq0ft['play'] = function () {
      this['isStopped'] = ![], jsxnw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hq0ft['stop'] = function () {
      this['isStopped'] = !![], jsxnw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (vufibm['_null'] != undefined) this['_audio']['onEnded'](vufibm['_null']);else try {
        this['_audio']['onEnded'](null), vufibm['_null'] = null;
      } catch (y$7ar3) {
        console['warn']('[wxmini] stop:' + y$7ar3), this['_audio']['onEnded'](fqt0m['bind'](this['__onNull'], this)), vufibm['_null'] = fqt0m['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hq0ft['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hq0ft['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jsxnw['addChannel'](this), this['_audio']['play']();
    }, tibf(0x0, hq0ft, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tibf(0x0, hq0ft, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tibf(0x0, hq0ft, 'volume', function () {
      return 0x1;
    }, function (zxsew) {}), vufibm['_null'] = undefined, vufibm;
  }(z7xre8);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jcn in Laya) {
    var wjcsdn = Laya[jcn];wjcsdn && wjcsdn['__isclass'] && (exports[jcn] = wjcsdn);
  }
});