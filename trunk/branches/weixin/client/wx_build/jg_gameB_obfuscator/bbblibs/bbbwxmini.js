var _ = wx.y$;
!function ($_z0, rnqpo) {
  rnqpo['un'], rnqpo['uns'];var olkpm = rnqpo['static'],
      jghife = rnqpo['class'],
      kfijgh = rnqpo['getset'];rnqpo['__newvec'];var polkmn = laya['utils']['Browser'],
      lmpnqo = (laya['events']['Event'], laya['events']['EventDispatcher']),
      sqtrpo = laya['resource']['HTMLImage'],
      _xy$wz = laya['utils']['Handler'],
      fdgech = laya['display']['Input'],
      torp = laya['net']['Loader'];laya['maths']['Matrix'];var hjgie = laya['renders']['Render'],
      qotrp = laya['utils']['RunDriver'];laya['media']['Sound'];var gfcdh = laya['media']['SoundChannel'],
      dace = laya['media']['SoundManager'],
      nmlpk = (laya['display']['Stage'], laya['net']['URL']),
      ghfjik = laya['utils']['Utils'],
      hjg = (jghife(ihgfjk, 'laya.wx.mini.MiniAdpter'), ihgfjk['getJson'] = function (ghiedf) {
    return JSON['parse'](ghiedf);
  }, ihgfjk['init'] = function (vxstu, fiegd) {
    void 0x0 === vxstu && (vxstu = !0x1), void 0x0 === fiegd && (fiegd = !0x1), ihgfjk['_inited'] || (ihgfjk['window'] = $_z0)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ihgfjk['_inited'] = !0x0, ihgfjk['isZiYu'] = fiegd, ihgfjk['isPosMsgYu'] = vxstu, ihgfjk['EnvConfig'] = {}, ihgfjk['isZiYu'] || (gefchd['setNativeFileDir']('/layaairGame'), gefchd['existDir'](gefchd['fileNativeDir'], _xy$wz['create'](ihgfjk, ihgfjk['onMkdirCallBack']))), ihgfjk['window']['focus'] = function () {}, rnqpo['getUrlPath'] = function () {}, ihgfjk['window']['logtime'] = function (geifjh) {}, ihgfjk['window']['alertTimeLog'] = function (cegh) {}, ihgfjk['window']['resetShareInfo'] = function () {}, ihgfjk['window']['CanvasRenderingContext2D'] = function () {}, ihgfjk['window']['CanvasRenderingContext2D']['prototype'] = ihgfjk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ihgfjk['window']['document']['body']['appendChild'] = function () {}, ihgfjk['EnvConfig']['pixelRatioInt'] = 0x0, qotrp['getPixelRatio'] = ihgfjk['pixelRatio'], ihgfjk['_preCreateElement'] = polkmn['createElement'], polkmn['createElement'] = ihgfjk['createElement'], qotrp['createShaderCondition'] = ihgfjk['createShaderCondition'], ghfjik['parseXMLFromString'] = ihgfjk['parseXMLFromString'], fdgech['_createInputElement'] = oqnmlp['_createInputElement'], ihgfjk['EnvConfig']['load'] = torp['prototype']['load'], torp['prototype']['load'] = cfbeda['prototype']['load'], ihgfjk['isZiYu'] && vxstu && wx['onMessage'](function (kimlnj) {
      kimlnj['isLoad'] && (gefchd['ziyuFileData'][kimlnj['url']] = kimlnj['data']);
    }));
  }, ihgfjk['onMkdirCallBack'] = function (qrstv, jhfkig) {
    qrstv || (gefchd['filesListObj'] = JSON['parse'](jhfkig['data']));
  }, ihgfjk['pixelRatio'] = function () {
    if (!ihgfjk['EnvConfig']['pixelRatioInt']) try {
      var vwsrut = wx['getSystemInfoSync']();return ihgfjk['EnvConfig']['pixelRatioInt'] = vwsrut['pixelRatio'], vwsrut['pixelRatio'];
    } catch (hilgkj) {}return ihgfjk['EnvConfig']['pixelRatioInt'];
  }, ihgfjk['createElement'] = function (zxwu) {
    var urstw;if ('canvas' == zxwu) return 0x1 == ihgfjk['idx'] ? ihgfjk['isZiYu'] ? (urstw = sharedCanvas)['style'] = {} : urstw = $_z0['canvas'] : urstw = $_z0['wx']['createCanvas'](), ihgfjk['idx']++, urstw;if ('textarea' == zxwu || 'input' == zxwu) return ihgfjk['onCreateInput'](zxwu);if ('div' != zxwu) return ihgfjk['_preCreateElement'](zxwu);return zxwu = ihgfjk['_preCreateElement'](zxwu), (zxwu['contains'] = function (ropnmq) {
      return null;
    }, zxwu['removeChild'] = function (qlpmn) {}, zxwu);
  }, ihgfjk['onCreateInput'] = function (ronpmq) {
    return ronpmq = ihgfjk['_preCreateElement'](ronpmq), (ronpmq['focus'] = oqnmlp['wxinputFocus'], ronpmq['blur'] = oqnmlp['wxinputblur'], ronpmq['style'] = {}, ronpmq['value'] = 0x0, ronpmq['parentElement'] = {}, ronpmq['placeholder'] = {}, ronpmq['type'] = {}, ronpmq['setColor'] = function (ijkglh) {}, ronpmq['setType'] = function (vwrtus) {}, ronpmq['setFontFace'] = function (lkmopn) {}, ronpmq['addEventListener'] = function (nmkijl) {}, ronpmq['contains'] = function (edgifh) {
      return null;
    }, ronpmq['removeChild'] = function (klmji) {}, ronpmq);
  }, ihgfjk['createShaderCondition'] = function (_21$0z) {
    var egdch = this;return function () {
      return egdch[_21$0z['replace']('this.', '')];
    };
  }, ihgfjk['EnvConfig'] = null, ihgfjk['window'] = null, ihgfjk['_preCreateElement'] = null, ihgfjk['_inited'] = !0x1, ihgfjk['wxRequest'] = null, ihgfjk['systemInfo'] = null, ihgfjk['version'] = '0.0.1', ihgfjk['isZiYu'] = !0x1, ihgfjk['isPosMsgYu'] = !0x1, ihgfjk['parseXMLFromString'] = function (moj) {
    var vzxuw;moj = moj['replace'](/>\s+</g, '><');try {
      vzxuw = new $_z0['Parser']['DOMParser']()['parseFromString'](moj, 'text/xml');
    } catch (qnrpmo) {
      throw '需要引入xml解析库文件';
    }return vzxuw;
  }, ihgfjk['idx'] = 0x1, ihgfjk);function ihgfjk() {}jghife(vuzxwy, 'laya.wx.mini.MiniImage'), vuzxwy['prototype']['_loadImage'] = function (xvtus) {
    var zxv$wy = !0x1;-0x1 == xvtus['indexOf']('layaNativeDir/') && (zxv$wy = !0x0, xvtus = nmlpk['formatURL'](xvtus)), gefchd['getFileInfo'](xvtus) ? vuzxwy['onCreateImage'](xvtus, this, !zxv$wy) : -0x1 != xvtus['indexOf']('http://') || -0x1 != xvtus['indexOf']('https://') ? gefchd['downImg'](xvtus, new _xy$wz(vuzxwy, vuzxwy['onDownImgCallBack'], [xvtus, this]), xvtus) : vuzxwy['onCreateImage'](xvtus, this, !0x0);
  }, vuzxwy['onDownImgCallBack'] = function (hgfkji, hjikml, y_$x0) {
    y_$x0 ? hjikml['onError'](null) : vuzxwy['onCreateImage'](hgfkji, hjikml);
  }, vuzxwy['onCreateImage'] = function (ursp, jiehf, ebdac) {
    var ebdafc, $wzx;function xsv() {
      $wzx['onload'] = null, $wzx['onerror'] = null, delete jiehf['imgCache'][ursp];
    }ebdafc = (ebdac = void 0x0 === ebdac ? !0x1 : ebdac) ? ursp : (rsvqt = gefchd['getFileInfo'](ursp)['md5'], gefchd['getFileNativePath'](rsvqt)), null == jiehf['imgCache'] && (jiehf['imgCache'] = {}), ebdac = function () {
      xsv(), jiehf['onLoaded']($wzx);
    };var rsvqt = function () {
      xsv(), jiehf['event']('error', 'Load image failed');
    };'nativeimage' == jiehf['_type'] ? (($wzx = new polkmn['window']['Image']())['crossOrigin'] = '', $wzx['onload'] = ebdac, $wzx['onerror'] = rsvqt, $wzx['src'] = ebdafc, jiehf['imgCache'][ursp] = $wzx) : new sqtrpo['create'](ebdafc, { 'onload': ebdac, 'onerror': rsvqt, 'onCreate': function (aebf) {
        $wzx = aebf, jiehf['imgCache'][ursp] = aebf;
      } });
  };function vuzxwy() {}var oqnmlp = (jghife(utxs, 'laya.wx.mini.MiniInput'), utxs['_createInputElement'] = function () {
    fdgech['_initInput'](fdgech['area'] = polkmn['createElement']('textarea')), fdgech['_initInput'](fdgech['input'] = polkmn['createElement']('input')), fdgech['inputContainer'] = polkmn['createElement']('div'), fdgech['inputContainer']['style']['position'] = 'absolute', fdgech['inputContainer']['style']['zIndex'] = 0x186a0, polkmn['container']['appendChild'](fdgech['inputContainer']), fdgech['inputContainer']['setPos'] = function (utsvw, tpuqr) {
      fdgech['inputContainer']['style']['left'] = utsvw + 'px', fdgech['inputContainer']['style']['top'] = tpuqr + 'px';
    }, rnqpo['stage']['on']('resize', null, utxs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_$01zy) {
      $_z0['dispatchEvent'] && $_z0['dispatchEvent']('resize');
    }), dace['_soundClass'] = sqporn, dace['_musicClass'] = sqporn;
  }, utxs['_onStageResize'] = function () {
    rnqpo['stage']['_canvasTransform']['identity']()['scale'](polkmn['width'] / hjgie['canvas']['width'] / qotrp['getPixelRatio'](), polkmn['height'] / hjgie['canvas']['height'] / qotrp['getPixelRatio']());
  }, utxs['wxinputFocus'] = function (w_xyz) {
    var yzxv = fdgech['inputElement']['target'];yzxv && !yzxv['editable'] || (hjg['window']['wx']['offKeyboardConfirm'](), hjg['window']['wx']['offKeyboardInput'](), hjg['window']['wx']['showKeyboard']({ 'defaultValue': yzxv['text'], 'maxLength': yzxv['maxChars'], 'multiple': yzxv['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (imlkjn) {}, 'fail': function ($xvzy) {} }), hjg['window']['wx']['onKeyboardConfirm'](function ($yz_0) {
      $yz_0 = $yz_0 ? $yz_0['value'] : '', (yzxv['text'] = $yz_0, yzxv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), hjg['window']['wx']['onKeyboardInput'](function (opqnrm) {
      opqnrm = opqnrm ? opqnrm['value'] : '', yzxv['multiline'] || -0x1 == opqnrm['indexOf']('\x0a') ? (yzxv['text'] = opqnrm, yzxv['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, utxs['inputEnter'] = function () {
    fdgech['inputElement']['target']['focus'] = !0x1;
  }, utxs['wxinputblur'] = function () {
    utxs['hideKeyboard']();
  }, utxs['hideKeyboard'] = function () {
    hjg['window']['wx']['offKeyboardConfirm'](), hjg['window']['wx']['offKeyboardInput'](), hjg['window']['wx']['hideKeyboard']({ 'success': function (rvstu) {
        console['log']('隐藏键盘');
      }, 'fail': function (omjnl) {
        console['log']('隐藏键盘出错:' + (omjnl ? omjnl['errMsg'] : ''));
      } });
  }, utxs);function utxs() {}var cfbeda = function () {
    function kjghli() {}jghife(kjghli, 'laya.wx.mini.MiniLoader');var qtu = kjghli['prototype'];return qtu['load'] = function (kljihg, _z$1y0, gbfd, twyu, gei) {
      void 0x0 === gbfd && (gbfd = !0x0), void 0x0 === gei && (gei = !0x1);var gbcdfe = this;0x0 === (gbcdfe['_url'] = kljihg)['indexOf']('data:image') ? gbcdfe['_type'] = _z$1y0 = 'image' : gbcdfe['_type'] = _z$1y0 = _z$1y0 || gbcdfe['getTypeFromUrl'](kljihg), gbcdfe['_cache'] = gbfd, gbcdfe['_data'] = null;var nlpqo = 'ascii';-0x1 != kljihg['indexOf']('.fnt') ? nlpqo = 'utf8' : 'arraybuffer' == _z$1y0 && (nlpqo = '');var zy_$x = ghfjik['getFileExtension'](kljihg);if (-0x1 != kjghli['_fileTypeArr']['indexOf'](zy_$x)) hjg['EnvConfig']['load']['call'](this, kljihg, _z$1y0, gbfd, twyu, gei);else {
        if (gefchd['getFileInfo'](kljihg)) hjg['EnvConfig']['load']['call'](this, kljihg, _z$1y0, gbfd, twyu, gei);else {
          if (-0x1 != kljihg['indexOf']('layaNativeDir/')) {
            if (hjg['isZiYu']) {
              var uxyvwt = gefchd['ziyuFileData'][kljihg];return void gbcdfe['onLoaded'](uxyvwt);
            }return cosnole['log']('read read'), void gefchd['read'](kljihg, nlpqo, new _xy$wz(kjghli, kjghli['onReadNativeCallBack'], [nlpqo, kljihg, _z$1y0, gbfd, twyu, gei, gbcdfe]));
          }uxyvwt = '' == nmlpk['rootPath'] ? kljihg : kljihg['split'](nmlpk['rootPath'])[0x0], -0x1 != kljihg['indexOf']('http://') || -0x1 != kljihg['indexOf']('https://') ? hjg['EnvConfig']['load']['call'](gbcdfe, kljihg, _z$1y0, gbfd, twyu, gei) : gefchd['readFile'](uxyvwt, nlpqo, new _xy$wz(kjghli, kjghli['onReadNativeCallBack'], [nlpqo, kljihg, _z$1y0, gbfd, twyu, gei, gbcdfe]), kljihg);
        }
      }
    }, qtu['resMgrLoad'] = function (swv, svtxwu, tvuy, tvwu, kjilmh, orsnq, osqrp) {
      void 0x0 === tvuy && (tvuy = 0x0), void 0x0 === tvwu && (tvwu = !0x1), void 0x0 === kjilmh && (kjilmh = !0x1), void 0x0 === orsnq && (orsnq = 0x0), void 0x0 === osqrp && (osqrp = 0x3), -0x1 != swv['indexOf']('mpack') && console['log']('=============resMgrLoad url:', swv), hjg['EnvConfig']['resMgrLoad'](swv, (hjgfie, molnpq, $zxyw_) => {
        kjghli['prototype']['resMgrLoadCallBack'](hjgfie, molnpq, $zxyw_, svtxwu);
      }, tvuy, tvwu, kjilmh, orsnq, osqrp);
    }, qtu['resMgrLoadCallBack'] = function (rsnoqp, ustqv, nljkmo, inkml) {
      console['log']('buff:::', rsnoqp, nljkmo, gefchd['fileNativeDir'] + '///' + gefchd['fileListName']), inkml(rsnoqp, ustqv, nljkmo);
    }, qtu['clearRes'] = function (bcdfeg, stqruv) {
      this['clearRes'](bcdfeg, stqruv = void 0x0 === stqruv ? !0x1 : stqruv), stqruv = gefchd['getFileInfo'](bcdfeg), !stqruv || -0x1 == bcdfeg['indexOf']('http://') && -0x1 == bcdfeg['indexOf']('https://') || (stqruv = stqruv['md5'], stqruv = gefchd['getFileNativePath'](stqruv), gefchd['remove'](stqruv));
    }, kjghli['onReadNativeCallBack'] = function (ostrqp, hejgi, _210, gchfd, fjgeh, lqonp, wv$yzx, hgkijl, hdcge) {
      void 0x0 === gchfd && (gchfd = !0x0), void 0x0 === lqonp && (lqonp = !0x1), (hgkijl = void 0x0 === hgkijl ? 0x0 : hgkijl) ? 0x1 == hgkijl && hjg['EnvConfig']['load']['call'](wv$yzx, hejgi, _210, gchfd, fjgeh, lqonp) : (hdcge = 'json' == _210 || 'atlas' == _210 ? hjg['getJson'](hdcge['data']) : 'xml' == _210 ? ghfjik['parseXMLFromString'](hdcge['data']) : hdcge['data'], wv$yzx['onLoaded'](hdcge), !hjg['isZiYu'] && hjg['isPosMsgYu'] && 'arraybuffer' != _210 && wx['postMessage']({ 'url': hejgi, 'data': hdcge, 'isLoad': !0x0 }));
    }, olkpm(kjghli, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kjghli;
  }(),
      gefchd = (jghife(rstuvw, 'laya.wx.mini.MiniFileMgr', lmpnqo), rstuvw['isLoadFile'] = function (por) {
    return -0x1 != rstuvw['_fileTypeArr']['indexOf'](por);
  }, rstuvw['getFileInfo'] = function (mjlko) {
    return mjlko = mjlko['split']('?')[0x0], mjlko = rstuvw['filesListObj'][mjlko], null == mjlko ? null : mjlko;
  }, rstuvw['onFileUpdate'] = function (lqnmp, pmqn) {
    var wvxzy = lqnmp['split']('/');lqnmp = wvxzy[wvxzy['length'] - 0x1], wvxzy = rstuvw['getFileInfo'](pmqn), null == wvxzy ? rstuvw['onSaveFile'](pmqn, lqnmp) : wvxzy['readyUrl'] != pmqn && rstuvw['remove'](lqnmp, pmqn);
  }, rstuvw['exits'] = function (sqr, _3021) {
    sqr = rstuvw['getFileNativePath'](sqr), rstuvw['fs']['getFileInfo']({ 'filePath': sqr, 'success': function (xzy_$w) {
        null != _3021 && _3021['runWith']([0x0, xzy_$w]);
      }, 'fail': function (acfed) {
        null != _3021 && _3021['runWith']([0x1, acfed]);
      } });
  }, rstuvw['read'] = function (bcg, afdbce, hfdcg, gbfc) {
    void 0x0 === afdbce && (afdbce = 'ascill'), bcg = '' != (gbfc = void 0x0 === gbfc ? '' : gbfc) ? rstuvw['getFileNativePath'](bcg) : bcg, rstuvw['fs']['readFile']({ 'filePath': bcg, 'encoding': afdbce, 'success': function (wyuvtx) {
        null != hfdcg && hfdcg['runWith']([0x0, wyuvtx]);
      }, 'fail': function (qpots) {
        qpots && '' != gbfc ? rstuvw['down'](gbfc, afdbce, hfdcg, gbfc) : null != hfdcg && hfdcg['runWith']([0x1]);
      } });
  }, rstuvw['readNativeFile'] = function (psrq, gedch) {
    rstuvw['fs']['readFile']({ 'filePath': psrq, 'encoding': '', 'success': function (lgkij) {
        null != gedch && gedch['runWith']([0x0]);
      }, 'fail': function (jinmk) {
        null != gedch && gedch['runWith']([0x1]);
      } });
  }, rstuvw['down'] = function (wvuzxy, pqtrus, quvstr, aecd) {
    void 0x0 === pqtrus && (pqtrus = 'ascill'), void 0x0 === aecd && (aecd = '');var qsron = rstuvw['getFileNativePath'](aecd);rstuvw['wxdown']({ 'url': wvuzxy, 'filePath': qsron, 'success': function (yxz0$) {
        0xc8 === yxz0$['statusCode'] && rstuvw['readFile'](yxz0$['filePath'], pqtrus, quvstr, aecd);
      }, 'fail': function (tvrqs) {
        null != quvstr && quvstr['runWith']([0x1, tvrqs]);
      } })['onProgressUpdate'](function (nolmpq) {
      null != quvstr && quvstr['runWith']([0x2, nolmpq['progress']]);
    });
  }, rstuvw['readFile'] = function (kijlgh, efcb, _301$2, xwy$) {
    void 0x0 === xwy$ && (xwy$ = ''), rstuvw['fs']['readFile']({ 'filePath': kijlgh, 'encoding': efcb = void 0x0 === efcb ? 'ascill' : efcb, 'success': function (hefgij) {
        -0x1 == kijlgh['indexOf']('http://') && -0x1 == kijlgh['indexOf']('https://') || rstuvw['onFileUpdate'](kijlgh, xwy$), null != _301$2 && _301$2['runWith']([0x0, hefgij]);
      }, 'fail': function (qprost) {
        qprost && null != _301$2 && _301$2['runWith']([0x1, qprost]);
      } });
  }, rstuvw['downImg'] = function (wz$yv, $z02, xuwvy) {
    void 0x0 === xuwvy && (xuwvy = ''), rstuvw['wxdown']({ 'url': wz$yv, 'success': function (jimlhk) {
        0xc8 === jimlhk['statusCode'] && rstuvw['copyFile'](jimlhk['tempFilePath'], xuwvy, $z02);
      }, 'fail': function (oqst) {
        null != $z02 && $z02['runWith']([0x1, oqst]);
      } });
  }, rstuvw['copyFile'] = function (edgfbc, bdcfa, kjmlin) {
    var eijhg = edgfbc['split']('/'),
        qpornm = eijhg[eijhg['length'] - 0x1];bdcfa['split']('?')[0x0];var uyzvxw = rstuvw['getFileInfo'](bdcfa);eijhg = rstuvw['getFileNativePath'](qpornm), rstuvw['fs']['copyFile']({ 'srcPath': edgfbc, 'destPath': eijhg, 'success': function (ojklm) {
        uyzvxw ? uyzvxw['readyUrl'] != bdcfa && rstuvw['remove'](qpornm, bdcfa, kjmlin) : (rstuvw['onSaveFile'](bdcfa, qpornm), null != kjmlin && kjmlin['runWith']([0x0]));
      }, 'fail': function (uwvsx) {
        null != kjmlin && kjmlin['runWith']([0x1, uwvsx]);
      } });
  }, rstuvw['getFileNativePath'] = function ($xz0y) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $xz0y;
  }, rstuvw['remove'] = function (tsvxu, mopnq, $2130_) {
    void 0x0 === mopnq && (mopnq = '');var yxwu = rstuvw['getFileInfo'](mopnq),
        nplomk = rstuvw['getFileNativePath'](yxwu['md5']);rnqpo['loader']['clearRes'](yxwu['readyUrl']), rstuvw['fs']['unlink']({ 'filePath': nplomk, 'success': function (khjigf) {
        '' != mopnq && rstuvw['onSaveFile'](mopnq, tsvxu), null != $2130_ && $2130_['runWith']([0x0]);
      }, 'fail': function (efj) {} });
  }, rstuvw['onSaveFile'] = function (ronpq, ebdcfg) {
    var mlkji = ronpq['split']('?')[0x0];rstuvw['filesListObj'][mlkji] = { 'md5': ebdcfg, 'readyUrl': ronpq }, rstuvw['fs']['writeFile']({ 'filePath': rstuvw['fileNativeDir'] + '/' + rstuvw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rstuvw['filesListObj']), 'success': function (stpo) {
        console['log']('写入测试测试成功：', stpo);
      }, 'fail': function (cabfd) {
        console['log']('写入测试测试失败：', cabfd);
      } });
  }, rstuvw['existDir'] = function (gfcbe, fadbe) {
    rstuvw['fs']['mkdir']({ 'dirPath': gfcbe, 'success': function (lknojm) {
        null != fadbe && fadbe['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (jefigh) {
        -0x1 != jefigh['errMsg']['indexOf']('file already exists') ? rstuvw['readSync'](rstuvw['fileListName'], 'utf8', fadbe) : null != fadbe && fadbe['runWith']([0x1, jefigh]);
      } });
  }, rstuvw['readSync'] = function (osqrt, pnsqr, npoqrm, uqsrtp) {
    void 0x0 === pnsqr && (pnsqr = 'ascill'), void 0x0 === uqsrtp && (uqsrtp = ''), osqrt = rstuvw['getFileNativePath'](osqrt);var rputs;try {
      rputs = rstuvw['fs']['readFileSync'](osqrt), null != npoqrm && npoqrm['runWith']([0x0, { 'data': rputs }]);
    } catch ($_xywz) {
      null != npoqrm && npoqrm['runWith']([0x1]);
    }
  }, rstuvw['readCache'] = function () {}, rstuvw['writeCache'] = function (pqsot) {
    var wyx_$ = readyUrl['split']('?')[0x0];rstuvw['filesListObj'][wyx_$] = { 'md5': md5Name, 'readyUrl': readyUrl }, rstuvw['fs']['writeFile']({ 'filePath': rstuvw['fileNativeDir'] + '/' + rstuvw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rstuvw['filesListObj']), 'success': function ($02_1) {}, 'fail': function (hcedgf) {} });
  }, rstuvw['setNativeFileDir'] = function (_2z$10) {
    rstuvw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _2z$10;
  }, rstuvw['filesListObj'] = {}, rstuvw['fileNativeDir'] = null, rstuvw['fileListName'] = 'layaairfiles.txt', rstuvw['ziyuFileData'] = {}, olkpm(rstuvw, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), rstuvw);function rstuvw() {
    rstuvw['__super']['call'](this);
  }var sqporn = function () {
    function swuvt() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, swuvt['__super']['call'](this), this['_sound'] = swuvt['_createSound']();
    }jghife(swuvt, 'laya.wx.mini.MiniSound', lmpnqo);var vrst = swuvt['prototype'];return vrst['load'] = function (psqonr) {
      var z0x$_y = this,
          cdbfge;function x_y0$z() {
        if (null != swuvt['_null']) z0x$_y['_sound']['onCanplay'](swuvt['_null']), z0x$_y['_sound']['onError'](swuvt['_null']);else try {
          z0x$_y['_sound']['onCanplay'](null), z0x$_y['_sound']['onError'](null), swuvt['_null'] = null;
        } catch (twvus) {
          console['warn']('[wxmini] _clearSound:' + twvus), z0x$_y['_sound']['onCanplay'](z_$2), z0x$_y['_sound']['onError'](z_$2), swuvt['_null'] = z_$2;
        }
      }function z_$2() {}psqonr = nmlpk['formatURL'](psqonr), this['url'] = psqonr, swuvt['_audioCache'][psqonr] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        x_y0$z(), cdbfge['loaded'] = !0x0, cdbfge['event']('complete'), swuvt['_audioCache'][cdbfge['url']] = cdbfge;
      }), this['_sound']['onError'](function (jmnklo) {
        console['error']('errCode=' + jmnklo['errCode'] + '  errMsg=' + jmnklo['errMsg']), x_y0$z(), cdbfge['event']('error');
      }), this['_sound']['src'] = psqonr, cdbfge = this);
    }, vrst['play'] = function (tvyux, fjhig) {
      void 0x0 === tvyux && (tvyux = 0x0), void 0x0 === fjhig && (fjhig = 0x0), (jklgi = this['url'] == dace['_tMusic'] ? (swuvt['_musicAudio'] || (swuvt['_musicAudio'] = swuvt['_createSound']()), swuvt['_musicAudio']) : swuvt['_createSound']())['src'] = this['url'];var jklgi = new vsuwtr(jklgi);return jklgi['url'] = this['url'], jklgi['loops'] = fjhig, jklgi['startTime'] = tvyux, jklgi['play'](), dace['addChannel'](jklgi), jklgi;
    }, vrst['dispose'] = function () {
      var bedaf = swuvt['_audioCache'][this['url']];bedaf && (bedaf['src'] = '', delete swuvt['_audioCache'][this['url']]);
    }, kfijgh(0x0, vrst, 'duration', function () {
      return this['_sound']['duration'];
    }), swuvt['_createSound'] = function () {
      return swuvt['_id']++, hjg['window']['wx']['createInnerAudioContext']();
    }, swuvt['_musicAudio'] = null, swuvt['_id'] = 0x0, swuvt['_audioCache'] = {}, swuvt['_null'] = void 0x0, swuvt;
  }(),
      vsuwtr = function () {
    function sorp(xwsvt) {
      this['_audio'] = null, this['_onEnd'] = null, sorp['__super']['call'](this), this['_audio'] = xwsvt, this['_onEnd'] = ghfjik['bind'](this['__onEnd'], this), xwsvt['onEnded'](this['_onEnd']);
    }jghife(sorp, 'laya.wx.mini.MiniSoundChannel', gfcdh);var noljm = sorp['prototype'];return noljm['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (rnqpo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, noljm['__onNull'] = function () {}, noljm['play'] = function () {
      this['isStopped'] = !0x1, dace['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, noljm['stop'] = function () {
      if (this['isStopped'] = !0x0, dace['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != sorp['_null']) this['_audio']['onEnded'](sorp['_null']);else try {
          this['_audio']['onEnded'](null), sorp['_null'] = null;
        } catch (xzw_) {
          console['warn']('[wxmini] stop:' + xzw_), this['_audio']['onEnded'](ghfjik['bind'](this['__onNull'], this)), sorp['_null'] = ghfjik['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, noljm['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, noljm['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, dace['addChannel'](this), this['_audio']['play']());
    }, kfijgh(0x0, noljm, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), kfijgh(0x0, noljm, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), kfijgh(0x0, noljm, 'volume', function () {
      return 0x1;
    }, function (rquts) {}), sorp['_null'] = void 0x0, sorp;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (che, dfeihg) {
  'use strict';

  for (var bceafd in Object['defineProperty'](dfeihg, '__esModule', { 'value': !0x0 }), Laya) {
    var ojlnmk = Laya[bceafd];ojlnmk && ojlnmk['__isclass'] && (dfeihg[bceafd] = ojlnmk);
  }
});