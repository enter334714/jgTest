var Q = wx.$I;
(function (window, document, e2kus) {
  var ksue7 = e2kus['un'],
      l$izr = e2kus['uns'],
      keub7 = e2kus['static'],
      hn5 = e2kus['class'],
      n54xh = e2kus['getset'],
      $0zig = e2kus['__newvec'],
      tizrl = laya['utils']['Browser'],
      j6f_a = laya['events']['Event'],
      b3a6e = laya['events']['EventDispatcher'],
      j367ba = laya['resource']['HTMLImage'],
      wn2k5 = laya['utils']['Handler'],
      _j86fa = laya['display']['Input'],
      vm91tr = laya['net']['Loader'],
      oz0yd = laya['maths']['Matrix'],
      r0li$ = laya['renders']['Render'],
      h5w4 = laya['utils']['RunDriver'],
      sukqb = laya['media']['Sound'],
      zgylo0 = laya['media']['SoundChannel'],
      mfp = laya['media']['SoundManager'],
      h4x5nw = laya['display']['Stage'],
      gyl0z = laya['net']['URL'],
      ks7 = laya['utils']['Utils'],
      rli0z = function () {
    function l$g0o() {}return hn5(l$g0o, 'laya.wx.mini.MiniAdpter'), l$g0o['getJson'] = function (p1cv9m) {
      return JSON['parse'](p1cv9m);
    }, l$g0o['init'] = function (ril0, god0) {
      ril0 === void 0x0 && (ril0 = ![]), god0 === void 0x0 && (god0 = ![]);if (l$g0o['_inited']) return;l$g0o['window'] = window;if (l$g0o['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l$g0o['_inited'] = !![], l$g0o['isZiYu'] = god0, l$g0o['isPosMsgYu'] = ril0, l$g0o['EnvConfig'] = {}, !l$g0o['isZiYu'] && (lgy0o['setNativeFileDir']('/layaairGame'), lgy0o['existDir'](lgy0o['fileNativeDir'], wn2k5['create'](l$g0o, l$g0o['onMkdirCallBack']))), l$g0o['window']['focus'] = function () {}, e2kus['getUrlPath'] = function () {}, l$g0o['window']['logtime'] = function (t9v) {}, l$g0o['window']['alertTimeLog'] = function (pc1v9) {}, l$g0o['window']['resetShareInfo'] = function () {}, l$g0o['window']['CanvasRenderingContext2D'] = function () {}, l$g0o['window']['CanvasRenderingContext2D']['prototype'] = l$g0o['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l$g0o['window']['document']['body']['appendChild'] = function () {}, l$g0o['EnvConfig']['pixelRatioInt'] = 0x0, h5w4['getPixelRatio'] = l$g0o['pixelRatio'], l$g0o['_preCreateElement'] = tizrl['createElement'], tizrl['createElement'] = l$g0o['createElement'], h5w4['createShaderCondition'] = l$g0o['createShaderCondition'], ks7['parseXMLFromString'] = l$g0o['parseXMLFromString'], _j86fa['_createInputElement'] = j3b67['_createInputElement'], l$g0o['EnvConfig']['load'] = vm91tr['prototype']['load'], vm91tr['prototype']['load'] = qnu2sk['prototype']['load'], l$g0o['isZiYu'] && ril0 && wx['onMessage'](function (ubse7k) {
        ubse7k['isLoad'] && (lgy0o['ziyuFileData'][ubse7k['url']] = ubse7k['data']);
      });
    }, l$g0o['onMkdirCallBack'] = function (e7su, rmvt1) {
      if (!e7su) lgy0o['filesListObj'] = JSON['parse'](rmvt1['data']);
    }, l$g0o['pixelRatio'] = function () {
      if (!l$g0o['EnvConfig']['pixelRatioInt']) try {
        var ygloz = wx['getSystemInfoSync']();return l$g0o['EnvConfig']['pixelRatioInt'] = ygloz['pixelRatio'], ygloz = ygloz, ygloz['pixelRatio'];
      } catch (fp_m) {}return l$g0o['EnvConfig']['pixelRatioInt'];
    }, l$g0o['createElement'] = function (l$9it) {
      if (l$9it == 'canvas') {
        var rvti$9;return l$g0o['idx'] == 0x1 ? l$g0o['isZiYu'] ? (rvti$9 = sharedCanvas, rvti$9['style'] = {}) : rvti$9 = window['canvas'] : rvti$9 = window['wx']['createCanvas'](), l$g0o['idx']++, rvti$9;
      } else {
        if (l$9it == 'textarea' || l$9it == 'input') return l$g0o['onCreateInput'](l$9it);else {
          if (l$9it == 'div') {
            var f_8pc1 = l$g0o['_preCreateElement'](l$9it);return f_8pc1['contains'] = function (tr9$l) {
              return null;
            }, f_8pc1['removeChild'] = function (ir9$tv) {}, f_8pc1;
          } else return l$g0o['_preCreateElement'](l$9it);
        }
      }
    }, l$g0o['onCreateInput'] = function (w2hn4) {
      var $zgo0l = l$g0o['_preCreateElement'](w2hn4);return $zgo0l['focus'] = j3b67['wxinputFocus'], $zgo0l['blur'] = j3b67['wxinputblur'], $zgo0l['style'] = {}, $zgo0l['value'] = 0x0, $zgo0l['parentElement'] = {}, $zgo0l['placeholder'] = {}, $zgo0l['type'] = {}, $zgo0l['setColor'] = function (p9cv) {}, $zgo0l['setType'] = function (mp1cv) {}, $zgo0l['setFontFace'] = function (bues3) {}, $zgo0l['addEventListener'] = function (tr$vi) {}, $zgo0l['contains'] = function (l9ti$) {
        return null;
      }, $zgo0l['removeChild'] = function (ksn2) {}, $zgo0l;
    }, l$g0o['createShaderCondition'] = function (ygd0o) {
      var v1tm9r = this,
          gol0z$ = function () {
        var $riz = ygd0o;return v1tm9r[ygd0o['replace']('this.', '')];
      };return gol0z$;
    }, l$g0o['EnvConfig'] = null, l$g0o['window'] = null, l$g0o['_preCreateElement'] = null, l$g0o['_inited'] = ![], l$g0o['wxRequest'] = null, l$g0o['systemInfo'] = null, l$g0o['version'] = '0.0.1', l$g0o['isZiYu'] = ![], l$g0o['isPosMsgYu'] = ![], l$g0o['parseXMLFromString'] = function (gozl$0) {
      var mpvcf1, hx5n;gozl$0 = gozl$0['replace'](/>\s+</g, '><');try {
        mpvcf1 = new window['Parser']['DOMParser']()['parseFromString'](gozl$0, 'text/xml');
      } catch (z0oyg) {
        throw '需要引入xml解析库文件';
      }return mpvcf1;
    }, l$g0o['idx'] = 0x1, l$g0o;
  }(),
      glz0oy = function () {
    function gol0$() {}hn5(gol0$, 'laya.wx.mini.MiniImage');var mpc1f = gol0$['prototype'];return mpc1f['_loadImage'] = function ($9tri) {
      var n5whx = this,
          bsek7 = ![];$9tri['indexOf']('layaNativeDir/') == -0x1 && (bsek7 = !![], $9tri = gyl0z['formatURL']($9tri));if (!lgy0o['getFileInfo']($9tri)) {
        if ($9tri['indexOf']('http://') != -0x1 || $9tri['indexOf']('https://') != -0x1) lgy0o['downImg']($9tri, new wn2k5(gol0$, gol0$['onDownImgCallBack'], [$9tri, n5whx]), $9tri);else gol0$['onCreateImage']($9tri, n5whx, !![]);
      } else gol0$['onCreateImage']($9tri, n5whx, !bsek7);
    }, gol0$['onDownImgCallBack'] = function (wnk2q5, ea376, z0lg$) {
      if (!z0lg$) gol0$['onCreateImage'](wnk2q5, ea376);else ea376['onError'](null);
    }, gol0$['onCreateImage'] = function (b36s7, fj_6a8, b7kse) {
      b7kse === void 0x0 && (b7kse = ![]);var a6e3b;if (!b7kse) {
        var _3aj86 = lgy0o['getFileInfo'](b36s7),
            w52hn = _3aj86['md5'];a6e3b = lgy0o['getFileNativePath'](w52hn);
      } else a6e3b = b36s7;if (fj_6a8['imgCache'] == null) fj_6a8['imgCache'] = {};var wq;function jcp_8() {
        wq['onload'] = null, wq['onerror'] = null, delete fj_6a8['imgCache'][b36s7];
      };var qwn5k = function () {
        jcp_8(), fj_6a8['onLoaded'](wq);
      },
          $rilzt = function () {
        jcp_8(), fj_6a8['event']('error', 'Load image failed');
      };fj_6a8['_type'] == 'nativeimage' ? (wq = new tizrl['window']['Image'](), wq['crossOrigin'] = '', wq['onload'] = qwn5k, wq['onerror'] = $rilzt, wq['src'] = a6e3b, fj_6a8['imgCache'][b36s7] = wq) : new j367ba['create'](a6e3b, { 'onload': qwn5k, 'onerror': $rilzt, 'onCreate': function (ae7b6) {
          wq = ae7b6, fj_6a8['imgCache'][b36s7] = ae7b6;
        } });
    }, gol0$;
  }(),
      j3b67 = function () {
    function fc1v() {}return hn5(fc1v, 'laya.wx.mini.MiniInput'), fc1v['_createInputElement'] = function () {
      _j86fa['_initInput'](_j86fa['area'] = tizrl['createElement']('textarea')), _j86fa['_initInput'](_j86fa['input'] = tizrl['createElement']('input')), _j86fa['inputContainer'] = tizrl['createElement']('div'), _j86fa['inputContainer']['style']['position'] = 'absolute', _j86fa['inputContainer']['style']['zIndex'] = 0x186a0, tizrl['container']['appendChild'](_j86fa['inputContainer']), _j86fa['inputContainer']['setPos'] = function (knw25q, z$lr0) {
        _j86fa['inputContainer']['style']['left'] = knw25q + 'px', _j86fa['inputContainer']['style']['top'] = z$lr0 + 'px';
      }, e2kus['stage']['on']('resize', null, fc1v['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (b76es3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), mfp['_soundClass'] = equbs, mfp['_musicClass'] = equbs;
    }, fc1v['_onStageResize'] = function () {
      var fv1pm = e2kus['stage']['_canvasTransform']['identity']();fv1pm['scale'](tizrl['width'] / r0li$['canvas']['width'] / h5w4['getPixelRatio'](), tizrl['height'] / r0li$['canvas']['height'] / h5w4['getPixelRatio']());
    }, fc1v['wxinputFocus'] = function (es2kuq) {
      var y0dgzo = _j86fa['inputElement']['target'];if (y0dgzo && !y0dgzo['editable']) return;rli0z['window']['wx']['offKeyboardConfirm'](), rli0z['window']['wx']['offKeyboardInput'](), rli0z['window']['wx']['showKeyboard']({ 'defaultValue': y0dgzo['text'], 'maxLength': y0dgzo['maxChars'], 'multiple': y0dgzo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nh4x5) {}, 'fail': function (cmt19) {} }), rli0z['window']['wx']['onKeyboardConfirm'](function (ja8736) {
        var $0ozlg = ja8736 ? ja8736['value'] : '';y0dgzo['text'] = $0ozlg, y0dgzo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rli0z['window']['wx']['onKeyboardInput'](function (tri9mv) {
        var lt9ir = tri9mv ? tri9mv['value'] : '';if (!y0dgzo['multiline']) {
          if (lt9ir['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y0dgzo['text'] = lt9ir, y0dgzo['event']('input');
      });
    }, fc1v['inputEnter'] = function () {
      _j86fa['inputElement']['target']['focus'] = ![];
    }, fc1v['wxinputblur'] = function () {
      fc1v['hideKeyboard']();
    }, fc1v['hideKeyboard'] = function () {
      rli0z['window']['wx']['offKeyboardConfirm'](), rli0z['window']['wx']['offKeyboardInput'](), rli0z['window']['wx']['hideKeyboard']({ 'success': function (yd0z) {
          console['log']('隐藏键盘');
        }, 'fail': function (aj_f8) {
          console['log']('隐藏键盘出错:' + (aj_f8 ? aj_f8['errMsg'] : ''));
        } });
    }, fc1v;
  }(),
      qnu2sk = function () {
    function yogd0() {}hn5(yogd0, 'laya.wx.mini.MiniLoader');var ues7 = yogd0['prototype'];return ues7['load'] = function (vmp, $vt9ir, dgoy, nusqk, og0) {
      dgoy === void 0x0 && (dgoy = !![]), og0 === void 0x0 && (og0 = ![]);var qbke = this;qbke['_url'] = vmp;if (vmp['indexOf']('data:image') === 0x0) qbke['_type'] = $vt9ir = 'image';else qbke['_type'] = $vt9ir || ($vt9ir = qbke['getTypeFromUrl'](vmp));qbke['_cache'] = dgoy, qbke['_data'] = null;var gz0$l = 'ascii';if (vmp['indexOf']('.fnt') != -0x1) gz0$l = 'utf8';else $vt9ir == 'arraybuffer' && (gz0$l = '');;var zgl$i = ks7['getFileExtension'](vmp);if (yogd0['_fileTypeArr']['indexOf'](zgl$i) != -0x1) rli0z['EnvConfig']['load']['call'](this, vmp, $vt9ir, dgoy, nusqk, og0);else {
        if (!lgy0o['getFileInfo'](vmp)) {
          if (vmp['indexOf']('layaNativeDir/') != -0x1) {
            if (rli0z['isZiYu']) {
              var lgi = lgy0o['ziyuFileData'][vmp];qbke['onLoaded'](lgi);return;
            } else {
              cosnole['log']('read read'), lgy0o['read'](vmp, gz0$l, new wn2k5(yogd0, yogd0['onReadNativeCallBack'], [gz0$l, vmp, $vt9ir, dgoy, nusqk, og0, qbke]));return;
            }
          }if (gyl0z['rootPath'] == '') var ebs67 = vmp;else ebs67 = vmp['split'](gyl0z['rootPath'])[0x0];vmp['indexOf']('http://') != -0x1 || vmp['indexOf']('https://') != -0x1 ? rli0z['EnvConfig']['load']['call'](qbke, vmp, $vt9ir, dgoy, nusqk, og0) : lgy0o['readFile'](ebs67, gz0$l, new wn2k5(yogd0, yogd0['onReadNativeCallBack'], [gz0$l, vmp, $vt9ir, dgoy, nusqk, og0, qbke]), vmp);
        } else rli0z['EnvConfig']['load']['call'](this, vmp, $vt9ir, dgoy, nusqk, og0);
      }
    }, ues7['resMgrLoad'] = function (eu2ksq, yzog0d, pmfcv1, r91m, ct9m, s67e, izrlt$) {
      pmfcv1 === void 0x0 && (pmfcv1 = 0x0), r91m === void 0x0 && (r91m = ![]), ct9m === void 0x0 && (ct9m = ![]), s67e === void 0x0 && (s67e = 0x0), izrlt$ === void 0x0 && (izrlt$ = 0x3), eu2ksq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', eu2ksq), rli0z['EnvConfig']['resMgrLoad'](eu2ksq, (_6ja8, ubseqk, j86_3) => {
        yogd0['prototype']['resMgrLoadCallBack'](_6ja8, ubseqk, j86_3, yzog0d);
      }, pmfcv1, r91m, ct9m, s67e, izrlt$);
    }, ues7['resMgrLoadCallBack'] = function (fvpm1c, z0gdo, xnw, c9pv1) {
      console['log']('buff:::', fvpm1c, xnw, lgy0o['fileNativeDir'] + '///' + lgy0o['fileListName']), c9pv1(fvpm1c, z0gdo, xnw);
    }, ues7['clearRes'] = function (uek7s, lig) {
      lig === void 0x0 && (lig = ![]);var cp_j8 = this;cp_j8['clearRes'](uek7s, lig);var trm91v = lgy0o['getFileInfo'](uek7s);if (trm91v && (uek7s['indexOf']('http://') != -0x1 || uek7s['indexOf']('https://') != -0x1)) {
        var beqku = trm91v['md5'],
            f1vcpm = lgy0o['getFileNativePath'](beqku);lgy0o['remove'](f1vcpm);
      }
    }, yogd0['onReadNativeCallBack'] = function (pv9, p1vmc, p8f_1c, c81f_, qu52kn, cpf1_m, _af8j, gzo$0, yo0lz) {
      c81f_ === void 0x0 && (c81f_ = !![]), cpf1_m === void 0x0 && (cpf1_m = ![]), gzo$0 === void 0x0 && (gzo$0 = 0x0);if (!gzo$0) {
        var paf_j;if (p8f_1c == 'json' || p8f_1c == 'atlas') paf_j = rli0z['getJson'](yo0lz['data']);else p8f_1c == 'xml' ? paf_j = ks7['parseXMLFromString'](yo0lz['data']) : paf_j = yo0lz['data'];_af8j['onLoaded'](paf_j), !rli0z['isZiYu'] && rli0z['isPosMsgYu'] && p8f_1c != 'arraybuffer' && wx['postMessage']({ 'url': p1vmc, 'data': paf_j, 'isLoad': !![] });
      } else gzo$0 == 0x1 && rli0z['EnvConfig']['load']['call'](_af8j, p1vmc, p8f_1c, c81f_, qu52kn, cpf1_m);
    }, keub7(yogd0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), yogd0;
  }(),
      lgy0o = function (il$r0) {
    function $0g() {
      $0g['__super']['call'](this);;
    }return hn5($0g, 'laya.wx.mini.MiniFileMgr', il$r0), $0g['isLoadFile'] = function (m1p_fc) {
      return $0g['_fileTypeArr']['indexOf'](m1p_fc) != -0x1 ? !![] : ![];
    }, $0g['getFileInfo'] = function (hxw45n) {
      var rv9m1t = hxw45n['split']('?')[0x0],
          $il0zr = $0g['filesListObj'][rv9m1t];if ($il0zr == null) return null;else return $il0zr;return null;
    }, $0g['onFileUpdate'] = function (z$0gil, q2knu) {
      var virt$9 = z$0gil['split']('/'),
          uqbks = virt$9[virt$9['length'] - 0x1],
          ilz0$r = $0g['getFileInfo'](q2knu);if (ilz0$r == null) $0g['onSaveFile'](q2knu, uqbks);else {
        if (ilz0$r['readyUrl'] != q2knu) $0g['remove'](uqbks, q2knu);
      }
    }, $0g['exits'] = function (f8jc_, rtzl$i) {
      var qksun2 = $0g['getFileNativePath'](f8jc_);$0g['fs']['getFileInfo']({ 'filePath': qksun2, 'success': function (fc1p_) {
          rtzl$i != null && rtzl$i['runWith']([0x0, fc1p_]);
        }, 'fail': function (bus37) {
          rtzl$i != null && rtzl$i['runWith']([0x1, bus37]);
        } });
    }, $0g['read'] = function (ebuksq, $rltzi, p8af, cmp19v) {
      $rltzi === void 0x0 && ($rltzi = 'ascill'), cmp19v === void 0x0 && (cmp19v = '');var rvt9mi;cmp19v != '' ? rvt9mi = $0g['getFileNativePath'](ebuksq) : rvt9mi = ebuksq, $0g['fs']['readFile']({ 'filePath': rvt9mi, 'encoding': $rltzi, 'success': function (af_jp8) {
          p8af != null && p8af['runWith']([0x0, af_jp8]);
        }, 'fail': function (mvp91) {
          if (mvp91 && cmp19v != '') $0g['down'](cmp19v, $rltzi, p8af, cmp19v);else p8af != null && p8af['runWith']([0x1]);
        } });
    }, $0g['readNativeFile'] = function (mvrti, _cf1m) {
      $0g['fs']['readFile']({ 'filePath': mvrti, 'encoding': '', 'success': function ($r0liz) {
          _cf1m != null && _cf1m['runWith']([0x0]);
        }, 'fail': function (s3bu7e) {
          _cf1m != null && _cf1m['runWith']([0x1]);
        } });
    }, $0g['down'] = function (qn24, j6a38, f8pc_j, ukbe7s) {
      j6a38 === void 0x0 && (j6a38 = 'ascill'), ukbe7s === void 0x0 && (ukbe7s = '');var faj_6 = $0g['getFileNativePath'](ukbe7s),
          esqu2 = $0g['wxdown']({ 'url': qn24, 'filePath': faj_6, 'success': function (vmc91p) {
          if (vmc91p['statusCode'] === 0xc8) $0g['readFile'](vmc91p['filePath'], j6a38, f8pc_j, ukbe7s);
        }, 'fail': function (a67bj3) {
          f8pc_j != null && f8pc_j['runWith']([0x1, a67bj3]);
        } });esqu2['onProgressUpdate'](function (z0odgy) {
        f8pc_j != null && f8pc_j['runWith']([0x2, z0odgy['progress']]);
      });
    }, $0g['readFile'] = function (glz$0o, dzy0, z$olg, su2kq) {
      dzy0 === void 0x0 && (dzy0 = 'ascill'), su2kq === void 0x0 && (su2kq = ''), $0g['fs']['readFile']({ 'filePath': glz$0o, 'encoding': dzy0, 'success': function (nx5hw) {
          if (glz$0o['indexOf']('http://') != -0x1 || glz$0o['indexOf']('https://') != -0x1) $0g['onFileUpdate'](glz$0o, su2kq);z$olg != null && z$olg['runWith']([0x0, nx5hw]);
        }, 'fail': function (li0$r) {
          if (li0$r) z$olg != null && z$olg['runWith']([0x1, li0$r]);
        } });
    }, $0g['downImg'] = function (z0loyg, $9rtil, faj_8p) {
      faj_8p === void 0x0 && (faj_8p = '');var kuqn2s = $0g['wxdown']({ 'url': z0loyg, 'success': function (knq) {
          knq['statusCode'] === 0xc8 && $0g['copyFile'](knq['tempFilePath'], faj_8p, $9rtil);
        }, 'fail': function (c1t9mv) {
          $9rtil != null && $9rtil['runWith']([0x1, c1t9mv]);
        } });
    }, $0g['copyFile'] = function (p8aj, u5qk2n, gl$) {
      var mtir9 = p8aj['split']('/'),
          irl0$z = mtir9[mtir9['length'] - 0x1],
          a8p_ = u5qk2n['split']('?')[0x0],
          a6378j = $0g['getFileInfo'](u5qk2n),
          qsub = $0g['getFileNativePath'](irl0$z);$0g['fs']['copyFile']({ 'srcPath': p8aj, 'destPath': qsub, 'success': function (j837a) {
          if (!a6378j) $0g['onSaveFile'](u5qk2n, irl0$z), gl$ != null && gl$['runWith']([0x0]);else {
            if (a6378j['readyUrl'] != u5qk2n) $0g['remove'](irl0$z, u5qk2n, gl$);
          }
        }, 'fail': function (m1vfp) {
          gl$ != null && gl$['runWith']([0x1, m1vfp]);
        } });
    }, $0g['getFileNativePath'] = function (cvp1m9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cvp1m9;
    }, $0g['remove'] = function (lyozg, vc9p1, _ja386) {
      vc9p1 === void 0x0 && (vc9p1 = '');var cp_m1 = $0g['getFileInfo'](vc9p1),
          r9imtv = $0g['getFileNativePath'](cp_m1['md5']);e2kus['loader']['clearRes'](cp_m1['readyUrl']), $0g['fs']['unlink']({ 'filePath': r9imtv, 'success': function (gzoy0d) {
          if (vc9p1 != '') $0g['onSaveFile'](vc9p1, lyozg);_ja386 != null && _ja386['runWith']([0x0]);
        }, 'fail': function (_fpja) {} });
    }, $0g['onSaveFile'] = function (wqk5n2, fvm1p) {
      var pv19 = wqk5n2['split']('?')[0x0];$0g['filesListObj'][pv19] = { 'md5': fvm1p, 'readyUrl': wqk5n2 }, $0g['fs']['writeFile']({ 'filePath': $0g['fileNativeDir'] + '/' + $0g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($0g['filesListObj']), 'success': function (n5wqk) {
          console['log']('写入测试测试成功：', n5wqk);
        }, 'fail': function (tiv) {
          console['log']('写入测试测试失败：', tiv);
        } });
    }, $0g['existDir'] = function (g$l0o, pv91) {
      $0g['fs']['mkdir']({ 'dirPath': g$l0o, 'success': function (zr0$il) {
          pv91 != null && pv91['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($vit9) {
          if ($vit9['errMsg']['indexOf']('file already exists') != -0x1) $0g['readSync']($0g['fileListName'], 'utf8', pv91);else pv91 != null && pv91['runWith']([0x1, $vit9]);
        } });
    }, $0g['readSync'] = function (z$lri0, gozyd, esqk2, u2qesk) {
      gozyd === void 0x0 && (gozyd = 'ascill'), u2qesk === void 0x0 && (u2qesk = '');var ue37bs = $0g['getFileNativePath'](z$lri0),
          q52kwn;try {
        q52kwn = $0g['fs']['readFileSync'](ue37bs), esqk2 != null && esqk2['runWith']([0x0, { 'data': q52kwn }]);
      } catch (rlz$0) {
        esqk2 != null && esqk2['runWith']([0x1]);
      }
    }, $0g['readCache'] = function () {}, $0g['writeCache'] = function (zgol0) {
      var mtvir9 = readyUrl['split']('?')[0x0];$0g['filesListObj'][mtvir9] = { 'md5': md5Name, 'readyUrl': readyUrl }, $0g['fs']['writeFile']({ 'filePath': $0g['fileNativeDir'] + '/' + $0g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($0g['filesListObj']), 'success': function ($tli9r) {}, 'fail': function (bj763) {} });
    }, $0g['setNativeFileDir'] = function (zirl$t) {
      $0g['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zirl$t;
    }, $0g['filesListObj'] = {}, $0g['fileNativeDir'] = null, $0g['fileListName'] = 'layaairfiles.txt', $0g['ziyuFileData'] = {}, keub7($0g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $0g;
  }(b3a6e),
      equbs = function (j3_a) {
    function p8j_fc() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], p8j_fc['__super']['call'](this), this['_sound'] = p8j_fc['_createSound']();
    }hn5(p8j_fc, 'laya.wx.mini.MiniSound', j3_a);var iv9t$ = p8j_fc['prototype'];return iv9t$['load'] = function ($t9irv) {
      var l$9irt = this;$t9irv = gyl0z['formatURL']($t9irv), this['url'] = $t9irv;if (p8j_fc['_audioCache'][$t9irv]) {
        this['event']('complete');return;
      }function wn54h2() {
        if (p8j_fc['_null'] != undefined) l$9irt['_sound']['onCanplay'](p8j_fc['_null']), l$9irt['_sound']['onError'](p8j_fc['_null']);else try {
          l$9irt['_sound']['onCanplay'](null), l$9irt['_sound']['onError'](null), p8j_fc['_null'] = null;
        } catch (qskbe) {
          console['warn']('[wxmini] _clearSound:' + qskbe), l$9irt['_sound']['onCanplay'](rmt9iv), l$9irt['_sound']['onError'](rmt9iv), p8j_fc['_null'] = rmt9iv;
        }
      }function mpcv19() {
        wn54h2(), tlir$9['loaded'] = !![], tlir$9['event']('complete'), p8j_fc['_audioCache'][tlir$9['url']] = tlir$9;
      }function keu2sq(e637bs) {
        console['error']('errCode=' + e637bs['errCode'] + '  errMsg=' + e637bs['errMsg']), wn54h2(), tlir$9['event']('error');
      }function rmt9iv() {}this['_sound']['onCanplay'](mpcv19), this['_sound']['onError'](keu2sq), this['_sound']['src'] = $t9irv;var tlir$9 = this;
    }, iv9t$['play'] = function (vrm9i, ea3b76) {
      vrm9i === void 0x0 && (vrm9i = 0x0), ea3b76 === void 0x0 && (ea3b76 = 0x0);var lg$0z;if (this['url'] == mfp['_tMusic']) {
        if (!p8j_fc['_musicAudio']) p8j_fc['_musicAudio'] = p8j_fc['_createSound']();lg$0z = p8j_fc['_musicAudio'];
      } else lg$0z = p8j_fc['_createSound']();lg$0z['src'] = this['url'];var zilrt$ = new jf8a(lg$0z);return zilrt$['url'] = this['url'], zilrt$['loops'] = ea3b76, zilrt$['startTime'] = vrm9i, zilrt$['play'](), mfp['addChannel'](zilrt$), zilrt$;
    }, iv9t$['dispose'] = function () {
      var glo0y = p8j_fc['_audioCache'][this['url']];glo0y && (glo0y['src'] = '', delete p8j_fc['_audioCache'][this['url']]);
    }, n54xh(0x0, iv9t$, 'duration', function () {
      return this['_sound']['duration'];
    }), p8j_fc['_createSound'] = function () {
      return p8j_fc['_id']++, rli0z['window']['wx']['createInnerAudioContext']();
    }, p8j_fc['_musicAudio'] = null, p8j_fc['_id'] = 0x0, p8j_fc['_audioCache'] = {}, p8j_fc['_null'] = undefined, p8j_fc;
  }(b3a6e),
      jf8a = function (ajf8_6) {
    function a_68(l0g$iz) {
      this['_audio'] = null, this['_onEnd'] = null, a_68['__super']['call'](this), this['_audio'] = l0g$iz, this['_onEnd'] = ks7['bind'](this['__onEnd'], this), l0g$iz['onEnded'](this['_onEnd']);
    }hn5(a_68, 'laya.wx.mini.MiniSoundChannel', ajf8_6);var c_fp18 = a_68['prototype'];return c_fp18['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (e2kus['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, c_fp18['__onNull'] = function () {}, c_fp18['play'] = function () {
      this['isStopped'] = ![], mfp['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, c_fp18['stop'] = function () {
      this['isStopped'] = !![], mfp['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a_68['_null'] != undefined) this['_audio']['onEnded'](a_68['_null']);else try {
        this['_audio']['onEnded'](null), a_68['_null'] = null;
      } catch (nq4w) {
        console['warn']('[wxmini] stop:' + nq4w), this['_audio']['onEnded'](ks7['bind'](this['__onNull'], this)), a_68['_null'] = ks7['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, c_fp18['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, c_fp18['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], mfp['addChannel'](this), this['_audio']['play']();
    }, n54xh(0x0, c_fp18, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), n54xh(0x0, c_fp18, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), n54xh(0x0, c_fp18, 'volume', function () {
      return 0x1;
    }, function (a63jb) {}), a_68['_null'] = undefined, a_68;
  }(zgylo0);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var skqeu in Laya) {
    var ajb = Laya[skqeu];ajb && ajb['__isclass'] && (exports[skqeu] = ajb);
  }
});