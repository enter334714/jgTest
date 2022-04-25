var m = wx.$g;
(function (window, document, zo2dr6) {
  var cslg9 = zo2dr6['un'],
      cgqs = zo2dr6['uns'],
      kyhw1e = zo2dr6['static'],
      y1kwhx = zo2dr6['class'],
      u26r$ = zo2dr6['getset'],
      v7wy = zo2dr6['__newvec'],
      ecg7 = laya['utils']['Browser'],
      yhe1wk = laya['events']['Event'],
      ujr62$ = laya['events']['EventDispatcher'],
      q7vgye = laya['resource']['HTMLImage'],
      kve7yw = laya['utils']['Handler'],
      pt_bf = laya['display']['Input'],
      bt_f0 = laya['net']['Loader'],
      slc8 = laya['maths']['Matrix'],
      qegc = laya['renders']['Render'],
      ey7gqv = laya['utils']['RunDriver'],
      ve7wky = laya['media']['Sound'],
      h1a5x = laya['media']['SoundChannel'],
      cegq7 = laya['media']['SoundManager'],
      iakx1h = laya['display']['Stage'],
      t430f = laya['net']['URL'],
      kia1hx = laya['utils']['Utils'],
      p4f0 = function () {
    function pft_04() {}return y1kwhx(pft_04, 'laya.wx.mini.MiniAdpter'), pft_04['getJson'] = function (jzr6) {
      return JSON['parse'](jzr6);
    }, pft_04['init'] = function (qegy7v, hxi5) {
      qegy7v === void 0x0 && (qegy7v = ![]), hxi5 === void 0x0 && (hxi5 = ![]);if (pft_04['_inited']) return;pft_04['window'] = window;if (pft_04['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pft_04['_inited'] = !![], pft_04['isZiYu'] = hxi5, pft_04['isPosMsgYu'] = qegy7v, pft_04['EnvConfig'] = {}, !pft_04['isZiYu'] && (j2ur$['setNativeFileDir']('/layaairGame'), j2ur$['existDir'](j2ur$['fileNativeDir'], kve7yw['create'](pft_04, pft_04['onMkdirCallBack']))), pft_04['window']['focus'] = function () {}, zo2dr6['getUrlPath'] = function () {}, pft_04['window']['logtime'] = function (k1ehw) {}, pft_04['window']['alertTimeLog'] = function (b0p5ia) {}, pft_04['window']['resetShareInfo'] = function () {}, pft_04['window']['CanvasRenderingContext2D'] = function () {}, pft_04['window']['CanvasRenderingContext2D']['prototype'] = pft_04['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pft_04['window']['document']['body']['appendChild'] = function () {}, pft_04['EnvConfig']['pixelRatioInt'] = 0x0, ey7gqv['getPixelRatio'] = pft_04['pixelRatio'], pft_04['_preCreateElement'] = ecg7['createElement'], ecg7['createElement'] = pft_04['createElement'], ey7gqv['createShaderCondition'] = pft_04['createShaderCondition'], kia1hx['parseXMLFromString'] = pft_04['parseXMLFromString'], pt_bf['_createInputElement'] = _043f['_createInputElement'], pft_04['EnvConfig']['load'] = bt_f0['prototype']['load'], bt_f0['prototype']['load'] = kyv1ew['prototype']['load'], pft_04['isZiYu'] && qegy7v && wx['onMessage'](function ($zr6) {
        $zr6['isLoad'] && (j2ur$['ziyuFileData'][$zr6['url']] = $zr6['data']);
      });
    }, pft_04['onMkdirCallBack'] = function (um$rj, i5hxba) {
      if (!um$rj) j2ur$['filesListObj'] = JSON['parse'](i5hxba['data']);
    }, pft_04['pixelRatio'] = function () {
      if (!pft_04['EnvConfig']['pixelRatioInt']) try {
        var z6drj = wx['getSystemInfoSync']();return pft_04['EnvConfig']['pixelRatioInt'] = z6drj['pixelRatio'], z6drj = z6drj, z6drj['pixelRatio'];
      } catch (d26oz) {}return pft_04['EnvConfig']['pixelRatioInt'];
    }, pft_04['createElement'] = function (cvegq) {
      if (cvegq == 'canvas') {
        var cl8sqg;return pft_04['idx'] == 0x1 ? pft_04['isZiYu'] ? (cl8sqg = sharedCanvas, cl8sqg['style'] = {}) : cl8sqg = window['canvas'] : cl8sqg = window['wx']['createCanvas'](), pft_04['idx']++, cl8sqg;
      } else {
        if (cvegq == 'textarea' || cvegq == 'input') return pft_04['onCreateInput'](cvegq);else {
          if (cvegq == 'div') {
            var tod4f = pft_04['_preCreateElement'](cvegq);return tod4f['contains'] = function (wvyq7e) {
              return null;
            }, tod4f['removeChild'] = function (x1yh) {}, tod4f;
          } else return pft_04['_preCreateElement'](cvegq);
        }
      }
    }, pft_04['onCreateInput'] = function (eyq7wv) {
      var d3zo26 = pft_04['_preCreateElement'](eyq7wv);return d3zo26['focus'] = _043f['wxinputFocus'], d3zo26['blur'] = _043f['wxinputblur'], d3zo26['style'] = {}, d3zo26['value'] = 0x0, d3zo26['parentElement'] = {}, d3zo26['placeholder'] = {}, d3zo26['type'] = {}, d3zo26['setColor'] = function (vwyqe7) {}, d3zo26['setType'] = function ($6mjr) {}, d3zo26['setFontFace'] = function (zdro26) {}, d3zo26['addEventListener'] = function (wevk1) {}, d3zo26['contains'] = function (zod3t4) {
        return null;
      }, d3zo26['removeChild'] = function (s8g7) {}, d3zo26;
    }, pft_04['createShaderCondition'] = function (_tf430) {
      var p0tf4 = this,
          ftbp = function () {
        var evgqc = _tf430;return p0tf4[_tf430['replace']('this.', '')];
      };return ftbp;
    }, pft_04['EnvConfig'] = null, pft_04['window'] = null, pft_04['_preCreateElement'] = null, pft_04['_inited'] = ![], pft_04['wxRequest'] = null, pft_04['systemInfo'] = null, pft_04['version'] = '0.0.1', pft_04['isZiYu'] = ![], pft_04['isPosMsgYu'] = ![], pft_04['parseXMLFromString'] = function (i0_b) {
      var scv7qg, wvke1;i0_b = i0_b['replace'](/>\s+</g, '><');try {
        scv7qg = new window['Parser']['DOMParser']()['parseFromString'](i0_b, 'text/xml');
      } catch (o3df4t) {
        throw '需要引入xml解析库文件';
      }return scv7qg;
    }, pft_04['idx'] = 0x1, pft_04;
  }(),
      qcg = function () {
    function gvqc() {}y1kwhx(gvqc, 'laya.wx.mini.MiniImage');var k1wyhx = gvqc['prototype'];return k1wyhx['_loadImage'] = function (pax) {
      var j6r2u = this,
          oz23d = ![];pax['indexOf']('layaNativeDir/') == -0x1 && (oz23d = !![], pax = t430f['formatURL'](pax));if (!j2ur$['getFileInfo'](pax)) {
        if (pax['indexOf']('http://') != -0x1 || pax['indexOf']('https://') != -0x1) j2ur$['downImg'](pax, new kve7yw(gvqc, gvqc['onDownImgCallBack'], [pax, j6r2u]), pax);else gvqc['onCreateImage'](pax, j6r2u, !![]);
      } else gvqc['onCreateImage'](pax, j6r2u, !oz23d);
    }, gvqc['onDownImgCallBack'] = function (k1wev, ibp5x, y1wkev) {
      if (!y1wkev) gvqc['onCreateImage'](k1wev, ibp5x);else ibp5x['onError'](null);
    }, gvqc['onCreateImage'] = function (bxpi, t0bp, r6mju$) {
      r6mju$ === void 0x0 && (r6mju$ = ![]);var s8cq;if (!r6mju$) {
        var gs7c8q = j2ur$['getFileInfo'](bxpi),
            ai5pb0 = gs7c8q['md5'];s8cq = j2ur$['getFileNativePath'](ai5pb0);
      } else s8cq = bxpi;if (t0bp['imgCache'] == null) t0bp['imgCache'] = {};var hi1xa;function _4t3() {
        hi1xa['onload'] = null, hi1xa['onerror'] = null, delete t0bp['imgCache'][bxpi];
      };var ye1kwh = function () {
        _4t3(), t0bp['onLoaded'](hi1xa);
      },
          r$mju6 = function () {
        _4t3(), t0bp['event']('error', 'Load image failed');
      };t0bp['_type'] == 'nativeimage' ? (hi1xa = new ecg7['window']['Image'](), hi1xa['crossOrigin'] = '', hi1xa['onload'] = ye1kwh, hi1xa['onerror'] = r$mju6, hi1xa['src'] = s8cq, t0bp['imgCache'][bxpi] = hi1xa) : new q7vgye['create'](s8cq, { 'onload': ye1kwh, 'onerror': r$mju6, 'onCreate': function (x1a) {
          hi1xa = x1a, t0bp['imgCache'][bxpi] = x1a;
        } });
    }, gvqc;
  }(),
      _043f = function () {
    function ve7y() {}return y1kwhx(ve7y, 'laya.wx.mini.MiniInput'), ve7y['_createInputElement'] = function () {
      pt_bf['_initInput'](pt_bf['area'] = ecg7['createElement']('textarea')), pt_bf['_initInput'](pt_bf['input'] = ecg7['createElement']('input')), pt_bf['inputContainer'] = ecg7['createElement']('div'), pt_bf['inputContainer']['style']['position'] = 'absolute', pt_bf['inputContainer']['style']['zIndex'] = 0x186a0, ecg7['container']['appendChild'](pt_bf['inputContainer']), pt_bf['inputContainer']['setPos'] = function (gq7sc8, _0tbpf) {
        pt_bf['inputContainer']['style']['left'] = gq7sc8 + 'px', pt_bf['inputContainer']['style']['top'] = _0tbpf + 'px';
      }, zo2dr6['stage']['on']('resize', null, ve7y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (c7gvsq) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), cegq7['_soundClass'] = zo, cegq7['_musicClass'] = zo, window['_videoClass'] = i1axh5;
    }, ve7y['_onStageResize'] = function () {
      var wqe7vy = zo2dr6['stage']['_canvasTransform']['identity']();wqe7vy['scale'](ecg7['width'] / qegc['canvas']['width'] / ey7gqv['getPixelRatio'](), ecg7['height'] / qegc['canvas']['height'] / ey7gqv['getPixelRatio']());
    }, ve7y['wxinputFocus'] = function (cgs8q) {
      var p0b = pt_bf['inputElement']['target'];if (p0b && !p0b['editable']) return;p4f0['window']['wx']['offKeyboardConfirm'](), p4f0['window']['wx']['offKeyboardInput'](), p4f0['window']['wx']['showKeyboard']({ 'defaultValue': p0b['text'], 'maxLength': p0b['maxChars'], 'multiple': p0b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gq7vy) {}, 'fail': function (_0tf4p) {} }), p4f0['window']['wx']['onKeyboardConfirm'](function (pia5b) {
        var a5xihb = pia5b ? pia5b['value'] : '';p0b['text'] = a5xihb, p0b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), p4f0['window']['wx']['onKeyboardInput'](function (hax1i) {
        var t3fd = hax1i ? hax1i['value'] : '';if (!p0b['multiline']) {
          if (t3fd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }p0b['text'] = t3fd, p0b['event']('input');
      });
    }, ve7y['inputEnter'] = function () {
      pt_bf['inputElement']['target']['focus'] = ![];
    }, ve7y['wxinputblur'] = function () {
      ve7y['hideKeyboard']();
    }, ve7y['hideKeyboard'] = function () {
      p4f0['window']['wx']['offKeyboardConfirm'](), p4f0['window']['wx']['offKeyboardInput'](), p4f0['window']['wx']['hideKeyboard']({ 'success': function (j6ur$m) {
          console['log']('隐藏键盘');
        }, 'fail': function (d6zo) {
          console['log']('隐藏键盘出错:' + (d6zo ? d6zo['errMsg'] : ''));
        } });
    }, ve7y;
  }(),
      kyv1ew = function () {
    function p_50ib() {}y1kwhx(p_50ib, 'laya.wx.mini.MiniLoader');var t4dz = p_50ib['prototype'];return t4dz['load'] = function (hkixa, ru6$j, zt4od, csl8qg, t30f_4) {
      zt4od === void 0x0 && (zt4od = !![]), t30f_4 === void 0x0 && (t30f_4 = ![]);var qcv7s = this;qcv7s['_url'] = hkixa;if (hkixa['indexOf']('data:image') === 0x0) qcv7s['_type'] = ru6$j = 'image';else qcv7s['_type'] = ru6$j || (ru6$j = qcv7s['getTypeFromUrl'](hkixa));qcv7s['_cache'] = zt4od, qcv7s['_data'] = null;var j2rdz = 'ascii';if (hkixa['indexOf']('.fnt') != -0x1) j2rdz = 'utf8';else ru6$j == 'arraybuffer' && (j2rdz = '');;var ywkev1 = kia1hx['getFileExtension'](hkixa);if (p_50ib['_fileTypeArr']['indexOf'](ywkev1) != -0x1) p4f0['EnvConfig']['load']['call'](this, hkixa, ru6$j, zt4od, csl8qg, t30f_4);else {
        if (!j2ur$['getFileInfo'](hkixa)) {
          if (hkixa['indexOf']('layaNativeDir/') != -0x1) {
            if (p4f0['isZiYu']) {
              var whxy1 = j2ur$['ziyuFileData'][hkixa];qcv7s['onLoaded'](whxy1);return;
            } else {
              cosnole['log']('read read'), j2ur$['read'](hkixa, j2rdz, new kve7yw(p_50ib, p_50ib['onReadNativeCallBack'], [j2rdz, hkixa, ru6$j, zt4od, csl8qg, t30f_4, qcv7s]));return;
            }
          }if (t430f['rootPath'] == '') var or62d = hkixa;else or62d = hkixa['split'](t430f['rootPath'])[0x0];hkixa['indexOf']('http://') != -0x1 || hkixa['indexOf']('https://') != -0x1 ? p4f0['EnvConfig']['load']['call'](qcv7s, hkixa, ru6$j, zt4od, csl8qg, t30f_4) : j2ur$['readFile'](or62d, j2rdz, new kve7yw(p_50ib, p_50ib['onReadNativeCallBack'], [j2rdz, hkixa, ru6$j, zt4od, csl8qg, t30f_4, qcv7s]), hkixa);
        } else p4f0['EnvConfig']['load']['call'](this, hkixa, ru6$j, zt4od, csl8qg, t30f_4);
      }
    }, t4dz['resMgrLoad'] = function (egy7vq, gcqe, kyx1w, xiak1, xbha, yv7, l8gqc) {
      kyx1w === void 0x0 && (kyx1w = 0x0), xiak1 === void 0x0 && (xiak1 = ![]), xbha === void 0x0 && (xbha = ![]), yv7 === void 0x0 && (yv7 = 0x0), l8gqc === void 0x0 && (l8gqc = 0x3), egy7vq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', egy7vq), p4f0['EnvConfig']['resMgrLoad'](egy7vq, (z26$j, q8gc7, pi5xb) => {
        p_50ib['prototype']['resMgrLoadCallBack'](z26$j, q8gc7, pi5xb, gcqe);
      }, kyx1w, xiak1, xbha, yv7, l8gqc);
    }, t4dz['resMgrLoadCallBack'] = function (hbxai, bhia, ah51x, d62zo3) {
      console['log']('buff:::', hbxai, ah51x, j2ur$['fileNativeDir'] + '///' + j2ur$['fileListName']), d62zo3(hbxai, bhia, ah51x);
    }, t4dz['clearRes'] = function (kw1hxy, wk1ehy) {
      wk1ehy === void 0x0 && (wk1ehy = ![]);var _40fp = this;_40fp['clearRes'](kw1hxy, wk1ehy);var ls8c = j2ur$['getFileInfo'](kw1hxy);if (ls8c && (kw1hxy['indexOf']('http://') != -0x1 || kw1hxy['indexOf']('https://') != -0x1)) {
        var a5pbi0 = ls8c['md5'],
            qvcg = j2ur$['getFileNativePath'](a5pbi0);j2ur$['remove'](qvcg);
      }
    }, p_50ib['onReadNativeCallBack'] = function (y1evw, b5ip_, _3tf4o, a15hi, xkw1ah, ofdt4, qe7vwy, kiax1h, bia5xh) {
      a15hi === void 0x0 && (a15hi = !![]), ofdt4 === void 0x0 && (ofdt4 = ![]), kiax1h === void 0x0 && (kiax1h = 0x0);if (!kiax1h) {
        var kew7y;if (_3tf4o == 'json' || _3tf4o == 'atlas') kew7y = p4f0['getJson'](bia5xh['data']);else _3tf4o == 'xml' ? kew7y = kia1hx['parseXMLFromString'](bia5xh['data']) : kew7y = bia5xh['data'];qe7vwy['onLoaded'](kew7y), !p4f0['isZiYu'] && p4f0['isPosMsgYu'] && _3tf4o != 'arraybuffer' && wx['postMessage']({ 'url': b5ip_, 'data': kew7y, 'isLoad': !![] });
      } else kiax1h == 0x1 && p4f0['EnvConfig']['load']['call'](qe7vwy, b5ip_, _3tf4o, a15hi, xkw1ah, ofdt4);
    }, kyhw1e(p_50ib, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), p_50ib;
  }(),
      j2ur$ = function (yk1e) {
    function pxi5a() {
      pxi5a['__super']['call'](this);;
    }return y1kwhx(pxi5a, 'laya.wx.mini.MiniFileMgr', yk1e), pxi5a['isLoadFile'] = function (rdzj) {
      return pxi5a['_fileTypeArr']['indexOf'](rdzj) != -0x1 ? !![] : ![];
    }, pxi5a['getFileInfo'] = function (yk1hx) {
      var xk1h = yk1hx['split']('?')[0x0],
          u62 = pxi5a['filesListObj'][xk1h];if (u62 == null) return null;else return u62;return null;
    }, pxi5a['onFileUpdate'] = function (ewk1h, $2rz6j) {
      var dz62o3 = ewk1h['split']('/'),
          _4p0t = dz62o3[dz62o3['length'] - 0x1],
          r6jzd2 = pxi5a['getFileInfo']($2rz6j);if (r6jzd2 == null) pxi5a['onSaveFile']($2rz6j, _4p0t);else {
        if (r6jzd2['readyUrl'] != $2rz6j) pxi5a['remove'](_4p0t, $2rz6j);
      }
    }, pxi5a['exits'] = function (_0ptf4, i5hx) {
      var _5p0 = pxi5a['getFileNativePath'](_0ptf4);pxi5a['fs']['getFileInfo']({ 'filePath': _5p0, 'success': function (qgc8s) {
          i5hx != null && i5hx['runWith']([0x0, qgc8s]);
        }, 'fail': function (o6dr) {
          i5hx != null && i5hx['runWith']([0x1, o6dr]);
        } });
    }, pxi5a['read'] = function (x5hiab, jz2r6d, p0a5i, gvy7q) {
      jz2r6d === void 0x0 && (jz2r6d = 'ascill'), gvy7q === void 0x0 && (gvy7q = '');var veyw;gvy7q != '' ? veyw = pxi5a['getFileNativePath'](x5hiab) : veyw = x5hiab, pxi5a['fs']['readFile']({ 'filePath': veyw, 'encoding': jz2r6d, 'success': function ($zr) {
          p0a5i != null && p0a5i['runWith']([0x0, $zr]);
        }, 'fail': function (tf4) {
          if (tf4 && gvy7q != '') pxi5a['down'](gvy7q, jz2r6d, p0a5i, gvy7q);else p0a5i != null && p0a5i['runWith']([0x1]);
        } });
    }, pxi5a['readNativeFile'] = function (d32z4, ur) {
      pxi5a['fs']['readFile']({ 'filePath': d32z4, 'encoding': '', 'success': function (vywek1) {
          ur != null && ur['runWith']([0x0]);
        }, 'fail': function (b0pi5) {
          ur != null && ur['runWith']([0x1]);
        } });
    }, pxi5a['down'] = function (d4z3, sgq87, $uj6, p5f_b0) {
      sgq87 === void 0x0 && (sgq87 = 'ascill'), p5f_b0 === void 0x0 && (p5f_b0 = '');var ykwev = pxi5a['getFileNativePath'](p5f_b0),
          wy1v = pxi5a['wxdown']({ 'url': d4z3, 'filePath': ykwev, 'success': function (_4t30f) {
          if (_4t30f['statusCode'] === 0xc8) pxi5a['readFile'](_4t30f['filePath'], sgq87, $uj6, p5f_b0);
        }, 'fail': function (wyevq7) {
          $uj6 != null && $uj6['runWith']([0x1, wyevq7]);
        } });wy1v['onProgressUpdate'](function (f5bp0_) {
        $uj6 != null && $uj6['runWith']([0x2, f5bp0_['progress']]);
      });
    }, pxi5a['readFile'] = function (khxai1, $r26, d2or, ekyw1v) {
      $r26 === void 0x0 && ($r26 = 'ascill'), ekyw1v === void 0x0 && (ekyw1v = ''), pxi5a['fs']['readFile']({ 'filePath': khxai1, 'encoding': $r26, 'success': function (pa05b) {
          if (khxai1['indexOf']('http://') != -0x1 || khxai1['indexOf']('https://') != -0x1) pxi5a['onFileUpdate'](khxai1, ekyw1v);d2or != null && d2or['runWith']([0x0, pa05b]);
        }, 'fail': function (t_4f3) {
          if (t_4f3) d2or != null && d2or['runWith']([0x1, t_4f3]);
        } });
    }, pxi5a['downImg'] = function (ptf_b, _pbf0t, ju6m$r) {
      ju6m$r === void 0x0 && (ju6m$r = '');var ib5xh = pxi5a['wxdown']({ 'url': ptf_b, 'success': function (o23d4z) {
          o23d4z['statusCode'] === 0xc8 && pxi5a['copyFile'](o23d4z['tempFilePath'], ju6m$r, _pbf0t);
        }, 'fail': function (t034f_) {
          _pbf0t != null && _pbf0t['runWith']([0x1, t034f_]);
        } });
    }, pxi5a['copyFile'] = function (hk1axw, i_05, pixba5) {
      var f0b_ = hk1axw['split']('/'),
          df43 = f0b_[f0b_['length'] - 0x1],
          b5p0f_ = i_05['split']('?')[0x0],
          ibaxh5 = pxi5a['getFileInfo'](i_05),
          xh1ak = pxi5a['getFileNativePath'](df43);pxi5a['fs']['copyFile']({ 'srcPath': hk1axw, 'destPath': xh1ak, 'success': function (tf3_0) {
          if (!ibaxh5) pxi5a['onSaveFile'](i_05, df43), pixba5 != null && pixba5['runWith']([0x0]);else {
            if (ibaxh5['readyUrl'] != i_05) pxi5a['remove'](df43, i_05, pixba5);
          }
        }, 'fail': function (f05p_b) {
          pixba5 != null && pixba5['runWith']([0x1, f05p_b]);
        } });
    }, pxi5a['getFileNativePath'] = function (doz43) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + doz43;
    }, pxi5a['remove'] = function (tdo3z4, rmu$, d6zj) {
      rmu$ === void 0x0 && (rmu$ = '');var rujm6 = pxi5a['getFileInfo'](rmu$),
          wyk1he = pxi5a['getFileNativePath'](rujm6['md5']);zo2dr6['loader']['clearRes'](rujm6['readyUrl']), pxi5a['fs']['unlink']({ 'filePath': wyk1he, 'success': function (x5ipa) {
          if (rmu$ != '') pxi5a['onSaveFile'](rmu$, tdo3z4);d6zj != null && d6zj['runWith']([0x0]);
        }, 'fail': function (ia1x5) {} });
    }, pxi5a['onSaveFile'] = function (fod3, dzo6) {
      var xaib5 = fod3['split']('?')[0x0];pxi5a['filesListObj'][xaib5] = { 'md5': dzo6, 'readyUrl': fod3 }, pxi5a['fs']['writeFile']({ 'filePath': pxi5a['fileNativeDir'] + '/' + pxi5a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pxi5a['filesListObj']), 'success': function (_pt4) {
          console['log']('写入测试测试成功：', _pt4);
        }, 'fail': function (ykvw1e) {
          console['log']('写入测试测试失败：', ykvw1e);
        } });
    }, pxi5a['existDir'] = function (sgcv, xbaip5) {
      pxi5a['fs']['mkdir']({ 'dirPath': sgcv, 'success': function (_tp04) {
          xbaip5 != null && xbaip5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xa5ih1) {
          if (xa5ih1['errMsg']['indexOf']('file already exists') != -0x1) pxi5a['readSync'](pxi5a['fileListName'], 'utf8', xbaip5);else xbaip5 != null && xbaip5['runWith']([0x1, xa5ih1]);
        } });
    }, pxi5a['readSync'] = function (glsc8, zr62o, j$26z, ekwh1) {
      zr62o === void 0x0 && (zr62o = 'ascill'), ekwh1 === void 0x0 && (ekwh1 = '');var cqsl8g = pxi5a['getFileNativePath'](glsc8),
          dzo362;try {
        dzo362 = pxi5a['fs']['readFileSync'](cqsl8g), j$26z != null && j$26z['runWith']([0x0, { 'data': dzo362 }]);
      } catch (kveyw7) {
        j$26z != null && j$26z['runWith']([0x1]);
      }
    }, pxi5a['readCache'] = function () {}, pxi5a['writeCache'] = function (to4dz3) {
      var wey7qv = readyUrl['split']('?')[0x0];pxi5a['filesListObj'][wey7qv] = { 'md5': md5Name, 'readyUrl': readyUrl }, pxi5a['fs']['writeFile']({ 'filePath': pxi5a['fileNativeDir'] + '/' + pxi5a['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pxi5a['filesListObj']), 'success': function (egqy7v) {}, 'fail': function (ba5h) {} });
    }, pxi5a['setNativeFileDir'] = function (abih) {
      pxi5a['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + abih;
    }, pxi5a['filesListObj'] = {}, pxi5a['fileNativeDir'] = null, pxi5a['fileListName'] = 'layaairfiles.txt', pxi5a['ziyuFileData'] = {}, kyhw1e(pxi5a, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pxi5a;
  }(ujr62$),
      zo = function (b5iha) {
    function vey1w() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], vey1w['__super']['call'](this), this['_sound'] = vey1w['_createSound'](), this['_chanell'] = new z2r(this['_sound']);
    }y1kwhx(vey1w, 'laya.wx.mini.MiniSound', b5iha);var gqy7ev = vey1w['prototype'];return gqy7ev['load'] = function (pf_40) {
      var d6zj2 = this;pf_40 = t430f['formatURL'](pf_40), this['url'] = pf_40;if (vey1w['_audioCache'][pf_40]) {
        this['event']('complete');return;
      }function wk1y() {
        if (vey1w['_null'] != undefined) d6zj2['_sound']['onCanplay'](vey1w['_null']), d6zj2['_sound']['onError'](vey1w['_null']);else try {
          d6zj2['_sound']['onCanplay'](null), d6zj2['_sound']['onError'](null), vey1w['_null'] = null;
        } catch (rj$62z) {
          console['warn']('[wxmini] _clearSound:' + rj$62z), d6zj2['_sound']['onCanplay'](m$jr), d6zj2['_sound']['onError'](m$jr), vey1w['_null'] = m$jr;
        }
      }function sqg8cl() {
        ahki1['loaded'] = !![], ahki1['event']('complete'), vey1w['_audioCache'][ahki1['url']] = ahki1;
      }function rj2u(pbx5i) {
        console['error']('errCode=' + pbx5i['errCode'] + '  errMsg=' + pbx5i['errMsg']), ahki1['event']('error');
      }function m$jr() {}this['_sound']['onCanplay'](sqg8cl), this['_sound']['onError'](rj2u), this['_sound']['src'] = pf_40;var ahki1 = this;
    }, gqy7ev['play'] = function (haw1k, _p4f0) {
      haw1k === void 0x0 && (haw1k = 0x0), _p4f0 === void 0x0 && (_p4f0 = 0x0);var qeyvg, cgv7eq;if (this['url'] == cegq7['_tMusic']) {
        if (!vey1w['_musicAudio']) vey1w['_musicAudio'] = this['_sound'];qeyvg = vey1w['_musicAudio'], cgv7eq = this['_chanell'];
      } else qeyvg = this['_sound'], cgv7eq = this['_chanell'];return qeyvg['src'] = this['url'], qeyvg['startTime'] = 0x0, cgv7eq['isStopped'] && (cgv7eq['url'] = this['url'], cgv7eq['loops'] = _p4f0, cgv7eq['startTime'] = haw1k, cgv7eq['play'](), cegq7['addChannel'](cgv7eq)), cgv7eq;
    }, gqy7ev['dispose'] = function () {
      var $z2 = vey1w['_audioCache'][this['url']];$z2 && ($z2['src'] = '', delete vey1w['_audioCache'][this['url']]);
    }, u26r$(0x0, gqy7ev, 'duration', function () {
      return this['_sound']['duration'];
    }), vey1w['_createSound'] = function () {
      vey1w['_id']++;var ba5xhi = p4f0['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ba5xhi;
    }, vey1w['_musicAudio'] = null, vey1w['_id'] = 0x0, vey1w['_audioCache'] = {}, vey1w['_null'] = undefined, vey1w;
  }(ujr62$),
      z2r = function (dzor) {
    function v7wqey(j2u6$) {
      this['_audio'] = null, this['_onEnd'] = null, v7wqey['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = j2u6$, this['_onEnd'] = kia1hx['bind'](this['__onEnd'], this), j2u6$['onEnded'](this['_onEnd']);
    }y1kwhx(v7wqey, 'laya.wx.mini.MiniSoundChannel', dzor);var gc8qls = v7wqey['prototype'];return gc8qls['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zo2dr6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gc8qls['__onNull'] = function () {}, gc8qls['play'] = function () {
      this['isStopped'] = ![], cegq7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, gc8qls['stop'] = function () {
      this['isStopped'] = !![], cegq7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, gc8qls['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, gc8qls['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], cegq7['addChannel'](this), this['_audio']['play']();
    }, u26r$(0x0, gc8qls, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), u26r$(0x0, gc8qls, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), u26r$(0x0, gc8qls, 'volume', function () {
      return 0x1;
    }, function (qgyve) {}), v7wqey['_null'] = undefined, v7wqey;
  }(h1a5x),
      i1axh5 = function () {
    function j6r2z() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = p4f0['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }y1kwhx(j6r2z, 'laya.wx.mini.MiniVideo');var ib05a = j6r2z['prototype'];return ib05a['on'] = function (tofd3, jd26zr, ia5xbp) {
      if (tofd3 == 'loadedmetadata') this['onPlayFunc'] = ia5xbp['bind'](jd26zr), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tofd3 == 'ended' && (this['onEndedFunC'] = ia5xbp['bind'](jd26zr), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, ib05a['onTimeUpdateFunc'] = function (ro6d2) {
      this['position'] = ro6d2['position'], this['_duration'] = ro6d2['duration'];
    }, ib05a['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, ib05a['onended'] = function (vy7ew, urm6$j) {
      this['onEndedFunC'] = urm6$j['bind'](vy7ew), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, ib05a['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, ib05a['off'] = function (hxak1, a5xib, jmu$) {
      if (hxak1 == 'loadedmetadata') this['onPlayFunc'] = jmu$['bind'](a5xib), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hxak1 == 'ended' && (this['onEndedFunC'] = jmu$['bind'](a5xib), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, ib05a['load'] = function (t_f40p) {
      if (!this['videoElement']) return;this['videoElement']['src'] = t_f40p;
    }, ib05a['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, ib05a['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, ib05a['size'] = function (xi1hka, sgc7) {
      if (!this['videoElement']) return;this['videoElement']['width'] = xi1hka, this['videoElement']['height'] = sgc7;
    }, ib05a['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, ib05a['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, u26r$(0x0, ib05a, 'duration', function () {
      return this['_duration'];
    }), u26r$(0x0, ib05a, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (xpia) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = xpia;
    }), u26r$(0x0, ib05a, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), u26r$(0x0, ib05a, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), u26r$(0x0, ib05a, 'ended', function () {
      return this['videoend'];
    }), u26r$(0x0, ib05a, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (wqy7e) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = wqy7e;
    }), u26r$(0x0, ib05a, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (i1hax) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = i1hax;
    }), u26r$(0x0, ib05a, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (m$6ru) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = m$6ru;
    }), u26r$(0x0, ib05a, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), u26r$(0x0, ib05a, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (p_0i) {
      if (!this['videoElement']) return;this['videoElement']['x'] = p_0i;
    }), u26r$(0x0, ib05a, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (jr$m6u) {
      if (!this['videoElement']) return;this['videoElement']['y'] = jr$m6u;
    }), u26r$(0x0, ib05a, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), u26r$(0x0, ib05a, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (_05i) {
      if (!this['videoElement']) return;this['videoElement']['src'] = _05i;
    }), u26r$(0x0, ib05a, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (_pbtf0) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = _pbtf0;
    }), u26r$(0x0, ib05a, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (dr62jz) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = dr62jz;
    }), j6r2z;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var o4ztd in Laya) {
    var jr2z$6 = Laya[o4ztd];jr2z$6 && jr2z$6['__isclass'] && (exports[o4ztd] = jr2z$6);
  }
});