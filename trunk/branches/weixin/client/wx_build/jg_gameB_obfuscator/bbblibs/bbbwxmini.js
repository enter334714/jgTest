var _ = wx.y$;
!function (z$2, olmpnk) {
  olmpnk['un'], olmpnk['uns'];var wzxu = olmpnk['static'],
      _z12$0 = olmpnk['class'],
      gdfh = olmpnk['getset'];olmpnk['__newvec'];var limjk = laya['utils']['Browser'],
      z0x_y$ = (laya['events']['Event'], laya['events']['EventDispatcher']),
      xyz$v = laya['resource']['HTMLImage'],
      mijkln = laya['utils']['Handler'],
      fdbae = laya['display']['Input'],
      zuyxv = laya['net']['Loader'];laya['maths']['Matrix'];var yz_0$1 = laya['renders']['Render'],
      jlmnik = laya['utils']['RunDriver'];laya['media']['Sound'];var klopm = laya['media']['SoundChannel'],
      prmn = laya['media']['SoundManager'],
      $zy1_ = (laya['display']['Stage'], laya['net']['URL']),
      _$y1 = laya['utils']['Utils'],
      dgcfe = (_z12$0(hlkijg, 'laya.wx.mini.MiniAdpter'), hlkijg['getJson'] = function (tvsuxw) {
    return JSON['parse'](tvsuxw);
  }, hlkijg['init'] = function (hjlkim, jlgh) {
    void 0x0 === hjlkim && (hjlkim = !0x1), void 0x0 === jlgh && (jlgh = !0x1), hlkijg['_inited'] || (hlkijg['window'] = z$2)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (hlkijg['_inited'] = !0x0, hlkijg['isZiYu'] = jlgh, hlkijg['isPosMsgYu'] = hjlkim, hlkijg['EnvConfig'] = {}, hlkijg['isZiYu'] || (mljok['setNativeFileDir']('/layaairGame'), mljok['existDir'](mljok['fileNativeDir'], mijkln['create'](hlkijg, hlkijg['onMkdirCallBack']))), hlkijg['window']['focus'] = function () {}, olmpnk['getUrlPath'] = function () {}, hlkijg['window']['logtime'] = function (nmpko) {}, hlkijg['window']['alertTimeLog'] = function (eihgfd) {}, hlkijg['window']['resetShareInfo'] = function () {}, hlkijg['window']['CanvasRenderingContext2D'] = function () {}, hlkijg['window']['CanvasRenderingContext2D']['prototype'] = hlkijg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hlkijg['window']['document']['body']['appendChild'] = function () {}, hlkijg['EnvConfig']['pixelRatioInt'] = 0x0, jlmnik['getPixelRatio'] = hlkijg['pixelRatio'], hlkijg['_preCreateElement'] = limjk['createElement'], limjk['createElement'] = hlkijg['createElement'], jlmnik['createShaderCondition'] = hlkijg['createShaderCondition'], _$y1['parseXMLFromString'] = hlkijg['parseXMLFromString'], fdbae['_createInputElement'] = yz01_['_createInputElement'], hlkijg['EnvConfig']['load'] = zuyxv['prototype']['load'], zuyxv['prototype']['load'] = gfech['prototype']['load'], hlkijg['isZiYu'] && hjlkim && wx['onMessage'](function (wvytux) {
      wvytux['isLoad'] && (mljok['ziyuFileData'][wvytux['url']] = wvytux['data']);
    }));
  }, hlkijg['onMkdirCallBack'] = function (y0z_1$, postqr) {
    y0z_1$ || (mljok['filesListObj'] = JSON['parse'](postqr['data']));
  }, hlkijg['pixelRatio'] = function () {
    if (!hlkijg['EnvConfig']['pixelRatioInt']) try {
      var fgjhk = wx['getSystemInfoSync']();return hlkijg['EnvConfig']['pixelRatioInt'] = fgjhk['pixelRatio'], fgjhk['pixelRatio'];
    } catch (z$2_10) {}return hlkijg['EnvConfig']['pixelRatioInt'];
  }, hlkijg['createElement'] = function (ebcdfa) {
    var bfdeg;if ('canvas' == ebcdfa) return 0x1 == hlkijg['idx'] ? hlkijg['isZiYu'] ? (bfdeg = sharedCanvas)['style'] = {} : bfdeg = z$2['canvas'] : bfdeg = z$2['wx']['createCanvas'](), hlkijg['idx']++, bfdeg;if ('textarea' == ebcdfa || 'input' == ebcdfa) return hlkijg['onCreateInput'](ebcdfa);if ('div' != ebcdfa) return hlkijg['_preCreateElement'](ebcdfa);return ebcdfa = hlkijg['_preCreateElement'](ebcdfa), (ebcdfa['contains'] = function (nolpmq) {
      return null;
    }, ebcdfa['removeChild'] = function ($120_) {}, ebcdfa);
  }, hlkijg['onCreateInput'] = function (jmokln) {
    return jmokln = hlkijg['_preCreateElement'](jmokln), (jmokln['focus'] = yz01_['wxinputFocus'], jmokln['blur'] = yz01_['wxinputblur'], jmokln['style'] = {}, jmokln['value'] = 0x0, jmokln['parentElement'] = {}, jmokln['placeholder'] = {}, jmokln['type'] = {}, jmokln['setColor'] = function (ifj) {}, jmokln['setType'] = function (dcfghe) {}, jmokln['setFontFace'] = function (zy_10$) {}, jmokln['addEventListener'] = function (cefad) {}, jmokln['contains'] = function (cabfd) {
      return null;
    }, jmokln['removeChild'] = function (klinj) {}, jmokln);
  }, hlkijg['createShaderCondition'] = function (tux) {
    var quprt = this;return function () {
      return quprt[tux['replace']('this.', '')];
    };
  }, hlkijg['EnvConfig'] = null, hlkijg['window'] = null, hlkijg['_preCreateElement'] = null, hlkijg['_inited'] = !0x1, hlkijg['wxRequest'] = null, hlkijg['systemInfo'] = null, hlkijg['version'] = '0.0.1', hlkijg['isZiYu'] = !0x1, hlkijg['isPosMsgYu'] = !0x1, hlkijg['parseXMLFromString'] = function (facd) {
    var xz$vyw;facd = facd['replace'](/>\s+</g, '><');try {
      xz$vyw = new z$2['Parser']['DOMParser']()['parseFromString'](facd, 'text/xml');
    } catch (nmjikl) {
      throw '需要引入xml解析库文件';
    }return xz$vyw;
  }, hlkijg['idx'] = 0x1, hlkijg);function hlkijg() {}_z12$0(rpqso, 'laya.wx.mini.MiniImage'), rpqso['prototype']['_loadImage'] = function (afd) {
    var nopl = !0x1;-0x1 == afd['indexOf']('layaNativeDir/') && (nopl = !0x0, afd = $zy1_['formatURL'](afd)), mljok['getFileInfo'](afd) ? rpqso['onCreateImage'](afd, this, !nopl) : -0x1 != afd['indexOf']('http://') || -0x1 != afd['indexOf']('https://') ? mljok['downImg'](afd, new mijkln(rpqso, rpqso['onDownImgCallBack'], [afd, this]), afd) : rpqso['onCreateImage'](afd, this, !0x0);
  }, rpqso['onDownImgCallBack'] = function (y_$0xz, gfcbde, onrpsq) {
    onrpsq ? gfcbde['onError'](null) : rpqso['onCreateImage'](y_$0xz, gfcbde);
  }, rpqso['onCreateImage'] = function (vyxzwu, ospqtr, dei) {
    var omqnlp, xzyu;function qprmo() {
      xzyu['onload'] = null, xzyu['onerror'] = null, delete ospqtr['imgCache'][vyxzwu];
    }omqnlp = (dei = void 0x0 === dei ? !0x1 : dei) ? vyxzwu : (ihgjf = mljok['getFileInfo'](vyxzwu)['md5'], mljok['getFileNativePath'](ihgjf)), null == ospqtr['imgCache'] && (ospqtr['imgCache'] = {}), dei = function () {
      qprmo(), ospqtr['onLoaded'](xzyu);
    };var ihgjf = function () {
      qprmo(), ospqtr['event']('error', 'Load image failed');
    };'nativeimage' == ospqtr['_type'] ? ((xzyu = new limjk['window']['Image']())['crossOrigin'] = '', xzyu['onload'] = dei, xzyu['onerror'] = ihgjf, xzyu['src'] = omqnlp, ospqtr['imgCache'][vyxzwu] = xzyu) : new xyz$v['create'](omqnlp, { 'onload': dei, 'onerror': ihgjf, 'onCreate': function (_0$xzy) {
        xzyu = _0$xzy, ospqtr['imgCache'][vyxzwu] = _0$xzy;
      } });
  };function rpqso() {}var yz01_ = (_z12$0(iknlm, 'laya.wx.mini.MiniInput'), iknlm['_createInputElement'] = function () {
    fdbae['_initInput'](fdbae['area'] = limjk['createElement']('textarea')), fdbae['_initInput'](fdbae['input'] = limjk['createElement']('input')), fdbae['inputContainer'] = limjk['createElement']('div'), fdbae['inputContainer']['style']['position'] = 'absolute', fdbae['inputContainer']['style']['zIndex'] = 0x186a0, limjk['container']['appendChild'](fdbae['inputContainer']), fdbae['inputContainer']['setPos'] = function (wutrv, mpnokl) {
      fdbae['inputContainer']['style']['left'] = wutrv + 'px', fdbae['inputContainer']['style']['top'] = mpnokl + 'px';
    }, olmpnk['stage']['on']('resize', null, iknlm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (polmk) {
      z$2['dispatchEvent'] && z$2['dispatchEvent']('resize');
    }), prmn['_soundClass'] = igejf, prmn['_musicClass'] = igejf;
  }, iknlm['_onStageResize'] = function () {
    olmpnk['stage']['_canvasTransform']['identity']()['scale'](limjk['width'] / yz_0$1['canvas']['width'] / jlmnik['getPixelRatio'](), limjk['height'] / yz_0$1['canvas']['height'] / jlmnik['getPixelRatio']());
  }, iknlm['wxinputFocus'] = function (vsqtur) {
    var vuxtws = fdbae['inputElement']['target'];vuxtws && !vuxtws['editable'] || (dgcfe['window']['wx']['offKeyboardConfirm'](), dgcfe['window']['wx']['offKeyboardInput'](), dgcfe['window']['wx']['showKeyboard']({ 'defaultValue': vuxtws['text'], 'maxLength': vuxtws['maxChars'], 'multiple': vuxtws['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ghk) {}, 'fail': function (lkjn) {} }), dgcfe['window']['wx']['onKeyboardConfirm'](function ($yx_w) {
      $yx_w = $yx_w ? $yx_w['value'] : '', (vuxtws['text'] = $yx_w, vuxtws['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), dgcfe['window']['wx']['onKeyboardInput'](function (plkonm) {
      plkonm = plkonm ? plkonm['value'] : '', vuxtws['multiline'] || -0x1 == plkonm['indexOf']('\x0a') ? (vuxtws['text'] = plkonm, vuxtws['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, iknlm['inputEnter'] = function () {
    fdbae['inputElement']['target']['focus'] = !0x1;
  }, iknlm['wxinputblur'] = function () {
    iknlm['hideKeyboard']();
  }, iknlm['hideKeyboard'] = function () {
    dgcfe['window']['wx']['offKeyboardConfirm'](), dgcfe['window']['wx']['offKeyboardInput'](), dgcfe['window']['wx']['hideKeyboard']({ 'success': function (_$z20) {
        console['log']('隐藏键盘');
      }, 'fail': function (eigdfh) {
        console['log']('隐藏键盘出错:' + (eigdfh ? eigdfh['errMsg'] : ''));
      } });
  }, iknlm);function iknlm() {}var gfech = function () {
    function tuqvrs() {}_z12$0(tuqvrs, 'laya.wx.mini.MiniLoader');var onklm = tuqvrs['prototype'];return onklm['load'] = function (omlpnk, dfhcge, oqprns, _x, faceb) {
      void 0x0 === oqprns && (oqprns = !0x0), void 0x0 === faceb && (faceb = !0x1);var rpstoq = this;0x0 === (rpstoq['_url'] = omlpnk)['indexOf']('data:image') ? rpstoq['_type'] = dfhcge = 'image' : rpstoq['_type'] = dfhcge = dfhcge || rpstoq['getTypeFromUrl'](omlpnk), rpstoq['_cache'] = oqprns, rpstoq['_data'] = null;var cafde = 'ascii';-0x1 != omlpnk['indexOf']('.fnt') ? cafde = 'utf8' : 'arraybuffer' == dfhcge && (cafde = '');var uqrt = _$y1['getFileExtension'](omlpnk);if (-0x1 != tuqvrs['_fileTypeArr']['indexOf'](uqrt)) dgcfe['EnvConfig']['load']['call'](this, omlpnk, dfhcge, oqprns, _x, faceb);else {
        if (mljok['getFileInfo'](omlpnk)) dgcfe['EnvConfig']['load']['call'](this, omlpnk, dfhcge, oqprns, _x, faceb);else {
          if (-0x1 != omlpnk['indexOf']('layaNativeDir/')) {
            if (dgcfe['isZiYu']) {
              var _0123 = mljok['ziyuFileData'][omlpnk];return void rpstoq['onLoaded'](_0123);
            }return cosnole['log']('read read'), void mljok['read'](omlpnk, cafde, new mijkln(tuqvrs, tuqvrs['onReadNativeCallBack'], [cafde, omlpnk, dfhcge, oqprns, _x, faceb, rpstoq]));
          }_0123 = '' == $zy1_['rootPath'] ? omlpnk : omlpnk['split']($zy1_['rootPath'])[0x0], -0x1 != omlpnk['indexOf']('http://') || -0x1 != omlpnk['indexOf']('https://') ? dgcfe['EnvConfig']['load']['call'](rpstoq, omlpnk, dfhcge, oqprns, _x, faceb) : mljok['readFile'](_0123, cafde, new mijkln(tuqvrs, tuqvrs['onReadNativeCallBack'], [cafde, omlpnk, dfhcge, oqprns, _x, faceb, rpstoq]), omlpnk);
        }
      }
    }, onklm['resMgrLoad'] = function (_1$0y, jlkhgi, ecdgh, fabce, uqrsp, otsqpr, feihgd) {
      void 0x0 === ecdgh && (ecdgh = 0x0), void 0x0 === fabce && (fabce = !0x1), void 0x0 === uqrsp && (uqrsp = !0x1), void 0x0 === otsqpr && (otsqpr = 0x0), void 0x0 === feihgd && (feihgd = 0x3), -0x1 != _1$0y['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _1$0y), dgcfe['EnvConfig']['resMgrLoad'](_1$0y, (ihjefg, efbcd, z$0_2) => {
        tuqvrs['prototype']['resMgrLoadCallBack'](ihjefg, efbcd, z$0_2, jlkhgi);
      }, ecdgh, fabce, uqrsp, otsqpr, feihgd);
    }, onklm['resMgrLoadCallBack'] = function (y$1_0z, hgljik, ikhjg, bfec) {
      console['log']('buff:::', y$1_0z, ikhjg, mljok['fileNativeDir'] + '///' + mljok['fileListName']), bfec(y$1_0z, hgljik, ikhjg);
    }, onklm['clearRes'] = function (vrsutw, vstq) {
      this['clearRes'](vrsutw, vstq = void 0x0 === vstq ? !0x1 : vstq), vstq = mljok['getFileInfo'](vrsutw), !vstq || -0x1 == vrsutw['indexOf']('http://') && -0x1 == vrsutw['indexOf']('https://') || (vstq = vstq['md5'], vstq = mljok['getFileNativePath'](vstq), mljok['remove'](vstq));
    }, tuqvrs['onReadNativeCallBack'] = function (efihgd, cafbde, zwvu, qursv, hfegdc, vyxt, fbdca, roqp, suqtvr) {
      void 0x0 === qursv && (qursv = !0x0), void 0x0 === vyxt && (vyxt = !0x1), (roqp = void 0x0 === roqp ? 0x0 : roqp) ? 0x1 == roqp && dgcfe['EnvConfig']['load']['call'](fbdca, cafbde, zwvu, qursv, hfegdc, vyxt) : (suqtvr = 'json' == zwvu || 'atlas' == zwvu ? dgcfe['getJson'](suqtvr['data']) : 'xml' == zwvu ? _$y1['parseXMLFromString'](suqtvr['data']) : suqtvr['data'], fbdca['onLoaded'](suqtvr), !dgcfe['isZiYu'] && dgcfe['isPosMsgYu'] && 'arraybuffer' != zwvu && wx['postMessage']({ 'url': cafbde, 'data': suqtvr, 'isLoad': !0x0 }));
    }, wzxu(tuqvrs, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), tuqvrs;
  }(),
      mljok = (_z12$0(ifg, 'laya.wx.mini.MiniFileMgr', z0x_y$), ifg['isLoadFile'] = function (fkghji) {
    return -0x1 != ifg['_fileTypeArr']['indexOf'](fkghji);
  }, ifg['getFileInfo'] = function (npsrqo) {
    return npsrqo = npsrqo['split']('?')[0x0], npsrqo = ifg['filesListObj'][npsrqo], null == npsrqo ? null : npsrqo;
  }, ifg['onFileUpdate'] = function (nqopr, rqpsto) {
    var klhgi = nqopr['split']('/');nqopr = klhgi[klhgi['length'] - 0x1], klhgi = ifg['getFileInfo'](rqpsto), null == klhgi ? ifg['onSaveFile'](rqpsto, nqopr) : klhgi['readyUrl'] != rqpsto && ifg['remove'](nqopr, rqpsto);
  }, ifg['exits'] = function (nlokm, jhkg) {
    nlokm = ifg['getFileNativePath'](nlokm), ifg['fs']['getFileInfo']({ 'filePath': nlokm, 'success': function (bfgce) {
        null != jhkg && jhkg['runWith']([0x0, bfgce]);
      }, 'fail': function (xstwuv) {
        null != jhkg && jhkg['runWith']([0x1, xstwuv]);
      } });
  }, ifg['read'] = function (uxtwsv, jlighk, chef, y$zx0) {
    void 0x0 === jlighk && (jlighk = 'ascill'), uxtwsv = '' != (y$zx0 = void 0x0 === y$zx0 ? '' : y$zx0) ? ifg['getFileNativePath'](uxtwsv) : uxtwsv, ifg['fs']['readFile']({ 'filePath': uxtwsv, 'encoding': jlighk, 'success': function (wzyx_$) {
        null != chef && chef['runWith']([0x0, wzyx_$]);
      }, 'fail': function (bcgfed) {
        bcgfed && '' != y$zx0 ? ifg['down'](y$zx0, jlighk, chef, y$zx0) : null != chef && chef['runWith']([0x1]);
      } });
  }, ifg['readNativeFile'] = function (gkfji, ghedc) {
    ifg['fs']['readFile']({ 'filePath': gkfji, 'encoding': '', 'success': function (tqrpos) {
        null != ghedc && ghedc['runWith']([0x0]);
      }, 'fail': function (jknlmo) {
        null != ghedc && ghedc['runWith']([0x1]);
      } });
  }, ifg['down'] = function (qorpts, lmik, stxvu, mnpr) {
    void 0x0 === lmik && (lmik = 'ascill'), void 0x0 === mnpr && (mnpr = '');var cegb = ifg['getFileNativePath'](mnpr);ifg['wxdown']({ 'url': qorpts, 'filePath': cegb, 'success': function (_$xwz) {
        0xc8 === _$xwz['statusCode'] && ifg['readFile'](_$xwz['filePath'], lmik, stxvu, mnpr);
      }, 'fail': function (uvtxws) {
        null != stxvu && stxvu['runWith']([0x1, uvtxws]);
      } })['onProgressUpdate'](function (gkjlhi) {
      null != stxvu && stxvu['runWith']([0x2, gkjlhi['progress']]);
    });
  }, ifg['readFile'] = function (x_w$zy, _zxy, w$xv, nmlkjo) {
    void 0x0 === nmlkjo && (nmlkjo = ''), ifg['fs']['readFile']({ 'filePath': x_w$zy, 'encoding': _zxy = void 0x0 === _zxy ? 'ascill' : _zxy, 'success': function (gdcef) {
        -0x1 == x_w$zy['indexOf']('http://') && -0x1 == x_w$zy['indexOf']('https://') || ifg['onFileUpdate'](x_w$zy, nmlkjo), null != w$xv && w$xv['runWith']([0x0, gdcef]);
      }, 'fail': function ($30_) {
        $30_ && null != w$xv && w$xv['runWith']([0x1, $30_]);
      } });
  }, ifg['downImg'] = function (trpso, hdegfi, opkn) {
    void 0x0 === opkn && (opkn = ''), ifg['wxdown']({ 'url': trpso, 'success': function (tsu) {
        0xc8 === tsu['statusCode'] && ifg['copyFile'](tsu['tempFilePath'], opkn, hdegfi);
      }, 'fail': function (fejhg) {
        null != hdegfi && hdegfi['runWith']([0x1, fejhg]);
      } });
  }, ifg['copyFile'] = function (txuy, fcedab, klihjm) {
    var lpqomn = txuy['split']('/'),
        rqvsu = lpqomn[lpqomn['length'] - 0x1];fcedab['split']('?')[0x0];var fdgehi = ifg['getFileInfo'](fcedab);lpqomn = ifg['getFileNativePath'](rqvsu), ifg['fs']['copyFile']({ 'srcPath': txuy, 'destPath': lpqomn, 'success': function (zw$yvx) {
        fdgehi ? fdgehi['readyUrl'] != fcedab && ifg['remove'](rqvsu, fcedab, klihjm) : (ifg['onSaveFile'](fcedab, rqvsu), null != klihjm && klihjm['runWith']([0x0]));
      }, 'fail': function (jhmik) {
        null != klihjm && klihjm['runWith']([0x1, jhmik]);
      } });
  }, ifg['getFileNativePath'] = function ($102z_) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $102z_;
  }, ifg['remove'] = function (_0z$2, usprqt, rqpst) {
    void 0x0 === usprqt && (usprqt = '');var nikjlm = ifg['getFileInfo'](usprqt),
        uwvsx = ifg['getFileNativePath'](nikjlm['md5']);olmpnk['loader']['clearRes'](nikjlm['readyUrl']), ifg['fs']['unlink']({ 'filePath': uwvsx, 'success': function (rsnq) {
        '' != usprqt && ifg['onSaveFile'](usprqt, _0z$2), null != rqpst && rqpst['runWith']([0x0]);
      }, 'fail': function (mnokl) {} });
  }, ifg['onSaveFile'] = function (osrpn, uyzxvw) {
    var geihdf = osrpn['split']('?')[0x0];ifg['filesListObj'][geihdf] = { 'md5': uyzxvw, 'readyUrl': osrpn }, ifg['fs']['writeFile']({ 'filePath': ifg['fileNativeDir'] + '/' + ifg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ifg['filesListObj']), 'success': function (qlmon) {
        console['log']('写入测试测试成功：', qlmon);
      }, 'fail': function (ptrsqu) {
        console['log']('写入测试测试失败：', ptrsqu);
      } });
  }, ifg['existDir'] = function (rpqosn, zxy_0) {
    ifg['fs']['mkdir']({ 'dirPath': rpqosn, 'success': function (qmpoln) {
        null != zxy_0 && zxy_0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (tvyw) {
        -0x1 != tvyw['errMsg']['indexOf']('file already exists') ? ifg['readSync'](ifg['fileListName'], 'utf8', zxy_0) : null != zxy_0 && zxy_0['runWith']([0x1, tvyw]);
      } });
  }, ifg['readSync'] = function (bgfce, rtsvwu, bfcdae, gfkjh) {
    void 0x0 === rtsvwu && (rtsvwu = 'ascill'), void 0x0 === gfkjh && (gfkjh = ''), bgfce = ifg['getFileNativePath'](bgfce);var ilmhjk;try {
      ilmhjk = ifg['fs']['readFileSync'](bgfce), null != bfcdae && bfcdae['runWith']([0x0, { 'data': ilmhjk }]);
    } catch (ywvxu) {
      null != bfcdae && bfcdae['runWith']([0x1]);
    }
  }, ifg['readCache'] = function () {}, ifg['writeCache'] = function (gehji) {
    var zwyvx$ = readyUrl['split']('?')[0x0];ifg['filesListObj'][zwyvx$] = { 'md5': md5Name, 'readyUrl': readyUrl }, ifg['fs']['writeFile']({ 'filePath': ifg['fileNativeDir'] + '/' + ifg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ifg['filesListObj']), 'success': function (_z1y0$) {}, 'fail': function (z1_0$y) {} });
  }, ifg['setNativeFileDir'] = function (hcdfe) {
    ifg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hcdfe;
  }, ifg['filesListObj'] = {}, ifg['fileNativeDir'] = null, ifg['fileListName'] = 'layaairfiles.txt', ifg['ziyuFileData'] = {}, wzxu(ifg, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ifg);function ifg() {
    ifg['__super']['call'](this);
  }var igejf = function () {
    function uvtswr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, uvtswr['__super']['call'](this), this['_sound'] = uvtswr['_createSound']();
    }_z12$0(uvtswr, 'laya.wx.mini.MiniSound', z0x_y$);var mnop = uvtswr['prototype'];return mnop['load'] = function (otsrq) {
      var gdiefh = this,
          x$y_wz;function stuqp() {
        if (null != uvtswr['_null']) gdiefh['_sound']['onCanplay'](uvtswr['_null']), gdiefh['_sound']['onError'](uvtswr['_null']);else try {
          gdiefh['_sound']['onCanplay'](null), gdiefh['_sound']['onError'](null), uvtswr['_null'] = null;
        } catch (zy10_) {
          console['warn']('[wxmini] _clearSound:' + zy10_), gdiefh['_sound']['onCanplay'](oplkmn), gdiefh['_sound']['onError'](oplkmn), uvtswr['_null'] = oplkmn;
        }
      }function oplkmn() {}otsrq = $zy1_['formatURL'](otsrq), this['url'] = otsrq, uvtswr['_audioCache'][otsrq] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        stuqp(), x$y_wz['loaded'] = !0x0, x$y_wz['event']('complete'), uvtswr['_audioCache'][x$y_wz['url']] = x$y_wz;
      }), this['_sound']['onError'](function (nojmlk) {
        console['error']('errCode=' + nojmlk['errCode'] + '  errMsg=' + nojmlk['errMsg']), stuqp(), x$y_wz['event']('error');
      }), this['_sound']['src'] = otsrq, x$y_wz = this);
    }, mnop['play'] = function (wv$yx, hdfcg) {
      void 0x0 === wv$yx && (wv$yx = 0x0), void 0x0 === hdfcg && (hdfcg = 0x0), (lnjmi = this['url'] == prmn['_tMusic'] ? (uvtswr['_musicAudio'] || (uvtswr['_musicAudio'] = uvtswr['_createSound']()), uvtswr['_musicAudio']) : uvtswr['_createSound']())['src'] = this['url'];var lnjmi = new _y$1(lnjmi);return lnjmi['url'] = this['url'], lnjmi['loops'] = hdfcg, lnjmi['startTime'] = wv$yx, lnjmi['play'](), prmn['addChannel'](lnjmi), lnjmi;
    }, mnop['dispose'] = function () {
      var posrtq = uvtswr['_audioCache'][this['url']];posrtq && (posrtq['src'] = '', delete uvtswr['_audioCache'][this['url']]);
    }, gdfh(0x0, mnop, 'duration', function () {
      return this['_sound']['duration'];
    }), uvtswr['_createSound'] = function () {
      return uvtswr['_id']++, dgcfe['window']['wx']['createInnerAudioContext']();
    }, uvtswr['_musicAudio'] = null, uvtswr['_id'] = 0x0, uvtswr['_audioCache'] = {}, uvtswr['_null'] = void 0x0, uvtswr;
  }(),
      _y$1 = function () {
    function klijhm(rotsq) {
      this['_audio'] = null, this['_onEnd'] = null, klijhm['__super']['call'](this), this['_audio'] = rotsq, this['_onEnd'] = _$y1['bind'](this['__onEnd'], this), rotsq['onEnded'](this['_onEnd']);
    }_z12$0(klijhm, 'laya.wx.mini.MiniSoundChannel', klopm);var bgefd = klijhm['prototype'];return bgefd['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (olmpnk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bgefd['__onNull'] = function () {}, bgefd['play'] = function () {
      this['isStopped'] = !0x1, prmn['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, bgefd['stop'] = function () {
      if (this['isStopped'] = !0x0, prmn['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != klijhm['_null']) this['_audio']['onEnded'](klijhm['_null']);else try {
          this['_audio']['onEnded'](null), klijhm['_null'] = null;
        } catch (qrtvs) {
          console['warn']('[wxmini] stop:' + qrtvs), this['_audio']['onEnded'](_$y1['bind'](this['__onNull'], this)), klijhm['_null'] = _$y1['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, bgefd['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, bgefd['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, prmn['addChannel'](this), this['_audio']['play']());
    }, gdfh(0x0, bgefd, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), gdfh(0x0, bgefd, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), gdfh(0x0, bgefd, 'volume', function () {
      return 0x1;
    }, function (cfae) {}), klijhm['_null'] = void 0x0, klijhm;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (lqnpmo, pqmr) {
  'use strict';

  for (var ifehjg in Object['defineProperty'](pqmr, '__esModule', { 'value': !0x0 }), Laya) {
    var dgefh = Laya[ifehjg];dgefh && dgefh['__isclass'] && (pqmr[ifehjg] = dgefh);
  }
});