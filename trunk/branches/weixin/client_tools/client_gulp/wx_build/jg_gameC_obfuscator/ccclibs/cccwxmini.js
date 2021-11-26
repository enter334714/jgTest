var p = wx.$h;
(function (window, document, _xg0v) {
  var be$ioy = _xg0v['un'],
      byi9eo = _xg0v['uns'],
      wrnp4a = _xg0v['static'],
      o$ybei = _xg0v['class'],
      t74j = _xg0v['getset'],
      g02v = _xg0v['__newvec'],
      $e6y = laya['utils']['Browser'],
      j3t4f7 = laya['events']['Event'],
      rwapn4 = laya['events']['EventDispatcher'],
      h8kg0_ = laya['resource']['HTMLImage'],
      $k806h = laya['utils']['Handler'],
      ie9ybo = laya['display']['Input'],
      d15cm = laya['net']['Loader'],
      e68i$k = laya['maths']['Matrix'],
      yoeb$ = laya['renders']['Render'],
      g0_2vx = laya['utils']['RunDriver'],
      nvg2x_ = laya['media']['Sound'],
      f4a37 = laya['media']['SoundChannel'],
      cftsj1 = laya['media']['SoundManager'],
      rpw2n = laya['display']['Stage'],
      k08_h = laya['net']['URL'],
      pra4wn = laya['utils']['Utils'],
      r_nvx2 = function () {
    function nprw4() {}return o$ybei(nprw4, 'laya.wx.mini.MiniAdpter'), nprw4['getJson'] = function (kh08) {
      return JSON['parse'](kh08);
    }, nprw4['init'] = function (xw2pnr, z9ybo) {
      xw2pnr === void 0x0 && (xw2pnr = ![]), z9ybo === void 0x0 && (z9ybo = ![]);if (nprw4['_inited']) return;nprw4['window'] = window;if (nprw4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;nprw4['_inited'] = !![], nprw4['isZiYu'] = z9ybo, nprw4['isPosMsgYu'] = xw2pnr, nprw4['EnvConfig'] = {}, !nprw4['isZiYu'] && (zoybi9['setNativeFileDir']('/layaairGame'), zoybi9['existDir'](zoybi9['fileNativeDir'], $k806h['create'](nprw4, nprw4['onMkdirCallBack']))), nprw4['window']['focus'] = function () {}, _xg0v['getUrlPath'] = function () {}, nprw4['window']['logtime'] = function (h8e$) {}, nprw4['window']['alertTimeLog'] = function (_0hgv8) {}, nprw4['window']['resetShareInfo'] = function () {}, nprw4['window']['CanvasRenderingContext2D'] = function () {}, nprw4['window']['CanvasRenderingContext2D']['prototype'] = nprw4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nprw4['window']['document']['body']['appendChild'] = function () {}, nprw4['EnvConfig']['pixelRatioInt'] = 0x0, g0_2vx['getPixelRatio'] = nprw4['pixelRatio'], nprw4['_preCreateElement'] = $e6y['createElement'], $e6y['createElement'] = nprw4['createElement'], g0_2vx['createShaderCondition'] = nprw4['createShaderCondition'], pra4wn['parseXMLFromString'] = nprw4['parseXMLFromString'], ie9ybo['_createInputElement'] = z9oqyb['_createInputElement'], nprw4['EnvConfig']['load'] = d15cm['prototype']['load'], d15cm['prototype']['load'] = ekh6$['prototype']['load'], nprw4['isZiYu'] && xw2pnr && wx['onMessage'](function (eki68) {
        eki68['isLoad'] && (zoybi9['ziyuFileData'][eki68['url']] = eki68['data']);
      });
    }, nprw4['onMkdirCallBack'] = function (g8_h0v, dc51m) {
      if (!g8_h0v) zoybi9['filesListObj'] = JSON['parse'](dc51m['data']);
    }, nprw4['pixelRatio'] = function () {
      if (!nprw4['EnvConfig']['pixelRatioInt']) try {
        var afj743 = wx['getSystemInfoSync']();return nprw4['EnvConfig']['pixelRatioInt'] = afj743['pixelRatio'], afj743 = afj743, afj743['pixelRatio'];
      } catch (wv2rn) {}return nprw4['EnvConfig']['pixelRatioInt'];
    }, nprw4['createElement'] = function (rxwn2) {
      if (rxwn2 == 'canvas') {
        var _gx;return nprw4['idx'] == 0x1 ? nprw4['isZiYu'] ? (_gx = sharedCanvas, _gx['style'] = {}) : _gx = window['canvas'] : _gx = window['wx']['createCanvas'](), nprw4['idx']++, _gx;
      } else {
        if (rxwn2 == 'textarea' || rxwn2 == 'input') return nprw4['onCreateInput'](rxwn2);else {
          if (rxwn2 == 'div') {
            var x2g_0v = nprw4['_preCreateElement'](rxwn2);return x2g_0v['contains'] = function (v_g0h) {
              return null;
            }, x2g_0v['removeChild'] = function (c5t1js) {}, x2g_0v;
          } else return nprw4['_preCreateElement'](rxwn2);
        }
      }
    }, nprw4['onCreateInput'] = function (sm51d) {
      var xw2npr = nprw4['_preCreateElement'](sm51d);return xw2npr['focus'] = z9oqyb['wxinputFocus'], xw2npr['blur'] = z9oqyb['wxinputblur'], xw2npr['style'] = {}, xw2npr['value'] = 0x0, xw2npr['parentElement'] = {}, xw2npr['placeholder'] = {}, xw2npr['type'] = {}, xw2npr['setColor'] = function (ld5scm) {}, xw2npr['setType'] = function (s1fc) {}, xw2npr['setFontFace'] = function (tsj3) {}, xw2npr['addEventListener'] = function (iyb) {}, xw2npr['contains'] = function (bzq9oy) {
        return null;
      }, xw2npr['removeChild'] = function (_vg0x2) {}, xw2npr;
    }, nprw4['createShaderCondition'] = function (yiz9o) {
      var h$086k = this,
          ibo9ey = function () {
        var v80_hg = yiz9o;return h$086k[yiz9o['replace']('this.', '')];
      };return ibo9ey;
    }, nprw4['EnvConfig'] = null, nprw4['window'] = null, nprw4['_preCreateElement'] = null, nprw4['_inited'] = ![], nprw4['wxRequest'] = null, nprw4['systemInfo'] = null, nprw4['version'] = '0.0.1', nprw4['isZiYu'] = ![], nprw4['isPosMsgYu'] = ![], nprw4['parseXMLFromString'] = function ($ybeo) {
      var xgvn_2, yei$b6;$ybeo = $ybeo['replace'](/>\s+</g, '><');try {
        xgvn_2 = new window['Parser']['DOMParser']()['parseFromString']($ybeo, 'text/xml');
      } catch (_x2rn) {
        throw '需要引入xml解析库文件';
      }return xgvn_2;
    }, nprw4['idx'] = 0x1, nprw4;
  }(),
      cdm5ls = function () {
    function iey6b() {}o$ybei(iey6b, 'laya.wx.mini.MiniImage');var cldms5 = iey6b['prototype'];return cldms5['_loadImage'] = function (kg0_8h) {
      var wpnr4a = this,
          s1m5 = ![];kg0_8h['indexOf']('layaNativeDir/') == -0x1 && (s1m5 = !![], kg0_8h = k08_h['formatURL'](kg0_8h));if (!zoybi9['getFileInfo'](kg0_8h)) {
        if (kg0_8h['indexOf']('http://') != -0x1 || kg0_8h['indexOf']('https://') != -0x1) zoybi9['downImg'](kg0_8h, new $k806h(iey6b, iey6b['onDownImgCallBack'], [kg0_8h, wpnr4a]), kg0_8h);else iey6b['onCreateImage'](kg0_8h, wpnr4a, !![]);
      } else iey6b['onCreateImage'](kg0_8h, wpnr4a, !s1m5);
    }, iey6b['onDownImgCallBack'] = function (s51dcm, warp47, gv_hx) {
      if (!gv_hx) iey6b['onCreateImage'](s51dcm, warp47);else warp47['onError'](null);
    }, iey6b['onCreateImage'] = function (ap3w7, t1c5, f7j13) {
      f7j13 === void 0x0 && (f7j13 = ![]);var d5;if (!f7j13) {
        var h_8kg0 = zoybi9['getFileInfo'](ap3w7),
            eiyk6 = h_8kg0['md5'];d5 = zoybi9['getFileNativePath'](eiyk6);
      } else d5 = ap3w7;if (t1c5['imgCache'] == null) t1c5['imgCache'] = {};var y$6bei;function iyeob$() {
        y$6bei['onload'] = null, y$6bei['onerror'] = null, delete t1c5['imgCache'][ap3w7];
      };var pra7w4 = function () {
        iyeob$(), t1c5['onLoaded'](y$6bei);
      },
          xn2wv = function () {
        iyeob$(), t1c5['event']('error', 'Load image failed');
      };t1c5['_type'] == 'nativeimage' ? (y$6bei = new $e6y['window']['Image'](), y$6bei['crossOrigin'] = '', y$6bei['onload'] = pra7w4, y$6bei['onerror'] = xn2wv, y$6bei['src'] = d5, t1c5['imgCache'][ap3w7] = y$6bei) : new h8kg0_['create'](d5, { 'onload': pra7w4, 'onerror': xn2wv, 'onCreate': function (tc5s) {
          y$6bei = tc5s, t1c5['imgCache'][ap3w7] = tc5s;
        } });
    }, iey6b;
  }(),
      z9oqyb = function () {
    function kei6y() {}return o$ybei(kei6y, 'laya.wx.mini.MiniInput'), kei6y['_createInputElement'] = function () {
      ie9ybo['_initInput'](ie9ybo['area'] = $e6y['createElement']('textarea')), ie9ybo['_initInput'](ie9ybo['input'] = $e6y['createElement']('input')), ie9ybo['inputContainer'] = $e6y['createElement']('div'), ie9ybo['inputContainer']['style']['position'] = 'absolute', ie9ybo['inputContainer']['style']['zIndex'] = 0x186a0, $e6y['container']['appendChild'](ie9ybo['inputContainer']), ie9ybo['inputContainer']['setPos'] = function (wr2pna, rw4pn) {
        ie9ybo['inputContainer']['style']['left'] = wr2pna + 'px', ie9ybo['inputContainer']['style']['top'] = rw4pn + 'px';
      }, _xg0v['stage']['on']('resize', null, kei6y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d5ms1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), cftsj1['_soundClass'] = tjf4, cftsj1['_musicClass'] = tjf4;
    }, kei6y['_onStageResize'] = function () {
      var s1ftjc = _xg0v['stage']['_canvasTransform']['identity']();s1ftjc['scale']($e6y['width'] / yoeb$['canvas']['width'] / g0_2vx['getPixelRatio'](), $e6y['height'] / yoeb$['canvas']['height'] / g0_2vx['getPixelRatio']());
    }, kei6y['wxinputFocus'] = function (qoyz9) {
      var jscft = ie9ybo['inputElement']['target'];if (jscft && !jscft['editable']) return;r_nvx2['window']['wx']['offKeyboardConfirm'](), r_nvx2['window']['wx']['offKeyboardInput'](), r_nvx2['window']['wx']['showKeyboard']({ 'defaultValue': jscft['text'], 'maxLength': jscft['maxChars'], 'multiple': jscft['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_gvxh) {}, 'fail': function (sd5cm) {} }), r_nvx2['window']['wx']['onKeyboardConfirm'](function (eyi$b) {
        var i68$ = eyi$b ? eyi$b['value'] : '';jscft['text'] = i68$, jscft['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), r_nvx2['window']['wx']['onKeyboardInput'](function ($eiky) {
        var pnwr2x = $eiky ? $eiky['value'] : '';if (!jscft['multiline']) {
          if (pnwr2x['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }jscft['text'] = pnwr2x, jscft['event']('input');
      });
    }, kei6y['inputEnter'] = function () {
      ie9ybo['inputElement']['target']['focus'] = ![];
    }, kei6y['wxinputblur'] = function () {
      kei6y['hideKeyboard']();
    }, kei6y['hideKeyboard'] = function () {
      r_nvx2['window']['wx']['offKeyboardConfirm'](), r_nvx2['window']['wx']['offKeyboardInput'](), r_nvx2['window']['wx']['hideKeyboard']({ 'success': function (v20gx) {
          console['log']('隐藏键盘');
        }, 'fail': function (e$yb6i) {
          console['log']('隐藏键盘出错:' + (e$yb6i ? e$yb6i['errMsg'] : ''));
        } });
    }, kei6y;
  }(),
      ekh6$ = function () {
    function f31st() {}o$ybei(f31st, 'laya.wx.mini.MiniLoader');var _vnxg2 = f31st['prototype'];return _vnxg2['load'] = function (_h08vg, k8$6h0, a43f7j, kh08_g, js51tc) {
      a43f7j === void 0x0 && (a43f7j = !![]), js51tc === void 0x0 && (js51tc = ![]);var pnwr4a = this;pnwr4a['_url'] = _h08vg;if (_h08vg['indexOf']('data:image') === 0x0) pnwr4a['_type'] = k8$6h0 = 'image';else pnwr4a['_type'] = k8$6h0 || (k8$6h0 = pnwr4a['getTypeFromUrl'](_h08vg));pnwr4a['_cache'] = a43f7j, pnwr4a['_data'] = null;var be$oy = 'ascii';if (_h08vg['indexOf']('.fnt') != -0x1) be$oy = 'utf8';else k8$6h0 == 'arraybuffer' && (be$oy = '');;var _ghxv = pra4wn['getFileExtension'](_h08vg);if (f31st['_fileTypeArr']['indexOf'](_ghxv) != -0x1) r_nvx2['EnvConfig']['load']['call'](this, _h08vg, k8$6h0, a43f7j, kh08_g, js51tc);else {
        if (!zoybi9['getFileInfo'](_h08vg)) {
          if (_h08vg['indexOf']('layaNativeDir/') != -0x1) {
            if (r_nvx2['isZiYu']) {
              var rw2xvn = zoybi9['ziyuFileData'][_h08vg];pnwr4a['onLoaded'](rw2xvn);return;
            } else {
              cosnole['log']('read read'), zoybi9['read'](_h08vg, be$oy, new $k806h(f31st, f31st['onReadNativeCallBack'], [be$oy, _h08vg, k8$6h0, a43f7j, kh08_g, js51tc, pnwr4a]));return;
            }
          }if (k08_h['rootPath'] == '') var gv_2 = _h08vg;else gv_2 = _h08vg['split'](k08_h['rootPath'])[0x0];_h08vg['indexOf']('http://') != -0x1 || _h08vg['indexOf']('https://') != -0x1 ? r_nvx2['EnvConfig']['load']['call'](pnwr4a, _h08vg, k8$6h0, a43f7j, kh08_g, js51tc) : zoybi9['readFile'](gv_2, be$oy, new $k806h(f31st, f31st['onReadNativeCallBack'], [be$oy, _h08vg, k8$6h0, a43f7j, kh08_g, js51tc, pnwr4a]), _h08vg);
        } else r_nvx2['EnvConfig']['load']['call'](this, _h08vg, k8$6h0, a43f7j, kh08_g, js51tc);
      }
    }, _vnxg2['resMgrLoad'] = function (rxnwv2, aj47, sjf13, nw2ap, _ghx0v, cdlsm5, $yeoi) {
      sjf13 === void 0x0 && (sjf13 = 0x0), nw2ap === void 0x0 && (nw2ap = ![]), _ghx0v === void 0x0 && (_ghx0v = ![]), cdlsm5 === void 0x0 && (cdlsm5 = 0x0), $yeoi === void 0x0 && ($yeoi = 0x3), rxnwv2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rxnwv2), r_nvx2['EnvConfig']['resMgrLoad'](rxnwv2, (sc5dl, a734pw, v2g_) => {
        f31st['prototype']['resMgrLoadCallBack'](sc5dl, a734pw, v2g_, aj47);
      }, sjf13, nw2ap, _ghx0v, cdlsm5, $yeoi);
    }, _vnxg2['resMgrLoadCallBack'] = function ($eiy, kg86, ftj743, y$6eb) {
      console['log']('buff:::', $eiy, ftj743, zoybi9['fileNativeDir'] + '///' + zoybi9['fileListName']), y$6eb($eiy, kg86, ftj743);
    }, _vnxg2['clearRes'] = function (bizy9, wrx2) {
      wrx2 === void 0x0 && (wrx2 = ![]);var rnpx = this;rnpx['clearRes'](bizy9, wrx2);var w7apr = zoybi9['getFileInfo'](bizy9);if (w7apr && (bizy9['indexOf']('http://') != -0x1 || bizy9['indexOf']('https://') != -0x1)) {
        var $6k80h = w7apr['md5'],
            y6e = zoybi9['getFileNativePath']($6k80h);zoybi9['remove'](y6e);
      }
    }, f31st['onReadNativeCallBack'] = function (g6h8k0, _2nv, awn4p, gxv2_n, d5cmsl, hg_80v, ey$, vngx, rxw2nv) {
      gxv2_n === void 0x0 && (gxv2_n = !![]), hg_80v === void 0x0 && (hg_80v = ![]), vngx === void 0x0 && (vngx = 0x0);if (!vngx) {
        var bzy;if (awn4p == 'json' || awn4p == 'atlas') bzy = r_nvx2['getJson'](rxw2nv['data']);else awn4p == 'xml' ? bzy = pra4wn['parseXMLFromString'](rxw2nv['data']) : bzy = rxw2nv['data'];ey$['onLoaded'](bzy), !r_nvx2['isZiYu'] && r_nvx2['isPosMsgYu'] && awn4p != 'arraybuffer' && wx['postMessage']({ 'url': _2nv, 'data': bzy, 'isLoad': !![] });
      } else vngx == 0x1 && r_nvx2['EnvConfig']['load']['call'](ey$, _2nv, awn4p, gxv2_n, d5cmsl, hg_80v);
    }, wrnp4a(f31st, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f31st;
  }(),
      zoybi9 = function (yibo$e) {
    function _0gvh() {
      _0gvh['__super']['call'](this);;
    }return o$ybei(_0gvh, 'laya.wx.mini.MiniFileMgr', yibo$e), _0gvh['isLoadFile'] = function (zobiy9) {
      return _0gvh['_fileTypeArr']['indexOf'](zobiy9) != -0x1 ? !![] : ![];
    }, _0gvh['getFileInfo'] = function (v8_h) {
      var wvx2rn = v8_h['split']('?')[0x0],
          _ng2vx = _0gvh['filesListObj'][wvx2rn];if (_ng2vx == null) return null;else return _ng2vx;return null;
    }, _0gvh['onFileUpdate'] = function (s31ftj, $ek) {
      var _hxv0g = s31ftj['split']('/'),
          y$ik = _hxv0g[_hxv0g['length'] - 0x1],
          mc51sd = _0gvh['getFileInfo']($ek);if (mc51sd == null) _0gvh['onSaveFile']($ek, y$ik);else {
        if (mc51sd['readyUrl'] != $ek) _0gvh['remove'](y$ik, $ek);
      }
    }, _0gvh['exits'] = function (k6e8h$, pw347a) {
      var t51jcs = _0gvh['getFileNativePath'](k6e8h$);_0gvh['fs']['getFileInfo']({ 'filePath': t51jcs, 'success': function (oyei$) {
          pw347a != null && pw347a['runWith']([0x0, oyei$]);
        }, 'fail': function (pxr2nw) {
          pw347a != null && pw347a['runWith']([0x1, pxr2nw]);
        } });
    }, _0gvh['read'] = function (nxwr2, ybieo, wp7r, k6e) {
      ybieo === void 0x0 && (ybieo = 'ascill'), k6e === void 0x0 && (k6e = '');var ibe$oy;k6e != '' ? ibe$oy = _0gvh['getFileNativePath'](nxwr2) : ibe$oy = nxwr2, _0gvh['fs']['readFile']({ 'filePath': ibe$oy, 'encoding': ybieo, 'success': function (rnv_2x) {
          wp7r != null && wp7r['runWith']([0x0, rnv_2x]);
        }, 'fail': function (vn_2xr) {
          if (vn_2xr && k6e != '') _0gvh['down'](k6e, ybieo, wp7r, k6e);else wp7r != null && wp7r['runWith']([0x1]);
        } });
    }, _0gvh['readNativeFile'] = function (kie$68, h80k) {
      _0gvh['fs']['readFile']({ 'filePath': kie$68, 'encoding': '', 'success': function (ke68i$) {
          h80k != null && h80k['runWith']([0x0]);
        }, 'fail': function (p4a) {
          h80k != null && h80k['runWith']([0x1]);
        } });
    }, _0gvh['down'] = function (n2xv_r, np2ra, f1tj73, i$boey) {
      np2ra === void 0x0 && (np2ra = 'ascill'), i$boey === void 0x0 && (i$boey = '');var gvxn2_ = _0gvh['getFileNativePath'](i$boey),
          arp7w = _0gvh['wxdown']({ 'url': n2xv_r, 'filePath': gvxn2_, 'success': function (k80gh) {
          if (k80gh['statusCode'] === 0xc8) _0gvh['readFile'](k80gh['filePath'], np2ra, f1tj73, i$boey);
        }, 'fail': function (aw2nr) {
          f1tj73 != null && f1tj73['runWith']([0x1, aw2nr]);
        } });arp7w['onProgressUpdate'](function (h860k) {
        f1tj73 != null && f1tj73['runWith']([0x2, h860k['progress']]);
      });
    }, _0gvh['readFile'] = function (k68$0h, gv8h0, wrp4na, cdsl5m) {
      gv8h0 === void 0x0 && (gv8h0 = 'ascill'), cdsl5m === void 0x0 && (cdsl5m = ''), _0gvh['fs']['readFile']({ 'filePath': k68$0h, 'encoding': gv8h0, 'success': function (rpa4w7) {
          if (k68$0h['indexOf']('http://') != -0x1 || k68$0h['indexOf']('https://') != -0x1) _0gvh['onFileUpdate'](k68$0h, cdsl5m);wrp4na != null && wrp4na['runWith']([0x0, rpa4w7]);
        }, 'fail': function (b9eoy) {
          if (b9eoy) wrp4na != null && wrp4na['runWith']([0x1, b9eoy]);
        } });
    }, _0gvh['downImg'] = function (_xr2v, yiz, pr47a) {
      pr47a === void 0x0 && (pr47a = '');var kg_8 = _0gvh['wxdown']({ 'url': _xr2v, 'success': function (ie$6y) {
          ie$6y['statusCode'] === 0xc8 && _0gvh['copyFile'](ie$6y['tempFilePath'], pr47a, yiz);
        }, 'fail': function (bzi9yo) {
          yiz != null && yiz['runWith']([0x1, bzi9yo]);
        } });
    }, _0gvh['copyFile'] = function (hk8$6e, oie$by, rw2apn) {
      var bqo9z = hk8$6e['split']('/'),
          awnr2 = bqo9z[bqo9z['length'] - 0x1],
          fjt73 = oie$by['split']('?')[0x0],
          oibey = _0gvh['getFileInfo'](oie$by),
          $6he8k = _0gvh['getFileNativePath'](awnr2);_0gvh['fs']['copyFile']({ 'srcPath': hk8$6e, 'destPath': $6he8k, 'success': function (tj74f) {
          if (!oibey) _0gvh['onSaveFile'](oie$by, awnr2), rw2apn != null && rw2apn['runWith']([0x0]);else {
            if (oibey['readyUrl'] != oie$by) _0gvh['remove'](awnr2, oie$by, rw2apn);
          }
        }, 'fail': function (zo9bqy) {
          rw2apn != null && rw2apn['runWith']([0x1, zo9bqy]);
        } });
    }, _0gvh['getFileNativePath'] = function (ar4wnp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ar4wnp;
    }, _0gvh['remove'] = function (fjcs1t, stj1c, xnwpr) {
      stj1c === void 0x0 && (stj1c = '');var ziyb = _0gvh['getFileInfo'](stj1c),
          eh8$ = _0gvh['getFileNativePath'](ziyb['md5']);_xg0v['loader']['clearRes'](ziyb['readyUrl']), _0gvh['fs']['unlink']({ 'filePath': eh8$, 'success': function (kh0g8) {
          if (stj1c != '') _0gvh['onSaveFile'](stj1c, fjcs1t);xnwpr != null && xnwpr['runWith']([0x0]);
        }, 'fail': function (h6e$k) {} });
    }, _0gvh['onSaveFile'] = function (g_xh0v, o$byi) {
      var gv0h8 = g_xh0v['split']('?')[0x0];_0gvh['filesListObj'][gv0h8] = { 'md5': o$byi, 'readyUrl': g_xh0v }, _0gvh['fs']['writeFile']({ 'filePath': _0gvh['fileNativeDir'] + '/' + _0gvh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_0gvh['filesListObj']), 'success': function (k8g_h0) {
          console['log']('写入测试测试成功：', k8g_h0);
        }, 'fail': function (ap34f7) {
          console['log']('写入测试测试失败：', ap34f7);
        } });
    }, _0gvh['existDir'] = function (wa7rp4, _h08k) {
      _0gvh['fs']['mkdir']({ 'dirPath': wa7rp4, 'success': function (n_xrv2) {
          _h08k != null && _h08k['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pf37a4) {
          if (pf37a4['errMsg']['indexOf']('file already exists') != -0x1) _0gvh['readSync'](_0gvh['fileListName'], 'utf8', _h08k);else _h08k != null && _h08k['runWith']([0x1, pf37a4]);
        } });
    }, _0gvh['readSync'] = function (j71t, jts1cf, mdcl, w4p7ra) {
      jts1cf === void 0x0 && (jts1cf = 'ascill'), w4p7ra === void 0x0 && (w4p7ra = '');var _xn2vr = _0gvh['getFileNativePath'](j71t),
          p2na;try {
        p2na = _0gvh['fs']['readFileSync'](_xn2vr), mdcl != null && mdcl['runWith']([0x0, { 'data': p2na }]);
      } catch (pf4a37) {
        mdcl != null && mdcl['runWith']([0x1]);
      }
    }, _0gvh['readCache'] = function () {}, _0gvh['writeCache'] = function (sdlcm5) {
      var stc51 = readyUrl['split']('?')[0x0];_0gvh['filesListObj'][stc51] = { 'md5': md5Name, 'readyUrl': readyUrl }, _0gvh['fs']['writeFile']({ 'filePath': _0gvh['fileNativeDir'] + '/' + _0gvh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_0gvh['filesListObj']), 'success': function (k$he68) {}, 'fail': function (rnap) {} });
    }, _0gvh['setNativeFileDir'] = function (bzoq9) {
      _0gvh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bzoq9;
    }, _0gvh['filesListObj'] = {}, _0gvh['fileNativeDir'] = null, _0gvh['fileListName'] = 'layaairfiles.txt', _0gvh['ziyuFileData'] = {}, wrnp4a(_0gvh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _0gvh;
  }(rwapn4),
      tjf4 = function (iy6b$) {
    function n_v2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], n_v2['__super']['call'](this), this['_sound'] = n_v2['_createSound']();
    }o$ybei(n_v2, 'laya.wx.mini.MiniSound', iy6b$);var yozb = n_v2['prototype'];return yozb['load'] = function (ts3f) {
      var h_0vg = this;ts3f = k08_h['formatURL'](ts3f), this['url'] = ts3f;if (n_v2['_audioCache'][ts3f]) {
        this['event']('complete');return;
      }function rwan2p() {
        if (n_v2['_null'] != undefined) h_0vg['_sound']['onCanplay'](n_v2['_null']), h_0vg['_sound']['onError'](n_v2['_null']);else try {
          h_0vg['_sound']['onCanplay'](null), h_0vg['_sound']['onError'](null), n_v2['_null'] = null;
        } catch ($68iek) {
          console['warn']('[wxmini] _clearSound:' + $68iek), h_0vg['_sound']['onCanplay'](px2wnr), h_0vg['_sound']['onError'](px2wnr), n_v2['_null'] = px2wnr;
        }
      }function i9eyb() {
        rwan2p(), $ek6yi['loaded'] = !![], $ek6yi['event']('complete'), n_v2['_audioCache'][$ek6yi['url']] = $ek6yi;
      }function d1sm5(sf3) {
        console['error']('errCode=' + sf3['errCode'] + '  errMsg=' + sf3['errMsg']), rwan2p(), $ek6yi['event']('error');
      }function px2wnr() {}this['_sound']['onCanplay'](i9eyb), this['_sound']['onError'](d1sm5), this['_sound']['src'] = ts3f;var $ek6yi = this;
    }, yozb['play'] = function (xn_rv, f3st1j) {
      xn_rv === void 0x0 && (xn_rv = 0x0), f3st1j === void 0x0 && (f3st1j = 0x0);var f3j74t;if (this['url'] == cftsj1['_tMusic']) {
        if (!n_v2['_musicAudio']) n_v2['_musicAudio'] = n_v2['_createSound']();f3j74t = n_v2['_musicAudio'];
      } else f3j74t = n_v2['_createSound']();f3j74t['src'] = this['url'];var _gk = new awr74(f3j74t);return _gk['url'] = this['url'], _gk['loops'] = f3st1j, _gk['startTime'] = xn_rv, _gk['play'](), cftsj1['addChannel'](_gk), _gk;
    }, yozb['dispose'] = function () {
      var s51jc = n_v2['_audioCache'][this['url']];s51jc && (s51jc['src'] = '', delete n_v2['_audioCache'][this['url']]);
    }, t74j(0x0, yozb, 'duration', function () {
      return this['_sound']['duration'];
    }), n_v2['_createSound'] = function () {
      return n_v2['_id']++, r_nvx2['window']['wx']['createInnerAudioContext']();
    }, n_v2['_musicAudio'] = null, n_v2['_id'] = 0x0, n_v2['_audioCache'] = {}, n_v2['_null'] = undefined, n_v2;
  }(rwapn4),
      awr74 = function ($k80h6) {
    function p2wrx(jts1fc) {
      this['_audio'] = null, this['_onEnd'] = null, p2wrx['__super']['call'](this), this['_audio'] = jts1fc, this['_onEnd'] = pra4wn['bind'](this['__onEnd'], this), jts1fc['onEnded'](this['_onEnd']);
    }o$ybei(p2wrx, 'laya.wx.mini.MiniSoundChannel', $k80h6);var w4rnp = p2wrx['prototype'];return w4rnp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_xg0v['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, w4rnp['__onNull'] = function () {}, w4rnp['play'] = function () {
      this['isStopped'] = ![], cftsj1['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, w4rnp['stop'] = function () {
      this['isStopped'] = !![], cftsj1['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (p2wrx['_null'] != undefined) this['_audio']['onEnded'](p2wrx['_null']);else try {
        this['_audio']['onEnded'](null), p2wrx['_null'] = null;
      } catch (y9ibzo) {
        console['warn']('[wxmini] stop:' + y9ibzo), this['_audio']['onEnded'](pra4wn['bind'](this['__onNull'], this)), p2wrx['_null'] = pra4wn['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, w4rnp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, w4rnp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], cftsj1['addChannel'](this), this['_audio']['play']();
    }, t74j(0x0, w4rnp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), t74j(0x0, w4rnp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), t74j(0x0, w4rnp, 'volume', function () {
      return 0x1;
    }, function (xvr2n) {}), p2wrx['_null'] = undefined, p2wrx;
  }(f4a37);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var vnrx in Laya) {
    var bi$ye = Laya[vnrx];bi$ye && bi$ye['__isclass'] && (exports[vnrx] = bi$ye);
  }
});