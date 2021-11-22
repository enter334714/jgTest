var I = wx.$R;
(function (window, document, gdpqf) {
  var w8myko = gdpqf['un'],
      ltz32 = gdpqf['uns'],
      mrky8w = gdpqf['static'],
      m7gre = gdpqf['class'],
      xzs23 = gdpqf['getset'],
      qegd = gdpqf['__newvec'],
      grw7 = laya['utils']['Browser'],
      j2xzio = laya['events']['Event'],
      n6fch5 = laya['events']['EventDispatcher'],
      cn65 = laya['resource']['HTMLImage'],
      ioj8yx = laya['utils']['Handler'],
      wkrg = laya['display']['Input'],
      sv3ltz = laya['net']['Loader'],
      c5u_h = laya['maths']['Matrix'],
      xjio2y = laya['renders']['Render'],
      pqcfd = laya['utils']['RunDriver'],
      rm8wk7 = laya['media']['Sound'],
      bu_a = laya['media']['SoundChannel'],
      emrg7 = laya['media']['SoundManager'],
      x3s2zt = laya['display']['Stage'],
      _c5h6 = laya['net']['URL'],
      sz23xt = laya['utils']['Utils'],
      wmg7rk = function () {
    function ioy8jx() {}return m7gre(ioy8jx, 'laya.wx.mini.MiniAdpter'), ioy8jx['getJson'] = function (ioy8k) {
      return JSON['parse'](ioy8k);
    }, ioy8jx['init'] = function (wgm7er, $u91a) {
      wgm7er === void 0x0 && (wgm7er = ![]), $u91a === void 0x0 && ($u91a = ![]);if (ioy8jx['_inited']) return;ioy8jx['window'] = window;if (ioy8jx['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ioy8jx['_inited'] = !![], ioy8jx['isZiYu'] = $u91a, ioy8jx['isPosMsgYu'] = wgm7er, ioy8jx['EnvConfig'] = {}, !ioy8jx['isZiYu'] && (jyiox8['setNativeFileDir']('/layaairGame'), jyiox8['existDir'](jyiox8['fileNativeDir'], ioj8yx['create'](ioy8jx, ioy8jx['onMkdirCallBack']))), ioy8jx['window']['focus'] = function () {}, gdpqf['getUrlPath'] = function () {}, ioy8jx['window']['logtime'] = function (s2lz) {}, ioy8jx['window']['alertTimeLog'] = function (gde7p) {}, ioy8jx['window']['resetShareInfo'] = function () {}, ioy8jx['window']['CanvasRenderingContext2D'] = function () {}, ioy8jx['window']['CanvasRenderingContext2D']['prototype'] = ioy8jx['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ioy8jx['window']['document']['body']['appendChild'] = function () {}, ioy8jx['EnvConfig']['pixelRatioInt'] = 0x0, pqcfd['getPixelRatio'] = ioy8jx['pixelRatio'], ioy8jx['_preCreateElement'] = grw7['createElement'], grw7['createElement'] = ioy8jx['createElement'], pqcfd['createShaderCondition'] = ioy8jx['createShaderCondition'], sz23xt['parseXMLFromString'] = ioy8jx['parseXMLFromString'], wkrg['_createInputElement'] = rkw87['_createInputElement'], ioy8jx['EnvConfig']['load'] = sv3ltz['prototype']['load'], sv3ltz['prototype']['load'] = jk8oiy['prototype']['load'], ioy8jx['isZiYu'] && wgm7er && wx['onMessage'](function (huab) {
        huab['isLoad'] && (jyiox8['ziyuFileData'][huab['url']] = huab['data']);
      });
    }, ioy8jx['onMkdirCallBack'] = function (dfqcn, c5n6fd) {
      if (!dfqcn) jyiox8['filesListObj'] = JSON['parse'](c5n6fd['data']);
    }, ioy8jx['pixelRatio'] = function () {
      if (!ioy8jx['EnvConfig']['pixelRatioInt']) try {
        var ky8wio = wx['getSystemInfoSync']();return ioy8jx['EnvConfig']['pixelRatioInt'] = ky8wio['pixelRatio'], ky8wio = ky8wio, ky8wio['pixelRatio'];
      } catch (xszji2) {}return ioy8jx['EnvConfig']['pixelRatioInt'];
    }, ioy8jx['createElement'] = function (oj8yi) {
      if (oj8yi == 'canvas') {
        var ioyj2;return ioy8jx['idx'] == 0x1 ? ioy8jx['isZiYu'] ? (ioyj2 = sharedCanvas, ioyj2['style'] = {}) : ioyj2 = window['canvas'] : ioyj2 = window['wx']['createCanvas'](), ioy8jx['idx']++, ioyj2;
      } else {
        if (oj8yi == 'textarea' || oj8yi == 'input') return ioy8jx['onCreateInput'](oj8yi);else {
          if (oj8yi == 'div') {
            var mokyw8 = ioy8jx['_preCreateElement'](oj8yi);return mokyw8['contains'] = function (qnedpf) {
              return null;
            }, mokyw8['removeChild'] = function (ndfqp) {}, mokyw8;
          } else return ioy8jx['_preCreateElement'](oj8yi);
        }
      }
    }, ioy8jx['onCreateInput'] = function (p7req) {
      var nfh6c = ioy8jx['_preCreateElement'](p7req);return nfh6c['focus'] = rkw87['wxinputFocus'], nfh6c['blur'] = rkw87['wxinputblur'], nfh6c['style'] = {}, nfh6c['value'] = 0x0, nfh6c['parentElement'] = {}, nfh6c['placeholder'] = {}, nfh6c['type'] = {}, nfh6c['setColor'] = function (gerqm7) {}, nfh6c['setType'] = function (mwo8y) {}, nfh6c['setFontFace'] = function (vtz3ls) {}, nfh6c['addEventListener'] = function (z3lsvt) {}, nfh6c['contains'] = function (s2xtz) {
        return null;
      }, nfh6c['removeChild'] = function (l0st) {}, nfh6c;
    }, ioy8jx['createShaderCondition'] = function (j8ixoy) {
      var edpfqn = this,
          v3tlz = function () {
        var wrymk = j8ixoy;return edpfqn[j8ixoy['replace']('this.', '')];
      };return v3tlz;
    }, ioy8jx['EnvConfig'] = null, ioy8jx['window'] = null, ioy8jx['_preCreateElement'] = null, ioy8jx['_inited'] = ![], ioy8jx['wxRequest'] = null, ioy8jx['systemInfo'] = null, ioy8jx['version'] = '0.0.1', ioy8jx['isZiYu'] = ![], ioy8jx['isPosMsgYu'] = ![], ioy8jx['parseXMLFromString'] = function (kjyo8) {
      var ndfc6, cn56h;kjyo8 = kjyo8['replace'](/>\s+</g, '><');try {
        ndfc6 = new window['Parser']['DOMParser']()['parseFromString'](kjyo8, 'text/xml');
      } catch (prge7q) {
        throw '需要引入xml解析库文件';
      }return ndfc6;
    }, ioy8jx['idx'] = 0x1, ioy8jx;
  }(),
      oyj8k = function () {
    function e7gwr() {}m7gre(e7gwr, 'laya.wx.mini.MiniImage');var _1huab = e7gwr['prototype'];return _1huab['_loadImage'] = function (krw7g) {
      var b1auh = this,
          _1ua = ![];krw7g['indexOf']('layaNativeDir/') == -0x1 && (_1ua = !![], krw7g = _c5h6['formatURL'](krw7g));if (!jyiox8['getFileInfo'](krw7g)) {
        if (krw7g['indexOf']('http://') != -0x1 || krw7g['indexOf']('https://') != -0x1) jyiox8['downImg'](krw7g, new ioj8yx(e7gwr, e7gwr['onDownImgCallBack'], [krw7g, b1auh]), krw7g);else e7gwr['onCreateImage'](krw7g, b1auh, !![]);
      } else e7gwr['onCreateImage'](krw7g, b1auh, !_1ua);
    }, e7gwr['onDownImgCallBack'] = function (x2siz, zt32sl, _1hb) {
      if (!_1hb) e7gwr['onCreateImage'](x2siz, zt32sl);else zt32sl['onError'](null);
    }, e7gwr['onCreateImage'] = function (ts2zl3, fqpedn, iz2sj) {
      iz2sj === void 0x0 && (iz2sj = ![]);var ba94$1;if (!iz2sj) {
        var rgm7k = jyiox8['getFileInfo'](ts2zl3),
            cnfd65 = rgm7k['md5'];ba94$1 = jyiox8['getFileNativePath'](cnfd65);
      } else ba94$1 = ts2zl3;if (fqpedn['imgCache'] == null) fqpedn['imgCache'] = {};var qfn;function e7gpdq() {
        qfn['onload'] = null, qfn['onerror'] = null, delete fqpedn['imgCache'][ts2zl3];
      };var p7dqeg = function () {
        e7gpdq(), fqpedn['onLoaded'](qfn);
      },
          mw7erg = function () {
        e7gpdq(), fqpedn['event']('error', 'Load image failed');
      };fqpedn['_type'] == 'nativeimage' ? (qfn = new grw7['window']['Image'](), qfn['crossOrigin'] = '', qfn['onload'] = p7dqeg, qfn['onerror'] = mw7erg, qfn['src'] = ba94$1, fqpedn['imgCache'][ts2zl3] = qfn) : new cn65['create'](ba94$1, { 'onload': p7dqeg, 'onerror': mw7erg, 'onCreate': function (wkoym8) {
          qfn = wkoym8, fqpedn['imgCache'][ts2zl3] = wkoym8;
        } });
    }, e7gwr;
  }(),
      rkw87 = function () {
    function m8yrwk() {}return m7gre(m8yrwk, 'laya.wx.mini.MiniInput'), m8yrwk['_createInputElement'] = function () {
      wkrg['_initInput'](wkrg['area'] = grw7['createElement']('textarea')), wkrg['_initInput'](wkrg['input'] = grw7['createElement']('input')), wkrg['inputContainer'] = grw7['createElement']('div'), wkrg['inputContainer']['style']['position'] = 'absolute', wkrg['inputContainer']['style']['zIndex'] = 0x186a0, grw7['container']['appendChild'](wkrg['inputContainer']), wkrg['inputContainer']['setPos'] = function (t2s3xz, tsvl30) {
        wkrg['inputContainer']['style']['left'] = t2s3xz + 'px', wkrg['inputContainer']['style']['top'] = tsvl30 + 'px';
      }, gdpqf['stage']['on']('resize', null, m8yrwk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (npcf5) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), emrg7['_soundClass'] = iow8ky, emrg7['_musicClass'] = iow8ky;
    }, m8yrwk['_onStageResize'] = function () {
      var a194b = gdpqf['stage']['_canvasTransform']['identity']();a194b['scale'](grw7['width'] / xjio2y['canvas']['width'] / pqcfd['getPixelRatio'](), grw7['height'] / xjio2y['canvas']['height'] / pqcfd['getPixelRatio']());
    }, m8yrwk['wxinputFocus'] = function (zst32x) {
      var gpeqf = wkrg['inputElement']['target'];if (gpeqf && !gpeqf['editable']) return;wmg7rk['window']['wx']['offKeyboardConfirm'](), wmg7rk['window']['wx']['offKeyboardInput'](), wmg7rk['window']['wx']['showKeyboard']({ 'defaultValue': gpeqf['text'], 'maxLength': gpeqf['maxChars'], 'multiple': gpeqf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (b$9ua1) {}, 'fail': function (txz32) {} }), wmg7rk['window']['wx']['onKeyboardConfirm'](function (cn56hf) {
        var oiyjx8 = cn56hf ? cn56hf['value'] : '';gpeqf['text'] = oiyjx8, gpeqf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), wmg7rk['window']['wx']['onKeyboardInput'](function ($a94) {
        var lvstz3 = $a94 ? $a94['value'] : '';if (!gpeqf['multiline']) {
          if (lvstz3['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gpeqf['text'] = lvstz3, gpeqf['event']('input');
      });
    }, m8yrwk['inputEnter'] = function () {
      wkrg['inputElement']['target']['focus'] = ![];
    }, m8yrwk['wxinputblur'] = function () {
      m8yrwk['hideKeyboard']();
    }, m8yrwk['hideKeyboard'] = function () {
      wmg7rk['window']['wx']['offKeyboardConfirm'](), wmg7rk['window']['wx']['offKeyboardInput'](), wmg7rk['window']['wx']['hideKeyboard']({ 'success': function (gqdep) {
          console['log']('隐藏键盘');
        }, 'fail': function (jk8io) {
          console['log']('隐藏键盘出错:' + (jk8io ? jk8io['errMsg'] : ''));
        } });
    }, m8yrwk;
  }(),
      jk8oiy = function () {
    function z2() {}m7gre(z2, 'laya.wx.mini.MiniLoader');var l0stv3 = z2['prototype'];return l0stv3['load'] = function (rwge7, n6ch5, huba_, h6_cn, wrmge7) {
      huba_ === void 0x0 && (huba_ = !![]), wrmge7 === void 0x0 && (wrmge7 = ![]);var yoikw = this;yoikw['_url'] = rwge7;if (rwge7['indexOf']('data:image') === 0x0) yoikw['_type'] = n6ch5 = 'image';else yoikw['_type'] = n6ch5 || (n6ch5 = yoikw['getTypeFromUrl'](rwge7));yoikw['_cache'] = huba_, yoikw['_data'] = null;var gpeq = 'ascii';if (rwge7['indexOf']('.fnt') != -0x1) gpeq = 'utf8';else n6ch5 == 'arraybuffer' && (gpeq = '');;var r87mkw = sz23xt['getFileExtension'](rwge7);if (z2['_fileTypeArr']['indexOf'](r87mkw) != -0x1) wmg7rk['EnvConfig']['load']['call'](this, rwge7, n6ch5, huba_, h6_cn, wrmge7);else {
        if (!jyiox8['getFileInfo'](rwge7)) {
          if (rwge7['indexOf']('layaNativeDir/') != -0x1) {
            if (wmg7rk['isZiYu']) {
              var xo2iy = jyiox8['ziyuFileData'][rwge7];yoikw['onLoaded'](xo2iy);return;
            } else {
              cosnole['log']('read read'), jyiox8['read'](rwge7, gpeq, new ioj8yx(z2, z2['onReadNativeCallBack'], [gpeq, rwge7, n6ch5, huba_, h6_cn, wrmge7, yoikw]));return;
            }
          }if (_c5h6['rootPath'] == '') var fcd5np = rwge7;else fcd5np = rwge7['split'](_c5h6['rootPath'])[0x0];rwge7['indexOf']('http://') != -0x1 || rwge7['indexOf']('https://') != -0x1 ? wmg7rk['EnvConfig']['load']['call'](yoikw, rwge7, n6ch5, huba_, h6_cn, wrmge7) : jyiox8['readFile'](fcd5np, gpeq, new ioj8yx(z2, z2['onReadNativeCallBack'], [gpeq, rwge7, n6ch5, huba_, h6_cn, wrmge7, yoikw]), rwge7);
        } else wmg7rk['EnvConfig']['load']['call'](this, rwge7, n6ch5, huba_, h6_cn, wrmge7);
      }
    }, l0stv3['resMgrLoad'] = function (tvs3z, zls32t, gf, kyiwo8, rm7gew, g7emq, ztls) {
      gf === void 0x0 && (gf = 0x0), kyiwo8 === void 0x0 && (kyiwo8 = ![]), rm7gew === void 0x0 && (rm7gew = ![]), g7emq === void 0x0 && (g7emq = 0x0), ztls === void 0x0 && (ztls = 0x3), tvs3z['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tvs3z), wmg7rk['EnvConfig']['resMgrLoad'](tvs3z, (dqpen, l32sz, rkwm87) => {
        z2['prototype']['resMgrLoadCallBack'](dqpen, l32sz, rkwm87, zls32t);
      }, gf, kyiwo8, rm7gew, g7emq, ztls);
    }, l0stv3['resMgrLoadCallBack'] = function (a149b$, ts23zl, lt2s3, gmwkr) {
      console['log']('buff:::', a149b$, lt2s3, jyiox8['fileNativeDir'] + '///' + jyiox8['fileListName']), gmwkr(a149b$, ts23zl, lt2s3);
    }, l0stv3['clearRes'] = function (ped7q, grpq7e) {
      grpq7e === void 0x0 && (grpq7e = ![]);var wgrem = this;wgrem['clearRes'](ped7q, grpq7e);var _hu61a = jyiox8['getFileInfo'](ped7q);if (_hu61a && (ped7q['indexOf']('http://') != -0x1 || ped7q['indexOf']('https://') != -0x1)) {
        var h156u_ = _hu61a['md5'],
            ymkrw = jyiox8['getFileNativePath'](h156u_);jyiox8['remove'](ymkrw);
      }
    }, z2['onReadNativeCallBack'] = function (cfpd5n, egqpd7, abhu_, r7ewm, $1_b, m78w, qrgep, bu1ah_, ncpfd) {
      r7ewm === void 0x0 && (r7ewm = !![]), m78w === void 0x0 && (m78w = ![]), bu1ah_ === void 0x0 && (bu1ah_ = 0x0);if (!bu1ah_) {
        var rgqm;if (abhu_ == 'json' || abhu_ == 'atlas') rgqm = wmg7rk['getJson'](ncpfd['data']);else abhu_ == 'xml' ? rgqm = sz23xt['parseXMLFromString'](ncpfd['data']) : rgqm = ncpfd['data'];qrgep['onLoaded'](rgqm), !wmg7rk['isZiYu'] && wmg7rk['isPosMsgYu'] && abhu_ != 'arraybuffer' && wx['postMessage']({ 'url': egqpd7, 'data': rgqm, 'isLoad': !![] });
      } else bu1ah_ == 0x1 && wmg7rk['EnvConfig']['load']['call'](qrgep, egqpd7, abhu_, r7ewm, $1_b, m78w);
    }, mrky8w(z2, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), z2;
  }(),
      jyiox8 = function (y8oxji) {
    function pd7qeg() {
      pd7qeg['__super']['call'](this);;
    }return m7gre(pd7qeg, 'laya.wx.mini.MiniFileMgr', y8oxji), pd7qeg['isLoadFile'] = function (ermgw7) {
      return pd7qeg['_fileTypeArr']['indexOf'](ermgw7) != -0x1 ? !![] : ![];
    }, pd7qeg['getFileInfo'] = function (a9$1bu) {
      var wiok8 = a9$1bu['split']('?')[0x0],
          _u1h = pd7qeg['filesListObj'][wiok8];if (_u1h == null) return null;else return _u1h;return null;
    }, pd7qeg['onFileUpdate'] = function (x32tsz, u_651h) {
      var cd5f = x32tsz['split']('/'),
          s23zl = cd5f[cd5f['length'] - 0x1],
          eqndp = pd7qeg['getFileInfo'](u_651h);if (eqndp == null) pd7qeg['onSaveFile'](u_651h, s23zl);else {
        if (eqndp['readyUrl'] != u_651h) pd7qeg['remove'](s23zl, u_651h);
      }
    }, pd7qeg['exits'] = function (sv03l, h5u1) {
      var npqcd = pd7qeg['getFileNativePath'](sv03l);pd7qeg['fs']['getFileInfo']({ 'filePath': npqcd, 'success': function (_h5u1) {
          h5u1 != null && h5u1['runWith']([0x0, _h5u1]);
        }, 'fail': function (wykrm8) {
          h5u1 != null && h5u1['runWith']([0x1, wykrm8]);
        } });
    }, pd7qeg['read'] = function (npfqc, chn6_5, endp, o8iwy) {
      chn6_5 === void 0x0 && (chn6_5 = 'ascill'), o8iwy === void 0x0 && (o8iwy = '');var qndc;o8iwy != '' ? qndc = pd7qeg['getFileNativePath'](npfqc) : qndc = npfqc, pd7qeg['fs']['readFile']({ 'filePath': qndc, 'encoding': chn6_5, 'success': function (woiyk) {
          endp != null && endp['runWith']([0x0, woiyk]);
        }, 'fail': function (fncpq) {
          if (fncpq && o8iwy != '') pd7qeg['down'](o8iwy, chn6_5, endp, o8iwy);else endp != null && endp['runWith']([0x1]);
        } });
    }, pd7qeg['readNativeFile'] = function (zs3x, rwegm) {
      pd7qeg['fs']['readFile']({ 'filePath': zs3x, 'encoding': '', 'success': function (jkoy) {
          rwegm != null && rwegm['runWith']([0x0]);
        }, 'fail': function (rwg7) {
          rwegm != null && rwegm['runWith']([0x1]);
        } });
    }, pd7qeg['down'] = function (szt3l2, stl2z, _5h6nc, qnpef) {
      stl2z === void 0x0 && (stl2z = 'ascill'), qnpef === void 0x0 && (qnpef = '');var gp7qed = pd7qeg['getFileNativePath'](qnpef),
          u$b1a_ = pd7qeg['wxdown']({ 'url': szt3l2, 'filePath': gp7qed, 'success': function (f5dc) {
          if (f5dc['statusCode'] === 0xc8) pd7qeg['readFile'](f5dc['filePath'], stl2z, _5h6nc, qnpef);
        }, 'fail': function (mowy8) {
          _5h6nc != null && _5h6nc['runWith']([0x1, mowy8]);
        } });u$b1a_['onProgressUpdate'](function (z2stjx) {
        _5h6nc != null && _5h6nc['runWith']([0x2, z2stjx['progress']]);
      });
    }, pd7qeg['readFile'] = function (nqd, f5npd, _hba, u_b$a) {
      f5npd === void 0x0 && (f5npd = 'ascill'), u_b$a === void 0x0 && (u_b$a = ''), pd7qeg['fs']['readFile']({ 'filePath': nqd, 'encoding': f5npd, 'success': function (ywrkm8) {
          if (nqd['indexOf']('http://') != -0x1 || nqd['indexOf']('https://') != -0x1) pd7qeg['onFileUpdate'](nqd, u_b$a);_hba != null && _hba['runWith']([0x0, ywrkm8]);
        }, 'fail': function (grq7pe) {
          if (grq7pe) _hba != null && _hba['runWith']([0x1, grq7pe]);
        } });
    }, pd7qeg['downImg'] = function (npfd, stjz2x, yiwk8o) {
      yiwk8o === void 0x0 && (yiwk8o = '');var ykwi8 = pd7qeg['wxdown']({ 'url': npfd, 'success': function (ymw8k) {
          ymw8k['statusCode'] === 0xc8 && pd7qeg['copyFile'](ymw8k['tempFilePath'], yiwk8o, stjz2x);
        }, 'fail': function (io2zjx) {
          stjz2x != null && stjz2x['runWith']([0x1, io2zjx]);
        } });
    }, pd7qeg['copyFile'] = function (zio2xj, h5u16, mqgr) {
      var ijsx = zio2xj['split']('/'),
          nc6_ = ijsx[ijsx['length'] - 0x1],
          zlsvt = h5u16['split']('?')[0x0],
          cdqpf = pd7qeg['getFileInfo'](h5u16),
          kowiy8 = pd7qeg['getFileNativePath'](nc6_);pd7qeg['fs']['copyFile']({ 'srcPath': zio2xj, 'destPath': kowiy8, 'success': function (m8woyk) {
          if (!cdqpf) pd7qeg['onSaveFile'](h5u16, nc6_), mqgr != null && mqgr['runWith']([0x0]);else {
            if (cdqpf['readyUrl'] != h5u16) pd7qeg['remove'](nc6_, h5u16, mqgr);
          }
        }, 'fail': function (hb_1ua) {
          mqgr != null && mqgr['runWith']([0x1, hb_1ua]);
        } });
    }, pd7qeg['getFileNativePath'] = function (mgw7) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mgw7;
    }, pd7qeg['remove'] = function (lt3zsv, koiw, _5hn6) {
      koiw === void 0x0 && (koiw = '');var fnepq = pd7qeg['getFileInfo'](koiw),
          qpcfdn = pd7qeg['getFileNativePath'](fnepq['md5']);gdpqf['loader']['clearRes'](fnepq['readyUrl']), pd7qeg['fs']['unlink']({ 'filePath': qpcfdn, 'success': function (cfd56n) {
          if (koiw != '') pd7qeg['onSaveFile'](koiw, lt3zsv);_5hn6 != null && _5hn6['runWith']([0x0]);
        }, 'fail': function (uh51_) {} });
    }, pd7qeg['onSaveFile'] = function (h51_u6, re7wgm) {
      var pf = h51_u6['split']('?')[0x0];pd7qeg['filesListObj'][pf] = { 'md5': re7wgm, 'readyUrl': h51_u6 }, pd7qeg['fs']['writeFile']({ 'filePath': pd7qeg['fileNativeDir'] + '/' + pd7qeg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pd7qeg['filesListObj']), 'success': function (zjxts) {
          console['log']('写入测试测试成功：', zjxts);
        }, 'fail': function (erm7qg) {
          console['log']('写入测试测试失败：', erm7qg);
        } });
    }, pd7qeg['existDir'] = function (mwr8, xzj) {
      pd7qeg['fs']['mkdir']({ 'dirPath': mwr8, 'success': function (nqcpdf) {
          xzj != null && xzj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t2slz3) {
          if (t2slz3['errMsg']['indexOf']('file already exists') != -0x1) pd7qeg['readSync'](pd7qeg['fileListName'], 'utf8', xzj);else xzj != null && xzj['runWith']([0x1, t2slz3]);
        } });
    }, pd7qeg['readSync'] = function (zlst23, c6h5_u, a$u19, gwk7r) {
      c6h5_u === void 0x0 && (c6h5_u = 'ascill'), gwk7r === void 0x0 && (gwk7r = '');var ki8oyw = pd7qeg['getFileNativePath'](zlst23),
          m7gw;try {
        m7gw = pd7qeg['fs']['readFileSync'](ki8oyw), a$u19 != null && a$u19['runWith']([0x0, { 'data': m7gw }]);
      } catch (wym8r) {
        a$u19 != null && a$u19['runWith']([0x1]);
      }
    }, pd7qeg['readCache'] = function () {}, pd7qeg['writeCache'] = function (npfqdc) {
      var n5pcfd = readyUrl['split']('?')[0x0];pd7qeg['filesListObj'][n5pcfd] = { 'md5': md5Name, 'readyUrl': readyUrl }, pd7qeg['fs']['writeFile']({ 'filePath': pd7qeg['fileNativeDir'] + '/' + pd7qeg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pd7qeg['filesListObj']), 'success': function (zt3x) {}, 'fail': function (j8oyki) {} });
    }, pd7qeg['setNativeFileDir'] = function (jz2xio) {
      pd7qeg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jz2xio;
    }, pd7qeg['filesListObj'] = {}, pd7qeg['fileNativeDir'] = null, pd7qeg['fileListName'] = 'layaairfiles.txt', pd7qeg['ziyuFileData'] = {}, mrky8w(pd7qeg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), pd7qeg;
  }(n6fch5),
      iow8ky = function (gpqre) {
    function h6uc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], h6uc['__super']['call'](this), this['_sound'] = h6uc['_createSound']();
    }m7gre(h6uc, 'laya.wx.mini.MiniSound', gpqre);var xi8yo = h6uc['prototype'];return xi8yo['load'] = function (owkm) {
      var gwer = this;owkm = _c5h6['formatURL'](owkm), this['url'] = owkm;if (h6uc['_audioCache'][owkm]) {
        this['event']('complete');return;
      }function xjyio() {
        if (h6uc['_null'] != undefined) gwer['_sound']['onCanplay'](h6uc['_null']), gwer['_sound']['onError'](h6uc['_null']);else try {
          gwer['_sound']['onCanplay'](null), gwer['_sound']['onError'](null), h6uc['_null'] = null;
        } catch (t2zls3) {
          console['warn']('[wxmini] _clearSound:' + t2zls3), gwer['_sound']['onCanplay'](fg), gwer['_sound']['onError'](fg), h6uc['_null'] = fg;
        }
      }function pre() {
        xjyio(), k8ry['loaded'] = !![], k8ry['event']('complete'), h6uc['_audioCache'][k8ry['url']] = k8ry;
      }function jszxi2(reg) {
        console['error']('errCode=' + reg['errCode'] + '  errMsg=' + reg['errMsg']), xjyio(), k8ry['event']('error');
      }function fg() {}this['_sound']['onCanplay'](pre), this['_sound']['onError'](jszxi2), this['_sound']['src'] = owkm;var k8ry = this;
    }, xi8yo['play'] = function (tslz3v, kwo) {
      tslz3v === void 0x0 && (tslz3v = 0x0), kwo === void 0x0 && (kwo = 0x0);var oxj;if (this['url'] == emrg7['_tMusic']) {
        if (!h6uc['_musicAudio']) h6uc['_musicAudio'] = h6uc['_createSound']();oxj = h6uc['_musicAudio'];
      } else oxj = h6uc['_createSound']();oxj['src'] = this['url'];var y8rkwm = new n6hf5(oxj);return y8rkwm['url'] = this['url'], y8rkwm['loops'] = kwo, y8rkwm['startTime'] = tslz3v, y8rkwm['play'](), emrg7['addChannel'](y8rkwm), y8rkwm;
    }, xi8yo['dispose'] = function () {
      var mr7geq = h6uc['_audioCache'][this['url']];mr7geq && (mr7geq['src'] = '', delete h6uc['_audioCache'][this['url']]);
    }, xzs23(0x0, xi8yo, 'duration', function () {
      return this['_sound']['duration'];
    }), h6uc['_createSound'] = function () {
      return h6uc['_id']++, wmg7rk['window']['wx']['createInnerAudioContext']();
    }, h6uc['_musicAudio'] = null, h6uc['_id'] = 0x0, h6uc['_audioCache'] = {}, h6uc['_null'] = undefined, h6uc;
  }(n6fch5),
      n6hf5 = function (egpdf) {
    function a1$4b(kij) {
      this['_audio'] = null, this['_onEnd'] = null, a1$4b['__super']['call'](this), this['_audio'] = kij, this['_onEnd'] = sz23xt['bind'](this['__onEnd'], this), kij['onEnded'](this['_onEnd']);
    }m7gre(a1$4b, 'laya.wx.mini.MiniSoundChannel', egpdf);var $u_a = a1$4b['prototype'];return $u_a['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gdpqf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $u_a['__onNull'] = function () {}, $u_a['play'] = function () {
      this['isStopped'] = ![], emrg7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $u_a['stop'] = function () {
      this['isStopped'] = !![], emrg7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a1$4b['_null'] != undefined) this['_audio']['onEnded'](a1$4b['_null']);else try {
        this['_audio']['onEnded'](null), a1$4b['_null'] = null;
      } catch (pc5) {
        console['warn']('[wxmini] stop:' + pc5), this['_audio']['onEnded'](sz23xt['bind'](this['__onNull'], this)), a1$4b['_null'] = sz23xt['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $u_a['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $u_a['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], emrg7['addChannel'](this), this['_audio']['play']();
    }, xzs23(0x0, $u_a, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xzs23(0x0, $u_a, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xzs23(0x0, $u_a, 'volume', function () {
      return 0x1;
    }, function (mrqe) {}), a1$4b['_null'] = undefined, a1$4b;
  }(bu_a);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jsxz2i in Laya) {
    var ojx2y = Laya[jsxz2i];ojx2y && ojx2y['__isclass'] && (exports[jsxz2i] = ojx2y);
  }
});