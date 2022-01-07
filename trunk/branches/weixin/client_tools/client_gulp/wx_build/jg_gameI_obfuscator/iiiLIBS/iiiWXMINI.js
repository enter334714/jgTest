var Q = wx.$I;
(function (window, document, $ritv) {
  var k2qwn5 = $ritv['un'],
      cp1_f8 = $ritv['uns'],
      un52q = $ritv['static'],
      fja_ = $ritv['class'],
      fcp_ = $ritv['getset'],
      ri$0 = $ritv['__newvec'],
      sueqk = laya['utils']['Browser'],
      $gozl0 = laya['events']['Event'],
      esubkq = laya['events']['EventDispatcher'],
      mf1cv = laya['resource']['HTMLImage'],
      h45w2 = laya['utils']['Handler'],
      qkn5u = laya['display']['Input'],
      pcfmv1 = laya['net']['Loader'],
      nksq2u = laya['maths']['Matrix'],
      mtr9 = laya['renders']['Render'],
      p_18f = laya['utils']['RunDriver'],
      ueqs = laya['media']['Sound'],
      igz0$l = laya['media']['SoundChannel'],
      pm1fv = laya['media']['SoundManager'],
      ukqbe = laya['display']['Stage'],
      wnk52q = laya['net']['URL'],
      mpv9 = laya['utils']['Utils'],
      fpja = function () {
    function vm91tc() {}return fja_(vm91tc, 'laya.wx.mini.MiniAdpter'), vm91tc['getJson'] = function (ub7ek) {
      return JSON['parse'](ub7ek);
    }, vm91tc['init'] = function (vtc, v1pm9c) {
      vtc === void 0x0 && (vtc = ![]), v1pm9c === void 0x0 && (v1pm9c = ![]);if (vm91tc['_inited']) return;vm91tc['window'] = window;if (vm91tc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vm91tc['_inited'] = !![], vm91tc['isZiYu'] = v1pm9c, vm91tc['isPosMsgYu'] = vtc, vm91tc['EnvConfig'] = {}, !vm91tc['isZiYu'] && (qskub['setNativeFileDir']('/layaairGame'), qskub['existDir'](qskub['fileNativeDir'], h45w2['create'](vm91tc, vm91tc['onMkdirCallBack']))), vm91tc['window']['focus'] = function () {}, $ritv['getUrlPath'] = function () {}, vm91tc['window']['logtime'] = function (a8fj) {}, vm91tc['window']['alertTimeLog'] = function (il$g0z) {}, vm91tc['window']['resetShareInfo'] = function () {}, vm91tc['window']['CanvasRenderingContext2D'] = function () {}, vm91tc['window']['CanvasRenderingContext2D']['prototype'] = vm91tc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vm91tc['window']['document']['body']['appendChild'] = function () {}, vm91tc['EnvConfig']['pixelRatioInt'] = 0x0, p_18f['getPixelRatio'] = vm91tc['pixelRatio'], vm91tc['_preCreateElement'] = sueqk['createElement'], sueqk['createElement'] = vm91tc['createElement'], p_18f['createShaderCondition'] = vm91tc['createShaderCondition'], mpv9['parseXMLFromString'] = vm91tc['parseXMLFromString'], qkn5u['_createInputElement'] = f1pcm['_createInputElement'], vm91tc['EnvConfig']['load'] = pcfmv1['prototype']['load'], pcfmv1['prototype']['load'] = zlg$0['prototype']['load'], vm91tc['isZiYu'] && vtc && wx['onMessage'](function (l$iztr) {
        l$iztr['isLoad'] && (qskub['ziyuFileData'][l$iztr['url']] = l$iztr['data']);
      });
    }, vm91tc['onMkdirCallBack'] = function (li$9t, h24n) {
      if (!li$9t) qskub['filesListObj'] = JSON['parse'](h24n['data']);
    }, vm91tc['pixelRatio'] = function () {
      if (!vm91tc['EnvConfig']['pixelRatioInt']) try {
        var wq52nk = wx['getSystemInfoSync']();return vm91tc['EnvConfig']['pixelRatioInt'] = wq52nk['pixelRatio'], wq52nk = wq52nk, wq52nk['pixelRatio'];
      } catch (zigl$0) {}return vm91tc['EnvConfig']['pixelRatioInt'];
    }, vm91tc['createElement'] = function (dozy0g) {
      if (dozy0g == 'canvas') {
        var it$v9;return vm91tc['idx'] == 0x1 ? vm91tc['isZiYu'] ? (it$v9 = sharedCanvas, it$v9['style'] = {}) : it$v9 = window['canvas'] : it$v9 = window['wx']['createCanvas'](), vm91tc['idx']++, it$v9;
      } else {
        if (dozy0g == 'textarea' || dozy0g == 'input') return vm91tc['onCreateInput'](dozy0g);else {
          if (dozy0g == 'div') {
            var a_6fj = vm91tc['_preCreateElement'](dozy0g);return a_6fj['contains'] = function (pfmv1c) {
              return null;
            }, a_6fj['removeChild'] = function (l$g0zi) {}, a_6fj;
          } else return vm91tc['_preCreateElement'](dozy0g);
        }
      }
    }, vm91tc['onCreateInput'] = function (p1_fmc) {
      var olyz0g = vm91tc['_preCreateElement'](p1_fmc);return olyz0g['focus'] = f1pcm['wxinputFocus'], olyz0g['blur'] = f1pcm['wxinputblur'], olyz0g['style'] = {}, olyz0g['value'] = 0x0, olyz0g['parentElement'] = {}, olyz0g['placeholder'] = {}, olyz0g['type'] = {}, olyz0g['setColor'] = function (pf_18) {}, olyz0g['setType'] = function (h2nw5) {}, olyz0g['setFontFace'] = function (e67a) {}, olyz0g['addEventListener'] = function (nqu52) {}, olyz0g['contains'] = function (r19mt) {
        return null;
      }, olyz0g['removeChild'] = function (qeksb) {}, olyz0g;
    }, vm91tc['createShaderCondition'] = function (f_18c) {
      var f8paj = this,
          tvr$i9 = function () {
        var rtmi9v = f_18c;return f8paj[f_18c['replace']('this.', '')];
      };return tvr$i9;
    }, vm91tc['EnvConfig'] = null, vm91tc['window'] = null, vm91tc['_preCreateElement'] = null, vm91tc['_inited'] = ![], vm91tc['wxRequest'] = null, vm91tc['systemInfo'] = null, vm91tc['version'] = '0.0.1', vm91tc['isZiYu'] = ![], vm91tc['isPosMsgYu'] = ![], vm91tc['parseXMLFromString'] = function (_p) {
      var l$tzri, lzg0oy;_p = _p['replace'](/>\s+</g, '><');try {
        l$tzri = new window['Parser']['DOMParser']()['parseFromString'](_p, 'text/xml');
      } catch (a6f_j) {
        throw '需要引入xml解析库文件';
      }return l$tzri;
    }, vm91tc['idx'] = 0x1, vm91tc;
  }(),
      z0r$ = function () {
    function gi0$() {}fja_(gi0$, 'laya.wx.mini.MiniImage');var p8c1 = gi0$['prototype'];return p8c1['_loadImage'] = function (fcp_m) {
      var a637j = this,
          o$l = ![];fcp_m['indexOf']('layaNativeDir/') == -0x1 && (o$l = !![], fcp_m = wnk52q['formatURL'](fcp_m));if (!qskub['getFileInfo'](fcp_m)) {
        if (fcp_m['indexOf']('http://') != -0x1 || fcp_m['indexOf']('https://') != -0x1) qskub['downImg'](fcp_m, new h45w2(gi0$, gi0$['onDownImgCallBack'], [fcp_m, a637j]), fcp_m);else gi0$['onCreateImage'](fcp_m, a637j, !![]);
      } else gi0$['onCreateImage'](fcp_m, a637j, !o$l);
    }, gi0$['onDownImgCallBack'] = function (vitr9, cpm1f_, h2n45w) {
      if (!h2n45w) gi0$['onCreateImage'](vitr9, cpm1f_);else cpm1f_['onError'](null);
    }, gi0$['onCreateImage'] = function (bes7u, r$zilt, mvct1) {
      mvct1 === void 0x0 && (mvct1 = ![]);var eqb;if (!mvct1) {
        var p9vcm1 = qskub['getFileInfo'](bes7u),
            q425nw = p9vcm1['md5'];eqb = qskub['getFileNativePath'](q425nw);
      } else eqb = bes7u;if (r$zilt['imgCache'] == null) r$zilt['imgCache'] = {};var f_81c;function rt9vm1() {
        f_81c['onload'] = null, f_81c['onerror'] = null, delete r$zilt['imgCache'][bes7u];
      };var pfc_m1 = function () {
        rt9vm1(), r$zilt['onLoaded'](f_81c);
      },
          p1c_f8 = function () {
        rt9vm1(), r$zilt['event']('error', 'Load image failed');
      };r$zilt['_type'] == 'nativeimage' ? (f_81c = new sueqk['window']['Image'](), f_81c['crossOrigin'] = '', f_81c['onload'] = pfc_m1, f_81c['onerror'] = p1c_f8, f_81c['src'] = eqb, r$zilt['imgCache'][bes7u] = f_81c) : new mf1cv['create'](eqb, { 'onload': pfc_m1, 'onerror': p1c_f8, 'onCreate': function (i$zlt) {
          f_81c = i$zlt, r$zilt['imgCache'][bes7u] = i$zlt;
        } });
    }, gi0$;
  }(),
      f1pcm = function () {
    function a3b67j() {}return fja_(a3b67j, 'laya.wx.mini.MiniInput'), a3b67j['_createInputElement'] = function () {
      qkn5u['_initInput'](qkn5u['area'] = sueqk['createElement']('textarea')), qkn5u['_initInput'](qkn5u['input'] = sueqk['createElement']('input')), qkn5u['inputContainer'] = sueqk['createElement']('div'), qkn5u['inputContainer']['style']['position'] = 'absolute', qkn5u['inputContainer']['style']['zIndex'] = 0x186a0, sueqk['container']['appendChild'](qkn5u['inputContainer']), qkn5u['inputContainer']['setPos'] = function (tv1c9m, q2ukse) {
        qkn5u['inputContainer']['style']['left'] = tv1c9m + 'px', qkn5u['inputContainer']['style']['top'] = q2ukse + 'px';
      }, $ritv['stage']['on']('resize', null, a3b67j['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pvmcf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pm1fv['_soundClass'] = gz0doy, pm1fv['_musicClass'] = gz0doy;
    }, a3b67j['_onStageResize'] = function () {
      var t91cvm = $ritv['stage']['_canvasTransform']['identity']();t91cvm['scale'](sueqk['width'] / mtr9['canvas']['width'] / p_18f['getPixelRatio'](), sueqk['height'] / mtr9['canvas']['height'] / p_18f['getPixelRatio']());
    }, a3b67j['wxinputFocus'] = function (pmcfv) {
      var m19pcv = qkn5u['inputElement']['target'];if (m19pcv && !m19pcv['editable']) return;fpja['window']['wx']['offKeyboardConfirm'](), fpja['window']['wx']['offKeyboardInput'](), fpja['window']['wx']['showKeyboard']({ 'defaultValue': m19pcv['text'], 'maxLength': m19pcv['maxChars'], 'multiple': m19pcv['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ritz$l) {}, 'fail': function (c91pm) {} }), fpja['window']['wx']['onKeyboardConfirm'](function (p1cm_) {
        var jfa68 = p1cm_ ? p1cm_['value'] : '';m19pcv['text'] = jfa68, m19pcv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fpja['window']['wx']['onKeyboardInput'](function (ae367b) {
        var fcpj8 = ae367b ? ae367b['value'] : '';if (!m19pcv['multiline']) {
          if (fcpj8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }m19pcv['text'] = fcpj8, m19pcv['event']('input');
      });
    }, a3b67j['inputEnter'] = function () {
      qkn5u['inputElement']['target']['focus'] = ![];
    }, a3b67j['wxinputblur'] = function () {
      a3b67j['hideKeyboard']();
    }, a3b67j['hideKeyboard'] = function () {
      fpja['window']['wx']['offKeyboardConfirm'](), fpja['window']['wx']['offKeyboardInput'](), fpja['window']['wx']['hideKeyboard']({ 'success': function (p_j8fa) {
          console['log']('隐藏键盘');
        }, 'fail': function (_386a) {
          console['log']('隐藏键盘出错:' + (_386a ? _386a['errMsg'] : ''));
        } });
    }, a3b67j;
  }(),
      zlg$0 = function () {
    function glyo() {}fja_(glyo, 'laya.wx.mini.MiniLoader');var ubeks = glyo['prototype'];return ubeks['load'] = function (v9p1cm, nw2, c8_1p, qk5n2u, gil) {
      c8_1p === void 0x0 && (c8_1p = !![]), gil === void 0x0 && (gil = ![]);var be7u3s = this;be7u3s['_url'] = v9p1cm;if (v9p1cm['indexOf']('data:image') === 0x0) be7u3s['_type'] = nw2 = 'image';else be7u3s['_type'] = nw2 || (nw2 = be7u3s['getTypeFromUrl'](v9p1cm));be7u3s['_cache'] = c8_1p, be7u3s['_data'] = null;var wkqn2 = 'ascii';if (v9p1cm['indexOf']('.fnt') != -0x1) wkqn2 = 'utf8';else nw2 == 'arraybuffer' && (wkqn2 = '');;var zilg$0 = mpv9['getFileExtension'](v9p1cm);if (glyo['_fileTypeArr']['indexOf'](zilg$0) != -0x1) fpja['EnvConfig']['load']['call'](this, v9p1cm, nw2, c8_1p, qk5n2u, gil);else {
        if (!qskub['getFileInfo'](v9p1cm)) {
          if (v9p1cm['indexOf']('layaNativeDir/') != -0x1) {
            if (fpja['isZiYu']) {
              var o0zgl = qskub['ziyuFileData'][v9p1cm];be7u3s['onLoaded'](o0zgl);return;
            } else {
              cosnole['log']('read read'), qskub['read'](v9p1cm, wkqn2, new h45w2(glyo, glyo['onReadNativeCallBack'], [wkqn2, v9p1cm, nw2, c8_1p, qk5n2u, gil, be7u3s]));return;
            }
          }if (wnk52q['rootPath'] == '') var zilt$r = v9p1cm;else zilt$r = v9p1cm['split'](wnk52q['rootPath'])[0x0];v9p1cm['indexOf']('http://') != -0x1 || v9p1cm['indexOf']('https://') != -0x1 ? fpja['EnvConfig']['load']['call'](be7u3s, v9p1cm, nw2, c8_1p, qk5n2u, gil) : qskub['readFile'](zilt$r, wkqn2, new h45w2(glyo, glyo['onReadNativeCallBack'], [wkqn2, v9p1cm, nw2, c8_1p, qk5n2u, gil, be7u3s]), v9p1cm);
        } else fpja['EnvConfig']['load']['call'](this, v9p1cm, nw2, c8_1p, qk5n2u, gil);
      }
    }, ubeks['resMgrLoad'] = function (_j3a6, vti9$r, knsqu2, wnq52k, nkq25w, a38_j, queskb) {
      knsqu2 === void 0x0 && (knsqu2 = 0x0), wnq52k === void 0x0 && (wnq52k = ![]), nkq25w === void 0x0 && (nkq25w = ![]), a38_j === void 0x0 && (a38_j = 0x0), queskb === void 0x0 && (queskb = 0x3), _j3a6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _j3a6), fpja['EnvConfig']['resMgrLoad'](_j3a6, (n2q54w, zol0, ukeq) => {
        glyo['prototype']['resMgrLoadCallBack'](n2q54w, zol0, ukeq, vti9$r);
      }, knsqu2, wnq52k, nkq25w, a38_j, queskb);
    }, ubeks['resMgrLoadCallBack'] = function (k7ubes, tlr$9i, rv$ti, e37s6) {
      console['log']('buff:::', k7ubes, rv$ti, qskub['fileNativeDir'] + '///' + qskub['fileListName']), e37s6(k7ubes, tlr$9i, rv$ti);
    }, ubeks['clearRes'] = function (jpcf, ea637b) {
      ea637b === void 0x0 && (ea637b = ![]);var $r9tli = this;$r9tli['clearRes'](jpcf, ea637b);var af8j_6 = qskub['getFileInfo'](jpcf);if (af8j_6 && (jpcf['indexOf']('http://') != -0x1 || jpcf['indexOf']('https://') != -0x1)) {
        var e7b6s3 = af8j_6['md5'],
            z0gdyo = qskub['getFileNativePath'](e7b6s3);qskub['remove'](z0gdyo);
      }
    }, glyo['onReadNativeCallBack'] = function (b3ja76, $vir, es3, buskq, esuk2, j68a, mv91ct, m_fcp, fpc8j_) {
      buskq === void 0x0 && (buskq = !![]), j68a === void 0x0 && (j68a = ![]), m_fcp === void 0x0 && (m_fcp = 0x0);if (!m_fcp) {
        var fp8ja_;if (es3 == 'json' || es3 == 'atlas') fp8ja_ = fpja['getJson'](fpc8j_['data']);else es3 == 'xml' ? fp8ja_ = mpv9['parseXMLFromString'](fpc8j_['data']) : fp8ja_ = fpc8j_['data'];mv91ct['onLoaded'](fp8ja_), !fpja['isZiYu'] && fpja['isPosMsgYu'] && es3 != 'arraybuffer' && wx['postMessage']({ 'url': $vir, 'data': fp8ja_, 'isLoad': !![] });
      } else m_fcp == 0x1 && fpja['EnvConfig']['load']['call'](mv91ct, $vir, es3, buskq, esuk2, j68a);
    }, un52q(glyo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), glyo;
  }(),
      qskub = function ($t9vi) {
    function rvtmi9() {
      rvtmi9['__super']['call'](this);;
    }return fja_(rvtmi9, 'laya.wx.mini.MiniFileMgr', $t9vi), rvtmi9['isLoadFile'] = function (yzodg) {
      return rvtmi9['_fileTypeArr']['indexOf'](yzodg) != -0x1 ? !![] : ![];
    }, rvtmi9['getFileInfo'] = function (v9c1tm) {
      var cf1_p8 = v9c1tm['split']('?')[0x0],
          keu7sb = rvtmi9['filesListObj'][cf1_p8];if (keu7sb == null) return null;else return keu7sb;return null;
    }, rvtmi9['onFileUpdate'] = function (r9tvm1, gyzd0) {
      var a87j6 = r9tvm1['split']('/'),
          i0 = a87j6[a87j6['length'] - 0x1],
          itrmv = rvtmi9['getFileInfo'](gyzd0);if (itrmv == null) rvtmi9['onSaveFile'](gyzd0, i0);else {
        if (itrmv['readyUrl'] != gyzd0) rvtmi9['remove'](i0, gyzd0);
      }
    }, rvtmi9['exits'] = function ($ritl, j8_f6) {
      var j8367 = rvtmi9['getFileNativePath']($ritl);rvtmi9['fs']['getFileInfo']({ 'filePath': j8367, 'success': function (k2qnu5) {
          j8_f6 != null && j8_f6['runWith']([0x0, k2qnu5]);
        }, 'fail': function (ub37s) {
          j8_f6 != null && j8_f6['runWith']([0x1, ub37s]);
        } });
    }, rvtmi9['read'] = function (j_af6, eb73us, ygozl, ba763e) {
      eb73us === void 0x0 && (eb73us = 'ascill'), ba763e === void 0x0 && (ba763e = '');var ztlri;ba763e != '' ? ztlri = rvtmi9['getFileNativePath'](j_af6) : ztlri = j_af6, rvtmi9['fs']['readFile']({ 'filePath': ztlri, 'encoding': eb73us, 'success': function (n4whx5) {
          ygozl != null && ygozl['runWith']([0x0, n4whx5]);
        }, 'fail': function (eksqbu) {
          if (eksqbu && ba763e != '') rvtmi9['down'](ba763e, eb73us, ygozl, ba763e);else ygozl != null && ygozl['runWith']([0x1]);
        } });
    }, rvtmi9['readNativeFile'] = function (kbsue, rmi9t) {
      rvtmi9['fs']['readFile']({ 'filePath': kbsue, 'encoding': '', 'success': function (b6e3a) {
          rmi9t != null && rmi9t['runWith']([0x0]);
        }, 'fail': function (b367) {
          rmi9t != null && rmi9t['runWith']([0x1]);
        } });
    }, rvtmi9['down'] = function (ebksu7, uqsnk, j_6a, ukn2qs) {
      uqsnk === void 0x0 && (uqsnk = 'ascill'), ukn2qs === void 0x0 && (ukn2qs = '');var fj8a6 = rvtmi9['getFileNativePath'](ukn2qs),
          mpvc19 = rvtmi9['wxdown']({ 'url': ebksu7, 'filePath': fj8a6, 'success': function (oy0l) {
          if (oy0l['statusCode'] === 0xc8) rvtmi9['readFile'](oy0l['filePath'], uqsnk, j_6a, ukn2qs);
        }, 'fail': function (es3u7) {
          j_6a != null && j_6a['runWith']([0x1, es3u7]);
        } });mpvc19['onProgressUpdate'](function (l0ygz) {
        j_6a != null && j_6a['runWith']([0x2, l0ygz['progress']]);
      });
    }, rvtmi9['readFile'] = function (usqbke, ri9mtv, mpf_, _8paj) {
      ri9mtv === void 0x0 && (ri9mtv = 'ascill'), _8paj === void 0x0 && (_8paj = ''), rvtmi9['fs']['readFile']({ 'filePath': usqbke, 'encoding': ri9mtv, 'success': function (t1vc9m) {
          if (usqbke['indexOf']('http://') != -0x1 || usqbke['indexOf']('https://') != -0x1) rvtmi9['onFileUpdate'](usqbke, _8paj);mpf_ != null && mpf_['runWith']([0x0, t1vc9m]);
        }, 'fail': function (mvc1t9) {
          if (mvc1t9) mpf_ != null && mpf_['runWith']([0x1, mvc1t9]);
        } });
    }, rvtmi9['downImg'] = function (lzirt, n4w5x, a38j_) {
      a38j_ === void 0x0 && (a38j_ = '');var ap_f8j = rvtmi9['wxdown']({ 'url': lzirt, 'success': function (itv9rm) {
          itv9rm['statusCode'] === 0xc8 && rvtmi9['copyFile'](itv9rm['tempFilePath'], a38j_, n4w5x);
        }, 'fail': function (v$ir9) {
          n4w5x != null && n4w5x['runWith']([0x1, v$ir9]);
        } });
    }, rvtmi9['copyFile'] = function (uesq, skeq2, it$z) {
      var sqnku = uesq['split']('/'),
          usbeq = sqnku[sqnku['length'] - 0x1],
          n42q5 = skeq2['split']('?')[0x0],
          us3e7 = rvtmi9['getFileInfo'](skeq2),
          _jfp8a = rvtmi9['getFileNativePath'](usbeq);rvtmi9['fs']['copyFile']({ 'srcPath': uesq, 'destPath': _jfp8a, 'success': function (cp9) {
          if (!us3e7) rvtmi9['onSaveFile'](skeq2, usbeq), it$z != null && it$z['runWith']([0x0]);else {
            if (us3e7['readyUrl'] != skeq2) rvtmi9['remove'](usbeq, skeq2, it$z);
          }
        }, 'fail': function (_8jfcp) {
          it$z != null && it$z['runWith']([0x1, _8jfcp]);
        } });
    }, rvtmi9['getFileNativePath'] = function (uks7eb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + uks7eb;
    }, rvtmi9['remove'] = function (e2kqsu, hn52w, pfj8_a) {
      hn52w === void 0x0 && (hn52w = '');var a6f8j = rvtmi9['getFileInfo'](hn52w),
          kesub = rvtmi9['getFileNativePath'](a6f8j['md5']);$ritv['loader']['clearRes'](a6f8j['readyUrl']), rvtmi9['fs']['unlink']({ 'filePath': kesub, 'success': function (p_jc8f) {
          if (hn52w != '') rvtmi9['onSaveFile'](hn52w, e2kqsu);pfj8_a != null && pfj8_a['runWith']([0x0]);
        }, 'fail': function (a78) {} });
    }, rvtmi9['onSaveFile'] = function (trv91m, bu7ske) {
      var $9ltri = trv91m['split']('?')[0x0];rvtmi9['filesListObj'][$9ltri] = { 'md5': bu7ske, 'readyUrl': trv91m }, rvtmi9['fs']['writeFile']({ 'filePath': rvtmi9['fileNativeDir'] + '/' + rvtmi9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rvtmi9['filesListObj']), 'success': function (bskeu) {
          console['log']('写入测试测试成功：', bskeu);
        }, 'fail': function (kuqns2) {
          console['log']('写入测试测试失败：', kuqns2);
        } });
    }, rvtmi9['existDir'] = function (b67, u7b3se) {
      rvtmi9['fs']['mkdir']({ 'dirPath': b67, 'success': function ($ogzl0) {
          u7b3se != null && u7b3se['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (cp1) {
          if (cp1['errMsg']['indexOf']('file already exists') != -0x1) rvtmi9['readSync'](rvtmi9['fileListName'], 'utf8', u7b3se);else u7b3se != null && u7b3se['runWith']([0x1, cp1]);
        } });
    }, rvtmi9['readSync'] = function (k5qwn, l0zy, fap_j8, _jpc) {
      l0zy === void 0x0 && (l0zy = 'ascill'), _jpc === void 0x0 && (_jpc = '');var sqn2u = rvtmi9['getFileNativePath'](k5qwn),
          rit9l$;try {
        rit9l$ = rvtmi9['fs']['readFileSync'](sqn2u), fap_j8 != null && fap_j8['runWith']([0x0, { 'data': rit9l$ }]);
      } catch (_pjfc) {
        fap_j8 != null && fap_j8['runWith']([0x1]);
      }
    }, rvtmi9['readCache'] = function () {}, rvtmi9['writeCache'] = function (t$ir) {
      var kn2q5 = readyUrl['split']('?')[0x0];rvtmi9['filesListObj'][kn2q5] = { 'md5': md5Name, 'readyUrl': readyUrl }, rvtmi9['fs']['writeFile']({ 'filePath': rvtmi9['fileNativeDir'] + '/' + rvtmi9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rvtmi9['filesListObj']), 'success': function (t9$vri) {}, 'fail': function (lzo0$) {} });
    }, rvtmi9['setNativeFileDir'] = function (tl$riz) {
      rvtmi9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tl$riz;
    }, rvtmi9['filesListObj'] = {}, rvtmi9['fileNativeDir'] = null, rvtmi9['fileListName'] = 'layaairfiles.txt', rvtmi9['ziyuFileData'] = {}, un52q(rvtmi9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rvtmi9;
  }(esubkq),
      gz0doy = function (j68f_a) {
    function bu7s() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], bu7s['__super']['call'](this), this['_sound'] = bu7s['_createSound']();
    }fja_(bu7s, 'laya.wx.mini.MiniSound', j68f_a);var _jc8fp = bu7s['prototype'];return _jc8fp['load'] = function (_faj86) {
      var ek2uqs = this;_faj86 = wnk52q['formatURL'](_faj86), this['url'] = _faj86;if (bu7s['_audioCache'][_faj86]) {
        this['event']('complete');return;
      }function n2q5u() {
        if (bu7s['_null'] != undefined) ek2uqs['_sound']['onCanplay'](bu7s['_null']), ek2uqs['_sound']['onError'](bu7s['_null']);else try {
          ek2uqs['_sound']['onCanplay'](null), ek2uqs['_sound']['onError'](null), bu7s['_null'] = null;
        } catch (pv91c) {
          console['warn']('[wxmini] _clearSound:' + pv91c), ek2uqs['_sound']['onCanplay'](ebksqu), ek2uqs['_sound']['onError'](ebksqu), bu7s['_null'] = ebksqu;
        }
      }function k2se() {
        n2q5u(), be37['loaded'] = !![], be37['event']('complete'), bu7s['_audioCache'][be37['url']] = be37;
      }function j8_f(lgi$0z) {
        console['error']('errCode=' + lgi$0z['errCode'] + '  errMsg=' + lgi$0z['errMsg']), n2q5u(), be37['event']('error');
      }function ebksqu() {}this['_sound']['onCanplay'](k2se), this['_sound']['onError'](j8_f), this['_sound']['src'] = _faj86;var be37 = this;
    }, _jc8fp['play'] = function (gozdy0, n54qw) {
      gozdy0 === void 0x0 && (gozdy0 = 0x0), n54qw === void 0x0 && (n54qw = 0x0);var kbeu;if (this['url'] == pm1fv['_tMusic']) {
        if (!bu7s['_musicAudio']) bu7s['_musicAudio'] = bu7s['_createSound']();kbeu = bu7s['_musicAudio'];
      } else kbeu = bu7s['_createSound']();kbeu['src'] = this['url'];var j68a73 = new c9t1vm(kbeu);return j68a73['url'] = this['url'], j68a73['loops'] = n54qw, j68a73['startTime'] = gozdy0, j68a73['play'](), pm1fv['addChannel'](j68a73), j68a73;
    }, _jc8fp['dispose'] = function () {
      var qskueb = bu7s['_audioCache'][this['url']];qskueb && (qskueb['src'] = '', delete bu7s['_audioCache'][this['url']]);
    }, fcp_(0x0, _jc8fp, 'duration', function () {
      return this['_sound']['duration'];
    }), bu7s['_createSound'] = function () {
      return bu7s['_id']++, fpja['window']['wx']['createInnerAudioContext']();
    }, bu7s['_musicAudio'] = null, bu7s['_id'] = 0x0, bu7s['_audioCache'] = {}, bu7s['_null'] = undefined, bu7s;
  }(esubkq),
      c9t1vm = function (_1pc) {
    function nq254(zrtl$) {
      this['_audio'] = null, this['_onEnd'] = null, nq254['__super']['call'](this), this['_audio'] = zrtl$, this['_onEnd'] = mpv9['bind'](this['__onEnd'], this), zrtl$['onEnded'](this['_onEnd']);
    }fja_(nq254, 'laya.wx.mini.MiniSoundChannel', _1pc);var qe2k = nq254['prototype'];return qe2k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($ritv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qe2k['__onNull'] = function () {}, qe2k['play'] = function () {
      this['isStopped'] = ![], pm1fv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qe2k['stop'] = function () {
      this['isStopped'] = !![], pm1fv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (nq254['_null'] != undefined) this['_audio']['onEnded'](nq254['_null']);else try {
        this['_audio']['onEnded'](null), nq254['_null'] = null;
      } catch (f1_c8) {
        console['warn']('[wxmini] stop:' + f1_c8), this['_audio']['onEnded'](mpv9['bind'](this['__onNull'], this)), nq254['_null'] = mpv9['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qe2k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qe2k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pm1fv['addChannel'](this), this['_audio']['play']();
    }, fcp_(0x0, qe2k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fcp_(0x0, qe2k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fcp_(0x0, qe2k, 'volume', function () {
      return 0x1;
    }, function (cfp1mv) {}), nq254['_null'] = undefined, nq254;
  }(igz0$l);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ea6b7 in Laya) {
    var lzi$0 = Laya[ea6b7];lzi$0 && lzi$0['__isclass'] && (exports[ea6b7] = lzi$0);
  }
});