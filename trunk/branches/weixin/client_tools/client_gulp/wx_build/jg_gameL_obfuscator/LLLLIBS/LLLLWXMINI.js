var W = wx.$l;
(function (window, document, gu71ve) {
  var _nx4s8 = gu71ve['un'],
      f79ot = gu71ve['uns'],
      dak$b = gu71ve['static'],
      s$bd = gu71ve['class'],
      hlqjzt = gu71ve['getset'],
      $8sd_4 = gu71ve['__newvec'],
      ryc03x = laya['utils']['Browser'],
      _8y4x = laya['events']['Event'],
      ltfo9 = laya['events']['EventDispatcher'],
      wmci = laya['resource']['HTMLImage'],
      ltfq95 = laya['utils']['Handler'],
      n0x_ = laya['display']['Input'],
      v7fo1 = laya['net']['Loader'],
      jzaqkh = laya['maths']['Matrix'],
      _84xny = laya['renders']['Render'],
      _ns4x = laya['utils']['RunDriver'],
      fzqt5 = laya['media']['Sound'],
      y3xn0 = laya['media']['SoundChannel'],
      jkbda = laya['media']['SoundManager'],
      kzljqh = laya['display']['Stage'],
      lthz = laya['net']['URL'],
      e61gu = laya['utils']['Utils'],
      bhzkj = function () {
    function rxy0c() {}return s$bd(rxy0c, 'laya.wx.mini.MiniAdpter'), rxy0c['getJson'] = function (flt5zq) {
      return JSON['parse'](flt5zq);
    }, rxy0c['init'] = function (f7t9, jhkab2) {
      f7t9 === void 0x0 && (f7t9 = ![]), jhkab2 === void 0x0 && (jhkab2 = ![]);if (rxy0c['_inited']) return;rxy0c['window'] = window;if (rxy0c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rxy0c['_inited'] = !![], rxy0c['isZiYu'] = jhkab2, rxy0c['isPosMsgYu'] = f7t9, rxy0c['EnvConfig'] = {}, !rxy0c['isZiYu'] && (of57v9['setNativeFileDir']('/layaairGame'), of57v9['existDir'](of57v9['fileNativeDir'], ltfq95['create'](rxy0c, rxy0c['onMkdirCallBack']))), rxy0c['window']['focus'] = function () {}, gu71ve['getUrlPath'] = function () {}, rxy0c['window']['logtime'] = function (hbaj2k) {}, rxy0c['window']['alertTimeLog'] = function ($4_) {}, rxy0c['window']['resetShareInfo'] = function () {}, rxy0c['window']['CanvasRenderingContext2D'] = function () {}, rxy0c['window']['CanvasRenderingContext2D']['prototype'] = rxy0c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rxy0c['window']['document']['body']['appendChild'] = function () {}, rxy0c['EnvConfig']['pixelRatioInt'] = 0x0, _ns4x['getPixelRatio'] = rxy0c['pixelRatio'], rxy0c['_preCreateElement'] = ryc03x['createElement'], ryc03x['createElement'] = rxy0c['createElement'], _ns4x['createShaderCondition'] = rxy0c['createShaderCondition'], e61gu['parseXMLFromString'] = rxy0c['parseXMLFromString'], n0x_['_createInputElement'] = ryx0['_createInputElement'], rxy0c['EnvConfig']['load'] = v7fo1['prototype']['load'], v7fo1['prototype']['load'] = hltzj['prototype']['load'], rxy0c['isZiYu'] && f7t9 && wx['onMessage'](function (dba2s$) {
        dba2s$['isLoad'] && (of57v9['ziyuFileData'][dba2s$['url']] = dba2s$['data']);
      });
    }, rxy0c['onMkdirCallBack'] = function (lof9t5, $k2dab) {
      if (!lof9t5) of57v9['filesListObj'] = JSON['parse']($k2dab['data']);
    }, rxy0c['pixelRatio'] = function () {
      if (!rxy0c['EnvConfig']['pixelRatioInt']) try {
        var thqjzl = wx['getSystemInfoSync']();return rxy0c['EnvConfig']['pixelRatioInt'] = thqjzl['pixelRatio'], thqjzl = thqjzl, thqjzl['pixelRatio'];
      } catch (mcry3) {}return rxy0c['EnvConfig']['pixelRatioInt'];
    }, rxy0c['createElement'] = function (u6vge) {
      if (u6vge == 'canvas') {
        var tq9l5;return rxy0c['idx'] == 0x1 ? rxy0c['isZiYu'] ? (tq9l5 = sharedCanvas, tq9l5['style'] = {}) : tq9l5 = window['canvas'] : tq9l5 = window['wx']['createCanvas'](), rxy0c['idx']++, tq9l5;
      } else {
        if (u6vge == 'textarea' || u6vge == 'input') return rxy0c['onCreateInput'](u6vge);else {
          if (u6vge == 'div') {
            var v1u6eg = rxy0c['_preCreateElement'](u6vge);return v1u6eg['contains'] = function (tz5hq) {
              return null;
            }, v1u6eg['removeChild'] = function (ad$b2s) {}, v1u6eg;
          } else return rxy0c['_preCreateElement'](u6vge);
        }
      }
    }, rxy0c['onCreateInput'] = function (crxy30) {
      var jqkaz = rxy0c['_preCreateElement'](crxy30);return jqkaz['focus'] = ryx0['wxinputFocus'], jqkaz['blur'] = ryx0['wxinputblur'], jqkaz['style'] = {}, jqkaz['value'] = 0x0, jqkaz['parentElement'] = {}, jqkaz['placeholder'] = {}, jqkaz['type'] = {}, jqkaz['setColor'] = function (ovg17e) {}, jqkaz['setType'] = function (sbd28$) {}, jqkaz['setFontFace'] = function (akhbj2) {}, jqkaz['addEventListener'] = function (jlztq) {}, jqkaz['contains'] = function (kzjaq) {
        return null;
      }, jqkaz['removeChild'] = function (c30xyr) {}, jqkaz;
    }, rxy0c['createShaderCondition'] = function (zhabjk) {
      var eug7 = this,
          s2 = function () {
        var ueg61v = zhabjk;return eug7[zhabjk['replace']('this.', '')];
      };return s2;
    }, rxy0c['EnvConfig'] = null, rxy0c['window'] = null, rxy0c['_preCreateElement'] = null, rxy0c['_inited'] = ![], rxy0c['wxRequest'] = null, rxy0c['systemInfo'] = null, rxy0c['version'] = '0.0.1', rxy0c['isZiYu'] = ![], rxy0c['isPosMsgYu'] = ![], rxy0c['parseXMLFromString'] = function ($bsd8) {
      var t9o75, mi3rc0;$bsd8 = $bsd8['replace'](/>\s+</g, '><');try {
        t9o75 = new window['Parser']['DOMParser']()['parseFromString']($bsd8, 'text/xml');
      } catch (lhqz5t) {
        throw '需要引入xml解析库文件';
      }return t9o75;
    }, rxy0c['idx'] = 0x1, rxy0c;
  }(),
      zkhbaj = function () {
    function uevg7() {}s$bd(uevg7, 'laya.wx.mini.MiniImage');var s$ad = uevg7['prototype'];return s$ad['_loadImage'] = function (kabjz) {
      var hzjaqk = this,
          kqlzhj = ![];kabjz['indexOf']('layaNativeDir/') == -0x1 && (kqlzhj = !![], kabjz = lthz['formatURL'](kabjz));if (!of57v9['getFileInfo'](kabjz)) {
        if (kabjz['indexOf']('http://') != -0x1 || kabjz['indexOf']('https://') != -0x1) of57v9['downImg'](kabjz, new ltfq95(uevg7, uevg7['onDownImgCallBack'], [kabjz, hzjaqk]), kabjz);else uevg7['onCreateImage'](kabjz, hzjaqk, !![]);
      } else uevg7['onCreateImage'](kabjz, hzjaqk, !kqlzhj);
    }, uevg7['onDownImgCallBack'] = function (kaj2hb, vo7e1g, ltzfq) {
      if (!ltzfq) uevg7['onCreateImage'](kaj2hb, vo7e1g);else vo7e1g['onError'](null);
    }, uevg7['onCreateImage'] = function (qkjza, rc03my, y0nr) {
      y0nr === void 0x0 && (y0nr = ![]);var cr03i;if (!y0nr) {
        var lqjk = of57v9['getFileInfo'](qkjza),
            rcimw3 = lqjk['md5'];cr03i = of57v9['getFileNativePath'](rcimw3);
      } else cr03i = qkjza;if (rc03my['imgCache'] == null) rc03my['imgCache'] = {};var y8n_;function yxr3n0() {
        y8n_['onload'] = null, y8n_['onerror'] = null, delete rc03my['imgCache'][qkjza];
      };var s_$n = function () {
        yxr3n0(), rc03my['onLoaded'](y8n_);
      },
          a2kdj = function () {
        yxr3n0(), rc03my['event']('error', 'Load image failed');
      };rc03my['_type'] == 'nativeimage' ? (y8n_ = new ryc03x['window']['Image'](), y8n_['crossOrigin'] = '', y8n_['onload'] = s_$n, y8n_['onerror'] = a2kdj, y8n_['src'] = cr03i, rc03my['imgCache'][qkjza] = y8n_) : new wmci['create'](cr03i, { 'onload': s_$n, 'onerror': a2kdj, 'onCreate': function (d2kb$a) {
          y8n_ = d2kb$a, rc03my['imgCache'][qkjza] = d2kb$a;
        } });
    }, uevg7;
  }(),
      ryx0 = function () {
    function i0m3r() {}return s$bd(i0m3r, 'laya.wx.mini.MiniInput'), i0m3r['_createInputElement'] = function () {
      n0x_['_initInput'](n0x_['area'] = ryc03x['createElement']('textarea')), n0x_['_initInput'](n0x_['input'] = ryc03x['createElement']('input')), n0x_['inputContainer'] = ryc03x['createElement']('div'), n0x_['inputContainer']['style']['position'] = 'absolute', n0x_['inputContainer']['style']['zIndex'] = 0x186a0, ryc03x['container']['appendChild'](n0x_['inputContainer']), n0x_['inputContainer']['setPos'] = function (cr3iw, xc0y3r) {
        n0x_['inputContainer']['style']['left'] = cr3iw + 'px', n0x_['inputContainer']['style']['top'] = xc0y3r + 'px';
      }, gu71ve['stage']['on']('resize', null, i0m3r['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zkjqlh) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jkbda['_soundClass'] = zqjthl, jkbda['_musicClass'] = zqjthl;
    }, i0m3r['_onStageResize'] = function () {
      var gepu16 = gu71ve['stage']['_canvasTransform']['identity']();gepu16['scale'](ryc03x['width'] / _84xny['canvas']['width'] / _ns4x['getPixelRatio'](), ryc03x['height'] / _84xny['canvas']['height'] / _ns4x['getPixelRatio']());
    }, i0m3r['wxinputFocus'] = function (o5l9tf) {
      var xn0r = n0x_['inputElement']['target'];if (xn0r && !xn0r['editable']) return;bhzkj['window']['wx']['offKeyboardConfirm'](), bhzkj['window']['wx']['offKeyboardInput'](), bhzkj['window']['wx']['showKeyboard']({ 'defaultValue': xn0r['text'], 'maxLength': xn0r['maxChars'], 'multiple': xn0r['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y_x4n0) {}, 'fail': function (r03cyx) {} }), bhzkj['window']['wx']['onKeyboardConfirm'](function (s4$8d) {
        var zlht5q = s4$8d ? s4$8d['value'] : '';xn0r['text'] = zlht5q, xn0r['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bhzkj['window']['wx']['onKeyboardInput'](function (lot9f) {
        var lzqth5 = lot9f ? lot9f['value'] : '';if (!xn0r['multiline']) {
          if (lzqth5['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xn0r['text'] = lzqth5, xn0r['event']('input');
      });
    }, i0m3r['inputEnter'] = function () {
      n0x_['inputElement']['target']['focus'] = ![];
    }, i0m3r['wxinputblur'] = function () {
      i0m3r['hideKeyboard']();
    }, i0m3r['hideKeyboard'] = function () {
      bhzkj['window']['wx']['offKeyboardConfirm'](), bhzkj['window']['wx']['offKeyboardInput'](), bhzkj['window']['wx']['hideKeyboard']({ 'success': function (y48nx_) {
          console['log']('隐藏键盘');
        }, 'fail': function (ja2kdb) {
          console['log']('隐藏键盘出错:' + (ja2kdb ? ja2kdb['errMsg'] : ''));
        } });
    }, i0m3r;
  }(),
      hltzj = function () {
    function lhq5() {}s$bd(lhq5, 'laya.wx.mini.MiniLoader');var cx0yr3 = lhq5['prototype'];return cx0yr3['load'] = function (bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0) {
      adk2bj === void 0x0 && (adk2bj = !![]), rm3c0 === void 0x0 && (rm3c0 = ![]);var eo1v79 = this;eo1v79['_url'] = bd$2s;if (bd$2s['indexOf']('data:image') === 0x0) eo1v79['_type'] = b2s8$ = 'image';else eo1v79['_type'] = b2s8$ || (b2s8$ = eo1v79['getTypeFromUrl'](bd$2s));eo1v79['_cache'] = adk2bj, eo1v79['_data'] = null;var yrx3c = 'ascii';if (bd$2s['indexOf']('.fnt') != -0x1) yrx3c = 'utf8';else b2s8$ == 'arraybuffer' && (yrx3c = '');;var vf9o5 = e61gu['getFileExtension'](bd$2s);if (lhq5['_fileTypeArr']['indexOf'](vf9o5) != -0x1) bhzkj['EnvConfig']['load']['call'](this, bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0);else {
        if (!of57v9['getFileInfo'](bd$2s)) {
          if (bd$2s['indexOf']('layaNativeDir/') != -0x1) {
            if (bhzkj['isZiYu']) {
              var fol = of57v9['ziyuFileData'][bd$2s];eo1v79['onLoaded'](fol);return;
            } else {
              cosnole['log']('read read'), of57v9['read'](bd$2s, yrx3c, new ltfq95(lhq5, lhq5['onReadNativeCallBack'], [yrx3c, bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0, eo1v79]));return;
            }
          }if (lthz['rootPath'] == '') var hkaqjz = bd$2s;else hkaqjz = bd$2s['split'](lthz['rootPath'])[0x0];bd$2s['indexOf']('http://') != -0x1 || bd$2s['indexOf']('https://') != -0x1 ? bhzkj['EnvConfig']['load']['call'](eo1v79, bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0) : of57v9['readFile'](hkaqjz, yrx3c, new ltfq95(lhq5, lhq5['onReadNativeCallBack'], [yrx3c, bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0, eo1v79]), bd$2s);
        } else bhzkj['EnvConfig']['load']['call'](this, bd$2s, b2s8$, adk2bj, aqhkjz, rm3c0);
      }
    }, cx0yr3['resMgrLoad'] = function (o597tf, qhjlz, ge, f95lo, o95v, qlzhkj, qjlt) {
      ge === void 0x0 && (ge = 0x0), f95lo === void 0x0 && (f95lo = ![]), o95v === void 0x0 && (o95v = ![]), qlzhkj === void 0x0 && (qlzhkj = 0x0), qjlt === void 0x0 && (qjlt = 0x3), o597tf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', o597tf), bhzkj['EnvConfig']['resMgrLoad'](o597tf, (s4d_8$, yx_3n0, rycm) => {
        lhq5['prototype']['resMgrLoadCallBack'](s4d_8$, yx_3n0, rycm, qhjlz);
      }, ge, f95lo, o95v, qlzhkj, qjlt);
    }, cx0yr3['resMgrLoadCallBack'] = function (lqtzhj, tq5lzf, tzf5l, tl5hqz) {
      console['log']('buff:::', lqtzhj, tzf5l, of57v9['fileNativeDir'] + '///' + of57v9['fileListName']), tl5hqz(lqtzhj, tq5lzf, tzf5l);
    }, cx0yr3['clearRes'] = function (k$da, qjlh) {
      qjlh === void 0x0 && (qjlh = ![]);var e7go = this;e7go['clearRes'](k$da, qjlh);var zjqhtl = of57v9['getFileInfo'](k$da);if (zjqhtl && (k$da['indexOf']('http://') != -0x1 || k$da['indexOf']('https://') != -0x1)) {
        var ot57f9 = zjqhtl['md5'],
            qz5th = of57v9['getFileNativePath'](ot57f9);of57v9['remove'](qz5th);
      }
    }, lhq5['onReadNativeCallBack'] = function (jbhak2, f5q9l, qjhztl, f579to, sd_4$8, ajkzhq, htzlj, f75o9, zakjhq) {
      f579to === void 0x0 && (f579to = !![]), ajkzhq === void 0x0 && (ajkzhq = ![]), f75o9 === void 0x0 && (f75o9 = 0x0);if (!f75o9) {
        var v16geu;if (qjhztl == 'json' || qjhztl == 'atlas') v16geu = bhzkj['getJson'](zakjhq['data']);else qjhztl == 'xml' ? v16geu = e61gu['parseXMLFromString'](zakjhq['data']) : v16geu = zakjhq['data'];htzlj['onLoaded'](v16geu), !bhzkj['isZiYu'] && bhzkj['isPosMsgYu'] && qjhztl != 'arraybuffer' && wx['postMessage']({ 'url': f5q9l, 'data': v16geu, 'isLoad': !![] });
      } else f75o9 == 0x1 && bhzkj['EnvConfig']['load']['call'](htzlj, f5q9l, qjhztl, f579to, sd_4$8, ajkzhq);
    }, dak$b(lhq5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lhq5;
  }(),
      of57v9 = function (oeg71v) {
    function akb2jd() {
      akb2jd['__super']['call'](this);;
    }return s$bd(akb2jd, 'laya.wx.mini.MiniFileMgr', oeg71v), akb2jd['isLoadFile'] = function (aqkh) {
      return akb2jd['_fileTypeArr']['indexOf'](aqkh) != -0x1 ? !![] : ![];
    }, akb2jd['getFileInfo'] = function (kajdb) {
      var qfzt5l = kajdb['split']('?')[0x0],
          hlqt5 = akb2jd['filesListObj'][qfzt5l];if (hlqt5 == null) return null;else return hlqt5;return null;
    }, akb2jd['onFileUpdate'] = function (hbkz, e91o) {
      var hbakz = hbkz['split']('/'),
          hkazb = hbakz[hbakz['length'] - 0x1],
          lf5o9 = akb2jd['getFileInfo'](e91o);if (lf5o9 == null) akb2jd['onSaveFile'](e91o, hkazb);else {
        if (lf5o9['readyUrl'] != e91o) akb2jd['remove'](hkazb, e91o);
      }
    }, akb2jd['exits'] = function (zaqhkj, s$8db) {
      var egv16 = akb2jd['getFileNativePath'](zaqhkj);akb2jd['fs']['getFileInfo']({ 'filePath': egv16, 'success': function (qflt95) {
          s$8db != null && s$8db['runWith']([0x0, qflt95]);
        }, 'fail': function (ds_4$8) {
          s$8db != null && s$8db['runWith']([0x1, ds_4$8]);
        } });
    }, akb2jd['read'] = function ($d8_s4, l5qtfz, hkbz, _8yx4) {
      l5qtfz === void 0x0 && (l5qtfz = 'ascill'), _8yx4 === void 0x0 && (_8yx4 = '');var t5fzq;_8yx4 != '' ? t5fzq = akb2jd['getFileNativePath']($d8_s4) : t5fzq = $d8_s4, akb2jd['fs']['readFile']({ 'filePath': t5fzq, 'encoding': l5qtfz, 'success': function (t59ol) {
          hkbz != null && hkbz['runWith']([0x0, t59ol]);
        }, 'fail': function (lo5t9) {
          if (lo5t9 && _8yx4 != '') akb2jd['down'](_8yx4, l5qtfz, hkbz, _8yx4);else hkbz != null && hkbz['runWith']([0x1]);
        } });
    }, akb2jd['readNativeFile'] = function (t75o9, bhaj2k) {
      akb2jd['fs']['readFile']({ 'filePath': t75o9, 'encoding': '', 'success': function (o1veg7) {
          bhaj2k != null && bhaj2k['runWith']([0x0]);
        }, 'fail': function ($b) {
          bhaj2k != null && bhaj2k['runWith']([0x1]);
        } });
    }, akb2jd['down'] = function (nry03x, vo579f, k2jha, ahzkbj) {
      vo579f === void 0x0 && (vo579f = 'ascill'), ahzkbj === void 0x0 && (ahzkbj = '');var d2k$ab = akb2jd['getFileNativePath'](ahzkbj),
          of7v91 = akb2jd['wxdown']({ 'url': nry03x, 'filePath': d2k$ab, 'success': function (yrxn3) {
          if (yrxn3['statusCode'] === 0xc8) akb2jd['readFile'](yrxn3['filePath'], vo579f, k2jha, ahzkbj);
        }, 'fail': function (jklhq) {
          k2jha != null && k2jha['runWith']([0x1, jklhq]);
        } });of7v91['onProgressUpdate'](function (qzajhk) {
        k2jha != null && k2jha['runWith']([0x2, qzajhk['progress']]);
      });
    }, akb2jd['readFile'] = function (ry3x0n, abzhj, abjzkh, n_x4y0) {
      abzhj === void 0x0 && (abzhj = 'ascill'), n_x4y0 === void 0x0 && (n_x4y0 = ''), akb2jd['fs']['readFile']({ 'filePath': ry3x0n, 'encoding': abzhj, 'success': function (epu1g) {
          if (ry3x0n['indexOf']('http://') != -0x1 || ry3x0n['indexOf']('https://') != -0x1) akb2jd['onFileUpdate'](ry3x0n, n_x4y0);abjzkh != null && abjzkh['runWith']([0x0, epu1g]);
        }, 'fail': function (o5ft9) {
          if (o5ft9) abjzkh != null && abjzkh['runWith']([0x1, o5ft9]);
        } });
    }, akb2jd['downImg'] = function (zkl, hkbja, f7o95t) {
      f7o95t === void 0x0 && (f7o95t = '');var xyn4_ = akb2jd['wxdown']({ 'url': zkl, 'success': function (ajdb) {
          ajdb['statusCode'] === 0xc8 && akb2jd['copyFile'](ajdb['tempFilePath'], f7o95t, hkbja);
        }, 'fail': function (d8$bs2) {
          hkbja != null && hkbja['runWith']([0x1, d8$bs2]);
        } });
    }, akb2jd['copyFile'] = function (y48_, gue71v, cmy30) {
      var x_03 = y48_['split']('/'),
          cyr0x = x_03[x_03['length'] - 0x1],
          r30y = gue71v['split']('?')[0x0],
          ltjqh = akb2jd['getFileInfo'](gue71v),
          tol5f9 = akb2jd['getFileNativePath'](cyr0x);akb2jd['fs']['copyFile']({ 'srcPath': y48_, 'destPath': tol5f9, 'success': function (_x03y) {
          if (!ltjqh) akb2jd['onSaveFile'](gue71v, cyr0x), cmy30 != null && cmy30['runWith']([0x0]);else {
            if (ltjqh['readyUrl'] != gue71v) akb2jd['remove'](cyr0x, gue71v, cmy30);
          }
        }, 'fail': function (b2$d8s) {
          cmy30 != null && cmy30['runWith']([0x1, b2$d8s]);
        } });
    }, akb2jd['getFileNativePath'] = function (r03cym) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + r03cym;
    }, akb2jd['remove'] = function ($ba2s, _0yx, _y3x0) {
      _0yx === void 0x0 && (_0yx = '');var tzlhq = akb2jd['getFileInfo'](_0yx),
          bd$28s = akb2jd['getFileNativePath'](tzlhq['md5']);gu71ve['loader']['clearRes'](tzlhq['readyUrl']), akb2jd['fs']['unlink']({ 'filePath': bd$28s, 'success': function (jhbka2) {
          if (_0yx != '') akb2jd['onSaveFile'](_0yx, $ba2s);_y3x0 != null && _y3x0['runWith']([0x0]);
        }, 'fail': function ($ad2b) {} });
    }, akb2jd['onSaveFile'] = function (jkab2, kzlq) {
      var eupg6 = jkab2['split']('?')[0x0];akb2jd['filesListObj'][eupg6] = { 'md5': kzlq, 'readyUrl': jkab2 }, akb2jd['fs']['writeFile']({ 'filePath': akb2jd['fileNativeDir'] + '/' + akb2jd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](akb2jd['filesListObj']), 'success': function (zhkab) {
          console['log']('写入测试测试成功：', zhkab);
        }, 'fail': function (tlh5zq) {
          console['log']('写入测试测试失败：', tlh5zq);
        } });
    }, akb2jd['existDir'] = function (g6evu, nyrx30) {
      akb2jd['fs']['mkdir']({ 'dirPath': g6evu, 'success': function (zhlqkj) {
          nyrx30 != null && nyrx30['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qjhaz) {
          if (qjhaz['errMsg']['indexOf']('file already exists') != -0x1) akb2jd['readSync'](akb2jd['fileListName'], 'utf8', nyrx30);else nyrx30 != null && nyrx30['runWith']([0x1, qjhaz]);
        } });
    }, akb2jd['readSync'] = function (e71ov9, evgu6, wr3ci, goev) {
      evgu6 === void 0x0 && (evgu6 = 'ascill'), goev === void 0x0 && (goev = '');var xn30y_ = akb2jd['getFileNativePath'](e71ov9),
          kzhbj;try {
        kzhbj = akb2jd['fs']['readFileSync'](xn30y_), wr3ci != null && wr3ci['runWith']([0x0, { 'data': kzhbj }]);
      } catch (s8n_4) {
        wr3ci != null && wr3ci['runWith']([0x1]);
      }
    }, akb2jd['readCache'] = function () {}, akb2jd['writeCache'] = function (tljh) {
      var ovf759 = readyUrl['split']('?')[0x0];akb2jd['filesListObj'][ovf759] = { 'md5': md5Name, 'readyUrl': readyUrl }, akb2jd['fs']['writeFile']({ 'filePath': akb2jd['fileNativeDir'] + '/' + akb2jd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](akb2jd['filesListObj']), 'success': function (kqha) {}, 'fail': function (ds_4) {} });
    }, akb2jd['setNativeFileDir'] = function ($sd42) {
      akb2jd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $sd42;
    }, akb2jd['filesListObj'] = {}, akb2jd['fileNativeDir'] = null, akb2jd['fileListName'] = 'layaairfiles.txt', akb2jd['ziyuFileData'] = {}, dak$b(akb2jd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), akb2jd;
  }(ltfo9),
      zqjthl = function (ev1o9) {
    function ue6pg1() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ue6pg1['__super']['call'](this), this['_sound'] = ue6pg1['_createSound']();
    }s$bd(ue6pg1, 'laya.wx.mini.MiniSound', ev1o9);var g61uep = ue6pg1['prototype'];return g61uep['load'] = function (c3wir) {
      var f9o5tl = this;c3wir = lthz['formatURL'](c3wir), this['url'] = c3wir;if (ue6pg1['_audioCache'][c3wir]) {
        this['event']('complete');return;
      }function e1vog7() {
        if (ue6pg1['_null'] != undefined) f9o5tl['_sound']['onCanplay'](ue6pg1['_null']), f9o5tl['_sound']['onError'](ue6pg1['_null']);else try {
          f9o5tl['_sound']['onCanplay'](null), f9o5tl['_sound']['onError'](null), ue6pg1['_null'] = null;
        } catch (fqlz5t) {
          console['warn']('[wxmini] _clearSound:' + fqlz5t), f9o5tl['_sound']['onCanplay'](x30ry), f9o5tl['_sound']['onError'](x30ry), ue6pg1['_null'] = x30ry;
        }
      }function bzaj() {
        e1vog7(), i3mrc0['loaded'] = !![], i3mrc0['event']('complete'), ue6pg1['_audioCache'][i3mrc0['url']] = i3mrc0;
      }function azq(x3_yn0) {
        console['error']('errCode=' + x3_yn0['errCode'] + '  errMsg=' + x3_yn0['errMsg']), e1vog7(), i3mrc0['event']('error');
      }function x30ry() {}this['_sound']['onCanplay'](bzaj), this['_sound']['onError'](azq), this['_sound']['src'] = c3wir;var i3mrc0 = this;
    }, g61uep['play'] = function (voe1, vg1u7) {
      voe1 === void 0x0 && (voe1 = 0x0), vg1u7 === void 0x0 && (vg1u7 = 0x0);var vgeo;if (this['url'] == jkbda['_tMusic']) {
        if (!ue6pg1['_musicAudio']) ue6pg1['_musicAudio'] = ue6pg1['_createSound']();vgeo = ue6pg1['_musicAudio'];
      } else vgeo = ue6pg1['_createSound']();vgeo['src'] = this['url'];var ajb = new _x0ny3(vgeo);return ajb['url'] = this['url'], ajb['loops'] = vg1u7, ajb['startTime'] = voe1, ajb['play'](), jkbda['addChannel'](ajb), ajb;
    }, g61uep['dispose'] = function () {
      var jqlkzh = ue6pg1['_audioCache'][this['url']];jqlkzh && (jqlkzh['src'] = '', delete ue6pg1['_audioCache'][this['url']]);
    }, hlqjzt(0x0, g61uep, 'duration', function () {
      return this['_sound']['duration'];
    }), ue6pg1['_createSound'] = function () {
      return ue6pg1['_id']++, bhzkj['window']['wx']['createInnerAudioContext']();
    }, ue6pg1['_musicAudio'] = null, ue6pg1['_id'] = 0x0, ue6pg1['_audioCache'] = {}, ue6pg1['_null'] = undefined, ue6pg1;
  }(ltfo9),
      _x0ny3 = function (zltqf) {
    function _4$n(_4n$8) {
      this['_audio'] = null, this['_onEnd'] = null, _4$n['__super']['call'](this), this['_audio'] = _4n$8, this['_onEnd'] = e61gu['bind'](this['__onEnd'], this), _4n$8['onEnded'](this['_onEnd']);
    }s$bd(_4$n, 'laya.wx.mini.MiniSoundChannel', zltqf);var k2$bd = _4$n['prototype'];return k2$bd['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gu71ve['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k2$bd['__onNull'] = function () {}, k2$bd['play'] = function () {
      this['isStopped'] = ![], jkbda['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k2$bd['stop'] = function () {
      this['isStopped'] = !![], jkbda['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_4$n['_null'] != undefined) this['_audio']['onEnded'](_4$n['_null']);else try {
        this['_audio']['onEnded'](null), _4$n['_null'] = null;
      } catch (gue6p) {
        console['warn']('[wxmini] stop:' + gue6p), this['_audio']['onEnded'](e61gu['bind'](this['__onNull'], this)), _4$n['_null'] = e61gu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k2$bd['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k2$bd['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jkbda['addChannel'](this), this['_audio']['play']();
    }, hlqjzt(0x0, k2$bd, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), hlqjzt(0x0, k2$bd, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), hlqjzt(0x0, k2$bd, 'volume', function () {
      return 0x1;
    }, function (cy0x) {}), _4$n['_null'] = undefined, _4$n;
  }(y3xn0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var akjzbh in Laya) {
    var qlt9 = Laya[akjzbh];qlt9 && qlt9['__isclass'] && (exports[akjzbh] = qlt9);
  }
});