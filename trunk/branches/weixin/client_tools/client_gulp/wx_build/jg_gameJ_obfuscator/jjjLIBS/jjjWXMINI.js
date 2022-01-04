var S = wx.$J;
(function (window, document, ax$hz) {
  var bucle4 = ax$hz['un'],
      soygk = ax$hz['uns'],
      fmrk67 = ax$hz['static'],
      u0ocgl = ax$hz['class'],
      xq2id = ax$hz['getset'],
      s6fkr7 = ax$hz['__newvec'],
      pb5je = laya['utils']['Browser'],
      jbepn5 = laya['events']['Event'],
      xi2d8q = laya['events']['EventDispatcher'],
      mkf7 = laya['resource']['HTMLImage'],
      lbu4pe = laya['utils']['Handler'],
      rk76m = laya['display']['Input'],
      yrk67s = laya['net']['Loader'],
      f6k7mr = laya['maths']['Matrix'],
      wp3nj = laya['renders']['Render'],
      kr7ys6 = laya['utils']['RunDriver'],
      f2q1d = laya['media']['Sound'],
      gcu0lo = laya['media']['SoundChannel'],
      j5w3np = laya['media']['SoundManager'],
      ykgso = laya['display']['Stage'],
      npe35j = laya['net']['URL'],
      b5jnpe = laya['utils']['Utils'],
      yksg6 = function () {
    function mq7r1() {}return u0ocgl(mq7r1, 'laya.wx.mini.MiniAdpter'), mq7r1['getJson'] = function (coysg0) {
      return JSON['parse'](coysg0);
    }, mq7r1['init'] = function (c4ulb0, pn5j3e) {
      c4ulb0 === void 0x0 && (c4ulb0 = ![]), pn5j3e === void 0x0 && (pn5j3e = ![]);if (mq7r1['_inited']) return;mq7r1['window'] = window;if (mq7r1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;mq7r1['_inited'] = !![], mq7r1['isZiYu'] = pn5j3e, mq7r1['isPosMsgYu'] = c4ulb0, mq7r1['EnvConfig'] = {}, !mq7r1['isZiYu'] && (be45pn['setNativeFileDir']('/layaairGame'), be45pn['existDir'](be45pn['fileNativeDir'], lbu4pe['create'](mq7r1, mq7r1['onMkdirCallBack']))), mq7r1['window']['focus'] = function () {}, ax$hz['getUrlPath'] = function () {}, mq7r1['window']['logtime'] = function (xazih9) {}, mq7r1['window']['alertTimeLog'] = function (jvw5n) {}, mq7r1['window']['resetShareInfo'] = function () {}, mq7r1['window']['CanvasRenderingContext2D'] = function () {}, mq7r1['window']['CanvasRenderingContext2D']['prototype'] = mq7r1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mq7r1['window']['document']['body']['appendChild'] = function () {}, mq7r1['EnvConfig']['pixelRatioInt'] = 0x0, kr7ys6['getPixelRatio'] = mq7r1['pixelRatio'], mq7r1['_preCreateElement'] = pb5je['createElement'], pb5je['createElement'] = mq7r1['createElement'], kr7ys6['createShaderCondition'] = mq7r1['createShaderCondition'], b5jnpe['parseXMLFromString'] = mq7r1['parseXMLFromString'], rk76m['_createInputElement'] = e4bpnu['_createInputElement'], mq7r1['EnvConfig']['load'] = yrk67s['prototype']['load'], yrk67s['prototype']['load'] = cuel['prototype']['load'], mq7r1['isZiYu'] && c4ulb0 && wx['onMessage'](function (gu4c) {
        gu4c['isLoad'] && (be45pn['ziyuFileData'][gu4c['url']] = gu4c['data']);
      });
    }, mq7r1['onMkdirCallBack'] = function (q8d12i, z9hxi) {
      if (!q8d12i) be45pn['filesListObj'] = JSON['parse'](z9hxi['data']);
    }, mq7r1['pixelRatio'] = function () {
      if (!mq7r1['EnvConfig']['pixelRatioInt']) try {
        var gu4cl = wx['getSystemInfoSync']();return mq7r1['EnvConfig']['pixelRatioInt'] = gu4cl['pixelRatio'], gu4cl = gu4cl, gu4cl['pixelRatio'];
      } catch (nub4ep) {}return mq7r1['EnvConfig']['pixelRatioInt'];
    }, mq7r1['createElement'] = function (x98id) {
      if (x98id == 'canvas') {
        var kosg;return mq7r1['idx'] == 0x1 ? mq7r1['isZiYu'] ? (kosg = sharedCanvas, kosg['style'] = {}) : kosg = window['canvas'] : kosg = window['wx']['createCanvas'](), mq7r1['idx']++, kosg;
      } else {
        if (x98id == 'textarea' || x98id == 'input') return mq7r1['onCreateInput'](x98id);else {
          if (x98id == 'div') {
            var k6mf7 = mq7r1['_preCreateElement'](x98id);return k6mf7['contains'] = function (je5pnb) {
              return null;
            }, k6mf7['removeChild'] = function (m7krf6) {}, k6mf7;
          } else return mq7r1['_preCreateElement'](x98id);
        }
      }
    }, mq7r1['onCreateInput'] = function (luc0o) {
      var xzh = mq7r1['_preCreateElement'](luc0o);return xzh['focus'] = e4bpnu['wxinputFocus'], xzh['blur'] = e4bpnu['wxinputblur'], xzh['style'] = {}, xzh['value'] = 0x0, xzh['parentElement'] = {}, xzh['placeholder'] = {}, xzh['type'] = {}, xzh['setColor'] = function (xi98a) {}, xzh['setType'] = function (zhx) {}, xzh['setFontFace'] = function (cug0lo) {}, xzh['addEventListener'] = function (syg0co) {}, xzh['contains'] = function (cgo0ly) {
        return null;
      }, xzh['removeChild'] = function (p35nj) {}, xzh;
    }, mq7r1['createShaderCondition'] = function (g0ysoc) {
      var lb0u4c = this,
          zhi9 = function () {
        var cl0uog = g0ysoc;return lb0u4c[g0ysoc['replace']('this.', '')];
      };return zhi9;
    }, mq7r1['EnvConfig'] = null, mq7r1['window'] = null, mq7r1['_preCreateElement'] = null, mq7r1['_inited'] = ![], mq7r1['wxRequest'] = null, mq7r1['systemInfo'] = null, mq7r1['version'] = '0.0.1', mq7r1['isZiYu'] = ![], mq7r1['isPosMsgYu'] = ![], mq7r1['parseXMLFromString'] = function (nepjb) {
      var gu4l0, y6sk7o;nepjb = nepjb['replace'](/>\s+</g, '><');try {
        gu4l0 = new window['Parser']['DOMParser']()['parseFromString'](nepjb, 'text/xml');
      } catch (e4nbpu) {
        throw '需要引入xml解析库文件';
      }return gu4l0;
    }, mq7r1['idx'] = 0x1, mq7r1;
  }(),
      p5eb4n = function () {
    function r6mf71() {}u0ocgl(r6mf71, 'laya.wx.mini.MiniImage');var oksg6y = r6mf71['prototype'];return oksg6y['_loadImage'] = function (o7k6s) {
      var rm71 = this,
          v5jwn3 = ![];o7k6s['indexOf']('layaNativeDir/') == -0x1 && (v5jwn3 = !![], o7k6s = npe35j['formatURL'](o7k6s));if (!be45pn['getFileInfo'](o7k6s)) {
        if (o7k6s['indexOf']('http://') != -0x1 || o7k6s['indexOf']('https://') != -0x1) be45pn['downImg'](o7k6s, new lbu4pe(r6mf71, r6mf71['onDownImgCallBack'], [o7k6s, rm71]), o7k6s);else r6mf71['onCreateImage'](o7k6s, rm71, !![]);
      } else r6mf71['onCreateImage'](o7k6s, rm71, !v5jwn3);
    }, r6mf71['onDownImgCallBack'] = function (gcylo, q1rm, ocsyg) {
      if (!ocsyg) r6mf71['onCreateImage'](gcylo, q1rm);else q1rm['onError'](null);
    }, r6mf71['onCreateImage'] = function (gol0uc, izx9ha, oygs0c) {
      oygs0c === void 0x0 && (oygs0c = ![]);var qf1rdm;if (!oygs0c) {
        var mdf = be45pn['getFileInfo'](gol0uc),
            h$ax = mdf['md5'];qf1rdm = be45pn['getFileNativePath'](h$ax);
      } else qf1rdm = gol0uc;if (izx9ha['imgCache'] == null) izx9ha['imgCache'] = {};var j3n5e;function fksr76() {
        j3n5e['onload'] = null, j3n5e['onerror'] = null, delete izx9ha['imgCache'][gol0uc];
      };var elbc = function () {
        fksr76(), izx9ha['onLoaded'](j3n5e);
      },
          sk6ry = function () {
        fksr76(), izx9ha['event']('error', 'Load image failed');
      };izx9ha['_type'] == 'nativeimage' ? (j3n5e = new pb5je['window']['Image'](), j3n5e['crossOrigin'] = '', j3n5e['onload'] = elbc, j3n5e['onerror'] = sk6ry, j3n5e['src'] = qf1rdm, izx9ha['imgCache'][gol0uc] = j3n5e) : new mkf7['create'](qf1rdm, { 'onload': elbc, 'onerror': sk6ry, 'onCreate': function (gyclo0) {
          j3n5e = gyclo0, izx9ha['imgCache'][gol0uc] = gyclo0;
        } });
    }, r6mf71;
  }(),
      e4bpnu = function () {
    function glcyo0() {}return u0ocgl(glcyo0, 'laya.wx.mini.MiniInput'), glcyo0['_createInputElement'] = function () {
      rk76m['_initInput'](rk76m['area'] = pb5je['createElement']('textarea')), rk76m['_initInput'](rk76m['input'] = pb5je['createElement']('input')), rk76m['inputContainer'] = pb5je['createElement']('div'), rk76m['inputContainer']['style']['position'] = 'absolute', rk76m['inputContainer']['style']['zIndex'] = 0x186a0, pb5je['container']['appendChild'](rk76m['inputContainer']), rk76m['inputContainer']['setPos'] = function (co, loy0g) {
        rk76m['inputContainer']['style']['left'] = co + 'px', rk76m['inputContainer']['style']['top'] = loy0g + 'px';
      }, ax$hz['stage']['on']('resize', null, glcyo0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d8x2q) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), j5w3np['_soundClass'] = u04cb, j5w3np['_musicClass'] = u04cb;
    }, glcyo0['_onStageResize'] = function () {
      var zxi89 = ax$hz['stage']['_canvasTransform']['identity']();zxi89['scale'](pb5je['width'] / wp3nj['canvas']['width'] / kr7ys6['getPixelRatio'](), pb5je['height'] / wp3nj['canvas']['height'] / kr7ys6['getPixelRatio']());
    }, glcyo0['wxinputFocus'] = function (d2qx) {
      var h9x$ = rk76m['inputElement']['target'];if (h9x$ && !h9x$['editable']) return;yksg6['window']['wx']['offKeyboardConfirm'](), yksg6['window']['wx']['offKeyboardInput'](), yksg6['window']['wx']['showKeyboard']({ 'defaultValue': h9x$['text'], 'maxLength': h9x$['maxChars'], 'multiple': h9x$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lc0u4) {}, 'fail': function (jp5ne3) {} }), yksg6['window']['wx']['onKeyboardConfirm'](function (b4npue) {
        var ok76ys = b4npue ? b4npue['value'] : '';h9x$['text'] = ok76ys, h9x$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), yksg6['window']['wx']['onKeyboardInput'](function (aihxz9) {
        var b0c4 = aihxz9 ? aihxz9['value'] : '';if (!h9x$['multiline']) {
          if (b0c4['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }h9x$['text'] = b0c4, h9x$['event']('input');
      });
    }, glcyo0['inputEnter'] = function () {
      rk76m['inputElement']['target']['focus'] = ![];
    }, glcyo0['wxinputblur'] = function () {
      glcyo0['hideKeyboard']();
    }, glcyo0['hideKeyboard'] = function () {
      yksg6['window']['wx']['offKeyboardConfirm'](), yksg6['window']['wx']['offKeyboardInput'](), yksg6['window']['wx']['hideKeyboard']({ 'success': function (j3p5nw) {
          console['log']('隐藏键盘');
        }, 'fail': function (zh9) {
          console['log']('隐藏键盘出错:' + (zh9 ? zh9['errMsg'] : ''));
        } });
    }, glcyo0;
  }(),
      cuel = function () {
    function jnwv5() {}u0ocgl(jnwv5, 'laya.wx.mini.MiniLoader');var d82qx = jnwv5['prototype'];return d82qx['load'] = function (rk, fr6km, mfr716, u4lceb, goys0) {
      mfr716 === void 0x0 && (mfr716 = !![]), goys0 === void 0x0 && (goys0 = ![]);var ej5pn3 = this;ej5pn3['_url'] = rk;if (rk['indexOf']('data:image') === 0x0) ej5pn3['_type'] = fr6km = 'image';else ej5pn3['_type'] = fr6km || (fr6km = ej5pn3['getTypeFromUrl'](rk));ej5pn3['_cache'] = mfr716, ej5pn3['_data'] = null;var y76o = 'ascii';if (rk['indexOf']('.fnt') != -0x1) y76o = 'utf8';else fr6km == 'arraybuffer' && (y76o = '');;var mdf21q = b5jnpe['getFileExtension'](rk);if (jnwv5['_fileTypeArr']['indexOf'](mdf21q) != -0x1) yksg6['EnvConfig']['load']['call'](this, rk, fr6km, mfr716, u4lceb, goys0);else {
        if (!be45pn['getFileInfo'](rk)) {
          if (rk['indexOf']('layaNativeDir/') != -0x1) {
            if (yksg6['isZiYu']) {
              var qxd2i8 = be45pn['ziyuFileData'][rk];ej5pn3['onLoaded'](qxd2i8);return;
            } else {
              cosnole['log']('read read'), be45pn['read'](rk, y76o, new lbu4pe(jnwv5, jnwv5['onReadNativeCallBack'], [y76o, rk, fr6km, mfr716, u4lceb, goys0, ej5pn3]));return;
            }
          }if (npe35j['rootPath'] == '') var r6kmf7 = rk;else r6kmf7 = rk['split'](npe35j['rootPath'])[0x0];rk['indexOf']('http://') != -0x1 || rk['indexOf']('https://') != -0x1 ? yksg6['EnvConfig']['load']['call'](ej5pn3, rk, fr6km, mfr716, u4lceb, goys0) : be45pn['readFile'](r6kmf7, y76o, new lbu4pe(jnwv5, jnwv5['onReadNativeCallBack'], [y76o, rk, fr6km, mfr716, u4lceb, goys0, ej5pn3]), rk);
        } else yksg6['EnvConfig']['load']['call'](this, rk, fr6km, mfr716, u4lceb, goys0);
      }
    }, d82qx['resMgrLoad'] = function (zxa8i9, ugcl04, zh9xa, f7km, kg0sy, bn5pej, y67rk) {
      zh9xa === void 0x0 && (zh9xa = 0x0), f7km === void 0x0 && (f7km = ![]), kg0sy === void 0x0 && (kg0sy = ![]), bn5pej === void 0x0 && (bn5pej = 0x0), y67rk === void 0x0 && (y67rk = 0x3), zxa8i9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zxa8i9), yksg6['EnvConfig']['resMgrLoad'](zxa8i9, (npu4, p4elbu, u4lc0g) => {
        jnwv5['prototype']['resMgrLoadCallBack'](npu4, p4elbu, u4lc0g, ugcl04);
      }, zh9xa, f7km, kg0sy, bn5pej, y67rk);
    }, d82qx['resMgrLoadCallBack'] = function (v3wj, logyc0, ys0ok, hzx$a9) {
      console['log']('buff:::', v3wj, ys0ok, be45pn['fileNativeDir'] + '///' + be45pn['fileListName']), hzx$a9(v3wj, logyc0, ys0ok);
    }, d82qx['clearRes'] = function (lbuce4, ah$z) {
      ah$z === void 0x0 && (ah$z = ![]);var bne54p = this;bne54p['clearRes'](lbuce4, ah$z);var m2q1df = be45pn['getFileInfo'](lbuce4);if (m2q1df && (lbuce4['indexOf']('http://') != -0x1 || lbuce4['indexOf']('https://') != -0x1)) {
        var s76koy = m2q1df['md5'],
            ks6go = be45pn['getFileNativePath'](s76koy);be45pn['remove'](ks6go);
      }
    }, jnwv5['onReadNativeCallBack'] = function (e4punb, p45bn, qd12i, g0cys, axi9h, oks67, bl4eup, pbu4ne, k6f7s) {
      g0cys === void 0x0 && (g0cys = !![]), oks67 === void 0x0 && (oks67 = ![]), pbu4ne === void 0x0 && (pbu4ne = 0x0);if (!pbu4ne) {
        var r7mf1;if (qd12i == 'json' || qd12i == 'atlas') r7mf1 = yksg6['getJson'](k6f7s['data']);else qd12i == 'xml' ? r7mf1 = b5jnpe['parseXMLFromString'](k6f7s['data']) : r7mf1 = k6f7s['data'];bl4eup['onLoaded'](r7mf1), !yksg6['isZiYu'] && yksg6['isPosMsgYu'] && qd12i != 'arraybuffer' && wx['postMessage']({ 'url': p45bn, 'data': r7mf1, 'isLoad': !![] });
      } else pbu4ne == 0x1 && yksg6['EnvConfig']['load']['call'](bl4eup, p45bn, qd12i, g0cys, axi9h, oks67);
    }, fmrk67(jnwv5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jnwv5;
  }(),
      be45pn = function (g6kyso) {
    function qrf1md() {
      qrf1md['__super']['call'](this);;
    }return u0ocgl(qrf1md, 'laya.wx.mini.MiniFileMgr', g6kyso), qrf1md['isLoadFile'] = function (f2qd) {
      return qrf1md['_fileTypeArr']['indexOf'](f2qd) != -0x1 ? !![] : ![];
    }, qrf1md['getFileInfo'] = function (hazix9) {
      var xdqi8 = hazix9['split']('?')[0x0],
          u4lce = qrf1md['filesListObj'][xdqi8];if (u4lce == null) return null;else return u4lce;return null;
    }, qrf1md['onFileUpdate'] = function (g0yclo, id92) {
      var nbp5je = g0yclo['split']('/'),
          ucg0o = nbp5je[nbp5je['length'] - 0x1],
          p54 = qrf1md['getFileInfo'](id92);if (p54 == null) qrf1md['onSaveFile'](id92, ucg0o);else {
        if (p54['readyUrl'] != id92) qrf1md['remove'](ucg0o, id92);
      }
    }, qrf1md['exits'] = function (j3pne, pj3n5w) {
      var nj5v3w = qrf1md['getFileNativePath'](j3pne);qrf1md['fs']['getFileInfo']({ 'filePath': nj5v3w, 'success': function (clogy0) {
          pj3n5w != null && pj3n5w['runWith']([0x0, clogy0]);
        }, 'fail': function (x9zh$a) {
          pj3n5w != null && pj3n5w['runWith']([0x1, x9zh$a]);
        } });
    }, qrf1md['read'] = function (z982ix, f2mq1d, ebu4lc, o0u) {
      f2mq1d === void 0x0 && (f2mq1d = 'ascill'), o0u === void 0x0 && (o0u = '');var xiq28d;o0u != '' ? xiq28d = qrf1md['getFileNativePath'](z982ix) : xiq28d = z982ix, qrf1md['fs']['readFile']({ 'filePath': xiq28d, 'encoding': f2mq1d, 'success': function (lbuc40) {
          ebu4lc != null && ebu4lc['runWith']([0x0, lbuc40]);
        }, 'fail': function (ysk7o) {
          if (ysk7o && o0u != '') qrf1md['down'](o0u, f2mq1d, ebu4lc, o0u);else ebu4lc != null && ebu4lc['runWith']([0x1]);
        } });
    }, qrf1md['readNativeFile'] = function (ry7ks6, scgy0o) {
      qrf1md['fs']['readFile']({ 'filePath': ry7ks6, 'encoding': '', 'success': function (npbe5) {
          scgy0o != null && scgy0o['runWith']([0x0]);
        }, 'fail': function (jn5bp) {
          scgy0o != null && scgy0o['runWith']([0x1]);
        } });
    }, qrf1md['down'] = function (x8za9, l4bu, jne5p3, axzh$) {
      l4bu === void 0x0 && (l4bu = 'ascill'), axzh$ === void 0x0 && (axzh$ = '');var f76rsk = qrf1md['getFileNativePath'](axzh$),
          i28x = qrf1md['wxdown']({ 'url': x8za9, 'filePath': f76rsk, 'success': function (ogu0lc) {
          if (ogu0lc['statusCode'] === 0xc8) qrf1md['readFile'](ogu0lc['filePath'], l4bu, jne5p3, axzh$);
        }, 'fail': function (dmq1f2) {
          jne5p3 != null && jne5p3['runWith']([0x1, dmq1f2]);
        } });i28x['onProgressUpdate'](function (clbu4e) {
        jne5p3 != null && jne5p3['runWith']([0x2, clbu4e['progress']]);
      });
    }, qrf1md['readFile'] = function (sfr, gsko6, l04cgu, $a9hx) {
      gsko6 === void 0x0 && (gsko6 = 'ascill'), $a9hx === void 0x0 && ($a9hx = ''), qrf1md['fs']['readFile']({ 'filePath': sfr, 'encoding': gsko6, 'success': function (enbp5) {
          if (sfr['indexOf']('http://') != -0x1 || sfr['indexOf']('https://') != -0x1) qrf1md['onFileUpdate'](sfr, $a9hx);l04cgu != null && l04cgu['runWith']([0x0, enbp5]);
        }, 'fail': function (qfdm2) {
          if (qfdm2) l04cgu != null && l04cgu['runWith']([0x1, qfdm2]);
        } });
    }, qrf1md['downImg'] = function (ylo0g, ys67r, k6osy) {
      k6osy === void 0x0 && (k6osy = '');var ol0yc = qrf1md['wxdown']({ 'url': ylo0g, 'success': function (p4n5be) {
          p4n5be['statusCode'] === 0xc8 && qrf1md['copyFile'](p4n5be['tempFilePath'], k6osy, ys67r);
        }, 'fail': function (rm17) {
          ys67r != null && ys67r['runWith']([0x1, rm17]);
        } });
    }, qrf1md['copyFile'] = function (oucg0, ah$xz, ogyks) {
      var j53nwv = oucg0['split']('/'),
          drfm1 = j53nwv[j53nwv['length'] - 0x1],
          uebnp4 = ah$xz['split']('?')[0x0],
          lb04uc = qrf1md['getFileInfo'](ah$xz),
          qdm1r = qrf1md['getFileNativePath'](drfm1);qrf1md['fs']['copyFile']({ 'srcPath': oucg0, 'destPath': qdm1r, 'success': function (eb4ulc) {
          if (!lb04uc) qrf1md['onSaveFile'](ah$xz, drfm1), ogyks != null && ogyks['runWith']([0x0]);else {
            if (lb04uc['readyUrl'] != ah$xz) qrf1md['remove'](drfm1, ah$xz, ogyks);
          }
        }, 'fail': function (colg) {
          ogyks != null && ogyks['runWith']([0x1, colg]);
        } });
    }, qrf1md['getFileNativePath'] = function (neu4bp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + neu4bp;
    }, qrf1md['remove'] = function (k6rs, p35, f671rm) {
      p35 === void 0x0 && (p35 = '');var qx2id8 = qrf1md['getFileInfo'](p35),
          rky7s = qrf1md['getFileNativePath'](qx2id8['md5']);ax$hz['loader']['clearRes'](qx2id8['readyUrl']), qrf1md['fs']['unlink']({ 'filePath': rky7s, 'success': function (f1qrm7) {
          if (p35 != '') qrf1md['onSaveFile'](p35, k6rs);f671rm != null && f671rm['runWith']([0x0]);
        }, 'fail': function (m76fr1) {} });
    }, qrf1md['onSaveFile'] = function (j3wvn5, lup4b) {
      var d2q18 = j3wvn5['split']('?')[0x0];qrf1md['filesListObj'][d2q18] = { 'md5': lup4b, 'readyUrl': j3wvn5 }, qrf1md['fs']['writeFile']({ 'filePath': qrf1md['fileNativeDir'] + '/' + qrf1md['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qrf1md['filesListObj']), 'success': function (rm61f) {
          console['log']('写入测试测试成功：', rm61f);
        }, 'fail': function (qfd21) {
          console['log']('写入测试测试失败：', qfd21);
        } });
    }, qrf1md['existDir'] = function (ce4bu, z$a) {
      qrf1md['fs']['mkdir']({ 'dirPath': ce4bu, 'success': function (u4lbec) {
          z$a != null && z$a['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kgys6o) {
          if (kgys6o['errMsg']['indexOf']('file already exists') != -0x1) qrf1md['readSync'](qrf1md['fileListName'], 'utf8', z$a);else z$a != null && z$a['runWith']([0x1, kgys6o]);
        } });
    }, qrf1md['readSync'] = function (gloc0y, y7s6kr, ubnpe4, r67fsk) {
      y7s6kr === void 0x0 && (y7s6kr = 'ascill'), r67fsk === void 0x0 && (r67fsk = '');var c0ulog = qrf1md['getFileNativePath'](gloc0y),
          n4pu;try {
        n4pu = qrf1md['fs']['readFileSync'](c0ulog), ubnpe4 != null && ubnpe4['runWith']([0x0, { 'data': n4pu }]);
      } catch (w3jv5n) {
        ubnpe4 != null && ubnpe4['runWith']([0x1]);
      }
    }, qrf1md['readCache'] = function () {}, qrf1md['writeCache'] = function (zix89) {
      var pl4bu = readyUrl['split']('?')[0x0];qrf1md['filesListObj'][pl4bu] = { 'md5': md5Name, 'readyUrl': readyUrl }, qrf1md['fs']['writeFile']({ 'filePath': qrf1md['fileNativeDir'] + '/' + qrf1md['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qrf1md['filesListObj']), 'success': function (ugloc) {}, 'fail': function (f76kr) {} });
    }, qrf1md['setNativeFileDir'] = function (j3nwp) {
      qrf1md['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j3nwp;
    }, qrf1md['filesListObj'] = {}, qrf1md['fileNativeDir'] = null, qrf1md['fileListName'] = 'layaairfiles.txt', qrf1md['ziyuFileData'] = {}, fmrk67(qrf1md, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qrf1md;
  }(xi2d8q),
      u04cb = function (bnp45e) {
    function y0ksg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y0ksg['__super']['call'](this), this['_sound'] = y0ksg['_createSound']();
    }u0ocgl(y0ksg, 'laya.wx.mini.MiniSound', bnp45e);var dmrq = y0ksg['prototype'];return dmrq['load'] = function (ah9x$) {
      var azhx9$ = this;ah9x$ = npe35j['formatURL'](ah9x$), this['url'] = ah9x$;if (y0ksg['_audioCache'][ah9x$]) {
        this['event']('complete');return;
      }function xaz9$h() {
        if (y0ksg['_null'] != undefined) azhx9$['_sound']['onCanplay'](y0ksg['_null']), azhx9$['_sound']['onError'](y0ksg['_null']);else try {
          azhx9$['_sound']['onCanplay'](null), azhx9$['_sound']['onError'](null), y0ksg['_null'] = null;
        } catch (ko0ys) {
          console['warn']('[wxmini] _clearSound:' + ko0ys), azhx9$['_sound']['onCanplay'](u4epbn), azhx9$['_sound']['onError'](u4epbn), y0ksg['_null'] = u4epbn;
        }
      }function j53wnp() {
        xaz9$h(), co0gs['loaded'] = !![], co0gs['event']('complete'), y0ksg['_audioCache'][co0gs['url']] = co0gs;
      }function xhai9z(i89d) {
        console['error']('errCode=' + i89d['errCode'] + '  errMsg=' + i89d['errMsg']), xaz9$h(), co0gs['event']('error');
      }function u4epbn() {}this['_sound']['onCanplay'](j53wnp), this['_sound']['onError'](xhai9z), this['_sound']['src'] = ah9x$;var co0gs = this;
    }, dmrq['play'] = function (e5jnb, gko6y) {
      e5jnb === void 0x0 && (e5jnb = 0x0), gko6y === void 0x0 && (gko6y = 0x0);var lub04;if (this['url'] == j5w3np['_tMusic']) {
        if (!y0ksg['_musicAudio']) y0ksg['_musicAudio'] = y0ksg['_createSound']();lub04 = y0ksg['_musicAudio'];
      } else lub04 = y0ksg['_createSound']();lub04['src'] = this['url'];var goycs0 = new hxaz9i(lub04);return goycs0['url'] = this['url'], goycs0['loops'] = gko6y, goycs0['startTime'] = e5jnb, goycs0['play'](), j5w3np['addChannel'](goycs0), goycs0;
    }, dmrq['dispose'] = function () {
      var s76oyk = y0ksg['_audioCache'][this['url']];s76oyk && (s76oyk['src'] = '', delete y0ksg['_audioCache'][this['url']]);
    }, xq2id(0x0, dmrq, 'duration', function () {
      return this['_sound']['duration'];
    }), y0ksg['_createSound'] = function () {
      return y0ksg['_id']++, yksg6['window']['wx']['createInnerAudioContext']();
    }, y0ksg['_musicAudio'] = null, y0ksg['_id'] = 0x0, y0ksg['_audioCache'] = {}, y0ksg['_null'] = undefined, y0ksg;
  }(xi2d8q),
      hxaz9i = function (qd2) {
    function ryk7s6(ucglo) {
      this['_audio'] = null, this['_onEnd'] = null, ryk7s6['__super']['call'](this), this['_audio'] = ucglo, this['_onEnd'] = b5jnpe['bind'](this['__onEnd'], this), ucglo['onEnded'](this['_onEnd']);
    }u0ocgl(ryk7s6, 'laya.wx.mini.MiniSoundChannel', qd2);var yo7ks6 = ryk7s6['prototype'];return yo7ks6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ax$hz['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yo7ks6['__onNull'] = function () {}, yo7ks6['play'] = function () {
      this['isStopped'] = ![], j5w3np['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yo7ks6['stop'] = function () {
      this['isStopped'] = !![], j5w3np['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ryk7s6['_null'] != undefined) this['_audio']['onEnded'](ryk7s6['_null']);else try {
        this['_audio']['onEnded'](null), ryk7s6['_null'] = null;
      } catch (zix8) {
        console['warn']('[wxmini] stop:' + zix8), this['_audio']['onEnded'](b5jnpe['bind'](this['__onNull'], this)), ryk7s6['_null'] = b5jnpe['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yo7ks6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yo7ks6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], j5w3np['addChannel'](this), this['_audio']['play']();
    }, xq2id(0x0, yo7ks6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xq2id(0x0, yo7ks6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xq2id(0x0, yo7ks6, 'volume', function () {
      return 0x1;
    }, function (wj53vn) {}), ryk7s6['_null'] = undefined, ryk7s6;
  }(gcu0lo);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jp5be in Laya) {
    var iqx82d = Laya[jp5be];iqx82d && iqx82d['__isclass'] && (exports[jp5be] = iqx82d);
  }
});