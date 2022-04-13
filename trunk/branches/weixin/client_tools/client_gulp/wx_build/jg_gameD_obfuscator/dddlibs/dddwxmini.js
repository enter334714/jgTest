var v = wx.$d;
(function (window, document, meitud) {
  var qk0gz = meitud['un'],
      a8bx0 = meitud['uns'],
      oc9_3 = meitud['static'],
      h64n = meitud['class'],
      qxa = meitud['getset'],
      g0kaqz = meitud['__newvec'],
      ideft = laya['utils']['Browser'],
      hemd6i = laya['events']['Event'],
      a0xzq = laya['events']['EventDispatcher'],
      zb0xa8 = laya['resource']['HTMLImage'],
      _c94n = laya['utils']['Handler'],
      wr$ = laya['display']['Input'],
      az1b8x = laya['net']['Loader'],
      za80x = laya['maths']['Matrix'],
      q0tkf = laya['renders']['Render'],
      $vrw7p = laya['utils']['RunDriver'],
      n_4j6 = laya['media']['Sound'],
      mdu6e = laya['media']['SoundChannel'],
      a8z1x = laya['media']['SoundManager'],
      j4h_6n = laya['display']['Stage'],
      gfqukt = laya['net']['URL'],
      gfku = laya['utils']['Utils'],
      qzba0x = function () {
    function t0fqkg() {}return h64n(t0fqkg, 'laya.wx.mini.MiniAdpter'), t0fqkg['getJson'] = function (dm6ehj) {
      return JSON['parse'](dm6ehj);
    }, t0fqkg['init'] = function (rx8b1, c9_4n3) {
      rx8b1 === void 0x0 && (rx8b1 = ![]), c9_4n3 === void 0x0 && (c9_4n3 = ![]);if (t0fqkg['_inited']) return;t0fqkg['window'] = window;if (t0fqkg['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t0fqkg['_inited'] = !![], t0fqkg['isZiYu'] = c9_4n3, t0fqkg['isPosMsgYu'] = rx8b1, t0fqkg['EnvConfig'] = {}, !t0fqkg['isZiYu'] && ($vr7pw['setNativeFileDir']('/layaairGame'), $vr7pw['existDir']($vr7pw['fileNativeDir'], _c94n['create'](t0fqkg, t0fqkg['onMkdirCallBack']))), t0fqkg['window']['focus'] = function () {}, meitud['getUrlPath'] = function () {}, t0fqkg['window']['logtime'] = function (dtiuem) {}, t0fqkg['window']['alertTimeLog'] = function (jhm6) {}, t0fqkg['window']['resetShareInfo'] = function () {}, t0fqkg['window']['CanvasRenderingContext2D'] = function () {}, t0fqkg['window']['CanvasRenderingContext2D']['prototype'] = t0fqkg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t0fqkg['window']['document']['body']['appendChild'] = function () {}, t0fqkg['EnvConfig']['pixelRatioInt'] = 0x0, $vrw7p['getPixelRatio'] = t0fqkg['pixelRatio'], t0fqkg['_preCreateElement'] = ideft['createElement'], ideft['createElement'] = t0fqkg['createElement'], $vrw7p['createShaderCondition'] = t0fqkg['createShaderCondition'], gfku['parseXMLFromString'] = t0fqkg['parseXMLFromString'], wr$['_createInputElement'] = efudit['_createInputElement'], t0fqkg['EnvConfig']['load'] = az1b8x['prototype']['load'], az1b8x['prototype']['load'] = vr$7p['prototype']['load'], t0fqkg['isZiYu'] && rx8b1 && wx['onMessage'](function (dtufk) {
        dtufk['isLoad'] && ($vr7pw['ziyuFileData'][dtufk['url']] = dtufk['data']);
      });
    }, t0fqkg['onMkdirCallBack'] = function (nj_394, midhe) {
      if (!nj_394) $vr7pw['filesListObj'] = JSON['parse'](midhe['data']);
    }, t0fqkg['pixelRatio'] = function () {
      if (!t0fqkg['EnvConfig']['pixelRatioInt']) try {
        var c32o = wx['getSystemInfoSync']();return t0fqkg['EnvConfig']['pixelRatioInt'] = c32o['pixelRatio'], c32o = c32o, c32o['pixelRatio'];
      } catch (hide6m) {}return t0fqkg['EnvConfig']['pixelRatioInt'];
    }, t0fqkg['createElement'] = function (ftdk) {
      if (ftdk == 'canvas') {
        var duie6;return t0fqkg['idx'] == 0x1 ? t0fqkg['isZiYu'] ? (duie6 = sharedCanvas, duie6['style'] = {}) : duie6 = window['canvas'] : duie6 = window['wx']['createCanvas'](), t0fqkg['idx']++, duie6;
      } else {
        if (ftdk == 'textarea' || ftdk == 'input') return t0fqkg['onCreateInput'](ftdk);else {
          if (ftdk == 'div') {
            var v7pyl = t0fqkg['_preCreateElement'](ftdk);return v7pyl['contains'] = function (c_49n) {
              return null;
            }, v7pyl['removeChild'] = function (gqaz) {}, v7pyl;
          } else return t0fqkg['_preCreateElement'](ftdk);
        }
      }
    }, t0fqkg['onCreateInput'] = function (demi6u) {
      var rwp$7 = t0fqkg['_preCreateElement'](demi6u);return rwp$7['focus'] = efudit['wxinputFocus'], rwp$7['blur'] = efudit['wxinputblur'], rwp$7['style'] = {}, rwp$7['value'] = 0x0, rwp$7['parentElement'] = {}, rwp$7['placeholder'] = {}, rwp$7['type'] = {}, rwp$7['setColor'] = function (m6ehj) {}, rwp$7['setType'] = function (nj439_) {}, rwp$7['setFontFace'] = function (rp81w$) {}, rwp$7['addEventListener'] = function (ufkdi) {}, rwp$7['contains'] = function (co_43) {
        return null;
      }, rwp$7['removeChild'] = function (akz0g) {}, rwp$7;
    }, t0fqkg['createShaderCondition'] = function (zka0q) {
      var kguqft = this,
          henj6m = function () {
        var kf0qz = zka0q;return kguqft[zka0q['replace']('this.', '')];
      };return henj6m;
    }, t0fqkg['EnvConfig'] = null, t0fqkg['window'] = null, t0fqkg['_preCreateElement'] = null, t0fqkg['_inited'] = ![], t0fqkg['wxRequest'] = null, t0fqkg['systemInfo'] = null, t0fqkg['version'] = '0.0.1', t0fqkg['isZiYu'] = ![], t0fqkg['isPosMsgYu'] = ![], t0fqkg['parseXMLFromString'] = function (h4mj6n) {
      var ftguik, kqz0f;h4mj6n = h4mj6n['replace'](/>\s+</g, '><');try {
        ftguik = new window['Parser']['DOMParser']()['parseFromString'](h4mj6n, 'text/xml');
      } catch (qzgf0k) {
        throw '需要引入xml解析库文件';
      }return ftguik;
    }, t0fqkg['idx'] = 0x1, t0fqkg;
  }(),
      iutgfk = function () {
    function gaqkz() {}h64n(gaqkz, 'laya.wx.mini.MiniImage');var jn64h = gaqkz['prototype'];return jn64h['_loadImage'] = function (zba0qg) {
      var nj6m4h = this,
          w8$rp1 = ![];zba0qg['indexOf']('layaNativeDir/') == -0x1 && (w8$rp1 = !![], zba0qg = gfqukt['formatURL'](zba0qg));if (!$vr7pw['getFileInfo'](zba0qg)) {
        if (zba0qg['indexOf']('http://') != -0x1 || zba0qg['indexOf']('https://') != -0x1) $vr7pw['downImg'](zba0qg, new _c94n(gaqkz, gaqkz['onDownImgCallBack'], [zba0qg, nj6m4h]), zba0qg);else gaqkz['onCreateImage'](zba0qg, nj6m4h, !![]);
      } else gaqkz['onCreateImage'](zba0qg, nj6m4h, !w8$rp1);
    }, gaqkz['onDownImgCallBack'] = function (p1$8, g0tqf, etdmu) {
      if (!etdmu) gaqkz['onCreateImage'](p1$8, g0tqf);else g0tqf['onError'](null);
    }, gaqkz['onCreateImage'] = function (a0b8, n9j4, azg) {
      azg === void 0x0 && (azg = ![]);var v$7;if (!azg) {
        var co923 = $vr7pw['getFileInfo'](a0b8),
            abq0x = co923['md5'];v$7 = $vr7pw['getFileNativePath'](abq0x);
      } else v$7 = a0b8;if (n9j4['imgCache'] == null) n9j4['imgCache'] = {};var djeh6m;function tfie() {
        djeh6m['onload'] = null, djeh6m['onerror'] = null, delete n9j4['imgCache'][a0b8];
      };var b8rxa1 = function () {
        tfie(), n9j4['onLoaded'](djeh6m);
      },
          imt = function () {
        tfie(), n9j4['event']('error', 'Load image failed');
      };n9j4['_type'] == 'nativeimage' ? (djeh6m = new ideft['window']['Image'](), djeh6m['crossOrigin'] = '', djeh6m['onload'] = b8rxa1, djeh6m['onerror'] = imt, djeh6m['src'] = v$7, n9j4['imgCache'][a0b8] = djeh6m) : new zb0xa8['create'](v$7, { 'onload': b8rxa1, 'onerror': imt, 'onCreate': function (j6ehm) {
          djeh6m = j6ehm, n9j4['imgCache'][a0b8] = j6ehm;
        } });
    }, gaqkz;
  }(),
      efudit = function () {
    function r1p$wv() {}return h64n(r1p$wv, 'laya.wx.mini.MiniInput'), r1p$wv['_createInputElement'] = function () {
      wr$['_initInput'](wr$['area'] = ideft['createElement']('textarea')), wr$['_initInput'](wr$['input'] = ideft['createElement']('input')), wr$['inputContainer'] = ideft['createElement']('div'), wr$['inputContainer']['style']['position'] = 'absolute', wr$['inputContainer']['style']['zIndex'] = 0x186a0, ideft['container']['appendChild'](wr$['inputContainer']), wr$['inputContainer']['setPos'] = function (c9_3n, _nhj) {
        wr$['inputContainer']['style']['left'] = c9_3n + 'px', wr$['inputContainer']['style']['top'] = _nhj + 'px';
      }, meitud['stage']['on']('resize', null, r1p$wv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (meudi6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), a8z1x['_soundClass'] = kfigu, a8z1x['_musicClass'] = kfigu, window['_videoClass'] = qukg;
    }, r1p$wv['_onStageResize'] = function () {
      var j6h4n = meitud['stage']['_canvasTransform']['identity']();j6h4n['scale'](ideft['width'] / q0tkf['canvas']['width'] / $vrw7p['getPixelRatio'](), ideft['height'] / q0tkf['canvas']['height'] / $vrw7p['getPixelRatio']());
    }, r1p$wv['wxinputFocus'] = function (brw81) {
      var a8b1x = wr$['inputElement']['target'];if (a8b1x && !a8b1x['editable']) return;qzba0x['window']['wx']['offKeyboardConfirm'](), qzba0x['window']['wx']['offKeyboardInput'](), qzba0x['window']['wx']['showKeyboard']({ 'defaultValue': a8b1x['text'], 'maxLength': a8b1x['maxChars'], 'multiple': a8b1x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($yl7) {}, 'fail': function ($y7pvl) {} }), qzba0x['window']['wx']['onKeyboardConfirm'](function (rwv1) {
        var ed6jm = rwv1 ? rwv1['value'] : '';a8b1x['text'] = ed6jm, a8b1x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), qzba0x['window']['wx']['onKeyboardInput'](function ($1x8rw) {
        var b0zqa = $1x8rw ? $1x8rw['value'] : '';if (!a8b1x['multiline']) {
          if (b0zqa['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }a8b1x['text'] = b0zqa, a8b1x['event']('input');
      });
    }, r1p$wv['inputEnter'] = function () {
      wr$['inputElement']['target']['focus'] = ![];
    }, r1p$wv['wxinputblur'] = function () {
      r1p$wv['hideKeyboard']();
    }, r1p$wv['hideKeyboard'] = function () {
      qzba0x['window']['wx']['offKeyboardConfirm'](), qzba0x['window']['wx']['offKeyboardInput'](), qzba0x['window']['wx']['hideKeyboard']({ 'success': function (qtgf) {
          console['log']('隐藏键盘');
        }, 'fail': function (rpw$1) {
          console['log']('隐藏键盘出错:' + (rpw$1 ? rpw$1['errMsg'] : ''));
        } });
    }, r1p$wv;
  }(),
      vr$7p = function () {
    function o2953c() {}h64n(o2953c, 'laya.wx.mini.MiniLoader');var _4jn9 = o2953c['prototype'];return _4jn9['load'] = function (ywv$p7, n49, mtieud, qazbx0, zqgfk0) {
      mtieud === void 0x0 && (mtieud = !![]), zqgfk0 === void 0x0 && (zqgfk0 = ![]);var xw8$1r = this;xw8$1r['_url'] = ywv$p7;if (ywv$p7['indexOf']('data:image') === 0x0) xw8$1r['_type'] = n49 = 'image';else xw8$1r['_type'] = n49 || (n49 = xw8$1r['getTypeFromUrl'](ywv$p7));xw8$1r['_cache'] = mtieud, xw8$1r['_data'] = null;var kftud = 'ascii';if (ywv$p7['indexOf']('.fnt') != -0x1) kftud = 'utf8';else n49 == 'arraybuffer' && (kftud = '');;var euidf = gfku['getFileExtension'](ywv$p7);if (o2953c['_fileTypeArr']['indexOf'](euidf) != -0x1) qzba0x['EnvConfig']['load']['call'](this, ywv$p7, n49, mtieud, qazbx0, zqgfk0);else {
        if (!$vr7pw['getFileInfo'](ywv$p7)) {
          if (ywv$p7['indexOf']('layaNativeDir/') != -0x1) {
            if (qzba0x['isZiYu']) {
              var mieu6 = $vr7pw['ziyuFileData'][ywv$p7];xw8$1r['onLoaded'](mieu6);return;
            } else {
              cosnole['log']('read read'), $vr7pw['read'](ywv$p7, kftud, new _c94n(o2953c, o2953c['onReadNativeCallBack'], [kftud, ywv$p7, n49, mtieud, qazbx0, zqgfk0, xw8$1r]));return;
            }
          }if (gfqukt['rootPath'] == '') var dehi6m = ywv$p7;else dehi6m = ywv$p7['split'](gfqukt['rootPath'])[0x0];ywv$p7['indexOf']('http://') != -0x1 || ywv$p7['indexOf']('https://') != -0x1 ? qzba0x['EnvConfig']['load']['call'](xw8$1r, ywv$p7, n49, mtieud, qazbx0, zqgfk0) : $vr7pw['readFile'](dehi6m, kftud, new _c94n(o2953c, o2953c['onReadNativeCallBack'], [kftud, ywv$p7, n49, mtieud, qazbx0, zqgfk0, xw8$1r]), ywv$p7);
        } else qzba0x['EnvConfig']['load']['call'](this, ywv$p7, n49, mtieud, qazbx0, zqgfk0);
      }
    }, _4jn9['resMgrLoad'] = function (jeh6n, v7w$pr, kgufti, za0qx, bax8, c395, zx8a1b) {
      kgufti === void 0x0 && (kgufti = 0x0), za0qx === void 0x0 && (za0qx = ![]), bax8 === void 0x0 && (bax8 = ![]), c395 === void 0x0 && (c395 = 0x0), zx8a1b === void 0x0 && (zx8a1b = 0x3), jeh6n['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jeh6n), qzba0x['EnvConfig']['resMgrLoad'](jeh6n, (o_43, gftq0k, pwyv$7) => {
        o2953c['prototype']['resMgrLoadCallBack'](o_43, gftq0k, pwyv$7, v7w$pr);
      }, kgufti, za0qx, bax8, c395, zx8a1b);
    }, _4jn9['resMgrLoadCallBack'] = function (hjm6, aqx0b, gqt0kf, nmj4h) {
      console['log']('buff:::', hjm6, gqt0kf, $vr7pw['fileNativeDir'] + '///' + $vr7pw['fileListName']), nmj4h(hjm6, aqx0b, gqt0kf);
    }, _4jn9['clearRes'] = function (tqugkf, n_4jh9) {
      n_4jh9 === void 0x0 && (n_4jh9 = ![]);var d6mihe = this;d6mihe['clearRes'](tqugkf, n_4jh9);var $ywp7 = $vr7pw['getFileInfo'](tqugkf);if ($ywp7 && (tqugkf['indexOf']('http://') != -0x1 || tqugkf['indexOf']('https://') != -0x1)) {
        var bgza0q = $ywp7['md5'],
            tqufgk = $vr7pw['getFileNativePath'](bgza0q);$vr7pw['remove'](tqufgk);
      }
    }, o2953c['onReadNativeCallBack'] = function (iuted, ejmd6, deftu, eufdi, nhmej6, a8x0, w8r1x, a8xr1, $w8r1p) {
      eufdi === void 0x0 && (eufdi = !![]), a8x0 === void 0x0 && (a8x0 = ![]), a8xr1 === void 0x0 && (a8xr1 = 0x0);if (!a8xr1) {
        var _3co59;if (deftu == 'json' || deftu == 'atlas') _3co59 = qzba0x['getJson']($w8r1p['data']);else deftu == 'xml' ? _3co59 = gfku['parseXMLFromString']($w8r1p['data']) : _3co59 = $w8r1p['data'];w8r1x['onLoaded'](_3co59), !qzba0x['isZiYu'] && qzba0x['isPosMsgYu'] && deftu != 'arraybuffer' && wx['postMessage']({ 'url': ejmd6, 'data': _3co59, 'isLoad': !![] });
      } else a8xr1 == 0x1 && qzba0x['EnvConfig']['load']['call'](w8r1x, ejmd6, deftu, eufdi, nhmej6, a8x0);
    }, oc9_3(o2953c, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), o2953c;
  }(),
      $vr7pw = function (z0fg) {
    function n9jh_() {
      n9jh_['__super']['call'](this);;
    }return h64n(n9jh_, 'laya.wx.mini.MiniFileMgr', z0fg), n9jh_['isLoadFile'] = function (mn64h) {
      return n9jh_['_fileTypeArr']['indexOf'](mn64h) != -0x1 ? !![] : ![];
    }, n9jh_['getFileInfo'] = function (edj) {
      var dme6ih = edj['split']('?')[0x0],
          h6dje = n9jh_['filesListObj'][dme6ih];if (h6dje == null) return null;else return h6dje;return null;
    }, n9jh_['onFileUpdate'] = function (r1ba8, fetui) {
      var vl7$p = r1ba8['split']('/'),
          kugq = vl7$p[vl7$p['length'] - 0x1],
          guf = n9jh_['getFileInfo'](fetui);if (guf == null) n9jh_['onSaveFile'](fetui, kugq);else {
        if (guf['readyUrl'] != fetui) n9jh_['remove'](kugq, fetui);
      }
    }, n9jh_['exits'] = function (utqfkg, p$1r) {
      var o395c = n9jh_['getFileNativePath'](utqfkg);n9jh_['fs']['getFileInfo']({ 'filePath': o395c, 'success': function (qaz0b) {
          p$1r != null && p$1r['runWith']([0x0, qaz0b]);
        }, 'fail': function (vy$l7p) {
          p$1r != null && p$1r['runWith']([0x1, vy$l7p]);
        } });
    }, n9jh_['read'] = function (n_j4, wv$p7r, ufq, feudi) {
      wv$p7r === void 0x0 && (wv$p7r = 'ascill'), feudi === void 0x0 && (feudi = '');var kfq0z;feudi != '' ? kfq0z = n9jh_['getFileNativePath'](n_j4) : kfq0z = n_j4, n9jh_['fs']['readFile']({ 'filePath': kfq0z, 'encoding': wv$p7r, 'success': function (d6jmhe) {
          ufq != null && ufq['runWith']([0x0, d6jmhe]);
        }, 'fail': function (c_o3) {
          if (c_o3 && feudi != '') n9jh_['down'](feudi, wv$p7r, ufq, feudi);else ufq != null && ufq['runWith']([0x1]);
        } });
    }, n9jh_['readNativeFile'] = function (qk0za, utgqk) {
      n9jh_['fs']['readFile']({ 'filePath': qk0za, 'encoding': '', 'success': function (efditu) {
          utgqk != null && utgqk['runWith']([0x0]);
        }, 'fail': function ($rp18) {
          utgqk != null && utgqk['runWith']([0x1]);
        } });
    }, n9jh_['down'] = function (vpw$1r, gfuqtk, gufikt, aq0kzg) {
      gfuqtk === void 0x0 && (gfuqtk = 'ascill'), aq0kzg === void 0x0 && (aq0kzg = '');var xbz18 = n9jh_['getFileNativePath'](aq0kzg),
          _n3j = n9jh_['wxdown']({ 'url': vpw$1r, 'filePath': xbz18, 'success': function (jn46) {
          if (jn46['statusCode'] === 0xc8) n9jh_['readFile'](jn46['filePath'], gfuqtk, gufikt, aq0kzg);
        }, 'fail': function (e6im) {
          gufikt != null && gufikt['runWith']([0x1, e6im]);
        } });_n3j['onProgressUpdate'](function (w8bx1) {
        gufikt != null && gufikt['runWith']([0x2, w8bx1['progress']]);
      });
    }, n9jh_['readFile'] = function (diutef, t0fgkq, imtde, _9nj) {
      t0fgkq === void 0x0 && (t0fgkq = 'ascill'), _9nj === void 0x0 && (_9nj = ''), n9jh_['fs']['readFile']({ 'filePath': diutef, 'encoding': t0fgkq, 'success': function (z0kgqf) {
          if (diutef['indexOf']('http://') != -0x1 || diutef['indexOf']('https://') != -0x1) n9jh_['onFileUpdate'](diutef, _9nj);imtde != null && imtde['runWith']([0x0, z0kgqf]);
        }, 'fail': function (w$r7vp) {
          if (w$r7vp) imtde != null && imtde['runWith']([0x1, w$r7vp]);
        } });
    }, n9jh_['downImg'] = function (gkqf0z, pvw$1, mihde6) {
      mihde6 === void 0x0 && (mihde6 = '');var abx81z = n9jh_['wxdown']({ 'url': gkqf0z, 'success': function (_c) {
          _c['statusCode'] === 0xc8 && n9jh_['copyFile'](_c['tempFilePath'], mihde6, pvw$1);
        }, 'fail': function (mie6hd) {
          pvw$1 != null && pvw$1['runWith']([0x1, mie6hd]);
        } });
    }, n9jh_['copyFile'] = function (kfgtqu, v$w7y, _o4c9) {
      var wvpr$7 = kfgtqu['split']('/'),
          uetdf = wvpr$7[wvpr$7['length'] - 0x1],
          _9j3n = v$w7y['split']('?')[0x0],
          c953 = n9jh_['getFileInfo'](v$w7y),
          zx0qba = n9jh_['getFileNativePath'](uetdf);n9jh_['fs']['copyFile']({ 'srcPath': kfgtqu, 'destPath': zx0qba, 'success': function (qgz) {
          if (!c953) n9jh_['onSaveFile'](v$w7y, uetdf), _o4c9 != null && _o4c9['runWith']([0x0]);else {
            if (c953['readyUrl'] != v$w7y) n9jh_['remove'](uetdf, v$w7y, _o4c9);
          }
        }, 'fail': function (tqfk0) {
          _o4c9 != null && _o4c9['runWith']([0x1, tqfk0]);
        } });
    }, n9jh_['getFileNativePath'] = function (p$rvw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p$rvw;
    }, n9jh_['remove'] = function (kftdiu, g0kqtf, j9_4h) {
      g0kqtf === void 0x0 && (g0kqtf = '');var c532 = n9jh_['getFileInfo'](g0kqtf),
          prw81 = n9jh_['getFileNativePath'](c532['md5']);meitud['loader']['clearRes'](c532['readyUrl']), n9jh_['fs']['unlink']({ 'filePath': prw81, 'success': function (u6mied) {
          if (g0kqtf != '') n9jh_['onSaveFile'](g0kqtf, kftdiu);j9_4h != null && j9_4h['runWith']([0x0]);
        }, 'fail': function (_3c94n) {} });
    }, n9jh_['onSaveFile'] = function (_hnj64, m6hej) {
      var gtkuqf = _hnj64['split']('?')[0x0];n9jh_['filesListObj'][gtkuqf] = { 'md5': m6hej, 'readyUrl': _hnj64 }, n9jh_['fs']['writeFile']({ 'filePath': n9jh_['fileNativeDir'] + '/' + n9jh_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n9jh_['filesListObj']), 'success': function (qkftgu) {
          console['log']('写入测试测试成功：', qkftgu);
        }, 'fail': function (miu6d) {
          console['log']('写入测试测试失败：', miu6d);
        } });
    }, n9jh_['existDir'] = function (fqgtuk, m6ej) {
      n9jh_['fs']['mkdir']({ 'dirPath': fqgtuk, 'success': function (dhm6j) {
          m6ej != null && m6ej['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (edhjm6) {
          if (edhjm6['errMsg']['indexOf']('file already exists') != -0x1) n9jh_['readSync'](n9jh_['fileListName'], 'utf8', m6ej);else m6ej != null && m6ej['runWith']([0x1, edhjm6]);
        } });
    }, n9jh_['readSync'] = function (deh6mi, zkg0a, $w1rx, i6ude) {
      zkg0a === void 0x0 && (zkg0a = 'ascill'), i6ude === void 0x0 && (i6ude = '');var hiedm = n9jh_['getFileNativePath'](deh6mi),
          gktfqu;try {
        gktfqu = n9jh_['fs']['readFileSync'](hiedm), $w1rx != null && $w1rx['runWith']([0x0, { 'data': gktfqu }]);
      } catch (prwv$7) {
        $w1rx != null && $w1rx['runWith']([0x1]);
      }
    }, n9jh_['readCache'] = function () {}, n9jh_['writeCache'] = function (_cn) {
      var hjmne = readyUrl['split']('?')[0x0];n9jh_['filesListObj'][hjmne] = { 'md5': md5Name, 'readyUrl': readyUrl }, n9jh_['fs']['writeFile']({ 'filePath': n9jh_['fileNativeDir'] + '/' + n9jh_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n9jh_['filesListObj']), 'success': function (hjemn6) {}, 'fail': function (m6duei) {} });
    }, n9jh_['setNativeFileDir'] = function (d6eum) {
      n9jh_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d6eum;
    }, n9jh_['filesListObj'] = {}, n9jh_['fileNativeDir'] = null, n9jh_['fileListName'] = 'layaairfiles.txt', n9jh_['ziyuFileData'] = {}, oc9_3(n9jh_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n9jh_;
  }(a0xzq),
      kfigu = function (e6dmui) {
    function b8x() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], b8x['__super']['call'](this), this['_sound'] = b8x['_createSound'](), this['_chanell'] = new zgqka(this['_sound']);
    }h64n(b8x, 'laya.wx.mini.MiniSound', e6dmui);var defuit = b8x['prototype'];return defuit['load'] = function (nmej) {
      var tkuq = this;nmej = gfqukt['formatURL'](nmej), this['url'] = nmej;if (b8x['_audioCache'][nmej]) {
        this['event']('complete');return;
      }function xqzab() {
        if (b8x['_null'] != undefined) tkuq['_sound']['onCanplay'](b8x['_null']), tkuq['_sound']['onError'](b8x['_null']);else try {
          tkuq['_sound']['onCanplay'](null), tkuq['_sound']['onError'](null), b8x['_null'] = null;
        } catch (uftkid) {
          console['warn']('[wxmini] _clearSound:' + uftkid), tkuq['_sound']['onCanplay'](ktgfqu), tkuq['_sound']['onError'](ktgfqu), b8x['_null'] = ktgfqu;
        }
      }function rwbx81() {
        q0kzf['loaded'] = !![], q0kzf['event']('complete'), b8x['_audioCache'][q0kzf['url']] = q0kzf;
      }function uid(fqgktu) {
        console['error']('errCode=' + fqgktu['errCode'] + '  errMsg=' + fqgktu['errMsg']), q0kzf['event']('error');
      }function ktgfqu() {}this['_sound']['onCanplay'](rwbx81), this['_sound']['onError'](uid), this['_sound']['src'] = nmej;var q0kzf = this;
    }, defuit['play'] = function (_o935, $1p8) {
      _o935 === void 0x0 && (_o935 = 0x0), $1p8 === void 0x0 && ($1p8 = 0x0);var kiduf, cn439;if (this['url'] == a8z1x['_tMusic']) {
        if (!b8x['_musicAudio']) b8x['_musicAudio'] = this['_sound'];kiduf = b8x['_musicAudio'], cn439 = this['_chanell'];
      } else kiduf = this['_sound'], cn439 = this['_chanell'];return kiduf['src'] = this['url'], kiduf['startTime'] = 0x0, cn439['isStopped'] && (cn439['url'] = this['url'], cn439['loops'] = $1p8, cn439['startTime'] = _o935, cn439['play'](), a8z1x['addChannel'](cn439)), cn439;
    }, defuit['dispose'] = function () {
      var r8$p = b8x['_audioCache'][this['url']];r8$p && (r8$p['src'] = '', delete b8x['_audioCache'][this['url']]);
    }, qxa(0x0, defuit, 'duration', function () {
      return this['_sound']['duration'];
    }), b8x['_createSound'] = function () {
      b8x['_id']++;var q0kgtf = qzba0x['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return q0kgtf;
    }, b8x['_musicAudio'] = null, b8x['_id'] = 0x0, b8x['_audioCache'] = {}, b8x['_null'] = undefined, b8x;
  }(a0xzq),
      zgqka = function (h6dmj) {
    function ej6nm(pr$1w) {
      this['_audio'] = null, this['_onEnd'] = null, ej6nm['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = pr$1w, this['_onEnd'] = gfku['bind'](this['__onEnd'], this), pr$1w['onEnded'](this['_onEnd']);
    }h64n(ej6nm, 'laya.wx.mini.MiniSoundChannel', h6dmj);var r$7p = ej6nm['prototype'];return r$7p['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (meitud['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r$7p['__onNull'] = function () {}, r$7p['play'] = function () {
      this['isStopped'] = ![], a8z1x['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r$7p['stop'] = function () {
      this['isStopped'] = !![], a8z1x['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, r$7p['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r$7p['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], a8z1x['addChannel'](this), this['_audio']['play']();
    }, qxa(0x0, r$7p, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qxa(0x0, r$7p, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qxa(0x0, r$7p, 'volume', function () {
      return 0x1;
    }, function (vpr1$w) {}), ej6nm['_null'] = undefined, ej6nm;
  }(mdu6e),
      qukg = function () {
    function timeu() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qzba0x['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }h64n(timeu, 'laya.wx.mini.MiniVideo');var gfkitu = timeu['prototype'];return gfkitu['on'] = function (hnme, cn94_, jmhe6) {
      if (hnme == 'loadedmetadata') this['onPlayFunc'] = jmhe6['bind'](cn94_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else hnme == 'ended' && (this['onEndedFunC'] = jmhe6['bind'](cn94_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, gfkitu['onTimeUpdateFunc'] = function (yp$w7v) {
      this['position'] = yp$w7v['position'], this['_duration'] = yp$w7v['duration'];
    }, gfkitu['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, gfkitu['onended'] = function (r1xa8b, vr7) {
      this['onEndedFunC'] = vr7['bind'](r1xa8b), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, gfkitu['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, gfkitu['off'] = function (kzf0g, e6hmj, fgkq0) {
      if (kzf0g == 'loadedmetadata') this['onPlayFunc'] = fgkq0['bind'](e6hmj), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else kzf0g == 'ended' && (this['onEndedFunC'] = fgkq0['bind'](e6hmj), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, gfkitu['load'] = function (ehmnj) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ehmnj;
    }, gfkitu['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, gfkitu['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, gfkitu['size'] = function (c43_o, id6mu) {
      if (!this['videoElement']) return;this['videoElement']['width'] = c43_o, this['videoElement']['height'] = id6mu;
    }, gfkitu['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, gfkitu['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, qxa(0x0, gfkitu, 'duration', function () {
      return this['_duration'];
    }), qxa(0x0, gfkitu, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (fgutq) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = fgutq;
    }), qxa(0x0, gfkitu, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), qxa(0x0, gfkitu, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), qxa(0x0, gfkitu, 'ended', function () {
      return this['videoend'];
    }), qxa(0x0, gfkitu, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (mne6) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = mne6;
    }), qxa(0x0, gfkitu, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (duetmi) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = duetmi;
    }), qxa(0x0, gfkitu, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (pvrw1) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = pvrw1;
    }), qxa(0x0, gfkitu, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), qxa(0x0, gfkitu, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (rv7pw) {
      if (!this['videoElement']) return;this['videoElement']['x'] = rv7pw;
    }), qxa(0x0, gfkitu, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (kfqtgu) {
      if (!this['videoElement']) return;this['videoElement']['y'] = kfqtgu;
    }), qxa(0x0, gfkitu, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), qxa(0x0, gfkitu, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (z8a1xb) {
      if (!this['videoElement']) return;this['videoElement']['src'] = z8a1xb;
    }), qxa(0x0, gfkitu, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (qab0z) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = qab0z;
    }), qxa(0x0, gfkitu, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (diufte) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = diufte;
    }), timeu;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _c3 in Laya) {
    var mduite = Laya[_c3];mduite && mduite['__isclass'] && (exports[_c3] = mduite);
  }
});