var _ = wx.y$;
!function (_10423, gebfd) {
  gebfd['un'], gebfd['uns'];var yuxvt = gebfd['static'],
      ehigd = gebfd['class'],
      opknml = gebfd['getset'];gebfd['__newvec'];var fgehdi = laya['utils']['Browser'],
      vzyx$w = (laya['events']['Event'], laya['events']['EventDispatcher']),
      njmlo = laya['resource']['HTMLImage'],
      kjmo = laya['utils']['Handler'],
      afed = laya['display']['Input'],
      jigeh = laya['net']['Loader'];laya['maths']['Matrix'];var hedgfc = laya['renders']['Render'],
      pqmnor = laya['utils']['RunDriver'];laya['media']['Sound'];var xwutvy = laya['media']['SoundChannel'],
      kmlonp = laya['media']['SoundManager'],
      y10_$ = (laya['display']['Stage'], laya['net']['URL']),
      strpqo = laya['utils']['Utils'],
      zvwyxu = (ehigd(nojmlk, 'laya.wx.mini.MiniAdpter'), nojmlk['getJson'] = function (fecgd) {
    return JSON['parse'](fecgd);
  }, nojmlk['init'] = function (ikljm, nlmpo) {
    void 0x0 === ikljm && (ikljm = !0x1), void 0x0 === nlmpo && (nlmpo = !0x1), nojmlk['_inited'] || (nojmlk['window'] = _10423)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (nojmlk['_inited'] = !0x0, nojmlk['isZiYu'] = nlmpo, nojmlk['isPosMsgYu'] = ikljm, nojmlk['EnvConfig'] = {}, nojmlk['isZiYu'] || (wtrvs['setNativeFileDir']('/layaairGame'), wtrvs['existDir'](wtrvs['fileNativeDir'], kjmo['create'](nojmlk, nojmlk['onMkdirCallBack']))), nojmlk['window']['focus'] = function () {}, gebfd['getUrlPath'] = function () {}, nojmlk['window']['logtime'] = function (mkhij) {}, nojmlk['window']['alertTimeLog'] = function (vsrutw) {}, nojmlk['window']['resetShareInfo'] = function () {}, nojmlk['window']['CanvasRenderingContext2D'] = function () {}, nojmlk['window']['CanvasRenderingContext2D']['prototype'] = nojmlk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nojmlk['window']['document']['body']['appendChild'] = function () {}, nojmlk['EnvConfig']['pixelRatioInt'] = 0x0, pqmnor['getPixelRatio'] = nojmlk['pixelRatio'], nojmlk['_preCreateElement'] = fgehdi['createElement'], fgehdi['createElement'] = nojmlk['createElement'], pqmnor['createShaderCondition'] = nojmlk['createShaderCondition'], strpqo['parseXMLFromString'] = nojmlk['parseXMLFromString'], afed['_createInputElement'] = struvw['_createInputElement'], nojmlk['EnvConfig']['load'] = jigeh['prototype']['load'], jigeh['prototype']['load'] = _10$z2['prototype']['load'], nojmlk['isZiYu'] && ikljm && wx['onMessage'](function (trup) {
      trup['isLoad'] && (wtrvs['ziyuFileData'][trup['url']] = trup['data']);
    }));
  }, nojmlk['onMkdirCallBack'] = function (omqpr, afbe) {
    omqpr || (wtrvs['filesListObj'] = JSON['parse'](afbe['data']));
  }, nojmlk['pixelRatio'] = function () {
    if (!nojmlk['EnvConfig']['pixelRatioInt']) try {
      var $_1032 = wx['getSystemInfoSync']();return nojmlk['EnvConfig']['pixelRatioInt'] = $_1032['pixelRatio'], $_1032['pixelRatio'];
    } catch (yzwv$x) {}return nojmlk['EnvConfig']['pixelRatioInt'];
  }, nojmlk['createElement'] = function (yx_$wz) {
    var mqon;if ('canvas' == yx_$wz) return 0x1 == nojmlk['idx'] ? nojmlk['isZiYu'] ? (mqon = sharedCanvas)['style'] = {} : mqon = _10423['canvas'] : mqon = _10423['wx']['createCanvas'](), nojmlk['idx']++, mqon;if ('textarea' == yx_$wz || 'input' == yx_$wz) return nojmlk['onCreateInput'](yx_$wz);if ('div' != yx_$wz) return nojmlk['_preCreateElement'](yx_$wz);return yx_$wz = nojmlk['_preCreateElement'](yx_$wz), (yx_$wz['contains'] = function (omrnqp) {
      return null;
    }, yx_$wz['removeChild'] = function (tsprq) {}, yx_$wz);
  }, nojmlk['onCreateInput'] = function (xuswvt) {
    return xuswvt = nojmlk['_preCreateElement'](xuswvt), (xuswvt['focus'] = struvw['wxinputFocus'], xuswvt['blur'] = struvw['wxinputblur'], xuswvt['style'] = {}, xuswvt['value'] = 0x0, xuswvt['parentElement'] = {}, xuswvt['placeholder'] = {}, xuswvt['type'] = {}, xuswvt['setColor'] = function (lnpmoq) {}, xuswvt['setType'] = function (hkmlij) {}, xuswvt['setFontFace'] = function (pnsroq) {}, xuswvt['addEventListener'] = function (ikjml) {}, xuswvt['contains'] = function (_3420) {
      return null;
    }, xuswvt['removeChild'] = function (zxvuw) {}, xuswvt);
  }, nojmlk['createShaderCondition'] = function ($03_2) {
    var kmjilh = this;return function () {
      return kmjilh[$03_2['replace']('this.', '')];
    };
  }, nojmlk['EnvConfig'] = null, nojmlk['window'] = null, nojmlk['_preCreateElement'] = null, nojmlk['_inited'] = !0x1, nojmlk['wxRequest'] = null, nojmlk['systemInfo'] = null, nojmlk['version'] = '0.0.1', nojmlk['isZiYu'] = !0x1, nojmlk['isPosMsgYu'] = !0x1, nojmlk['parseXMLFromString'] = function (pqrsu) {
    var oprs;pqrsu = pqrsu['replace'](/>\s+</g, '><');try {
      oprs = new _10423['Parser']['DOMParser']()['parseFromString'](pqrsu, 'text/xml');
    } catch (uqtrsp) {
      throw '需要引入xml解析库文件';
    }return oprs;
  }, nojmlk['idx'] = 0x1, nojmlk);function nojmlk() {}ehigd(uvtwy, 'laya.wx.mini.MiniImage'), uvtwy['prototype']['_loadImage'] = function (igfdeh) {
    var rposq = !0x1;-0x1 == igfdeh['indexOf']('layaNativeDir/') && (rposq = !0x0, igfdeh = y10_$['formatURL'](igfdeh)), wtrvs['getFileInfo'](igfdeh) ? uvtwy['onCreateImage'](igfdeh, this, !rposq) : -0x1 != igfdeh['indexOf']('http://') || -0x1 != igfdeh['indexOf']('https://') ? wtrvs['downImg'](igfdeh, new kjmo(uvtwy, uvtwy['onDownImgCallBack'], [igfdeh, this]), igfdeh) : uvtwy['onCreateImage'](igfdeh, this, !0x0);
  }, uvtwy['onDownImgCallBack'] = function (rwvus, dgecfh, klmoj) {
    klmoj ? dgecfh['onError'](null) : uvtwy['onCreateImage'](rwvus, dgecfh);
  }, uvtwy['onCreateImage'] = function (vqr, ptor, khfjig) {
    var mikl, jlkn;function rmp() {
      jlkn['onload'] = null, jlkn['onerror'] = null, delete ptor['imgCache'][vqr];
    }mikl = (khfjig = void 0x0 === khfjig ? !0x1 : khfjig) ? vqr : (omkpn = wtrvs['getFileInfo'](vqr)['md5'], wtrvs['getFileNativePath'](omkpn)), null == ptor['imgCache'] && (ptor['imgCache'] = {}), khfjig = function () {
      rmp(), ptor['onLoaded'](jlkn);
    };var omkpn = function () {
      rmp(), ptor['event']('error', 'Load image failed');
    };'nativeimage' == ptor['_type'] ? ((jlkn = new fgehdi['window']['Image']())['crossOrigin'] = '', jlkn['onload'] = khfjig, jlkn['onerror'] = omkpn, jlkn['src'] = mikl, ptor['imgCache'][vqr] = jlkn) : new njmlo['create'](mikl, { 'onload': khfjig, 'onerror': omkpn, 'onCreate': function (uwvrst) {
        jlkn = uwvrst, ptor['imgCache'][vqr] = uwvrst;
      } });
  };function uvtwy() {}var struvw = (ehigd(hdefig, 'laya.wx.mini.MiniInput'), hdefig['_createInputElement'] = function () {
    afed['_initInput'](afed['area'] = fgehdi['createElement']('textarea')), afed['_initInput'](afed['input'] = fgehdi['createElement']('input')), afed['inputContainer'] = fgehdi['createElement']('div'), afed['inputContainer']['style']['position'] = 'absolute', afed['inputContainer']['style']['zIndex'] = 0x186a0, fgehdi['container']['appendChild'](afed['inputContainer']), afed['inputContainer']['setPos'] = function (omqpln, cfbeg) {
      afed['inputContainer']['style']['left'] = omqpln + 'px', afed['inputContainer']['style']['top'] = cfbeg + 'px';
    }, gebfd['stage']['on']('resize', null, hdefig['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mpkon) {
      _10423['dispatchEvent'] && _10423['dispatchEvent']('resize');
    }), kmlonp['_soundClass'] = z$xy, kmlonp['_musicClass'] = z$xy;
  }, hdefig['_onStageResize'] = function () {
    gebfd['stage']['_canvasTransform']['identity']()['scale'](fgehdi['width'] / hedgfc['canvas']['width'] / pqmnor['getPixelRatio'](), fgehdi['height'] / hedgfc['canvas']['height'] / pqmnor['getPixelRatio']());
  }, hdefig['wxinputFocus'] = function (gidhe) {
    var dhcfeg = afed['inputElement']['target'];dhcfeg && !dhcfeg['editable'] || (zvwyxu['window']['wx']['offKeyboardConfirm'](), zvwyxu['window']['wx']['offKeyboardInput'](), zvwyxu['window']['wx']['showKeyboard']({ 'defaultValue': dhcfeg['text'], 'maxLength': dhcfeg['maxChars'], 'multiple': dhcfeg['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (y$x_z) {}, 'fail': function (yxtwvu) {} }), zvwyxu['window']['wx']['onKeyboardConfirm'](function (gcdbef) {
      gcdbef = gcdbef ? gcdbef['value'] : '', (dhcfeg['text'] = gcdbef, dhcfeg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), zvwyxu['window']['wx']['onKeyboardInput'](function (xy$0_z) {
      xy$0_z = xy$0_z ? xy$0_z['value'] : '', dhcfeg['multiline'] || -0x1 == xy$0_z['indexOf']('\x0a') ? (dhcfeg['text'] = xy$0_z, dhcfeg['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, hdefig['inputEnter'] = function () {
    afed['inputElement']['target']['focus'] = !0x1;
  }, hdefig['wxinputblur'] = function () {
    hdefig['hideKeyboard']();
  }, hdefig['hideKeyboard'] = function () {
    zvwyxu['window']['wx']['offKeyboardConfirm'](), zvwyxu['window']['wx']['offKeyboardInput'](), zvwyxu['window']['wx']['hideKeyboard']({ 'success': function (dcafe) {
        console['log']('隐藏键盘');
      }, 'fail': function (ghfedi) {
        console['log']('隐藏键盘出错:' + (ghfedi ? ghfedi['errMsg'] : ''));
      } });
  }, hdefig);function hdefig() {}var _10$z2 = function () {
    function uwyxt() {}ehigd(uwyxt, 'laya.wx.mini.MiniLoader');var wsrutv = uwyxt['prototype'];return wsrutv['load'] = function (nlmijk, igfhk, orsqt, qust, fhecg) {
      void 0x0 === orsqt && (orsqt = !0x0), void 0x0 === fhecg && (fhecg = !0x1);var yz0_x$ = this;0x0 === (yz0_x$['_url'] = nlmijk)['indexOf']('data:image') ? yz0_x$['_type'] = igfhk = 'image' : yz0_x$['_type'] = igfhk = igfhk || yz0_x$['getTypeFromUrl'](nlmijk), yz0_x$['_cache'] = orsqt, yz0_x$['_data'] = null;var w$xz_ = 'ascii';-0x1 != nlmijk['indexOf']('.fnt') ? w$xz_ = 'utf8' : 'arraybuffer' == igfhk && (w$xz_ = '');var _12034 = strpqo['getFileExtension'](nlmijk);if (-0x1 != uwyxt['_fileTypeArr']['indexOf'](_12034)) zvwyxu['EnvConfig']['load']['call'](this, nlmijk, igfhk, orsqt, qust, fhecg);else {
        if (wtrvs['getFileInfo'](nlmijk)) zvwyxu['EnvConfig']['load']['call'](this, nlmijk, igfhk, orsqt, qust, fhecg);else {
          if (-0x1 != nlmijk['indexOf']('layaNativeDir/')) {
            if (zvwyxu['isZiYu']) {
              var yxtuw = wtrvs['ziyuFileData'][nlmijk];return void yz0_x$['onLoaded'](yxtuw);
            }return cosnole['log']('read read'), void wtrvs['read'](nlmijk, w$xz_, new kjmo(uwyxt, uwyxt['onReadNativeCallBack'], [w$xz_, nlmijk, igfhk, orsqt, qust, fhecg, yz0_x$]));
          }yxtuw = '' == y10_$['rootPath'] ? nlmijk : nlmijk['split'](y10_$['rootPath'])[0x0], -0x1 != nlmijk['indexOf']('http://') || -0x1 != nlmijk['indexOf']('https://') ? zvwyxu['EnvConfig']['load']['call'](yz0_x$, nlmijk, igfhk, orsqt, qust, fhecg) : wtrvs['readFile'](yxtuw, w$xz_, new kjmo(uwyxt, uwyxt['onReadNativeCallBack'], [w$xz_, nlmijk, igfhk, orsqt, qust, fhecg, yz0_x$]), nlmijk);
        }
      }
    }, wsrutv['resMgrLoad'] = function ($zwy, ormn, rqtos, lihg, vwyux, cfhgde, promnq) {
      void 0x0 === rqtos && (rqtos = 0x0), void 0x0 === lihg && (lihg = !0x1), void 0x0 === vwyux && (vwyux = !0x1), void 0x0 === cfhgde && (cfhgde = 0x0), void 0x0 === promnq && (promnq = 0x3), -0x1 != $zwy['indexOf']('mpack') && console['log']('=============resMgrLoad url:', $zwy), zvwyxu['EnvConfig']['resMgrLoad']($zwy, (jikmn, pqnrmo, klhjgi) => {
        uwyxt['prototype']['resMgrLoadCallBack'](jikmn, pqnrmo, klhjgi, ormn);
      }, rqtos, lihg, vwyux, cfhgde, promnq);
    }, wsrutv['resMgrLoadCallBack'] = function (efijhg, psqtur, lnjokm, fdebc) {
      console['log']('buff:::', efijhg, lnjokm, wtrvs['fileNativeDir'] + '///' + wtrvs['fileListName']), fdebc(efijhg, psqtur, lnjokm);
    }, wsrutv['clearRes'] = function (omnkpl, $1z_y) {
      this['clearRes'](omnkpl, $1z_y = void 0x0 === $1z_y ? !0x1 : $1z_y), $1z_y = wtrvs['getFileInfo'](omnkpl), !$1z_y || -0x1 == omnkpl['indexOf']('http://') && -0x1 == omnkpl['indexOf']('https://') || ($1z_y = $1z_y['md5'], $1z_y = wtrvs['getFileNativePath']($1z_y), wtrvs['remove']($1z_y));
    }, uwyxt['onReadNativeCallBack'] = function (hecdf, hjkilm, dgehi, qustrv, klnom, mnpoq, xuywtv, vsrqt, hmikl) {
      void 0x0 === qustrv && (qustrv = !0x0), void 0x0 === mnpoq && (mnpoq = !0x1), (vsrqt = void 0x0 === vsrqt ? 0x0 : vsrqt) ? 0x1 == vsrqt && zvwyxu['EnvConfig']['load']['call'](xuywtv, hjkilm, dgehi, qustrv, klnom, mnpoq) : (hmikl = 'json' == dgehi || 'atlas' == dgehi ? zvwyxu['getJson'](hmikl['data']) : 'xml' == dgehi ? strpqo['parseXMLFromString'](hmikl['data']) : hmikl['data'], xuywtv['onLoaded'](hmikl), !zvwyxu['isZiYu'] && zvwyxu['isPosMsgYu'] && 'arraybuffer' != dgehi && wx['postMessage']({ 'url': hjkilm, 'data': hmikl, 'isLoad': !0x0 }));
    }, yuxvt(uwyxt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), uwyxt;
  }(),
      wtrvs = (ehigd(z$0_x, 'laya.wx.mini.MiniFileMgr', vzyx$w), z$0_x['isLoadFile'] = function (khjigf) {
    return -0x1 != z$0_x['_fileTypeArr']['indexOf'](khjigf);
  }, z$0_x['getFileInfo'] = function (npklo) {
    return npklo = npklo['split']('?')[0x0], npklo = z$0_x['filesListObj'][npklo], null == npklo ? null : npklo;
  }, z$0_x['onFileUpdate'] = function (higkjf, xzvuw) {
    var z1y_0 = higkjf['split']('/');higkjf = z1y_0[z1y_0['length'] - 0x1], z1y_0 = z$0_x['getFileInfo'](xzvuw), null == z1y_0 ? z$0_x['onSaveFile'](xzvuw, higkjf) : z1y_0['readyUrl'] != xzvuw && z$0_x['remove'](higkjf, xzvuw);
  }, z$0_x['exits'] = function (zxyu, xzw_y) {
    zxyu = z$0_x['getFileNativePath'](zxyu), z$0_x['fs']['getFileInfo']({ 'filePath': zxyu, 'success': function (klmpn) {
        null != xzw_y && xzw_y['runWith']([0x0, klmpn]);
      }, 'fail': function (degfh) {
        null != xzw_y && xzw_y['runWith']([0x1, degfh]);
      } });
  }, z$0_x['read'] = function (fkhj, kimljh, orspqn, txvsw) {
    void 0x0 === kimljh && (kimljh = 'ascill'), fkhj = '' != (txvsw = void 0x0 === txvsw ? '' : txvsw) ? z$0_x['getFileNativePath'](fkhj) : fkhj, z$0_x['fs']['readFile']({ 'filePath': fkhj, 'encoding': kimljh, 'success': function (klmin) {
        null != orspqn && orspqn['runWith']([0x0, klmin]);
      }, 'fail': function (qurvs) {
        qurvs && '' != txvsw ? z$0_x['down'](txvsw, kimljh, orspqn, txvsw) : null != orspqn && orspqn['runWith']([0x1]);
      } });
  }, z$0_x['readNativeFile'] = function (y0x$, osqtp) {
    z$0_x['fs']['readFile']({ 'filePath': y0x$, 'encoding': '', 'success': function (bdefg) {
        null != osqtp && osqtp['runWith']([0x0]);
      }, 'fail': function (iegd) {
        null != osqtp && osqtp['runWith']([0x1]);
      } });
  }, z$0_x['down'] = function (tuxvsw, srwut, tqrosp, idgeh) {
    void 0x0 === srwut && (srwut = 'ascill'), void 0x0 === idgeh && (idgeh = '');var xuvsw = z$0_x['getFileNativePath'](idgeh);z$0_x['wxdown']({ 'url': tuxvsw, 'filePath': xuvsw, 'success': function (omplkn) {
        0xc8 === omplkn['statusCode'] && z$0_x['readFile'](omplkn['filePath'], srwut, tqrosp, idgeh);
      }, 'fail': function (hgji) {
        null != tqrosp && tqrosp['runWith']([0x1, hgji]);
      } })['onProgressUpdate'](function (nmokl) {
      null != tqrosp && tqrosp['runWith']([0x2, nmokl['progress']]);
    });
  }, z$0_x['readFile'] = function (w_zxy$, hm, srtoqp, opnqmr) {
    void 0x0 === opnqmr && (opnqmr = ''), z$0_x['fs']['readFile']({ 'filePath': w_zxy$, 'encoding': hm = void 0x0 === hm ? 'ascill' : hm, 'success': function (hlj) {
        -0x1 == w_zxy$['indexOf']('http://') && -0x1 == w_zxy$['indexOf']('https://') || z$0_x['onFileUpdate'](w_zxy$, opnqmr), null != srtoqp && srtoqp['runWith']([0x0, hlj]);
      }, 'fail': function (zuv) {
        zuv && null != srtoqp && srtoqp['runWith']([0x1, zuv]);
      } });
  }, z$0_x['downImg'] = function (begc, mnplok, opnqlm) {
    void 0x0 === opnqlm && (opnqlm = ''), z$0_x['wxdown']({ 'url': begc, 'success': function (srnoq) {
        0xc8 === srnoq['statusCode'] && z$0_x['copyFile'](srnoq['tempFilePath'], opnqlm, mnplok);
      }, 'fail': function (mklijn) {
        null != mnplok && mnplok['runWith']([0x1, mklijn]);
      } });
  }, z$0_x['copyFile'] = function (sutqr, hfeigd, cghdf) {
    var likhmj = sutqr['split']('/'),
        feid = likhmj[likhmj['length'] - 0x1];hfeigd['split']('?')[0x0];var urvtsw = z$0_x['getFileInfo'](hfeigd);likhmj = z$0_x['getFileNativePath'](feid), z$0_x['fs']['copyFile']({ 'srcPath': sutqr, 'destPath': likhmj, 'success': function (eijgfh) {
        urvtsw ? urvtsw['readyUrl'] != hfeigd && z$0_x['remove'](feid, hfeigd, cghdf) : (z$0_x['onSaveFile'](hfeigd, feid), null != cghdf && cghdf['runWith']([0x0]));
      }, 'fail': function (jehfig) {
        null != cghdf && cghdf['runWith']([0x1, jehfig]);
      } });
  }, z$0_x['getFileNativePath'] = function (qurtvs) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qurtvs;
  }, z$0_x['remove'] = function (pnqors, $301_, nmrpoq) {
    void 0x0 === $301_ && ($301_ = '');var utrsvq = z$0_x['getFileInfo']($301_),
        ighkf = z$0_x['getFileNativePath'](utrsvq['md5']);gebfd['loader']['clearRes'](utrsvq['readyUrl']), z$0_x['fs']['unlink']({ 'filePath': ighkf, 'success': function (omjlnk) {
        '' != $301_ && z$0_x['onSaveFile']($301_, pnqors), null != nmrpoq && nmrpoq['runWith']([0x0]);
      }, 'fail': function (rqotp) {} });
  }, z$0_x['onSaveFile'] = function (qsrutv, bedcfg) {
    var _312 = qsrutv['split']('?')[0x0];z$0_x['filesListObj'][_312] = { 'md5': bedcfg, 'readyUrl': qsrutv }, z$0_x['fs']['writeFile']({ 'filePath': z$0_x['fileNativeDir'] + '/' + z$0_x['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z$0_x['filesListObj']), 'success': function (nkmjo) {
        console['log']('写入测试测试成功：', nkmjo);
      }, 'fail': function (posnq) {
        console['log']('写入测试测试失败：', posnq);
      } });
  }, z$0_x['existDir'] = function (xwsvtu, qomln) {
    z$0_x['fs']['mkdir']({ 'dirPath': xwsvtu, 'success': function (bgdf) {
        null != qomln && qomln['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (njilmk) {
        -0x1 != njilmk['errMsg']['indexOf']('file already exists') ? z$0_x['readSync'](z$0_x['fileListName'], 'utf8', qomln) : null != qomln && qomln['runWith']([0x1, njilmk]);
      } });
  }, z$0_x['readSync'] = function (fiehj, lmnkji, acdebf, rspuq) {
    void 0x0 === lmnkji && (lmnkji = 'ascill'), void 0x0 === rspuq && (rspuq = ''), fiehj = z$0_x['getFileNativePath'](fiehj);var utpqs;try {
      utpqs = z$0_x['fs']['readFileSync'](fiehj), null != acdebf && acdebf['runWith']([0x0, { 'data': utpqs }]);
    } catch (pmqorn) {
      null != acdebf && acdebf['runWith']([0x1]);
    }
  }, z$0_x['readCache'] = function () {}, z$0_x['writeCache'] = function (cegfhd) {
    var kigjhf = readyUrl['split']('?')[0x0];z$0_x['filesListObj'][kigjhf] = { 'md5': md5Name, 'readyUrl': readyUrl }, z$0_x['fs']['writeFile']({ 'filePath': z$0_x['fileNativeDir'] + '/' + z$0_x['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z$0_x['filesListObj']), 'success': function (_2301$) {}, 'fail': function (zwuxy) {} });
  }, z$0_x['setNativeFileDir'] = function (higdfe) {
    z$0_x['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + higdfe;
  }, z$0_x['filesListObj'] = {}, z$0_x['fileNativeDir'] = null, z$0_x['fileListName'] = 'layaairfiles.txt', z$0_x['ziyuFileData'] = {}, yuxvt(z$0_x, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), z$0_x);function z$0_x() {
    z$0_x['__super']['call'](this);
  }var z$xy = function () {
    function ljkno() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, ljkno['__super']['call'](this), this['_sound'] = ljkno['_createSound']();
    }ehigd(ljkno, 'laya.wx.mini.MiniSound', vzyx$w);var cbafd = ljkno['prototype'];return cbafd['load'] = function ($z0_1) {
      var porsqt = this,
          baec;function knjl() {
        if (null != ljkno['_null']) porsqt['_sound']['onCanplay'](ljkno['_null']), porsqt['_sound']['onError'](ljkno['_null']);else try {
          porsqt['_sound']['onCanplay'](null), porsqt['_sound']['onError'](null), ljkno['_null'] = null;
        } catch (uxtsv) {
          console['warn']('[wxmini] _clearSound:' + uxtsv), porsqt['_sound']['onCanplay'](jmknl), porsqt['_sound']['onError'](jmknl), ljkno['_null'] = jmknl;
        }
      }function jmknl() {}$z0_1 = y10_$['formatURL']($z0_1), this['url'] = $z0_1, ljkno['_audioCache'][$z0_1] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        knjl(), baec['loaded'] = !0x0, baec['event']('complete'), ljkno['_audioCache'][baec['url']] = baec;
      }), this['_sound']['onError'](function (abce) {
        console['error']('errCode=' + abce['errCode'] + '  errMsg=' + abce['errMsg']), knjl(), baec['event']('error');
      }), this['_sound']['src'] = $z0_1, baec = this);
    }, cbafd['play'] = function (limkh, lkimjn) {
      void 0x0 === limkh && (limkh = 0x0), void 0x0 === lkimjn && (lkimjn = 0x0), (vzxwu = this['url'] == kmlonp['_tMusic'] ? (ljkno['_musicAudio'] || (ljkno['_musicAudio'] = ljkno['_createSound']()), ljkno['_musicAudio']) : ljkno['_createSound']())['src'] = this['url'];var vzxwu = new $_1230(vzxwu);return vzxwu['url'] = this['url'], vzxwu['loops'] = lkimjn, vzxwu['startTime'] = limkh, vzxwu['play'](), kmlonp['addChannel'](vzxwu), vzxwu;
    }, cbafd['dispose'] = function () {
      var rqpno = ljkno['_audioCache'][this['url']];rqpno && (rqpno['src'] = '', delete ljkno['_audioCache'][this['url']]);
    }, opknml(0x0, cbafd, 'duration', function () {
      return this['_sound']['duration'];
    }), ljkno['_createSound'] = function () {
      return ljkno['_id']++, zvwyxu['window']['wx']['createInnerAudioContext']();
    }, ljkno['_musicAudio'] = null, ljkno['_id'] = 0x0, ljkno['_audioCache'] = {}, ljkno['_null'] = void 0x0, ljkno;
  }(),
      $_1230 = function () {
    function stqvur(ghkfij) {
      this['_audio'] = null, this['_onEnd'] = null, stqvur['__super']['call'](this), this['_audio'] = ghkfij, this['_onEnd'] = strpqo['bind'](this['__onEnd'], this), ghkfij['onEnded'](this['_onEnd']);
    }ehigd(stqvur, 'laya.wx.mini.MiniSoundChannel', xwutvy);var dbefc = stqvur['prototype'];return dbefc['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (gebfd['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dbefc['__onNull'] = function () {}, dbefc['play'] = function () {
      this['isStopped'] = !0x1, kmlonp['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, dbefc['stop'] = function () {
      if (this['isStopped'] = !0x0, kmlonp['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != stqvur['_null']) this['_audio']['onEnded'](stqvur['_null']);else try {
          this['_audio']['onEnded'](null), stqvur['_null'] = null;
        } catch (_31$02) {
          console['warn']('[wxmini] stop:' + _31$02), this['_audio']['onEnded'](strpqo['bind'](this['__onNull'], this)), stqvur['_null'] = strpqo['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, dbefc['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, dbefc['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, kmlonp['addChannel'](this), this['_audio']['play']());
    }, opknml(0x0, dbefc, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), opknml(0x0, dbefc, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), opknml(0x0, dbefc, 'volume', function () {
      return 0x1;
    }, function (z0$1y_) {}), stqvur['_null'] = void 0x0, stqvur;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (uxstwv, miklnj) {
  'use strict';

  for (var hecf in Object['defineProperty'](miklnj, '__esModule', { 'value': !0x0 }), Laya) {
    var jhklgi = Laya[hecf];jhklgi && jhklgi['__isclass'] && (miklnj[hecf] = jhklgi);
  }
});