var _ = wx.y$;
!function (_0$1, gedch) {
  gedch['un'], gedch['uns'];var orns = gedch['static'],
      xyuvzw = gedch['class'],
      kinlm = gedch['getset'];gedch['__newvec'];var kimlj = laya['utils']['Browser'],
      ijhgl = (laya['events']['Event'], laya['events']['EventDispatcher']),
      dfcbeg = laya['resource']['HTMLImage'],
      yzx_w$ = laya['utils']['Handler'],
      vrtws = laya['display']['Input'],
      fadec = laya['net']['Loader'];laya['maths']['Matrix'];var dhfieg = laya['renders']['Render'],
      stqpru = laya['utils']['RunDriver'];laya['media']['Sound'];var higjfe = laya['media']['SoundChannel'],
      $1_032 = laya['media']['SoundManager'],
      rwvus = (laya['display']['Stage'], laya['net']['URL']),
      psturq = laya['utils']['Utils'],
      nosqrp = (xyuvzw(dhgfei, 'laya.wx.mini.MiniAdpter'), dhgfei['getJson'] = function (yvxwut) {
    return JSON['parse'](yvxwut);
  }, dhgfei['init'] = function (nkjlmi, klmj) {
    void 0x0 === nkjlmi && (nkjlmi = !0x1), void 0x0 === klmj && (klmj = !0x1), dhgfei['_inited'] || (dhgfei['window'] = _0$1)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (dhgfei['_inited'] = !0x0, dhgfei['isZiYu'] = klmj, dhgfei['isPosMsgYu'] = nkjlmi, dhgfei['EnvConfig'] = {}, dhgfei['isZiYu'] || (ytvx['setNativeFileDir']('/layaairGame'), ytvx['existDir'](ytvx['fileNativeDir'], yzx_w$['create'](dhgfei, dhgfei['onMkdirCallBack']))), dhgfei['window']['focus'] = function () {}, gedch['getUrlPath'] = function () {}, dhgfei['window']['logtime'] = function (nkimj) {}, dhgfei['window']['alertTimeLog'] = function (hilkm) {}, dhgfei['window']['resetShareInfo'] = function () {}, dhgfei['window']['CanvasRenderingContext2D'] = function () {}, dhgfei['window']['CanvasRenderingContext2D']['prototype'] = dhgfei['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dhgfei['window']['document']['body']['appendChild'] = function () {}, dhgfei['EnvConfig']['pixelRatioInt'] = 0x0, stqpru['getPixelRatio'] = dhgfei['pixelRatio'], dhgfei['_preCreateElement'] = kimlj['createElement'], kimlj['createElement'] = dhgfei['createElement'], stqpru['createShaderCondition'] = dhgfei['createShaderCondition'], psturq['parseXMLFromString'] = dhgfei['parseXMLFromString'], vrtws['_createInputElement'] = kihlg['_createInputElement'], dhgfei['EnvConfig']['load'] = fadec['prototype']['load'], fadec['prototype']['load'] = gkiljh['prototype']['load'], dhgfei['isZiYu'] && nkjlmi && wx['onMessage'](function (eijfg) {
      eijfg['isLoad'] && (ytvx['ziyuFileData'][eijfg['url']] = eijfg['data']);
    }));
  }, dhgfei['onMkdirCallBack'] = function (ghkj, gkifhj) {
    ghkj || (ytvx['filesListObj'] = JSON['parse'](gkifhj['data']));
  }, dhgfei['pixelRatio'] = function () {
    if (!dhgfei['EnvConfig']['pixelRatioInt']) try {
      var glikh = wx['getSystemInfoSync']();return dhgfei['EnvConfig']['pixelRatioInt'] = glikh['pixelRatio'], glikh['pixelRatio'];
    } catch (qsprt) {}return dhgfei['EnvConfig']['pixelRatioInt'];
  }, dhgfei['createElement'] = function (_04132) {
    var onmrpq;if ('canvas' == _04132) return 0x1 == dhgfei['idx'] ? dhgfei['isZiYu'] ? (onmrpq = sharedCanvas)['style'] = {} : onmrpq = _0$1['canvas'] : onmrpq = _0$1['wx']['createCanvas'](), dhgfei['idx']++, onmrpq;if ('textarea' == _04132 || 'input' == _04132) return dhgfei['onCreateInput'](_04132);if ('div' != _04132) return dhgfei['_preCreateElement'](_04132);return _04132 = dhgfei['_preCreateElement'](_04132), (_04132['contains'] = function (pnorqm) {
      return null;
    }, _04132['removeChild'] = function (lkmonj) {}, _04132);
  }, dhgfei['onCreateInput'] = function (qostrp) {
    return qostrp = dhgfei['_preCreateElement'](qostrp), (qostrp['focus'] = kihlg['wxinputFocus'], qostrp['blur'] = kihlg['wxinputblur'], qostrp['style'] = {}, qostrp['value'] = 0x0, qostrp['parentElement'] = {}, qostrp['placeholder'] = {}, qostrp['type'] = {}, qostrp['setColor'] = function (bacdf) {}, qostrp['setType'] = function (dgehcf) {}, qostrp['setFontFace'] = function (knlomp) {}, qostrp['addEventListener'] = function (rtqs) {}, qostrp['contains'] = function (plnmko) {
      return null;
    }, qostrp['removeChild'] = function (swtxuv) {}, qostrp);
  }, dhgfei['createShaderCondition'] = function (gfidh) {
    var hfegdi = this;return function () {
      return hfegdi[gfidh['replace']('this.', '')];
    };
  }, dhgfei['EnvConfig'] = null, dhgfei['window'] = null, dhgfei['_preCreateElement'] = null, dhgfei['_inited'] = !0x1, dhgfei['wxRequest'] = null, dhgfei['systemInfo'] = null, dhgfei['version'] = '0.0.1', dhgfei['isZiYu'] = !0x1, dhgfei['isPosMsgYu'] = !0x1, dhgfei['parseXMLFromString'] = function (egdfch) {
    var uwytxv;egdfch = egdfch['replace'](/>\s+</g, '><');try {
      uwytxv = new _0$1['Parser']['DOMParser']()['parseFromString'](egdfch, 'text/xml');
    } catch (txwsv) {
      throw '需要引入xml解析库文件';
    }return uwytxv;
  }, dhgfei['idx'] = 0x1, dhgfei);function dhgfei() {}xyuvzw(w$v, 'laya.wx.mini.MiniImage'), w$v['prototype']['_loadImage'] = function (lmij) {
    var cehg = !0x1;-0x1 == lmij['indexOf']('layaNativeDir/') && (cehg = !0x0, lmij = rwvus['formatURL'](lmij)), ytvx['getFileInfo'](lmij) ? w$v['onCreateImage'](lmij, this, !cehg) : -0x1 != lmij['indexOf']('http://') || -0x1 != lmij['indexOf']('https://') ? ytvx['downImg'](lmij, new yzx_w$(w$v, w$v['onDownImgCallBack'], [lmij, this]), lmij) : w$v['onCreateImage'](lmij, this, !0x0);
  }, w$v['onDownImgCallBack'] = function (kjilmn, fhdgie, lnkomj) {
    lnkomj ? fhdgie['onError'](null) : w$v['onCreateImage'](kjilmn, fhdgie);
  }, w$v['onCreateImage'] = function (eacdfb, qtpurs, igkjf) {
    var nopml, bacfed;function wvxtyu() {
      bacfed['onload'] = null, bacfed['onerror'] = null, delete qtpurs['imgCache'][eacdfb];
    }nopml = (igkjf = void 0x0 === igkjf ? !0x1 : igkjf) ? eacdfb : (jfigkh = ytvx['getFileInfo'](eacdfb)['md5'], ytvx['getFileNativePath'](jfigkh)), null == qtpurs['imgCache'] && (qtpurs['imgCache'] = {}), igkjf = function () {
      wvxtyu(), qtpurs['onLoaded'](bacfed);
    };var jfigkh = function () {
      wvxtyu(), qtpurs['event']('error', 'Load image failed');
    };'nativeimage' == qtpurs['_type'] ? ((bacfed = new kimlj['window']['Image']())['crossOrigin'] = '', bacfed['onload'] = igkjf, bacfed['onerror'] = jfigkh, bacfed['src'] = nopml, qtpurs['imgCache'][eacdfb] = bacfed) : new dfcbeg['create'](nopml, { 'onload': igkjf, 'onerror': jfigkh, 'onCreate': function (ywuvtx) {
        bacfed = ywuvtx, qtpurs['imgCache'][eacdfb] = ywuvtx;
      } });
  };function w$v() {}var kihlg = (xyuvzw($wyvzx, 'laya.wx.mini.MiniInput'), $wyvzx['_createInputElement'] = function () {
    vrtws['_initInput'](vrtws['area'] = kimlj['createElement']('textarea')), vrtws['_initInput'](vrtws['input'] = kimlj['createElement']('input')), vrtws['inputContainer'] = kimlj['createElement']('div'), vrtws['inputContainer']['style']['position'] = 'absolute', vrtws['inputContainer']['style']['zIndex'] = 0x186a0, kimlj['container']['appendChild'](vrtws['inputContainer']), vrtws['inputContainer']['setPos'] = function (nmkol, nompl) {
      vrtws['inputContainer']['style']['left'] = nmkol + 'px', vrtws['inputContainer']['style']['top'] = nompl + 'px';
    }, gedch['stage']['on']('resize', null, $wyvzx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_yz0x$) {
      _0$1['dispatchEvent'] && _0$1['dispatchEvent']('resize');
    }), $1_032['_soundClass'] = qusvrt, $1_032['_musicClass'] = qusvrt;
  }, $wyvzx['_onStageResize'] = function () {
    gedch['stage']['_canvasTransform']['identity']()['scale'](kimlj['width'] / dhfieg['canvas']['width'] / stqpru['getPixelRatio'](), kimlj['height'] / dhfieg['canvas']['height'] / stqpru['getPixelRatio']());
  }, $wyvzx['wxinputFocus'] = function (hil) {
    var hjm = vrtws['inputElement']['target'];hjm && !hjm['editable'] || (nosqrp['window']['wx']['offKeyboardConfirm'](), nosqrp['window']['wx']['offKeyboardInput'](), nosqrp['window']['wx']['showKeyboard']({ 'defaultValue': hjm['text'], 'maxLength': hjm['maxChars'], 'multiple': hjm['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (toqp) {}, 'fail': function (vutxw) {} }), nosqrp['window']['wx']['onKeyboardConfirm'](function (xzuwv) {
      xzuwv = xzuwv ? xzuwv['value'] : '', (hjm['text'] = xzuwv, hjm['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), nosqrp['window']['wx']['onKeyboardInput'](function (ptoq) {
      ptoq = ptoq ? ptoq['value'] : '', hjm['multiline'] || -0x1 == ptoq['indexOf']('\x0a') ? (hjm['text'] = ptoq, hjm['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, $wyvzx['inputEnter'] = function () {
    vrtws['inputElement']['target']['focus'] = !0x1;
  }, $wyvzx['wxinputblur'] = function () {
    $wyvzx['hideKeyboard']();
  }, $wyvzx['hideKeyboard'] = function () {
    nosqrp['window']['wx']['offKeyboardConfirm'](), nosqrp['window']['wx']['offKeyboardInput'](), nosqrp['window']['wx']['hideKeyboard']({ 'success': function (oqpmn) {
        console['log']('隐藏键盘');
      }, 'fail': function (wrsvt) {
        console['log']('隐藏键盘出错:' + (wrsvt ? wrsvt['errMsg'] : ''));
      } });
  }, $wyvzx);function $wyvzx() {}var gkiljh = function () {
    function swrt() {}xyuvzw(swrt, 'laya.wx.mini.MiniLoader');var xzv$yw = swrt['prototype'];return xzv$yw['load'] = function (wrvus, usvrw, uwzx, bdcafe, ilnmj) {
      void 0x0 === uwzx && (uwzx = !0x0), void 0x0 === ilnmj && (ilnmj = !0x1);var ytxw = this;0x0 === (ytxw['_url'] = wrvus)['indexOf']('data:image') ? ytxw['_type'] = usvrw = 'image' : ytxw['_type'] = usvrw = usvrw || ytxw['getTypeFromUrl'](wrvus), ytxw['_cache'] = uwzx, ytxw['_data'] = null;var pmqnol = 'ascii';-0x1 != wrvus['indexOf']('.fnt') ? pmqnol = 'utf8' : 'arraybuffer' == usvrw && (pmqnol = '');var _y10z$ = psturq['getFileExtension'](wrvus);if (-0x1 != swrt['_fileTypeArr']['indexOf'](_y10z$)) nosqrp['EnvConfig']['load']['call'](this, wrvus, usvrw, uwzx, bdcafe, ilnmj);else {
        if (ytvx['getFileInfo'](wrvus)) nosqrp['EnvConfig']['load']['call'](this, wrvus, usvrw, uwzx, bdcafe, ilnmj);else {
          if (-0x1 != wrvus['indexOf']('layaNativeDir/')) {
            if (nosqrp['isZiYu']) {
              var uxwvyt = ytvx['ziyuFileData'][wrvus];return void ytxw['onLoaded'](uxwvyt);
            }return cosnole['log']('read read'), void ytvx['read'](wrvus, pmqnol, new yzx_w$(swrt, swrt['onReadNativeCallBack'], [pmqnol, wrvus, usvrw, uwzx, bdcafe, ilnmj, ytxw]));
          }uxwvyt = '' == rwvus['rootPath'] ? wrvus : wrvus['split'](rwvus['rootPath'])[0x0], -0x1 != wrvus['indexOf']('http://') || -0x1 != wrvus['indexOf']('https://') ? nosqrp['EnvConfig']['load']['call'](ytxw, wrvus, usvrw, uwzx, bdcafe, ilnmj) : ytvx['readFile'](uxwvyt, pmqnol, new yzx_w$(swrt, swrt['onReadNativeCallBack'], [pmqnol, wrvus, usvrw, uwzx, bdcafe, ilnmj, ytxw]), wrvus);
        }
      }
    }, xzv$yw['resMgrLoad'] = function (hikgf, vstux, sutwvx, uvwtx, hjlg, npmoq, qmorpn) {
      void 0x0 === sutwvx && (sutwvx = 0x0), void 0x0 === uvwtx && (uvwtx = !0x1), void 0x0 === hjlg && (hjlg = !0x1), void 0x0 === npmoq && (npmoq = 0x0), void 0x0 === qmorpn && (qmorpn = 0x3), -0x1 != hikgf['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hikgf), nosqrp['EnvConfig']['resMgrLoad'](hikgf, (tprqs, che, gdieh) => {
        swrt['prototype']['resMgrLoadCallBack'](tprqs, che, gdieh, vstux);
      }, sutwvx, uvwtx, hjlg, npmoq, qmorpn);
    }, xzv$yw['resMgrLoadCallBack'] = function (npkolm, txvwus, srpqu, komjln) {
      console['log']('buff:::', npkolm, srpqu, ytvx['fileNativeDir'] + '///' + ytvx['fileListName']), komjln(npkolm, txvwus, srpqu);
    }, xzv$yw['clearRes'] = function (onmkj, zyvxw) {
      this['clearRes'](onmkj, zyvxw = void 0x0 === zyvxw ? !0x1 : zyvxw), zyvxw = ytvx['getFileInfo'](onmkj), !zyvxw || -0x1 == onmkj['indexOf']('http://') && -0x1 == onmkj['indexOf']('https://') || (zyvxw = zyvxw['md5'], zyvxw = ytvx['getFileNativePath'](zyvxw), ytvx['remove'](zyvxw));
    }, swrt['onReadNativeCallBack'] = function (eacb, strpqo, tsxwv, onmpkl, gilk, $3210, tsqpru, y$_1z0, usvx) {
      void 0x0 === onmpkl && (onmpkl = !0x0), void 0x0 === $3210 && ($3210 = !0x1), (y$_1z0 = void 0x0 === y$_1z0 ? 0x0 : y$_1z0) ? 0x1 == y$_1z0 && nosqrp['EnvConfig']['load']['call'](tsqpru, strpqo, tsxwv, onmpkl, gilk, $3210) : (usvx = 'json' == tsxwv || 'atlas' == tsxwv ? nosqrp['getJson'](usvx['data']) : 'xml' == tsxwv ? psturq['parseXMLFromString'](usvx['data']) : usvx['data'], tsqpru['onLoaded'](usvx), !nosqrp['isZiYu'] && nosqrp['isPosMsgYu'] && 'arraybuffer' != tsxwv && wx['postMessage']({ 'url': strpqo, 'data': usvx, 'isLoad': !0x0 }));
    }, orns(swrt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), swrt;
  }(),
      ytvx = (xyuvzw(lhkim, 'laya.wx.mini.MiniFileMgr', ijhgl), lhkim['isLoadFile'] = function (kmojln) {
    return -0x1 != lhkim['_fileTypeArr']['indexOf'](kmojln);
  }, lhkim['getFileInfo'] = function (gihfde) {
    return gihfde = gihfde['split']('?')[0x0], gihfde = lhkim['filesListObj'][gihfde], null == gihfde ? null : gihfde;
  }, lhkim['onFileUpdate'] = function ($xz0y, pnqomr) {
    var xsvtwu = $xz0y['split']('/');$xz0y = xsvtwu[xsvtwu['length'] - 0x1], xsvtwu = lhkim['getFileInfo'](pnqomr), null == xsvtwu ? lhkim['onSaveFile'](pnqomr, $xz0y) : xsvtwu['readyUrl'] != pnqomr && lhkim['remove']($xz0y, pnqomr);
  }, lhkim['exits'] = function (monprq, jghif) {
    monprq = lhkim['getFileNativePath'](monprq), lhkim['fs']['getFileInfo']({ 'filePath': monprq, 'success': function (fdehg) {
        null != jghif && jghif['runWith']([0x0, fdehg]);
      }, 'fail': function (qotrp) {
        null != jghif && jghif['runWith']([0x1, qotrp]);
      } });
  }, lhkim['read'] = function (vtqu, xwuyt, hgjef, ligk) {
    void 0x0 === xwuyt && (xwuyt = 'ascill'), vtqu = '' != (ligk = void 0x0 === ligk ? '' : ligk) ? lhkim['getFileNativePath'](vtqu) : vtqu, lhkim['fs']['readFile']({ 'filePath': vtqu, 'encoding': xwuyt, 'success': function (lpoqmn) {
        null != hgjef && hgjef['runWith']([0x0, lpoqmn]);
      }, 'fail': function (ponqlm) {
        ponqlm && '' != ligk ? lhkim['down'](ligk, xwuyt, hgjef, ligk) : null != hgjef && hgjef['runWith']([0x1]);
      } });
  }, lhkim['readNativeFile'] = function ($yzxw, wuvyzx) {
    lhkim['fs']['readFile']({ 'filePath': $yzxw, 'encoding': '', 'success': function (mkponl) {
        null != wuvyzx && wuvyzx['runWith']([0x0]);
      }, 'fail': function ($1_02z) {
        null != wuvyzx && wuvyzx['runWith']([0x1]);
      } });
  }, lhkim['down'] = function (zxvu, nljmki, $10y_z, nimkjl) {
    void 0x0 === nljmki && (nljmki = 'ascill'), void 0x0 === nimkjl && (nimkjl = '');var kjhigl = lhkim['getFileNativePath'](nimkjl);lhkim['wxdown']({ 'url': zxvu, 'filePath': kjhigl, 'success': function (ihmjk) {
        0xc8 === ihmjk['statusCode'] && lhkim['readFile'](ihmjk['filePath'], nljmki, $10y_z, nimkjl);
      }, 'fail': function (higd) {
        null != $10y_z && $10y_z['runWith']([0x1, higd]);
      } })['onProgressUpdate'](function (rtpos) {
      null != $10y_z && $10y_z['runWith']([0x2, rtpos['progress']]);
    });
  }, lhkim['readFile'] = function (hkjlmi, qtusp, $02_, uyzxw) {
    void 0x0 === uyzxw && (uyzxw = ''), lhkim['fs']['readFile']({ 'filePath': hkjlmi, 'encoding': qtusp = void 0x0 === qtusp ? 'ascill' : qtusp, 'success': function (qtsop) {
        -0x1 == hkjlmi['indexOf']('http://') && -0x1 == hkjlmi['indexOf']('https://') || lhkim['onFileUpdate'](hkjlmi, uyzxw), null != $02_ && $02_['runWith']([0x0, qtsop]);
      }, 'fail': function (dbgfce) {
        dbgfce && null != $02_ && $02_['runWith']([0x1, dbgfce]);
      } });
  }, lhkim['downImg'] = function (_$yzx0, ljnmi, fgiejh) {
    void 0x0 === fgiejh && (fgiejh = ''), lhkim['wxdown']({ 'url': _$yzx0, 'success': function (jlmikn) {
        0xc8 === jlmikn['statusCode'] && lhkim['copyFile'](jlmikn['tempFilePath'], fgiejh, ljnmi);
      }, 'fail': function (w$_xzy) {
        null != ljnmi && ljnmi['runWith']([0x1, w$_xzy]);
      } });
  }, lhkim['copyFile'] = function (acfdeb, qpomr, begdc) {
    var adbe = acfdeb['split']('/'),
        nplko = adbe[adbe['length'] - 0x1];qpomr['split']('?')[0x0];var yvtxwu = lhkim['getFileInfo'](qpomr);adbe = lhkim['getFileNativePath'](nplko), lhkim['fs']['copyFile']({ 'srcPath': acfdeb, 'destPath': adbe, 'success': function (jfikgh) {
        yvtxwu ? yvtxwu['readyUrl'] != qpomr && lhkim['remove'](nplko, qpomr, begdc) : (lhkim['onSaveFile'](qpomr, nplko), null != begdc && begdc['runWith']([0x0]));
      }, 'fail': function (acf) {
        null != begdc && begdc['runWith']([0x1, acf]);
      } });
  }, lhkim['getFileNativePath'] = function (rpqmn) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rpqmn;
  }, lhkim['remove'] = function (wvrut, ljom, opr) {
    void 0x0 === ljom && (ljom = '');var tsuwvr = lhkim['getFileInfo'](ljom),
        wsutvx = lhkim['getFileNativePath'](tsuwvr['md5']);gedch['loader']['clearRes'](tsuwvr['readyUrl']), lhkim['fs']['unlink']({ 'filePath': wsutvx, 'success': function (vxstw) {
        '' != ljom && lhkim['onSaveFile'](ljom, wvrut), null != opr && opr['runWith']([0x0]);
      }, 'fail': function (jmihlk) {} });
  }, lhkim['onSaveFile'] = function (cedbaf, qnmor) {
    var ejhgf = cedbaf['split']('?')[0x0];lhkim['filesListObj'][ejhgf] = { 'md5': qnmor, 'readyUrl': cedbaf }, lhkim['fs']['writeFile']({ 'filePath': lhkim['fileNativeDir'] + '/' + lhkim['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lhkim['filesListObj']), 'success': function (ihefgj) {
        console['log']('写入测试测试成功：', ihefgj);
      }, 'fail': function (yxw_$z) {
        console['log']('写入测试测试失败：', yxw_$z);
      } });
  }, lhkim['existDir'] = function (zvw$y, zxywvu) {
    lhkim['fs']['mkdir']({ 'dirPath': zvw$y, 'success': function (uvstq) {
        null != zxywvu && zxywvu['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (eifghj) {
        -0x1 != eifghj['errMsg']['indexOf']('file already exists') ? lhkim['readSync'](lhkim['fileListName'], 'utf8', zxywvu) : null != zxywvu && zxywvu['runWith']([0x1, eifghj]);
      } });
  }, lhkim['readSync'] = function (qpots, vwrtu, hideg, _$3201) {
    void 0x0 === vwrtu && (vwrtu = 'ascill'), void 0x0 === _$3201 && (_$3201 = ''), qpots = lhkim['getFileNativePath'](qpots);var fdgceh;try {
      fdgceh = lhkim['fs']['readFileSync'](qpots), null != hideg && hideg['runWith']([0x0, { 'data': fdgceh }]);
    } catch (lpkn) {
      null != hideg && hideg['runWith']([0x1]);
    }
  }, lhkim['readCache'] = function () {}, lhkim['writeCache'] = function (ruqspt) {
    var oprnmq = readyUrl['split']('?')[0x0];lhkim['filesListObj'][oprnmq] = { 'md5': md5Name, 'readyUrl': readyUrl }, lhkim['fs']['writeFile']({ 'filePath': lhkim['fileNativeDir'] + '/' + lhkim['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lhkim['filesListObj']), 'success': function (qso) {}, 'fail': function (uvwzxy) {} });
  }, lhkim['setNativeFileDir'] = function (uptsr) {
    lhkim['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uptsr;
  }, lhkim['filesListObj'] = {}, lhkim['fileNativeDir'] = null, lhkim['fileListName'] = 'layaairfiles.txt', lhkim['ziyuFileData'] = {}, orns(lhkim, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), lhkim);function lhkim() {
    lhkim['__super']['call'](this);
  }var qusvrt = function () {
    function gikj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, gikj['__super']['call'](this), this['_sound'] = gikj['_createSound']();
    }xyuvzw(gikj, 'laya.wx.mini.MiniSound', ijhgl);var jefhig = gikj['prototype'];return jefhig['load'] = function (fdiheg) {
      var nopmq = this,
          gcehfd;function qptos() {
        if (null != gikj['_null']) nopmq['_sound']['onCanplay'](gikj['_null']), nopmq['_sound']['onError'](gikj['_null']);else try {
          nopmq['_sound']['onCanplay'](null), nopmq['_sound']['onError'](null), gikj['_null'] = null;
        } catch (_0$yz1) {
          console['warn']('[wxmini] _clearSound:' + _0$yz1), nopmq['_sound']['onCanplay'](dcefba), nopmq['_sound']['onError'](dcefba), gikj['_null'] = dcefba;
        }
      }function dcefba() {}fdiheg = rwvus['formatURL'](fdiheg), this['url'] = fdiheg, gikj['_audioCache'][fdiheg] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        qptos(), gcehfd['loaded'] = !0x0, gcehfd['event']('complete'), gikj['_audioCache'][gcehfd['url']] = gcehfd;
      }), this['_sound']['onError'](function (aebfdc) {
        console['error']('errCode=' + aebfdc['errCode'] + '  errMsg=' + aebfdc['errMsg']), qptos(), gcehfd['event']('error');
      }), this['_sound']['src'] = fdiheg, gcehfd = this);
    }, jefhig['play'] = function (olqpnm, yzxwuv) {
      void 0x0 === olqpnm && (olqpnm = 0x0), void 0x0 === yzxwuv && (yzxwuv = 0x0), (cbaed = this['url'] == $1_032['_tMusic'] ? (gikj['_musicAudio'] || (gikj['_musicAudio'] = gikj['_createSound']()), gikj['_musicAudio']) : gikj['_createSound']())['src'] = this['url'];var cbaed = new mpkon(cbaed);return cbaed['url'] = this['url'], cbaed['loops'] = yzxwuv, cbaed['startTime'] = olqpnm, cbaed['play'](), $1_032['addChannel'](cbaed), cbaed;
    }, jefhig['dispose'] = function () {
      var vytxw = gikj['_audioCache'][this['url']];vytxw && (vytxw['src'] = '', delete gikj['_audioCache'][this['url']]);
    }, kinlm(0x0, jefhig, 'duration', function () {
      return this['_sound']['duration'];
    }), gikj['_createSound'] = function () {
      return gikj['_id']++, nosqrp['window']['wx']['createInnerAudioContext']();
    }, gikj['_musicAudio'] = null, gikj['_id'] = 0x0, gikj['_audioCache'] = {}, gikj['_null'] = void 0x0, gikj;
  }(),
      mpkon = function () {
    function nlkijm(monjlk) {
      this['_audio'] = null, this['_onEnd'] = null, nlkijm['__super']['call'](this), this['_audio'] = monjlk, this['_onEnd'] = psturq['bind'](this['__onEnd'], this), monjlk['onEnded'](this['_onEnd']);
    }xyuvzw(nlkijm, 'laya.wx.mini.MiniSoundChannel', higjfe);var opsn = nlkijm['prototype'];return opsn['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (gedch['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, opsn['__onNull'] = function () {}, opsn['play'] = function () {
      this['isStopped'] = !0x1, $1_032['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, opsn['stop'] = function () {
      if (this['isStopped'] = !0x0, $1_032['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != nlkijm['_null']) this['_audio']['onEnded'](nlkijm['_null']);else try {
          this['_audio']['onEnded'](null), nlkijm['_null'] = null;
        } catch (fikhj) {
          console['warn']('[wxmini] stop:' + fikhj), this['_audio']['onEnded'](psturq['bind'](this['__onNull'], this)), nlkijm['_null'] = psturq['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, opsn['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, opsn['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $1_032['addChannel'](this), this['_audio']['play']());
    }, kinlm(0x0, opsn, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), kinlm(0x0, opsn, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), kinlm(0x0, opsn, 'volume', function () {
      return 0x1;
    }, function (jkmnlo) {}), nlkijm['_null'] = void 0x0, nlkijm;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (giefd, cebf) {
  'use strict';

  for (var roqs in Object['defineProperty'](cebf, '__esModule', { 'value': !0x0 }), Laya) {
    var jkmihl = Laya[roqs];jkmihl && jkmihl['__isclass'] && (cebf[roqs] = jkmihl);
  }
});