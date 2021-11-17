var W = wx.$l;
(function (window, document, rim3c) {
  var v75 = rim3c['un'],
      ba2kd = rim3c['uns'],
      x4_0yn = rim3c['static'],
      wmr3ci = rim3c['class'],
      evo79 = rim3c['getset'],
      x03_yn = rim3c['__newvec'],
      kdjb2a = laya['utils']['Browser'],
      aj2kb = laya['events']['Event'],
      e7gu = laya['events']['EventDispatcher'],
      n03rx = laya['resource']['HTMLImage'],
      qf9tl = laya['utils']['Handler'],
      ugv1 = laya['display']['Input'],
      pe61g = laya['net']['Loader'],
      ev6gu1 = laya['maths']['Matrix'],
      aqkzjh = laya['renders']['Render'],
      n_4x8 = laya['utils']['RunDriver'],
      d_$s = laya['media']['Sound'],
      $4s_8n = laya['media']['SoundChannel'],
      tlzf5q = laya['media']['SoundManager'],
      hb2kja = laya['display']['Stage'],
      ue6v = laya['net']['URL'],
      o1v9e7 = laya['utils']['Utils'],
      xy0r3c = function () {
    function jkzqah() {}return wmr3ci(jkzqah, 'laya.wx.mini.MiniAdpter'), jkzqah['getJson'] = function (ak2$d) {
      return JSON['parse'](ak2$d);
    }, jkzqah['init'] = function (mwicr, o57t) {
      mwicr === void 0x0 && (mwicr = ![]), o57t === void 0x0 && (o57t = ![]);if (jkzqah['_inited']) return;jkzqah['window'] = window;if (jkzqah['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;jkzqah['_inited'] = !![], jkzqah['isZiYu'] = o57t, jkzqah['isPosMsgYu'] = mwicr, jkzqah['EnvConfig'] = {}, !jkzqah['isZiYu'] && (qlkjh['setNativeFileDir']('/layaairGame'), qlkjh['existDir'](qlkjh['fileNativeDir'], qf9tl['create'](jkzqah, jkzqah['onMkdirCallBack']))), jkzqah['window']['focus'] = function () {}, rim3c['getUrlPath'] = function () {}, jkzqah['window']['logtime'] = function (r03imc) {}, jkzqah['window']['alertTimeLog'] = function (uv6e) {}, jkzqah['window']['resetShareInfo'] = function () {}, jkzqah['window']['CanvasRenderingContext2D'] = function () {}, jkzqah['window']['CanvasRenderingContext2D']['prototype'] = jkzqah['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jkzqah['window']['document']['body']['appendChild'] = function () {}, jkzqah['EnvConfig']['pixelRatioInt'] = 0x0, n_4x8['getPixelRatio'] = jkzqah['pixelRatio'], jkzqah['_preCreateElement'] = kdjb2a['createElement'], kdjb2a['createElement'] = jkzqah['createElement'], n_4x8['createShaderCondition'] = jkzqah['createShaderCondition'], o1v9e7['parseXMLFromString'] = jkzqah['parseXMLFromString'], ugv1['_createInputElement'] = vo57f9['_createInputElement'], jkzqah['EnvConfig']['load'] = pe61g['prototype']['load'], pe61g['prototype']['load'] = jz['prototype']['load'], jkzqah['isZiYu'] && mwicr && wx['onMessage'](function (vug17) {
        vug17['isLoad'] && (qlkjh['ziyuFileData'][vug17['url']] = vug17['data']);
      });
    }, jkzqah['onMkdirCallBack'] = function (o9fl5, v971of) {
      if (!o9fl5) qlkjh['filesListObj'] = JSON['parse'](v971of['data']);
    }, jkzqah['pixelRatio'] = function () {
      if (!jkzqah['EnvConfig']['pixelRatioInt']) try {
        var lof5t9 = wx['getSystemInfoSync']();return jkzqah['EnvConfig']['pixelRatioInt'] = lof5t9['pixelRatio'], lof5t9 = lof5t9, lof5t9['pixelRatio'];
      } catch (_xns8) {}return jkzqah['EnvConfig']['pixelRatioInt'];
    }, jkzqah['createElement'] = function (vego71) {
      if (vego71 == 'canvas') {
        var hzljk;return jkzqah['idx'] == 0x1 ? jkzqah['isZiYu'] ? (hzljk = sharedCanvas, hzljk['style'] = {}) : hzljk = window['canvas'] : hzljk = window['wx']['createCanvas'](), jkzqah['idx']++, hzljk;
      } else {
        if (vego71 == 'textarea' || vego71 == 'input') return jkzqah['onCreateInput'](vego71);else {
          if (vego71 == 'div') {
            var lqjzh = jkzqah['_preCreateElement'](vego71);return lqjzh['contains'] = function (bak2d) {
              return null;
            }, lqjzh['removeChild'] = function (l95qft) {}, lqjzh;
          } else return jkzqah['_preCreateElement'](vego71);
        }
      }
    }, jkzqah['onCreateInput'] = function (myr0c3) {
      var n4_s$8 = jkzqah['_preCreateElement'](myr0c3);return n4_s$8['focus'] = vo57f9['wxinputFocus'], n4_s$8['blur'] = vo57f9['wxinputblur'], n4_s$8['style'] = {}, n4_s$8['value'] = 0x0, n4_s$8['parentElement'] = {}, n4_s$8['placeholder'] = {}, n4_s$8['type'] = {}, n4_s$8['setColor'] = function (abj2k) {}, n4_s$8['setType'] = function (d8$4_) {}, n4_s$8['setFontFace'] = function (vu71) {}, n4_s$8['addEventListener'] = function (f1vo97) {}, n4_s$8['contains'] = function (d8s4$_) {
        return null;
      }, n4_s$8['removeChild'] = function (g7euv) {}, n4_s$8;
    }, jkzqah['createShaderCondition'] = function (zjqh) {
      var dk2ja = this,
          fl = function () {
        var ds4_$8 = zjqh;return dk2ja[zjqh['replace']('this.', '')];
      };return fl;
    }, jkzqah['EnvConfig'] = null, jkzqah['window'] = null, jkzqah['_preCreateElement'] = null, jkzqah['_inited'] = ![], jkzqah['wxRequest'] = null, jkzqah['systemInfo'] = null, jkzqah['version'] = '0.0.1', jkzqah['isZiYu'] = ![], jkzqah['isPosMsgYu'] = ![], jkzqah['parseXMLFromString'] = function (sd$2ab) {
      var gu1v6, o975v;sd$2ab = sd$2ab['replace'](/>\s+</g, '><');try {
        gu1v6 = new window['Parser']['DOMParser']()['parseFromString'](sd$2ab, 'text/xml');
      } catch (y0n3_x) {
        throw '需要引入xml解析库文件';
      }return gu1v6;
    }, jkzqah['idx'] = 0x1, jkzqah;
  }(),
      qthlzj = function () {
    function fq95tl() {}wmr3ci(fq95tl, 'laya.wx.mini.MiniImage');var kzhqjl = fq95tl['prototype'];return kzhqjl['_loadImage'] = function (yr0x3n) {
      var eu16gv = this,
          of9v1 = ![];yr0x3n['indexOf']('layaNativeDir/') == -0x1 && (of9v1 = !![], yr0x3n = ue6v['formatURL'](yr0x3n));if (!qlkjh['getFileInfo'](yr0x3n)) {
        if (yr0x3n['indexOf']('http://') != -0x1 || yr0x3n['indexOf']('https://') != -0x1) qlkjh['downImg'](yr0x3n, new qf9tl(fq95tl, fq95tl['onDownImgCallBack'], [yr0x3n, eu16gv]), yr0x3n);else fq95tl['onCreateImage'](yr0x3n, eu16gv, !![]);
      } else fq95tl['onCreateImage'](yr0x3n, eu16gv, !of9v1);
    }, fq95tl['onDownImgCallBack'] = function (g61vu, lot, ba2jd) {
      if (!ba2jd) fq95tl['onCreateImage'](g61vu, lot);else lot['onError'](null);
    }, fq95tl['onCreateImage'] = function (hzjqtl, jqlkzh, tl5o) {
      tl5o === void 0x0 && (tl5o = ![]);var h2jka;if (!tl5o) {
        var $b8s2 = qlkjh['getFileInfo'](hzjqtl),
            t9l = $b8s2['md5'];h2jka = qlkjh['getFileNativePath'](t9l);
      } else h2jka = hzjqtl;if (jqlkzh['imgCache'] == null) jqlkzh['imgCache'] = {};var ljkhzq;function o79ve1() {
        ljkhzq['onload'] = null, ljkhzq['onerror'] = null, delete jqlkzh['imgCache'][hzjqtl];
      };var up6g = function () {
        o79ve1(), jqlkzh['onLoaded'](ljkhzq);
      },
          v79o1 = function () {
        o79ve1(), jqlkzh['event']('error', 'Load image failed');
      };jqlkzh['_type'] == 'nativeimage' ? (ljkhzq = new kdjb2a['window']['Image'](), ljkhzq['crossOrigin'] = '', ljkhzq['onload'] = up6g, ljkhzq['onerror'] = v79o1, ljkhzq['src'] = h2jka, jqlkzh['imgCache'][hzjqtl] = ljkhzq) : new n03rx['create'](h2jka, { 'onload': up6g, 'onerror': v79o1, 'onCreate': function (ovg7) {
          ljkhzq = ovg7, jqlkzh['imgCache'][hzjqtl] = ovg7;
        } });
    }, fq95tl;
  }(),
      vo57f9 = function () {
    function $s8d() {}return wmr3ci($s8d, 'laya.wx.mini.MiniInput'), $s8d['_createInputElement'] = function () {
      ugv1['_initInput'](ugv1['area'] = kdjb2a['createElement']('textarea')), ugv1['_initInput'](ugv1['input'] = kdjb2a['createElement']('input')), ugv1['inputContainer'] = kdjb2a['createElement']('div'), ugv1['inputContainer']['style']['position'] = 'absolute', ugv1['inputContainer']['style']['zIndex'] = 0x186a0, kdjb2a['container']['appendChild'](ugv1['inputContainer']), ugv1['inputContainer']['setPos'] = function (ny_03x, y48n_) {
        ugv1['inputContainer']['style']['left'] = ny_03x + 'px', ugv1['inputContainer']['style']['top'] = y48n_ + 'px';
      }, rim3c['stage']['on']('resize', null, $s8d['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (o95t7) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), tlzf5q['_soundClass'] = yx_8, tlzf5q['_musicClass'] = yx_8;
    }, $s8d['_onStageResize'] = function () {
      var ycr0m3 = rim3c['stage']['_canvasTransform']['identity']();ycr0m3['scale'](kdjb2a['width'] / aqkzjh['canvas']['width'] / n_4x8['getPixelRatio'](), kdjb2a['height'] / aqkzjh['canvas']['height'] / n_4x8['getPixelRatio']());
    }, $s8d['wxinputFocus'] = function (qlf59t) {
      var hqtlz5 = ugv1['inputElement']['target'];if (hqtlz5 && !hqtlz5['editable']) return;xy0r3c['window']['wx']['offKeyboardConfirm'](), xy0r3c['window']['wx']['offKeyboardInput'](), xy0r3c['window']['wx']['showKeyboard']({ 'defaultValue': hqtlz5['text'], 'maxLength': hqtlz5['maxChars'], 'multiple': hqtlz5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($sadb2) {}, 'fail': function (n3yxr) {} }), xy0r3c['window']['wx']['onKeyboardConfirm'](function (crx0y3) {
        var db2s$a = crx0y3 ? crx0y3['value'] : '';hqtlz5['text'] = db2s$a, hqtlz5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xy0r3c['window']['wx']['onKeyboardInput'](function (f9v1) {
        var o9l5tf = f9v1 ? f9v1['value'] : '';if (!hqtlz5['multiline']) {
          if (o9l5tf['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hqtlz5['text'] = o9l5tf, hqtlz5['event']('input');
      });
    }, $s8d['inputEnter'] = function () {
      ugv1['inputElement']['target']['focus'] = ![];
    }, $s8d['wxinputblur'] = function () {
      $s8d['hideKeyboard']();
    }, $s8d['hideKeyboard'] = function () {
      xy0r3c['window']['wx']['offKeyboardConfirm'](), xy0r3c['window']['wx']['offKeyboardInput'](), xy0r3c['window']['wx']['hideKeyboard']({ 'success': function (v1e6ug) {
          console['log']('隐藏键盘');
        }, 'fail': function (zjqha) {
          console['log']('隐藏键盘出错:' + (zjqha ? zjqha['errMsg'] : ''));
        } });
    }, $s8d;
  }(),
      jz = function () {
    function ds$48() {}wmr3ci(ds$48, 'laya.wx.mini.MiniLoader');var d8$s_ = ds$48['prototype'];return d8$s_['load'] = function (y4x0_, ofl95t, o75tf, aqkjzh, _4xsn) {
      o75tf === void 0x0 && (o75tf = !![]), _4xsn === void 0x0 && (_4xsn = ![]);var ltqz5h = this;ltqz5h['_url'] = y4x0_;if (y4x0_['indexOf']('data:image') === 0x0) ltqz5h['_type'] = ofl95t = 'image';else ltqz5h['_type'] = ofl95t || (ofl95t = ltqz5h['getTypeFromUrl'](y4x0_));ltqz5h['_cache'] = o75tf, ltqz5h['_data'] = null;var xynr0 = 'ascii';if (y4x0_['indexOf']('.fnt') != -0x1) xynr0 = 'utf8';else ofl95t == 'arraybuffer' && (xynr0 = '');;var _nx0 = o1v9e7['getFileExtension'](y4x0_);if (ds$48['_fileTypeArr']['indexOf'](_nx0) != -0x1) xy0r3c['EnvConfig']['load']['call'](this, y4x0_, ofl95t, o75tf, aqkjzh, _4xsn);else {
        if (!qlkjh['getFileInfo'](y4x0_)) {
          if (y4x0_['indexOf']('layaNativeDir/') != -0x1) {
            if (xy0r3c['isZiYu']) {
              var nr3xy = qlkjh['ziyuFileData'][y4x0_];ltqz5h['onLoaded'](nr3xy);return;
            } else {
              cosnole['log']('read read'), qlkjh['read'](y4x0_, xynr0, new qf9tl(ds$48, ds$48['onReadNativeCallBack'], [xynr0, y4x0_, ofl95t, o75tf, aqkjzh, _4xsn, ltqz5h]));return;
            }
          }if (ue6v['rootPath'] == '') var sb2$8d = y4x0_;else sb2$8d = y4x0_['split'](ue6v['rootPath'])[0x0];y4x0_['indexOf']('http://') != -0x1 || y4x0_['indexOf']('https://') != -0x1 ? xy0r3c['EnvConfig']['load']['call'](ltqz5h, y4x0_, ofl95t, o75tf, aqkjzh, _4xsn) : qlkjh['readFile'](sb2$8d, xynr0, new qf9tl(ds$48, ds$48['onReadNativeCallBack'], [xynr0, y4x0_, ofl95t, o75tf, aqkjzh, _4xsn, ltqz5h]), y4x0_);
        } else xy0r3c['EnvConfig']['load']['call'](this, y4x0_, ofl95t, o75tf, aqkjzh, _4xsn);
      }
    }, d8$s_['resMgrLoad'] = function (lqt5f, tjlh, ztljhq, kb$a2d, gu7, zhtlqj, dbk$2a) {
      ztljhq === void 0x0 && (ztljhq = 0x0), kb$a2d === void 0x0 && (kb$a2d = ![]), gu7 === void 0x0 && (gu7 = ![]), zhtlqj === void 0x0 && (zhtlqj = 0x0), dbk$2a === void 0x0 && (dbk$2a = 0x3), lqt5f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lqt5f), xy0r3c['EnvConfig']['resMgrLoad'](lqt5f, (d$ka, jkhba2, ep1u6g) => {
        ds$48['prototype']['resMgrLoadCallBack'](d$ka, jkhba2, ep1u6g, tjlh);
      }, ztljhq, kb$a2d, gu7, zhtlqj, dbk$2a);
    }, d8$s_['resMgrLoadCallBack'] = function (asb2d, o9fv, f5ltqz, zqjkha) {
      console['log']('buff:::', asb2d, f5ltqz, qlkjh['fileNativeDir'] + '///' + qlkjh['fileListName']), zqjkha(asb2d, o9fv, f5ltqz);
    }, d8$s_['clearRes'] = function (gupe6, eg61vu) {
      eg61vu === void 0x0 && (eg61vu = ![]);var u6e1p = this;u6e1p['clearRes'](gupe6, eg61vu);var yrmc30 = qlkjh['getFileInfo'](gupe6);if (yrmc30 && (gupe6['indexOf']('http://') != -0x1 || gupe6['indexOf']('https://') != -0x1)) {
        var jqlhzt = yrmc30['md5'],
            $8d_4s = qlkjh['getFileNativePath'](jqlhzt);qlkjh['remove']($8d_4s);
      }
    }, ds$48['onReadNativeCallBack'] = function (d84$2s, m0ic, y_x48n, y_x0n4, hlkqjz, y3m0rc, hzq5l, _sn8x4, $dba2) {
      y_x0n4 === void 0x0 && (y_x0n4 = !![]), y3m0rc === void 0x0 && (y3m0rc = ![]), _sn8x4 === void 0x0 && (_sn8x4 = 0x0);if (!_sn8x4) {
        var x4y8;if (y_x48n == 'json' || y_x48n == 'atlas') x4y8 = xy0r3c['getJson']($dba2['data']);else y_x48n == 'xml' ? x4y8 = o1v9e7['parseXMLFromString']($dba2['data']) : x4y8 = $dba2['data'];hzq5l['onLoaded'](x4y8), !xy0r3c['isZiYu'] && xy0r3c['isPosMsgYu'] && y_x48n != 'arraybuffer' && wx['postMessage']({ 'url': m0ic, 'data': x4y8, 'isLoad': !![] });
      } else _sn8x4 == 0x1 && xy0r3c['EnvConfig']['load']['call'](hzq5l, m0ic, y_x48n, y_x0n4, hlkqjz, y3m0rc);
    }, x4_0yn(ds$48, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ds$48;
  }(),
      qlkjh = function (ja2kbh) {
    function ab$kd2() {
      ab$kd2['__super']['call'](this);;
    }return wmr3ci(ab$kd2, 'laya.wx.mini.MiniFileMgr', ja2kbh), ab$kd2['isLoadFile'] = function (s2d$84) {
      return ab$kd2['_fileTypeArr']['indexOf'](s2d$84) != -0x1 ? !![] : ![];
    }, ab$kd2['getFileInfo'] = function (g1veu6) {
      var _4$s = g1veu6['split']('?')[0x0],
          yx0_3 = ab$kd2['filesListObj'][_4$s];if (yx0_3 == null) return null;else return yx0_3;return null;
    }, ab$kd2['onFileUpdate'] = function (tf579, qt95) {
      var f9t5o = tf579['split']('/'),
          fl95q = f9t5o[f9t5o['length'] - 0x1],
          bakd$ = ab$kd2['getFileInfo'](qt95);if (bakd$ == null) ab$kd2['onSaveFile'](qt95, fl95q);else {
        if (bakd$['readyUrl'] != qt95) ab$kd2['remove'](fl95q, qt95);
      }
    }, ab$kd2['exits'] = function (f9v7o5, pg6eu1) {
      var up61ge = ab$kd2['getFileNativePath'](f9v7o5);ab$kd2['fs']['getFileInfo']({ 'filePath': up61ge, 'success': function (f9lto) {
          pg6eu1 != null && pg6eu1['runWith']([0x0, f9lto]);
        }, 'fail': function (zkjhab) {
          pg6eu1 != null && pg6eu1['runWith']([0x1, zkjhab]);
        } });
    }, ab$kd2['read'] = function (cr3miw, y8_xn4, gu71ve, xn0y3_) {
      y8_xn4 === void 0x0 && (y8_xn4 = 'ascill'), xn0y3_ === void 0x0 && (xn0y3_ = '');var ev17u;xn0y3_ != '' ? ev17u = ab$kd2['getFileNativePath'](cr3miw) : ev17u = cr3miw, ab$kd2['fs']['readFile']({ 'filePath': ev17u, 'encoding': y8_xn4, 'success': function (jlhqkz) {
          gu71ve != null && gu71ve['runWith']([0x0, jlhqkz]);
        }, 'fail': function (vfo179) {
          if (vfo179 && xn0y3_ != '') ab$kd2['down'](xn0y3_, y8_xn4, gu71ve, xn0y3_);else gu71ve != null && gu71ve['runWith']([0x1]);
        } });
    }, ab$kd2['readNativeFile'] = function (qahz, u6epg1) {
      ab$kd2['fs']['readFile']({ 'filePath': qahz, 'encoding': '', 'success': function (y0rm) {
          u6epg1 != null && u6epg1['runWith']([0x0]);
        }, 'fail': function (bk2d$) {
          u6epg1 != null && u6epg1['runWith']([0x1]);
        } });
    }, ab$kd2['down'] = function (n4y0x_, e6vg1, ym3c0r, tqzfl) {
      e6vg1 === void 0x0 && (e6vg1 = 'ascill'), tqzfl === void 0x0 && (tqzfl = '');var l59qt = ab$kd2['getFileNativePath'](tqzfl),
          o1 = ab$kd2['wxdown']({ 'url': n4y0x_, 'filePath': l59qt, 'success': function (o1f97) {
          if (o1f97['statusCode'] === 0xc8) ab$kd2['readFile'](o1f97['filePath'], e6vg1, ym3c0r, tqzfl);
        }, 'fail': function (fztq5) {
          ym3c0r != null && ym3c0r['runWith']([0x1, fztq5]);
        } });o1['onProgressUpdate'](function (f5l9ot) {
        ym3c0r != null && ym3c0r['runWith']([0x2, f5l9ot['progress']]);
      });
    }, ab$kd2['readFile'] = function (s2ba, db$2a, e16gu, n0x3yr) {
      db$2a === void 0x0 && (db$2a = 'ascill'), n0x3yr === void 0x0 && (n0x3yr = ''), ab$kd2['fs']['readFile']({ 'filePath': s2ba, 'encoding': db$2a, 'success': function (x_04) {
          if (s2ba['indexOf']('http://') != -0x1 || s2ba['indexOf']('https://') != -0x1) ab$kd2['onFileUpdate'](s2ba, n0x3yr);e16gu != null && e16gu['runWith']([0x0, x_04]);
        }, 'fail': function (tqz5lh) {
          if (tqz5lh) e16gu != null && e16gu['runWith']([0x1, tqz5lh]);
        } });
    }, ab$kd2['downImg'] = function (riw3, x8n4y, jabkd) {
      jabkd === void 0x0 && (jabkd = '');var b2$s = ab$kd2['wxdown']({ 'url': riw3, 'success': function (f57vo9) {
          f57vo9['statusCode'] === 0xc8 && ab$kd2['copyFile'](f57vo9['tempFilePath'], jabkd, x8n4y);
        }, 'fail': function (a$2bs) {
          x8n4y != null && x8n4y['runWith']([0x1, a$2bs]);
        } });
    }, ab$kd2['copyFile'] = function (ny_0x4, kjzaq, mr30ic) {
      var jlhkz = ny_0x4['split']('/'),
          q5fl = jlhkz[jlhkz['length'] - 0x1],
          h5l = kjzaq['split']('?')[0x0],
          jqzhl = ab$kd2['getFileInfo'](kjzaq),
          n_y8 = ab$kd2['getFileNativePath'](q5fl);ab$kd2['fs']['copyFile']({ 'srcPath': ny_0x4, 'destPath': n_y8, 'success': function (yn03_) {
          if (!jqzhl) ab$kd2['onSaveFile'](kjzaq, q5fl), mr30ic != null && mr30ic['runWith']([0x0]);else {
            if (jqzhl['readyUrl'] != kjzaq) ab$kd2['remove'](q5fl, kjzaq, mr30ic);
          }
        }, 'fail': function (z5lqh) {
          mr30ic != null && mr30ic['runWith']([0x1, z5lqh]);
        } });
    }, ab$kd2['getFileNativePath'] = function (d8s2$b) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + d8s2$b;
    }, ab$kd2['remove'] = function (i3cmwr, ri3m0, qjzlk) {
      ri3m0 === void 0x0 && (ri3m0 = '');var cm30yr = ab$kd2['getFileInfo'](ri3m0),
          u7eg1v = ab$kd2['getFileNativePath'](cm30yr['md5']);rim3c['loader']['clearRes'](cm30yr['readyUrl']), ab$kd2['fs']['unlink']({ 'filePath': u7eg1v, 'success': function (q9ftl5) {
          if (ri3m0 != '') ab$kd2['onSaveFile'](ri3m0, i3cmwr);qjzlk != null && qjzlk['runWith']([0x0]);
        }, 'fail': function (tljzq) {} });
    }, ab$kd2['onSaveFile'] = function (hl5qt, eg7v1o) {
      var e1vg7 = hl5qt['split']('?')[0x0];ab$kd2['filesListObj'][e1vg7] = { 'md5': eg7v1o, 'readyUrl': hl5qt }, ab$kd2['fs']['writeFile']({ 'filePath': ab$kd2['fileNativeDir'] + '/' + ab$kd2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ab$kd2['filesListObj']), 'success': function (b$dak2) {
          console['log']('写入测试测试成功：', b$dak2);
        }, 'fail': function (lot95f) {
          console['log']('写入测试测试失败：', lot95f);
        } });
    }, ab$kd2['existDir'] = function (hkjazq, hqtzjl) {
      ab$kd2['fs']['mkdir']({ 'dirPath': hkjazq, 'success': function (a2bs) {
          hqtzjl != null && hqtzjl['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hjzbk) {
          if (hjzbk['errMsg']['indexOf']('file already exists') != -0x1) ab$kd2['readSync'](ab$kd2['fileListName'], 'utf8', hqtzjl);else hqtzjl != null && hqtzjl['runWith']([0x1, hjzbk]);
        } });
    }, ab$kd2['readSync'] = function (hkjzb, ltf95q, v957fo, v17oe9) {
      ltf95q === void 0x0 && (ltf95q = 'ascill'), v17oe9 === void 0x0 && (v17oe9 = '');var s$8d42 = ab$kd2['getFileNativePath'](hkjzb),
          fov9;try {
        fov9 = ab$kd2['fs']['readFileSync'](s$8d42), v957fo != null && v957fo['runWith']([0x0, { 'data': fov9 }]);
      } catch (o79f1) {
        v957fo != null && v957fo['runWith']([0x1]);
      }
    }, ab$kd2['readCache'] = function () {}, ab$kd2['writeCache'] = function (x8_sn) {
      var ot59fl = readyUrl['split']('?')[0x0];ab$kd2['filesListObj'][ot59fl] = { 'md5': md5Name, 'readyUrl': readyUrl }, ab$kd2['fs']['writeFile']({ 'filePath': ab$kd2['fileNativeDir'] + '/' + ab$kd2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ab$kd2['filesListObj']), 'success': function (bs28$d) {}, 'fail': function (bdsa2$) {} });
    }, ab$kd2['setNativeFileDir'] = function (sb8d2$) {
      ab$kd2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sb8d2$;
    }, ab$kd2['filesListObj'] = {}, ab$kd2['fileNativeDir'] = null, ab$kd2['fileListName'] = 'layaairfiles.txt', ab$kd2['ziyuFileData'] = {}, x4_0yn(ab$kd2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ab$kd2;
  }(e7gu),
      yx_8 = function (jbahz) {
    function ftzql() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ftzql['__super']['call'](this), this['_sound'] = ftzql['_createSound']();
    }wmr3ci(ftzql, 'laya.wx.mini.MiniSound', jbahz);var up1ge6 = ftzql['prototype'];return up1ge6['load'] = function (e1u7gv) {
      var c0x3y = this;e1u7gv = ue6v['formatURL'](e1u7gv), this['url'] = e1u7gv;if (ftzql['_audioCache'][e1u7gv]) {
        this['event']('complete');return;
      }function fqtzl5() {
        if (ftzql['_null'] != undefined) c0x3y['_sound']['onCanplay'](ftzql['_null']), c0x3y['_sound']['onError'](ftzql['_null']);else try {
          c0x3y['_sound']['onCanplay'](null), c0x3y['_sound']['onError'](null), ftzql['_null'] = null;
        } catch (aqjkhz) {
          console['warn']('[wxmini] _clearSound:' + aqjkhz), c0x3y['_sound']['onCanplay'](lqtf9), c0x3y['_sound']['onError'](lqtf9), ftzql['_null'] = lqtf9;
        }
      }function t5zh() {
        fqtzl5(), f5t9lo['loaded'] = !![], f5t9lo['event']('complete'), ftzql['_audioCache'][f5t9lo['url']] = f5t9lo;
      }function qf5lz(c0ir3) {
        console['error']('errCode=' + c0ir3['errCode'] + '  errMsg=' + c0ir3['errMsg']), fqtzl5(), f5t9lo['event']('error');
      }function lqtf9() {}this['_sound']['onCanplay'](t5zh), this['_sound']['onError'](qf5lz), this['_sound']['src'] = e1u7gv;var f5t9lo = this;
    }, up1ge6['play'] = function (tofl95, d$bka2) {
      tofl95 === void 0x0 && (tofl95 = 0x0), d$bka2 === void 0x0 && (d$bka2 = 0x0);var thqz5;if (this['url'] == tlzf5q['_tMusic']) {
        if (!ftzql['_musicAudio']) ftzql['_musicAudio'] = ftzql['_createSound']();thqz5 = ftzql['_musicAudio'];
      } else thqz5 = ftzql['_createSound']();thqz5['src'] = this['url'];var ns$ = new rcxy(thqz5);return ns$['url'] = this['url'], ns$['loops'] = d$bka2, ns$['startTime'] = tofl95, ns$['play'](), tlzf5q['addChannel'](ns$), ns$;
    }, up1ge6['dispose'] = function () {
      var c03mry = ftzql['_audioCache'][this['url']];c03mry && (c03mry['src'] = '', delete ftzql['_audioCache'][this['url']]);
    }, evo79(0x0, up1ge6, 'duration', function () {
      return this['_sound']['duration'];
    }), ftzql['_createSound'] = function () {
      return ftzql['_id']++, xy0r3c['window']['wx']['createInnerAudioContext']();
    }, ftzql['_musicAudio'] = null, ftzql['_id'] = 0x0, ftzql['_audioCache'] = {}, ftzql['_null'] = undefined, ftzql;
  }(e7gu),
      rcxy = function (jdb2a) {
    function thzql(d2ba$s) {
      this['_audio'] = null, this['_onEnd'] = null, thzql['__super']['call'](this), this['_audio'] = d2ba$s, this['_onEnd'] = o1v9e7['bind'](this['__onEnd'], this), d2ba$s['onEnded'](this['_onEnd']);
    }wmr3ci(thzql, 'laya.wx.mini.MiniSoundChannel', jdb2a);var s_$48d = thzql['prototype'];return s_$48d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (rim3c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, s_$48d['__onNull'] = function () {}, s_$48d['play'] = function () {
      this['isStopped'] = ![], tlzf5q['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, s_$48d['stop'] = function () {
      this['isStopped'] = !![], tlzf5q['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (thzql['_null'] != undefined) this['_audio']['onEnded'](thzql['_null']);else try {
        this['_audio']['onEnded'](null), thzql['_null'] = null;
      } catch (r3c0) {
        console['warn']('[wxmini] stop:' + r3c0), this['_audio']['onEnded'](o1v9e7['bind'](this['__onNull'], this)), thzql['_null'] = o1v9e7['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, s_$48d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, s_$48d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], tlzf5q['addChannel'](this), this['_audio']['play']();
    }, evo79(0x0, s_$48d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), evo79(0x0, s_$48d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), evo79(0x0, s_$48d, 'volume', function () {
      return 0x1;
    }, function (qtl5zh) {}), thzql['_null'] = undefined, thzql;
  }($4s_8n);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var u71 in Laya) {
    var jbak2h = Laya[u71];jbak2h && jbak2h['__isclass'] && (exports[u71] = jbak2h);
  }
});