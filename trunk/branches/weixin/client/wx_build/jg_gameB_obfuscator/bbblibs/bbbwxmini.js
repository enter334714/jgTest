var _ = wx.y$;
!function (ytvux, uqrtps) {
  uqrtps['un'], uqrtps['uns'];var egdfbc = uqrtps['static'],
      vsrwu = uqrtps['class'],
      mnlojk = uqrtps['getset'];uqrtps['__newvec'];var sopnr = laya['utils']['Browser'],
      sproqt = (laya['events']['Event'], laya['events']['EventDispatcher']),
      y_0xz$ = laya['resource']['HTMLImage'],
      sruwv = laya['utils']['Handler'],
      sqtu = laya['display']['Input'],
      qsrpn = laya['net']['Loader'];laya['maths']['Matrix'];var qvrs = laya['renders']['Render'],
      $10_y = laya['utils']['RunDriver'];laya['media']['Sound'];var ljomnk = laya['media']['SoundChannel'],
      cdfegh = laya['media']['SoundManager'],
      igdhfe = (laya['display']['Stage'], laya['net']['URL']),
      z0$1_y = laya['utils']['Utils'],
      $z_xwy = (vsrwu(toprqs, 'laya.wx.mini.MiniAdpter'), toprqs['getJson'] = function (xwy_z) {
    return JSON['parse'](xwy_z);
  }, toprqs['init'] = function (idhfge, edcgbf) {
    void 0x0 === idhfge && (idhfge = !0x1), void 0x0 === edcgbf && (edcgbf = !0x1), toprqs['_inited'] || (toprqs['window'] = ytvux)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (toprqs['_inited'] = !0x0, toprqs['isZiYu'] = edcgbf, toprqs['isPosMsgYu'] = idhfge, toprqs['EnvConfig'] = {}, toprqs['isZiYu'] || (uxtvws['setNativeFileDir']('/layaairGame'), uxtvws['existDir'](uxtvws['fileNativeDir'], sruwv['create'](toprqs, toprqs['onMkdirCallBack']))), toprqs['window']['focus'] = function () {}, uqrtps['getUrlPath'] = function () {}, toprqs['window']['logtime'] = function (mpqln) {}, toprqs['window']['alertTimeLog'] = function (wuxzv) {}, toprqs['window']['resetShareInfo'] = function () {}, toprqs['window']['CanvasRenderingContext2D'] = function () {}, toprqs['window']['CanvasRenderingContext2D']['prototype'] = toprqs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], toprqs['window']['document']['body']['appendChild'] = function () {}, toprqs['EnvConfig']['pixelRatioInt'] = 0x0, $10_y['getPixelRatio'] = toprqs['pixelRatio'], toprqs['_preCreateElement'] = sopnr['createElement'], sopnr['createElement'] = toprqs['createElement'], $10_y['createShaderCondition'] = toprqs['createShaderCondition'], z0$1_y['parseXMLFromString'] = toprqs['parseXMLFromString'], sqtu['_createInputElement'] = rpustq['_createInputElement'], toprqs['EnvConfig']['load'] = qsrpn['prototype']['load'], qsrpn['prototype']['load'] = kmpnol['prototype']['load'], toprqs['isZiYu'] && idhfge && wx['onMessage'](function (xtwsuv) {
      xtwsuv['isLoad'] && (uxtvws['ziyuFileData'][xtwsuv['url']] = xtwsuv['data']);
    }));
  }, toprqs['onMkdirCallBack'] = function (z_10$2, gfbe) {
    z_10$2 || (uxtvws['filesListObj'] = JSON['parse'](gfbe['data']));
  }, toprqs['pixelRatio'] = function () {
    if (!toprqs['EnvConfig']['pixelRatioInt']) try {
      var egdfb = wx['getSystemInfoSync']();return toprqs['EnvConfig']['pixelRatioInt'] = egdfb['pixelRatio'], egdfb['pixelRatio'];
    } catch (dhfie) {}return toprqs['EnvConfig']['pixelRatioInt'];
  }, toprqs['createElement'] = function (wrtsvu) {
    var ghed;if ('canvas' == wrtsvu) return 0x1 == toprqs['idx'] ? toprqs['isZiYu'] ? (ghed = sharedCanvas)['style'] = {} : ghed = ytvux['canvas'] : ghed = ytvux['wx']['createCanvas'](), toprqs['idx']++, ghed;if ('textarea' == wrtsvu || 'input' == wrtsvu) return toprqs['onCreateInput'](wrtsvu);if ('div' != wrtsvu) return toprqs['_preCreateElement'](wrtsvu);return wrtsvu = toprqs['_preCreateElement'](wrtsvu), (wrtsvu['contains'] = function (edifhg) {
      return null;
    }, wrtsvu['removeChild'] = function (wvustr) {}, wrtsvu);
  }, toprqs['onCreateInput'] = function (zw_x$) {
    return zw_x$ = toprqs['_preCreateElement'](zw_x$), (zw_x$['focus'] = rpustq['wxinputFocus'], zw_x$['blur'] = rpustq['wxinputblur'], zw_x$['style'] = {}, zw_x$['value'] = 0x0, zw_x$['parentElement'] = {}, zw_x$['placeholder'] = {}, zw_x$['type'] = {}, zw_x$['setColor'] = function (imkh) {}, zw_x$['setType'] = function (vxw$zy) {}, zw_x$['setFontFace'] = function (fgcdhe) {}, zw_x$['addEventListener'] = function (uprtsq) {}, zw_x$['contains'] = function (y$0_1) {
      return null;
    }, zw_x$['removeChild'] = function (gfcd) {}, zw_x$);
  }, toprqs['createShaderCondition'] = function (twvrs) {
    var xwuv = this;return function () {
      return xwuv[twvrs['replace']('this.', '')];
    };
  }, toprqs['EnvConfig'] = null, toprqs['window'] = null, toprqs['_preCreateElement'] = null, toprqs['_inited'] = !0x1, toprqs['wxRequest'] = null, toprqs['systemInfo'] = null, toprqs['version'] = '0.0.1', toprqs['isZiYu'] = !0x1, toprqs['isPosMsgYu'] = !0x1, toprqs['parseXMLFromString'] = function (vtrw) {
    var uzwvy;vtrw = vtrw['replace'](/>\s+</g, '><');try {
      uzwvy = new ytvux['Parser']['DOMParser']()['parseFromString'](vtrw, 'text/xml');
    } catch (jhfgk) {
      throw '需要引入xml解析库文件';
    }return uzwvy;
  }, toprqs['idx'] = 0x1, toprqs);function toprqs() {}vsrwu(jgl, 'laya.wx.mini.MiniImage'), jgl['prototype']['_loadImage'] = function (egfdcb) {
    var qpnoml = !0x1;-0x1 == egfdcb['indexOf']('layaNativeDir/') && (qpnoml = !0x0, egfdcb = igdhfe['formatURL'](egfdcb)), uxtvws['getFileInfo'](egfdcb) ? jgl['onCreateImage'](egfdcb, this, !qpnoml) : -0x1 != egfdcb['indexOf']('http://') || -0x1 != egfdcb['indexOf']('https://') ? uxtvws['downImg'](egfdcb, new sruwv(jgl, jgl['onDownImgCallBack'], [egfdcb, this]), egfdcb) : jgl['onCreateImage'](egfdcb, this, !0x0);
  }, jgl['onDownImgCallBack'] = function (ilmjkn, kfi, mniklj) {
    mniklj ? kfi['onError'](null) : jgl['onCreateImage'](ilmjkn, kfi);
  }, jgl['onCreateImage'] = function ($vwzxy, fgjei, rpqn) {
    var eghif, mknloj;function wvsutr() {
      mknloj['onload'] = null, mknloj['onerror'] = null, delete fgjei['imgCache'][$vwzxy];
    }eghif = (rpqn = void 0x0 === rpqn ? !0x1 : rpqn) ? $vwzxy : (dghie = uxtvws['getFileInfo']($vwzxy)['md5'], uxtvws['getFileNativePath'](dghie)), null == fgjei['imgCache'] && (fgjei['imgCache'] = {}), rpqn = function () {
      wvsutr(), fgjei['onLoaded'](mknloj);
    };var dghie = function () {
      wvsutr(), fgjei['event']('error', 'Load image failed');
    };'nativeimage' == fgjei['_type'] ? ((mknloj = new sopnr['window']['Image']())['crossOrigin'] = '', mknloj['onload'] = rpqn, mknloj['onerror'] = dghie, mknloj['src'] = eghif, fgjei['imgCache'][$vwzxy] = mknloj) : new y_0xz$['create'](eghif, { 'onload': rpqn, 'onerror': dghie, 'onCreate': function (vsxtuw) {
        mknloj = vsxtuw, fgjei['imgCache'][$vwzxy] = vsxtuw;
      } });
  };function jgl() {}var rpustq = (vsrwu(cbeadf, 'laya.wx.mini.MiniInput'), cbeadf['_createInputElement'] = function () {
    sqtu['_initInput'](sqtu['area'] = sopnr['createElement']('textarea')), sqtu['_initInput'](sqtu['input'] = sopnr['createElement']('input')), sqtu['inputContainer'] = sopnr['createElement']('div'), sqtu['inputContainer']['style']['position'] = 'absolute', sqtu['inputContainer']['style']['zIndex'] = 0x186a0, sopnr['container']['appendChild'](sqtu['inputContainer']), sqtu['inputContainer']['setPos'] = function (dhec, mpnor) {
      sqtu['inputContainer']['style']['left'] = dhec + 'px', sqtu['inputContainer']['style']['top'] = mpnor + 'px';
    }, uqrtps['stage']['on']('resize', null, cbeadf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (osqtpr) {
      ytvux['dispatchEvent'] && ytvux['dispatchEvent']('resize');
    }), cdfegh['_soundClass'] = xwvuyz, cdfegh['_musicClass'] = xwvuyz;
  }, cbeadf['_onStageResize'] = function () {
    uqrtps['stage']['_canvasTransform']['identity']()['scale'](sopnr['width'] / qvrs['canvas']['width'] / $10_y['getPixelRatio'](), sopnr['height'] / qvrs['canvas']['height'] / $10_y['getPixelRatio']());
  }, cbeadf['wxinputFocus'] = function (z_0y1) {
    var zxyw$v = sqtu['inputElement']['target'];zxyw$v && !zxyw$v['editable'] || ($z_xwy['window']['wx']['offKeyboardConfirm'](), $z_xwy['window']['wx']['offKeyboardInput'](), $z_xwy['window']['wx']['showKeyboard']({ 'defaultValue': zxyw$v['text'], 'maxLength': zxyw$v['maxChars'], 'multiple': zxyw$v['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (vty) {}, 'fail': function (nkloj) {} }), $z_xwy['window']['wx']['onKeyboardConfirm'](function ($0_1zy) {
      $0_1zy = $0_1zy ? $0_1zy['value'] : '', (zxyw$v['text'] = $0_1zy, zxyw$v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $z_xwy['window']['wx']['onKeyboardInput'](function (uprqts) {
      uprqts = uprqts ? uprqts['value'] : '', zxyw$v['multiline'] || -0x1 == uprqts['indexOf']('\x0a') ? (zxyw$v['text'] = uprqts, zxyw$v['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, cbeadf['inputEnter'] = function () {
    sqtu['inputElement']['target']['focus'] = !0x1;
  }, cbeadf['wxinputblur'] = function () {
    cbeadf['hideKeyboard']();
  }, cbeadf['hideKeyboard'] = function () {
    $z_xwy['window']['wx']['offKeyboardConfirm'](), $z_xwy['window']['wx']['offKeyboardInput'](), $z_xwy['window']['wx']['hideKeyboard']({ 'success': function (jmhil) {
        console['log']('隐藏键盘');
      }, 'fail': function (adfeb) {
        console['log']('隐藏键盘出错:' + (adfeb ? adfeb['errMsg'] : ''));
      } });
  }, cbeadf);function cbeadf() {}var kmpnol = function () {
    function jgfhk() {}vsrwu(jgfhk, 'laya.wx.mini.MiniLoader');var efhji = jgfhk['prototype'];return efhji['load'] = function (rsptu, wuvxt, $z102_, _2014, ghijef) {
      void 0x0 === $z102_ && ($z102_ = !0x0), void 0x0 === ghijef && (ghijef = !0x1);var fhikj = this;0x0 === (fhikj['_url'] = rsptu)['indexOf']('data:image') ? fhikj['_type'] = wuvxt = 'image' : fhikj['_type'] = wuvxt = wuvxt || fhikj['getTypeFromUrl'](rsptu), fhikj['_cache'] = $z102_, fhikj['_data'] = null;var cedgh = 'ascii';-0x1 != rsptu['indexOf']('.fnt') ? cedgh = 'utf8' : 'arraybuffer' == wuvxt && (cedgh = '');var dfige = z0$1_y['getFileExtension'](rsptu);if (-0x1 != jgfhk['_fileTypeArr']['indexOf'](dfige)) $z_xwy['EnvConfig']['load']['call'](this, rsptu, wuvxt, $z102_, _2014, ghijef);else {
        if (uxtvws['getFileInfo'](rsptu)) $z_xwy['EnvConfig']['load']['call'](this, rsptu, wuvxt, $z102_, _2014, ghijef);else {
          if (-0x1 != rsptu['indexOf']('layaNativeDir/')) {
            if ($z_xwy['isZiYu']) {
              var quvst = uxtvws['ziyuFileData'][rsptu];return void fhikj['onLoaded'](quvst);
            }return cosnole['log']('read read'), void uxtvws['read'](rsptu, cedgh, new sruwv(jgfhk, jgfhk['onReadNativeCallBack'], [cedgh, rsptu, wuvxt, $z102_, _2014, ghijef, fhikj]));
          }quvst = '' == igdhfe['rootPath'] ? rsptu : rsptu['split'](igdhfe['rootPath'])[0x0], -0x1 != rsptu['indexOf']('http://') || -0x1 != rsptu['indexOf']('https://') ? $z_xwy['EnvConfig']['load']['call'](fhikj, rsptu, wuvxt, $z102_, _2014, ghijef) : uxtvws['readFile'](quvst, cedgh, new sruwv(jgfhk, jgfhk['onReadNativeCallBack'], [cedgh, rsptu, wuvxt, $z102_, _2014, ghijef, fhikj]), rsptu);
        }
      }
    }, efhji['resMgrLoad'] = function (vyzux, snrq, twuxsv, utvsrq, qostr, mplqn, hjki) {
      void 0x0 === twuxsv && (twuxsv = 0x0), void 0x0 === utvsrq && (utvsrq = !0x1), void 0x0 === qostr && (qostr = !0x1), void 0x0 === mplqn && (mplqn = 0x0), void 0x0 === hjki && (hjki = 0x3), -0x1 != vyzux['indexOf']('mpack') && console['log']('=============resMgrLoad url:', vyzux), $z_xwy['EnvConfig']['resMgrLoad'](vyzux, (utrsq, wurvts, wzyux) => {
        jgfhk['prototype']['resMgrLoadCallBack'](utrsq, wurvts, wzyux, snrq);
      }, twuxsv, utvsrq, qostr, mplqn, hjki);
    }, efhji['resMgrLoadCallBack'] = function (_z12, _wzy$, olnmk, $013_2) {
      console['log']('buff:::', _z12, olnmk, uxtvws['fileNativeDir'] + '///' + uxtvws['fileListName']), $013_2(_z12, _wzy$, olnmk);
    }, efhji['clearRes'] = function (uswtx, spqrot) {
      this['clearRes'](uswtx, spqrot = void 0x0 === spqrot ? !0x1 : spqrot), spqrot = uxtvws['getFileInfo'](uswtx), !spqrot || -0x1 == uswtx['indexOf']('http://') && -0x1 == uswtx['indexOf']('https://') || (spqrot = spqrot['md5'], spqrot = uxtvws['getFileNativePath'](spqrot), uxtvws['remove'](spqrot));
    }, jgfhk['onReadNativeCallBack'] = function (eabfd, nmjok, yz$w_x, egihjf, nolmk, hief, hifjgk, gfijhk, gfjhik) {
      void 0x0 === egihjf && (egihjf = !0x0), void 0x0 === hief && (hief = !0x1), (gfijhk = void 0x0 === gfijhk ? 0x0 : gfijhk) ? 0x1 == gfijhk && $z_xwy['EnvConfig']['load']['call'](hifjgk, nmjok, yz$w_x, egihjf, nolmk, hief) : (gfjhik = 'json' == yz$w_x || 'atlas' == yz$w_x ? $z_xwy['getJson'](gfjhik['data']) : 'xml' == yz$w_x ? z0$1_y['parseXMLFromString'](gfjhik['data']) : gfjhik['data'], hifjgk['onLoaded'](gfjhik), !$z_xwy['isZiYu'] && $z_xwy['isPosMsgYu'] && 'arraybuffer' != yz$w_x && wx['postMessage']({ 'url': nmjok, 'data': gfjhik, 'isLoad': !0x0 }));
    }, egdfbc(jgfhk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jgfhk;
  }(),
      uxtvws = (vsrwu(rspnqo, 'laya.wx.mini.MiniFileMgr', sproqt), rspnqo['isLoadFile'] = function (jehfi) {
    return -0x1 != rspnqo['_fileTypeArr']['indexOf'](jehfi);
  }, rspnqo['getFileInfo'] = function (fhgid) {
    return fhgid = fhgid['split']('?')[0x0], fhgid = rspnqo['filesListObj'][fhgid], null == fhgid ? null : fhgid;
  }, rspnqo['onFileUpdate'] = function (nprsqo, monklj) {
    var mlnoqp = nprsqo['split']('/');nprsqo = mlnoqp[mlnoqp['length'] - 0x1], mlnoqp = rspnqo['getFileInfo'](monklj), null == mlnoqp ? rspnqo['onSaveFile'](monklj, nprsqo) : mlnoqp['readyUrl'] != monklj && rspnqo['remove'](nprsqo, monklj);
  }, rspnqo['exits'] = function (gihjfk, pmolqn) {
    gihjfk = rspnqo['getFileNativePath'](gihjfk), rspnqo['fs']['getFileInfo']({ 'filePath': gihjfk, 'success': function (vwtuxy) {
        null != pmolqn && pmolqn['runWith']([0x0, vwtuxy]);
      }, 'fail': function (rpmnoq) {
        null != pmolqn && pmolqn['runWith']([0x1, rpmnoq]);
      } });
  }, rspnqo['read'] = function (srotp, _yz01, z0_$2, wy$zxv) {
    void 0x0 === _yz01 && (_yz01 = 'ascill'), srotp = '' != (wy$zxv = void 0x0 === wy$zxv ? '' : wy$zxv) ? rspnqo['getFileNativePath'](srotp) : srotp, rspnqo['fs']['readFile']({ 'filePath': srotp, 'encoding': _yz01, 'success': function (z$yvw) {
        null != z0_$2 && z0_$2['runWith']([0x0, z$yvw]);
      }, 'fail': function (pomqnr) {
        pomqnr && '' != wy$zxv ? rspnqo['down'](wy$zxv, _yz01, z0_$2, wy$zxv) : null != z0_$2 && z0_$2['runWith']([0x1]);
      } });
  }, rspnqo['readNativeFile'] = function (x0yz$_, oqpl) {
    rspnqo['fs']['readFile']({ 'filePath': x0yz$_, 'encoding': '', 'success': function (geidf) {
        null != oqpl && oqpl['runWith']([0x0]);
      }, 'fail': function (kpnml) {
        null != oqpl && oqpl['runWith']([0x1]);
      } });
  }, rspnqo['down'] = function (fbg, bcfda, yuz, y_x) {
    void 0x0 === bcfda && (bcfda = 'ascill'), void 0x0 === y_x && (y_x = '');var $21_3 = rspnqo['getFileNativePath'](y_x);rspnqo['wxdown']({ 'url': fbg, 'filePath': $21_3, 'success': function (ehdi) {
        0xc8 === ehdi['statusCode'] && rspnqo['readFile'](ehdi['filePath'], bcfda, yuz, y_x);
      }, 'fail': function ($zy0x_) {
        null != yuz && yuz['runWith']([0x1, $zy0x_]);
      } })['onProgressUpdate'](function ($xwz) {
      null != yuz && yuz['runWith']([0x2, $xwz['progress']]);
    });
  }, rspnqo['readFile'] = function (vqrsut, uxyw, efabc, $x_zyw) {
    void 0x0 === $x_zyw && ($x_zyw = ''), rspnqo['fs']['readFile']({ 'filePath': vqrsut, 'encoding': uxyw = void 0x0 === uxyw ? 'ascill' : uxyw, 'success': function (gdi) {
        -0x1 == vqrsut['indexOf']('http://') && -0x1 == vqrsut['indexOf']('https://') || rspnqo['onFileUpdate'](vqrsut, $x_zyw), null != efabc && efabc['runWith']([0x0, gdi]);
      }, 'fail': function (omjnl) {
        omjnl && null != efabc && efabc['runWith']([0x1, omjnl]);
      } });
  }, rspnqo['downImg'] = function (nklji, kgjihf, ijlnkm) {
    void 0x0 === ijlnkm && (ijlnkm = ''), rspnqo['wxdown']({ 'url': nklji, 'success': function (igjlhk) {
        0xc8 === igjlhk['statusCode'] && rspnqo['copyFile'](igjlhk['tempFilePath'], ijlnkm, kgjihf);
      }, 'fail': function (hcgfe) {
        null != kgjihf && kgjihf['runWith']([0x1, hcgfe]);
      } });
  }, rspnqo['copyFile'] = function (onmjlk, lopnm, lkgih) {
    var ijkhgf = onmjlk['split']('/'),
        ilgjh = ijkhgf[ijkhgf['length'] - 0x1];lopnm['split']('?')[0x0];var mhjk = rspnqo['getFileInfo'](lopnm);ijkhgf = rspnqo['getFileNativePath'](ilgjh), rspnqo['fs']['copyFile']({ 'srcPath': onmjlk, 'destPath': ijkhgf, 'success': function (nrpmo) {
        mhjk ? mhjk['readyUrl'] != lopnm && rspnqo['remove'](ilgjh, lopnm, lkgih) : (rspnqo['onSaveFile'](lopnm, ilgjh), null != lkgih && lkgih['runWith']([0x0]));
      }, 'fail': function (dfeca) {
        null != lkgih && lkgih['runWith']([0x1, dfeca]);
      } });
  }, rspnqo['getFileNativePath'] = function (jhkm) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jhkm;
  }, rspnqo['remove'] = function (mkjhil, y$xw, _324) {
    void 0x0 === y$xw && (y$xw = '');var fchge = rspnqo['getFileInfo'](y$xw),
        gfdbec = rspnqo['getFileNativePath'](fchge['md5']);uqrtps['loader']['clearRes'](fchge['readyUrl']), rspnqo['fs']['unlink']({ 'filePath': gfdbec, 'success': function (wv$xyz) {
        '' != y$xw && rspnqo['onSaveFile'](y$xw, mkjhil), null != _324 && _324['runWith']([0x0]);
      }, 'fail': function (vwyxut) {} });
  }, rspnqo['onSaveFile'] = function (lmijk, rosqp) {
    var $wy_ = lmijk['split']('?')[0x0];rspnqo['filesListObj'][$wy_] = { 'md5': rosqp, 'readyUrl': lmijk }, rspnqo['fs']['writeFile']({ 'filePath': rspnqo['fileNativeDir'] + '/' + rspnqo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rspnqo['filesListObj']), 'success': function (zvyw) {
        console['log']('写入测试测试成功：', zvyw);
      }, 'fail': function (geij) {
        console['log']('写入测试测试失败：', geij);
      } });
  }, rspnqo['existDir'] = function (mkhilj, urswt) {
    rspnqo['fs']['mkdir']({ 'dirPath': mkhilj, 'success': function (rosqtp) {
        null != urswt && urswt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (ompqrn) {
        -0x1 != ompqrn['errMsg']['indexOf']('file already exists') ? rspnqo['readSync'](rspnqo['fileListName'], 'utf8', urswt) : null != urswt && urswt['runWith']([0x1, ompqrn]);
      } });
  }, rspnqo['readSync'] = function (cdgeb, kjif, mljk, fkhjg) {
    void 0x0 === kjif && (kjif = 'ascill'), void 0x0 === fkhjg && (fkhjg = ''), cdgeb = rspnqo['getFileNativePath'](cdgeb);var omjkn;try {
      omjkn = rspnqo['fs']['readFileSync'](cdgeb), null != mljk && mljk['runWith']([0x0, { 'data': omjkn }]);
    } catch (x$ywz) {
      null != mljk && mljk['runWith']([0x1]);
    }
  }, rspnqo['readCache'] = function () {}, rspnqo['writeCache'] = function (rqmno) {
    var lkhimj = readyUrl['split']('?')[0x0];rspnqo['filesListObj'][lkhimj] = { 'md5': md5Name, 'readyUrl': readyUrl }, rspnqo['fs']['writeFile']({ 'filePath': rspnqo['fileNativeDir'] + '/' + rspnqo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rspnqo['filesListObj']), 'success': function (ihefd) {}, 'fail': function (uvtqrs) {} });
  }, rspnqo['setNativeFileDir'] = function (x$wvy) {
    rspnqo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x$wvy;
  }, rspnqo['filesListObj'] = {}, rspnqo['fileNativeDir'] = null, rspnqo['fileListName'] = 'layaairfiles.txt', rspnqo['ziyuFileData'] = {}, egdfbc(rspnqo, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), rspnqo);function rspnqo() {
    rspnqo['__super']['call'](this);
  }var xwvuyz = function () {
    function hlmkij() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, hlmkij['__super']['call'](this), this['_sound'] = hlmkij['_createSound']();
    }vsrwu(hlmkij, 'laya.wx.mini.MiniSound', sproqt);var rwtvs = hlmkij['prototype'];return rwtvs['load'] = function ($yz0x) {
      var fcegbd = this,
          sutvrw;function gcdfeh() {
        if (null != hlmkij['_null']) fcegbd['_sound']['onCanplay'](hlmkij['_null']), fcegbd['_sound']['onError'](hlmkij['_null']);else try {
          fcegbd['_sound']['onCanplay'](null), fcegbd['_sound']['onError'](null), hlmkij['_null'] = null;
        } catch (bfceda) {
          console['warn']('[wxmini] _clearSound:' + bfceda), fcegbd['_sound']['onCanplay'](jih), fcegbd['_sound']['onError'](jih), hlmkij['_null'] = jih;
        }
      }function jih() {}$yz0x = igdhfe['formatURL']($yz0x), this['url'] = $yz0x, hlmkij['_audioCache'][$yz0x] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        gcdfeh(), sutvrw['loaded'] = !0x0, sutvrw['event']('complete'), hlmkij['_audioCache'][sutvrw['url']] = sutvrw;
      }), this['_sound']['onError'](function (acdbef) {
        console['error']('errCode=' + acdbef['errCode'] + '  errMsg=' + acdbef['errMsg']), gcdfeh(), sutvrw['event']('error');
      }), this['_sound']['src'] = $yz0x, sutvrw = this);
    }, rwtvs['play'] = function (lihjkm, vqru) {
      void 0x0 === lihjkm && (lihjkm = 0x0), void 0x0 === vqru && (vqru = 0x0), (sqorn = this['url'] == cdfegh['_tMusic'] ? (hlmkij['_musicAudio'] || (hlmkij['_musicAudio'] = hlmkij['_createSound']()), hlmkij['_musicAudio']) : hlmkij['_createSound']())['src'] = this['url'];var sqorn = new rstuq(sqorn);return sqorn['url'] = this['url'], sqorn['loops'] = vqru, sqorn['startTime'] = lihjkm, sqorn['play'](), cdfegh['addChannel'](sqorn), sqorn;
    }, rwtvs['dispose'] = function () {
      var xtvsuw = hlmkij['_audioCache'][this['url']];xtvsuw && (xtvsuw['src'] = '', delete hlmkij['_audioCache'][this['url']]);
    }, mnlojk(0x0, rwtvs, 'duration', function () {
      return this['_sound']['duration'];
    }), hlmkij['_createSound'] = function () {
      return hlmkij['_id']++, $z_xwy['window']['wx']['createInnerAudioContext']();
    }, hlmkij['_musicAudio'] = null, hlmkij['_id'] = 0x0, hlmkij['_audioCache'] = {}, hlmkij['_null'] = void 0x0, hlmkij;
  }(),
      rstuq = function () {
    function qrtp(qropsn) {
      this['_audio'] = null, this['_onEnd'] = null, qrtp['__super']['call'](this), this['_audio'] = qropsn, this['_onEnd'] = z0$1_y['bind'](this['__onEnd'], this), qropsn['onEnded'](this['_onEnd']);
    }vsrwu(qrtp, 'laya.wx.mini.MiniSoundChannel', ljomnk);var olmk = qrtp['prototype'];return olmk['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (uqrtps['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, olmk['__onNull'] = function () {}, olmk['play'] = function () {
      this['isStopped'] = !0x1, cdfegh['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, olmk['stop'] = function () {
      if (this['isStopped'] = !0x0, cdfegh['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != qrtp['_null']) this['_audio']['onEnded'](qrtp['_null']);else try {
          this['_audio']['onEnded'](null), qrtp['_null'] = null;
        } catch (bfaedc) {
          console['warn']('[wxmini] stop:' + bfaedc), this['_audio']['onEnded'](z0$1_y['bind'](this['__onNull'], this)), qrtp['_null'] = z0$1_y['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, olmk['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, olmk['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, cdfegh['addChannel'](this), this['_audio']['play']());
    }, mnlojk(0x0, olmk, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), mnlojk(0x0, olmk, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), mnlojk(0x0, olmk, 'volume', function () {
      return 0x1;
    }, function (gcehf) {}), qrtp['_null'] = void 0x0, qrtp;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (nolmqp, opqtr) {
  'use strict';

  for (var _z2$10 in Object['defineProperty'](opqtr, '__esModule', { 'value': !0x0 }), Laya) {
    var jlni = Laya[_z2$10];jlni && jlni['__isclass'] && (opqtr[_z2$10] = jlni);
  }
});