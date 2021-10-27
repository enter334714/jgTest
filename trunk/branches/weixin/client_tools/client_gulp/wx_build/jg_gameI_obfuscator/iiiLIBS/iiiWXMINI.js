var Q = wx.$I;
(function (window, document, rx1) {
  var ag2zs = rx1['un'],
      wk_qh = rx1['uns'],
      e60t4u = rx1['static'],
      wkh_q = rx1['class'],
      ix9cr = rx1['getset'],
      criv9x = rx1['__newvec'],
      i1r9 = laya['utils']['Browser'],
      ctm4 = laya['events']['Event'],
      wzygk = laya['events']['EventDispatcher'],
      te604u = laya['resource']['HTMLImage'],
      v1x5f = laya['utils']['Handler'],
      r51hfv = laya['display']['Input'],
      fk_qhw = laya['net']['Loader'],
      $0e6tu = laya['maths']['Matrix'],
      akzwyg = laya['renders']['Render'],
      zywk_ = laya['utils']['RunDriver'],
      r9vc = laya['media']['Sound'],
      f1hr = laya['media']['SoundChannel'],
      s2pa83 = laya['media']['SoundManager'],
      n3jl8 = laya['display']['Stage'],
      hq1_f = laya['net']['URL'],
      mo9ibc = laya['utils']['Utils'],
      otcm = function () {
    function a2ygs() {}return wkh_q(a2ygs, 'laya.wx.mini.MiniAdpter'), a2ygs['getJson'] = function (zwgk) {
      return JSON['parse'](zwgk);
    }, a2ygs['init'] = function (mctb, d6eu) {
      mctb === void 0x0 && (mctb = ![]), d6eu === void 0x0 && (d6eu = ![]);if (a2ygs['_inited']) return;a2ygs['window'] = window;if (a2ygs['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;a2ygs['_inited'] = !![], a2ygs['isZiYu'] = d6eu, a2ygs['isPosMsgYu'] = mctb, a2ygs['EnvConfig'] = {}, !a2ygs['isZiYu'] && (j738l['setNativeFileDir']('/layaairGame'), j738l['existDir'](j738l['fileNativeDir'], v1x5f['create'](a2ygs, a2ygs['onMkdirCallBack']))), a2ygs['window']['focus'] = function () {}, rx1['getUrlPath'] = function () {}, a2ygs['window']['logtime'] = function (vr1i5) {}, a2ygs['window']['alertTimeLog'] = function (ob4mt) {}, a2ygs['window']['resetShareInfo'] = function () {}, a2ygs['window']['CanvasRenderingContext2D'] = function () {}, a2ygs['window']['CanvasRenderingContext2D']['prototype'] = a2ygs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], a2ygs['window']['document']['body']['appendChild'] = function () {}, a2ygs['EnvConfig']['pixelRatioInt'] = 0x0, zywk_['getPixelRatio'] = a2ygs['pixelRatio'], a2ygs['_preCreateElement'] = i1r9['createElement'], i1r9['createElement'] = a2ygs['createElement'], zywk_['createShaderCondition'] = a2ygs['createShaderCondition'], mo9ibc['parseXMLFromString'] = a2ygs['parseXMLFromString'], r51hfv['_createInputElement'] = zywak['_createInputElement'], a2ygs['EnvConfig']['load'] = fk_qhw['prototype']['load'], fk_qhw['prototype']['load'] = irc9x['prototype']['load'], a2ygs['isZiYu'] && mctb && wx['onMessage'](function (omctb) {
        omctb['isLoad'] && (j738l['ziyuFileData'][omctb['url']] = omctb['data']);
      });
    }, a2ygs['onMkdirCallBack'] = function (_1fhq, zgk_yw) {
      if (!_1fhq) j738l['filesListObj'] = JSON['parse'](zgk_yw['data']);
    }, a2ygs['pixelRatio'] = function () {
      if (!a2ygs['EnvConfig']['pixelRatioInt']) try {
        var s3ap28 = wx['getSystemInfoSync']();return a2ygs['EnvConfig']['pixelRatioInt'] = s3ap28['pixelRatio'], s3ap28 = s3ap28, s3ap28['pixelRatio'];
      } catch (q_hfk) {}return a2ygs['EnvConfig']['pixelRatioInt'];
    }, a2ygs['createElement'] = function (cotmb) {
      if (cotmb == 'canvas') {
        var ciomb9;return a2ygs['idx'] == 0x1 ? a2ygs['isZiYu'] ? (ciomb9 = sharedCanvas, ciomb9['style'] = {}) : ciomb9 = window['canvas'] : ciomb9 = window['wx']['createCanvas'](), a2ygs['idx']++, ciomb9;
      } else {
        if (cotmb == 'textarea' || cotmb == 'input') return a2ygs['onCreateInput'](cotmb);else {
          if (cotmb == 'div') {
            var a2zgy = a2ygs['_preCreateElement'](cotmb);return a2zgy['contains'] = function (zgykwa) {
              return null;
            }, a2zgy['removeChild'] = function (zsyp2a) {}, a2zgy;
          } else return a2ygs['_preCreateElement'](cotmb);
        }
      }
    }, a2ygs['onCreateInput'] = function (v9rix1) {
      var wkqyg_ = a2ygs['_preCreateElement'](v9rix1);return wkqyg_['focus'] = zywak['wxinputFocus'], wkqyg_['blur'] = zywak['wxinputblur'], wkqyg_['style'] = {}, wkqyg_['value'] = 0x0, wkqyg_['parentElement'] = {}, wkqyg_['placeholder'] = {}, wkqyg_['type'] = {}, wkqyg_['setColor'] = function (_fqwkh) {}, wkqyg_['setType'] = function (h5vrf1) {}, wkqyg_['setFontFace'] = function (wky_g) {}, wkqyg_['addEventListener'] = function (aps832) {}, wkqyg_['contains'] = function (iv9r1) {
        return null;
      }, wkqyg_['removeChild'] = function ($t06) {}, wkqyg_;
    }, a2ygs['createShaderCondition'] = function (g_wqyk) {
      var xf51vr = this,
          t4bmo = function () {
        var ixcr9 = g_wqyk;return xf51vr[g_wqyk['replace']('this.', '')];
      };return t4bmo;
    }, a2ygs['EnvConfig'] = null, a2ygs['window'] = null, a2ygs['_preCreateElement'] = null, a2ygs['_inited'] = ![], a2ygs['wxRequest'] = null, a2ygs['systemInfo'] = null, a2ygs['version'] = '0.0.1', a2ygs['isZiYu'] = ![], a2ygs['isPosMsgYu'] = ![], a2ygs['parseXMLFromString'] = function (f5vqh1) {
      var d0$e6u, _kfwqh;f5vqh1 = f5vqh1['replace'](/>\s+</g, '><');try {
        d0$e6u = new window['Parser']['DOMParser']()['parseFromString'](f5vqh1, 'text/xml');
      } catch (u046te) {
        throw '需要引入xml解析库文件';
      }return d0$e6u;
    }, a2ygs['idx'] = 0x1, a2ygs;
  }(),
      t40u = function () {
    function vfr1x5() {}wkh_q(vfr1x5, 'laya.wx.mini.MiniImage');var rxo9i = vfr1x5['prototype'];return rxo9i['_loadImage'] = function (mt046) {
      var mu6t = this,
          wyqkg = ![];mt046['indexOf']('layaNativeDir/') == -0x1 && (wyqkg = !![], mt046 = hq1_f['formatURL'](mt046));if (!j738l['getFileInfo'](mt046)) {
        if (mt046['indexOf']('http://') != -0x1 || mt046['indexOf']('https://') != -0x1) j738l['downImg'](mt046, new v1x5f(vfr1x5, vfr1x5['onDownImgCallBack'], [mt046, mu6t]), mt046);else vfr1x5['onCreateImage'](mt046, mu6t, !![]);
      } else vfr1x5['onCreateImage'](mt046, mu6t, !wyqkg);
    }, vfr1x5['onDownImgCallBack'] = function (io9mcb, gwqhk, oix9cr) {
      if (!oix9cr) vfr1x5['onCreateImage'](io9mcb, gwqhk);else gwqhk['onError'](null);
    }, vfr1x5['onCreateImage'] = function (hr51vf, vrix5, mc9boi) {
      mc9boi === void 0x0 && (mc9boi = ![]);var h_qkfw;if (!mc9boi) {
        var q_ykwg = j738l['getFileInfo'](hr51vf),
            _fqh1 = q_ykwg['md5'];h_qkfw = j738l['getFileNativePath'](_fqh1);
      } else h_qkfw = hr51vf;if (vrix5['imgCache'] == null) vrix5['imgCache'] = {};var v9ri1x;function awyg2() {
        v9ri1x['onload'] = null, v9ri1x['onerror'] = null, delete vrix5['imgCache'][hr51vf];
      };var hfv15 = function () {
        awyg2(), vrix5['onLoaded'](v9ri1x);
      },
          h_f5 = function () {
        awyg2(), vrix5['event']('error', 'Load image failed');
      };vrix5['_type'] == 'nativeimage' ? (v9ri1x = new i1r9['window']['Image'](), v9ri1x['crossOrigin'] = '', v9ri1x['onload'] = hfv15, v9ri1x['onerror'] = h_f5, v9ri1x['src'] = h_qkfw, vrix5['imgCache'][hr51vf] = v9ri1x) : new te604u['create'](h_qkfw, { 'onload': hfv15, 'onerror': h_f5, 'onCreate': function (cob94) {
          v9ri1x = cob94, vrix5['imgCache'][hr51vf] = cob94;
        } });
    }, vfr1x5;
  }(),
      zywak = function () {
    function m06t4u() {}return wkh_q(m06t4u, 'laya.wx.mini.MiniInput'), m06t4u['_createInputElement'] = function () {
      r51hfv['_initInput'](r51hfv['area'] = i1r9['createElement']('textarea')), r51hfv['_initInput'](r51hfv['input'] = i1r9['createElement']('input')), r51hfv['inputContainer'] = i1r9['createElement']('div'), r51hfv['inputContainer']['style']['position'] = 'absolute', r51hfv['inputContainer']['style']['zIndex'] = 0x186a0, i1r9['container']['appendChild'](r51hfv['inputContainer']), r51hfv['inputContainer']['setPos'] = function (g_kq, moi9c) {
        r51hfv['inputContainer']['style']['left'] = g_kq + 'px', r51hfv['inputContainer']['style']['top'] = moi9c + 'px';
      }, rx1['stage']['on']('resize', null, m06t4u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a2p83s) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), s2pa83['_soundClass'] = irxoc, s2pa83['_musicClass'] = irxoc;
    }, m06t4u['_onStageResize'] = function () {
      var u6m = rx1['stage']['_canvasTransform']['identity']();u6m['scale'](i1r9['width'] / akzwyg['canvas']['width'] / zywk_['getPixelRatio'](), i1r9['height'] / akzwyg['canvas']['height'] / zywk_['getPixelRatio']());
    }, m06t4u['wxinputFocus'] = function (_f1qh5) {
      var k_qyg = r51hfv['inputElement']['target'];if (k_qyg && !k_qyg['editable']) return;otcm['window']['wx']['offKeyboardConfirm'](), otcm['window']['wx']['offKeyboardInput'](), otcm['window']['wx']['showKeyboard']({ 'defaultValue': k_qyg['text'], 'maxLength': k_qyg['maxChars'], 'multiple': k_qyg['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hf5_k) {}, 'fail': function (b60mt) {} }), otcm['window']['wx']['onKeyboardConfirm'](function (wgk_z) {
        var ute406 = wgk_z ? wgk_z['value'] : '';k_qyg['text'] = ute406, k_qyg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), otcm['window']['wx']['onKeyboardInput'](function (l83pj) {
        var ywkz_ = l83pj ? l83pj['value'] : '';if (!k_qyg['multiline']) {
          if (ywkz_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k_qyg['text'] = ywkz_, k_qyg['event']('input');
      });
    }, m06t4u['inputEnter'] = function () {
      r51hfv['inputElement']['target']['focus'] = ![];
    }, m06t4u['wxinputblur'] = function () {
      m06t4u['hideKeyboard']();
    }, m06t4u['hideKeyboard'] = function () {
      otcm['window']['wx']['offKeyboardConfirm'](), otcm['window']['wx']['offKeyboardInput'](), otcm['window']['wx']['hideKeyboard']({ 'success': function (u60e4) {
          console['log']('隐藏键盘');
        }, 'fail': function (v51rfx) {
          console['log']('隐藏键盘出错:' + (v51rfx ? v51rfx['errMsg'] : ''));
        } });
    }, m06t4u;
  }(),
      irc9x = function () {
    function zgway2() {}wkh_q(zgway2, 'laya.wx.mini.MiniLoader');var q15vh = zgway2['prototype'];return q15vh['load'] = function (k_qhfw, l83sp7, rh1f, a2y, x1rvf5) {
      rh1f === void 0x0 && (rh1f = !![]), x1rvf5 === void 0x0 && (x1rvf5 = ![]);var p3lj = this;p3lj['_url'] = k_qhfw;if (k_qhfw['indexOf']('data:image') === 0x0) p3lj['_type'] = l83sp7 = 'image';else p3lj['_type'] = l83sp7 || (l83sp7 = p3lj['getTypeFromUrl'](k_qhfw));p3lj['_cache'] = rh1f, p3lj['_data'] = null;var g2yas = 'ascii';if (k_qhfw['indexOf']('.fnt') != -0x1) g2yas = 'utf8';else l83sp7 == 'arraybuffer' && (g2yas = '');;var _hf1q = mo9ibc['getFileExtension'](k_qhfw);if (zgway2['_fileTypeArr']['indexOf'](_hf1q) != -0x1) otcm['EnvConfig']['load']['call'](this, k_qhfw, l83sp7, rh1f, a2y, x1rvf5);else {
        if (!j738l['getFileInfo'](k_qhfw)) {
          if (k_qhfw['indexOf']('layaNativeDir/') != -0x1) {
            if (otcm['isZiYu']) {
              var ctob4 = j738l['ziyuFileData'][k_qhfw];p3lj['onLoaded'](ctob4);return;
            } else {
              cosnole['log']('read read'), j738l['read'](k_qhfw, g2yas, new v1x5f(zgway2, zgway2['onReadNativeCallBack'], [g2yas, k_qhfw, l83sp7, rh1f, a2y, x1rvf5, p3lj]));return;
            }
          }if (hq1_f['rootPath'] == '') var ir9xvc = k_qhfw;else ir9xvc = k_qhfw['split'](hq1_f['rootPath'])[0x0];k_qhfw['indexOf']('http://') != -0x1 || k_qhfw['indexOf']('https://') != -0x1 ? otcm['EnvConfig']['load']['call'](p3lj, k_qhfw, l83sp7, rh1f, a2y, x1rvf5) : j738l['readFile'](ir9xvc, g2yas, new v1x5f(zgway2, zgway2['onReadNativeCallBack'], [g2yas, k_qhfw, l83sp7, rh1f, a2y, x1rvf5, p3lj]), k_qhfw);
        } else otcm['EnvConfig']['load']['call'](this, k_qhfw, l83sp7, rh1f, a2y, x1rvf5);
      }
    }, q15vh['resMgrLoad'] = function (vcix9, f1q5_, azyw2g, u6e$d, wz_ykg, ed6$u0, fqh5_) {
      azyw2g === void 0x0 && (azyw2g = 0x0), u6e$d === void 0x0 && (u6e$d = ![]), wz_ykg === void 0x0 && (wz_ykg = ![]), ed6$u0 === void 0x0 && (ed6$u0 = 0x0), fqh5_ === void 0x0 && (fqh5_ = 0x3), vcix9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vcix9), otcm['EnvConfig']['resMgrLoad'](vcix9, (mu6t0, irvx51, _wkqh) => {
        zgway2['prototype']['resMgrLoadCallBack'](mu6t0, irvx51, _wkqh, f1q5_);
      }, azyw2g, u6e$d, wz_ykg, ed6$u0, fqh5_);
    }, q15vh['resMgrLoadCallBack'] = function (w_gqky, ln3j87, rx1vf, eu640t) {
      console['log']('buff:::', w_gqky, rx1vf, j738l['fileNativeDir'] + '///' + j738l['fileListName']), eu640t(w_gqky, ln3j87, rx1vf);
    }, q15vh['clearRes'] = function (kgyz_w, ixvr19) {
      ixvr19 === void 0x0 && (ixvr19 = ![]);var ri5vx1 = this;ri5vx1['clearRes'](kgyz_w, ixvr19);var rv9xi1 = j738l['getFileInfo'](kgyz_w);if (rv9xi1 && (kgyz_w['indexOf']('http://') != -0x1 || kgyz_w['indexOf']('https://') != -0x1)) {
        var kwf = rv9xi1['md5'],
            z2aps8 = j738l['getFileNativePath'](kwf);j738l['remove'](z2aps8);
      }
    }, zgway2['onReadNativeCallBack'] = function (sp732, cboim9, ygzs, gwy_, yzwgka, l3s7, qk_fh5, rfvx51, zs2gay) {
      gwy_ === void 0x0 && (gwy_ = !![]), l3s7 === void 0x0 && (l3s7 = ![]), rfvx51 === void 0x0 && (rfvx51 = 0x0);if (!rfvx51) {
        var u6te0;if (ygzs == 'json' || ygzs == 'atlas') u6te0 = otcm['getJson'](zs2gay['data']);else ygzs == 'xml' ? u6te0 = mo9ibc['parseXMLFromString'](zs2gay['data']) : u6te0 = zs2gay['data'];qk_fh5['onLoaded'](u6te0), !otcm['isZiYu'] && otcm['isPosMsgYu'] && ygzs != 'arraybuffer' && wx['postMessage']({ 'url': cboim9, 'data': u6te0, 'isLoad': !![] });
      } else rfvx51 == 0x1 && otcm['EnvConfig']['load']['call'](qk_fh5, cboim9, ygzs, gwy_, yzwgka, l3s7);
    }, e60t4u(zgway2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zgway2;
  }(),
      j738l = function (mu4t0) {
    function t$e0u6() {
      t$e0u6['__super']['call'](this);;
    }return wkh_q(t$e0u6, 'laya.wx.mini.MiniFileMgr', mu4t0), t$e0u6['isLoadFile'] = function (t0b4m) {
      return t$e0u6['_fileTypeArr']['indexOf'](t0b4m) != -0x1 ? !![] : ![];
    }, t$e0u6['getFileInfo'] = function (i9ocrx) {
      var cx9bo = i9ocrx['split']('?')[0x0],
          s3p28 = t$e0u6['filesListObj'][cx9bo];if (s3p28 == null) return null;else return s3p28;return null;
    }, t$e0u6['onFileUpdate'] = function (z2sga, gzkyw_) {
      var w2zga = z2sga['split']('/'),
          s37l8p = w2zga[w2zga['length'] - 0x1],
          hwq = t$e0u6['getFileInfo'](gzkyw_);if (hwq == null) t$e0u6['onSaveFile'](gzkyw_, s37l8p);else {
        if (hwq['readyUrl'] != gzkyw_) t$e0u6['remove'](s37l8p, gzkyw_);
      }
    }, t$e0u6['exits'] = function (mbt460, _qw) {
      var sz8p = t$e0u6['getFileNativePath'](mbt460);t$e0u6['fs']['getFileInfo']({ 'filePath': sz8p, 'success': function (z2aysp) {
          _qw != null && _qw['runWith']([0x0, z2aysp]);
        }, 'fail': function (hq_5f) {
          _qw != null && _qw['runWith']([0x1, hq_5f]);
        } });
    }, t$e0u6['read'] = function (rhf1, _1h5f, cxob, b4cmt) {
      _1h5f === void 0x0 && (_1h5f = 'ascill'), b4cmt === void 0x0 && (b4cmt = '');var s872p;b4cmt != '' ? s872p = t$e0u6['getFileNativePath'](rhf1) : s872p = rhf1, t$e0u6['fs']['readFile']({ 'filePath': s872p, 'encoding': _1h5f, 'success': function (v1hfr5) {
          cxob != null && cxob['runWith']([0x0, v1hfr5]);
        }, 'fail': function (x9rciv) {
          if (x9rciv && b4cmt != '') t$e0u6['down'](b4cmt, _1h5f, cxob, b4cmt);else cxob != null && cxob['runWith']([0x1]);
        } });
    }, t$e0u6['readNativeFile'] = function (qk_ywg, vrix15) {
      t$e0u6['fs']['readFile']({ 'filePath': qk_ywg, 'encoding': '', 'success': function (cvx9ri) {
          vrix15 != null && vrix15['runWith']([0x0]);
        }, 'fail': function (zayk) {
          vrix15 != null && vrix15['runWith']([0x1]);
        } });
    }, t$e0u6['down'] = function (t406, kgqwh, lj738n, hkw_g) {
      kgqwh === void 0x0 && (kgqwh = 'ascill'), hkw_g === void 0x0 && (hkw_g = '');var cmtob4 = t$e0u6['getFileNativePath'](hkw_g),
          _qkyg = t$e0u6['wxdown']({ 'url': t406, 'filePath': cmtob4, 'success': function (hfwq_) {
          if (hfwq_['statusCode'] === 0xc8) t$e0u6['readFile'](hfwq_['filePath'], kgqwh, lj738n, hkw_g);
        }, 'fail': function (icx9v) {
          lj738n != null && lj738n['runWith']([0x1, icx9v]);
        } });_qkyg['onProgressUpdate'](function (m406tu) {
        lj738n != null && lj738n['runWith']([0x2, m406tu['progress']]);
      });
    }, t$e0u6['readFile'] = function (m4t0u6, btcom, mcibo9, paz28s) {
      btcom === void 0x0 && (btcom = 'ascill'), paz28s === void 0x0 && (paz28s = ''), t$e0u6['fs']['readFile']({ 'filePath': m4t0u6, 'encoding': btcom, 'success': function (kawyzg) {
          if (m4t0u6['indexOf']('http://') != -0x1 || m4t0u6['indexOf']('https://') != -0x1) t$e0u6['onFileUpdate'](m4t0u6, paz28s);mcibo9 != null && mcibo9['runWith']([0x0, kawyzg]);
        }, 'fail': function (ygzw_k) {
          if (ygzw_k) mcibo9 != null && mcibo9['runWith']([0x1, ygzw_k]);
        } });
    }, t$e0u6['downImg'] = function (e6ud$, fvx5r1, o9icb) {
      o9icb === void 0x0 && (o9icb = '');var et06u = t$e0u6['wxdown']({ 'url': e6ud$, 'success': function (miocb) {
          miocb['statusCode'] === 0xc8 && t$e0u6['copyFile'](miocb['tempFilePath'], o9icb, fvx5r1);
        }, 'fail': function (n87jl) {
          fvx5r1 != null && fvx5r1['runWith']([0x1, n87jl]);
        } });
    }, t$e0u6['copyFile'] = function (o4cbm9, coi9bx, yz2aw) {
      var hwq_f = o4cbm9['split']('/'),
          om9bic = hwq_f[hwq_f['length'] - 0x1],
          vrcxi = coi9bx['split']('?')[0x0],
          n8l73j = t$e0u6['getFileInfo'](coi9bx),
          rfv5h1 = t$e0u6['getFileNativePath'](om9bic);t$e0u6['fs']['copyFile']({ 'srcPath': o4cbm9, 'destPath': rfv5h1, 'success': function (due6) {
          if (!n8l73j) t$e0u6['onSaveFile'](coi9bx, om9bic), yz2aw != null && yz2aw['runWith']([0x0]);else {
            if (n8l73j['readyUrl'] != coi9bx) t$e0u6['remove'](om9bic, coi9bx, yz2aw);
          }
        }, 'fail': function (ga2yw) {
          yz2aw != null && yz2aw['runWith']([0x1, ga2yw]);
        } });
    }, t$e0u6['getFileNativePath'] = function (ywkga) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ywkga;
    }, t$e0u6['remove'] = function (fkqh_5, ywk_g, gwzayk) {
      ywk_g === void 0x0 && (ywk_g = '');var omtbc = t$e0u6['getFileInfo'](ywk_g),
          kwfh = t$e0u6['getFileNativePath'](omtbc['md5']);rx1['loader']['clearRes'](omtbc['readyUrl']), t$e0u6['fs']['unlink']({ 'filePath': kwfh, 'success': function (icrxv) {
          if (ywk_g != '') t$e0u6['onSaveFile'](ywk_g, fkqh_5);gwzayk != null && gwzayk['runWith']([0x0]);
        }, 'fail': function (u6t04m) {} });
    }, t$e0u6['onSaveFile'] = function (mtu46, e6tu40) {
      var botm = mtu46['split']('?')[0x0];t$e0u6['filesListObj'][botm] = { 'md5': e6tu40, 'readyUrl': mtu46 }, t$e0u6['fs']['writeFile']({ 'filePath': t$e0u6['fileNativeDir'] + '/' + t$e0u6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t$e0u6['filesListObj']), 'success': function (zwkga) {
          console['log']('写入测试测试成功：', zwkga);
        }, 'fail': function (q_5kfh) {
          console['log']('写入测试测试失败：', q_5kfh);
        } });
    }, t$e0u6['existDir'] = function (icor, rxv91) {
      t$e0u6['fs']['mkdir']({ 'dirPath': icor, 'success': function (rvi) {
          rxv91 != null && rxv91['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (e46tu0) {
          if (e46tu0['errMsg']['indexOf']('file already exists') != -0x1) t$e0u6['readSync'](t$e0u6['fileListName'], 'utf8', rxv91);else rxv91 != null && rxv91['runWith']([0x1, e46tu0]);
        } });
    }, t$e0u6['readSync'] = function (y2ag, ay2gzs, vrfh, l7p3) {
      ay2gzs === void 0x0 && (ay2gzs = 'ascill'), l7p3 === void 0x0 && (l7p3 = '');var a28p3 = t$e0u6['getFileNativePath'](y2ag),
          psayz2;try {
        psayz2 = t$e0u6['fs']['readFileSync'](a28p3), vrfh != null && vrfh['runWith']([0x0, { 'data': psayz2 }]);
      } catch (omb4ct) {
        vrfh != null && vrfh['runWith']([0x1]);
      }
    }, t$e0u6['readCache'] = function () {}, t$e0u6['writeCache'] = function (e$u6) {
      var _gkqw = readyUrl['split']('?')[0x0];t$e0u6['filesListObj'][_gkqw] = { 'md5': md5Name, 'readyUrl': readyUrl }, t$e0u6['fs']['writeFile']({ 'filePath': t$e0u6['fileNativeDir'] + '/' + t$e0u6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t$e0u6['filesListObj']), 'success': function ($t0) {}, 'fail': function (sp2a3) {} });
    }, t$e0u6['setNativeFileDir'] = function (hqf5_) {
      t$e0u6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hqf5_;
    }, t$e0u6['filesListObj'] = {}, t$e0u6['fileNativeDir'] = null, t$e0u6['fileListName'] = 'layaairfiles.txt', t$e0u6['ziyuFileData'] = {}, e60t4u(t$e0u6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), t$e0u6;
  }(wzygk),
      irxoc = function (i15vx) {
    function crxv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], crxv['__super']['call'](this), this['_sound'] = crxv['_createSound']();
    }wkh_q(crxv, 'laya.wx.mini.MiniSound', i15vx);var _khwgq = crxv['prototype'];return _khwgq['load'] = function (iob9c) {
      var zykag = this;iob9c = hq1_f['formatURL'](iob9c), this['url'] = iob9c;if (crxv['_audioCache'][iob9c]) {
        this['event']('complete');return;
      }function bt4o0() {
        if (crxv['_null'] != undefined) zykag['_sound']['onCanplay'](crxv['_null']), zykag['_sound']['onError'](crxv['_null']);else try {
          zykag['_sound']['onCanplay'](null), zykag['_sound']['onError'](null), crxv['_null'] = null;
        } catch (j8p3l) {
          console['warn']('[wxmini] _clearSound:' + j8p3l), zykag['_sound']['onCanplay'](iv9rx1), zykag['_sound']['onError'](iv9rx1), crxv['_null'] = iv9rx1;
        }
      }function fwqk_() {
        bt4o0(), toc4['loaded'] = !![], toc4['event']('complete'), crxv['_audioCache'][toc4['url']] = toc4;
      }function m40tbo(g2say) {
        console['error']('errCode=' + g2say['errCode'] + '  errMsg=' + g2say['errMsg']), bt4o0(), toc4['event']('error');
      }function iv9rx1() {}this['_sound']['onCanplay'](fwqk_), this['_sound']['onError'](m40tbo), this['_sound']['src'] = iob9c;var toc4 = this;
    }, _khwgq['play'] = function (yapzs2, awyg) {
      yapzs2 === void 0x0 && (yapzs2 = 0x0), awyg === void 0x0 && (awyg = 0x0);var f_kwqh;if (this['url'] == s2pa83['_tMusic']) {
        if (!crxv['_musicAudio']) crxv['_musicAudio'] = crxv['_createSound']();f_kwqh = crxv['_musicAudio'];
      } else f_kwqh = crxv['_createSound']();f_kwqh['src'] = this['url'];var tu04m6 = new mc4ot(f_kwqh);return tu04m6['url'] = this['url'], tu04m6['loops'] = awyg, tu04m6['startTime'] = yapzs2, tu04m6['play'](), s2pa83['addChannel'](tu04m6), tu04m6;
    }, _khwgq['dispose'] = function () {
      var v1h5q = crxv['_audioCache'][this['url']];v1h5q && (v1h5q['src'] = '', delete crxv['_audioCache'][this['url']]);
    }, ix9cr(0x0, _khwgq, 'duration', function () {
      return this['_sound']['duration'];
    }), crxv['_createSound'] = function () {
      return crxv['_id']++, otcm['window']['wx']['createInnerAudioContext']();
    }, crxv['_musicAudio'] = null, crxv['_id'] = 0x0, crxv['_audioCache'] = {}, crxv['_null'] = undefined, crxv;
  }(wzygk),
      mc4ot = function (kygwaz) {
    function m4boc9(cm9b4) {
      this['_audio'] = null, this['_onEnd'] = null, m4boc9['__super']['call'](this), this['_audio'] = cm9b4, this['_onEnd'] = mo9ibc['bind'](this['__onEnd'], this), cm9b4['onEnded'](this['_onEnd']);
    }wkh_q(m4boc9, 'laya.wx.mini.MiniSoundChannel', kygwaz);var ygwzak = m4boc9['prototype'];return ygwzak['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (rx1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ygwzak['__onNull'] = function () {}, ygwzak['play'] = function () {
      this['isStopped'] = ![], s2pa83['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ygwzak['stop'] = function () {
      this['isStopped'] = !![], s2pa83['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (m4boc9['_null'] != undefined) this['_audio']['onEnded'](m4boc9['_null']);else try {
        this['_audio']['onEnded'](null), m4boc9['_null'] = null;
      } catch (qk_ghw) {
        console['warn']('[wxmini] stop:' + qk_ghw), this['_audio']['onEnded'](mo9ibc['bind'](this['__onNull'], this)), m4boc9['_null'] = mo9ibc['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ygwzak['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ygwzak['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], s2pa83['addChannel'](this), this['_audio']['play']();
    }, ix9cr(0x0, ygwzak, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ix9cr(0x0, ygwzak, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ix9cr(0x0, ygwzak, 'volume', function () {
      return 0x1;
    }, function (vircx) {}), m4boc9['_null'] = undefined, m4boc9;
  }(f1hr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var _kwyg in Laya) {
    var bmi9 = Laya[_kwyg];bmi9 && bmi9['__isclass'] && (exports[_kwyg] = bmi9);
  }
});