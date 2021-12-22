var _ = wx.y$;
(function (window, document, cefba) {
  var eifghd = cefba['un'],
      z_y = cefba['uns'],
      x$_wzy = cefba['static'],
      ikjgfh = cefba['class'],
      urtws = cefba['getset'],
      opqnl = cefba['__newvec'],
      egfcbd = laya['utils']['Browser'],
      wuxzv = laya['events']['Event'],
      z0$2_1 = laya['events']['EventDispatcher'],
      $_3102 = laya['resource']['HTMLImage'],
      rvs = laya['utils']['Handler'],
      utwvyx = laya['display']['Input'],
      w$vzx = laya['net']['Loader'],
      kmlon = laya['maths']['Matrix'],
      inlkj = laya['renders']['Render'],
      kgfi = laya['utils']['RunDriver'],
      klnij = laya['media']['Sound'],
      abf = laya['media']['SoundChannel'],
      gefjih = laya['media']['SoundManager'],
      jkinm = laya['display']['Stage'],
      hdefig = laya['net']['URL'],
      rot = laya['utils']['Utils'],
      nrpomq = function () {
    function xzyv() {}return ikjgfh(xzyv, 'laya.wx.mini.MiniAdpter'), xzyv['getJson'] = function (xzyw_$) {
      return JSON['parse'](xzyw_$);
    }, xzyv['init'] = function (kjlg, ojnmk) {
      kjlg === void 0x0 && (kjlg = ![]), ojnmk === void 0x0 && (ojnmk = ![]);if (xzyv['_inited']) return;xzyv['window'] = window;if (xzyv['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xzyv['_inited'] = !![], xzyv['isZiYu'] = ojnmk, xzyv['isPosMsgYu'] = kjlg, xzyv['EnvConfig'] = {}, !xzyv['isZiYu'] && (ebfda['setNativeFileDir']('/layaairGame'), ebfda['existDir'](ebfda['fileNativeDir'], rvs['create'](xzyv, xzyv['onMkdirCallBack']))), xzyv['window']['focus'] = function () {}, cefba['getUrlPath'] = function () {}, xzyv['window']['logtime'] = function (tqosp) {}, xzyv['window']['alertTimeLog'] = function (hkljg) {}, xzyv['window']['resetShareInfo'] = function () {}, xzyv['window']['CanvasRenderingContext2D'] = function () {}, xzyv['window']['CanvasRenderingContext2D']['prototype'] = xzyv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xzyv['window']['document']['body']['appendChild'] = function () {}, xzyv['EnvConfig']['pixelRatioInt'] = 0x0, kgfi['getPixelRatio'] = xzyv['pixelRatio'], xzyv['_preCreateElement'] = egfcbd['createElement'], egfcbd['createElement'] = xzyv['createElement'], kgfi['createShaderCondition'] = xzyv['createShaderCondition'], rot['parseXMLFromString'] = xzyv['parseXMLFromString'], utwvyx['_createInputElement'] = $01_z2['_createInputElement'], xzyv['EnvConfig']['load'] = w$vzx['prototype']['load'], w$vzx['prototype']['load'] = utvwy['prototype']['load'], xzyv['isZiYu'] && kjlg && wx['onMessage'](function (wvrt) {
        wvrt['isLoad'] && (ebfda['ziyuFileData'][wvrt['url']] = wvrt['data']);
      });
    }, xzyv['onMkdirCallBack'] = function (z02_, x0yz$_) {
      if (!z02_) ebfda['filesListObj'] = JSON['parse'](x0yz$_['data']);
    }, xzyv['pixelRatio'] = function () {
      if (!xzyv['EnvConfig']['pixelRatioInt']) try {
        var uxwsvt = wx['getSystemInfoSync']();return xzyv['EnvConfig']['pixelRatioInt'] = uxwsvt['pixelRatio'], uxwsvt = uxwsvt, uxwsvt['pixelRatio'];
      } catch (fihkgj) {}return xzyv['EnvConfig']['pixelRatioInt'];
    }, xzyv['createElement'] = function (opmlqn) {
      if (opmlqn == 'canvas') {
        var gehi;return xzyv['idx'] == 0x1 ? xzyv['isZiYu'] ? (gehi = sharedCanvas, gehi['style'] = {}) : gehi = window['canvas'] : gehi = window['wx']['createCanvas'](), xzyv['idx']++, gehi;
      } else {
        if (opmlqn == 'textarea' || opmlqn == 'input') return xzyv['onCreateInput'](opmlqn);else {
          if (opmlqn == 'div') {
            var lpmo = xzyv['_preCreateElement'](opmlqn);return lpmo['contains'] = function (zyvxu) {
              return null;
            }, lpmo['removeChild'] = function (txsuwv) {}, lpmo;
          } else return xzyv['_preCreateElement'](opmlqn);
        }
      }
    }, xzyv['onCreateInput'] = function (kjmnil) {
      var egifhd = xzyv['_preCreateElement'](kjmnil);return egifhd['focus'] = $01_z2['wxinputFocus'], egifhd['blur'] = $01_z2['wxinputblur'], egifhd['style'] = {}, egifhd['value'] = 0x0, egifhd['parentElement'] = {}, egifhd['placeholder'] = {}, egifhd['type'] = {}, egifhd['setColor'] = function (vswtxu) {}, egifhd['setType'] = function (npqs) {}, egifhd['setFontFace'] = function (fhe) {}, egifhd['addEventListener'] = function (npsqo) {}, egifhd['contains'] = function (usvqt) {
        return null;
      }, egifhd['removeChild'] = function (ghd) {}, egifhd;
    }, xzyv['createShaderCondition'] = function (_y0$z1) {
      var xtvwuy = this,
          utvsq = function () {
        var rqtos = _y0$z1;return xtvwuy[_y0$z1['replace']('this.', '')];
      };return utvsq;
    }, xzyv['EnvConfig'] = null, xzyv['window'] = null, xzyv['_preCreateElement'] = null, xzyv['_inited'] = ![], xzyv['wxRequest'] = null, xzyv['systemInfo'] = null, xzyv['version'] = '0.0.1', xzyv['isZiYu'] = ![], xzyv['isPosMsgYu'] = ![], xzyv['parseXMLFromString'] = function (z_y$) {
      var chegd, npmok;z_y$ = z_y$['replace'](/>\s+</g, '><');try {
        chegd = new window['Parser']['DOMParser']()['parseFromString'](z_y$, 'text/xml');
      } catch (nosp) {
        throw '需要引入xml解析库文件';
      }return chegd;
    }, xzyv['idx'] = 0x1, xzyv;
  }(),
      ebfca = function () {
    function hkgfi() {}ikjgfh(hkgfi, 'laya.wx.mini.MiniImage');var nklmoj = hkgfi['prototype'];return nklmoj['_loadImage'] = function (tqrsp) {
      var abcdf = this,
          vtxyuw = ![];tqrsp['indexOf']('layaNativeDir/') == -0x1 && (vtxyuw = !![], tqrsp = hdefig['formatURL'](tqrsp));if (!ebfda['getFileInfo'](tqrsp)) {
        if (tqrsp['indexOf']('http://') != -0x1 || tqrsp['indexOf']('https://') != -0x1) ebfda['downImg'](tqrsp, new rvs(hkgfi, hkgfi['onDownImgCallBack'], [tqrsp, abcdf]), tqrsp);else hkgfi['onCreateImage'](tqrsp, abcdf, !![]);
      } else hkgfi['onCreateImage'](tqrsp, abcdf, !vtxyuw);
    }, hkgfi['onDownImgCallBack'] = function (deaf, zy$0_x, _1zy$0) {
      if (!_1zy$0) hkgfi['onCreateImage'](deaf, zy$0_x);else zy$0_x['onError'](null);
    }, hkgfi['onCreateImage'] = function (vyxuwt, wutvsr, pnloq) {
      pnloq === void 0x0 && (pnloq = ![]);var lo;if (!pnloq) {
        var gklhj = ebfda['getFileInfo'](vyxuwt),
            kijhgf = gklhj['md5'];lo = ebfda['getFileNativePath'](kijhgf);
      } else lo = vyxuwt;if (wutvsr['imgCache'] == null) wutvsr['imgCache'] = {};var tyuxwv;function acbef() {
        tyuxwv['onload'] = null, tyuxwv['onerror'] = null, delete wutvsr['imgCache'][vyxuwt];
      };var gihlj = function () {
        acbef(), wutvsr['onLoaded'](tyuxwv);
      },
          xvtwyu = function () {
        acbef(), wutvsr['event']('error', 'Load image failed');
      };wutvsr['_type'] == 'nativeimage' ? (tyuxwv = new egfcbd['window']['Image'](), tyuxwv['crossOrigin'] = '', tyuxwv['onload'] = gihlj, tyuxwv['onerror'] = xvtwyu, tyuxwv['src'] = lo, wutvsr['imgCache'][vyxuwt] = tyuxwv) : new $_3102['create'](lo, { 'onload': gihlj, 'onerror': xvtwyu, 'onCreate': function (_zx$wy) {
          tyuxwv = _zx$wy, wutvsr['imgCache'][vyxuwt] = _zx$wy;
        } });
    }, hkgfi;
  }(),
      $01_z2 = function () {
    function efcgb() {}return ikjgfh(efcgb, 'laya.wx.mini.MiniInput'), efcgb['_createInputElement'] = function () {
      utwvyx['_initInput'](utwvyx['area'] = egfcbd['createElement']('textarea')), utwvyx['_initInput'](utwvyx['input'] = egfcbd['createElement']('input')), utwvyx['inputContainer'] = egfcbd['createElement']('div'), utwvyx['inputContainer']['style']['position'] = 'absolute', utwvyx['inputContainer']['style']['zIndex'] = 0x186a0, egfcbd['container']['appendChild'](utwvyx['inputContainer']), utwvyx['inputContainer']['setPos'] = function (gfhij, omnpql) {
        utwvyx['inputContainer']['style']['left'] = gfhij + 'px', utwvyx['inputContainer']['style']['top'] = omnpql + 'px';
      }, cefba['stage']['on']('resize', null, efcgb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ebdcgf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gefjih['_soundClass'] = jmkhi, gefjih['_musicClass'] = jmkhi;
    }, efcgb['_onStageResize'] = function () {
      var idegh = cefba['stage']['_canvasTransform']['identity']();idegh['scale'](egfcbd['width'] / inlkj['canvas']['width'] / kgfi['getPixelRatio'](), egfcbd['height'] / inlkj['canvas']['height'] / kgfi['getPixelRatio']());
    }, efcgb['wxinputFocus'] = function (cebfg) {
      var zy$x = utwvyx['inputElement']['target'];if (zy$x && !zy$x['editable']) return;nrpomq['window']['wx']['offKeyboardConfirm'](), nrpomq['window']['wx']['offKeyboardInput'](), nrpomq['window']['wx']['showKeyboard']({ 'defaultValue': zy$x['text'], 'maxLength': zy$x['maxChars'], 'multiple': zy$x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (konm) {}, 'fail': function (_0342) {} }), nrpomq['window']['wx']['onKeyboardConfirm'](function (vuqst) {
        var ebadfc = vuqst ? vuqst['value'] : '';zy$x['text'] = ebadfc, zy$x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nrpomq['window']['wx']['onKeyboardInput'](function (yx0z$_) {
        var wtvusx = yx0z$_ ? yx0z$_['value'] : '';if (!zy$x['multiline']) {
          if (wtvusx['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zy$x['text'] = wtvusx, zy$x['event']('input');
      });
    }, efcgb['inputEnter'] = function () {
      utwvyx['inputElement']['target']['focus'] = ![];
    }, efcgb['wxinputblur'] = function () {
      efcgb['hideKeyboard']();
    }, efcgb['hideKeyboard'] = function () {
      nrpomq['window']['wx']['offKeyboardConfirm'](), nrpomq['window']['wx']['offKeyboardInput'](), nrpomq['window']['wx']['hideKeyboard']({ 'success': function (oqprt) {
          console['log']('隐藏键盘');
        }, 'fail': function (vyx$) {
          console['log']('隐藏键盘出错:' + (vyx$ ? vyx$['errMsg'] : ''));
        } });
    }, efcgb;
  }(),
      utvwy = function () {
    function _xz0y() {}ikjgfh(_xz0y, 'laya.wx.mini.MiniLoader');var puqrst = _xz0y['prototype'];return puqrst['load'] = function (nplmo, ihjlk, mjno, $_z21, gilh) {
      mjno === void 0x0 && (mjno = !![]), gilh === void 0x0 && (gilh = ![]);var dghei = this;dghei['_url'] = nplmo;if (nplmo['indexOf']('data:image') === 0x0) dghei['_type'] = ihjlk = 'image';else dghei['_type'] = ihjlk || (ihjlk = dghei['getTypeFromUrl'](nplmo));dghei['_cache'] = mjno, dghei['_data'] = null;var mpnqro = 'ascii';if (nplmo['indexOf']('.fnt') != -0x1) mpnqro = 'utf8';else ihjlk == 'arraybuffer' && (mpnqro = '');;var vytuxw = rot['getFileExtension'](nplmo);if (_xz0y['_fileTypeArr']['indexOf'](vytuxw) != -0x1) nrpomq['EnvConfig']['load']['call'](this, nplmo, ihjlk, mjno, $_z21, gilh);else {
        if (!ebfda['getFileInfo'](nplmo)) {
          if (nplmo['indexOf']('layaNativeDir/') != -0x1) {
            if (nrpomq['isZiYu']) {
              var wzuxvy = ebfda['ziyuFileData'][nplmo];dghei['onLoaded'](wzuxvy);return;
            } else {
              cosnole['log']('read read'), ebfda['read'](nplmo, mpnqro, new rvs(_xz0y, _xz0y['onReadNativeCallBack'], [mpnqro, nplmo, ihjlk, mjno, $_z21, gilh, dghei]));return;
            }
          }if (hdefig['rootPath'] == '') var igfejh = nplmo;else igfejh = nplmo['split'](hdefig['rootPath'])[0x0];nplmo['indexOf']('http://') != -0x1 || nplmo['indexOf']('https://') != -0x1 ? nrpomq['EnvConfig']['load']['call'](dghei, nplmo, ihjlk, mjno, $_z21, gilh) : ebfda['readFile'](igfejh, mpnqro, new rvs(_xz0y, _xz0y['onReadNativeCallBack'], [mpnqro, nplmo, ihjlk, mjno, $_z21, gilh, dghei]), nplmo);
        } else nrpomq['EnvConfig']['load']['call'](this, nplmo, ihjlk, mjno, $_z21, gilh);
      }
    }, puqrst['resMgrLoad'] = function (ighklj, knlmjo, olnjm, rnosq, lmq, ghfecd, qt) {
      olnjm === void 0x0 && (olnjm = 0x0), rnosq === void 0x0 && (rnosq = ![]), lmq === void 0x0 && (lmq = ![]), ghfecd === void 0x0 && (ghfecd = 0x0), qt === void 0x0 && (qt = 0x3), ighklj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ighklj), nrpomq['EnvConfig']['resMgrLoad'](ighklj, (fedab, wyx$_z, oknljm) => {
        _xz0y['prototype']['resMgrLoadCallBack'](fedab, wyx$_z, oknljm, knlmjo);
      }, olnjm, rnosq, lmq, ghfecd, qt);
    }, puqrst['resMgrLoadCallBack'] = function (z_x0, uptr, fikhg, olkmpn) {
      console['log']('buff:::', z_x0, fikhg, ebfda['fileNativeDir'] + '///' + ebfda['fileListName']), olkmpn(z_x0, uptr, fikhg);
    }, puqrst['clearRes'] = function (xvwyz, jfikhg) {
      jfikhg === void 0x0 && (jfikhg = ![]);var _32140 = this;_32140['clearRes'](xvwyz, jfikhg);var knmpl = ebfda['getFileInfo'](xvwyz);if (knmpl && (xvwyz['indexOf']('http://') != -0x1 || xvwyz['indexOf']('https://') != -0x1)) {
        var vxzwy = knmpl['md5'],
            lmikjh = ebfda['getFileNativePath'](vxzwy);ebfda['remove'](lmikjh);
      }
    }, _xz0y['onReadNativeCallBack'] = function (troqsp, _yz$1, rustqp, hcdef, vsxuwt, $yxz_, nqrmpo, $x0_yz, qorts) {
      hcdef === void 0x0 && (hcdef = !![]), $yxz_ === void 0x0 && ($yxz_ = ![]), $x0_yz === void 0x0 && ($x0_yz = 0x0);if (!$x0_yz) {
        var pro;if (rustqp == 'json' || rustqp == 'atlas') pro = nrpomq['getJson'](qorts['data']);else rustqp == 'xml' ? pro = rot['parseXMLFromString'](qorts['data']) : pro = qorts['data'];nqrmpo['onLoaded'](pro), !nrpomq['isZiYu'] && nrpomq['isPosMsgYu'] && rustqp != 'arraybuffer' && wx['postMessage']({ 'url': _yz$1, 'data': pro, 'isLoad': !![] });
      } else $x0_yz == 0x1 && nrpomq['EnvConfig']['load']['call'](nqrmpo, _yz$1, rustqp, hcdef, vsxuwt, $yxz_);
    }, x$_wzy(_xz0y, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _xz0y;
  }(),
      ebfda = function (kigjhf) {
    function _20341() {
      _20341['__super']['call'](this);;
    }return ikjgfh(_20341, 'laya.wx.mini.MiniFileMgr', kigjhf), _20341['isLoadFile'] = function (olkm) {
      return _20341['_fileTypeArr']['indexOf'](olkm) != -0x1 ? !![] : ![];
    }, _20341['getFileInfo'] = function (_xz$0) {
      var xvzuwy = _xz$0['split']('?')[0x0],
          kjgli = _20341['filesListObj'][xvzuwy];if (kjgli == null) return null;else return kjgli;return null;
    }, _20341['onFileUpdate'] = function (lpoqnm, $z120) {
      var omklnp = lpoqnm['split']('/'),
          qnmp = omklnp[omklnp['length'] - 0x1],
          lihjg = _20341['getFileInfo']($z120);if (lihjg == null) _20341['onSaveFile']($z120, qnmp);else {
        if (lihjg['readyUrl'] != $z120) _20341['remove'](qnmp, $z120);
      }
    }, _20341['exits'] = function (dba, mlnokp) {
      var $_310 = _20341['getFileNativePath'](dba);_20341['fs']['getFileInfo']({ 'filePath': $_310, 'success': function (hdfge) {
          mlnokp != null && mlnokp['runWith']([0x0, hdfge]);
        }, 'fail': function (vxwyzu) {
          mlnokp != null && mlnokp['runWith']([0x1, vxwyzu]);
        } });
    }, _20341['read'] = function (qprtos, vwtxu, srtqv, usvxw) {
      vwtxu === void 0x0 && (vwtxu = 'ascill'), usvxw === void 0x0 && (usvxw = '');var uswtxv;usvxw != '' ? uswtxv = _20341['getFileNativePath'](qprtos) : uswtxv = qprtos, _20341['fs']['readFile']({ 'filePath': uswtxv, 'encoding': vwtxu, 'success': function ($0_z) {
          srtqv != null && srtqv['runWith']([0x0, $0_z]);
        }, 'fail': function (rusw) {
          if (rusw && usvxw != '') _20341['down'](usvxw, vwtxu, srtqv, usvxw);else srtqv != null && srtqv['runWith']([0x1]);
        } });
    }, _20341['readNativeFile'] = function (jimnkl, ifdg) {
      _20341['fs']['readFile']({ 'filePath': jimnkl, 'encoding': '', 'success': function (tvxywu) {
          ifdg != null && ifdg['runWith']([0x0]);
        }, 'fail': function (begfdc) {
          ifdg != null && ifdg['runWith']([0x1]);
        } });
    }, _20341['down'] = function (nqmol, decg, decfba, kjhifg) {
      decg === void 0x0 && (decg = 'ascill'), kjhifg === void 0x0 && (kjhifg = '');var xyz0$_ = _20341['getFileNativePath'](kjhifg),
          rqnomp = _20341['wxdown']({ 'url': nqmol, 'filePath': xyz0$_, 'success': function (qsr) {
          if (qsr['statusCode'] === 0xc8) _20341['readFile'](qsr['filePath'], decg, decfba, kjhifg);
        }, 'fail': function (hgije) {
          decfba != null && decfba['runWith']([0x1, hgije]);
        } });rqnomp['onProgressUpdate'](function (moln) {
        decfba != null && decfba['runWith']([0x2, moln['progress']]);
      });
    }, _20341['readFile'] = function (rqsopn, lknm, rnqsop, _yz10) {
      lknm === void 0x0 && (lknm = 'ascill'), _yz10 === void 0x0 && (_yz10 = ''), _20341['fs']['readFile']({ 'filePath': rqsopn, 'encoding': lknm, 'success': function (psronq) {
          if (rqsopn['indexOf']('http://') != -0x1 || rqsopn['indexOf']('https://') != -0x1) _20341['onFileUpdate'](rqsopn, _yz10);rnqsop != null && rnqsop['runWith']([0x0, psronq]);
        }, 'fail': function (molknp) {
          if (molknp) rnqsop != null && rnqsop['runWith']([0x1, molknp]);
        } });
    }, _20341['downImg'] = function (xw$y, hifejg, jfhgei) {
      jfhgei === void 0x0 && (jfhgei = '');var gecdh = _20341['wxdown']({ 'url': xw$y, 'success': function (omnplk) {
          omnplk['statusCode'] === 0xc8 && _20341['copyFile'](omnplk['tempFilePath'], jfhgei, hifejg);
        }, 'fail': function (_$102z) {
          hifejg != null && hifejg['runWith']([0x1, _$102z]);
        } });
    }, _20341['copyFile'] = function (giehdf, uvzxyw, mnplq) {
      var lmnj = giehdf['split']('/'),
          dfcgh = lmnj[lmnj['length'] - 0x1],
          sonqpr = uvzxyw['split']('?')[0x0],
          qrsopt = _20341['getFileInfo'](uvzxyw),
          hklijm = _20341['getFileNativePath'](dfcgh);_20341['fs']['copyFile']({ 'srcPath': giehdf, 'destPath': hklijm, 'success': function (yzx$0_) {
          if (!qrsopt) _20341['onSaveFile'](uvzxyw, dfcgh), mnplq != null && mnplq['runWith']([0x0]);else {
            if (qrsopt['readyUrl'] != uvzxyw) _20341['remove'](dfcgh, uvzxyw, mnplq);
          }
        }, 'fail': function (mokpn) {
          mnplq != null && mnplq['runWith']([0x1, mokpn]);
        } });
    }, _20341['getFileNativePath'] = function (wvxy$z) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wvxy$z;
    }, _20341['remove'] = function (gifehj, xyz$v, tsuprq) {
      xyz$v === void 0x0 && (xyz$v = '');var otpqs = _20341['getFileInfo'](xyz$v),
          hjlkig = _20341['getFileNativePath'](otpqs['md5']);cefba['loader']['clearRes'](otpqs['readyUrl']), _20341['fs']['unlink']({ 'filePath': hjlkig, 'success': function (gijhe) {
          if (xyz$v != '') _20341['onSaveFile'](xyz$v, gifehj);tsuprq != null && tsuprq['runWith']([0x0]);
        }, 'fail': function (dhefgc) {} });
    }, _20341['onSaveFile'] = function (norsp, usxw) {
      var otp = norsp['split']('?')[0x0];_20341['filesListObj'][otp] = { 'md5': usxw, 'readyUrl': norsp }, _20341['fs']['writeFile']({ 'filePath': _20341['fileNativeDir'] + '/' + _20341['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_20341['filesListObj']), 'success': function (_0$xy) {
          console['log']('写入测试测试成功：', _0$xy);
        }, 'fail': function (hgfei) {
          console['log']('写入测试测试失败：', hgfei);
        } });
    }, _20341['existDir'] = function (vrusw, wvyz$x) {
      _20341['fs']['mkdir']({ 'dirPath': vrusw, 'success': function (orqts) {
          wvyz$x != null && wvyz$x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dcfghe) {
          if (dcfghe['errMsg']['indexOf']('file already exists') != -0x1) _20341['readSync'](_20341['fileListName'], 'utf8', wvyz$x);else wvyz$x != null && wvyz$x['runWith']([0x1, dcfghe]);
        } });
    }, _20341['readSync'] = function (_z$201, cbedfa, uvxswt, y_1$z) {
      cbedfa === void 0x0 && (cbedfa = 'ascill'), y_1$z === void 0x0 && (y_1$z = '');var $0z_x = _20341['getFileNativePath'](_z$201),
          vusw;try {
        vusw = _20341['fs']['readFileSync']($0z_x), uvxswt != null && uvxswt['runWith']([0x0, { 'data': vusw }]);
      } catch (xvuwt) {
        uvxswt != null && uvxswt['runWith']([0x1]);
      }
    }, _20341['readCache'] = function () {}, _20341['writeCache'] = function (uwvrt) {
      var $yx_ = readyUrl['split']('?')[0x0];_20341['filesListObj'][$yx_] = { 'md5': md5Name, 'readyUrl': readyUrl }, _20341['fs']['writeFile']({ 'filePath': _20341['fileNativeDir'] + '/' + _20341['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_20341['filesListObj']), 'success': function (sxtuvw) {}, 'fail': function (kjlmhi) {} });
    }, _20341['setNativeFileDir'] = function (hlmjik) {
      _20341['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hlmjik;
    }, _20341['filesListObj'] = {}, _20341['fileNativeDir'] = null, _20341['fileListName'] = 'layaairfiles.txt', _20341['ziyuFileData'] = {}, x$_wzy(_20341, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _20341;
  }(z0$2_1),
      jmkhi = function (tusrp) {
    function kmjhli() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], kmjhli['__super']['call'](this), this['_sound'] = kmjhli['_createSound']();
    }ikjgfh(kmjhli, 'laya.wx.mini.MiniSound', tusrp);var mlojkn = kmjhli['prototype'];return mlojkn['load'] = function (hefdgc) {
      var rqpot = this;hefdgc = hdefig['formatURL'](hefdgc), this['url'] = hefdgc;if (kmjhli['_audioCache'][hefdgc]) {
        this['event']('complete');return;
      }function usqtvr() {
        if (kmjhli['_null'] != undefined) rqpot['_sound']['onCanplay'](kmjhli['_null']), rqpot['_sound']['onError'](kmjhli['_null']);else try {
          rqpot['_sound']['onCanplay'](null), rqpot['_sound']['onError'](null), kmjhli['_null'] = null;
        } catch (qoprn) {
          console['warn']('[wxmini] _clearSound:' + qoprn), rqpot['_sound']['onCanplay'](ikjhfg), rqpot['_sound']['onError'](ikjhfg), kmjhli['_null'] = ikjhfg;
        }
      }function mjinl() {
        usqtvr(), truvq['loaded'] = !![], truvq['event']('complete'), kmjhli['_audioCache'][truvq['url']] = truvq;
      }function srnpq(xtyw) {
        console['error']('errCode=' + xtyw['errCode'] + '  errMsg=' + xtyw['errMsg']), usqtvr(), truvq['event']('error');
      }function ikjhfg() {}this['_sound']['onCanplay'](mjinl), this['_sound']['onError'](srnpq), this['_sound']['src'] = hefdgc;var truvq = this;
    }, mlojkn['play'] = function (qln, z$_xy) {
      qln === void 0x0 && (qln = 0x0), z$_xy === void 0x0 && (z$_xy = 0x0);var eifd;if (this['url'] == gefjih['_tMusic']) {
        if (!kmjhli['_musicAudio']) kmjhli['_musicAudio'] = kmjhli['_createSound']();eifd = kmjhli['_musicAudio'];
      } else eifd = kmjhli['_createSound']();eifd['src'] = this['url'];var cdeghf = new _$3012(eifd);return cdeghf['url'] = this['url'], cdeghf['loops'] = z$_xy, cdeghf['startTime'] = qln, cdeghf['play'](), gefjih['addChannel'](cdeghf), cdeghf;
    }, mlojkn['dispose'] = function () {
      var zyxuwv = kmjhli['_audioCache'][this['url']];zyxuwv && (zyxuwv['src'] = '', delete kmjhli['_audioCache'][this['url']]);
    }, urtws(0x0, mlojkn, 'duration', function () {
      return this['_sound']['duration'];
    }), kmjhli['_createSound'] = function () {
      return kmjhli['_id']++, nrpomq['window']['wx']['createInnerAudioContext']();
    }, kmjhli['_musicAudio'] = null, kmjhli['_id'] = 0x0, kmjhli['_audioCache'] = {}, kmjhli['_null'] = undefined, kmjhli;
  }(z0$2_1),
      _$3012 = function (mrnqop) {
    function ojml(likjmn) {
      this['_audio'] = null, this['_onEnd'] = null, ojml['__super']['call'](this), this['_audio'] = likjmn, this['_onEnd'] = rot['bind'](this['__onEnd'], this), likjmn['onEnded'](this['_onEnd']);
    }ikjgfh(ojml, 'laya.wx.mini.MiniSoundChannel', mrnqop);var wvusr = ojml['prototype'];return wvusr['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (cefba['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wvusr['__onNull'] = function () {}, wvusr['play'] = function () {
      this['isStopped'] = ![], gefjih['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, wvusr['stop'] = function () {
      this['isStopped'] = !![], gefjih['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ojml['_null'] != undefined) this['_audio']['onEnded'](ojml['_null']);else try {
        this['_audio']['onEnded'](null), ojml['_null'] = null;
      } catch (wuzxvy) {
        console['warn']('[wxmini] stop:' + wuzxvy), this['_audio']['onEnded'](rot['bind'](this['__onNull'], this)), ojml['_null'] = rot['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, wvusr['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, wvusr['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gefjih['addChannel'](this), this['_audio']['play']();
    }, urtws(0x0, wvusr, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), urtws(0x0, wvusr, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), urtws(0x0, wvusr, 'volume', function () {
      return 0x1;
    }, function (lnjok) {}), ojml['_null'] = undefined, ojml;
  }(abf);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bfcged in Laya) {
    var diehgf = Laya[bfcged];diehgf && diehgf['__isclass'] && (exports[bfcged] = diehgf);
  }
});