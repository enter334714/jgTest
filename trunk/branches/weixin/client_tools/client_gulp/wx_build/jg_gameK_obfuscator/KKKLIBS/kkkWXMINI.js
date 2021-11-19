var U = wx.$k;
(function (window, document, i6hsek) {
  var bzxauw = i6hsek['un'],
      blaz = i6hsek['uns'],
      _dur$l = i6hsek['static'],
      p_53g = i6hsek['class'],
      q2908 = i6hsek['getset'],
      awob = i6hsek['__newvec'],
      xwbov = laya['utils']['Browser'],
      l$d_ = laya['events']['Event'],
      tim = laya['events']['EventDispatcher'],
      gpf = laya['resource']['HTMLImage'],
      n028q9 = laya['utils']['Handler'],
      xulz$ = laya['display']['Input'],
      e6i7th = laya['net']['Loader'],
      dl$ru_ = laya['maths']['Matrix'],
      zoxbwv = laya['renders']['Render'],
      dau$x = laya['utils']['RunDriver'],
      xdal$u = laya['media']['Sound'],
      vwozbx = laya['media']['SoundChannel'],
      fg3cp5 = laya['media']['SoundManager'],
      w1zov = laya['display']['Stage'],
      d_ua$ = laya['net']['URL'],
      p$5_d = laya['utils']['Utils'],
      v801qn = function () {
    function xawboz() {}return p_53g(xawboz, 'laya.wx.mini.MiniAdpter'), xawboz['getJson'] = function (fy5) {
      return JSON['parse'](fy5);
    }, xawboz['init'] = function (s2896k, xl$zau) {
      s2896k === void 0x0 && (s2896k = ![]), xl$zau === void 0x0 && (xl$zau = ![]);if (xawboz['_inited']) return;xawboz['window'] = window;if (xawboz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xawboz['_inited'] = !![], xawboz['isZiYu'] = xl$zau, xawboz['isPosMsgYu'] = s2896k, xawboz['EnvConfig'] = {}, !xawboz['isZiYu'] && (gf53c['setNativeFileDir']('/layaairGame'), gf53c['existDir'](gf53c['fileNativeDir'], n028q9['create'](xawboz, xawboz['onMkdirCallBack']))), xawboz['window']['focus'] = function () {}, i6hsek['getUrlPath'] = function () {}, xawboz['window']['logtime'] = function (r5p3gf) {}, xawboz['window']['alertTimeLog'] = function (i7th) {}, xawboz['window']['resetShareInfo'] = function () {}, xawboz['window']['CanvasRenderingContext2D'] = function () {}, xawboz['window']['CanvasRenderingContext2D']['prototype'] = xawboz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xawboz['window']['document']['body']['appendChild'] = function () {}, xawboz['EnvConfig']['pixelRatioInt'] = 0x0, dau$x['getPixelRatio'] = xawboz['pixelRatio'], xawboz['_preCreateElement'] = xwbov['createElement'], xwbov['createElement'] = xawboz['createElement'], dau$x['createShaderCondition'] = xawboz['createShaderCondition'], p$5_d['parseXMLFromString'] = xawboz['parseXMLFromString'], xulz$['_createInputElement'] = du$_a['_createInputElement'], xawboz['EnvConfig']['load'] = e6i7th['prototype']['load'], e6i7th['prototype']['load'] = o0nq1['prototype']['load'], xawboz['isZiYu'] && s2896k && wx['onMessage'](function ($zxlu) {
        $zxlu['isLoad'] && (gf53c['ziyuFileData'][$zxlu['url']] = $zxlu['data']);
      });
    }, xawboz['onMkdirCallBack'] = function (tk6ihe, s6he) {
      if (!tk6ihe) gf53c['filesListObj'] = JSON['parse'](s6he['data']);
    }, xawboz['pixelRatio'] = function () {
      if (!xawboz['EnvConfig']['pixelRatioInt']) try {
        var nq08v1 = wx['getSystemInfoSync']();return xawboz['EnvConfig']['pixelRatioInt'] = nq08v1['pixelRatio'], nq08v1 = nq08v1, nq08v1['pixelRatio'];
      } catch (u$a_dl) {}return xawboz['EnvConfig']['pixelRatioInt'];
    }, xawboz['createElement'] = function (r3d) {
      if (r3d == 'canvas') {
        var vq80n;return xawboz['idx'] == 0x1 ? xawboz['isZiYu'] ? (vq80n = sharedCanvas, vq80n['style'] = {}) : vq80n = window['canvas'] : vq80n = window['wx']['createCanvas'](), xawboz['idx']++, vq80n;
      } else {
        if (r3d == 'textarea' || r3d == 'input') return xawboz['onCreateInput'](r3d);else {
          if (r3d == 'div') {
            var ith67e = xawboz['_preCreateElement'](r3d);return ith67e['contains'] = function (q8v) {
              return null;
            }, ith67e['removeChild'] = function (it74jm) {}, ith67e;
          } else return xawboz['_preCreateElement'](r3d);
        }
      }
    }, xawboz['onCreateInput'] = function (_dla) {
      var l_u$rd = xawboz['_preCreateElement'](_dla);return l_u$rd['focus'] = du$_a['wxinputFocus'], l_u$rd['blur'] = du$_a['wxinputblur'], l_u$rd['style'] = {}, l_u$rd['value'] = 0x0, l_u$rd['parentElement'] = {}, l_u$rd['placeholder'] = {}, l_u$rd['type'] = {}, l_u$rd['setColor'] = function (p_d5$) {}, l_u$rd['setType'] = function (_rd$l) {}, l_u$rd['setFontFace'] = function (zobaxw) {}, l_u$rd['addEventListener'] = function (uxdl$a) {}, l_u$rd['contains'] = function (q8s29) {
        return null;
      }, l_u$rd['removeChild'] = function (gcpf53) {}, l_u$rd;
    }, xawboz['createShaderCondition'] = function (grp3_5) {
      var vxozwb = this,
          w1vqno = function () {
        var i6kesh = grp3_5;return vxozwb[grp3_5['replace']('this.', '')];
      };return w1vqno;
    }, xawboz['EnvConfig'] = null, xawboz['window'] = null, xawboz['_preCreateElement'] = null, xawboz['_inited'] = ![], xawboz['wxRequest'] = null, xawboz['systemInfo'] = null, xawboz['version'] = '0.0.1', xawboz['isZiYu'] = ![], xawboz['isPosMsgYu'] = ![], xawboz['parseXMLFromString'] = function (ekthi6) {
      var q12n0, mijet;ekthi6 = ekthi6['replace'](/>\s+</g, '><');try {
        q12n0 = new window['Parser']['DOMParser']()['parseFromString'](ekthi6, 'text/xml');
      } catch (alu$d) {
        throw '需要引入xml解析库文件';
      }return q12n0;
    }, xawboz['idx'] = 0x1, xawboz;
  }(),
      ovxbz = function () {
    function dr_p3() {}p_53g(dr_p3, 'laya.wx.mini.MiniImage');var nvo10 = dr_p3['prototype'];return nvo10['_loadImage'] = function (x$luad) {
      var n0o1vq = this,
          rp_$5d = ![];x$luad['indexOf']('layaNativeDir/') == -0x1 && (rp_$5d = !![], x$luad = d_ua$['formatURL'](x$luad));if (!gf53c['getFileInfo'](x$luad)) {
        if (x$luad['indexOf']('http://') != -0x1 || x$luad['indexOf']('https://') != -0x1) gf53c['downImg'](x$luad, new n028q9(dr_p3, dr_p3['onDownImgCallBack'], [x$luad, n0o1vq]), x$luad);else dr_p3['onCreateImage'](x$luad, n0o1vq, !![]);
      } else dr_p3['onCreateImage'](x$luad, n0o1vq, !rp_$5d);
    }, dr_p3['onDownImgCallBack'] = function (auxzwb, ovz, daxu$l) {
      if (!daxu$l) dr_p3['onCreateImage'](auxzwb, ovz);else ovz['onError'](null);
    }, dr_p3['onCreateImage'] = function (uzbwax, k029s8, rgp) {
      rgp === void 0x0 && (rgp = ![]);var xzbo;if (!rgp) {
        var bz1vow = gf53c['getFileInfo'](uzbwax),
            lda$ = bz1vow['md5'];xzbo = gf53c['getFileNativePath'](lda$);
      } else xzbo = uzbwax;if (k029s8['imgCache'] == null) k029s8['imgCache'] = {};var ru_ld;function iht6ke() {
        ru_ld['onload'] = null, ru_ld['onerror'] = null, delete k029s8['imgCache'][uzbwax];
      };var q90n2 = function () {
        iht6ke(), k029s8['onLoaded'](ru_ld);
      },
          r53p_d = function () {
        iht6ke(), k029s8['event']('error', 'Load image failed');
      };k029s8['_type'] == 'nativeimage' ? (ru_ld = new xwbov['window']['Image'](), ru_ld['crossOrigin'] = '', ru_ld['onload'] = q90n2, ru_ld['onerror'] = r53p_d, ru_ld['src'] = xzbo, k029s8['imgCache'][uzbwax] = ru_ld) : new gpf['create'](xzbo, { 'onload': q90n2, 'onerror': r53p_d, 'onCreate': function (seikh) {
          ru_ld = seikh, k029s8['imgCache'][uzbwax] = seikh;
        } });
    }, dr_p3;
  }(),
      du$_a = function () {
    function g_p3() {}return p_53g(g_p3, 'laya.wx.mini.MiniInput'), g_p3['_createInputElement'] = function () {
      xulz$['_initInput'](xulz$['area'] = xwbov['createElement']('textarea')), xulz$['_initInput'](xulz$['input'] = xwbov['createElement']('input')), xulz$['inputContainer'] = xwbov['createElement']('div'), xulz$['inputContainer']['style']['position'] = 'absolute', xulz$['inputContainer']['style']['zIndex'] = 0x186a0, xwbov['container']['appendChild'](xulz$['inputContainer']), xulz$['inputContainer']['setPos'] = function (uxlabz, wbzv1) {
        xulz$['inputContainer']['style']['left'] = uxlabz + 'px', xulz$['inputContainer']['style']['top'] = wbzv1 + 'px';
      }, i6hsek['stage']['on']('resize', null, g_p3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d$_rl) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fg3cp5['_soundClass'] = imjt7e, fg3cp5['_musicClass'] = imjt7e;
    }, g_p3['_onStageResize'] = function () {
      var nv81q = i6hsek['stage']['_canvasTransform']['identity']();nv81q['scale'](xwbov['width'] / zoxbwv['canvas']['width'] / dau$x['getPixelRatio'](), xwbov['height'] / zoxbwv['canvas']['height'] / dau$x['getPixelRatio']());
    }, g_p3['wxinputFocus'] = function (udxla) {
      var wvqn1o = xulz$['inputElement']['target'];if (wvqn1o && !wvqn1o['editable']) return;v801qn['window']['wx']['offKeyboardConfirm'](), v801qn['window']['wx']['offKeyboardInput'](), v801qn['window']['wx']['showKeyboard']({ 'defaultValue': wvqn1o['text'], 'maxLength': wvqn1o['maxChars'], 'multiple': wvqn1o['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ieht67) {}, 'fail': function (dax) {} }), v801qn['window']['wx']['onKeyboardConfirm'](function (tm4ji) {
        var v01qon = tm4ji ? tm4ji['value'] : '';wvqn1o['text'] = v01qon, wvqn1o['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), v801qn['window']['wx']['onKeyboardInput'](function ($5pd) {
        var h9se = $5pd ? $5pd['value'] : '';if (!wvqn1o['multiline']) {
          if (h9se['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }wvqn1o['text'] = h9se, wvqn1o['event']('input');
      });
    }, g_p3['inputEnter'] = function () {
      xulz$['inputElement']['target']['focus'] = ![];
    }, g_p3['wxinputblur'] = function () {
      g_p3['hideKeyboard']();
    }, g_p3['hideKeyboard'] = function () {
      v801qn['window']['wx']['offKeyboardConfirm'](), v801qn['window']['wx']['offKeyboardInput'](), v801qn['window']['wx']['hideKeyboard']({ 'success': function (q28s0) {
          console['log']('隐藏键盘');
        }, 'fail': function (s890k) {
          console['log']('隐藏键盘出错:' + (s890k ? s890k['errMsg'] : ''));
        } });
    }, g_p3;
  }(),
      o0nq1 = function () {
    function u$_dl() {}p_53g(u$_dl, 'laya.wx.mini.MiniLoader');var r35p_ = u$_dl['prototype'];return r35p_['load'] = function (es6k9, t6h7ei, prld_$, bzxul, y3c) {
      prld_$ === void 0x0 && (prld_$ = !![]), y3c === void 0x0 && (y3c = ![]);var zxa$ul = this;zxa$ul['_url'] = es6k9;if (es6k9['indexOf']('data:image') === 0x0) zxa$ul['_type'] = t6h7ei = 'image';else zxa$ul['_type'] = t6h7ei || (t6h7ei = zxa$ul['getTypeFromUrl'](es6k9));zxa$ul['_cache'] = prld_$, zxa$ul['_data'] = null;var n1wov = 'ascii';if (es6k9['indexOf']('.fnt') != -0x1) n1wov = 'utf8';else t6h7ei == 'arraybuffer' && (n1wov = '');;var g_r5p = p$5_d['getFileExtension'](es6k9);if (u$_dl['_fileTypeArr']['indexOf'](g_r5p) != -0x1) v801qn['EnvConfig']['load']['call'](this, es6k9, t6h7ei, prld_$, bzxul, y3c);else {
        if (!gf53c['getFileInfo'](es6k9)) {
          if (es6k9['indexOf']('layaNativeDir/') != -0x1) {
            if (v801qn['isZiYu']) {
              var xdalu = gf53c['ziyuFileData'][es6k9];zxa$ul['onLoaded'](xdalu);return;
            } else {
              cosnole['log']('read read'), gf53c['read'](es6k9, n1wov, new n028q9(u$_dl, u$_dl['onReadNativeCallBack'], [n1wov, es6k9, t6h7ei, prld_$, bzxul, y3c, zxa$ul]));return;
            }
          }if (d_ua$['rootPath'] == '') var aldu$ = es6k9;else aldu$ = es6k9['split'](d_ua$['rootPath'])[0x0];es6k9['indexOf']('http://') != -0x1 || es6k9['indexOf']('https://') != -0x1 ? v801qn['EnvConfig']['load']['call'](zxa$ul, es6k9, t6h7ei, prld_$, bzxul, y3c) : gf53c['readFile'](aldu$, n1wov, new n028q9(u$_dl, u$_dl['onReadNativeCallBack'], [n1wov, es6k9, t6h7ei, prld_$, bzxul, y3c, zxa$ul]), es6k9);
        } else v801qn['EnvConfig']['load']['call'](this, es6k9, t6h7ei, prld_$, bzxul, y3c);
      }
    }, r35p_['resMgrLoad'] = function (ski6h, eh6it, jm4it7, x$ad, s2q098, pf3rg5, f5cgy3) {
      jm4it7 === void 0x0 && (jm4it7 = 0x0), x$ad === void 0x0 && (x$ad = ![]), s2q098 === void 0x0 && (s2q098 = ![]), pf3rg5 === void 0x0 && (pf3rg5 = 0x0), f5cgy3 === void 0x0 && (f5cgy3 = 0x3), ski6h['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ski6h), v801qn['EnvConfig']['resMgrLoad'](ski6h, (he7jt, q290s8, o1nqw) => {
        u$_dl['prototype']['resMgrLoadCallBack'](he7jt, q290s8, o1nqw, eh6it);
      }, jm4it7, x$ad, s2q098, pf3rg5, f5cgy3);
    }, r35p_['resMgrLoadCallBack'] = function (h6sk29, ejh7ti, azbxw, ksh69e) {
      console['log']('buff:::', h6sk29, azbxw, gf53c['fileNativeDir'] + '///' + gf53c['fileListName']), ksh69e(h6sk29, ejh7ti, azbxw);
    }, r35p_['clearRes'] = function (u_$r, ehk6) {
      ehk6 === void 0x0 && (ehk6 = ![]);var _plrd$ = this;_plrd$['clearRes'](u_$r, ehk6);var $p_l = gf53c['getFileInfo'](u_$r);if ($p_l && (u_$r['indexOf']('http://') != -0x1 || u_$r['indexOf']('https://') != -0x1)) {
        var et6i7 = $p_l['md5'],
            jmti = gf53c['getFileNativePath'](et6i7);gf53c['remove'](jmti);
      }
    }, u$_dl['onReadNativeCallBack'] = function (pr5$_, w1vnob, ud$r_, emt7j, o1zwb, rf35g, q920s8, vonbw1, xvbz) {
      emt7j === void 0x0 && (emt7j = !![]), rf35g === void 0x0 && (rf35g = ![]), vonbw1 === void 0x0 && (vonbw1 = 0x0);if (!vonbw1) {
        var r53_d;if (ud$r_ == 'json' || ud$r_ == 'atlas') r53_d = v801qn['getJson'](xvbz['data']);else ud$r_ == 'xml' ? r53_d = p$5_d['parseXMLFromString'](xvbz['data']) : r53_d = xvbz['data'];q920s8['onLoaded'](r53_d), !v801qn['isZiYu'] && v801qn['isPosMsgYu'] && ud$r_ != 'arraybuffer' && wx['postMessage']({ 'url': w1vnob, 'data': r53_d, 'isLoad': !![] });
      } else vonbw1 == 0x1 && v801qn['EnvConfig']['load']['call'](q920s8, w1vnob, ud$r_, emt7j, o1zwb, rf35g);
    }, _dur$l(u$_dl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), u$_dl;
  }(),
      gf53c = function (fr5g3) {
    function o1zvb() {
      o1zvb['__super']['call'](this);;
    }return p_53g(o1zvb, 'laya.wx.mini.MiniFileMgr', fr5g3), o1zvb['isLoadFile'] = function ($lxau) {
      return o1zvb['_fileTypeArr']['indexOf']($lxau) != -0x1 ? !![] : ![];
    }, o1zvb['getFileInfo'] = function (nvqow1) {
      var _$5d = nvqow1['split']('?')[0x0],
          th7ije = o1zvb['filesListObj'][_$5d];if (th7ije == null) return null;else return th7ije;return null;
    }, o1zvb['onFileUpdate'] = function (ehit6, _grp5) {
      var p_$5d = ehit6['split']('/'),
          axbz = p_$5d[p_$5d['length'] - 0x1],
          uda$x = o1zvb['getFileInfo'](_grp5);if (uda$x == null) o1zvb['onSaveFile'](_grp5, axbz);else {
        if (uda$x['readyUrl'] != _grp5) o1zvb['remove'](axbz, _grp5);
      }
    }, o1zvb['exits'] = function (eit, wvobzx) {
      var h76 = o1zvb['getFileNativePath'](eit);o1zvb['fs']['getFileInfo']({ 'filePath': h76, 'success': function (n98q) {
          wvobzx != null && wvobzx['runWith']([0x0, n98q]);
        }, 'fail': function (hki6se) {
          wvobzx != null && wvobzx['runWith']([0x1, hki6se]);
        } });
    }, o1zvb['read'] = function (xbowz, j7t4m, w1onvq, x$udal) {
      j7t4m === void 0x0 && (j7t4m = 'ascill'), x$udal === void 0x0 && (x$udal = '');var lab;x$udal != '' ? lab = o1zvb['getFileNativePath'](xbowz) : lab = xbowz, o1zvb['fs']['readFile']({ 'filePath': lab, 'encoding': j7t4m, 'success': function (sk902) {
          w1onvq != null && w1onvq['runWith']([0x0, sk902]);
        }, 'fail': function ($l_a) {
          if ($l_a && x$udal != '') o1zvb['down'](x$udal, j7t4m, w1onvq, x$udal);else w1onvq != null && w1onvq['runWith']([0x1]);
        } });
    }, o1zvb['readNativeFile'] = function (g35cfy, gp5r) {
      o1zvb['fs']['readFile']({ 'filePath': g35cfy, 'encoding': '', 'success': function (r$_dlu) {
          gp5r != null && gp5r['runWith']([0x0]);
        }, 'fail': function ($dx) {
          gp5r != null && gp5r['runWith']([0x1]);
        } });
    }, o1zvb['down'] = function (bzxawo, cpfg3, ek6, p_r35d) {
      cpfg3 === void 0x0 && (cpfg3 = 'ascill'), p_r35d === void 0x0 && (p_r35d = '');var etj7ih = o1zvb['getFileNativePath'](p_r35d),
          ji7 = o1zvb['wxdown']({ 'url': bzxawo, 'filePath': etj7ih, 'success': function (oxzbvw) {
          if (oxzbvw['statusCode'] === 0xc8) o1zvb['readFile'](oxzbvw['filePath'], cpfg3, ek6, p_r35d);
        }, 'fail': function (t7jeh) {
          ek6 != null && ek6['runWith']([0x1, t7jeh]);
        } });ji7['onProgressUpdate'](function (hke6s) {
        ek6 != null && ek6['runWith']([0x2, hke6s['progress']]);
      });
    }, o1zvb['readFile'] = function (xlau$, iek6s, xlbau, oxwvbz) {
      iek6s === void 0x0 && (iek6s = 'ascill'), oxwvbz === void 0x0 && (oxwvbz = ''), o1zvb['fs']['readFile']({ 'filePath': xlau$, 'encoding': iek6s, 'success': function (ov1bnw) {
          if (xlau$['indexOf']('http://') != -0x1 || xlau$['indexOf']('https://') != -0x1) o1zvb['onFileUpdate'](xlau$, oxwvbz);xlbau != null && xlbau['runWith']([0x0, ov1bnw]);
        }, 'fail': function (qwnvo1) {
          if (qwnvo1) xlbau != null && xlbau['runWith']([0x1, qwnvo1]);
        } });
    }, o1zvb['downImg'] = function (d5rp_3, thie6, gp35cf) {
      gp35cf === void 0x0 && (gp35cf = '');var ie6tk = o1zvb['wxdown']({ 'url': d5rp_3, 'success': function (i6hks) {
          i6hks['statusCode'] === 0xc8 && o1zvb['copyFile'](i6hks['tempFilePath'], gp35cf, thie6);
        }, 'fail': function (pr$_5d) {
          thie6 != null && thie6['runWith']([0x1, pr$_5d]);
        } });
    }, o1zvb['copyFile'] = function (eshki6, z$lux, azxubl) {
      var v08 = eshki6['split']('/'),
          mje7 = v08[v08['length'] - 0x1],
          hi = z$lux['split']('?')[0x0],
          sk9e6h = o1zvb['getFileInfo'](z$lux),
          dl_$ur = o1zvb['getFileNativePath'](mje7);o1zvb['fs']['copyFile']({ 'srcPath': eshki6, 'destPath': dl_$ur, 'success': function (i7jm4t) {
          if (!sk9e6h) o1zvb['onSaveFile'](z$lux, mje7), azxubl != null && azxubl['runWith']([0x0]);else {
            if (sk9e6h['readyUrl'] != z$lux) o1zvb['remove'](mje7, z$lux, azxubl);
          }
        }, 'fail': function (l_rud$) {
          azxubl != null && azxubl['runWith']([0x1, l_rud$]);
        } });
    }, o1zvb['getFileNativePath'] = function (obvw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + obvw;
    }, o1zvb['remove'] = function (q2180n, p3rg5f, vw1bz) {
      p3rg5f === void 0x0 && (p3rg5f = '');var fr35p = o1zvb['getFileInfo'](p3rg5f),
          _l$rp = o1zvb['getFileNativePath'](fr35p['md5']);i6hsek['loader']['clearRes'](fr35p['readyUrl']), o1zvb['fs']['unlink']({ 'filePath': _l$rp, 'success': function (dp_35) {
          if (p3rg5f != '') o1zvb['onSaveFile'](p3rg5f, q2180n);vw1bz != null && vw1bz['runWith']([0x0]);
        }, 'fail': function (shike) {} });
    }, o1zvb['onSaveFile'] = function (au$d_l, k9s862) {
      var khie6t = au$d_l['split']('?')[0x0];o1zvb['filesListObj'][khie6t] = { 'md5': k9s862, 'readyUrl': au$d_l }, o1zvb['fs']['writeFile']({ 'filePath': o1zvb['fileNativeDir'] + '/' + o1zvb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o1zvb['filesListObj']), 'success': function (q1n082) {
          console['log']('写入测试测试成功：', q1n082);
        }, 'fail': function (gr53fp) {
          console['log']('写入测试测试失败：', gr53fp);
        } });
    }, o1zvb['existDir'] = function (it7h6, k6ei) {
      o1zvb['fs']['mkdir']({ 'dirPath': it7h6, 'success': function (ehs6i) {
          k6ei != null && k6ei['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pf35gc) {
          if (pf35gc['errMsg']['indexOf']('file already exists') != -0x1) o1zvb['readSync'](o1zvb['fileListName'], 'utf8', k6ei);else k6ei != null && k6ei['runWith']([0x1, pf35gc]);
        } });
    }, o1zvb['readSync'] = function (_53rpd, nqwvo, _5rdp3, $rlud_) {
      nqwvo === void 0x0 && (nqwvo = 'ascill'), $rlud_ === void 0x0 && ($rlud_ = '');var t6hik = o1zvb['getFileNativePath'](_53rpd),
          n0q12;try {
        n0q12 = o1zvb['fs']['readFileSync'](t6hik), _5rdp3 != null && _5rdp3['runWith']([0x0, { 'data': n0q12 }]);
      } catch (zbxwo) {
        _5rdp3 != null && _5rdp3['runWith']([0x1]);
      }
    }, o1zvb['readCache'] = function () {}, o1zvb['writeCache'] = function (n1owv) {
      var wazbxu = readyUrl['split']('?')[0x0];o1zvb['filesListObj'][wazbxu] = { 'md5': md5Name, 'readyUrl': readyUrl }, o1zvb['fs']['writeFile']({ 'filePath': o1zvb['fileNativeDir'] + '/' + o1zvb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o1zvb['filesListObj']), 'success': function (rdul_$) {}, 'fail': function (vwn1qo) {} });
    }, o1zvb['setNativeFileDir'] = function (zbawux) {
      o1zvb['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zbawux;
    }, o1zvb['filesListObj'] = {}, o1zvb['fileNativeDir'] = null, o1zvb['fileListName'] = 'layaairfiles.txt', o1zvb['ziyuFileData'] = {}, _dur$l(o1zvb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), o1zvb;
  }(tim),
      imjt7e = function (e7iht6) {
    function dl$ua() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dl$ua['__super']['call'](this), this['_sound'] = dl$ua['_createSound']();
    }p_53g(dl$ua, 'laya.wx.mini.MiniSound', e7iht6);var dxalu$ = dl$ua['prototype'];return dxalu$['load'] = function (n1vob) {
      var nq1v08 = this;n1vob = d_ua$['formatURL'](n1vob), this['url'] = n1vob;if (dl$ua['_audioCache'][n1vob]) {
        this['event']('complete');return;
      }function $lua_d() {
        if (dl$ua['_null'] != undefined) nq1v08['_sound']['onCanplay'](dl$ua['_null']), nq1v08['_sound']['onError'](dl$ua['_null']);else try {
          nq1v08['_sound']['onCanplay'](null), nq1v08['_sound']['onError'](null), dl$ua['_null'] = null;
        } catch (wbau) {
          console['warn']('[wxmini] _clearSound:' + wbau), nq1v08['_sound']['onCanplay'](vowq1n), nq1v08['_sound']['onError'](vowq1n), dl$ua['_null'] = vowq1n;
        }
      }function dr_u$l() {
        $lua_d(), wb1zv['loaded'] = !![], wb1zv['event']('complete'), dl$ua['_audioCache'][wb1zv['url']] = wb1zv;
      }function bzwvo(on1vq) {
        console['error']('errCode=' + on1vq['errCode'] + '  errMsg=' + on1vq['errMsg']), $lua_d(), wb1zv['event']('error');
      }function vowq1n() {}this['_sound']['onCanplay'](dr_u$l), this['_sound']['onError'](bzwvo), this['_sound']['src'] = n1vob;var wb1zv = this;
    }, dxalu$['play'] = function (l$r_p, shek) {
      l$r_p === void 0x0 && (l$r_p = 0x0), shek === void 0x0 && (shek = 0x0);var wuxb;if (this['url'] == fg3cp5['_tMusic']) {
        if (!dl$ua['_musicAudio']) dl$ua['_musicAudio'] = dl$ua['_createSound']();wuxb = dl$ua['_musicAudio'];
      } else wuxb = dl$ua['_createSound']();wuxb['src'] = this['url'];var vwb1 = new zxal$(wuxb);return vwb1['url'] = this['url'], vwb1['loops'] = shek, vwb1['startTime'] = l$r_p, vwb1['play'](), fg3cp5['addChannel'](vwb1), vwb1;
    }, dxalu$['dispose'] = function () {
      var pd$lr_ = dl$ua['_audioCache'][this['url']];pd$lr_ && (pd$lr_['src'] = '', delete dl$ua['_audioCache'][this['url']]);
    }, q2908(0x0, dxalu$, 'duration', function () {
      return this['_sound']['duration'];
    }), dl$ua['_createSound'] = function () {
      return dl$ua['_id']++, v801qn['window']['wx']['createInnerAudioContext']();
    }, dl$ua['_musicAudio'] = null, dl$ua['_id'] = 0x0, dl$ua['_audioCache'] = {}, dl$ua['_null'] = undefined, dl$ua;
  }(tim),
      zxal$ = function (ud_$r) {
    function xazbwu(emtij) {
      this['_audio'] = null, this['_onEnd'] = null, xazbwu['__super']['call'](this), this['_audio'] = emtij, this['_onEnd'] = p$5_d['bind'](this['__onEnd'], this), emtij['onEnded'](this['_onEnd']);
    }p_53g(xazbwu, 'laya.wx.mini.MiniSoundChannel', ud_$r);var $au = xazbwu['prototype'];return $au['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (i6hsek['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $au['__onNull'] = function () {}, $au['play'] = function () {
      this['isStopped'] = ![], fg3cp5['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $au['stop'] = function () {
      this['isStopped'] = !![], fg3cp5['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xazbwu['_null'] != undefined) this['_audio']['onEnded'](xazbwu['_null']);else try {
        this['_audio']['onEnded'](null), xazbwu['_null'] = null;
      } catch (_lu) {
        console['warn']('[wxmini] stop:' + _lu), this['_audio']['onEnded'](p$5_d['bind'](this['__onNull'], this)), xazbwu['_null'] = p$5_d['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $au['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $au['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fg3cp5['addChannel'](this), this['_audio']['play']();
    }, q2908(0x0, $au, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), q2908(0x0, $au, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), q2908(0x0, $au, 'volume', function () {
      return 0x1;
    }, function (p3dr_5) {}), xazbwu['_null'] = undefined, xazbwu;
  }(vwozbx);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var q0onv in Laya) {
    var bxzoaw = Laya[q0onv];bxzoaw && bxzoaw['__isclass'] && (exports[q0onv] = bxzoaw);
  }
});