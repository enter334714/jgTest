var B = wx.$z;
(function (window, document, i3m7l) {
  var odybtk = i3m7l['un'],
      db8ok = i3m7l['uns'],
      xahs1 = i3m7l['static'],
      atzsx = i3m7l['class'],
      k_5b = i3m7l['getset'],
      qm7i3 = i3m7l['__newvec'],
      xa1h9s = laya['utils']['Browser'],
      pv4 = laya['events']['Event'],
      s1ae = laya['events']['EventDispatcher'],
      tyobdk = laya['resource']['HTMLImage'],
      r25u8 = laya['utils']['Handler'],
      _5r8 = laya['display']['Input'],
      q$m3i7 = laya['net']['Loader'],
      x1h9 = laya['maths']['Matrix'],
      ax9es1 = laya['renders']['Render'],
      f76vnl = laya['utils']['RunDriver'],
      ph9sx1 = laya['media']['Sound'],
      v46l = laya['media']['SoundChannel'],
      brk8dy = laya['media']['SoundManager'],
      il7nm3 = laya['display']['Stage'],
      zdtkyo = laya['net']['URL'],
      nvf76l = laya['utils']['Utils'],
      vlin7f = function () {
    function yzkto() {}return atzsx(yzkto, 'laya.wx.mini.MiniAdpter'), yzkto['getJson'] = function (zdoeyt) {
      return JSON['parse'](zdoeyt);
    }, yzkto['init'] = function (f4l6vg, g46h1p) {
      f4l6vg === void 0x0 && (f4l6vg = ![]), g46h1p === void 0x0 && (g46h1p = ![]);if (yzkto['_inited']) return;yzkto['window'] = window;if (yzkto['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yzkto['_inited'] = !![], yzkto['isZiYu'] = g46h1p, yzkto['isPosMsgYu'] = f4l6vg, yzkto['EnvConfig'] = {}, !yzkto['isZiYu'] && (dtby['setNativeFileDir']('/layaairGame'), dtby['existDir'](dtby['fileNativeDir'], r25u8['create'](yzkto, yzkto['onMkdirCallBack']))), yzkto['window']['focus'] = function () {}, i3m7l['getUrlPath'] = function () {}, yzkto['window']['logtime'] = function (otydkb) {}, yzkto['window']['alertTimeLog'] = function (l7f) {}, yzkto['window']['resetShareInfo'] = function () {}, yzkto['window']['CanvasRenderingContext2D'] = function () {}, yzkto['window']['CanvasRenderingContext2D']['prototype'] = yzkto['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yzkto['window']['document']['body']['appendChild'] = function () {}, yzkto['EnvConfig']['pixelRatioInt'] = 0x0, f76vnl['getPixelRatio'] = yzkto['pixelRatio'], yzkto['_preCreateElement'] = xa1h9s['createElement'], xa1h9s['createElement'] = yzkto['createElement'], f76vnl['createShaderCondition'] = yzkto['createShaderCondition'], nvf76l['parseXMLFromString'] = yzkto['parseXMLFromString'], _5r8['_createInputElement'] = pxg1h['_createInputElement'], yzkto['EnvConfig']['load'] = q$m3i7['prototype']['load'], q$m3i7['prototype']['load'] = mi3['prototype']['load'], yzkto['isZiYu'] && f4l6vg && wx['onMessage'](function (w_u20) {
        w_u20['isLoad'] && (dtby['ziyuFileData'][w_u20['url']] = w_u20['data']);
      });
    }, yzkto['onMkdirCallBack'] = function (ivlnf, x9hp) {
      if (!ivlnf) dtby['filesListObj'] = JSON['parse'](x9hp['data']);
    }, yzkto['pixelRatio'] = function () {
      if (!yzkto['EnvConfig']['pixelRatioInt']) try {
        var xe1a9s = wx['getSystemInfoSync']();return yzkto['EnvConfig']['pixelRatioInt'] = xe1a9s['pixelRatio'], xe1a9s = xe1a9s, xe1a9s['pixelRatio'];
      } catch (kztyo) {}return yzkto['EnvConfig']['pixelRatioInt'];
    }, yzkto['createElement'] = function (zx) {
      if (zx == 'canvas') {
        var u2_w5r;return yzkto['idx'] == 0x1 ? yzkto['isZiYu'] ? (u2_w5r = sharedCanvas, u2_w5r['style'] = {}) : u2_w5r = window['canvas'] : u2_w5r = window['wx']['createCanvas'](), yzkto['idx']++, u2_w5r;
      } else {
        if (zx == 'textarea' || zx == 'input') return yzkto['onCreateInput'](zx);else {
          if (zx == 'div') {
            var inq37m = yzkto['_preCreateElement'](zx);return inq37m['contains'] = function ($3qji) {
              return null;
            }, inq37m['removeChild'] = function (xe9a1s) {}, inq37m;
          } else return yzkto['_preCreateElement'](zx);
        }
      }
    }, yzkto['onCreateInput'] = function (p1hg9) {
      var l7in3 = yzkto['_preCreateElement'](p1hg9);return l7in3['focus'] = pxg1h['wxinputFocus'], l7in3['blur'] = pxg1h['wxinputblur'], l7in3['style'] = {}, l7in3['value'] = 0x0, l7in3['parentElement'] = {}, l7in3['placeholder'] = {}, l7in3['type'] = {}, l7in3['setColor'] = function (doaetz) {}, l7in3['setType'] = function (f7i) {}, l7in3['setFontFace'] = function (vgpf46) {}, l7in3['addEventListener'] = function (hp6f4g) {}, l7in3['contains'] = function (u825_) {
        return null;
      }, l7in3['removeChild'] = function (zedyto) {}, l7in3;
    }, yzkto['createShaderCondition'] = function (azetos) {
      var b5_r82 = this,
          mq$i7 = function () {
        var v4l6 = azetos;return b5_r82[azetos['replace']('this.', '')];
      };return mq$i7;
    }, yzkto['EnvConfig'] = null, yzkto['window'] = null, yzkto['_preCreateElement'] = null, yzkto['_inited'] = ![], yzkto['wxRequest'] = null, yzkto['systemInfo'] = null, yzkto['version'] = '0.0.1', yzkto['isZiYu'] = ![], yzkto['isPosMsgYu'] = ![], yzkto['parseXMLFromString'] = function (byrk8d) {
      var lmi73, w25_0u;byrk8d = byrk8d['replace'](/>\s+</g, '><');try {
        lmi73 = new window['Parser']['DOMParser']()['parseFromString'](byrk8d, 'text/xml');
      } catch (li73n) {
        throw '需要引入xml解析库文件';
      }return lmi73;
    }, yzkto['idx'] = 0x1, yzkto;
  }(),
      ybrdk = function () {
    function b5kr_8() {}atzsx(b5kr_8, 'laya.wx.mini.MiniImage');var w2_r5u = b5kr_8['prototype'];return w2_r5u['_loadImage'] = function (hx9sa1) {
      var oaetz = this,
          zesxa = ![];hx9sa1['indexOf']('layaNativeDir/') == -0x1 && (zesxa = !![], hx9sa1 = zdtkyo['formatURL'](hx9sa1));if (!dtby['getFileInfo'](hx9sa1)) {
        if (hx9sa1['indexOf']('http://') != -0x1 || hx9sa1['indexOf']('https://') != -0x1) dtby['downImg'](hx9sa1, new r25u8(b5kr_8, b5kr_8['onDownImgCallBack'], [hx9sa1, oaetz]), hx9sa1);else b5kr_8['onCreateImage'](hx9sa1, oaetz, !![]);
      } else b5kr_8['onCreateImage'](hx9sa1, oaetz, !zesxa);
    }, b5kr_8['onDownImgCallBack'] = function (toaedz, u_r582, vlim) {
      if (!vlim) b5kr_8['onCreateImage'](toaedz, u_r582);else u_r582['onError'](null);
    }, b5kr_8['onCreateImage'] = function (hg4pf, hp1, y8_kb) {
      y8_kb === void 0x0 && (y8_kb = ![]);var kbdoy;if (!y8_kb) {
        var hpg41 = dtby['getFileInfo'](hg4pf),
            sxztae = hpg41['md5'];kbdoy = dtby['getFileNativePath'](sxztae);
      } else kbdoy = hg4pf;if (hp1['imgCache'] == null) hp1['imgCache'] = {};var fl7i;function f6lvn7() {
        fl7i['onload'] = null, fl7i['onerror'] = null, delete hp1['imgCache'][hg4pf];
      };var dktob = function () {
        f6lvn7(), hp1['onLoaded'](fl7i);
      },
          linv7m = function () {
        f6lvn7(), hp1['event']('error', 'Load image failed');
      };hp1['_type'] == 'nativeimage' ? (fl7i = new xa1h9s['window']['Image'](), fl7i['crossOrigin'] = '', fl7i['onload'] = dktob, fl7i['onerror'] = linv7m, fl7i['src'] = kbdoy, hp1['imgCache'][hg4pf] = fl7i) : new tyobdk['create'](kbdoy, { 'onload': dktob, 'onerror': linv7m, 'onCreate': function (ozetas) {
          fl7i = ozetas, hp1['imgCache'][hg4pf] = ozetas;
        } });
    }, b5kr_8;
  }(),
      pxg1h = function () {
    function r52b8() {}return atzsx(r52b8, 'laya.wx.mini.MiniInput'), r52b8['_createInputElement'] = function () {
      _5r8['_initInput'](_5r8['area'] = xa1h9s['createElement']('textarea')), _5r8['_initInput'](_5r8['input'] = xa1h9s['createElement']('input')), _5r8['inputContainer'] = xa1h9s['createElement']('div'), _5r8['inputContainer']['style']['position'] = 'absolute', _5r8['inputContainer']['style']['zIndex'] = 0x186a0, xa1h9s['container']['appendChild'](_5r8['inputContainer']), _5r8['inputContainer']['setPos'] = function (q$mij3, fln6) {
        _5r8['inputContainer']['style']['left'] = q$mij3 + 'px', _5r8['inputContainer']['style']['top'] = fln6 + 'px';
      }, i3m7l['stage']['on']('resize', null, r52b8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (r_5w2u) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), brk8dy['_soundClass'] = axzt, brk8dy['_musicClass'] = axzt, window['_videoClass'] = _85u;
    }, r52b8['_onStageResize'] = function () {
      var gh61p4 = i3m7l['stage']['_canvasTransform']['identity']();gh61p4['scale'](xa1h9s['width'] / ax9es1['canvas']['width'] / f76vnl['getPixelRatio'](), xa1h9s['height'] / ax9es1['canvas']['height'] / f76vnl['getPixelRatio']());
    }, r52b8['wxinputFocus'] = function (hgxp91) {
      var eodtz = _5r8['inputElement']['target'];if (eodtz && !eodtz['editable']) return;vlin7f['window']['wx']['offKeyboardConfirm'](), vlin7f['window']['wx']['offKeyboardInput'](), vlin7f['window']['wx']['showKeyboard']({ 'defaultValue': eodtz['text'], 'maxLength': eodtz['maxChars'], 'multiple': eodtz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (b8dyrk) {}, 'fail': function (wu) {} }), vlin7f['window']['wx']['onKeyboardConfirm'](function (lv7nmi) {
        var e9a1x = lv7nmi ? lv7nmi['value'] : '';eodtz['text'] = e9a1x, eodtz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), vlin7f['window']['wx']['onKeyboardInput'](function (r_uw25) {
        var p6hg14 = r_uw25 ? r_uw25['value'] : '';if (!eodtz['multiline']) {
          if (p6hg14['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }eodtz['text'] = p6hg14, eodtz['event']('input');
      });
    }, r52b8['inputEnter'] = function () {
      _5r8['inputElement']['target']['focus'] = ![];
    }, r52b8['wxinputblur'] = function () {
      r52b8['hideKeyboard']();
    }, r52b8['hideKeyboard'] = function () {
      vlin7f['window']['wx']['offKeyboardConfirm'](), vlin7f['window']['wx']['offKeyboardInput'](), vlin7f['window']['wx']['hideKeyboard']({ 'success': function (b852) {
          console['log']('隐藏键盘');
        }, 'fail': function (mni) {
          console['log']('隐藏键盘出错:' + (mni ? mni['errMsg'] : ''));
        } });
    }, r52b8;
  }(),
      mi3 = function () {
    function oetzsa() {}atzsx(oetzsa, 'laya.wx.mini.MiniLoader');var tdbyk = oetzsa['prototype'];return tdbyk['load'] = function (ytkzod, xastz, toa, dtkoy, azxse) {
      toa === void 0x0 && (toa = !![]), azxse === void 0x0 && (azxse = ![]);var oazte = this;oazte['_url'] = ytkzod;if (ytkzod['indexOf']('data:image') === 0x0) oazte['_type'] = xastz = 'image';else oazte['_type'] = xastz || (xastz = oazte['getTypeFromUrl'](ytkzod));oazte['_cache'] = toa, oazte['_data'] = null;var f6g4l = 'ascii';if (ytkzod['indexOf']('.fnt') != -0x1) f6g4l = 'utf8';else xastz == 'arraybuffer' && (f6g4l = '');;var r8ybkd = nvf76l['getFileExtension'](ytkzod);if (oetzsa['_fileTypeArr']['indexOf'](r8ybkd) != -0x1) vlin7f['EnvConfig']['load']['call'](this, ytkzod, xastz, toa, dtkoy, azxse);else {
        if (!dtby['getFileInfo'](ytkzod)) {
          if (ytkzod['indexOf']('layaNativeDir/') != -0x1) {
            if (vlin7f['isZiYu']) {
              var inlfv = dtby['ziyuFileData'][ytkzod];oazte['onLoaded'](inlfv);return;
            } else {
              cosnole['log']('read read'), dtby['read'](ytkzod, f6g4l, new r25u8(oetzsa, oetzsa['onReadNativeCallBack'], [f6g4l, ytkzod, xastz, toa, dtkoy, azxse, oazte]));return;
            }
          }if (zdtkyo['rootPath'] == '') var nl76 = ytkzod;else nl76 = ytkzod['split'](zdtkyo['rootPath'])[0x0];ytkzod['indexOf']('http://') != -0x1 || ytkzod['indexOf']('https://') != -0x1 ? vlin7f['EnvConfig']['load']['call'](oazte, ytkzod, xastz, toa, dtkoy, azxse) : dtby['readFile'](nl76, f6g4l, new r25u8(oetzsa, oetzsa['onReadNativeCallBack'], [f6g4l, ytkzod, xastz, toa, dtkoy, azxse, oazte]), ytkzod);
        } else vlin7f['EnvConfig']['load']['call'](this, ytkzod, xastz, toa, dtkoy, azxse);
      }
    }, tdbyk['resMgrLoad'] = function (xzsate, s91axe, g4fh6, g4vpf, y_kr8b, zaxes9, a1es) {
      g4fh6 === void 0x0 && (g4fh6 = 0x0), g4vpf === void 0x0 && (g4vpf = ![]), y_kr8b === void 0x0 && (y_kr8b = ![]), zaxes9 === void 0x0 && (zaxes9 = 0x0), a1es === void 0x0 && (a1es = 0x3), xzsate['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xzsate), vlin7f['EnvConfig']['resMgrLoad'](xzsate, (g6hf4, glvf6, y_rk8) => {
        oetzsa['prototype']['resMgrLoadCallBack'](g6hf4, glvf6, y_rk8, s91axe);
      }, g4fh6, g4vpf, y_kr8b, zaxes9, a1es);
    }, tdbyk['resMgrLoadCallBack'] = function (tadze, rb_yk, $7mqi, mniq3) {
      console['log']('buff:::', tadze, $7mqi, dtby['fileNativeDir'] + '///' + dtby['fileListName']), mniq3(tadze, rb_yk, $7mqi);
    }, tdbyk['clearRes'] = function (xeatzs, g41p6h) {
      g41p6h === void 0x0 && (g41p6h = ![]);var r8kb_y = this;r8kb_y['clearRes'](xeatzs, g41p6h);var kr_b5 = dtby['getFileInfo'](xeatzs);if (kr_b5 && (xeatzs['indexOf']('http://') != -0x1 || xeatzs['indexOf']('https://') != -0x1)) {
        var qi37nm = kr_b5['md5'],
            ydkbto = dtby['getFileNativePath'](qi37nm);dtby['remove'](ydkbto);
      }
    }, oetzsa['onReadNativeCallBack'] = function (btokdy, b8_5rk, in3l7m, x1ash, _8u52, zsa9x, v46p, qm7$3i, px1s9) {
      x1ash === void 0x0 && (x1ash = !![]), zsa9x === void 0x0 && (zsa9x = ![]), qm7$3i === void 0x0 && (qm7$3i = 0x0);if (!qm7$3i) {
        var p91g4h;if (in3l7m == 'json' || in3l7m == 'atlas') p91g4h = vlin7f['getJson'](px1s9['data']);else in3l7m == 'xml' ? p91g4h = nvf76l['parseXMLFromString'](px1s9['data']) : p91g4h = px1s9['data'];v46p['onLoaded'](p91g4h), !vlin7f['isZiYu'] && vlin7f['isPosMsgYu'] && in3l7m != 'arraybuffer' && wx['postMessage']({ 'url': b8_5rk, 'data': p91g4h, 'isLoad': !![] });
      } else qm7$3i == 0x1 && vlin7f['EnvConfig']['load']['call'](v46p, b8_5rk, in3l7m, x1ash, _8u52, zsa9x);
    }, xahs1(oetzsa, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), oetzsa;
  }(),
      dtby = function (u5_28) {
    function xshp1() {
      xshp1['__super']['call'](this);;
    }return atzsx(xshp1, 'laya.wx.mini.MiniFileMgr', u5_28), xshp1['isLoadFile'] = function (gvp4f) {
      return xshp1['_fileTypeArr']['indexOf'](gvp4f) != -0x1 ? !![] : ![];
    }, xshp1['getFileInfo'] = function (spxh9) {
      var fgp6h = spxh9['split']('?')[0x0],
          yokbd8 = xshp1['filesListObj'][fgp6h];if (yokbd8 == null) return null;else return yokbd8;return null;
    }, xshp1['onFileUpdate'] = function (teydoz, hgp14) {
      var vi7fl = teydoz['split']('/'),
          ktdoy = vi7fl[vi7fl['length'] - 0x1],
          vn67 = xshp1['getFileInfo'](hgp14);if (vn67 == null) xshp1['onSaveFile'](hgp14, ktdoy);else {
        if (vn67['readyUrl'] != hgp14) xshp1['remove'](ktdoy, hgp14);
      }
    }, xshp1['exits'] = function (m7nq3, ru852_) {
      var _r25uw = xshp1['getFileNativePath'](m7nq3);xshp1['fs']['getFileInfo']({ 'filePath': _r25uw, 'success': function (k5b8_) {
          ru852_ != null && ru852_['runWith']([0x0, k5b8_]);
        }, 'fail': function (fv76) {
          ru852_ != null && ru852_['runWith']([0x1, fv76]);
        } });
    }, xshp1['read'] = function (kydzt, v67nl, zodykt, $iq3j) {
      v67nl === void 0x0 && (v67nl = 'ascill'), $iq3j === void 0x0 && ($iq3j = '');var v64pf;$iq3j != '' ? v64pf = xshp1['getFileNativePath'](kydzt) : v64pf = kydzt, xshp1['fs']['readFile']({ 'filePath': v64pf, 'encoding': v67nl, 'success': function (vgfp) {
          zodykt != null && zodykt['runWith']([0x0, vgfp]);
        }, 'fail': function (p9hg4) {
          if (p9hg4 && $iq3j != '') xshp1['down']($iq3j, v67nl, zodykt, $iq3j);else zodykt != null && zodykt['runWith']([0x1]);
        } });
    }, xshp1['readNativeFile'] = function (ilv7fn, etzody) {
      xshp1['fs']['readFile']({ 'filePath': ilv7fn, 'encoding': '', 'success': function (ybk_) {
          etzody != null && etzody['runWith']([0x0]);
        }, 'fail': function (tdeoy) {
          etzody != null && etzody['runWith']([0x1]);
        } });
    }, xshp1['down'] = function (fvl67n, inm7, u25wr_, deot) {
      inm7 === void 0x0 && (inm7 = 'ascill'), deot === void 0x0 && (deot = '');var mi$73q = xshp1['getFileNativePath'](deot),
          zate = xshp1['wxdown']({ 'url': fvl67n, 'filePath': mi$73q, 'success': function (g146h) {
          if (g146h['statusCode'] === 0xc8) xshp1['readFile'](g146h['filePath'], inm7, u25wr_, deot);
        }, 'fail': function (astex) {
          u25wr_ != null && u25wr_['runWith']([0x1, astex]);
        } });zate['onProgressUpdate'](function (v64fp) {
        u25wr_ != null && u25wr_['runWith']([0x2, v64fp['progress']]);
      });
    }, xshp1['readFile'] = function (z9sax, lnvi7m, sxaetz, ktobd) {
      lnvi7m === void 0x0 && (lnvi7m = 'ascill'), ktobd === void 0x0 && (ktobd = ''), xshp1['fs']['readFile']({ 'filePath': z9sax, 'encoding': lnvi7m, 'success': function (kb5_) {
          if (z9sax['indexOf']('http://') != -0x1 || z9sax['indexOf']('https://') != -0x1) xshp1['onFileUpdate'](z9sax, ktobd);sxaetz != null && sxaetz['runWith']([0x0, kb5_]);
        }, 'fail': function (o8dyb) {
          if (o8dyb) sxaetz != null && sxaetz['runWith']([0x1, o8dyb]);
        } });
    }, xshp1['downImg'] = function (ytokz, b2r, bk8yd) {
      bk8yd === void 0x0 && (bk8yd = '');var bdktyo = xshp1['wxdown']({ 'url': ytokz, 'success': function (p91xs) {
          p91xs['statusCode'] === 0xc8 && xshp1['copyFile'](p91xs['tempFilePath'], bk8yd, b2r);
        }, 'fail': function (p4fv6g) {
          b2r != null && b2r['runWith']([0x1, p4fv6g]);
        } });
    }, xshp1['copyFile'] = function (g1h6p4, dyrk8, r8kby_) {
      var g49hp = g1h6p4['split']('/'),
          xp19sh = g49hp[g49hp['length'] - 0x1],
          eastoz = dyrk8['split']('?')[0x0],
          kdbr8 = xshp1['getFileInfo'](dyrk8),
          xsetz = xshp1['getFileNativePath'](xp19sh);xshp1['fs']['copyFile']({ 'srcPath': g1h6p4, 'destPath': xsetz, 'success': function (sztao) {
          if (!kdbr8) xshp1['onSaveFile'](dyrk8, xp19sh), r8kby_ != null && r8kby_['runWith']([0x0]);else {
            if (kdbr8['readyUrl'] != dyrk8) xshp1['remove'](xp19sh, dyrk8, r8kby_);
          }
        }, 'fail': function (odybk) {
          r8kby_ != null && r8kby_['runWith']([0x1, odybk]);
        } });
    }, xshp1['getFileNativePath'] = function (kr85b) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kr85b;
    }, xshp1['remove'] = function (ifv7l, datez, b_5kr8) {
      datez === void 0x0 && (datez = '');var taes = xshp1['getFileInfo'](datez),
          k5rb_8 = xshp1['getFileNativePath'](taes['md5']);i3m7l['loader']['clearRes'](taes['readyUrl']), xshp1['fs']['unlink']({ 'filePath': k5rb_8, 'success': function (nivlf) {
          if (datez != '') xshp1['onSaveFile'](datez, ifv7l);b_5kr8 != null && b_5kr8['runWith']([0x0]);
        }, 'fail': function (nvi7lm) {} });
    }, xshp1['onSaveFile'] = function (lv7f, pgh6f4) {
      var r8k = lv7f['split']('?')[0x0];xshp1['filesListObj'][r8k] = { 'md5': pgh6f4, 'readyUrl': lv7f }, xshp1['fs']['writeFile']({ 'filePath': xshp1['fileNativeDir'] + '/' + xshp1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xshp1['filesListObj']), 'success': function (im7qn3) {
          console['log']('写入测试测试成功：', im7qn3);
        }, 'fail': function (p91sxh) {
          console['log']('写入测试测试失败：', p91sxh);
        } });
    }, xshp1['existDir'] = function (r58u_2, r28_u5) {
      xshp1['fs']['mkdir']({ 'dirPath': r58u_2, 'success': function (n7q) {
          r28_u5 != null && r28_u5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kdyrb8) {
          if (kdyrb8['errMsg']['indexOf']('file already exists') != -0x1) xshp1['readSync'](xshp1['fileListName'], 'utf8', r28_u5);else r28_u5 != null && r28_u5['runWith']([0x1, kdyrb8]);
        } });
    }, xshp1['readSync'] = function (ezta, sax9e, ryk8_, m7ni3l) {
      sax9e === void 0x0 && (sax9e = 'ascill'), m7ni3l === void 0x0 && (m7ni3l = '');var w52u_r = xshp1['getFileNativePath'](ezta),
          m7vi;try {
        m7vi = xshp1['fs']['readFileSync'](w52u_r), ryk8_ != null && ryk8_['runWith']([0x0, { 'data': m7vi }]);
      } catch (kydtoz) {
        ryk8_ != null && ryk8_['runWith']([0x1]);
      }
    }, xshp1['readCache'] = function () {}, xshp1['writeCache'] = function (fphg6) {
      var txzas = readyUrl['split']('?')[0x0];xshp1['filesListObj'][txzas] = { 'md5': md5Name, 'readyUrl': readyUrl }, xshp1['fs']['writeFile']({ 'filePath': xshp1['fileNativeDir'] + '/' + xshp1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](xshp1['filesListObj']), 'success': function (wru_25) {}, 'fail': function (kdyrb) {} });
    }, xshp1['setNativeFileDir'] = function (tszx) {
      xshp1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tszx;
    }, xshp1['filesListObj'] = {}, xshp1['fileNativeDir'] = null, xshp1['fileListName'] = 'layaairfiles.txt', xshp1['ziyuFileData'] = {}, xahs1(xshp1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), xshp1;
  }(s1ae),
      axzt = function (kotzdy) {
    function u58() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], u58['__super']['call'](this), this['_sound'] = u58['_createSound'](), this['_chanell'] = new r_k8b5(this['_sound']);
    }atzsx(u58, 'laya.wx.mini.MiniSound', kotzdy);var pxh1g9 = u58['prototype'];return pxh1g9['load'] = function (eszaxt) {
      var fvg6l4 = this;eszaxt = zdtkyo['formatURL'](eszaxt), this['url'] = eszaxt;if (u58['_audioCache'][eszaxt]) {
        this['event']('complete');return;
      }function eztdao() {
        if (u58['_null'] != undefined) fvg6l4['_sound']['onCanplay'](u58['_null']), fvg6l4['_sound']['onError'](u58['_null']);else try {
          fvg6l4['_sound']['onCanplay'](null), fvg6l4['_sound']['onError'](null), u58['_null'] = null;
        } catch (lv4f6) {
          console['warn']('[wxmini] _clearSound:' + lv4f6), fvg6l4['_sound']['onCanplay'](rb52), fvg6l4['_sound']['onError'](rb52), u58['_null'] = rb52;
        }
      }function x1h9sa() {
        p4h19g['loaded'] = !![], p4h19g['event']('complete'), u58['_audioCache'][p4h19g['url']] = p4h19g;
      }function jimq$(v46pgf) {
        console['error']('errCode=' + v46pgf['errCode'] + '  errMsg=' + v46pgf['errMsg']), p4h19g['event']('error');
      }function rb52() {}this['_sound']['onCanplay'](x1h9sa), this['_sound']['onError'](jimq$), this['_sound']['src'] = eszaxt;var p4h19g = this;
    }, pxh1g9['play'] = function (q3nmi, yzedt) {
      q3nmi === void 0x0 && (q3nmi = 0x0), yzedt === void 0x0 && (yzedt = 0x0);var oyed, lvnf64;if (this['url'] == brk8dy['_tMusic']) {
        if (!u58['_musicAudio']) u58['_musicAudio'] = this['_sound'];oyed = u58['_musicAudio'], lvnf64 = this['_chanell'];
      } else oyed = this['_sound'], lvnf64 = this['_chanell'];return oyed['src'] = this['url'], oyed['startTime'] = 0x0, lvnf64['isStopped'] && (lvnf64['url'] = this['url'], lvnf64['loops'] = yzedt, lvnf64['startTime'] = q3nmi, lvnf64['play'](), brk8dy['addChannel'](lvnf64)), lvnf64;
    }, pxh1g9['dispose'] = function () {
      var _r28u = u58['_audioCache'][this['url']];_r28u && (_r28u['src'] = '', delete u58['_audioCache'][this['url']]);
    }, k_5b(0x0, pxh1g9, 'duration', function () {
      return this['_sound']['duration'];
    }), u58['_createSound'] = function () {
      u58['_id']++;var dobykt = vlin7f['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return dobykt;
    }, u58['_musicAudio'] = null, u58['_id'] = 0x0, u58['_audioCache'] = {}, u58['_null'] = undefined, u58;
  }(s1ae),
      r_k8b5 = function (easo) {
    function ruw_2(v46pf) {
      this['_audio'] = null, this['_onEnd'] = null, ruw_2['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = v46pf, this['_onEnd'] = nvf76l['bind'](this['__onEnd'], this), v46pf['onEnded'](this['_onEnd']);
    }atzsx(ruw_2, 'laya.wx.mini.MiniSoundChannel', easo);var szoae = ruw_2['prototype'];return szoae['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (i3m7l['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, szoae['__onNull'] = function () {}, szoae['play'] = function () {
      this['isStopped'] = ![], brk8dy['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, szoae['stop'] = function () {
      this['isStopped'] = !![], brk8dy['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, szoae['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, szoae['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], brk8dy['addChannel'](this), this['_audio']['play']();
    }, k_5b(0x0, szoae, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k_5b(0x0, szoae, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k_5b(0x0, szoae, 'volume', function () {
      return 0x1;
    }, function (as9z) {}), ruw_2['_null'] = undefined, ruw_2;
  }(v46l),
      _85u = function () {
    function fvnl4() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = vlin7f['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }atzsx(fvnl4, 'laya.wx.mini.MiniVideo');var _28r5u = fvnl4['prototype'];return _28r5u['on'] = function (u025_w, d8yrk, hx1p9g) {
      if (u025_w == 'loadedmetadata') this['onPlayFunc'] = hx1p9g['bind'](d8yrk), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else u025_w == 'ended' && (this['onEndedFunC'] = hx1p9g['bind'](d8yrk), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, _28r5u['onTimeUpdateFunc'] = function (boydt) {
      this['position'] = boydt['position'], this['_duration'] = boydt['duration'];
    }, _28r5u['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, _28r5u['onended'] = function (yzdte, b2_r5) {
      this['onEndedFunC'] = b2_r5['bind'](yzdte), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, _28r5u['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, _28r5u['off'] = function (bdk8r, extsaz, zsxea9) {
      if (bdk8r == 'loadedmetadata') this['onPlayFunc'] = zsxea9['bind'](extsaz), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else bdk8r == 'ended' && (this['onEndedFunC'] = zsxea9['bind'](extsaz), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, _28r5u['load'] = function (g914h) {
      if (!this['videoElement']) return;this['videoElement']['src'] = g914h;
    }, _28r5u['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, _28r5u['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, _28r5u['size'] = function (lni7vf, dkyr8b) {
      if (!this['videoElement']) return;this['videoElement']['width'] = lni7vf, this['videoElement']['height'] = dkyr8b;
    }, _28r5u['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, _28r5u['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, k_5b(0x0, _28r5u, 'duration', function () {
      return this['_duration'];
    }), k_5b(0x0, _28r5u, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (p19gh4) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = p19gh4;
    }), k_5b(0x0, _28r5u, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), k_5b(0x0, _28r5u, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), k_5b(0x0, _28r5u, 'ended', function () {
      return this['videoend'];
    }), k_5b(0x0, _28r5u, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (zastxe) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = zastxe;
    }), k_5b(0x0, _28r5u, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (zota) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = zota;
    }), k_5b(0x0, _28r5u, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (p19gxh) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = p19gxh;
    }), k_5b(0x0, _28r5u, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), k_5b(0x0, _28r5u, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (ozts) {
      if (!this['videoElement']) return;this['videoElement']['x'] = ozts;
    }), k_5b(0x0, _28r5u, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (fivnl) {
      if (!this['videoElement']) return;this['videoElement']['y'] = fivnl;
    }), k_5b(0x0, _28r5u, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), k_5b(0x0, _28r5u, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (zesx9) {
      if (!this['videoElement']) return;this['videoElement']['src'] = zesx9;
    }), k_5b(0x0, _28r5u, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (szta) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = szta;
    }), k_5b(0x0, _28r5u, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (xs1ph) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = xs1ph;
    }), fvnl4;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var tyzokd in Laya) {
    var ph61g4 = Laya[tyzokd];ph61g4 && ph61g4['__isclass'] && (exports[tyzokd] = ph61g4);
  }
});