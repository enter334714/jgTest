var p = wx.$h;
!function (oqrp, hifjgk) {
  hifjgk['un'], hifjgk['uns'];var kmnolj = hifjgk['static'],
      fhdei = hifjgk['class'],
      hedfgc = hifjgk['getset'];hifjgk['__newvec'];var mrponq = laya['utils']['Browser'],
      ropnq = (laya['events']['Event'], laya['events']['EventDispatcher']),
      vwqst = laya['resource']['HTMLImage'],
      vsyxt = laya['utils']['Handler'],
      swrxvt = laya['display']['Input'],
      lnokpm = laya['net']['Loader'];laya['maths']['Matrix'];var nmlop = laya['renders']['Render'],
      nqosp = laya['utils']['RunDriver'];laya['media']['Sound'];var nmkjl = laya['media']['SoundChannel'],
      lnkjmo = laya['media']['SoundManager'],
      lkon = (laya['display']['Stage'], laya['net']['URL']),
      qponsr = laya['utils']['Utils'],
      wztxyv = (fhdei(xv$zwy, 'laya.wx.mini.MiniAdpter'), xv$zwy['getJson'] = function (vyxwtz) {
    return JSON['parse'](vyxwtz);
  }, xv$zwy['init'] = function (qrnopm, edcbfg) {
    void 0x0 === qrnopm && (qrnopm = !0x1), void 0x0 === edcbfg && (edcbfg = !0x1), xv$zwy['_inited'] || (xv$zwy['window'] = oqrp)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (xv$zwy['_inited'] = !0x0, xv$zwy['isZiYu'] = edcbfg, xv$zwy['isPosMsgYu'] = qrnopm, xv$zwy['EnvConfig'] = {}, xv$zwy['isZiYu'] || (vx$zwy['setNativeFileDir']('/layaairGame'), vx$zwy['existDir'](vx$zwy['fileNativeDir'], vsyxt['create'](xv$zwy, xv$zwy['onMkdirCallBack']))), xv$zwy['window']['focus'] = function () {}, hifjgk['getUrlPath'] = function () {}, xv$zwy['window']['logtime'] = function ($2z10_) {}, xv$zwy['window']['alertTimeLog'] = function (fehgcd) {}, xv$zwy['window']['resetShareInfo'] = function () {}, xv$zwy['window']['CanvasRenderingContext2D'] = function () {}, xv$zwy['window']['CanvasRenderingContext2D']['prototype'] = xv$zwy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xv$zwy['window']['document']['body']['appendChild'] = function () {}, xv$zwy['EnvConfig']['pixelRatioInt'] = 0x0, nqosp['getPixelRatio'] = xv$zwy['pixelRatio'], xv$zwy['_preCreateElement'] = mrponq['createElement'], mrponq['createElement'] = xv$zwy['createElement'], nqosp['createShaderCondition'] = xv$zwy['createShaderCondition'], qponsr['parseXMLFromString'] = xv$zwy['parseXMLFromString'], swrxvt['_createInputElement'] = gbfed['_createInputElement'], xv$zwy['EnvConfig']['load'] = lnokpm['prototype']['load'], lnokpm['prototype']['load'] = chgef['prototype']['load'], xv$zwy['isZiYu'] && qrnopm && wx['onMessage'](function (mrpoqn) {
      mrpoqn['isLoad'] && (vx$zwy['ziyuFileData'][mrpoqn['url']] = mrpoqn['data']);
    }));
  }, xv$zwy['onMkdirCallBack'] = function (vwqrts, psnr) {
    vwqrts || (vx$zwy['filesListObj'] = JSON['parse'](psnr['data']));
  }, xv$zwy['pixelRatio'] = function () {
    if (!xv$zwy['EnvConfig']['pixelRatioInt']) try {
      var fbceda = wx['getSystemInfoSync']();return xv$zwy['EnvConfig']['pixelRatioInt'] = fbceda['pixelRatio'], fbceda['pixelRatio'];
    } catch (dhfcg) {}return xv$zwy['EnvConfig']['pixelRatioInt'];
  }, xv$zwy['createElement'] = function (mrpqn) {
    var ecafbd;if ('canvas' == mrpqn) return 0x1 == xv$zwy['idx'] ? xv$zwy['isZiYu'] ? (ecafbd = sharedCanvas)['style'] = {} : ecafbd = oqrp['canvas'] : ecafbd = oqrp['wx']['createCanvas'](), xv$zwy['idx']++, ecafbd;if ('textarea' == mrpqn || 'input' == mrpqn) return xv$zwy['onCreateInput'](mrpqn);if ('div' != mrpqn) return xv$zwy['_preCreateElement'](mrpqn);return mrpqn = xv$zwy['_preCreateElement'](mrpqn), (mrpqn['contains'] = function (dfbge) {
      return null;
    }, mrpqn['removeChild'] = function (igjhkf) {}, mrpqn);
  }, xv$zwy['onCreateInput'] = function (_43012) {
    return _43012 = xv$zwy['_preCreateElement'](_43012), (_43012['focus'] = gbfed['wxinputFocus'], _43012['blur'] = gbfed['wxinputblur'], _43012['style'] = {}, _43012['value'] = 0x0, _43012['parentElement'] = {}, _43012['placeholder'] = {}, _43012['type'] = {}, _43012['setColor'] = function (cbefa) {}, _43012['setType'] = function (gfehcd) {}, _43012['setFontFace'] = function (xyzv$w) {}, _43012['addEventListener'] = function (_0$yzx) {}, _43012['contains'] = function (sroq) {
      return null;
    }, _43012['removeChild'] = function (lonmk) {}, _43012);
  }, xv$zwy['createShaderCondition'] = function (qtpsr) {
    var deacf = this;return function () {
      return deacf[qtpsr['replace']('this.', '')];
    };
  }, xv$zwy['EnvConfig'] = null, xv$zwy['window'] = null, xv$zwy['_preCreateElement'] = null, xv$zwy['_inited'] = !0x1, xv$zwy['wxRequest'] = null, xv$zwy['systemInfo'] = null, xv$zwy['version'] = '0.0.1', xv$zwy['isZiYu'] = !0x1, xv$zwy['isPosMsgYu'] = !0x1, xv$zwy['parseXMLFromString'] = function (_z0$) {
    var txvsyw;_z0$ = _z0$['replace'](/>\s+</g, '><');try {
      txvsyw = new oqrp['Parser']['DOMParser']()['parseFromString'](_z0$, 'text/xml');
    } catch (twsx) {
      throw '需要引入xml解析库文件';
    }return txvsyw;
  }, xv$zwy['idx'] = 0x1, xv$zwy);function xv$zwy() {}fhdei(tzvwy, 'laya.wx.mini.MiniImage'), tzvwy['prototype']['_loadImage'] = function (y0xz) {
    var y_0z1 = !0x1;-0x1 == y0xz['indexOf']('layaNativeDir/') && (y_0z1 = !0x0, y0xz = lkon['formatURL'](y0xz)), vx$zwy['getFileInfo'](y0xz) ? tzvwy['onCreateImage'](y0xz, this, !y_0z1) : -0x1 != y0xz['indexOf']('http://') || -0x1 != y0xz['indexOf']('https://') ? vx$zwy['downImg'](y0xz, new vsyxt(tzvwy, tzvwy['onDownImgCallBack'], [y0xz, this]), y0xz) : tzvwy['onCreateImage'](y0xz, this, !0x0);
  }, tzvwy['onDownImgCallBack'] = function ($zxwvy, xrtwvs, gdfch) {
    gdfch ? xrtwvs['onError'](null) : tzvwy['onCreateImage']($zxwvy, xrtwvs);
  }, tzvwy['onCreateImage'] = function (svptq, okjnlm, otpsqr) {
    var xwy, $21_z0;function qpomln() {
      $21_z0['onload'] = null, $21_z0['onerror'] = null, delete okjnlm['imgCache'][svptq];
    }xwy = (otpsqr = void 0x0 === otpsqr ? !0x1 : otpsqr) ? svptq : (dbca = vx$zwy['getFileInfo'](svptq)['md5'], vx$zwy['getFileNativePath'](dbca)), null == okjnlm['imgCache'] && (okjnlm['imgCache'] = {}), otpsqr = function () {
      qpomln(), okjnlm['onLoaded']($21_z0);
    };var dbca = function () {
      qpomln(), okjnlm['event']('error', 'Load image failed');
    };'nativeimage' == okjnlm['_type'] ? (($21_z0 = new mrponq['window']['Image']())['crossOrigin'] = '', $21_z0['onload'] = otpsqr, $21_z0['onerror'] = dbca, $21_z0['src'] = xwy, okjnlm['imgCache'][svptq] = $21_z0) : new vwqst['create'](xwy, { 'onload': otpsqr, 'onerror': dbca, 'onCreate': function (vyzxt) {
        $21_z0 = vyzxt, okjnlm['imgCache'][svptq] = vyzxt;
      } });
  };function tzvwy() {}var gbfed = (fhdei(z$vyx, 'laya.wx.mini.MiniInput'), z$vyx['_createInputElement'] = function () {
    swrxvt['_initInput'](swrxvt['area'] = mrponq['createElement']('textarea')), swrxvt['_initInput'](swrxvt['input'] = mrponq['createElement']('input')), swrxvt['inputContainer'] = mrponq['createElement']('div'), swrxvt['inputContainer']['style']['position'] = 'absolute', swrxvt['inputContainer']['style']['zIndex'] = 0x186a0, mrponq['container']['appendChild'](swrxvt['inputContainer']), swrxvt['inputContainer']['setPos'] = function (qrpsno, fgijh) {
      swrxvt['inputContainer']['style']['left'] = qrpsno + 'px', swrxvt['inputContainer']['style']['top'] = fgijh + 'px';
    }, hifjgk['stage']['on']('resize', null, z$vyx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ebcaf) {
      oqrp['dispatchEvent'] && oqrp['dispatchEvent']('resize');
    }), lnkjmo['_soundClass'] = $x0_yz, lnkjmo['_musicClass'] = $x0_yz;
  }, z$vyx['_onStageResize'] = function () {
    hifjgk['stage']['_canvasTransform']['identity']()['scale'](mrponq['width'] / nmlop['canvas']['width'] / nqosp['getPixelRatio'](), mrponq['height'] / nmlop['canvas']['height'] / nqosp['getPixelRatio']());
  }, z$vyx['wxinputFocus'] = function (xwtsr) {
    var figdhe = swrxvt['inputElement']['target'];figdhe && !figdhe['editable'] || (wztxyv['window']['wx']['offKeyboardConfirm'](), wztxyv['window']['wx']['offKeyboardInput'](), wztxyv['window']['wx']['showKeyboard']({ 'defaultValue': figdhe['text'], 'maxLength': figdhe['maxChars'], 'multiple': figdhe['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (yxz$v) {}, 'fail': function (bdfec) {} }), wztxyv['window']['wx']['onKeyboardConfirm'](function (z$xy) {
      z$xy = z$xy ? z$xy['value'] : '', (figdhe['text'] = z$xy, figdhe['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), wztxyv['window']['wx']['onKeyboardInput'](function (khljg) {
      khljg = khljg ? khljg['value'] : '', figdhe['multiline'] || -0x1 == khljg['indexOf']('\x0a') ? (figdhe['text'] = khljg, figdhe['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, z$vyx['inputEnter'] = function () {
    swrxvt['inputElement']['target']['focus'] = !0x1;
  }, z$vyx['wxinputblur'] = function () {
    z$vyx['hideKeyboard']();
  }, z$vyx['hideKeyboard'] = function () {
    wztxyv['window']['wx']['offKeyboardConfirm'](), wztxyv['window']['wx']['offKeyboardInput'](), wztxyv['window']['wx']['hideKeyboard']({ 'success': function (nqprso) {
        console['log']('隐藏键盘');
      }, 'fail': function (pqnmr) {
        console['log']('隐藏键盘出错:' + (pqnmr ? pqnmr['errMsg'] : ''));
      } });
  }, z$vyx);function z$vyx() {}var chgef = function () {
    function gcdh() {}fhdei(gcdh, 'laya.wx.mini.MiniLoader');var knplm = gcdh['prototype'];return knplm['load'] = function (gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc) {
      void 0x0 === lnmpqo && (lnmpqo = !0x0), void 0x0 === hfdegc && (hfdegc = !0x1);var $y1z = this;0x0 === ($y1z['_url'] = gjfhi)['indexOf']('data:image') ? $y1z['_type'] = hcedgf = 'image' : $y1z['_type'] = hcedgf = hcedgf || $y1z['getTypeFromUrl'](gjfhi), $y1z['_cache'] = lnmpqo, $y1z['_data'] = null;var nplqmo = 'ascii';-0x1 != gjfhi['indexOf']('.fnt') ? nplqmo = 'utf8' : 'arraybuffer' == hcedgf && (nplqmo = '');var pmrq = qponsr['getFileExtension'](gjfhi);if (-0x1 != gcdh['_fileTypeArr']['indexOf'](pmrq)) wztxyv['EnvConfig']['load']['call'](this, gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc);else {
        if (vx$zwy['getFileInfo'](gjfhi)) wztxyv['EnvConfig']['load']['call'](this, gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc);else {
          if (-0x1 != gjfhi['indexOf']('layaNativeDir/')) {
            if (wztxyv['isZiYu']) {
              var fgedc = vx$zwy['ziyuFileData'][gjfhi];return void $y1z['onLoaded'](fgedc);
            }return cosnole['log']('read read'), void vx$zwy['read'](gjfhi, nplqmo, new vsyxt(gcdh, gcdh['onReadNativeCallBack'], [nplqmo, gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc, $y1z]));
          }fgedc = '' == lkon['rootPath'] ? gjfhi : gjfhi['split'](lkon['rootPath'])[0x0], -0x1 != gjfhi['indexOf']('http://') || -0x1 != gjfhi['indexOf']('https://') ? wztxyv['EnvConfig']['load']['call']($y1z, gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc) : vx$zwy['readFile'](fgedc, nplqmo, new vsyxt(gcdh, gcdh['onReadNativeCallBack'], [nplqmo, gjfhi, hcedgf, lnmpqo, z_y1$0, hfdegc, $y1z]), gjfhi);
        }
      }
    }, knplm['resMgrLoad'] = function (vtyx, stpvq, zy_x0, stp, wyxv, idhge, zvxtw) {
      void 0x0 === zy_x0 && (zy_x0 = 0x0), void 0x0 === stp && (stp = !0x1), void 0x0 === wyxv && (wyxv = !0x1), void 0x0 === idhge && (idhge = 0x0), void 0x0 === zvxtw && (zvxtw = 0x3), -0x1 != vtyx['indexOf']('mpack') && console['log']('=============resMgrLoad url:', vtyx), wztxyv['EnvConfig']['resMgrLoad'](vtyx, (pnqmor, qport, ifedgh) => {
        gcdh['prototype']['resMgrLoadCallBack'](pnqmor, qport, ifedgh, stpvq);
      }, zy_x0, stp, wyxv, idhge, zvxtw);
    }, knplm['resMgrLoadCallBack'] = function (hgifd, kjgilh, mnjil, mlq) {
      console['log']('buff:::', hgifd, mnjil, vx$zwy['fileNativeDir'] + '///' + vx$zwy['fileListName']), mlq(hgifd, kjgilh, mnjil);
    }, knplm['clearRes'] = function (edfabc, qtrspo) {
      this['clearRes'](edfabc, qtrspo = void 0x0 === qtrspo ? !0x1 : qtrspo), qtrspo = vx$zwy['getFileInfo'](edfabc), !qtrspo || -0x1 == edfabc['indexOf']('http://') && -0x1 == edfabc['indexOf']('https://') || (qtrspo = qtrspo['md5'], qtrspo = vx$zwy['getFileNativePath'](qtrspo), vx$zwy['remove'](qtrspo));
    }, gcdh['onReadNativeCallBack'] = function (konmlp, imkjhl, txvy, hfgecd, fbecda, oqsrp, mkljni, igfdhe, xwrt) {
      void 0x0 === hfgecd && (hfgecd = !0x0), void 0x0 === oqsrp && (oqsrp = !0x1), (igfdhe = void 0x0 === igfdhe ? 0x0 : igfdhe) ? 0x1 == igfdhe && wztxyv['EnvConfig']['load']['call'](mkljni, imkjhl, txvy, hfgecd, fbecda, oqsrp) : (xwrt = 'json' == txvy || 'atlas' == txvy ? wztxyv['getJson'](xwrt['data']) : 'xml' == txvy ? qponsr['parseXMLFromString'](xwrt['data']) : xwrt['data'], mkljni['onLoaded'](xwrt), !wztxyv['isZiYu'] && wztxyv['isPosMsgYu'] && 'arraybuffer' != txvy && wx['postMessage']({ 'url': imkjhl, 'data': xwrt, 'isLoad': !0x0 }));
    }, kmnolj(gcdh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), gcdh;
  }(),
      vx$zwy = (fhdei(onmjkl, 'laya.wx.mini.MiniFileMgr', ropnq), onmjkl['isLoadFile'] = function (adebcf) {
    return -0x1 != onmjkl['_fileTypeArr']['indexOf'](adebcf);
  }, onmjkl['getFileInfo'] = function (ropns) {
    return ropns = ropns['split']('?')[0x0], ropns = onmjkl['filesListObj'][ropns], null == ropns ? null : ropns;
  }, onmjkl['onFileUpdate'] = function (efabc, efgb) {
    var x0_z$y = efabc['split']('/');efabc = x0_z$y[x0_z$y['length'] - 0x1], x0_z$y = onmjkl['getFileInfo'](efgb), null == x0_z$y ? onmjkl['onSaveFile'](efgb, efabc) : x0_z$y['readyUrl'] != efgb && onmjkl['remove'](efabc, efgb);
  }, onmjkl['exits'] = function (twzvx, bgdfe) {
    twzvx = onmjkl['getFileNativePath'](twzvx), onmjkl['fs']['getFileInfo']({ 'filePath': twzvx, 'success': function (ebfdac) {
        null != bgdfe && bgdfe['runWith']([0x0, ebfdac]);
      }, 'fail': function (ljghki) {
        null != bgdfe && bgdfe['runWith']([0x1, ljghki]);
      } });
  }, onmjkl['read'] = function (tvrqw, tro, xwts, hefij) {
    void 0x0 === tro && (tro = 'ascill'), tvrqw = '' != (hefij = void 0x0 === hefij ? '' : hefij) ? onmjkl['getFileNativePath'](tvrqw) : tvrqw, onmjkl['fs']['readFile']({ 'filePath': tvrqw, 'encoding': tro, 'success': function (fdehcg) {
        null != xwts && xwts['runWith']([0x0, fdehcg]);
      }, 'fail': function (nkmplo) {
        nkmplo && '' != hefij ? onmjkl['down'](hefij, tro, xwts, hefij) : null != xwts && xwts['runWith']([0x1]);
      } });
  }, onmjkl['readNativeFile'] = function (ihedg, lkoj) {
    onmjkl['fs']['readFile']({ 'filePath': ihedg, 'encoding': '', 'success': function (gjehf) {
        null != lkoj && lkoj['runWith']([0x0]);
      }, 'fail': function (ikml) {
        null != lkoj && lkoj['runWith']([0x1]);
      } });
  }, onmjkl['down'] = function (zy0_x, inlm, egdchf, vyxt) {
    void 0x0 === inlm && (inlm = 'ascill'), void 0x0 === vyxt && (vyxt = '');var hkjfig = onmjkl['getFileNativePath'](vyxt);onmjkl['wxdown']({ 'url': zy0_x, 'filePath': hkjfig, 'success': function (tzyx) {
        0xc8 === tzyx['statusCode'] && onmjkl['readFile'](tzyx['filePath'], inlm, egdchf, vyxt);
      }, 'fail': function (ghejfi) {
        null != egdchf && egdchf['runWith']([0x1, ghejfi]);
      } })['onProgressUpdate'](function (gfihj) {
      null != egdchf && egdchf['runWith']([0x2, gfihj['progress']]);
    });
  }, onmjkl['readFile'] = function (dbgef, tywsxv, ihlkjm, minlkj) {
    void 0x0 === minlkj && (minlkj = ''), onmjkl['fs']['readFile']({ 'filePath': dbgef, 'encoding': tywsxv = void 0x0 === tywsxv ? 'ascill' : tywsxv, 'success': function (nqlpo) {
        -0x1 == dbgef['indexOf']('http://') && -0x1 == dbgef['indexOf']('https://') || onmjkl['onFileUpdate'](dbgef, minlkj), null != ihlkjm && ihlkjm['runWith']([0x0, nqlpo]);
      }, 'fail': function (fdig) {
        fdig && null != ihlkjm && ihlkjm['runWith']([0x1, fdig]);
      } });
  }, onmjkl['downImg'] = function (wtsvq, ghlk, xvwrs) {
    void 0x0 === xvwrs && (xvwrs = ''), onmjkl['wxdown']({ 'url': wtsvq, 'success': function (vstrq) {
        0xc8 === vstrq['statusCode'] && onmjkl['copyFile'](vstrq['tempFilePath'], xvwrs, ghlk);
      }, 'fail': function (vxzy$w) {
        null != ghlk && ghlk['runWith']([0x1, vxzy$w]);
      } });
  }, onmjkl['copyFile'] = function (_2$1z0, qlopm, $vyw) {
    var rps = _2$1z0['split']('/'),
        sqtwr = rps[rps['length'] - 0x1];qlopm['split']('?')[0x0];var qt = onmjkl['getFileInfo'](qlopm);rps = onmjkl['getFileNativePath'](sqtwr), onmjkl['fs']['copyFile']({ 'srcPath': _2$1z0, 'destPath': rps, 'success': function (yvxtwz) {
        qt ? qt['readyUrl'] != qlopm && onmjkl['remove'](sqtwr, qlopm, $vyw) : (onmjkl['onSaveFile'](qlopm, sqtwr), null != $vyw && $vyw['runWith']([0x0]));
      }, 'fail': function (xyztw) {
        null != $vyw && $vyw['runWith']([0x1, xyztw]);
      } });
  }, onmjkl['getFileNativePath'] = function (cegdb) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cegdb;
  }, onmjkl['remove'] = function (hijgfk, yvswt, pknolm) {
    void 0x0 === yvswt && (yvswt = '');var qmpro = onmjkl['getFileInfo'](yvswt),
        z$01_y = onmjkl['getFileNativePath'](qmpro['md5']);hifjgk['loader']['clearRes'](qmpro['readyUrl']), onmjkl['fs']['unlink']({ 'filePath': z$01_y, 'success': function (idfghe) {
        '' != yvswt && onmjkl['onSaveFile'](yvswt, hijgfk), null != pknolm && pknolm['runWith']([0x0]);
      }, 'fail': function (klmijn) {} });
  }, onmjkl['onSaveFile'] = function (rswqt, xvw) {
    var z$1y = rswqt['split']('?')[0x0];onmjkl['filesListObj'][z$1y] = { 'md5': xvw, 'readyUrl': rswqt }, onmjkl['fs']['writeFile']({ 'filePath': onmjkl['fileNativeDir'] + '/' + onmjkl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](onmjkl['filesListObj']), 'success': function (edb) {
        console['log']('写入测试测试成功：', edb);
      }, 'fail': function (xzw) {
        console['log']('写入测试测试失败：', xzw);
      } });
  }, onmjkl['existDir'] = function (wvxzyt, daef) {
    onmjkl['fs']['mkdir']({ 'dirPath': wvxzyt, 'success': function ($_xwyz) {
        null != daef && daef['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (mnlop) {
        -0x1 != mnlop['errMsg']['indexOf']('file already exists') ? onmjkl['readSync'](onmjkl['fileListName'], 'utf8', daef) : null != daef && daef['runWith']([0x1, mnlop]);
      } });
  }, onmjkl['readSync'] = function (xwy_, oqmlpn, kljhgi, orqpsn) {
    void 0x0 === oqmlpn && (oqmlpn = 'ascill'), void 0x0 === orqpsn && (orqpsn = ''), xwy_ = onmjkl['getFileNativePath'](xwy_);var xwz$y_;try {
      xwz$y_ = onmjkl['fs']['readFileSync'](xwy_), null != kljhgi && kljhgi['runWith']([0x0, { 'data': xwz$y_ }]);
    } catch (lkponm) {
      null != kljhgi && kljhgi['runWith']([0x1]);
    }
  }, onmjkl['readCache'] = function () {}, onmjkl['writeCache'] = function (hgdei) {
    var nkop = readyUrl['split']('?')[0x0];onmjkl['filesListObj'][nkop] = { 'md5': md5Name, 'readyUrl': readyUrl }, onmjkl['fs']['writeFile']({ 'filePath': onmjkl['fileNativeDir'] + '/' + onmjkl['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](onmjkl['filesListObj']), 'success': function (jmno) {}, 'fail': function (dhcf) {} });
  }, onmjkl['setNativeFileDir'] = function (ebfad) {
    onmjkl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ebfad;
  }, onmjkl['filesListObj'] = {}, onmjkl['fileNativeDir'] = null, onmjkl['fileListName'] = 'layaairfiles.txt', onmjkl['ziyuFileData'] = {}, kmnolj(onmjkl, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), onmjkl);function onmjkl() {
    onmjkl['__super']['call'](this);
  }var $x0_yz = function () {
    function mnljki() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, mnljki['__super']['call'](this), this['_sound'] = mnljki['_createSound']();
    }fhdei(mnljki, 'laya.wx.mini.MiniSound', ropnq);var qvsp = mnljki['prototype'];return qvsp['load'] = function (srvqtw) {
      var eihfg = this,
          ropqn;function lqonp() {
        if (null != mnljki['_null']) eihfg['_sound']['onCanplay'](mnljki['_null']), eihfg['_sound']['onError'](mnljki['_null']);else try {
          eihfg['_sound']['onCanplay'](null), eihfg['_sound']['onError'](null), mnljki['_null'] = null;
        } catch (fejgh) {
          console['warn']('[wxmini] _clearSound:' + fejgh), eihfg['_sound']['onCanplay'](tvrqsp), eihfg['_sound']['onError'](tvrqsp), mnljki['_null'] = tvrqsp;
        }
      }function tvrqsp() {}srvqtw = lkon['formatURL'](srvqtw), this['url'] = srvqtw, mnljki['_audioCache'][srvqtw] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        lqonp(), ropqn['loaded'] = !0x0, ropqn['event']('complete'), mnljki['_audioCache'][ropqn['url']] = ropqn;
      }), this['_sound']['onError'](function (pvrqt) {
        console['error']('errCode=' + pvrqt['errCode'] + '  errMsg=' + pvrqt['errMsg']), lqonp(), ropqn['event']('error');
      }), this['_sound']['src'] = srvqtw, ropqn = this);
    }, qvsp['play'] = function (jigfhe, qtopsr) {
      void 0x0 === jigfhe && (jigfhe = 0x0), void 0x0 === qtopsr && (qtopsr = 0x0), (oqpr = this['url'] == lnkjmo['_tMusic'] ? (mnljki['_musicAudio'] || (mnljki['_musicAudio'] = mnljki['_createSound']()), mnljki['_musicAudio']) : mnljki['_createSound']())['src'] = this['url'];var oqpr = new nplq(oqpr);return oqpr['url'] = this['url'], oqpr['loops'] = qtopsr, oqpr['startTime'] = jigfhe, oqpr['play'](), lnkjmo['addChannel'](oqpr), oqpr;
    }, qvsp['dispose'] = function () {
      var y$01z = mnljki['_audioCache'][this['url']];y$01z && (y$01z['src'] = '', delete mnljki['_audioCache'][this['url']]);
    }, hedfgc(0x0, qvsp, 'duration', function () {
      return this['_sound']['duration'];
    }), mnljki['_createSound'] = function () {
      return mnljki['_id']++, wztxyv['window']['wx']['createInnerAudioContext']();
    }, mnljki['_musicAudio'] = null, mnljki['_id'] = 0x0, mnljki['_audioCache'] = {}, mnljki['_null'] = void 0x0, mnljki;
  }(),
      nplq = function () {
    function nsprqo(rosn) {
      this['_audio'] = null, this['_onEnd'] = null, nsprqo['__super']['call'](this), this['_audio'] = rosn, this['_onEnd'] = qponsr['bind'](this['__onEnd'], this), rosn['onEnded'](this['_onEnd']);
    }fhdei(nsprqo, 'laya.wx.mini.MiniSoundChannel', nmkjl);var qnoml = nsprqo['prototype'];return qnoml['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (hifjgk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qnoml['__onNull'] = function () {}, qnoml['play'] = function () {
      this['isStopped'] = !0x1, lnkjmo['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, qnoml['stop'] = function () {
      if (this['isStopped'] = !0x0, lnkjmo['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != nsprqo['_null']) this['_audio']['onEnded'](nsprqo['_null']);else try {
          this['_audio']['onEnded'](null), nsprqo['_null'] = null;
        } catch (ikfhg) {
          console['warn']('[wxmini] stop:' + ikfhg), this['_audio']['onEnded'](qponsr['bind'](this['__onNull'], this)), nsprqo['_null'] = qponsr['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, qnoml['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, qnoml['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, lnkjmo['addChannel'](this), this['_audio']['play']());
    }, hedfgc(0x0, qnoml, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), hedfgc(0x0, qnoml, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), hedfgc(0x0, qnoml, 'volume', function () {
      return 0x1;
    }, function (hljkmi) {}), nsprqo['_null'] = void 0x0, nsprqo;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (lkhjmi, $_z021) {
  'use strict';

  for (var ehc in Object['defineProperty']($_z021, '__esModule', { 'value': !0x0 }), Laya) {
    var gihejf = Laya[ehc];gihejf && gihejf['__isclass'] && ($_z021[ehc] = gihejf);
  }
});