var _ = wx.y$;
(function (window, document, nmlkoj) {
  var xwvuyz = nmlkoj['un'],
      pnolk = nmlkoj['uns'],
      ijlmkn = nmlkoj['static'],
      zvwuxy = nmlkoj['class'],
      xuwy = nmlkoj['getset'],
      vutsrw = nmlkoj['__newvec'],
      mlqo = laya['utils']['Browser'],
      edighf = laya['events']['Event'],
      hligkj = laya['events']['EventDispatcher'],
      kloj = laya['resource']['HTMLImage'],
      zx_0$ = laya['utils']['Handler'],
      fjihg = laya['display']['Input'],
      fkhgji = laya['net']['Loader'],
      qspnr = laya['maths']['Matrix'],
      z1$0_2 = laya['renders']['Render'],
      npqlm = laya['utils']['RunDriver'],
      tpusqr = laya['media']['Sound'],
      khjml = laya['media']['SoundChannel'],
      $1_3 = laya['media']['SoundManager'],
      rqtpus = laya['display']['Stage'],
      cdfeba = laya['net']['URL'],
      debcfa = laya['utils']['Utils'],
      imjn = function () {
    function cebd() {}return zvwuxy(cebd, 'laya.wx.mini.MiniAdpter'), cebd['getJson'] = function (_z$021) {
      return JSON['parse'](_z$021);
    }, cebd['init'] = function (_1240, fhgeji) {
      _1240 === void 0x0 && (_1240 = ![]), fhgeji === void 0x0 && (fhgeji = ![]);if (cebd['_inited']) return;cebd['window'] = window;if (cebd['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;cebd['_inited'] = !![], cebd['isZiYu'] = fhgeji, cebd['isPosMsgYu'] = _1240, cebd['EnvConfig'] = {}, !cebd['isZiYu'] && (tvsq['setNativeFileDir']('/layaairGame'), tvsq['existDir'](tvsq['fileNativeDir'], zx_0$['create'](cebd, cebd['onMkdirCallBack']))), cebd['window']['focus'] = function () {}, nmlkoj['getUrlPath'] = function () {}, cebd['window']['logtime'] = function ($0y1) {}, cebd['window']['alertTimeLog'] = function (_410) {}, cebd['window']['resetShareInfo'] = function () {}, cebd['window']['CanvasRenderingContext2D'] = function () {}, cebd['window']['CanvasRenderingContext2D']['prototype'] = cebd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], cebd['window']['document']['body']['appendChild'] = function () {}, cebd['EnvConfig']['pixelRatioInt'] = 0x0, npqlm['getPixelRatio'] = cebd['pixelRatio'], cebd['_preCreateElement'] = mlqo['createElement'], mlqo['createElement'] = cebd['createElement'], npqlm['createShaderCondition'] = cebd['createShaderCondition'], debcfa['parseXMLFromString'] = cebd['parseXMLFromString'], fjihg['_createInputElement'] = gcbfe['_createInputElement'], cebd['EnvConfig']['load'] = fkhgji['prototype']['load'], fkhgji['prototype']['load'] = hjklg['prototype']['load'], cebd['isZiYu'] && _1240 && wx['onMessage'](function (srwvu) {
        srwvu['isLoad'] && (tvsq['ziyuFileData'][srwvu['url']] = srwvu['data']);
      });
    }, cebd['onMkdirCallBack'] = function (jkmol, rosp) {
      if (!jkmol) tvsq['filesListObj'] = JSON['parse'](rosp['data']);
    }, cebd['pixelRatio'] = function () {
      if (!cebd['EnvConfig']['pixelRatioInt']) try {
        var suptr = wx['getSystemInfoSync']();return cebd['EnvConfig']['pixelRatioInt'] = suptr['pixelRatio'], suptr = suptr, suptr['pixelRatio'];
      } catch (psoqrn) {}return cebd['EnvConfig']['pixelRatioInt'];
    }, cebd['createElement'] = function (lijkgh) {
      if (lijkgh == 'canvas') {
        var bcdaef;return cebd['idx'] == 0x1 ? cebd['isZiYu'] ? (bcdaef = sharedCanvas, bcdaef['style'] = {}) : bcdaef = window['canvas'] : bcdaef = window['wx']['createCanvas'](), cebd['idx']++, bcdaef;
      } else {
        if (lijkgh == 'textarea' || lijkgh == 'input') return cebd['onCreateInput'](lijkgh);else {
          if (lijkgh == 'div') {
            var omqnpl = cebd['_preCreateElement'](lijkgh);return omqnpl['contains'] = function (fdba) {
              return null;
            }, omqnpl['removeChild'] = function (tqsorp) {}, omqnpl;
          } else return cebd['_preCreateElement'](lijkgh);
        }
      }
    }, cebd['onCreateInput'] = function (vwuyt) {
      var ihmlk = cebd['_preCreateElement'](vwuyt);return ihmlk['focus'] = gcbfe['wxinputFocus'], ihmlk['blur'] = gcbfe['wxinputblur'], ihmlk['style'] = {}, ihmlk['value'] = 0x0, ihmlk['parentElement'] = {}, ihmlk['placeholder'] = {}, ihmlk['type'] = {}, ihmlk['setColor'] = function (rpomn) {}, ihmlk['setType'] = function (oklm) {}, ihmlk['setFontFace'] = function (gehfc) {}, ihmlk['addEventListener'] = function (ifjeh) {}, ihmlk['contains'] = function (zx_w$y) {
        return null;
      }, ihmlk['removeChild'] = function (uyxzvw) {}, ihmlk;
    }, cebd['createShaderCondition'] = function (xwtyuv) {
      var pqnlmo = this,
          dcgh = function () {
        var sqrutv = xwtyuv;return pqnlmo[xwtyuv['replace']('this.', '')];
      };return dcgh;
    }, cebd['EnvConfig'] = null, cebd['window'] = null, cebd['_preCreateElement'] = null, cebd['_inited'] = ![], cebd['wxRequest'] = null, cebd['systemInfo'] = null, cebd['version'] = '0.0.1', cebd['isZiYu'] = ![], cebd['isPosMsgYu'] = ![], cebd['parseXMLFromString'] = function (pnmlk) {
      var lkijgh, figkj;pnmlk = pnmlk['replace'](/>\s+</g, '><');try {
        lkijgh = new window['Parser']['DOMParser']()['parseFromString'](pnmlk, 'text/xml');
      } catch (sprqu) {
        throw '需要引入xml解析库文件';
      }return lkijgh;
    }, cebd['idx'] = 0x1, cebd;
  }(),
      y0$_x = function () {
    function rnm() {}zvwuxy(rnm, 'laya.wx.mini.MiniImage');var pqsnro = rnm['prototype'];return pqsnro['_loadImage'] = function (mklnp) {
      var mlhjik = this,
          ilnkj = ![];mklnp['indexOf']('layaNativeDir/') == -0x1 && (ilnkj = !![], mklnp = cdfeba['formatURL'](mklnp));if (!tvsq['getFileInfo'](mklnp)) {
        if (mklnp['indexOf']('http://') != -0x1 || mklnp['indexOf']('https://') != -0x1) tvsq['downImg'](mklnp, new zx_0$(rnm, rnm['onDownImgCallBack'], [mklnp, mlhjik]), mklnp);else rnm['onCreateImage'](mklnp, mlhjik, !![]);
      } else rnm['onCreateImage'](mklnp, mlhjik, !ilnkj);
    }, rnm['onDownImgCallBack'] = function (defghc, sxvu, lhkjim) {
      if (!lhkjim) rnm['onCreateImage'](defghc, sxvu);else sxvu['onError'](null);
    }, rnm['onCreateImage'] = function (usxw, wtvusr, vy$xw) {
      vy$xw === void 0x0 && (vy$xw = ![]);var rpmnq;if (!vy$xw) {
        var rptuqs = tvsq['getFileInfo'](usxw),
            gkhlij = rptuqs['md5'];rpmnq = tvsq['getFileNativePath'](gkhlij);
      } else rpmnq = usxw;if (wtvusr['imgCache'] == null) wtvusr['imgCache'] = {};var qtopr;function z0_yx$() {
        qtopr['onload'] = null, qtopr['onerror'] = null, delete wtvusr['imgCache'][usxw];
      };var qopmnr = function () {
        z0_yx$(), wtvusr['onLoaded'](qtopr);
      },
          qnromp = function () {
        z0_yx$(), wtvusr['event']('error', 'Load image failed');
      };wtvusr['_type'] == 'nativeimage' ? (qtopr = new mlqo['window']['Image'](), qtopr['crossOrigin'] = '', qtopr['onload'] = qopmnr, qtopr['onerror'] = qnromp, qtopr['src'] = rpmnq, wtvusr['imgCache'][usxw] = qtopr) : new kloj['create'](rpmnq, { 'onload': qopmnr, 'onerror': qnromp, 'onCreate': function (omnprq) {
          qtopr = omnprq, wtvusr['imgCache'][usxw] = omnprq;
        } });
    }, rnm;
  }(),
      gcbfe = function () {
    function uxswv() {}return zvwuxy(uxswv, 'laya.wx.mini.MiniInput'), uxswv['_createInputElement'] = function () {
      fjihg['_initInput'](fjihg['area'] = mlqo['createElement']('textarea')), fjihg['_initInput'](fjihg['input'] = mlqo['createElement']('input')), fjihg['inputContainer'] = mlqo['createElement']('div'), fjihg['inputContainer']['style']['position'] = 'absolute', fjihg['inputContainer']['style']['zIndex'] = 0x186a0, mlqo['container']['appendChild'](fjihg['inputContainer']), fjihg['inputContainer']['setPos'] = function (ikgjlh, y$_1z) {
        fjihg['inputContainer']['style']['left'] = ikgjlh + 'px', fjihg['inputContainer']['style']['top'] = y$_1z + 'px';
      }, nmlkoj['stage']['on']('resize', null, uxswv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jgfe) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $1_3['_soundClass'] = vrwtus, $1_3['_musicClass'] = vrwtus;
    }, uxswv['_onStageResize'] = function () {
      var ijmnk = nmlkoj['stage']['_canvasTransform']['identity']();ijmnk['scale'](mlqo['width'] / z1$0_2['canvas']['width'] / npqlm['getPixelRatio'](), mlqo['height'] / z1$0_2['canvas']['height'] / npqlm['getPixelRatio']());
    }, uxswv['wxinputFocus'] = function (khjifg) {
      var ehifd = fjihg['inputElement']['target'];if (ehifd && !ehifd['editable']) return;imjn['window']['wx']['offKeyboardConfirm'](), imjn['window']['wx']['offKeyboardInput'](), imjn['window']['wx']['showKeyboard']({ 'defaultValue': ehifd['text'], 'maxLength': ehifd['maxChars'], 'multiple': ehifd['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (uxzvwy) {}, 'fail': function (z$0_) {} }), imjn['window']['wx']['onKeyboardConfirm'](function (tsuwvr) {
        var zuyv = tsuwvr ? tsuwvr['value'] : '';ehifd['text'] = zuyv, ehifd['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), imjn['window']['wx']['onKeyboardInput'](function (yxzuw) {
        var vzuxy = yxzuw ? yxzuw['value'] : '';if (!ehifd['multiline']) {
          if (vzuxy['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ehifd['text'] = vzuxy, ehifd['event']('input');
      });
    }, uxswv['inputEnter'] = function () {
      fjihg['inputElement']['target']['focus'] = ![];
    }, uxswv['wxinputblur'] = function () {
      uxswv['hideKeyboard']();
    }, uxswv['hideKeyboard'] = function () {
      imjn['window']['wx']['offKeyboardConfirm'](), imjn['window']['wx']['offKeyboardInput'](), imjn['window']['wx']['hideKeyboard']({ 'success': function (fdeg) {
          console['log']('隐藏键盘');
        }, 'fail': function (ihfjkg) {
          console['log']('隐藏键盘出错:' + (ihfjkg ? ihfjkg['errMsg'] : ''));
        } });
    }, uxswv;
  }(),
      hjklg = function () {
    function y10_$z() {}zvwuxy(y10_$z, 'laya.wx.mini.MiniLoader');var inlkjm = y10_$z['prototype'];return inlkjm['load'] = function (bgdfe, lnkoj, qsrtop, xyz, jhkmli) {
      qsrtop === void 0x0 && (qsrtop = !![]), jhkmli === void 0x0 && (jhkmli = ![]);var jilmnk = this;jilmnk['_url'] = bgdfe;if (bgdfe['indexOf']('data:image') === 0x0) jilmnk['_type'] = lnkoj = 'image';else jilmnk['_type'] = lnkoj || (lnkoj = jilmnk['getTypeFromUrl'](bgdfe));jilmnk['_cache'] = qsrtop, jilmnk['_data'] = null;var ljimhk = 'ascii';if (bgdfe['indexOf']('.fnt') != -0x1) ljimhk = 'utf8';else lnkoj == 'arraybuffer' && (ljimhk = '');;var vzxyw$ = debcfa['getFileExtension'](bgdfe);if (y10_$z['_fileTypeArr']['indexOf'](vzxyw$) != -0x1) imjn['EnvConfig']['load']['call'](this, bgdfe, lnkoj, qsrtop, xyz, jhkmli);else {
        if (!tvsq['getFileInfo'](bgdfe)) {
          if (bgdfe['indexOf']('layaNativeDir/') != -0x1) {
            if (imjn['isZiYu']) {
              var vtsurw = tvsq['ziyuFileData'][bgdfe];jilmnk['onLoaded'](vtsurw);return;
            } else {
              cosnole['log']('read read'), tvsq['read'](bgdfe, ljimhk, new zx_0$(y10_$z, y10_$z['onReadNativeCallBack'], [ljimhk, bgdfe, lnkoj, qsrtop, xyz, jhkmli, jilmnk]));return;
            }
          }if (cdfeba['rootPath'] == '') var roqmp = bgdfe;else roqmp = bgdfe['split'](cdfeba['rootPath'])[0x0];bgdfe['indexOf']('http://') != -0x1 || bgdfe['indexOf']('https://') != -0x1 ? imjn['EnvConfig']['load']['call'](jilmnk, bgdfe, lnkoj, qsrtop, xyz, jhkmli) : tvsq['readFile'](roqmp, ljimhk, new zx_0$(y10_$z, y10_$z['onReadNativeCallBack'], [ljimhk, bgdfe, lnkoj, qsrtop, xyz, jhkmli, jilmnk]), bgdfe);
        } else imjn['EnvConfig']['load']['call'](this, bgdfe, lnkoj, qsrtop, xyz, jhkmli);
      }
    }, inlkjm['resMgrLoad'] = function (uvxyt, hgei, mlqnp, qpnomr, ehdfgi, jgfei, gfhd) {
      mlqnp === void 0x0 && (mlqnp = 0x0), qpnomr === void 0x0 && (qpnomr = ![]), ehdfgi === void 0x0 && (ehdfgi = ![]), jgfei === void 0x0 && (jgfei = 0x0), gfhd === void 0x0 && (gfhd = 0x3), uvxyt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', uvxyt), imjn['EnvConfig']['resMgrLoad'](uvxyt, (knim, rstvw, _2$3) => {
        y10_$z['prototype']['resMgrLoadCallBack'](knim, rstvw, _2$3, hgei);
      }, mlqnp, qpnomr, ehdfgi, jgfei, gfhd);
    }, inlkjm['resMgrLoadCallBack'] = function (fadecb, fkigh, xtyvu, x0y_z) {
      console['log']('buff:::', fadecb, xtyvu, tvsq['fileNativeDir'] + '///' + tvsq['fileListName']), x0y_z(fadecb, fkigh, xtyvu);
    }, inlkjm['clearRes'] = function (kljigh, mnrq) {
      mnrq === void 0x0 && (mnrq = ![]);var vwr = this;vwr['clearRes'](kljigh, mnrq);var uxstw = tvsq['getFileInfo'](kljigh);if (uxstw && (kljigh['indexOf']('http://') != -0x1 || kljigh['indexOf']('https://') != -0x1)) {
        var uzwvyx = uxstw['md5'],
            yxutv = tvsq['getFileNativePath'](uzwvyx);tvsq['remove'](yxutv);
      }
    }, y10_$z['onReadNativeCallBack'] = function (qronpm, qprn, wsvrt, qrtuvs, pstr, z210_$, efacb, xvywu, lmkjih) {
      qrtuvs === void 0x0 && (qrtuvs = !![]), z210_$ === void 0x0 && (z210_$ = ![]), xvywu === void 0x0 && (xvywu = 0x0);if (!xvywu) {
        var rtsop;if (wsvrt == 'json' || wsvrt == 'atlas') rtsop = imjn['getJson'](lmkjih['data']);else wsvrt == 'xml' ? rtsop = debcfa['parseXMLFromString'](lmkjih['data']) : rtsop = lmkjih['data'];efacb['onLoaded'](rtsop), !imjn['isZiYu'] && imjn['isPosMsgYu'] && wsvrt != 'arraybuffer' && wx['postMessage']({ 'url': qprn, 'data': rtsop, 'isLoad': !![] });
      } else xvywu == 0x1 && imjn['EnvConfig']['load']['call'](efacb, qprn, wsvrt, qrtuvs, pstr, z210_$);
    }, ijlmkn(y10_$z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), y10_$z;
  }(),
      tvsq = function (jolnkm) {
    function yz$_01() {
      yz$_01['__super']['call'](this);;
    }return zvwuxy(yz$_01, 'laya.wx.mini.MiniFileMgr', jolnkm), yz$_01['isLoadFile'] = function (kljhg) {
      return yz$_01['_fileTypeArr']['indexOf'](kljhg) != -0x1 ? !![] : ![];
    }, yz$_01['getFileInfo'] = function (rqutvs) {
      var tpus = rqutvs['split']('?')[0x0],
          fhkg = yz$_01['filesListObj'][tpus];if (fhkg == null) return null;else return fhkg;return null;
    }, yz$_01['onFileUpdate'] = function (jknm, dbfgc) {
      var y$01 = jknm['split']('/'),
          gbfdec = y$01[y$01['length'] - 0x1],
          _$0zy = yz$_01['getFileInfo'](dbfgc);if (_$0zy == null) yz$_01['onSaveFile'](dbfgc, gbfdec);else {
        if (_$0zy['readyUrl'] != dbfgc) yz$_01['remove'](gbfdec, dbfgc);
      }
    }, yz$_01['exits'] = function (lpmnoq, hkml) {
      var fedgh = yz$_01['getFileNativePath'](lpmnoq);yz$_01['fs']['getFileInfo']({ 'filePath': fedgh, 'success': function (lnp) {
          hkml != null && hkml['runWith']([0x0, lnp]);
        }, 'fail': function (_zxyw) {
          hkml != null && hkml['runWith']([0x1, _zxyw]);
        } });
    }, yz$_01['read'] = function (cgfhed, _z$x0y, olkpn, fhgije) {
      _z$x0y === void 0x0 && (_z$x0y = 'ascill'), fhgije === void 0x0 && (fhgije = '');var $120z;fhgije != '' ? $120z = yz$_01['getFileNativePath'](cgfhed) : $120z = cgfhed, yz$_01['fs']['readFile']({ 'filePath': $120z, 'encoding': _z$x0y, 'success': function (rqpm) {
          olkpn != null && olkpn['runWith']([0x0, rqpm]);
        }, 'fail': function (_$21) {
          if (_$21 && fhgije != '') yz$_01['down'](fhgije, _z$x0y, olkpn, fhgije);else olkpn != null && olkpn['runWith']([0x1]);
        } });
    }, yz$_01['readNativeFile'] = function ($z_1y0, hiljkg) {
      yz$_01['fs']['readFile']({ 'filePath': $z_1y0, 'encoding': '', 'success': function (svqutr) {
          hiljkg != null && hiljkg['runWith']([0x0]);
        }, 'fail': function (nljom) {
          hiljkg != null && hiljkg['runWith']([0x1]);
        } });
    }, yz$_01['down'] = function (gfebc, mnlkoj, urvtsq, xy_z$) {
      mnlkoj === void 0x0 && (mnlkoj = 'ascill'), xy_z$ === void 0x0 && (xy_z$ = '');var z$0yx = yz$_01['getFileNativePath'](xy_z$),
          xwst = yz$_01['wxdown']({ 'url': gfebc, 'filePath': z$0yx, 'success': function (nljki) {
          if (nljki['statusCode'] === 0xc8) yz$_01['readFile'](nljki['filePath'], mnlkoj, urvtsq, xy_z$);
        }, 'fail': function ($z02) {
          urvtsq != null && urvtsq['runWith']([0x1, $z02]);
        } });xwst['onProgressUpdate'](function (z_w$yx) {
        urvtsq != null && urvtsq['runWith']([0x2, z_w$yx['progress']]);
      });
    }, yz$_01['readFile'] = function (xyuzvw, onpl, zy$xwv, jhfgik) {
      onpl === void 0x0 && (onpl = 'ascill'), jhfgik === void 0x0 && (jhfgik = ''), yz$_01['fs']['readFile']({ 'filePath': xyuzvw, 'encoding': onpl, 'success': function (vstuq) {
          if (xyuzvw['indexOf']('http://') != -0x1 || xyuzvw['indexOf']('https://') != -0x1) yz$_01['onFileUpdate'](xyuzvw, jhfgik);zy$xwv != null && zy$xwv['runWith']([0x0, vstuq]);
        }, 'fail': function (vtqs) {
          if (vtqs) zy$xwv != null && zy$xwv['runWith']([0x1, vtqs]);
        } });
    }, yz$_01['downImg'] = function (hkijgl, cefdbg, y0$1z) {
      y0$1z === void 0x0 && (y0$1z = '');var _2z1$0 = yz$_01['wxdown']({ 'url': hkijgl, 'success': function (hjimlk) {
          hjimlk['statusCode'] === 0xc8 && yz$_01['copyFile'](hjimlk['tempFilePath'], y0$1z, cefdbg);
        }, 'fail': function (fdhec) {
          cefdbg != null && cefdbg['runWith']([0x1, fdhec]);
        } });
    }, yz$_01['copyFile'] = function (txyvwu, zuyxw, sqporn) {
      var yz01 = txyvwu['split']('/'),
          bfacde = yz01[yz01['length'] - 0x1],
          mlonk = zuyxw['split']('?')[0x0],
          mki = yz$_01['getFileInfo'](zuyxw),
          jlhkg = yz$_01['getFileNativePath'](bfacde);yz$_01['fs']['copyFile']({ 'srcPath': txyvwu, 'destPath': jlhkg, 'success': function (pmoqnl) {
          if (!mki) yz$_01['onSaveFile'](zuyxw, bfacde), sqporn != null && sqporn['runWith']([0x0]);else {
            if (mki['readyUrl'] != zuyxw) yz$_01['remove'](bfacde, zuyxw, sqporn);
          }
        }, 'fail': function (kjlnmo) {
          sqporn != null && sqporn['runWith']([0x1, kjlnmo]);
        } });
    }, yz$_01['getFileNativePath'] = function (pqusr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pqusr;
    }, yz$_01['remove'] = function (qrptos, urpqs, hjgefi) {
      urpqs === void 0x0 && (urpqs = '');var z0$yx = yz$_01['getFileInfo'](urpqs),
          cdebg = yz$_01['getFileNativePath'](z0$yx['md5']);nmlkoj['loader']['clearRes'](z0$yx['readyUrl']), yz$_01['fs']['unlink']({ 'filePath': cdebg, 'success': function (_$z) {
          if (urpqs != '') yz$_01['onSaveFile'](urpqs, qrptos);hjgefi != null && hjgefi['runWith']([0x0]);
        }, 'fail': function (mnqlp) {} });
    }, yz$_01['onSaveFile'] = function (olnkmj, _$0xy) {
      var onsprq = olnkmj['split']('?')[0x0];yz$_01['filesListObj'][onsprq] = { 'md5': _$0xy, 'readyUrl': olnkmj }, yz$_01['fs']['writeFile']({ 'filePath': yz$_01['fileNativeDir'] + '/' + yz$_01['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yz$_01['filesListObj']), 'success': function (w_zyx$) {
          console['log']('写入测试测试成功：', w_zyx$);
        }, 'fail': function (tuvxws) {
          console['log']('写入测试测试失败：', tuvxws);
        } });
    }, yz$_01['existDir'] = function (qnrsp, lomkjn) {
      yz$_01['fs']['mkdir']({ 'dirPath': qnrsp, 'success': function (xwyv) {
          lomkjn != null && lomkjn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xuzy) {
          if (xuzy['errMsg']['indexOf']('file already exists') != -0x1) yz$_01['readSync'](yz$_01['fileListName'], 'utf8', lomkjn);else lomkjn != null && lomkjn['runWith']([0x1, xuzy]);
        } });
    }, yz$_01['readSync'] = function (utprsq, sux, txywuv, nmqo) {
      sux === void 0x0 && (sux = 'ascill'), nmqo === void 0x0 && (nmqo = '');var tqrvs = yz$_01['getFileNativePath'](utprsq),
          vzxyuw;try {
        vzxyuw = yz$_01['fs']['readFileSync'](tqrvs), txywuv != null && txywuv['runWith']([0x0, { 'data': vzxyuw }]);
      } catch (mlknp) {
        txywuv != null && txywuv['runWith']([0x1]);
      }
    }, yz$_01['readCache'] = function () {}, yz$_01['writeCache'] = function (_ywzx) {
      var gcdehf = readyUrl['split']('?')[0x0];yz$_01['filesListObj'][gcdehf] = { 'md5': md5Name, 'readyUrl': readyUrl }, yz$_01['fs']['writeFile']({ 'filePath': yz$_01['fileNativeDir'] + '/' + yz$_01['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yz$_01['filesListObj']), 'success': function (iljkmn) {}, 'fail': function (wyx$_z) {} });
    }, yz$_01['setNativeFileDir'] = function (surptq) {
      yz$_01['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + surptq;
    }, yz$_01['filesListObj'] = {}, yz$_01['fileNativeDir'] = null, yz$_01['fileListName'] = 'layaairfiles.txt', yz$_01['ziyuFileData'] = {}, ijlmkn(yz$_01, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yz$_01;
  }(hligkj),
      vrwtus = function (bdfae) {
    function qopr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qopr['__super']['call'](this), this['_sound'] = qopr['_createSound']();
    }zvwuxy(qopr, 'laya.wx.mini.MiniSound', bdfae);var edhfcg = qopr['prototype'];return edhfcg['load'] = function (uvxtw) {
      var afdc = this;uvxtw = cdfeba['formatURL'](uvxtw), this['url'] = uvxtw;if (qopr['_audioCache'][uvxtw]) {
        this['event']('complete');return;
      }function hijgf() {
        if (qopr['_null'] != undefined) afdc['_sound']['onCanplay'](qopr['_null']), afdc['_sound']['onError'](qopr['_null']);else try {
          afdc['_sound']['onCanplay'](null), afdc['_sound']['onError'](null), qopr['_null'] = null;
        } catch (gdcfb) {
          console['warn']('[wxmini] _clearSound:' + gdcfb), afdc['_sound']['onCanplay'](twrs), afdc['_sound']['onError'](twrs), qopr['_null'] = twrs;
        }
      }function rqtsv() {
        hijgf(), otqsp['loaded'] = !![], otqsp['event']('complete'), qopr['_audioCache'][otqsp['url']] = otqsp;
      }function tsuvw(xstvuw) {
        console['error']('errCode=' + xstvuw['errCode'] + '  errMsg=' + xstvuw['errMsg']), hijgf(), otqsp['event']('error');
      }function twrs() {}this['_sound']['onCanplay'](rqtsv), this['_sound']['onError'](tsuvw), this['_sound']['src'] = uvxtw;var otqsp = this;
    }, edhfcg['play'] = function (usv, wvtr) {
      usv === void 0x0 && (usv = 0x0), wvtr === void 0x0 && (wvtr = 0x0);var dehgcf;if (this['url'] == $1_3['_tMusic']) {
        if (!qopr['_musicAudio']) qopr['_musicAudio'] = qopr['_createSound']();dehgcf = qopr['_musicAudio'];
      } else dehgcf = qopr['_createSound']();dehgcf['src'] = this['url'];var bfedca = new wuxvt(dehgcf);return bfedca['url'] = this['url'], bfedca['loops'] = wvtr, bfedca['startTime'] = usv, bfedca['play'](), $1_3['addChannel'](bfedca), bfedca;
    }, edhfcg['dispose'] = function () {
      var lhgk = qopr['_audioCache'][this['url']];lhgk && (lhgk['src'] = '', delete qopr['_audioCache'][this['url']]);
    }, xuwy(0x0, edhfcg, 'duration', function () {
      return this['_sound']['duration'];
    }), qopr['_createSound'] = function () {
      return qopr['_id']++, imjn['window']['wx']['createInnerAudioContext']();
    }, qopr['_musicAudio'] = null, qopr['_id'] = 0x0, qopr['_audioCache'] = {}, qopr['_null'] = undefined, qopr;
  }(hligkj),
      wuxvt = function (vxuwt) {
    function sopnqr(jiknml) {
      this['_audio'] = null, this['_onEnd'] = null, sopnqr['__super']['call'](this), this['_audio'] = jiknml, this['_onEnd'] = debcfa['bind'](this['__onEnd'], this), jiknml['onEnded'](this['_onEnd']);
    }zvwuxy(sopnqr, 'laya.wx.mini.MiniSoundChannel', vxuwt);var $0x = sopnqr['prototype'];return $0x['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nmlkoj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $0x['__onNull'] = function () {}, $0x['play'] = function () {
      this['isStopped'] = ![], $1_3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $0x['stop'] = function () {
      this['isStopped'] = !![], $1_3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (sopnqr['_null'] != undefined) this['_audio']['onEnded'](sopnqr['_null']);else try {
        this['_audio']['onEnded'](null), sopnqr['_null'] = null;
      } catch (vtrswu) {
        console['warn']('[wxmini] stop:' + vtrswu), this['_audio']['onEnded'](debcfa['bind'](this['__onNull'], this)), sopnqr['_null'] = debcfa['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $0x['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $0x['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $1_3['addChannel'](this), this['_audio']['play']();
    }, xuwy(0x0, $0x, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xuwy(0x0, $0x, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xuwy(0x0, $0x, 'volume', function () {
      return 0x1;
    }, function (fgdih) {}), sopnqr['_null'] = undefined, sopnqr;
  }(khjml);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bgfde in Laya) {
    var mlojk = Laya[bgfde];mlojk && mlojk['__isclass'] && (exports[bgfde] = mlojk);
  }
});