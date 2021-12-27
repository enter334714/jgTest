var S = wx.$J;
(function (window, document, m1qfd2) {
  var xi982z = m1qfd2['un'],
      clb = m1qfd2['uns'],
      iqd821 = m1qfd2['static'],
      rf1q7 = m1qfd2['class'],
      ksgo0y = m1qfd2['getset'],
      uelp = m1qfd2['__newvec'],
      uplbe = laya['utils']['Browser'],
      rqfmd1 = laya['events']['Event'],
      okgys6 = laya['events']['EventDispatcher'],
      u0g4l = laya['resource']['HTMLImage'],
      csy = laya['utils']['Handler'],
      m28dq1 = laya['display']['Input'],
      n4bu = laya['net']['Loader'],
      i9z28x = laya['maths']['Matrix'],
      x$9a = laya['renders']['Render'],
      enj5p = laya['utils']['RunDriver'],
      r7yk6 = laya['media']['Sound'],
      jvw5n = laya['media']['SoundChannel'],
      qf = laya['media']['SoundManager'],
      b4uep = laya['display']['Stage'],
      pbe4un = laya['net']['URL'],
      xa9zhi = laya['utils']['Utils'],
      hxa9$z = function () {
    function u04c() {}return rf1q7(u04c, 'laya.wx.mini.MiniAdpter'), u04c['getJson'] = function (lo0guc) {
      return JSON['parse'](lo0guc);
    }, u04c['init'] = function (zhax, sy0goc) {
      zhax === void 0x0 && (zhax = ![]), sy0goc === void 0x0 && (sy0goc = ![]);if (u04c['_inited']) return;u04c['window'] = window;if (u04c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;u04c['_inited'] = !![], u04c['isZiYu'] = sy0goc, u04c['isPosMsgYu'] = zhax, u04c['EnvConfig'] = {}, !u04c['isZiYu'] && (gy0ol['setNativeFileDir']('/layaairGame'), gy0ol['existDir'](gy0ol['fileNativeDir'], csy['create'](u04c, u04c['onMkdirCallBack']))), u04c['window']['focus'] = function () {}, m1qfd2['getUrlPath'] = function () {}, u04c['window']['logtime'] = function (uc0g4l) {}, u04c['window']['alertTimeLog'] = function (g0osk) {}, u04c['window']['resetShareInfo'] = function () {}, u04c['window']['CanvasRenderingContext2D'] = function () {}, u04c['window']['CanvasRenderingContext2D']['prototype'] = u04c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], u04c['window']['document']['body']['appendChild'] = function () {}, u04c['EnvConfig']['pixelRatioInt'] = 0x0, enj5p['getPixelRatio'] = u04c['pixelRatio'], u04c['_preCreateElement'] = uplbe['createElement'], uplbe['createElement'] = u04c['createElement'], enj5p['createShaderCondition'] = u04c['createShaderCondition'], xa9zhi['parseXMLFromString'] = u04c['parseXMLFromString'], m28dq1['_createInputElement'] = xz9a8['_createInputElement'], u04c['EnvConfig']['load'] = n4bu['prototype']['load'], n4bu['prototype']['load'] = u4lbec['prototype']['load'], u04c['isZiYu'] && zhax && wx['onMessage'](function (mfd21q) {
        mfd21q['isLoad'] && (gy0ol['ziyuFileData'][mfd21q['url']] = mfd21q['data']);
      });
    }, u04c['onMkdirCallBack'] = function (n5wpj, i82q) {
      if (!n5wpj) gy0ol['filesListObj'] = JSON['parse'](i82q['data']);
    }, u04c['pixelRatio'] = function () {
      if (!u04c['EnvConfig']['pixelRatioInt']) try {
        var iza8x9 = wx['getSystemInfoSync']();return u04c['EnvConfig']['pixelRatioInt'] = iza8x9['pixelRatio'], iza8x9 = iza8x9, iza8x9['pixelRatio'];
      } catch (pjne5) {}return u04c['EnvConfig']['pixelRatioInt'];
    }, u04c['createElement'] = function (fs67r) {
      if (fs67r == 'canvas') {
        var $za9;return u04c['idx'] == 0x1 ? u04c['isZiYu'] ? ($za9 = sharedCanvas, $za9['style'] = {}) : $za9 = window['canvas'] : $za9 = window['wx']['createCanvas'](), u04c['idx']++, $za9;
      } else {
        if (fs67r == 'textarea' || fs67r == 'input') return u04c['onCreateInput'](fs67r);else {
          if (fs67r == 'div') {
            var iaz9 = u04c['_preCreateElement'](fs67r);return iaz9['contains'] = function (ueb4pl) {
              return null;
            }, iaz9['removeChild'] = function (ecu4) {}, iaz9;
          } else return u04c['_preCreateElement'](fs67r);
        }
      }
    }, u04c['onCreateInput'] = function (pe4l) {
      var wp35j = u04c['_preCreateElement'](pe4l);return wp35j['focus'] = xz9a8['wxinputFocus'], wp35j['blur'] = xz9a8['wxinputblur'], wp35j['style'] = {}, wp35j['value'] = 0x0, wp35j['parentElement'] = {}, wp35j['placeholder'] = {}, wp35j['type'] = {}, wp35j['setColor'] = function (a9izh) {}, wp35j['setType'] = function (zxhi9a) {}, wp35j['setFontFace'] = function (q1d2fm) {}, wp35j['addEventListener'] = function (c0oygs) {}, wp35j['contains'] = function (go0k) {
        return null;
      }, wp35j['removeChild'] = function (qmf1d2) {}, wp35j;
    }, u04c['createShaderCondition'] = function (fsrk6) {
      var pe4unb = this,
          x2d8 = function () {
        var l0gcu = fsrk6;return pe4unb[fsrk6['replace']('this.', '')];
      };return x2d8;
    }, u04c['EnvConfig'] = null, u04c['window'] = null, u04c['_preCreateElement'] = null, u04c['_inited'] = ![], u04c['wxRequest'] = null, u04c['systemInfo'] = null, u04c['version'] = '0.0.1', u04c['isZiYu'] = ![], u04c['isPosMsgYu'] = ![], u04c['parseXMLFromString'] = function (d82) {
      var md1qrf, jw5pn;d82 = d82['replace'](/>\s+</g, '><');try {
        md1qrf = new window['Parser']['DOMParser']()['parseFromString'](d82, 'text/xml');
      } catch (x2z9i8) {
        throw '需要引入xml解析库文件';
      }return md1qrf;
    }, u04c['idx'] = 0x1, u04c;
  }(),
      iz9x82 = function () {
    function ysgko0() {}rf1q7(ysgko0, 'laya.wx.mini.MiniImage');var golyc = ysgko0['prototype'];return golyc['_loadImage'] = function (oyc0lg) {
      var lug04c = this,
          nepj3 = ![];oyc0lg['indexOf']('layaNativeDir/') == -0x1 && (nepj3 = !![], oyc0lg = pbe4un['formatURL'](oyc0lg));if (!gy0ol['getFileInfo'](oyc0lg)) {
        if (oyc0lg['indexOf']('http://') != -0x1 || oyc0lg['indexOf']('https://') != -0x1) gy0ol['downImg'](oyc0lg, new csy(ysgko0, ysgko0['onDownImgCallBack'], [oyc0lg, lug04c]), oyc0lg);else ysgko0['onCreateImage'](oyc0lg, lug04c, !![]);
      } else ysgko0['onCreateImage'](oyc0lg, lug04c, !nepj3);
    }, ysgko0['onDownImgCallBack'] = function (cbul04, glc0u4, goycs) {
      if (!goycs) ysgko0['onCreateImage'](cbul04, glc0u4);else glc0u4['onError'](null);
    }, ysgko0['onCreateImage'] = function (x98di, ble4uc, fmd12q) {
      fmd12q === void 0x0 && (fmd12q = ![]);var ixah;if (!fmd12q) {
        var ogs6 = gy0ol['getFileInfo'](x98di),
            x9$h = ogs6['md5'];ixah = gy0ol['getFileNativePath'](x9$h);
      } else ixah = x98di;if (ble4uc['imgCache'] == null) ble4uc['imgCache'] = {};var cul4g;function m6f71() {
        cul4g['onload'] = null, cul4g['onerror'] = null, delete ble4uc['imgCache'][x98di];
      };var nwj5p = function () {
        m6f71(), ble4uc['onLoaded'](cul4g);
      },
          hz$ax9 = function () {
        m6f71(), ble4uc['event']('error', 'Load image failed');
      };ble4uc['_type'] == 'nativeimage' ? (cul4g = new uplbe['window']['Image'](), cul4g['crossOrigin'] = '', cul4g['onload'] = nwj5p, cul4g['onerror'] = hz$ax9, cul4g['src'] = ixah, ble4uc['imgCache'][x98di] = cul4g) : new u0g4l['create'](ixah, { 'onload': nwj5p, 'onerror': hz$ax9, 'onCreate': function (so0gky) {
          cul4g = so0gky, ble4uc['imgCache'][x98di] = so0gky;
        } });
    }, ysgko0;
  }(),
      xz9a8 = function () {
    function g04lu() {}return rf1q7(g04lu, 'laya.wx.mini.MiniInput'), g04lu['_createInputElement'] = function () {
      m28dq1['_initInput'](m28dq1['area'] = uplbe['createElement']('textarea')), m28dq1['_initInput'](m28dq1['input'] = uplbe['createElement']('input')), m28dq1['inputContainer'] = uplbe['createElement']('div'), m28dq1['inputContainer']['style']['position'] = 'absolute', m28dq1['inputContainer']['style']['zIndex'] = 0x186a0, uplbe['container']['appendChild'](m28dq1['inputContainer']), m28dq1['inputContainer']['setPos'] = function (km6f7, wv3n) {
        m28dq1['inputContainer']['style']['left'] = km6f7 + 'px', m28dq1['inputContainer']['style']['top'] = wv3n + 'px';
      }, m1qfd2['stage']['on']('resize', null, g04lu['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rfmq7) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), qf['_soundClass'] = bne5p, qf['_musicClass'] = bne5p;
    }, g04lu['_onStageResize'] = function () {
      var p35nwj = m1qfd2['stage']['_canvasTransform']['identity']();p35nwj['scale'](uplbe['width'] / x$9a['canvas']['width'] / enj5p['getPixelRatio'](), uplbe['height'] / x$9a['canvas']['height'] / enj5p['getPixelRatio']());
    }, g04lu['wxinputFocus'] = function (ahx9$) {
      var p4beu = m28dq1['inputElement']['target'];if (p4beu && !p4beu['editable']) return;hxa9$z['window']['wx']['offKeyboardConfirm'](), hxa9$z['window']['wx']['offKeyboardInput'](), hxa9$z['window']['wx']['showKeyboard']({ 'defaultValue': p4beu['text'], 'maxLength': p4beu['maxChars'], 'multiple': p4beu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qm182) {}, 'fail': function (axhzi) {} }), hxa9$z['window']['wx']['onKeyboardConfirm'](function (qdr1m) {
        var ue4cb = qdr1m ? qdr1m['value'] : '';p4beu['text'] = ue4cb, p4beu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), hxa9$z['window']['wx']['onKeyboardInput'](function (pb4e5n) {
        var k6yo7s = pb4e5n ? pb4e5n['value'] : '';if (!p4beu['multiline']) {
          if (k6yo7s['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }p4beu['text'] = k6yo7s, p4beu['event']('input');
      });
    }, g04lu['inputEnter'] = function () {
      m28dq1['inputElement']['target']['focus'] = ![];
    }, g04lu['wxinputblur'] = function () {
      g04lu['hideKeyboard']();
    }, g04lu['hideKeyboard'] = function () {
      hxa9$z['window']['wx']['offKeyboardConfirm'](), hxa9$z['window']['wx']['offKeyboardInput'](), hxa9$z['window']['wx']['hideKeyboard']({ 'success': function (sk7yo6) {
          console['log']('隐藏键盘');
        }, 'fail': function (krm) {
          console['log']('隐藏键盘出错:' + (krm ? krm['errMsg'] : ''));
        } });
    }, g04lu;
  }(),
      u4lbec = function () {
    function dqfm2() {}rf1q7(dqfm2, 'laya.wx.mini.MiniLoader');var yok0sg = dqfm2['prototype'];return yok0sg['load'] = function (ix28dq, nvw, ha9zi, vw5jn3, ys7o) {
      ha9zi === void 0x0 && (ha9zi = !![]), ys7o === void 0x0 && (ys7o = ![]);var axh$ = this;axh$['_url'] = ix28dq;if (ix28dq['indexOf']('data:image') === 0x0) axh$['_type'] = nvw = 'image';else axh$['_type'] = nvw || (nvw = axh$['getTypeFromUrl'](ix28dq));axh$['_cache'] = ha9zi, axh$['_data'] = null;var xai8z9 = 'ascii';if (ix28dq['indexOf']('.fnt') != -0x1) xai8z9 = 'utf8';else nvw == 'arraybuffer' && (xai8z9 = '');;var ceub = xa9zhi['getFileExtension'](ix28dq);if (dqfm2['_fileTypeArr']['indexOf'](ceub) != -0x1) hxa9$z['EnvConfig']['load']['call'](this, ix28dq, nvw, ha9zi, vw5jn3, ys7o);else {
        if (!gy0ol['getFileInfo'](ix28dq)) {
          if (ix28dq['indexOf']('layaNativeDir/') != -0x1) {
            if (hxa9$z['isZiYu']) {
              var gyl = gy0ol['ziyuFileData'][ix28dq];axh$['onLoaded'](gyl);return;
            } else {
              cosnole['log']('read read'), gy0ol['read'](ix28dq, xai8z9, new csy(dqfm2, dqfm2['onReadNativeCallBack'], [xai8z9, ix28dq, nvw, ha9zi, vw5jn3, ys7o, axh$]));return;
            }
          }if (pbe4un['rootPath'] == '') var w35jv = ix28dq;else w35jv = ix28dq['split'](pbe4un['rootPath'])[0x0];ix28dq['indexOf']('http://') != -0x1 || ix28dq['indexOf']('https://') != -0x1 ? hxa9$z['EnvConfig']['load']['call'](axh$, ix28dq, nvw, ha9zi, vw5jn3, ys7o) : gy0ol['readFile'](w35jv, xai8z9, new csy(dqfm2, dqfm2['onReadNativeCallBack'], [xai8z9, ix28dq, nvw, ha9zi, vw5jn3, ys7o, axh$]), ix28dq);
        } else hxa9$z['EnvConfig']['load']['call'](this, ix28dq, nvw, ha9zi, vw5jn3, ys7o);
      }
    }, yok0sg['resMgrLoad'] = function (xi2dq, p5bne, zaixh9, q28idx, nb54, kg6oys, guolc) {
      zaixh9 === void 0x0 && (zaixh9 = 0x0), q28idx === void 0x0 && (q28idx = ![]), nb54 === void 0x0 && (nb54 = ![]), kg6oys === void 0x0 && (kg6oys = 0x0), guolc === void 0x0 && (guolc = 0x3), xi2dq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xi2dq), hxa9$z['EnvConfig']['resMgrLoad'](xi2dq, (f76rkm, ogyk, e5) => {
        dqfm2['prototype']['resMgrLoadCallBack'](f76rkm, ogyk, e5, p5bne);
      }, zaixh9, q28idx, nb54, kg6oys, guolc);
    }, yok0sg['resMgrLoadCallBack'] = function (sgc0oy, iax9, eb4lc, mfkr7) {
      console['log']('buff:::', sgc0oy, eb4lc, gy0ol['fileNativeDir'] + '///' + gy0ol['fileListName']), mfkr7(sgc0oy, iax9, eb4lc);
    }, yok0sg['clearRes'] = function (f1rqm, m7k6) {
      m7k6 === void 0x0 && (m7k6 = ![]);var o0sgc = this;o0sgc['clearRes'](f1rqm, m7k6);var enjbp5 = gy0ol['getFileInfo'](f1rqm);if (enjbp5 && (f1rqm['indexOf']('http://') != -0x1 || f1rqm['indexOf']('https://') != -0x1)) {
        var n4eupb = enjbp5['md5'],
            bjnp = gy0ol['getFileNativePath'](n4eupb);gy0ol['remove'](bjnp);
      }
    }, dqfm2['onReadNativeCallBack'] = function (m7fq1, pbe5jn, i89d2x, clg40u, clo0gu, fmqd1, njp5b, z9xiah, rk6s) {
      clg40u === void 0x0 && (clg40u = !![]), fmqd1 === void 0x0 && (fmqd1 = ![]), z9xiah === void 0x0 && (z9xiah = 0x0);if (!z9xiah) {
        var ysgo;if (i89d2x == 'json' || i89d2x == 'atlas') ysgo = hxa9$z['getJson'](rk6s['data']);else i89d2x == 'xml' ? ysgo = xa9zhi['parseXMLFromString'](rk6s['data']) : ysgo = rk6s['data'];njp5b['onLoaded'](ysgo), !hxa9$z['isZiYu'] && hxa9$z['isPosMsgYu'] && i89d2x != 'arraybuffer' && wx['postMessage']({ 'url': pbe5jn, 'data': ysgo, 'isLoad': !![] });
      } else z9xiah == 0x1 && hxa9$z['EnvConfig']['load']['call'](njp5b, pbe5jn, i89d2x, clg40u, clo0gu, fmqd1);
    }, iqd821(dqfm2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), dqfm2;
  }(),
      gy0ol = function (z$9h) {
    function ky76so() {
      ky76so['__super']['call'](this);;
    }return rf1q7(ky76so, 'laya.wx.mini.MiniFileMgr', z$9h), ky76so['isLoadFile'] = function (zi928) {
      return ky76so['_fileTypeArr']['indexOf'](zi928) != -0x1 ? !![] : ![];
    }, ky76so['getFileInfo'] = function (lubep) {
      var k7sr6 = lubep['split']('?')[0x0],
          o7y6ks = ky76so['filesListObj'][k7sr6];if (o7y6ks == null) return null;else return o7y6ks;return null;
    }, ky76so['onFileUpdate'] = function (lg0c4u, ha9$x) {
      var aixhz = lg0c4u['split']('/'),
          cglo0y = aixhz[aixhz['length'] - 0x1],
          z829 = ky76so['getFileInfo'](ha9$x);if (z829 == null) ky76so['onSaveFile'](ha9$x, cglo0y);else {
        if (z829['readyUrl'] != ha9$x) ky76so['remove'](cglo0y, ha9$x);
      }
    }, ky76so['exits'] = function (s0oy, kr7f6m) {
      var mk67fr = ky76so['getFileNativePath'](s0oy);ky76so['fs']['getFileInfo']({ 'filePath': mk67fr, 'success': function (ogy0l) {
          kr7f6m != null && kr7f6m['runWith']([0x0, ogy0l]);
        }, 'fail': function (lue4bp) {
          kr7f6m != null && kr7f6m['runWith']([0x1, lue4bp]);
        } });
    }, ky76so['read'] = function (gosk0, j5nbep, qi82, epbun) {
      j5nbep === void 0x0 && (j5nbep = 'ascill'), epbun === void 0x0 && (epbun = '');var ulb4ec;epbun != '' ? ulb4ec = ky76so['getFileNativePath'](gosk0) : ulb4ec = gosk0, ky76so['fs']['readFile']({ 'filePath': ulb4ec, 'encoding': j5nbep, 'success': function (qrfd1) {
          qi82 != null && qi82['runWith']([0x0, qrfd1]);
        }, 'fail': function (d2i89x) {
          if (d2i89x && epbun != '') ky76so['down'](epbun, j5nbep, qi82, epbun);else qi82 != null && qi82['runWith']([0x1]);
        } });
    }, ky76so['readNativeFile'] = function (q8ix2d, ok6s7) {
      ky76so['fs']['readFile']({ 'filePath': q8ix2d, 'encoding': '', 'success': function (pb) {
          ok6s7 != null && ok6s7['runWith']([0x0]);
        }, 'fail': function (q1fr7) {
          ok6s7 != null && ok6s7['runWith']([0x1]);
        } });
    }, ky76so['down'] = function (cu4g0, e4lcb, gyks6, i8az9) {
      e4lcb === void 0x0 && (e4lcb = 'ascill'), i8az9 === void 0x0 && (i8az9 = '');var l4bu0c = ky76so['getFileNativePath'](i8az9),
          fr67m = ky76so['wxdown']({ 'url': cu4g0, 'filePath': l4bu0c, 'success': function (dm2f1q) {
          if (dm2f1q['statusCode'] === 0xc8) ky76so['readFile'](dm2f1q['filePath'], e4lcb, gyks6, i8az9);
        }, 'fail': function (luc0g4) {
          gyks6 != null && gyks6['runWith']([0x1, luc0g4]);
        } });fr67m['onProgressUpdate'](function (ax$h9) {
        gyks6 != null && gyks6['runWith']([0x2, ax$h9['progress']]);
      });
    }, ky76so['readFile'] = function (ahi9z, sog, cgoul, ax8) {
      sog === void 0x0 && (sog = 'ascill'), ax8 === void 0x0 && (ax8 = ''), ky76so['fs']['readFile']({ 'filePath': ahi9z, 'encoding': sog, 'success': function (i9ax8) {
          if (ahi9z['indexOf']('http://') != -0x1 || ahi9z['indexOf']('https://') != -0x1) ky76so['onFileUpdate'](ahi9z, ax8);cgoul != null && cgoul['runWith']([0x0, i9ax8]);
        }, 'fail': function (q1dmr) {
          if (q1dmr) cgoul != null && cgoul['runWith']([0x1, q1dmr]);
        } });
    }, ky76so['downImg'] = function (lcu0o, z9hax, cu0ol) {
      cu0ol === void 0x0 && (cu0ol = '');var id29x8 = ky76so['wxdown']({ 'url': lcu0o, 'success': function (xd298i) {
          xd298i['statusCode'] === 0xc8 && ky76so['copyFile'](xd298i['tempFilePath'], cu0ol, z9hax);
        }, 'fail': function (ix28q) {
          z9hax != null && z9hax['runWith']([0x1, ix28q]);
        } });
    }, ky76so['copyFile'] = function (xi289, eunp4b, d1i82q) {
      var idqx8 = xi289['split']('/'),
          ebuc4l = idqx8[idqx8['length'] - 0x1],
          z28x9 = eunp4b['split']('?')[0x0],
          i892z = ky76so['getFileInfo'](eunp4b),
          ko0gsy = ky76so['getFileNativePath'](ebuc4l);ky76so['fs']['copyFile']({ 'srcPath': xi289, 'destPath': ko0gsy, 'success': function (axzhi9) {
          if (!i892z) ky76so['onSaveFile'](eunp4b, ebuc4l), d1i82q != null && d1i82q['runWith']([0x0]);else {
            if (i892z['readyUrl'] != eunp4b) ky76so['remove'](ebuc4l, eunp4b, d1i82q);
          }
        }, 'fail': function (jv5) {
          d1i82q != null && d1i82q['runWith']([0x1, jv5]);
        } });
    }, ky76so['getFileNativePath'] = function (gu0cl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gu0cl;
    }, ky76so['remove'] = function (kogs, zihxa, l0ycog) {
      zihxa === void 0x0 && (zihxa = '');var ul04bc = ky76so['getFileInfo'](zihxa),
          ebu4np = ky76so['getFileNativePath'](ul04bc['md5']);m1qfd2['loader']['clearRes'](ul04bc['readyUrl']), ky76so['fs']['unlink']({ 'filePath': ebu4np, 'success': function (nbp4eu) {
          if (zihxa != '') ky76so['onSaveFile'](zihxa, kogs);l0ycog != null && l0ycog['runWith']([0x0]);
        }, 'fail': function (pbu4e) {} });
    }, ky76so['onSaveFile'] = function (ocu, oyl) {
      var iq8d21 = ocu['split']('?')[0x0];ky76so['filesListObj'][iq8d21] = { 'md5': oyl, 'readyUrl': ocu }, ky76so['fs']['writeFile']({ 'filePath': ky76so['fileNativeDir'] + '/' + ky76so['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ky76so['filesListObj']), 'success': function (h9x$) {
          console['log']('写入测试测试成功：', h9x$);
        }, 'fail': function (q1mfdr) {
          console['log']('写入测试测试失败：', q1mfdr);
        } });
    }, ky76so['existDir'] = function (oy6s7, l0ug4) {
      ky76so['fs']['mkdir']({ 'dirPath': oy6s7, 'success': function (qr71mf) {
          l0ug4 != null && l0ug4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e4bpun) {
          if (e4bpun['errMsg']['indexOf']('file already exists') != -0x1) ky76so['readSync'](ky76so['fileListName'], 'utf8', l0ug4);else l0ug4 != null && l0ug4['runWith']([0x1, e4bpun]);
        } });
    }, ky76so['readSync'] = function (buc40l, kog6ys, cug0l4, go0syk) {
      kog6ys === void 0x0 && (kog6ys = 'ascill'), go0syk === void 0x0 && (go0syk = '');var kyos6g = ky76so['getFileNativePath'](buc40l),
          jnwp;try {
        jnwp = ky76so['fs']['readFileSync'](kyos6g), cug0l4 != null && cug0l4['runWith']([0x0, { 'data': jnwp }]);
      } catch (n4pb5) {
        cug0l4 != null && cug0l4['runWith']([0x1]);
      }
    }, ky76so['readCache'] = function () {}, ky76so['writeCache'] = function (nu4b) {
      var ucb0l4 = readyUrl['split']('?')[0x0];ky76so['filesListObj'][ucb0l4] = { 'md5': md5Name, 'readyUrl': readyUrl }, ky76so['fs']['writeFile']({ 'filePath': ky76so['fileNativeDir'] + '/' + ky76so['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ky76so['filesListObj']), 'success': function (kf67s) {}, 'fail': function (jpw35n) {} });
    }, ky76so['setNativeFileDir'] = function (i281qd) {
      ky76so['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i281qd;
    }, ky76so['filesListObj'] = {}, ky76so['fileNativeDir'] = null, ky76so['fileListName'] = 'layaairfiles.txt', ky76so['ziyuFileData'] = {}, iqd821(ky76so, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ky76so;
  }(okgys6),
      bne5p = function (vwj35) {
    function az9ih() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], az9ih['__super']['call'](this), this['_sound'] = az9ih['_createSound']();
    }rf1q7(az9ih, 'laya.wx.mini.MiniSound', vwj35);var e4np5b = az9ih['prototype'];return e4np5b['load'] = function (r16f7m) {
      var qm17f = this;r16f7m = pbe4un['formatURL'](r16f7m), this['url'] = r16f7m;if (az9ih['_audioCache'][r16f7m]) {
        this['event']('complete');return;
      }function ocy0l() {
        if (az9ih['_null'] != undefined) qm17f['_sound']['onCanplay'](az9ih['_null']), qm17f['_sound']['onError'](az9ih['_null']);else try {
          qm17f['_sound']['onCanplay'](null), qm17f['_sound']['onError'](null), az9ih['_null'] = null;
        } catch (wn5vj) {
          console['warn']('[wxmini] _clearSound:' + wn5vj), qm17f['_sound']['onCanplay'](k0sgoy), qm17f['_sound']['onError'](k0sgoy), az9ih['_null'] = k0sgoy;
        }
      }function za$9xh() {
        ocy0l(), gyosk['loaded'] = !![], gyosk['event']('complete'), az9ih['_audioCache'][gyosk['url']] = gyosk;
      }function axhzi9(l0) {
        console['error']('errCode=' + l0['errCode'] + '  errMsg=' + l0['errMsg']), ocy0l(), gyosk['event']('error');
      }function k0sgoy() {}this['_sound']['onCanplay'](za$9xh), this['_sound']['onError'](axhzi9), this['_sound']['src'] = r16f7m;var gyosk = this;
    }, e4np5b['play'] = function (kysog0, xa9i) {
      kysog0 === void 0x0 && (kysog0 = 0x0), xa9i === void 0x0 && (xa9i = 0x0);var dx2qi8;if (this['url'] == qf['_tMusic']) {
        if (!az9ih['_musicAudio']) az9ih['_musicAudio'] = az9ih['_createSound']();dx2qi8 = az9ih['_musicAudio'];
      } else dx2qi8 = az9ih['_createSound']();dx2qi8['src'] = this['url'];var ylg = new f1md2q(dx2qi8);return ylg['url'] = this['url'], ylg['loops'] = xa9i, ylg['startTime'] = kysog0, ylg['play'](), qf['addChannel'](ylg), ylg;
    }, e4np5b['dispose'] = function () {
      var r1m7f6 = az9ih['_audioCache'][this['url']];r1m7f6 && (r1m7f6['src'] = '', delete az9ih['_audioCache'][this['url']]);
    }, ksgo0y(0x0, e4np5b, 'duration', function () {
      return this['_sound']['duration'];
    }), az9ih['_createSound'] = function () {
      return az9ih['_id']++, hxa9$z['window']['wx']['createInnerAudioContext']();
    }, az9ih['_musicAudio'] = null, az9ih['_id'] = 0x0, az9ih['_audioCache'] = {}, az9ih['_null'] = undefined, az9ih;
  }(okgys6),
      f1md2q = function (rf1m7) {
    function q81md(gclu) {
      this['_audio'] = null, this['_onEnd'] = null, q81md['__super']['call'](this), this['_audio'] = gclu, this['_onEnd'] = xa9zhi['bind'](this['__onEnd'], this), gclu['onEnded'](this['_onEnd']);
    }rf1q7(q81md, 'laya.wx.mini.MiniSoundChannel', rf1m7);var cul4b0 = q81md['prototype'];return cul4b0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (m1qfd2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, cul4b0['__onNull'] = function () {}, cul4b0['play'] = function () {
      this['isStopped'] = ![], qf['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, cul4b0['stop'] = function () {
      this['isStopped'] = !![], qf['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (q81md['_null'] != undefined) this['_audio']['onEnded'](q81md['_null']);else try {
        this['_audio']['onEnded'](null), q81md['_null'] = null;
      } catch (p5je3n) {
        console['warn']('[wxmini] stop:' + p5je3n), this['_audio']['onEnded'](xa9zhi['bind'](this['__onNull'], this)), q81md['_null'] = xa9zhi['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, cul4b0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, cul4b0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], qf['addChannel'](this), this['_audio']['play']();
    }, ksgo0y(0x0, cul4b0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ksgo0y(0x0, cul4b0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ksgo0y(0x0, cul4b0, 'volume', function () {
      return 0x1;
    }, function (nbeu4p) {}), q81md['_null'] = undefined, q81md;
  }(jvw5n);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dix92 in Laya) {
    var l0ocug = Laya[dix92];l0ocug && l0ocug['__isclass'] && (exports[dix92] = l0ocug);
  }
});