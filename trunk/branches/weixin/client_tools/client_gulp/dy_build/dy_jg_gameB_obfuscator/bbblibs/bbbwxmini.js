var _ = wx.y$;
(function (window, document, $xz) {
  var vturw = $xz['un'],
      xyvutw = $xz['uns'],
      nlqmpo = $xz['static'],
      kgjihf = $xz['class'],
      ywtx = $xz['getset'],
      vwsur = $xz['__newvec'],
      wtxuvy = laya['utils']['Browser'],
      ihkjf = laya['events']['Event'],
      zxvyuw = laya['events']['EventDispatcher'],
      v$zwyx = laya['resource']['HTMLImage'],
      y0$z_x = laya['utils']['Handler'],
      ecgfh = laya['display']['Input'],
      ojkmln = laya['net']['Loader'],
      xzvy = laya['maths']['Matrix'],
      usvx = laya['renders']['Render'],
      hfgdei = laya['utils']['RunDriver'],
      oprqnm = laya['media']['Sound'],
      pqlon = laya['media']['SoundChannel'],
      bdgef = laya['media']['SoundManager'],
      ptqurs = laya['display']['Stage'],
      gihef = laya['net']['URL'],
      olqmn = laya['utils']['Utils'],
      jkhgi = function () {
    function ijl() {}return kgjihf(ijl, 'laya.wx.mini.MiniAdpter'), ijl['getJson'] = function (egfdcb) {
      return JSON['parse'](egfdcb);
    }, ijl['init'] = function (hdec, echdg) {
      hdec === void 0x0 && (hdec = ![]), echdg === void 0x0 && (echdg = ![]);if (ijl['_inited']) return;ijl['window'] = window;if (ijl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ijl['_inited'] = !![], ijl['isZiYu'] = echdg, ijl['isPosMsgYu'] = hdec, ijl['EnvConfig'] = {}, !ijl['isZiYu'] && (_1yz['setNativeFileDir']('/layaairGame'), _1yz['existDir'](_1yz['fileNativeDir'], y0$z_x['create'](ijl, ijl['onMkdirCallBack']))), ijl['window']['focus'] = function () {}, $xz['getUrlPath'] = function () {}, ijl['window']['logtime'] = function (jfhgei) {}, ijl['window']['alertTimeLog'] = function (higjef) {}, ijl['window']['resetShareInfo'] = function () {}, ijl['window']['CanvasRenderingContext2D'] = function () {}, ijl['window']['CanvasRenderingContext2D']['prototype'] = ijl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ijl['window']['document']['body']['appendChild'] = function () {}, ijl['EnvConfig']['pixelRatioInt'] = 0x0, hfgdei['getPixelRatio'] = ijl['pixelRatio'], ijl['_preCreateElement'] = wtxuvy['createElement'], wtxuvy['createElement'] = ijl['createElement'], hfgdei['createShaderCondition'] = ijl['createShaderCondition'], olqmn['parseXMLFromString'] = ijl['parseXMLFromString'], ecgfh['_createInputElement'] = rsonq['_createInputElement'], ijl['EnvConfig']['load'] = ojkmln['prototype']['load'], ojkmln['prototype']['load'] = uyxzvw['prototype']['load'], ijl['isZiYu'] && hdec && wx['onMessage'](function (z$wyx) {
        z$wyx['isLoad'] && (_1yz['ziyuFileData'][z$wyx['url']] = z$wyx['data']);
      });
    }, ijl['onMkdirCallBack'] = function (jlhik, _413) {
      if (!jlhik) _1yz['filesListObj'] = JSON['parse'](_413['data']);
    }, ijl['pixelRatio'] = function () {
      if (!ijl['EnvConfig']['pixelRatioInt']) try {
        var vywuzx = wx['getSystemInfoSync']();return ijl['EnvConfig']['pixelRatioInt'] = vywuzx['pixelRatio'], vywuzx = vywuzx, vywuzx['pixelRatio'];
      } catch (wyvzu) {}return ijl['EnvConfig']['pixelRatioInt'];
    }, ijl['createElement'] = function (nlpkom) {
      if (nlpkom == 'canvas') {
        var yzx$w;return ijl['idx'] == 0x1 ? ijl['isZiYu'] ? (yzx$w = sharedCanvas, yzx$w['style'] = {}) : yzx$w = window['canvas'] : yzx$w = window['wx']['createCanvas'](), ijl['idx']++, yzx$w;
      } else {
        if (nlpkom == 'textarea' || nlpkom == 'input') return ijl['onCreateInput'](nlpkom);else {
          if (nlpkom == 'div') {
            var twvxsu = ijl['_preCreateElement'](nlpkom);return twvxsu['contains'] = function (iknm) {
              return null;
            }, twvxsu['removeChild'] = function (zy1_0$) {}, twvxsu;
          } else return ijl['_preCreateElement'](nlpkom);
        }
      }
    }, ijl['onCreateInput'] = function (cgdehf) {
      var fhikgj = ijl['_preCreateElement'](cgdehf);return fhikgj['focus'] = rsonq['wxinputFocus'], fhikgj['blur'] = rsonq['wxinputblur'], fhikgj['style'] = {}, fhikgj['value'] = 0x0, fhikgj['parentElement'] = {}, fhikgj['placeholder'] = {}, fhikgj['type'] = {}, fhikgj['setColor'] = function (jfhk) {}, fhikgj['setType'] = function (uqsvtr) {}, fhikgj['setFontFace'] = function (lknomj) {}, fhikgj['addEventListener'] = function (cbdegf) {}, fhikgj['contains'] = function (kmjli) {
        return null;
      }, fhikgj['removeChild'] = function (gdeh) {}, fhikgj;
    }, ijl['createShaderCondition'] = function (snpor) {
      var klhjg = this,
          $2z_ = function () {
        var sqtop = snpor;return klhjg[snpor['replace']('this.', '')];
      };return $2z_;
    }, ijl['EnvConfig'] = null, ijl['window'] = null, ijl['_preCreateElement'] = null, ijl['_inited'] = ![], ijl['wxRequest'] = null, ijl['systemInfo'] = null, ijl['version'] = '0.0.1', ijl['isZiYu'] = ![], ijl['isPosMsgYu'] = ![], ijl['parseXMLFromString'] = function (bacfed) {
      var fdbgec, ihde;bacfed = bacfed['replace'](/>\s+</g, '><');try {
        fdbgec = new window['Parser']['DOMParser']()['parseFromString'](bacfed, 'text/xml');
      } catch (qrsn) {
        throw '需要引入xml解析库文件';
      }return fdbgec;
    }, ijl['idx'] = 0x1, ijl;
  }(),
      vwrt = function () {
    function jnlkom() {}kgjihf(jnlkom, 'laya.wx.mini.MiniImage');var pqmno = jnlkom['prototype'];return pqmno['_loadImage'] = function (mljkno) {
      var vqtrus = this,
          z$120 = ![];mljkno['indexOf']('layaNativeDir/') == -0x1 && (z$120 = !![], mljkno = gihef['formatURL'](mljkno));if (!_1yz['getFileInfo'](mljkno)) {
        if (mljkno['indexOf']('http://') != -0x1 || mljkno['indexOf']('https://') != -0x1) _1yz['downImg'](mljkno, new y0$z_x(jnlkom, jnlkom['onDownImgCallBack'], [mljkno, vqtrus]), mljkno);else jnlkom['onCreateImage'](mljkno, vqtrus, !![]);
      } else jnlkom['onCreateImage'](mljkno, vqtrus, !z$120);
    }, jnlkom['onDownImgCallBack'] = function (yz1$_, rvutsq, egdbcf) {
      if (!egdbcf) jnlkom['onCreateImage'](yz1$_, rvutsq);else rvutsq['onError'](null);
    }, jnlkom['onCreateImage'] = function (gfhedi, qopnsr, yzxuwv) {
      yzxuwv === void 0x0 && (yzxuwv = ![]);var jkifhg;if (!yzxuwv) {
        var rsqup = _1yz['getFileInfo'](gfhedi),
            nqpml = rsqup['md5'];jkifhg = _1yz['getFileNativePath'](nqpml);
      } else jkifhg = gfhedi;if (qopnsr['imgCache'] == null) qopnsr['imgCache'] = {};var vsruq;function z$xy_() {
        vsruq['onload'] = null, vsruq['onerror'] = null, delete qopnsr['imgCache'][gfhedi];
      };var cdeba = function () {
        z$xy_(), qopnsr['onLoaded'](vsruq);
      },
          jknlo = function () {
        z$xy_(), qopnsr['event']('error', 'Load image failed');
      };qopnsr['_type'] == 'nativeimage' ? (vsruq = new wtxuvy['window']['Image'](), vsruq['crossOrigin'] = '', vsruq['onload'] = cdeba, vsruq['onerror'] = jknlo, vsruq['src'] = jkifhg, qopnsr['imgCache'][gfhedi] = vsruq) : new v$zwyx['create'](jkifhg, { 'onload': cdeba, 'onerror': jknlo, 'onCreate': function (hjgfk) {
          vsruq = hjgfk, qopnsr['imgCache'][gfhedi] = hjgfk;
        } });
    }, jnlkom;
  }(),
      rsonq = function () {
    function sruwtv() {}return kgjihf(sruwtv, 'laya.wx.mini.MiniInput'), sruwtv['_createInputElement'] = function () {
      ecgfh['_initInput'](ecgfh['area'] = wtxuvy['createElement']('textarea')), ecgfh['_initInput'](ecgfh['input'] = wtxuvy['createElement']('input')), ecgfh['inputContainer'] = wtxuvy['createElement']('div'), ecgfh['inputContainer']['style']['position'] = 'absolute', ecgfh['inputContainer']['style']['zIndex'] = 0x186a0, wtxuvy['container']['appendChild'](ecgfh['inputContainer']), ecgfh['inputContainer']['setPos'] = function (mkonp, orqst) {
        ecgfh['inputContainer']['style']['left'] = mkonp + 'px', ecgfh['inputContainer']['style']['top'] = orqst + 'px';
      }, $xz['stage']['on']('resize', null, sruwtv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zyxvw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), bdgef['_soundClass'] = cfdgbe, bdgef['_musicClass'] = cfdgbe, window['_videoClass'] = dghef;
    }, sruwtv['_onStageResize'] = function () {
      var debgfc = $xz['stage']['_canvasTransform']['identity']();debgfc['scale'](wtxuvy['width'] / usvx['canvas']['width'] / hfgdei['getPixelRatio'](), wtxuvy['height'] / usvx['canvas']['height'] / hfgdei['getPixelRatio']());
    }, sruwtv['wxinputFocus'] = function (trqpso) {
      var kinlm = ecgfh['inputElement']['target'];if (kinlm && !kinlm['editable']) return;jkhgi['window']['wx']['offKeyboardConfirm'](), jkhgi['window']['wx']['offKeyboardInput'](), jkhgi['window']['wx']['showKeyboard']({ 'defaultValue': kinlm['text'], 'maxLength': kinlm['maxChars'], 'multiple': kinlm['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hfkjg) {}, 'fail': function (omlkj) {} }), jkhgi['window']['wx']['onKeyboardConfirm'](function (pro) {
        var nlkoj = pro ? pro['value'] : '';kinlm['text'] = nlkoj, kinlm['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jkhgi['window']['wx']['onKeyboardInput'](function (eacbdf) {
        var vrqsu = eacbdf ? eacbdf['value'] : '';if (!kinlm['multiline']) {
          if (vrqsu['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kinlm['text'] = vrqsu, kinlm['event']('input');
      });
    }, sruwtv['inputEnter'] = function () {
      ecgfh['inputElement']['target']['focus'] = ![];
    }, sruwtv['wxinputblur'] = function () {
      sruwtv['hideKeyboard']();
    }, sruwtv['hideKeyboard'] = function () {
      jkhgi['window']['wx']['offKeyboardConfirm'](), jkhgi['window']['wx']['offKeyboardInput'](), jkhgi['window']['wx']['hideKeyboard']({ 'success': function (_02z$) {
          console['log']('隐藏键盘');
        }, 'fail': function (uvqts) {
          console['log']('隐藏键盘出错:' + (uvqts ? uvqts['errMsg'] : ''));
        } });
    }, sruwtv;
  }(),
      uyxzvw = function () {
    function dehgif() {}kgjihf(dehgif, 'laya.wx.mini.MiniLoader');var $0_y = dehgif['prototype'];return $0_y['load'] = function (hfdce, lhgkij, urqst, dbefa, klim) {
      urqst === void 0x0 && (urqst = !![]), klim === void 0x0 && (klim = ![]);var cbfad = this;cbfad['_url'] = hfdce;if (hfdce['indexOf']('data:image') === 0x0) cbfad['_type'] = lhgkij = 'image';else cbfad['_type'] = lhgkij || (lhgkij = cbfad['getTypeFromUrl'](hfdce));cbfad['_cache'] = urqst, cbfad['_data'] = null;var ruqsv = 'ascii';if (hfdce['indexOf']('.fnt') != -0x1) ruqsv = 'utf8';else lhgkij == 'arraybuffer' && (ruqsv = '');;var sxvtu = olqmn['getFileExtension'](hfdce);if (dehgif['_fileTypeArr']['indexOf'](sxvtu) != -0x1) jkhgi['EnvConfig']['load']['call'](this, hfdce, lhgkij, urqst, dbefa, klim);else {
        if (!_1yz['getFileInfo'](hfdce)) {
          if (hfdce['indexOf']('layaNativeDir/') != -0x1) {
            if (jkhgi['isZiYu']) {
              var _213$0 = _1yz['ziyuFileData'][hfdce];cbfad['onLoaded'](_213$0);return;
            } else {
              cosnole['log']('read read'), _1yz['read'](hfdce, ruqsv, new y0$z_x(dehgif, dehgif['onReadNativeCallBack'], [ruqsv, hfdce, lhgkij, urqst, dbefa, klim, cbfad]));return;
            }
          }if (gihef['rootPath'] == '') var mnlo = hfdce;else mnlo = hfdce['split'](gihef['rootPath'])[0x0];hfdce['indexOf']('http://') != -0x1 || hfdce['indexOf']('https://') != -0x1 ? jkhgi['EnvConfig']['load']['call'](cbfad, hfdce, lhgkij, urqst, dbefa, klim) : _1yz['readFile'](mnlo, ruqsv, new y0$z_x(dehgif, dehgif['onReadNativeCallBack'], [ruqsv, hfdce, lhgkij, urqst, dbefa, klim, cbfad]), hfdce);
        } else jkhgi['EnvConfig']['load']['call'](this, hfdce, lhgkij, urqst, dbefa, klim);
      }
    }, $0_y['resMgrLoad'] = function (fhedc, uvyx, ifedg, efbcgd, edfbcg, gidhfe, tsuqr) {
      ifedg === void 0x0 && (ifedg = 0x0), efbcgd === void 0x0 && (efbcgd = ![]), edfbcg === void 0x0 && (edfbcg = ![]), gidhfe === void 0x0 && (gidhfe = 0x0), tsuqr === void 0x0 && (tsuqr = 0x3), fhedc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fhedc), jkhgi['EnvConfig']['resMgrLoad'](fhedc, (rson, vzw$, xvwu) => {
        dehgif['prototype']['resMgrLoadCallBack'](rson, vzw$, xvwu, uvyx);
      }, ifedg, efbcgd, edfbcg, gidhfe, tsuqr);
    }, $0_y['resMgrLoadCallBack'] = function (wrv, qprsut, jmok, _3421) {
      console['log']('buff:::', wrv, jmok, _1yz['fileNativeDir'] + '///' + _1yz['fileListName']), _3421(wrv, qprsut, jmok);
    }, $0_y['clearRes'] = function (qusvtr, bedcaf) {
      bedcaf === void 0x0 && (bedcaf = ![]);var mqopl = this;mqopl['clearRes'](qusvtr, bedcaf);var lgikj = _1yz['getFileInfo'](qusvtr);if (lgikj && (qusvtr['indexOf']('http://') != -0x1 || qusvtr['indexOf']('https://') != -0x1)) {
        var x$_wyz = lgikj['md5'],
            vtwrs = _1yz['getFileNativePath'](x$_wyz);_1yz['remove'](vtwrs);
      }
    }, dehgif['onReadNativeCallBack'] = function (efgdhc, uvsxt, trqspu, fchge, otrsqp, zv$xw, vyxwzu, tus, jkfgh) {
      fchge === void 0x0 && (fchge = !![]), zv$xw === void 0x0 && (zv$xw = ![]), tus === void 0x0 && (tus = 0x0);if (!tus) {
        var _410;if (trqspu == 'json' || trqspu == 'atlas') _410 = jkhgi['getJson'](jkfgh['data']);else trqspu == 'xml' ? _410 = olqmn['parseXMLFromString'](jkfgh['data']) : _410 = jkfgh['data'];vyxwzu['onLoaded'](_410), !jkhgi['isZiYu'] && jkhgi['isPosMsgYu'] && trqspu != 'arraybuffer' && wx['postMessage']({ 'url': uvsxt, 'data': _410, 'isLoad': !![] });
      } else tus == 0x1 && jkhgi['EnvConfig']['load']['call'](vyxwzu, uvsxt, trqspu, fchge, otrsqp, zv$xw);
    }, nlqmpo(dehgif, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), dehgif;
  }(),
      _1yz = function (_wyz) {
    function vuxswt() {
      vuxswt['__super']['call'](this);;
    }return kgjihf(vuxswt, 'laya.wx.mini.MiniFileMgr', _wyz), vuxswt['isLoadFile'] = function (svrwtu) {
      return vuxswt['_fileTypeArr']['indexOf'](svrwtu) != -0x1 ? !![] : ![];
    }, vuxswt['getFileInfo'] = function (mlkpon) {
      var cabdf = mlkpon['split']('?')[0x0],
          v$wzy = vuxswt['filesListObj'][cabdf];if (v$wzy == null) return null;else return v$wzy;return null;
    }, vuxswt['onFileUpdate'] = function (dfa, mqpor) {
      var $01zy = dfa['split']('/'),
          rpquts = $01zy[$01zy['length'] - 0x1],
          gchdef = vuxswt['getFileInfo'](mqpor);if (gchdef == null) vuxswt['onSaveFile'](mqpor, rpquts);else {
        if (gchdef['readyUrl'] != mqpor) vuxswt['remove'](rpquts, mqpor);
      }
    }, vuxswt['exits'] = function (ruvwt, xz$_y) {
      var ronpsq = vuxswt['getFileNativePath'](ruvwt);vuxswt['fs']['getFileInfo']({ 'filePath': ronpsq, 'success': function (nrompq) {
          xz$_y != null && xz$_y['runWith']([0x0, nrompq]);
        }, 'fail': function (gfdhi) {
          xz$_y != null && xz$_y['runWith']([0x1, gfdhi]);
        } });
    }, vuxswt['read'] = function ($_xyz, posqnr, xzy$w, sqtrv) {
      posqnr === void 0x0 && (posqnr = 'ascill'), sqtrv === void 0x0 && (sqtrv = '');var npqlo;sqtrv != '' ? npqlo = vuxswt['getFileNativePath']($_xyz) : npqlo = $_xyz, vuxswt['fs']['readFile']({ 'filePath': npqlo, 'encoding': posqnr, 'success': function (inkl) {
          xzy$w != null && xzy$w['runWith']([0x0, inkl]);
        }, 'fail': function (bacfe) {
          if (bacfe && sqtrv != '') vuxswt['down'](sqtrv, posqnr, xzy$w, sqtrv);else xzy$w != null && xzy$w['runWith']([0x1]);
        } });
    }, vuxswt['readNativeFile'] = function (kghijf, tspro) {
      vuxswt['fs']['readFile']({ 'filePath': kghijf, 'encoding': '', 'success': function (nmkplo) {
          tspro != null && tspro['runWith']([0x0]);
        }, 'fail': function (kijf) {
          tspro != null && tspro['runWith']([0x1]);
        } });
    }, vuxswt['down'] = function (ijghkf, dehgf, pmor, rspqn) {
      dehgf === void 0x0 && (dehgf = 'ascill'), rspqn === void 0x0 && (rspqn = '');var _w$yx = vuxswt['getFileNativePath'](rspqn),
          hdcegf = vuxswt['wxdown']({ 'url': ijghkf, 'filePath': _w$yx, 'success': function (pqrmo) {
          if (pqrmo['statusCode'] === 0xc8) vuxswt['readFile'](pqrmo['filePath'], dehgf, pmor, rspqn);
        }, 'fail': function (uqsrtv) {
          pmor != null && pmor['runWith']([0x1, uqsrtv]);
        } });hdcegf['onProgressUpdate'](function ($xvwy) {
        pmor != null && pmor['runWith']([0x2, $xvwy['progress']]);
      });
    }, vuxswt['readFile'] = function (giljk, hgkil, pk, jihlg) {
      hgkil === void 0x0 && (hgkil = 'ascill'), jihlg === void 0x0 && (jihlg = ''), vuxswt['fs']['readFile']({ 'filePath': giljk, 'encoding': hgkil, 'success': function (y$xvz) {
          if (giljk['indexOf']('http://') != -0x1 || giljk['indexOf']('https://') != -0x1) vuxswt['onFileUpdate'](giljk, jihlg);pk != null && pk['runWith']([0x0, y$xvz]);
        }, 'fail': function (y0zx$) {
          if (y0zx$) pk != null && pk['runWith']([0x1, y0zx$]);
        } });
    }, vuxswt['downImg'] = function (jlonmk, prnosq, _y01) {
      _y01 === void 0x0 && (_y01 = '');var cfh = vuxswt['wxdown']({ 'url': jlonmk, 'success': function (trspu) {
          trspu['statusCode'] === 0xc8 && vuxswt['copyFile'](trspu['tempFilePath'], _y01, prnosq);
        }, 'fail': function (nrmoq) {
          prnosq != null && prnosq['runWith']([0x1, nrmoq]);
        } });
    }, vuxswt['copyFile'] = function (vswtx, y$x0_z, trvusq) {
      var dbecfa = vswtx['split']('/'),
          $23_10 = dbecfa[dbecfa['length'] - 0x1],
          _z$yx0 = y$x0_z['split']('?')[0x0],
          xywtvu = vuxswt['getFileInfo'](y$x0_z),
          lk = vuxswt['getFileNativePath']($23_10);vuxswt['fs']['copyFile']({ 'srcPath': vswtx, 'destPath': lk, 'success': function (jhikgf) {
          if (!xywtvu) vuxswt['onSaveFile'](y$x0_z, $23_10), trvusq != null && trvusq['runWith']([0x0]);else {
            if (xywtvu['readyUrl'] != y$x0_z) vuxswt['remove']($23_10, y$x0_z, trvusq);
          }
        }, 'fail': function (z$_xwy) {
          trvusq != null && trvusq['runWith']([0x1, z$_xwy]);
        } });
    }, vuxswt['getFileNativePath'] = function (twsrv) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + twsrv;
    }, vuxswt['remove'] = function (xyw$_z, xwyu, hfejgi) {
      xwyu === void 0x0 && (xwyu = '');var w_xz$ = vuxswt['getFileInfo'](xwyu),
          tvurw = vuxswt['getFileNativePath'](w_xz$['md5']);$xz['loader']['clearRes'](w_xz$['readyUrl']), vuxswt['fs']['unlink']({ 'filePath': tvurw, 'success': function (qrtsu) {
          if (xwyu != '') vuxswt['onSaveFile'](xwyu, xyw$_z);hfejgi != null && hfejgi['runWith']([0x0]);
        }, 'fail': function (okmp) {} });
    }, vuxswt['onSaveFile'] = function (ijhgfe, svtwr) {
      var poq = ijhgfe['split']('?')[0x0];vuxswt['filesListObj'][poq] = { 'md5': svtwr, 'readyUrl': ijhgfe }, vuxswt['fs']['writeFile']({ 'filePath': vuxswt['fileNativeDir'] + '/' + vuxswt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vuxswt['filesListObj']), 'success': function (jiefh) {
          console['log']('写入测试测试成功：', jiefh);
        }, 'fail': function (nkjmo) {
          console['log']('写入测试测试失败：', nkjmo);
        } });
    }, vuxswt['existDir'] = function (x$zwy_, uswtvr) {
      vuxswt['fs']['mkdir']({ 'dirPath': x$zwy_, 'success': function (opnsr) {
          uswtvr != null && uswtvr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dfcab) {
          if (dfcab['errMsg']['indexOf']('file already exists') != -0x1) vuxswt['readSync'](vuxswt['fileListName'], 'utf8', uswtvr);else uswtvr != null && uswtvr['runWith']([0x1, dfcab]);
        } });
    }, vuxswt['readSync'] = function (ljmki, tqsu, gilkjh, qrmpn) {
      tqsu === void 0x0 && (tqsu = 'ascill'), qrmpn === void 0x0 && (qrmpn = '');var lpnqm = vuxswt['getFileNativePath'](ljmki),
          moknlj;try {
        moknlj = vuxswt['fs']['readFileSync'](lpnqm), gilkjh != null && gilkjh['runWith']([0x0, { 'data': moknlj }]);
      } catch (nljmi) {
        gilkjh != null && gilkjh['runWith']([0x1]);
      }
    }, vuxswt['readCache'] = function () {}, vuxswt['writeCache'] = function ($0y1_) {
      var limhk = readyUrl['split']('?')[0x0];vuxswt['filesListObj'][limhk] = { 'md5': md5Name, 'readyUrl': readyUrl }, vuxswt['fs']['writeFile']({ 'filePath': vuxswt['fileNativeDir'] + '/' + vuxswt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](vuxswt['filesListObj']), 'success': function (qoln) {}, 'fail': function (swvutr) {} });
    }, vuxswt['setNativeFileDir'] = function (xwzy$_) {
      vuxswt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xwzy$_;
    }, vuxswt['filesListObj'] = {}, vuxswt['fileNativeDir'] = null, vuxswt['fileListName'] = 'layaairfiles.txt', vuxswt['ziyuFileData'] = {}, nlqmpo(vuxswt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), vuxswt;
  }(zxvyuw),
      cfdgbe = function (wtusr) {
    function fgdb() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], fgdb['__super']['call'](this), this['_sound'] = fgdb['_createSound'](), this['_chanell'] = new uwsxv(this['_sound']);
    }kgjihf(fgdb, 'laya.wx.mini.MiniSound', wtusr);var zvy$x = fgdb['prototype'];return zvy$x['load'] = function (dhfgi) {
      var hjgkil = this;dhfgi = gihef['formatURL'](dhfgi), this['url'] = dhfgi;if (fgdb['_audioCache'][dhfgi]) {
        this['event']('complete');return;
      }function fghd() {
        if (fgdb['_null'] != undefined) hjgkil['_sound']['onCanplay'](fgdb['_null']), hjgkil['_sound']['onError'](fgdb['_null']);else try {
          hjgkil['_sound']['onCanplay'](null), hjgkil['_sound']['onError'](null), fgdb['_null'] = null;
        } catch (wtxvus) {
          console['warn']('[wxmini] _clearSound:' + wtxvus), hjgkil['_sound']['onCanplay'](wtvxu), hjgkil['_sound']['onError'](wtvxu), fgdb['_null'] = wtvxu;
        }
      }function qurtp() {
        psurtq['loaded'] = !![], psurtq['event']('complete'), fgdb['_audioCache'][psurtq['url']] = psurtq;
      }function ehigfd(npsqro) {
        console['error']('errCode=' + npsqro['errCode'] + '  errMsg=' + npsqro['errMsg']), psurtq['event']('error');
      }function wtvxu() {}this['_sound']['onCanplay'](qurtp), this['_sound']['onError'](ehigfd), this['_sound']['src'] = dhfgi;var psurtq = this;
    }, zvy$x['play'] = function (usvxt, hijfge) {
      usvxt === void 0x0 && (usvxt = 0x0), hijfge === void 0x0 && (hijfge = 0x0);var lnkjmo, oljmnk;if (this['url'] == bdgef['_tMusic']) {
        if (!fgdb['_musicAudio']) fgdb['_musicAudio'] = this['_sound'];lnkjmo = fgdb['_musicAudio'], oljmnk = this['_chanell'];
      } else lnkjmo = this['_sound'], oljmnk = this['_chanell'];return lnkjmo['src'] = this['url'], lnkjmo['startTime'] = 0x0, oljmnk['isStopped'] && (oljmnk['url'] = this['url'], oljmnk['loops'] = hijfge, oljmnk['startTime'] = usvxt, oljmnk['play'](), bdgef['addChannel'](oljmnk)), oljmnk;
    }, zvy$x['dispose'] = function () {
      var mlkijn = fgdb['_audioCache'][this['url']];mlkijn && (mlkijn['src'] = '', delete fgdb['_audioCache'][this['url']]);
    }, ywtx(0x0, zvy$x, 'duration', function () {
      return this['_sound']['duration'];
    }), fgdb['_createSound'] = function () {
      fgdb['_id']++;var pqosrt = jkhgi['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return pqosrt;
    }, fgdb['_musicAudio'] = null, fgdb['_id'] = 0x0, fgdb['_audioCache'] = {}, fgdb['_null'] = undefined, fgdb;
  }(zxvyuw),
      uwsxv = function (wyxtvu) {
    function nmpo(geihd) {
      this['_audio'] = null, this['_onEnd'] = null, nmpo['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = geihd, this['_onEnd'] = olqmn['bind'](this['__onEnd'], this), geihd['onEnded'](this['_onEnd']);
    }kgjihf(nmpo, 'laya.wx.mini.MiniSoundChannel', wyxtvu);var uxstvw = nmpo['prototype'];return uxstvw['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($xz['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uxstvw['__onNull'] = function () {}, uxstvw['play'] = function () {
      this['isStopped'] = ![], bdgef['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, uxstvw['stop'] = function () {
      this['isStopped'] = !![], bdgef['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, uxstvw['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, uxstvw['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], bdgef['addChannel'](this), this['_audio']['play']();
    }, ywtx(0x0, uxstvw, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ywtx(0x0, uxstvw, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ywtx(0x0, uxstvw, 'volume', function () {
      return 0x1;
    }, function (gjh) {}), nmpo['_null'] = undefined, nmpo;
  }(pqlon),
      dghef = function () {
    function wuvtx() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = jkhgi['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }kgjihf(wuvtx, 'laya.wx.mini.MiniVideo');var sorpq = wuvtx['prototype'];return sorpq['on'] = function (vrswtu, fjkh, edgbf) {
      if (vrswtu == 'loadedmetadata') this['onPlayFunc'] = edgbf['bind'](fjkh), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else vrswtu == 'ended' && (this['onEndedFunC'] = edgbf['bind'](fjkh), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, sorpq['onTimeUpdateFunc'] = function ($3_12) {
      this['position'] = $3_12['position'], this['_duration'] = $3_12['duration'];
    }, sorpq['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, sorpq['onended'] = function (ijkglh, gedfb) {
      this['onEndedFunC'] = gedfb['bind'](ijkglh), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, sorpq['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, sorpq['off'] = function (hecgd, usprqt, gjef) {
      if (hecgd == 'loadedmetadata') this['onPlayFunc'] = gjef['bind'](usprqt), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hecgd == 'ended' && (this['onEndedFunC'] = gjef['bind'](usprqt), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, sorpq['load'] = function (kjlhgi) {
      if (!this['videoElement']) return;this['videoElement']['src'] = kjlhgi;
    }, sorpq['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, sorpq['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, sorpq['size'] = function (jkghl, npsqor) {
      if (!this['videoElement']) return;this['videoElement']['width'] = jkghl, this['videoElement']['height'] = npsqor;
    }, sorpq['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, sorpq['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ywtx(0x0, sorpq, 'duration', function () {
      return this['_duration'];
    }), ywtx(0x0, sorpq, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (z01$_2) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = z01$_2;
    }), ywtx(0x0, sorpq, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ywtx(0x0, sorpq, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ywtx(0x0, sorpq, 'ended', function () {
      return this['videoend'];
    }), ywtx(0x0, sorpq, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (w$zxy_) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = w$zxy_;
    }), ywtx(0x0, sorpq, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (lnjki) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = lnjki;
    }), ywtx(0x0, sorpq, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (heigdf) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = heigdf;
    }), ywtx(0x0, sorpq, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ywtx(0x0, sorpq, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (y_1z) {
      if (!this['videoElement']) return;this['videoElement']['x'] = y_1z;
    }), ywtx(0x0, sorpq, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (xuwzv) {
      if (!this['videoElement']) return;this['videoElement']['y'] = xuwzv;
    }), ywtx(0x0, sorpq, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ywtx(0x0, sorpq, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (pnqrom) {
      if (!this['videoElement']) return;this['videoElement']['src'] = pnqrom;
    }), ywtx(0x0, sorpq, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (rputq) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = rputq;
    }), ywtx(0x0, sorpq, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (nsqrop) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = nsqrop;
    }), wuvtx;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jiegfh in Laya) {
    var zvu = Laya[jiegfh];zvu && zvu['__isclass'] && (exports[jiegfh] = zvu);
  }
});