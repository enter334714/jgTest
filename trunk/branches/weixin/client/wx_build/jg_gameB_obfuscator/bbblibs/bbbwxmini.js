var _ = wx.y$;
!function (npqm, _0$x) {
  _0$x['un'], _0$x['uns'];var ljni = _0$x['static'],
      pnqmo = _0$x['class'],
      jinlmk = _0$x['getset'];_0$x['__newvec'];var wusx = laya['utils']['Browser'],
      vywtx = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ifhejg = laya['resource']['HTMLImage'],
      wvsutr = laya['utils']['Handler'],
      _xwyz = laya['display']['Input'],
      nomprq = laya['net']['Loader'];laya['maths']['Matrix'];var nkljm = laya['renders']['Render'],
      fecda = laya['utils']['RunDriver'];laya['media']['Sound'];var cehf = laya['media']['SoundChannel'],
      rnspo = laya['media']['SoundManager'],
      $_0yxz = (laya['display']['Stage'], laya['net']['URL']),
      ihkljg = laya['utils']['Utils'],
      ljkmon = (pnqmo(tpqrus, 'laya.wx.mini.MiniAdpter'), tpqrus['getJson'] = function (mpnoql) {
    return JSON['parse'](mpnoql);
  }, tpqrus['init'] = function (_432, _z0$y) {
    void 0x0 === _432 && (_432 = !0x1), void 0x0 === _z0$y && (_z0$y = !0x1), tpqrus['_inited'] || (tpqrus['window'] = npqm)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (tpqrus['_inited'] = !0x0, tpqrus['isZiYu'] = _z0$y, tpqrus['isPosMsgYu'] = _432, tpqrus['EnvConfig'] = {}, tpqrus['isZiYu'] || (z_0$yx['setNativeFileDir']('/layaairGame'), z_0$yx['existDir'](z_0$yx['fileNativeDir'], wvsutr['create'](tpqrus, tpqrus['onMkdirCallBack']))), tpqrus['window']['focus'] = function () {}, _0$x['getUrlPath'] = function () {}, tpqrus['window']['logtime'] = function (tqsup) {}, tpqrus['window']['alertTimeLog'] = function (egdhf) {}, tpqrus['window']['resetShareInfo'] = function () {}, tpqrus['window']['CanvasRenderingContext2D'] = function () {}, tpqrus['window']['CanvasRenderingContext2D']['prototype'] = tpqrus['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tpqrus['window']['document']['body']['appendChild'] = function () {}, tpqrus['EnvConfig']['pixelRatioInt'] = 0x0, fecda['getPixelRatio'] = tpqrus['pixelRatio'], tpqrus['_preCreateElement'] = wusx['createElement'], wusx['createElement'] = tpqrus['createElement'], fecda['createShaderCondition'] = tpqrus['createShaderCondition'], ihkljg['parseXMLFromString'] = tpqrus['parseXMLFromString'], _xwyz['_createInputElement'] = wyxzv$['_createInputElement'], tpqrus['EnvConfig']['load'] = nomprq['prototype']['load'], nomprq['prototype']['load'] = ghf['prototype']['load'], tpqrus['isZiYu'] && _432 && wx['onMessage'](function (fjie) {
      fjie['isLoad'] && (z_0$yx['ziyuFileData'][fjie['url']] = fjie['data']);
    }));
  }, tpqrus['onMkdirCallBack'] = function (vtursw, lqnmp) {
    vtursw || (z_0$yx['filesListObj'] = JSON['parse'](lqnmp['data']));
  }, tpqrus['pixelRatio'] = function () {
    if (!tpqrus['EnvConfig']['pixelRatioInt']) try {
      var kolnp = wx['getSystemInfoSync']();return tpqrus['EnvConfig']['pixelRatioInt'] = kolnp['pixelRatio'], kolnp['pixelRatio'];
    } catch (z0yx) {}return tpqrus['EnvConfig']['pixelRatioInt'];
  }, tpqrus['createElement'] = function (uxtwv) {
    var iegfd;if ('canvas' == uxtwv) return 0x1 == tpqrus['idx'] ? tpqrus['isZiYu'] ? (iegfd = sharedCanvas)['style'] = {} : iegfd = npqm['canvas'] : iegfd = npqm['wx']['createCanvas'](), tpqrus['idx']++, iegfd;if ('textarea' == uxtwv || 'input' == uxtwv) return tpqrus['onCreateInput'](uxtwv);if ('div' != uxtwv) return tpqrus['_preCreateElement'](uxtwv);return uxtwv = tpqrus['_preCreateElement'](uxtwv), (uxtwv['contains'] = function (likmh) {
      return null;
    }, uxtwv['removeChild'] = function (lponkm) {}, uxtwv);
  }, tpqrus['onCreateInput'] = function (jfhig) {
    return jfhig = tpqrus['_preCreateElement'](jfhig), (jfhig['focus'] = wyxzv$['wxinputFocus'], jfhig['blur'] = wyxzv$['wxinputblur'], jfhig['style'] = {}, jfhig['value'] = 0x0, jfhig['parentElement'] = {}, jfhig['placeholder'] = {}, jfhig['type'] = {}, jfhig['setColor'] = function (nkoljm) {}, jfhig['setType'] = function (jkhl) {}, jfhig['setFontFace'] = function (qpsnr) {}, jfhig['addEventListener'] = function (_y0x$) {}, jfhig['contains'] = function (fehdg) {
      return null;
    }, jfhig['removeChild'] = function (troqps) {}, jfhig);
  }, tpqrus['createShaderCondition'] = function (nlmjk) {
    var z$1_20 = this;return function () {
      return z$1_20[nlmjk['replace']('this.', '')];
    };
  }, tpqrus['EnvConfig'] = null, tpqrus['window'] = null, tpqrus['_preCreateElement'] = null, tpqrus['_inited'] = !0x1, tpqrus['wxRequest'] = null, tpqrus['systemInfo'] = null, tpqrus['version'] = '0.0.1', tpqrus['isZiYu'] = !0x1, tpqrus['isPosMsgYu'] = !0x1, tpqrus['parseXMLFromString'] = function (hgfjik) {
    var ijfhkg;hgfjik = hgfjik['replace'](/>\s+</g, '><');try {
      ijfhkg = new npqm['Parser']['DOMParser']()['parseFromString'](hgfjik, 'text/xml');
    } catch (lgjhki) {
      throw '需要引入xml解析库文件';
    }return ijfhkg;
  }, tpqrus['idx'] = 0x1, tpqrus);function tpqrus() {}pnqmo(yzxvw, 'laya.wx.mini.MiniImage'), yzxvw['prototype']['_loadImage'] = function (dhecg) {
    var cefgdb = !0x1;-0x1 == dhecg['indexOf']('layaNativeDir/') && (cefgdb = !0x0, dhecg = $_0yxz['formatURL'](dhecg)), z_0$yx['getFileInfo'](dhecg) ? yzxvw['onCreateImage'](dhecg, this, !cefgdb) : -0x1 != dhecg['indexOf']('http://') || -0x1 != dhecg['indexOf']('https://') ? z_0$yx['downImg'](dhecg, new wvsutr(yzxvw, yzxvw['onDownImgCallBack'], [dhecg, this]), dhecg) : yzxvw['onCreateImage'](dhecg, this, !0x0);
  }, yzxvw['onDownImgCallBack'] = function (hdfige, ghd, wvyxtu) {
    wvyxtu ? ghd['onError'](null) : yzxvw['onCreateImage'](hdfige, ghd);
  }, yzxvw['onCreateImage'] = function (qtpr, jkmnol, puqts) {
    var olqnpm, tu;function $wz_() {
      tu['onload'] = null, tu['onerror'] = null, delete jkmnol['imgCache'][qtpr];
    }olqnpm = (puqts = void 0x0 === puqts ? !0x1 : puqts) ? qtpr : (nmlpok = z_0$yx['getFileInfo'](qtpr)['md5'], z_0$yx['getFileNativePath'](nmlpok)), null == jkmnol['imgCache'] && (jkmnol['imgCache'] = {}), puqts = function () {
      $wz_(), jkmnol['onLoaded'](tu);
    };var nmlpok = function () {
      $wz_(), jkmnol['event']('error', 'Load image failed');
    };'nativeimage' == jkmnol['_type'] ? ((tu = new wusx['window']['Image']())['crossOrigin'] = '', tu['onload'] = puqts, tu['onerror'] = nmlpok, tu['src'] = olqnpm, jkmnol['imgCache'][qtpr] = tu) : new ifhejg['create'](olqnpm, { 'onload': puqts, 'onerror': nmlpok, 'onCreate': function (bcfgd) {
        tu = bcfgd, jkmnol['imgCache'][qtpr] = bcfgd;
      } });
  };function yzxvw() {}var wyxzv$ = (pnqmo(zx_yw, 'laya.wx.mini.MiniInput'), zx_yw['_createInputElement'] = function () {
    _xwyz['_initInput'](_xwyz['area'] = wusx['createElement']('textarea')), _xwyz['_initInput'](_xwyz['input'] = wusx['createElement']('input')), _xwyz['inputContainer'] = wusx['createElement']('div'), _xwyz['inputContainer']['style']['position'] = 'absolute', _xwyz['inputContainer']['style']['zIndex'] = 0x186a0, wusx['container']['appendChild'](_xwyz['inputContainer']), _xwyz['inputContainer']['setPos'] = function (dfebcg, mjil) {
      _xwyz['inputContainer']['style']['left'] = dfebcg + 'px', _xwyz['inputContainer']['style']['top'] = mjil + 'px';
    }, _0$x['stage']['on']('resize', null, zx_yw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_3$21) {
      npqm['dispatchEvent'] && npqm['dispatchEvent']('resize');
    }), rnspo['_soundClass'] = jikmn, rnspo['_musicClass'] = jikmn;
  }, zx_yw['_onStageResize'] = function () {
    _0$x['stage']['_canvasTransform']['identity']()['scale'](wusx['width'] / nkljm['canvas']['width'] / fecda['getPixelRatio'](), wusx['height'] / nkljm['canvas']['height'] / fecda['getPixelRatio']());
  }, zx_yw['wxinputFocus'] = function (mnql) {
    var z_y$xw = _xwyz['inputElement']['target'];z_y$xw && !z_y$xw['editable'] || (ljkmon['window']['wx']['offKeyboardConfirm'](), ljkmon['window']['wx']['offKeyboardInput'](), ljkmon['window']['wx']['showKeyboard']({ 'defaultValue': z_y$xw['text'], 'maxLength': z_y$xw['maxChars'], 'multiple': z_y$xw['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (y$x0z_) {}, 'fail': function (qoplmn) {} }), ljkmon['window']['wx']['onKeyboardConfirm'](function ($xz_wy) {
      $xz_wy = $xz_wy ? $xz_wy['value'] : '', (z_y$xw['text'] = $xz_wy, z_y$xw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), ljkmon['window']['wx']['onKeyboardInput'](function (knimj) {
      knimj = knimj ? knimj['value'] : '', z_y$xw['multiline'] || -0x1 == knimj['indexOf']('\x0a') ? (z_y$xw['text'] = knimj, z_y$xw['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, zx_yw['inputEnter'] = function () {
    _xwyz['inputElement']['target']['focus'] = !0x1;
  }, zx_yw['wxinputblur'] = function () {
    zx_yw['hideKeyboard']();
  }, zx_yw['hideKeyboard'] = function () {
    ljkmon['window']['wx']['offKeyboardConfirm'](), ljkmon['window']['wx']['offKeyboardInput'](), ljkmon['window']['wx']['hideKeyboard']({ 'success': function (kjgf) {
        console['log']('隐藏键盘');
      }, 'fail': function (iejg) {
        console['log']('隐藏键盘出错:' + (iejg ? iejg['errMsg'] : ''));
      } });
  }, zx_yw);function zx_yw() {}var ghf = function () {
    function _xy0$() {}pnqmo(_xy0$, 'laya.wx.mini.MiniLoader');var dgcbf = _xy0$['prototype'];return dgcbf['load'] = function (utvxy, pnqrs, mlop, fcdgeb, moqp) {
      void 0x0 === mlop && (mlop = !0x0), void 0x0 === moqp && (moqp = !0x1);var orpts = this;0x0 === (orpts['_url'] = utvxy)['indexOf']('data:image') ? orpts['_type'] = pnqrs = 'image' : orpts['_type'] = pnqrs = pnqrs || orpts['getTypeFromUrl'](utvxy), orpts['_cache'] = mlop, orpts['_data'] = null;var y$z0x = 'ascii';-0x1 != utvxy['indexOf']('.fnt') ? y$z0x = 'utf8' : 'arraybuffer' == pnqrs && (y$z0x = '');var rqons = ihkljg['getFileExtension'](utvxy);if (-0x1 != _xy0$['_fileTypeArr']['indexOf'](rqons)) ljkmon['EnvConfig']['load']['call'](this, utvxy, pnqrs, mlop, fcdgeb, moqp);else {
        if (z_0$yx['getFileInfo'](utvxy)) ljkmon['EnvConfig']['load']['call'](this, utvxy, pnqrs, mlop, fcdgeb, moqp);else {
          if (-0x1 != utvxy['indexOf']('layaNativeDir/')) {
            if (ljkmon['isZiYu']) {
              var ptq = z_0$yx['ziyuFileData'][utvxy];return void orpts['onLoaded'](ptq);
            }return cosnole['log']('read read'), void z_0$yx['read'](utvxy, y$z0x, new wvsutr(_xy0$, _xy0$['onReadNativeCallBack'], [y$z0x, utvxy, pnqrs, mlop, fcdgeb, moqp, orpts]));
          }ptq = '' == $_0yxz['rootPath'] ? utvxy : utvxy['split']($_0yxz['rootPath'])[0x0], -0x1 != utvxy['indexOf']('http://') || -0x1 != utvxy['indexOf']('https://') ? ljkmon['EnvConfig']['load']['call'](orpts, utvxy, pnqrs, mlop, fcdgeb, moqp) : z_0$yx['readFile'](ptq, y$z0x, new wvsutr(_xy0$, _xy0$['onReadNativeCallBack'], [y$z0x, utvxy, pnqrs, mlop, fcdgeb, moqp, orpts]), utvxy);
        }
      }
    }, dgcbf['resMgrLoad'] = function (onpq, npqomr, jhkf, oplmqn, lhkjmi, wuvxst, $_wz) {
      void 0x0 === jhkf && (jhkf = 0x0), void 0x0 === oplmqn && (oplmqn = !0x1), void 0x0 === lhkjmi && (lhkjmi = !0x1), void 0x0 === wuvxst && (wuvxst = 0x0), void 0x0 === $_wz && ($_wz = 0x3), -0x1 != onpq['indexOf']('mpack') && console['log']('=============resMgrLoad url:', onpq), ljkmon['EnvConfig']['resMgrLoad'](onpq, (deacfb, egij, lkjnm) => {
        _xy0$['prototype']['resMgrLoadCallBack'](deacfb, egij, lkjnm, npqomr);
      }, jhkf, oplmqn, lhkjmi, wuvxst, $_wz);
    }, dgcbf['resMgrLoadCallBack'] = function (yx_z0, qsuvr, rqm, befda) {
      console['log']('buff:::', yx_z0, rqm, z_0$yx['fileNativeDir'] + '///' + z_0$yx['fileListName']), befda(yx_z0, qsuvr, rqm);
    }, dgcbf['clearRes'] = function (mikh, iljhg) {
      this['clearRes'](mikh, iljhg = void 0x0 === iljhg ? !0x1 : iljhg), iljhg = z_0$yx['getFileInfo'](mikh), !iljhg || -0x1 == mikh['indexOf']('http://') && -0x1 == mikh['indexOf']('https://') || (iljhg = iljhg['md5'], iljhg = z_0$yx['getFileNativePath'](iljhg), z_0$yx['remove'](iljhg));
    }, _xy0$['onReadNativeCallBack'] = function (olqmp, _32104, srq, kghfi, rqtpso, higl, nprm, gecbf, vwrst) {
      void 0x0 === kghfi && (kghfi = !0x0), void 0x0 === higl && (higl = !0x1), (gecbf = void 0x0 === gecbf ? 0x0 : gecbf) ? 0x1 == gecbf && ljkmon['EnvConfig']['load']['call'](nprm, _32104, srq, kghfi, rqtpso, higl) : (vwrst = 'json' == srq || 'atlas' == srq ? ljkmon['getJson'](vwrst['data']) : 'xml' == srq ? ihkljg['parseXMLFromString'](vwrst['data']) : vwrst['data'], nprm['onLoaded'](vwrst), !ljkmon['isZiYu'] && ljkmon['isPosMsgYu'] && 'arraybuffer' != srq && wx['postMessage']({ 'url': _32104, 'data': vwrst, 'isLoad': !0x0 }));
    }, ljni(_xy0$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _xy0$;
  }(),
      z_0$yx = (pnqmo(snorq, 'laya.wx.mini.MiniFileMgr', vywtx), snorq['isLoadFile'] = function (jmkhi) {
    return -0x1 != snorq['_fileTypeArr']['indexOf'](jmkhi);
  }, snorq['getFileInfo'] = function (pmonlq) {
    return pmonlq = pmonlq['split']('?')[0x0], pmonlq = snorq['filesListObj'][pmonlq], null == pmonlq ? null : pmonlq;
  }, snorq['onFileUpdate'] = function (pqrust, hgcef) {
    var zyxv$ = pqrust['split']('/');pqrust = zyxv$[zyxv$['length'] - 0x1], zyxv$ = snorq['getFileInfo'](hgcef), null == zyxv$ ? snorq['onSaveFile'](hgcef, pqrust) : zyxv$['readyUrl'] != hgcef && snorq['remove'](pqrust, hgcef);
  }, snorq['exits'] = function (yx0_$, sq) {
    yx0_$ = snorq['getFileNativePath'](yx0_$), snorq['fs']['getFileInfo']({ 'filePath': yx0_$, 'success': function (yvzxw$) {
        null != sq && sq['runWith']([0x0, yvzxw$]);
      }, 'fail': function (gbecd) {
        null != sq && sq['runWith']([0x1, gbecd]);
      } });
  }, snorq['read'] = function (fceg, quvtsr, osnpr, jmkil) {
    void 0x0 === quvtsr && (quvtsr = 'ascill'), fceg = '' != (jmkil = void 0x0 === jmkil ? '' : jmkil) ? snorq['getFileNativePath'](fceg) : fceg, snorq['fs']['readFile']({ 'filePath': fceg, 'encoding': quvtsr, 'success': function (nmjlo) {
        null != osnpr && osnpr['runWith']([0x0, nmjlo]);
      }, 'fail': function (omqrp) {
        omqrp && '' != jmkil ? snorq['down'](jmkil, quvtsr, osnpr, jmkil) : null != osnpr && osnpr['runWith']([0x1]);
      } });
  }, snorq['readNativeFile'] = function (usrqp, fghiej) {
    snorq['fs']['readFile']({ 'filePath': usrqp, 'encoding': '', 'success': function (ehdfcg) {
        null != fghiej && fghiej['runWith']([0x0]);
      }, 'fail': function (puqstr) {
        null != fghiej && fghiej['runWith']([0x1]);
      } });
  }, snorq['down'] = function (hilgj, qnlmo, rqtuv, npomk) {
    void 0x0 === qnlmo && (qnlmo = 'ascill'), void 0x0 === npomk && (npomk = '');var fedgih = snorq['getFileNativePath'](npomk);snorq['wxdown']({ 'url': hilgj, 'filePath': fedgih, 'success': function (npmloq) {
        0xc8 === npmloq['statusCode'] && snorq['readFile'](npmloq['filePath'], qnlmo, rqtuv, npomk);
      }, 'fail': function (abdf) {
        null != rqtuv && rqtuv['runWith']([0x1, abdf]);
      } })['onProgressUpdate'](function (konlp) {
      null != rqtuv && rqtuv['runWith']([0x2, konlp['progress']]);
    });
  }, snorq['readFile'] = function (lmpnqo, lhmjk, qsrn, zy$x0_) {
    void 0x0 === zy$x0_ && (zy$x0_ = ''), snorq['fs']['readFile']({ 'filePath': lmpnqo, 'encoding': lhmjk = void 0x0 === lhmjk ? 'ascill' : lhmjk, 'success': function (hefgid) {
        -0x1 == lmpnqo['indexOf']('http://') && -0x1 == lmpnqo['indexOf']('https://') || snorq['onFileUpdate'](lmpnqo, zy$x0_), null != qsrn && qsrn['runWith']([0x0, hefgid]);
      }, 'fail': function (zyx$_0) {
        zyx$_0 && null != qsrn && qsrn['runWith']([0x1, zyx$_0]);
      } });
  }, snorq['downImg'] = function (gdhi, egbcfd, pqtsro) {
    void 0x0 === pqtsro && (pqtsro = ''), snorq['wxdown']({ 'url': gdhi, 'success': function (tsurwv) {
        0xc8 === tsurwv['statusCode'] && snorq['copyFile'](tsurwv['tempFilePath'], pqtsro, egbcfd);
      }, 'fail': function (y1$z) {
        null != egbcfd && egbcfd['runWith']([0x1, y1$z]);
      } });
  }, snorq['copyFile'] = function (wzy$v, $xvy, wvxzy) {
    var rwvst = wzy$v['split']('/'),
        _y1$0 = rwvst[rwvst['length'] - 0x1];$xvy['split']('?')[0x0];var ostprq = snorq['getFileInfo']($xvy);rwvst = snorq['getFileNativePath'](_y1$0), snorq['fs']['copyFile']({ 'srcPath': wzy$v, 'destPath': rwvst, 'success': function (wvz$xy) {
        ostprq ? ostprq['readyUrl'] != $xvy && snorq['remove'](_y1$0, $xvy, wvxzy) : (snorq['onSaveFile']($xvy, _y1$0), null != wvxzy && wvxzy['runWith']([0x0]));
      }, 'fail': function (kjo) {
        null != wvxzy && wvxzy['runWith']([0x1, kjo]);
      } });
  }, snorq['getFileNativePath'] = function (nproqs) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nproqs;
  }, snorq['remove'] = function (ywvz$, rtuqsp, hmilk) {
    void 0x0 === rtuqsp && (rtuqsp = '');var zuwy = snorq['getFileInfo'](rtuqsp),
        gfedih = snorq['getFileNativePath'](zuwy['md5']);_0$x['loader']['clearRes'](zuwy['readyUrl']), snorq['fs']['unlink']({ 'filePath': gfedih, 'success': function (efjhg) {
        '' != rtuqsp && snorq['onSaveFile'](rtuqsp, ywvz$), null != hmilk && hmilk['runWith']([0x0]);
      }, 'fail': function (sotqr) {} });
  }, snorq['onSaveFile'] = function (srwv, ecbfdg) {
    var lknp = srwv['split']('?')[0x0];snorq['filesListObj'][lknp] = { 'md5': ecbfdg, 'readyUrl': srwv }, snorq['fs']['writeFile']({ 'filePath': snorq['fileNativeDir'] + '/' + snorq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](snorq['filesListObj']), 'success': function (oklnmp) {
        console['log']('写入测试测试成功：', oklnmp);
      }, 'fail': function (zwyx) {
        console['log']('写入测试测试失败：', zwyx);
      } });
  }, snorq['existDir'] = function (_23$01, $vzxyw) {
    snorq['fs']['mkdir']({ 'dirPath': _23$01, 'success': function (kjghi) {
        null != $vzxyw && $vzxyw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (z_y$0) {
        -0x1 != z_y$0['errMsg']['indexOf']('file already exists') ? snorq['readSync'](snorq['fileListName'], 'utf8', $vzxyw) : null != $vzxyw && $vzxyw['runWith']([0x1, z_y$0]);
      } });
  }, snorq['readSync'] = function (kolpmn, olmknj, x$zw_y, yzx0_) {
    void 0x0 === olmknj && (olmknj = 'ascill'), void 0x0 === yzx0_ && (yzx0_ = ''), kolpmn = snorq['getFileNativePath'](kolpmn);var omnlpk;try {
      omnlpk = snorq['fs']['readFileSync'](kolpmn), null != x$zw_y && x$zw_y['runWith']([0x0, { 'data': omnlpk }]);
    } catch (onlp) {
      null != x$zw_y && x$zw_y['runWith']([0x1]);
    }
  }, snorq['readCache'] = function () {}, snorq['writeCache'] = function (olpnmq) {
    var lkmjn = readyUrl['split']('?')[0x0];snorq['filesListObj'][lkmjn] = { 'md5': md5Name, 'readyUrl': readyUrl }, snorq['fs']['writeFile']({ 'filePath': snorq['fileNativeDir'] + '/' + snorq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](snorq['filesListObj']), 'success': function (x$z0y_) {}, 'fail': function (gefid) {} });
  }, snorq['setNativeFileDir'] = function (qpmonl) {
    snorq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qpmonl;
  }, snorq['filesListObj'] = {}, snorq['fileNativeDir'] = null, snorq['fileListName'] = 'layaairfiles.txt', snorq['ziyuFileData'] = {}, ljni(snorq, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), snorq);function snorq() {
    snorq['__super']['call'](this);
  }var jikmn = function () {
    function nql() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, nql['__super']['call'](this), this['_sound'] = nql['_createSound']();
    }pnqmo(nql, 'laya.wx.mini.MiniSound', vywtx);var $zvx = nql['prototype'];return $zvx['load'] = function (lmjikh) {
      var egfcbd = this,
          ot;function mknlp() {
        if (null != nql['_null']) egfcbd['_sound']['onCanplay'](nql['_null']), egfcbd['_sound']['onError'](nql['_null']);else try {
          egfcbd['_sound']['onCanplay'](null), egfcbd['_sound']['onError'](null), nql['_null'] = null;
        } catch (fdehig) {
          console['warn']('[wxmini] _clearSound:' + fdehig), egfcbd['_sound']['onCanplay'](kijfh), egfcbd['_sound']['onError'](kijfh), nql['_null'] = kijfh;
        }
      }function kijfh() {}lmjikh = $_0yxz['formatURL'](lmjikh), this['url'] = lmjikh, nql['_audioCache'][lmjikh] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        mknlp(), ot['loaded'] = !0x0, ot['event']('complete'), nql['_audioCache'][ot['url']] = ot;
      }), this['_sound']['onError'](function (xvuy) {
        console['error']('errCode=' + xvuy['errCode'] + '  errMsg=' + xvuy['errMsg']), mknlp(), ot['event']('error');
      }), this['_sound']['src'] = lmjikh, ot = this);
    }, $zvx['play'] = function (_214, _13042) {
      void 0x0 === _214 && (_214 = 0x0), void 0x0 === _13042 && (_13042 = 0x0), (rsnp = this['url'] == rnspo['_tMusic'] ? (nql['_musicAudio'] || (nql['_musicAudio'] = nql['_createSound']()), nql['_musicAudio']) : nql['_createSound']())['src'] = this['url'];var rsnp = new kinjm(rsnp);return rsnp['url'] = this['url'], rsnp['loops'] = _13042, rsnp['startTime'] = _214, rsnp['play'](), rnspo['addChannel'](rsnp), rsnp;
    }, $zvx['dispose'] = function () {
      var kmhil = nql['_audioCache'][this['url']];kmhil && (kmhil['src'] = '', delete nql['_audioCache'][this['url']]);
    }, jinlmk(0x0, $zvx, 'duration', function () {
      return this['_sound']['duration'];
    }), nql['_createSound'] = function () {
      return nql['_id']++, ljkmon['window']['wx']['createInnerAudioContext']();
    }, nql['_musicAudio'] = null, nql['_id'] = 0x0, nql['_audioCache'] = {}, nql['_null'] = void 0x0, nql;
  }(),
      kinjm = function () {
    function jnmklo(stwu) {
      this['_audio'] = null, this['_onEnd'] = null, jnmklo['__super']['call'](this), this['_audio'] = stwu, this['_onEnd'] = ihkljg['bind'](this['__onEnd'], this), stwu['onEnded'](this['_onEnd']);
    }pnqmo(jnmklo, 'laya.wx.mini.MiniSoundChannel', cehf);var vyxuwz = jnmklo['prototype'];return vyxuwz['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (_0$x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, vyxuwz['__onNull'] = function () {}, vyxuwz['play'] = function () {
      this['isStopped'] = !0x1, rnspo['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, vyxuwz['stop'] = function () {
      if (this['isStopped'] = !0x0, rnspo['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != jnmklo['_null']) this['_audio']['onEnded'](jnmklo['_null']);else try {
          this['_audio']['onEnded'](null), jnmklo['_null'] = null;
        } catch (_wyx) {
          console['warn']('[wxmini] stop:' + _wyx), this['_audio']['onEnded'](ihkljg['bind'](this['__onNull'], this)), jnmklo['_null'] = ihkljg['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, vyxuwz['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, vyxuwz['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, rnspo['addChannel'](this), this['_audio']['play']());
    }, jinlmk(0x0, vyxuwz, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), jinlmk(0x0, vyxuwz, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), jinlmk(0x0, vyxuwz, 'volume', function () {
      return 0x1;
    }, function (lnmkoj) {}), jnmklo['_null'] = void 0x0, jnmklo;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (qrosp, jehgfi) {
  'use strict';

  for (var z01_$y in Object['defineProperty'](jehgfi, '__esModule', { 'value': !0x0 }), Laya) {
    var mklni = Laya[z01_$y];mklni && mklni['__isclass'] && (jehgfi[z01_$y] = mklni);
  }
});