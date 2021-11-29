var o = wx.$U;
(function (window, document, t92zd5) {
  var oi7qlx = t92zd5['un'],
      vu$sne = t92zd5['uns'],
      n$fs = t92zd5['static'],
      vnk_ = t92zd5['class'],
      v$n_e = t92zd5['getset'],
      es$un = t92zd5['__newvec'],
      dzg7 = laya['utils']['Browser'],
      m34hij = laya['events']['Event'],
      bc801r = laya['events']['EventDispatcher'],
      ihj3om = laya['resource']['HTMLImage'],
      fpj4u = laya['utils']['Handler'],
      x7wqlg = laya['display']['Input'],
      naksv_ = laya['net']['Loader'],
      ih3m4 = laya['maths']['Matrix'],
      ohi3j = laya['renders']['Render'],
      mo3ihj = laya['utils']['RunDriver'],
      vk6_ac = laya['media']['Sound'],
      gdz5w9 = laya['media']['SoundChannel'],
      ev$_s = laya['media']['SoundManager'],
      xw97zg = laya['display']['Stage'],
      x97wgl = laya['net']['URL'],
      c10 = laya['utils']['Utils'],
      mhpj43 = function () {
    function gx9w7l() {}return vnk_(gx9w7l, 'laya.wx.mini.MiniAdpter'), gx9w7l['getJson'] = function (uf4$ep) {
      return JSON['parse'](uf4$ep);
    }, gx9w7l['init'] = function (cr860a, lgw) {
      cr860a === void 0x0 && (cr860a = ![]), lgw === void 0x0 && (lgw = ![]);if (gx9w7l['_inited']) return;gx9w7l['window'] = window;if (gx9w7l['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;gx9w7l['_inited'] = !![], gx9w7l['isZiYu'] = lgw, gx9w7l['isPosMsgYu'] = cr860a, gx9w7l['EnvConfig'] = {}, !gx9w7l['isZiYu'] && (c6a0['setNativeFileDir']('/layaairGame'), c6a0['existDir'](c6a0['fileNativeDir'], fpj4u['create'](gx9w7l, gx9w7l['onMkdirCallBack']))), gx9w7l['window']['focus'] = function () {}, t92zd5['getUrlPath'] = function () {}, gx9w7l['window']['logtime'] = function (w7xlqg) {}, gx9w7l['window']['alertTimeLog'] = function (r8c0a6) {}, gx9w7l['window']['resetShareInfo'] = function () {}, gx9w7l['window']['CanvasRenderingContext2D'] = function () {}, gx9w7l['window']['CanvasRenderingContext2D']['prototype'] = gx9w7l['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gx9w7l['window']['document']['body']['appendChild'] = function () {}, gx9w7l['EnvConfig']['pixelRatioInt'] = 0x0, mo3ihj['getPixelRatio'] = gx9w7l['pixelRatio'], gx9w7l['_preCreateElement'] = dzg7['createElement'], dzg7['createElement'] = gx9w7l['createElement'], mo3ihj['createShaderCondition'] = gx9w7l['createShaderCondition'], c10['parseXMLFromString'] = gx9w7l['parseXMLFromString'], x7wqlg['_createInputElement'] = nves['_createInputElement'], gx9w7l['EnvConfig']['load'] = naksv_['prototype']['load'], naksv_['prototype']['load'] = mjiqho['prototype']['load'], gx9w7l['isZiYu'] && cr860a && wx['onMessage'](function (n6_) {
        n6_['isLoad'] && (c6a0['ziyuFileData'][n6_['url']] = n6_['data']);
      });
    }, gx9w7l['onMkdirCallBack'] = function (jhim3, $ufp4e) {
      if (!jhim3) c6a0['filesListObj'] = JSON['parse']($ufp4e['data']);
    }, gx9w7l['pixelRatio'] = function () {
      if (!gx9w7l['EnvConfig']['pixelRatioInt']) try {
        var imhlq = wx['getSystemInfoSync']();return gx9w7l['EnvConfig']['pixelRatioInt'] = imhlq['pixelRatio'], imhlq = imhlq, imhlq['pixelRatio'];
      } catch (ak0rc) {}return gx9w7l['EnvConfig']['pixelRatioInt'];
    }, gx9w7l['createElement'] = function ($ksv_) {
      if ($ksv_ == 'canvas') {
        var _nvs$;return gx9w7l['idx'] == 0x1 ? gx9w7l['isZiYu'] ? (_nvs$ = sharedCanvas, _nvs$['style'] = {}) : _nvs$ = window['canvas'] : _nvs$ = window['wx']['createCanvas'](), gx9w7l['idx']++, _nvs$;
      } else {
        if ($ksv_ == 'textarea' || $ksv_ == 'input') return gx9w7l['onCreateInput']($ksv_);else {
          if ($ksv_ == 'div') {
            var p3jfu4 = gx9w7l['_preCreateElement']($ksv_);return p3jfu4['contains'] = function (su$n) {
              return null;
            }, p3jfu4['removeChild'] = function (fups$e) {}, p3jfu4;
          } else return gx9w7l['_preCreateElement']($ksv_);
        }
      }
    }, gx9w7l['onCreateInput'] = function (gt9dz) {
      var qiojmh = gx9w7l['_preCreateElement'](gt9dz);return qiojmh['focus'] = nves['wxinputFocus'], qiojmh['blur'] = nves['wxinputblur'], qiojmh['style'] = {}, qiojmh['value'] = 0x0, qiojmh['parentElement'] = {}, qiojmh['placeholder'] = {}, qiojmh['type'] = {}, qiojmh['setColor'] = function (qlxg7) {}, qiojmh['setType'] = function (xlo7qi) {}, qiojmh['setFontFace'] = function (p$efs) {}, qiojmh['addEventListener'] = function (j3fup) {}, qiojmh['contains'] = function (zgt95d) {
        return null;
      }, qiojmh['removeChild'] = function (limxo) {}, qiojmh;
    }, gx9w7l['createShaderCondition'] = function (iomq) {
      var mi3h4j = this,
          s_v$ = function () {
        var b1r8c = iomq;return mi3h4j[iomq['replace']('this.', '')];
      };return s_v$;
    }, gx9w7l['EnvConfig'] = null, gx9w7l['window'] = null, gx9w7l['_preCreateElement'] = null, gx9w7l['_inited'] = ![], gx9w7l['wxRequest'] = null, gx9w7l['systemInfo'] = null, gx9w7l['version'] = '0.0.1', gx9w7l['isZiYu'] = ![], gx9w7l['isPosMsgYu'] = ![], gx9w7l['parseXMLFromString'] = function (l9gw) {
      var unefs, c1860r;l9gw = l9gw['replace'](/>\s+</g, '><');try {
        unefs = new window['Parser']['DOMParser']()['parseFromString'](l9gw, 'text/xml');
      } catch (j4im3) {
        throw '需要引入xml解析库文件';
      }return unefs;
    }, gx9w7l['idx'] = 0x1, gx9w7l;
  }(),
      mj3ih4 = function () {
    function _v6nak() {}vnk_(_v6nak, 'laya.wx.mini.MiniImage');var xqlmi = _v6nak['prototype'];return xqlmi['_loadImage'] = function (uv$es) {
      var efu3p4 = this,
          ank6 = ![];uv$es['indexOf']('layaNativeDir/') == -0x1 && (ank6 = !![], uv$es = x97wgl['formatURL'](uv$es));if (!c6a0['getFileInfo'](uv$es)) {
        if (uv$es['indexOf']('http://') != -0x1 || uv$es['indexOf']('https://') != -0x1) c6a0['downImg'](uv$es, new fpj4u(_v6nak, _v6nak['onDownImgCallBack'], [uv$es, efu3p4]), uv$es);else _v6nak['onCreateImage'](uv$es, efu3p4, !![]);
      } else _v6nak['onCreateImage'](uv$es, efu3p4, !ank6);
    }, _v6nak['onDownImgCallBack'] = function (iomjhq, xmliq, n6a_vk) {
      if (!n6a_vk) _v6nak['onCreateImage'](iomjhq, xmliq);else xmliq['onError'](null);
    }, _v6nak['onCreateImage'] = function (j3i4m, tgd, f4j3up) {
      f4j3up === void 0x0 && (f4j3up = ![]);var d5gzw9;if (!f4j3up) {
        var $4epfu = c6a0['getFileInfo'](j3i4m),
            gt = $4epfu['md5'];d5gzw9 = c6a0['getFileNativePath'](gt);
      } else d5gzw9 = j3i4m;if (tgd['imgCache'] == null) tgd['imgCache'] = {};var suven$;function _an6() {
        suven$['onload'] = null, suven$['onerror'] = null, delete tgd['imgCache'][j3i4m];
      };var ka6c_r = function () {
        _an6(), tgd['onLoaded'](suven$);
      },
          uefp3 = function () {
        _an6(), tgd['event']('error', 'Load image failed');
      };tgd['_type'] == 'nativeimage' ? (suven$ = new dzg7['window']['Image'](), suven$['crossOrigin'] = '', suven$['onload'] = ka6c_r, suven$['onerror'] = uefp3, suven$['src'] = d5gzw9, tgd['imgCache'][j3i4m] = suven$) : new ihj3om['create'](d5gzw9, { 'onload': ka6c_r, 'onerror': uefp3, 'onCreate': function (s_vka) {
          suven$ = s_vka, tgd['imgCache'][j3i4m] = s_vka;
        } });
    }, _v6nak;
  }(),
      nves = function () {
    function moqlh() {}return vnk_(moqlh, 'laya.wx.mini.MiniInput'), moqlh['_createInputElement'] = function () {
      x7wqlg['_initInput'](x7wqlg['area'] = dzg7['createElement']('textarea')), x7wqlg['_initInput'](x7wqlg['input'] = dzg7['createElement']('input')), x7wqlg['inputContainer'] = dzg7['createElement']('div'), x7wqlg['inputContainer']['style']['position'] = 'absolute', x7wqlg['inputContainer']['style']['zIndex'] = 0x186a0, dzg7['container']['appendChild'](x7wqlg['inputContainer']), x7wqlg['inputContainer']['setPos'] = function (iqohl, $upfse) {
        x7wqlg['inputContainer']['style']['left'] = iqohl + 'px', x7wqlg['inputContainer']['style']['top'] = $upfse + 'px';
      }, t92zd5['stage']['on']('resize', null, moqlh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zd5w) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ev$_s['_soundClass'] = sn_v$, ev$_s['_musicClass'] = sn_v$;
    }, moqlh['_onStageResize'] = function () {
      var qomhij = t92zd5['stage']['_canvasTransform']['identity']();qomhij['scale'](dzg7['width'] / ohi3j['canvas']['width'] / mo3ihj['getPixelRatio'](), dzg7['height'] / ohi3j['canvas']['height'] / mo3ihj['getPixelRatio']());
    }, moqlh['wxinputFocus'] = function (avc_6k) {
      var u$ev = x7wqlg['inputElement']['target'];if (u$ev && !u$ev['editable']) return;mhpj43['window']['wx']['offKeyboardConfirm'](), mhpj43['window']['wx']['offKeyboardInput'](), mhpj43['window']['wx']['showKeyboard']({ 'defaultValue': u$ev['text'], 'maxLength': u$ev['maxChars'], 'multiple': u$ev['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ihm3) {}, 'fail': function (qjmho) {} }), mhpj43['window']['wx']['onKeyboardConfirm'](function (wlxgq7) {
        var $eu4pf = wlxgq7 ? wlxgq7['value'] : '';u$ev['text'] = $eu4pf, u$ev['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mhpj43['window']['wx']['onKeyboardInput'](function (fnu$) {
        var hp4jm = fnu$ ? fnu$['value'] : '';if (!u$ev['multiline']) {
          if (hp4jm['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }u$ev['text'] = hp4jm, u$ev['event']('input');
      });
    }, moqlh['inputEnter'] = function () {
      x7wqlg['inputElement']['target']['focus'] = ![];
    }, moqlh['wxinputblur'] = function () {
      moqlh['hideKeyboard']();
    }, moqlh['hideKeyboard'] = function () {
      mhpj43['window']['wx']['offKeyboardConfirm'](), mhpj43['window']['wx']['offKeyboardInput'](), mhpj43['window']['wx']['hideKeyboard']({ 'success': function (fh4p3j) {
          console['log']('隐藏键盘');
        }, 'fail': function (l7wgq) {
          console['log']('隐藏键盘出错:' + (l7wgq ? l7wgq['errMsg'] : ''));
        } });
    }, moqlh;
  }(),
      mjiqho = function () {
    function fupe$4() {}vnk_(fupe$4, 'laya.wx.mini.MiniLoader');var ckr60 = fupe$4['prototype'];return ckr60['load'] = function (nvka6_, ns$_ev, evnus$, lqxmio, z7dgw) {
      evnus$ === void 0x0 && (evnus$ = !![]), z7dgw === void 0x0 && (z7dgw = ![]);var kac_6r = this;kac_6r['_url'] = nvka6_;if (nvka6_['indexOf']('data:image') === 0x0) kac_6r['_type'] = ns$_ev = 'image';else kac_6r['_type'] = ns$_ev || (ns$_ev = kac_6r['getTypeFromUrl'](nvka6_));kac_6r['_cache'] = evnus$, kac_6r['_data'] = null;var sakv = 'ascii';if (nvka6_['indexOf']('.fnt') != -0x1) sakv = 'utf8';else ns$_ev == 'arraybuffer' && (sakv = '');;var ank_sv = c10['getFileExtension'](nvka6_);if (fupe$4['_fileTypeArr']['indexOf'](ank_sv) != -0x1) mhpj43['EnvConfig']['load']['call'](this, nvka6_, ns$_ev, evnus$, lqxmio, z7dgw);else {
        if (!c6a0['getFileInfo'](nvka6_)) {
          if (nvka6_['indexOf']('layaNativeDir/') != -0x1) {
            if (mhpj43['isZiYu']) {
              var ih4j3m = c6a0['ziyuFileData'][nvka6_];kac_6r['onLoaded'](ih4j3m);return;
            } else {
              cosnole['log']('read read'), c6a0['read'](nvka6_, sakv, new fpj4u(fupe$4, fupe$4['onReadNativeCallBack'], [sakv, nvka6_, ns$_ev, evnus$, lqxmio, z7dgw, kac_6r]));return;
            }
          }if (x97wgl['rootPath'] == '') var euvn = nvka6_;else euvn = nvka6_['split'](x97wgl['rootPath'])[0x0];nvka6_['indexOf']('http://') != -0x1 || nvka6_['indexOf']('https://') != -0x1 ? mhpj43['EnvConfig']['load']['call'](kac_6r, nvka6_, ns$_ev, evnus$, lqxmio, z7dgw) : c6a0['readFile'](euvn, sakv, new fpj4u(fupe$4, fupe$4['onReadNativeCallBack'], [sakv, nvka6_, ns$_ev, evnus$, lqxmio, z7dgw, kac_6r]), nvka6_);
        } else mhpj43['EnvConfig']['load']['call'](this, nvka6_, ns$_ev, evnus$, lqxmio, z7dgw);
      }
    }, ckr60['resMgrLoad'] = function (u$sefn, w7gqlx, $sev_n, jh4p3f, $vu, d9z7g, qomi) {
      $sev_n === void 0x0 && ($sev_n = 0x0), jh4p3f === void 0x0 && (jh4p3f = ![]), $vu === void 0x0 && ($vu = ![]), d9z7g === void 0x0 && (d9z7g = 0x0), qomi === void 0x0 && (qomi = 0x3), u$sefn['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', u$sefn), mhpj43['EnvConfig']['resMgrLoad'](u$sefn, (u4ep$, wlq7ox, c8b1) => {
        fupe$4['prototype']['resMgrLoadCallBack'](u4ep$, wlq7ox, c8b1, w7gqlx);
      }, $sev_n, jh4p3f, $vu, d9z7g, qomi);
    }, ckr60['resMgrLoadCallBack'] = function (nak6, sef$p, lxom, n_avk6) {
      console['log']('buff:::', nak6, lxom, c6a0['fileNativeDir'] + '///' + c6a0['fileListName']), n_avk6(nak6, sef$p, lxom);
    }, ckr60['clearRes'] = function (o3hijm, oijqhm) {
      oijqhm === void 0x0 && (oijqhm = ![]);var u4e3f = this;u4e3f['clearRes'](o3hijm, oijqhm);var $suvne = c6a0['getFileInfo'](o3hijm);if ($suvne && (o3hijm['indexOf']('http://') != -0x1 || o3hijm['indexOf']('https://') != -0x1)) {
        var r61c0 = $suvne['md5'],
            $vsneu = c6a0['getFileNativePath'](r61c0);c6a0['remove']($vsneu);
      }
    }, fupe$4['onReadNativeCallBack'] = function (f3uep, v6_na, p4fj, up4$, $spuef, mlhioq, wz9x, gzw9x, xlqomi) {
      up4$ === void 0x0 && (up4$ = !![]), mlhioq === void 0x0 && (mlhioq = ![]), gzw9x === void 0x0 && (gzw9x = 0x0);if (!gzw9x) {
        var jfp34u;if (p4fj == 'json' || p4fj == 'atlas') jfp34u = mhpj43['getJson'](xlqomi['data']);else p4fj == 'xml' ? jfp34u = c10['parseXMLFromString'](xlqomi['data']) : jfp34u = xlqomi['data'];wz9x['onLoaded'](jfp34u), !mhpj43['isZiYu'] && mhpj43['isPosMsgYu'] && p4fj != 'arraybuffer' && wx['postMessage']({ 'url': v6_na, 'data': jfp34u, 'isLoad': !![] });
      } else gzw9x == 0x1 && mhpj43['EnvConfig']['load']['call'](wz9x, v6_na, p4fj, up4$, $spuef, mlhioq);
    }, n$fs(fupe$4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fupe$4;
  }(),
      c6a0 = function (_6kv) {
    function gl79xw() {
      gl79xw['__super']['call'](this);;
    }return vnk_(gl79xw, 'laya.wx.mini.MiniFileMgr', _6kv), gl79xw['isLoadFile'] = function ($nsev) {
      return gl79xw['_fileTypeArr']['indexOf']($nsev) != -0x1 ? !![] : ![];
    }, gl79xw['getFileInfo'] = function (xoqiml) {
      var wz5dg = xoqiml['split']('?')[0x0],
          v$sen = gl79xw['filesListObj'][wz5dg];if (v$sen == null) return null;else return v$sen;return null;
    }, gl79xw['onFileUpdate'] = function (ih3mo, ojh) {
      var p$ue = ih3mo['split']('/'),
          f3puj = p$ue[p$ue['length'] - 0x1],
          vs$n_k = gl79xw['getFileInfo'](ojh);if (vs$n_k == null) gl79xw['onSaveFile'](ojh, f3puj);else {
        if (vs$n_k['readyUrl'] != ojh) gl79xw['remove'](f3puj, ojh);
      }
    }, gl79xw['exits'] = function (en$suf, r1cb8) {
      var uevs$n = gl79xw['getFileNativePath'](en$suf);gl79xw['fs']['getFileInfo']({ 'filePath': uevs$n, 'success': function (w7zgx) {
          r1cb8 != null && r1cb8['runWith']([0x0, w7zgx]);
        }, 'fail': function ($uesn) {
          r1cb8 != null && r1cb8['runWith']([0x1, $uesn]);
        } });
    }, gl79xw['read'] = function (gw9dz7, $fspe, lw7x, ra6_c) {
      $fspe === void 0x0 && ($fspe = 'ascill'), ra6_c === void 0x0 && (ra6_c = '');var wlgq7;ra6_c != '' ? wlgq7 = gl79xw['getFileNativePath'](gw9dz7) : wlgq7 = gw9dz7, gl79xw['fs']['readFile']({ 'filePath': wlgq7, 'encoding': $fspe, 'success': function (t529d) {
          lw7x != null && lw7x['runWith']([0x0, t529d]);
        }, 'fail': function (ar8c0) {
          if (ar8c0 && ra6_c != '') gl79xw['down'](ra6_c, $fspe, lw7x, ra6_c);else lw7x != null && lw7x['runWith']([0x1]);
        } });
    }, gl79xw['readNativeFile'] = function (hi3j4m, xloq) {
      gl79xw['fs']['readFile']({ 'filePath': hi3j4m, 'encoding': '', 'success': function (gxw79z) {
          xloq != null && xloq['runWith']([0x0]);
        }, 'fail': function (c6_ark) {
          xloq != null && xloq['runWith']([0x1]);
        } });
    }, gl79xw['down'] = function (qmoli, p4e3, a_nkv6, _vans) {
      p4e3 === void 0x0 && (p4e3 = 'ascill'), _vans === void 0x0 && (_vans = '');var byr81 = gl79xw['getFileNativePath'](_vans),
          ckav6 = gl79xw['wxdown']({ 'url': qmoli, 'filePath': byr81, 'success': function (_arck6) {
          if (_arck6['statusCode'] === 0xc8) gl79xw['readFile'](_arck6['filePath'], p4e3, a_nkv6, _vans);
        }, 'fail': function (kavns) {
          a_nkv6 != null && a_nkv6['runWith']([0x1, kavns]);
        } });ckav6['onProgressUpdate'](function (ps$feu) {
        a_nkv6 != null && a_nkv6['runWith']([0x2, ps$feu['progress']]);
      });
    }, gl79xw['readFile'] = function (ns_v$, imlxqo, v6_nk, hpj43f) {
      imlxqo === void 0x0 && (imlxqo = 'ascill'), hpj43f === void 0x0 && (hpj43f = ''), gl79xw['fs']['readFile']({ 'filePath': ns_v$, 'encoding': imlxqo, 'success': function (zx7g) {
          if (ns_v$['indexOf']('http://') != -0x1 || ns_v$['indexOf']('https://') != -0x1) gl79xw['onFileUpdate'](ns_v$, hpj43f);v6_nk != null && v6_nk['runWith']([0x0, zx7g]);
        }, 'fail': function (wgx9l) {
          if (wgx9l) v6_nk != null && v6_nk['runWith']([0x1, wgx9l]);
        } });
    }, gl79xw['downImg'] = function (im43jh, ck_va, ck_ar) {
      ck_ar === void 0x0 && (ck_ar = '');var fep4u$ = gl79xw['wxdown']({ 'url': im43jh, 'success': function (zd7w) {
          zd7w['statusCode'] === 0xc8 && gl79xw['copyFile'](zd7w['tempFilePath'], ck_ar, ck_va);
        }, 'fail': function (zwd59g) {
          ck_va != null && ck_va['runWith']([0x1, zwd59g]);
        } });
    }, gl79xw['copyFile'] = function (p3m4hj, r0akc6, u$p4fe) {
      var q7olxw = p3m4hj['split']('/'),
          _ka6vc = q7olxw[q7olxw['length'] - 0x1],
          br18y = r0akc6['split']('?')[0x0],
          nk_sv$ = gl79xw['getFileInfo'](r0akc6),
          l7ox = gl79xw['getFileNativePath'](_ka6vc);gl79xw['fs']['copyFile']({ 'srcPath': p3m4hj, 'destPath': l7ox, 'success': function (p3fu4e) {
          if (!nk_sv$) gl79xw['onSaveFile'](r0akc6, _ka6vc), u$p4fe != null && u$p4fe['runWith']([0x0]);else {
            if (nk_sv$['readyUrl'] != r0akc6) gl79xw['remove'](_ka6vc, r0akc6, u$p4fe);
          }
        }, 'fail': function (wd9zg5) {
          u$p4fe != null && u$p4fe['runWith']([0x1, wd9zg5]);
        } });
    }, gl79xw['getFileNativePath'] = function ($e4f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $e4f;
    }, gl79xw['remove'] = function (nvs_, $funse, fseup) {
      $funse === void 0x0 && ($funse = '');var m3ih4j = gl79xw['getFileInfo']($funse),
          sk_n = gl79xw['getFileNativePath'](m3ih4j['md5']);t92zd5['loader']['clearRes'](m3ih4j['readyUrl']), gl79xw['fs']['unlink']({ 'filePath': sk_n, 'success': function (oj3mh) {
          if ($funse != '') gl79xw['onSaveFile']($funse, nvs_);fseup != null && fseup['runWith']([0x0]);
        }, 'fail': function (f34uj) {} });
    }, gl79xw['onSaveFile'] = function (gxl7q, r8y10b) {
      var pmh3j4 = gxl7q['split']('?')[0x0];gl79xw['filesListObj'][pmh3j4] = { 'md5': r8y10b, 'readyUrl': gxl7q }, gl79xw['fs']['writeFile']({ 'filePath': gl79xw['fileNativeDir'] + '/' + gl79xw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gl79xw['filesListObj']), 'success': function (ack6r0) {
          console['log']('写入测试测试成功：', ack6r0);
        }, 'fail': function (j34pfh) {
          console['log']('写入测试测试失败：', j34pfh);
        } });
    }, gl79xw['existDir'] = function (zwg5, _svne$) {
      gl79xw['fs']['mkdir']({ 'dirPath': zwg5, 'success': function (a_kvc) {
          _svne$ != null && _svne$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mij34) {
          if (mij34['errMsg']['indexOf']('file already exists') != -0x1) gl79xw['readSync'](gl79xw['fileListName'], 'utf8', _svne$);else _svne$ != null && _svne$['runWith']([0x1, mij34]);
        } });
    }, gl79xw['readSync'] = function (loi7qx, vack_, uep, jm34ph) {
      vack_ === void 0x0 && (vack_ = 'ascill'), jm34ph === void 0x0 && (jm34ph = '');var _acv6 = gl79xw['getFileNativePath'](loi7qx),
          pe3f4u;try {
        pe3f4u = gl79xw['fs']['readFileSync'](_acv6), uep != null && uep['runWith']([0x0, { 'data': pe3f4u }]);
      } catch (vnsue) {
        uep != null && uep['runWith']([0x1]);
      }
    }, gl79xw['readCache'] = function () {}, gl79xw['writeCache'] = function ($pes) {
      var _ka6r = readyUrl['split']('?')[0x0];gl79xw['filesListObj'][_ka6r] = { 'md5': md5Name, 'readyUrl': readyUrl }, gl79xw['fs']['writeFile']({ 'filePath': gl79xw['fileNativeDir'] + '/' + gl79xw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gl79xw['filesListObj']), 'success': function (suven) {}, 'fail': function (c0a6r8) {} });
    }, gl79xw['setNativeFileDir'] = function (k6a_rc) {
      gl79xw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + k6a_rc;
    }, gl79xw['filesListObj'] = {}, gl79xw['fileNativeDir'] = null, gl79xw['fileListName'] = 'layaairfiles.txt', gl79xw['ziyuFileData'] = {}, n$fs(gl79xw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), gl79xw;
  }(bc801r),
      sn_v$ = function (n$veu) {
    function f4$pu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], f4$pu['__super']['call'](this), this['_sound'] = f4$pu['_createSound']();
    }vnk_(f4$pu, 'laya.wx.mini.MiniSound', n$veu);var sep$uf = f4$pu['prototype'];return sep$uf['load'] = function (_v$sk) {
      var c86a0r = this;_v$sk = x97wgl['formatURL'](_v$sk), this['url'] = _v$sk;if (f4$pu['_audioCache'][_v$sk]) {
        this['event']('complete');return;
      }function naksv() {
        if (f4$pu['_null'] != undefined) c86a0r['_sound']['onCanplay'](f4$pu['_null']), c86a0r['_sound']['onError'](f4$pu['_null']);else try {
          c86a0r['_sound']['onCanplay'](null), c86a0r['_sound']['onError'](null), f4$pu['_null'] = null;
        } catch (zd7w9) {
          console['warn']('[wxmini] _clearSound:' + zd7w9), c86a0r['_sound']['onCanplay'](_6kac), c86a0r['_sound']['onError'](_6kac), f4$pu['_null'] = _6kac;
        }
      }function z97wgx() {
        naksv(), v_s$en['loaded'] = !![], v_s$en['event']('complete'), f4$pu['_audioCache'][v_s$en['url']] = v_s$en;
      }function vkns(r80y1b) {
        console['error']('errCode=' + r80y1b['errCode'] + '  errMsg=' + r80y1b['errMsg']), naksv(), v_s$en['event']('error');
      }function _6kac() {}this['_sound']['onCanplay'](z97wgx), this['_sound']['onError'](vkns), this['_sound']['src'] = _v$sk;var v_s$en = this;
    }, sep$uf['play'] = function (lxw79g, _knsv) {
      lxw79g === void 0x0 && (lxw79g = 0x0), _knsv === void 0x0 && (_knsv = 0x0);var fpe3u4;if (this['url'] == ev$_s['_tMusic']) {
        if (!f4$pu['_musicAudio']) f4$pu['_musicAudio'] = f4$pu['_createSound']();fpe3u4 = f4$pu['_musicAudio'];
      } else fpe3u4 = f4$pu['_createSound']();fpe3u4['src'] = this['url'];var xloqi = new fph34j(fpe3u4);return xloqi['url'] = this['url'], xloqi['loops'] = _knsv, xloqi['startTime'] = lxw79g, xloqi['play'](), ev$_s['addChannel'](xloqi), xloqi;
    }, sep$uf['dispose'] = function () {
      var sune$ = f4$pu['_audioCache'][this['url']];sune$ && (sune$['src'] = '', delete f4$pu['_audioCache'][this['url']]);
    }, v$n_e(0x0, sep$uf, 'duration', function () {
      return this['_sound']['duration'];
    }), f4$pu['_createSound'] = function () {
      return f4$pu['_id']++, mhpj43['window']['wx']['createInnerAudioContext']();
    }, f4$pu['_musicAudio'] = null, f4$pu['_id'] = 0x0, f4$pu['_audioCache'] = {}, f4$pu['_null'] = undefined, f4$pu;
  }(bc801r),
      fph34j = function (fe3pu) {
    function c160r8(wolq) {
      this['_audio'] = null, this['_onEnd'] = null, c160r8['__super']['call'](this), this['_audio'] = wolq, this['_onEnd'] = c10['bind'](this['__onEnd'], this), wolq['onEnded'](this['_onEnd']);
    }vnk_(c160r8, 'laya.wx.mini.MiniSoundChannel', fe3pu);var ioqjh = c160r8['prototype'];return ioqjh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (t92zd5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ioqjh['__onNull'] = function () {}, ioqjh['play'] = function () {
      this['isStopped'] = ![], ev$_s['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ioqjh['stop'] = function () {
      this['isStopped'] = !![], ev$_s['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (c160r8['_null'] != undefined) this['_audio']['onEnded'](c160r8['_null']);else try {
        this['_audio']['onEnded'](null), c160r8['_null'] = null;
      } catch (oixq) {
        console['warn']('[wxmini] stop:' + oixq), this['_audio']['onEnded'](c10['bind'](this['__onNull'], this)), c160r8['_null'] = c10['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ioqjh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ioqjh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ev$_s['addChannel'](this), this['_audio']['play']();
    }, v$n_e(0x0, ioqjh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), v$n_e(0x0, ioqjh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), v$n_e(0x0, ioqjh, 'volume', function () {
      return 0x1;
    }, function (pf4ue) {}), c160r8['_null'] = undefined, c160r8;
  }(gdz5w9);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w9gd in Laya) {
    var z29t = Laya[w9gd];z29t && z29t['__isclass'] && (exports[w9gd] = z29t);
  }
});