var E = wx.$p;
(function (window, document, pshl4k) {
  var _xfutl = pshl4k['un'],
      ltu_ = pshl4k['uns'],
      agdbqc = pshl4k['static'],
      kyj6$ = pshl4k['class'],
      i4jk = pshl4k['getset'],
      $yv167 = pshl4k['__newvec'],
      hjs4k = laya['utils']['Browser'],
      v6y$17 = laya['events']['Event'],
      xs4l = laya['events']['EventDispatcher'],
      fou_mx = laya['resource']['HTMLImage'],
      xft_u = laya['utils']['Handler'],
      e8q = laya['display']['Input'],
      r$1v76 = laya['net']['Loader'],
      wn503 = laya['maths']['Matrix'],
      _mfxu = laya['renders']['Render'],
      r67 = laya['utils']['RunDriver'],
      bqea8 = laya['media']['Sound'],
      q8be9n = laya['media']['SoundChannel'],
      ptl4ux = laya['media']['SoundManager'],
      w32 = laya['display']['Stage'],
      $kih = laya['net']['URL'],
      fxput = laya['utils']['Utils'],
      txf_mu = function () {
    function acdb() {}return kyj6$(acdb, 'laya.wx.mini.MiniAdpter'), acdb['getJson'] = function (w50nz3) {
      return JSON['parse'](w50nz3);
    }, acdb['init'] = function (fulp, y$jhki) {
      fulp === void 0x0 && (fulp = ![]), y$jhki === void 0x0 && (y$jhki = ![]);if (acdb['_inited']) return;acdb['window'] = window;if (acdb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;acdb['_inited'] = !![], acdb['isZiYu'] = y$jhki, acdb['isPosMsgYu'] = fulp, acdb['EnvConfig'] = {}, !acdb['isZiYu'] && (vrz2['setNativeFileDir']('/layaairGame'), vrz2['existDir'](vrz2['fileNativeDir'], xft_u['create'](acdb, acdb['onMkdirCallBack']))), acdb['window']['focus'] = function () {}, pshl4k['getUrlPath'] = function () {}, acdb['window']['logtime'] = function (ofm_x) {}, acdb['window']['alertTimeLog'] = function (xmf_tu) {}, acdb['window']['resetShareInfo'] = function () {}, acdb['window']['CanvasRenderingContext2D'] = function () {}, acdb['window']['CanvasRenderingContext2D']['prototype'] = acdb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], acdb['window']['document']['body']['appendChild'] = function () {}, acdb['EnvConfig']['pixelRatioInt'] = 0x0, r67['getPixelRatio'] = acdb['pixelRatio'], acdb['_preCreateElement'] = hjs4k['createElement'], hjs4k['createElement'] = acdb['createElement'], r67['createShaderCondition'] = acdb['createShaderCondition'], fxput['parseXMLFromString'] = acdb['parseXMLFromString'], e8q['_createInputElement'] = wez3n['_createInputElement'], acdb['EnvConfig']['load'] = r$1v76['prototype']['load'], r$1v76['prototype']['load'] = ts4pl['prototype']['load'], acdb['isZiYu'] && fulp && wx['onMessage'](function (oum_x) {
        oum_x['isLoad'] && (vrz2['ziyuFileData'][oum_x['url']] = oum_x['data']);
      });
    }, acdb['onMkdirCallBack'] = function (s4lhkp, hi$jyk) {
      if (!s4lhkp) vrz2['filesListObj'] = JSON['parse'](hi$jyk['data']);
    }, acdb['pixelRatio'] = function () {
      if (!acdb['EnvConfig']['pixelRatioInt']) try {
        var skhpl = wx['getSystemInfoSync']();return acdb['EnvConfig']['pixelRatioInt'] = skhpl['pixelRatio'], skhpl = skhpl, skhpl['pixelRatio'];
      } catch (dqba) {}return acdb['EnvConfig']['pixelRatioInt'];
    }, acdb['createElement'] = function (ikyh$j) {
      if (ikyh$j == 'canvas') {
        var y6$ik;return acdb['idx'] == 0x1 ? acdb['isZiYu'] ? (y6$ik = sharedCanvas, y6$ik['style'] = {}) : y6$ik = window['canvas'] : y6$ik = window['wx']['createCanvas'](), acdb['idx']++, y6$ik;
      } else {
        if (ikyh$j == 'textarea' || ikyh$j == 'input') return acdb['onCreateInput'](ikyh$j);else {
          if (ikyh$j == 'div') {
            var qe89ab = acdb['_preCreateElement'](ikyh$j);return qe89ab['contains'] = function (y6i$j) {
              return null;
            }, qe89ab['removeChild'] = function (vi6$y) {}, qe89ab;
          } else return acdb['_preCreateElement'](ikyh$j);
        }
      }
    }, acdb['onCreateInput'] = function (pkj4s) {
      var l4hkps = acdb['_preCreateElement'](pkj4s);return l4hkps['focus'] = wez3n['wxinputFocus'], l4hkps['blur'] = wez3n['wxinputblur'], l4hkps['style'] = {}, l4hkps['value'] = 0x0, l4hkps['parentElement'] = {}, l4hkps['placeholder'] = {}, l4hkps['type'] = {}, l4hkps['setColor'] = function (ht4ps) {}, l4hkps['setType'] = function (r21v76) {}, l4hkps['setFontFace'] = function (z0r72v) {}, l4hkps['addEventListener'] = function (fxoum) {}, l4hkps['contains'] = function (enq59) {
        return null;
      }, l4hkps['removeChild'] = function (ih4skj) {}, l4hkps;
    }, acdb['createShaderCondition'] = function (q9b8a) {
      var bae8q9 = this,
          upxlf = function () {
        var tl4psx = q9b8a;return bae8q9[q9b8a['replace']('this.', '')];
      };return upxlf;
    }, acdb['EnvConfig'] = null, acdb['window'] = null, acdb['_preCreateElement'] = null, acdb['_inited'] = ![], acdb['wxRequest'] = null, acdb['systemInfo'] = null, acdb['version'] = '0.0.1', acdb['isZiYu'] = ![], acdb['isPosMsgYu'] = ![], acdb['parseXMLFromString'] = function (j$y1i) {
      var pxst4l, r32z70;j$y1i = j$y1i['replace'](/>\s+</g, '><');try {
        pxst4l = new window['Parser']['DOMParser']()['parseFromString'](j$y1i, 'text/xml');
      } catch ($1iv6) {
        throw '需要引入xml解析库文件';
      }return pxst4l;
    }, acdb['idx'] = 0x1, acdb;
  }(),
      hstpl = function () {
    function zw2305() {}kyj6$(zw2305, 'laya.wx.mini.MiniImage');var y1ij$6 = zw2305['prototype'];return y1ij$6['_loadImage'] = function (tuf) {
      var r721 = this,
          lu_ftx = ![];tuf['indexOf']('layaNativeDir/') == -0x1 && (lu_ftx = !![], tuf = $kih['formatURL'](tuf));if (!vrz2['getFileInfo'](tuf)) {
        if (tuf['indexOf']('http://') != -0x1 || tuf['indexOf']('https://') != -0x1) vrz2['downImg'](tuf, new xft_u(zw2305, zw2305['onDownImgCallBack'], [tuf, r721]), tuf);else zw2305['onCreateImage'](tuf, r721, !![]);
      } else zw2305['onCreateImage'](tuf, r721, !lu_ftx);
    }, zw2305['onDownImgCallBack'] = function (we5z3n, hs4kpj, mxuo_) {
      if (!mxuo_) zw2305['onCreateImage'](we5z3n, hs4kpj);else hs4kpj['onError'](null);
    }, zw2305['onCreateImage'] = function (gcaqb, $y6v17, b89agq) {
      b89agq === void 0x0 && (b89agq = ![]);var $y71v;if (!b89agq) {
        var bc = vrz2['getFileInfo'](gcaqb),
            $yi6v1 = bc['md5'];$y71v = vrz2['getFileNativePath']($yi6v1);
      } else $y71v = gcaqb;if ($y6v17['imgCache'] == null) $y6v17['imgCache'] = {};var e89qba;function tuplf() {
        e89qba['onload'] = null, e89qba['onerror'] = null, delete $y6v17['imgCache'][gcaqb];
      };var tp4lh = function () {
        tuplf(), $y6v17['onLoaded'](e89qba);
      },
          tpshl4 = function () {
        tuplf(), $y6v17['event']('error', 'Load image failed');
      };$y6v17['_type'] == 'nativeimage' ? (e89qba = new hjs4k['window']['Image'](), e89qba['crossOrigin'] = '', e89qba['onload'] = tp4lh, e89qba['onerror'] = tpshl4, e89qba['src'] = $y71v, $y6v17['imgCache'][gcaqb] = e89qba) : new fou_mx['create']($y71v, { 'onload': tp4lh, 'onerror': tpshl4, 'onCreate': function (abcqgd) {
          e89qba = abcqgd, $y6v17['imgCache'][gcaqb] = abcqgd;
        } });
    }, zw2305;
  }(),
      wez3n = function () {
    function fuxplt() {}return kyj6$(fuxplt, 'laya.wx.mini.MiniInput'), fuxplt['_createInputElement'] = function () {
      e8q['_initInput'](e8q['area'] = hjs4k['createElement']('textarea')), e8q['_initInput'](e8q['input'] = hjs4k['createElement']('input')), e8q['inputContainer'] = hjs4k['createElement']('div'), e8q['inputContainer']['style']['position'] = 'absolute', e8q['inputContainer']['style']['zIndex'] = 0x186a0, hjs4k['container']['appendChild'](e8q['inputContainer']), e8q['inputContainer']['setPos'] = function (nz5w, fxptl) {
        e8q['inputContainer']['style']['left'] = nz5w + 'px', e8q['inputContainer']['style']['top'] = fxptl + 'px';
      }, pshl4k['stage']['on']('resize', null, fuxplt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($ikyj6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ptl4ux['_soundClass'] = _umo, ptl4ux['_musicClass'] = _umo;
    }, fuxplt['_onStageResize'] = function () {
      var mxf_ = pshl4k['stage']['_canvasTransform']['identity']();mxf_['scale'](hjs4k['width'] / _mfxu['canvas']['width'] / r67['getPixelRatio'](), hjs4k['height'] / _mfxu['canvas']['height'] / r67['getPixelRatio']());
    }, fuxplt['wxinputFocus'] = function (k4hjsp) {
      var zv7r = e8q['inputElement']['target'];if (zv7r && !zv7r['editable']) return;txf_mu['window']['wx']['offKeyboardConfirm'](), txf_mu['window']['wx']['offKeyboardInput'](), txf_mu['window']['wx']['showKeyboard']({ 'defaultValue': zv7r['text'], 'maxLength': zv7r['maxChars'], 'multiple': zv7r['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (iskjhy) {}, 'fail': function (q9g8ab) {} }), txf_mu['window']['wx']['onKeyboardConfirm'](function (ihjk4) {
        var r20zw = ihjk4 ? ihjk4['value'] : '';zv7r['text'] = r20zw, zv7r['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), txf_mu['window']['wx']['onKeyboardInput'](function ($r7v6) {
        var hjky$ = $r7v6 ? $r7v6['value'] : '';if (!zv7r['multiline']) {
          if (hjky$['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zv7r['text'] = hjky$, zv7r['event']('input');
      });
    }, fuxplt['inputEnter'] = function () {
      e8q['inputElement']['target']['focus'] = ![];
    }, fuxplt['wxinputblur'] = function () {
      fuxplt['hideKeyboard']();
    }, fuxplt['hideKeyboard'] = function () {
      txf_mu['window']['wx']['offKeyboardConfirm'](), txf_mu['window']['wx']['offKeyboardInput'](), txf_mu['window']['wx']['hideKeyboard']({ 'success': function (lspk4) {
          console['log']('隐藏键盘');
        }, 'fail': function (pshk4j) {
          console['log']('隐藏键盘出错:' + (pshk4j ? pshk4j['errMsg'] : ''));
        } });
    }, fuxplt;
  }(),
      ts4pl = function () {
    function xlpfu() {}kyj6$(xlpfu, 'laya.wx.mini.MiniLoader');var b98eaq = xlpfu['prototype'];return b98eaq['load'] = function (ew3, shjiy, skh4l, tuxm_f, fmx) {
      skh4l === void 0x0 && (skh4l = !![]), fmx === void 0x0 && (fmx = ![]);var y$1vi6 = this;y$1vi6['_url'] = ew3;if (ew3['indexOf']('data:image') === 0x0) y$1vi6['_type'] = shjiy = 'image';else y$1vi6['_type'] = shjiy || (shjiy = y$1vi6['getTypeFromUrl'](ew3));y$1vi6['_cache'] = skh4l, y$1vi6['_data'] = null;var _utlf = 'ascii';if (ew3['indexOf']('.fnt') != -0x1) _utlf = 'utf8';else shjiy == 'arraybuffer' && (_utlf = '');;var kl4hp = fxput['getFileExtension'](ew3);if (xlpfu['_fileTypeArr']['indexOf'](kl4hp) != -0x1) txf_mu['EnvConfig']['load']['call'](this, ew3, shjiy, skh4l, tuxm_f, fmx);else {
        if (!vrz2['getFileInfo'](ew3)) {
          if (ew3['indexOf']('layaNativeDir/') != -0x1) {
            if (txf_mu['isZiYu']) {
              var qb98a = vrz2['ziyuFileData'][ew3];y$1vi6['onLoaded'](qb98a);return;
            } else {
              cosnole['log']('read read'), vrz2['read'](ew3, _utlf, new xft_u(xlpfu, xlpfu['onReadNativeCallBack'], [_utlf, ew3, shjiy, skh4l, tuxm_f, fmx, y$1vi6]));return;
            }
          }if ($kih['rootPath'] == '') var agq89b = ew3;else agq89b = ew3['split']($kih['rootPath'])[0x0];ew3['indexOf']('http://') != -0x1 || ew3['indexOf']('https://') != -0x1 ? txf_mu['EnvConfig']['load']['call'](y$1vi6, ew3, shjiy, skh4l, tuxm_f, fmx) : vrz2['readFile'](agq89b, _utlf, new xft_u(xlpfu, xlpfu['onReadNativeCallBack'], [_utlf, ew3, shjiy, skh4l, tuxm_f, fmx, y$1vi6]), ew3);
        } else txf_mu['EnvConfig']['load']['call'](this, ew3, shjiy, skh4l, tuxm_f, fmx);
      }
    }, b98eaq['resMgrLoad'] = function (b8eq9, yi$1v, lstx4p, skjih4, lht4, zwne35, ks4lhp) {
      lstx4p === void 0x0 && (lstx4p = 0x0), skjih4 === void 0x0 && (skjih4 = ![]), lht4 === void 0x0 && (lht4 = ![]), zwne35 === void 0x0 && (zwne35 = 0x0), ks4lhp === void 0x0 && (ks4lhp = 0x3), b8eq9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b8eq9), txf_mu['EnvConfig']['resMgrLoad'](b8eq9, (y6ikj$, qca8, fux_m) => {
        xlpfu['prototype']['resMgrLoadCallBack'](y6ikj$, qca8, fux_m, yi$1v);
      }, lstx4p, skjih4, lht4, zwne35, ks4lhp);
    }, b98eaq['resMgrLoadCallBack'] = function (ptxls4, n53we, v61$, s4hpkj) {
      console['log']('buff:::', ptxls4, v61$, vrz2['fileNativeDir'] + '///' + vrz2['fileListName']), s4hpkj(ptxls4, n53we, v61$);
    }, b98eaq['clearRes'] = function (xlp4s, $iv16) {
      $iv16 === void 0x0 && ($iv16 = ![]);var b8gcqa = this;b8gcqa['clearRes'](xlp4s, $iv16);var mftux = vrz2['getFileInfo'](xlp4s);if (mftux && (xlp4s['indexOf']('http://') != -0x1 || xlp4s['indexOf']('https://') != -0x1)) {
        var tpx4u = mftux['md5'],
            $7v1y6 = vrz2['getFileNativePath'](tpx4u);vrz2['remove']($7v1y6);
      }
    }, xlpfu['onReadNativeCallBack'] = function ($7r16, yji$k, ijkyh, uxp4, _umxo, _mtf, _lxuf, eaqb98, wr30z) {
      uxp4 === void 0x0 && (uxp4 = !![]), _mtf === void 0x0 && (_mtf = ![]), eaqb98 === void 0x0 && (eaqb98 = 0x0);if (!eaqb98) {
        var uptfl;if (ijkyh == 'json' || ijkyh == 'atlas') uptfl = txf_mu['getJson'](wr30z['data']);else ijkyh == 'xml' ? uptfl = fxput['parseXMLFromString'](wr30z['data']) : uptfl = wr30z['data'];_lxuf['onLoaded'](uptfl), !txf_mu['isZiYu'] && txf_mu['isPosMsgYu'] && ijkyh != 'arraybuffer' && wx['postMessage']({ 'url': yji$k, 'data': uptfl, 'isLoad': !![] });
      } else eaqb98 == 0x1 && txf_mu['EnvConfig']['load']['call'](_lxuf, yji$k, ijkyh, uxp4, _umxo, _mtf);
    }, agdbqc(xlpfu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xlpfu;
  }(),
      vrz2 = function ($v7r6) {
    function v1r() {
      v1r['__super']['call'](this);;
    }return kyj6$(v1r, 'laya.wx.mini.MiniFileMgr', $v7r6), v1r['isLoadFile'] = function (z03rw) {
      return v1r['_fileTypeArr']['indexOf'](z03rw) != -0x1 ? !![] : ![];
    }, v1r['getFileInfo'] = function (bdaqc) {
      var t4pslh = bdaqc['split']('?')[0x0],
          f_ou = v1r['filesListObj'][t4pslh];if (f_ou == null) return null;else return f_ou;return null;
    }, v1r['onFileUpdate'] = function (fxl_, aqg8bc) {
      var r2z70v = fxl_['split']('/'),
          w3z052 = r2z70v[r2z70v['length'] - 0x1],
          luf_ = v1r['getFileInfo'](aqg8bc);if (luf_ == null) v1r['onSaveFile'](aqg8bc, w3z052);else {
        if (luf_['readyUrl'] != aqg8bc) v1r['remove'](w3z052, aqg8bc);
      }
    }, v1r['exits'] = function (y16v$7, r71v2) {
      var _uxf = v1r['getFileNativePath'](y16v$7);v1r['fs']['getFileInfo']({ 'filePath': _uxf, 'success': function (lutx) {
          r71v2 != null && r71v2['runWith']([0x0, lutx]);
        }, 'fail': function (abq9e) {
          r71v2 != null && r71v2['runWith']([0x1, abq9e]);
        } });
    }, v1r['read'] = function (xtu_lf, $kjhyi, iyjhks, bq98e) {
      $kjhyi === void 0x0 && ($kjhyi = 'ascill'), bq98e === void 0x0 && (bq98e = '');var lh4st;bq98e != '' ? lh4st = v1r['getFileNativePath'](xtu_lf) : lh4st = xtu_lf, v1r['fs']['readFile']({ 'filePath': lh4st, 'encoding': $kjhyi, 'success': function (z027r) {
          iyjhks != null && iyjhks['runWith']([0x0, z027r]);
        }, 'fail': function (mo_ufx) {
          if (mo_ufx && bq98e != '') v1r['down'](bq98e, $kjhyi, iyjhks, bq98e);else iyjhks != null && iyjhks['runWith']([0x1]);
        } });
    }, v1r['readNativeFile'] = function (i6jy$1, b8ea) {
      v1r['fs']['readFile']({ 'filePath': i6jy$1, 'encoding': '', 'success': function (jp4hk) {
          b8ea != null && b8ea['runWith']([0x0]);
        }, 'fail': function (ik$) {
          b8ea != null && b8ea['runWith']([0x1]);
        } });
    }, v1r['down'] = function (qe98a, v10r7, qg8acb, e5zn3w) {
      v10r7 === void 0x0 && (v10r7 = 'ascill'), e5zn3w === void 0x0 && (e5zn3w = '');var pxslt4 = v1r['getFileNativePath'](e5zn3w),
          kij$yh = v1r['wxdown']({ 'url': qe98a, 'filePath': pxslt4, 'success': function (sl4xpt) {
          if (sl4xpt['statusCode'] === 0xc8) v1r['readFile'](sl4xpt['filePath'], v10r7, qg8acb, e5zn3w);
        }, 'fail': function (y61v$i) {
          qg8acb != null && qg8acb['runWith']([0x1, y61v$i]);
        } });kij$yh['onProgressUpdate'](function (txm) {
        qg8acb != null && qg8acb['runWith']([0x2, txm['progress']]);
      });
    }, v1r['readFile'] = function (bdq, xfu_t, tsxl, ultpxf) {
      xfu_t === void 0x0 && (xfu_t = 'ascill'), ultpxf === void 0x0 && (ultpxf = ''), v1r['fs']['readFile']({ 'filePath': bdq, 'encoding': xfu_t, 'success': function (cq8bg) {
          if (bdq['indexOf']('http://') != -0x1 || bdq['indexOf']('https://') != -0x1) v1r['onFileUpdate'](bdq, ultpxf);tsxl != null && tsxl['runWith']([0x0, cq8bg]);
        }, 'fail': function (ijh4ks) {
          if (ijh4ks) tsxl != null && tsxl['runWith']([0x1, ijh4ks]);
        } });
    }, v1r['downImg'] = function (pj4s, ht4l, mfuxo) {
      mfuxo === void 0x0 && (mfuxo = '');var $v716 = v1r['wxdown']({ 'url': pj4s, 'success': function (jkihys) {
          jkihys['statusCode'] === 0xc8 && v1r['copyFile'](jkihys['tempFilePath'], mfuxo, ht4l);
        }, 'fail': function (o_fuxm) {
          ht4l != null && ht4l['runWith']([0x1, o_fuxm]);
        } });
    }, v1r['copyFile'] = function (k4sl, tlp, i6j$y1) {
      var ufomx = k4sl['split']('/'),
          ze3w5 = ufomx[ufomx['length'] - 0x1],
          ultxfp = tlp['split']('?')[0x0],
          fpxu = v1r['getFileInfo'](tlp),
          sl4htp = v1r['getFileNativePath'](ze3w5);v1r['fs']['copyFile']({ 'srcPath': k4sl, 'destPath': sl4htp, 'success': function (t_umf) {
          if (!fpxu) v1r['onSaveFile'](tlp, ze3w5), i6j$y1 != null && i6j$y1['runWith']([0x0]);else {
            if (fpxu['readyUrl'] != tlp) v1r['remove'](ze3w5, tlp, i6j$y1);
          }
        }, 'fail': function (r6v217) {
          i6j$y1 != null && i6j$y1['runWith']([0x1, r6v217]);
        } });
    }, v1r['getFileNativePath'] = function (l4tpxs) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + l4tpxs;
    }, v1r['remove'] = function (b8g9a, fxtpu, y167v$) {
      fxtpu === void 0x0 && (fxtpu = '');var y7v16 = v1r['getFileInfo'](fxtpu),
          kyh = v1r['getFileNativePath'](y7v16['md5']);pshl4k['loader']['clearRes'](y7v16['readyUrl']), v1r['fs']['unlink']({ 'filePath': kyh, 'success': function (tshp) {
          if (fxtpu != '') v1r['onSaveFile'](fxtpu, b8g9a);y167v$ != null && y167v$['runWith']([0x0]);
        }, 'fail': function (l_uftx) {} });
    }, v1r['onSaveFile'] = function (jisk, mfuxt_) {
      var yhji = jisk['split']('?')[0x0];v1r['filesListObj'][yhji] = { 'md5': mfuxt_, 'readyUrl': jisk }, v1r['fs']['writeFile']({ 'filePath': v1r['fileNativeDir'] + '/' + v1r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v1r['filesListObj']), 'success': function (l4txu) {
          console['log']('写入测试测试成功：', l4txu);
        }, 'fail': function (e93w) {
          console['log']('写入测试测试失败：', e93w);
        } });
    }, v1r['existDir'] = function (_xuom, zw025) {
      v1r['fs']['mkdir']({ 'dirPath': _xuom, 'success': function (jk4sph) {
          zw025 != null && zw025['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ltx4pu) {
          if (ltx4pu['errMsg']['indexOf']('file already exists') != -0x1) v1r['readSync'](v1r['fileListName'], 'utf8', zw025);else zw025 != null && zw025['runWith']([0x1, ltx4pu]);
        } });
    }, v1r['readSync'] = function (flupxt, gqc8b, _mof, b8qe9a) {
      gqc8b === void 0x0 && (gqc8b = 'ascill'), b8qe9a === void 0x0 && (b8qe9a = '');var vy6i1$ = v1r['getFileNativePath'](flupxt),
          j6$yi;try {
        j6$yi = v1r['fs']['readFileSync'](vy6i1$), _mof != null && _mof['runWith']([0x0, { 'data': j6$yi }]);
      } catch (_luf) {
        _mof != null && _mof['runWith']([0x1]);
      }
    }, v1r['readCache'] = function () {}, v1r['writeCache'] = function (ikhj4s) {
      var ftxu_ = readyUrl['split']('?')[0x0];v1r['filesListObj'][ftxu_] = { 'md5': md5Name, 'readyUrl': readyUrl }, v1r['fs']['writeFile']({ 'filePath': v1r['fileNativeDir'] + '/' + v1r['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v1r['filesListObj']), 'success': function (sxtl) {}, 'fail': function (z23r70) {} });
    }, v1r['setNativeFileDir'] = function (w30z52) {
      v1r['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w30z52;
    }, v1r['filesListObj'] = {}, v1r['fileNativeDir'] = null, v1r['fileListName'] = 'layaairfiles.txt', v1r['ziyuFileData'] = {}, agdbqc(v1r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v1r;
  }(xs4l),
      _umo = function (tfpux) {
    function i6j$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], i6j$['__super']['call'](this), this['_sound'] = i6j$['_createSound']();
    }kyj6$(i6j$, 'laya.wx.mini.MiniSound', tfpux);var umfox = i6j$['prototype'];return umfox['load'] = function (lth4) {
      var stx = this;lth4 = $kih['formatURL'](lth4), this['url'] = lth4;if (i6j$['_audioCache'][lth4]) {
        this['event']('complete');return;
      }function nwe95() {
        if (i6j$['_null'] != undefined) stx['_sound']['onCanplay'](i6j$['_null']), stx['_sound']['onError'](i6j$['_null']);else try {
          stx['_sound']['onCanplay'](null), stx['_sound']['onError'](null), i6j$['_null'] = null;
        } catch (n98qe) {
          console['warn']('[wxmini] _clearSound:' + n98qe), stx['_sound']['onCanplay'](xofum), stx['_sound']['onError'](xofum), i6j$['_null'] = xofum;
        }
      }function xtp4l() {
        nwe95(), fmt_['loaded'] = !![], fmt_['event']('complete'), i6j$['_audioCache'][fmt_['url']] = fmt_;
      }function iyksjh(shij) {
        console['error']('errCode=' + shij['errCode'] + '  errMsg=' + shij['errMsg']), nwe95(), fmt_['event']('error');
      }function xofum() {}this['_sound']['onCanplay'](xtp4l), this['_sound']['onError'](iyksjh), this['_sound']['src'] = lth4;var fmt_ = this;
    }, umfox['play'] = function (qgac8b, ux_tlf) {
      qgac8b === void 0x0 && (qgac8b = 0x0), ux_tlf === void 0x0 && (ux_tlf = 0x0);var rz70;if (this['url'] == ptl4ux['_tMusic']) {
        if (!i6j$['_musicAudio']) i6j$['_musicAudio'] = i6j$['_createSound']();rz70 = i6j$['_musicAudio'];
      } else rz70 = i6j$['_createSound']();rz70['src'] = this['url'];var hjsiy = new xmf_u(rz70);return hjsiy['url'] = this['url'], hjsiy['loops'] = ux_tlf, hjsiy['startTime'] = qgac8b, hjsiy['play'](), ptl4ux['addChannel'](hjsiy), hjsiy;
    }, umfox['dispose'] = function () {
      var k$6ji = i6j$['_audioCache'][this['url']];k$6ji && (k$6ji['src'] = '', delete i6j$['_audioCache'][this['url']]);
    }, i4jk(0x0, umfox, 'duration', function () {
      return this['_sound']['duration'];
    }), i6j$['_createSound'] = function () {
      return i6j$['_id']++, txf_mu['window']['wx']['createInnerAudioContext']();
    }, i6j$['_musicAudio'] = null, i6j$['_id'] = 0x0, i6j$['_audioCache'] = {}, i6j$['_null'] = undefined, i6j$;
  }(xs4l),
      xmf_u = function (tl_uf) {
    function tuxm(cgdbqa) {
      this['_audio'] = null, this['_onEnd'] = null, tuxm['__super']['call'](this), this['_audio'] = cgdbqa, this['_onEnd'] = fxput['bind'](this['__onEnd'], this), cgdbqa['onEnded'](this['_onEnd']);
    }kyj6$(tuxm, 'laya.wx.mini.MiniSoundChannel', tl_uf);var xtulf_ = tuxm['prototype'];return xtulf_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (pshl4k['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xtulf_['__onNull'] = function () {}, xtulf_['play'] = function () {
      this['isStopped'] = ![], ptl4ux['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, xtulf_['stop'] = function () {
      this['isStopped'] = !![], ptl4ux['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (tuxm['_null'] != undefined) this['_audio']['onEnded'](tuxm['_null']);else try {
        this['_audio']['onEnded'](null), tuxm['_null'] = null;
      } catch (hkjps4) {
        console['warn']('[wxmini] stop:' + hkjps4), this['_audio']['onEnded'](fxput['bind'](this['__onNull'], this)), tuxm['_null'] = fxput['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, xtulf_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, xtulf_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ptl4ux['addChannel'](this), this['_audio']['play']();
    }, i4jk(0x0, xtulf_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), i4jk(0x0, xtulf_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), i4jk(0x0, xtulf_, 'volume', function () {
      return 0x1;
    }, function (wn3e5z) {}), tuxm['_null'] = undefined, tuxm;
  }(q8be9n);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var z35n0w in Laya) {
    var qabdcg = Laya[z35n0w];qabdcg && qabdcg['__isclass'] && (exports[z35n0w] = qabdcg);
  }
});