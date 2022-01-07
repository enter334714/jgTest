var E = wx.$p;
(function (window, document, k$yjh) {
  var _xftlu = k$yjh['un'],
      syhkij = k$yjh['uns'],
      rv6172 = k$yjh['static'],
      w0235z = k$yjh['class'],
      sikh4 = k$yjh['getset'],
      n9e = k$yjh['__newvec'],
      eqn98b = laya['utils']['Browser'],
      jhk$ = laya['events']['Event'],
      zewn35 = laya['events']['EventDispatcher'],
      w0z235 = laya['resource']['HTMLImage'],
      lput4 = laya['utils']['Handler'],
      r071v = laya['display']['Input'],
      ne895w = laya['net']['Loader'],
      bacdq = laya['maths']['Matrix'],
      u_ftxl = laya['renders']['Render'],
      qab98g = laya['utils']['RunDriver'],
      y7$16v = laya['media']['Sound'],
      vy67$ = laya['media']['SoundChannel'],
      nw5e9 = laya['media']['SoundManager'],
      ulfxtp = laya['display']['Stage'],
      ew359 = laya['net']['URL'],
      s4hki = laya['utils']['Utils'],
      $v6r7 = function () {
    function mutfx() {}return w0235z(mutfx, 'laya.wx.mini.MiniAdpter'), mutfx['getJson'] = function (tphl4) {
      return JSON['parse'](tphl4);
    }, mutfx['init'] = function (ijh4s, acbdg) {
      ijh4s === void 0x0 && (ijh4s = ![]), acbdg === void 0x0 && (acbdg = ![]);if (mutfx['_inited']) return;mutfx['window'] = window;if (mutfx['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;mutfx['_inited'] = !![], mutfx['isZiYu'] = acbdg, mutfx['isPosMsgYu'] = ijh4s, mutfx['EnvConfig'] = {}, !mutfx['isZiYu'] && (agbcdq['setNativeFileDir']('/layaairGame'), agbcdq['existDir'](agbcdq['fileNativeDir'], lput4['create'](mutfx, mutfx['onMkdirCallBack']))), mutfx['window']['focus'] = function () {}, k$yjh['getUrlPath'] = function () {}, mutfx['window']['logtime'] = function (v1$y6) {}, mutfx['window']['alertTimeLog'] = function (hst4pl) {}, mutfx['window']['resetShareInfo'] = function () {}, mutfx['window']['CanvasRenderingContext2D'] = function () {}, mutfx['window']['CanvasRenderingContext2D']['prototype'] = mutfx['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mutfx['window']['document']['body']['appendChild'] = function () {}, mutfx['EnvConfig']['pixelRatioInt'] = 0x0, qab98g['getPixelRatio'] = mutfx['pixelRatio'], mutfx['_preCreateElement'] = eqn98b['createElement'], eqn98b['createElement'] = mutfx['createElement'], qab98g['createShaderCondition'] = mutfx['createShaderCondition'], s4hki['parseXMLFromString'] = mutfx['parseXMLFromString'], r071v['_createInputElement'] = y7v1$['_createInputElement'], mutfx['EnvConfig']['load'] = ne895w['prototype']['load'], ne895w['prototype']['load'] = hjsiyk['prototype']['load'], mutfx['isZiYu'] && ijh4s && wx['onMessage'](function (gadbqc) {
        gadbqc['isLoad'] && (agbcdq['ziyuFileData'][gadbqc['url']] = gadbqc['data']);
      });
    }, mutfx['onMkdirCallBack'] = function (khis, kijhs4) {
      if (!khis) agbcdq['filesListObj'] = JSON['parse'](kijhs4['data']);
    }, mutfx['pixelRatio'] = function () {
      if (!mutfx['EnvConfig']['pixelRatioInt']) try {
        var ulptxf = wx['getSystemInfoSync']();return mutfx['EnvConfig']['pixelRatioInt'] = ulptxf['pixelRatio'], ulptxf = ulptxf, ulptxf['pixelRatio'];
      } catch (ftu) {}return mutfx['EnvConfig']['pixelRatioInt'];
    }, mutfx['createElement'] = function (bcgqa8) {
      if (bcgqa8 == 'canvas') {
        var kjsph;return mutfx['idx'] == 0x1 ? mutfx['isZiYu'] ? (kjsph = sharedCanvas, kjsph['style'] = {}) : kjsph = window['canvas'] : kjsph = window['wx']['createCanvas'](), mutfx['idx']++, kjsph;
      } else {
        if (bcgqa8 == 'textarea' || bcgqa8 == 'input') return mutfx['onCreateInput'](bcgqa8);else {
          if (bcgqa8 == 'div') {
            var s4ki = mutfx['_preCreateElement'](bcgqa8);return s4ki['contains'] = function (isk4) {
              return null;
            }, s4ki['removeChild'] = function (lhs4tp) {}, s4ki;
          } else return mutfx['_preCreateElement'](bcgqa8);
        }
      }
    }, mutfx['onCreateInput'] = function (gqbdc) {
      var s4tpxl = mutfx['_preCreateElement'](gqbdc);return s4tpxl['focus'] = y7v1$['wxinputFocus'], s4tpxl['blur'] = y7v1$['wxinputblur'], s4tpxl['style'] = {}, s4tpxl['value'] = 0x0, s4tpxl['parentElement'] = {}, s4tpxl['placeholder'] = {}, s4tpxl['type'] = {}, s4tpxl['setColor'] = function (w023r) {}, s4tpxl['setType'] = function (xtpul) {}, s4tpxl['setFontFace'] = function (fmoux_) {}, s4tpxl['addEventListener'] = function (umxt) {}, s4tpxl['contains'] = function (b98g) {
        return null;
      }, s4tpxl['removeChild'] = function (r307) {}, s4tpxl;
    }, mutfx['createShaderCondition'] = function (b8a9) {
      var e8bn9q = this,
          v1$6y7 = function () {
        var ofxmu = b8a9;return e8bn9q[b8a9['replace']('this.', '')];
      };return v1$6y7;
    }, mutfx['EnvConfig'] = null, mutfx['window'] = null, mutfx['_preCreateElement'] = null, mutfx['_inited'] = ![], mutfx['wxRequest'] = null, mutfx['systemInfo'] = null, mutfx['version'] = '0.0.1', mutfx['isZiYu'] = ![], mutfx['isPosMsgYu'] = ![], mutfx['parseXMLFromString'] = function (y$vi1) {
      var ox_fmu, _ltuxf;y$vi1 = y$vi1['replace'](/>\s+</g, '><');try {
        ox_fmu = new window['Parser']['DOMParser']()['parseFromString'](y$vi1, 'text/xml');
      } catch (p4lst) {
        throw '需要引入xml解析库文件';
      }return ox_fmu;
    }, mutfx['idx'] = 0x1, mutfx;
  }(),
      ux = function () {
    function j6y1i$() {}w0235z(j6y1i$, 'laya.wx.mini.MiniImage');var v72r01 = j6y1i$['prototype'];return v72r01['_loadImage'] = function (ksi4j) {
      var p4utl = this,
          uofxm_ = ![];ksi4j['indexOf']('layaNativeDir/') == -0x1 && (uofxm_ = !![], ksi4j = ew359['formatURL'](ksi4j));if (!agbcdq['getFileInfo'](ksi4j)) {
        if (ksi4j['indexOf']('http://') != -0x1 || ksi4j['indexOf']('https://') != -0x1) agbcdq['downImg'](ksi4j, new lput4(j6y1i$, j6y1i$['onDownImgCallBack'], [ksi4j, p4utl]), ksi4j);else j6y1i$['onCreateImage'](ksi4j, p4utl, !![]);
      } else j6y1i$['onCreateImage'](ksi4j, p4utl, !uofxm_);
    }, j6y1i$['onDownImgCallBack'] = function (skl4ph, rv27z0, s4phtl) {
      if (!s4phtl) j6y1i$['onCreateImage'](skl4ph, rv27z0);else rv27z0['onError'](null);
    }, j6y1i$['onCreateImage'] = function (z052, mf_oux, aqg8) {
      aqg8 === void 0x0 && (aqg8 = ![]);var txf;if (!aqg8) {
        var tfxu_l = agbcdq['getFileInfo'](z052),
            j1$yi6 = tfxu_l['md5'];txf = agbcdq['getFileNativePath'](j1$yi6);
      } else txf = z052;if (mf_oux['imgCache'] == null) mf_oux['imgCache'] = {};var r167v$;function tlpx() {
        r167v$['onload'] = null, r167v$['onerror'] = null, delete mf_oux['imgCache'][z052];
      };var r7vz02 = function () {
        tlpx(), mf_oux['onLoaded'](r167v$);
      },
          lsxt = function () {
        tlpx(), mf_oux['event']('error', 'Load image failed');
      };mf_oux['_type'] == 'nativeimage' ? (r167v$ = new eqn98b['window']['Image'](), r167v$['crossOrigin'] = '', r167v$['onload'] = r7vz02, r167v$['onerror'] = lsxt, r167v$['src'] = txf, mf_oux['imgCache'][z052] = r167v$) : new w0z235['create'](txf, { 'onload': r7vz02, 'onerror': lsxt, 'onCreate': function (r6v$17) {
          r167v$ = r6v$17, mf_oux['imgCache'][z052] = r6v$17;
        } });
    }, j6y1i$;
  }(),
      y7v1$ = function () {
    function h4lks() {}return w0235z(h4lks, 'laya.wx.mini.MiniInput'), h4lks['_createInputElement'] = function () {
      r071v['_initInput'](r071v['area'] = eqn98b['createElement']('textarea')), r071v['_initInput'](r071v['input'] = eqn98b['createElement']('input')), r071v['inputContainer'] = eqn98b['createElement']('div'), r071v['inputContainer']['style']['position'] = 'absolute', r071v['inputContainer']['style']['zIndex'] = 0x186a0, eqn98b['container']['appendChild'](r071v['inputContainer']), r071v['inputContainer']['setPos'] = function (yi1$v6, $jkyh) {
        r071v['inputContainer']['style']['left'] = yi1$v6 + 'px', r071v['inputContainer']['style']['top'] = $jkyh + 'px';
      }, k$yjh['stage']['on']('resize', null, h4lks['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e5zwn3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), nw5e9['_soundClass'] = kijs4, nw5e9['_musicClass'] = kijs4;
    }, h4lks['_onStageResize'] = function () {
      var y$hij = k$yjh['stage']['_canvasTransform']['identity']();y$hij['scale'](eqn98b['width'] / u_ftxl['canvas']['width'] / qab98g['getPixelRatio'](), eqn98b['height'] / u_ftxl['canvas']['height'] / qab98g['getPixelRatio']());
    }, h4lks['wxinputFocus'] = function (htp4) {
      var ebq9n = r071v['inputElement']['target'];if (ebq9n && !ebq9n['editable']) return;$v6r7['window']['wx']['offKeyboardConfirm'](), $v6r7['window']['wx']['offKeyboardInput'](), $v6r7['window']['wx']['showKeyboard']({ 'defaultValue': ebq9n['text'], 'maxLength': ebq9n['maxChars'], 'multiple': ebq9n['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (sp4ht) {}, 'fail': function (mu_) {} }), $v6r7['window']['wx']['onKeyboardConfirm'](function (j$ky6) {
        var kpj4s = j$ky6 ? j$ky6['value'] : '';ebq9n['text'] = kpj4s, ebq9n['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $v6r7['window']['wx']['onKeyboardInput'](function (fpxlu) {
        var i1$6 = fpxlu ? fpxlu['value'] : '';if (!ebq9n['multiline']) {
          if (i1$6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ebq9n['text'] = i1$6, ebq9n['event']('input');
      });
    }, h4lks['inputEnter'] = function () {
      r071v['inputElement']['target']['focus'] = ![];
    }, h4lks['wxinputblur'] = function () {
      h4lks['hideKeyboard']();
    }, h4lks['hideKeyboard'] = function () {
      $v6r7['window']['wx']['offKeyboardConfirm'](), $v6r7['window']['wx']['offKeyboardInput'](), $v6r7['window']['wx']['hideKeyboard']({ 'success': function (si4kh) {
          console['log']('隐藏键盘');
        }, 'fail': function (l4pks) {
          console['log']('隐藏键盘出错:' + (l4pks ? l4pks['errMsg'] : ''));
        } });
    }, h4lks;
  }(),
      hjsiyk = function () {
    function ufo_m() {}w0235z(ufo_m, 'laya.wx.mini.MiniLoader');var v716 = ufo_m['prototype'];return v716['load'] = function (gdcqb, mutx, hkjy$i, wn5e3z, qn9be8) {
      hkjy$i === void 0x0 && (hkjy$i = !![]), qn9be8 === void 0x0 && (qn9be8 = ![]);var t_ulx = this;t_ulx['_url'] = gdcqb;if (gdcqb['indexOf']('data:image') === 0x0) t_ulx['_type'] = mutx = 'image';else t_ulx['_type'] = mutx || (mutx = t_ulx['getTypeFromUrl'](gdcqb));t_ulx['_cache'] = hkjy$i, t_ulx['_data'] = null;var oufxm_ = 'ascii';if (gdcqb['indexOf']('.fnt') != -0x1) oufxm_ = 'utf8';else mutx == 'arraybuffer' && (oufxm_ = '');;var jh$ki = s4hki['getFileExtension'](gdcqb);if (ufo_m['_fileTypeArr']['indexOf'](jh$ki) != -0x1) $v6r7['EnvConfig']['load']['call'](this, gdcqb, mutx, hkjy$i, wn5e3z, qn9be8);else {
        if (!agbcdq['getFileInfo'](gdcqb)) {
          if (gdcqb['indexOf']('layaNativeDir/') != -0x1) {
            if ($v6r7['isZiYu']) {
              var l_fu = agbcdq['ziyuFileData'][gdcqb];t_ulx['onLoaded'](l_fu);return;
            } else {
              cosnole['log']('read read'), agbcdq['read'](gdcqb, oufxm_, new lput4(ufo_m, ufo_m['onReadNativeCallBack'], [oufxm_, gdcqb, mutx, hkjy$i, wn5e3z, qn9be8, t_ulx]));return;
            }
          }if (ew359['rootPath'] == '') var zr203 = gdcqb;else zr203 = gdcqb['split'](ew359['rootPath'])[0x0];gdcqb['indexOf']('http://') != -0x1 || gdcqb['indexOf']('https://') != -0x1 ? $v6r7['EnvConfig']['load']['call'](t_ulx, gdcqb, mutx, hkjy$i, wn5e3z, qn9be8) : agbcdq['readFile'](zr203, oufxm_, new lput4(ufo_m, ufo_m['onReadNativeCallBack'], [oufxm_, gdcqb, mutx, hkjy$i, wn5e3z, qn9be8, t_ulx]), gdcqb);
        } else $v6r7['EnvConfig']['load']['call'](this, gdcqb, mutx, hkjy$i, wn5e3z, qn9be8);
      }
    }, v716['resMgrLoad'] = function (z503w2, ltfux, wn9e53, ih4kjs, q9g8ab, x_luf, e95n) {
      wn9e53 === void 0x0 && (wn9e53 = 0x0), ih4kjs === void 0x0 && (ih4kjs = ![]), q9g8ab === void 0x0 && (q9g8ab = ![]), x_luf === void 0x0 && (x_luf = 0x0), e95n === void 0x0 && (e95n = 0x3), z503w2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z503w2), $v6r7['EnvConfig']['resMgrLoad'](z503w2, (lt_fx, q9g8ba, $kij) => {
        ufo_m['prototype']['resMgrLoadCallBack'](lt_fx, q9g8ba, $kij, ltfux);
      }, wn9e53, ih4kjs, q9g8ab, x_luf, e95n);
    }, v716['resMgrLoadCallBack'] = function (xt_lfu, i6$1vy, iv6y1$, t_uflx) {
      console['log']('buff:::', xt_lfu, iv6y1$, agbcdq['fileNativeDir'] + '///' + agbcdq['fileListName']), t_uflx(xt_lfu, i6$1vy, iv6y1$);
    }, v716['clearRes'] = function (bag8cq, a9bqg8) {
      a9bqg8 === void 0x0 && (a9bqg8 = ![]);var bq9e8n = this;bq9e8n['clearRes'](bag8cq, a9bqg8);var _fomu = agbcdq['getFileInfo'](bag8cq);if (_fomu && (bag8cq['indexOf']('http://') != -0x1 || bag8cq['indexOf']('https://') != -0x1)) {
        var ltxuf_ = _fomu['md5'],
            _fltux = agbcdq['getFileNativePath'](ltxuf_);agbcdq['remove'](_fltux);
      }
    }, ufo_m['onReadNativeCallBack'] = function (tlxuf, n350, w9n85e, jphsk4, q589e, _oxmfu, t_fx, ebq89, $7vr6) {
      jphsk4 === void 0x0 && (jphsk4 = !![]), _oxmfu === void 0x0 && (_oxmfu = ![]), ebq89 === void 0x0 && (ebq89 = 0x0);if (!ebq89) {
        var $vyi;if (w9n85e == 'json' || w9n85e == 'atlas') $vyi = $v6r7['getJson']($7vr6['data']);else w9n85e == 'xml' ? $vyi = s4hki['parseXMLFromString']($7vr6['data']) : $vyi = $7vr6['data'];t_fx['onLoaded']($vyi), !$v6r7['isZiYu'] && $v6r7['isPosMsgYu'] && w9n85e != 'arraybuffer' && wx['postMessage']({ 'url': n350, 'data': $vyi, 'isLoad': !![] });
      } else ebq89 == 0x1 && $v6r7['EnvConfig']['load']['call'](t_fx, n350, w9n85e, jphsk4, q589e, _oxmfu);
    }, rv6172(ufo_m, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ufo_m;
  }(),
      agbcdq = function (pkj4sh) {
    function adb() {
      adb['__super']['call'](this);;
    }return w0235z(adb, 'laya.wx.mini.MiniFileMgr', pkj4sh), adb['isLoadFile'] = function (eb98aq) {
      return adb['_fileTypeArr']['indexOf'](eb98aq) != -0x1 ? !![] : ![];
    }, adb['getFileInfo'] = function (baqdcg) {
      var nzew = baqdcg['split']('?')[0x0],
          y16$ = adb['filesListObj'][nzew];if (y16$ == null) return null;else return y16$;return null;
    }, adb['onFileUpdate'] = function (v$r716, v102r7) {
      var znew3 = v$r716['split']('/'),
          xlp4ts = znew3[znew3['length'] - 0x1],
          kphj = adb['getFileInfo'](v102r7);if (kphj == null) adb['onSaveFile'](v102r7, xlp4ts);else {
        if (kphj['readyUrl'] != v102r7) adb['remove'](xlp4ts, v102r7);
      }
    }, adb['exits'] = function (z3nwe5, e85q) {
      var xu_fm = adb['getFileNativePath'](z3nwe5);adb['fs']['getFileInfo']({ 'filePath': xu_fm, 'success': function (fxm_tu) {
          e85q != null && e85q['runWith']([0x0, fxm_tu]);
        }, 'fail': function (m_tuf) {
          e85q != null && e85q['runWith']([0x1, m_tuf]);
        } });
    }, adb['read'] = function (wrz30, lps4tx, bgcqda, xu_o) {
      lps4tx === void 0x0 && (lps4tx = 'ascill'), xu_o === void 0x0 && (xu_o = '');var j1y$6i;xu_o != '' ? j1y$6i = adb['getFileNativePath'](wrz30) : j1y$6i = wrz30, adb['fs']['readFile']({ 'filePath': j1y$6i, 'encoding': lps4tx, 'success': function (qgca8) {
          bgcqda != null && bgcqda['runWith']([0x0, qgca8]);
        }, 'fail': function (y61$) {
          if (y61$ && xu_o != '') adb['down'](xu_o, lps4tx, bgcqda, xu_o);else bgcqda != null && bgcqda['runWith']([0x1]);
        } });
    }, adb['readNativeFile'] = function (v$y61i, r6712) {
      adb['fs']['readFile']({ 'filePath': v$y61i, 'encoding': '', 'success': function (wne85) {
          r6712 != null && r6712['runWith']([0x0]);
        }, 'fail': function (j4ski) {
          r6712 != null && r6712['runWith']([0x1]);
        } });
    }, adb['down'] = function (vz0r2, pfutxl, mtfx_u, ikhj4) {
      pfutxl === void 0x0 && (pfutxl = 'ascill'), ikhj4 === void 0x0 && (ikhj4 = '');var mutf = adb['getFileNativePath'](ikhj4),
          z270vr = adb['wxdown']({ 'url': vz0r2, 'filePath': mutf, 'success': function (z5we) {
          if (z5we['statusCode'] === 0xc8) adb['readFile'](z5we['filePath'], pfutxl, mtfx_u, ikhj4);
        }, 'fail': function (r2017v) {
          mtfx_u != null && mtfx_u['runWith']([0x1, r2017v]);
        } });z270vr['onProgressUpdate'](function (kji$6y) {
        mtfx_u != null && mtfx_u['runWith']([0x2, kji$6y['progress']]);
      });
    }, adb['readFile'] = function (hlp4k, ptlsh4, l_fxt, l4hpts) {
      ptlsh4 === void 0x0 && (ptlsh4 = 'ascill'), l4hpts === void 0x0 && (l4hpts = ''), adb['fs']['readFile']({ 'filePath': hlp4k, 'encoding': ptlsh4, 'success': function (yji6$k) {
          if (hlp4k['indexOf']('http://') != -0x1 || hlp4k['indexOf']('https://') != -0x1) adb['onFileUpdate'](hlp4k, l4hpts);l_fxt != null && l_fxt['runWith']([0x0, yji6$k]);
        }, 'fail': function (l_tfxu) {
          if (l_tfxu) l_fxt != null && l_fxt['runWith']([0x1, l_tfxu]);
        } });
    }, adb['downImg'] = function (agdbq, ptsl4, r21v76) {
      r21v76 === void 0x0 && (r21v76 = '');var lfptux = adb['wxdown']({ 'url': agdbq, 'success': function (mo_xu) {
          mo_xu['statusCode'] === 0xc8 && adb['copyFile'](mo_xu['tempFilePath'], r21v76, ptsl4);
        }, 'fail': function (utxpf) {
          ptsl4 != null && ptsl4['runWith']([0x1, utxpf]);
        } });
    }, adb['copyFile'] = function (hk$iyj, lth4p, pkslh) {
      var adbgqc = hk$iyj['split']('/'),
          zw0n3 = adbgqc[adbgqc['length'] - 0x1],
          $6y1iv = lth4p['split']('?')[0x0],
          dbgac = adb['getFileInfo'](lth4p),
          zv0r = adb['getFileNativePath'](zw0n3);adb['fs']['copyFile']({ 'srcPath': hk$iyj, 'destPath': zv0r, 'success': function (bgqc8a) {
          if (!dbgac) adb['onSaveFile'](lth4p, zw0n3), pkslh != null && pkslh['runWith']([0x0]);else {
            if (dbgac['readyUrl'] != lth4p) adb['remove'](zw0n3, lth4p, pkslh);
          }
        }, 'fail': function (z02r7) {
          pkslh != null && pkslh['runWith']([0x1, z02r7]);
        } });
    }, adb['getFileNativePath'] = function (t4sx) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t4sx;
    }, adb['remove'] = function (r30zw2, skij4h, ftxum) {
      skij4h === void 0x0 && (skij4h = '');var ne35zw = adb['getFileInfo'](skij4h),
          $vi6y = adb['getFileNativePath'](ne35zw['md5']);k$yjh['loader']['clearRes'](ne35zw['readyUrl']), adb['fs']['unlink']({ 'filePath': $vi6y, 'success': function (umt_xf) {
          if (skij4h != '') adb['onSaveFile'](skij4h, r30zw2);ftxum != null && ftxum['runWith']([0x0]);
        }, 'fail': function (pltsh) {} });
    }, adb['onSaveFile'] = function (dbqgca, o_mxf) {
      var zr302 = dbqgca['split']('?')[0x0];adb['filesListObj'][zr302] = { 'md5': o_mxf, 'readyUrl': dbqgca }, adb['fs']['writeFile']({ 'filePath': adb['fileNativeDir'] + '/' + adb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](adb['filesListObj']), 'success': function (gq8cb) {
          console['log']('写入测试测试成功：', gq8cb);
        }, 'fail': function (dbqacg) {
          console['log']('写入测试测试失败：', dbqacg);
        } });
    }, adb['existDir'] = function (a8cq, khiys) {
      adb['fs']['mkdir']({ 'dirPath': a8cq, 'success': function (iy$j16) {
          khiys != null && khiys['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (umx_o) {
          if (umx_o['errMsg']['indexOf']('file already exists') != -0x1) adb['readSync'](adb['fileListName'], 'utf8', khiys);else khiys != null && khiys['runWith']([0x1, umx_o]);
        } });
    }, adb['readSync'] = function ($iy61, y7$v, n35wze, baq8c) {
      y7$v === void 0x0 && (y7$v = 'ascill'), baq8c === void 0x0 && (baq8c = '');var gbacqd = adb['getFileNativePath']($iy61),
          n58we;try {
        n58we = adb['fs']['readFileSync'](gbacqd), n35wze != null && n35wze['runWith']([0x0, { 'data': n58we }]);
      } catch (hkjiys) {
        n35wze != null && n35wze['runWith']([0x1]);
      }
    }, adb['readCache'] = function () {}, adb['writeCache'] = function (mf_) {
      var lxpuft = readyUrl['split']('?')[0x0];adb['filesListObj'][lxpuft] = { 'md5': md5Name, 'readyUrl': readyUrl }, adb['fs']['writeFile']({ 'filePath': adb['fileNativeDir'] + '/' + adb['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](adb['filesListObj']), 'success': function (bqen98) {}, 'fail': function (shyjki) {} });
    }, adb['setNativeFileDir'] = function (q58e9n) {
      adb['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q58e9n;
    }, adb['filesListObj'] = {}, adb['fileNativeDir'] = null, adb['fileListName'] = 'layaairfiles.txt', adb['ziyuFileData'] = {}, rv6172(adb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), adb;
  }(zewn35),
      kijs4 = function (putx4) {
    function xu_tlf() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], xu_tlf['__super']['call'](this), this['_sound'] = xu_tlf['_createSound']();
    }w0235z(xu_tlf, 'laya.wx.mini.MiniSound', putx4);var yi$61 = xu_tlf['prototype'];return yi$61['load'] = function (_fxmou) {
      var w302r = this;_fxmou = ew359['formatURL'](_fxmou), this['url'] = _fxmou;if (xu_tlf['_audioCache'][_fxmou]) {
        this['event']('complete');return;
      }function h4ks() {
        if (xu_tlf['_null'] != undefined) w302r['_sound']['onCanplay'](xu_tlf['_null']), w302r['_sound']['onError'](xu_tlf['_null']);else try {
          w302r['_sound']['onCanplay'](null), w302r['_sound']['onError'](null), xu_tlf['_null'] = null;
        } catch (z0v7r2) {
          console['warn']('[wxmini] _clearSound:' + z0v7r2), w302r['_sound']['onCanplay'](benq89), w302r['_sound']['onError'](benq89), xu_tlf['_null'] = benq89;
        }
      }function _xmfu() {
        h4ks(), v7r621['loaded'] = !![], v7r621['event']('complete'), xu_tlf['_audioCache'][v7r621['url']] = v7r621;
      }function j$i61($yjikh) {
        console['error']('errCode=' + $yjikh['errCode'] + '  errMsg=' + $yjikh['errMsg']), h4ks(), v7r621['event']('error');
      }function benq89() {}this['_sound']['onCanplay'](_xmfu), this['_sound']['onError'](j$i61), this['_sound']['src'] = _fxmou;var v7r621 = this;
    }, yi$61['play'] = function (agcdqb, j61y$i) {
      agcdqb === void 0x0 && (agcdqb = 0x0), j61y$i === void 0x0 && (j61y$i = 0x0);var r071v2;if (this['url'] == nw5e9['_tMusic']) {
        if (!xu_tlf['_musicAudio']) xu_tlf['_musicAudio'] = xu_tlf['_createSound']();r071v2 = xu_tlf['_musicAudio'];
      } else r071v2 = xu_tlf['_createSound']();r071v2['src'] = this['url'];var r67v2 = new h$ijky(r071v2);return r67v2['url'] = this['url'], r67v2['loops'] = j61y$i, r67v2['startTime'] = agcdqb, r67v2['play'](), nw5e9['addChannel'](r67v2), r67v2;
    }, yi$61['dispose'] = function () {
      var _fuom = xu_tlf['_audioCache'][this['url']];_fuom && (_fuom['src'] = '', delete xu_tlf['_audioCache'][this['url']]);
    }, sikh4(0x0, yi$61, 'duration', function () {
      return this['_sound']['duration'];
    }), xu_tlf['_createSound'] = function () {
      return xu_tlf['_id']++, $v6r7['window']['wx']['createInnerAudioContext']();
    }, xu_tlf['_musicAudio'] = null, xu_tlf['_id'] = 0x0, xu_tlf['_audioCache'] = {}, xu_tlf['_null'] = undefined, xu_tlf;
  }(zewn35),
      h$ijky = function (qag9) {
    function $iy1j(mxfo_) {
      this['_audio'] = null, this['_onEnd'] = null, $iy1j['__super']['call'](this), this['_audio'] = mxfo_, this['_onEnd'] = s4hki['bind'](this['__onEnd'], this), mxfo_['onEnded'](this['_onEnd']);
    }w0235z($iy1j, 'laya.wx.mini.MiniSoundChannel', qag9);var spk4hl = $iy1j['prototype'];return spk4hl['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (k$yjh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, spk4hl['__onNull'] = function () {}, spk4hl['play'] = function () {
      this['isStopped'] = ![], nw5e9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, spk4hl['stop'] = function () {
      this['isStopped'] = !![], nw5e9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($iy1j['_null'] != undefined) this['_audio']['onEnded']($iy1j['_null']);else try {
        this['_audio']['onEnded'](null), $iy1j['_null'] = null;
      } catch (k4hsi) {
        console['warn']('[wxmini] stop:' + k4hsi), this['_audio']['onEnded'](s4hki['bind'](this['__onNull'], this)), $iy1j['_null'] = s4hki['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, spk4hl['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, spk4hl['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], nw5e9['addChannel'](this), this['_audio']['play']();
    }, sikh4(0x0, spk4hl, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), sikh4(0x0, spk4hl, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), sikh4(0x0, spk4hl, 'volume', function () {
      return 0x1;
    }, function (v6r12) {}), $iy1j['_null'] = undefined, $iy1j;
  }(vy67$);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var e53wn9 in Laya) {
    var z72r30 = Laya[e53wn9];z72r30 && z72r30['__isclass'] && (exports[e53wn9] = z72r30);
  }
});