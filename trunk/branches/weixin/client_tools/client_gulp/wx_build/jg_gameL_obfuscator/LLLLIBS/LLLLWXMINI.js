var W = wx.$l;
(function (window, document, wmi3c) {
  var r3c0x = wmi3c['un'],
      gev7u1 = wmi3c['uns'],
      veo197 = wmi3c['static'],
      c0yrm3 = wmi3c['class'],
      ot957 = wmi3c['getset'],
      lo5f = wmi3c['__newvec'],
      e6gvu = laya['utils']['Browser'],
      e79v = laya['events']['Event'],
      xnyr = laya['events']['EventDispatcher'],
      yx4_n8 = laya['resource']['HTMLImage'],
      hjqkzl = laya['utils']['Handler'],
      jqhltz = laya['display']['Input'],
      _s4n$8 = laya['net']['Loader'],
      ja2kdb = laya['maths']['Matrix'],
      e7uv = laya['renders']['Render'],
      kjhql = laya['utils']['RunDriver'],
      yx3rc = laya['media']['Sound'],
      thqjlz = laya['media']['SoundChannel'],
      xc03ry = laya['media']['SoundManager'],
      r3y0xn = laya['display']['Stage'],
      zkjl = laya['net']['URL'],
      sab2d = laya['utils']['Utils'],
      ve6ug = function () {
    function ljzqht() {}return c0yrm3(ljzqht, 'laya.wx.mini.MiniAdpter'), ljzqht['getJson'] = function (s8n4) {
      return JSON['parse'](s8n4);
    }, ljzqht['init'] = function (fo197, xny_03) {
      fo197 === void 0x0 && (fo197 = ![]), xny_03 === void 0x0 && (xny_03 = ![]);if (ljzqht['_inited']) return;ljzqht['window'] = window;if (ljzqht['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ljzqht['_inited'] = !![], ljzqht['isZiYu'] = xny_03, ljzqht['isPosMsgYu'] = fo197, ljzqht['EnvConfig'] = {}, !ljzqht['isZiYu'] && (kahqj['setNativeFileDir']('/layaairGame'), kahqj['existDir'](kahqj['fileNativeDir'], hjqkzl['create'](ljzqht, ljzqht['onMkdirCallBack']))), ljzqht['window']['focus'] = function () {}, wmi3c['getUrlPath'] = function () {}, ljzqht['window']['logtime'] = function (n3rxy) {}, ljzqht['window']['alertTimeLog'] = function (x0c3ry) {}, ljzqht['window']['resetShareInfo'] = function () {}, ljzqht['window']['CanvasRenderingContext2D'] = function () {}, ljzqht['window']['CanvasRenderingContext2D']['prototype'] = ljzqht['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ljzqht['window']['document']['body']['appendChild'] = function () {}, ljzqht['EnvConfig']['pixelRatioInt'] = 0x0, kjhql['getPixelRatio'] = ljzqht['pixelRatio'], ljzqht['_preCreateElement'] = e6gvu['createElement'], e6gvu['createElement'] = ljzqht['createElement'], kjhql['createShaderCondition'] = ljzqht['createShaderCondition'], sab2d['parseXMLFromString'] = ljzqht['parseXMLFromString'], jqhltz['_createInputElement'] = sx48_['_createInputElement'], ljzqht['EnvConfig']['load'] = _s4n$8['prototype']['load'], _s4n$8['prototype']['load'] = qkljzh['prototype']['load'], ljzqht['isZiYu'] && fo197 && wx['onMessage'](function (t59fql) {
        t59fql['isLoad'] && (kahqj['ziyuFileData'][t59fql['url']] = t59fql['data']);
      });
    }, ljzqht['onMkdirCallBack'] = function (tflo5, kjah) {
      if (!tflo5) kahqj['filesListObj'] = JSON['parse'](kjah['data']);
    }, ljzqht['pixelRatio'] = function () {
      if (!ljzqht['EnvConfig']['pixelRatioInt']) try {
        var b82$sd = wx['getSystemInfoSync']();return ljzqht['EnvConfig']['pixelRatioInt'] = b82$sd['pixelRatio'], b82$sd = b82$sd, b82$sd['pixelRatio'];
      } catch (zhakjq) {}return ljzqht['EnvConfig']['pixelRatioInt'];
    }, ljzqht['createElement'] = function (jqhlzk) {
      if (jqhlzk == 'canvas') {
        var fl5t;return ljzqht['idx'] == 0x1 ? ljzqht['isZiYu'] ? (fl5t = sharedCanvas, fl5t['style'] = {}) : fl5t = window['canvas'] : fl5t = window['wx']['createCanvas'](), ljzqht['idx']++, fl5t;
      } else {
        if (jqhlzk == 'textarea' || jqhlzk == 'input') return ljzqht['onCreateInput'](jqhlzk);else {
          if (jqhlzk == 'div') {
            var qlft9 = ljzqht['_preCreateElement'](jqhlzk);return qlft9['contains'] = function (ynx4_0) {
              return null;
            }, qlft9['removeChild'] = function (zlq5ht) {}, qlft9;
          } else return ljzqht['_preCreateElement'](jqhlzk);
        }
      }
    }, ljzqht['onCreateInput'] = function (jaqkzh) {
      var n_4yx0 = ljzqht['_preCreateElement'](jaqkzh);return n_4yx0['focus'] = sx48_['wxinputFocus'], n_4yx0['blur'] = sx48_['wxinputblur'], n_4yx0['style'] = {}, n_4yx0['value'] = 0x0, n_4yx0['parentElement'] = {}, n_4yx0['placeholder'] = {}, n_4yx0['type'] = {}, n_4yx0['setColor'] = function (sx4n_8) {}, n_4yx0['setType'] = function (o759tf) {}, n_4yx0['setFontFace'] = function (g1voe) {}, n_4yx0['addEventListener'] = function (d482$) {}, n_4yx0['contains'] = function (d2$bas) {
        return null;
      }, n_4yx0['removeChild'] = function (d8b2) {}, n_4yx0;
    }, ljzqht['createShaderCondition'] = function (lz5tqh) {
      var yx4n8 = this,
          kajhzq = function () {
        var lzt5hq = lz5tqh;return yx4n8[lz5tqh['replace']('this.', '')];
      };return kajhzq;
    }, ljzqht['EnvConfig'] = null, ljzqht['window'] = null, ljzqht['_preCreateElement'] = null, ljzqht['_inited'] = ![], ljzqht['wxRequest'] = null, ljzqht['systemInfo'] = null, ljzqht['version'] = '0.0.1', ljzqht['isZiYu'] = ![], ljzqht['isPosMsgYu'] = ![], ljzqht['parseXMLFromString'] = function (kjdb2) {
      var jlh, ab2$;kjdb2 = kjdb2['replace'](/>\s+</g, '><');try {
        jlh = new window['Parser']['DOMParser']()['parseFromString'](kjdb2, 'text/xml');
      } catch (qzth) {
        throw '需要引入xml解析库文件';
      }return jlh;
    }, ljzqht['idx'] = 0x1, ljzqht;
  }(),
      akjd2 = function () {
    function wic3r() {}c0yrm3(wic3r, 'laya.wx.mini.MiniImage');var hz5qlt = wic3r['prototype'];return hz5qlt['_loadImage'] = function (n3_x) {
      var $bad2k = this,
          vgeu61 = ![];n3_x['indexOf']('layaNativeDir/') == -0x1 && (vgeu61 = !![], n3_x = zkjl['formatURL'](n3_x));if (!kahqj['getFileInfo'](n3_x)) {
        if (n3_x['indexOf']('http://') != -0x1 || n3_x['indexOf']('https://') != -0x1) kahqj['downImg'](n3_x, new hjqkzl(wic3r, wic3r['onDownImgCallBack'], [n3_x, $bad2k]), n3_x);else wic3r['onCreateImage'](n3_x, $bad2k, !![]);
      } else wic3r['onCreateImage'](n3_x, $bad2k, !vgeu61);
    }, wic3r['onDownImgCallBack'] = function ($8d_, b2hakj, xr30ny) {
      if (!xr30ny) wic3r['onCreateImage']($8d_, b2hakj);else b2hakj['onError'](null);
    }, wic3r['onCreateImage'] = function (g6eu1p, kqhzlj, kjzaqh) {
      kjzaqh === void 0x0 && (kjzaqh = ![]);var cwir;if (!kjzaqh) {
        var y03c = kahqj['getFileInfo'](g6eu1p),
            o7e19 = y03c['md5'];cwir = kahqj['getFileNativePath'](o7e19);
      } else cwir = g6eu1p;if (kqhzlj['imgCache'] == null) kqhzlj['imgCache'] = {};var qz5;function yx3() {
        qz5['onload'] = null, qz5['onerror'] = null, delete kqhzlj['imgCache'][g6eu1p];
      };var qf5t9l = function () {
        yx3(), kqhzlj['onLoaded'](qz5);
      },
          zabjh = function () {
        yx3(), kqhzlj['event']('error', 'Load image failed');
      };kqhzlj['_type'] == 'nativeimage' ? (qz5 = new e6gvu['window']['Image'](), qz5['crossOrigin'] = '', qz5['onload'] = qf5t9l, qz5['onerror'] = zabjh, qz5['src'] = cwir, kqhzlj['imgCache'][g6eu1p] = qz5) : new yx4_n8['create'](cwir, { 'onload': qf5t9l, 'onerror': zabjh, 'onCreate': function (z5fqlt) {
          qz5 = z5fqlt, kqhzlj['imgCache'][g6eu1p] = z5fqlt;
        } });
    }, wic3r;
  }(),
      sx48_ = function () {
    function $b2ka() {}return c0yrm3($b2ka, 'laya.wx.mini.MiniInput'), $b2ka['_createInputElement'] = function () {
      jqhltz['_initInput'](jqhltz['area'] = e6gvu['createElement']('textarea')), jqhltz['_initInput'](jqhltz['input'] = e6gvu['createElement']('input')), jqhltz['inputContainer'] = e6gvu['createElement']('div'), jqhltz['inputContainer']['style']['position'] = 'absolute', jqhltz['inputContainer']['style']['zIndex'] = 0x186a0, e6gvu['container']['appendChild'](jqhltz['inputContainer']), jqhltz['inputContainer']['setPos'] = function (fo975v, db$82) {
        jqhltz['inputContainer']['style']['left'] = fo975v + 'px', jqhltz['inputContainer']['style']['top'] = db$82 + 'px';
      }, wmi3c['stage']['on']('resize', null, $b2ka['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ztqf5l) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xc03ry['_soundClass'] = a$2sbd, xc03ry['_musicClass'] = a$2sbd;
    }, $b2ka['_onStageResize'] = function () {
      var t57o9 = wmi3c['stage']['_canvasTransform']['identity']();t57o9['scale'](e6gvu['width'] / e7uv['canvas']['width'] / kjhql['getPixelRatio'](), e6gvu['height'] / e7uv['canvas']['height'] / kjhql['getPixelRatio']());
    }, $b2ka['wxinputFocus'] = function (f9o7t) {
      var vo79 = jqhltz['inputElement']['target'];if (vo79 && !vo79['editable']) return;ve6ug['window']['wx']['offKeyboardConfirm'](), ve6ug['window']['wx']['offKeyboardInput'](), ve6ug['window']['wx']['showKeyboard']({ 'defaultValue': vo79['text'], 'maxLength': vo79['maxChars'], 'multiple': vo79['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (adb$2) {}, 'fail': function (jab) {} }), ve6ug['window']['wx']['onKeyboardConfirm'](function (_nyx4) {
        var akqzj = _nyx4 ? _nyx4['value'] : '';vo79['text'] = akqzj, vo79['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ve6ug['window']['wx']['onKeyboardInput'](function ($4d82) {
        var ak2jdb = $4d82 ? $4d82['value'] : '';if (!vo79['multiline']) {
          if (ak2jdb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vo79['text'] = ak2jdb, vo79['event']('input');
      });
    }, $b2ka['inputEnter'] = function () {
      jqhltz['inputElement']['target']['focus'] = ![];
    }, $b2ka['wxinputblur'] = function () {
      $b2ka['hideKeyboard']();
    }, $b2ka['hideKeyboard'] = function () {
      ve6ug['window']['wx']['offKeyboardConfirm'](), ve6ug['window']['wx']['offKeyboardInput'](), ve6ug['window']['wx']['hideKeyboard']({ 'success': function (azqk) {
          console['log']('隐藏键盘');
        }, 'fail': function (epg) {
          console['log']('隐藏键盘出错:' + (epg ? epg['errMsg'] : ''));
        } });
    }, $b2ka;
  }(),
      qkljzh = function () {
    function bhja() {}c0yrm3(bhja, 'laya.wx.mini.MiniLoader');var m3yrc0 = bhja['prototype'];return m3yrc0['load'] = function (s24, xcr3y0, r0nx, jtzlh, ns48_$) {
      r0nx === void 0x0 && (r0nx = !![]), ns48_$ === void 0x0 && (ns48_$ = ![]);var _xs48n = this;_xs48n['_url'] = s24;if (s24['indexOf']('data:image') === 0x0) _xs48n['_type'] = xcr3y0 = 'image';else _xs48n['_type'] = xcr3y0 || (xcr3y0 = _xs48n['getTypeFromUrl'](s24));_xs48n['_cache'] = r0nx, _xs48n['_data'] = null;var eo1v79 = 'ascii';if (s24['indexOf']('.fnt') != -0x1) eo1v79 = 'utf8';else xcr3y0 == 'arraybuffer' && (eo1v79 = '');;var b$ad = sab2d['getFileExtension'](s24);if (bhja['_fileTypeArr']['indexOf'](b$ad) != -0x1) ve6ug['EnvConfig']['load']['call'](this, s24, xcr3y0, r0nx, jtzlh, ns48_$);else {
        if (!kahqj['getFileInfo'](s24)) {
          if (s24['indexOf']('layaNativeDir/') != -0x1) {
            if (ve6ug['isZiYu']) {
              var qfzl5 = kahqj['ziyuFileData'][s24];_xs48n['onLoaded'](qfzl5);return;
            } else {
              cosnole['log']('read read'), kahqj['read'](s24, eo1v79, new hjqkzl(bhja, bhja['onReadNativeCallBack'], [eo1v79, s24, xcr3y0, r0nx, jtzlh, ns48_$, _xs48n]));return;
            }
          }if (zkjl['rootPath'] == '') var pe16gu = s24;else pe16gu = s24['split'](zkjl['rootPath'])[0x0];s24['indexOf']('http://') != -0x1 || s24['indexOf']('https://') != -0x1 ? ve6ug['EnvConfig']['load']['call'](_xs48n, s24, xcr3y0, r0nx, jtzlh, ns48_$) : kahqj['readFile'](pe16gu, eo1v79, new hjqkzl(bhja, bhja['onReadNativeCallBack'], [eo1v79, s24, xcr3y0, r0nx, jtzlh, ns48_$, _xs48n]), s24);
        } else ve6ug['EnvConfig']['load']['call'](this, s24, xcr3y0, r0nx, jtzlh, ns48_$);
      }
    }, m3yrc0['resMgrLoad'] = function (hb2k, nry3x, n04_yx, d2jab, r0xny, $8n_s, bk2jah) {
      n04_yx === void 0x0 && (n04_yx = 0x0), d2jab === void 0x0 && (d2jab = ![]), r0xny === void 0x0 && (r0xny = ![]), $8n_s === void 0x0 && ($8n_s = 0x0), bk2jah === void 0x0 && (bk2jah = 0x3), hb2k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hb2k), ve6ug['EnvConfig']['resMgrLoad'](hb2k, (ns4, ge61uv, xn3y_0) => {
        bhja['prototype']['resMgrLoadCallBack'](ns4, ge61uv, xn3y_0, nry3x);
      }, n04_yx, d2jab, r0xny, $8n_s, bk2jah);
    }, m3yrc0['resMgrLoadCallBack'] = function (o1f79, r3c0xy, s$2a, ztq5l) {
      console['log']('buff:::', o1f79, s$2a, kahqj['fileNativeDir'] + '///' + kahqj['fileListName']), ztq5l(o1f79, r3c0xy, s$2a);
    }, m3yrc0['clearRes'] = function (n0y3_x, abd$2k) {
      abd$2k === void 0x0 && (abd$2k = ![]);var u6pe = this;u6pe['clearRes'](n0y3_x, abd$2k);var xyn03r = kahqj['getFileInfo'](n0y3_x);if (xyn03r && (n0y3_x['indexOf']('http://') != -0x1 || n0y3_x['indexOf']('https://') != -0x1)) {
        var zqlft = xyn03r['md5'],
            f9tql = kahqj['getFileNativePath'](zqlft);kahqj['remove'](f9tql);
      }
    }, bhja['onReadNativeCallBack'] = function (hq5tlz, d28sb, abdjk, d$abs2, lqzh5, khajq, n$4s8_, s84n_, egv7u1) {
      d$abs2 === void 0x0 && (d$abs2 = !![]), khajq === void 0x0 && (khajq = ![]), s84n_ === void 0x0 && (s84n_ = 0x0);if (!s84n_) {
        var xny40_;if (abdjk == 'json' || abdjk == 'atlas') xny40_ = ve6ug['getJson'](egv7u1['data']);else abdjk == 'xml' ? xny40_ = sab2d['parseXMLFromString'](egv7u1['data']) : xny40_ = egv7u1['data'];n$4s8_['onLoaded'](xny40_), !ve6ug['isZiYu'] && ve6ug['isPosMsgYu'] && abdjk != 'arraybuffer' && wx['postMessage']({ 'url': d28sb, 'data': xny40_, 'isLoad': !![] });
      } else s84n_ == 0x1 && ve6ug['EnvConfig']['load']['call'](n$4s8_, d28sb, abdjk, d$abs2, lqzh5, khajq);
    }, veo197(bhja, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bhja;
  }(),
      kahqj = function ($bsda) {
    function $42d8s() {
      $42d8s['__super']['call'](this);;
    }return c0yrm3($42d8s, 'laya.wx.mini.MiniFileMgr', $bsda), $42d8s['isLoadFile'] = function (ug1e7v) {
      return $42d8s['_fileTypeArr']['indexOf'](ug1e7v) != -0x1 ? !![] : ![];
    }, $42d8s['getFileInfo'] = function (qzkja) {
      var l9t5f = qzkja['split']('?')[0x0],
          j2badk = $42d8s['filesListObj'][l9t5f];if (j2badk == null) return null;else return j2badk;return null;
    }, $42d8s['onFileUpdate'] = function ($d824, v71fo) {
      var dbk2$ = $d824['split']('/'),
          ahbkz = dbk2$[dbk2$['length'] - 0x1],
          lh5zt = $42d8s['getFileInfo'](v71fo);if (lh5zt == null) $42d8s['onSaveFile'](v71fo, ahbkz);else {
        if (lh5zt['readyUrl'] != v71fo) $42d8s['remove'](ahbkz, v71fo);
      }
    }, $42d8s['exits'] = function (s4_$d8, f597) {
      var n8_4x = $42d8s['getFileNativePath'](s4_$d8);$42d8s['fs']['getFileInfo']({ 'filePath': n8_4x, 'success': function (x_n4y0) {
          f597 != null && f597['runWith']([0x0, x_n4y0]);
        }, 'fail': function (lqtjh) {
          f597 != null && f597['runWith']([0x1, lqtjh]);
        } });
    }, $42d8s['read'] = function (i3cmr0, x3c0y, oe197v, c03ir) {
      x3c0y === void 0x0 && (x3c0y = 'ascill'), c03ir === void 0x0 && (c03ir = '');var qlf5t;c03ir != '' ? qlf5t = $42d8s['getFileNativePath'](i3cmr0) : qlf5t = i3cmr0, $42d8s['fs']['readFile']({ 'filePath': qlf5t, 'encoding': x3c0y, 'success': function (jabd2) {
          oe197v != null && oe197v['runWith']([0x0, jabd2]);
        }, 'fail': function (sx_48n) {
          if (sx_48n && c03ir != '') $42d8s['down'](c03ir, x3c0y, oe197v, c03ir);else oe197v != null && oe197v['runWith']([0x1]);
        } });
    }, $42d8s['readNativeFile'] = function (ds8, v71geo) {
      $42d8s['fs']['readFile']({ 'filePath': ds8, 'encoding': '', 'success': function (db$ka) {
          v71geo != null && v71geo['runWith']([0x0]);
        }, 'fail': function (kb2ad) {
          v71geo != null && v71geo['runWith']([0x1]);
        } });
    }, $42d8s['down'] = function (_s84x, as$2bd, kq, cx3yr0) {
      as$2bd === void 0x0 && (as$2bd = 'ascill'), cx3yr0 === void 0x0 && (cx3yr0 = '');var jzlqht = $42d8s['getFileNativePath'](cx3yr0),
          to9lf5 = $42d8s['wxdown']({ 'url': _s84x, 'filePath': jzlqht, 'success': function (oe1vg7) {
          if (oe1vg7['statusCode'] === 0xc8) $42d8s['readFile'](oe1vg7['filePath'], as$2bd, kq, cx3yr0);
        }, 'fail': function (kljzhq) {
          kq != null && kq['runWith']([0x1, kljzhq]);
        } });to9lf5['onProgressUpdate'](function (sdb$28) {
        kq != null && kq['runWith']([0x2, sdb$28['progress']]);
      });
    }, $42d8s['readFile'] = function (haz, qzf5lt, adb$k, gv1) {
      qzf5lt === void 0x0 && (qzf5lt = 'ascill'), gv1 === void 0x0 && (gv1 = ''), $42d8s['fs']['readFile']({ 'filePath': haz, 'encoding': qzf5lt, 'success': function (rcmy3) {
          if (haz['indexOf']('http://') != -0x1 || haz['indexOf']('https://') != -0x1) $42d8s['onFileUpdate'](haz, gv1);adb$k != null && adb$k['runWith']([0x0, rcmy3]);
        }, 'fail': function (u1pe6) {
          if (u1pe6) adb$k != null && adb$k['runWith']([0x1, u1pe6]);
        } });
    }, $42d8s['downImg'] = function (e16pgu, thj, e7u1gv) {
      e7u1gv === void 0x0 && (e7u1gv = '');var ym3c = $42d8s['wxdown']({ 'url': e16pgu, 'success': function (khj2ab) {
          khj2ab['statusCode'] === 0xc8 && $42d8s['copyFile'](khj2ab['tempFilePath'], e7u1gv, thj);
        }, 'fail': function (d4$s_) {
          thj != null && thj['runWith']([0x1, d4$s_]);
        } });
    }, $42d8s['copyFile'] = function (vg7eo1, daj2b, bahkz) {
      var $kd2ba = vg7eo1['split']('/'),
          c3mr = $kd2ba[$kd2ba['length'] - 0x1],
          bazhjk = daj2b['split']('?')[0x0],
          jlhkqz = $42d8s['getFileInfo'](daj2b),
          kh2ba = $42d8s['getFileNativePath'](c3mr);$42d8s['fs']['copyFile']({ 'srcPath': vg7eo1, 'destPath': kh2ba, 'success': function (ue16) {
          if (!jlhkqz) $42d8s['onSaveFile'](daj2b, c3mr), bahkz != null && bahkz['runWith']([0x0]);else {
            if (jlhkqz['readyUrl'] != daj2b) $42d8s['remove'](c3mr, daj2b, bahkz);
          }
        }, 'fail': function (rcmiw3) {
          bahkz != null && bahkz['runWith']([0x1, rcmiw3]);
        } });
    }, $42d8s['getFileNativePath'] = function (zfqlt) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zfqlt;
    }, $42d8s['remove'] = function (l9tfq, ymc, ge16pu) {
      ymc === void 0x0 && (ymc = '');var x_y30 = $42d8s['getFileInfo'](ymc),
          s4 = $42d8s['getFileNativePath'](x_y30['md5']);wmi3c['loader']['clearRes'](x_y30['readyUrl']), $42d8s['fs']['unlink']({ 'filePath': s4, 'success': function (yc3r0m) {
          if (ymc != '') $42d8s['onSaveFile'](ymc, l9tfq);ge16pu != null && ge16pu['runWith']([0x0]);
        }, 'fail': function (qkazh) {} });
    }, $42d8s['onSaveFile'] = function (xr0ny, e1og7v) {
      var ltzf5 = xr0ny['split']('?')[0x0];$42d8s['filesListObj'][ltzf5] = { 'md5': e1og7v, 'readyUrl': xr0ny }, $42d8s['fs']['writeFile']({ 'filePath': $42d8s['fileNativeDir'] + '/' + $42d8s['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($42d8s['filesListObj']), 'success': function (hjkqlz) {
          console['log']('写入测试测试成功：', hjkqlz);
        }, 'fail': function (q5hltz) {
          console['log']('写入测试测试失败：', q5hltz);
        } });
    }, $42d8s['existDir'] = function (s8_$4d, _y3xn) {
      $42d8s['fs']['mkdir']({ 'dirPath': s8_$4d, 'success': function (fl5tz) {
          _y3xn != null && _y3xn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dk2a$b) {
          if (dk2a$b['errMsg']['indexOf']('file already exists') != -0x1) $42d8s['readSync']($42d8s['fileListName'], 'utf8', _y3xn);else _y3xn != null && _y3xn['runWith']([0x1, dk2a$b]);
        } });
    }, $42d8s['readSync'] = function (_s4n, x3_y0n, o75ft9, _nsx8) {
      x3_y0n === void 0x0 && (x3_y0n = 'ascill'), _nsx8 === void 0x0 && (_nsx8 = '');var o5f97t = $42d8s['getFileNativePath'](_s4n),
          xyn0r;try {
        xyn0r = $42d8s['fs']['readFileSync'](o5f97t), o75ft9 != null && o75ft9['runWith']([0x0, { 'data': xyn0r }]);
      } catch (u7gve1) {
        o75ft9 != null && o75ft9['runWith']([0x1]);
      }
    }, $42d8s['readCache'] = function () {}, $42d8s['writeCache'] = function (lhq5) {
      var d2kab$ = readyUrl['split']('?')[0x0];$42d8s['filesListObj'][d2kab$] = { 'md5': md5Name, 'readyUrl': readyUrl }, $42d8s['fs']['writeFile']({ 'filePath': $42d8s['fileNativeDir'] + '/' + $42d8s['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($42d8s['filesListObj']), 'success': function (vug16) {}, 'fail': function (tlqhjz) {} });
    }, $42d8s['setNativeFileDir'] = function (gev) {
      $42d8s['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gev;
    }, $42d8s['filesListObj'] = {}, $42d8s['fileNativeDir'] = null, $42d8s['fileListName'] = 'layaairfiles.txt', $42d8s['ziyuFileData'] = {}, veo197($42d8s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $42d8s;
  }(xnyr),
      a$2sbd = function (e7vu1) {
    function _n4x0y() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _n4x0y['__super']['call'](this), this['_sound'] = _n4x0y['_createSound']();
    }c0yrm3(_n4x0y, 'laya.wx.mini.MiniSound', e7vu1);var _ds$48 = _n4x0y['prototype'];return _ds$48['load'] = function (oeg71) {
      var x04_n = this;oeg71 = zkjl['formatURL'](oeg71), this['url'] = oeg71;if (_n4x0y['_audioCache'][oeg71]) {
        this['event']('complete');return;
      }function _n48yx() {
        if (_n4x0y['_null'] != undefined) x04_n['_sound']['onCanplay'](_n4x0y['_null']), x04_n['_sound']['onError'](_n4x0y['_null']);else try {
          x04_n['_sound']['onCanplay'](null), x04_n['_sound']['onError'](null), _n4x0y['_null'] = null;
        } catch (tlqhz5) {
          console['warn']('[wxmini] _clearSound:' + tlqhz5), x04_n['_sound']['onCanplay'](jkzabh), x04_n['_sound']['onError'](jkzabh), _n4x0y['_null'] = jkzabh;
        }
      }function s_x4n8() {
        _n48yx(), e61p['loaded'] = !![], e61p['event']('complete'), _n4x0y['_audioCache'][e61p['url']] = e61p;
      }function y3_n(lqtzf) {
        console['error']('errCode=' + lqtzf['errCode'] + '  errMsg=' + lqtzf['errMsg']), _n48yx(), e61p['event']('error');
      }function jkzabh() {}this['_sound']['onCanplay'](s_x4n8), this['_sound']['onError'](y3_n), this['_sound']['src'] = oeg71;var e61p = this;
    }, _ds$48['play'] = function (ug1ve, lhzk) {
      ug1ve === void 0x0 && (ug1ve = 0x0), lhzk === void 0x0 && (lhzk = 0x0);var ak2j;if (this['url'] == xc03ry['_tMusic']) {
        if (!_n4x0y['_musicAudio']) _n4x0y['_musicAudio'] = _n4x0y['_createSound']();ak2j = _n4x0y['_musicAudio'];
      } else ak2j = _n4x0y['_createSound']();ak2j['src'] = this['url'];var $bda2k = new hlkqj(ak2j);return $bda2k['url'] = this['url'], $bda2k['loops'] = lhzk, $bda2k['startTime'] = ug1ve, $bda2k['play'](), xc03ry['addChannel']($bda2k), $bda2k;
    }, _ds$48['dispose'] = function () {
      var c3mwir = _n4x0y['_audioCache'][this['url']];c3mwir && (c3mwir['src'] = '', delete _n4x0y['_audioCache'][this['url']]);
    }, ot957(0x0, _ds$48, 'duration', function () {
      return this['_sound']['duration'];
    }), _n4x0y['_createSound'] = function () {
      return _n4x0y['_id']++, ve6ug['window']['wx']['createInnerAudioContext']();
    }, _n4x0y['_musicAudio'] = null, _n4x0y['_id'] = 0x0, _n4x0y['_audioCache'] = {}, _n4x0y['_null'] = undefined, _n4x0y;
  }(xnyr),
      hlkqj = function (qzlth) {
    function $8sd24(kazjq) {
      this['_audio'] = null, this['_onEnd'] = null, $8sd24['__super']['call'](this), this['_audio'] = kazjq, this['_onEnd'] = sab2d['bind'](this['__onEnd'], this), kazjq['onEnded'](this['_onEnd']);
    }c0yrm3($8sd24, 'laya.wx.mini.MiniSoundChannel', qzlth);var $b82sd = $8sd24['prototype'];return $b82sd['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wmi3c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $b82sd['__onNull'] = function () {}, $b82sd['play'] = function () {
      this['isStopped'] = ![], xc03ry['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $b82sd['stop'] = function () {
      this['isStopped'] = !![], xc03ry['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($8sd24['_null'] != undefined) this['_audio']['onEnded']($8sd24['_null']);else try {
        this['_audio']['onEnded'](null), $8sd24['_null'] = null;
      } catch (t9of75) {
        console['warn']('[wxmini] stop:' + t9of75), this['_audio']['onEnded'](sab2d['bind'](this['__onNull'], this)), $8sd24['_null'] = sab2d['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $b82sd['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $b82sd['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xc03ry['addChannel'](this), this['_audio']['play']();
    }, ot957(0x0, $b82sd, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ot957(0x0, $b82sd, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ot957(0x0, $b82sd, 'volume', function () {
      return 0x1;
    }, function (c0rx3y) {}), $8sd24['_null'] = undefined, $8sd24;
  }(thqjlz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ka2jbh in Laya) {
    var q5f9lt = Laya[ka2jbh];q5f9lt && q5f9lt['__isclass'] && (exports[ka2jbh] = q5f9lt);
  }
});