var W = wx.$l;
(function (window, document, hqzjka) {
  var v1g6 = hqzjka['un'],
      hjakzq = hqzjka['uns'],
      v9o5f7 = hqzjka['static'],
      zhltq5 = hqzjka['class'],
      f79vo1 = hqzjka['getset'],
      ny3_ = hqzjka['__newvec'],
      dbka2 = laya['utils']['Browser'],
      v19o7 = laya['events']['Event'],
      s8n$_4 = laya['events']['EventDispatcher'],
      oe7v9 = laya['resource']['HTMLImage'],
      djk2ab = laya['utils']['Handler'],
      $ad2s = laya['display']['Input'],
      n0yx4_ = laya['net']['Loader'],
      kb2d = laya['maths']['Matrix'],
      d84$ = laya['renders']['Render'],
      jzbhak = laya['utils']['RunDriver'],
      r3y0xn = laya['media']['Sound'],
      fvo1 = laya['media']['SoundChannel'],
      hbaz = laya['media']['SoundManager'],
      v1eu7g = laya['display']['Stage'],
      $84n = laya['net']['URL'],
      hjabz = laya['utils']['Utils'],
      gvu1e = function () {
    function qhtlz() {}return zhltq5(qhtlz, 'laya.wx.mini.MiniAdpter'), qhtlz['getJson'] = function (d2) {
      return JSON['parse'](d2);
    }, qhtlz['init'] = function (s$n8_, v5fo97) {
      s$n8_ === void 0x0 && (s$n8_ = ![]), v5fo97 === void 0x0 && (v5fo97 = ![]);if (qhtlz['_inited']) return;qhtlz['window'] = window;if (qhtlz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qhtlz['_inited'] = !![], qhtlz['isZiYu'] = v5fo97, qhtlz['isPosMsgYu'] = s$n8_, qhtlz['EnvConfig'] = {}, !qhtlz['isZiYu'] && (z5qflt['setNativeFileDir']('/layaairGame'), z5qflt['existDir'](z5qflt['fileNativeDir'], djk2ab['create'](qhtlz, qhtlz['onMkdirCallBack']))), qhtlz['window']['focus'] = function () {}, hqzjka['getUrlPath'] = function () {}, qhtlz['window']['logtime'] = function (ov795f) {}, qhtlz['window']['alertTimeLog'] = function (x_8ny) {}, qhtlz['window']['resetShareInfo'] = function () {}, qhtlz['window']['CanvasRenderingContext2D'] = function () {}, qhtlz['window']['CanvasRenderingContext2D']['prototype'] = qhtlz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qhtlz['window']['document']['body']['appendChild'] = function () {}, qhtlz['EnvConfig']['pixelRatioInt'] = 0x0, jzbhak['getPixelRatio'] = qhtlz['pixelRatio'], qhtlz['_preCreateElement'] = dbka2['createElement'], dbka2['createElement'] = qhtlz['createElement'], jzbhak['createShaderCondition'] = qhtlz['createShaderCondition'], hjabz['parseXMLFromString'] = qhtlz['parseXMLFromString'], $ad2s['_createInputElement'] = hjzlqk['_createInputElement'], qhtlz['EnvConfig']['load'] = n0yx4_['prototype']['load'], n0yx4_['prototype']['load'] = o1vf7['prototype']['load'], qhtlz['isZiYu'] && s$n8_ && wx['onMessage'](function (tlqhjz) {
        tlqhjz['isLoad'] && (z5qflt['ziyuFileData'][tlqhjz['url']] = tlqhjz['data']);
      });
    }, qhtlz['onMkdirCallBack'] = function (_x4ns8, qzhtj) {
      if (!_x4ns8) z5qflt['filesListObj'] = JSON['parse'](qzhtj['data']);
    }, qhtlz['pixelRatio'] = function () {
      if (!qhtlz['EnvConfig']['pixelRatioInt']) try {
        var o5t97 = wx['getSystemInfoSync']();return qhtlz['EnvConfig']['pixelRatioInt'] = o5t97['pixelRatio'], o5t97 = o5t97, o5t97['pixelRatio'];
      } catch (f5ztl) {}return qhtlz['EnvConfig']['pixelRatioInt'];
    }, qhtlz['createElement'] = function (lhkqj) {
      if (lhkqj == 'canvas') {
        var ds$84;return qhtlz['idx'] == 0x1 ? qhtlz['isZiYu'] ? (ds$84 = sharedCanvas, ds$84['style'] = {}) : ds$84 = window['canvas'] : ds$84 = window['wx']['createCanvas'](), qhtlz['idx']++, ds$84;
      } else {
        if (lhkqj == 'textarea' || lhkqj == 'input') return qhtlz['onCreateInput'](lhkqj);else {
          if (lhkqj == 'div') {
            var of9v17 = qhtlz['_preCreateElement'](lhkqj);return of9v17['contains'] = function (tfl5zq) {
              return null;
            }, of9v17['removeChild'] = function (j2kba) {}, of9v17;
          } else return qhtlz['_preCreateElement'](lhkqj);
        }
      }
    }, qhtlz['onCreateInput'] = function (h5ltz) {
      var x3n_0y = qhtlz['_preCreateElement'](h5ltz);return x3n_0y['focus'] = hjzlqk['wxinputFocus'], x3n_0y['blur'] = hjzlqk['wxinputblur'], x3n_0y['style'] = {}, x3n_0y['value'] = 0x0, x3n_0y['parentElement'] = {}, x3n_0y['placeholder'] = {}, x3n_0y['type'] = {}, x3n_0y['setColor'] = function (a2bjdk) {}, x3n_0y['setType'] = function ($2kab) {}, x3n_0y['setFontFace'] = function (t59lfo) {}, x3n_0y['addEventListener'] = function (y_nx40) {}, x3n_0y['contains'] = function (bhja2) {
        return null;
      }, x3n_0y['removeChild'] = function (hzljk) {}, x3n_0y;
    }, qhtlz['createShaderCondition'] = function (pe1g) {
      var xn4y0 = this,
          g6p1u = function () {
        var bha = pe1g;return xn4y0[pe1g['replace']('this.', '')];
      };return g6p1u;
    }, qhtlz['EnvConfig'] = null, qhtlz['window'] = null, qhtlz['_preCreateElement'] = null, qhtlz['_inited'] = ![], qhtlz['wxRequest'] = null, qhtlz['systemInfo'] = null, qhtlz['version'] = '0.0.1', qhtlz['isZiYu'] = ![], qhtlz['isPosMsgYu'] = ![], qhtlz['parseXMLFromString'] = function (jqazh) {
      var y_0nx3, kj2abh;jqazh = jqazh['replace'](/>\s+</g, '><');try {
        y_0nx3 = new window['Parser']['DOMParser']()['parseFromString'](jqazh, 'text/xml');
      } catch (v6uge1) {
        throw '需要引入xml解析库文件';
      }return y_0nx3;
    }, qhtlz['idx'] = 0x1, qhtlz;
  }(),
      ycmr = function () {
    function rcy30m() {}zhltq5(rcy30m, 'laya.wx.mini.MiniImage');var ajhzq = rcy30m['prototype'];return ajhzq['_loadImage'] = function (qzakjh) {
      var ajzhq = this,
          jhtqzl = ![];qzakjh['indexOf']('layaNativeDir/') == -0x1 && (jhtqzl = !![], qzakjh = $84n['formatURL'](qzakjh));if (!z5qflt['getFileInfo'](qzakjh)) {
        if (qzakjh['indexOf']('http://') != -0x1 || qzakjh['indexOf']('https://') != -0x1) z5qflt['downImg'](qzakjh, new djk2ab(rcy30m, rcy30m['onDownImgCallBack'], [qzakjh, ajzhq]), qzakjh);else rcy30m['onCreateImage'](qzakjh, ajzhq, !![]);
      } else rcy30m['onCreateImage'](qzakjh, ajzhq, !jhtqzl);
    }, rcy30m['onDownImgCallBack'] = function (khza, i3m0r, flztq) {
      if (!flztq) rcy30m['onCreateImage'](khza, i3m0r);else i3m0r['onError'](null);
    }, rcy30m['onCreateImage'] = function (v5o7f, y4n_0, mri30c) {
      mri30c === void 0x0 && (mri30c = ![]);var l59tfq;if (!mri30c) {
        var $_n48 = z5qflt['getFileInfo'](v5o7f),
            mw3cri = $_n48['md5'];l59tfq = z5qflt['getFileNativePath'](mw3cri);
      } else l59tfq = v5o7f;if (y4n_0['imgCache'] == null) y4n_0['imgCache'] = {};var hl5tq;function zflqt() {
        hl5tq['onload'] = null, hl5tq['onerror'] = null, delete y4n_0['imgCache'][v5o7f];
      };var qkhjaz = function () {
        zflqt(), y4n_0['onLoaded'](hl5tq);
      },
          nx3 = function () {
        zflqt(), y4n_0['event']('error', 'Load image failed');
      };y4n_0['_type'] == 'nativeimage' ? (hl5tq = new dbka2['window']['Image'](), hl5tq['crossOrigin'] = '', hl5tq['onload'] = qkhjaz, hl5tq['onerror'] = nx3, hl5tq['src'] = l59tfq, y4n_0['imgCache'][v5o7f] = hl5tq) : new oe7v9['create'](l59tfq, { 'onload': qkhjaz, 'onerror': nx3, 'onCreate': function (bad2) {
          hl5tq = bad2, y4n_0['imgCache'][v5o7f] = bad2;
        } });
    }, rcy30m;
  }(),
      hjzlqk = function () {
    function nx_4y8() {}return zhltq5(nx_4y8, 'laya.wx.mini.MiniInput'), nx_4y8['_createInputElement'] = function () {
      $ad2s['_initInput']($ad2s['area'] = dbka2['createElement']('textarea')), $ad2s['_initInput']($ad2s['input'] = dbka2['createElement']('input')), $ad2s['inputContainer'] = dbka2['createElement']('div'), $ad2s['inputContainer']['style']['position'] = 'absolute', $ad2s['inputContainer']['style']['zIndex'] = 0x186a0, dbka2['container']['appendChild']($ad2s['inputContainer']), $ad2s['inputContainer']['setPos'] = function (zl, vo7ge) {
        $ad2s['inputContainer']['style']['left'] = zl + 'px', $ad2s['inputContainer']['style']['top'] = vo7ge + 'px';
      }, hqzjka['stage']['on']('resize', null, nx_4y8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a2kdbj) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), hbaz['_soundClass'] = tflzq, hbaz['_musicClass'] = tflzq;
    }, nx_4y8['_onStageResize'] = function () {
      var qjltzh = hqzjka['stage']['_canvasTransform']['identity']();qjltzh['scale'](dbka2['width'] / d84$['canvas']['width'] / jzbhak['getPixelRatio'](), dbka2['height'] / d84$['canvas']['height'] / jzbhak['getPixelRatio']());
    }, nx_4y8['wxinputFocus'] = function (qajzh) {
      var sab$2 = $ad2s['inputElement']['target'];if (sab$2 && !sab$2['editable']) return;gvu1e['window']['wx']['offKeyboardConfirm'](), gvu1e['window']['wx']['offKeyboardInput'](), gvu1e['window']['wx']['showKeyboard']({ 'defaultValue': sab$2['text'], 'maxLength': sab$2['maxChars'], 'multiple': sab$2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (s$dab) {}, 'fail': function (qzhjak) {} }), gvu1e['window']['wx']['onKeyboardConfirm'](function (qhakj) {
        var ny4x0 = qhakj ? qhakj['value'] : '';sab$2['text'] = ny4x0, sab$2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gvu1e['window']['wx']['onKeyboardInput'](function (lqt5f) {
        var _8n$4s = lqt5f ? lqt5f['value'] : '';if (!sab$2['multiline']) {
          if (_8n$4s['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sab$2['text'] = _8n$4s, sab$2['event']('input');
      });
    }, nx_4y8['inputEnter'] = function () {
      $ad2s['inputElement']['target']['focus'] = ![];
    }, nx_4y8['wxinputblur'] = function () {
      nx_4y8['hideKeyboard']();
    }, nx_4y8['hideKeyboard'] = function () {
      gvu1e['window']['wx']['offKeyboardConfirm'](), gvu1e['window']['wx']['offKeyboardInput'](), gvu1e['window']['wx']['hideKeyboard']({ 'success': function (khajzb) {
          console['log']('隐藏键盘');
        }, 'fail': function (kajzhq) {
          console['log']('隐藏键盘出错:' + (kajzhq ? kajzhq['errMsg'] : ''));
        } });
    }, nx_4y8;
  }(),
      o1vf7 = function () {
    function v5of97() {}zhltq5(v5of97, 'laya.wx.mini.MiniLoader');var hqltjz = v5of97['prototype'];return hqltjz['load'] = function (_n0xy, fvo95, ug7e1, jltqhz, olf5t9) {
      ug7e1 === void 0x0 && (ug7e1 = !![]), olf5t9 === void 0x0 && (olf5t9 = ![]);var qlztf5 = this;qlztf5['_url'] = _n0xy;if (_n0xy['indexOf']('data:image') === 0x0) qlztf5['_type'] = fvo95 = 'image';else qlztf5['_type'] = fvo95 || (fvo95 = qlztf5['getTypeFromUrl'](_n0xy));qlztf5['_cache'] = ug7e1, qlztf5['_data'] = null;var ft7o5 = 'ascii';if (_n0xy['indexOf']('.fnt') != -0x1) ft7o5 = 'utf8';else fvo95 == 'arraybuffer' && (ft7o5 = '');;var akhjq = hjabz['getFileExtension'](_n0xy);if (v5of97['_fileTypeArr']['indexOf'](akhjq) != -0x1) gvu1e['EnvConfig']['load']['call'](this, _n0xy, fvo95, ug7e1, jltqhz, olf5t9);else {
        if (!z5qflt['getFileInfo'](_n0xy)) {
          if (_n0xy['indexOf']('layaNativeDir/') != -0x1) {
            if (gvu1e['isZiYu']) {
              var ue1g7v = z5qflt['ziyuFileData'][_n0xy];qlztf5['onLoaded'](ue1g7v);return;
            } else {
              cosnole['log']('read read'), z5qflt['read'](_n0xy, ft7o5, new djk2ab(v5of97, v5of97['onReadNativeCallBack'], [ft7o5, _n0xy, fvo95, ug7e1, jltqhz, olf5t9, qlztf5]));return;
            }
          }if ($84n['rootPath'] == '') var yx_n48 = _n0xy;else yx_n48 = _n0xy['split']($84n['rootPath'])[0x0];_n0xy['indexOf']('http://') != -0x1 || _n0xy['indexOf']('https://') != -0x1 ? gvu1e['EnvConfig']['load']['call'](qlztf5, _n0xy, fvo95, ug7e1, jltqhz, olf5t9) : z5qflt['readFile'](yx_n48, ft7o5, new djk2ab(v5of97, v5of97['onReadNativeCallBack'], [ft7o5, _n0xy, fvo95, ug7e1, jltqhz, olf5t9, qlztf5]), _n0xy);
        } else gvu1e['EnvConfig']['load']['call'](this, _n0xy, fvo95, ug7e1, jltqhz, olf5t9);
      }
    }, hqltjz['resMgrLoad'] = function (ev1g7, rc3iw, s8n_4, _$8d4s, o9v57f, $8d2, egp1u) {
      s8n_4 === void 0x0 && (s8n_4 = 0x0), _$8d4s === void 0x0 && (_$8d4s = ![]), o9v57f === void 0x0 && (o9v57f = ![]), $8d2 === void 0x0 && ($8d2 = 0x0), egp1u === void 0x0 && (egp1u = 0x3), ev1g7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ev1g7), gvu1e['EnvConfig']['resMgrLoad'](ev1g7, (lf5qt9, lhqztj, lot95) => {
        v5of97['prototype']['resMgrLoadCallBack'](lf5qt9, lhqztj, lot95, rc3iw);
      }, s8n_4, _$8d4s, o9v57f, $8d2, egp1u);
    }, hqltjz['resMgrLoadCallBack'] = function (jlkqzh, bzjakh, o9ltf, s_n8x) {
      console['log']('buff:::', jlkqzh, o9ltf, z5qflt['fileNativeDir'] + '///' + z5qflt['fileListName']), s_n8x(jlkqzh, bzjakh, o9ltf);
    }, hqltjz['clearRes'] = function (_4nxs8, j2ahbk) {
      j2ahbk === void 0x0 && (j2ahbk = ![]);var a$kdb = this;a$kdb['clearRes'](_4nxs8, j2ahbk);var $8ns4_ = z5qflt['getFileInfo'](_4nxs8);if ($8ns4_ && (_4nxs8['indexOf']('http://') != -0x1 || _4nxs8['indexOf']('https://') != -0x1)) {
        var kha2jb = $8ns4_['md5'],
            bsd$82 = z5qflt['getFileNativePath'](kha2jb);z5qflt['remove'](bsd$82);
      }
    }, v5of97['onReadNativeCallBack'] = function (x03ry, vg1o, f9l5to, f5ot, kzhlqj, n4_s, d$2bsa, b$adk2, n8x_4y) {
      f5ot === void 0x0 && (f5ot = !![]), n4_s === void 0x0 && (n4_s = ![]), b$adk2 === void 0x0 && (b$adk2 = 0x0);if (!b$adk2) {
        var ov91f;if (f9l5to == 'json' || f9l5to == 'atlas') ov91f = gvu1e['getJson'](n8x_4y['data']);else f9l5to == 'xml' ? ov91f = hjabz['parseXMLFromString'](n8x_4y['data']) : ov91f = n8x_4y['data'];d$2bsa['onLoaded'](ov91f), !gvu1e['isZiYu'] && gvu1e['isPosMsgYu'] && f9l5to != 'arraybuffer' && wx['postMessage']({ 'url': vg1o, 'data': ov91f, 'isLoad': !![] });
      } else b$adk2 == 0x1 && gvu1e['EnvConfig']['load']['call'](d$2bsa, vg1o, f9l5to, f5ot, kzhlqj, n4_s);
    }, v9o5f7(v5of97, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), v5of97;
  }(),
      z5qflt = function (s48$) {
    function f5lqz() {
      f5lqz['__super']['call'](this);;
    }return zhltq5(f5lqz, 'laya.wx.mini.MiniFileMgr', s48$), f5lqz['isLoadFile'] = function (wcri3) {
      return f5lqz['_fileTypeArr']['indexOf'](wcri3) != -0x1 ? !![] : ![];
    }, f5lqz['getFileInfo'] = function (xyn4_8) {
      var nyx04_ = xyn4_8['split']('?')[0x0],
          n4xy8_ = f5lqz['filesListObj'][nyx04_];if (n4xy8_ == null) return null;else return n4xy8_;return null;
    }, f5lqz['onFileUpdate'] = function (s8_$, b2$8ds) {
      var f579to = s8_$['split']('/'),
          x30yn = f579to[f579to['length'] - 0x1],
          hq5z = f5lqz['getFileInfo'](b2$8ds);if (hq5z == null) f5lqz['onSaveFile'](b2$8ds, x30yn);else {
        if (hq5z['readyUrl'] != b2$8ds) f5lqz['remove'](x30yn, b2$8ds);
      }
    }, f5lqz['exits'] = function (x0_n4, eu71vg) {
      var wi3cmr = f5lqz['getFileNativePath'](x0_n4);f5lqz['fs']['getFileInfo']({ 'filePath': wi3cmr, 'success': function (_xn04) {
          eu71vg != null && eu71vg['runWith']([0x0, _xn04]);
        }, 'fail': function (abhjk2) {
          eu71vg != null && eu71vg['runWith']([0x1, abhjk2]);
        } });
    }, f5lqz['read'] = function (hljk, ynx8, abkjh2, lzq5tf) {
      ynx8 === void 0x0 && (ynx8 = 'ascill'), lzq5tf === void 0x0 && (lzq5tf = '');var ak$b;lzq5tf != '' ? ak$b = f5lqz['getFileNativePath'](hljk) : ak$b = hljk, f5lqz['fs']['readFile']({ 'filePath': ak$b, 'encoding': ynx8, 'success': function (nxy_4) {
          abkjh2 != null && abkjh2['runWith']([0x0, nxy_4]);
        }, 'fail': function (s$8d42) {
          if (s$8d42 && lzq5tf != '') f5lqz['down'](lzq5tf, ynx8, abkjh2, lzq5tf);else abkjh2 != null && abkjh2['runWith']([0x1]);
        } });
    }, f5lqz['readNativeFile'] = function (lqkzj, qajzk) {
      f5lqz['fs']['readFile']({ 'filePath': lqkzj, 'encoding': '', 'success': function (xn_3y0) {
          qajzk != null && qajzk['runWith']([0x0]);
        }, 'fail': function (o5f79) {
          qajzk != null && qajzk['runWith']([0x1]);
        } });
    }, f5lqz['down'] = function (l9tfq5, kahqj, gvo17, tljqh) {
      kahqj === void 0x0 && (kahqj = 'ascill'), tljqh === void 0x0 && (tljqh = '');var g1v7o = f5lqz['getFileNativePath'](tljqh),
          l5zqth = f5lqz['wxdown']({ 'url': l9tfq5, 'filePath': g1v7o, 'success': function (z5lft) {
          if (z5lft['statusCode'] === 0xc8) f5lqz['readFile'](z5lft['filePath'], kahqj, gvo17, tljqh);
        }, 'fail': function (f7to95) {
          gvo17 != null && gvo17['runWith']([0x1, f7to95]);
        } });l5zqth['onProgressUpdate'](function (y3_0n) {
        gvo17 != null && gvo17['runWith']([0x2, y3_0n['progress']]);
      });
    }, f5lqz['readFile'] = function (tql5, lhzqjt, n04y_, ds8b2$) {
      lhzqjt === void 0x0 && (lhzqjt = 'ascill'), ds8b2$ === void 0x0 && (ds8b2$ = ''), f5lqz['fs']['readFile']({ 'filePath': tql5, 'encoding': lhzqjt, 'success': function (f75o9) {
          if (tql5['indexOf']('http://') != -0x1 || tql5['indexOf']('https://') != -0x1) f5lqz['onFileUpdate'](tql5, ds8b2$);n04y_ != null && n04y_['runWith']([0x0, f75o9]);
        }, 'fail': function (dkjab) {
          if (dkjab) n04y_ != null && n04y_['runWith']([0x1, dkjab]);
        } });
    }, f5lqz['downImg'] = function (kaj2db, xy0c3r, s_84xn) {
      s_84xn === void 0x0 && (s_84xn = '');var mwrci = f5lqz['wxdown']({ 'url': kaj2db, 'success': function (xn4y8) {
          xn4y8['statusCode'] === 0xc8 && f5lqz['copyFile'](xn4y8['tempFilePath'], s_84xn, xy0c3r);
        }, 'fail': function (yr3x0n) {
          xy0c3r != null && xy0c3r['runWith']([0x1, yr3x0n]);
        } });
    }, f5lqz['copyFile'] = function (q5lztf, vg1eo, q5lf9) {
      var zjt = q5lztf['split']('/'),
          p6e1gu = zjt[zjt['length'] - 0x1],
          n04xy_ = vg1eo['split']('?')[0x0],
          tq5zf = f5lqz['getFileInfo'](vg1eo),
          d2bs$ = f5lqz['getFileNativePath'](p6e1gu);f5lqz['fs']['copyFile']({ 'srcPath': q5lztf, 'destPath': d2bs$, 'success': function (f5z) {
          if (!tq5zf) f5lqz['onSaveFile'](vg1eo, p6e1gu), q5lf9 != null && q5lf9['runWith']([0x0]);else {
            if (tq5zf['readyUrl'] != vg1eo) f5lqz['remove'](p6e1gu, vg1eo, q5lf9);
          }
        }, 'fail': function (vue71g) {
          q5lf9 != null && q5lf9['runWith']([0x1, vue71g]);
        } });
    }, f5lqz['getFileNativePath'] = function (rm0i) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rm0i;
    }, f5lqz['remove'] = function (cxyr30, bd$sa, b$adk) {
      bd$sa === void 0x0 && (bd$sa = '');var fztl5q = f5lqz['getFileInfo'](bd$sa),
          zklhjq = f5lqz['getFileNativePath'](fztl5q['md5']);hqzjka['loader']['clearRes'](fztl5q['readyUrl']), f5lqz['fs']['unlink']({ 'filePath': zklhjq, 'success': function (gv1e7) {
          if (bd$sa != '') f5lqz['onSaveFile'](bd$sa, cxyr30);b$adk != null && b$adk['runWith']([0x0]);
        }, 'fail': function (jka2d) {} });
    }, f5lqz['onSaveFile'] = function (rwi3, bdjak) {
      var mc03yr = rwi3['split']('?')[0x0];f5lqz['filesListObj'][mc03yr] = { 'md5': bdjak, 'readyUrl': rwi3 }, f5lqz['fs']['writeFile']({ 'filePath': f5lqz['fileNativeDir'] + '/' + f5lqz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f5lqz['filesListObj']), 'success': function (ovf975) {
          console['log']('写入测试测试成功：', ovf975);
        }, 'fail': function (mrc30) {
          console['log']('写入测试测试失败：', mrc30);
        } });
    }, f5lqz['existDir'] = function (ltq, kjb2a) {
      f5lqz['fs']['mkdir']({ 'dirPath': ltq, 'success': function (xsn_) {
          kjb2a != null && kjb2a['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fzlq5t) {
          if (fzlq5t['errMsg']['indexOf']('file already exists') != -0x1) f5lqz['readSync'](f5lqz['fileListName'], 'utf8', kjb2a);else kjb2a != null && kjb2a['runWith']([0x1, fzlq5t]);
        } });
    }, f5lqz['readSync'] = function (g1pe, pg6u, d$s42, d2kba$) {
      pg6u === void 0x0 && (pg6u = 'ascill'), d2kba$ === void 0x0 && (d2kba$ = '');var uev17g = f5lqz['getFileNativePath'](g1pe),
          _n48xy;try {
        _n48xy = f5lqz['fs']['readFileSync'](uev17g), d$s42 != null && d$s42['runWith']([0x0, { 'data': _n48xy }]);
      } catch (qkjlhz) {
        d$s42 != null && d$s42['runWith']([0x1]);
      }
    }, f5lqz['readCache'] = function () {}, f5lqz['writeCache'] = function (yn4x_8) {
      var z5qhlt = readyUrl['split']('?')[0x0];f5lqz['filesListObj'][z5qhlt] = { 'md5': md5Name, 'readyUrl': readyUrl }, f5lqz['fs']['writeFile']({ 'filePath': f5lqz['fileNativeDir'] + '/' + f5lqz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f5lqz['filesListObj']), 'success': function (d$sab2) {}, 'fail': function (e7uv) {} });
    }, f5lqz['setNativeFileDir'] = function (nx48_s) {
      f5lqz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nx48_s;
    }, f5lqz['filesListObj'] = {}, f5lqz['fileNativeDir'] = null, f5lqz['fileListName'] = 'layaairfiles.txt', f5lqz['ziyuFileData'] = {}, v9o5f7(f5lqz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), f5lqz;
  }(s8n$_4),
      tflzq = function (ns84$) {
    function kzaqj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], kzaqj['__super']['call'](this), this['_sound'] = kzaqj['_createSound']();
    }zhltq5(kzaqj, 'laya.wx.mini.MiniSound', ns84$);var v9o7f1 = kzaqj['prototype'];return v9o7f1['load'] = function (lz5t) {
      var $db2 = this;lz5t = $84n['formatURL'](lz5t), this['url'] = lz5t;if (kzaqj['_audioCache'][lz5t]) {
        this['event']('complete');return;
      }function cmy03() {
        if (kzaqj['_null'] != undefined) $db2['_sound']['onCanplay'](kzaqj['_null']), $db2['_sound']['onError'](kzaqj['_null']);else try {
          $db2['_sound']['onCanplay'](null), $db2['_sound']['onError'](null), kzaqj['_null'] = null;
        } catch (tlz5q) {
          console['warn']('[wxmini] _clearSound:' + tlz5q), $db2['_sound']['onCanplay'](nyx03r), $db2['_sound']['onError'](nyx03r), kzaqj['_null'] = nyx03r;
        }
      }function s8$d24() {
        cmy03(), ljkzq['loaded'] = !![], ljkzq['event']('complete'), kzaqj['_audioCache'][ljkzq['url']] = ljkzq;
      }function mrcy3(ov1ge7) {
        console['error']('errCode=' + ov1ge7['errCode'] + '  errMsg=' + ov1ge7['errMsg']), cmy03(), ljkzq['event']('error');
      }function nyx03r() {}this['_sound']['onCanplay'](s8$d24), this['_sound']['onError'](mrcy3), this['_sound']['src'] = lz5t;var ljkzq = this;
    }, v9o7f1['play'] = function (x_n3y0, jazhqk) {
      x_n3y0 === void 0x0 && (x_n3y0 = 0x0), jazhqk === void 0x0 && (jazhqk = 0x0);var fv97;if (this['url'] == hbaz['_tMusic']) {
        if (!kzaqj['_musicAudio']) kzaqj['_musicAudio'] = kzaqj['_createSound']();fv97 = kzaqj['_musicAudio'];
      } else fv97 = kzaqj['_createSound']();fv97['src'] = this['url'];var rwc3i = new hjkabz(fv97);return rwc3i['url'] = this['url'], rwc3i['loops'] = jazhqk, rwc3i['startTime'] = x_n3y0, rwc3i['play'](), hbaz['addChannel'](rwc3i), rwc3i;
    }, v9o7f1['dispose'] = function () {
      var egup6 = kzaqj['_audioCache'][this['url']];egup6 && (egup6['src'] = '', delete kzaqj['_audioCache'][this['url']]);
    }, f79vo1(0x0, v9o7f1, 'duration', function () {
      return this['_sound']['duration'];
    }), kzaqj['_createSound'] = function () {
      return kzaqj['_id']++, gvu1e['window']['wx']['createInnerAudioContext']();
    }, kzaqj['_musicAudio'] = null, kzaqj['_id'] = 0x0, kzaqj['_audioCache'] = {}, kzaqj['_null'] = undefined, kzaqj;
  }(s8n$_4),
      hjkabz = function (g7veu1) {
    function bd28$(zqljkh) {
      this['_audio'] = null, this['_onEnd'] = null, bd28$['__super']['call'](this), this['_audio'] = zqljkh, this['_onEnd'] = hjabz['bind'](this['__onEnd'], this), zqljkh['onEnded'](this['_onEnd']);
    }zhltq5(bd28$, 'laya.wx.mini.MiniSoundChannel', g7veu1);var pge1u6 = bd28$['prototype'];return pge1u6['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hqzjka['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, pge1u6['__onNull'] = function () {}, pge1u6['play'] = function () {
      this['isStopped'] = ![], hbaz['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, pge1u6['stop'] = function () {
      this['isStopped'] = !![], hbaz['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (bd28$['_null'] != undefined) this['_audio']['onEnded'](bd28$['_null']);else try {
        this['_audio']['onEnded'](null), bd28$['_null'] = null;
      } catch (_$8n4s) {
        console['warn']('[wxmini] stop:' + _$8n4s), this['_audio']['onEnded'](hjabz['bind'](this['__onNull'], this)), bd28$['_null'] = hjabz['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, pge1u6['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, pge1u6['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], hbaz['addChannel'](this), this['_audio']['play']();
    }, f79vo1(0x0, pge1u6, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f79vo1(0x0, pge1u6, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f79vo1(0x0, pge1u6, 'volume', function () {
      return 0x1;
    }, function (r3cm0i) {}), bd28$['_null'] = undefined, bd28$;
  }(fvo1);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kh2ja in Laya) {
    var t75 = Laya[kh2ja];t75 && t75['__isclass'] && (exports[kh2ja] = t75);
  }
});