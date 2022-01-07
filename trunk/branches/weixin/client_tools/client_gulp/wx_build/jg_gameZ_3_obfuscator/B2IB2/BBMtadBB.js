var D = wx.$b;
(function (window, document, qxkg73) {
  var iuzn0 = qxkg73['un'],
      rh29_ = qxkg73['uns'],
      lx7qgk = qxkg73['static'],
      zy0uim = qxkg73['class'],
      zinuy = qxkg73['getset'],
      izty = qxkg73['__newvec'],
      inyu = laya['utils']['Browser'],
      d6lkox = laya['events']['Event'],
      slo6d = laya['events']['EventDispatcher'],
      ty1 = laya['resource']['HTMLImage'],
      r_v2h = laya['utils']['Handler'],
      qlgx7 = laya['display']['Input'],
      $4faj = laya['net']['Loader'],
      mtzcw = laya['maths']['Matrix'],
      ycmztu = laya['renders']['Render'],
      $af4 = laya['utils']['RunDriver'],
      rh29 = laya['media']['Sound'],
      pwmc = laya['media']['SoundChannel'],
      hw_2v = laya['media']['SoundManager'],
      niz0uy = laya['display']['Stage'],
      rsh_92 = laya['net']['URL'],
      an5$4j = laya['utils']['Utils'],
      niu0j = function () {
    function wcm1zt() {}return zy0uim(wcm1zt, 'laya.wx.mini.MiniAdpter'), wcm1zt['getJson'] = function (s9r28_) {
      return JSON['parse'](s9r28_);
    }, wcm1zt['init'] = function (mtzwc, af5j$4) {
      mtzwc === void 0x0 && (mtzwc = ![]), af5j$4 === void 0x0 && (af5j$4 = ![]);if (wcm1zt['_inited']) return;wcm1zt['window'] = window;if (wcm1zt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;wcm1zt['_inited'] = !![], wcm1zt['isZiYu'] = af5j$4, wcm1zt['isPosMsgYu'] = mtzwc, wcm1zt['EnvConfig'] = {}, !wcm1zt['isZiYu'] && (x7o6k['setNativeFileDir']('/layaairGame'), x7o6k['existDir'](x7o6k['fileNativeDir'], r_v2h['create'](wcm1zt, wcm1zt['onMkdirCallBack']))), wcm1zt['window']['focus'] = function () {}, qxkg73['getUrlPath'] = function () {}, wcm1zt['window']['logtime'] = function (v_2hw) {}, wcm1zt['window']['alertTimeLog'] = function (ij0ynu) {}, wcm1zt['window']['resetShareInfo'] = function () {}, wcm1zt['window']['CanvasRenderingContext2D'] = function () {}, wcm1zt['window']['CanvasRenderingContext2D']['prototype'] = wcm1zt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wcm1zt['window']['document']['body']['appendChild'] = function () {}, wcm1zt['EnvConfig']['pixelRatioInt'] = 0x0, $af4['getPixelRatio'] = wcm1zt['pixelRatio'], wcm1zt['_preCreateElement'] = inyu['createElement'], inyu['createElement'] = wcm1zt['createElement'], $af4['createShaderCondition'] = wcm1zt['createShaderCondition'], an5$4j['parseXMLFromString'] = wcm1zt['parseXMLFromString'], qlgx7['_createInputElement'] = mzit['_createInputElement'], wcm1zt['EnvConfig']['load'] = $4faj['prototype']['load'], $4faj['prototype']['load'] = j0uiyn['prototype']['load'], wcm1zt['isZiYu'] && mtzwc && wx['onMessage'](function (lkxdo6) {
        lkxdo6['isLoad'] && (x7o6k['ziyuFileData'][lkxdo6['url']] = lkxdo6['data']);
      });
    }, wcm1zt['onMkdirCallBack'] = function (n$0j5, tpw1cv) {
      if (!n$0j5) x7o6k['filesListObj'] = JSON['parse'](tpw1cv['data']);
    }, wcm1zt['pixelRatio'] = function () {
      if (!wcm1zt['EnvConfig']['pixelRatioInt']) try {
        var ok7lxq = wx['getSystemInfoSync']();return wcm1zt['EnvConfig']['pixelRatioInt'] = ok7lxq['pixelRatio'], ok7lxq = ok7lxq, ok7lxq['pixelRatio'];
      } catch (o6k7x) {}return wcm1zt['EnvConfig']['pixelRatioInt'];
    }, wcm1zt['createElement'] = function (_v2h9) {
      if (_v2h9 == 'canvas') {
        var rs29_8;return wcm1zt['idx'] == 0x1 ? wcm1zt['isZiYu'] ? (rs29_8 = sharedCanvas, rs29_8['style'] = {}) : rs29_8 = window['canvas'] : rs29_8 = window['wx']['createCanvas'](), wcm1zt['idx']++, rs29_8;
      } else {
        if (_v2h9 == 'textarea' || _v2h9 == 'input') return wcm1zt['onCreateInput'](_v2h9);else {
          if (_v2h9 == 'div') {
            var k68l = wcm1zt['_preCreateElement'](_v2h9);return k68l['contains'] = function (i0zuy) {
              return null;
            }, k68l['removeChild'] = function (vwc1ph) {}, k68l;
          } else return wcm1zt['_preCreateElement'](_v2h9);
        }
      }
    }, wcm1zt['onCreateInput'] = function (sr98d2) {
      var ymu0zi = wcm1zt['_preCreateElement'](sr98d2);return ymu0zi['focus'] = mzit['wxinputFocus'], ymu0zi['blur'] = mzit['wxinputblur'], ymu0zi['style'] = {}, ymu0zi['value'] = 0x0, ymu0zi['parentElement'] = {}, ymu0zi['placeholder'] = {}, ymu0zi['type'] = {}, ymu0zi['setColor'] = function (hw2v) {}, ymu0zi['setType'] = function (ui0ymz) {}, ymu0zi['setFontFace'] = function (rs8d2) {}, ymu0zi['addEventListener'] = function (ituzy) {}, ymu0zi['contains'] = function (k76ox) {
        return null;
      }, ymu0zi['removeChild'] = function (r2d9) {}, ymu0zi;
    }, wcm1zt['createShaderCondition'] = function (l8dko6) {
      var u4j0ni = this,
          wctp = function () {
        var h1v_pw = l8dko6;return u4j0ni[l8dko6['replace']('this.', '')];
      };return wctp;
    }, wcm1zt['EnvConfig'] = null, wcm1zt['window'] = null, wcm1zt['_preCreateElement'] = null, wcm1zt['_inited'] = ![], wcm1zt['wxRequest'] = null, wcm1zt['systemInfo'] = null, wcm1zt['version'] = '0.0.1', wcm1zt['isZiYu'] = ![], wcm1zt['isPosMsgYu'] = ![], wcm1zt['parseXMLFromString'] = function (ji45n) {
      var yj0u, i4nu0j;ji45n = ji45n['replace'](/>\s+</g, '><');try {
        yj0u = new window['Parser']['DOMParser']()['parseFromString'](ji45n, 'text/xml');
      } catch (xkod6) {
        throw '需要引入xml解析库文件';
      }return yj0u;
    }, wcm1zt['idx'] = 0x1, wcm1zt;
  }(),
      uyji0 = function () {
    function koq7xl() {}zy0uim(koq7xl, 'laya.wx.mini.MiniImage');var o96s8d = koq7xl['prototype'];return o96s8d['_loadImage'] = function (n5aj4) {
      var v2hpr_ = this,
          m0uiy = ![];n5aj4['indexOf']('layaNativeDir/') == -0x1 && (m0uiy = !![], n5aj4 = rsh_92['formatURL'](n5aj4));if (!x7o6k['getFileInfo'](n5aj4)) {
        if (n5aj4['indexOf']('http://') != -0x1 || n5aj4['indexOf']('https://') != -0x1) x7o6k['downImg'](n5aj4, new r_v2h(koq7xl, koq7xl['onDownImgCallBack'], [n5aj4, v2hpr_]), n5aj4);else koq7xl['onCreateImage'](n5aj4, v2hpr_, !![]);
      } else koq7xl['onCreateImage'](n5aj4, v2hpr_, !m0uiy);
    }, koq7xl['onDownImgCallBack'] = function (utzimy, j$n40, pcvw1t) {
      if (!pcvw1t) koq7xl['onCreateImage'](utzimy, j$n40);else j$n40['onError'](null);
    }, koq7xl['onCreateImage'] = function (ja$f54, tz1c, kl7qx) {
      kl7qx === void 0x0 && (kl7qx = ![]);var t1vwp;if (!kl7qx) {
        var dr9s86 = x7o6k['getFileInfo'](ja$f54),
            tyzcm = dr9s86['md5'];t1vwp = x7o6k['getFileNativePath'](tyzcm);
      } else t1vwp = ja$f54;if (tz1c['imgCache'] == null) tz1c['imgCache'] = {};var hw_vp2;function imzyu0() {
        hw_vp2['onload'] = null, hw_vp2['onerror'] = null, delete tz1c['imgCache'][ja$f54];
      };var ctumyz = function () {
        imzyu0(), tz1c['onLoaded'](hw_vp2);
      },
          ym1tz = function () {
        imzyu0(), tz1c['event']('error', 'Load image failed');
      };tz1c['_type'] == 'nativeimage' ? (hw_vp2 = new inyu['window']['Image'](), hw_vp2['crossOrigin'] = '', hw_vp2['onload'] = ctumyz, hw_vp2['onerror'] = ym1tz, hw_vp2['src'] = t1vwp, tz1c['imgCache'][ja$f54] = hw_vp2) : new ty1['create'](t1vwp, { 'onload': ctumyz, 'onerror': ym1tz, 'onCreate': function (wvpch1) {
          hw_vp2 = wvpch1, tz1c['imgCache'][ja$f54] = wvpch1;
        } });
    }, koq7xl;
  }(),
      mzit = function () {
    function tyiuzm() {}return zy0uim(tyiuzm, 'laya.wx.mini.MiniInput'), tyiuzm['_createInputElement'] = function () {
      qlgx7['_initInput'](qlgx7['area'] = inyu['createElement']('textarea')), qlgx7['_initInput'](qlgx7['input'] = inyu['createElement']('input')), qlgx7['inputContainer'] = inyu['createElement']('div'), qlgx7['inputContainer']['style']['position'] = 'absolute', qlgx7['inputContainer']['style']['zIndex'] = 0x186a0, inyu['container']['appendChild'](qlgx7['inputContainer']), qlgx7['inputContainer']['setPos'] = function (tczmy1, sold86) {
        qlgx7['inputContainer']['style']['left'] = tczmy1 + 'px', qlgx7['inputContainer']['style']['top'] = sold86 + 'px';
      }, qxkg73['stage']['on']('resize', null, tyiuzm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ujiy0n) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), hw_2v['_soundClass'] = y0jnui, hw_2v['_musicClass'] = y0jnui;
    }, tyiuzm['_onStageResize'] = function () {
      var rd89 = qxkg73['stage']['_canvasTransform']['identity']();rd89['scale'](inyu['width'] / ycmztu['canvas']['width'] / $af4['getPixelRatio'](), inyu['height'] / ycmztu['canvas']['height'] / $af4['getPixelRatio']());
    }, tyiuzm['wxinputFocus'] = function (ctz1mw) {
      var n0j5$ = qlgx7['inputElement']['target'];if (n0j5$ && !n0j5$['editable']) return;niu0j['window']['wx']['offKeyboardConfirm'](), niu0j['window']['wx']['offKeyboardInput'](), niu0j['window']['wx']['showKeyboard']({ 'defaultValue': n0j5$['text'], 'maxLength': n0j5$['maxChars'], 'multiple': n0j5$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ucty) {}, 'fail': function (y0ji) {} }), niu0j['window']['wx']['onKeyboardConfirm'](function (uyni0z) {
        var d69s = uyni0z ? uyni0z['value'] : '';n0j5$['text'] = d69s, n0j5$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), niu0j['window']['wx']['onKeyboardInput'](function (wv1hpc) {
        var l6kdox = wv1hpc ? wv1hpc['value'] : '';if (!n0j5$['multiline']) {
          if (l6kdox['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n0j5$['text'] = l6kdox, n0j5$['event']('input');
      });
    }, tyiuzm['inputEnter'] = function () {
      qlgx7['inputElement']['target']['focus'] = ![];
    }, tyiuzm['wxinputblur'] = function () {
      tyiuzm['hideKeyboard']();
    }, tyiuzm['hideKeyboard'] = function () {
      niu0j['window']['wx']['offKeyboardConfirm'](), niu0j['window']['wx']['offKeyboardInput'](), niu0j['window']['wx']['hideKeyboard']({ 'success': function ($ef45) {
          console['log']('隐藏键盘');
        }, 'fail': function (d89r6) {
          console['log']('隐藏键盘出错:' + (d89r6 ? d89r6['errMsg'] : ''));
        } });
    }, tyiuzm;
  }(),
      j0uiyn = function () {
    function wpv_1h() {}zy0uim(wpv_1h, 'laya.wx.mini.MiniLoader');var odx6k = wpv_1h['prototype'];return odx6k['load'] = function (xlo6k, $jna45, j0inyu, do689s, xklo7) {
      j0inyu === void 0x0 && (j0inyu = !![]), xklo7 === void 0x0 && (xklo7 = ![]);var w_ph2 = this;w_ph2['_url'] = xlo6k;if (xlo6k['indexOf']('data:image') === 0x0) w_ph2['_type'] = $jna45 = 'image';else w_ph2['_type'] = $jna45 || ($jna45 = w_ph2['getTypeFromUrl'](xlo6k));w_ph2['_cache'] = j0inyu, w_ph2['_data'] = null;var oxl6k = 'ascii';if (xlo6k['indexOf']('.fnt') != -0x1) oxl6k = 'utf8';else $jna45 == 'arraybuffer' && (oxl6k = '');;var ji05 = an5$4j['getFileExtension'](xlo6k);if (wpv_1h['_fileTypeArr']['indexOf'](ji05) != -0x1) niu0j['EnvConfig']['load']['call'](this, xlo6k, $jna45, j0inyu, do689s, xklo7);else {
        if (!x7o6k['getFileInfo'](xlo6k)) {
          if (xlo6k['indexOf']('layaNativeDir/') != -0x1) {
            if (niu0j['isZiYu']) {
              var vw1tc = x7o6k['ziyuFileData'][xlo6k];w_ph2['onLoaded'](vw1tc);return;
            } else {
              cosnole['log']('read read'), x7o6k['read'](xlo6k, oxl6k, new r_v2h(wpv_1h, wpv_1h['onReadNativeCallBack'], [oxl6k, xlo6k, $jna45, j0inyu, do689s, xklo7, w_ph2]));return;
            }
          }if (rsh_92['rootPath'] == '') var wvp1ch = xlo6k;else wvp1ch = xlo6k['split'](rsh_92['rootPath'])[0x0];xlo6k['indexOf']('http://') != -0x1 || xlo6k['indexOf']('https://') != -0x1 ? niu0j['EnvConfig']['load']['call'](w_ph2, xlo6k, $jna45, j0inyu, do689s, xklo7) : x7o6k['readFile'](wvp1ch, oxl6k, new r_v2h(wpv_1h, wpv_1h['onReadNativeCallBack'], [oxl6k, xlo6k, $jna45, j0inyu, do689s, xklo7, w_ph2]), xlo6k);
        } else niu0j['EnvConfig']['load']['call'](this, xlo6k, $jna45, j0inyu, do689s, xklo7);
      }
    }, odx6k['resMgrLoad'] = function (zuin0y, n40$5j, dox6k, ytm1cz, uity, odkx6l, z1wc) {
      dox6k === void 0x0 && (dox6k = 0x0), ytm1cz === void 0x0 && (ytm1cz = ![]), uity === void 0x0 && (uity = ![]), odkx6l === void 0x0 && (odkx6l = 0x0), z1wc === void 0x0 && (z1wc = 0x3), zuin0y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zuin0y), niu0j['EnvConfig']['resMgrLoad'](zuin0y, (tcuymz, r69sd8, tiumzy) => {
        wpv_1h['prototype']['resMgrLoadCallBack'](tcuymz, r69sd8, tiumzy, n40$5j);
      }, dox6k, ytm1cz, uity, odkx6l, z1wc);
    }, odx6k['resMgrLoadCallBack'] = function (nij405, xkqgl7, i0uzym, uz0) {
      console['log']('buff:::', nij405, i0uzym, x7o6k['fileNativeDir'] + '///' + x7o6k['fileListName']), uz0(nij405, xkqgl7, i0uzym);
    }, odx6k['clearRes'] = function (v9r, hwp1vc) {
      hwp1vc === void 0x0 && (hwp1vc = ![]);var i0yun = this;i0yun['clearRes'](v9r, hwp1vc);var vwhc1 = x7o6k['getFileInfo'](v9r);if (vwhc1 && (v9r['indexOf']('http://') != -0x1 || v9r['indexOf']('https://') != -0x1)) {
        var xq3gk7 = vwhc1['md5'],
            kdxlo6 = x7o6k['getFileNativePath'](xq3gk7);x7o6k['remove'](kdxlo6);
      }
    }, wpv_1h['onReadNativeCallBack'] = function (hpcvw1, p1vtw, njiu, x7lkgq, hr_vp, r96d, xolk, qgx3, dr89s6) {
      x7lkgq === void 0x0 && (x7lkgq = !![]), r96d === void 0x0 && (r96d = ![]), qgx3 === void 0x0 && (qgx3 = 0x0);if (!qgx3) {
        var dr689s;if (njiu == 'json' || njiu == 'atlas') dr689s = niu0j['getJson'](dr89s6['data']);else njiu == 'xml' ? dr689s = an5$4j['parseXMLFromString'](dr89s6['data']) : dr689s = dr89s6['data'];xolk['onLoaded'](dr689s), !niu0j['isZiYu'] && niu0j['isPosMsgYu'] && njiu != 'arraybuffer' && wx['postMessage']({ 'url': p1vtw, 'data': dr689s, 'isLoad': !![] });
      } else qgx3 == 0x1 && niu0j['EnvConfig']['load']['call'](xolk, p1vtw, njiu, x7lkgq, hr_vp, r96d);
    }, lx7qgk(wpv_1h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wpv_1h;
  }(),
      x7o6k = function (p2wvh) {
    function tcw1() {
      tcw1['__super']['call'](this);;
    }return zy0uim(tcw1, 'laya.wx.mini.MiniFileMgr', p2wvh), tcw1['isLoadFile'] = function (mi0uyz) {
      return tcw1['_fileTypeArr']['indexOf'](mi0uyz) != -0x1 ? !![] : ![];
    }, tcw1['getFileInfo'] = function (iyzmtu) {
      var lsdo = iyzmtu['split']('?')[0x0],
          d8s6r = tcw1['filesListObj'][lsdo];if (d8s6r == null) return null;else return d8s6r;return null;
    }, tcw1['onFileUpdate'] = function (doxk6l, vhw2_p) {
      var s2h_9 = doxk6l['split']('/'),
          l7qokx = s2h_9[s2h_9['length'] - 0x1],
          xqlg7 = tcw1['getFileInfo'](vhw2_p);if (xqlg7 == null) tcw1['onSaveFile'](vhw2_p, l7qokx);else {
        if (xqlg7['readyUrl'] != vhw2_p) tcw1['remove'](l7qokx, vhw2_p);
      }
    }, tcw1['exits'] = function (d896rs, iyuj0n) {
      var u0zymi = tcw1['getFileNativePath'](d896rs);tcw1['fs']['getFileInfo']({ 'filePath': u0zymi, 'success': function (hp2w_) {
          iyuj0n != null && iyuj0n['runWith']([0x0, hp2w_]);
        }, 'fail': function (dok86) {
          iyuj0n != null && iyuj0n['runWith']([0x1, dok86]);
        } });
    }, tcw1['read'] = function (pcmw1, czmuty, c1zwm, xdko6) {
      czmuty === void 0x0 && (czmuty = 'ascill'), xdko6 === void 0x0 && (xdko6 = '');var e$f;xdko6 != '' ? e$f = tcw1['getFileNativePath'](pcmw1) : e$f = pcmw1, tcw1['fs']['readFile']({ 'filePath': e$f, 'encoding': czmuty, 'success': function (xkgq73) {
          c1zwm != null && c1zwm['runWith']([0x0, xkgq73]);
        }, 'fail': function (l6odkx) {
          if (l6odkx && xdko6 != '') tcw1['down'](xdko6, czmuty, c1zwm, xdko6);else c1zwm != null && c1zwm['runWith']([0x1]);
        } });
    }, tcw1['readNativeFile'] = function (znu, $5jf4a) {
      tcw1['fs']['readFile']({ 'filePath': znu, 'encoding': '', 'success': function (tuczy) {
          $5jf4a != null && $5jf4a['runWith']([0x0]);
        }, 'fail': function (jn$540) {
          $5jf4a != null && $5jf4a['runWith']([0x1]);
        } });
    }, tcw1['down'] = function (lxdk, p_vrh, nj4a, cmuzyt) {
      p_vrh === void 0x0 && (p_vrh = 'ascill'), cmuzyt === void 0x0 && (cmuzyt = '');var n0uizy = tcw1['getFileNativePath'](cmuzyt),
          kod6l = tcw1['wxdown']({ 'url': lxdk, 'filePath': n0uizy, 'success': function (f4a5$) {
          if (f4a5$['statusCode'] === 0xc8) tcw1['readFile'](f4a5$['filePath'], p_vrh, nj4a, cmuzyt);
        }, 'fail': function (sr829d) {
          nj4a != null && nj4a['runWith']([0x1, sr829d]);
        } });kod6l['onProgressUpdate'](function (phcv1w) {
        nj4a != null && nj4a['runWith']([0x2, phcv1w['progress']]);
      });
    }, tcw1['readFile'] = function (hw1c, tvcpw, xk7qol, v_hwp2) {
      tvcpw === void 0x0 && (tvcpw = 'ascill'), v_hwp2 === void 0x0 && (v_hwp2 = ''), tcw1['fs']['readFile']({ 'filePath': hw1c, 'encoding': tvcpw, 'success': function (tw1m) {
          if (hw1c['indexOf']('http://') != -0x1 || hw1c['indexOf']('https://') != -0x1) tcw1['onFileUpdate'](hw1c, v_hwp2);xk7qol != null && xk7qol['runWith']([0x0, tw1m]);
        }, 'fail': function (zuym) {
          if (zuym) xk7qol != null && xk7qol['runWith']([0x1, zuym]);
        } });
    }, tcw1['downImg'] = function (s928rd, r8_92s, n4$0j) {
      n4$0j === void 0x0 && (n4$0j = '');var qgkl7x = tcw1['wxdown']({ 'url': s928rd, 'success': function (_wpv1) {
          _wpv1['statusCode'] === 0xc8 && tcw1['copyFile'](_wpv1['tempFilePath'], n4$0j, r8_92s);
        }, 'fail': function (aj$) {
          r8_92s != null && r8_92s['runWith']([0x1, aj$]);
        } });
    }, tcw1['copyFile'] = function (_8s, ytmc, zc1tym) {
      var sod69 = _8s['split']('/'),
          vptwc = sod69[sod69['length'] - 0x1],
          tczymu = ytmc['split']('?')[0x0],
          oxl67 = tcw1['getFileInfo'](ytmc),
          xl6od = tcw1['getFileNativePath'](vptwc);tcw1['fs']['copyFile']({ 'srcPath': _8s, 'destPath': xl6od, 'success': function (zu0yin) {
          if (!oxl67) tcw1['onSaveFile'](ytmc, vptwc), zc1tym != null && zc1tym['runWith']([0x0]);else {
            if (oxl67['readyUrl'] != ytmc) tcw1['remove'](vptwc, ytmc, zc1tym);
          }
        }, 'fail': function (tv1pcw) {
          zc1tym != null && zc1tym['runWith']([0x1, tv1pcw]);
        } });
    }, tcw1['getFileNativePath'] = function (odlx6k) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + odlx6k;
    }, tcw1['remove'] = function (dlko6, u0nyz, tyumzc) {
      u0nyz === void 0x0 && (u0nyz = '');var cv1hwp = tcw1['getFileInfo'](u0nyz),
          ef$4a = tcw1['getFileNativePath'](cv1hwp['md5']);qxkg73['loader']['clearRes'](cv1hwp['readyUrl']), tcw1['fs']['unlink']({ 'filePath': ef$4a, 'success': function (u0inj4) {
          if (u0nyz != '') tcw1['onSaveFile'](u0nyz, dlko6);tyumzc != null && tyumzc['runWith']([0x0]);
        }, 'fail': function (w_hv) {} });
    }, tcw1['onSaveFile'] = function (xk7g3, ziuy0m) {
      var rds89 = xk7g3['split']('?')[0x0];tcw1['filesListObj'][rds89] = { 'md5': ziuy0m, 'readyUrl': xk7g3 }, tcw1['fs']['writeFile']({ 'filePath': tcw1['fileNativeDir'] + '/' + tcw1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tcw1['filesListObj']), 'success': function (ldk6) {
          console['log']('写入测试测试成功：', ldk6);
        }, 'fail': function (ods69) {
          console['log']('写入测试测试失败：', ods69);
        } });
    }, tcw1['existDir'] = function (ldkox, ujin04) {
      tcw1['fs']['mkdir']({ 'dirPath': ldkox, 'success': function (xqg7k3) {
          ujin04 != null && ujin04['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dr2) {
          if (dr2['errMsg']['indexOf']('file already exists') != -0x1) tcw1['readSync'](tcw1['fileListName'], 'utf8', ujin04);else ujin04 != null && ujin04['runWith']([0x1, dr2]);
        } });
    }, tcw1['readSync'] = function (wv_p, rp2_h, s9_rh2, i0ymz) {
      rp2_h === void 0x0 && (rp2_h = 'ascill'), i0ymz === void 0x0 && (i0ymz = '');var rs8d69 = tcw1['getFileNativePath'](wv_p),
          hvw2_;try {
        hvw2_ = tcw1['fs']['readFileSync'](rs8d69), s9_rh2 != null && s9_rh2['runWith']([0x0, { 'data': hvw2_ }]);
      } catch (pv2hr) {
        s9_rh2 != null && s9_rh2['runWith']([0x1]);
      }
    }, tcw1['readCache'] = function () {}, tcw1['writeCache'] = function (c1wzm) {
      var koxl76 = readyUrl['split']('?')[0x0];tcw1['filesListObj'][koxl76] = { 'md5': md5Name, 'readyUrl': readyUrl }, tcw1['fs']['writeFile']({ 'filePath': tcw1['fileNativeDir'] + '/' + tcw1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tcw1['filesListObj']), 'success': function (a$4f5j) {}, 'fail': function (l7xqkg) {} });
    }, tcw1['setNativeFileDir'] = function (so98d) {
      tcw1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + so98d;
    }, tcw1['filesListObj'] = {}, tcw1['fileNativeDir'] = null, tcw1['fileListName'] = 'layaairfiles.txt', tcw1['ziyuFileData'] = {}, lx7qgk(tcw1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tcw1;
  }(slo6d),
      y0jnui = function (niuy0z) {
    function fja$54() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fja$54['__super']['call'](this), this['_sound'] = fja$54['_createSound']();
    }zy0uim(fja$54, 'laya.wx.mini.MiniSound', niuy0z);var s9dr6 = fja$54['prototype'];return s9dr6['load'] = function (rh9_) {
      var ymcu = this;rh9_ = rsh_92['formatURL'](rh9_), this['url'] = rh9_;if (fja$54['_audioCache'][rh9_]) {
        this['event']('complete');return;
      }function qlo7x() {
        if (fja$54['_null'] != undefined) ymcu['_sound']['onCanplay'](fja$54['_null']), ymcu['_sound']['onError'](fja$54['_null']);else try {
          ymcu['_sound']['onCanplay'](null), ymcu['_sound']['onError'](null), fja$54['_null'] = null;
        } catch (w_2) {
          console['warn']('[wxmini] _clearSound:' + w_2), ymcu['_sound']['onCanplay'](odls), ymcu['_sound']['onError'](odls), fja$54['_null'] = odls;
        }
      }function z1ymc() {
        qlo7x(), ol7x6k['loaded'] = !![], ol7x6k['event']('complete'), fja$54['_audioCache'][ol7x6k['url']] = ol7x6k;
      }function g7lk(niu) {
        console['error']('errCode=' + niu['errCode'] + '  errMsg=' + niu['errMsg']), qlo7x(), ol7x6k['event']('error');
      }function odls() {}this['_sound']['onCanplay'](z1ymc), this['_sound']['onError'](g7lk), this['_sound']['src'] = rh9_;var ol7x6k = this;
    }, s9dr6['play'] = function (xk76ol, oqxk) {
      xk76ol === void 0x0 && (xk76ol = 0x0), oqxk === void 0x0 && (oqxk = 0x0);var lq7xo;if (this['url'] == hw_2v['_tMusic']) {
        if (!fja$54['_musicAudio']) fja$54['_musicAudio'] = fja$54['_createSound']();lq7xo = fja$54['_musicAudio'];
      } else lq7xo = fja$54['_createSound']();lq7xo['src'] = this['url'];var ajf5$4 = new iunyj0(lq7xo);return ajf5$4['url'] = this['url'], ajf5$4['loops'] = oqxk, ajf5$4['startTime'] = xk76ol, ajf5$4['play'](), hw_2v['addChannel'](ajf5$4), ajf5$4;
    }, s9dr6['dispose'] = function () {
      var imyzt = fja$54['_audioCache'][this['url']];imyzt && (imyzt['src'] = '', delete fja$54['_audioCache'][this['url']]);
    }, zinuy(0x0, s9dr6, 'duration', function () {
      return this['_sound']['duration'];
    }), fja$54['_createSound'] = function () {
      return fja$54['_id']++, niu0j['window']['wx']['createInnerAudioContext']();
    }, fja$54['_musicAudio'] = null, fja$54['_id'] = 0x0, fja$54['_audioCache'] = {}, fja$54['_null'] = undefined, fja$54;
  }(slo6d),
      iunyj0 = function (uizmy0) {
    function muziy0(hv_1w) {
      this['_audio'] = null, this['_onEnd'] = null, muziy0['__super']['call'](this), this['_audio'] = hv_1w, this['_onEnd'] = an5$4j['bind'](this['__onEnd'], this), hv_1w['onEnded'](this['_onEnd']);
    }zy0uim(muziy0, 'laya.wx.mini.MiniSoundChannel', uizmy0);var $jn4a5 = muziy0['prototype'];return $jn4a5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qxkg73['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $jn4a5['__onNull'] = function () {}, $jn4a5['play'] = function () {
      this['isStopped'] = ![], hw_2v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $jn4a5['stop'] = function () {
      this['isStopped'] = !![], hw_2v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (muziy0['_null'] != undefined) this['_audio']['onEnded'](muziy0['_null']);else try {
        this['_audio']['onEnded'](null), muziy0['_null'] = null;
      } catch (_hp2v) {
        console['warn']('[wxmini] stop:' + _hp2v), this['_audio']['onEnded'](an5$4j['bind'](this['__onNull'], this)), muziy0['_null'] = an5$4j['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $jn4a5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $jn4a5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], hw_2v['addChannel'](this), this['_audio']['play']();
    }, zinuy(0x0, $jn4a5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zinuy(0x0, $jn4a5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zinuy(0x0, $jn4a5, 'volume', function () {
      return 0x1;
    }, function (znui0y) {}), muziy0['_null'] = undefined, muziy0;
  }(pwmc);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var zum0yi in Laya) {
    var p_2vr = Laya[zum0yi];p_2vr && p_2vr['__isclass'] && (exports[zum0yi] = p_2vr);
  }
});