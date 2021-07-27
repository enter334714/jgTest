var p = wx.$h;
!function (hjgfk, fkhg) {
  fkhg['un'], fkhg['uns'];var cfbeda = fkhg['static'],
      kinml = fkhg['class'],
      khfj = fkhg['getset'];fkhg['__newvec'];var tqrps = laya['utils']['Browser'],
      vwz$yx = (laya['events']['Event'], laya['events']['EventDispatcher']),
      rmopn = laya['resource']['HTMLImage'],
      w_z$yx = laya['utils']['Handler'],
      klmonp = laya['display']['Input'],
      y_1$ = laya['net']['Loader'];laya['maths']['Matrix'];var ytzwv = laya['renders']['Render'],
      pqlmo = laya['utils']['RunDriver'];laya['media']['Sound'];var xy0z_ = laya['media']['SoundChannel'],
      kjihf = laya['media']['SoundManager'],
      bdacef = (laya['display']['Stage'], laya['net']['URL']),
      feabcd = laya['utils']['Utils'],
      qsrpn = (kinml(gjilkh, 'laya.wx.mini.MiniAdpter'), gjilkh['getJson'] = function (mlinjk) {
    return JSON['parse'](mlinjk);
  }, gjilkh['init'] = function (knmij, olpnq) {
    void 0x0 === knmij && (knmij = !0x1), void 0x0 === olpnq && (olpnq = !0x1), gjilkh['_inited'] || (gjilkh['window'] = hjgfk)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (gjilkh['_inited'] = !0x0, gjilkh['isZiYu'] = olpnq, gjilkh['isPosMsgYu'] = knmij, gjilkh['EnvConfig'] = {}, gjilkh['isZiYu'] || (_z$yxw['setNativeFileDir']('/layaairGame'), _z$yxw['existDir'](_z$yxw['fileNativeDir'], w_z$yx['create'](gjilkh, gjilkh['onMkdirCallBack']))), gjilkh['window']['focus'] = function () {}, fkhg['getUrlPath'] = function () {}, gjilkh['window']['logtime'] = function (rtwsvx) {}, gjilkh['window']['alertTimeLog'] = function (zy$x_0) {}, gjilkh['window']['resetShareInfo'] = function () {}, gjilkh['window']['CanvasRenderingContext2D'] = function () {}, gjilkh['window']['CanvasRenderingContext2D']['prototype'] = gjilkh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gjilkh['window']['document']['body']['appendChild'] = function () {}, gjilkh['EnvConfig']['pixelRatioInt'] = 0x0, pqlmo['getPixelRatio'] = gjilkh['pixelRatio'], gjilkh['_preCreateElement'] = tqrps['createElement'], tqrps['createElement'] = gjilkh['createElement'], pqlmo['createShaderCondition'] = gjilkh['createShaderCondition'], feabcd['parseXMLFromString'] = gjilkh['parseXMLFromString'], klmonp['_createInputElement'] = vtwsyx['_createInputElement'], gjilkh['EnvConfig']['load'] = y_1$['prototype']['load'], y_1$['prototype']['load'] = $ywvzx['prototype']['load'], gjilkh['isZiYu'] && knmij && wx['onMessage'](function (opmqln) {
      opmqln['isLoad'] && (_z$yxw['ziyuFileData'][opmqln['url']] = opmqln['data']);
    }));
  }, gjilkh['onMkdirCallBack'] = function (hjligk, oqrp) {
    hjligk || (_z$yxw['filesListObj'] = JSON['parse'](oqrp['data']));
  }, gjilkh['pixelRatio'] = function () {
    if (!gjilkh['EnvConfig']['pixelRatioInt']) try {
      var z_$y10 = wx['getSystemInfoSync']();return gjilkh['EnvConfig']['pixelRatioInt'] = z_$y10['pixelRatio'], z_$y10['pixelRatio'];
    } catch (monql) {}return gjilkh['EnvConfig']['pixelRatioInt'];
  }, gjilkh['createElement'] = function (nlmijk) {
    var fcbeda;if ('canvas' == nlmijk) return 0x1 == gjilkh['idx'] ? gjilkh['isZiYu'] ? (fcbeda = sharedCanvas)['style'] = {} : fcbeda = hjgfk['canvas'] : fcbeda = hjgfk['wx']['createCanvas'](), gjilkh['idx']++, fcbeda;if ('textarea' == nlmijk || 'input' == nlmijk) return gjilkh['onCreateInput'](nlmijk);if ('div' != nlmijk) return gjilkh['_preCreateElement'](nlmijk);return nlmijk = gjilkh['_preCreateElement'](nlmijk), (nlmijk['contains'] = function (efhi) {
      return null;
    }, nlmijk['removeChild'] = function (rswtv) {}, nlmijk);
  }, gjilkh['onCreateInput'] = function (gdech) {
    return gdech = gjilkh['_preCreateElement'](gdech), (gdech['focus'] = vtwsyx['wxinputFocus'], gdech['blur'] = vtwsyx['wxinputblur'], gdech['style'] = {}, gdech['value'] = 0x0, gdech['parentElement'] = {}, gdech['placeholder'] = {}, gdech['type'] = {}, gdech['setColor'] = function (wtvs) {}, gdech['setType'] = function (ghifje) {}, gdech['setFontFace'] = function (jnkmli) {}, gdech['addEventListener'] = function (_0y1) {}, gdech['contains'] = function (mnkljo) {
      return null;
    }, gdech['removeChild'] = function (xyzv$w) {}, gdech);
  }, gjilkh['createShaderCondition'] = function (lqnpmo) {
    var hjlkim = this;return function () {
      return hjlkim[lqnpmo['replace']('this.', '')];
    };
  }, gjilkh['EnvConfig'] = null, gjilkh['window'] = null, gjilkh['_preCreateElement'] = null, gjilkh['_inited'] = !0x1, gjilkh['wxRequest'] = null, gjilkh['systemInfo'] = null, gjilkh['version'] = '0.0.1', gjilkh['isZiYu'] = !0x1, gjilkh['isPosMsgYu'] = !0x1, gjilkh['parseXMLFromString'] = function (gbdec) {
    var hjigl;gbdec = gbdec['replace'](/>\s+</g, '><');try {
      hjigl = new hjgfk['Parser']['DOMParser']()['parseFromString'](gbdec, 'text/xml');
    } catch (poqns) {
      throw '需要引入xml解析库文件';
    }return hjigl;
  }, gjilkh['idx'] = 0x1, gjilkh);function gjilkh() {}kinml(_0zxy$, 'laya.wx.mini.MiniImage'), _0zxy$['prototype']['_loadImage'] = function (gklhij) {
    var y$0_1 = !0x1;-0x1 == gklhij['indexOf']('layaNativeDir/') && (y$0_1 = !0x0, gklhij = bdacef['formatURL'](gklhij)), _z$yxw['getFileInfo'](gklhij) ? _0zxy$['onCreateImage'](gklhij, this, !y$0_1) : -0x1 != gklhij['indexOf']('http://') || -0x1 != gklhij['indexOf']('https://') ? _z$yxw['downImg'](gklhij, new w_z$yx(_0zxy$, _0zxy$['onDownImgCallBack'], [gklhij, this]), gklhij) : _0zxy$['onCreateImage'](gklhij, this, !0x0);
  }, _0zxy$['onDownImgCallBack'] = function (srpt, vytwzx, ztyxw) {
    ztyxw ? vytwzx['onError'](null) : _0zxy$['onCreateImage'](srpt, vytwzx);
  }, _0zxy$['onCreateImage'] = function (jfkig, pnmrq, trpsoq) {
    var vxytsw, caedbf;function swvtx() {
      caedbf['onload'] = null, caedbf['onerror'] = null, delete pnmrq['imgCache'][jfkig];
    }vxytsw = (trpsoq = void 0x0 === trpsoq ? !0x1 : trpsoq) ? jfkig : (fgche = _z$yxw['getFileInfo'](jfkig)['md5'], _z$yxw['getFileNativePath'](fgche)), null == pnmrq['imgCache'] && (pnmrq['imgCache'] = {}), trpsoq = function () {
      swvtx(), pnmrq['onLoaded'](caedbf);
    };var fgche = function () {
      swvtx(), pnmrq['event']('error', 'Load image failed');
    };'nativeimage' == pnmrq['_type'] ? ((caedbf = new tqrps['window']['Image']())['crossOrigin'] = '', caedbf['onload'] = trpsoq, caedbf['onerror'] = fgche, caedbf['src'] = vxytsw, pnmrq['imgCache'][jfkig] = caedbf) : new rmopn['create'](vxytsw, { 'onload': trpsoq, 'onerror': fgche, 'onCreate': function (fegch) {
        caedbf = fegch, pnmrq['imgCache'][jfkig] = fegch;
      } });
  };function _0zxy$() {}var vtwsyx = (kinml(nmokjl, 'laya.wx.mini.MiniInput'), nmokjl['_createInputElement'] = function () {
    klmonp['_initInput'](klmonp['area'] = tqrps['createElement']('textarea')), klmonp['_initInput'](klmonp['input'] = tqrps['createElement']('input')), klmonp['inputContainer'] = tqrps['createElement']('div'), klmonp['inputContainer']['style']['position'] = 'absolute', klmonp['inputContainer']['style']['zIndex'] = 0x186a0, tqrps['container']['appendChild'](klmonp['inputContainer']), klmonp['inputContainer']['setPos'] = function (yw$x, twvzx) {
      klmonp['inputContainer']['style']['left'] = yw$x + 'px', klmonp['inputContainer']['style']['top'] = twvzx + 'px';
    }, fkhg['stage']['on']('resize', null, nmokjl['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lpokm) {
      hjgfk['dispatchEvent'] && hjgfk['dispatchEvent']('resize');
    }), kjihf['_soundClass'] = deafc, kjihf['_musicClass'] = deafc;
  }, nmokjl['_onStageResize'] = function () {
    fkhg['stage']['_canvasTransform']['identity']()['scale'](tqrps['width'] / ytzwv['canvas']['width'] / pqlmo['getPixelRatio'](), tqrps['height'] / ytzwv['canvas']['height'] / pqlmo['getPixelRatio']());
  }, nmokjl['wxinputFocus'] = function (dhf) {
    var nkoml = klmonp['inputElement']['target'];nkoml && !nkoml['editable'] || (qsrpn['window']['wx']['offKeyboardConfirm'](), qsrpn['window']['wx']['offKeyboardInput'](), qsrpn['window']['wx']['showKeyboard']({ 'defaultValue': nkoml['text'], 'maxLength': nkoml['maxChars'], 'multiple': nkoml['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (tvwyxz) {}, 'fail': function (qrmon) {} }), qsrpn['window']['wx']['onKeyboardConfirm'](function (eihgf) {
      eihgf = eihgf ? eihgf['value'] : '', (nkoml['text'] = eihgf, nkoml['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), qsrpn['window']['wx']['onKeyboardInput'](function (qponl) {
      qponl = qponl ? qponl['value'] : '', nkoml['multiline'] || -0x1 == qponl['indexOf']('\x0a') ? (nkoml['text'] = qponl, nkoml['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, nmokjl['inputEnter'] = function () {
    klmonp['inputElement']['target']['focus'] = !0x1;
  }, nmokjl['wxinputblur'] = function () {
    nmokjl['hideKeyboard']();
  }, nmokjl['hideKeyboard'] = function () {
    qsrpn['window']['wx']['offKeyboardConfirm'](), qsrpn['window']['wx']['offKeyboardInput'](), qsrpn['window']['wx']['hideKeyboard']({ 'success': function (wvxtsr) {
        console['log']('隐藏键盘');
      }, 'fail': function (febacd) {
        console['log']('隐藏键盘出错:' + (febacd ? febacd['errMsg'] : ''));
      } });
  }, nmokjl);function nmokjl() {}var $ywvzx = function () {
    function iehgdf() {}kinml(iehgdf, 'laya.wx.mini.MiniLoader');var _yw = iehgdf['prototype'];return _yw['load'] = function (zywvtx, qotrps, qmrnop, oljmk, _$xyz0) {
      void 0x0 === qmrnop && (qmrnop = !0x0), void 0x0 === _$xyz0 && (_$xyz0 = !0x1);var $x_zwy = this;0x0 === ($x_zwy['_url'] = zywvtx)['indexOf']('data:image') ? $x_zwy['_type'] = qotrps = 'image' : $x_zwy['_type'] = qotrps = qotrps || $x_zwy['getTypeFromUrl'](zywvtx), $x_zwy['_cache'] = qmrnop, $x_zwy['_data'] = null;var gbedcf = 'ascii';-0x1 != zywvtx['indexOf']('.fnt') ? gbedcf = 'utf8' : 'arraybuffer' == qotrps && (gbedcf = '');var qmopr = feabcd['getFileExtension'](zywvtx);if (-0x1 != iehgdf['_fileTypeArr']['indexOf'](qmopr)) qsrpn['EnvConfig']['load']['call'](this, zywvtx, qotrps, qmrnop, oljmk, _$xyz0);else {
        if (_z$yxw['getFileInfo'](zywvtx)) qsrpn['EnvConfig']['load']['call'](this, zywvtx, qotrps, qmrnop, oljmk, _$xyz0);else {
          if (-0x1 != zywvtx['indexOf']('layaNativeDir/')) {
            if (qsrpn['isZiYu']) {
              var vrstqp = _z$yxw['ziyuFileData'][zywvtx];return void $x_zwy['onLoaded'](vrstqp);
            }return cosnole['log']('read read'), void _z$yxw['read'](zywvtx, gbedcf, new w_z$yx(iehgdf, iehgdf['onReadNativeCallBack'], [gbedcf, zywvtx, qotrps, qmrnop, oljmk, _$xyz0, $x_zwy]));
          }vrstqp = '' == bdacef['rootPath'] ? zywvtx : zywvtx['split'](bdacef['rootPath'])[0x0], -0x1 != zywvtx['indexOf']('http://') || -0x1 != zywvtx['indexOf']('https://') ? qsrpn['EnvConfig']['load']['call']($x_zwy, zywvtx, qotrps, qmrnop, oljmk, _$xyz0) : _z$yxw['readFile'](vrstqp, gbedcf, new w_z$yx(iehgdf, iehgdf['onReadNativeCallBack'], [gbedcf, zywvtx, qotrps, qmrnop, oljmk, _$xyz0, $x_zwy]), zywvtx);
        }
      }
    }, _yw['resMgrLoad'] = function (fdbgc, knpml, tzyvxw, olqmn, ghcde, hmklji, kmpnl) {
      void 0x0 === tzyvxw && (tzyvxw = 0x0), void 0x0 === olqmn && (olqmn = !0x1), void 0x0 === ghcde && (ghcde = !0x1), void 0x0 === hmklji && (hmklji = 0x0), void 0x0 === kmpnl && (kmpnl = 0x3), -0x1 != fdbgc['indexOf']('mpack') && console['log']('=============resMgrLoad url:', fdbgc), qsrpn['EnvConfig']['resMgrLoad'](fdbgc, ($_0z, zvx$wy, wztxvy) => {
        iehgdf['prototype']['resMgrLoadCallBack']($_0z, zvx$wy, wztxvy, knpml);
      }, tzyvxw, olqmn, ghcde, hmklji, kmpnl);
    }, _yw['resMgrLoadCallBack'] = function ($1z_y, _02z1$, dbcf, hjef) {
      console['log']('buff:::', $1z_y, dbcf, _z$yxw['fileNativeDir'] + '///' + _z$yxw['fileListName']), hjef($1z_y, _02z1$, dbcf);
    }, _yw['clearRes'] = function (ptrsoq, tvsprq) {
      this['clearRes'](ptrsoq, tvsprq = void 0x0 === tvsprq ? !0x1 : tvsprq), tvsprq = _z$yxw['getFileInfo'](ptrsoq), !tvsprq || -0x1 == ptrsoq['indexOf']('http://') && -0x1 == ptrsoq['indexOf']('https://') || (tvsprq = tvsprq['md5'], tvsprq = _z$yxw['getFileNativePath'](tvsprq), _z$yxw['remove'](tvsprq));
    }, iehgdf['onReadNativeCallBack'] = function (_z$20, onrqps, mklin, orsnpq, cafebd, vxtzwy, z$01_y, _$210, prmqon) {
      void 0x0 === orsnpq && (orsnpq = !0x0), void 0x0 === vxtzwy && (vxtzwy = !0x1), (_$210 = void 0x0 === _$210 ? 0x0 : _$210) ? 0x1 == _$210 && qsrpn['EnvConfig']['load']['call'](z$01_y, onrqps, mklin, orsnpq, cafebd, vxtzwy) : (prmqon = 'json' == mklin || 'atlas' == mklin ? qsrpn['getJson'](prmqon['data']) : 'xml' == mklin ? feabcd['parseXMLFromString'](prmqon['data']) : prmqon['data'], z$01_y['onLoaded'](prmqon), !qsrpn['isZiYu'] && qsrpn['isPosMsgYu'] && 'arraybuffer' != mklin && wx['postMessage']({ 'url': onrqps, 'data': prmqon, 'isLoad': !0x0 }));
    }, cfbeda(iehgdf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), iehgdf;
  }(),
      _z$yxw = (kinml(fghde, 'laya.wx.mini.MiniFileMgr', vwz$yx), fghde['isLoadFile'] = function (otqpr) {
    return -0x1 != fghde['_fileTypeArr']['indexOf'](otqpr);
  }, fghde['getFileInfo'] = function (nilkjm) {
    return nilkjm = nilkjm['split']('?')[0x0], nilkjm = fghde['filesListObj'][nilkjm], null == nilkjm ? null : nilkjm;
  }, fghde['onFileUpdate'] = function (_2z$0, prqv) {
    var zy_x$ = _2z$0['split']('/');_2z$0 = zy_x$[zy_x$['length'] - 0x1], zy_x$ = fghde['getFileInfo'](prqv), null == zy_x$ ? fghde['onSaveFile'](prqv, _2z$0) : zy_x$['readyUrl'] != prqv && fghde['remove'](_2z$0, prqv);
  }, fghde['exits'] = function (mpornq, iljmkn) {
    mpornq = fghde['getFileNativePath'](mpornq), fghde['fs']['getFileInfo']({ 'filePath': mpornq, 'success': function (syvxt) {
        null != iljmkn && iljmkn['runWith']([0x0, syvxt]);
      }, 'fail': function (ilkmj) {
        null != iljmkn && iljmkn['runWith']([0x1, ilkmj]);
      } });
  }, fghde['read'] = function (tsxv, kjfh, z0$1y_, ihgd) {
    void 0x0 === kjfh && (kjfh = 'ascill'), tsxv = '' != (ihgd = void 0x0 === ihgd ? '' : ihgd) ? fghde['getFileNativePath'](tsxv) : tsxv, fghde['fs']['readFile']({ 'filePath': tsxv, 'encoding': kjfh, 'success': function (qptsor) {
        null != z0$1y_ && z0$1y_['runWith']([0x0, qptsor]);
      }, 'fail': function (npormq) {
        npormq && '' != ihgd ? fghde['down'](ihgd, kjfh, z0$1y_, ihgd) : null != z0$1y_ && z0$1y_['runWith']([0x1]);
      } });
  }, fghde['readNativeFile'] = function (onmqpl, iegfdh) {
    fghde['fs']['readFile']({ 'filePath': onmqpl, 'encoding': '', 'success': function (xw$zy_) {
        null != iegfdh && iegfdh['runWith']([0x0]);
      }, 'fail': function (klmij) {
        null != iegfdh && iegfdh['runWith']([0x1]);
      } });
  }, fghde['down'] = function (potqsr, fgkj, jlonkm, bfcgde) {
    void 0x0 === fgkj && (fgkj = 'ascill'), void 0x0 === bfcgde && (bfcgde = '');var klnomj = fghde['getFileNativePath'](bfcgde);fghde['wxdown']({ 'url': potqsr, 'filePath': klnomj, 'success': function (rqtsvw) {
        0xc8 === rqtsvw['statusCode'] && fghde['readFile'](rqtsvw['filePath'], fgkj, jlonkm, bfcgde);
      }, 'fail': function (rosqn) {
        null != jlonkm && jlonkm['runWith']([0x1, rosqn]);
      } })['onProgressUpdate'](function (qmplno) {
      null != jlonkm && jlonkm['runWith']([0x2, qmplno['progress']]);
    });
  }, fghde['readFile'] = function (ztvy, fcabde, nqrsop, z$_02) {
    void 0x0 === z$_02 && (z$_02 = ''), fghde['fs']['readFile']({ 'filePath': ztvy, 'encoding': fcabde = void 0x0 === fcabde ? 'ascill' : fcabde, 'success': function (iklhm) {
        -0x1 == ztvy['indexOf']('http://') && -0x1 == ztvy['indexOf']('https://') || fghde['onFileUpdate'](ztvy, z$_02), null != nqrsop && nqrsop['runWith']([0x0, iklhm]);
      }, 'fail': function (eigdf) {
        eigdf && null != nqrsop && nqrsop['runWith']([0x1, eigdf]);
      } });
  }, fghde['downImg'] = function (iklhj, vtprq, yx0z_$) {
    void 0x0 === yx0z_$ && (yx0z_$ = ''), fghde['wxdown']({ 'url': iklhj, 'success': function (nlmkop) {
        0xc8 === nlmkop['statusCode'] && fghde['copyFile'](nlmkop['tempFilePath'], yx0z_$, vtprq);
      }, 'fail': function (pqors) {
        null != vtprq && vtprq['runWith']([0x1, pqors]);
      } });
  }, fghde['copyFile'] = function (gjhife, xsyw, ilkhjg) {
    var z0$yx = gjhife['split']('/'),
        xy_0$ = z0$yx[z0$yx['length'] - 0x1];xsyw['split']('?')[0x0];var rmoq = fghde['getFileInfo'](xsyw);z0$yx = fghde['getFileNativePath'](xy_0$), fghde['fs']['copyFile']({ 'srcPath': gjhife, 'destPath': z0$yx, 'success': function (hcdgf) {
        rmoq ? rmoq['readyUrl'] != xsyw && fghde['remove'](xy_0$, xsyw, ilkhjg) : (fghde['onSaveFile'](xsyw, xy_0$), null != ilkhjg && ilkhjg['runWith']([0x0]));
      }, 'fail': function (ytwvzx) {
        null != ilkhjg && ilkhjg['runWith']([0x1, ytwvzx]);
      } });
  }, fghde['getFileNativePath'] = function (kilhjm) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kilhjm;
  }, fghde['remove'] = function (efdcgh, tswrvq, pqonr) {
    void 0x0 === tswrvq && (tswrvq = '');var hgiejf = fghde['getFileInfo'](tswrvq),
        lnkj = fghde['getFileNativePath'](hgiejf['md5']);fkhg['loader']['clearRes'](hgiejf['readyUrl']), fghde['fs']['unlink']({ 'filePath': lnkj, 'success': function (ljmin) {
        '' != tswrvq && fghde['onSaveFile'](tswrvq, efdcgh), null != pqonr && pqonr['runWith']([0x0]);
      }, 'fail': function (fcedgh) {} });
  }, fghde['onSaveFile'] = function (gfhec, $1_z0) {
    var abdf = gfhec['split']('?')[0x0];fghde['filesListObj'][abdf] = { 'md5': $1_z0, 'readyUrl': gfhec }, fghde['fs']['writeFile']({ 'filePath': fghde['fileNativeDir'] + '/' + fghde['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fghde['filesListObj']), 'success': function (vxywz$) {
        console['log']('写入测试测试成功：', vxywz$);
      }, 'fail': function (ceabd) {
        console['log']('写入测试测试失败：', ceabd);
      } });
  }, fghde['existDir'] = function (xy$w_z, nmplq) {
    fghde['fs']['mkdir']({ 'dirPath': xy$w_z, 'success': function (svqtpr) {
        null != nmplq && nmplq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (pqnrso) {
        -0x1 != pqnrso['errMsg']['indexOf']('file already exists') ? fghde['readSync'](fghde['fileListName'], 'utf8', nmplq) : null != nmplq && nmplq['runWith']([0x1, pqnrso]);
      } });
  }, fghde['readSync'] = function (lmqo, jfg, okpnlm, dfceh) {
    void 0x0 === jfg && (jfg = 'ascill'), void 0x0 === dfceh && (dfceh = ''), lmqo = fghde['getFileNativePath'](lmqo);var qrosn;try {
      qrosn = fghde['fs']['readFileSync'](lmqo), null != okpnlm && okpnlm['runWith']([0x0, { 'data': qrosn }]);
    } catch (ponqs) {
      null != okpnlm && okpnlm['runWith']([0x1]);
    }
  }, fghde['readCache'] = function () {}, fghde['writeCache'] = function (_310) {
    var fidgeh = readyUrl['split']('?')[0x0];fghde['filesListObj'][fidgeh] = { 'md5': md5Name, 'readyUrl': readyUrl }, fghde['fs']['writeFile']({ 'filePath': fghde['fileNativeDir'] + '/' + fghde['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](fghde['filesListObj']), 'success': function (vtqsr) {}, 'fail': function (kiljmh) {} });
  }, fghde['setNativeFileDir'] = function (jiehf) {
    fghde['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jiehf;
  }, fghde['filesListObj'] = {}, fghde['fileNativeDir'] = null, fghde['fileListName'] = 'layaairfiles.txt', fghde['ziyuFileData'] = {}, cfbeda(fghde, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), fghde);function fghde() {
    fghde['__super']['call'](this);
  }var deafc = function () {
    function pmnqo() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, pmnqo['__super']['call'](this), this['_sound'] = pmnqo['_createSound']();
    }kinml(pmnqo, 'laya.wx.mini.MiniSound', vwz$yx);var konpm = pmnqo['prototype'];return konpm['load'] = function (egfhi) {
      var qvswrt = this,
          tsro;function ehcdg() {
        if (null != pmnqo['_null']) qvswrt['_sound']['onCanplay'](pmnqo['_null']), qvswrt['_sound']['onError'](pmnqo['_null']);else try {
          qvswrt['_sound']['onCanplay'](null), qvswrt['_sound']['onError'](null), pmnqo['_null'] = null;
        } catch (svtxr) {
          console['warn']('[wxmini] _clearSound:' + svtxr), qvswrt['_sound']['onCanplay'](njkmol), qvswrt['_sound']['onError'](njkmol), pmnqo['_null'] = njkmol;
        }
      }function njkmol() {}egfhi = bdacef['formatURL'](egfhi), this['url'] = egfhi, pmnqo['_audioCache'][egfhi] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        ehcdg(), tsro['loaded'] = !0x0, tsro['event']('complete'), pmnqo['_audioCache'][tsro['url']] = tsro;
      }), this['_sound']['onError'](function (ihef) {
        console['error']('errCode=' + ihef['errCode'] + '  errMsg=' + ihef['errMsg']), ehcdg(), tsro['event']('error');
      }), this['_sound']['src'] = egfhi, tsro = this);
    }, konpm['play'] = function (yxvtw, svxwy) {
      void 0x0 === yxvtw && (yxvtw = 0x0), void 0x0 === svxwy && (svxwy = 0x0), (hgjfki = this['url'] == kjihf['_tMusic'] ? (pmnqo['_musicAudio'] || (pmnqo['_musicAudio'] = pmnqo['_createSound']()), pmnqo['_musicAudio']) : pmnqo['_createSound']())['src'] = this['url'];var hgjfki = new kijnlm(hgjfki);return hgjfki['url'] = this['url'], hgjfki['loops'] = svxwy, hgjfki['startTime'] = yxvtw, hgjfki['play'](), kjihf['addChannel'](hgjfki), hgjfki;
    }, konpm['dispose'] = function () {
      var cegfbd = pmnqo['_audioCache'][this['url']];cegfbd && (cegfbd['src'] = '', delete pmnqo['_audioCache'][this['url']]);
    }, khfj(0x0, konpm, 'duration', function () {
      return this['_sound']['duration'];
    }), pmnqo['_createSound'] = function () {
      return pmnqo['_id']++, qsrpn['window']['wx']['createInnerAudioContext']();
    }, pmnqo['_musicAudio'] = null, pmnqo['_id'] = 0x0, pmnqo['_audioCache'] = {}, pmnqo['_null'] = void 0x0, pmnqo;
  }(),
      kijnlm = function () {
    function x$yvzw(onpqr) {
      this['_audio'] = null, this['_onEnd'] = null, x$yvzw['__super']['call'](this), this['_audio'] = onpqr, this['_onEnd'] = feabcd['bind'](this['__onEnd'], this), onpqr['onEnded'](this['_onEnd']);
    }kinml(x$yvzw, 'laya.wx.mini.MiniSoundChannel', xy0z_);var xwrts = x$yvzw['prototype'];return xwrts['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (fkhg['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xwrts['__onNull'] = function () {}, xwrts['play'] = function () {
      this['isStopped'] = !0x1, kjihf['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, xwrts['stop'] = function () {
      if (this['isStopped'] = !0x0, kjihf['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != x$yvzw['_null']) this['_audio']['onEnded'](x$yvzw['_null']);else try {
          this['_audio']['onEnded'](null), x$yvzw['_null'] = null;
        } catch (rtqvp) {
          console['warn']('[wxmini] stop:' + rtqvp), this['_audio']['onEnded'](feabcd['bind'](this['__onNull'], this)), x$yvzw['_null'] = feabcd['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, xwrts['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, xwrts['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, kjihf['addChannel'](this), this['_audio']['play']());
    }, khfj(0x0, xwrts, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), khfj(0x0, xwrts, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), khfj(0x0, xwrts, 'volume', function () {
      return 0x1;
    }, function (jfige) {}), x$yvzw['_null'] = void 0x0, x$yvzw;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (gkli, porqn) {
  'use strict';
  for (var diegh in Object['defineProperty'](porqn, '__esModule', { 'value': !0x0 }), Laya) {
    var klmihj = Laya[diegh];klmihj && klmihj['__isclass'] && (porqn[diegh] = klmihj);
  }
});