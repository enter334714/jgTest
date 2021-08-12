var _ = wx.y$;
!function (nlopmq, lmjih) {
  lmjih['un'], lmjih['uns'];var wyvu = lmjih['static'],
      yxz0$_ = lmjih['class'],
      _1$zy0 = lmjih['getset'];lmjih['__newvec'];var fhgdei = laya['utils']['Browser'],
      iehg = (laya['events']['Event'], laya['events']['EventDispatcher']),
      pknlo = laya['resource']['HTMLImage'],
      ebcdg = laya['utils']['Handler'],
      svuqr = laya['display']['Input'],
      idfegh = laya['net']['Loader'];laya['maths']['Matrix'];var kijghf = laya['renders']['Render'],
      fegidh = laya['utils']['RunDriver'];laya['media']['Sound'];var lmkin = laya['media']['SoundChannel'],
      $vyw = laya['media']['SoundManager'],
      z_x0y = (laya['display']['Stage'], laya['net']['URL']),
      konlmj = laya['utils']['Utils'],
      klmnp = (yxz0$_(tsvxwu, 'laya.wx.mini.MiniAdpter'), tsvxwu['getJson'] = function (mplqno) {
    return JSON['parse'](mplqno);
  }, tsvxwu['init'] = function (utvrw, gfecb) {
    void 0x0 === utvrw && (utvrw = !0x1), void 0x0 === gfecb && (gfecb = !0x1), tsvxwu['_inited'] || (tsvxwu['window'] = nlopmq)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (tsvxwu['_inited'] = !0x0, tsvxwu['isZiYu'] = gfecb, tsvxwu['isPosMsgYu'] = utvrw, tsvxwu['EnvConfig'] = {}, tsvxwu['isZiYu'] || (jkinlm['setNativeFileDir']('/layaairGame'), jkinlm['existDir'](jkinlm['fileNativeDir'], ebcdg['create'](tsvxwu, tsvxwu['onMkdirCallBack']))), tsvxwu['window']['focus'] = function () {}, lmjih['getUrlPath'] = function () {}, tsvxwu['window']['logtime'] = function (gfedcb) {}, tsvxwu['window']['alertTimeLog'] = function (rpots) {}, tsvxwu['window']['resetShareInfo'] = function () {}, tsvxwu['window']['CanvasRenderingContext2D'] = function () {}, tsvxwu['window']['CanvasRenderingContext2D']['prototype'] = tsvxwu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tsvxwu['window']['document']['body']['appendChild'] = function () {}, tsvxwu['EnvConfig']['pixelRatioInt'] = 0x0, fegidh['getPixelRatio'] = tsvxwu['pixelRatio'], tsvxwu['_preCreateElement'] = fhgdei['createElement'], fhgdei['createElement'] = tsvxwu['createElement'], fegidh['createShaderCondition'] = tsvxwu['createShaderCondition'], konlmj['parseXMLFromString'] = tsvxwu['parseXMLFromString'], svuqr['_createInputElement'] = rvqsu['_createInputElement'], tsvxwu['EnvConfig']['load'] = idfegh['prototype']['load'], idfegh['prototype']['load'] = qtsu['prototype']['load'], tsvxwu['isZiYu'] && utvrw && wx['onMessage'](function (qtusrv) {
      qtusrv['isLoad'] && (jkinlm['ziyuFileData'][qtusrv['url']] = qtusrv['data']);
    }));
  }, tsvxwu['onMkdirCallBack'] = function (jfh, $013_2) {
    jfh || (jkinlm['filesListObj'] = JSON['parse']($013_2['data']));
  }, tsvxwu['pixelRatio'] = function () {
    if (!tsvxwu['EnvConfig']['pixelRatioInt']) try {
      var lpmnok = wx['getSystemInfoSync']();return tsvxwu['EnvConfig']['pixelRatioInt'] = lpmnok['pixelRatio'], lpmnok['pixelRatio'];
    } catch (cbafed) {}return tsvxwu['EnvConfig']['pixelRatioInt'];
  }, tsvxwu['createElement'] = function (kgjhl) {
    var vwytux;if ('canvas' == kgjhl) return 0x1 == tsvxwu['idx'] ? tsvxwu['isZiYu'] ? (vwytux = sharedCanvas)['style'] = {} : vwytux = nlopmq['canvas'] : vwytux = nlopmq['wx']['createCanvas'](), tsvxwu['idx']++, vwytux;if ('textarea' == kgjhl || 'input' == kgjhl) return tsvxwu['onCreateInput'](kgjhl);if ('div' != kgjhl) return tsvxwu['_preCreateElement'](kgjhl);return kgjhl = tsvxwu['_preCreateElement'](kgjhl), (kgjhl['contains'] = function (rvsut) {
      return null;
    }, kgjhl['removeChild'] = function (rqsop) {}, kgjhl);
  }, tsvxwu['onCreateInput'] = function (fegdi) {
    return fegdi = tsvxwu['_preCreateElement'](fegdi), (fegdi['focus'] = rvqsu['wxinputFocus'], fegdi['blur'] = rvqsu['wxinputblur'], fegdi['style'] = {}, fegdi['value'] = 0x0, fegdi['parentElement'] = {}, fegdi['placeholder'] = {}, fegdi['type'] = {}, fegdi['setColor'] = function (vsrqtu) {}, fegdi['setType'] = function (dcbegf) {}, fegdi['setFontFace'] = function (hdfie) {}, fegdi['addEventListener'] = function (gdhfec) {}, fegdi['contains'] = function ($z1y0) {
      return null;
    }, fegdi['removeChild'] = function (mlqnpo) {}, fegdi);
  }, tsvxwu['createShaderCondition'] = function (jefg) {
    var ecdfg = this;return function () {
      return ecdfg[jefg['replace']('this.', '')];
    };
  }, tsvxwu['EnvConfig'] = null, tsvxwu['window'] = null, tsvxwu['_preCreateElement'] = null, tsvxwu['_inited'] = !0x1, tsvxwu['wxRequest'] = null, tsvxwu['systemInfo'] = null, tsvxwu['version'] = '0.0.1', tsvxwu['isZiYu'] = !0x1, tsvxwu['isPosMsgYu'] = !0x1, tsvxwu['parseXMLFromString'] = function (nqlpom) {
    var oqpn;nqlpom = nqlpom['replace'](/>\s+</g, '><');try {
      oqpn = new nlopmq['Parser']['DOMParser']()['parseFromString'](nqlpom, 'text/xml');
    } catch (porqs) {
      throw '需要引入xml解析库文件';
    }return oqpn;
  }, tsvxwu['idx'] = 0x1, tsvxwu);function tsvxwu() {}yxz0$_(vyxuzw, 'laya.wx.mini.MiniImage'), vyxuzw['prototype']['_loadImage'] = function (ebfca) {
    var uxwyv = !0x1;-0x1 == ebfca['indexOf']('layaNativeDir/') && (uxwyv = !0x0, ebfca = z_x0y['formatURL'](ebfca)), jkinlm['getFileInfo'](ebfca) ? vyxuzw['onCreateImage'](ebfca, this, !uxwyv) : -0x1 != ebfca['indexOf']('http://') || -0x1 != ebfca['indexOf']('https://') ? jkinlm['downImg'](ebfca, new ebcdg(vyxuzw, vyxuzw['onDownImgCallBack'], [ebfca, this]), ebfca) : vyxuzw['onCreateImage'](ebfca, this, !0x0);
  }, vyxuzw['onDownImgCallBack'] = function (gehfj, uvxty, efcdb) {
    efcdb ? uvxty['onError'](null) : vyxuzw['onCreateImage'](gehfj, uvxty);
  }, vyxuzw['onCreateImage'] = function (hjigef, omj, osrt) {
    var xywtu, yz_x$w;function abdc() {
      yz_x$w['onload'] = null, yz_x$w['onerror'] = null, delete omj['imgCache'][hjigef];
    }xywtu = (osrt = void 0x0 === osrt ? !0x1 : osrt) ? hjigef : (jolmnk = jkinlm['getFileInfo'](hjigef)['md5'], jkinlm['getFileNativePath'](jolmnk)), null == omj['imgCache'] && (omj['imgCache'] = {}), osrt = function () {
      abdc(), omj['onLoaded'](yz_x$w);
    };var jolmnk = function () {
      abdc(), omj['event']('error', 'Load image failed');
    };'nativeimage' == omj['_type'] ? ((yz_x$w = new fhgdei['window']['Image']())['crossOrigin'] = '', yz_x$w['onload'] = osrt, yz_x$w['onerror'] = jolmnk, yz_x$w['src'] = xywtu, omj['imgCache'][hjigef] = yz_x$w) : new pknlo['create'](xywtu, { 'onload': osrt, 'onerror': jolmnk, 'onCreate': function (txvsuw) {
        yz_x$w = txvsuw, omj['imgCache'][hjigef] = txvsuw;
      } });
  };function vyxuzw() {}var rvqsu = (yxz0$_(ponmr, 'laya.wx.mini.MiniInput'), ponmr['_createInputElement'] = function () {
    svuqr['_initInput'](svuqr['area'] = fhgdei['createElement']('textarea')), svuqr['_initInput'](svuqr['input'] = fhgdei['createElement']('input')), svuqr['inputContainer'] = fhgdei['createElement']('div'), svuqr['inputContainer']['style']['position'] = 'absolute', svuqr['inputContainer']['style']['zIndex'] = 0x186a0, fhgdei['container']['appendChild'](svuqr['inputContainer']), svuqr['inputContainer']['setPos'] = function (gfhijk, dfegb) {
      svuqr['inputContainer']['style']['left'] = gfhijk + 'px', svuqr['inputContainer']['style']['top'] = dfegb + 'px';
    }, lmjih['stage']['on']('resize', null, ponmr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (utsqpr) {
      nlopmq['dispatchEvent'] && nlopmq['dispatchEvent']('resize');
    }), $vyw['_soundClass'] = xsuv, $vyw['_musicClass'] = xsuv;
  }, ponmr['_onStageResize'] = function () {
    lmjih['stage']['_canvasTransform']['identity']()['scale'](fhgdei['width'] / kijghf['canvas']['width'] / fegidh['getPixelRatio'](), fhgdei['height'] / kijghf['canvas']['height'] / fegidh['getPixelRatio']());
  }, ponmr['wxinputFocus'] = function (fjieg) {
    var fbd = svuqr['inputElement']['target'];fbd && !fbd['editable'] || (klmnp['window']['wx']['offKeyboardConfirm'](), klmnp['window']['wx']['offKeyboardInput'](), klmnp['window']['wx']['showKeyboard']({ 'defaultValue': fbd['text'], 'maxLength': fbd['maxChars'], 'multiple': fbd['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (wz_y) {}, 'fail': function (fjhgk) {} }), klmnp['window']['wx']['onKeyboardConfirm'](function (lijkmn) {
      lijkmn = lijkmn ? lijkmn['value'] : '', (fbd['text'] = lijkmn, fbd['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), klmnp['window']['wx']['onKeyboardInput'](function (pmnkl) {
      pmnkl = pmnkl ? pmnkl['value'] : '', fbd['multiline'] || -0x1 == pmnkl['indexOf']('\x0a') ? (fbd['text'] = pmnkl, fbd['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ponmr['inputEnter'] = function () {
    svuqr['inputElement']['target']['focus'] = !0x1;
  }, ponmr['wxinputblur'] = function () {
    ponmr['hideKeyboard']();
  }, ponmr['hideKeyboard'] = function () {
    klmnp['window']['wx']['offKeyboardConfirm'](), klmnp['window']['wx']['offKeyboardInput'](), klmnp['window']['wx']['hideKeyboard']({ 'success': function (gfihej) {
        console['log']('隐藏键盘');
      }, 'fail': function (mhkl) {
        console['log']('隐藏键盘出错:' + (mhkl ? mhkl['errMsg'] : ''));
      } });
  }, ponmr);function ponmr() {}var qtsu = function () {
    function zv$w() {}yxz0$_(zv$w, 'laya.wx.mini.MiniLoader');var vwzx$ = zv$w['prototype'];return vwzx$['load'] = function (npomlq, jnmil, ustxvw, adfbec, pmrnq) {
      void 0x0 === ustxvw && (ustxvw = !0x0), void 0x0 === pmrnq && (pmrnq = !0x1);var _3102$ = this;0x0 === (_3102$['_url'] = npomlq)['indexOf']('data:image') ? _3102$['_type'] = jnmil = 'image' : _3102$['_type'] = jnmil = jnmil || _3102$['getTypeFromUrl'](npomlq), _3102$['_cache'] = ustxvw, _3102$['_data'] = null;var cdbea = 'ascii';-0x1 != npomlq['indexOf']('.fnt') ? cdbea = 'utf8' : 'arraybuffer' == jnmil && (cdbea = '');var $z0xy = konlmj['getFileExtension'](npomlq);if (-0x1 != zv$w['_fileTypeArr']['indexOf']($z0xy)) klmnp['EnvConfig']['load']['call'](this, npomlq, jnmil, ustxvw, adfbec, pmrnq);else {
        if (jkinlm['getFileInfo'](npomlq)) klmnp['EnvConfig']['load']['call'](this, npomlq, jnmil, ustxvw, adfbec, pmrnq);else {
          if (-0x1 != npomlq['indexOf']('layaNativeDir/')) {
            if (klmnp['isZiYu']) {
              var $xz0 = jkinlm['ziyuFileData'][npomlq];return void _3102$['onLoaded']($xz0);
            }return cosnole['log']('read read'), void jkinlm['read'](npomlq, cdbea, new ebcdg(zv$w, zv$w['onReadNativeCallBack'], [cdbea, npomlq, jnmil, ustxvw, adfbec, pmrnq, _3102$]));
          }$xz0 = '' == z_x0y['rootPath'] ? npomlq : npomlq['split'](z_x0y['rootPath'])[0x0], -0x1 != npomlq['indexOf']('http://') || -0x1 != npomlq['indexOf']('https://') ? klmnp['EnvConfig']['load']['call'](_3102$, npomlq, jnmil, ustxvw, adfbec, pmrnq) : jkinlm['readFile']($xz0, cdbea, new ebcdg(zv$w, zv$w['onReadNativeCallBack'], [cdbea, npomlq, jnmil, ustxvw, adfbec, pmrnq, _3102$]), npomlq);
        }
      }
    }, vwzx$['resMgrLoad'] = function (z_$wy, gjhfi, qprs, xsw, xutsvw, x$wyv, jigehf) {
      void 0x0 === qprs && (qprs = 0x0), void 0x0 === xsw && (xsw = !0x1), void 0x0 === xutsvw && (xutsvw = !0x1), void 0x0 === x$wyv && (x$wyv = 0x0), void 0x0 === jigehf && (jigehf = 0x3), -0x1 != z_$wy['indexOf']('mpack') && console['log']('=============resMgrLoad url:', z_$wy), klmnp['EnvConfig']['resMgrLoad'](z_$wy, (plqm, xvwst, hiejfg) => {
        zv$w['prototype']['resMgrLoadCallBack'](plqm, xvwst, hiejfg, gjhfi);
      }, qprs, xsw, xutsvw, x$wyv, jigehf);
    }, vwzx$['resMgrLoadCallBack'] = function (nqmopr, tprqs, hml, _z012$) {
      console['log']('buff:::', nqmopr, hml, jkinlm['fileNativeDir'] + '///' + jkinlm['fileListName']), _z012$(nqmopr, tprqs, hml);
    }, vwzx$['clearRes'] = function (srutw, ljgihk) {
      this['clearRes'](srutw, ljgihk = void 0x0 === ljgihk ? !0x1 : ljgihk), ljgihk = jkinlm['getFileInfo'](srutw), !ljgihk || -0x1 == srutw['indexOf']('http://') && -0x1 == srutw['indexOf']('https://') || (ljgihk = ljgihk['md5'], ljgihk = jkinlm['getFileNativePath'](ljgihk), jkinlm['remove'](ljgihk));
    }, zv$w['onReadNativeCallBack'] = function (pmlqno, afdbc, yx_z0$, swvrt, xyvzw$, tsqrvu, gdfbec, svtwur, fikghj) {
      void 0x0 === swvrt && (swvrt = !0x0), void 0x0 === tsqrvu && (tsqrvu = !0x1), (svtwur = void 0x0 === svtwur ? 0x0 : svtwur) ? 0x1 == svtwur && klmnp['EnvConfig']['load']['call'](gdfbec, afdbc, yx_z0$, swvrt, xyvzw$, tsqrvu) : (fikghj = 'json' == yx_z0$ || 'atlas' == yx_z0$ ? klmnp['getJson'](fikghj['data']) : 'xml' == yx_z0$ ? konlmj['parseXMLFromString'](fikghj['data']) : fikghj['data'], gdfbec['onLoaded'](fikghj), !klmnp['isZiYu'] && klmnp['isPosMsgYu'] && 'arraybuffer' != yx_z0$ && wx['postMessage']({ 'url': afdbc, 'data': fikghj, 'isLoad': !0x0 }));
    }, wyvu(zv$w, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zv$w;
  }(),
      jkinlm = (yxz0$_($1z_20, 'laya.wx.mini.MiniFileMgr', iehg), $1z_20['isLoadFile'] = function (txwvsu) {
    return -0x1 != $1z_20['_fileTypeArr']['indexOf'](txwvsu);
  }, $1z_20['getFileInfo'] = function (tsopqr) {
    return tsopqr = tsopqr['split']('?')[0x0], tsopqr = $1z_20['filesListObj'][tsopqr], null == tsopqr ? null : tsopqr;
  }, $1z_20['onFileUpdate'] = function (ehgdfi, efdcbg) {
    var swtur = ehgdfi['split']('/');ehgdfi = swtur[swtur['length'] - 0x1], swtur = $1z_20['getFileInfo'](efdcbg), null == swtur ? $1z_20['onSaveFile'](efdcbg, ehgdfi) : swtur['readyUrl'] != efdcbg && $1z_20['remove'](ehgdfi, efdcbg);
  }, $1z_20['exits'] = function (ljkon, _4230) {
    ljkon = $1z_20['getFileNativePath'](ljkon), $1z_20['fs']['getFileInfo']({ 'filePath': ljkon, 'success': function (ilm) {
        null != _4230 && _4230['runWith']([0x0, ilm]);
      }, 'fail': function (afecbd) {
        null != _4230 && _4230['runWith']([0x1, afecbd]);
      } });
  }, $1z_20['read'] = function (ehfgd, daebfc, lmjhki, bfdgc) {
    void 0x0 === daebfc && (daebfc = 'ascill'), ehfgd = '' != (bfdgc = void 0x0 === bfdgc ? '' : bfdgc) ? $1z_20['getFileNativePath'](ehfgd) : ehfgd, $1z_20['fs']['readFile']({ 'filePath': ehfgd, 'encoding': daebfc, 'success': function (lkjom) {
        null != lmjhki && lmjhki['runWith']([0x0, lkjom]);
      }, 'fail': function (ywtux) {
        ywtux && '' != bfdgc ? $1z_20['down'](bfdgc, daebfc, lmjhki, bfdgc) : null != lmjhki && lmjhki['runWith']([0x1]);
      } });
  }, $1z_20['readNativeFile'] = function (cgfhe, nqmro) {
    $1z_20['fs']['readFile']({ 'filePath': cgfhe, 'encoding': '', 'success': function (_140) {
        null != nqmro && nqmro['runWith']([0x0]);
      }, 'fail': function (dhcfge) {
        null != nqmro && nqmro['runWith']([0x1]);
      } });
  }, $1z_20['down'] = function (yuwvtx, rqsput, ecdfbg, nprq) {
    void 0x0 === rqsput && (rqsput = 'ascill'), void 0x0 === nprq && (nprq = '');var loknjm = $1z_20['getFileNativePath'](nprq);$1z_20['wxdown']({ 'url': yuwvtx, 'filePath': loknjm, 'success': function (vwus) {
        0xc8 === vwus['statusCode'] && $1z_20['readFile'](vwus['filePath'], rqsput, ecdfbg, nprq);
      }, 'fail': function (tpur) {
        null != ecdfbg && ecdfbg['runWith']([0x1, tpur]);
      } })['onProgressUpdate'](function (sqvt) {
      null != ecdfbg && ecdfbg['runWith']([0x2, sqvt['progress']]);
    });
  }, $1z_20['readFile'] = function ($zyvxw, eadbc, zy1_0, fhiedg) {
    void 0x0 === fhiedg && (fhiedg = ''), $1z_20['fs']['readFile']({ 'filePath': $zyvxw, 'encoding': eadbc = void 0x0 === eadbc ? 'ascill' : eadbc, 'success': function (tvuxs) {
        -0x1 == $zyvxw['indexOf']('http://') && -0x1 == $zyvxw['indexOf']('https://') || $1z_20['onFileUpdate']($zyvxw, fhiedg), null != zy1_0 && zy1_0['runWith']([0x0, tvuxs]);
      }, 'fail': function (fchegd) {
        fchegd && null != zy1_0 && zy1_0['runWith']([0x1, fchegd]);
      } });
  }, $1z_20['downImg'] = function (srnoq, lomq, truqsv) {
    void 0x0 === truqsv && (truqsv = ''), $1z_20['wxdown']({ 'url': srnoq, 'success': function (lmkjn) {
        0xc8 === lmkjn['statusCode'] && $1z_20['copyFile'](lmkjn['tempFilePath'], truqsv, lomq);
      }, 'fail': function (jgkli) {
        null != lomq && lomq['runWith']([0x1, jgkli]);
      } });
  }, $1z_20['copyFile'] = function (trqso, qvsrtu, gdhi) {
    var rwtvs = trqso['split']('/'),
        dhgfie = rwtvs[rwtvs['length'] - 0x1];qvsrtu['split']('?')[0x0];var jkmli = $1z_20['getFileInfo'](qvsrtu);rwtvs = $1z_20['getFileNativePath'](dhgfie), $1z_20['fs']['copyFile']({ 'srcPath': trqso, 'destPath': rwtvs, 'success': function (qsno) {
        jkmli ? jkmli['readyUrl'] != qvsrtu && $1z_20['remove'](dhgfie, qvsrtu, gdhi) : ($1z_20['onSaveFile'](qvsrtu, dhgfie), null != gdhi && gdhi['runWith']([0x0]));
      }, 'fail': function (igdf) {
        null != gdhi && gdhi['runWith']([0x1, igdf]);
      } });
  }, $1z_20['getFileNativePath'] = function (njimk) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + njimk;
  }, $1z_20['remove'] = function (kjhlgi, yxwv$z, lmjo) {
    void 0x0 === yxwv$z && (yxwv$z = '');var yz0 = $1z_20['getFileInfo'](yxwv$z),
        ihfjkg = $1z_20['getFileNativePath'](yz0['md5']);lmjih['loader']['clearRes'](yz0['readyUrl']), $1z_20['fs']['unlink']({ 'filePath': ihfjkg, 'success': function (vutsx) {
        '' != yxwv$z && $1z_20['onSaveFile'](yxwv$z, kjhlgi), null != lmjo && lmjo['runWith']([0x0]);
      }, 'fail': function (jlhmi) {} });
  }, $1z_20['onSaveFile'] = function (wyxvuz, uvsrtq) {
    var z021$_ = wyxvuz['split']('?')[0x0];$1z_20['filesListObj'][z021$_] = { 'md5': uvsrtq, 'readyUrl': wyxvuz }, $1z_20['fs']['writeFile']({ 'filePath': $1z_20['fileNativeDir'] + '/' + $1z_20['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($1z_20['filesListObj']), 'success': function (vsxut) {
        console['log']('写入测试测试成功：', vsxut);
      }, 'fail': function (efacd) {
        console['log']('写入测试测试失败：', efacd);
      } });
  }, $1z_20['existDir'] = function (_0zy1$, ecad) {
    $1z_20['fs']['mkdir']({ 'dirPath': _0zy1$, 'success': function (y1$_z) {
        null != ecad && ecad['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (promq) {
        -0x1 != promq['errMsg']['indexOf']('file already exists') ? $1z_20['readSync']($1z_20['fileListName'], 'utf8', ecad) : null != ecad && ecad['runWith']([0x1, promq]);
      } });
  }, $1z_20['readSync'] = function (hkljmi, lkompn, psqrto, ebfcgd) {
    void 0x0 === lkompn && (lkompn = 'ascill'), void 0x0 === ebfcgd && (ebfcgd = ''), hkljmi = $1z_20['getFileNativePath'](hkljmi);var usrpt;try {
      usrpt = $1z_20['fs']['readFileSync'](hkljmi), null != psqrto && psqrto['runWith']([0x0, { 'data': usrpt }]);
    } catch (fadbec) {
      null != psqrto && psqrto['runWith']([0x1]);
    }
  }, $1z_20['readCache'] = function () {}, $1z_20['writeCache'] = function (npklmo) {
    var wzxy_ = readyUrl['split']('?')[0x0];$1z_20['filesListObj'][wzxy_] = { 'md5': md5Name, 'readyUrl': readyUrl }, $1z_20['fs']['writeFile']({ 'filePath': $1z_20['fileNativeDir'] + '/' + $1z_20['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($1z_20['filesListObj']), 'success': function (_1$z0y) {}, 'fail': function (uwtvyx) {} });
  }, $1z_20['setNativeFileDir'] = function ($z0_y) {
    $1z_20['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $z0_y;
  }, $1z_20['filesListObj'] = {}, $1z_20['fileNativeDir'] = null, $1z_20['fileListName'] = 'layaairfiles.txt', $1z_20['ziyuFileData'] = {}, wyvu($1z_20, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), $1z_20);function $1z_20() {
    $1z_20['__super']['call'](this);
  }var xsuv = function () {
    function fdhgi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, fdhgi['__super']['call'](this), this['_sound'] = fdhgi['_createSound']();
    }yxz0$_(fdhgi, 'laya.wx.mini.MiniSound', iehg);var mnkplo = fdhgi['prototype'];return mnkplo['load'] = function (hgcfde) {
      var khlmj = this,
          tyuvx;function gbdcf() {
        if (null != fdhgi['_null']) khlmj['_sound']['onCanplay'](fdhgi['_null']), khlmj['_sound']['onError'](fdhgi['_null']);else try {
          khlmj['_sound']['onCanplay'](null), khlmj['_sound']['onError'](null), fdhgi['_null'] = null;
        } catch (yvuwzx) {
          console['warn']('[wxmini] _clearSound:' + yvuwzx), khlmj['_sound']['onCanplay'](fegchd), khlmj['_sound']['onError'](fegchd), fdhgi['_null'] = fegchd;
        }
      }function fegchd() {}hgcfde = z_x0y['formatURL'](hgcfde), this['url'] = hgcfde, fdhgi['_audioCache'][hgcfde] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        gbdcf(), tyuvx['loaded'] = !0x0, tyuvx['event']('complete'), fdhgi['_audioCache'][tyuvx['url']] = tyuvx;
      }), this['_sound']['onError'](function (onpqlm) {
        console['error']('errCode=' + onpqlm['errCode'] + '  errMsg=' + onpqlm['errMsg']), gbdcf(), tyuvx['event']('error');
      }), this['_sound']['src'] = hgcfde, tyuvx = this);
    }, mnkplo['play'] = function (qoptrs, lomkj) {
      void 0x0 === qoptrs && (qoptrs = 0x0), void 0x0 === lomkj && (lomkj = 0x0), (gkihfj = this['url'] == $vyw['_tMusic'] ? (fdhgi['_musicAudio'] || (fdhgi['_musicAudio'] = fdhgi['_createSound']()), fdhgi['_musicAudio']) : fdhgi['_createSound']())['src'] = this['url'];var gkihfj = new qpsno(gkihfj);return gkihfj['url'] = this['url'], gkihfj['loops'] = lomkj, gkihfj['startTime'] = qoptrs, gkihfj['play'](), $vyw['addChannel'](gkihfj), gkihfj;
    }, mnkplo['dispose'] = function () {
      var $z_y0 = fdhgi['_audioCache'][this['url']];$z_y0 && ($z_y0['src'] = '', delete fdhgi['_audioCache'][this['url']]);
    }, _1$zy0(0x0, mnkplo, 'duration', function () {
      return this['_sound']['duration'];
    }), fdhgi['_createSound'] = function () {
      return fdhgi['_id']++, klmnp['window']['wx']['createInnerAudioContext']();
    }, fdhgi['_musicAudio'] = null, fdhgi['_id'] = 0x0, fdhgi['_audioCache'] = {}, fdhgi['_null'] = void 0x0, fdhgi;
  }(),
      qpsno = function () {
    function mnjkol(giejhf) {
      this['_audio'] = null, this['_onEnd'] = null, mnjkol['__super']['call'](this), this['_audio'] = giejhf, this['_onEnd'] = konlmj['bind'](this['__onEnd'], this), giejhf['onEnded'](this['_onEnd']);
    }yxz0$_(mnjkol, 'laya.wx.mini.MiniSoundChannel', lmkin);var nmljik = mnjkol['prototype'];return nmljik['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (lmjih['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, nmljik['__onNull'] = function () {}, nmljik['play'] = function () {
      this['isStopped'] = !0x1, $vyw['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, nmljik['stop'] = function () {
      if (this['isStopped'] = !0x0, $vyw['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != mnjkol['_null']) this['_audio']['onEnded'](mnjkol['_null']);else try {
          this['_audio']['onEnded'](null), mnjkol['_null'] = null;
        } catch (_1304) {
          console['warn']('[wxmini] stop:' + _1304), this['_audio']['onEnded'](konlmj['bind'](this['__onNull'], this)), mnjkol['_null'] = konlmj['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, nmljik['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, nmljik['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $vyw['addChannel'](this), this['_audio']['play']());
    }, _1$zy0(0x0, nmljik, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), _1$zy0(0x0, nmljik, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), _1$zy0(0x0, nmljik, 'volume', function () {
      return 0x1;
    }, function (mjhlk) {}), mnjkol['_null'] = void 0x0, mnjkol;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (z$ywvx, vyz$x) {
  'use strict';

  for (var okjn in Object['defineProperty'](vyz$x, '__esModule', { 'value': !0x0 }), Laya) {
    var xwz$v = Laya[okjn];xwz$v && xwz$v['__isclass'] && (vyz$x[okjn] = xwz$v);
  }
});