var _ = wx.y$;
(function (window, document, qmno) {
  var jfih = qmno['un'],
      jkfgih = qmno['uns'],
      xwtuy = qmno['static'],
      dcfab = qmno['class'],
      opqnr = qmno['getset'],
      omrpqn = qmno['__newvec'],
      imlk = laya['utils']['Browser'],
      njolkm = laya['events']['Event'],
      snpqro = laya['events']['EventDispatcher'],
      lnikmj = laya['resource']['HTMLImage'],
      mqprno = laya['utils']['Handler'],
      pmnlko = laya['display']['Input'],
      ihkglj = laya['net']['Loader'],
      $xzyvw = laya['maths']['Matrix'],
      dgfbce = laya['renders']['Render'],
      _xyzw = laya['utils']['RunDriver'],
      trqo = laya['media']['Sound'],
      egfjh = laya['media']['SoundChannel'],
      psqut = laya['media']['SoundManager'],
      hkfgj = laya['display']['Stage'],
      qrmopn = laya['net']['URL'],
      jighkl = laya['utils']['Utils'],
      kmlnij = function () {
    function aebcd() {}return dcfab(aebcd, 'laya.wx.mini.MiniAdpter'), aebcd['getJson'] = function (prosn) {
      return JSON['parse'](prosn);
    }, aebcd['init'] = function (ecfhgd, z_$x0y) {
      ecfhgd === void 0x0 && (ecfhgd = ![]), z_$x0y === void 0x0 && (z_$x0y = ![]);if (aebcd['_inited']) return;aebcd['window'] = window;if (aebcd['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;aebcd['_inited'] = !![], aebcd['isZiYu'] = z_$x0y, aebcd['isPosMsgYu'] = ecfhgd, aebcd['EnvConfig'] = {}, !aebcd['isZiYu'] && (gefbcd['setNativeFileDir']('/layaairGame'), gefbcd['existDir'](gefbcd['fileNativeDir'], mqprno['create'](aebcd, aebcd['onMkdirCallBack']))), aebcd['window']['focus'] = function () {}, qmno['getUrlPath'] = function () {}, aebcd['window']['logtime'] = function (w$xz) {}, aebcd['window']['alertTimeLog'] = function (nrosp) {}, aebcd['window']['resetShareInfo'] = function () {}, aebcd['window']['CanvasRenderingContext2D'] = function () {}, aebcd['window']['CanvasRenderingContext2D']['prototype'] = aebcd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], aebcd['window']['document']['body']['appendChild'] = function () {}, aebcd['EnvConfig']['pixelRatioInt'] = 0x0, _xyzw['getPixelRatio'] = aebcd['pixelRatio'], aebcd['_preCreateElement'] = imlk['createElement'], imlk['createElement'] = aebcd['createElement'], _xyzw['createShaderCondition'] = aebcd['createShaderCondition'], jighkl['parseXMLFromString'] = aebcd['parseXMLFromString'], pmnlko['_createInputElement'] = ebfgcd['_createInputElement'], aebcd['EnvConfig']['load'] = ihkglj['prototype']['load'], ihkglj['prototype']['load'] = snqpr['prototype']['load'], aebcd['isZiYu'] && ecfhgd && wx['onMessage'](function (vwuxyt) {
        vwuxyt['isLoad'] && (gefbcd['ziyuFileData'][vwuxyt['url']] = vwuxyt['data']);
      });
    }, aebcd['onMkdirCallBack'] = function (fgecd, higedf) {
      if (!fgecd) gefbcd['filesListObj'] = JSON['parse'](higedf['data']);
    }, aebcd['pixelRatio'] = function () {
      if (!aebcd['EnvConfig']['pixelRatioInt']) try {
        var efhgj = wx['getSystemInfoSync']();return aebcd['EnvConfig']['pixelRatioInt'] = efhgj['pixelRatio'], efhgj = efhgj, efhgj['pixelRatio'];
      } catch (ghi) {}return aebcd['EnvConfig']['pixelRatioInt'];
    }, aebcd['createElement'] = function (w_$zxy) {
      if (w_$zxy == 'canvas') {
        var fdegbc;return aebcd['idx'] == 0x1 ? aebcd['isZiYu'] ? (fdegbc = sharedCanvas, fdegbc['style'] = {}) : fdegbc = window['canvas'] : fdegbc = window['wx']['createCanvas'](), aebcd['idx']++, fdegbc;
      } else {
        if (w_$zxy == 'textarea' || w_$zxy == 'input') return aebcd['onCreateInput'](w_$zxy);else {
          if (w_$zxy == 'div') {
            var hdfgc = aebcd['_preCreateElement'](w_$zxy);return hdfgc['contains'] = function (mln) {
              return null;
            }, hdfgc['removeChild'] = function (nkiml) {}, hdfgc;
          } else return aebcd['_preCreateElement'](w_$zxy);
        }
      }
    }, aebcd['onCreateInput'] = function (kjnmi) {
      var hfij = aebcd['_preCreateElement'](kjnmi);return hfij['focus'] = ebfgcd['wxinputFocus'], hfij['blur'] = ebfgcd['wxinputblur'], hfij['style'] = {}, hfij['value'] = 0x0, hfij['parentElement'] = {}, hfij['placeholder'] = {}, hfij['type'] = {}, hfij['setColor'] = function (efgh) {}, hfij['setType'] = function (nokml) {}, hfij['setFontFace'] = function (otrqp) {}, hfij['addEventListener'] = function (gkjih) {}, hfij['contains'] = function (iefgj) {
        return null;
      }, hfij['removeChild'] = function (zxwuyv) {}, hfij;
    }, aebcd['createShaderCondition'] = function (tuvwrs) {
      var imlhjk = this,
          lmnjk = function () {
        var jhkgl = tuvwrs;return imlhjk[tuvwrs['replace']('this.', '')];
      };return lmnjk;
    }, aebcd['EnvConfig'] = null, aebcd['window'] = null, aebcd['_preCreateElement'] = null, aebcd['_inited'] = ![], aebcd['wxRequest'] = null, aebcd['systemInfo'] = null, aebcd['version'] = '0.0.1', aebcd['isZiYu'] = ![], aebcd['isPosMsgYu'] = ![], aebcd['parseXMLFromString'] = function (xuywvt) {
      var kp, jnmli;xuywvt = xuywvt['replace'](/>\s+</g, '><');try {
        kp = new window['Parser']['DOMParser']()['parseFromString'](xuywvt, 'text/xml');
      } catch (rnsq) {
        throw '需要引入xml解析库文件';
      }return kp;
    }, aebcd['idx'] = 0x1, aebcd;
  }(),
      ijkhgf = function () {
    function becfda() {}dcfab(becfda, 'laya.wx.mini.MiniImage');var khgjf = becfda['prototype'];return khgjf['_loadImage'] = function (ilkmjh) {
      var _z20 = this,
          ljkimh = ![];ilkmjh['indexOf']('layaNativeDir/') == -0x1 && (ljkimh = !![], ilkmjh = qrmopn['formatURL'](ilkmjh));if (!gefbcd['getFileInfo'](ilkmjh)) {
        if (ilkmjh['indexOf']('http://') != -0x1 || ilkmjh['indexOf']('https://') != -0x1) gefbcd['downImg'](ilkmjh, new mqprno(becfda, becfda['onDownImgCallBack'], [ilkmjh, _z20]), ilkmjh);else becfda['onCreateImage'](ilkmjh, _z20, !![]);
      } else becfda['onCreateImage'](ilkmjh, _z20, !ljkimh);
    }, becfda['onDownImgCallBack'] = function (pr, rqmnp, opqrsn) {
      if (!opqrsn) becfda['onCreateImage'](pr, rqmnp);else rqmnp['onError'](null);
    }, becfda['onCreateImage'] = function (xuvt, jfkhi, ghfij) {
      ghfij === void 0x0 && (ghfij = ![]);var xzy$_;if (!ghfij) {
        var liknmj = gefbcd['getFileInfo'](xuvt),
            qonspr = liknmj['md5'];xzy$_ = gefbcd['getFileNativePath'](qonspr);
      } else xzy$_ = xuvt;if (jfkhi['imgCache'] == null) jfkhi['imgCache'] = {};var uyzwv;function kmhlij() {
        uyzwv['onload'] = null, uyzwv['onerror'] = null, delete jfkhi['imgCache'][xuvt];
      };var giljk = function () {
        kmhlij(), jfkhi['onLoaded'](uyzwv);
      },
          ropnqm = function () {
        kmhlij(), jfkhi['event']('error', 'Load image failed');
      };jfkhi['_type'] == 'nativeimage' ? (uyzwv = new imlk['window']['Image'](), uyzwv['crossOrigin'] = '', uyzwv['onload'] = giljk, uyzwv['onerror'] = ropnqm, uyzwv['src'] = xzy$_, jfkhi['imgCache'][xuvt] = uyzwv) : new lnikmj['create'](xzy$_, { 'onload': giljk, 'onerror': ropnqm, 'onCreate': function (mlpno) {
          uyzwv = mlpno, jfkhi['imgCache'][xuvt] = mlpno;
        } });
    }, becfda;
  }(),
      ebfgcd = function () {
    function urvts() {}return dcfab(urvts, 'laya.wx.mini.MiniInput'), urvts['_createInputElement'] = function () {
      pmnlko['_initInput'](pmnlko['area'] = imlk['createElement']('textarea')), pmnlko['_initInput'](pmnlko['input'] = imlk['createElement']('input')), pmnlko['inputContainer'] = imlk['createElement']('div'), pmnlko['inputContainer']['style']['position'] = 'absolute', pmnlko['inputContainer']['style']['zIndex'] = 0x186a0, imlk['container']['appendChild'](pmnlko['inputContainer']), pmnlko['inputContainer']['setPos'] = function (wtvxyu, jlkinm) {
        pmnlko['inputContainer']['style']['left'] = wtvxyu + 'px', pmnlko['inputContainer']['style']['top'] = jlkinm + 'px';
      }, qmno['stage']['on']('resize', null, urvts['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nros) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), psqut['_soundClass'] = wvuxyz, psqut['_musicClass'] = wvuxyz;
    }, urvts['_onStageResize'] = function () {
      var mklon = qmno['stage']['_canvasTransform']['identity']();mklon['scale'](imlk['width'] / dgfbce['canvas']['width'] / _xyzw['getPixelRatio'](), imlk['height'] / dgfbce['canvas']['height'] / _xyzw['getPixelRatio']());
    }, urvts['wxinputFocus'] = function (hefjig) {
      var zywuxv = pmnlko['inputElement']['target'];if (zywuxv && !zywuxv['editable']) return;kmlnij['window']['wx']['offKeyboardConfirm'](), kmlnij['window']['wx']['offKeyboardInput'](), kmlnij['window']['wx']['showKeyboard']({ 'defaultValue': zywuxv['text'], 'maxLength': zywuxv['maxChars'], 'multiple': zywuxv['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mqopnl) {}, 'fail': function (dhfegc) {} }), kmlnij['window']['wx']['onKeyboardConfirm'](function (ehfd) {
        var ospqrn = ehfd ? ehfd['value'] : '';zywuxv['text'] = ospqrn, zywuxv['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kmlnij['window']['wx']['onKeyboardInput'](function (qustr) {
        var psnorq = qustr ? qustr['value'] : '';if (!zywuxv['multiline']) {
          if (psnorq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zywuxv['text'] = psnorq, zywuxv['event']('input');
      });
    }, urvts['inputEnter'] = function () {
      pmnlko['inputElement']['target']['focus'] = ![];
    }, urvts['wxinputblur'] = function () {
      urvts['hideKeyboard']();
    }, urvts['hideKeyboard'] = function () {
      kmlnij['window']['wx']['offKeyboardConfirm'](), kmlnij['window']['wx']['offKeyboardInput'](), kmlnij['window']['wx']['hideKeyboard']({ 'success': function (lkhg) {
          console['log']('隐藏键盘');
        }, 'fail': function (eighf) {
          console['log']('隐藏键盘出错:' + (eighf ? eighf['errMsg'] : ''));
        } });
    }, urvts;
  }(),
      snqpr = function () {
    function eacdb() {}dcfab(eacdb, 'laya.wx.mini.MiniLoader');var tvuwrs = eacdb['prototype'];return tvuwrs['load'] = function (uxs, pnromq, y01$z, oqrmn, onsqp) {
      y01$z === void 0x0 && (y01$z = !![]), onsqp === void 0x0 && (onsqp = ![]);var xwy$v = this;xwy$v['_url'] = uxs;if (uxs['indexOf']('data:image') === 0x0) xwy$v['_type'] = pnromq = 'image';else xwy$v['_type'] = pnromq || (pnromq = xwy$v['getTypeFromUrl'](uxs));xwy$v['_cache'] = y01$z, xwy$v['_data'] = null;var qprtsu = 'ascii';if (uxs['indexOf']('.fnt') != -0x1) qprtsu = 'utf8';else pnromq == 'arraybuffer' && (qprtsu = '');;var bfdec = jighkl['getFileExtension'](uxs);if (eacdb['_fileTypeArr']['indexOf'](bfdec) != -0x1) kmlnij['EnvConfig']['load']['call'](this, uxs, pnromq, y01$z, oqrmn, onsqp);else {
        if (!gefbcd['getFileInfo'](uxs)) {
          if (uxs['indexOf']('layaNativeDir/') != -0x1) {
            if (kmlnij['isZiYu']) {
              var srpqut = gefbcd['ziyuFileData'][uxs];xwy$v['onLoaded'](srpqut);return;
            } else {
              cosnole['log']('read read'), gefbcd['read'](uxs, qprtsu, new mqprno(eacdb, eacdb['onReadNativeCallBack'], [qprtsu, uxs, pnromq, y01$z, oqrmn, onsqp, xwy$v]));return;
            }
          }if (qrmopn['rootPath'] == '') var ponkm = uxs;else ponkm = uxs['split'](qrmopn['rootPath'])[0x0];uxs['indexOf']('http://') != -0x1 || uxs['indexOf']('https://') != -0x1 ? kmlnij['EnvConfig']['load']['call'](xwy$v, uxs, pnromq, y01$z, oqrmn, onsqp) : gefbcd['readFile'](ponkm, qprtsu, new mqprno(eacdb, eacdb['onReadNativeCallBack'], [qprtsu, uxs, pnromq, y01$z, oqrmn, onsqp, xwy$v]), uxs);
        } else kmlnij['EnvConfig']['load']['call'](this, uxs, pnromq, y01$z, oqrmn, onsqp);
      }
    }, tvuwrs['resMgrLoad'] = function (utrvqs, sqnpor, ehdgfc, hfdig, yz$_xw, xyzw_$, mnolkp) {
      ehdgfc === void 0x0 && (ehdgfc = 0x0), hfdig === void 0x0 && (hfdig = ![]), yz$_xw === void 0x0 && (yz$_xw = ![]), xyzw_$ === void 0x0 && (xyzw_$ = 0x0), mnolkp === void 0x0 && (mnolkp = 0x3), utrvqs['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', utrvqs), kmlnij['EnvConfig']['resMgrLoad'](utrvqs, (gbcdfe, rptuq, z_1y) => {
        eacdb['prototype']['resMgrLoadCallBack'](gbcdfe, rptuq, z_1y, sqnpor);
      }, ehdgfc, hfdig, yz$_xw, xyzw_$, mnolkp);
    }, tvuwrs['resMgrLoadCallBack'] = function (stvuxw, wyz$x, xuwyvt, vqus) {
      console['log']('buff:::', stvuxw, xuwyvt, gefbcd['fileNativeDir'] + '///' + gefbcd['fileListName']), vqus(stvuxw, wyz$x, xuwyvt);
    }, tvuwrs['clearRes'] = function (edhgf, jmlink) {
      jmlink === void 0x0 && (jmlink = ![]);var fhdgie = this;fhdgie['clearRes'](edhgf, jmlink);var onlq = gefbcd['getFileInfo'](edhgf);if (onlq && (edhgf['indexOf']('http://') != -0x1 || edhgf['indexOf']('https://') != -0x1)) {
        var egid = onlq['md5'],
            miljk = gefbcd['getFileNativePath'](egid);gefbcd['remove'](miljk);
      }
    }, eacdb['onReadNativeCallBack'] = function (ihjfk, cba, stvxu, ljkg, z$_01y, abdfce, _0$21, qtpro, onrpsq) {
      ljkg === void 0x0 && (ljkg = !![]), abdfce === void 0x0 && (abdfce = ![]), qtpro === void 0x0 && (qtpro = 0x0);if (!qtpro) {
        var ijlmnk;if (stvxu == 'json' || stvxu == 'atlas') ijlmnk = kmlnij['getJson'](onrpsq['data']);else stvxu == 'xml' ? ijlmnk = jighkl['parseXMLFromString'](onrpsq['data']) : ijlmnk = onrpsq['data'];_0$21['onLoaded'](ijlmnk), !kmlnij['isZiYu'] && kmlnij['isPosMsgYu'] && stvxu != 'arraybuffer' && wx['postMessage']({ 'url': cba, 'data': ijlmnk, 'isLoad': !![] });
      } else qtpro == 0x1 && kmlnij['EnvConfig']['load']['call'](_0$21, cba, stvxu, ljkg, z$_01y, abdfce);
    }, xwtuy(eacdb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), eacdb;
  }(),
      gefbcd = function (jkgl) {
    function $_yxzw() {
      $_yxzw['__super']['call'](this);;
    }return dcfab($_yxzw, 'laya.wx.mini.MiniFileMgr', jkgl), $_yxzw['isLoadFile'] = function (dfcgeh) {
      return $_yxzw['_fileTypeArr']['indexOf'](dfcgeh) != -0x1 ? !![] : ![];
    }, $_yxzw['getFileInfo'] = function (begcd) {
      var inml = begcd['split']('?')[0x0],
          cabdfe = $_yxzw['filesListObj'][inml];if (cabdfe == null) return null;else return cabdfe;return null;
    }, $_yxzw['onFileUpdate'] = function (lmpqno, nkoplm) {
      var deghcf = lmpqno['split']('/'),
          ljmkno = deghcf[deghcf['length'] - 0x1],
          uy = $_yxzw['getFileInfo'](nkoplm);if (uy == null) $_yxzw['onSaveFile'](nkoplm, ljmkno);else {
        if (uy['readyUrl'] != nkoplm) $_yxzw['remove'](ljmkno, nkoplm);
      }
    }, $_yxzw['exits'] = function ($y_0x, vrut) {
      var sxwtv = $_yxzw['getFileNativePath']($y_0x);$_yxzw['fs']['getFileInfo']({ 'filePath': sxwtv, 'success': function (uvsr) {
          vrut != null && vrut['runWith']([0x0, uvsr]);
        }, 'fail': function (nmlqpo) {
          vrut != null && vrut['runWith']([0x1, nmlqpo]);
        } });
    }, $_yxzw['read'] = function (ghedi, rtw, egdh, qprnos) {
      rtw === void 0x0 && (rtw = 'ascill'), qprnos === void 0x0 && (qprnos = '');var mljko;qprnos != '' ? mljko = $_yxzw['getFileNativePath'](ghedi) : mljko = ghedi, $_yxzw['fs']['readFile']({ 'filePath': mljko, 'encoding': rtw, 'success': function (snrqp) {
          egdh != null && egdh['runWith']([0x0, snrqp]);
        }, 'fail': function (vywut) {
          if (vywut && qprnos != '') $_yxzw['down'](qprnos, rtw, egdh, qprnos);else egdh != null && egdh['runWith']([0x1]);
        } });
    }, $_yxzw['readNativeFile'] = function (mnqop, y_x0) {
      $_yxzw['fs']['readFile']({ 'filePath': mnqop, 'encoding': '', 'success': function (cegdb) {
          y_x0 != null && y_x0['runWith']([0x0]);
        }, 'fail': function (qr) {
          y_x0 != null && y_x0['runWith']([0x1]);
        } });
    }, $_yxzw['down'] = function ($021_z, ijhgfe, knml, rtqus) {
      ijhgfe === void 0x0 && (ijhgfe = 'ascill'), rtqus === void 0x0 && (rtqus = '');var y0$_z1 = $_yxzw['getFileNativePath'](rtqus),
          x0zy$_ = $_yxzw['wxdown']({ 'url': $021_z, 'filePath': y0$_z1, 'success': function (vxyutw) {
          if (vxyutw['statusCode'] === 0xc8) $_yxzw['readFile'](vxyutw['filePath'], ijhgfe, knml, rtqus);
        }, 'fail': function (tqpu) {
          knml != null && knml['runWith']([0x1, tqpu]);
        } });x0zy$_['onProgressUpdate'](function (kfhijg) {
        knml != null && knml['runWith']([0x2, kfhijg['progress']]);
      });
    }, $_yxzw['readFile'] = function (x$yw, qmnpl, v$yxzw, $zxw) {
      qmnpl === void 0x0 && (qmnpl = 'ascill'), $zxw === void 0x0 && ($zxw = ''), $_yxzw['fs']['readFile']({ 'filePath': x$yw, 'encoding': qmnpl, 'success': function (hedgif) {
          if (x$yw['indexOf']('http://') != -0x1 || x$yw['indexOf']('https://') != -0x1) $_yxzw['onFileUpdate'](x$yw, $zxw);v$yxzw != null && v$yxzw['runWith']([0x0, hedgif]);
        }, 'fail': function (srpqto) {
          if (srpqto) v$yxzw != null && v$yxzw['runWith']([0x1, srpqto]);
        } });
    }, $_yxzw['downImg'] = function (kijmh, feid, nprso) {
      nprso === void 0x0 && (nprso = '');var vrustq = $_yxzw['wxdown']({ 'url': kijmh, 'success': function (mljki) {
          mljki['statusCode'] === 0xc8 && $_yxzw['copyFile'](mljki['tempFilePath'], nprso, feid);
        }, 'fail': function (promqn) {
          feid != null && feid['runWith']([0x1, promqn]);
        } });
    }, $_yxzw['copyFile'] = function (vxtuws, sropqn, srutqp) {
      var y$wv = vxtuws['split']('/'),
          twruvs = y$wv[y$wv['length'] - 0x1],
          ywz_$ = sropqn['split']('?')[0x0],
          zyx$w_ = $_yxzw['getFileInfo'](sropqn),
          z0$_21 = $_yxzw['getFileNativePath'](twruvs);$_yxzw['fs']['copyFile']({ 'srcPath': vxtuws, 'destPath': z0$_21, 'success': function (tvsw) {
          if (!zyx$w_) $_yxzw['onSaveFile'](sropqn, twruvs), srutqp != null && srutqp['runWith']([0x0]);else {
            if (zyx$w_['readyUrl'] != sropqn) $_yxzw['remove'](twruvs, sropqn, srutqp);
          }
        }, 'fail': function (qrtso) {
          srutqp != null && srutqp['runWith']([0x1, qrtso]);
        } });
    }, $_yxzw['getFileNativePath'] = function (wstvr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wstvr;
    }, $_yxzw['remove'] = function (feijgh, jlikm, urtpqs) {
      jlikm === void 0x0 && (jlikm = '');var mornpq = $_yxzw['getFileInfo'](jlikm),
          otqrsp = $_yxzw['getFileNativePath'](mornpq['md5']);qmno['loader']['clearRes'](mornpq['readyUrl']), $_yxzw['fs']['unlink']({ 'filePath': otqrsp, 'success': function (psruqt) {
          if (jlikm != '') $_yxzw['onSaveFile'](jlikm, feijgh);urtpqs != null && urtpqs['runWith']([0x0]);
        }, 'fail': function (kimjl) {} });
    }, $_yxzw['onSaveFile'] = function (wsutx, $0yz1_) {
      var _4310 = wsutx['split']('?')[0x0];$_yxzw['filesListObj'][_4310] = { 'md5': $0yz1_, 'readyUrl': wsutx }, $_yxzw['fs']['writeFile']({ 'filePath': $_yxzw['fileNativeDir'] + '/' + $_yxzw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($_yxzw['filesListObj']), 'success': function (mlnjik) {
          console['log']('写入测试测试成功：', mlnjik);
        }, 'fail': function (fbeda) {
          console['log']('写入测试测试失败：', fbeda);
        } });
    }, $_yxzw['existDir'] = function (vurstw, tyu) {
      $_yxzw['fs']['mkdir']({ 'dirPath': vurstw, 'success': function (zuvx) {
          tyu != null && tyu['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (z$12_) {
          if (z$12_['errMsg']['indexOf']('file already exists') != -0x1) $_yxzw['readSync']($_yxzw['fileListName'], 'utf8', tyu);else tyu != null && tyu['runWith']([0x1, z$12_]);
        } });
    }, $_yxzw['readSync'] = function (qurt, fdeih, gbedf, jigk) {
      fdeih === void 0x0 && (fdeih = 'ascill'), jigk === void 0x0 && (jigk = '');var olmpn = $_yxzw['getFileNativePath'](qurt),
          fcdaeb;try {
        fcdaeb = $_yxzw['fs']['readFileSync'](olmpn), gbedf != null && gbedf['runWith']([0x0, { 'data': fcdaeb }]);
      } catch (pomrn) {
        gbedf != null && gbedf['runWith']([0x1]);
      }
    }, $_yxzw['readCache'] = function () {}, $_yxzw['writeCache'] = function (y1_$0) {
      var zvuyw = readyUrl['split']('?')[0x0];$_yxzw['filesListObj'][zvuyw] = { 'md5': md5Name, 'readyUrl': readyUrl }, $_yxzw['fs']['writeFile']({ 'filePath': $_yxzw['fileNativeDir'] + '/' + $_yxzw['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($_yxzw['filesListObj']), 'success': function (qnprm) {}, 'fail': function (bdace) {} });
    }, $_yxzw['setNativeFileDir'] = function (cbafde) {
      $_yxzw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cbafde;
    }, $_yxzw['filesListObj'] = {}, $_yxzw['fileNativeDir'] = null, $_yxzw['fileListName'] = 'layaairfiles.txt', $_yxzw['ziyuFileData'] = {}, xwtuy($_yxzw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $_yxzw;
  }(snpqro),
      wvuxyz = function (rqvstu) {
    function vturs() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], vturs['__super']['call'](this), this['_sound'] = vturs['_createSound']();
    }dcfab(vturs, 'laya.wx.mini.MiniSound', rqvstu);var utprs = vturs['prototype'];return utprs['load'] = function ($12) {
      var iedfg = this;$12 = qrmopn['formatURL']($12), this['url'] = $12;if (vturs['_audioCache'][$12]) {
        this['event']('complete');return;
      }function fbdeac() {
        if (vturs['_null'] != undefined) iedfg['_sound']['onCanplay'](vturs['_null']), iedfg['_sound']['onError'](vturs['_null']);else try {
          iedfg['_sound']['onCanplay'](null), iedfg['_sound']['onError'](null), vturs['_null'] = null;
        } catch (lkmjhi) {
          console['warn']('[wxmini] _clearSound:' + lkmjhi), iedfg['_sound']['onCanplay'](npqlmo), iedfg['_sound']['onError'](npqlmo), vturs['_null'] = npqlmo;
        }
      }function ejgifh() {
        fbdeac(), zvwy$x['loaded'] = !![], zvwy$x['event']('complete'), vturs['_audioCache'][zvwy$x['url']] = zvwy$x;
      }function lnmjo(zx$w_) {
        console['error']('errCode=' + zx$w_['errCode'] + '  errMsg=' + zx$w_['errMsg']), fbdeac(), zvwy$x['event']('error');
      }function npqlmo() {}this['_sound']['onCanplay'](ejgifh), this['_sound']['onError'](lnmjo), this['_sound']['src'] = $12;var zvwy$x = this;
    }, utprs['play'] = function (hegij, qtpsru) {
      hegij === void 0x0 && (hegij = 0x0), qtpsru === void 0x0 && (qtpsru = 0x0);var $xwz_;if (this['url'] == psqut['_tMusic']) {
        if (!vturs['_musicAudio']) vturs['_musicAudio'] = vturs['_createSound']();$xwz_ = vturs['_musicAudio'];
      } else $xwz_ = vturs['_createSound']();$xwz_['src'] = this['url'];var suxvtw = new _$y0zx($xwz_);return suxvtw['url'] = this['url'], suxvtw['loops'] = qtpsru, suxvtw['startTime'] = hegij, suxvtw['play'](), psqut['addChannel'](suxvtw), suxvtw;
    }, utprs['dispose'] = function () {
      var z$_10 = vturs['_audioCache'][this['url']];z$_10 && (z$_10['src'] = '', delete vturs['_audioCache'][this['url']]);
    }, opqnr(0x0, utprs, 'duration', function () {
      return this['_sound']['duration'];
    }), vturs['_createSound'] = function () {
      return vturs['_id']++, kmlnij['window']['wx']['createInnerAudioContext']();
    }, vturs['_musicAudio'] = null, vturs['_id'] = 0x0, vturs['_audioCache'] = {}, vturs['_null'] = undefined, vturs;
  }(snpqro),
      _$y0zx = function (mjh) {
    function mlnoq(rqupst) {
      this['_audio'] = null, this['_onEnd'] = null, mlnoq['__super']['call'](this), this['_audio'] = rqupst, this['_onEnd'] = jighkl['bind'](this['__onEnd'], this), rqupst['onEnded'](this['_onEnd']);
    }dcfab(mlnoq, 'laya.wx.mini.MiniSoundChannel', mjh);var $zwyxv = mlnoq['prototype'];return $zwyxv['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qmno['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $zwyxv['__onNull'] = function () {}, $zwyxv['play'] = function () {
      this['isStopped'] = ![], psqut['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $zwyxv['stop'] = function () {
      this['isStopped'] = !![], psqut['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mlnoq['_null'] != undefined) this['_audio']['onEnded'](mlnoq['_null']);else try {
        this['_audio']['onEnded'](null), mlnoq['_null'] = null;
      } catch (khfjgi) {
        console['warn']('[wxmini] stop:' + khfjgi), this['_audio']['onEnded'](jighkl['bind'](this['__onNull'], this)), mlnoq['_null'] = jighkl['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $zwyxv['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $zwyxv['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], psqut['addChannel'](this), this['_audio']['play']();
    }, opqnr(0x0, $zwyxv, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), opqnr(0x0, $zwyxv, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), opqnr(0x0, $zwyxv, 'volume', function () {
      return 0x1;
    }, function (jihfgk) {}), mlnoq['_null'] = undefined, mlnoq;
  }(egfjh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wuxvyz in Laya) {
    var vus = Laya[wuxvyz];vus && vus['__isclass'] && (exports[wuxvyz] = vus);
  }
});