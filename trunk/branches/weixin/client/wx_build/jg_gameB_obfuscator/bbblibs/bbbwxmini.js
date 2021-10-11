var _ = wx.y$;
!function ($2z_01, $03) {
  $03['un'], $03['uns'];var ebcdf = $03['static'],
      igdf = $03['class'],
      y_z1 = $03['getset'];$03['__newvec'];var psuqtr = laya['utils']['Browser'],
      zuxyvw = (laya['events']['Event'], laya['events']['EventDispatcher']),
      vxtuw = laya['resource']['HTMLImage'],
      qsnrp = laya['utils']['Handler'],
      y$xzw_ = laya['display']['Input'],
      bcfg = laya['net']['Loader'];laya['maths']['Matrix'];var cfgebd = laya['renders']['Render'],
      jgilkh = laya['utils']['RunDriver'];laya['media']['Sound'];var jlon = laya['media']['SoundChannel'],
      nrsopq = laya['media']['SoundManager'],
      gkhi = (laya['display']['Stage'], laya['net']['URL']),
      cdeghf = laya['utils']['Utils'],
      dfebcg = (igdf(utqp, 'laya.wx.mini.MiniAdpter'), utqp['getJson'] = function (qotsr) {
    return JSON['parse'](qotsr);
  }, utqp['init'] = function (vutqr, wrvst) {
    void 0x0 === vutqr && (vutqr = !0x1), void 0x0 === wrvst && (wrvst = !0x1), utqp['_inited'] || (utqp['window'] = $2z_01)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (utqp['_inited'] = !0x0, utqp['isZiYu'] = wrvst, utqp['isPosMsgYu'] = vutqr, utqp['EnvConfig'] = {}, utqp['isZiYu'] || (hijmlk['setNativeFileDir']('/layaairGame'), hijmlk['existDir'](hijmlk['fileNativeDir'], qsnrp['create'](utqp, utqp['onMkdirCallBack']))), utqp['window']['focus'] = function () {}, $03['getUrlPath'] = function () {}, utqp['window']['logtime'] = function (wyxv) {}, utqp['window']['alertTimeLog'] = function (ehfj) {}, utqp['window']['resetShareInfo'] = function () {}, utqp['window']['CanvasRenderingContext2D'] = function () {}, utqp['window']['CanvasRenderingContext2D']['prototype'] = utqp['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], utqp['window']['document']['body']['appendChild'] = function () {}, utqp['EnvConfig']['pixelRatioInt'] = 0x0, jgilkh['getPixelRatio'] = utqp['pixelRatio'], utqp['_preCreateElement'] = psuqtr['createElement'], psuqtr['createElement'] = utqp['createElement'], jgilkh['createShaderCondition'] = utqp['createShaderCondition'], cdeghf['parseXMLFromString'] = utqp['parseXMLFromString'], y$xzw_['_createInputElement'] = srnq['_createInputElement'], utqp['EnvConfig']['load'] = bcfg['prototype']['load'], bcfg['prototype']['load'] = z2_01$['prototype']['load'], utqp['isZiYu'] && vutqr && wx['onMessage'](function (qusrpt) {
      qusrpt['isLoad'] && (hijmlk['ziyuFileData'][qusrpt['url']] = qusrpt['data']);
    }));
  }, utqp['onMkdirCallBack'] = function (cfhedg, $2z0) {
    cfhedg || (hijmlk['filesListObj'] = JSON['parse']($2z0['data']));
  }, utqp['pixelRatio'] = function () {
    if (!utqp['EnvConfig']['pixelRatioInt']) try {
      var dhigef = wx['getSystemInfoSync']();return utqp['EnvConfig']['pixelRatioInt'] = dhigef['pixelRatio'], dhigef['pixelRatio'];
    } catch (ecfdgh) {}return utqp['EnvConfig']['pixelRatioInt'];
  }, utqp['createElement'] = function (_0$21) {
    var usvtqr;if ('canvas' == _0$21) return 0x1 == utqp['idx'] ? utqp['isZiYu'] ? (usvtqr = sharedCanvas)['style'] = {} : usvtqr = $2z_01['canvas'] : usvtqr = $2z_01['wx']['createCanvas'](), utqp['idx']++, usvtqr;if ('textarea' == _0$21 || 'input' == _0$21) return utqp['onCreateInput'](_0$21);if ('div' != _0$21) return utqp['_preCreateElement'](_0$21);return _0$21 = utqp['_preCreateElement'](_0$21), (_0$21['contains'] = function (pklo) {
      return null;
    }, _0$21['removeChild'] = function (svqrt) {}, _0$21);
  }, utqp['onCreateInput'] = function (qustrv) {
    return qustrv = utqp['_preCreateElement'](qustrv), (qustrv['focus'] = srnq['wxinputFocus'], qustrv['blur'] = srnq['wxinputblur'], qustrv['style'] = {}, qustrv['value'] = 0x0, qustrv['parentElement'] = {}, qustrv['placeholder'] = {}, qustrv['type'] = {}, qustrv['setColor'] = function (dfbaec) {}, qustrv['setType'] = function (nmproq) {}, qustrv['setFontFace'] = function (dhife) {}, qustrv['addEventListener'] = function (utrvq) {}, qustrv['contains'] = function (pqts) {
      return null;
    }, qustrv['removeChild'] = function (zywvxu) {}, qustrv);
  }, utqp['createShaderCondition'] = function (urqsvt) {
    var nkplo = this;return function () {
      return nkplo[urqsvt['replace']('this.', '')];
    };
  }, utqp['EnvConfig'] = null, utqp['window'] = null, utqp['_preCreateElement'] = null, utqp['_inited'] = !0x1, utqp['wxRequest'] = null, utqp['systemInfo'] = null, utqp['version'] = '0.0.1', utqp['isZiYu'] = !0x1, utqp['isPosMsgYu'] = !0x1, utqp['parseXMLFromString'] = function (tprus) {
    var $20_;tprus = tprus['replace'](/>\s+</g, '><');try {
      $20_ = new $2z_01['Parser']['DOMParser']()['parseFromString'](tprus, 'text/xml');
    } catch (rsuvtq) {
      throw '需要引入xml解析库文件';
    }return $20_;
  }, utqp['idx'] = 0x1, utqp);function utqp() {}igdf(hkif, 'laya.wx.mini.MiniImage'), hkif['prototype']['_loadImage'] = function (ytvu) {
    var wrstvu = !0x1;-0x1 == ytvu['indexOf']('layaNativeDir/') && (wrstvu = !0x0, ytvu = gkhi['formatURL'](ytvu)), hijmlk['getFileInfo'](ytvu) ? hkif['onCreateImage'](ytvu, this, !wrstvu) : -0x1 != ytvu['indexOf']('http://') || -0x1 != ytvu['indexOf']('https://') ? hijmlk['downImg'](ytvu, new qsnrp(hkif, hkif['onDownImgCallBack'], [ytvu, this]), ytvu) : hkif['onCreateImage'](ytvu, this, !0x0);
  }, hkif['onDownImgCallBack'] = function (nomkl, x0, _$1023) {
    _$1023 ? x0['onError'](null) : hkif['onCreateImage'](nomkl, x0);
  }, hkif['onCreateImage'] = function (gdfi, orpsqt, mnqor) {
    var $20z1, hgfjie;function _3$20() {
      hgfjie['onload'] = null, hgfjie['onerror'] = null, delete orpsqt['imgCache'][gdfi];
    }$20z1 = (mnqor = void 0x0 === mnqor ? !0x1 : mnqor) ? gdfi : (rtsqpu = hijmlk['getFileInfo'](gdfi)['md5'], hijmlk['getFileNativePath'](rtsqpu)), null == orpsqt['imgCache'] && (orpsqt['imgCache'] = {}), mnqor = function () {
      _3$20(), orpsqt['onLoaded'](hgfjie);
    };var rtsqpu = function () {
      _3$20(), orpsqt['event']('error', 'Load image failed');
    };'nativeimage' == orpsqt['_type'] ? ((hgfjie = new psuqtr['window']['Image']())['crossOrigin'] = '', hgfjie['onload'] = mnqor, hgfjie['onerror'] = rtsqpu, hgfjie['src'] = $20z1, orpsqt['imgCache'][gdfi] = hgfjie) : new vxtuw['create']($20z1, { 'onload': mnqor, 'onerror': rtsqpu, 'onCreate': function (snqro) {
        hgfjie = snqro, orpsqt['imgCache'][gdfi] = snqro;
      } });
  };function hkif() {}var srnq = (igdf($xwzv, 'laya.wx.mini.MiniInput'), $xwzv['_createInputElement'] = function () {
    y$xzw_['_initInput'](y$xzw_['area'] = psuqtr['createElement']('textarea')), y$xzw_['_initInput'](y$xzw_['input'] = psuqtr['createElement']('input')), y$xzw_['inputContainer'] = psuqtr['createElement']('div'), y$xzw_['inputContainer']['style']['position'] = 'absolute', y$xzw_['inputContainer']['style']['zIndex'] = 0x186a0, psuqtr['container']['appendChild'](y$xzw_['inputContainer']), y$xzw_['inputContainer']['setPos'] = function ($y_10, lkpno) {
      y$xzw_['inputContainer']['style']['left'] = $y_10 + 'px', y$xzw_['inputContainer']['style']['top'] = lkpno + 'px';
    }, $03['stage']['on']('resize', null, $xwzv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (torq) {
      $2z_01['dispatchEvent'] && $2z_01['dispatchEvent']('resize');
    }), nrsopq['_soundClass'] = ghikl, nrsopq['_musicClass'] = ghikl;
  }, $xwzv['_onStageResize'] = function () {
    $03['stage']['_canvasTransform']['identity']()['scale'](psuqtr['width'] / cfgebd['canvas']['width'] / jgilkh['getPixelRatio'](), psuqtr['height'] / cfgebd['canvas']['height'] / jgilkh['getPixelRatio']());
  }, $xwzv['wxinputFocus'] = function (vtqrs) {
    var yxuz = y$xzw_['inputElement']['target'];yxuz && !yxuz['editable'] || (dfebcg['window']['wx']['offKeyboardConfirm'](), dfebcg['window']['wx']['offKeyboardInput'](), dfebcg['window']['wx']['showKeyboard']({ 'defaultValue': yxuz['text'], 'maxLength': yxuz['maxChars'], 'multiple': yxuz['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (mjkh) {}, 'fail': function (ruqps) {} }), dfebcg['window']['wx']['onKeyboardConfirm'](function (dcgefh) {
      dcgefh = dcgefh ? dcgefh['value'] : '', (yxuz['text'] = dcgefh, yxuz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), dfebcg['window']['wx']['onKeyboardInput'](function (dfbg) {
      dfbg = dfbg ? dfbg['value'] : '', yxuz['multiline'] || -0x1 == dfbg['indexOf']('\x0a') ? (yxuz['text'] = dfbg, yxuz['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, $xwzv['inputEnter'] = function () {
    y$xzw_['inputElement']['target']['focus'] = !0x1;
  }, $xwzv['wxinputblur'] = function () {
    $xwzv['hideKeyboard']();
  }, $xwzv['hideKeyboard'] = function () {
    dfebcg['window']['wx']['offKeyboardConfirm'](), dfebcg['window']['wx']['offKeyboardInput'](), dfebcg['window']['wx']['hideKeyboard']({ 'success': function (klnmo) {
        console['log']('隐藏键盘');
      }, 'fail': function (rqtpsu) {
        console['log']('隐藏键盘出错:' + (rqtpsu ? rqtpsu['errMsg'] : ''));
      } });
  }, $xwzv);function $xwzv() {}var z2_01$ = function () {
    function twuxyv() {}igdf(twuxyv, 'laya.wx.mini.MiniLoader');var cbefa = twuxyv['prototype'];return cbefa['load'] = function (rpsnoq, nkljo, z02_$, _xyzw$, oj) {
      void 0x0 === z02_$ && (z02_$ = !0x0), void 0x0 === oj && (oj = !0x1);var nplqm = this;0x0 === (nplqm['_url'] = rpsnoq)['indexOf']('data:image') ? nplqm['_type'] = nkljo = 'image' : nplqm['_type'] = nkljo = nkljo || nplqm['getTypeFromUrl'](rpsnoq), nplqm['_cache'] = z02_$, nplqm['_data'] = null;var vtxywu = 'ascii';-0x1 != rpsnoq['indexOf']('.fnt') ? vtxywu = 'utf8' : 'arraybuffer' == nkljo && (vtxywu = '');var ywzx$ = cdeghf['getFileExtension'](rpsnoq);if (-0x1 != twuxyv['_fileTypeArr']['indexOf'](ywzx$)) dfebcg['EnvConfig']['load']['call'](this, rpsnoq, nkljo, z02_$, _xyzw$, oj);else {
        if (hijmlk['getFileInfo'](rpsnoq)) dfebcg['EnvConfig']['load']['call'](this, rpsnoq, nkljo, z02_$, _xyzw$, oj);else {
          if (-0x1 != rpsnoq['indexOf']('layaNativeDir/')) {
            if (dfebcg['isZiYu']) {
              var pqrmo = hijmlk['ziyuFileData'][rpsnoq];return void nplqm['onLoaded'](pqrmo);
            }return cosnole['log']('read read'), void hijmlk['read'](rpsnoq, vtxywu, new qsnrp(twuxyv, twuxyv['onReadNativeCallBack'], [vtxywu, rpsnoq, nkljo, z02_$, _xyzw$, oj, nplqm]));
          }pqrmo = '' == gkhi['rootPath'] ? rpsnoq : rpsnoq['split'](gkhi['rootPath'])[0x0], -0x1 != rpsnoq['indexOf']('http://') || -0x1 != rpsnoq['indexOf']('https://') ? dfebcg['EnvConfig']['load']['call'](nplqm, rpsnoq, nkljo, z02_$, _xyzw$, oj) : hijmlk['readFile'](pqrmo, vtxywu, new qsnrp(twuxyv, twuxyv['onReadNativeCallBack'], [vtxywu, rpsnoq, nkljo, z02_$, _xyzw$, oj, nplqm]), rpsnoq);
        }
      }
    }, cbefa['resMgrLoad'] = function (onpqmr, hfjg, ecfdba, psrutq, urspt, gdehc, joknlm) {
      void 0x0 === ecfdba && (ecfdba = 0x0), void 0x0 === psrutq && (psrutq = !0x1), void 0x0 === urspt && (urspt = !0x1), void 0x0 === gdehc && (gdehc = 0x0), void 0x0 === joknlm && (joknlm = 0x3), -0x1 != onpqmr['indexOf']('mpack') && console['log']('=============resMgrLoad url:', onpqmr), dfebcg['EnvConfig']['resMgrLoad'](onpqmr, (srqpn, $z_yx0, feigd) => {
        twuxyv['prototype']['resMgrLoadCallBack'](srqpn, $z_yx0, feigd, hfjg);
      }, ecfdba, psrutq, urspt, gdehc, joknlm);
    }, cbefa['resMgrLoadCallBack'] = function (jlkg, yzxw$, jhml, dfbceg) {
      console['log']('buff:::', jlkg, jhml, hijmlk['fileNativeDir'] + '///' + hijmlk['fileListName']), dfbceg(jlkg, yzxw$, jhml);
    }, cbefa['clearRes'] = function (zxwy_$, nqs) {
      this['clearRes'](zxwy_$, nqs = void 0x0 === nqs ? !0x1 : nqs), nqs = hijmlk['getFileInfo'](zxwy_$), !nqs || -0x1 == zxwy_$['indexOf']('http://') && -0x1 == zxwy_$['indexOf']('https://') || (nqs = nqs['md5'], nqs = hijmlk['getFileNativePath'](nqs), hijmlk['remove'](nqs));
    }, twuxyv['onReadNativeCallBack'] = function (tsorqp, wtruv, fhjgi, xyzuw, rmoqn, zxvu, stvur, gifh, degfbc) {
      void 0x0 === xyzuw && (xyzuw = !0x0), void 0x0 === zxvu && (zxvu = !0x1), (gifh = void 0x0 === gifh ? 0x0 : gifh) ? 0x1 == gifh && dfebcg['EnvConfig']['load']['call'](stvur, wtruv, fhjgi, xyzuw, rmoqn, zxvu) : (degfbc = 'json' == fhjgi || 'atlas' == fhjgi ? dfebcg['getJson'](degfbc['data']) : 'xml' == fhjgi ? cdeghf['parseXMLFromString'](degfbc['data']) : degfbc['data'], stvur['onLoaded'](degfbc), !dfebcg['isZiYu'] && dfebcg['isPosMsgYu'] && 'arraybuffer' != fhjgi && wx['postMessage']({ 'url': wtruv, 'data': degfbc, 'isLoad': !0x0 }));
    }, ebcdf(twuxyv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), twuxyv;
  }(),
      hijmlk = (igdf(knloj, 'laya.wx.mini.MiniFileMgr', zuxyvw), knloj['isLoadFile'] = function (x_y$z) {
    return -0x1 != knloj['_fileTypeArr']['indexOf'](x_y$z);
  }, knloj['getFileInfo'] = function (qstopr) {
    return qstopr = qstopr['split']('?')[0x0], qstopr = knloj['filesListObj'][qstopr], null == qstopr ? null : qstopr;
  }, knloj['onFileUpdate'] = function (qtprso, mjnilk) {
    var yxw$_ = qtprso['split']('/');qtprso = yxw$_[yxw$_['length'] - 0x1], yxw$_ = knloj['getFileInfo'](mjnilk), null == yxw$_ ? knloj['onSaveFile'](mjnilk, qtprso) : yxw$_['readyUrl'] != mjnilk && knloj['remove'](qtprso, mjnilk);
  }, knloj['exits'] = function (kfigjh, npklm) {
    kfigjh = knloj['getFileNativePath'](kfigjh), knloj['fs']['getFileInfo']({ 'filePath': kfigjh, 'success': function (_wyx) {
        null != npklm && npklm['runWith']([0x0, _wyx]);
      }, 'fail': function (orptqs) {
        null != npklm && npklm['runWith']([0x1, orptqs]);
      } });
  }, knloj['read'] = function (tusvxw, lonpkm, olq, deghfc) {
    void 0x0 === lonpkm && (lonpkm = 'ascill'), tusvxw = '' != (deghfc = void 0x0 === deghfc ? '' : deghfc) ? knloj['getFileNativePath'](tusvxw) : tusvxw, knloj['fs']['readFile']({ 'filePath': tusvxw, 'encoding': lonpkm, 'success': function (joknl) {
        null != olq && olq['runWith']([0x0, joknl]);
      }, 'fail': function (omlnpq) {
        omlnpq && '' != deghfc ? knloj['down'](deghfc, lonpkm, olq, deghfc) : null != olq && olq['runWith']([0x1]);
      } });
  }, knloj['readNativeFile'] = function (utrsq, fgcbed) {
    knloj['fs']['readFile']({ 'filePath': utrsq, 'encoding': '', 'success': function (uqtrvs) {
        null != fgcbed && fgcbed['runWith']([0x0]);
      }, 'fail': function (noprq) {
        null != fgcbed && fgcbed['runWith']([0x1]);
      } });
  }, knloj['down'] = function (fdieg, v$y, z$_yx, pqmo) {
    void 0x0 === v$y && (v$y = 'ascill'), void 0x0 === pqmo && (pqmo = '');var vyxwzu = knloj['getFileNativePath'](pqmo);knloj['wxdown']({ 'url': fdieg, 'filePath': vyxwzu, 'success': function (uzxwyv) {
        0xc8 === uzxwyv['statusCode'] && knloj['readFile'](uzxwyv['filePath'], v$y, z$_yx, pqmo);
      }, 'fail': function ($_yzxw) {
        null != z$_yx && z$_yx['runWith']([0x1, $_yzxw]);
      } })['onProgressUpdate'](function (edac) {
      null != z$_yx && z$_yx['runWith']([0x2, edac['progress']]);
    });
  }, knloj['readFile'] = function (vtwu, ijhfgk, $02_1z, glk) {
    void 0x0 === glk && (glk = ''), knloj['fs']['readFile']({ 'filePath': vtwu, 'encoding': ijhfgk = void 0x0 === ijhfgk ? 'ascill' : ijhfgk, 'success': function (tvurws) {
        -0x1 == vtwu['indexOf']('http://') && -0x1 == vtwu['indexOf']('https://') || knloj['onFileUpdate'](vtwu, glk), null != $02_1z && $02_1z['runWith']([0x0, tvurws]);
      }, 'fail': function (cb) {
        cb && null != $02_1z && $02_1z['runWith']([0x1, cb]);
      } });
  }, knloj['downImg'] = function (mikhj, cafeb, minjkl) {
    void 0x0 === minjkl && (minjkl = ''), knloj['wxdown']({ 'url': mikhj, 'success': function (ch) {
        0xc8 === ch['statusCode'] && knloj['copyFile'](ch['tempFilePath'], minjkl, cafeb);
      }, 'fail': function (tposqr) {
        null != cafeb && cafeb['runWith']([0x1, tposqr]);
      } });
  }, knloj['copyFile'] = function (ljkgh, qvsru, yv$xw) {
    var wy$_xz = ljkgh['split']('/'),
        yz$vxw = wy$_xz[wy$_xz['length'] - 0x1];qvsru['split']('?')[0x0];var gehdf = knloj['getFileInfo'](qvsru);wy$_xz = knloj['getFileNativePath'](yz$vxw), knloj['fs']['copyFile']({ 'srcPath': ljkgh, 'destPath': wy$_xz, 'success': function (z$_) {
        gehdf ? gehdf['readyUrl'] != qvsru && knloj['remove'](yz$vxw, qvsru, yv$xw) : (knloj['onSaveFile'](qvsru, yz$vxw), null != yv$xw && yv$xw['runWith']([0x0]));
      }, 'fail': function ($zxy_) {
        null != yv$xw && yv$xw['runWith']([0x1, $zxy_]);
      } });
  }, knloj['getFileNativePath'] = function (kmlhj) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kmlhj;
  }, knloj['remove'] = function (dih, cdgeb, ljgk) {
    void 0x0 === cdgeb && (cdgeb = '');var nmjklo = knloj['getFileInfo'](cdgeb),
        urtspq = knloj['getFileNativePath'](nmjklo['md5']);$03['loader']['clearRes'](nmjklo['readyUrl']), knloj['fs']['unlink']({ 'filePath': urtspq, 'success': function (opnr) {
        '' != cdgeb && knloj['onSaveFile'](cdgeb, dih), null != ljgk && ljgk['runWith']([0x0]);
      }, 'fail': function (z21$0) {} });
  }, knloj['onSaveFile'] = function (zwuy, jgklh) {
    var w$zx = zwuy['split']('?')[0x0];knloj['filesListObj'][w$zx] = { 'md5': jgklh, 'readyUrl': zwuy }, knloj['fs']['writeFile']({ 'filePath': knloj['fileNativeDir'] + '/' + knloj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](knloj['filesListObj']), 'success': function (hgkij) {
        console['log']('写入测试测试成功：', hgkij);
      }, 'fail': function (ortq) {
        console['log']('写入测试测试失败：', ortq);
      } });
  }, knloj['existDir'] = function (chegdf, _$10zy) {
    knloj['fs']['mkdir']({ 'dirPath': chegdf, 'success': function (hjilg) {
        null != _$10zy && _$10zy['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (qonrm) {
        -0x1 != qonrm['errMsg']['indexOf']('file already exists') ? knloj['readSync'](knloj['fileListName'], 'utf8', _$10zy) : null != _$10zy && _$10zy['runWith']([0x1, qonrm]);
      } });
  }, knloj['readSync'] = function (okjl, zx0y_, kjhmi, $1z_2) {
    void 0x0 === zx0y_ && (zx0y_ = 'ascill'), void 0x0 === $1z_2 && ($1z_2 = ''), okjl = knloj['getFileNativePath'](okjl);var lhigkj;try {
      lhigkj = knloj['fs']['readFileSync'](okjl), null != kjhmi && kjhmi['runWith']([0x0, { 'data': lhigkj }]);
    } catch (dfbeg) {
      null != kjhmi && kjhmi['runWith']([0x1]);
    }
  }, knloj['readCache'] = function () {}, knloj['writeCache'] = function (xzy_$w) {
    var qrnpos = readyUrl['split']('?')[0x0];knloj['filesListObj'][qrnpos] = { 'md5': md5Name, 'readyUrl': readyUrl }, knloj['fs']['writeFile']({ 'filePath': knloj['fileNativeDir'] + '/' + knloj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](knloj['filesListObj']), 'success': function (dfch) {}, 'fail': function (oqpln) {} });
  }, knloj['setNativeFileDir'] = function (hfgje) {
    knloj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hfgje;
  }, knloj['filesListObj'] = {}, knloj['fileNativeDir'] = null, knloj['fileListName'] = 'layaairfiles.txt', knloj['ziyuFileData'] = {}, ebcdf(knloj, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), knloj);function knloj() {
    knloj['__super']['call'](this);
  }var ghikl = function () {
    function jkigl() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, jkigl['__super']['call'](this), this['_sound'] = jkigl['_createSound']();
    }igdf(jkigl, 'laya.wx.mini.MiniSound', zuxyvw);var uxvwyt = jkigl['prototype'];return uxvwyt['load'] = function (gkfhi) {
      var pqtu = this,
          kmljih;function gfikj() {
        if (null != jkigl['_null']) pqtu['_sound']['onCanplay'](jkigl['_null']), pqtu['_sound']['onError'](jkigl['_null']);else try {
          pqtu['_sound']['onCanplay'](null), pqtu['_sound']['onError'](null), jkigl['_null'] = null;
        } catch (yxw$zv) {
          console['warn']('[wxmini] _clearSound:' + yxw$zv), pqtu['_sound']['onCanplay'](klhijm), pqtu['_sound']['onError'](klhijm), jkigl['_null'] = klhijm;
        }
      }function klhijm() {}gkfhi = gkhi['formatURL'](gkfhi), this['url'] = gkfhi, jkigl['_audioCache'][gkfhi] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        gfikj(), kmljih['loaded'] = !0x0, kmljih['event']('complete'), jkigl['_audioCache'][kmljih['url']] = kmljih;
      }), this['_sound']['onError'](function (fie) {
        console['error']('errCode=' + fie['errCode'] + '  errMsg=' + fie['errMsg']), gfikj(), kmljih['event']('error');
      }), this['_sound']['src'] = gkfhi, kmljih = this);
    }, uxvwyt['play'] = function (hfedc, ghcfe) {
      void 0x0 === hfedc && (hfedc = 0x0), void 0x0 === ghcfe && (ghcfe = 0x0), (fdab = this['url'] == nrsopq['_tMusic'] ? (jkigl['_musicAudio'] || (jkigl['_musicAudio'] = jkigl['_createSound']()), jkigl['_musicAudio']) : jkigl['_createSound']())['src'] = this['url'];var fdab = new oljkm(fdab);return fdab['url'] = this['url'], fdab['loops'] = ghcfe, fdab['startTime'] = hfedc, fdab['play'](), nrsopq['addChannel'](fdab), fdab;
    }, uxvwyt['dispose'] = function () {
      var bcefg = jkigl['_audioCache'][this['url']];bcefg && (bcefg['src'] = '', delete jkigl['_audioCache'][this['url']]);
    }, y_z1(0x0, uxvwyt, 'duration', function () {
      return this['_sound']['duration'];
    }), jkigl['_createSound'] = function () {
      return jkigl['_id']++, dfebcg['window']['wx']['createInnerAudioContext']();
    }, jkigl['_musicAudio'] = null, jkigl['_id'] = 0x0, jkigl['_audioCache'] = {}, jkigl['_null'] = void 0x0, jkigl;
  }(),
      oljkm = function () {
    function okjlnm(jigeh) {
      this['_audio'] = null, this['_onEnd'] = null, okjlnm['__super']['call'](this), this['_audio'] = jigeh, this['_onEnd'] = cdeghf['bind'](this['__onEnd'], this), jigeh['onEnded'](this['_onEnd']);
    }igdf(okjlnm, 'laya.wx.mini.MiniSoundChannel', jlon);var ifdeg = okjlnm['prototype'];return ifdeg['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && ($03['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ifdeg['__onNull'] = function () {}, ifdeg['play'] = function () {
      this['isStopped'] = !0x1, nrsopq['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, ifdeg['stop'] = function () {
      if (this['isStopped'] = !0x0, nrsopq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != okjlnm['_null']) this['_audio']['onEnded'](okjlnm['_null']);else try {
          this['_audio']['onEnded'](null), okjlnm['_null'] = null;
        } catch (otpsq) {
          console['warn']('[wxmini] stop:' + otpsq), this['_audio']['onEnded'](cdeghf['bind'](this['__onNull'], this)), okjlnm['_null'] = cdeghf['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, ifdeg['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, ifdeg['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, nrsopq['addChannel'](this), this['_audio']['play']());
    }, y_z1(0x0, ifdeg, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), y_z1(0x0, ifdeg, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), y_z1(0x0, ifdeg, 'volume', function () {
      return 0x1;
    }, function (oqplnm) {}), okjlnm['_null'] = void 0x0, okjlnm;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (nqpoml, becfa) {
  'use strict';

  for (var mnjlo in Object['defineProperty'](becfa, '__esModule', { 'value': !0x0 }), Laya) {
    var tsqurv = Laya[mnjlo];tsqurv && tsqurv['__isclass'] && (becfa[mnjlo] = tsqurv);
  }
});