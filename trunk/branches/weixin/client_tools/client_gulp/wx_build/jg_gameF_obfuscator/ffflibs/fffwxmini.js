var k = wx.$f;
(function (window, document, cjwds) {
  var imvt = cjwds['un'],
      n8wzx = cjwds['uns'],
      nsj = cjwds['static'],
      biv9u = cjwds['class'],
      m0thi = cjwds['getset'],
      ndcj = cjwds['__newvec'],
      i9uv1 = laya['utils']['Browser'],
      mvbiuf = laya['events']['Event'],
      a3p7y = laya['events']['EventDispatcher'],
      ubm1i = laya['resource']['HTMLImage'],
      w8zex = laya['utils']['Handler'],
      nexzw8 = laya['display']['Input'],
      er8xzn = laya['net']['Loader'],
      kq0_5h = laya['maths']['Matrix'],
      sez = laya['renders']['Render'],
      yp73$a = laya['utils']['RunDriver'],
      fimh0 = laya['media']['Sound'],
      s6c = laya['media']['SoundChannel'],
      qf05th = laya['media']['SoundManager'],
      fqh05t = laya['display']['Stage'],
      ze8xwn = laya['net']['URL'],
      p$3a = laya['utils']['Utils'],
      bg9u1 = function () {
    function t0qh() {}return biv9u(t0qh, 'laya.wx.mini.MiniAdpter'), t0qh['getJson'] = function (wnesz) {
      return JSON['parse'](wnesz);
    }, t0qh['init'] = function (rzx, odsc6j) {
      rzx === void 0x0 && (rzx = ![]), odsc6j === void 0x0 && (odsc6j = ![]);if (t0qh['_inited']) return;t0qh['window'] = window;if (t0qh['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t0qh['_inited'] = !![], t0qh['isZiYu'] = odsc6j, t0qh['isPosMsgYu'] = rzx, t0qh['EnvConfig'] = {}, !t0qh['isZiYu'] && (xzre7['setNativeFileDir']('/layaairGame'), xzre7['existDir'](xzre7['fileNativeDir'], w8zex['create'](t0qh, t0qh['onMkdirCallBack']))), t0qh['window']['focus'] = function () {}, cjwds['getUrlPath'] = function () {}, t0qh['window']['logtime'] = function (wezsn) {}, t0qh['window']['alertTimeLog'] = function (q0tf) {}, t0qh['window']['resetShareInfo'] = function () {}, t0qh['window']['CanvasRenderingContext2D'] = function () {}, t0qh['window']['CanvasRenderingContext2D']['prototype'] = t0qh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t0qh['window']['document']['body']['appendChild'] = function () {}, t0qh['EnvConfig']['pixelRatioInt'] = 0x0, yp73$a['getPixelRatio'] = t0qh['pixelRatio'], t0qh['_preCreateElement'] = i9uv1['createElement'], i9uv1['createElement'] = t0qh['createElement'], yp73$a['createShaderCondition'] = t0qh['createShaderCondition'], p$3a['parseXMLFromString'] = t0qh['parseXMLFromString'], nexzw8['_createInputElement'] = bivft['_createInputElement'], t0qh['EnvConfig']['load'] = er8xzn['prototype']['load'], er8xzn['prototype']['load'] = dco26j['prototype']['load'], t0qh['isZiYu'] && rzx && wx['onMessage'](function (_q50kh) {
        _q50kh['isLoad'] && (xzre7['ziyuFileData'][_q50kh['url']] = _q50kh['data']);
      });
    }, t0qh['onMkdirCallBack'] = function (ndxwj, sdjnxw) {
      if (!ndxwj) xzre7['filesListObj'] = JSON['parse'](sdjnxw['data']);
    }, t0qh['pixelRatio'] = function () {
      if (!t0qh['EnvConfig']['pixelRatioInt']) try {
        var vb1u9i = wx['getSystemInfoSync']();return t0qh['EnvConfig']['pixelRatioInt'] = vb1u9i['pixelRatio'], vb1u9i = vb1u9i, vb1u9i['pixelRatio'];
      } catch (wjcnds) {}return t0qh['EnvConfig']['pixelRatioInt'];
    }, t0qh['createElement'] = function (njsxd) {
      if (njsxd == 'canvas') {
        var hfit0;return t0qh['idx'] == 0x1 ? t0qh['isZiYu'] ? (hfit0 = sharedCanvas, hfit0['style'] = {}) : hfit0 = window['canvas'] : hfit0 = window['wx']['createCanvas'](), t0qh['idx']++, hfit0;
      } else {
        if (njsxd == 'textarea' || njsxd == 'input') return t0qh['onCreateInput'](njsxd);else {
          if (njsxd == 'div') {
            var enw8zx = t0qh['_preCreateElement'](njsxd);return enw8zx['contains'] = function ($ez7) {
              return null;
            }, enw8zx['removeChild'] = function (c4o6_2) {}, enw8zx;
          } else return t0qh['_preCreateElement'](njsxd);
        }
      }
    }, t0qh['onCreateInput'] = function (b1vgu) {
      var _q50 = t0qh['_preCreateElement'](b1vgu);return _q50['focus'] = bivft['wxinputFocus'], _q50['blur'] = bivft['wxinputblur'], _q50['style'] = {}, _q50['value'] = 0x0, _q50['parentElement'] = {}, _q50['placeholder'] = {}, _q50['type'] = {}, _q50['setColor'] = function (cds6j) {}, _q50['setType'] = function (x8r7ze) {}, _q50['setFontFace'] = function (oj46c) {}, _q50['addEventListener'] = function (mbifuv) {}, _q50['contains'] = function (q4_5k0) {
        return null;
      }, _q50['removeChild'] = function (zn8re) {}, _q50;
    }, t0qh['createShaderCondition'] = function (gvb19) {
      var vfti = this,
          ug9 = function () {
        var _25q = gvb19;return vfti[gvb19['replace']('this.', '')];
      };return ug9;
    }, t0qh['EnvConfig'] = null, t0qh['window'] = null, t0qh['_preCreateElement'] = null, t0qh['_inited'] = ![], t0qh['wxRequest'] = null, t0qh['systemInfo'] = null, t0qh['version'] = '0.0.1', t0qh['isZiYu'] = ![], t0qh['isPosMsgYu'] = ![], t0qh['parseXMLFromString'] = function (_24o6k) {
      var m0fthq, ezsnxw;_24o6k = _24o6k['replace'](/>\s+</g, '><');try {
        m0fthq = new window['Parser']['DOMParser']()['parseFromString'](_24o6k, 'text/xml');
      } catch (r38$) {
        throw '需要引入xml解析库文件';
      }return m0fthq;
    }, t0qh['idx'] = 0x1, t0qh;
  }(),
      nz8er = function () {
    function ez8r7$() {}biv9u(ez8r7$, 'laya.wx.mini.MiniImage');var oj6sc = ez8r7$['prototype'];return oj6sc['_loadImage'] = function (tfbhm) {
      var iub19 = this,
          swcnjd = ![];tfbhm['indexOf']('layaNativeDir/') == -0x1 && (swcnjd = !![], tfbhm = ze8xwn['formatURL'](tfbhm));if (!xzre7['getFileInfo'](tfbhm)) {
        if (tfbhm['indexOf']('http://') != -0x1 || tfbhm['indexOf']('https://') != -0x1) xzre7['downImg'](tfbhm, new w8zex(ez8r7$, ez8r7$['onDownImgCallBack'], [tfbhm, iub19]), tfbhm);else ez8r7$['onCreateImage'](tfbhm, iub19, !![]);
      } else ez8r7$['onCreateImage'](tfbhm, iub19, !swcnjd);
    }, ez8r7$['onDownImgCallBack'] = function (zerx, sc6o, kq_405) {
      if (!kq_405) ez8r7$['onCreateImage'](zerx, sc6o);else sc6o['onError'](null);
    }, ez8r7$['onCreateImage'] = function (jnxdsw, b91uiv, sxewnd) {
      sxewnd === void 0x0 && (sxewnd = ![]);var nxeds;if (!sxewnd) {
        var b1ivu9 = xzre7['getFileInfo'](jnxdsw),
            fbim = b1ivu9['md5'];nxeds = xzre7['getFileNativePath'](fbim);
      } else nxeds = jnxdsw;if (b91uiv['imgCache'] == null) b91uiv['imgCache'] = {};var fmht;function k5_64() {
        fmht['onload'] = null, fmht['onerror'] = null, delete b91uiv['imgCache'][jnxdsw];
      };var qk5t0 = function () {
        k5_64(), b91uiv['onLoaded'](fmht);
      },
          ifuvbm = function () {
        k5_64(), b91uiv['event']('error', 'Load image failed');
      };b91uiv['_type'] == 'nativeimage' ? (fmht = new i9uv1['window']['Image'](), fmht['crossOrigin'] = '', fmht['onload'] = qk5t0, fmht['onerror'] = ifuvbm, fmht['src'] = nxeds, b91uiv['imgCache'][jnxdsw] = fmht) : new ubm1i['create'](nxeds, { 'onload': qk5t0, 'onerror': ifuvbm, 'onCreate': function (d62c) {
          fmht = d62c, b91uiv['imgCache'][jnxdsw] = d62c;
        } });
    }, ez8r7$;
  }(),
      bivft = function () {
    function jo24c() {}return biv9u(jo24c, 'laya.wx.mini.MiniInput'), jo24c['_createInputElement'] = function () {
      nexzw8['_initInput'](nexzw8['area'] = i9uv1['createElement']('textarea')), nexzw8['_initInput'](nexzw8['input'] = i9uv1['createElement']('input')), nexzw8['inputContainer'] = i9uv1['createElement']('div'), nexzw8['inputContainer']['style']['position'] = 'absolute', nexzw8['inputContainer']['style']['zIndex'] = 0x186a0, i9uv1['container']['appendChild'](nexzw8['inputContainer']), nexzw8['inputContainer']['setPos'] = function (_kq540, ht5qk0) {
        nexzw8['inputContainer']['style']['left'] = _kq540 + 'px', nexzw8['inputContainer']['style']['top'] = ht5qk0 + 'px';
      }, cjwds['stage']['on']('resize', null, jo24c['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_5q0kh) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qf05th['_soundClass'] = kt05, qf05th['_musicClass'] = kt05;
    }, jo24c['_onStageResize'] = function () {
      var ry7$8 = cjwds['stage']['_canvasTransform']['identity']();ry7$8['scale'](i9uv1['width'] / sez['canvas']['width'] / yp73$a['getPixelRatio'](), i9uv1['height'] / sez['canvas']['height'] / yp73$a['getPixelRatio']());
    }, jo24c['wxinputFocus'] = function (scjwo) {
      var j2dco6 = nexzw8['inputElement']['target'];if (j2dco6 && !j2dco6['editable']) return;bg9u1['window']['wx']['offKeyboardConfirm'](), bg9u1['window']['wx']['offKeyboardInput'](), bg9u1['window']['wx']['showKeyboard']({ 'defaultValue': j2dco6['text'], 'maxLength': j2dco6['maxChars'], 'multiple': j2dco6['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (u19bv) {}, 'fail': function (swjxd) {} }), bg9u1['window']['wx']['onKeyboardConfirm'](function (ry8$37) {
        var swnd = ry8$37 ? ry8$37['value'] : '';j2dco6['text'] = swnd, j2dco6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bg9u1['window']['wx']['onKeyboardInput'](function (dcojws) {
        var nzx8ew = dcojws ? dcojws['value'] : '';if (!j2dco6['multiline']) {
          if (nzx8ew['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }j2dco6['text'] = nzx8ew, j2dco6['event']('input');
      });
    }, jo24c['inputEnter'] = function () {
      nexzw8['inputElement']['target']['focus'] = ![];
    }, jo24c['wxinputblur'] = function () {
      jo24c['hideKeyboard']();
    }, jo24c['hideKeyboard'] = function () {
      bg9u1['window']['wx']['offKeyboardConfirm'](), bg9u1['window']['wx']['offKeyboardInput'](), bg9u1['window']['wx']['hideKeyboard']({ 'success': function (a7p$y) {
          console['log']('隐藏键盘');
        }, 'fail': function (jwoscd) {
          console['log']('隐藏键盘出错:' + (jwoscd ? jwoscd['errMsg'] : ''));
        } });
    }, jo24c;
  }(),
      dco26j = function () {
    function iufbmv() {}biv9u(iufbmv, 'laya.wx.mini.MiniLoader');var uv1g9 = iufbmv['prototype'];return uv1g9['load'] = function (sezxwn, h_05k, yr$8, $3p7ay, rxz7e) {
      yr$8 === void 0x0 && (yr$8 = !![]), rxz7e === void 0x0 && (rxz7e = ![]);var xwed = this;xwed['_url'] = sezxwn;if (sezxwn['indexOf']('data:image') === 0x0) xwed['_type'] = h_05k = 'image';else xwed['_type'] = h_05k || (h_05k = xwed['getTypeFromUrl'](sezxwn));xwed['_cache'] = yr$8, xwed['_data'] = null;var wdsjn = 'ascii';if (sezxwn['indexOf']('.fnt') != -0x1) wdsjn = 'utf8';else h_05k == 'arraybuffer' && (wdsjn = '');;var o_46c2 = p$3a['getFileExtension'](sezxwn);if (iufbmv['_fileTypeArr']['indexOf'](o_46c2) != -0x1) bg9u1['EnvConfig']['load']['call'](this, sezxwn, h_05k, yr$8, $3p7ay, rxz7e);else {
        if (!xzre7['getFileInfo'](sezxwn)) {
          if (sezxwn['indexOf']('layaNativeDir/') != -0x1) {
            if (bg9u1['isZiYu']) {
              var i9vb1 = xzre7['ziyuFileData'][sezxwn];xwed['onLoaded'](i9vb1);return;
            } else {
              cosnole['log']('read read'), xzre7['read'](sezxwn, wdsjn, new w8zex(iufbmv, iufbmv['onReadNativeCallBack'], [wdsjn, sezxwn, h_05k, yr$8, $3p7ay, rxz7e, xwed]));return;
            }
          }if (ze8xwn['rootPath'] == '') var odcjw = sezxwn;else odcjw = sezxwn['split'](ze8xwn['rootPath'])[0x0];sezxwn['indexOf']('http://') != -0x1 || sezxwn['indexOf']('https://') != -0x1 ? bg9u1['EnvConfig']['load']['call'](xwed, sezxwn, h_05k, yr$8, $3p7ay, rxz7e) : xzre7['readFile'](odcjw, wdsjn, new w8zex(iufbmv, iufbmv['onReadNativeCallBack'], [wdsjn, sezxwn, h_05k, yr$8, $3p7ay, rxz7e, xwed]), sezxwn);
        } else bg9u1['EnvConfig']['load']['call'](this, sezxwn, h_05k, yr$8, $3p7ay, rxz7e);
      }
    }, uv1g9['resMgrLoad'] = function (fimt, umi1b, fibvtm, csjod, ub9i, mf0ith, v91b) {
      fibvtm === void 0x0 && (fibvtm = 0x0), csjod === void 0x0 && (csjod = ![]), ub9i === void 0x0 && (ub9i = ![]), mf0ith === void 0x0 && (mf0ith = 0x0), v91b === void 0x0 && (v91b = 0x3), fimt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fimt), bg9u1['EnvConfig']['resMgrLoad'](fimt, (bmuif, ze8xnr, swndxj) => {
        iufbmv['prototype']['resMgrLoadCallBack'](bmuif, ze8xnr, swndxj, umi1b);
      }, fibvtm, csjod, ub9i, mf0ith, v91b);
    }, uv1g9['resMgrLoadCallBack'] = function (k50h_, d6cosj, k5_q2, jn) {
      console['log']('buff:::', k50h_, k5_q2, xzre7['fileNativeDir'] + '///' + xzre7['fileListName']), jn(k50h_, d6cosj, k5_q2);
    }, uv1g9['clearRes'] = function (yr7a3, e8zwn) {
      e8zwn === void 0x0 && (e8zwn = ![]);var k5qt = this;k5qt['clearRes'](yr7a3, e8zwn);var xn8z = xzre7['getFileInfo'](yr7a3);if (xn8z && (yr7a3['indexOf']('http://') != -0x1 || yr7a3['indexOf']('https://') != -0x1)) {
        var dsjcn = xn8z['md5'],
            jdxswn = xzre7['getFileNativePath'](dsjcn);xzre7['remove'](jdxswn);
      }
    }, iufbmv['onReadNativeCallBack'] = function (ug19, kh_5q0, njdxsw, y873r$, hif0tm, wzxe8n, zxe78, bhfitm, dewsxn) {
      y873r$ === void 0x0 && (y873r$ = !![]), wzxe8n === void 0x0 && (wzxe8n = ![]), bhfitm === void 0x0 && (bhfitm = 0x0);if (!bhfitm) {
        var hibmt;if (njdxsw == 'json' || njdxsw == 'atlas') hibmt = bg9u1['getJson'](dewsxn['data']);else njdxsw == 'xml' ? hibmt = p$3a['parseXMLFromString'](dewsxn['data']) : hibmt = dewsxn['data'];zxe78['onLoaded'](hibmt), !bg9u1['isZiYu'] && bg9u1['isPosMsgYu'] && njdxsw != 'arraybuffer' && wx['postMessage']({ 'url': kh_5q0, 'data': hibmt, 'isLoad': !![] });
      } else bhfitm == 0x1 && bg9u1['EnvConfig']['load']['call'](zxe78, kh_5q0, njdxsw, y873r$, hif0tm, wzxe8n);
    }, nsj(iufbmv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), iufbmv;
  }(),
      xzre7 = function ($7ry3) {
    function r78e$() {
      r78e$['__super']['call'](this);;
    }return biv9u(r78e$, 'laya.wx.mini.MiniFileMgr', $7ry3), r78e$['isLoadFile'] = function (esn) {
      return r78e$['_fileTypeArr']['indexOf'](esn) != -0x1 ? !![] : ![];
    }, r78e$['getFileInfo'] = function (ftqm0h) {
      var xdjn = ftqm0h['split']('?')[0x0],
          imfvbt = r78e$['filesListObj'][xdjn];if (imfvbt == null) return null;else return imfvbt;return null;
    }, r78e$['onFileUpdate'] = function (wn8ezx, z7xr8e) {
      var $7rez8 = wn8ezx['split']('/'),
          zrxe8 = $7rez8[$7rez8['length'] - 0x1],
          nrzex8 = r78e$['getFileInfo'](z7xr8e);if (nrzex8 == null) r78e$['onSaveFile'](z7xr8e, zrxe8);else {
        if (nrzex8['readyUrl'] != z7xr8e) r78e$['remove'](zrxe8, z7xr8e);
      }
    }, r78e$['exits'] = function ($7zr8, _0k) {
      var jswc = r78e$['getFileNativePath']($7zr8);r78e$['fs']['getFileInfo']({ 'filePath': jswc, 'success': function (nxw8z) {
          _0k != null && _0k['runWith']([0x0, nxw8z]);
        }, 'fail': function (ftibmv) {
          _0k != null && _0k['runWith']([0x1, ftibmv]);
        } });
    }, r78e$['read'] = function (tmfq0, c_2o46, zx8re, hktq5) {
      c_2o46 === void 0x0 && (c_2o46 = 'ascill'), hktq5 === void 0x0 && (hktq5 = '');var cdo62j;hktq5 != '' ? cdo62j = r78e$['getFileNativePath'](tmfq0) : cdo62j = tmfq0, r78e$['fs']['readFile']({ 'filePath': cdo62j, 'encoding': c_2o46, 'success': function (t5k0qh) {
          zx8re != null && zx8re['runWith']([0x0, t5k0qh]);
        }, 'fail': function (t5kh) {
          if (t5kh && hktq5 != '') r78e$['down'](hktq5, c_2o46, zx8re, hktq5);else zx8re != null && zx8re['runWith']([0x1]);
        } });
    }, r78e$['readNativeFile'] = function (tbvmi, ocjds6) {
      r78e$['fs']['readFile']({ 'filePath': tbvmi, 'encoding': '', 'success': function (er8x7z) {
          ocjds6 != null && ocjds6['runWith']([0x0]);
        }, 'fail': function (ap$y7) {
          ocjds6 != null && ocjds6['runWith']([0x1]);
        } });
    }, r78e$['down'] = function (enrz8, tbifh, ex8z, wexnsd) {
      tbifh === void 0x0 && (tbifh = 'ascill'), wexnsd === void 0x0 && (wexnsd = '');var iub1vm = r78e$['getFileNativePath'](wexnsd),
          o2 = r78e$['wxdown']({ 'url': enrz8, 'filePath': iub1vm, 'success': function (yap7) {
          if (yap7['statusCode'] === 0xc8) r78e$['readFile'](yap7['filePath'], tbifh, ex8z, wexnsd);
        }, 'fail': function (tfh50q) {
          ex8z != null && ex8z['runWith']([0x1, tfh50q]);
        } });o2['onProgressUpdate'](function ($8e7z) {
        ex8z != null && ex8z['runWith']([0x2, $8e7z['progress']]);
      });
    }, r78e$['readFile'] = function (scwjod, bhmfit, m0qtfh, t0fhmi) {
      bhmfit === void 0x0 && (bhmfit = 'ascill'), t0fhmi === void 0x0 && (t0fhmi = ''), r78e$['fs']['readFile']({ 'filePath': scwjod, 'encoding': bhmfit, 'success': function (fq0h) {
          if (scwjod['indexOf']('http://') != -0x1 || scwjod['indexOf']('https://') != -0x1) r78e$['onFileUpdate'](scwjod, t0fhmi);m0qtfh != null && m0qtfh['runWith']([0x0, fq0h]);
        }, 'fail': function (cnjdw) {
          if (cnjdw) m0qtfh != null && m0qtfh['runWith']([0x1, cnjdw]);
        } });
    }, r78e$['downImg'] = function (exnszw, xer78, b9vi) {
      b9vi === void 0x0 && (b9vi = '');var o64_2 = r78e$['wxdown']({ 'url': exnszw, 'success': function (uv9bg1) {
          uv9bg1['statusCode'] === 0xc8 && r78e$['copyFile'](uv9bg1['tempFilePath'], b9vi, xer78);
        }, 'fail': function (_qhk5) {
          xer78 != null && xer78['runWith']([0x1, _qhk5]);
        } });
    }, r78e$['copyFile'] = function (y3r8, _2kq, xrezn8) {
      var qh0tk = y3r8['split']('/'),
          $ry78 = qh0tk[qh0tk['length'] - 0x1],
          v19iub = _2kq['split']('?')[0x0],
          hf0tmi = r78e$['getFileInfo'](_2kq),
          itf0h = r78e$['getFileNativePath']($ry78);r78e$['fs']['copyFile']({ 'srcPath': y3r8, 'destPath': itf0h, 'success': function (ya$73p) {
          if (!hf0tmi) r78e$['onSaveFile'](_2kq, $ry78), xrezn8 != null && xrezn8['runWith']([0x0]);else {
            if (hf0tmi['readyUrl'] != _2kq) r78e$['remove']($ry78, _2kq, xrezn8);
          }
        }, 'fail': function (p7a3) {
          xrezn8 != null && xrezn8['runWith']([0x1, p7a3]);
        } });
    }, r78e$['getFileNativePath'] = function (ivb91u) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ivb91u;
    }, r78e$['remove'] = function (mbhfti, sjcdo6, qm0t) {
      sjcdo6 === void 0x0 && (sjcdo6 = '');var g9bu1v = r78e$['getFileInfo'](sjcdo6),
          k054_q = r78e$['getFileNativePath'](g9bu1v['md5']);cjwds['loader']['clearRes'](g9bu1v['readyUrl']), r78e$['fs']['unlink']({ 'filePath': k054_q, 'success': function (co46) {
          if (sjcdo6 != '') r78e$['onSaveFile'](sjcdo6, mbhfti);qm0t != null && qm0t['runWith']([0x0]);
        }, 'fail': function (itfvmb) {} });
    }, r78e$['onSaveFile'] = function (sdcj, hq5f0) {
      var vi1ubm = sdcj['split']('?')[0x0];r78e$['filesListObj'][vi1ubm] = { 'md5': hq5f0, 'readyUrl': sdcj }, r78e$['fs']['writeFile']({ 'filePath': r78e$['fileNativeDir'] + '/' + r78e$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r78e$['filesListObj']), 'success': function (vifmu) {
          console['log']('写入测试测试成功：', vifmu);
        }, 'fail': function (kq_h5) {
          console['log']('写入测试测试失败：', kq_h5);
        } });
    }, r78e$['existDir'] = function (nsdjx, wsdjo) {
      r78e$['fs']['mkdir']({ 'dirPath': nsdjx, 'success': function (fm0it) {
          wsdjo != null && wsdjo['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (tfmivb) {
          if (tfmivb['errMsg']['indexOf']('file already exists') != -0x1) r78e$['readSync'](r78e$['fileListName'], 'utf8', wsdjo);else wsdjo != null && wsdjo['runWith']([0x1, tfmivb]);
        } });
    }, r78e$['readSync'] = function (cj6o24, erzx7, cdwo, xzrn8) {
      erzx7 === void 0x0 && (erzx7 = 'ascill'), xzrn8 === void 0x0 && (xzrn8 = '');var r$z3 = r78e$['getFileNativePath'](cj6o24),
          doc6js;try {
        doc6js = r78e$['fs']['readFileSync'](r$z3), cdwo != null && cdwo['runWith']([0x0, { 'data': doc6js }]);
      } catch (h0q5f) {
        cdwo != null && cdwo['runWith']([0x1]);
      }
    }, r78e$['readCache'] = function () {}, r78e$['writeCache'] = function (ftvmbi) {
      var iftb = readyUrl['split']('?')[0x0];r78e$['filesListObj'][iftb] = { 'md5': md5Name, 'readyUrl': readyUrl }, r78e$['fs']['writeFile']({ 'filePath': r78e$['fileNativeDir'] + '/' + r78e$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r78e$['filesListObj']), 'success': function (swexnz) {}, 'fail': function (o2d6) {} });
    }, r78e$['setNativeFileDir'] = function (k542) {
      r78e$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + k542;
    }, r78e$['filesListObj'] = {}, r78e$['fileNativeDir'] = null, r78e$['fileListName'] = 'layaairfiles.txt', r78e$['ziyuFileData'] = {}, nsj(r78e$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r78e$;
  }(a3p7y),
      kt05 = function (xndjw) {
    function gvbu91() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], gvbu91['__super']['call'](this), this['_sound'] = gvbu91['_createSound']();
    }biv9u(gvbu91, 'laya.wx.mini.MiniSound', xndjw);var ivbu91 = gvbu91['prototype'];return ivbu91['load'] = function (zre$8) {
      var h5ktq = this;zre$8 = ze8xwn['formatURL'](zre$8), this['url'] = zre$8;if (gvbu91['_audioCache'][zre$8]) {
        this['event']('complete');return;
      }function k4q_05() {
        if (gvbu91['_null'] != undefined) h5ktq['_sound']['onCanplay'](gvbu91['_null']), h5ktq['_sound']['onError'](gvbu91['_null']);else try {
          h5ktq['_sound']['onCanplay'](null), h5ktq['_sound']['onError'](null), gvbu91['_null'] = null;
        } catch (ifbvtm) {
          console['warn']('[wxmini] _clearSound:' + ifbvtm), h5ktq['_sound']['onCanplay'](_k40), h5ktq['_sound']['onError'](_k40), gvbu91['_null'] = _k40;
        }
      }function xre8z() {
        k4q_05(), wdnj['loaded'] = !![], wdnj['event']('complete'), gvbu91['_audioCache'][wdnj['url']] = wdnj;
      }function nsjwd(vm1b) {
        console['error']('errCode=' + vm1b['errCode'] + '  errMsg=' + vm1b['errMsg']), k4q_05(), wdnj['event']('error');
      }function _k40() {}this['_sound']['onCanplay'](xre8z), this['_sound']['onError'](nsjwd), this['_sound']['src'] = zre$8;var wdnj = this;
    }, ivbu91['play'] = function (fbiumv, $7y3ar) {
      fbiumv === void 0x0 && (fbiumv = 0x0), $7y3ar === void 0x0 && ($7y3ar = 0x0);var q5_42k;if (this['url'] == qf05th['_tMusic']) {
        if (!gvbu91['_musicAudio']) gvbu91['_musicAudio'] = gvbu91['_createSound']();q5_42k = gvbu91['_musicAudio'];
      } else q5_42k = gvbu91['_createSound']();q5_42k['src'] = this['url'];var djxswn = new nxz8r(q5_42k);return djxswn['url'] = this['url'], djxswn['loops'] = $7y3ar, djxswn['startTime'] = fbiumv, djxswn['play'](), qf05th['addChannel'](djxswn), djxswn;
    }, ivbu91['dispose'] = function () {
      var jo642c = gvbu91['_audioCache'][this['url']];jo642c && (jo642c['src'] = '', delete gvbu91['_audioCache'][this['url']]);
    }, m0thi(0x0, ivbu91, 'duration', function () {
      return this['_sound']['duration'];
    }), gvbu91['_createSound'] = function () {
      return gvbu91['_id']++, bg9u1['window']['wx']['createInnerAudioContext']();
    }, gvbu91['_musicAudio'] = null, gvbu91['_id'] = 0x0, gvbu91['_audioCache'] = {}, gvbu91['_null'] = undefined, gvbu91;
  }(a3p7y),
      nxz8r = function (mftib) {
    function _h05(znxe8) {
      this['_audio'] = null, this['_onEnd'] = null, _h05['__super']['call'](this), this['_audio'] = znxe8, this['_onEnd'] = p$3a['bind'](this['__onEnd'], this), znxe8['onEnded'](this['_onEnd']);
    }biv9u(_h05, 'laya.wx.mini.MiniSoundChannel', mftib);var bhmti = _h05['prototype'];return bhmti['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cjwds['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bhmti['__onNull'] = function () {}, bhmti['play'] = function () {
      this['isStopped'] = ![], qf05th['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bhmti['stop'] = function () {
      this['isStopped'] = !![], qf05th['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_h05['_null'] != undefined) this['_audio']['onEnded'](_h05['_null']);else try {
        this['_audio']['onEnded'](null), _h05['_null'] = null;
      } catch (f5ht0q) {
        console['warn']('[wxmini] stop:' + f5ht0q), this['_audio']['onEnded'](p$3a['bind'](this['__onNull'], this)), _h05['_null'] = p$3a['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, bhmti['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bhmti['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qf05th['addChannel'](this), this['_audio']['play']();
    }, m0thi(0x0, bhmti, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), m0thi(0x0, bhmti, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), m0thi(0x0, bhmti, 'volume', function () {
      return 0x1;
    }, function (y378r) {}), _h05['_null'] = undefined, _h05;
  }(s6c);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z3$7r in Laya) {
    var ubif = Laya[z3$7r];ubif && ubif['__isclass'] && (exports[z3$7r] = ubif);
  }
});