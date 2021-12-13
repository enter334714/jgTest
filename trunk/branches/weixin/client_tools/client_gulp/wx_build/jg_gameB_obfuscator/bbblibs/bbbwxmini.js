var _ = wx.y$;
(function (window, document, lhi) {
  var dgf = lhi['un'],
      pqurst = lhi['uns'],
      xtwuvs = lhi['static'],
      urtsv = lhi['class'],
      kgij = lhi['getset'],
      nkpoml = lhi['__newvec'],
      fcdbge = laya['utils']['Browser'],
      dcfe = laya['events']['Event'],
      fgcdeh = laya['events']['EventDispatcher'],
      lokjm = laya['resource']['HTMLImage'],
      hfigd = laya['utils']['Handler'],
      vxy$wz = laya['display']['Input'],
      toqp = laya['net']['Loader'],
      yx$zwv = laya['maths']['Matrix'],
      tsprqu = laya['renders']['Render'],
      $y_zx = laya['utils']['RunDriver'],
      yz_10 = laya['media']['Sound'],
      rsqutp = laya['media']['SoundChannel'],
      njmkol = laya['media']['SoundManager'],
      vtyw = laya['display']['Stage'],
      hkfij = laya['net']['URL'],
      vxtusw = laya['utils']['Utils'],
      gfecd = function () {
    function jihkgl() {}return urtsv(jihkgl, 'laya.wx.mini.MiniAdpter'), jihkgl['getJson'] = function (orqpns) {
      return JSON['parse'](orqpns);
    }, jihkgl['init'] = function (fcdegb, xzwyv) {
      fcdegb === void 0x0 && (fcdegb = ![]), xzwyv === void 0x0 && (xzwyv = ![]);if (jihkgl['_inited']) return;jihkgl['window'] = window;if (jihkgl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;jihkgl['_inited'] = !![], jihkgl['isZiYu'] = xzwyv, jihkgl['isPosMsgYu'] = fcdegb, jihkgl['EnvConfig'] = {}, !jihkgl['isZiYu'] && (oqsprt['setNativeFileDir']('/layaairGame'), oqsprt['existDir'](oqsprt['fileNativeDir'], hfigd['create'](jihkgl, jihkgl['onMkdirCallBack']))), jihkgl['window']['focus'] = function () {}, lhi['getUrlPath'] = function () {}, jihkgl['window']['logtime'] = function (qsotp) {}, jihkgl['window']['alertTimeLog'] = function (cebgd) {}, jihkgl['window']['resetShareInfo'] = function () {}, jihkgl['window']['CanvasRenderingContext2D'] = function () {}, jihkgl['window']['CanvasRenderingContext2D']['prototype'] = jihkgl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jihkgl['window']['document']['body']['appendChild'] = function () {}, jihkgl['EnvConfig']['pixelRatioInt'] = 0x0, $y_zx['getPixelRatio'] = jihkgl['pixelRatio'], jihkgl['_preCreateElement'] = fcdbge['createElement'], fcdbge['createElement'] = jihkgl['createElement'], $y_zx['createShaderCondition'] = jihkgl['createShaderCondition'], vxtusw['parseXMLFromString'] = jihkgl['parseXMLFromString'], vxy$wz['_createInputElement'] = knpm['_createInputElement'], jihkgl['EnvConfig']['load'] = toqp['prototype']['load'], toqp['prototype']['load'] = swvt['prototype']['load'], jihkgl['isZiYu'] && fcdegb && wx['onMessage'](function (_y$10z) {
        _y$10z['isLoad'] && (oqsprt['ziyuFileData'][_y$10z['url']] = _y$10z['data']);
      });
    }, jihkgl['onMkdirCallBack'] = function (kjimnl, tsrquv) {
      if (!kjimnl) oqsprt['filesListObj'] = JSON['parse'](tsrquv['data']);
    }, jihkgl['pixelRatio'] = function () {
      if (!jihkgl['EnvConfig']['pixelRatioInt']) try {
        var _yxwz$ = wx['getSystemInfoSync']();return jihkgl['EnvConfig']['pixelRatioInt'] = _yxwz$['pixelRatio'], _yxwz$ = _yxwz$, _yxwz$['pixelRatio'];
      } catch (_0z2$1) {}return jihkgl['EnvConfig']['pixelRatioInt'];
    }, jihkgl['createElement'] = function (qnmpol) {
      if (qnmpol == 'canvas') {
        var uyxtwv;return jihkgl['idx'] == 0x1 ? jihkgl['isZiYu'] ? (uyxtwv = sharedCanvas, uyxtwv['style'] = {}) : uyxtwv = window['canvas'] : uyxtwv = window['wx']['createCanvas'](), jihkgl['idx']++, uyxtwv;
      } else {
        if (qnmpol == 'textarea' || qnmpol == 'input') return jihkgl['onCreateInput'](qnmpol);else {
          if (qnmpol == 'div') {
            var qrtspu = jihkgl['_preCreateElement'](qnmpol);return qrtspu['contains'] = function (srtpqu) {
              return null;
            }, qrtspu['removeChild'] = function (vqtur) {}, qrtspu;
          } else return jihkgl['_preCreateElement'](qnmpol);
        }
      }
    }, jihkgl['onCreateInput'] = function (nprso) {
      var fedchg = jihkgl['_preCreateElement'](nprso);return fedchg['focus'] = knpm['wxinputFocus'], fedchg['blur'] = knpm['wxinputblur'], fedchg['style'] = {}, fedchg['value'] = 0x0, fedchg['parentElement'] = {}, fedchg['placeholder'] = {}, fedchg['type'] = {}, fedchg['setColor'] = function (rvsqut) {}, fedchg['setType'] = function (yxz_w) {}, fedchg['setFontFace'] = function (dgfei) {}, fedchg['addEventListener'] = function (prqtsu) {}, fedchg['contains'] = function ($01_zy) {
        return null;
      }, fedchg['removeChild'] = function (ehjigf) {}, fedchg;
    }, jihkgl['createShaderCondition'] = function (ebadc) {
      var fedihg = this,
          srtpuq = function () {
        var rmnpo = ebadc;return fedihg[ebadc['replace']('this.', '')];
      };return srtpuq;
    }, jihkgl['EnvConfig'] = null, jihkgl['window'] = null, jihkgl['_preCreateElement'] = null, jihkgl['_inited'] = ![], jihkgl['wxRequest'] = null, jihkgl['systemInfo'] = null, jihkgl['version'] = '0.0.1', jihkgl['isZiYu'] = ![], jihkgl['isPosMsgYu'] = ![], jihkgl['parseXMLFromString'] = function (pomnr) {
      var ywuxz, plmko;pomnr = pomnr['replace'](/>\s+</g, '><');try {
        ywuxz = new window['Parser']['DOMParser']()['parseFromString'](pomnr, 'text/xml');
      } catch (uzyw) {
        throw '需要引入xml解析库文件';
      }return ywuxz;
    }, jihkgl['idx'] = 0x1, jihkgl;
  }(),
      surtpq = function () {
    function gecdfh() {}urtsv(gecdfh, 'laya.wx.mini.MiniImage');var zwyuvx = gecdfh['prototype'];return zwyuvx['_loadImage'] = function (y$_1) {
      var geihfj = this,
          onqmrp = ![];y$_1['indexOf']('layaNativeDir/') == -0x1 && (onqmrp = !![], y$_1 = hkfij['formatURL'](y$_1));if (!oqsprt['getFileInfo'](y$_1)) {
        if (y$_1['indexOf']('http://') != -0x1 || y$_1['indexOf']('https://') != -0x1) oqsprt['downImg'](y$_1, new hfigd(gecdfh, gecdfh['onDownImgCallBack'], [y$_1, geihfj]), y$_1);else gecdfh['onCreateImage'](y$_1, geihfj, !![]);
      } else gecdfh['onCreateImage'](y$_1, geihfj, !onqmrp);
    }, gecdfh['onDownImgCallBack'] = function (spuqrt, gdhcef, roptq) {
      if (!roptq) gecdfh['onCreateImage'](spuqrt, gdhcef);else gdhcef['onError'](null);
    }, gecdfh['onCreateImage'] = function (cfh, ihdgf, cehdf) {
      cehdf === void 0x0 && (cehdf = ![]);var pomlnk;if (!cehdf) {
        var uyvwtx = oqsprt['getFileInfo'](cfh),
            zxy_0 = uyvwtx['md5'];pomlnk = oqsprt['getFileNativePath'](zxy_0);
      } else pomlnk = cfh;if (ihdgf['imgCache'] == null) ihdgf['imgCache'] = {};var uxwvy;function mlqpn() {
        uxwvy['onload'] = null, uxwvy['onerror'] = null, delete ihdgf['imgCache'][cfh];
      };var khifjg = function () {
        mlqpn(), ihdgf['onLoaded'](uxwvy);
      },
          uwvt = function () {
        mlqpn(), ihdgf['event']('error', 'Load image failed');
      };ihdgf['_type'] == 'nativeimage' ? (uxwvy = new fcdbge['window']['Image'](), uxwvy['crossOrigin'] = '', uxwvy['onload'] = khifjg, uxwvy['onerror'] = uwvt, uxwvy['src'] = pomlnk, ihdgf['imgCache'][cfh] = uxwvy) : new lokjm['create'](pomlnk, { 'onload': khifjg, 'onerror': uwvt, 'onCreate': function (srtqpo) {
          uxwvy = srtqpo, ihdgf['imgCache'][cfh] = srtqpo;
        } });
    }, gecdfh;
  }(),
      knpm = function () {
    function npqlo() {}return urtsv(npqlo, 'laya.wx.mini.MiniInput'), npqlo['_createInputElement'] = function () {
      vxy$wz['_initInput'](vxy$wz['area'] = fcdbge['createElement']('textarea')), vxy$wz['_initInput'](vxy$wz['input'] = fcdbge['createElement']('input')), vxy$wz['inputContainer'] = fcdbge['createElement']('div'), vxy$wz['inputContainer']['style']['position'] = 'absolute', vxy$wz['inputContainer']['style']['zIndex'] = 0x186a0, fcdbge['container']['appendChild'](vxy$wz['inputContainer']), vxy$wz['inputContainer']['setPos'] = function (oknlpm, lknoj) {
        vxy$wz['inputContainer']['style']['left'] = oknlpm + 'px', vxy$wz['inputContainer']['style']['top'] = lknoj + 'px';
      }, lhi['stage']['on']('resize', null, npqlo['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xw$yz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), njmkol['_soundClass'] = qtpsru, njmkol['_musicClass'] = qtpsru;
    }, npqlo['_onStageResize'] = function () {
      var qtosrp = lhi['stage']['_canvasTransform']['identity']();qtosrp['scale'](fcdbge['width'] / tsprqu['canvas']['width'] / $y_zx['getPixelRatio'](), fcdbge['height'] / tsprqu['canvas']['height'] / $y_zx['getPixelRatio']());
    }, npqlo['wxinputFocus'] = function (dgchf) {
      var uqrpst = vxy$wz['inputElement']['target'];if (uqrpst && !uqrpst['editable']) return;gfecd['window']['wx']['offKeyboardConfirm'](), gfecd['window']['wx']['offKeyboardInput'](), gfecd['window']['wx']['showKeyboard']({ 'defaultValue': uqrpst['text'], 'maxLength': uqrpst['maxChars'], 'multiple': uqrpst['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ecgb) {}, 'fail': function (ihefgd) {} }), gfecd['window']['wx']['onKeyboardConfirm'](function (wsxv) {
        var $xwzv = wsxv ? wsxv['value'] : '';uqrpst['text'] = $xwzv, uqrpst['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gfecd['window']['wx']['onKeyboardInput'](function (klmon) {
        var jgfieh = klmon ? klmon['value'] : '';if (!uqrpst['multiline']) {
          if (jgfieh['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uqrpst['text'] = jgfieh, uqrpst['event']('input');
      });
    }, npqlo['inputEnter'] = function () {
      vxy$wz['inputElement']['target']['focus'] = ![];
    }, npqlo['wxinputblur'] = function () {
      npqlo['hideKeyboard']();
    }, npqlo['hideKeyboard'] = function () {
      gfecd['window']['wx']['offKeyboardConfirm'](), gfecd['window']['wx']['offKeyboardInput'](), gfecd['window']['wx']['hideKeyboard']({ 'success': function (ifjkg) {
          console['log']('隐藏键盘');
        }, 'fail': function (olnjmk) {
          console['log']('隐藏键盘出错:' + (olnjmk ? olnjmk['errMsg'] : ''));
        } });
    }, npqlo;
  }(),
      swvt = function () {
    function hikgl() {}urtsv(hikgl, 'laya.wx.mini.MiniLoader');var rtvuqs = hikgl['prototype'];return rtvuqs['load'] = function (jhef, ceb, lmnik, lhikjm, moqpnl) {
      lmnik === void 0x0 && (lmnik = !![]), moqpnl === void 0x0 && (moqpnl = ![]);var iedhgf = this;iedhgf['_url'] = jhef;if (jhef['indexOf']('data:image') === 0x0) iedhgf['_type'] = ceb = 'image';else iedhgf['_type'] = ceb || (ceb = iedhgf['getTypeFromUrl'](jhef));iedhgf['_cache'] = lmnik, iedhgf['_data'] = null;var y$_x = 'ascii';if (jhef['indexOf']('.fnt') != -0x1) y$_x = 'utf8';else ceb == 'arraybuffer' && (y$_x = '');;var fbgced = vxtusw['getFileExtension'](jhef);if (hikgl['_fileTypeArr']['indexOf'](fbgced) != -0x1) gfecd['EnvConfig']['load']['call'](this, jhef, ceb, lmnik, lhikjm, moqpnl);else {
        if (!oqsprt['getFileInfo'](jhef)) {
          if (jhef['indexOf']('layaNativeDir/') != -0x1) {
            if (gfecd['isZiYu']) {
              var uywvx = oqsprt['ziyuFileData'][jhef];iedhgf['onLoaded'](uywvx);return;
            } else {
              cosnole['log']('read read'), oqsprt['read'](jhef, y$_x, new hfigd(hikgl, hikgl['onReadNativeCallBack'], [y$_x, jhef, ceb, lmnik, lhikjm, moqpnl, iedhgf]));return;
            }
          }if (hkfij['rootPath'] == '') var rtwuv = jhef;else rtwuv = jhef['split'](hkfij['rootPath'])[0x0];jhef['indexOf']('http://') != -0x1 || jhef['indexOf']('https://') != -0x1 ? gfecd['EnvConfig']['load']['call'](iedhgf, jhef, ceb, lmnik, lhikjm, moqpnl) : oqsprt['readFile'](rtwuv, y$_x, new hfigd(hikgl, hikgl['onReadNativeCallBack'], [y$_x, jhef, ceb, lmnik, lhikjm, moqpnl, iedhgf]), jhef);
        } else gfecd['EnvConfig']['load']['call'](this, jhef, ceb, lmnik, lhikjm, moqpnl);
      }
    }, rtvuqs['resMgrLoad'] = function (vyxuz, vtsrwu, $_120, kgfji, vutsr, fhkigj, jlonkm) {
      $_120 === void 0x0 && ($_120 = 0x0), kgfji === void 0x0 && (kgfji = ![]), vutsr === void 0x0 && (vutsr = ![]), fhkigj === void 0x0 && (fhkigj = 0x0), jlonkm === void 0x0 && (jlonkm = 0x3), vyxuz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vyxuz), gfecd['EnvConfig']['resMgrLoad'](vyxuz, (uzvxyw, _$y, lmhki) => {
        hikgl['prototype']['resMgrLoadCallBack'](uzvxyw, _$y, lmhki, vtsrwu);
      }, $_120, kgfji, vutsr, fhkigj, jlonkm);
    }, rtvuqs['resMgrLoadCallBack'] = function (lopnmk, xzy0$_, _01$3, lhmikj) {
      console['log']('buff:::', lopnmk, _01$3, oqsprt['fileNativeDir'] + '///' + oqsprt['fileListName']), lhmikj(lopnmk, xzy0$_, _01$3);
    }, rtvuqs['clearRes'] = function ($20_1z, mpqr) {
      mpqr === void 0x0 && (mpqr = ![]);var _yz01 = this;_yz01['clearRes']($20_1z, mpqr);var uwtr = oqsprt['getFileInfo']($20_1z);if (uwtr && ($20_1z['indexOf']('http://') != -0x1 || $20_1z['indexOf']('https://') != -0x1)) {
        var bead = uwtr['md5'],
            cedfbg = oqsprt['getFileNativePath'](bead);oqsprt['remove'](cedfbg);
      }
    }, hikgl['onReadNativeCallBack'] = function (x_yz, txvws, dcgfe, fjghei, pqoml, z01_$y, igfjeh, urqv, uzyvxw) {
      fjghei === void 0x0 && (fjghei = !![]), z01_$y === void 0x0 && (z01_$y = ![]), urqv === void 0x0 && (urqv = 0x0);if (!urqv) {
        var cdegbf;if (dcgfe == 'json' || dcgfe == 'atlas') cdegbf = gfecd['getJson'](uzyvxw['data']);else dcgfe == 'xml' ? cdegbf = vxtusw['parseXMLFromString'](uzyvxw['data']) : cdegbf = uzyvxw['data'];igfjeh['onLoaded'](cdegbf), !gfecd['isZiYu'] && gfecd['isPosMsgYu'] && dcgfe != 'arraybuffer' && wx['postMessage']({ 'url': txvws, 'data': cdegbf, 'isLoad': !![] });
      } else urqv == 0x1 && gfecd['EnvConfig']['load']['call'](igfjeh, txvws, dcgfe, fjghei, pqoml, z01_$y);
    }, xtwuvs(hikgl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hikgl;
  }(),
      oqsprt = function (moqlnp) {
    function gchfed() {
      gchfed['__super']['call'](this);;
    }return urtsv(gchfed, 'laya.wx.mini.MiniFileMgr', moqlnp), gchfed['isLoadFile'] = function (yvuwt) {
      return gchfed['_fileTypeArr']['indexOf'](yvuwt) != -0x1 ? !![] : ![];
    }, gchfed['getFileInfo'] = function (vuwzx) {
      var eacfd = vuwzx['split']('?')[0x0],
          fdeabc = gchfed['filesListObj'][eacfd];if (fdeabc == null) return null;else return fdeabc;return null;
    }, gchfed['onFileUpdate'] = function (lmopnq, rtoqsp) {
      var mknlo = lmopnq['split']('/'),
          ojnlm = mknlo[mknlo['length'] - 0x1],
          yxtwvu = gchfed['getFileInfo'](rtoqsp);if (yxtwvu == null) gchfed['onSaveFile'](rtoqsp, ojnlm);else {
        if (yxtwvu['readyUrl'] != rtoqsp) gchfed['remove'](ojnlm, rtoqsp);
      }
    }, gchfed['exits'] = function (zvxyuw, tspqro) {
      var wzy$xv = gchfed['getFileNativePath'](zvxyuw);gchfed['fs']['getFileInfo']({ 'filePath': wzy$xv, 'success': function (lmpqon) {
          tspqro != null && tspqro['runWith']([0x0, lmpqon]);
        }, 'fail': function (uvqsr) {
          tspqro != null && tspqro['runWith']([0x1, uvqsr]);
        } });
    }, gchfed['read'] = function (wuvstr, knpml, wrtsv, $y_xz) {
      knpml === void 0x0 && (knpml = 'ascill'), $y_xz === void 0x0 && ($y_xz = '');var _31024;$y_xz != '' ? _31024 = gchfed['getFileNativePath'](wuvstr) : _31024 = wuvstr, gchfed['fs']['readFile']({ 'filePath': _31024, 'encoding': knpml, 'success': function (fihe) {
          wrtsv != null && wrtsv['runWith']([0x0, fihe]);
        }, 'fail': function (ptrsqu) {
          if (ptrsqu && $y_xz != '') gchfed['down']($y_xz, knpml, wrtsv, $y_xz);else wrtsv != null && wrtsv['runWith']([0x1]);
        } });
    }, gchfed['readNativeFile'] = function (hegcd, xytuvw) {
      gchfed['fs']['readFile']({ 'filePath': hegcd, 'encoding': '', 'success': function (zwyx$_) {
          xytuvw != null && xytuvw['runWith']([0x0]);
        }, 'fail': function ($vyz) {
          xytuvw != null && xytuvw['runWith']([0x1]);
        } });
    }, gchfed['down'] = function (_$y01, nomkp, rstuwv, hljkgi) {
      nomkp === void 0x0 && (nomkp = 'ascill'), hljkgi === void 0x0 && (hljkgi = '');var cbdaf = gchfed['getFileNativePath'](hljkgi),
          x$zw = gchfed['wxdown']({ 'url': _$y01, 'filePath': cbdaf, 'success': function (ikhfjg) {
          if (ikhfjg['statusCode'] === 0xc8) gchfed['readFile'](ikhfjg['filePath'], nomkp, rstuwv, hljkgi);
        }, 'fail': function (tuyx) {
          rstuwv != null && rstuwv['runWith']([0x1, tuyx]);
        } });x$zw['onProgressUpdate'](function (olmk) {
        rstuwv != null && rstuwv['runWith']([0x2, olmk['progress']]);
      });
    }, gchfed['readFile'] = function (oknmjl, $_y0zx, zyx$0_, vrsq) {
      $_y0zx === void 0x0 && ($_y0zx = 'ascill'), vrsq === void 0x0 && (vrsq = ''), gchfed['fs']['readFile']({ 'filePath': oknmjl, 'encoding': $_y0zx, 'success': function (dceab) {
          if (oknmjl['indexOf']('http://') != -0x1 || oknmjl['indexOf']('https://') != -0x1) gchfed['onFileUpdate'](oknmjl, vrsq);zyx$0_ != null && zyx$0_['runWith']([0x0, dceab]);
        }, 'fail': function (mnkop) {
          if (mnkop) zyx$0_ != null && zyx$0_['runWith']([0x1, mnkop]);
        } });
    }, gchfed['downImg'] = function (lmopkn, jlmih, urwtvs) {
      urwtvs === void 0x0 && (urwtvs = '');var qnlo = gchfed['wxdown']({ 'url': lmopkn, 'success': function (gjife) {
          gjife['statusCode'] === 0xc8 && gchfed['copyFile'](gjife['tempFilePath'], urwtvs, jlmih);
        }, 'fail': function (opmnql) {
          jlmih != null && jlmih['runWith']([0x1, opmnql]);
        } });
    }, gchfed['copyFile'] = function (mlpnoq, qpom, vrtsqu) {
      var ruwv = mlpnoq['split']('/'),
          x_$zyw = ruwv[ruwv['length'] - 0x1],
          psot = qpom['split']('?')[0x0],
          abdecf = gchfed['getFileInfo'](qpom),
          xvwsu = gchfed['getFileNativePath'](x_$zyw);gchfed['fs']['copyFile']({ 'srcPath': mlpnoq, 'destPath': xvwsu, 'success': function (zvyuxw) {
          if (!abdecf) gchfed['onSaveFile'](qpom, x_$zyw), vrtsqu != null && vrtsqu['runWith']([0x0]);else {
            if (abdecf['readyUrl'] != qpom) gchfed['remove'](x_$zyw, qpom, vrtsqu);
          }
        }, 'fail': function (_21$) {
          vrtsqu != null && vrtsqu['runWith']([0x1, _21$]);
        } });
    }, gchfed['getFileNativePath'] = function (fdace) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fdace;
    }, gchfed['remove'] = function (xvustw, twuxv, _$zwy) {
      twuxv === void 0x0 && (twuxv = '');var oqmp = gchfed['getFileInfo'](twuxv),
          zvuxyw = gchfed['getFileNativePath'](oqmp['md5']);lhi['loader']['clearRes'](oqmp['readyUrl']), gchfed['fs']['unlink']({ 'filePath': zvuxyw, 'success': function (onsq) {
          if (twuxv != '') gchfed['onSaveFile'](twuxv, xvustw);_$zwy != null && _$zwy['runWith']([0x0]);
        }, 'fail': function (fbaecd) {} });
    }, gchfed['onSaveFile'] = function (twvs, pkmnol) {
      var $210z_ = twvs['split']('?')[0x0];gchfed['filesListObj'][$210z_] = { 'md5': pkmnol, 'readyUrl': twvs }, gchfed['fs']['writeFile']({ 'filePath': gchfed['fileNativeDir'] + '/' + gchfed['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gchfed['filesListObj']), 'success': function (hilkjg) {
          console['log']('写入测试测试成功：', hilkjg);
        }, 'fail': function (wyz) {
          console['log']('写入测试测试失败：', wyz);
        } });
    }, gchfed['existDir'] = function (ytw, ihefjg) {
      gchfed['fs']['mkdir']({ 'dirPath': ytw, 'success': function (vxust) {
          ihefjg != null && ihefjg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (decfbg) {
          if (decfbg['errMsg']['indexOf']('file already exists') != -0x1) gchfed['readSync'](gchfed['fileListName'], 'utf8', ihefjg);else ihefjg != null && ihefjg['runWith']([0x1, decfbg]);
        } });
    }, gchfed['readSync'] = function (ijnk, nopklm, fegcdh, pkln) {
      nopklm === void 0x0 && (nopklm = 'ascill'), pkln === void 0x0 && (pkln = '');var vqrtsu = gchfed['getFileNativePath'](ijnk),
          jnml;try {
        jnml = gchfed['fs']['readFileSync'](vqrtsu), fegcdh != null && fegcdh['runWith']([0x0, { 'data': jnml }]);
      } catch (lqopmn) {
        fegcdh != null && fegcdh['runWith']([0x1]);
      }
    }, gchfed['readCache'] = function () {}, gchfed['writeCache'] = function (hmli) {
      var $21 = readyUrl['split']('?')[0x0];gchfed['filesListObj'][$21] = { 'md5': md5Name, 'readyUrl': readyUrl }, gchfed['fs']['writeFile']({ 'filePath': gchfed['fileNativeDir'] + '/' + gchfed['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gchfed['filesListObj']), 'success': function (yx0z_$) {}, 'fail': function (khijfg) {} });
    }, gchfed['setNativeFileDir'] = function (uvrst) {
      gchfed['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uvrst;
    }, gchfed['filesListObj'] = {}, gchfed['fileNativeDir'] = null, gchfed['fileListName'] = 'layaairfiles.txt', gchfed['ziyuFileData'] = {}, xtwuvs(gchfed, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), gchfed;
  }(fgcdeh),
      qtpsru = function (srqt) {
    function efcgdh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], efcgdh['__super']['call'](this), this['_sound'] = efcgdh['_createSound']();
    }urtsv(efcgdh, 'laya.wx.mini.MiniSound', srqt);var ihjkf = efcgdh['prototype'];return ihjkf['load'] = function (rqmnp) {
      var lopk = this;rqmnp = hkfij['formatURL'](rqmnp), this['url'] = rqmnp;if (efcgdh['_audioCache'][rqmnp]) {
        this['event']('complete');return;
      }function tvsux() {
        if (efcgdh['_null'] != undefined) lopk['_sound']['onCanplay'](efcgdh['_null']), lopk['_sound']['onError'](efcgdh['_null']);else try {
          lopk['_sound']['onCanplay'](null), lopk['_sound']['onError'](null), efcgdh['_null'] = null;
        } catch (qmopnl) {
          console['warn']('[wxmini] _clearSound:' + qmopnl), lopk['_sound']['onCanplay'](noprqs), lopk['_sound']['onError'](noprqs), efcgdh['_null'] = noprqs;
        }
      }function gifdeh() {
        tvsux(), onsrp['loaded'] = !![], onsrp['event']('complete'), efcgdh['_audioCache'][onsrp['url']] = onsrp;
      }function jeghi(rqpons) {
        console['error']('errCode=' + rqpons['errCode'] + '  errMsg=' + rqpons['errMsg']), tvsux(), onsrp['event']('error');
      }function noprqs() {}this['_sound']['onCanplay'](gifdeh), this['_sound']['onError'](jeghi), this['_sound']['src'] = rqmnp;var onsrp = this;
    }, ihjkf['play'] = function (gkihj, zy0) {
      gkihj === void 0x0 && (gkihj = 0x0), zy0 === void 0x0 && (zy0 = 0x0);var fgih;if (this['url'] == njmkol['_tMusic']) {
        if (!efcgdh['_musicAudio']) efcgdh['_musicAudio'] = efcgdh['_createSound']();fgih = efcgdh['_musicAudio'];
      } else fgih = efcgdh['_createSound']();fgih['src'] = this['url'];var dhfc = new njol(fgih);return dhfc['url'] = this['url'], dhfc['loops'] = zy0, dhfc['startTime'] = gkihj, dhfc['play'](), njmkol['addChannel'](dhfc), dhfc;
    }, ihjkf['dispose'] = function () {
      var fbecgd = efcgdh['_audioCache'][this['url']];fbecgd && (fbecgd['src'] = '', delete efcgdh['_audioCache'][this['url']]);
    }, kgij(0x0, ihjkf, 'duration', function () {
      return this['_sound']['duration'];
    }), efcgdh['_createSound'] = function () {
      return efcgdh['_id']++, gfecd['window']['wx']['createInnerAudioContext']();
    }, efcgdh['_musicAudio'] = null, efcgdh['_id'] = 0x0, efcgdh['_audioCache'] = {}, efcgdh['_null'] = undefined, efcgdh;
  }(fgcdeh),
      njol = function (y$_01z) {
    function pnoqm(torpsq) {
      this['_audio'] = null, this['_onEnd'] = null, pnoqm['__super']['call'](this), this['_audio'] = torpsq, this['_onEnd'] = vxtusw['bind'](this['__onEnd'], this), torpsq['onEnded'](this['_onEnd']);
    }urtsv(pnoqm, 'laya.wx.mini.MiniSoundChannel', y$_01z);var qmlp = pnoqm['prototype'];return qmlp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (lhi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qmlp['__onNull'] = function () {}, qmlp['play'] = function () {
      this['isStopped'] = ![], njmkol['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, qmlp['stop'] = function () {
      this['isStopped'] = !![], njmkol['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (pnoqm['_null'] != undefined) this['_audio']['onEnded'](pnoqm['_null']);else try {
        this['_audio']['onEnded'](null), pnoqm['_null'] = null;
      } catch (wvtx) {
        console['warn']('[wxmini] stop:' + wvtx), this['_audio']['onEnded'](vxtusw['bind'](this['__onNull'], this)), pnoqm['_null'] = vxtusw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, qmlp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, qmlp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], njmkol['addChannel'](this), this['_audio']['play']();
    }, kgij(0x0, qmlp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), kgij(0x0, qmlp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), kgij(0x0, qmlp, 'volume', function () {
      return 0x1;
    }, function (qpno) {}), pnoqm['_null'] = undefined, pnoqm;
  }(rsqutp);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wutxy in Laya) {
    var ikgjhl = Laya[wutxy];ikgjhl && ikgjhl['__isclass'] && (exports[wutxy] = ikgjhl);
  }
});