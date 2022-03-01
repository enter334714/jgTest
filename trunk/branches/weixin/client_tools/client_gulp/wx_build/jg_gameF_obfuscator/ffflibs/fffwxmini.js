var k = wx.$f;
(function (window, document, ze8r7) {
  var k2q5_ = ze8r7['un'],
      qh50kt = ze8r7['uns'],
      dsenxw = ze8r7['static'],
      q2k_4 = ze8r7['class'],
      js6dco = ze8r7['getset'],
      xndjs = ze8r7['__newvec'],
      vtbi = laya['utils']['Browser'],
      hi0tfm = laya['events']['Event'],
      dnsxwe = laya['events']['EventDispatcher'],
      r378z = laya['resource']['HTMLImage'],
      co_64 = laya['utils']['Handler'],
      _24oc6 = laya['display']['Input'],
      xznes = laya['net']['Loader'],
      k64 = laya['maths']['Matrix'],
      wenx8z = laya['renders']['Render'],
      nxew8 = laya['utils']['RunDriver'],
      co426_ = laya['media']['Sound'],
      k25_64 = laya['media']['SoundChannel'],
      vifbmu = laya['media']['SoundManager'],
      zx7e8 = laya['display']['Stage'],
      qhf0m = laya['net']['URL'],
      dnwexs = laya['utils']['Utils'],
      miubv = function () {
    function wsndc() {}return q2k_4(wsndc, 'laya.wx.mini.MiniAdpter'), wsndc['getJson'] = function (tmfhb) {
      return JSON['parse'](tmfhb);
    }, wsndc['init'] = function (cnjwsd, a$py3) {
      cnjwsd === void 0x0 && (cnjwsd = ![]), a$py3 === void 0x0 && (a$py3 = ![]);if (wsndc['_inited']) return;wsndc['window'] = window;if (wsndc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wsndc['_inited'] = !![], wsndc['isZiYu'] = a$py3, wsndc['isPosMsgYu'] = cnjwsd, wsndc['EnvConfig'] = {}, !wsndc['isZiYu'] && (_o4c26['setNativeFileDir']('/layaairGame'), _o4c26['existDir'](_o4c26['fileNativeDir'], co_64['create'](wsndc, wsndc['onMkdirCallBack']))), wsndc['window']['focus'] = function () {}, ze8r7['getUrlPath'] = function () {}, wsndc['window']['logtime'] = function (bim1vu) {}, wsndc['window']['alertTimeLog'] = function (mub1v) {}, wsndc['window']['resetShareInfo'] = function () {}, wsndc['window']['CanvasRenderingContext2D'] = function () {}, wsndc['window']['CanvasRenderingContext2D']['prototype'] = wsndc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wsndc['window']['document']['body']['appendChild'] = function () {}, wsndc['EnvConfig']['pixelRatioInt'] = 0x0, nxew8['getPixelRatio'] = wsndc['pixelRatio'], wsndc['_preCreateElement'] = vtbi['createElement'], vtbi['createElement'] = wsndc['createElement'], nxew8['createShaderCondition'] = wsndc['createShaderCondition'], dnwexs['parseXMLFromString'] = wsndc['parseXMLFromString'], _24oc6['_createInputElement'] = ui1vb['_createInputElement'], wsndc['EnvConfig']['load'] = xznes['prototype']['load'], xznes['prototype']['load'] = b19uvi['prototype']['load'], wsndc['isZiYu'] && cnjwsd && wx['onMessage'](function (dcwoj) {
        dcwoj['isLoad'] && (_o4c26['ziyuFileData'][dcwoj['url']] = dcwoj['data']);
      });
    }, wsndc['onMkdirCallBack'] = function (v1ibu9, bumv1) {
      if (!v1ibu9) _o4c26['filesListObj'] = JSON['parse'](bumv1['data']);
    }, wsndc['pixelRatio'] = function () {
      if (!wsndc['EnvConfig']['pixelRatioInt']) try {
        var jcosd = wx['getSystemInfoSync']();return wsndc['EnvConfig']['pixelRatioInt'] = jcosd['pixelRatio'], jcosd = jcosd, jcosd['pixelRatio'];
      } catch (yra3$) {}return wsndc['EnvConfig']['pixelRatioInt'];
    }, wsndc['createElement'] = function (_o26c) {
      if (_o26c == 'canvas') {
        var e8$z;return wsndc['idx'] == 0x1 ? wsndc['isZiYu'] ? (e8$z = sharedCanvas, e8$z['style'] = {}) : e8$z = window['canvas'] : e8$z = window['wx']['createCanvas'](), wsndc['idx']++, e8$z;
      } else {
        if (_o26c == 'textarea' || _o26c == 'input') return wsndc['onCreateInput'](_o26c);else {
          if (_o26c == 'div') {
            var b1v = wsndc['_preCreateElement'](_o26c);return b1v['contains'] = function (nxeszw) {
              return null;
            }, b1v['removeChild'] = function ($p3) {}, b1v;
          } else return wsndc['_preCreateElement'](_o26c);
        }
      }
    }, wsndc['onCreateInput'] = function (vbmui) {
      var ok_462 = wsndc['_preCreateElement'](vbmui);return ok_462['focus'] = ui1vb['wxinputFocus'], ok_462['blur'] = ui1vb['wxinputblur'], ok_462['style'] = {}, ok_462['value'] = 0x0, ok_462['parentElement'] = {}, ok_462['placeholder'] = {}, ok_462['type'] = {}, ok_462['setColor'] = function (swjnd) {}, ok_462['setType'] = function (jxsnw) {}, ok_462['setFontFace'] = function (_24k56) {}, ok_462['addEventListener'] = function (_qk05h) {}, ok_462['contains'] = function (vb9) {
        return null;
      }, ok_462['removeChild'] = function (mv1b) {}, ok_462;
    }, wsndc['createShaderCondition'] = function (odj26c) {
      var mfbhit = this,
          ftib = function () {
        var scjnd = odj26c;return mfbhit[odj26c['replace']('this.', '')];
      };return ftib;
    }, wsndc['EnvConfig'] = null, wsndc['window'] = null, wsndc['_preCreateElement'] = null, wsndc['_inited'] = ![], wsndc['wxRequest'] = null, wsndc['systemInfo'] = null, wsndc['version'] = '0.0.1', wsndc['isZiYu'] = ![], wsndc['isPosMsgYu'] = ![], wsndc['parseXMLFromString'] = function (ibu1) {
      var z7r8ex, zr87;ibu1 = ibu1['replace'](/>\s+</g, '><');try {
        z7r8ex = new window['Parser']['DOMParser']()['parseFromString'](ibu1, 'text/xml');
      } catch (bimfu) {
        throw '需要引入xml解析库文件';
      }return z7r8ex;
    }, wsndc['idx'] = 0x1, wsndc;
  }(),
      xn8ez = function () {
    function $38z7r() {}q2k_4($38z7r, 'laya.wx.mini.MiniImage');var jo64c2 = $38z7r['prototype'];return jo64c2['_loadImage'] = function (e7rz$8) {
      var jo42c6 = this,
          k2q_5 = ![];e7rz$8['indexOf']('layaNativeDir/') == -0x1 && (k2q_5 = !![], e7rz$8 = qhf0m['formatURL'](e7rz$8));if (!_o4c26['getFileInfo'](e7rz$8)) {
        if (e7rz$8['indexOf']('http://') != -0x1 || e7rz$8['indexOf']('https://') != -0x1) _o4c26['downImg'](e7rz$8, new co_64($38z7r, $38z7r['onDownImgCallBack'], [e7rz$8, jo42c6]), e7rz$8);else $38z7r['onCreateImage'](e7rz$8, jo42c6, !![]);
      } else $38z7r['onCreateImage'](e7rz$8, jo42c6, !k2q_5);
    }, $38z7r['onDownImgCallBack'] = function (p$3a7y, zwesnx, $z3r87) {
      if (!$z3r87) $38z7r['onCreateImage'](p$3a7y, zwesnx);else zwesnx['onError'](null);
    }, $38z7r['onCreateImage'] = function (itbmfv, fthq50, t05fhq) {
      t05fhq === void 0x0 && (t05fhq = ![]);var er8zn;if (!t05fhq) {
        var y$8 = _o4c26['getFileInfo'](itbmfv),
            od6sc = y$8['md5'];er8zn = _o4c26['getFileNativePath'](od6sc);
      } else er8zn = itbmfv;if (fthq50['imgCache'] == null) fthq50['imgCache'] = {};var itmbfh;function v1iu9() {
        itmbfh['onload'] = null, itmbfh['onerror'] = null, delete fthq50['imgCache'][itbmfv];
      };var jdo6c = function () {
        v1iu9(), fthq50['onLoaded'](itmbfh);
      },
          jndcw = function () {
        v1iu9(), fthq50['event']('error', 'Load image failed');
      };fthq50['_type'] == 'nativeimage' ? (itmbfh = new vtbi['window']['Image'](), itmbfh['crossOrigin'] = '', itmbfh['onload'] = jdo6c, itmbfh['onerror'] = jndcw, itmbfh['src'] = er8zn, fthq50['imgCache'][itbmfv] = itmbfh) : new r378z['create'](er8zn, { 'onload': jdo6c, 'onerror': jndcw, 'onCreate': function (k26_45) {
          itmbfh = k26_45, fthq50['imgCache'][itbmfv] = k26_45;
        } });
    }, $38z7r;
  }(),
      ui1vb = function () {
    function co46() {}return q2k_4(co46, 'laya.wx.mini.MiniInput'), co46['_createInputElement'] = function () {
      _24oc6['_initInput'](_24oc6['area'] = vtbi['createElement']('textarea')), _24oc6['_initInput'](_24oc6['input'] = vtbi['createElement']('input')), _24oc6['inputContainer'] = vtbi['createElement']('div'), _24oc6['inputContainer']['style']['position'] = 'absolute', _24oc6['inputContainer']['style']['zIndex'] = 0x186a0, vtbi['container']['appendChild'](_24oc6['inputContainer']), _24oc6['inputContainer']['setPos'] = function (zr$873, q054_k) {
        _24oc6['inputContainer']['style']['left'] = zr$873 + 'px', _24oc6['inputContainer']['style']['top'] = q054_k + 'px';
      }, ze8r7['stage']['on']('resize', null, co46['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_05h) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vifbmu['_soundClass'] = _ko42, vifbmu['_musicClass'] = _ko42;
    }, co46['_onStageResize'] = function () {
      var doj26c = ze8r7['stage']['_canvasTransform']['identity']();doj26c['scale'](vtbi['width'] / wenx8z['canvas']['width'] / nxew8['getPixelRatio'](), vtbi['height'] / wenx8z['canvas']['height'] / nxew8['getPixelRatio']());
    }, co46['wxinputFocus'] = function (scwdj) {
      var u1imb = _24oc6['inputElement']['target'];if (u1imb && !u1imb['editable']) return;miubv['window']['wx']['offKeyboardConfirm'](), miubv['window']['wx']['offKeyboardInput'](), miubv['window']['wx']['showKeyboard']({ 'defaultValue': u1imb['text'], 'maxLength': u1imb['maxChars'], 'multiple': u1imb['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dxsw) {}, 'fail': function (qk_50) {} }), miubv['window']['wx']['onKeyboardConfirm'](function (qhf0) {
        var ar7$ = qhf0 ? qhf0['value'] : '';u1imb['text'] = ar7$, u1imb['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), miubv['window']['wx']['onKeyboardInput'](function (bvfu) {
        var mui1vb = bvfu ? bvfu['value'] : '';if (!u1imb['multiline']) {
          if (mui1vb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }u1imb['text'] = mui1vb, u1imb['event']('input');
      });
    }, co46['inputEnter'] = function () {
      _24oc6['inputElement']['target']['focus'] = ![];
    }, co46['wxinputblur'] = function () {
      co46['hideKeyboard']();
    }, co46['hideKeyboard'] = function () {
      miubv['window']['wx']['offKeyboardConfirm'](), miubv['window']['wx']['offKeyboardInput'](), miubv['window']['wx']['hideKeyboard']({ 'success': function ($ar7y) {
          console['log']('隐藏键盘');
        }, 'fail': function (zre8$7) {
          console['log']('隐藏键盘出错:' + (zre8$7 ? zre8$7['errMsg'] : ''));
        } });
    }, co46;
  }(),
      b19uvi = function () {
    function sjco6d() {}q2k_4(sjco6d, 'laya.wx.mini.MiniLoader');var ubfvim = sjco6d['prototype'];return ubfvim['load'] = function (dc26jo, _k4625, $78ez, $a3py7, tfmb) {
      $78ez === void 0x0 && ($78ez = !![]), tfmb === void 0x0 && (tfmb = ![]);var djc6so = this;djc6so['_url'] = dc26jo;if (dc26jo['indexOf']('data:image') === 0x0) djc6so['_type'] = _k4625 = 'image';else djc6so['_type'] = _k4625 || (_k4625 = djc6so['getTypeFromUrl'](dc26jo));djc6so['_cache'] = $78ez, djc6so['_data'] = null;var i1b9 = 'ascii';if (dc26jo['indexOf']('.fnt') != -0x1) i1b9 = 'utf8';else _k4625 == 'arraybuffer' && (i1b9 = '');;var scwjnd = dnwexs['getFileExtension'](dc26jo);if (sjco6d['_fileTypeArr']['indexOf'](scwjnd) != -0x1) miubv['EnvConfig']['load']['call'](this, dc26jo, _k4625, $78ez, $a3py7, tfmb);else {
        if (!_o4c26['getFileInfo'](dc26jo)) {
          if (dc26jo['indexOf']('layaNativeDir/') != -0x1) {
            if (miubv['isZiYu']) {
              var a$7y3 = _o4c26['ziyuFileData'][dc26jo];djc6so['onLoaded'](a$7y3);return;
            } else {
              cosnole['log']('read read'), _o4c26['read'](dc26jo, i1b9, new co_64(sjco6d, sjco6d['onReadNativeCallBack'], [i1b9, dc26jo, _k4625, $78ez, $a3py7, tfmb, djc6so]));return;
            }
          }if (qhf0m['rootPath'] == '') var mbu1v = dc26jo;else mbu1v = dc26jo['split'](qhf0m['rootPath'])[0x0];dc26jo['indexOf']('http://') != -0x1 || dc26jo['indexOf']('https://') != -0x1 ? miubv['EnvConfig']['load']['call'](djc6so, dc26jo, _k4625, $78ez, $a3py7, tfmb) : _o4c26['readFile'](mbu1v, i1b9, new co_64(sjco6d, sjco6d['onReadNativeCallBack'], [i1b9, dc26jo, _k4625, $78ez, $a3py7, tfmb, djc6so]), dc26jo);
        } else miubv['EnvConfig']['load']['call'](this, dc26jo, _k4625, $78ez, $a3py7, tfmb);
      }
    }, ubfvim['resMgrLoad'] = function (mitvb, p$37a, u91iv, ra7y$, mbiu1, jxwsd, htfq0m) {
      u91iv === void 0x0 && (u91iv = 0x0), ra7y$ === void 0x0 && (ra7y$ = ![]), mbiu1 === void 0x0 && (mbiu1 = ![]), jxwsd === void 0x0 && (jxwsd = 0x0), htfq0m === void 0x0 && (htfq0m = 0x3), mitvb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mitvb), miubv['EnvConfig']['resMgrLoad'](mitvb, (bvmfu, jo6dcs, jcsdo6) => {
        sjco6d['prototype']['resMgrLoadCallBack'](bvmfu, jo6dcs, jcsdo6, p$37a);
      }, u91iv, ra7y$, mbiu1, jxwsd, htfq0m);
    }, ubfvim['resMgrLoadCallBack'] = function (yr73$8, q2k45, o6csdj, sdncwj) {
      console['log']('buff:::', yr73$8, o6csdj, _o4c26['fileNativeDir'] + '///' + _o4c26['fileListName']), sdncwj(yr73$8, q2k45, o6csdj);
    }, ubfvim['clearRes'] = function (cwnj, znexw8) {
      znexw8 === void 0x0 && (znexw8 = ![]);var nx8zer = this;nx8zer['clearRes'](cwnj, znexw8);var z7r83$ = _o4c26['getFileInfo'](cwnj);if (z7r83$ && (cwnj['indexOf']('http://') != -0x1 || cwnj['indexOf']('https://') != -0x1)) {
        var x78 = z7r83$['md5'],
            vu1gb = _o4c26['getFileNativePath'](x78);_o4c26['remove'](vu1gb);
      }
    }, sjco6d['onReadNativeCallBack'] = function (mvfib, qth0fm, cj46o2, $3rz8, fmbuvi, muvfib, y37p$, kqt0h, k6o_24) {
      $3rz8 === void 0x0 && ($3rz8 = !![]), muvfib === void 0x0 && (muvfib = ![]), kqt0h === void 0x0 && (kqt0h = 0x0);if (!kqt0h) {
        var kht5q0;if (cj46o2 == 'json' || cj46o2 == 'atlas') kht5q0 = miubv['getJson'](k6o_24['data']);else cj46o2 == 'xml' ? kht5q0 = dnwexs['parseXMLFromString'](k6o_24['data']) : kht5q0 = k6o_24['data'];y37p$['onLoaded'](kht5q0), !miubv['isZiYu'] && miubv['isPosMsgYu'] && cj46o2 != 'arraybuffer' && wx['postMessage']({ 'url': qth0fm, 'data': kht5q0, 'isLoad': !![] });
      } else kqt0h == 0x1 && miubv['EnvConfig']['load']['call'](y37p$, qth0fm, cj46o2, $3rz8, fmbuvi, muvfib);
    }, dsenxw(sjco6d, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), sjco6d;
  }(),
      _o4c26 = function (nzw8ex) {
    function t5q0fh() {
      t5q0fh['__super']['call'](this);;
    }return q2k_4(t5q0fh, 'laya.wx.mini.MiniFileMgr', nzw8ex), t5q0fh['isLoadFile'] = function (q54_2) {
      return t5q0fh['_fileTypeArr']['indexOf'](q54_2) != -0x1 ? !![] : ![];
    }, t5q0fh['getFileInfo'] = function (hfmt) {
      var xdesw = hfmt['split']('?')[0x0],
          gb9uv1 = t5q0fh['filesListObj'][xdesw];if (gb9uv1 == null) return null;else return gb9uv1;return null;
    }, t5q0fh['onFileUpdate'] = function (kht50q, k4o_62) {
      var k4_ = kht50q['split']('/'),
          vibufm = k4_[k4_['length'] - 0x1],
          v1i9u = t5q0fh['getFileInfo'](k4o_62);if (v1i9u == null) t5q0fh['onSaveFile'](k4o_62, vibufm);else {
        if (v1i9u['readyUrl'] != k4o_62) t5q0fh['remove'](vibufm, k4o_62);
      }
    }, t5q0fh['exits'] = function (k2_q54, jscd) {
      var vuif = t5q0fh['getFileNativePath'](k2_q54);t5q0fh['fs']['getFileInfo']({ 'filePath': vuif, 'success': function (ko246) {
          jscd != null && jscd['runWith']([0x0, ko246]);
        }, 'fail': function (bftvmi) {
          jscd != null && jscd['runWith']([0x1, bftvmi]);
        } });
    }, t5q0fh['read'] = function (t5fq0, vfitm, sxwn, xsnwez) {
      vfitm === void 0x0 && (vfitm = 'ascill'), xsnwez === void 0x0 && (xsnwez = '');var q5t0fh;xsnwez != '' ? q5t0fh = t5q0fh['getFileNativePath'](t5fq0) : q5t0fh = t5fq0, t5q0fh['fs']['readFile']({ 'filePath': q5t0fh, 'encoding': vfitm, 'success': function (cn) {
          sxwn != null && sxwn['runWith']([0x0, cn]);
        }, 'fail': function (k4_25) {
          if (k4_25 && xsnwez != '') t5q0fh['down'](xsnwez, vfitm, sxwn, xsnwez);else sxwn != null && sxwn['runWith']([0x1]);
        } });
    }, t5q0fh['readNativeFile'] = function (rz87e$, zxer78) {
      t5q0fh['fs']['readFile']({ 'filePath': rz87e$, 'encoding': '', 'success': function (ih0tm) {
          zxer78 != null && zxer78['runWith']([0x0]);
        }, 'fail': function (x8eznr) {
          zxer78 != null && zxer78['runWith']([0x1]);
        } });
    }, t5q0fh['down'] = function (vu91ib, nzwse, xnsz, u1v9bi) {
      nzwse === void 0x0 && (nzwse = 'ascill'), u1v9bi === void 0x0 && (u1v9bi = '');var r38$y = t5q0fh['getFileNativePath'](u1v9bi),
          wnex8 = t5q0fh['wxdown']({ 'url': vu91ib, 'filePath': r38$y, 'success': function (er8) {
          if (er8['statusCode'] === 0xc8) t5q0fh['readFile'](er8['filePath'], nzwse, xnsz, u1v9bi);
        }, 'fail': function (h05qf) {
          xnsz != null && xnsz['runWith']([0x1, h05qf]);
        } });wnex8['onProgressUpdate'](function (o6_c4) {
        xnsz != null && xnsz['runWith']([0x2, o6_c4['progress']]);
      });
    }, t5q0fh['readFile'] = function (sxwdne, o62dj, h5q_0, cd2j6o) {
      o62dj === void 0x0 && (o62dj = 'ascill'), cd2j6o === void 0x0 && (cd2j6o = ''), t5q0fh['fs']['readFile']({ 'filePath': sxwdne, 'encoding': o62dj, 'success': function (dwcoj) {
          if (sxwdne['indexOf']('http://') != -0x1 || sxwdne['indexOf']('https://') != -0x1) t5q0fh['onFileUpdate'](sxwdne, cd2j6o);h5q_0 != null && h5q_0['runWith']([0x0, dwcoj]);
        }, 'fail': function (h0qtf5) {
          if (h0qtf5) h5q_0 != null && h5q_0['runWith']([0x1, h0qtf5]);
        } });
    }, t5q0fh['downImg'] = function ($er7z, a37p$y, $83yr7) {
      $83yr7 === void 0x0 && ($83yr7 = '');var djswcn = t5q0fh['wxdown']({ 'url': $er7z, 'success': function (_5264k) {
          _5264k['statusCode'] === 0xc8 && t5q0fh['copyFile'](_5264k['tempFilePath'], $83yr7, a37p$y);
        }, 'fail': function (j6c2d) {
          a37p$y != null && a37p$y['runWith']([0x1, j6c2d]);
        } });
    }, t5q0fh['copyFile'] = function (xnszwe, $e, ndjxws) {
      var yp$a7 = xnszwe['split']('/'),
          mu1vb = yp$a7[yp$a7['length'] - 0x1],
          tih0f = $e['split']('?')[0x0],
          jocd26 = t5q0fh['getFileInfo']($e),
          wsnex = t5q0fh['getFileNativePath'](mu1vb);t5q0fh['fs']['copyFile']({ 'srcPath': xnszwe, 'destPath': wsnex, 'success': function (jsdn) {
          if (!jocd26) t5q0fh['onSaveFile']($e, mu1vb), ndjxws != null && ndjxws['runWith']([0x0]);else {
            if (jocd26['readyUrl'] != $e) t5q0fh['remove'](mu1vb, $e, ndjxws);
          }
        }, 'fail': function (ewnx8) {
          ndjxws != null && ndjxws['runWith']([0x1, ewnx8]);
        } });
    }, t5q0fh['getFileNativePath'] = function (r8e7$z) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r8e7$z;
    }, t5q0fh['remove'] = function (bftvim, hqkt05, ocwsd) {
      hqkt05 === void 0x0 && (hqkt05 = '');var dcnwjs = t5q0fh['getFileInfo'](hqkt05),
          f5ht = t5q0fh['getFileNativePath'](dcnwjs['md5']);ze8r7['loader']['clearRes'](dcnwjs['readyUrl']), t5q0fh['fs']['unlink']({ 'filePath': f5ht, 'success': function (ar37$y) {
          if (hqkt05 != '') t5q0fh['onSaveFile'](hqkt05, bftvim);ocwsd != null && ocwsd['runWith']([0x0]);
        }, 'fail': function (ndjws) {} });
    }, t5q0fh['onSaveFile'] = function (k6o42_, $zr8e) {
      var $apy37 = k6o42_['split']('?')[0x0];t5q0fh['filesListObj'][$apy37] = { 'md5': $zr8e, 'readyUrl': k6o42_ }, t5q0fh['fs']['writeFile']({ 'filePath': t5q0fh['fileNativeDir'] + '/' + t5q0fh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t5q0fh['filesListObj']), 'success': function (fmub) {
          console['log']('写入测试测试成功：', fmub);
        }, 'fail': function (cjd26) {
          console['log']('写入测试测试失败：', cjd26);
        } });
    }, t5q0fh['existDir'] = function (szn, q0k_h) {
      t5q0fh['fs']['mkdir']({ 'dirPath': szn, 'success': function (djcns) {
          q0k_h != null && q0k_h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (znwe8x) {
          if (znwe8x['errMsg']['indexOf']('file already exists') != -0x1) t5q0fh['readSync'](t5q0fh['fileListName'], 'utf8', q0k_h);else q0k_h != null && q0k_h['runWith']([0x1, znwe8x]);
        } });
    }, t5q0fh['readSync'] = function (od6s, od6cjs, r7$y38, dxs) {
      od6cjs === void 0x0 && (od6cjs = 'ascill'), dxs === void 0x0 && (dxs = '');var djnswc = t5q0fh['getFileNativePath'](od6s),
          nwsd;try {
        nwsd = t5q0fh['fs']['readFileSync'](djnswc), r7$y38 != null && r7$y38['runWith']([0x0, { 'data': nwsd }]);
      } catch (cj62o) {
        r7$y38 != null && r7$y38['runWith']([0x1]);
      }
    }, t5q0fh['readCache'] = function () {}, t5q0fh['writeCache'] = function (re$z8) {
      var ay7p3 = readyUrl['split']('?')[0x0];t5q0fh['filesListObj'][ay7p3] = { 'md5': md5Name, 'readyUrl': readyUrl }, t5q0fh['fs']['writeFile']({ 'filePath': t5q0fh['fileNativeDir'] + '/' + t5q0fh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t5q0fh['filesListObj']), 'success': function (vu91g) {}, 'fail': function (nxewsz) {} });
    }, t5q0fh['setNativeFileDir'] = function (njwdcs) {
      t5q0fh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + njwdcs;
    }, t5q0fh['filesListObj'] = {}, t5q0fh['fileNativeDir'] = null, t5q0fh['fileListName'] = 'layaairfiles.txt', t5q0fh['ziyuFileData'] = {}, dsenxw(t5q0fh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), t5q0fh;
  }(dnsxwe),
      _ko42 = function (kq5th0) {
    function p7$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], p7$['__super']['call'](this), this['_sound'] = p7$['_createSound']();
    }q2k_4(p7$, 'laya.wx.mini.MiniSound', kq5th0);var sxdew = p7$['prototype'];return sxdew['load'] = function (qt0h5f) {
      var tf0mhq = this;qt0h5f = qhf0m['formatURL'](qt0h5f), this['url'] = qt0h5f;if (p7$['_audioCache'][qt0h5f]) {
        this['event']('complete');return;
      }function guv91() {
        if (p7$['_null'] != undefined) tf0mhq['_sound']['onCanplay'](p7$['_null']), tf0mhq['_sound']['onError'](p7$['_null']);else try {
          tf0mhq['_sound']['onCanplay'](null), tf0mhq['_sound']['onError'](null), p7$['_null'] = null;
        } catch (_q50hk) {
          console['warn']('[wxmini] _clearSound:' + _q50hk), tf0mhq['_sound']['onCanplay'](iftbmh), tf0mhq['_sound']['onError'](iftbmh), p7$['_null'] = iftbmh;
        }
      }function _5k4q() {
        guv91(), hmq0f['loaded'] = !![], hmq0f['event']('complete'), p7$['_audioCache'][hmq0f['url']] = hmq0f;
      }function u9bi($7ypa3) {
        console['error']('errCode=' + $7ypa3['errCode'] + '  errMsg=' + $7ypa3['errMsg']), guv91(), hmq0f['event']('error');
      }function iftbmh() {}this['_sound']['onCanplay'](_5k4q), this['_sound']['onError'](u9bi), this['_sound']['src'] = qt0h5f;var hmq0f = this;
    }, sxdew['play'] = function (k450, btihf) {
      k450 === void 0x0 && (k450 = 0x0), btihf === void 0x0 && (btihf = 0x0);var tm0hif;if (this['url'] == vifbmu['_tMusic']) {
        if (!p7$['_musicAudio']) p7$['_musicAudio'] = p7$['_createSound']();tm0hif = p7$['_musicAudio'];
      } else tm0hif = p7$['_createSound']();tm0hif['src'] = this['url'];var wdcn = new d26o(tm0hif);return wdcn['url'] = this['url'], wdcn['loops'] = btihf, wdcn['startTime'] = k450, wdcn['play'](), vifbmu['addChannel'](wdcn), wdcn;
    }, sxdew['dispose'] = function () {
      var _24co = p7$['_audioCache'][this['url']];_24co && (_24co['src'] = '', delete p7$['_audioCache'][this['url']]);
    }, js6dco(0x0, sxdew, 'duration', function () {
      return this['_sound']['duration'];
    }), p7$['_createSound'] = function () {
      return p7$['_id']++, miubv['window']['wx']['createInnerAudioContext']();
    }, p7$['_musicAudio'] = null, p7$['_id'] = 0x0, p7$['_audioCache'] = {}, p7$['_null'] = undefined, p7$;
  }(dnsxwe),
      d26o = function (ivm1bu) {
    function bvim1(bvmufi) {
      this['_audio'] = null, this['_onEnd'] = null, bvim1['__super']['call'](this), this['_audio'] = bvmufi, this['_onEnd'] = dnwexs['bind'](this['__onEnd'], this), bvmufi['onEnded'](this['_onEnd']);
    }q2k_4(bvim1, 'laya.wx.mini.MiniSoundChannel', ivm1bu);var _5qhk = bvim1['prototype'];return _5qhk['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ze8r7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _5qhk['__onNull'] = function () {}, _5qhk['play'] = function () {
      this['isStopped'] = ![], vifbmu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _5qhk['stop'] = function () {
      this['isStopped'] = !![], vifbmu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (bvim1['_null'] != undefined) this['_audio']['onEnded'](bvim1['_null']);else try {
        this['_audio']['onEnded'](null), bvim1['_null'] = null;
      } catch (cwnd) {
        console['warn']('[wxmini] stop:' + cwnd), this['_audio']['onEnded'](dnwexs['bind'](this['__onNull'], this)), bvim1['_null'] = dnwexs['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _5qhk['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _5qhk['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vifbmu['addChannel'](this), this['_audio']['play']();
    }, js6dco(0x0, _5qhk, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), js6dco(0x0, _5qhk, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), js6dco(0x0, _5qhk, 'volume', function () {
      return 0x1;
    }, function (h0fq5) {}), bvim1['_null'] = undefined, bvim1;
  }(k25_64);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w8ze in Laya) {
    var dcwos = Laya[w8ze];dcwos && dcwos['__isclass'] && (exports[w8ze] = dcwos);
  }
});