var Q = wx.$I;
(function (window, document, wn45) {
  var qeubks = wn45['un'],
      $0rzl = wn45['uns'],
      qksu2 = wn45['static'],
      eb7a6 = wn45['class'],
      nw5h4x = wn45['getset'],
      virmt9 = wn45['__newvec'],
      $rlti9 = laya['utils']['Browser'],
      sk2eu = laya['events']['Event'],
      og0d = laya['events']['EventDispatcher'],
      v19tm = laya['resource']['HTMLImage'],
      gyoz0l = laya['utils']['Handler'],
      k5w2nq = laya['display']['Input'],
      jp_8c = laya['net']['Loader'],
      lzog = laya['maths']['Matrix'],
      $iltr = laya['renders']['Render'],
      e736sb = laya['utils']['RunDriver'],
      c9vpm = laya['media']['Sound'],
      q2skeu = laya['media']['SoundChannel'],
      af_6 = laya['media']['SoundManager'],
      _p8c1f = laya['display']['Stage'],
      m91tvc = laya['net']['URL'],
      r0il$ = laya['utils']['Utils'],
      m9rv = function () {
    function fc1_p8() {}return eb7a6(fc1_p8, 'laya.wx.mini.MiniAdpter'), fc1_p8['getJson'] = function (be376a) {
      return JSON['parse'](be376a);
    }, fc1_p8['init'] = function (n5xhw4, gz0$il) {
      n5xhw4 === void 0x0 && (n5xhw4 = ![]), gz0$il === void 0x0 && (gz0$il = ![]);if (fc1_p8['_inited']) return;fc1_p8['window'] = window;if (fc1_p8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fc1_p8['_inited'] = !![], fc1_p8['isZiYu'] = gz0$il, fc1_p8['isPosMsgYu'] = n5xhw4, fc1_p8['EnvConfig'] = {}, !fc1_p8['isZiYu'] && (rzi$t['setNativeFileDir']('/layaairGame'), rzi$t['existDir'](rzi$t['fileNativeDir'], gyoz0l['create'](fc1_p8, fc1_p8['onMkdirCallBack']))), fc1_p8['window']['focus'] = function () {}, wn45['getUrlPath'] = function () {}, fc1_p8['window']['logtime'] = function (mti9r) {}, fc1_p8['window']['alertTimeLog'] = function (knwq25) {}, fc1_p8['window']['resetShareInfo'] = function () {}, fc1_p8['window']['CanvasRenderingContext2D'] = function () {}, fc1_p8['window']['CanvasRenderingContext2D']['prototype'] = fc1_p8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fc1_p8['window']['document']['body']['appendChild'] = function () {}, fc1_p8['EnvConfig']['pixelRatioInt'] = 0x0, e736sb['getPixelRatio'] = fc1_p8['pixelRatio'], fc1_p8['_preCreateElement'] = $rlti9['createElement'], $rlti9['createElement'] = fc1_p8['createElement'], e736sb['createShaderCondition'] = fc1_p8['createShaderCondition'], r0il$['parseXMLFromString'] = fc1_p8['parseXMLFromString'], k5w2nq['_createInputElement'] = $r9t['_createInputElement'], fc1_p8['EnvConfig']['load'] = jp_8c['prototype']['load'], jp_8c['prototype']['load'] = r$lt['prototype']['load'], fc1_p8['isZiYu'] && n5xhw4 && wx['onMessage'](function (n5w24) {
        n5w24['isLoad'] && (rzi$t['ziyuFileData'][n5w24['url']] = n5w24['data']);
      });
    }, fc1_p8['onMkdirCallBack'] = function (b76aj, odzyg) {
      if (!b76aj) rzi$t['filesListObj'] = JSON['parse'](odzyg['data']);
    }, fc1_p8['pixelRatio'] = function () {
      if (!fc1_p8['EnvConfig']['pixelRatioInt']) try {
        var z0ilg = wx['getSystemInfoSync']();return fc1_p8['EnvConfig']['pixelRatioInt'] = z0ilg['pixelRatio'], z0ilg = z0ilg, z0ilg['pixelRatio'];
      } catch ($li9r) {}return fc1_p8['EnvConfig']['pixelRatioInt'];
    }, fc1_p8['createElement'] = function (mrtv9) {
      if (mrtv9 == 'canvas') {
        var $0og;return fc1_p8['idx'] == 0x1 ? fc1_p8['isZiYu'] ? ($0og = sharedCanvas, $0og['style'] = {}) : $0og = window['canvas'] : $0og = window['wx']['createCanvas'](), fc1_p8['idx']++, $0og;
      } else {
        if (mrtv9 == 'textarea' || mrtv9 == 'input') return fc1_p8['onCreateInput'](mrtv9);else {
          if (mrtv9 == 'div') {
            var cf_p8 = fc1_p8['_preCreateElement'](mrtv9);return cf_p8['contains'] = function (nw24h5) {
              return null;
            }, cf_p8['removeChild'] = function (l9t$) {}, cf_p8;
          } else return fc1_p8['_preCreateElement'](mrtv9);
        }
      }
    }, fc1_p8['onCreateInput'] = function (rilt$) {
      var s7ebu = fc1_p8['_preCreateElement'](rilt$);return s7ebu['focus'] = $r9t['wxinputFocus'], s7ebu['blur'] = $r9t['wxinputblur'], s7ebu['style'] = {}, s7ebu['value'] = 0x0, s7ebu['parentElement'] = {}, s7ebu['placeholder'] = {}, s7ebu['type'] = {}, s7ebu['setColor'] = function (hwnx45) {}, s7ebu['setType'] = function (dogz) {}, s7ebu['setFontFace'] = function (sueb37) {}, s7ebu['addEventListener'] = function (_cp8j) {}, s7ebu['contains'] = function (mvtri) {
        return null;
      }, s7ebu['removeChild'] = function (nw54q) {}, s7ebu;
    }, fc1_p8['createShaderCondition'] = function (abe36) {
      var q245wn = this,
          wkqn52 = function () {
        var rzti = abe36;return q245wn[abe36['replace']('this.', '')];
      };return wkqn52;
    }, fc1_p8['EnvConfig'] = null, fc1_p8['window'] = null, fc1_p8['_preCreateElement'] = null, fc1_p8['_inited'] = ![], fc1_p8['wxRequest'] = null, fc1_p8['systemInfo'] = null, fc1_p8['version'] = '0.0.1', fc1_p8['isZiYu'] = ![], fc1_p8['isPosMsgYu'] = ![], fc1_p8['parseXMLFromString'] = function ($zolg) {
      var bs7u3, _8af6j;$zolg = $zolg['replace'](/>\s+</g, '><');try {
        bs7u3 = new window['Parser']['DOMParser']()['parseFromString']($zolg, 'text/xml');
      } catch (bae3) {
        throw '需要引入xml解析库文件';
      }return bs7u3;
    }, fc1_p8['idx'] = 0x1, fc1_p8;
  }(),
      fmvpc1 = function () {
    function fmcv() {}eb7a6(fmcv, 'laya.wx.mini.MiniImage');var il$rt9 = fmcv['prototype'];return il$rt9['_loadImage'] = function (f_8c) {
      var mp91 = this,
          j_63a8 = ![];f_8c['indexOf']('layaNativeDir/') == -0x1 && (j_63a8 = !![], f_8c = m91tvc['formatURL'](f_8c));if (!rzi$t['getFileInfo'](f_8c)) {
        if (f_8c['indexOf']('http://') != -0x1 || f_8c['indexOf']('https://') != -0x1) rzi$t['downImg'](f_8c, new gyoz0l(fmcv, fmcv['onDownImgCallBack'], [f_8c, mp91]), f_8c);else fmcv['onCreateImage'](f_8c, mp91, !![]);
      } else fmcv['onCreateImage'](f_8c, mp91, !j_63a8);
    }, fmcv['onDownImgCallBack'] = function (jcp_f8, ukn52q, m1vcfp) {
      if (!m1vcfp) fmcv['onCreateImage'](jcp_f8, ukn52q);else ukn52q['onError'](null);
    }, fmcv['onCreateImage'] = function (ebksu7, k2wq, bks7ue) {
      bks7ue === void 0x0 && (bks7ue = ![]);var it$lr9;if (!bks7ue) {
        var mcp1v9 = rzi$t['getFileInfo'](ebksu7),
            h425n = mcp1v9['md5'];it$lr9 = rzi$t['getFileNativePath'](h425n);
      } else it$lr9 = ebksu7;if (k2wq['imgCache'] == null) k2wq['imgCache'] = {};var b67aj3;function g0zo() {
        b67aj3['onload'] = null, b67aj3['onerror'] = null, delete k2wq['imgCache'][ebksu7];
      };var l0yo = function () {
        g0zo(), k2wq['onLoaded'](b67aj3);
      },
          n2wq4 = function () {
        g0zo(), k2wq['event']('error', 'Load image failed');
      };k2wq['_type'] == 'nativeimage' ? (b67aj3 = new $rlti9['window']['Image'](), b67aj3['crossOrigin'] = '', b67aj3['onload'] = l0yo, b67aj3['onerror'] = n2wq4, b67aj3['src'] = it$lr9, k2wq['imgCache'][ebksu7] = b67aj3) : new v19tm['create'](it$lr9, { 'onload': l0yo, 'onerror': n2wq4, 'onCreate': function (tr9i$v) {
          b67aj3 = tr9i$v, k2wq['imgCache'][ebksu7] = tr9i$v;
        } });
    }, fmcv;
  }(),
      $r9t = function () {
    function w245nq() {}return eb7a6(w245nq, 'laya.wx.mini.MiniInput'), w245nq['_createInputElement'] = function () {
      k5w2nq['_initInput'](k5w2nq['area'] = $rlti9['createElement']('textarea')), k5w2nq['_initInput'](k5w2nq['input'] = $rlti9['createElement']('input')), k5w2nq['inputContainer'] = $rlti9['createElement']('div'), k5w2nq['inputContainer']['style']['position'] = 'absolute', k5w2nq['inputContainer']['style']['zIndex'] = 0x186a0, $rlti9['container']['appendChild'](k5w2nq['inputContainer']), k5w2nq['inputContainer']['setPos'] = function (gdy, bu7s) {
        k5w2nq['inputContainer']['style']['left'] = gdy + 'px', k5w2nq['inputContainer']['style']['top'] = bu7s + 'px';
      }, wn45['stage']['on']('resize', null, w245nq['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s2nqku) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), af_6['_soundClass'] = equkbs, af_6['_musicClass'] = equkbs;
    }, w245nq['_onStageResize'] = function () {
      var a_6j38 = wn45['stage']['_canvasTransform']['identity']();a_6j38['scale']($rlti9['width'] / $iltr['canvas']['width'] / e736sb['getPixelRatio'](), $rlti9['height'] / $iltr['canvas']['height'] / e736sb['getPixelRatio']());
    }, w245nq['wxinputFocus'] = function (aj8f_) {
      var seq2k = k5w2nq['inputElement']['target'];if (seq2k && !seq2k['editable']) return;m9rv['window']['wx']['offKeyboardConfirm'](), m9rv['window']['wx']['offKeyboardInput'](), m9rv['window']['wx']['showKeyboard']({ 'defaultValue': seq2k['text'], 'maxLength': seq2k['maxChars'], 'multiple': seq2k['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tvmr19) {}, 'fail': function (k2snqu) {} }), m9rv['window']['wx']['onKeyboardConfirm'](function (mriv9t) {
        var b73seu = mriv9t ? mriv9t['value'] : '';seq2k['text'] = b73seu, seq2k['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m9rv['window']['wx']['onKeyboardInput'](function (hw5) {
        var il$gz = hw5 ? hw5['value'] : '';if (!seq2k['multiline']) {
          if (il$gz['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }seq2k['text'] = il$gz, seq2k['event']('input');
      });
    }, w245nq['inputEnter'] = function () {
      k5w2nq['inputElement']['target']['focus'] = ![];
    }, w245nq['wxinputblur'] = function () {
      w245nq['hideKeyboard']();
    }, w245nq['hideKeyboard'] = function () {
      m9rv['window']['wx']['offKeyboardConfirm'](), m9rv['window']['wx']['offKeyboardInput'](), m9rv['window']['wx']['hideKeyboard']({ 'success': function (zlo0$g) {
          console['log']('隐藏键盘');
        }, 'fail': function (b7j36a) {
          console['log']('隐藏键盘出错:' + (b7j36a ? b7j36a['errMsg'] : ''));
        } });
    }, w245nq;
  }(),
      r$lt = function () {
    function _63ja() {}eb7a6(_63ja, 'laya.wx.mini.MiniLoader');var seub37 = _63ja['prototype'];return seub37['load'] = function (bue37s, vpfcm, z$lo0, bse37u, ilr) {
      z$lo0 === void 0x0 && (z$lo0 = !![]), ilr === void 0x0 && (ilr = ![]);var qwk52n = this;qwk52n['_url'] = bue37s;if (bue37s['indexOf']('data:image') === 0x0) qwk52n['_type'] = vpfcm = 'image';else qwk52n['_type'] = vpfcm || (vpfcm = qwk52n['getTypeFromUrl'](bue37s));qwk52n['_cache'] = z$lo0, qwk52n['_data'] = null;var izl0 = 'ascii';if (bue37s['indexOf']('.fnt') != -0x1) izl0 = 'utf8';else vpfcm == 'arraybuffer' && (izl0 = '');;var _8ajf = r0il$['getFileExtension'](bue37s);if (_63ja['_fileTypeArr']['indexOf'](_8ajf) != -0x1) m9rv['EnvConfig']['load']['call'](this, bue37s, vpfcm, z$lo0, bse37u, ilr);else {
        if (!rzi$t['getFileInfo'](bue37s)) {
          if (bue37s['indexOf']('layaNativeDir/') != -0x1) {
            if (m9rv['isZiYu']) {
              var n5u2 = rzi$t['ziyuFileData'][bue37s];qwk52n['onLoaded'](n5u2);return;
            } else {
              cosnole['log']('read read'), rzi$t['read'](bue37s, izl0, new gyoz0l(_63ja, _63ja['onReadNativeCallBack'], [izl0, bue37s, vpfcm, z$lo0, bse37u, ilr, qwk52n]));return;
            }
          }if (m91tvc['rootPath'] == '') var a3j678 = bue37s;else a3j678 = bue37s['split'](m91tvc['rootPath'])[0x0];bue37s['indexOf']('http://') != -0x1 || bue37s['indexOf']('https://') != -0x1 ? m9rv['EnvConfig']['load']['call'](qwk52n, bue37s, vpfcm, z$lo0, bse37u, ilr) : rzi$t['readFile'](a3j678, izl0, new gyoz0l(_63ja, _63ja['onReadNativeCallBack'], [izl0, bue37s, vpfcm, z$lo0, bse37u, ilr, qwk52n]), bue37s);
        } else m9rv['EnvConfig']['load']['call'](this, bue37s, vpfcm, z$lo0, bse37u, ilr);
      }
    }, seub37['resMgrLoad'] = function (gzy0ol, vim9tr, t$izl, n4q5w, e763bs, tvm1r9, kuq) {
      t$izl === void 0x0 && (t$izl = 0x0), n4q5w === void 0x0 && (n4q5w = ![]), e763bs === void 0x0 && (e763bs = ![]), tvm1r9 === void 0x0 && (tvm1r9 = 0x0), kuq === void 0x0 && (kuq = 0x3), gzy0ol['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gzy0ol), m9rv['EnvConfig']['resMgrLoad'](gzy0ol, (pmc_, uqbek, $zitr) => {
        _63ja['prototype']['resMgrLoadCallBack'](pmc_, uqbek, $zitr, vim9tr);
      }, t$izl, n4q5w, e763bs, tvm1r9, kuq);
    }, seub37['resMgrLoadCallBack'] = function (bk, t$zlir, i9v$, r$ltz) {
      console['log']('buff:::', bk, i9v$, rzi$t['fileNativeDir'] + '///' + rzi$t['fileListName']), r$ltz(bk, t$zlir, i9v$);
    }, seub37['clearRes'] = function (p18fc_, _1pfmc) {
      _1pfmc === void 0x0 && (_1pfmc = ![]);var lgo0 = this;lgo0['clearRes'](p18fc_, _1pfmc);var _8fc1 = rzi$t['getFileInfo'](p18fc_);if (_8fc1 && (p18fc_['indexOf']('http://') != -0x1 || p18fc_['indexOf']('https://') != -0x1)) {
        var p_fm1 = _8fc1['md5'],
            x54hnw = rzi$t['getFileNativePath'](p_fm1);rzi$t['remove'](x54hnw);
      }
    }, _63ja['onReadNativeCallBack'] = function (zd0gyo, qksun, m1tv9c, sqekb, i0lg, suq2ke, $zirl0, q2kw5n, bues7) {
      sqekb === void 0x0 && (sqekb = !![]), suq2ke === void 0x0 && (suq2ke = ![]), q2kw5n === void 0x0 && (q2kw5n = 0x0);if (!q2kw5n) {
        var $rvit;if (m1tv9c == 'json' || m1tv9c == 'atlas') $rvit = m9rv['getJson'](bues7['data']);else m1tv9c == 'xml' ? $rvit = r0il$['parseXMLFromString'](bues7['data']) : $rvit = bues7['data'];$zirl0['onLoaded']($rvit), !m9rv['isZiYu'] && m9rv['isPosMsgYu'] && m1tv9c != 'arraybuffer' && wx['postMessage']({ 'url': qksun, 'data': $rvit, 'isLoad': !![] });
      } else q2kw5n == 0x1 && m9rv['EnvConfig']['load']['call']($zirl0, qksun, m1tv9c, sqekb, i0lg, suq2ke);
    }, qksu2(_63ja, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _63ja;
  }(),
      rzi$t = function (cf1m) {
    function qnw542() {
      qnw542['__super']['call'](this);;
    }return eb7a6(qnw542, 'laya.wx.mini.MiniFileMgr', cf1m), qnw542['isLoadFile'] = function (iv9r) {
      return qnw542['_fileTypeArr']['indexOf'](iv9r) != -0x1 ? !![] : ![];
    }, qnw542['getFileInfo'] = function (w5nh) {
      var fcp_81 = w5nh['split']('?')[0x0],
          irt9$v = qnw542['filesListObj'][fcp_81];if (irt9$v == null) return null;else return irt9$v;return null;
    }, qnw542['onFileUpdate'] = function (t9vi$, t$9vir) {
      var h5w24n = t9vi$['split']('/'),
          l0zgo$ = h5w24n[h5w24n['length'] - 0x1],
          b7seu3 = qnw542['getFileInfo'](t$9vir);if (b7seu3 == null) qnw542['onSaveFile'](t$9vir, l0zgo$);else {
        if (b7seu3['readyUrl'] != t$9vir) qnw542['remove'](l0zgo$, t$9vir);
      }
    }, qnw542['exits'] = function (xhw4, rit$) {
      var $9irtl = qnw542['getFileNativePath'](xhw4);qnw542['fs']['getFileInfo']({ 'filePath': $9irtl, 'success': function (p_f18c) {
          rit$ != null && rit$['runWith']([0x0, p_f18c]);
        }, 'fail': function (t1cv9) {
          rit$ != null && rit$['runWith']([0x1, t1cv9]);
        } });
    }, qnw542['read'] = function (li$z, o0zdg, igl$, wh5x4) {
      o0zdg === void 0x0 && (o0zdg = 'ascill'), wh5x4 === void 0x0 && (wh5x4 = '');var a8736j;wh5x4 != '' ? a8736j = qnw542['getFileNativePath'](li$z) : a8736j = li$z, qnw542['fs']['readFile']({ 'filePath': a8736j, 'encoding': o0zdg, 'success': function (subq) {
          igl$ != null && igl$['runWith']([0x0, subq]);
        }, 'fail': function (f_jc8p) {
          if (f_jc8p && wh5x4 != '') qnw542['down'](wh5x4, o0zdg, igl$, wh5x4);else igl$ != null && igl$['runWith']([0x1]);
        } });
    }, qnw542['readNativeFile'] = function (cm91, c_jf8) {
      qnw542['fs']['readFile']({ 'filePath': cm91, 'encoding': '', 'success': function (t9$irl) {
          c_jf8 != null && c_jf8['runWith']([0x0]);
        }, 'fail': function ($tri9) {
          c_jf8 != null && c_jf8['runWith']([0x1]);
        } });
    }, qnw542['down'] = function (d0yog, im9vr, c9tm, c_1f8p) {
      im9vr === void 0x0 && (im9vr = 'ascill'), c_1f8p === void 0x0 && (c_1f8p = '');var tr$il9 = qnw542['getFileNativePath'](c_1f8p),
          ueqk2 = qnw542['wxdown']({ 'url': d0yog, 'filePath': tr$il9, 'success': function (_apf8) {
          if (_apf8['statusCode'] === 0xc8) qnw542['readFile'](_apf8['filePath'], im9vr, c9tm, c_1f8p);
        }, 'fail': function (n4w5x) {
          c9tm != null && c9tm['runWith']([0x1, n4w5x]);
        } });ueqk2['onProgressUpdate'](function (skebu7) {
        c9tm != null && c9tm['runWith']([0x2, skebu7['progress']]);
      });
    }, qnw542['readFile'] = function (zlti, c1p8f_, e63bs7, j6a3) {
      c1p8f_ === void 0x0 && (c1p8f_ = 'ascill'), j6a3 === void 0x0 && (j6a3 = ''), qnw542['fs']['readFile']({ 'filePath': zlti, 'encoding': c1p8f_, 'success': function (be637) {
          if (zlti['indexOf']('http://') != -0x1 || zlti['indexOf']('https://') != -0x1) qnw542['onFileUpdate'](zlti, j6a3);e63bs7 != null && e63bs7['runWith']([0x0, be637]);
        }, 'fail': function (cp_18) {
          if (cp_18) e63bs7 != null && e63bs7['runWith']([0x1, cp_18]);
        } });
    }, qnw542['downImg'] = function (mvcp, vf1cpm, r$it) {
      r$it === void 0x0 && (r$it = '');var eb376s = qnw542['wxdown']({ 'url': mvcp, 'success': function (gzli$0) {
          gzli$0['statusCode'] === 0xc8 && qnw542['copyFile'](gzli$0['tempFilePath'], r$it, vf1cpm);
        }, 'fail': function (i$zl0) {
          vf1cpm != null && vf1cpm['runWith']([0x1, i$zl0]);
        } });
    }, qnw542['copyFile'] = function (w5q2, w2nq45, zlig$) {
      var rl$9ti = w5q2['split']('/'),
          zy0gd = rl$9ti[rl$9ti['length'] - 0x1],
          v1t9m = w2nq45['split']('?')[0x0],
          wnq25 = qnw542['getFileInfo'](w2nq45),
          $tvi9 = qnw542['getFileNativePath'](zy0gd);qnw542['fs']['copyFile']({ 'srcPath': w5q2, 'destPath': $tvi9, 'success': function (w52nh) {
          if (!wnq25) qnw542['onSaveFile'](w2nq45, zy0gd), zlig$ != null && zlig$['runWith']([0x0]);else {
            if (wnq25['readyUrl'] != w2nq45) qnw542['remove'](zy0gd, w2nq45, zlig$);
          }
        }, 'fail': function (z0o$l) {
          zlig$ != null && zlig$['runWith']([0x1, z0o$l]);
        } });
    }, qnw542['getFileNativePath'] = function (rt9$l) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rt9$l;
    }, qnw542['remove'] = function (qsk2nu, vrtm19, p8j_c) {
      vrtm19 === void 0x0 && (vrtm19 = '');var eab7 = qnw542['getFileInfo'](vrtm19),
          j863_a = qnw542['getFileNativePath'](eab7['md5']);wn45['loader']['clearRes'](eab7['readyUrl']), qnw542['fs']['unlink']({ 'filePath': j863_a, 'success': function ($9ltr) {
          if (vrtm19 != '') qnw542['onSaveFile'](vrtm19, qsk2nu);p8j_c != null && p8j_c['runWith']([0x0]);
        }, 'fail': function (p_jfc) {} });
    }, qnw542['onSaveFile'] = function (cv1p9m, p_fmc1) {
      var kbesuq = cv1p9m['split']('?')[0x0];qnw542['filesListObj'][kbesuq] = { 'md5': p_fmc1, 'readyUrl': cv1p9m }, qnw542['fs']['writeFile']({ 'filePath': qnw542['fileNativeDir'] + '/' + qnw542['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qnw542['filesListObj']), 'success': function (mf_p) {
          console['log']('写入测试测试成功：', mf_p);
        }, 'fail': function (rt$) {
          console['log']('写入测试测试失败：', rt$);
        } });
    }, qnw542['existDir'] = function (l0zyg, i9tvmr) {
      qnw542['fs']['mkdir']({ 'dirPath': l0zyg, 'success': function (vcp19) {
          i9tvmr != null && i9tvmr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (bqsk) {
          if (bqsk['errMsg']['indexOf']('file already exists') != -0x1) qnw542['readSync'](qnw542['fileListName'], 'utf8', i9tvmr);else i9tvmr != null && i9tvmr['runWith']([0x1, bqsk]);
        } });
    }, qnw542['readSync'] = function (wqn25, w5kqn2, rl9$, k2seu) {
      w5kqn2 === void 0x0 && (w5kqn2 = 'ascill'), k2seu === void 0x0 && (k2seu = '');var oygl0 = qnw542['getFileNativePath'](wqn25),
          a8j63_;try {
        a8j63_ = qnw542['fs']['readFileSync'](oygl0), rl9$ != null && rl9$['runWith']([0x0, { 'data': a8j63_ }]);
      } catch (tri$9l) {
        rl9$ != null && rl9$['runWith']([0x1]);
      }
    }, qnw542['readCache'] = function () {}, qnw542['writeCache'] = function (c8p_fj) {
      var rvm9i = readyUrl['split']('?')[0x0];qnw542['filesListObj'][rvm9i] = { 'md5': md5Name, 'readyUrl': readyUrl }, qnw542['fs']['writeFile']({ 'filePath': qnw542['fileNativeDir'] + '/' + qnw542['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qnw542['filesListObj']), 'success': function (mrtv9i) {}, 'fail': function (wkq52n) {} });
    }, qnw542['setNativeFileDir'] = function (rmv19) {
      qnw542['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rmv19;
    }, qnw542['filesListObj'] = {}, qnw542['fileNativeDir'] = null, qnw542['fileListName'] = 'layaairfiles.txt', qnw542['ziyuFileData'] = {}, qksu2(qnw542, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qnw542;
  }(og0d),
      equkbs = function (uskbqe) {
    function itzr$l() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], itzr$l['__super']['call'](this), this['_sound'] = itzr$l['_createSound']();
    }eb7a6(itzr$l, 'laya.wx.mini.MiniSound', uskbqe);var _c1mf = itzr$l['prototype'];return _c1mf['load'] = function (gy0l) {
      var c9pvm1 = this;gy0l = m91tvc['formatURL'](gy0l), this['url'] = gy0l;if (itzr$l['_audioCache'][gy0l]) {
        this['event']('complete');return;
      }function ri$vt9() {
        if (itzr$l['_null'] != undefined) c9pvm1['_sound']['onCanplay'](itzr$l['_null']), c9pvm1['_sound']['onError'](itzr$l['_null']);else try {
          c9pvm1['_sound']['onCanplay'](null), c9pvm1['_sound']['onError'](null), itzr$l['_null'] = null;
        } catch (vfmp1c) {
          console['warn']('[wxmini] _clearSound:' + vfmp1c), c9pvm1['_sound']['onCanplay'](f6_ja8), c9pvm1['_sound']['onError'](f6_ja8), itzr$l['_null'] = f6_ja8;
        }
      }function q2esu() {
        ri$vt9(), j_a863['loaded'] = !![], j_a863['event']('complete'), itzr$l['_audioCache'][j_a863['url']] = j_a863;
      }function g0oz(w24) {
        console['error']('errCode=' + w24['errCode'] + '  errMsg=' + w24['errMsg']), ri$vt9(), j_a863['event']('error');
      }function f6_ja8() {}this['_sound']['onCanplay'](q2esu), this['_sound']['onError'](g0oz), this['_sound']['src'] = gy0l;var j_a863 = this;
    }, _c1mf['play'] = function (cpj8_, ab367e) {
      cpj8_ === void 0x0 && (cpj8_ = 0x0), ab367e === void 0x0 && (ab367e = 0x0);var $ir9t;if (this['url'] == af_6['_tMusic']) {
        if (!itzr$l['_musicAudio']) itzr$l['_musicAudio'] = itzr$l['_createSound']();$ir9t = itzr$l['_musicAudio'];
      } else $ir9t = itzr$l['_createSound']();$ir9t['src'] = this['url'];var vmfcp = new a387j($ir9t);return vmfcp['url'] = this['url'], vmfcp['loops'] = ab367e, vmfcp['startTime'] = cpj8_, vmfcp['play'](), af_6['addChannel'](vmfcp), vmfcp;
    }, _c1mf['dispose'] = function () {
      var tcv19 = itzr$l['_audioCache'][this['url']];tcv19 && (tcv19['src'] = '', delete itzr$l['_audioCache'][this['url']]);
    }, nw5h4x(0x0, _c1mf, 'duration', function () {
      return this['_sound']['duration'];
    }), itzr$l['_createSound'] = function () {
      return itzr$l['_id']++, m9rv['window']['wx']['createInnerAudioContext']();
    }, itzr$l['_musicAudio'] = null, itzr$l['_id'] = 0x0, itzr$l['_audioCache'] = {}, itzr$l['_null'] = undefined, itzr$l;
  }(og0d),
      a387j = function (qskub) {
    function _8f1p(eu37b) {
      this['_audio'] = null, this['_onEnd'] = null, _8f1p['__super']['call'](this), this['_audio'] = eu37b, this['_onEnd'] = r0il$['bind'](this['__onEnd'], this), eu37b['onEnded'](this['_onEnd']);
    }eb7a6(_8f1p, 'laya.wx.mini.MiniSoundChannel', qskub);var sbue37 = _8f1p['prototype'];return sbue37['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wn45['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sbue37['__onNull'] = function () {}, sbue37['play'] = function () {
      this['isStopped'] = ![], af_6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sbue37['stop'] = function () {
      this['isStopped'] = !![], af_6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_8f1p['_null'] != undefined) this['_audio']['onEnded'](_8f1p['_null']);else try {
        this['_audio']['onEnded'](null), _8f1p['_null'] = null;
      } catch (h54wn2) {
        console['warn']('[wxmini] stop:' + h54wn2), this['_audio']['onEnded'](r0il$['bind'](this['__onNull'], this)), _8f1p['_null'] = r0il$['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sbue37['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sbue37['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], af_6['addChannel'](this), this['_audio']['play']();
    }, nw5h4x(0x0, sbue37, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), nw5h4x(0x0, sbue37, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), nw5h4x(0x0, sbue37, 'volume', function () {
      return 0x1;
    }, function (t9ri) {}), _8f1p['_null'] = undefined, _8f1p;
  }(q2skeu);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _f8j6a in Laya) {
    var uqe2 = Laya[_f8j6a];uqe2 && uqe2['__isclass'] && (exports[_f8j6a] = uqe2);
  }
});