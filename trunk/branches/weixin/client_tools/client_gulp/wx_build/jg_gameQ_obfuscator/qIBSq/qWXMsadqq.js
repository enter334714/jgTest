var g = wx.$Q;
(function (window, document, vigb7) {
  var huj = vigb7['un'],
      n46om9 = vigb7['uns'],
      qujws8 = vigb7['static'],
      e69_no = vigb7['class'],
      rd_zc$ = vigb7['getset'],
      zdrt$c = vigb7['__newvec'],
      wuj8sq = laya['utils']['Browser'],
      o$_9ez = laya['events']['Event'],
      gpfla0 = laya['events']['EventDispatcher'],
      nem = laya['resource']['HTMLImage'],
      jh1s = laya['utils']['Handler'],
      tkcy = laya['display']['Input'],
      c5y3t = laya['net']['Loader'],
      eo_9n6 = laya['maths']['Matrix'],
      vglabi = laya['renders']['Render'],
      c$zdt = laya['utils']['RunDriver'],
      _$erzd = laya['media']['Sound'],
      ap0lf2 = laya['media']['SoundChannel'],
      _c$r = laya['media']['SoundManager'],
      _o6n = laya['display']['Stage'],
      xykt35 = laya['net']['URL'],
      b7gavi = laya['utils']['Utils'],
      ykx523 = function () {
    function cytrdk() {}return e69_no(cytrdk, 'laya.wx.mini.MiniAdpter'), cytrdk['getJson'] = function (swq8) {
      return JSON['parse'](swq8);
    }, cytrdk['init'] = function (zrc$, uqswj) {
      zrc$ === void 0x0 && (zrc$ = ![]), uqswj === void 0x0 && (uqswj = ![]);if (cytrdk['_inited']) return;cytrdk['window'] = window;if (cytrdk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;cytrdk['_inited'] = !![], cytrdk['isZiYu'] = uqswj, cytrdk['isPosMsgYu'] = zrc$, cytrdk['EnvConfig'] = {}, !cytrdk['isZiYu'] && (h481m['setNativeFileDir']('/layaairGame'), h481m['existDir'](h481m['fileNativeDir'], jh1s['create'](cytrdk, cytrdk['onMkdirCallBack']))), cytrdk['window']['focus'] = function () {}, vigb7['getUrlPath'] = function () {}, cytrdk['window']['logtime'] = function (n94om) {}, cytrdk['window']['alertTimeLog'] = function (lbgp) {}, cytrdk['window']['resetShareInfo'] = function () {}, cytrdk['window']['CanvasRenderingContext2D'] = function () {}, cytrdk['window']['CanvasRenderingContext2D']['prototype'] = cytrdk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], cytrdk['window']['document']['body']['appendChild'] = function () {}, cytrdk['EnvConfig']['pixelRatioInt'] = 0x0, c$zdt['getPixelRatio'] = cytrdk['pixelRatio'], cytrdk['_preCreateElement'] = wuj8sq['createElement'], wuj8sq['createElement'] = cytrdk['createElement'], c$zdt['createShaderCondition'] = cytrdk['createShaderCondition'], b7gavi['parseXMLFromString'] = cytrdk['parseXMLFromString'], tkcy['_createInputElement'] = ky3tc5['_createInputElement'], cytrdk['EnvConfig']['load'] = c5y3t['prototype']['load'], c5y3t['prototype']['load'] = pigbla['prototype']['load'], cytrdk['isZiYu'] && zrc$ && wx['onMessage'](function (oe69mn) {
        oe69mn['isLoad'] && (h481m['ziyuFileData'][oe69mn['url']] = oe69mn['data']);
      });
    }, cytrdk['onMkdirCallBack'] = function (vi7ba, $rzed_) {
      if (!vi7ba) h481m['filesListObj'] = JSON['parse']($rzed_['data']);
    }, cytrdk['pixelRatio'] = function () {
      if (!cytrdk['EnvConfig']['pixelRatioInt']) try {
        var ivabgl = wx['getSystemInfoSync']();return cytrdk['EnvConfig']['pixelRatioInt'] = ivabgl['pixelRatio'], ivabgl = ivabgl, ivabgl['pixelRatio'];
      } catch (yx0253) {}return cytrdk['EnvConfig']['pixelRatioInt'];
    }, cytrdk['createElement'] = function (ivlgba) {
      if (ivlgba == 'canvas') {
        var alpgbf;return cytrdk['idx'] == 0x1 ? cytrdk['isZiYu'] ? (alpgbf = sharedCanvas, alpgbf['style'] = {}) : alpgbf = window['canvas'] : alpgbf = window['wx']['createCanvas'](), cytrdk['idx']++, alpgbf;
      } else {
        if (ivlgba == 'textarea' || ivlgba == 'input') return cytrdk['onCreateInput'](ivlgba);else {
          if (ivlgba == 'div') {
            var _z$r9 = cytrdk['_preCreateElement'](ivlgba);return _z$r9['contains'] = function (xt5ky3) {
              return null;
            }, _z$r9['removeChild'] = function (hw8) {}, _z$r9;
          } else return cytrdk['_preCreateElement'](ivlgba);
        }
      }
    }, cytrdk['onCreateInput'] = function (o$ze_) {
      var h8sjuw = cytrdk['_preCreateElement'](o$ze_);return h8sjuw['focus'] = ky3tc5['wxinputFocus'], h8sjuw['blur'] = ky3tc5['wxinputblur'], h8sjuw['style'] = {}, h8sjuw['value'] = 0x0, h8sjuw['parentElement'] = {}, h8sjuw['placeholder'] = {}, h8sjuw['type'] = {}, h8sjuw['setColor'] = function (on46) {}, h8sjuw['setType'] = function (jh8u) {}, h8sjuw['setFontFace'] = function (m69o4n) {}, h8sjuw['addEventListener'] = function (js1h8) {}, h8sjuw['contains'] = function (gl0fap) {
        return null;
      }, h8sjuw['removeChild'] = function (hs8j1w) {}, h8sjuw;
    }, cytrdk['createShaderCondition'] = function (x0pf2l) {
      var yt5ck3 = this,
          alp20f = function () {
        var nm94o = x0pf2l;return yt5ck3[x0pf2l['replace']('this.', '')];
      };return alp20f;
    }, cytrdk['EnvConfig'] = null, cytrdk['window'] = null, cytrdk['_preCreateElement'] = null, cytrdk['_inited'] = ![], cytrdk['wxRequest'] = null, cytrdk['systemInfo'] = null, cytrdk['version'] = '0.0.1', cytrdk['isZiYu'] = ![], cytrdk['isPosMsgYu'] = ![], cytrdk['parseXMLFromString'] = function ($_9rze) {
      var _6eon9, x235y;$_9rze = $_9rze['replace'](/>\s+</g, '><');try {
        _6eon9 = new window['Parser']['DOMParser']()['parseFromString']($_9rze, 'text/xml');
      } catch (swuj) {
        throw '需要引入xml解析库文件';
      }return _6eon9;
    }, cytrdk['idx'] = 0x1, cytrdk;
  }(),
      bgavi = function () {
    function cktzdr() {}e69_no(cktzdr, 'laya.wx.mini.MiniImage');var y5dk = cktzdr['prototype'];return y5dk['_loadImage'] = function (fx302) {
      var e_rzd$ = this,
          z_$e9 = ![];fx302['indexOf']('layaNativeDir/') == -0x1 && (z_$e9 = !![], fx302 = xykt35['formatURL'](fx302));if (!h481m['getFileInfo'](fx302)) {
        if (fx302['indexOf']('http://') != -0x1 || fx302['indexOf']('https://') != -0x1) h481m['downImg'](fx302, new jh1s(cktzdr, cktzdr['onDownImgCallBack'], [fx302, e_rzd$]), fx302);else cktzdr['onCreateImage'](fx302, e_rzd$, !![]);
      } else cktzdr['onCreateImage'](fx302, e_rzd$, !z_$e9);
    }, cktzdr['onDownImgCallBack'] = function (lpiba, gbv7, oe6mn) {
      if (!oe6mn) cktzdr['onCreateImage'](lpiba, gbv7);else gbv7['onError'](null);
    }, cktzdr['onCreateImage'] = function (vlgaib, m641nh, _rz$) {
      _rz$ === void 0x0 && (_rz$ = ![]);var ga7vbi;if (!_rz$) {
        var tcy5dk = h481m['getFileInfo'](vlgaib),
            $_dzer = tcy5dk['md5'];ga7vbi = h481m['getFileNativePath']($_dzer);
      } else ga7vbi = vlgaib;if (m641nh['imgCache'] == null) m641nh['imgCache'] = {};var pgaf0;function n96mo() {
        pgaf0['onload'] = null, pgaf0['onerror'] = null, delete m641nh['imgCache'][vlgaib];
      };var lgafbp = function () {
        n96mo(), m641nh['onLoaded'](pgaf0);
      },
          dez_r$ = function () {
        n96mo(), m641nh['event']('error', 'Load image failed');
      };m641nh['_type'] == 'nativeimage' ? (pgaf0 = new wuj8sq['window']['Image'](), pgaf0['crossOrigin'] = '', pgaf0['onload'] = lgafbp, pgaf0['onerror'] = dez_r$, pgaf0['src'] = ga7vbi, m641nh['imgCache'][vlgaib] = pgaf0) : new nem['create'](ga7vbi, { 'onload': lgafbp, 'onerror': dez_r$, 'onCreate': function (n_e69o) {
          pgaf0 = n_e69o, m641nh['imgCache'][vlgaib] = n_e69o;
        } });
    }, cktzdr;
  }(),
      ky3tc5 = function () {
    function dktcy5() {}return e69_no(dktcy5, 'laya.wx.mini.MiniInput'), dktcy5['_createInputElement'] = function () {
      tkcy['_initInput'](tkcy['area'] = wuj8sq['createElement']('textarea')), tkcy['_initInput'](tkcy['input'] = wuj8sq['createElement']('input')), tkcy['inputContainer'] = wuj8sq['createElement']('div'), tkcy['inputContainer']['style']['position'] = 'absolute', tkcy['inputContainer']['style']['zIndex'] = 0x186a0, wuj8sq['container']['appendChild'](tkcy['inputContainer']), tkcy['inputContainer']['setPos'] = function ($tcdr, krdztc) {
        tkcy['inputContainer']['style']['left'] = $tcdr + 'px', tkcy['inputContainer']['style']['top'] = krdztc + 'px';
      }, vigb7['stage']['on']('resize', null, dktcy5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bgapf) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), _c$r['_soundClass'] = c35ytk, _c$r['_musicClass'] = c35ytk;
    }, dktcy5['_onStageResize'] = function () {
      var tdzc$r = vigb7['stage']['_canvasTransform']['identity']();tdzc$r['scale'](wuj8sq['width'] / vglabi['canvas']['width'] / c$zdt['getPixelRatio'](), wuj8sq['height'] / vglabi['canvas']['height'] / c$zdt['getPixelRatio']());
    }, dktcy5['wxinputFocus'] = function (fgpl0a) {
      var rdcyt = tkcy['inputElement']['target'];if (rdcyt && !rdcyt['editable']) return;ykx523['window']['wx']['offKeyboardConfirm'](), ykx523['window']['wx']['offKeyboardInput'](), ykx523['window']['wx']['showKeyboard']({ 'defaultValue': rdcyt['text'], 'maxLength': rdcyt['maxChars'], 'multiple': rdcyt['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lf0a2p) {}, 'fail': function (gfla) {} }), ykx523['window']['wx']['onKeyboardConfirm'](function (ykx3t) {
        var y230 = ykx3t ? ykx3t['value'] : '';rdcyt['text'] = y230, rdcyt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ykx523['window']['wx']['onKeyboardInput'](function ($z_rde) {
        var drzktc = $z_rde ? $z_rde['value'] : '';if (!rdcyt['multiline']) {
          if (drzktc['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }rdcyt['text'] = drzktc, rdcyt['event']('input');
      });
    }, dktcy5['inputEnter'] = function () {
      tkcy['inputElement']['target']['focus'] = ![];
    }, dktcy5['wxinputblur'] = function () {
      dktcy5['hideKeyboard']();
    }, dktcy5['hideKeyboard'] = function () {
      ykx523['window']['wx']['offKeyboardConfirm'](), ykx523['window']['wx']['offKeyboardInput'](), ykx523['window']['wx']['hideKeyboard']({ 'success': function (c5yktd) {
          console['log']('隐藏键盘');
        }, 'fail': function (x3502f) {
          console['log']('隐藏键盘出错:' + (x3502f ? x3502f['errMsg'] : ''));
        } });
    }, dktcy5;
  }(),
      pigbla = function () {
    function aipbg() {}e69_no(aipbg, 'laya.wx.mini.MiniLoader');var wqsj8 = aipbg['prototype'];return wqsj8['load'] = function (nem69, f32, zc$rd, plig, z9$re_) {
      zc$rd === void 0x0 && (zc$rd = !![]), z9$re_ === void 0x0 && (z9$re_ = ![]);var ez9o = this;ez9o['_url'] = nem69;if (nem69['indexOf']('data:image') === 0x0) ez9o['_type'] = f32 = 'image';else ez9o['_type'] = f32 || (f32 = ez9o['getTypeFromUrl'](nem69));ez9o['_cache'] = zc$rd, ez9o['_data'] = null;var wsh18 = 'ascii';if (nem69['indexOf']('.fnt') != -0x1) wsh18 = 'utf8';else f32 == 'arraybuffer' && (wsh18 = '');;var dyktrc = b7gavi['getFileExtension'](nem69);if (aipbg['_fileTypeArr']['indexOf'](dyktrc) != -0x1) ykx523['EnvConfig']['load']['call'](this, nem69, f32, zc$rd, plig, z9$re_);else {
        if (!h481m['getFileInfo'](nem69)) {
          if (nem69['indexOf']('layaNativeDir/') != -0x1) {
            if (ykx523['isZiYu']) {
              var z_drc$ = h481m['ziyuFileData'][nem69];ez9o['onLoaded'](z_drc$);return;
            } else {
              cosnole['log']('read read'), h481m['read'](nem69, wsh18, new jh1s(aipbg, aipbg['onReadNativeCallBack'], [wsh18, nem69, f32, zc$rd, plig, z9$re_, ez9o]));return;
            }
          }if (xykt35['rootPath'] == '') var dtckrz = nem69;else dtckrz = nem69['split'](xykt35['rootPath'])[0x0];nem69['indexOf']('http://') != -0x1 || nem69['indexOf']('https://') != -0x1 ? ykx523['EnvConfig']['load']['call'](ez9o, nem69, f32, zc$rd, plig, z9$re_) : h481m['readFile'](dtckrz, wsh18, new jh1s(aipbg, aipbg['onReadNativeCallBack'], [wsh18, nem69, f32, zc$rd, plig, z9$re_, ez9o]), nem69);
        } else ykx523['EnvConfig']['load']['call'](this, nem69, f32, zc$rd, plig, z9$re_);
      }
    }, wqsj8['resMgrLoad'] = function (z9_er, whjs8, c_$rz, ctky5d, pgfb, pag0fl, k52xy3) {
      c_$rz === void 0x0 && (c_$rz = 0x0), ctky5d === void 0x0 && (ctky5d = ![]), pgfb === void 0x0 && (pgfb = ![]), pag0fl === void 0x0 && (pag0fl = 0x0), k52xy3 === void 0x0 && (k52xy3 = 0x3), z9_er['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z9_er), ykx523['EnvConfig']['resMgrLoad'](z9_er, (n9me6o, $en9_o, ky23x) => {
        aipbg['prototype']['resMgrLoadCallBack'](n9me6o, $en9_o, ky23x, whjs8);
      }, c_$rz, ctky5d, pgfb, pag0fl, k52xy3);
    }, wqsj8['resMgrLoadCallBack'] = function ($rtzdc, p0flg, ytrcd, _er9$) {
      console['log']('buff:::', $rtzdc, ytrcd, h481m['fileNativeDir'] + '///' + h481m['fileListName']), _er9$($rtzdc, p0flg, ytrcd);
    }, wqsj8['clearRes'] = function (xk5yt, j481m) {
      j481m === void 0x0 && (j481m = ![]);var e9_z$ = this;e9_z$['clearRes'](xk5yt, j481m);var om96en = h481m['getFileInfo'](xk5yt);if (om96en && (xk5yt['indexOf']('http://') != -0x1 || xk5yt['indexOf']('https://') != -0x1)) {
        var rc$tdz = om96en['md5'],
            avigb = h481m['getFileNativePath'](rc$tdz);h481m['remove'](avigb);
      }
    }, aipbg['onReadNativeCallBack'] = function ($rez_, x02fp, cdr$_, xflp2, gl0afp, n164h, a0pl, vgbi7, f3x05) {
      xflp2 === void 0x0 && (xflp2 = !![]), n164h === void 0x0 && (n164h = ![]), vgbi7 === void 0x0 && (vgbi7 = 0x0);if (!vgbi7) {
        var ydctr;if (cdr$_ == 'json' || cdr$_ == 'atlas') ydctr = ykx523['getJson'](f3x05['data']);else cdr$_ == 'xml' ? ydctr = b7gavi['parseXMLFromString'](f3x05['data']) : ydctr = f3x05['data'];a0pl['onLoaded'](ydctr), !ykx523['isZiYu'] && ykx523['isPosMsgYu'] && cdr$_ != 'arraybuffer' && wx['postMessage']({ 'url': x02fp, 'data': ydctr, 'isLoad': !![] });
      } else vgbi7 == 0x1 && ykx523['EnvConfig']['load']['call'](a0pl, x02fp, cdr$_, xflp2, gl0afp, n164h);
    }, qujws8(aipbg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), aipbg;
  }(),
      h481m = function (_$9ezr) {
    function dktrzc() {
      dktrzc['__super']['call'](this);;
    }return e69_no(dktrzc, 'laya.wx.mini.MiniFileMgr', _$9ezr), dktrzc['isLoadFile'] = function (tx) {
      return dktrzc['_fileTypeArr']['indexOf'](tx) != -0x1 ? !![] : ![];
    }, dktrzc['getFileInfo'] = function (y35x2k) {
      var cz_$rd = y35x2k['split']('?')[0x0],
          rdzck = dktrzc['filesListObj'][cz_$rd];if (rdzck == null) return null;else return rdzck;return null;
    }, dktrzc['onFileUpdate'] = function (yk5tdc, $on9) {
      var gaivl = yk5tdc['split']('/'),
          bgai7 = gaivl[gaivl['length'] - 0x1],
          cykd5 = dktrzc['getFileInfo']($on9);if (cykd5 == null) dktrzc['onSaveFile']($on9, bgai7);else {
        if (cykd5['readyUrl'] != $on9) dktrzc['remove'](bgai7, $on9);
      }
    }, dktrzc['exits'] = function (squj, _edz) {
      var h184j = dktrzc['getFileNativePath'](squj);dktrzc['fs']['getFileInfo']({ 'filePath': h184j, 'success': function (gablvi) {
          _edz != null && _edz['runWith']([0x0, gablvi]);
        }, 'fail': function (usqj) {
          _edz != null && _edz['runWith']([0x1, usqj]);
        } });
    }, dktrzc['read'] = function (x2y03, crdt$, m1n6h, n96m) {
      crdt$ === void 0x0 && (crdt$ = 'ascill'), n96m === void 0x0 && (n96m = '');var cdk5yt;n96m != '' ? cdk5yt = dktrzc['getFileNativePath'](x2y03) : cdk5yt = x2y03, dktrzc['fs']['readFile']({ 'filePath': cdk5yt, 'encoding': crdt$, 'success': function (e9r$z) {
          m1n6h != null && m1n6h['runWith']([0x0, e9r$z]);
        }, 'fail': function (x30fp2) {
          if (x30fp2 && n96m != '') dktrzc['down'](n96m, crdt$, m1n6h, n96m);else m1n6h != null && m1n6h['runWith']([0x1]);
        } });
    }, dktrzc['readNativeFile'] = function (cy3kt, h81j4s) {
      dktrzc['fs']['readFile']({ 'filePath': cy3kt, 'encoding': '', 'success': function (fxp03) {
          h81j4s != null && h81j4s['runWith']([0x0]);
        }, 'fail': function (dc$z) {
          h81j4s != null && h81j4s['runWith']([0x1]);
        } });
    }, dktrzc['down'] = function (fx0p23, tkdr, aigblv, rez9_$) {
      tkdr === void 0x0 && (tkdr = 'ascill'), rez9_$ === void 0x0 && (rez9_$ = '');var $_on9 = dktrzc['getFileNativePath'](rez9_$),
          _$9 = dktrzc['wxdown']({ 'url': fx0p23, 'filePath': $_on9, 'success': function (_$9oz) {
          if (_$9oz['statusCode'] === 0xc8) dktrzc['readFile'](_$9oz['filePath'], tkdr, aigblv, rez9_$);
        }, 'fail': function (jhsu8w) {
          aigblv != null && aigblv['runWith']([0x1, jhsu8w]);
        } });_$9['onProgressUpdate'](function (ivba7) {
        aigblv != null && aigblv['runWith']([0x2, ivba7['progress']]);
      });
    }, dktrzc['readFile'] = function (j18wsh, p032f, gbpil, hm148) {
      p032f === void 0x0 && (p032f = 'ascill'), hm148 === void 0x0 && (hm148 = ''), dktrzc['fs']['readFile']({ 'filePath': j18wsh, 'encoding': p032f, 'success': function (rczdkt) {
          if (j18wsh['indexOf']('http://') != -0x1 || j18wsh['indexOf']('https://') != -0x1) dktrzc['onFileUpdate'](j18wsh, hm148);gbpil != null && gbpil['runWith']([0x0, rczdkt]);
        }, 'fail': function (x3tk) {
          if (x3tk) gbpil != null && gbpil['runWith']([0x1, x3tk]);
        } });
    }, dktrzc['downImg'] = function (zrtkdc, $e_r9z, $_noe) {
      $_noe === void 0x0 && ($_noe = '');var s8juhw = dktrzc['wxdown']({ 'url': zrtkdc, 'success': function (_$9zeo) {
          _$9zeo['statusCode'] === 0xc8 && dktrzc['copyFile'](_$9zeo['tempFilePath'], $_noe, $e_r9z);
        }, 'fail': function (omn6) {
          $e_r9z != null && $e_r9z['runWith']([0x1, omn6]);
        } });
    }, dktrzc['copyFile'] = function ($_dze, jh418s, ju8s) {
      var mj148 = $_dze['split']('/'),
          n9_o$ = mj148[mj148['length'] - 0x1],
          wu8j = jh418s['split']('?')[0x0],
          d$_ez = dktrzc['getFileInfo'](jh418s),
          jsqu = dktrzc['getFileNativePath'](n9_o$);dktrzc['fs']['copyFile']({ 'srcPath': $_dze, 'destPath': jsqu, 'success': function (_one9) {
          if (!d$_ez) dktrzc['onSaveFile'](jh418s, n9_o$), ju8s != null && ju8s['runWith']([0x0]);else {
            if (d$_ez['readyUrl'] != jh418s) dktrzc['remove'](n9_o$, jh418s, ju8s);
          }
        }, 'fail': function (h41jm8) {
          ju8s != null && ju8s['runWith']([0x1, h41jm8]);
        } });
    }, dktrzc['getFileNativePath'] = function (ytckr) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ytckr;
    }, dktrzc['remove'] = function (m61h84, vlgi, gvi7ab) {
      vlgi === void 0x0 && (vlgi = '');var t53ky = dktrzc['getFileInfo'](vlgi),
          rztdc = dktrzc['getFileNativePath'](t53ky['md5']);vigb7['loader']['clearRes'](t53ky['readyUrl']), dktrzc['fs']['unlink']({ 'filePath': rztdc, 'success': function (apbgf) {
          if (vlgi != '') dktrzc['onSaveFile'](vlgi, m61h84);gvi7ab != null && gvi7ab['runWith']([0x0]);
        }, 'fail': function (m14jh) {} });
    }, dktrzc['onSaveFile'] = function (fa20lp, om946n) {
      var k3cy5t = fa20lp['split']('?')[0x0];dktrzc['filesListObj'][k3cy5t] = { 'md5': om946n, 'readyUrl': fa20lp }, dktrzc['fs']['writeFile']({ 'filePath': dktrzc['fileNativeDir'] + '/' + dktrzc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dktrzc['filesListObj']), 'success': function (qswuj8) {
          console['log']('写入测试测试成功：', qswuj8);
        }, 'fail': function (l20xf) {
          console['log']('写入测试测试失败：', l20xf);
        } });
    }, dktrzc['existDir'] = function (h6m18, lbpfga) {
      dktrzc['fs']['mkdir']({ 'dirPath': h6m18, 'success': function (juw8h) {
          lbpfga != null && lbpfga['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_rdz$e) {
          if (_rdz$e['errMsg']['indexOf']('file already exists') != -0x1) dktrzc['readSync'](dktrzc['fileListName'], 'utf8', lbpfga);else lbpfga != null && lbpfga['runWith']([0x1, _rdz$e]);
        } });
    }, dktrzc['readSync'] = function (afblpg, c$dr_, tzckdr, tyck5d) {
      c$dr_ === void 0x0 && (c$dr_ = 'ascill'), tyck5d === void 0x0 && (tyck5d = '');var czrtd$ = dktrzc['getFileNativePath'](afblpg),
          kct5dy;try {
        kct5dy = dktrzc['fs']['readFileSync'](czrtd$), tzckdr != null && tzckdr['runWith']([0x0, { 'data': kct5dy }]);
      } catch (tcrz$) {
        tzckdr != null && tzckdr['runWith']([0x1]);
      }
    }, dktrzc['readCache'] = function () {}, dktrzc['writeCache'] = function (fblapg) {
      var rz$cd = readyUrl['split']('?')[0x0];dktrzc['filesListObj'][rz$cd] = { 'md5': md5Name, 'readyUrl': readyUrl }, dktrzc['fs']['writeFile']({ 'filePath': dktrzc['fileNativeDir'] + '/' + dktrzc['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](dktrzc['filesListObj']), 'success': function (n9ome) {}, 'fail': function (_crzd$) {} });
    }, dktrzc['setNativeFileDir'] = function (cz_rd) {
      dktrzc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cz_rd;
    }, dktrzc['filesListObj'] = {}, dktrzc['fileNativeDir'] = null, dktrzc['fileListName'] = 'layaairfiles.txt', dktrzc['ziyuFileData'] = {}, qujws8(dktrzc, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), dktrzc;
  }(gpfla0),
      c35ytk = function (vlia) {
    function rzktdc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], rzktdc['__super']['call'](this), this['_sound'] = rzktdc['_createSound']();
    }e69_no(rzktdc, 'laya.wx.mini.MiniSound', vlia);var dz$r_ = rzktdc['prototype'];return dz$r_['load'] = function (nm496o) {
      var quj8w = this;nm496o = xykt35['formatURL'](nm496o), this['url'] = nm496o;if (rzktdc['_audioCache'][nm496o]) {
        this['event']('complete');return;
      }function yt5dkc() {
        if (rzktdc['_null'] != undefined) quj8w['_sound']['onCanplay'](rzktdc['_null']), quj8w['_sound']['onError'](rzktdc['_null']);else try {
          quj8w['_sound']['onCanplay'](null), quj8w['_sound']['onError'](null), rzktdc['_null'] = null;
        } catch (z$tcrd) {
          console['warn']('[wxmini] _clearSound:' + z$tcrd), quj8w['_sound']['onCanplay'](lfx0p), quj8w['_sound']['onError'](lfx0p), rzktdc['_null'] = lfx0p;
        }
      }function shuj8() {
        yt5dkc(), kcyt['loaded'] = !![], kcyt['event']('complete'), rzktdc['_audioCache'][kcyt['url']] = kcyt;
      }function afl0pg(h186m) {
        console['error']('errCode=' + h186m['errCode'] + '  errMsg=' + h186m['errMsg']), yt5dkc(), kcyt['event']('error');
      }function lfx0p() {}this['_sound']['onCanplay'](shuj8), this['_sound']['onError'](afl0pg), this['_sound']['src'] = nm496o;var kcyt = this;
    }, dz$r_['play'] = function (dyt5c, ykt5cd) {
      dyt5c === void 0x0 && (dyt5c = 0x0), ykt5cd === void 0x0 && (ykt5cd = 0x0);var a0l2p;if (this['url'] == _c$r['_tMusic']) {
        if (!rzktdc['_musicAudio']) rzktdc['_musicAudio'] = rzktdc['_createSound']();a0l2p = rzktdc['_musicAudio'];
      } else a0l2p = rzktdc['_createSound']();a0l2p['src'] = this['url'];var qsw8u = new pgbal(a0l2p);return qsw8u['url'] = this['url'], qsw8u['loops'] = ykt5cd, qsw8u['startTime'] = dyt5c, qsw8u['play'](), _c$r['addChannel'](qsw8u), qsw8u;
    }, dz$r_['dispose'] = function () {
      var t3kyc5 = rzktdc['_audioCache'][this['url']];t3kyc5 && (t3kyc5['src'] = '', delete rzktdc['_audioCache'][this['url']]);
    }, rd_zc$(0x0, dz$r_, 'duration', function () {
      return this['_sound']['duration'];
    }), rzktdc['_createSound'] = function () {
      return rzktdc['_id']++, ykx523['window']['wx']['createInnerAudioContext']();
    }, rzktdc['_musicAudio'] = null, rzktdc['_id'] = 0x0, rzktdc['_audioCache'] = {}, rzktdc['_null'] = undefined, rzktdc;
  }(gpfla0),
      pgbal = function (vigla) {
    function txk5($_cdr) {
      this['_audio'] = null, this['_onEnd'] = null, txk5['__super']['call'](this), this['_audio'] = $_cdr, this['_onEnd'] = b7gavi['bind'](this['__onEnd'], this), $_cdr['onEnded'](this['_onEnd']);
    }e69_no(txk5, 'laya.wx.mini.MiniSoundChannel', vigla);var pfaglb = txk5['prototype'];return pfaglb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vigb7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, pfaglb['__onNull'] = function () {}, pfaglb['play'] = function () {
      this['isStopped'] = ![], _c$r['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, pfaglb['stop'] = function () {
      this['isStopped'] = !![], _c$r['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (txk5['_null'] != undefined) this['_audio']['onEnded'](txk5['_null']);else try {
        this['_audio']['onEnded'](null), txk5['_null'] = null;
      } catch (xl02p) {
        console['warn']('[wxmini] stop:' + xl02p), this['_audio']['onEnded'](b7gavi['bind'](this['__onNull'], this)), txk5['_null'] = b7gavi['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, pfaglb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, pfaglb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], _c$r['addChannel'](this), this['_audio']['play']();
    }, rd_zc$(0x0, pfaglb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rd_zc$(0x0, pfaglb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rd_zc$(0x0, pfaglb, 'volume', function () {
      return 0x1;
    }, function (q8wuj) {}), txk5['_null'] = undefined, txk5;
  }(ap0lf2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var n964o in Laya) {
    var n$o9e = Laya[n964o];n$o9e && n$o9e['__isclass'] && (exports[n964o] = n$o9e);
  }
});