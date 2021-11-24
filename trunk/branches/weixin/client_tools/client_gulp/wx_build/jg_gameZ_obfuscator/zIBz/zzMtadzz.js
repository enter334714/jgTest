var B = wx.$z;
(function (window, document, tobd) {
  var aszex9 = tobd['un'],
      kb_r5 = tobd['uns'],
      im3qn = tobd['static'],
      mq7i3$ = tobd['class'],
      vl64n = tobd['getset'],
      g1p4 = tobd['__newvec'],
      zyodt = laya['utils']['Browser'],
      wr = laya['events']['Event'],
      ydtzko = laya['events']['EventDispatcher'],
      r_b8y = laya['resource']['HTMLImage'],
      iqj$ = laya['utils']['Handler'],
      h614p = laya['display']['Input'],
      a9h1s = laya['net']['Loader'],
      im7n = laya['maths']['Matrix'],
      f6lv4 = laya['renders']['Render'],
      r2b58_ = laya['utils']['RunDriver'],
      ztoesa = laya['media']['Sound'],
      w_502u = laya['media']['SoundChannel'],
      pgh614 = laya['media']['SoundManager'],
      v7fi = laya['display']['Stage'],
      ktozy = laya['net']['URL'],
      uw_52 = laya['utils']['Utils'],
      h4p6f = function () {
    function h9sx1p() {}return mq7i3$(h9sx1p, 'laya.wx.mini.MiniAdpter'), h9sx1p['getJson'] = function (eas91) {
      return JSON['parse'](eas91);
    }, h9sx1p['init'] = function (mivnl7, fv67) {
      mivnl7 === void 0x0 && (mivnl7 = ![]), fv67 === void 0x0 && (fv67 = ![]);if (h9sx1p['_inited']) return;h9sx1p['window'] = window;if (h9sx1p['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;h9sx1p['_inited'] = !![], h9sx1p['isZiYu'] = fv67, h9sx1p['isPosMsgYu'] = mivnl7, h9sx1p['EnvConfig'] = {}, !h9sx1p['isZiYu'] && (zse['setNativeFileDir']('/layaairGame'), zse['existDir'](zse['fileNativeDir'], iqj$['create'](h9sx1p, h9sx1p['onMkdirCallBack']))), h9sx1p['window']['focus'] = function () {}, tobd['getUrlPath'] = function () {}, h9sx1p['window']['logtime'] = function (ozetad) {}, h9sx1p['window']['alertTimeLog'] = function (inl3m) {}, h9sx1p['window']['resetShareInfo'] = function () {}, h9sx1p['window']['CanvasRenderingContext2D'] = function () {}, h9sx1p['window']['CanvasRenderingContext2D']['prototype'] = h9sx1p['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h9sx1p['window']['document']['body']['appendChild'] = function () {}, h9sx1p['EnvConfig']['pixelRatioInt'] = 0x0, r2b58_['getPixelRatio'] = h9sx1p['pixelRatio'], h9sx1p['_preCreateElement'] = zyodt['createElement'], zyodt['createElement'] = h9sx1p['createElement'], r2b58_['createShaderCondition'] = h9sx1p['createShaderCondition'], uw_52['parseXMLFromString'] = h9sx1p['parseXMLFromString'], h614p['_createInputElement'] = sxhp['_createInputElement'], h9sx1p['EnvConfig']['load'] = a9h1s['prototype']['load'], a9h1s['prototype']['load'] = p16h4g['prototype']['load'], h9sx1p['isZiYu'] && mivnl7 && wx['onMessage'](function (nlvm7) {
        nlvm7['isLoad'] && (zse['ziyuFileData'][nlvm7['url']] = nlvm7['data']);
      });
    }, h9sx1p['onMkdirCallBack'] = function (n7ivf, r_58b2) {
      if (!n7ivf) zse['filesListObj'] = JSON['parse'](r_58b2['data']);
    }, h9sx1p['pixelRatio'] = function () {
      if (!h9sx1p['EnvConfig']['pixelRatioInt']) try {
        var _kbyr8 = wx['getSystemInfoSync']();return h9sx1p['EnvConfig']['pixelRatioInt'] = _kbyr8['pixelRatio'], _kbyr8 = _kbyr8, _kbyr8['pixelRatio'];
      } catch (i7lvnm) {}return h9sx1p['EnvConfig']['pixelRatioInt'];
    }, h9sx1p['createElement'] = function (g9hp) {
      if (g9hp == 'canvas') {
        var _2b8r5;return h9sx1p['idx'] == 0x1 ? h9sx1p['isZiYu'] ? (_2b8r5 = sharedCanvas, _2b8r5['style'] = {}) : _2b8r5 = window['canvas'] : _2b8r5 = window['wx']['createCanvas'](), h9sx1p['idx']++, _2b8r5;
      } else {
        if (g9hp == 'textarea' || g9hp == 'input') return h9sx1p['onCreateInput'](g9hp);else {
          if (g9hp == 'div') {
            var w5ru_2 = h9sx1p['_preCreateElement'](g9hp);return w5ru_2['contains'] = function (qm$7i3) {
              return null;
            }, w5ru_2['removeChild'] = function (sxe9a) {}, w5ru_2;
          } else return h9sx1p['_preCreateElement'](g9hp);
        }
      }
    }, h9sx1p['onCreateInput'] = function (m3l7) {
      var y8dobk = h9sx1p['_preCreateElement'](m3l7);return y8dobk['focus'] = sxhp['wxinputFocus'], y8dobk['blur'] = sxhp['wxinputblur'], y8dobk['style'] = {}, y8dobk['value'] = 0x0, y8dobk['parentElement'] = {}, y8dobk['placeholder'] = {}, y8dobk['type'] = {}, y8dobk['setColor'] = function (mlni73) {}, y8dobk['setType'] = function (nqm37i) {}, y8dobk['setFontFace'] = function (edzyot) {}, y8dobk['addEventListener'] = function (_b5r8) {}, y8dobk['contains'] = function (pv64fg) {
        return null;
      }, y8dobk['removeChild'] = function (vlfn46) {}, y8dobk;
    }, h9sx1p['createShaderCondition'] = function (nf46vl) {
      var xsae = this,
          _r5uw2 = function () {
        var h1g6p4 = nf46vl;return xsae[nf46vl['replace']('this.', '')];
      };return _r5uw2;
    }, h9sx1p['EnvConfig'] = null, h9sx1p['window'] = null, h9sx1p['_preCreateElement'] = null, h9sx1p['_inited'] = ![], h9sx1p['wxRequest'] = null, h9sx1p['systemInfo'] = null, h9sx1p['version'] = '0.0.1', h9sx1p['isZiYu'] = ![], h9sx1p['isPosMsgYu'] = ![], h9sx1p['parseXMLFromString'] = function (btokyd) {
      var f46vn, s9ax1e;btokyd = btokyd['replace'](/>\s+</g, '><');try {
        f46vn = new window['Parser']['DOMParser']()['parseFromString'](btokyd, 'text/xml');
      } catch (im3j$q) {
        throw '需要引入xml解析库文件';
      }return f46vn;
    }, h9sx1p['idx'] = 0x1, h9sx1p;
  }(),
      y8o = function () {
    function pxgh1() {}mq7i3$(pxgh1, 'laya.wx.mini.MiniImage');var i7mq3 = pxgh1['prototype'];return i7mq3['_loadImage'] = function (_58kb) {
      var hs1ax = this,
          $q37m = ![];_58kb['indexOf']('layaNativeDir/') == -0x1 && ($q37m = !![], _58kb = ktozy['formatURL'](_58kb));if (!zse['getFileInfo'](_58kb)) {
        if (_58kb['indexOf']('http://') != -0x1 || _58kb['indexOf']('https://') != -0x1) zse['downImg'](_58kb, new iqj$(pxgh1, pxgh1['onDownImgCallBack'], [_58kb, hs1ax]), _58kb);else pxgh1['onCreateImage'](_58kb, hs1ax, !![]);
      } else pxgh1['onCreateImage'](_58kb, hs1ax, !$q37m);
    }, pxgh1['onDownImgCallBack'] = function (x9ha1, dok8y, zeat) {
      if (!zeat) pxgh1['onCreateImage'](x9ha1, dok8y);else dok8y['onError'](null);
    }, pxgh1['onCreateImage'] = function (ztsea, es9azx, ky_8) {
      ky_8 === void 0x0 && (ky_8 = ![]);var bkdty;if (!ky_8) {
        var b8_k5r = zse['getFileInfo'](ztsea),
            dotby = b8_k5r['md5'];bkdty = zse['getFileNativePath'](dotby);
      } else bkdty = ztsea;if (es9azx['imgCache'] == null) es9azx['imgCache'] = {};var p1xg;function u50w2_() {
        p1xg['onload'] = null, p1xg['onerror'] = null, delete es9azx['imgCache'][ztsea];
      };var atoezd = function () {
        u50w2_(), es9azx['onLoaded'](p1xg);
      },
          lnvf = function () {
        u50w2_(), es9azx['event']('error', 'Load image failed');
      };es9azx['_type'] == 'nativeimage' ? (p1xg = new zyodt['window']['Image'](), p1xg['crossOrigin'] = '', p1xg['onload'] = atoezd, p1xg['onerror'] = lnvf, p1xg['src'] = bkdty, es9azx['imgCache'][ztsea] = p1xg) : new r_b8y['create'](bkdty, { 'onload': atoezd, 'onerror': lnvf, 'onCreate': function (_85) {
          p1xg = _85, es9azx['imgCache'][ztsea] = _85;
        } });
    }, pxgh1;
  }(),
      sxhp = function () {
    function k8brdy() {}return mq7i3$(k8brdy, 'laya.wx.mini.MiniInput'), k8brdy['_createInputElement'] = function () {
      h614p['_initInput'](h614p['area'] = zyodt['createElement']('textarea')), h614p['_initInput'](h614p['input'] = zyodt['createElement']('input')), h614p['inputContainer'] = zyodt['createElement']('div'), h614p['inputContainer']['style']['position'] = 'absolute', h614p['inputContainer']['style']['zIndex'] = 0x186a0, zyodt['container']['appendChild'](h614p['inputContainer']), h614p['inputContainer']['setPos'] = function (mq3i$, k8drby) {
        h614p['inputContainer']['style']['left'] = mq3i$ + 'px', h614p['inputContainer']['style']['top'] = k8drby + 'px';
      }, tobd['stage']['on']('resize', null, k8brdy['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k8ybd) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pgh614['_soundClass'] = h4p6, pgh614['_musicClass'] = h4p6;
    }, k8brdy['_onStageResize'] = function () {
      var l7ivmn = tobd['stage']['_canvasTransform']['identity']();l7ivmn['scale'](zyodt['width'] / f6lv4['canvas']['width'] / r2b58_['getPixelRatio'](), zyodt['height'] / f6lv4['canvas']['height'] / r2b58_['getPixelRatio']());
    }, k8brdy['wxinputFocus'] = function (zastoe) {
      var bkry8 = h614p['inputElement']['target'];if (bkry8 && !bkry8['editable']) return;h4p6f['window']['wx']['offKeyboardConfirm'](), h4p6f['window']['wx']['offKeyboardInput'](), h4p6f['window']['wx']['showKeyboard']({ 'defaultValue': bkry8['text'], 'maxLength': bkry8['maxChars'], 'multiple': bkry8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (dobk8) {}, 'fail': function (a9xh) {} }), h4p6f['window']['wx']['onKeyboardConfirm'](function (s91ae) {
        var tdzyo = s91ae ? s91ae['value'] : '';bkry8['text'] = tdzyo, bkry8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), h4p6f['window']['wx']['onKeyboardInput'](function (odykb8) {
        var fn4l = odykb8 ? odykb8['value'] : '';if (!bkry8['multiline']) {
          if (fn4l['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }bkry8['text'] = fn4l, bkry8['event']('input');
      });
    }, k8brdy['inputEnter'] = function () {
      h614p['inputElement']['target']['focus'] = ![];
    }, k8brdy['wxinputblur'] = function () {
      k8brdy['hideKeyboard']();
    }, k8brdy['hideKeyboard'] = function () {
      h4p6f['window']['wx']['offKeyboardConfirm'](), h4p6f['window']['wx']['offKeyboardInput'](), h4p6f['window']['wx']['hideKeyboard']({ 'success': function (p6g41h) {
          console['log']('隐藏键盘');
        }, 'fail': function (lfg6v) {
          console['log']('隐藏键盘出错:' + (lfg6v ? lfg6v['errMsg'] : ''));
        } });
    }, k8brdy;
  }(),
      p16h4g = function () {
    function boy8() {}mq7i3$(boy8, 'laya.wx.mini.MiniLoader');var $jqi3 = boy8['prototype'];return $jqi3['load'] = function (ry_k8, kbdyt, nl3mi7, kyb8r, br5_2) {
      nl3mi7 === void 0x0 && (nl3mi7 = !![]), br5_2 === void 0x0 && (br5_2 = ![]);var nlmi73 = this;nlmi73['_url'] = ry_k8;if (ry_k8['indexOf']('data:image') === 0x0) nlmi73['_type'] = kbdyt = 'image';else nlmi73['_type'] = kbdyt || (kbdyt = nlmi73['getTypeFromUrl'](ry_k8));nlmi73['_cache'] = nl3mi7, nlmi73['_data'] = null;var a9h1 = 'ascii';if (ry_k8['indexOf']('.fnt') != -0x1) a9h1 = 'utf8';else kbdyt == 'arraybuffer' && (a9h1 = '');;var rbyk_ = uw_52['getFileExtension'](ry_k8);if (boy8['_fileTypeArr']['indexOf'](rbyk_) != -0x1) h4p6f['EnvConfig']['load']['call'](this, ry_k8, kbdyt, nl3mi7, kyb8r, br5_2);else {
        if (!zse['getFileInfo'](ry_k8)) {
          if (ry_k8['indexOf']('layaNativeDir/') != -0x1) {
            if (h4p6f['isZiYu']) {
              var vm7ln = zse['ziyuFileData'][ry_k8];nlmi73['onLoaded'](vm7ln);return;
            } else {
              cosnole['log']('read read'), zse['read'](ry_k8, a9h1, new iqj$(boy8, boy8['onReadNativeCallBack'], [a9h1, ry_k8, kbdyt, nl3mi7, kyb8r, br5_2, nlmi73]));return;
            }
          }if (ktozy['rootPath'] == '') var nl67v = ry_k8;else nl67v = ry_k8['split'](ktozy['rootPath'])[0x0];ry_k8['indexOf']('http://') != -0x1 || ry_k8['indexOf']('https://') != -0x1 ? h4p6f['EnvConfig']['load']['call'](nlmi73, ry_k8, kbdyt, nl3mi7, kyb8r, br5_2) : zse['readFile'](nl67v, a9h1, new iqj$(boy8, boy8['onReadNativeCallBack'], [a9h1, ry_k8, kbdyt, nl3mi7, kyb8r, br5_2, nlmi73]), ry_k8);
        } else h4p6f['EnvConfig']['load']['call'](this, ry_k8, kbdyt, nl3mi7, kyb8r, br5_2);
      }
    }, $jqi3['resMgrLoad'] = function (vfpg46, uw250_, zxs9e, eyzo, jim$q3, li7n3, oyzkdt) {
      zxs9e === void 0x0 && (zxs9e = 0x0), eyzo === void 0x0 && (eyzo = ![]), jim$q3 === void 0x0 && (jim$q3 = ![]), li7n3 === void 0x0 && (li7n3 = 0x0), oyzkdt === void 0x0 && (oyzkdt = 0x3), vfpg46['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vfpg46), h4p6f['EnvConfig']['resMgrLoad'](vfpg46, (b_yk, p6f4, pgv6f4) => {
        boy8['prototype']['resMgrLoadCallBack'](b_yk, p6f4, pgv6f4, uw250_);
      }, zxs9e, eyzo, jim$q3, li7n3, oyzkdt);
    }, $jqi3['resMgrLoadCallBack'] = function (ph6g14, _u2rw, yrb8_k, _bk8yr) {
      console['log']('buff:::', ph6g14, yrb8_k, zse['fileNativeDir'] + '///' + zse['fileListName']), _bk8yr(ph6g14, _u2rw, yrb8_k);
    }, $jqi3['clearRes'] = function (doyz, gp64vf) {
      gp64vf === void 0x0 && (gp64vf = ![]);var a1xes = this;a1xes['clearRes'](doyz, gp64vf);var _50u2w = zse['getFileInfo'](doyz);if (_50u2w && (doyz['indexOf']('http://') != -0x1 || doyz['indexOf']('https://') != -0x1)) {
        var u852_ = _50u2w['md5'],
            n7mvli = zse['getFileNativePath'](u852_);zse['remove'](n7mvli);
      }
    }, boy8['onReadNativeCallBack'] = function (mni3l7, l7mvi, fvn7l6, h1x9g, sh9x1a, m$iq3, $qmi73, ozykdt, vl7) {
      h1x9g === void 0x0 && (h1x9g = !![]), m$iq3 === void 0x0 && (m$iq3 = ![]), ozykdt === void 0x0 && (ozykdt = 0x0);if (!ozykdt) {
        var n4v6f;if (fvn7l6 == 'json' || fvn7l6 == 'atlas') n4v6f = h4p6f['getJson'](vl7['data']);else fvn7l6 == 'xml' ? n4v6f = uw_52['parseXMLFromString'](vl7['data']) : n4v6f = vl7['data'];$qmi73['onLoaded'](n4v6f), !h4p6f['isZiYu'] && h4p6f['isPosMsgYu'] && fvn7l6 != 'arraybuffer' && wx['postMessage']({ 'url': l7mvi, 'data': n4v6f, 'isLoad': !![] });
      } else ozykdt == 0x1 && h4p6f['EnvConfig']['load']['call']($qmi73, l7mvi, fvn7l6, h1x9g, sh9x1a, m$iq3);
    }, im3qn(boy8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), boy8;
  }(),
      zse = function (kbdr8) {
    function etdzy() {
      etdzy['__super']['call'](this);;
    }return mq7i3$(etdzy, 'laya.wx.mini.MiniFileMgr', kbdr8), etdzy['isLoadFile'] = function (deyotz) {
      return etdzy['_fileTypeArr']['indexOf'](deyotz) != -0x1 ? !![] : ![];
    }, etdzy['getFileInfo'] = function (vl7i) {
      var r8k5 = vl7i['split']('?')[0x0],
          im3n7 = etdzy['filesListObj'][r8k5];if (im3n7 == null) return null;else return im3n7;return null;
    }, etdzy['onFileUpdate'] = function (kyod, tzxse) {
      var zeyd = kyod['split']('/'),
          mlv7in = zeyd[zeyd['length'] - 0x1],
          axse = etdzy['getFileInfo'](tzxse);if (axse == null) etdzy['onSaveFile'](tzxse, mlv7in);else {
        if (axse['readyUrl'] != tzxse) etdzy['remove'](mlv7in, tzxse);
      }
    }, etdzy['exits'] = function (do8b, _wru25) {
      var b_8r5 = etdzy['getFileNativePath'](do8b);etdzy['fs']['getFileInfo']({ 'filePath': b_8r5, 'success': function (sh9a) {
          _wru25 != null && _wru25['runWith']([0x0, sh9a]);
        }, 'fail': function (q3m$7) {
          _wru25 != null && _wru25['runWith']([0x1, q3m$7]);
        } });
    }, etdzy['read'] = function (eozdat, fnl7, ln7ifv, _yrkb8) {
      fnl7 === void 0x0 && (fnl7 = 'ascill'), _yrkb8 === void 0x0 && (_yrkb8 = '');var ru5_2;_yrkb8 != '' ? ru5_2 = etdzy['getFileNativePath'](eozdat) : ru5_2 = eozdat, etdzy['fs']['readFile']({ 'filePath': ru5_2, 'encoding': fnl7, 'success': function (im3$j) {
          ln7ifv != null && ln7ifv['runWith']([0x0, im3$j]);
        }, 'fail': function (w0_25u) {
          if (w0_25u && _yrkb8 != '') etdzy['down'](_yrkb8, fnl7, ln7ifv, _yrkb8);else ln7ifv != null && ln7ifv['runWith']([0x1]);
        } });
    }, etdzy['readNativeFile'] = function (h49gp, rykdb) {
      etdzy['fs']['readFile']({ 'filePath': h49gp, 'encoding': '', 'success': function (zos) {
          rykdb != null && rykdb['runWith']([0x0]);
        }, 'fail': function (ytobk) {
          rykdb != null && rykdb['runWith']([0x1]);
        } });
    }, etdzy['down'] = function (b8r_y, i7m3q, oktdyb, xzets) {
      i7m3q === void 0x0 && (i7m3q = 'ascill'), xzets === void 0x0 && (xzets = '');var fnv7li = etdzy['getFileNativePath'](xzets),
          h4f6pg = etdzy['wxdown']({ 'url': b8r_y, 'filePath': fnv7li, 'success': function (qn7) {
          if (qn7['statusCode'] === 0xc8) etdzy['readFile'](qn7['filePath'], i7m3q, oktdyb, xzets);
        }, 'fail': function (ztyde) {
          oktdyb != null && oktdyb['runWith']([0x1, ztyde]);
        } });h4f6pg['onProgressUpdate'](function (n46v) {
        oktdyb != null && oktdyb['runWith']([0x2, n46v['progress']]);
      });
    }, etdzy['readFile'] = function (p6h1g, n7mi3, fvnl6, body8) {
      n7mi3 === void 0x0 && (n7mi3 = 'ascill'), body8 === void 0x0 && (body8 = ''), etdzy['fs']['readFile']({ 'filePath': p6h1g, 'encoding': n7mi3, 'success': function (eazt) {
          if (p6h1g['indexOf']('http://') != -0x1 || p6h1g['indexOf']('https://') != -0x1) etdzy['onFileUpdate'](p6h1g, body8);fvnl6 != null && fvnl6['runWith']([0x0, eazt]);
        }, 'fail': function (etaxs) {
          if (etaxs) fvnl6 != null && fvnl6['runWith']([0x1, etaxs]);
        } });
    }, etdzy['downImg'] = function (r8bky_, niqm73, okbt) {
      okbt === void 0x0 && (okbt = '');var u05w = etdzy['wxdown']({ 'url': r8bky_, 'success': function (odzyt) {
          odzyt['statusCode'] === 0xc8 && etdzy['copyFile'](odzyt['tempFilePath'], okbt, niqm73);
        }, 'fail': function (zs9xae) {
          niqm73 != null && niqm73['runWith']([0x1, zs9xae]);
        } });
    }, etdzy['copyFile'] = function (b8rk, dtyokb, bykod8) {
      var u528r = b8rk['split']('/'),
          sozeat = u528r[u528r['length'] - 0x1],
          rb_582 = dtyokb['split']('?')[0x0],
          ph4g16 = etdzy['getFileInfo'](dtyokb),
          dybrk = etdzy['getFileNativePath'](sozeat);etdzy['fs']['copyFile']({ 'srcPath': b8rk, 'destPath': dybrk, 'success': function (kyrbd8) {
          if (!ph4g16) etdzy['onSaveFile'](dtyokb, sozeat), bykod8 != null && bykod8['runWith']([0x0]);else {
            if (ph4g16['readyUrl'] != dtyokb) etdzy['remove'](sozeat, dtyokb, bykod8);
          }
        }, 'fail': function (_8b52) {
          bykod8 != null && bykod8['runWith']([0x1, _8b52]);
        } });
    }, etdzy['getFileNativePath'] = function (g19hx) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g19hx;
    }, etdzy['remove'] = function (sxe19, drbk8, bykr8d) {
      drbk8 === void 0x0 && (drbk8 = '');var ae9z = etdzy['getFileInfo'](drbk8),
          $3imq = etdzy['getFileNativePath'](ae9z['md5']);tobd['loader']['clearRes'](ae9z['readyUrl']), etdzy['fs']['unlink']({ 'filePath': $3imq, 'success': function (ybr8) {
          if (drbk8 != '') etdzy['onSaveFile'](drbk8, sxe19);bykr8d != null && bykr8d['runWith']([0x0]);
        }, 'fail': function (fhp6g4) {} });
    }, etdzy['onSaveFile'] = function (kyd8b, mi$q37) {
      var esx1a9 = kyd8b['split']('?')[0x0];etdzy['filesListObj'][esx1a9] = { 'md5': mi$q37, 'readyUrl': kyd8b }, etdzy['fs']['writeFile']({ 'filePath': etdzy['fileNativeDir'] + '/' + etdzy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](etdzy['filesListObj']), 'success': function (w25_ur) {
          console['log']('写入测试测试成功：', w25_ur);
        }, 'fail': function (gph) {
          console['log']('写入测试测试失败：', gph);
        } });
    }, etdzy['existDir'] = function (azxts, oyedt) {
      etdzy['fs']['mkdir']({ 'dirPath': azxts, 'success': function (tzead) {
          oyedt != null && oyedt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lgv4f6) {
          if (lgv4f6['errMsg']['indexOf']('file already exists') != -0x1) etdzy['readSync'](etdzy['fileListName'], 'utf8', oyedt);else oyedt != null && oyedt['runWith']([0x1, lgv4f6]);
        } });
    }, etdzy['readSync'] = function (glfv6, lgv6f4, yzokdt, bkrd) {
      lgv6f4 === void 0x0 && (lgv6f4 = 'ascill'), bkrd === void 0x0 && (bkrd = '');var eztxs = etdzy['getFileNativePath'](glfv6),
          k8dbo;try {
        k8dbo = etdzy['fs']['readFileSync'](eztxs), yzokdt != null && yzokdt['runWith']([0x0, { 'data': k8dbo }]);
      } catch (_k8bry) {
        yzokdt != null && yzokdt['runWith']([0x1]);
      }
    }, etdzy['readCache'] = function () {}, etdzy['writeCache'] = function (p6fv4) {
      var tdzoae = readyUrl['split']('?')[0x0];etdzy['filesListObj'][tdzoae] = { 'md5': md5Name, 'readyUrl': readyUrl }, etdzy['fs']['writeFile']({ 'filePath': etdzy['fileNativeDir'] + '/' + etdzy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](etdzy['filesListObj']), 'success': function (yktb) {}, 'fail': function (x9ph1s) {} });
    }, etdzy['setNativeFileDir'] = function (dztae) {
      etdzy['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dztae;
    }, etdzy['filesListObj'] = {}, etdzy['fileNativeDir'] = null, etdzy['fileListName'] = 'layaairfiles.txt', etdzy['ziyuFileData'] = {}, im3qn(etdzy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), etdzy;
  }(ydtzko),
      h4p6 = function (nl7vm) {
    function xsa91() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xsa91['__super']['call'](this), this['_sound'] = xsa91['_createSound']();
    }mq7i3$(xsa91, 'laya.wx.mini.MiniSound', nl7vm);var xza9es = xsa91['prototype'];return xza9es['load'] = function (g4fh) {
      var gx19hp = this;g4fh = ktozy['formatURL'](g4fh), this['url'] = g4fh;if (xsa91['_audioCache'][g4fh]) {
        this['event']('complete');return;
      }function b85r() {
        if (xsa91['_null'] != undefined) gx19hp['_sound']['onCanplay'](xsa91['_null']), gx19hp['_sound']['onError'](xsa91['_null']);else try {
          gx19hp['_sound']['onCanplay'](null), gx19hp['_sound']['onError'](null), xsa91['_null'] = null;
        } catch (hx19s) {
          console['warn']('[wxmini] _clearSound:' + hx19s), gx19hp['_sound']['onCanplay'](vfi7nl), gx19hp['_sound']['onError'](vfi7nl), xsa91['_null'] = vfi7nl;
        }
      }function _8rbk5() {
        b85r(), tzdaeo['loaded'] = !![], tzdaeo['event']('complete'), xsa91['_audioCache'][tzdaeo['url']] = tzdaeo;
      }function otkybd(dktoyz) {
        console['error']('errCode=' + dktoyz['errCode'] + '  errMsg=' + dktoyz['errMsg']), b85r(), tzdaeo['event']('error');
      }function vfi7nl() {}this['_sound']['onCanplay'](_8rbk5), this['_sound']['onError'](otkybd), this['_sound']['src'] = g4fh;var tzdaeo = this;
    }, xza9es['play'] = function (jqm$3i, w0_u25) {
      jqm$3i === void 0x0 && (jqm$3i = 0x0), w0_u25 === void 0x0 && (w0_u25 = 0x0);var gh6p4;if (this['url'] == pgh614['_tMusic']) {
        if (!xsa91['_musicAudio']) xsa91['_musicAudio'] = xsa91['_createSound']();gh6p4 = xsa91['_musicAudio'];
      } else gh6p4 = xsa91['_createSound']();gh6p4['src'] = this['url'];var vflin7 = new nimv7l(gh6p4);return vflin7['url'] = this['url'], vflin7['loops'] = w0_u25, vflin7['startTime'] = jqm$3i, vflin7['play'](), pgh614['addChannel'](vflin7), vflin7;
    }, xza9es['dispose'] = function () {
      var il3mn7 = xsa91['_audioCache'][this['url']];il3mn7 && (il3mn7['src'] = '', delete xsa91['_audioCache'][this['url']]);
    }, vl64n(0x0, xza9es, 'duration', function () {
      return this['_sound']['duration'];
    }), xsa91['_createSound'] = function () {
      return xsa91['_id']++, h4p6f['window']['wx']['createInnerAudioContext']();
    }, xsa91['_musicAudio'] = null, xsa91['_id'] = 0x0, xsa91['_audioCache'] = {}, xsa91['_null'] = undefined, xsa91;
  }(ydtzko),
      nimv7l = function (g6vf4l) {
    function kdyotz(im$q3j) {
      this['_audio'] = null, this['_onEnd'] = null, kdyotz['__super']['call'](this), this['_audio'] = im$q3j, this['_onEnd'] = uw_52['bind'](this['__onEnd'], this), im$q3j['onEnded'](this['_onEnd']);
    }mq7i3$(kdyotz, 'laya.wx.mini.MiniSoundChannel', g6vf4l);var kzdoy = kdyotz['prototype'];return kzdoy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tobd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kzdoy['__onNull'] = function () {}, kzdoy['play'] = function () {
      this['isStopped'] = ![], pgh614['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, kzdoy['stop'] = function () {
      this['isStopped'] = !![], pgh614['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kdyotz['_null'] != undefined) this['_audio']['onEnded'](kdyotz['_null']);else try {
        this['_audio']['onEnded'](null), kdyotz['_null'] = null;
      } catch (xsezt) {
        console['warn']('[wxmini] stop:' + xsezt), this['_audio']['onEnded'](uw_52['bind'](this['__onNull'], this)), kdyotz['_null'] = uw_52['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, kzdoy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, kzdoy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pgh614['addChannel'](this), this['_audio']['play']();
    }, vl64n(0x0, kzdoy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vl64n(0x0, kzdoy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vl64n(0x0, kzdoy, 'volume', function () {
      return 0x1;
    }, function (satxz) {}), kdyotz['_null'] = undefined, kdyotz;
  }(w_502u);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bdok8 in Laya) {
    var oy8kb = Laya[bdok8];oy8kb && oy8kb['__isclass'] && (exports[bdok8] = oy8kb);
  }
});