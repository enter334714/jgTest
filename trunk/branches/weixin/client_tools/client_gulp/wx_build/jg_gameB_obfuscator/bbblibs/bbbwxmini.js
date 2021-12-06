var _ = wx.y$;
(function (window, document, qlpmn) {
  var _1z0y$ = qlpmn['un'],
      strpo = qlpmn['uns'],
      qsvtr = qlpmn['static'],
      onkmlp = qlpmn['class'],
      ruvqt = qlpmn['getset'],
      ejgih = qlpmn['__newvec'],
      ihegfd = laya['utils']['Browser'],
      pnolmk = laya['events']['Event'],
      edgcbf = laya['events']['EventDispatcher'],
      orpnsq = laya['resource']['HTMLImage'],
      mkoln = laya['utils']['Handler'],
      cfgbde = laya['display']['Input'],
      sornpq = laya['net']['Loader'],
      vursw = laya['maths']['Matrix'],
      knpm = laya['renders']['Render'],
      mnqpo = laya['utils']['RunDriver'],
      ebcgf = laya['media']['Sound'],
      zx = laya['media']['SoundChannel'],
      gcfh = laya['media']['SoundManager'],
      tyxw = laya['display']['Stage'],
      gcfb = laya['net']['URL'],
      himj = laya['utils']['Utils'],
      dfbae = function () {
    function $1yz0_() {}return onkmlp($1yz0_, 'laya.wx.mini.MiniAdpter'), $1yz0_['getJson'] = function (jglh) {
      return JSON['parse'](jglh);
    }, $1yz0_['init'] = function ($_xyzw, lmkpno) {
      $_xyzw === void 0x0 && ($_xyzw = ![]), lmkpno === void 0x0 && (lmkpno = ![]);if ($1yz0_['_inited']) return;$1yz0_['window'] = window;if ($1yz0_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;$1yz0_['_inited'] = !![], $1yz0_['isZiYu'] = lmkpno, $1yz0_['isPosMsgYu'] = $_xyzw, $1yz0_['EnvConfig'] = {}, !$1yz0_['isZiYu'] && (fbead['setNativeFileDir']('/layaairGame'), fbead['existDir'](fbead['fileNativeDir'], mkoln['create']($1yz0_, $1yz0_['onMkdirCallBack']))), $1yz0_['window']['focus'] = function () {}, qlpmn['getUrlPath'] = function () {}, $1yz0_['window']['logtime'] = function (xuzwy) {}, $1yz0_['window']['alertTimeLog'] = function (qosrtp) {}, $1yz0_['window']['resetShareInfo'] = function () {}, $1yz0_['window']['CanvasRenderingContext2D'] = function () {}, $1yz0_['window']['CanvasRenderingContext2D']['prototype'] = $1yz0_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $1yz0_['window']['document']['body']['appendChild'] = function () {}, $1yz0_['EnvConfig']['pixelRatioInt'] = 0x0, mnqpo['getPixelRatio'] = $1yz0_['pixelRatio'], $1yz0_['_preCreateElement'] = ihegfd['createElement'], ihegfd['createElement'] = $1yz0_['createElement'], mnqpo['createShaderCondition'] = $1yz0_['createShaderCondition'], himj['parseXMLFromString'] = $1yz0_['parseXMLFromString'], cfgbde['_createInputElement'] = y0z1_['_createInputElement'], $1yz0_['EnvConfig']['load'] = sornpq['prototype']['load'], sornpq['prototype']['load'] = vstx['prototype']['load'], $1yz0_['isZiYu'] && $_xyzw && wx['onMessage'](function (xtwsu) {
        xtwsu['isLoad'] && (fbead['ziyuFileData'][xtwsu['url']] = xtwsu['data']);
      });
    }, $1yz0_['onMkdirCallBack'] = function (prqst, rtpos) {
      if (!prqst) fbead['filesListObj'] = JSON['parse'](rtpos['data']);
    }, $1yz0_['pixelRatio'] = function () {
      if (!$1yz0_['EnvConfig']['pixelRatioInt']) try {
        var tqru = wx['getSystemInfoSync']();return $1yz0_['EnvConfig']['pixelRatioInt'] = tqru['pixelRatio'], tqru = tqru, tqru['pixelRatio'];
      } catch (z0$1_) {}return $1yz0_['EnvConfig']['pixelRatioInt'];
    }, $1yz0_['createElement'] = function (oqpts) {
      if (oqpts == 'canvas') {
        var fehid;return $1yz0_['idx'] == 0x1 ? $1yz0_['isZiYu'] ? (fehid = sharedCanvas, fehid['style'] = {}) : fehid = window['canvas'] : fehid = window['wx']['createCanvas'](), $1yz0_['idx']++, fehid;
      } else {
        if (oqpts == 'textarea' || oqpts == 'input') return $1yz0_['onCreateInput'](oqpts);else {
          if (oqpts == 'div') {
            var rusqtv = $1yz0_['_preCreateElement'](oqpts);return rusqtv['contains'] = function (svrqut) {
              return null;
            }, rusqtv['removeChild'] = function (fgce) {}, rusqtv;
          } else return $1yz0_['_preCreateElement'](oqpts);
        }
      }
    }, $1yz0_['onCreateInput'] = function (xuvwts) {
      var ce = $1yz0_['_preCreateElement'](xuvwts);return ce['focus'] = y0z1_['wxinputFocus'], ce['blur'] = y0z1_['wxinputblur'], ce['style'] = {}, ce['value'] = 0x0, ce['parentElement'] = {}, ce['placeholder'] = {}, ce['type'] = {}, ce['setColor'] = function (y_10$) {}, ce['setType'] = function (cgb) {}, ce['setFontFace'] = function (qsrpn) {}, ce['addEventListener'] = function (w_$xy) {}, ce['contains'] = function (vxuzyw) {
        return null;
      }, ce['removeChild'] = function (fgjhei) {}, ce;
    }, $1yz0_['createShaderCondition'] = function (wzxy) {
      var psqrtu = this,
          qortp = function () {
        var mql = wzxy;return psqrtu[wzxy['replace']('this.', '')];
      };return qortp;
    }, $1yz0_['EnvConfig'] = null, $1yz0_['window'] = null, $1yz0_['_preCreateElement'] = null, $1yz0_['_inited'] = ![], $1yz0_['wxRequest'] = null, $1yz0_['systemInfo'] = null, $1yz0_['version'] = '0.0.1', $1yz0_['isZiYu'] = ![], $1yz0_['isPosMsgYu'] = ![], $1yz0_['parseXMLFromString'] = function (utyw) {
      var lihkm, x_0yz$;utyw = utyw['replace'](/>\s+</g, '><');try {
        lihkm = new window['Parser']['DOMParser']()['parseFromString'](utyw, 'text/xml');
      } catch (xywz$v) {
        throw '需要引入xml解析库文件';
      }return lihkm;
    }, $1yz0_['idx'] = 0x1, $1yz0_;
  }(),
      mpkol = function () {
    function fcghde() {}onkmlp(fcghde, 'laya.wx.mini.MiniImage');var lnpqmo = fcghde['prototype'];return lnpqmo['_loadImage'] = function (ljghi) {
      var rvw = this,
          rtuqs = ![];ljghi['indexOf']('layaNativeDir/') == -0x1 && (rtuqs = !![], ljghi = gcfb['formatURL'](ljghi));if (!fbead['getFileInfo'](ljghi)) {
        if (ljghi['indexOf']('http://') != -0x1 || ljghi['indexOf']('https://') != -0x1) fbead['downImg'](ljghi, new mkoln(fcghde, fcghde['onDownImgCallBack'], [ljghi, rvw]), ljghi);else fcghde['onCreateImage'](ljghi, rvw, !![]);
      } else fcghde['onCreateImage'](ljghi, rvw, !rtuqs);
    }, fcghde['onDownImgCallBack'] = function (opnmq, qtsro, fjheg) {
      if (!fjheg) fcghde['onCreateImage'](opnmq, qtsro);else qtsro['onError'](null);
    }, fcghde['onCreateImage'] = function (_$y10, _z21, uytxv) {
      uytxv === void 0x0 && (uytxv = ![]);var egfcbd;if (!uytxv) {
        var onpqlm = fbead['getFileInfo'](_$y10),
            xz$y0 = onpqlm['md5'];egfcbd = fbead['getFileNativePath'](xz$y0);
      } else egfcbd = _$y10;if (_z21['imgCache'] == null) _z21['imgCache'] = {};var adfbce;function swtuv() {
        adfbce['onload'] = null, adfbce['onerror'] = null, delete _z21['imgCache'][_$y10];
      };var pmlqon = function () {
        swtuv(), _z21['onLoaded'](adfbce);
      },
          x$z_yw = function () {
        swtuv(), _z21['event']('error', 'Load image failed');
      };_z21['_type'] == 'nativeimage' ? (adfbce = new ihegfd['window']['Image'](), adfbce['crossOrigin'] = '', adfbce['onload'] = pmlqon, adfbce['onerror'] = x$z_yw, adfbce['src'] = egfcbd, _z21['imgCache'][_$y10] = adfbce) : new orpnsq['create'](egfcbd, { 'onload': pmlqon, 'onerror': x$z_yw, 'onCreate': function (ihgef) {
          adfbce = ihgef, _z21['imgCache'][_$y10] = ihgef;
        } });
    }, fcghde;
  }(),
      y0z1_ = function () {
    function nlkmp() {}return onkmlp(nlkmp, 'laya.wx.mini.MiniInput'), nlkmp['_createInputElement'] = function () {
      cfgbde['_initInput'](cfgbde['area'] = ihegfd['createElement']('textarea')), cfgbde['_initInput'](cfgbde['input'] = ihegfd['createElement']('input')), cfgbde['inputContainer'] = ihegfd['createElement']('div'), cfgbde['inputContainer']['style']['position'] = 'absolute', cfgbde['inputContainer']['style']['zIndex'] = 0x186a0, ihegfd['container']['appendChild'](cfgbde['inputContainer']), cfgbde['inputContainer']['setPos'] = function (_132$0, nklim) {
        cfgbde['inputContainer']['style']['left'] = _132$0 + 'px', cfgbde['inputContainer']['style']['top'] = nklim + 'px';
      }, qlpmn['stage']['on']('resize', null, nlkmp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oqmnl) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gcfh['_soundClass'] = uqstv, gcfh['_musicClass'] = uqstv;
    }, nlkmp['_onStageResize'] = function () {
      var efij = qlpmn['stage']['_canvasTransform']['identity']();efij['scale'](ihegfd['width'] / knpm['canvas']['width'] / mnqpo['getPixelRatio'](), ihegfd['height'] / knpm['canvas']['height'] / mnqpo['getPixelRatio']());
    }, nlkmp['wxinputFocus'] = function (v$yzw) {
      var cfbeg = cfgbde['inputElement']['target'];if (cfbeg && !cfbeg['editable']) return;dfbae['window']['wx']['offKeyboardConfirm'](), dfbae['window']['wx']['offKeyboardInput'](), dfbae['window']['wx']['showKeyboard']({ 'defaultValue': cfbeg['text'], 'maxLength': cfbeg['maxChars'], 'multiple': cfbeg['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zwyxv$) {}, 'fail': function (xyz_0$) {} }), dfbae['window']['wx']['onKeyboardConfirm'](function (fdaeb) {
        var hjefig = fdaeb ? fdaeb['value'] : '';cfbeg['text'] = hjefig, cfbeg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), dfbae['window']['wx']['onKeyboardInput'](function (hilk) {
        var tvx = hilk ? hilk['value'] : '';if (!cfbeg['multiline']) {
          if (tvx['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }cfbeg['text'] = tvx, cfbeg['event']('input');
      });
    }, nlkmp['inputEnter'] = function () {
      cfgbde['inputElement']['target']['focus'] = ![];
    }, nlkmp['wxinputblur'] = function () {
      nlkmp['hideKeyboard']();
    }, nlkmp['hideKeyboard'] = function () {
      dfbae['window']['wx']['offKeyboardConfirm'](), dfbae['window']['wx']['offKeyboardInput'](), dfbae['window']['wx']['hideKeyboard']({ 'success': function (nlomjk) {
          console['log']('隐藏键盘');
        }, 'fail': function (eghfdi) {
          console['log']('隐藏键盘出错:' + (eghfdi ? eghfdi['errMsg'] : ''));
        } });
    }, nlkmp;
  }(),
      vstx = function () {
    function jfikhg() {}onkmlp(jfikhg, 'laya.wx.mini.MiniLoader');var wy$_xz = jfikhg['prototype'];return wy$_xz['load'] = function (dbecfa, mlopn, kgji, pqlnom, _z1$02) {
      kgji === void 0x0 && (kgji = !![]), _z1$02 === void 0x0 && (_z1$02 = ![]);var hdgfc = this;hdgfc['_url'] = dbecfa;if (dbecfa['indexOf']('data:image') === 0x0) hdgfc['_type'] = mlopn = 'image';else hdgfc['_type'] = mlopn || (mlopn = hdgfc['getTypeFromUrl'](dbecfa));hdgfc['_cache'] = kgji, hdgfc['_data'] = null;var nqmpr = 'ascii';if (dbecfa['indexOf']('.fnt') != -0x1) nqmpr = 'utf8';else mlopn == 'arraybuffer' && (nqmpr = '');;var dgechf = himj['getFileExtension'](dbecfa);if (jfikhg['_fileTypeArr']['indexOf'](dgechf) != -0x1) dfbae['EnvConfig']['load']['call'](this, dbecfa, mlopn, kgji, pqlnom, _z1$02);else {
        if (!fbead['getFileInfo'](dbecfa)) {
          if (dbecfa['indexOf']('layaNativeDir/') != -0x1) {
            if (dfbae['isZiYu']) {
              var hklig = fbead['ziyuFileData'][dbecfa];hdgfc['onLoaded'](hklig);return;
            } else {
              cosnole['log']('read read'), fbead['read'](dbecfa, nqmpr, new mkoln(jfikhg, jfikhg['onReadNativeCallBack'], [nqmpr, dbecfa, mlopn, kgji, pqlnom, _z1$02, hdgfc]));return;
            }
          }if (gcfb['rootPath'] == '') var topqrs = dbecfa;else topqrs = dbecfa['split'](gcfb['rootPath'])[0x0];dbecfa['indexOf']('http://') != -0x1 || dbecfa['indexOf']('https://') != -0x1 ? dfbae['EnvConfig']['load']['call'](hdgfc, dbecfa, mlopn, kgji, pqlnom, _z1$02) : fbead['readFile'](topqrs, nqmpr, new mkoln(jfikhg, jfikhg['onReadNativeCallBack'], [nqmpr, dbecfa, mlopn, kgji, pqlnom, _z1$02, hdgfc]), dbecfa);
        } else dfbae['EnvConfig']['load']['call'](this, dbecfa, mlopn, kgji, pqlnom, _z1$02);
      }
    }, wy$_xz['resMgrLoad'] = function (edgfhc, fhegd, rsp, wyvux, gchfde, gdhecf, lomnk) {
      rsp === void 0x0 && (rsp = 0x0), wyvux === void 0x0 && (wyvux = ![]), gchfde === void 0x0 && (gchfde = ![]), gdhecf === void 0x0 && (gdhecf = 0x0), lomnk === void 0x0 && (lomnk = 0x3), edgfhc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', edgfhc), dfbae['EnvConfig']['resMgrLoad'](edgfhc, (ruqvts, _1$30, xuvst) => {
        jfikhg['prototype']['resMgrLoadCallBack'](ruqvts, _1$30, xuvst, fhegd);
      }, rsp, wyvux, gchfde, gdhecf, lomnk);
    }, wy$_xz['resMgrLoadCallBack'] = function (olpk, wyz_$, tvuyxw, efdhig) {
      console['log']('buff:::', olpk, tvuyxw, fbead['fileNativeDir'] + '///' + fbead['fileListName']), efdhig(olpk, wyz_$, tvuyxw);
    }, wy$_xz['clearRes'] = function (qospt, struwv) {
      struwv === void 0x0 && (struwv = ![]);var fdgbce = this;fdgbce['clearRes'](qospt, struwv);var mikhl = fbead['getFileInfo'](qospt);if (mikhl && (qospt['indexOf']('http://') != -0x1 || qospt['indexOf']('https://') != -0x1)) {
        var ijmhkl = mikhl['md5'],
            $xywz = fbead['getFileNativePath'](ijmhkl);fbead['remove']($xywz);
      }
    }, jfikhg['onReadNativeCallBack'] = function (cedfh, ijhfe, lhkjm, zwuy, pqnoml, txyuv, vxsutw, morq, kijh) {
      zwuy === void 0x0 && (zwuy = !![]), txyuv === void 0x0 && (txyuv = ![]), morq === void 0x0 && (morq = 0x0);if (!morq) {
        var vxwyuz;if (lhkjm == 'json' || lhkjm == 'atlas') vxwyuz = dfbae['getJson'](kijh['data']);else lhkjm == 'xml' ? vxwyuz = himj['parseXMLFromString'](kijh['data']) : vxwyuz = kijh['data'];vxsutw['onLoaded'](vxwyuz), !dfbae['isZiYu'] && dfbae['isPosMsgYu'] && lhkjm != 'arraybuffer' && wx['postMessage']({ 'url': ijhfe, 'data': vxwyuz, 'isLoad': !![] });
      } else morq == 0x1 && dfbae['EnvConfig']['load']['call'](vxsutw, ijhfe, lhkjm, zwuy, pqnoml, txyuv);
    }, qsvtr(jfikhg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jfikhg;
  }(),
      fbead = function (_1y0$z) {
    function _zy1$0() {
      _zy1$0['__super']['call'](this);;
    }return onkmlp(_zy1$0, 'laya.wx.mini.MiniFileMgr', _1y0$z), _zy1$0['isLoadFile'] = function (x$ywv) {
      return _zy1$0['_fileTypeArr']['indexOf'](x$ywv) != -0x1 ? !![] : ![];
    }, _zy1$0['getFileInfo'] = function (xtswv) {
      var ptsurq = xtswv['split']('?')[0x0],
          ighkjf = _zy1$0['filesListObj'][ptsurq];if (ighkjf == null) return null;else return ighkjf;return null;
    }, _zy1$0['onFileUpdate'] = function (qrsuvt, uswvr) {
      var vxzwyu = qrsuvt['split']('/'),
          kgjhil = vxzwyu[vxzwyu['length'] - 0x1],
          $z_1y = _zy1$0['getFileInfo'](uswvr);if ($z_1y == null) _zy1$0['onSaveFile'](uswvr, kgjhil);else {
        if ($z_1y['readyUrl'] != uswvr) _zy1$0['remove'](kgjhil, uswvr);
      }
    }, _zy1$0['exits'] = function (srtw, fgjkh) {
      var _2$10 = _zy1$0['getFileNativePath'](srtw);_zy1$0['fs']['getFileInfo']({ 'filePath': _2$10, 'success': function (noqsrp) {
          fgjkh != null && fgjkh['runWith']([0x0, noqsrp]);
        }, 'fail': function (dceghf) {
          fgjkh != null && fgjkh['runWith']([0x1, dceghf]);
        } });
    }, _zy1$0['read'] = function (hfdgie, hikgf, edgfch, wzvyx) {
      hikgf === void 0x0 && (hikgf = 'ascill'), wzvyx === void 0x0 && (wzvyx = '');var dehgcf;wzvyx != '' ? dehgcf = _zy1$0['getFileNativePath'](hfdgie) : dehgcf = hfdgie, _zy1$0['fs']['readFile']({ 'filePath': dehgcf, 'encoding': hikgf, 'success': function (cdfhg) {
          edgfch != null && edgfch['runWith']([0x0, cdfhg]);
        }, 'fail': function (kgjl) {
          if (kgjl && wzvyx != '') _zy1$0['down'](wzvyx, hikgf, edgfch, wzvyx);else edgfch != null && edgfch['runWith']([0x1]);
        } });
    }, _zy1$0['readNativeFile'] = function (uwvxyt, nolpqm) {
      _zy1$0['fs']['readFile']({ 'filePath': uwvxyt, 'encoding': '', 'success': function (_$z02) {
          nolpqm != null && nolpqm['runWith']([0x0]);
        }, 'fail': function (qtvru) {
          nolpqm != null && nolpqm['runWith']([0x1]);
        } });
    }, _zy1$0['down'] = function (fhikgj, fgcdeh, diheg, mlhjki) {
      fgcdeh === void 0x0 && (fgcdeh = 'ascill'), mlhjki === void 0x0 && (mlhjki = '');var ilhkjg = _zy1$0['getFileNativePath'](mlhjki),
          wursv = _zy1$0['wxdown']({ 'url': fhikgj, 'filePath': ilhkjg, 'success': function (mploqn) {
          if (mploqn['statusCode'] === 0xc8) _zy1$0['readFile'](mploqn['filePath'], fgcdeh, diheg, mlhjki);
        }, 'fail': function (fgjikh) {
          diheg != null && diheg['runWith']([0x1, fgjikh]);
        } });wursv['onProgressUpdate'](function (imjhl) {
        diheg != null && diheg['runWith']([0x2, imjhl['progress']]);
      });
    }, _zy1$0['readFile'] = function ($vyx, oqm, gcefdh, $yxw_) {
      oqm === void 0x0 && (oqm = 'ascill'), $yxw_ === void 0x0 && ($yxw_ = ''), _zy1$0['fs']['readFile']({ 'filePath': $vyx, 'encoding': oqm, 'success': function (cfbegd) {
          if ($vyx['indexOf']('http://') != -0x1 || $vyx['indexOf']('https://') != -0x1) _zy1$0['onFileUpdate']($vyx, $yxw_);gcefdh != null && gcefdh['runWith']([0x0, cfbegd]);
        }, 'fail': function (vxwut) {
          if (vxwut) gcefdh != null && gcefdh['runWith']([0x1, vxwut]);
        } });
    }, _zy1$0['downImg'] = function (edcgf, strqpo, bdefa) {
      bdefa === void 0x0 && (bdefa = '');var vxuwzy = _zy1$0['wxdown']({ 'url': edcgf, 'success': function (qosr) {
          qosr['statusCode'] === 0xc8 && _zy1$0['copyFile'](qosr['tempFilePath'], bdefa, strqpo);
        }, 'fail': function (hieg) {
          strqpo != null && strqpo['runWith']([0x1, hieg]);
        } });
    }, _zy1$0['copyFile'] = function (pstor, xwtuy, osnrqp) {
      var decgb = pstor['split']('/'),
          yvwz = decgb[decgb['length'] - 0x1],
          $yxvzw = xwtuy['split']('?')[0x0],
          qstpu = _zy1$0['getFileInfo'](xwtuy),
          mlij = _zy1$0['getFileNativePath'](yvwz);_zy1$0['fs']['copyFile']({ 'srcPath': pstor, 'destPath': mlij, 'success': function (cefbd) {
          if (!qstpu) _zy1$0['onSaveFile'](xwtuy, yvwz), osnrqp != null && osnrqp['runWith']([0x0]);else {
            if (qstpu['readyUrl'] != xwtuy) _zy1$0['remove'](yvwz, xwtuy, osnrqp);
          }
        }, 'fail': function (utw) {
          osnrqp != null && osnrqp['runWith']([0x1, utw]);
        } });
    }, _zy1$0['getFileNativePath'] = function (y$1z0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y$1z0;
    }, _zy1$0['remove'] = function (xwtv, fchged, uvrsqt) {
      fchged === void 0x0 && (fchged = '');var xyz_$ = _zy1$0['getFileInfo'](fchged),
          ijhmk = _zy1$0['getFileNativePath'](xyz_$['md5']);qlpmn['loader']['clearRes'](xyz_$['readyUrl']), _zy1$0['fs']['unlink']({ 'filePath': ijhmk, 'success': function (nojkm) {
          if (fchged != '') _zy1$0['onSaveFile'](fchged, xwtv);uvrsqt != null && uvrsqt['runWith']([0x0]);
        }, 'fail': function (surt) {} });
    }, _zy1$0['onSaveFile'] = function (gidhef, kigfh) {
      var gjhlk = gidhef['split']('?')[0x0];_zy1$0['filesListObj'][gjhlk] = { 'md5': kigfh, 'readyUrl': gidhef }, _zy1$0['fs']['writeFile']({ 'filePath': _zy1$0['fileNativeDir'] + '/' + _zy1$0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_zy1$0['filesListObj']), 'success': function (sutxvw) {
          console['log']('写入测试测试成功：', sutxvw);
        }, 'fail': function (jkmlhi) {
          console['log']('写入测试测试失败：', jkmlhi);
        } });
    }, _zy1$0['existDir'] = function (lkinjm, difeg) {
      _zy1$0['fs']['mkdir']({ 'dirPath': lkinjm, 'success': function (faedb) {
          difeg != null && difeg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (feb) {
          if (feb['errMsg']['indexOf']('file already exists') != -0x1) _zy1$0['readSync'](_zy1$0['fileListName'], 'utf8', difeg);else difeg != null && difeg['runWith']([0x1, feb]);
        } });
    }, _zy1$0['readSync'] = function (svruqt, onmql, ilhjkg, qlnpo) {
      onmql === void 0x0 && (onmql = 'ascill'), qlnpo === void 0x0 && (qlnpo = '');var xwutyv = _zy1$0['getFileNativePath'](svruqt),
          npomr;try {
        npomr = _zy1$0['fs']['readFileSync'](xwutyv), ilhjkg != null && ilhjkg['runWith']([0x0, { 'data': npomr }]);
      } catch (cfeba) {
        ilhjkg != null && ilhjkg['runWith']([0x1]);
      }
    }, _zy1$0['readCache'] = function () {}, _zy1$0['writeCache'] = function ($x_yw) {
      var kjigfh = readyUrl['split']('?')[0x0];_zy1$0['filesListObj'][kjigfh] = { 'md5': md5Name, 'readyUrl': readyUrl }, _zy1$0['fs']['writeFile']({ 'filePath': _zy1$0['fileNativeDir'] + '/' + _zy1$0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_zy1$0['filesListObj']), 'success': function (igkjlh) {}, 'fail': function (ijlk) {} });
    }, _zy1$0['setNativeFileDir'] = function (yz$_0) {
      _zy1$0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yz$_0;
    }, _zy1$0['filesListObj'] = {}, _zy1$0['fileNativeDir'] = null, _zy1$0['fileListName'] = 'layaairfiles.txt', _zy1$0['ziyuFileData'] = {}, qsvtr(_zy1$0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _zy1$0;
  }(edgcbf),
      uqstv = function (hgefc) {
    function jfkhi() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jfkhi['__super']['call'](this), this['_sound'] = jfkhi['_createSound']();
    }onkmlp(jfkhi, 'laya.wx.mini.MiniSound', hgefc);var zyw$x = jfkhi['prototype'];return zyw$x['load'] = function (jolmn) {
      var iljkhg = this;jolmn = gcfb['formatURL'](jolmn), this['url'] = jolmn;if (jfkhi['_audioCache'][jolmn]) {
        this['event']('complete');return;
      }function gjhfei() {
        if (jfkhi['_null'] != undefined) iljkhg['_sound']['onCanplay'](jfkhi['_null']), iljkhg['_sound']['onError'](jfkhi['_null']);else try {
          iljkhg['_sound']['onCanplay'](null), iljkhg['_sound']['onError'](null), jfkhi['_null'] = null;
        } catch (geidh) {
          console['warn']('[wxmini] _clearSound:' + geidh), iljkhg['_sound']['onCanplay'](qpom), iljkhg['_sound']['onError'](qpom), jfkhi['_null'] = qpom;
        }
      }function ghikl() {
        gjhfei(), prn['loaded'] = !![], prn['event']('complete'), jfkhi['_audioCache'][prn['url']] = prn;
      }function jinmlk(mjkhi) {
        console['error']('errCode=' + mjkhi['errCode'] + '  errMsg=' + mjkhi['errMsg']), gjhfei(), prn['event']('error');
      }function qpom() {}this['_sound']['onCanplay'](ghikl), this['_sound']['onError'](jinmlk), this['_sound']['src'] = jolmn;var prn = this;
    }, zyw$x['play'] = function (hgiefj, _xz) {
      hgiefj === void 0x0 && (hgiefj = 0x0), _xz === void 0x0 && (_xz = 0x0);var tusqp;if (this['url'] == gcfh['_tMusic']) {
        if (!jfkhi['_musicAudio']) jfkhi['_musicAudio'] = jfkhi['_createSound']();tusqp = jfkhi['_musicAudio'];
      } else tusqp = jfkhi['_createSound']();tusqp['src'] = this['url'];var trquvs = new srqnop(tusqp);return trquvs['url'] = this['url'], trquvs['loops'] = _xz, trquvs['startTime'] = hgiefj, trquvs['play'](), gcfh['addChannel'](trquvs), trquvs;
    }, zyw$x['dispose'] = function () {
      var rvqstu = jfkhi['_audioCache'][this['url']];rvqstu && (rvqstu['src'] = '', delete jfkhi['_audioCache'][this['url']]);
    }, ruvqt(0x0, zyw$x, 'duration', function () {
      return this['_sound']['duration'];
    }), jfkhi['_createSound'] = function () {
      return jfkhi['_id']++, dfbae['window']['wx']['createInnerAudioContext']();
    }, jfkhi['_musicAudio'] = null, jfkhi['_id'] = 0x0, jfkhi['_audioCache'] = {}, jfkhi['_null'] = undefined, jfkhi;
  }(edgcbf),
      srqnop = function (ljgkih) {
    function $y0z1(jhkilm) {
      this['_audio'] = null, this['_onEnd'] = null, $y0z1['__super']['call'](this), this['_audio'] = jhkilm, this['_onEnd'] = himj['bind'](this['__onEnd'], this), jhkilm['onEnded'](this['_onEnd']);
    }onkmlp($y0z1, 'laya.wx.mini.MiniSoundChannel', ljgkih);var rsuwt = $y0z1['prototype'];return rsuwt['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qlpmn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rsuwt['__onNull'] = function () {}, rsuwt['play'] = function () {
      this['isStopped'] = ![], gcfh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, rsuwt['stop'] = function () {
      this['isStopped'] = !![], gcfh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($y0z1['_null'] != undefined) this['_audio']['onEnded']($y0z1['_null']);else try {
        this['_audio']['onEnded'](null), $y0z1['_null'] = null;
      } catch (mrnpq) {
        console['warn']('[wxmini] stop:' + mrnpq), this['_audio']['onEnded'](himj['bind'](this['__onNull'], this)), $y0z1['_null'] = himj['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, rsuwt['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, rsuwt['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gcfh['addChannel'](this), this['_audio']['play']();
    }, ruvqt(0x0, rsuwt, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ruvqt(0x0, rsuwt, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ruvqt(0x0, rsuwt, 'volume', function () {
      return 0x1;
    }, function (trquv) {}), $y0z1['_null'] = undefined, $y0z1;
  }(zx);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var promn in Laya) {
    var yutx = Laya[promn];yutx && yutx['__isclass'] && (exports[promn] = yutx);
  }
});