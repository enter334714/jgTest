var B = wx.$z;
(function (window, document, tasxe) {
  var ru_52w = tasxe['un'],
      p64gh1 = tasxe['uns'],
      dtezoy = tasxe['static'],
      lgf46v = tasxe['class'],
      kyoz = tasxe['getset'],
      edaot = tasxe['__newvec'],
      eoytdz = laya['utils']['Browser'],
      dzyt = laya['events']['Event'],
      ry8kb = laya['events']['EventDispatcher'],
      kzdot = laya['resource']['HTMLImage'],
      r58b_ = laya['utils']['Handler'],
      nflv4 = laya['display']['Input'],
      _rbk58 = laya['net']['Loader'],
      n7l = laya['maths']['Matrix'],
      i$3jqm = laya['renders']['Render'],
      _byrk = laya['utils']['RunDriver'],
      sxz9e = laya['media']['Sound'],
      eatsz = laya['media']['SoundChannel'],
      lgvf46 = laya['media']['SoundManager'],
      m7n3il = laya['display']['Stage'],
      x91sea = laya['net']['URL'],
      px9h1g = laya['utils']['Utils'],
      uw_0 = function () {
    function nim7v() {}return lgf46v(nim7v, 'laya.wx.mini.MiniAdpter'), nim7v['getJson'] = function (zdktoy) {
      return JSON['parse'](zdktoy);
    }, nim7v['init'] = function (_8y, szetao) {
      _8y === void 0x0 && (_8y = ![]), szetao === void 0x0 && (szetao = ![]);if (nim7v['_inited']) return;nim7v['window'] = window;if (nim7v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;nim7v['_inited'] = !![], nim7v['isZiYu'] = szetao, nim7v['isPosMsgYu'] = _8y, nim7v['EnvConfig'] = {}, !nim7v['isZiYu'] && (min7q3['setNativeFileDir']('/layaairGame'), min7q3['existDir'](min7q3['fileNativeDir'], r58b_['create'](nim7v, nim7v['onMkdirCallBack']))), nim7v['window']['focus'] = function () {}, tasxe['getUrlPath'] = function () {}, nim7v['window']['logtime'] = function (g16hp) {}, nim7v['window']['alertTimeLog'] = function (qij$m3) {}, nim7v['window']['resetShareInfo'] = function () {}, nim7v['window']['CanvasRenderingContext2D'] = function () {}, nim7v['window']['CanvasRenderingContext2D']['prototype'] = nim7v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nim7v['window']['document']['body']['appendChild'] = function () {}, nim7v['EnvConfig']['pixelRatioInt'] = 0x0, _byrk['getPixelRatio'] = nim7v['pixelRatio'], nim7v['_preCreateElement'] = eoytdz['createElement'], eoytdz['createElement'] = nim7v['createElement'], _byrk['createShaderCondition'] = nim7v['createShaderCondition'], px9h1g['parseXMLFromString'] = nim7v['parseXMLFromString'], nflv4['_createInputElement'] = eazt['_createInputElement'], nim7v['EnvConfig']['load'] = _rbk58['prototype']['load'], _rbk58['prototype']['load'] = r28_5u['prototype']['load'], nim7v['isZiYu'] && _8y && wx['onMessage'](function (xasz9e) {
        xasz9e['isLoad'] && (min7q3['ziyuFileData'][xasz9e['url']] = xasz9e['data']);
      });
    }, nim7v['onMkdirCallBack'] = function (mn37q, v6lfg4) {
      if (!mn37q) min7q3['filesListObj'] = JSON['parse'](v6lfg4['data']);
    }, nim7v['pixelRatio'] = function () {
      if (!nim7v['EnvConfig']['pixelRatioInt']) try {
        var vfil7n = wx['getSystemInfoSync']();return nim7v['EnvConfig']['pixelRatioInt'] = vfil7n['pixelRatio'], vfil7n = vfil7n, vfil7n['pixelRatio'];
      } catch (g46vl) {}return nim7v['EnvConfig']['pixelRatioInt'];
    }, nim7v['createElement'] = function (tybdk) {
      if (tybdk == 'canvas') {
        var ezxtas;return nim7v['idx'] == 0x1 ? nim7v['isZiYu'] ? (ezxtas = sharedCanvas, ezxtas['style'] = {}) : ezxtas = window['canvas'] : ezxtas = window['wx']['createCanvas'](), nim7v['idx']++, ezxtas;
      } else {
        if (tybdk == 'textarea' || tybdk == 'input') return nim7v['onCreateInput'](tybdk);else {
          if (tybdk == 'div') {
            var kb8doy = nim7v['_preCreateElement'](tybdk);return kb8doy['contains'] = function (_825br) {
              return null;
            }, kb8doy['removeChild'] = function (s9xze) {}, kb8doy;
          } else return nim7v['_preCreateElement'](tybdk);
        }
      }
    }, nim7v['onCreateInput'] = function (ktydzo) {
      var gxp91 = nim7v['_preCreateElement'](ktydzo);return gxp91['focus'] = eazt['wxinputFocus'], gxp91['blur'] = eazt['wxinputblur'], gxp91['style'] = {}, gxp91['value'] = 0x0, gxp91['parentElement'] = {}, gxp91['placeholder'] = {}, gxp91['type'] = {}, gxp91['setColor'] = function (brkd8y) {}, gxp91['setType'] = function (etaxsz) {}, gxp91['setFontFace'] = function (ybotdk) {}, gxp91['addEventListener'] = function (vilm7) {}, gxp91['contains'] = function (vlnif7) {
        return null;
      }, gxp91['removeChild'] = function (k8_5br) {}, gxp91;
    }, nim7v['createShaderCondition'] = function ($qjm3i) {
      var w52 = this,
          zyeot = function () {
        var h19xg = $qjm3i;return w52[$qjm3i['replace']('this.', '')];
      };return zyeot;
    }, nim7v['EnvConfig'] = null, nim7v['window'] = null, nim7v['_preCreateElement'] = null, nim7v['_inited'] = ![], nim7v['wxRequest'] = null, nim7v['systemInfo'] = null, nim7v['version'] = '0.0.1', nim7v['isZiYu'] = ![], nim7v['isPosMsgYu'] = ![], nim7v['parseXMLFromString'] = function (vnil7m) {
      var k8y_r, s1x9ha;vnil7m = vnil7m['replace'](/>\s+</g, '><');try {
        k8y_r = new window['Parser']['DOMParser']()['parseFromString'](vnil7m, 'text/xml');
      } catch (oatse) {
        throw '需要引入xml解析库文件';
      }return k8y_r;
    }, nim7v['idx'] = 0x1, nim7v;
  }(),
      azto = function () {
    function i$qjm() {}lgf46v(i$qjm, 'laya.wx.mini.MiniImage');var zst = i$qjm['prototype'];return zst['_loadImage'] = function (odzate) {
      var mqi$ = this,
          m3$qij = ![];odzate['indexOf']('layaNativeDir/') == -0x1 && (m3$qij = !![], odzate = x91sea['formatURL'](odzate));if (!min7q3['getFileInfo'](odzate)) {
        if (odzate['indexOf']('http://') != -0x1 || odzate['indexOf']('https://') != -0x1) min7q3['downImg'](odzate, new r58b_(i$qjm, i$qjm['onDownImgCallBack'], [odzate, mqi$]), odzate);else i$qjm['onCreateImage'](odzate, mqi$, !![]);
      } else i$qjm['onCreateImage'](odzate, mqi$, !m3$qij);
    }, i$qjm['onDownImgCallBack'] = function (oztae, g6fh4p, vfl6g4) {
      if (!vfl6g4) i$qjm['onCreateImage'](oztae, g6fh4p);else g6fh4p['onError'](null);
    }, i$qjm['onCreateImage'] = function (hxgp19, aestzo, sphx) {
      sphx === void 0x0 && (sphx = ![]);var nv64l;if (!sphx) {
        var $imq = min7q3['getFileInfo'](hxgp19),
            qm$j3i = $imq['md5'];nv64l = min7q3['getFileNativePath'](qm$j3i);
      } else nv64l = hxgp19;if (aestzo['imgCache'] == null) aestzo['imgCache'] = {};var x91sph;function nliv7f() {
        x91sph['onload'] = null, x91sph['onerror'] = null, delete aestzo['imgCache'][hxgp19];
      };var xeszt = function () {
        nliv7f(), aestzo['onLoaded'](x91sph);
      },
          gx1p9h = function () {
        nliv7f(), aestzo['event']('error', 'Load image failed');
      };aestzo['_type'] == 'nativeimage' ? (x91sph = new eoytdz['window']['Image'](), x91sph['crossOrigin'] = '', x91sph['onload'] = xeszt, x91sph['onerror'] = gx1p9h, x91sph['src'] = nv64l, aestzo['imgCache'][hxgp19] = x91sph) : new kzdot['create'](nv64l, { 'onload': xeszt, 'onerror': gx1p9h, 'onCreate': function (dyoetz) {
          x91sph = dyoetz, aestzo['imgCache'][hxgp19] = dyoetz;
        } });
    }, i$qjm;
  }(),
      eazt = function () {
    function sxh9() {}return lgf46v(sxh9, 'laya.wx.mini.MiniInput'), sxh9['_createInputElement'] = function () {
      nflv4['_initInput'](nflv4['area'] = eoytdz['createElement']('textarea')), nflv4['_initInput'](nflv4['input'] = eoytdz['createElement']('input')), nflv4['inputContainer'] = eoytdz['createElement']('div'), nflv4['inputContainer']['style']['position'] = 'absolute', nflv4['inputContainer']['style']['zIndex'] = 0x186a0, eoytdz['container']['appendChild'](nflv4['inputContainer']), nflv4['inputContainer']['setPos'] = function (bo8y, xsah9) {
        nflv4['inputContainer']['style']['left'] = bo8y + 'px', nflv4['inputContainer']['style']['top'] = xsah9 + 'px';
      }, tasxe['stage']['on']('resize', null, sxh9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (oet) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), lgvf46['_soundClass'] = k8_r5b, lgvf46['_musicClass'] = k8_r5b;
    }, sxh9['_onStageResize'] = function () {
      var esx9z = tasxe['stage']['_canvasTransform']['identity']();esx9z['scale'](eoytdz['width'] / i$3jqm['canvas']['width'] / _byrk['getPixelRatio'](), eoytdz['height'] / i$3jqm['canvas']['height'] / _byrk['getPixelRatio']());
    }, sxh9['wxinputFocus'] = function (ykbr8) {
      var hg461p = nflv4['inputElement']['target'];if (hg461p && !hg461p['editable']) return;uw_0['window']['wx']['offKeyboardConfirm'](), uw_0['window']['wx']['offKeyboardInput'](), uw_0['window']['wx']['showKeyboard']({ 'defaultValue': hg461p['text'], 'maxLength': hg461p['maxChars'], 'multiple': hg461p['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (doezta) {}, 'fail': function (deoza) {} }), uw_0['window']['wx']['onKeyboardConfirm'](function (v4g6l) {
        var boktdy = v4g6l ? v4g6l['value'] : '';hg461p['text'] = boktdy, hg461p['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), uw_0['window']['wx']['onKeyboardInput'](function (zaoedt) {
        var im3q = zaoedt ? zaoedt['value'] : '';if (!hg461p['multiline']) {
          if (im3q['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hg461p['text'] = im3q, hg461p['event']('input');
      });
    }, sxh9['inputEnter'] = function () {
      nflv4['inputElement']['target']['focus'] = ![];
    }, sxh9['wxinputblur'] = function () {
      sxh9['hideKeyboard']();
    }, sxh9['hideKeyboard'] = function () {
      uw_0['window']['wx']['offKeyboardConfirm'](), uw_0['window']['wx']['offKeyboardInput'](), uw_0['window']['wx']['hideKeyboard']({ 'success': function (aztseo) {
          console['log']('隐藏键盘');
        }, 'fail': function (vilnm7) {
          console['log']('隐藏键盘出错:' + (vilnm7 ? vilnm7['errMsg'] : ''));
        } });
    }, sxh9;
  }(),
      r28_5u = function () {
    function ydbk8r() {}lgf46v(ydbk8r, 'laya.wx.mini.MiniLoader');var iv7mn = ydbk8r['prototype'];return iv7mn['load'] = function (fp46gv, sah9x, n4l6vf, f4hp6, i37m$q) {
      n4l6vf === void 0x0 && (n4l6vf = !![]), i37m$q === void 0x0 && (i37m$q = ![]);var hfg64p = this;hfg64p['_url'] = fp46gv;if (fp46gv['indexOf']('data:image') === 0x0) hfg64p['_type'] = sah9x = 'image';else hfg64p['_type'] = sah9x || (sah9x = hfg64p['getTypeFromUrl'](fp46gv));hfg64p['_cache'] = n4l6vf, hfg64p['_data'] = null;var r25wu_ = 'ascii';if (fp46gv['indexOf']('.fnt') != -0x1) r25wu_ = 'utf8';else sah9x == 'arraybuffer' && (r25wu_ = '');;var e9x1 = px9h1g['getFileExtension'](fp46gv);if (ydbk8r['_fileTypeArr']['indexOf'](e9x1) != -0x1) uw_0['EnvConfig']['load']['call'](this, fp46gv, sah9x, n4l6vf, f4hp6, i37m$q);else {
        if (!min7q3['getFileInfo'](fp46gv)) {
          if (fp46gv['indexOf']('layaNativeDir/') != -0x1) {
            if (uw_0['isZiYu']) {
              var sh9p1x = min7q3['ziyuFileData'][fp46gv];hfg64p['onLoaded'](sh9p1x);return;
            } else {
              cosnole['log']('read read'), min7q3['read'](fp46gv, r25wu_, new r58b_(ydbk8r, ydbk8r['onReadNativeCallBack'], [r25wu_, fp46gv, sah9x, n4l6vf, f4hp6, i37m$q, hfg64p]));return;
            }
          }if (x91sea['rootPath'] == '') var qmi7n = fp46gv;else qmi7n = fp46gv['split'](x91sea['rootPath'])[0x0];fp46gv['indexOf']('http://') != -0x1 || fp46gv['indexOf']('https://') != -0x1 ? uw_0['EnvConfig']['load']['call'](hfg64p, fp46gv, sah9x, n4l6vf, f4hp6, i37m$q) : min7q3['readFile'](qmi7n, r25wu_, new r58b_(ydbk8r, ydbk8r['onReadNativeCallBack'], [r25wu_, fp46gv, sah9x, n4l6vf, f4hp6, i37m$q, hfg64p]), fp46gv);
        } else uw_0['EnvConfig']['load']['call'](this, fp46gv, sah9x, n4l6vf, f4hp6, i37m$q);
      }
    }, iv7mn['resMgrLoad'] = function (v4l6fg, dboytk, u85r_2, by8_, dkboyt, yd8ko, w_2u05) {
      u85r_2 === void 0x0 && (u85r_2 = 0x0), by8_ === void 0x0 && (by8_ = ![]), dkboyt === void 0x0 && (dkboyt = ![]), yd8ko === void 0x0 && (yd8ko = 0x0), w_2u05 === void 0x0 && (w_2u05 = 0x3), v4l6fg['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', v4l6fg), uw_0['EnvConfig']['resMgrLoad'](v4l6fg, (mil73, dbotky, fnl64) => {
        ydbk8r['prototype']['resMgrLoadCallBack'](mil73, dbotky, fnl64, dboytk);
      }, u85r_2, by8_, dkboyt, yd8ko, w_2u05);
    }, iv7mn['resMgrLoadCallBack'] = function (ky8bdo, r5_wu, nl3im7, qn7) {
      console['log']('buff:::', ky8bdo, nl3im7, min7q3['fileNativeDir'] + '///' + min7q3['fileListName']), qn7(ky8bdo, r5_wu, nl3im7);
    }, iv7mn['clearRes'] = function (aesxzt, hxpg1) {
      hxpg1 === void 0x0 && (hxpg1 = ![]);var hgp6f = this;hgp6f['clearRes'](aesxzt, hxpg1);var g6fpv = min7q3['getFileInfo'](aesxzt);if (g6fpv && (aesxzt['indexOf']('http://') != -0x1 || aesxzt['indexOf']('https://') != -0x1)) {
        var hx19sp = g6fpv['md5'],
            g9h14 = min7q3['getFileNativePath'](hx19sp);min7q3['remove'](g9h14);
      }
    }, ydbk8r['onReadNativeCallBack'] = function (g14h, sxezta, otzae, mvinl7, vilf7n, b_y8r, q3$7mi, tsazoe, xazse) {
      mvinl7 === void 0x0 && (mvinl7 = !![]), b_y8r === void 0x0 && (b_y8r = ![]), tsazoe === void 0x0 && (tsazoe = 0x0);if (!tsazoe) {
        var xhpg91;if (otzae == 'json' || otzae == 'atlas') xhpg91 = uw_0['getJson'](xazse['data']);else otzae == 'xml' ? xhpg91 = px9h1g['parseXMLFromString'](xazse['data']) : xhpg91 = xazse['data'];q3$7mi['onLoaded'](xhpg91), !uw_0['isZiYu'] && uw_0['isPosMsgYu'] && otzae != 'arraybuffer' && wx['postMessage']({ 'url': sxezta, 'data': xhpg91, 'isLoad': !![] });
      } else tsazoe == 0x1 && uw_0['EnvConfig']['load']['call'](q3$7mi, sxezta, otzae, mvinl7, vilf7n, b_y8r);
    }, dtezoy(ydbk8r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ydbk8r;
  }(),
      min7q3 = function (dzote) {
    function yokdz() {
      yokdz['__super']['call'](this);;
    }return lgf46v(yokdz, 'laya.wx.mini.MiniFileMgr', dzote), yokdz['isLoadFile'] = function (a9es1x) {
      return yokdz['_fileTypeArr']['indexOf'](a9es1x) != -0x1 ? !![] : ![];
    }, yokdz['getFileInfo'] = function (otdbk) {
      var mlv = otdbk['split']('?')[0x0],
          im73n = yokdz['filesListObj'][mlv];if (im73n == null) return null;else return im73n;return null;
    }, yokdz['onFileUpdate'] = function (obdky8, nvf67) {
      var odkb = obdky8['split']('/'),
          zad = odkb[odkb['length'] - 0x1],
          g4pvf6 = yokdz['getFileInfo'](nvf67);if (g4pvf6 == null) yokdz['onSaveFile'](nvf67, zad);else {
        if (g4pvf6['readyUrl'] != nvf67) yokdz['remove'](zad, nvf67);
      }
    }, yokdz['exits'] = function (fg64, vin7) {
      var nvifl7 = yokdz['getFileNativePath'](fg64);yokdz['fs']['getFileInfo']({ 'filePath': nvifl7, 'success': function (sex9) {
          vin7 != null && vin7['runWith']([0x0, sex9]);
        }, 'fail': function (b5k_8) {
          vin7 != null && vin7['runWith']([0x1, b5k_8]);
        } });
    }, yokdz['read'] = function (b8r5_, q3m7n, u_w5, otdaze) {
      q3m7n === void 0x0 && (q3m7n = 'ascill'), otdaze === void 0x0 && (otdaze = '');var ur25;otdaze != '' ? ur25 = yokdz['getFileNativePath'](b8r5_) : ur25 = b8r5_, yokdz['fs']['readFile']({ 'filePath': ur25, 'encoding': q3m7n, 'success': function (r5b_8) {
          u_w5 != null && u_w5['runWith']([0x0, r5b_8]);
        }, 'fail': function (yzdkto) {
          if (yzdkto && otdaze != '') yokdz['down'](otdaze, q3m7n, u_w5, otdaze);else u_w5 != null && u_w5['runWith']([0x1]);
        } });
    }, yokdz['readNativeFile'] = function (i7q3$m, qj3$im) {
      yokdz['fs']['readFile']({ 'filePath': i7q3$m, 'encoding': '', 'success': function (_bky8) {
          qj3$im != null && qj3$im['runWith']([0x0]);
        }, 'fail': function (zkyo) {
          qj3$im != null && qj3$im['runWith']([0x1]);
        } });
    }, yokdz['down'] = function (lm7ivn, kd, q7in, r_b58k) {
      kd === void 0x0 && (kd = 'ascill'), r_b58k === void 0x0 && (r_b58k = '');var _2r5 = yokdz['getFileNativePath'](r_b58k),
          vfn7l6 = yokdz['wxdown']({ 'url': lm7ivn, 'filePath': _2r5, 'success': function (r8b_ky) {
          if (r8b_ky['statusCode'] === 0xc8) yokdz['readFile'](r8b_ky['filePath'], kd, q7in, r_b58k);
        }, 'fail': function (ln46vf) {
          q7in != null && q7in['runWith']([0x1, ln46vf]);
        } });vfn7l6['onProgressUpdate'](function (nvm7il) {
        q7in != null && q7in['runWith']([0x2, nvm7il['progress']]);
      });
    }, yokdz['readFile'] = function (oszeta, ru5, r2wu5, w2_) {
      ru5 === void 0x0 && (ru5 = 'ascill'), w2_ === void 0x0 && (w2_ = ''), yokdz['fs']['readFile']({ 'filePath': oszeta, 'encoding': ru5, 'success': function (aose) {
          if (oszeta['indexOf']('http://') != -0x1 || oszeta['indexOf']('https://') != -0x1) yokdz['onFileUpdate'](oszeta, w2_);r2wu5 != null && r2wu5['runWith']([0x0, aose]);
        }, 'fail': function (xzesa9) {
          if (xzesa9) r2wu5 != null && r2wu5['runWith']([0x1, xzesa9]);
        } });
    }, yokdz['downImg'] = function (i$3qj, r_w, tzeody) {
      tzeody === void 0x0 && (tzeody = '');var r285_ = yokdz['wxdown']({ 'url': i$3qj, 'success': function (btdok) {
          btdok['statusCode'] === 0xc8 && yokdz['copyFile'](btdok['tempFilePath'], tzeody, r_w);
        }, 'fail': function (g1h4p) {
          r_w != null && r_w['runWith']([0x1, g1h4p]);
        } });
    }, yokdz['copyFile'] = function (zteo, ozdk, kbr5) {
      var _brk85 = zteo['split']('/'),
          imq3$ = _brk85[_brk85['length'] - 0x1],
          g1p4h6 = ozdk['split']('?')[0x0],
          z9axe = yokdz['getFileInfo'](ozdk),
          s91xp = yokdz['getFileNativePath'](imq3$);yokdz['fs']['copyFile']({ 'srcPath': zteo, 'destPath': s91xp, 'success': function (ae91sx) {
          if (!z9axe) yokdz['onSaveFile'](ozdk, imq3$), kbr5 != null && kbr5['runWith']([0x0]);else {
            if (z9axe['readyUrl'] != ozdk) yokdz['remove'](imq3$, ozdk, kbr5);
          }
        }, 'fail': function (f76vl) {
          kbr5 != null && kbr5['runWith']([0x1, f76vl]);
        } });
    }, yokdz['getFileNativePath'] = function (k5r8b_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k5r8b_;
    }, yokdz['remove'] = function (oedyzt, jq$3im, v4) {
      jq$3im === void 0x0 && (jq$3im = '');var f7lvni = yokdz['getFileInfo'](jq$3im),
          g64p1 = yokdz['getFileNativePath'](f7lvni['md5']);tasxe['loader']['clearRes'](f7lvni['readyUrl']), yokdz['fs']['unlink']({ 'filePath': g64p1, 'success': function (yd8bk) {
          if (jq$3im != '') yokdz['onSaveFile'](jq$3im, oedyzt);v4 != null && v4['runWith']([0x0]);
        }, 'fail': function (ahxs) {} });
    }, yokdz['onSaveFile'] = function (w0u, dyoktz) {
      var _8rk = w0u['split']('?')[0x0];yokdz['filesListObj'][_8rk] = { 'md5': dyoktz, 'readyUrl': w0u }, yokdz['fs']['writeFile']({ 'filePath': yokdz['fileNativeDir'] + '/' + yokdz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yokdz['filesListObj']), 'success': function ($7mi) {
          console['log']('写入测试测试成功：', $7mi);
        }, 'fail': function (zsxe9a) {
          console['log']('写入测试测试失败：', zsxe9a);
        } });
    }, yokdz['existDir'] = function (tkzd, otadze) {
      yokdz['fs']['mkdir']({ 'dirPath': tkzd, 'success': function (p19sxh) {
          otadze != null && otadze['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (f64lgv) {
          if (f64lgv['errMsg']['indexOf']('file already exists') != -0x1) yokdz['readSync'](yokdz['fileListName'], 'utf8', otadze);else otadze != null && otadze['runWith']([0x1, f64lgv]);
        } });
    }, yokdz['readSync'] = function (hp416, ash, w_u02, l7nm3i) {
      ash === void 0x0 && (ash = 'ascill'), l7nm3i === void 0x0 && (l7nm3i = '');var nv7lm = yokdz['getFileNativePath'](hp416),
          okydz;try {
        okydz = yokdz['fs']['readFileSync'](nv7lm), w_u02 != null && w_u02['runWith']([0x0, { 'data': okydz }]);
      } catch (w5r2) {
        w_u02 != null && w_u02['runWith']([0x1]);
      }
    }, yokdz['readCache'] = function () {}, yokdz['writeCache'] = function (gx19) {
      var atse = readyUrl['split']('?')[0x0];yokdz['filesListObj'][atse] = { 'md5': md5Name, 'readyUrl': readyUrl }, yokdz['fs']['writeFile']({ 'filePath': yokdz['fileNativeDir'] + '/' + yokdz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](yokdz['filesListObj']), 'success': function (f6lvn7) {}, 'fail': function (nv6lf) {} });
    }, yokdz['setNativeFileDir'] = function (hxs19) {
      yokdz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hxs19;
    }, yokdz['filesListObj'] = {}, yokdz['fileNativeDir'] = null, yokdz['fileListName'] = 'layaairfiles.txt', yokdz['ziyuFileData'] = {}, dtezoy(yokdz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), yokdz;
  }(ry8kb),
      k8_r5b = function (bkdtoy) {
    function lvn67() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lvn67['__super']['call'](this), this['_sound'] = lvn67['_createSound']();
    }lgf46v(lvn67, 'laya.wx.mini.MiniSound', bkdtoy);var pg91h4 = lvn67['prototype'];return pg91h4['load'] = function (qi$7m3) {
      var axez9s = this;qi$7m3 = x91sea['formatURL'](qi$7m3), this['url'] = qi$7m3;if (lvn67['_audioCache'][qi$7m3]) {
        this['event']('complete');return;
      }function ezots() {
        if (lvn67['_null'] != undefined) axez9s['_sound']['onCanplay'](lvn67['_null']), axez9s['_sound']['onError'](lvn67['_null']);else try {
          axez9s['_sound']['onCanplay'](null), axez9s['_sound']['onError'](null), lvn67['_null'] = null;
        } catch (x9hs1a) {
          console['warn']('[wxmini] _clearSound:' + x9hs1a), axez9s['_sound']['onCanplay'](h9xs), axez9s['_sound']['onError'](h9xs), lvn67['_null'] = h9xs;
        }
      }function ytezdo() {
        ezots(), vi7fn['loaded'] = !![], vi7fn['event']('complete'), lvn67['_audioCache'][vi7fn['url']] = vi7fn;
      }function $im37(ru8_5) {
        console['error']('errCode=' + ru8_5['errCode'] + '  errMsg=' + ru8_5['errMsg']), ezots(), vi7fn['event']('error');
      }function h9xs() {}this['_sound']['onCanplay'](ytezdo), this['_sound']['onError']($im37), this['_sound']['src'] = qi$7m3;var vi7fn = this;
    }, pg91h4['play'] = function (xe91s, axs91) {
      xe91s === void 0x0 && (xe91s = 0x0), axs91 === void 0x0 && (axs91 = 0x0);var iq7m$;if (this['url'] == lgvf46['_tMusic']) {
        if (!lvn67['_musicAudio']) lvn67['_musicAudio'] = lvn67['_createSound']();iq7m$ = lvn67['_musicAudio'];
      } else iq7m$ = lvn67['_createSound']();iq7m$['src'] = this['url'];var r_b25 = new f6l4n(iq7m$);return r_b25['url'] = this['url'], r_b25['loops'] = axs91, r_b25['startTime'] = xe91s, r_b25['play'](), lgvf46['addChannel'](r_b25), r_b25;
    }, pg91h4['dispose'] = function () {
      var otkb = lvn67['_audioCache'][this['url']];otkb && (otkb['src'] = '', delete lvn67['_audioCache'][this['url']]);
    }, kyoz(0x0, pg91h4, 'duration', function () {
      return this['_sound']['duration'];
    }), lvn67['_createSound'] = function () {
      return lvn67['_id']++, uw_0['window']['wx']['createInnerAudioContext']();
    }, lvn67['_musicAudio'] = null, lvn67['_id'] = 0x0, lvn67['_audioCache'] = {}, lvn67['_null'] = undefined, lvn67;
  }(ry8kb),
      f6l4n = function (xasez9) {
    function u_50w(ykob8) {
      this['_audio'] = null, this['_onEnd'] = null, u_50w['__super']['call'](this), this['_audio'] = ykob8, this['_onEnd'] = px9h1g['bind'](this['__onEnd'], this), ykob8['onEnded'](this['_onEnd']);
    }lgf46v(u_50w, 'laya.wx.mini.MiniSoundChannel', xasez9);var obdyt = u_50w['prototype'];return obdyt['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tasxe['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, obdyt['__onNull'] = function () {}, obdyt['play'] = function () {
      this['isStopped'] = ![], lgvf46['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, obdyt['stop'] = function () {
      this['isStopped'] = !![], lgvf46['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (u_50w['_null'] != undefined) this['_audio']['onEnded'](u_50w['_null']);else try {
        this['_audio']['onEnded'](null), u_50w['_null'] = null;
      } catch (sh9xp) {
        console['warn']('[wxmini] stop:' + sh9xp), this['_audio']['onEnded'](px9h1g['bind'](this['__onNull'], this)), u_50w['_null'] = px9h1g['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, obdyt['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, obdyt['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], lgvf46['addChannel'](this), this['_audio']['play']();
    }, kyoz(0x0, obdyt, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), kyoz(0x0, obdyt, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), kyoz(0x0, obdyt, 'volume', function () {
      return 0x1;
    }, function (nilvm7) {}), u_50w['_null'] = undefined, u_50w;
  }(eatsz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var krdyb in Laya) {
    var n6vfl7 = Laya[krdyb];n6vfl7 && n6vfl7['__isclass'] && (exports[krdyb] = n6vfl7);
  }
});