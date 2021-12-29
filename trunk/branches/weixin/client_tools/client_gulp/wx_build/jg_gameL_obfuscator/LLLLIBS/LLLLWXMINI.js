var W = wx.$l;
(function (window, document, ge71vu) {
  var jhzabk = ge71vu['un'],
      ny4x_8 = ge71vu['uns'],
      $2sdba = ge71vu['static'],
      d28b$ = ge71vu['class'],
      _xyn8 = ge71vu['getset'],
      ynx4_8 = ge71vu['__newvec'],
      b$8ds2 = laya['utils']['Browser'],
      n0_4x = laya['events']['Event'],
      j2kabh = laya['events']['EventDispatcher'],
      eu71g = laya['resource']['HTMLImage'],
      zbjkah = laya['utils']['Handler'],
      rc30i = laya['display']['Input'],
      cy03xr = laya['net']['Loader'],
      bhzkja = laya['maths']['Matrix'],
      n3_yx = laya['renders']['Render'],
      d4$s28 = laya['utils']['RunDriver'],
      uge61 = laya['media']['Sound'],
      yn8_x4 = laya['media']['SoundChannel'],
      ofl59 = laya['media']['SoundManager'],
      $d8_4 = laya['display']['Stage'],
      vo9f1 = laya['net']['URL'],
      up6 = laya['utils']['Utils'],
      v71g = function () {
    function _4ds8$() {}return d28b$(_4ds8$, 'laya.wx.mini.MiniAdpter'), _4ds8$['getJson'] = function (y4_0) {
      return JSON['parse'](y4_0);
    }, _4ds8$['init'] = function (mw3, uvg17e) {
      mw3 === void 0x0 && (mw3 = ![]), uvg17e === void 0x0 && (uvg17e = ![]);if (_4ds8$['_inited']) return;_4ds8$['window'] = window;if (_4ds8$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;_4ds8$['_inited'] = !![], _4ds8$['isZiYu'] = uvg17e, _4ds8$['isPosMsgYu'] = mw3, _4ds8$['EnvConfig'] = {}, !_4ds8$['isZiYu'] && (_n3y0['setNativeFileDir']('/layaairGame'), _n3y0['existDir'](_n3y0['fileNativeDir'], zbjkah['create'](_4ds8$, _4ds8$['onMkdirCallBack']))), _4ds8$['window']['focus'] = function () {}, ge71vu['getUrlPath'] = function () {}, _4ds8$['window']['logtime'] = function (ve1u6) {}, _4ds8$['window']['alertTimeLog'] = function (iwrm) {}, _4ds8$['window']['resetShareInfo'] = function () {}, _4ds8$['window']['CanvasRenderingContext2D'] = function () {}, _4ds8$['window']['CanvasRenderingContext2D']['prototype'] = _4ds8$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _4ds8$['window']['document']['body']['appendChild'] = function () {}, _4ds8$['EnvConfig']['pixelRatioInt'] = 0x0, d4$s28['getPixelRatio'] = _4ds8$['pixelRatio'], _4ds8$['_preCreateElement'] = b$8ds2['createElement'], b$8ds2['createElement'] = _4ds8$['createElement'], d4$s28['createShaderCondition'] = _4ds8$['createShaderCondition'], up6['parseXMLFromString'] = _4ds8$['parseXMLFromString'], rc30i['_createInputElement'] = gp16ue['_createInputElement'], _4ds8$['EnvConfig']['load'] = cy03xr['prototype']['load'], cy03xr['prototype']['load'] = veg7o['prototype']['load'], _4ds8$['isZiYu'] && mw3 && wx['onMessage'](function (qlhjk) {
        qlhjk['isLoad'] && (_n3y0['ziyuFileData'][qlhjk['url']] = qlhjk['data']);
      });
    }, _4ds8$['onMkdirCallBack'] = function (t5qf9, d2b$ak) {
      if (!t5qf9) _n3y0['filesListObj'] = JSON['parse'](d2b$ak['data']);
    }, _4ds8$['pixelRatio'] = function () {
      if (!_4ds8$['EnvConfig']['pixelRatioInt']) try {
        var bds2 = wx['getSystemInfoSync']();return _4ds8$['EnvConfig']['pixelRatioInt'] = bds2['pixelRatio'], bds2 = bds2, bds2['pixelRatio'];
      } catch (a$bs) {}return _4ds8$['EnvConfig']['pixelRatioInt'];
    }, _4ds8$['createElement'] = function (zkhj) {
      if (zkhj == 'canvas') {
        var _s8nx4;return _4ds8$['idx'] == 0x1 ? _4ds8$['isZiYu'] ? (_s8nx4 = sharedCanvas, _s8nx4['style'] = {}) : _s8nx4 = window['canvas'] : _s8nx4 = window['wx']['createCanvas'](), _4ds8$['idx']++, _s8nx4;
      } else {
        if (zkhj == 'textarea' || zkhj == 'input') return _4ds8$['onCreateInput'](zkhj);else {
          if (zkhj == 'div') {
            var y3nrx0 = _4ds8$['_preCreateElement'](zkhj);return y3nrx0['contains'] = function ($ab2k) {
              return null;
            }, y3nrx0['removeChild'] = function (ds_$) {}, y3nrx0;
          } else return _4ds8$['_preCreateElement'](zkhj);
        }
      }
    }, _4ds8$['onCreateInput'] = function (xcy03r) {
      var bas = _4ds8$['_preCreateElement'](xcy03r);return bas['focus'] = gp16ue['wxinputFocus'], bas['blur'] = gp16ue['wxinputblur'], bas['style'] = {}, bas['value'] = 0x0, bas['parentElement'] = {}, bas['placeholder'] = {}, bas['type'] = {}, bas['setColor'] = function (hlkq) {}, bas['setType'] = function (g6u) {}, bas['setFontFace'] = function (xny84) {}, bas['addEventListener'] = function (fo91) {}, bas['contains'] = function (lhqk) {
        return null;
      }, bas['removeChild'] = function (tof975) {}, bas;
    }, _4ds8$['createShaderCondition'] = function (b2s8d) {
      var zkhbj = this,
          v19eo = function () {
        var tlfzq = b2s8d;return zkhbj[b2s8d['replace']('this.', '')];
      };return v19eo;
    }, _4ds8$['EnvConfig'] = null, _4ds8$['window'] = null, _4ds8$['_preCreateElement'] = null, _4ds8$['_inited'] = ![], _4ds8$['wxRequest'] = null, _4ds8$['systemInfo'] = null, _4ds8$['version'] = '0.0.1', _4ds8$['isZiYu'] = ![], _4ds8$['isPosMsgYu'] = ![], _4ds8$['parseXMLFromString'] = function (dj2akb) {
      var b2d8, uvg6;dj2akb = dj2akb['replace'](/>\s+</g, '><');try {
        b2d8 = new window['Parser']['DOMParser']()['parseFromString'](dj2akb, 'text/xml');
      } catch (d$b2k) {
        throw '需要引入xml解析库文件';
      }return b2d8;
    }, _4ds8$['idx'] = 0x1, _4ds8$;
  }(),
      crxy0 = function () {
    function n8s_4$() {}d28b$(n8s_4$, 'laya.wx.mini.MiniImage');var aj2kdb = n8s_4$['prototype'];return aj2kdb['_loadImage'] = function (ugv7) {
      var kzahq = this,
          snx8_4 = ![];ugv7['indexOf']('layaNativeDir/') == -0x1 && (snx8_4 = !![], ugv7 = vo9f1['formatURL'](ugv7));if (!_n3y0['getFileInfo'](ugv7)) {
        if (ugv7['indexOf']('http://') != -0x1 || ugv7['indexOf']('https://') != -0x1) _n3y0['downImg'](ugv7, new zbjkah(n8s_4$, n8s_4$['onDownImgCallBack'], [ugv7, kzahq]), ugv7);else n8s_4$['onCreateImage'](ugv7, kzahq, !![]);
      } else n8s_4$['onCreateImage'](ugv7, kzahq, !snx8_4);
    }, n8s_4$['onDownImgCallBack'] = function (p6g, o9vf75, kbzjh) {
      if (!kbzjh) n8s_4$['onCreateImage'](p6g, o9vf75);else o9vf75['onError'](null);
    }, n8s_4$['onCreateImage'] = function (ugp6, nsx_, k2$dab) {
      k2$dab === void 0x0 && (k2$dab = ![]);var lf5to;if (!k2$dab) {
        var vgu6e1 = _n3y0['getFileInfo'](ugp6),
            to5f7 = vgu6e1['md5'];lf5to = _n3y0['getFileNativePath'](to5f7);
      } else lf5to = ugp6;if (nsx_['imgCache'] == null) nsx_['imgCache'] = {};var tfl9o5;function rx03c() {
        tfl9o5['onload'] = null, tfl9o5['onerror'] = null, delete nsx_['imgCache'][ugp6];
      };var hqljkz = function () {
        rx03c(), nsx_['onLoaded'](tfl9o5);
      },
          ny0_x = function () {
        rx03c(), nsx_['event']('error', 'Load image failed');
      };nsx_['_type'] == 'nativeimage' ? (tfl9o5 = new b$8ds2['window']['Image'](), tfl9o5['crossOrigin'] = '', tfl9o5['onload'] = hqljkz, tfl9o5['onerror'] = ny0_x, tfl9o5['src'] = lf5to, nsx_['imgCache'][ugp6] = tfl9o5) : new eu71g['create'](lf5to, { 'onload': hqljkz, 'onerror': ny0_x, 'onCreate': function (n30y) {
          tfl9o5 = n30y, nsx_['imgCache'][ugp6] = n30y;
        } });
    }, n8s_4$;
  }(),
      gp16ue = function () {
    function c3irwm() {}return d28b$(c3irwm, 'laya.wx.mini.MiniInput'), c3irwm['_createInputElement'] = function () {
      rc30i['_initInput'](rc30i['area'] = b$8ds2['createElement']('textarea')), rc30i['_initInput'](rc30i['input'] = b$8ds2['createElement']('input')), rc30i['inputContainer'] = b$8ds2['createElement']('div'), rc30i['inputContainer']['style']['position'] = 'absolute', rc30i['inputContainer']['style']['zIndex'] = 0x186a0, b$8ds2['container']['appendChild'](rc30i['inputContainer']), rc30i['inputContainer']['setPos'] = function (x3y_0, n$4_8) {
        rc30i['inputContainer']['style']['left'] = x3y_0 + 'px', rc30i['inputContainer']['style']['top'] = n$4_8 + 'px';
      }, ge71vu['stage']['on']('resize', null, c3irwm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ns_x) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ofl59['_soundClass'] = ym0r3c, ofl59['_musicClass'] = ym0r3c;
    }, c3irwm['_onStageResize'] = function () {
      var y_04nx = ge71vu['stage']['_canvasTransform']['identity']();y_04nx['scale'](b$8ds2['width'] / n3_yx['canvas']['width'] / d4$s28['getPixelRatio'](), b$8ds2['height'] / n3_yx['canvas']['height'] / d4$s28['getPixelRatio']());
    }, c3irwm['wxinputFocus'] = function (y_4n8x) {
      var s4x8 = rc30i['inputElement']['target'];if (s4x8 && !s4x8['editable']) return;v71g['window']['wx']['offKeyboardConfirm'](), v71g['window']['wx']['offKeyboardInput'](), v71g['window']['wx']['showKeyboard']({ 'defaultValue': s4x8['text'], 'maxLength': s4x8['maxChars'], 'multiple': s4x8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (kjzqah) {}, 'fail': function (mc0r3y) {} }), v71g['window']['wx']['onKeyboardConfirm'](function (bka2) {
        var f9o = bka2 ? bka2['value'] : '';s4x8['text'] = f9o, s4x8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), v71g['window']['wx']['onKeyboardInput'](function (ri3wcm) {
        var kahqj = ri3wcm ? ri3wcm['value'] : '';if (!s4x8['multiline']) {
          if (kahqj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s4x8['text'] = kahqj, s4x8['event']('input');
      });
    }, c3irwm['inputEnter'] = function () {
      rc30i['inputElement']['target']['focus'] = ![];
    }, c3irwm['wxinputblur'] = function () {
      c3irwm['hideKeyboard']();
    }, c3irwm['hideKeyboard'] = function () {
      v71g['window']['wx']['offKeyboardConfirm'](), v71g['window']['wx']['offKeyboardInput'](), v71g['window']['wx']['hideKeyboard']({ 'success': function (sd4$8) {
          console['log']('隐藏键盘');
        }, 'fail': function (ev9o) {
          console['log']('隐藏键盘出错:' + (ev9o ? ev9o['errMsg'] : ''));
        } });
    }, c3irwm;
  }(),
      veg7o = function () {
    function x84n_y() {}d28b$(x84n_y, 'laya.wx.mini.MiniLoader');var y3_0 = x84n_y['prototype'];return y3_0['load'] = function (b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk) {
      p6e1ug === void 0x0 && (p6e1ug = !![]), jab2dk === void 0x0 && (jab2dk = ![]);var ljtqzh = this;ljtqzh['_url'] = b$s82d;if (b$s82d['indexOf']('data:image') === 0x0) ljtqzh['_type'] = s4_x8n = 'image';else ljtqzh['_type'] = s4_x8n || (s4_x8n = ljtqzh['getTypeFromUrl'](b$s82d));ljtqzh['_cache'] = p6e1ug, ljtqzh['_data'] = null;var _03n = 'ascii';if (b$s82d['indexOf']('.fnt') != -0x1) _03n = 'utf8';else s4_x8n == 'arraybuffer' && (_03n = '');;var b28$s = up6['getFileExtension'](b$s82d);if (x84n_y['_fileTypeArr']['indexOf'](b28$s) != -0x1) v71g['EnvConfig']['load']['call'](this, b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk);else {
        if (!_n3y0['getFileInfo'](b$s82d)) {
          if (b$s82d['indexOf']('layaNativeDir/') != -0x1) {
            if (v71g['isZiYu']) {
              var l9f5q = _n3y0['ziyuFileData'][b$s82d];ljtqzh['onLoaded'](l9f5q);return;
            } else {
              cosnole['log']('read read'), _n3y0['read'](b$s82d, _03n, new zbjkah(x84n_y, x84n_y['onReadNativeCallBack'], [_03n, b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk, ljtqzh]));return;
            }
          }if (vo9f1['rootPath'] == '') var s4nx_ = b$s82d;else s4nx_ = b$s82d['split'](vo9f1['rootPath'])[0x0];b$s82d['indexOf']('http://') != -0x1 || b$s82d['indexOf']('https://') != -0x1 ? v71g['EnvConfig']['load']['call'](ljtqzh, b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk) : _n3y0['readFile'](s4nx_, _03n, new zbjkah(x84n_y, x84n_y['onReadNativeCallBack'], [_03n, b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk, ljtqzh]), b$s82d);
        } else v71g['EnvConfig']['load']['call'](this, b$s82d, s4_x8n, p6e1ug, u16gve, jab2dk);
      }
    }, y3_0['resMgrLoad'] = function (lzk, zltqj, x0_4, qflt5z, hkja2b, ab$, d42s$8) {
      x0_4 === void 0x0 && (x0_4 = 0x0), qflt5z === void 0x0 && (qflt5z = ![]), hkja2b === void 0x0 && (hkja2b = ![]), ab$ === void 0x0 && (ab$ = 0x0), d42s$8 === void 0x0 && (d42s$8 = 0x3), lzk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lzk), v71g['EnvConfig']['resMgrLoad'](lzk, (n3_yx0, e1vo97, x3rn0) => {
        x84n_y['prototype']['resMgrLoadCallBack'](n3_yx0, e1vo97, x3rn0, zltqj);
      }, x0_4, qflt5z, hkja2b, ab$, d42s$8);
    }, y3_0['resMgrLoadCallBack'] = function (m3r0ci, b2$das, p6u1eg, y3rc0x) {
      console['log']('buff:::', m3r0ci, p6u1eg, _n3y0['fileNativeDir'] + '///' + _n3y0['fileListName']), y3rc0x(m3r0ci, b2$das, p6u1eg);
    }, y3_0['clearRes'] = function (hkjab, ymcr) {
      ymcr === void 0x0 && (ymcr = ![]);var o5ftl9 = this;o5ftl9['clearRes'](hkjab, ymcr);var e7ov91 = _n3y0['getFileInfo'](hkjab);if (e7ov91 && (hkjab['indexOf']('http://') != -0x1 || hkjab['indexOf']('https://') != -0x1)) {
        var o5f9t7 = e7ov91['md5'],
            s_4n$8 = _n3y0['getFileNativePath'](o5f9t7);_n3y0['remove'](s_4n$8);
      }
    }, x84n_y['onReadNativeCallBack'] = function (x0ny_, z5lqft, d$b28, ztl5qf, c03im, k$dab2, lf59to, vf5o9, lhjqkz) {
      ztl5qf === void 0x0 && (ztl5qf = !![]), k$dab2 === void 0x0 && (k$dab2 = ![]), vf5o9 === void 0x0 && (vf5o9 = 0x0);if (!vf5o9) {
        var _yx04n;if (d$b28 == 'json' || d$b28 == 'atlas') _yx04n = v71g['getJson'](lhjqkz['data']);else d$b28 == 'xml' ? _yx04n = up6['parseXMLFromString'](lhjqkz['data']) : _yx04n = lhjqkz['data'];lf59to['onLoaded'](_yx04n), !v71g['isZiYu'] && v71g['isPosMsgYu'] && d$b28 != 'arraybuffer' && wx['postMessage']({ 'url': z5lqft, 'data': _yx04n, 'isLoad': !![] });
      } else vf5o9 == 0x1 && v71g['EnvConfig']['load']['call'](lf59to, z5lqft, d$b28, ztl5qf, c03im, k$dab2);
    }, $2sdba(x84n_y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), x84n_y;
  }(),
      _n3y0 = function (rx3n) {
    function ge6u1() {
      ge6u1['__super']['call'](this);;
    }return d28b$(ge6u1, 'laya.wx.mini.MiniFileMgr', rx3n), ge6u1['isLoadFile'] = function (cmyr3) {
      return ge6u1['_fileTypeArr']['indexOf'](cmyr3) != -0x1 ? !![] : ![];
    }, ge6u1['getFileInfo'] = function (adk$2b) {
      var jqlth = adk$2b['split']('?')[0x0],
          tf5ol = ge6u1['filesListObj'][jqlth];if (tf5ol == null) return null;else return tf5ol;return null;
    }, ge6u1['onFileUpdate'] = function (ue61vg, kb2hj) {
      var s8n$4 = ue61vg['split']('/'),
          i0c3r = s8n$4[s8n$4['length'] - 0x1],
          fl5ot = ge6u1['getFileInfo'](kb2hj);if (fl5ot == null) ge6u1['onSaveFile'](kb2hj, i0c3r);else {
        if (fl5ot['readyUrl'] != kb2hj) ge6u1['remove'](i0c3r, kb2hj);
      }
    }, ge6u1['exits'] = function (b$2d, qf9lt) {
      var snx = ge6u1['getFileNativePath'](b$2d);ge6u1['fs']['getFileInfo']({ 'filePath': snx, 'success': function (vo179) {
          qf9lt != null && qf9lt['runWith']([0x0, vo179]);
        }, 'fail': function (tflqz) {
          qf9lt != null && qf9lt['runWith']([0x1, tflqz]);
        } });
    }, ge6u1['read'] = function (n3x_0y, o7evg1, s2a$b, p1ug6e) {
      o7evg1 === void 0x0 && (o7evg1 = 'ascill'), p1ug6e === void 0x0 && (p1ug6e = '');var hkjabz;p1ug6e != '' ? hkjabz = ge6u1['getFileNativePath'](n3x_0y) : hkjabz = n3x_0y, ge6u1['fs']['readFile']({ 'filePath': hkjabz, 'encoding': o7evg1, 'success': function (jha2b) {
          s2a$b != null && s2a$b['runWith']([0x0, jha2b]);
        }, 'fail': function (g16v) {
          if (g16v && p1ug6e != '') ge6u1['down'](p1ug6e, o7evg1, s2a$b, p1ug6e);else s2a$b != null && s2a$b['runWith']([0x1]);
        } });
    }, ge6u1['readNativeFile'] = function (bdjak2, kql) {
      ge6u1['fs']['readFile']({ 'filePath': bdjak2, 'encoding': '', 'success': function (xy0_3n) {
          kql != null && kql['runWith']([0x0]);
        }, 'fail': function (xy_0n3) {
          kql != null && kql['runWith']([0x1]);
        } });
    }, ge6u1['down'] = function (e61vug, bhkz, yrx3c0, _0xyn) {
      bhkz === void 0x0 && (bhkz = 'ascill'), _0xyn === void 0x0 && (_0xyn = '');var qhakzj = ge6u1['getFileNativePath'](_0xyn),
          zqkhj = ge6u1['wxdown']({ 'url': e61vug, 'filePath': qhakzj, 'success': function (x_8y4) {
          if (x_8y4['statusCode'] === 0xc8) ge6u1['readFile'](x_8y4['filePath'], bhkz, yrx3c0, _0xyn);
        }, 'fail': function (v7e1gu) {
          yrx3c0 != null && yrx3c0['runWith']([0x1, v7e1gu]);
        } });zqkhj['onProgressUpdate'](function (hqjt) {
        yrx3c0 != null && yrx3c0['runWith']([0x2, hqjt['progress']]);
      });
    }, ge6u1['readFile'] = function (y03cmr, r3m0ci, qzhjak, ueg61) {
      r3m0ci === void 0x0 && (r3m0ci = 'ascill'), ueg61 === void 0x0 && (ueg61 = ''), ge6u1['fs']['readFile']({ 'filePath': y03cmr, 'encoding': r3m0ci, 'success': function (mcr3i0) {
          if (y03cmr['indexOf']('http://') != -0x1 || y03cmr['indexOf']('https://') != -0x1) ge6u1['onFileUpdate'](y03cmr, ueg61);qzhjak != null && qzhjak['runWith']([0x0, mcr3i0]);
        }, 'fail': function (_4xny) {
          if (_4xny) qzhjak != null && qzhjak['runWith']([0x1, _4xny]);
        } });
    }, ge6u1['downImg'] = function (f5o79v, mcrw3i, d2bjk) {
      d2bjk === void 0x0 && (d2bjk = '');var to5 = ge6u1['wxdown']({ 'url': f5o79v, 'success': function (flq9t5) {
          flq9t5['statusCode'] === 0xc8 && ge6u1['copyFile'](flq9t5['tempFilePath'], d2bjk, mcrw3i);
        }, 'fail': function (nx03) {
          mcrw3i != null && mcrw3i['runWith']([0x1, nx03]);
        } });
    }, ge6u1['copyFile'] = function (u7, bjkzah, a$bd2k) {
      var xy03nr = u7['split']('/'),
          ltof95 = xy03nr[xy03nr['length'] - 0x1],
          y_3nx0 = bjkzah['split']('?')[0x0],
          yn3xr0 = ge6u1['getFileInfo'](bjkzah),
          _y84n = ge6u1['getFileNativePath'](ltof95);ge6u1['fs']['copyFile']({ 'srcPath': u7, 'destPath': _y84n, 'success': function (zflq5) {
          if (!yn3xr0) ge6u1['onSaveFile'](bjkzah, ltof95), a$bd2k != null && a$bd2k['runWith']([0x0]);else {
            if (yn3xr0['readyUrl'] != bjkzah) ge6u1['remove'](ltof95, bjkzah, a$bd2k);
          }
        }, 'fail': function (lthqj) {
          a$bd2k != null && a$bd2k['runWith']([0x1, lthqj]);
        } });
    }, ge6u1['getFileNativePath'] = function (y3_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y3_;
    }, ge6u1['remove'] = function (qjhkza, n_x40y, ql5tfz) {
      n_x40y === void 0x0 && (n_x40y = '');var kadjb = ge6u1['getFileInfo'](n_x40y),
          ug1v7e = ge6u1['getFileNativePath'](kadjb['md5']);ge71vu['loader']['clearRes'](kadjb['readyUrl']), ge6u1['fs']['unlink']({ 'filePath': ug1v7e, 'success': function (b$kda2) {
          if (n_x40y != '') ge6u1['onSaveFile'](n_x40y, qjhkza);ql5tfz != null && ql5tfz['runWith']([0x0]);
        }, 'fail': function (geup) {} });
    }, ge6u1['onSaveFile'] = function (xy0r3n, lzqh) {
      var p1geu6 = xy0r3n['split']('?')[0x0];ge6u1['filesListObj'][p1geu6] = { 'md5': lzqh, 'readyUrl': xy0r3n }, ge6u1['fs']['writeFile']({ 'filePath': ge6u1['fileNativeDir'] + '/' + ge6u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ge6u1['filesListObj']), 'success': function ($42ds) {
          console['log']('写入测试测试成功：', $42ds);
        }, 'fail': function (u7e1g) {
          console['log']('写入测试测试失败：', u7e1g);
        } });
    }, ge6u1['existDir'] = function (kajhb2, n0yr3) {
      ge6u1['fs']['mkdir']({ 'dirPath': kajhb2, 'success': function (rmcw3) {
          n0yr3 != null && n0yr3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ftl9o) {
          if (ftl9o['errMsg']['indexOf']('file already exists') != -0x1) ge6u1['readSync'](ge6u1['fileListName'], 'utf8', n0yr3);else n0yr3 != null && n0yr3['runWith']([0x1, ftl9o]);
        } });
    }, ge6u1['readSync'] = function (e197o, fz5lq, fvo57, zhqajk) {
      fz5lq === void 0x0 && (fz5lq = 'ascill'), zhqajk === void 0x0 && (zhqajk = '');var f7vo1 = ge6u1['getFileNativePath'](e197o),
          x0yrn;try {
        x0yrn = ge6u1['fs']['readFileSync'](f7vo1), fvo57 != null && fvo57['runWith']([0x0, { 'data': x0yrn }]);
      } catch (ahkbz) {
        fvo57 != null && fvo57['runWith']([0x1]);
      }
    }, ge6u1['readCache'] = function () {}, ge6u1['writeCache'] = function (x4y) {
      var fl5qt9 = readyUrl['split']('?')[0x0];ge6u1['filesListObj'][fl5qt9] = { 'md5': md5Name, 'readyUrl': readyUrl }, ge6u1['fs']['writeFile']({ 'filePath': ge6u1['fileNativeDir'] + '/' + ge6u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ge6u1['filesListObj']), 'success': function (c0mr3y) {}, 'fail': function (v5f9o) {} });
    }, ge6u1['setNativeFileDir'] = function (fl95q) {
      ge6u1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fl95q;
    }, ge6u1['filesListObj'] = {}, ge6u1['fileNativeDir'] = null, ge6u1['fileListName'] = 'layaairfiles.txt', ge6u1['ziyuFileData'] = {}, $2sdba(ge6u1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ge6u1;
  }(j2kabh),
      ym0r3c = function (x_ny40) {
    function _8n$4() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _8n$4['__super']['call'](this), this['_sound'] = _8n$4['_createSound']();
    }d28b$(_8n$4, 'laya.wx.mini.MiniSound', x_ny40);var nxs8_4 = _8n$4['prototype'];return nxs8_4['load'] = function (r3c0m) {
      var rc0i = this;r3c0m = vo9f1['formatURL'](r3c0m), this['url'] = r3c0m;if (_8n$4['_audioCache'][r3c0m]) {
        this['event']('complete');return;
      }function y8nx4() {
        if (_8n$4['_null'] != undefined) rc0i['_sound']['onCanplay'](_8n$4['_null']), rc0i['_sound']['onError'](_8n$4['_null']);else try {
          rc0i['_sound']['onCanplay'](null), rc0i['_sound']['onError'](null), _8n$4['_null'] = null;
        } catch (n_$84) {
          console['warn']('[wxmini] _clearSound:' + n_$84), rc0i['_sound']['onCanplay'](ak2bdj), rc0i['_sound']['onError'](ak2bdj), _8n$4['_null'] = ak2bdj;
        }
      }function zjhlk() {
        y8nx4(), g16up['loaded'] = !![], g16up['event']('complete'), _8n$4['_audioCache'][g16up['url']] = g16up;
      }function ot795f(hjak2) {
        console['error']('errCode=' + hjak2['errCode'] + '  errMsg=' + hjak2['errMsg']), y8nx4(), g16up['event']('error');
      }function ak2bdj() {}this['_sound']['onCanplay'](zjhlk), this['_sound']['onError'](ot795f), this['_sound']['src'] = r3c0m;var g16up = this;
    }, nxs8_4['play'] = function (zf5l, c3y) {
      zf5l === void 0x0 && (zf5l = 0x0), c3y === void 0x0 && (c3y = 0x0);var dbk2a;if (this['url'] == ofl59['_tMusic']) {
        if (!_8n$4['_musicAudio']) _8n$4['_musicAudio'] = _8n$4['_createSound']();dbk2a = _8n$4['_musicAudio'];
      } else dbk2a = _8n$4['_createSound']();dbk2a['src'] = this['url'];var kjzbh = new hk(dbk2a);return kjzbh['url'] = this['url'], kjzbh['loops'] = c3y, kjzbh['startTime'] = zf5l, kjzbh['play'](), ofl59['addChannel'](kjzbh), kjzbh;
    }, nxs8_4['dispose'] = function () {
      var xn0_3 = _8n$4['_audioCache'][this['url']];xn0_3 && (xn0_3['src'] = '', delete _8n$4['_audioCache'][this['url']]);
    }, _xyn8(0x0, nxs8_4, 'duration', function () {
      return this['_sound']['duration'];
    }), _8n$4['_createSound'] = function () {
      return _8n$4['_id']++, v71g['window']['wx']['createInnerAudioContext']();
    }, _8n$4['_musicAudio'] = null, _8n$4['_id'] = 0x0, _8n$4['_audioCache'] = {}, _8n$4['_null'] = undefined, _8n$4;
  }(j2kabh),
      hk = function (n0_x3) {
    function _y3x0n(r0ic) {
      this['_audio'] = null, this['_onEnd'] = null, _y3x0n['__super']['call'](this), this['_audio'] = r0ic, this['_onEnd'] = up6['bind'](this['__onEnd'], this), r0ic['onEnded'](this['_onEnd']);
    }d28b$(_y3x0n, 'laya.wx.mini.MiniSoundChannel', n0_x3);var pg6eu = _y3x0n['prototype'];return pg6eu['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ge71vu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, pg6eu['__onNull'] = function () {}, pg6eu['play'] = function () {
      this['isStopped'] = ![], ofl59['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, pg6eu['stop'] = function () {
      this['isStopped'] = !![], ofl59['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_y3x0n['_null'] != undefined) this['_audio']['onEnded'](_y3x0n['_null']);else try {
        this['_audio']['onEnded'](null), _y3x0n['_null'] = null;
      } catch (ltzqh) {
        console['warn']('[wxmini] stop:' + ltzqh), this['_audio']['onEnded'](up6['bind'](this['__onNull'], this)), _y3x0n['_null'] = up6['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, pg6eu['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, pg6eu['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ofl59['addChannel'](this), this['_audio']['play']();
    }, _xyn8(0x0, pg6eu, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _xyn8(0x0, pg6eu, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _xyn8(0x0, pg6eu, 'volume', function () {
      return 0x1;
    }, function (ue1gv) {}), _y3x0n['_null'] = undefined, _y3x0n;
  }(yn8_x4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qt59 in Laya) {
    var n4xy0 = Laya[qt59];n4xy0 && n4xy0['__isclass'] && (exports[qt59] = n4xy0);
  }
});