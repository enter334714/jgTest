var M = wx.$T;
(function (window, document, eq_0xy) {
  var e0zo7q = eq_0xy['un'],
      zpf7$ = eq_0xy['uns'],
      ez7oq0 = eq_0xy['static'],
      yq0_e = eq_0xy['class'],
      m5wh6_ = eq_0xy['getset'],
      x_h = eq_0xy['__newvec'],
      lit42c = laya['utils']['Browser'],
      suajk = laya['events']['Event'],
      _m5h = laya['events']['EventDispatcher'],
      jsbkar = laya['resource']['HTMLImage'],
      vci$9d = laya['utils']['Handler'],
      y_mwh5 = laya['display']['Input'],
      brnjg = laya['net']['Loader'],
      gajkbr = laya['maths']['Matrix'],
      civ$9 = laya['renders']['Render'],
      pvf9$d = laya['utils']['RunDriver'],
      i2lt = laya['media']['Sound'],
      dz7f$ = laya['media']['SoundChannel'],
      ivdc = laya['media']['SoundManager'],
      kbjua = laya['display']['Stage'],
      f9pvd = laya['net']['URL'],
      agrj = laya['utils']['Utils'],
      fv$zp = function () {
    function zopf7d() {}return yq0_e(zopf7d, 'laya.wx.mini.MiniAdpter'), zopf7d['getJson'] = function (jgrak) {
      return JSON['parse'](jgrak);
    }, zopf7d['init'] = function (_x0e, jrabgk) {
      _x0e === void 0x0 && (_x0e = ![]), jrabgk === void 0x0 && (jrabgk = ![]);if (zopf7d['_inited']) return;zopf7d['window'] = window;if (zopf7d['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zopf7d['_inited'] = !![], zopf7d['isZiYu'] = jrabgk, zopf7d['isPosMsgYu'] = _x0e, zopf7d['EnvConfig'] = {}, !zopf7d['isZiYu'] && (r8gjn['setNativeFileDir']('/layaairGame'), r8gjn['existDir'](r8gjn['fileNativeDir'], vci$9d['create'](zopf7d, zopf7d['onMkdirCallBack']))), zopf7d['window']['focus'] = function () {}, eq_0xy['getUrlPath'] = function () {}, zopf7d['window']['logtime'] = function (fz7oep) {}, zopf7d['window']['alertTimeLog'] = function (ng318r) {}, zopf7d['window']['resetShareInfo'] = function () {}, zopf7d['window']['CanvasRenderingContext2D'] = function () {}, zopf7d['window']['CanvasRenderingContext2D']['prototype'] = zopf7d['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zopf7d['window']['document']['body']['appendChild'] = function () {}, zopf7d['EnvConfig']['pixelRatioInt'] = 0x0, pvf9$d['getPixelRatio'] = zopf7d['pixelRatio'], zopf7d['_preCreateElement'] = lit42c['createElement'], lit42c['createElement'] = zopf7d['createElement'], pvf9$d['createShaderCondition'] = zopf7d['createShaderCondition'], agrj['parseXMLFromString'] = zopf7d['parseXMLFromString'], y_mwh5['_createInputElement'] = i9tc2v['_createInputElement'], zopf7d['EnvConfig']['load'] = brnjg['prototype']['load'], brnjg['prototype']['load'] = y_hmxw['prototype']['load'], zopf7d['isZiYu'] && _x0e && wx['onMessage'](function (_mwy5h) {
        _mwy5h['isLoad'] && (r8gjn['ziyuFileData'][_mwy5h['url']] = _mwy5h['data']);
      });
    }, zopf7d['onMkdirCallBack'] = function (xeqyo0, abkujs) {
      if (!xeqyo0) r8gjn['filesListObj'] = JSON['parse'](abkujs['data']);
    }, zopf7d['pixelRatio'] = function () {
      if (!zopf7d['EnvConfig']['pixelRatioInt']) try {
        var n6g8 = wx['getSystemInfoSync']();return zopf7d['EnvConfig']['pixelRatioInt'] = n6g8['pixelRatio'], n6g8 = n6g8, n6g8['pixelRatio'];
      } catch (jnagbr) {}return zopf7d['EnvConfig']['pixelRatioInt'];
    }, zopf7d['createElement'] = function (_wyx) {
      if (_wyx == 'canvas') {
        var _m5h6w;return zopf7d['idx'] == 0x1 ? zopf7d['isZiYu'] ? (_m5h6w = sharedCanvas, _m5h6w['style'] = {}) : _m5h6w = window['canvas'] : _m5h6w = window['wx']['createCanvas'](), zopf7d['idx']++, _m5h6w;
      } else {
        if (_wyx == 'textarea' || _wyx == 'input') return zopf7d['onCreateInput'](_wyx);else {
          if (_wyx == 'div') {
            var p9$vi = zopf7d['_preCreateElement'](_wyx);return p9$vi['contains'] = function (jgabrk) {
              return null;
            }, p9$vi['removeChild'] = function (yhwmx) {}, p9$vi;
          } else return zopf7d['_preCreateElement'](_wyx);
        }
      }
    }, zopf7d['onCreateInput'] = function (mh_y0) {
      var dp$zfv = zopf7d['_preCreateElement'](mh_y0);return dp$zfv['focus'] = i9tc2v['wxinputFocus'], dp$zfv['blur'] = i9tc2v['wxinputblur'], dp$zfv['style'] = {}, dp$zfv['value'] = 0x0, dp$zfv['parentElement'] = {}, dp$zfv['placeholder'] = {}, dp$zfv['type'] = {}, dp$zfv['setColor'] = function (fzd$v) {}, dp$zfv['setType'] = function (oefqz) {}, dp$zfv['setFontFace'] = function ($dfz7) {}, dp$zfv['addEventListener'] = function (nr8j3) {}, dp$zfv['contains'] = function (tl4i2c) {
        return null;
      }, dp$zfv['removeChild'] = function (b3rnj) {}, dp$zfv;
    }, zopf7d['createShaderCondition'] = function (ctvi92) {
      var sjaub = this,
          nr8j3g = function () {
        var yhw_5m = ctvi92;return sjaub[ctvi92['replace']('this.', '')];
      };return nr8j3g;
    }, zopf7d['EnvConfig'] = null, zopf7d['window'] = null, zopf7d['_preCreateElement'] = null, zopf7d['_inited'] = ![], zopf7d['wxRequest'] = null, zopf7d['systemInfo'] = null, zopf7d['version'] = '0.0.1', zopf7d['isZiYu'] = ![], zopf7d['isPosMsgYu'] = ![], zopf7d['parseXMLFromString'] = function (exo0q) {
      var rbagnj, q0xe7;exo0q = exo0q['replace'](/>\s+</g, '><');try {
        rbagnj = new window['Parser']['DOMParser']()['parseFromString'](exo0q, 'text/xml');
      } catch (mq_xy0) {
        throw '需要引入xml解析库文件';
      }return rbagnj;
    }, zopf7d['idx'] = 0x1, zopf7d;
  }(),
      icv = function () {
    function bksr() {}yq0_e(bksr, 'laya.wx.mini.MiniImage');var wh618 = bksr['prototype'];return wh618['_loadImage'] = function (div$) {
      var rajgnb = this,
          v9$idc = ![];div$['indexOf']('layaNativeDir/') == -0x1 && (v9$idc = !![], div$ = f9pvd['formatURL'](div$));if (!r8gjn['getFileInfo'](div$)) {
        if (div$['indexOf']('http://') != -0x1 || div$['indexOf']('https://') != -0x1) r8gjn['downImg'](div$, new vci$9d(bksr, bksr['onDownImgCallBack'], [div$, rajgnb]), div$);else bksr['onCreateImage'](div$, rajgnb, !![]);
      } else bksr['onCreateImage'](div$, rajgnb, !v9$idc);
    }, bksr['onDownImgCallBack'] = function (o0zq, gn831r, oeq07z) {
      if (!oeq07z) bksr['onCreateImage'](o0zq, gn831r);else gn831r['onError'](null);
    }, bksr['onCreateImage'] = function ($vc9ti, _5mwyh, jnar) {
      jnar === void 0x0 && (jnar = ![]);var njrab;if (!jnar) {
        var d7p$ = r8gjn['getFileInfo']($vc9ti),
            dvip9 = d7p$['md5'];njrab = r8gjn['getFileNativePath'](dvip9);
      } else njrab = $vc9ti;if (_5mwyh['imgCache'] == null) _5mwyh['imgCache'] = {};var _mywhx;function dzp$v() {
        _mywhx['onload'] = null, _mywhx['onerror'] = null, delete _5mwyh['imgCache'][$vc9ti];
      };var vz$fd = function () {
        dzp$v(), _5mwyh['onLoaded'](_mywhx);
      },
          rbgn3j = function () {
        dzp$v(), _5mwyh['event']('error', 'Load image failed');
      };_5mwyh['_type'] == 'nativeimage' ? (_mywhx = new lit42c['window']['Image'](), _mywhx['crossOrigin'] = '', _mywhx['onload'] = vz$fd, _mywhx['onerror'] = rbgn3j, _mywhx['src'] = njrab, _5mwyh['imgCache'][$vc9ti] = _mywhx) : new jsbkar['create'](njrab, { 'onload': vz$fd, 'onerror': rbgn3j, 'onCreate': function (h_m5w6) {
          _mywhx = h_m5w6, _5mwyh['imgCache'][$vc9ti] = h_m5w6;
        } });
    }, bksr;
  }(),
      i9tc2v = function () {
    function mqx0y() {}return yq0_e(mqx0y, 'laya.wx.mini.MiniInput'), mqx0y['_createInputElement'] = function () {
      y_mwh5['_initInput'](y_mwh5['area'] = lit42c['createElement']('textarea')), y_mwh5['_initInput'](y_mwh5['input'] = lit42c['createElement']('input')), y_mwh5['inputContainer'] = lit42c['createElement']('div'), y_mwh5['inputContainer']['style']['position'] = 'absolute', y_mwh5['inputContainer']['style']['zIndex'] = 0x186a0, lit42c['container']['appendChild'](y_mwh5['inputContainer']), y_mwh5['inputContainer']['setPos'] = function ($zf, w81h56) {
        y_mwh5['inputContainer']['style']['left'] = $zf + 'px', y_mwh5['inputContainer']['style']['top'] = w81h56 + 'px';
      }, eq_0xy['stage']['on']('resize', null, mqx0y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hwm56_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ivdc['_soundClass'] = n3, ivdc['_musicClass'] = n3;
    }, mqx0y['_onStageResize'] = function () {
      var e_q0x = eq_0xy['stage']['_canvasTransform']['identity']();e_q0x['scale'](lit42c['width'] / civ$9['canvas']['width'] / pvf9$d['getPixelRatio'](), lit42c['height'] / civ$9['canvas']['height'] / pvf9$d['getPixelRatio']());
    }, mqx0y['wxinputFocus'] = function (mhxy0_) {
      var vpi = y_mwh5['inputElement']['target'];if (vpi && !vpi['editable']) return;fv$zp['window']['wx']['offKeyboardConfirm'](), fv$zp['window']['wx']['offKeyboardInput'](), fv$zp['window']['wx']['showKeyboard']({ 'defaultValue': vpi['text'], 'maxLength': vpi['maxChars'], 'multiple': vpi['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ivd) {}, 'fail': function (p9f$) {} }), fv$zp['window']['wx']['onKeyboardConfirm'](function (dc9$v) {
        var jkua = dc9$v ? dc9$v['value'] : '';vpi['text'] = jkua, vpi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fv$zp['window']['wx']['onKeyboardInput'](function (yx_m0h) {
        var qoyx0e = yx_m0h ? yx_m0h['value'] : '';if (!vpi['multiline']) {
          if (qoyx0e['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vpi['text'] = qoyx0e, vpi['event']('input');
      });
    }, mqx0y['inputEnter'] = function () {
      y_mwh5['inputElement']['target']['focus'] = ![];
    }, mqx0y['wxinputblur'] = function () {
      mqx0y['hideKeyboard']();
    }, mqx0y['hideKeyboard'] = function () {
      fv$zp['window']['wx']['offKeyboardConfirm'](), fv$zp['window']['wx']['offKeyboardInput'](), fv$zp['window']['wx']['hideKeyboard']({ 'success': function (i9vt2) {
          console['log']('隐藏键盘');
        }, 'fail': function (grkjb) {
          console['log']('隐藏键盘出错:' + (grkjb ? grkjb['errMsg'] : ''));
        } });
    }, mqx0y;
  }(),
      y_hmxw = function () {
    function d9pvf$() {}yq0_e(d9pvf$, 'laya.wx.mini.MiniLoader');var i$v9t = d9pvf$['prototype'];return i$v9t['load'] = function (eqzfo, jsrka, jrgb, yxwh_m, qe7ox) {
      jrgb === void 0x0 && (jrgb = !![]), qe7ox === void 0x0 && (qe7ox = ![]);var $vc9d = this;$vc9d['_url'] = eqzfo;if (eqzfo['indexOf']('data:image') === 0x0) $vc9d['_type'] = jsrka = 'image';else $vc9d['_type'] = jsrka || (jsrka = $vc9d['getTypeFromUrl'](eqzfo));$vc9d['_cache'] = jrgb, $vc9d['_data'] = null;var _6w5mh = 'ascii';if (eqzfo['indexOf']('.fnt') != -0x1) _6w5mh = 'utf8';else jsrka == 'arraybuffer' && (_6w5mh = '');;var o70e = agrj['getFileExtension'](eqzfo);if (d9pvf$['_fileTypeArr']['indexOf'](o70e) != -0x1) fv$zp['EnvConfig']['load']['call'](this, eqzfo, jsrka, jrgb, yxwh_m, qe7ox);else {
        if (!r8gjn['getFileInfo'](eqzfo)) {
          if (eqzfo['indexOf']('layaNativeDir/') != -0x1) {
            if (fv$zp['isZiYu']) {
              var $7dp = r8gjn['ziyuFileData'][eqzfo];$vc9d['onLoaded']($7dp);return;
            } else {
              cosnole['log']('read read'), r8gjn['read'](eqzfo, _6w5mh, new vci$9d(d9pvf$, d9pvf$['onReadNativeCallBack'], [_6w5mh, eqzfo, jsrka, jrgb, yxwh_m, qe7ox, $vc9d]));return;
            }
          }if (f9pvd['rootPath'] == '') var vd$zpf = eqzfo;else vd$zpf = eqzfo['split'](f9pvd['rootPath'])[0x0];eqzfo['indexOf']('http://') != -0x1 || eqzfo['indexOf']('https://') != -0x1 ? fv$zp['EnvConfig']['load']['call']($vc9d, eqzfo, jsrka, jrgb, yxwh_m, qe7ox) : r8gjn['readFile'](vd$zpf, _6w5mh, new vci$9d(d9pvf$, d9pvf$['onReadNativeCallBack'], [_6w5mh, eqzfo, jsrka, jrgb, yxwh_m, qe7ox, $vc9d]), eqzfo);
        } else fv$zp['EnvConfig']['load']['call'](this, eqzfo, jsrka, jrgb, yxwh_m, qe7ox);
      }
    }, i$v9t['resMgrLoad'] = function (_yx, _mwh5, oez07, w568h1, y_xwmh, bj3r, jnrga) {
      oez07 === void 0x0 && (oez07 = 0x0), w568h1 === void 0x0 && (w568h1 = ![]), y_xwmh === void 0x0 && (y_xwmh = ![]), bj3r === void 0x0 && (bj3r = 0x0), jnrga === void 0x0 && (jnrga = 0x3), _yx['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _yx), fv$zp['EnvConfig']['resMgrLoad'](_yx, (oex, zfp7od, gjak) => {
        d9pvf$['prototype']['resMgrLoadCallBack'](oex, zfp7od, gjak, _mwh5);
      }, oez07, w568h1, y_xwmh, bj3r, jnrga);
    }, i$v9t['resMgrLoadCallBack'] = function (h_wm5, nj8g, $zf7dp, t2lci) {
      console['log']('buff:::', h_wm5, $zf7dp, r8gjn['fileNativeDir'] + '///' + r8gjn['fileListName']), t2lci(h_wm5, nj8g, $zf7dp);
    }, i$v9t['clearRes'] = function (bangr, hxym0) {
      hxym0 === void 0x0 && (hxym0 = ![]);var q70oe = this;q70oe['clearRes'](bangr, hxym0);var whx_ = r8gjn['getFileInfo'](bangr);if (whx_ && (bangr['indexOf']('http://') != -0x1 || bangr['indexOf']('https://') != -0x1)) {
        var skaub = whx_['md5'],
            pfzd7$ = r8gjn['getFileNativePath'](skaub);r8gjn['remove'](pfzd7$);
      }
    }, d9pvf$['onReadNativeCallBack'] = function (_hw5m6, exyoq0, ex7o0q, zo7efq, h_mwy, $p9fdv, akjb, g1n38r, hx0y_) {
      zo7efq === void 0x0 && (zo7efq = !![]), $p9fdv === void 0x0 && ($p9fdv = ![]), g1n38r === void 0x0 && (g1n38r = 0x0);if (!g1n38r) {
        var _qyxm;if (ex7o0q == 'json' || ex7o0q == 'atlas') _qyxm = fv$zp['getJson'](hx0y_['data']);else ex7o0q == 'xml' ? _qyxm = agrj['parseXMLFromString'](hx0y_['data']) : _qyxm = hx0y_['data'];akjb['onLoaded'](_qyxm), !fv$zp['isZiYu'] && fv$zp['isPosMsgYu'] && ex7o0q != 'arraybuffer' && wx['postMessage']({ 'url': exyoq0, 'data': _qyxm, 'isLoad': !![] });
      } else g1n38r == 0x1 && fv$zp['EnvConfig']['load']['call'](akjb, exyoq0, ex7o0q, zo7efq, h_mwy, $p9fdv);
    }, ez7oq0(d9pvf$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), d9pvf$;
  }(),
      r8gjn = function (rskbj) {
    function qx7eo() {
      qx7eo['__super']['call'](this);;
    }return yq0_e(qx7eo, 'laya.wx.mini.MiniFileMgr', rskbj), qx7eo['isLoadFile'] = function (_y0xqm) {
      return qx7eo['_fileTypeArr']['indexOf'](_y0xqm) != -0x1 ? !![] : ![];
    }, qx7eo['getFileInfo'] = function (pzf7o) {
      var _hy0xm = pzf7o['split']('?')[0x0],
          sujak = qx7eo['filesListObj'][_hy0xm];if (sujak == null) return null;else return sujak;return null;
    }, qx7eo['onFileUpdate'] = function (i94, d$9pf) {
      var ic$9tv = i94['split']('/'),
          id$9cv = ic$9tv[ic$9tv['length'] - 0x1],
          p7ofez = qx7eo['getFileInfo'](d$9pf);if (p7ofez == null) qx7eo['onSaveFile'](d$9pf, id$9cv);else {
        if (p7ofez['readyUrl'] != d$9pf) qx7eo['remove'](id$9cv, d$9pf);
      }
    }, qx7eo['exits'] = function (w5h86, d9$p) {
      var d9$ipv = qx7eo['getFileNativePath'](w5h86);qx7eo['fs']['getFileInfo']({ 'filePath': d9$ipv, 'success': function (q7e) {
          d9$p != null && d9$p['runWith']([0x0, q7e]);
        }, 'fail': function (kjrbga) {
          d9$p != null && d9$p['runWith']([0x1, kjrbga]);
        } });
    }, qx7eo['read'] = function (_xm0q, xhy0, zfdp$v, z7eqo) {
      xhy0 === void 0x0 && (xhy0 = 'ascill'), z7eqo === void 0x0 && (z7eqo = '');var i29c4t;z7eqo != '' ? i29c4t = qx7eo['getFileNativePath'](_xm0q) : i29c4t = _xm0q, qx7eo['fs']['readFile']({ 'filePath': i29c4t, 'encoding': xhy0, 'success': function (nr3bgj) {
          zfdp$v != null && zfdp$v['runWith']([0x0, nr3bgj]);
        }, 'fail': function (fd$zpv) {
          if (fd$zpv && z7eqo != '') qx7eo['down'](z7eqo, xhy0, zfdp$v, z7eqo);else zfdp$v != null && zfdp$v['runWith']([0x1]);
        } });
    }, qx7eo['readNativeFile'] = function ($dcv9, nrabg) {
      qx7eo['fs']['readFile']({ 'filePath': $dcv9, 'encoding': '', 'success': function (v$idp) {
          nrabg != null && nrabg['runWith']([0x0]);
        }, 'fail': function (oe70qz) {
          nrabg != null && nrabg['runWith']([0x1]);
        } });
    }, qx7eo['down'] = function (hw615, xw_m, w68315, _6hwm5) {
      xw_m === void 0x0 && (xw_m = 'ascill'), _6hwm5 === void 0x0 && (_6hwm5 = '');var gj3nr8 = qx7eo['getFileNativePath'](_6hwm5),
          g81 = qx7eo['wxdown']({ 'url': hw615, 'filePath': gj3nr8, 'success': function (barngj) {
          if (barngj['statusCode'] === 0xc8) qx7eo['readFile'](barngj['filePath'], xw_m, w68315, _6hwm5);
        }, 'fail': function (arjgbn) {
          w68315 != null && w68315['runWith']([0x1, arjgbn]);
        } });g81['onProgressUpdate'](function (_m0xhy) {
        w68315 != null && w68315['runWith']([0x2, _m0xhy['progress']]);
      });
    }, qx7eo['readFile'] = function (x70oq, $9dciv, t9vi2c, wm_xyh) {
      $9dciv === void 0x0 && ($9dciv = 'ascill'), wm_xyh === void 0x0 && (wm_xyh = ''), qx7eo['fs']['readFile']({ 'filePath': x70oq, 'encoding': $9dciv, 'success': function (v$tc9i) {
          if (x70oq['indexOf']('http://') != -0x1 || x70oq['indexOf']('https://') != -0x1) qx7eo['onFileUpdate'](x70oq, wm_xyh);t9vi2c != null && t9vi2c['runWith']([0x0, v$tc9i]);
        }, 'fail': function (v9t) {
          if (v9t) t9vi2c != null && t9vi2c['runWith']([0x1, v9t]);
        } });
    }, qx7eo['downImg'] = function (_x0hm, eqo7x, t$9ic) {
      t$9ic === void 0x0 && (t$9ic = '');var h6w51 = qx7eo['wxdown']({ 'url': _x0hm, 'success': function (c9t4i) {
          c9t4i['statusCode'] === 0xc8 && qx7eo['copyFile'](c9t4i['tempFilePath'], t$9ic, eqo7x);
        }, 'fail': function (dfz) {
          eqo7x != null && eqo7x['runWith']([0x1, dfz]);
        } });
    }, qx7eo['copyFile'] = function (g18r3, n86153, w81h65) {
      var ic29v = g18r3['split']('/'),
          zodp7 = ic29v[ic29v['length'] - 0x1],
          pi$d9 = n86153['split']('?')[0x0],
          n863 = qx7eo['getFileInfo'](n86153),
          wmh5y_ = qx7eo['getFileNativePath'](zodp7);qx7eo['fs']['copyFile']({ 'srcPath': g18r3, 'destPath': wmh5y_, 'success': function (pd9v) {
          if (!n863) qx7eo['onSaveFile'](n86153, zodp7), w81h65 != null && w81h65['runWith']([0x0]);else {
            if (n863['readyUrl'] != n86153) qx7eo['remove'](zodp7, n86153, w81h65);
          }
        }, 'fail': function (ti49c) {
          w81h65 != null && w81h65['runWith']([0x1, ti49c]);
        } });
    }, qx7eo['getFileNativePath'] = function (ivc$9t) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ivc$9t;
    }, qx7eo['remove'] = function (d7zfop, _xym0, dvp$f) {
      _xym0 === void 0x0 && (_xym0 = '');var dpv9$i = qx7eo['getFileInfo'](_xym0),
          wmh56_ = qx7eo['getFileNativePath'](dpv9$i['md5']);eq_0xy['loader']['clearRes'](dpv9$i['readyUrl']), qx7eo['fs']['unlink']({ 'filePath': wmh56_, 'success': function (dpzf7o) {
          if (_xym0 != '') qx7eo['onSaveFile'](_xym0, d7zfop);dvp$f != null && dvp$f['runWith']([0x0]);
        }, 'fail': function (w5y_mh) {} });
    }, qx7eo['onSaveFile'] = function (zfv, abngjr) {
      var x07qe = zfv['split']('?')[0x0];qx7eo['filesListObj'][x07qe] = { 'md5': abngjr, 'readyUrl': zfv }, qx7eo['fs']['writeFile']({ 'filePath': qx7eo['fileNativeDir'] + '/' + qx7eo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qx7eo['filesListObj']), 'success': function (_e) {
          console['log']('写入测试测试成功：', _e);
        }, 'fail': function (c$vid) {
          console['log']('写入测试测试失败：', c$vid);
        } });
    }, qx7eo['existDir'] = function (pf$zd, c$ti9v) {
      qx7eo['fs']['mkdir']({ 'dirPath': pf$zd, 'success': function (po7zdf) {
          c$ti9v != null && c$ti9v['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qoe0yx) {
          if (qoe0yx['errMsg']['indexOf']('file already exists') != -0x1) qx7eo['readSync'](qx7eo['fileListName'], 'utf8', c$ti9v);else c$ti9v != null && c$ti9v['runWith']([0x1, qoe0yx]);
        } });
    }, qx7eo['readSync'] = function (n3186, zefop7, $pf, q0z7o) {
      zefop7 === void 0x0 && (zefop7 = 'ascill'), q0z7o === void 0x0 && (q0z7o = '');var gnb = qx7eo['getFileNativePath'](n3186),
          tl24ic;try {
        tl24ic = qx7eo['fs']['readFileSync'](gnb), $pf != null && $pf['runWith']([0x0, { 'data': tl24ic }]);
      } catch (hxmyw_) {
        $pf != null && $pf['runWith']([0x1]);
      }
    }, qx7eo['readCache'] = function () {}, qx7eo['writeCache'] = function (grbnj) {
      var i$vtc = readyUrl['split']('?')[0x0];qx7eo['filesListObj'][i$vtc] = { 'md5': md5Name, 'readyUrl': readyUrl }, qx7eo['fs']['writeFile']({ 'filePath': qx7eo['fileNativeDir'] + '/' + qx7eo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qx7eo['filesListObj']), 'success': function (g3bjnr) {}, 'fail': function (pz7) {} });
    }, qx7eo['setNativeFileDir'] = function (z$vfpd) {
      qx7eo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + z$vfpd;
    }, qx7eo['filesListObj'] = {}, qx7eo['fileNativeDir'] = null, qx7eo['fileListName'] = 'layaairfiles.txt', qx7eo['ziyuFileData'] = {}, ez7oq0(qx7eo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qx7eo;
  }(_m5h),
      n3 = function (grn3j8) {
    function h61wm() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], h61wm['__super']['call'](this), this['_sound'] = h61wm['_createSound']();
    }yq0_e(h61wm, 'laya.wx.mini.MiniSound', grn3j8);var rgb3jn = h61wm['prototype'];return rgb3jn['load'] = function (akbjrg) {
      var nj83gr = this;akbjrg = f9pvd['formatURL'](akbjrg), this['url'] = akbjrg;if (h61wm['_audioCache'][akbjrg]) {
        this['event']('complete');return;
      }function zoqe7f() {
        if (h61wm['_null'] != undefined) nj83gr['_sound']['onCanplay'](h61wm['_null']), nj83gr['_sound']['onError'](h61wm['_null']);else try {
          nj83gr['_sound']['onCanplay'](null), nj83gr['_sound']['onError'](null), h61wm['_null'] = null;
        } catch (kbarg) {
          console['warn']('[wxmini] _clearSound:' + kbarg), nj83gr['_sound']['onCanplay'](v9d$c), nj83gr['_sound']['onError'](v9d$c), h61wm['_null'] = v9d$c;
        }
      }function kbrjga() {
        zoqe7f(), w51h6m['loaded'] = !![], w51h6m['event']('complete'), h61wm['_audioCache'][w51h6m['url']] = w51h6m;
      }function dpo7f(g31n8) {
        console['error']('errCode=' + g31n8['errCode'] + '  errMsg=' + g31n8['errMsg']), zoqe7f(), w51h6m['event']('error');
      }function v9d$c() {}this['_sound']['onCanplay'](kbrjga), this['_sound']['onError'](dpo7f), this['_sound']['src'] = akbjrg;var w51h6m = this;
    }, rgb3jn['play'] = function (oz7eq0, qe7foz) {
      oz7eq0 === void 0x0 && (oz7eq0 = 0x0), qe7foz === void 0x0 && (qe7foz = 0x0);var vfpz$;if (this['url'] == ivdc['_tMusic']) {
        if (!h61wm['_musicAudio']) h61wm['_musicAudio'] = h61wm['_createSound']();vfpz$ = h61wm['_musicAudio'];
      } else vfpz$ = h61wm['_createSound']();vfpz$['src'] = this['url'];var i$c9dv = new jrg8n3(vfpz$);return i$c9dv['url'] = this['url'], i$c9dv['loops'] = qe7foz, i$c9dv['startTime'] = oz7eq0, i$c9dv['play'](), ivdc['addChannel'](i$c9dv), i$c9dv;
    }, rgb3jn['dispose'] = function () {
      var ep7fo = h61wm['_audioCache'][this['url']];ep7fo && (ep7fo['src'] = '', delete h61wm['_audioCache'][this['url']]);
    }, m5wh6_(0x0, rgb3jn, 'duration', function () {
      return this['_sound']['duration'];
    }), h61wm['_createSound'] = function () {
      return h61wm['_id']++, fv$zp['window']['wx']['createInnerAudioContext']();
    }, h61wm['_musicAudio'] = null, h61wm['_id'] = 0x0, h61wm['_audioCache'] = {}, h61wm['_null'] = undefined, h61wm;
  }(_m5h),
      jrg8n3 = function (c4i2tl) {
    function m6_5w(i29vc) {
      this['_audio'] = null, this['_onEnd'] = null, m6_5w['__super']['call'](this), this['_audio'] = i29vc, this['_onEnd'] = agrj['bind'](this['__onEnd'], this), i29vc['onEnded'](this['_onEnd']);
    }yq0_e(m6_5w, 'laya.wx.mini.MiniSoundChannel', c4i2tl);var jbkg = m6_5w['prototype'];return jbkg['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (eq_0xy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jbkg['__onNull'] = function () {}, jbkg['play'] = function () {
      this['isStopped'] = ![], ivdc['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, jbkg['stop'] = function () {
      this['isStopped'] = !![], ivdc['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (m6_5w['_null'] != undefined) this['_audio']['onEnded'](m6_5w['_null']);else try {
        this['_audio']['onEnded'](null), m6_5w['_null'] = null;
      } catch (cvt9i$) {
        console['warn']('[wxmini] stop:' + cvt9i$), this['_audio']['onEnded'](agrj['bind'](this['__onNull'], this)), m6_5w['_null'] = agrj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, jbkg['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, jbkg['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ivdc['addChannel'](this), this['_audio']['play']();
    }, m5wh6_(0x0, jbkg, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), m5wh6_(0x0, jbkg, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), m5wh6_(0x0, jbkg, 'volume', function () {
      return 0x1;
    }, function (w16h5m) {}), m6_5w['_null'] = undefined, m6_5w;
  }(dz7f$);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wm5h6 in Laya) {
    var kasb = Laya[wm5h6];kasb && kasb['__isclass'] && (exports[wm5h6] = kasb);
  }
});