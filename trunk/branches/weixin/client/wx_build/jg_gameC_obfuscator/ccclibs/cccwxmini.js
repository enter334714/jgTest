var p = wx.$h;
!function (lonmqp, tsoqpr) {
  tsoqpr['un'], tsoqpr['uns'];var ywv = tsoqpr['static'],
      ihklj = tsoqpr['class'],
      qstpor = tsoqpr['getset'];tsoqpr['__newvec'];var ljigkh = laya['utils']['Browser'],
      giefjh = (laya['events']['Event'], laya['events']['EventDispatcher']),
      edbac = laya['resource']['HTMLImage'],
      hdcgfe = laya['utils']['Handler'],
      wrsqtv = laya['display']['Input'],
      kmlnop = laya['net']['Loader'];laya['maths']['Matrix'];var dgchf = laya['renders']['Render'],
      nosprq = laya['utils']['RunDriver'];laya['media']['Sound'];var nkmplo = laya['media']['SoundChannel'],
      glihk = laya['media']['SoundManager'],
      tsrpq = (laya['display']['Stage'], laya['net']['URL']),
      mopqnl = laya['utils']['Utils'],
      z_01y = (ihklj(vxtwy, 'laya.wx.mini.MiniAdpter'), vxtwy['getJson'] = function (bcaf) {
    return JSON['parse'](bcaf);
  }, vxtwy['init'] = function (rtqswv, fjeih) {
    void 0x0 === rtqswv && (rtqswv = !0x1), void 0x0 === fjeih && (fjeih = !0x1), vxtwy['_inited'] || (vxtwy['window'] = lonmqp)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (vxtwy['_inited'] = !0x0, vxtwy['isZiYu'] = fjeih, vxtwy['isPosMsgYu'] = rtqswv, vxtwy['EnvConfig'] = {}, vxtwy['isZiYu'] || (_zx0y$['setNativeFileDir']('/layaairGame'), _zx0y$['existDir'](_zx0y$['fileNativeDir'], hdcgfe['create'](vxtwy, vxtwy['onMkdirCallBack']))), vxtwy['window']['focus'] = function () {}, tsoqpr['getUrlPath'] = function () {}, vxtwy['window']['logtime'] = function (prvtqs) {}, vxtwy['window']['alertTimeLog'] = function (monqpr) {}, vxtwy['window']['resetShareInfo'] = function () {}, vxtwy['window']['CanvasRenderingContext2D'] = function () {}, vxtwy['window']['CanvasRenderingContext2D']['prototype'] = vxtwy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vxtwy['window']['document']['body']['appendChild'] = function () {}, vxtwy['EnvConfig']['pixelRatioInt'] = 0x0, nosprq['getPixelRatio'] = vxtwy['pixelRatio'], vxtwy['_preCreateElement'] = ljigkh['createElement'], ljigkh['createElement'] = vxtwy['createElement'], nosprq['createShaderCondition'] = vxtwy['createShaderCondition'], mopqnl['parseXMLFromString'] = vxtwy['parseXMLFromString'], wrsqtv['_createInputElement'] = efgjhi['_createInputElement'], vxtwy['EnvConfig']['load'] = kmlnop['prototype']['load'], kmlnop['prototype']['load'] = vtwsr['prototype']['load'], vxtwy['isZiYu'] && rtqswv && wx['onMessage'](function (nqolm) {
      nqolm['isLoad'] && (_zx0y$['ziyuFileData'][nqolm['url']] = nqolm['data']);
    }));
  }, vxtwy['onMkdirCallBack'] = function (olqmn, twyvxz) {
    olqmn || (_zx0y$['filesListObj'] = JSON['parse'](twyvxz['data']));
  }, vxtwy['pixelRatio'] = function () {
    if (!vxtwy['EnvConfig']['pixelRatioInt']) try {
      var hlij = wx['getSystemInfoSync']();return vxtwy['EnvConfig']['pixelRatioInt'] = hlij['pixelRatio'], hlij['pixelRatio'];
    } catch (yxw$_) {}return vxtwy['EnvConfig']['pixelRatioInt'];
  }, vxtwy['createElement'] = function (x$zyw_) {
    var $xwv;if ('canvas' == x$zyw_) return 0x1 == vxtwy['idx'] ? vxtwy['isZiYu'] ? ($xwv = sharedCanvas)['style'] = {} : $xwv = lonmqp['canvas'] : $xwv = lonmqp['wx']['createCanvas'](), vxtwy['idx']++, $xwv;if ('textarea' == x$zyw_ || 'input' == x$zyw_) return vxtwy['onCreateInput'](x$zyw_);if ('div' != x$zyw_) return vxtwy['_preCreateElement'](x$zyw_);return x$zyw_ = vxtwy['_preCreateElement'](x$zyw_), (x$zyw_['contains'] = function (jnolk) {
      return null;
    }, x$zyw_['removeChild'] = function (rsotq) {}, x$zyw_);
  }, vxtwy['onCreateInput'] = function (idfegh) {
    return idfegh = vxtwy['_preCreateElement'](idfegh), (idfegh['focus'] = efgjhi['wxinputFocus'], idfegh['blur'] = efgjhi['wxinputblur'], idfegh['style'] = {}, idfegh['value'] = 0x0, idfegh['parentElement'] = {}, idfegh['placeholder'] = {}, idfegh['type'] = {}, idfegh['setColor'] = function (dgech) {}, idfegh['setType'] = function (gehj) {}, idfegh['setFontFace'] = function (jgiehf) {}, idfegh['addEventListener'] = function (y$1z_) {}, idfegh['contains'] = function (yx_0z) {
      return null;
    }, idfegh['removeChild'] = function (abcde) {}, idfegh);
  }, vxtwy['createShaderCondition'] = function (yvtxw) {
    var hgkijf = this;return function () {
      return hgkijf[yvtxw['replace']('this.', '')];
    };
  }, vxtwy['EnvConfig'] = null, vxtwy['window'] = null, vxtwy['_preCreateElement'] = null, vxtwy['_inited'] = !0x1, vxtwy['wxRequest'] = null, vxtwy['systemInfo'] = null, vxtwy['version'] = '0.0.1', vxtwy['isZiYu'] = !0x1, vxtwy['isPosMsgYu'] = !0x1, vxtwy['parseXMLFromString'] = function (gfihj) {
    var iljkgh;gfihj = gfihj['replace'](/>\s+</g, '><');try {
      iljkgh = new lonmqp['Parser']['DOMParser']()['parseFromString'](gfihj, 'text/xml');
    } catch (_zyxw) {
      throw '需要引入xml解析库文件';
    }return iljkgh;
  }, vxtwy['idx'] = 0x1, vxtwy);function vxtwy() {}ihklj(qwtv, 'laya.wx.mini.MiniImage'), qwtv['prototype']['_loadImage'] = function (xzywv$) {
    var kmonp = !0x1;-0x1 == xzywv$['indexOf']('layaNativeDir/') && (kmonp = !0x0, xzywv$ = tsrpq['formatURL'](xzywv$)), _zx0y$['getFileInfo'](xzywv$) ? qwtv['onCreateImage'](xzywv$, this, !kmonp) : -0x1 != xzywv$['indexOf']('http://') || -0x1 != xzywv$['indexOf']('https://') ? _zx0y$['downImg'](xzywv$, new hdcgfe(qwtv, qwtv['onDownImgCallBack'], [xzywv$, this]), xzywv$) : qwtv['onCreateImage'](xzywv$, this, !0x0);
  }, qwtv['onDownImgCallBack'] = function (mnk, nqors, qptsor) {
    qptsor ? nqors['onError'](null) : qwtv['onCreateImage'](mnk, nqors);
  }, qwtv['onCreateImage'] = function (xrswv, rosnpq, yxw_) {
    var srqtp, npmqol;function nqrpo() {
      npmqol['onload'] = null, npmqol['onerror'] = null, delete rosnpq['imgCache'][xrswv];
    }srqtp = (yxw_ = void 0x0 === yxw_ ? !0x1 : yxw_) ? xrswv : (mkjlih = _zx0y$['getFileInfo'](xrswv)['md5'], _zx0y$['getFileNativePath'](mkjlih)), null == rosnpq['imgCache'] && (rosnpq['imgCache'] = {}), yxw_ = function () {
      nqrpo(), rosnpq['onLoaded'](npmqol);
    };var mkjlih = function () {
      nqrpo(), rosnpq['event']('error', 'Load image failed');
    };'nativeimage' == rosnpq['_type'] ? ((npmqol = new ljigkh['window']['Image']())['crossOrigin'] = '', npmqol['onload'] = yxw_, npmqol['onerror'] = mkjlih, npmqol['src'] = srqtp, rosnpq['imgCache'][xrswv] = npmqol) : new edbac['create'](srqtp, { 'onload': yxw_, 'onerror': mkjlih, 'onCreate': function (ecdbf) {
        npmqol = ecdbf, rosnpq['imgCache'][xrswv] = ecdbf;
      } });
  };function qwtv() {}var efgjhi = (ihklj(kgijfh, 'laya.wx.mini.MiniInput'), kgijfh['_createInputElement'] = function () {
    wrsqtv['_initInput'](wrsqtv['area'] = ljigkh['createElement']('textarea')), wrsqtv['_initInput'](wrsqtv['input'] = ljigkh['createElement']('input')), wrsqtv['inputContainer'] = ljigkh['createElement']('div'), wrsqtv['inputContainer']['style']['position'] = 'absolute', wrsqtv['inputContainer']['style']['zIndex'] = 0x186a0, ljigkh['container']['appendChild'](wrsqtv['inputContainer']), wrsqtv['inputContainer']['setPos'] = function (ljoknm, rotqps) {
      wrsqtv['inputContainer']['style']['left'] = ljoknm + 'px', wrsqtv['inputContainer']['style']['top'] = rotqps + 'px';
    }, tsoqpr['stage']['on']('resize', null, kgijfh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yzxw_) {
      lonmqp['dispatchEvent'] && lonmqp['dispatchEvent']('resize');
    }), glihk['_soundClass'] = qornps, glihk['_musicClass'] = qornps;
  }, kgijfh['_onStageResize'] = function () {
    tsoqpr['stage']['_canvasTransform']['identity']()['scale'](ljigkh['width'] / dgchf['canvas']['width'] / nosprq['getPixelRatio'](), ljigkh['height'] / dgchf['canvas']['height'] / nosprq['getPixelRatio']());
  }, kgijfh['wxinputFocus'] = function (jgeifh) {
    var mlpok = wrsqtv['inputElement']['target'];mlpok && !mlpok['editable'] || (z_01y['window']['wx']['offKeyboardConfirm'](), z_01y['window']['wx']['offKeyboardInput'](), z_01y['window']['wx']['showKeyboard']({ 'defaultValue': mlpok['text'], 'maxLength': mlpok['maxChars'], 'multiple': mlpok['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ljkimn) {}, 'fail': function (vtqrp) {} }), z_01y['window']['wx']['onKeyboardConfirm'](function (glihjk) {
      glihjk = glihjk ? glihjk['value'] : '', (mlpok['text'] = glihjk, mlpok['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), z_01y['window']['wx']['onKeyboardInput'](function (_z1y) {
      _z1y = _z1y ? _z1y['value'] : '', mlpok['multiline'] || -0x1 == _z1y['indexOf']('\x0a') ? (mlpok['text'] = _z1y, mlpok['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, kgijfh['inputEnter'] = function () {
    wrsqtv['inputElement']['target']['focus'] = !0x1;
  }, kgijfh['wxinputblur'] = function () {
    kgijfh['hideKeyboard']();
  }, kgijfh['hideKeyboard'] = function () {
    z_01y['window']['wx']['offKeyboardConfirm'](), z_01y['window']['wx']['offKeyboardInput'](), z_01y['window']['wx']['hideKeyboard']({ 'success': function (ljkin) {
        console['log']('隐藏键盘');
      }, 'fail': function (dehfgc) {
        console['log']('隐藏键盘出错:' + (dehfgc ? dehfgc['errMsg'] : ''));
      } });
  }, kgijfh);function kgijfh() {}var vtwsr = function () {
    function vxw$yz() {}ihklj(vxw$yz, 'laya.wx.mini.MiniLoader');var mjiklh = vxw$yz['prototype'];return mjiklh['load'] = function (nmojl, tyxvws, x$zvw, kmjno, qnoplm) {
      void 0x0 === x$zvw && (x$zvw = !0x0), void 0x0 === qnoplm && (qnoplm = !0x1);var lkonmp = this;0x0 === (lkonmp['_url'] = nmojl)['indexOf']('data:image') ? lkonmp['_type'] = tyxvws = 'image' : lkonmp['_type'] = tyxvws = tyxvws || lkonmp['getTypeFromUrl'](nmojl), lkonmp['_cache'] = x$zvw, lkonmp['_data'] = null;var gfdhce = 'ascii';-0x1 != nmojl['indexOf']('.fnt') ? gfdhce = 'utf8' : 'arraybuffer' == tyxvws && (gfdhce = '');var inmkl = mopqnl['getFileExtension'](nmojl);if (-0x1 != vxw$yz['_fileTypeArr']['indexOf'](inmkl)) z_01y['EnvConfig']['load']['call'](this, nmojl, tyxvws, x$zvw, kmjno, qnoplm);else {
        if (_zx0y$['getFileInfo'](nmojl)) z_01y['EnvConfig']['load']['call'](this, nmojl, tyxvws, x$zvw, kmjno, qnoplm);else {
          if (-0x1 != nmojl['indexOf']('layaNativeDir/')) {
            if (z_01y['isZiYu']) {
              var vxwyz = _zx0y$['ziyuFileData'][nmojl];return void lkonmp['onLoaded'](vxwyz);
            }return cosnole['log']('read read'), void _zx0y$['read'](nmojl, gfdhce, new hdcgfe(vxw$yz, vxw$yz['onReadNativeCallBack'], [gfdhce, nmojl, tyxvws, x$zvw, kmjno, qnoplm, lkonmp]));
          }vxwyz = '' == tsrpq['rootPath'] ? nmojl : nmojl['split'](tsrpq['rootPath'])[0x0], -0x1 != nmojl['indexOf']('http://') || -0x1 != nmojl['indexOf']('https://') ? z_01y['EnvConfig']['load']['call'](lkonmp, nmojl, tyxvws, x$zvw, kmjno, qnoplm) : _zx0y$['readFile'](vxwyz, gfdhce, new hdcgfe(vxw$yz, vxw$yz['onReadNativeCallBack'], [gfdhce, nmojl, tyxvws, x$zvw, kmjno, qnoplm, lkonmp]), nmojl);
        }
      }
    }, mjiklh['resMgrLoad'] = function (wyzxt, xrvwts, hcedg, rnoqs, efdgc, srptq, njokm) {
      void 0x0 === hcedg && (hcedg = 0x0), void 0x0 === rnoqs && (rnoqs = !0x1), void 0x0 === efdgc && (efdgc = !0x1), void 0x0 === srptq && (srptq = 0x0), void 0x0 === njokm && (njokm = 0x3), -0x1 != wyzxt['indexOf']('mpack') && console['log']('=============resMgrLoad url:', wyzxt), z_01y['EnvConfig']['resMgrLoad'](wyzxt, (xyz$0_, cdaefb, $x0yz_) => {
        vxw$yz['prototype']['resMgrLoadCallBack'](xyz$0_, cdaefb, $x0yz_, xrvwts);
      }, hcedg, rnoqs, efdgc, srptq, njokm);
    }, mjiklh['resMgrLoadCallBack'] = function (sqpnr, efijhg, $_z102, nkijl) {
      console['log']('buff:::', sqpnr, $_z102, _zx0y$['fileNativeDir'] + '///' + _zx0y$['fileListName']), nkijl(sqpnr, efijhg, $_z102);
    }, mjiklh['clearRes'] = function (klompn, nrqo) {
      this['clearRes'](klompn, nrqo = void 0x0 === nrqo ? !0x1 : nrqo), nrqo = _zx0y$['getFileInfo'](klompn), !nrqo || -0x1 == klompn['indexOf']('http://') && -0x1 == klompn['indexOf']('https://') || (nrqo = nrqo['md5'], nrqo = _zx0y$['getFileNativePath'](nrqo), _zx0y$['remove'](nrqo));
    }, vxw$yz['onReadNativeCallBack'] = function (ifkhg, dgf, _yz$x0, imhkj, vwrxts, bcfdea, lnqo, fhgikj, yz10$_) {
      void 0x0 === imhkj && (imhkj = !0x0), void 0x0 === bcfdea && (bcfdea = !0x1), (fhgikj = void 0x0 === fhgikj ? 0x0 : fhgikj) ? 0x1 == fhgikj && z_01y['EnvConfig']['load']['call'](lnqo, dgf, _yz$x0, imhkj, vwrxts, bcfdea) : (yz10$_ = 'json' == _yz$x0 || 'atlas' == _yz$x0 ? z_01y['getJson'](yz10$_['data']) : 'xml' == _yz$x0 ? mopqnl['parseXMLFromString'](yz10$_['data']) : yz10$_['data'], lnqo['onLoaded'](yz10$_), !z_01y['isZiYu'] && z_01y['isPosMsgYu'] && 'arraybuffer' != _yz$x0 && wx['postMessage']({ 'url': dgf, 'data': yz10$_, 'isLoad': !0x0 }));
    }, ywv(vxw$yz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vxw$yz;
  }(),
      _zx0y$ = (ihklj(rpsonq, 'laya.wx.mini.MiniFileMgr', giefjh), rpsonq['isLoadFile'] = function (vxzwy$) {
    return -0x1 != rpsonq['_fileTypeArr']['indexOf'](vxzwy$);
  }, rpsonq['getFileInfo'] = function (gjfik) {
    return gjfik = gjfik['split']('?')[0x0], gjfik = rpsonq['filesListObj'][gjfik], null == gjfik ? null : gjfik;
  }, rpsonq['onFileUpdate'] = function (rvwsx, twsrvx) {
    var gbecf = rvwsx['split']('/');rvwsx = gbecf[gbecf['length'] - 0x1], gbecf = rpsonq['getFileInfo'](twsrvx), null == gbecf ? rpsonq['onSaveFile'](twsrvx, rvwsx) : gbecf['readyUrl'] != twsrvx && rpsonq['remove'](rvwsx, twsrvx);
  }, rpsonq['exits'] = function (rwqvts, pomlqn) {
    rwqvts = rpsonq['getFileNativePath'](rwqvts), rpsonq['fs']['getFileInfo']({ 'filePath': rwqvts, 'success': function (hcefgd) {
        null != pomlqn && pomlqn['runWith']([0x0, hcefgd]);
      }, 'fail': function ($0_z21) {
        null != pomlqn && pomlqn['runWith']([0x1, $0_z21]);
      } });
  }, rpsonq['read'] = function (mk, febac, srnpo, yz1_$0) {
    void 0x0 === febac && (febac = 'ascill'), mk = '' != (yz1_$0 = void 0x0 === yz1_$0 ? '' : yz1_$0) ? rpsonq['getFileNativePath'](mk) : mk, rpsonq['fs']['readFile']({ 'filePath': mk, 'encoding': febac, 'success': function (wtvx) {
        null != srnpo && srnpo['runWith']([0x0, wtvx]);
      }, 'fail': function (mnkj) {
        mnkj && '' != yz1_$0 ? rpsonq['down'](yz1_$0, febac, srnpo, yz1_$0) : null != srnpo && srnpo['runWith']([0x1]);
      } });
  }, rpsonq['readNativeFile'] = function (wsyvtx, cbafd) {
    rpsonq['fs']['readFile']({ 'filePath': wsyvtx, 'encoding': '', 'success': function (noqrpm) {
        null != cbafd && cbafd['runWith']([0x0]);
      }, 'fail': function (eadfbc) {
        null != cbafd && cbafd['runWith']([0x1]);
      } });
  }, rpsonq['down'] = function (cehgfd, geifjh, pnokm, fedcba) {
    void 0x0 === geifjh && (geifjh = 'ascill'), void 0x0 === fedcba && (fedcba = '');var pmrqo = rpsonq['getFileNativePath'](fedcba);rpsonq['wxdown']({ 'url': cehgfd, 'filePath': pmrqo, 'success': function (_314) {
        0xc8 === _314['statusCode'] && rpsonq['readFile'](_314['filePath'], geifjh, pnokm, fedcba);
      }, 'fail': function (vtxwsy) {
        null != pnokm && pnokm['runWith']([0x1, vtxwsy]);
      } })['onProgressUpdate'](function (ljnm) {
      null != pnokm && pnokm['runWith']([0x2, ljnm['progress']]);
    });
  }, rpsonq['readFile'] = function (fgidh, qrnspo, opnmk, edfgih) {
    void 0x0 === edfgih && (edfgih = ''), rpsonq['fs']['readFile']({ 'filePath': fgidh, 'encoding': qrnspo = void 0x0 === qrnspo ? 'ascill' : qrnspo, 'success': function (qrnomp) {
        -0x1 == fgidh['indexOf']('http://') && -0x1 == fgidh['indexOf']('https://') || rpsonq['onFileUpdate'](fgidh, edfgih), null != opnmk && opnmk['runWith']([0x0, qrnomp]);
      }, 'fail': function (fcebda) {
        fcebda && null != opnmk && opnmk['runWith']([0x1, fcebda]);
      } });
  }, rpsonq['downImg'] = function (_zx$y, cgdeb, oljnkm) {
    void 0x0 === oljnkm && (oljnkm = ''), rpsonq['wxdown']({ 'url': _zx$y, 'success': function (ljhg) {
        0xc8 === ljhg['statusCode'] && rpsonq['copyFile'](ljhg['tempFilePath'], oljnkm, cgdeb);
      }, 'fail': function (rsopn) {
        null != cgdeb && cgdeb['runWith']([0x1, rsopn]);
      } });
  }, rpsonq['copyFile'] = function (qprnso, onjlkm, rwt) {
    var vwsxr = qprnso['split']('/'),
        wstqr = vwsxr[vwsxr['length'] - 0x1];onjlkm['split']('?')[0x0];var xtvzwy = rpsonq['getFileInfo'](onjlkm);vwsxr = rpsonq['getFileNativePath'](wstqr), rpsonq['fs']['copyFile']({ 'srcPath': qprnso, 'destPath': vwsxr, 'success': function (srvpq) {
        xtvzwy ? xtvzwy['readyUrl'] != onjlkm && rpsonq['remove'](wstqr, onjlkm, rwt) : (rpsonq['onSaveFile'](onjlkm, wstqr), null != rwt && rwt['runWith']([0x0]));
      }, 'fail': function (rpqstv) {
        null != rwt && rwt['runWith']([0x1, rpqstv]);
      } });
  }, rpsonq['getFileNativePath'] = function (yxwzvt) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yxwzvt;
  }, rpsonq['remove'] = function (sopnr, lhkgij, jmiklh) {
    void 0x0 === lhkgij && (lhkgij = '');var dehif = rpsonq['getFileInfo'](lhkgij),
        npsroq = rpsonq['getFileNativePath'](dehif['md5']);tsoqpr['loader']['clearRes'](dehif['readyUrl']), rpsonq['fs']['unlink']({ 'filePath': npsroq, 'success': function (yxz_$w) {
        '' != lhkgij && rpsonq['onSaveFile'](lhkgij, sopnr), null != jmiklh && jmiklh['runWith']([0x0]);
      }, 'fail': function (jlonmk) {} });
  }, rpsonq['onSaveFile'] = function (fgijhk, ojknl) {
    var fgheji = fgijhk['split']('?')[0x0];rpsonq['filesListObj'][fgheji] = { 'md5': ojknl, 'readyUrl': fgijhk }, rpsonq['fs']['writeFile']({ 'filePath': rpsonq['fileNativeDir'] + '/' + rpsonq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rpsonq['filesListObj']), 'success': function (lgkh) {
        console['log']('写入测试测试成功：', lgkh);
      }, 'fail': function (aedf) {
        console['log']('写入测试测试失败：', aedf);
      } });
  }, rpsonq['existDir'] = function (gcdhe, hegfi) {
    rpsonq['fs']['mkdir']({ 'dirPath': gcdhe, 'success': function (nokjm) {
        null != hegfi && hegfi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (y$0x_) {
        -0x1 != y$0x_['errMsg']['indexOf']('file already exists') ? rpsonq['readSync'](rpsonq['fileListName'], 'utf8', hegfi) : null != hegfi && hegfi['runWith']([0x1, y$0x_]);
      } });
  }, rpsonq['readSync'] = function (_0yz$, $21_z0, lonpkm, acfbd) {
    void 0x0 === $21_z0 && ($21_z0 = 'ascill'), void 0x0 === acfbd && (acfbd = ''), _0yz$ = rpsonq['getFileNativePath'](_0yz$);var lonkp;try {
      lonkp = rpsonq['fs']['readFileSync'](_0yz$), null != lonpkm && lonpkm['runWith']([0x0, { 'data': lonkp }]);
    } catch (z_1$02) {
      null != lonpkm && lonpkm['runWith']([0x1]);
    }
  }, rpsonq['readCache'] = function () {}, rpsonq['writeCache'] = function (vrwsq) {
    var vwzy = readyUrl['split']('?')[0x0];rpsonq['filesListObj'][vwzy] = { 'md5': md5Name, 'readyUrl': readyUrl }, rpsonq['fs']['writeFile']({ 'filePath': rpsonq['fileNativeDir'] + '/' + rpsonq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rpsonq['filesListObj']), 'success': function (limkn) {}, 'fail': function ($zxv) {} });
  }, rpsonq['setNativeFileDir'] = function (mkijhl) {
    rpsonq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mkijhl;
  }, rpsonq['filesListObj'] = {}, rpsonq['fileNativeDir'] = null, rpsonq['fileListName'] = 'layaairfiles.txt', rpsonq['ziyuFileData'] = {}, ywv(rpsonq, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), rpsonq);function rpsonq() {
    rpsonq['__super']['call'](this);
  }var qornps = function () {
    function zx_$w() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, zx_$w['__super']['call'](this), this['_sound'] = zx_$w['_createSound']();
    }ihklj(zx_$w, 'laya.wx.mini.MiniSound', giefjh);var ihde = zx_$w['prototype'];return ihde['load'] = function (iefgj) {
      var gjihkl = this,
          wrstvq;function vrtqsp() {
        if (null != zx_$w['_null']) gjihkl['_sound']['onCanplay'](zx_$w['_null']), gjihkl['_sound']['onError'](zx_$w['_null']);else try {
          gjihkl['_sound']['onCanplay'](null), gjihkl['_sound']['onError'](null), zx_$w['_null'] = null;
        } catch (fbdcge) {
          console['warn']('[wxmini] _clearSound:' + fbdcge), gjihkl['_sound']['onCanplay'](jnilmk), gjihkl['_sound']['onError'](jnilmk), zx_$w['_null'] = jnilmk;
        }
      }function jnilmk() {}iefgj = tsrpq['formatURL'](iefgj), this['url'] = iefgj, zx_$w['_audioCache'][iefgj] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        vrtqsp(), wrstvq['loaded'] = !0x0, wrstvq['event']('complete'), zx_$w['_audioCache'][wrstvq['url']] = wrstvq;
      }), this['_sound']['onError'](function (deafb) {
        console['error']('errCode=' + deafb['errCode'] + '  errMsg=' + deafb['errMsg']), vrtqsp(), wrstvq['event']('error');
      }), this['_sound']['src'] = iefgj, wrstvq = this);
    }, ihde['play'] = function (ebcgd, sropt) {
      void 0x0 === ebcgd && (ebcgd = 0x0), void 0x0 === sropt && (sropt = 0x0), (rnpsq = this['url'] == glihk['_tMusic'] ? (zx_$w['_musicAudio'] || (zx_$w['_musicAudio'] = zx_$w['_createSound']()), zx_$w['_musicAudio']) : zx_$w['_createSound']())['src'] = this['url'];var rnpsq = new wqstr(rnpsq);return rnpsq['url'] = this['url'], rnpsq['loops'] = sropt, rnpsq['startTime'] = ebcgd, rnpsq['play'](), glihk['addChannel'](rnpsq), rnpsq;
    }, ihde['dispose'] = function () {
      var z$ywvx = zx_$w['_audioCache'][this['url']];z$ywvx && (z$ywvx['src'] = '', delete zx_$w['_audioCache'][this['url']]);
    }, qstpor(0x0, ihde, 'duration', function () {
      return this['_sound']['duration'];
    }), zx_$w['_createSound'] = function () {
      return zx_$w['_id']++, z_01y['window']['wx']['createInnerAudioContext']();
    }, zx_$w['_musicAudio'] = null, zx_$w['_id'] = 0x0, zx_$w['_audioCache'] = {}, zx_$w['_null'] = void 0x0, zx_$w;
  }(),
      wqstr = function () {
    function qsrwv(ornm) {
      this['_audio'] = null, this['_onEnd'] = null, qsrwv['__super']['call'](this), this['_audio'] = ornm, this['_onEnd'] = mopqnl['bind'](this['__onEnd'], this), ornm['onEnded'](this['_onEnd']);
    }ihklj(qsrwv, 'laya.wx.mini.MiniSoundChannel', nkmplo);var yz0$ = qsrwv['prototype'];return yz0$['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (tsoqpr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yz0$['__onNull'] = function () {}, yz0$['play'] = function () {
      this['isStopped'] = !0x1, glihk['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, yz0$['stop'] = function () {
      if (this['isStopped'] = !0x0, glihk['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != qsrwv['_null']) this['_audio']['onEnded'](qsrwv['_null']);else try {
          this['_audio']['onEnded'](null), qsrwv['_null'] = null;
        } catch (ihjmkl) {
          console['warn']('[wxmini] stop:' + ihjmkl), this['_audio']['onEnded'](mopqnl['bind'](this['__onNull'], this)), qsrwv['_null'] = mopqnl['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, yz0$['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, yz0$['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, glihk['addChannel'](this), this['_audio']['play']());
    }, qstpor(0x0, yz0$, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), qstpor(0x0, yz0$, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), qstpor(0x0, yz0$, 'volume', function () {
      return 0x1;
    }, function (lmiknj) {}), qsrwv['_null'] = void 0x0, qsrwv;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($1_30, $xy_) {
  'use strict';

  for (var svxw in Object['defineProperty']($xy_, '__esModule', { 'value': !0x0 }), Laya) {
    var gljihk = Laya[svxw];gljihk && gljihk['__isclass'] && ($xy_[svxw] = gljihk);
  }
});