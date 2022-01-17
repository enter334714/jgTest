var W = wx.$l;
(function (window, document, $8s2db) {
  var kabd$2 = $8s2db['un'],
      hjb2ak = $8s2db['uns'],
      $2sd4 = $8s2db['static'],
      ltjqh = $8s2db['class'],
      daj2b = $8s2db['getset'],
      fzltq5 = $8s2db['__newvec'],
      r0n3yx = laya['utils']['Browser'],
      bs28$ = laya['events']['Event'],
      kzhq = laya['events']['EventDispatcher'],
      m3ir0 = laya['resource']['HTMLImage'],
      xy48n_ = laya['utils']['Handler'],
      lztfq5 = laya['display']['Input'],
      k$b2a = laya['net']['Loader'],
      tfl59o = laya['maths']['Matrix'],
      e7vo19 = laya['renders']['Render'],
      g16pe = laya['utils']['RunDriver'],
      oft759 = laya['media']['Sound'],
      gvu = laya['media']['SoundChannel'],
      tqhzjl = laya['media']['SoundManager'],
      _y0x4 = laya['display']['Stage'],
      s$b2d8 = laya['net']['URL'],
      u1evg6 = laya['utils']['Utils'],
      hbzjk = function () {
    function $2b8ds() {}return ltjqh($2b8ds, 'laya.wx.mini.MiniAdpter'), $2b8ds['getJson'] = function (aj2kd) {
      return JSON['parse'](aj2kd);
    }, $2b8ds['init'] = function ($b8d2, nx_84) {
      $b8d2 === void 0x0 && ($b8d2 = ![]), nx_84 === void 0x0 && (nx_84 = ![]);if ($2b8ds['_inited']) return;$2b8ds['window'] = window;if ($2b8ds['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$2b8ds['_inited'] = !![], $2b8ds['isZiYu'] = nx_84, $2b8ds['isPosMsgYu'] = $b8d2, $2b8ds['EnvConfig'] = {}, !$2b8ds['isZiYu'] && (ny0x_3['setNativeFileDir']('/layaairGame'), ny0x_3['existDir'](ny0x_3['fileNativeDir'], xy48n_['create']($2b8ds, $2b8ds['onMkdirCallBack']))), $2b8ds['window']['focus'] = function () {}, $8s2db['getUrlPath'] = function () {}, $2b8ds['window']['logtime'] = function (_8ny) {}, $2b8ds['window']['alertTimeLog'] = function (yx_) {}, $2b8ds['window']['resetShareInfo'] = function () {}, $2b8ds['window']['CanvasRenderingContext2D'] = function () {}, $2b8ds['window']['CanvasRenderingContext2D']['prototype'] = $2b8ds['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $2b8ds['window']['document']['body']['appendChild'] = function () {}, $2b8ds['EnvConfig']['pixelRatioInt'] = 0x0, g16pe['getPixelRatio'] = $2b8ds['pixelRatio'], $2b8ds['_preCreateElement'] = r0n3yx['createElement'], r0n3yx['createElement'] = $2b8ds['createElement'], g16pe['createShaderCondition'] = $2b8ds['createShaderCondition'], u1evg6['parseXMLFromString'] = $2b8ds['parseXMLFromString'], lztfq5['_createInputElement'] = bsa2$['_createInputElement'], $2b8ds['EnvConfig']['load'] = k$b2a['prototype']['load'], k$b2a['prototype']['load'] = yn4x_0['prototype']['load'], $2b8ds['isZiYu'] && $b8d2 && wx['onMessage'](function (bds$28) {
        bds$28['isLoad'] && (ny0x_3['ziyuFileData'][bds$28['url']] = bds$28['data']);
      });
    }, $2b8ds['onMkdirCallBack'] = function (t7of, ov179e) {
      if (!t7of) ny0x_3['filesListObj'] = JSON['parse'](ov179e['data']);
    }, $2b8ds['pixelRatio'] = function () {
      if (!$2b8ds['EnvConfig']['pixelRatioInt']) try {
        var e1v = wx['getSystemInfoSync']();return $2b8ds['EnvConfig']['pixelRatioInt'] = e1v['pixelRatio'], e1v = e1v, e1v['pixelRatio'];
      } catch (f5ltq9) {}return $2b8ds['EnvConfig']['pixelRatioInt'];
    }, $2b8ds['createElement'] = function (v5o9f) {
      if (v5o9f == 'canvas') {
        var o5vf7;return $2b8ds['idx'] == 0x1 ? $2b8ds['isZiYu'] ? (o5vf7 = sharedCanvas, o5vf7['style'] = {}) : o5vf7 = window['canvas'] : o5vf7 = window['wx']['createCanvas'](), $2b8ds['idx']++, o5vf7;
      } else {
        if (v5o9f == 'textarea' || v5o9f == 'input') return $2b8ds['onCreateInput'](v5o9f);else {
          if (v5o9f == 'div') {
            var ajhk = $2b8ds['_preCreateElement'](v5o9f);return ajhk['contains'] = function (ahjzb) {
              return null;
            }, ajhk['removeChild'] = function (bhja2k) {}, ajhk;
          } else return $2b8ds['_preCreateElement'](v5o9f);
        }
      }
    }, $2b8ds['onCreateInput'] = function (tol5f9) {
      var aqzkjh = $2b8ds['_preCreateElement'](tol5f9);return aqzkjh['focus'] = bsa2$['wxinputFocus'], aqzkjh['blur'] = bsa2$['wxinputblur'], aqzkjh['style'] = {}, aqzkjh['value'] = 0x0, aqzkjh['parentElement'] = {}, aqzkjh['placeholder'] = {}, aqzkjh['type'] = {}, aqzkjh['setColor'] = function (t7o59f) {}, aqzkjh['setType'] = function (yrc3m0) {}, aqzkjh['setFontFace'] = function (yc30) {}, aqzkjh['addEventListener'] = function (of75v) {}, aqzkjh['contains'] = function ($48ds) {
        return null;
      }, aqzkjh['removeChild'] = function (yx_40n) {}, aqzkjh;
    }, $2b8ds['createShaderCondition'] = function (o79t5) {
      var _48ns = this,
          $d28s = function () {
        var qlhz5t = o79t5;return _48ns[o79t5['replace']('this.', '')];
      };return $d28s;
    }, $2b8ds['EnvConfig'] = null, $2b8ds['window'] = null, $2b8ds['_preCreateElement'] = null, $2b8ds['_inited'] = ![], $2b8ds['wxRequest'] = null, $2b8ds['systemInfo'] = null, $2b8ds['version'] = '0.0.1', $2b8ds['isZiYu'] = ![], $2b8ds['isPosMsgYu'] = ![], $2b8ds['parseXMLFromString'] = function (zf5lt) {
      var m0cr3i, n04_y;zf5lt = zf5lt['replace'](/>\s+</g, '><');try {
        m0cr3i = new window['Parser']['DOMParser']()['parseFromString'](zf5lt, 'text/xml');
      } catch (kabj2) {
        throw '需要引入xml解析库文件';
      }return m0cr3i;
    }, $2b8ds['idx'] = 0x1, $2b8ds;
  }(),
      v61geu = function () {
    function e179v() {}ltjqh(e179v, 'laya.wx.mini.MiniImage');var j2khb = e179v['prototype'];return j2khb['_loadImage'] = function (ltjhzq) {
      var fv7o19 = this,
          sb$a2 = ![];ltjhzq['indexOf']('layaNativeDir/') == -0x1 && (sb$a2 = !![], ltjhzq = s$b2d8['formatURL'](ltjhzq));if (!ny0x_3['getFileInfo'](ltjhzq)) {
        if (ltjhzq['indexOf']('http://') != -0x1 || ltjhzq['indexOf']('https://') != -0x1) ny0x_3['downImg'](ltjhzq, new xy48n_(e179v, e179v['onDownImgCallBack'], [ltjhzq, fv7o19]), ltjhzq);else e179v['onCreateImage'](ltjhzq, fv7o19, !![]);
      } else e179v['onCreateImage'](ltjhzq, fv7o19, !sb$a2);
    }, e179v['onDownImgCallBack'] = function (d$bk, rm3ci, zljhk) {
      if (!zljhk) e179v['onCreateImage'](d$bk, rm3ci);else rm3ci['onError'](null);
    }, e179v['onCreateImage'] = function (zqjahk, ft59ql, d4s_8$) {
      d4s_8$ === void 0x0 && (d4s_8$ = ![]);var f7o9v1;if (!d4s_8$) {
        var xrn3 = ny0x_3['getFileInfo'](zqjahk),
            irm30 = xrn3['md5'];f7o9v1 = ny0x_3['getFileNativePath'](irm30);
      } else f7o9v1 = zqjahk;if (ft59ql['imgCache'] == null) ft59ql['imgCache'] = {};var lq95tf;function epug61() {
        lq95tf['onload'] = null, lq95tf['onerror'] = null, delete ft59ql['imgCache'][zqjahk];
      };var da2bj = function () {
        epug61(), ft59ql['onLoaded'](lq95tf);
      },
          o795v = function () {
        epug61(), ft59ql['event']('error', 'Load image failed');
      };ft59ql['_type'] == 'nativeimage' ? (lq95tf = new r0n3yx['window']['Image'](), lq95tf['crossOrigin'] = '', lq95tf['onload'] = da2bj, lq95tf['onerror'] = o795v, lq95tf['src'] = f7o9v1, ft59ql['imgCache'][zqjahk] = lq95tf) : new m3ir0['create'](f7o9v1, { 'onload': da2bj, 'onerror': o795v, 'onCreate': function (ve17) {
          lq95tf = ve17, ft59ql['imgCache'][zqjahk] = ve17;
        } });
    }, e179v;
  }(),
      bsa2$ = function () {
    function g7uve() {}return ltjqh(g7uve, 'laya.wx.mini.MiniInput'), g7uve['_createInputElement'] = function () {
      lztfq5['_initInput'](lztfq5['area'] = r0n3yx['createElement']('textarea')), lztfq5['_initInput'](lztfq5['input'] = r0n3yx['createElement']('input')), lztfq5['inputContainer'] = r0n3yx['createElement']('div'), lztfq5['inputContainer']['style']['position'] = 'absolute', lztfq5['inputContainer']['style']['zIndex'] = 0x186a0, r0n3yx['container']['appendChild'](lztfq5['inputContainer']), lztfq5['inputContainer']['setPos'] = function (xr3n0y, xny03r) {
        lztfq5['inputContainer']['style']['left'] = xr3n0y + 'px', lztfq5['inputContainer']['style']['top'] = xny03r + 'px';
      }, $8s2db['stage']['on']('resize', null, g7uve['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tf97o) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), tqhzjl['_soundClass'] = tq9lf, tqhzjl['_musicClass'] = tq9lf;
    }, g7uve['_onStageResize'] = function () {
      var qzhkaj = $8s2db['stage']['_canvasTransform']['identity']();qzhkaj['scale'](r0n3yx['width'] / e7vo19['canvas']['width'] / g16pe['getPixelRatio'](), r0n3yx['height'] / e7vo19['canvas']['height'] / g16pe['getPixelRatio']());
    }, g7uve['wxinputFocus'] = function (e197ov) {
      var hlqkjz = lztfq5['inputElement']['target'];if (hlqkjz && !hlqkjz['editable']) return;hbzjk['window']['wx']['offKeyboardConfirm'](), hbzjk['window']['wx']['offKeyboardInput'](), hbzjk['window']['wx']['showKeyboard']({ 'defaultValue': hlqkjz['text'], 'maxLength': hlqkjz['maxChars'], 'multiple': hlqkjz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (adsb$) {}, 'fail': function (hlqkzj) {} }), hbzjk['window']['wx']['onKeyboardConfirm'](function (gvue17) {
        var zthl = gvue17 ? gvue17['value'] : '';hlqkjz['text'] = zthl, hlqkjz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), hbzjk['window']['wx']['onKeyboardInput'](function (jbhakz) {
        var _4sd = jbhakz ? jbhakz['value'] : '';if (!hlqkjz['multiline']) {
          if (_4sd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hlqkjz['text'] = _4sd, hlqkjz['event']('input');
      });
    }, g7uve['inputEnter'] = function () {
      lztfq5['inputElement']['target']['focus'] = ![];
    }, g7uve['wxinputblur'] = function () {
      g7uve['hideKeyboard']();
    }, g7uve['hideKeyboard'] = function () {
      hbzjk['window']['wx']['offKeyboardConfirm'](), hbzjk['window']['wx']['offKeyboardInput'](), hbzjk['window']['wx']['hideKeyboard']({ 'success': function ($4_d8) {
          console['log']('隐藏键盘');
        }, 'fail': function (u6pe1) {
          console['log']('隐藏键盘出错:' + (u6pe1 ? u6pe1['errMsg'] : ''));
        } });
    }, g7uve;
  }(),
      yn4x_0 = function () {
    function qlftz() {}ltjqh(qlftz, 'laya.wx.mini.MiniLoader');var $sn = qlftz['prototype'];return $sn['load'] = function (qf59t, x8n4_s, thzj, d$bs2a, p1g) {
      thzj === void 0x0 && (thzj = !![]), p1g === void 0x0 && (p1g = ![]);var cwr3m = this;cwr3m['_url'] = qf59t;if (qf59t['indexOf']('data:image') === 0x0) cwr3m['_type'] = x8n4_s = 'image';else cwr3m['_type'] = x8n4_s || (x8n4_s = cwr3m['getTypeFromUrl'](qf59t));cwr3m['_cache'] = thzj, cwr3m['_data'] = null;var t5lq9f = 'ascii';if (qf59t['indexOf']('.fnt') != -0x1) t5lq9f = 'utf8';else x8n4_s == 'arraybuffer' && (t5lq9f = '');;var hj2ab = u1evg6['getFileExtension'](qf59t);if (qlftz['_fileTypeArr']['indexOf'](hj2ab) != -0x1) hbzjk['EnvConfig']['load']['call'](this, qf59t, x8n4_s, thzj, d$bs2a, p1g);else {
        if (!ny0x_3['getFileInfo'](qf59t)) {
          if (qf59t['indexOf']('layaNativeDir/') != -0x1) {
            if (hbzjk['isZiYu']) {
              var kajh2 = ny0x_3['ziyuFileData'][qf59t];cwr3m['onLoaded'](kajh2);return;
            } else {
              cosnole['log']('read read'), ny0x_3['read'](qf59t, t5lq9f, new xy48n_(qlftz, qlftz['onReadNativeCallBack'], [t5lq9f, qf59t, x8n4_s, thzj, d$bs2a, p1g, cwr3m]));return;
            }
          }if (s$b2d8['rootPath'] == '') var bh2 = qf59t;else bh2 = qf59t['split'](s$b2d8['rootPath'])[0x0];qf59t['indexOf']('http://') != -0x1 || qf59t['indexOf']('https://') != -0x1 ? hbzjk['EnvConfig']['load']['call'](cwr3m, qf59t, x8n4_s, thzj, d$bs2a, p1g) : ny0x_3['readFile'](bh2, t5lq9f, new xy48n_(qlftz, qlftz['onReadNativeCallBack'], [t5lq9f, qf59t, x8n4_s, thzj, d$bs2a, p1g, cwr3m]), qf59t);
        } else hbzjk['EnvConfig']['load']['call'](this, qf59t, x8n4_s, thzj, d$bs2a, p1g);
      }
    }, $sn['resMgrLoad'] = function (bkaj, bkjad, yx0_3n, kbd2$a, c3x0yr, a2dj, s4_x) {
      yx0_3n === void 0x0 && (yx0_3n = 0x0), kbd2$a === void 0x0 && (kbd2$a = ![]), c3x0yr === void 0x0 && (c3x0yr = ![]), a2dj === void 0x0 && (a2dj = 0x0), s4_x === void 0x0 && (s4_x = 0x3), bkaj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bkaj), hbzjk['EnvConfig']['resMgrLoad'](bkaj, (g1eu6v, jhazbk, ltf59) => {
        qlftz['prototype']['resMgrLoadCallBack'](g1eu6v, jhazbk, ltf59, bkjad);
      }, yx0_3n, kbd2$a, c3x0yr, a2dj, s4_x);
    }, $sn['resMgrLoadCallBack'] = function (t79fo, vo91f, s$24, ryc30m) {
      console['log']('buff:::', t79fo, s$24, ny0x_3['fileNativeDir'] + '///' + ny0x_3['fileListName']), ryc30m(t79fo, vo91f, s$24);
    }, $sn['clearRes'] = function (asb2$, $d8bs2) {
      $d8bs2 === void 0x0 && ($d8bs2 = ![]);var ft957o = this;ft957o['clearRes'](asb2$, $d8bs2);var flq59 = ny0x_3['getFileInfo'](asb2$);if (flq59 && (asb2$['indexOf']('http://') != -0x1 || asb2$['indexOf']('https://') != -0x1)) {
        var qltjzh = flq59['md5'],
            s8d24 = ny0x_3['getFileNativePath'](qltjzh);ny0x_3['remove'](s8d24);
      }
    }, qlftz['onReadNativeCallBack'] = function (lo9, yn0x_4, tjhql, lqkz, tz5hql, _4x8, $d2sab, uepg16, zth) {
      lqkz === void 0x0 && (lqkz = !![]), _4x8 === void 0x0 && (_4x8 = ![]), uepg16 === void 0x0 && (uepg16 = 0x0);if (!uepg16) {
        var fo79v5;if (tjhql == 'json' || tjhql == 'atlas') fo79v5 = hbzjk['getJson'](zth['data']);else tjhql == 'xml' ? fo79v5 = u1evg6['parseXMLFromString'](zth['data']) : fo79v5 = zth['data'];$d2sab['onLoaded'](fo79v5), !hbzjk['isZiYu'] && hbzjk['isPosMsgYu'] && tjhql != 'arraybuffer' && wx['postMessage']({ 'url': yn0x_4, 'data': fo79v5, 'isLoad': !![] });
      } else uepg16 == 0x1 && hbzjk['EnvConfig']['load']['call']($d2sab, yn0x_4, tjhql, lqkz, tz5hql, _4x8);
    }, $2sd4(qlftz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qlftz;
  }(),
      ny0x_3 = function (y4_nx0) {
    function v71geu() {
      v71geu['__super']['call'](this);;
    }return ltjqh(v71geu, 'laya.wx.mini.MiniFileMgr', y4_nx0), v71geu['isLoadFile'] = function (zkqlj) {
      return v71geu['_fileTypeArr']['indexOf'](zkqlj) != -0x1 ? !![] : ![];
    }, v71geu['getFileInfo'] = function (eg61pu) {
      var l5tqhz = eg61pu['split']('?')[0x0],
          b$s82 = v71geu['filesListObj'][l5tqhz];if (b$s82 == null) return null;else return b$s82;return null;
    }, v71geu['onFileUpdate'] = function (ak2hjb, kbdj2a) {
      var _ds8$ = ak2hjb['split']('/'),
          y_8n = _ds8$[_ds8$['length'] - 0x1],
          e6gp1 = v71geu['getFileInfo'](kbdj2a);if (e6gp1 == null) v71geu['onSaveFile'](kbdj2a, y_8n);else {
        if (e6gp1['readyUrl'] != kbdj2a) v71geu['remove'](y_8n, kbdj2a);
      }
    }, v71geu['exits'] = function (d2bas$, ahzk) {
      var zkbha = v71geu['getFileNativePath'](d2bas$);v71geu['fs']['getFileInfo']({ 'filePath': zkbha, 'success': function (d_4$s8) {
          ahzk != null && ahzk['runWith']([0x0, d_4$s8]);
        }, 'fail': function (jahzb) {
          ahzk != null && ahzk['runWith']([0x1, jahzb]);
        } });
    }, v71geu['read'] = function (qzkhl, x3ycr0, db2kj, u1veg7) {
      x3ycr0 === void 0x0 && (x3ycr0 = 'ascill'), u1veg7 === void 0x0 && (u1veg7 = '');var s_84$d;u1veg7 != '' ? s_84$d = v71geu['getFileNativePath'](qzkhl) : s_84$d = qzkhl, v71geu['fs']['readFile']({ 'filePath': s_84$d, 'encoding': x3ycr0, 'success': function (vgo17) {
          db2kj != null && db2kj['runWith']([0x0, vgo17]);
        }, 'fail': function (d28$4) {
          if (d28$4 && u1veg7 != '') v71geu['down'](u1veg7, x3ycr0, db2kj, u1veg7);else db2kj != null && db2kj['runWith']([0x1]);
        } });
    }, v71geu['readNativeFile'] = function (c03, bas$2) {
      v71geu['fs']['readFile']({ 'filePath': c03, 'encoding': '', 'success': function (ds8$4) {
          bas$2 != null && bas$2['runWith']([0x0]);
        }, 'fail': function (sx_8n) {
          bas$2 != null && bas$2['runWith']([0x1]);
        } });
    }, v71geu['down'] = function (bahjk, nxy04, geu6p1, y0x3) {
      nxy04 === void 0x0 && (nxy04 = 'ascill'), y0x3 === void 0x0 && (y0x3 = '');var v7e1 = v71geu['getFileNativePath'](y0x3),
          zqjlt = v71geu['wxdown']({ 'url': bahjk, 'filePath': v7e1, 'success': function (flo95) {
          if (flo95['statusCode'] === 0xc8) v71geu['readFile'](flo95['filePath'], nxy04, geu6p1, y0x3);
        }, 'fail': function (jakbhz) {
          geu6p1 != null && geu6p1['runWith']([0x1, jakbhz]);
        } });zqjlt['onProgressUpdate'](function (t5lq) {
        geu6p1 != null && geu6p1['runWith']([0x2, t5lq['progress']]);
      });
    }, v71geu['readFile'] = function (f95tq, vfo759, to7f95, adk$2) {
      vfo759 === void 0x0 && (vfo759 = 'ascill'), adk$2 === void 0x0 && (adk$2 = ''), v71geu['fs']['readFile']({ 'filePath': f95tq, 'encoding': vfo759, 'success': function (u6vge) {
          if (f95tq['indexOf']('http://') != -0x1 || f95tq['indexOf']('https://') != -0x1) v71geu['onFileUpdate'](f95tq, adk$2);to7f95 != null && to7f95['runWith']([0x0, u6vge]);
        }, 'fail': function (r3m0ci) {
          if (r3m0ci) to7f95 != null && to7f95['runWith']([0x1, r3m0ci]);
        } });
    }, v71geu['downImg'] = function (jhbzka, f95qlt, ry0x) {
      ry0x === void 0x0 && (ry0x = '');var $8sd42 = v71geu['wxdown']({ 'url': jhbzka, 'success': function (khzabj) {
          khzabj['statusCode'] === 0xc8 && v71geu['copyFile'](khzabj['tempFilePath'], ry0x, f95qlt);
        }, 'fail': function (m30ci) {
          f95qlt != null && f95qlt['runWith']([0x1, m30ci]);
        } });
    }, v71geu['copyFile'] = function (b2kaj, tzqlf5, qzltjh) {
      var bzha = b2kaj['split']('/'),
          lt5o9f = bzha[bzha['length'] - 0x1],
          s84n = tzqlf5['split']('?')[0x0],
          $b8ds = v71geu['getFileInfo'](tzqlf5),
          u61egp = v71geu['getFileNativePath'](lt5o9f);v71geu['fs']['copyFile']({ 'srcPath': b2kaj, 'destPath': u61egp, 'success': function (tlfq59) {
          if (!$b8ds) v71geu['onSaveFile'](tzqlf5, lt5o9f), qzltjh != null && qzltjh['runWith']([0x0]);else {
            if ($b8ds['readyUrl'] != tzqlf5) v71geu['remove'](lt5o9f, tzqlf5, qzltjh);
          }
        }, 'fail': function (wrc) {
          qzltjh != null && qzltjh['runWith']([0x1, wrc]);
        } });
    }, v71geu['getFileNativePath'] = function (g1oe) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g1oe;
    }, v71geu['remove'] = function (o5fv97, sdb$8, l9f5t) {
      sdb$8 === void 0x0 && (sdb$8 = '');var sdb$2 = v71geu['getFileInfo'](sdb$8),
          _4sxn8 = v71geu['getFileNativePath'](sdb$2['md5']);$8s2db['loader']['clearRes'](sdb$2['readyUrl']), v71geu['fs']['unlink']({ 'filePath': _4sxn8, 'success': function (ue6gp1) {
          if (sdb$8 != '') v71geu['onSaveFile'](sdb$8, o5fv97);l9f5t != null && l9f5t['runWith']([0x0]);
        }, 'fail': function (fv7o91) {} });
    }, v71geu['onSaveFile'] = function (sb$28d, n3x_y0) {
      var ahbjzk = sb$28d['split']('?')[0x0];v71geu['filesListObj'][ahbjzk] = { 'md5': n3x_y0, 'readyUrl': sb$28d }, v71geu['fs']['writeFile']({ 'filePath': v71geu['fileNativeDir'] + '/' + v71geu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v71geu['filesListObj']), 'success': function (tzqh5l) {
          console['log']('写入测试测试成功：', tzqh5l);
        }, 'fail': function (zqlth5) {
          console['log']('写入测试测试失败：', zqlth5);
        } });
    }, v71geu['existDir'] = function (_0yx4n, ahbjk) {
      v71geu['fs']['mkdir']({ 'dirPath': _0yx4n, 'success': function (kbaz) {
          ahbjk != null && ahbjk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gu7ve) {
          if (gu7ve['errMsg']['indexOf']('file already exists') != -0x1) v71geu['readSync'](v71geu['fileListName'], 'utf8', ahbjk);else ahbjk != null && ahbjk['runWith']([0x1, gu7ve]);
        } });
    }, v71geu['readSync'] = function (qah, hbkja2, ot, o7t5) {
      hbkja2 === void 0x0 && (hbkja2 = 'ascill'), o7t5 === void 0x0 && (o7t5 = '');var wmir3c = v71geu['getFileNativePath'](qah),
          hazkbj;try {
        hazkbj = v71geu['fs']['readFileSync'](wmir3c), ot != null && ot['runWith']([0x0, { 'data': hazkbj }]);
      } catch (_n3x0y) {
        ot != null && ot['runWith']([0x1]);
      }
    }, v71geu['readCache'] = function () {}, v71geu['writeCache'] = function (hqjt) {
      var abkh2j = readyUrl['split']('?')[0x0];v71geu['filesListObj'][abkh2j] = { 'md5': md5Name, 'readyUrl': readyUrl }, v71geu['fs']['writeFile']({ 'filePath': v71geu['fileNativeDir'] + '/' + v71geu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v71geu['filesListObj']), 'success': function ($8sn) {}, 'fail': function (kabd2) {} });
    }, v71geu['setNativeFileDir'] = function (ev7u1) {
      v71geu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ev7u1;
    }, v71geu['filesListObj'] = {}, v71geu['fileNativeDir'] = null, v71geu['fileListName'] = 'layaairfiles.txt', v71geu['ziyuFileData'] = {}, $2sd4(v71geu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v71geu;
  }(kzhq),
      tq9lf = function (g1ev7) {
    function eug61() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], eug61['__super']['call'](this), this['_sound'] = eug61['_createSound']();
    }ltjqh(eug61, 'laya.wx.mini.MiniSound', g1ev7);var mir0c = eug61['prototype'];return mir0c['load'] = function (a2hbk) {
      var mir30c = this;a2hbk = s$b2d8['formatURL'](a2hbk), this['url'] = a2hbk;if (eug61['_audioCache'][a2hbk]) {
        this['event']('complete');return;
      }function vuge16() {
        if (eug61['_null'] != undefined) mir30c['_sound']['onCanplay'](eug61['_null']), mir30c['_sound']['onError'](eug61['_null']);else try {
          mir30c['_sound']['onCanplay'](null), mir30c['_sound']['onError'](null), eug61['_null'] = null;
        } catch (xyrc03) {
          console['warn']('[wxmini] _clearSound:' + xyrc03), mir30c['_sound']['onCanplay'](sbd2a$), mir30c['_sound']['onError'](sbd2a$), eug61['_null'] = sbd2a$;
        }
      }function bkahzj() {
        vuge16(), d$ka2b['loaded'] = !![], d$ka2b['event']('complete'), eug61['_audioCache'][d$ka2b['url']] = d$ka2b;
      }function jhqkza(xn_y30) {
        console['error']('errCode=' + xn_y30['errCode'] + '  errMsg=' + xn_y30['errMsg']), vuge16(), d$ka2b['event']('error');
      }function sbd2a$() {}this['_sound']['onCanplay'](bkahzj), this['_sound']['onError'](jhqkza), this['_sound']['src'] = a2hbk;var d$ka2b = this;
    }, mir0c['play'] = function (_xn0y3, bd2ja) {
      _xn0y3 === void 0x0 && (_xn0y3 = 0x0), bd2ja === void 0x0 && (bd2ja = 0x0);var o95f7v;if (this['url'] == tqhzjl['_tMusic']) {
        if (!eug61['_musicAudio']) eug61['_musicAudio'] = eug61['_createSound']();o95f7v = eug61['_musicAudio'];
      } else o95f7v = eug61['_createSound']();o95f7v['src'] = this['url'];var qkjh = new n_x03y(o95f7v);return qkjh['url'] = this['url'], qkjh['loops'] = bd2ja, qkjh['startTime'] = _xn0y3, qkjh['play'](), tqhzjl['addChannel'](qkjh), qkjh;
    }, mir0c['dispose'] = function () {
      var x0_3n = eug61['_audioCache'][this['url']];x0_3n && (x0_3n['src'] = '', delete eug61['_audioCache'][this['url']]);
    }, daj2b(0x0, mir0c, 'duration', function () {
      return this['_sound']['duration'];
    }), eug61['_createSound'] = function () {
      return eug61['_id']++, hbzjk['window']['wx']['createInnerAudioContext']();
    }, eug61['_musicAudio'] = null, eug61['_id'] = 0x0, eug61['_audioCache'] = {}, eug61['_null'] = undefined, eug61;
  }(kzhq),
      n_x03y = function (yr0n3x) {
    function y_3(k$) {
      this['_audio'] = null, this['_onEnd'] = null, y_3['__super']['call'](this), this['_audio'] = k$, this['_onEnd'] = u1evg6['bind'](this['__onEnd'], this), k$['onEnded'](this['_onEnd']);
    }ltjqh(y_3, 'laya.wx.mini.MiniSoundChannel', yr0n3x);var db$s8 = y_3['prototype'];return db$s8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($8s2db['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, db$s8['__onNull'] = function () {}, db$s8['play'] = function () {
      this['isStopped'] = ![], tqhzjl['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, db$s8['stop'] = function () {
      this['isStopped'] = !![], tqhzjl['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (y_3['_null'] != undefined) this['_audio']['onEnded'](y_3['_null']);else try {
        this['_audio']['onEnded'](null), y_3['_null'] = null;
      } catch (lztjhq) {
        console['warn']('[wxmini] stop:' + lztjhq), this['_audio']['onEnded'](u1evg6['bind'](this['__onNull'], this)), y_3['_null'] = u1evg6['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, db$s8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, db$s8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], tqhzjl['addChannel'](this), this['_audio']['play']();
    }, daj2b(0x0, db$s8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), daj2b(0x0, db$s8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), daj2b(0x0, db$s8, 'volume', function () {
      return 0x1;
    }, function (qltfz5) {}), y_3['_null'] = undefined, y_3;
  }(gvu);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ot975f in Laya) {
    var i3rmwc = Laya[ot975f];i3rmwc && i3rmwc['__isclass'] && (exports[ot975f] = i3rmwc);
  }
});