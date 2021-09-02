var _ = wx.y$;
!function (npsqro, qnmlop) {
  qnmlop['un'], qnmlop['uns'];var onkmp = qnmlop['static'],
      rvtsuw = qnmlop['class'],
      lojkn = qnmlop['getset'];qnmlop['__newvec'];var wy_$x = laya['utils']['Browser'],
      _02$z = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ikfhjg = laya['resource']['HTMLImage'],
      efghi = laya['utils']['Handler'],
      plnkom = laya['display']['Input'],
      knlmpo = laya['net']['Loader'];laya['maths']['Matrix'];var jnok = laya['renders']['Render'],
      pmlkon = laya['utils']['RunDriver'];laya['media']['Sound'];var qpstr = laya['media']['SoundChannel'],
      mkpln = laya['media']['SoundManager'],
      fbgde = (laya['display']['Stage'], laya['net']['URL']),
      fheg = laya['utils']['Utils'],
      okmnp = (rvtsuw(urptq, 'laya.wx.mini.MiniAdpter'), urptq['getJson'] = function (rpmnq) {
    return JSON['parse'](rpmnq);
  }, urptq['init'] = function (rstwvu, lomq) {
    void 0x0 === rstwvu && (rstwvu = !0x1), void 0x0 === lomq && (lomq = !0x1), urptq['_inited'] || (urptq['window'] = npsqro)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (urptq['_inited'] = !0x0, urptq['isZiYu'] = lomq, urptq['isPosMsgYu'] = rstwvu, urptq['EnvConfig'] = {}, urptq['isZiYu'] || (uvtrsw['setNativeFileDir']('/layaairGame'), uvtrsw['existDir'](uvtrsw['fileNativeDir'], efghi['create'](urptq, urptq['onMkdirCallBack']))), urptq['window']['focus'] = function () {}, qnmlop['getUrlPath'] = function () {}, urptq['window']['logtime'] = function ($x_wyz) {}, urptq['window']['alertTimeLog'] = function (uvyxz) {}, urptq['window']['resetShareInfo'] = function () {}, urptq['window']['CanvasRenderingContext2D'] = function () {}, urptq['window']['CanvasRenderingContext2D']['prototype'] = urptq['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], urptq['window']['document']['body']['appendChild'] = function () {}, urptq['EnvConfig']['pixelRatioInt'] = 0x0, pmlkon['getPixelRatio'] = urptq['pixelRatio'], urptq['_preCreateElement'] = wy_$x['createElement'], wy_$x['createElement'] = urptq['createElement'], pmlkon['createShaderCondition'] = urptq['createShaderCondition'], fheg['parseXMLFromString'] = urptq['parseXMLFromString'], plnkom['_createInputElement'] = strwvu['_createInputElement'], urptq['EnvConfig']['load'] = knlmpo['prototype']['load'], knlmpo['prototype']['load'] = xyz$w['prototype']['load'], urptq['isZiYu'] && rstwvu && wx['onMessage'](function (vurs) {
      vurs['isLoad'] && (uvtrsw['ziyuFileData'][vurs['url']] = vurs['data']);
    }));
  }, urptq['onMkdirCallBack'] = function (rmopnq, lgihj) {
    rmopnq || (uvtrsw['filesListObj'] = JSON['parse'](lgihj['data']));
  }, urptq['pixelRatio'] = function () {
    if (!urptq['EnvConfig']['pixelRatioInt']) try {
      var okjml = wx['getSystemInfoSync']();return urptq['EnvConfig']['pixelRatioInt'] = okjml['pixelRatio'], okjml['pixelRatio'];
    } catch (eifdhg) {}return urptq['EnvConfig']['pixelRatioInt'];
  }, urptq['createElement'] = function ($30_21) {
    var fcaedb;if ('canvas' == $30_21) return 0x1 == urptq['idx'] ? urptq['isZiYu'] ? (fcaedb = sharedCanvas)['style'] = {} : fcaedb = npsqro['canvas'] : fcaedb = npsqro['wx']['createCanvas'](), urptq['idx']++, fcaedb;if ('textarea' == $30_21 || 'input' == $30_21) return urptq['onCreateInput']($30_21);if ('div' != $30_21) return urptq['_preCreateElement']($30_21);return $30_21 = urptq['_preCreateElement']($30_21), ($30_21['contains'] = function ($yzxw_) {
      return null;
    }, $30_21['removeChild'] = function (fgeb) {}, $30_21);
  }, urptq['onCreateInput'] = function (glkijh) {
    return glkijh = urptq['_preCreateElement'](glkijh), (glkijh['focus'] = strwvu['wxinputFocus'], glkijh['blur'] = strwvu['wxinputblur'], glkijh['style'] = {}, glkijh['value'] = 0x0, glkijh['parentElement'] = {}, glkijh['placeholder'] = {}, glkijh['type'] = {}, glkijh['setColor'] = function ($x_0y) {}, glkijh['setType'] = function (vwruts) {}, glkijh['setFontFace'] = function (lnq) {}, glkijh['addEventListener'] = function (qsotr) {}, glkijh['contains'] = function (chdfg) {
      return null;
    }, glkijh['removeChild'] = function (mnjilk) {}, glkijh);
  }, urptq['createShaderCondition'] = function (uxtvwy) {
    var _3402 = this;return function () {
      return _3402[uxtvwy['replace']('this.', '')];
    };
  }, urptq['EnvConfig'] = null, urptq['window'] = null, urptq['_preCreateElement'] = null, urptq['_inited'] = !0x1, urptq['wxRequest'] = null, urptq['systemInfo'] = null, urptq['version'] = '0.0.1', urptq['isZiYu'] = !0x1, urptq['isPosMsgYu'] = !0x1, urptq['parseXMLFromString'] = function (pmlqon) {
    var nolk;pmlqon = pmlqon['replace'](/>\s+</g, '><');try {
      nolk = new npsqro['Parser']['DOMParser']()['parseFromString'](pmlqon, 'text/xml');
    } catch (fdbc) {
      throw '需要引入xml解析库文件';
    }return nolk;
  }, urptq['idx'] = 0x1, urptq);function urptq() {}rvtsuw(npokl, 'laya.wx.mini.MiniImage'), npokl['prototype']['_loadImage'] = function (lonqpm) {
    var hfdgc = !0x1;-0x1 == lonqpm['indexOf']('layaNativeDir/') && (hfdgc = !0x0, lonqpm = fbgde['formatURL'](lonqpm)), uvtrsw['getFileInfo'](lonqpm) ? npokl['onCreateImage'](lonqpm, this, !hfdgc) : -0x1 != lonqpm['indexOf']('http://') || -0x1 != lonqpm['indexOf']('https://') ? uvtrsw['downImg'](lonqpm, new efghi(npokl, npokl['onDownImgCallBack'], [lonqpm, this]), lonqpm) : npokl['onCreateImage'](lonqpm, this, !0x0);
  }, npokl['onDownImgCallBack'] = function (ghidf, rsuqv, lnikm) {
    lnikm ? rsuqv['onError'](null) : npokl['onCreateImage'](ghidf, rsuqv);
  }, npokl['onCreateImage'] = function (gfheji, knmj, tvqsr) {
    var poqnmr, rstvu;function wz$vy() {
      rstvu['onload'] = null, rstvu['onerror'] = null, delete knmj['imgCache'][gfheji];
    }poqnmr = (tvqsr = void 0x0 === tvqsr ? !0x1 : tvqsr) ? gfheji : (febdca = uvtrsw['getFileInfo'](gfheji)['md5'], uvtrsw['getFileNativePath'](febdca)), null == knmj['imgCache'] && (knmj['imgCache'] = {}), tvqsr = function () {
      wz$vy(), knmj['onLoaded'](rstvu);
    };var febdca = function () {
      wz$vy(), knmj['event']('error', 'Load image failed');
    };'nativeimage' == knmj['_type'] ? ((rstvu = new wy_$x['window']['Image']())['crossOrigin'] = '', rstvu['onload'] = tvqsr, rstvu['onerror'] = febdca, rstvu['src'] = poqnmr, knmj['imgCache'][gfheji] = rstvu) : new ikfhjg['create'](poqnmr, { 'onload': tvqsr, 'onerror': febdca, 'onCreate': function (zuwyx) {
        rstvu = zuwyx, knmj['imgCache'][gfheji] = zuwyx;
      } });
  };function npokl() {}var strwvu = (rvtsuw(xsuw, 'laya.wx.mini.MiniInput'), xsuw['_createInputElement'] = function () {
    plnkom['_initInput'](plnkom['area'] = wy_$x['createElement']('textarea')), plnkom['_initInput'](plnkom['input'] = wy_$x['createElement']('input')), plnkom['inputContainer'] = wy_$x['createElement']('div'), plnkom['inputContainer']['style']['position'] = 'absolute', plnkom['inputContainer']['style']['zIndex'] = 0x186a0, wy_$x['container']['appendChild'](plnkom['inputContainer']), plnkom['inputContainer']['setPos'] = function (kmjn, qrpmno) {
      plnkom['inputContainer']['style']['left'] = kmjn + 'px', plnkom['inputContainer']['style']['top'] = qrpmno + 'px';
    }, qnmlop['stage']['on']('resize', null, xsuw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($yw_z) {
      npsqro['dispatchEvent'] && npsqro['dispatchEvent']('resize');
    }), mkpln['_soundClass'] = puqtrs, mkpln['_musicClass'] = puqtrs;
  }, xsuw['_onStageResize'] = function () {
    qnmlop['stage']['_canvasTransform']['identity']()['scale'](wy_$x['width'] / jnok['canvas']['width'] / pmlkon['getPixelRatio'](), wy_$x['height'] / jnok['canvas']['height'] / pmlkon['getPixelRatio']());
  }, xsuw['wxinputFocus'] = function (xwyvz$) {
    var bface = plnkom['inputElement']['target'];bface && !bface['editable'] || (okmnp['window']['wx']['offKeyboardConfirm'](), okmnp['window']['wx']['offKeyboardInput'](), okmnp['window']['wx']['showKeyboard']({ 'defaultValue': bface['text'], 'maxLength': bface['maxChars'], 'multiple': bface['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (kiljhm) {}, 'fail': function (tsuprq) {} }), okmnp['window']['wx']['onKeyboardConfirm'](function (tvuqsr) {
      tvuqsr = tvuqsr ? tvuqsr['value'] : '', (bface['text'] = tvuqsr, bface['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), okmnp['window']['wx']['onKeyboardInput'](function (bcdefa) {
      bcdefa = bcdefa ? bcdefa['value'] : '', bface['multiline'] || -0x1 == bcdefa['indexOf']('\x0a') ? (bface['text'] = bcdefa, bface['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, xsuw['inputEnter'] = function () {
    plnkom['inputElement']['target']['focus'] = !0x1;
  }, xsuw['wxinputblur'] = function () {
    xsuw['hideKeyboard']();
  }, xsuw['hideKeyboard'] = function () {
    okmnp['window']['wx']['offKeyboardConfirm'](), okmnp['window']['wx']['offKeyboardInput'](), okmnp['window']['wx']['hideKeyboard']({ 'success': function (kjnmli) {
        console['log']('隐藏键盘');
      }, 'fail': function (wurtsv) {
        console['log']('隐藏键盘出错:' + (wurtsv ? wurtsv['errMsg'] : ''));
      } });
  }, xsuw);function xsuw() {}var xyz$w = function () {
    function ehfdcg() {}rvtsuw(ehfdcg, 'laya.wx.mini.MiniLoader');var onprqm = ehfdcg['prototype'];return onprqm['load'] = function (ruvq, lgkijh, gefcd, pnm, prsuqt) {
      void 0x0 === gefcd && (gefcd = !0x0), void 0x0 === prsuqt && (prsuqt = !0x1);var gfbec = this;0x0 === (gfbec['_url'] = ruvq)['indexOf']('data:image') ? gfbec['_type'] = lgkijh = 'image' : gfbec['_type'] = lgkijh = lgkijh || gfbec['getTypeFromUrl'](ruvq), gfbec['_cache'] = gefcd, gfbec['_data'] = null;var kgjlh = 'ascii';-0x1 != ruvq['indexOf']('.fnt') ? kgjlh = 'utf8' : 'arraybuffer' == lgkijh && (kgjlh = '');var jmhik = fheg['getFileExtension'](ruvq);if (-0x1 != ehfdcg['_fileTypeArr']['indexOf'](jmhik)) okmnp['EnvConfig']['load']['call'](this, ruvq, lgkijh, gefcd, pnm, prsuqt);else {
        if (uvtrsw['getFileInfo'](ruvq)) okmnp['EnvConfig']['load']['call'](this, ruvq, lgkijh, gefcd, pnm, prsuqt);else {
          if (-0x1 != ruvq['indexOf']('layaNativeDir/')) {
            if (okmnp['isZiYu']) {
              var pnorsq = uvtrsw['ziyuFileData'][ruvq];return void gfbec['onLoaded'](pnorsq);
            }return cosnole['log']('read read'), void uvtrsw['read'](ruvq, kgjlh, new efghi(ehfdcg, ehfdcg['onReadNativeCallBack'], [kgjlh, ruvq, lgkijh, gefcd, pnm, prsuqt, gfbec]));
          }pnorsq = '' == fbgde['rootPath'] ? ruvq : ruvq['split'](fbgde['rootPath'])[0x0], -0x1 != ruvq['indexOf']('http://') || -0x1 != ruvq['indexOf']('https://') ? okmnp['EnvConfig']['load']['call'](gfbec, ruvq, lgkijh, gefcd, pnm, prsuqt) : uvtrsw['readFile'](pnorsq, kgjlh, new efghi(ehfdcg, ehfdcg['onReadNativeCallBack'], [kgjlh, ruvq, lgkijh, gefcd, pnm, prsuqt, gfbec]), ruvq);
        }
      }
    }, onprqm['resMgrLoad'] = function (hm, xuwy, decfa, rqosnp, glhjik, oqsrt, wvtu) {
      void 0x0 === decfa && (decfa = 0x0), void 0x0 === rqosnp && (rqosnp = !0x1), void 0x0 === glhjik && (glhjik = !0x1), void 0x0 === oqsrt && (oqsrt = 0x0), void 0x0 === wvtu && (wvtu = 0x3), -0x1 != hm['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hm), okmnp['EnvConfig']['resMgrLoad'](hm, (ijefgh, dbfca, pqmlo) => {
        ehfdcg['prototype']['resMgrLoadCallBack'](ijefgh, dbfca, pqmlo, xuwy);
      }, decfa, rqosnp, glhjik, oqsrt, wvtu);
    }, onprqm['resMgrLoadCallBack'] = function (srqopt, uywtv, $_xy0, abec) {
      console['log']('buff:::', srqopt, $_xy0, uvtrsw['fileNativeDir'] + '///' + uvtrsw['fileListName']), abec(srqopt, uywtv, $_xy0);
    }, onprqm['clearRes'] = function (svuw, rsqopn) {
      this['clearRes'](svuw, rsqopn = void 0x0 === rsqopn ? !0x1 : rsqopn), rsqopn = uvtrsw['getFileInfo'](svuw), !rsqopn || -0x1 == svuw['indexOf']('http://') && -0x1 == svuw['indexOf']('https://') || (rsqopn = rsqopn['md5'], rsqopn = uvtrsw['getFileNativePath'](rsqopn), uvtrsw['remove'](rsqopn));
    }, ehfdcg['onReadNativeCallBack'] = function (qvusrt, cdfgeh, x_yzw, _31420, kojlm, nijlm, hkgjil, cefbdg, utrsvw) {
      void 0x0 === _31420 && (_31420 = !0x0), void 0x0 === nijlm && (nijlm = !0x1), (cefbdg = void 0x0 === cefbdg ? 0x0 : cefbdg) ? 0x1 == cefbdg && okmnp['EnvConfig']['load']['call'](hkgjil, cdfgeh, x_yzw, _31420, kojlm, nijlm) : (utrsvw = 'json' == x_yzw || 'atlas' == x_yzw ? okmnp['getJson'](utrsvw['data']) : 'xml' == x_yzw ? fheg['parseXMLFromString'](utrsvw['data']) : utrsvw['data'], hkgjil['onLoaded'](utrsvw), !okmnp['isZiYu'] && okmnp['isPosMsgYu'] && 'arraybuffer' != x_yzw && wx['postMessage']({ 'url': cdfgeh, 'data': utrsvw, 'isLoad': !0x0 }));
    }, onkmp(ehfdcg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ehfdcg;
  }(),
      uvtrsw = (rvtsuw(bcaef, 'laya.wx.mini.MiniFileMgr', _02$z), bcaef['isLoadFile'] = function (pqmrn) {
    return -0x1 != bcaef['_fileTypeArr']['indexOf'](pqmrn);
  }, bcaef['getFileInfo'] = function (jfheig) {
    return jfheig = jfheig['split']('?')[0x0], jfheig = bcaef['filesListObj'][jfheig], null == jfheig ? null : jfheig;
  }, bcaef['onFileUpdate'] = function (ehfgd, yxuz) {
    var wsuvrt = ehfgd['split']('/');ehfgd = wsuvrt[wsuvrt['length'] - 0x1], wsuvrt = bcaef['getFileInfo'](yxuz), null == wsuvrt ? bcaef['onSaveFile'](yxuz, ehfgd) : wsuvrt['readyUrl'] != yxuz && bcaef['remove'](ehfgd, yxuz);
  }, bcaef['exits'] = function (qprut, fehgji) {
    qprut = bcaef['getFileNativePath'](qprut), bcaef['fs']['getFileInfo']({ 'filePath': qprut, 'success': function (fcegbd) {
        null != fehgji && fehgji['runWith']([0x0, fcegbd]);
      }, 'fail': function (nkjlm) {
        null != fehgji && fehgji['runWith']([0x1, nkjlm]);
      } });
  }, bcaef['read'] = function (rmoqp, ghfdec, hegjif, gifeh) {
    void 0x0 === ghfdec && (ghfdec = 'ascill'), rmoqp = '' != (gifeh = void 0x0 === gifeh ? '' : gifeh) ? bcaef['getFileNativePath'](rmoqp) : rmoqp, bcaef['fs']['readFile']({ 'filePath': rmoqp, 'encoding': ghfdec, 'success': function (xz0_) {
        null != hegjif && hegjif['runWith']([0x0, xz0_]);
      }, 'fail': function (ornqmp) {
        ornqmp && '' != gifeh ? bcaef['down'](gifeh, ghfdec, hegjif, gifeh) : null != hegjif && hegjif['runWith']([0x1]);
      } });
  }, bcaef['readNativeFile'] = function (mlkop, qurtps) {
    bcaef['fs']['readFile']({ 'filePath': mlkop, 'encoding': '', 'success': function (lompqn) {
        null != qurtps && qurtps['runWith']([0x0]);
      }, 'fail': function (mkjno) {
        null != qurtps && qurtps['runWith']([0x1]);
      } });
  }, bcaef['down'] = function (w$xzv, rtpqu, uswtv, uptr) {
    void 0x0 === rtpqu && (rtpqu = 'ascill'), void 0x0 === uptr && (uptr = '');var mljki = bcaef['getFileNativePath'](uptr);bcaef['wxdown']({ 'url': w$xzv, 'filePath': mljki, 'success': function (stquvr) {
        0xc8 === stquvr['statusCode'] && bcaef['readFile'](stquvr['filePath'], rtpqu, uswtv, uptr);
      }, 'fail': function (zx_) {
        null != uswtv && uswtv['runWith']([0x1, zx_]);
      } })['onProgressUpdate'](function (hfecd) {
      null != uswtv && uswtv['runWith']([0x2, hfecd['progress']]);
    });
  }, bcaef['readFile'] = function (tqsuv, gkhjif, hfjeg, urvwts) {
    void 0x0 === urvwts && (urvwts = ''), bcaef['fs']['readFile']({ 'filePath': tqsuv, 'encoding': gkhjif = void 0x0 === gkhjif ? 'ascill' : gkhjif, 'success': function ($xvywz) {
        -0x1 == tqsuv['indexOf']('http://') && -0x1 == tqsuv['indexOf']('https://') || bcaef['onFileUpdate'](tqsuv, urvwts), null != hfjeg && hfjeg['runWith']([0x0, $xvywz]);
      }, 'fail': function (kihlj) {
        kihlj && null != hfjeg && hfjeg['runWith']([0x1, kihlj]);
      } });
  }, bcaef['downImg'] = function (vuyzw, _y$01z, mnopk) {
    void 0x0 === mnopk && (mnopk = ''), bcaef['wxdown']({ 'url': vuyzw, 'success': function (wytxv) {
        0xc8 === wytxv['statusCode'] && bcaef['copyFile'](wytxv['tempFilePath'], mnopk, _y$01z);
      }, 'fail': function (sotqr) {
        null != _y$01z && _y$01z['runWith']([0x1, sotqr]);
      } });
  }, bcaef['copyFile'] = function (fjigh, mnlqo, rtq) {
    var monpqr = fjigh['split']('/'),
        rquvt = monpqr[monpqr['length'] - 0x1];mnlqo['split']('?')[0x0];var ojnlmk = bcaef['getFileInfo'](mnlqo);monpqr = bcaef['getFileNativePath'](rquvt), bcaef['fs']['copyFile']({ 'srcPath': fjigh, 'destPath': monpqr, 'success': function (_0z1$y) {
        ojnlmk ? ojnlmk['readyUrl'] != mnlqo && bcaef['remove'](rquvt, mnlqo, rtq) : (bcaef['onSaveFile'](mnlqo, rquvt), null != rtq && rtq['runWith']([0x0]));
      }, 'fail': function (kfigjh) {
        null != rtq && rtq['runWith']([0x1, kfigjh]);
      } });
  }, bcaef['getFileNativePath'] = function (_xwy) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _xwy;
  }, bcaef['remove'] = function (cfhegd, $_0123, lkin) {
    void 0x0 === $_0123 && ($_0123 = '');var hklmji = bcaef['getFileInfo']($_0123),
        $yzv = bcaef['getFileNativePath'](hklmji['md5']);qnmlop['loader']['clearRes'](hklmji['readyUrl']), bcaef['fs']['unlink']({ 'filePath': $yzv, 'success': function (higkj) {
        '' != $_0123 && bcaef['onSaveFile']($_0123, cfhegd), null != lkin && lkin['runWith']([0x0]);
      }, 'fail': function (trosp) {} });
  }, bcaef['onSaveFile'] = function (v$yzw, lhkjmi) {
    var oplmn = v$yzw['split']('?')[0x0];bcaef['filesListObj'][oplmn] = { 'md5': lhkjmi, 'readyUrl': v$yzw }, bcaef['fs']['writeFile']({ 'filePath': bcaef['fileNativeDir'] + '/' + bcaef['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bcaef['filesListObj']), 'success': function (zvux) {
        console['log']('写入测试测试成功：', zvux);
      }, 'fail': function (hgkif) {
        console['log']('写入测试测试失败：', hgkif);
      } });
  }, bcaef['existDir'] = function (uvts, _0y1$z) {
    bcaef['fs']['mkdir']({ 'dirPath': uvts, 'success': function (yz0$1) {
        null != _0y1$z && _0y1$z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (trqup) {
        -0x1 != trqup['errMsg']['indexOf']('file already exists') ? bcaef['readSync'](bcaef['fileListName'], 'utf8', _0y1$z) : null != _0y1$z && _0y1$z['runWith']([0x1, trqup]);
      } });
  }, bcaef['readSync'] = function (tsor, gdcbe, yxvz, khilgj) {
    void 0x0 === gdcbe && (gdcbe = 'ascill'), void 0x0 === khilgj && (khilgj = ''), tsor = bcaef['getFileNativePath'](tsor);var gcdfe;try {
      gcdfe = bcaef['fs']['readFileSync'](tsor), null != yxvz && yxvz['runWith']([0x0, { 'data': gcdfe }]);
    } catch (z_01$2) {
      null != yxvz && yxvz['runWith']([0x1]);
    }
  }, bcaef['readCache'] = function () {}, bcaef['writeCache'] = function (_2$013) {
    var mljih = readyUrl['split']('?')[0x0];bcaef['filesListObj'][mljih] = { 'md5': md5Name, 'readyUrl': readyUrl }, bcaef['fs']['writeFile']({ 'filePath': bcaef['fileNativeDir'] + '/' + bcaef['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bcaef['filesListObj']), 'success': function (kmhjli) {}, 'fail': function (hefig) {} });
  }, bcaef['setNativeFileDir'] = function (qmrno) {
    bcaef['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qmrno;
  }, bcaef['filesListObj'] = {}, bcaef['fileNativeDir'] = null, bcaef['fileListName'] = 'layaairfiles.txt', bcaef['ziyuFileData'] = {}, onkmp(bcaef, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), bcaef);function bcaef() {
    bcaef['__super']['call'](this);
  }var puqtrs = function () {
    function kjo() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, kjo['__super']['call'](this), this['_sound'] = kjo['_createSound']();
    }rvtsuw(kjo, 'laya.wx.mini.MiniSound', _02$z);var abcedf = kjo['prototype'];return abcedf['load'] = function (mijknl) {
      var edfbc = this,
          qrnomp;function _0z12$() {
        if (null != kjo['_null']) edfbc['_sound']['onCanplay'](kjo['_null']), edfbc['_sound']['onError'](kjo['_null']);else try {
          edfbc['_sound']['onCanplay'](null), edfbc['_sound']['onError'](null), kjo['_null'] = null;
        } catch (fgejh) {
          console['warn']('[wxmini] _clearSound:' + fgejh), edfbc['_sound']['onCanplay'](tupqs), edfbc['_sound']['onError'](tupqs), kjo['_null'] = tupqs;
        }
      }function tupqs() {}mijknl = fbgde['formatURL'](mijknl), this['url'] = mijknl, kjo['_audioCache'][mijknl] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        _0z12$(), qrnomp['loaded'] = !0x0, qrnomp['event']('complete'), kjo['_audioCache'][qrnomp['url']] = qrnomp;
      }), this['_sound']['onError'](function (txyvuw) {
        console['error']('errCode=' + txyvuw['errCode'] + '  errMsg=' + txyvuw['errMsg']), _0z12$(), qrnomp['event']('error');
      }), this['_sound']['src'] = mijknl, qrnomp = this);
    }, abcedf['play'] = function (decfhg, hjmki) {
      void 0x0 === decfhg && (decfhg = 0x0), void 0x0 === hjmki && (hjmki = 0x0), (dcfhe = this['url'] == mkpln['_tMusic'] ? (kjo['_musicAudio'] || (kjo['_musicAudio'] = kjo['_createSound']()), kjo['_musicAudio']) : kjo['_createSound']())['src'] = this['url'];var dcfhe = new pornm(dcfhe);return dcfhe['url'] = this['url'], dcfhe['loops'] = hjmki, dcfhe['startTime'] = decfhg, dcfhe['play'](), mkpln['addChannel'](dcfhe), dcfhe;
    }, abcedf['dispose'] = function () {
      var xwyuvz = kjo['_audioCache'][this['url']];xwyuvz && (xwyuvz['src'] = '', delete kjo['_audioCache'][this['url']]);
    }, lojkn(0x0, abcedf, 'duration', function () {
      return this['_sound']['duration'];
    }), kjo['_createSound'] = function () {
      return kjo['_id']++, okmnp['window']['wx']['createInnerAudioContext']();
    }, kjo['_musicAudio'] = null, kjo['_id'] = 0x0, kjo['_audioCache'] = {}, kjo['_null'] = void 0x0, kjo;
  }(),
      pornm = function () {
    function twyvxu(uxzywv) {
      this['_audio'] = null, this['_onEnd'] = null, twyvxu['__super']['call'](this), this['_audio'] = uxzywv, this['_onEnd'] = fheg['bind'](this['__onEnd'], this), uxzywv['onEnded'](this['_onEnd']);
    }rvtsuw(twyvxu, 'laya.wx.mini.MiniSoundChannel', qpstr);var ighfj = twyvxu['prototype'];return ighfj['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (qnmlop['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ighfj['__onNull'] = function () {}, ighfj['play'] = function () {
      this['isStopped'] = !0x1, mkpln['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, ighfj['stop'] = function () {
      if (this['isStopped'] = !0x0, mkpln['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != twyvxu['_null']) this['_audio']['onEnded'](twyvxu['_null']);else try {
          this['_audio']['onEnded'](null), twyvxu['_null'] = null;
        } catch (z_yxw) {
          console['warn']('[wxmini] stop:' + z_yxw), this['_audio']['onEnded'](fheg['bind'](this['__onNull'], this)), twyvxu['_null'] = fheg['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, ighfj['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, ighfj['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, mkpln['addChannel'](this), this['_audio']['play']());
    }, lojkn(0x0, ighfj, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), lojkn(0x0, ighfj, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), lojkn(0x0, ighfj, 'volume', function () {
      return 0x1;
    }, function (hgeijf) {}), twyvxu['_null'] = void 0x0, twyvxu;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (_1$zy0, lnkj) {
  'use strict';

  for (var fcadbe in Object['defineProperty'](lnkj, '__esModule', { 'value': !0x0 }), Laya) {
    var mokpln = Laya[fcadbe];mokpln && mokpln['__isclass'] && (lnkj[fcadbe] = mokpln);
  }
});