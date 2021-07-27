var p = wx.$h;
!function (txwvs, mlpkn) {
  mlpkn['un'], mlpkn['uns'];var gcefdb = mlpkn['static'],
      wtsqrv = mlpkn['class'],
      mponq = mlpkn['getset'];mlpkn['__newvec'];var qoprsn = laya['utils']['Browser'],
      kijlmn = (laya['events']['Event'], laya['events']['EventDispatcher']),
      jmko = laya['resource']['HTMLImage'],
      ilnmj = laya['utils']['Handler'],
      otprqs = laya['display']['Input'],
      pnroqm = laya['net']['Loader'];laya['maths']['Matrix'];var ljhim = laya['renders']['Render'],
      mnloj = laya['utils']['RunDriver'];laya['media']['Sound'];var twyvs = laya['media']['SoundChannel'],
      $z21_ = laya['media']['SoundManager'],
      $132 = (laya['display']['Stage'], laya['net']['URL']),
      mikjhl = laya['utils']['Utils'],
      psqno = (wtsqrv(wyzv, 'laya.wx.mini.MiniAdpter'), wyzv['getJson'] = function ($z0y1) {
    return JSON['parse']($z0y1);
  }, wyzv['init'] = function (mkjinl, vwtrx) {
    void 0x0 === mkjinl && (mkjinl = !0x1), void 0x0 === vwtrx && (vwtrx = !0x1), wyzv['_inited'] || (wyzv['window'] = txwvs)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (wyzv['_inited'] = !0x0, wyzv['isZiYu'] = vwtrx, wyzv['isPosMsgYu'] = mkjinl, wyzv['EnvConfig'] = {}, wyzv['isZiYu'] || (gijfkh['setNativeFileDir']('/layaairGame'), gijfkh['existDir'](gijfkh['fileNativeDir'], ilnmj['create'](wyzv, wyzv['onMkdirCallBack']))), wyzv['window']['focus'] = function () {}, mlpkn['getUrlPath'] = function () {}, wyzv['window']['logtime'] = function (nmkljo) {}, wyzv['window']['alertTimeLog'] = function (ikjgh) {}, wyzv['window']['resetShareInfo'] = function () {}, wyzv['window']['CanvasRenderingContext2D'] = function () {}, wyzv['window']['CanvasRenderingContext2D']['prototype'] = wyzv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wyzv['window']['document']['body']['appendChild'] = function () {}, wyzv['EnvConfig']['pixelRatioInt'] = 0x0, mnloj['getPixelRatio'] = wyzv['pixelRatio'], wyzv['_preCreateElement'] = qoprsn['createElement'], qoprsn['createElement'] = wyzv['createElement'], mnloj['createShaderCondition'] = wyzv['createShaderCondition'], mikjhl['parseXMLFromString'] = wyzv['parseXMLFromString'], otprqs['_createInputElement'] = tqwvs['_createInputElement'], wyzv['EnvConfig']['load'] = pnroqm['prototype']['load'], pnroqm['prototype']['load'] = kjmlin['prototype']['load'], wyzv['isZiYu'] && mkjinl && wx['onMessage'](function (onlkp) {
      onlkp['isLoad'] && (gijfkh['ziyuFileData'][onlkp['url']] = onlkp['data']);
    }));
  }, wyzv['onMkdirCallBack'] = function (cgfde, vtqsr) {
    cgfde || (gijfkh['filesListObj'] = JSON['parse'](vtqsr['data']));
  }, wyzv['pixelRatio'] = function () {
    if (!wyzv['EnvConfig']['pixelRatioInt']) try {
      var lhikj = wx['getSystemInfoSync']();return wyzv['EnvConfig']['pixelRatioInt'] = lhikj['pixelRatio'], lhikj['pixelRatio'];
    } catch (mlqp) {}return wyzv['EnvConfig']['pixelRatioInt'];
  }, wyzv['createElement'] = function (nop) {
    var z$0_21;if ('canvas' == nop) return 0x1 == wyzv['idx'] ? wyzv['isZiYu'] ? (z$0_21 = sharedCanvas)['style'] = {} : z$0_21 = txwvs['canvas'] : z$0_21 = txwvs['wx']['createCanvas'](), wyzv['idx']++, z$0_21;if ('textarea' == nop || 'input' == nop) return wyzv['onCreateInput'](nop);if ('div' != nop) return wyzv['_preCreateElement'](nop);return nop = wyzv['_preCreateElement'](nop), (nop['contains'] = function (ecbgd) {
      return null;
    }, nop['removeChild'] = function (kjmon) {}, nop);
  }, wyzv['onCreateInput'] = function (gedfih) {
    return gedfih = wyzv['_preCreateElement'](gedfih), (gedfih['focus'] = tqwvs['wxinputFocus'], gedfih['blur'] = tqwvs['wxinputblur'], gedfih['style'] = {}, gedfih['value'] = 0x0, gedfih['parentElement'] = {}, gedfih['placeholder'] = {}, gedfih['type'] = {}, gedfih['setColor'] = function (ifhk) {}, gedfih['setType'] = function (xzy0_) {}, gedfih['setFontFace'] = function (nkljom) {}, gedfih['addEventListener'] = function (rons) {}, gedfih['contains'] = function (rnpso) {
      return null;
    }, gedfih['removeChild'] = function ($wzyvx) {}, gedfih);
  }, wyzv['createShaderCondition'] = function (fced) {
    var gbfced = this;return function () {
      return gbfced[fced['replace']('this.', '')];
    };
  }, wyzv['EnvConfig'] = null, wyzv['window'] = null, wyzv['_preCreateElement'] = null, wyzv['_inited'] = !0x1, wyzv['wxRequest'] = null, wyzv['systemInfo'] = null, wyzv['version'] = '0.0.1', wyzv['isZiYu'] = !0x1, wyzv['isPosMsgYu'] = !0x1, wyzv['parseXMLFromString'] = function (npoq) {
    var posrt;npoq = npoq['replace'](/>\s+</g, '><');try {
      posrt = new txwvs['Parser']['DOMParser']()['parseFromString'](npoq, 'text/xml');
    } catch (z1y_) {
      throw '需要引入xml解析库文件';
    }return posrt;
  }, wyzv['idx'] = 0x1, wyzv);function wyzv() {}wtsqrv(z201$, 'laya.wx.mini.MiniImage'), z201$['prototype']['_loadImage'] = function (xvyst) {
    var fdcegb = !0x1;-0x1 == xvyst['indexOf']('layaNativeDir/') && (fdcegb = !0x0, xvyst = $132['formatURL'](xvyst)), gijfkh['getFileInfo'](xvyst) ? z201$['onCreateImage'](xvyst, this, !fdcegb) : -0x1 != xvyst['indexOf']('http://') || -0x1 != xvyst['indexOf']('https://') ? gijfkh['downImg'](xvyst, new ilnmj(z201$, z201$['onDownImgCallBack'], [xvyst, this]), xvyst) : z201$['onCreateImage'](xvyst, this, !0x0);
  }, z201$['onDownImgCallBack'] = function ($xyzw, qsrwvt, z10y$) {
    z10y$ ? qsrwvt['onError'](null) : z201$['onCreateImage']($xyzw, qsrwvt);
  }, z201$['onCreateImage'] = function (bdgecf, pqtrso, mnojl) {
    var jeghfi, vtqpsr;function qomp() {
      vtqpsr['onload'] = null, vtqpsr['onerror'] = null, delete pqtrso['imgCache'][bdgecf];
    }jeghfi = (mnojl = void 0x0 === mnojl ? !0x1 : mnojl) ? bdgecf : ($0_x = gijfkh['getFileInfo'](bdgecf)['md5'], gijfkh['getFileNativePath']($0_x)), null == pqtrso['imgCache'] && (pqtrso['imgCache'] = {}), mnojl = function () {
      qomp(), pqtrso['onLoaded'](vtqpsr);
    };var $0_x = function () {
      qomp(), pqtrso['event']('error', 'Load image failed');
    };'nativeimage' == pqtrso['_type'] ? ((vtqpsr = new qoprsn['window']['Image']())['crossOrigin'] = '', vtqpsr['onload'] = mnojl, vtqpsr['onerror'] = $0_x, vtqpsr['src'] = jeghfi, pqtrso['imgCache'][bdgecf] = vtqpsr) : new jmko['create'](jeghfi, { 'onload': mnojl, 'onerror': $0_x, 'onCreate': function (knmjlo) {
        vtqpsr = knmjlo, pqtrso['imgCache'][bdgecf] = knmjlo;
      } });
  };function z201$() {}var tqwvs = (wtsqrv(edbfg, 'laya.wx.mini.MiniInput'), edbfg['_createInputElement'] = function () {
    otprqs['_initInput'](otprqs['area'] = qoprsn['createElement']('textarea')), otprqs['_initInput'](otprqs['input'] = qoprsn['createElement']('input')), otprqs['inputContainer'] = qoprsn['createElement']('div'), otprqs['inputContainer']['style']['position'] = 'absolute', otprqs['inputContainer']['style']['zIndex'] = 0x186a0, qoprsn['container']['appendChild'](otprqs['inputContainer']), otprqs['inputContainer']['setPos'] = function (nspoqr, gefdch) {
      otprqs['inputContainer']['style']['left'] = nspoqr + 'px', otprqs['inputContainer']['style']['top'] = gefdch + 'px';
    }, mlpkn['stage']['on']('resize', null, edbfg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (efdgi) {
      txwvs['dispatchEvent'] && txwvs['dispatchEvent']('resize');
    }), $z21_['_soundClass'] = _xw$, $z21_['_musicClass'] = _xw$;
  }, edbfg['_onStageResize'] = function () {
    mlpkn['stage']['_canvasTransform']['identity']()['scale'](qoprsn['width'] / ljhim['canvas']['width'] / mnloj['getPixelRatio'](), qoprsn['height'] / ljhim['canvas']['height'] / mnloj['getPixelRatio']());
  }, edbfg['wxinputFocus'] = function (iefghd) {
    var v$w = otprqs['inputElement']['target'];v$w && !v$w['editable'] || (psqno['window']['wx']['offKeyboardConfirm'](), psqno['window']['wx']['offKeyboardInput'](), psqno['window']['wx']['showKeyboard']({ 'defaultValue': v$w['text'], 'maxLength': v$w['maxChars'], 'multiple': v$w['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (dechg) {}, 'fail': function (wzx$) {} }), psqno['window']['wx']['onKeyboardConfirm'](function ($0x_y) {
      $0x_y = $0x_y ? $0x_y['value'] : '', (v$w['text'] = $0x_y, v$w['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), psqno['window']['wx']['onKeyboardInput'](function ($1y_z) {
      $1y_z = $1y_z ? $1y_z['value'] : '', v$w['multiline'] || -0x1 == $1y_z['indexOf']('\x0a') ? (v$w['text'] = $1y_z, v$w['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, edbfg['inputEnter'] = function () {
    otprqs['inputElement']['target']['focus'] = !0x1;
  }, edbfg['wxinputblur'] = function () {
    edbfg['hideKeyboard']();
  }, edbfg['hideKeyboard'] = function () {
    psqno['window']['wx']['offKeyboardConfirm'](), psqno['window']['wx']['offKeyboardInput'](), psqno['window']['wx']['hideKeyboard']({ 'success': function (nmilk) {
        console['log']('隐藏键盘');
      }, 'fail': function (otsq) {
        console['log']('隐藏键盘出错:' + (otsq ? otsq['errMsg'] : ''));
      } });
  }, edbfg);function edbfg() {}var kjmlin = function () {
    function kjghil() {}wtsqrv(kjghil, 'laya.wx.mini.MiniLoader');var jgk = kjghil['prototype'];return jgk['load'] = function (mijnl, rqtp, $zx_wy, qprnos, psoqnr) {
      void 0x0 === $zx_wy && ($zx_wy = !0x0), void 0x0 === psoqnr && (psoqnr = !0x1);var cfdghe = this;0x0 === (cfdghe['_url'] = mijnl)['indexOf']('data:image') ? cfdghe['_type'] = rqtp = 'image' : cfdghe['_type'] = rqtp = rqtp || cfdghe['getTypeFromUrl'](mijnl), cfdghe['_cache'] = $zx_wy, cfdghe['_data'] = null;var digfeh = 'ascii';-0x1 != mijnl['indexOf']('.fnt') ? digfeh = 'utf8' : 'arraybuffer' == rqtp && (digfeh = '');var nompql = mikjhl['getFileExtension'](mijnl);if (-0x1 != kjghil['_fileTypeArr']['indexOf'](nompql)) psqno['EnvConfig']['load']['call'](this, mijnl, rqtp, $zx_wy, qprnos, psoqnr);else {
        if (gijfkh['getFileInfo'](mijnl)) psqno['EnvConfig']['load']['call'](this, mijnl, rqtp, $zx_wy, qprnos, psoqnr);else {
          if (-0x1 != mijnl['indexOf']('layaNativeDir/')) {
            if (psqno['isZiYu']) {
              var mhkj = gijfkh['ziyuFileData'][mijnl];return void cfdghe['onLoaded'](mhkj);
            }return cosnole['log']('read read'), void gijfkh['read'](mijnl, digfeh, new ilnmj(kjghil, kjghil['onReadNativeCallBack'], [digfeh, mijnl, rqtp, $zx_wy, qprnos, psoqnr, cfdghe]));
          }mhkj = '' == $132['rootPath'] ? mijnl : mijnl['split']($132['rootPath'])[0x0], -0x1 != mijnl['indexOf']('http://') || -0x1 != mijnl['indexOf']('https://') ? psqno['EnvConfig']['load']['call'](cfdghe, mijnl, rqtp, $zx_wy, qprnos, psoqnr) : gijfkh['readFile'](mhkj, digfeh, new ilnmj(kjghil, kjghil['onReadNativeCallBack'], [digfeh, mijnl, rqtp, $zx_wy, qprnos, psoqnr, cfdghe]), mijnl);
        }
      }
    }, jgk['resMgrLoad'] = function (hdfgie, fejig, kfgjih, lhijmk, y10z, qotrsp, qsorp) {
      void 0x0 === kfgjih && (kfgjih = 0x0), void 0x0 === lhijmk && (lhijmk = !0x1), void 0x0 === y10z && (y10z = !0x1), void 0x0 === qotrsp && (qotrsp = 0x0), void 0x0 === qsorp && (qsorp = 0x3), -0x1 != hdfgie['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hdfgie), psqno['EnvConfig']['resMgrLoad'](hdfgie, (hdgi, gcehfd, wsxtr) => {
        kjghil['prototype']['resMgrLoadCallBack'](hdgi, gcehfd, wsxtr, fejig);
      }, kfgjih, lhijmk, y10z, qotrsp, qsorp);
    }, jgk['resMgrLoadCallBack'] = function (_1$03, ojnlmk, iefhjg, hefc) {
      console['log']('buff:::', _1$03, iefhjg, gijfkh['fileNativeDir'] + '///' + gijfkh['fileListName']), hefc(_1$03, ojnlmk, iefhjg);
    }, jgk['clearRes'] = function (gkhijf, vtrw) {
      this['clearRes'](gkhijf, vtrw = void 0x0 === vtrw ? !0x1 : vtrw), vtrw = gijfkh['getFileInfo'](gkhijf), !vtrw || -0x1 == gkhijf['indexOf']('http://') && -0x1 == gkhijf['indexOf']('https://') || (vtrw = vtrw['md5'], vtrw = gijfkh['getFileNativePath'](vtrw), gijfkh['remove'](vtrw));
    }, kjghil['onReadNativeCallBack'] = function (xwsrt, mkjhli, cefd, qosnp, gfihd, $zy0_x, gjkh, osrtqp, zyx$wv) {
      void 0x0 === qosnp && (qosnp = !0x0), void 0x0 === $zy0_x && ($zy0_x = !0x1), (osrtqp = void 0x0 === osrtqp ? 0x0 : osrtqp) ? 0x1 == osrtqp && psqno['EnvConfig']['load']['call'](gjkh, mkjhli, cefd, qosnp, gfihd, $zy0_x) : (zyx$wv = 'json' == cefd || 'atlas' == cefd ? psqno['getJson'](zyx$wv['data']) : 'xml' == cefd ? mikjhl['parseXMLFromString'](zyx$wv['data']) : zyx$wv['data'], gjkh['onLoaded'](zyx$wv), !psqno['isZiYu'] && psqno['isPosMsgYu'] && 'arraybuffer' != cefd && wx['postMessage']({ 'url': mkjhli, 'data': zyx$wv, 'isLoad': !0x0 }));
    }, gcefdb(kjghil, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kjghil;
  }(),
      gijfkh = (wtsqrv(ecdfg, 'laya.wx.mini.MiniFileMgr', kijlmn), ecdfg['isLoadFile'] = function (yvwtz) {
    return -0x1 != ecdfg['_fileTypeArr']['indexOf'](yvwtz);
  }, ecdfg['getFileInfo'] = function (dhfige) {
    return dhfige = dhfige['split']('?')[0x0], dhfige = ecdfg['filesListObj'][dhfige], null == dhfige ? null : dhfige;
  }, ecdfg['onFileUpdate'] = function (rtqsp, $2z0_1) {
    var mkolnp = rtqsp['split']('/');rtqsp = mkolnp[mkolnp['length'] - 0x1], mkolnp = ecdfg['getFileInfo']($2z0_1), null == mkolnp ? ecdfg['onSaveFile']($2z0_1, rtqsp) : mkolnp['readyUrl'] != $2z0_1 && ecdfg['remove'](rtqsp, $2z0_1);
  }, ecdfg['exits'] = function (zwvyxt, vpqrs) {
    zwvyxt = ecdfg['getFileNativePath'](zwvyxt), ecdfg['fs']['getFileInfo']({ 'filePath': zwvyxt, 'success': function (idehgf) {
        null != vpqrs && vpqrs['runWith']([0x0, idehgf]);
      }, 'fail': function (lkimn) {
        null != vpqrs && vpqrs['runWith']([0x1, lkimn]);
      } });
  }, ecdfg['read'] = function (hikfg, z0y_, psqn, wz$x_) {
    void 0x0 === z0y_ && (z0y_ = 'ascill'), hikfg = '' != (wz$x_ = void 0x0 === wz$x_ ? '' : wz$x_) ? ecdfg['getFileNativePath'](hikfg) : hikfg, ecdfg['fs']['readFile']({ 'filePath': hikfg, 'encoding': z0y_, 'success': function (hdec) {
        null != psqn && psqn['runWith']([0x0, hdec]);
      }, 'fail': function (gljik) {
        gljik && '' != wz$x_ ? ecdfg['down'](wz$x_, z0y_, psqn, wz$x_) : null != psqn && psqn['runWith']([0x1]);
      } });
  }, ecdfg['readNativeFile'] = function (stoqrp, khigl) {
    ecdfg['fs']['readFile']({ 'filePath': stoqrp, 'encoding': '', 'success': function (dihge) {
        null != khigl && khigl['runWith']([0x0]);
      }, 'fail': function (onlmj) {
        null != khigl && khigl['runWith']([0x1]);
      } });
  }, ecdfg['down'] = function (qwtrvs, z_1y$0, _2z$1, pmon) {
    void 0x0 === z_1y$0 && (z_1y$0 = 'ascill'), void 0x0 === pmon && (pmon = '');var cbgfd = ecdfg['getFileNativePath'](pmon);ecdfg['wxdown']({ 'url': qwtrvs, 'filePath': cbgfd, 'success': function (jkhgfi) {
        0xc8 === jkhgfi['statusCode'] && ecdfg['readFile'](jkhgfi['filePath'], z_1y$0, _2z$1, pmon);
      }, 'fail': function (tzvyx) {
        null != _2z$1 && _2z$1['runWith']([0x1, tzvyx]);
      } })['onProgressUpdate'](function (dgihe) {
      null != _2z$1 && _2z$1['runWith']([0x2, dgihe['progress']]);
    });
  }, ecdfg['readFile'] = function (vpsr, ifjhg, _yzw$x, eafb) {
    void 0x0 === eafb && (eafb = ''), ecdfg['fs']['readFile']({ 'filePath': vpsr, 'encoding': ifjhg = void 0x0 === ifjhg ? 'ascill' : ifjhg, 'success': function (gejfih) {
        -0x1 == vpsr['indexOf']('http://') && -0x1 == vpsr['indexOf']('https://') || ecdfg['onFileUpdate'](vpsr, eafb), null != _yzw$x && _yzw$x['runWith']([0x0, gejfih]);
      }, 'fail': function (dcaefb) {
        dcaefb && null != _yzw$x && _yzw$x['runWith']([0x1, dcaefb]);
      } });
  }, ecdfg['downImg'] = function (lkmnj, rqsptv, strvqp) {
    void 0x0 === strvqp && (strvqp = ''), ecdfg['wxdown']({ 'url': lkmnj, 'success': function (wtxz) {
        0xc8 === wtxz['statusCode'] && ecdfg['copyFile'](wtxz['tempFilePath'], strvqp, rqsptv);
      }, 'fail': function (nkmjl) {
        null != rqsptv && rqsptv['runWith']([0x1, nkmjl]);
      } });
  }, ecdfg['copyFile'] = function (becafd, rpostq, gcdh) {
    var y0_x$z = becafd['split']('/'),
        xywtvz = y0_x$z[y0_x$z['length'] - 0x1];rpostq['split']('?')[0x0];var vxywzt = ecdfg['getFileInfo'](rpostq);y0_x$z = ecdfg['getFileNativePath'](xywtvz), ecdfg['fs']['copyFile']({ 'srcPath': becafd, 'destPath': y0_x$z, 'success': function (z_20$1) {
        vxywzt ? vxywzt['readyUrl'] != rpostq && ecdfg['remove'](xywtvz, rpostq, gcdh) : (ecdfg['onSaveFile'](rpostq, xywtvz), null != gcdh && gcdh['runWith']([0x0]));
      }, 'fail': function (aefd) {
        null != gcdh && gcdh['runWith']([0x1, aefd]);
      } });
  }, ecdfg['getFileNativePath'] = function (dhife) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dhife;
  }, ecdfg['remove'] = function ($z201_, qsrw, qolnp) {
    void 0x0 === qsrw && (qsrw = '');var yxz_w$ = ecdfg['getFileInfo'](qsrw),
        stp = ecdfg['getFileNativePath'](yxz_w$['md5']);mlpkn['loader']['clearRes'](yxz_w$['readyUrl']), ecdfg['fs']['unlink']({ 'filePath': stp, 'success': function (ompln) {
        '' != qsrw && ecdfg['onSaveFile'](qsrw, $z201_), null != qolnp && qolnp['runWith']([0x0]);
      }, 'fail': function (qonml) {} });
  }, ecdfg['onSaveFile'] = function (hlmkj, $120_3) {
    var gejh = hlmkj['split']('?')[0x0];ecdfg['filesListObj'][gejh] = { 'md5': $120_3, 'readyUrl': hlmkj }, ecdfg['fs']['writeFile']({ 'filePath': ecdfg['fileNativeDir'] + '/' + ecdfg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ecdfg['filesListObj']), 'success': function (wvsty) {
        console['log']('写入测试测试成功：', wvsty);
      }, 'fail': function (hgfde) {
        console['log']('写入测试测试失败：', hgfde);
      } });
  }, ecdfg['existDir'] = function ($1z_y, _z210$) {
    ecdfg['fs']['mkdir']({ 'dirPath': $1z_y, 'success': function (mpnroq) {
        null != _z210$ && _z210$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (jmilk) {
        -0x1 != jmilk['errMsg']['indexOf']('file already exists') ? ecdfg['readSync'](ecdfg['fileListName'], 'utf8', _z210$) : null != _z210$ && _z210$['runWith']([0x1, jmilk]);
      } });
  }, ecdfg['readSync'] = function (gcfdbe, nijlmk, ghefdc, pnmoqr) {
    void 0x0 === nijlmk && (nijlmk = 'ascill'), void 0x0 === pnmoqr && (pnmoqr = ''), gcfdbe = ecdfg['getFileNativePath'](gcfdbe);var gijh;try {
      gijh = ecdfg['fs']['readFileSync'](gcfdbe), null != ghefdc && ghefdc['runWith']([0x0, { 'data': gijh }]);
    } catch (wtvrsx) {
      null != ghefdc && ghefdc['runWith']([0x1]);
    }
  }, ecdfg['readCache'] = function () {}, ecdfg['writeCache'] = function (fjihe) {
    var faecd = readyUrl['split']('?')[0x0];ecdfg['filesListObj'][faecd] = { 'md5': md5Name, 'readyUrl': readyUrl }, ecdfg['fs']['writeFile']({ 'filePath': ecdfg['fileNativeDir'] + '/' + ecdfg['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ecdfg['filesListObj']), 'success': function (dbgcfe) {}, 'fail': function (gdbcef) {} });
  }, ecdfg['setNativeFileDir'] = function (ifhgd) {
    ecdfg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ifhgd;
  }, ecdfg['filesListObj'] = {}, ecdfg['fileNativeDir'] = null, ecdfg['fileListName'] = 'layaairfiles.txt', ecdfg['ziyuFileData'] = {}, gcefdb(ecdfg, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ecdfg);function ecdfg() {
    ecdfg['__super']['call'](this);
  }var _xw$ = function () {
    function x_zy$0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, x_zy$0['__super']['call'](this), this['_sound'] = x_zy$0['_createSound']();
    }wtsqrv(x_zy$0, 'laya.wx.mini.MiniSound', kijlmn);var z0y$1_ = x_zy$0['prototype'];return z0y$1_['load'] = function (bgcef) {
      var txrsw = this,
          mnlkpo;function mpnlok() {
        if (null != x_zy$0['_null']) txrsw['_sound']['onCanplay'](x_zy$0['_null']), txrsw['_sound']['onError'](x_zy$0['_null']);else try {
          txrsw['_sound']['onCanplay'](null), txrsw['_sound']['onError'](null), x_zy$0['_null'] = null;
        } catch (difghe) {
          console['warn']('[wxmini] _clearSound:' + difghe), txrsw['_sound']['onCanplay'](y$vzxw), txrsw['_sound']['onError'](y$vzxw), x_zy$0['_null'] = y$vzxw;
        }
      }function y$vzxw() {}bgcef = $132['formatURL'](bgcef), this['url'] = bgcef, x_zy$0['_audioCache'][bgcef] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        mpnlok(), mnlkpo['loaded'] = !0x0, mnlkpo['event']('complete'), x_zy$0['_audioCache'][mnlkpo['url']] = mnlkpo;
      }), this['_sound']['onError'](function (yvzw$) {
        console['error']('errCode=' + yvzw$['errCode'] + '  errMsg=' + yvzw$['errMsg']), mpnlok(), mnlkpo['event']('error');
      }), this['_sound']['src'] = bgcef, mnlkpo = this);
    }, z0y$1_['play'] = function (kljhig, lonqp) {
      void 0x0 === kljhig && (kljhig = 0x0), void 0x0 === lonqp && (lonqp = 0x0), (ead = this['url'] == $z21_['_tMusic'] ? (x_zy$0['_musicAudio'] || (x_zy$0['_musicAudio'] = x_zy$0['_createSound']()), x_zy$0['_musicAudio']) : x_zy$0['_createSound']())['src'] = this['url'];var ead = new kilmn(ead);return ead['url'] = this['url'], ead['loops'] = lonqp, ead['startTime'] = kljhig, ead['play'](), $z21_['addChannel'](ead), ead;
    }, z0y$1_['dispose'] = function () {
      var hfegdi = x_zy$0['_audioCache'][this['url']];hfegdi && (hfegdi['src'] = '', delete x_zy$0['_audioCache'][this['url']]);
    }, mponq(0x0, z0y$1_, 'duration', function () {
      return this['_sound']['duration'];
    }), x_zy$0['_createSound'] = function () {
      return x_zy$0['_id']++, psqno['window']['wx']['createInnerAudioContext']();
    }, x_zy$0['_musicAudio'] = null, x_zy$0['_id'] = 0x0, x_zy$0['_audioCache'] = {}, x_zy$0['_null'] = void 0x0, x_zy$0;
  }(),
      kilmn = function () {
    function x_zw$(npkmo) {
      this['_audio'] = null, this['_onEnd'] = null, x_zw$['__super']['call'](this), this['_audio'] = npkmo, this['_onEnd'] = mikjhl['bind'](this['__onEnd'], this), npkmo['onEnded'](this['_onEnd']);
    }wtsqrv(x_zw$, 'laya.wx.mini.MiniSoundChannel', twyvs);var wrtvs = x_zw$['prototype'];return wrtvs['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (mlpkn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wrtvs['__onNull'] = function () {}, wrtvs['play'] = function () {
      this['isStopped'] = !0x1, $z21_['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, wrtvs['stop'] = function () {
      if (this['isStopped'] = !0x0, $z21_['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != x_zw$['_null']) this['_audio']['onEnded'](x_zw$['_null']);else try {
          this['_audio']['onEnded'](null), x_zw$['_null'] = null;
        } catch (cef) {
          console['warn']('[wxmini] stop:' + cef), this['_audio']['onEnded'](mikjhl['bind'](this['__onNull'], this)), x_zw$['_null'] = mikjhl['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, wrtvs['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, wrtvs['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $z21_['addChannel'](this), this['_audio']['play']());
    }, mponq(0x0, wrtvs, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), mponq(0x0, wrtvs, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), mponq(0x0, wrtvs, 'volume', function () {
      return 0x1;
    }, function (hgfeid) {}), x_zw$['_null'] = void 0x0, x_zw$;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (cfbged, onsqp) {
  'use strict';
  for (var wvqsr in Object['defineProperty'](onsqp, '__esModule', { 'value': !0x0 }), Laya) {
    var _y$1z0 = Laya[wvqsr];_y$1z0 && _y$1z0['__isclass'] && (onsqp[wvqsr] = _y$1z0);
  }
});