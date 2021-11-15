var _ = wx.y$;
(function (window, document, $_3102) {
  var knoplm = $_3102['un'],
      cbfeg = $_3102['uns'],
      rqvut = $_3102['static'],
      xwvs = $_3102['class'],
      toqsp = $_3102['getset'],
      _z10y$ = $_3102['__newvec'],
      kmni = laya['utils']['Browser'],
      $y01 = laya['events']['Event'],
      struqv = laya['events']['EventDispatcher'],
      lmijkn = laya['resource']['HTMLImage'],
      urswtv = laya['utils']['Handler'],
      fgeh = laya['display']['Input'],
      igefdh = laya['net']['Loader'],
      dcab = laya['maths']['Matrix'],
      gefji = laya['renders']['Render'],
      ljghik = laya['utils']['RunDriver'],
      aebdc = laya['media']['Sound'],
      ponlm = laya['media']['SoundChannel'],
      ighfkj = laya['media']['SoundManager'],
      hfgijk = laya['display']['Stage'],
      lhk = laya['net']['URL'],
      snq = laya['utils']['Utils'],
      nqpl = function () {
    function y$_z10() {}return xwvs(y$_z10, 'laya.wx.mini.MiniAdpter'), y$_z10['getJson'] = function (npqmr) {
      return JSON['parse'](npqmr);
    }, y$_z10['init'] = function (z$_2, npql) {
      z$_2 === void 0x0 && (z$_2 = ![]), npql === void 0x0 && (npql = ![]);if (y$_z10['_inited']) return;y$_z10['window'] = window;if (y$_z10['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;y$_z10['_inited'] = !![], y$_z10['isZiYu'] = npql, y$_z10['isPosMsgYu'] = z$_2, y$_z10['EnvConfig'] = {}, !y$_z10['isZiYu'] && (ecdhgf['setNativeFileDir']('/layaairGame'), ecdhgf['existDir'](ecdhgf['fileNativeDir'], urswtv['create'](y$_z10, y$_z10['onMkdirCallBack']))), y$_z10['window']['focus'] = function () {}, $_3102['getUrlPath'] = function () {}, y$_z10['window']['logtime'] = function (v$yxz) {}, y$_z10['window']['alertTimeLog'] = function (_0214) {}, y$_z10['window']['resetShareInfo'] = function () {}, y$_z10['window']['CanvasRenderingContext2D'] = function () {}, y$_z10['window']['CanvasRenderingContext2D']['prototype'] = y$_z10['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y$_z10['window']['document']['body']['appendChild'] = function () {}, y$_z10['EnvConfig']['pixelRatioInt'] = 0x0, ljghik['getPixelRatio'] = y$_z10['pixelRatio'], y$_z10['_preCreateElement'] = kmni['createElement'], kmni['createElement'] = y$_z10['createElement'], ljghik['createShaderCondition'] = y$_z10['createShaderCondition'], snq['parseXMLFromString'] = y$_z10['parseXMLFromString'], fgeh['_createInputElement'] = vwrstu['_createInputElement'], y$_z10['EnvConfig']['load'] = igefdh['prototype']['load'], igefdh['prototype']['load'] = jghikl['prototype']['load'], y$_z10['isZiYu'] && z$_2 && wx['onMessage'](function (nik) {
        nik['isLoad'] && (ecdhgf['ziyuFileData'][nik['url']] = nik['data']);
      });
    }, y$_z10['onMkdirCallBack'] = function (ehgifd, svtxu) {
      if (!ehgifd) ecdhgf['filesListObj'] = JSON['parse'](svtxu['data']);
    }, y$_z10['pixelRatio'] = function () {
      if (!y$_z10['EnvConfig']['pixelRatioInt']) try {
        var mhikj = wx['getSystemInfoSync']();return y$_z10['EnvConfig']['pixelRatioInt'] = mhikj['pixelRatio'], mhikj = mhikj, mhikj['pixelRatio'];
      } catch (wyxt) {}return y$_z10['EnvConfig']['pixelRatioInt'];
    }, y$_z10['createElement'] = function (egcbfd) {
      if (egcbfd == 'canvas') {
        var nmjkol;return y$_z10['idx'] == 0x1 ? y$_z10['isZiYu'] ? (nmjkol = sharedCanvas, nmjkol['style'] = {}) : nmjkol = window['canvas'] : nmjkol = window['wx']['createCanvas'](), y$_z10['idx']++, nmjkol;
      } else {
        if (egcbfd == 'textarea' || egcbfd == 'input') return y$_z10['onCreateInput'](egcbfd);else {
          if (egcbfd == 'div') {
            var ijlnmk = y$_z10['_preCreateElement'](egcbfd);return ijlnmk['contains'] = function (rpsuqt) {
              return null;
            }, ijlnmk['removeChild'] = function (_yx$z) {}, ijlnmk;
          } else return y$_z10['_preCreateElement'](egcbfd);
        }
      }
    }, y$_z10['onCreateInput'] = function (cbeda) {
      var knlojm = y$_z10['_preCreateElement'](cbeda);return knlojm['focus'] = vwrstu['wxinputFocus'], knlojm['blur'] = vwrstu['wxinputblur'], knlojm['style'] = {}, knlojm['value'] = 0x0, knlojm['parentElement'] = {}, knlojm['placeholder'] = {}, knlojm['type'] = {}, knlojm['setColor'] = function (qmrno) {}, knlojm['setType'] = function (_zy0$1) {}, knlojm['setFontFace'] = function (ljgki) {}, knlojm['addEventListener'] = function (dgebc) {}, knlojm['contains'] = function ($yz) {
        return null;
      }, knlojm['removeChild'] = function (efd) {}, knlojm;
    }, y$_z10['createShaderCondition'] = function (mnlkop) {
      var hefc = this,
          jlhgk = function () {
        var lkmnij = mnlkop;return hefc[mnlkop['replace']('this.', '')];
      };return jlhgk;
    }, y$_z10['EnvConfig'] = null, y$_z10['window'] = null, y$_z10['_preCreateElement'] = null, y$_z10['_inited'] = ![], y$_z10['wxRequest'] = null, y$_z10['systemInfo'] = null, y$_z10['version'] = '0.0.1', y$_z10['isZiYu'] = ![], y$_z10['isPosMsgYu'] = ![], y$_z10['parseXMLFromString'] = function (x_$zw) {
      var lokjmn, snqo;x_$zw = x_$zw['replace'](/>\s+</g, '><');try {
        lokjmn = new window['Parser']['DOMParser']()['parseFromString'](x_$zw, 'text/xml');
      } catch (jihkml) {
        throw '需要引入xml解析库文件';
      }return lokjmn;
    }, y$_z10['idx'] = 0x1, y$_z10;
  }(),
      defgi = function () {
    function pnqrso() {}xwvs(pnqrso, 'laya.wx.mini.MiniImage');var wtru = pnqrso['prototype'];return wtru['_loadImage'] = function (orqnmp) {
      var rposn = this,
          hdefc = ![];orqnmp['indexOf']('layaNativeDir/') == -0x1 && (hdefc = !![], orqnmp = lhk['formatURL'](orqnmp));if (!ecdhgf['getFileInfo'](orqnmp)) {
        if (orqnmp['indexOf']('http://') != -0x1 || orqnmp['indexOf']('https://') != -0x1) ecdhgf['downImg'](orqnmp, new urswtv(pnqrso, pnqrso['onDownImgCallBack'], [orqnmp, rposn]), orqnmp);else pnqrso['onCreateImage'](orqnmp, rposn, !![]);
      } else pnqrso['onCreateImage'](orqnmp, rposn, !hdefc);
    }, pnqrso['onDownImgCallBack'] = function (fhgje, nlmjki, rqons) {
      if (!rqons) pnqrso['onCreateImage'](fhgje, nlmjki);else nlmjki['onError'](null);
    }, pnqrso['onCreateImage'] = function (ghik, begdcf, hjilm) {
      hjilm === void 0x0 && (hjilm = ![]);var _3$120;if (!hjilm) {
        var qopm = ecdhgf['getFileInfo'](ghik),
            pqrm = qopm['md5'];_3$120 = ecdhgf['getFileNativePath'](pqrm);
      } else _3$120 = ghik;if (begdcf['imgCache'] == null) begdcf['imgCache'] = {};var xyw$vz;function efcdgh() {
        xyw$vz['onload'] = null, xyw$vz['onerror'] = null, delete begdcf['imgCache'][ghik];
      };var vtruqs = function () {
        efcdgh(), begdcf['onLoaded'](xyw$vz);
      },
          idefg = function () {
        efcdgh(), begdcf['event']('error', 'Load image failed');
      };begdcf['_type'] == 'nativeimage' ? (xyw$vz = new kmni['window']['Image'](), xyw$vz['crossOrigin'] = '', xyw$vz['onload'] = vtruqs, xyw$vz['onerror'] = idefg, xyw$vz['src'] = _3$120, begdcf['imgCache'][ghik] = xyw$vz) : new lmijkn['create'](_3$120, { 'onload': vtruqs, 'onerror': idefg, 'onCreate': function ($z0x_) {
          xyw$vz = $z0x_, begdcf['imgCache'][ghik] = $z0x_;
        } });
    }, pnqrso;
  }(),
      vwrstu = function () {
    function nspoq() {}return xwvs(nspoq, 'laya.wx.mini.MiniInput'), nspoq['_createInputElement'] = function () {
      fgeh['_initInput'](fgeh['area'] = kmni['createElement']('textarea')), fgeh['_initInput'](fgeh['input'] = kmni['createElement']('input')), fgeh['inputContainer'] = kmni['createElement']('div'), fgeh['inputContainer']['style']['position'] = 'absolute', fgeh['inputContainer']['style']['zIndex'] = 0x186a0, kmni['container']['appendChild'](fgeh['inputContainer']), fgeh['inputContainer']['setPos'] = function (rsotpq, xtyvu) {
        fgeh['inputContainer']['style']['left'] = rsotpq + 'px', fgeh['inputContainer']['style']['top'] = xtyvu + 'px';
      }, $_3102['stage']['on']('resize', null, nspoq['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (otpsr) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ighfkj['_soundClass'] = jighef, ighfkj['_musicClass'] = jighef;
    }, nspoq['_onStageResize'] = function () {
      var kjfghi = $_3102['stage']['_canvasTransform']['identity']();kjfghi['scale'](kmni['width'] / gefji['canvas']['width'] / ljghik['getPixelRatio'](), kmni['height'] / gefji['canvas']['height'] / ljghik['getPixelRatio']());
    }, nspoq['wxinputFocus'] = function (khigfj) {
      var x0zy_$ = fgeh['inputElement']['target'];if (x0zy_$ && !x0zy_$['editable']) return;nqpl['window']['wx']['offKeyboardConfirm'](), nqpl['window']['wx']['offKeyboardInput'](), nqpl['window']['wx']['showKeyboard']({ 'defaultValue': x0zy_$['text'], 'maxLength': x0zy_$['maxChars'], 'multiple': x0zy_$['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (moqpnr) {}, 'fail': function (wtsvr) {} }), nqpl['window']['wx']['onKeyboardConfirm'](function (kjghl) {
        var okjlm = kjghl ? kjghl['value'] : '';x0zy_$['text'] = okjlm, x0zy_$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nqpl['window']['wx']['onKeyboardInput'](function ($vyxw) {
        var hjmkil = $vyxw ? $vyxw['value'] : '';if (!x0zy_$['multiline']) {
          if (hjmkil['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x0zy_$['text'] = hjmkil, x0zy_$['event']('input');
      });
    }, nspoq['inputEnter'] = function () {
      fgeh['inputElement']['target']['focus'] = ![];
    }, nspoq['wxinputblur'] = function () {
      nspoq['hideKeyboard']();
    }, nspoq['hideKeyboard'] = function () {
      nqpl['window']['wx']['offKeyboardConfirm'](), nqpl['window']['wx']['offKeyboardInput'](), nqpl['window']['wx']['hideKeyboard']({ 'success': function (okp) {
          console['log']('隐藏键盘');
        }, 'fail': function (utvsw) {
          console['log']('隐藏键盘出错:' + (utvsw ? utvsw['errMsg'] : ''));
        } });
    }, nspoq;
  }(),
      jghikl = function () {
    function eidhgf() {}xwvs(eidhgf, 'laya.wx.mini.MiniLoader');var y01z$ = eidhgf['prototype'];return y01z$['load'] = function (kljnom, dgfce, ecdf, $03_21, geihf) {
      ecdf === void 0x0 && (ecdf = !![]), geihf === void 0x0 && (geihf = ![]);var egfhd = this;egfhd['_url'] = kljnom;if (kljnom['indexOf']('data:image') === 0x0) egfhd['_type'] = dgfce = 'image';else egfhd['_type'] = dgfce || (dgfce = egfhd['getTypeFromUrl'](kljnom));egfhd['_cache'] = ecdf, egfhd['_data'] = null;var mrnqpo = 'ascii';if (kljnom['indexOf']('.fnt') != -0x1) mrnqpo = 'utf8';else dgfce == 'arraybuffer' && (mrnqpo = '');;var khmj = snq['getFileExtension'](kljnom);if (eidhgf['_fileTypeArr']['indexOf'](khmj) != -0x1) nqpl['EnvConfig']['load']['call'](this, kljnom, dgfce, ecdf, $03_21, geihf);else {
        if (!ecdhgf['getFileInfo'](kljnom)) {
          if (kljnom['indexOf']('layaNativeDir/') != -0x1) {
            if (nqpl['isZiYu']) {
              var knomp = ecdhgf['ziyuFileData'][kljnom];egfhd['onLoaded'](knomp);return;
            } else {
              cosnole['log']('read read'), ecdhgf['read'](kljnom, mrnqpo, new urswtv(eidhgf, eidhgf['onReadNativeCallBack'], [mrnqpo, kljnom, dgfce, ecdf, $03_21, geihf, egfhd]));return;
            }
          }if (lhk['rootPath'] == '') var wvtsu = kljnom;else wvtsu = kljnom['split'](lhk['rootPath'])[0x0];kljnom['indexOf']('http://') != -0x1 || kljnom['indexOf']('https://') != -0x1 ? nqpl['EnvConfig']['load']['call'](egfhd, kljnom, dgfce, ecdf, $03_21, geihf) : ecdhgf['readFile'](wvtsu, mrnqpo, new urswtv(eidhgf, eidhgf['onReadNativeCallBack'], [mrnqpo, kljnom, dgfce, ecdf, $03_21, geihf, egfhd]), kljnom);
        } else nqpl['EnvConfig']['load']['call'](this, kljnom, dgfce, ecdf, $03_21, geihf);
      }
    }, y01z$['resMgrLoad'] = function (x0z$_y, v$, khml, ompqrn, hegcdf, _03$2, mjolnk) {
      khml === void 0x0 && (khml = 0x0), ompqrn === void 0x0 && (ompqrn = ![]), hegcdf === void 0x0 && (hegcdf = ![]), _03$2 === void 0x0 && (_03$2 = 0x0), mjolnk === void 0x0 && (mjolnk = 0x3), x0z$_y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x0z$_y), nqpl['EnvConfig']['resMgrLoad'](x0z$_y, (xzwvyu, glikhj, jiehg) => {
        eidhgf['prototype']['resMgrLoadCallBack'](xzwvyu, glikhj, jiehg, v$);
      }, khml, ompqrn, hegcdf, _03$2, mjolnk);
    }, y01z$['resMgrLoadCallBack'] = function (mlpnko, mkopl, efgdcb, $1zy0_) {
      console['log']('buff:::', mlpnko, efgdcb, ecdhgf['fileNativeDir'] + '///' + ecdhgf['fileListName']), $1zy0_(mlpnko, mkopl, efgdcb);
    }, y01z$['clearRes'] = function (cdhef, jglhik) {
      jglhik === void 0x0 && (jglhik = ![]);var wtyu = this;wtyu['clearRes'](cdhef, jglhik);var hdigf = ecdhgf['getFileInfo'](cdhef);if (hdigf && (cdhef['indexOf']('http://') != -0x1 || cdhef['indexOf']('https://') != -0x1)) {
        var vxyzu = hdigf['md5'],
            efabdc = ecdhgf['getFileNativePath'](vxyzu);ecdhgf['remove'](efabdc);
      }
    }, eidhgf['onReadNativeCallBack'] = function (usqtr, miklhj, toqp, milhjk, chgedf, uyxzvw, lhig, poqsn, bfgdce) {
      milhjk === void 0x0 && (milhjk = !![]), uyxzvw === void 0x0 && (uyxzvw = ![]), poqsn === void 0x0 && (poqsn = 0x0);if (!poqsn) {
        var iegfhj;if (toqp == 'json' || toqp == 'atlas') iegfhj = nqpl['getJson'](bfgdce['data']);else toqp == 'xml' ? iegfhj = snq['parseXMLFromString'](bfgdce['data']) : iegfhj = bfgdce['data'];lhig['onLoaded'](iegfhj), !nqpl['isZiYu'] && nqpl['isPosMsgYu'] && toqp != 'arraybuffer' && wx['postMessage']({ 'url': miklhj, 'data': iegfhj, 'isLoad': !![] });
      } else poqsn == 0x1 && nqpl['EnvConfig']['load']['call'](lhig, miklhj, toqp, milhjk, chgedf, uyxzvw);
    }, rqvut(eidhgf, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), eidhgf;
  }(),
      ecdhgf = function (fechd) {
    function qpsutr() {
      qpsutr['__super']['call'](this);;
    }return xwvs(qpsutr, 'laya.wx.mini.MiniFileMgr', fechd), qpsutr['isLoadFile'] = function (xzyuw) {
      return qpsutr['_fileTypeArr']['indexOf'](xzyuw) != -0x1 ? !![] : ![];
    }, qpsutr['getFileInfo'] = function (uvwyx) {
      var vrstw = uvwyx['split']('?')[0x0],
          opmnqr = qpsutr['filesListObj'][vrstw];if (opmnqr == null) return null;else return opmnqr;return null;
    }, qpsutr['onFileUpdate'] = function (qnmo, bfgec) {
      var yxuzv = qnmo['split']('/'),
          difhge = yxuzv[yxuzv['length'] - 0x1],
          okmnjl = qpsutr['getFileInfo'](bfgec);if (okmnjl == null) qpsutr['onSaveFile'](bfgec, difhge);else {
        if (okmnjl['readyUrl'] != bfgec) qpsutr['remove'](difhge, bfgec);
      }
    }, qpsutr['exits'] = function (nrq, x_$y) {
      var vwzx$y = qpsutr['getFileNativePath'](nrq);qpsutr['fs']['getFileInfo']({ 'filePath': vwzx$y, 'success': function (fdgih) {
          x_$y != null && x_$y['runWith']([0x0, fdgih]);
        }, 'fail': function (trqpu) {
          x_$y != null && x_$y['runWith']([0x1, trqpu]);
        } });
    }, qpsutr['read'] = function (jnmkl, wz$vx, kmlij, eacfdb) {
      wz$vx === void 0x0 && (wz$vx = 'ascill'), eacfdb === void 0x0 && (eacfdb = '');var $vyw;eacfdb != '' ? $vyw = qpsutr['getFileNativePath'](jnmkl) : $vyw = jnmkl, qpsutr['fs']['readFile']({ 'filePath': $vyw, 'encoding': wz$vx, 'success': function (ljonm) {
          kmlij != null && kmlij['runWith']([0x0, ljonm]);
        }, 'fail': function (zy0$) {
          if (zy0$ && eacfdb != '') qpsutr['down'](eacfdb, wz$vx, kmlij, eacfdb);else kmlij != null && kmlij['runWith']([0x1]);
        } });
    }, qpsutr['readNativeFile'] = function (iegjhf, uptqsr) {
      qpsutr['fs']['readFile']({ 'filePath': iegjhf, 'encoding': '', 'success': function (onqlpm) {
          uptqsr != null && uptqsr['runWith']([0x0]);
        }, 'fail': function (gdef) {
          uptqsr != null && uptqsr['runWith']([0x1]);
        } });
    }, qpsutr['down'] = function (cefg, qnpmo, $0zy, urvqst) {
      qnpmo === void 0x0 && (qnpmo = 'ascill'), urvqst === void 0x0 && (urvqst = '');var sqopnr = qpsutr['getFileNativePath'](urvqst),
          yxzw$_ = qpsutr['wxdown']({ 'url': cefg, 'filePath': sqopnr, 'success': function (cgfhed) {
          if (cgfhed['statusCode'] === 0xc8) qpsutr['readFile'](cgfhed['filePath'], qnpmo, $0zy, urvqst);
        }, 'fail': function (bdceg) {
          $0zy != null && $0zy['runWith']([0x1, bdceg]);
        } });yxzw$_['onProgressUpdate'](function (wtrsuv) {
        $0zy != null && $0zy['runWith']([0x2, wtrsuv['progress']]);
      });
    }, qpsutr['readFile'] = function (xtsu, mkinlj, pnmrqo, _z$x) {
      mkinlj === void 0x0 && (mkinlj = 'ascill'), _z$x === void 0x0 && (_z$x = ''), qpsutr['fs']['readFile']({ 'filePath': xtsu, 'encoding': mkinlj, 'success': function (rpsqto) {
          if (xtsu['indexOf']('http://') != -0x1 || xtsu['indexOf']('https://') != -0x1) qpsutr['onFileUpdate'](xtsu, _z$x);pnmrqo != null && pnmrqo['runWith']([0x0, rpsqto]);
        }, 'fail': function (wusxvt) {
          if (wusxvt) pnmrqo != null && pnmrqo['runWith']([0x1, wusxvt]);
        } });
    }, qpsutr['downImg'] = function (utyxwv, jimkl, cdf) {
      cdf === void 0x0 && (cdf = '');var jnmlki = qpsutr['wxdown']({ 'url': utyxwv, 'success': function (edfc) {
          edfc['statusCode'] === 0xc8 && qpsutr['copyFile'](edfc['tempFilePath'], cdf, jimkl);
        }, 'fail': function (utwsxv) {
          jimkl != null && jimkl['runWith']([0x1, utwsxv]);
        } });
    }, qpsutr['copyFile'] = function (turpq, kfijg, xwstvu) {
      var yxwz_ = turpq['split']('/'),
          polmnq = yxwz_[yxwz_['length'] - 0x1],
          ecgfdh = kfijg['split']('?')[0x0],
          mljko = qpsutr['getFileInfo'](kfijg),
          hegjfi = qpsutr['getFileNativePath'](polmnq);qpsutr['fs']['copyFile']({ 'srcPath': turpq, 'destPath': hegjfi, 'success': function (prso) {
          if (!mljko) qpsutr['onSaveFile'](kfijg, polmnq), xwstvu != null && xwstvu['runWith']([0x0]);else {
            if (mljko['readyUrl'] != kfijg) qpsutr['remove'](polmnq, kfijg, xwstvu);
          }
        }, 'fail': function (fecab) {
          xwstvu != null && xwstvu['runWith']([0x1, fecab]);
        } });
    }, qpsutr['getFileNativePath'] = function (x_wzy) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x_wzy;
    }, qpsutr['remove'] = function (okljmn, rpqut, klijm) {
      rpqut === void 0x0 && (rpqut = '');var jgfh = qpsutr['getFileInfo'](rpqut),
          ideghf = qpsutr['getFileNativePath'](jgfh['md5']);$_3102['loader']['clearRes'](jgfh['readyUrl']), qpsutr['fs']['unlink']({ 'filePath': ideghf, 'success': function (komnpl) {
          if (rpqut != '') qpsutr['onSaveFile'](rpqut, okljmn);klijm != null && klijm['runWith']([0x0]);
        }, 'fail': function (rtuqps) {} });
    }, qpsutr['onSaveFile'] = function (stoqr, yx_$z0) {
      var uxvws = stoqr['split']('?')[0x0];qpsutr['filesListObj'][uxvws] = { 'md5': yx_$z0, 'readyUrl': stoqr }, qpsutr['fs']['writeFile']({ 'filePath': qpsutr['fileNativeDir'] + '/' + qpsutr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qpsutr['filesListObj']), 'success': function (gfdcbe) {
          console['log']('写入测试测试成功：', gfdcbe);
        }, 'fail': function (opnqs) {
          console['log']('写入测试测试失败：', opnqs);
        } });
    }, qpsutr['existDir'] = function (z0_$, knijl) {
      qpsutr['fs']['mkdir']({ 'dirPath': z0_$, 'success': function (qnmpo) {
          knijl != null && knijl['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (srnq) {
          if (srnq['errMsg']['indexOf']('file already exists') != -0x1) qpsutr['readSync'](qpsutr['fileListName'], 'utf8', knijl);else knijl != null && knijl['runWith']([0x1, srnq]);
        } });
    }, qpsutr['readSync'] = function (pnor, ebcda, ytwvxu, tvsrwu) {
      ebcda === void 0x0 && (ebcda = 'ascill'), tvsrwu === void 0x0 && (tvsrwu = '');var vxuy = qpsutr['getFileNativePath'](pnor),
          svrutw;try {
        svrutw = qpsutr['fs']['readFileSync'](vxuy), ytwvxu != null && ytwvxu['runWith']([0x0, { 'data': svrutw }]);
      } catch (_zx$yw) {
        ytwvxu != null && ytwvxu['runWith']([0x1]);
      }
    }, qpsutr['readCache'] = function () {}, qpsutr['writeCache'] = function (facde) {
      var x$vwzy = readyUrl['split']('?')[0x0];qpsutr['filesListObj'][x$vwzy] = { 'md5': md5Name, 'readyUrl': readyUrl }, qpsutr['fs']['writeFile']({ 'filePath': qpsutr['fileNativeDir'] + '/' + qpsutr['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](qpsutr['filesListObj']), 'success': function ($2z01_) {}, 'fail': function (rpmqno) {} });
    }, qpsutr['setNativeFileDir'] = function (rustv) {
      qpsutr['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rustv;
    }, qpsutr['filesListObj'] = {}, qpsutr['fileNativeDir'] = null, qpsutr['fileListName'] = 'layaairfiles.txt', qpsutr['ziyuFileData'] = {}, rqvut(qpsutr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), qpsutr;
  }(struqv),
      jighef = function (mrno) {
    function ilmj() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ilmj['__super']['call'](this), this['_sound'] = ilmj['_createSound']();
    }xwvs(ilmj, 'laya.wx.mini.MiniSound', mrno);var oql = ilmj['prototype'];return oql['load'] = function (bafdce) {
      var yv = this;bafdce = lhk['formatURL'](bafdce), this['url'] = bafdce;if (ilmj['_audioCache'][bafdce]) {
        this['event']('complete');return;
      }function loq() {
        if (ilmj['_null'] != undefined) yv['_sound']['onCanplay'](ilmj['_null']), yv['_sound']['onError'](ilmj['_null']);else try {
          yv['_sound']['onCanplay'](null), yv['_sound']['onError'](null), ilmj['_null'] = null;
        } catch (_x$yz) {
          console['warn']('[wxmini] _clearSound:' + _x$yz), yv['_sound']['onCanplay'](x$_0yz), yv['_sound']['onError'](x$_0yz), ilmj['_null'] = x$_0yz;
        }
      }function prtqo() {
        loq(), cfedg['loaded'] = !![], cfedg['event']('complete'), ilmj['_audioCache'][cfedg['url']] = cfedg;
      }function qnrsp(qpsrt) {
        console['error']('errCode=' + qpsrt['errCode'] + '  errMsg=' + qpsrt['errMsg']), loq(), cfedg['event']('error');
      }function x$_0yz() {}this['_sound']['onCanplay'](prtqo), this['_sound']['onError'](qnrsp), this['_sound']['src'] = bafdce;var cfedg = this;
    }, oql['play'] = function (ikgl, wtxsuv) {
      ikgl === void 0x0 && (ikgl = 0x0), wtxsuv === void 0x0 && (wtxsuv = 0x0);var xz_y$;if (this['url'] == ighfkj['_tMusic']) {
        if (!ilmj['_musicAudio']) ilmj['_musicAudio'] = ilmj['_createSound']();xz_y$ = ilmj['_musicAudio'];
      } else xz_y$ = ilmj['_createSound']();xz_y$['src'] = this['url'];var fejgih = new kplo(xz_y$);return fejgih['url'] = this['url'], fejgih['loops'] = wtxsuv, fejgih['startTime'] = ikgl, fejgih['play'](), ighfkj['addChannel'](fejgih), fejgih;
    }, oql['dispose'] = function () {
      var dacbef = ilmj['_audioCache'][this['url']];dacbef && (dacbef['src'] = '', delete ilmj['_audioCache'][this['url']]);
    }, toqsp(0x0, oql, 'duration', function () {
      return this['_sound']['duration'];
    }), ilmj['_createSound'] = function () {
      return ilmj['_id']++, nqpl['window']['wx']['createInnerAudioContext']();
    }, ilmj['_musicAudio'] = null, ilmj['_id'] = 0x0, ilmj['_audioCache'] = {}, ilmj['_null'] = undefined, ilmj;
  }(struqv),
      kplo = function (abcdef) {
    function hgfdec(wuvstr) {
      this['_audio'] = null, this['_onEnd'] = null, hgfdec['__super']['call'](this), this['_audio'] = wuvstr, this['_onEnd'] = snq['bind'](this['__onEnd'], this), wuvstr['onEnded'](this['_onEnd']);
    }xwvs(hgfdec, 'laya.wx.mini.MiniSoundChannel', abcdef);var sotrq = hgfdec['prototype'];return sotrq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($_3102['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sotrq['__onNull'] = function () {}, sotrq['play'] = function () {
      this['isStopped'] = ![], ighfkj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sotrq['stop'] = function () {
      this['isStopped'] = !![], ighfkj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (hgfdec['_null'] != undefined) this['_audio']['onEnded'](hgfdec['_null']);else try {
        this['_audio']['onEnded'](null), hgfdec['_null'] = null;
      } catch (ustxw) {
        console['warn']('[wxmini] stop:' + ustxw), this['_audio']['onEnded'](snq['bind'](this['__onNull'], this)), hgfdec['_null'] = snq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sotrq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sotrq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ighfkj['addChannel'](this), this['_audio']['play']();
    }, toqsp(0x0, sotrq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), toqsp(0x0, sotrq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), toqsp(0x0, sotrq, 'volume', function () {
      return 0x1;
    }, function (tqrvsu) {}), hgfdec['_null'] = undefined, hgfdec;
  }(ponlm);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var qonsr in Laya) {
    var trpqsu = Laya[qonsr];trpqsu && trpqsu['__isclass'] && (exports[qonsr] = trpqsu);
  }
});