var g = wx.$Q;
(function (window, document, dktr) {
  var plbfag = dktr['un'],
      labfpg = dktr['uns'],
      n64o1 = dktr['static'],
      eo$z_ = dktr['class'],
      zdtr$c = dktr['getset'],
      jwsh81 = dktr['__newvec'],
      sj18hw = laya['utils']['Browser'],
      sjw8uq = laya['events']['Event'],
      quwsj = laya['events']['EventDispatcher'],
      kydrct = laya['resource']['HTMLImage'],
      ky5xt3 = laya['utils']['Handler'],
      rztc$ = laya['display']['Input'],
      $ez9o_ = laya['net']['Loader'],
      cky3 = laya['maths']['Matrix'],
      y2x53k = laya['renders']['Render'],
      fg0pa = laya['utils']['RunDriver'],
      c5kty3 = laya['media']['Sound'],
      o$9_ne = laya['media']['SoundChannel'],
      aibplg = laya['media']['SoundManager'],
      tk35xy = laya['display']['Stage'],
      rct$ = laya['net']['URL'],
      abpil = laya['utils']['Utils'],
      sw8qju = function () {
    function m1nh64() {}return eo$z_(m1nh64, 'laya.wx.mini.MiniAdpter'), m1nh64['getJson'] = function (gpabfl) {
      return JSON['parse'](gpabfl);
    }, m1nh64['init'] = function (_o, avg7bi) {
      _o === void 0x0 && (_o = ![]), avg7bi === void 0x0 && (avg7bi = ![]);if (m1nh64['_inited']) return;m1nh64['window'] = window;if (m1nh64['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;m1nh64['_inited'] = !![], m1nh64['isZiYu'] = avg7bi, m1nh64['isPosMsgYu'] = _o, m1nh64['EnvConfig'] = {}, !m1nh64['isZiYu'] && (ibpalg['setNativeFileDir']('/layaairGame'), ibpalg['existDir'](ibpalg['fileNativeDir'], ky5xt3['create'](m1nh64, m1nh64['onMkdirCallBack']))), m1nh64['window']['focus'] = function () {}, dktr['getUrlPath'] = function () {}, m1nh64['window']['logtime'] = function (k2x5) {}, m1nh64['window']['alertTimeLog'] = function (uhswj) {}, m1nh64['window']['resetShareInfo'] = function () {}, m1nh64['window']['CanvasRenderingContext2D'] = function () {}, m1nh64['window']['CanvasRenderingContext2D']['prototype'] = m1nh64['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], m1nh64['window']['document']['body']['appendChild'] = function () {}, m1nh64['EnvConfig']['pixelRatioInt'] = 0x0, fg0pa['getPixelRatio'] = m1nh64['pixelRatio'], m1nh64['_preCreateElement'] = sj18hw['createElement'], sj18hw['createElement'] = m1nh64['createElement'], fg0pa['createShaderCondition'] = m1nh64['createShaderCondition'], abpil['parseXMLFromString'] = m1nh64['parseXMLFromString'], rztc$['_createInputElement'] = ne9_['_createInputElement'], m1nh64['EnvConfig']['load'] = $ez9o_['prototype']['load'], $ez9o_['prototype']['load'] = s84h1['prototype']['load'], m1nh64['isZiYu'] && _o && wx['onMessage'](function (suwh8j) {
        suwh8j['isLoad'] && (ibpalg['ziyuFileData'][suwh8j['url']] = suwh8j['data']);
      });
    }, m1nh64['onMkdirCallBack'] = function (h8suwj, x32p0f) {
      if (!h8suwj) ibpalg['filesListObj'] = JSON['parse'](x32p0f['data']);
    }, m1nh64['pixelRatio'] = function () {
      if (!m1nh64['EnvConfig']['pixelRatioInt']) try {
        var tcdzrk = wx['getSystemInfoSync']();return m1nh64['EnvConfig']['pixelRatioInt'] = tcdzrk['pixelRatio'], tcdzrk = tcdzrk, tcdzrk['pixelRatio'];
      } catch (f0x) {}return m1nh64['EnvConfig']['pixelRatioInt'];
    }, m1nh64['createElement'] = function (alf2) {
      if (alf2 == 'canvas') {
        var hws1j8;return m1nh64['idx'] == 0x1 ? m1nh64['isZiYu'] ? (hws1j8 = sharedCanvas, hws1j8['style'] = {}) : hws1j8 = window['canvas'] : hws1j8 = window['wx']['createCanvas'](), m1nh64['idx']++, hws1j8;
      } else {
        if (alf2 == 'textarea' || alf2 == 'input') return m1nh64['onCreateInput'](alf2);else {
          if (alf2 == 'div') {
            var cyd5tk = m1nh64['_preCreateElement'](alf2);return cyd5tk['contains'] = function (gla0fp) {
              return null;
            }, cyd5tk['removeChild'] = function (rckyt) {}, cyd5tk;
          } else return m1nh64['_preCreateElement'](alf2);
        }
      }
    }, m1nh64['onCreateInput'] = function (l2pf0) {
      var ilpba = m1nh64['_preCreateElement'](l2pf0);return ilpba['focus'] = ne9_['wxinputFocus'], ilpba['blur'] = ne9_['wxinputblur'], ilpba['style'] = {}, ilpba['value'] = 0x0, ilpba['parentElement'] = {}, ilpba['placeholder'] = {}, ilpba['type'] = {}, ilpba['setColor'] = function (nmh164) {}, ilpba['setType'] = function (m6on) {}, ilpba['setFontFace'] = function (bgi7v) {}, ilpba['addEventListener'] = function (jqwu8) {}, ilpba['contains'] = function (l2pfa0) {
        return null;
      }, ilpba['removeChild'] = function (krdzct) {}, ilpba;
    }, m1nh64['createShaderCondition'] = function (lfpx20) {
      var rz9_$ = this,
          ztcd$r = function () {
        var _$dze = lfpx20;return rz9_$[lfpx20['replace']('this.', '')];
      };return ztcd$r;
    }, m1nh64['EnvConfig'] = null, m1nh64['window'] = null, m1nh64['_preCreateElement'] = null, m1nh64['_inited'] = ![], m1nh64['wxRequest'] = null, m1nh64['systemInfo'] = null, m1nh64['version'] = '0.0.1', m1nh64['isZiYu'] = ![], m1nh64['isPosMsgYu'] = ![], m1nh64['parseXMLFromString'] = function (r_9$ze) {
      var m41hn, h1sw8j;r_9$ze = r_9$ze['replace'](/>\s+</g, '><');try {
        m41hn = new window['Parser']['DOMParser']()['parseFromString'](r_9$ze, 'text/xml');
      } catch (c$dzrt) {
        throw '需要引入xml解析库文件';
      }return m41hn;
    }, m1nh64['idx'] = 0x1, m1nh64;
  }(),
      l0xp2f = function () {
    function xy35kt() {}eo$z_(xy35kt, 'laya.wx.mini.MiniImage');var vgbai = xy35kt['prototype'];return vgbai['_loadImage'] = function (eo$n9_) {
      var rktydc = this,
          tcrz$d = ![];eo$n9_['indexOf']('layaNativeDir/') == -0x1 && (tcrz$d = !![], eo$n9_ = rct$['formatURL'](eo$n9_));if (!ibpalg['getFileInfo'](eo$n9_)) {
        if (eo$n9_['indexOf']('http://') != -0x1 || eo$n9_['indexOf']('https://') != -0x1) ibpalg['downImg'](eo$n9_, new ky5xt3(xy35kt, xy35kt['onDownImgCallBack'], [eo$n9_, rktydc]), eo$n9_);else xy35kt['onCreateImage'](eo$n9_, rktydc, !![]);
      } else xy35kt['onCreateImage'](eo$n9_, rktydc, !tcrz$d);
    }, xy35kt['onDownImgCallBack'] = function (kcrdy, fa02, x2y350) {
      if (!x2y350) xy35kt['onCreateImage'](kcrdy, fa02);else fa02['onError'](null);
    }, xy35kt['onCreateImage'] = function (_9$one, ztc, xfp30) {
      xfp30 === void 0x0 && (xfp30 = ![]);var _oen$;if (!xfp30) {
        var blgfap = ibpalg['getFileInfo'](_9$one),
            u8sjqw = blgfap['md5'];_oen$ = ibpalg['getFileNativePath'](u8sjqw);
      } else _oen$ = _9$one;if (ztc['imgCache'] == null) ztc['imgCache'] = {};var m184hj;function en$o9() {
        m184hj['onload'] = null, m184hj['onerror'] = null, delete ztc['imgCache'][_9$one];
      };var l0f2ap = function () {
        en$o9(), ztc['onLoaded'](m184hj);
      },
          zrktdc = function () {
        en$o9(), ztc['event']('error', 'Load image failed');
      };ztc['_type'] == 'nativeimage' ? (m184hj = new sj18hw['window']['Image'](), m184hj['crossOrigin'] = '', m184hj['onload'] = l0f2ap, m184hj['onerror'] = zrktdc, m184hj['src'] = _oen$, ztc['imgCache'][_9$one] = m184hj) : new kydrct['create'](_oen$, { 'onload': l0f2ap, 'onerror': zrktdc, 'onCreate': function (o9$_ne) {
          m184hj = o9$_ne, ztc['imgCache'][_9$one] = o9$_ne;
        } });
    }, xy35kt;
  }(),
      ne9_ = function () {
    function e9z$r_() {}return eo$z_(e9z$r_, 'laya.wx.mini.MiniInput'), e9z$r_['_createInputElement'] = function () {
      rztc$['_initInput'](rztc$['area'] = sj18hw['createElement']('textarea')), rztc$['_initInput'](rztc$['input'] = sj18hw['createElement']('input')), rztc$['inputContainer'] = sj18hw['createElement']('div'), rztc$['inputContainer']['style']['position'] = 'absolute', rztc$['inputContainer']['style']['zIndex'] = 0x186a0, sj18hw['container']['appendChild'](rztc$['inputContainer']), rztc$['inputContainer']['setPos'] = function (al0fp, rkdtcz) {
        rztc$['inputContainer']['style']['left'] = al0fp + 'px', rztc$['inputContainer']['style']['top'] = rkdtcz + 'px';
      }, dktr['stage']['on']('resize', null, e9z$r_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sjh1w) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), aibplg['_soundClass'] = t5yxk3, aibplg['_musicClass'] = t5yxk3, window['_videoClass'] = m641no;
    }, e9z$r_['_onStageResize'] = function () {
      var ne_o$9 = dktr['stage']['_canvasTransform']['identity']();ne_o$9['scale'](sj18hw['width'] / y2x53k['canvas']['width'] / fg0pa['getPixelRatio'](), sj18hw['height'] / y2x53k['canvas']['height'] / fg0pa['getPixelRatio']());
    }, e9z$r_['wxinputFocus'] = function (dyck5t) {
      var k3y5 = rztc$['inputElement']['target'];if (k3y5 && !k3y5['editable']) return;sw8qju['window']['wx']['offKeyboardConfirm'](), sw8qju['window']['wx']['offKeyboardInput'](), sw8qju['window']['wx']['showKeyboard']({ 'defaultValue': k3y5['text'], 'maxLength': k3y5['maxChars'], 'multiple': k3y5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y0253x) {}, 'fail': function (plagfb) {} }), sw8qju['window']['wx']['onKeyboardConfirm'](function (_e9no$) {
        var z_r$9e = _e9no$ ? _e9no$['value'] : '';k3y5['text'] = z_r$9e, k3y5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), sw8qju['window']['wx']['onKeyboardInput'](function (yc5k) {
        var dztr$c = yc5k ? yc5k['value'] : '';if (!k3y5['multiline']) {
          if (dztr$c['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }k3y5['text'] = dztr$c, k3y5['event']('input');
      });
    }, e9z$r_['inputEnter'] = function () {
      rztc$['inputElement']['target']['focus'] = ![];
    }, e9z$r_['wxinputblur'] = function () {
      e9z$r_['hideKeyboard']();
    }, e9z$r_['hideKeyboard'] = function () {
      sw8qju['window']['wx']['offKeyboardConfirm'](), sw8qju['window']['wx']['offKeyboardInput'](), sw8qju['window']['wx']['hideKeyboard']({ 'success': function (zct) {
          console['log']('隐藏键盘');
        }, 'fail': function (o$z) {
          console['log']('隐藏键盘出错:' + (o$z ? o$z['errMsg'] : ''));
        } });
    }, e9z$r_;
  }(),
      s84h1 = function () {
    function ilavbg() {}eo$z_(ilavbg, 'laya.wx.mini.MiniLoader');var drykt = ilavbg['prototype'];return drykt['load'] = function (y5230x, c_r, o_$n9, tc5ydk, ne_o) {
      o_$n9 === void 0x0 && (o_$n9 = !![]), ne_o === void 0x0 && (ne_o = ![]);var rdz$c = this;rdz$c['_url'] = y5230x;if (y5230x['indexOf']('data:image') === 0x0) rdz$c['_type'] = c_r = 'image';else rdz$c['_type'] = c_r || (c_r = rdz$c['getTypeFromUrl'](y5230x));rdz$c['_cache'] = o_$n9, rdz$c['_data'] = null;var h6m14 = 'ascii';if (y5230x['indexOf']('.fnt') != -0x1) h6m14 = 'utf8';else c_r == 'arraybuffer' && (h6m14 = '');;var js8uh = abpil['getFileExtension'](y5230x);if (ilavbg['_fileTypeArr']['indexOf'](js8uh) != -0x1) sw8qju['EnvConfig']['load']['call'](this, y5230x, c_r, o_$n9, tc5ydk, ne_o);else {
        if (!ibpalg['getFileInfo'](y5230x)) {
          if (y5230x['indexOf']('layaNativeDir/') != -0x1) {
            if (sw8qju['isZiYu']) {
              var kzdctr = ibpalg['ziyuFileData'][y5230x];rdz$c['onLoaded'](kzdctr);return;
            } else {
              cosnole['log']('read read'), ibpalg['read'](y5230x, h6m14, new ky5xt3(ilavbg, ilavbg['onReadNativeCallBack'], [h6m14, y5230x, c_r, o_$n9, tc5ydk, ne_o, rdz$c]));return;
            }
          }if (rct$['rootPath'] == '') var usq8j = y5230x;else usq8j = y5230x['split'](rct$['rootPath'])[0x0];y5230x['indexOf']('http://') != -0x1 || y5230x['indexOf']('https://') != -0x1 ? sw8qju['EnvConfig']['load']['call'](rdz$c, y5230x, c_r, o_$n9, tc5ydk, ne_o) : ibpalg['readFile'](usq8j, h6m14, new ky5xt3(ilavbg, ilavbg['onReadNativeCallBack'], [h6m14, y5230x, c_r, o_$n9, tc5ydk, ne_o, rdz$c]), y5230x);
        } else sw8qju['EnvConfig']['load']['call'](this, y5230x, c_r, o_$n9, tc5ydk, ne_o);
      }
    }, drykt['resMgrLoad'] = function (jwuqs8, wh8s, rydktc, z_eo$9, p2fl0x, alpgf0, labpf) {
      rydktc === void 0x0 && (rydktc = 0x0), z_eo$9 === void 0x0 && (z_eo$9 = ![]), p2fl0x === void 0x0 && (p2fl0x = ![]), alpgf0 === void 0x0 && (alpgf0 = 0x0), labpf === void 0x0 && (labpf = 0x3), jwuqs8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jwuqs8), sw8qju['EnvConfig']['resMgrLoad'](jwuqs8, (flpa02, $zrde, f0lg) => {
        ilavbg['prototype']['resMgrLoadCallBack'](flpa02, $zrde, f0lg, wh8s);
      }, rydktc, z_eo$9, p2fl0x, alpgf0, labpf);
    }, drykt['resMgrLoadCallBack'] = function (j8shw, drtkzc, ky2x5, apbfl) {
      console['log']('buff:::', j8shw, ky2x5, ibpalg['fileNativeDir'] + '///' + ibpalg['fileListName']), apbfl(j8shw, drtkzc, ky2x5);
    }, drykt['clearRes'] = function (e$z_d, e$rd_) {
      e$rd_ === void 0x0 && (e$rd_ = ![]);var f0x23 = this;f0x23['clearRes'](e$z_d, e$rd_);var ushj = ibpalg['getFileInfo'](e$z_d);if (ushj && (e$z_d['indexOf']('http://') != -0x1 || e$z_d['indexOf']('https://') != -0x1)) {
        var pla0g = ushj['md5'],
            afglb = ibpalg['getFileNativePath'](pla0g);ibpalg['remove'](afglb);
      }
    }, ilavbg['onReadNativeCallBack'] = function (plgbaf, c5kyt, eoz$9, h1j8s4, whus, drc, gpilab, j1s84h, e_) {
      h1j8s4 === void 0x0 && (h1j8s4 = !![]), drc === void 0x0 && (drc = ![]), j1s84h === void 0x0 && (j1s84h = 0x0);if (!j1s84h) {
        var _re$;if (eoz$9 == 'json' || eoz$9 == 'atlas') _re$ = sw8qju['getJson'](e_['data']);else eoz$9 == 'xml' ? _re$ = abpil['parseXMLFromString'](e_['data']) : _re$ = e_['data'];gpilab['onLoaded'](_re$), !sw8qju['isZiYu'] && sw8qju['isPosMsgYu'] && eoz$9 != 'arraybuffer' && wx['postMessage']({ 'url': c5kyt, 'data': _re$, 'isLoad': !![] });
      } else j1s84h == 0x1 && sw8qju['EnvConfig']['load']['call'](gpilab, c5kyt, eoz$9, h1j8s4, whus, drc);
    }, n64o1(ilavbg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ilavbg;
  }(),
      ibpalg = function (d_z$re) {
    function lbvagi() {
      lbvagi['__super']['call'](this);;
    }return eo$z_(lbvagi, 'laya.wx.mini.MiniFileMgr', d_z$re), lbvagi['isLoadFile'] = function (mon) {
      return lbvagi['_fileTypeArr']['indexOf'](mon) != -0x1 ? !![] : ![];
    }, lbvagi['getFileInfo'] = function (p2x03) {
      var mnh164 = p2x03['split']('?')[0x0],
          plxf02 = lbvagi['filesListObj'][mnh164];if (plxf02 == null) return null;else return plxf02;return null;
    }, lbvagi['onFileUpdate'] = function ($rzcdt, n4m) {
      var x5yk = $rzcdt['split']('/'),
          ydct5 = x5yk[x5yk['length'] - 0x1],
          h8s = lbvagi['getFileInfo'](n4m);if (h8s == null) lbvagi['onSaveFile'](n4m, ydct5);else {
        if (h8s['readyUrl'] != n4m) lbvagi['remove'](ydct5, n4m);
      }
    }, lbvagi['exits'] = function (_r$zcd, uw8jsq) {
      var vliga = lbvagi['getFileNativePath'](_r$zcd);lbvagi['fs']['getFileInfo']({ 'filePath': vliga, 'success': function (cdrz) {
          uw8jsq != null && uw8jsq['runWith']([0x0, cdrz]);
        }, 'fail': function (yrctd) {
          uw8jsq != null && uw8jsq['runWith']([0x1, yrctd]);
        } });
    }, lbvagi['read'] = function (ctzrd, r_cd, f0x52, aglf) {
      r_cd === void 0x0 && (r_cd = 'ascill'), aglf === void 0x0 && (aglf = '');var kczdrt;aglf != '' ? kczdrt = lbvagi['getFileNativePath'](ctzrd) : kczdrt = ctzrd, lbvagi['fs']['readFile']({ 'filePath': kczdrt, 'encoding': r_cd, 'success': function (_$r9ez) {
          f0x52 != null && f0x52['runWith']([0x0, _$r9ez]);
        }, 'fail': function (eo9$_n) {
          if (eo9$_n && aglf != '') lbvagi['down'](aglf, r_cd, f0x52, aglf);else f0x52 != null && f0x52['runWith']([0x1]);
        } });
    }, lbvagi['readNativeFile'] = function (ky35xt, ibgalv) {
      lbvagi['fs']['readFile']({ 'filePath': ky35xt, 'encoding': '', 'success': function (h1j48m) {
          ibgalv != null && ibgalv['runWith']([0x0]);
        }, 'fail': function (jwsuq) {
          ibgalv != null && ibgalv['runWith']([0x1]);
        } });
    }, lbvagi['down'] = function (krydct, xt3k5, j418sh, pblfag) {
      xt3k5 === void 0x0 && (xt3k5 = 'ascill'), pblfag === void 0x0 && (pblfag = '');var al0fpg = lbvagi['getFileNativePath'](pblfag),
          ycdrtk = lbvagi['wxdown']({ 'url': krydct, 'filePath': al0fpg, 'success': function (bgpil) {
          if (bgpil['statusCode'] === 0xc8) lbvagi['readFile'](bgpil['filePath'], xt3k5, j418sh, pblfag);
        }, 'fail': function (e9nm6o) {
          j418sh != null && j418sh['runWith']([0x1, e9nm6o]);
        } });ycdrtk['onProgressUpdate'](function (l0gpa) {
        j418sh != null && j418sh['runWith']([0x2, l0gpa['progress']]);
      });
    }, lbvagi['readFile'] = function (palgfb, rctz$, _o$9z, iblpg) {
      rctz$ === void 0x0 && (rctz$ = 'ascill'), iblpg === void 0x0 && (iblpg = ''), lbvagi['fs']['readFile']({ 'filePath': palgfb, 'encoding': rctz$, 'success': function (j8wuq) {
          if (palgfb['indexOf']('http://') != -0x1 || palgfb['indexOf']('https://') != -0x1) lbvagi['onFileUpdate'](palgfb, iblpg);_o$9z != null && _o$9z['runWith']([0x0, j8wuq]);
        }, 'fail': function (igpa) {
          if (igpa) _o$9z != null && _o$9z['runWith']([0x1, igpa]);
        } });
    }, lbvagi['downImg'] = function (lagbv, qwju8s, glbvia) {
      glbvia === void 0x0 && (glbvia = '');var bpli = lbvagi['wxdown']({ 'url': lagbv, 'success': function (h8s1jw) {
          h8s1jw['statusCode'] === 0xc8 && lbvagi['copyFile'](h8s1jw['tempFilePath'], glbvia, qwju8s);
        }, 'fail': function (h8j41m) {
          qwju8s != null && qwju8s['runWith']([0x1, h8j41m]);
        } });
    }, lbvagi['copyFile'] = function (rczd$, n9eom, me6n9o) {
      var x23k = rczd$['split']('/'),
          d$r_e = x23k[x23k['length'] - 0x1],
          yt5k3c = n9eom['split']('?')[0x0],
          _9rze$ = lbvagi['getFileInfo'](n9eom),
          abil = lbvagi['getFileNativePath'](d$r_e);lbvagi['fs']['copyFile']({ 'srcPath': rczd$, 'destPath': abil, 'success': function (e$r_z9) {
          if (!_9rze$) lbvagi['onSaveFile'](n9eom, d$r_e), me6n9o != null && me6n9o['runWith']([0x0]);else {
            if (_9rze$['readyUrl'] != n9eom) lbvagi['remove'](d$r_e, n9eom, me6n9o);
          }
        }, 'fail': function (o$e_z9) {
          me6n9o != null && me6n9o['runWith']([0x1, o$e_z9]);
        } });
    }, lbvagi['getFileNativePath'] = function (shw81j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + shw81j;
    }, lbvagi['remove'] = function (xf520, kyx53t, r$z_cd) {
      kyx53t === void 0x0 && (kyx53t = '');var x0fp = lbvagi['getFileInfo'](kyx53t),
          no61m4 = lbvagi['getFileNativePath'](x0fp['md5']);dktr['loader']['clearRes'](x0fp['readyUrl']), lbvagi['fs']['unlink']({ 'filePath': no61m4, 'success': function (g7a) {
          if (kyx53t != '') lbvagi['onSaveFile'](kyx53t, xf520);r$z_cd != null && r$z_cd['runWith']([0x0]);
        }, 'fail': function (o_6en) {} });
    }, lbvagi['onSaveFile'] = function (eo69, e9_z) {
      var no$_9e = eo69['split']('?')[0x0];lbvagi['filesListObj'][no$_9e] = { 'md5': e9_z, 'readyUrl': eo69 }, lbvagi['fs']['writeFile']({ 'filePath': lbvagi['fileNativeDir'] + '/' + lbvagi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lbvagi['filesListObj']), 'success': function (h8s4) {
          console['log']('写入测试测试成功：', h8s4);
        }, 'fail': function (o6mn41) {
          console['log']('写入测试测试失败：', o6mn41);
        } });
    }, lbvagi['existDir'] = function (l2fx0p, $zt) {
      lbvagi['fs']['mkdir']({ 'dirPath': l2fx0p, 'success': function (p30fx2) {
          $zt != null && $zt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (j48hs1) {
          if (j48hs1['errMsg']['indexOf']('file already exists') != -0x1) lbvagi['readSync'](lbvagi['fileListName'], 'utf8', $zt);else $zt != null && $zt['runWith']([0x1, j48hs1]);
        } });
    }, lbvagi['readSync'] = function (sj4h, tx3k5, ytk5c3, mno964) {
      tx3k5 === void 0x0 && (tx3k5 = 'ascill'), mno964 === void 0x0 && (mno964 = '');var t3yc = lbvagi['getFileNativePath'](sj4h),
          bgpf;try {
        bgpf = lbvagi['fs']['readFileSync'](t3yc), ytk5c3 != null && ytk5c3['runWith']([0x0, { 'data': bgpf }]);
      } catch (p3f20) {
        ytk5c3 != null && ytk5c3['runWith']([0x1]);
      }
    }, lbvagi['readCache'] = function () {}, lbvagi['writeCache'] = function (qwu8s) {
      var kd5cy = readyUrl['split']('?')[0x0];lbvagi['filesListObj'][kd5cy] = { 'md5': md5Name, 'readyUrl': readyUrl }, lbvagi['fs']['writeFile']({ 'filePath': lbvagi['fileNativeDir'] + '/' + lbvagi['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lbvagi['filesListObj']), 'success': function ($_rez) {}, 'fail': function (oen_9) {} });
    }, lbvagi['setNativeFileDir'] = function (e_zo$) {
      lbvagi['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + e_zo$;
    }, lbvagi['filesListObj'] = {}, lbvagi['fileNativeDir'] = null, lbvagi['fileListName'] = 'layaairfiles.txt', lbvagi['ziyuFileData'] = {}, n64o1(lbvagi, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), lbvagi;
  }(quwsj),
      t5yxk3 = function (sujhw) {
    function h84s1() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], h84s1['__super']['call'](this), this['_sound'] = h84s1['_createSound'](), this['_chanell'] = new bialp(this['_sound']);
    }eo$z_(h84s1, 'laya.wx.mini.MiniSound', sujhw);var mh61n = h84s1['prototype'];return mh61n['load'] = function (mj814) {
      var om9n46 = this;mj814 = rct$['formatURL'](mj814), this['url'] = mj814;if (h84s1['_audioCache'][mj814]) {
        this['event']('complete');return;
      }function c5yk() {
        if (h84s1['_null'] != undefined) om9n46['_sound']['onCanplay'](h84s1['_null']), om9n46['_sound']['onError'](h84s1['_null']);else try {
          om9n46['_sound']['onCanplay'](null), om9n46['_sound']['onError'](null), h84s1['_null'] = null;
        } catch (vabgi7) {
          console['warn']('[wxmini] _clearSound:' + vabgi7), om9n46['_sound']['onCanplay'](h648m1), om9n46['_sound']['onError'](h648m1), h84s1['_null'] = h648m1;
        }
      }function ckrzt() {
        ba7vgi['loaded'] = !![], ba7vgi['event']('complete'), h84s1['_audioCache'][ba7vgi['url']] = ba7vgi;
      }function o46nm9($9z_er) {
        console['error']('errCode=' + $9z_er['errCode'] + '  errMsg=' + $9z_er['errMsg']), ba7vgi['event']('error');
      }function h648m1() {}this['_sound']['onCanplay'](ckrzt), this['_sound']['onError'](o46nm9), this['_sound']['src'] = mj814;var ba7vgi = this;
    }, mh61n['play'] = function (jh148s, $_ezdr) {
      jh148s === void 0x0 && (jh148s = 0x0), $_ezdr === void 0x0 && ($_ezdr = 0x0);var abglpi, xt3yk5;if (this['url'] == aibplg['_tMusic']) {
        if (!h84s1['_musicAudio']) h84s1['_musicAudio'] = this['_sound'];abglpi = h84s1['_musicAudio'], xt3yk5 = this['_chanell'];
      } else abglpi = this['_sound'], xt3yk5 = this['_chanell'];return abglpi['src'] = this['url'], abglpi['startTime'] = 0x0, xt3yk5['isStopped'] && (xt3yk5['url'] = this['url'], xt3yk5['loops'] = $_ezdr, xt3yk5['startTime'] = jh148s, xt3yk5['play'](), aibplg['addChannel'](xt3yk5)), xt3yk5;
    }, mh61n['dispose'] = function () {
      var $rzdc = h84s1['_audioCache'][this['url']];$rzdc && ($rzdc['src'] = '', delete h84s1['_audioCache'][this['url']]);
    }, zdtr$c(0x0, mh61n, 'duration', function () {
      return this['_sound']['duration'];
    }), h84s1['_createSound'] = function () {
      h84s1['_id']++;var xy2503 = sw8qju['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return xy2503;
    }, h84s1['_musicAudio'] = null, h84s1['_id'] = 0x0, h84s1['_audioCache'] = {}, h84s1['_null'] = undefined, h84s1;
  }(quwsj),
      bialp = function (yktcrd) {
    function y052x3($zd_er) {
      this['_audio'] = null, this['_onEnd'] = null, y052x3['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = $zd_er, this['_onEnd'] = abpil['bind'](this['__onEnd'], this), $zd_er['onEnded'](this['_onEnd']);
    }eo$z_(y052x3, 'laya.wx.mini.MiniSoundChannel', yktcrd);var er = y052x3['prototype'];return er['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dktr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, er['__onNull'] = function () {}, er['play'] = function () {
      this['isStopped'] = ![], aibplg['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, er['stop'] = function () {
      this['isStopped'] = !![], aibplg['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, er['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, er['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], aibplg['addChannel'](this), this['_audio']['play']();
    }, zdtr$c(0x0, er, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zdtr$c(0x0, er, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zdtr$c(0x0, er, 'volume', function () {
      return 0x1;
    }, function (drckzt) {}), y052x3['_null'] = undefined, y052x3;
  }(o$9_ne),
      m641no = function () {
    function krycdt() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = sw8qju['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }eo$z_(krycdt, 'laya.wx.mini.MiniVideo');var jw8qsu = krycdt['prototype'];return jw8qsu['on'] = function (a0lfpg, swhju8, pl0fag) {
      if (a0lfpg == 'loadedmetadata') this['onPlayFunc'] = pl0fag['bind'](swhju8), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else a0lfpg == 'ended' && (this['onEndedFunC'] = pl0fag['bind'](swhju8), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, jw8qsu['onTimeUpdateFunc'] = function (e$no9) {
      this['position'] = e$no9['position'], this['_duration'] = e$no9['duration'];
    }, jw8qsu['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, jw8qsu['onended'] = function (_$zedr, oz_$) {
      this['onEndedFunC'] = oz_$['bind'](_$zedr), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, jw8qsu['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, jw8qsu['off'] = function (h4m1j, ezdr_$, o94m) {
      if (h4m1j == 'loadedmetadata') this['onPlayFunc'] = o94m['bind'](ezdr_$), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else h4m1j == 'ended' && (this['onEndedFunC'] = o94m['bind'](ezdr_$), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, jw8qsu['load'] = function (sh481) {
      if (!this['videoElement']) return;this['videoElement']['src'] = sh481;
    }, jw8qsu['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, jw8qsu['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, jw8qsu['size'] = function (p0f2, fap2l) {
      if (!this['videoElement']) return;this['videoElement']['width'] = p0f2, this['videoElement']['height'] = fap2l;
    }, jw8qsu['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, jw8qsu['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, zdtr$c(0x0, jw8qsu, 'duration', function () {
      return this['_duration'];
    }), zdtr$c(0x0, jw8qsu, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (vglbi) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = vglbi;
    }), zdtr$c(0x0, jw8qsu, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), zdtr$c(0x0, jw8qsu, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), zdtr$c(0x0, jw8qsu, 'ended', function () {
      return this['videoend'];
    }), zdtr$c(0x0, jw8qsu, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (abilg) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = abilg;
    }), zdtr$c(0x0, jw8qsu, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (juwh) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = juwh;
    }), zdtr$c(0x0, jw8qsu, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (xy3t) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = xy3t;
    }), zdtr$c(0x0, jw8qsu, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), zdtr$c(0x0, jw8qsu, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (erz_$) {
      if (!this['videoElement']) return;this['videoElement']['x'] = erz_$;
    }), zdtr$c(0x0, jw8qsu, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (lagpib) {
      if (!this['videoElement']) return;this['videoElement']['y'] = lagpib;
    }), zdtr$c(0x0, jw8qsu, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), zdtr$c(0x0, jw8qsu, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (lp02) {
      if (!this['videoElement']) return;this['videoElement']['src'] = lp02;
    }), zdtr$c(0x0, jw8qsu, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (xl0pf2) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = xl0pf2;
    }), zdtr$c(0x0, jw8qsu, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (lpfx20) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = lpfx20;
    }), krycdt;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var sj481 in Laya) {
    var yk23x5 = Laya[sj481];yk23x5 && yk23x5['__isclass'] && (exports[sj481] = yk23x5);
  }
});