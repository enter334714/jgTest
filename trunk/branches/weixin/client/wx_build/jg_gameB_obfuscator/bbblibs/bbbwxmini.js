var _ = wx.y$;
!function (qnpm, gkjhif) {
  gkjhif['un'], gkjhif['uns'];var hikjm = gkjhif['static'],
      uxvwz = gkjhif['class'],
      _w$xyz = gkjhif['getset'];gkjhif['__newvec'];var oplmq = laya['utils']['Browser'],
      uvtsrw = (laya['events']['Event'], laya['events']['EventDispatcher']),
      y0$1z_ = laya['resource']['HTMLImage'],
      ponsqr = laya['utils']['Handler'],
      mjni = laya['display']['Input'],
      sotq = laya['net']['Loader'];laya['maths']['Matrix'];var mhjl = laya['renders']['Render'],
      beafdc = laya['utils']['RunDriver'];laya['media']['Sound'];var psrqt = laya['media']['SoundChannel'],
      lpomq = laya['media']['SoundManager'],
      aebf = (laya['display']['Stage'], laya['net']['URL']),
      vtuxy = laya['utils']['Utils'],
      imjlk = (uxvwz(fhedc, 'laya.wx.mini.MiniAdpter'), fhedc['getJson'] = function (lknpmo) {
    return JSON['parse'](lknpmo);
  }, fhedc['init'] = function (jihgl, gcdh) {
    void 0x0 === jihgl && (jihgl = !0x1), void 0x0 === gcdh && (gcdh = !0x1), fhedc['_inited'] || (fhedc['window'] = qnpm)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (fhedc['_inited'] = !0x0, fhedc['isZiYu'] = gcdh, fhedc['isPosMsgYu'] = jihgl, fhedc['EnvConfig'] = {}, fhedc['isZiYu'] || (eghfdi['setNativeFileDir']('/layaairGame'), eghfdi['existDir'](eghfdi['fileNativeDir'], ponsqr['create'](fhedc, fhedc['onMkdirCallBack']))), fhedc['window']['focus'] = function () {}, gkjhif['getUrlPath'] = function () {}, fhedc['window']['logtime'] = function (sutwvr) {}, fhedc['window']['alertTimeLog'] = function (qpsrut) {}, fhedc['window']['resetShareInfo'] = function () {}, fhedc['window']['CanvasRenderingContext2D'] = function () {}, fhedc['window']['CanvasRenderingContext2D']['prototype'] = fhedc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fhedc['window']['document']['body']['appendChild'] = function () {}, fhedc['EnvConfig']['pixelRatioInt'] = 0x0, beafdc['getPixelRatio'] = fhedc['pixelRatio'], fhedc['_preCreateElement'] = oplmq['createElement'], oplmq['createElement'] = fhedc['createElement'], beafdc['createShaderCondition'] = fhedc['createShaderCondition'], vtuxy['parseXMLFromString'] = fhedc['parseXMLFromString'], mjni['_createInputElement'] = roptq['_createInputElement'], fhedc['EnvConfig']['load'] = sotq['prototype']['load'], sotq['prototype']['load'] = fikhj['prototype']['load'], fhedc['isZiYu'] && jihgl && wx['onMessage'](function (cegdfh) {
      cegdfh['isLoad'] && (eghfdi['ziyuFileData'][cegdfh['url']] = cegdfh['data']);
    }));
  }, fhedc['onMkdirCallBack'] = function ($y01, edafc) {
    $y01 || (eghfdi['filesListObj'] = JSON['parse'](edafc['data']));
  }, fhedc['pixelRatio'] = function () {
    if (!fhedc['EnvConfig']['pixelRatioInt']) try {
      var zy_10 = wx['getSystemInfoSync']();return fhedc['EnvConfig']['pixelRatioInt'] = zy_10['pixelRatio'], zy_10['pixelRatio'];
    } catch (okjml) {}return fhedc['EnvConfig']['pixelRatioInt'];
  }, fhedc['createElement'] = function (mlnikj) {
    var rvw;if ('canvas' == mlnikj) return 0x1 == fhedc['idx'] ? fhedc['isZiYu'] ? (rvw = sharedCanvas)['style'] = {} : rvw = qnpm['canvas'] : rvw = qnpm['wx']['createCanvas'](), fhedc['idx']++, rvw;if ('textarea' == mlnikj || 'input' == mlnikj) return fhedc['onCreateInput'](mlnikj);if ('div' != mlnikj) return fhedc['_preCreateElement'](mlnikj);return mlnikj = fhedc['_preCreateElement'](mlnikj), (mlnikj['contains'] = function (ecdgf) {
      return null;
    }, mlnikj['removeChild'] = function (oqptsr) {}, mlnikj);
  }, fhedc['onCreateInput'] = function ($z0yx) {
    return $z0yx = fhedc['_preCreateElement']($z0yx), ($z0yx['focus'] = roptq['wxinputFocus'], $z0yx['blur'] = roptq['wxinputblur'], $z0yx['style'] = {}, $z0yx['value'] = 0x0, $z0yx['parentElement'] = {}, $z0yx['placeholder'] = {}, $z0yx['type'] = {}, $z0yx['setColor'] = function (rusqvt) {}, $z0yx['setType'] = function (rsqvtu) {}, $z0yx['setFontFace'] = function (dgcfh) {}, $z0yx['addEventListener'] = function (hjgl) {}, $z0yx['contains'] = function (hjkfgi) {
      return null;
    }, $z0yx['removeChild'] = function (_1$y0) {}, $z0yx);
  }, fhedc['createShaderCondition'] = function (mnklij) {
    var nlqmop = this;return function () {
      return nlqmop[mnklij['replace']('this.', '')];
    };
  }, fhedc['EnvConfig'] = null, fhedc['window'] = null, fhedc['_preCreateElement'] = null, fhedc['_inited'] = !0x1, fhedc['wxRequest'] = null, fhedc['systemInfo'] = null, fhedc['version'] = '0.0.1', fhedc['isZiYu'] = !0x1, fhedc['isPosMsgYu'] = !0x1, fhedc['parseXMLFromString'] = function ($02_31) {
    var gjilhk;$02_31 = $02_31['replace'](/>\s+</g, '><');try {
      gjilhk = new qnpm['Parser']['DOMParser']()['parseFromString']($02_31, 'text/xml');
    } catch (wstvu) {
      throw '需要引入xml解析库文件';
    }return gjilhk;
  }, fhedc['idx'] = 0x1, fhedc);function fhedc() {}uxvwz(nqropm, 'laya.wx.mini.MiniImage'), nqropm['prototype']['_loadImage'] = function ($_xz0y) {
    var pnoql = !0x1;-0x1 == $_xz0y['indexOf']('layaNativeDir/') && (pnoql = !0x0, $_xz0y = aebf['formatURL']($_xz0y)), eghfdi['getFileInfo']($_xz0y) ? nqropm['onCreateImage']($_xz0y, this, !pnoql) : -0x1 != $_xz0y['indexOf']('http://') || -0x1 != $_xz0y['indexOf']('https://') ? eghfdi['downImg']($_xz0y, new ponsqr(nqropm, nqropm['onDownImgCallBack'], [$_xz0y, this]), $_xz0y) : nqropm['onCreateImage']($_xz0y, this, !0x0);
  }, nqropm['onDownImgCallBack'] = function (fbgc, pnmk, lopkmn) {
    lopkmn ? pnmk['onError'](null) : nqropm['onCreateImage'](fbgc, pnmk);
  }, nqropm['onCreateImage'] = function (qrsup, bdefg, edhgif) {
    var nqomp, fbdceg;function cfdhge() {
      fbdceg['onload'] = null, fbdceg['onerror'] = null, delete bdefg['imgCache'][qrsup];
    }nqomp = (edhgif = void 0x0 === edhgif ? !0x1 : edhgif) ? qrsup : (nmpor = eghfdi['getFileInfo'](qrsup)['md5'], eghfdi['getFileNativePath'](nmpor)), null == bdefg['imgCache'] && (bdefg['imgCache'] = {}), edhgif = function () {
      cfdhge(), bdefg['onLoaded'](fbdceg);
    };var nmpor = function () {
      cfdhge(), bdefg['event']('error', 'Load image failed');
    };'nativeimage' == bdefg['_type'] ? ((fbdceg = new oplmq['window']['Image']())['crossOrigin'] = '', fbdceg['onload'] = edhgif, fbdceg['onerror'] = nmpor, fbdceg['src'] = nqomp, bdefg['imgCache'][qrsup] = fbdceg) : new y0$1z_['create'](nqomp, { 'onload': edhgif, 'onerror': nmpor, 'onCreate': function (gecdb) {
        fbdceg = gecdb, bdefg['imgCache'][qrsup] = gecdb;
      } });
  };function nqropm() {}var roptq = (uxvwz(wtyuv, 'laya.wx.mini.MiniInput'), wtyuv['_createInputElement'] = function () {
    mjni['_initInput'](mjni['area'] = oplmq['createElement']('textarea')), mjni['_initInput'](mjni['input'] = oplmq['createElement']('input')), mjni['inputContainer'] = oplmq['createElement']('div'), mjni['inputContainer']['style']['position'] = 'absolute', mjni['inputContainer']['style']['zIndex'] = 0x186a0, oplmq['container']['appendChild'](mjni['inputContainer']), mjni['inputContainer']['setPos'] = function (eidfgh, tsrpq) {
      mjni['inputContainer']['style']['left'] = eidfgh + 'px', mjni['inputContainer']['style']['top'] = tsrpq + 'px';
    }, gkjhif['stage']['on']('resize', null, wtyuv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fe) {
      qnpm['dispatchEvent'] && qnpm['dispatchEvent']('resize');
    }), lpomq['_soundClass'] = nprqom, lpomq['_musicClass'] = nprqom;
  }, wtyuv['_onStageResize'] = function () {
    gkjhif['stage']['_canvasTransform']['identity']()['scale'](oplmq['width'] / mhjl['canvas']['width'] / beafdc['getPixelRatio'](), oplmq['height'] / mhjl['canvas']['height'] / beafdc['getPixelRatio']());
  }, wtyuv['wxinputFocus'] = function (hki) {
    var njml = mjni['inputElement']['target'];njml && !njml['editable'] || (imjlk['window']['wx']['offKeyboardConfirm'](), imjlk['window']['wx']['offKeyboardInput'](), imjlk['window']['wx']['showKeyboard']({ 'defaultValue': njml['text'], 'maxLength': njml['maxChars'], 'multiple': njml['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (fhedig) {}, 'fail': function (ihjef) {} }), imjlk['window']['wx']['onKeyboardConfirm'](function (olnkp) {
      olnkp = olnkp ? olnkp['value'] : '', (njml['text'] = olnkp, njml['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), imjlk['window']['wx']['onKeyboardInput'](function (wrtsu) {
      wrtsu = wrtsu ? wrtsu['value'] : '', njml['multiline'] || -0x1 == wrtsu['indexOf']('\x0a') ? (njml['text'] = wrtsu, njml['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, wtyuv['inputEnter'] = function () {
    mjni['inputElement']['target']['focus'] = !0x1;
  }, wtyuv['wxinputblur'] = function () {
    wtyuv['hideKeyboard']();
  }, wtyuv['hideKeyboard'] = function () {
    imjlk['window']['wx']['offKeyboardConfirm'](), imjlk['window']['wx']['offKeyboardInput'](), imjlk['window']['wx']['hideKeyboard']({ 'success': function (pmqonl) {
        console['log']('隐藏键盘');
      }, 'fail': function (oplmqn) {
        console['log']('隐藏键盘出错:' + (oplmqn ? oplmqn['errMsg'] : ''));
      } });
  }, wtyuv);function wtyuv() {}var fikhj = function () {
    function qvrtsu() {}uxvwz(qvrtsu, 'laya.wx.mini.MiniLoader');var cfbde = qvrtsu['prototype'];return cfbde['load'] = function (tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw) {
      void 0x0 === rutswv && (rutswv = !0x0), void 0x0 === uxvstw && (uxvstw = !0x1);var kljon = this;0x0 === (kljon['_url'] = tuwvsr)['indexOf']('data:image') ? kljon['_type'] = _yz$0x = 'image' : kljon['_type'] = _yz$0x = _yz$0x || kljon['getTypeFromUrl'](tuwvsr), kljon['_cache'] = rutswv, kljon['_data'] = null;var vuxw = 'ascii';-0x1 != tuwvsr['indexOf']('.fnt') ? vuxw = 'utf8' : 'arraybuffer' == _yz$0x && (vuxw = '');var y$z0x_ = vtuxy['getFileExtension'](tuwvsr);if (-0x1 != qvrtsu['_fileTypeArr']['indexOf'](y$z0x_)) imjlk['EnvConfig']['load']['call'](this, tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw);else {
        if (eghfdi['getFileInfo'](tuwvsr)) imjlk['EnvConfig']['load']['call'](this, tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw);else {
          if (-0x1 != tuwvsr['indexOf']('layaNativeDir/')) {
            if (imjlk['isZiYu']) {
              var tspurq = eghfdi['ziyuFileData'][tuwvsr];return void kljon['onLoaded'](tspurq);
            }return cosnole['log']('read read'), void eghfdi['read'](tuwvsr, vuxw, new ponsqr(qvrtsu, qvrtsu['onReadNativeCallBack'], [vuxw, tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw, kljon]));
          }tspurq = '' == aebf['rootPath'] ? tuwvsr : tuwvsr['split'](aebf['rootPath'])[0x0], -0x1 != tuwvsr['indexOf']('http://') || -0x1 != tuwvsr['indexOf']('https://') ? imjlk['EnvConfig']['load']['call'](kljon, tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw) : eghfdi['readFile'](tspurq, vuxw, new ponsqr(qvrtsu, qvrtsu['onReadNativeCallBack'], [vuxw, tuwvsr, _yz$0x, rutswv, yz01_$, uxvstw, kljon]), tuwvsr);
        }
      }
    }, cfbde['resMgrLoad'] = function (fige, y1z$0_, yxw, rsopt, nmoqr, promn, srwv) {
      void 0x0 === yxw && (yxw = 0x0), void 0x0 === rsopt && (rsopt = !0x1), void 0x0 === nmoqr && (nmoqr = !0x1), void 0x0 === promn && (promn = 0x0), void 0x0 === srwv && (srwv = 0x3), -0x1 != fige['indexOf']('mpack') && console['log']('=============resMgrLoad url:', fige), imjlk['EnvConfig']['resMgrLoad'](fige, (hdfec, z0y_$x, $0yz_) => {
        qvrtsu['prototype']['resMgrLoadCallBack'](hdfec, z0y_$x, $0yz_, y1z$0_);
      }, yxw, rsopt, nmoqr, promn, srwv);
    }, cfbde['resMgrLoadCallBack'] = function (xy_w$z, injmkl, mpqrn, qur) {
      console['log']('buff:::', xy_w$z, mpqrn, eghfdi['fileNativeDir'] + '///' + eghfdi['fileListName']), qur(xy_w$z, injmkl, mpqrn);
    }, cfbde['clearRes'] = function (sorn, hjlikm) {
      this['clearRes'](sorn, hjlikm = void 0x0 === hjlikm ? !0x1 : hjlikm), hjlikm = eghfdi['getFileInfo'](sorn), !hjlikm || -0x1 == sorn['indexOf']('http://') && -0x1 == sorn['indexOf']('https://') || (hjlikm = hjlikm['md5'], hjlikm = eghfdi['getFileNativePath'](hjlikm), eghfdi['remove'](hjlikm));
    }, qvrtsu['onReadNativeCallBack'] = function (fghje, ghcfde, suqvrt, mrnop, caef, gchedf, ihgfd, zxyw_$, ijhfkg) {
      void 0x0 === mrnop && (mrnop = !0x0), void 0x0 === gchedf && (gchedf = !0x1), (zxyw_$ = void 0x0 === zxyw_$ ? 0x0 : zxyw_$) ? 0x1 == zxyw_$ && imjlk['EnvConfig']['load']['call'](ihgfd, ghcfde, suqvrt, mrnop, caef, gchedf) : (ijhfkg = 'json' == suqvrt || 'atlas' == suqvrt ? imjlk['getJson'](ijhfkg['data']) : 'xml' == suqvrt ? vtuxy['parseXMLFromString'](ijhfkg['data']) : ijhfkg['data'], ihgfd['onLoaded'](ijhfkg), !imjlk['isZiYu'] && imjlk['isPosMsgYu'] && 'arraybuffer' != suqvrt && wx['postMessage']({ 'url': ghcfde, 'data': ijhfkg, 'isLoad': !0x0 }));
    }, hikjm(qvrtsu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qvrtsu;
  }(),
      eghfdi = (uxvwz(quvrt, 'laya.wx.mini.MiniFileMgr', uvtsrw), quvrt['isLoadFile'] = function (ywvxz) {
    return -0x1 != quvrt['_fileTypeArr']['indexOf'](ywvxz);
  }, quvrt['getFileInfo'] = function (gdihef) {
    return gdihef = gdihef['split']('?')[0x0], gdihef = quvrt['filesListObj'][gdihef], null == gdihef ? null : gdihef;
  }, quvrt['onFileUpdate'] = function (w_zy, jilm) {
    var cdeh = w_zy['split']('/');w_zy = cdeh[cdeh['length'] - 0x1], cdeh = quvrt['getFileInfo'](jilm), null == cdeh ? quvrt['onSaveFile'](jilm, w_zy) : cdeh['readyUrl'] != jilm && quvrt['remove'](w_zy, jilm);
  }, quvrt['exits'] = function (nmoklp, z1$_y0) {
    nmoklp = quvrt['getFileNativePath'](nmoklp), quvrt['fs']['getFileInfo']({ 'filePath': nmoklp, 'success': function (utsxw) {
        null != z1$_y0 && z1$_y0['runWith']([0x0, utsxw]);
      }, 'fail': function (prqom) {
        null != z1$_y0 && z1$_y0['runWith']([0x1, prqom]);
      } });
  }, quvrt['read'] = function (dacbfe, _yz$1, ons, qsrt) {
    void 0x0 === _yz$1 && (_yz$1 = 'ascill'), dacbfe = '' != (qsrt = void 0x0 === qsrt ? '' : qsrt) ? quvrt['getFileNativePath'](dacbfe) : dacbfe, quvrt['fs']['readFile']({ 'filePath': dacbfe, 'encoding': _yz$1, 'success': function (romnq) {
        null != ons && ons['runWith']([0x0, romnq]);
      }, 'fail': function (fadecb) {
        fadecb && '' != qsrt ? quvrt['down'](qsrt, _yz$1, ons, qsrt) : null != ons && ons['runWith']([0x1]);
      } });
  }, quvrt['readNativeFile'] = function (z_$y10, kifg) {
    quvrt['fs']['readFile']({ 'filePath': z_$y10, 'encoding': '', 'success': function (rsvtqu) {
        null != kifg && kifg['runWith']([0x0]);
      }, 'fail': function (wuzvyx) {
        null != kifg && kifg['runWith']([0x1]);
      } });
  }, quvrt['down'] = function (kmnlo, bdf, dfegc, hfegi) {
    void 0x0 === bdf && (bdf = 'ascill'), void 0x0 === hfegi && (hfegi = '');var uxwyt = quvrt['getFileNativePath'](hfegi);quvrt['wxdown']({ 'url': kmnlo, 'filePath': uxwyt, 'success': function (hdgfec) {
        0xc8 === hdgfec['statusCode'] && quvrt['readFile'](hdgfec['filePath'], bdf, dfegc, hfegi);
      }, 'fail': function (jihkgf) {
        null != dfegc && dfegc['runWith']([0x1, jihkgf]);
      } })['onProgressUpdate'](function (utwr) {
      null != dfegc && dfegc['runWith']([0x2, utwr['progress']]);
    });
  }, quvrt['readFile'] = function (ghfei, yz_$1, psotqr, vxtsu) {
    void 0x0 === vxtsu && (vxtsu = ''), quvrt['fs']['readFile']({ 'filePath': ghfei, 'encoding': yz_$1 = void 0x0 === yz_$1 ? 'ascill' : yz_$1, 'success': function (qpmn) {
        -0x1 == ghfei['indexOf']('http://') && -0x1 == ghfei['indexOf']('https://') || quvrt['onFileUpdate'](ghfei, vxtsu), null != psotqr && psotqr['runWith']([0x0, qpmn]);
      }, 'fail': function (ghdeif) {
        ghdeif && null != psotqr && psotqr['runWith']([0x1, ghdeif]);
      } });
  }, quvrt['downImg'] = function (osrnq, mjlk, kligj) {
    void 0x0 === kligj && (kligj = ''), quvrt['wxdown']({ 'url': osrnq, 'success': function (cefgdh) {
        0xc8 === cefgdh['statusCode'] && quvrt['copyFile'](cefgdh['tempFilePath'], kligj, mjlk);
      }, 'fail': function (vurqst) {
        null != mjlk && mjlk['runWith']([0x1, vurqst]);
      } });
  }, quvrt['copyFile'] = function (onmlpq, gefbc, vytwu) {
    var eghcfd = onmlpq['split']('/'),
        hiefd = eghcfd[eghcfd['length'] - 0x1];gefbc['split']('?')[0x0];var norpmq = quvrt['getFileInfo'](gefbc);eghcfd = quvrt['getFileNativePath'](hiefd), quvrt['fs']['copyFile']({ 'srcPath': onmlpq, 'destPath': eghcfd, 'success': function (mnjk) {
        norpmq ? norpmq['readyUrl'] != gefbc && quvrt['remove'](hiefd, gefbc, vytwu) : (quvrt['onSaveFile'](gefbc, hiefd), null != vytwu && vytwu['runWith']([0x0]));
      }, 'fail': function (qsnpro) {
        null != vytwu && vytwu['runWith']([0x1, qsnpro]);
      } });
  }, quvrt['getFileNativePath'] = function (srut) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + srut;
  }, quvrt['remove'] = function (ywzv$, vsxtu, $_20z) {
    void 0x0 === vsxtu && (vsxtu = '');var yw$xvz = quvrt['getFileInfo'](vsxtu),
        gefidh = quvrt['getFileNativePath'](yw$xvz['md5']);gkjhif['loader']['clearRes'](yw$xvz['readyUrl']), quvrt['fs']['unlink']({ 'filePath': gefidh, 'success': function (fdieg) {
        '' != vsxtu && quvrt['onSaveFile'](vsxtu, ywzv$), null != $_20z && $_20z['runWith']([0x0]);
      }, 'fail': function (zx$v) {} });
  }, quvrt['onSaveFile'] = function (kjimln, hlgik) {
    var xvsuwt = kjimln['split']('?')[0x0];quvrt['filesListObj'][xvsuwt] = { 'md5': hlgik, 'readyUrl': kjimln }, quvrt['fs']['writeFile']({ 'filePath': quvrt['fileNativeDir'] + '/' + quvrt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](quvrt['filesListObj']), 'success': function (hkijl) {
        console['log']('写入测试测试成功：', hkijl);
      }, 'fail': function (orqtps) {
        console['log']('写入测试测试失败：', orqtps);
      } });
  }, quvrt['existDir'] = function (qlmpo, wtusxv) {
    quvrt['fs']['mkdir']({ 'dirPath': qlmpo, 'success': function (w$yz_x) {
        null != wtusxv && wtusxv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (fdacb) {
        -0x1 != fdacb['errMsg']['indexOf']('file already exists') ? quvrt['readSync'](quvrt['fileListName'], 'utf8', wtusxv) : null != wtusxv && wtusxv['runWith']([0x1, fdacb]);
      } });
  }, quvrt['readSync'] = function (wsruvt, _024, twur, rqsvt) {
    void 0x0 === _024 && (_024 = 'ascill'), void 0x0 === rqsvt && (rqsvt = ''), wsruvt = quvrt['getFileNativePath'](wsruvt);var jehifg;try {
      jehifg = quvrt['fs']['readFileSync'](wsruvt), null != twur && twur['runWith']([0x0, { 'data': jehifg }]);
    } catch (_$xwy) {
      null != twur && twur['runWith']([0x1]);
    }
  }, quvrt['readCache'] = function () {}, quvrt['writeCache'] = function (ghdce) {
    var lqp = readyUrl['split']('?')[0x0];quvrt['filesListObj'][lqp] = { 'md5': md5Name, 'readyUrl': readyUrl }, quvrt['fs']['writeFile']({ 'filePath': quvrt['fileNativeDir'] + '/' + quvrt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](quvrt['filesListObj']), 'success': function (lgkijh) {}, 'fail': function (qprust) {} });
  }, quvrt['setNativeFileDir'] = function (wuzxvy) {
    quvrt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wuzxvy;
  }, quvrt['filesListObj'] = {}, quvrt['fileNativeDir'] = null, quvrt['fileListName'] = 'layaairfiles.txt', quvrt['ziyuFileData'] = {}, hikjm(quvrt, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), quvrt);function quvrt() {
    quvrt['__super']['call'](this);
  }var nprqom = function () {
    function _z2$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, _z2$['__super']['call'](this), this['_sound'] = _z2$['_createSound']();
    }uxvwz(_z2$, 'laya.wx.mini.MiniSound', uvtsrw);var fgideh = _z2$['prototype'];return fgideh['load'] = function (ljnimk) {
      var z1$02_ = this,
          egfcbd;function fdhcge() {
        if (null != _z2$['_null']) z1$02_['_sound']['onCanplay'](_z2$['_null']), z1$02_['_sound']['onError'](_z2$['_null']);else try {
          z1$02_['_sound']['onCanplay'](null), z1$02_['_sound']['onError'](null), _z2$['_null'] = null;
        } catch (tvxsuw) {
          console['warn']('[wxmini] _clearSound:' + tvxsuw), z1$02_['_sound']['onCanplay'](qorpns), z1$02_['_sound']['onError'](qorpns), _z2$['_null'] = qorpns;
        }
      }function qorpns() {}ljnimk = aebf['formatURL'](ljnimk), this['url'] = ljnimk, _z2$['_audioCache'][ljnimk] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        fdhcge(), egfcbd['loaded'] = !0x0, egfcbd['event']('complete'), _z2$['_audioCache'][egfcbd['url']] = egfcbd;
      }), this['_sound']['onError'](function (prtsu) {
        console['error']('errCode=' + prtsu['errCode'] + '  errMsg=' + prtsu['errMsg']), fdhcge(), egfcbd['event']('error');
      }), this['_sound']['src'] = ljnimk, egfcbd = this);
    }, fgideh['play'] = function (xzwuy, qmpnlo) {
      void 0x0 === xzwuy && (xzwuy = 0x0), void 0x0 === qmpnlo && (qmpnlo = 0x0), (plomkn = this['url'] == lpomq['_tMusic'] ? (_z2$['_musicAudio'] || (_z2$['_musicAudio'] = _z2$['_createSound']()), _z2$['_musicAudio']) : _z2$['_createSound']())['src'] = this['url'];var plomkn = new fgceh(plomkn);return plomkn['url'] = this['url'], plomkn['loops'] = qmpnlo, plomkn['startTime'] = xzwuy, plomkn['play'](), lpomq['addChannel'](plomkn), plomkn;
    }, fgideh['dispose'] = function () {
      var gcdefh = _z2$['_audioCache'][this['url']];gcdefh && (gcdefh['src'] = '', delete _z2$['_audioCache'][this['url']]);
    }, _w$xyz(0x0, fgideh, 'duration', function () {
      return this['_sound']['duration'];
    }), _z2$['_createSound'] = function () {
      return _z2$['_id']++, imjlk['window']['wx']['createInnerAudioContext']();
    }, _z2$['_musicAudio'] = null, _z2$['_id'] = 0x0, _z2$['_audioCache'] = {}, _z2$['_null'] = void 0x0, _z2$;
  }(),
      fgceh = function () {
    function vwz$(w$xzy) {
      this['_audio'] = null, this['_onEnd'] = null, vwz$['__super']['call'](this), this['_audio'] = w$xzy, this['_onEnd'] = vtuxy['bind'](this['__onEnd'], this), w$xzy['onEnded'](this['_onEnd']);
    }uxvwz(vwz$, 'laya.wx.mini.MiniSoundChannel', psrqt);var rvustq = vwz$['prototype'];return rvustq['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (gkjhif['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rvustq['__onNull'] = function () {}, rvustq['play'] = function () {
      this['isStopped'] = !0x1, lpomq['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, rvustq['stop'] = function () {
      if (this['isStopped'] = !0x0, lpomq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != vwz$['_null']) this['_audio']['onEnded'](vwz$['_null']);else try {
          this['_audio']['onEnded'](null), vwz$['_null'] = null;
        } catch (rons) {
          console['warn']('[wxmini] stop:' + rons), this['_audio']['onEnded'](vtuxy['bind'](this['__onNull'], this)), vwz$['_null'] = vtuxy['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, rvustq['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, rvustq['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, lpomq['addChannel'](this), this['_audio']['play']());
    }, _w$xyz(0x0, rvustq, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), _w$xyz(0x0, rvustq, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), _w$xyz(0x0, rvustq, 'volume', function () {
      return 0x1;
    }, function (imknj) {}), vwz$['_null'] = void 0x0, vwz$;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (mkn, zw_y$x) {
  'use strict';

  for (var vwsxu in Object['defineProperty'](zw_y$x, '__esModule', { 'value': !0x0 }), Laya) {
    var xyz$w_ = Laya[vwsxu];xyz$w_ && xyz$w_['__isclass'] && (zw_y$x[vwsxu] = xyz$w_);
  }
});