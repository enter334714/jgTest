var _ = wx.y$;
(function (window, document, zxvy$) {
  var hgkij = zxvy$['un'],
      rustv = zxvy$['uns'],
      _$z2 = zxvy$['static'],
      pqnso = zxvy$['class'],
      torps = zxvy$['getset'],
      afecdb = zxvy$['__newvec'],
      wyxvz$ = laya['utils']['Browser'],
      khl = laya['events']['Event'],
      oqsrt = laya['events']['EventDispatcher'],
      y$01z_ = laya['resource']['HTMLImage'],
      khji = laya['utils']['Handler'],
      vxzw = laya['display']['Input'],
      usqrtv = laya['net']['Loader'],
      kijlhg = laya['maths']['Matrix'],
      fgijk = laya['renders']['Render'],
      vqtusr = laya['utils']['RunDriver'],
      stupqr = laya['media']['Sound'],
      fhedig = laya['media']['SoundChannel'],
      chfedg = laya['media']['SoundManager'],
      $_xzy = laya['display']['Stage'],
      y$0z_1 = laya['net']['URL'],
      oqpmr = laya['utils']['Utils'],
      becfdg = function () {
    function xzyvu() {}return pqnso(xzyvu, 'laya.wx.mini.MiniAdpter'), xzyvu['getJson'] = function (srotpq) {
      return JSON['parse'](srotpq);
    }, xzyvu['init'] = function (wuvsx, mlkjih) {
      wuvsx === void 0x0 && (wuvsx = ![]), mlkjih === void 0x0 && (mlkjih = ![]);if (xzyvu['_inited']) return;xzyvu['window'] = window;if (xzyvu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xzyvu['_inited'] = !![], xzyvu['isZiYu'] = mlkjih, xzyvu['isPosMsgYu'] = wuvsx, xzyvu['EnvConfig'] = {}, !xzyvu['isZiYu'] && (tqsru['setNativeFileDir']('/layaairGame'), tqsru['existDir'](tqsru['fileNativeDir'], khji['create'](xzyvu, xzyvu['onMkdirCallBack']))), xzyvu['window']['focus'] = function () {}, zxvy$['getUrlPath'] = function () {}, xzyvu['window']['logtime'] = function (sqonp) {}, xzyvu['window']['alertTimeLog'] = function (qrt) {}, xzyvu['window']['resetShareInfo'] = function () {}, xzyvu['window']['CanvasRenderingContext2D'] = function () {}, xzyvu['window']['CanvasRenderingContext2D']['prototype'] = xzyvu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xzyvu['window']['document']['body']['appendChild'] = function () {}, xzyvu['EnvConfig']['pixelRatioInt'] = 0x0, vqtusr['getPixelRatio'] = xzyvu['pixelRatio'], xzyvu['_preCreateElement'] = wyxvz$['createElement'], wyxvz$['createElement'] = xzyvu['createElement'], vqtusr['createShaderCondition'] = xzyvu['createShaderCondition'], oqpmr['parseXMLFromString'] = xzyvu['parseXMLFromString'], vxzw['_createInputElement'] = utpqsr['_createInputElement'], xzyvu['EnvConfig']['load'] = usqrtv['prototype']['load'], usqrtv['prototype']['load'] = wtsuv['prototype']['load'], xzyvu['isZiYu'] && wuvsx && wx['onMessage'](function ($yzxv) {
        $yzxv['isLoad'] && (tqsru['ziyuFileData'][$yzxv['url']] = $yzxv['data']);
      });
    }, xzyvu['onMkdirCallBack'] = function (idfhge, kljmih) {
      if (!idfhge) tqsru['filesListObj'] = JSON['parse'](kljmih['data']);
    }, xzyvu['pixelRatio'] = function () {
      if (!xzyvu['EnvConfig']['pixelRatioInt']) try {
        var gkhfij = wx['getSystemInfoSync']();return xzyvu['EnvConfig']['pixelRatioInt'] = gkhfij['pixelRatio'], gkhfij = gkhfij, gkhfij['pixelRatio'];
      } catch (rqot) {}return xzyvu['EnvConfig']['pixelRatioInt'];
    }, xzyvu['createElement'] = function (_2301) {
      if (_2301 == 'canvas') {
        var oprmnq;return xzyvu['idx'] == 0x1 ? xzyvu['isZiYu'] ? (oprmnq = sharedCanvas, oprmnq['style'] = {}) : oprmnq = window['canvas'] : oprmnq = window['wx']['createCanvas'](), xzyvu['idx']++, oprmnq;
      } else {
        if (_2301 == 'textarea' || _2301 == 'input') return xzyvu['onCreateInput'](_2301);else {
          if (_2301 == 'div') {
            var $10_2z = xzyvu['_preCreateElement'](_2301);return $10_2z['contains'] = function (kpon) {
              return null;
            }, $10_2z['removeChild'] = function (ijkhfg) {}, $10_2z;
          } else return xzyvu['_preCreateElement'](_2301);
        }
      }
    }, xzyvu['onCreateInput'] = function (lpmqn) {
      var tswvux = xzyvu['_preCreateElement'](lpmqn);return tswvux['focus'] = utpqsr['wxinputFocus'], tswvux['blur'] = utpqsr['wxinputblur'], tswvux['style'] = {}, tswvux['value'] = 0x0, tswvux['parentElement'] = {}, tswvux['placeholder'] = {}, tswvux['type'] = {}, tswvux['setColor'] = function (knmpo) {}, tswvux['setType'] = function ($310_) {}, tswvux['setFontFace'] = function (xy_$wz) {}, tswvux['addEventListener'] = function (sutxvw) {}, tswvux['contains'] = function (zy$0x) {
        return null;
      }, tswvux['removeChild'] = function (xyz_0$) {}, tswvux;
    }, xzyvu['createShaderCondition'] = function (sqrnop) {
      var wz$vxy = this,
          wvxstu = function () {
        var ehgfdi = sqrnop;return wz$vxy[sqrnop['replace']('this.', '')];
      };return wvxstu;
    }, xzyvu['EnvConfig'] = null, xzyvu['window'] = null, xzyvu['_preCreateElement'] = null, xzyvu['_inited'] = ![], xzyvu['wxRequest'] = null, xzyvu['systemInfo'] = null, xzyvu['version'] = '0.0.1', xzyvu['isZiYu'] = ![], xzyvu['isPosMsgYu'] = ![], xzyvu['parseXMLFromString'] = function (jmnkol) {
      var vsqtru, $_y01z;jmnkol = jmnkol['replace'](/>\s+</g, '><');try {
        vsqtru = new window['Parser']['DOMParser']()['parseFromString'](jmnkol, 'text/xml');
      } catch (fedch) {
        throw '需要引入xml解析库文件';
      }return vsqtru;
    }, xzyvu['idx'] = 0x1, xzyvu;
  }(),
      qorpmn = function () {
    function osrp() {}pqnso(osrp, 'laya.wx.mini.MiniImage');var nspor = osrp['prototype'];return nspor['_loadImage'] = function ($x_0) {
      var yvx$z = this,
          srqupt = ![];$x_0['indexOf']('layaNativeDir/') == -0x1 && (srqupt = !![], $x_0 = y$0z_1['formatURL']($x_0));if (!tqsru['getFileInfo']($x_0)) {
        if ($x_0['indexOf']('http://') != -0x1 || $x_0['indexOf']('https://') != -0x1) tqsru['downImg']($x_0, new khji(osrp, osrp['onDownImgCallBack'], [$x_0, yvx$z]), $x_0);else osrp['onCreateImage']($x_0, yvx$z, !![]);
      } else osrp['onCreateImage']($x_0, yvx$z, !srqupt);
    }, osrp['onDownImgCallBack'] = function (rnqpm, gejf, v$wzy) {
      if (!v$wzy) osrp['onCreateImage'](rnqpm, gejf);else gejf['onError'](null);
    }, osrp['onCreateImage'] = function (ihegdf, $0_1z, cbafd) {
      cbafd === void 0x0 && (cbafd = ![]);var nlkmj;if (!cbafd) {
        var fihg = tqsru['getFileInfo'](ihegdf),
            kiljhm = fihg['md5'];nlkmj = tqsru['getFileNativePath'](kiljhm);
      } else nlkmj = ihegdf;if ($0_1z['imgCache'] == null) $0_1z['imgCache'] = {};var cegfdh;function uxtws() {
        cegfdh['onload'] = null, cegfdh['onerror'] = null, delete $0_1z['imgCache'][ihegdf];
      };var kilhm = function () {
        uxtws(), $0_1z['onLoaded'](cegfdh);
      },
          tpuq = function () {
        uxtws(), $0_1z['event']('error', 'Load image failed');
      };$0_1z['_type'] == 'nativeimage' ? (cegfdh = new wyxvz$['window']['Image'](), cegfdh['crossOrigin'] = '', cegfdh['onload'] = kilhm, cegfdh['onerror'] = tpuq, cegfdh['src'] = nlkmj, $0_1z['imgCache'][ihegdf] = cegfdh) : new y$01z_['create'](nlkmj, { 'onload': kilhm, 'onerror': tpuq, 'onCreate': function (nikj) {
          cegfdh = nikj, $0_1z['imgCache'][ihegdf] = nikj;
        } });
    }, osrp;
  }(),
      utpqsr = function () {
    function _120z$() {}return pqnso(_120z$, 'laya.wx.mini.MiniInput'), _120z$['_createInputElement'] = function () {
      vxzw['_initInput'](vxzw['area'] = wyxvz$['createElement']('textarea')), vxzw['_initInput'](vxzw['input'] = wyxvz$['createElement']('input')), vxzw['inputContainer'] = wyxvz$['createElement']('div'), vxzw['inputContainer']['style']['position'] = 'absolute', vxzw['inputContainer']['style']['zIndex'] = 0x186a0, wyxvz$['container']['appendChild'](vxzw['inputContainer']), vxzw['inputContainer']['setPos'] = function (lgk, z01y$) {
        vxzw['inputContainer']['style']['left'] = lgk + 'px', vxzw['inputContainer']['style']['top'] = z01y$ + 'px';
      }, zxvy$['stage']['on']('resize', null, _120z$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hjikm) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), chfedg['_soundClass'] = srqnop, chfedg['_musicClass'] = srqnop;
    }, _120z$['_onStageResize'] = function () {
      var lpmnq = zxvy$['stage']['_canvasTransform']['identity']();lpmnq['scale'](wyxvz$['width'] / fgijk['canvas']['width'] / vqtusr['getPixelRatio'](), wyxvz$['height'] / fgijk['canvas']['height'] / vqtusr['getPixelRatio']());
    }, _120z$['wxinputFocus'] = function (tusvx) {
      var poqmrn = vxzw['inputElement']['target'];if (poqmrn && !poqmrn['editable']) return;becfdg['window']['wx']['offKeyboardConfirm'](), becfdg['window']['wx']['offKeyboardInput'](), becfdg['window']['wx']['showKeyboard']({ 'defaultValue': poqmrn['text'], 'maxLength': poqmrn['maxChars'], 'multiple': poqmrn['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (oqnml) {}, 'fail': function (vtusr) {} }), becfdg['window']['wx']['onKeyboardConfirm'](function (hilg) {
        var onlpqm = hilg ? hilg['value'] : '';poqmrn['text'] = onlpqm, poqmrn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), becfdg['window']['wx']['onKeyboardInput'](function (molpn) {
        var xwusvt = molpn ? molpn['value'] : '';if (!poqmrn['multiline']) {
          if (xwusvt['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }poqmrn['text'] = xwusvt, poqmrn['event']('input');
      });
    }, _120z$['inputEnter'] = function () {
      vxzw['inputElement']['target']['focus'] = ![];
    }, _120z$['wxinputblur'] = function () {
      _120z$['hideKeyboard']();
    }, _120z$['hideKeyboard'] = function () {
      becfdg['window']['wx']['offKeyboardConfirm'](), becfdg['window']['wx']['offKeyboardInput'](), becfdg['window']['wx']['hideKeyboard']({ 'success': function (gheifd) {
          console['log']('隐藏键盘');
        }, 'fail': function (_320) {
          console['log']('隐藏键盘出错:' + (_320 ? _320['errMsg'] : ''));
        } });
    }, _120z$;
  }(),
      wtsuv = function () {
    function stvxw() {}pqnso(stvxw, 'laya.wx.mini.MiniLoader');var vqrs = stvxw['prototype'];return vqrs['load'] = function (vqusr, qnso, yxvz$, $1_0zy, utyxv) {
      yxvz$ === void 0x0 && (yxvz$ = !![]), utyxv === void 0x0 && (utyxv = ![]);var z_$0y = this;z_$0y['_url'] = vqusr;if (vqusr['indexOf']('data:image') === 0x0) z_$0y['_type'] = qnso = 'image';else z_$0y['_type'] = qnso || (qnso = z_$0y['getTypeFromUrl'](vqusr));z_$0y['_cache'] = yxvz$, z_$0y['_data'] = null;var jilhkm = 'ascii';if (vqusr['indexOf']('.fnt') != -0x1) jilhkm = 'utf8';else qnso == 'arraybuffer' && (jilhkm = '');;var ghjeif = oqpmr['getFileExtension'](vqusr);if (stvxw['_fileTypeArr']['indexOf'](ghjeif) != -0x1) becfdg['EnvConfig']['load']['call'](this, vqusr, qnso, yxvz$, $1_0zy, utyxv);else {
        if (!tqsru['getFileInfo'](vqusr)) {
          if (vqusr['indexOf']('layaNativeDir/') != -0x1) {
            if (becfdg['isZiYu']) {
              var uyxtvw = tqsru['ziyuFileData'][vqusr];z_$0y['onLoaded'](uyxtvw);return;
            } else {
              cosnole['log']('read read'), tqsru['read'](vqusr, jilhkm, new khji(stvxw, stvxw['onReadNativeCallBack'], [jilhkm, vqusr, qnso, yxvz$, $1_0zy, utyxv, z_$0y]));return;
            }
          }if (y$0z_1['rootPath'] == '') var qsruv = vqusr;else qsruv = vqusr['split'](y$0z_1['rootPath'])[0x0];vqusr['indexOf']('http://') != -0x1 || vqusr['indexOf']('https://') != -0x1 ? becfdg['EnvConfig']['load']['call'](z_$0y, vqusr, qnso, yxvz$, $1_0zy, utyxv) : tqsru['readFile'](qsruv, jilhkm, new khji(stvxw, stvxw['onReadNativeCallBack'], [jilhkm, vqusr, qnso, yxvz$, $1_0zy, utyxv, z_$0y]), vqusr);
        } else becfdg['EnvConfig']['load']['call'](this, vqusr, qnso, yxvz$, $1_0zy, utyxv);
      }
    }, vqrs['resMgrLoad'] = function (uxwt, qmnpor, ieghjf, $wv, w_z$yx, xwstuv, jnlmik) {
      ieghjf === void 0x0 && (ieghjf = 0x0), $wv === void 0x0 && ($wv = ![]), w_z$yx === void 0x0 && (w_z$yx = ![]), xwstuv === void 0x0 && (xwstuv = 0x0), jnlmik === void 0x0 && (jnlmik = 0x3), uxwt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', uxwt), becfdg['EnvConfig']['resMgrLoad'](uxwt, (hfgde, onplq, wutsv) => {
        stvxw['prototype']['resMgrLoadCallBack'](hfgde, onplq, wutsv, qmnpor);
      }, ieghjf, $wv, w_z$yx, xwstuv, jnlmik);
    }, vqrs['resMgrLoadCallBack'] = function (noqpr, vutsrw, ljknim, zwv) {
      console['log']('buff:::', noqpr, ljknim, tqsru['fileNativeDir'] + '///' + tqsru['fileListName']), zwv(noqpr, vutsrw, ljknim);
    }, vqrs['clearRes'] = function (zxwv, nmqor) {
      nmqor === void 0x0 && (nmqor = ![]);var egidhf = this;egidhf['clearRes'](zxwv, nmqor);var xyvtw = tqsru['getFileInfo'](zxwv);if (xyvtw && (zxwv['indexOf']('http://') != -0x1 || zxwv['indexOf']('https://') != -0x1)) {
        var fbaecd = xyvtw['md5'],
            lkghj = tqsru['getFileNativePath'](fbaecd);tqsru['remove'](lkghj);
      }
    }, stvxw['onReadNativeCallBack'] = function (vzyxuw, dcefbg, trsp, bdcea, rnmoq, z01_2, ruqs, plqmon, xzw$y) {
      bdcea === void 0x0 && (bdcea = !![]), z01_2 === void 0x0 && (z01_2 = ![]), plqmon === void 0x0 && (plqmon = 0x0);if (!plqmon) {
        var z0xy$;if (trsp == 'json' || trsp == 'atlas') z0xy$ = becfdg['getJson'](xzw$y['data']);else trsp == 'xml' ? z0xy$ = oqpmr['parseXMLFromString'](xzw$y['data']) : z0xy$ = xzw$y['data'];ruqs['onLoaded'](z0xy$), !becfdg['isZiYu'] && becfdg['isPosMsgYu'] && trsp != 'arraybuffer' && wx['postMessage']({ 'url': dcefbg, 'data': z0xy$, 'isLoad': !![] });
      } else plqmon == 0x1 && becfdg['EnvConfig']['load']['call'](ruqs, dcefbg, trsp, bdcea, rnmoq, z01_2);
    }, _$z2(stvxw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), stvxw;
  }(),
      tqsru = function (deigfh) {
    function egbfcd() {
      egbfcd['__super']['call'](this);;
    }return pqnso(egbfcd, 'laya.wx.mini.MiniFileMgr', deigfh), egbfcd['isLoadFile'] = function (cehf) {
      return egbfcd['_fileTypeArr']['indexOf'](cehf) != -0x1 ? !![] : ![];
    }, egbfcd['getFileInfo'] = function (vqus) {
      var omrqn = vqus['split']('?')[0x0],
          efdhi = egbfcd['filesListObj'][omrqn];if (efdhi == null) return null;else return efdhi;return null;
    }, egbfcd['onFileUpdate'] = function (bfcg, rqupt) {
      var jlhig = bfcg['split']('/'),
          soqnp = jlhig[jlhig['length'] - 0x1],
          _y0$ = egbfcd['getFileInfo'](rqupt);if (_y0$ == null) egbfcd['onSaveFile'](rqupt, soqnp);else {
        if (_y0$['readyUrl'] != rqupt) egbfcd['remove'](soqnp, rqupt);
      }
    }, egbfcd['exits'] = function (mqplo, qtpsr) {
      var lhikjm = egbfcd['getFileNativePath'](mqplo);egbfcd['fs']['getFileInfo']({ 'filePath': lhikjm, 'success': function (xyvzu) {
          qtpsr != null && qtpsr['runWith']([0x0, xyvzu]);
        }, 'fail': function (nmr) {
          qtpsr != null && qtpsr['runWith']([0x1, nmr]);
        } });
    }, egbfcd['read'] = function (vrtu, w$x_y, mrnopq, zv$xwy) {
      w$x_y === void 0x0 && (w$x_y = 'ascill'), zv$xwy === void 0x0 && (zv$xwy = '');var uwrv;zv$xwy != '' ? uwrv = egbfcd['getFileNativePath'](vrtu) : uwrv = vrtu, egbfcd['fs']['readFile']({ 'filePath': uwrv, 'encoding': w$x_y, 'success': function (ojmlkn) {
          mrnopq != null && mrnopq['runWith']([0x0, ojmlkn]);
        }, 'fail': function (rtqups) {
          if (rtqups && zv$xwy != '') egbfcd['down'](zv$xwy, w$x_y, mrnopq, zv$xwy);else mrnopq != null && mrnopq['runWith']([0x1]);
        } });
    }, egbfcd['readNativeFile'] = function (ustwr, x_$yz) {
      egbfcd['fs']['readFile']({ 'filePath': ustwr, 'encoding': '', 'success': function (mhkj) {
          x_$yz != null && x_$yz['runWith']([0x0]);
        }, 'fail': function (pnorm) {
          x_$yz != null && x_$yz['runWith']([0x1]);
        } });
    }, egbfcd['down'] = function (ormpqn, jkhilg, ijfhge, oqlm) {
      jkhilg === void 0x0 && (jkhilg = 'ascill'), oqlm === void 0x0 && (oqlm = '');var pusqt = egbfcd['getFileNativePath'](oqlm),
          tprus = egbfcd['wxdown']({ 'url': ormpqn, 'filePath': pusqt, 'success': function (njlik) {
          if (njlik['statusCode'] === 0xc8) egbfcd['readFile'](njlik['filePath'], jkhilg, ijfhge, oqlm);
        }, 'fail': function (ihejgf) {
          ijfhge != null && ijfhge['runWith']([0x1, ihejgf]);
        } });tprus['onProgressUpdate'](function (yzx_0) {
        ijfhge != null && ijfhge['runWith']([0x2, yzx_0['progress']]);
      });
    }, egbfcd['readFile'] = function (oprm, porn, $z20, rqtosp) {
      porn === void 0x0 && (porn = 'ascill'), rqtosp === void 0x0 && (rqtosp = ''), egbfcd['fs']['readFile']({ 'filePath': oprm, 'encoding': porn, 'success': function (sxtwv) {
          if (oprm['indexOf']('http://') != -0x1 || oprm['indexOf']('https://') != -0x1) egbfcd['onFileUpdate'](oprm, rqtosp);$z20 != null && $z20['runWith']([0x0, sxtwv]);
        }, 'fail': function (hikgjl) {
          if (hikgjl) $z20 != null && $z20['runWith']([0x1, hikgjl]);
        } });
    }, egbfcd['downImg'] = function (kmjo, ghdi, nqsor) {
      nqsor === void 0x0 && (nqsor = '');var wyxuz = egbfcd['wxdown']({ 'url': kmjo, 'success': function (_$y1) {
          _$y1['statusCode'] === 0xc8 && egbfcd['copyFile'](_$y1['tempFilePath'], nqsor, ghdi);
        }, 'fail': function (jefgi) {
          ghdi != null && ghdi['runWith']([0x1, jefgi]);
        } });
    }, egbfcd['copyFile'] = function (eijgfh, wyxuvt, aebdc) {
      var puqtrs = eijgfh['split']('/'),
          pqlon = puqtrs[puqtrs['length'] - 0x1],
          mjni = wyxuvt['split']('?')[0x0],
          wyux = egbfcd['getFileInfo'](wyxuvt),
          loqm = egbfcd['getFileNativePath'](pqlon);egbfcd['fs']['copyFile']({ 'srcPath': eijgfh, 'destPath': loqm, 'success': function (tsurw) {
          if (!wyux) egbfcd['onSaveFile'](wyxuvt, pqlon), aebdc != null && aebdc['runWith']([0x0]);else {
            if (wyux['readyUrl'] != wyxuvt) egbfcd['remove'](pqlon, wyxuvt, aebdc);
          }
        }, 'fail': function (_$02z) {
          aebdc != null && aebdc['runWith']([0x1, _$02z]);
        } });
    }, egbfcd['getFileNativePath'] = function (lpnmqo) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lpnmqo;
    }, egbfcd['remove'] = function (z$0_2, qsrp, khgjfi) {
      qsrp === void 0x0 && (qsrp = '');var xwvus = egbfcd['getFileInfo'](qsrp),
          pqtrso = egbfcd['getFileNativePath'](xwvus['md5']);zxvy$['loader']['clearRes'](xwvus['readyUrl']), egbfcd['fs']['unlink']({ 'filePath': pqtrso, 'success': function (lnom) {
          if (qsrp != '') egbfcd['onSaveFile'](qsrp, z$0_2);khgjfi != null && khgjfi['runWith']([0x0]);
        }, 'fail': function (ornsp) {} });
    }, egbfcd['onSaveFile'] = function (yv$zxw, ighlj) {
      var qspr = yv$zxw['split']('?')[0x0];egbfcd['filesListObj'][qspr] = { 'md5': ighlj, 'readyUrl': yv$zxw }, egbfcd['fs']['writeFile']({ 'filePath': egbfcd['fileNativeDir'] + '/' + egbfcd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](egbfcd['filesListObj']), 'success': function (fgcb) {
          console['log']('写入测试测试成功：', fgcb);
        }, 'fail': function (fighj) {
          console['log']('写入测试测试失败：', fighj);
        } });
    }, egbfcd['existDir'] = function (moqr, prsqot) {
      egbfcd['fs']['mkdir']({ 'dirPath': moqr, 'success': function (ihjlkm) {
          prsqot != null && prsqot['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qonsp) {
          if (qonsp['errMsg']['indexOf']('file already exists') != -0x1) egbfcd['readSync'](egbfcd['fileListName'], 'utf8', prsqot);else prsqot != null && prsqot['runWith']([0x1, qonsp]);
        } });
    }, egbfcd['readSync'] = function (uwtvrs, rutvqs, xyvuwz, aefdc) {
      rutvqs === void 0x0 && (rutvqs = 'ascill'), aefdc === void 0x0 && (aefdc = '');var ebfcd = egbfcd['getFileNativePath'](uwtvrs),
          xwvyz;try {
        xwvyz = egbfcd['fs']['readFileSync'](ebfcd), xyvuwz != null && xyvuwz['runWith']([0x0, { 'data': xwvyz }]);
      } catch (kfhjgi) {
        xyvuwz != null && xyvuwz['runWith']([0x1]);
      }
    }, egbfcd['readCache'] = function () {}, egbfcd['writeCache'] = function (y0x$z_) {
      var qpurts = readyUrl['split']('?')[0x0];egbfcd['filesListObj'][qpurts] = { 'md5': md5Name, 'readyUrl': readyUrl }, egbfcd['fs']['writeFile']({ 'filePath': egbfcd['fileNativeDir'] + '/' + egbfcd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](egbfcd['filesListObj']), 'success': function (y_xz$w) {}, 'fail': function (rptu) {} });
    }, egbfcd['setNativeFileDir'] = function (_1$320) {
      egbfcd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _1$320;
    }, egbfcd['filesListObj'] = {}, egbfcd['fileNativeDir'] = null, egbfcd['fileListName'] = 'layaairfiles.txt', egbfcd['ziyuFileData'] = {}, _$z2(egbfcd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), egbfcd;
  }(oqsrt),
      srqnop = function (rqupts) {
    function qpso() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qpso['__super']['call'](this), this['_sound'] = qpso['_createSound']();
    }pqnso(qpso, 'laya.wx.mini.MiniSound', rqupts);var xtvsuw = qpso['prototype'];return xtvsuw['load'] = function (lnoj) {
      var kjnilm = this;lnoj = y$0z_1['formatURL'](lnoj), this['url'] = lnoj;if (qpso['_audioCache'][lnoj]) {
        this['event']('complete');return;
      }function wyxzv() {
        if (qpso['_null'] != undefined) kjnilm['_sound']['onCanplay'](qpso['_null']), kjnilm['_sound']['onError'](qpso['_null']);else try {
          kjnilm['_sound']['onCanplay'](null), kjnilm['_sound']['onError'](null), qpso['_null'] = null;
        } catch (mlinj) {
          console['warn']('[wxmini] _clearSound:' + mlinj), kjnilm['_sound']['onCanplay'](mponrq), kjnilm['_sound']['onError'](mponrq), qpso['_null'] = mponrq;
        }
      }function hgjki() {
        wyxzv(), npokl['loaded'] = !![], npokl['event']('complete'), qpso['_audioCache'][npokl['url']] = npokl;
      }function xuty(tvuxw) {
        console['error']('errCode=' + tvuxw['errCode'] + '  errMsg=' + tvuxw['errMsg']), wyxzv(), npokl['event']('error');
      }function mponrq() {}this['_sound']['onCanplay'](hgjki), this['_sound']['onError'](xuty), this['_sound']['src'] = lnoj;var npokl = this;
    }, xtvsuw['play'] = function (dfcbg, rvustq) {
      dfcbg === void 0x0 && (dfcbg = 0x0), rvustq === void 0x0 && (rvustq = 0x0);var stuwr;if (this['url'] == chfedg['_tMusic']) {
        if (!qpso['_musicAudio']) qpso['_musicAudio'] = qpso['_createSound']();stuwr = qpso['_musicAudio'];
      } else stuwr = qpso['_createSound']();stuwr['src'] = this['url'];var fjhg = new qnporm(stuwr);return fjhg['url'] = this['url'], fjhg['loops'] = rvustq, fjhg['startTime'] = dfcbg, fjhg['play'](), chfedg['addChannel'](fjhg), fjhg;
    }, xtvsuw['dispose'] = function () {
      var $y01 = qpso['_audioCache'][this['url']];$y01 && ($y01['src'] = '', delete qpso['_audioCache'][this['url']]);
    }, torps(0x0, xtvsuw, 'duration', function () {
      return this['_sound']['duration'];
    }), qpso['_createSound'] = function () {
      return qpso['_id']++, becfdg['window']['wx']['createInnerAudioContext']();
    }, qpso['_musicAudio'] = null, qpso['_id'] = 0x0, qpso['_audioCache'] = {}, qpso['_null'] = undefined, qpso;
  }(oqsrt),
      qnporm = function (hgiefj) {
    function xvytwu(fijge) {
      this['_audio'] = null, this['_onEnd'] = null, xvytwu['__super']['call'](this), this['_audio'] = fijge, this['_onEnd'] = oqpmr['bind'](this['__onEnd'], this), fijge['onEnded'](this['_onEnd']);
    }pqnso(xvytwu, 'laya.wx.mini.MiniSoundChannel', hgiefj);var fijghe = xvytwu['prototype'];return fijghe['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zxvy$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fijghe['__onNull'] = function () {}, fijghe['play'] = function () {
      this['isStopped'] = ![], chfedg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fijghe['stop'] = function () {
      this['isStopped'] = !![], chfedg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xvytwu['_null'] != undefined) this['_audio']['onEnded'](xvytwu['_null']);else try {
        this['_audio']['onEnded'](null), xvytwu['_null'] = null;
      } catch (xywz$v) {
        console['warn']('[wxmini] stop:' + xywz$v), this['_audio']['onEnded'](oqpmr['bind'](this['__onNull'], this)), xvytwu['_null'] = oqpmr['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, fijghe['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fijghe['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], chfedg['addChannel'](this), this['_audio']['play']();
    }, torps(0x0, fijghe, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), torps(0x0, fijghe, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), torps(0x0, fijghe, 'volume', function () {
      return 0x1;
    }, function (gfhedi) {}), xvytwu['_null'] = undefined, xvytwu;
  }(fhedig);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hgkilj in Laya) {
    var ljkgh = Laya[hgkilj];ljkgh && ljkgh['__isclass'] && (exports[hgkilj] = ljkgh);
  }
});