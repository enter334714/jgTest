var _ = wx.y$;
!function (hgkijl, $1320_) {
  $1320_['un'], $1320_['uns'];var xwvtus = $1320_['static'],
      zx$vyw = $1320_['class'],
      igkjfh = $1320_['getset'];$1320_['__newvec'];var hdgfe = laya['utils']['Browser'],
      tpq = (laya['events']['Event'], laya['events']['EventDispatcher']),
      abcfe = laya['resource']['HTMLImage'],
      efcgh = laya['utils']['Handler'],
      nqrpso = laya['display']['Input'],
      prnomq = laya['net']['Loader'];laya['maths']['Matrix'];var $xwyz_ = laya['renders']['Render'],
      trwvsu = laya['utils']['RunDriver'];laya['media']['Sound'];var difhge = laya['media']['SoundChannel'],
      oqnrmp = laya['media']['SoundManager'],
      jkhlg = (laya['display']['Stage'], laya['net']['URL']),
      zx_wy$ = laya['utils']['Utils'],
      wv = (zx$vyw(fjgi, 'laya.wx.mini.MiniAdpter'), fjgi['getJson'] = function (vxtwyu) {
    return JSON['parse'](vxtwyu);
  }, fjgi['init'] = function (xwyz_, vuzwyx) {
    void 0x0 === xwyz_ && (xwyz_ = !0x1), void 0x0 === vuzwyx && (vuzwyx = !0x1), fjgi['_inited'] || (fjgi['window'] = hgkijl)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (fjgi['_inited'] = !0x0, fjgi['isZiYu'] = vuzwyx, fjgi['isPosMsgYu'] = xwyz_, fjgi['EnvConfig'] = {}, fjgi['isZiYu'] || (pmqlno['setNativeFileDir']('/layaairGame'), pmqlno['existDir'](pmqlno['fileNativeDir'], efcgh['create'](fjgi, fjgi['onMkdirCallBack']))), fjgi['window']['focus'] = function () {}, $1320_['getUrlPath'] = function () {}, fjgi['window']['logtime'] = function (z120$_) {}, fjgi['window']['alertTimeLog'] = function (klnmo) {}, fjgi['window']['resetShareInfo'] = function () {}, fjgi['window']['CanvasRenderingContext2D'] = function () {}, fjgi['window']['CanvasRenderingContext2D']['prototype'] = fjgi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fjgi['window']['document']['body']['appendChild'] = function () {}, fjgi['EnvConfig']['pixelRatioInt'] = 0x0, trwvsu['getPixelRatio'] = fjgi['pixelRatio'], fjgi['_preCreateElement'] = hdgfe['createElement'], hdgfe['createElement'] = fjgi['createElement'], trwvsu['createShaderCondition'] = fjgi['createShaderCondition'], zx_wy$['parseXMLFromString'] = fjgi['parseXMLFromString'], nqrpso['_createInputElement'] = lmijnk['_createInputElement'], fjgi['EnvConfig']['load'] = prnomq['prototype']['load'], prnomq['prototype']['load'] = _$y0xz['prototype']['load'], fjgi['isZiYu'] && xwyz_ && wx['onMessage'](function (jiegf) {
      jiegf['isLoad'] && (pmqlno['ziyuFileData'][jiegf['url']] = jiegf['data']);
    }));
  }, fjgi['onMkdirCallBack'] = function (prnos, w$xyz) {
    prnos || (pmqlno['filesListObj'] = JSON['parse'](w$xyz['data']));
  }, fjgi['pixelRatio'] = function () {
    if (!fjgi['EnvConfig']['pixelRatioInt']) try {
      var xyuwz = wx['getSystemInfoSync']();return fjgi['EnvConfig']['pixelRatioInt'] = xyuwz['pixelRatio'], xyuwz['pixelRatio'];
    } catch (qrsutp) {}return fjgi['EnvConfig']['pixelRatioInt'];
  }, fjgi['createElement'] = function (vxz) {
    var gebdfc;if ('canvas' == vxz) return 0x1 == fjgi['idx'] ? fjgi['isZiYu'] ? (gebdfc = sharedCanvas)['style'] = {} : gebdfc = hgkijl['canvas'] : gebdfc = hgkijl['wx']['createCanvas'](), fjgi['idx']++, gebdfc;if ('textarea' == vxz || 'input' == vxz) return fjgi['onCreateInput'](vxz);if ('div' != vxz) return fjgi['_preCreateElement'](vxz);return vxz = fjgi['_preCreateElement'](vxz), (vxz['contains'] = function (srtoqp) {
      return null;
    }, vxz['removeChild'] = function (kplom) {}, vxz);
  }, fjgi['onCreateInput'] = function (_1$320) {
    return _1$320 = fjgi['_preCreateElement'](_1$320), (_1$320['focus'] = lmijnk['wxinputFocus'], _1$320['blur'] = lmijnk['wxinputblur'], _1$320['style'] = {}, _1$320['value'] = 0x0, _1$320['parentElement'] = {}, _1$320['placeholder'] = {}, _1$320['type'] = {}, _1$320['setColor'] = function (sturvw) {}, _1$320['setType'] = function (z_012$) {}, _1$320['setFontFace'] = function (cbfegd) {}, _1$320['addEventListener'] = function (srpoqn) {}, _1$320['contains'] = function (wy_) {
      return null;
    }, _1$320['removeChild'] = function (lkjhi) {}, _1$320);
  }, fjgi['createShaderCondition'] = function ($1_0zy) {
    var z$_xyw = this;return function () {
      return z$_xyw[$1_0zy['replace']('this.', '')];
    };
  }, fjgi['EnvConfig'] = null, fjgi['window'] = null, fjgi['_preCreateElement'] = null, fjgi['_inited'] = !0x1, fjgi['wxRequest'] = null, fjgi['systemInfo'] = null, fjgi['version'] = '0.0.1', fjgi['isZiYu'] = !0x1, fjgi['isPosMsgYu'] = !0x1, fjgi['parseXMLFromString'] = function (z_y$x) {
    var $zxv;z_y$x = z_y$x['replace'](/>\s+</g, '><');try {
      $zxv = new hgkijl['Parser']['DOMParser']()['parseFromString'](z_y$x, 'text/xml');
    } catch (plnomk) {
      throw '需要引入xml解析库文件';
    }return $zxv;
  }, fjgi['idx'] = 0x1, fjgi);function fjgi() {}zx$vyw(xz$_y0, 'laya.wx.mini.MiniImage'), xz$_y0['prototype']['_loadImage'] = function (hki) {
    var bgfc = !0x1;-0x1 == hki['indexOf']('layaNativeDir/') && (bgfc = !0x0, hki = jkhlg['formatURL'](hki)), pmqlno['getFileInfo'](hki) ? xz$_y0['onCreateImage'](hki, this, !bgfc) : -0x1 != hki['indexOf']('http://') || -0x1 != hki['indexOf']('https://') ? pmqlno['downImg'](hki, new efcgh(xz$_y0, xz$_y0['onDownImgCallBack'], [hki, this]), hki) : xz$_y0['onCreateImage'](hki, this, !0x0);
  }, xz$_y0['onDownImgCallBack'] = function (wyx_z, jkmnil, _0yz1) {
    _0yz1 ? jkmnil['onError'](null) : xz$_y0['onCreateImage'](wyx_z, jkmnil);
  }, xz$_y0['onCreateImage'] = function (chdefg, iehfgj, y$xz) {
    var _4302, lnkjmo;function vxuywz() {
      lnkjmo['onload'] = null, lnkjmo['onerror'] = null, delete iehfgj['imgCache'][chdefg];
    }_4302 = (y$xz = void 0x0 === y$xz ? !0x1 : y$xz) ? chdefg : (fcegd = pmqlno['getFileInfo'](chdefg)['md5'], pmqlno['getFileNativePath'](fcegd)), null == iehfgj['imgCache'] && (iehfgj['imgCache'] = {}), y$xz = function () {
      vxuywz(), iehfgj['onLoaded'](lnkjmo);
    };var fcegd = function () {
      vxuywz(), iehfgj['event']('error', 'Load image failed');
    };'nativeimage' == iehfgj['_type'] ? ((lnkjmo = new hdgfe['window']['Image']())['crossOrigin'] = '', lnkjmo['onload'] = y$xz, lnkjmo['onerror'] = fcegd, lnkjmo['src'] = _4302, iehfgj['imgCache'][chdefg] = lnkjmo) : new abcfe['create'](_4302, { 'onload': y$xz, 'onerror': fcegd, 'onCreate': function (roqnp) {
        lnkjmo = roqnp, iehfgj['imgCache'][chdefg] = roqnp;
      } });
  };function xz$_y0() {}var lmijnk = (zx$vyw(upsrq, 'laya.wx.mini.MiniInput'), upsrq['_createInputElement'] = function () {
    nqrpso['_initInput'](nqrpso['area'] = hdgfe['createElement']('textarea')), nqrpso['_initInput'](nqrpso['input'] = hdgfe['createElement']('input')), nqrpso['inputContainer'] = hdgfe['createElement']('div'), nqrpso['inputContainer']['style']['position'] = 'absolute', nqrpso['inputContainer']['style']['zIndex'] = 0x186a0, hdgfe['container']['appendChild'](nqrpso['inputContainer']), nqrpso['inputContainer']['setPos'] = function (gchdfe, cgdehf) {
      nqrpso['inputContainer']['style']['left'] = gchdfe + 'px', nqrpso['inputContainer']['style']['top'] = cgdehf + 'px';
    }, $1320_['stage']['on']('resize', null, upsrq['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tyxuv) {
      hgkijl['dispatchEvent'] && hgkijl['dispatchEvent']('resize');
    }), oqnrmp['_soundClass'] = ihjgkl, oqnrmp['_musicClass'] = ihjgkl;
  }, upsrq['_onStageResize'] = function () {
    $1320_['stage']['_canvasTransform']['identity']()['scale'](hdgfe['width'] / $xwyz_['canvas']['width'] / trwvsu['getPixelRatio'](), hdgfe['height'] / $xwyz_['canvas']['height'] / trwvsu['getPixelRatio']());
  }, upsrq['wxinputFocus'] = function (geid) {
    var gedcb = nqrpso['inputElement']['target'];gedcb && !gedcb['editable'] || (wv['window']['wx']['offKeyboardConfirm'](), wv['window']['wx']['offKeyboardInput'](), wv['window']['wx']['showKeyboard']({ 'defaultValue': gedcb['text'], 'maxLength': gedcb['maxChars'], 'multiple': gedcb['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ornqps) {}, 'fail': function (jfgik) {} }), wv['window']['wx']['onKeyboardConfirm'](function (rustwv) {
      rustwv = rustwv ? rustwv['value'] : '', (gedcb['text'] = rustwv, gedcb['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), wv['window']['wx']['onKeyboardInput'](function (dbfeca) {
      dbfeca = dbfeca ? dbfeca['value'] : '', gedcb['multiline'] || -0x1 == dbfeca['indexOf']('\x0a') ? (gedcb['text'] = dbfeca, gedcb['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, upsrq['inputEnter'] = function () {
    nqrpso['inputElement']['target']['focus'] = !0x1;
  }, upsrq['wxinputblur'] = function () {
    upsrq['hideKeyboard']();
  }, upsrq['hideKeyboard'] = function () {
    wv['window']['wx']['offKeyboardConfirm'](), wv['window']['wx']['offKeyboardInput'](), wv['window']['wx']['hideKeyboard']({ 'success': function (efdh) {
        console['log']('隐藏键盘');
      }, 'fail': function (zwy_x$) {
        console['log']('隐藏键盘出错:' + (zwy_x$ ? zwy_x$['errMsg'] : ''));
      } });
  }, upsrq);function upsrq() {}var _$y0xz = function () {
    function adbce() {}zx$vyw(adbce, 'laya.wx.mini.MiniLoader');var bcfade = adbce['prototype'];return bcfade['load'] = function (xvsu, stwvur, $zy01, nokmj, jolnm) {
      void 0x0 === $zy01 && ($zy01 = !0x0), void 0x0 === jolnm && (jolnm = !0x1);var hjlgk = this;0x0 === (hjlgk['_url'] = xvsu)['indexOf']('data:image') ? hjlgk['_type'] = stwvur = 'image' : hjlgk['_type'] = stwvur = stwvur || hjlgk['getTypeFromUrl'](xvsu), hjlgk['_cache'] = $zy01, hjlgk['_data'] = null;var nkmjil = 'ascii';-0x1 != xvsu['indexOf']('.fnt') ? nkmjil = 'utf8' : 'arraybuffer' == stwvur && (nkmjil = '');var kjhfgi = zx_wy$['getFileExtension'](xvsu);if (-0x1 != adbce['_fileTypeArr']['indexOf'](kjhfgi)) wv['EnvConfig']['load']['call'](this, xvsu, stwvur, $zy01, nokmj, jolnm);else {
        if (pmqlno['getFileInfo'](xvsu)) wv['EnvConfig']['load']['call'](this, xvsu, stwvur, $zy01, nokmj, jolnm);else {
          if (-0x1 != xvsu['indexOf']('layaNativeDir/')) {
            if (wv['isZiYu']) {
              var z$_0xy = pmqlno['ziyuFileData'][xvsu];return void hjlgk['onLoaded'](z$_0xy);
            }return cosnole['log']('read read'), void pmqlno['read'](xvsu, nkmjil, new efcgh(adbce, adbce['onReadNativeCallBack'], [nkmjil, xvsu, stwvur, $zy01, nokmj, jolnm, hjlgk]));
          }z$_0xy = '' == jkhlg['rootPath'] ? xvsu : xvsu['split'](jkhlg['rootPath'])[0x0], -0x1 != xvsu['indexOf']('http://') || -0x1 != xvsu['indexOf']('https://') ? wv['EnvConfig']['load']['call'](hjlgk, xvsu, stwvur, $zy01, nokmj, jolnm) : pmqlno['readFile'](z$_0xy, nkmjil, new efcgh(adbce, adbce['onReadNativeCallBack'], [nkmjil, xvsu, stwvur, $zy01, nokmj, jolnm, hjlgk]), xvsu);
        }
      }
    }, bcfade['resMgrLoad'] = function (z$201_, pmloq, ljkhmi, $xwy, egifhd, onqmr, pqsot) {
      void 0x0 === ljkhmi && (ljkhmi = 0x0), void 0x0 === $xwy && ($xwy = !0x1), void 0x0 === egifhd && (egifhd = !0x1), void 0x0 === onqmr && (onqmr = 0x0), void 0x0 === pqsot && (pqsot = 0x3), -0x1 != z$201_['indexOf']('mpack') && console['log']('=============resMgrLoad url:', z$201_), wv['EnvConfig']['resMgrLoad'](z$201_, (ruwtsv, hgef, wz_yx) => {
        adbce['prototype']['resMgrLoadCallBack'](ruwtsv, hgef, wz_yx, pmloq);
      }, ljkhmi, $xwy, egifhd, onqmr, pqsot);
    }, bcfade['resMgrLoadCallBack'] = function (deb, ifdg, wtyu, vtwsru) {
      console['log']('buff:::', deb, wtyu, pmqlno['fileNativeDir'] + '///' + pmqlno['fileListName']), vtwsru(deb, ifdg, wtyu);
    }, bcfade['clearRes'] = function (xzv$w, oln) {
      this['clearRes'](xzv$w, oln = void 0x0 === oln ? !0x1 : oln), oln = pmqlno['getFileInfo'](xzv$w), !oln || -0x1 == xzv$w['indexOf']('http://') && -0x1 == xzv$w['indexOf']('https://') || (oln = oln['md5'], oln = pmqlno['getFileNativePath'](oln), pmqlno['remove'](oln));
    }, adbce['onReadNativeCallBack'] = function (hecgdf, hfgcde, cbdae, onlmqp, idhgfe, $wzv, ilkjh, lnkpm, hmjlik) {
      void 0x0 === onlmqp && (onlmqp = !0x0), void 0x0 === $wzv && ($wzv = !0x1), (lnkpm = void 0x0 === lnkpm ? 0x0 : lnkpm) ? 0x1 == lnkpm && wv['EnvConfig']['load']['call'](ilkjh, hfgcde, cbdae, onlmqp, idhgfe, $wzv) : (hmjlik = 'json' == cbdae || 'atlas' == cbdae ? wv['getJson'](hmjlik['data']) : 'xml' == cbdae ? zx_wy$['parseXMLFromString'](hmjlik['data']) : hmjlik['data'], ilkjh['onLoaded'](hmjlik), !wv['isZiYu'] && wv['isPosMsgYu'] && 'arraybuffer' != cbdae && wx['postMessage']({ 'url': hfgcde, 'data': hmjlik, 'isLoad': !0x0 }));
    }, xwvtus(adbce, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), adbce;
  }(),
      pmqlno = (zx$vyw(fecbd, 'laya.wx.mini.MiniFileMgr', tpq), fecbd['isLoadFile'] = function (urtqp) {
    return -0x1 != fecbd['_fileTypeArr']['indexOf'](urtqp);
  }, fecbd['getFileInfo'] = function (kjgihl) {
    return kjgihl = kjgihl['split']('?')[0x0], kjgihl = fecbd['filesListObj'][kjgihl], null == kjgihl ? null : kjgihl;
  }, fecbd['onFileUpdate'] = function (ghejif, jgfikh) {
    var vtwusr = ghejif['split']('/');ghejif = vtwusr[vtwusr['length'] - 0x1], vtwusr = fecbd['getFileInfo'](jgfikh), null == vtwusr ? fecbd['onSaveFile'](jgfikh, ghejif) : vtwusr['readyUrl'] != jgfikh && fecbd['remove'](ghejif, jgfikh);
  }, fecbd['exits'] = function (vwsxtu, tuyvxw) {
    vwsxtu = fecbd['getFileNativePath'](vwsxtu), fecbd['fs']['getFileInfo']({ 'filePath': vwsxtu, 'success': function (y01_$z) {
        null != tuyvxw && tuyvxw['runWith']([0x0, y01_$z]);
      }, 'fail': function (lomkp) {
        null != tuyvxw && tuyvxw['runWith']([0x1, lomkp]);
      } });
  }, fecbd['read'] = function (wyxutv, fgbdc, spqto, qomlpn) {
    void 0x0 === fgbdc && (fgbdc = 'ascill'), wyxutv = '' != (qomlpn = void 0x0 === qomlpn ? '' : qomlpn) ? fecbd['getFileNativePath'](wyxutv) : wyxutv, fecbd['fs']['readFile']({ 'filePath': wyxutv, 'encoding': fgbdc, 'success': function (rvwust) {
        null != spqto && spqto['runWith']([0x0, rvwust]);
      }, 'fail': function (urstq) {
        urstq && '' != qomlpn ? fecbd['down'](qomlpn, fgbdc, spqto, qomlpn) : null != spqto && spqto['runWith']([0x1]);
      } });
  }, fecbd['readNativeFile'] = function (bcge, dfihge) {
    fecbd['fs']['readFile']({ 'filePath': bcge, 'encoding': '', 'success': function (ghilkj) {
        null != dfihge && dfihge['runWith']([0x0]);
      }, 'fail': function (bfgdc) {
        null != dfihge && dfihge['runWith']([0x1]);
      } });
  }, fecbd['down'] = function (knplo, quvrt, hejg, decafb) {
    void 0x0 === quvrt && (quvrt = 'ascill'), void 0x0 === decafb && (decafb = '');var jfigh = fecbd['getFileNativePath'](decafb);fecbd['wxdown']({ 'url': knplo, 'filePath': jfigh, 'success': function (ptqs) {
        0xc8 === ptqs['statusCode'] && fecbd['readFile'](ptqs['filePath'], quvrt, hejg, decafb);
      }, 'fail': function (gchedf) {
        null != hejg && hejg['runWith']([0x1, gchedf]);
      } })['onProgressUpdate'](function (ehfdcg) {
      null != hejg && hejg['runWith']([0x2, ehfdcg['progress']]);
    });
  }, fecbd['readFile'] = function ($_z0y, jnmok, gbce, fbeda) {
    void 0x0 === fbeda && (fbeda = ''), fecbd['fs']['readFile']({ 'filePath': $_z0y, 'encoding': jnmok = void 0x0 === jnmok ? 'ascill' : jnmok, 'success': function (qsnopr) {
        -0x1 == $_z0y['indexOf']('http://') && -0x1 == $_z0y['indexOf']('https://') || fecbd['onFileUpdate']($_z0y, fbeda), null != gbce && gbce['runWith']([0x0, qsnopr]);
      }, 'fail': function (dcge) {
        dcge && null != gbce && gbce['runWith']([0x1, dcge]);
      } });
  }, fecbd['downImg'] = function (ljkom, zxwv, gdfc) {
    void 0x0 === gdfc && (gdfc = ''), fecbd['wxdown']({ 'url': ljkom, 'success': function (qputr) {
        0xc8 === qputr['statusCode'] && fecbd['copyFile'](qputr['tempFilePath'], gdfc, zxwv);
      }, 'fail': function (fc) {
        null != zxwv && zxwv['runWith']([0x1, fc]);
      } });
  }, fecbd['copyFile'] = function (uxvswt, omlpnk, gjkf) {
    var uq = uxvswt['split']('/'),
        _03412 = uq[uq['length'] - 0x1];omlpnk['split']('?')[0x0];var zw$ = fecbd['getFileInfo'](omlpnk);uq = fecbd['getFileNativePath'](_03412), fecbd['fs']['copyFile']({ 'srcPath': uxvswt, 'destPath': uq, 'success': function (zv$xyw) {
        zw$ ? zw$['readyUrl'] != omlpnk && fecbd['remove'](_03412, omlpnk, gjkf) : (fecbd['onSaveFile'](omlpnk, _03412), null != gjkf && gjkf['runWith']([0x0]));
      }, 'fail': function (ecfdh) {
        null != gjkf && gjkf['runWith']([0x1, ecfdh]);
      } });
  }, fecbd['getFileNativePath'] = function (wytxv) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wytxv;
  }, fecbd['remove'] = function (wz$yxv, uxwsv, imkn) {
    void 0x0 === uxwsv && (uxwsv = '');var mrpon = fecbd['getFileInfo'](uxwsv),
        mokp = fecbd['getFileNativePath'](mrpon['md5']);$1320_['loader']['clearRes'](mrpon['readyUrl']), fecbd['fs']['unlink']({ 'filePath': mokp, 'success': function (iehfjg) {
        '' != uxwsv && fecbd['onSaveFile'](uxwsv, wz$yxv), null != imkn && imkn['runWith']([0x0]);
      }, 'fail': function (urwtsv) {} });
  }, fecbd['onSaveFile'] = function (wyzvux, z0$y1) {
    var pomqln = wyzvux['split']('?')[0x0];fecbd['filesListObj'][pomqln] = { 'md5': z0$y1, 'readyUrl': wyzvux }, fecbd['fs']['writeFile']({ 'filePath': fecbd['fileNativeDir'] + '/' + fecbd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fecbd['filesListObj']), 'success': function (ghlikj) {
        console['log']('写入测试测试成功：', ghlikj);
      }, 'fail': function (pkolm) {
        console['log']('写入测试测试失败：', pkolm);
      } });
  }, fecbd['existDir'] = function (prsqtu, x0_zy$) {
    fecbd['fs']['mkdir']({ 'dirPath': prsqtu, 'success': function (kfihg) {
        null != x0_zy$ && x0_zy$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (yvx$zw) {
        -0x1 != yvx$zw['errMsg']['indexOf']('file already exists') ? fecbd['readSync'](fecbd['fileListName'], 'utf8', x0_zy$) : null != x0_zy$ && x0_zy$['runWith']([0x1, yvx$zw]);
      } });
  }, fecbd['readSync'] = function (lojnk, ponm, _z0$21, qsortp) {
    void 0x0 === ponm && (ponm = 'ascill'), void 0x0 === qsortp && (qsortp = ''), lojnk = fecbd['getFileNativePath'](lojnk);var wytvux;try {
      wytvux = fecbd['fs']['readFileSync'](lojnk), null != _z0$21 && _z0$21['runWith']([0x0, { 'data': wytvux }]);
    } catch (usxwvt) {
      null != _z0$21 && _z0$21['runWith']([0x1]);
    }
  }, fecbd['readCache'] = function () {}, fecbd['writeCache'] = function (jlhm) {
    var $_321 = readyUrl['split']('?')[0x0];fecbd['filesListObj'][$_321] = { 'md5': md5Name, 'readyUrl': readyUrl }, fecbd['fs']['writeFile']({ 'filePath': fecbd['fileNativeDir'] + '/' + fecbd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fecbd['filesListObj']), 'success': function (nmijl) {}, 'fail': function (ljhm) {} });
  }, fecbd['setNativeFileDir'] = function (twyv) {
    fecbd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + twyv;
  }, fecbd['filesListObj'] = {}, fecbd['fileNativeDir'] = null, fecbd['fileListName'] = 'layaairfiles.txt', fecbd['ziyuFileData'] = {}, xwvtus(fecbd, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), fecbd);function fecbd() {
    fecbd['__super']['call'](this);
  }var ihjgkl = function () {
    function zwyxu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, zwyxu['__super']['call'](this), this['_sound'] = zwyxu['_createSound']();
    }zx$vyw(zwyxu, 'laya.wx.mini.MiniSound', tpq);var stvxuw = zwyxu['prototype'];return stvxuw['load'] = function (bedgc) {
      var lhkjim = this,
          nolmpk;function iejhgf() {
        if (null != zwyxu['_null']) lhkjim['_sound']['onCanplay'](zwyxu['_null']), lhkjim['_sound']['onError'](zwyxu['_null']);else try {
          lhkjim['_sound']['onCanplay'](null), lhkjim['_sound']['onError'](null), zwyxu['_null'] = null;
        } catch (nqol) {
          console['warn']('[wxmini] _clearSound:' + nqol), lhkjim['_sound']['onCanplay'](hcgfed), lhkjim['_sound']['onError'](hcgfed), zwyxu['_null'] = hcgfed;
        }
      }function hcgfed() {}bedgc = jkhlg['formatURL'](bedgc), this['url'] = bedgc, zwyxu['_audioCache'][bedgc] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        iejhgf(), nolmpk['loaded'] = !0x0, nolmpk['event']('complete'), zwyxu['_audioCache'][nolmpk['url']] = nolmpk;
      }), this['_sound']['onError'](function (nomkl) {
        console['error']('errCode=' + nomkl['errCode'] + '  errMsg=' + nomkl['errMsg']), iejhgf(), nolmpk['event']('error');
      }), this['_sound']['src'] = bedgc, nolmpk = this);
    }, stvxuw['play'] = function (tqsrpu, wuxvs) {
      void 0x0 === tqsrpu && (tqsrpu = 0x0), void 0x0 === wuxvs && (wuxvs = 0x0), (roqpns = this['url'] == oqnrmp['_tMusic'] ? (zwyxu['_musicAudio'] || (zwyxu['_musicAudio'] = zwyxu['_createSound']()), zwyxu['_musicAudio']) : zwyxu['_createSound']())['src'] = this['url'];var roqpns = new _z0(roqpns);return roqpns['url'] = this['url'], roqpns['loops'] = wuxvs, roqpns['startTime'] = tqsrpu, roqpns['play'](), oqnrmp['addChannel'](roqpns), roqpns;
    }, stvxuw['dispose'] = function () {
      var pqros = zwyxu['_audioCache'][this['url']];pqros && (pqros['src'] = '', delete zwyxu['_audioCache'][this['url']]);
    }, igkjfh(0x0, stvxuw, 'duration', function () {
      return this['_sound']['duration'];
    }), zwyxu['_createSound'] = function () {
      return zwyxu['_id']++, wv['window']['wx']['createInnerAudioContext']();
    }, zwyxu['_musicAudio'] = null, zwyxu['_id'] = 0x0, zwyxu['_audioCache'] = {}, zwyxu['_null'] = void 0x0, zwyxu;
  }(),
      _z0 = function () {
    function gijefh(idfheg) {
      this['_audio'] = null, this['_onEnd'] = null, gijefh['__super']['call'](this), this['_audio'] = idfheg, this['_onEnd'] = zx_wy$['bind'](this['__onEnd'], this), idfheg['onEnded'](this['_onEnd']);
    }zx$vyw(gijefh, 'laya.wx.mini.MiniSoundChannel', difhge);var fecgh = gijefh['prototype'];return fecgh['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && ($1320_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fecgh['__onNull'] = function () {}, fecgh['play'] = function () {
      this['isStopped'] = !0x1, oqnrmp['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, fecgh['stop'] = function () {
      if (this['isStopped'] = !0x0, oqnrmp['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != gijefh['_null']) this['_audio']['onEnded'](gijefh['_null']);else try {
          this['_audio']['onEnded'](null), gijefh['_null'] = null;
        } catch (xyz$) {
          console['warn']('[wxmini] stop:' + xyz$), this['_audio']['onEnded'](zx_wy$['bind'](this['__onNull'], this)), gijefh['_null'] = zx_wy$['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, fecgh['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, fecgh['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, oqnrmp['addChannel'](this), this['_audio']['play']());
    }, igkjfh(0x0, fecgh, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), igkjfh(0x0, fecgh, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), igkjfh(0x0, fecgh, 'volume', function () {
      return 0x1;
    }, function (jgifkh) {}), gijefh['_null'] = void 0x0, gijefh;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (dbef, z_1) {
  'use strict';

  for (var utvyw in Object['defineProperty'](z_1, '__esModule', { 'value': !0x0 }), Laya) {
    var dihf = Laya[utvyw];dihf && dihf['__isclass'] && (z_1[utvyw] = dihf);
  }
});