var u = wx.$x;
(function (window, document, rhp_) {
  var vnujdc = rhp_['un'],
      u9 = rhp_['uns'],
      ktb13w = rhp_['static'],
      f9jlcn = rhp_['class'],
      fl87c9 = rhp_['getset'],
      m5xoz = rhp_['__newvec'],
      z265t = laya['utils']['Browser'],
      ndugv = laya['events']['Event'],
      gxsm4 = laya['events']['EventDispatcher'],
      t6w1 = laya['resource']['HTMLImage'],
      zom26 = laya['utils']['Handler'],
      osi4mx = laya['display']['Input'],
      _rqph = laya['net']['Loader'],
      b10ke = laya['maths']['Matrix'],
      jl9fnc = laya['renders']['Render'],
      wb30k1 = laya['utils']['RunDriver'],
      g4duiv = laya['media']['Sound'],
      kph0b = laya['media']['SoundChannel'],
      ekpb0h = laya['media']['SoundManager'],
      p0ehq = laya['display']['Stage'],
      x4oms = laya['net']['URL'],
      eb0ahp = laya['utils']['Utils'],
      ea0bh = function () {
    function udv4ig() {}return f9jlcn(udv4ig, 'laya.wx.mini.MiniAdpter'), udv4ig['getJson'] = function (vugi4) {
      return JSON['parse'](vugi4);
    }, udv4ig['init'] = function (uvdgi, zmsi) {
      uvdgi === void 0x0 && (uvdgi = ![]), zmsi === void 0x0 && (zmsi = ![]);if (udv4ig['_inited']) return;udv4ig['window'] = window;if (udv4ig['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;udv4ig['_inited'] = !![], udv4ig['isZiYu'] = zmsi, udv4ig['isPosMsgYu'] = uvdgi, udv4ig['EnvConfig'] = {}, !udv4ig['isZiYu'] && (tkb13['setNativeFileDir']('/layaairGame'), tkb13['existDir'](tkb13['fileNativeDir'], zom26['create'](udv4ig, udv4ig['onMkdirCallBack']))), udv4ig['window']['focus'] = function () {}, rhp_['getUrlPath'] = function () {}, udv4ig['window']['logtime'] = function (msoxiz) {}, udv4ig['window']['alertTimeLog'] = function (jvncuf) {}, udv4ig['window']['resetShareInfo'] = function () {}, udv4ig['window']['CanvasRenderingContext2D'] = function () {}, udv4ig['window']['CanvasRenderingContext2D']['prototype'] = udv4ig['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], udv4ig['window']['document']['body']['appendChild'] = function () {}, udv4ig['EnvConfig']['pixelRatioInt'] = 0x0, wb30k1['getPixelRatio'] = udv4ig['pixelRatio'], udv4ig['_preCreateElement'] = z265t['createElement'], z265t['createElement'] = udv4ig['createElement'], wb30k1['createShaderCondition'] = udv4ig['createShaderCondition'], eb0ahp['parseXMLFromString'] = udv4ig['parseXMLFromString'], osi4mx['_createInputElement'] = dgixv4['_createInputElement'], udv4ig['EnvConfig']['load'] = _rqph['prototype']['load'], _rqph['prototype']['load'] = hkeb0p['prototype']['load'], udv4ig['isZiYu'] && uvdgi && wx['onMessage'](function (k1b03w) {
        k1b03w['isLoad'] && (tkb13['ziyuFileData'][k1b03w['url']] = k1b03w['data']);
      });
    }, udv4ig['onMkdirCallBack'] = function (flc78, c7jf) {
      if (!flc78) tkb13['filesListObj'] = JSON['parse'](c7jf['data']);
    }, udv4ig['pixelRatio'] = function () {
      if (!udv4ig['EnvConfig']['pixelRatioInt']) try {
        var _aprq = wx['getSystemInfoSync']();return udv4ig['EnvConfig']['pixelRatioInt'] = _aprq['pixelRatio'], _aprq = _aprq, _aprq['pixelRatio'];
      } catch (p0aheq) {}return udv4ig['EnvConfig']['pixelRatioInt'];
    }, udv4ig['createElement'] = function (ape0hq) {
      if (ape0hq == 'canvas') {
        var gvndu4;return udv4ig['idx'] == 0x1 ? udv4ig['isZiYu'] ? (gvndu4 = sharedCanvas, gvndu4['style'] = {}) : gvndu4 = window['canvas'] : gvndu4 = window['wx']['createCanvas'](), udv4ig['idx']++, gvndu4;
      } else {
        if (ape0hq == 'textarea' || ape0hq == 'input') return udv4ig['onCreateInput'](ape0hq);else {
          if (ape0hq == 'div') {
            var w162t3 = udv4ig['_preCreateElement'](ape0hq);return w162t3['contains'] = function (gxsd4) {
              return null;
            }, w162t3['removeChild'] = function ($978y) {}, w162t3;
          } else return udv4ig['_preCreateElement'](ape0hq);
        }
      }
    }, udv4ig['onCreateInput'] = function (gndujv) {
      var wkbhe = udv4ig['_preCreateElement'](gndujv);return wkbhe['focus'] = dgixv4['wxinputFocus'], wkbhe['blur'] = dgixv4['wxinputblur'], wkbhe['style'] = {}, wkbhe['value'] = 0x0, wkbhe['parentElement'] = {}, wkbhe['placeholder'] = {}, wkbhe['type'] = {}, wkbhe['setColor'] = function (smz2o) {}, wkbhe['setType'] = function (i4xsdg) {}, wkbhe['setFontFace'] = function (jvugd) {}, wkbhe['addEventListener'] = function (b0w3k) {}, wkbhe['contains'] = function (g4vudn) {
        return null;
      }, wkbhe['removeChild'] = function (jf9n) {}, wkbhe;
    }, udv4ig['createShaderCondition'] = function (e_haq) {
      var ximsz = this,
          vnu4d = function () {
        var x5mosz = e_haq;return ximsz[e_haq['replace']('this.', '')];
      };return vnu4d;
    }, udv4ig['EnvConfig'] = null, udv4ig['window'] = null, udv4ig['_preCreateElement'] = null, udv4ig['_inited'] = ![], udv4ig['wxRequest'] = null, udv4ig['systemInfo'] = null, udv4ig['version'] = '0.0.1', udv4ig['isZiYu'] = ![], udv4ig['isPosMsgYu'] = ![], udv4ig['parseXMLFromString'] = function (cjl7f) {
      var c9njfl, jdvung;cjl7f = cjl7f['replace'](/>\s+</g, '><');try {
        c9njfl = new window['Parser']['DOMParser']()['parseFromString'](cjl7f, 'text/xml');
      } catch (qehp_a) {
        throw '需要引入xml解析库文件';
      }return c9njfl;
    }, udv4ig['idx'] = 0x1, udv4ig;
  }(),
      udng4v = function () {
    function dxgiv4() {}f9jlcn(dxgiv4, 'laya.wx.mini.MiniImage');var jvg = dxgiv4['prototype'];return jvg['_loadImage'] = function (fucjn) {
      var ehqp_a = this,
          cnju9 = ![];fucjn['indexOf']('layaNativeDir/') == -0x1 && (cnju9 = !![], fucjn = x4oms['formatURL'](fucjn));if (!tkb13['getFileInfo'](fucjn)) {
        if (fucjn['indexOf']('http://') != -0x1 || fucjn['indexOf']('https://') != -0x1) tkb13['downImg'](fucjn, new zom26(dxgiv4, dxgiv4['onDownImgCallBack'], [fucjn, ehqp_a]), fucjn);else dxgiv4['onCreateImage'](fucjn, ehqp_a, !![]);
      } else dxgiv4['onCreateImage'](fucjn, ehqp_a, !cnju9);
    }, dxgiv4['onDownImgCallBack'] = function (lcjnf9, jcufn9, kb13w) {
      if (!kb13w) dxgiv4['onCreateImage'](lcjnf9, jcufn9);else jcufn9['onError'](null);
    }, dxgiv4['onCreateImage'] = function (dgu4v, i4dvug, wb0k3) {
      wb0k3 === void 0x0 && (wb0k3 = ![]);var jduvcn;if (!wb0k3) {
        var cunj9 = tkb13['getFileInfo'](dgu4v),
            pbk = cunj9['md5'];jduvcn = tkb13['getFileNativePath'](pbk);
      } else jduvcn = dgu4v;if (i4dvug['imgCache'] == null) i4dvug['imgCache'] = {};var njvdc;function o2mzs5() {
        njvdc['onload'] = null, njvdc['onerror'] = null, delete i4dvug['imgCache'][dgu4v];
      };var t65213 = function () {
        o2mzs5(), i4dvug['onLoaded'](njvdc);
      },
          l9$y8 = function () {
        o2mzs5(), i4dvug['event']('error', 'Load image failed');
      };i4dvug['_type'] == 'nativeimage' ? (njvdc = new z265t['window']['Image'](), njvdc['crossOrigin'] = '', njvdc['onload'] = t65213, njvdc['onerror'] = l9$y8, njvdc['src'] = jduvcn, i4dvug['imgCache'][dgu4v] = njvdc) : new t6w1['create'](jduvcn, { 'onload': t65213, 'onerror': l9$y8, 'onCreate': function (beh) {
          njvdc = beh, i4dvug['imgCache'][dgu4v] = beh;
        } });
    }, dxgiv4;
  }(),
      dgixv4 = function () {
    function ea0hp() {}return f9jlcn(ea0hp, 'laya.wx.mini.MiniInput'), ea0hp['_createInputElement'] = function () {
      osi4mx['_initInput'](osi4mx['area'] = z265t['createElement']('textarea')), osi4mx['_initInput'](osi4mx['input'] = z265t['createElement']('input')), osi4mx['inputContainer'] = z265t['createElement']('div'), osi4mx['inputContainer']['style']['position'] = 'absolute', osi4mx['inputContainer']['style']['zIndex'] = 0x186a0, z265t['container']['appendChild'](osi4mx['inputContainer']), osi4mx['inputContainer']['setPos'] = function (ufcnv, ape0) {
        osi4mx['inputContainer']['style']['left'] = ufcnv + 'px', osi4mx['inputContainer']['style']['top'] = ape0 + 'px';
      }, rhp_['stage']['on']('resize', null, ea0hp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (djucv) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ekpb0h['_soundClass'] = fy987l, ekpb0h['_musicClass'] = fy987l;
    }, ea0hp['_onStageResize'] = function () {
      var u9jfn = rhp_['stage']['_canvasTransform']['identity']();u9jfn['scale'](z265t['width'] / jl9fnc['canvas']['width'] / wb30k1['getPixelRatio'](), z265t['height'] / jl9fnc['canvas']['height'] / wb30k1['getPixelRatio']());
    }, ea0hp['wxinputFocus'] = function (zo2t65) {
      var xo5z = osi4mx['inputElement']['target'];if (xo5z && !xo5z['editable']) return;ea0bh['window']['wx']['offKeyboardConfirm'](), ea0bh['window']['wx']['offKeyboardInput'](), ea0bh['window']['wx']['showKeyboard']({ 'defaultValue': xo5z['text'], 'maxLength': xo5z['maxChars'], 'multiple': xo5z['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (o6m) {}, 'fail': function (e1w) {} }), ea0bh['window']['wx']['onKeyboardConfirm'](function (peha0b) {
        var oz265t = peha0b ? peha0b['value'] : '';xo5z['text'] = oz265t, xo5z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ea0bh['window']['wx']['onKeyboardInput'](function (hbwek0) {
        var mzo5sx = hbwek0 ? hbwek0['value'] : '';if (!xo5z['multiline']) {
          if (mzo5sx['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xo5z['text'] = mzo5sx, xo5z['event']('input');
      });
    }, ea0hp['inputEnter'] = function () {
      osi4mx['inputElement']['target']['focus'] = ![];
    }, ea0hp['wxinputblur'] = function () {
      ea0hp['hideKeyboard']();
    }, ea0hp['hideKeyboard'] = function () {
      ea0bh['window']['wx']['offKeyboardConfirm'](), ea0bh['window']['wx']['offKeyboardInput'](), ea0bh['window']['wx']['hideKeyboard']({ 'success': function (gndu4) {
          console['log']('隐藏键盘');
        }, 'fail': function (a_hpe) {
          console['log']('隐藏键盘出错:' + (a_hpe ? a_hpe['errMsg'] : ''));
        } });
    }, ea0hp;
  }(),
      hkeb0p = function () {
    function vjngdu() {}f9jlcn(vjngdu, 'laya.wx.mini.MiniLoader');var eqa_h = vjngdu['prototype'];return eqa_h['load'] = function (xsomi4, o4sxm, nc9uj, qheap0, oizxms) {
      nc9uj === void 0x0 && (nc9uj = !![]), oizxms === void 0x0 && (oizxms = ![]);var jfl97c = this;jfl97c['_url'] = xsomi4;if (xsomi4['indexOf']('data:image') === 0x0) jfl97c['_type'] = o4sxm = 'image';else jfl97c['_type'] = o4sxm || (o4sxm = jfl97c['getTypeFromUrl'](xsomi4));jfl97c['_cache'] = nc9uj, jfl97c['_data'] = null;var keb01 = 'ascii';if (xsomi4['indexOf']('.fnt') != -0x1) keb01 = 'utf8';else o4sxm == 'arraybuffer' && (keb01 = '');;var g4vui = eb0ahp['getFileExtension'](xsomi4);if (vjngdu['_fileTypeArr']['indexOf'](g4vui) != -0x1) ea0bh['EnvConfig']['load']['call'](this, xsomi4, o4sxm, nc9uj, qheap0, oizxms);else {
        if (!tkb13['getFileInfo'](xsomi4)) {
          if (xsomi4['indexOf']('layaNativeDir/') != -0x1) {
            if (ea0bh['isZiYu']) {
              var f79c8l = tkb13['ziyuFileData'][xsomi4];jfl97c['onLoaded'](f79c8l);return;
            } else {
              cosnole['log']('read read'), tkb13['read'](xsomi4, keb01, new zom26(vjngdu, vjngdu['onReadNativeCallBack'], [keb01, xsomi4, o4sxm, nc9uj, qheap0, oizxms, jfl97c]));return;
            }
          }if (x4oms['rootPath'] == '') var osm2z = xsomi4;else osm2z = xsomi4['split'](x4oms['rootPath'])[0x0];xsomi4['indexOf']('http://') != -0x1 || xsomi4['indexOf']('https://') != -0x1 ? ea0bh['EnvConfig']['load']['call'](jfl97c, xsomi4, o4sxm, nc9uj, qheap0, oizxms) : tkb13['readFile'](osm2z, keb01, new zom26(vjngdu, vjngdu['onReadNativeCallBack'], [keb01, xsomi4, o4sxm, nc9uj, qheap0, oizxms, jfl97c]), xsomi4);
        } else ea0bh['EnvConfig']['load']['call'](this, xsomi4, o4sxm, nc9uj, qheap0, oizxms);
      }
    }, eqa_h['resMgrLoad'] = function (ebk0wh, vjduc, xs4gid, jnc9l, oms4, jdcun, qrhp_) {
      xs4gid === void 0x0 && (xs4gid = 0x0), jnc9l === void 0x0 && (jnc9l = ![]), oms4 === void 0x0 && (oms4 = ![]), jdcun === void 0x0 && (jdcun = 0x0), qrhp_ === void 0x0 && (qrhp_ = 0x3), ebk0wh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ebk0wh), ea0bh['EnvConfig']['resMgrLoad'](ebk0wh, (qrahp_, fl89c7, pqha0) => {
        vjngdu['prototype']['resMgrLoadCallBack'](qrahp_, fl89c7, pqha0, vjduc);
      }, xs4gid, jnc9l, oms4, jdcun, qrhp_);
    }, eqa_h['resMgrLoadCallBack'] = function (kb1tw, ucdvnj, t63k1, ucndj) {
      console['log']('buff:::', kb1tw, t63k1, tkb13['fileNativeDir'] + '///' + tkb13['fileListName']), ucndj(kb1tw, ucdvnj, t63k1);
    }, eqa_h['clearRes'] = function (x5som, tw632) {
      tw632 === void 0x0 && (tw632 = ![]);var zs25m = this;zs25m['clearRes'](x5som, tw632);var sdi4gx = tkb13['getFileInfo'](x5som);if (sdi4gx && (x5som['indexOf']('http://') != -0x1 || x5som['indexOf']('https://') != -0x1)) {
        var o5mz6 = sdi4gx['md5'],
            kt16w = tkb13['getFileNativePath'](o5mz6);tkb13['remove'](kt16w);
      }
    }, vjngdu['onReadNativeCallBack'] = function (zm2os5, y987fl, sidgx, qepah_, $y798l, _qhe, har, kwebh, vnjufc) {
      qepah_ === void 0x0 && (qepah_ = !![]), _qhe === void 0x0 && (_qhe = ![]), kwebh === void 0x0 && (kwebh = 0x0);if (!kwebh) {
        var om52s;if (sidgx == 'json' || sidgx == 'atlas') om52s = ea0bh['getJson'](vnjufc['data']);else sidgx == 'xml' ? om52s = eb0ahp['parseXMLFromString'](vnjufc['data']) : om52s = vnjufc['data'];har['onLoaded'](om52s), !ea0bh['isZiYu'] && ea0bh['isPosMsgYu'] && sidgx != 'arraybuffer' && wx['postMessage']({ 'url': y987fl, 'data': om52s, 'isLoad': !![] });
      } else kwebh == 0x1 && ea0bh['EnvConfig']['load']['call'](har, y987fl, sidgx, qepah_, $y798l, _qhe);
    }, ktb13w(vjngdu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vjngdu;
  }(),
      tkb13 = function (jlfn9) {
    function wt126() {
      wt126['__super']['call'](this);;
    }return f9jlcn(wt126, 'laya.wx.mini.MiniFileMgr', jlfn9), wt126['isLoadFile'] = function (jnvdug) {
      return wt126['_fileTypeArr']['indexOf'](jnvdug) != -0x1 ? !![] : ![];
    }, wt126['getFileInfo'] = function (lf9jc7) {
      var gsx4di = lf9jc7['split']('?')[0x0],
          ha_qrp = wt126['filesListObj'][gsx4di];if (ha_qrp == null) return null;else return ha_qrp;return null;
    }, wt126['onFileUpdate'] = function (gdvx4i, uv4n) {
      var gnuv4 = gdvx4i['split']('/'),
          _pqeh = gnuv4[gnuv4['length'] - 0x1],
          f879cl = wt126['getFileInfo'](uv4n);if (f879cl == null) wt126['onSaveFile'](uv4n, _pqeh);else {
        if (f879cl['readyUrl'] != uv4n) wt126['remove'](_pqeh, uv4n);
      }
    }, wt126['exits'] = function (jncfl, om5xz) {
      var vdn = wt126['getFileNativePath'](jncfl);wt126['fs']['getFileInfo']({ 'filePath': vdn, 'success': function (vgu4nd) {
          om5xz != null && om5xz['runWith']([0x0, vgu4nd]);
        }, 'fail': function (nljc) {
          om5xz != null && om5xz['runWith']([0x1, nljc]);
        } });
    }, wt126['read'] = function (cjfnl9, _rhaq, sd4gxi, x4vi) {
      _rhaq === void 0x0 && (_rhaq = 'ascill'), x4vi === void 0x0 && (x4vi = '');var uvjcfn;x4vi != '' ? uvjcfn = wt126['getFileNativePath'](cjfnl9) : uvjcfn = cjfnl9, wt126['fs']['readFile']({ 'filePath': uvjcfn, 'encoding': _rhaq, 'success': function (ucfv) {
          sd4gxi != null && sd4gxi['runWith']([0x0, ucfv]);
        }, 'fail': function (uvig4) {
          if (uvig4 && x4vi != '') wt126['down'](x4vi, _rhaq, sd4gxi, x4vi);else sd4gxi != null && sd4gxi['runWith']([0x1]);
        } });
    }, wt126['readNativeFile'] = function (cvfnu, b1k0) {
      wt126['fs']['readFile']({ 'filePath': cvfnu, 'encoding': '', 'success': function (z5s2m) {
          b1k0 != null && b1k0['runWith']([0x0]);
        }, 'fail': function (hpqea0) {
          b1k0 != null && b1k0['runWith']([0x1]);
        } });
    }, wt126['down'] = function (ncvfuj, z35t62, xdivg, t1w6k) {
      z35t62 === void 0x0 && (z35t62 = 'ascill'), t1w6k === void 0x0 && (t1w6k = '');var ph_eq = wt126['getFileNativePath'](t1w6k),
          eh0kbp = wt126['wxdown']({ 'url': ncvfuj, 'filePath': ph_eq, 'success': function (ufvncj) {
          if (ufvncj['statusCode'] === 0xc8) wt126['readFile'](ufvncj['filePath'], z35t62, xdivg, t1w6k);
        }, 'fail': function (s2om) {
          xdivg != null && xdivg['runWith']([0x1, s2om]);
        } });eh0kbp['onProgressUpdate'](function (y$l) {
        xdivg != null && xdivg['runWith']([0x2, y$l['progress']]);
      });
    }, wt126['readFile'] = function (n9cfjl, xgi4, bke0wh, ahe0) {
      xgi4 === void 0x0 && (xgi4 = 'ascill'), ahe0 === void 0x0 && (ahe0 = ''), wt126['fs']['readFile']({ 'filePath': n9cfjl, 'encoding': xgi4, 'success': function (bp0keh) {
          if (n9cfjl['indexOf']('http://') != -0x1 || n9cfjl['indexOf']('https://') != -0x1) wt126['onFileUpdate'](n9cfjl, ahe0);bke0wh != null && bke0wh['runWith']([0x0, bp0keh]);
        }, 'fail': function (prq_ah) {
          if (prq_ah) bke0wh != null && bke0wh['runWith']([0x1, prq_ah]);
        } });
    }, wt126['downImg'] = function (nud4vg, moixsz, nudg) {
      nudg === void 0x0 && (nudg = '');var igdvx4 = wt126['wxdown']({ 'url': nud4vg, 'success': function (hpra) {
          hpra['statusCode'] === 0xc8 && wt126['copyFile'](hpra['tempFilePath'], nudg, moixsz);
        }, 'fail': function (f98yl) {
          moixsz != null && moixsz['runWith']([0x1, f98yl]);
        } });
    }, wt126['copyFile'] = function (gixs4m, lf7y9, ujvncf) {
      var t61wk = gixs4m['split']('/'),
          dn4gv = t61wk[t61wk['length'] - 0x1],
          ly798$ = lf7y9['split']('?')[0x0],
          s4xoi = wt126['getFileInfo'](lf7y9),
          _pqah = wt126['getFileNativePath'](dn4gv);wt126['fs']['copyFile']({ 'srcPath': gixs4m, 'destPath': _pqah, 'success': function (jf9un) {
          if (!s4xoi) wt126['onSaveFile'](lf7y9, dn4gv), ujvncf != null && ujvncf['runWith']([0x0]);else {
            if (s4xoi['readyUrl'] != lf7y9) wt126['remove'](dn4gv, lf7y9, ujvncf);
          }
        }, 'fail': function (ozsxm) {
          ujvncf != null && ujvncf['runWith']([0x1, ozsxm]);
        } });
    }, wt126['getFileNativePath'] = function (ekw1b0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ekw1b0;
    }, wt126['remove'] = function (vdgiu4, w3612, b3kt1w) {
      w3612 === void 0x0 && (w3612 = '');var qh_rp = wt126['getFileInfo'](w3612),
          nucfj = wt126['getFileNativePath'](qh_rp['md5']);rhp_['loader']['clearRes'](qh_rp['readyUrl']), wt126['fs']['unlink']({ 'filePath': nucfj, 'success': function (ahpe0q) {
          if (w3612 != '') wt126['onSaveFile'](w3612, vdgiu4);b3kt1w != null && b3kt1w['runWith']([0x0]);
        }, 'fail': function (eqahp) {} });
    }, wt126['onSaveFile'] = function (x4vig, f97cl) {
      var pehk0 = x4vig['split']('?')[0x0];wt126['filesListObj'][pehk0] = { 'md5': f97cl, 'readyUrl': x4vig }, wt126['fs']['writeFile']({ 'filePath': wt126['fileNativeDir'] + '/' + wt126['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wt126['filesListObj']), 'success': function (eah0pq) {
          console['log']('写入测试测试成功：', eah0pq);
        }, 'fail': function (fvnjcu) {
          console['log']('写入测试测试失败：', fvnjcu);
        } });
    }, wt126['existDir'] = function (eh0apq, c8l) {
      wt126['fs']['mkdir']({ 'dirPath': eh0apq, 'success': function (s5x) {
          c8l != null && c8l['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (misoxz) {
          if (misoxz['errMsg']['indexOf']('file already exists') != -0x1) wt126['readSync'](wt126['fileListName'], 'utf8', c8l);else c8l != null && c8l['runWith']([0x1, misoxz]);
        } });
    }, wt126['readSync'] = function (mxso4i, njdvu, fvcjn, nuvdjg) {
      njdvu === void 0x0 && (njdvu = 'ascill'), nuvdjg === void 0x0 && (nuvdjg = '');var tw32 = wt126['getFileNativePath'](mxso4i),
          eh0kb;try {
        eh0kb = wt126['fs']['readFileSync'](tw32), fvcjn != null && fvcjn['runWith']([0x0, { 'data': eh0kb }]);
      } catch (ngvuj) {
        fvcjn != null && fvcjn['runWith']([0x1]);
      }
    }, wt126['readCache'] = function () {}, wt126['writeCache'] = function (f9cnj) {
      var aephq_ = readyUrl['split']('?')[0x0];wt126['filesListObj'][aephq_] = { 'md5': md5Name, 'readyUrl': readyUrl }, wt126['fs']['writeFile']({ 'filePath': wt126['fileNativeDir'] + '/' + wt126['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wt126['filesListObj']), 'success': function (dunvcj) {}, 'fail': function (zom5xs) {} });
    }, wt126['setNativeFileDir'] = function (vunjd) {
      wt126['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vunjd;
    }, wt126['filesListObj'] = {}, wt126['fileNativeDir'] = null, wt126['fileListName'] = 'layaairfiles.txt', wt126['ziyuFileData'] = {}, ktb13w(wt126, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), wt126;
  }(gxsm4),
      fy987l = function (ah0qep) {
    function cunjf9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cunjf9['__super']['call'](this), this['_sound'] = cunjf9['_createSound']();
    }f9jlcn(cunjf9, 'laya.wx.mini.MiniSound', ah0qep);var w1263t = cunjf9['prototype'];return w1263t['load'] = function (wk613) {
      var vucjf = this;wk613 = x4oms['formatURL'](wk613), this['url'] = wk613;if (cunjf9['_audioCache'][wk613]) {
        this['event']('complete');return;
      }function mxs5z() {
        if (cunjf9['_null'] != undefined) vucjf['_sound']['onCanplay'](cunjf9['_null']), vucjf['_sound']['onError'](cunjf9['_null']);else try {
          vucjf['_sound']['onCanplay'](null), vucjf['_sound']['onError'](null), cunjf9['_null'] = null;
        } catch (dguvn4) {
          console['warn']('[wxmini] _clearSound:' + dguvn4), vucjf['_sound']['onCanplay'](ph_arq), vucjf['_sound']['onError'](ph_arq), cunjf9['_null'] = ph_arq;
        }
      }function f7y8l() {
        mxs5z(), khwe0['loaded'] = !![], khwe0['event']('complete'), cunjf9['_audioCache'][khwe0['url']] = khwe0;
      }function w31kb0(x4oim) {
        console['error']('errCode=' + x4oim['errCode'] + '  errMsg=' + x4oim['errMsg']), mxs5z(), khwe0['event']('error');
      }function ph_arq() {}this['_sound']['onCanplay'](f7y8l), this['_sound']['onError'](w31kb0), this['_sound']['src'] = wk613;var khwe0 = this;
    }, w1263t['play'] = function (gxidv, b0phek) {
      gxidv === void 0x0 && (gxidv = 0x0), b0phek === void 0x0 && (b0phek = 0x0);var ixvdg;if (this['url'] == ekpb0h['_tMusic']) {
        if (!cunjf9['_musicAudio']) cunjf9['_musicAudio'] = cunjf9['_createSound']();ixvdg = cunjf9['_musicAudio'];
      } else ixvdg = cunjf9['_createSound']();ixvdg['src'] = this['url'];var y7f8 = new vgndu4(ixvdg);return y7f8['url'] = this['url'], y7f8['loops'] = b0phek, y7f8['startTime'] = gxidv, y7f8['play'](), ekpb0h['addChannel'](y7f8), y7f8;
    }, w1263t['dispose'] = function () {
      var jfcv = cunjf9['_audioCache'][this['url']];jfcv && (jfcv['src'] = '', delete cunjf9['_audioCache'][this['url']]);
    }, fl87c9(0x0, w1263t, 'duration', function () {
      return this['_sound']['duration'];
    }), cunjf9['_createSound'] = function () {
      return cunjf9['_id']++, ea0bh['window']['wx']['createInnerAudioContext']();
    }, cunjf9['_musicAudio'] = null, cunjf9['_id'] = 0x0, cunjf9['_audioCache'] = {}, cunjf9['_null'] = undefined, cunjf9;
  }(gxsm4),
      vgndu4 = function (rqph_a) {
    function lnjf(xsg4m) {
      this['_audio'] = null, this['_onEnd'] = null, lnjf['__super']['call'](this), this['_audio'] = xsg4m, this['_onEnd'] = eb0ahp['bind'](this['__onEnd'], this), xsg4m['onEnded'](this['_onEnd']);
    }f9jlcn(lnjf, 'laya.wx.mini.MiniSoundChannel', rqph_a);var ap0hq = lnjf['prototype'];return ap0hq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (rhp_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ap0hq['__onNull'] = function () {}, ap0hq['play'] = function () {
      this['isStopped'] = ![], ekpb0h['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ap0hq['stop'] = function () {
      this['isStopped'] = !![], ekpb0h['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (lnjf['_null'] != undefined) this['_audio']['onEnded'](lnjf['_null']);else try {
        this['_audio']['onEnded'](null), lnjf['_null'] = null;
      } catch (zm2o5) {
        console['warn']('[wxmini] stop:' + zm2o5), this['_audio']['onEnded'](eb0ahp['bind'](this['__onNull'], this)), lnjf['_null'] = eb0ahp['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ap0hq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ap0hq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ekpb0h['addChannel'](this), this['_audio']['play']();
    }, fl87c9(0x0, ap0hq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), fl87c9(0x0, ap0hq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), fl87c9(0x0, ap0hq, 'volume', function () {
      return 0x1;
    }, function (njc9l) {}), lnjf['_null'] = undefined, lnjf;
  }(kph0b);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var l$97y in Laya) {
    var qh_ap = Laya[l$97y];qh_ap && qh_ap['__isclass'] && (exports[l$97y] = qh_ap);
  }
});