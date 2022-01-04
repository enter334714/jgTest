var W = wx.$l;
(function (window, document, x8y4) {
  var _x4yn0 = x8y4['un'],
      ov1ge = x8y4['uns'],
      ab$sd2 = x8y4['static'],
      s$db8 = x8y4['class'],
      s$24d = x8y4['getset'],
      lkjq = x8y4['__newvec'],
      n4y_0x = laya['utils']['Browser'],
      bs2a$ = laya['events']['Event'],
      eo17g = laya['events']['EventDispatcher'],
      hzajkb = laya['resource']['HTMLImage'],
      g71vu = laya['utils']['Handler'],
      bazhjk = laya['display']['Input'],
      s$_48 = laya['net']['Loader'],
      lhkqzj = laya['maths']['Matrix'],
      ue6g = laya['renders']['Render'],
      cym = laya['utils']['RunDriver'],
      b2k$ = laya['media']['Sound'],
      qjaz = laya['media']['SoundChannel'],
      hkjbaz = laya['media']['SoundManager'],
      _x48s = laya['display']['Stage'],
      qfltz = laya['net']['URL'],
      azkhjb = laya['utils']['Utils'],
      o75fv9 = function () {
    function f5v97o() {}return s$db8(f5v97o, 'laya.wx.mini.MiniAdpter'), f5v97o['getJson'] = function (nx_0) {
      return JSON['parse'](nx_0);
    }, f5v97o['init'] = function (zhlqt, f975v) {
      zhlqt === void 0x0 && (zhlqt = ![]), f975v === void 0x0 && (f975v = ![]);if (f5v97o['_inited']) return;f5v97o['window'] = window;if (f5v97o['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;f5v97o['_inited'] = !![], f5v97o['isZiYu'] = f975v, f5v97o['isPosMsgYu'] = zhlqt, f5v97o['EnvConfig'] = {}, !f5v97o['isZiYu'] && (x_n0y3['setNativeFileDir']('/layaairGame'), x_n0y3['existDir'](x_n0y3['fileNativeDir'], g71vu['create'](f5v97o, f5v97o['onMkdirCallBack']))), f5v97o['window']['focus'] = function () {}, x8y4['getUrlPath'] = function () {}, f5v97o['window']['logtime'] = function (lo9ft5) {}, f5v97o['window']['alertTimeLog'] = function (qztf) {}, f5v97o['window']['resetShareInfo'] = function () {}, f5v97o['window']['CanvasRenderingContext2D'] = function () {}, f5v97o['window']['CanvasRenderingContext2D']['prototype'] = f5v97o['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f5v97o['window']['document']['body']['appendChild'] = function () {}, f5v97o['EnvConfig']['pixelRatioInt'] = 0x0, cym['getPixelRatio'] = f5v97o['pixelRatio'], f5v97o['_preCreateElement'] = n4y_0x['createElement'], n4y_0x['createElement'] = f5v97o['createElement'], cym['createShaderCondition'] = f5v97o['createShaderCondition'], azkhjb['parseXMLFromString'] = f5v97o['parseXMLFromString'], bazhjk['_createInputElement'] = goe1['_createInputElement'], f5v97o['EnvConfig']['load'] = s$_48['prototype']['load'], s$_48['prototype']['load'] = jklq['prototype']['load'], f5v97o['isZiYu'] && zhlqt && wx['onMessage'](function (bdk2j) {
        bdk2j['isLoad'] && (x_n0y3['ziyuFileData'][bdk2j['url']] = bdk2j['data']);
      });
    }, f5v97o['onMkdirCallBack'] = function (o9vf71, $ds4_) {
      if (!o9vf71) x_n0y3['filesListObj'] = JSON['parse']($ds4_['data']);
    }, f5v97o['pixelRatio'] = function () {
      if (!f5v97o['EnvConfig']['pixelRatioInt']) try {
        var ci3m0 = wx['getSystemInfoSync']();return f5v97o['EnvConfig']['pixelRatioInt'] = ci3m0['pixelRatio'], ci3m0 = ci3m0, ci3m0['pixelRatio'];
      } catch (d2s$4) {}return f5v97o['EnvConfig']['pixelRatioInt'];
    }, f5v97o['createElement'] = function (qlf9t) {
      if (qlf9t == 'canvas') {
        var $_8ns4;return f5v97o['idx'] == 0x1 ? f5v97o['isZiYu'] ? ($_8ns4 = sharedCanvas, $_8ns4['style'] = {}) : $_8ns4 = window['canvas'] : $_8ns4 = window['wx']['createCanvas'](), f5v97o['idx']++, $_8ns4;
      } else {
        if (qlf9t == 'textarea' || qlf9t == 'input') return f5v97o['onCreateInput'](qlf9t);else {
          if (qlf9t == 'div') {
            var hj2ak = f5v97o['_preCreateElement'](qlf9t);return hj2ak['contains'] = function (yxn48_) {
              return null;
            }, hj2ak['removeChild'] = function (v7o95) {}, hj2ak;
          } else return f5v97o['_preCreateElement'](qlf9t);
        }
      }
    }, f5v97o['onCreateInput'] = function (oft9l) {
      var lqjzht = f5v97o['_preCreateElement'](oft9l);return lqjzht['focus'] = goe1['wxinputFocus'], lqjzht['blur'] = goe1['wxinputblur'], lqjzht['style'] = {}, lqjzht['value'] = 0x0, lqjzht['parentElement'] = {}, lqjzht['placeholder'] = {}, lqjzht['type'] = {}, lqjzht['setColor'] = function (rmcw) {}, lqjzht['setType'] = function (l5t9o) {}, lqjzht['setFontFace'] = function (sx8_) {}, lqjzht['addEventListener'] = function (x0nr) {}, lqjzht['contains'] = function (qz5lth) {
        return null;
      }, lqjzht['removeChild'] = function (qajk) {}, lqjzht;
    }, f5v97o['createShaderCondition'] = function (crim30) {
      var tof9l5 = this,
          o1v7f9 = function () {
        var jqltz = crim30;return tof9l5[crim30['replace']('this.', '')];
      };return o1v7f9;
    }, f5v97o['EnvConfig'] = null, f5v97o['window'] = null, f5v97o['_preCreateElement'] = null, f5v97o['_inited'] = ![], f5v97o['wxRequest'] = null, f5v97o['systemInfo'] = null, f5v97o['version'] = '0.0.1', f5v97o['isZiYu'] = ![], f5v97o['isPosMsgYu'] = ![], f5v97o['parseXMLFromString'] = function (_4xy0) {
      var jlhq, g1pu;_4xy0 = _4xy0['replace'](/>\s+</g, '><');try {
        jlhq = new window['Parser']['DOMParser']()['parseFromString'](_4xy0, 'text/xml');
      } catch (_4$8sd) {
        throw '需要引入xml解析库文件';
      }return jlhq;
    }, f5v97o['idx'] = 0x1, f5v97o;
  }(),
      wrmi3 = function () {
    function d_$s4() {}s$db8(d_$s4, 'laya.wx.mini.MiniImage');var d$42s8 = d_$s4['prototype'];return d$42s8['_loadImage'] = function (bak2h) {
      var $824s = this,
          h2jkab = ![];bak2h['indexOf']('layaNativeDir/') == -0x1 && (h2jkab = !![], bak2h = qfltz['formatURL'](bak2h));if (!x_n0y3['getFileInfo'](bak2h)) {
        if (bak2h['indexOf']('http://') != -0x1 || bak2h['indexOf']('https://') != -0x1) x_n0y3['downImg'](bak2h, new g71vu(d_$s4, d_$s4['onDownImgCallBack'], [bak2h, $824s]), bak2h);else d_$s4['onCreateImage'](bak2h, $824s, !![]);
      } else d_$s4['onCreateImage'](bak2h, $824s, !h2jkab);
    }, d_$s4['onDownImgCallBack'] = function (s84$, hljkqz, $d2bak) {
      if (!$d2bak) d_$s4['onCreateImage'](s84$, hljkqz);else hljkqz['onError'](null);
    }, d_$s4['onCreateImage'] = function (v17e9, ftzql, $2sbad) {
      $2sbad === void 0x0 && ($2sbad = ![]);var ir0m;if (!$2sbad) {
        var _0xn3 = x_n0y3['getFileInfo'](v17e9),
            dabjk2 = _0xn3['md5'];ir0m = x_n0y3['getFileNativePath'](dabjk2);
      } else ir0m = v17e9;if (ftzql['imgCache'] == null) ftzql['imgCache'] = {};var d2asb;function kjzhab() {
        d2asb['onload'] = null, d2asb['onerror'] = null, delete ftzql['imgCache'][v17e9];
      };var tl9q5f = function () {
        kjzhab(), ftzql['onLoaded'](d2asb);
      },
          s8x_ = function () {
        kjzhab(), ftzql['event']('error', 'Load image failed');
      };ftzql['_type'] == 'nativeimage' ? (d2asb = new n4y_0x['window']['Image'](), d2asb['crossOrigin'] = '', d2asb['onload'] = tl9q5f, d2asb['onerror'] = s8x_, d2asb['src'] = ir0m, ftzql['imgCache'][v17e9] = d2asb) : new hzajkb['create'](ir0m, { 'onload': tl9q5f, 'onerror': s8x_, 'onCreate': function (kzaq) {
          d2asb = kzaq, ftzql['imgCache'][v17e9] = kzaq;
        } });
    }, d_$s4;
  }(),
      goe1 = function () {
    function _x8sn() {}return s$db8(_x8sn, 'laya.wx.mini.MiniInput'), _x8sn['_createInputElement'] = function () {
      bazhjk['_initInput'](bazhjk['area'] = n4y_0x['createElement']('textarea')), bazhjk['_initInput'](bazhjk['input'] = n4y_0x['createElement']('input')), bazhjk['inputContainer'] = n4y_0x['createElement']('div'), bazhjk['inputContainer']['style']['position'] = 'absolute', bazhjk['inputContainer']['style']['zIndex'] = 0x186a0, n4y_0x['container']['appendChild'](bazhjk['inputContainer']), bazhjk['inputContainer']['setPos'] = function (tfq5zl, x48_s) {
        bazhjk['inputContainer']['style']['left'] = tfq5zl + 'px', bazhjk['inputContainer']['style']['top'] = x48_s + 'px';
      }, x8y4['stage']['on']('resize', null, _x8sn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e1vgu) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), hkjbaz['_soundClass'] = hz5qt, hkjbaz['_musicClass'] = hz5qt;
    }, _x8sn['_onStageResize'] = function () {
      var ljqkzh = x8y4['stage']['_canvasTransform']['identity']();ljqkzh['scale'](n4y_0x['width'] / ue6g['canvas']['width'] / cym['getPixelRatio'](), n4y_0x['height'] / ue6g['canvas']['height'] / cym['getPixelRatio']());
    }, _x8sn['wxinputFocus'] = function (sd8$b2) {
      var _3ny0x = bazhjk['inputElement']['target'];if (_3ny0x && !_3ny0x['editable']) return;o75fv9['window']['wx']['offKeyboardConfirm'](), o75fv9['window']['wx']['offKeyboardInput'](), o75fv9['window']['wx']['showKeyboard']({ 'defaultValue': _3ny0x['text'], 'maxLength': _3ny0x['maxChars'], 'multiple': _3ny0x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ov91f7) {}, 'fail': function ($a2) {} }), o75fv9['window']['wx']['onKeyboardConfirm'](function (p1u6ge) {
        var yrc0 = p1u6ge ? p1u6ge['value'] : '';_3ny0x['text'] = yrc0, _3ny0x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), o75fv9['window']['wx']['onKeyboardInput'](function (_nx03y) {
        var $s28b = _nx03y ? _nx03y['value'] : '';if (!_3ny0x['multiline']) {
          if ($s28b['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_3ny0x['text'] = $s28b, _3ny0x['event']('input');
      });
    }, _x8sn['inputEnter'] = function () {
      bazhjk['inputElement']['target']['focus'] = ![];
    }, _x8sn['wxinputblur'] = function () {
      _x8sn['hideKeyboard']();
    }, _x8sn['hideKeyboard'] = function () {
      o75fv9['window']['wx']['offKeyboardConfirm'](), o75fv9['window']['wx']['offKeyboardInput'](), o75fv9['window']['wx']['hideKeyboard']({ 'success': function (n0ry3x) {
          console['log']('隐藏键盘');
        }, 'fail': function (zqj) {
          console['log']('隐藏键盘出错:' + (zqj ? zqj['errMsg'] : ''));
        } });
    }, _x8sn;
  }(),
      jklq = function () {
    function e91v7() {}s$db8(e91v7, 'laya.wx.mini.MiniLoader');var x84ns_ = e91v7['prototype'];return x84ns_['load'] = function (tof59l, ny4x, qhzkaj, kjhqza, bkad) {
      qhzkaj === void 0x0 && (qhzkaj = !![]), bkad === void 0x0 && (bkad = ![]);var jkqhza = this;jkqhza['_url'] = tof59l;if (tof59l['indexOf']('data:image') === 0x0) jkqhza['_type'] = ny4x = 'image';else jkqhza['_type'] = ny4x || (ny4x = jkqhza['getTypeFromUrl'](tof59l));jkqhza['_cache'] = qhzkaj, jkqhza['_data'] = null;var f5tq = 'ascii';if (tof59l['indexOf']('.fnt') != -0x1) f5tq = 'utf8';else ny4x == 'arraybuffer' && (f5tq = '');;var $basd = azkhjb['getFileExtension'](tof59l);if (e91v7['_fileTypeArr']['indexOf']($basd) != -0x1) o75fv9['EnvConfig']['load']['call'](this, tof59l, ny4x, qhzkaj, kjhqza, bkad);else {
        if (!x_n0y3['getFileInfo'](tof59l)) {
          if (tof59l['indexOf']('layaNativeDir/') != -0x1) {
            if (o75fv9['isZiYu']) {
              var f95t7o = x_n0y3['ziyuFileData'][tof59l];jkqhza['onLoaded'](f95t7o);return;
            } else {
              cosnole['log']('read read'), x_n0y3['read'](tof59l, f5tq, new g71vu(e91v7, e91v7['onReadNativeCallBack'], [f5tq, tof59l, ny4x, qhzkaj, kjhqza, bkad, jkqhza]));return;
            }
          }if (qfltz['rootPath'] == '') var _0x4n = tof59l;else _0x4n = tof59l['split'](qfltz['rootPath'])[0x0];tof59l['indexOf']('http://') != -0x1 || tof59l['indexOf']('https://') != -0x1 ? o75fv9['EnvConfig']['load']['call'](jkqhza, tof59l, ny4x, qhzkaj, kjhqza, bkad) : x_n0y3['readFile'](_0x4n, f5tq, new g71vu(e91v7, e91v7['onReadNativeCallBack'], [f5tq, tof59l, ny4x, qhzkaj, kjhqza, bkad, jkqhza]), tof59l);
        } else o75fv9['EnvConfig']['load']['call'](this, tof59l, ny4x, qhzkaj, kjhqza, bkad);
      }
    }, x84ns_['resMgrLoad'] = function (hkzbaj, zkjhaq, tf95q, zakbh, j2b, eu16gv, lhtqjz) {
      tf95q === void 0x0 && (tf95q = 0x0), zakbh === void 0x0 && (zakbh = ![]), j2b === void 0x0 && (j2b = ![]), eu16gv === void 0x0 && (eu16gv = 0x0), lhtqjz === void 0x0 && (lhtqjz = 0x3), hkzbaj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hkzbaj), o75fv9['EnvConfig']['resMgrLoad'](hkzbaj, (kzqaj, ahkjq, a2kbd$) => {
        e91v7['prototype']['resMgrLoadCallBack'](kzqaj, ahkjq, a2kbd$, zkjhaq);
      }, tf95q, zakbh, j2b, eu16gv, lhtqjz);
    }, x84ns_['resMgrLoadCallBack'] = function (ofv59, d$_s48, t5zhql, $_ns) {
      console['log']('buff:::', ofv59, t5zhql, x_n0y3['fileNativeDir'] + '///' + x_n0y3['fileListName']), $_ns(ofv59, d$_s48, t5zhql);
    }, x84ns_['clearRes'] = function (ja2bdk, sd2$8b) {
      sd2$8b === void 0x0 && (sd2$8b = ![]);var lo5f = this;lo5f['clearRes'](ja2bdk, sd2$8b);var bad$2k = x_n0y3['getFileInfo'](ja2bdk);if (bad$2k && (ja2bdk['indexOf']('http://') != -0x1 || ja2bdk['indexOf']('https://') != -0x1)) {
        var u1eg7v = bad$2k['md5'],
            ny84_ = x_n0y3['getFileNativePath'](u1eg7v);x_n0y3['remove'](ny84_);
      }
    }, e91v7['onReadNativeCallBack'] = function (y8_4x, j2bda, nx0r3, of17v, n_$48s, jhtlq, x_s8, jtqzh, v5of97) {
      of17v === void 0x0 && (of17v = !![]), jhtlq === void 0x0 && (jhtlq = ![]), jtqzh === void 0x0 && (jtqzh = 0x0);if (!jtqzh) {
        var g1e6up;if (nx0r3 == 'json' || nx0r3 == 'atlas') g1e6up = o75fv9['getJson'](v5of97['data']);else nx0r3 == 'xml' ? g1e6up = azkhjb['parseXMLFromString'](v5of97['data']) : g1e6up = v5of97['data'];x_s8['onLoaded'](g1e6up), !o75fv9['isZiYu'] && o75fv9['isPosMsgYu'] && nx0r3 != 'arraybuffer' && wx['postMessage']({ 'url': j2bda, 'data': g1e6up, 'isLoad': !![] });
      } else jtqzh == 0x1 && o75fv9['EnvConfig']['load']['call'](x_s8, j2bda, nx0r3, of17v, n_$48s, jhtlq);
    }, ab$sd2(e91v7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), e91v7;
  }(),
      x_n0y3 = function (x30rc) {
    function v95o() {
      v95o['__super']['call'](this);;
    }return s$db8(v95o, 'laya.wx.mini.MiniFileMgr', x30rc), v95o['isLoadFile'] = function (ahkz) {
      return v95o['_fileTypeArr']['indexOf'](ahkz) != -0x1 ? !![] : ![];
    }, v95o['getFileInfo'] = function (m3rc0) {
      var ug6p = m3rc0['split']('?')[0x0],
          gv1eu7 = v95o['filesListObj'][ug6p];if (gv1eu7 == null) return null;else return gv1eu7;return null;
    }, v95o['onFileUpdate'] = function (qzhl, i3mrc0) {
      var db2ka$ = qzhl['split']('/'),
          qlhztj = db2ka$[db2ka$['length'] - 0x1],
          kbd$a = v95o['getFileInfo'](i3mrc0);if (kbd$a == null) v95o['onSaveFile'](i3mrc0, qlhztj);else {
        if (kbd$a['readyUrl'] != i3mrc0) v95o['remove'](qlhztj, i3mrc0);
      }
    }, v95o['exits'] = function (jkqa, gveu7) {
      var jhkb2a = v95o['getFileNativePath'](jkqa);v95o['fs']['getFileInfo']({ 'filePath': jhkb2a, 'success': function (v579o) {
          gveu7 != null && gveu7['runWith']([0x0, v579o]);
        }, 'fail': function (ns4_x8) {
          gveu7 != null && gveu7['runWith']([0x1, ns4_x8]);
        } });
    }, v95o['read'] = function (ft5ol, zl5, aj2b, nr30) {
      zl5 === void 0x0 && (zl5 = 'ascill'), nr30 === void 0x0 && (nr30 = '');var _0y4nx;nr30 != '' ? _0y4nx = v95o['getFileNativePath'](ft5ol) : _0y4nx = ft5ol, v95o['fs']['readFile']({ 'filePath': _0y4nx, 'encoding': zl5, 'success': function (nxy04_) {
          aj2b != null && aj2b['runWith']([0x0, nxy04_]);
        }, 'fail': function (f9t75) {
          if (f9t75 && nr30 != '') v95o['down'](nr30, zl5, aj2b, nr30);else aj2b != null && aj2b['runWith']([0x1]);
        } });
    }, v95o['readNativeFile'] = function (ve, mi3c0) {
      v95o['fs']['readFile']({ 'filePath': ve, 'encoding': '', 'success': function (y_40nx) {
          mi3c0 != null && mi3c0['runWith']([0x0]);
        }, 'fail': function (sn_x84) {
          mi3c0 != null && mi3c0['runWith']([0x1]);
        } });
    }, v95o['down'] = function (mcr3i, s_8d$4, x0rny3, r03xn) {
      s_8d$4 === void 0x0 && (s_8d$4 = 'ascill'), r03xn === void 0x0 && (r03xn = '');var s8x_n = v95o['getFileNativePath'](r03xn),
          d2s = v95o['wxdown']({ 'url': mcr3i, 'filePath': s8x_n, 'success': function (s842$) {
          if (s842$['statusCode'] === 0xc8) v95o['readFile'](s842$['filePath'], s_8d$4, x0rny3, r03xn);
        }, 'fail': function (v1ueg7) {
          x0rny3 != null && x0rny3['runWith']([0x1, v1ueg7]);
        } });d2s['onProgressUpdate'](function (n4x0y) {
        x0rny3 != null && x0rny3['runWith']([0x2, n4x0y['progress']]);
      });
    }, v95o['readFile'] = function (geu61p, s2b$, vfo971, c0ryx3) {
      s2b$ === void 0x0 && (s2b$ = 'ascill'), c0ryx3 === void 0x0 && (c0ryx3 = ''), v95o['fs']['readFile']({ 'filePath': geu61p, 'encoding': s2b$, 'success': function (jhztq) {
          if (geu61p['indexOf']('http://') != -0x1 || geu61p['indexOf']('https://') != -0x1) v95o['onFileUpdate'](geu61p, c0ryx3);vfo971 != null && vfo971['runWith']([0x0, jhztq]);
        }, 'fail': function (jhab2) {
          if (jhab2) vfo971 != null && vfo971['runWith']([0x1, jhab2]);
        } });
    }, v95o['downImg'] = function (s4d8$_, kbazj, ve7o9) {
      ve7o9 === void 0x0 && (ve7o9 = '');var tflzq = v95o['wxdown']({ 'url': s4d8$_, 'success': function (jzak) {
          jzak['statusCode'] === 0xc8 && v95o['copyFile'](jzak['tempFilePath'], ve7o9, kbazj);
        }, 'fail': function (n$4s_8) {
          kbazj != null && kbazj['runWith']([0x1, n$4s_8]);
        } });
    }, v95o['copyFile'] = function (r0i3c, f97o5, jbkzh) {
      var xy8n4 = r0i3c['split']('/'),
          _48s = xy8n4[xy8n4['length'] - 0x1],
          s48xn = f97o5['split']('?')[0x0],
          _s8n$4 = v95o['getFileInfo'](f97o5),
          ve7o19 = v95o['getFileNativePath'](_48s);v95o['fs']['copyFile']({ 'srcPath': r0i3c, 'destPath': ve7o19, 'success': function (y0_nx) {
          if (!_s8n$4) v95o['onSaveFile'](f97o5, _48s), jbkzh != null && jbkzh['runWith']([0x0]);else {
            if (_s8n$4['readyUrl'] != f97o5) v95o['remove'](_48s, f97o5, jbkzh);
          }
        }, 'fail': function (n3_0yx) {
          jbkzh != null && jbkzh['runWith']([0x1, n3_0yx]);
        } });
    }, v95o['getFileNativePath'] = function (_30nxy) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _30nxy;
    }, v95o['remove'] = function (bja2kd, cr0, abzhj) {
      cr0 === void 0x0 && (cr0 = '');var zqja = v95o['getFileInfo'](cr0),
          d$28bs = v95o['getFileNativePath'](zqja['md5']);x8y4['loader']['clearRes'](zqja['readyUrl']), v95o['fs']['unlink']({ 'filePath': d$28bs, 'success': function (n30_x) {
          if (cr0 != '') v95o['onSaveFile'](cr0, bja2kd);abzhj != null && abzhj['runWith']([0x0]);
        }, 'fail': function (e6guv) {} });
    }, v95o['onSaveFile'] = function (g1upe, c0mr3i) {
      var _sn4x8 = g1upe['split']('?')[0x0];v95o['filesListObj'][_sn4x8] = { 'md5': c0mr3i, 'readyUrl': g1upe }, v95o['fs']['writeFile']({ 'filePath': v95o['fileNativeDir'] + '/' + v95o['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v95o['filesListObj']), 'success': function (d_s8) {
          console['log']('写入测试测试成功：', d_s8);
        }, 'fail': function (jqhlk) {
          console['log']('写入测试测试失败：', jqhlk);
        } });
    }, v95o['existDir'] = function ($sn_4, s24d8) {
      v95o['fs']['mkdir']({ 'dirPath': $sn_4, 'success': function (rwi3cm) {
          s24d8 != null && s24d8['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mrc3y) {
          if (mrc3y['errMsg']['indexOf']('file already exists') != -0x1) v95o['readSync'](v95o['fileListName'], 'utf8', s24d8);else s24d8 != null && s24d8['runWith']([0x1, mrc3y]);
        } });
    }, v95o['readSync'] = function (v1e7og, hkjb2a, lo59ft, v7oeg1) {
      hkjb2a === void 0x0 && (hkjb2a = 'ascill'), v7oeg1 === void 0x0 && (v7oeg1 = '');var zjhqk = v95o['getFileNativePath'](v1e7og),
          tqzfl5;try {
        tqzfl5 = v95o['fs']['readFileSync'](zjhqk), lo59ft != null && lo59ft['runWith']([0x0, { 'data': tqzfl5 }]);
      } catch (egv7o) {
        lo59ft != null && lo59ft['runWith']([0x1]);
      }
    }, v95o['readCache'] = function () {}, v95o['writeCache'] = function (ns48_x) {
      var t5o9lf = readyUrl['split']('?')[0x0];v95o['filesListObj'][t5o9lf] = { 'md5': md5Name, 'readyUrl': readyUrl }, v95o['fs']['writeFile']({ 'filePath': v95o['fileNativeDir'] + '/' + v95o['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v95o['filesListObj']), 'success': function (qthzj) {}, 'fail': function (_y8x4n) {} });
    }, v95o['setNativeFileDir'] = function (l9ft5) {
      v95o['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + l9ft5;
    }, v95o['filesListObj'] = {}, v95o['fileNativeDir'] = null, v95o['fileListName'] = 'layaairfiles.txt', v95o['ziyuFileData'] = {}, ab$sd2(v95o, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v95o;
  }(eo17g),
      hz5qt = function (lq5htz) {
    function f9ql5t() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], f9ql5t['__super']['call'](this), this['_sound'] = f9ql5t['_createSound']();
    }s$db8(f9ql5t, 'laya.wx.mini.MiniSound', lq5htz);var hqjzlt = f9ql5t['prototype'];return hqjzlt['load'] = function (pg6e1) {
      var sn$_84 = this;pg6e1 = qfltz['formatURL'](pg6e1), this['url'] = pg6e1;if (f9ql5t['_audioCache'][pg6e1]) {
        this['event']('complete');return;
      }function jbhaz() {
        if (f9ql5t['_null'] != undefined) sn$_84['_sound']['onCanplay'](f9ql5t['_null']), sn$_84['_sound']['onError'](f9ql5t['_null']);else try {
          sn$_84['_sound']['onCanplay'](null), sn$_84['_sound']['onError'](null), f9ql5t['_null'] = null;
        } catch (bakd2) {
          console['warn']('[wxmini] _clearSound:' + bakd2), sn$_84['_sound']['onCanplay'](o17fv9), sn$_84['_sound']['onError'](o17fv9), f9ql5t['_null'] = o17fv9;
        }
      }function o75() {
        jbhaz(), k2ab['loaded'] = !![], k2ab['event']('complete'), f9ql5t['_audioCache'][k2ab['url']] = k2ab;
      }function _d$8s4(og17e) {
        console['error']('errCode=' + og17e['errCode'] + '  errMsg=' + og17e['errMsg']), jbhaz(), k2ab['event']('error');
      }function o17fv9() {}this['_sound']['onCanplay'](o75), this['_sound']['onError'](_d$8s4), this['_sound']['src'] = pg6e1;var k2ab = this;
    }, hqjzlt['play'] = function (tqlf95, zftl5q) {
      tqlf95 === void 0x0 && (tqlf95 = 0x0), zftl5q === void 0x0 && (zftl5q = 0x0);var s_4$d;if (this['url'] == hkjbaz['_tMusic']) {
        if (!f9ql5t['_musicAudio']) f9ql5t['_musicAudio'] = f9ql5t['_createSound']();s_4$d = f9ql5t['_musicAudio'];
      } else s_4$d = f9ql5t['_createSound']();s_4$d['src'] = this['url'];var d8_s4 = new lzfq5(s_4$d);return d8_s4['url'] = this['url'], d8_s4['loops'] = zftl5q, d8_s4['startTime'] = tqlf95, d8_s4['play'](), hkjbaz['addChannel'](d8_s4), d8_s4;
    }, hqjzlt['dispose'] = function () {
      var e1g = f9ql5t['_audioCache'][this['url']];e1g && (e1g['src'] = '', delete f9ql5t['_audioCache'][this['url']]);
    }, s$24d(0x0, hqjzlt, 'duration', function () {
      return this['_sound']['duration'];
    }), f9ql5t['_createSound'] = function () {
      return f9ql5t['_id']++, o75fv9['window']['wx']['createInnerAudioContext']();
    }, f9ql5t['_musicAudio'] = null, f9ql5t['_id'] = 0x0, f9ql5t['_audioCache'] = {}, f9ql5t['_null'] = undefined, f9ql5t;
  }(eo17g),
      lzfq5 = function (d2s$48) {
    function n_x0y(bd2ka$) {
      this['_audio'] = null, this['_onEnd'] = null, n_x0y['__super']['call'](this), this['_audio'] = bd2ka$, this['_onEnd'] = azkhjb['bind'](this['__onEnd'], this), bd2ka$['onEnded'](this['_onEnd']);
    }s$db8(n_x0y, 'laya.wx.mini.MiniSoundChannel', d2s$48);var ltqjh = n_x0y['prototype'];return ltqjh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x8y4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ltqjh['__onNull'] = function () {}, ltqjh['play'] = function () {
      this['isStopped'] = ![], hkjbaz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ltqjh['stop'] = function () {
      this['isStopped'] = !![], hkjbaz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (n_x0y['_null'] != undefined) this['_audio']['onEnded'](n_x0y['_null']);else try {
        this['_audio']['onEnded'](null), n_x0y['_null'] = null;
      } catch (h2bkja) {
        console['warn']('[wxmini] stop:' + h2bkja), this['_audio']['onEnded'](azkhjb['bind'](this['__onNull'], this)), n_x0y['_null'] = azkhjb['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ltqjh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ltqjh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], hkjbaz['addChannel'](this), this['_audio']['play']();
    }, s$24d(0x0, ltqjh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), s$24d(0x0, ltqjh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), s$24d(0x0, ltqjh, 'volume', function () {
      return 0x1;
    }, function (qzkjha) {}), n_x0y['_null'] = undefined, n_x0y;
  }(qjaz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _4$s8n in Laya) {
    var dsb2$8 = Laya[_4$s8n];dsb2$8 && dsb2$8['__isclass'] && (exports[_4$s8n] = dsb2$8);
  }
});