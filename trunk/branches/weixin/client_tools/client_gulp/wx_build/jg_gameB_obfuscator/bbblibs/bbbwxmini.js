var _ = wx.y$;
(function (window, document, cbfead) {
  var qtpso = cbfead['un'],
      xsuwtv = cbfead['uns'],
      prson = cbfead['static'],
      egf = cbfead['class'],
      _$210z = cbfead['getset'],
      pnqrmo = cbfead['__newvec'],
      tswvu = laya['utils']['Browser'],
      gfik = laya['events']['Event'],
      mplqo = laya['events']['EventDispatcher'],
      qmpor = laya['resource']['HTMLImage'],
      tvswru = laya['utils']['Handler'],
      rquspt = laya['display']['Input'],
      fheig = laya['net']['Loader'],
      _z2$ = laya['maths']['Matrix'],
      bceaf = laya['renders']['Render'],
      mlkjo = laya['utils']['RunDriver'],
      fjgie = laya['media']['Sound'],
      uwzyvx = laya['media']['SoundChannel'],
      _w$zx = laya['media']['SoundManager'],
      pnsqro = laya['display']['Stage'],
      edcbgf = laya['net']['URL'],
      gefdi = laya['utils']['Utils'],
      tqspo = function () {
    function acf() {}return egf(acf, 'laya.wx.mini.MiniAdpter'), acf['getJson'] = function (decfa) {
      return JSON['parse'](decfa);
    }, acf['init'] = function ($z201_, $01_y) {
      $z201_ === void 0x0 && ($z201_ = ![]), $01_y === void 0x0 && ($01_y = ![]);if (acf['_inited']) return;acf['window'] = window;if (acf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;acf['_inited'] = !![], acf['isZiYu'] = $01_y, acf['isPosMsgYu'] = $z201_, acf['EnvConfig'] = {}, !acf['isZiYu'] && (ihljgk['setNativeFileDir']('/layaairGame'), ihljgk['existDir'](ihljgk['fileNativeDir'], tvswru['create'](acf, acf['onMkdirCallBack']))), acf['window']['focus'] = function () {}, cbfead['getUrlPath'] = function () {}, acf['window']['logtime'] = function (egdif) {}, acf['window']['alertTimeLog'] = function (rpostq) {}, acf['window']['resetShareInfo'] = function () {}, acf['window']['CanvasRenderingContext2D'] = function () {}, acf['window']['CanvasRenderingContext2D']['prototype'] = acf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], acf['window']['document']['body']['appendChild'] = function () {}, acf['EnvConfig']['pixelRatioInt'] = 0x0, mlkjo['getPixelRatio'] = acf['pixelRatio'], acf['_preCreateElement'] = tswvu['createElement'], tswvu['createElement'] = acf['createElement'], mlkjo['createShaderCondition'] = acf['createShaderCondition'], gefdi['parseXMLFromString'] = acf['parseXMLFromString'], rquspt['_createInputElement'] = mniklj['_createInputElement'], acf['EnvConfig']['load'] = fheig['prototype']['load'], fheig['prototype']['load'] = egfdih['prototype']['load'], acf['isZiYu'] && $z201_ && wx['onMessage'](function (twsuv) {
        twsuv['isLoad'] && (ihljgk['ziyuFileData'][twsuv['url']] = twsuv['data']);
      });
    }, acf['onMkdirCallBack'] = function (plnq, kjnlmo) {
      if (!plnq) ihljgk['filesListObj'] = JSON['parse'](kjnlmo['data']);
    }, acf['pixelRatio'] = function () {
      if (!acf['EnvConfig']['pixelRatioInt']) try {
        var fjeig = wx['getSystemInfoSync']();return acf['EnvConfig']['pixelRatioInt'] = fjeig['pixelRatio'], fjeig = fjeig, fjeig['pixelRatio'];
      } catch (z$yxvw) {}return acf['EnvConfig']['pixelRatioInt'];
    }, acf['createElement'] = function (loj) {
      if (loj == 'canvas') {
        var vuyz;return acf['idx'] == 0x1 ? acf['isZiYu'] ? (vuyz = sharedCanvas, vuyz['style'] = {}) : vuyz = window['canvas'] : vuyz = window['wx']['createCanvas'](), acf['idx']++, vuyz;
      } else {
        if (loj == 'textarea' || loj == 'input') return acf['onCreateInput'](loj);else {
          if (loj == 'div') {
            var nql = acf['_preCreateElement'](loj);return nql['contains'] = function (hklmij) {
              return null;
            }, nql['removeChild'] = function (_xy$zw) {}, nql;
          } else return acf['_preCreateElement'](loj);
        }
      }
    }, acf['onCreateInput'] = function (igkf) {
      var _032 = acf['_preCreateElement'](igkf);return _032['focus'] = mniklj['wxinputFocus'], _032['blur'] = mniklj['wxinputblur'], _032['style'] = {}, _032['value'] = 0x0, _032['parentElement'] = {}, _032['placeholder'] = {}, _032['type'] = {}, _032['setColor'] = function (otsp) {}, _032['setType'] = function (wusvxt) {}, _032['setFontFace'] = function (ikjgh) {}, _032['addEventListener'] = function (hgjl) {}, _032['contains'] = function (xw$zv) {
        return null;
      }, _032['removeChild'] = function (jlkmih) {}, _032;
    }, acf['createShaderCondition'] = function (_1y0z$) {
      var fijkhg = this,
          suvwtr = function () {
        var x$zw_ = _1y0z$;return fijkhg[_1y0z$['replace']('this.', '')];
      };return suvwtr;
    }, acf['EnvConfig'] = null, acf['window'] = null, acf['_preCreateElement'] = null, acf['_inited'] = ![], acf['wxRequest'] = null, acf['systemInfo'] = null, acf['version'] = '0.0.1', acf['isZiYu'] = ![], acf['isPosMsgYu'] = ![], acf['parseXMLFromString'] = function (ruqt) {
      var lnpmok, tsr;ruqt = ruqt['replace'](/>\s+</g, '><');try {
        lnpmok = new window['Parser']['DOMParser']()['parseFromString'](ruqt, 'text/xml');
      } catch (yzwvx$) {
        throw '需要引入xml解析库文件';
      }return lnpmok;
    }, acf['idx'] = 0x1, acf;
  }(),
      jegh = function () {
    function _$wy() {}egf(_$wy, 'laya.wx.mini.MiniImage');var fhjegi = _$wy['prototype'];return fhjegi['_loadImage'] = function (y$0z_) {
      var npok = this,
          opnqm = ![];y$0z_['indexOf']('layaNativeDir/') == -0x1 && (opnqm = !![], y$0z_ = edcbgf['formatURL'](y$0z_));if (!ihljgk['getFileInfo'](y$0z_)) {
        if (y$0z_['indexOf']('http://') != -0x1 || y$0z_['indexOf']('https://') != -0x1) ihljgk['downImg'](y$0z_, new tvswru(_$wy, _$wy['onDownImgCallBack'], [y$0z_, npok]), y$0z_);else _$wy['onCreateImage'](y$0z_, npok, !![]);
      } else _$wy['onCreateImage'](y$0z_, npok, !opnqm);
    }, _$wy['onDownImgCallBack'] = function (lkgjh, cfehd, lpmok) {
      if (!lpmok) _$wy['onCreateImage'](lkgjh, cfehd);else cfehd['onError'](null);
    }, _$wy['onCreateImage'] = function (lgk, mjlnik, fjihgk) {
      fjihgk === void 0x0 && (fjihgk = ![]);var tqurs;if (!fjihgk) {
        var posqtr = ihljgk['getFileInfo'](lgk),
            limknj = posqtr['md5'];tqurs = ihljgk['getFileNativePath'](limknj);
      } else tqurs = lgk;if (mjlnik['imgCache'] == null) mjlnik['imgCache'] = {};var vsuwtx;function utp() {
        vsuwtx['onload'] = null, vsuwtx['onerror'] = null, delete mjlnik['imgCache'][lgk];
      };var rvstu = function () {
        utp(), mjlnik['onLoaded'](vsuwtx);
      },
          y_01z = function () {
        utp(), mjlnik['event']('error', 'Load image failed');
      };mjlnik['_type'] == 'nativeimage' ? (vsuwtx = new tswvu['window']['Image'](), vsuwtx['crossOrigin'] = '', vsuwtx['onload'] = rvstu, vsuwtx['onerror'] = y_01z, vsuwtx['src'] = tqurs, mjlnik['imgCache'][lgk] = vsuwtx) : new qmpor['create'](tqurs, { 'onload': rvstu, 'onerror': y_01z, 'onCreate': function (z$xy0_) {
          vsuwtx = z$xy0_, mjlnik['imgCache'][lgk] = z$xy0_;
        } });
    }, _$wy;
  }(),
      mniklj = function () {
    function lkmp() {}return egf(lkmp, 'laya.wx.mini.MiniInput'), lkmp['_createInputElement'] = function () {
      rquspt['_initInput'](rquspt['area'] = tswvu['createElement']('textarea')), rquspt['_initInput'](rquspt['input'] = tswvu['createElement']('input')), rquspt['inputContainer'] = tswvu['createElement']('div'), rquspt['inputContainer']['style']['position'] = 'absolute', rquspt['inputContainer']['style']['zIndex'] = 0x186a0, tswvu['container']['appendChild'](rquspt['inputContainer']), rquspt['inputContainer']['setPos'] = function ($12_0, wyxv$) {
        rquspt['inputContainer']['style']['left'] = $12_0 + 'px', rquspt['inputContainer']['style']['top'] = wyxv$ + 'px';
      }, cbfead['stage']['on']('resize', null, lkmp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vsutxw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _w$zx['_soundClass'] = iejgf, _w$zx['_musicClass'] = iejgf;
    }, lkmp['_onStageResize'] = function () {
      var qnosr = cbfead['stage']['_canvasTransform']['identity']();qnosr['scale'](tswvu['width'] / bceaf['canvas']['width'] / mlkjo['getPixelRatio'](), tswvu['height'] / bceaf['canvas']['height'] / mlkjo['getPixelRatio']());
    }, lkmp['wxinputFocus'] = function (vtwur) {
      var $yv = rquspt['inputElement']['target'];if ($yv && !$yv['editable']) return;tqspo['window']['wx']['offKeyboardConfirm'](), tqspo['window']['wx']['offKeyboardInput'](), tqspo['window']['wx']['showKeyboard']({ 'defaultValue': $yv['text'], 'maxLength': $yv['maxChars'], 'multiple': $yv['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (xsvw) {}, 'fail': function (poqnm) {} }), tqspo['window']['wx']['onKeyboardConfirm'](function ($zxw) {
        var iglj = $zxw ? $zxw['value'] : '';$yv['text'] = iglj, $yv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tqspo['window']['wx']['onKeyboardInput'](function (vzxwy$) {
        var ojkl = vzxwy$ ? vzxwy$['value'] : '';if (!$yv['multiline']) {
          if (ojkl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$yv['text'] = ojkl, $yv['event']('input');
      });
    }, lkmp['inputEnter'] = function () {
      rquspt['inputElement']['target']['focus'] = ![];
    }, lkmp['wxinputblur'] = function () {
      lkmp['hideKeyboard']();
    }, lkmp['hideKeyboard'] = function () {
      tqspo['window']['wx']['offKeyboardConfirm'](), tqspo['window']['wx']['offKeyboardInput'](), tqspo['window']['wx']['hideKeyboard']({ 'success': function (stxwv) {
          console['log']('隐藏键盘');
        }, 'fail': function (qnrop) {
          console['log']('隐藏键盘出错:' + (qnrop ? qnrop['errMsg'] : ''));
        } });
    }, lkmp;
  }(),
      egfdih = function () {
    function swuvr() {}egf(swuvr, 'laya.wx.mini.MiniLoader');var nolk = swuvr['prototype'];return nolk['load'] = function (zyxu, zyx$_w, gbcfde, xutswv, hkijfg) {
      gbcfde === void 0x0 && (gbcfde = !![]), hkijfg === void 0x0 && (hkijfg = ![]);var prqtsu = this;prqtsu['_url'] = zyxu;if (zyxu['indexOf']('data:image') === 0x0) prqtsu['_type'] = zyx$_w = 'image';else prqtsu['_type'] = zyx$_w || (zyx$_w = prqtsu['getTypeFromUrl'](zyxu));prqtsu['_cache'] = gbcfde, prqtsu['_data'] = null;var oqln = 'ascii';if (zyxu['indexOf']('.fnt') != -0x1) oqln = 'utf8';else zyx$_w == 'arraybuffer' && (oqln = '');;var ghifej = gefdi['getFileExtension'](zyxu);if (swuvr['_fileTypeArr']['indexOf'](ghifej) != -0x1) tqspo['EnvConfig']['load']['call'](this, zyxu, zyx$_w, gbcfde, xutswv, hkijfg);else {
        if (!ihljgk['getFileInfo'](zyxu)) {
          if (zyxu['indexOf']('layaNativeDir/') != -0x1) {
            if (tqspo['isZiYu']) {
              var nqmrp = ihljgk['ziyuFileData'][zyxu];prqtsu['onLoaded'](nqmrp);return;
            } else {
              cosnole['log']('read read'), ihljgk['read'](zyxu, oqln, new tvswru(swuvr, swuvr['onReadNativeCallBack'], [oqln, zyxu, zyx$_w, gbcfde, xutswv, hkijfg, prqtsu]));return;
            }
          }if (edcbgf['rootPath'] == '') var dgcfhe = zyxu;else dgcfhe = zyxu['split'](edcbgf['rootPath'])[0x0];zyxu['indexOf']('http://') != -0x1 || zyxu['indexOf']('https://') != -0x1 ? tqspo['EnvConfig']['load']['call'](prqtsu, zyxu, zyx$_w, gbcfde, xutswv, hkijfg) : ihljgk['readFile'](dgcfhe, oqln, new tvswru(swuvr, swuvr['onReadNativeCallBack'], [oqln, zyxu, zyx$_w, gbcfde, xutswv, hkijfg, prqtsu]), zyxu);
        } else tqspo['EnvConfig']['load']['call'](this, zyxu, zyx$_w, gbcfde, xutswv, hkijfg);
      }
    }, nolk['resMgrLoad'] = function (xywvz, jm, uyxvtw, ikfhj, dfhegi, xwvs, wzyx_$) {
      uyxvtw === void 0x0 && (uyxvtw = 0x0), ikfhj === void 0x0 && (ikfhj = ![]), dfhegi === void 0x0 && (dfhegi = ![]), xwvs === void 0x0 && (xwvs = 0x0), wzyx_$ === void 0x0 && (wzyx_$ = 0x3), xywvz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xywvz), tqspo['EnvConfig']['resMgrLoad'](xywvz, (decfg, swrt, zx_wy) => {
        swuvr['prototype']['resMgrLoadCallBack'](decfg, swrt, zx_wy, jm);
      }, uyxvtw, ikfhj, dfhegi, xwvs, wzyx_$);
    }, nolk['resMgrLoadCallBack'] = function (z$1y0, ups, swutvr, txsvw) {
      console['log']('buff:::', z$1y0, swutvr, ihljgk['fileNativeDir'] + '///' + ihljgk['fileListName']), txsvw(z$1y0, ups, swutvr);
    }, nolk['clearRes'] = function (hikljm, vwzyux) {
      vwzyux === void 0x0 && (vwzyux = ![]);var svrw = this;svrw['clearRes'](hikljm, vwzyux);var nrqo = ihljgk['getFileInfo'](hikljm);if (nrqo && (hikljm['indexOf']('http://') != -0x1 || hikljm['indexOf']('https://') != -0x1)) {
        var fjeghi = nrqo['md5'],
            ihjmkl = ihljgk['getFileNativePath'](fjeghi);ihljgk['remove'](ihjmkl);
      }
    }, swuvr['onReadNativeCallBack'] = function (cedgfh, cgfb, wtyxuv, qvrtu, jigk, qsnopr, rqvus, z0_y$x, roqnps) {
      qvrtu === void 0x0 && (qvrtu = !![]), qsnopr === void 0x0 && (qsnopr = ![]), z0_y$x === void 0x0 && (z0_y$x = 0x0);if (!z0_y$x) {
        var uyvwtx;if (wtyxuv == 'json' || wtyxuv == 'atlas') uyvwtx = tqspo['getJson'](roqnps['data']);else wtyxuv == 'xml' ? uyvwtx = gefdi['parseXMLFromString'](roqnps['data']) : uyvwtx = roqnps['data'];rqvus['onLoaded'](uyvwtx), !tqspo['isZiYu'] && tqspo['isPosMsgYu'] && wtyxuv != 'arraybuffer' && wx['postMessage']({ 'url': cgfb, 'data': uyvwtx, 'isLoad': !![] });
      } else z0_y$x == 0x1 && tqspo['EnvConfig']['load']['call'](rqvus, cgfb, wtyxuv, qvrtu, jigk, qsnopr);
    }, prson(swuvr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), swuvr;
  }(),
      ihljgk = function (moplnk) {
    function rstpu() {
      rstpu['__super']['call'](this);;
    }return egf(rstpu, 'laya.wx.mini.MiniFileMgr', moplnk), rstpu['isLoadFile'] = function (wyzvx$) {
      return rstpu['_fileTypeArr']['indexOf'](wyzvx$) != -0x1 ? !![] : ![];
    }, rstpu['getFileInfo'] = function (jkihfg) {
      var mijlkh = jkihfg['split']('?')[0x0],
          hcedfg = rstpu['filesListObj'][mijlkh];if (hcedfg == null) return null;else return hcedfg;return null;
    }, rstpu['onFileUpdate'] = function (lqmpno, _0yx) {
      var opsqrn = lqmpno['split']('/'),
          xutwv = opsqrn[opsqrn['length'] - 0x1],
          rsuqp = rstpu['getFileInfo'](_0yx);if (rsuqp == null) rstpu['onSaveFile'](_0yx, xutwv);else {
        if (rsuqp['readyUrl'] != _0yx) rstpu['remove'](xutwv, _0yx);
      }
    }, rstpu['exits'] = function (nklmo, bfdceg) {
      var _0$x = rstpu['getFileNativePath'](nklmo);rstpu['fs']['getFileInfo']({ 'filePath': _0$x, 'success': function (pusrtq) {
          bfdceg != null && bfdceg['runWith']([0x0, pusrtq]);
        }, 'fail': function (uwvzxy) {
          bfdceg != null && bfdceg['runWith']([0x1, uwvzxy]);
        } });
    }, rstpu['read'] = function (z1y0$_, qrstup, _zwyx, sup) {
      qrstup === void 0x0 && (qrstup = 'ascill'), sup === void 0x0 && (sup = '');var uswvtr;sup != '' ? uswvtr = rstpu['getFileNativePath'](z1y0$_) : uswvtr = z1y0$_, rstpu['fs']['readFile']({ 'filePath': uswvtr, 'encoding': qrstup, 'success': function (stqup) {
          _zwyx != null && _zwyx['runWith']([0x0, stqup]);
        }, 'fail': function (rqom) {
          if (rqom && sup != '') rstpu['down'](sup, qrstup, _zwyx, sup);else _zwyx != null && _zwyx['runWith']([0x1]);
        } });
    }, rstpu['readNativeFile'] = function (ikhgj, qtsupr) {
      rstpu['fs']['readFile']({ 'filePath': ikhgj, 'encoding': '', 'success': function (kjfih) {
          qtsupr != null && qtsupr['runWith']([0x0]);
        }, 'fail': function (yxuz) {
          qtsupr != null && qtsupr['runWith']([0x1]);
        } });
    }, rstpu['down'] = function (npokl, dhfegi, xz0y, bac) {
      dhfegi === void 0x0 && (dhfegi = 'ascill'), bac === void 0x0 && (bac = '');var fegchd = rstpu['getFileNativePath'](bac),
          _4021 = rstpu['wxdown']({ 'url': npokl, 'filePath': fegchd, 'success': function ($z1_) {
          if ($z1_['statusCode'] === 0xc8) rstpu['readFile']($z1_['filePath'], dhfegi, xz0y, bac);
        }, 'fail': function (hkgji) {
          xz0y != null && xz0y['runWith']([0x1, hkgji]);
        } });_4021['onProgressUpdate'](function (dcgfe) {
        xz0y != null && xz0y['runWith']([0x2, dcgfe['progress']]);
      });
    }, rstpu['readFile'] = function (tsrpqo, mqpro, cedfab, purtqs) {
      mqpro === void 0x0 && (mqpro = 'ascill'), purtqs === void 0x0 && (purtqs = ''), rstpu['fs']['readFile']({ 'filePath': tsrpqo, 'encoding': mqpro, 'success': function (uqvt) {
          if (tsrpqo['indexOf']('http://') != -0x1 || tsrpqo['indexOf']('https://') != -0x1) rstpu['onFileUpdate'](tsrpqo, purtqs);cedfab != null && cedfab['runWith']([0x0, uqvt]);
        }, 'fail': function (_$y0z1) {
          if (_$y0z1) cedfab != null && cedfab['runWith']([0x1, _$y0z1]);
        } });
    }, rstpu['downImg'] = function (hdgfie, fhceg, $ywz_x) {
      $ywz_x === void 0x0 && ($ywz_x = '');var z$w = rstpu['wxdown']({ 'url': hdgfie, 'success': function (igjhk) {
          igjhk['statusCode'] === 0xc8 && rstpu['copyFile'](igjhk['tempFilePath'], $ywz_x, fhceg);
        }, 'fail': function (_0$yx) {
          fhceg != null && fhceg['runWith']([0x1, _0$yx]);
        } });
    }, rstpu['copyFile'] = function (stuvxw, igjefh, y$_zx) {
      var rpnoqm = stuvxw['split']('/'),
          xstvwu = rpnoqm[rpnoqm['length'] - 0x1],
          jnokml = igjefh['split']('?')[0x0],
          twrus = rstpu['getFileInfo'](igjefh),
          _2014 = rstpu['getFileNativePath'](xstvwu);rstpu['fs']['copyFile']({ 'srcPath': stuvxw, 'destPath': _2014, 'success': function (urpstq) {
          if (!twrus) rstpu['onSaveFile'](igjefh, xstvwu), y$_zx != null && y$_zx['runWith']([0x0]);else {
            if (twrus['readyUrl'] != igjefh) rstpu['remove'](xstvwu, igjefh, y$_zx);
          }
        }, 'fail': function (kmljo) {
          y$_zx != null && y$_zx['runWith']([0x1, kmljo]);
        } });
    }, rstpu['getFileNativePath'] = function (z$_x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + z$_x;
    }, rstpu['remove'] = function (gfjihk, hgef, nmopq) {
      hgef === void 0x0 && (hgef = '');var inmj = rstpu['getFileInfo'](hgef),
          ywvx$ = rstpu['getFileNativePath'](inmj['md5']);cbfead['loader']['clearRes'](inmj['readyUrl']), rstpu['fs']['unlink']({ 'filePath': ywvx$, 'success': function (fjige) {
          if (hgef != '') rstpu['onSaveFile'](hgef, gfjihk);nmopq != null && nmopq['runWith']([0x0]);
        }, 'fail': function (twvrus) {} });
    }, rstpu['onSaveFile'] = function (ecadb, vutrqs) {
      var cfgdb = ecadb['split']('?')[0x0];rstpu['filesListObj'][cfgdb] = { 'md5': vutrqs, 'readyUrl': ecadb }, rstpu['fs']['writeFile']({ 'filePath': rstpu['fileNativeDir'] + '/' + rstpu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rstpu['filesListObj']), 'success': function (eghcdf) {
          console['log']('写入测试测试成功：', eghcdf);
        }, 'fail': function (ebadf) {
          console['log']('写入测试测试失败：', ebadf);
        } });
    }, rstpu['existDir'] = function (_32$0, ihjegf) {
      rstpu['fs']['mkdir']({ 'dirPath': _32$0, 'success': function (onpr) {
          ihjegf != null && ihjegf['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wyzx_) {
          if (wyzx_['errMsg']['indexOf']('file already exists') != -0x1) rstpu['readSync'](rstpu['fileListName'], 'utf8', ihjegf);else ihjegf != null && ihjegf['runWith']([0x1, wyzx_]);
        } });
    }, rstpu['readSync'] = function (stxuv, dgfi, klonjm, sutx) {
      dgfi === void 0x0 && (dgfi = 'ascill'), sutx === void 0x0 && (sutx = '');var trwuvs = rstpu['getFileNativePath'](stxuv),
          qotrps;try {
        qotrps = rstpu['fs']['readFileSync'](trwuvs), klonjm != null && klonjm['runWith']([0x0, { 'data': qotrps }]);
      } catch (uswtvx) {
        klonjm != null && klonjm['runWith']([0x1]);
      }
    }, rstpu['readCache'] = function () {}, rstpu['writeCache'] = function (idhegf) {
      var uwtx = readyUrl['split']('?')[0x0];rstpu['filesListObj'][uwtx] = { 'md5': md5Name, 'readyUrl': readyUrl }, rstpu['fs']['writeFile']({ 'filePath': rstpu['fileNativeDir'] + '/' + rstpu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rstpu['filesListObj']), 'success': function (nlpm) {}, 'fail': function (nlok) {} });
    }, rstpu['setNativeFileDir'] = function (y_z01$) {
      rstpu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y_z01$;
    }, rstpu['filesListObj'] = {}, rstpu['fileNativeDir'] = null, rstpu['fileListName'] = 'layaairfiles.txt', rstpu['ziyuFileData'] = {}, prson(rstpu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rstpu;
  }(mplqo),
      iejgf = function (nq) {
    function srpno() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], srpno['__super']['call'](this), this['_sound'] = srpno['_createSound']();
    }egf(srpno, 'laya.wx.mini.MiniSound', nq);var rosptq = srpno['prototype'];return rosptq['load'] = function (gkhl) {
      var _01432 = this;gkhl = edcbgf['formatURL'](gkhl), this['url'] = gkhl;if (srpno['_audioCache'][gkhl]) {
        this['event']('complete');return;
      }function npokml() {
        if (srpno['_null'] != undefined) _01432['_sound']['onCanplay'](srpno['_null']), _01432['_sound']['onError'](srpno['_null']);else try {
          _01432['_sound']['onCanplay'](null), _01432['_sound']['onError'](null), srpno['_null'] = null;
        } catch (njkl) {
          console['warn']('[wxmini] _clearSound:' + njkl), _01432['_sound']['onCanplay'](sqnp), _01432['_sound']['onError'](sqnp), srpno['_null'] = sqnp;
        }
      }function wuvxt() {
        npokml(), cgefb['loaded'] = !![], cgefb['event']('complete'), srpno['_audioCache'][cgefb['url']] = cgefb;
      }function swtvru(wvutxy) {
        console['error']('errCode=' + wvutxy['errCode'] + '  errMsg=' + wvutxy['errMsg']), npokml(), cgefb['event']('error');
      }function sqnp() {}this['_sound']['onCanplay'](wuvxt), this['_sound']['onError'](swtvru), this['_sound']['src'] = gkhl;var cgefb = this;
    }, rosptq['play'] = function (xz_w, xvwtu) {
      xz_w === void 0x0 && (xz_w = 0x0), xvwtu === void 0x0 && (xvwtu = 0x0);var pqno;if (this['url'] == _w$zx['_tMusic']) {
        if (!srpno['_musicAudio']) srpno['_musicAudio'] = srpno['_createSound']();pqno = srpno['_musicAudio'];
      } else pqno = srpno['_createSound']();pqno['src'] = this['url'];var onkljm = new gcfbe(pqno);return onkljm['url'] = this['url'], onkljm['loops'] = xvwtu, onkljm['startTime'] = xz_w, onkljm['play'](), _w$zx['addChannel'](onkljm), onkljm;
    }, rosptq['dispose'] = function () {
      var uxwvzy = srpno['_audioCache'][this['url']];uxwvzy && (uxwvzy['src'] = '', delete srpno['_audioCache'][this['url']]);
    }, _$210z(0x0, rosptq, 'duration', function () {
      return this['_sound']['duration'];
    }), srpno['_createSound'] = function () {
      return srpno['_id']++, tqspo['window']['wx']['createInnerAudioContext']();
    }, srpno['_musicAudio'] = null, srpno['_id'] = 0x0, srpno['_audioCache'] = {}, srpno['_null'] = undefined, srpno;
  }(mplqo),
      gcfbe = function (nmkpo) {
    function fhgej(hjimk) {
      this['_audio'] = null, this['_onEnd'] = null, fhgej['__super']['call'](this), this['_audio'] = hjimk, this['_onEnd'] = gefdi['bind'](this['__onEnd'], this), hjimk['onEnded'](this['_onEnd']);
    }egf(fhgej, 'laya.wx.mini.MiniSoundChannel', nmkpo);var ighklj = fhgej['prototype'];return ighklj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cbfead['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ighklj['__onNull'] = function () {}, ighklj['play'] = function () {
      this['isStopped'] = ![], _w$zx['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ighklj['stop'] = function () {
      this['isStopped'] = !![], _w$zx['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fhgej['_null'] != undefined) this['_audio']['onEnded'](fhgej['_null']);else try {
        this['_audio']['onEnded'](null), fhgej['_null'] = null;
      } catch (ced) {
        console['warn']('[wxmini] stop:' + ced), this['_audio']['onEnded'](gefdi['bind'](this['__onNull'], this)), fhgej['_null'] = gefdi['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ighklj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ighklj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _w$zx['addChannel'](this), this['_audio']['play']();
    }, _$210z(0x0, ighklj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _$210z(0x0, ighklj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _$210z(0x0, ighklj, 'volume', function () {
      return 0x1;
    }, function (vwstxu) {}), fhgej['_null'] = undefined, fhgej;
  }(uwzyvx);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var xwy$_z in Laya) {
    var egfchd = Laya[xwy$_z];egfchd && egfchd['__isclass'] && (exports[xwy$_z] = egfchd);
  }
});