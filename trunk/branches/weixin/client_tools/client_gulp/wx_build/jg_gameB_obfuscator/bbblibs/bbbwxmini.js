var _ = wx.y$;
(function (window, document, xvzwy$) {
  var dcbge = xvzwy$['un'],
      ostpq = xvzwy$['uns'],
      sqnro = xvzwy$['static'],
      noqrs = xvzwy$['class'],
      jgikh = xvzwy$['getset'],
      ytvx = xvzwy$['__newvec'],
      hfdcge = laya['utils']['Browser'],
      uyvzx = laya['events']['Event'],
      bfed = laya['events']['EventDispatcher'],
      hljgi = laya['resource']['HTMLImage'],
      pqonlm = laya['utils']['Handler'],
      knjml = laya['display']['Input'],
      $x0yz = laya['net']['Loader'],
      efadc = laya['maths']['Matrix'],
      fhcged = laya['renders']['Render'],
      qus = laya['utils']['RunDriver'],
      fhcg = laya['media']['Sound'],
      khig = laya['media']['SoundChannel'],
      sptro = laya['media']['SoundManager'],
      edbca = laya['display']['Stage'],
      ebdgfc = laya['net']['URL'],
      yzx$vw = laya['utils']['Utils'],
      ijlhk = function () {
    function kinjm() {}return noqrs(kinjm, 'laya.wx.mini.MiniAdpter'), kinjm['getJson'] = function (olnmjk) {
      return JSON['parse'](olnmjk);
    }, kinjm['init'] = function (gfedhi, utqr) {
      gfedhi === void 0x0 && (gfedhi = ![]), utqr === void 0x0 && (utqr = ![]);if (kinjm['_inited']) return;kinjm['window'] = window;if (kinjm['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;kinjm['_inited'] = !![], kinjm['isZiYu'] = utqr, kinjm['isPosMsgYu'] = gfedhi, kinjm['EnvConfig'] = {}, !kinjm['isZiYu'] && (vyxtuw['setNativeFileDir']('/layaairGame'), vyxtuw['existDir'](vyxtuw['fileNativeDir'], pqonlm['create'](kinjm, kinjm['onMkdirCallBack']))), kinjm['window']['focus'] = function () {}, xvzwy$['getUrlPath'] = function () {}, kinjm['window']['logtime'] = function ($xwzy) {}, kinjm['window']['alertTimeLog'] = function (fgihjk) {}, kinjm['window']['resetShareInfo'] = function () {}, kinjm['window']['CanvasRenderingContext2D'] = function () {}, kinjm['window']['CanvasRenderingContext2D']['prototype'] = kinjm['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kinjm['window']['document']['body']['appendChild'] = function () {}, kinjm['EnvConfig']['pixelRatioInt'] = 0x0, qus['getPixelRatio'] = kinjm['pixelRatio'], kinjm['_preCreateElement'] = hfdcge['createElement'], hfdcge['createElement'] = kinjm['createElement'], qus['createShaderCondition'] = kinjm['createShaderCondition'], yzx$vw['parseXMLFromString'] = kinjm['parseXMLFromString'], knjml['_createInputElement'] = jlimkh['_createInputElement'], kinjm['EnvConfig']['load'] = $x0yz['prototype']['load'], $x0yz['prototype']['load'] = ptqusr['prototype']['load'], kinjm['isZiYu'] && gfedhi && wx['onMessage'](function ($_301) {
        $_301['isLoad'] && (vyxtuw['ziyuFileData'][$_301['url']] = $_301['data']);
      });
    }, kinjm['onMkdirCallBack'] = function (x_$, sutw) {
      if (!x_$) vyxtuw['filesListObj'] = JSON['parse'](sutw['data']);
    }, kinjm['pixelRatio'] = function () {
      if (!kinjm['EnvConfig']['pixelRatioInt']) try {
        var onqspr = wx['getSystemInfoSync']();return kinjm['EnvConfig']['pixelRatioInt'] = onqspr['pixelRatio'], onqspr = onqspr, onqspr['pixelRatio'];
      } catch (qstrv) {}return kinjm['EnvConfig']['pixelRatioInt'];
    }, kinjm['createElement'] = function (x$_zy0) {
      if (x$_zy0 == 'canvas') {
        var w$vyx;return kinjm['idx'] == 0x1 ? kinjm['isZiYu'] ? (w$vyx = sharedCanvas, w$vyx['style'] = {}) : w$vyx = window['canvas'] : w$vyx = window['wx']['createCanvas'](), kinjm['idx']++, w$vyx;
      } else {
        if (x$_zy0 == 'textarea' || x$_zy0 == 'input') return kinjm['onCreateInput'](x$_zy0);else {
          if (x$_zy0 == 'div') {
            var zyx$vw = kinjm['_preCreateElement'](x$_zy0);return zyx$vw['contains'] = function (dfgh) {
              return null;
            }, zyx$vw['removeChild'] = function (uzyv) {}, zyx$vw;
          } else return kinjm['_preCreateElement'](x$_zy0);
        }
      }
    }, kinjm['onCreateInput'] = function (nkmli) {
      var qvsr = kinjm['_preCreateElement'](nkmli);return qvsr['focus'] = jlimkh['wxinputFocus'], qvsr['blur'] = jlimkh['wxinputblur'], qvsr['style'] = {}, qvsr['value'] = 0x0, qvsr['parentElement'] = {}, qvsr['placeholder'] = {}, qvsr['type'] = {}, qvsr['setColor'] = function (nrqmpo) {}, qvsr['setType'] = function (fgcehd) {}, qvsr['setFontFace'] = function (imkhl) {}, qvsr['addEventListener'] = function (squprt) {}, qvsr['contains'] = function (bdfe) {
        return null;
      }, qvsr['removeChild'] = function (kiljnm) {}, qvsr;
    }, kinjm['createShaderCondition'] = function (lknojm) {
      var spuqrt = this,
          svrutw = function () {
        var kijg = lknojm;return spuqrt[lknojm['replace']('this.', '')];
      };return svrutw;
    }, kinjm['EnvConfig'] = null, kinjm['window'] = null, kinjm['_preCreateElement'] = null, kinjm['_inited'] = ![], kinjm['wxRequest'] = null, kinjm['systemInfo'] = null, kinjm['version'] = '0.0.1', kinjm['isZiYu'] = ![], kinjm['isPosMsgYu'] = ![], kinjm['parseXMLFromString'] = function (ihfjkg) {
      var dhgei, gfedc;ihfjkg = ihfjkg['replace'](/>\s+</g, '><');try {
        dhgei = new window['Parser']['DOMParser']()['parseFromString'](ihfjkg, 'text/xml');
      } catch (linkmj) {
        throw '需要引入xml解析库文件';
      }return dhgei;
    }, kinjm['idx'] = 0x1, kinjm;
  }(),
      uyzwvx = function () {
    function nqpmol() {}noqrs(nqpmol, 'laya.wx.mini.MiniImage');var opqsnr = nqpmol['prototype'];return opqsnr['_loadImage'] = function (pmonq) {
      var rpostq = this,
          degh = ![];pmonq['indexOf']('layaNativeDir/') == -0x1 && (degh = !![], pmonq = ebdgfc['formatURL'](pmonq));if (!vyxtuw['getFileInfo'](pmonq)) {
        if (pmonq['indexOf']('http://') != -0x1 || pmonq['indexOf']('https://') != -0x1) vyxtuw['downImg'](pmonq, new pqonlm(nqpmol, nqpmol['onDownImgCallBack'], [pmonq, rpostq]), pmonq);else nqpmol['onCreateImage'](pmonq, rpostq, !![]);
      } else nqpmol['onCreateImage'](pmonq, rpostq, !degh);
    }, nqpmol['onDownImgCallBack'] = function (nopqr, w_yz, jkimlh) {
      if (!jkimlh) nqpmol['onCreateImage'](nopqr, w_yz);else w_yz['onError'](null);
    }, nqpmol['onCreateImage'] = function (pmonlk, lopnm, oqrpm) {
      oqrpm === void 0x0 && (oqrpm = ![]);var $_yxwz;if (!oqrpm) {
        var likmnj = vyxtuw['getFileInfo'](pmonlk),
            z0$_y1 = likmnj['md5'];$_yxwz = vyxtuw['getFileNativePath'](z0$_y1);
      } else $_yxwz = pmonlk;if (lopnm['imgCache'] == null) lopnm['imgCache'] = {};var mhkli;function hijkml() {
        mhkli['onload'] = null, mhkli['onerror'] = null, delete lopnm['imgCache'][pmonlk];
      };var dehg = function () {
        hijkml(), lopnm['onLoaded'](mhkli);
      },
          tspqu = function () {
        hijkml(), lopnm['event']('error', 'Load image failed');
      };lopnm['_type'] == 'nativeimage' ? (mhkli = new hfdcge['window']['Image'](), mhkli['crossOrigin'] = '', mhkli['onload'] = dehg, mhkli['onerror'] = tspqu, mhkli['src'] = $_yxwz, lopnm['imgCache'][pmonlk] = mhkli) : new hljgi['create']($_yxwz, { 'onload': dehg, 'onerror': tspqu, 'onCreate': function (vxzwy) {
          mhkli = vxzwy, lopnm['imgCache'][pmonlk] = vxzwy;
        } });
    }, nqpmol;
  }(),
      jlimkh = function () {
    function kolp() {}return noqrs(kolp, 'laya.wx.mini.MiniInput'), kolp['_createInputElement'] = function () {
      knjml['_initInput'](knjml['area'] = hfdcge['createElement']('textarea')), knjml['_initInput'](knjml['input'] = hfdcge['createElement']('input')), knjml['inputContainer'] = hfdcge['createElement']('div'), knjml['inputContainer']['style']['position'] = 'absolute', knjml['inputContainer']['style']['zIndex'] = 0x186a0, hfdcge['container']['appendChild'](knjml['inputContainer']), knjml['inputContainer']['setPos'] = function (rnopmq, hdcfg) {
        knjml['inputContainer']['style']['left'] = rnopmq + 'px', knjml['inputContainer']['style']['top'] = hdcfg + 'px';
      }, xvzwy$['stage']['on']('resize', null, kolp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ifhedg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), sptro['_soundClass'] = ehdif, sptro['_musicClass'] = ehdif;
    }, kolp['_onStageResize'] = function () {
      var nimkj = xvzwy$['stage']['_canvasTransform']['identity']();nimkj['scale'](hfdcge['width'] / fhcged['canvas']['width'] / qus['getPixelRatio'](), hfdcge['height'] / fhcged['canvas']['height'] / qus['getPixelRatio']());
    }, kolp['wxinputFocus'] = function (tuyw) {
      var z1y = knjml['inputElement']['target'];if (z1y && !z1y['editable']) return;ijlhk['window']['wx']['offKeyboardConfirm'](), ijlhk['window']['wx']['offKeyboardInput'](), ijlhk['window']['wx']['showKeyboard']({ 'defaultValue': z1y['text'], 'maxLength': z1y['maxChars'], 'multiple': z1y['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (njkli) {}, 'fail': function (tvs) {} }), ijlhk['window']['wx']['onKeyboardConfirm'](function (xwvyz) {
        var vxz = xwvyz ? xwvyz['value'] : '';z1y['text'] = vxz, z1y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ijlhk['window']['wx']['onKeyboardInput'](function (lpmqn) {
        var sturvw = lpmqn ? lpmqn['value'] : '';if (!z1y['multiline']) {
          if (sturvw['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }z1y['text'] = sturvw, z1y['event']('input');
      });
    }, kolp['inputEnter'] = function () {
      knjml['inputElement']['target']['focus'] = ![];
    }, kolp['wxinputblur'] = function () {
      kolp['hideKeyboard']();
    }, kolp['hideKeyboard'] = function () {
      ijlhk['window']['wx']['offKeyboardConfirm'](), ijlhk['window']['wx']['offKeyboardInput'](), ijlhk['window']['wx']['hideKeyboard']({ 'success': function (dfehg) {
          console['log']('隐藏键盘');
        }, 'fail': function (mkjhil) {
          console['log']('隐藏键盘出错:' + (mkjhil ? mkjhil['errMsg'] : ''));
        } });
    }, kolp;
  }(),
      ptqusr = function () {
    function mrqnp() {}noqrs(mrqnp, 'laya.wx.mini.MiniLoader');var imnlk = mrqnp['prototype'];return imnlk['load'] = function (zuxwv, egch, qmprn, jli, _z01$2) {
      qmprn === void 0x0 && (qmprn = !![]), _z01$2 === void 0x0 && (_z01$2 = ![]);var sruqp = this;sruqp['_url'] = zuxwv;if (zuxwv['indexOf']('data:image') === 0x0) sruqp['_type'] = egch = 'image';else sruqp['_type'] = egch || (egch = sruqp['getTypeFromUrl'](zuxwv));sruqp['_cache'] = qmprn, sruqp['_data'] = null;var uvrts = 'ascii';if (zuxwv['indexOf']('.fnt') != -0x1) uvrts = 'utf8';else egch == 'arraybuffer' && (uvrts = '');;var twyvux = yzx$vw['getFileExtension'](zuxwv);if (mrqnp['_fileTypeArr']['indexOf'](twyvux) != -0x1) ijlhk['EnvConfig']['load']['call'](this, zuxwv, egch, qmprn, jli, _z01$2);else {
        if (!vyxtuw['getFileInfo'](zuxwv)) {
          if (zuxwv['indexOf']('layaNativeDir/') != -0x1) {
            if (ijlhk['isZiYu']) {
              var qsoprn = vyxtuw['ziyuFileData'][zuxwv];sruqp['onLoaded'](qsoprn);return;
            } else {
              cosnole['log']('read read'), vyxtuw['read'](zuxwv, uvrts, new pqonlm(mrqnp, mrqnp['onReadNativeCallBack'], [uvrts, zuxwv, egch, qmprn, jli, _z01$2, sruqp]));return;
            }
          }if (ebdgfc['rootPath'] == '') var eadcf = zuxwv;else eadcf = zuxwv['split'](ebdgfc['rootPath'])[0x0];zuxwv['indexOf']('http://') != -0x1 || zuxwv['indexOf']('https://') != -0x1 ? ijlhk['EnvConfig']['load']['call'](sruqp, zuxwv, egch, qmprn, jli, _z01$2) : vyxtuw['readFile'](eadcf, uvrts, new pqonlm(mrqnp, mrqnp['onReadNativeCallBack'], [uvrts, zuxwv, egch, qmprn, jli, _z01$2, sruqp]), zuxwv);
        } else ijlhk['EnvConfig']['load']['call'](this, zuxwv, egch, qmprn, jli, _z01$2);
      }
    }, imnlk['resMgrLoad'] = function (ejfghi, eidfgh, txswuv, hilkgj, efhc, wzxuv, bceda) {
      txswuv === void 0x0 && (txswuv = 0x0), hilkgj === void 0x0 && (hilkgj = ![]), efhc === void 0x0 && (efhc = ![]), wzxuv === void 0x0 && (wzxuv = 0x0), bceda === void 0x0 && (bceda = 0x3), ejfghi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ejfghi), ijlhk['EnvConfig']['resMgrLoad'](ejfghi, (qorpm, mnlkji, faec) => {
        mrqnp['prototype']['resMgrLoadCallBack'](qorpm, mnlkji, faec, eidfgh);
      }, txswuv, hilkgj, efhc, wzxuv, bceda);
    }, imnlk['resMgrLoadCallBack'] = function (ljkm, xwvty, dbefg, nloq) {
      console['log']('buff:::', ljkm, dbefg, vyxtuw['fileNativeDir'] + '///' + vyxtuw['fileListName']), nloq(ljkm, xwvty, dbefg);
    }, imnlk['clearRes'] = function (kojln, jilk) {
      jilk === void 0x0 && (jilk = ![]);var njklmi = this;njklmi['clearRes'](kojln, jilk);var lihgjk = vyxtuw['getFileInfo'](kojln);if (lihgjk && (kojln['indexOf']('http://') != -0x1 || kojln['indexOf']('https://') != -0x1)) {
        var zvyxwu = lihgjk['md5'],
            komnpl = vyxtuw['getFileNativePath'](zvyxwu);vyxtuw['remove'](komnpl);
      }
    }, mrqnp['onReadNativeCallBack'] = function (z1_0y, qnlmop, oklpm, optr, rtqsup, gkjil, lhjki, wzxvy$, turqvs) {
      optr === void 0x0 && (optr = !![]), gkjil === void 0x0 && (gkjil = ![]), wzxvy$ === void 0x0 && (wzxvy$ = 0x0);if (!wzxvy$) {
        var txvwyu;if (oklpm == 'json' || oklpm == 'atlas') txvwyu = ijlhk['getJson'](turqvs['data']);else oklpm == 'xml' ? txvwyu = yzx$vw['parseXMLFromString'](turqvs['data']) : txvwyu = turqvs['data'];lhjki['onLoaded'](txvwyu), !ijlhk['isZiYu'] && ijlhk['isPosMsgYu'] && oklpm != 'arraybuffer' && wx['postMessage']({ 'url': qnlmop, 'data': txvwyu, 'isLoad': !![] });
      } else wzxvy$ == 0x1 && ijlhk['EnvConfig']['load']['call'](lhjki, qnlmop, oklpm, optr, rtqsup, gkjil);
    }, sqnro(mrqnp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mrqnp;
  }(),
      vyxtuw = function (zy_$) {
    function zywu() {
      zywu['__super']['call'](this);;
    }return noqrs(zywu, 'laya.wx.mini.MiniFileMgr', zy_$), zywu['isLoadFile'] = function (dcehfg) {
      return zywu['_fileTypeArr']['indexOf'](dcehfg) != -0x1 ? !![] : ![];
    }, zywu['getFileInfo'] = function (ilhjm) {
      var _321 = ilhjm['split']('?')[0x0],
          cedabf = zywu['filesListObj'][_321];if (cedabf == null) return null;else return cedabf;return null;
    }, zywu['onFileUpdate'] = function (sqrvut, dabe) {
      var knpml = sqrvut['split']('/'),
          khlji = knpml[knpml['length'] - 0x1],
          rqnpso = zywu['getFileInfo'](dabe);if (rqnpso == null) zywu['onSaveFile'](dabe, khlji);else {
        if (rqnpso['readyUrl'] != dabe) zywu['remove'](khlji, dabe);
      }
    }, zywu['exits'] = function (dfgc, figjk) {
      var puqtrs = zywu['getFileNativePath'](dfgc);zywu['fs']['getFileInfo']({ 'filePath': puqtrs, 'success': function (tsuvxw) {
          figjk != null && figjk['runWith']([0x0, tsuvxw]);
        }, 'fail': function (kgjfih) {
          figjk != null && figjk['runWith']([0x1, kgjfih]);
        } });
    }, zywu['read'] = function (ors, yw$v, wvuyxz, polmqn) {
      yw$v === void 0x0 && (yw$v = 'ascill'), polmqn === void 0x0 && (polmqn = '');var $_;polmqn != '' ? $_ = zywu['getFileNativePath'](ors) : $_ = ors, zywu['fs']['readFile']({ 'filePath': $_, 'encoding': yw$v, 'success': function (y1z_) {
          wvuyxz != null && wvuyxz['runWith']([0x0, y1z_]);
        }, 'fail': function (sqorpt) {
          if (sqorpt && polmqn != '') zywu['down'](polmqn, yw$v, wvuyxz, polmqn);else wvuyxz != null && wvuyxz['runWith']([0x1]);
        } });
    }, zywu['readNativeFile'] = function (stuqv, _1z$y) {
      zywu['fs']['readFile']({ 'filePath': stuqv, 'encoding': '', 'success': function ($y_01z) {
          _1z$y != null && _1z$y['runWith']([0x0]);
        }, 'fail': function (yzxuwv) {
          _1z$y != null && _1z$y['runWith']([0x1]);
        } });
    }, zywu['down'] = function (xyvw, gdihe, usqprt, ljmon) {
      gdihe === void 0x0 && (gdihe = 'ascill'), ljmon === void 0x0 && (ljmon = '');var vrustq = zywu['getFileNativePath'](ljmon),
          snoprq = zywu['wxdown']({ 'url': xyvw, 'filePath': vrustq, 'success': function (omkpln) {
          if (omkpln['statusCode'] === 0xc8) zywu['readFile'](omkpln['filePath'], gdihe, usqprt, ljmon);
        }, 'fail': function (zyvw$x) {
          usqprt != null && usqprt['runWith']([0x1, zyvw$x]);
        } });snoprq['onProgressUpdate'](function (vwyuxt) {
        usqprt != null && usqprt['runWith']([0x2, vwyuxt['progress']]);
      });
    }, zywu['readFile'] = function (qo, mplko, $y0x_, $_zyx0) {
      mplko === void 0x0 && (mplko = 'ascill'), $_zyx0 === void 0x0 && ($_zyx0 = ''), zywu['fs']['readFile']({ 'filePath': qo, 'encoding': mplko, 'success': function (pormn) {
          if (qo['indexOf']('http://') != -0x1 || qo['indexOf']('https://') != -0x1) zywu['onFileUpdate'](qo, $_zyx0);$y0x_ != null && $y0x_['runWith']([0x0, pormn]);
        }, 'fail': function (xzuvyw) {
          if (xzuvyw) $y0x_ != null && $y0x_['runWith']([0x1, xzuvyw]);
        } });
    }, zywu['downImg'] = function (vtqsru, pturqs, lomj) {
      lomj === void 0x0 && (lomj = '');var rutpq = zywu['wxdown']({ 'url': vtqsru, 'success': function (knoplm) {
          knoplm['statusCode'] === 0xc8 && zywu['copyFile'](knoplm['tempFilePath'], lomj, pturqs);
        }, 'fail': function (_42310) {
          pturqs != null && pturqs['runWith']([0x1, _42310]);
        } });
    }, zywu['copyFile'] = function (inmlk, dhfecg, wyut) {
      var mkhj = inmlk['split']('/'),
          yxuz = mkhj[mkhj['length'] - 0x1],
          prsuq = dhfecg['split']('?')[0x0],
          kjfgi = zywu['getFileInfo'](dhfecg),
          gbecdf = zywu['getFileNativePath'](yxuz);zywu['fs']['copyFile']({ 'srcPath': inmlk, 'destPath': gbecdf, 'success': function (ytxuvw) {
          if (!kjfgi) zywu['onSaveFile'](dhfecg, yxuz), wyut != null && wyut['runWith']([0x0]);else {
            if (kjfgi['readyUrl'] != dhfecg) zywu['remove'](yxuz, dhfecg, wyut);
          }
        }, 'fail': function (ighjf) {
          wyut != null && wyut['runWith']([0x1, ighjf]);
        } });
    }, zywu['getFileNativePath'] = function (omnp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + omnp;
    }, zywu['remove'] = function (lihkgj, xwst, tqurvs) {
      xwst === void 0x0 && (xwst = '');var bacdfe = zywu['getFileInfo'](xwst),
          sqortp = zywu['getFileNativePath'](bacdfe['md5']);xvzwy$['loader']['clearRes'](bacdfe['readyUrl']), zywu['fs']['unlink']({ 'filePath': sqortp, 'success': function (qpns) {
          if (xwst != '') zywu['onSaveFile'](xwst, lihkgj);tqurvs != null && tqurvs['runWith']([0x0]);
        }, 'fail': function (stvwur) {} });
    }, zywu['onSaveFile'] = function (sutpq, _$032) {
      var xyv$w = sutpq['split']('?')[0x0];zywu['filesListObj'][xyv$w] = { 'md5': _$032, 'readyUrl': sutpq }, zywu['fs']['writeFile']({ 'filePath': zywu['fileNativeDir'] + '/' + zywu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zywu['filesListObj']), 'success': function (egh) {
          console['log']('写入测试测试成功：', egh);
        }, 'fail': function (nrsqop) {
          console['log']('写入测试测试失败：', nrsqop);
        } });
    }, zywu['existDir'] = function (vwut, snor) {
      zywu['fs']['mkdir']({ 'dirPath': vwut, 'success': function (eafd) {
          snor != null && snor['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hijgef) {
          if (hijgef['errMsg']['indexOf']('file already exists') != -0x1) zywu['readSync'](zywu['fileListName'], 'utf8', snor);else snor != null && snor['runWith']([0x1, hijgef]);
        } });
    }, zywu['readSync'] = function (rtuws, ebdfcg, likn, lkjim) {
      ebdfcg === void 0x0 && (ebdfcg = 'ascill'), lkjim === void 0x0 && (lkjim = '');var rqts = zywu['getFileNativePath'](rtuws),
          z10$2_;try {
        z10$2_ = zywu['fs']['readFileSync'](rqts), likn != null && likn['runWith']([0x0, { 'data': z10$2_ }]);
      } catch (debf) {
        likn != null && likn['runWith']([0x1]);
      }
    }, zywu['readCache'] = function () {}, zywu['writeCache'] = function (dhfeig) {
      var ilhk = readyUrl['split']('?')[0x0];zywu['filesListObj'][ilhk] = { 'md5': md5Name, 'readyUrl': readyUrl }, zywu['fs']['writeFile']({ 'filePath': zywu['fileNativeDir'] + '/' + zywu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](zywu['filesListObj']), 'success': function (vzuyw) {}, 'fail': function (gdecbf) {} });
    }, zywu['setNativeFileDir'] = function (rtwsu) {
      zywu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rtwsu;
    }, zywu['filesListObj'] = {}, zywu['fileNativeDir'] = null, zywu['fileListName'] = 'layaairfiles.txt', zywu['ziyuFileData'] = {}, sqnro(zywu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), zywu;
  }(bfed),
      ehdif = function (kfhgi) {
    function cfgh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cfgh['__super']['call'](this), this['_sound'] = cfgh['_createSound']();
    }noqrs(cfgh, 'laya.wx.mini.MiniSound', kfhgi);var feijgh = cfgh['prototype'];return feijgh['load'] = function (y_$zw) {
      var cafdbe = this;y_$zw = ebdgfc['formatURL'](y_$zw), this['url'] = y_$zw;if (cfgh['_audioCache'][y_$zw]) {
        this['event']('complete');return;
      }function pmolnk() {
        if (cfgh['_null'] != undefined) cafdbe['_sound']['onCanplay'](cfgh['_null']), cafdbe['_sound']['onError'](cfgh['_null']);else try {
          cafdbe['_sound']['onCanplay'](null), cafdbe['_sound']['onError'](null), cfgh['_null'] = null;
        } catch (wyx$z_) {
          console['warn']('[wxmini] _clearSound:' + wyx$z_), cafdbe['_sound']['onCanplay'](mlkn), cafdbe['_sound']['onError'](mlkn), cfgh['_null'] = mlkn;
        }
      }function klihjm() {
        pmolnk(), tusvrq['loaded'] = !![], tusvrq['event']('complete'), cfgh['_audioCache'][tusvrq['url']] = tusvrq;
      }function ihjkml(hdcfe) {
        console['error']('errCode=' + hdcfe['errCode'] + '  errMsg=' + hdcfe['errMsg']), pmolnk(), tusvrq['event']('error');
      }function mlkn() {}this['_sound']['onCanplay'](klihjm), this['_sound']['onError'](ihjkml), this['_sound']['src'] = y_$zw;var tusvrq = this;
    }, feijgh['play'] = function (dfhec, kjnlim) {
      dfhec === void 0x0 && (dfhec = 0x0), kjnlim === void 0x0 && (kjnlim = 0x0);var lmnp;if (this['url'] == sptro['_tMusic']) {
        if (!cfgh['_musicAudio']) cfgh['_musicAudio'] = cfgh['_createSound']();lmnp = cfgh['_musicAudio'];
      } else lmnp = cfgh['_createSound']();lmnp['src'] = this['url'];var vwzxy$ = new dafbc(lmnp);return vwzxy$['url'] = this['url'], vwzxy$['loops'] = kjnlim, vwzxy$['startTime'] = dfhec, vwzxy$['play'](), sptro['addChannel'](vwzxy$), vwzxy$;
    }, feijgh['dispose'] = function () {
      var lkmopn = cfgh['_audioCache'][this['url']];lkmopn && (lkmopn['src'] = '', delete cfgh['_audioCache'][this['url']]);
    }, jgikh(0x0, feijgh, 'duration', function () {
      return this['_sound']['duration'];
    }), cfgh['_createSound'] = function () {
      return cfgh['_id']++, ijlhk['window']['wx']['createInnerAudioContext']();
    }, cfgh['_musicAudio'] = null, cfgh['_id'] = 0x0, cfgh['_audioCache'] = {}, cfgh['_null'] = undefined, cfgh;
  }(bfed),
      dafbc = function (cdebgf) {
    function degihf(eidhf) {
      this['_audio'] = null, this['_onEnd'] = null, degihf['__super']['call'](this), this['_audio'] = eidhf, this['_onEnd'] = yzx$vw['bind'](this['__onEnd'], this), eidhf['onEnded'](this['_onEnd']);
    }noqrs(degihf, 'laya.wx.mini.MiniSoundChannel', cdebgf);var $yz_01 = degihf['prototype'];return $yz_01['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xvzwy$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $yz_01['__onNull'] = function () {}, $yz_01['play'] = function () {
      this['isStopped'] = ![], sptro['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $yz_01['stop'] = function () {
      this['isStopped'] = !![], sptro['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (degihf['_null'] != undefined) this['_audio']['onEnded'](degihf['_null']);else try {
        this['_audio']['onEnded'](null), degihf['_null'] = null;
      } catch (hijlk) {
        console['warn']('[wxmini] stop:' + hijlk), this['_audio']['onEnded'](yzx$vw['bind'](this['__onNull'], this)), degihf['_null'] = yzx$vw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $yz_01['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $yz_01['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], sptro['addChannel'](this), this['_audio']['play']();
    }, jgikh(0x0, $yz_01, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jgikh(0x0, $yz_01, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jgikh(0x0, $yz_01, 'volume', function () {
      return 0x1;
    }, function (lmonpk) {}), degihf['_null'] = undefined, degihf;
  }(khig);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fkjg in Laya) {
    var mjlokn = Laya[fkjg];mjlokn && mjlokn['__isclass'] && (exports[fkjg] = mjlokn);
  }
});