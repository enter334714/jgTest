var p = wx.$h;
(function (window, document, awp34) {
  var c5sdlm = awp34['un'],
      g0vhx_ = awp34['uns'],
      aprnw4 = awp34['static'],
      f1s3jt = awp34['class'],
      wpnra2 = awp34['getset'],
      yb$o = awp34['__newvec'],
      vxr2wn = laya['utils']['Browser'],
      hv_g0 = laya['events']['Event'],
      e$h86 = laya['events']['EventDispatcher'],
      _hg = laya['resource']['HTMLImage'],
      h6$ek8 = laya['utils']['Handler'],
      nx2_ = laya['display']['Input'],
      apr47w = laya['net']['Loader'],
      wra4 = laya['maths']['Matrix'],
      o9by = laya['renders']['Render'],
      _8h0k = laya['utils']['RunDriver'],
      $06k = laya['media']['Sound'],
      b9zqoy = laya['media']['SoundChannel'],
      ebyio9 = laya['media']['SoundManager'],
      h0g_k8 = laya['display']['Stage'],
      clm5s = laya['net']['URL'],
      qoy = laya['utils']['Utils'],
      iobe9y = function () {
    function yzo() {}return f1s3jt(yzo, 'laya.wx.mini.MiniAdpter'), yzo['getJson'] = function (vn2_) {
      return JSON['parse'](vn2_);
    }, yzo['init'] = function (iybe$o, obz9q) {
      iybe$o === void 0x0 && (iybe$o = ![]), obz9q === void 0x0 && (obz9q = ![]);if (yzo['_inited']) return;yzo['window'] = window;if (yzo['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yzo['_inited'] = !![], yzo['isZiYu'] = obz9q, yzo['isPosMsgYu'] = iybe$o, yzo['EnvConfig'] = {}, !yzo['isZiYu'] && (fj43['setNativeFileDir']('/layaairGame'), fj43['existDir'](fj43['fileNativeDir'], h6$ek8['create'](yzo, yzo['onMkdirCallBack']))), yzo['window']['focus'] = function () {}, awp34['getUrlPath'] = function () {}, yzo['window']['logtime'] = function (sc15jt) {}, yzo['window']['alertTimeLog'] = function (t173) {}, yzo['window']['resetShareInfo'] = function () {}, yzo['window']['CanvasRenderingContext2D'] = function () {}, yzo['window']['CanvasRenderingContext2D']['prototype'] = yzo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yzo['window']['document']['body']['appendChild'] = function () {}, yzo['EnvConfig']['pixelRatioInt'] = 0x0, _8h0k['getPixelRatio'] = yzo['pixelRatio'], yzo['_preCreateElement'] = vxr2wn['createElement'], vxr2wn['createElement'] = yzo['createElement'], _8h0k['createShaderCondition'] = yzo['createShaderCondition'], qoy['parseXMLFromString'] = yzo['parseXMLFromString'], nx2_['_createInputElement'] = gh80_v['_createInputElement'], yzo['EnvConfig']['load'] = apr47w['prototype']['load'], apr47w['prototype']['load'] = be6$i['prototype']['load'], yzo['isZiYu'] && iybe$o && wx['onMessage'](function (_nxvg) {
        _nxvg['isLoad'] && (fj43['ziyuFileData'][_nxvg['url']] = _nxvg['data']);
      });
    }, yzo['onMkdirCallBack'] = function (ki8$6, sd5ct1) {
      if (!ki8$6) fj43['filesListObj'] = JSON['parse'](sd5ct1['data']);
    }, yzo['pixelRatio'] = function () {
      if (!yzo['EnvConfig']['pixelRatioInt']) try {
        var tj1fcs = wx['getSystemInfoSync']();return yzo['EnvConfig']['pixelRatioInt'] = tj1fcs['pixelRatio'], tj1fcs = tj1fcs, tj1fcs['pixelRatio'];
      } catch (h68) {}return yzo['EnvConfig']['pixelRatioInt'];
    }, yzo['createElement'] = function (e6h8k) {
      if (e6h8k == 'canvas') {
        var g8k0h6;return yzo['idx'] == 0x1 ? yzo['isZiYu'] ? (g8k0h6 = sharedCanvas, g8k0h6['style'] = {}) : g8k0h6 = window['canvas'] : g8k0h6 = window['wx']['createCanvas'](), yzo['idx']++, g8k0h6;
      } else {
        if (e6h8k == 'textarea' || e6h8k == 'input') return yzo['onCreateInput'](e6h8k);else {
          if (e6h8k == 'div') {
            var h68$k0 = yzo['_preCreateElement'](e6h8k);return h68$k0['contains'] = function (kh08$6) {
              return null;
            }, h68$k0['removeChild'] = function (hg0_v8) {}, h68$k0;
          } else return yzo['_preCreateElement'](e6h8k);
        }
      }
    }, yzo['onCreateInput'] = function (_ghxv0) {
      var g8v0_ = yzo['_preCreateElement'](_ghxv0);return g8v0_['focus'] = gh80_v['wxinputFocus'], g8v0_['blur'] = gh80_v['wxinputblur'], g8v0_['style'] = {}, g8v0_['value'] = 0x0, g8v0_['parentElement'] = {}, g8v0_['placeholder'] = {}, g8v0_['type'] = {}, g8v0_['setColor'] = function (zq9boy) {}, g8v0_['setType'] = function (iky$6) {}, g8v0_['setFontFace'] = function (p4a73w) {}, g8v0_['addEventListener'] = function (xv_nr) {}, g8v0_['contains'] = function (c5dmsl) {
        return null;
      }, g8v0_['removeChild'] = function (fts3) {}, g8v0_;
    }, yzo['createShaderCondition'] = function (rxv_n2) {
      var f13 = this,
          gn2 = function () {
        var _xnr2 = rxv_n2;return f13[rxv_n2['replace']('this.', '')];
      };return gn2;
    }, yzo['EnvConfig'] = null, yzo['window'] = null, yzo['_preCreateElement'] = null, yzo['_inited'] = ![], yzo['wxRequest'] = null, yzo['systemInfo'] = null, yzo['version'] = '0.0.1', yzo['isZiYu'] = ![], yzo['isPosMsgYu'] = ![], yzo['parseXMLFromString'] = function (st1j3f) {
      var _gnx, rpwa7;st1j3f = st1j3f['replace'](/>\s+</g, '><');try {
        _gnx = new window['Parser']['DOMParser']()['parseFromString'](st1j3f, 'text/xml');
      } catch (h86$) {
        throw '需要引入xml解析库文件';
      }return _gnx;
    }, yzo['idx'] = 0x1, yzo;
  }(),
      ft1sc = function () {
    function sc5m1() {}f1s3jt(sc5m1, 'laya.wx.mini.MiniImage');var vxg_h = sc5m1['prototype'];return vxg_h['_loadImage'] = function (p7f4) {
      var $y6kei = this,
          cjf1ts = ![];p7f4['indexOf']('layaNativeDir/') == -0x1 && (cjf1ts = !![], p7f4 = clm5s['formatURL'](p7f4));if (!fj43['getFileInfo'](p7f4)) {
        if (p7f4['indexOf']('http://') != -0x1 || p7f4['indexOf']('https://') != -0x1) fj43['downImg'](p7f4, new h6$ek8(sc5m1, sc5m1['onDownImgCallBack'], [p7f4, $y6kei]), p7f4);else sc5m1['onCreateImage'](p7f4, $y6kei, !![]);
      } else sc5m1['onCreateImage'](p7f4, $y6kei, !cjf1ts);
    }, sc5m1['onDownImgCallBack'] = function (f31tjs, a7f34p, mld5s) {
      if (!mld5s) sc5m1['onCreateImage'](f31tjs, a7f34p);else a7f34p['onError'](null);
    }, sc5m1['onCreateImage'] = function (anpw, gh806k, i86ke$) {
      i86ke$ === void 0x0 && (i86ke$ = ![]);var rxv2;if (!i86ke$) {
        var vx0_g = fj43['getFileInfo'](anpw),
            hv8_g = vx0_g['md5'];rxv2 = fj43['getFileNativePath'](hv8_g);
      } else rxv2 = anpw;if (gh806k['imgCache'] == null) gh806k['imgCache'] = {};var a3f7p4;function scm51() {
        a3f7p4['onload'] = null, a3f7p4['onerror'] = null, delete gh806k['imgCache'][anpw];
      };var v2rnx = function () {
        scm51(), gh806k['onLoaded'](a3f7p4);
      },
          yik$6 = function () {
        scm51(), gh806k['event']('error', 'Load image failed');
      };gh806k['_type'] == 'nativeimage' ? (a3f7p4 = new vxr2wn['window']['Image'](), a3f7p4['crossOrigin'] = '', a3f7p4['onload'] = v2rnx, a3f7p4['onerror'] = yik$6, a3f7p4['src'] = rxv2, gh806k['imgCache'][anpw] = a3f7p4) : new _hg['create'](rxv2, { 'onload': v2rnx, 'onerror': yik$6, 'onCreate': function (g_n2) {
          a3f7p4 = g_n2, gh806k['imgCache'][anpw] = g_n2;
        } });
    }, sc5m1;
  }(),
      gh80_v = function () {
    function i8$ke() {}return f1s3jt(i8$ke, 'laya.wx.mini.MiniInput'), i8$ke['_createInputElement'] = function () {
      nx2_['_initInput'](nx2_['area'] = vxr2wn['createElement']('textarea')), nx2_['_initInput'](nx2_['input'] = vxr2wn['createElement']('input')), nx2_['inputContainer'] = vxr2wn['createElement']('div'), nx2_['inputContainer']['style']['position'] = 'absolute', nx2_['inputContainer']['style']['zIndex'] = 0x186a0, vxr2wn['container']['appendChild'](nx2_['inputContainer']), nx2_['inputContainer']['setPos'] = function (ghxv_0, h8k$60) {
        nx2_['inputContainer']['style']['left'] = ghxv_0 + 'px', nx2_['inputContainer']['style']['top'] = h8k$60 + 'px';
      }, awp34['stage']['on']('resize', null, i8$ke['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (raw4n) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ebyio9['_soundClass'] = c5sld, ebyio9['_musicClass'] = c5sld;
    }, i8$ke['_onStageResize'] = function () {
      var ra7p4w = awp34['stage']['_canvasTransform']['identity']();ra7p4w['scale'](vxr2wn['width'] / o9by['canvas']['width'] / _8h0k['getPixelRatio'](), vxr2wn['height'] / o9by['canvas']['height'] / _8h0k['getPixelRatio']());
    }, i8$ke['wxinputFocus'] = function (nwrv2) {
      var s1cftj = nx2_['inputElement']['target'];if (s1cftj && !s1cftj['editable']) return;iobe9y['window']['wx']['offKeyboardConfirm'](), iobe9y['window']['wx']['offKeyboardInput'](), iobe9y['window']['wx']['showKeyboard']({ 'defaultValue': s1cftj['text'], 'maxLength': s1cftj['maxChars'], 'multiple': s1cftj['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ebyi9o) {}, 'fail': function (b6e$iy) {} }), iobe9y['window']['wx']['onKeyboardConfirm'](function (byq9o) {
        var dct5 = byq9o ? byq9o['value'] : '';s1cftj['text'] = dct5, s1cftj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), iobe9y['window']['wx']['onKeyboardInput'](function (mdls5) {
        var pnxw = mdls5 ? mdls5['value'] : '';if (!s1cftj['multiline']) {
          if (pnxw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s1cftj['text'] = pnxw, s1cftj['event']('input');
      });
    }, i8$ke['inputEnter'] = function () {
      nx2_['inputElement']['target']['focus'] = ![];
    }, i8$ke['wxinputblur'] = function () {
      i8$ke['hideKeyboard']();
    }, i8$ke['hideKeyboard'] = function () {
      iobe9y['window']['wx']['offKeyboardConfirm'](), iobe9y['window']['wx']['offKeyboardInput'](), iobe9y['window']['wx']['hideKeyboard']({ 'success': function (m51csd) {
          console['log']('隐藏键盘');
        }, 'fail': function (i6eby$) {
          console['log']('隐藏键盘出错:' + (i6eby$ ? i6eby$['errMsg'] : ''));
        } });
    }, i8$ke;
  }(),
      be6$i = function () {
    function ts1dc5() {}f1s3jt(ts1dc5, 'laya.wx.mini.MiniLoader');var j1cfst = ts1dc5['prototype'];return j1cfst['load'] = function (cdmls, ik$6e, f34jt, cmd5sl, r4pwa7) {
      f34jt === void 0x0 && (f34jt = !![]), r4pwa7 === void 0x0 && (r4pwa7 = ![]);var xnvg_ = this;xnvg_['_url'] = cdmls;if (cdmls['indexOf']('data:image') === 0x0) xnvg_['_type'] = ik$6e = 'image';else xnvg_['_type'] = ik$6e || (ik$6e = xnvg_['getTypeFromUrl'](cdmls));xnvg_['_cache'] = f34jt, xnvg_['_data'] = null;var ybqzo9 = 'ascii';if (cdmls['indexOf']('.fnt') != -0x1) ybqzo9 = 'utf8';else ik$6e == 'arraybuffer' && (ybqzo9 = '');;var arw4np = qoy['getFileExtension'](cdmls);if (ts1dc5['_fileTypeArr']['indexOf'](arw4np) != -0x1) iobe9y['EnvConfig']['load']['call'](this, cdmls, ik$6e, f34jt, cmd5sl, r4pwa7);else {
        if (!fj43['getFileInfo'](cdmls)) {
          if (cdmls['indexOf']('layaNativeDir/') != -0x1) {
            if (iobe9y['isZiYu']) {
              var biy$eo = fj43['ziyuFileData'][cdmls];xnvg_['onLoaded'](biy$eo);return;
            } else {
              cosnole['log']('read read'), fj43['read'](cdmls, ybqzo9, new h6$ek8(ts1dc5, ts1dc5['onReadNativeCallBack'], [ybqzo9, cdmls, ik$6e, f34jt, cmd5sl, r4pwa7, xnvg_]));return;
            }
          }if (clm5s['rootPath'] == '') var jsftc = cdmls;else jsftc = cdmls['split'](clm5s['rootPath'])[0x0];cdmls['indexOf']('http://') != -0x1 || cdmls['indexOf']('https://') != -0x1 ? iobe9y['EnvConfig']['load']['call'](xnvg_, cdmls, ik$6e, f34jt, cmd5sl, r4pwa7) : fj43['readFile'](jsftc, ybqzo9, new h6$ek8(ts1dc5, ts1dc5['onReadNativeCallBack'], [ybqzo9, cdmls, ik$6e, f34jt, cmd5sl, r4pwa7, xnvg_]), cdmls);
        } else iobe9y['EnvConfig']['load']['call'](this, cdmls, ik$6e, f34jt, cmd5sl, r4pwa7);
      }
    }, j1cfst['resMgrLoad'] = function (k$6i, fcs1, beoy$, hv0_g, v2x0, g6h0k, ey9iob) {
      beoy$ === void 0x0 && (beoy$ = 0x0), hv0_g === void 0x0 && (hv0_g = ![]), v2x0 === void 0x0 && (v2x0 = ![]), g6h0k === void 0x0 && (g6h0k = 0x0), ey9iob === void 0x0 && (ey9iob = 0x3), k$6i['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k$6i), iobe9y['EnvConfig']['resMgrLoad'](k$6i, (j437, j3t1fs, $iobye) => {
        ts1dc5['prototype']['resMgrLoadCallBack'](j437, j3t1fs, $iobye, fcs1);
      }, beoy$, hv0_g, v2x0, g6h0k, ey9iob);
    }, j1cfst['resMgrLoadCallBack'] = function (yoie$b, y$be, nr2xw, dsm5cl) {
      console['log']('buff:::', yoie$b, nr2xw, fj43['fileNativeDir'] + '///' + fj43['fileListName']), dsm5cl(yoie$b, y$be, nr2xw);
    }, j1cfst['clearRes'] = function (dcms15, t3j1f7) {
      t3j1f7 === void 0x0 && (t3j1f7 = ![]);var tj1f73 = this;tj1f73['clearRes'](dcms15, t3j1f7);var j4f37 = fj43['getFileInfo'](dcms15);if (j4f37 && (dcms15['indexOf']('http://') != -0x1 || dcms15['indexOf']('https://') != -0x1)) {
        var gx_vh = j4f37['md5'],
            ie6y$ = fj43['getFileNativePath'](gx_vh);fj43['remove'](ie6y$);
      }
    }, ts1dc5['onReadNativeCallBack'] = function (iye6b, pwnra4, msl5cd, $8h6e, jf7a, f3a74p, p7r4a, j3ft4, wv2xr) {
      $8h6e === void 0x0 && ($8h6e = !![]), f3a74p === void 0x0 && (f3a74p = ![]), j3ft4 === void 0x0 && (j3ft4 = 0x0);if (!j3ft4) {
        var wrpnx2;if (msl5cd == 'json' || msl5cd == 'atlas') wrpnx2 = iobe9y['getJson'](wv2xr['data']);else msl5cd == 'xml' ? wrpnx2 = qoy['parseXMLFromString'](wv2xr['data']) : wrpnx2 = wv2xr['data'];p7r4a['onLoaded'](wrpnx2), !iobe9y['isZiYu'] && iobe9y['isPosMsgYu'] && msl5cd != 'arraybuffer' && wx['postMessage']({ 'url': pwnra4, 'data': wrpnx2, 'isLoad': !![] });
      } else j3ft4 == 0x1 && iobe9y['EnvConfig']['load']['call'](p7r4a, pwnra4, msl5cd, $8h6e, jf7a, f3a74p);
    }, aprnw4(ts1dc5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ts1dc5;
  }(),
      fj43 = function (vr2xw) {
    function fj31st() {
      fj31st['__super']['call'](this);;
    }return f1s3jt(fj31st, 'laya.wx.mini.MiniFileMgr', vr2xw), fj31st['isLoadFile'] = function (boyi$e) {
      return fj31st['_fileTypeArr']['indexOf'](boyi$e) != -0x1 ? !![] : ![];
    }, fj31st['getFileInfo'] = function (wrpa7) {
      var tj371f = wrpa7['split']('?')[0x0],
          dmlsc5 = fj31st['filesListObj'][tj371f];if (dmlsc5 == null) return null;else return dmlsc5;return null;
    }, fj31st['onFileUpdate'] = function (_kgh08, wa34p7) {
      var vxg_h0 = _kgh08['split']('/'),
          qz9y = vxg_h0[vxg_h0['length'] - 0x1],
          jt713 = fj31st['getFileInfo'](wa34p7);if (jt713 == null) fj31st['onSaveFile'](wa34p7, qz9y);else {
        if (jt713['readyUrl'] != wa34p7) fj31st['remove'](qz9y, wa34p7);
      }
    }, fj31st['exits'] = function (jfs1tc, mcls5d) {
      var g0_2v = fj31st['getFileNativePath'](jfs1tc);fj31st['fs']['getFileInfo']({ 'filePath': g0_2v, 'success': function (jf1t) {
          mcls5d != null && mcls5d['runWith']([0x0, jf1t]);
        }, 'fail': function (f73a4j) {
          mcls5d != null && mcls5d['runWith']([0x1, f73a4j]);
        } });
    }, fj31st['read'] = function (a2npw, afp, wprn4a, stf13j) {
      afp === void 0x0 && (afp = 'ascill'), stf13j === void 0x0 && (stf13j = '');var s3j;stf13j != '' ? s3j = fj31st['getFileNativePath'](a2npw) : s3j = a2npw, fj31st['fs']['readFile']({ 'filePath': s3j, 'encoding': afp, 'success': function (zoi) {
          wprn4a != null && wprn4a['runWith']([0x0, zoi]);
        }, 'fail': function ($iyke6) {
          if ($iyke6 && stf13j != '') fj31st['down'](stf13j, afp, wprn4a, stf13j);else wprn4a != null && wprn4a['runWith']([0x1]);
        } });
    }, fj31st['readNativeFile'] = function (y9bq, sd5c1t) {
      fj31st['fs']['readFile']({ 'filePath': y9bq, 'encoding': '', 'success': function (nrwp2) {
          sd5c1t != null && sd5c1t['runWith']([0x0]);
        }, 'fail': function (obziy) {
          sd5c1t != null && sd5c1t['runWith']([0x1]);
        } });
    }, fj31st['down'] = function (g86h, _kh8g0, k$e86, $h068k) {
      _kh8g0 === void 0x0 && (_kh8g0 = 'ascill'), $h068k === void 0x0 && ($h068k = '');var $kyie6 = fj31st['getFileNativePath']($h068k),
          lm5dsc = fj31st['wxdown']({ 'url': g86h, 'filePath': $kyie6, 'success': function (sjcft) {
          if (sjcft['statusCode'] === 0xc8) fj31st['readFile'](sjcft['filePath'], _kh8g0, k$e86, $h068k);
        }, 'fail': function (h$806) {
          k$e86 != null && k$e86['runWith']([0x1, h$806]);
        } });lm5dsc['onProgressUpdate'](function (xvh0_) {
        k$e86 != null && k$e86['runWith']([0x2, xvh0_['progress']]);
      });
    }, fj31st['readFile'] = function (rw2vx, h08v_g, k6h0g, t1ds) {
      h08v_g === void 0x0 && (h08v_g = 'ascill'), t1ds === void 0x0 && (t1ds = ''), fj31st['fs']['readFile']({ 'filePath': rw2vx, 'encoding': h08v_g, 'success': function (h6gk08) {
          if (rw2vx['indexOf']('http://') != -0x1 || rw2vx['indexOf']('https://') != -0x1) fj31st['onFileUpdate'](rw2vx, t1ds);k6h0g != null && k6h0g['runWith']([0x0, h6gk08]);
        }, 'fail': function (k80h_) {
          if (k80h_) k6h0g != null && k6h0g['runWith']([0x1, k80h_]);
        } });
    }, fj31st['downImg'] = function (yoi9zb, tj5, nw2ar) {
      nw2ar === void 0x0 && (nw2ar = '');var tds5c1 = fj31st['wxdown']({ 'url': yoi9zb, 'success': function (sj1ft3) {
          sj1ft3['statusCode'] === 0xc8 && fj31st['copyFile'](sj1ft3['tempFilePath'], nw2ar, tj5);
        }, 'fail': function (wp7) {
          tj5 != null && tj5['runWith']([0x1, wp7]);
        } });
    }, fj31st['copyFile'] = function (_n2gvx, i$by6, v0xh) {
      var c1fts = _n2gvx['split']('/'),
          f317j = c1fts[c1fts['length'] - 0x1],
          m5ds = i$by6['split']('?')[0x0],
          $ikye = fj31st['getFileInfo'](i$by6),
          k6$80 = fj31st['getFileNativePath'](f317j);fj31st['fs']['copyFile']({ 'srcPath': _n2gvx, 'destPath': k6$80, 'success': function ($kh68) {
          if (!$ikye) fj31st['onSaveFile'](i$by6, f317j), v0xh != null && v0xh['runWith']([0x0]);else {
            if ($ikye['readyUrl'] != i$by6) fj31st['remove'](f317j, i$by6, v0xh);
          }
        }, 'fail': function (_hgxv) {
          v0xh != null && v0xh['runWith']([0x1, _hgxv]);
        } });
    }, fj31st['getFileNativePath'] = function (gh_v80) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gh_v80;
    }, fj31st['remove'] = function (w2rnx, gh_80v, pf7a3) {
      gh_80v === void 0x0 && (gh_80v = '');var xvg2_0 = fj31st['getFileInfo'](gh_80v),
          o$byie = fj31st['getFileNativePath'](xvg2_0['md5']);awp34['loader']['clearRes'](xvg2_0['readyUrl']), fj31st['fs']['unlink']({ 'filePath': o$byie, 'success': function (t43fj7) {
          if (gh_80v != '') fj31st['onSaveFile'](gh_80v, w2rnx);pf7a3 != null && pf7a3['runWith']([0x0]);
        }, 'fail': function (wn2vx) {} });
    }, fj31st['onSaveFile'] = function (j3fa74, pxw2) {
      var j1tsf3 = j3fa74['split']('?')[0x0];fj31st['filesListObj'][j1tsf3] = { 'md5': pxw2, 'readyUrl': j3fa74 }, fj31st['fs']['writeFile']({ 'filePath': fj31st['fileNativeDir'] + '/' + fj31st['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fj31st['filesListObj']), 'success': function (oi9zb) {
          console['log']('写入测试测试成功：', oi9zb);
        }, 'fail': function (kie6y) {
          console['log']('写入测试测试失败：', kie6y);
        } });
    }, fj31st['existDir'] = function (e6b$y, $byoie) {
      fj31st['fs']['mkdir']({ 'dirPath': e6b$y, 'success': function (hk8) {
          $byoie != null && $byoie['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (b9zoy) {
          if (b9zoy['errMsg']['indexOf']('file already exists') != -0x1) fj31st['readSync'](fj31st['fileListName'], 'utf8', $byoie);else $byoie != null && $byoie['runWith']([0x1, b9zoy]);
        } });
    }, fj31st['readSync'] = function (oeby9, oi9ybz, kg_8h0, r2wp) {
      oi9ybz === void 0x0 && (oi9ybz = 'ascill'), r2wp === void 0x0 && (r2wp = '');var x2wv = fj31st['getFileNativePath'](oeby9),
          sm15d;try {
        sm15d = fj31st['fs']['readFileSync'](x2wv), kg_8h0 != null && kg_8h0['runWith']([0x0, { 'data': sm15d }]);
      } catch (dsmc1) {
        kg_8h0 != null && kg_8h0['runWith']([0x1]);
      }
    }, fj31st['readCache'] = function () {}, fj31st['writeCache'] = function (h$6) {
      var prw2n = readyUrl['split']('?')[0x0];fj31st['filesListObj'][prw2n] = { 'md5': md5Name, 'readyUrl': readyUrl }, fj31st['fs']['writeFile']({ 'filePath': fj31st['fileNativeDir'] + '/' + fj31st['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fj31st['filesListObj']), 'success': function (st5d1) {}, 'fail': function (stj1f3) {} });
    }, fj31st['setNativeFileDir'] = function (wrpan2) {
      fj31st['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wrpan2;
    }, fj31st['filesListObj'] = {}, fj31st['fileNativeDir'] = null, fj31st['fileListName'] = 'layaairfiles.txt', fj31st['ziyuFileData'] = {}, aprnw4(fj31st, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), fj31st;
  }(e$h86),
      c5sld = function (ybqo9) {
    function sdc51t() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sdc51t['__super']['call'](this), this['_sound'] = sdc51t['_createSound']();
    }f1s3jt(sdc51t, 'laya.wx.mini.MiniSound', ybqo9);var rnwv = sdc51t['prototype'];return rnwv['load'] = function (n4wpa) {
      var xv2_0g = this;n4wpa = clm5s['formatURL'](n4wpa), this['url'] = n4wpa;if (sdc51t['_audioCache'][n4wpa]) {
        this['event']('complete');return;
      }function _2nr() {
        if (sdc51t['_null'] != undefined) xv2_0g['_sound']['onCanplay'](sdc51t['_null']), xv2_0g['_sound']['onError'](sdc51t['_null']);else try {
          xv2_0g['_sound']['onCanplay'](null), xv2_0g['_sound']['onError'](null), sdc51t['_null'] = null;
        } catch (prwnx) {
          console['warn']('[wxmini] _clearSound:' + prwnx), xv2_0g['_sound']['onCanplay'](boizy), xv2_0g['_sound']['onError'](boizy), sdc51t['_null'] = boizy;
        }
      }function tj3f1() {
        _2nr(), qzoy9['loaded'] = !![], qzoy9['event']('complete'), sdc51t['_audioCache'][qzoy9['url']] = qzoy9;
      }function i9yzob(g_kh08) {
        console['error']('errCode=' + g_kh08['errCode'] + '  errMsg=' + g_kh08['errMsg']), _2nr(), qzoy9['event']('error');
      }function boizy() {}this['_sound']['onCanplay'](tj3f1), this['_sound']['onError'](i9yzob), this['_sound']['src'] = n4wpa;var qzoy9 = this;
    }, rnwv['play'] = function (aw7rp4, hg08) {
      aw7rp4 === void 0x0 && (aw7rp4 = 0x0), hg08 === void 0x0 && (hg08 = 0x0);var cdt15s;if (this['url'] == ebyio9['_tMusic']) {
        if (!sdc51t['_musicAudio']) sdc51t['_musicAudio'] = sdc51t['_createSound']();cdt15s = sdc51t['_musicAudio'];
      } else cdt15s = sdc51t['_createSound']();cdt15s['src'] = this['url'];var iyk$6e = new f31ts(cdt15s);return iyk$6e['url'] = this['url'], iyk$6e['loops'] = hg08, iyk$6e['startTime'] = aw7rp4, iyk$6e['play'](), ebyio9['addChannel'](iyk$6e), iyk$6e;
    }, rnwv['dispose'] = function () {
      var j1sft = sdc51t['_audioCache'][this['url']];j1sft && (j1sft['src'] = '', delete sdc51t['_audioCache'][this['url']]);
    }, wpnra2(0x0, rnwv, 'duration', function () {
      return this['_sound']['duration'];
    }), sdc51t['_createSound'] = function () {
      return sdc51t['_id']++, iobe9y['window']['wx']['createInnerAudioContext']();
    }, sdc51t['_musicAudio'] = null, sdc51t['_id'] = 0x0, sdc51t['_audioCache'] = {}, sdc51t['_null'] = undefined, sdc51t;
  }(e$h86),
      f31ts = function (sf13tj) {
    function t5d1s(biey$o) {
      this['_audio'] = null, this['_onEnd'] = null, t5d1s['__super']['call'](this), this['_audio'] = biey$o, this['_onEnd'] = qoy['bind'](this['__onEnd'], this), biey$o['onEnded'](this['_onEnd']);
    }f1s3jt(t5d1s, 'laya.wx.mini.MiniSoundChannel', sf13tj);var kg0h68 = t5d1s['prototype'];return kg0h68['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (awp34['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kg0h68['__onNull'] = function () {}, kg0h68['play'] = function () {
      this['isStopped'] = ![], ebyio9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kg0h68['stop'] = function () {
      this['isStopped'] = !![], ebyio9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (t5d1s['_null'] != undefined) this['_audio']['onEnded'](t5d1s['_null']);else try {
        this['_audio']['onEnded'](null), t5d1s['_null'] = null;
      } catch (_g8vh) {
        console['warn']('[wxmini] stop:' + _g8vh), this['_audio']['onEnded'](qoy['bind'](this['__onNull'], this)), t5d1s['_null'] = qoy['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kg0h68['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kg0h68['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ebyio9['addChannel'](this), this['_audio']['play']();
    }, wpnra2(0x0, kg0h68, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), wpnra2(0x0, kg0h68, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), wpnra2(0x0, kg0h68, 'volume', function () {
      return 0x1;
    }, function (f7j31) {}), t5d1s['_null'] = undefined, t5d1s;
  }(b9zqoy);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w7ar4p in Laya) {
    var ie6$b = Laya[w7ar4p];ie6$b && ie6$b['__isclass'] && (exports[w7ar4p] = ie6$b);
  }
});