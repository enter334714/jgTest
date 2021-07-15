var _ = wx.y$;
!function (wsur, fikhg) {
  fikhg['un'], fikhg['uns'];var $zyvw = fikhg['static'],
      chegfd = fikhg['class'],
      uwvrs = fikhg['getset'];fikhg['__newvec'];var fegcbd = laya['utils']['Browser'],
      eid = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ikjfh = laya['resource']['HTMLImage'],
      $0_2z = laya['utils']['Handler'],
      jiml = laya['display']['Input'],
      _12304 = laya['net']['Loader'];laya['maths']['Matrix'];var qrsnop = laya['renders']['Render'],
      nilmkj = laya['utils']['RunDriver'];laya['media']['Sound'];var hgli = laya['media']['SoundChannel'],
      upt = laya['media']['SoundManager'],
      jhfe = (laya['display']['Stage'], laya['net']['URL']),
      onljkm = laya['utils']['Utils'],
      vtuwy = (chegfd(qrnpos, 'laya.wx.mini.MiniAdpter'), qrnpos['getJson'] = function (tqsuv) {
    return JSON['parse'](tqsuv);
  }, qrnpos['init'] = function (fkijgh, jighlk) {
    void 0x0 === fkijgh && (fkijgh = !0x1), void 0x0 === jighlk && (jighlk = !0x1), qrnpos['_inited'] || (qrnpos['window'] = wsur)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (qrnpos['_inited'] = !0x0, qrnpos['isZiYu'] = jighlk, qrnpos['isPosMsgYu'] = fkijgh, qrnpos['EnvConfig'] = {}, qrnpos['isZiYu'] || (optr['setNativeFileDir']('/layaairGame'), optr['existDir'](optr['fileNativeDir'], $0_2z['create'](qrnpos, qrnpos['onMkdirCallBack']))), qrnpos['window']['focus'] = function () {}, fikhg['getUrlPath'] = function () {}, qrnpos['window']['logtime'] = function (nqoplm) {}, qrnpos['window']['alertTimeLog'] = function (to) {}, qrnpos['window']['resetShareInfo'] = function () {}, qrnpos['window']['CanvasRenderingContext2D'] = function () {}, qrnpos['window']['CanvasRenderingContext2D']['prototype'] = qrnpos['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qrnpos['window']['document']['body']['appendChild'] = function () {}, qrnpos['EnvConfig']['pixelRatioInt'] = 0x0, nilmkj['getPixelRatio'] = qrnpos['pixelRatio'], qrnpos['_preCreateElement'] = fegcbd['createElement'], fegcbd['createElement'] = qrnpos['createElement'], nilmkj['createShaderCondition'] = qrnpos['createShaderCondition'], onljkm['parseXMLFromString'] = qrnpos['parseXMLFromString'], jiml['_createInputElement'] = jhigkf['_createInputElement'], qrnpos['EnvConfig']['load'] = _12304['prototype']['load'], _12304['prototype']['load'] = jgikfh['prototype']['load'], qrnpos['isZiYu'] && fkijgh && wx['onMessage'](function (rtuwv) {
      rtuwv['isLoad'] && (optr['ziyuFileData'][rtuwv['url']] = rtuwv['data']);
    }));
  }, qrnpos['onMkdirCallBack'] = function (hgdfie, becgd) {
    hgdfie || (optr['filesListObj'] = JSON['parse'](becgd['data']));
  }, qrnpos['pixelRatio'] = function () {
    if (!qrnpos['EnvConfig']['pixelRatioInt']) try {
      var pqus = wx['getSystemInfoSync']();return qrnpos['EnvConfig']['pixelRatioInt'] = pqus['pixelRatio'], pqus['pixelRatio'];
    } catch (zyx$w_) {}return qrnpos['EnvConfig']['pixelRatioInt'];
  }, qrnpos['createElement'] = function (qptusr) {
    var diehfg;if ('canvas' == qptusr) return 0x1 == qrnpos['idx'] ? qrnpos['isZiYu'] ? (diehfg = sharedCanvas)['style'] = {} : diehfg = wsur['canvas'] : diehfg = wsur['wx']['createCanvas'](), qrnpos['idx']++, diehfg;if ('textarea' == qptusr || 'input' == qptusr) return qrnpos['onCreateInput'](qptusr);if ('div' != qptusr) return qrnpos['_preCreateElement'](qptusr);return qptusr = qrnpos['_preCreateElement'](qptusr), (qptusr['contains'] = function (opnq) {
      return null;
    }, qptusr['removeChild'] = function (ruqpts) {}, qptusr);
  }, qrnpos['onCreateInput'] = function (diefgh) {
    return diefgh = qrnpos['_preCreateElement'](diefgh), (diefgh['focus'] = jhigkf['wxinputFocus'], diefgh['blur'] = jhigkf['wxinputblur'], diefgh['style'] = {}, diefgh['value'] = 0x0, diefgh['parentElement'] = {}, diefgh['placeholder'] = {}, diefgh['type'] = {}, diefgh['setColor'] = function (ponlkm) {}, diefgh['setType'] = function (xyz$v) {}, diefgh['setFontFace'] = function (npmkl) {}, diefgh['addEventListener'] = function (ikgj) {}, diefgh['contains'] = function (otprsq) {
      return null;
    }, diefgh['removeChild'] = function (edbaf) {}, diefgh);
  }, qrnpos['createShaderCondition'] = function (y01z_$) {
    var gifjeh = this;return function () {
      return gifjeh[y01z_$['replace']('this.', '')];
    };
  }, qrnpos['EnvConfig'] = null, qrnpos['window'] = null, qrnpos['_preCreateElement'] = null, qrnpos['_inited'] = !0x1, qrnpos['wxRequest'] = null, qrnpos['p$ED'] = null, qrnpos['version'] = '0.0.1', qrnpos['isZiYu'] = !0x1, qrnpos['isPosMsgYu'] = !0x1, qrnpos['parseXMLFromString'] = function (pmko) {
    var gcdehf;pmko = pmko['replace'](/>\s+</g, '><');try {
      gcdehf = new wsur['Parser']['DOMParser']()['parseFromString'](pmko, 'text/xml');
    } catch (x$y_) {
      throw '需要引入xml解析库文件';
    }return gcdehf;
  }, qrnpos['idx'] = 0x1, qrnpos);function qrnpos() {}chegfd(zy$x0, 'laya.wx.mini.MiniImage'), zy$x0['prototype']['_loadImage'] = function (_$01z) {
    var y1_0z$ = !0x1;-0x1 == _$01z['indexOf']('layaNativeDir/') && (y1_0z$ = !0x0, _$01z = jhfe['formatURL'](_$01z)), optr['getFileInfo'](_$01z) ? zy$x0['onCreateImage'](_$01z, this, !y1_0z$) : -0x1 != _$01z['indexOf']('http://') || -0x1 != _$01z['indexOf']('https://') ? optr['downImg'](_$01z, new $0_2z(zy$x0, zy$x0['onDownImgCallBack'], [_$01z, this]), _$01z) : zy$x0['onCreateImage'](_$01z, this, !0x0);
  }, zy$x0['onDownImgCallBack'] = function (z1$2, edhgif, _$y0z1) {
    _$y0z1 ? edhgif['onError'](null) : zy$x0['onCreateImage'](z1$2, edhgif);
  }, zy$x0['onCreateImage'] = function (stupr, truws, lponkm) {
    var tqupr, lmnkjo;function pqlnmo() {
      lmnkjo['onload'] = null, lmnkjo['onerror'] = null, delete truws['imgCache'][stupr];
    }tqupr = (lponkm = void 0x0 === lponkm ? !0x1 : lponkm) ? stupr : (moqrp = optr['getFileInfo'](stupr)['md5'], optr['getFileNativePath'](moqrp)), null == truws['imgCache'] && (truws['imgCache'] = {}), lponkm = function () {
      pqlnmo(), truws['onLoaded'](lmnkjo);
    };var moqrp = function () {
      pqlnmo(), truws['event']('error', 'Load image failed');
    };'nativeimage' == truws['_type'] ? ((lmnkjo = new fegcbd['window']['Image']())['crossOrigin'] = '', lmnkjo['onload'] = lponkm, lmnkjo['onerror'] = moqrp, lmnkjo['src'] = tqupr, truws['imgCache'][stupr] = lmnkjo) : new ikjfh['create'](tqupr, { 'onload': lponkm, 'onerror': moqrp, 'onCreate': function (edfbac) {
        lmnkjo = edfbac, truws['imgCache'][stupr] = edfbac;
      } });
  };function zy$x0() {}var jhigkf = (chegfd(gdbfec, 'laya.wx.mini.MiniInput'), gdbfec['_createInputElement'] = function () {
    jiml['_initInput'](jiml['area'] = fegcbd['createElement']('textarea')), jiml['_initInput'](jiml['input'] = fegcbd['createElement']('input')), jiml['inputContainer'] = fegcbd['createElement']('div'), jiml['inputContainer']['style']['position'] = 'absolute', jiml['inputContainer']['style']['zIndex'] = 0x186a0, fegcbd['container']['appendChild'](jiml['inputContainer']), jiml['inputContainer']['setPos'] = function (rqvus, urwt) {
      jiml['inputContainer']['style']['left'] = rqvus + 'px', jiml['inputContainer']['style']['top'] = urwt + 'px';
    }, fikhg['stage']['on']('resize', null, gdbfec['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rpsqto) {
      wsur['dispatchEvent'] && wsur['dispatchEvent']('resize');
    }), upt['_soundClass'] = _341, upt['_musicClass'] = _341;
  }, gdbfec['_onStageResize'] = function () {
    fikhg['stage']['_canvasTransform']['identity']()['scale'](fegcbd['width'] / qrsnop['canvas']['width'] / nilmkj['getPixelRatio'](), fegcbd['height'] / qrsnop['canvas']['height'] / nilmkj['getPixelRatio']());
  }, gdbfec['wxinputFocus'] = function (hfj) {
    var zwvyux = jiml['inputElement']['target'];zwvyux && !zwvyux['editable'] || (vtuwy['window']['wx']['offKeyboardConfirm'](), vtuwy['window']['wx']['offKeyboardInput'](), vtuwy['window']['wx']['showKeyboard']({ 'defaultValue': zwvyux['text'], 'maxLength': zwvyux['maxChars'], 'multiple': zwvyux['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (qsrtpu) {}, 'fail': function (tqusrp) {} }), vtuwy['window']['wx']['onKeyboardConfirm'](function ($3_102) {
      $3_102 = $3_102 ? $3_102['value'] : '', (zwvyux['text'] = $3_102, zwvyux['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), vtuwy['window']['wx']['onKeyboardInput'](function (jhfeg) {
      jhfeg = jhfeg ? jhfeg['value'] : '', zwvyux['multiline'] || -0x1 == jhfeg['indexOf']('\x0a') ? (zwvyux['text'] = jhfeg, zwvyux['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, gdbfec['inputEnter'] = function () {
    jiml['inputElement']['target']['focus'] = !0x1;
  }, gdbfec['wxinputblur'] = function () {
    gdbfec['hideKeyboard']();
  }, gdbfec['hideKeyboard'] = function () {
    vtuwy['window']['wx']['offKeyboardConfirm'](), vtuwy['window']['wx']['offKeyboardInput'](), vtuwy['window']['wx']['hideKeyboard']({ 'success': function (egidfh) {
        console['log']('隐藏键盘');
      }, 'fail': function (_134) {
        console['log']('隐藏键盘出错:' + (_134 ? _134['errMsg'] : ''));
      } });
  }, gdbfec);function gdbfec() {}var jgikfh = function () {
    function jkhlg() {}chegfd(jkhlg, 'laya.wx.mini.MiniLoader');var zxvuyw = jkhlg['prototype'];return zxvuyw['load'] = function (urqpts, z1_y0, ihlkm, lmqpon, z_0$y) {
      void 0x0 === ihlkm && (ihlkm = !0x0), void 0x0 === z_0$y && (z_0$y = !0x1);var xywzv = this;0x0 === (xywzv['_url'] = urqpts)['indexOf']('data:image') ? xywzv['_type'] = z1_y0 = 'image' : xywzv['_type'] = z1_y0 = z1_y0 || xywzv['getTypeFromUrl'](urqpts), xywzv['_cache'] = ihlkm, xywzv['_data'] = null;var rnqso = 'ascii';-0x1 != urqpts['indexOf']('.fnt') ? rnqso = 'utf8' : 'arraybuffer' == z1_y0 && (rnqso = '');var hfdie = onljkm['getFileExtension'](urqpts);if (-0x1 != jkhlg['_fileTypeArr']['indexOf'](hfdie)) vtuwy['EnvConfig']['load']['call'](this, urqpts, z1_y0, ihlkm, lmqpon, z_0$y);else {
        if (optr['getFileInfo'](urqpts)) vtuwy['EnvConfig']['load']['call'](this, urqpts, z1_y0, ihlkm, lmqpon, z_0$y);else {
          if (-0x1 != urqpts['indexOf']('layaNativeDir/')) {
            if (vtuwy['isZiYu']) {
              var $y10_z = optr['ziyuFileData'][urqpts];return void xywzv['onLoaded']($y10_z);
            }return cosnole['log']('read read'), void optr['read'](urqpts, rnqso, new $0_2z(jkhlg, jkhlg['onReadNativeCallBack'], [rnqso, urqpts, z1_y0, ihlkm, lmqpon, z_0$y, xywzv]));
          }$y10_z = '' == jhfe['rootPath'] ? urqpts : urqpts['split'](jhfe['rootPath'])[0x0], -0x1 != urqpts['indexOf']('http://') || -0x1 != urqpts['indexOf']('https://') ? vtuwy['EnvConfig']['load']['call'](xywzv, urqpts, z1_y0, ihlkm, lmqpon, z_0$y) : optr['readFile']($y10_z, rnqso, new $0_2z(jkhlg, jkhlg['onReadNativeCallBack'], [rnqso, urqpts, z1_y0, ihlkm, lmqpon, z_0$y, xywzv]), urqpts);
        }
      }
    }, zxvuyw['resMgrLoad'] = function (_120$, surtqv, vtuwr, qorm, gfjkih, aebcdf, zxvwuy) {
      void 0x0 === vtuwr && (vtuwr = 0x0), void 0x0 === qorm && (qorm = !0x1), void 0x0 === gfjkih && (gfjkih = !0x1), void 0x0 === aebcdf && (aebcdf = 0x0), void 0x0 === zxvwuy && (zxvwuy = 0x3), -0x1 != _120$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _120$), vtuwy['EnvConfig']['resMgrLoad'](_120$, (rswutv, hidgfe, z_21$) => {
        jkhlg['prototype']['resMgrLoadCallBack'](rswutv, hidgfe, z_21$, surtqv);
      }, vtuwr, qorm, gfjkih, aebcdf, zxvwuy);
    }, zxvuyw['resMgrLoadCallBack'] = function (lkpnom, qptosr, qrpom, pmrqn) {
      console['log']('buff:::', lkpnom, qrpom, optr['fileNativeDir'] + '///' + optr['fileListName']), pmrqn(lkpnom, qptosr, qrpom);
    }, zxvuyw['clearRes'] = function ($wzyxv, $wyzv) {
      this['clearRes']($wzyxv, $wyzv = void 0x0 === $wyzv ? !0x1 : $wyzv), $wyzv = optr['getFileInfo']($wzyxv), !$wyzv || -0x1 == $wzyxv['indexOf']('http://') && -0x1 == $wzyxv['indexOf']('https://') || ($wyzv = $wyzv['md5'], $wyzv = optr['getFileNativePath']($wyzv), optr['remove']($wyzv));
    }, jkhlg['onReadNativeCallBack'] = function (kgijf, y$_1, imlkn, npolmq, ieghj, ijhlmk, dcbgfe, qrospn, zyx0$_) {
      void 0x0 === npolmq && (npolmq = !0x0), void 0x0 === ijhlmk && (ijhlmk = !0x1), (qrospn = void 0x0 === qrospn ? 0x0 : qrospn) ? 0x1 == qrospn && vtuwy['EnvConfig']['load']['call'](dcbgfe, y$_1, imlkn, npolmq, ieghj, ijhlmk) : (zyx0$_ = 'json' == imlkn || 'atlas' == imlkn ? vtuwy['getJson'](zyx0$_['data']) : 'xml' == imlkn ? onljkm['parseXMLFromString'](zyx0$_['data']) : zyx0$_['data'], dcbgfe['onLoaded'](zyx0$_), !vtuwy['isZiYu'] && vtuwy['isPosMsgYu'] && 'arraybuffer' != imlkn && wx['postMessage']({ 'url': y$_1, 'data': zyx0$_, 'isLoad': !0x0 }));
    }, $zyvw(jkhlg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jkhlg;
  }(),
      optr = (chegfd(npmk, 'laya.wx.mini.MiniFileMgr', eid), npmk['isLoadFile'] = function (rwtusv) {
    return -0x1 != npmk['_fileTypeArr']['indexOf'](rwtusv);
  }, npmk['getFileInfo'] = function (nlopmk) {
    return nlopmk = nlopmk['split']('?')[0x0], nlopmk = npmk['filesListObj'][nlopmk], null == nlopmk ? null : nlopmk;
  }, npmk['onFileUpdate'] = function (jilmk, trquvs) {
    var _0$2z1 = jilmk['split']('/');jilmk = _0$2z1[_0$2z1['length'] - 0x1], _0$2z1 = npmk['getFileInfo'](trquvs), null == _0$2z1 ? npmk['onSaveFile'](trquvs, jilmk) : _0$2z1['readyUrl'] != trquvs && npmk['remove'](jilmk, trquvs);
  }, npmk['exits'] = function (fjkgih, $2103_) {
    fjkgih = npmk['getFileNativePath'](fjkgih), npmk['fs']['getFileInfo']({ 'filePath': fjkgih, 'success': function (snoqrp) {
        null != $2103_ && $2103_['runWith']([0x0, snoqrp]);
      }, 'fail': function (cfdegh) {
        null != $2103_ && $2103_['runWith']([0x1, cfdegh]);
      } });
  }, npmk['read'] = function (plnq, gjefh, ghdfe, jgihfk) {
    void 0x0 === gjefh && (gjefh = 'ascill'), plnq = '' != (jgihfk = void 0x0 === jgihfk ? '' : jgihfk) ? npmk['getFileNativePath'](plnq) : plnq, npmk['fs']['readFile']({ 'filePath': plnq, 'encoding': gjefh, 'success': function (jgk) {
        null != ghdfe && ghdfe['runWith']([0x0, jgk]);
      }, 'fail': function (zuxwyv) {
        zuxwyv && '' != jgihfk ? npmk['down'](jgihfk, gjefh, ghdfe, jgihfk) : null != ghdfe && ghdfe['runWith']([0x1]);
      } });
  }, npmk['readNativeFile'] = function (tpro, egfdch) {
    npmk['fs']['readFile']({ 'filePath': tpro, 'encoding': '', 'success': function (z$01) {
        null != egfdch && egfdch['runWith']([0x0]);
      }, 'fail': function (jhm) {
        null != egfdch && egfdch['runWith']([0x1]);
      } });
  }, npmk['down'] = function (hfdegi, mjklhi, y01$, trsuqv) {
    void 0x0 === mjklhi && (mjklhi = 'ascill'), void 0x0 === trsuqv && (trsuqv = '');var y$z10_ = npmk['getFileNativePath'](trsuqv);npmk['wxdown']({ 'url': hfdegi, 'filePath': y$z10_, 'success': function (zxvyw$) {
        0xc8 === zxvyw$['statusCode'] && npmk['readFile'](zxvyw$['filePath'], mjklhi, y01$, trsuqv);
      }, 'fail': function ($wzvx) {
        null != y01$ && y01$['runWith']([0x1, $wzvx]);
      } })['onProgressUpdate'](function (psturq) {
      null != y01$ && y01$['runWith']([0x2, psturq['progress']]);
    });
  }, npmk['readFile'] = function (khjmil, lkponm, twyx, qvtsu) {
    void 0x0 === qvtsu && (qvtsu = ''), npmk['fs']['readFile']({ 'filePath': khjmil, 'encoding': lkponm = void 0x0 === lkponm ? 'ascill' : lkponm, 'success': function (pqrom) {
        -0x1 == khjmil['indexOf']('http://') && -0x1 == khjmil['indexOf']('https://') || npmk['onFileUpdate'](khjmil, qvtsu), null != twyx && twyx['runWith']([0x0, pqrom]);
      }, 'fail': function (acbed) {
        acbed && null != twyx && twyx['runWith']([0x1, acbed]);
      } });
  }, npmk['downImg'] = function (wzx$_y, uxzy, onlmp) {
    void 0x0 === onlmp && (onlmp = ''), npmk['wxdown']({ 'url': wzx$_y, 'success': function (monj) {
        0xc8 === monj['statusCode'] && npmk['copyFile'](monj['tempFilePath'], onlmp, uxzy);
      }, 'fail': function (lnoqmp) {
        null != uxzy && uxzy['runWith']([0x1, lnoqmp]);
      } });
  }, npmk['copyFile'] = function (yxzuvw, z10_$2, kinm) {
    var hgcd = yxzuvw['split']('/'),
        ighej = hgcd[hgcd['length'] - 0x1];z10_$2['split']('?')[0x0];var $1_z = npmk['getFileInfo'](z10_$2);hgcd = npmk['getFileNativePath'](ighej), npmk['fs']['copyFile']({ 'srcPath': yxzuvw, 'destPath': hgcd, 'success': function (yxzw$v) {
        $1_z ? $1_z['readyUrl'] != z10_$2 && npmk['remove'](ighej, z10_$2, kinm) : (npmk['onSaveFile'](z10_$2, ighej), null != kinm && kinm['runWith']([0x0]));
      }, 'fail': function (sopnrq) {
        null != kinm && kinm['runWith']([0x1, sopnrq]);
      } });
  }, npmk['getFileNativePath'] = function (yvxtu) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yvxtu;
  }, npmk['remove'] = function (xzuwvy, gkfjih, imlj) {
    void 0x0 === gkfjih && (gkfjih = '');var tsqopr = npmk['getFileInfo'](gkfjih),
        x$_0 = npmk['getFileNativePath'](tsqopr['md5']);fikhg['loader']['clearRes'](tsqopr['readyUrl']), npmk['fs']['unlink']({ 'filePath': x$_0, 'success': function (kplnm) {
        '' != gkfjih && npmk['onSaveFile'](gkfjih, xzuwvy), null != imlj && imlj['runWith']([0x0]);
      }, 'fail': function (mnokjl) {} });
  }, npmk['onSaveFile'] = function (xvy, imljn) {
    var cdehf = xvy['split']('?')[0x0];npmk['filesListObj'][cdehf] = { 'md5': imljn, 'readyUrl': xvy }, npmk['fs']['writeFile']({ 'filePath': npmk['fileNativeDir'] + '/' + npmk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](npmk['filesListObj']), 'success': function (hidg) {
        console['log']('写入测试测试成功：', hidg);
      }, 'fail': function (efdihg) {
        console['log']('写入测试测试失败：', efdihg);
      } });
  }, npmk['existDir'] = function (srput, x$zw) {
    npmk['fs']['mkdir']({ 'dirPath': srput, 'success': function ($x0z) {
        null != x$zw && x$zw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (jhgef) {
        -0x1 != jhgef['errMsg']['indexOf']('file already exists') ? npmk['readSync'](npmk['fileListName'], 'utf8', x$zw) : null != x$zw && x$zw['runWith']([0x1, jhgef]);
      } });
  }, npmk['readSync'] = function (poqln, hfgkji, fihkj, qosrtp) {
    void 0x0 === hfgkji && (hfgkji = 'ascill'), void 0x0 === qosrtp && (qosrtp = ''), poqln = npmk['getFileNativePath'](poqln);var lmkhj;try {
      lmkhj = npmk['fs']['readFileSync'](poqln), null != fihkj && fihkj['runWith']([0x0, { 'data': lmkhj }]);
    } catch (oklmjn) {
      null != fihkj && fihkj['runWith']([0x1]);
    }
  }, npmk['readCache'] = function () {}, npmk['writeCache'] = function (kijhgl) {
    var stvruw = readyUrl['split']('?')[0x0];npmk['filesListObj'][stvruw] = { 'md5': md5Name, 'readyUrl': readyUrl }, npmk['fs']['writeFile']({ 'filePath': npmk['fileNativeDir'] + '/' + npmk['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](npmk['filesListObj']), 'success': function (normpq) {}, 'fail': function (_z0x$y) {} });
  }, npmk['setNativeFileDir'] = function (edigf) {
    npmk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + edigf;
  }, npmk['filesListObj'] = {}, npmk['fileNativeDir'] = null, npmk['fileListName'] = 'layaairfiles.txt', npmk['ziyuFileData'] = {}, $zyvw(npmk, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), npmk);function npmk() {
    npmk['__super']['call'](this);
  }var _341 = function () {
    function hfije() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, hfije['__super']['call'](this), this['_sound'] = hfije['_createSound']();
    }chegfd(hfije, 'laya.wx.mini.MiniSound', eid);var cdaebf = hfije['prototype'];return cdaebf['load'] = function (xzv$w) {
      var qsurv = this,
          zv$yxw;function vyxu() {
        if (null != hfije['_null']) qsurv['_sound']['onCanplay'](hfije['_null']), qsurv['_sound']['onError'](hfije['_null']);else try {
          qsurv['_sound']['onCanplay'](null), qsurv['_sound']['onError'](null), hfije['_null'] = null;
        } catch (y$z_x0) {
          console['warn']('[wxmini] _clearSound:' + y$z_x0), qsurv['_sound']['onCanplay']($0zx_y), qsurv['_sound']['onError']($0zx_y), hfije['_null'] = $0zx_y;
        }
      }function $0zx_y() {}xzv$w = jhfe['formatURL'](xzv$w), this['url'] = xzv$w, hfije['_audioCache'][xzv$w] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        vyxu(), zv$yxw['loaded'] = !0x0, zv$yxw['event']('complete'), hfije['_audioCache'][zv$yxw['url']] = zv$yxw;
      }), this['_sound']['onError'](function (prtqu) {
        console['error']('errCode=' + prtqu['errCode'] + '  errMsg=' + prtqu['errMsg']), vyxu(), zv$yxw['event']('error');
      }), this['_sound']['src'] = xzv$w, zv$yxw = this);
    }, cdaebf['play'] = function (_x$z0, klpmon) {
      void 0x0 === _x$z0 && (_x$z0 = 0x0), void 0x0 === klpmon && (klpmon = 0x0), (mhilk = this['url'] == upt['_tMusic'] ? (hfije['_musicAudio'] || (hfije['_musicAudio'] = hfije['_createSound']()), hfije['_musicAudio']) : hfije['_createSound']())['src'] = this['url'];var mhilk = new $0312_(mhilk);return mhilk['url'] = this['url'], mhilk['loops'] = klpmon, mhilk['startTime'] = _x$z0, mhilk['play'](), upt['addChannel'](mhilk), mhilk;
    }, cdaebf['dispose'] = function () {
      var adfb = hfije['_audioCache'][this['url']];adfb && (adfb['src'] = '', delete hfije['_audioCache'][this['url']]);
    }, uwvrs(0x0, cdaebf, 'duration', function () {
      return this['_sound']['duration'];
    }), hfije['_createSound'] = function () {
      return hfije['_id']++, vtuwy['window']['wx']['createInnerAudioContext']();
    }, hfije['_musicAudio'] = null, hfije['_id'] = 0x0, hfije['_audioCache'] = {}, hfije['_null'] = void 0x0, hfije;
  }(),
      $0312_ = function () {
    function fje(mlonkj) {
      this['_audio'] = null, this['_onEnd'] = null, fje['__super']['call'](this), this['_audio'] = mlonkj, this['_onEnd'] = onljkm['bind'](this['__onEnd'], this), mlonkj['onEnded'](this['_onEnd']);
    }chegfd(fje, 'laya.wx.mini.MiniSoundChannel', hgli);var wvyxtu = fje['prototype'];return wvyxtu['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (fikhg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wvyxtu['__onNull'] = function () {}, wvyxtu['play'] = function () {
      this['isStopped'] = !0x1, upt['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, wvyxtu['stop'] = function () {
      if (this['isStopped'] = !0x0, upt['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != fje['_null']) this['_audio']['onEnded'](fje['_null']);else try {
          this['_audio']['onEnded'](null), fje['_null'] = null;
        } catch (ojnk) {
          console['warn']('[wxmini] stop:' + ojnk), this['_audio']['onEnded'](onljkm['bind'](this['__onNull'], this)), fje['_null'] = onljkm['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, wvyxtu['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, wvyxtu['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, upt['addChannel'](this), this['_audio']['play']());
    }, uwvrs(0x0, wvyxtu, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), uwvrs(0x0, wvyxtu, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), uwvrs(0x0, wvyxtu, 'volume', function () {
      return 0x1;
    }, function (prtsoq) {}), fje['_null'] = void 0x0, fje;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (_2$01, rsuwvt) {
  'use strict';

  for (var wuxzvy in Object['defineProperty'](rsuwvt, '__esModule', { 'value': !0x0 }), Laya) {
    var ihlgkj = Laya[wuxzvy];ihlgkj && ihlgkj['__isclass'] && (rsuwvt[wuxzvy] = ihlgkj);
  }
});