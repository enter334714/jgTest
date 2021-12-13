var _ = wx.y$;
(function (window, document, xyvtwu) {
  var hijgef = xyvtwu['un'],
      $01z_2 = xyvtwu['uns'],
      xstvw = xyvtwu['static'],
      fhd = xyvtwu['class'],
      _$y0 = xyvtwu['getset'],
      cdebg = xyvtwu['__newvec'],
      ustrqv = laya['utils']['Browser'],
      degfih = laya['events']['Event'],
      jnilk = laya['events']['EventDispatcher'],
      yx$zv = laya['resource']['HTMLImage'],
      qlmopn = laya['utils']['Handler'],
      yz$_x0 = laya['display']['Input'],
      echfdg = laya['net']['Loader'],
      $1_zy0 = laya['maths']['Matrix'],
      otrpsq = laya['renders']['Render'],
      qorn = laya['utils']['RunDriver'],
      uwvrts = laya['media']['Sound'],
      zyx_w$ = laya['media']['SoundChannel'],
      ijgfk = laya['media']['SoundManager'],
      okm = laya['display']['Stage'],
      osqrnp = laya['net']['URL'],
      lojm = laya['utils']['Utils'],
      _$0zyx = function () {
    function xvutsw() {}return fhd(xvutsw, 'laya.wx.mini.MiniAdpter'), xvutsw['getJson'] = function (dhfge) {
      return JSON['parse'](dhfge);
    }, xvutsw['init'] = function (dgcb, lhikj) {
      dgcb === void 0x0 && (dgcb = ![]), lhikj === void 0x0 && (lhikj = ![]);if (xvutsw['_inited']) return;xvutsw['window'] = window;if (xvutsw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;xvutsw['_inited'] = !![], xvutsw['isZiYu'] = lhikj, xvutsw['isPosMsgYu'] = dgcb, xvutsw['EnvConfig'] = {}, !xvutsw['isZiYu'] && (ifjg['setNativeFileDir']('/layaairGame'), ifjg['existDir'](ifjg['fileNativeDir'], qlmopn['create'](xvutsw, xvutsw['onMkdirCallBack']))), xvutsw['window']['focus'] = function () {}, xyvtwu['getUrlPath'] = function () {}, xvutsw['window']['logtime'] = function (_01$z2) {}, xvutsw['window']['alertTimeLog'] = function (rsnopq) {}, xvutsw['window']['resetShareInfo'] = function () {}, xvutsw['window']['CanvasRenderingContext2D'] = function () {}, xvutsw['window']['CanvasRenderingContext2D']['prototype'] = xvutsw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xvutsw['window']['document']['body']['appendChild'] = function () {}, xvutsw['EnvConfig']['pixelRatioInt'] = 0x0, qorn['getPixelRatio'] = xvutsw['pixelRatio'], xvutsw['_preCreateElement'] = ustrqv['createElement'], ustrqv['createElement'] = xvutsw['createElement'], qorn['createShaderCondition'] = xvutsw['createShaderCondition'], lojm['parseXMLFromString'] = xvutsw['parseXMLFromString'], yz$_x0['_createInputElement'] = ikmhj['_createInputElement'], xvutsw['EnvConfig']['load'] = echfdg['prototype']['load'], echfdg['prototype']['load'] = noqprs['prototype']['load'], xvutsw['isZiYu'] && dgcb && wx['onMessage'](function (trpuqs) {
        trpuqs['isLoad'] && (ifjg['ziyuFileData'][trpuqs['url']] = trpuqs['data']);
      });
    }, xvutsw['onMkdirCallBack'] = function (dhefg, xvwtsu) {
      if (!dhefg) ifjg['filesListObj'] = JSON['parse'](xvwtsu['data']);
    }, xvutsw['pixelRatio'] = function () {
      if (!xvutsw['EnvConfig']['pixelRatioInt']) try {
        var dcehfg = wx['getSystemInfoSync']();return xvutsw['EnvConfig']['pixelRatioInt'] = dcehfg['pixelRatio'], dcehfg = dcehfg, dcehfg['pixelRatio'];
      } catch (lmojn) {}return xvutsw['EnvConfig']['pixelRatioInt'];
    }, xvutsw['createElement'] = function (w$vxzy) {
      if (w$vxzy == 'canvas') {
        var ursqtv;return xvutsw['idx'] == 0x1 ? xvutsw['isZiYu'] ? (ursqtv = sharedCanvas, ursqtv['style'] = {}) : ursqtv = window['canvas'] : ursqtv = window['wx']['createCanvas'](), xvutsw['idx']++, ursqtv;
      } else {
        if (w$vxzy == 'textarea' || w$vxzy == 'input') return xvutsw['onCreateInput'](w$vxzy);else {
          if (w$vxzy == 'div') {
            var hfeigj = xvutsw['_preCreateElement'](w$vxzy);return hfeigj['contains'] = function (wz_yx) {
              return null;
            }, hfeigj['removeChild'] = function (tvsxw) {}, hfeigj;
          } else return xvutsw['_preCreateElement'](w$vxzy);
        }
      }
    }, xvutsw['onCreateInput'] = function (pkmnol) {
      var xuzvyw = xvutsw['_preCreateElement'](pkmnol);return xuzvyw['focus'] = ikmhj['wxinputFocus'], xuzvyw['blur'] = ikmhj['wxinputblur'], xuzvyw['style'] = {}, xuzvyw['value'] = 0x0, xuzvyw['parentElement'] = {}, xuzvyw['placeholder'] = {}, xuzvyw['type'] = {}, xuzvyw['setColor'] = function (w$y_) {}, xuzvyw['setType'] = function (wstur) {}, xuzvyw['setFontFace'] = function (igkjhf) {}, xuzvyw['addEventListener'] = function ($2_0) {}, xuzvyw['contains'] = function (hdeg) {
        return null;
      }, xuzvyw['removeChild'] = function (bdefac) {}, xuzvyw;
    }, xvutsw['createShaderCondition'] = function (rstupq) {
      var z_xy$ = this,
          x$z_y = function () {
        var cgfhed = rstupq;return z_xy$[rstupq['replace']('this.', '')];
      };return x$z_y;
    }, xvutsw['EnvConfig'] = null, xvutsw['window'] = null, xvutsw['_preCreateElement'] = null, xvutsw['_inited'] = ![], xvutsw['wxRequest'] = null, xvutsw['systemInfo'] = null, xvutsw['version'] = '0.0.1', xvutsw['isZiYu'] = ![], xvutsw['isPosMsgYu'] = ![], xvutsw['parseXMLFromString'] = function (osptrq) {
      var gdifeh, qpr;osptrq = osptrq['replace'](/>\s+</g, '><');try {
        gdifeh = new window['Parser']['DOMParser']()['parseFromString'](osptrq, 'text/xml');
      } catch (ighfk) {
        throw '需要引入xml解析库文件';
      }return gdifeh;
    }, xvutsw['idx'] = 0x1, xvutsw;
  }(),
      spor = function () {
    function z0x_y$() {}fhd(z0x_y$, 'laya.wx.mini.MiniImage');var mlnkji = z0x_y$['prototype'];return mlnkji['_loadImage'] = function (qmnopr) {
      var xvwtyu = this,
          fehdgi = ![];qmnopr['indexOf']('layaNativeDir/') == -0x1 && (fehdgi = !![], qmnopr = osqrnp['formatURL'](qmnopr));if (!ifjg['getFileInfo'](qmnopr)) {
        if (qmnopr['indexOf']('http://') != -0x1 || qmnopr['indexOf']('https://') != -0x1) ifjg['downImg'](qmnopr, new qlmopn(z0x_y$, z0x_y$['onDownImgCallBack'], [qmnopr, xvwtyu]), qmnopr);else z0x_y$['onCreateImage'](qmnopr, xvwtyu, !![]);
      } else z0x_y$['onCreateImage'](qmnopr, xvwtyu, !fehdgi);
    }, z0x_y$['onDownImgCallBack'] = function (qtpor, wvtx, tsrv) {
      if (!tsrv) z0x_y$['onCreateImage'](qtpor, wvtx);else wvtx['onError'](null);
    }, z0x_y$['onCreateImage'] = function (qvtur, higkf, igehd) {
      igehd === void 0x0 && (igehd = ![]);var dfgc;if (!igehd) {
        var ijlhmk = ifjg['getFileInfo'](qvtur),
            kmponl = ijlhmk['md5'];dfgc = ifjg['getFileNativePath'](kmponl);
      } else dfgc = qvtur;if (higkf['imgCache'] == null) higkf['imgCache'] = {};var plkmno;function tropqs() {
        plkmno['onload'] = null, plkmno['onerror'] = null, delete higkf['imgCache'][qvtur];
      };var cfbe = function () {
        tropqs(), higkf['onLoaded'](plkmno);
      },
          yzv$x = function () {
        tropqs(), higkf['event']('error', 'Load image failed');
      };higkf['_type'] == 'nativeimage' ? (plkmno = new ustrqv['window']['Image'](), plkmno['crossOrigin'] = '', plkmno['onload'] = cfbe, plkmno['onerror'] = yzv$x, plkmno['src'] = dfgc, higkf['imgCache'][qvtur] = plkmno) : new yx$zv['create'](dfgc, { 'onload': cfbe, 'onerror': yzv$x, 'onCreate': function (dbecg) {
          plkmno = dbecg, higkf['imgCache'][qvtur] = dbecg;
        } });
    }, z0x_y$;
  }(),
      ikmhj = function () {
    function y_$zw() {}return fhd(y_$zw, 'laya.wx.mini.MiniInput'), y_$zw['_createInputElement'] = function () {
      yz$_x0['_initInput'](yz$_x0['area'] = ustrqv['createElement']('textarea')), yz$_x0['_initInput'](yz$_x0['input'] = ustrqv['createElement']('input')), yz$_x0['inputContainer'] = ustrqv['createElement']('div'), yz$_x0['inputContainer']['style']['position'] = 'absolute', yz$_x0['inputContainer']['style']['zIndex'] = 0x186a0, ustrqv['container']['appendChild'](yz$_x0['inputContainer']), yz$_x0['inputContainer']['setPos'] = function (ilm, yvzw) {
        yz$_x0['inputContainer']['style']['left'] = ilm + 'px', yz$_x0['inputContainer']['style']['top'] = yvzw + 'px';
      }, xyvtwu['stage']['on']('resize', null, y_$zw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hjeif) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ijgfk['_soundClass'] = dfhec, ijgfk['_musicClass'] = dfhec;
    }, y_$zw['_onStageResize'] = function () {
      var gikj = xyvtwu['stage']['_canvasTransform']['identity']();gikj['scale'](ustrqv['width'] / otrpsq['canvas']['width'] / qorn['getPixelRatio'](), ustrqv['height'] / otrpsq['canvas']['height'] / qorn['getPixelRatio']());
    }, y_$zw['wxinputFocus'] = function (igfjhk) {
      var x$w = yz$_x0['inputElement']['target'];if (x$w && !x$w['editable']) return;_$0zyx['window']['wx']['offKeyboardConfirm'](), _$0zyx['window']['wx']['offKeyboardInput'](), _$0zyx['window']['wx']['showKeyboard']({ 'defaultValue': x$w['text'], 'maxLength': x$w['maxChars'], 'multiple': x$w['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ikhml) {}, 'fail': function (_2143) {} }), _$0zyx['window']['wx']['onKeyboardConfirm'](function (otrpq) {
        var z1$0_ = otrpq ? otrpq['value'] : '';x$w['text'] = z1$0_, x$w['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _$0zyx['window']['wx']['onKeyboardInput'](function (fcdhg) {
        var mlonqp = fcdhg ? fcdhg['value'] : '';if (!x$w['multiline']) {
          if (mlonqp['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }x$w['text'] = mlonqp, x$w['event']('input');
      });
    }, y_$zw['inputEnter'] = function () {
      yz$_x0['inputElement']['target']['focus'] = ![];
    }, y_$zw['wxinputblur'] = function () {
      y_$zw['hideKeyboard']();
    }, y_$zw['hideKeyboard'] = function () {
      _$0zyx['window']['wx']['offKeyboardConfirm'](), _$0zyx['window']['wx']['offKeyboardInput'](), _$0zyx['window']['wx']['hideKeyboard']({ 'success': function (zy$_x0) {
          console['log']('隐藏键盘');
        }, 'fail': function (jfgik) {
          console['log']('隐藏键盘出错:' + (jfgik ? jfgik['errMsg'] : ''));
        } });
    }, y_$zw;
  }(),
      noqprs = function () {
    function fji() {}fhd(fji, 'laya.wx.mini.MiniLoader');var konlp = fji['prototype'];return konlp['load'] = function (vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu) {
      vxwtus === void 0x0 && (vxwtus = !![]), wtvxyu === void 0x0 && (wtvxyu = ![]);var fjhieg = this;fjhieg['_url'] = vxz$wy;if (vxz$wy['indexOf']('data:image') === 0x0) fjhieg['_type'] = yzxw_ = 'image';else fjhieg['_type'] = yzxw_ || (yzxw_ = fjhieg['getTypeFromUrl'](vxz$wy));fjhieg['_cache'] = vxwtus, fjhieg['_data'] = null;var rnqops = 'ascii';if (vxz$wy['indexOf']('.fnt') != -0x1) rnqops = 'utf8';else yzxw_ == 'arraybuffer' && (rnqops = '');;var gebfd = lojm['getFileExtension'](vxz$wy);if (fji['_fileTypeArr']['indexOf'](gebfd) != -0x1) _$0zyx['EnvConfig']['load']['call'](this, vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu);else {
        if (!ifjg['getFileInfo'](vxz$wy)) {
          if (vxz$wy['indexOf']('layaNativeDir/') != -0x1) {
            if (_$0zyx['isZiYu']) {
              var v$wzx = ifjg['ziyuFileData'][vxz$wy];fjhieg['onLoaded'](v$wzx);return;
            } else {
              cosnole['log']('read read'), ifjg['read'](vxz$wy, rnqops, new qlmopn(fji, fji['onReadNativeCallBack'], [rnqops, vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu, fjhieg]));return;
            }
          }if (osqrnp['rootPath'] == '') var jfihk = vxz$wy;else jfihk = vxz$wy['split'](osqrnp['rootPath'])[0x0];vxz$wy['indexOf']('http://') != -0x1 || vxz$wy['indexOf']('https://') != -0x1 ? _$0zyx['EnvConfig']['load']['call'](fjhieg, vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu) : ifjg['readFile'](jfihk, rnqops, new qlmopn(fji, fji['onReadNativeCallBack'], [rnqops, vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu, fjhieg]), vxz$wy);
        } else _$0zyx['EnvConfig']['load']['call'](this, vxz$wy, yzxw_, vxwtus, vsrqtu, wtvxyu);
      }
    }, konlp['resMgrLoad'] = function (hlgk, _z0x$y, uqts, fdacb, survwt, oqpmrn, vywzu) {
      uqts === void 0x0 && (uqts = 0x0), fdacb === void 0x0 && (fdacb = ![]), survwt === void 0x0 && (survwt = ![]), oqpmrn === void 0x0 && (oqpmrn = 0x0), vywzu === void 0x0 && (vywzu = 0x3), hlgk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hlgk), _$0zyx['EnvConfig']['resMgrLoad'](hlgk, (srutpq, ihjkg, stpuq) => {
        fji['prototype']['resMgrLoadCallBack'](srutpq, ihjkg, stpuq, _z0x$y);
      }, uqts, fdacb, survwt, oqpmrn, vywzu);
    }, konlp['resMgrLoadCallBack'] = function (jonkl, abecd, gcdbe, kimjln) {
      console['log']('buff:::', jonkl, gcdbe, ifjg['fileNativeDir'] + '///' + ifjg['fileListName']), kimjln(jonkl, abecd, gcdbe);
    }, konlp['clearRes'] = function (uvrstq, hgjfik) {
      hgjfik === void 0x0 && (hgjfik = ![]);var kimln = this;kimln['clearRes'](uvrstq, hgjfik);var pstqo = ifjg['getFileInfo'](uvrstq);if (pstqo && (uvrstq['indexOf']('http://') != -0x1 || uvrstq['indexOf']('https://') != -0x1)) {
        var ijlgh = pstqo['md5'],
            hedifg = ifjg['getFileNativePath'](ijlgh);ifjg['remove'](hedifg);
      }
    }, fji['onReadNativeCallBack'] = function (uxvt, vuswrt, urstp, yxwuv, mjkhi, gbfc, gdch, kiljn, ghifje) {
      yxwuv === void 0x0 && (yxwuv = !![]), gbfc === void 0x0 && (gbfc = ![]), kiljn === void 0x0 && (kiljn = 0x0);if (!kiljn) {
        var pnlko;if (urstp == 'json' || urstp == 'atlas') pnlko = _$0zyx['getJson'](ghifje['data']);else urstp == 'xml' ? pnlko = lojm['parseXMLFromString'](ghifje['data']) : pnlko = ghifje['data'];gdch['onLoaded'](pnlko), !_$0zyx['isZiYu'] && _$0zyx['isPosMsgYu'] && urstp != 'arraybuffer' && wx['postMessage']({ 'url': vuswrt, 'data': pnlko, 'isLoad': !![] });
      } else kiljn == 0x1 && _$0zyx['EnvConfig']['load']['call'](gdch, vuswrt, urstp, yxwuv, mjkhi, gbfc);
    }, xstvw(fji, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), fji;
  }(),
      ifjg = function (efhigd) {
    function _z12$() {
      _z12$['__super']['call'](this);;
    }return fhd(_z12$, 'laya.wx.mini.MiniFileMgr', efhigd), _z12$['isLoadFile'] = function (bcefgd) {
      return _z12$['_fileTypeArr']['indexOf'](bcefgd) != -0x1 ? !![] : ![];
    }, _z12$['getFileInfo'] = function (nplom) {
      var cbfedg = nplom['split']('?')[0x0],
          $z1_0 = _z12$['filesListObj'][cbfedg];if ($z1_0 == null) return null;else return $z1_0;return null;
    }, _z12$['onFileUpdate'] = function (lnmj, hifje) {
      var rtusqp = lnmj['split']('/'),
          txvswu = rtusqp[rtusqp['length'] - 0x1],
          mqponl = _z12$['getFileInfo'](hifje);if (mqponl == null) _z12$['onSaveFile'](hifje, txvswu);else {
        if (mqponl['readyUrl'] != hifje) _z12$['remove'](txvswu, hifje);
      }
    }, _z12$['exits'] = function (vsturw, zvw$x) {
      var wyvuz = _z12$['getFileNativePath'](vsturw);_z12$['fs']['getFileInfo']({ 'filePath': wyvuz, 'success': function (zvxyuw) {
          zvw$x != null && zvw$x['runWith']([0x0, zvxyuw]);
        }, 'fail': function (becfd) {
          zvw$x != null && zvw$x['runWith']([0x1, becfd]);
        } });
    }, _z12$['read'] = function (rusvq, pqoml, zxyv$w, gejfh) {
      pqoml === void 0x0 && (pqoml = 'ascill'), gejfh === void 0x0 && (gejfh = '');var higkl;gejfh != '' ? higkl = _z12$['getFileNativePath'](rusvq) : higkl = rusvq, _z12$['fs']['readFile']({ 'filePath': higkl, 'encoding': pqoml, 'success': function (qnpmlo) {
          zxyv$w != null && zxyv$w['runWith']([0x0, qnpmlo]);
        }, 'fail': function (mpkol) {
          if (mpkol && gejfh != '') _z12$['down'](gejfh, pqoml, zxyv$w, gejfh);else zxyv$w != null && zxyv$w['runWith']([0x1]);
        } });
    }, _z12$['readNativeFile'] = function (imlhkj, mnojkl) {
      _z12$['fs']['readFile']({ 'filePath': imlhkj, 'encoding': '', 'success': function (olmkjn) {
          mnojkl != null && mnojkl['runWith']([0x0]);
        }, 'fail': function (w_x$) {
          mnojkl != null && mnojkl['runWith']([0x1]);
        } });
    }, _z12$['down'] = function (nopk, uqtr, z_01y$, vyxtw) {
      uqtr === void 0x0 && (uqtr = 'ascill'), vyxtw === void 0x0 && (vyxtw = '');var kojmn = _z12$['getFileNativePath'](vyxtw),
          pqnors = _z12$['wxdown']({ 'url': nopk, 'filePath': kojmn, 'success': function (plonk) {
          if (plonk['statusCode'] === 0xc8) _z12$['readFile'](plonk['filePath'], uqtr, z_01y$, vyxtw);
        }, 'fail': function (vwz$x) {
          z_01y$ != null && z_01y$['runWith']([0x1, vwz$x]);
        } });pqnors['onProgressUpdate'](function (z$0x_) {
        z_01y$ != null && z_01y$['runWith']([0x2, z$0x_['progress']]);
      });
    }, _z12$['readFile'] = function ($_z201, jkihf, _zxyw, igkjlh) {
      jkihf === void 0x0 && (jkihf = 'ascill'), igkjlh === void 0x0 && (igkjlh = ''), _z12$['fs']['readFile']({ 'filePath': $_z201, 'encoding': jkihf, 'success': function (vwsrut) {
          if ($_z201['indexOf']('http://') != -0x1 || $_z201['indexOf']('https://') != -0x1) _z12$['onFileUpdate']($_z201, igkjlh);_zxyw != null && _zxyw['runWith']([0x0, vwsrut]);
        }, 'fail': function (uqsvt) {
          if (uqsvt) _zxyw != null && _zxyw['runWith']([0x1, uqsvt]);
        } });
    }, _z12$['downImg'] = function (jklihg, qsv, kjighf) {
      kjighf === void 0x0 && (kjighf = '');var tqspru = _z12$['wxdown']({ 'url': jklihg, 'success': function (vyx$) {
          vyx$['statusCode'] === 0xc8 && _z12$['copyFile'](vyx$['tempFilePath'], kjighf, qsv);
        }, 'fail': function (onkplm) {
          qsv != null && qsv['runWith']([0x1, onkplm]);
        } });
    }, _z12$['copyFile'] = function (qtoprs, dfceab, nmpolk) {
      var $_321 = qtoprs['split']('/'),
          imjnk = $_321[$_321['length'] - 0x1],
          zw$_yx = dfceab['split']('?')[0x0],
          fbged = _z12$['getFileInfo'](dfceab),
          fih = _z12$['getFileNativePath'](imjnk);_z12$['fs']['copyFile']({ 'srcPath': qtoprs, 'destPath': fih, 'success': function ($02_z1) {
          if (!fbged) _z12$['onSaveFile'](dfceab, imjnk), nmpolk != null && nmpolk['runWith']([0x0]);else {
            if (fbged['readyUrl'] != dfceab) _z12$['remove'](imjnk, dfceab, nmpolk);
          }
        }, 'fail': function (stxvwu) {
          nmpolk != null && nmpolk['runWith']([0x1, stxvwu]);
        } });
    }, _z12$['getFileNativePath'] = function (knljom) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + knljom;
    }, _z12$['remove'] = function (fegdh, swvutx, lmjok) {
      swvutx === void 0x0 && (swvutx = '');var hmkijl = _z12$['getFileInfo'](swvutx),
          gfehdc = _z12$['getFileNativePath'](hmkijl['md5']);xyvtwu['loader']['clearRes'](hmkijl['readyUrl']), _z12$['fs']['unlink']({ 'filePath': gfehdc, 'success': function (spurq) {
          if (swvutx != '') _z12$['onSaveFile'](swvutx, fegdh);lmjok != null && lmjok['runWith']([0x0]);
        }, 'fail': function (opnqlm) {} });
    }, _z12$['onSaveFile'] = function (poqrns, fjghik) {
      var vywuzx = poqrns['split']('?')[0x0];_z12$['filesListObj'][vywuzx] = { 'md5': fjghik, 'readyUrl': poqrns }, _z12$['fs']['writeFile']({ 'filePath': _z12$['fileNativeDir'] + '/' + _z12$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_z12$['filesListObj']), 'success': function (nqmpol) {
          console['log']('写入测试测试成功：', nqmpol);
        }, 'fail': function (tvqur) {
          console['log']('写入测试测试失败：', tvqur);
        } });
    }, _z12$['existDir'] = function (oqrspn, fgihk) {
      _z12$['fs']['mkdir']({ 'dirPath': oqrspn, 'success': function (_3$0) {
          fgihk != null && fgihk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lpomkn) {
          if (lpomkn['errMsg']['indexOf']('file already exists') != -0x1) _z12$['readSync'](_z12$['fileListName'], 'utf8', fgihk);else fgihk != null && fgihk['runWith']([0x1, lpomkn]);
        } });
    }, _z12$['readSync'] = function (opqlmn, fdgie, $zxy0, hecgd) {
      fdgie === void 0x0 && (fdgie = 'ascill'), hecgd === void 0x0 && (hecgd = '');var $_2103 = _z12$['getFileNativePath'](opqlmn),
          fije;try {
        fije = _z12$['fs']['readFileSync']($_2103), $zxy0 != null && $zxy0['runWith']([0x0, { 'data': fije }]);
      } catch (uqtprs) {
        $zxy0 != null && $zxy0['runWith']([0x1]);
      }
    }, _z12$['readCache'] = function () {}, _z12$['writeCache'] = function (sqptro) {
      var nmjkol = readyUrl['split']('?')[0x0];_z12$['filesListObj'][nmjkol] = { 'md5': md5Name, 'readyUrl': readyUrl }, _z12$['fs']['writeFile']({ 'filePath': _z12$['fileNativeDir'] + '/' + _z12$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_z12$['filesListObj']), 'success': function (vtyux) {}, 'fail': function (svrtuw) {} });
    }, _z12$['setNativeFileDir'] = function (ejhf) {
      _z12$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ejhf;
    }, _z12$['filesListObj'] = {}, _z12$['fileNativeDir'] = null, _z12$['fileListName'] = 'layaairfiles.txt', _z12$['ziyuFileData'] = {}, xstvw(_z12$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _z12$;
  }(jnilk),
      dfhec = function (fedghi) {
    function hgide() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hgide['__super']['call'](this), this['_sound'] = hgide['_createSound']();
    }fhd(hgide, 'laya.wx.mini.MiniSound', fedghi);var fgdcbe = hgide['prototype'];return fgdcbe['load'] = function (_z1y$0) {
      var sxutwv = this;_z1y$0 = osqrnp['formatURL'](_z1y$0), this['url'] = _z1y$0;if (hgide['_audioCache'][_z1y$0]) {
        this['event']('complete');return;
      }function pr() {
        if (hgide['_null'] != undefined) sxutwv['_sound']['onCanplay'](hgide['_null']), sxutwv['_sound']['onError'](hgide['_null']);else try {
          sxutwv['_sound']['onCanplay'](null), sxutwv['_sound']['onError'](null), hgide['_null'] = null;
        } catch (mknop) {
          console['warn']('[wxmini] _clearSound:' + mknop), sxutwv['_sound']['onCanplay'](hkjigl), sxutwv['_sound']['onError'](hkjigl), hgide['_null'] = hkjigl;
        }
      }function xuyv() {
        pr(), fgheid['loaded'] = !![], fgheid['event']('complete'), hgide['_audioCache'][fgheid['url']] = fgheid;
      }function twyxvu(fighj) {
        console['error']('errCode=' + fighj['errCode'] + '  errMsg=' + fighj['errMsg']), pr(), fgheid['event']('error');
      }function hkjigl() {}this['_sound']['onCanplay'](xuyv), this['_sound']['onError'](twyxvu), this['_sound']['src'] = _z1y$0;var fgheid = this;
    }, fgdcbe['play'] = function (pnql, pnqmo) {
      pnql === void 0x0 && (pnql = 0x0), pnqmo === void 0x0 && (pnqmo = 0x0);var mjilkh;if (this['url'] == ijgfk['_tMusic']) {
        if (!hgide['_musicAudio']) hgide['_musicAudio'] = hgide['_createSound']();mjilkh = hgide['_musicAudio'];
      } else mjilkh = hgide['_createSound']();mjilkh['src'] = this['url'];var stuw = new qpmnlo(mjilkh);return stuw['url'] = this['url'], stuw['loops'] = pnqmo, stuw['startTime'] = pnql, stuw['play'](), ijgfk['addChannel'](stuw), stuw;
    }, fgdcbe['dispose'] = function () {
      var ljnmi = hgide['_audioCache'][this['url']];ljnmi && (ljnmi['src'] = '', delete hgide['_audioCache'][this['url']]);
    }, _$y0(0x0, fgdcbe, 'duration', function () {
      return this['_sound']['duration'];
    }), hgide['_createSound'] = function () {
      return hgide['_id']++, _$0zyx['window']['wx']['createInnerAudioContext']();
    }, hgide['_musicAudio'] = null, hgide['_id'] = 0x0, hgide['_audioCache'] = {}, hgide['_null'] = undefined, hgide;
  }(jnilk),
      qpmnlo = function (pqto) {
    function lnkij(gfkj) {
      this['_audio'] = null, this['_onEnd'] = null, lnkij['__super']['call'](this), this['_audio'] = gfkj, this['_onEnd'] = lojm['bind'](this['__onEnd'], this), gfkj['onEnded'](this['_onEnd']);
    }fhd(lnkij, 'laya.wx.mini.MiniSoundChannel', pqto);var yx$_z = lnkij['prototype'];return yx$_z['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (xyvtwu['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, yx$_z['__onNull'] = function () {}, yx$_z['play'] = function () {
      this['isStopped'] = ![], ijgfk['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, yx$_z['stop'] = function () {
      this['isStopped'] = !![], ijgfk['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (lnkij['_null'] != undefined) this['_audio']['onEnded'](lnkij['_null']);else try {
        this['_audio']['onEnded'](null), lnkij['_null'] = null;
      } catch (norqmp) {
        console['warn']('[wxmini] stop:' + norqmp), this['_audio']['onEnded'](lojm['bind'](this['__onNull'], this)), lnkij['_null'] = lojm['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, yx$_z['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, yx$_z['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ijgfk['addChannel'](this), this['_audio']['play']();
    }, _$y0(0x0, yx$_z, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _$y0(0x0, yx$_z, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _$y0(0x0, yx$_z, 'volume', function () {
      return 0x1;
    }, function (swtxv) {}), lnkij['_null'] = undefined, lnkij;
  }(zyx_w$);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var uwsxvt in Laya) {
    var gkfhij = Laya[uwsxvt];gkfhij && gkfhij['__isclass'] && (exports[uwsxvt] = gkfhij);
  }
});