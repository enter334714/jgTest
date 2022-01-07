var _ = wx.y$;
(function (window, document, fhgdce) {
  var stwuxv = fhgdce['un'],
      gihefd = fhgdce['uns'],
      wvyzx$ = fhgdce['static'],
      qolpm = fhgdce['class'],
      ighfk = fhgdce['getset'],
      ihjkgf = fhgdce['__newvec'],
      lhkmij = laya['utils']['Browser'],
      rvqsut = laya['events']['Event'],
      _23140 = laya['events']['EventDispatcher'],
      lpn = laya['resource']['HTMLImage'],
      jkgifh = laya['utils']['Handler'],
      _z$0y = laya['display']['Input'],
      inkmj = laya['net']['Loader'],
      lnpkom = laya['maths']['Matrix'],
      ead = laya['renders']['Render'],
      $vywz = laya['utils']['RunDriver'],
      wzvy$ = laya['media']['Sound'],
      tsupr = laya['media']['SoundChannel'],
      dcgbef = laya['media']['SoundManager'],
      ljnkmi = laya['display']['Stage'],
      wsvtxu = laya['net']['URL'],
      _01z$2 = laya['utils']['Utils'],
      efcdab = function () {
    function iglk() {}return qolpm(iglk, 'laya.wx.mini.MiniAdpter'), iglk['getJson'] = function (ghifjk) {
      return JSON['parse'](ghifjk);
    }, iglk['init'] = function (diefg, jihgk) {
      diefg === void 0x0 && (diefg = ![]), jihgk === void 0x0 && (jihgk = ![]);if (iglk['_inited']) return;iglk['window'] = window;if (iglk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;iglk['_inited'] = !![], iglk['isZiYu'] = jihgk, iglk['isPosMsgYu'] = diefg, iglk['EnvConfig'] = {}, !iglk['isZiYu'] && (trpsqu['setNativeFileDir']('/layaairGame'), trpsqu['existDir'](trpsqu['fileNativeDir'], jkgifh['create'](iglk, iglk['onMkdirCallBack']))), iglk['window']['focus'] = function () {}, fhgdce['getUrlPath'] = function () {}, iglk['window']['logtime'] = function (zy0$1_) {}, iglk['window']['alertTimeLog'] = function (loqn) {}, iglk['window']['resetShareInfo'] = function () {}, iglk['window']['CanvasRenderingContext2D'] = function () {}, iglk['window']['CanvasRenderingContext2D']['prototype'] = iglk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], iglk['window']['document']['body']['appendChild'] = function () {}, iglk['EnvConfig']['pixelRatioInt'] = 0x0, $vywz['getPixelRatio'] = iglk['pixelRatio'], iglk['_preCreateElement'] = lhkmij['createElement'], lhkmij['createElement'] = iglk['createElement'], $vywz['createShaderCondition'] = iglk['createShaderCondition'], _01z$2['parseXMLFromString'] = iglk['parseXMLFromString'], _z$0y['_createInputElement'] = qlmonp['_createInputElement'], iglk['EnvConfig']['load'] = inkmj['prototype']['load'], inkmj['prototype']['load'] = sqprut['prototype']['load'], iglk['isZiYu'] && diefg && wx['onMessage'](function (vrsq) {
        vrsq['isLoad'] && (trpsqu['ziyuFileData'][vrsq['url']] = vrsq['data']);
      });
    }, iglk['onMkdirCallBack'] = function (likmh, jghkl) {
      if (!likmh) trpsqu['filesListObj'] = JSON['parse'](jghkl['data']);
    }, iglk['pixelRatio'] = function () {
      if (!iglk['EnvConfig']['pixelRatioInt']) try {
        var iedfg = wx['getSystemInfoSync']();return iglk['EnvConfig']['pixelRatioInt'] = iedfg['pixelRatio'], iedfg = iedfg, iedfg['pixelRatio'];
      } catch (tsvrqu) {}return iglk['EnvConfig']['pixelRatioInt'];
    }, iglk['createElement'] = function (lghikj) {
      if (lghikj == 'canvas') {
        var jgikhf;return iglk['idx'] == 0x1 ? iglk['isZiYu'] ? (jgikhf = sharedCanvas, jgikhf['style'] = {}) : jgikhf = window['canvas'] : jgikhf = window['wx']['createCanvas'](), iglk['idx']++, jgikhf;
      } else {
        if (lghikj == 'textarea' || lghikj == 'input') return iglk['onCreateInput'](lghikj);else {
          if (lghikj == 'div') {
            var vwuyzx = iglk['_preCreateElement'](lghikj);return vwuyzx['contains'] = function (z_x0$y) {
              return null;
            }, vwuyzx['removeChild'] = function (fkg) {}, vwuyzx;
          } else return iglk['_preCreateElement'](lghikj);
        }
      }
    }, iglk['onCreateInput'] = function (begcfd) {
      var srvuw = iglk['_preCreateElement'](begcfd);return srvuw['focus'] = qlmonp['wxinputFocus'], srvuw['blur'] = qlmonp['wxinputblur'], srvuw['style'] = {}, srvuw['value'] = 0x0, srvuw['parentElement'] = {}, srvuw['placeholder'] = {}, srvuw['type'] = {}, srvuw['setColor'] = function (nqpol) {}, srvuw['setType'] = function (hgcd) {}, srvuw['setFontFace'] = function (ywtvxu) {}, srvuw['addEventListener'] = function (fcbda) {}, srvuw['contains'] = function (nlqmp) {
        return null;
      }, srvuw['removeChild'] = function (lmkjn) {}, srvuw;
    }, iglk['createShaderCondition'] = function (afecbd) {
      var y_0$zx = this,
          dcgbfe = function () {
        var pomrn = afecbd;return y_0$zx[afecbd['replace']('this.', '')];
      };return dcgbfe;
    }, iglk['EnvConfig'] = null, iglk['window'] = null, iglk['_preCreateElement'] = null, iglk['_inited'] = ![], iglk['wxRequest'] = null, iglk['systemInfo'] = null, iglk['version'] = '0.0.1', iglk['isZiYu'] = ![], iglk['isPosMsgYu'] = ![], iglk['parseXMLFromString'] = function (fhgeij) {
      var joklnm, dcfae;fhgeij = fhgeij['replace'](/>\s+</g, '><');try {
        joklnm = new window['Parser']['DOMParser']()['parseFromString'](fhgeij, 'text/xml');
      } catch (zuyxvw) {
        throw '需要引入xml解析库文件';
      }return joklnm;
    }, iglk['idx'] = 0x1, iglk;
  }(),
      jmilk = function () {
    function decbg() {}qolpm(decbg, 'laya.wx.mini.MiniImage');var gcdeh = decbg['prototype'];return gcdeh['_loadImage'] = function (nprs) {
      var ruswvt = this,
          xsuwtv = ![];nprs['indexOf']('layaNativeDir/') == -0x1 && (xsuwtv = !![], nprs = wsvtxu['formatURL'](nprs));if (!trpsqu['getFileInfo'](nprs)) {
        if (nprs['indexOf']('http://') != -0x1 || nprs['indexOf']('https://') != -0x1) trpsqu['downImg'](nprs, new jkgifh(decbg, decbg['onDownImgCallBack'], [nprs, ruswvt]), nprs);else decbg['onCreateImage'](nprs, ruswvt, !![]);
      } else decbg['onCreateImage'](nprs, ruswvt, !xsuwtv);
    }, decbg['onDownImgCallBack'] = function (jhei, wvurts, wvzy) {
      if (!wvzy) decbg['onCreateImage'](jhei, wvurts);else wvurts['onError'](null);
    }, decbg['onCreateImage'] = function (z0$_yx, vwzyxu, psrqu) {
      psrqu === void 0x0 && (psrqu = ![]);var jhlkgi;if (!psrqu) {
        var dfeg = trpsqu['getFileInfo'](z0$_yx),
            yxwv$z = dfeg['md5'];jhlkgi = trpsqu['getFileNativePath'](yxwv$z);
      } else jhlkgi = z0$_yx;if (vwzyxu['imgCache'] == null) vwzyxu['imgCache'] = {};var nmlqp;function pmklno() {
        nmlqp['onload'] = null, nmlqp['onerror'] = null, delete vwzyxu['imgCache'][z0$_yx];
      };var wyxuv = function () {
        pmklno(), vwzyxu['onLoaded'](nmlqp);
      },
          zywvux = function () {
        pmklno(), vwzyxu['event']('error', 'Load image failed');
      };vwzyxu['_type'] == 'nativeimage' ? (nmlqp = new lhkmij['window']['Image'](), nmlqp['crossOrigin'] = '', nmlqp['onload'] = wyxuv, nmlqp['onerror'] = zywvux, nmlqp['src'] = jhlkgi, vwzyxu['imgCache'][z0$_yx] = nmlqp) : new lpn['create'](jhlkgi, { 'onload': wyxuv, 'onerror': zywvux, 'onCreate': function ($_10zy) {
          nmlqp = $_10zy, vwzyxu['imgCache'][z0$_yx] = $_10zy;
        } });
    }, decbg;
  }(),
      qlmonp = function () {
    function abfdec() {}return qolpm(abfdec, 'laya.wx.mini.MiniInput'), abfdec['_createInputElement'] = function () {
      _z$0y['_initInput'](_z$0y['area'] = lhkmij['createElement']('textarea')), _z$0y['_initInput'](_z$0y['input'] = lhkmij['createElement']('input')), _z$0y['inputContainer'] = lhkmij['createElement']('div'), _z$0y['inputContainer']['style']['position'] = 'absolute', _z$0y['inputContainer']['style']['zIndex'] = 0x186a0, lhkmij['container']['appendChild'](_z$0y['inputContainer']), _z$0y['inputContainer']['setPos'] = function (w$_yzx, wyvxuz) {
        _z$0y['inputContainer']['style']['left'] = w$_yzx + 'px', _z$0y['inputContainer']['style']['top'] = wyvxuz + 'px';
      }, fhgdce['stage']['on']('resize', null, abfdec['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qrusp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dcgbef['_soundClass'] = dbgcf, dcgbef['_musicClass'] = dbgcf;
    }, abfdec['_onStageResize'] = function () {
      var yzv$w = fhgdce['stage']['_canvasTransform']['identity']();yzv$w['scale'](lhkmij['width'] / ead['canvas']['width'] / $vywz['getPixelRatio'](), lhkmij['height'] / ead['canvas']['height'] / $vywz['getPixelRatio']());
    }, abfdec['wxinputFocus'] = function (plnmo) {
      var z120 = _z$0y['inputElement']['target'];if (z120 && !z120['editable']) return;efcdab['window']['wx']['offKeyboardConfirm'](), efcdab['window']['wx']['offKeyboardInput'](), efcdab['window']['wx']['showKeyboard']({ 'defaultValue': z120['text'], 'maxLength': z120['maxChars'], 'multiple': z120['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lqm) {}, 'fail': function (_yz01$) {} }), efcdab['window']['wx']['onKeyboardConfirm'](function (tsqor) {
        var mij = tsqor ? tsqor['value'] : '';z120['text'] = mij, z120['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), efcdab['window']['wx']['onKeyboardInput'](function (rutsw) {
        var jgheif = rutsw ? rutsw['value'] : '';if (!z120['multiline']) {
          if (jgheif['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }z120['text'] = jgheif, z120['event']('input');
      });
    }, abfdec['inputEnter'] = function () {
      _z$0y['inputElement']['target']['focus'] = ![];
    }, abfdec['wxinputblur'] = function () {
      abfdec['hideKeyboard']();
    }, abfdec['hideKeyboard'] = function () {
      efcdab['window']['wx']['offKeyboardConfirm'](), efcdab['window']['wx']['offKeyboardInput'](), efcdab['window']['wx']['hideKeyboard']({ 'success': function (ikhgl) {
          console['log']('隐藏键盘');
        }, 'fail': function (wvtusr) {
          console['log']('隐藏键盘出错:' + (wvtusr ? wvtusr['errMsg'] : ''));
        } });
    }, abfdec;
  }(),
      sqprut = function () {
    function spon() {}qolpm(spon, 'laya.wx.mini.MiniLoader');var gfihde = spon['prototype'];return gfihde['load'] = function (nospr, tsruw, cdfbe, _$z01, dgfbe) {
      cdfbe === void 0x0 && (cdfbe = !![]), dgfbe === void 0x0 && (dgfbe = ![]);var imjn = this;imjn['_url'] = nospr;if (nospr['indexOf']('data:image') === 0x0) imjn['_type'] = tsruw = 'image';else imjn['_type'] = tsruw || (tsruw = imjn['getTypeFromUrl'](nospr));imjn['_cache'] = cdfbe, imjn['_data'] = null;var _$y01z = 'ascii';if (nospr['indexOf']('.fnt') != -0x1) _$y01z = 'utf8';else tsruw == 'arraybuffer' && (_$y01z = '');;var fdca = _01z$2['getFileExtension'](nospr);if (spon['_fileTypeArr']['indexOf'](fdca) != -0x1) efcdab['EnvConfig']['load']['call'](this, nospr, tsruw, cdfbe, _$z01, dgfbe);else {
        if (!trpsqu['getFileInfo'](nospr)) {
          if (nospr['indexOf']('layaNativeDir/') != -0x1) {
            if (efcdab['isZiYu']) {
              var cfeba = trpsqu['ziyuFileData'][nospr];imjn['onLoaded'](cfeba);return;
            } else {
              cosnole['log']('read read'), trpsqu['read'](nospr, _$y01z, new jkgifh(spon, spon['onReadNativeCallBack'], [_$y01z, nospr, tsruw, cdfbe, _$z01, dgfbe, imjn]));return;
            }
          }if (wsvtxu['rootPath'] == '') var x$yz_ = nospr;else x$yz_ = nospr['split'](wsvtxu['rootPath'])[0x0];nospr['indexOf']('http://') != -0x1 || nospr['indexOf']('https://') != -0x1 ? efcdab['EnvConfig']['load']['call'](imjn, nospr, tsruw, cdfbe, _$z01, dgfbe) : trpsqu['readFile'](x$yz_, _$y01z, new jkgifh(spon, spon['onReadNativeCallBack'], [_$y01z, nospr, tsruw, cdfbe, _$z01, dgfbe, imjn]), nospr);
        } else efcdab['EnvConfig']['load']['call'](this, nospr, tsruw, cdfbe, _$z01, dgfbe);
      }
    }, gfihde['resMgrLoad'] = function (fjehgi, imljk, orpqnm, srptq, knlijm, pormnq, onmjl) {
      orpqnm === void 0x0 && (orpqnm = 0x0), srptq === void 0x0 && (srptq = ![]), knlijm === void 0x0 && (knlijm = ![]), pormnq === void 0x0 && (pormnq = 0x0), onmjl === void 0x0 && (onmjl = 0x3), fjehgi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fjehgi), efcdab['EnvConfig']['resMgrLoad'](fjehgi, (utwvsr, xy_z, hkjilm) => {
        spon['prototype']['resMgrLoadCallBack'](utwvsr, xy_z, hkjilm, imljk);
      }, orpqnm, srptq, knlijm, pormnq, onmjl);
    }, gfihde['resMgrLoadCallBack'] = function (jgif, jimkn, srptoq, lmnij) {
      console['log']('buff:::', jgif, srptoq, trpsqu['fileNativeDir'] + '///' + trpsqu['fileListName']), lmnij(jgif, jimkn, srptoq);
    }, gfihde['clearRes'] = function (mrqp, aefdb) {
      aefdb === void 0x0 && (aefdb = ![]);var fjkhig = this;fjkhig['clearRes'](mrqp, aefdb);var otr = trpsqu['getFileInfo'](mrqp);if (otr && (mrqp['indexOf']('http://') != -0x1 || mrqp['indexOf']('https://') != -0x1)) {
        var wuvxz = otr['md5'],
            opqr = trpsqu['getFileNativePath'](wuvxz);trpsqu['remove'](opqr);
      }
    }, spon['onReadNativeCallBack'] = function (xwvuty, sqvurt, khlijm, rusvq, kimjhl, oqtr, sqvut, rvsqt, $ywvz) {
      rusvq === void 0x0 && (rusvq = !![]), oqtr === void 0x0 && (oqtr = ![]), rvsqt === void 0x0 && (rvsqt = 0x0);if (!rvsqt) {
        var w$yz;if (khlijm == 'json' || khlijm == 'atlas') w$yz = efcdab['getJson']($ywvz['data']);else khlijm == 'xml' ? w$yz = _01z$2['parseXMLFromString']($ywvz['data']) : w$yz = $ywvz['data'];sqvut['onLoaded'](w$yz), !efcdab['isZiYu'] && efcdab['isPosMsgYu'] && khlijm != 'arraybuffer' && wx['postMessage']({ 'url': sqvurt, 'data': w$yz, 'isLoad': !![] });
      } else rvsqt == 0x1 && efcdab['EnvConfig']['load']['call'](sqvut, sqvurt, khlijm, rusvq, kimjhl, oqtr);
    }, wvyzx$(spon, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), spon;
  }(),
      trpsqu = function (gcdh) {
    function _y0zx() {
      _y0zx['__super']['call'](this);;
    }return qolpm(_y0zx, 'laya.wx.mini.MiniFileMgr', gcdh), _y0zx['isLoadFile'] = function (efcbda) {
      return _y0zx['_fileTypeArr']['indexOf'](efcbda) != -0x1 ? !![] : ![];
    }, _y0zx['getFileInfo'] = function (xw) {
      var usptqr = xw['split']('?')[0x0],
          onsq = _y0zx['filesListObj'][usptqr];if (onsq == null) return null;else return onsq;return null;
    }, _y0zx['onFileUpdate'] = function (gjif, toprs) {
      var fcgdbe = gjif['split']('/'),
          dcgbe = fcgdbe[fcgdbe['length'] - 0x1],
          idgfe = _y0zx['getFileInfo'](toprs);if (idgfe == null) _y0zx['onSaveFile'](toprs, dcgbe);else {
        if (idgfe['readyUrl'] != toprs) _y0zx['remove'](dcgbe, toprs);
      }
    }, _y0zx['exits'] = function (mopqrn, fghc) {
      var qsnopr = _y0zx['getFileNativePath'](mopqrn);_y0zx['fs']['getFileInfo']({ 'filePath': qsnopr, 'success': function (gdbcef) {
          fghc != null && fghc['runWith']([0x0, gdbcef]);
        }, 'fail': function (svtqur) {
          fghc != null && fghc['runWith']([0x1, svtqur]);
        } });
    }, _y0zx['read'] = function ($y0z1_, stqorp, osprn, rompq) {
      stqorp === void 0x0 && (stqorp = 'ascill'), rompq === void 0x0 && (rompq = '');var tywuxv;rompq != '' ? tywuxv = _y0zx['getFileNativePath']($y0z1_) : tywuxv = $y0z1_, _y0zx['fs']['readFile']({ 'filePath': tywuxv, 'encoding': stqorp, 'success': function (vsruwt) {
          osprn != null && osprn['runWith']([0x0, vsruwt]);
        }, 'fail': function (qurvst) {
          if (qurvst && rompq != '') _y0zx['down'](rompq, stqorp, osprn, rompq);else osprn != null && osprn['runWith']([0x1]);
        } });
    }, _y0zx['readNativeFile'] = function (npmolk, gljkih) {
      _y0zx['fs']['readFile']({ 'filePath': npmolk, 'encoding': '', 'success': function (jifkg) {
          gljkih != null && gljkih['runWith']([0x0]);
        }, 'fail': function (xvuswt) {
          gljkih != null && gljkih['runWith']([0x1]);
        } });
    }, _y0zx['down'] = function (yzuxw, cgfde, ghdecf, ijghkl) {
      cgfde === void 0x0 && (cgfde = 'ascill'), ijghkl === void 0x0 && (ijghkl = '');var vyxz$ = _y0zx['getFileNativePath'](ijghkl),
          hjfgie = _y0zx['wxdown']({ 'url': yzuxw, 'filePath': vyxz$, 'success': function (ijghf) {
          if (ijghf['statusCode'] === 0xc8) _y0zx['readFile'](ijghf['filePath'], cgfde, ghdecf, ijghkl);
        }, 'fail': function (x_z$y0) {
          ghdecf != null && ghdecf['runWith']([0x1, x_z$y0]);
        } });hjfgie['onProgressUpdate'](function (vstqu) {
        ghdecf != null && ghdecf['runWith']([0x2, vstqu['progress']]);
      });
    }, _y0zx['readFile'] = function (ihlj, ijlnk, gjfe, hfgjei) {
      ijlnk === void 0x0 && (ijlnk = 'ascill'), hfgjei === void 0x0 && (hfgjei = ''), _y0zx['fs']['readFile']({ 'filePath': ihlj, 'encoding': ijlnk, 'success': function (rpstq) {
          if (ihlj['indexOf']('http://') != -0x1 || ihlj['indexOf']('https://') != -0x1) _y0zx['onFileUpdate'](ihlj, hfgjei);gjfe != null && gjfe['runWith']([0x0, rpstq]);
        }, 'fail': function (fkgji) {
          if (fkgji) gjfe != null && gjfe['runWith']([0x1, fkgji]);
        } });
    }, _y0zx['downImg'] = function (z_01y, kjfgi, xtwsuv) {
      xtwsuv === void 0x0 && (xtwsuv = '');var lijm = _y0zx['wxdown']({ 'url': z_01y, 'success': function (pnr) {
          pnr['statusCode'] === 0xc8 && _y0zx['copyFile'](pnr['tempFilePath'], xtwsuv, kjfgi);
        }, 'fail': function (nkpoml) {
          kjfgi != null && kjfgi['runWith']([0x1, nkpoml]);
        } });
    }, _y0zx['copyFile'] = function ($ywvx, tr, jkhlm) {
      var wtuyvx = $ywvx['split']('/'),
          hiegd = wtuyvx[wtuyvx['length'] - 0x1],
          zu = tr['split']('?')[0x0],
          _wzyx = _y0zx['getFileInfo'](tr),
          kjhgli = _y0zx['getFileNativePath'](hiegd);_y0zx['fs']['copyFile']({ 'srcPath': $ywvx, 'destPath': kjhgli, 'success': function (lkhjg) {
          if (!_wzyx) _y0zx['onSaveFile'](tr, hiegd), jkhlm != null && jkhlm['runWith']([0x0]);else {
            if (_wzyx['readyUrl'] != tr) _y0zx['remove'](hiegd, tr, jkhlm);
          }
        }, 'fail': function (urvtw) {
          jkhlm != null && jkhlm['runWith']([0x1, urvtw]);
        } });
    }, _y0zx['getFileNativePath'] = function ($zy_x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $zy_x;
    }, _y0zx['remove'] = function (heigd, trsop, ijkfg) {
      trsop === void 0x0 && (trsop = '');var hkifg = _y0zx['getFileInfo'](trsop),
          vwyut = _y0zx['getFileNativePath'](hkifg['md5']);fhgdce['loader']['clearRes'](hkifg['readyUrl']), _y0zx['fs']['unlink']({ 'filePath': vwyut, 'success': function (uptr) {
          if (trsop != '') _y0zx['onSaveFile'](trsop, heigd);ijkfg != null && ijkfg['runWith']([0x0]);
        }, 'fail': function (zvyw$x) {} });
    }, _y0zx['onSaveFile'] = function (sprn, osnprq) {
      var _xz0 = sprn['split']('?')[0x0];_y0zx['filesListObj'][_xz0] = { 'md5': osnprq, 'readyUrl': sprn }, _y0zx['fs']['writeFile']({ 'filePath': _y0zx['fileNativeDir'] + '/' + _y0zx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_y0zx['filesListObj']), 'success': function (qrpsno) {
          console['log']('写入测试测试成功：', qrpsno);
        }, 'fail': function (mnkijl) {
          console['log']('写入测试测试失败：', mnkijl);
        } });
    }, _y0zx['existDir'] = function (_12$30, fgikjh) {
      _y0zx['fs']['mkdir']({ 'dirPath': _12$30, 'success': function (rvswt) {
          fgikjh != null && fgikjh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mknolj) {
          if (mknolj['errMsg']['indexOf']('file already exists') != -0x1) _y0zx['readSync'](_y0zx['fileListName'], 'utf8', fgikjh);else fgikjh != null && fgikjh['runWith']([0x1, mknolj]);
        } });
    }, _y0zx['readSync'] = function (rqsup, klmno, cbfeg, jhkiml) {
      klmno === void 0x0 && (klmno = 'ascill'), jhkiml === void 0x0 && (jhkiml = '');var vxtwy = _y0zx['getFileNativePath'](rqsup),
          mproq;try {
        mproq = _y0zx['fs']['readFileSync'](vxtwy), cbfeg != null && cbfeg['runWith']([0x0, { 'data': mproq }]);
      } catch (hgde) {
        cbfeg != null && cbfeg['runWith']([0x1]);
      }
    }, _y0zx['readCache'] = function () {}, _y0zx['writeCache'] = function (hie) {
      var lpmo = readyUrl['split']('?')[0x0];_y0zx['filesListObj'][lpmo] = { 'md5': md5Name, 'readyUrl': readyUrl }, _y0zx['fs']['writeFile']({ 'filePath': _y0zx['fileNativeDir'] + '/' + _y0zx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_y0zx['filesListObj']), 'success': function (z0$_21) {}, 'fail': function (jgife) {} });
    }, _y0zx['setNativeFileDir'] = function (rsvtu) {
      _y0zx['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rsvtu;
    }, _y0zx['filesListObj'] = {}, _y0zx['fileNativeDir'] = null, _y0zx['fileListName'] = 'layaairfiles.txt', _y0zx['ziyuFileData'] = {}, wvyzx$(_y0zx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _y0zx;
  }(_23140),
      dbgcf = function (nplk) {
    function uwvyz() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], uwvyz['__super']['call'](this), this['_sound'] = uwvyz['_createSound']();
    }qolpm(uwvyz, 'laya.wx.mini.MiniSound', nplk);var ljkomn = uwvyz['prototype'];return ljkomn['load'] = function (ponmq) {
      var surqpt = this;ponmq = wsvtxu['formatURL'](ponmq), this['url'] = ponmq;if (uwvyz['_audioCache'][ponmq]) {
        this['event']('complete');return;
      }function svrutw() {
        if (uwvyz['_null'] != undefined) surqpt['_sound']['onCanplay'](uwvyz['_null']), surqpt['_sound']['onError'](uwvyz['_null']);else try {
          surqpt['_sound']['onCanplay'](null), surqpt['_sound']['onError'](null), uwvyz['_null'] = null;
        } catch (suvtqr) {
          console['warn']('[wxmini] _clearSound:' + suvtqr), surqpt['_sound']['onCanplay'](fheigd), surqpt['_sound']['onError'](fheigd), uwvyz['_null'] = fheigd;
        }
      }function tvsqru() {
        svrutw(), pmknlo['loaded'] = !![], pmknlo['event']('complete'), uwvyz['_audioCache'][pmknlo['url']] = pmknlo;
      }function gljkh(ljgi) {
        console['error']('errCode=' + ljgi['errCode'] + '  errMsg=' + ljgi['errMsg']), svrutw(), pmknlo['event']('error');
      }function fheigd() {}this['_sound']['onCanplay'](tvsqru), this['_sound']['onError'](gljkh), this['_sound']['src'] = ponmq;var pmknlo = this;
    }, ljkomn['play'] = function (usrtqv, xy$zw) {
      usrtqv === void 0x0 && (usrtqv = 0x0), xy$zw === void 0x0 && (xy$zw = 0x0);var jnli;if (this['url'] == dcgbef['_tMusic']) {
        if (!uwvyz['_musicAudio']) uwvyz['_musicAudio'] = uwvyz['_createSound']();jnli = uwvyz['_musicAudio'];
      } else jnli = uwvyz['_createSound']();jnli['src'] = this['url'];var $0xyz = new kjilmn(jnli);return $0xyz['url'] = this['url'], $0xyz['loops'] = xy$zw, $0xyz['startTime'] = usrtqv, $0xyz['play'](), dcgbef['addChannel']($0xyz), $0xyz;
    }, ljkomn['dispose'] = function () {
      var jkghif = uwvyz['_audioCache'][this['url']];jkghif && (jkghif['src'] = '', delete uwvyz['_audioCache'][this['url']]);
    }, ighfk(0x0, ljkomn, 'duration', function () {
      return this['_sound']['duration'];
    }), uwvyz['_createSound'] = function () {
      return uwvyz['_id']++, efcdab['window']['wx']['createInnerAudioContext']();
    }, uwvyz['_musicAudio'] = null, uwvyz['_id'] = 0x0, uwvyz['_audioCache'] = {}, uwvyz['_null'] = undefined, uwvyz;
  }(_23140),
      kjilmn = function (qonlpm) {
    function kfjh(fehgdi) {
      this['_audio'] = null, this['_onEnd'] = null, kfjh['__super']['call'](this), this['_audio'] = fehgdi, this['_onEnd'] = _01z$2['bind'](this['__onEnd'], this), fehgdi['onEnded'](this['_onEnd']);
    }qolpm(kfjh, 'laya.wx.mini.MiniSoundChannel', qonlpm);var $z_021 = kfjh['prototype'];return $z_021['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (fhgdce['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $z_021['__onNull'] = function () {}, $z_021['play'] = function () {
      this['isStopped'] = ![], dcgbef['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $z_021['stop'] = function () {
      this['isStopped'] = !![], dcgbef['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kfjh['_null'] != undefined) this['_audio']['onEnded'](kfjh['_null']);else try {
        this['_audio']['onEnded'](null), kfjh['_null'] = null;
      } catch (zyx$w_) {
        console['warn']('[wxmini] stop:' + zyx$w_), this['_audio']['onEnded'](_01z$2['bind'](this['__onNull'], this)), kfjh['_null'] = _01z$2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $z_021['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $z_021['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dcgbef['addChannel'](this), this['_audio']['play']();
    }, ighfk(0x0, $z_021, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ighfk(0x0, $z_021, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ighfk(0x0, $z_021, 'volume', function () {
      return 0x1;
    }, function (omrq) {}), kfjh['_null'] = undefined, kfjh;
  }(tsupr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jigkf in Laya) {
    var qlnopm = Laya[jigkf];qlnopm && qlnopm['__isclass'] && (exports[jigkf] = qlnopm);
  }
});