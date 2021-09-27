var _ = wx.y$;
!function (mljhki, vxuwts) {
  vxuwts['un'], vxuwts['uns'];var tpru = vxuwts['static'],
      gfjki = vxuwts['class'],
      truvsq = vxuwts['getset'];vxuwts['__newvec'];var eij = laya['utils']['Browser'],
      befcd = (laya['events']['Event'], laya['events']['EventDispatcher']),
      _132$ = laya['resource']['HTMLImage'],
      lmihkj = laya['utils']['Handler'],
      jkghfi = laya['display']['Input'],
      nmopkl = laya['net']['Loader'];laya['maths']['Matrix'];var gehcd = laya['renders']['Render'],
      ifjkh = laya['utils']['RunDriver'];laya['media']['Sound'];var gcdbe = laya['media']['SoundChannel'],
      uxwvst = laya['media']['SoundManager'],
      oljnk = (laya['display']['Stage'], laya['net']['URL']),
      mikhlj = laya['utils']['Utils'],
      pomln = (gfjki(lojkmn, 'laya.wx.mini.MiniAdpter'), lojkmn['getJson'] = function (edghc) {
    return JSON['parse'](edghc);
  }, lojkmn['init'] = function (cfabde, $vyx) {
    void 0x0 === cfabde && (cfabde = !0x1), void 0x0 === $vyx && ($vyx = !0x1), lojkmn['_inited'] || (lojkmn['window'] = mljhki)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (lojkmn['_inited'] = !0x0, lojkmn['isZiYu'] = $vyx, lojkmn['isPosMsgYu'] = cfabde, lojkmn['EnvConfig'] = {}, lojkmn['isZiYu'] || (tvyux['setNativeFileDir']('/layaairGame'), tvyux['existDir'](tvyux['fileNativeDir'], lmihkj['create'](lojkmn, lojkmn['onMkdirCallBack']))), lojkmn['window']['focus'] = function () {}, vxuwts['getUrlPath'] = function () {}, lojkmn['window']['logtime'] = function (y_zx$w) {}, lojkmn['window']['alertTimeLog'] = function (imjnkl) {}, lojkmn['window']['resetShareInfo'] = function () {}, lojkmn['window']['CanvasRenderingContext2D'] = function () {}, lojkmn['window']['CanvasRenderingContext2D']['prototype'] = lojkmn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lojkmn['window']['document']['body']['appendChild'] = function () {}, lojkmn['EnvConfig']['pixelRatioInt'] = 0x0, ifjkh['getPixelRatio'] = lojkmn['pixelRatio'], lojkmn['_preCreateElement'] = eij['createElement'], eij['createElement'] = lojkmn['createElement'], ifjkh['createShaderCondition'] = lojkmn['createShaderCondition'], mikhlj['parseXMLFromString'] = lojkmn['parseXMLFromString'], jkghfi['_createInputElement'] = mronp['_createInputElement'], lojkmn['EnvConfig']['load'] = nmopkl['prototype']['load'], nmopkl['prototype']['load'] = ebcdgf['prototype']['load'], lojkmn['isZiYu'] && cfabde && wx['onMessage'](function (ihfgde) {
      ihfgde['isLoad'] && (tvyux['ziyuFileData'][ihfgde['url']] = ihfgde['data']);
    }));
  }, lojkmn['onMkdirCallBack'] = function (bgdcef, twuvxs) {
    bgdcef || (tvyux['filesListObj'] = JSON['parse'](twuvxs['data']));
  }, lojkmn['pixelRatio'] = function () {
    if (!lojkmn['EnvConfig']['pixelRatioInt']) try {
      var rqpn = wx['getSystemInfoSync']();return lojkmn['EnvConfig']['pixelRatioInt'] = rqpn['pixelRatio'], rqpn['pixelRatio'];
    } catch (igefdh) {}return lojkmn['EnvConfig']['pixelRatioInt'];
  }, lojkmn['createElement'] = function (ifkhj) {
    var fegch;if ('canvas' == ifkhj) return 0x1 == lojkmn['idx'] ? lojkmn['isZiYu'] ? (fegch = sharedCanvas)['style'] = {} : fegch = mljhki['canvas'] : fegch = mljhki['wx']['createCanvas'](), lojkmn['idx']++, fegch;if ('textarea' == ifkhj || 'input' == ifkhj) return lojkmn['onCreateInput'](ifkhj);if ('div' != ifkhj) return lojkmn['_preCreateElement'](ifkhj);return ifkhj = lojkmn['_preCreateElement'](ifkhj), (ifkhj['contains'] = function (wvtsu) {
      return null;
    }, ifkhj['removeChild'] = function (egifdh) {}, ifkhj);
  }, lojkmn['onCreateInput'] = function (uvrstw) {
    return uvrstw = lojkmn['_preCreateElement'](uvrstw), (uvrstw['focus'] = mronp['wxinputFocus'], uvrstw['blur'] = mronp['wxinputblur'], uvrstw['style'] = {}, uvrstw['value'] = 0x0, uvrstw['parentElement'] = {}, uvrstw['placeholder'] = {}, uvrstw['type'] = {}, uvrstw['setColor'] = function (dcbefg) {}, uvrstw['setType'] = function (hgec) {}, uvrstw['setFontFace'] = function (fgdbe) {}, uvrstw['addEventListener'] = function (nopqlm) {}, uvrstw['contains'] = function (stvrqu) {
      return null;
    }, uvrstw['removeChild'] = function (_zx0y) {}, uvrstw);
  }, lojkmn['createShaderCondition'] = function (zx$y_) {
    var tsuvwr = this;return function () {
      return tsuvwr[zx$y_['replace']('this.', '')];
    };
  }, lojkmn['EnvConfig'] = null, lojkmn['window'] = null, lojkmn['_preCreateElement'] = null, lojkmn['_inited'] = !0x1, lojkmn['wxRequest'] = null, lojkmn['systemInfo'] = null, lojkmn['version'] = '0.0.1', lojkmn['isZiYu'] = !0x1, lojkmn['isPosMsgYu'] = !0x1, lojkmn['parseXMLFromString'] = function (srv) {
    var lojm;srv = srv['replace'](/>\s+</g, '><');try {
      lojm = new mljhki['Parser']['DOMParser']()['parseFromString'](srv, 'text/xml');
    } catch (rsuq) {
      throw '需要引入xml解析库文件';
    }return lojm;
  }, lojkmn['idx'] = 0x1, lojkmn);function lojkmn() {}gfjki(gid, 'laya.wx.mini.MiniImage'), gid['prototype']['_loadImage'] = function (fecdgb) {
    var vyxw$ = !0x1;-0x1 == fecdgb['indexOf']('layaNativeDir/') && (vyxw$ = !0x0, fecdgb = oljnk['formatURL'](fecdgb)), tvyux['getFileInfo'](fecdgb) ? gid['onCreateImage'](fecdgb, this, !vyxw$) : -0x1 != fecdgb['indexOf']('http://') || -0x1 != fecdgb['indexOf']('https://') ? tvyux['downImg'](fecdgb, new lmihkj(gid, gid['onDownImgCallBack'], [fecdgb, this]), fecdgb) : gid['onCreateImage'](fecdgb, this, !0x0);
  }, gid['onDownImgCallBack'] = function (ikhjf, fehcg, rnomp) {
    rnomp ? fehcg['onError'](null) : gid['onCreateImage'](ikhjf, fehcg);
  }, gid['onCreateImage'] = function (xzw$_y, nosr, xvswut) {
    var uyzwvx, febdca;function nimkjl() {
      febdca['onload'] = null, febdca['onerror'] = null, delete nosr['imgCache'][xzw$_y];
    }uyzwvx = (xvswut = void 0x0 === xvswut ? !0x1 : xvswut) ? xzw$_y : (xwvytu = tvyux['getFileInfo'](xzw$_y)['md5'], tvyux['getFileNativePath'](xwvytu)), null == nosr['imgCache'] && (nosr['imgCache'] = {}), xvswut = function () {
      nimkjl(), nosr['onLoaded'](febdca);
    };var xwvytu = function () {
      nimkjl(), nosr['event']('error', 'Load image failed');
    };'nativeimage' == nosr['_type'] ? ((febdca = new eij['window']['Image']())['crossOrigin'] = '', febdca['onload'] = xvswut, febdca['onerror'] = xwvytu, febdca['src'] = uyzwvx, nosr['imgCache'][xzw$_y] = febdca) : new _132$['create'](uyzwvx, { 'onload': xvswut, 'onerror': xwvytu, 'onCreate': function (loqp) {
        febdca = loqp, nosr['imgCache'][xzw$_y] = loqp;
      } });
  };function gid() {}var mronp = (gfjki(xwz_$, 'laya.wx.mini.MiniInput'), xwz_$['_createInputElement'] = function () {
    jkghfi['_initInput'](jkghfi['area'] = eij['createElement']('textarea')), jkghfi['_initInput'](jkghfi['input'] = eij['createElement']('input')), jkghfi['inputContainer'] = eij['createElement']('div'), jkghfi['inputContainer']['style']['position'] = 'absolute', jkghfi['inputContainer']['style']['zIndex'] = 0x186a0, eij['container']['appendChild'](jkghfi['inputContainer']), jkghfi['inputContainer']['setPos'] = function (xz$_0y, feacd) {
      jkghfi['inputContainer']['style']['left'] = xz$_0y + 'px', jkghfi['inputContainer']['style']['top'] = feacd + 'px';
    }, vxuwts['stage']['on']('resize', null, xwz_$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (uxvwst) {
      mljhki['dispatchEvent'] && mljhki['dispatchEvent']('resize');
    }), uxwvst['_soundClass'] = qrsvt, uxwvst['_musicClass'] = qrsvt;
  }, xwz_$['_onStageResize'] = function () {
    vxuwts['stage']['_canvasTransform']['identity']()['scale'](eij['width'] / gehcd['canvas']['width'] / ifjkh['getPixelRatio'](), eij['height'] / gehcd['canvas']['height'] / ifjkh['getPixelRatio']());
  }, xwz_$['wxinputFocus'] = function (mljo) {
    var ilkmh = jkghfi['inputElement']['target'];ilkmh && !ilkmh['editable'] || (pomln['window']['wx']['offKeyboardConfirm'](), pomln['window']['wx']['offKeyboardInput'](), pomln['window']['wx']['showKeyboard']({ 'defaultValue': ilkmh['text'], 'maxLength': ilkmh['maxChars'], 'multiple': ilkmh['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (cebad) {}, 'fail': function (rsqpot) {} }), pomln['window']['wx']['onKeyboardConfirm'](function (hdcefg) {
      hdcefg = hdcefg ? hdcefg['value'] : '', (ilkmh['text'] = hdcefg, ilkmh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), pomln['window']['wx']['onKeyboardInput'](function (x$vw) {
      x$vw = x$vw ? x$vw['value'] : '', ilkmh['multiline'] || -0x1 == x$vw['indexOf']('\x0a') ? (ilkmh['text'] = x$vw, ilkmh['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, xwz_$['inputEnter'] = function () {
    jkghfi['inputElement']['target']['focus'] = !0x1;
  }, xwz_$['wxinputblur'] = function () {
    xwz_$['hideKeyboard']();
  }, xwz_$['hideKeyboard'] = function () {
    pomln['window']['wx']['offKeyboardConfirm'](), pomln['window']['wx']['offKeyboardInput'](), pomln['window']['wx']['hideKeyboard']({ 'success': function (vuywt) {
        console['log']('隐藏键盘');
      }, 'fail': function (utywvx) {
        console['log']('隐藏键盘出错:' + (utywvx ? utywvx['errMsg'] : ''));
      } });
  }, xwz_$);function xwz_$() {}var ebcdgf = function () {
    function tyxvwu() {}gfjki(tyxvwu, 'laya.wx.mini.MiniLoader');var faebdc = tyxvwu['prototype'];return faebdc['load'] = function (hijg, wyz_x, yvxwz$, npkm, gjiklh) {
      void 0x0 === yvxwz$ && (yvxwz$ = !0x0), void 0x0 === gjiklh && (gjiklh = !0x1);var fihdg = this;0x0 === (fihdg['_url'] = hijg)['indexOf']('data:image') ? fihdg['_type'] = wyz_x = 'image' : fihdg['_type'] = wyz_x = wyz_x || fihdg['getTypeFromUrl'](hijg), fihdg['_cache'] = yvxwz$, fihdg['_data'] = null;var yzwv$ = 'ascii';-0x1 != hijg['indexOf']('.fnt') ? yzwv$ = 'utf8' : 'arraybuffer' == wyz_x && (yzwv$ = '');var npkmol = mikhlj['getFileExtension'](hijg);if (-0x1 != tyxvwu['_fileTypeArr']['indexOf'](npkmol)) pomln['EnvConfig']['load']['call'](this, hijg, wyz_x, yvxwz$, npkm, gjiklh);else {
        if (tvyux['getFileInfo'](hijg)) pomln['EnvConfig']['load']['call'](this, hijg, wyz_x, yvxwz$, npkm, gjiklh);else {
          if (-0x1 != hijg['indexOf']('layaNativeDir/')) {
            if (pomln['isZiYu']) {
              var z0$12_ = tvyux['ziyuFileData'][hijg];return void fihdg['onLoaded'](z0$12_);
            }return cosnole['log']('read read'), void tvyux['read'](hijg, yzwv$, new lmihkj(tyxvwu, tyxvwu['onReadNativeCallBack'], [yzwv$, hijg, wyz_x, yvxwz$, npkm, gjiklh, fihdg]));
          }z0$12_ = '' == oljnk['rootPath'] ? hijg : hijg['split'](oljnk['rootPath'])[0x0], -0x1 != hijg['indexOf']('http://') || -0x1 != hijg['indexOf']('https://') ? pomln['EnvConfig']['load']['call'](fihdg, hijg, wyz_x, yvxwz$, npkm, gjiklh) : tvyux['readFile'](z0$12_, yzwv$, new lmihkj(tyxvwu, tyxvwu['onReadNativeCallBack'], [yzwv$, hijg, wyz_x, yvxwz$, npkm, gjiklh, fihdg]), hijg);
        }
      }
    }, faebdc['resMgrLoad'] = function (pkmnol, molkjn, lmqn, yuwzv, uyzxv, njik, lkjgih) {
      void 0x0 === lmqn && (lmqn = 0x0), void 0x0 === yuwzv && (yuwzv = !0x1), void 0x0 === uyzxv && (uyzxv = !0x1), void 0x0 === njik && (njik = 0x0), void 0x0 === lkjgih && (lkjgih = 0x3), -0x1 != pkmnol['indexOf']('mpack') && console['log']('=============resMgrLoad url:', pkmnol), pomln['EnvConfig']['resMgrLoad'](pkmnol, (ljnmki, rtvqu, hkljg) => {
        tyxvwu['prototype']['resMgrLoadCallBack'](ljnmki, rtvqu, hkljg, molkjn);
      }, lmqn, yuwzv, uyzxv, njik, lkjgih);
    }, faebdc['resMgrLoadCallBack'] = function (iejgh, dgbc, gkl, mrnpq) {
      console['log']('buff:::', iejgh, gkl, tvyux['fileNativeDir'] + '///' + tvyux['fileListName']), mrnpq(iejgh, dgbc, gkl);
    }, faebdc['clearRes'] = function (qtuvsr, _13402) {
      this['clearRes'](qtuvsr, _13402 = void 0x0 === _13402 ? !0x1 : _13402), _13402 = tvyux['getFileInfo'](qtuvsr), !_13402 || -0x1 == qtuvsr['indexOf']('http://') && -0x1 == qtuvsr['indexOf']('https://') || (_13402 = _13402['md5'], _13402 = tvyux['getFileNativePath'](_13402), tvyux['remove'](_13402));
    }, tyxvwu['onReadNativeCallBack'] = function (ehfid, olmkn, vtrsq, gkfhi, ieghdf, rtspuq, tswuxv, lkmjh, fihkjg) {
      void 0x0 === gkfhi && (gkfhi = !0x0), void 0x0 === rtspuq && (rtspuq = !0x1), (lkmjh = void 0x0 === lkmjh ? 0x0 : lkmjh) ? 0x1 == lkmjh && pomln['EnvConfig']['load']['call'](tswuxv, olmkn, vtrsq, gkfhi, ieghdf, rtspuq) : (fihkjg = 'json' == vtrsq || 'atlas' == vtrsq ? pomln['getJson'](fihkjg['data']) : 'xml' == vtrsq ? mikhlj['parseXMLFromString'](fihkjg['data']) : fihkjg['data'], tswuxv['onLoaded'](fihkjg), !pomln['isZiYu'] && pomln['isPosMsgYu'] && 'arraybuffer' != vtrsq && wx['postMessage']({ 'url': olmkn, 'data': fihkjg, 'isLoad': !0x0 }));
    }, tpru(tyxvwu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), tyxvwu;
  }(),
      tvyux = (gfjki(likjg, 'laya.wx.mini.MiniFileMgr', befcd), likjg['isLoadFile'] = function (fecdhg) {
    return -0x1 != likjg['_fileTypeArr']['indexOf'](fecdhg);
  }, likjg['getFileInfo'] = function ($_z201) {
    return $_z201 = $_z201['split']('?')[0x0], $_z201 = likjg['filesListObj'][$_z201], null == $_z201 ? null : $_z201;
  }, likjg['onFileUpdate'] = function (ljhkgi, oljmnk) {
    var omnlj = ljhkgi['split']('/');ljhkgi = omnlj[omnlj['length'] - 0x1], omnlj = likjg['getFileInfo'](oljmnk), null == omnlj ? likjg['onSaveFile'](oljmnk, ljhkgi) : omnlj['readyUrl'] != oljmnk && likjg['remove'](ljhkgi, oljmnk);
  }, likjg['exits'] = function (fcdg, cgbe) {
    fcdg = likjg['getFileNativePath'](fcdg), likjg['fs']['getFileInfo']({ 'filePath': fcdg, 'success': function (dhgec) {
        null != cgbe && cgbe['runWith']([0x0, dhgec]);
      }, 'fail': function (feh) {
        null != cgbe && cgbe['runWith']([0x1, feh]);
      } });
  }, likjg['read'] = function (vrtus, rqptos, _1302, wrsvt) {
    void 0x0 === rqptos && (rqptos = 'ascill'), vrtus = '' != (wrsvt = void 0x0 === wrsvt ? '' : wrsvt) ? likjg['getFileNativePath'](vrtus) : vrtus, likjg['fs']['readFile']({ 'filePath': vrtus, 'encoding': rqptos, 'success': function (oqpnm) {
        null != _1302 && _1302['runWith']([0x0, oqpnm]);
      }, 'fail': function (zx0$) {
        zx0$ && '' != wrsvt ? likjg['down'](wrsvt, rqptos, _1302, wrsvt) : null != _1302 && _1302['runWith']([0x1]);
      } });
  }, likjg['readNativeFile'] = function (kmlpno, tsorqp) {
    likjg['fs']['readFile']({ 'filePath': kmlpno, 'encoding': '', 'success': function (_zxy$0) {
        null != tsorqp && tsorqp['runWith']([0x0]);
      }, 'fail': function (jhgfki) {
        null != tsorqp && tsorqp['runWith']([0x1]);
      } });
  }, likjg['down'] = function (uzxwv, xzyw_$, ilkghj, vrqtu) {
    void 0x0 === xzyw_$ && (xzyw_$ = 'ascill'), void 0x0 === vrqtu && (vrqtu = '');var jegfhi = likjg['getFileNativePath'](vrqtu);likjg['wxdown']({ 'url': uzxwv, 'filePath': jegfhi, 'success': function (vw$xyz) {
        0xc8 === vw$xyz['statusCode'] && likjg['readFile'](vw$xyz['filePath'], xzyw_$, ilkghj, vrqtu);
      }, 'fail': function (ik) {
        null != ilkghj && ilkghj['runWith']([0x1, ik]);
      } })['onProgressUpdate'](function (sxvw) {
      null != ilkghj && ilkghj['runWith']([0x2, sxvw['progress']]);
    });
  }, likjg['readFile'] = function (mnljk, rpto, qport, kijh) {
    void 0x0 === kijh && (kijh = ''), likjg['fs']['readFile']({ 'filePath': mnljk, 'encoding': rpto = void 0x0 === rpto ? 'ascill' : rpto, 'success': function (oqlpn) {
        -0x1 == mnljk['indexOf']('http://') && -0x1 == mnljk['indexOf']('https://') || likjg['onFileUpdate'](mnljk, kijh), null != qport && qport['runWith']([0x0, oqlpn]);
      }, 'fail': function (bdafe) {
        bdafe && null != qport && qport['runWith']([0x1, bdafe]);
      } });
  }, likjg['downImg'] = function (beaf, mlhkji, tuqsvr) {
    void 0x0 === tuqsvr && (tuqsvr = ''), likjg['wxdown']({ 'url': beaf, 'success': function (hijf) {
        0xc8 === hijf['statusCode'] && likjg['copyFile'](hijf['tempFilePath'], tuqsvr, mlhkji);
      }, 'fail': function (khglj) {
        null != mlhkji && mlhkji['runWith']([0x1, khglj]);
      } });
  }, likjg['copyFile'] = function (dgfbec, likmjn, opsq) {
    var $_301 = dgfbec['split']('/'),
        $x_0y = $_301[$_301['length'] - 0x1];likmjn['split']('?')[0x0];var z$0yx_ = likjg['getFileInfo'](likmjn);$_301 = likjg['getFileNativePath']($x_0y), likjg['fs']['copyFile']({ 'srcPath': dgfbec, 'destPath': $_301, 'success': function (xyzw$_) {
        z$0yx_ ? z$0yx_['readyUrl'] != likmjn && likjg['remove']($x_0y, likmjn, opsq) : (likjg['onSaveFile'](likmjn, $x_0y), null != opsq && opsq['runWith']([0x0]));
      }, 'fail': function (vyzuxw) {
        null != opsq && opsq['runWith']([0x1, vyzuxw]);
      } });
  }, likjg['getFileNativePath'] = function (fihjgk) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fihjgk;
  }, likjg['remove'] = function (zxuyvw, gedifh, otsqp) {
    void 0x0 === gedifh && (gedifh = '');var rvqus = likjg['getFileInfo'](gedifh),
        _xwyz = likjg['getFileNativePath'](rvqus['md5']);vxuwts['loader']['clearRes'](rvqus['readyUrl']), likjg['fs']['unlink']({ 'filePath': _xwyz, 'success': function (ifhjgk) {
        '' != gedifh && likjg['onSaveFile'](gedifh, zxuyvw), null != otsqp && otsqp['runWith']([0x0]);
      }, 'fail': function ($w_) {} });
  }, likjg['onSaveFile'] = function (gfdih, cgeb) {
    var nqr = gfdih['split']('?')[0x0];likjg['filesListObj'][nqr] = { 'md5': cgeb, 'readyUrl': gfdih }, likjg['fs']['writeFile']({ 'filePath': likjg['fileNativeDir'] + '/' + likjg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](likjg['filesListObj']), 'success': function (wyzx$v) {
        console['log']('写入测试测试成功：', wyzx$v);
      }, 'fail': function (zyvxwu) {
        console['log']('写入测试测试失败：', zyvxwu);
      } });
  }, likjg['existDir'] = function (srvu, ywvux) {
    likjg['fs']['mkdir']({ 'dirPath': srvu, 'success': function (molpqn) {
        null != ywvux && ywvux['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (tvsqu) {
        -0x1 != tvsqu['errMsg']['indexOf']('file already exists') ? likjg['readSync'](likjg['fileListName'], 'utf8', ywvux) : null != ywvux && ywvux['runWith']([0x1, tvsqu]);
      } });
  }, likjg['readSync'] = function (vzwyu, z20$, eidhfg, $zwvx) {
    void 0x0 === z20$ && (z20$ = 'ascill'), void 0x0 === $zwvx && ($zwvx = ''), vzwyu = likjg['getFileNativePath'](vzwyu);var pqnors;try {
      pqnors = likjg['fs']['readFileSync'](vzwyu), null != eidhfg && eidhfg['runWith']([0x0, { 'data': pqnors }]);
    } catch (qsrnp) {
      null != eidhfg && eidhfg['runWith']([0x1]);
    }
  }, likjg['readCache'] = function () {}, likjg['writeCache'] = function (dcbge) {
    var olqmnp = readyUrl['split']('?')[0x0];likjg['filesListObj'][olqmnp] = { 'md5': md5Name, 'readyUrl': readyUrl }, likjg['fs']['writeFile']({ 'filePath': likjg['fileNativeDir'] + '/' + likjg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](likjg['filesListObj']), 'success': function ($0xy_z) {}, 'fail': function (mopkl) {} });
  }, likjg['setNativeFileDir'] = function (gdbec) {
    likjg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gdbec;
  }, likjg['filesListObj'] = {}, likjg['fileNativeDir'] = null, likjg['fileListName'] = 'layaairfiles.txt', likjg['ziyuFileData'] = {}, tpru(likjg, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), likjg);function likjg() {
    likjg['__super']['call'](this);
  }var qrsvt = function () {
    function dhcgfe() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, dhcgfe['__super']['call'](this), this['_sound'] = dhcgfe['_createSound']();
    }gfjki(dhcgfe, 'laya.wx.mini.MiniSound', befcd);var fbcde = dhcgfe['prototype'];return fbcde['load'] = function (dgfceb) {
      var nqmpr = this,
          fidehg;function fidhg() {
        if (null != dhcgfe['_null']) nqmpr['_sound']['onCanplay'](dhcgfe['_null']), nqmpr['_sound']['onError'](dhcgfe['_null']);else try {
          nqmpr['_sound']['onCanplay'](null), nqmpr['_sound']['onError'](null), dhcgfe['_null'] = null;
        } catch (mjklhi) {
          console['warn']('[wxmini] _clearSound:' + mjklhi), nqmpr['_sound']['onCanplay'](ilgjk), nqmpr['_sound']['onError'](ilgjk), dhcgfe['_null'] = ilgjk;
        }
      }function ilgjk() {}dgfceb = oljnk['formatURL'](dgfceb), this['url'] = dgfceb, dhcgfe['_audioCache'][dgfceb] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        fidhg(), fidehg['loaded'] = !0x0, fidehg['event']('complete'), dhcgfe['_audioCache'][fidehg['url']] = fidehg;
      }), this['_sound']['onError'](function (nikjml) {
        console['error']('errCode=' + nikjml['errCode'] + '  errMsg=' + nikjml['errMsg']), fidhg(), fidehg['event']('error');
      }), this['_sound']['src'] = dgfceb, fidehg = this);
    }, fbcde['play'] = function (xuwvyz, efcbdg) {
      void 0x0 === xuwvyz && (xuwvyz = 0x0), void 0x0 === efcbdg && (efcbdg = 0x0), ($w_zyx = this['url'] == uxwvst['_tMusic'] ? (dhcgfe['_musicAudio'] || (dhcgfe['_musicAudio'] = dhcgfe['_createSound']()), dhcgfe['_musicAudio']) : dhcgfe['_createSound']())['src'] = this['url'];var $w_zyx = new $0z1_2($w_zyx);return $w_zyx['url'] = this['url'], $w_zyx['loops'] = efcbdg, $w_zyx['startTime'] = xuwvyz, $w_zyx['play'](), uxwvst['addChannel']($w_zyx), $w_zyx;
    }, fbcde['dispose'] = function () {
      var qutsv = dhcgfe['_audioCache'][this['url']];qutsv && (qutsv['src'] = '', delete dhcgfe['_audioCache'][this['url']]);
    }, truvsq(0x0, fbcde, 'duration', function () {
      return this['_sound']['duration'];
    }), dhcgfe['_createSound'] = function () {
      return dhcgfe['_id']++, pomln['window']['wx']['createInnerAudioContext']();
    }, dhcgfe['_musicAudio'] = null, dhcgfe['_id'] = 0x0, dhcgfe['_audioCache'] = {}, dhcgfe['_null'] = void 0x0, dhcgfe;
  }(),
      $0z1_2 = function () {
    function rsvtuw(vzywu) {
      this['_audio'] = null, this['_onEnd'] = null, rsvtuw['__super']['call'](this), this['_audio'] = vzywu, this['_onEnd'] = mikhlj['bind'](this['__onEnd'], this), vzywu['onEnded'](this['_onEnd']);
    }gfjki(rsvtuw, 'laya.wx.mini.MiniSoundChannel', gcdbe);var wtuvyx = rsvtuw['prototype'];return wtuvyx['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (vxuwts['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wtuvyx['__onNull'] = function () {}, wtuvyx['play'] = function () {
      this['isStopped'] = !0x1, uxwvst['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, wtuvyx['stop'] = function () {
      if (this['isStopped'] = !0x0, uxwvst['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != rsvtuw['_null']) this['_audio']['onEnded'](rsvtuw['_null']);else try {
          this['_audio']['onEnded'](null), rsvtuw['_null'] = null;
        } catch (gfbced) {
          console['warn']('[wxmini] stop:' + gfbced), this['_audio']['onEnded'](mikhlj['bind'](this['__onNull'], this)), rsvtuw['_null'] = mikhlj['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, wtuvyx['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, wtuvyx['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, uxwvst['addChannel'](this), this['_audio']['play']());
    }, truvsq(0x0, wtuvyx, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), truvsq(0x0, wtuvyx, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), truvsq(0x0, wtuvyx, 'volume', function () {
      return 0x1;
    }, function (bfdeac) {}), rsvtuw['_null'] = void 0x0, rsvtuw;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (jkmln, qnspor) {
  'use strict';

  for (var ijm in Object['defineProperty'](qnspor, '__esModule', { 'value': !0x0 }), Laya) {
    var kj = Laya[ijm];kj && kj['__isclass'] && (qnspor[ijm] = kj);
  }
});