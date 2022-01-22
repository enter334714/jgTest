var O = wx.$C;
(function (window, document, dxwqh0) {
  var ba6iy2 = dxwqh0['un'],
      d89jzr = dxwqh0['uns'],
      q0dhx = dxwqh0['static'],
      cpr$u = dxwqh0['class'],
      okml5 = dxwqh0['getset'],
      snygv_ = dxwqh0['__newvec'],
      h90jw = laya['utils']['Browser'],
      n26ys = laya['events']['Event'],
      v31g = laya['events']['EventDispatcher'],
      _vnasy = laya['resource']['HTMLImage'],
      lu5co = laya['utils']['Handler'],
      lu8c$ = laya['display']['Input'],
      $ucp8r = laya['net']['Loader'],
      g431f7 = laya['maths']['Matrix'],
      lotc5 = laya['renders']['Render'],
      ktml = laya['utils']['RunDriver'],
      ns6y = laya['media']['Sound'],
      f_3vg4 = laya['media']['SoundChannel'],
      _y6 = laya['media']['SoundManager'],
      j89zdr = laya['display']['Stage'],
      z9j8$r = laya['net']['URL'],
      cul = laya['utils']['Utils'],
      siy2a6 = function () {
    function ys2a6() {}return cpr$u(ys2a6, 'laya.wx.mini.MiniAdpter'), ys2a6['getJson'] = function (lot5c) {
      return JSON['parse'](lot5c);
    }, ys2a6['init'] = function (f_vg3, h9jdzr) {
      f_vg3 === void 0x0 && (f_vg3 = ![]), h9jdzr === void 0x0 && (h9jdzr = ![]);if (ys2a6['_inited']) return;ys2a6['window'] = window;if (ys2a6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ys2a6['_inited'] = !![], ys2a6['isZiYu'] = h9jdzr, ys2a6['isPosMsgYu'] = f_vg3, ys2a6['EnvConfig'] = {}, !ys2a6['isZiYu'] && (z9drj8['setNativeFileDir']('/layaairGame'), z9drj8['existDir'](z9drj8['fileNativeDir'], lu5co['create'](ys2a6, ys2a6['onMkdirCallBack']))), ys2a6['window']['focus'] = function () {}, dxwqh0['getUrlPath'] = function () {}, ys2a6['window']['logtime'] = function (lu5pc$) {}, ys2a6['window']['alertTimeLog'] = function (m5cotl) {}, ys2a6['window']['resetShareInfo'] = function () {}, ys2a6['window']['CanvasRenderingContext2D'] = function () {}, ys2a6['window']['CanvasRenderingContext2D']['prototype'] = ys2a6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ys2a6['window']['document']['body']['appendChild'] = function () {}, ys2a6['EnvConfig']['pixelRatioInt'] = 0x0, ktml['getPixelRatio'] = ys2a6['pixelRatio'], ys2a6['_preCreateElement'] = h90jw['createElement'], h90jw['createElement'] = ys2a6['createElement'], ktml['createShaderCondition'] = ys2a6['createShaderCondition'], cul['parseXMLFromString'] = ys2a6['parseXMLFromString'], lu8c$['_createInputElement'] = f4q31['_createInputElement'], ys2a6['EnvConfig']['load'] = $ucp8r['prototype']['load'], $ucp8r['prototype']['load'] = h0xqdw['prototype']['load'], ys2a6['isZiYu'] && f_vg3 && wx['onMessage'](function (vfg34) {
        vfg34['isLoad'] && (z9drj8['ziyuFileData'][vfg34['url']] = vfg34['data']);
      });
    }, ys2a6['onMkdirCallBack'] = function (upclo, ynvsa) {
      if (!upclo) z9drj8['filesListObj'] = JSON['parse'](ynvsa['data']);
    }, ys2a6['pixelRatio'] = function () {
      if (!ys2a6['EnvConfig']['pixelRatioInt']) try {
        var k5mt = wx['getSystemInfoSync']();return ys2a6['EnvConfig']['pixelRatioInt'] = k5mt['pixelRatio'], k5mt = k5mt, k5mt['pixelRatio'];
      } catch (asy_n) {}return ys2a6['EnvConfig']['pixelRatioInt'];
    }, ys2a6['createElement'] = function (upc5lo) {
      if (upc5lo == 'canvas') {
        var g3f14;return ys2a6['idx'] == 0x1 ? ys2a6['isZiYu'] ? (g3f14 = sharedCanvas, g3f14['style'] = {}) : g3f14 = window['canvas'] : g3f14 = window['wx']['createCanvas'](), ys2a6['idx']++, g3f14;
      } else {
        if (upc5lo == 'textarea' || upc5lo == 'input') return ys2a6['onCreateInput'](upc5lo);else {
          if (upc5lo == 'div') {
            var z8u$pr = ys2a6['_preCreateElement'](upc5lo);return z8u$pr['contains'] = function (moc) {
              return null;
            }, z8u$pr['removeChild'] = function (ul8) {}, z8u$pr;
          } else return ys2a6['_preCreateElement'](upc5lo);
        }
      }
    }, ys2a6['onCreateInput'] = function (q7w10) {
      var rp8$uz = ys2a6['_preCreateElement'](q7w10);return rp8$uz['focus'] = f4q31['wxinputFocus'], rp8$uz['blur'] = f4q31['wxinputblur'], rp8$uz['style'] = {}, rp8$uz['value'] = 0x0, rp8$uz['parentElement'] = {}, rp8$uz['placeholder'] = {}, rp8$uz['type'] = {}, rp8$uz['setColor'] = function (ct5mo) {}, rp8$uz['setType'] = function (rj$z8) {}, rp8$uz['setFontFace'] = function (fg3_v) {}, rp8$uz['addEventListener'] = function (cpl$u8) {}, rp8$uz['contains'] = function (fv_sgn) {
        return null;
      }, rp8$uz['removeChild'] = function (rhdz9j) {}, rp8$uz;
    }, ys2a6['createShaderCondition'] = function (fv43g1) {
      var plu$5c = this,
          pclt5 = function () {
        var nvfgs_ = fv43g1;return plu$5c[fv43g1['replace']('this.', '')];
      };return pclt5;
    }, ys2a6['EnvConfig'] = null, ys2a6['window'] = null, ys2a6['_preCreateElement'] = null, ys2a6['_inited'] = ![], ys2a6['wxRequest'] = null, ys2a6['systemInfo'] = null, ys2a6['version'] = '0.0.1', ys2a6['isZiYu'] = ![], ys2a6['isPosMsgYu'] = ![], ys2a6['parseXMLFromString'] = function (_gv4n) {
      var $rp8cu, $8rzpu;_gv4n = _gv4n['replace'](/>\s+</g, '><');try {
        $rp8cu = new window['Parser']['DOMParser']()['parseFromString'](_gv4n, 'text/xml');
      } catch (mkl5to) {
        throw '需要引入xml解析库文件';
      }return $rp8cu;
    }, ys2a6['idx'] = 0x1, ys2a6;
  }(),
      a_yvs = function () {
    function lu8cp$() {}cpr$u(lu8cp$, 'laya.wx.mini.MiniImage');var $rz8p = lu8cp$['prototype'];return $rz8p['_loadImage'] = function (hr9dzj) {
      var _a6s = this,
          b62aei = ![];hr9dzj['indexOf']('layaNativeDir/') == -0x1 && (b62aei = !![], hr9dzj = z9j8$r['formatURL'](hr9dzj));if (!z9drj8['getFileInfo'](hr9dzj)) {
        if (hr9dzj['indexOf']('http://') != -0x1 || hr9dzj['indexOf']('https://') != -0x1) z9drj8['downImg'](hr9dzj, new lu5co(lu8cp$, lu8cp$['onDownImgCallBack'], [hr9dzj, _a6s]), hr9dzj);else lu8cp$['onCreateImage'](hr9dzj, _a6s, !![]);
      } else lu8cp$['onCreateImage'](hr9dzj, _a6s, !b62aei);
    }, lu8cp$['onDownImgCallBack'] = function (dhjz9w, _4g3v, $9j8rz) {
      if (!$9j8rz) lu8cp$['onCreateImage'](dhjz9w, _4g3v);else _4g3v['onError'](null);
    }, lu8cp$['onCreateImage'] = function (octp, pluo, whj9zd) {
      whj9zd === void 0x0 && (whj9zd = ![]);var pl;if (!whj9zd) {
        var siy6 = z9drj8['getFileInfo'](octp),
            zwjhd = siy6['md5'];pl = z9drj8['getFileNativePath'](zwjhd);
      } else pl = octp;if (pluo['imgCache'] == null) pluo['imgCache'] = {};var rdzh9;function _6nys() {
        rdzh9['onload'] = null, rdzh9['onerror'] = null, delete pluo['imgCache'][octp];
      };var cp8$l = function () {
        _6nys(), pluo['onLoaded'](rdzh9);
      },
          g41f3v = function () {
        _6nys(), pluo['event']('error', 'Load image failed');
      };pluo['_type'] == 'nativeimage' ? (rdzh9 = new h90jw['window']['Image'](), rdzh9['crossOrigin'] = '', rdzh9['onload'] = cp8$l, rdzh9['onerror'] = g41f3v, rdzh9['src'] = pl, pluo['imgCache'][octp] = rdzh9) : new _vnasy['create'](pl, { 'onload': cp8$l, 'onerror': g41f3v, 'onCreate': function (q17x3) {
          rdzh9 = q17x3, pluo['imgCache'][octp] = q17x3;
        } });
    }, lu8cp$;
  }(),
      f4q31 = function () {
    function _f4gv() {}return cpr$u(_f4gv, 'laya.wx.mini.MiniInput'), _f4gv['_createInputElement'] = function () {
      lu8c$['_initInput'](lu8c$['area'] = h90jw['createElement']('textarea')), lu8c$['_initInput'](lu8c$['input'] = h90jw['createElement']('input')), lu8c$['inputContainer'] = h90jw['createElement']('div'), lu8c$['inputContainer']['style']['position'] = 'absolute', lu8c$['inputContainer']['style']['zIndex'] = 0x186a0, h90jw['container']['appendChild'](lu8c$['inputContainer']), lu8c$['inputContainer']['setPos'] = function (qx0h7, vn_ygs) {
        lu8c$['inputContainer']['style']['left'] = qx0h7 + 'px', lu8c$['inputContainer']['style']['top'] = vn_ygs + 'px';
      }, dxwqh0['stage']['on']('resize', null, _f4gv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ays6n) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _y6['_soundClass'] = m5klto, _y6['_musicClass'] = m5klto;
    }, _f4gv['_onStageResize'] = function () {
      var lcp8 = dxwqh0['stage']['_canvasTransform']['identity']();lcp8['scale'](h90jw['width'] / lotc5['canvas']['width'] / ktml['getPixelRatio'](), h90jw['height'] / lotc5['canvas']['height'] / ktml['getPixelRatio']());
    }, _f4gv['wxinputFocus'] = function (ia2ys) {
      var u$rc8p = lu8c$['inputElement']['target'];if (u$rc8p && !u$rc8p['editable']) return;siy2a6['window']['wx']['offKeyboardConfirm'](), siy2a6['window']['wx']['offKeyboardInput'](), siy2a6['window']['wx']['showKeyboard']({ 'defaultValue': u$rc8p['text'], 'maxLength': u$rc8p['maxChars'], 'multiple': u$rc8p['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (h7q0w) {}, 'fail': function (hzj9) {} }), siy2a6['window']['wx']['onKeyboardConfirm'](function (vfns) {
        var v3f14g = vfns ? vfns['value'] : '';u$rc8p['text'] = v3f14g, u$rc8p['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), siy2a6['window']['wx']['onKeyboardInput'](function (v_asny) {
        var zdwj9 = v_asny ? v_asny['value'] : '';if (!u$rc8p['multiline']) {
          if (zdwj9['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }u$rc8p['text'] = zdwj9, u$rc8p['event']('input');
      });
    }, _f4gv['inputEnter'] = function () {
      lu8c$['inputElement']['target']['focus'] = ![];
    }, _f4gv['wxinputblur'] = function () {
      _f4gv['hideKeyboard']();
    }, _f4gv['hideKeyboard'] = function () {
      siy2a6['window']['wx']['offKeyboardConfirm'](), siy2a6['window']['wx']['offKeyboardInput'](), siy2a6['window']['wx']['hideKeyboard']({ 'success': function (_f34) {
          console['log']('隐藏键盘');
        }, 'fail': function (z89rdj) {
          console['log']('隐藏键盘出错:' + (z89rdj ? z89rdj['errMsg'] : ''));
        } });
    }, _f4gv;
  }(),
      h0xqdw = function () {
    function toclm() {}cpr$u(toclm, 'laya.wx.mini.MiniLoader');var g374f1 = toclm['prototype'];return g374f1['load'] = function (xq137, q1f473, vns_ay, hrd9zj, plto5c) {
      vns_ay === void 0x0 && (vns_ay = !![]), plto5c === void 0x0 && (plto5c = ![]);var r8$j9 = this;r8$j9['_url'] = xq137;if (xq137['indexOf']('data:image') === 0x0) r8$j9['_type'] = q1f473 = 'image';else r8$j9['_type'] = q1f473 || (q1f473 = r8$j9['getTypeFromUrl'](xq137));r8$j9['_cache'] = vns_ay, r8$j9['_data'] = null;var i2eba = 'ascii';if (xq137['indexOf']('.fnt') != -0x1) i2eba = 'utf8';else q1f473 == 'arraybuffer' && (i2eba = '');;var r89z = cul['getFileExtension'](xq137);if (toclm['_fileTypeArr']['indexOf'](r89z) != -0x1) siy2a6['EnvConfig']['load']['call'](this, xq137, q1f473, vns_ay, hrd9zj, plto5c);else {
        if (!z9drj8['getFileInfo'](xq137)) {
          if (xq137['indexOf']('layaNativeDir/') != -0x1) {
            if (siy2a6['isZiYu']) {
              var rhj9 = z9drj8['ziyuFileData'][xq137];r8$j9['onLoaded'](rhj9);return;
            } else {
              cosnole['log']('read read'), z9drj8['read'](xq137, i2eba, new lu5co(toclm, toclm['onReadNativeCallBack'], [i2eba, xq137, q1f473, vns_ay, hrd9zj, plto5c, r8$j9]));return;
            }
          }if (z9j8$r['rootPath'] == '') var u8zr = xq137;else u8zr = xq137['split'](z9j8$r['rootPath'])[0x0];xq137['indexOf']('http://') != -0x1 || xq137['indexOf']('https://') != -0x1 ? siy2a6['EnvConfig']['load']['call'](r8$j9, xq137, q1f473, vns_ay, hrd9zj, plto5c) : z9drj8['readFile'](u8zr, i2eba, new lu5co(toclm, toclm['onReadNativeCallBack'], [i2eba, xq137, q1f473, vns_ay, hrd9zj, plto5c, r8$j9]), xq137);
        } else siy2a6['EnvConfig']['load']['call'](this, xq137, q1f473, vns_ay, hrd9zj, plto5c);
      }
    }, g374f1['resMgrLoad'] = function (_y6sa, gnsfv_, sai, n_gv4f, jz9wd, x0jhw, sn_avy) {
      sai === void 0x0 && (sai = 0x0), n_gv4f === void 0x0 && (n_gv4f = ![]), jz9wd === void 0x0 && (jz9wd = ![]), x0jhw === void 0x0 && (x0jhw = 0x0), sn_avy === void 0x0 && (sn_avy = 0x3), _y6sa['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _y6sa), siy2a6['EnvConfig']['resMgrLoad'](_y6sa, (isy6a, f3g471, pr$c8u) => {
        toclm['prototype']['resMgrLoadCallBack'](isy6a, f3g471, pr$c8u, gnsfv_);
      }, sai, n_gv4f, jz9wd, x0jhw, sn_avy);
    }, g374f1['resMgrLoadCallBack'] = function (asny62, hz9wdj, cpr$8, jrzh9) {
      console['log']('buff:::', asny62, cpr$8, z9drj8['fileNativeDir'] + '///' + z9drj8['fileListName']), jrzh9(asny62, hz9wdj, cpr$8);
    }, g374f1['clearRes'] = function (opclu5, f31gv4) {
      f31gv4 === void 0x0 && (f31gv4 = ![]);var _vsna = this;_vsna['clearRes'](opclu5, f31gv4);var u$5pcl = z9drj8['getFileInfo'](opclu5);if (u$5pcl && (opclu5['indexOf']('http://') != -0x1 || opclu5['indexOf']('https://') != -0x1)) {
        var cpl5$u = u$5pcl['md5'],
            z8u9 = z9drj8['getFileNativePath'](cpl5$u);z9drj8['remove'](z8u9);
      }
    }, toclm['onReadNativeCallBack'] = function (xq0w, q7xw01, gsyn_v, rupc$8, u5pc, yn2s6, jh0wdx, z$89ur, _fgnv) {
      rupc$8 === void 0x0 && (rupc$8 = !![]), yn2s6 === void 0x0 && (yn2s6 = ![]), z$89ur === void 0x0 && (z$89ur = 0x0);if (!z$89ur) {
        var ulcp$5;if (gsyn_v == 'json' || gsyn_v == 'atlas') ulcp$5 = siy2a6['getJson'](_fgnv['data']);else gsyn_v == 'xml' ? ulcp$5 = cul['parseXMLFromString'](_fgnv['data']) : ulcp$5 = _fgnv['data'];jh0wdx['onLoaded'](ulcp$5), !siy2a6['isZiYu'] && siy2a6['isPosMsgYu'] && gsyn_v != 'arraybuffer' && wx['postMessage']({ 'url': q7xw01, 'data': ulcp$5, 'isLoad': !![] });
      } else z$89ur == 0x1 && siy2a6['EnvConfig']['load']['call'](jh0wdx, q7xw01, gsyn_v, rupc$8, u5pc, yn2s6);
    }, q0dhx(toclm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), toclm;
  }(),
      z9drj8 = function (ptl5) {
    function b26iea() {
      b26iea['__super']['call'](this);;
    }return cpr$u(b26iea, 'laya.wx.mini.MiniFileMgr', ptl5), b26iea['isLoadFile'] = function (lmo5c) {
      return b26iea['_fileTypeArr']['indexOf'](lmo5c) != -0x1 ? !![] : ![];
    }, b26iea['getFileInfo'] = function (fg_v43) {
      var qh0xwd = fg_v43['split']('?')[0x0],
          dhwzj9 = b26iea['filesListObj'][qh0xwd];if (dhwzj9 == null) return null;else return dhwzj9;return null;
    }, b26iea['onFileUpdate'] = function (wqhx0d, r98$uz) {
      var clmt5o = wqhx0d['split']('/'),
          lcp5 = clmt5o[clmt5o['length'] - 0x1],
          eab6i2 = b26iea['getFileInfo'](r98$uz);if (eab6i2 == null) b26iea['onSaveFile'](r98$uz, lcp5);else {
        if (eab6i2['readyUrl'] != r98$uz) b26iea['remove'](lcp5, r98$uz);
      }
    }, b26iea['exits'] = function (bi2ea, xqhdw) {
      var l5uoc = b26iea['getFileNativePath'](bi2ea);b26iea['fs']['getFileInfo']({ 'filePath': l5uoc, 'success': function (ploc5t) {
          xqhdw != null && xqhdw['runWith']([0x0, ploc5t]);
        }, 'fail': function (qwhxd0) {
          xqhdw != null && xqhdw['runWith']([0x1, qwhxd0]);
        } });
    }, b26iea['read'] = function (siya62, c5tlpo, ay6i2, q07x31) {
      c5tlpo === void 0x0 && (c5tlpo = 'ascill'), q07x31 === void 0x0 && (q07x31 = '');var dzw9jh;q07x31 != '' ? dzw9jh = b26iea['getFileNativePath'](siya62) : dzw9jh = siya62, b26iea['fs']['readFile']({ 'filePath': dzw9jh, 'encoding': c5tlpo, 'success': function (xq073) {
          ay6i2 != null && ay6i2['runWith']([0x0, xq073]);
        }, 'fail': function (g4_vfn) {
          if (g4_vfn && q07x31 != '') b26iea['down'](q07x31, c5tlpo, ay6i2, q07x31);else ay6i2 != null && ay6i2['runWith']([0x1]);
        } });
    }, b26iea['readNativeFile'] = function (ur8zp, wh90) {
      b26iea['fs']['readFile']({ 'filePath': ur8zp, 'encoding': '', 'success': function (v4g3f) {
          wh90 != null && wh90['runWith']([0x0]);
        }, 'fail': function ($9rzu) {
          wh90 != null && wh90['runWith']([0x1]);
        } });
    }, b26iea['down'] = function (w0qhx, eb, $rj98z, qx371) {
      eb === void 0x0 && (eb = 'ascill'), qx371 === void 0x0 && (qx371 = '');var a6sny_ = b26iea['getFileNativePath'](qx371),
          lo5ptc = b26iea['wxdown']({ 'url': w0qhx, 'filePath': a6sny_, 'success': function (nav_ys) {
          if (nav_ys['statusCode'] === 0xc8) b26iea['readFile'](nav_ys['filePath'], eb, $rj98z, qx371);
        }, 'fail': function (nf4v_g) {
          $rj98z != null && $rj98z['runWith']([0x1, nf4v_g]);
        } });lo5ptc['onProgressUpdate'](function (dq0) {
        $rj98z != null && $rj98z['runWith']([0x2, dq0['progress']]);
      });
    }, b26iea['readFile'] = function (hxw0q7, j8z9r, j9whd0, _nygs) {
      j8z9r === void 0x0 && (j8z9r = 'ascill'), _nygs === void 0x0 && (_nygs = ''), b26iea['fs']['readFile']({ 'filePath': hxw0q7, 'encoding': j8z9r, 'success': function (b6yai) {
          if (hxw0q7['indexOf']('http://') != -0x1 || hxw0q7['indexOf']('https://') != -0x1) b26iea['onFileUpdate'](hxw0q7, _nygs);j9whd0 != null && j9whd0['runWith']([0x0, b6yai]);
        }, 'fail': function (jxdwh) {
          if (jxdwh) j9whd0 != null && j9whd0['runWith']([0x1, jxdwh]);
        } });
    }, b26iea['downImg'] = function (zjdh, clpu, zd) {
      zd === void 0x0 && (zd = '');var q0xh = b26iea['wxdown']({ 'url': zjdh, 'success': function (xq413) {
          xq413['statusCode'] === 0xc8 && b26iea['copyFile'](xq413['tempFilePath'], zd, clpu);
        }, 'fail': function (uco5) {
          clpu != null && clpu['runWith']([0x1, uco5]);
        } });
    }, b26iea['copyFile'] = function (u$rz89, syav, jz$r) {
      var a_s = u$rz89['split']('/'),
          ltomc5 = a_s[a_s['length'] - 0x1],
          g_nsy = syav['split']('?')[0x0],
          lpc8$ = b26iea['getFileInfo'](syav),
          bei2 = b26iea['getFileNativePath'](ltomc5);b26iea['fs']['copyFile']({ 'srcPath': u$rz89, 'destPath': bei2, 'success': function (k5tlm) {
          if (!lpc8$) b26iea['onSaveFile'](syav, ltomc5), jz$r != null && jz$r['runWith']([0x0]);else {
            if (lpc8$['readyUrl'] != syav) b26iea['remove'](ltomc5, syav, jz$r);
          }
        }, 'fail': function (xq741) {
          jz$r != null && jz$r['runWith']([0x1, xq741]);
        } });
    }, b26iea['getFileNativePath'] = function (h0j9dw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + h0j9dw;
    }, b26iea['remove'] = function (_s6yan, z9$u, col5tm) {
      z9$u === void 0x0 && (z9$u = '');var f3_v4 = b26iea['getFileInfo'](z9$u),
          hzjr9d = b26iea['getFileNativePath'](f3_v4['md5']);dxwqh0['loader']['clearRes'](f3_v4['readyUrl']), b26iea['fs']['unlink']({ 'filePath': hzjr9d, 'success': function (qxhw70) {
          if (z9$u != '') b26iea['onSaveFile'](z9$u, _s6yan);col5tm != null && col5tm['runWith']([0x0]);
        }, 'fail': function (d98zjr) {} });
    }, b26iea['onSaveFile'] = function (yvgsn_, dr9jh) {
      var jz8r$9 = yvgsn_['split']('?')[0x0];b26iea['filesListObj'][jz8r$9] = { 'md5': dr9jh, 'readyUrl': yvgsn_ }, b26iea['fs']['writeFile']({ 'filePath': b26iea['fileNativeDir'] + '/' + b26iea['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b26iea['filesListObj']), 'success': function ($upl5) {
          console['log']('写入测试测试成功：', $upl5);
        }, 'fail': function (_gfns) {
          console['log']('写入测试测试失败：', _gfns);
        } });
    }, b26iea['existDir'] = function (zhwdj9, ruz89$) {
      b26iea['fs']['mkdir']({ 'dirPath': zhwdj9, 'success': function (o5cp) {
          ruz89$ != null && ruz89$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e6ia2b) {
          if (e6ia2b['errMsg']['indexOf']('file already exists') != -0x1) b26iea['readSync'](b26iea['fileListName'], 'utf8', ruz89$);else ruz89$ != null && ruz89$['runWith']([0x1, e6ia2b]);
        } });
    }, b26iea['readSync'] = function (gf4731, yi2, i6y2s, rz8u9) {
      yi2 === void 0x0 && (yi2 = 'ascill'), rz8u9 === void 0x0 && (rz8u9 = '');var rd98zj = b26iea['getFileNativePath'](gf4731),
          z98$u;try {
        z98$u = b26iea['fs']['readFileSync'](rd98zj), i6y2s != null && i6y2s['runWith']([0x0, { 'data': z98$u }]);
      } catch (l5cpu$) {
        i6y2s != null && i6y2s['runWith']([0x1]);
      }
    }, b26iea['readCache'] = function () {}, b26iea['writeCache'] = function (l$u8p) {
      var e26 = readyUrl['split']('?')[0x0];b26iea['filesListObj'][e26] = { 'md5': md5Name, 'readyUrl': readyUrl }, b26iea['fs']['writeFile']({ 'filePath': b26iea['fileNativeDir'] + '/' + b26iea['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b26iea['filesListObj']), 'success': function (po5ucl) {}, 'fail': function (dj0wh) {} });
    }, b26iea['setNativeFileDir'] = function ($uz8pr) {
      b26iea['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $uz8pr;
    }, b26iea['filesListObj'] = {}, b26iea['fileNativeDir'] = null, b26iea['fileListName'] = 'layaairfiles.txt', b26iea['ziyuFileData'] = {}, q0dhx(b26iea, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), b26iea;
  }(v31g),
      m5klto = function (whj0x) {
    function motcl5() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], motcl5['__super']['call'](this), this['_sound'] = motcl5['_createSound']();
    }cpr$u(motcl5, 'laya.wx.mini.MiniSound', whj0x);var xjwh0 = motcl5['prototype'];return xjwh0['load'] = function (p8uc$l) {
      var vgnf = this;p8uc$l = z9j8$r['formatURL'](p8uc$l), this['url'] = p8uc$l;if (motcl5['_audioCache'][p8uc$l]) {
        this['event']('complete');return;
      }function i62() {
        if (motcl5['_null'] != undefined) vgnf['_sound']['onCanplay'](motcl5['_null']), vgnf['_sound']['onError'](motcl5['_null']);else try {
          vgnf['_sound']['onCanplay'](null), vgnf['_sound']['onError'](null), motcl5['_null'] = null;
        } catch (ltmko) {
          console['warn']('[wxmini] _clearSound:' + ltmko), vgnf['_sound']['onCanplay'](fgv143), vgnf['_sound']['onError'](fgv143), motcl5['_null'] = fgv143;
        }
      }function lmto() {
        i62(), _fn['loaded'] = !![], _fn['event']('complete'), motcl5['_audioCache'][_fn['url']] = _fn;
      }function p$rzu(yan_6) {
        console['error']('errCode=' + yan_6['errCode'] + '  errMsg=' + yan_6['errMsg']), i62(), _fn['event']('error');
      }function fgv143() {}this['_sound']['onCanplay'](lmto), this['_sound']['onError'](p$rzu), this['_sound']['src'] = p8uc$l;var _fn = this;
    }, xjwh0['play'] = function (ia2by6, _4vgf3) {
      ia2by6 === void 0x0 && (ia2by6 = 0x0), _4vgf3 === void 0x0 && (_4vgf3 = 0x0);var w9jhd;if (this['url'] == _y6['_tMusic']) {
        if (!motcl5['_musicAudio']) motcl5['_musicAudio'] = motcl5['_createSound']();w9jhd = motcl5['_musicAudio'];
      } else w9jhd = motcl5['_createSound']();w9jhd['src'] = this['url'];var wh0j9 = new _yvsn(w9jhd);return wh0j9['url'] = this['url'], wh0j9['loops'] = _4vgf3, wh0j9['startTime'] = ia2by6, wh0j9['play'](), _y6['addChannel'](wh0j9), wh0j9;
    }, xjwh0['dispose'] = function () {
      var w9zjh = motcl5['_audioCache'][this['url']];w9zjh && (w9zjh['src'] = '', delete motcl5['_audioCache'][this['url']]);
    }, okml5(0x0, xjwh0, 'duration', function () {
      return this['_sound']['duration'];
    }), motcl5['_createSound'] = function () {
      return motcl5['_id']++, siy2a6['window']['wx']['createInnerAudioContext']();
    }, motcl5['_musicAudio'] = null, motcl5['_id'] = 0x0, motcl5['_audioCache'] = {}, motcl5['_null'] = undefined, motcl5;
  }(v31g),
      _yvsn = function (f4gv_) {
    function d9zh(p5ocl) {
      this['_audio'] = null, this['_onEnd'] = null, d9zh['__super']['call'](this), this['_audio'] = p5ocl, this['_onEnd'] = cul['bind'](this['__onEnd'], this), p5ocl['onEnded'](this['_onEnd']);
    }cpr$u(d9zh, 'laya.wx.mini.MiniSoundChannel', f4gv_);var nf_s = d9zh['prototype'];return nf_s['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dxwqh0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, nf_s['__onNull'] = function () {}, nf_s['play'] = function () {
      this['isStopped'] = ![], _y6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, nf_s['stop'] = function () {
      this['isStopped'] = !![], _y6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (d9zh['_null'] != undefined) this['_audio']['onEnded'](d9zh['_null']);else try {
        this['_audio']['onEnded'](null), d9zh['_null'] = null;
      } catch (cpol) {
        console['warn']('[wxmini] stop:' + cpol), this['_audio']['onEnded'](cul['bind'](this['__onNull'], this)), d9zh['_null'] = cul['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, nf_s['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, nf_s['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _y6['addChannel'](this), this['_audio']['play']();
    }, okml5(0x0, nf_s, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), okml5(0x0, nf_s, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), okml5(0x0, nf_s, 'volume', function () {
      return 0x1;
    }, function (gvny) {}), d9zh['_null'] = undefined, d9zh;
  }(f_3vg4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jzr89 in Laya) {
    var u5po = Laya[jzr89];u5po && u5po['__isclass'] && (exports[jzr89] = u5po);
  }
});