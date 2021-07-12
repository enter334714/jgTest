var _ = wx.y$;
!function (tsqpo, fkgihj) {
  fkgihj['un'], fkgihj['uns'];var feidgh = fkgihj['static'],
      tvwus = fkgihj['class'],
      wvxzy = fkgihj['getset'];fkgihj['__newvec'];var mnik = laya['utils']['Browser'],
      _0xz = (laya['events']['Event'], laya['events']['EventDispatcher']),
      hdie = laya['resource']['HTMLImage'],
      _102z$ = laya['utils']['Handler'],
      npom = laya['display']['Input'],
      fghjk = laya['net']['Loader'];laya['maths']['Matrix'];var jnkom = laya['renders']['Render'],
      hfegj = laya['utils']['RunDriver'];laya['media']['Sound'];var uwtxy = laya['media']['SoundChannel'],
      $z01 = laya['media']['SoundManager'],
      ploknm = (laya['display']['Stage'], laya['net']['URL']),
      fechg = laya['utils']['Utils'],
      mokln = (tvwus(nmqro, 'laya.wx.mini.MiniAdpter'), nmqro['getJson'] = function (hlkm) {
    return JSON['parse'](hlkm);
  }, nmqro['init'] = function (onrqsp, khljm) {
    void 0x0 === onrqsp && (onrqsp = !0x1), void 0x0 === khljm && (khljm = !0x1), nmqro['_inited'] || (nmqro['window'] = tsqpo)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (nmqro['_inited'] = !0x0, nmqro['isZiYu'] = khljm, nmqro['isPosMsgYu'] = onrqsp, nmqro['EnvConfig'] = {}, nmqro['isZiYu'] || (mnjkl['setNativeFileDir']('/layaairGame'), mnjkl['existDir'](mnjkl['fileNativeDir'], _102z$['create'](nmqro, nmqro['onMkdirCallBack']))), nmqro['window']['focus'] = function () {}, fkgihj['getUrlPath'] = function () {}, nmqro['window']['logtime'] = function (onk) {}, nmqro['window']['alertTimeLog'] = function (z_y0$x) {}, nmqro['window']['resetShareInfo'] = function () {}, nmqro['window']['CanvasRenderingContext2D'] = function () {}, nmqro['window']['CanvasRenderingContext2D']['prototype'] = nmqro['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nmqro['window']['document']['body']['appendChild'] = function () {}, nmqro['EnvConfig']['pixelRatioInt'] = 0x0, hfegj['getPixelRatio'] = nmqro['pixelRatio'], nmqro['_preCreateElement'] = mnik['createElement'], mnik['createElement'] = nmqro['createElement'], hfegj['createShaderCondition'] = nmqro['createShaderCondition'], fechg['parseXMLFromString'] = nmqro['parseXMLFromString'], npom['_createInputElement'] = eihfd['_createInputElement'], nmqro['EnvConfig']['load'] = fghjk['prototype']['load'], fghjk['prototype']['load'] = mqonrp['prototype']['load'], nmqro['isZiYu'] && onrqsp && wx['onMessage'](function (rqvts) {
      rqvts['isLoad'] && (mnjkl['ziyuFileData'][rqvts['url']] = rqvts['data']);
    }));
  }, nmqro['onMkdirCallBack'] = function (wy$x_z, yutw) {
    wy$x_z || (mnjkl['filesListObj'] = JSON['parse'](yutw['data']));
  }, nmqro['pixelRatio'] = function () {
    if (!nmqro['EnvConfig']['pixelRatioInt']) try {
      var rqmno = wx['getSystemInfoSync']();return nmqro['EnvConfig']['pixelRatioInt'] = rqmno['pixelRatio'], rqmno['pixelRatio'];
    } catch (vqust) {}return nmqro['EnvConfig']['pixelRatioInt'];
  }, nmqro['createElement'] = function (vx$z) {
    var suwtvr;if ('canvas' == vx$z) return 0x1 == nmqro['idx'] ? nmqro['isZiYu'] ? (suwtvr = sharedCanvas)['style'] = {} : suwtvr = tsqpo['canvas'] : suwtvr = tsqpo['wx']['createCanvas'](), nmqro['idx']++, suwtvr;if ('textarea' == vx$z || 'input' == vx$z) return nmqro['onCreateInput'](vx$z);if ('div' != vx$z) return nmqro['_preCreateElement'](vx$z);return vx$z = nmqro['_preCreateElement'](vx$z), (vx$z['contains'] = function (dfhceg) {
      return null;
    }, vx$z['removeChild'] = function (_yz$01) {}, vx$z);
  }, nmqro['onCreateInput'] = function ($z_1y0) {
    return $z_1y0 = nmqro['_preCreateElement']($z_1y0), ($z_1y0['focus'] = eihfd['wxinputFocus'], $z_1y0['blur'] = eihfd['wxinputblur'], $z_1y0['style'] = {}, $z_1y0['value'] = 0x0, $z_1y0['parentElement'] = {}, $z_1y0['placeholder'] = {}, $z_1y0['type'] = {}, $z_1y0['setColor'] = function (z0_1$) {}, $z_1y0['setType'] = function (x0z_y) {}, $z_1y0['setFontFace'] = function (rpqsn) {}, $z_1y0['addEventListener'] = function (ptru) {}, $z_1y0['contains'] = function (_3$02) {
      return null;
    }, $z_1y0['removeChild'] = function (nmopql) {}, $z_1y0);
  }, nmqro['createShaderCondition'] = function (x_z) {
    var rvwts = this;return function () {
      return rvwts[x_z['replace']('this.', '')];
    };
  }, nmqro['EnvConfig'] = null, nmqro['window'] = null, nmqro['_preCreateElement'] = null, nmqro['_inited'] = !0x1, nmqro['wxRequest'] = null, nmqro['p$ED'] = null, nmqro['version'] = '0.0.1', nmqro['isZiYu'] = !0x1, nmqro['isPosMsgYu'] = !0x1, nmqro['parseXMLFromString'] = function (heigfd) {
    var xy$0;heigfd = heigfd['replace'](/>\s+</g, '><');try {
      xy$0 = new tsqpo['Parser']['DOMParser']()['parseFromString'](heigfd, 'text/xml');
    } catch (gdhefi) {
      throw '需要引入xml解析库文件';
    }return xy$0;
  }, nmqro['idx'] = 0x1, nmqro);function nmqro() {}tvwus(z$0y_, 'laya.wx.mini.MiniImage'), z$0y_['prototype']['_loadImage'] = function (nolmk) {
    var xzwv$ = !0x1;-0x1 == nolmk['indexOf']('layaNativeDir/') && (xzwv$ = !0x0, nolmk = ploknm['formatURL'](nolmk)), mnjkl['getFileInfo'](nolmk) ? z$0y_['onCreateImage'](nolmk, this, !xzwv$) : -0x1 != nolmk['indexOf']('http://') || -0x1 != nolmk['indexOf']('https://') ? mnjkl['downImg'](nolmk, new _102z$(z$0y_, z$0y_['onDownImgCallBack'], [nolmk, this]), nolmk) : z$0y_['onCreateImage'](nolmk, this, !0x0);
  }, z$0y_['onDownImgCallBack'] = function (vuqrst, _41320, ojlmn) {
    ojlmn ? _41320['onError'](null) : z$0y_['onCreateImage'](vuqrst, _41320);
  }, z$0y_['onCreateImage'] = function (yxwv$, olknjm, opqlmn) {
    var fdgceb, efghdi;function kmnlo() {
      efghdi['onload'] = null, efghdi['onerror'] = null, delete olknjm['imgCache'][yxwv$];
    }fdgceb = (opqlmn = void 0x0 === opqlmn ? !0x1 : opqlmn) ? yxwv$ : (sutq = mnjkl['getFileInfo'](yxwv$)['md5'], mnjkl['getFileNativePath'](sutq)), null == olknjm['imgCache'] && (olknjm['imgCache'] = {}), opqlmn = function () {
      kmnlo(), olknjm['onLoaded'](efghdi);
    };var sutq = function () {
      kmnlo(), olknjm['event']('error', 'Load image failed');
    };'nativeimage' == olknjm['_type'] ? ((efghdi = new mnik['window']['Image']())['crossOrigin'] = '', efghdi['onload'] = opqlmn, efghdi['onerror'] = sutq, efghdi['src'] = fdgceb, olknjm['imgCache'][yxwv$] = efghdi) : new hdie['create'](fdgceb, { 'onload': opqlmn, 'onerror': sutq, 'onCreate': function (qspo) {
        efghdi = qspo, olknjm['imgCache'][yxwv$] = qspo;
      } });
  };function z$0y_() {}var eihfd = (tvwus(wz_$, 'laya.wx.mini.MiniInput'), wz_$['_createInputElement'] = function () {
    npom['_initInput'](npom['area'] = mnik['createElement']('textarea')), npom['_initInput'](npom['input'] = mnik['createElement']('input')), npom['inputContainer'] = mnik['createElement']('div'), npom['inputContainer']['style']['position'] = 'absolute', npom['inputContainer']['style']['zIndex'] = 0x186a0, mnik['container']['appendChild'](npom['inputContainer']), npom['inputContainer']['setPos'] = function (ihegj, suwrt) {
      npom['inputContainer']['style']['left'] = ihegj + 'px', npom['inputContainer']['style']['top'] = suwrt + 'px';
    }, fkgihj['stage']['on']('resize', null, wz_$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($0_123) {
      tsqpo['dispatchEvent'] && tsqpo['dispatchEvent']('resize');
    }), $z01['_soundClass'] = rqusvt, $z01['_musicClass'] = rqusvt;
  }, wz_$['_onStageResize'] = function () {
    fkgihj['stage']['_canvasTransform']['identity']()['scale'](mnik['width'] / jnkom['canvas']['width'] / hfegj['getPixelRatio'](), mnik['height'] / jnkom['canvas']['height'] / hfegj['getPixelRatio']());
  }, wz_$['wxinputFocus'] = function (wz_xy) {
    var xuswtv = npom['inputElement']['target'];xuswtv && !xuswtv['editable'] || (mokln['window']['wx']['offKeyboardConfirm'](), mokln['window']['wx']['offKeyboardInput'](), mokln['window']['wx']['showKeyboard']({ 'defaultValue': xuswtv['text'], 'maxLength': xuswtv['maxChars'], 'multiple': xuswtv['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (hfdegc) {}, 'fail': function (ihjglk) {} }), mokln['window']['wx']['onKeyboardConfirm'](function (yz_0x$) {
      yz_0x$ = yz_0x$ ? yz_0x$['value'] : '', (xuswtv['text'] = yz_0x$, xuswtv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), mokln['window']['wx']['onKeyboardInput'](function (x$_yz) {
      x$_yz = x$_yz ? x$_yz['value'] : '', xuswtv['multiline'] || -0x1 == x$_yz['indexOf']('\x0a') ? (xuswtv['text'] = x$_yz, xuswtv['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, wz_$['inputEnter'] = function () {
    npom['inputElement']['target']['focus'] = !0x1;
  }, wz_$['wxinputblur'] = function () {
    wz_$['hideKeyboard']();
  }, wz_$['hideKeyboard'] = function () {
    mokln['window']['wx']['offKeyboardConfirm'](), mokln['window']['wx']['offKeyboardInput'](), mokln['window']['wx']['hideKeyboard']({ 'success': function (zxyuvw) {
        console['log']('隐藏键盘');
      }, 'fail': function (vsqtr) {
        console['log']('隐藏键盘出错:' + (vsqtr ? vsqtr['errMsg'] : ''));
      } });
  }, wz_$);function wz_$() {}var mqonrp = function () {
    function wvz$() {}tvwus(wvz$, 'laya.wx.mini.MiniLoader');var uwvxy = wvz$['prototype'];return uwvxy['load'] = function (joklnm, fcehdg, qpomr, prqtus, tqpsro) {
      void 0x0 === qpomr && (qpomr = !0x0), void 0x0 === tqpsro && (tqpsro = !0x1);var x_$zwy = this;0x0 === (x_$zwy['_url'] = joklnm)['indexOf']('data:image') ? x_$zwy['_type'] = fcehdg = 'image' : x_$zwy['_type'] = fcehdg = fcehdg || x_$zwy['getTypeFromUrl'](joklnm), x_$zwy['_cache'] = qpomr, x_$zwy['_data'] = null;var mlkon = 'ascii';-0x1 != joklnm['indexOf']('.fnt') ? mlkon = 'utf8' : 'arraybuffer' == fcehdg && (mlkon = '');var mljko = fechg['getFileExtension'](joklnm);if (-0x1 != wvz$['_fileTypeArr']['indexOf'](mljko)) mokln['EnvConfig']['load']['call'](this, joklnm, fcehdg, qpomr, prqtus, tqpsro);else {
        if (mnjkl['getFileInfo'](joklnm)) mokln['EnvConfig']['load']['call'](this, joklnm, fcehdg, qpomr, prqtus, tqpsro);else {
          if (-0x1 != joklnm['indexOf']('layaNativeDir/')) {
            if (mokln['isZiYu']) {
              var yvxuwz = mnjkl['ziyuFileData'][joklnm];return void x_$zwy['onLoaded'](yvxuwz);
            }return cosnole['log']('read read'), void mnjkl['read'](joklnm, mlkon, new _102z$(wvz$, wvz$['onReadNativeCallBack'], [mlkon, joklnm, fcehdg, qpomr, prqtus, tqpsro, x_$zwy]));
          }yvxuwz = '' == ploknm['rootPath'] ? joklnm : joklnm['split'](ploknm['rootPath'])[0x0], -0x1 != joklnm['indexOf']('http://') || -0x1 != joklnm['indexOf']('https://') ? mokln['EnvConfig']['load']['call'](x_$zwy, joklnm, fcehdg, qpomr, prqtus, tqpsro) : mnjkl['readFile'](yvxuwz, mlkon, new _102z$(wvz$, wvz$['onReadNativeCallBack'], [mlkon, joklnm, fcehdg, qpomr, prqtus, tqpsro, x_$zwy]), joklnm);
        }
      }
    }, uwvxy['resMgrLoad'] = function (dfbcae, efdgc, swtrvu, pust, gfced, tqvs, _x$zw) {
      void 0x0 === swtrvu && (swtrvu = 0x0), void 0x0 === pust && (pust = !0x1), void 0x0 === gfced && (gfced = !0x1), void 0x0 === tqvs && (tqvs = 0x0), void 0x0 === _x$zw && (_x$zw = 0x3), -0x1 != dfbcae['indexOf']('mpack') && console['log']('=============resMgrLoad url:', dfbcae), mokln['EnvConfig']['resMgrLoad'](dfbcae, (nqop, orqsp, lnmokj) => {
        wvz$['prototype']['resMgrLoadCallBack'](nqop, orqsp, lnmokj, efdgc);
      }, swtrvu, pust, gfced, tqvs, _x$zw);
    }, uwvxy['resMgrLoadCallBack'] = function (gefcdh, stuqv, hijklg, gjihf) {
      console['log']('buff:::', gefcdh, hijklg, mnjkl['fileNativeDir'] + '///' + mnjkl['fileListName']), gjihf(gefcdh, stuqv, hijklg);
    }, uwvxy['clearRes'] = function (npok, z1$02) {
      this['clearRes'](npok, z1$02 = void 0x0 === z1$02 ? !0x1 : z1$02), z1$02 = mnjkl['getFileInfo'](npok), !z1$02 || -0x1 == npok['indexOf']('http://') && -0x1 == npok['indexOf']('https://') || (z1$02 = z1$02['md5'], z1$02 = mnjkl['getFileNativePath'](z1$02), mnjkl['remove'](z1$02));
    }, wvz$['onReadNativeCallBack'] = function (_2134, lgkh, tsquv, pqosn, lkgijh, hilmk, qvtr, fcbg, _x0zy) {
      void 0x0 === pqosn && (pqosn = !0x0), void 0x0 === hilmk && (hilmk = !0x1), (fcbg = void 0x0 === fcbg ? 0x0 : fcbg) ? 0x1 == fcbg && mokln['EnvConfig']['load']['call'](qvtr, lgkh, tsquv, pqosn, lkgijh, hilmk) : (_x0zy = 'json' == tsquv || 'atlas' == tsquv ? mokln['getJson'](_x0zy['data']) : 'xml' == tsquv ? fechg['parseXMLFromString'](_x0zy['data']) : _x0zy['data'], qvtr['onLoaded'](_x0zy), !mokln['isZiYu'] && mokln['isPosMsgYu'] && 'arraybuffer' != tsquv && wx['postMessage']({ 'url': lgkh, 'data': _x0zy, 'isLoad': !0x0 }));
    }, feidgh(wvz$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), wvz$;
  }(),
      mnjkl = (tvwus(gfjkih, 'laya.wx.mini.MiniFileMgr', _0xz), gfjkih['isLoadFile'] = function (lnkmoj) {
    return -0x1 != gfjkih['_fileTypeArr']['indexOf'](lnkmoj);
  }, gfjkih['getFileInfo'] = function (_$013) {
    return _$013 = _$013['split']('?')[0x0], _$013 = gfjkih['filesListObj'][_$013], null == _$013 ? null : _$013;
  }, gfjkih['onFileUpdate'] = function ($_z01, uxtsv) {
    var rutswv = $_z01['split']('/');$_z01 = rutswv[rutswv['length'] - 0x1], rutswv = gfjkih['getFileInfo'](uxtsv), null == rutswv ? gfjkih['onSaveFile'](uxtsv, $_z01) : rutswv['readyUrl'] != uxtsv && gfjkih['remove']($_z01, uxtsv);
  }, gfjkih['exits'] = function (tvwsx, psqtor) {
    tvwsx = gfjkih['getFileNativePath'](tvwsx), gfjkih['fs']['getFileInfo']({ 'filePath': tvwsx, 'success': function (cdgehf) {
        null != psqtor && psqtor['runWith']([0x0, cdgehf]);
      }, 'fail': function (qsortp) {
        null != psqtor && psqtor['runWith']([0x1, qsortp]);
      } });
  }, gfjkih['read'] = function (dabe, hdfe, vxstuw, qmlonp) {
    void 0x0 === hdfe && (hdfe = 'ascill'), dabe = '' != (qmlonp = void 0x0 === qmlonp ? '' : qmlonp) ? gfjkih['getFileNativePath'](dabe) : dabe, gfjkih['fs']['readFile']({ 'filePath': dabe, 'encoding': hdfe, 'success': function (qrmon) {
        null != vxstuw && vxstuw['runWith']([0x0, qrmon]);
      }, 'fail': function (hegcf) {
        hegcf && '' != qmlonp ? gfjkih['down'](qmlonp, hdfe, vxstuw, qmlonp) : null != vxstuw && vxstuw['runWith']([0x1]);
      } });
  }, gfjkih['readNativeFile'] = function (pnoqmr, kolpm) {
    gfjkih['fs']['readFile']({ 'filePath': pnoqmr, 'encoding': '', 'success': function (srupqt) {
        null != kolpm && kolpm['runWith']([0x0]);
      }, 'fail': function (stpqr) {
        null != kolpm && kolpm['runWith']([0x1]);
      } });
  }, gfjkih['down'] = function (vywux, dhfc, rswutv, gljkhi) {
    void 0x0 === dhfc && (dhfc = 'ascill'), void 0x0 === gljkhi && (gljkhi = '');var ecdgfh = gfjkih['getFileNativePath'](gljkhi);gfjkih['wxdown']({ 'url': vywux, 'filePath': ecdgfh, 'success': function (nrqmp) {
        0xc8 === nrqmp['statusCode'] && gfjkih['readFile'](nrqmp['filePath'], dhfc, rswutv, gljkhi);
      }, 'fail': function (hljkmi) {
        null != rswutv && rswutv['runWith']([0x1, hljkmi]);
      } })['onProgressUpdate'](function (mjlkh) {
      null != rswutv && rswutv['runWith']([0x2, mjlkh['progress']]);
    });
  }, gfjkih['readFile'] = function (pnroqm, zvwy$x, _$z21, fhecg) {
    void 0x0 === fhecg && (fhecg = ''), gfjkih['fs']['readFile']({ 'filePath': pnroqm, 'encoding': zvwy$x = void 0x0 === zvwy$x ? 'ascill' : zvwy$x, 'success': function (vrwtus) {
        -0x1 == pnroqm['indexOf']('http://') && -0x1 == pnroqm['indexOf']('https://') || gfjkih['onFileUpdate'](pnroqm, fhecg), null != _$z21 && _$z21['runWith']([0x0, vrwtus]);
      }, 'fail': function (onpkml) {
        onpkml && null != _$z21 && _$z21['runWith']([0x1, onpkml]);
      } });
  }, gfjkih['downImg'] = function (zy_$1, $_203, yz10_$) {
    void 0x0 === yz10_$ && (yz10_$ = ''), gfjkih['wxdown']({ 'url': zy_$1, 'success': function (cedba) {
        0xc8 === cedba['statusCode'] && gfjkih['copyFile'](cedba['tempFilePath'], yz10_$, $_203);
      }, 'fail': function (njoml) {
        null != $_203 && $_203['runWith']([0x1, njoml]);
      } });
  }, gfjkih['copyFile'] = function (imlnkj, nkljo, fcehgd) {
    var kmlih = imlnkj['split']('/'),
        uqstpr = kmlih[kmlih['length'] - 0x1];nkljo['split']('?')[0x0];var _$2031 = gfjkih['getFileInfo'](nkljo);kmlih = gfjkih['getFileNativePath'](uqstpr), gfjkih['fs']['copyFile']({ 'srcPath': imlnkj, 'destPath': kmlih, 'success': function (nqrpm) {
        _$2031 ? _$2031['readyUrl'] != nkljo && gfjkih['remove'](uqstpr, nkljo, fcehgd) : (gfjkih['onSaveFile'](nkljo, uqstpr), null != fcehgd && fcehgd['runWith']([0x0]));
      }, 'fail': function (jmhikl) {
        null != fcehgd && fcehgd['runWith']([0x1, jmhikl]);
      } });
  }, gfjkih['getFileNativePath'] = function (zyw$_) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zyw$_;
  }, gfjkih['remove'] = function ($_0321, oqmln, fkjgh) {
    void 0x0 === oqmln && (oqmln = '');var lmkjhi = gfjkih['getFileInfo'](oqmln),
        prqnm = gfjkih['getFileNativePath'](lmkjhi['md5']);fkgihj['loader']['clearRes'](lmkjhi['readyUrl']), gfjkih['fs']['unlink']({ 'filePath': prqnm, 'success': function (qnp) {
        '' != oqmln && gfjkih['onSaveFile'](oqmln, $_0321), null != fkjgh && fkjgh['runWith']([0x0]);
      }, 'fail': function (osqpt) {} });
  }, gfjkih['onSaveFile'] = function (cgbedf, $_y01) {
    var qpos = cgbedf['split']('?')[0x0];gfjkih['filesListObj'][qpos] = { 'md5': $_y01, 'readyUrl': cgbedf }, gfjkih['fs']['writeFile']({ 'filePath': gfjkih['fileNativeDir'] + '/' + gfjkih['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gfjkih['filesListObj']), 'success': function (qpotsr) {
        console['log']('写入测试测试成功：', qpotsr);
      }, 'fail': function (monqp) {
        console['log']('写入测试测试失败：', monqp);
      } });
  }, gfjkih['existDir'] = function (wz$_, srpnq) {
    gfjkih['fs']['mkdir']({ 'dirPath': wz$_, 'success': function (hefji) {
        null != srpnq && srpnq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (z1_20) {
        -0x1 != z1_20['errMsg']['indexOf']('file already exists') ? gfjkih['readSync'](gfjkih['fileListName'], 'utf8', srpnq) : null != srpnq && srpnq['runWith']([0x1, z1_20]);
      } });
  }, gfjkih['readSync'] = function (nkijlm, aebdcf, v$xyzw, dgbcef) {
    void 0x0 === aebdcf && (aebdcf = 'ascill'), void 0x0 === dgbcef && (dgbcef = ''), nkijlm = gfjkih['getFileNativePath'](nkijlm);var fgehdi;try {
      fgehdi = gfjkih['fs']['readFileSync'](nkijlm), null != v$xyzw && v$xyzw['runWith']([0x0, { 'data': fgehdi }]);
    } catch (ytvxuw) {
      null != v$xyzw && v$xyzw['runWith']([0x1]);
    }
  }, gfjkih['readCache'] = function () {}, gfjkih['writeCache'] = function (psuqr) {
    var z$_yw = readyUrl['split']('?')[0x0];gfjkih['filesListObj'][z$_yw] = { 'md5': md5Name, 'readyUrl': readyUrl }, gfjkih['fs']['writeFile']({ 'filePath': gfjkih['fileNativeDir'] + '/' + gfjkih['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gfjkih['filesListObj']), 'success': function (_x$z) {}, 'fail': function (yzuw) {} });
  }, gfjkih['setNativeFileDir'] = function (qtspor) {
    gfjkih['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qtspor;
  }, gfjkih['filesListObj'] = {}, gfjkih['fileNativeDir'] = null, gfjkih['fileListName'] = 'layaairfiles.txt', gfjkih['ziyuFileData'] = {}, feidgh(gfjkih, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), gfjkih);function gfjkih() {
    gfjkih['__super']['call'](this);
  }var rqusvt = function () {
    function lgikhj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, lgikhj['__super']['call'](this), this['_sound'] = lgikhj['_createSound']();
    }tvwus(lgikhj, 'laya.wx.mini.MiniSound', _0xz);var xyuvw = lgikhj['prototype'];return xyuvw['load'] = function (yzuxvw) {
      var nlm = this,
          putsq;function klhij() {
        if (null != lgikhj['_null']) nlm['_sound']['onCanplay'](lgikhj['_null']), nlm['_sound']['onError'](lgikhj['_null']);else try {
          nlm['_sound']['onCanplay'](null), nlm['_sound']['onError'](null), lgikhj['_null'] = null;
        } catch ($0z2_1) {
          console['warn']('[wxmini] _clearSound:' + $0z2_1), nlm['_sound']['onCanplay'](fdhc), nlm['_sound']['onError'](fdhc), lgikhj['_null'] = fdhc;
        }
      }function fdhc() {}yzuxvw = ploknm['formatURL'](yzuxvw), this['url'] = yzuxvw, lgikhj['_audioCache'][yzuxvw] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        klhij(), putsq['loaded'] = !0x0, putsq['event']('complete'), lgikhj['_audioCache'][putsq['url']] = putsq;
      }), this['_sound']['onError'](function (qotrsp) {
        console['error']('errCode=' + qotrsp['errCode'] + '  errMsg=' + qotrsp['errMsg']), klhij(), putsq['event']('error');
      }), this['_sound']['src'] = yzuxvw, putsq = this);
    }, xyuvw['play'] = function (rqopnm, qupt) {
      void 0x0 === rqopnm && (rqopnm = 0x0), void 0x0 === qupt && (qupt = 0x0), (wvuytx = this['url'] == $z01['_tMusic'] ? (lgikhj['_musicAudio'] || (lgikhj['_musicAudio'] = lgikhj['_createSound']()), lgikhj['_musicAudio']) : lgikhj['_createSound']())['src'] = this['url'];var wvuytx = new hkjgi(wvuytx);return wvuytx['url'] = this['url'], wvuytx['loops'] = qupt, wvuytx['startTime'] = rqopnm, wvuytx['play'](), $z01['addChannel'](wvuytx), wvuytx;
    }, xyuvw['dispose'] = function () {
      var koj = lgikhj['_audioCache'][this['url']];koj && (koj['src'] = '', delete lgikhj['_audioCache'][this['url']]);
    }, wvxzy(0x0, xyuvw, 'duration', function () {
      return this['_sound']['duration'];
    }), lgikhj['_createSound'] = function () {
      return lgikhj['_id']++, mokln['window']['wx']['createInnerAudioContext']();
    }, lgikhj['_musicAudio'] = null, lgikhj['_id'] = 0x0, lgikhj['_audioCache'] = {}, lgikhj['_null'] = void 0x0, lgikhj;
  }(),
      hkjgi = function () {
    function gh(xz$0) {
      this['_audio'] = null, this['_onEnd'] = null, gh['__super']['call'](this), this['_audio'] = xz$0, this['_onEnd'] = fechg['bind'](this['__onEnd'], this), xz$0['onEnded'](this['_onEnd']);
    }tvwus(gh, 'laya.wx.mini.MiniSoundChannel', uwtxy);var cdfbea = gh['prototype'];return cdfbea['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (fkgihj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, cdfbea['__onNull'] = function () {}, cdfbea['play'] = function () {
      this['isStopped'] = !0x1, $z01['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, cdfbea['stop'] = function () {
      if (this['isStopped'] = !0x0, $z01['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != gh['_null']) this['_audio']['onEnded'](gh['_null']);else try {
          this['_audio']['onEnded'](null), gh['_null'] = null;
        } catch (tvuxy) {
          console['warn']('[wxmini] stop:' + tvuxy), this['_audio']['onEnded'](fechg['bind'](this['__onNull'], this)), gh['_null'] = fechg['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, cdfbea['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, cdfbea['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $z01['addChannel'](this), this['_audio']['play']());
    }, wvxzy(0x0, cdfbea, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), wvxzy(0x0, cdfbea, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), wvxzy(0x0, cdfbea, 'volume', function () {
      return 0x1;
    }, function (rtuwv) {}), gh['_null'] = void 0x0, gh;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (fidgeh, ghefdc) {
  'use strict';

  for (var kljn in Object['defineProperty'](ghefdc, '__esModule', { 'value': !0x0 }), Laya) {
    var vtqsru = Laya[kljn];vtqsru && vtqsru['__isclass'] && (ghefdc[kljn] = vtqsru);
  }
});