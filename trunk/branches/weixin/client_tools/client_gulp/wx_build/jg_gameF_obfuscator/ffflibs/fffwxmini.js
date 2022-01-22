var k = wx.$f;
(function (window, document, zxwsne) {
  var ra73$ = zxwsne['un'],
      coj624 = zxwsne['uns'],
      nwsd = zxwsne['static'],
      p7ya3 = zxwsne['class'],
      vtfibm = zxwsne['getset'],
      fmvibu = zxwsne['__newvec'],
      rxn8ez = laya['utils']['Browser'],
      _h05qk = laya['events']['Event'],
      ivu9 = laya['events']['EventDispatcher'],
      $7y3ar = laya['resource']['HTMLImage'],
      vb9i1 = laya['utils']['Handler'],
      uib9v = laya['display']['Input'],
      _q50h = laya['net']['Loader'],
      q0th5f = laya['maths']['Matrix'],
      qk5_0h = laya['renders']['Render'],
      ftmq = laya['utils']['RunDriver'],
      sdo6 = laya['media']['Sound'],
      t05kqh = laya['media']['SoundChannel'],
      a3p7y$ = laya['media']['SoundManager'],
      zxer78 = laya['display']['Stage'],
      qmfh0 = laya['net']['URL'],
      qtm0h = laya['utils']['Utils'],
      dwsx = function () {
    function vfbumi() {}return p7ya3(vfbumi, 'laya.wx.mini.MiniAdpter'), vfbumi['getJson'] = function (cnjdw) {
      return JSON['parse'](cnjdw);
    }, vfbumi['init'] = function (wdsc, qhm0tf) {
      wdsc === void 0x0 && (wdsc = ![]), qhm0tf === void 0x0 && (qhm0tf = ![]);if (vfbumi['_inited']) return;vfbumi['window'] = window;if (vfbumi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vfbumi['_inited'] = !![], vfbumi['isZiYu'] = qhm0tf, vfbumi['isPosMsgYu'] = wdsc, vfbumi['EnvConfig'] = {}, !vfbumi['isZiYu'] && (nrzxe8['setNativeFileDir']('/layaairGame'), nrzxe8['existDir'](nrzxe8['fileNativeDir'], vb9i1['create'](vfbumi, vfbumi['onMkdirCallBack']))), vfbumi['window']['focus'] = function () {}, zxwsne['getUrlPath'] = function () {}, vfbumi['window']['logtime'] = function (vui19b) {}, vfbumi['window']['alertTimeLog'] = function (dxsjn) {}, vfbumi['window']['resetShareInfo'] = function () {}, vfbumi['window']['CanvasRenderingContext2D'] = function () {}, vfbumi['window']['CanvasRenderingContext2D']['prototype'] = vfbumi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vfbumi['window']['document']['body']['appendChild'] = function () {}, vfbumi['EnvConfig']['pixelRatioInt'] = 0x0, ftmq['getPixelRatio'] = vfbumi['pixelRatio'], vfbumi['_preCreateElement'] = rxn8ez['createElement'], rxn8ez['createElement'] = vfbumi['createElement'], ftmq['createShaderCondition'] = vfbumi['createShaderCondition'], qtm0h['parseXMLFromString'] = vfbumi['parseXMLFromString'], uib9v['_createInputElement'] = cod2j['_createInputElement'], vfbumi['EnvConfig']['load'] = _q50h['prototype']['load'], _q50h['prototype']['load'] = xen8wz['prototype']['load'], vfbumi['isZiYu'] && wdsc && wx['onMessage'](function (_4256) {
        _4256['isLoad'] && (nrzxe8['ziyuFileData'][_4256['url']] = _4256['data']);
      });
    }, vfbumi['onMkdirCallBack'] = function (ivtm, wznx8) {
      if (!ivtm) nrzxe8['filesListObj'] = JSON['parse'](wznx8['data']);
    }, vfbumi['pixelRatio'] = function () {
      if (!vfbumi['EnvConfig']['pixelRatioInt']) try {
        var z7re8x = wx['getSystemInfoSync']();return vfbumi['EnvConfig']['pixelRatioInt'] = z7re8x['pixelRatio'], z7re8x = z7re8x, z7re8x['pixelRatio'];
      } catch (q_42k) {}return vfbumi['EnvConfig']['pixelRatioInt'];
    }, vfbumi['createElement'] = function (h0qtf5) {
      if (h0qtf5 == 'canvas') {
        var jxsdnw;return vfbumi['idx'] == 0x1 ? vfbumi['isZiYu'] ? (jxsdnw = sharedCanvas, jxsdnw['style'] = {}) : jxsdnw = window['canvas'] : jxsdnw = window['wx']['createCanvas'](), vfbumi['idx']++, jxsdnw;
      } else {
        if (h0qtf5 == 'textarea' || h0qtf5 == 'input') return vfbumi['onCreateInput'](h0qtf5);else {
          if (h0qtf5 == 'div') {
            var cjnwsd = vfbumi['_preCreateElement'](h0qtf5);return cjnwsd['contains'] = function (imfht0) {
              return null;
            }, cjnwsd['removeChild'] = function (iub1) {}, cjnwsd;
          } else return vfbumi['_preCreateElement'](h0qtf5);
        }
      }
    }, vfbumi['onCreateInput'] = function (h5ft) {
      var odws = vfbumi['_preCreateElement'](h5ft);return odws['focus'] = cod2j['wxinputFocus'], odws['blur'] = cod2j['wxinputblur'], odws['style'] = {}, odws['value'] = 0x0, odws['parentElement'] = {}, odws['placeholder'] = {}, odws['type'] = {}, odws['setColor'] = function (fiuvbm) {}, odws['setType'] = function (ubm1iv) {}, odws['setFontFace'] = function (mvui1) {}, odws['addEventListener'] = function (fth5) {}, odws['contains'] = function (djsxn) {
        return null;
      }, odws['removeChild'] = function (dcos) {}, odws;
    }, vfbumi['createShaderCondition'] = function (fvtbmi) {
      var x8ezrn = this,
          i1bum = function () {
        var nr8xe = fvtbmi;return x8ezrn[fvtbmi['replace']('this.', '')];
      };return i1bum;
    }, vfbumi['EnvConfig'] = null, vfbumi['window'] = null, vfbumi['_preCreateElement'] = null, vfbumi['_inited'] = ![], vfbumi['wxRequest'] = null, vfbumi['systemInfo'] = null, vfbumi['version'] = '0.0.1', vfbumi['isZiYu'] = ![], vfbumi['isPosMsgYu'] = ![], vfbumi['parseXMLFromString'] = function (edsnw) {
      var i1uvb, nz8rx;edsnw = edsnw['replace'](/>\s+</g, '><');try {
        i1uvb = new window['Parser']['DOMParser']()['parseFromString'](edsnw, 'text/xml');
      } catch (xwnsj) {
        throw '需要引入xml解析库文件';
      }return i1uvb;
    }, vfbumi['idx'] = 0x1, vfbumi;
  }(),
      wdnxj = function () {
    function x7e() {}p7ya3(x7e, 'laya.wx.mini.MiniImage');var jswndc = x7e['prototype'];return jswndc['_loadImage'] = function (mibvtf) {
      var i0fmth = this,
          jwdso = ![];mibvtf['indexOf']('layaNativeDir/') == -0x1 && (jwdso = !![], mibvtf = qmfh0['formatURL'](mibvtf));if (!nrzxe8['getFileInfo'](mibvtf)) {
        if (mibvtf['indexOf']('http://') != -0x1 || mibvtf['indexOf']('https://') != -0x1) nrzxe8['downImg'](mibvtf, new vb9i1(x7e, x7e['onDownImgCallBack'], [mibvtf, i0fmth]), mibvtf);else x7e['onCreateImage'](mibvtf, i0fmth, !![]);
      } else x7e['onCreateImage'](mibvtf, i0fmth, !jwdso);
    }, x7e['onDownImgCallBack'] = function (_4k6, _542, vfbium) {
      if (!vfbium) x7e['onCreateImage'](_4k6, _542);else _542['onError'](null);
    }, x7e['onCreateImage'] = function (_6c2o, r$3ya7, o42c6j) {
      o42c6j === void 0x0 && (o42c6j = ![]);var iv1bu;if (!o42c6j) {
        var p7$a3 = nrzxe8['getFileInfo'](_6c2o),
            _24co6 = p7$a3['md5'];iv1bu = nrzxe8['getFileNativePath'](_24co6);
      } else iv1bu = _6c2o;if (r$3ya7['imgCache'] == null) r$3ya7['imgCache'] = {};var vumfb;function mfvbi() {
        vumfb['onload'] = null, vumfb['onerror'] = null, delete r$3ya7['imgCache'][_6c2o];
      };var u91b = function () {
        mfvbi(), r$3ya7['onLoaded'](vumfb);
      },
          vmift = function () {
        mfvbi(), r$3ya7['event']('error', 'Load image failed');
      };r$3ya7['_type'] == 'nativeimage' ? (vumfb = new rxn8ez['window']['Image'](), vumfb['crossOrigin'] = '', vumfb['onload'] = u91b, vumfb['onerror'] = vmift, vumfb['src'] = iv1bu, r$3ya7['imgCache'][_6c2o] = vumfb) : new $7y3ar['create'](iv1bu, { 'onload': u91b, 'onerror': vmift, 'onCreate': function (k045) {
          vumfb = k045, r$3ya7['imgCache'][_6c2o] = k045;
        } });
    }, x7e;
  }(),
      cod2j = function () {
    function josdc6() {}return p7ya3(josdc6, 'laya.wx.mini.MiniInput'), josdc6['_createInputElement'] = function () {
      uib9v['_initInput'](uib9v['area'] = rxn8ez['createElement']('textarea')), uib9v['_initInput'](uib9v['input'] = rxn8ez['createElement']('input')), uib9v['inputContainer'] = rxn8ez['createElement']('div'), uib9v['inputContainer']['style']['position'] = 'absolute', uib9v['inputContainer']['style']['zIndex'] = 0x186a0, rxn8ez['container']['appendChild'](uib9v['inputContainer']), uib9v['inputContainer']['setPos'] = function (fvbum, e8xw) {
        uib9v['inputContainer']['style']['left'] = fvbum + 'px', uib9v['inputContainer']['style']['top'] = e8xw + 'px';
      }, zxwsne['stage']['on']('resize', null, josdc6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (docs6j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), a3p7y$['_soundClass'] = qf5h, a3p7y$['_musicClass'] = qf5h;
    }, josdc6['_onStageResize'] = function () {
      var t5q0k = zxwsne['stage']['_canvasTransform']['identity']();t5q0k['scale'](rxn8ez['width'] / qk5_0h['canvas']['width'] / ftmq['getPixelRatio'](), rxn8ez['height'] / qk5_0h['canvas']['height'] / ftmq['getPixelRatio']());
    }, josdc6['wxinputFocus'] = function (k_542q) {
      var re8nzx = uib9v['inputElement']['target'];if (re8nzx && !re8nzx['editable']) return;dwsx['window']['wx']['offKeyboardConfirm'](), dwsx['window']['wx']['offKeyboardInput'](), dwsx['window']['wx']['showKeyboard']({ 'defaultValue': re8nzx['text'], 'maxLength': re8nzx['maxChars'], 'multiple': re8nzx['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fbh) {}, 'fail': function (bthi) {} }), dwsx['window']['wx']['onKeyboardConfirm'](function (_0kqh5) {
        var zer7 = _0kqh5 ? _0kqh5['value'] : '';re8nzx['text'] = zer7, re8nzx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dwsx['window']['wx']['onKeyboardInput'](function (m1iuv) {
        var qt5k0 = m1iuv ? m1iuv['value'] : '';if (!re8nzx['multiline']) {
          if (qt5k0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }re8nzx['text'] = qt5k0, re8nzx['event']('input');
      });
    }, josdc6['inputEnter'] = function () {
      uib9v['inputElement']['target']['focus'] = ![];
    }, josdc6['wxinputblur'] = function () {
      josdc6['hideKeyboard']();
    }, josdc6['hideKeyboard'] = function () {
      dwsx['window']['wx']['offKeyboardConfirm'](), dwsx['window']['wx']['offKeyboardInput'](), dwsx['window']['wx']['hideKeyboard']({ 'success': function (z783r) {
          console['log']('隐藏键盘');
        }, 'fail': function (miuvbf) {
          console['log']('隐藏键盘出错:' + (miuvbf ? miuvbf['errMsg'] : ''));
        } });
    }, josdc6;
  }(),
      xen8wz = function () {
    function zsenx() {}p7ya3(zsenx, 'laya.wx.mini.MiniLoader');var ibumf = zsenx['prototype'];return ibumf['load'] = function (_6k54, $r7ze, hbft, fmu, snxjd) {
      hbft === void 0x0 && (hbft = !![]), snxjd === void 0x0 && (snxjd = ![]);var iub1m = this;iub1m['_url'] = _6k54;if (_6k54['indexOf']('data:image') === 0x0) iub1m['_type'] = $r7ze = 'image';else iub1m['_type'] = $r7ze || ($r7ze = iub1m['getTypeFromUrl'](_6k54));iub1m['_cache'] = hbft, iub1m['_data'] = null;var ay$73r = 'ascii';if (_6k54['indexOf']('.fnt') != -0x1) ay$73r = 'utf8';else $r7ze == 'arraybuffer' && (ay$73r = '');;var _qhk = qtm0h['getFileExtension'](_6k54);if (zsenx['_fileTypeArr']['indexOf'](_qhk) != -0x1) dwsx['EnvConfig']['load']['call'](this, _6k54, $r7ze, hbft, fmu, snxjd);else {
        if (!nrzxe8['getFileInfo'](_6k54)) {
          if (_6k54['indexOf']('layaNativeDir/') != -0x1) {
            if (dwsx['isZiYu']) {
              var socj6d = nrzxe8['ziyuFileData'][_6k54];iub1m['onLoaded'](socj6d);return;
            } else {
              cosnole['log']('read read'), nrzxe8['read'](_6k54, ay$73r, new vb9i1(zsenx, zsenx['onReadNativeCallBack'], [ay$73r, _6k54, $r7ze, hbft, fmu, snxjd, iub1m]));return;
            }
          }if (qmfh0['rootPath'] == '') var ap$3 = _6k54;else ap$3 = _6k54['split'](qmfh0['rootPath'])[0x0];_6k54['indexOf']('http://') != -0x1 || _6k54['indexOf']('https://') != -0x1 ? dwsx['EnvConfig']['load']['call'](iub1m, _6k54, $r7ze, hbft, fmu, snxjd) : nrzxe8['readFile'](ap$3, ay$73r, new vb9i1(zsenx, zsenx['onReadNativeCallBack'], [ay$73r, _6k54, $r7ze, hbft, fmu, snxjd, iub1m]), _6k54);
        } else dwsx['EnvConfig']['load']['call'](this, _6k54, $r7ze, hbft, fmu, snxjd);
      }
    }, ibumf['resMgrLoad'] = function (bmiuf, o624k, thbmi, i91u, jo2c, xrez, thqfm0) {
      thbmi === void 0x0 && (thbmi = 0x0), i91u === void 0x0 && (i91u = ![]), jo2c === void 0x0 && (jo2c = ![]), xrez === void 0x0 && (xrez = 0x0), thqfm0 === void 0x0 && (thqfm0 = 0x3), bmiuf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bmiuf), dwsx['EnvConfig']['resMgrLoad'](bmiuf, (z3$r78, fivmb, z8erx) => {
        zsenx['prototype']['resMgrLoadCallBack'](z3$r78, fivmb, z8erx, o624k);
      }, thbmi, i91u, jo2c, xrez, thqfm0);
    }, ibumf['resMgrLoadCallBack'] = function (jdc2, ib91vu, jc624, fmhqt) {
      console['log']('buff:::', jdc2, jc624, nrzxe8['fileNativeDir'] + '///' + nrzxe8['fileListName']), fmhqt(jdc2, ib91vu, jc624);
    }, ibumf['clearRes'] = function (x8renz, jndxws) {
      jndxws === void 0x0 && (jndxws = ![]);var ivfm = this;ivfm['clearRes'](x8renz, jndxws);var k_24o = nrzxe8['getFileInfo'](x8renz);if (k_24o && (x8renz['indexOf']('http://') != -0x1 || x8renz['indexOf']('https://') != -0x1)) {
        var swc = k_24o['md5'],
            o24c_ = nrzxe8['getFileNativePath'](swc);nrzxe8['remove'](o24c_);
      }
    }, zsenx['onReadNativeCallBack'] = function (xnw8e, fbuvmi, ihbt, xzen8r, dsexn, v9bg, xdjsn, tm0ifh, _kqh05) {
      xzen8r === void 0x0 && (xzen8r = !![]), v9bg === void 0x0 && (v9bg = ![]), tm0ifh === void 0x0 && (tm0ifh = 0x0);if (!tm0ifh) {
        var r$e7z8;if (ihbt == 'json' || ihbt == 'atlas') r$e7z8 = dwsx['getJson'](_kqh05['data']);else ihbt == 'xml' ? r$e7z8 = qtm0h['parseXMLFromString'](_kqh05['data']) : r$e7z8 = _kqh05['data'];xdjsn['onLoaded'](r$e7z8), !dwsx['isZiYu'] && dwsx['isPosMsgYu'] && ihbt != 'arraybuffer' && wx['postMessage']({ 'url': fbuvmi, 'data': r$e7z8, 'isLoad': !![] });
      } else tm0ifh == 0x1 && dwsx['EnvConfig']['load']['call'](xdjsn, fbuvmi, ihbt, xzen8r, dsexn, v9bg);
    }, nwsd(zsenx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zsenx;
  }(),
      nrzxe8 = function (j2cod6) {
    function nswjd() {
      nswjd['__super']['call'](this);;
    }return p7ya3(nswjd, 'laya.wx.mini.MiniFileMgr', j2cod6), nswjd['isLoadFile'] = function ($73rz8) {
      return nswjd['_fileTypeArr']['indexOf']($73rz8) != -0x1 ? !![] : ![];
    }, nswjd['getFileInfo'] = function (_045qk) {
      var hit = _045qk['split']('?')[0x0],
          zexwsn = nswjd['filesListObj'][hit];if (zexwsn == null) return null;else return zexwsn;return null;
    }, nswjd['onFileUpdate'] = function (esxdn, fhtmb) {
      var cj246 = esxdn['split']('/'),
          mfiuv = cj246[cj246['length'] - 0x1],
          dsjcwn = nswjd['getFileInfo'](fhtmb);if (dsjcwn == null) nswjd['onSaveFile'](fhtmb, mfiuv);else {
        if (dsjcwn['readyUrl'] != fhtmb) nswjd['remove'](mfiuv, fhtmb);
      }
    }, nswjd['exits'] = function (jocs, nzesx) {
      var g91ub = nswjd['getFileNativePath'](jocs);nswjd['fs']['getFileInfo']({ 'filePath': g91ub, 'success': function (cdojs) {
          nzesx != null && nzesx['runWith']([0x0, cdojs]);
        }, 'fail': function (q4_50k) {
          nzesx != null && nzesx['runWith']([0x1, q4_50k]);
        } });
    }, nswjd['read'] = function (v1biu, do6csj, tfbivm, ndwjsx) {
      do6csj === void 0x0 && (do6csj = 'ascill'), ndwjsx === void 0x0 && (ndwjsx = '');var xnwzs;ndwjsx != '' ? xnwzs = nswjd['getFileNativePath'](v1biu) : xnwzs = v1biu, nswjd['fs']['readFile']({ 'filePath': xnwzs, 'encoding': do6csj, 'success': function (fhmqt) {
          tfbivm != null && tfbivm['runWith']([0x0, fhmqt]);
        }, 'fail': function ($zre78) {
          if ($zre78 && ndwjsx != '') nswjd['down'](ndwjsx, do6csj, tfbivm, ndwjsx);else tfbivm != null && tfbivm['runWith']([0x1]);
        } });
    }, nswjd['readNativeFile'] = function (k_qh50, o_k) {
      nswjd['fs']['readFile']({ 'filePath': k_qh50, 'encoding': '', 'success': function (sxnwdj) {
          o_k != null && o_k['runWith']([0x0]);
        }, 'fail': function (itvfm) {
          o_k != null && o_k['runWith']([0x1]);
        } });
    }, nswjd['down'] = function ($e7r8, xdjwn, zxwen, y387r$) {
      xdjwn === void 0x0 && (xdjwn = 'ascill'), y387r$ === void 0x0 && (y387r$ = '');var x7rze = nswjd['getFileNativePath'](y387r$),
          u9vb1i = nswjd['wxdown']({ 'url': $e7r8, 'filePath': x7rze, 'success': function (zxwn) {
          if (zxwn['statusCode'] === 0xc8) nswjd['readFile'](zxwn['filePath'], xdjwn, zxwen, y387r$);
        }, 'fail': function (ary$3) {
          zxwen != null && zxwen['runWith']([0x1, ary$3]);
        } });u9vb1i['onProgressUpdate'](function (wjdnxs) {
        zxwen != null && zxwen['runWith']([0x2, wjdnxs['progress']]);
      });
    }, nswjd['readFile'] = function (zx, hi0t, wsezx, jsxd) {
      hi0t === void 0x0 && (hi0t = 'ascill'), jsxd === void 0x0 && (jsxd = ''), nswjd['fs']['readFile']({ 'filePath': zx, 'encoding': hi0t, 'success': function (exwnsz) {
          if (zx['indexOf']('http://') != -0x1 || zx['indexOf']('https://') != -0x1) nswjd['onFileUpdate'](zx, jsxd);wsezx != null && wsezx['runWith']([0x0, exwnsz]);
        }, 'fail': function (jswoc) {
          if (jswoc) wsezx != null && wsezx['runWith']([0x1, jswoc]);
        } });
    }, nswjd['downImg'] = function (mh0fq, cjs6, c6o_2) {
      c6o_2 === void 0x0 && (c6o_2 = '');var b1iv9u = nswjd['wxdown']({ 'url': mh0fq, 'success': function (o246_) {
          o246_['statusCode'] === 0xc8 && nswjd['copyFile'](o246_['tempFilePath'], c6o_2, cjs6);
        }, 'fail': function (ne8x) {
          cjs6 != null && cjs6['runWith']([0x1, ne8x]);
        } });
    }, nswjd['copyFile'] = function (o6s, q04k_, $7ypa) {
      var mtbhif = o6s['split']('/'),
          v91b = mtbhif[mtbhif['length'] - 0x1],
          sdnxj = q04k_['split']('?')[0x0],
          k_426 = nswjd['getFileInfo'](q04k_),
          _q4k52 = nswjd['getFileNativePath'](v91b);nswjd['fs']['copyFile']({ 'srcPath': o6s, 'destPath': _q4k52, 'success': function (jwsod) {
          if (!k_426) nswjd['onSaveFile'](q04k_, v91b), $7ypa != null && $7ypa['runWith']([0x0]);else {
            if (k_426['readyUrl'] != q04k_) nswjd['remove'](v91b, q04k_, $7ypa);
          }
        }, 'fail': function (jwod) {
          $7ypa != null && $7ypa['runWith']([0x1, jwod]);
        } });
    }, nswjd['getFileNativePath'] = function (btiv) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + btiv;
    }, nswjd['remove'] = function (j62odc, _5q2k4, co624j) {
      _5q2k4 === void 0x0 && (_5q2k4 = '');var i0fhmt = nswjd['getFileInfo'](_5q2k4),
          h5f0qt = nswjd['getFileNativePath'](i0fhmt['md5']);zxwsne['loader']['clearRes'](i0fhmt['readyUrl']), nswjd['fs']['unlink']({ 'filePath': h5f0qt, 'success': function (rex8nz) {
          if (_5q2k4 != '') nswjd['onSaveFile'](_5q2k4, j62odc);co624j != null && co624j['runWith']([0x0]);
        }, 'fail': function (sn) {} });
    }, nswjd['onSaveFile'] = function (cjods, xern8) {
      var x8nzer = cjods['split']('?')[0x0];nswjd['filesListObj'][x8nzer] = { 'md5': xern8, 'readyUrl': cjods }, nswjd['fs']['writeFile']({ 'filePath': nswjd['fileNativeDir'] + '/' + nswjd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nswjd['filesListObj']), 'success': function (qtfh5) {
          console['log']('写入测试测试成功：', qtfh5);
        }, 'fail': function (j46) {
          console['log']('写入测试测试失败：', j46);
        } });
    }, nswjd['existDir'] = function (jwsxnd, hmbfit) {
      nswjd['fs']['mkdir']({ 'dirPath': jwsxnd, 'success': function (xjwsd) {
          hmbfit != null && hmbfit['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (jnwcs) {
          if (jnwcs['errMsg']['indexOf']('file already exists') != -0x1) nswjd['readSync'](nswjd['fileListName'], 'utf8', hmbfit);else hmbfit != null && hmbfit['runWith']([0x1, jnwcs]);
        } });
    }, nswjd['readSync'] = function (ezxs, ivmubf, rz738$, nx8we) {
      ivmubf === void 0x0 && (ivmubf = 'ascill'), nx8we === void 0x0 && (nx8we = '');var k254_q = nswjd['getFileNativePath'](ezxs),
          jdxswn;try {
        jdxswn = nswjd['fs']['readFileSync'](k254_q), rz738$ != null && rz738$['runWith']([0x0, { 'data': jdxswn }]);
      } catch (fmtbi) {
        rz738$ != null && rz738$['runWith']([0x1]);
      }
    }, nswjd['readCache'] = function () {}, nswjd['writeCache'] = function (fmvub) {
      var _504qk = readyUrl['split']('?')[0x0];nswjd['filesListObj'][_504qk] = { 'md5': md5Name, 'readyUrl': readyUrl }, nswjd['fs']['writeFile']({ 'filePath': nswjd['fileNativeDir'] + '/' + nswjd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nswjd['filesListObj']), 'success': function (zxenr8) {}, 'fail': function (zexr) {} });
    }, nswjd['setNativeFileDir'] = function (b1vi9u) {
      nswjd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b1vi9u;
    }, nswjd['filesListObj'] = {}, nswjd['fileNativeDir'] = null, nswjd['fileListName'] = 'layaairfiles.txt', nswjd['ziyuFileData'] = {}, nwsd(nswjd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nswjd;
  }(ivu9),
      qf5h = function (c4o2_6) {
    function r83$y7() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], r83$y7['__super']['call'](this), this['_sound'] = r83$y7['_createSound']();
    }p7ya3(r83$y7, 'laya.wx.mini.MiniSound', c4o2_6);var _q50k4 = r83$y7['prototype'];return _q50k4['load'] = function (h0k5tq) {
      var znx = this;h0k5tq = qmfh0['formatURL'](h0k5tq), this['url'] = h0k5tq;if (r83$y7['_audioCache'][h0k5tq]) {
        this['event']('complete');return;
      }function thfi0m() {
        if (r83$y7['_null'] != undefined) znx['_sound']['onCanplay'](r83$y7['_null']), znx['_sound']['onError'](r83$y7['_null']);else try {
          znx['_sound']['onCanplay'](null), znx['_sound']['onError'](null), r83$y7['_null'] = null;
        } catch (mubvi) {
          console['warn']('[wxmini] _clearSound:' + mubvi), znx['_sound']['onCanplay'](ftq0), znx['_sound']['onError'](ftq0), r83$y7['_null'] = ftq0;
        }
      }function nsxez() {
        thfi0m(), fm0tqh['loaded'] = !![], fm0tqh['event']('complete'), r83$y7['_audioCache'][fm0tqh['url']] = fm0tqh;
      }function q0thf5(r$73y) {
        console['error']('errCode=' + r$73y['errCode'] + '  errMsg=' + r$73y['errMsg']), thfi0m(), fm0tqh['event']('error');
      }function ftq0() {}this['_sound']['onCanplay'](nsxez), this['_sound']['onError'](q0thf5), this['_sound']['src'] = h0k5tq;var fm0tqh = this;
    }, _q50k4['play'] = function (dswen, fimt0) {
      dswen === void 0x0 && (dswen = 0x0), fimt0 === void 0x0 && (fimt0 = 0x0);var wesdxn;if (this['url'] == a3p7y$['_tMusic']) {
        if (!r83$y7['_musicAudio']) r83$y7['_musicAudio'] = r83$y7['_createSound']();wesdxn = r83$y7['_musicAudio'];
      } else wesdxn = r83$y7['_createSound']();wesdxn['src'] = this['url'];var dc6oj2 = new bmtiv(wesdxn);return dc6oj2['url'] = this['url'], dc6oj2['loops'] = fimt0, dc6oj2['startTime'] = dswen, dc6oj2['play'](), a3p7y$['addChannel'](dc6oj2), dc6oj2;
    }, _q50k4['dispose'] = function () {
      var scd6o = r83$y7['_audioCache'][this['url']];scd6o && (scd6o['src'] = '', delete r83$y7['_audioCache'][this['url']]);
    }, vtfibm(0x0, _q50k4, 'duration', function () {
      return this['_sound']['duration'];
    }), r83$y7['_createSound'] = function () {
      return r83$y7['_id']++, dwsx['window']['wx']['createInnerAudioContext']();
    }, r83$y7['_musicAudio'] = null, r83$y7['_id'] = 0x0, r83$y7['_audioCache'] = {}, r83$y7['_null'] = undefined, r83$y7;
  }(ivu9),
      bmtiv = function (fti0mh) {
    function nzsew(_c42) {
      this['_audio'] = null, this['_onEnd'] = null, nzsew['__super']['call'](this), this['_audio'] = _c42, this['_onEnd'] = qtm0h['bind'](this['__onEnd'], this), _c42['onEnded'](this['_onEnd']);
    }p7ya3(nzsew, 'laya.wx.mini.MiniSoundChannel', fti0mh);var jo624 = nzsew['prototype'];return jo624['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zxwsne['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jo624['__onNull'] = function () {}, jo624['play'] = function () {
      this['isStopped'] = ![], a3p7y$['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jo624['stop'] = function () {
      this['isStopped'] = !![], a3p7y$['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (nzsew['_null'] != undefined) this['_audio']['onEnded'](nzsew['_null']);else try {
        this['_audio']['onEnded'](null), nzsew['_null'] = null;
      } catch (k5_hq0) {
        console['warn']('[wxmini] stop:' + k5_hq0), this['_audio']['onEnded'](qtm0h['bind'](this['__onNull'], this)), nzsew['_null'] = qtm0h['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jo624['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jo624['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], a3p7y$['addChannel'](this), this['_audio']['play']();
    }, vtfibm(0x0, jo624, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vtfibm(0x0, jo624, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vtfibm(0x0, jo624, 'volume', function () {
      return 0x1;
    }, function (mi1vbu) {}), nzsew['_null'] = undefined, nzsew;
  }(t05kqh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var timbv in Laya) {
    var nswdc = Laya[timbv];nswdc && nswdc['__isclass'] && (exports[timbv] = nswdc);
  }
});