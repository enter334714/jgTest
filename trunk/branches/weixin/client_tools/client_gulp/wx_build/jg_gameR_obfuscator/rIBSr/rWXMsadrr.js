var I = wx.$R;
(function (window, document, ndf5c6) {
  var k8joyi = ndf5c6['un'],
      np5fd = ndf5c6['uns'],
      f65hc = ndf5c6['static'],
      mow8k = ndf5c6['class'],
      qdfnep = ndf5c6['getset'],
      xj2oz = ndf5c6['__newvec'],
      kgrwm = laya['utils']['Browser'],
      $1u_ba = laya['events']['Event'],
      qrme7g = laya['events']['EventDispatcher'],
      a1b$ = laya['resource']['HTMLImage'],
      wyokm = laya['utils']['Handler'],
      pqd7e = laya['display']['Input'],
      egrp = laya['net']['Loader'],
      o8wymk = laya['maths']['Matrix'],
      fnpdcq = laya['renders']['Render'],
      ndqepf = laya['utils']['RunDriver'],
      jt2zxs = laya['media']['Sound'],
      ykij8o = laya['media']['SoundChannel'],
      txz2 = laya['media']['SoundManager'],
      nd5c = laya['display']['Stage'],
      _h65u1 = laya['net']['URL'],
      ednpq = laya['utils']['Utils'],
      owyk = function () {
    function lv3tsz() {}return mow8k(lv3tsz, 'laya.wx.mini.MiniAdpter'), lv3tsz['getJson'] = function (y2ijo) {
      return JSON['parse'](y2ijo);
    }, lv3tsz['init'] = function (jxsiz, au9$b1) {
      jxsiz === void 0x0 && (jxsiz = ![]), au9$b1 === void 0x0 && (au9$b1 = ![]);if (lv3tsz['_inited']) return;lv3tsz['window'] = window;if (lv3tsz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;lv3tsz['_inited'] = !![], lv3tsz['isZiYu'] = au9$b1, lv3tsz['isPosMsgYu'] = jxsiz, lv3tsz['EnvConfig'] = {}, !lv3tsz['isZiYu'] && (pdn5['setNativeFileDir']('/layaairGame'), pdn5['existDir'](pdn5['fileNativeDir'], wyokm['create'](lv3tsz, lv3tsz['onMkdirCallBack']))), lv3tsz['window']['focus'] = function () {}, ndf5c6['getUrlPath'] = function () {}, lv3tsz['window']['logtime'] = function (ix2) {}, lv3tsz['window']['alertTimeLog'] = function (x2) {}, lv3tsz['window']['resetShareInfo'] = function () {}, lv3tsz['window']['CanvasRenderingContext2D'] = function () {}, lv3tsz['window']['CanvasRenderingContext2D']['prototype'] = lv3tsz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lv3tsz['window']['document']['body']['appendChild'] = function () {}, lv3tsz['EnvConfig']['pixelRatioInt'] = 0x0, ndqepf['getPixelRatio'] = lv3tsz['pixelRatio'], lv3tsz['_preCreateElement'] = kgrwm['createElement'], kgrwm['createElement'] = lv3tsz['createElement'], ndqepf['createShaderCondition'] = lv3tsz['createShaderCondition'], ednpq['parseXMLFromString'] = lv3tsz['parseXMLFromString'], pqd7e['_createInputElement'] = mwky8o['_createInputElement'], lv3tsz['EnvConfig']['load'] = egrp['prototype']['load'], egrp['prototype']['load'] = tx2zs3['prototype']['load'], lv3tsz['isZiYu'] && jxsiz && wx['onMessage'](function (kijo8y) {
        kijo8y['isLoad'] && (pdn5['ziyuFileData'][kijo8y['url']] = kijo8y['data']);
      });
    }, lv3tsz['onMkdirCallBack'] = function (mr7k8, vltzs) {
      if (!mr7k8) pdn5['filesListObj'] = JSON['parse'](vltzs['data']);
    }, lv3tsz['pixelRatio'] = function () {
      if (!lv3tsz['EnvConfig']['pixelRatioInt']) try {
        var eg7mrq = wx['getSystemInfoSync']();return lv3tsz['EnvConfig']['pixelRatioInt'] = eg7mrq['pixelRatio'], eg7mrq = eg7mrq, eg7mrq['pixelRatio'];
      } catch (dpen) {}return lv3tsz['EnvConfig']['pixelRatioInt'];
    }, lv3tsz['createElement'] = function (pqn) {
      if (pqn == 'canvas') {
        var iyojx8;return lv3tsz['idx'] == 0x1 ? lv3tsz['isZiYu'] ? (iyojx8 = sharedCanvas, iyojx8['style'] = {}) : iyojx8 = window['canvas'] : iyojx8 = window['wx']['createCanvas'](), lv3tsz['idx']++, iyojx8;
      } else {
        if (pqn == 'textarea' || pqn == 'input') return lv3tsz['onCreateInput'](pqn);else {
          if (pqn == 'div') {
            var xyji8o = lv3tsz['_preCreateElement'](pqn);return xyji8o['contains'] = function (_h615) {
              return null;
            }, xyji8o['removeChild'] = function (pqgdf) {}, xyji8o;
          } else return lv3tsz['_preCreateElement'](pqn);
        }
      }
    }, lv3tsz['onCreateInput'] = function (zlst3v) {
      var npcfdq = lv3tsz['_preCreateElement'](zlst3v);return npcfdq['focus'] = mwky8o['wxinputFocus'], npcfdq['blur'] = mwky8o['wxinputblur'], npcfdq['style'] = {}, npcfdq['value'] = 0x0, npcfdq['parentElement'] = {}, npcfdq['placeholder'] = {}, npcfdq['type'] = {}, npcfdq['setColor'] = function (_h5n6c) {}, npcfdq['setType'] = function (enfp) {}, npcfdq['setFontFace'] = function (tvl3s) {}, npcfdq['addEventListener'] = function (kjy8i) {}, npcfdq['contains'] = function (nqcf) {
        return null;
      }, npcfdq['removeChild'] = function (ewmrg7) {}, npcfdq;
    }, lv3tsz['createShaderCondition'] = function (n5ch_) {
      var yj8x = this,
          isjx2z = function () {
        var au61h = n5ch_;return yj8x[n5ch_['replace']('this.', '')];
      };return isjx2z;
    }, lv3tsz['EnvConfig'] = null, lv3tsz['window'] = null, lv3tsz['_preCreateElement'] = null, lv3tsz['_inited'] = ![], lv3tsz['wxRequest'] = null, lv3tsz['systemInfo'] = null, lv3tsz['version'] = '0.0.1', lv3tsz['isZiYu'] = ![], lv3tsz['isPosMsgYu'] = ![], lv3tsz['parseXMLFromString'] = function (rgwme) {
      var b1u_a, k8mwoy;rgwme = rgwme['replace'](/>\s+</g, '><');try {
        b1u_a = new window['Parser']['DOMParser']()['parseFromString'](rgwme, 'text/xml');
      } catch (rmw7kg) {
        throw '需要引入xml解析库文件';
      }return b1u_a;
    }, lv3tsz['idx'] = 0x1, lv3tsz;
  }(),
      jyix2 = function () {
    function jst() {}mow8k(jst, 'laya.wx.mini.MiniImage');var e7prgq = jst['prototype'];return e7prgq['_loadImage'] = function ($1u9ba) {
      var rmkg = this,
          fpdnc = ![];$1u9ba['indexOf']('layaNativeDir/') == -0x1 && (fpdnc = !![], $1u9ba = _h65u1['formatURL']($1u9ba));if (!pdn5['getFileInfo']($1u9ba)) {
        if ($1u9ba['indexOf']('http://') != -0x1 || $1u9ba['indexOf']('https://') != -0x1) pdn5['downImg']($1u9ba, new wyokm(jst, jst['onDownImgCallBack'], [$1u9ba, rmkg]), $1u9ba);else jst['onCreateImage']($1u9ba, rmkg, !![]);
      } else jst['onCreateImage']($1u9ba, rmkg, !fpdnc);
    }, jst['onDownImgCallBack'] = function (txzs23, ncdp5, xyji2o) {
      if (!xyji2o) jst['onCreateImage'](txzs23, ncdp5);else ncdp5['onError'](null);
    }, jst['onCreateImage'] = function (tz3s2x, _a6hu1, ym8) {
      ym8 === void 0x0 && (ym8 = ![]);var mkryw;if (!ym8) {
        var b1_a$ = pdn5['getFileInfo'](tz3s2x),
            nfqd = b1_a$['md5'];mkryw = pdn5['getFileNativePath'](nfqd);
      } else mkryw = tz3s2x;if (_a6hu1['imgCache'] == null) _a6hu1['imgCache'] = {};var pqed;function sxjz2() {
        pqed['onload'] = null, pqed['onerror'] = null, delete _a6hu1['imgCache'][tz3s2x];
      };var abuh1 = function () {
        sxjz2(), _a6hu1['onLoaded'](pqed);
      },
          sl3vt = function () {
        sxjz2(), _a6hu1['event']('error', 'Load image failed');
      };_a6hu1['_type'] == 'nativeimage' ? (pqed = new kgrwm['window']['Image'](), pqed['crossOrigin'] = '', pqed['onload'] = abuh1, pqed['onerror'] = sl3vt, pqed['src'] = mkryw, _a6hu1['imgCache'][tz3s2x] = pqed) : new a1b$['create'](mkryw, { 'onload': abuh1, 'onerror': sl3vt, 'onCreate': function (dpnqfc) {
          pqed = dpnqfc, _a6hu1['imgCache'][tz3s2x] = dpnqfc;
        } });
    }, jst;
  }(),
      mwky8o = function () {
    function nc65df() {}return mow8k(nc65df, 'laya.wx.mini.MiniInput'), nc65df['_createInputElement'] = function () {
      pqd7e['_initInput'](pqd7e['area'] = kgrwm['createElement']('textarea')), pqd7e['_initInput'](pqd7e['input'] = kgrwm['createElement']('input')), pqd7e['inputContainer'] = kgrwm['createElement']('div'), pqd7e['inputContainer']['style']['position'] = 'absolute', pqd7e['inputContainer']['style']['zIndex'] = 0x186a0, kgrwm['container']['appendChild'](pqd7e['inputContainer']), pqd7e['inputContainer']['setPos'] = function (qfcpnd, yxij2o) {
        pqd7e['inputContainer']['style']['left'] = qfcpnd + 'px', pqd7e['inputContainer']['style']['top'] = yxij2o + 'px';
      }, ndf5c6['stage']['on']('resize', null, nc65df['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_b$u1a) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), txz2['_soundClass'] = au91b, txz2['_musicClass'] = au91b;
    }, nc65df['_onStageResize'] = function () {
      var ji8koy = ndf5c6['stage']['_canvasTransform']['identity']();ji8koy['scale'](kgrwm['width'] / fnpdcq['canvas']['width'] / ndqepf['getPixelRatio'](), kgrwm['height'] / fnpdcq['canvas']['height'] / ndqepf['getPixelRatio']());
    }, nc65df['wxinputFocus'] = function (sl30) {
      var xo2yij = pqd7e['inputElement']['target'];if (xo2yij && !xo2yij['editable']) return;owyk['window']['wx']['offKeyboardConfirm'](), owyk['window']['wx']['offKeyboardInput'](), owyk['window']['wx']['showKeyboard']({ 'defaultValue': xo2yij['text'], 'maxLength': xo2yij['maxChars'], 'multiple': xo2yij['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jxzs2i) {}, 'fail': function (ew7mgr) {} }), owyk['window']['wx']['onKeyboardConfirm'](function (mkwyo8) {
        var m8owy = mkwyo8 ? mkwyo8['value'] : '';xo2yij['text'] = m8owy, xo2yij['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), owyk['window']['wx']['onKeyboardInput'](function (sjxz2i) {
        var fqdnpc = sjxz2i ? sjxz2i['value'] : '';if (!xo2yij['multiline']) {
          if (fqdnpc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xo2yij['text'] = fqdnpc, xo2yij['event']('input');
      });
    }, nc65df['inputEnter'] = function () {
      pqd7e['inputElement']['target']['focus'] = ![];
    }, nc65df['wxinputblur'] = function () {
      nc65df['hideKeyboard']();
    }, nc65df['hideKeyboard'] = function () {
      owyk['window']['wx']['offKeyboardConfirm'](), owyk['window']['wx']['offKeyboardInput'](), owyk['window']['wx']['hideKeyboard']({ 'success': function (pqd7g) {
          console['log']('隐藏键盘');
        }, 'fail': function (pefnq) {
          console['log']('隐藏键盘出错:' + (pefnq ? pefnq['errMsg'] : ''));
        } });
    }, nc65df;
  }(),
      tx2zs3 = function () {
    function okm8y() {}mow8k(okm8y, 'laya.wx.mini.MiniLoader');var sxtz23 = okm8y['prototype'];return sxtz23['load'] = function (hnc6f5, r7g, a$u_b1, stz2l3, qpcfd) {
      a$u_b1 === void 0x0 && (a$u_b1 = !![]), qpcfd === void 0x0 && (qpcfd = ![]);var dpf5n = this;dpf5n['_url'] = hnc6f5;if (hnc6f5['indexOf']('data:image') === 0x0) dpf5n['_type'] = r7g = 'image';else dpf5n['_type'] = r7g || (r7g = dpf5n['getTypeFromUrl'](hnc6f5));dpf5n['_cache'] = a$u_b1, dpf5n['_data'] = null;var oi8jyk = 'ascii';if (hnc6f5['indexOf']('.fnt') != -0x1) oi8jyk = 'utf8';else r7g == 'arraybuffer' && (oi8jyk = '');;var vs = ednpq['getFileExtension'](hnc6f5);if (okm8y['_fileTypeArr']['indexOf'](vs) != -0x1) owyk['EnvConfig']['load']['call'](this, hnc6f5, r7g, a$u_b1, stz2l3, qpcfd);else {
        if (!pdn5['getFileInfo'](hnc6f5)) {
          if (hnc6f5['indexOf']('layaNativeDir/') != -0x1) {
            if (owyk['isZiYu']) {
              var jki8o = pdn5['ziyuFileData'][hnc6f5];dpf5n['onLoaded'](jki8o);return;
            } else {
              cosnole['log']('read read'), pdn5['read'](hnc6f5, oi8jyk, new wyokm(okm8y, okm8y['onReadNativeCallBack'], [oi8jyk, hnc6f5, r7g, a$u_b1, stz2l3, qpcfd, dpf5n]));return;
            }
          }if (_h65u1['rootPath'] == '') var ls32z = hnc6f5;else ls32z = hnc6f5['split'](_h65u1['rootPath'])[0x0];hnc6f5['indexOf']('http://') != -0x1 || hnc6f5['indexOf']('https://') != -0x1 ? owyk['EnvConfig']['load']['call'](dpf5n, hnc6f5, r7g, a$u_b1, stz2l3, qpcfd) : pdn5['readFile'](ls32z, oi8jyk, new wyokm(okm8y, okm8y['onReadNativeCallBack'], [oi8jyk, hnc6f5, r7g, a$u_b1, stz2l3, qpcfd, dpf5n]), hnc6f5);
        } else owyk['EnvConfig']['load']['call'](this, hnc6f5, r7g, a$u_b1, stz2l3, qpcfd);
      }
    }, sxtz23['resMgrLoad'] = function (cfnd5, f56hcn, wgrk7, feqgdp, yw, epq7dg, kyo8m) {
      wgrk7 === void 0x0 && (wgrk7 = 0x0), feqgdp === void 0x0 && (feqgdp = ![]), yw === void 0x0 && (yw = ![]), epq7dg === void 0x0 && (epq7dg = 0x0), kyo8m === void 0x0 && (kyo8m = 0x3), cfnd5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cfnd5), owyk['EnvConfig']['resMgrLoad'](cfnd5, (fqenpd, rk7wm, ixjy8o) => {
        okm8y['prototype']['resMgrLoadCallBack'](fqenpd, rk7wm, ixjy8o, f56hcn);
      }, wgrk7, feqgdp, yw, epq7dg, kyo8m);
    }, sxtz23['resMgrLoadCallBack'] = function (mkrwy, m7wkgr, greq7p, xiyo) {
      console['log']('buff:::', mkrwy, greq7p, pdn5['fileNativeDir'] + '///' + pdn5['fileListName']), xiyo(mkrwy, m7wkgr, greq7p);
    }, sxtz23['clearRes'] = function (t23slz, a_u16h) {
      a_u16h === void 0x0 && (a_u16h = ![]);var ioz2jx = this;ioz2jx['clearRes'](t23slz, a_u16h);var jtsz2 = pdn5['getFileInfo'](t23slz);if (jtsz2 && (t23slz['indexOf']('http://') != -0x1 || t23slz['indexOf']('https://') != -0x1)) {
        var eqp7d = jtsz2['md5'],
            de = pdn5['getFileNativePath'](eqp7d);pdn5['remove'](de);
      }
    }, okm8y['onReadNativeCallBack'] = function (ub9a, rky8wm, df6nc, y8kwio, rqgp, c5dpnf, gerqp7, fendp, cfpqnd) {
      y8kwio === void 0x0 && (y8kwio = !![]), c5dpnf === void 0x0 && (c5dpnf = ![]), fendp === void 0x0 && (fendp = 0x0);if (!fendp) {
        var jtsx2z;if (df6nc == 'json' || df6nc == 'atlas') jtsx2z = owyk['getJson'](cfpqnd['data']);else df6nc == 'xml' ? jtsx2z = ednpq['parseXMLFromString'](cfpqnd['data']) : jtsx2z = cfpqnd['data'];gerqp7['onLoaded'](jtsx2z), !owyk['isZiYu'] && owyk['isPosMsgYu'] && df6nc != 'arraybuffer' && wx['postMessage']({ 'url': rky8wm, 'data': jtsx2z, 'isLoad': !![] });
      } else fendp == 0x1 && owyk['EnvConfig']['load']['call'](gerqp7, rky8wm, df6nc, y8kwio, rqgp, c5dpnf);
    }, f65hc(okm8y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), okm8y;
  }(),
      pdn5 = function (pfqndc) {
    function kyrmw() {
      kyrmw['__super']['call'](this);;
    }return mow8k(kyrmw, 'laya.wx.mini.MiniFileMgr', pfqndc), kyrmw['isLoadFile'] = function (yxoij) {
      return kyrmw['_fileTypeArr']['indexOf'](yxoij) != -0x1 ? !![] : ![];
    }, kyrmw['getFileInfo'] = function (pregq) {
      var epdqf = pregq['split']('?')[0x0],
          i8woy = kyrmw['filesListObj'][epdqf];if (i8woy == null) return null;else return i8woy;return null;
    }, kyrmw['onFileUpdate'] = function (_hbu1a, au_h6) {
      var gpq7re = _hbu1a['split']('/'),
          iy8j = gpq7re[gpq7re['length'] - 0x1],
          h1au_6 = kyrmw['getFileInfo'](au_h6);if (h1au_6 == null) kyrmw['onSaveFile'](au_h6, iy8j);else {
        if (h1au_6['readyUrl'] != au_h6) kyrmw['remove'](iy8j, au_h6);
      }
    }, kyrmw['exits'] = function (_6ua, qdef) {
      var stj2z = kyrmw['getFileNativePath'](_6ua);kyrmw['fs']['getFileInfo']({ 'filePath': stj2z, 'success': function (nfh5c6) {
          qdef != null && qdef['runWith']([0x0, nfh5c6]);
        }, 'fail': function (jioxy8) {
          qdef != null && qdef['runWith']([0x1, jioxy8]);
        } });
    }, kyrmw['read'] = function (z3ls2t, p7dq, iz2jo, pfcdn) {
      p7dq === void 0x0 && (p7dq = 'ascill'), pfcdn === void 0x0 && (pfcdn = '');var u1a$_b;pfcdn != '' ? u1a$_b = kyrmw['getFileNativePath'](z3ls2t) : u1a$_b = z3ls2t, kyrmw['fs']['readFile']({ 'filePath': u1a$_b, 'encoding': p7dq, 'success': function (xzt) {
          iz2jo != null && iz2jo['runWith']([0x0, xzt]);
        }, 'fail': function (dpc5n) {
          if (dpc5n && pfcdn != '') kyrmw['down'](pfcdn, p7dq, iz2jo, pfcdn);else iz2jo != null && iz2jo['runWith']([0x1]);
        } });
    }, kyrmw['readNativeFile'] = function (zo2xij, xsji) {
      kyrmw['fs']['readFile']({ 'filePath': zo2xij, 'encoding': '', 'success': function (wmrg7k) {
          xsji != null && xsji['runWith']([0x0]);
        }, 'fail': function (jxzsi) {
          xsji != null && xsji['runWith']([0x1]);
        } });
    }, kyrmw['down'] = function (ky8mw, pqrg, ltz32s, _u1abh) {
      pqrg === void 0x0 && (pqrg = 'ascill'), _u1abh === void 0x0 && (_u1abh = '');var z2l3st = kyrmw['getFileNativePath'](_u1abh),
          jxo2iy = kyrmw['wxdown']({ 'url': ky8mw, 'filePath': z2l3st, 'success': function (kyrwm8) {
          if (kyrwm8['statusCode'] === 0xc8) kyrmw['readFile'](kyrwm8['filePath'], pqrg, ltz32s, _u1abh);
        }, 'fail': function (x8yoi) {
          ltz32s != null && ltz32s['runWith']([0x1, x8yoi]);
        } });jxo2iy['onProgressUpdate'](function (ncf5h) {
        ltz32s != null && ltz32s['runWith']([0x2, ncf5h['progress']]);
      });
    }, kyrmw['readFile'] = function (wk87mr, _5h6c, fndpqc, wgemr7) {
      _5h6c === void 0x0 && (_5h6c = 'ascill'), wgemr7 === void 0x0 && (wgemr7 = ''), kyrmw['fs']['readFile']({ 'filePath': wk87mr, 'encoding': _5h6c, 'success': function (h5_u1) {
          if (wk87mr['indexOf']('http://') != -0x1 || wk87mr['indexOf']('https://') != -0x1) kyrmw['onFileUpdate'](wk87mr, wgemr7);fndpqc != null && fndpqc['runWith']([0x0, h5_u1]);
        }, 'fail': function (b1$ua9) {
          if (b1$ua9) fndpqc != null && fndpqc['runWith']([0x1, b1$ua9]);
        } });
    }, kyrmw['downImg'] = function (mrgq, mywk8, n5hc6f) {
      n5hc6f === void 0x0 && (n5hc6f = '');var stz32 = kyrmw['wxdown']({ 'url': mrgq, 'success': function (qg7erp) {
          qg7erp['statusCode'] === 0xc8 && kyrmw['copyFile'](qg7erp['tempFilePath'], n5hc6f, mywk8);
        }, 'fail': function (y8krw) {
          mywk8 != null && mywk8['runWith']([0x1, y8krw]);
        } });
    }, kyrmw['copyFile'] = function (erg7q, b_h, qpne) {
      var grmk = erg7q['split']('/'),
          sjtz2x = grmk[grmk['length'] - 0x1],
          gfpedq = b_h['split']('?')[0x0],
          o8ywi = kyrmw['getFileInfo'](b_h),
          qpdeg7 = kyrmw['getFileNativePath'](sjtz2x);kyrmw['fs']['copyFile']({ 'srcPath': erg7q, 'destPath': qpdeg7, 'success': function (a$4) {
          if (!o8ywi) kyrmw['onSaveFile'](b_h, sjtz2x), qpne != null && qpne['runWith']([0x0]);else {
            if (o8ywi['readyUrl'] != b_h) kyrmw['remove'](sjtz2x, b_h, qpne);
          }
        }, 'fail': function (a_u1h) {
          qpne != null && qpne['runWith']([0x1, a_u1h]);
        } });
    }, kyrmw['getFileNativePath'] = function (hnc56f) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + hnc56f;
    }, kyrmw['remove'] = function (u$91ab, fqden, iokyj) {
      fqden === void 0x0 && (fqden = '');var vl3t0s = kyrmw['getFileInfo'](fqden),
          fnpc = kyrmw['getFileNativePath'](vl3t0s['md5']);ndf5c6['loader']['clearRes'](vl3t0s['readyUrl']), kyrmw['fs']['unlink']({ 'filePath': fnpc, 'success': function (ermw7) {
          if (fqden != '') kyrmw['onSaveFile'](fqden, u$91ab);iokyj != null && iokyj['runWith']([0x0]);
        }, 'fail': function (u19$ab) {} });
    }, kyrmw['onSaveFile'] = function (au1h, oxjz2i) {
      var owiyk = au1h['split']('?')[0x0];kyrmw['filesListObj'][owiyk] = { 'md5': oxjz2i, 'readyUrl': au1h }, kyrmw['fs']['writeFile']({ 'filePath': kyrmw['fileNativeDir'] + '/' + kyrmw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kyrmw['filesListObj']), 'success': function (hc6_5u) {
          console['log']('写入测试测试成功：', hc6_5u);
        }, 'fail': function (mgwk7r) {
          console['log']('写入测试测试失败：', mgwk7r);
        } });
    }, kyrmw['existDir'] = function (u_b1a$, ua1_bh) {
      kyrmw['fs']['mkdir']({ 'dirPath': u_b1a$, 'success': function (d7pge) {
          ua1_bh != null && ua1_bh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (npqfc) {
          if (npqfc['errMsg']['indexOf']('file already exists') != -0x1) kyrmw['readSync'](kyrmw['fileListName'], 'utf8', ua1_bh);else ua1_bh != null && ua1_bh['runWith']([0x1, npqfc]);
        } });
    }, kyrmw['readSync'] = function (b$ua, zj2st, q7pdg, xzsj2i) {
      zj2st === void 0x0 && (zj2st = 'ascill'), xzsj2i === void 0x0 && (xzsj2i = '');var kij8yo = kyrmw['getFileNativePath'](b$ua),
          ztjx;try {
        ztjx = kyrmw['fs']['readFileSync'](kij8yo), q7pdg != null && q7pdg['runWith']([0x0, { 'data': ztjx }]);
      } catch (dp7g) {
        q7pdg != null && q7pdg['runWith']([0x1]);
      }
    }, kyrmw['readCache'] = function () {}, kyrmw['writeCache'] = function (rqep7) {
      var k7wmgr = readyUrl['split']('?')[0x0];kyrmw['filesListObj'][k7wmgr] = { 'md5': md5Name, 'readyUrl': readyUrl }, kyrmw['fs']['writeFile']({ 'filePath': kyrmw['fileNativeDir'] + '/' + kyrmw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kyrmw['filesListObj']), 'success': function (xo8) {}, 'fail': function (dcqfnp) {} });
    }, kyrmw['setNativeFileDir'] = function (oxji) {
      kyrmw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oxji;
    }, kyrmw['filesListObj'] = {}, kyrmw['fileNativeDir'] = null, kyrmw['fileListName'] = 'layaairfiles.txt', kyrmw['ziyuFileData'] = {}, f65hc(kyrmw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kyrmw;
  }(qrme7g),
      au91b = function (ox2izj) {
    function zioxj2() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zioxj2['__super']['call'](this), this['_sound'] = zioxj2['_createSound']();
    }mow8k(zioxj2, 'laya.wx.mini.MiniSound', ox2izj);var $ab41 = zioxj2['prototype'];return $ab41['load'] = function ($94b1a) {
      var a_hu16 = this;$94b1a = _h65u1['formatURL']($94b1a), this['url'] = $94b1a;if (zioxj2['_audioCache'][$94b1a]) {
        this['event']('complete');return;
      }function d65f() {
        if (zioxj2['_null'] != undefined) a_hu16['_sound']['onCanplay'](zioxj2['_null']), a_hu16['_sound']['onError'](zioxj2['_null']);else try {
          a_hu16['_sound']['onCanplay'](null), a_hu16['_sound']['onError'](null), zioxj2['_null'] = null;
        } catch (ba_1hu) {
          console['warn']('[wxmini] _clearSound:' + ba_1hu), a_hu16['_sound']['onCanplay'](b1_$au), a_hu16['_sound']['onError'](b1_$au), zioxj2['_null'] = b1_$au;
        }
      }function mgqer() {
        d65f(), xzo2j['loaded'] = !![], xzo2j['event']('complete'), zioxj2['_audioCache'][xzo2j['url']] = xzo2j;
      }function kwgm(yrk8wm) {
        console['error']('errCode=' + yrk8wm['errCode'] + '  errMsg=' + yrk8wm['errMsg']), d65f(), xzo2j['event']('error');
      }function b1_$au() {}this['_sound']['onCanplay'](mgqer), this['_sound']['onError'](kwgm), this['_sound']['src'] = $94b1a;var xzo2j = this;
    }, $ab41['play'] = function (feqnpd, cqpndf) {
      feqnpd === void 0x0 && (feqnpd = 0x0), cqpndf === void 0x0 && (cqpndf = 0x0);var _ah6u1;if (this['url'] == txz2['_tMusic']) {
        if (!zioxj2['_musicAudio']) zioxj2['_musicAudio'] = zioxj2['_createSound']();_ah6u1 = zioxj2['_musicAudio'];
      } else _ah6u1 = zioxj2['_createSound']();_ah6u1['src'] = this['url'];var g7qer = new yi8jko(_ah6u1);return g7qer['url'] = this['url'], g7qer['loops'] = cqpndf, g7qer['startTime'] = feqnpd, g7qer['play'](), txz2['addChannel'](g7qer), g7qer;
    }, $ab41['dispose'] = function () {
      var pdqefn = zioxj2['_audioCache'][this['url']];pdqefn && (pdqefn['src'] = '', delete zioxj2['_audioCache'][this['url']]);
    }, qdfnep(0x0, $ab41, 'duration', function () {
      return this['_sound']['duration'];
    }), zioxj2['_createSound'] = function () {
      return zioxj2['_id']++, owyk['window']['wx']['createInnerAudioContext']();
    }, zioxj2['_musicAudio'] = null, zioxj2['_id'] = 0x0, zioxj2['_audioCache'] = {}, zioxj2['_null'] = undefined, zioxj2;
  }(qrme7g),
      yi8jko = function (fpndc) {
    function izjsx(ba$) {
      this['_audio'] = null, this['_onEnd'] = null, izjsx['__super']['call'](this), this['_audio'] = ba$, this['_onEnd'] = ednpq['bind'](this['__onEnd'], this), ba$['onEnded'](this['_onEnd']);
    }mow8k(izjsx, 'laya.wx.mini.MiniSoundChannel', fpndc);var k7m8 = izjsx['prototype'];return k7m8['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ndf5c6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k7m8['__onNull'] = function () {}, k7m8['play'] = function () {
      this['isStopped'] = ![], txz2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k7m8['stop'] = function () {
      this['isStopped'] = !![], txz2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (izjsx['_null'] != undefined) this['_audio']['onEnded'](izjsx['_null']);else try {
        this['_audio']['onEnded'](null), izjsx['_null'] = null;
      } catch (_uh6a1) {
        console['warn']('[wxmini] stop:' + _uh6a1), this['_audio']['onEnded'](ednpq['bind'](this['__onNull'], this)), izjsx['_null'] = ednpq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k7m8['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k7m8['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], txz2['addChannel'](this), this['_audio']['play']();
    }, qdfnep(0x0, k7m8, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qdfnep(0x0, k7m8, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qdfnep(0x0, k7m8, 'volume', function () {
      return 0x1;
    }, function (p5cfdn) {}), izjsx['_null'] = undefined, izjsx;
  }(ykij8o);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hu_1b in Laya) {
    var wmko8y = Laya[hu_1b];wmko8y && wmko8y['__isclass'] && (exports[hu_1b] = wmko8y);
  }
});