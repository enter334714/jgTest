var _ = wx.y$;
!function (onmljk, rtvsq) {
  rtvsq['un'], rtvsq['uns'];var jlihmk = rtvsq['static'],
      lmonp = rtvsq['class'],
      fdec = rtvsq['getset'];rtvsq['__newvec'];var jikglh = laya['utils']['Browser'],
      $x0z = (laya['events']['Event'], laya['events']['EventDispatcher']),
      fgech = laya['resource']['HTMLImage'],
      lmkji = laya['utils']['Handler'],
      jighlk = laya['display']['Input'],
      $_z01y = laya['net']['Loader'];laya['maths']['Matrix'];var _x$y0z = laya['renders']['Render'],
      lopqn = laya['utils']['RunDriver'];laya['media']['Sound'];var oqprnm = laya['media']['SoundChannel'],
      xvwzuy = laya['media']['SoundManager'],
      zxw_y$ = (laya['display']['Stage'], laya['net']['URL']),
      topr = laya['utils']['Utils'],
      mplok = (lmonp(z_0$xy, 'laya.wx.mini.MiniAdpter'), z_0$xy['getJson'] = function (nlqmpo) {
    return JSON['parse'](nlqmpo);
  }, z_0$xy['init'] = function (lmqn, y_0z$) {
    void 0x0 === lmqn && (lmqn = !0x1), void 0x0 === y_0z$ && (y_0z$ = !0x1), z_0$xy['_inited'] || (z_0$xy['window'] = onmljk)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (z_0$xy['_inited'] = !0x0, z_0$xy['isZiYu'] = y_0z$, z_0$xy['isPosMsgYu'] = lmqn, z_0$xy['EnvConfig'] = {}, z_0$xy['isZiYu'] || (nopqs['setNativeFileDir']('/layaairGame'), nopqs['existDir'](nopqs['fileNativeDir'], lmkji['create'](z_0$xy, z_0$xy['onMkdirCallBack']))), z_0$xy['window']['focus'] = function () {}, rtvsq['getUrlPath'] = function () {}, z_0$xy['window']['logtime'] = function (ihlg) {}, z_0$xy['window']['alertTimeLog'] = function (rnpmo) {}, z_0$xy['window']['resetShareInfo'] = function () {}, z_0$xy['window']['CanvasRenderingContext2D'] = function () {}, z_0$xy['window']['CanvasRenderingContext2D']['prototype'] = z_0$xy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], z_0$xy['window']['document']['body']['appendChild'] = function () {}, z_0$xy['EnvConfig']['pixelRatioInt'] = 0x0, lopqn['getPixelRatio'] = z_0$xy['pixelRatio'], z_0$xy['_preCreateElement'] = jikglh['createElement'], jikglh['createElement'] = z_0$xy['createElement'], lopqn['createShaderCondition'] = z_0$xy['createShaderCondition'], topr['parseXMLFromString'] = z_0$xy['parseXMLFromString'], jighlk['_createInputElement'] = qsoptr['_createInputElement'], z_0$xy['EnvConfig']['load'] = $_z01y['prototype']['load'], $_z01y['prototype']['load'] = trswvu['prototype']['load'], z_0$xy['isZiYu'] && lmqn && wx['onMessage'](function (zwyx) {
      zwyx['isLoad'] && (nopqs['ziyuFileData'][zwyx['url']] = zwyx['data']);
    }));
  }, z_0$xy['onMkdirCallBack'] = function (supt, ikhfgj) {
    supt || (nopqs['filesListObj'] = JSON['parse'](ikhfgj['data']));
  }, z_0$xy['pixelRatio'] = function () {
    if (!z_0$xy['EnvConfig']['pixelRatioInt']) try {
      var pqost = wx['getSystemInfoSync']();return z_0$xy['EnvConfig']['pixelRatioInt'] = pqost['pixelRatio'], pqost['pixelRatio'];
    } catch (qosrnp) {}return z_0$xy['EnvConfig']['pixelRatioInt'];
  }, z_0$xy['createElement'] = function (ecgfdh) {
    var cehgf;if ('canvas' == ecgfdh) return 0x1 == z_0$xy['idx'] ? z_0$xy['isZiYu'] ? (cehgf = sharedCanvas)['style'] = {} : cehgf = onmljk['canvas'] : cehgf = onmljk['wx']['createCanvas'](), z_0$xy['idx']++, cehgf;if ('textarea' == ecgfdh || 'input' == ecgfdh) return z_0$xy['onCreateInput'](ecgfdh);if ('div' != ecgfdh) return z_0$xy['_preCreateElement'](ecgfdh);return ecgfdh = z_0$xy['_preCreateElement'](ecgfdh), (ecgfdh['contains'] = function (cdbfe) {
      return null;
    }, ecgfdh['removeChild'] = function (kjil) {}, ecgfdh);
  }, z_0$xy['onCreateInput'] = function (gfech) {
    return gfech = z_0$xy['_preCreateElement'](gfech), (gfech['focus'] = qsoptr['wxinputFocus'], gfech['blur'] = qsoptr['wxinputblur'], gfech['style'] = {}, gfech['value'] = 0x0, gfech['parentElement'] = {}, gfech['placeholder'] = {}, gfech['type'] = {}, gfech['setColor'] = function (qnomrp) {}, gfech['setType'] = function (y1$_z) {}, gfech['setFontFace'] = function (hkgji) {}, gfech['addEventListener'] = function (fgijk) {}, gfech['contains'] = function (gfebcd) {
      return null;
    }, gfech['removeChild'] = function (vxz$y) {}, gfech);
  }, z_0$xy['createShaderCondition'] = function (qrsput) {
    var pnqrom = this;return function () {
      return pnqrom[qrsput['replace']('this.', '')];
    };
  }, z_0$xy['EnvConfig'] = null, z_0$xy['window'] = null, z_0$xy['_preCreateElement'] = null, z_0$xy['_inited'] = !0x1, z_0$xy['wxRequest'] = null, z_0$xy['systemInfo'] = null, z_0$xy['version'] = '0.0.1', z_0$xy['isZiYu'] = !0x1, z_0$xy['isPosMsgYu'] = !0x1, z_0$xy['parseXMLFromString'] = function (kmj) {
    var jnikl;kmj = kmj['replace'](/>\s+</g, '><');try {
      jnikl = new onmljk['Parser']['DOMParser']()['parseFromString'](kmj, 'text/xml');
    } catch (trs) {
      throw '需要引入xml解析库文件';
    }return jnikl;
  }, z_0$xy['idx'] = 0x1, z_0$xy);function z_0$xy() {}lmonp(roqmp, 'laya.wx.mini.MiniImage'), roqmp['prototype']['_loadImage'] = function (_1$yz) {
    var gijeh = !0x1;-0x1 == _1$yz['indexOf']('layaNativeDir/') && (gijeh = !0x0, _1$yz = zxw_y$['formatURL'](_1$yz)), nopqs['getFileInfo'](_1$yz) ? roqmp['onCreateImage'](_1$yz, this, !gijeh) : -0x1 != _1$yz['indexOf']('http://') || -0x1 != _1$yz['indexOf']('https://') ? nopqs['downImg'](_1$yz, new lmkji(roqmp, roqmp['onDownImgCallBack'], [_1$yz, this]), _1$yz) : roqmp['onCreateImage'](_1$yz, this, !0x0);
  }, roqmp['onDownImgCallBack'] = function (febcgd, jnlo, iegdh) {
    iegdh ? jnlo['onError'](null) : roqmp['onCreateImage'](febcgd, jnlo);
  }, roqmp['onCreateImage'] = function (vtuqr, xswtuv, uqtsr) {
    var jghf, fbgdc;function rspnq() {
      fbgdc['onload'] = null, fbgdc['onerror'] = null, delete xswtuv['imgCache'][vtuqr];
    }jghf = (uqtsr = void 0x0 === uqtsr ? !0x1 : uqtsr) ? vtuqr : (vqru = nopqs['getFileInfo'](vtuqr)['md5'], nopqs['getFileNativePath'](vqru)), null == xswtuv['imgCache'] && (xswtuv['imgCache'] = {}), uqtsr = function () {
      rspnq(), xswtuv['onLoaded'](fbgdc);
    };var vqru = function () {
      rspnq(), xswtuv['event']('error', 'Load image failed');
    };'nativeimage' == xswtuv['_type'] ? ((fbgdc = new jikglh['window']['Image']())['crossOrigin'] = '', fbgdc['onload'] = uqtsr, fbgdc['onerror'] = vqru, fbgdc['src'] = jghf, xswtuv['imgCache'][vtuqr] = fbgdc) : new fgech['create'](jghf, { 'onload': uqtsr, 'onerror': vqru, 'onCreate': function (njlki) {
        fbgdc = njlki, xswtuv['imgCache'][vtuqr] = njlki;
      } });
  };function roqmp() {}var qsoptr = (lmonp(wuyvxt, 'laya.wx.mini.MiniInput'), wuyvxt['_createInputElement'] = function () {
    jighlk['_initInput'](jighlk['area'] = jikglh['createElement']('textarea')), jighlk['_initInput'](jighlk['input'] = jikglh['createElement']('input')), jighlk['inputContainer'] = jikglh['createElement']('div'), jighlk['inputContainer']['style']['position'] = 'absolute', jighlk['inputContainer']['style']['zIndex'] = 0x186a0, jikglh['container']['appendChild'](jighlk['inputContainer']), jighlk['inputContainer']['setPos'] = function (qtpsru, inkjm) {
      jighlk['inputContainer']['style']['left'] = qtpsru + 'px', jighlk['inputContainer']['style']['top'] = inkjm + 'px';
    }, rtvsq['stage']['on']('resize', null, wuyvxt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fedc) {
      onmljk['dispatchEvent'] && onmljk['dispatchEvent']('resize');
    }), xvwzuy['_soundClass'] = qusrpt, xvwzuy['_musicClass'] = qusrpt;
  }, wuyvxt['_onStageResize'] = function () {
    rtvsq['stage']['_canvasTransform']['identity']()['scale'](jikglh['width'] / _x$y0z['canvas']['width'] / lopqn['getPixelRatio'](), jikglh['height'] / _x$y0z['canvas']['height'] / lopqn['getPixelRatio']());
  }, wuyvxt['wxinputFocus'] = function (vurst) {
    var nmklop = jighlk['inputElement']['target'];nmklop && !nmklop['editable'] || (mplok['window']['wx']['offKeyboardConfirm'](), mplok['window']['wx']['offKeyboardInput'](), mplok['window']['wx']['showKeyboard']({ 'defaultValue': nmklop['text'], 'maxLength': nmklop['maxChars'], 'multiple': nmklop['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (gefdi) {}, 'fail': function (noqsrp) {} }), mplok['window']['wx']['onKeyboardConfirm'](function (fecdb) {
      fecdb = fecdb ? fecdb['value'] : '', (nmklop['text'] = fecdb, nmklop['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), mplok['window']['wx']['onKeyboardInput'](function (z20$_) {
      z20$_ = z20$_ ? z20$_['value'] : '', nmklop['multiline'] || -0x1 == z20$_['indexOf']('\x0a') ? (nmklop['text'] = z20$_, nmklop['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, wuyvxt['inputEnter'] = function () {
    jighlk['inputElement']['target']['focus'] = !0x1;
  }, wuyvxt['wxinputblur'] = function () {
    wuyvxt['hideKeyboard']();
  }, wuyvxt['hideKeyboard'] = function () {
    mplok['window']['wx']['offKeyboardConfirm'](), mplok['window']['wx']['offKeyboardInput'](), mplok['window']['wx']['hideKeyboard']({ 'success': function (xytw) {
        console['log']('隐藏键盘');
      }, 'fail': function (w$vxyz) {
        console['log']('隐藏键盘出错:' + (w$vxyz ? w$vxyz['errMsg'] : ''));
      } });
  }, wuyvxt);function wuyvxt() {}var trswvu = function () {
    function z$yvx() {}lmonp(z$yvx, 'laya.wx.mini.MiniLoader');var kmon = z$yvx['prototype'];return kmon['load'] = function (fkhjg, kimhlj, rnmqop, nkm, _$310) {
      void 0x0 === rnmqop && (rnmqop = !0x0), void 0x0 === _$310 && (_$310 = !0x1);var pqnro = this;0x0 === (pqnro['_url'] = fkhjg)['indexOf']('data:image') ? pqnro['_type'] = kimhlj = 'image' : pqnro['_type'] = kimhlj = kimhlj || pqnro['getTypeFromUrl'](fkhjg), pqnro['_cache'] = rnmqop, pqnro['_data'] = null;var soqtr = 'ascii';-0x1 != fkhjg['indexOf']('.fnt') ? soqtr = 'utf8' : 'arraybuffer' == kimhlj && (soqtr = '');var onmql = topr['getFileExtension'](fkhjg);if (-0x1 != z$yvx['_fileTypeArr']['indexOf'](onmql)) mplok['EnvConfig']['load']['call'](this, fkhjg, kimhlj, rnmqop, nkm, _$310);else {
        if (nopqs['getFileInfo'](fkhjg)) mplok['EnvConfig']['load']['call'](this, fkhjg, kimhlj, rnmqop, nkm, _$310);else {
          if (-0x1 != fkhjg['indexOf']('layaNativeDir/')) {
            if (mplok['isZiYu']) {
              var sqrn = nopqs['ziyuFileData'][fkhjg];return void pqnro['onLoaded'](sqrn);
            }return cosnole['log']('read read'), void nopqs['read'](fkhjg, soqtr, new lmkji(z$yvx, z$yvx['onReadNativeCallBack'], [soqtr, fkhjg, kimhlj, rnmqop, nkm, _$310, pqnro]));
          }sqrn = '' == zxw_y$['rootPath'] ? fkhjg : fkhjg['split'](zxw_y$['rootPath'])[0x0], -0x1 != fkhjg['indexOf']('http://') || -0x1 != fkhjg['indexOf']('https://') ? mplok['EnvConfig']['load']['call'](pqnro, fkhjg, kimhlj, rnmqop, nkm, _$310) : nopqs['readFile'](sqrn, soqtr, new lmkji(z$yvx, z$yvx['onReadNativeCallBack'], [soqtr, fkhjg, kimhlj, rnmqop, nkm, _$310, pqnro]), fkhjg);
        }
      }
    }, kmon['resMgrLoad'] = function (vwuxs, hjgf, rnmo, fhikg, mknpo, _4321, qmnpr) {
      void 0x0 === rnmo && (rnmo = 0x0), void 0x0 === fhikg && (fhikg = !0x1), void 0x0 === mknpo && (mknpo = !0x1), void 0x0 === _4321 && (_4321 = 0x0), void 0x0 === qmnpr && (qmnpr = 0x3), -0x1 != vwuxs['indexOf']('mpack') && console['log']('=============resMgrLoad url:', vwuxs), mplok['EnvConfig']['resMgrLoad'](vwuxs, (fbcedg, vqut, hikfj) => {
        z$yvx['prototype']['resMgrLoadCallBack'](fbcedg, vqut, hikfj, hjgf);
      }, rnmo, fhikg, mknpo, _4321, qmnpr);
    }, kmon['resMgrLoadCallBack'] = function (_z1y0, feigh, x$0z_, _01y$z) {
      console['log']('buff:::', _z1y0, x$0z_, nopqs['fileNativeDir'] + '///' + nopqs['fileListName']), _01y$z(_z1y0, feigh, x$0z_);
    }, kmon['clearRes'] = function (hdfgie, lhimj) {
      this['clearRes'](hdfgie, lhimj = void 0x0 === lhimj ? !0x1 : lhimj), lhimj = nopqs['getFileInfo'](hdfgie), !lhimj || -0x1 == hdfgie['indexOf']('http://') && -0x1 == hdfgie['indexOf']('https://') || (lhimj = lhimj['md5'], lhimj = nopqs['getFileNativePath'](lhimj), nopqs['remove'](lhimj));
    }, z$yvx['onReadNativeCallBack'] = function (qpolmn, nopqrm, lojnm, gidehf, fabd, wvstur, zw$vyx, $021, twvxus) {
      void 0x0 === gidehf && (gidehf = !0x0), void 0x0 === wvstur && (wvstur = !0x1), ($021 = void 0x0 === $021 ? 0x0 : $021) ? 0x1 == $021 && mplok['EnvConfig']['load']['call'](zw$vyx, nopqrm, lojnm, gidehf, fabd, wvstur) : (twvxus = 'json' == lojnm || 'atlas' == lojnm ? mplok['getJson'](twvxus['data']) : 'xml' == lojnm ? topr['parseXMLFromString'](twvxus['data']) : twvxus['data'], zw$vyx['onLoaded'](twvxus), !mplok['isZiYu'] && mplok['isPosMsgYu'] && 'arraybuffer' != lojnm && wx['postMessage']({ 'url': nopqrm, 'data': twvxus, 'isLoad': !0x0 }));
    }, jlihmk(z$yvx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), z$yvx;
  }(),
      nopqs = (lmonp(wz$_, 'laya.wx.mini.MiniFileMgr', $x0z), wz$_['isLoadFile'] = function (yvuwt) {
    return -0x1 != wz$_['_fileTypeArr']['indexOf'](yvuwt);
  }, wz$_['getFileInfo'] = function (ijhlkg) {
    return ijhlkg = ijhlkg['split']('?')[0x0], ijhlkg = wz$_['filesListObj'][ijhlkg], null == ijhlkg ? null : ijhlkg;
  }, wz$_['onFileUpdate'] = function (efdbcg, bfcge) {
    var lpqnom = efdbcg['split']('/');efdbcg = lpqnom[lpqnom['length'] - 0x1], lpqnom = wz$_['getFileInfo'](bfcge), null == lpqnom ? wz$_['onSaveFile'](bfcge, efdbcg) : lpqnom['readyUrl'] != bfcge && wz$_['remove'](efdbcg, bfcge);
  }, wz$_['exits'] = function (psrto, okmpn) {
    psrto = wz$_['getFileNativePath'](psrto), wz$_['fs']['getFileInfo']({ 'filePath': psrto, 'success': function (stq) {
        null != okmpn && okmpn['runWith']([0x0, stq]);
      }, 'fail': function (w_zy$) {
        null != okmpn && okmpn['runWith']([0x1, w_zy$]);
      } });
  }, wz$_['read'] = function (edfbcg, ljmon, _41320, cfaeb) {
    void 0x0 === ljmon && (ljmon = 'ascill'), edfbcg = '' != (cfaeb = void 0x0 === cfaeb ? '' : cfaeb) ? wz$_['getFileNativePath'](edfbcg) : edfbcg, wz$_['fs']['readFile']({ 'filePath': edfbcg, 'encoding': ljmon, 'success': function (uwv) {
        null != _41320 && _41320['runWith']([0x0, uwv]);
      }, 'fail': function (ruvtsw) {
        ruvtsw && '' != cfaeb ? wz$_['down'](cfaeb, ljmon, _41320, cfaeb) : null != _41320 && _41320['runWith']([0x1]);
      } });
  }, wz$_['readNativeFile'] = function (fdehgc, uwvyx) {
    wz$_['fs']['readFile']({ 'filePath': fdehgc, 'encoding': '', 'success': function (dhfg) {
        null != uwvyx && uwvyx['runWith']([0x0]);
      }, 'fail': function (vqtrs) {
        null != uwvyx && uwvyx['runWith']([0x1]);
      } });
  }, wz$_['down'] = function (fghc, upst, oqsnpr, twuvy) {
    void 0x0 === upst && (upst = 'ascill'), void 0x0 === twuvy && (twuvy = '');var usvtw = wz$_['getFileNativePath'](twuvy);wz$_['wxdown']({ 'url': fghc, 'filePath': usvtw, 'success': function (jkinlm) {
        0xc8 === jkinlm['statusCode'] && wz$_['readFile'](jkinlm['filePath'], upst, oqsnpr, twuvy);
      }, 'fail': function (oqtr) {
        null != oqsnpr && oqsnpr['runWith']([0x1, oqtr]);
      } })['onProgressUpdate'](function (hglki) {
      null != oqsnpr && oqsnpr['runWith']([0x2, hglki['progress']]);
    });
  }, wz$_['readFile'] = function (dfcghe, vyzwu, pnomql, onmlqp) {
    void 0x0 === onmlqp && (onmlqp = ''), wz$_['fs']['readFile']({ 'filePath': dfcghe, 'encoding': vyzwu = void 0x0 === vyzwu ? 'ascill' : vyzwu, 'success': function (z_10$2) {
        -0x1 == dfcghe['indexOf']('http://') && -0x1 == dfcghe['indexOf']('https://') || wz$_['onFileUpdate'](dfcghe, onmlqp), null != pnomql && pnomql['runWith']([0x0, z_10$2]);
      }, 'fail': function (nmilk) {
        nmilk && null != pnomql && pnomql['runWith']([0x1, nmilk]);
      } });
  }, wz$_['downImg'] = function (_z0y1$, otqsr, ijfkh) {
    void 0x0 === ijfkh && (ijfkh = ''), wz$_['wxdown']({ 'url': _z0y1$, 'success': function (pmlqn) {
        0xc8 === pmlqn['statusCode'] && wz$_['copyFile'](pmlqn['tempFilePath'], ijfkh, otqsr);
      }, 'fail': function (z$0) {
        null != otqsr && otqsr['runWith']([0x1, z$0]);
      } });
  }, wz$_['copyFile'] = function (qlom, y0_z1$, degfhi) {
    var suqptr = qlom['split']('/'),
        jmnikl = suqptr[suqptr['length'] - 0x1];y0_z1$['split']('?')[0x0];var hmjlki = wz$_['getFileInfo'](y0_z1$);suqptr = wz$_['getFileNativePath'](jmnikl), wz$_['fs']['copyFile']({ 'srcPath': qlom, 'destPath': suqptr, 'success': function (mqlnpo) {
        hmjlki ? hmjlki['readyUrl'] != y0_z1$ && wz$_['remove'](jmnikl, y0_z1$, degfhi) : (wz$_['onSaveFile'](y0_z1$, jmnikl), null != degfhi && degfhi['runWith']([0x0]));
      }, 'fail': function (wtvu) {
        null != degfhi && degfhi['runWith']([0x1, wtvu]);
      } });
  }, wz$_['getFileNativePath'] = function ($z2_) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $z2_;
  }, wz$_['remove'] = function (qtrvus, egfdh, ptsrq) {
    void 0x0 === egfdh && (egfdh = '');var dfcge = wz$_['getFileInfo'](egfdh),
        _32$01 = wz$_['getFileNativePath'](dfcge['md5']);rtvsq['loader']['clearRes'](dfcge['readyUrl']), wz$_['fs']['unlink']({ 'filePath': _32$01, 'success': function (twvurs) {
        '' != egfdh && wz$_['onSaveFile'](egfdh, qtrvus), null != ptsrq && ptsrq['runWith']([0x0]);
      }, 'fail': function (w$zvy) {} });
  }, wz$_['onSaveFile'] = function (noqlpm, aebf) {
    var tpqso = noqlpm['split']('?')[0x0];wz$_['filesListObj'][tpqso] = { 'md5': aebf, 'readyUrl': noqlpm }, wz$_['fs']['writeFile']({ 'filePath': wz$_['fileNativeDir'] + '/' + wz$_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wz$_['filesListObj']), 'success': function (rnopq) {
        console['log']('写入测试测试成功：', rnopq);
      }, 'fail': function (ustrpq) {
        console['log']('写入测试测试失败：', ustrpq);
      } });
  }, wz$_['existDir'] = function (bgfcde, lmpnko) {
    wz$_['fs']['mkdir']({ 'dirPath': bgfcde, 'success': function (ronsqp) {
        null != lmpnko && lmpnko['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (gcfbde) {
        -0x1 != gcfbde['errMsg']['indexOf']('file already exists') ? wz$_['readSync'](wz$_['fileListName'], 'utf8', lmpnko) : null != lmpnko && lmpnko['runWith']([0x1, gcfbde]);
      } });
  }, wz$_['readSync'] = function (_14032, adcfeb, uyvxwt, qrmnp) {
    void 0x0 === adcfeb && (adcfeb = 'ascill'), void 0x0 === qrmnp && (qrmnp = ''), _14032 = wz$_['getFileNativePath'](_14032);var omlkjn;try {
      omlkjn = wz$_['fs']['readFileSync'](_14032), null != uyvxwt && uyvxwt['runWith']([0x0, { 'data': omlkjn }]);
    } catch (_y$0) {
      null != uyvxwt && uyvxwt['runWith']([0x1]);
    }
  }, wz$_['readCache'] = function () {}, wz$_['writeCache'] = function (jgklh) {
    var plqn = readyUrl['split']('?')[0x0];wz$_['filesListObj'][plqn] = { 'md5': md5Name, 'readyUrl': readyUrl }, wz$_['fs']['writeFile']({ 'filePath': wz$_['fileNativeDir'] + '/' + wz$_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wz$_['filesListObj']), 'success': function (edfbg) {}, 'fail': function (puq) {} });
  }, wz$_['setNativeFileDir'] = function (cfeabd) {
    wz$_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cfeabd;
  }, wz$_['filesListObj'] = {}, wz$_['fileNativeDir'] = null, wz$_['fileListName'] = 'layaairfiles.txt', wz$_['ziyuFileData'] = {}, jlihmk(wz$_, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), wz$_);function wz$_() {
    wz$_['__super']['call'](this);
  }var qusrpt = function () {
    function qpormn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, qpormn['__super']['call'](this), this['_sound'] = qpormn['_createSound']();
    }lmonp(qpormn, 'laya.wx.mini.MiniSound', $x0z);var figdhe = qpormn['prototype'];return figdhe['load'] = function (wvyuzx) {
      var jgefi = this,
          fabcd;function klonp() {
        if (null != qpormn['_null']) jgefi['_sound']['onCanplay'](qpormn['_null']), jgefi['_sound']['onError'](qpormn['_null']);else try {
          jgefi['_sound']['onCanplay'](null), jgefi['_sound']['onError'](null), qpormn['_null'] = null;
        } catch (fjgk) {
          console['warn']('[wxmini] _clearSound:' + fjgk), jgefi['_sound']['onCanplay'](klonjm), jgefi['_sound']['onError'](klonjm), qpormn['_null'] = klonjm;
        }
      }function klonjm() {}wvyuzx = zxw_y$['formatURL'](wvyuzx), this['url'] = wvyuzx, qpormn['_audioCache'][wvyuzx] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        klonp(), fabcd['loaded'] = !0x0, fabcd['event']('complete'), qpormn['_audioCache'][fabcd['url']] = fabcd;
      }), this['_sound']['onError'](function (fdcgbe) {
        console['error']('errCode=' + fdcgbe['errCode'] + '  errMsg=' + fdcgbe['errMsg']), klonp(), fabcd['event']('error');
      }), this['_sound']['src'] = wvyuzx, fabcd = this);
    }, figdhe['play'] = function (mlojk, rqos) {
      void 0x0 === mlojk && (mlojk = 0x0), void 0x0 === rqos && (rqos = 0x0), (zy0_ = this['url'] == xvwzuy['_tMusic'] ? (qpormn['_musicAudio'] || (qpormn['_musicAudio'] = qpormn['_createSound']()), qpormn['_musicAudio']) : qpormn['_createSound']())['src'] = this['url'];var zy0_ = new uqspr(zy0_);return zy0_['url'] = this['url'], zy0_['loops'] = rqos, zy0_['startTime'] = mlojk, zy0_['play'](), xvwzuy['addChannel'](zy0_), zy0_;
    }, figdhe['dispose'] = function () {
      var wyvux = qpormn['_audioCache'][this['url']];wyvux && (wyvux['src'] = '', delete qpormn['_audioCache'][this['url']]);
    }, fdec(0x0, figdhe, 'duration', function () {
      return this['_sound']['duration'];
    }), qpormn['_createSound'] = function () {
      return qpormn['_id']++, mplok['window']['wx']['createInnerAudioContext']();
    }, qpormn['_musicAudio'] = null, qpormn['_id'] = 0x0, qpormn['_audioCache'] = {}, qpormn['_null'] = void 0x0, qpormn;
  }(),
      uqspr = function () {
    function pormnq(otpqs) {
      this['_audio'] = null, this['_onEnd'] = null, pormnq['__super']['call'](this), this['_audio'] = otpqs, this['_onEnd'] = topr['bind'](this['__onEnd'], this), otpqs['onEnded'](this['_onEnd']);
    }lmonp(pormnq, 'laya.wx.mini.MiniSoundChannel', oqprnm);var stqpor = pormnq['prototype'];return stqpor['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (rtvsq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, stqpor['__onNull'] = function () {}, stqpor['play'] = function () {
      this['isStopped'] = !0x1, xvwzuy['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, stqpor['stop'] = function () {
      if (this['isStopped'] = !0x0, xvwzuy['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != pormnq['_null']) this['_audio']['onEnded'](pormnq['_null']);else try {
          this['_audio']['onEnded'](null), pormnq['_null'] = null;
        } catch (_y01z) {
          console['warn']('[wxmini] stop:' + _y01z), this['_audio']['onEnded'](topr['bind'](this['__onNull'], this)), pormnq['_null'] = topr['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, stqpor['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, stqpor['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, xvwzuy['addChannel'](this), this['_audio']['play']());
    }, fdec(0x0, stqpor, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), fdec(0x0, stqpor, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), fdec(0x0, stqpor, 'volume', function () {
      return 0x1;
    }, function (rptqo) {}), pormnq['_null'] = void 0x0, pormnq;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ghfijk, yxwzv$) {
  'use strict';

  for (var _21$30 in Object['defineProperty'](yxwzv$, '__esModule', { 'value': !0x0 }), Laya) {
    var fgedhi = Laya[_21$30];fgedhi && fgedhi['__isclass'] && (yxwzv$[_21$30] = fgedhi);
  }
});