var _ = wx.y$;
!function (z$2_0, uyxvwt) {
  uyxvwt['un'], uyxvwt['uns'];var $_z201 = uyxvwt['static'],
      cdfbge = uyxvwt['class'],
      kmjo = uyxvwt['getset'];uyxvwt['__newvec'];var ptoq = laya['utils']['Browser'],
      jifhe = (laya['events']['Event'], laya['events']['EventDispatcher']),
      tpqrso = laya['resource']['HTMLImage'],
      qsprto = laya['utils']['Handler'],
      oqplnm = laya['display']['Input'],
      kihl = laya['net']['Loader'];laya['maths']['Matrix'];var osnqrp = laya['renders']['Render'],
      wtrusv = laya['utils']['RunDriver'];laya['media']['Sound'];var dfeih = laya['media']['SoundChannel'],
      z1_$20 = laya['media']['SoundManager'],
      uswt = (laya['display']['Stage'], laya['net']['URL']),
      srtw = laya['utils']['Utils'],
      fhdcg = (cdfbge(lkmjni, 'laya.wx.mini.MiniAdpter'), lkmjni['getJson'] = function (mojlk) {
    return JSON['parse'](mojlk);
  }, lkmjni['init'] = function (xzyuvw, becfd) {
    void 0x0 === xzyuvw && (xzyuvw = !0x1), void 0x0 === becfd && (becfd = !0x1), lkmjni['_inited'] || (lkmjni['window'] = z$2_0)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (lkmjni['_inited'] = !0x0, lkmjni['isZiYu'] = becfd, lkmjni['isPosMsgYu'] = xzyuvw, lkmjni['EnvConfig'] = {}, lkmjni['isZiYu'] || (wtxuyv['setNativeFileDir']('/layaairGame'), wtxuyv['existDir'](wtxuyv['fileNativeDir'], qsprto['create'](lkmjni, lkmjni['onMkdirCallBack']))), lkmjni['window']['focus'] = function () {}, uyxvwt['getUrlPath'] = function () {}, lkmjni['window']['logtime'] = function (jfhi) {}, lkmjni['window']['alertTimeLog'] = function (_yz1$0) {}, lkmjni['window']['resetShareInfo'] = function () {}, lkmjni['window']['CanvasRenderingContext2D'] = function () {}, lkmjni['window']['CanvasRenderingContext2D']['prototype'] = lkmjni['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lkmjni['window']['document']['body']['appendChild'] = function () {}, lkmjni['EnvConfig']['pixelRatioInt'] = 0x0, wtrusv['getPixelRatio'] = lkmjni['pixelRatio'], lkmjni['_preCreateElement'] = ptoq['createElement'], ptoq['createElement'] = lkmjni['createElement'], wtrusv['createShaderCondition'] = lkmjni['createShaderCondition'], srtw['parseXMLFromString'] = lkmjni['parseXMLFromString'], oqplnm['_createInputElement'] = hgkfj['_createInputElement'], lkmjni['EnvConfig']['load'] = kihl['prototype']['load'], kihl['prototype']['load'] = ojlmk['prototype']['load'], lkmjni['isZiYu'] && xzyuvw && wx['onMessage'](function (xwzyvu) {
      xwzyvu['isLoad'] && (wtxuyv['ziyuFileData'][xwzyvu['url']] = xwzyvu['data']);
    }));
  }, lkmjni['onMkdirCallBack'] = function (lknmop, wtvrs) {
    lknmop || (wtxuyv['filesListObj'] = JSON['parse'](wtvrs['data']));
  }, lkmjni['pixelRatio'] = function () {
    if (!lkmjni['EnvConfig']['pixelRatioInt']) try {
      var edabf = wx['getSystemInfoSync']();return lkmjni['EnvConfig']['pixelRatioInt'] = edabf['pixelRatio'], edabf['pixelRatio'];
    } catch (rtqso) {}return lkmjni['EnvConfig']['pixelRatioInt'];
  }, lkmjni['createElement'] = function (bcdfea) {
    var ifeh;if ('canvas' == bcdfea) return 0x1 == lkmjni['idx'] ? lkmjni['isZiYu'] ? (ifeh = sharedCanvas)['style'] = {} : ifeh = z$2_0['canvas'] : ifeh = z$2_0['wx']['createCanvas'](), lkmjni['idx']++, ifeh;if ('textarea' == bcdfea || 'input' == bcdfea) return lkmjni['onCreateInput'](bcdfea);if ('div' != bcdfea) return lkmjni['_preCreateElement'](bcdfea);return bcdfea = lkmjni['_preCreateElement'](bcdfea), (bcdfea['contains'] = function (gbce) {
      return null;
    }, bcdfea['removeChild'] = function (ghedc) {}, bcdfea);
  }, lkmjni['onCreateInput'] = function (qsrop) {
    return qsrop = lkmjni['_preCreateElement'](qsrop), (qsrop['focus'] = hgkfj['wxinputFocus'], qsrop['blur'] = hgkfj['wxinputblur'], qsrop['style'] = {}, qsrop['value'] = 0x0, qsrop['parentElement'] = {}, qsrop['placeholder'] = {}, qsrop['type'] = {}, qsrop['setColor'] = function (pknlom) {}, qsrop['setType'] = function (tvrqus) {}, qsrop['setFontFace'] = function (cbfe) {}, qsrop['addEventListener'] = function (osqrnp) {}, qsrop['contains'] = function ($yz10) {
      return null;
    }, qsrop['removeChild'] = function (fije) {}, qsrop);
  }, lkmjni['createShaderCondition'] = function (wusvtr) {
    var qpnoml = this;return function () {
      return qpnoml[wusvtr['replace']('this.', '')];
    };
  }, lkmjni['EnvConfig'] = null, lkmjni['window'] = null, lkmjni['_preCreateElement'] = null, lkmjni['_inited'] = !0x1, lkmjni['wxRequest'] = null, lkmjni['systemInfo'] = null, lkmjni['version'] = '0.0.1', lkmjni['isZiYu'] = !0x1, lkmjni['isPosMsgYu'] = !0x1, lkmjni['parseXMLFromString'] = function (ghcedf) {
    var mljikh;ghcedf = ghcedf['replace'](/>\s+</g, '><');try {
      mljikh = new z$2_0['Parser']['DOMParser']()['parseFromString'](ghcedf, 'text/xml');
    } catch (onmpr) {
      throw '需要引入xml解析库文件';
    }return mljikh;
  }, lkmjni['idx'] = 0x1, lkmjni);function lkmjni() {}cdfbge(ihkfj, 'laya.wx.mini.MiniImage'), ihkfj['prototype']['_loadImage'] = function (lmok) {
    var xvzu = !0x1;-0x1 == lmok['indexOf']('layaNativeDir/') && (xvzu = !0x0, lmok = uswt['formatURL'](lmok)), wtxuyv['getFileInfo'](lmok) ? ihkfj['onCreateImage'](lmok, this, !xvzu) : -0x1 != lmok['indexOf']('http://') || -0x1 != lmok['indexOf']('https://') ? wtxuyv['downImg'](lmok, new qsprto(ihkfj, ihkfj['onDownImgCallBack'], [lmok, this]), lmok) : ihkfj['onCreateImage'](lmok, this, !0x0);
  }, ihkfj['onDownImgCallBack'] = function (jlknom, uvx, pqmn) {
    pqmn ? uvx['onError'](null) : ihkfj['onCreateImage'](jlknom, uvx);
  }, ihkfj['onCreateImage'] = function (qprnmo, _102$, lmpo) {
    var mkpno, mpkoln;function _yz0() {
      mpkoln['onload'] = null, mpkoln['onerror'] = null, delete _102$['imgCache'][qprnmo];
    }mkpno = (lmpo = void 0x0 === lmpo ? !0x1 : lmpo) ? qprnmo : (ilkmjh = wtxuyv['getFileInfo'](qprnmo)['md5'], wtxuyv['getFileNativePath'](ilkmjh)), null == _102$['imgCache'] && (_102$['imgCache'] = {}), lmpo = function () {
      _yz0(), _102$['onLoaded'](mpkoln);
    };var ilkmjh = function () {
      _yz0(), _102$['event']('error', 'Load image failed');
    };'nativeimage' == _102$['_type'] ? ((mpkoln = new ptoq['window']['Image']())['crossOrigin'] = '', mpkoln['onload'] = lmpo, mpkoln['onerror'] = ilkmjh, mpkoln['src'] = mkpno, _102$['imgCache'][qprnmo] = mpkoln) : new tpqrso['create'](mkpno, { 'onload': lmpo, 'onerror': ilkmjh, 'onCreate': function (hfije) {
        mpkoln = hfije, _102$['imgCache'][qprnmo] = hfije;
      } });
  };function ihkfj() {}var hgkfj = (cdfbge(ehigjf, 'laya.wx.mini.MiniInput'), ehigjf['_createInputElement'] = function () {
    oqplnm['_initInput'](oqplnm['area'] = ptoq['createElement']('textarea')), oqplnm['_initInput'](oqplnm['input'] = ptoq['createElement']('input')), oqplnm['inputContainer'] = ptoq['createElement']('div'), oqplnm['inputContainer']['style']['position'] = 'absolute', oqplnm['inputContainer']['style']['zIndex'] = 0x186a0, ptoq['container']['appendChild'](oqplnm['inputContainer']), oqplnm['inputContainer']['setPos'] = function (hegdfc, ifh) {
      oqplnm['inputContainer']['style']['left'] = hegdfc + 'px', oqplnm['inputContainer']['style']['top'] = ifh + 'px';
    }, uyxvwt['stage']['on']('resize', null, ehigjf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ehfdg) {
      z$2_0['dispatchEvent'] && z$2_0['dispatchEvent']('resize');
    }), z1_$20['_soundClass'] = tpqsor, z1_$20['_musicClass'] = tpqsor;
  }, ehigjf['_onStageResize'] = function () {
    uyxvwt['stage']['_canvasTransform']['identity']()['scale'](ptoq['width'] / osnqrp['canvas']['width'] / wtrusv['getPixelRatio'](), ptoq['height'] / osnqrp['canvas']['height'] / wtrusv['getPixelRatio']());
  }, ehigjf['wxinputFocus'] = function (kmljn) {
    var edhg = oqplnm['inputElement']['target'];edhg && !edhg['editable'] || (fhdcg['window']['wx']['offKeyboardConfirm'](), fhdcg['window']['wx']['offKeyboardInput'](), fhdcg['window']['wx']['showKeyboard']({ 'defaultValue': edhg['text'], 'maxLength': edhg['maxChars'], 'multiple': edhg['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (z$0_yx) {}, 'fail': function (wzuyxv) {} }), fhdcg['window']['wx']['onKeyboardConfirm'](function (rsupt) {
      rsupt = rsupt ? rsupt['value'] : '', (edhg['text'] = rsupt, edhg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), fhdcg['window']['wx']['onKeyboardInput'](function (tuvqr) {
      tuvqr = tuvqr ? tuvqr['value'] : '', edhg['multiline'] || -0x1 == tuvqr['indexOf']('\x0a') ? (edhg['text'] = tuvqr, edhg['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ehigjf['inputEnter'] = function () {
    oqplnm['inputElement']['target']['focus'] = !0x1;
  }, ehigjf['wxinputblur'] = function () {
    ehigjf['hideKeyboard']();
  }, ehigjf['hideKeyboard'] = function () {
    fhdcg['window']['wx']['offKeyboardConfirm'](), fhdcg['window']['wx']['offKeyboardInput'](), fhdcg['window']['wx']['hideKeyboard']({ 'success': function (egifhj) {
        console['log']('隐藏键盘');
      }, 'fail': function (rsonp) {
        console['log']('隐藏键盘出错:' + (rsonp ? rsonp['errMsg'] : ''));
      } });
  }, ehigjf);function ehigjf() {}var ojlmk = function () {
    function srpqto() {}cdfbge(srpqto, 'laya.wx.mini.MiniLoader');var jfihg = srpqto['prototype'];return jfihg['load'] = function (hgeij, mlhikj, dfcbae, v$zxw, quvrt) {
      void 0x0 === dfcbae && (dfcbae = !0x0), void 0x0 === quvrt && (quvrt = !0x1);var ebgfdc = this;0x0 === (ebgfdc['_url'] = hgeij)['indexOf']('data:image') ? ebgfdc['_type'] = mlhikj = 'image' : ebgfdc['_type'] = mlhikj = mlhikj || ebgfdc['getTypeFromUrl'](hgeij), ebgfdc['_cache'] = dfcbae, ebgfdc['_data'] = null;var qopst = 'ascii';-0x1 != hgeij['indexOf']('.fnt') ? qopst = 'utf8' : 'arraybuffer' == mlhikj && (qopst = '');var rnqopm = srtw['getFileExtension'](hgeij);if (-0x1 != srpqto['_fileTypeArr']['indexOf'](rnqopm)) fhdcg['EnvConfig']['load']['call'](this, hgeij, mlhikj, dfcbae, v$zxw, quvrt);else {
        if (wtxuyv['getFileInfo'](hgeij)) fhdcg['EnvConfig']['load']['call'](this, hgeij, mlhikj, dfcbae, v$zxw, quvrt);else {
          if (-0x1 != hgeij['indexOf']('layaNativeDir/')) {
            if (fhdcg['isZiYu']) {
              var _301$ = wtxuyv['ziyuFileData'][hgeij];return void ebgfdc['onLoaded'](_301$);
            }return cosnole['log']('read read'), void wtxuyv['read'](hgeij, qopst, new qsprto(srpqto, srpqto['onReadNativeCallBack'], [qopst, hgeij, mlhikj, dfcbae, v$zxw, quvrt, ebgfdc]));
          }_301$ = '' == uswt['rootPath'] ? hgeij : hgeij['split'](uswt['rootPath'])[0x0], -0x1 != hgeij['indexOf']('http://') || -0x1 != hgeij['indexOf']('https://') ? fhdcg['EnvConfig']['load']['call'](ebgfdc, hgeij, mlhikj, dfcbae, v$zxw, quvrt) : wtxuyv['readFile'](_301$, qopst, new qsprto(srpqto, srpqto['onReadNativeCallBack'], [qopst, hgeij, mlhikj, dfcbae, v$zxw, quvrt, ebgfdc]), hgeij);
        }
      }
    }, jfihg['resMgrLoad'] = function (sxutv, konp, gkf, qsoptr, monjlk, wyuxvz, yw$xz) {
      void 0x0 === gkf && (gkf = 0x0), void 0x0 === qsoptr && (qsoptr = !0x1), void 0x0 === monjlk && (monjlk = !0x1), void 0x0 === wyuxvz && (wyuxvz = 0x0), void 0x0 === yw$xz && (yw$xz = 0x3), -0x1 != sxutv['indexOf']('mpack') && console['log']('=============resMgrLoad url:', sxutv), fhdcg['EnvConfig']['resMgrLoad'](sxutv, (xwtuy, fbdce, $120) => {
        srpqto['prototype']['resMgrLoadCallBack'](xwtuy, fbdce, $120, konp);
      }, gkf, qsoptr, monjlk, wyuxvz, yw$xz);
    }, jfihg['resMgrLoadCallBack'] = function (gfdi, dgebfc, ptqu, kmjlh) {
      console['log']('buff:::', gfdi, ptqu, wtxuyv['fileNativeDir'] + '///' + wtxuyv['fileListName']), kmjlh(gfdi, dgebfc, ptqu);
    }, jfihg['clearRes'] = function (hgdfc, nmrpq) {
      this['clearRes'](hgdfc, nmrpq = void 0x0 === nmrpq ? !0x1 : nmrpq), nmrpq = wtxuyv['getFileInfo'](hgdfc), !nmrpq || -0x1 == hgdfc['indexOf']('http://') && -0x1 == hgdfc['indexOf']('https://') || (nmrpq = nmrpq['md5'], nmrpq = wtxuyv['getFileNativePath'](nmrpq), wtxuyv['remove'](nmrpq));
    }, srpqto['onReadNativeCallBack'] = function (_zy0$, dbafe, $_xy0, z_0x, jhgfki, kiljm, nlkmj, gejfh, zy_1$0) {
      void 0x0 === z_0x && (z_0x = !0x0), void 0x0 === kiljm && (kiljm = !0x1), (gejfh = void 0x0 === gejfh ? 0x0 : gejfh) ? 0x1 == gejfh && fhdcg['EnvConfig']['load']['call'](nlkmj, dbafe, $_xy0, z_0x, jhgfki, kiljm) : (zy_1$0 = 'json' == $_xy0 || 'atlas' == $_xy0 ? fhdcg['getJson'](zy_1$0['data']) : 'xml' == $_xy0 ? srtw['parseXMLFromString'](zy_1$0['data']) : zy_1$0['data'], nlkmj['onLoaded'](zy_1$0), !fhdcg['isZiYu'] && fhdcg['isPosMsgYu'] && 'arraybuffer' != $_xy0 && wx['postMessage']({ 'url': dbafe, 'data': zy_1$0, 'isLoad': !0x0 }));
    }, $_z201(srpqto, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), srpqto;
  }(),
      wtxuyv = (cdfbge(hijgkf, 'laya.wx.mini.MiniFileMgr', jifhe), hijgkf['isLoadFile'] = function (hifejg) {
    return -0x1 != hijgkf['_fileTypeArr']['indexOf'](hifejg);
  }, hijgkf['getFileInfo'] = function (xzw$v) {
    return xzw$v = xzw$v['split']('?')[0x0], xzw$v = hijgkf['filesListObj'][xzw$v], null == xzw$v ? null : xzw$v;
  }, hijgkf['onFileUpdate'] = function (ijhfkg, z$yx_) {
    var lmnj = ijhfkg['split']('/');ijhfkg = lmnj[lmnj['length'] - 0x1], lmnj = hijgkf['getFileInfo'](z$yx_), null == lmnj ? hijgkf['onSaveFile'](z$yx_, ijhfkg) : lmnj['readyUrl'] != z$yx_ && hijgkf['remove'](ijhfkg, z$yx_);
  }, hijgkf['exits'] = function (_wzy, wvrut) {
    _wzy = hijgkf['getFileNativePath'](_wzy), hijgkf['fs']['getFileInfo']({ 'filePath': _wzy, 'success': function (jinkl) {
        null != wvrut && wvrut['runWith']([0x0, jinkl]);
      }, 'fail': function (vqusr) {
        null != wvrut && wvrut['runWith']([0x1, vqusr]);
      } });
  }, hijgkf['read'] = function (dehfig, pmloq, qmnolp, plqn) {
    void 0x0 === pmloq && (pmloq = 'ascill'), dehfig = '' != (plqn = void 0x0 === plqn ? '' : plqn) ? hijgkf['getFileNativePath'](dehfig) : dehfig, hijgkf['fs']['readFile']({ 'filePath': dehfig, 'encoding': pmloq, 'success': function (ilnj) {
        null != qmnolp && qmnolp['runWith']([0x0, ilnj]);
      }, 'fail': function ($xy_0) {
        $xy_0 && '' != plqn ? hijgkf['down'](plqn, pmloq, qmnolp, plqn) : null != qmnolp && qmnolp['runWith']([0x1]);
      } });
  }, hijgkf['readNativeFile'] = function (fabdce, x0_zy$) {
    hijgkf['fs']['readFile']({ 'filePath': fabdce, 'encoding': '', 'success': function (_03$1) {
        null != x0_zy$ && x0_zy$['runWith']([0x0]);
      }, 'fail': function (yutxvw) {
        null != x0_zy$ && x0_zy$['runWith']([0x1]);
      } });
  }, hijgkf['down'] = function (qtspru, nrsop, wyzx$v, igdfe) {
    void 0x0 === nrsop && (nrsop = 'ascill'), void 0x0 === igdfe && (igdfe = '');var nqrop = hijgkf['getFileNativePath'](igdfe);hijgkf['wxdown']({ 'url': qtspru, 'filePath': nqrop, 'success': function (hfd) {
        0xc8 === hfd['statusCode'] && hijgkf['readFile'](hfd['filePath'], nrsop, wyzx$v, igdfe);
      }, 'fail': function (eabf) {
        null != wyzx$v && wyzx$v['runWith']([0x1, eabf]);
      } })['onProgressUpdate'](function (gkjih) {
      null != wyzx$v && wyzx$v['runWith']([0x2, gkjih['progress']]);
    });
  }, hijgkf['readFile'] = function (urptsq, vuwtr, v$, _43) {
    void 0x0 === _43 && (_43 = ''), hijgkf['fs']['readFile']({ 'filePath': urptsq, 'encoding': vuwtr = void 0x0 === vuwtr ? 'ascill' : vuwtr, 'success': function (pnqros) {
        -0x1 == urptsq['indexOf']('http://') && -0x1 == urptsq['indexOf']('https://') || hijgkf['onFileUpdate'](urptsq, _43), null != v$ && v$['runWith']([0x0, pnqros]);
      }, 'fail': function (adefcb) {
        adefcb && null != v$ && v$['runWith']([0x1, adefcb]);
      } });
  }, hijgkf['downImg'] = function (ifegd, ptqos, $021z_) {
    void 0x0 === $021z_ && ($021z_ = ''), hijgkf['wxdown']({ 'url': ifegd, 'success': function (fkjig) {
        0xc8 === fkjig['statusCode'] && hijgkf['copyFile'](fkjig['tempFilePath'], $021z_, ptqos);
      }, 'fail': function (z$yxv) {
        null != ptqos && ptqos['runWith']([0x1, z$yxv]);
      } });
  }, hijgkf['copyFile'] = function (geji, jeghfi, mqo) {
    var omrqnp = geji['split']('/'),
        lhmkji = omrqnp[omrqnp['length'] - 0x1];jeghfi['split']('?')[0x0];var pnmko = hijgkf['getFileInfo'](jeghfi);omrqnp = hijgkf['getFileNativePath'](lhmkji), hijgkf['fs']['copyFile']({ 'srcPath': geji, 'destPath': omrqnp, 'success': function (qstrup) {
        pnmko ? pnmko['readyUrl'] != jeghfi && hijgkf['remove'](lhmkji, jeghfi, mqo) : (hijgkf['onSaveFile'](jeghfi, lhmkji), null != mqo && mqo['runWith']([0x0]));
      }, 'fail': function (oqpm) {
        null != mqo && mqo['runWith']([0x1, oqpm]);
      } });
  }, hijgkf['getFileNativePath'] = function (wuyzxv) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wuyzxv;
  }, hijgkf['remove'] = function (srtp, uvtqrs, gkljh) {
    void 0x0 === uvtqrs && (uvtqrs = '');var dgfhc = hijgkf['getFileInfo'](uvtqrs),
        wy_$z = hijgkf['getFileNativePath'](dgfhc['md5']);uyxvwt['loader']['clearRes'](dgfhc['readyUrl']), hijgkf['fs']['unlink']({ 'filePath': wy_$z, 'success': function (ghedfi) {
        '' != uvtqrs && hijgkf['onSaveFile'](uvtqrs, srtp), null != gkljh && gkljh['runWith']([0x0]);
      }, 'fail': function (nmop) {} });
  }, hijgkf['onSaveFile'] = function (_$z0xy, rptuqs) {
    var jegif = _$z0xy['split']('?')[0x0];hijgkf['filesListObj'][jegif] = { 'md5': rptuqs, 'readyUrl': _$z0xy }, hijgkf['fs']['writeFile']({ 'filePath': hijgkf['fileNativeDir'] + '/' + hijgkf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hijgkf['filesListObj']), 'success': function (lhji) {
        console['log']('写入测试测试成功：', lhji);
      }, 'fail': function (nlpmq) {
        console['log']('写入测试测试失败：', nlpmq);
      } });
  }, hijgkf['existDir'] = function (pmnlok, hifgej) {
    hijgkf['fs']['mkdir']({ 'dirPath': pmnlok, 'success': function (dfegh) {
        null != hifgej && hifgej['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (chgdf) {
        -0x1 != chgdf['errMsg']['indexOf']('file already exists') ? hijgkf['readSync'](hijgkf['fileListName'], 'utf8', hifgej) : null != hifgej && hifgej['runWith']([0x1, chgdf]);
      } });
  }, hijgkf['readSync'] = function (tsrquv, x_0y, gdehf, wtvusr) {
    void 0x0 === x_0y && (x_0y = 'ascill'), void 0x0 === wtvusr && (wtvusr = ''), tsrquv = hijgkf['getFileNativePath'](tsrquv);var $203;try {
      $203 = hijgkf['fs']['readFileSync'](tsrquv), null != gdehf && gdehf['runWith']([0x0, { 'data': $203 }]);
    } catch (kjlhig) {
      null != gdehf && gdehf['runWith']([0x1]);
    }
  }, hijgkf['readCache'] = function () {}, hijgkf['writeCache'] = function (posrn) {
    var gbecf = readyUrl['split']('?')[0x0];hijgkf['filesListObj'][gbecf] = { 'md5': md5Name, 'readyUrl': readyUrl }, hijgkf['fs']['writeFile']({ 'filePath': hijgkf['fileNativeDir'] + '/' + hijgkf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hijgkf['filesListObj']), 'success': function (jhmikl) {}, 'fail': function (turw) {} });
  }, hijgkf['setNativeFileDir'] = function (hkfgj) {
    hijgkf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hkfgj;
  }, hijgkf['filesListObj'] = {}, hijgkf['fileNativeDir'] = null, hijgkf['fileListName'] = 'layaairfiles.txt', hijgkf['ziyuFileData'] = {}, $_z201(hijgkf, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), hijgkf);function hijgkf() {
    hijgkf['__super']['call'](this);
  }var tpqsor = function () {
    function rptqos() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, rptqos['__super']['call'](this), this['_sound'] = rptqos['_createSound']();
    }cdfbge(rptqos, 'laya.wx.mini.MiniSound', jifhe);var gcebf = rptqos['prototype'];return gcebf['load'] = function (ihgej) {
      var yuvxz = this,
          uprsq;function vsxwt() {
        if (null != rptqos['_null']) yuvxz['_sound']['onCanplay'](rptqos['_null']), yuvxz['_sound']['onError'](rptqos['_null']);else try {
          yuvxz['_sound']['onCanplay'](null), yuvxz['_sound']['onError'](null), rptqos['_null'] = null;
        } catch (mqrop) {
          console['warn']('[wxmini] _clearSound:' + mqrop), yuvxz['_sound']['onCanplay'](moknp), yuvxz['_sound']['onError'](moknp), rptqos['_null'] = moknp;
        }
      }function moknp() {}ihgej = uswt['formatURL'](ihgej), this['url'] = ihgej, rptqos['_audioCache'][ihgej] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        vsxwt(), uprsq['loaded'] = !0x0, uprsq['event']('complete'), rptqos['_audioCache'][uprsq['url']] = uprsq;
      }), this['_sound']['onError'](function (igf) {
        console['error']('errCode=' + igf['errCode'] + '  errMsg=' + igf['errMsg']), vsxwt(), uprsq['event']('error');
      }), this['_sound']['src'] = ihgej, uprsq = this);
    }, gcebf['play'] = function (ustvrw, oqrst) {
      void 0x0 === ustvrw && (ustvrw = 0x0), void 0x0 === oqrst && (oqrst = 0x0), (qprus = this['url'] == z1_$20['_tMusic'] ? (rptqos['_musicAudio'] || (rptqos['_musicAudio'] = rptqos['_createSound']()), rptqos['_musicAudio']) : rptqos['_createSound']())['src'] = this['url'];var qprus = new mnrpqo(qprus);return qprus['url'] = this['url'], qprus['loops'] = oqrst, qprus['startTime'] = ustvrw, qprus['play'](), z1_$20['addChannel'](qprus), qprus;
    }, gcebf['dispose'] = function () {
      var nosp = rptqos['_audioCache'][this['url']];nosp && (nosp['src'] = '', delete rptqos['_audioCache'][this['url']]);
    }, kmjo(0x0, gcebf, 'duration', function () {
      return this['_sound']['duration'];
    }), rptqos['_createSound'] = function () {
      return rptqos['_id']++, fhdcg['window']['wx']['createInnerAudioContext']();
    }, rptqos['_musicAudio'] = null, rptqos['_id'] = 0x0, rptqos['_audioCache'] = {}, rptqos['_null'] = void 0x0, rptqos;
  }(),
      mnrpqo = function () {
    function ilhkjg(lhjkgi) {
      this['_audio'] = null, this['_onEnd'] = null, ilhkjg['__super']['call'](this), this['_audio'] = lhjkgi, this['_onEnd'] = srtw['bind'](this['__onEnd'], this), lhjkgi['onEnded'](this['_onEnd']);
    }cdfbge(ilhkjg, 'laya.wx.mini.MiniSoundChannel', dfeih);var imnklj = ilhkjg['prototype'];return imnklj['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (uyxvwt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, imnklj['__onNull'] = function () {}, imnklj['play'] = function () {
      this['isStopped'] = !0x1, z1_$20['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, imnklj['stop'] = function () {
      if (this['isStopped'] = !0x0, z1_$20['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != ilhkjg['_null']) this['_audio']['onEnded'](ilhkjg['_null']);else try {
          this['_audio']['onEnded'](null), ilhkjg['_null'] = null;
        } catch (spoqnr) {
          console['warn']('[wxmini] stop:' + spoqnr), this['_audio']['onEnded'](srtw['bind'](this['__onNull'], this)), ilhkjg['_null'] = srtw['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, imnklj['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, imnklj['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, z1_$20['addChannel'](this), this['_audio']['play']());
    }, kmjo(0x0, imnklj, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), kmjo(0x0, imnklj, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), kmjo(0x0, imnklj, 'volume', function () {
      return 0x1;
    }, function (ojknl) {}), ilhkjg['_null'] = void 0x0, ilhkjg;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (uyxzwv, ecbgf) {
  'use strict';

  for (var svwru in Object['defineProperty'](ecbgf, '__esModule', { 'value': !0x0 }), Laya) {
    var mhilj = Laya[svwru];mhilj && mhilj['__isclass'] && (ecbgf[svwru] = mhilj);
  }
});