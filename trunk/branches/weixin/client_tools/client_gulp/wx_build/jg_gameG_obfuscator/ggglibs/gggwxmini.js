var m = wx.$g;
(function (window, document, t4dzo) {
  var $2jr6u = t4dzo['un'],
      sq8cl = t4dzo['uns'],
      ah1kix = t4dzo['static'],
      gqv7ye = t4dzo['class'],
      iaxk1h = t4dzo['getset'],
      _bp05i = t4dzo['__newvec'],
      v7wqey = laya['utils']['Browser'],
      r6m = laya['events']['Event'],
      mjur6 = laya['events']['EventDispatcher'],
      _b0tpf = laya['resource']['HTMLImage'],
      c89slg = laya['utils']['Handler'],
      dzt3o4 = laya['display']['Input'],
      v7sgc = laya['net']['Loader'],
      otzd = laya['maths']['Matrix'],
      qlsc8g = laya['renders']['Render'],
      zd23o = laya['utils']['RunDriver'],
      f4_t03 = laya['media']['Sound'],
      wh1kye = laya['media']['SoundChannel'],
      ye1wh = laya['media']['SoundManager'],
      zo2d4 = laya['display']['Stage'],
      h5abi = laya['net']['URL'],
      $ju26 = laya['utils']['Utils'],
      z3d6o = function () {
    function rj6() {}return gqv7ye(rj6, 'laya.wx.mini.MiniAdpter'), rj6['getJson'] = function (ju6rm) {
      return JSON['parse'](ju6rm);
    }, rj6['init'] = function ($mru, pb0i_) {
      $mru === void 0x0 && ($mru = ![]), pb0i_ === void 0x0 && (pb0i_ = ![]);if (rj6['_inited']) return;rj6['window'] = window;if (rj6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rj6['_inited'] = !![], rj6['isZiYu'] = pb0i_, rj6['isPosMsgYu'] = $mru, rj6['EnvConfig'] = {}, !rj6['isZiYu'] && (f4o['setNativeFileDir']('/layaairGame'), f4o['existDir'](f4o['fileNativeDir'], c89slg['create'](rj6, rj6['onMkdirCallBack']))), rj6['window']['focus'] = function () {}, t4dzo['getUrlPath'] = function () {}, rj6['window']['logtime'] = function (sq8gl) {}, rj6['window']['alertTimeLog'] = function (vqey7) {}, rj6['window']['resetShareInfo'] = function () {}, rj6['window']['CanvasRenderingContext2D'] = function () {}, rj6['window']['CanvasRenderingContext2D']['prototype'] = rj6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rj6['window']['document']['body']['appendChild'] = function () {}, rj6['EnvConfig']['pixelRatioInt'] = 0x0, zd23o['getPixelRatio'] = rj6['pixelRatio'], rj6['_preCreateElement'] = v7wqey['createElement'], v7wqey['createElement'] = rj6['createElement'], zd23o['createShaderCondition'] = rj6['createShaderCondition'], $ju26['parseXMLFromString'] = rj6['parseXMLFromString'], dzt3o4['_createInputElement'] = o23dz['_createInputElement'], rj6['EnvConfig']['load'] = v7sgc['prototype']['load'], v7sgc['prototype']['load'] = z6do2r['prototype']['load'], rj6['isZiYu'] && $mru && wx['onMessage'](function (ixh1k) {
        ixh1k['isLoad'] && (f4o['ziyuFileData'][ixh1k['url']] = ixh1k['data']);
      });
    }, rj6['onMkdirCallBack'] = function (wye7, z6rjd) {
      if (!wye7) f4o['filesListObj'] = JSON['parse'](z6rjd['data']);
    }, rj6['pixelRatio'] = function () {
      if (!rj6['EnvConfig']['pixelRatioInt']) try {
        var bpix5 = wx['getSystemInfoSync']();return rj6['EnvConfig']['pixelRatioInt'] = bpix5['pixelRatio'], bpix5 = bpix5, bpix5['pixelRatio'];
      } catch (a5ix) {}return rj6['EnvConfig']['pixelRatioInt'];
    }, rj6['createElement'] = function (qey7g) {
      if (qey7g == 'canvas') {
        var wyevk;return rj6['idx'] == 0x1 ? rj6['isZiYu'] ? (wyevk = sharedCanvas, wyevk['style'] = {}) : wyevk = window['canvas'] : wyevk = window['wx']['createCanvas'](), rj6['idx']++, wyevk;
      } else {
        if (qey7g == 'textarea' || qey7g == 'input') return rj6['onCreateInput'](qey7g);else {
          if (qey7g == 'div') {
            var f_ot34 = rj6['_preCreateElement'](qey7g);return f_ot34['contains'] = function (xaw1h) {
              return null;
            }, f_ot34['removeChild'] = function (ewyk7v) {}, f_ot34;
          } else return rj6['_preCreateElement'](qey7g);
        }
      }
    }, rj6['onCreateInput'] = function (xbp5ai) {
      var i1ahx5 = rj6['_preCreateElement'](xbp5ai);return i1ahx5['focus'] = o23dz['wxinputFocus'], i1ahx5['blur'] = o23dz['wxinputblur'], i1ahx5['style'] = {}, i1ahx5['value'] = 0x0, i1ahx5['parentElement'] = {}, i1ahx5['placeholder'] = {}, i1ahx5['type'] = {}, i1ahx5['setColor'] = function (xba5hi) {}, i1ahx5['setType'] = function ($r6umj) {}, i1ahx5['setFontFace'] = function (t_p0b) {}, i1ahx5['addEventListener'] = function (evygq) {}, i1ahx5['contains'] = function (r6oz) {
        return null;
      }, i1ahx5['removeChild'] = function (k1hey) {}, i1ahx5;
    }, rj6['createShaderCondition'] = function (o26drz) {
      var pt_b = this,
          ot4f_ = function () {
        var xh51ia = o26drz;return pt_b[o26drz['replace']('this.', '')];
      };return ot4f_;
    }, rj6['EnvConfig'] = null, rj6['window'] = null, rj6['_preCreateElement'] = null, rj6['_inited'] = ![], rj6['wxRequest'] = null, rj6['systemInfo'] = null, rj6['version'] = '0.0.1', rj6['isZiYu'] = ![], rj6['isPosMsgYu'] = ![], rj6['parseXMLFromString'] = function (dzto3) {
      var ceg7v, kw7eyv;dzto3 = dzto3['replace'](/>\s+</g, '><');try {
        ceg7v = new window['Parser']['DOMParser']()['parseFromString'](dzto3, 'text/xml');
      } catch (hik) {
        throw '需要引入xml解析库文件';
      }return ceg7v;
    }, rj6['idx'] = 0x1, rj6;
  }(),
      yev7w = function () {
    function ixh51() {}gqv7ye(ixh51, 'laya.wx.mini.MiniImage');var zro62d = ixh51['prototype'];return zro62d['_loadImage'] = function (qv7ye) {
      var p_05fb = this,
          t0p_f = ![];qv7ye['indexOf']('layaNativeDir/') == -0x1 && (t0p_f = !![], qv7ye = h5abi['formatURL'](qv7ye));if (!f4o['getFileInfo'](qv7ye)) {
        if (qv7ye['indexOf']('http://') != -0x1 || qv7ye['indexOf']('https://') != -0x1) f4o['downImg'](qv7ye, new c89slg(ixh51, ixh51['onDownImgCallBack'], [qv7ye, p_05fb]), qv7ye);else ixh51['onCreateImage'](qv7ye, p_05fb, !![]);
      } else ixh51['onCreateImage'](qv7ye, p_05fb, !t0p_f);
    }, ixh51['onDownImgCallBack'] = function (ur$j, qy7wev, ahw1kx) {
      if (!ahw1kx) ixh51['onCreateImage'](ur$j, qy7wev);else qy7wev['onError'](null);
    }, ixh51['onCreateImage'] = function (b05aip, _50ipb, $mj) {
      $mj === void 0x0 && ($mj = ![]);var hbxi;if (!$mj) {
        var vk1ew = f4o['getFileInfo'](b05aip),
            odz42 = vk1ew['md5'];hbxi = f4o['getFileNativePath'](odz42);
      } else hbxi = b05aip;if (_50ipb['imgCache'] == null) _50ipb['imgCache'] = {};var slc8g;function b_ip5() {
        slc8g['onload'] = null, slc8g['onerror'] = null, delete _50ipb['imgCache'][b05aip];
      };var p0b5f = function () {
        b_ip5(), _50ipb['onLoaded'](slc8g);
      },
          o423 = function () {
        b_ip5(), _50ipb['event']('error', 'Load image failed');
      };_50ipb['_type'] == 'nativeimage' ? (slc8g = new v7wqey['window']['Image'](), slc8g['crossOrigin'] = '', slc8g['onload'] = p0b5f, slc8g['onerror'] = o423, slc8g['src'] = hbxi, _50ipb['imgCache'][b05aip] = slc8g) : new _b0tpf['create'](hbxi, { 'onload': p0b5f, 'onerror': o423, 'onCreate': function (zdo632) {
          slc8g = zdo632, _50ipb['imgCache'][b05aip] = zdo632;
        } });
    }, ixh51;
  }(),
      o23dz = function () {
    function do423z() {}return gqv7ye(do423z, 'laya.wx.mini.MiniInput'), do423z['_createInputElement'] = function () {
      dzt3o4['_initInput'](dzt3o4['area'] = v7wqey['createElement']('textarea')), dzt3o4['_initInput'](dzt3o4['input'] = v7wqey['createElement']('input')), dzt3o4['inputContainer'] = v7wqey['createElement']('div'), dzt3o4['inputContainer']['style']['position'] = 'absolute', dzt3o4['inputContainer']['style']['zIndex'] = 0x186a0, v7wqey['container']['appendChild'](dzt3o4['inputContainer']), dzt3o4['inputContainer']['setPos'] = function (b5p_f, kyev) {
        dzt3o4['inputContainer']['style']['left'] = b5p_f + 'px', dzt3o4['inputContainer']['style']['top'] = kyev + 'px';
      }, t4dzo['stage']['on']('resize', null, do423z['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sclq8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ye1wh['_soundClass'] = keyw1v, ye1wh['_musicClass'] = keyw1v;
    }, do423z['_onStageResize'] = function () {
      var haxk1w = t4dzo['stage']['_canvasTransform']['identity']();haxk1w['scale'](v7wqey['width'] / qlsc8g['canvas']['width'] / zd23o['getPixelRatio'](), v7wqey['height'] / qlsc8g['canvas']['height'] / zd23o['getPixelRatio']());
    }, do423z['wxinputFocus'] = function (c7qs) {
      var v7wqye = dzt3o4['inputElement']['target'];if (v7wqye && !v7wqye['editable']) return;z3d6o['window']['wx']['offKeyboardConfirm'](), z3d6o['window']['wx']['offKeyboardInput'](), z3d6o['window']['wx']['showKeyboard']({ 'defaultValue': v7wqye['text'], 'maxLength': v7wqye['maxChars'], 'multiple': v7wqye['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d423o) {}, 'fail': function (gcevq) {} }), z3d6o['window']['wx']['onKeyboardConfirm'](function (aibh) {
        var qcvg7s = aibh ? aibh['value'] : '';v7wqye['text'] = qcvg7s, v7wqye['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), z3d6o['window']['wx']['onKeyboardInput'](function (tbp_0f) {
        var $26zrj = tbp_0f ? tbp_0f['value'] : '';if (!v7wqye['multiline']) {
          if ($26zrj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }v7wqye['text'] = $26zrj, v7wqye['event']('input');
      });
    }, do423z['inputEnter'] = function () {
      dzt3o4['inputElement']['target']['focus'] = ![];
    }, do423z['wxinputblur'] = function () {
      do423z['hideKeyboard']();
    }, do423z['hideKeyboard'] = function () {
      z3d6o['window']['wx']['offKeyboardConfirm'](), z3d6o['window']['wx']['offKeyboardInput'](), z3d6o['window']['wx']['hideKeyboard']({ 'success': function (qc7s8g) {
          console['log']('隐藏键盘');
        }, 'fail': function (bi5p0a) {
          console['log']('隐藏键盘出错:' + (bi5p0a ? bi5p0a['errMsg'] : ''));
        } });
    }, do423z;
  }(),
      z6do2r = function () {
    function z2odr6() {}gqv7ye(z2odr6, 'laya.wx.mini.MiniLoader');var h1a5xi = z2odr6['prototype'];return h1a5xi['load'] = function (bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe) {
      yhx1wk === void 0x0 && (yhx1wk = !![]), yv7wqe === void 0x0 && (yv7wqe = ![]);var ew1kh = this;ew1kh['_url'] = bp_0f;if (bp_0f['indexOf']('data:image') === 0x0) ew1kh['_type'] = r6doz2 = 'image';else ew1kh['_type'] = r6doz2 || (r6doz2 = ew1kh['getTypeFromUrl'](bp_0f));ew1kh['_cache'] = yhx1wk, ew1kh['_data'] = null;var xbipa = 'ascii';if (bp_0f['indexOf']('.fnt') != -0x1) xbipa = 'utf8';else r6doz2 == 'arraybuffer' && (xbipa = '');;var x1akhi = $ju26['getFileExtension'](bp_0f);if (z2odr6['_fileTypeArr']['indexOf'](x1akhi) != -0x1) z3d6o['EnvConfig']['load']['call'](this, bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe);else {
        if (!f4o['getFileInfo'](bp_0f)) {
          if (bp_0f['indexOf']('layaNativeDir/') != -0x1) {
            if (z3d6o['isZiYu']) {
              var _t = f4o['ziyuFileData'][bp_0f];ew1kh['onLoaded'](_t);return;
            } else {
              cosnole['log']('read read'), f4o['read'](bp_0f, xbipa, new c89slg(z2odr6, z2odr6['onReadNativeCallBack'], [xbipa, bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe, ew1kh]));return;
            }
          }if (h5abi['rootPath'] == '') var aih5x1 = bp_0f;else aih5x1 = bp_0f['split'](h5abi['rootPath'])[0x0];bp_0f['indexOf']('http://') != -0x1 || bp_0f['indexOf']('https://') != -0x1 ? z3d6o['EnvConfig']['load']['call'](ew1kh, bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe) : f4o['readFile'](aih5x1, xbipa, new c89slg(z2odr6, z2odr6['onReadNativeCallBack'], [xbipa, bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe, ew1kh]), bp_0f);
        } else z3d6o['EnvConfig']['load']['call'](this, bp_0f, r6doz2, yhx1wk, xkia1, yv7wqe);
      }
    }, h1a5xi['resMgrLoad'] = function (xbpa5i, _p05ib, qye7gv, e1vkw, m$r6, _bp0t, vsgc7q) {
      qye7gv === void 0x0 && (qye7gv = 0x0), e1vkw === void 0x0 && (e1vkw = ![]), m$r6 === void 0x0 && (m$r6 = ![]), _bp0t === void 0x0 && (_bp0t = 0x0), vsgc7q === void 0x0 && (vsgc7q = 0x3), xbpa5i['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xbpa5i), z3d6o['EnvConfig']['resMgrLoad'](xbpa5i, (y7kve, t4_03f, ih5x) => {
        z2odr6['prototype']['resMgrLoadCallBack'](y7kve, t4_03f, ih5x, _p05ib);
      }, qye7gv, e1vkw, m$r6, _bp0t, vsgc7q);
    }, h1a5xi['resMgrLoadCallBack'] = function (k1ywv, bf_t0, xp, ozdr) {
      console['log']('buff:::', k1ywv, xp, f4o['fileNativeDir'] + '///' + f4o['fileListName']), ozdr(k1ywv, bf_t0, xp);
    }, h1a5xi['clearRes'] = function (eyvw7, aib5p0) {
      aib5p0 === void 0x0 && (aib5p0 = ![]);var cqv = this;cqv['clearRes'](eyvw7, aib5p0);var fdt3 = f4o['getFileInfo'](eyvw7);if (fdt3 && (eyvw7['indexOf']('http://') != -0x1 || eyvw7['indexOf']('https://') != -0x1)) {
        var $mr6uj = fdt3['md5'],
            lgsq8c = f4o['getFileNativePath']($mr6uj);f4o['remove'](lgsq8c);
      }
    }, z2odr6['onReadNativeCallBack'] = function (yehkw1, otd34z, j6u2$r, eyk7wv, axhki, oz63d2, clq, r6zd2, w7evk) {
      eyk7wv === void 0x0 && (eyk7wv = !![]), oz63d2 === void 0x0 && (oz63d2 = ![]), r6zd2 === void 0x0 && (r6zd2 = 0x0);if (!r6zd2) {
        var t3_of;if (j6u2$r == 'json' || j6u2$r == 'atlas') t3_of = z3d6o['getJson'](w7evk['data']);else j6u2$r == 'xml' ? t3_of = $ju26['parseXMLFromString'](w7evk['data']) : t3_of = w7evk['data'];clq['onLoaded'](t3_of), !z3d6o['isZiYu'] && z3d6o['isPosMsgYu'] && j6u2$r != 'arraybuffer' && wx['postMessage']({ 'url': otd34z, 'data': t3_of, 'isLoad': !![] });
      } else r6zd2 == 0x1 && z3d6o['EnvConfig']['load']['call'](clq, otd34z, j6u2$r, eyk7wv, axhki, oz63d2);
    }, ah1kix(z2odr6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), z2odr6;
  }(),
      f4o = function (s8lcg) {
    function b0pf_5() {
      b0pf_5['__super']['call'](this);;
    }return gqv7ye(b0pf_5, 'laya.wx.mini.MiniFileMgr', s8lcg), b0pf_5['isLoadFile'] = function (f43_0) {
      return b0pf_5['_fileTypeArr']['indexOf'](f43_0) != -0x1 ? !![] : ![];
    }, b0pf_5['getFileInfo'] = function (ax1hki) {
      var xah1i = ax1hki['split']('?')[0x0],
          z432d = b0pf_5['filesListObj'][xah1i];if (z432d == null) return null;else return z432d;return null;
    }, b0pf_5['onFileUpdate'] = function (t_43f, f34dt) {
      var pibxa = t_43f['split']('/'),
          s8c9gl = pibxa[pibxa['length'] - 0x1],
          h15 = b0pf_5['getFileInfo'](f34dt);if (h15 == null) b0pf_5['onSaveFile'](f34dt, s8c9gl);else {
        if (h15['readyUrl'] != f34dt) b0pf_5['remove'](s8c9gl, f34dt);
      }
    }, b0pf_5['exits'] = function (r6u2$j, f_0t4) {
      var ruj2 = b0pf_5['getFileNativePath'](r6u2$j);b0pf_5['fs']['getFileInfo']({ 'filePath': ruj2, 'success': function (xk1ha) {
          f_0t4 != null && f_0t4['runWith']([0x0, xk1ha]);
        }, 'fail': function (xw1hak) {
          f_0t4 != null && f_0t4['runWith']([0x1, xw1hak]);
        } });
    }, b0pf_5['read'] = function ($ru6j, vyqw7e, to_f3, _4ft30) {
      vyqw7e === void 0x0 && (vyqw7e = 'ascill'), _4ft30 === void 0x0 && (_4ft30 = '');var abih5;_4ft30 != '' ? abih5 = b0pf_5['getFileNativePath']($ru6j) : abih5 = $ru6j, b0pf_5['fs']['readFile']({ 'filePath': abih5, 'encoding': vyqw7e, 'success': function (i_b05) {
          to_f3 != null && to_f3['runWith']([0x0, i_b05]);
        }, 'fail': function (slcgq8) {
          if (slcgq8 && _4ft30 != '') b0pf_5['down'](_4ft30, vyqw7e, to_f3, _4ft30);else to_f3 != null && to_f3['runWith']([0x1]);
        } });
    }, b0pf_5['readNativeFile'] = function (wv1yek, r26u$) {
      b0pf_5['fs']['readFile']({ 'filePath': wv1yek, 'encoding': '', 'success': function (d3tz4o) {
          r26u$ != null && r26u$['runWith']([0x0]);
        }, 'fail': function (cgev7q) {
          r26u$ != null && r26u$['runWith']([0x1]);
        } });
    }, b0pf_5['down'] = function (y1hkxw, j2r$u6, d632o, sl98) {
      j2r$u6 === void 0x0 && (j2r$u6 = 'ascill'), sl98 === void 0x0 && (sl98 = '');var jdz62 = b0pf_5['getFileNativePath'](sl98),
          axih15 = b0pf_5['wxdown']({ 'url': y1hkxw, 'filePath': jdz62, 'success': function (_t04) {
          if (_t04['statusCode'] === 0xc8) b0pf_5['readFile'](_t04['filePath'], j2r$u6, d632o, sl98);
        }, 'fail': function (gc7s8) {
          d632o != null && d632o['runWith']([0x1, gc7s8]);
        } });axih15['onProgressUpdate'](function (t_p0) {
        d632o != null && d632o['runWith']([0x2, t_p0['progress']]);
      });
    }, b0pf_5['readFile'] = function (_tpf4, m6r, j$zr, r6$u2) {
      m6r === void 0x0 && (m6r = 'ascill'), r6$u2 === void 0x0 && (r6$u2 = ''), b0pf_5['fs']['readFile']({ 'filePath': _tpf4, 'encoding': m6r, 'success': function (vwky) {
          if (_tpf4['indexOf']('http://') != -0x1 || _tpf4['indexOf']('https://') != -0x1) b0pf_5['onFileUpdate'](_tpf4, r6$u2);j$zr != null && j$zr['runWith']([0x0, vwky]);
        }, 'fail': function (wykx) {
          if (wykx) j$zr != null && j$zr['runWith']([0x1, wykx]);
        } });
    }, b0pf_5['downImg'] = function (cs98g, ahix5b, baih5) {
      baih5 === void 0x0 && (baih5 = '');var d4o3 = b0pf_5['wxdown']({ 'url': cs98g, 'success': function (s7gq8c) {
          s7gq8c['statusCode'] === 0xc8 && b0pf_5['copyFile'](s7gq8c['tempFilePath'], baih5, ahix5b);
        }, 'fail': function (ahi5xb) {
          ahix5b != null && ahix5b['runWith']([0x1, ahi5xb]);
        } });
    }, b0pf_5['copyFile'] = function (lgscq, p5, f4to_3) {
      var clg89s = lgscq['split']('/'),
          fbp_t = clg89s[clg89s['length'] - 0x1],
          ab5i0p = p5['split']('?')[0x0],
          ot3dz = b0pf_5['getFileInfo'](p5),
          b5_ip = b0pf_5['getFileNativePath'](fbp_t);b0pf_5['fs']['copyFile']({ 'srcPath': lgscq, 'destPath': b5_ip, 'success': function (hxy) {
          if (!ot3dz) b0pf_5['onSaveFile'](p5, fbp_t), f4to_3 != null && f4to_3['runWith']([0x0]);else {
            if (ot3dz['readyUrl'] != p5) b0pf_5['remove'](fbp_t, p5, f4to_3);
          }
        }, 'fail': function (pa05ib) {
          f4to_3 != null && f4to_3['runWith']([0x1, pa05ib]);
        } });
    }, b0pf_5['getFileNativePath'] = function (p_fb) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p_fb;
    }, b0pf_5['remove'] = function (_pf05, $2jur6, ft_o4) {
      $2jur6 === void 0x0 && ($2jur6 = '');var d4ft3o = b0pf_5['getFileInfo']($2jur6),
          h5axi = b0pf_5['getFileNativePath'](d4ft3o['md5']);t4dzo['loader']['clearRes'](d4ft3o['readyUrl']), b0pf_5['fs']['unlink']({ 'filePath': h5axi, 'success': function (vscg7) {
          if ($2jur6 != '') b0pf_5['onSaveFile']($2jur6, _pf05);ft_o4 != null && ft_o4['runWith']([0x0]);
        }, 'fail': function (e7gvqc) {} });
    }, b0pf_5['onSaveFile'] = function (t3do4, qg7s8) {
      var v7egcq = t3do4['split']('?')[0x0];b0pf_5['filesListObj'][v7egcq] = { 'md5': qg7s8, 'readyUrl': t3do4 }, b0pf_5['fs']['writeFile']({ 'filePath': b0pf_5['fileNativeDir'] + '/' + b0pf_5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b0pf_5['filesListObj']), 'success': function (ab50pi) {
          console['log']('写入测试测试成功：', ab50pi);
        }, 'fail': function (jz6d2r) {
          console['log']('写入测试测试失败：', jz6d2r);
        } });
    }, b0pf_5['existDir'] = function (b0ptf, iahxk) {
      b0pf_5['fs']['mkdir']({ 'dirPath': b0ptf, 'success': function (iab5p) {
          iahxk != null && iahxk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kw7ey) {
          if (kw7ey['errMsg']['indexOf']('file already exists') != -0x1) b0pf_5['readSync'](b0pf_5['fileListName'], 'utf8', iahxk);else iahxk != null && iahxk['runWith']([0x1, kw7ey]);
        } });
    }, b0pf_5['readSync'] = function (g8csl, cegv7q, cgql, k1ey) {
      cegv7q === void 0x0 && (cegv7q = 'ascill'), k1ey === void 0x0 && (k1ey = '');var qsv7c = b0pf_5['getFileNativePath'](g8csl),
          t04_3f;try {
        t04_3f = b0pf_5['fs']['readFileSync'](qsv7c), cgql != null && cgql['runWith']([0x0, { 'data': t04_3f }]);
      } catch (fp_50b) {
        cgql != null && cgql['runWith']([0x1]);
      }
    }, b0pf_5['readCache'] = function () {}, b0pf_5['writeCache'] = function (axbi5) {
      var hweyk = readyUrl['split']('?')[0x0];b0pf_5['filesListObj'][hweyk] = { 'md5': md5Name, 'readyUrl': readyUrl }, b0pf_5['fs']['writeFile']({ 'filePath': b0pf_5['fileNativeDir'] + '/' + b0pf_5['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](b0pf_5['filesListObj']), 'success': function (ax5ib) {}, 'fail': function (scq87g) {} });
    }, b0pf_5['setNativeFileDir'] = function (vs7cgq) {
      b0pf_5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vs7cgq;
    }, b0pf_5['filesListObj'] = {}, b0pf_5['fileNativeDir'] = null, b0pf_5['fileListName'] = 'layaairfiles.txt', b0pf_5['ziyuFileData'] = {}, ah1kix(b0pf_5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), b0pf_5;
  }(mjur6),
      keyw1v = function (z43d2) {
    function kxhyw1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], kxhyw1['__super']['call'](this), this['_sound'] = kxhyw1['_createSound']();
    }gqv7ye(kxhyw1, 'laya.wx.mini.MiniSound', z43d2);var _i5pb = kxhyw1['prototype'];return _i5pb['load'] = function (k1wev) {
      var o6dr2z = this;k1wev = h5abi['formatURL'](k1wev), this['url'] = k1wev;if (kxhyw1['_audioCache'][k1wev]) {
        this['event']('complete');return;
      }function tp40_f() {
        if (kxhyw1['_null'] != undefined) o6dr2z['_sound']['onCanplay'](kxhyw1['_null']), o6dr2z['_sound']['onError'](kxhyw1['_null']);else try {
          o6dr2z['_sound']['onCanplay'](null), o6dr2z['_sound']['onError'](null), kxhyw1['_null'] = null;
        } catch (gq7c) {
          console['warn']('[wxmini] _clearSound:' + gq7c), o6dr2z['_sound']['onCanplay'](scq8g7), o6dr2z['_sound']['onError'](scq8g7), kxhyw1['_null'] = scq8g7;
        }
      }function ka1hx() {
        tp40_f(), _ib50p['loaded'] = !![], _ib50p['event']('complete'), kxhyw1['_audioCache'][_ib50p['url']] = _ib50p;
      }function cg7svq(c7vgsq) {
        console['error']('errCode=' + c7vgsq['errCode'] + '  errMsg=' + c7vgsq['errMsg']), tp40_f(), _ib50p['event']('error');
      }function scq8g7() {}this['_sound']['onCanplay'](ka1hx), this['_sound']['onError'](cg7svq), this['_sound']['src'] = k1wev;var _ib50p = this;
    }, _i5pb['play'] = function (tofd, zo43d) {
      tofd === void 0x0 && (tofd = 0x0), zo43d === void 0x0 && (zo43d = 0x0);var ix5hb;if (this['url'] == ye1wh['_tMusic']) {
        if (!kxhyw1['_musicAudio']) kxhyw1['_musicAudio'] = kxhyw1['_createSound']();ix5hb = kxhyw1['_musicAudio'];
      } else ix5hb = kxhyw1['_createSound']();ix5hb['src'] = this['url'];var _t34of = new xwahk1(ix5hb);return _t34of['url'] = this['url'], _t34of['loops'] = zo43d, _t34of['startTime'] = tofd, _t34of['play'](), ye1wh['addChannel'](_t34of), _t34of;
    }, _i5pb['dispose'] = function () {
      var a0b5 = kxhyw1['_audioCache'][this['url']];a0b5 && (a0b5['src'] = '', delete kxhyw1['_audioCache'][this['url']]);
    }, iaxk1h(0x0, _i5pb, 'duration', function () {
      return this['_sound']['duration'];
    }), kxhyw1['_createSound'] = function () {
      return kxhyw1['_id']++, z3d6o['window']['wx']['createInnerAudioContext']();
    }, kxhyw1['_musicAudio'] = null, kxhyw1['_id'] = 0x0, kxhyw1['_audioCache'] = {}, kxhyw1['_null'] = undefined, kxhyw1;
  }(mjur6),
      xwahk1 = function (ve7yg) {
    function wke1yh(u6j$) {
      this['_audio'] = null, this['_onEnd'] = null, wke1yh['__super']['call'](this), this['_audio'] = u6j$, this['_onEnd'] = $ju26['bind'](this['__onEnd'], this), u6j$['onEnded'](this['_onEnd']);
    }gqv7ye(wke1yh, 'laya.wx.mini.MiniSoundChannel', ve7yg);var _5bi0 = wke1yh['prototype'];return _5bi0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t4dzo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _5bi0['__onNull'] = function () {}, _5bi0['play'] = function () {
      this['isStopped'] = ![], ye1wh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _5bi0['stop'] = function () {
      this['isStopped'] = !![], ye1wh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wke1yh['_null'] != undefined) this['_audio']['onEnded'](wke1yh['_null']);else try {
        this['_audio']['onEnded'](null), wke1yh['_null'] = null;
      } catch (w7yvk) {
        console['warn']('[wxmini] stop:' + w7yvk), this['_audio']['onEnded']($ju26['bind'](this['__onNull'], this)), wke1yh['_null'] = $ju26['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _5bi0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _5bi0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ye1wh['addChannel'](this), this['_audio']['play']();
    }, iaxk1h(0x0, _5bi0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), iaxk1h(0x0, _5bi0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), iaxk1h(0x0, _5bi0, 'volume', function () {
      return 0x1;
    }, function (qg7vye) {}), wke1yh['_null'] = undefined, wke1yh;
  }(wh1kye);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fpt0_4 in Laya) {
    var d62zo = Laya[fpt0_4];d62zo && d62zo['__isclass'] && (exports[fpt0_4] = d62zo);
  }
});