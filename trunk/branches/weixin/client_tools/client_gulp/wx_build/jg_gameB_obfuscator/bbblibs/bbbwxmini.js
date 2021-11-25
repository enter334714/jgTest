var _ = wx.y$;
(function (window, document, _0321$) {
  var cfae = _0321$['un'],
      _$zyw = _0321$['uns'],
      klimh = _0321$['static'],
      lhmik = _0321$['class'],
      gecfhd = _0321$['getset'],
      nikml = _0321$['__newvec'],
      lmnkji = laya['utils']['Browser'],
      hfge = laya['events']['Event'],
      nps = laya['events']['EventDispatcher'],
      kjilhm = laya['resource']['HTMLImage'],
      _z$12 = laya['utils']['Handler'],
      fghd = laya['display']['Input'],
      tvrws = laya['net']['Loader'],
      fiehjg = laya['maths']['Matrix'],
      z0_21 = laya['renders']['Render'],
      trwsv = laya['utils']['RunDriver'],
      yxzw_ = laya['media']['Sound'],
      vtx = laya['media']['SoundChannel'],
      srtuv = laya['media']['SoundManager'],
      hige = laya['display']['Stage'],
      mjhlik = laya['net']['URL'],
      $wv = laya['utils']['Utils'],
      omlnkj = function () {
    function mnjkli() {}return lhmik(mnjkli, 'laya.wx.mini.MiniAdpter'), mnjkli['getJson'] = function (wur) {
      return JSON['parse'](wur);
    }, mnjkli['init'] = function (khgfij, sopt) {
      khgfij === void 0x0 && (khgfij = ![]), sopt === void 0x0 && (sopt = ![]);if (mnjkli['_inited']) return;mnjkli['window'] = window;if (mnjkli['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;mnjkli['_inited'] = !![], mnjkli['isZiYu'] = sopt, mnjkli['isPosMsgYu'] = khgfij, mnjkli['EnvConfig'] = {}, !mnjkli['isZiYu'] && (aebdfc['setNativeFileDir']('/layaairGame'), aebdfc['existDir'](aebdfc['fileNativeDir'], _z$12['create'](mnjkli, mnjkli['onMkdirCallBack']))), mnjkli['window']['focus'] = function () {}, _0321$['getUrlPath'] = function () {}, mnjkli['window']['logtime'] = function (_1042) {}, mnjkli['window']['alertTimeLog'] = function (omrpnq) {}, mnjkli['window']['resetShareInfo'] = function () {}, mnjkli['window']['CanvasRenderingContext2D'] = function () {}, mnjkli['window']['CanvasRenderingContext2D']['prototype'] = mnjkli['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mnjkli['window']['document']['body']['appendChild'] = function () {}, mnjkli['EnvConfig']['pixelRatioInt'] = 0x0, trwsv['getPixelRatio'] = mnjkli['pixelRatio'], mnjkli['_preCreateElement'] = lmnkji['createElement'], lmnkji['createElement'] = mnjkli['createElement'], trwsv['createShaderCondition'] = mnjkli['createShaderCondition'], $wv['parseXMLFromString'] = mnjkli['parseXMLFromString'], fghd['_createInputElement'] = konmlp['_createInputElement'], mnjkli['EnvConfig']['load'] = tvrws['prototype']['load'], tvrws['prototype']['load'] = olpnmq['prototype']['load'], mnjkli['isZiYu'] && khgfij && wx['onMessage'](function (gbec) {
        gbec['isLoad'] && (aebdfc['ziyuFileData'][gbec['url']] = gbec['data']);
      });
    }, mnjkli['onMkdirCallBack'] = function ($1z_0y, qturv) {
      if (!$1z_0y) aebdfc['filesListObj'] = JSON['parse'](qturv['data']);
    }, mnjkli['pixelRatio'] = function () {
      if (!mnjkli['EnvConfig']['pixelRatioInt']) try {
        var rsqtp = wx['getSystemInfoSync']();return mnjkli['EnvConfig']['pixelRatioInt'] = rsqtp['pixelRatio'], rsqtp = rsqtp, rsqtp['pixelRatio'];
      } catch (_$y0xz) {}return mnjkli['EnvConfig']['pixelRatioInt'];
    }, mnjkli['createElement'] = function (vw$zy) {
      if (vw$zy == 'canvas') {
        var ecg;return mnjkli['idx'] == 0x1 ? mnjkli['isZiYu'] ? (ecg = sharedCanvas, ecg['style'] = {}) : ecg = window['canvas'] : ecg = window['wx']['createCanvas'](), mnjkli['idx']++, ecg;
      } else {
        if (vw$zy == 'textarea' || vw$zy == 'input') return mnjkli['onCreateInput'](vw$zy);else {
          if (vw$zy == 'div') {
            var y$0z_x = mnjkli['_preCreateElement'](vw$zy);return y$0z_x['contains'] = function (mnqp) {
              return null;
            }, y$0z_x['removeChild'] = function (onj) {}, y$0z_x;
          } else return mnjkli['_preCreateElement'](vw$zy);
        }
      }
    }, mnjkli['onCreateInput'] = function (_4321) {
      var tproqs = mnjkli['_preCreateElement'](_4321);return tproqs['focus'] = konmlp['wxinputFocus'], tproqs['blur'] = konmlp['wxinputblur'], tproqs['style'] = {}, tproqs['value'] = 0x0, tproqs['parentElement'] = {}, tproqs['placeholder'] = {}, tproqs['type'] = {}, tproqs['setColor'] = function ($1_3) {}, tproqs['setType'] = function (_01$zy) {}, tproqs['setFontFace'] = function (opqt) {}, tproqs['addEventListener'] = function (sqn) {}, tproqs['contains'] = function (qstpu) {
        return null;
      }, tproqs['removeChild'] = function (wyuzx) {}, tproqs;
    }, mnjkli['createShaderCondition'] = function (tvqsur) {
      var $yx_ = this,
          chegd = function () {
        var jlmhk = tvqsur;return $yx_[tvqsur['replace']('this.', '')];
      };return chegd;
    }, mnjkli['EnvConfig'] = null, mnjkli['window'] = null, mnjkli['_preCreateElement'] = null, mnjkli['_inited'] = ![], mnjkli['wxRequest'] = null, mnjkli['systemInfo'] = null, mnjkli['version'] = '0.0.1', mnjkli['isZiYu'] = ![], mnjkli['isPosMsgYu'] = ![], mnjkli['parseXMLFromString'] = function (mnjol) {
      var ecgdfh, _$yxz0;mnjol = mnjol['replace'](/>\s+</g, '><');try {
        ecgdfh = new window['Parser']['DOMParser']()['parseFromString'](mnjol, 'text/xml');
      } catch ($zvxwy) {
        throw '需要引入xml解析库文件';
      }return ecgdfh;
    }, mnjkli['idx'] = 0x1, mnjkli;
  }(),
      xytvuw = function () {
    function uzvxy() {}lhmik(uzvxy, 'laya.wx.mini.MiniImage');var npqmor = uzvxy['prototype'];return npqmor['_loadImage'] = function (bceaf) {
      var hifdeg = this,
          kmjno = ![];bceaf['indexOf']('layaNativeDir/') == -0x1 && (kmjno = !![], bceaf = mjhlik['formatURL'](bceaf));if (!aebdfc['getFileInfo'](bceaf)) {
        if (bceaf['indexOf']('http://') != -0x1 || bceaf['indexOf']('https://') != -0x1) aebdfc['downImg'](bceaf, new _z$12(uzvxy, uzvxy['onDownImgCallBack'], [bceaf, hifdeg]), bceaf);else uzvxy['onCreateImage'](bceaf, hifdeg, !![]);
      } else uzvxy['onCreateImage'](bceaf, hifdeg, !kmjno);
    }, uzvxy['onDownImgCallBack'] = function (cegfd, jnik, dhegfc) {
      if (!dhegfc) uzvxy['onCreateImage'](cegfd, jnik);else jnik['onError'](null);
    }, uzvxy['onCreateImage'] = function (tsrqpo, rpqsut, _12$30) {
      _12$30 === void 0x0 && (_12$30 = ![]);var prm;if (!_12$30) {
        var urtvs = aebdfc['getFileInfo'](tsrqpo),
            okplm = urtvs['md5'];prm = aebdfc['getFileNativePath'](okplm);
      } else prm = tsrqpo;if (rpqsut['imgCache'] == null) rpqsut['imgCache'] = {};var $01z2;function x$vwz() {
        $01z2['onload'] = null, $01z2['onerror'] = null, delete rpqsut['imgCache'][tsrqpo];
      };var qosp = function () {
        x$vwz(), rpqsut['onLoaded']($01z2);
      },
          uwzvx = function () {
        x$vwz(), rpqsut['event']('error', 'Load image failed');
      };rpqsut['_type'] == 'nativeimage' ? ($01z2 = new lmnkji['window']['Image'](), $01z2['crossOrigin'] = '', $01z2['onload'] = qosp, $01z2['onerror'] = uwzvx, $01z2['src'] = prm, rpqsut['imgCache'][tsrqpo] = $01z2) : new kjilhm['create'](prm, { 'onload': qosp, 'onerror': uwzvx, 'onCreate': function (fgebcd) {
          $01z2 = fgebcd, rpqsut['imgCache'][tsrqpo] = fgebcd;
        } });
    }, uzvxy;
  }(),
      konmlp = function () {
    function eacbd() {}return lhmik(eacbd, 'laya.wx.mini.MiniInput'), eacbd['_createInputElement'] = function () {
      fghd['_initInput'](fghd['area'] = lmnkji['createElement']('textarea')), fghd['_initInput'](fghd['input'] = lmnkji['createElement']('input')), fghd['inputContainer'] = lmnkji['createElement']('div'), fghd['inputContainer']['style']['position'] = 'absolute', fghd['inputContainer']['style']['zIndex'] = 0x186a0, lmnkji['container']['appendChild'](fghd['inputContainer']), fghd['inputContainer']['setPos'] = function (fehid, mjkln) {
        fghd['inputContainer']['style']['left'] = fehid + 'px', fghd['inputContainer']['style']['top'] = mjkln + 'px';
      }, _0321$['stage']['on']('resize', null, eacbd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rsno) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), srtuv['_soundClass'] = $x0z, srtuv['_musicClass'] = $x0z;
    }, eacbd['_onStageResize'] = function () {
      var $zyx0 = _0321$['stage']['_canvasTransform']['identity']();$zyx0['scale'](lmnkji['width'] / z0_21['canvas']['width'] / trwsv['getPixelRatio'](), lmnkji['height'] / z0_21['canvas']['height'] / trwsv['getPixelRatio']());
    }, eacbd['wxinputFocus'] = function (qpmnor) {
      var gdfc = fghd['inputElement']['target'];if (gdfc && !gdfc['editable']) return;omlnkj['window']['wx']['offKeyboardConfirm'](), omlnkj['window']['wx']['offKeyboardInput'](), omlnkj['window']['wx']['showKeyboard']({ 'defaultValue': gdfc['text'], 'maxLength': gdfc['maxChars'], 'multiple': gdfc['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (cfegd) {}, 'fail': function (_2341) {} }), omlnkj['window']['wx']['onKeyboardConfirm'](function (mqon) {
        var hfidg = mqon ? mqon['value'] : '';gdfc['text'] = hfidg, gdfc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), omlnkj['window']['wx']['onKeyboardInput'](function ($_xzy) {
        var uxyzwv = $_xzy ? $_xzy['value'] : '';if (!gdfc['multiline']) {
          if (uxyzwv['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gdfc['text'] = uxyzwv, gdfc['event']('input');
      });
    }, eacbd['inputEnter'] = function () {
      fghd['inputElement']['target']['focus'] = ![];
    }, eacbd['wxinputblur'] = function () {
      eacbd['hideKeyboard']();
    }, eacbd['hideKeyboard'] = function () {
      omlnkj['window']['wx']['offKeyboardConfirm'](), omlnkj['window']['wx']['offKeyboardInput'](), omlnkj['window']['wx']['hideKeyboard']({ 'success': function (tquspr) {
          console['log']('隐藏键盘');
        }, 'fail': function (_0124) {
          console['log']('隐藏键盘出错:' + (_0124 ? _0124['errMsg'] : ''));
        } });
    }, eacbd;
  }(),
      olpnmq = function () {
    function afdeb() {}lhmik(afdeb, 'laya.wx.mini.MiniLoader');var fihgd = afdeb['prototype'];return fihgd['load'] = function (tuvq, $2z0, z02$1, fhceg, jnlm) {
      z02$1 === void 0x0 && (z02$1 = !![]), jnlm === void 0x0 && (jnlm = ![]);var fdbcg = this;fdbcg['_url'] = tuvq;if (tuvq['indexOf']('data:image') === 0x0) fdbcg['_type'] = $2z0 = 'image';else fdbcg['_type'] = $2z0 || ($2z0 = fdbcg['getTypeFromUrl'](tuvq));fdbcg['_cache'] = z02$1, fdbcg['_data'] = null;var vutr = 'ascii';if (tuvq['indexOf']('.fnt') != -0x1) vutr = 'utf8';else $2z0 == 'arraybuffer' && (vutr = '');;var qutsrp = $wv['getFileExtension'](tuvq);if (afdeb['_fileTypeArr']['indexOf'](qutsrp) != -0x1) omlnkj['EnvConfig']['load']['call'](this, tuvq, $2z0, z02$1, fhceg, jnlm);else {
        if (!aebdfc['getFileInfo'](tuvq)) {
          if (tuvq['indexOf']('layaNativeDir/') != -0x1) {
            if (omlnkj['isZiYu']) {
              var stqrop = aebdfc['ziyuFileData'][tuvq];fdbcg['onLoaded'](stqrop);return;
            } else {
              cosnole['log']('read read'), aebdfc['read'](tuvq, vutr, new _z$12(afdeb, afdeb['onReadNativeCallBack'], [vutr, tuvq, $2z0, z02$1, fhceg, jnlm, fdbcg]));return;
            }
          }if (mjhlik['rootPath'] == '') var fbecg = tuvq;else fbecg = tuvq['split'](mjhlik['rootPath'])[0x0];tuvq['indexOf']('http://') != -0x1 || tuvq['indexOf']('https://') != -0x1 ? omlnkj['EnvConfig']['load']['call'](fdbcg, tuvq, $2z0, z02$1, fhceg, jnlm) : aebdfc['readFile'](fbecg, vutr, new _z$12(afdeb, afdeb['onReadNativeCallBack'], [vutr, tuvq, $2z0, z02$1, fhceg, jnlm, fdbcg]), tuvq);
        } else omlnkj['EnvConfig']['load']['call'](this, tuvq, $2z0, z02$1, fhceg, jnlm);
      }
    }, fihgd['resMgrLoad'] = function (lqopm, qptsor, jlihk, qtrpos, fcgehd, hfcegd, zuvx) {
      jlihk === void 0x0 && (jlihk = 0x0), qtrpos === void 0x0 && (qtrpos = ![]), fcgehd === void 0x0 && (fcgehd = ![]), hfcegd === void 0x0 && (hfcegd = 0x0), zuvx === void 0x0 && (zuvx = 0x3), lqopm['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', lqopm), omlnkj['EnvConfig']['resMgrLoad'](lqopm, (dghcef, loq, kmjilh) => {
        afdeb['prototype']['resMgrLoadCallBack'](dghcef, loq, kmjilh, qptsor);
      }, jlihk, qtrpos, fcgehd, hfcegd, zuvx);
    }, fihgd['resMgrLoadCallBack'] = function (prqns, mopqn, $2_z0, hejf) {
      console['log']('buff:::', prqns, $2_z0, aebdfc['fileNativeDir'] + '///' + aebdfc['fileListName']), hejf(prqns, mopqn, $2_z0);
    }, fihgd['clearRes'] = function (qsvut, jknmol) {
      jknmol === void 0x0 && (jknmol = ![]);var _$2103 = this;_$2103['clearRes'](qsvut, jknmol);var nkjmol = aebdfc['getFileInfo'](qsvut);if (nkjmol && (qsvut['indexOf']('http://') != -0x1 || qsvut['indexOf']('https://') != -0x1)) {
        var xz_0 = nkjmol['md5'],
            z$20_ = aebdfc['getFileNativePath'](xz_0);aebdfc['remove'](z$20_);
      }
    }, afdeb['onReadNativeCallBack'] = function (qstpor, uxwvzy, wyut, omnqlp, ijfhe, pqno, $wzxy, gkiljh, cfeb) {
      omnqlp === void 0x0 && (omnqlp = !![]), pqno === void 0x0 && (pqno = ![]), gkiljh === void 0x0 && (gkiljh = 0x0);if (!gkiljh) {
        var urstvq;if (wyut == 'json' || wyut == 'atlas') urstvq = omlnkj['getJson'](cfeb['data']);else wyut == 'xml' ? urstvq = $wv['parseXMLFromString'](cfeb['data']) : urstvq = cfeb['data'];$wzxy['onLoaded'](urstvq), !omlnkj['isZiYu'] && omlnkj['isPosMsgYu'] && wyut != 'arraybuffer' && wx['postMessage']({ 'url': uxwvzy, 'data': urstvq, 'isLoad': !![] });
      } else gkiljh == 0x1 && omlnkj['EnvConfig']['load']['call']($wzxy, uxwvzy, wyut, omnqlp, ijfhe, pqno);
    }, klimh(afdeb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), afdeb;
  }(),
      aebdfc = function (onmj) {
    function mlnkij() {
      mlnkij['__super']['call'](this);;
    }return lhmik(mlnkij, 'laya.wx.mini.MiniFileMgr', onmj), mlnkij['isLoadFile'] = function (lonpk) {
      return mlnkij['_fileTypeArr']['indexOf'](lonpk) != -0x1 ? !![] : ![];
    }, mlnkij['getFileInfo'] = function (kmo) {
      var zvxyw$ = kmo['split']('?')[0x0],
          sxvtu = mlnkij['filesListObj'][zvxyw$];if (sxvtu == null) return null;else return sxvtu;return null;
    }, mlnkij['onFileUpdate'] = function (stw, acdfbe) {
      var nqsrpo = stw['split']('/'),
          y$xzv = nqsrpo[nqsrpo['length'] - 0x1],
          ghfkij = mlnkij['getFileInfo'](acdfbe);if (ghfkij == null) mlnkij['onSaveFile'](acdfbe, y$xzv);else {
        if (ghfkij['readyUrl'] != acdfbe) mlnkij['remove'](y$xzv, acdfbe);
      }
    }, mlnkij['exits'] = function (swruv, lmoknp) {
      var nmilj = mlnkij['getFileNativePath'](swruv);mlnkij['fs']['getFileInfo']({ 'filePath': nmilj, 'success': function (ilhjkm) {
          lmoknp != null && lmoknp['runWith']([0x0, ilhjkm]);
        }, 'fail': function (wsvrut) {
          lmoknp != null && lmoknp['runWith']([0x1, wsvrut]);
        } });
    }, mlnkij['read'] = function (hkgfi, _$0z1y, $y_01z, fkghij) {
      _$0z1y === void 0x0 && (_$0z1y = 'ascill'), fkghij === void 0x0 && (fkghij = '');var opmkl;fkghij != '' ? opmkl = mlnkij['getFileNativePath'](hkgfi) : opmkl = hkgfi, mlnkij['fs']['readFile']({ 'filePath': opmkl, 'encoding': _$0z1y, 'success': function (qromnp) {
          $y_01z != null && $y_01z['runWith']([0x0, qromnp]);
        }, 'fail': function (_$zy) {
          if (_$zy && fkghij != '') mlnkij['down'](fkghij, _$0z1y, $y_01z, fkghij);else $y_01z != null && $y_01z['runWith']([0x1]);
        } });
    }, mlnkij['readNativeFile'] = function (tqrus, okmpl) {
      mlnkij['fs']['readFile']({ 'filePath': tqrus, 'encoding': '', 'success': function (fgedc) {
          okmpl != null && okmpl['runWith']([0x0]);
        }, 'fail': function (cdfeb) {
          okmpl != null && okmpl['runWith']([0x1]);
        } });
    }, mlnkij['down'] = function (efbacd, qsutrv, cedfab, gcf) {
      qsutrv === void 0x0 && (qsutrv = 'ascill'), gcf === void 0x0 && (gcf = '');var linmk = mlnkij['getFileNativePath'](gcf),
          ejgif = mlnkij['wxdown']({ 'url': efbacd, 'filePath': linmk, 'success': function (lnokjm) {
          if (lnokjm['statusCode'] === 0xc8) mlnkij['readFile'](lnokjm['filePath'], qsutrv, cedfab, gcf);
        }, 'fail': function (baecf) {
          cedfab != null && cedfab['runWith']([0x1, baecf]);
        } });ejgif['onProgressUpdate'](function (gcdbe) {
        cedfab != null && cedfab['runWith']([0x2, gcdbe['progress']]);
      });
    }, mlnkij['readFile'] = function (x_$0yz, urtwsv, txuwv, nimlk) {
      urtwsv === void 0x0 && (urtwsv = 'ascill'), nimlk === void 0x0 && (nimlk = ''), mlnkij['fs']['readFile']({ 'filePath': x_$0yz, 'encoding': urtwsv, 'success': function (hjkim) {
          if (x_$0yz['indexOf']('http://') != -0x1 || x_$0yz['indexOf']('https://') != -0x1) mlnkij['onFileUpdate'](x_$0yz, nimlk);txuwv != null && txuwv['runWith']([0x0, hjkim]);
        }, 'fail': function (edhigf) {
          if (edhigf) txuwv != null && txuwv['runWith']([0x1, edhigf]);
        } });
    }, mlnkij['downImg'] = function (hfedig, mnolpk, kifjh) {
      kifjh === void 0x0 && (kifjh = '');var xwuvy = mlnkij['wxdown']({ 'url': hfedig, 'success': function (rsqtu) {
          rsqtu['statusCode'] === 0xc8 && mlnkij['copyFile'](rsqtu['tempFilePath'], kifjh, mnolpk);
        }, 'fail': function (yzxvwu) {
          mnolpk != null && mnolpk['runWith']([0x1, yzxvwu]);
        } });
    }, mlnkij['copyFile'] = function (qvsur, fhjge, jkhig) {
      var ecgd = qvsur['split']('/'),
          xvzuwy = ecgd[ecgd['length'] - 0x1],
          ebadfc = fhjge['split']('?')[0x0],
          hfkgji = mlnkij['getFileInfo'](fhjge),
          cfdae = mlnkij['getFileNativePath'](xvzuwy);mlnkij['fs']['copyFile']({ 'srcPath': qvsur, 'destPath': cfdae, 'success': function (klinm) {
          if (!hfkgji) mlnkij['onSaveFile'](fhjge, xvzuwy), jkhig != null && jkhig['runWith']([0x0]);else {
            if (hfkgji['readyUrl'] != fhjge) mlnkij['remove'](xvzuwy, fhjge, jkhig);
          }
        }, 'fail': function (hjegf) {
          jkhig != null && jkhig['runWith']([0x1, hjegf]);
        } });
    }, mlnkij['getFileNativePath'] = function (psonr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + psonr;
    }, mlnkij['remove'] = function (iedfhg, hjifkg, njkil) {
      hjifkg === void 0x0 && (hjifkg = '');var posrnq = mlnkij['getFileInfo'](hjifkg),
          wusr = mlnkij['getFileNativePath'](posrnq['md5']);_0321$['loader']['clearRes'](posrnq['readyUrl']), mlnkij['fs']['unlink']({ 'filePath': wusr, 'success': function (efbd) {
          if (hjifkg != '') mlnkij['onSaveFile'](hjifkg, iedfhg);njkil != null && njkil['runWith']([0x0]);
        }, 'fail': function (z1$_02) {} });
    }, mlnkij['onSaveFile'] = function (kghifj, ojn) {
      var lmnokp = kghifj['split']('?')[0x0];mlnkij['filesListObj'][lmnokp] = { 'md5': ojn, 'readyUrl': kghifj }, mlnkij['fs']['writeFile']({ 'filePath': mlnkij['fileNativeDir'] + '/' + mlnkij['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mlnkij['filesListObj']), 'success': function (qtvsu) {
          console['log']('写入测试测试成功：', qtvsu);
        }, 'fail': function (vusxtw) {
          console['log']('写入测试测试失败：', vusxtw);
        } });
    }, mlnkij['existDir'] = function (mknjlo, uwyz) {
      mlnkij['fs']['mkdir']({ 'dirPath': mknjlo, 'success': function (z$_xw) {
          uwyz != null && uwyz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fba) {
          if (fba['errMsg']['indexOf']('file already exists') != -0x1) mlnkij['readSync'](mlnkij['fileListName'], 'utf8', uwyz);else uwyz != null && uwyz['runWith']([0x1, fba]);
        } });
    }, mlnkij['readSync'] = function (uyxtwv, nopql, cegdfb, suvx) {
      nopql === void 0x0 && (nopql = 'ascill'), suvx === void 0x0 && (suvx = '');var soqpr = mlnkij['getFileNativePath'](uyxtwv),
          sprtqu;try {
        sprtqu = mlnkij['fs']['readFileSync'](soqpr), cegdfb != null && cegdfb['runWith']([0x0, { 'data': sprtqu }]);
      } catch (trqpus) {
        cegdfb != null && cegdfb['runWith']([0x1]);
      }
    }, mlnkij['readCache'] = function () {}, mlnkij['writeCache'] = function (_1$2z0) {
      var lmij = readyUrl['split']('?')[0x0];mlnkij['filesListObj'][lmij] = { 'md5': md5Name, 'readyUrl': readyUrl }, mlnkij['fs']['writeFile']({ 'filePath': mlnkij['fileNativeDir'] + '/' + mlnkij['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mlnkij['filesListObj']), 'success': function (eghjf) {}, 'fail': function (vy$wz) {} });
    }, mlnkij['setNativeFileDir'] = function (gefi) {
      mlnkij['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gefi;
    }, mlnkij['filesListObj'] = {}, mlnkij['fileNativeDir'] = null, mlnkij['fileListName'] = 'layaairfiles.txt', mlnkij['ziyuFileData'] = {}, klimh(mlnkij, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mlnkij;
  }(nps),
      $x0z = function (zx_$0y) {
    function zxuyv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], zxuyv['__super']['call'](this), this['_sound'] = zxuyv['_createSound']();
    }lhmik(zxuyv, 'laya.wx.mini.MiniSound', zx_$0y);var osrpt = zxuyv['prototype'];return osrpt['load'] = function (gechfd) {
      var _$wyxz = this;gechfd = mjhlik['formatURL'](gechfd), this['url'] = gechfd;if (zxuyv['_audioCache'][gechfd]) {
        this['event']('complete');return;
      }function srvtqu() {
        if (zxuyv['_null'] != undefined) _$wyxz['_sound']['onCanplay'](zxuyv['_null']), _$wyxz['_sound']['onError'](zxuyv['_null']);else try {
          _$wyxz['_sound']['onCanplay'](null), _$wyxz['_sound']['onError'](null), zxuyv['_null'] = null;
        } catch (y$vxzw) {
          console['warn']('[wxmini] _clearSound:' + y$vxzw), _$wyxz['_sound']['onCanplay'](lopmk), _$wyxz['_sound']['onError'](lopmk), zxuyv['_null'] = lopmk;
        }
      }function $_yxwz() {
        srvtqu(), gjfeh['loaded'] = !![], gjfeh['event']('complete'), zxuyv['_audioCache'][gjfeh['url']] = gjfeh;
      }function mhijkl(uprtsq) {
        console['error']('errCode=' + uprtsq['errCode'] + '  errMsg=' + uprtsq['errMsg']), srvtqu(), gjfeh['event']('error');
      }function lopmk() {}this['_sound']['onCanplay']($_yxwz), this['_sound']['onError'](mhijkl), this['_sound']['src'] = gechfd;var gjfeh = this;
    }, osrpt['play'] = function (njolkm, polnk) {
      njolkm === void 0x0 && (njolkm = 0x0), polnk === void 0x0 && (polnk = 0x0);var mplkn;if (this['url'] == srtuv['_tMusic']) {
        if (!zxuyv['_musicAudio']) zxuyv['_musicAudio'] = zxuyv['_createSound']();mplkn = zxuyv['_musicAudio'];
      } else mplkn = zxuyv['_createSound']();mplkn['src'] = this['url'];var mliknj = new $_y1z(mplkn);return mliknj['url'] = this['url'], mliknj['loops'] = polnk, mliknj['startTime'] = njolkm, mliknj['play'](), srtuv['addChannel'](mliknj), mliknj;
    }, osrpt['dispose'] = function () {
      var $xyv = zxuyv['_audioCache'][this['url']];$xyv && ($xyv['src'] = '', delete zxuyv['_audioCache'][this['url']]);
    }, gecfhd(0x0, osrpt, 'duration', function () {
      return this['_sound']['duration'];
    }), zxuyv['_createSound'] = function () {
      return zxuyv['_id']++, omlnkj['window']['wx']['createInnerAudioContext']();
    }, zxuyv['_musicAudio'] = null, zxuyv['_id'] = 0x0, zxuyv['_audioCache'] = {}, zxuyv['_null'] = undefined, zxuyv;
  }(nps),
      $_y1z = function ($xyz_0) {
    function klimjh(fhgedi) {
      this['_audio'] = null, this['_onEnd'] = null, klimjh['__super']['call'](this), this['_audio'] = fhgedi, this['_onEnd'] = $wv['bind'](this['__onEnd'], this), fhgedi['onEnded'](this['_onEnd']);
    }lhmik(klimjh, 'laya.wx.mini.MiniSoundChannel', $xyz_0);var $x_z0 = klimjh['prototype'];return $x_z0['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_0321$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $x_z0['__onNull'] = function () {}, $x_z0['play'] = function () {
      this['isStopped'] = ![], srtuv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $x_z0['stop'] = function () {
      this['isStopped'] = !![], srtuv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (klimjh['_null'] != undefined) this['_audio']['onEnded'](klimjh['_null']);else try {
        this['_audio']['onEnded'](null), klimjh['_null'] = null;
      } catch (vwuzx) {
        console['warn']('[wxmini] stop:' + vwuzx), this['_audio']['onEnded']($wv['bind'](this['__onNull'], this)), klimjh['_null'] = $wv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $x_z0['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $x_z0['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], srtuv['addChannel'](this), this['_audio']['play']();
    }, gecfhd(0x0, $x_z0, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), gecfhd(0x0, $x_z0, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), gecfhd(0x0, $x_z0, 'volume', function () {
      return 0x1;
    }, function (zw$yx) {}), klimjh['_null'] = undefined, klimjh;
  }(vtx);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dbefac in Laya) {
    var vtrqus = Laya[dbefac];vtrqus && vtrqus['__isclass'] && (exports[dbefac] = vtrqus);
  }
});