var _ = wx.y$;
(function (window, document, cefda) {
  var suqprt = cefda['un'],
      pqlonm = cefda['uns'],
      qopm = cefda['static'],
      kijlhm = cefda['class'],
      z_yw = cefda['getset'],
      sur = cefda['__newvec'],
      jifgkh = laya['utils']['Browser'],
      ikjgl = laya['events']['Event'],
      _301$2 = laya['events']['EventDispatcher'],
      omnlp = laya['resource']['HTMLImage'],
      svwtu = laya['utils']['Handler'],
      hcfe = laya['display']['Input'],
      dgfb = laya['net']['Loader'],
      ijmn = laya['maths']['Matrix'],
      txwyu = laya['renders']['Render'],
      yz_ = laya['utils']['RunDriver'],
      wstru = laya['media']['Sound'],
      qornp = laya['media']['SoundChannel'],
      gfhki = laya['media']['SoundManager'],
      wytux = laya['display']['Stage'],
      pklmo = laya['net']['URL'],
      nklpom = laya['utils']['Utils'],
      jihkgf = function () {
    function hdgif() {}return kijlhm(hdgif, 'laya.wx.mini.MiniAdpter'), hdgif['getJson'] = function (tyw) {
      return JSON['parse'](tyw);
    }, hdgif['init'] = function (ploknm, snorpq) {
      ploknm === void 0x0 && (ploknm = ![]), snorpq === void 0x0 && (snorpq = ![]);if (hdgif['_inited']) return;hdgif['window'] = window;if (hdgif['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hdgif['_inited'] = !![], hdgif['isZiYu'] = snorpq, hdgif['isPosMsgYu'] = ploknm, hdgif['EnvConfig'] = {}, !hdgif['isZiYu'] && (zuxywv['setNativeFileDir']('/layaairGame'), zuxywv['existDir'](zuxywv['fileNativeDir'], svwtu['create'](hdgif, hdgif['onMkdirCallBack']))), hdgif['window']['focus'] = function () {}, cefda['getUrlPath'] = function () {}, hdgif['window']['logtime'] = function (stqpr) {}, hdgif['window']['alertTimeLog'] = function (wrutvs) {}, hdgif['window']['resetShareInfo'] = function () {}, hdgif['window']['CanvasRenderingContext2D'] = function () {}, hdgif['window']['CanvasRenderingContext2D']['prototype'] = hdgif['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hdgif['window']['document']['body']['appendChild'] = function () {}, hdgif['EnvConfig']['pixelRatioInt'] = 0x0, yz_['getPixelRatio'] = hdgif['pixelRatio'], hdgif['_preCreateElement'] = jifgkh['createElement'], jifgkh['createElement'] = hdgif['createElement'], yz_['createShaderCondition'] = hdgif['createShaderCondition'], nklpom['parseXMLFromString'] = hdgif['parseXMLFromString'], hcfe['_createInputElement'] = yxz$0['_createInputElement'], hdgif['EnvConfig']['load'] = dgfb['prototype']['load'], dgfb['prototype']['load'] = qsptor['prototype']['load'], hdgif['isZiYu'] && ploknm && wx['onMessage'](function (ehcfdg) {
        ehcfdg['isLoad'] && (zuxywv['ziyuFileData'][ehcfdg['url']] = ehcfdg['data']);
      });
    }, hdgif['onMkdirCallBack'] = function (wrstuv, qruts) {
      if (!wrstuv) zuxywv['filesListObj'] = JSON['parse'](qruts['data']);
    }, hdgif['pixelRatio'] = function () {
      if (!hdgif['EnvConfig']['pixelRatioInt']) try {
        var yz0$x_ = wx['getSystemInfoSync']();return hdgif['EnvConfig']['pixelRatioInt'] = yz0$x_['pixelRatio'], yz0$x_ = yz0$x_, yz0$x_['pixelRatio'];
      } catch (ifhgd) {}return hdgif['EnvConfig']['pixelRatioInt'];
    }, hdgif['createElement'] = function (giehfd) {
      if (giehfd == 'canvas') {
        var txuv;return hdgif['idx'] == 0x1 ? hdgif['isZiYu'] ? (txuv = sharedCanvas, txuv['style'] = {}) : txuv = window['canvas'] : txuv = window['wx']['createCanvas'](), hdgif['idx']++, txuv;
      } else {
        if (giehfd == 'textarea' || giehfd == 'input') return hdgif['onCreateInput'](giehfd);else {
          if (giehfd == 'div') {
            var potrs = hdgif['_preCreateElement'](giehfd);return potrs['contains'] = function (dfcghe) {
              return null;
            }, potrs['removeChild'] = function (egfcdb) {}, potrs;
          } else return hdgif['_preCreateElement'](giehfd);
        }
      }
    }, hdgif['onCreateInput'] = function (qprst) {
      var kmhil = hdgif['_preCreateElement'](qprst);return kmhil['focus'] = yxz$0['wxinputFocus'], kmhil['blur'] = yxz$0['wxinputblur'], kmhil['style'] = {}, kmhil['value'] = 0x0, kmhil['parentElement'] = {}, kmhil['placeholder'] = {}, kmhil['type'] = {}, kmhil['setColor'] = function (uxyt) {}, kmhil['setType'] = function (gfhik) {}, kmhil['setFontFace'] = function (bcgedf) {}, kmhil['addEventListener'] = function (xvywut) {}, kmhil['contains'] = function (ifghje) {
        return null;
      }, kmhil['removeChild'] = function (utvqr) {}, kmhil;
    }, hdgif['createShaderCondition'] = function (nomkp) {
      var tyvwu = this,
          z1_y = function () {
        var cdfaeb = nomkp;return tyvwu[nomkp['replace']('this.', '')];
      };return z1_y;
    }, hdgif['EnvConfig'] = null, hdgif['window'] = null, hdgif['_preCreateElement'] = null, hdgif['_inited'] = ![], hdgif['wxRequest'] = null, hdgif['systemInfo'] = null, hdgif['version'] = '0.0.1', hdgif['isZiYu'] = ![], hdgif['isPosMsgYu'] = ![], hdgif['parseXMLFromString'] = function (opstq) {
      var w$x_zy, hijklm;opstq = opstq['replace'](/>\s+</g, '><');try {
        w$x_zy = new window['Parser']['DOMParser']()['parseFromString'](opstq, 'text/xml');
      } catch (nkmplo) {
        throw '需要引入xml解析库文件';
      }return w$x_zy;
    }, hdgif['idx'] = 0x1, hdgif;
  }(),
      rpmoqn = function () {
    function gjiehf() {}kijlhm(gjiehf, 'laya.wx.mini.MiniImage');var gklji = gjiehf['prototype'];return gklji['_loadImage'] = function (utsx) {
      var qposr = this,
          $yzw_x = ![];utsx['indexOf']('layaNativeDir/') == -0x1 && ($yzw_x = !![], utsx = pklmo['formatURL'](utsx));if (!zuxywv['getFileInfo'](utsx)) {
        if (utsx['indexOf']('http://') != -0x1 || utsx['indexOf']('https://') != -0x1) zuxywv['downImg'](utsx, new svwtu(gjiehf, gjiehf['onDownImgCallBack'], [utsx, qposr]), utsx);else gjiehf['onCreateImage'](utsx, qposr, !![]);
      } else gjiehf['onCreateImage'](utsx, qposr, !$yzw_x);
    }, gjiehf['onDownImgCallBack'] = function (dbecfa, jfikgh, igehdf) {
      if (!igehdf) gjiehf['onCreateImage'](dbecfa, jfikgh);else jfikgh['onError'](null);
    }, gjiehf['onCreateImage'] = function (dcfheg, jnim, knomj) {
      knomj === void 0x0 && (knomj = ![]);var gkjfih;if (!knomj) {
        var egid = zuxywv['getFileInfo'](dcfheg),
            edfac = egid['md5'];gkjfih = zuxywv['getFileNativePath'](edfac);
      } else gkjfih = dcfheg;if (jnim['imgCache'] == null) jnim['imgCache'] = {};var ijmlh;function jifgh() {
        ijmlh['onload'] = null, ijmlh['onerror'] = null, delete jnim['imgCache'][dcfheg];
      };var ebg = function () {
        jifgh(), jnim['onLoaded'](ijmlh);
      },
          qlmo = function () {
        jifgh(), jnim['event']('error', 'Load image failed');
      };jnim['_type'] == 'nativeimage' ? (ijmlh = new jifgkh['window']['Image'](), ijmlh['crossOrigin'] = '', ijmlh['onload'] = ebg, ijmlh['onerror'] = qlmo, ijmlh['src'] = gkjfih, jnim['imgCache'][dcfheg] = ijmlh) : new omnlp['create'](gkjfih, { 'onload': ebg, 'onerror': qlmo, 'onCreate': function (gijhfk) {
          ijmlh = gijhfk, jnim['imgCache'][dcfheg] = gijhfk;
        } });
    }, gjiehf;
  }(),
      yxz$0 = function () {
    function ywv$x() {}return kijlhm(ywv$x, 'laya.wx.mini.MiniInput'), ywv$x['_createInputElement'] = function () {
      hcfe['_initInput'](hcfe['area'] = jifgkh['createElement']('textarea')), hcfe['_initInput'](hcfe['input'] = jifgkh['createElement']('input')), hcfe['inputContainer'] = jifgkh['createElement']('div'), hcfe['inputContainer']['style']['position'] = 'absolute', hcfe['inputContainer']['style']['zIndex'] = 0x186a0, jifgkh['container']['appendChild'](hcfe['inputContainer']), hcfe['inputContainer']['setPos'] = function (kgjhif, vtsuqr) {
        hcfe['inputContainer']['style']['left'] = kgjhif + 'px', hcfe['inputContainer']['style']['top'] = vtsuqr + 'px';
      }, cefda['stage']['on']('resize', null, ywv$x['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_$231) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gfhki['_soundClass'] = lonq, gfhki['_musicClass'] = lonq;
    }, ywv$x['_onStageResize'] = function () {
      var fjie = cefda['stage']['_canvasTransform']['identity']();fjie['scale'](jifgkh['width'] / txwyu['canvas']['width'] / yz_['getPixelRatio'](), jifgkh['height'] / txwyu['canvas']['height'] / yz_['getPixelRatio']());
    }, ywv$x['wxinputFocus'] = function (soqptr) {
      var _y$z = hcfe['inputElement']['target'];if (_y$z && !_y$z['editable']) return;jihkgf['window']['wx']['offKeyboardConfirm'](), jihkgf['window']['wx']['offKeyboardInput'](), jihkgf['window']['wx']['showKeyboard']({ 'defaultValue': _y$z['text'], 'maxLength': _y$z['maxChars'], 'multiple': _y$z['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nkim) {}, 'fail': function (nmkpol) {} }), jihkgf['window']['wx']['onKeyboardConfirm'](function (stpurq) {
        var qprnm = stpurq ? stpurq['value'] : '';_y$z['text'] = qprnm, _y$z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jihkgf['window']['wx']['onKeyboardInput'](function (rotps) {
        var bdecfg = rotps ? rotps['value'] : '';if (!_y$z['multiline']) {
          if (bdecfg['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_y$z['text'] = bdecfg, _y$z['event']('input');
      });
    }, ywv$x['inputEnter'] = function () {
      hcfe['inputElement']['target']['focus'] = ![];
    }, ywv$x['wxinputblur'] = function () {
      ywv$x['hideKeyboard']();
    }, ywv$x['hideKeyboard'] = function () {
      jihkgf['window']['wx']['offKeyboardConfirm'](), jihkgf['window']['wx']['offKeyboardInput'](), jihkgf['window']['wx']['hideKeyboard']({ 'success': function (xwz$v) {
          console['log']('隐藏键盘');
        }, 'fail': function (xz_y$w) {
          console['log']('隐藏键盘出错:' + (xz_y$w ? xz_y$w['errMsg'] : ''));
        } });
    }, ywv$x;
  }(),
      qsptor = function () {
    function eifgjh() {}kijlhm(eifgjh, 'laya.wx.mini.MiniLoader');var uqptr = eifgjh['prototype'];return uqptr['load'] = function (pnqrs, gklij, ehfcd, olmp, fcgb) {
      ehfcd === void 0x0 && (ehfcd = !![]), fcgb === void 0x0 && (fcgb = ![]);var ropsqt = this;ropsqt['_url'] = pnqrs;if (pnqrs['indexOf']('data:image') === 0x0) ropsqt['_type'] = gklij = 'image';else ropsqt['_type'] = gklij || (gklij = ropsqt['getTypeFromUrl'](pnqrs));ropsqt['_cache'] = ehfcd, ropsqt['_data'] = null;var ihfegd = 'ascii';if (pnqrs['indexOf']('.fnt') != -0x1) ihfegd = 'utf8';else gklij == 'arraybuffer' && (ihfegd = '');;var yw$zxv = nklpom['getFileExtension'](pnqrs);if (eifgjh['_fileTypeArr']['indexOf'](yw$zxv) != -0x1) jihkgf['EnvConfig']['load']['call'](this, pnqrs, gklij, ehfcd, olmp, fcgb);else {
        if (!zuxywv['getFileInfo'](pnqrs)) {
          if (pnqrs['indexOf']('layaNativeDir/') != -0x1) {
            if (jihkgf['isZiYu']) {
              var wsvutr = zuxywv['ziyuFileData'][pnqrs];ropsqt['onLoaded'](wsvutr);return;
            } else {
              cosnole['log']('read read'), zuxywv['read'](pnqrs, ihfegd, new svwtu(eifgjh, eifgjh['onReadNativeCallBack'], [ihfegd, pnqrs, gklij, ehfcd, olmp, fcgb, ropsqt]));return;
            }
          }if (pklmo['rootPath'] == '') var fkghi = pnqrs;else fkghi = pnqrs['split'](pklmo['rootPath'])[0x0];pnqrs['indexOf']('http://') != -0x1 || pnqrs['indexOf']('https://') != -0x1 ? jihkgf['EnvConfig']['load']['call'](ropsqt, pnqrs, gklij, ehfcd, olmp, fcgb) : zuxywv['readFile'](fkghi, ihfegd, new svwtu(eifgjh, eifgjh['onReadNativeCallBack'], [ihfegd, pnqrs, gklij, ehfcd, olmp, fcgb, ropsqt]), pnqrs);
        } else jihkgf['EnvConfig']['load']['call'](this, pnqrs, gklij, ehfcd, olmp, fcgb);
      }
    }, uqptr['resMgrLoad'] = function (rvusq, eghij, y0z_x$, w$zyx, rqusvt, hlgki, kghfij) {
      y0z_x$ === void 0x0 && (y0z_x$ = 0x0), w$zyx === void 0x0 && (w$zyx = ![]), rqusvt === void 0x0 && (rqusvt = ![]), hlgki === void 0x0 && (hlgki = 0x0), kghfij === void 0x0 && (kghfij = 0x3), rvusq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', rvusq), jihkgf['EnvConfig']['resMgrLoad'](rvusq, (wvstux, topsqr, yvuw) => {
        eifgjh['prototype']['resMgrLoadCallBack'](wvstux, topsqr, yvuw, eghij);
      }, y0z_x$, w$zyx, rqusvt, hlgki, kghfij);
    }, uqptr['resMgrLoadCallBack'] = function (uwr, acbedf, ghjki, uwsxv) {
      console['log']('buff:::', uwr, ghjki, zuxywv['fileNativeDir'] + '///' + zuxywv['fileListName']), uwsxv(uwr, acbedf, ghjki);
    }, uqptr['clearRes'] = function (jklin, hfiedg) {
      hfiedg === void 0x0 && (hfiedg = ![]);var hkjgl = this;hkjgl['clearRes'](jklin, hfiedg);var z_$y = zuxywv['getFileInfo'](jklin);if (z_$y && (jklin['indexOf']('http://') != -0x1 || jklin['indexOf']('https://') != -0x1)) {
        var nomq = z_$y['md5'],
            cgdhf = zuxywv['getFileNativePath'](nomq);zuxywv['remove'](cgdhf);
      }
    }, eifgjh['onReadNativeCallBack'] = function (jkfhi, _$021, $0xy, tsvrq, tvsrqu, efgjhi, jmlnko, jon, jnklmo) {
      tsvrq === void 0x0 && (tsvrq = !![]), efgjhi === void 0x0 && (efgjhi = ![]), jon === void 0x0 && (jon = 0x0);if (!jon) {
        var wyzv$;if ($0xy == 'json' || $0xy == 'atlas') wyzv$ = jihkgf['getJson'](jnklmo['data']);else $0xy == 'xml' ? wyzv$ = nklpom['parseXMLFromString'](jnklmo['data']) : wyzv$ = jnklmo['data'];jmlnko['onLoaded'](wyzv$), !jihkgf['isZiYu'] && jihkgf['isPosMsgYu'] && $0xy != 'arraybuffer' && wx['postMessage']({ 'url': _$021, 'data': wyzv$, 'isLoad': !![] });
      } else jon == 0x1 && jihkgf['EnvConfig']['load']['call'](jmlnko, _$021, $0xy, tsvrq, tvsrqu, efgjhi);
    }, qopm(eifgjh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), eifgjh;
  }(),
      zuxywv = function (soqrtp) {
    function rnoqsp() {
      rnoqsp['__super']['call'](this);;
    }return kijlhm(rnoqsp, 'laya.wx.mini.MiniFileMgr', soqrtp), rnoqsp['isLoadFile'] = function (jefh) {
      return rnoqsp['_fileTypeArr']['indexOf'](jefh) != -0x1 ? !![] : ![];
    }, rnoqsp['getFileInfo'] = function (hljg) {
      var zy$1 = hljg['split']('?')[0x0],
          cehdgf = rnoqsp['filesListObj'][zy$1];if (cehdgf == null) return null;else return cehdgf;return null;
    }, rnoqsp['onFileUpdate'] = function (y_x$w, ghjl) {
      var eigdhf = y_x$w['split']('/'),
          opmnlq = eigdhf[eigdhf['length'] - 0x1],
          mnlkp = rnoqsp['getFileInfo'](ghjl);if (mnlkp == null) rnoqsp['onSaveFile'](ghjl, opmnlq);else {
        if (mnlkp['readyUrl'] != ghjl) rnoqsp['remove'](opmnlq, ghjl);
      }
    }, rnoqsp['exits'] = function (geb, prqos) {
      var ihgj = rnoqsp['getFileNativePath'](geb);rnoqsp['fs']['getFileInfo']({ 'filePath': ihgj, 'success': function (lnjomk) {
          prqos != null && prqos['runWith']([0x0, lnjomk]);
        }, 'fail': function (cefghd) {
          prqos != null && prqos['runWith']([0x1, cefghd]);
        } });
    }, rnoqsp['read'] = function ($y1_0z, ghifjk, xzuw, fje) {
      ghifjk === void 0x0 && (ghifjk = 'ascill'), fje === void 0x0 && (fje = '');var usrtpq;fje != '' ? usrtpq = rnoqsp['getFileNativePath']($y1_0z) : usrtpq = $y1_0z, rnoqsp['fs']['readFile']({ 'filePath': usrtpq, 'encoding': ghifjk, 'success': function (ljmkhi) {
          xzuw != null && xzuw['runWith']([0x0, ljmkhi]);
        }, 'fail': function (wyx_z) {
          if (wyx_z && fje != '') rnoqsp['down'](fje, ghifjk, xzuw, fje);else xzuw != null && xzuw['runWith']([0x1]);
        } });
    }, rnoqsp['readNativeFile'] = function (mnorpq, gefdhc) {
      rnoqsp['fs']['readFile']({ 'filePath': mnorpq, 'encoding': '', 'success': function (pnsro) {
          gefdhc != null && gefdhc['runWith']([0x0]);
        }, 'fail': function (ehjif) {
          gefdhc != null && gefdhc['runWith']([0x1]);
        } });
    }, rnoqsp['down'] = function (trq, feab, oknmlj, fcbea) {
      feab === void 0x0 && (feab = 'ascill'), fcbea === void 0x0 && (fcbea = '');var $0z_2 = rnoqsp['getFileNativePath'](fcbea),
          onpmq = rnoqsp['wxdown']({ 'url': trq, 'filePath': $0z_2, 'success': function (ljmno) {
          if (ljmno['statusCode'] === 0xc8) rnoqsp['readFile'](ljmno['filePath'], feab, oknmlj, fcbea);
        }, 'fail': function (vrswtu) {
          oknmlj != null && oknmlj['runWith']([0x1, vrswtu]);
        } });onpmq['onProgressUpdate'](function (egbdcf) {
        oknmlj != null && oknmlj['runWith']([0x2, egbdcf['progress']]);
      });
    }, rnoqsp['readFile'] = function (pqrtos, jol, qnlomp, kloj) {
      jol === void 0x0 && (jol = 'ascill'), kloj === void 0x0 && (kloj = ''), rnoqsp['fs']['readFile']({ 'filePath': pqrtos, 'encoding': jol, 'success': function (vtsurw) {
          if (pqrtos['indexOf']('http://') != -0x1 || pqrtos['indexOf']('https://') != -0x1) rnoqsp['onFileUpdate'](pqrtos, kloj);qnlomp != null && qnlomp['runWith']([0x0, vtsurw]);
        }, 'fail': function (gefdh) {
          if (gefdh) qnlomp != null && qnlomp['runWith']([0x1, gefdh]);
        } });
    }, rnoqsp['downImg'] = function (lqopm, vsqr, hkgil) {
      hkgil === void 0x0 && (hkgil = '');var z0_$1 = rnoqsp['wxdown']({ 'url': lqopm, 'success': function (vuxyz) {
          vuxyz['statusCode'] === 0xc8 && rnoqsp['copyFile'](vuxyz['tempFilePath'], hkgil, vsqr);
        }, 'fail': function (jkol) {
          vsqr != null && vsqr['runWith']([0x1, jkol]);
        } });
    }, rnoqsp['copyFile'] = function (pmonlq, xytuvw, lijgh) {
      var kghli = pmonlq['split']('/'),
          diegh = kghli[kghli['length'] - 0x1],
          zy$v = xytuvw['split']('?')[0x0],
          rustw = rnoqsp['getFileInfo'](xytuvw),
          qprsot = rnoqsp['getFileNativePath'](diegh);rnoqsp['fs']['copyFile']({ 'srcPath': pmonlq, 'destPath': qprsot, 'success': function (qomp) {
          if (!rustw) rnoqsp['onSaveFile'](xytuvw, diegh), lijgh != null && lijgh['runWith']([0x0]);else {
            if (rustw['readyUrl'] != xytuvw) rnoqsp['remove'](diegh, xytuvw, lijgh);
          }
        }, 'fail': function (urwts) {
          lijgh != null && lijgh['runWith']([0x1, urwts]);
        } });
    }, rnoqsp['getFileNativePath'] = function (svtxu) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + svtxu;
    }, rnoqsp['remove'] = function (omkpn, mnlqop, uxzvw) {
      mnlqop === void 0x0 && (mnlqop = '');var sqpnr = rnoqsp['getFileInfo'](mnlqop),
          wzx$y_ = rnoqsp['getFileNativePath'](sqpnr['md5']);cefda['loader']['clearRes'](sqpnr['readyUrl']), rnoqsp['fs']['unlink']({ 'filePath': wzx$y_, 'success': function (uxwvt) {
          if (mnlqop != '') rnoqsp['onSaveFile'](mnlqop, omkpn);uxzvw != null && uxzvw['runWith']([0x0]);
        }, 'fail': function (urwtv) {} });
    }, rnoqsp['onSaveFile'] = function (vutqs, mjki) {
      var mlnkp = vutqs['split']('?')[0x0];rnoqsp['filesListObj'][mlnkp] = { 'md5': mjki, 'readyUrl': vutqs }, rnoqsp['fs']['writeFile']({ 'filePath': rnoqsp['fileNativeDir'] + '/' + rnoqsp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rnoqsp['filesListObj']), 'success': function (vtsqur) {
          console['log']('写入测试测试成功：', vtsqur);
        }, 'fail': function (qosrpn) {
          console['log']('写入测试测试失败：', qosrpn);
        } });
    }, rnoqsp['existDir'] = function (ywuvx, swtur) {
      rnoqsp['fs']['mkdir']({ 'dirPath': ywuvx, 'success': function (rmpnq) {
          swtur != null && swtur['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fjikh) {
          if (fjikh['errMsg']['indexOf']('file already exists') != -0x1) rnoqsp['readSync'](rnoqsp['fileListName'], 'utf8', swtur);else swtur != null && swtur['runWith']([0x1, fjikh]);
        } });
    }, rnoqsp['readSync'] = function (vtuxwy, _z0yx, xwvz$y, ecdfba) {
      _z0yx === void 0x0 && (_z0yx = 'ascill'), ecdfba === void 0x0 && (ecdfba = '');var tvusxw = rnoqsp['getFileNativePath'](vtuxwy),
          yx0z_;try {
        yx0z_ = rnoqsp['fs']['readFileSync'](tvusxw), xwvz$y != null && xwvz$y['runWith']([0x0, { 'data': yx0z_ }]);
      } catch (lmonkj) {
        xwvz$y != null && xwvz$y['runWith']([0x1]);
      }
    }, rnoqsp['readCache'] = function () {}, rnoqsp['writeCache'] = function (jfeghi) {
      var qpstro = readyUrl['split']('?')[0x0];rnoqsp['filesListObj'][qpstro] = { 'md5': md5Name, 'readyUrl': readyUrl }, rnoqsp['fs']['writeFile']({ 'filePath': rnoqsp['fileNativeDir'] + '/' + rnoqsp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rnoqsp['filesListObj']), 'success': function (ywutx) {}, 'fail': function (vrtqus) {} });
    }, rnoqsp['setNativeFileDir'] = function ($_3120) {
      rnoqsp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $_3120;
    }, rnoqsp['filesListObj'] = {}, rnoqsp['fileNativeDir'] = null, rnoqsp['fileListName'] = 'layaairfiles.txt', rnoqsp['ziyuFileData'] = {}, qopm(rnoqsp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rnoqsp;
  }(_301$2),
      lonq = function (vqtrsu) {
    function prqust() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], prqust['__super']['call'](this), this['_sound'] = prqust['_createSound']();
    }kijlhm(prqust, 'laya.wx.mini.MiniSound', vqtrsu);var pokln = prqust['prototype'];return pokln['load'] = function (lkomnj) {
      var fbadec = this;lkomnj = pklmo['formatURL'](lkomnj), this['url'] = lkomnj;if (prqust['_audioCache'][lkomnj]) {
        this['event']('complete');return;
      }function vuxywz() {
        if (prqust['_null'] != undefined) fbadec['_sound']['onCanplay'](prqust['_null']), fbadec['_sound']['onError'](prqust['_null']);else try {
          fbadec['_sound']['onCanplay'](null), fbadec['_sound']['onError'](null), prqust['_null'] = null;
        } catch (hdfeg) {
          console['warn']('[wxmini] _clearSound:' + hdfeg), fbadec['_sound']['onCanplay'](xswtuv), fbadec['_sound']['onError'](xswtuv), prqust['_null'] = xswtuv;
        }
      }function wvsxu() {
        vuxywz(), xtyuw['loaded'] = !![], xtyuw['event']('complete'), prqust['_audioCache'][xtyuw['url']] = xtyuw;
      }function dehgf(ecabd) {
        console['error']('errCode=' + ecabd['errCode'] + '  errMsg=' + ecabd['errMsg']), vuxywz(), xtyuw['event']('error');
      }function xswtuv() {}this['_sound']['onCanplay'](wvsxu), this['_sound']['onError'](dehgf), this['_sound']['src'] = lkomnj;var xtyuw = this;
    }, pokln['play'] = function (lhkij, eacbd) {
      lhkij === void 0x0 && (lhkij = 0x0), eacbd === void 0x0 && (eacbd = 0x0);var z_y0$;if (this['url'] == gfhki['_tMusic']) {
        if (!prqust['_musicAudio']) prqust['_musicAudio'] = prqust['_createSound']();z_y0$ = prqust['_musicAudio'];
      } else z_y0$ = prqust['_createSound']();z_y0$['src'] = this['url'];var lkjghi = new pqomn(z_y0$);return lkjghi['url'] = this['url'], lkjghi['loops'] = eacbd, lkjghi['startTime'] = lhkij, lkjghi['play'](), gfhki['addChannel'](lkjghi), lkjghi;
    }, pokln['dispose'] = function () {
      var hlmjki = prqust['_audioCache'][this['url']];hlmjki && (hlmjki['src'] = '', delete prqust['_audioCache'][this['url']]);
    }, z_yw(0x0, pokln, 'duration', function () {
      return this['_sound']['duration'];
    }), prqust['_createSound'] = function () {
      return prqust['_id']++, jihkgf['window']['wx']['createInnerAudioContext']();
    }, prqust['_musicAudio'] = null, prqust['_id'] = 0x0, prqust['_audioCache'] = {}, prqust['_null'] = undefined, prqust;
  }(_301$2),
      pqomn = function (jmlko) {
    function qpro(ehdfc) {
      this['_audio'] = null, this['_onEnd'] = null, qpro['__super']['call'](this), this['_audio'] = ehdfc, this['_onEnd'] = nklpom['bind'](this['__onEnd'], this), ehdfc['onEnded'](this['_onEnd']);
    }kijlhm(qpro, 'laya.wx.mini.MiniSoundChannel', jmlko);var srpqto = qpro['prototype'];return srpqto['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cefda['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, srpqto['__onNull'] = function () {}, srpqto['play'] = function () {
      this['isStopped'] = ![], gfhki['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, srpqto['stop'] = function () {
      this['isStopped'] = !![], gfhki['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qpro['_null'] != undefined) this['_audio']['onEnded'](qpro['_null']);else try {
        this['_audio']['onEnded'](null), qpro['_null'] = null;
      } catch (xw$_z) {
        console['warn']('[wxmini] stop:' + xw$_z), this['_audio']['onEnded'](nklpom['bind'](this['__onNull'], this)), qpro['_null'] = nklpom['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, srpqto['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, srpqto['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gfhki['addChannel'](this), this['_audio']['play']();
    }, z_yw(0x0, srpqto, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), z_yw(0x0, srpqto, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), z_yw(0x0, srpqto, 'volume', function () {
      return 0x1;
    }, function (fikjh) {}), qpro['_null'] = undefined, qpro;
  }(qornp);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hfige in Laya) {
    var dgebc = Laya[hfige];dgebc && dgebc['__isclass'] && (exports[hfige] = dgebc);
  }
});