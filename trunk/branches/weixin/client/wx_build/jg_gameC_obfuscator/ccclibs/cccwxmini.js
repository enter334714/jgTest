var p = wx.$h;
!function (prnqs, ehcgdf) {
  ehcgdf['un'], ehcgdf['uns'];var qmorn = ehcgdf['static'],
      $120_z = ehcgdf['class'],
      z$wyv = ehcgdf['getset'];ehcgdf['__newvec'];var vwsx = laya['utils']['Browser'],
      dfea = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ijhge = laya['resource']['HTMLImage'],
      stqrpv = laya['utils']['Handler'],
      kmhil = laya['display']['Input'],
      npkmo = laya['net']['Loader'];laya['maths']['Matrix'];var $_102z = laya['renders']['Render'],
      ijfgeh = laya['utils']['RunDriver'];laya['media']['Sound'];var hifged = laya['media']['SoundChannel'],
      cfdg = laya['media']['SoundManager'],
      kjhilm = (laya['display']['Stage'], laya['net']['URL']),
      hjlgki = laya['utils']['Utils'],
      echdf = ($120_z($xzv, 'laya.wx.mini.MiniAdpter'), $xzv['getJson'] = function ($yv) {
    return JSON['parse']($yv);
  }, $xzv['init'] = function (ehij, zywt) {
    void 0x0 === ehij && (ehij = !0x1), void 0x0 === zywt && (zywt = !0x1), $xzv['_inited'] || ($xzv['window'] = prnqs)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || ($xzv['_inited'] = !0x0, $xzv['isZiYu'] = zywt, $xzv['isPosMsgYu'] = ehij, $xzv['EnvConfig'] = {}, $xzv['isZiYu'] || (hkmlji['setNativeFileDir']('/layaairGame'), hkmlji['existDir'](hkmlji['fileNativeDir'], stqrpv['create']($xzv, $xzv['onMkdirCallBack']))), $xzv['window']['focus'] = function () {}, ehcgdf['getUrlPath'] = function () {}, $xzv['window']['logtime'] = function (z$12) {}, $xzv['window']['alertTimeLog'] = function (deghfi) {}, $xzv['window']['resetShareInfo'] = function () {}, $xzv['window']['CanvasRenderingContext2D'] = function () {}, $xzv['window']['CanvasRenderingContext2D']['prototype'] = $xzv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $xzv['window']['document']['body']['appendChild'] = function () {}, $xzv['EnvConfig']['pixelRatioInt'] = 0x0, ijfgeh['getPixelRatio'] = $xzv['pixelRatio'], $xzv['_preCreateElement'] = vwsx['createElement'], vwsx['createElement'] = $xzv['createElement'], ijfgeh['createShaderCondition'] = $xzv['createShaderCondition'], hjlgki['parseXMLFromString'] = $xzv['parseXMLFromString'], kmhil['_createInputElement'] = vqswt['_createInputElement'], $xzv['EnvConfig']['load'] = npkmo['prototype']['load'], npkmo['prototype']['load'] = igfhde['prototype']['load'], $xzv['isZiYu'] && ehij && wx['onMessage'](function (kljnom) {
      kljnom['isLoad'] && (hkmlji['ziyuFileData'][kljnom['url']] = kljnom['data']);
    }));
  }, $xzv['onMkdirCallBack'] = function ($_wzy, ebfdc) {
    $_wzy || (hkmlji['filesListObj'] = JSON['parse'](ebfdc['data']));
  }, $xzv['pixelRatio'] = function () {
    if (!$xzv['EnvConfig']['pixelRatioInt']) try {
      var wtyzxv = wx['getSystemInfoSync']();return $xzv['EnvConfig']['pixelRatioInt'] = wtyzxv['pixelRatio'], wtyzxv['pixelRatio'];
    } catch (nrospq) {}return $xzv['EnvConfig']['pixelRatioInt'];
  }, $xzv['createElement'] = function (lmpokn) {
    var noqrsp;if ('canvas' == lmpokn) return 0x1 == $xzv['idx'] ? $xzv['isZiYu'] ? (noqrsp = sharedCanvas)['style'] = {} : noqrsp = prnqs['canvas'] : noqrsp = prnqs['wx']['createCanvas'](), $xzv['idx']++, noqrsp;if ('textarea' == lmpokn || 'input' == lmpokn) return $xzv['onCreateInput'](lmpokn);if ('div' != lmpokn) return $xzv['_preCreateElement'](lmpokn);return lmpokn = $xzv['_preCreateElement'](lmpokn), (lmpokn['contains'] = function (wvx$y) {
      return null;
    }, lmpokn['removeChild'] = function (kgjfh) {}, lmpokn);
  }, $xzv['onCreateInput'] = function (pqns) {
    return pqns = $xzv['_preCreateElement'](pqns), (pqns['focus'] = vqswt['wxinputFocus'], pqns['blur'] = vqswt['wxinputblur'], pqns['style'] = {}, pqns['value'] = 0x0, pqns['parentElement'] = {}, pqns['placeholder'] = {}, pqns['type'] = {}, pqns['setColor'] = function (oplqm) {}, pqns['setType'] = function (iljknm) {}, pqns['setFontFace'] = function (nomk) {}, pqns['addEventListener'] = function (rsotqp) {}, pqns['contains'] = function (qponml) {
      return null;
    }, pqns['removeChild'] = function (hkijgf) {}, pqns);
  }, $xzv['createShaderCondition'] = function (tprv) {
    var zx$_0 = this;return function () {
      return zx$_0[tprv['replace']('this.', '')];
    };
  }, $xzv['EnvConfig'] = null, $xzv['window'] = null, $xzv['_preCreateElement'] = null, $xzv['_inited'] = !0x1, $xzv['wxRequest'] = null, $xzv['systemInfo'] = null, $xzv['version'] = '0.0.1', $xzv['isZiYu'] = !0x1, $xzv['isPosMsgYu'] = !0x1, $xzv['parseXMLFromString'] = function (_41230) {
    var nilmk;_41230 = _41230['replace'](/>\s+</g, '><');try {
      nilmk = new prnqs['Parser']['DOMParser']()['parseFromString'](_41230, 'text/xml');
    } catch (vxs) {
      throw '需要引入xml解析库文件';
    }return nilmk;
  }, $xzv['idx'] = 0x1, $xzv);function $xzv() {}$120_z(rtsw, 'laya.wx.mini.MiniImage'), rtsw['prototype']['_loadImage'] = function (aefc) {
    var jkml = !0x1;-0x1 == aefc['indexOf']('layaNativeDir/') && (jkml = !0x0, aefc = kjhilm['formatURL'](aefc)), hkmlji['getFileInfo'](aefc) ? rtsw['onCreateImage'](aefc, this, !jkml) : -0x1 != aefc['indexOf']('http://') || -0x1 != aefc['indexOf']('https://') ? hkmlji['downImg'](aefc, new stqrpv(rtsw, rtsw['onDownImgCallBack'], [aefc, this]), aefc) : rtsw['onCreateImage'](aefc, this, !0x0);
  }, rtsw['onDownImgCallBack'] = function ($02_31, xzywvt, fjighe) {
    fjighe ? xzywvt['onError'](null) : rtsw['onCreateImage']($02_31, xzywvt);
  }, rtsw['onCreateImage'] = function (_1$03, w_zx$, acfbed) {
    var gcdbf, hiefd;function _y$z0() {
      hiefd['onload'] = null, hiefd['onerror'] = null, delete w_zx$['imgCache'][_1$03];
    }gcdbf = (acfbed = void 0x0 === acfbed ? !0x1 : acfbed) ? _1$03 : (qpor = hkmlji['getFileInfo'](_1$03)['md5'], hkmlji['getFileNativePath'](qpor)), null == w_zx$['imgCache'] && (w_zx$['imgCache'] = {}), acfbed = function () {
      _y$z0(), w_zx$['onLoaded'](hiefd);
    };var qpor = function () {
      _y$z0(), w_zx$['event']('error', 'Load image failed');
    };'nativeimage' == w_zx$['_type'] ? ((hiefd = new vwsx['window']['Image']())['crossOrigin'] = '', hiefd['onload'] = acfbed, hiefd['onerror'] = qpor, hiefd['src'] = gcdbf, w_zx$['imgCache'][_1$03] = hiefd) : new ijhge['create'](gcdbf, { 'onload': acfbed, 'onerror': qpor, 'onCreate': function (hfgeid) {
        hiefd = hfgeid, w_zx$['imgCache'][_1$03] = hfgeid;
      } });
  };function rtsw() {}var vqswt = ($120_z(pstr, 'laya.wx.mini.MiniInput'), pstr['_createInputElement'] = function () {
    kmhil['_initInput'](kmhil['area'] = vwsx['createElement']('textarea')), kmhil['_initInput'](kmhil['input'] = vwsx['createElement']('input')), kmhil['inputContainer'] = vwsx['createElement']('div'), kmhil['inputContainer']['style']['position'] = 'absolute', kmhil['inputContainer']['style']['zIndex'] = 0x186a0, vwsx['container']['appendChild'](kmhil['inputContainer']), kmhil['inputContainer']['setPos'] = function (ywz$x_, nkplom) {
      kmhil['inputContainer']['style']['left'] = ywz$x_ + 'px', kmhil['inputContainer']['style']['top'] = nkplom + 'px';
    }, ehcgdf['stage']['on']('resize', null, pstr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_03) {
      prnqs['dispatchEvent'] && prnqs['dispatchEvent']('resize');
    }), cfdg['_soundClass'] = nolkp, cfdg['_musicClass'] = nolkp;
  }, pstr['_onStageResize'] = function () {
    ehcgdf['stage']['_canvasTransform']['identity']()['scale'](vwsx['width'] / $_102z['canvas']['width'] / ijfgeh['getPixelRatio'](), vwsx['height'] / $_102z['canvas']['height'] / ijfgeh['getPixelRatio']());
  }, pstr['wxinputFocus'] = function (normqp) {
    var jifhge = kmhil['inputElement']['target'];jifhge && !jifhge['editable'] || (echdf['window']['wx']['offKeyboardConfirm'](), echdf['window']['wx']['offKeyboardInput'](), echdf['window']['wx']['showKeyboard']({ 'defaultValue': jifhge['text'], 'maxLength': jifhge['maxChars'], 'multiple': jifhge['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function ($_z1) {}, 'fail': function (poqr) {} }), echdf['window']['wx']['onKeyboardConfirm'](function (snorpq) {
      snorpq = snorpq ? snorpq['value'] : '', (jifhge['text'] = snorpq, jifhge['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), echdf['window']['wx']['onKeyboardInput'](function (bcfa) {
      bcfa = bcfa ? bcfa['value'] : '', jifhge['multiline'] || -0x1 == bcfa['indexOf']('\x0a') ? (jifhge['text'] = bcfa, jifhge['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, pstr['inputEnter'] = function () {
    kmhil['inputElement']['target']['focus'] = !0x1;
  }, pstr['wxinputblur'] = function () {
    pstr['hideKeyboard']();
  }, pstr['hideKeyboard'] = function () {
    echdf['window']['wx']['offKeyboardConfirm'](), echdf['window']['wx']['offKeyboardInput'](), echdf['window']['wx']['hideKeyboard']({ 'success': function (ytzw) {
        console['log']('隐藏键盘');
      }, 'fail': function (stwvr) {
        console['log']('隐藏键盘出错:' + (stwvr ? stwvr['errMsg'] : ''));
      } });
  }, pstr);function pstr() {}var igfhde = function () {
    function vpsqrt() {}$120_z(vpsqrt, 'laya.wx.mini.MiniLoader');var z$10y = vpsqrt['prototype'];return z$10y['load'] = function (dfegc, xwsvty, inmljk, pnloqm, befcad) {
      void 0x0 === inmljk && (inmljk = !0x0), void 0x0 === befcad && (befcad = !0x1);var _wz$yx = this;0x0 === (_wz$yx['_url'] = dfegc)['indexOf']('data:image') ? _wz$yx['_type'] = xwsvty = 'image' : _wz$yx['_type'] = xwsvty = xwsvty || _wz$yx['getTypeFromUrl'](dfegc), _wz$yx['_cache'] = inmljk, _wz$yx['_data'] = null;var vpqrts = 'ascii';-0x1 != dfegc['indexOf']('.fnt') ? vpqrts = 'utf8' : 'arraybuffer' == xwsvty && (vpqrts = '');var $02_ = hjlgki['getFileExtension'](dfegc);if (-0x1 != vpsqrt['_fileTypeArr']['indexOf']($02_)) echdf['EnvConfig']['load']['call'](this, dfegc, xwsvty, inmljk, pnloqm, befcad);else {
        if (hkmlji['getFileInfo'](dfegc)) echdf['EnvConfig']['load']['call'](this, dfegc, xwsvty, inmljk, pnloqm, befcad);else {
          if (-0x1 != dfegc['indexOf']('layaNativeDir/')) {
            if (echdf['isZiYu']) {
              var kmnpo = hkmlji['ziyuFileData'][dfegc];return void _wz$yx['onLoaded'](kmnpo);
            }return cosnole['log']('read read'), void hkmlji['read'](dfegc, vpqrts, new stqrpv(vpsqrt, vpsqrt['onReadNativeCallBack'], [vpqrts, dfegc, xwsvty, inmljk, pnloqm, befcad, _wz$yx]));
          }kmnpo = '' == kjhilm['rootPath'] ? dfegc : dfegc['split'](kjhilm['rootPath'])[0x0], -0x1 != dfegc['indexOf']('http://') || -0x1 != dfegc['indexOf']('https://') ? echdf['EnvConfig']['load']['call'](_wz$yx, dfegc, xwsvty, inmljk, pnloqm, befcad) : hkmlji['readFile'](kmnpo, vpqrts, new stqrpv(vpsqrt, vpsqrt['onReadNativeCallBack'], [vpqrts, dfegc, xwsvty, inmljk, pnloqm, befcad, _wz$yx]), dfegc);
        }
      }
    }, z$10y['resMgrLoad'] = function (romnqp, hfkij, fgjkh, nqomr, _1z$2, fhjki, xstvwr) {
      void 0x0 === fgjkh && (fgjkh = 0x0), void 0x0 === nqomr && (nqomr = !0x1), void 0x0 === _1z$2 && (_1z$2 = !0x1), void 0x0 === fhjki && (fhjki = 0x0), void 0x0 === xstvwr && (xstvwr = 0x3), -0x1 != romnqp['indexOf']('mpack') && console['log']('=============resMgrLoad url:', romnqp), echdf['EnvConfig']['resMgrLoad'](romnqp, (nqrpo, yx_$0z, igkfj) => {
        vpsqrt['prototype']['resMgrLoadCallBack'](nqrpo, yx_$0z, igkfj, hfkij);
      }, fgjkh, nqomr, _1z$2, fhjki, xstvwr);
    }, z$10y['resMgrLoadCallBack'] = function (_$0xzy, igkhf, pomrn, klmhj) {
      console['log']('buff:::', _$0xzy, pomrn, hkmlji['fileNativeDir'] + '///' + hkmlji['fileListName']), klmhj(_$0xzy, igkhf, pomrn);
    }, z$10y['clearRes'] = function (xzyvtw, dhe) {
      this['clearRes'](xzyvtw, dhe = void 0x0 === dhe ? !0x1 : dhe), dhe = hkmlji['getFileInfo'](xzyvtw), !dhe || -0x1 == xzyvtw['indexOf']('http://') && -0x1 == xzyvtw['indexOf']('https://') || (dhe = dhe['md5'], dhe = hkmlji['getFileNativePath'](dhe), hkmlji['remove'](dhe));
    }, vpsqrt['onReadNativeCallBack'] = function (y0, yx_0z, zvtwy, qtprso, cfbdea, efda, zxtwvy, pnrqm, rqnp) {
      void 0x0 === qtprso && (qtprso = !0x0), void 0x0 === efda && (efda = !0x1), (pnrqm = void 0x0 === pnrqm ? 0x0 : pnrqm) ? 0x1 == pnrqm && echdf['EnvConfig']['load']['call'](zxtwvy, yx_0z, zvtwy, qtprso, cfbdea, efda) : (rqnp = 'json' == zvtwy || 'atlas' == zvtwy ? echdf['getJson'](rqnp['data']) : 'xml' == zvtwy ? hjlgki['parseXMLFromString'](rqnp['data']) : rqnp['data'], zxtwvy['onLoaded'](rqnp), !echdf['isZiYu'] && echdf['isPosMsgYu'] && 'arraybuffer' != zvtwy && wx['postMessage']({ 'url': yx_0z, 'data': rqnp, 'isLoad': !0x0 }));
    }, qmorn(vpsqrt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vpsqrt;
  }(),
      hkmlji = ($120_z(rqpto, 'laya.wx.mini.MiniFileMgr', dfea), rqpto['isLoadFile'] = function (kjiml) {
    return -0x1 != rqpto['_fileTypeArr']['indexOf'](kjiml);
  }, rqpto['getFileInfo'] = function (pnromq) {
    return pnromq = pnromq['split']('?')[0x0], pnromq = rqpto['filesListObj'][pnromq], null == pnromq ? null : pnromq;
  }, rqpto['onFileUpdate'] = function (xtsvwr, zwvxy) {
    var hjkif = xtsvwr['split']('/');xtsvwr = hjkif[hjkif['length'] - 0x1], hjkif = rqpto['getFileInfo'](zwvxy), null == hjkif ? rqpto['onSaveFile'](zwvxy, xtsvwr) : hjkif['readyUrl'] != zwvxy && rqpto['remove'](xtsvwr, zwvxy);
  }, rqpto['exits'] = function (jik, mkli) {
    jik = rqpto['getFileNativePath'](jik), rqpto['fs']['getFileInfo']({ 'filePath': jik, 'success': function (lnijm) {
        null != mkli && mkli['runWith']([0x0, lnijm]);
      }, 'fail': function (pvsrt) {
        null != mkli && mkli['runWith']([0x1, pvsrt]);
      } });
  }, rqpto['read'] = function (x0zy$_, lhjkim, fcgdbe, lmnopq) {
    void 0x0 === lhjkim && (lhjkim = 'ascill'), x0zy$_ = '' != (lmnopq = void 0x0 === lmnopq ? '' : lmnopq) ? rqpto['getFileNativePath'](x0zy$_) : x0zy$_, rqpto['fs']['readFile']({ 'filePath': x0zy$_, 'encoding': lhjkim, 'success': function (nkilj) {
        null != fcgdbe && fcgdbe['runWith']([0x0, nkilj]);
      }, 'fail': function (wzvtyx) {
        wzvtyx && '' != lmnopq ? rqpto['down'](lmnopq, lhjkim, fcgdbe, lmnopq) : null != fcgdbe && fcgdbe['runWith']([0x1]);
      } });
  }, rqpto['readNativeFile'] = function (plnqo, z_0$12) {
    rqpto['fs']['readFile']({ 'filePath': plnqo, 'encoding': '', 'success': function (stvyxw) {
        null != z_0$12 && z_0$12['runWith']([0x0]);
      }, 'fail': function (kmnjlo) {
        null != z_0$12 && z_0$12['runWith']([0x1]);
      } });
  }, rqpto['down'] = function (olnmkj, plnokm, nmikj, mjnki) {
    void 0x0 === plnokm && (plnokm = 'ascill'), void 0x0 === mjnki && (mjnki = '');var fchdg = rqpto['getFileNativePath'](mjnki);rqpto['wxdown']({ 'url': olnmkj, 'filePath': fchdg, 'success': function (xsvtr) {
        0xc8 === xsvtr['statusCode'] && rqpto['readFile'](xsvtr['filePath'], plnokm, nmikj, mjnki);
      }, 'fail': function (qport) {
        null != nmikj && nmikj['runWith']([0x1, qport]);
      } })['onProgressUpdate'](function (rnpom) {
      null != nmikj && nmikj['runWith']([0x2, rnpom['progress']]);
    });
  }, rqpto['readFile'] = function (nopl, $z_x0y, eihfg, dbcfe) {
    void 0x0 === dbcfe && (dbcfe = ''), rqpto['fs']['readFile']({ 'filePath': nopl, 'encoding': $z_x0y = void 0x0 === $z_x0y ? 'ascill' : $z_x0y, 'success': function (tqpros) {
        -0x1 == nopl['indexOf']('http://') && -0x1 == nopl['indexOf']('https://') || rqpto['onFileUpdate'](nopl, dbcfe), null != eihfg && eihfg['runWith']([0x0, tqpros]);
      }, 'fail': function (ghcdf) {
        ghcdf && null != eihfg && eihfg['runWith']([0x1, ghcdf]);
      } });
  }, rqpto['downImg'] = function (qtvpr, vtxwr, qswrtv) {
    void 0x0 === qswrtv && (qswrtv = ''), rqpto['wxdown']({ 'url': qtvpr, 'success': function (nomjlk) {
        0xc8 === nomjlk['statusCode'] && rqpto['copyFile'](nomjlk['tempFilePath'], qswrtv, vtxwr);
      }, 'fail': function (rsopnq) {
        null != vtxwr && vtxwr['runWith']([0x1, rsopnq]);
      } });
  }, rqpto['copyFile'] = function (osrtpq, nplomq, _yzx$0) {
    var oqprst = osrtpq['split']('/'),
        hjkfgi = oqprst[oqprst['length'] - 0x1];nplomq['split']('?')[0x0];var $wy_ = rqpto['getFileInfo'](nplomq);oqprst = rqpto['getFileNativePath'](hjkfgi), rqpto['fs']['copyFile']({ 'srcPath': osrtpq, 'destPath': oqprst, 'success': function (twvxz) {
        $wy_ ? $wy_['readyUrl'] != nplomq && rqpto['remove'](hjkfgi, nplomq, _yzx$0) : (rqpto['onSaveFile'](nplomq, hjkfgi), null != _yzx$0 && _yzx$0['runWith']([0x0]));
      }, 'fail': function (wyvztx) {
        null != _yzx$0 && _yzx$0['runWith']([0x1, wyvztx]);
      } });
  }, rqpto['getFileNativePath'] = function (dhefgc) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dhefgc;
  }, rqpto['remove'] = function (bfcdae, jimklh, lhmjk) {
    void 0x0 === jimklh && (jimklh = '');var oqprsn = rqpto['getFileInfo'](jimklh),
        imlnj = rqpto['getFileNativePath'](oqprsn['md5']);ehcgdf['loader']['clearRes'](oqprsn['readyUrl']), rqpto['fs']['unlink']({ 'filePath': imlnj, 'success': function (limnj) {
        '' != jimklh && rqpto['onSaveFile'](jimklh, bfcdae), null != lhmjk && lhmjk['runWith']([0x0]);
      }, 'fail': function (tsor) {} });
  }, rqpto['onSaveFile'] = function (vstqp, xwyvz) {
    var twvsxr = vstqp['split']('?')[0x0];rqpto['filesListObj'][twvsxr] = { 'md5': xwyvz, 'readyUrl': vstqp }, rqpto['fs']['writeFile']({ 'filePath': rqpto['fileNativeDir'] + '/' + rqpto['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rqpto['filesListObj']), 'success': function (qvt) {
        console['log']('写入测试测试成功：', qvt);
      }, 'fail': function (x_$0zy) {
        console['log']('写入测试测试失败：', x_$0zy);
      } });
  }, rqpto['existDir'] = function (adbf, cfhe) {
    rqpto['fs']['mkdir']({ 'dirPath': adbf, 'success': function (lihmj) {
        null != cfhe && cfhe['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (fdcea) {
        -0x1 != fdcea['errMsg']['indexOf']('file already exists') ? rqpto['readSync'](rqpto['fileListName'], 'utf8', cfhe) : null != cfhe && cfhe['runWith']([0x1, fdcea]);
      } });
  }, rqpto['readSync'] = function (_1$30, vtrsq, moqrpn, $231) {
    void 0x0 === vtrsq && (vtrsq = 'ascill'), void 0x0 === $231 && ($231 = ''), _1$30 = rqpto['getFileNativePath'](_1$30);var x_zyw;try {
      x_zyw = rqpto['fs']['readFileSync'](_1$30), null != moqrpn && moqrpn['runWith']([0x0, { 'data': x_zyw }]);
    } catch (mrponq) {
      null != moqrpn && moqrpn['runWith']([0x1]);
    }
  }, rqpto['readCache'] = function () {}, rqpto['writeCache'] = function (hgidef) {
    var nmjokl = readyUrl['split']('?')[0x0];rqpto['filesListObj'][nmjokl] = { 'md5': md5Name, 'readyUrl': readyUrl }, rqpto['fs']['writeFile']({ 'filePath': rqpto['fileNativeDir'] + '/' + rqpto['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rqpto['filesListObj']), 'success': function (ilkmjn) {}, 'fail': function (_z10$y) {} });
  }, rqpto['setNativeFileDir'] = function (_1023) {
    rqpto['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _1023;
  }, rqpto['filesListObj'] = {}, rqpto['fileNativeDir'] = null, rqpto['fileListName'] = 'layaairfiles.txt', rqpto['ziyuFileData'] = {}, qmorn(rqpto, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), rqpto);function rqpto() {
    rqpto['__super']['call'](this);
  }var nolkp = function () {
    function opmr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, opmr['__super']['call'](this), this['_sound'] = opmr['_createSound']();
    }$120_z(opmr, 'laya.wx.mini.MiniSound', dfea);var dfgcbe = opmr['prototype'];return dfgcbe['load'] = function (mqolpn) {
      var bedafc = this,
          rstqpv;function nmjli() {
        if (null != opmr['_null']) bedafc['_sound']['onCanplay'](opmr['_null']), bedafc['_sound']['onError'](opmr['_null']);else try {
          bedafc['_sound']['onCanplay'](null), bedafc['_sound']['onError'](null), opmr['_null'] = null;
        } catch (opqmn) {
          console['warn']('[wxmini] _clearSound:' + opqmn), bedafc['_sound']['onCanplay'](lihk), bedafc['_sound']['onError'](lihk), opmr['_null'] = lihk;
        }
      }function lihk() {}mqolpn = kjhilm['formatURL'](mqolpn), this['url'] = mqolpn, opmr['_audioCache'][mqolpn] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        nmjli(), rstqpv['loaded'] = !0x0, rstqpv['event']('complete'), opmr['_audioCache'][rstqpv['url']] = rstqpv;
      }), this['_sound']['onError'](function (zwtvx) {
        console['error']('errCode=' + zwtvx['errCode'] + '  errMsg=' + zwtvx['errMsg']), nmjli(), rstqpv['event']('error');
      }), this['_sound']['src'] = mqolpn, rstqpv = this);
    }, dfgcbe['play'] = function (hgfik, zy0_x) {
      void 0x0 === hgfik && (hgfik = 0x0), void 0x0 === zy0_x && (zy0_x = 0x0), (psnqr = this['url'] == cfdg['_tMusic'] ? (opmr['_musicAudio'] || (opmr['_musicAudio'] = opmr['_createSound']()), opmr['_musicAudio']) : opmr['_createSound']())['src'] = this['url'];var psnqr = new lnmopk(psnqr);return psnqr['url'] = this['url'], psnqr['loops'] = zy0_x, psnqr['startTime'] = hgfik, psnqr['play'](), cfdg['addChannel'](psnqr), psnqr;
    }, dfgcbe['dispose'] = function () {
      var lknmj = opmr['_audioCache'][this['url']];lknmj && (lknmj['src'] = '', delete opmr['_audioCache'][this['url']]);
    }, z$wyv(0x0, dfgcbe, 'duration', function () {
      return this['_sound']['duration'];
    }), opmr['_createSound'] = function () {
      return opmr['_id']++, echdf['window']['wx']['createInnerAudioContext']();
    }, opmr['_musicAudio'] = null, opmr['_id'] = 0x0, opmr['_audioCache'] = {}, opmr['_null'] = void 0x0, opmr;
  }(),
      lnmopk = function () {
    function chd(ljkghi) {
      this['_audio'] = null, this['_onEnd'] = null, chd['__super']['call'](this), this['_audio'] = ljkghi, this['_onEnd'] = hjlgki['bind'](this['__onEnd'], this), ljkghi['onEnded'](this['_onEnd']);
    }$120_z(chd, 'laya.wx.mini.MiniSoundChannel', hifged);var jfk = chd['prototype'];return jfk['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (ehcgdf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jfk['__onNull'] = function () {}, jfk['play'] = function () {
      this['isStopped'] = !0x1, cfdg['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, jfk['stop'] = function () {
      if (this['isStopped'] = !0x0, cfdg['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != chd['_null']) this['_audio']['onEnded'](chd['_null']);else try {
          this['_audio']['onEnded'](null), chd['_null'] = null;
        } catch (jegfi) {
          console['warn']('[wxmini] stop:' + jegfi), this['_audio']['onEnded'](hjlgki['bind'](this['__onNull'], this)), chd['_null'] = hjlgki['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, jfk['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, jfk['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, cfdg['addChannel'](this), this['_audio']['play']());
    }, z$wyv(0x0, jfk, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), z$wyv(0x0, jfk, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), z$wyv(0x0, jfk, 'volume', function () {
      return 0x1;
    }, function (z$1_20) {}), chd['_null'] = void 0x0, chd;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (svpqr, xrv) {
  'use strict';
  for (var snorqp in Object['defineProperty'](xrv, '__esModule', { 'value': !0x0 }), Laya) {
    var xwvyts = Laya[snorqp];xwvyts && xwvyts['__isclass'] && (xrv[snorqp] = xwvyts);
  }
});