var _ = wx.y$;
!function (egihd, yz$_0) {
  yz$_0['un'], yz$_0['uns'];var okjl = yz$_0['static'],
      njlok = yz$_0['class'],
      stuvqr = yz$_0['getset'];yz$_0['__newvec'];var zvxwyu = laya['utils']['Browser'],
      urtsvw = (laya['events']['Event'], laya['events']['EventDispatcher']),
      kihjgf = laya['resource']['HTMLImage'],
      edhfgc = laya['utils']['Handler'],
      gbce = laya['display']['Input'],
      chfedg = laya['net']['Loader'];laya['maths']['Matrix'];var rnompq = laya['renders']['Render'],
      vqtrs = laya['utils']['RunDriver'];laya['media']['Sound'];var prnosq = laya['media']['SoundChannel'],
      z_02$ = laya['media']['SoundManager'],
      snqor = (laya['display']['Stage'], laya['net']['URL']),
      ejif = laya['utils']['Utils'],
      fchdge = (njlok(soqpn, 'laya.wx.mini.MiniAdpter'), soqpn['getJson'] = function (z1y0$_) {
    return JSON['parse'](z1y0$_);
  }, soqpn['init'] = function (wuxvy, z$y10) {
    void 0x0 === wuxvy && (wuxvy = !0x1), void 0x0 === z$y10 && (z$y10 = !0x1), soqpn['_inited'] || (soqpn['window'] = egihd)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (soqpn['_inited'] = !0x0, soqpn['isZiYu'] = z$y10, soqpn['isPosMsgYu'] = wuxvy, soqpn['EnvConfig'] = {}, soqpn['isZiYu'] || (xy_$w['setNativeFileDir']('/layaairGame'), xy_$w['existDir'](xy_$w['fileNativeDir'], edhfgc['create'](soqpn, soqpn['onMkdirCallBack']))), soqpn['window']['focus'] = function () {}, yz$_0['getUrlPath'] = function () {}, soqpn['window']['logtime'] = function (uvtx) {}, soqpn['window']['alertTimeLog'] = function (tsuqpr) {}, soqpn['window']['resetShareInfo'] = function () {}, soqpn['window']['CanvasRenderingContext2D'] = function () {}, soqpn['window']['CanvasRenderingContext2D']['prototype'] = soqpn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], soqpn['window']['document']['body']['appendChild'] = function () {}, soqpn['EnvConfig']['pixelRatioInt'] = 0x0, vqtrs['getPixelRatio'] = soqpn['pixelRatio'], soqpn['_preCreateElement'] = zvxwyu['createElement'], zvxwyu['createElement'] = soqpn['createElement'], vqtrs['createShaderCondition'] = soqpn['createShaderCondition'], ejif['parseXMLFromString'] = soqpn['parseXMLFromString'], gbce['_createInputElement'] = spoqn['_createInputElement'], soqpn['EnvConfig']['load'] = chfedg['prototype']['load'], chfedg['prototype']['load'] = xutvws['prototype']['load'], soqpn['isZiYu'] && wuxvy && wx['onMessage'](function (mkjnlo) {
      mkjnlo['isLoad'] && (xy_$w['ziyuFileData'][mkjnlo['url']] = mkjnlo['data']);
    }));
  }, soqpn['onMkdirCallBack'] = function (yx$wz_, x$vzwy) {
    yx$wz_ || (xy_$w['filesListObj'] = JSON['parse'](x$vzwy['data']));
  }, soqpn['pixelRatio'] = function () {
    if (!soqpn['EnvConfig']['pixelRatioInt']) try {
      var klhg = wx['getSystemInfoSync']();return soqpn['EnvConfig']['pixelRatioInt'] = klhg['pixelRatio'], klhg['pixelRatio'];
    } catch (hfijg) {}return soqpn['EnvConfig']['pixelRatioInt'];
  }, soqpn['createElement'] = function (vwstur) {
    var stvrq;if ('canvas' == vwstur) return 0x1 == soqpn['idx'] ? soqpn['isZiYu'] ? (stvrq = sharedCanvas)['style'] = {} : stvrq = egihd['canvas'] : stvrq = egihd['wx']['createCanvas'](), soqpn['idx']++, stvrq;if ('textarea' == vwstur || 'input' == vwstur) return soqpn['onCreateInput'](vwstur);if ('div' != vwstur) return soqpn['_preCreateElement'](vwstur);return vwstur = soqpn['_preCreateElement'](vwstur), (vwstur['contains'] = function (abfcd) {
      return null;
    }, vwstur['removeChild'] = function (lnkpo) {}, vwstur);
  }, soqpn['onCreateInput'] = function (higfe) {
    return higfe = soqpn['_preCreateElement'](higfe), (higfe['focus'] = spoqn['wxinputFocus'], higfe['blur'] = spoqn['wxinputblur'], higfe['style'] = {}, higfe['value'] = 0x0, higfe['parentElement'] = {}, higfe['placeholder'] = {}, higfe['type'] = {}, higfe['setColor'] = function (uxts) {}, higfe['setType'] = function (onqps) {}, higfe['setFontFace'] = function (mhijl) {}, higfe['addEventListener'] = function (qtrup) {}, higfe['contains'] = function (niljmk) {
      return null;
    }, higfe['removeChild'] = function (vutqrs) {}, higfe);
  }, soqpn['createShaderCondition'] = function ($wvxy) {
    var xw_y$z = this;return function () {
      return xw_y$z[$wvxy['replace']('this.', '')];
    };
  }, soqpn['EnvConfig'] = null, soqpn['window'] = null, soqpn['_preCreateElement'] = null, soqpn['_inited'] = !0x1, soqpn['wxRequest'] = null, soqpn['p$ED'] = null, soqpn['version'] = '0.0.1', soqpn['isZiYu'] = !0x1, soqpn['isPosMsgYu'] = !0x1, soqpn['parseXMLFromString'] = function (lmnkpo) {
    var ijhgfk;lmnkpo = lmnkpo['replace'](/>\s+</g, '><');try {
      ijhgfk = new egihd['Parser']['DOMParser']()['parseFromString'](lmnkpo, 'text/xml');
    } catch (pmnko) {
      throw '需要引入xml解析库文件';
    }return ijhgfk;
  }, soqpn['idx'] = 0x1, soqpn);function soqpn() {}njlok(ytxuv, 'laya.wx.mini.MiniImage'), ytxuv['prototype']['_loadImage'] = function (pusq) {
    var qvsru = !0x1;-0x1 == pusq['indexOf']('layaNativeDir/') && (qvsru = !0x0, pusq = snqor['formatURL'](pusq)), xy_$w['getFileInfo'](pusq) ? ytxuv['onCreateImage'](pusq, this, !qvsru) : -0x1 != pusq['indexOf']('http://') || -0x1 != pusq['indexOf']('https://') ? xy_$w['downImg'](pusq, new edhfgc(ytxuv, ytxuv['onDownImgCallBack'], [pusq, this]), pusq) : ytxuv['onCreateImage'](pusq, this, !0x0);
  }, ytxuv['onDownImgCallBack'] = function (_$wyx, mlpqn, tursqv) {
    tursqv ? mlpqn['onError'](null) : ytxuv['onCreateImage'](_$wyx, mlpqn);
  }, ytxuv['onCreateImage'] = function (fgi, _1$yz0, rqpo) {
    var fcdeg, xyzw;function cefhg() {
      xyzw['onload'] = null, xyzw['onerror'] = null, delete _1$yz0['imgCache'][fgi];
    }fcdeg = (rqpo = void 0x0 === rqpo ? !0x1 : rqpo) ? fgi : (hfiegj = xy_$w['getFileInfo'](fgi)['md5'], xy_$w['getFileNativePath'](hfiegj)), null == _1$yz0['imgCache'] && (_1$yz0['imgCache'] = {}), rqpo = function () {
      cefhg(), _1$yz0['onLoaded'](xyzw);
    };var hfiegj = function () {
      cefhg(), _1$yz0['event']('error', 'Load image failed');
    };'nativeimage' == _1$yz0['_type'] ? ((xyzw = new zvxwyu['window']['Image']())['crossOrigin'] = '', xyzw['onload'] = rqpo, xyzw['onerror'] = hfiegj, xyzw['src'] = fcdeg, _1$yz0['imgCache'][fgi] = xyzw) : new kihjgf['create'](fcdeg, { 'onload': rqpo, 'onerror': hfiegj, 'onCreate': function (dbfceg) {
        xyzw = dbfceg, _1$yz0['imgCache'][fgi] = dbfceg;
      } });
  };function ytxuv() {}var spoqn = (njlok(qsurtp, 'laya.wx.mini.MiniInput'), qsurtp['_createInputElement'] = function () {
    gbce['_initInput'](gbce['area'] = zvxwyu['createElement']('textarea')), gbce['_initInput'](gbce['input'] = zvxwyu['createElement']('input')), gbce['inputContainer'] = zvxwyu['createElement']('div'), gbce['inputContainer']['style']['position'] = 'absolute', gbce['inputContainer']['style']['zIndex'] = 0x186a0, zvxwyu['container']['appendChild'](gbce['inputContainer']), gbce['inputContainer']['setPos'] = function (rsoqp, aefbc) {
      gbce['inputContainer']['style']['left'] = rsoqp + 'px', gbce['inputContainer']['style']['top'] = aefbc + 'px';
    }, yz$_0['stage']['on']('resize', null, qsurtp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (utyxwv) {
      egihd['dispatchEvent'] && egihd['dispatchEvent']('resize');
    }), z_02$['_soundClass'] = jihfk, z_02$['_musicClass'] = jihfk;
  }, qsurtp['_onStageResize'] = function () {
    yz$_0['stage']['_canvasTransform']['identity']()['scale'](zvxwyu['width'] / rnompq['canvas']['width'] / vqtrs['getPixelRatio'](), zvxwyu['height'] / rnompq['canvas']['height'] / vqtrs['getPixelRatio']());
  }, qsurtp['wxinputFocus'] = function (jlkmh) {
    var rotpqs = gbce['inputElement']['target'];rotpqs && !rotpqs['editable'] || (fchdge['window']['wx']['offKeyboardConfirm'](), fchdge['window']['wx']['offKeyboardInput'](), fchdge['window']['wx']['showKeyboard']({ 'defaultValue': rotpqs['text'], 'maxLength': rotpqs['maxChars'], 'multiple': rotpqs['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (vrtusq) {}, 'fail': function (ihmjk) {} }), fchdge['window']['wx']['onKeyboardConfirm'](function (hlmki) {
      hlmki = hlmki ? hlmki['value'] : '', (rotpqs['text'] = hlmki, rotpqs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), fchdge['window']['wx']['onKeyboardInput'](function (dcebf) {
      dcebf = dcebf ? dcebf['value'] : '', rotpqs['multiline'] || -0x1 == dcebf['indexOf']('\x0a') ? (rotpqs['text'] = dcebf, rotpqs['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, qsurtp['inputEnter'] = function () {
    gbce['inputElement']['target']['focus'] = !0x1;
  }, qsurtp['wxinputblur'] = function () {
    qsurtp['hideKeyboard']();
  }, qsurtp['hideKeyboard'] = function () {
    fchdge['window']['wx']['offKeyboardConfirm'](), fchdge['window']['wx']['offKeyboardInput'](), fchdge['window']['wx']['hideKeyboard']({ 'success': function (dcgef) {
        console['log']('隐藏键盘');
      }, 'fail': function ($_0yzx) {
        console['log']('隐藏键盘出错:' + ($_0yzx ? $_0yzx['errMsg'] : ''));
      } });
  }, qsurtp);function qsurtp() {}var xutvws = function () {
    function limkh() {}njlok(limkh, 'laya.wx.mini.MiniLoader');var pnmq = limkh['prototype'];return pnmq['load'] = function (nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih) {
      void 0x0 === _$0yz1 && (_$0yz1 = !0x0), void 0x0 === egfjih && (egfjih = !0x1);var feadc = this;0x0 === (feadc['_url'] = nmkopl)['indexOf']('data:image') ? feadc['_type'] = vwtxuy = 'image' : feadc['_type'] = vwtxuy = vwtxuy || feadc['getTypeFromUrl'](nmkopl), feadc['_cache'] = _$0yz1, feadc['_data'] = null;var $20_z = 'ascii';-0x1 != nmkopl['indexOf']('.fnt') ? $20_z = 'utf8' : 'arraybuffer' == vwtxuy && ($20_z = '');var bedfac = ejif['getFileExtension'](nmkopl);if (-0x1 != limkh['_fileTypeArr']['indexOf'](bedfac)) fchdge['EnvConfig']['load']['call'](this, nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih);else {
        if (xy_$w['getFileInfo'](nmkopl)) fchdge['EnvConfig']['load']['call'](this, nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih);else {
          if (-0x1 != nmkopl['indexOf']('layaNativeDir/')) {
            if (fchdge['isZiYu']) {
              var uvtsrw = xy_$w['ziyuFileData'][nmkopl];return void feadc['onLoaded'](uvtsrw);
            }return cosnole['log']('read read'), void xy_$w['read'](nmkopl, $20_z, new edhfgc(limkh, limkh['onReadNativeCallBack'], [$20_z, nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih, feadc]));
          }uvtsrw = '' == snqor['rootPath'] ? nmkopl : nmkopl['split'](snqor['rootPath'])[0x0], -0x1 != nmkopl['indexOf']('http://') || -0x1 != nmkopl['indexOf']('https://') ? fchdge['EnvConfig']['load']['call'](feadc, nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih) : xy_$w['readFile'](uvtsrw, $20_z, new edhfgc(limkh, limkh['onReadNativeCallBack'], [$20_z, nmkopl, vwtxuy, _$0yz1, tuyxw, egfjih, feadc]), nmkopl);
        }
      }
    }, pnmq['resMgrLoad'] = function (qpusrt, oqsr, $_120, sopqtr, chdg, knmolp, _1$z20) {
      void 0x0 === $_120 && ($_120 = 0x0), void 0x0 === sopqtr && (sopqtr = !0x1), void 0x0 === chdg && (chdg = !0x1), void 0x0 === knmolp && (knmolp = 0x0), void 0x0 === _1$z20 && (_1$z20 = 0x3), -0x1 != qpusrt['indexOf']('mpack') && console['log']('=============resMgrLoad url:', qpusrt), fchdge['EnvConfig']['resMgrLoad'](qpusrt, ($_321, lmpk, gkl) => {
        limkh['prototype']['resMgrLoadCallBack']($_321, lmpk, gkl, oqsr);
      }, $_120, sopqtr, chdg, knmolp, _1$z20);
    }, pnmq['resMgrLoadCallBack'] = function (xwtu, olmnqp, acbd, suwtxv) {
      console['log']('buff:::', xwtu, acbd, xy_$w['fileNativeDir'] + '///' + xy_$w['fileListName']), suwtxv(xwtu, olmnqp, acbd);
    }, pnmq['clearRes'] = function (iefgj, rsvtu) {
      this['clearRes'](iefgj, rsvtu = void 0x0 === rsvtu ? !0x1 : rsvtu), rsvtu = xy_$w['getFileInfo'](iefgj), !rsvtu || -0x1 == iefgj['indexOf']('http://') && -0x1 == iefgj['indexOf']('https://') || (rsvtu = rsvtu['md5'], rsvtu = xy_$w['getFileNativePath'](rsvtu), xy_$w['remove'](rsvtu));
    }, limkh['onReadNativeCallBack'] = function (jinkm, pnqrso, rnposq, vyxuw, nojmkl, hdfieg, uyxwzv, oqlp, xwvzu) {
      void 0x0 === vyxuw && (vyxuw = !0x0), void 0x0 === hdfieg && (hdfieg = !0x1), (oqlp = void 0x0 === oqlp ? 0x0 : oqlp) ? 0x1 == oqlp && fchdge['EnvConfig']['load']['call'](uyxwzv, pnqrso, rnposq, vyxuw, nojmkl, hdfieg) : (xwvzu = 'json' == rnposq || 'atlas' == rnposq ? fchdge['getJson'](xwvzu['data']) : 'xml' == rnposq ? ejif['parseXMLFromString'](xwvzu['data']) : xwvzu['data'], uyxwzv['onLoaded'](xwvzu), !fchdge['isZiYu'] && fchdge['isPosMsgYu'] && 'arraybuffer' != rnposq && wx['postMessage']({ 'url': pnqrso, 'data': xwvzu, 'isLoad': !0x0 }));
    }, okjl(limkh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), limkh;
  }(),
      xy_$w = (njlok(hkjm, 'laya.wx.mini.MiniFileMgr', urtsvw), hkjm['isLoadFile'] = function (dgecfh) {
    return -0x1 != hkjm['_fileTypeArr']['indexOf'](dgecfh);
  }, hkjm['getFileInfo'] = function (opnrqm) {
    return opnrqm = opnrqm['split']('?')[0x0], opnrqm = hkjm['filesListObj'][opnrqm], null == opnrqm ? null : opnrqm;
  }, hkjm['onFileUpdate'] = function (_z102, xz_w) {
    var klpn = _z102['split']('/');_z102 = klpn[klpn['length'] - 0x1], klpn = hkjm['getFileInfo'](xz_w), null == klpn ? hkjm['onSaveFile'](xz_w, _z102) : klpn['readyUrl'] != xz_w && hkjm['remove'](_z102, xz_w);
  }, hkjm['exits'] = function (srwvut, onmprq) {
    srwvut = hkjm['getFileNativePath'](srwvut), hkjm['fs']['getFileInfo']({ 'filePath': srwvut, 'success': function (fjhi) {
        null != onmprq && onmprq['runWith']([0x0, fjhi]);
      }, 'fail': function (ifehjg) {
        null != onmprq && onmprq['runWith']([0x1, ifehjg]);
      } });
  }, hkjm['read'] = function (gfhk, qonmrp, nolmjk, ihjmk) {
    void 0x0 === qonmrp && (qonmrp = 'ascill'), gfhk = '' != (ihjmk = void 0x0 === ihjmk ? '' : ihjmk) ? hkjm['getFileNativePath'](gfhk) : gfhk, hkjm['fs']['readFile']({ 'filePath': gfhk, 'encoding': qonmrp, 'success': function (y$_zx0) {
        null != nolmjk && nolmjk['runWith']([0x0, y$_zx0]);
      }, 'fail': function (zyx_0) {
        zyx_0 && '' != ihjmk ? hkjm['down'](ihjmk, qonmrp, nolmjk, ihjmk) : null != nolmjk && nolmjk['runWith']([0x1]);
      } });
  }, hkjm['readNativeFile'] = function (nmlik, kfhi) {
    hkjm['fs']['readFile']({ 'filePath': nmlik, 'encoding': '', 'success': function (z01$y) {
        null != kfhi && kfhi['runWith']([0x0]);
      }, 'fail': function (liknm) {
        null != kfhi && kfhi['runWith']([0x1]);
      } });
  }, hkjm['down'] = function (cedbgf, $y_xwz, vqtur, efchg) {
    void 0x0 === $y_xwz && ($y_xwz = 'ascill'), void 0x0 === efchg && (efchg = '');var gdfei = hkjm['getFileNativePath'](efchg);hkjm['wxdown']({ 'url': cedbgf, 'filePath': gdfei, 'success': function (ojmnlk) {
        0xc8 === ojmnlk['statusCode'] && hkjm['readFile'](ojmnlk['filePath'], $y_xwz, vqtur, efchg);
      }, 'fail': function (decgfb) {
        null != vqtur && vqtur['runWith']([0x1, decgfb]);
      } })['onProgressUpdate'](function (yw_$xz) {
      null != vqtur && vqtur['runWith']([0x2, yw_$xz['progress']]);
    });
  }, hkjm['readFile'] = function (mknolj, nprsoq, nqpol, uvzx) {
    void 0x0 === uvzx && (uvzx = ''), hkjm['fs']['readFile']({ 'filePath': mknolj, 'encoding': nprsoq = void 0x0 === nprsoq ? 'ascill' : nprsoq, 'success': function (swuvr) {
        -0x1 == mknolj['indexOf']('http://') && -0x1 == mknolj['indexOf']('https://') || hkjm['onFileUpdate'](mknolj, uvzx), null != nqpol && nqpol['runWith']([0x0, swuvr]);
      }, 'fail': function (prust) {
        prust && null != nqpol && nqpol['runWith']([0x1, prust]);
      } });
  }, hkjm['downImg'] = function (wstuvr, bedfgc, xtwyuv) {
    void 0x0 === xtwyuv && (xtwyuv = ''), hkjm['wxdown']({ 'url': wstuvr, 'success': function (lojmk) {
        0xc8 === lojmk['statusCode'] && hkjm['copyFile'](lojmk['tempFilePath'], xtwyuv, bedfgc);
      }, 'fail': function (gfbedc) {
        null != bedfgc && bedfgc['runWith']([0x1, gfbedc]);
      } });
  }, hkjm['copyFile'] = function (afbd, gjhe, sornq) {
    var imklnj = afbd['split']('/'),
        tqsur = imklnj[imklnj['length'] - 0x1];gjhe['split']('?')[0x0];var tvuw = hkjm['getFileInfo'](gjhe);imklnj = hkjm['getFileNativePath'](tqsur), hkjm['fs']['copyFile']({ 'srcPath': afbd, 'destPath': imklnj, 'success': function (y0_z1) {
        tvuw ? tvuw['readyUrl'] != gjhe && hkjm['remove'](tqsur, gjhe, sornq) : (hkjm['onSaveFile'](gjhe, tqsur), null != sornq && sornq['runWith']([0x0]));
      }, 'fail': function (hfdig) {
        null != sornq && sornq['runWith']([0x1, hfdig]);
      } });
  }, hkjm['getFileNativePath'] = function (sorqtp) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sorqtp;
  }, hkjm['remove'] = function (mjkl, jhlk, milhj) {
    void 0x0 === jhlk && (jhlk = '');var srwtvu = hkjm['getFileInfo'](jhlk),
        rtvsuw = hkjm['getFileNativePath'](srwtvu['md5']);yz$_0['loader']['clearRes'](srwtvu['readyUrl']), hkjm['fs']['unlink']({ 'filePath': rtvsuw, 'success': function (fdecba) {
        '' != jhlk && hkjm['onSaveFile'](jhlk, mjkl), null != milhj && milhj['runWith']([0x0]);
      }, 'fail': function (zyv$x) {} });
  }, hkjm['onSaveFile'] = function (rsqpot, ecbda) {
    var mlnik = rsqpot['split']('?')[0x0];hkjm['filesListObj'][mlnik] = { 'md5': ecbda, 'readyUrl': rsqpot }, hkjm['fs']['writeFile']({ 'filePath': hkjm['fileNativeDir'] + '/' + hkjm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hkjm['filesListObj']), 'success': function (vuxt) {
        console['log']('写入测试测试成功：', vuxt);
      }, 'fail': function (xvtwu) {
        console['log']('写入测试测试失败：', xvtwu);
      } });
  }, hkjm['existDir'] = function (_0$12, utvsrq) {
    hkjm['fs']['mkdir']({ 'dirPath': _0$12, 'success': function (wyx_) {
        null != utvsrq && utvsrq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (lkihmj) {
        -0x1 != lkihmj['errMsg']['indexOf']('file already exists') ? hkjm['readSync'](hkjm['fileListName'], 'utf8', utvsrq) : null != utvsrq && utvsrq['runWith']([0x1, lkihmj]);
      } });
  }, hkjm['readSync'] = function (dfbgec, xvyz$w, z20$_1, _$02) {
    void 0x0 === xvyz$w && (xvyz$w = 'ascill'), void 0x0 === _$02 && (_$02 = ''), dfbgec = hkjm['getFileNativePath'](dfbgec);var w$zx_y;try {
      w$zx_y = hkjm['fs']['readFileSync'](dfbgec), null != z20$_1 && z20$_1['runWith']([0x0, { 'data': w$zx_y }]);
    } catch (injlk) {
      null != z20$_1 && z20$_1['runWith']([0x1]);
    }
  }, hkjm['readCache'] = function () {}, hkjm['writeCache'] = function (purq) {
    var uzxyv = readyUrl['split']('?')[0x0];hkjm['filesListObj'][uzxyv] = { 'md5': md5Name, 'readyUrl': readyUrl }, hkjm['fs']['writeFile']({ 'filePath': hkjm['fileNativeDir'] + '/' + hkjm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](hkjm['filesListObj']), 'success': function (z$xy_) {}, 'fail': function (lojmn) {} });
  }, hkjm['setNativeFileDir'] = function (nokjl) {
    hkjm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nokjl;
  }, hkjm['filesListObj'] = {}, hkjm['fileNativeDir'] = null, hkjm['fileListName'] = 'layaairfiles.txt', hkjm['ziyuFileData'] = {}, okjl(hkjm, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), hkjm);function hkjm() {
    hkjm['__super']['call'](this);
  }var jihfk = function () {
    function stpor() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, stpor['__super']['call'](this), this['_sound'] = stpor['_createSound']();
    }njlok(stpor, 'laya.wx.mini.MiniSound', urtsvw);var mqpro = stpor['prototype'];return mqpro['load'] = function (imjhl) {
      var twyxv = this,
          spqtro;function rsoqpn() {
        if (null != stpor['_null']) twyxv['_sound']['onCanplay'](stpor['_null']), twyxv['_sound']['onError'](stpor['_null']);else try {
          twyxv['_sound']['onCanplay'](null), twyxv['_sound']['onError'](null), stpor['_null'] = null;
        } catch (ihedfg) {
          console['warn']('[wxmini] _clearSound:' + ihedfg), twyxv['_sound']['onCanplay'](_$210), twyxv['_sound']['onError'](_$210), stpor['_null'] = _$210;
        }
      }function _$210() {}imjhl = snqor['formatURL'](imjhl), this['url'] = imjhl, stpor['_audioCache'][imjhl] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        rsoqpn(), spqtro['loaded'] = !0x0, spqtro['event']('complete'), stpor['_audioCache'][spqtro['url']] = spqtro;
      }), this['_sound']['onError'](function (zxy_$w) {
        console['error']('errCode=' + zxy_$w['errCode'] + '  errMsg=' + zxy_$w['errMsg']), rsoqpn(), spqtro['event']('error');
      }), this['_sound']['src'] = imjhl, spqtro = this);
    }, mqpro['play'] = function (jief, fhdgec) {
      void 0x0 === jief && (jief = 0x0), void 0x0 === fhdgec && (fhdgec = 0x0), (xuzyvw = this['url'] == z_02$['_tMusic'] ? (stpor['_musicAudio'] || (stpor['_musicAudio'] = stpor['_createSound']()), stpor['_musicAudio']) : stpor['_createSound']())['src'] = this['url'];var xuzyvw = new vx$wy(xuzyvw);return xuzyvw['url'] = this['url'], xuzyvw['loops'] = fhdgec, xuzyvw['startTime'] = jief, xuzyvw['play'](), z_02$['addChannel'](xuzyvw), xuzyvw;
    }, mqpro['dispose'] = function () {
      var _yz10 = stpor['_audioCache'][this['url']];_yz10 && (_yz10['src'] = '', delete stpor['_audioCache'][this['url']]);
    }, stuvqr(0x0, mqpro, 'duration', function () {
      return this['_sound']['duration'];
    }), stpor['_createSound'] = function () {
      return stpor['_id']++, fchdge['window']['wx']['createInnerAudioContext']();
    }, stpor['_musicAudio'] = null, stpor['_id'] = 0x0, stpor['_audioCache'] = {}, stpor['_null'] = void 0x0, stpor;
  }(),
      vx$wy = function () {
    function nsoq(sqropt) {
      this['_audio'] = null, this['_onEnd'] = null, nsoq['__super']['call'](this), this['_audio'] = sqropt, this['_onEnd'] = ejif['bind'](this['__onEnd'], this), sqropt['onEnded'](this['_onEnd']);
    }njlok(nsoq, 'laya.wx.mini.MiniSoundChannel', prnosq);var fhijge = nsoq['prototype'];return fhijge['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (yz$_0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fhijge['__onNull'] = function () {}, fhijge['play'] = function () {
      this['isStopped'] = !0x1, z_02$['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, fhijge['stop'] = function () {
      if (this['isStopped'] = !0x0, z_02$['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != nsoq['_null']) this['_audio']['onEnded'](nsoq['_null']);else try {
          this['_audio']['onEnded'](null), nsoq['_null'] = null;
        } catch (rsnop) {
          console['warn']('[wxmini] stop:' + rsnop), this['_audio']['onEnded'](ejif['bind'](this['__onNull'], this)), nsoq['_null'] = ejif['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, fhijge['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, fhijge['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, z_02$['addChannel'](this), this['_audio']['play']());
    }, stuvqr(0x0, fhijge, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), stuvqr(0x0, fhijge, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), stuvqr(0x0, fhijge, 'volume', function () {
      return 0x1;
    }, function (hdcge) {}), nsoq['_null'] = void 0x0, nsoq;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ojknl, onmljk) {
  'use strict';

  for (var difhg in Object['defineProperty'](onmljk, '__esModule', { 'value': !0x0 }), Laya) {
    var hjim = Laya[difhg];hjim && hjim['__isclass'] && (onmljk[difhg] = hjim);
  }
});