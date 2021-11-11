var o = wx.$U;
(function (window, document, j4upf) {
  var m3hioj = j4upf['un'],
      arc806 = j4upf['uns'],
      m43ihj = j4upf['static'],
      $kns_v = j4upf['class'],
      l9w = j4upf['getset'],
      up4$fe = j4upf['__newvec'],
      x9z = laya['utils']['Browser'],
      ka_vn6 = laya['events']['Event'],
      x97lg = laya['events']['EventDispatcher'],
      jmio3h = laya['resource']['HTMLImage'],
      _6avk = laya['utils']['Handler'],
      _v$ksn = laya['display']['Input'],
      e4pu$ = laya['net']['Loader'],
      a08cr = laya['maths']['Matrix'],
      efp43 = laya['renders']['Render'],
      qmihol = laya['utils']['RunDriver'],
      ckv = laya['media']['Sound'],
      mo3jh = laya['media']['SoundChannel'],
      fep$u = laya['media']['SoundManager'],
      iqohl = laya['display']['Stage'],
      m34pj = laya['net']['URL'],
      _anvs = laya['utils']['Utils'],
      nk6av = function () {
    function ih34mj() {}return $kns_v(ih34mj, 'laya.wx.mini.MiniAdpter'), ih34mj['getJson'] = function (rc_k6) {
      return JSON['parse'](rc_k6);
    }, ih34mj['init'] = function (c810br, mh3joi) {
      c810br === void 0x0 && (c810br = ![]), mh3joi === void 0x0 && (mh3joi = ![]);if (ih34mj['_inited']) return;ih34mj['window'] = window;if (ih34mj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ih34mj['_inited'] = !![], ih34mj['isZiYu'] = mh3joi, ih34mj['isPosMsgYu'] = c810br, ih34mj['EnvConfig'] = {}, !ih34mj['isZiYu'] && (j4hm['setNativeFileDir']('/layaairGame'), j4hm['existDir'](j4hm['fileNativeDir'], _6avk['create'](ih34mj, ih34mj['onMkdirCallBack']))), ih34mj['window']['focus'] = function () {}, j4upf['getUrlPath'] = function () {}, ih34mj['window']['logtime'] = function (m3p4j) {}, ih34mj['window']['alertTimeLog'] = function (r6c018) {}, ih34mj['window']['resetShareInfo'] = function () {}, ih34mj['window']['CanvasRenderingContext2D'] = function () {}, ih34mj['window']['CanvasRenderingContext2D']['prototype'] = ih34mj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ih34mj['window']['document']['body']['appendChild'] = function () {}, ih34mj['EnvConfig']['pixelRatioInt'] = 0x0, qmihol['getPixelRatio'] = ih34mj['pixelRatio'], ih34mj['_preCreateElement'] = x9z['createElement'], x9z['createElement'] = ih34mj['createElement'], qmihol['createShaderCondition'] = ih34mj['createShaderCondition'], _anvs['parseXMLFromString'] = ih34mj['parseXMLFromString'], _v$ksn['_createInputElement'] = iolhmq['_createInputElement'], ih34mj['EnvConfig']['load'] = e4pu$['prototype']['load'], e4pu$['prototype']['load'] = ih4j['prototype']['load'], ih34mj['isZiYu'] && c810br && wx['onMessage'](function (qmihlo) {
        qmihlo['isLoad'] && (j4hm['ziyuFileData'][qmihlo['url']] = qmihlo['data']);
      });
    }, ih34mj['onMkdirCallBack'] = function (hf4j3, m3hio) {
      if (!hf4j3) j4hm['filesListObj'] = JSON['parse'](m3hio['data']);
    }, ih34mj['pixelRatio'] = function () {
      if (!ih34mj['EnvConfig']['pixelRatioInt']) try {
        var z9td5g = wx['getSystemInfoSync']();return ih34mj['EnvConfig']['pixelRatioInt'] = z9td5g['pixelRatio'], z9td5g = z9td5g, z9td5g['pixelRatio'];
      } catch (sv$_n) {}return ih34mj['EnvConfig']['pixelRatioInt'];
    }, ih34mj['createElement'] = function (_ksnv) {
      if (_ksnv == 'canvas') {
        var c816;return ih34mj['idx'] == 0x1 ? ih34mj['isZiYu'] ? (c816 = sharedCanvas, c816['style'] = {}) : c816 = window['canvas'] : c816 = window['wx']['createCanvas'](), ih34mj['idx']++, c816;
      } else {
        if (_ksnv == 'textarea' || _ksnv == 'input') return ih34mj['onCreateInput'](_ksnv);else {
          if (_ksnv == 'div') {
            var b0rc = ih34mj['_preCreateElement'](_ksnv);return b0rc['contains'] = function (xliqom) {
              return null;
            }, b0rc['removeChild'] = function (kn$_vs) {}, b0rc;
          } else return ih34mj['_preCreateElement'](_ksnv);
        }
      }
    }, ih34mj['onCreateInput'] = function ($ve) {
      var ar68c = ih34mj['_preCreateElement']($ve);return ar68c['focus'] = iolhmq['wxinputFocus'], ar68c['blur'] = iolhmq['wxinputblur'], ar68c['style'] = {}, ar68c['value'] = 0x0, ar68c['parentElement'] = {}, ar68c['placeholder'] = {}, ar68c['type'] = {}, ar68c['setColor'] = function (_k$nvs) {}, ar68c['setType'] = function (td2z) {}, ar68c['setFontFace'] = function (vka6_n) {}, ar68c['addEventListener'] = function (zwgd59) {}, ar68c['contains'] = function (hjqm) {
        return null;
      }, ar68c['removeChild'] = function (p3ufj4) {}, ar68c;
    }, ih34mj['createShaderCondition'] = function (c1r86) {
      var johm3i = this,
          ca0k6 = function () {
        var ixmo = c1r86;return johm3i[c1r86['replace']('this.', '')];
      };return ca0k6;
    }, ih34mj['EnvConfig'] = null, ih34mj['window'] = null, ih34mj['_preCreateElement'] = null, ih34mj['_inited'] = ![], ih34mj['wxRequest'] = null, ih34mj['systemInfo'] = null, ih34mj['version'] = '0.0.1', ih34mj['isZiYu'] = ![], ih34mj['isPosMsgYu'] = ![], ih34mj['parseXMLFromString'] = function (loqhmi) {
      var nef$, ry180b;loqhmi = loqhmi['replace'](/>\s+</g, '><');try {
        nef$ = new window['Parser']['DOMParser']()['parseFromString'](loqhmi, 'text/xml');
      } catch (p34h) {
        throw '需要引入xml解析库文件';
      }return nef$;
    }, ih34mj['idx'] = 0x1, ih34mj;
  }(),
      rc1608 = function () {
    function z9x7w() {}$kns_v(z9x7w, 'laya.wx.mini.MiniImage');var k0rc6 = z9x7w['prototype'];return k0rc6['_loadImage'] = function (s$nevu) {
      var gxw7l = this,
          kna6_v = ![];s$nevu['indexOf']('layaNativeDir/') == -0x1 && (kna6_v = !![], s$nevu = m34pj['formatURL'](s$nevu));if (!j4hm['getFileInfo'](s$nevu)) {
        if (s$nevu['indexOf']('http://') != -0x1 || s$nevu['indexOf']('https://') != -0x1) j4hm['downImg'](s$nevu, new _6avk(z9x7w, z9x7w['onDownImgCallBack'], [s$nevu, gxw7l]), s$nevu);else z9x7w['onCreateImage'](s$nevu, gxw7l, !![]);
      } else z9x7w['onCreateImage'](s$nevu, gxw7l, !kna6_v);
    }, z9x7w['onDownImgCallBack'] = function (es_v$n, lw7q, lxgw97) {
      if (!lxgw97) z9x7w['onCreateImage'](es_v$n, lw7q);else lw7q['onError'](null);
    }, z9x7w['onCreateImage'] = function (ixoq, pj34u, wzgd) {
      wzgd === void 0x0 && (wzgd = ![]);var olxw7;if (!wzgd) {
        var b0yr = j4hm['getFileInfo'](ixoq),
            c1806r = b0yr['md5'];olxw7 = j4hm['getFileNativePath'](c1806r);
      } else olxw7 = ixoq;if (pj34u['imgCache'] == null) pj34u['imgCache'] = {};var i3jm;function p34eu() {
        i3jm['onload'] = null, i3jm['onerror'] = null, delete pj34u['imgCache'][ixoq];
      };var $sfun = function () {
        p34eu(), pj34u['onLoaded'](i3jm);
      },
          zw9dg7 = function () {
        p34eu(), pj34u['event']('error', 'Load image failed');
      };pj34u['_type'] == 'nativeimage' ? (i3jm = new x9z['window']['Image'](), i3jm['crossOrigin'] = '', i3jm['onload'] = $sfun, i3jm['onerror'] = zw9dg7, i3jm['src'] = olxw7, pj34u['imgCache'][ixoq] = i3jm) : new jmio3h['create'](olxw7, { 'onload': $sfun, 'onerror': zw9dg7, 'onCreate': function (efun$) {
          i3jm = efun$, pj34u['imgCache'][ixoq] = efun$;
        } });
    }, z9x7w;
  }(),
      iolhmq = function () {
    function nk$_sv() {}return $kns_v(nk$_sv, 'laya.wx.mini.MiniInput'), nk$_sv['_createInputElement'] = function () {
      _v$ksn['_initInput'](_v$ksn['area'] = x9z['createElement']('textarea')), _v$ksn['_initInput'](_v$ksn['input'] = x9z['createElement']('input')), _v$ksn['inputContainer'] = x9z['createElement']('div'), _v$ksn['inputContainer']['style']['position'] = 'absolute', _v$ksn['inputContainer']['style']['zIndex'] = 0x186a0, x9z['container']['appendChild'](_v$ksn['inputContainer']), _v$ksn['inputContainer']['setPos'] = function (upefs$, c08r1b) {
        _v$ksn['inputContainer']['style']['left'] = upefs$ + 'px', _v$ksn['inputContainer']['style']['top'] = c08r1b + 'px';
      }, j4upf['stage']['on']('resize', null, nk$_sv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (eup$f) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), fep$u['_soundClass'] = rkc_a, fep$u['_musicClass'] = rkc_a;
    }, nk$_sv['_onStageResize'] = function () {
      var esnu$ = j4upf['stage']['_canvasTransform']['identity']();esnu$['scale'](x9z['width'] / efp43['canvas']['width'] / qmihol['getPixelRatio'](), x9z['height'] / efp43['canvas']['height'] / qmihol['getPixelRatio']());
    }, nk$_sv['wxinputFocus'] = function (knv6a) {
      var snf$e = _v$ksn['inputElement']['target'];if (snf$e && !snf$e['editable']) return;nk6av['window']['wx']['offKeyboardConfirm'](), nk6av['window']['wx']['offKeyboardInput'](), nk6av['window']['wx']['showKeyboard']({ 'defaultValue': snf$e['text'], 'maxLength': snf$e['maxChars'], 'multiple': snf$e['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xwo7l) {}, 'fail': function (oqihjm) {} }), nk6av['window']['wx']['onKeyboardConfirm'](function (_kvan6) {
        var wl7gx9 = _kvan6 ? _kvan6['value'] : '';snf$e['text'] = wl7gx9, snf$e['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nk6av['window']['wx']['onKeyboardInput'](function (w97gl) {
        var gw7z9 = w97gl ? w97gl['value'] : '';if (!snf$e['multiline']) {
          if (gw7z9['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }snf$e['text'] = gw7z9, snf$e['event']('input');
      });
    }, nk$_sv['inputEnter'] = function () {
      _v$ksn['inputElement']['target']['focus'] = ![];
    }, nk$_sv['wxinputblur'] = function () {
      nk$_sv['hideKeyboard']();
    }, nk$_sv['hideKeyboard'] = function () {
      nk6av['window']['wx']['offKeyboardConfirm'](), nk6av['window']['wx']['offKeyboardInput'](), nk6av['window']['wx']['hideKeyboard']({ 'success': function (ve$n_) {
          console['log']('隐藏键盘');
        }, 'fail': function (kva6c) {
          console['log']('隐藏键盘出错:' + (kva6c ? kva6c['errMsg'] : ''));
        } });
    }, nk$_sv;
  }(),
      ih4j = function () {
    function $unsf() {}$kns_v($unsf, 'laya.wx.mini.MiniLoader');var seu$fn = $unsf['prototype'];return seu$fn['load'] = function (e$vns, kacr6, unsfe, va6nk, hj4pf) {
      unsfe === void 0x0 && (unsfe = !![]), hj4pf === void 0x0 && (hj4pf = ![]);var j3phf4 = this;j3phf4['_url'] = e$vns;if (e$vns['indexOf']('data:image') === 0x0) j3phf4['_type'] = kacr6 = 'image';else j3phf4['_type'] = kacr6 || (kacr6 = j3phf4['getTypeFromUrl'](e$vns));j3phf4['_cache'] = unsfe, j3phf4['_data'] = null;var c06k = 'ascii';if (e$vns['indexOf']('.fnt') != -0x1) c06k = 'utf8';else kacr6 == 'arraybuffer' && (c06k = '');;var suepf$ = _anvs['getFileExtension'](e$vns);if ($unsf['_fileTypeArr']['indexOf'](suepf$) != -0x1) nk6av['EnvConfig']['load']['call'](this, e$vns, kacr6, unsfe, va6nk, hj4pf);else {
        if (!j4hm['getFileInfo'](e$vns)) {
          if (e$vns['indexOf']('layaNativeDir/') != -0x1) {
            if (nk6av['isZiYu']) {
              var ilomhq = j4hm['ziyuFileData'][e$vns];j3phf4['onLoaded'](ilomhq);return;
            } else {
              cosnole['log']('read read'), j4hm['read'](e$vns, c06k, new _6avk($unsf, $unsf['onReadNativeCallBack'], [c06k, e$vns, kacr6, unsfe, va6nk, hj4pf, j3phf4]));return;
            }
          }if (m34pj['rootPath'] == '') var r6ka0c = e$vns;else r6ka0c = e$vns['split'](m34pj['rootPath'])[0x0];e$vns['indexOf']('http://') != -0x1 || e$vns['indexOf']('https://') != -0x1 ? nk6av['EnvConfig']['load']['call'](j3phf4, e$vns, kacr6, unsfe, va6nk, hj4pf) : j4hm['readFile'](r6ka0c, c06k, new _6avk($unsf, $unsf['onReadNativeCallBack'], [c06k, e$vns, kacr6, unsfe, va6nk, hj4pf, j3phf4]), e$vns);
        } else nk6av['EnvConfig']['load']['call'](this, e$vns, kacr6, unsfe, va6nk, hj4pf);
      }
    }, seu$fn['resMgrLoad'] = function (qoli7x, td5zg, qxolw, i7qx, sk$_n, f$4, f$eu4) {
      qxolw === void 0x0 && (qxolw = 0x0), i7qx === void 0x0 && (i7qx = ![]), sk$_n === void 0x0 && (sk$_n = ![]), f$4 === void 0x0 && (f$4 = 0x0), f$eu4 === void 0x0 && (f$eu4 = 0x3), qoli7x['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', qoli7x), nk6av['EnvConfig']['resMgrLoad'](qoli7x, (vnas_k, omixlq, z295d) => {
        $unsf['prototype']['resMgrLoadCallBack'](vnas_k, omixlq, z295d, td5zg);
      }, qxolw, i7qx, sk$_n, f$4, f$eu4);
    }, seu$fn['resMgrLoadCallBack'] = function (oil7, z7xgw9, n$fu, lmqoi) {
      console['log']('buff:::', oil7, n$fu, j4hm['fileNativeDir'] + '///' + j4hm['fileListName']), lmqoi(oil7, z7xgw9, n$fu);
    }, seu$fn['clearRes'] = function (lg7w, z95dtg) {
      z95dtg === void 0x0 && (z95dtg = ![]);var kvs = this;kvs['clearRes'](lg7w, z95dtg);var z5g9td = j4hm['getFileInfo'](lg7w);if (z5g9td && (lg7w['indexOf']('http://') != -0x1 || lg7w['indexOf']('https://') != -0x1)) {
        var e3pfu = z5g9td['md5'],
            f$sne = j4hm['getFileNativePath'](e3pfu);j4hm['remove'](f$sne);
      }
    }, $unsf['onReadNativeCallBack'] = function (lgwq, a_n6k, imholq, z95tgd, j4pf3, hf4p, c08b1r, jmioh, rk) {
      z95tgd === void 0x0 && (z95tgd = !![]), hf4p === void 0x0 && (hf4p = ![]), jmioh === void 0x0 && (jmioh = 0x0);if (!jmioh) {
        var fpj43u;if (imholq == 'json' || imholq == 'atlas') fpj43u = nk6av['getJson'](rk['data']);else imholq == 'xml' ? fpj43u = _anvs['parseXMLFromString'](rk['data']) : fpj43u = rk['data'];c08b1r['onLoaded'](fpj43u), !nk6av['isZiYu'] && nk6av['isPosMsgYu'] && imholq != 'arraybuffer' && wx['postMessage']({ 'url': a_n6k, 'data': fpj43u, 'isLoad': !![] });
      } else jmioh == 0x1 && nk6av['EnvConfig']['load']['call'](c08b1r, a_n6k, imholq, z95tgd, j4pf3, hf4p);
    }, m43ihj($unsf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $unsf;
  }(),
      j4hm = function (moqlh) {
    function _nes$() {
      _nes$['__super']['call'](this);;
    }return $kns_v(_nes$, 'laya.wx.mini.MiniFileMgr', moqlh), _nes$['isLoadFile'] = function (u4$pf) {
      return _nes$['_fileTypeArr']['indexOf'](u4$pf) != -0x1 ? !![] : ![];
    }, _nes$['getFileInfo'] = function (d59gw) {
      var $fupes = d59gw['split']('?')[0x0],
          y01rb8 = _nes$['filesListObj'][$fupes];if (y01rb8 == null) return null;else return y01rb8;return null;
    }, _nes$['onFileUpdate'] = function (mqijoh, ohqm) {
      var b8y1 = mqijoh['split']('/'),
          g5dz = b8y1[b8y1['length'] - 0x1],
          wl7xq = _nes$['getFileInfo'](ohqm);if (wl7xq == null) _nes$['onSaveFile'](ohqm, g5dz);else {
        if (wl7xq['readyUrl'] != ohqm) _nes$['remove'](g5dz, ohqm);
      }
    }, _nes$['exits'] = function (krc6_a, ep3u4) {
      var ka_s = _nes$['getFileNativePath'](krc6_a);_nes$['fs']['getFileInfo']({ 'filePath': ka_s, 'success': function (kv_sn$) {
          ep3u4 != null && ep3u4['runWith']([0x0, kv_sn$]);
        }, 'fail': function (g7lqxw) {
          ep3u4 != null && ep3u4['runWith']([0x1, g7lqxw]);
        } });
    }, _nes$['read'] = function (himj34, d9wz7g, x7lgqw, v$_nse) {
      d9wz7g === void 0x0 && (d9wz7g = 'ascill'), v$_nse === void 0x0 && (v$_nse = '');var h4pj3;v$_nse != '' ? h4pj3 = _nes$['getFileNativePath'](himj34) : h4pj3 = himj34, _nes$['fs']['readFile']({ 'filePath': h4pj3, 'encoding': d9wz7g, 'success': function (vkan) {
          x7lgqw != null && x7lgqw['runWith']([0x0, vkan]);
        }, 'fail': function (wqolx7) {
          if (wqolx7 && v$_nse != '') _nes$['down'](v$_nse, d9wz7g, x7lgqw, v$_nse);else x7lgqw != null && x7lgqw['runWith']([0x1]);
        } });
    }, _nes$['readNativeFile'] = function (p4fh3j, g5dt9z) {
      _nes$['fs']['readFile']({ 'filePath': p4fh3j, 'encoding': '', 'success': function (ckar) {
          g5dt9z != null && g5dt9z['runWith']([0x0]);
        }, 'fail': function (a_nsvk) {
          g5dt9z != null && g5dt9z['runWith']([0x1]);
        } });
    }, _nes$['down'] = function (fpu4e$, n$kv_s, ka_n6, lqoxi7) {
      n$kv_s === void 0x0 && (n$kv_s = 'ascill'), lqoxi7 === void 0x0 && (lqoxi7 = '');var wgxq7l = _nes$['getFileNativePath'](lqoxi7),
          q7xg = _nes$['wxdown']({ 'url': fpu4e$, 'filePath': wgxq7l, 'success': function (nv6ak_) {
          if (nv6ak_['statusCode'] === 0xc8) _nes$['readFile'](nv6ak_['filePath'], n$kv_s, ka_n6, lqoxi7);
        }, 'fail': function (pjh4m) {
          ka_n6 != null && ka_n6['runWith']([0x1, pjh4m]);
        } });q7xg['onProgressUpdate'](function (fp$ue) {
        ka_n6 != null && ka_n6['runWith']([0x2, fp$ue['progress']]);
      });
    }, _nes$['readFile'] = function (qlmo, ohiql, puj4f, mh3pj) {
      ohiql === void 0x0 && (ohiql = 'ascill'), mh3pj === void 0x0 && (mh3pj = ''), _nes$['fs']['readFile']({ 'filePath': qlmo, 'encoding': ohiql, 'success': function (by8r0) {
          if (qlmo['indexOf']('http://') != -0x1 || qlmo['indexOf']('https://') != -0x1) _nes$['onFileUpdate'](qlmo, mh3pj);puj4f != null && puj4f['runWith']([0x0, by8r0]);
        }, 'fail': function ($u4ef) {
          if ($u4ef) puj4f != null && puj4f['runWith']([0x1, $u4ef]);
        } });
    }, _nes$['downImg'] = function (lqhmo, f43upe, cvk6_a) {
      cvk6_a === void 0x0 && (cvk6_a = '');var crk0a6 = _nes$['wxdown']({ 'url': lqhmo, 'success': function (vnkas) {
          vnkas['statusCode'] === 0xc8 && _nes$['copyFile'](vnkas['tempFilePath'], cvk6_a, f43upe);
        }, 'fail': function (kca0r) {
          f43upe != null && f43upe['runWith']([0x1, kca0r]);
        } });
    }, _nes$['copyFile'] = function (z79wdg, $usfn, r6ck_a) {
      var zgt95 = z79wdg['split']('/'),
          omqlxi = zgt95[zgt95['length'] - 0x1],
          xlg97w = $usfn['split']('?')[0x0],
          p3fhj4 = _nes$['getFileInfo']($usfn),
          pjfh = _nes$['getFileNativePath'](omqlxi);_nes$['fs']['copyFile']({ 'srcPath': z79wdg, 'destPath': pjfh, 'success': function (h4jp3f) {
          if (!p3fhj4) _nes$['onSaveFile']($usfn, omqlxi), r6ck_a != null && r6ck_a['runWith']([0x0]);else {
            if (p3fhj4['readyUrl'] != $usfn) _nes$['remove'](omqlxi, $usfn, r6ck_a);
          }
        }, 'fail': function (ar0c6k) {
          r6ck_a != null && r6ck_a['runWith']([0x1, ar0c6k]);
        } });
    }, _nes$['getFileNativePath'] = function (snfue$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + snfue$;
    }, _nes$['remove'] = function (t59zdg, j4pu, $ve_s) {
      j4pu === void 0x0 && (j4pu = '');var w7zgd = _nes$['getFileInfo'](j4pu),
          jfp3u = _nes$['getFileNativePath'](w7zgd['md5']);j4upf['loader']['clearRes'](w7zgd['readyUrl']), _nes$['fs']['unlink']({ 'filePath': jfp3u, 'success': function (s$efun) {
          if (j4pu != '') _nes$['onSaveFile'](j4pu, t59zdg);$ve_s != null && $ve_s['runWith']([0x0]);
        }, 'fail': function (dzg5t9) {} });
    }, _nes$['onSaveFile'] = function (gxz79w, oi7lq) {
      var jqohi = gxz79w['split']('?')[0x0];_nes$['filesListObj'][jqohi] = { 'md5': oi7lq, 'readyUrl': gxz79w }, _nes$['fs']['writeFile']({ 'filePath': _nes$['fileNativeDir'] + '/' + _nes$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_nes$['filesListObj']), 'success': function (_$sve) {
          console['log']('写入测试测试成功：', _$sve);
        }, 'fail': function (qlhmoi) {
          console['log']('写入测试测试失败：', qlhmoi);
        } });
    }, _nes$['existDir'] = function (car06k, qloxmi) {
      _nes$['fs']['mkdir']({ 'dirPath': car06k, 'success': function (_$kvns) {
          qloxmi != null && qloxmi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (avnk_6) {
          if (avnk_6['errMsg']['indexOf']('file already exists') != -0x1) _nes$['readSync'](_nes$['fileListName'], 'utf8', qloxmi);else qloxmi != null && qloxmi['runWith']([0x1, avnk_6]);
        } });
    }, _nes$['readSync'] = function (loqihm, omlxq, fuj3p4, s$unf) {
      omlxq === void 0x0 && (omlxq = 'ascill'), s$unf === void 0x0 && (s$unf = '');var s$kv = _nes$['getFileNativePath'](loqihm),
          akc06r;try {
        akc06r = _nes$['fs']['readFileSync'](s$kv), fuj3p4 != null && fuj3p4['runWith']([0x0, { 'data': akc06r }]);
      } catch (a8r0c) {
        fuj3p4 != null && fuj3p4['runWith']([0x1]);
      }
    }, _nes$['readCache'] = function () {}, _nes$['writeCache'] = function (gw97zx) {
      var f$p4ue = readyUrl['split']('?')[0x0];_nes$['filesListObj'][f$p4ue] = { 'md5': md5Name, 'readyUrl': readyUrl }, _nes$['fs']['writeFile']({ 'filePath': _nes$['fileNativeDir'] + '/' + _nes$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_nes$['filesListObj']), 'success': function (oilqm) {}, 'fail': function ($nse) {} });
    }, _nes$['setNativeFileDir'] = function (a6_n) {
      _nes$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a6_n;
    }, _nes$['filesListObj'] = {}, _nes$['fileNativeDir'] = null, _nes$['fileListName'] = 'layaairfiles.txt', _nes$['ziyuFileData'] = {}, m43ihj(_nes$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _nes$;
  }(x97lg),
      rkc_a = function (ak_snv) {
    function cb801r() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cb801r['__super']['call'](this), this['_sound'] = cb801r['_createSound']();
    }$kns_v(cb801r, 'laya.wx.mini.MiniSound', ak_snv);var imoh = cb801r['prototype'];return imoh['load'] = function (e4f$p) {
      var rca68 = this;e4f$p = m34pj['formatURL'](e4f$p), this['url'] = e4f$p;if (cb801r['_audioCache'][e4f$p]) {
        this['event']('complete');return;
      }function hmli() {
        if (cb801r['_null'] != undefined) rca68['_sound']['onCanplay'](cb801r['_null']), rca68['_sound']['onError'](cb801r['_null']);else try {
          rca68['_sound']['onCanplay'](null), rca68['_sound']['onError'](null), cb801r['_null'] = null;
        } catch ($pusf) {
          console['warn']('[wxmini] _clearSound:' + $pusf), rca68['_sound']['onCanplay'](jf4h3), rca68['_sound']['onError'](jf4h3), cb801r['_null'] = jf4h3;
        }
      }function _vk6ac() {
        hmli(), $sk['loaded'] = !![], $sk['event']('complete'), cb801r['_audioCache'][$sk['url']] = $sk;
      }function nuse$v($4efp) {
        console['error']('errCode=' + $4efp['errCode'] + '  errMsg=' + $4efp['errMsg']), hmli(), $sk['event']('error');
      }function jf4h3() {}this['_sound']['onCanplay'](_vk6ac), this['_sound']['onError'](nuse$v), this['_sound']['src'] = e4f$p;var $sk = this;
    }, imoh['play'] = function (dzt5g, s$efp) {
      dzt5g === void 0x0 && (dzt5g = 0x0), s$efp === void 0x0 && (s$efp = 0x0);var himlqo;if (this['url'] == fep$u['_tMusic']) {
        if (!cb801r['_musicAudio']) cb801r['_musicAudio'] = cb801r['_createSound']();himlqo = cb801r['_musicAudio'];
      } else himlqo = cb801r['_createSound']();himlqo['src'] = this['url'];var nsav_ = new r08ca6(himlqo);return nsav_['url'] = this['url'], nsav_['loops'] = s$efp, nsav_['startTime'] = dzt5g, nsav_['play'](), fep$u['addChannel'](nsav_), nsav_;
    }, imoh['dispose'] = function () {
      var snv_ak = cb801r['_audioCache'][this['url']];snv_ak && (snv_ak['src'] = '', delete cb801r['_audioCache'][this['url']]);
    }, l9w(0x0, imoh, 'duration', function () {
      return this['_sound']['duration'];
    }), cb801r['_createSound'] = function () {
      return cb801r['_id']++, nk6av['window']['wx']['createInnerAudioContext']();
    }, cb801r['_musicAudio'] = null, cb801r['_id'] = 0x0, cb801r['_audioCache'] = {}, cb801r['_null'] = undefined, cb801r;
  }(x97lg),
      r08ca6 = function (esv_$n) {
    function gtz(qgw7lx) {
      this['_audio'] = null, this['_onEnd'] = null, gtz['__super']['call'](this), this['_audio'] = qgw7lx, this['_onEnd'] = _anvs['bind'](this['__onEnd'], this), qgw7lx['onEnded'](this['_onEnd']);
    }$kns_v(gtz, 'laya.wx.mini.MiniSoundChannel', esv_$n);var _k6vna = gtz['prototype'];return _k6vna['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (j4upf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _k6vna['__onNull'] = function () {}, _k6vna['play'] = function () {
      this['isStopped'] = ![], fep$u['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _k6vna['stop'] = function () {
      this['isStopped'] = !![], fep$u['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gtz['_null'] != undefined) this['_audio']['onEnded'](gtz['_null']);else try {
        this['_audio']['onEnded'](null), gtz['_null'] = null;
      } catch (ybr01) {
        console['warn']('[wxmini] stop:' + ybr01), this['_audio']['onEnded'](_anvs['bind'](this['__onNull'], this)), gtz['_null'] = _anvs['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _k6vna['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _k6vna['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], fep$u['addChannel'](this), this['_audio']['play']();
    }, l9w(0x0, _k6vna, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), l9w(0x0, _k6vna, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), l9w(0x0, _k6vna, 'volume', function () {
      return 0x1;
    }, function (qmlhoi) {}), gtz['_null'] = undefined, gtz;
  }(mo3jh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var s$uvne in Laya) {
    var skvan_ = Laya[s$uvne];skvan_ && skvan_['__isclass'] && (exports[s$uvne] = skvan_);
  }
});