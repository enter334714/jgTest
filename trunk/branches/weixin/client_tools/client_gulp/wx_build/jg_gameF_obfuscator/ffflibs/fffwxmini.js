var k = wx.$f;
(function (window, document, xezsn) {
  var j624oc = xezsn['un'],
      ewzxn = xezsn['uns'],
      ar$73y = xezsn['static'],
      mtvbif = xezsn['class'],
      t0qh5 = xezsn['getset'],
      znesw = xezsn['__newvec'],
      b1mvu = laya['utils']['Browser'],
      dcsoj6 = laya['events']['Event'],
      ewns = laya['events']['EventDispatcher'],
      josw = laya['resource']['HTMLImage'],
      xrzen8 = laya['utils']['Handler'],
      mfbti = laya['display']['Input'],
      rnx8e = laya['net']['Loader'],
      b91iv = laya['maths']['Matrix'],
      ncjsd = laya['renders']['Render'],
      f0thim = laya['utils']['RunDriver'],
      mf0qht = laya['media']['Sound'],
      wndsjc = laya['media']['SoundChannel'],
      ncd = laya['media']['SoundManager'],
      jc6d = laya['display']['Stage'],
      ojc46 = laya['net']['URL'],
      fimv = laya['utils']['Utils'],
      nrxez = function () {
    function djwsoc() {}return mtvbif(djwsoc, 'laya.wx.mini.MiniAdpter'), djwsoc['getJson'] = function (_6o2k4) {
      return JSON['parse'](_6o2k4);
    }, djwsoc['init'] = function (odwj, wnzx) {
      odwj === void 0x0 && (odwj = ![]), wnzx === void 0x0 && (wnzx = ![]);if (djwsoc['_inited']) return;djwsoc['window'] = window;if (djwsoc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;djwsoc['_inited'] = !![], djwsoc['isZiYu'] = wnzx, djwsoc['isPosMsgYu'] = odwj, djwsoc['EnvConfig'] = {}, !djwsoc['isZiYu'] && (o6_4['setNativeFileDir']('/layaairGame'), o6_4['existDir'](o6_4['fileNativeDir'], xrzen8['create'](djwsoc, djwsoc['onMkdirCallBack']))), djwsoc['window']['focus'] = function () {}, xezsn['getUrlPath'] = function () {}, djwsoc['window']['logtime'] = function (e7$rz8) {}, djwsoc['window']['alertTimeLog'] = function (exwszn) {}, djwsoc['window']['resetShareInfo'] = function () {}, djwsoc['window']['CanvasRenderingContext2D'] = function () {}, djwsoc['window']['CanvasRenderingContext2D']['prototype'] = djwsoc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], djwsoc['window']['document']['body']['appendChild'] = function () {}, djwsoc['EnvConfig']['pixelRatioInt'] = 0x0, f0thim['getPixelRatio'] = djwsoc['pixelRatio'], djwsoc['_preCreateElement'] = b1mvu['createElement'], b1mvu['createElement'] = djwsoc['createElement'], f0thim['createShaderCondition'] = djwsoc['createShaderCondition'], fimv['parseXMLFromString'] = djwsoc['parseXMLFromString'], mfbti['_createInputElement'] = vif['_createInputElement'], djwsoc['EnvConfig']['load'] = rnx8e['prototype']['load'], rnx8e['prototype']['load'] = ftbimv['prototype']['load'], djwsoc['isZiYu'] && odwj && wx['onMessage'](function (k26_5) {
        k26_5['isLoad'] && (o6_4['ziyuFileData'][k26_5['url']] = k26_5['data']);
      });
    }, djwsoc['onMkdirCallBack'] = function ($8z7r, ezxr8) {
      if (!$8z7r) o6_4['filesListObj'] = JSON['parse'](ezxr8['data']);
    }, djwsoc['pixelRatio'] = function () {
      if (!djwsoc['EnvConfig']['pixelRatioInt']) try {
        var znew8x = wx['getSystemInfoSync']();return djwsoc['EnvConfig']['pixelRatioInt'] = znew8x['pixelRatio'], znew8x = znew8x, znew8x['pixelRatio'];
      } catch (zre7$) {}return djwsoc['EnvConfig']['pixelRatioInt'];
    }, djwsoc['createElement'] = function (thbfi) {
      if (thbfi == 'canvas') {
        var dnsxw;return djwsoc['idx'] == 0x1 ? djwsoc['isZiYu'] ? (dnsxw = sharedCanvas, dnsxw['style'] = {}) : dnsxw = window['canvas'] : dnsxw = window['wx']['createCanvas'](), djwsoc['idx']++, dnsxw;
      } else {
        if (thbfi == 'textarea' || thbfi == 'input') return djwsoc['onCreateInput'](thbfi);else {
          if (thbfi == 'div') {
            var sxnde = djwsoc['_preCreateElement'](thbfi);return sxnde['contains'] = function (jxds) {
              return null;
            }, sxnde['removeChild'] = function (timvfb) {}, sxnde;
          } else return djwsoc['_preCreateElement'](thbfi);
        }
      }
    }, djwsoc['onCreateInput'] = function (imbvu1) {
      var d6ocsj = djwsoc['_preCreateElement'](imbvu1);return d6ocsj['focus'] = vif['wxinputFocus'], d6ocsj['blur'] = vif['wxinputblur'], d6ocsj['style'] = {}, d6ocsj['value'] = 0x0, d6ocsj['parentElement'] = {}, d6ocsj['placeholder'] = {}, d6ocsj['type'] = {}, d6ocsj['setColor'] = function (p7y$a) {}, d6ocsj['setType'] = function (c6j2d) {}, d6ocsj['setFontFace'] = function (x8ezrn) {}, d6ocsj['addEventListener'] = function (djwco) {}, d6ocsj['contains'] = function (bu1i9) {
        return null;
      }, d6ocsj['removeChild'] = function (xzner) {}, d6ocsj;
    }, djwsoc['createShaderCondition'] = function (o42j) {
      var bi91 = this,
          o_64k = function () {
        var jo264 = o42j;return bi91[o42j['replace']('this.', '')];
      };return o_64k;
    }, djwsoc['EnvConfig'] = null, djwsoc['window'] = null, djwsoc['_preCreateElement'] = null, djwsoc['_inited'] = ![], djwsoc['wxRequest'] = null, djwsoc['systemInfo'] = null, djwsoc['version'] = '0.0.1', djwsoc['isZiYu'] = ![], djwsoc['isPosMsgYu'] = ![], djwsoc['parseXMLFromString'] = function (oc6d2j) {
      var wdjosc, vu19i;oc6d2j = oc6d2j['replace'](/>\s+</g, '><');try {
        wdjosc = new window['Parser']['DOMParser']()['parseFromString'](oc6d2j, 'text/xml');
      } catch (cj6od2) {
        throw '需要引入xml解析库文件';
      }return wdjosc;
    }, djwsoc['idx'] = 0x1, djwsoc;
  }(),
      qmft0h = function () {
    function _q254k() {}mtvbif(_q254k, 'laya.wx.mini.MiniImage');var $zr78e = _q254k['prototype'];return $zr78e['_loadImage'] = function (mt0fq) {
      var bgv1 = this,
          _5k624 = ![];mt0fq['indexOf']('layaNativeDir/') == -0x1 && (_5k624 = !![], mt0fq = ojc46['formatURL'](mt0fq));if (!o6_4['getFileInfo'](mt0fq)) {
        if (mt0fq['indexOf']('http://') != -0x1 || mt0fq['indexOf']('https://') != -0x1) o6_4['downImg'](mt0fq, new xrzen8(_q254k, _q254k['onDownImgCallBack'], [mt0fq, bgv1]), mt0fq);else _q254k['onCreateImage'](mt0fq, bgv1, !![]);
      } else _q254k['onCreateImage'](mt0fq, bgv1, !_5k624);
    }, _q254k['onDownImgCallBack'] = function (bitv, tf5, mihf0t) {
      if (!mihf0t) _q254k['onCreateImage'](bitv, tf5);else tf5['onError'](null);
    }, _q254k['onCreateImage'] = function (e$78z, tf0qm, y7$p3) {
      y7$p3 === void 0x0 && (y7$p3 = ![]);var h_qk0;if (!y7$p3) {
        var zen8r = o6_4['getFileInfo'](e$78z),
            d6oscj = zen8r['md5'];h_qk0 = o6_4['getFileNativePath'](d6oscj);
      } else h_qk0 = e$78z;if (tf0qm['imgCache'] == null) tf0qm['imgCache'] = {};var k624o;function fmi0ht() {
        k624o['onload'] = null, k624o['onerror'] = null, delete tf0qm['imgCache'][e$78z];
      };var u1mib = function () {
        fmi0ht(), tf0qm['onLoaded'](k624o);
      },
          ubi1vm = function () {
        fmi0ht(), tf0qm['event']('error', 'Load image failed');
      };tf0qm['_type'] == 'nativeimage' ? (k624o = new b1mvu['window']['Image'](), k624o['crossOrigin'] = '', k624o['onload'] = u1mib, k624o['onerror'] = ubi1vm, k624o['src'] = h_qk0, tf0qm['imgCache'][e$78z] = k624o) : new josw['create'](h_qk0, { 'onload': u1mib, 'onerror': ubi1vm, 'onCreate': function (imhft0) {
          k624o = imhft0, tf0qm['imgCache'][e$78z] = imhft0;
        } });
    }, _q254k;
  }(),
      vif = function () {
    function ernxz() {}return mtvbif(ernxz, 'laya.wx.mini.MiniInput'), ernxz['_createInputElement'] = function () {
      mfbti['_initInput'](mfbti['area'] = b1mvu['createElement']('textarea')), mfbti['_initInput'](mfbti['input'] = b1mvu['createElement']('input')), mfbti['inputContainer'] = b1mvu['createElement']('div'), mfbti['inputContainer']['style']['position'] = 'absolute', mfbti['inputContainer']['style']['zIndex'] = 0x186a0, b1mvu['container']['appendChild'](mfbti['inputContainer']), mfbti['inputContainer']['setPos'] = function (vg9b1, h0kqt) {
        mfbti['inputContainer']['style']['left'] = vg9b1 + 'px', mfbti['inputContainer']['style']['top'] = h0kqt + 'px';
      }, xezsn['stage']['on']('resize', null, ernxz['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (j624) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ncd['_soundClass'] = _50kh, ncd['_musicClass'] = _50kh;
    }, ernxz['_onStageResize'] = function () {
      var ifhbtm = xezsn['stage']['_canvasTransform']['identity']();ifhbtm['scale'](b1mvu['width'] / ncjsd['canvas']['width'] / f0thim['getPixelRatio'](), b1mvu['height'] / ncjsd['canvas']['height'] / f0thim['getPixelRatio']());
    }, ernxz['wxinputFocus'] = function (jndwsc) {
      var co2_ = mfbti['inputElement']['target'];if (co2_ && !co2_['editable']) return;nrxez['window']['wx']['offKeyboardConfirm'](), nrxez['window']['wx']['offKeyboardInput'](), nrxez['window']['wx']['showKeyboard']({ 'defaultValue': co2_['text'], 'maxLength': co2_['maxChars'], 'multiple': co2_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mtfhi0) {}, 'fail': function (k_54q2) {} }), nrxez['window']['wx']['onKeyboardConfirm'](function (wndjs) {
        var hi0mt = wndjs ? wndjs['value'] : '';co2_['text'] = hi0mt, co2_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nrxez['window']['wx']['onKeyboardInput'](function (tivmb) {
        var dsxnw = tivmb ? tivmb['value'] : '';if (!co2_['multiline']) {
          if (dsxnw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }co2_['text'] = dsxnw, co2_['event']('input');
      });
    }, ernxz['inputEnter'] = function () {
      mfbti['inputElement']['target']['focus'] = ![];
    }, ernxz['wxinputblur'] = function () {
      ernxz['hideKeyboard']();
    }, ernxz['hideKeyboard'] = function () {
      nrxez['window']['wx']['offKeyboardConfirm'](), nrxez['window']['wx']['offKeyboardInput'](), nrxez['window']['wx']['hideKeyboard']({ 'success': function (jwd) {
          console['log']('隐藏键盘');
        }, 'fail': function (r8$z7) {
          console['log']('隐藏键盘出错:' + (r8$z7 ? r8$z7['errMsg'] : ''));
        } });
    }, ernxz;
  }(),
      ftbimv = function () {
    function hmqt() {}mtvbif(hmqt, 'laya.wx.mini.MiniLoader');var o_4k6 = hmqt['prototype'];return o_4k6['load'] = function (_q054, djo6cs, v1ubm, h50fq, zex8w) {
      v1ubm === void 0x0 && (v1ubm = !![]), zex8w === void 0x0 && (zex8w = ![]);var $3ry87 = this;$3ry87['_url'] = _q054;if (_q054['indexOf']('data:image') === 0x0) $3ry87['_type'] = djo6cs = 'image';else $3ry87['_type'] = djo6cs || (djo6cs = $3ry87['getTypeFromUrl'](_q054));$3ry87['_cache'] = v1ubm, $3ry87['_data'] = null;var jsndwc = 'ascii';if (_q054['indexOf']('.fnt') != -0x1) jsndwc = 'utf8';else djo6cs == 'arraybuffer' && (jsndwc = '');;var fmviu = fimv['getFileExtension'](_q054);if (hmqt['_fileTypeArr']['indexOf'](fmviu) != -0x1) nrxez['EnvConfig']['load']['call'](this, _q054, djo6cs, v1ubm, h50fq, zex8w);else {
        if (!o6_4['getFileInfo'](_q054)) {
          if (_q054['indexOf']('layaNativeDir/') != -0x1) {
            if (nrxez['isZiYu']) {
              var e78rzx = o6_4['ziyuFileData'][_q054];$3ry87['onLoaded'](e78rzx);return;
            } else {
              cosnole['log']('read read'), o6_4['read'](_q054, jsndwc, new xrzen8(hmqt, hmqt['onReadNativeCallBack'], [jsndwc, _q054, djo6cs, v1ubm, h50fq, zex8w, $3ry87]));return;
            }
          }if (ojc46['rootPath'] == '') var bmivft = _q054;else bmivft = _q054['split'](ojc46['rootPath'])[0x0];_q054['indexOf']('http://') != -0x1 || _q054['indexOf']('https://') != -0x1 ? nrxez['EnvConfig']['load']['call']($3ry87, _q054, djo6cs, v1ubm, h50fq, zex8w) : o6_4['readFile'](bmivft, jsndwc, new xrzen8(hmqt, hmqt['onReadNativeCallBack'], [jsndwc, _q054, djo6cs, v1ubm, h50fq, zex8w, $3ry87]), _q054);
        } else nrxez['EnvConfig']['load']['call'](this, _q054, djo6cs, v1ubm, h50fq, zex8w);
      }
    }, o_4k6['resMgrLoad'] = function (h0f5, ds6coj, v19gbu, esdx, z8, itvbmf, u1iv) {
      v19gbu === void 0x0 && (v19gbu = 0x0), esdx === void 0x0 && (esdx = ![]), z8 === void 0x0 && (z8 = ![]), itvbmf === void 0x0 && (itvbmf = 0x0), u1iv === void 0x0 && (u1iv = 0x3), h0f5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', h0f5), nrxez['EnvConfig']['resMgrLoad'](h0f5, (nwdxj, r7ezx, r$3z7) => {
        hmqt['prototype']['resMgrLoadCallBack'](nwdxj, r7ezx, r$3z7, ds6coj);
      }, v19gbu, esdx, z8, itvbmf, u1iv);
    }, o_4k6['resMgrLoadCallBack'] = function (zenxsw, t50hqk, vifbmt, fmh0it) {
      console['log']('buff:::', zenxsw, vifbmt, o6_4['fileNativeDir'] + '///' + o6_4['fileListName']), fmh0it(zenxsw, t50hqk, vifbmt);
    }, o_4k6['clearRes'] = function (yp$73a, cdwoj) {
      cdwoj === void 0x0 && (cdwoj = ![]);var sen = this;sen['clearRes'](yp$73a, cdwoj);var ya$ = o6_4['getFileInfo'](yp$73a);if (ya$ && (yp$73a['indexOf']('http://') != -0x1 || yp$73a['indexOf']('https://') != -0x1)) {
        var ivbum1 = ya$['md5'],
            _k0q54 = o6_4['getFileNativePath'](ivbum1);o6_4['remove'](_k0q54);
      }
    }, hmqt['onReadNativeCallBack'] = function (ocwsd, jc2do6, $7yp, csjdwn, nzxr8, wcdojs, y73r$, i1mvub, swdnxe) {
      csjdwn === void 0x0 && (csjdwn = !![]), wcdojs === void 0x0 && (wcdojs = ![]), i1mvub === void 0x0 && (i1mvub = 0x0);if (!i1mvub) {
        var ojd6c2;if ($7yp == 'json' || $7yp == 'atlas') ojd6c2 = nrxez['getJson'](swdnxe['data']);else $7yp == 'xml' ? ojd6c2 = fimv['parseXMLFromString'](swdnxe['data']) : ojd6c2 = swdnxe['data'];y73r$['onLoaded'](ojd6c2), !nrxez['isZiYu'] && nrxez['isPosMsgYu'] && $7yp != 'arraybuffer' && wx['postMessage']({ 'url': jc2do6, 'data': ojd6c2, 'isLoad': !![] });
      } else i1mvub == 0x1 && nrxez['EnvConfig']['load']['call'](y73r$, jc2do6, $7yp, csjdwn, nzxr8, wcdojs);
    }, ar$73y(hmqt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hmqt;
  }(),
      o6_4 = function (ra$3y) {
    function $ya7r3() {
      $ya7r3['__super']['call'](this);;
    }return mtvbif($ya7r3, 'laya.wx.mini.MiniFileMgr', ra$3y), $ya7r3['isLoadFile'] = function (dxnjws) {
      return $ya7r3['_fileTypeArr']['indexOf'](dxnjws) != -0x1 ? !![] : ![];
    }, $ya7r3['getFileInfo'] = function ($y) {
      var fthi0 = $y['split']('?')[0x0],
          y3p$a7 = $ya7r3['filesListObj'][fthi0];if (y3p$a7 == null) return null;else return y3p$a7;return null;
    }, $ya7r3['onFileUpdate'] = function (fvtbmi, nxwjd) {
      var nez8r = fvtbmi['split']('/'),
          bv9iu1 = nez8r[nez8r['length'] - 0x1],
          ivu = $ya7r3['getFileInfo'](nxwjd);if (ivu == null) $ya7r3['onSaveFile'](nxwjd, bv9iu1);else {
        if (ivu['readyUrl'] != nxwjd) $ya7r3['remove'](bv9iu1, nxwjd);
      }
    }, $ya7r3['exits'] = function (wedxns, $ay3p) {
      var jsocd6 = $ya7r3['getFileNativePath'](wedxns);$ya7r3['fs']['getFileInfo']({ 'filePath': jsocd6, 'success': function (_6o42k) {
          $ay3p != null && $ay3p['runWith']([0x0, _6o42k]);
        }, 'fail': function (zn8re) {
          $ay3p != null && $ay3p['runWith']([0x1, zn8re]);
        } });
    }, $ya7r3['read'] = function (wsjndx, ihmf, ivbfm, p3a$y7) {
      ihmf === void 0x0 && (ihmf = 'ascill'), p3a$y7 === void 0x0 && (p3a$y7 = '');var k50q4;p3a$y7 != '' ? k50q4 = $ya7r3['getFileNativePath'](wsjndx) : k50q4 = wsjndx, $ya7r3['fs']['readFile']({ 'filePath': k50q4, 'encoding': ihmf, 'success': function (hi0tm) {
          ivbfm != null && ivbfm['runWith']([0x0, hi0tm]);
        }, 'fail': function (bimht) {
          if (bimht && p3a$y7 != '') $ya7r3['down'](p3a$y7, ihmf, ivbfm, p3a$y7);else ivbfm != null && ivbfm['runWith']([0x1]);
        } });
    }, $ya7r3['readNativeFile'] = function (j624c, ocj64) {
      $ya7r3['fs']['readFile']({ 'filePath': j624c, 'encoding': '', 'success': function (j2c64o) {
          ocj64 != null && ocj64['runWith']([0x0]);
        }, 'fail': function (i9ub1) {
          ocj64 != null && ocj64['runWith']([0x1]);
        } });
    }, $ya7r3['down'] = function (jdo62c, r7z$3, oscwd, f0t5h) {
      r7z$3 === void 0x0 && (r7z$3 = 'ascill'), f0t5h === void 0x0 && (f0t5h = '');var vui91 = $ya7r3['getFileNativePath'](f0t5h),
          $r3a7y = $ya7r3['wxdown']({ 'url': jdo62c, 'filePath': vui91, 'success': function (znwsx) {
          if (znwsx['statusCode'] === 0xc8) $ya7r3['readFile'](znwsx['filePath'], r7z$3, oscwd, f0t5h);
        }, 'fail': function (d6ocs) {
          oscwd != null && oscwd['runWith']([0x1, d6ocs]);
        } });$r3a7y['onProgressUpdate'](function (jcdosw) {
        oscwd != null && oscwd['runWith']([0x2, jcdosw['progress']]);
      });
    }, $ya7r3['readFile'] = function (a$3ry7, hf5t0q, gvu91, er78) {
      hf5t0q === void 0x0 && (hf5t0q = 'ascill'), er78 === void 0x0 && (er78 = ''), $ya7r3['fs']['readFile']({ 'filePath': a$3ry7, 'encoding': hf5t0q, 'success': function (nwz) {
          if (a$3ry7['indexOf']('http://') != -0x1 || a$3ry7['indexOf']('https://') != -0x1) $ya7r3['onFileUpdate'](a$3ry7, er78);gvu91 != null && gvu91['runWith']([0x0, nwz]);
        }, 'fail': function (wznse) {
          if (wznse) gvu91 != null && gvu91['runWith']([0x1, wznse]);
        } });
    }, $ya7r3['downImg'] = function (zern, jo426c, wscdn) {
      wscdn === void 0x0 && (wscdn = '');var hqmt0 = $ya7r3['wxdown']({ 'url': zern, 'success': function (r$a37) {
          r$a37['statusCode'] === 0xc8 && $ya7r3['copyFile'](r$a37['tempFilePath'], wscdn, jo426c);
        }, 'fail': function (ex87zr) {
          jo426c != null && jo426c['runWith']([0x1, ex87zr]);
        } });
    }, $ya7r3['copyFile'] = function (h5q0t, r87$e, oj42) {
      var mftvbi = h5q0t['split']('/'),
          j2odc = mftvbi[mftvbi['length'] - 0x1],
          v19ubi = r87$e['split']('?')[0x0],
          ivmb = $ya7r3['getFileInfo'](r87$e),
          h05q_ = $ya7r3['getFileNativePath'](j2odc);$ya7r3['fs']['copyFile']({ 'srcPath': h5q0t, 'destPath': h05q_, 'success': function (mth0q) {
          if (!ivmb) $ya7r3['onSaveFile'](r87$e, j2odc), oj42 != null && oj42['runWith']([0x0]);else {
            if (ivmb['readyUrl'] != r87$e) $ya7r3['remove'](j2odc, r87$e, oj42);
          }
        }, 'fail': function (o4_2c6) {
          oj42 != null && oj42['runWith']([0x1, o4_2c6]);
        } });
    }, $ya7r3['getFileNativePath'] = function (k45) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k45;
    }, $ya7r3['remove'] = function (_42o6, k62_45, c_64o) {
      k62_45 === void 0x0 && (k62_45 = '');var h5k0t = $ya7r3['getFileInfo'](k62_45),
          _04q5k = $ya7r3['getFileNativePath'](h5k0t['md5']);xezsn['loader']['clearRes'](h5k0t['readyUrl']), $ya7r3['fs']['unlink']({ 'filePath': _04q5k, 'success': function (soc6) {
          if (k62_45 != '') $ya7r3['onSaveFile'](k62_45, _42o6);c_64o != null && c_64o['runWith']([0x0]);
        }, 'fail': function (xnsdjw) {} });
    }, $ya7r3['onSaveFile'] = function (k6_4o2, xdwj) {
      var wnedx = k6_4o2['split']('?')[0x0];$ya7r3['filesListObj'][wnedx] = { 'md5': xdwj, 'readyUrl': k6_4o2 }, $ya7r3['fs']['writeFile']({ 'filePath': $ya7r3['fileNativeDir'] + '/' + $ya7r3['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($ya7r3['filesListObj']), 'success': function (i1vu9) {
          console['log']('写入测试测试成功：', i1vu9);
        }, 'fail': function (_qk05h) {
          console['log']('写入测试测试失败：', _qk05h);
        } });
    }, $ya7r3['existDir'] = function (_h05q, enzxw8) {
      $ya7r3['fs']['mkdir']({ 'dirPath': _h05q, 'success': function (ko6) {
          enzxw8 != null && enzxw8['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fivu) {
          if (fivu['errMsg']['indexOf']('file already exists') != -0x1) $ya7r3['readSync']($ya7r3['fileListName'], 'utf8', enzxw8);else enzxw8 != null && enzxw8['runWith']([0x1, fivu]);
        } });
    }, $ya7r3['readSync'] = function (x8e, i1mb, jsnxwd, nwdjc) {
      i1mb === void 0x0 && (i1mb = 'ascill'), nwdjc === void 0x0 && (nwdjc = '');var vbufi = $ya7r3['getFileNativePath'](x8e),
          thbmi;try {
        thbmi = $ya7r3['fs']['readFileSync'](vbufi), jsnxwd != null && jsnxwd['runWith']([0x0, { 'data': thbmi }]);
      } catch (o_2c6) {
        jsnxwd != null && jsnxwd['runWith']([0x1]);
      }
    }, $ya7r3['readCache'] = function () {}, $ya7r3['writeCache'] = function (hqt5k) {
      var sxndwj = readyUrl['split']('?')[0x0];$ya7r3['filesListObj'][sxndwj] = { 'md5': md5Name, 'readyUrl': readyUrl }, $ya7r3['fs']['writeFile']({ 'filePath': $ya7r3['fileNativeDir'] + '/' + $ya7r3['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($ya7r3['filesListObj']), 'success': function (xr7ez8) {}, 'fail': function (ypa$73) {} });
    }, $ya7r3['setNativeFileDir'] = function (eznw8) {
      $ya7r3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + eznw8;
    }, $ya7r3['filesListObj'] = {}, $ya7r3['fileNativeDir'] = null, $ya7r3['fileListName'] = 'layaairfiles.txt', $ya7r3['ziyuFileData'] = {}, ar$73y($ya7r3, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $ya7r3;
  }(ewns),
      _50kh = function (rx7) {
    function ojs6d() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ojs6d['__super']['call'](this), this['_sound'] = ojs6d['_createSound']();
    }mtvbif(ojs6d, 'laya.wx.mini.MiniSound', rx7);var k2q4_5 = ojs6d['prototype'];return k2q4_5['load'] = function (mbhif) {
      var mf0ih = this;mbhif = ojc46['formatURL'](mbhif), this['url'] = mbhif;if (ojs6d['_audioCache'][mbhif]) {
        this['event']('complete');return;
      }function htmi0() {
        if (ojs6d['_null'] != undefined) mf0ih['_sound']['onCanplay'](ojs6d['_null']), mf0ih['_sound']['onError'](ojs6d['_null']);else try {
          mf0ih['_sound']['onCanplay'](null), mf0ih['_sound']['onError'](null), ojs6d['_null'] = null;
        } catch (c426j) {
          console['warn']('[wxmini] _clearSound:' + c426j), mf0ih['_sound']['onCanplay'](kq0h5), mf0ih['_sound']['onError'](kq0h5), ojs6d['_null'] = kq0h5;
        }
      }function vmfibu() {
        htmi0(), bitmf['loaded'] = !![], bitmf['event']('complete'), ojs6d['_audioCache'][bitmf['url']] = bitmf;
      }function x8re7z($rz738) {
        console['error']('errCode=' + $rz738['errCode'] + '  errMsg=' + $rz738['errMsg']), htmi0(), bitmf['event']('error');
      }function kq0h5() {}this['_sound']['onCanplay'](vmfibu), this['_sound']['onError'](x8re7z), this['_sound']['src'] = mbhif;var bitmf = this;
    }, k2q4_5['play'] = function (q_0kh5, c642_o) {
      q_0kh5 === void 0x0 && (q_0kh5 = 0x0), c642_o === void 0x0 && (c642_o = 0x0);var mfbth;if (this['url'] == ncd['_tMusic']) {
        if (!ojs6d['_musicAudio']) ojs6d['_musicAudio'] = ojs6d['_createSound']();mfbth = ojs6d['_musicAudio'];
      } else mfbth = ojs6d['_createSound']();mfbth['src'] = this['url'];var jocw = new sdxwe(mfbth);return jocw['url'] = this['url'], jocw['loops'] = c642_o, jocw['startTime'] = q_0kh5, jocw['play'](), ncd['addChannel'](jocw), jocw;
    }, k2q4_5['dispose'] = function () {
      var e8zx7 = ojs6d['_audioCache'][this['url']];e8zx7 && (e8zx7['src'] = '', delete ojs6d['_audioCache'][this['url']]);
    }, t0qh5(0x0, k2q4_5, 'duration', function () {
      return this['_sound']['duration'];
    }), ojs6d['_createSound'] = function () {
      return ojs6d['_id']++, nrxez['window']['wx']['createInnerAudioContext']();
    }, ojs6d['_musicAudio'] = null, ojs6d['_id'] = 0x0, ojs6d['_audioCache'] = {}, ojs6d['_null'] = undefined, ojs6d;
  }(ewns),
      sdxwe = function (osj6cd) {
    function ibfht(wesdnx) {
      this['_audio'] = null, this['_onEnd'] = null, ibfht['__super']['call'](this), this['_audio'] = wesdnx, this['_onEnd'] = fimv['bind'](this['__onEnd'], this), wesdnx['onEnded'](this['_onEnd']);
    }mtvbif(ibfht, 'laya.wx.mini.MiniSoundChannel', osj6cd);var $y7a3 = ibfht['prototype'];return $y7a3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xezsn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $y7a3['__onNull'] = function () {}, $y7a3['play'] = function () {
      this['isStopped'] = ![], ncd['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $y7a3['stop'] = function () {
      this['isStopped'] = !![], ncd['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ibfht['_null'] != undefined) this['_audio']['onEnded'](ibfht['_null']);else try {
        this['_audio']['onEnded'](null), ibfht['_null'] = null;
      } catch (xenr8z) {
        console['warn']('[wxmini] stop:' + xenr8z), this['_audio']['onEnded'](fimv['bind'](this['__onNull'], this)), ibfht['_null'] = fimv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $y7a3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $y7a3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ncd['addChannel'](this), this['_audio']['play']();
    }, t0qh5(0x0, $y7a3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), t0qh5(0x0, $y7a3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), t0qh5(0x0, $y7a3, 'volume', function () {
      return 0x1;
    }, function (nxre8) {}), ibfht['_null'] = undefined, ibfht;
  }(wndsjc);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var yr$73a in Laya) {
    var z3 = Laya[yr$73a];z3 && z3['__isclass'] && (exports[yr$73a] = z3);
  }
});