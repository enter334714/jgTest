var _ = wx.y$;
!function (lnkpo, egijhf) {
  egijhf['un'], egijhf['uns'];var qspt = egijhf['static'],
      qrust = egijhf['class'],
      roqn = egijhf['getset'];egijhf['__newvec'];var gfcebd = laya['utils']['Browser'],
      zy = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ecb = laya['resource']['HTMLImage'],
      hfgedc = laya['utils']['Handler'],
      kmljih = laya['display']['Input'],
      vwurt = laya['net']['Loader'];laya['maths']['Matrix'];var sruwv = laya['renders']['Render'],
      nijk = laya['utils']['RunDriver'];laya['media']['Sound'];var fgchd = laya['media']['SoundChannel'],
      zxwyv$ = laya['media']['SoundManager'],
      upqt = (laya['display']['Stage'], laya['net']['URL']),
      poql = laya['utils']['Utils'],
      gkjli = (qrust(ijnmk, 'laya.wx.mini.MiniAdpter'), ijnmk['getJson'] = function (bdegcf) {
    return JSON['parse'](bdegcf);
  }, ijnmk['init'] = function (ursv, dfehcg) {
    void 0x0 === ursv && (ursv = !0x1), void 0x0 === dfehcg && (dfehcg = !0x1), ijnmk['_inited'] || (ijnmk['window'] = lnkpo)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ijnmk['_inited'] = !0x0, ijnmk['isZiYu'] = dfehcg, ijnmk['isPosMsgYu'] = ursv, ijnmk['EnvConfig'] = {}, ijnmk['isZiYu'] || (uqsptr['setNativeFileDir']('/layaairGame'), uqsptr['existDir'](uqsptr['fileNativeDir'], hfgedc['create'](ijnmk, ijnmk['onMkdirCallBack']))), ijnmk['window']['focus'] = function () {}, egijhf['getUrlPath'] = function () {}, ijnmk['window']['logtime'] = function (lopqmn) {}, ijnmk['window']['alertTimeLog'] = function (_z120) {}, ijnmk['window']['resetShareInfo'] = function () {}, ijnmk['window']['CanvasRenderingContext2D'] = function () {}, ijnmk['window']['CanvasRenderingContext2D']['prototype'] = ijnmk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ijnmk['window']['document']['body']['appendChild'] = function () {}, ijnmk['EnvConfig']['pixelRatioInt'] = 0x0, nijk['getPixelRatio'] = ijnmk['pixelRatio'], ijnmk['_preCreateElement'] = gfcebd['createElement'], gfcebd['createElement'] = ijnmk['createElement'], nijk['createShaderCondition'] = ijnmk['createShaderCondition'], poql['parseXMLFromString'] = ijnmk['parseXMLFromString'], kmljih['_createInputElement'] = wsutr['_createInputElement'], ijnmk['EnvConfig']['load'] = vwurt['prototype']['load'], vwurt['prototype']['load'] = nrsp['prototype']['load'], ijnmk['isZiYu'] && ursv && wx['onMessage'](function (pturs) {
      pturs['isLoad'] && (uqsptr['ziyuFileData'][pturs['url']] = pturs['data']);
    }));
  }, ijnmk['onMkdirCallBack'] = function (_102$, iglkhj) {
    _102$ || (uqsptr['filesListObj'] = JSON['parse'](iglkhj['data']));
  }, ijnmk['pixelRatio'] = function () {
    if (!ijnmk['EnvConfig']['pixelRatioInt']) try {
      var uwvsx = wx['getSystemInfoSync']();return ijnmk['EnvConfig']['pixelRatioInt'] = uwvsx['pixelRatio'], uwvsx['pixelRatio'];
    } catch (gechfd) {}return ijnmk['EnvConfig']['pixelRatioInt'];
  }, ijnmk['createElement'] = function (pos) {
    var ijfgh;if ('canvas' == pos) return 0x1 == ijnmk['idx'] ? ijnmk['isZiYu'] ? (ijfgh = sharedCanvas)['style'] = {} : ijfgh = lnkpo['canvas'] : ijfgh = lnkpo['wx']['createCanvas'](), ijnmk['idx']++, ijfgh;if ('textarea' == pos || 'input' == pos) return ijnmk['onCreateInput'](pos);if ('div' != pos) return ijnmk['_preCreateElement'](pos);return pos = ijnmk['_preCreateElement'](pos), (pos['contains'] = function (_0yz$) {
      return null;
    }, pos['removeChild'] = function (nmplo) {}, pos);
  }, ijnmk['onCreateInput'] = function (nilkmj) {
    return nilkmj = ijnmk['_preCreateElement'](nilkmj), (nilkmj['focus'] = wsutr['wxinputFocus'], nilkmj['blur'] = wsutr['wxinputblur'], nilkmj['style'] = {}, nilkmj['value'] = 0x0, nilkmj['parentElement'] = {}, nilkmj['placeholder'] = {}, nilkmj['type'] = {}, nilkmj['setColor'] = function (nmpro) {}, nilkmj['setType'] = function (lkgihj) {}, nilkmj['setFontFace'] = function (ebadc) {}, nilkmj['addEventListener'] = function (uvtqsr) {}, nilkmj['contains'] = function (adbec) {
      return null;
    }, nilkmj['removeChild'] = function (vtsuqr) {}, nilkmj);
  }, ijnmk['createShaderCondition'] = function (lpomn) {
    var hmkl = this;return function () {
      return hmkl[lpomn['replace']('this.', '')];
    };
  }, ijnmk['EnvConfig'] = null, ijnmk['window'] = null, ijnmk['_preCreateElement'] = null, ijnmk['_inited'] = !0x1, ijnmk['wxRequest'] = null, ijnmk['systemInfo'] = null, ijnmk['version'] = '0.0.1', ijnmk['isZiYu'] = !0x1, ijnmk['isPosMsgYu'] = !0x1, ijnmk['parseXMLFromString'] = function (wvstxu) {
    var hlijmk;wvstxu = wvstxu['replace'](/>\s+</g, '><');try {
      hlijmk = new lnkpo['Parser']['DOMParser']()['parseFromString'](wvstxu, 'text/xml');
    } catch (feabcd) {
      throw '需要引入xml解析库文件';
    }return hlijmk;
  }, ijnmk['idx'] = 0x1, ijnmk);function ijnmk() {}qrust(rsqpn, 'laya.wx.mini.MiniImage'), rsqpn['prototype']['_loadImage'] = function (defgih) {
    var lmjni = !0x1;-0x1 == defgih['indexOf']('layaNativeDir/') && (lmjni = !0x0, defgih = upqt['formatURL'](defgih)), uqsptr['getFileInfo'](defgih) ? rsqpn['onCreateImage'](defgih, this, !lmjni) : -0x1 != defgih['indexOf']('http://') || -0x1 != defgih['indexOf']('https://') ? uqsptr['downImg'](defgih, new hfgedc(rsqpn, rsqpn['onDownImgCallBack'], [defgih, this]), defgih) : rsqpn['onCreateImage'](defgih, this, !0x0);
  }, rsqpn['onDownImgCallBack'] = function (z_12$0, xvyuwt, stwru) {
    stwru ? xvyuwt['onError'](null) : rsqpn['onCreateImage'](z_12$0, xvyuwt);
  }, rsqpn['onCreateImage'] = function (fghed, jmink, nposrq) {
    var utvyw, mkolj;function dgihe() {
      mkolj['onload'] = null, mkolj['onerror'] = null, delete jmink['imgCache'][fghed];
    }utvyw = (nposrq = void 0x0 === nposrq ? !0x1 : nposrq) ? fghed : (xzyvw = uqsptr['getFileInfo'](fghed)['md5'], uqsptr['getFileNativePath'](xzyvw)), null == jmink['imgCache'] && (jmink['imgCache'] = {}), nposrq = function () {
      dgihe(), jmink['onLoaded'](mkolj);
    };var xzyvw = function () {
      dgihe(), jmink['event']('error', 'Load image failed');
    };'nativeimage' == jmink['_type'] ? ((mkolj = new gfcebd['window']['Image']())['crossOrigin'] = '', mkolj['onload'] = nposrq, mkolj['onerror'] = xzyvw, mkolj['src'] = utvyw, jmink['imgCache'][fghed] = mkolj) : new ecb['create'](utvyw, { 'onload': nposrq, 'onerror': xzyvw, 'onCreate': function (ostpqr) {
        mkolj = ostpqr, jmink['imgCache'][fghed] = ostpqr;
      } });
  };function rsqpn() {}var wsutr = (qrust(oplmkn, 'laya.wx.mini.MiniInput'), oplmkn['_createInputElement'] = function () {
    kmljih['_initInput'](kmljih['area'] = gfcebd['createElement']('textarea')), kmljih['_initInput'](kmljih['input'] = gfcebd['createElement']('input')), kmljih['inputContainer'] = gfcebd['createElement']('div'), kmljih['inputContainer']['style']['position'] = 'absolute', kmljih['inputContainer']['style']['zIndex'] = 0x186a0, gfcebd['container']['appendChild'](kmljih['inputContainer']), kmljih['inputContainer']['setPos'] = function (stquvr, fgdecb) {
      kmljih['inputContainer']['style']['left'] = stquvr + 'px', kmljih['inputContainer']['style']['top'] = fgdecb + 'px';
    }, egijhf['stage']['on']('resize', null, oplmkn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jeifgh) {
      lnkpo['dispatchEvent'] && lnkpo['dispatchEvent']('resize');
    }), zxwyv$['_soundClass'] = nmpkl, zxwyv$['_musicClass'] = nmpkl;
  }, oplmkn['_onStageResize'] = function () {
    egijhf['stage']['_canvasTransform']['identity']()['scale'](gfcebd['width'] / sruwv['canvas']['width'] / nijk['getPixelRatio'](), gfcebd['height'] / sruwv['canvas']['height'] / nijk['getPixelRatio']());
  }, oplmkn['wxinputFocus'] = function (qrtusp) {
    var kjmlhi = kmljih['inputElement']['target'];kjmlhi && !kjmlhi['editable'] || (gkjli['window']['wx']['offKeyboardConfirm'](), gkjli['window']['wx']['offKeyboardInput'](), gkjli['window']['wx']['showKeyboard']({ 'defaultValue': kjmlhi['text'], 'maxLength': kjmlhi['maxChars'], 'multiple': kjmlhi['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (y$zxv) {}, 'fail': function (gjihkf) {} }), gkjli['window']['wx']['onKeyboardConfirm'](function (sqpnro) {
      sqpnro = sqpnro ? sqpnro['value'] : '', (kjmlhi['text'] = sqpnro, kjmlhi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), gkjli['window']['wx']['onKeyboardInput'](function (kjnlmo) {
      kjnlmo = kjnlmo ? kjnlmo['value'] : '', kjmlhi['multiline'] || -0x1 == kjnlmo['indexOf']('\x0a') ? (kjmlhi['text'] = kjnlmo, kjmlhi['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, oplmkn['inputEnter'] = function () {
    kmljih['inputElement']['target']['focus'] = !0x1;
  }, oplmkn['wxinputblur'] = function () {
    oplmkn['hideKeyboard']();
  }, oplmkn['hideKeyboard'] = function () {
    gkjli['window']['wx']['offKeyboardConfirm'](), gkjli['window']['wx']['offKeyboardInput'](), gkjli['window']['wx']['hideKeyboard']({ 'success': function (ploknm) {
        console['log']('隐藏键盘');
      }, 'fail': function (ikgjfh) {
        console['log']('隐藏键盘出错:' + (ikgjfh ? ikgjfh['errMsg'] : ''));
      } });
  }, oplmkn);function oplmkn() {}var nrsp = function () {
    function wvyux() {}qrust(wvyux, 'laya.wx.mini.MiniLoader');var khim = wvyux['prototype'];return khim['load'] = function (vxtu, zx$_y, nlopmq, _$wyx, zwuyxv) {
      void 0x0 === nlopmq && (nlopmq = !0x0), void 0x0 === zwuyxv && (zwuyxv = !0x1);var wv$zxy = this;0x0 === (wv$zxy['_url'] = vxtu)['indexOf']('data:image') ? wv$zxy['_type'] = zx$_y = 'image' : wv$zxy['_type'] = zx$_y = zx$_y || wv$zxy['getTypeFromUrl'](vxtu), wv$zxy['_cache'] = nlopmq, wv$zxy['_data'] = null;var qnorpm = 'ascii';-0x1 != vxtu['indexOf']('.fnt') ? qnorpm = 'utf8' : 'arraybuffer' == zx$_y && (qnorpm = '');var z01$y_ = poql['getFileExtension'](vxtu);if (-0x1 != wvyux['_fileTypeArr']['indexOf'](z01$y_)) gkjli['EnvConfig']['load']['call'](this, vxtu, zx$_y, nlopmq, _$wyx, zwuyxv);else {
        if (uqsptr['getFileInfo'](vxtu)) gkjli['EnvConfig']['load']['call'](this, vxtu, zx$_y, nlopmq, _$wyx, zwuyxv);else {
          if (-0x1 != vxtu['indexOf']('layaNativeDir/')) {
            if (gkjli['isZiYu']) {
              var ljim = uqsptr['ziyuFileData'][vxtu];return void wv$zxy['onLoaded'](ljim);
            }return cosnole['log']('read read'), void uqsptr['read'](vxtu, qnorpm, new hfgedc(wvyux, wvyux['onReadNativeCallBack'], [qnorpm, vxtu, zx$_y, nlopmq, _$wyx, zwuyxv, wv$zxy]));
          }ljim = '' == upqt['rootPath'] ? vxtu : vxtu['split'](upqt['rootPath'])[0x0], -0x1 != vxtu['indexOf']('http://') || -0x1 != vxtu['indexOf']('https://') ? gkjli['EnvConfig']['load']['call'](wv$zxy, vxtu, zx$_y, nlopmq, _$wyx, zwuyxv) : uqsptr['readFile'](ljim, qnorpm, new hfgedc(wvyux, wvyux['onReadNativeCallBack'], [qnorpm, vxtu, zx$_y, nlopmq, _$wyx, zwuyxv, wv$zxy]), vxtu);
        }
      }
    }, khim['resMgrLoad'] = function (klhjig, jklmhi, hgkjfi, gkjih, qponml, pmolk, vswur) {
      void 0x0 === hgkjfi && (hgkjfi = 0x0), void 0x0 === gkjih && (gkjih = !0x1), void 0x0 === qponml && (qponml = !0x1), void 0x0 === pmolk && (pmolk = 0x0), void 0x0 === vswur && (vswur = 0x3), -0x1 != klhjig['indexOf']('mpack') && console['log']('=============resMgrLoad url:', klhjig), gkjli['EnvConfig']['resMgrLoad'](klhjig, (vrsuqt, glik, gchdf) => {
        wvyux['prototype']['resMgrLoadCallBack'](vrsuqt, glik, gchdf, jklmhi);
      }, hgkjfi, gkjih, qponml, pmolk, vswur);
    }, khim['resMgrLoadCallBack'] = function (jfkh, sruvq, oqsrn, tuqrp) {
      console['log']('buff:::', jfkh, oqsrn, uqsptr['fileNativeDir'] + '///' + uqsptr['fileListName']), tuqrp(jfkh, sruvq, oqsrn);
    }, khim['clearRes'] = function ($zxyv, utvxsw) {
      this['clearRes']($zxyv, utvxsw = void 0x0 === utvxsw ? !0x1 : utvxsw), utvxsw = uqsptr['getFileInfo']($zxyv), !utvxsw || -0x1 == $zxyv['indexOf']('http://') && -0x1 == $zxyv['indexOf']('https://') || (utvxsw = utvxsw['md5'], utvxsw = uqsptr['getFileNativePath'](utvxsw), uqsptr['remove'](utvxsw));
    }, wvyux['onReadNativeCallBack'] = function (decfh, vxyzwu, xvwuy, rsto, rnqsop, cghfed, jkmnol, svuwtx, vtux) {
      void 0x0 === rsto && (rsto = !0x0), void 0x0 === cghfed && (cghfed = !0x1), (svuwtx = void 0x0 === svuwtx ? 0x0 : svuwtx) ? 0x1 == svuwtx && gkjli['EnvConfig']['load']['call'](jkmnol, vxyzwu, xvwuy, rsto, rnqsop, cghfed) : (vtux = 'json' == xvwuy || 'atlas' == xvwuy ? gkjli['getJson'](vtux['data']) : 'xml' == xvwuy ? poql['parseXMLFromString'](vtux['data']) : vtux['data'], jkmnol['onLoaded'](vtux), !gkjli['isZiYu'] && gkjli['isPosMsgYu'] && 'arraybuffer' != xvwuy && wx['postMessage']({ 'url': vxyzwu, 'data': vtux, 'isLoad': !0x0 }));
    }, qspt(wvyux, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wvyux;
  }(),
      uqsptr = (qrust(_0$1z2, 'laya.wx.mini.MiniFileMgr', zy), _0$1z2['isLoadFile'] = function (df) {
    return -0x1 != _0$1z2['_fileTypeArr']['indexOf'](df);
  }, _0$1z2['getFileInfo'] = function (lihkg) {
    return lihkg = lihkg['split']('?')[0x0], lihkg = _0$1z2['filesListObj'][lihkg], null == lihkg ? null : lihkg;
  }, _0$1z2['onFileUpdate'] = function (vtqus, ihgkfj) {
    var oqpr = vtqus['split']('/');vtqus = oqpr[oqpr['length'] - 0x1], oqpr = _0$1z2['getFileInfo'](ihgkfj), null == oqpr ? _0$1z2['onSaveFile'](ihgkfj, vtqus) : oqpr['readyUrl'] != ihgkfj && _0$1z2['remove'](vtqus, ihgkfj);
  }, _0$1z2['exits'] = function (npos, mjlkhi) {
    npos = _0$1z2['getFileNativePath'](npos), _0$1z2['fs']['getFileInfo']({ 'filePath': npos, 'success': function (yzvxw$) {
        null != mjlkhi && mjlkhi['runWith']([0x0, yzvxw$]);
      }, 'fail': function (psoqrt) {
        null != mjlkhi && mjlkhi['runWith']([0x1, psoqrt]);
      } });
  }, _0$1z2['read'] = function (tqrup, svutrq, gehfc, jim) {
    void 0x0 === svutrq && (svutrq = 'ascill'), tqrup = '' != (jim = void 0x0 === jim ? '' : jim) ? _0$1z2['getFileNativePath'](tqrup) : tqrup, _0$1z2['fs']['readFile']({ 'filePath': tqrup, 'encoding': svutrq, 'success': function ($z_0xy) {
        null != gehfc && gehfc['runWith']([0x0, $z_0xy]);
      }, 'fail': function (jehfi) {
        jehfi && '' != jim ? _0$1z2['down'](jim, svutrq, gehfc, jim) : null != gehfc && gehfc['runWith']([0x1]);
      } });
  }, _0$1z2['readNativeFile'] = function (vuzyw, hlgi) {
    _0$1z2['fs']['readFile']({ 'filePath': vuzyw, 'encoding': '', 'success': function (igfj) {
        null != hlgi && hlgi['runWith']([0x0]);
      }, 'fail': function (iklhjm) {
        null != hlgi && hlgi['runWith']([0x1]);
      } });
  }, _0$1z2['down'] = function (pqorn, ihjklg, z0y$_, $y0z1) {
    void 0x0 === ihjklg && (ihjklg = 'ascill'), void 0x0 === $y0z1 && ($y0z1 = '');var olmnqp = _0$1z2['getFileNativePath']($y0z1);_0$1z2['wxdown']({ 'url': pqorn, 'filePath': olmnqp, 'success': function (sturwv) {
        0xc8 === sturwv['statusCode'] && _0$1z2['readFile'](sturwv['filePath'], ihjklg, z0y$_, $y0z1);
      }, 'fail': function (v$xzy) {
        null != z0y$_ && z0y$_['runWith']([0x1, v$xzy]);
      } })['onProgressUpdate'](function (kfijh) {
      null != z0y$_ && z0y$_['runWith']([0x2, kfijh['progress']]);
    });
  }, _0$1z2['readFile'] = function (zw$_yx, nmkjl, vxtuws, otqr) {
    void 0x0 === otqr && (otqr = ''), _0$1z2['fs']['readFile']({ 'filePath': zw$_yx, 'encoding': nmkjl = void 0x0 === nmkjl ? 'ascill' : nmkjl, 'success': function (hkjilm) {
        -0x1 == zw$_yx['indexOf']('http://') && -0x1 == zw$_yx['indexOf']('https://') || _0$1z2['onFileUpdate'](zw$_yx, otqr), null != vxtuws && vxtuws['runWith']([0x0, hkjilm]);
      }, 'fail': function (sxwutv) {
        sxwutv && null != vxtuws && vxtuws['runWith']([0x1, sxwutv]);
      } });
  }, _0$1z2['downImg'] = function (onrmqp, egih, sxv) {
    void 0x0 === sxv && (sxv = ''), _0$1z2['wxdown']({ 'url': onrmqp, 'success': function (y$zxwv) {
        0xc8 === y$zxwv['statusCode'] && _0$1z2['copyFile'](y$zxwv['tempFilePath'], sxv, egih);
      }, 'fail': function (jkml) {
        null != egih && egih['runWith']([0x1, jkml]);
      } });
  }, _0$1z2['copyFile'] = function (w$zvyx, hifje, gjilk) {
    var wuxytv = w$zvyx['split']('/'),
        iglhj = wuxytv[wuxytv['length'] - 0x1];hifje['split']('?')[0x0];var vywzu = _0$1z2['getFileInfo'](hifje);wuxytv = _0$1z2['getFileNativePath'](iglhj), _0$1z2['fs']['copyFile']({ 'srcPath': w$zvyx, 'destPath': wuxytv, 'success': function (psqrt) {
        vywzu ? vywzu['readyUrl'] != hifje && _0$1z2['remove'](iglhj, hifje, gjilk) : (_0$1z2['onSaveFile'](hifje, iglhj), null != gjilk && gjilk['runWith']([0x0]));
      }, 'fail': function (dgefcb) {
        null != gjilk && gjilk['runWith']([0x1, dgefcb]);
      } });
  }, _0$1z2['getFileNativePath'] = function (onmj) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + onmj;
  }, _0$1z2['remove'] = function (hfegdc, kilhjm, igdhfe) {
    void 0x0 === kilhjm && (kilhjm = '');var hifej = _0$1z2['getFileInfo'](kilhjm),
        xvyzu = _0$1z2['getFileNativePath'](hifej['md5']);egijhf['loader']['clearRes'](hifej['readyUrl']), _0$1z2['fs']['unlink']({ 'filePath': xvyzu, 'success': function (jeghi) {
        '' != kilhjm && _0$1z2['onSaveFile'](kilhjm, hfegdc), null != igdhfe && igdhfe['runWith']([0x0]);
      }, 'fail': function (_0z) {} });
  }, _0$1z2['onSaveFile'] = function (stvq, jihkg) {
    var jilnkm = stvq['split']('?')[0x0];_0$1z2['filesListObj'][jilnkm] = { 'md5': jihkg, 'readyUrl': stvq }, _0$1z2['fs']['writeFile']({ 'filePath': _0$1z2['fileNativeDir'] + '/' + _0$1z2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_0$1z2['filesListObj']), 'success': function (stw) {
        console['log']('写入测试测试成功：', stw);
      }, 'fail': function (igfedh) {
        console['log']('写入测试测试失败：', igfedh);
      } });
  }, _0$1z2['existDir'] = function (tprso, ideghf) {
    _0$1z2['fs']['mkdir']({ 'dirPath': tprso, 'success': function (bedgc) {
        null != ideghf && ideghf['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (fedgb) {
        -0x1 != fedgb['errMsg']['indexOf']('file already exists') ? _0$1z2['readSync'](_0$1z2['fileListName'], 'utf8', ideghf) : null != ideghf && ideghf['runWith']([0x1, fedgb]);
      } });
  }, _0$1z2['readSync'] = function (uqtsrp, xuwyv, ehgfd, lqmnop) {
    void 0x0 === xuwyv && (xuwyv = 'ascill'), void 0x0 === lqmnop && (lqmnop = ''), uqtsrp = _0$1z2['getFileNativePath'](uqtsrp);var $31_;try {
      $31_ = _0$1z2['fs']['readFileSync'](uqtsrp), null != ehgfd && ehgfd['runWith']([0x0, { 'data': $31_ }]);
    } catch (ornps) {
      null != ehgfd && ehgfd['runWith']([0x1]);
    }
  }, _0$1z2['readCache'] = function () {}, _0$1z2['writeCache'] = function (lonqmp) {
    var kmnplo = readyUrl['split']('?')[0x0];_0$1z2['filesListObj'][kmnplo] = { 'md5': md5Name, 'readyUrl': readyUrl }, _0$1z2['fs']['writeFile']({ 'filePath': _0$1z2['fileNativeDir'] + '/' + _0$1z2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_0$1z2['filesListObj']), 'success': function (x$0y_) {}, 'fail': function (wvs) {} });
  }, _0$1z2['setNativeFileDir'] = function (omkpnl) {
    _0$1z2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + omkpnl;
  }, _0$1z2['filesListObj'] = {}, _0$1z2['fileNativeDir'] = null, _0$1z2['fileListName'] = 'layaairfiles.txt', _0$1z2['ziyuFileData'] = {}, qspt(_0$1z2, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), _0$1z2);function _0$1z2() {
    _0$1z2['__super']['call'](this);
  }var nmpkl = function () {
    function jmilkn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, jmilkn['__super']['call'](this), this['_sound'] = jmilkn['_createSound']();
    }qrust(jmilkn, 'laya.wx.mini.MiniSound', zy);var zx0y_$ = jmilkn['prototype'];return zx0y_$['load'] = function (jkilhm) {
      var lompnk = this,
          _4230;function omplk() {
        if (null != jmilkn['_null']) lompnk['_sound']['onCanplay'](jmilkn['_null']), lompnk['_sound']['onError'](jmilkn['_null']);else try {
          lompnk['_sound']['onCanplay'](null), lompnk['_sound']['onError'](null), jmilkn['_null'] = null;
        } catch (jfig) {
          console['warn']('[wxmini] _clearSound:' + jfig), lompnk['_sound']['onCanplay'](ikghjl), lompnk['_sound']['onError'](ikghjl), jmilkn['_null'] = ikghjl;
        }
      }function ikghjl() {}jkilhm = upqt['formatURL'](jkilhm), this['url'] = jkilhm, jmilkn['_audioCache'][jkilhm] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        omplk(), _4230['loaded'] = !0x0, _4230['event']('complete'), jmilkn['_audioCache'][_4230['url']] = _4230;
      }), this['_sound']['onError'](function (ecdghf) {
        console['error']('errCode=' + ecdghf['errCode'] + '  errMsg=' + ecdghf['errMsg']), omplk(), _4230['event']('error');
      }), this['_sound']['src'] = jkilhm, _4230 = this);
    }, zx0y_$['play'] = function (jhfki, ebfca) {
      void 0x0 === jhfki && (jhfki = 0x0), void 0x0 === ebfca && (ebfca = 0x0), (lkjhg = this['url'] == zxwyv$['_tMusic'] ? (jmilkn['_musicAudio'] || (jmilkn['_musicAudio'] = jmilkn['_createSound']()), jmilkn['_musicAudio']) : jmilkn['_createSound']())['src'] = this['url'];var lkjhg = new mhiklj(lkjhg);return lkjhg['url'] = this['url'], lkjhg['loops'] = ebfca, lkjhg['startTime'] = jhfki, lkjhg['play'](), zxwyv$['addChannel'](lkjhg), lkjhg;
    }, zx0y_$['dispose'] = function () {
      var ijmnl = jmilkn['_audioCache'][this['url']];ijmnl && (ijmnl['src'] = '', delete jmilkn['_audioCache'][this['url']]);
    }, roqn(0x0, zx0y_$, 'duration', function () {
      return this['_sound']['duration'];
    }), jmilkn['_createSound'] = function () {
      return jmilkn['_id']++, gkjli['window']['wx']['createInnerAudioContext']();
    }, jmilkn['_musicAudio'] = null, jmilkn['_id'] = 0x0, jmilkn['_audioCache'] = {}, jmilkn['_null'] = void 0x0, jmilkn;
  }(),
      mhiklj = function () {
    function zuvyxw(dgbec) {
      this['_audio'] = null, this['_onEnd'] = null, zuvyxw['__super']['call'](this), this['_audio'] = dgbec, this['_onEnd'] = poql['bind'](this['__onEnd'], this), dgbec['onEnded'](this['_onEnd']);
    }qrust(zuvyxw, 'laya.wx.mini.MiniSoundChannel', fgchd);var zy$wv = zuvyxw['prototype'];return zy$wv['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (egijhf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zy$wv['__onNull'] = function () {}, zy$wv['play'] = function () {
      this['isStopped'] = !0x1, zxwyv$['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, zy$wv['stop'] = function () {
      if (this['isStopped'] = !0x0, zxwyv$['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != zuvyxw['_null']) this['_audio']['onEnded'](zuvyxw['_null']);else try {
          this['_audio']['onEnded'](null), zuvyxw['_null'] = null;
        } catch (egid) {
          console['warn']('[wxmini] stop:' + egid), this['_audio']['onEnded'](poql['bind'](this['__onNull'], this)), zuvyxw['_null'] = poql['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, zy$wv['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, zy$wv['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, zxwyv$['addChannel'](this), this['_audio']['play']());
    }, roqn(0x0, zy$wv, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), roqn(0x0, zy$wv, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), roqn(0x0, zy$wv, 'volume', function () {
      return 0x1;
    }, function (fbae) {}), zuvyxw['_null'] = void 0x0, zuvyxw;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (adeb, fkjihg) {
  'use strict';

  for (var vzyxuw in Object['defineProperty'](fkjihg, '__esModule', { 'value': !0x0 }), Laya) {
    var rnpom = Laya[vzyxuw];rnpom && rnpom['__isclass'] && (fkjihg[vzyxuw] = rnpom);
  }
});