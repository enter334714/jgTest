var o = wx.$U;
(function (window, document, mhqjoi) {
  var mjioq = mhqjoi['un'],
      sa_v = mhqjoi['uns'],
      rk6a_c = mhqjoi['static'],
      nvse$_ = mhqjoi['class'],
      _nvsk$ = mhqjoi['getset'],
      e_n$s = mhqjoi['__newvec'],
      z9g7wd = laya['utils']['Browser'],
      nv_ak6 = laya['events']['Event'],
      ksn_a = laya['events']['EventDispatcher'],
      vcka_ = laya['resource']['HTMLImage'],
      ps = laya['utils']['Handler'],
      tg5d9z = laya['display']['Input'],
      wl7gxq = laya['net']['Loader'],
      xgl97 = laya['maths']['Matrix'],
      wlg7xq = laya['renders']['Render'],
      avk_ = laya['utils']['RunDriver'],
      up$ = laya['media']['Sound'],
      _k$sn = laya['media']['SoundChannel'],
      r0c81 = laya['media']['SoundManager'],
      nva_k6 = laya['display']['Stage'],
      sneu = laya['net']['URL'],
      es$uv = laya['utils']['Utils'],
      vskn$_ = function () {
    function qwo7l() {}return nvse$_(qwo7l, 'laya.wx.mini.MiniAdpter'), qwo7l['getJson'] = function (cbr810) {
      return JSON['parse'](cbr810);
    }, qwo7l['init'] = function (zx7g9, bcr8) {
      zx7g9 === void 0x0 && (zx7g9 = ![]), bcr8 === void 0x0 && (bcr8 = ![]);if (qwo7l['_inited']) return;qwo7l['window'] = window;if (qwo7l['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qwo7l['_inited'] = !![], qwo7l['isZiYu'] = bcr8, qwo7l['isPosMsgYu'] = zx7g9, qwo7l['EnvConfig'] = {}, !qwo7l['isZiYu'] && (su$nf['setNativeFileDir']('/layaairGame'), su$nf['existDir'](su$nf['fileNativeDir'], ps['create'](qwo7l, qwo7l['onMkdirCallBack']))), qwo7l['window']['focus'] = function () {}, mhqjoi['getUrlPath'] = function () {}, qwo7l['window']['logtime'] = function (milxqo) {}, qwo7l['window']['alertTimeLog'] = function (_kac) {}, qwo7l['window']['resetShareInfo'] = function () {}, qwo7l['window']['CanvasRenderingContext2D'] = function () {}, qwo7l['window']['CanvasRenderingContext2D']['prototype'] = qwo7l['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qwo7l['window']['document']['body']['appendChild'] = function () {}, qwo7l['EnvConfig']['pixelRatioInt'] = 0x0, avk_['getPixelRatio'] = qwo7l['pixelRatio'], qwo7l['_preCreateElement'] = z9g7wd['createElement'], z9g7wd['createElement'] = qwo7l['createElement'], avk_['createShaderCondition'] = qwo7l['createShaderCondition'], es$uv['parseXMLFromString'] = qwo7l['parseXMLFromString'], tg5d9z['_createInputElement'] = vkca6_['_createInputElement'], qwo7l['EnvConfig']['load'] = wl7gxq['prototype']['load'], wl7gxq['prototype']['load'] = cva6['prototype']['load'], qwo7l['isZiYu'] && zx7g9 && wx['onMessage'](function (pf4jh) {
        pf4jh['isLoad'] && (su$nf['ziyuFileData'][pf4jh['url']] = pf4jh['data']);
      });
    }, qwo7l['onMkdirCallBack'] = function (omh, mohij) {
      if (!omh) su$nf['filesListObj'] = JSON['parse'](mohij['data']);
    }, qwo7l['pixelRatio'] = function () {
      if (!qwo7l['EnvConfig']['pixelRatioInt']) try {
        var pj43h = wx['getSystemInfoSync']();return qwo7l['EnvConfig']['pixelRatioInt'] = pj43h['pixelRatio'], pj43h = pj43h, pj43h['pixelRatio'];
      } catch (wgq7l) {}return qwo7l['EnvConfig']['pixelRatioInt'];
    }, qwo7l['createElement'] = function (oqlixm) {
      if (oqlixm == 'canvas') {
        var v_k$ns;return qwo7l['idx'] == 0x1 ? qwo7l['isZiYu'] ? (v_k$ns = sharedCanvas, v_k$ns['style'] = {}) : v_k$ns = window['canvas'] : v_k$ns = window['wx']['createCanvas'](), qwo7l['idx']++, v_k$ns;
      } else {
        if (oqlixm == 'textarea' || oqlixm == 'input') return qwo7l['onCreateInput'](oqlixm);else {
          if (oqlixm == 'div') {
            var oh3im = qwo7l['_preCreateElement'](oqlixm);return oh3im['contains'] = function (d9zgw) {
              return null;
            }, oh3im['removeChild'] = function (f3ep4) {}, oh3im;
          } else return qwo7l['_preCreateElement'](oqlixm);
        }
      }
    }, qwo7l['onCreateInput'] = function (kav6) {
      var up4ef = qwo7l['_preCreateElement'](kav6);return up4ef['focus'] = vkca6_['wxinputFocus'], up4ef['blur'] = vkca6_['wxinputblur'], up4ef['style'] = {}, up4ef['value'] = 0x0, up4ef['parentElement'] = {}, up4ef['placeholder'] = {}, up4ef['type'] = {}, up4ef['setColor'] = function ($enusf) {}, up4ef['setType'] = function (eu$p4f) {}, up4ef['setFontFace'] = function (arc_) {}, up4ef['addEventListener'] = function (ca6k0r) {}, up4ef['contains'] = function (ry08b) {
        return null;
      }, up4ef['removeChild'] = function (z2d5t) {}, up4ef;
    }, qwo7l['createShaderCondition'] = function (dtg9z5) {
      var fp4e$u = this,
          r061c = function () {
        var zw7x9g = dtg9z5;return fp4e$u[dtg9z5['replace']('this.', '')];
      };return r061c;
    }, qwo7l['EnvConfig'] = null, qwo7l['window'] = null, qwo7l['_preCreateElement'] = null, qwo7l['_inited'] = ![], qwo7l['wxRequest'] = null, qwo7l['systemInfo'] = null, qwo7l['version'] = '0.0.1', qwo7l['isZiYu'] = ![], qwo7l['isPosMsgYu'] = ![], qwo7l['parseXMLFromString'] = function (qliomh) {
      var jimh4, ca08;qliomh = qliomh['replace'](/>\s+</g, '><');try {
        jimh4 = new window['Parser']['DOMParser']()['parseFromString'](qliomh, 'text/xml');
      } catch (cark_6) {
        throw '需要引入xml解析库文件';
      }return jimh4;
    }, qwo7l['idx'] = 0x1, qwo7l;
  }(),
      l7gw = function () {
    function xwg7z() {}nvse$_(xwg7z, 'laya.wx.mini.MiniImage');var ckv_a6 = xwg7z['prototype'];return ckv_a6['_loadImage'] = function (iqlxmo) {
      var skn_v$ = this,
          mjhi4 = ![];iqlxmo['indexOf']('layaNativeDir/') == -0x1 && (mjhi4 = !![], iqlxmo = sneu['formatURL'](iqlxmo));if (!su$nf['getFileInfo'](iqlxmo)) {
        if (iqlxmo['indexOf']('http://') != -0x1 || iqlxmo['indexOf']('https://') != -0x1) su$nf['downImg'](iqlxmo, new ps(xwg7z, xwg7z['onDownImgCallBack'], [iqlxmo, skn_v$]), iqlxmo);else xwg7z['onCreateImage'](iqlxmo, skn_v$, !![]);
      } else xwg7z['onCreateImage'](iqlxmo, skn_v$, !mjhi4);
    }, xwg7z['onDownImgCallBack'] = function (pef$u4, xqwlg, qlhoim) {
      if (!qlhoim) xwg7z['onCreateImage'](pef$u4, xqwlg);else xqwlg['onError'](null);
    }, xwg7z['onCreateImage'] = function (upj4f, pusfe, c_v6k) {
      c_v6k === void 0x0 && (c_v6k = ![]);var tgzd;if (!c_v6k) {
        var ohim = su$nf['getFileInfo'](upj4f),
            m3hjio = ohim['md5'];tgzd = su$nf['getFileNativePath'](m3hjio);
      } else tgzd = upj4f;if (pusfe['imgCache'] == null) pusfe['imgCache'] = {};var v_$k;function sfnu() {
        v_$k['onload'] = null, v_$k['onerror'] = null, delete pusfe['imgCache'][upj4f];
      };var hmp = function () {
        sfnu(), pusfe['onLoaded'](v_$k);
      },
          yb81r0 = function () {
        sfnu(), pusfe['event']('error', 'Load image failed');
      };pusfe['_type'] == 'nativeimage' ? (v_$k = new z9g7wd['window']['Image'](), v_$k['crossOrigin'] = '', v_$k['onload'] = hmp, v_$k['onerror'] = yb81r0, v_$k['src'] = tgzd, pusfe['imgCache'][upj4f] = v_$k) : new vcka_['create'](tgzd, { 'onload': hmp, 'onerror': yb81r0, 'onCreate': function (ak0c6r) {
          v_$k = ak0c6r, pusfe['imgCache'][upj4f] = ak0c6r;
        } });
    }, xwg7z;
  }(),
      vkca6_ = function () {
    function r60kac() {}return nvse$_(r60kac, 'laya.wx.mini.MiniInput'), r60kac['_createInputElement'] = function () {
      tg5d9z['_initInput'](tg5d9z['area'] = z9g7wd['createElement']('textarea')), tg5d9z['_initInput'](tg5d9z['input'] = z9g7wd['createElement']('input')), tg5d9z['inputContainer'] = z9g7wd['createElement']('div'), tg5d9z['inputContainer']['style']['position'] = 'absolute', tg5d9z['inputContainer']['style']['zIndex'] = 0x186a0, z9g7wd['container']['appendChild'](tg5d9z['inputContainer']), tg5d9z['inputContainer']['setPos'] = function (ar608c, r18yb0) {
        tg5d9z['inputContainer']['style']['left'] = ar608c + 'px', tg5d9z['inputContainer']['style']['top'] = r18yb0 + 'px';
      }, mhqjoi['stage']['on']('resize', null, r60kac['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xl7gw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), r0c81['_soundClass'] = omj3i, r0c81['_musicClass'] = omj3i;
    }, r60kac['_onStageResize'] = function () {
      var k6r0ac = mhqjoi['stage']['_canvasTransform']['identity']();k6r0ac['scale'](z9g7wd['width'] / wlg7xq['canvas']['width'] / avk_['getPixelRatio'](), z9g7wd['height'] / wlg7xq['canvas']['height'] / avk_['getPixelRatio']());
    }, r60kac['wxinputFocus'] = function (eunf) {
      var ijomh = tg5d9z['inputElement']['target'];if (ijomh && !ijomh['editable']) return;vskn$_['window']['wx']['offKeyboardConfirm'](), vskn$_['window']['wx']['offKeyboardInput'](), vskn$_['window']['wx']['showKeyboard']({ 'defaultValue': ijomh['text'], 'maxLength': ijomh['maxChars'], 'multiple': ijomh['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (cr6ka) {}, 'fail': function (qlxwg7) {} }), vskn$_['window']['wx']['onKeyboardConfirm'](function (f$sne) {
        var h4f3jp = f$sne ? f$sne['value'] : '';ijomh['text'] = h4f3jp, ijomh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), vskn$_['window']['wx']['onKeyboardInput'](function (aksn) {
        var gw7zd = aksn ? aksn['value'] : '';if (!ijomh['multiline']) {
          if (gw7zd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ijomh['text'] = gw7zd, ijomh['event']('input');
      });
    }, r60kac['inputEnter'] = function () {
      tg5d9z['inputElement']['target']['focus'] = ![];
    }, r60kac['wxinputblur'] = function () {
      r60kac['hideKeyboard']();
    }, r60kac['hideKeyboard'] = function () {
      vskn$_['window']['wx']['offKeyboardConfirm'](), vskn$_['window']['wx']['offKeyboardInput'](), vskn$_['window']['wx']['hideKeyboard']({ 'success': function (wgx97z) {
          console['log']('隐藏键盘');
        }, 'fail': function (_vka6n) {
          console['log']('隐藏键盘出错:' + (_vka6n ? _vka6n['errMsg'] : ''));
        } });
    }, r60kac;
  }(),
      cva6 = function () {
    function nvuse() {}nvse$_(nvuse, 'laya.wx.mini.MiniLoader');var jo3hi = nvuse['prototype'];return jo3hi['load'] = function (oqxml, c86ar, mihol, $nvsu, _akn6v) {
      mihol === void 0x0 && (mihol = !![]), _akn6v === void 0x0 && (_akn6v = ![]);var w9lg7x = this;w9lg7x['_url'] = oqxml;if (oqxml['indexOf']('data:image') === 0x0) w9lg7x['_type'] = c86ar = 'image';else w9lg7x['_type'] = c86ar || (c86ar = w9lg7x['getTypeFromUrl'](oqxml));w9lg7x['_cache'] = mihol, w9lg7x['_data'] = null;var loqxw7 = 'ascii';if (oqxml['indexOf']('.fnt') != -0x1) loqxw7 = 'utf8';else c86ar == 'arraybuffer' && (loqxw7 = '');;var mhoqji = es$uv['getFileExtension'](oqxml);if (nvuse['_fileTypeArr']['indexOf'](mhoqji) != -0x1) vskn$_['EnvConfig']['load']['call'](this, oqxml, c86ar, mihol, $nvsu, _akn6v);else {
        if (!su$nf['getFileInfo'](oqxml)) {
          if (oqxml['indexOf']('layaNativeDir/') != -0x1) {
            if (vskn$_['isZiYu']) {
              var nfs$u = su$nf['ziyuFileData'][oqxml];w9lg7x['onLoaded'](nfs$u);return;
            } else {
              cosnole['log']('read read'), su$nf['read'](oqxml, loqxw7, new ps(nvuse, nvuse['onReadNativeCallBack'], [loqxw7, oqxml, c86ar, mihol, $nvsu, _akn6v, w9lg7x]));return;
            }
          }if (sneu['rootPath'] == '') var moihq = oqxml;else moihq = oqxml['split'](sneu['rootPath'])[0x0];oqxml['indexOf']('http://') != -0x1 || oqxml['indexOf']('https://') != -0x1 ? vskn$_['EnvConfig']['load']['call'](w9lg7x, oqxml, c86ar, mihol, $nvsu, _akn6v) : su$nf['readFile'](moihq, loqxw7, new ps(nvuse, nvuse['onReadNativeCallBack'], [loqxw7, oqxml, c86ar, mihol, $nvsu, _akn6v, w9lg7x]), oqxml);
        } else vskn$_['EnvConfig']['load']['call'](this, oqxml, c86ar, mihol, $nvsu, _akn6v);
      }
    }, jo3hi['resMgrLoad'] = function (qgx7wl, $eusp, seun$v, jf43h, kna, en$su, hj43pf) {
      seun$v === void 0x0 && (seun$v = 0x0), jf43h === void 0x0 && (jf43h = ![]), kna === void 0x0 && (kna = ![]), en$su === void 0x0 && (en$su = 0x0), hj43pf === void 0x0 && (hj43pf = 0x3), qgx7wl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', qgx7wl), vskn$_['EnvConfig']['resMgrLoad'](qgx7wl, (esu$p, nva, b10y8) => {
        nvuse['prototype']['resMgrLoadCallBack'](esu$p, nva, b10y8, $eusp);
      }, seun$v, jf43h, kna, en$su, hj43pf);
    }, jo3hi['resMgrLoadCallBack'] = function (nvsk_a, v_ask, n$esf, cr108) {
      console['log']('buff:::', nvsk_a, n$esf, su$nf['fileNativeDir'] + '///' + su$nf['fileListName']), cr108(nvsk_a, v_ask, n$esf);
    }, jo3hi['clearRes'] = function (zw9g7d, _sanvk) {
      _sanvk === void 0x0 && (_sanvk = ![]);var $fep4 = this;$fep4['clearRes'](zw9g7d, _sanvk);var $4up = su$nf['getFileInfo'](zw9g7d);if ($4up && (zw9g7d['indexOf']('http://') != -0x1 || zw9g7d['indexOf']('https://') != -0x1)) {
        var x7i = $4up['md5'],
            r8106c = su$nf['getFileNativePath'](x7i);su$nf['remove'](r8106c);
      }
    }, nvuse['onReadNativeCallBack'] = function (up4$f, tz2d95, cr1b08, kavs_, c8r0a6, t5d9zg, ybr018, qihm, w9x7gz) {
      kavs_ === void 0x0 && (kavs_ = !![]), t5d9zg === void 0x0 && (t5d9zg = ![]), qihm === void 0x0 && (qihm = 0x0);if (!qihm) {
        var r0c;if (cr1b08 == 'json' || cr1b08 == 'atlas') r0c = vskn$_['getJson'](w9x7gz['data']);else cr1b08 == 'xml' ? r0c = es$uv['parseXMLFromString'](w9x7gz['data']) : r0c = w9x7gz['data'];ybr018['onLoaded'](r0c), !vskn$_['isZiYu'] && vskn$_['isPosMsgYu'] && cr1b08 != 'arraybuffer' && wx['postMessage']({ 'url': tz2d95, 'data': r0c, 'isLoad': !![] });
      } else qihm == 0x1 && vskn$_['EnvConfig']['load']['call'](ybr018, tz2d95, cr1b08, kavs_, c8r0a6, t5d9zg);
    }, rk6a_c(nvuse, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nvuse;
  }(),
      su$nf = function (s$nve) {
    function vk_nas() {
      vk_nas['__super']['call'](this);;
    }return nvse$_(vk_nas, 'laya.wx.mini.MiniFileMgr', s$nve), vk_nas['isLoadFile'] = function (mh43ji) {
      return vk_nas['_fileTypeArr']['indexOf'](mh43ji) != -0x1 ? !![] : ![];
    }, vk_nas['getFileInfo'] = function (him) {
      var wo7qxl = him['split']('?')[0x0],
          av_6n = vk_nas['filesListObj'][wo7qxl];if (av_6n == null) return null;else return av_6n;return null;
    }, vk_nas['onFileUpdate'] = function (skav, vc_6k) {
      var himj3o = skav['split']('/'),
          sn_e$ = himj3o[himj3o['length'] - 0x1],
          br81y = vk_nas['getFileInfo'](vc_6k);if (br81y == null) vk_nas['onSaveFile'](vc_6k, sn_e$);else {
        if (br81y['readyUrl'] != vc_6k) vk_nas['remove'](sn_e$, vc_6k);
      }
    }, vk_nas['exits'] = function (i3mjho, r06ak) {
      var hqjm = vk_nas['getFileNativePath'](i3mjho);vk_nas['fs']['getFileInfo']({ 'filePath': hqjm, 'success': function (xl7ow) {
          r06ak != null && r06ak['runWith']([0x0, xl7ow]);
        }, 'fail': function (imlhqo) {
          r06ak != null && r06ak['runWith']([0x1, imlhqo]);
        } });
    }, vk_nas['read'] = function (ojhmi, ixqom, kan6v_, y081rb) {
      ixqom === void 0x0 && (ixqom = 'ascill'), y081rb === void 0x0 && (y081rb = '');var eusfp$;y081rb != '' ? eusfp$ = vk_nas['getFileNativePath'](ojhmi) : eusfp$ = ojhmi, vk_nas['fs']['readFile']({ 'filePath': eusfp$, 'encoding': ixqom, 'success': function (xlqi7) {
          kan6v_ != null && kan6v_['runWith']([0x0, xlqi7]);
        }, 'fail': function (_$kvn) {
          if (_$kvn && y081rb != '') vk_nas['down'](y081rb, ixqom, kan6v_, y081rb);else kan6v_ != null && kan6v_['runWith']([0x1]);
        } });
    }, vk_nas['readNativeFile'] = function (dg5wz9, h3mjp) {
      vk_nas['fs']['readFile']({ 'filePath': dg5wz9, 'encoding': '', 'success': function (h3ojim) {
          h3mjp != null && h3mjp['runWith']([0x0]);
        }, 'fail': function (glqxw7) {
          h3mjp != null && h3mjp['runWith']([0x1]);
        } });
    }, vk_nas['down'] = function (pf43ue, $usenv, mph4j3, ql7xw) {
      $usenv === void 0x0 && ($usenv = 'ascill'), ql7xw === void 0x0 && (ql7xw = '');var puef34 = vk_nas['getFileNativePath'](ql7xw),
          suf$en = vk_nas['wxdown']({ 'url': pf43ue, 'filePath': puef34, 'success': function (r160c) {
          if (r160c['statusCode'] === 0xc8) vk_nas['readFile'](r160c['filePath'], $usenv, mph4j3, ql7xw);
        }, 'fail': function (a0rck) {
          mph4j3 != null && mph4j3['runWith']([0x1, a0rck]);
        } });suf$en['onProgressUpdate'](function ($upesf) {
        mph4j3 != null && mph4j3['runWith']([0x2, $upesf['progress']]);
      });
    }, vk_nas['readFile'] = function (z7g9w, _nv6a, lwg9x, rka_c6) {
      _nv6a === void 0x0 && (_nv6a = 'ascill'), rka_c6 === void 0x0 && (rka_c6 = ''), vk_nas['fs']['readFile']({ 'filePath': z7g9w, 'encoding': _nv6a, 'success': function (c1r8b0) {
          if (z7g9w['indexOf']('http://') != -0x1 || z7g9w['indexOf']('https://') != -0x1) vk_nas['onFileUpdate'](z7g9w, rka_c6);lwg9x != null && lwg9x['runWith']([0x0, c1r8b0]);
        }, 'fail': function (xgzw7) {
          if (xgzw7) lwg9x != null && lwg9x['runWith']([0x1, xgzw7]);
        } });
    }, vk_nas['downImg'] = function (crka0, ank6v, ilox7q) {
      ilox7q === void 0x0 && (ilox7q = '');var qlim = vk_nas['wxdown']({ 'url': crka0, 'success': function (nsf$) {
          nsf$['statusCode'] === 0xc8 && vk_nas['copyFile'](nsf$['tempFilePath'], ilox7q, ank6v);
        }, 'fail': function (c608ar) {
          ank6v != null && ank6v['runWith']([0x1, c608ar]);
        } });
    }, vk_nas['copyFile'] = function (dzt9, ves_, j4hm3i) {
      var w7qgxl = dzt9['split']('/'),
          pfs$eu = w7qgxl[w7qgxl['length'] - 0x1],
          nusev$ = ves_['split']('?')[0x0],
          z7wg9 = vk_nas['getFileInfo'](ves_),
          ak_vs = vk_nas['getFileNativePath'](pfs$eu);vk_nas['fs']['copyFile']({ 'srcPath': dzt9, 'destPath': ak_vs, 'success': function (m3j4i) {
          if (!z7wg9) vk_nas['onSaveFile'](ves_, pfs$eu), j4hm3i != null && j4hm3i['runWith']([0x0]);else {
            if (z7wg9['readyUrl'] != ves_) vk_nas['remove'](pfs$eu, ves_, j4hm3i);
          }
        }, 'fail': function (c1b08r) {
          j4hm3i != null && j4hm3i['runWith']([0x1, c1b08r]);
        } });
    }, vk_nas['getFileNativePath'] = function (g5tzd9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g5tzd9;
    }, vk_nas['remove'] = function (lhqmoi, gz9x7w, jhqmoi) {
      gz9x7w === void 0x0 && (gz9x7w = '');var dz52t9 = vk_nas['getFileInfo'](gz9x7w),
          g7dz = vk_nas['getFileNativePath'](dz52t9['md5']);mhqjoi['loader']['clearRes'](dz52t9['readyUrl']), vk_nas['fs']['unlink']({ 'filePath': g7dz, 'success': function (ckra6_) {
          if (gz9x7w != '') vk_nas['onSaveFile'](gz9x7w, lhqmoi);jhqmoi != null && jhqmoi['runWith']([0x0]);
        }, 'fail': function (t2z9d) {} });
    }, vk_nas['onSaveFile'] = function (ps$f, vasnk_) {
      var oqimlh = ps$f['split']('?')[0x0];vk_nas['filesListObj'][oqimlh] = { 'md5': vasnk_, 'readyUrl': ps$f }, vk_nas['fs']['writeFile']({ 'filePath': vk_nas['fileNativeDir'] + '/' + vk_nas['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vk_nas['filesListObj']), 'success': function (qli7x) {
          console['log']('写入测试测试成功：', qli7x);
        }, 'fail': function (k$_vs) {
          console['log']('写入测试测试失败：', k$_vs);
        } });
    }, vk_nas['existDir'] = function (oxwlq, _na6vk) {
      vk_nas['fs']['mkdir']({ 'dirPath': oxwlq, 'success': function (nv$k) {
          _na6vk != null && _na6vk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (z59d2) {
          if (z59d2['errMsg']['indexOf']('file already exists') != -0x1) vk_nas['readSync'](vk_nas['fileListName'], 'utf8', _na6vk);else _na6vk != null && _na6vk['runWith']([0x1, z59d2]);
        } });
    }, vk_nas['readSync'] = function (mi4h3, io, mjp4h, iloqhm) {
      io === void 0x0 && (io = 'ascill'), iloqhm === void 0x0 && (iloqhm = '');var omhiql = vk_nas['getFileNativePath'](mi4h3),
          h3m4i;try {
        h3m4i = vk_nas['fs']['readFileSync'](omhiql), mjp4h != null && mjp4h['runWith']([0x0, { 'data': h3m4i }]);
      } catch (r180c) {
        mjp4h != null && mjp4h['runWith']([0x1]);
      }
    }, vk_nas['readCache'] = function () {}, vk_nas['writeCache'] = function (dz7w9) {
      var lqwo7 = readyUrl['split']('?')[0x0];vk_nas['filesListObj'][lqwo7] = { 'md5': md5Name, 'readyUrl': readyUrl }, vk_nas['fs']['writeFile']({ 'filePath': vk_nas['fileNativeDir'] + '/' + vk_nas['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vk_nas['filesListObj']), 'success': function (fsepu) {}, 'fail': function (w7gz9x) {} });
    }, vk_nas['setNativeFileDir'] = function (ka6r0c) {
      vk_nas['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ka6r0c;
    }, vk_nas['filesListObj'] = {}, vk_nas['fileNativeDir'] = null, vk_nas['fileListName'] = 'layaairfiles.txt', vk_nas['ziyuFileData'] = {}, rk6a_c(vk_nas, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vk_nas;
  }(ksn_a),
      omj3i = function ($s_nkv) {
    function lwq() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lwq['__super']['call'](this), this['_sound'] = lwq['_createSound']();
    }nvse$_(lwq, 'laya.wx.mini.MiniSound', $s_nkv);var z9d7 = lwq['prototype'];return z9d7['load'] = function (xlg7w9) {
      var fj4u = this;xlg7w9 = sneu['formatURL'](xlg7w9), this['url'] = xlg7w9;if (lwq['_audioCache'][xlg7w9]) {
        this['event']('complete');return;
      }function ac6_kr() {
        if (lwq['_null'] != undefined) fj4u['_sound']['onCanplay'](lwq['_null']), fj4u['_sound']['onError'](lwq['_null']);else try {
          fj4u['_sound']['onCanplay'](null), fj4u['_sound']['onError'](null), lwq['_null'] = null;
        } catch (rkca6_) {
          console['warn']('[wxmini] _clearSound:' + rkca6_), fj4u['_sound']['onCanplay'](r_akc), fj4u['_sound']['onError'](r_akc), lwq['_null'] = r_akc;
        }
      }function x7oiql() {
        ac6_kr(), c810r6['loaded'] = !![], c810r6['event']('complete'), lwq['_audioCache'][c810r6['url']] = c810r6;
      }function pues$f(su$ven) {
        console['error']('errCode=' + su$ven['errCode'] + '  errMsg=' + su$ven['errMsg']), ac6_kr(), c810r6['event']('error');
      }function r_akc() {}this['_sound']['onCanplay'](x7oiql), this['_sound']['onError'](pues$f), this['_sound']['src'] = xlg7w9;var c810r6 = this;
    }, z9d7['play'] = function (vns$_e, h3moi) {
      vns$_e === void 0x0 && (vns$_e = 0x0), h3moi === void 0x0 && (h3moi = 0x0);var n_v$es;if (this['url'] == r0c81['_tMusic']) {
        if (!lwq['_musicAudio']) lwq['_musicAudio'] = lwq['_createSound']();n_v$es = lwq['_musicAudio'];
      } else n_v$es = lwq['_createSound']();n_v$es['src'] = this['url'];var qwlox = new ijohq(n_v$es);return qwlox['url'] = this['url'], qwlox['loops'] = h3moi, qwlox['startTime'] = vns$_e, qwlox['play'](), r0c81['addChannel'](qwlox), qwlox;
    }, z9d7['dispose'] = function () {
      var _va6nk = lwq['_audioCache'][this['url']];_va6nk && (_va6nk['src'] = '', delete lwq['_audioCache'][this['url']]);
    }, _nvsk$(0x0, z9d7, 'duration', function () {
      return this['_sound']['duration'];
    }), lwq['_createSound'] = function () {
      return lwq['_id']++, vskn$_['window']['wx']['createInnerAudioContext']();
    }, lwq['_musicAudio'] = null, lwq['_id'] = 0x0, lwq['_audioCache'] = {}, lwq['_null'] = undefined, lwq;
  }(ksn_a),
      ijohq = function (f4u$p) {
    function qhjm(v_$snk) {
      this['_audio'] = null, this['_onEnd'] = null, qhjm['__super']['call'](this), this['_audio'] = v_$snk, this['_onEnd'] = es$uv['bind'](this['__onEnd'], this), v_$snk['onEnded'](this['_onEnd']);
    }nvse$_(qhjm, 'laya.wx.mini.MiniSoundChannel', f4u$p);var feus$n = qhjm['prototype'];return feus$n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (mhqjoi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, feus$n['__onNull'] = function () {}, feus$n['play'] = function () {
      this['isStopped'] = ![], r0c81['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, feus$n['stop'] = function () {
      this['isStopped'] = !![], r0c81['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qhjm['_null'] != undefined) this['_audio']['onEnded'](qhjm['_null']);else try {
        this['_audio']['onEnded'](null), qhjm['_null'] = null;
      } catch (rac6_k) {
        console['warn']('[wxmini] stop:' + rac6_k), this['_audio']['onEnded'](es$uv['bind'](this['__onNull'], this)), qhjm['_null'] = es$uv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, feus$n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, feus$n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], r0c81['addChannel'](this), this['_audio']['play']();
    }, _nvsk$(0x0, feus$n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _nvsk$(0x0, feus$n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _nvsk$(0x0, feus$n, 'volume', function () {
      return 0x1;
    }, function (k6_a) {}), qhjm['_null'] = undefined, qhjm;
  }(_k$sn);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var mh43p in Laya) {
    var oj3ihm = Laya[mh43p];oj3ihm && oj3ihm['__isclass'] && (exports[mh43p] = oj3ihm);
  }
});