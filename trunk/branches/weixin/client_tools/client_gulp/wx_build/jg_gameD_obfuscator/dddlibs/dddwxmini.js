var v = wx.$d;
(function (window, document, n_6h4j) {
  var agb0qz = n_6h4j['un'],
      m6dhej = n_6h4j['uns'],
      gzb0qa = n_6h4j['static'],
      zba80x = n_6h4j['class'],
      n4hj_ = n_6h4j['getset'],
      $1rwp = n_6h4j['__newvec'],
      za0gqk = laya['utils']['Browser'],
      vwp$ = laya['events']['Event'],
      wv$r1 = laya['events']['EventDispatcher'],
      qakg = laya['resource']['HTMLImage'],
      eumdt = laya['utils']['Handler'],
      co23 = laya['display']['Input'],
      ab8x0 = laya['net']['Loader'],
      n4_93 = laya['maths']['Matrix'],
      fiukgt = laya['renders']['Render'],
      ftqk0g = laya['utils']['RunDriver'],
      z0qbax = laya['media']['Sound'],
      qfz0gk = laya['media']['SoundChannel'],
      p7vrw = laya['media']['SoundManager'],
      h9_nj4 = laya['display']['Stage'],
      r18$x = laya['net']['URL'],
      wr7$ = laya['utils']['Utils'],
      zfqkg0 = function () {
    function hj4m6n() {}return zba80x(hj4m6n, 'laya.wx.mini.MiniAdpter'), hj4m6n['getJson'] = function (gqfkut) {
      return JSON['parse'](gqfkut);
    }, hj4m6n['init'] = function (v$1, miteu) {
      v$1 === void 0x0 && (v$1 = ![]), miteu === void 0x0 && (miteu = ![]);if (hj4m6n['_inited']) return;hj4m6n['window'] = window;if (hj4m6n['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hj4m6n['_inited'] = !![], hj4m6n['isZiYu'] = miteu, hj4m6n['isPosMsgYu'] = v$1, hj4m6n['EnvConfig'] = {}, !hj4m6n['isZiYu'] && (_oc935['setNativeFileDir']('/layaairGame'), _oc935['existDir'](_oc935['fileNativeDir'], eumdt['create'](hj4m6n, hj4m6n['onMkdirCallBack']))), hj4m6n['window']['focus'] = function () {}, n_6h4j['getUrlPath'] = function () {}, hj4m6n['window']['logtime'] = function (rpw8) {}, hj4m6n['window']['alertTimeLog'] = function (a8rb1x) {}, hj4m6n['window']['resetShareInfo'] = function () {}, hj4m6n['window']['CanvasRenderingContext2D'] = function () {}, hj4m6n['window']['CanvasRenderingContext2D']['prototype'] = hj4m6n['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hj4m6n['window']['document']['body']['appendChild'] = function () {}, hj4m6n['EnvConfig']['pixelRatioInt'] = 0x0, ftqk0g['getPixelRatio'] = hj4m6n['pixelRatio'], hj4m6n['_preCreateElement'] = za0gqk['createElement'], za0gqk['createElement'] = hj4m6n['createElement'], ftqk0g['createShaderCondition'] = hj4m6n['createShaderCondition'], wr7$['parseXMLFromString'] = hj4m6n['parseXMLFromString'], co23['_createInputElement'] = $pvwy7['_createInputElement'], hj4m6n['EnvConfig']['load'] = ab8x0['prototype']['load'], ab8x0['prototype']['load'] = futgki['prototype']['load'], hj4m6n['isZiYu'] && v$1 && wx['onMessage'](function (b0za8) {
        b0za8['isLoad'] && (_oc935['ziyuFileData'][b0za8['url']] = b0za8['data']);
      });
    }, hj4m6n['onMkdirCallBack'] = function (kfgitu, $l7ypv) {
      if (!kfgitu) _oc935['filesListObj'] = JSON['parse']($l7ypv['data']);
    }, hj4m6n['pixelRatio'] = function () {
      if (!hj4m6n['EnvConfig']['pixelRatioInt']) try {
        var _94c3n = wx['getSystemInfoSync']();return hj4m6n['EnvConfig']['pixelRatioInt'] = _94c3n['pixelRatio'], _94c3n = _94c3n, _94c3n['pixelRatio'];
      } catch (hnmj64) {}return hj4m6n['EnvConfig']['pixelRatioInt'];
    }, hj4m6n['createElement'] = function (z1x8ab) {
      if (z1x8ab == 'canvas') {
        var qb0zga;return hj4m6n['idx'] == 0x1 ? hj4m6n['isZiYu'] ? (qb0zga = sharedCanvas, qb0zga['style'] = {}) : qb0zga = window['canvas'] : qb0zga = window['wx']['createCanvas'](), hj4m6n['idx']++, qb0zga;
      } else {
        if (z1x8ab == 'textarea' || z1x8ab == 'input') return hj4m6n['onCreateInput'](z1x8ab);else {
          if (z1x8ab == 'div') {
            var im6ehd = hj4m6n['_preCreateElement'](z1x8ab);return im6ehd['contains'] = function (tig) {
              return null;
            }, im6ehd['removeChild'] = function ($w18p) {}, im6ehd;
          } else return hj4m6n['_preCreateElement'](z1x8ab);
        }
      }
    }, hj4m6n['onCreateInput'] = function ($v7l) {
      var qgz0f = hj4m6n['_preCreateElement']($v7l);return qgz0f['focus'] = $pvwy7['wxinputFocus'], qgz0f['blur'] = $pvwy7['wxinputblur'], qgz0f['style'] = {}, qgz0f['value'] = 0x0, qgz0f['parentElement'] = {}, qgz0f['placeholder'] = {}, qgz0f['type'] = {}, qgz0f['setColor'] = function (midhe6) {}, qgz0f['setType'] = function (c532o9) {}, qgz0f['setFontFace'] = function (h4_6n) {}, qgz0f['addEventListener'] = function (ktgqfu) {}, qgz0f['contains'] = function (fiteu) {
        return null;
      }, qgz0f['removeChild'] = function (vwp7$y) {}, qgz0f;
    }, hj4m6n['createShaderCondition'] = function (kqfut) {
      var y$p7vw = this,
          tfguqk = function () {
        var iutdm = kqfut;return y$p7vw[kqfut['replace']('this.', '')];
      };return tfguqk;
    }, hj4m6n['EnvConfig'] = null, hj4m6n['window'] = null, hj4m6n['_preCreateElement'] = null, hj4m6n['_inited'] = ![], hj4m6n['wxRequest'] = null, hj4m6n['systemInfo'] = null, hj4m6n['version'] = '0.0.1', hj4m6n['isZiYu'] = ![], hj4m6n['isPosMsgYu'] = ![], hj4m6n['parseXMLFromString'] = function (fku) {
      var t0qfkg, prv1w$;fku = fku['replace'](/>\s+</g, '><');try {
        t0qfkg = new window['Parser']['DOMParser']()['parseFromString'](fku, 'text/xml');
      } catch (hi6med) {
        throw '需要引入xml解析库文件';
      }return t0qfkg;
    }, hj4m6n['idx'] = 0x1, hj4m6n;
  }(),
      muidt = function () {
    function rpvw1() {}zba80x(rpvw1, 'laya.wx.mini.MiniImage');var pw$v7y = rpvw1['prototype'];return pw$v7y['_loadImage'] = function (qga0b) {
      var njme6 = this,
          kgq0t = ![];qga0b['indexOf']('layaNativeDir/') == -0x1 && (kgq0t = !![], qga0b = r18$x['formatURL'](qga0b));if (!_oc935['getFileInfo'](qga0b)) {
        if (qga0b['indexOf']('http://') != -0x1 || qga0b['indexOf']('https://') != -0x1) _oc935['downImg'](qga0b, new eumdt(rpvw1, rpvw1['onDownImgCallBack'], [qga0b, njme6]), qga0b);else rpvw1['onCreateImage'](qga0b, njme6, !![]);
      } else rpvw1['onCreateImage'](qga0b, njme6, !kgq0t);
    }, rpvw1['onDownImgCallBack'] = function (iue6dm, kagz0q, x$8rw1) {
      if (!x$8rw1) rpvw1['onCreateImage'](iue6dm, kagz0q);else kagz0q['onError'](null);
    }, rpvw1['onCreateImage'] = function (jn_94h, gqz0ab, zaqxb) {
      zaqxb === void 0x0 && (zaqxb = ![]);var ufqkg;if (!zaqxb) {
        var mn6hej = _oc935['getFileInfo'](jn_94h),
            h64n = mn6hej['md5'];ufqkg = _oc935['getFileNativePath'](h64n);
      } else ufqkg = jn_94h;if (gqz0ab['imgCache'] == null) gqz0ab['imgCache'] = {};var _9h4jn;function azq0b() {
        _9h4jn['onload'] = null, _9h4jn['onerror'] = null, delete gqz0ab['imgCache'][jn_94h];
      };var xw1rb8 = function () {
        azq0b(), gqz0ab['onLoaded'](_9h4jn);
      },
          kiudf = function () {
        azq0b(), gqz0ab['event']('error', 'Load image failed');
      };gqz0ab['_type'] == 'nativeimage' ? (_9h4jn = new za0gqk['window']['Image'](), _9h4jn['crossOrigin'] = '', _9h4jn['onload'] = xw1rb8, _9h4jn['onerror'] = kiudf, _9h4jn['src'] = ufqkg, gqz0ab['imgCache'][jn_94h] = _9h4jn) : new qakg['create'](ufqkg, { 'onload': xw1rb8, 'onerror': kiudf, 'onCreate': function (rwp$v1) {
          _9h4jn = rwp$v1, gqz0ab['imgCache'][jn_94h] = rwp$v1;
        } });
    }, rpvw1;
  }(),
      $pvwy7 = function () {
    function cn349_() {}return zba80x(cn349_, 'laya.wx.mini.MiniInput'), cn349_['_createInputElement'] = function () {
      co23['_initInput'](co23['area'] = za0gqk['createElement']('textarea')), co23['_initInput'](co23['input'] = za0gqk['createElement']('input')), co23['inputContainer'] = za0gqk['createElement']('div'), co23['inputContainer']['style']['position'] = 'absolute', co23['inputContainer']['style']['zIndex'] = 0x186a0, za0gqk['container']['appendChild'](co23['inputContainer']), co23['inputContainer']['setPos'] = function (utdfki, jdhe) {
        co23['inputContainer']['style']['left'] = utdfki + 'px', co23['inputContainer']['style']['top'] = jdhe + 'px';
      }, n_6h4j['stage']['on']('resize', null, cn349_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (emjd6h) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), p7vrw['_soundClass'] = fkutig, p7vrw['_musicClass'] = fkutig;
    }, cn349_['_onStageResize'] = function () {
      var e6himd = n_6h4j['stage']['_canvasTransform']['identity']();e6himd['scale'](za0gqk['width'] / fiukgt['canvas']['width'] / ftqk0g['getPixelRatio'](), za0gqk['height'] / fiukgt['canvas']['height'] / ftqk0g['getPixelRatio']());
    }, cn349_['wxinputFocus'] = function (w$y) {
      var ga0zkq = co23['inputElement']['target'];if (ga0zkq && !ga0zkq['editable']) return;zfqkg0['window']['wx']['offKeyboardConfirm'](), zfqkg0['window']['wx']['offKeyboardInput'](), zfqkg0['window']['wx']['showKeyboard']({ 'defaultValue': ga0zkq['text'], 'maxLength': ga0zkq['maxChars'], 'multiple': ga0zkq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (g0qzab) {}, 'fail': function (bxaqz) {} }), zfqkg0['window']['wx']['onKeyboardConfirm'](function (hmjen) {
        var nj_3 = hmjen ? hmjen['value'] : '';ga0zkq['text'] = nj_3, ga0zkq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), zfqkg0['window']['wx']['onKeyboardInput'](function (n9c3_) {
        var ftkgui = n9c3_ ? n9c3_['value'] : '';if (!ga0zkq['multiline']) {
          if (ftkgui['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ga0zkq['text'] = ftkgui, ga0zkq['event']('input');
      });
    }, cn349_['inputEnter'] = function () {
      co23['inputElement']['target']['focus'] = ![];
    }, cn349_['wxinputblur'] = function () {
      cn349_['hideKeyboard']();
    }, cn349_['hideKeyboard'] = function () {
      zfqkg0['window']['wx']['offKeyboardConfirm'](), zfqkg0['window']['wx']['offKeyboardInput'](), zfqkg0['window']['wx']['hideKeyboard']({ 'success': function (vw7y$p) {
          console['log']('隐藏键盘');
        }, 'fail': function (yw7$) {
          console['log']('隐藏键盘出错:' + (yw7$ ? yw7$['errMsg'] : ''));
        } });
    }, cn349_;
  }(),
      futgki = function () {
    function difteu() {}zba80x(difteu, 'laya.wx.mini.MiniLoader');var _jh9n4 = difteu['prototype'];return _jh9n4['load'] = function (zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b) {
      qtf0g === void 0x0 && (qtf0g = !![]), rw8x1b === void 0x0 && (rw8x1b = ![]);var kgufq = this;kgufq['_url'] = zfgk0;if (zfgk0['indexOf']('data:image') === 0x0) kgufq['_type'] = kgftiu = 'image';else kgufq['_type'] = kgftiu || (kgftiu = kgufq['getTypeFromUrl'](zfgk0));kgufq['_cache'] = qtf0g, kgufq['_data'] = null;var tikg = 'ascii';if (zfgk0['indexOf']('.fnt') != -0x1) tikg = 'utf8';else kgftiu == 'arraybuffer' && (tikg = '');;var _4j9nh = wr7$['getFileExtension'](zfgk0);if (difteu['_fileTypeArr']['indexOf'](_4j9nh) != -0x1) zfqkg0['EnvConfig']['load']['call'](this, zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b);else {
        if (!_oc935['getFileInfo'](zfgk0)) {
          if (zfgk0['indexOf']('layaNativeDir/') != -0x1) {
            if (zfqkg0['isZiYu']) {
              var eidhm = _oc935['ziyuFileData'][zfgk0];kgufq['onLoaded'](eidhm);return;
            } else {
              cosnole['log']('read read'), _oc935['read'](zfgk0, tikg, new eumdt(difteu, difteu['onReadNativeCallBack'], [tikg, zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b, kgufq]));return;
            }
          }if (r18$x['rootPath'] == '') var i6hedm = zfgk0;else i6hedm = zfgk0['split'](r18$x['rootPath'])[0x0];zfgk0['indexOf']('http://') != -0x1 || zfgk0['indexOf']('https://') != -0x1 ? zfqkg0['EnvConfig']['load']['call'](kgufq, zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b) : _oc935['readFile'](i6hedm, tikg, new eumdt(difteu, difteu['onReadNativeCallBack'], [tikg, zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b, kgufq]), zfgk0);
        } else zfqkg0['EnvConfig']['load']['call'](this, zfgk0, kgftiu, qtf0g, pr$v1w, rw8x1b);
      }
    }, _jh9n4['resMgrLoad'] = function (ktidu, h6idem, h_6nj, ab1xr8, qkza, fguti, gazqb) {
      h_6nj === void 0x0 && (h_6nj = 0x0), ab1xr8 === void 0x0 && (ab1xr8 = ![]), qkza === void 0x0 && (qkza = ![]), fguti === void 0x0 && (fguti = 0x0), gazqb === void 0x0 && (gazqb = 0x3), ktidu['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ktidu), zfqkg0['EnvConfig']['resMgrLoad'](ktidu, (fikgut, jmd6, dumei6) => {
        difteu['prototype']['resMgrLoadCallBack'](fikgut, jmd6, dumei6, h6idem);
      }, h_6nj, ab1xr8, qkza, fguti, gazqb);
    }, _jh9n4['resMgrLoadCallBack'] = function (w$81x, dkfui, m6je, tmie) {
      console['log']('buff:::', w$81x, m6je, _oc935['fileNativeDir'] + '///' + _oc935['fileListName']), tmie(w$81x, dkfui, m6je);
    }, _jh9n4['clearRes'] = function (p$vrw7, nj_4h9) {
      nj_4h9 === void 0x0 && (nj_4h9 = ![]);var az0b8x = this;az0b8x['clearRes'](p$vrw7, nj_4h9);var rwv$7p = _oc935['getFileInfo'](p$vrw7);if (rwv$7p && (p$vrw7['indexOf']('http://') != -0x1 || p$vrw7['indexOf']('https://') != -0x1)) {
        var pv7ly = rwv$7p['md5'],
            ftqgu = _oc935['getFileNativePath'](pv7ly);_oc935['remove'](ftqgu);
      }
    }, difteu['onReadNativeCallBack'] = function (b8x1z, az0bx8, ab0zx, zxqba0, r$8p1, z0fqk, h6iem, xqb0za, itk) {
      zxqba0 === void 0x0 && (zxqba0 = !![]), z0fqk === void 0x0 && (z0fqk = ![]), xqb0za === void 0x0 && (xqb0za = 0x0);if (!xqb0za) {
        var z0kqa;if (ab0zx == 'json' || ab0zx == 'atlas') z0kqa = zfqkg0['getJson'](itk['data']);else ab0zx == 'xml' ? z0kqa = wr7$['parseXMLFromString'](itk['data']) : z0kqa = itk['data'];h6iem['onLoaded'](z0kqa), !zfqkg0['isZiYu'] && zfqkg0['isPosMsgYu'] && ab0zx != 'arraybuffer' && wx['postMessage']({ 'url': az0bx8, 'data': z0kqa, 'isLoad': !![] });
      } else xqb0za == 0x1 && zfqkg0['EnvConfig']['load']['call'](h6iem, az0bx8, ab0zx, zxqba0, r$8p1, z0fqk);
    }, gzb0qa(difteu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), difteu;
  }(),
      _oc935 = function (b8rxw) {
    function qkgfut() {
      qkgfut['__super']['call'](this);;
    }return zba80x(qkgfut, 'laya.wx.mini.MiniFileMgr', b8rxw), qkgfut['isLoadFile'] = function (i6me) {
      return qkgfut['_fileTypeArr']['indexOf'](i6me) != -0x1 ? !![] : ![];
    }, qkgfut['getFileInfo'] = function (bg0az) {
      var xb8z0a = bg0az['split']('?')[0x0],
          py$7 = qkgfut['filesListObj'][xb8z0a];if (py$7 == null) return null;else return py$7;return null;
    }, qkgfut['onFileUpdate'] = function (dih6me, teiu) {
      var tukqg = dih6me['split']('/'),
          a08bz = tukqg[tukqg['length'] - 0x1],
          vrp7$ = qkgfut['getFileInfo'](teiu);if (vrp7$ == null) qkgfut['onSaveFile'](teiu, a08bz);else {
        if (vrp7$['readyUrl'] != teiu) qkgfut['remove'](a08bz, teiu);
      }
    }, qkgfut['exits'] = function (bw81, ftigku) {
      var imtdeu = qkgfut['getFileNativePath'](bw81);qkgfut['fs']['getFileInfo']({ 'filePath': imtdeu, 'success': function (kditu) {
          ftigku != null && ftigku['runWith']([0x0, kditu]);
        }, 'fail': function (mehi) {
          ftigku != null && ftigku['runWith']([0x1, mehi]);
        } });
    }, qkgfut['read'] = function (xab0zq, j9nh, fidu, bxa18) {
      j9nh === void 0x0 && (j9nh = 'ascill'), bxa18 === void 0x0 && (bxa18 = '');var tiue;bxa18 != '' ? tiue = qkgfut['getFileNativePath'](xab0zq) : tiue = xab0zq, qkgfut['fs']['readFile']({ 'filePath': tiue, 'encoding': j9nh, 'success': function (ieu6) {
          fidu != null && fidu['runWith']([0x0, ieu6]);
        }, 'fail': function ($18) {
          if ($18 && bxa18 != '') qkgfut['down'](bxa18, j9nh, fidu, bxa18);else fidu != null && fidu['runWith']([0x1]);
        } });
    }, qkgfut['readNativeFile'] = function (r$wp81, uftd) {
      qkgfut['fs']['readFile']({ 'filePath': r$wp81, 'encoding': '', 'success': function (p7rwv) {
          uftd != null && uftd['runWith']([0x0]);
        }, 'fail': function (vw$rp1) {
          uftd != null && uftd['runWith']([0x1]);
        } });
    }, qkgfut['down'] = function (fkgz0, $rvw1p, p8r$w1, uetmdi) {
      $rvw1p === void 0x0 && ($rvw1p = 'ascill'), uetmdi === void 0x0 && (uetmdi = '');var n_j49 = qkgfut['getFileNativePath'](uetmdi),
          z0agbq = qkgfut['wxdown']({ 'url': fkgz0, 'filePath': n_j49, 'success': function (c5_o39) {
          if (c5_o39['statusCode'] === 0xc8) qkgfut['readFile'](c5_o39['filePath'], $rvw1p, p8r$w1, uetmdi);
        }, 'fail': function (r7v$pw) {
          p8r$w1 != null && p8r$w1['runWith']([0x1, r7v$pw]);
        } });z0agbq['onProgressUpdate'](function (zqagb) {
        p8r$w1 != null && p8r$w1['runWith']([0x2, zqagb['progress']]);
      });
    }, qkgfut['readFile'] = function (w$rpv, c9n43_, vr7$, xqzba) {
      c9n43_ === void 0x0 && (c9n43_ = 'ascill'), xqzba === void 0x0 && (xqzba = ''), qkgfut['fs']['readFile']({ 'filePath': w$rpv, 'encoding': c9n43_, 'success': function (kfqg) {
          if (w$rpv['indexOf']('http://') != -0x1 || w$rpv['indexOf']('https://') != -0x1) qkgfut['onFileUpdate'](w$rpv, xqzba);vr7$ != null && vr7$['runWith']([0x0, kfqg]);
        }, 'fail': function (aqbz0g) {
          if (aqbz0g) vr7$ != null && vr7$['runWith']([0x1, aqbz0g]);
        } });
    }, qkgfut['downImg'] = function (r$81wp, xr1ba, z0bx8a) {
      z0bx8a === void 0x0 && (z0bx8a = '');var x8$rw = qkgfut['wxdown']({ 'url': r$81wp, 'success': function (fqgkz) {
          fqgkz['statusCode'] === 0xc8 && qkgfut['copyFile'](fqgkz['tempFilePath'], z0bx8a, xr1ba);
        }, 'fail': function (a8z0bx) {
          xr1ba != null && xr1ba['runWith']([0x1, a8z0bx]);
        } });
    }, qkgfut['copyFile'] = function (tdif, wbx81, w7r$v) {
      var tukid = tdif['split']('/'),
          dietum = tukid[tukid['length'] - 0x1],
          zg0qka = wbx81['split']('?')[0x0],
          hn9_j = qkgfut['getFileInfo'](wbx81),
          mdi6ue = qkgfut['getFileNativePath'](dietum);qkgfut['fs']['copyFile']({ 'srcPath': tdif, 'destPath': mdi6ue, 'success': function (fidku) {
          if (!hn9_j) qkgfut['onSaveFile'](wbx81, dietum), w7r$v != null && w7r$v['runWith']([0x0]);else {
            if (hn9_j['readyUrl'] != wbx81) qkgfut['remove'](dietum, wbx81, w7r$v);
          }
        }, 'fail': function (n4m) {
          w7r$v != null && w7r$v['runWith']([0x1, n4m]);
        } });
    }, qkgfut['getFileNativePath'] = function (wb1r8x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wb1r8x;
    }, qkgfut['remove'] = function (tmieu, kfqgt, xaqzb0) {
      kfqgt === void 0x0 && (kfqgt = '');var udtfe = qkgfut['getFileInfo'](kfqgt),
          edtuf = qkgfut['getFileNativePath'](udtfe['md5']);n_6h4j['loader']['clearRes'](udtfe['readyUrl']), qkgfut['fs']['unlink']({ 'filePath': edtuf, 'success': function (n_3c) {
          if (kfqgt != '') qkgfut['onSaveFile'](kfqgt, tmieu);xaqzb0 != null && xaqzb0['runWith']([0x0]);
        }, 'fail': function (ga0) {} });
    }, qkgfut['onSaveFile'] = function ($rp8w1, ufetdi) {
      var c95_o = $rp8w1['split']('?')[0x0];qkgfut['filesListObj'][c95_o] = { 'md5': ufetdi, 'readyUrl': $rp8w1 }, qkgfut['fs']['writeFile']({ 'filePath': qkgfut['fileNativeDir'] + '/' + qkgfut['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qkgfut['filesListObj']), 'success': function (ieu6dm) {
          console['log']('写入测试测试成功：', ieu6dm);
        }, 'fail': function (zg0abq) {
          console['log']('写入测试测试失败：', zg0abq);
        } });
    }, qkgfut['existDir'] = function (n43c_, kgiu) {
      qkgfut['fs']['mkdir']({ 'dirPath': n43c_, 'success': function (hmdi6e) {
          kgiu != null && kgiu['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (d6eu) {
          if (d6eu['errMsg']['indexOf']('file already exists') != -0x1) qkgfut['readSync'](qkgfut['fileListName'], 'utf8', kgiu);else kgiu != null && kgiu['runWith']([0x1, d6eu]);
        } });
    }, qkgfut['readSync'] = function (j6hnem, $v7p, tguqkf, dmhe6) {
      $v7p === void 0x0 && ($v7p = 'ascill'), dmhe6 === void 0x0 && (dmhe6 = '');var kqgtf = qkgfut['getFileNativePath'](j6hnem),
          idkfut;try {
        idkfut = qkgfut['fs']['readFileSync'](kqgtf), tguqkf != null && tguqkf['runWith']([0x0, { 'data': idkfut }]);
      } catch (zaxq0b) {
        tguqkf != null && tguqkf['runWith']([0x1]);
      }
    }, qkgfut['readCache'] = function () {}, qkgfut['writeCache'] = function (uikgt) {
      var umdi6e = readyUrl['split']('?')[0x0];qkgfut['filesListObj'][umdi6e] = { 'md5': md5Name, 'readyUrl': readyUrl }, qkgfut['fs']['writeFile']({ 'filePath': qkgfut['fileNativeDir'] + '/' + qkgfut['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qkgfut['filesListObj']), 'success': function (dtm) {}, 'fail': function (dh) {} });
    }, qkgfut['setNativeFileDir'] = function (ifukd) {
      qkgfut['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ifukd;
    }, qkgfut['filesListObj'] = {}, qkgfut['fileNativeDir'] = null, qkgfut['fileListName'] = 'layaairfiles.txt', qkgfut['ziyuFileData'] = {}, gzb0qa(qkgfut, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qkgfut;
  }(wv$r1),
      fkutig = function (r1vwp) {
    function um6i() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], um6i['__super']['call'](this), this['_sound'] = um6i['_createSound']();
    }zba80x(um6i, 'laya.wx.mini.MiniSound', r1vwp);var p8wr = um6i['prototype'];return p8wr['load'] = function (x81bwr) {
      var eimd = this;x81bwr = r18$x['formatURL'](x81bwr), this['url'] = x81bwr;if (um6i['_audioCache'][x81bwr]) {
        this['event']('complete');return;
      }function axbz0() {
        if (um6i['_null'] != undefined) eimd['_sound']['onCanplay'](um6i['_null']), eimd['_sound']['onError'](um6i['_null']);else try {
          eimd['_sound']['onCanplay'](null), eimd['_sound']['onError'](null), um6i['_null'] = null;
        } catch (xab8) {
          console['warn']('[wxmini] _clearSound:' + xab8), eimd['_sound']['onCanplay'](_c3o49), eimd['_sound']['onError'](_c3o49), um6i['_null'] = _c3o49;
        }
      }function c952() {
        axbz0(), b8axz['loaded'] = !![], b8axz['event']('complete'), um6i['_audioCache'][b8axz['url']] = b8axz;
      }function r1w(kgfuq) {
        console['error']('errCode=' + kgfuq['errCode'] + '  errMsg=' + kgfuq['errMsg']), axbz0(), b8axz['event']('error');
      }function _c3o49() {}this['_sound']['onCanplay'](c952), this['_sound']['onError'](r1w), this['_sound']['src'] = x81bwr;var b8axz = this;
    }, p8wr['play'] = function (ifue, _43j) {
      ifue === void 0x0 && (ifue = 0x0), _43j === void 0x0 && (_43j = 0x0);var z0gqkf;if (this['url'] == p7vrw['_tMusic']) {
        if (!um6i['_musicAudio']) um6i['_musicAudio'] = um6i['_createSound']();z0gqkf = um6i['_musicAudio'];
      } else z0gqkf = um6i['_createSound']();z0gqkf['src'] = this['url'];var gkfuq = new zgka0q(z0gqkf);return gkfuq['url'] = this['url'], gkfuq['loops'] = _43j, gkfuq['startTime'] = ifue, gkfuq['play'](), p7vrw['addChannel'](gkfuq), gkfuq;
    }, p8wr['dispose'] = function () {
      var em6jd = um6i['_audioCache'][this['url']];em6jd && (em6jd['src'] = '', delete um6i['_audioCache'][this['url']]);
    }, n4hj_(0x0, p8wr, 'duration', function () {
      return this['_sound']['duration'];
    }), um6i['_createSound'] = function () {
      return um6i['_id']++, zfqkg0['window']['wx']['createInnerAudioContext']();
    }, um6i['_musicAudio'] = null, um6i['_id'] = 0x0, um6i['_audioCache'] = {}, um6i['_null'] = undefined, um6i;
  }(wv$r1),
      zgka0q = function (edhm6) {
    function vw7y(uit) {
      this['_audio'] = null, this['_onEnd'] = null, vw7y['__super']['call'](this), this['_audio'] = uit, this['_onEnd'] = wr7$['bind'](this['__onEnd'], this), uit['onEnded'](this['_onEnd']);
    }zba80x(vw7y, 'laya.wx.mini.MiniSoundChannel', edhm6);var r81wbx = vw7y['prototype'];return r81wbx['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (n_6h4j['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r81wbx['__onNull'] = function () {}, r81wbx['play'] = function () {
      this['isStopped'] = ![], p7vrw['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r81wbx['stop'] = function () {
      this['isStopped'] = !![], p7vrw['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (vw7y['_null'] != undefined) this['_audio']['onEnded'](vw7y['_null']);else try {
        this['_audio']['onEnded'](null), vw7y['_null'] = null;
      } catch (r$pw1v) {
        console['warn']('[wxmini] stop:' + r$pw1v), this['_audio']['onEnded'](wr7$['bind'](this['__onNull'], this)), vw7y['_null'] = wr7$['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, r81wbx['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r81wbx['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], p7vrw['addChannel'](this), this['_audio']['play']();
    }, n4hj_(0x0, r81wbx, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), n4hj_(0x0, r81wbx, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), n4hj_(0x0, r81wbx, 'volume', function () {
      return 0x1;
    }, function (x8rw$) {}), vw7y['_null'] = undefined, vw7y;
  }(qfz0gk);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a0x in Laya) {
    var ftgk0 = Laya[a0x];ftgk0 && ftgk0['__isclass'] && (exports[a0x] = ftgk0);
  }
});