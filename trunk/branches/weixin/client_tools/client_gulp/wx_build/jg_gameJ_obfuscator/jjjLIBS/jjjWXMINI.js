var S = wx.$J;
(function (window, document, a89zxi) {
  var oygsc = a89zxi['un'],
      aihx9z = a89zxi['uns'],
      bnpu4 = a89zxi['static'],
      m2f1 = a89zxi['class'],
      xz89ai = a89zxi['getset'],
      p53 = a89zxi['__newvec'],
      wv3nj = laya['utils']['Browser'],
      ygcl = laya['events']['Event'],
      co0gl = laya['events']['EventDispatcher'],
      lc4u0g = laya['resource']['HTMLImage'],
      u40bl = laya['utils']['Handler'],
      sg = laya['display']['Input'],
      e45nbp = laya['net']['Loader'],
      m6f7k = laya['maths']['Matrix'],
      qmrdf = laya['renders']['Render'],
      d2fm1 = laya['utils']['RunDriver'],
      bulp = laya['media']['Sound'],
      y76r = laya['media']['SoundChannel'],
      bjepn = laya['media']['SoundManager'],
      eu4clb = laya['display']['Stage'],
      bp4en5 = laya['net']['URL'],
      x2i8dq = laya['utils']['Utils'],
      x$h9 = function () {
    function u4npe() {}return m2f1(u4npe, 'laya.wx.mini.MiniAdpter'), u4npe['getJson'] = function (f1q7rm) {
      return JSON['parse'](f1q7rm);
    }, u4npe['init'] = function (ogu0c, xa9ihz) {
      ogu0c === void 0x0 && (ogu0c = ![]), xa9ihz === void 0x0 && (xa9ihz = ![]);if (u4npe['_inited']) return;u4npe['window'] = window;if (u4npe['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;u4npe['_inited'] = !![], u4npe['isZiYu'] = xa9ihz, u4npe['isPosMsgYu'] = ogu0c, u4npe['EnvConfig'] = {}, !u4npe['isZiYu'] && (mf1qr['setNativeFileDir']('/layaairGame'), mf1qr['existDir'](mf1qr['fileNativeDir'], u40bl['create'](u4npe, u4npe['onMkdirCallBack']))), u4npe['window']['focus'] = function () {}, a89zxi['getUrlPath'] = function () {}, u4npe['window']['logtime'] = function (ebp4lu) {}, u4npe['window']['alertTimeLog'] = function (cule4) {}, u4npe['window']['resetShareInfo'] = function () {}, u4npe['window']['CanvasRenderingContext2D'] = function () {}, u4npe['window']['CanvasRenderingContext2D']['prototype'] = u4npe['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], u4npe['window']['document']['body']['appendChild'] = function () {}, u4npe['EnvConfig']['pixelRatioInt'] = 0x0, d2fm1['getPixelRatio'] = u4npe['pixelRatio'], u4npe['_preCreateElement'] = wv3nj['createElement'], wv3nj['createElement'] = u4npe['createElement'], d2fm1['createShaderCondition'] = u4npe['createShaderCondition'], x2i8dq['parseXMLFromString'] = u4npe['parseXMLFromString'], sg['_createInputElement'] = u4bpel['_createInputElement'], u4npe['EnvConfig']['load'] = e45nbp['prototype']['load'], e45nbp['prototype']['load'] = rfq17m['prototype']['load'], u4npe['isZiYu'] && ogu0c && wx['onMessage'](function (kfs76r) {
        kfs76r['isLoad'] && (mf1qr['ziyuFileData'][kfs76r['url']] = kfs76r['data']);
      });
    }, u4npe['onMkdirCallBack'] = function (zxi, bc4leu) {
      if (!zxi) mf1qr['filesListObj'] = JSON['parse'](bc4leu['data']);
    }, u4npe['pixelRatio'] = function () {
      if (!u4npe['EnvConfig']['pixelRatioInt']) try {
        var s7k6rf = wx['getSystemInfoSync']();return u4npe['EnvConfig']['pixelRatioInt'] = s7k6rf['pixelRatio'], s7k6rf = s7k6rf, s7k6rf['pixelRatio'];
      } catch (l0guc) {}return u4npe['EnvConfig']['pixelRatioInt'];
    }, u4npe['createElement'] = function (lcu04b) {
      if (lcu04b == 'canvas') {
        var lug0c4;return u4npe['idx'] == 0x1 ? u4npe['isZiYu'] ? (lug0c4 = sharedCanvas, lug0c4['style'] = {}) : lug0c4 = window['canvas'] : lug0c4 = window['wx']['createCanvas'](), u4npe['idx']++, lug0c4;
      } else {
        if (lcu04b == 'textarea' || lcu04b == 'input') return u4npe['onCreateInput'](lcu04b);else {
          if (lcu04b == 'div') {
            var sy76kr = u4npe['_preCreateElement'](lcu04b);return sy76kr['contains'] = function (gc0s) {
              return null;
            }, sy76kr['removeChild'] = function (wvn3j) {}, sy76kr;
          } else return u4npe['_preCreateElement'](lcu04b);
        }
      }
    }, u4npe['onCreateInput'] = function (l0ug4) {
      var qi1d2 = u4npe['_preCreateElement'](l0ug4);return qi1d2['focus'] = u4bpel['wxinputFocus'], qi1d2['blur'] = u4bpel['wxinputblur'], qi1d2['style'] = {}, qi1d2['value'] = 0x0, qi1d2['parentElement'] = {}, qi1d2['placeholder'] = {}, qi1d2['type'] = {}, qi1d2['setColor'] = function (l4u0b) {}, qi1d2['setType'] = function (q8d21) {}, qi1d2['setFontFace'] = function (lebcu) {}, qi1d2['addEventListener'] = function (frm61) {}, qi1d2['contains'] = function (e4lbcu) {
        return null;
      }, qi1d2['removeChild'] = function (qrd) {}, qi1d2;
    }, u4npe['createShaderCondition'] = function (d21qm8) {
      var npub4e = this,
          q1d82m = function () {
        var j53n = d21qm8;return npub4e[d21qm8['replace']('this.', '')];
      };return q1d82m;
    }, u4npe['EnvConfig'] = null, u4npe['window'] = null, u4npe['_preCreateElement'] = null, u4npe['_inited'] = ![], u4npe['wxRequest'] = null, u4npe['systemInfo'] = null, u4npe['version'] = '0.0.1', u4npe['isZiYu'] = ![], u4npe['isPosMsgYu'] = ![], u4npe['parseXMLFromString'] = function (oksy76) {
      var p5w3nj, jb5enp;oksy76 = oksy76['replace'](/>\s+</g, '><');try {
        p5w3nj = new window['Parser']['DOMParser']()['parseFromString'](oksy76, 'text/xml');
      } catch (oky6s) {
        throw '需要引入xml解析库文件';
      }return p5w3nj;
    }, u4npe['idx'] = 0x1, u4npe;
  }(),
      y0gsk = function () {
    function so7k6y() {}m2f1(so7k6y, 'laya.wx.mini.MiniImage');var hxa$z = so7k6y['prototype'];return hxa$z['_loadImage'] = function (kf6m7) {
      var bc4lue = this,
          xzha9i = ![];kf6m7['indexOf']('layaNativeDir/') == -0x1 && (xzha9i = !![], kf6m7 = bp4en5['formatURL'](kf6m7));if (!mf1qr['getFileInfo'](kf6m7)) {
        if (kf6m7['indexOf']('http://') != -0x1 || kf6m7['indexOf']('https://') != -0x1) mf1qr['downImg'](kf6m7, new u40bl(so7k6y, so7k6y['onDownImgCallBack'], [kf6m7, bc4lue]), kf6m7);else so7k6y['onCreateImage'](kf6m7, bc4lue, !![]);
      } else so7k6y['onCreateImage'](kf6m7, bc4lue, !xzha9i);
    }, so7k6y['onDownImgCallBack'] = function (x9ahi, ucleb4, ejpb5) {
      if (!ejpb5) so7k6y['onCreateImage'](x9ahi, ucleb4);else ucleb4['onError'](null);
    }, so7k6y['onCreateImage'] = function (wnj35p, gsyko, g4cul) {
      g4cul === void 0x0 && (g4cul = ![]);var qmfr17;if (!g4cul) {
        var pbe4un = mf1qr['getFileInfo'](wnj35p),
            lc0u4b = pbe4un['md5'];qmfr17 = mf1qr['getFileNativePath'](lc0u4b);
      } else qmfr17 = wnj35p;if (gsyko['imgCache'] == null) gsyko['imgCache'] = {};var sk6oyg;function pb4eul() {
        sk6oyg['onload'] = null, sk6oyg['onerror'] = null, delete gsyko['imgCache'][wnj35p];
      };var og0cy = function () {
        pb4eul(), gsyko['onLoaded'](sk6oyg);
      },
          $xa = function () {
        pb4eul(), gsyko['event']('error', 'Load image failed');
      };gsyko['_type'] == 'nativeimage' ? (sk6oyg = new wv3nj['window']['Image'](), sk6oyg['crossOrigin'] = '', sk6oyg['onload'] = og0cy, sk6oyg['onerror'] = $xa, sk6oyg['src'] = qmfr17, gsyko['imgCache'][wnj35p] = sk6oyg) : new lc4u0g['create'](qmfr17, { 'onload': og0cy, 'onerror': $xa, 'onCreate': function (dqr1fm) {
          sk6oyg = dqr1fm, gsyko['imgCache'][wnj35p] = dqr1fm;
        } });
    }, so7k6y;
  }(),
      u4bpel = function () {
    function rf6() {}return m2f1(rf6, 'laya.wx.mini.MiniInput'), rf6['_createInputElement'] = function () {
      sg['_initInput'](sg['area'] = wv3nj['createElement']('textarea')), sg['_initInput'](sg['input'] = wv3nj['createElement']('input')), sg['inputContainer'] = wv3nj['createElement']('div'), sg['inputContainer']['style']['position'] = 'absolute', sg['inputContainer']['style']['zIndex'] = 0x186a0, wv3nj['container']['appendChild'](sg['inputContainer']), sg['inputContainer']['setPos'] = function (y7k6, e4bcu) {
        sg['inputContainer']['style']['left'] = y7k6 + 'px', sg['inputContainer']['style']['top'] = e4bcu + 'px';
      }, a89zxi['stage']['on']('resize', null, rf6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (np4e5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bjepn['_soundClass'] = uc40bl, bjepn['_musicClass'] = uc40bl;
    }, rf6['_onStageResize'] = function () {
      var q1dmrf = a89zxi['stage']['_canvasTransform']['identity']();q1dmrf['scale'](wv3nj['width'] / qmrdf['canvas']['width'] / d2fm1['getPixelRatio'](), wv3nj['height'] / qmrdf['canvas']['height'] / d2fm1['getPixelRatio']());
    }, rf6['wxinputFocus'] = function (cgyos0) {
      var q2mdf1 = sg['inputElement']['target'];if (q2mdf1 && !q2mdf1['editable']) return;x$h9['window']['wx']['offKeyboardConfirm'](), x$h9['window']['wx']['offKeyboardInput'](), x$h9['window']['wx']['showKeyboard']({ 'defaultValue': q2mdf1['text'], 'maxLength': q2mdf1['maxChars'], 'multiple': q2mdf1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (i9xz8) {}, 'fail': function (di2q8x) {} }), x$h9['window']['wx']['onKeyboardConfirm'](function (c4leu) {
        var m821d = c4leu ? c4leu['value'] : '';q2mdf1['text'] = m821d, q2mdf1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), x$h9['window']['wx']['onKeyboardInput'](function (nwp3j5) {
        var punb4e = nwp3j5 ? nwp3j5['value'] : '';if (!q2mdf1['multiline']) {
          if (punb4e['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }q2mdf1['text'] = punb4e, q2mdf1['event']('input');
      });
    }, rf6['inputEnter'] = function () {
      sg['inputElement']['target']['focus'] = ![];
    }, rf6['wxinputblur'] = function () {
      rf6['hideKeyboard']();
    }, rf6['hideKeyboard'] = function () {
      x$h9['window']['wx']['offKeyboardConfirm'](), x$h9['window']['wx']['offKeyboardInput'](), x$h9['window']['wx']['hideKeyboard']({ 'success': function (plb4ue) {
          console['log']('隐藏键盘');
        }, 'fail': function (uel4p) {
          console['log']('隐藏键盘出错:' + (uel4p ? uel4p['errMsg'] : ''));
        } });
    }, rf6;
  }(),
      rfq17m = function () {
    function clu4() {}m2f1(clu4, 'laya.wx.mini.MiniLoader');var l0cog = clu4['prototype'];return l0cog['load'] = function (k0oyg, og0y, qm7, f1qmd2, cgol0y) {
      qm7 === void 0x0 && (qm7 = !![]), cgol0y === void 0x0 && (cgol0y = ![]);var ygc0 = this;ygc0['_url'] = k0oyg;if (k0oyg['indexOf']('data:image') === 0x0) ygc0['_type'] = og0y = 'image';else ygc0['_type'] = og0y || (og0y = ygc0['getTypeFromUrl'](k0oyg));ygc0['_cache'] = qm7, ygc0['_data'] = null;var ocgyl0 = 'ascii';if (k0oyg['indexOf']('.fnt') != -0x1) ocgyl0 = 'utf8';else og0y == 'arraybuffer' && (ocgyl0 = '');;var z92ix = x2i8dq['getFileExtension'](k0oyg);if (clu4['_fileTypeArr']['indexOf'](z92ix) != -0x1) x$h9['EnvConfig']['load']['call'](this, k0oyg, og0y, qm7, f1qmd2, cgol0y);else {
        if (!mf1qr['getFileInfo'](k0oyg)) {
          if (k0oyg['indexOf']('layaNativeDir/') != -0x1) {
            if (x$h9['isZiYu']) {
              var w53nj = mf1qr['ziyuFileData'][k0oyg];ygc0['onLoaded'](w53nj);return;
            } else {
              cosnole['log']('read read'), mf1qr['read'](k0oyg, ocgyl0, new u40bl(clu4, clu4['onReadNativeCallBack'], [ocgyl0, k0oyg, og0y, qm7, f1qmd2, cgol0y, ygc0]));return;
            }
          }if (bp4en5['rootPath'] == '') var bucle4 = k0oyg;else bucle4 = k0oyg['split'](bp4en5['rootPath'])[0x0];k0oyg['indexOf']('http://') != -0x1 || k0oyg['indexOf']('https://') != -0x1 ? x$h9['EnvConfig']['load']['call'](ygc0, k0oyg, og0y, qm7, f1qmd2, cgol0y) : mf1qr['readFile'](bucle4, ocgyl0, new u40bl(clu4, clu4['onReadNativeCallBack'], [ocgyl0, k0oyg, og0y, qm7, f1qmd2, cgol0y, ygc0]), k0oyg);
        } else x$h9['EnvConfig']['load']['call'](this, k0oyg, og0y, qm7, f1qmd2, cgol0y);
      }
    }, l0cog['resMgrLoad'] = function (kos0y, rd1qfm, eb45p, q28x, $ax, pub4e, i28dq1) {
      eb45p === void 0x0 && (eb45p = 0x0), q28x === void 0x0 && (q28x = ![]), $ax === void 0x0 && ($ax = ![]), pub4e === void 0x0 && (pub4e = 0x0), i28dq1 === void 0x0 && (i28dq1 = 0x3), kos0y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', kos0y), x$h9['EnvConfig']['resMgrLoad'](kos0y, (e4un, gloy0c, l4uc) => {
        clu4['prototype']['resMgrLoadCallBack'](e4un, gloy0c, l4uc, rd1qfm);
      }, eb45p, q28x, $ax, pub4e, i28dq1);
    }, l0cog['resMgrLoadCallBack'] = function (w3vn5, bn5ejp, bl0uc4, clg0oy) {
      console['log']('buff:::', w3vn5, bl0uc4, mf1qr['fileNativeDir'] + '///' + mf1qr['fileListName']), clg0oy(w3vn5, bn5ejp, bl0uc4);
    }, l0cog['clearRes'] = function (je5bn, s0kg) {
      s0kg === void 0x0 && (s0kg = ![]);var za$hx = this;za$hx['clearRes'](je5bn, s0kg);var gcl = mf1qr['getFileInfo'](je5bn);if (gcl && (je5bn['indexOf']('http://') != -0x1 || je5bn['indexOf']('https://') != -0x1)) {
        var jp5nw = gcl['md5'],
            mf16r = mf1qr['getFileNativePath'](jp5nw);mf1qr['remove'](mf16r);
      }
    }, clu4['onReadNativeCallBack'] = function (e5nj3p, xd8i, p3wj5n, eb4uc, yso76, v53wn, sko76, frk6, pe4) {
      eb4uc === void 0x0 && (eb4uc = !![]), v53wn === void 0x0 && (v53wn = ![]), frk6 === void 0x0 && (frk6 = 0x0);if (!frk6) {
        var kyr76;if (p3wj5n == 'json' || p3wj5n == 'atlas') kyr76 = x$h9['getJson'](pe4['data']);else p3wj5n == 'xml' ? kyr76 = x2i8dq['parseXMLFromString'](pe4['data']) : kyr76 = pe4['data'];sko76['onLoaded'](kyr76), !x$h9['isZiYu'] && x$h9['isPosMsgYu'] && p3wj5n != 'arraybuffer' && wx['postMessage']({ 'url': xd8i, 'data': kyr76, 'isLoad': !![] });
      } else frk6 == 0x1 && x$h9['EnvConfig']['load']['call'](sko76, xd8i, p3wj5n, eb4uc, yso76, v53wn);
    }, bnpu4(clu4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), clu4;
  }(),
      mf1qr = function (yr) {
    function un4e() {
      un4e['__super']['call'](this);;
    }return m2f1(un4e, 'laya.wx.mini.MiniFileMgr', yr), un4e['isLoadFile'] = function (skogy0) {
      return un4e['_fileTypeArr']['indexOf'](skogy0) != -0x1 ? !![] : ![];
    }, un4e['getFileInfo'] = function (zaix9) {
      var rysk76 = zaix9['split']('?')[0x0],
          ogyc0s = un4e['filesListObj'][rysk76];if (ogyc0s == null) return null;else return ogyc0s;return null;
    }, un4e['onFileUpdate'] = function (pe4n5, b4e5n) {
      var bulc4 = pe4n5['split']('/'),
          n3j5pe = bulc4[bulc4['length'] - 0x1],
          ksgy0o = un4e['getFileInfo'](b4e5n);if (ksgy0o == null) un4e['onSaveFile'](b4e5n, n3j5pe);else {
        if (ksgy0o['readyUrl'] != b4e5n) un4e['remove'](n3j5pe, b4e5n);
      }
    }, un4e['exits'] = function (ep5n3, c4l0ug) {
      var cgu0o = un4e['getFileNativePath'](ep5n3);un4e['fs']['getFileInfo']({ 'filePath': cgu0o, 'success': function (ucol0) {
          c4l0ug != null && c4l0ug['runWith']([0x0, ucol0]);
        }, 'fail': function (jn5) {
          c4l0ug != null && c4l0ug['runWith']([0x1, jn5]);
        } });
    }, un4e['read'] = function (azix9h, y0cgl, lgcoy0, pu4le) {
      y0cgl === void 0x0 && (y0cgl = 'ascill'), pu4le === void 0x0 && (pu4le = '');var ax89;pu4le != '' ? ax89 = un4e['getFileNativePath'](azix9h) : ax89 = azix9h, un4e['fs']['readFile']({ 'filePath': ax89, 'encoding': y0cgl, 'success': function (mf761r) {
          lgcoy0 != null && lgcoy0['runWith']([0x0, mf761r]);
        }, 'fail': function (qdi) {
          if (qdi && pu4le != '') un4e['down'](pu4le, y0cgl, lgcoy0, pu4le);else lgcoy0 != null && lgcoy0['runWith']([0x1]);
        } });
    }, un4e['readNativeFile'] = function (d1iq8, ko6s7y) {
      un4e['fs']['readFile']({ 'filePath': d1iq8, 'encoding': '', 'success': function (qd1fm2) {
          ko6s7y != null && ko6s7y['runWith']([0x0]);
        }, 'fail': function (z9xh$) {
          ko6s7y != null && ko6s7y['runWith']([0x1]);
        } });
    }, un4e['down'] = function (epn5j, a9hi, vnwj3, ks6f7r) {
      a9hi === void 0x0 && (a9hi = 'ascill'), ks6f7r === void 0x0 && (ks6f7r = '');var bp5jn = un4e['getFileNativePath'](ks6f7r),
          pnj5eb = un4e['wxdown']({ 'url': epn5j, 'filePath': bp5jn, 'success': function (q1f7rm) {
          if (q1f7rm['statusCode'] === 0xc8) un4e['readFile'](q1f7rm['filePath'], a9hi, vnwj3, ks6f7r);
        }, 'fail': function (pejbn5) {
          vnwj3 != null && vnwj3['runWith']([0x1, pejbn5]);
        } });pnj5eb['onProgressUpdate'](function (qd128) {
        vnwj3 != null && vnwj3['runWith']([0x2, qd128['progress']]);
      });
    }, un4e['readFile'] = function (fmrqd, clu, eubpl4, pn35ej) {
      clu === void 0x0 && (clu = 'ascill'), pn35ej === void 0x0 && (pn35ej = ''), un4e['fs']['readFile']({ 'filePath': fmrqd, 'encoding': clu, 'success': function (b45ne) {
          if (fmrqd['indexOf']('http://') != -0x1 || fmrqd['indexOf']('https://') != -0x1) un4e['onFileUpdate'](fmrqd, pn35ej);eubpl4 != null && eubpl4['runWith']([0x0, b45ne]);
        }, 'fail': function (cb0u) {
          if (cb0u) eubpl4 != null && eubpl4['runWith']([0x1, cb0u]);
        } });
    }, un4e['downImg'] = function (enbup4, z89xi2, clue4b) {
      clue4b === void 0x0 && (clue4b = '');var krsf76 = un4e['wxdown']({ 'url': enbup4, 'success': function (xza9h$) {
          xza9h$['statusCode'] === 0xc8 && un4e['copyFile'](xza9h$['tempFilePath'], clue4b, z89xi2);
        }, 'fail': function (je35) {
          z89xi2 != null && z89xi2['runWith']([0x1, je35]);
        } });
    }, un4e['copyFile'] = function (fm2d1, ks7rf6, n5jb) {
      var x982id = fm2d1['split']('/'),
          cosyg0 = x982id[x982id['length'] - 0x1],
          g0yk = ks7rf6['split']('?')[0x0],
          lcu0o = un4e['getFileInfo'](ks7rf6),
          yl0g = un4e['getFileNativePath'](cosyg0);un4e['fs']['copyFile']({ 'srcPath': fm2d1, 'destPath': yl0g, 'success': function (aiz9x) {
          if (!lcu0o) un4e['onSaveFile'](ks7rf6, cosyg0), n5jb != null && n5jb['runWith']([0x0]);else {
            if (lcu0o['readyUrl'] != ks7rf6) un4e['remove'](cosyg0, ks7rf6, n5jb);
          }
        }, 'fail': function ($a9) {
          n5jb != null && n5jb['runWith']([0x1, $a9]);
        } });
    }, un4e['getFileNativePath'] = function (f1qmr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f1qmr;
    }, un4e['remove'] = function (okgsy, ulbep4, qx82id) {
      ulbep4 === void 0x0 && (ulbep4 = '');var i8qdx = un4e['getFileInfo'](ulbep4),
          y6kog = un4e['getFileNativePath'](i8qdx['md5']);a89zxi['loader']['clearRes'](i8qdx['readyUrl']), un4e['fs']['unlink']({ 'filePath': y6kog, 'success': function (q21) {
          if (ulbep4 != '') un4e['onSaveFile'](ulbep4, okgsy);qx82id != null && qx82id['runWith']([0x0]);
        }, 'fail': function (y0ogs) {} });
    }, un4e['onSaveFile'] = function (bnep5, c0lyog) {
      var i9zh = bnep5['split']('?')[0x0];un4e['filesListObj'][i9zh] = { 'md5': c0lyog, 'readyUrl': bnep5 }, un4e['fs']['writeFile']({ 'filePath': un4e['fileNativeDir'] + '/' + un4e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](un4e['filesListObj']), 'success': function (bp4e5) {
          console['log']('写入测试测试成功：', bp4e5);
        }, 'fail': function (h9za) {
          console['log']('写入测试测试失败：', h9za);
        } });
    }, un4e['existDir'] = function (z82x, i9xzh) {
      un4e['fs']['mkdir']({ 'dirPath': z82x, 'success': function (r16mf) {
          i9xzh != null && i9xzh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xzaih) {
          if (xzaih['errMsg']['indexOf']('file already exists') != -0x1) un4e['readSync'](un4e['fileListName'], 'utf8', i9xzh);else i9xzh != null && i9xzh['runWith']([0x1, xzaih]);
        } });
    }, un4e['readSync'] = function (os7y6k, lg4cu0, mdq218, lcu4g) {
      lg4cu0 === void 0x0 && (lg4cu0 = 'ascill'), lcu4g === void 0x0 && (lcu4g = '');var m21fqd = un4e['getFileNativePath'](os7y6k),
          z8;try {
        z8 = un4e['fs']['readFileSync'](m21fqd), mdq218 != null && mdq218['runWith']([0x0, { 'data': z8 }]);
      } catch (sog0yc) {
        mdq218 != null && mdq218['runWith']([0x1]);
      }
    }, un4e['readCache'] = function () {}, un4e['writeCache'] = function (cogl0u) {
      var ahxz9i = readyUrl['split']('?')[0x0];un4e['filesListObj'][ahxz9i] = { 'md5': md5Name, 'readyUrl': readyUrl }, un4e['fs']['writeFile']({ 'filePath': un4e['fileNativeDir'] + '/' + un4e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](un4e['filesListObj']), 'success': function (d1qm8) {}, 'fail': function (fd1qmr) {} });
    }, un4e['setNativeFileDir'] = function (m71f6) {
      un4e['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m71f6;
    }, un4e['filesListObj'] = {}, un4e['fileNativeDir'] = null, un4e['fileListName'] = 'layaairfiles.txt', un4e['ziyuFileData'] = {}, bnpu4(un4e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), un4e;
  }(co0gl),
      uc40bl = function (lbup4e) {
    function dm1q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dm1q['__super']['call'](this), this['_sound'] = dm1q['_createSound']();
    }m2f1(dm1q, 'laya.wx.mini.MiniSound', lbup4e);var b5ne4 = dm1q['prototype'];return b5ne4['load'] = function (f7mqr) {
      var hz9$ = this;f7mqr = bp4en5['formatURL'](f7mqr), this['url'] = f7mqr;if (dm1q['_audioCache'][f7mqr]) {
        this['event']('complete');return;
      }function lub40c() {
        if (dm1q['_null'] != undefined) hz9$['_sound']['onCanplay'](dm1q['_null']), hz9$['_sound']['onError'](dm1q['_null']);else try {
          hz9$['_sound']['onCanplay'](null), hz9$['_sound']['onError'](null), dm1q['_null'] = null;
        } catch (e5pbnj) {
          console['warn']('[wxmini] _clearSound:' + e5pbnj), hz9$['_sound']['onCanplay'](y6rk7s), hz9$['_sound']['onError'](y6rk7s), dm1q['_null'] = y6rk7s;
        }
      }function jn35p() {
        lub40c(), dr1q['loaded'] = !![], dr1q['event']('complete'), dm1q['_audioCache'][dr1q['url']] = dr1q;
      }function kyos6(kmf67r) {
        console['error']('errCode=' + kmf67r['errCode'] + '  errMsg=' + kmf67r['errMsg']), lub40c(), dr1q['event']('error');
      }function y6rk7s() {}this['_sound']['onCanplay'](jn35p), this['_sound']['onError'](kyos6), this['_sound']['src'] = f7mqr;var dr1q = this;
    }, b5ne4['play'] = function (f61m7, xha9$z) {
      f61m7 === void 0x0 && (f61m7 = 0x0), xha9$z === void 0x0 && (xha9$z = 0x0);var ebul;if (this['url'] == bjepn['_tMusic']) {
        if (!dm1q['_musicAudio']) dm1q['_musicAudio'] = dm1q['_createSound']();ebul = dm1q['_musicAudio'];
      } else ebul = dm1q['_createSound']();ebul['src'] = this['url'];var ysr67 = new pe35jn(ebul);return ysr67['url'] = this['url'], ysr67['loops'] = xha9$z, ysr67['startTime'] = f61m7, ysr67['play'](), bjepn['addChannel'](ysr67), ysr67;
    }, b5ne4['dispose'] = function () {
      var olcyg = dm1q['_audioCache'][this['url']];olcyg && (olcyg['src'] = '', delete dm1q['_audioCache'][this['url']]);
    }, xz89ai(0x0, b5ne4, 'duration', function () {
      return this['_sound']['duration'];
    }), dm1q['_createSound'] = function () {
      return dm1q['_id']++, x$h9['window']['wx']['createInnerAudioContext']();
    }, dm1q['_musicAudio'] = null, dm1q['_id'] = 0x0, dm1q['_audioCache'] = {}, dm1q['_null'] = undefined, dm1q;
  }(co0gl),
      pe35jn = function (cygo) {
    function bep5n(e5b) {
      this['_audio'] = null, this['_onEnd'] = null, bep5n['__super']['call'](this), this['_audio'] = e5b, this['_onEnd'] = x2i8dq['bind'](this['__onEnd'], this), e5b['onEnded'](this['_onEnd']);
    }m2f1(bep5n, 'laya.wx.mini.MiniSoundChannel', cygo);var i2d8q1 = bep5n['prototype'];return i2d8q1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (a89zxi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, i2d8q1['__onNull'] = function () {}, i2d8q1['play'] = function () {
      this['isStopped'] = ![], bjepn['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, i2d8q1['stop'] = function () {
      this['isStopped'] = !![], bjepn['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (bep5n['_null'] != undefined) this['_audio']['onEnded'](bep5n['_null']);else try {
        this['_audio']['onEnded'](null), bep5n['_null'] = null;
      } catch (ep4blu) {
        console['warn']('[wxmini] stop:' + ep4blu), this['_audio']['onEnded'](x2i8dq['bind'](this['__onNull'], this)), bep5n['_null'] = x2i8dq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, i2d8q1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, i2d8q1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bjepn['addChannel'](this), this['_audio']['play']();
    }, xz89ai(0x0, i2d8q1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xz89ai(0x0, i2d8q1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xz89ai(0x0, i2d8q1, 'volume', function () {
      return 0x1;
    }, function (s76frk) {}), bep5n['_null'] = undefined, bep5n;
  }(y76r);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var mfd2 in Laya) {
    var i89xd = Laya[mfd2];i89xd && i89xd['__isclass'] && (exports[mfd2] = i89xd);
  }
});