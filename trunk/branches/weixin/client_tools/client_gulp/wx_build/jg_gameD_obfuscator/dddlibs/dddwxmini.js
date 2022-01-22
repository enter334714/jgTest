var v = wx.$d;
(function (window, document, tgf0qk) {
  var e6dumi = tgf0qk['un'],
      p7lyv = tgf0qk['uns'],
      _3c59o = tgf0qk['static'],
      nm6j4 = tgf0qk['class'],
      dufet = tgf0qk['getset'],
      hdme6 = tgf0qk['__newvec'],
      b81xr = laya['utils']['Browser'],
      o3_ = laya['events']['Event'],
      rx$ = laya['events']['EventDispatcher'],
      j_4nh9 = laya['resource']['HTMLImage'],
      w$r81p = laya['utils']['Handler'],
      fude = laya['display']['Input'],
      xrba8 = laya['net']['Loader'],
      xqaz = laya['maths']['Matrix'],
      az0b = laya['renders']['Render'],
      fdeiut = laya['utils']['RunDriver'],
      m6jneh = laya['media']['Sound'],
      pr$v7w = laya['media']['SoundChannel'],
      igtkfu = laya['media']['SoundManager'],
      zfkg = laya['display']['Stage'],
      a81xbr = laya['net']['URL'],
      ehidm = laya['utils']['Utils'],
      hmn46j = function () {
    function x8b0az() {}return nm6j4(x8b0az, 'laya.wx.mini.MiniAdpter'), x8b0az['getJson'] = function (u6ide) {
      return JSON['parse'](u6ide);
    }, x8b0az['init'] = function (iud6m, zb0gqa) {
      iud6m === void 0x0 && (iud6m = ![]), zb0gqa === void 0x0 && (zb0gqa = ![]);if (x8b0az['_inited']) return;x8b0az['window'] = window;if (x8b0az['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;x8b0az['_inited'] = !![], x8b0az['isZiYu'] = zb0gqa, x8b0az['isPosMsgYu'] = iud6m, x8b0az['EnvConfig'] = {}, !x8b0az['isZiYu'] && (qkag0['setNativeFileDir']('/layaairGame'), qkag0['existDir'](qkag0['fileNativeDir'], w$r81p['create'](x8b0az, x8b0az['onMkdirCallBack']))), x8b0az['window']['focus'] = function () {}, tgf0qk['getUrlPath'] = function () {}, x8b0az['window']['logtime'] = function (uiktg) {}, x8b0az['window']['alertTimeLog'] = function (g0qf) {}, x8b0az['window']['resetShareInfo'] = function () {}, x8b0az['window']['CanvasRenderingContext2D'] = function () {}, x8b0az['window']['CanvasRenderingContext2D']['prototype'] = x8b0az['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x8b0az['window']['document']['body']['appendChild'] = function () {}, x8b0az['EnvConfig']['pixelRatioInt'] = 0x0, fdeiut['getPixelRatio'] = x8b0az['pixelRatio'], x8b0az['_preCreateElement'] = b81xr['createElement'], b81xr['createElement'] = x8b0az['createElement'], fdeiut['createShaderCondition'] = x8b0az['createShaderCondition'], ehidm['parseXMLFromString'] = x8b0az['parseXMLFromString'], fude['_createInputElement'] = fqkz['_createInputElement'], x8b0az['EnvConfig']['load'] = xrba8['prototype']['load'], xrba8['prototype']['load'] = mtied['prototype']['load'], x8b0az['isZiYu'] && iud6m && wx['onMessage'](function (tgifu) {
        tgifu['isLoad'] && (qkag0['ziyuFileData'][tgifu['url']] = tgifu['data']);
      });
    }, x8b0az['onMkdirCallBack'] = function (gbaqz0, _o943) {
      if (!gbaqz0) qkag0['filesListObj'] = JSON['parse'](_o943['data']);
    }, x8b0az['pixelRatio'] = function () {
      if (!x8b0az['EnvConfig']['pixelRatioInt']) try {
        var hmj6 = wx['getSystemInfoSync']();return x8b0az['EnvConfig']['pixelRatioInt'] = hmj6['pixelRatio'], hmj6 = hmj6, hmj6['pixelRatio'];
      } catch (pr8$w1) {}return x8b0az['EnvConfig']['pixelRatioInt'];
    }, x8b0az['createElement'] = function (uitg) {
      if (uitg == 'canvas') {
        var p8r$1;return x8b0az['idx'] == 0x1 ? x8b0az['isZiYu'] ? (p8r$1 = sharedCanvas, p8r$1['style'] = {}) : p8r$1 = window['canvas'] : p8r$1 = window['wx']['createCanvas'](), x8b0az['idx']++, p8r$1;
      } else {
        if (uitg == 'textarea' || uitg == 'input') return x8b0az['onCreateInput'](uitg);else {
          if (uitg == 'div') {
            var bax0zq = x8b0az['_preCreateElement'](uitg);return bax0zq['contains'] = function (fudikt) {
              return null;
            }, bax0zq['removeChild'] = function (j_4hn9) {}, bax0zq;
          } else return x8b0az['_preCreateElement'](uitg);
        }
      }
    }, x8b0az['onCreateInput'] = function (z0x8) {
      var r81w = x8b0az['_preCreateElement'](z0x8);return r81w['focus'] = fqkz['wxinputFocus'], r81w['blur'] = fqkz['wxinputblur'], r81w['style'] = {}, r81w['value'] = 0x0, r81w['parentElement'] = {}, r81w['placeholder'] = {}, r81w['type'] = {}, r81w['setColor'] = function (guq) {}, r81w['setType'] = function (_4j6h) {}, r81w['setFontFace'] = function (d6eh) {}, r81w['addEventListener'] = function (v7p$ly) {}, r81w['contains'] = function (_j4n39) {
        return null;
      }, r81w['removeChild'] = function (fkid) {}, r81w;
    }, x8b0az['createShaderCondition'] = function (njh_49) {
      var j4hn_ = this,
          himd = function () {
        var duftk = njh_49;return j4hn_[njh_49['replace']('this.', '')];
      };return himd;
    }, x8b0az['EnvConfig'] = null, x8b0az['window'] = null, x8b0az['_preCreateElement'] = null, x8b0az['_inited'] = ![], x8b0az['wxRequest'] = null, x8b0az['systemInfo'] = null, x8b0az['version'] = '0.0.1', x8b0az['isZiYu'] = ![], x8b0az['isPosMsgYu'] = ![], x8b0az['parseXMLFromString'] = function ($1vpw) {
      var h6jn, hm46;$1vpw = $1vpw['replace'](/>\s+</g, '><');try {
        h6jn = new window['Parser']['DOMParser']()['parseFromString']($1vpw, 'text/xml');
      } catch (he6mdj) {
        throw '需要引入xml解析库文件';
      }return h6jn;
    }, x8b0az['idx'] = 0x1, x8b0az;
  }(),
      hiemd = function () {
    function gf0zkq() {}nm6j4(gf0zkq, 'laya.wx.mini.MiniImage');var _3n4 = gf0zkq['prototype'];return _3n4['_loadImage'] = function (h4n) {
      var pr1$w8 = this,
          nemjh = ![];h4n['indexOf']('layaNativeDir/') == -0x1 && (nemjh = !![], h4n = a81xbr['formatURL'](h4n));if (!qkag0['getFileInfo'](h4n)) {
        if (h4n['indexOf']('http://') != -0x1 || h4n['indexOf']('https://') != -0x1) qkag0['downImg'](h4n, new w$r81p(gf0zkq, gf0zkq['onDownImgCallBack'], [h4n, pr1$w8]), h4n);else gf0zkq['onCreateImage'](h4n, pr1$w8, !![]);
      } else gf0zkq['onCreateImage'](h4n, pr1$w8, !nemjh);
    }, gf0zkq['onDownImgCallBack'] = function (jn6m4, kagq0z, p1v$) {
      if (!p1v$) gf0zkq['onCreateImage'](jn6m4, kagq0z);else kagq0z['onError'](null);
    }, gf0zkq['onCreateImage'] = function (g0aqkz, v7pr, n6j4h) {
      n6j4h === void 0x0 && (n6j4h = ![]);var tigku;if (!n6j4h) {
        var q0zkga = qkag0['getFileInfo'](g0aqkz),
            aqgbz0 = q0zkga['md5'];tigku = qkag0['getFileNativePath'](aqgbz0);
      } else tigku = g0aqkz;if (v7pr['imgCache'] == null) v7pr['imgCache'] = {};var xqz0b;function fduet() {
        xqz0b['onload'] = null, xqz0b['onerror'] = null, delete v7pr['imgCache'][g0aqkz];
      };var b1axz = function () {
        fduet(), v7pr['onLoaded'](xqz0b);
      },
          wp$r7 = function () {
        fduet(), v7pr['event']('error', 'Load image failed');
      };v7pr['_type'] == 'nativeimage' ? (xqz0b = new b81xr['window']['Image'](), xqz0b['crossOrigin'] = '', xqz0b['onload'] = b1axz, xqz0b['onerror'] = wp$r7, xqz0b['src'] = tigku, v7pr['imgCache'][g0aqkz] = xqz0b) : new j_4nh9['create'](tigku, { 'onload': b1axz, 'onerror': wp$r7, 'onCreate': function ($81prw) {
          xqz0b = $81prw, v7pr['imgCache'][g0aqkz] = $81prw;
        } });
    }, gf0zkq;
  }(),
      fqkz = function () {
    function j439_() {}return nm6j4(j439_, 'laya.wx.mini.MiniInput'), j439_['_createInputElement'] = function () {
      fude['_initInput'](fude['area'] = b81xr['createElement']('textarea')), fude['_initInput'](fude['input'] = b81xr['createElement']('input')), fude['inputContainer'] = b81xr['createElement']('div'), fude['inputContainer']['style']['position'] = 'absolute', fude['inputContainer']['style']['zIndex'] = 0x186a0, b81xr['container']['appendChild'](fude['inputContainer']), fude['inputContainer']['setPos'] = function (g0baq, ftgq) {
        fude['inputContainer']['style']['left'] = g0baq + 'px', fude['inputContainer']['style']['top'] = ftgq + 'px';
      }, tgf0qk['stage']['on']('resize', null, j439_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a1b8z) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), igtkfu['_soundClass'] = tdkf, igtkfu['_musicClass'] = tdkf;
    }, j439_['_onStageResize'] = function () {
      var $pr = tgf0qk['stage']['_canvasTransform']['identity']();$pr['scale'](b81xr['width'] / az0b['canvas']['width'] / fdeiut['getPixelRatio'](), b81xr['height'] / az0b['canvas']['height'] / fdeiut['getPixelRatio']());
    }, j439_['wxinputFocus'] = function (ifdtk) {
      var ylpv$7 = fude['inputElement']['target'];if (ylpv$7 && !ylpv$7['editable']) return;hmn46j['window']['wx']['offKeyboardConfirm'](), hmn46j['window']['wx']['offKeyboardInput'](), hmn46j['window']['wx']['showKeyboard']({ 'defaultValue': ylpv$7['text'], 'maxLength': ylpv$7['maxChars'], 'multiple': ylpv$7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dh6i) {}, 'fail': function (qgftu) {} }), hmn46j['window']['wx']['onKeyboardConfirm'](function (meh6jd) {
        var tukgfi = meh6jd ? meh6jd['value'] : '';ylpv$7['text'] = tukgfi, ylpv$7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), hmn46j['window']['wx']['onKeyboardInput'](function (pv7wr) {
        var w8xrb = pv7wr ? pv7wr['value'] : '';if (!ylpv$7['multiline']) {
          if (w8xrb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ylpv$7['text'] = w8xrb, ylpv$7['event']('input');
      });
    }, j439_['inputEnter'] = function () {
      fude['inputElement']['target']['focus'] = ![];
    }, j439_['wxinputblur'] = function () {
      j439_['hideKeyboard']();
    }, j439_['hideKeyboard'] = function () {
      hmn46j['window']['wx']['offKeyboardConfirm'](), hmn46j['window']['wx']['offKeyboardInput'](), hmn46j['window']['wx']['hideKeyboard']({ 'success': function (o325c) {
          console['log']('隐藏键盘');
        }, 'fail': function (dum6e) {
          console['log']('隐藏键盘出错:' + (dum6e ? dum6e['errMsg'] : ''));
        } });
    }, j439_;
  }(),
      mtied = function () {
    function jhnm64() {}nm6j4(jhnm64, 'laya.wx.mini.MiniLoader');var pyvw7 = jhnm64['prototype'];return pyvw7['load'] = function (iemdut, gkfqut, eufd, b0gaqz, ditufe) {
      eufd === void 0x0 && (eufd = !![]), ditufe === void 0x0 && (ditufe = ![]);var w$1rp8 = this;w$1rp8['_url'] = iemdut;if (iemdut['indexOf']('data:image') === 0x0) w$1rp8['_type'] = gkfqut = 'image';else w$1rp8['_type'] = gkfqut || (gkfqut = w$1rp8['getTypeFromUrl'](iemdut));w$1rp8['_cache'] = eufd, w$1rp8['_data'] = null;var $8p1w = 'ascii';if (iemdut['indexOf']('.fnt') != -0x1) $8p1w = 'utf8';else gkfqut == 'arraybuffer' && ($8p1w = '');;var qtg0fk = ehidm['getFileExtension'](iemdut);if (jhnm64['_fileTypeArr']['indexOf'](qtg0fk) != -0x1) hmn46j['EnvConfig']['load']['call'](this, iemdut, gkfqut, eufd, b0gaqz, ditufe);else {
        if (!qkag0['getFileInfo'](iemdut)) {
          if (iemdut['indexOf']('layaNativeDir/') != -0x1) {
            if (hmn46j['isZiYu']) {
              var _c4o93 = qkag0['ziyuFileData'][iemdut];w$1rp8['onLoaded'](_c4o93);return;
            } else {
              cosnole['log']('read read'), qkag0['read'](iemdut, $8p1w, new w$r81p(jhnm64, jhnm64['onReadNativeCallBack'], [$8p1w, iemdut, gkfqut, eufd, b0gaqz, ditufe, w$1rp8]));return;
            }
          }if (a81xbr['rootPath'] == '') var kfti = iemdut;else kfti = iemdut['split'](a81xbr['rootPath'])[0x0];iemdut['indexOf']('http://') != -0x1 || iemdut['indexOf']('https://') != -0x1 ? hmn46j['EnvConfig']['load']['call'](w$1rp8, iemdut, gkfqut, eufd, b0gaqz, ditufe) : qkag0['readFile'](kfti, $8p1w, new w$r81p(jhnm64, jhnm64['onReadNativeCallBack'], [$8p1w, iemdut, gkfqut, eufd, b0gaqz, ditufe, w$1rp8]), iemdut);
        } else hmn46j['EnvConfig']['load']['call'](this, iemdut, gkfqut, eufd, b0gaqz, ditufe);
      }
    }, pyvw7['resMgrLoad'] = function (w$x1r, nmjh, ftukq, $wp7rv, bzx18a, hj4nm6, axz0b8) {
      ftukq === void 0x0 && (ftukq = 0x0), $wp7rv === void 0x0 && ($wp7rv = ![]), bzx18a === void 0x0 && (bzx18a = ![]), hj4nm6 === void 0x0 && (hj4nm6 = 0x0), axz0b8 === void 0x0 && (axz0b8 = 0x3), w$x1r['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w$x1r), hmn46j['EnvConfig']['resMgrLoad'](w$x1r, (z8b0ax, z0xqb, xwbr81) => {
        jhnm64['prototype']['resMgrLoadCallBack'](z8b0ax, z0xqb, xwbr81, nmjh);
      }, ftukq, $wp7rv, bzx18a, hj4nm6, axz0b8);
    }, pyvw7['resMgrLoadCallBack'] = function (co5_, d6hje, zkqf0g, x8abz1) {
      console['log']('buff:::', co5_, zkqf0g, qkag0['fileNativeDir'] + '///' + qkag0['fileListName']), x8abz1(co5_, d6hje, zkqf0g);
    }, pyvw7['clearRes'] = function (mn4h6j, gukif) {
      gukif === void 0x0 && (gukif = ![]);var r$8x1w = this;r$8x1w['clearRes'](mn4h6j, gukif);var pw7vr$ = qkag0['getFileInfo'](mn4h6j);if (pw7vr$ && (mn4h6j['indexOf']('http://') != -0x1 || mn4h6j['indexOf']('https://') != -0x1)) {
        var igukf = pw7vr$['md5'],
            pr$wv7 = qkag0['getFileNativePath'](igukf);qkag0['remove'](pr$wv7);
      }
    }, jhnm64['onReadNativeCallBack'] = function (d6hiem, n6j_4h, wpr7v$, qgza0, djmh6e, uimetd, m6n4h, ftkgui, m6ej) {
      qgza0 === void 0x0 && (qgza0 = !![]), uimetd === void 0x0 && (uimetd = ![]), ftkgui === void 0x0 && (ftkgui = 0x0);if (!ftkgui) {
        var mjd;if (wpr7v$ == 'json' || wpr7v$ == 'atlas') mjd = hmn46j['getJson'](m6ej['data']);else wpr7v$ == 'xml' ? mjd = ehidm['parseXMLFromString'](m6ej['data']) : mjd = m6ej['data'];m6n4h['onLoaded'](mjd), !hmn46j['isZiYu'] && hmn46j['isPosMsgYu'] && wpr7v$ != 'arraybuffer' && wx['postMessage']({ 'url': n6j_4h, 'data': mjd, 'isLoad': !![] });
      } else ftkgui == 0x1 && hmn46j['EnvConfig']['load']['call'](m6n4h, n6j_4h, wpr7v$, qgza0, djmh6e, uimetd);
    }, _3c59o(jhnm64, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jhnm64;
  }(),
      qkag0 = function (prv7w$) {
    function r$w1() {
      r$w1['__super']['call'](this);;
    }return nm6j4(r$w1, 'laya.wx.mini.MiniFileMgr', prv7w$), r$w1['isLoadFile'] = function (pl7$vy) {
      return r$w1['_fileTypeArr']['indexOf'](pl7$vy) != -0x1 ? !![] : ![];
    }, r$w1['getFileInfo'] = function (tdiuef) {
      var _3co94 = tdiuef['split']('?')[0x0],
          ehdj = r$w1['filesListObj'][_3co94];if (ehdj == null) return null;else return ehdj;return null;
    }, r$w1['onFileUpdate'] = function (nh6je, die6m) {
      var za1x8 = nh6je['split']('/'),
          eumit = za1x8[za1x8['length'] - 0x1],
          y$vw7p = r$w1['getFileInfo'](die6m);if (y$vw7p == null) r$w1['onSaveFile'](die6m, eumit);else {
        if (y$vw7p['readyUrl'] != die6m) r$w1['remove'](eumit, die6m);
      }
    }, r$w1['exits'] = function (qbza0, t0gkfq) {
      var p$7 = r$w1['getFileNativePath'](qbza0);r$w1['fs']['getFileInfo']({ 'filePath': p$7, 'success': function (ly$7pv) {
          t0gkfq != null && t0gkfq['runWith']([0x0, ly$7pv]);
        }, 'fail': function (gq0k) {
          t0gkfq != null && t0gkfq['runWith']([0x1, gq0k]);
        } });
    }, r$w1['read'] = function (qg0kza, pr7$wv, a0qxbz, n64hm) {
      pr7$wv === void 0x0 && (pr7$wv = 'ascill'), n64hm === void 0x0 && (n64hm = '');var r8x1w;n64hm != '' ? r8x1w = r$w1['getFileNativePath'](qg0kza) : r8x1w = qg0kza, r$w1['fs']['readFile']({ 'filePath': r8x1w, 'encoding': pr7$wv, 'success': function (tkif) {
          a0qxbz != null && a0qxbz['runWith']([0x0, tkif]);
        }, 'fail': function (_9o5c) {
          if (_9o5c && n64hm != '') r$w1['down'](n64hm, pr7$wv, a0qxbz, n64hm);else a0qxbz != null && a0qxbz['runWith']([0x1]);
        } });
    }, r$w1['readNativeFile'] = function (v$r7w, n3_94) {
      r$w1['fs']['readFile']({ 'filePath': v$r7w, 'encoding': '', 'success': function (yw7$vp) {
          n3_94 != null && n3_94['runWith']([0x0]);
        }, 'fail': function (o3529c) {
          n3_94 != null && n3_94['runWith']([0x1]);
        } });
    }, r$w1['down'] = function (_4j93n, uikgft, $w7vr, n_4j39) {
      uikgft === void 0x0 && (uikgft = 'ascill'), n_4j39 === void 0x0 && (n_4j39 = '');var v7rwp = r$w1['getFileNativePath'](n_4j39),
          tfgq0 = r$w1['wxdown']({ 'url': _4j93n, 'filePath': v7rwp, 'success': function (ktufi) {
          if (ktufi['statusCode'] === 0xc8) r$w1['readFile'](ktufi['filePath'], uikgft, $w7vr, n_4j39);
        }, 'fail': function (tqgfu) {
          $w7vr != null && $w7vr['runWith']([0x1, tqgfu]);
        } });tfgq0['onProgressUpdate'](function (h6jmen) {
        $w7vr != null && $w7vr['runWith']([0x2, h6jmen['progress']]);
      });
    }, r$w1['readFile'] = function (o235, e6hjdm, bqga0z, o5_c) {
      e6hjdm === void 0x0 && (e6hjdm = 'ascill'), o5_c === void 0x0 && (o5_c = ''), r$w1['fs']['readFile']({ 'filePath': o235, 'encoding': e6hjdm, 'success': function (o49_c3) {
          if (o235['indexOf']('http://') != -0x1 || o235['indexOf']('https://') != -0x1) r$w1['onFileUpdate'](o235, o5_c);bqga0z != null && bqga0z['runWith']([0x0, o49_c3]);
        }, 'fail': function (ieumd) {
          if (ieumd) bqga0z != null && bqga0z['runWith']([0x1, ieumd]);
        } });
    }, r$w1['downImg'] = function (x1azb8, _n64, j6ehmd) {
      j6ehmd === void 0x0 && (j6ehmd = '');var r$pw1v = r$w1['wxdown']({ 'url': x1azb8, 'success': function (d6jm) {
          d6jm['statusCode'] === 0xc8 && r$w1['copyFile'](d6jm['tempFilePath'], j6ehmd, _n64);
        }, 'fail': function (xz) {
          _n64 != null && _n64['runWith']([0x1, xz]);
        } });
    }, r$w1['copyFile'] = function (o93c_4, dfitku, h4j9_) {
      var rw18$x = o93c_4['split']('/'),
          qbagz0 = rw18$x[rw18$x['length'] - 0x1],
          yp7vl = dfitku['split']('?')[0x0],
          $wpr = r$w1['getFileInfo'](dfitku),
          ktug = r$w1['getFileNativePath'](qbagz0);r$w1['fs']['copyFile']({ 'srcPath': o93c_4, 'destPath': ktug, 'success': function (xw18) {
          if (!$wpr) r$w1['onSaveFile'](dfitku, qbagz0), h4j9_ != null && h4j9_['runWith']([0x0]);else {
            if ($wpr['readyUrl'] != dfitku) r$w1['remove'](qbagz0, dfitku, h4j9_);
          }
        }, 'fail': function (b1z8xa) {
          h4j9_ != null && h4j9_['runWith']([0x1, b1z8xa]);
        } });
    }, r$w1['getFileNativePath'] = function (iudef) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + iudef;
    }, r$w1['remove'] = function (_j934, efut, edhmi6) {
      efut === void 0x0 && (efut = '');var im6ed = r$w1['getFileInfo'](efut),
          xabz0q = r$w1['getFileNativePath'](im6ed['md5']);tgf0qk['loader']['clearRes'](im6ed['readyUrl']), r$w1['fs']['unlink']({ 'filePath': xabz0q, 'success': function (a0b8) {
          if (efut != '') r$w1['onSaveFile'](efut, _j934);edhmi6 != null && edhmi6['runWith']([0x0]);
        }, 'fail': function (rv1w) {} });
    }, r$w1['onSaveFile'] = function (zb0xa8, jedmh6) {
      var ly$ = zb0xa8['split']('?')[0x0];r$w1['filesListObj'][ly$] = { 'md5': jedmh6, 'readyUrl': zb0xa8 }, r$w1['fs']['writeFile']({ 'filePath': r$w1['fileNativeDir'] + '/' + r$w1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r$w1['filesListObj']), 'success': function (w7rvp) {
          console['log']('写入测试测试成功：', w7rvp);
        }, 'fail': function (baxr) {
          console['log']('写入测试测试失败：', baxr);
        } });
    }, r$w1['existDir'] = function (utfqk, _n9c34) {
      r$w1['fs']['mkdir']({ 'dirPath': utfqk, 'success': function (udfikt) {
          _n9c34 != null && _n9c34['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (bqg0za) {
          if (bqg0za['errMsg']['indexOf']('file already exists') != -0x1) r$w1['readSync'](r$w1['fileListName'], 'utf8', _n9c34);else _n9c34 != null && _n9c34['runWith']([0x1, bqg0za]);
        } });
    }, r$w1['readSync'] = function (fdie, ftugik, xwr18$, ufdti) {
      ftugik === void 0x0 && (ftugik = 'ascill'), ufdti === void 0x0 && (ufdti = '');var ejdh6m = r$w1['getFileNativePath'](fdie),
          aq0zbg;try {
        aq0zbg = r$w1['fs']['readFileSync'](ejdh6m), xwr18$ != null && xwr18$['runWith']([0x0, { 'data': aq0zbg }]);
      } catch (p81) {
        xwr18$ != null && xwr18$['runWith']([0x1]);
      }
    }, r$w1['readCache'] = function () {}, r$w1['writeCache'] = function (euitf) {
      var wv$p7y = readyUrl['split']('?')[0x0];r$w1['filesListObj'][wv$p7y] = { 'md5': md5Name, 'readyUrl': readyUrl }, r$w1['fs']['writeFile']({ 'filePath': r$w1['fileNativeDir'] + '/' + r$w1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r$w1['filesListObj']), 'success': function (azxb8) {}, 'fail': function (bx8az1) {} });
    }, r$w1['setNativeFileDir'] = function (uitgkf) {
      r$w1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uitgkf;
    }, r$w1['filesListObj'] = {}, r$w1['fileNativeDir'] = null, r$w1['fileListName'] = 'layaairfiles.txt', r$w1['ziyuFileData'] = {}, _3c59o(r$w1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), r$w1;
  }(rx$),
      tdkf = function (ywv) {
    function zba18x() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zba18x['__super']['call'](this), this['_sound'] = zba18x['_createSound']();
    }nm6j4(zba18x, 'laya.wx.mini.MiniSound', ywv);var bzg0aq = zba18x['prototype'];return bzg0aq['load'] = function (y$7wvp) {
      var tiudk = this;y$7wvp = a81xbr['formatURL'](y$7wvp), this['url'] = y$7wvp;if (zba18x['_audioCache'][y$7wvp]) {
        this['event']('complete');return;
      }function qfg() {
        if (zba18x['_null'] != undefined) tiudk['_sound']['onCanplay'](zba18x['_null']), tiudk['_sound']['onError'](zba18x['_null']);else try {
          tiudk['_sound']['onCanplay'](null), tiudk['_sound']['onError'](null), zba18x['_null'] = null;
        } catch (dtuifk) {
          console['warn']('[wxmini] _clearSound:' + dtuifk), tiudk['_sound']['onCanplay'](r7pw), tiudk['_sound']['onError'](r7pw), zba18x['_null'] = r7pw;
        }
      }function qkutgf() {
        qfg(), cn943_['loaded'] = !![], cn943_['event']('complete'), zba18x['_audioCache'][cn943_['url']] = cn943_;
      }function h6die(b0gqaz) {
        console['error']('errCode=' + b0gqaz['errCode'] + '  errMsg=' + b0gqaz['errMsg']), qfg(), cn943_['event']('error');
      }function r7pw() {}this['_sound']['onCanplay'](qkutgf), this['_sound']['onError'](h6die), this['_sound']['src'] = y$7wvp;var cn943_ = this;
    }, bzg0aq['play'] = function (o3_c59, _95oc) {
      o3_c59 === void 0x0 && (o3_c59 = 0x0), _95oc === void 0x0 && (_95oc = 0x0);var c493;if (this['url'] == igtkfu['_tMusic']) {
        if (!zba18x['_musicAudio']) zba18x['_musicAudio'] = zba18x['_createSound']();c493 = zba18x['_musicAudio'];
      } else c493 = zba18x['_createSound']();c493['src'] = this['url'];var ax1r = new plv7$(c493);return ax1r['url'] = this['url'], ax1r['loops'] = _95oc, ax1r['startTime'] = o3_c59, ax1r['play'](), igtkfu['addChannel'](ax1r), ax1r;
    }, bzg0aq['dispose'] = function () {
      var deum6 = zba18x['_audioCache'][this['url']];deum6 && (deum6['src'] = '', delete zba18x['_audioCache'][this['url']]);
    }, dufet(0x0, bzg0aq, 'duration', function () {
      return this['_sound']['duration'];
    }), zba18x['_createSound'] = function () {
      return zba18x['_id']++, hmn46j['window']['wx']['createInnerAudioContext']();
    }, zba18x['_musicAudio'] = null, zba18x['_id'] = 0x0, zba18x['_audioCache'] = {}, zba18x['_null'] = undefined, zba18x;
  }(rx$),
      plv7$ = function (h9j_) {
    function dumi6(etdf) {
      this['_audio'] = null, this['_onEnd'] = null, dumi6['__super']['call'](this), this['_audio'] = etdf, this['_onEnd'] = ehidm['bind'](this['__onEnd'], this), etdf['onEnded'](this['_onEnd']);
    }nm6j4(dumi6, 'laya.wx.mini.MiniSoundChannel', h9j_);var g0ktf = dumi6['prototype'];return g0ktf['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tgf0qk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g0ktf['__onNull'] = function () {}, g0ktf['play'] = function () {
      this['isStopped'] = ![], igtkfu['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g0ktf['stop'] = function () {
      this['isStopped'] = !![], igtkfu['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (dumi6['_null'] != undefined) this['_audio']['onEnded'](dumi6['_null']);else try {
        this['_audio']['onEnded'](null), dumi6['_null'] = null;
      } catch (vyl7p$) {
        console['warn']('[wxmini] stop:' + vyl7p$), this['_audio']['onEnded'](ehidm['bind'](this['__onNull'], this)), dumi6['_null'] = ehidm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g0ktf['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g0ktf['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], igtkfu['addChannel'](this), this['_audio']['play']();
    }, dufet(0x0, g0ktf, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), dufet(0x0, g0ktf, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), dufet(0x0, g0ktf, 'volume', function () {
      return 0x1;
    }, function (guktf) {}), dumi6['_null'] = undefined, dumi6;
  }(pr$v7w);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hmdi in Laya) {
    var mjehn = Laya[hmdi];mjehn && mjehn['__isclass'] && (exports[hmdi] = mjehn);
  }
});