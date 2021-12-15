var b = wx.$e;
(function (window, document, i$tlgx) {
  var frvhyz = i$tlgx['un'],
      vhfzyr = i$tlgx['uns'],
      b6k9su = i$tlgx['static'],
      _4vyz = i$tlgx['class'],
      eaop = i$tlgx['getset'],
      nsk69u = i$tlgx['__newvec'],
      fzyrl = laya['utils']['Browser'],
      $q3xj = laya['events']['Event'],
      uk9nqs = laya['events']['EventDispatcher'],
      xhlg$t = laya['resource']['HTMLImage'],
      _oc = laya['utils']['Handler'],
      omcap = laya['display']['Input'],
      ryvz4 = laya['net']['Loader'],
      ijg$x3 = laya['maths']['Matrix'],
      k60sb9 = laya['renders']['Render'],
      jn3s = laya['utils']['RunDriver'],
      nquk9 = laya['media']['Sound'],
      ocm7a_ = laya['media']['SoundChannel'],
      ijq$3 = laya['media']['SoundManager'],
      s6kn = laya['display']['Stage'],
      mo7acp = laya['net']['URL'],
      _yfv = laya['utils']['Utils'],
      _vfz4y = function () {
    function k6bd() {}return _4vyz(k6bd, 'laya.wx.mini.MiniAdpter'), k6bd['getJson'] = function (s6bu) {
      return JSON['parse'](s6bu);
    }, k6bd['init'] = function (x$gj, j3unqs) {
      x$gj === void 0x0 && (x$gj = ![]), j3unqs === void 0x0 && (j3unqs = ![]);if (k6bd['_inited']) return;k6bd['window'] = window;if (k6bd['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k6bd['_inited'] = !![], k6bd['isZiYu'] = j3unqs, k6bd['isPosMsgYu'] = x$gj, k6bd['EnvConfig'] = {}, !k6bd['isZiYu'] && (fv7a4_['setNativeFileDir']('/layaairGame'), fv7a4_['existDir'](fv7a4_['fileNativeDir'], _oc['create'](k6bd, k6bd['onMkdirCallBack']))), k6bd['window']['focus'] = function () {}, i$tlgx['getUrlPath'] = function () {}, k6bd['window']['logtime'] = function (hzylt) {}, k6bd['window']['alertTimeLog'] = function (njs) {}, k6bd['window']['resetShareInfo'] = function () {}, k6bd['window']['CanvasRenderingContext2D'] = function () {}, k6bd['window']['CanvasRenderingContext2D']['prototype'] = k6bd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k6bd['window']['document']['body']['appendChild'] = function () {}, k6bd['EnvConfig']['pixelRatioInt'] = 0x0, jn3s['getPixelRatio'] = k6bd['pixelRatio'], k6bd['_preCreateElement'] = fzyrl['createElement'], fzyrl['createElement'] = k6bd['createElement'], jn3s['createShaderCondition'] = k6bd['createShaderCondition'], _yfv['parseXMLFromString'] = k6bd['parseXMLFromString'], omcap['_createInputElement'] = fzhlry['_createInputElement'], k6bd['EnvConfig']['load'] = ryvz4['prototype']['load'], ryvz4['prototype']['load'] = frv4['prototype']['load'], k6bd['isZiYu'] && x$gj && wx['onMessage'](function (ocam7_) {
        ocam7_['isLoad'] && (fv7a4_['ziyuFileData'][ocam7_['url']] = ocam7_['data']);
      });
    }, k6bd['onMkdirCallBack'] = function (ti$xgj, q$x3j) {
      if (!ti$xgj) fv7a4_['filesListObj'] = JSON['parse'](q$x3j['data']);
    }, k6bd['pixelRatio'] = function () {
      if (!k6bd['EnvConfig']['pixelRatioInt']) try {
        var d50k6b = wx['getSystemInfoSync']();return k6bd['EnvConfig']['pixelRatioInt'] = d50k6b['pixelRatio'], d50k6b = d50k6b, d50k6b['pixelRatio'];
      } catch (q9s) {}return k6bd['EnvConfig']['pixelRatioInt'];
    }, k6bd['createElement'] = function (db0k65) {
      if (db0k65 == 'canvas') {
        var _acm74;return k6bd['idx'] == 0x1 ? k6bd['isZiYu'] ? (_acm74 = sharedCanvas, _acm74['style'] = {}) : _acm74 = window['canvas'] : _acm74 = window['wx']['createCanvas'](), k6bd['idx']++, _acm74;
      } else {
        if (db0k65 == 'textarea' || db0k65 == 'input') return k6bd['onCreateInput'](db0k65);else {
          if (db0k65 == 'div') {
            var zlhtg = k6bd['_preCreateElement'](db0k65);return zlhtg['contains'] = function (zrylht) {
              return null;
            }, zlhtg['removeChild'] = function (coa_m7) {}, zlhtg;
          } else return k6bd['_preCreateElement'](db0k65);
        }
      }
    }, k6bd['onCreateInput'] = function (w2185d) {
      var yhtzl = k6bd['_preCreateElement'](w2185d);return yhtzl['focus'] = fzhlry['wxinputFocus'], yhtzl['blur'] = fzhlry['wxinputblur'], yhtzl['style'] = {}, yhtzl['value'] = 0x0, yhtzl['parentElement'] = {}, yhtzl['placeholder'] = {}, yhtzl['type'] = {}, yhtzl['setColor'] = function ($ixj) {}, yhtzl['setType'] = function (nj3iq$) {}, yhtzl['setFontFace'] = function (d2815w) {}, yhtzl['addEventListener'] = function ($xlgt) {}, yhtzl['contains'] = function (pa7ocm) {
        return null;
      }, yhtzl['removeChild'] = function (w205d) {}, yhtzl;
    }, k6bd['createShaderCondition'] = function (xl$gt) {
      var z4frvy = this,
          k6bd90 = function () {
        var iquj3 = xl$gt;return z4frvy[xl$gt['replace']('this.', '')];
      };return k6bd90;
    }, k6bd['EnvConfig'] = null, k6bd['window'] = null, k6bd['_preCreateElement'] = null, k6bd['_inited'] = ![], k6bd['wxRequest'] = null, k6bd['systemInfo'] = null, k6bd['version'] = '0.0.1', k6bd['isZiYu'] = ![], k6bd['isPosMsgYu'] = ![], k6bd['parseXMLFromString'] = function (u9qkns) {
      var su9kn6, uni;u9qkns = u9qkns['replace'](/>\s+</g, '><');try {
        su9kn6 = new window['Parser']['DOMParser']()['parseFromString'](u9qkns, 'text/xml');
      } catch (mpa7co) {
        throw '需要引入xml解析库文件';
      }return su9kn6;
    }, k6bd['idx'] = 0x1, k6bd;
  }(),
      snju = function () {
    function ryzhfv() {}_4vyz(ryzhfv, 'laya.wx.mini.MiniImage');var k09bd6 = ryzhfv['prototype'];return k09bd6['_loadImage'] = function (t$gxh) {
      var f_4vy = this,
          d280w5 = ![];t$gxh['indexOf']('layaNativeDir/') == -0x1 && (d280w5 = !![], t$gxh = mo7acp['formatURL'](t$gxh));if (!fv7a4_['getFileInfo'](t$gxh)) {
        if (t$gxh['indexOf']('http://') != -0x1 || t$gxh['indexOf']('https://') != -0x1) fv7a4_['downImg'](t$gxh, new _oc(ryzhfv, ryzhfv['onDownImgCallBack'], [t$gxh, f_4vy]), t$gxh);else ryzhfv['onCreateImage'](t$gxh, f_4vy, !![]);
      } else ryzhfv['onCreateImage'](t$gxh, f_4vy, !d280w5);
    }, ryzhfv['onDownImgCallBack'] = function (m_a7, yfzvh, dw5b) {
      if (!dw5b) ryzhfv['onCreateImage'](m_a7, yfzvh);else yfzvh['onError'](null);
    }, ryzhfv['onCreateImage'] = function (maopc7, n$ji, jq3$x) {
      jq3$x === void 0x0 && (jq3$x = ![]);var lghrtz;if (!jq3$x) {
        var _a4cm = fv7a4_['getFileInfo'](maopc7),
            qs9n3 = _a4cm['md5'];lghrtz = fv7a4_['getFileNativePath'](qs9n3);
      } else lghrtz = maopc7;if (n$ji['imgCache'] == null) n$ji['imgCache'] = {};var $tgxhl;function jin3uq() {
        $tgxhl['onload'] = null, $tgxhl['onerror'] = null, delete n$ji['imgCache'][maopc7];
      };var tlixg$ = function () {
        jin3uq(), n$ji['onLoaded']($tgxhl);
      },
          hgtzl = function () {
        jin3uq(), n$ji['event']('error', 'Load image failed');
      };n$ji['_type'] == 'nativeimage' ? ($tgxhl = new fzyrl['window']['Image'](), $tgxhl['crossOrigin'] = '', $tgxhl['onload'] = tlixg$, $tgxhl['onerror'] = hgtzl, $tgxhl['src'] = lghrtz, n$ji['imgCache'][maopc7] = $tgxhl) : new xhlg$t['create'](lghrtz, { 'onload': tlixg$, 'onerror': hgtzl, 'onCreate': function (rthlxg) {
          $tgxhl = rthlxg, n$ji['imgCache'][maopc7] = rthlxg;
        } });
    }, ryzhfv;
  }(),
      fzhlry = function () {
    function tgli$() {}return _4vyz(tgli$, 'laya.wx.mini.MiniInput'), tgli$['_createInputElement'] = function () {
      omcap['_initInput'](omcap['area'] = fzyrl['createElement']('textarea')), omcap['_initInput'](omcap['input'] = fzyrl['createElement']('input')), omcap['inputContainer'] = fzyrl['createElement']('div'), omcap['inputContainer']['style']['position'] = 'absolute', omcap['inputContainer']['style']['zIndex'] = 0x186a0, fzyrl['container']['appendChild'](omcap['inputContainer']), omcap['inputContainer']['setPos'] = function (v_y74f, tlgxrh) {
        omcap['inputContainer']['style']['left'] = v_y74f + 'px', omcap['inputContainer']['style']['top'] = tlgxrh + 'px';
      }, i$tlgx['stage']['on']('resize', null, tgli$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s9uqk) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ijq$3['_soundClass'] = xgh$l, ijq$3['_musicClass'] = xgh$l;
    }, tgli$['_onStageResize'] = function () {
      var fyzhrv = i$tlgx['stage']['_canvasTransform']['identity']();fyzhrv['scale'](fzyrl['width'] / k60sb9['canvas']['width'] / jn3s['getPixelRatio'](), fzyrl['height'] / k60sb9['canvas']['height'] / jn3s['getPixelRatio']());
    }, tgli$['wxinputFocus'] = function (z4_fv) {
      var $lht = omcap['inputElement']['target'];if ($lht && !$lht['editable']) return;_vfz4y['window']['wx']['offKeyboardConfirm'](), _vfz4y['window']['wx']['offKeyboardInput'](), _vfz4y['window']['wx']['showKeyboard']({ 'defaultValue': $lht['text'], 'maxLength': $lht['maxChars'], 'multiple': $lht['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d15w28) {}, 'fail': function (hrty) {} }), _vfz4y['window']['wx']['onKeyboardConfirm'](function (jq3nu) {
        var gt$li = jq3nu ? jq3nu['value'] : '';$lht['text'] = gt$li, $lht['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _vfz4y['window']['wx']['onKeyboardInput'](function (o_ac7m) {
        var b9k06d = o_ac7m ? o_ac7m['value'] : '';if (!$lht['multiline']) {
          if (b9k06d['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$lht['text'] = b9k06d, $lht['event']('input');
      });
    }, tgli$['inputEnter'] = function () {
      omcap['inputElement']['target']['focus'] = ![];
    }, tgli$['wxinputblur'] = function () {
      tgli$['hideKeyboard']();
    }, tgli$['hideKeyboard'] = function () {
      _vfz4y['window']['wx']['offKeyboardConfirm'](), _vfz4y['window']['wx']['offKeyboardInput'](), _vfz4y['window']['wx']['hideKeyboard']({ 'success': function (suqkn) {
          console['log']('隐藏键盘');
        }, 'fail': function (ca) {
          console['log']('隐藏键盘出错:' + (ca ? ca['errMsg'] : ''));
        } });
    }, tgli$;
  }(),
      frv4 = function () {
    function _v4z() {}_4vyz(_v4z, 'laya.wx.mini.MiniLoader');var snq93u = _v4z['prototype'];return snq93u['load'] = function (ac7opm, g$tlh, j$gxi3, xltgi$, k90s) {
      j$gxi3 === void 0x0 && (j$gxi3 = !![]), k90s === void 0x0 && (k90s = ![]);var rtly = this;rtly['_url'] = ac7opm;if (ac7opm['indexOf']('data:image') === 0x0) rtly['_type'] = g$tlh = 'image';else rtly['_type'] = g$tlh || (g$tlh = rtly['getTypeFromUrl'](ac7opm));rtly['_cache'] = j$gxi3, rtly['_data'] = null;var j$3qi = 'ascii';if (ac7opm['indexOf']('.fnt') != -0x1) j$3qi = 'utf8';else g$tlh == 'arraybuffer' && (j$3qi = '');;var ocmpa7 = _yfv['getFileExtension'](ac7opm);if (_v4z['_fileTypeArr']['indexOf'](ocmpa7) != -0x1) _vfz4y['EnvConfig']['load']['call'](this, ac7opm, g$tlh, j$gxi3, xltgi$, k90s);else {
        if (!fv7a4_['getFileInfo'](ac7opm)) {
          if (ac7opm['indexOf']('layaNativeDir/') != -0x1) {
            if (_vfz4y['isZiYu']) {
              var oca7mp = fv7a4_['ziyuFileData'][ac7opm];rtly['onLoaded'](oca7mp);return;
            } else {
              cosnole['log']('read read'), fv7a4_['read'](ac7opm, j$3qi, new _oc(_v4z, _v4z['onReadNativeCallBack'], [j$3qi, ac7opm, g$tlh, j$gxi3, xltgi$, k90s, rtly]));return;
            }
          }if (mo7acp['rootPath'] == '') var $tixlg = ac7opm;else $tixlg = ac7opm['split'](mo7acp['rootPath'])[0x0];ac7opm['indexOf']('http://') != -0x1 || ac7opm['indexOf']('https://') != -0x1 ? _vfz4y['EnvConfig']['load']['call'](rtly, ac7opm, g$tlh, j$gxi3, xltgi$, k90s) : fv7a4_['readFile']($tixlg, j$3qi, new _oc(_v4z, _v4z['onReadNativeCallBack'], [j$3qi, ac7opm, g$tlh, j$gxi3, xltgi$, k90s, rtly]), ac7opm);
        } else _vfz4y['EnvConfig']['load']['call'](this, ac7opm, g$tlh, j$gxi3, xltgi$, k90s);
      }
    }, snq93u['resMgrLoad'] = function (xhl, lyzhr, n3$, $ijxg3, uks6n, b856d0, snkq) {
      n3$ === void 0x0 && (n3$ = 0x0), $ijxg3 === void 0x0 && ($ijxg3 = ![]), uks6n === void 0x0 && (uks6n = ![]), b856d0 === void 0x0 && (b856d0 = 0x0), snkq === void 0x0 && (snkq = 0x3), xhl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xhl), _vfz4y['EnvConfig']['resMgrLoad'](xhl, (qnu93, yhrtlz, d9kb60) => {
        _v4z['prototype']['resMgrLoadCallBack'](qnu93, yhrtlz, d9kb60, lyzhr);
      }, n3$, $ijxg3, uks6n, b856d0, snkq);
    }, snq93u['resMgrLoadCallBack'] = function (kq9s, q9u, rlhyz, gi$jt) {
      console['log']('buff:::', kq9s, rlhyz, fv7a4_['fileNativeDir'] + '///' + fv7a4_['fileListName']), gi$jt(kq9s, q9u, rlhyz);
    }, snq93u['clearRes'] = function (wdb80, d05bw8) {
      d05bw8 === void 0x0 && (d05bw8 = ![]);var b0dw8 = this;b0dw8['clearRes'](wdb80, d05bw8);var zry = fv7a4_['getFileInfo'](wdb80);if (zry && (wdb80['indexOf']('http://') != -0x1 || wdb80['indexOf']('https://') != -0x1)) {
        var b65d8 = zry['md5'],
            k5b0d = fv7a4_['getFileNativePath'](b65d8);fv7a4_['remove'](k5b0d);
      }
    }, _v4z['onReadNativeCallBack'] = function (hgxtl, lti$x, qnsku, pmoeca, ryzlt, gi$xtj, nqiu3j, juni3q, i3jnq) {
      pmoeca === void 0x0 && (pmoeca = !![]), gi$xtj === void 0x0 && (gi$xtj = ![]), juni3q === void 0x0 && (juni3q = 0x0);if (!juni3q) {
        var tgl;if (qnsku == 'json' || qnsku == 'atlas') tgl = _vfz4y['getJson'](i3jnq['data']);else qnsku == 'xml' ? tgl = _yfv['parseXMLFromString'](i3jnq['data']) : tgl = i3jnq['data'];nqiu3j['onLoaded'](tgl), !_vfz4y['isZiYu'] && _vfz4y['isPosMsgYu'] && qnsku != 'arraybuffer' && wx['postMessage']({ 'url': lti$x, 'data': tgl, 'isLoad': !![] });
      } else juni3q == 0x1 && _vfz4y['EnvConfig']['load']['call'](nqiu3j, lti$x, qnsku, pmoeca, ryzlt, gi$xtj);
    }, b6k9su(_v4z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _v4z;
  }(),
      fv7a4_ = function (bd60k5) {
    function inqu3j() {
      inqu3j['__super']['call'](this);;
    }return _4vyz(inqu3j, 'laya.wx.mini.MiniFileMgr', bd60k5), inqu3j['isLoadFile'] = function (yrf4zv) {
      return inqu3j['_fileTypeArr']['indexOf'](yrf4zv) != -0x1 ? !![] : ![];
    }, inqu3j['getFileInfo'] = function (quni3j) {
      var mco7ap = quni3j['split']('?')[0x0],
          jig3x = inqu3j['filesListObj'][mco7ap];if (jig3x == null) return null;else return jig3x;return null;
    }, inqu3j['onFileUpdate'] = function ($hgt, lxhtg) {
      var aoce = $hgt['split']('/'),
          v4frz = aoce[aoce['length'] - 0x1],
          flhz = inqu3j['getFileInfo'](lxhtg);if (flhz == null) inqu3j['onSaveFile'](lxhtg, v4frz);else {
        if (flhz['readyUrl'] != lxhtg) inqu3j['remove'](v4frz, lxhtg);
      }
    }, inqu3j['exits'] = function (u6kn9, c7_m4) {
      var acepom = inqu3j['getFileNativePath'](u6kn9);inqu3j['fs']['getFileInfo']({ 'filePath': acepom, 'success': function (zg) {
          c7_m4 != null && c7_m4['runWith']([0x0, zg]);
        }, 'fail': function (mv4_7) {
          c7_m4 != null && c7_m4['runWith']([0x1, mv4_7]);
        } });
    }, inqu3j['read'] = function (i3junq, lhyrf, omp7ca, skn6) {
      lhyrf === void 0x0 && (lhyrf = 'ascill'), skn6 === void 0x0 && (skn6 = '');var bd9k6;skn6 != '' ? bd9k6 = inqu3j['getFileNativePath'](i3junq) : bd9k6 = i3junq, inqu3j['fs']['readFile']({ 'filePath': bd9k6, 'encoding': lhyrf, 'success': function (qusn) {
          omp7ca != null && omp7ca['runWith']([0x0, qusn]);
        }, 'fail': function (ma_74c) {
          if (ma_74c && skn6 != '') inqu3j['down'](skn6, lhyrf, omp7ca, skn6);else omp7ca != null && omp7ca['runWith']([0x1]);
        } });
    }, inqu3j['readNativeFile'] = function (bd8, i$j3gx) {
      inqu3j['fs']['readFile']({ 'filePath': bd8, 'encoding': '', 'success': function (wd825) {
          i$j3gx != null && i$j3gx['runWith']([0x0]);
        }, 'fail': function (_ca7mo) {
          i$j3gx != null && i$j3gx['runWith']([0x1]);
        } });
    }, inqu3j['down'] = function (vhzyf, hrylzt, mpeac, txhg$l) {
      hrylzt === void 0x0 && (hrylzt = 'ascill'), txhg$l === void 0x0 && (txhg$l = '');var lt$hg = inqu3j['getFileNativePath'](txhg$l),
          g3x$ = inqu3j['wxdown']({ 'url': vhzyf, 'filePath': lt$hg, 'success': function (maeocp) {
          if (maeocp['statusCode'] === 0xc8) inqu3j['readFile'](maeocp['filePath'], hrylzt, mpeac, txhg$l);
        }, 'fail': function (tyrlz) {
          mpeac != null && mpeac['runWith']([0x1, tyrlz]);
        } });g3x$['onProgressUpdate'](function (dw502) {
        mpeac != null && mpeac['runWith']([0x2, dw502['progress']]);
      });
    }, inqu3j['readFile'] = function (qu3js, $j3qix, ryfz, fvzy_4) {
      $j3qix === void 0x0 && ($j3qix = 'ascill'), fvzy_4 === void 0x0 && (fvzy_4 = ''), inqu3j['fs']['readFile']({ 'filePath': qu3js, 'encoding': $j3qix, 'success': function (qx3ij$) {
          if (qu3js['indexOf']('http://') != -0x1 || qu3js['indexOf']('https://') != -0x1) inqu3j['onFileUpdate'](qu3js, fvzy_4);ryfz != null && ryfz['runWith']([0x0, qx3ij$]);
        }, 'fail': function (db680) {
          if (db680) ryfz != null && ryfz['runWith']([0x1, db680]);
        } });
    }, inqu3j['downImg'] = function (lxtrgh, ryfzv, rfhyl) {
      rfhyl === void 0x0 && (rfhyl = '');var jiq3$x = inqu3j['wxdown']({ 'url': lxtrgh, 'success': function (n6ku9s) {
          n6ku9s['statusCode'] === 0xc8 && inqu3j['copyFile'](n6ku9s['tempFilePath'], rfhyl, ryfzv);
        }, 'fail': function (ig3$j) {
          ryfzv != null && ryfzv['runWith']([0x1, ig3$j]);
        } });
    }, inqu3j['copyFile'] = function (w825d0, iuq3jn, txgrlh) {
      var ku69sb = w825d0['split']('/'),
          igx3j = ku69sb[ku69sb['length'] - 0x1],
          $xlthg = iuq3jn['split']('?')[0x0],
          dk560b = inqu3j['getFileInfo'](iuq3jn),
          d2185 = inqu3j['getFileNativePath'](igx3j);inqu3j['fs']['copyFile']({ 'srcPath': w825d0, 'destPath': d2185, 'success': function (n3qiju) {
          if (!dk560b) inqu3j['onSaveFile'](iuq3jn, igx3j), txgrlh != null && txgrlh['runWith']([0x0]);else {
            if (dk560b['readyUrl'] != iuq3jn) inqu3j['remove'](igx3j, iuq3jn, txgrlh);
          }
        }, 'fail': function (cpoema) {
          txgrlh != null && txgrlh['runWith']([0x1, cpoema]);
        } });
    }, inqu3j['getFileNativePath'] = function (uinqj3) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + uinqj3;
    }, inqu3j['remove'] = function (rlyt, bk06s9, ji3q$x) {
      bk06s9 === void 0x0 && (bk06s9 = '');var $hlx = inqu3j['getFileInfo'](bk06s9),
          sb690 = inqu3j['getFileNativePath']($hlx['md5']);i$tlgx['loader']['clearRes']($hlx['readyUrl']), inqu3j['fs']['unlink']({ 'filePath': sb690, 'success': function (_a4) {
          if (bk06s9 != '') inqu3j['onSaveFile'](bk06s9, rlyt);ji3q$x != null && ji3q$x['runWith']([0x0]);
        }, 'fail': function (i3$xj) {} });
    }, inqu3j['onSaveFile'] = function (oc7ap, igxt$j) {
      var k69nsu = oc7ap['split']('?')[0x0];inqu3j['filesListObj'][k69nsu] = { 'md5': igxt$j, 'readyUrl': oc7ap }, inqu3j['fs']['writeFile']({ 'filePath': inqu3j['fileNativeDir'] + '/' + inqu3j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](inqu3j['filesListObj']), 'success': function (qnju3s) {
          console['log']('写入测试测试成功：', qnju3s);
        }, 'fail': function (wd81) {
          console['log']('写入测试测试失败：', wd81);
        } });
    }, inqu3j['existDir'] = function (rhlxt, hxtrg) {
      inqu3j['fs']['mkdir']({ 'dirPath': rhlxt, 'success': function ($gltxh) {
          hxtrg != null && hxtrg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (gthrlx) {
          if (gthrlx['errMsg']['indexOf']('file already exists') != -0x1) inqu3j['readSync'](inqu3j['fileListName'], 'utf8', hxtrg);else hxtrg != null && hxtrg['runWith']([0x1, gthrlx]);
        } });
    }, inqu3j['readSync'] = function (d50b68, ji3g, g3$jx, sn96) {
      ji3g === void 0x0 && (ji3g = 'ascill'), sn96 === void 0x0 && (sn96 = '');var t$hlx = inqu3j['getFileNativePath'](d50b68),
          flhy;try {
        flhy = inqu3j['fs']['readFileSync'](t$hlx), g3$jx != null && g3$jx['runWith']([0x0, { 'data': flhy }]);
      } catch (u3q9s) {
        g3$jx != null && g3$jx['runWith']([0x1]);
      }
    }, inqu3j['readCache'] = function () {}, inqu3j['writeCache'] = function (vyrhf) {
      var a_74mc = readyUrl['split']('?')[0x0];inqu3j['filesListObj'][a_74mc] = { 'md5': md5Name, 'readyUrl': readyUrl }, inqu3j['fs']['writeFile']({ 'filePath': inqu3j['fileNativeDir'] + '/' + inqu3j['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](inqu3j['filesListObj']), 'success': function (omac7p) {}, 'fail': function (d6kb50) {} });
    }, inqu3j['setNativeFileDir'] = function (j$git) {
      inqu3j['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j$git;
    }, inqu3j['filesListObj'] = {}, inqu3j['fileNativeDir'] = null, inqu3j['fileListName'] = 'layaairfiles.txt', inqu3j['ziyuFileData'] = {}, b6k9su(inqu3j, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), inqu3j;
  }(uk9nqs),
      xgh$l = function (snqj3) {
    function frylhz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], frylhz['__super']['call'](this), this['_sound'] = frylhz['_createSound']();
    }_4vyz(frylhz, 'laya.wx.mini.MiniSound', snqj3);var thgrl = frylhz['prototype'];return thgrl['load'] = function (_v74) {
      var h$tlg = this;_v74 = mo7acp['formatURL'](_v74), this['url'] = _v74;if (frylhz['_audioCache'][_v74]) {
        this['event']('complete');return;
      }function s9nq3u() {
        if (frylhz['_null'] != undefined) h$tlg['_sound']['onCanplay'](frylhz['_null']), h$tlg['_sound']['onError'](frylhz['_null']);else try {
          h$tlg['_sound']['onCanplay'](null), h$tlg['_sound']['onError'](null), frylhz['_null'] = null;
        } catch (q93sun) {
          console['warn']('[wxmini] _clearSound:' + q93sun), h$tlg['_sound']['onCanplay'](qusnj3), h$tlg['_sound']['onError'](qusnj3), frylhz['_null'] = qusnj3;
        }
      }function cmpa7o() {
        s9nq3u(), omp['loaded'] = !![], omp['event']('complete'), frylhz['_audioCache'][omp['url']] = omp;
      }function dk690b(oa_mc7) {
        console['error']('errCode=' + oa_mc7['errCode'] + '  errMsg=' + oa_mc7['errMsg']), s9nq3u(), omp['event']('error');
      }function qusnj3() {}this['_sound']['onCanplay'](cmpa7o), this['_sound']['onError'](dk690b), this['_sound']['src'] = _v74;var omp = this;
    }, thgrl['play'] = function (sn6uk9, zrvfy) {
      sn6uk9 === void 0x0 && (sn6uk9 = 0x0), zrvfy === void 0x0 && (zrvfy = 0x0);var xi$jgt;if (this['url'] == ijq$3['_tMusic']) {
        if (!frylhz['_musicAudio']) frylhz['_musicAudio'] = frylhz['_createSound']();xi$jgt = frylhz['_musicAudio'];
      } else xi$jgt = frylhz['_createSound']();xi$jgt['src'] = this['url'];var pom7a = new pmoce(xi$jgt);return pom7a['url'] = this['url'], pom7a['loops'] = zrvfy, pom7a['startTime'] = sn6uk9, pom7a['play'](), ijq$3['addChannel'](pom7a), pom7a;
    }, thgrl['dispose'] = function () {
      var rlfhz = frylhz['_audioCache'][this['url']];rlfhz && (rlfhz['src'] = '', delete frylhz['_audioCache'][this['url']]);
    }, eaop(0x0, thgrl, 'duration', function () {
      return this['_sound']['duration'];
    }), frylhz['_createSound'] = function () {
      return frylhz['_id']++, _vfz4y['window']['wx']['createInnerAudioContext']();
    }, frylhz['_musicAudio'] = null, frylhz['_id'] = 0x0, frylhz['_audioCache'] = {}, frylhz['_null'] = undefined, frylhz;
  }(uk9nqs),
      pmoce = function (qknus) {
    function unjsq(lrytzh) {
      this['_audio'] = null, this['_onEnd'] = null, unjsq['__super']['call'](this), this['_audio'] = lrytzh, this['_onEnd'] = _yfv['bind'](this['__onEnd'], this), lrytzh['onEnded'](this['_onEnd']);
    }_4vyz(unjsq, 'laya.wx.mini.MiniSoundChannel', qknus);var sk96 = unjsq['prototype'];return sk96['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (i$tlgx['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sk96['__onNull'] = function () {}, sk96['play'] = function () {
      this['isStopped'] = ![], ijq$3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sk96['stop'] = function () {
      this['isStopped'] = !![], ijq$3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (unjsq['_null'] != undefined) this['_audio']['onEnded'](unjsq['_null']);else try {
        this['_audio']['onEnded'](null), unjsq['_null'] = null;
      } catch (lthxgr) {
        console['warn']('[wxmini] stop:' + lthxgr), this['_audio']['onEnded'](_yfv['bind'](this['__onNull'], this)), unjsq['_null'] = _yfv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sk96['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sk96['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ijq$3['addChannel'](this), this['_audio']['play']();
    }, eaop(0x0, sk96, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), eaop(0x0, sk96, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), eaop(0x0, sk96, 'volume', function () {
      return 0x1;
    }, function (b0w8d) {}), unjsq['_null'] = undefined, unjsq;
  }(ocm7a_);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var vm7_4a in Laya) {
    var rhyz = Laya[vm7_4a];rhyz && rhyz['__isclass'] && (exports[vm7_4a] = rhyz);
  }
});