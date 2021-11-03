var W = wx.$l;
(function (window, document, c0r3ym) {
  var hazkjb = c0r3ym['un'],
      xyn0_4 = c0r3ym['uns'],
      db28 = c0r3ym['static'],
      crmy30 = c0r3ym['class'],
      tzqljh = c0r3ym['getset'],
      nx84y_ = c0r3ym['__newvec'],
      qljtz = laya['utils']['Browser'],
      badk2j = laya['events']['Event'],
      ajbkhz = laya['events']['EventDispatcher'],
      jkhb2 = laya['resource']['HTMLImage'],
      u7g1e = laya['utils']['Handler'],
      fov597 = laya['display']['Input'],
      yxn3r0 = laya['net']['Loader'],
      tz5ql = laya['maths']['Matrix'],
      lqkzh = laya['renders']['Render'],
      r30cxy = laya['utils']['RunDriver'],
      lo5t = laya['media']['Sound'],
      eug61v = laya['media']['SoundChannel'],
      b2d$s8 = laya['media']['SoundManager'],
      b$sda = laya['display']['Stage'],
      n_0yx3 = laya['net']['URL'],
      nyr30 = laya['utils']['Utils'],
      jbkazh = function () {
    function ycr0() {}return crmy30(ycr0, 'laya.wx.mini.MiniAdpter'), ycr0['getJson'] = function (olf5t) {
      return JSON['parse'](olf5t);
    }, ycr0['init'] = function (ds$a, l5qf9) {
      ds$a === void 0x0 && (ds$a = ![]), l5qf9 === void 0x0 && (l5qf9 = ![]);if (ycr0['_inited']) return;ycr0['window'] = window;if (ycr0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ycr0['_inited'] = !![], ycr0['isZiYu'] = l5qf9, ycr0['isPosMsgYu'] = ds$a, ycr0['EnvConfig'] = {}, !ycr0['isZiYu'] && (mcy30['setNativeFileDir']('/layaairGame'), mcy30['existDir'](mcy30['fileNativeDir'], u7g1e['create'](ycr0, ycr0['onMkdirCallBack']))), ycr0['window']['focus'] = function () {}, c0r3ym['getUrlPath'] = function () {}, ycr0['window']['logtime'] = function (eguv7) {}, ycr0['window']['alertTimeLog'] = function (ir03m) {}, ycr0['window']['resetShareInfo'] = function () {}, ycr0['window']['CanvasRenderingContext2D'] = function () {}, ycr0['window']['CanvasRenderingContext2D']['prototype'] = ycr0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ycr0['window']['document']['body']['appendChild'] = function () {}, ycr0['EnvConfig']['pixelRatioInt'] = 0x0, r30cxy['getPixelRatio'] = ycr0['pixelRatio'], ycr0['_preCreateElement'] = qljtz['createElement'], qljtz['createElement'] = ycr0['createElement'], r30cxy['createShaderCondition'] = ycr0['createShaderCondition'], nyr30['parseXMLFromString'] = ycr0['parseXMLFromString'], fov597['_createInputElement'] = cxy3r0['_createInputElement'], ycr0['EnvConfig']['load'] = yxn3r0['prototype']['load'], yxn3r0['prototype']['load'] = ftl9q['prototype']['load'], ycr0['isZiYu'] && ds$a && wx['onMessage'](function (zjqhk) {
        zjqhk['isLoad'] && (mcy30['ziyuFileData'][zjqhk['url']] = zjqhk['data']);
      });
    }, ycr0['onMkdirCallBack'] = function (xn8, $_48sd) {
      if (!xn8) mcy30['filesListObj'] = JSON['parse']($_48sd['data']);
    }, ycr0['pixelRatio'] = function () {
      if (!ycr0['EnvConfig']['pixelRatioInt']) try {
        var cx3ry0 = wx['getSystemInfoSync']();return ycr0['EnvConfig']['pixelRatioInt'] = cx3ry0['pixelRatio'], cx3ry0 = cx3ry0, cx3ry0['pixelRatio'];
      } catch (cyxr) {}return ycr0['EnvConfig']['pixelRatioInt'];
    }, ycr0['createElement'] = function (mc3ir) {
      if (mc3ir == 'canvas') {
        var tzhj;return ycr0['idx'] == 0x1 ? ycr0['isZiYu'] ? (tzhj = sharedCanvas, tzhj['style'] = {}) : tzhj = window['canvas'] : tzhj = window['wx']['createCanvas'](), ycr0['idx']++, tzhj;
      } else {
        if (mc3ir == 'textarea' || mc3ir == 'input') return ycr0['onCreateInput'](mc3ir);else {
          if (mc3ir == 'div') {
            var _s84d = ycr0['_preCreateElement'](mc3ir);return _s84d['contains'] = function (hlqt5z) {
              return null;
            }, _s84d['removeChild'] = function ($28b) {}, _s84d;
          } else return ycr0['_preCreateElement'](mc3ir);
        }
      }
    }, ycr0['onCreateInput'] = function (h5) {
      var nr3x0 = ycr0['_preCreateElement'](h5);return nr3x0['focus'] = cxy3r0['wxinputFocus'], nr3x0['blur'] = cxy3r0['wxinputblur'], nr3x0['style'] = {}, nr3x0['value'] = 0x0, nr3x0['parentElement'] = {}, nr3x0['placeholder'] = {}, nr3x0['type'] = {}, nr3x0['setColor'] = function (u16ev) {}, nr3x0['setType'] = function (go17ve) {}, nr3x0['setFontFace'] = function (kzbhaj) {}, nr3x0['addEventListener'] = function (s$8bd2) {}, nr3x0['contains'] = function (t9olf5) {
        return null;
      }, nr3x0['removeChild'] = function (c3rym0) {}, nr3x0;
    }, ycr0['createShaderCondition'] = function (mwci3r) {
      var ry0cm3 = this,
          otf975 = function () {
        var f7o9 = mwci3r;return ry0cm3[mwci3r['replace']('this.', '')];
      };return otf975;
    }, ycr0['EnvConfig'] = null, ycr0['window'] = null, ycr0['_preCreateElement'] = null, ycr0['_inited'] = ![], ycr0['wxRequest'] = null, ycr0['systemInfo'] = null, ycr0['version'] = '0.0.1', ycr0['isZiYu'] = ![], ycr0['isPosMsgYu'] = ![], ycr0['parseXMLFromString'] = function (gve71u) {
      var bjza, d_4s;gve71u = gve71u['replace'](/>\s+</g, '><');try {
        bjza = new window['Parser']['DOMParser']()['parseFromString'](gve71u, 'text/xml');
      } catch (u7v1eg) {
        throw '需要引入xml解析库文件';
      }return bjza;
    }, ycr0['idx'] = 0x1, ycr0;
  }(),
      wrci = function () {
    function fot() {}crmy30(fot, 'laya.wx.mini.MiniImage');var ny_84x = fot['prototype'];return ny_84x['_loadImage'] = function (xy30n_) {
      var xy_0n4 = this,
          db2s$ = ![];xy30n_['indexOf']('layaNativeDir/') == -0x1 && (db2s$ = !![], xy30n_ = n_0yx3['formatURL'](xy30n_));if (!mcy30['getFileInfo'](xy30n_)) {
        if (xy30n_['indexOf']('http://') != -0x1 || xy30n_['indexOf']('https://') != -0x1) mcy30['downImg'](xy30n_, new u7g1e(fot, fot['onDownImgCallBack'], [xy30n_, xy_0n4]), xy30n_);else fot['onCreateImage'](xy30n_, xy_0n4, !![]);
      } else fot['onCreateImage'](xy30n_, xy_0n4, !db2s$);
    }, fot['onDownImgCallBack'] = function (eu1gv7, ql5ft9, vfo17) {
      if (!vfo17) fot['onCreateImage'](eu1gv7, ql5ft9);else ql5ft9['onError'](null);
    }, fot['onCreateImage'] = function (eov, qkhazj, bs82d) {
      bs82d === void 0x0 && (bs82d = ![]);var nxy40_;if (!bs82d) {
        var d$sb82 = mcy30['getFileInfo'](eov),
            hjqka = d$sb82['md5'];nxy40_ = mcy30['getFileNativePath'](hjqka);
      } else nxy40_ = eov;if (qkhazj['imgCache'] == null) qkhazj['imgCache'] = {};var hqzt;function ab$d2s() {
        hqzt['onload'] = null, hqzt['onerror'] = null, delete qkhazj['imgCache'][eov];
      };var gp61eu = function () {
        ab$d2s(), qkhazj['onLoaded'](hqzt);
      },
          _8$4sd = function () {
        ab$d2s(), qkhazj['event']('error', 'Load image failed');
      };qkhazj['_type'] == 'nativeimage' ? (hqzt = new qljtz['window']['Image'](), hqzt['crossOrigin'] = '', hqzt['onload'] = gp61eu, hqzt['onerror'] = _8$4sd, hqzt['src'] = nxy40_, qkhazj['imgCache'][eov] = hqzt) : new jkhb2['create'](nxy40_, { 'onload': gp61eu, 'onerror': _8$4sd, 'onCreate': function (_8yxn) {
          hqzt = _8yxn, qkhazj['imgCache'][eov] = _8yxn;
        } });
    }, fot;
  }(),
      cxy3r0 = function () {
    function zqlth5() {}return crmy30(zqlth5, 'laya.wx.mini.MiniInput'), zqlth5['_createInputElement'] = function () {
      fov597['_initInput'](fov597['area'] = qljtz['createElement']('textarea')), fov597['_initInput'](fov597['input'] = qljtz['createElement']('input')), fov597['inputContainer'] = qljtz['createElement']('div'), fov597['inputContainer']['style']['position'] = 'absolute', fov597['inputContainer']['style']['zIndex'] = 0x186a0, qljtz['container']['appendChild'](fov597['inputContainer']), fov597['inputContainer']['setPos'] = function (jkhba2, rcy3m) {
        fov597['inputContainer']['style']['left'] = jkhba2 + 'px', fov597['inputContainer']['style']['top'] = rcy3m + 'px';
      }, c0r3ym['stage']['on']('resize', null, zqlth5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ug1e6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b2d$s8['_soundClass'] = lf9t, b2d$s8['_musicClass'] = lf9t;
    }, zqlth5['_onStageResize'] = function () {
      var xny40 = c0r3ym['stage']['_canvasTransform']['identity']();xny40['scale'](qljtz['width'] / lqkzh['canvas']['width'] / r30cxy['getPixelRatio'](), qljtz['height'] / lqkzh['canvas']['height'] / r30cxy['getPixelRatio']());
    }, zqlth5['wxinputFocus'] = function (qlhzkj) {
      var cm03ir = fov597['inputElement']['target'];if (cm03ir && !cm03ir['editable']) return;jbkazh['window']['wx']['offKeyboardConfirm'](), jbkazh['window']['wx']['offKeyboardInput'](), jbkazh['window']['wx']['showKeyboard']({ 'defaultValue': cm03ir['text'], 'maxLength': cm03ir['maxChars'], 'multiple': cm03ir['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f9vo75) {}, 'fail': function (ov91e) {} }), jbkazh['window']['wx']['onKeyboardConfirm'](function (hj2ba) {
        var fq59tl = hj2ba ? hj2ba['value'] : '';cm03ir['text'] = fq59tl, cm03ir['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jbkazh['window']['wx']['onKeyboardInput'](function (ycm) {
        var zqljht = ycm ? ycm['value'] : '';if (!cm03ir['multiline']) {
          if (zqljht['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }cm03ir['text'] = zqljht, cm03ir['event']('input');
      });
    }, zqlth5['inputEnter'] = function () {
      fov597['inputElement']['target']['focus'] = ![];
    }, zqlth5['wxinputblur'] = function () {
      zqlth5['hideKeyboard']();
    }, zqlth5['hideKeyboard'] = function () {
      jbkazh['window']['wx']['offKeyboardConfirm'](), jbkazh['window']['wx']['offKeyboardInput'](), jbkazh['window']['wx']['hideKeyboard']({ 'success': function (aqhzk) {
          console['log']('隐藏键盘');
        }, 'fail': function (x3nry0) {
          console['log']('隐藏键盘出错:' + (x3nry0 ? x3nry0['errMsg'] : ''));
        } });
    }, zqlth5;
  }(),
      ftl9q = function () {
    function kjbzh() {}crmy30(kjbzh, 'laya.wx.mini.MiniLoader');var fo597 = kjbzh['prototype'];return fo597['load'] = function (aj2kdb, $_48, hljqk, lqkj, hbk2ja) {
      hljqk === void 0x0 && (hljqk = !![]), hbk2ja === void 0x0 && (hbk2ja = ![]);var geu1v = this;geu1v['_url'] = aj2kdb;if (aj2kdb['indexOf']('data:image') === 0x0) geu1v['_type'] = $_48 = 'image';else geu1v['_type'] = $_48 || ($_48 = geu1v['getTypeFromUrl'](aj2kdb));geu1v['_cache'] = hljqk, geu1v['_data'] = null;var cmwri3 = 'ascii';if (aj2kdb['indexOf']('.fnt') != -0x1) cmwri3 = 'utf8';else $_48 == 'arraybuffer' && (cmwri3 = '');;var lhjtzq = nyr30['getFileExtension'](aj2kdb);if (kjbzh['_fileTypeArr']['indexOf'](lhjtzq) != -0x1) jbkazh['EnvConfig']['load']['call'](this, aj2kdb, $_48, hljqk, lqkj, hbk2ja);else {
        if (!mcy30['getFileInfo'](aj2kdb)) {
          if (aj2kdb['indexOf']('layaNativeDir/') != -0x1) {
            if (jbkazh['isZiYu']) {
              var hkl = mcy30['ziyuFileData'][aj2kdb];geu1v['onLoaded'](hkl);return;
            } else {
              cosnole['log']('read read'), mcy30['read'](aj2kdb, cmwri3, new u7g1e(kjbzh, kjbzh['onReadNativeCallBack'], [cmwri3, aj2kdb, $_48, hljqk, lqkj, hbk2ja, geu1v]));return;
            }
          }if (n_0yx3['rootPath'] == '') var rcx0y3 = aj2kdb;else rcx0y3 = aj2kdb['split'](n_0yx3['rootPath'])[0x0];aj2kdb['indexOf']('http://') != -0x1 || aj2kdb['indexOf']('https://') != -0x1 ? jbkazh['EnvConfig']['load']['call'](geu1v, aj2kdb, $_48, hljqk, lqkj, hbk2ja) : mcy30['readFile'](rcx0y3, cmwri3, new u7g1e(kjbzh, kjbzh['onReadNativeCallBack'], [cmwri3, aj2kdb, $_48, hljqk, lqkj, hbk2ja, geu1v]), aj2kdb);
        } else jbkazh['EnvConfig']['load']['call'](this, aj2kdb, $_48, hljqk, lqkj, hbk2ja);
      }
    }, fo597['resMgrLoad'] = function (ove9, ztqhj, goe1, jdk2ba, akhzb, zhjqlk, x84_n) {
      goe1 === void 0x0 && (goe1 = 0x0), jdk2ba === void 0x0 && (jdk2ba = ![]), akhzb === void 0x0 && (akhzb = ![]), zhjqlk === void 0x0 && (zhjqlk = 0x0), x84_n === void 0x0 && (x84_n = 0x3), ove9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ove9), jbkazh['EnvConfig']['resMgrLoad'](ove9, (jztqh, cirm03, x4y0) => {
        kjbzh['prototype']['resMgrLoadCallBack'](jztqh, cirm03, x4y0, ztqhj);
      }, goe1, jdk2ba, akhzb, zhjqlk, x84_n);
    }, fo597['resMgrLoadCallBack'] = function (hja, zltf5q, s$8bd, lqtz) {
      console['log']('buff:::', hja, s$8bd, mcy30['fileNativeDir'] + '///' + mcy30['fileListName']), lqtz(hja, zltf5q, s$8bd);
    }, fo597['clearRes'] = function (ol59ft, akbzhj) {
      akbzhj === void 0x0 && (akbzhj = ![]);var fot597 = this;fot597['clearRes'](ol59ft, akbzhj);var n4$_8 = mcy30['getFileInfo'](ol59ft);if (n4$_8 && (ol59ft['indexOf']('http://') != -0x1 || ol59ft['indexOf']('https://') != -0x1)) {
        var ds82b = n4$_8['md5'],
            x30yc = mcy30['getFileNativePath'](ds82b);mcy30['remove'](x30yc);
      }
    }, kjbzh['onReadNativeCallBack'] = function (qhjlz, f59otl, i0rc, q95t, bakhzj, k2da, zjlth, $8s_, gvu7e) {
      q95t === void 0x0 && (q95t = !![]), k2da === void 0x0 && (k2da = ![]), $8s_ === void 0x0 && ($8s_ = 0x0);if (!$8s_) {
        var qlt59;if (i0rc == 'json' || i0rc == 'atlas') qlt59 = jbkazh['getJson'](gvu7e['data']);else i0rc == 'xml' ? qlt59 = nyr30['parseXMLFromString'](gvu7e['data']) : qlt59 = gvu7e['data'];zjlth['onLoaded'](qlt59), !jbkazh['isZiYu'] && jbkazh['isPosMsgYu'] && i0rc != 'arraybuffer' && wx['postMessage']({ 'url': f59otl, 'data': qlt59, 'isLoad': !![] });
      } else $8s_ == 0x1 && jbkazh['EnvConfig']['load']['call'](zjlth, f59otl, i0rc, q95t, bakhzj, k2da);
    }, db28(kjbzh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kjbzh;
  }(),
      mcy30 = function (nx84y) {
    function hka2() {
      hka2['__super']['call'](this);;
    }return crmy30(hka2, 'laya.wx.mini.MiniFileMgr', nx84y), hka2['isLoadFile'] = function (tl9f) {
      return hka2['_fileTypeArr']['indexOf'](tl9f) != -0x1 ? !![] : ![];
    }, hka2['getFileInfo'] = function (bh2jk) {
      var s$_4n = bh2jk['split']('?')[0x0],
          ltqf9 = hka2['filesListObj'][s$_4n];if (ltqf9 == null) return null;else return ltqf9;return null;
    }, hka2['onFileUpdate'] = function (_sd$48, o9v57f) {
      var hbjkaz = _sd$48['split']('/'),
          s$n84_ = hbjkaz[hbjkaz['length'] - 0x1],
          dak2jb = hka2['getFileInfo'](o9v57f);if (dak2jb == null) hka2['onSaveFile'](o9v57f, s$n84_);else {
        if (dak2jb['readyUrl'] != o9v57f) hka2['remove'](s$n84_, o9v57f);
      }
    }, hka2['exits'] = function (gu1e7, _s8d4) {
      var jka2hb = hka2['getFileNativePath'](gu1e7);hka2['fs']['getFileInfo']({ 'filePath': jka2hb, 'success': function (lf59q) {
          _s8d4 != null && _s8d4['runWith']([0x0, lf59q]);
        }, 'fail': function (ve9o) {
          _s8d4 != null && _s8d4['runWith']([0x1, ve9o]);
        } });
    }, hka2['read'] = function (w3mcr, c03rx, zt5, o579) {
      c03rx === void 0x0 && (c03rx = 'ascill'), o579 === void 0x0 && (o579 = '');var d24s$;o579 != '' ? d24s$ = hka2['getFileNativePath'](w3mcr) : d24s$ = w3mcr, hka2['fs']['readFile']({ 'filePath': d24s$, 'encoding': c03rx, 'success': function (n8xy_) {
          zt5 != null && zt5['runWith']([0x0, n8xy_]);
        }, 'fail': function (d4s$28) {
          if (d4s$28 && o579 != '') hka2['down'](o579, c03rx, zt5, o579);else zt5 != null && zt5['runWith']([0x1]);
        } });
    }, hka2['readNativeFile'] = function (mrci, b2kdj) {
      hka2['fs']['readFile']({ 'filePath': mrci, 'encoding': '', 'success': function (sx8n4) {
          b2kdj != null && b2kdj['runWith']([0x0]);
        }, 'fail': function (sba$) {
          b2kdj != null && b2kdj['runWith']([0x1]);
        } });
    }, hka2['down'] = function (n4_0, ds8b2, azjhbk, rycx30) {
      ds8b2 === void 0x0 && (ds8b2 = 'ascill'), rycx30 === void 0x0 && (rycx30 = '');var xn8_4y = hka2['getFileNativePath'](rycx30),
          n_30xy = hka2['wxdown']({ 'url': n4_0, 'filePath': xn8_4y, 'success': function (hjkzlq) {
          if (hjkzlq['statusCode'] === 0xc8) hka2['readFile'](hjkzlq['filePath'], ds8b2, azjhbk, rycx30);
        }, 'fail': function (_y03xn) {
          azjhbk != null && azjhbk['runWith']([0x1, _y03xn]);
        } });n_30xy['onProgressUpdate'](function (nry30) {
        azjhbk != null && azjhbk['runWith']([0x2, nry30['progress']]);
      });
    }, hka2['readFile'] = function (ajbd2k, ir0cm, bjzkh, kb$2a) {
      ir0cm === void 0x0 && (ir0cm = 'ascill'), kb$2a === void 0x0 && (kb$2a = ''), hka2['fs']['readFile']({ 'filePath': ajbd2k, 'encoding': ir0cm, 'success': function (d$_4s8) {
          if (ajbd2k['indexOf']('http://') != -0x1 || ajbd2k['indexOf']('https://') != -0x1) hka2['onFileUpdate'](ajbd2k, kb$2a);bjzkh != null && bjzkh['runWith']([0x0, d$_4s8]);
        }, 'fail': function (ftqz5) {
          if (ftqz5) bjzkh != null && bjzkh['runWith']([0x1, ftqz5]);
        } });
    }, hka2['downImg'] = function (qhjakz, nx_30, b2hakj) {
      b2hakj === void 0x0 && (b2hakj = '');var vueg17 = hka2['wxdown']({ 'url': qhjakz, 'success': function (euvg7) {
          euvg7['statusCode'] === 0xc8 && hka2['copyFile'](euvg7['tempFilePath'], b2hakj, nx_30);
        }, 'fail': function (rmic03) {
          nx_30 != null && nx_30['runWith']([0x1, rmic03]);
        } });
    }, hka2['copyFile'] = function (zhqkjl, lq5zt, zlqjkh) {
      var i3wmrc = zhqkjl['split']('/'),
          fo5 = i3wmrc[i3wmrc['length'] - 0x1],
          b$2dsa = lq5zt['split']('?')[0x0],
          $82bs = hka2['getFileInfo'](lq5zt),
          eg61up = hka2['getFileNativePath'](fo5);hka2['fs']['copyFile']({ 'srcPath': zhqkjl, 'destPath': eg61up, 'success': function (gu7v) {
          if (!$82bs) hka2['onSaveFile'](lq5zt, fo5), zlqjkh != null && zlqjkh['runWith']([0x0]);else {
            if ($82bs['readyUrl'] != lq5zt) hka2['remove'](fo5, lq5zt, zlqjkh);
          }
        }, 'fail': function (akqjhz) {
          zlqjkh != null && zlqjkh['runWith']([0x1, akqjhz]);
        } });
    }, hka2['getFileNativePath'] = function (thlzjq) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + thlzjq;
    }, hka2['remove'] = function (g1ev6u, qlz5th, v7f1o9) {
      qlz5th === void 0x0 && (qlz5th = '');var imcr0 = hka2['getFileInfo'](qlz5th),
          adbj = hka2['getFileNativePath'](imcr0['md5']);c0r3ym['loader']['clearRes'](imcr0['readyUrl']), hka2['fs']['unlink']({ 'filePath': adbj, 'success': function (b2k$d) {
          if (qlz5th != '') hka2['onSaveFile'](qlz5th, g1ev6u);v7f1o9 != null && v7f1o9['runWith']([0x0]);
        }, 'fail': function (upe1) {} });
    }, hka2['onSaveFile'] = function (ds24$8, c0x3y) {
      var $2ba = ds24$8['split']('?')[0x0];hka2['filesListObj'][$2ba] = { 'md5': c0x3y, 'readyUrl': ds24$8 }, hka2['fs']['writeFile']({ 'filePath': hka2['fileNativeDir'] + '/' + hka2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hka2['filesListObj']), 'success': function ($s2bd) {
          console['log']('写入测试测试成功：', $s2bd);
        }, 'fail': function (hlqtz) {
          console['log']('写入测试测试失败：', hlqtz);
        } });
    }, hka2['existDir'] = function ($ba2, tfo57) {
      hka2['fs']['mkdir']({ 'dirPath': $ba2, 'success': function (qhajkz) {
          tfo57 != null && tfo57['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zaqjh) {
          if (zaqjh['errMsg']['indexOf']('file already exists') != -0x1) hka2['readSync'](hka2['fileListName'], 'utf8', tfo57);else tfo57 != null && tfo57['runWith']([0x1, zaqjh]);
        } });
    }, hka2['readSync'] = function (ja2hk, jka2b, h5zqt, g61veu) {
      jka2b === void 0x0 && (jka2b = 'ascill'), g61veu === void 0x0 && (g61veu = '');var yx3cr = hka2['getFileNativePath'](ja2hk),
          q95ft;try {
        q95ft = hka2['fs']['readFileSync'](yx3cr), h5zqt != null && h5zqt['runWith']([0x0, { 'data': q95ft }]);
      } catch (ol9f5) {
        h5zqt != null && h5zqt['runWith']([0x1]);
      }
    }, hka2['readCache'] = function () {}, hka2['writeCache'] = function (qt9f5l) {
      var kj2da = readyUrl['split']('?')[0x0];hka2['filesListObj'][kj2da] = { 'md5': md5Name, 'readyUrl': readyUrl }, hka2['fs']['writeFile']({ 'filePath': hka2['fileNativeDir'] + '/' + hka2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hka2['filesListObj']), 'success': function (v97of) {}, 'fail': function ($sad2b) {} });
    }, hka2['setNativeFileDir'] = function (vof95) {
      hka2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vof95;
    }, hka2['filesListObj'] = {}, hka2['fileNativeDir'] = null, hka2['fileListName'] = 'layaairfiles.txt', hka2['ziyuFileData'] = {}, db28(hka2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), hka2;
  }(ajbkhz),
      lf9t = function (l9t5fo) {
    function e1o97v() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], e1o97v['__super']['call'](this), this['_sound'] = e1o97v['_createSound']();
    }crmy30(e1o97v, 'laya.wx.mini.MiniSound', l9t5fo);var ahqkj = e1o97v['prototype'];return ahqkj['load'] = function (m0ry3) {
      var oe97v = this;m0ry3 = n_0yx3['formatURL'](m0ry3), this['url'] = m0ry3;if (e1o97v['_audioCache'][m0ry3]) {
        this['event']('complete');return;
      }function qlzh5t() {
        if (e1o97v['_null'] != undefined) oe97v['_sound']['onCanplay'](e1o97v['_null']), oe97v['_sound']['onError'](e1o97v['_null']);else try {
          oe97v['_sound']['onCanplay'](null), oe97v['_sound']['onError'](null), e1o97v['_null'] = null;
        } catch (epg1u) {
          console['warn']('[wxmini] _clearSound:' + epg1u), oe97v['_sound']['onCanplay'](pgu16e), oe97v['_sound']['onError'](pgu16e), e1o97v['_null'] = pgu16e;
        }
      }function cr0m3() {
        qlzh5t(), xcry03['loaded'] = !![], xcry03['event']('complete'), e1o97v['_audioCache'][xcry03['url']] = xcry03;
      }function qljt(xy0cr3) {
        console['error']('errCode=' + xy0cr3['errCode'] + '  errMsg=' + xy0cr3['errMsg']), qlzh5t(), xcry03['event']('error');
      }function pgu16e() {}this['_sound']['onCanplay'](cr0m3), this['_sound']['onError'](qljt), this['_sound']['src'] = m0ry3;var xcry03 = this;
    }, ahqkj['play'] = function (ah2jkb, ds4_$) {
      ah2jkb === void 0x0 && (ah2jkb = 0x0), ds4_$ === void 0x0 && (ds4_$ = 0x0);var abk2dj;if (this['url'] == b2d$s8['_tMusic']) {
        if (!e1o97v['_musicAudio']) e1o97v['_musicAudio'] = e1o97v['_createSound']();abk2dj = e1o97v['_musicAudio'];
      } else abk2dj = e1o97v['_createSound']();abk2dj['src'] = this['url'];var fv7o91 = new bs2$ad(abk2dj);return fv7o91['url'] = this['url'], fv7o91['loops'] = ds4_$, fv7o91['startTime'] = ah2jkb, fv7o91['play'](), b2d$s8['addChannel'](fv7o91), fv7o91;
    }, ahqkj['dispose'] = function () {
      var rx3y0c = e1o97v['_audioCache'][this['url']];rx3y0c && (rx3y0c['src'] = '', delete e1o97v['_audioCache'][this['url']]);
    }, tzqljh(0x0, ahqkj, 'duration', function () {
      return this['_sound']['duration'];
    }), e1o97v['_createSound'] = function () {
      return e1o97v['_id']++, jbkazh['window']['wx']['createInnerAudioContext']();
    }, e1o97v['_musicAudio'] = null, e1o97v['_id'] = 0x0, e1o97v['_audioCache'] = {}, e1o97v['_null'] = undefined, e1o97v;
  }(ajbkhz),
      bs2$ad = function (xy03nr) {
    function tzljqh(mir3w) {
      this['_audio'] = null, this['_onEnd'] = null, tzljqh['__super']['call'](this), this['_audio'] = mir3w, this['_onEnd'] = nyr30['bind'](this['__onEnd'], this), mir3w['onEnded'](this['_onEnd']);
    }crmy30(tzljqh, 'laya.wx.mini.MiniSoundChannel', xy03nr);var $b2d8 = tzljqh['prototype'];return $b2d8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (c0r3ym['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $b2d8['__onNull'] = function () {}, $b2d8['play'] = function () {
      this['isStopped'] = ![], b2d$s8['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $b2d8['stop'] = function () {
      this['isStopped'] = !![], b2d$s8['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (tzljqh['_null'] != undefined) this['_audio']['onEnded'](tzljqh['_null']);else try {
        this['_audio']['onEnded'](null), tzljqh['_null'] = null;
      } catch (hjqlzt) {
        console['warn']('[wxmini] stop:' + hjqlzt), this['_audio']['onEnded'](nyr30['bind'](this['__onNull'], this)), tzljqh['_null'] = nyr30['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $b2d8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $b2d8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b2d$s8['addChannel'](this), this['_audio']['play']();
    }, tzqljh(0x0, $b2d8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tzqljh(0x0, $b2d8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tzqljh(0x0, $b2d8, 'volume', function () {
      return 0x1;
    }, function (o17vf9) {}), tzljqh['_null'] = undefined, tzljqh;
  }(eug61v);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e1uvg7 in Laya) {
    var $28d4s = Laya[e1uvg7];$28d4s && $28d4s['__isclass'] && (exports[e1uvg7] = $28d4s);
  }
});