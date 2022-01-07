var o = wx.$U;
(function (window, document, a6c80) {
  var vs$u = a6c80['un'],
      b80c1 = a6c80['uns'],
      n$v = a6c80['static'],
      dg5wz = a6c80['class'],
      r8y = a6c80['getset'],
      _ak6rc = a6c80['__newvec'],
      epf$4 = laya['utils']['Browser'],
      glxw7q = laya['events']['Event'],
      n$usfe = laya['events']['EventDispatcher'],
      nv_es = laya['resource']['HTMLImage'],
      v6ka = laya['utils']['Handler'],
      fup$ = laya['display']['Input'],
      jhqm = laya['net']['Loader'],
      tgdz5 = laya['maths']['Matrix'],
      h3ijmo = laya['renders']['Render'],
      g9lxw7 = laya['utils']['RunDriver'],
      yrb801 = laya['media']['Sound'],
      ca6vk = laya['media']['SoundChannel'],
      xw97 = laya['media']['SoundManager'],
      eu$pf = laya['display']['Stage'],
      kas_ = laya['net']['URL'],
      zd95t2 = laya['utils']['Utils'],
      nv$e_s = function () {
    function sak_v() {}return dg5wz(sak_v, 'laya.wx.mini.MiniAdpter'), sak_v['getJson'] = function ($sevun) {
      return JSON['parse']($sevun);
    }, sak_v['init'] = function (iqmlo, _sk$) {
      iqmlo === void 0x0 && (iqmlo = ![]), _sk$ === void 0x0 && (_sk$ = ![]);if (sak_v['_inited']) return;sak_v['window'] = window;if (sak_v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;sak_v['_inited'] = !![], sak_v['isZiYu'] = _sk$, sak_v['isPosMsgYu'] = iqmlo, sak_v['EnvConfig'] = {}, !sak_v['isZiYu'] && (p4e3['setNativeFileDir']('/layaairGame'), p4e3['existDir'](p4e3['fileNativeDir'], v6ka['create'](sak_v, sak_v['onMkdirCallBack']))), sak_v['window']['focus'] = function () {}, a6c80['getUrlPath'] = function () {}, sak_v['window']['logtime'] = function (br01c) {}, sak_v['window']['alertTimeLog'] = function (f4) {}, sak_v['window']['resetShareInfo'] = function () {}, sak_v['window']['CanvasRenderingContext2D'] = function () {}, sak_v['window']['CanvasRenderingContext2D']['prototype'] = sak_v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], sak_v['window']['document']['body']['appendChild'] = function () {}, sak_v['EnvConfig']['pixelRatioInt'] = 0x0, g9lxw7['getPixelRatio'] = sak_v['pixelRatio'], sak_v['_preCreateElement'] = epf$4['createElement'], epf$4['createElement'] = sak_v['createElement'], g9lxw7['createShaderCondition'] = sak_v['createShaderCondition'], zd95t2['parseXMLFromString'] = sak_v['parseXMLFromString'], fup$['_createInputElement'] = epf3u['_createInputElement'], sak_v['EnvConfig']['load'] = jhqm['prototype']['load'], jhqm['prototype']['load'] = _ns$ve['prototype']['load'], sak_v['isZiYu'] && iqmlo && wx['onMessage'](function (e43f) {
        e43f['isLoad'] && (p4e3['ziyuFileData'][e43f['url']] = e43f['data']);
      });
    }, sak_v['onMkdirCallBack'] = function (jhi3, pfj3u4) {
      if (!jhi3) p4e3['filesListObj'] = JSON['parse'](pfj3u4['data']);
    }, sak_v['pixelRatio'] = function () {
      if (!sak_v['EnvConfig']['pixelRatioInt']) try {
        var _c6avk = wx['getSystemInfoSync']();return sak_v['EnvConfig']['pixelRatioInt'] = _c6avk['pixelRatio'], _c6avk = _c6avk, _c6avk['pixelRatio'];
      } catch (wlq7xo) {}return sak_v['EnvConfig']['pixelRatioInt'];
    }, sak_v['createElement'] = function (nk6a) {
      if (nk6a == 'canvas') {
        var ev$s_n;return sak_v['idx'] == 0x1 ? sak_v['isZiYu'] ? (ev$s_n = sharedCanvas, ev$s_n['style'] = {}) : ev$s_n = window['canvas'] : ev$s_n = window['wx']['createCanvas'](), sak_v['idx']++, ev$s_n;
      } else {
        if (nk6a == 'textarea' || nk6a == 'input') return sak_v['onCreateInput'](nk6a);else {
          if (nk6a == 'div') {
            var nve_$ = sak_v['_preCreateElement'](nk6a);return nve_$['contains'] = function (eup34) {
              return null;
            }, nve_$['removeChild'] = function (l7xg9) {}, nve_$;
          } else return sak_v['_preCreateElement'](nk6a);
        }
      }
    }, sak_v['onCreateInput'] = function ($4fpe) {
      var r0a68c = sak_v['_preCreateElement']($4fpe);return r0a68c['focus'] = epf3u['wxinputFocus'], r0a68c['blur'] = epf3u['wxinputblur'], r0a68c['style'] = {}, r0a68c['value'] = 0x0, r0a68c['parentElement'] = {}, r0a68c['placeholder'] = {}, r0a68c['type'] = {}, r0a68c['setColor'] = function (e$sv_) {}, r0a68c['setType'] = function (rk6c) {}, r0a68c['setFontFace'] = function (san_v) {}, r0a68c['addEventListener'] = function (m3p4h) {}, r0a68c['contains'] = function (i43mhj) {
        return null;
      }, r0a68c['removeChild'] = function (k_va6c) {}, r0a68c;
    }, sak_v['createShaderCondition'] = function (qloih) {
      var tz5d9g = this,
          gxwl79 = function () {
        var $fs = qloih;return tz5d9g[qloih['replace']('this.', '')];
      };return gxwl79;
    }, sak_v['EnvConfig'] = null, sak_v['window'] = null, sak_v['_preCreateElement'] = null, sak_v['_inited'] = ![], sak_v['wxRequest'] = null, sak_v['systemInfo'] = null, sak_v['version'] = '0.0.1', sak_v['isZiYu'] = ![], sak_v['isPosMsgYu'] = ![], sak_v['parseXMLFromString'] = function (v_akc) {
      var pufs, lqio7;v_akc = v_akc['replace'](/>\s+</g, '><');try {
        pufs = new window['Parser']['DOMParser']()['parseFromString'](v_akc, 'text/xml');
      } catch (_ar6c) {
        throw '需要引入xml解析库文件';
      }return pufs;
    }, sak_v['idx'] = 0x1, sak_v;
  }(),
      nesv$_ = function () {
    function lqo7w() {}dg5wz(lqo7w, 'laya.wx.mini.MiniImage');var ilqxmo = lqo7w['prototype'];return ilqxmo['_loadImage'] = function (r_ac6k) {
      var fu4j3 = this,
          nv$use = ![];r_ac6k['indexOf']('layaNativeDir/') == -0x1 && (nv$use = !![], r_ac6k = kas_['formatURL'](r_ac6k));if (!p4e3['getFileInfo'](r_ac6k)) {
        if (r_ac6k['indexOf']('http://') != -0x1 || r_ac6k['indexOf']('https://') != -0x1) p4e3['downImg'](r_ac6k, new v6ka(lqo7w, lqo7w['onDownImgCallBack'], [r_ac6k, fu4j3]), r_ac6k);else lqo7w['onCreateImage'](r_ac6k, fu4j3, !![]);
      } else lqo7w['onCreateImage'](r_ac6k, fu4j3, !nv$use);
    }, lqo7w['onDownImgCallBack'] = function (l7qxoi, c0k6a, hfp4j) {
      if (!hfp4j) lqo7w['onCreateImage'](l7qxoi, c0k6a);else c0k6a['onError'](null);
    }, lqo7w['onCreateImage'] = function (xwg7z, n$uesv, lw7xg9) {
      lw7xg9 === void 0x0 && (lw7xg9 = ![]);var spfue$;if (!lw7xg9) {
        var c0861 = p4e3['getFileInfo'](xwg7z),
            imholq = c0861['md5'];spfue$ = p4e3['getFileNativePath'](imholq);
      } else spfue$ = xwg7z;if (n$uesv['imgCache'] == null) n$uesv['imgCache'] = {};var k_v$sn;function fu3p4() {
        k_v$sn['onload'] = null, k_v$sn['onerror'] = null, delete n$uesv['imgCache'][xwg7z];
      };var uf$sne = function () {
        fu3p4(), n$uesv['onLoaded'](k_v$sn);
      },
          kra_c = function () {
        fu3p4(), n$uesv['event']('error', 'Load image failed');
      };n$uesv['_type'] == 'nativeimage' ? (k_v$sn = new epf$4['window']['Image'](), k_v$sn['crossOrigin'] = '', k_v$sn['onload'] = uf$sne, k_v$sn['onerror'] = kra_c, k_v$sn['src'] = spfue$, n$uesv['imgCache'][xwg7z] = k_v$sn) : new nv_es['create'](spfue$, { 'onload': uf$sne, 'onerror': kra_c, 'onCreate': function (ix7) {
          k_v$sn = ix7, n$uesv['imgCache'][xwg7z] = ix7;
        } });
    }, lqo7w;
  }(),
      epf3u = function () {
    function zwg97x() {}return dg5wz(zwg97x, 'laya.wx.mini.MiniInput'), zwg97x['_createInputElement'] = function () {
      fup$['_initInput'](fup$['area'] = epf$4['createElement']('textarea')), fup$['_initInput'](fup$['input'] = epf$4['createElement']('input')), fup$['inputContainer'] = epf$4['createElement']('div'), fup$['inputContainer']['style']['position'] = 'absolute', fup$['inputContainer']['style']['zIndex'] = 0x186a0, epf$4['container']['appendChild'](fup$['inputContainer']), fup$['inputContainer']['setPos'] = function (c6r81, eufsn) {
        fup$['inputContainer']['style']['left'] = c6r81 + 'px', fup$['inputContainer']['style']['top'] = eufsn + 'px';
      }, a6c80['stage']['on']('resize', null, zwg97x['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (anv_ks) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xw97['_soundClass'] = omlqhi, xw97['_musicClass'] = omlqhi;
    }, zwg97x['_onStageResize'] = function () {
      var fhj43p = a6c80['stage']['_canvasTransform']['identity']();fhj43p['scale'](epf$4['width'] / h3ijmo['canvas']['width'] / g9lxw7['getPixelRatio'](), epf$4['height'] / h3ijmo['canvas']['height'] / g9lxw7['getPixelRatio']());
    }, zwg97x['wxinputFocus'] = function (yb0r8) {
      var s_$ven = fup$['inputElement']['target'];if (s_$ven && !s_$ven['editable']) return;nv$e_s['window']['wx']['offKeyboardConfirm'](), nv$e_s['window']['wx']['offKeyboardInput'](), nv$e_s['window']['wx']['showKeyboard']({ 'defaultValue': s_$ven['text'], 'maxLength': s_$ven['maxChars'], 'multiple': s_$ven['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xq7gwl) {}, 'fail': function (ef$us) {} }), nv$e_s['window']['wx']['onKeyboardConfirm'](function (g9xl) {
        var gdzt9 = g9xl ? g9xl['value'] : '';s_$ven['text'] = gdzt9, s_$ven['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nv$e_s['window']['wx']['onKeyboardInput'](function (h3ji4) {
        var p34hf = h3ji4 ? h3ji4['value'] : '';if (!s_$ven['multiline']) {
          if (p34hf['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s_$ven['text'] = p34hf, s_$ven['event']('input');
      });
    }, zwg97x['inputEnter'] = function () {
      fup$['inputElement']['target']['focus'] = ![];
    }, zwg97x['wxinputblur'] = function () {
      zwg97x['hideKeyboard']();
    }, zwg97x['hideKeyboard'] = function () {
      nv$e_s['window']['wx']['offKeyboardConfirm'](), nv$e_s['window']['wx']['offKeyboardInput'](), nv$e_s['window']['wx']['hideKeyboard']({ 'success': function (va6_k) {
          console['log']('隐藏键盘');
        }, 'fail': function (x9g7lw) {
          console['log']('隐藏键盘出错:' + (x9g7lw ? x9g7lw['errMsg'] : ''));
        } });
    }, zwg97x;
  }(),
      _ns$ve = function () {
    function lq7wg() {}dg5wz(lq7wg, 'laya.wx.mini.MiniLoader');var liohqm = lq7wg['prototype'];return liohqm['load'] = function (s$venu, _nvkas, mp3, fp4jh, $evns_) {
      mp3 === void 0x0 && (mp3 = !![]), $evns_ === void 0x0 && ($evns_ = ![]);var h34jmp = this;h34jmp['_url'] = s$venu;if (s$venu['indexOf']('data:image') === 0x0) h34jmp['_type'] = _nvkas = 'image';else h34jmp['_type'] = _nvkas || (_nvkas = h34jmp['getTypeFromUrl'](s$venu));h34jmp['_cache'] = mp3, h34jmp['_data'] = null;var q7ixlo = 'ascii';if (s$venu['indexOf']('.fnt') != -0x1) q7ixlo = 'utf8';else _nvkas == 'arraybuffer' && (q7ixlo = '');;var suve$ = zd95t2['getFileExtension'](s$venu);if (lq7wg['_fileTypeArr']['indexOf'](suve$) != -0x1) nv$e_s['EnvConfig']['load']['call'](this, s$venu, _nvkas, mp3, fp4jh, $evns_);else {
        if (!p4e3['getFileInfo'](s$venu)) {
          if (s$venu['indexOf']('layaNativeDir/') != -0x1) {
            if (nv$e_s['isZiYu']) {
              var vusn = p4e3['ziyuFileData'][s$venu];h34jmp['onLoaded'](vusn);return;
            } else {
              cosnole['log']('read read'), p4e3['read'](s$venu, q7ixlo, new v6ka(lq7wg, lq7wg['onReadNativeCallBack'], [q7ixlo, s$venu, _nvkas, mp3, fp4jh, $evns_, h34jmp]));return;
            }
          }if (kas_['rootPath'] == '') var lxw9g7 = s$venu;else lxw9g7 = s$venu['split'](kas_['rootPath'])[0x0];s$venu['indexOf']('http://') != -0x1 || s$venu['indexOf']('https://') != -0x1 ? nv$e_s['EnvConfig']['load']['call'](h34jmp, s$venu, _nvkas, mp3, fp4jh, $evns_) : p4e3['readFile'](lxw9g7, q7ixlo, new v6ka(lq7wg, lq7wg['onReadNativeCallBack'], [q7ixlo, s$venu, _nvkas, mp3, fp4jh, $evns_, h34jmp]), s$venu);
        } else nv$e_s['EnvConfig']['load']['call'](this, s$venu, _nvkas, mp3, fp4jh, $evns_);
      }
    }, liohqm['resMgrLoad'] = function (upfe4$, xiqmlo, puf$e, qhoiml, jhmo3i, e$, w97x) {
      puf$e === void 0x0 && (puf$e = 0x0), qhoiml === void 0x0 && (qhoiml = ![]), jhmo3i === void 0x0 && (jhmo3i = ![]), e$ === void 0x0 && (e$ = 0x0), w97x === void 0x0 && (w97x = 0x3), upfe4$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', upfe4$), nv$e_s['EnvConfig']['resMgrLoad'](upfe4$, (z9dt2, ihmjo3, fsu$) => {
        lq7wg['prototype']['resMgrLoadCallBack'](z9dt2, ihmjo3, fsu$, xiqmlo);
      }, puf$e, qhoiml, jhmo3i, e$, w97x);
    }, liohqm['resMgrLoadCallBack'] = function (u4ef3, hjoqim, s$ufen, hoil) {
      console['log']('buff:::', u4ef3, s$ufen, p4e3['fileNativeDir'] + '///' + p4e3['fileListName']), hoil(u4ef3, hjoqim, s$ufen);
    }, liohqm['clearRes'] = function (hoqmi, f3hp4) {
      f3hp4 === void 0x0 && (f3hp4 = ![]);var iholm = this;iholm['clearRes'](hoqmi, f3hp4);var a0rk = p4e3['getFileInfo'](hoqmi);if (a0rk && (hoqmi['indexOf']('http://') != -0x1 || hoqmi['indexOf']('https://') != -0x1)) {
        var us$ven = a0rk['md5'],
            a0 = p4e3['getFileNativePath'](us$ven);p4e3['remove'](a0);
      }
    }, lq7wg['onReadNativeCallBack'] = function ($venus, fpj, dz79wg, sfeu$, $epus, hj4i3, p4fu$e, e$_, $_sven) {
      sfeu$ === void 0x0 && (sfeu$ = !![]), hj4i3 === void 0x0 && (hj4i3 = ![]), e$_ === void 0x0 && (e$_ = 0x0);if (!e$_) {
        var a860;if (dz79wg == 'json' || dz79wg == 'atlas') a860 = nv$e_s['getJson']($_sven['data']);else dz79wg == 'xml' ? a860 = zd95t2['parseXMLFromString']($_sven['data']) : a860 = $_sven['data'];p4fu$e['onLoaded'](a860), !nv$e_s['isZiYu'] && nv$e_s['isPosMsgYu'] && dz79wg != 'arraybuffer' && wx['postMessage']({ 'url': fpj, 'data': a860, 'isLoad': !![] });
      } else e$_ == 0x1 && nv$e_s['EnvConfig']['load']['call'](p4fu$e, fpj, dz79wg, sfeu$, $epus, hj4i3);
    }, n$v(lq7wg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lq7wg;
  }(),
      p4e3 = function (wg7z) {
    function z59gdw() {
      z59gdw['__super']['call'](this);;
    }return dg5wz(z59gdw, 'laya.wx.mini.MiniFileMgr', wg7z), z59gdw['isLoadFile'] = function (ev_s$) {
      return z59gdw['_fileTypeArr']['indexOf'](ev_s$) != -0x1 ? !![] : ![];
    }, z59gdw['getFileInfo'] = function (i34mhj) {
      var mqi = i34mhj['split']('?')[0x0],
          xwlqo7 = z59gdw['filesListObj'][mqi];if (xwlqo7 == null) return null;else return xwlqo7;return null;
    }, z59gdw['onFileUpdate'] = function (e3up4, a6k_n) {
      var _ne$sv = e3up4['split']('/'),
          w7gx9 = _ne$sv[_ne$sv['length'] - 0x1],
          fp4h = z59gdw['getFileInfo'](a6k_n);if (fp4h == null) z59gdw['onSaveFile'](a6k_n, w7gx9);else {
        if (fp4h['readyUrl'] != a6k_n) z59gdw['remove'](w7gx9, a6k_n);
      }
    }, z59gdw['exits'] = function (gd9zt5, c8r0a6) {
      var _nak6 = z59gdw['getFileNativePath'](gd9zt5);z59gdw['fs']['getFileInfo']({ 'filePath': _nak6, 'success': function (k_s) {
          c8r0a6 != null && c8r0a6['runWith']([0x0, k_s]);
        }, 'fail': function (lxqwo7) {
          c8r0a6 != null && c8r0a6['runWith']([0x1, lxqwo7]);
        } });
    }, z59gdw['read'] = function (zdg97w, xg79wz, moqlx, xolw7) {
      xg79wz === void 0x0 && (xg79wz = 'ascill'), xolw7 === void 0x0 && (xolw7 = '');var eup$f;xolw7 != '' ? eup$f = z59gdw['getFileNativePath'](zdg97w) : eup$f = zdg97w, z59gdw['fs']['readFile']({ 'filePath': eup$f, 'encoding': xg79wz, 'success': function (ijq) {
          moqlx != null && moqlx['runWith']([0x0, ijq]);
        }, 'fail': function (f43epu) {
          if (f43epu && xolw7 != '') z59gdw['down'](xolw7, xg79wz, moqlx, xolw7);else moqlx != null && moqlx['runWith']([0x1]);
        } });
    }, z59gdw['readNativeFile'] = function (ohim, _vasnk) {
      z59gdw['fs']['readFile']({ 'filePath': ohim, 'encoding': '', 'success': function (s$efpu) {
          _vasnk != null && _vasnk['runWith']([0x0]);
        }, 'fail': function (uf3e4p) {
          _vasnk != null && _vasnk['runWith']([0x1]);
        } });
    }, z59gdw['down'] = function (zgw7x, qmjiho, ijh4, h3jio) {
      qmjiho === void 0x0 && (qmjiho = 'ascill'), h3jio === void 0x0 && (h3jio = '');var b80r1y = z59gdw['getFileNativePath'](h3jio),
          q7lgxw = z59gdw['wxdown']({ 'url': zgw7x, 'filePath': b80r1y, 'success': function (ohj3m) {
          if (ohj3m['statusCode'] === 0xc8) z59gdw['readFile'](ohj3m['filePath'], qmjiho, ijh4, h3jio);
        }, 'fail': function (_ca) {
          ijh4 != null && ijh4['runWith']([0x1, _ca]);
        } });q7lgxw['onProgressUpdate'](function (e_snv) {
        ijh4 != null && ijh4['runWith']([0x2, e_snv['progress']]);
      });
    }, z59gdw['readFile'] = function (qojmi, oiml, u$evsn, mjioh3) {
      oiml === void 0x0 && (oiml = 'ascill'), mjioh3 === void 0x0 && (mjioh3 = ''), z59gdw['fs']['readFile']({ 'filePath': qojmi, 'encoding': oiml, 'success': function (_6ar) {
          if (qojmi['indexOf']('http://') != -0x1 || qojmi['indexOf']('https://') != -0x1) z59gdw['onFileUpdate'](qojmi, mjioh3);u$evsn != null && u$evsn['runWith']([0x0, _6ar]);
        }, 'fail': function (p3jfh4) {
          if (p3jfh4) u$evsn != null && u$evsn['runWith']([0x1, p3jfh4]);
        } });
    }, z59gdw['downImg'] = function (c806r1, t9d5z2, jp4fu) {
      jp4fu === void 0x0 && (jp4fu = '');var vs$_e = z59gdw['wxdown']({ 'url': c806r1, 'success': function (evns$) {
          evns$['statusCode'] === 0xc8 && z59gdw['copyFile'](evns$['tempFilePath'], jp4fu, t9d5z2);
        }, 'fail': function (limxo) {
          t9d5z2 != null && t9d5z2['runWith']([0x1, limxo]);
        } });
    }, z59gdw['copyFile'] = function (fusen$, e_s$v, esunv$) {
      var $vsnk_ = fusen$['split']('/'),
          uf3pj4 = $vsnk_[$vsnk_['length'] - 0x1],
          evu = e_s$v['split']('?')[0x0],
          ef34p = z59gdw['getFileInfo'](e_s$v),
          oh3ij = z59gdw['getFileNativePath'](uf3pj4);z59gdw['fs']['copyFile']({ 'srcPath': fusen$, 'destPath': oh3ij, 'success': function (vkc_) {
          if (!ef34p) z59gdw['onSaveFile'](e_s$v, uf3pj4), esunv$ != null && esunv$['runWith']([0x0]);else {
            if (ef34p['readyUrl'] != e_s$v) z59gdw['remove'](uf3pj4, e_s$v, esunv$);
          }
        }, 'fail': function (woqx7) {
          esunv$ != null && esunv$['runWith']([0x1, woqx7]);
        } });
    }, z59gdw['getFileNativePath'] = function (j34upf) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + j34upf;
    }, z59gdw['remove'] = function (g95dzt, zx79, xqmloi) {
      zx79 === void 0x0 && (zx79 = '');var nfe$u = z59gdw['getFileInfo'](zx79),
          r6c0a8 = z59gdw['getFileNativePath'](nfe$u['md5']);a6c80['loader']['clearRes'](nfe$u['readyUrl']), z59gdw['fs']['unlink']({ 'filePath': r6c0a8, 'success': function (w97gl) {
          if (zx79 != '') z59gdw['onSaveFile'](zx79, g95dzt);xqmloi != null && xqmloi['runWith']([0x0]);
        }, 'fail': function (kn6a_v) {} });
    }, z59gdw['onSaveFile'] = function (wg9d7, e$f4pu) {
      var mhoqj = wg9d7['split']('?')[0x0];z59gdw['filesListObj'][mhoqj] = { 'md5': e$f4pu, 'readyUrl': wg9d7 }, z59gdw['fs']['writeFile']({ 'filePath': z59gdw['fileNativeDir'] + '/' + z59gdw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z59gdw['filesListObj']), 'success': function (w7lg9x) {
          console['log']('写入测试测试成功：', w7lg9x);
        }, 'fail': function (qwlox) {
          console['log']('写入测试测试失败：', qwlox);
        } });
    }, z59gdw['existDir'] = function (o3mjih, v_$ne) {
      z59gdw['fs']['mkdir']({ 'dirPath': o3mjih, 'success': function (gxz79) {
          v_$ne != null && v_$ne['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t25d9) {
          if (t25d9['errMsg']['indexOf']('file already exists') != -0x1) z59gdw['readSync'](z59gdw['fileListName'], 'utf8', v_$ne);else v_$ne != null && v_$ne['runWith']([0x1, t25d9]);
        } });
    }, z59gdw['readSync'] = function (cr6801, $enusv, o7xlq, k6a_nv) {
      $enusv === void 0x0 && ($enusv = 'ascill'), k6a_nv === void 0x0 && (k6a_nv = '');var i7xo = z59gdw['getFileNativePath'](cr6801),
          e$uv;try {
        e$uv = z59gdw['fs']['readFileSync'](i7xo), o7xlq != null && o7xlq['runWith']([0x0, { 'data': e$uv }]);
      } catch (x7oql) {
        o7xlq != null && o7xlq['runWith']([0x1]);
      }
    }, z59gdw['readCache'] = function () {}, z59gdw['writeCache'] = function (dzg59) {
      var bcr18 = readyUrl['split']('?')[0x0];z59gdw['filesListObj'][bcr18] = { 'md5': md5Name, 'readyUrl': readyUrl }, z59gdw['fs']['writeFile']({ 'filePath': z59gdw['fileNativeDir'] + '/' + z59gdw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z59gdw['filesListObj']), 'success': function (krc0a) {}, 'fail': function (d95tz) {} });
    }, z59gdw['setNativeFileDir'] = function (suf) {
      z59gdw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + suf;
    }, z59gdw['filesListObj'] = {}, z59gdw['fileNativeDir'] = null, z59gdw['fileListName'] = 'layaairfiles.txt', z59gdw['ziyuFileData'] = {}, n$v(z59gdw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), z59gdw;
  }(n$usfe),
      omlqhi = function (esv$nu) {
    function vs$n() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vs$n['__super']['call'](this), this['_sound'] = vs$n['_createSound']();
    }dg5wz(vs$n, 'laya.wx.mini.MiniSound', esv$nu);var hjm3p4 = vs$n['prototype'];return hjm3p4['load'] = function (xglqw7) {
      var hmiq = this;xglqw7 = kas_['formatURL'](xglqw7), this['url'] = xglqw7;if (vs$n['_audioCache'][xglqw7]) {
        this['event']('complete');return;
      }function nk$_sv() {
        if (vs$n['_null'] != undefined) hmiq['_sound']['onCanplay'](vs$n['_null']), hmiq['_sound']['onError'](vs$n['_null']);else try {
          hmiq['_sound']['onCanplay'](null), hmiq['_sound']['onError'](null), vs$n['_null'] = null;
        } catch (fp43jh) {
          console['warn']('[wxmini] _clearSound:' + fp43jh), hmiq['_sound']['onCanplay'](ybr81), hmiq['_sound']['onError'](ybr81), vs$n['_null'] = ybr81;
        }
      }function nv_e() {
        nk$_sv(), $sevu['loaded'] = !![], $sevu['event']('complete'), vs$n['_audioCache'][$sevu['url']] = $sevu;
      }function avk_s(jhim43) {
        console['error']('errCode=' + jhim43['errCode'] + '  errMsg=' + jhim43['errMsg']), nk$_sv(), $sevu['event']('error');
      }function ybr81() {}this['_sound']['onCanplay'](nv_e), this['_sound']['onError'](avk_s), this['_sound']['src'] = xglqw7;var $sevu = this;
    }, hjm3p4['play'] = function ($_svk, qmliho) {
      $_svk === void 0x0 && ($_svk = 0x0), qmliho === void 0x0 && (qmliho = 0x0);var oimj3h;if (this['url'] == xw97['_tMusic']) {
        if (!vs$n['_musicAudio']) vs$n['_musicAudio'] = vs$n['_createSound']();oimj3h = vs$n['_musicAudio'];
      } else oimj3h = vs$n['_createSound']();oimj3h['src'] = this['url'];var omjqi = new u34(oimj3h);return omjqi['url'] = this['url'], omjqi['loops'] = qmliho, omjqi['startTime'] = $_svk, omjqi['play'](), xw97['addChannel'](omjqi), omjqi;
    }, hjm3p4['dispose'] = function () {
      var avk6 = vs$n['_audioCache'][this['url']];avk6 && (avk6['src'] = '', delete vs$n['_audioCache'][this['url']]);
    }, r8y(0x0, hjm3p4, 'duration', function () {
      return this['_sound']['duration'];
    }), vs$n['_createSound'] = function () {
      return vs$n['_id']++, nv$e_s['window']['wx']['createInnerAudioContext']();
    }, vs$n['_musicAudio'] = null, vs$n['_id'] = 0x0, vs$n['_audioCache'] = {}, vs$n['_null'] = undefined, vs$n;
  }(n$usfe),
      u34 = function (ihoml) {
    function puf$4e(rcka) {
      this['_audio'] = null, this['_onEnd'] = null, puf$4e['__super']['call'](this), this['_audio'] = rcka, this['_onEnd'] = zd95t2['bind'](this['__onEnd'], this), rcka['onEnded'](this['_onEnd']);
    }dg5wz(puf$4e, 'laya.wx.mini.MiniSoundChannel', ihoml);var vn_$k = puf$4e['prototype'];return vn_$k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (a6c80['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, vn_$k['__onNull'] = function () {}, vn_$k['play'] = function () {
      this['isStopped'] = ![], xw97['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, vn_$k['stop'] = function () {
      this['isStopped'] = !![], xw97['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (puf$4e['_null'] != undefined) this['_audio']['onEnded'](puf$4e['_null']);else try {
        this['_audio']['onEnded'](null), puf$4e['_null'] = null;
      } catch (ck_6a) {
        console['warn']('[wxmini] stop:' + ck_6a), this['_audio']['onEnded'](zd95t2['bind'](this['__onNull'], this)), puf$4e['_null'] = zd95t2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, vn_$k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, vn_$k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xw97['addChannel'](this), this['_audio']['play']();
    }, r8y(0x0, vn_$k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), r8y(0x0, vn_$k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), r8y(0x0, vn_$k, 'volume', function () {
      return 0x1;
    }, function (_akns) {}), puf$4e['_null'] = undefined, puf$4e;
  }(ca6vk);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $envus in Laya) {
    var usen = Laya[$envus];usen && usen['__isclass'] && (exports[$envus] = usen);
  }
});