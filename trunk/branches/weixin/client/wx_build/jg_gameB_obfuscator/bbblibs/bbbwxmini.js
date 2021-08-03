var _ = wx.y$;
!function (rutsv, uvsrw) {
  uvsrw['un'], uvsrw['uns'];var vxswu = uvsrw['static'],
      himlkj = uvsrw['class'],
      igehdf = uvsrw['getset'];uvsrw['__newvec'];var vuywzx = laya['utils']['Browser'],
      qpnos = (laya['events']['Event'], laya['events']['EventDispatcher']),
      uqvst = laya['resource']['HTMLImage'],
      gdfceb = laya['utils']['Handler'],
      $_231 = laya['display']['Input'],
      rmnoqp = laya['net']['Loader'];laya['maths']['Matrix'];var dhcfeg = laya['renders']['Render'],
      mkjlih = laya['utils']['RunDriver'];laya['media']['Sound'];var $zw_y = laya['media']['SoundChannel'],
      cfhdeg = laya['media']['SoundManager'],
      iehfjg = (laya['display']['Stage'], laya['net']['URL']),
      vuwrs = laya['utils']['Utils'],
      yuxwzv = (himlkj(ikmjhl, 'laya.wx.mini.MiniAdpter'), ikmjhl['getJson'] = function (ghifed) {
    return JSON['parse'](ghifed);
  }, ikmjhl['init'] = function (hilgjk, xvtwsu) {
    void 0x0 === hilgjk && (hilgjk = !0x1), void 0x0 === xvtwsu && (xvtwsu = !0x1), ikmjhl['_inited'] || (ikmjhl['window'] = rutsv)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ikmjhl['_inited'] = !0x0, ikmjhl['isZiYu'] = xvtwsu, ikmjhl['isPosMsgYu'] = hilgjk, ikmjhl['EnvConfig'] = {}, ikmjhl['isZiYu'] || (hjli['setNativeFileDir']('/layaairGame'), hjli['existDir'](hjli['fileNativeDir'], gdfceb['create'](ikmjhl, ikmjhl['onMkdirCallBack']))), ikmjhl['window']['focus'] = function () {}, uvsrw['getUrlPath'] = function () {}, ikmjhl['window']['logtime'] = function (bcfde) {}, ikmjhl['window']['alertTimeLog'] = function (romnq) {}, ikmjhl['window']['resetShareInfo'] = function () {}, ikmjhl['window']['CanvasRenderingContext2D'] = function () {}, ikmjhl['window']['CanvasRenderingContext2D']['prototype'] = ikmjhl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ikmjhl['window']['document']['body']['appendChild'] = function () {}, ikmjhl['EnvConfig']['pixelRatioInt'] = 0x0, mkjlih['getPixelRatio'] = ikmjhl['pixelRatio'], ikmjhl['_preCreateElement'] = vuywzx['createElement'], vuywzx['createElement'] = ikmjhl['createElement'], mkjlih['createShaderCondition'] = ikmjhl['createShaderCondition'], vuwrs['parseXMLFromString'] = ikmjhl['parseXMLFromString'], $_231['_createInputElement'] = kmjnol['_createInputElement'], ikmjhl['EnvConfig']['load'] = rmnoqp['prototype']['load'], rmnoqp['prototype']['load'] = zyuxv['prototype']['load'], ikmjhl['isZiYu'] && hilgjk && wx['onMessage'](function (jihmlk) {
      jihmlk['isLoad'] && (hjli['ziyuFileData'][jihmlk['url']] = jihmlk['data']);
    }));
  }, ikmjhl['onMkdirCallBack'] = function (tqprsu, ropnqs) {
    tqprsu || (hjli['filesListObj'] = JSON['parse'](ropnqs['data']));
  }, ikmjhl['pixelRatio'] = function () {
    if (!ikmjhl['EnvConfig']['pixelRatioInt']) try {
      var xwus = wx['getSystemInfoSync']();return ikmjhl['EnvConfig']['pixelRatioInt'] = xwus['pixelRatio'], xwus['pixelRatio'];
    } catch (ge) {}return ikmjhl['EnvConfig']['pixelRatioInt'];
  }, ikmjhl['createElement'] = function ($w) {
    var ijglhk;if ('canvas' == $w) return 0x1 == ikmjhl['idx'] ? ikmjhl['isZiYu'] ? (ijglhk = sharedCanvas)['style'] = {} : ijglhk = rutsv['canvas'] : ijglhk = rutsv['wx']['createCanvas'](), ikmjhl['idx']++, ijglhk;if ('textarea' == $w || 'input' == $w) return ikmjhl['onCreateInput']($w);if ('div' != $w) return ikmjhl['_preCreateElement']($w);return $w = ikmjhl['_preCreateElement']($w), ($w['contains'] = function (zyx$_0) {
      return null;
    }, $w['removeChild'] = function (upstrq) {}, $w);
  }, ikmjhl['onCreateInput'] = function (qomnpl) {
    return qomnpl = ikmjhl['_preCreateElement'](qomnpl), (qomnpl['focus'] = kmjnol['wxinputFocus'], qomnpl['blur'] = kmjnol['wxinputblur'], qomnpl['style'] = {}, qomnpl['value'] = 0x0, qomnpl['parentElement'] = {}, qomnpl['placeholder'] = {}, qomnpl['type'] = {}, qomnpl['setColor'] = function (gecdfb) {}, qomnpl['setType'] = function (psq) {}, qomnpl['setFontFace'] = function (optr) {}, qomnpl['addEventListener'] = function (wvzy$) {}, qomnpl['contains'] = function (jkmhi) {
      return null;
    }, qomnpl['removeChild'] = function (jnkil) {}, qomnpl);
  }, ikmjhl['createShaderCondition'] = function (rqpts) {
    var cehdg = this;return function () {
      return cehdg[rqpts['replace']('this.', '')];
    };
  }, ikmjhl['EnvConfig'] = null, ikmjhl['window'] = null, ikmjhl['_preCreateElement'] = null, ikmjhl['_inited'] = !0x1, ikmjhl['wxRequest'] = null, ikmjhl['systemInfo'] = null, ikmjhl['version'] = '0.0.1', ikmjhl['isZiYu'] = !0x1, ikmjhl['isPosMsgYu'] = !0x1, ikmjhl['parseXMLFromString'] = function (bgef) {
    var zx0_y$;bgef = bgef['replace'](/>\s+</g, '><');try {
      zx0_y$ = new rutsv['Parser']['DOMParser']()['parseFromString'](bgef, 'text/xml');
    } catch (bcegf) {
      throw '需要引入xml解析库文件';
    }return zx0_y$;
  }, ikmjhl['idx'] = 0x1, ikmjhl);function ikmjhl() {}himlkj(snp, 'laya.wx.mini.MiniImage'), snp['prototype']['_loadImage'] = function (ywuvx) {
    var xz$0y = !0x1;-0x1 == ywuvx['indexOf']('layaNativeDir/') && (xz$0y = !0x0, ywuvx = iehfjg['formatURL'](ywuvx)), hjli['getFileInfo'](ywuvx) ? snp['onCreateImage'](ywuvx, this, !xz$0y) : -0x1 != ywuvx['indexOf']('http://') || -0x1 != ywuvx['indexOf']('https://') ? hjli['downImg'](ywuvx, new gdfceb(snp, snp['onDownImgCallBack'], [ywuvx, this]), ywuvx) : snp['onCreateImage'](ywuvx, this, !0x0);
  }, snp['onDownImgCallBack'] = function (mpoqnl, yz_x$, strvu) {
    strvu ? yz_x$['onError'](null) : snp['onCreateImage'](mpoqnl, yz_x$);
  }, snp['onCreateImage'] = function (lighk, aebc, _0z1$2) {
    var w$y_x, z$210;function bcdegf() {
      z$210['onload'] = null, z$210['onerror'] = null, delete aebc['imgCache'][lighk];
    }w$y_x = (_0z1$2 = void 0x0 === _0z1$2 ? !0x1 : _0z1$2) ? lighk : (lop = hjli['getFileInfo'](lighk)['md5'], hjli['getFileNativePath'](lop)), null == aebc['imgCache'] && (aebc['imgCache'] = {}), _0z1$2 = function () {
      bcdegf(), aebc['onLoaded'](z$210);
    };var lop = function () {
      bcdegf(), aebc['event']('error', 'Load image failed');
    };'nativeimage' == aebc['_type'] ? ((z$210 = new vuywzx['window']['Image']())['crossOrigin'] = '', z$210['onload'] = _0z1$2, z$210['onerror'] = lop, z$210['src'] = w$y_x, aebc['imgCache'][lighk] = z$210) : new uqvst['create'](w$y_x, { 'onload': _0z1$2, 'onerror': lop, 'onCreate': function (pqsnr) {
        z$210 = pqsnr, aebc['imgCache'][lighk] = pqsnr;
      } });
  };function snp() {}var kmjnol = (himlkj(_41023, 'laya.wx.mini.MiniInput'), _41023['_createInputElement'] = function () {
    $_231['_initInput']($_231['area'] = vuywzx['createElement']('textarea')), $_231['_initInput']($_231['input'] = vuywzx['createElement']('input')), $_231['inputContainer'] = vuywzx['createElement']('div'), $_231['inputContainer']['style']['position'] = 'absolute', $_231['inputContainer']['style']['zIndex'] = 0x186a0, vuywzx['container']['appendChild']($_231['inputContainer']), $_231['inputContainer']['setPos'] = function (lnkopm, omnqrp) {
      $_231['inputContainer']['style']['left'] = lnkopm + 'px', $_231['inputContainer']['style']['top'] = omnqrp + 'px';
    }, uvsrw['stage']['on']('resize', null, _41023['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nkjmol) {
      rutsv['dispatchEvent'] && rutsv['dispatchEvent']('resize');
    }), cfhdeg['_soundClass'] = hgefj, cfhdeg['_musicClass'] = hgefj;
  }, _41023['_onStageResize'] = function () {
    uvsrw['stage']['_canvasTransform']['identity']()['scale'](vuywzx['width'] / dhcfeg['canvas']['width'] / mkjlih['getPixelRatio'](), vuywzx['height'] / dhcfeg['canvas']['height'] / mkjlih['getPixelRatio']());
  }, _41023['wxinputFocus'] = function (bdecg) {
    var hdfegc = $_231['inputElement']['target'];hdfegc && !hdfegc['editable'] || (yuxwzv['window']['wx']['offKeyboardConfirm'](), yuxwzv['window']['wx']['offKeyboardInput'](), yuxwzv['window']['wx']['showKeyboard']({ 'defaultValue': hdfegc['text'], 'maxLength': hdfegc['maxChars'], 'multiple': hdfegc['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (sptu) {}, 'fail': function (mlih) {} }), yuxwzv['window']['wx']['onKeyboardConfirm'](function (rupsqt) {
      rupsqt = rupsqt ? rupsqt['value'] : '', (hdfegc['text'] = rupsqt, hdfegc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), yuxwzv['window']['wx']['onKeyboardInput'](function (ikjgf) {
      ikjgf = ikjgf ? ikjgf['value'] : '', hdfegc['multiline'] || -0x1 == ikjgf['indexOf']('\x0a') ? (hdfegc['text'] = ikjgf, hdfegc['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, _41023['inputEnter'] = function () {
    $_231['inputElement']['target']['focus'] = !0x1;
  }, _41023['wxinputblur'] = function () {
    _41023['hideKeyboard']();
  }, _41023['hideKeyboard'] = function () {
    yuxwzv['window']['wx']['offKeyboardConfirm'](), yuxwzv['window']['wx']['offKeyboardInput'](), yuxwzv['window']['wx']['hideKeyboard']({ 'success': function (kinjml) {
        console['log']('隐藏键盘');
      }, 'fail': function (ebdcfg) {
        console['log']('隐藏键盘出错:' + (ebdcfg ? ebdcfg['errMsg'] : ''));
      } });
  }, _41023);function _41023() {}var zyuxv = function () {
    function afebcd() {}himlkj(afebcd, 'laya.wx.mini.MiniLoader');var _z1$ = afebcd['prototype'];return _z1$['load'] = function (hdce, $z021, fkhjg, jifeg, jkmnil) {
      void 0x0 === fkhjg && (fkhjg = !0x0), void 0x0 === jkmnil && (jkmnil = !0x1);var hife = this;0x0 === (hife['_url'] = hdce)['indexOf']('data:image') ? hife['_type'] = $z021 = 'image' : hife['_type'] = $z021 = $z021 || hife['getTypeFromUrl'](hdce), hife['_cache'] = fkhjg, hife['_data'] = null;var qrtv = 'ascii';-0x1 != hdce['indexOf']('.fnt') ? qrtv = 'utf8' : 'arraybuffer' == $z021 && (qrtv = '');var lkjhg = vuwrs['getFileExtension'](hdce);if (-0x1 != afebcd['_fileTypeArr']['indexOf'](lkjhg)) yuxwzv['EnvConfig']['load']['call'](this, hdce, $z021, fkhjg, jifeg, jkmnil);else {
        if (hjli['getFileInfo'](hdce)) yuxwzv['EnvConfig']['load']['call'](this, hdce, $z021, fkhjg, jifeg, jkmnil);else {
          if (-0x1 != hdce['indexOf']('layaNativeDir/')) {
            if (yuxwzv['isZiYu']) {
              var urst = hjli['ziyuFileData'][hdce];return void hife['onLoaded'](urst);
            }return cosnole['log']('read read'), void hjli['read'](hdce, qrtv, new gdfceb(afebcd, afebcd['onReadNativeCallBack'], [qrtv, hdce, $z021, fkhjg, jifeg, jkmnil, hife]));
          }urst = '' == iehfjg['rootPath'] ? hdce : hdce['split'](iehfjg['rootPath'])[0x0], -0x1 != hdce['indexOf']('http://') || -0x1 != hdce['indexOf']('https://') ? yuxwzv['EnvConfig']['load']['call'](hife, hdce, $z021, fkhjg, jifeg, jkmnil) : hjli['readFile'](urst, qrtv, new gdfceb(afebcd, afebcd['onReadNativeCallBack'], [qrtv, hdce, $z021, fkhjg, jifeg, jkmnil, hife]), hdce);
        }
      }
    }, _z1$['resMgrLoad'] = function (x_z0y$, xvutsw, ytxvuw, $y0xz_, utvqr, pklmno, qsropt) {
      void 0x0 === ytxvuw && (ytxvuw = 0x0), void 0x0 === $y0xz_ && ($y0xz_ = !0x1), void 0x0 === utvqr && (utvqr = !0x1), void 0x0 === pklmno && (pklmno = 0x0), void 0x0 === qsropt && (qsropt = 0x3), -0x1 != x_z0y$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', x_z0y$), yuxwzv['EnvConfig']['resMgrLoad'](x_z0y$, (usvtx, wtsru, twuvsx) => {
        afebcd['prototype']['resMgrLoadCallBack'](usvtx, wtsru, twuvsx, xvutsw);
      }, ytxvuw, $y0xz_, utvqr, pklmno, qsropt);
    }, _z1$['resMgrLoadCallBack'] = function (cbfdae, yw$_xz, poqsr, ropqsn) {
      console['log']('buff:::', cbfdae, poqsr, hjli['fileNativeDir'] + '///' + hjli['fileListName']), ropqsn(cbfdae, yw$_xz, poqsr);
    }, _z1$['clearRes'] = function (lnikm, jlnmok) {
      this['clearRes'](lnikm, jlnmok = void 0x0 === jlnmok ? !0x1 : jlnmok), jlnmok = hjli['getFileInfo'](lnikm), !jlnmok || -0x1 == lnikm['indexOf']('http://') && -0x1 == lnikm['indexOf']('https://') || (jlnmok = jlnmok['md5'], jlnmok = hjli['getFileNativePath'](jlnmok), hjli['remove'](jlnmok));
    }, afebcd['onReadNativeCallBack'] = function (zwy_x, $zyxvw, rpnqso, kjonlm, qsu, pmlqno, xvws, hiejg, nkjmil) {
      void 0x0 === kjonlm && (kjonlm = !0x0), void 0x0 === pmlqno && (pmlqno = !0x1), (hiejg = void 0x0 === hiejg ? 0x0 : hiejg) ? 0x1 == hiejg && yuxwzv['EnvConfig']['load']['call'](xvws, $zyxvw, rpnqso, kjonlm, qsu, pmlqno) : (nkjmil = 'json' == rpnqso || 'atlas' == rpnqso ? yuxwzv['getJson'](nkjmil['data']) : 'xml' == rpnqso ? vuwrs['parseXMLFromString'](nkjmil['data']) : nkjmil['data'], xvws['onLoaded'](nkjmil), !yuxwzv['isZiYu'] && yuxwzv['isPosMsgYu'] && 'arraybuffer' != rpnqso && wx['postMessage']({ 'url': $zyxvw, 'data': nkjmil, 'isLoad': !0x0 }));
    }, vxswu(afebcd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), afebcd;
  }(),
      hjli = (himlkj(mkopnl, 'laya.wx.mini.MiniFileMgr', qpnos), mkopnl['isLoadFile'] = function (klhgji) {
    return -0x1 != mkopnl['_fileTypeArr']['indexOf'](klhgji);
  }, mkopnl['getFileInfo'] = function (_20134) {
    return _20134 = _20134['split']('?')[0x0], _20134 = mkopnl['filesListObj'][_20134], null == _20134 ? null : _20134;
  }, mkopnl['onFileUpdate'] = function (suqprt, omknl) {
    var osqprt = suqprt['split']('/');suqprt = osqprt[osqprt['length'] - 0x1], osqprt = mkopnl['getFileInfo'](omknl), null == osqprt ? mkopnl['onSaveFile'](omknl, suqprt) : osqprt['readyUrl'] != omknl && mkopnl['remove'](suqprt, omknl);
  }, mkopnl['exits'] = function (wvytxu, tvxwyu) {
    wvytxu = mkopnl['getFileNativePath'](wvytxu), mkopnl['fs']['getFileInfo']({ 'filePath': wvytxu, 'success': function (wsuxv) {
        null != tvxwyu && tvxwyu['runWith']([0x0, wsuxv]);
      }, 'fail': function (fgcebd) {
        null != tvxwyu && tvxwyu['runWith']([0x1, fgcebd]);
      } });
  }, mkopnl['read'] = function (usrpq, oqlpnm, vxuw, heifg) {
    void 0x0 === oqlpnm && (oqlpnm = 'ascill'), usrpq = '' != (heifg = void 0x0 === heifg ? '' : heifg) ? mkopnl['getFileNativePath'](usrpq) : usrpq, mkopnl['fs']['readFile']({ 'filePath': usrpq, 'encoding': oqlpnm, 'success': function (qmnop) {
        null != vxuw && vxuw['runWith']([0x0, qmnop]);
      }, 'fail': function (gfheid) {
        gfheid && '' != heifg ? mkopnl['down'](heifg, oqlpnm, vxuw, heifg) : null != vxuw && vxuw['runWith']([0x1]);
      } });
  }, mkopnl['readNativeFile'] = function (rvustq, tsrqp) {
    mkopnl['fs']['readFile']({ 'filePath': rvustq, 'encoding': '', 'success': function (vsqrtu) {
        null != tsrqp && tsrqp['runWith']([0x0]);
      }, 'fail': function (wyvx$z) {
        null != tsrqp && tsrqp['runWith']([0x1]);
      } });
  }, mkopnl['down'] = function (de, zvxyw$, xtwy, lghk) {
    void 0x0 === zvxyw$ && (zvxyw$ = 'ascill'), void 0x0 === lghk && (lghk = '');var vurst = mkopnl['getFileNativePath'](lghk);mkopnl['wxdown']({ 'url': de, 'filePath': vurst, 'success': function (ifjghe) {
        0xc8 === ifjghe['statusCode'] && mkopnl['readFile'](ifjghe['filePath'], zvxyw$, xtwy, lghk);
      }, 'fail': function (dhgie) {
        null != xtwy && xtwy['runWith']([0x1, dhgie]);
      } })['onProgressUpdate'](function (wtvxyu) {
      null != xtwy && xtwy['runWith']([0x2, wtvxyu['progress']]);
    });
  }, mkopnl['readFile'] = function (tpsqur, hmilk, oqnm, ponrqm) {
    void 0x0 === ponrqm && (ponrqm = ''), mkopnl['fs']['readFile']({ 'filePath': tpsqur, 'encoding': hmilk = void 0x0 === hmilk ? 'ascill' : hmilk, 'success': function (orqts) {
        -0x1 == tpsqur['indexOf']('http://') && -0x1 == tpsqur['indexOf']('https://') || mkopnl['onFileUpdate'](tpsqur, ponrqm), null != oqnm && oqnm['runWith']([0x0, orqts]);
      }, 'fail': function (hlmjk) {
        hlmjk && null != oqnm && oqnm['runWith']([0x1, hlmjk]);
      } });
  }, mkopnl['downImg'] = function (qvrstu, knjmo, mqopr) {
    void 0x0 === mqopr && (mqopr = ''), mkopnl['wxdown']({ 'url': qvrstu, 'success': function (z$_x) {
        0xc8 === z$_x['statusCode'] && mkopnl['copyFile'](z$_x['tempFilePath'], mqopr, knjmo);
      }, 'fail': function (hedgfc) {
        null != knjmo && knjmo['runWith']([0x1, hedgfc]);
      } });
  }, mkopnl['copyFile'] = function (lnmoj, xvwytu, _1z$) {
    var glkih = lnmoj['split']('/'),
        yuvxwz = glkih[glkih['length'] - 0x1];xvwytu['split']('?')[0x0];var jkifgh = mkopnl['getFileInfo'](xvwytu);glkih = mkopnl['getFileNativePath'](yuvxwz), mkopnl['fs']['copyFile']({ 'srcPath': lnmoj, 'destPath': glkih, 'success': function (uvwtr) {
        jkifgh ? jkifgh['readyUrl'] != xvwytu && mkopnl['remove'](yuvxwz, xvwytu, _1z$) : (mkopnl['onSaveFile'](xvwytu, yuvxwz), null != _1z$ && _1z$['runWith']([0x0]));
      }, 'fail': function (gjlh) {
        null != _1z$ && _1z$['runWith']([0x1, gjlh]);
      } });
  }, mkopnl['getFileNativePath'] = function (jklhg) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jklhg;
  }, mkopnl['remove'] = function (y_$10, usqtv, defgi) {
    void 0x0 === usqtv && (usqtv = '');var $z21 = mkopnl['getFileInfo'](usqtv),
        nprmqo = mkopnl['getFileNativePath']($z21['md5']);uvsrw['loader']['clearRes']($z21['readyUrl']), mkopnl['fs']['unlink']({ 'filePath': nprmqo, 'success': function (stqrp) {
        '' != usqtv && mkopnl['onSaveFile'](usqtv, y_$10), null != defgi && defgi['runWith']([0x0]);
      }, 'fail': function (usvxwt) {} });
  }, mkopnl['onSaveFile'] = function (gdefi, rutqps) {
    var pklnmo = gdefi['split']('?')[0x0];mkopnl['filesListObj'][pklnmo] = { 'md5': rutqps, 'readyUrl': gdefi }, mkopnl['fs']['writeFile']({ 'filePath': mkopnl['fileNativeDir'] + '/' + mkopnl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mkopnl['filesListObj']), 'success': function (uyzxwv) {
        console['log']('写入测试测试成功：', uyzxwv);
      }, 'fail': function (gebdcf) {
        console['log']('写入测试测试失败：', gebdcf);
      } });
  }, mkopnl['existDir'] = function (txv, _0$yx) {
    mkopnl['fs']['mkdir']({ 'dirPath': txv, 'success': function (hjifeg) {
        null != _0$yx && _0$yx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (uxwvy) {
        -0x1 != uxwvy['errMsg']['indexOf']('file already exists') ? mkopnl['readSync'](mkopnl['fileListName'], 'utf8', _0$yx) : null != _0$yx && _0$yx['runWith']([0x1, uxwvy]);
      } });
  }, mkopnl['readSync'] = function (sxtuw, lpnkom, eabcf, ghkjfi) {
    void 0x0 === lpnkom && (lpnkom = 'ascill'), void 0x0 === ghkjfi && (ghkjfi = ''), sxtuw = mkopnl['getFileNativePath'](sxtuw);var z$_xyw;try {
      z$_xyw = mkopnl['fs']['readFileSync'](sxtuw), null != eabcf && eabcf['runWith']([0x0, { 'data': z$_xyw }]);
    } catch (jgikfh) {
      null != eabcf && eabcf['runWith']([0x1]);
    }
  }, mkopnl['readCache'] = function () {}, mkopnl['writeCache'] = function (tvxus) {
    var glijhk = readyUrl['split']('?')[0x0];mkopnl['filesListObj'][glijhk] = { 'md5': md5Name, 'readyUrl': readyUrl }, mkopnl['fs']['writeFile']({ 'filePath': mkopnl['fileNativeDir'] + '/' + mkopnl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mkopnl['filesListObj']), 'success': function (ornpq) {}, 'fail': function (tuwr) {} });
  }, mkopnl['setNativeFileDir'] = function (sotpr) {
    mkopnl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sotpr;
  }, mkopnl['filesListObj'] = {}, mkopnl['fileNativeDir'] = null, mkopnl['fileListName'] = 'layaairfiles.txt', mkopnl['ziyuFileData'] = {}, vxswu(mkopnl, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), mkopnl);function mkopnl() {
    mkopnl['__super']['call'](this);
  }var hgefj = function () {
    function zy$1_0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, zy$1_0['__super']['call'](this), this['_sound'] = zy$1_0['_createSound']();
    }himlkj(zy$1_0, 'laya.wx.mini.MiniSound', qpnos);var rsqutv = zy$1_0['prototype'];return rsqutv['load'] = function (hgjfki) {
      var ijgkfh = this,
          hdigf;function $x_y0z() {
        if (null != zy$1_0['_null']) ijgkfh['_sound']['onCanplay'](zy$1_0['_null']), ijgkfh['_sound']['onError'](zy$1_0['_null']);else try {
          ijgkfh['_sound']['onCanplay'](null), ijgkfh['_sound']['onError'](null), zy$1_0['_null'] = null;
        } catch (z_xw$y) {
          console['warn']('[wxmini] _clearSound:' + z_xw$y), ijgkfh['_sound']['onCanplay'](tvsuq), ijgkfh['_sound']['onError'](tvsuq), zy$1_0['_null'] = tvsuq;
        }
      }function tvsuq() {}hgjfki = iehfjg['formatURL'](hgjfki), this['url'] = hgjfki, zy$1_0['_audioCache'][hgjfki] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        $x_y0z(), hdigf['loaded'] = !0x0, hdigf['event']('complete'), zy$1_0['_audioCache'][hdigf['url']] = hdigf;
      }), this['_sound']['onError'](function (hdfg) {
        console['error']('errCode=' + hdfg['errCode'] + '  errMsg=' + hdfg['errMsg']), $x_y0z(), hdigf['event']('error');
      }), this['_sound']['src'] = hgjfki, hdigf = this);
    }, rsqutv['play'] = function (nlokp, $_z12) {
      void 0x0 === nlokp && (nlokp = 0x0), void 0x0 === $_z12 && ($_z12 = 0x0), (mpqorn = this['url'] == cfhdeg['_tMusic'] ? (zy$1_0['_musicAudio'] || (zy$1_0['_musicAudio'] = zy$1_0['_createSound']()), zy$1_0['_musicAudio']) : zy$1_0['_createSound']())['src'] = this['url'];var mpqorn = new deghf(mpqorn);return mpqorn['url'] = this['url'], mpqorn['loops'] = $_z12, mpqorn['startTime'] = nlokp, mpqorn['play'](), cfhdeg['addChannel'](mpqorn), mpqorn;
    }, rsqutv['dispose'] = function () {
      var cbgd = zy$1_0['_audioCache'][this['url']];cbgd && (cbgd['src'] = '', delete zy$1_0['_audioCache'][this['url']]);
    }, igehdf(0x0, rsqutv, 'duration', function () {
      return this['_sound']['duration'];
    }), zy$1_0['_createSound'] = function () {
      return zy$1_0['_id']++, yuxwzv['window']['wx']['createInnerAudioContext']();
    }, zy$1_0['_musicAudio'] = null, zy$1_0['_id'] = 0x0, zy$1_0['_audioCache'] = {}, zy$1_0['_null'] = void 0x0, zy$1_0;
  }(),
      deghf = function () {
    function uv(nmlopq) {
      this['_audio'] = null, this['_onEnd'] = null, uv['__super']['call'](this), this['_audio'] = nmlopq, this['_onEnd'] = vuwrs['bind'](this['__onEnd'], this), nmlopq['onEnded'](this['_onEnd']);
    }himlkj(uv, 'laya.wx.mini.MiniSoundChannel', $zw_y);var rqom = uv['prototype'];return rqom['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (uvsrw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rqom['__onNull'] = function () {}, rqom['play'] = function () {
      this['isStopped'] = !0x1, cfhdeg['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, rqom['stop'] = function () {
      if (this['isStopped'] = !0x0, cfhdeg['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != uv['_null']) this['_audio']['onEnded'](uv['_null']);else try {
          this['_audio']['onEnded'](null), uv['_null'] = null;
        } catch (vuwtrs) {
          console['warn']('[wxmini] stop:' + vuwtrs), this['_audio']['onEnded'](vuwrs['bind'](this['__onNull'], this)), uv['_null'] = vuwrs['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, rqom['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, rqom['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, cfhdeg['addChannel'](this), this['_audio']['play']());
    }, igehdf(0x0, rqom, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), igehdf(0x0, rqom, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), igehdf(0x0, rqom, 'volume', function () {
      return 0x1;
    }, function (z1$y0_) {}), uv['_null'] = void 0x0, uv;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (nmkloj, truspq) {
  'use strict';

  for (var edafbc in Object['defineProperty'](truspq, '__esModule', { 'value': !0x0 }), Laya) {
    var klmnji = Laya[edafbc];klmnji && klmnji['__isclass'] && (truspq[edafbc] = klmnji);
  }
});