var _ = wx.y$;
(function (window, document, wyv$) {
  var zxvywu = wyv$['un'],
      gfdbe = wyv$['uns'],
      yxvzwu = wyv$['static'],
      oqpln = wyv$['class'],
      ljnmik = wyv$['getset'],
      yz0$1_ = wyv$['__newvec'],
      ustxwv = laya['utils']['Browser'],
      xz$yv = laya['events']['Event'],
      _w$zxy = laya['events']['EventDispatcher'],
      $_x0y = laya['resource']['HTMLImage'],
      olkj = laya['utils']['Handler'],
      iklmh = laya['display']['Input'],
      y0$z1_ = laya['net']['Loader'],
      klnim = laya['maths']['Matrix'],
      dihfg = laya['renders']['Render'],
      mplon = laya['utils']['RunDriver'],
      y$wvz = laya['media']['Sound'],
      ilgh = laya['media']['SoundChannel'],
      z_102 = laya['media']['SoundManager'],
      y_wz$x = laya['display']['Stage'],
      nrmq = laya['net']['URL'],
      zwy$v = laya['utils']['Utils'],
      rqnsop = function () {
    function pmlqn() {}return oqpln(pmlqn, 'laya.wx.mini.MiniAdpter'), pmlqn['getJson'] = function (jgif) {
      return JSON['parse'](jgif);
    }, pmlqn['init'] = function (hm, jhkmil) {
      hm === void 0x0 && (hm = ![]), jhkmil === void 0x0 && (jhkmil = ![]);if (pmlqn['_inited']) return;pmlqn['window'] = window;if (pmlqn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pmlqn['_inited'] = !![], pmlqn['isZiYu'] = jhkmil, pmlqn['isPosMsgYu'] = hm, pmlqn['EnvConfig'] = {}, !pmlqn['isZiYu'] && (yz_w['setNativeFileDir']('/layaairGame'), yz_w['existDir'](yz_w['fileNativeDir'], olkj['create'](pmlqn, pmlqn['onMkdirCallBack']))), pmlqn['window']['focus'] = function () {}, wyv$['getUrlPath'] = function () {}, pmlqn['window']['logtime'] = function (cgebd) {}, pmlqn['window']['alertTimeLog'] = function (lgjki) {}, pmlqn['window']['resetShareInfo'] = function () {}, pmlqn['window']['CanvasRenderingContext2D'] = function () {}, pmlqn['window']['CanvasRenderingContext2D']['prototype'] = pmlqn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pmlqn['window']['document']['body']['appendChild'] = function () {}, pmlqn['EnvConfig']['pixelRatioInt'] = 0x0, mplon['getPixelRatio'] = pmlqn['pixelRatio'], pmlqn['_preCreateElement'] = ustxwv['createElement'], ustxwv['createElement'] = pmlqn['createElement'], mplon['createShaderCondition'] = pmlqn['createShaderCondition'], zwy$v['parseXMLFromString'] = pmlqn['parseXMLFromString'], iklmh['_createInputElement'] = $yxvzw['_createInputElement'], pmlqn['EnvConfig']['load'] = y0$z1_['prototype']['load'], y0$z1_['prototype']['load'] = ifedhg['prototype']['load'], pmlqn['isZiYu'] && hm && wx['onMessage'](function (ebcad) {
        ebcad['isLoad'] && (yz_w['ziyuFileData'][ebcad['url']] = ebcad['data']);
      });
    }, pmlqn['onMkdirCallBack'] = function (bdfceg, iehd) {
      if (!bdfceg) yz_w['filesListObj'] = JSON['parse'](iehd['data']);
    }, pmlqn['pixelRatio'] = function () {
      if (!pmlqn['EnvConfig']['pixelRatioInt']) try {
        var plmqn = wx['getSystemInfoSync']();return pmlqn['EnvConfig']['pixelRatioInt'] = plmqn['pixelRatio'], plmqn = plmqn, plmqn['pixelRatio'];
      } catch (nolpmk) {}return pmlqn['EnvConfig']['pixelRatioInt'];
    }, pmlqn['createElement'] = function (khfg) {
      if (khfg == 'canvas') {
        var suwvrt;return pmlqn['idx'] == 0x1 ? pmlqn['isZiYu'] ? (suwvrt = sharedCanvas, suwvrt['style'] = {}) : suwvrt = window['canvas'] : suwvrt = window['wx']['createCanvas'](), pmlqn['idx']++, suwvrt;
      } else {
        if (khfg == 'textarea' || khfg == 'input') return pmlqn['onCreateInput'](khfg);else {
          if (khfg == 'div') {
            var gebdcf = pmlqn['_preCreateElement'](khfg);return gebdcf['contains'] = function (eghdf) {
              return null;
            }, gebdcf['removeChild'] = function (bcafed) {}, gebdcf;
          } else return pmlqn['_preCreateElement'](khfg);
        }
      }
    }, pmlqn['onCreateInput'] = function (omnrqp) {
      var _$1230 = pmlqn['_preCreateElement'](omnrqp);return _$1230['focus'] = $yxvzw['wxinputFocus'], _$1230['blur'] = $yxvzw['wxinputblur'], _$1230['style'] = {}, _$1230['value'] = 0x0, _$1230['parentElement'] = {}, _$1230['placeholder'] = {}, _$1230['type'] = {}, _$1230['setColor'] = function (vxzywu) {}, _$1230['setType'] = function (vuxyzw) {}, _$1230['setFontFace'] = function (vtus) {}, _$1230['addEventListener'] = function (txsv) {}, _$1230['contains'] = function (qprtsu) {
        return null;
      }, _$1230['removeChild'] = function (lhijmk) {}, _$1230;
    }, pmlqn['createShaderCondition'] = function (jinl) {
      var lgijh = this,
          y0xz$ = function () {
        var rtqps = jinl;return lgijh[jinl['replace']('this.', '')];
      };return y0xz$;
    }, pmlqn['EnvConfig'] = null, pmlqn['window'] = null, pmlqn['_preCreateElement'] = null, pmlqn['_inited'] = ![], pmlqn['wxRequest'] = null, pmlqn['systemInfo'] = null, pmlqn['version'] = '0.0.1', pmlqn['isZiYu'] = ![], pmlqn['isPosMsgYu'] = ![], pmlqn['parseXMLFromString'] = function (uxstvw) {
      var hkmlij, lnmoq;uxstvw = uxstvw['replace'](/>\s+</g, '><');try {
        hkmlij = new window['Parser']['DOMParser']()['parseFromString'](uxstvw, 'text/xml');
      } catch (kin) {
        throw '需要引入xml解析库文件';
      }return hkmlij;
    }, pmlqn['idx'] = 0x1, pmlqn;
  }(),
      mlqpn = function () {
    function ifjegh() {}oqpln(ifjegh, 'laya.wx.mini.MiniImage');var kpnlom = ifjegh['prototype'];return kpnlom['_loadImage'] = function (soprn) {
      var x$z_w = this,
          _403 = ![];soprn['indexOf']('layaNativeDir/') == -0x1 && (_403 = !![], soprn = nrmq['formatURL'](soprn));if (!yz_w['getFileInfo'](soprn)) {
        if (soprn['indexOf']('http://') != -0x1 || soprn['indexOf']('https://') != -0x1) yz_w['downImg'](soprn, new olkj(ifjegh, ifjegh['onDownImgCallBack'], [soprn, x$z_w]), soprn);else ifjegh['onCreateImage'](soprn, x$z_w, !![]);
      } else ifjegh['onCreateImage'](soprn, x$z_w, !_403);
    }, ifjegh['onDownImgCallBack'] = function ($20z_, vwz, tqrso) {
      if (!tqrso) ifjegh['onCreateImage']($20z_, vwz);else vwz['onError'](null);
    }, ifjegh['onCreateImage'] = function (mlhik, _24031, plqon) {
      plqon === void 0x0 && (plqon = ![]);var bgedcf;if (!plqon) {
        var swruv = yz_w['getFileInfo'](mlhik),
            khifjg = swruv['md5'];bgedcf = yz_w['getFileNativePath'](khifjg);
      } else bgedcf = mlhik;if (_24031['imgCache'] == null) _24031['imgCache'] = {};var ehfidg;function xtvyuw() {
        ehfidg['onload'] = null, ehfidg['onerror'] = null, delete _24031['imgCache'][mlhik];
      };var suwvr = function () {
        xtvyuw(), _24031['onLoaded'](ehfidg);
      },
          qnrsp = function () {
        xtvyuw(), _24031['event']('error', 'Load image failed');
      };_24031['_type'] == 'nativeimage' ? (ehfidg = new ustxwv['window']['Image'](), ehfidg['crossOrigin'] = '', ehfidg['onload'] = suwvr, ehfidg['onerror'] = qnrsp, ehfidg['src'] = bgedcf, _24031['imgCache'][mlhik] = ehfidg) : new $_x0y['create'](bgedcf, { 'onload': suwvr, 'onerror': qnrsp, 'onCreate': function (ljmkni) {
          ehfidg = ljmkni, _24031['imgCache'][mlhik] = ljmkni;
        } });
    }, ifjegh;
  }(),
      $yxvzw = function () {
    function _13402() {}return oqpln(_13402, 'laya.wx.mini.MiniInput'), _13402['_createInputElement'] = function () {
      iklmh['_initInput'](iklmh['area'] = ustxwv['createElement']('textarea')), iklmh['_initInput'](iklmh['input'] = ustxwv['createElement']('input')), iklmh['inputContainer'] = ustxwv['createElement']('div'), iklmh['inputContainer']['style']['position'] = 'absolute', iklmh['inputContainer']['style']['zIndex'] = 0x186a0, ustxwv['container']['appendChild'](iklmh['inputContainer']), iklmh['inputContainer']['setPos'] = function (igkhfj, ormpqn) {
        iklmh['inputContainer']['style']['left'] = igkhfj + 'px', iklmh['inputContainer']['style']['top'] = ormpqn + 'px';
      }, wyv$['stage']['on']('resize', null, _13402['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hijkf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), z_102['_soundClass'] = oprns, z_102['_musicClass'] = oprns;
    }, _13402['_onStageResize'] = function () {
      var iehgjf = wyv$['stage']['_canvasTransform']['identity']();iehgjf['scale'](ustxwv['width'] / dihfg['canvas']['width'] / mplon['getPixelRatio'](), ustxwv['height'] / dihfg['canvas']['height'] / mplon['getPixelRatio']());
    }, _13402['wxinputFocus'] = function ($2013_) {
      var swvtru = iklmh['inputElement']['target'];if (swvtru && !swvtru['editable']) return;rqnsop['window']['wx']['offKeyboardConfirm'](), rqnsop['window']['wx']['offKeyboardInput'](), rqnsop['window']['wx']['showKeyboard']({ 'defaultValue': swvtru['text'], 'maxLength': swvtru['maxChars'], 'multiple': swvtru['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tvwyx) {}, 'fail': function (kjlnom) {} }), rqnsop['window']['wx']['onKeyboardConfirm'](function (lmhijk) {
        var olpqnm = lmhijk ? lmhijk['value'] : '';swvtru['text'] = olpqnm, swvtru['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rqnsop['window']['wx']['onKeyboardInput'](function (xw$zy) {
        var hdefc = xw$zy ? xw$zy['value'] : '';if (!swvtru['multiline']) {
          if (hdefc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }swvtru['text'] = hdefc, swvtru['event']('input');
      });
    }, _13402['inputEnter'] = function () {
      iklmh['inputElement']['target']['focus'] = ![];
    }, _13402['wxinputblur'] = function () {
      _13402['hideKeyboard']();
    }, _13402['hideKeyboard'] = function () {
      rqnsop['window']['wx']['offKeyboardConfirm'](), rqnsop['window']['wx']['offKeyboardInput'](), rqnsop['window']['wx']['hideKeyboard']({ 'success': function (iklmhj) {
          console['log']('隐藏键盘');
        }, 'fail': function (dfgihe) {
          console['log']('隐藏键盘出错:' + (dfgihe ? dfgihe['errMsg'] : ''));
        } });
    }, _13402;
  }(),
      ifedhg = function () {
    function hjfigk() {}oqpln(hjfigk, 'laya.wx.mini.MiniLoader');var jikhgl = hjfigk['prototype'];return jikhgl['load'] = function (zv$y, cfbe, xuzv, ptrsq, edfcgb) {
      xuzv === void 0x0 && (xuzv = !![]), edfcgb === void 0x0 && (edfcgb = ![]);var jglik = this;jglik['_url'] = zv$y;if (zv$y['indexOf']('data:image') === 0x0) jglik['_type'] = cfbe = 'image';else jglik['_type'] = cfbe || (cfbe = jglik['getTypeFromUrl'](zv$y));jglik['_cache'] = xuzv, jglik['_data'] = null;var vyzx$ = 'ascii';if (zv$y['indexOf']('.fnt') != -0x1) vyzx$ = 'utf8';else cfbe == 'arraybuffer' && (vyzx$ = '');;var x0_zy = zwy$v['getFileExtension'](zv$y);if (hjfigk['_fileTypeArr']['indexOf'](x0_zy) != -0x1) rqnsop['EnvConfig']['load']['call'](this, zv$y, cfbe, xuzv, ptrsq, edfcgb);else {
        if (!yz_w['getFileInfo'](zv$y)) {
          if (zv$y['indexOf']('layaNativeDir/') != -0x1) {
            if (rqnsop['isZiYu']) {
              var tywu = yz_w['ziyuFileData'][zv$y];jglik['onLoaded'](tywu);return;
            } else {
              cosnole['log']('read read'), yz_w['read'](zv$y, vyzx$, new olkj(hjfigk, hjfigk['onReadNativeCallBack'], [vyzx$, zv$y, cfbe, xuzv, ptrsq, edfcgb, jglik]));return;
            }
          }if (nrmq['rootPath'] == '') var uwvsxt = zv$y;else uwvsxt = zv$y['split'](nrmq['rootPath'])[0x0];zv$y['indexOf']('http://') != -0x1 || zv$y['indexOf']('https://') != -0x1 ? rqnsop['EnvConfig']['load']['call'](jglik, zv$y, cfbe, xuzv, ptrsq, edfcgb) : yz_w['readFile'](uwvsxt, vyzx$, new olkj(hjfigk, hjfigk['onReadNativeCallBack'], [vyzx$, zv$y, cfbe, xuzv, ptrsq, edfcgb, jglik]), zv$y);
        } else rqnsop['EnvConfig']['load']['call'](this, zv$y, cfbe, xuzv, ptrsq, edfcgb);
      }
    }, jikhgl['resMgrLoad'] = function (zxwy, srptqo, hlgki, morpnq, wyzvx$, vrust, kifjg) {
      hlgki === void 0x0 && (hlgki = 0x0), morpnq === void 0x0 && (morpnq = ![]), wyzvx$ === void 0x0 && (wyzvx$ = ![]), vrust === void 0x0 && (vrust = 0x0), kifjg === void 0x0 && (kifjg = 0x3), zxwy['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zxwy), rqnsop['EnvConfig']['resMgrLoad'](zxwy, (klinj, vxuyzw, $wyz) => {
        hjfigk['prototype']['resMgrLoadCallBack'](klinj, vxuyzw, $wyz, srptqo);
      }, hlgki, morpnq, wyzvx$, vrust, kifjg);
    }, jikhgl['resMgrLoadCallBack'] = function (jkhif, mjkon, mlpqn, inlk) {
      console['log']('buff:::', jkhif, mlpqn, yz_w['fileNativeDir'] + '///' + yz_w['fileListName']), inlk(jkhif, mjkon, mlpqn);
    }, jikhgl['clearRes'] = function ($x0_yz, upqst) {
      upqst === void 0x0 && (upqst = ![]);var xts = this;xts['clearRes']($x0_yz, upqst);var aced = yz_w['getFileInfo']($x0_yz);if (aced && ($x0_yz['indexOf']('http://') != -0x1 || $x0_yz['indexOf']('https://') != -0x1)) {
        var fdehig = aced['md5'],
            ejfghi = yz_w['getFileNativePath'](fdehig);yz_w['remove'](ejfghi);
      }
    }, hjfigk['onReadNativeCallBack'] = function (afcd, y1z0, $wvyx, uvtqrs, qormn, psqtro, pnsq, fgjhei, kjhlig) {
      uvtqrs === void 0x0 && (uvtqrs = !![]), psqtro === void 0x0 && (psqtro = ![]), fgjhei === void 0x0 && (fgjhei = 0x0);if (!fgjhei) {
        var gdebfc;if ($wvyx == 'json' || $wvyx == 'atlas') gdebfc = rqnsop['getJson'](kjhlig['data']);else $wvyx == 'xml' ? gdebfc = zwy$v['parseXMLFromString'](kjhlig['data']) : gdebfc = kjhlig['data'];pnsq['onLoaded'](gdebfc), !rqnsop['isZiYu'] && rqnsop['isPosMsgYu'] && $wvyx != 'arraybuffer' && wx['postMessage']({ 'url': y1z0, 'data': gdebfc, 'isLoad': !![] });
      } else fgjhei == 0x1 && rqnsop['EnvConfig']['load']['call'](pnsq, y1z0, $wvyx, uvtqrs, qormn, psqtro);
    }, yxvzwu(hjfigk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hjfigk;
  }(),
      yz_w = function (vtsuw) {
    function spurq() {
      spurq['__super']['call'](this);;
    }return oqpln(spurq, 'laya.wx.mini.MiniFileMgr', vtsuw), spurq['isLoadFile'] = function (xswvut) {
      return spurq['_fileTypeArr']['indexOf'](xswvut) != -0x1 ? !![] : ![];
    }, spurq['getFileInfo'] = function (klmjni) {
      var ejhfig = klmjni['split']('?')[0x0],
          jikhlm = spurq['filesListObj'][ejhfig];if (jikhlm == null) return null;else return jikhlm;return null;
    }, spurq['onFileUpdate'] = function (y10$_z, baecf) {
      var hgkij = y10$_z['split']('/'),
          x_y0z = hgkij[hgkij['length'] - 0x1],
          bgdef = spurq['getFileInfo'](baecf);if (bgdef == null) spurq['onSaveFile'](baecf, x_y0z);else {
        if (bgdef['readyUrl'] != baecf) spurq['remove'](x_y0z, baecf);
      }
    }, spurq['exits'] = function (tuqps, efighd) {
      var fijegh = spurq['getFileNativePath'](tuqps);spurq['fs']['getFileInfo']({ 'filePath': fijegh, 'success': function (sutqr) {
          efighd != null && efighd['runWith']([0x0, sutqr]);
        }, 'fail': function (xtwvy) {
          efighd != null && efighd['runWith']([0x1, xtwvy]);
        } });
    }, spurq['read'] = function (ljkimn, qrmnp, $0_z1y, idhfg) {
      qrmnp === void 0x0 && (qrmnp = 'ascill'), idhfg === void 0x0 && (idhfg = '');var kjmln;idhfg != '' ? kjmln = spurq['getFileNativePath'](ljkimn) : kjmln = ljkimn, spurq['fs']['readFile']({ 'filePath': kjmln, 'encoding': qrmnp, 'success': function (z$y1_0) {
          $0_z1y != null && $0_z1y['runWith']([0x0, z$y1_0]);
        }, 'fail': function (kmihlj) {
          if (kmihlj && idhfg != '') spurq['down'](idhfg, qrmnp, $0_z1y, idhfg);else $0_z1y != null && $0_z1y['runWith']([0x1]);
        } });
    }, spurq['readNativeFile'] = function (ljik, txswuv) {
      spurq['fs']['readFile']({ 'filePath': ljik, 'encoding': '', 'success': function (qnpos) {
          txswuv != null && txswuv['runWith']([0x0]);
        }, 'fail': function (gheifd) {
          txswuv != null && txswuv['runWith']([0x1]);
        } });
    }, spurq['down'] = function ($zxwyv, jhkil, klno, $032_1) {
      jhkil === void 0x0 && (jhkil = 'ascill'), $032_1 === void 0x0 && ($032_1 = '');var gefbd = spurq['getFileNativePath']($032_1),
          jheg = spurq['wxdown']({ 'url': $zxwyv, 'filePath': gefbd, 'success': function (ormq) {
          if (ormq['statusCode'] === 0xc8) spurq['readFile'](ormq['filePath'], jhkil, klno, $032_1);
        }, 'fail': function (ptosqr) {
          klno != null && klno['runWith']([0x1, ptosqr]);
        } });jheg['onProgressUpdate'](function (snr) {
        klno != null && klno['runWith']([0x2, snr['progress']]);
      });
    }, spurq['readFile'] = function (fhkgij, jimln, jikfh, y0$_x) {
      jimln === void 0x0 && (jimln = 'ascill'), y0$_x === void 0x0 && (y0$_x = ''), spurq['fs']['readFile']({ 'filePath': fhkgij, 'encoding': jimln, 'success': function (gefcbd) {
          if (fhkgij['indexOf']('http://') != -0x1 || fhkgij['indexOf']('https://') != -0x1) spurq['onFileUpdate'](fhkgij, y0$_x);jikfh != null && jikfh['runWith']([0x0, gefcbd]);
        }, 'fail': function (jlnkm) {
          if (jlnkm) jikfh != null && jikfh['runWith']([0x1, jlnkm]);
        } });
    }, spurq['downImg'] = function (plmnoq, uzyvxw, uxwt) {
      uxwt === void 0x0 && (uxwt = '');var knmjol = spurq['wxdown']({ 'url': plmnoq, 'success': function (stqp) {
          stqp['statusCode'] === 0xc8 && spurq['copyFile'](stqp['tempFilePath'], uxwt, uzyvxw);
        }, 'fail': function (yxz$_w) {
          uzyvxw != null && uzyvxw['runWith']([0x1, yxz$_w]);
        } });
    }, spurq['copyFile'] = function (noqp, otqs, _$20z1) {
      var $1zy0_ = noqp['split']('/'),
          vrstuq = $1zy0_[$1zy0_['length'] - 0x1],
          _32$0 = otqs['split']('?')[0x0],
          cbfgde = spurq['getFileInfo'](otqs),
          psotq = spurq['getFileNativePath'](vrstuq);spurq['fs']['copyFile']({ 'srcPath': noqp, 'destPath': psotq, 'success': function (gifhk) {
          if (!cbfgde) spurq['onSaveFile'](otqs, vrstuq), _$20z1 != null && _$20z1['runWith']([0x0]);else {
            if (cbfgde['readyUrl'] != otqs) spurq['remove'](vrstuq, otqs, _$20z1);
          }
        }, 'fail': function (qrpns) {
          _$20z1 != null && _$20z1['runWith']([0x1, qrpns]);
        } });
    }, spurq['getFileNativePath'] = function (wzvyxu) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wzvyxu;
    }, spurq['remove'] = function (jnlmi, gbfdec, jnilm) {
      gbfdec === void 0x0 && (gbfdec = '');var knmo = spurq['getFileInfo'](gbfdec),
          rstwu = spurq['getFileNativePath'](knmo['md5']);wyv$['loader']['clearRes'](knmo['readyUrl']), spurq['fs']['unlink']({ 'filePath': rstwu, 'success': function (ywzuvx) {
          if (gbfdec != '') spurq['onSaveFile'](gbfdec, jnlmi);jnilm != null && jnilm['runWith']([0x0]);
        }, 'fail': function (yuxtvw) {} });
    }, spurq['onSaveFile'] = function (olpknm, df) {
      var knmjl = olpknm['split']('?')[0x0];spurq['filesListObj'][knmjl] = { 'md5': df, 'readyUrl': olpknm }, spurq['fs']['writeFile']({ 'filePath': spurq['fileNativeDir'] + '/' + spurq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](spurq['filesListObj']), 'success': function (hfde) {
          console['log']('写入测试测试成功：', hfde);
        }, 'fail': function (sporn) {
          console['log']('写入测试测试失败：', sporn);
        } });
    }, spurq['existDir'] = function (x_y$wz, nopsrq) {
      spurq['fs']['mkdir']({ 'dirPath': x_y$wz, 'success': function (imnkj) {
          nopsrq != null && nopsrq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (puqrs) {
          if (puqrs['errMsg']['indexOf']('file already exists') != -0x1) spurq['readSync'](spurq['fileListName'], 'utf8', nopsrq);else nopsrq != null && nopsrq['runWith']([0x1, puqrs]);
        } });
    }, spurq['readSync'] = function (opm, xyzwu, dfeigh, ligkhj) {
      xyzwu === void 0x0 && (xyzwu = 'ascill'), ligkhj === void 0x0 && (ligkhj = '');var psqor = spurq['getFileNativePath'](opm),
          mikl;try {
        mikl = spurq['fs']['readFileSync'](psqor), dfeigh != null && dfeigh['runWith']([0x0, { 'data': mikl }]);
      } catch (tprosq) {
        dfeigh != null && dfeigh['runWith']([0x1]);
      }
    }, spurq['readCache'] = function () {}, spurq['writeCache'] = function (monqp) {
      var $3_2 = readyUrl['split']('?')[0x0];spurq['filesListObj'][$3_2] = { 'md5': md5Name, 'readyUrl': readyUrl }, spurq['fs']['writeFile']({ 'filePath': spurq['fileNativeDir'] + '/' + spurq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](spurq['filesListObj']), 'success': function (xvwzy$) {}, 'fail': function (xtyu) {} });
    }, spurq['setNativeFileDir'] = function (pqormn) {
      spurq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pqormn;
    }, spurq['filesListObj'] = {}, spurq['fileNativeDir'] = null, spurq['fileListName'] = 'layaairfiles.txt', spurq['ziyuFileData'] = {}, yxvzwu(spurq, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), spurq;
  }(_w$zxy),
      oprns = function (qspn) {
    function sopn() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sopn['__super']['call'](this), this['_sound'] = sopn['_createSound']();
    }oqpln(sopn, 'laya.wx.mini.MiniSound', qspn);var lmnjko = sopn['prototype'];return lmnjko['load'] = function (deabc) {
      var knlp = this;deabc = nrmq['formatURL'](deabc), this['url'] = deabc;if (sopn['_audioCache'][deabc]) {
        this['event']('complete');return;
      }function ospnq() {
        if (sopn['_null'] != undefined) knlp['_sound']['onCanplay'](sopn['_null']), knlp['_sound']['onError'](sopn['_null']);else try {
          knlp['_sound']['onCanplay'](null), knlp['_sound']['onError'](null), sopn['_null'] = null;
        } catch (lijkmn) {
          console['warn']('[wxmini] _clearSound:' + lijkmn), knlp['_sound']['onCanplay'](diehgf), knlp['_sound']['onError'](diehgf), sopn['_null'] = diehgf;
        }
      }function _$2103() {
        ospnq(), onqml['loaded'] = !![], onqml['event']('complete'), sopn['_audioCache'][onqml['url']] = onqml;
      }function ihdgf(wsutvx) {
        console['error']('errCode=' + wsutvx['errCode'] + '  errMsg=' + wsutvx['errMsg']), ospnq(), onqml['event']('error');
      }function diehgf() {}this['_sound']['onCanplay'](_$2103), this['_sound']['onError'](ihdgf), this['_sound']['src'] = deabc;var onqml = this;
    }, lmnjko['play'] = function (gijfeh, zwyxu) {
      gijfeh === void 0x0 && (gijfeh = 0x0), zwyxu === void 0x0 && (zwyxu = 0x0);var sqptru;if (this['url'] == z_102['_tMusic']) {
        if (!sopn['_musicAudio']) sopn['_musicAudio'] = sopn['_createSound']();sqptru = sopn['_musicAudio'];
      } else sqptru = sopn['_createSound']();sqptru['src'] = this['url'];var gilk = new eifj(sqptru);return gilk['url'] = this['url'], gilk['loops'] = zwyxu, gilk['startTime'] = gijfeh, gilk['play'](), z_102['addChannel'](gilk), gilk;
    }, lmnjko['dispose'] = function () {
      var rpoqn = sopn['_audioCache'][this['url']];rpoqn && (rpoqn['src'] = '', delete sopn['_audioCache'][this['url']]);
    }, ljnmik(0x0, lmnjko, 'duration', function () {
      return this['_sound']['duration'];
    }), sopn['_createSound'] = function () {
      return sopn['_id']++, rqnsop['window']['wx']['createInnerAudioContext']();
    }, sopn['_musicAudio'] = null, sopn['_id'] = 0x0, sopn['_audioCache'] = {}, sopn['_null'] = undefined, sopn;
  }(_w$zxy),
      eifj = function (dfcab) {
    function fbdae(rqmnp) {
      this['_audio'] = null, this['_onEnd'] = null, fbdae['__super']['call'](this), this['_audio'] = rqmnp, this['_onEnd'] = zwy$v['bind'](this['__onEnd'], this), rqmnp['onEnded'](this['_onEnd']);
    }oqpln(fbdae, 'laya.wx.mini.MiniSoundChannel', dfcab);var che = fbdae['prototype'];return che['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (wyv$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, che['__onNull'] = function () {}, che['play'] = function () {
      this['isStopped'] = ![], z_102['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, che['stop'] = function () {
      this['isStopped'] = !![], z_102['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fbdae['_null'] != undefined) this['_audio']['onEnded'](fbdae['_null']);else try {
        this['_audio']['onEnded'](null), fbdae['_null'] = null;
      } catch (vwuz) {
        console['warn']('[wxmini] stop:' + vwuz), this['_audio']['onEnded'](zwy$v['bind'](this['__onNull'], this)), fbdae['_null'] = zwy$v['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, che['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, che['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], z_102['addChannel'](this), this['_audio']['play']();
    }, ljnmik(0x0, che, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ljnmik(0x0, che, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ljnmik(0x0, che, 'volume', function () {
      return 0x1;
    }, function (_$0zy) {}), fbdae['_null'] = undefined, fbdae;
  }(ilgh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var opsq in Laya) {
    var npklo = Laya[opsq];npklo && npklo['__isclass'] && (exports[opsq] = npklo);
  }
});