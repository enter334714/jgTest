var S = wx.$J;
(function (window, document, x28qdi) {
  var h9a$x = x28qdi['un'],
      d2qi1 = x28qdi['uns'],
      mrf17 = x28qdi['static'],
      a9zxi8 = x28qdi['class'],
      c40glu = x28qdi['getset'],
      m7rkf = x28qdi['__newvec'],
      lc0uog = laya['utils']['Browser'],
      be45np = laya['events']['Event'],
      ok76ys = laya['events']['EventDispatcher'],
      mrfq7 = laya['resource']['HTMLImage'],
      kfm7r6 = laya['utils']['Handler'],
      pjw3n5 = laya['display']['Input'],
      x9zi8 = laya['net']['Loader'],
      u4lcg0 = laya['maths']['Matrix'],
      f2m1dq = laya['renders']['Render'],
      dm1f2 = laya['utils']['RunDriver'],
      olcgy = laya['media']['Sound'],
      ucelb = laya['media']['SoundChannel'],
      p5nwj = laya['media']['SoundManager'],
      yloc0 = laya['display']['Stage'],
      yksr67 = laya['net']['URL'],
      f1rm = laya['utils']['Utils'],
      ou0glc = function () {
    function blp4eu() {}return a9zxi8(blp4eu, 'laya.wx.mini.MiniAdpter'), blp4eu['getJson'] = function (j3pe5n) {
      return JSON['parse'](j3pe5n);
    }, blp4eu['init'] = function (dqm12f, f671m) {
      dqm12f === void 0x0 && (dqm12f = ![]), f671m === void 0x0 && (f671m = ![]);if (blp4eu['_inited']) return;blp4eu['window'] = window;if (blp4eu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;blp4eu['_inited'] = !![], blp4eu['isZiYu'] = f671m, blp4eu['isPosMsgYu'] = dqm12f, blp4eu['EnvConfig'] = {}, !blp4eu['isZiYu'] && (kysg6o['setNativeFileDir']('/layaairGame'), kysg6o['existDir'](kysg6o['fileNativeDir'], kfm7r6['create'](blp4eu, blp4eu['onMkdirCallBack']))), blp4eu['window']['focus'] = function () {}, x28qdi['getUrlPath'] = function () {}, blp4eu['window']['logtime'] = function (f6sr7) {}, blp4eu['window']['alertTimeLog'] = function (i9z8xa) {}, blp4eu['window']['resetShareInfo'] = function () {}, blp4eu['window']['CanvasRenderingContext2D'] = function () {}, blp4eu['window']['CanvasRenderingContext2D']['prototype'] = blp4eu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], blp4eu['window']['document']['body']['appendChild'] = function () {}, blp4eu['EnvConfig']['pixelRatioInt'] = 0x0, dm1f2['getPixelRatio'] = blp4eu['pixelRatio'], blp4eu['_preCreateElement'] = lc0uog['createElement'], lc0uog['createElement'] = blp4eu['createElement'], dm1f2['createShaderCondition'] = blp4eu['createShaderCondition'], f1rm['parseXMLFromString'] = blp4eu['parseXMLFromString'], pjw3n5['_createInputElement'] = b4n5['_createInputElement'], blp4eu['EnvConfig']['load'] = x9zi8['prototype']['load'], x9zi8['prototype']['load'] = mkr7f['prototype']['load'], blp4eu['isZiYu'] && dqm12f && wx['onMessage'](function (rs7f) {
        rs7f['isLoad'] && (kysg6o['ziyuFileData'][rs7f['url']] = rs7f['data']);
      });
    }, blp4eu['onMkdirCallBack'] = function (rm7f1, r617f) {
      if (!rm7f1) kysg6o['filesListObj'] = JSON['parse'](r617f['data']);
    }, blp4eu['pixelRatio'] = function () {
      if (!blp4eu['EnvConfig']['pixelRatioInt']) try {
        var c0oyl = wx['getSystemInfoSync']();return blp4eu['EnvConfig']['pixelRatioInt'] = c0oyl['pixelRatio'], c0oyl = c0oyl, c0oyl['pixelRatio'];
      } catch (z9a$hx) {}return blp4eu['EnvConfig']['pixelRatioInt'];
    }, blp4eu['createElement'] = function (dr) {
      if (dr == 'canvas') {
        var hx9z;return blp4eu['idx'] == 0x1 ? blp4eu['isZiYu'] ? (hx9z = sharedCanvas, hx9z['style'] = {}) : hx9z = window['canvas'] : hx9z = window['wx']['createCanvas'](), blp4eu['idx']++, hx9z;
      } else {
        if (dr == 'textarea' || dr == 'input') return blp4eu['onCreateInput'](dr);else {
          if (dr == 'div') {
            var ryk7 = blp4eu['_preCreateElement'](dr);return ryk7['contains'] = function (ue4np) {
              return null;
            }, ryk7['removeChild'] = function (ksoy) {}, ryk7;
          } else return blp4eu['_preCreateElement'](dr);
        }
      }
    }, blp4eu['onCreateInput'] = function (je5nb) {
      var gsk6o = blp4eu['_preCreateElement'](je5nb);return gsk6o['focus'] = b4n5['wxinputFocus'], gsk6o['blur'] = b4n5['wxinputblur'], gsk6o['style'] = {}, gsk6o['value'] = 0x0, gsk6o['parentElement'] = {}, gsk6o['placeholder'] = {}, gsk6o['type'] = {}, gsk6o['setColor'] = function (x9hzia) {}, gsk6o['setType'] = function (c40b) {}, gsk6o['setFontFace'] = function (lcu04) {}, gsk6o['addEventListener'] = function (g0olyc) {}, gsk6o['contains'] = function (so0gy) {
        return null;
      }, gsk6o['removeChild'] = function (q218) {}, gsk6o;
    }, blp4eu['createShaderCondition'] = function (soyg) {
      var bp4lue = this,
          k0gsy = function () {
        var mk6r7f = soyg;return bp4lue[soyg['replace']('this.', '')];
      };return k0gsy;
    }, blp4eu['EnvConfig'] = null, blp4eu['window'] = null, blp4eu['_preCreateElement'] = null, blp4eu['_inited'] = ![], blp4eu['wxRequest'] = null, blp4eu['systemInfo'] = null, blp4eu['version'] = '0.0.1', blp4eu['isZiYu'] = ![], blp4eu['isPosMsgYu'] = ![], blp4eu['parseXMLFromString'] = function (hz9aix) {
      var lugoc0, ulbec4;hz9aix = hz9aix['replace'](/>\s+</g, '><');try {
        lugoc0 = new window['Parser']['DOMParser']()['parseFromString'](hz9aix, 'text/xml');
      } catch (xziha9) {
        throw '需要引入xml解析库文件';
      }return lugoc0;
    }, blp4eu['idx'] = 0x1, blp4eu;
  }(),
      q82dix = function () {
    function haz() {}a9zxi8(haz, 'laya.wx.mini.MiniImage');var frq1md = haz['prototype'];return frq1md['_loadImage'] = function (p5j3e) {
      var syg = this,
          x9$z = ![];p5j3e['indexOf']('layaNativeDir/') == -0x1 && (x9$z = !![], p5j3e = yksr67['formatURL'](p5j3e));if (!kysg6o['getFileInfo'](p5j3e)) {
        if (p5j3e['indexOf']('http://') != -0x1 || p5j3e['indexOf']('https://') != -0x1) kysg6o['downImg'](p5j3e, new kfm7r6(haz, haz['onDownImgCallBack'], [p5j3e, syg]), p5j3e);else haz['onCreateImage'](p5j3e, syg, !![]);
      } else haz['onCreateImage'](p5j3e, syg, !x9$z);
    }, haz['onDownImgCallBack'] = function (e4lub, publ4, neb5jp) {
      if (!neb5jp) haz['onCreateImage'](e4lub, publ4);else publ4['onError'](null);
    }, haz['onCreateImage'] = function (dqmr1f, gks0o, y6s7ok) {
      y6s7ok === void 0x0 && (y6s7ok = ![]);var gcsyo;if (!y6s7ok) {
        var jv35nw = kysg6o['getFileInfo'](dqmr1f),
            wn35jp = jv35nw['md5'];gcsyo = kysg6o['getFileNativePath'](wn35jp);
      } else gcsyo = dqmr1f;if (gks0o['imgCache'] == null) gks0o['imgCache'] = {};var bpjen;function xahz9i() {
        bpjen['onload'] = null, bpjen['onerror'] = null, delete gks0o['imgCache'][dqmr1f];
      };var n5 = function () {
        xahz9i(), gks0o['onLoaded'](bpjen);
      },
          ylgoc0 = function () {
        xahz9i(), gks0o['event']('error', 'Load image failed');
      };gks0o['_type'] == 'nativeimage' ? (bpjen = new lc0uog['window']['Image'](), bpjen['crossOrigin'] = '', bpjen['onload'] = n5, bpjen['onerror'] = ylgoc0, bpjen['src'] = gcsyo, gks0o['imgCache'][dqmr1f] = bpjen) : new mrfq7['create'](gcsyo, { 'onload': n5, 'onerror': ylgoc0, 'onCreate': function (d2qi81) {
          bpjen = d2qi81, gks0o['imgCache'][dqmr1f] = d2qi81;
        } });
    }, haz;
  }(),
      b4n5 = function () {
    function a$x9z() {}return a9zxi8(a$x9z, 'laya.wx.mini.MiniInput'), a$x9z['_createInputElement'] = function () {
      pjw3n5['_initInput'](pjw3n5['area'] = lc0uog['createElement']('textarea')), pjw3n5['_initInput'](pjw3n5['input'] = lc0uog['createElement']('input')), pjw3n5['inputContainer'] = lc0uog['createElement']('div'), pjw3n5['inputContainer']['style']['position'] = 'absolute', pjw3n5['inputContainer']['style']['zIndex'] = 0x186a0, lc0uog['container']['appendChild'](pjw3n5['inputContainer']), pjw3n5['inputContainer']['setPos'] = function (ub0lc, cbu04l) {
        pjw3n5['inputContainer']['style']['left'] = ub0lc + 'px', pjw3n5['inputContainer']['style']['top'] = cbu04l + 'px';
      }, x28qdi['stage']['on']('resize', null, a$x9z['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nepb5j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), p5nwj['_soundClass'] = h9z$ax, p5nwj['_musicClass'] = h9z$ax;
    }, a$x9z['_onStageResize'] = function () {
      var x8iz2 = x28qdi['stage']['_canvasTransform']['identity']();x8iz2['scale'](lc0uog['width'] / f2m1dq['canvas']['width'] / dm1f2['getPixelRatio'](), lc0uog['height'] / f2m1dq['canvas']['height'] / dm1f2['getPixelRatio']());
    }, a$x9z['wxinputFocus'] = function (elb) {
      var fsrk = pjw3n5['inputElement']['target'];if (fsrk && !fsrk['editable']) return;ou0glc['window']['wx']['offKeyboardConfirm'](), ou0glc['window']['wx']['offKeyboardInput'](), ou0glc['window']['wx']['showKeyboard']({ 'defaultValue': fsrk['text'], 'maxLength': fsrk['maxChars'], 'multiple': fsrk['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (q2d8m1) {}, 'fail': function (np3e5) {} }), ou0glc['window']['wx']['onKeyboardConfirm'](function (oy6kg) {
        var yol = oy6kg ? oy6kg['value'] : '';fsrk['text'] = yol, fsrk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ou0glc['window']['wx']['onKeyboardInput'](function (lb4upe) {
        var azi9xh = lb4upe ? lb4upe['value'] : '';if (!fsrk['multiline']) {
          if (azi9xh['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }fsrk['text'] = azi9xh, fsrk['event']('input');
      });
    }, a$x9z['inputEnter'] = function () {
      pjw3n5['inputElement']['target']['focus'] = ![];
    }, a$x9z['wxinputblur'] = function () {
      a$x9z['hideKeyboard']();
    }, a$x9z['hideKeyboard'] = function () {
      ou0glc['window']['wx']['offKeyboardConfirm'](), ou0glc['window']['wx']['offKeyboardInput'](), ou0glc['window']['wx']['hideKeyboard']({ 'success': function (cul4g) {
          console['log']('隐藏键盘');
        }, 'fail': function (yokg0) {
          console['log']('隐藏键盘出错:' + (yokg0 ? yokg0['errMsg'] : ''));
        } });
    }, a$x9z;
  }(),
      mkr7f = function () {
    function mdqf12() {}a9zxi8(mdqf12, 'laya.wx.mini.MiniLoader');var cu0o = mdqf12['prototype'];return cu0o['load'] = function (lgu40c, pnwj35, npjb5, frm716, haz9i) {
      npjb5 === void 0x0 && (npjb5 = !![]), haz9i === void 0x0 && (haz9i = ![]);var qi28d1 = this;qi28d1['_url'] = lgu40c;if (lgu40c['indexOf']('data:image') === 0x0) qi28d1['_type'] = pnwj35 = 'image';else qi28d1['_type'] = pnwj35 || (pnwj35 = qi28d1['getTypeFromUrl'](lgu40c));qi28d1['_cache'] = npjb5, qi28d1['_data'] = null;var g0ocl = 'ascii';if (lgu40c['indexOf']('.fnt') != -0x1) g0ocl = 'utf8';else pnwj35 == 'arraybuffer' && (g0ocl = '');;var s7o6k = f1rm['getFileExtension'](lgu40c);if (mdqf12['_fileTypeArr']['indexOf'](s7o6k) != -0x1) ou0glc['EnvConfig']['load']['call'](this, lgu40c, pnwj35, npjb5, frm716, haz9i);else {
        if (!kysg6o['getFileInfo'](lgu40c)) {
          if (lgu40c['indexOf']('layaNativeDir/') != -0x1) {
            if (ou0glc['isZiYu']) {
              var y7o6ks = kysg6o['ziyuFileData'][lgu40c];qi28d1['onLoaded'](y7o6ks);return;
            } else {
              cosnole['log']('read read'), kysg6o['read'](lgu40c, g0ocl, new kfm7r6(mdqf12, mdqf12['onReadNativeCallBack'], [g0ocl, lgu40c, pnwj35, npjb5, frm716, haz9i, qi28d1]));return;
            }
          }if (yksr67['rootPath'] == '') var u0blc4 = lgu40c;else u0blc4 = lgu40c['split'](yksr67['rootPath'])[0x0];lgu40c['indexOf']('http://') != -0x1 || lgu40c['indexOf']('https://') != -0x1 ? ou0glc['EnvConfig']['load']['call'](qi28d1, lgu40c, pnwj35, npjb5, frm716, haz9i) : kysg6o['readFile'](u0blc4, g0ocl, new kfm7r6(mdqf12, mdqf12['onReadNativeCallBack'], [g0ocl, lgu40c, pnwj35, npjb5, frm716, haz9i, qi28d1]), lgu40c);
        } else ou0glc['EnvConfig']['load']['call'](this, lgu40c, pnwj35, npjb5, frm716, haz9i);
      }
    }, cu0o['resMgrLoad'] = function (cbu40l, oyl, n5ej, z9xah, o0clug, m6kr7, gosy6) {
      n5ej === void 0x0 && (n5ej = 0x0), z9xah === void 0x0 && (z9xah = ![]), o0clug === void 0x0 && (o0clug = ![]), m6kr7 === void 0x0 && (m6kr7 = 0x0), gosy6 === void 0x0 && (gosy6 = 0x3), cbu40l['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cbu40l), ou0glc['EnvConfig']['resMgrLoad'](cbu40l, (lc04b, sfr, cu0log) => {
        mdqf12['prototype']['resMgrLoadCallBack'](lc04b, sfr, cu0log, oyl);
      }, n5ej, z9xah, o0clug, m6kr7, gosy6);
    }, cu0o['resMgrLoadCallBack'] = function (c4ube, yk76s, z9i8, kysog0) {
      console['log']('buff:::', c4ube, z9i8, kysg6o['fileNativeDir'] + '///' + kysg6o['fileListName']), kysog0(c4ube, yk76s, z9i8);
    }, cu0o['clearRes'] = function (ecb4lu, o6gyk) {
      o6gyk === void 0x0 && (o6gyk = ![]);var x89 = this;x89['clearRes'](ecb4lu, o6gyk);var b0cl4 = kysg6o['getFileInfo'](ecb4lu);if (b0cl4 && (ecb4lu['indexOf']('http://') != -0x1 || ecb4lu['indexOf']('https://') != -0x1)) {
        var y0csgo = b0cl4['md5'],
            nj3w5p = kysg6o['getFileNativePath'](y0csgo);kysg6o['remove'](nj3w5p);
      }
    }, mdqf12['onReadNativeCallBack'] = function (ebu4pl, qi21d8, ugocl, cgyol, y76os, bu4epn, k7ysr6, az9ix8, ok6) {
      cgyol === void 0x0 && (cgyol = !![]), bu4epn === void 0x0 && (bu4epn = ![]), az9ix8 === void 0x0 && (az9ix8 = 0x0);if (!az9ix8) {
        var k6frm7;if (ugocl == 'json' || ugocl == 'atlas') k6frm7 = ou0glc['getJson'](ok6['data']);else ugocl == 'xml' ? k6frm7 = f1rm['parseXMLFromString'](ok6['data']) : k6frm7 = ok6['data'];k7ysr6['onLoaded'](k6frm7), !ou0glc['isZiYu'] && ou0glc['isPosMsgYu'] && ugocl != 'arraybuffer' && wx['postMessage']({ 'url': qi21d8, 'data': k6frm7, 'isLoad': !![] });
      } else az9ix8 == 0x1 && ou0glc['EnvConfig']['load']['call'](k7ysr6, qi21d8, ugocl, cgyol, y76os, bu4epn);
    }, mrf17(mdqf12, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mdqf12;
  }(),
      kysg6o = function (h$xaz) {
    function bp54ne() {
      bp54ne['__super']['call'](this);;
    }return a9zxi8(bp54ne, 'laya.wx.mini.MiniFileMgr', h$xaz), bp54ne['isLoadFile'] = function (gy0cl) {
      return bp54ne['_fileTypeArr']['indexOf'](gy0cl) != -0x1 ? !![] : ![];
    }, bp54ne['getFileInfo'] = function (ixd28) {
      var hzx = ixd28['split']('?')[0x0],
          eblu4c = bp54ne['filesListObj'][hzx];if (eblu4c == null) return null;else return eblu4c;return null;
    }, bp54ne['onFileUpdate'] = function (p5jnw, qd281) {
      var ysco0g = p5jnw['split']('/'),
          u4c0 = ysco0g[ysco0g['length'] - 0x1],
          y6ok7s = bp54ne['getFileInfo'](qd281);if (y6ok7s == null) bp54ne['onSaveFile'](qd281, u4c0);else {
        if (y6ok7s['readyUrl'] != qd281) bp54ne['remove'](u4c0, qd281);
      }
    }, bp54ne['exits'] = function (r1m6f, f1qmdr) {
      var k7mr6f = bp54ne['getFileNativePath'](r1m6f);bp54ne['fs']['getFileInfo']({ 'filePath': k7mr6f, 'success': function (oyg0sk) {
          f1qmdr != null && f1qmdr['runWith']([0x0, oyg0sk]);
        }, 'fail': function (ygco) {
          f1qmdr != null && f1qmdr['runWith']([0x1, ygco]);
        } });
    }, bp54ne['read'] = function (pe5n4b, w35pn, ulbpe4, ysr76) {
      w35pn === void 0x0 && (w35pn = 'ascill'), ysr76 === void 0x0 && (ysr76 = '');var pbe45;ysr76 != '' ? pbe45 = bp54ne['getFileNativePath'](pe5n4b) : pbe45 = pe5n4b, bp54ne['fs']['readFile']({ 'filePath': pbe45, 'encoding': w35pn, 'success': function (ix89) {
          ulbpe4 != null && ulbpe4['runWith']([0x0, ix89]);
        }, 'fail': function (osgc) {
          if (osgc && ysr76 != '') bp54ne['down'](ysr76, w35pn, ulbpe4, ysr76);else ulbpe4 != null && ulbpe4['runWith']([0x1]);
        } });
    }, bp54ne['readNativeFile'] = function (nupe4b, xqdi2) {
      bp54ne['fs']['readFile']({ 'filePath': nupe4b, 'encoding': '', 'success': function (hi9zax) {
          xqdi2 != null && xqdi2['runWith']([0x0]);
        }, 'fail': function ($zax9) {
          xqdi2 != null && xqdi2['runWith']([0x1]);
        } });
    }, bp54ne['down'] = function (k76so, mqd821, frqmd1, q1d28) {
      mqd821 === void 0x0 && (mqd821 = 'ascill'), q1d28 === void 0x0 && (q1d28 = '');var g6oyk = bp54ne['getFileNativePath'](q1d28),
          i8x9d2 = bp54ne['wxdown']({ 'url': k76so, 'filePath': g6oyk, 'success': function (clyg) {
          if (clyg['statusCode'] === 0xc8) bp54ne['readFile'](clyg['filePath'], mqd821, frqmd1, q1d28);
        }, 'fail': function (b5ejn) {
          frqmd1 != null && frqmd1['runWith']([0x1, b5ejn]);
        } });i8x9d2['onProgressUpdate'](function (g04cl) {
        frqmd1 != null && frqmd1['runWith']([0x2, g04cl['progress']]);
      });
    }, bp54ne['readFile'] = function (koy76s, di2, lebc4u, np45b) {
      di2 === void 0x0 && (di2 = 'ascill'), np45b === void 0x0 && (np45b = ''), bp54ne['fs']['readFile']({ 'filePath': koy76s, 'encoding': di2, 'success': function (ys6ogk) {
          if (koy76s['indexOf']('http://') != -0x1 || koy76s['indexOf']('https://') != -0x1) bp54ne['onFileUpdate'](koy76s, np45b);lebc4u != null && lebc4u['runWith']([0x0, ys6ogk]);
        }, 'fail': function (e5j3np) {
          if (e5j3np) lebc4u != null && lebc4u['runWith']([0x1, e5j3np]);
        } });
    }, bp54ne['downImg'] = function (x8qdi2, mfd1, yskgo0) {
      yskgo0 === void 0x0 && (yskgo0 = '');var n54bp = bp54ne['wxdown']({ 'url': x8qdi2, 'success': function (pe35) {
          pe35['statusCode'] === 0xc8 && bp54ne['copyFile'](pe35['tempFilePath'], yskgo0, mfd1);
        }, 'fail': function (dqrm1) {
          mfd1 != null && mfd1['runWith']([0x1, dqrm1]);
        } });
    }, bp54ne['copyFile'] = function (kyogs, k76f, s7y6r) {
      var c40ug = kyogs['split']('/'),
          elpbu4 = c40ug[c40ug['length'] - 0x1],
          pjn5e = k76f['split']('?')[0x0],
          i28xdq = bp54ne['getFileInfo'](k76f),
          ul40cg = bp54ne['getFileNativePath'](elpbu4);bp54ne['fs']['copyFile']({ 'srcPath': kyogs, 'destPath': ul40cg, 'success': function (bp4en) {
          if (!i28xdq) bp54ne['onSaveFile'](k76f, elpbu4), s7y6r != null && s7y6r['runWith']([0x0]);else {
            if (i28xdq['readyUrl'] != k76f) bp54ne['remove'](elpbu4, k76f, s7y6r);
          }
        }, 'fail': function (b4cuel) {
          s7y6r != null && s7y6r['runWith']([0x1, b4cuel]);
        } });
    }, bp54ne['getFileNativePath'] = function (g0luc) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g0luc;
    }, bp54ne['remove'] = function (bj5ne, sky6og, e3j5n) {
      sky6og === void 0x0 && (sky6og = '');var upb4el = bp54ne['getFileInfo'](sky6og),
          ep4n = bp54ne['getFileNativePath'](upb4el['md5']);x28qdi['loader']['clearRes'](upb4el['readyUrl']), bp54ne['fs']['unlink']({ 'filePath': ep4n, 'success': function (l4c0gu) {
          if (sky6og != '') bp54ne['onSaveFile'](sky6og, bj5ne);e3j5n != null && e3j5n['runWith']([0x0]);
        }, 'fail': function (ixq2) {} });
    }, bp54ne['onSaveFile'] = function (oucl0g, gok0) {
      var nwj5p = oucl0g['split']('?')[0x0];bp54ne['filesListObj'][nwj5p] = { 'md5': gok0, 'readyUrl': oucl0g }, bp54ne['fs']['writeFile']({ 'filePath': bp54ne['fileNativeDir'] + '/' + bp54ne['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bp54ne['filesListObj']), 'success': function (j53npw) {
          console['log']('写入测试测试成功：', j53npw);
        }, 'fail': function (lube4c) {
          console['log']('写入测试测试失败：', lube4c);
        } });
    }, bp54ne['existDir'] = function (jn5pe3, nj3pw5) {
      bp54ne['fs']['mkdir']({ 'dirPath': jn5pe3, 'success': function (r1f6m7) {
          nj3pw5 != null && nj3pw5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (oy76s) {
          if (oy76s['errMsg']['indexOf']('file already exists') != -0x1) bp54ne['readSync'](bp54ne['fileListName'], 'utf8', nj3pw5);else nj3pw5 != null && nj3pw5['runWith']([0x1, oy76s]);
        } });
    }, bp54ne['readSync'] = function (lebuc4, bjepn5, ykrs67, co0yg) {
      bjepn5 === void 0x0 && (bjepn5 = 'ascill'), co0yg === void 0x0 && (co0yg = '');var m6r7f1 = bp54ne['getFileNativePath'](lebuc4),
          q82d1;try {
        q82d1 = bp54ne['fs']['readFileSync'](m6r7f1), ykrs67 != null && ykrs67['runWith']([0x0, { 'data': q82d1 }]);
      } catch (kyso6g) {
        ykrs67 != null && ykrs67['runWith']([0x1]);
      }
    }, bp54ne['readCache'] = function () {}, bp54ne['writeCache'] = function (u4c0lg) {
      var ep54n = readyUrl['split']('?')[0x0];bp54ne['filesListObj'][ep54n] = { 'md5': md5Name, 'readyUrl': readyUrl }, bp54ne['fs']['writeFile']({ 'filePath': bp54ne['fileNativeDir'] + '/' + bp54ne['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bp54ne['filesListObj']), 'success': function (o7ys6) {}, 'fail': function (wn) {} });
    }, bp54ne['setNativeFileDir'] = function (yo0c) {
      bp54ne['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yo0c;
    }, bp54ne['filesListObj'] = {}, bp54ne['fileNativeDir'] = null, bp54ne['fileListName'] = 'layaairfiles.txt', bp54ne['ziyuFileData'] = {}, mrf17(bp54ne, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bp54ne;
  }(ok76ys),
      h9z$ax = function (bpneu) {
    function fmdq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], fmdq['__super']['call'](this), this['_sound'] = fmdq['_createSound']();
    }a9zxi8(fmdq, 'laya.wx.mini.MiniSound', bpneu);var r617m = fmdq['prototype'];return r617m['load'] = function (u0c4lb) {
      var b4uepl = this;u0c4lb = yksr67['formatURL'](u0c4lb), this['url'] = u0c4lb;if (fmdq['_audioCache'][u0c4lb]) {
        this['event']('complete');return;
      }function bepnu() {
        if (fmdq['_null'] != undefined) b4uepl['_sound']['onCanplay'](fmdq['_null']), b4uepl['_sound']['onError'](fmdq['_null']);else try {
          b4uepl['_sound']['onCanplay'](null), b4uepl['_sound']['onError'](null), fmdq['_null'] = null;
        } catch (ogc0ul) {
          console['warn']('[wxmini] _clearSound:' + ogc0ul), b4uepl['_sound']['onCanplay'](r7mfk), b4uepl['_sound']['onError'](r7mfk), fmdq['_null'] = r7mfk;
        }
      }function j3vnw() {
        bepnu(), og0uc['loaded'] = !![], og0uc['event']('complete'), fmdq['_audioCache'][og0uc['url']] = og0uc;
      }function xi29d(plb4u) {
        console['error']('errCode=' + plb4u['errCode'] + '  errMsg=' + plb4u['errMsg']), bepnu(), og0uc['event']('error');
      }function r7mfk() {}this['_sound']['onCanplay'](j3vnw), this['_sound']['onError'](xi29d), this['_sound']['src'] = u0c4lb;var og0uc = this;
    }, r617m['play'] = function (azh$9x, c4ul) {
      azh$9x === void 0x0 && (azh$9x = 0x0), c4ul === void 0x0 && (c4ul = 0x0);var bl4c0u;if (this['url'] == p5nwj['_tMusic']) {
        if (!fmdq['_musicAudio']) fmdq['_musicAudio'] = fmdq['_createSound']();bl4c0u = fmdq['_musicAudio'];
      } else bl4c0u = fmdq['_createSound']();bl4c0u['src'] = this['url'];var pe5j = new dmfr1(bl4c0u);return pe5j['url'] = this['url'], pe5j['loops'] = c4ul, pe5j['startTime'] = azh$9x, pe5j['play'](), p5nwj['addChannel'](pe5j), pe5j;
    }, r617m['dispose'] = function () {
      var a9hzx = fmdq['_audioCache'][this['url']];a9hzx && (a9hzx['src'] = '', delete fmdq['_audioCache'][this['url']]);
    }, c40glu(0x0, r617m, 'duration', function () {
      return this['_sound']['duration'];
    }), fmdq['_createSound'] = function () {
      return fmdq['_id']++, ou0glc['window']['wx']['createInnerAudioContext']();
    }, fmdq['_musicAudio'] = null, fmdq['_id'] = 0x0, fmdq['_audioCache'] = {}, fmdq['_null'] = undefined, fmdq;
  }(ok76ys),
      dmfr1 = function (bn45p) {
    function mqf1r(mfk76r) {
      this['_audio'] = null, this['_onEnd'] = null, mqf1r['__super']['call'](this), this['_audio'] = mfk76r, this['_onEnd'] = f1rm['bind'](this['__onEnd'], this), mfk76r['onEnded'](this['_onEnd']);
    }a9zxi8(mqf1r, 'laya.wx.mini.MiniSoundChannel', bn45p);var ys0og = mqf1r['prototype'];return ys0og['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x28qdi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ys0og['__onNull'] = function () {}, ys0og['play'] = function () {
      this['isStopped'] = ![], p5nwj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ys0og['stop'] = function () {
      this['isStopped'] = !![], p5nwj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mqf1r['_null'] != undefined) this['_audio']['onEnded'](mqf1r['_null']);else try {
        this['_audio']['onEnded'](null), mqf1r['_null'] = null;
      } catch (n3wpj5) {
        console['warn']('[wxmini] stop:' + n3wpj5), this['_audio']['onEnded'](f1rm['bind'](this['__onNull'], this)), mqf1r['_null'] = f1rm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ys0og['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ys0og['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], p5nwj['addChannel'](this), this['_audio']['play']();
    }, c40glu(0x0, ys0og, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), c40glu(0x0, ys0og, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), c40glu(0x0, ys0og, 'volume', function () {
      return 0x1;
    }, function (ksoyg0) {}), mqf1r['_null'] = undefined, mqf1r;
  }(ucelb);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var o0kygs in Laya) {
    var koys6 = Laya[o0kygs];koys6 && koys6['__isclass'] && (exports[o0kygs] = koys6);
  }
});