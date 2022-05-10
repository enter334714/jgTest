var _ = wx.y$;
(function (window, document, xwzvu) {
  var vzwyu = xwzvu['un'],
      ijkhm = xwzvu['uns'],
      edbca = xwzvu['static'],
      kghijl = xwzvu['class'],
      srpo = xwzvu['getset'],
      mknlj = xwzvu['__newvec'],
      _zyw = laya['utils']['Browser'],
      fedacb = laya['events']['Event'],
      $_301 = laya['events']['EventDispatcher'],
      ejifgh = laya['resource']['HTMLImage'],
      _y$1z0 = laya['utils']['Handler'],
      jegifh = laya['display']['Input'],
      jghl = laya['net']['Loader'],
      wy$x_z = laya['maths']['Matrix'],
      qsrtvu = laya['renders']['Render'],
      bfadce = laya['utils']['RunDriver'],
      xvuw = laya['media']['Sound'],
      _z012 = laya['media']['SoundChannel'],
      kigjf = laya['media']['SoundManager'],
      pqot = laya['display']['Stage'],
      eijhgf = laya['net']['URL'],
      xswv = laya['utils']['Utils'],
      jonmk = function () {
    function rvwust() {}return kghijl(rvwust, 'laya.wx.mini.MiniAdpter'), rvwust['getJson'] = function (_0z$1) {
      return JSON['parse'](_0z$1);
    }, rvwust['init'] = function (urtpq, ebc) {
      urtpq === void 0x0 && (urtpq = ![]), ebc === void 0x0 && (ebc = ![]);if (rvwust['_inited']) return;rvwust['window'] = window;if (rvwust['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;rvwust['_inited'] = !![], rvwust['isZiYu'] = ebc, rvwust['isPosMsgYu'] = urtpq, rvwust['EnvConfig'] = {}, !rvwust['isZiYu'] && (kljmh['setNativeFileDir']('/layaairGame'), kljmh['existDir'](kljmh['fileNativeDir'], _y$1z0['create'](rvwust, rvwust['onMkdirCallBack']))), rvwust['window']['focus'] = function () {}, xwzvu['getUrlPath'] = function () {}, rvwust['window']['logtime'] = function (wytuxv) {}, rvwust['window']['alertTimeLog'] = function (pmnkl) {}, rvwust['window']['resetShareInfo'] = function () {}, rvwust['window']['CanvasRenderingContext2D'] = function () {}, rvwust['window']['CanvasRenderingContext2D']['prototype'] = rvwust['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rvwust['window']['document']['body']['appendChild'] = function () {}, rvwust['EnvConfig']['pixelRatioInt'] = 0x0, bfadce['getPixelRatio'] = rvwust['pixelRatio'], rvwust['_preCreateElement'] = _zyw['createElement'], _zyw['createElement'] = rvwust['createElement'], bfadce['createShaderCondition'] = rvwust['createShaderCondition'], xswv['parseXMLFromString'] = rvwust['parseXMLFromString'], jegifh['_createInputElement'] = wuxtv['_createInputElement'], rvwust['EnvConfig']['load'] = jghl['prototype']['load'], jghl['prototype']['load'] = mn['prototype']['load'], rvwust['isZiYu'] && urtpq && wx['onMessage'](function (ihkfjg) {
        ihkfjg['isLoad'] && (kljmh['ziyuFileData'][ihkfjg['url']] = ihkfjg['data']);
      });
    }, rvwust['onMkdirCallBack'] = function (hfgie, $z_wy) {
      if (!hfgie) kljmh['filesListObj'] = JSON['parse']($z_wy['data']);
    }, rvwust['pixelRatio'] = function () {
      if (!rvwust['EnvConfig']['pixelRatioInt']) try {
        var vsxtw = wx['getSystemInfoSync']();return rvwust['EnvConfig']['pixelRatioInt'] = vsxtw['pixelRatio'], vsxtw = vsxtw, vsxtw['pixelRatio'];
      } catch (svutx) {}return rvwust['EnvConfig']['pixelRatioInt'];
    }, rvwust['createElement'] = function (tvuqs) {
      if (tvuqs == 'canvas') {
        var wvxy$z;return rvwust['idx'] == 0x1 ? rvwust['isZiYu'] ? (wvxy$z = sharedCanvas, wvxy$z['style'] = {}) : wvxy$z = window['canvas'] : wvxy$z = window['wx']['createCanvas'](), rvwust['idx']++, wvxy$z;
      } else {
        if (tvuqs == 'textarea' || tvuqs == 'input') return rvwust['onCreateInput'](tvuqs);else {
          if (tvuqs == 'div') {
            var vtursq = rvwust['_preCreateElement'](tvuqs);return vtursq['contains'] = function (gjehi) {
              return null;
            }, vtursq['removeChild'] = function (cfgdb) {}, vtursq;
          } else return rvwust['_preCreateElement'](tvuqs);
        }
      }
    }, rvwust['onCreateInput'] = function ($_wyx) {
      var tropqs = rvwust['_preCreateElement']($_wyx);return tropqs['focus'] = wuxtv['wxinputFocus'], tropqs['blur'] = wuxtv['wxinputblur'], tropqs['style'] = {}, tropqs['value'] = 0x0, tropqs['parentElement'] = {}, tropqs['placeholder'] = {}, tropqs['type'] = {}, tropqs['setColor'] = function (bcefad) {}, tropqs['setType'] = function (jlihmk) {}, tropqs['setFontFace'] = function (faec) {}, tropqs['addEventListener'] = function (vsutx) {}, tropqs['contains'] = function (vrtsu) {
        return null;
      }, tropqs['removeChild'] = function (hcdefg) {}, tropqs;
    }, rvwust['createShaderCondition'] = function (utxv) {
      var cfdhge = this,
          rwvt = function () {
        var cdehgf = utxv;return cfdhge[utxv['replace']('this.', '')];
      };return rwvt;
    }, rvwust['EnvConfig'] = null, rvwust['window'] = null, rvwust['_preCreateElement'] = null, rvwust['_inited'] = ![], rvwust['wxRequest'] = null, rvwust['systemInfo'] = null, rvwust['version'] = '0.0.1', rvwust['isZiYu'] = ![], rvwust['isPosMsgYu'] = ![], rvwust['parseXMLFromString'] = function (kjlnm) {
      var sxuvt, qporm;kjlnm = kjlnm['replace'](/>\s+</g, '><');try {
        sxuvt = new window['Parser']['DOMParser']()['parseFromString'](kjlnm, 'text/xml');
      } catch (ilhjkm) {
        throw '需要引入xml解析库文件';
      }return sxuvt;
    }, rvwust['idx'] = 0x1, rvwust;
  }(),
      tuvsr = function () {
    function fegijh() {}kghijl(fegijh, 'laya.wx.mini.MiniImage');var nlmqpo = fegijh['prototype'];return nlmqpo['_loadImage'] = function (fkgji) {
      var mlpnq = this,
          nlmokj = ![];fkgji['indexOf']('layaNativeDir/') == -0x1 && (nlmokj = !![], fkgji = eijhgf['formatURL'](fkgji));if (!kljmh['getFileInfo'](fkgji)) {
        if (fkgji['indexOf']('http://') != -0x1 || fkgji['indexOf']('https://') != -0x1) kljmh['downImg'](fkgji, new _y$1z0(fegijh, fegijh['onDownImgCallBack'], [fkgji, mlpnq]), fkgji);else fegijh['onCreateImage'](fkgji, mlpnq, !![]);
      } else fegijh['onCreateImage'](fkgji, mlpnq, !nlmokj);
    }, fegijh['onDownImgCallBack'] = function (v$wz, sptqur, xtvyw) {
      if (!xtvyw) fegijh['onCreateImage'](v$wz, sptqur);else sptqur['onError'](null);
    }, fegijh['onCreateImage'] = function (gdfe, dcafe, qtus) {
      qtus === void 0x0 && (qtus = ![]);var rpson;if (!qtus) {
        var afdbec = kljmh['getFileInfo'](gdfe),
            dhefi = afdbec['md5'];rpson = kljmh['getFileNativePath'](dhefi);
      } else rpson = gdfe;if (dcafe['imgCache'] == null) dcafe['imgCache'] = {};var xtvs;function monlq() {
        xtvs['onload'] = null, xtvs['onerror'] = null, delete dcafe['imgCache'][gdfe];
      };var $_102 = function () {
        monlq(), dcafe['onLoaded'](xtvs);
      },
          caebf = function () {
        monlq(), dcafe['event']('error', 'Load image failed');
      };dcafe['_type'] == 'nativeimage' ? (xtvs = new _zyw['window']['Image'](), xtvs['crossOrigin'] = '', xtvs['onload'] = $_102, xtvs['onerror'] = caebf, xtvs['src'] = rpson, dcafe['imgCache'][gdfe] = xtvs) : new ejifgh['create'](rpson, { 'onload': $_102, 'onerror': caebf, 'onCreate': function (uxvyw) {
          xtvs = uxvyw, dcafe['imgCache'][gdfe] = uxvyw;
        } });
    }, fegijh;
  }(),
      wuxtv = function () {
    function trqvs() {}return kghijl(trqvs, 'laya.wx.mini.MiniInput'), trqvs['_createInputElement'] = function () {
      jegifh['_initInput'](jegifh['area'] = _zyw['createElement']('textarea')), jegifh['_initInput'](jegifh['input'] = _zyw['createElement']('input')), jegifh['inputContainer'] = _zyw['createElement']('div'), jegifh['inputContainer']['style']['position'] = 'absolute', jegifh['inputContainer']['style']['zIndex'] = 0x186a0, _zyw['container']['appendChild'](jegifh['inputContainer']), jegifh['inputContainer']['setPos'] = function (eabcfd, dehg) {
        jegifh['inputContainer']['style']['left'] = eabcfd + 'px', jegifh['inputContainer']['style']['top'] = dehg + 'px';
      }, xwzvu['stage']['on']('resize', null, trqvs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sqron) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kigjf['_soundClass'] = plkom, kigjf['_musicClass'] = plkom, window['_videoClass'] = mijkhl;
    }, trqvs['_onStageResize'] = function () {
      var fjei = xwzvu['stage']['_canvasTransform']['identity']();fjei['scale'](_zyw['width'] / qsrtvu['canvas']['width'] / bfadce['getPixelRatio'](), _zyw['height'] / qsrtvu['canvas']['height'] / bfadce['getPixelRatio']());
    }, trqvs['wxinputFocus'] = function (nolpkm) {
      var vtuxwy = jegifh['inputElement']['target'];if (vtuxwy && !vtuxwy['editable']) return;jonmk['window']['wx']['offKeyboardConfirm'](), jonmk['window']['wx']['offKeyboardInput'](), jonmk['window']['wx']['showKeyboard']({ 'defaultValue': vtuxwy['text'], 'maxLength': vtuxwy['maxChars'], 'multiple': vtuxwy['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (rqvsu) {}, 'fail': function (sqtrpu) {} }), jonmk['window']['wx']['onKeyboardConfirm'](function (fdeba) {
        var _z$xwy = fdeba ? fdeba['value'] : '';vtuxwy['text'] = _z$xwy, vtuxwy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jonmk['window']['wx']['onKeyboardInput'](function (zywuxv) {
        var sprnq = zywuxv ? zywuxv['value'] : '';if (!vtuxwy['multiline']) {
          if (sprnq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vtuxwy['text'] = sprnq, vtuxwy['event']('input');
      });
    }, trqvs['inputEnter'] = function () {
      jegifh['inputElement']['target']['focus'] = ![];
    }, trqvs['wxinputblur'] = function () {
      trqvs['hideKeyboard']();
    }, trqvs['hideKeyboard'] = function () {
      jonmk['window']['wx']['offKeyboardConfirm'](), jonmk['window']['wx']['offKeyboardInput'](), jonmk['window']['wx']['hideKeyboard']({ 'success': function (yz$_0) {
          console['log']('隐藏键盘');
        }, 'fail': function (afdec) {
          console['log']('隐藏键盘出错:' + (afdec ? afdec['errMsg'] : ''));
        } });
    }, trqvs;
  }(),
      mn = function () {
    function gkfi() {}kghijl(gkfi, 'laya.wx.mini.MiniLoader');var stpoqr = gkfi['prototype'];return stpoqr['load'] = function (uqvrts, _03$, vsuxt, aefb, $yz) {
      vsuxt === void 0x0 && (vsuxt = !![]), $yz === void 0x0 && ($yz = ![]);var ghdfce = this;ghdfce['_url'] = uqvrts;if (uqvrts['indexOf']('data:image') === 0x0) ghdfce['_type'] = _03$ = 'image';else ghdfce['_type'] = _03$ || (_03$ = ghdfce['getTypeFromUrl'](uqvrts));ghdfce['_cache'] = vsuxt, ghdfce['_data'] = null;var monpqr = 'ascii';if (uqvrts['indexOf']('.fnt') != -0x1) monpqr = 'utf8';else _03$ == 'arraybuffer' && (monpqr = '');;var rom = xswv['getFileExtension'](uqvrts);if (gkfi['_fileTypeArr']['indexOf'](rom) != -0x1) jonmk['EnvConfig']['load']['call'](this, uqvrts, _03$, vsuxt, aefb, $yz);else {
        if (!kljmh['getFileInfo'](uqvrts)) {
          if (uqvrts['indexOf']('layaNativeDir/') != -0x1) {
            if (jonmk['isZiYu']) {
              var psqtro = kljmh['ziyuFileData'][uqvrts];ghdfce['onLoaded'](psqtro);return;
            } else {
              cosnole['log']('read read'), kljmh['read'](uqvrts, monpqr, new _y$1z0(gkfi, gkfi['onReadNativeCallBack'], [monpqr, uqvrts, _03$, vsuxt, aefb, $yz, ghdfce]));return;
            }
          }if (eijhgf['rootPath'] == '') var onkpl = uqvrts;else onkpl = uqvrts['split'](eijhgf['rootPath'])[0x0];uqvrts['indexOf']('http://') != -0x1 || uqvrts['indexOf']('https://') != -0x1 ? jonmk['EnvConfig']['load']['call'](ghdfce, uqvrts, _03$, vsuxt, aefb, $yz) : kljmh['readFile'](onkpl, monpqr, new _y$1z0(gkfi, gkfi['onReadNativeCallBack'], [monpqr, uqvrts, _03$, vsuxt, aefb, $yz, ghdfce]), uqvrts);
        } else jonmk['EnvConfig']['load']['call'](this, uqvrts, _03$, vsuxt, aefb, $yz);
      }
    }, stpoqr['resMgrLoad'] = function (jklmi, vqsr, prqnm, gcfeb, iklgj, qprost, cdeg) {
      prqnm === void 0x0 && (prqnm = 0x0), gcfeb === void 0x0 && (gcfeb = ![]), iklgj === void 0x0 && (iklgj = ![]), qprost === void 0x0 && (qprost = 0x0), cdeg === void 0x0 && (cdeg = 0x3), jklmi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jklmi), jonmk['EnvConfig']['resMgrLoad'](jklmi, (wv$xyz, hkjig, nmpl) => {
        gkfi['prototype']['resMgrLoadCallBack'](wv$xyz, hkjig, nmpl, vqsr);
      }, prqnm, gcfeb, iklgj, qprost, cdeg);
    }, stpoqr['resMgrLoadCallBack'] = function (gjei, $0yz, wsuvt, gefhij) {
      console['log']('buff:::', gjei, wsuvt, kljmh['fileNativeDir'] + '///' + kljmh['fileListName']), gefhij(gjei, $0yz, wsuvt);
    }, stpoqr['clearRes'] = function (otqr, ligkjh) {
      ligkjh === void 0x0 && (ligkjh = ![]);var lkjh = this;lkjh['clearRes'](otqr, ligkjh);var mqpon = kljmh['getFileInfo'](otqr);if (mqpon && (otqr['indexOf']('http://') != -0x1 || otqr['indexOf']('https://') != -0x1)) {
        var prqut = mqpon['md5'],
            wytuv = kljmh['getFileNativePath'](prqut);kljmh['remove'](wytuv);
      }
    }, gkfi['onReadNativeCallBack'] = function (nplom, jkihlg, igefhj, onqs, ebadcf, qoprm, jfhki, cfabed, vtxu) {
      onqs === void 0x0 && (onqs = !![]), qoprm === void 0x0 && (qoprm = ![]), cfabed === void 0x0 && (cfabed = 0x0);if (!cfabed) {
        var _3$01;if (igefhj == 'json' || igefhj == 'atlas') _3$01 = jonmk['getJson'](vtxu['data']);else igefhj == 'xml' ? _3$01 = xswv['parseXMLFromString'](vtxu['data']) : _3$01 = vtxu['data'];jfhki['onLoaded'](_3$01), !jonmk['isZiYu'] && jonmk['isPosMsgYu'] && igefhj != 'arraybuffer' && wx['postMessage']({ 'url': jkihlg, 'data': _3$01, 'isLoad': !![] });
      } else cfabed == 0x1 && jonmk['EnvConfig']['load']['call'](jfhki, jkihlg, igefhj, onqs, ebadcf, qoprm);
    }, edbca(gkfi, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), gkfi;
  }(),
      kljmh = function (fcedhg) {
    function qpsu() {
      qpsu['__super']['call'](this);;
    }return kghijl(qpsu, 'laya.wx.mini.MiniFileMgr', fcedhg), qpsu['isLoadFile'] = function (rsoqpn) {
      return qpsu['_fileTypeArr']['indexOf'](rsoqpn) != -0x1 ? !![] : ![];
    }, qpsu['getFileInfo'] = function (xz_$0) {
      var ilmkhj = xz_$0['split']('?')[0x0],
          uqrv = qpsu['filesListObj'][ilmkhj];if (uqrv == null) return null;else return uqrv;return null;
    }, qpsu['onFileUpdate'] = function (iljkh, mopnlq) {
      var $vy = iljkh['split']('/'),
          wtyu = $vy[$vy['length'] - 0x1],
          prnq = qpsu['getFileInfo'](mopnlq);if (prnq == null) qpsu['onSaveFile'](mopnlq, wtyu);else {
        if (prnq['readyUrl'] != mopnlq) qpsu['remove'](wtyu, mopnlq);
      }
    }, qpsu['exits'] = function (kolnmp, _102$3) {
      var vxw$y = qpsu['getFileNativePath'](kolnmp);qpsu['fs']['getFileInfo']({ 'filePath': vxw$y, 'success': function (ecdbfa) {
          _102$3 != null && _102$3['runWith']([0x0, ecdbfa]);
        }, 'fail': function (mjlkon) {
          _102$3 != null && _102$3['runWith']([0x1, mjlkon]);
        } });
    }, qpsu['read'] = function (qvsrut, njikl, ghifde, qrpsut) {
      njikl === void 0x0 && (njikl = 'ascill'), qrpsut === void 0x0 && (qrpsut = '');var _1402;qrpsut != '' ? _1402 = qpsu['getFileNativePath'](qvsrut) : _1402 = qvsrut, qpsu['fs']['readFile']({ 'filePath': _1402, 'encoding': njikl, 'success': function (rtq) {
          ghifde != null && ghifde['runWith']([0x0, rtq]);
        }, 'fail': function (kgjhl) {
          if (kgjhl && qrpsut != '') qpsu['down'](qrpsut, njikl, ghifde, qrpsut);else ghifde != null && ghifde['runWith']([0x1]);
        } });
    }, qpsu['readNativeFile'] = function (jmolk, jhefg) {
      qpsu['fs']['readFile']({ 'filePath': jmolk, 'encoding': '', 'success': function (nomkp) {
          jhefg != null && jhefg['runWith']([0x0]);
        }, 'fail': function (jmlihk) {
          jhefg != null && jhefg['runWith']([0x1]);
        } });
    }, qpsu['down'] = function (npsrqo, mjh, gjikhl, wsvtux) {
      mjh === void 0x0 && (mjh = 'ascill'), wsvtux === void 0x0 && (wsvtux = '');var jmnlko = qpsu['getFileNativePath'](wsvtux),
          kinml = qpsu['wxdown']({ 'url': npsrqo, 'filePath': jmnlko, 'success': function ($3_012) {
          if ($3_012['statusCode'] === 0xc8) qpsu['readFile']($3_012['filePath'], mjh, gjikhl, wsvtux);
        }, 'fail': function (jnmikl) {
          gjikhl != null && gjikhl['runWith']([0x1, jnmikl]);
        } });kinml['onProgressUpdate'](function (ifkjhg) {
        gjikhl != null && gjikhl['runWith']([0x2, ifkjhg['progress']]);
      });
    }, qpsu['readFile'] = function (prtqos, mkpoln, rpon, wvtuy) {
      mkpoln === void 0x0 && (mkpoln = 'ascill'), wvtuy === void 0x0 && (wvtuy = ''), qpsu['fs']['readFile']({ 'filePath': prtqos, 'encoding': mkpoln, 'success': function (xsuvw) {
          if (prtqos['indexOf']('http://') != -0x1 || prtqos['indexOf']('https://') != -0x1) qpsu['onFileUpdate'](prtqos, wvtuy);rpon != null && rpon['runWith']([0x0, xsuvw]);
        }, 'fail': function (qruvst) {
          if (qruvst) rpon != null && rpon['runWith']([0x1, qruvst]);
        } });
    }, qpsu['downImg'] = function (yuxtw, nlqpom, hlkij) {
      hlkij === void 0x0 && (hlkij = '');var tqpsro = qpsu['wxdown']({ 'url': yuxtw, 'success': function (vstwux) {
          vstwux['statusCode'] === 0xc8 && qpsu['copyFile'](vstwux['tempFilePath'], hlkij, nlqpom);
        }, 'fail': function (dgcfe) {
          nlqpom != null && nlqpom['runWith']([0x1, dgcfe]);
        } });
    }, qpsu['copyFile'] = function (kmjih, sqnpr, z_xwy) {
      var psqto = kmjih['split']('/'),
          oqrpsn = psqto[psqto['length'] - 0x1],
          uwsvr = sqnpr['split']('?')[0x0],
          mjikh = qpsu['getFileInfo'](sqnpr),
          fide = qpsu['getFileNativePath'](oqrpsn);qpsu['fs']['copyFile']({ 'srcPath': kmjih, 'destPath': fide, 'success': function (pnoqml) {
          if (!mjikh) qpsu['onSaveFile'](sqnpr, oqrpsn), z_xwy != null && z_xwy['runWith']([0x0]);else {
            if (mjikh['readyUrl'] != sqnpr) qpsu['remove'](oqrpsn, sqnpr, z_xwy);
          }
        }, 'fail': function (uswrtv) {
          z_xwy != null && z_xwy['runWith']([0x1, uswrtv]);
        } });
    }, qpsu['getFileNativePath'] = function (iegd) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + iegd;
    }, qpsu['remove'] = function (srtqpu, gbced, jhilkm) {
      gbced === void 0x0 && (gbced = '');var stuwv = qpsu['getFileInfo'](gbced),
          srwvut = qpsu['getFileNativePath'](stuwv['md5']);xwzvu['loader']['clearRes'](stuwv['readyUrl']), qpsu['fs']['unlink']({ 'filePath': srwvut, 'success': function (eihfgj) {
          if (gbced != '') qpsu['onSaveFile'](gbced, srtqpu);jhilkm != null && jhilkm['runWith']([0x0]);
        }, 'fail': function (plomk) {} });
    }, qpsu['onSaveFile'] = function (poqts, yw_zx) {
      var zyx$0 = poqts['split']('?')[0x0];qpsu['filesListObj'][zyx$0] = { 'md5': yw_zx, 'readyUrl': poqts }, qpsu['fs']['writeFile']({ 'filePath': qpsu['fileNativeDir'] + '/' + qpsu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qpsu['filesListObj']), 'success': function (suprtq) {
          console['log']('写入测试测试成功：', suprtq);
        }, 'fail': function (ebfdc) {
          console['log']('写入测试测试失败：', ebfdc);
        } });
    }, qpsu['existDir'] = function (tvxw, abfcde) {
      qpsu['fs']['mkdir']({ 'dirPath': tvxw, 'success': function (aed) {
          abfcde != null && abfcde['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (twyux) {
          if (twyux['errMsg']['indexOf']('file already exists') != -0x1) qpsu['readSync'](qpsu['fileListName'], 'utf8', abfcde);else abfcde != null && abfcde['runWith']([0x1, twyux]);
        } });
    }, qpsu['readSync'] = function (ecgfdb, gbfdce, yxuzw, lkhgj) {
      gbfdce === void 0x0 && (gbfdce = 'ascill'), lkhgj === void 0x0 && (lkhgj = '');var qormn = qpsu['getFileNativePath'](ecgfdb),
          zwyu;try {
        zwyu = qpsu['fs']['readFileSync'](qormn), yxuzw != null && yxuzw['runWith']([0x0, { 'data': zwyu }]);
      } catch (gkjh) {
        yxuzw != null && yxuzw['runWith']([0x1]);
      }
    }, qpsu['readCache'] = function () {}, qpsu['writeCache'] = function ($0_21z) {
      var sqpurt = readyUrl['split']('?')[0x0];qpsu['filesListObj'][sqpurt] = { 'md5': md5Name, 'readyUrl': readyUrl }, qpsu['fs']['writeFile']({ 'filePath': qpsu['fileNativeDir'] + '/' + qpsu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qpsu['filesListObj']), 'success': function (omlqnp) {}, 'fail': function (rtsquv) {} });
    }, qpsu['setNativeFileDir'] = function (bgfdec) {
      qpsu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bgfdec;
    }, qpsu['filesListObj'] = {}, qpsu['fileNativeDir'] = null, qpsu['fileListName'] = 'layaairfiles.txt', qpsu['ziyuFileData'] = {}, edbca(qpsu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qpsu;
  }($_301),
      plkom = function (klnomj) {
    function jkihg() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], jkihg['__super']['call'](this), this['_sound'] = jkihg['_createSound'](), this['_chanell'] = new xzy$vw(this['_sound']);
    }kghijl(jkihg, 'laya.wx.mini.MiniSound', klnomj);var gikhjl = jkihg['prototype'];return gikhjl['load'] = function (uxtv) {
      var jkhlm = this;uxtv = eijhgf['formatURL'](uxtv), this['url'] = uxtv;if (jkihg['_audioCache'][uxtv]) {
        this['event']('complete');return;
      }function vwrs() {
        if (jkihg['_null'] != undefined) jkhlm['_sound']['onCanplay'](jkihg['_null']), jkhlm['_sound']['onError'](jkihg['_null']);else try {
          jkhlm['_sound']['onCanplay'](null), jkhlm['_sound']['onError'](null), jkihg['_null'] = null;
        } catch (y1$_0) {
          console['warn']('[wxmini] _clearSound:' + y1$_0), jkhlm['_sound']['onCanplay'](otqpsr), jkhlm['_sound']['onError'](otqpsr), jkihg['_null'] = otqpsr;
        }
      }function kifhjg() {
        dcaebf['loaded'] = !![], dcaebf['event']('complete'), jkihg['_audioCache'][dcaebf['url']] = dcaebf;
      }function $_0yz1(dafe) {
        console['error']('errCode=' + dafe['errCode'] + '  errMsg=' + dafe['errMsg']), dcaebf['event']('error');
      }function otqpsr() {}this['_sound']['onCanplay'](kifhjg), this['_sound']['onError']($_0yz1), this['_sound']['src'] = uxtv;var dcaebf = this;
    }, gikhjl['play'] = function (onqrp, rspqot) {
      onqrp === void 0x0 && (onqrp = 0x0), rspqot === void 0x0 && (rspqot = 0x0);var fbd, rsopt;if (this['url'] == kigjf['_tMusic']) {
        if (!jkihg['_musicAudio']) jkihg['_musicAudio'] = this['_sound'];fbd = jkihg['_musicAudio'], rsopt = this['_chanell'];
      } else fbd = this['_sound'], rsopt = this['_chanell'];return fbd['src'] = this['url'], fbd['startTime'] = 0x0, rsopt['isStopped'] && (rsopt['url'] = this['url'], rsopt['loops'] = rspqot, rsopt['startTime'] = onqrp, rsopt['play'](), kigjf['addChannel'](rsopt)), rsopt;
    }, gikhjl['dispose'] = function () {
      var qnrpos = jkihg['_audioCache'][this['url']];qnrpos && (qnrpos['src'] = '', delete jkihg['_audioCache'][this['url']]);
    }, srpo(0x0, gikhjl, 'duration', function () {
      return this['_sound']['duration'];
    }), jkihg['_createSound'] = function () {
      jkihg['_id']++;var dfhg = jonmk['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return dfhg;
    }, jkihg['_musicAudio'] = null, jkihg['_id'] = 0x0, jkihg['_audioCache'] = {}, jkihg['_null'] = undefined, jkihg;
  }($_301),
      xzy$vw = function (_$21z0) {
    function nkmlp(edbfg) {
      this['_audio'] = null, this['_onEnd'] = null, nkmlp['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = edbfg, this['_onEnd'] = xswv['bind'](this['__onEnd'], this), edbfg['onEnded'](this['_onEnd']);
    }kghijl(nkmlp, 'laya.wx.mini.MiniSoundChannel', _$21z0);var twuvs = nkmlp['prototype'];return twuvs['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xwzvu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, twuvs['__onNull'] = function () {}, twuvs['play'] = function () {
      this['isStopped'] = ![], kigjf['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, twuvs['stop'] = function () {
      this['isStopped'] = !![], kigjf['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, twuvs['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, twuvs['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kigjf['addChannel'](this), this['_audio']['play']();
    }, srpo(0x0, twuvs, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), srpo(0x0, twuvs, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), srpo(0x0, twuvs, 'volume', function () {
      return 0x1;
    }, function (nrsqop) {}), nkmlp['_null'] = undefined, nkmlp;
  }(_z012),
      mijkhl = function () {
    function rosnpq() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = jonmk['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }kghijl(rosnpq, 'laya.wx.mini.MiniVideo');var gkfih = rosnpq['prototype'];return gkfih['on'] = function (uxsvtw, fgdehi, lmjonk) {
      if (uxsvtw == 'loadedmetadata') this['onPlayFunc'] = lmjonk['bind'](fgdehi), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else uxsvtw == 'ended' && (this['onEndedFunC'] = lmjonk['bind'](fgdehi), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, gkfih['onTimeUpdateFunc'] = function (jgihe) {
      this['position'] = jgihe['position'], this['_duration'] = jgihe['duration'];
    }, gkfih['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, gkfih['onended'] = function (uqprst, bcegfd) {
      this['onEndedFunC'] = bcegfd['bind'](uqprst), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, gkfih['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, gkfih['off'] = function (yxz_w, plomkn, hkgfij) {
      if (yxz_w == 'loadedmetadata') this['onPlayFunc'] = hkgfij['bind'](plomkn), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else yxz_w == 'ended' && (this['onEndedFunC'] = hkgfij['bind'](plomkn), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, gkfih['load'] = function (x_wz$y) {
      if (!this['videoElement']) return;this['videoElement']['src'] = x_wz$y;
    }, gkfih['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, gkfih['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, gkfih['size'] = function (osrpqt, mqnplo) {
      if (!this['videoElement']) return;this['videoElement']['width'] = osrpqt, this['videoElement']['height'] = mqnplo;
    }, gkfih['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, gkfih['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, srpo(0x0, gkfih, 'duration', function () {
      return this['_duration'];
    }), srpo(0x0, gkfih, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (ighd) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = ighd;
    }), srpo(0x0, gkfih, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), srpo(0x0, gkfih, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), srpo(0x0, gkfih, 'ended', function () {
      return this['videoend'];
    }), srpo(0x0, gkfih, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (utqprs) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = utqprs;
    }), srpo(0x0, gkfih, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (ebcad) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = ebcad;
    }), srpo(0x0, gkfih, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (gkhif) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = gkhif;
    }), srpo(0x0, gkfih, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), srpo(0x0, gkfih, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (urspq) {
      if (!this['videoElement']) return;this['videoElement']['x'] = urspq;
    }), srpo(0x0, gkfih, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (gjifhk) {
      if (!this['videoElement']) return;this['videoElement']['y'] = gjifhk;
    }), srpo(0x0, gkfih, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), srpo(0x0, gkfih, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (ros) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ros;
    }), srpo(0x0, gkfih, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (egfhdi) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = egfhdi;
    }), srpo(0x0, gkfih, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (psuqtr) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = psuqtr;
    }), rosnpq;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var rqtuv in Laya) {
    var kijm = Laya[rqtuv];kijm && kijm['__isclass'] && (exports[rqtuv] = kijm);
  }
});