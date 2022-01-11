var G = wx.$G;
(function (window, document, yxthi2) {
  var zm_$rs = yxthi2['un'],
      zsmr_ = yxthi2['uns'],
      v78al6 = yxthi2['static'],
      biyxt = yxthi2['class'],
      xbiznt = yxthi2['getset'],
      dw01uo = yxthi2['__newvec'],
      iybxn = laya['utils']['Browser'],
      ufdo45 = laya['events']['Event'],
      tnxizb = laya['events']['EventDispatcher'],
      p1o0w = laya['resource']['HTMLImage'],
      o0u1wp = laya['utils']['Handler'],
      z_snrm = laya['display']['Input'],
      g90w1p = laya['net']['Loader'],
      z$_ms = laya['maths']['Matrix'],
      a6v87 = laya['renders']['Render'],
      zbxm = laya['utils']['RunDriver'],
      x2thy = laya['media']['Sound'],
      ibznt = laya['media']['SoundChannel'],
      f54dok = laya['media']['SoundManager'],
      wd10 = laya['display']['Stage'],
      q86e3 = laya['net']['URL'],
      w1g0p = laya['utils']['Utils'],
      mrz_sn = function () {
    function byih() {}return biyxt(byih, 'laya.wx.mini.MiniAdpter'), byih['getJson'] = function (do10u) {
      return JSON['parse'](do10u);
    }, byih['init'] = function (l38v, favk7) {
      l38v === void 0x0 && (l38v = ![]), favk7 === void 0x0 && (favk7 = ![]);if (byih['_inited']) return;byih['window'] = window;if (byih['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;byih['_inited'] = !![], byih['isZiYu'] = favk7, byih['isPosMsgYu'] = l38v, byih['EnvConfig'] = {}, !byih['isZiYu'] && (byinxt['setNativeFileDir']('/layaairGame'), byinxt['existDir'](byinxt['fileNativeDir'], o0u1wp['create'](byih, byih['onMkdirCallBack']))), byih['window']['focus'] = function () {}, yxthi2['getUrlPath'] = function () {}, byih['window']['logtime'] = function (tmsnbz) {}, byih['window']['alertTimeLog'] = function (ql38) {}, byih['window']['resetShareInfo'] = function () {}, byih['window']['CanvasRenderingContext2D'] = function () {}, byih['window']['CanvasRenderingContext2D']['prototype'] = byih['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], byih['window']['document']['body']['appendChild'] = function () {}, byih['EnvConfig']['pixelRatioInt'] = 0x0, zbxm['getPixelRatio'] = byih['pixelRatio'], byih['_preCreateElement'] = iybxn['createElement'], iybxn['createElement'] = byih['createElement'], zbxm['createShaderCondition'] = byih['createShaderCondition'], w1g0p['parseXMLFromString'] = byih['parseXMLFromString'], z_snrm['_createInputElement'] = th2iyx['_createInputElement'], byih['EnvConfig']['load'] = g90w1p['prototype']['load'], g90w1p['prototype']['load'] = do4u1f['prototype']['load'], byih['isZiYu'] && l38v && wx['onMessage'](function (f4vka5) {
        f4vka5['isLoad'] && (byinxt['ziyuFileData'][f4vka5['url']] = f4vka5['data']);
      });
    }, byih['onMkdirCallBack'] = function (l6va87, c2yxih) {
      if (!l6va87) byinxt['filesListObj'] = JSON['parse'](c2yxih['data']);
    }, byih['pixelRatio'] = function () {
      if (!byih['EnvConfig']['pixelRatioInt']) try {
        var by = wx['getSystemInfoSync']();return byih['EnvConfig']['pixelRatioInt'] = by['pixelRatio'], by = by, by['pixelRatio'];
      } catch (dok4f) {}return byih['EnvConfig']['pixelRatioInt'];
    }, byih['createElement'] = function (fadk5) {
      if (fadk5 == 'canvas') {
        var jcyi;return byih['idx'] == 0x1 ? byih['isZiYu'] ? (jcyi = sharedCanvas, jcyi['style'] = {}) : jcyi = window['canvas'] : jcyi = window['wx']['createCanvas'](), byih['idx']++, jcyi;
      } else {
        if (fadk5 == 'textarea' || fadk5 == 'input') return byih['onCreateInput'](fadk5);else {
          if (fadk5 == 'div') {
            var $smer = byih['_preCreateElement'](fadk5);return $smer['contains'] = function (zsmbt) {
              return null;
            }, $smer['removeChild'] = function (nxzib) {}, $smer;
          } else return byih['_preCreateElement'](fadk5);
        }
      }
    }, byih['onCreateInput'] = function (xc2i) {
      var akl7 = byih['_preCreateElement'](xc2i);return akl7['focus'] = th2iyx['wxinputFocus'], akl7['blur'] = th2iyx['wxinputblur'], akl7['style'] = {}, akl7['value'] = 0x0, akl7['parentElement'] = {}, akl7['placeholder'] = {}, akl7['type'] = {}, akl7['setColor'] = function (wd1u0o) {}, akl7['setType'] = function (l86a) {}, akl7['setFontFace'] = function (rbmzsn) {}, akl7['addEventListener'] = function (q_r) {}, akl7['contains'] = function (iyxhc2) {
        return null;
      }, akl7['removeChild'] = function (od0u1) {}, akl7;
    }, byih['createShaderCondition'] = function (l768v3) {
      var rq_s$e = this,
          u10 = function () {
        var f5ak = l768v3;return rq_s$e[l768v3['replace']('this.', '')];
      };return u10;
    }, byih['EnvConfig'] = null, byih['window'] = null, byih['_preCreateElement'] = null, byih['_inited'] = ![], byih['wxRequest'] = null, byih['systemInfo'] = null, byih['version'] = '0.0.1', byih['isZiYu'] = ![], byih['isPosMsgYu'] = ![], byih['parseXMLFromString'] = function (_srq$e) {
      var rbsn, hixtyb;_srq$e = _srq$e['replace'](/>\s+</g, '><');try {
        rbsn = new window['Parser']['DOMParser']()['parseFromString'](_srq$e, 'text/xml');
      } catch (fvka54) {
        throw '需要引入xml解析库文件';
      }return rbsn;
    }, byih['idx'] = 0x1, byih;
  }(),
      cxy2i = function () {
    function zsnt() {}biyxt(zsnt, 'laya.wx.mini.MiniImage');var $msre_ = zsnt['prototype'];return $msre_['_loadImage'] = function (icyxh) {
      var tx2yi = this,
          e8q3_$ = ![];icyxh['indexOf']('layaNativeDir/') == -0x1 && (e8q3_$ = !![], icyxh = q86e3['formatURL'](icyxh));if (!byinxt['getFileInfo'](icyxh)) {
        if (icyxh['indexOf']('http://') != -0x1 || icyxh['indexOf']('https://') != -0x1) byinxt['downImg'](icyxh, new o0u1wp(zsnt, zsnt['onDownImgCallBack'], [icyxh, tx2yi]), icyxh);else zsnt['onCreateImage'](icyxh, tx2yi, !![]);
      } else zsnt['onCreateImage'](icyxh, tx2yi, !e8q3_$);
    }, zsnt['onDownImgCallBack'] = function (val76, udw41, nrzsm_) {
      if (!nrzsm_) zsnt['onCreateImage'](val76, udw41);else udw41['onError'](null);
    }, zsnt['onCreateImage'] = function (smtnbz, lq6e, sbztnm) {
      sbztnm === void 0x0 && (sbztnm = ![]);var dou4w1;if (!sbztnm) {
        var tzxbm = byinxt['getFileInfo'](smtnbz),
            htyx2i = tzxbm['md5'];dou4w1 = byinxt['getFileNativePath'](htyx2i);
      } else dou4w1 = smtnbz;if (lq6e['imgCache'] == null) lq6e['imgCache'] = {};var hxit2;function alv67k() {
        hxit2['onload'] = null, hxit2['onerror'] = null, delete lq6e['imgCache'][smtnbz];
      };var hyx2ti = function () {
        alv67k(), lq6e['onLoaded'](hxit2);
      },
          od14uw = function () {
        alv67k(), lq6e['event']('error', 'Load image failed');
      };lq6e['_type'] == 'nativeimage' ? (hxit2 = new iybxn['window']['Image'](), hxit2['crossOrigin'] = '', hxit2['onload'] = hyx2ti, hxit2['onerror'] = od14uw, hxit2['src'] = dou4w1, lq6e['imgCache'][smtnbz] = hxit2) : new p1o0w['create'](dou4w1, { 'onload': hyx2ti, 'onerror': od14uw, 'onCreate': function (ou14dw) {
          hxit2 = ou14dw, lq6e['imgCache'][smtnbz] = ou14dw;
        } });
    }, zsnt;
  }(),
      th2iyx = function () {
    function dfk54() {}return biyxt(dfk54, 'laya.wx.mini.MiniInput'), dfk54['_createInputElement'] = function () {
      z_snrm['_initInput'](z_snrm['area'] = iybxn['createElement']('textarea')), z_snrm['_initInput'](z_snrm['input'] = iybxn['createElement']('input')), z_snrm['inputContainer'] = iybxn['createElement']('div'), z_snrm['inputContainer']['style']['position'] = 'absolute', z_snrm['inputContainer']['style']['zIndex'] = 0x186a0, iybxn['container']['appendChild'](z_snrm['inputContainer']), z_snrm['inputContainer']['setPos'] = function (tiybxn, u91p) {
        z_snrm['inputContainer']['style']['left'] = tiybxn + 'px', z_snrm['inputContainer']['style']['top'] = u91p + 'px';
      }, yxthi2['stage']['on']('resize', null, dfk54['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (txyib) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), f54dok['_soundClass'] = bizxtn, f54dok['_musicClass'] = bizxtn;
    }, dfk54['_onStageResize'] = function () {
      var $3e_8 = yxthi2['stage']['_canvasTransform']['identity']();$3e_8['scale'](iybxn['width'] / a6v87['canvas']['width'] / zbxm['getPixelRatio'](), iybxn['height'] / a6v87['canvas']['height'] / zbxm['getPixelRatio']());
    }, dfk54['wxinputFocus'] = function (_$erq3) {
      var u9p0 = z_snrm['inputElement']['target'];if (u9p0 && !u9p0['editable']) return;mrz_sn['window']['wx']['offKeyboardConfirm'](), mrz_sn['window']['wx']['offKeyboardInput'](), mrz_sn['window']['wx']['showKeyboard']({ 'defaultValue': u9p0['text'], 'maxLength': u9p0['maxChars'], 'multiple': u9p0['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_3$8qe) {}, 'fail': function (avk57) {} }), mrz_sn['window']['wx']['onKeyboardConfirm'](function (vkaf) {
        var al6kv7 = vkaf ? vkaf['value'] : '';u9p0['text'] = al6kv7, u9p0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mrz_sn['window']['wx']['onKeyboardInput'](function (ka6l7) {
        var xbtni = ka6l7 ? ka6l7['value'] : '';if (!u9p0['multiline']) {
          if (xbtni['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }u9p0['text'] = xbtni, u9p0['event']('input');
      });
    }, dfk54['inputEnter'] = function () {
      z_snrm['inputElement']['target']['focus'] = ![];
    }, dfk54['wxinputblur'] = function () {
      dfk54['hideKeyboard']();
    }, dfk54['hideKeyboard'] = function () {
      mrz_sn['window']['wx']['offKeyboardConfirm'](), mrz_sn['window']['wx']['offKeyboardInput'](), mrz_sn['window']['wx']['hideKeyboard']({ 'success': function (a78lv) {
          console['log']('隐藏键盘');
        }, 'fail': function (q83_e$) {
          console['log']('隐藏键盘出错:' + (q83_e$ ? q83_e$['errMsg'] : ''));
        } });
    }, dfk54;
  }(),
      do4u1f = function () {
    function i2jych() {}biyxt(i2jych, 'laya.wx.mini.MiniLoader');var q8l736 = i2jych['prototype'];return q8l736['load'] = function (gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj) {
      m$ser === void 0x0 && (m$ser = !![]), yc2ihj === void 0x0 && (yc2ihj = ![]);var smntb = this;smntb['_url'] = gw19p0;if (gw19p0['indexOf']('data:image') === 0x0) smntb['_type'] = nmbzsr = 'image';else smntb['_type'] = nmbzsr || (nmbzsr = smntb['getTypeFromUrl'](gw19p0));smntb['_cache'] = m$ser, smntb['_data'] = null;var _qe3$8 = 'ascii';if (gw19p0['indexOf']('.fnt') != -0x1) _qe3$8 = 'utf8';else nmbzsr == 'arraybuffer' && (_qe3$8 = '');;var a57kfv = w1g0p['getFileExtension'](gw19p0);if (i2jych['_fileTypeArr']['indexOf'](a57kfv) != -0x1) mrz_sn['EnvConfig']['load']['call'](this, gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj);else {
        if (!byinxt['getFileInfo'](gw19p0)) {
          if (gw19p0['indexOf']('layaNativeDir/') != -0x1) {
            if (mrz_sn['isZiYu']) {
              var m_zr = byinxt['ziyuFileData'][gw19p0];smntb['onLoaded'](m_zr);return;
            } else {
              cosnole['log']('read read'), byinxt['read'](gw19p0, _qe3$8, new o0u1wp(i2jych, i2jych['onReadNativeCallBack'], [_qe3$8, gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj, smntb]));return;
            }
          }if (q86e3['rootPath'] == '') var ql36e = gw19p0;else ql36e = gw19p0['split'](q86e3['rootPath'])[0x0];gw19p0['indexOf']('http://') != -0x1 || gw19p0['indexOf']('https://') != -0x1 ? mrz_sn['EnvConfig']['load']['call'](smntb, gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj) : byinxt['readFile'](ql36e, _qe3$8, new o0u1wp(i2jych, i2jych['onReadNativeCallBack'], [_qe3$8, gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj, smntb]), gw19p0);
        } else mrz_sn['EnvConfig']['load']['call'](this, gw19p0, nmbzsr, m$ser, mzr_$, yc2ihj);
      }
    }, q8l736['resMgrLoad'] = function (kfad5, ms, _$8e, inbxt, $_re3q, q83e$_, yt2hi) {
      _$8e === void 0x0 && (_$8e = 0x0), inbxt === void 0x0 && (inbxt = ![]), $_re3q === void 0x0 && ($_re3q = ![]), q83e$_ === void 0x0 && (q83e$_ = 0x0), yt2hi === void 0x0 && (yt2hi = 0x3), kfad5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', kfad5), mrz_sn['EnvConfig']['resMgrLoad'](kfad5, (srz_mn, q_e8$3, e86l) => {
        i2jych['prototype']['resMgrLoadCallBack'](srz_mn, q_e8$3, e86l, ms);
      }, _$8e, inbxt, $_re3q, q83e$_, yt2hi);
    }, q8l736['resMgrLoadCallBack'] = function (ud1wo4, bytnix, bmtz, kav4) {
      console['log']('buff:::', ud1wo4, bmtz, byinxt['fileNativeDir'] + '///' + byinxt['fileListName']), kav4(ud1wo4, bytnix, bmtz);
    }, q8l736['clearRes'] = function (ytih2, kfd54o) {
      kfd54o === void 0x0 && (kfd54o = ![]);var dou01w = this;dou01w['clearRes'](ytih2, kfd54o);var dk4af = byinxt['getFileInfo'](ytih2);if (dk4af && (ytih2['indexOf']('http://') != -0x1 || ytih2['indexOf']('https://') != -0x1)) {
        var $es_rq = dk4af['md5'],
            bxtmn = byinxt['getFileNativePath']($es_rq);byinxt['remove'](bxtmn);
      }
    }, i2jych['onReadNativeCallBack'] = function (v7l6k, xiyc2, u90w, itbxn, $s_rzm, e8l$q3, d4akf5, qe3r_$, yht) {
      itbxn === void 0x0 && (itbxn = !![]), e8l$q3 === void 0x0 && (e8l$q3 = ![]), qe3r_$ === void 0x0 && (qe3r_$ = 0x0);if (!qe3r_$) {
        var znms;if (u90w == 'json' || u90w == 'atlas') znms = mrz_sn['getJson'](yht['data']);else u90w == 'xml' ? znms = w1g0p['parseXMLFromString'](yht['data']) : znms = yht['data'];d4akf5['onLoaded'](znms), !mrz_sn['isZiYu'] && mrz_sn['isPosMsgYu'] && u90w != 'arraybuffer' && wx['postMessage']({ 'url': xiyc2, 'data': znms, 'isLoad': !![] });
      } else qe3r_$ == 0x1 && mrz_sn['EnvConfig']['load']['call'](d4akf5, xiyc2, u90w, itbxn, $s_rzm, e8l$q3);
    }, v78al6(i2jych, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), i2jych;
  }(),
      byinxt = function (mrbzs) {
    function i2cyh() {
      i2cyh['__super']['call'](this);;
    }return biyxt(i2cyh, 'laya.wx.mini.MiniFileMgr', mrbzs), i2cyh['isLoadFile'] = function (p9gw10) {
      return i2cyh['_fileTypeArr']['indexOf'](p9gw10) != -0x1 ? !![] : ![];
    }, i2cyh['getFileInfo'] = function (u01wdo) {
      var txmnzb = u01wdo['split']('?')[0x0],
          szbmnr = i2cyh['filesListObj'][txmnzb];if (szbmnr == null) return null;else return szbmnr;return null;
    }, i2cyh['onFileUpdate'] = function (v78la6, a5dkf) {
      var fa5v4 = v78la6['split']('/'),
          fa5k7 = fa5v4[fa5v4['length'] - 0x1],
          _e8$ = i2cyh['getFileInfo'](a5dkf);if (_e8$ == null) i2cyh['onSaveFile'](a5dkf, fa5k7);else {
        if (_e8$['readyUrl'] != a5dkf) i2cyh['remove'](fa5k7, a5dkf);
      }
    }, i2cyh['exits'] = function (lakv7, kfa7) {
      var m$esr = i2cyh['getFileNativePath'](lakv7);i2cyh['fs']['getFileInfo']({ 'filePath': m$esr, 'success': function (wo1p0) {
          kfa7 != null && kfa7['runWith']([0x0, wo1p0]);
        }, 'fail': function (q638e) {
          kfa7 != null && kfa7['runWith']([0x1, q638e]);
        } });
    }, i2cyh['read'] = function (k45vfa, hiytbx, tnmszb, bxtiyn) {
      hiytbx === void 0x0 && (hiytbx = 'ascill'), bxtiyn === void 0x0 && (bxtiyn = '');var f57v;bxtiyn != '' ? f57v = i2cyh['getFileNativePath'](k45vfa) : f57v = k45vfa, i2cyh['fs']['readFile']({ 'filePath': f57v, 'encoding': hiytbx, 'success': function (n_smzr) {
          tnmszb != null && tnmszb['runWith']([0x0, n_smzr]);
        }, 'fail': function (yitxn) {
          if (yitxn && bxtiyn != '') i2cyh['down'](bxtiyn, hiytbx, tnmszb, bxtiyn);else tnmszb != null && tnmszb['runWith']([0x1]);
        } });
    }, i2cyh['readNativeFile'] = function (lqe38, btnzs) {
      i2cyh['fs']['readFile']({ 'filePath': lqe38, 'encoding': '', 'success': function (y2hcij) {
          btnzs != null && btnzs['runWith']([0x0]);
        }, 'fail': function (hiyt2x) {
          btnzs != null && btnzs['runWith']([0x1]);
        } });
    }, i2cyh['down'] = function (bmzns, htyixb, fv57a, bxhyt) {
      htyixb === void 0x0 && (htyixb = 'ascill'), bxhyt === void 0x0 && (bxhyt = '');var q8_3$e = i2cyh['getFileNativePath'](bxhyt),
          hyci2j = i2cyh['wxdown']({ 'url': bmzns, 'filePath': q8_3$e, 'success': function (e3q_) {
          if (e3q_['statusCode'] === 0xc8) i2cyh['readFile'](e3q_['filePath'], htyixb, fv57a, bxhyt);
        }, 'fail': function (nybxt) {
          fv57a != null && fv57a['runWith']([0x1, nybxt]);
        } });hyci2j['onProgressUpdate'](function (bxiytn) {
        fv57a != null && fv57a['runWith']([0x2, bxiytn['progress']]);
      });
    }, i2cyh['readFile'] = function (r$eq_s, l6q738, puw01o, a5kfv) {
      l6q738 === void 0x0 && (l6q738 = 'ascill'), a5kfv === void 0x0 && (a5kfv = ''), i2cyh['fs']['readFile']({ 'filePath': r$eq_s, 'encoding': l6q738, 'success': function (er_sq$) {
          if (r$eq_s['indexOf']('http://') != -0x1 || r$eq_s['indexOf']('https://') != -0x1) i2cyh['onFileUpdate'](r$eq_s, a5kfv);puw01o != null && puw01o['runWith']([0x0, er_sq$]);
        }, 'fail': function (sr_zm) {
          if (sr_zm) puw01o != null && puw01o['runWith']([0x1, sr_zm]);
        } });
    }, i2cyh['downImg'] = function (u01wp, zsnm_, a4kfv5) {
      a4kfv5 === void 0x0 && (a4kfv5 = '');var q3le8$ = i2cyh['wxdown']({ 'url': u01wp, 'success': function (h2tyix) {
          h2tyix['statusCode'] === 0xc8 && i2cyh['copyFile'](h2tyix['tempFilePath'], a4kfv5, zsnm_);
        }, 'fail': function (udw10) {
          zsnm_ != null && zsnm_['runWith']([0x1, udw10]);
        } });
    }, i2cyh['copyFile'] = function (_$r3eq, $q3le, s_rnzm) {
      var n_mzrs = _$r3eq['split']('/'),
          vl7ka6 = n_mzrs[n_mzrs['length'] - 0x1],
          nrzmb = $q3le['split']('?')[0x0],
          xynb = i2cyh['getFileInfo']($q3le),
          ih2xyt = i2cyh['getFileNativePath'](vl7ka6);i2cyh['fs']['copyFile']({ 'srcPath': _$r3eq, 'destPath': ih2xyt, 'success': function (k7v5af) {
          if (!xynb) i2cyh['onSaveFile']($q3le, vl7ka6), s_rnzm != null && s_rnzm['runWith']([0x0]);else {
            if (xynb['readyUrl'] != $q3le) i2cyh['remove'](vl7ka6, $q3le, s_rnzm);
          }
        }, 'fail': function (od0w1u) {
          s_rnzm != null && s_rnzm['runWith']([0x1, od0w1u]);
        } });
    }, i2cyh['getFileNativePath'] = function (rnsz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rnsz;
    }, i2cyh['remove'] = function (d1f4ou, srm$_e, eq3$r_) {
      srm$_e === void 0x0 && (srm$_e = '');var byinx = i2cyh['getFileInfo'](srm$_e),
          yi2xht = i2cyh['getFileNativePath'](byinx['md5']);yxthi2['loader']['clearRes'](byinx['readyUrl']), i2cyh['fs']['unlink']({ 'filePath': yi2xht, 'success': function (xybti) {
          if (srm$_e != '') i2cyh['onSaveFile'](srm$_e, d1f4ou);eq3$r_ != null && eq3$r_['runWith']([0x0]);
        }, 'fail': function (bzrns) {} });
    }, i2cyh['onSaveFile'] = function (tizbx, w0ud1o) {
      var q3786l = tizbx['split']('?')[0x0];i2cyh['filesListObj'][q3786l] = { 'md5': w0ud1o, 'readyUrl': tizbx }, i2cyh['fs']['writeFile']({ 'filePath': i2cyh['fileNativeDir'] + '/' + i2cyh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i2cyh['filesListObj']), 'success': function (w10u9) {
          console['log']('写入测试测试成功：', w10u9);
        }, 'fail': function ($q3el8) {
          console['log']('写入测试测试失败：', $q3el8);
        } });
    }, i2cyh['existDir'] = function (zn, _q$3) {
      i2cyh['fs']['mkdir']({ 'dirPath': zn, 'success': function (wo10p) {
          _q$3 != null && _q$3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (w9) {
          if (w9['errMsg']['indexOf']('file already exists') != -0x1) i2cyh['readSync'](i2cyh['fileListName'], 'utf8', _q$3);else _q$3 != null && _q$3['runWith']([0x1, w9]);
        } });
    }, i2cyh['readSync'] = function (kd4af5, izntbx, hiyc2j, k7v6al) {
      izntbx === void 0x0 && (izntbx = 'ascill'), k7v6al === void 0x0 && (k7v6al = '');var s_erm = i2cyh['getFileNativePath'](kd4af5),
          iyhxt2;try {
        iyhxt2 = i2cyh['fs']['readFileSync'](s_erm), hiyc2j != null && hiyc2j['runWith']([0x0, { 'data': iyhxt2 }]);
      } catch (fva45) {
        hiyc2j != null && hiyc2j['runWith']([0x1]);
      }
    }, i2cyh['readCache'] = function () {}, i2cyh['writeCache'] = function (smzr$_) {
      var d0u = readyUrl['split']('?')[0x0];i2cyh['filesListObj'][d0u] = { 'md5': md5Name, 'readyUrl': readyUrl }, i2cyh['fs']['writeFile']({ 'filePath': i2cyh['fileNativeDir'] + '/' + i2cyh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i2cyh['filesListObj']), 'success': function (sr_$) {}, 'fail': function (y2xt) {} });
    }, i2cyh['setNativeFileDir'] = function (tbnxy) {
      i2cyh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tbnxy;
    }, i2cyh['filesListObj'] = {}, i2cyh['fileNativeDir'] = null, i2cyh['fileListName'] = 'layaairfiles.txt', i2cyh['ziyuFileData'] = {}, v78al6(i2cyh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), i2cyh;
  }(tnxizb),
      bizxtn = function (tnbzsm) {
    function el3$q() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], el3$q['__super']['call'](this), this['_sound'] = el3$q['_createSound']();
    }biyxt(el3$q, 'laya.wx.mini.MiniSound', tnbzsm);var mtzxbn = el3$q['prototype'];return mtzxbn['load'] = function (q$l) {
      var odw0u = this;q$l = q86e3['formatURL'](q$l), this['url'] = q$l;if (el3$q['_audioCache'][q$l]) {
        this['event']('complete');return;
      }function df54ok() {
        if (el3$q['_null'] != undefined) odw0u['_sound']['onCanplay'](el3$q['_null']), odw0u['_sound']['onError'](el3$q['_null']);else try {
          odw0u['_sound']['onCanplay'](null), odw0u['_sound']['onError'](null), el3$q['_null'] = null;
        } catch (i2cyxh) {
          console['warn']('[wxmini] _clearSound:' + i2cyxh), odw0u['_sound']['onCanplay'](h2ij), odw0u['_sound']['onError'](h2ij), el3$q['_null'] = h2ij;
        }
      }function itynx() {
        df54ok(), thx2yi['loaded'] = !![], thx2yi['event']('complete'), el3$q['_audioCache'][thx2yi['url']] = thx2yi;
      }function tszmnb(av54f) {
        console['error']('errCode=' + av54f['errCode'] + '  errMsg=' + av54f['errMsg']), df54ok(), thx2yi['event']('error');
      }function h2ij() {}this['_sound']['onCanplay'](itynx), this['_sound']['onError'](tszmnb), this['_sound']['src'] = q$l;var thx2yi = this;
    }, mtzxbn['play'] = function (tnmzbx, nzrbsm) {
      tnmzbx === void 0x0 && (tnmzbx = 0x0), nzrbsm === void 0x0 && (nzrbsm = 0x0);var a68lv;if (this['url'] == f54dok['_tMusic']) {
        if (!el3$q['_musicAudio']) el3$q['_musicAudio'] = el3$q['_createSound']();a68lv = el3$q['_musicAudio'];
      } else a68lv = el3$q['_createSound']();a68lv['src'] = this['url'];var bxtiny = new e$3q8(a68lv);return bxtiny['url'] = this['url'], bxtiny['loops'] = nzrbsm, bxtiny['startTime'] = tnmzbx, bxtiny['play'](), f54dok['addChannel'](bxtiny), bxtiny;
    }, mtzxbn['dispose'] = function () {
      var d4kaf = el3$q['_audioCache'][this['url']];d4kaf && (d4kaf['src'] = '', delete el3$q['_audioCache'][this['url']]);
    }, xbiznt(0x0, mtzxbn, 'duration', function () {
      return this['_sound']['duration'];
    }), el3$q['_createSound'] = function () {
      return el3$q['_id']++, mrz_sn['window']['wx']['createInnerAudioContext']();
    }, el3$q['_musicAudio'] = null, el3$q['_id'] = 0x0, el3$q['_audioCache'] = {}, el3$q['_null'] = undefined, el3$q;
  }(tnxizb),
      e$3q8 = function (_mr) {
    function fa4d5(el8q63) {
      this['_audio'] = null, this['_onEnd'] = null, fa4d5['__super']['call'](this), this['_audio'] = el8q63, this['_onEnd'] = w1g0p['bind'](this['__onEnd'], this), el8q63['onEnded'](this['_onEnd']);
    }biyxt(fa4d5, 'laya.wx.mini.MiniSoundChannel', _mr);var srnzb = fa4d5['prototype'];return srnzb['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yxthi2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, srnzb['__onNull'] = function () {}, srnzb['play'] = function () {
      this['isStopped'] = ![], f54dok['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, srnzb['stop'] = function () {
      this['isStopped'] = !![], f54dok['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fa4d5['_null'] != undefined) this['_audio']['onEnded'](fa4d5['_null']);else try {
        this['_audio']['onEnded'](null), fa4d5['_null'] = null;
      } catch (ci2hy) {
        console['warn']('[wxmini] stop:' + ci2hy), this['_audio']['onEnded'](w1g0p['bind'](this['__onNull'], this)), fa4d5['_null'] = w1g0p['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, srnzb['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, srnzb['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], f54dok['addChannel'](this), this['_audio']['play']();
    }, xbiznt(0x0, srnzb, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xbiznt(0x0, srnzb, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xbiznt(0x0, srnzb, 'volume', function () {
      return 0x1;
    }, function (up90w) {}), fa4d5['_null'] = undefined, fa4d5;
  }(ibznt);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var l783q6 in Laya) {
    var rz_sn = Laya[l783q6];rz_sn && rz_sn['__isclass'] && (exports[l783q6] = rz_sn);
  }
});