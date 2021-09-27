var m = wx.$g;
!function (ga, _0mp8e) {
  _0mp8e['un'], _0mp8e['uns'];var yiuhs = _0mp8e['static'],
      hsyiu = _0mp8e['class'],
      isj4h = _0mp8e['getset'];_0mp8e['__newvec'];var ml_8 = laya['utils']['Browser'],
      x2z$kw = (laya['events']['Event'], laya['events']['EventDispatcher']),
      z$xwk2 = laya['resource']['HTMLImage'],
      ui4hys = laya['utils']['Handler'],
      sugj = laya['display']['Input'],
      x27w = laya['net']['Loader'];laya['maths']['Matrix'];var _pe0 = laya['renders']['Render'],
      j1sag6 = laya['utils']['RunDriver'];laya['media']['Sound'];var tepm0d = laya['media']['SoundChannel'],
      epdm = laya['media']['SoundManager'],
      $x2w7 = (laya['display']['Stage'], laya['net']['URL']),
      w7rk2 = laya['utils']['Utils'],
      $38l_ = (hsyiu(ugjia, 'laya.wx.mini.MiniAdpter'), ugjia['getJson'] = function (xr7kw) {
    return JSON['parse'](xr7kw);
  }, ugjia['init'] = function (zml_3, h9yu45) {
    void 0x0 === zml_3 && (zml_3 = !0x1), void 0x0 === h9yu45 && (h9yu45 = !0x1), ugjia['_inited'] || (ugjia['window'] = ga)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ugjia['_inited'] = !0x0, ugjia['isZiYu'] = h9yu45, ugjia['isPosMsgYu'] = zml_3, ugjia['EnvConfig'] = {}, ugjia['isZiYu'] || (sh4u['setNativeFileDir']('/layaairGame'), sh4u['existDir'](sh4u['fileNativeDir'], ui4hys['create'](ugjia, ugjia['onMkdirCallBack']))), ugjia['window']['focus'] = function () {}, _0mp8e['getUrlPath'] = function () {}, ugjia['window']['logtime'] = function (h4ujsi) {}, ugjia['window']['alertTimeLog'] = function (tdvcp) {}, ugjia['window']['resetShareInfo'] = function () {}, ugjia['window']['CanvasRenderingContext2D'] = function () {}, ugjia['window']['CanvasRenderingContext2D']['prototype'] = ugjia['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ugjia['window']['document']['body']['appendChild'] = function () {}, ugjia['EnvConfig']['pixelRatioInt'] = 0x0, j1sag6['getPixelRatio'] = ugjia['pixelRatio'], ugjia['_preCreateElement'] = ml_8['createElement'], ml_8['createElement'] = ugjia['createElement'], j1sag6['createShaderCondition'] = ugjia['createShaderCondition'], w7rk2['parseXMLFromString'] = ugjia['parseXMLFromString'], sugj['_createInputElement'] = hyfb95['_createInputElement'], ugjia['EnvConfig']['load'] = x27w['prototype']['load'], x27w['prototype']['load'] = $2w7k['prototype']['load'], ugjia['isZiYu'] && zml_3 && wx['onMessage'](function (y54uih) {
      y54uih['isLoad'] && (sh4u['ziyuFileData'][y54uih['url']] = y54uih['data']);
    }));
  }, ugjia['onMkdirCallBack'] = function (m80p_, otpde) {
    m80p_ || (sh4u['filesListObj'] = JSON['parse'](otpde['data']));
  }, ugjia['pixelRatio'] = function () {
    if (!ugjia['EnvConfig']['pixelRatioInt']) try {
      var d0tecp = wx['getSystemInfoSync']();return ugjia['EnvConfig']['pixelRatioInt'] = d0tecp['pixelRatio'], d0tecp['pixelRatio'];
    } catch (mp0te) {}return ugjia['EnvConfig']['pixelRatioInt'];
  }, ugjia['createElement'] = function (tpeco) {
    var ep8m0;if ('canvas' == tpeco) return 0x1 == ugjia['idx'] ? ugjia['isZiYu'] ? (ep8m0 = sharedCanvas)['style'] = {} : ep8m0 = ga['canvas'] : ep8m0 = ga['wx']['createCanvas'](), ugjia['idx']++, ep8m0;if ('textarea' == tpeco || 'input' == tpeco) return ugjia['onCreateInput'](tpeco);if ('div' != tpeco) return ugjia['_preCreateElement'](tpeco);return tpeco = ugjia['_preCreateElement'](tpeco), (tpeco['contains'] = function (vpot) {
      return null;
    }, tpeco['removeChild'] = function (l3wz_) {}, tpeco);
  }, ugjia['onCreateInput'] = function (eotdp) {
    return eotdp = ugjia['_preCreateElement'](eotdp), (eotdp['focus'] = hyfb95['wxinputFocus'], eotdp['blur'] = hyfb95['wxinputblur'], eotdp['style'] = {}, eotdp['value'] = 0x0, eotdp['parentElement'] = {}, eotdp['placeholder'] = {}, eotdp['type'] = {}, eotdp['setColor'] = function (jhisu) {}, eotdp['setType'] = function (etcp0) {}, eotdp['setFontFace'] = function (d0mept) {}, eotdp['addEventListener'] = function (igaus) {}, eotdp['contains'] = function (rx7fbk) {
      return null;
    }, eotdp['removeChild'] = function (lm38_0) {}, eotdp);
  }, ugjia['createShaderCondition'] = function (ja6gs) {
    var tdvcpo = this;return function () {
      return tdvcpo[ja6gs['replace']('this.', '')];
    };
  }, ugjia['EnvConfig'] = null, ugjia['window'] = null, ugjia['_preCreateElement'] = null, ugjia['_inited'] = !0x1, ugjia['wxRequest'] = null, ugjia['systemInfo'] = null, ugjia['version'] = '0.0.1', ugjia['isZiYu'] = !0x1, ugjia['isPosMsgYu'] = !0x1, ugjia['parseXMLFromString'] = function (ajsi) {
    var l32wz$;ajsi = ajsi['replace'](/>\s+</g, '><');try {
      l32wz$ = new ga['Parser']['DOMParser']()['parseFromString'](ajsi, 'text/xml');
    } catch (pm0e_) {
      throw '需要引入xml解析库文件';
    }return l32wz$;
  }, ugjia['idx'] = 0x1, ugjia);function ugjia() {}hsyiu(dtcvqo, 'laya.wx.mini.MiniImage'), dtcvqo['prototype']['_loadImage'] = function (l3_m08) {
    var wz2$ = !0x1;-0x1 == l3_m08['indexOf']('layaNativeDir/') && (wz2$ = !0x0, l3_m08 = $x2w7['formatURL'](l3_m08)), sh4u['getFileInfo'](l3_m08) ? dtcvqo['onCreateImage'](l3_m08, this, !wz2$) : -0x1 != l3_m08['indexOf']('http://') || -0x1 != l3_m08['indexOf']('https://') ? sh4u['downImg'](l3_m08, new ui4hys(dtcvqo, dtcvqo['onDownImgCallBack'], [l3_m08, this]), l3_m08) : dtcvqo['onCreateImage'](l3_m08, this, !0x0);
  }, dtcvqo['onDownImgCallBack'] = function (tdcoq, y59h4b, _0l3m8) {
    _0l3m8 ? y59h4b['onError'](null) : dtcvqo['onCreateImage'](tdcoq, y59h4b);
  }, dtcvqo['onCreateImage'] = function (_m0e38, ij4su, _l83$z) {
    var wzkx$, yui54;function m8e0p() {
      yui54['onload'] = null, yui54['onerror'] = null, delete ij4su['imgCache'][_m0e38];
    }wzkx$ = (_l83$z = void 0x0 === _l83$z ? !0x1 : _l83$z) ? _m0e38 : (l$83 = sh4u['getFileInfo'](_m0e38)['md5'], sh4u['getFileNativePath'](l$83)), null == ij4su['imgCache'] && (ij4su['imgCache'] = {}), _l83$z = function () {
      m8e0p(), ij4su['onLoaded'](yui54);
    };var l$83 = function () {
      m8e0p(), ij4su['event']('error', 'Load image failed');
    };'nativeimage' == ij4su['_type'] ? ((yui54 = new ml_8['window']['Image']())['crossOrigin'] = '', yui54['onload'] = _l83$z, yui54['onerror'] = l$83, yui54['src'] = wzkx$, ij4su['imgCache'][_m0e38] = yui54) : new z$xwk2['create'](wzkx$, { 'onload': _l83$z, 'onerror': l$83, 'onCreate': function (ep0_8) {
        yui54 = ep0_8, ij4su['imgCache'][_m0e38] = ep0_8;
      } });
  };function dtcvqo() {}var hyfb95 = (hsyiu(g16jsa, 'laya.wx.mini.MiniInput'), g16jsa['_createInputElement'] = function () {
    sugj['_initInput'](sugj['area'] = ml_8['createElement']('textarea')), sugj['_initInput'](sugj['input'] = ml_8['createElement']('input')), sugj['inputContainer'] = ml_8['createElement']('div'), sugj['inputContainer']['style']['position'] = 'absolute', sugj['inputContainer']['style']['zIndex'] = 0x186a0, ml_8['container']['appendChild'](sugj['inputContainer']), sugj['inputContainer']['setPos'] = function (ptedm, _me308) {
      sugj['inputContainer']['style']['left'] = ptedm + 'px', sugj['inputContainer']['style']['top'] = _me308 + 'px';
    }, _0mp8e['stage']['on']('resize', null, g16jsa['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jigu) {
      ga['dispatchEvent'] && ga['dispatchEvent']('resize');
    }), epdm['_soundClass'] = rb5y9f, epdm['_musicClass'] = rb5y9f;
  }, g16jsa['_onStageResize'] = function () {
    _0mp8e['stage']['_canvasTransform']['identity']()['scale'](ml_8['width'] / _pe0['canvas']['width'] / j1sag6['getPixelRatio'](), ml_8['height'] / _pe0['canvas']['height'] / j1sag6['getPixelRatio']());
  }, g16jsa['wxinputFocus'] = function (yfhb9) {
    var h4u95y = sugj['inputElement']['target'];h4u95y && !h4u95y['editable'] || ($38l_['window']['wx']['offKeyboardConfirm'](), $38l_['window']['wx']['offKeyboardInput'](), $38l_['window']['wx']['showKeyboard']({ 'defaultValue': h4u95y['text'], 'maxLength': h4u95y['maxChars'], 'multiple': h4u95y['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (gsa16) {}, 'fail': function (guiajs) {} }), $38l_['window']['wx']['onKeyboardConfirm'](function (u59h4) {
      u59h4 = u59h4 ? u59h4['value'] : '', (h4u95y['text'] = u59h4, h4u95y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $38l_['window']['wx']['onKeyboardInput'](function (rkbfx) {
      rkbfx = rkbfx ? rkbfx['value'] : '', h4u95y['multiline'] || -0x1 == rkbfx['indexOf']('\x0a') ? (h4u95y['text'] = rkbfx, h4u95y['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, g16jsa['inputEnter'] = function () {
    sugj['inputElement']['target']['focus'] = !0x1;
  }, g16jsa['wxinputblur'] = function () {
    g16jsa['hideKeyboard']();
  }, g16jsa['hideKeyboard'] = function () {
    $38l_['window']['wx']['offKeyboardConfirm'](), $38l_['window']['wx']['offKeyboardInput'](), $38l_['window']['wx']['hideKeyboard']({ 'success': function (tdepc0) {
        console['log']('隐藏键盘');
      }, 'fail': function (hi54uy) {
        console['log']('隐藏键盘出错:' + (hi54uy ? hi54uy['errMsg'] : ''));
      } });
  }, g16jsa);function g16jsa() {}var $2w7k = function () {
    function zw2xk() {}hsyiu(zw2xk, 'laya.wx.mini.MiniLoader');var gj6ia = zw2xk['prototype'];return gj6ia['load'] = function (wzk2$, xz2w$l, $w2lz, z3_$l, sy) {
      void 0x0 === $w2lz && ($w2lz = !0x0), void 0x0 === sy && (sy = !0x1);var lw2z3$ = this;0x0 === (lw2z3$['_url'] = wzk2$)['indexOf']('data:image') ? lw2z3$['_type'] = xz2w$l = 'image' : lw2z3$['_type'] = xz2w$l = xz2w$l || lw2z3$['getTypeFromUrl'](wzk2$), lw2z3$['_cache'] = $w2lz, lw2z3$['_data'] = null;var xr7kb = 'ascii';-0x1 != wzk2$['indexOf']('.fnt') ? xr7kb = 'utf8' : 'arraybuffer' == xz2w$l && (xr7kb = '');var f59byr = w7rk2['getFileExtension'](wzk2$);if (-0x1 != zw2xk['_fileTypeArr']['indexOf'](f59byr)) $38l_['EnvConfig']['load']['call'](this, wzk2$, xz2w$l, $w2lz, z3_$l, sy);else {
        if (sh4u['getFileInfo'](wzk2$)) $38l_['EnvConfig']['load']['call'](this, wzk2$, xz2w$l, $w2lz, z3_$l, sy);else {
          if (-0x1 != wzk2$['indexOf']('layaNativeDir/')) {
            if ($38l_['isZiYu']) {
              var sgj16a = sh4u['ziyuFileData'][wzk2$];return void lw2z3$['onLoaded'](sgj16a);
            }return cosnole['log']('read read'), void sh4u['read'](wzk2$, xr7kb, new ui4hys(zw2xk, zw2xk['onReadNativeCallBack'], [xr7kb, wzk2$, xz2w$l, $w2lz, z3_$l, sy, lw2z3$]));
          }sgj16a = '' == $x2w7['rootPath'] ? wzk2$ : wzk2$['split']($x2w7['rootPath'])[0x0], -0x1 != wzk2$['indexOf']('http://') || -0x1 != wzk2$['indexOf']('https://') ? $38l_['EnvConfig']['load']['call'](lw2z3$, wzk2$, xz2w$l, $w2lz, z3_$l, sy) : sh4u['readFile'](sgj16a, xr7kb, new ui4hys(zw2xk, zw2xk['onReadNativeCallBack'], [xr7kb, wzk2$, xz2w$l, $w2lz, z3_$l, sy, lw2z3$]), wzk2$);
        }
      }
    }, gj6ia['resMgrLoad'] = function ($lzw_3, u4hiy5, sh4, edt0cp, aisuj, hbf9y5, r597) {
      void 0x0 === sh4 && (sh4 = 0x0), void 0x0 === edt0cp && (edt0cp = !0x1), void 0x0 === aisuj && (aisuj = !0x1), void 0x0 === hbf9y5 && (hbf9y5 = 0x0), void 0x0 === r597 && (r597 = 0x3), -0x1 != $lzw_3['indexOf']('mpack') && console['log']('=============resMgrLoad url:', $lzw_3), $38l_['EnvConfig']['resMgrLoad']($lzw_3, (y9b4, h95ybf, bf7k9) => {
        zw2xk['prototype']['resMgrLoadCallBack'](y9b4, h95ybf, bf7k9, u4hiy5);
      }, sh4, edt0cp, aisuj, hbf9y5, r597);
    }, gj6ia['resMgrLoadCallBack'] = function (lw$2, f2xr7k, iuhy, bf) {
      console['log']('buff:::', lw$2, iuhy, sh4u['fileNativeDir'] + '///' + sh4u['fileListName']), bf(lw$2, f2xr7k, iuhy);
    }, gj6ia['clearRes'] = function (z_3l$8, x7kf2r) {
      this['clearRes'](z_3l$8, x7kf2r = void 0x0 === x7kf2r ? !0x1 : x7kf2r), x7kf2r = sh4u['getFileInfo'](z_3l$8), !x7kf2r || -0x1 == z_3l$8['indexOf']('http://') && -0x1 == z_3l$8['indexOf']('https://') || (x7kf2r = x7kf2r['md5'], x7kf2r = sh4u['getFileNativePath'](x7kf2r), sh4u['remove'](x7kf2r));
    }, zw2xk['onReadNativeCallBack'] = function (e08m_p, sia6j, tvodp, y4uhi, p_e0m8, $l_8z3, ajg6s1, x2fr7k, _0emp8) {
      void 0x0 === y4uhi && (y4uhi = !0x0), void 0x0 === $l_8z3 && ($l_8z3 = !0x1), (x2fr7k = void 0x0 === x2fr7k ? 0x0 : x2fr7k) ? 0x1 == x2fr7k && $38l_['EnvConfig']['load']['call'](ajg6s1, sia6j, tvodp, y4uhi, p_e0m8, $l_8z3) : (_0emp8 = 'json' == tvodp || 'atlas' == tvodp ? $38l_['getJson'](_0emp8['data']) : 'xml' == tvodp ? w7rk2['parseXMLFromString'](_0emp8['data']) : _0emp8['data'], ajg6s1['onLoaded'](_0emp8), !$38l_['isZiYu'] && $38l_['isPosMsgYu'] && 'arraybuffer' != tvodp && wx['postMessage']({ 'url': sia6j, 'data': _0emp8, 'isLoad': !0x0 }));
    }, yiuhs(zw2xk, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zw2xk;
  }(),
      sh4u = (hsyiu(e_m0p, 'laya.wx.mini.MiniFileMgr', x2z$kw), e_m0p['isLoadFile'] = function (wrk2x) {
    return -0x1 != e_m0p['_fileTypeArr']['indexOf'](wrk2x);
  }, e_m0p['getFileInfo'] = function (vpo) {
    return vpo = vpo['split']('?')[0x0], vpo = e_m0p['filesListObj'][vpo], null == vpo ? null : vpo;
  }, e_m0p['onFileUpdate'] = function (cqvod, ybh) {
    var rwk2x = cqvod['split']('/');cqvod = rwk2x[rwk2x['length'] - 0x1], rwk2x = e_m0p['getFileInfo'](ybh), null == rwk2x ? e_m0p['onSaveFile'](ybh, cqvod) : rwk2x['readyUrl'] != ybh && e_m0p['remove'](cqvod, ybh);
  }, e_m0p['exits'] = function (wl2$x, rfxbk7) {
    wl2$x = e_m0p['getFileNativePath'](wl2$x), e_m0p['fs']['getFileInfo']({ 'filePath': wl2$x, 'success': function (frb597) {
        null != rfxbk7 && rfxbk7['runWith']([0x0, frb597]);
      }, 'fail': function (k7fxrb) {
        null != rfxbk7 && rfxbk7['runWith']([0x1, k7fxrb]);
      } });
  }, e_m0p['read'] = function (r7b, uisa4j, ugsai, jgiusa) {
    void 0x0 === uisa4j && (uisa4j = 'ascill'), r7b = '' != (jgiusa = void 0x0 === jgiusa ? '' : jgiusa) ? e_m0p['getFileNativePath'](r7b) : r7b, e_m0p['fs']['readFile']({ 'filePath': r7b, 'encoding': uisa4j, 'success': function (guaijs) {
        null != ugsai && ugsai['runWith']([0x0, guaijs]);
      }, 'fail': function (ugisa) {
        ugisa && '' != jgiusa ? e_m0p['down'](jgiusa, uisa4j, ugsai, jgiusa) : null != ugsai && ugsai['runWith']([0x1]);
      } });
  }, e_m0p['readNativeFile'] = function (te0dc, f7bxrk) {
    e_m0p['fs']['readFile']({ 'filePath': te0dc, 'encoding': '', 'success': function (vcdtop) {
        null != f7bxrk && f7bxrk['runWith']([0x0]);
      }, 'fail': function (p8_e0) {
        null != f7bxrk && f7bxrk['runWith']([0x1]);
      } });
  }, e_m0p['down'] = function (ga1s6j, _8me0, docpte, sujih) {
    void 0x0 === _8me0 && (_8me0 = 'ascill'), void 0x0 === sujih && (sujih = '');var _$3zw = e_m0p['getFileNativePath'](sujih);e_m0p['wxdown']({ 'url': ga1s6j, 'filePath': _$3zw, 'success': function (tcqdov) {
        0xc8 === tcqdov['statusCode'] && e_m0p['readFile'](tcqdov['filePath'], _8me0, docpte, sujih);
      }, 'fail': function (saigju) {
        null != docpte && docpte['runWith']([0x1, saigju]);
      } })['onProgressUpdate'](function (ctpdov) {
      null != docpte && docpte['runWith']([0x2, ctpdov['progress']]);
    });
  }, e_m0p['readFile'] = function (m80_ep, $lz3w, p0edtm, dvpto) {
    void 0x0 === dvpto && (dvpto = ''), e_m0p['fs']['readFile']({ 'filePath': m80_ep, 'encoding': $lz3w = void 0x0 === $lz3w ? 'ascill' : $lz3w, 'success': function (cpd0t) {
        -0x1 == m80_ep['indexOf']('http://') && -0x1 == m80_ep['indexOf']('https://') || e_m0p['onFileUpdate'](m80_ep, dvpto), null != p0edtm && p0edtm['runWith']([0x0, cpd0t]);
      }, 'fail': function (fr5by9) {
        fr5by9 && null != p0edtm && p0edtm['runWith']([0x1, fr5by9]);
      } });
  }, e_m0p['downImg'] = function (br59yf, qtvcdo, r7f) {
    void 0x0 === r7f && (r7f = ''), e_m0p['wxdown']({ 'url': br59yf, 'success': function (z$xk) {
        0xc8 === z$xk['statusCode'] && e_m0p['copyFile'](z$xk['tempFilePath'], r7f, qtvcdo);
      }, 'fail': function (tvopc) {
        null != qtvcdo && qtvcdo['runWith']([0x1, tvopc]);
      } });
  }, e_m0p['copyFile'] = function (fkrb9, e08, $lz_w) {
    var p80_e = fkrb9['split']('/'),
        wkr2x7 = p80_e[p80_e['length'] - 0x1];e08['split']('?')[0x0];var qdoc = e_m0p['getFileInfo'](e08);p80_e = e_m0p['getFileNativePath'](wkr2x7), e_m0p['fs']['copyFile']({ 'srcPath': fkrb9, 'destPath': p80_e, 'success': function (f5rby9) {
        qdoc ? qdoc['readyUrl'] != e08 && e_m0p['remove'](wkr2x7, e08, $lz_w) : (e_m0p['onSaveFile'](e08, wkr2x7), null != $lz_w && $lz_w['runWith']([0x0]));
      }, 'fail': function (hsiy) {
        null != $lz_w && $lz_w['runWith']([0x1, hsiy]);
      } });
  }, e_m0p['getFileNativePath'] = function (lxwz2) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lxwz2;
  }, e_m0p['remove'] = function (dovcqt, $w7xk2, ugiaj) {
    void 0x0 === $w7xk2 && ($w7xk2 = '');var dtcp0 = e_m0p['getFileInfo']($w7xk2),
        l3_$w = e_m0p['getFileNativePath'](dtcp0['md5']);_0mp8e['loader']['clearRes'](dtcp0['readyUrl']), e_m0p['fs']['unlink']({ 'filePath': l3_$w, 'success': function (cqvd) {
        '' != $w7xk2 && e_m0p['onSaveFile']($w7xk2, dovcqt), null != ugiaj && ugiaj['runWith']([0x0]);
      }, 'fail': function (_lmz) {} });
  }, e_m0p['onSaveFile'] = function (x$2w7k, $z23) {
    var d0tec = x$2w7k['split']('?')[0x0];e_m0p['filesListObj'][d0tec] = { 'md5': $z23, 'readyUrl': x$2w7k }, e_m0p['fs']['writeFile']({ 'filePath': e_m0p['fileNativeDir'] + '/' + e_m0p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e_m0p['filesListObj']), 'success': function (me0p_8) {
        console['log']('写入测试测试成功：', me0p_8);
      }, 'fail': function (s16a) {
        console['log']('写入测试测试失败：', s16a);
      } });
  }, e_m0p['existDir'] = function (d0pe8, rf59) {
    e_m0p['fs']['mkdir']({ 'dirPath': d0pe8, 'success': function (wlx2z) {
        null != rf59 && rf59['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (e0pc) {
        -0x1 != e0pc['errMsg']['indexOf']('file already exists') ? e_m0p['readSync'](e_m0p['fileListName'], 'utf8', rf59) : null != rf59 && rf59['runWith']([0x1, e0pc]);
      } });
  }, e_m0p['readSync'] = function (z_l$, m0d8ep, s4ji, aijgu) {
    void 0x0 === m0d8ep && (m0d8ep = 'ascill'), void 0x0 === aijgu && (aijgu = ''), z_l$ = e_m0p['getFileNativePath'](z_l$);var ted0c;try {
      ted0c = e_m0p['fs']['readFileSync'](z_l$), null != s4ji && s4ji['runWith']([0x0, { 'data': ted0c }]);
    } catch (bx7frk) {
      null != s4ji && s4ji['runWith']([0x1]);
    }
  }, e_m0p['readCache'] = function () {}, e_m0p['writeCache'] = function (voptd) {
    var k72wrx = readyUrl['split']('?')[0x0];e_m0p['filesListObj'][k72wrx] = { 'md5': md5Name, 'readyUrl': readyUrl }, e_m0p['fs']['writeFile']({ 'filePath': e_m0p['fileNativeDir'] + '/' + e_m0p['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e_m0p['filesListObj']), 'success': function (em038_) {}, 'fail': function (r9by5f) {} });
  }, e_m0p['setNativeFileDir'] = function (r7kfxb) {
    e_m0p['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + r7kfxb;
  }, e_m0p['filesListObj'] = {}, e_m0p['fileNativeDir'] = null, e_m0p['fileListName'] = 'layaairfiles.txt', e_m0p['ziyuFileData'] = {}, yiuhs(e_m0p, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), e_m0p);function e_m0p() {
    e_m0p['__super']['call'](this);
  }var rb5y9f = function () {
    function fy5hb9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, fy5hb9['__super']['call'](this), this['_sound'] = fy5hb9['_createSound']();
    }hsyiu(fy5hb9, 'laya.wx.mini.MiniSound', x2z$kw);var $zlw2 = fy5hb9['prototype'];return $zlw2['load'] = function (gsj61) {
      var xbrk7f = this,
          jai4;function uh594() {
        if (null != fy5hb9['_null']) xbrk7f['_sound']['onCanplay'](fy5hb9['_null']), xbrk7f['_sound']['onError'](fy5hb9['_null']);else try {
          xbrk7f['_sound']['onCanplay'](null), xbrk7f['_sound']['onError'](null), fy5hb9['_null'] = null;
        } catch (pemt0) {
          console['warn']('[wxmini] _clearSound:' + pemt0), xbrk7f['_sound']['onCanplay'](tdovq), xbrk7f['_sound']['onError'](tdovq), fy5hb9['_null'] = tdovq;
        }
      }function tdovq() {}gsj61 = $x2w7['formatURL'](gsj61), this['url'] = gsj61, fy5hb9['_audioCache'][gsj61] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        uh594(), jai4['loaded'] = !0x0, jai4['event']('complete'), fy5hb9['_audioCache'][jai4['url']] = jai4;
      }), this['_sound']['onError'](function (b4h59) {
        console['error']('errCode=' + b4h59['errCode'] + '  errMsg=' + b4h59['errMsg']), uh594(), jai4['event']('error');
      }), this['_sound']['src'] = gsj61, jai4 = this);
    }, $zlw2['play'] = function (m38_e, ctvq) {
      void 0x0 === m38_e && (m38_e = 0x0), void 0x0 === ctvq && (ctvq = 0x0), ($lz_83 = this['url'] == epdm['_tMusic'] ? (fy5hb9['_musicAudio'] || (fy5hb9['_musicAudio'] = fy5hb9['_createSound']()), fy5hb9['_musicAudio']) : fy5hb9['_createSound']())['src'] = this['url'];var $lz_83 = new aijugs($lz_83);return $lz_83['url'] = this['url'], $lz_83['loops'] = ctvq, $lz_83['startTime'] = m38_e, $lz_83['play'](), epdm['addChannel']($lz_83), $lz_83;
    }, $zlw2['dispose'] = function () {
      var jsi6 = fy5hb9['_audioCache'][this['url']];jsi6 && (jsi6['src'] = '', delete fy5hb9['_audioCache'][this['url']]);
    }, isj4h(0x0, $zlw2, 'duration', function () {
      return this['_sound']['duration'];
    }), fy5hb9['_createSound'] = function () {
      return fy5hb9['_id']++, $38l_['window']['wx']['createInnerAudioContext']();
    }, fy5hb9['_musicAudio'] = null, fy5hb9['_id'] = 0x0, fy5hb9['_audioCache'] = {}, fy5hb9['_null'] = void 0x0, fy5hb9;
  }(),
      aijugs = function () {
    function m8ep_0(d80pem) {
      this['_audio'] = null, this['_onEnd'] = null, m8ep_0['__super']['call'](this), this['_audio'] = d80pem, this['_onEnd'] = w7rk2['bind'](this['__onEnd'], this), d80pem['onEnded'](this['_onEnd']);
    }hsyiu(m8ep_0, 'laya.wx.mini.MiniSoundChannel', tepm0d);var a4jsu = m8ep_0['prototype'];return a4jsu['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (_0mp8e['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, a4jsu['__onNull'] = function () {}, a4jsu['play'] = function () {
      this['isStopped'] = !0x1, epdm['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, a4jsu['stop'] = function () {
      if (this['isStopped'] = !0x0, epdm['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != m8ep_0['_null']) this['_audio']['onEnded'](m8ep_0['_null']);else try {
          this['_audio']['onEnded'](null), m8ep_0['_null'] = null;
        } catch ($w2) {
          console['warn']('[wxmini] stop:' + $w2), this['_audio']['onEnded'](w7rk2['bind'](this['__onNull'], this)), m8ep_0['_null'] = w7rk2['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, a4jsu['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, a4jsu['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, epdm['addChannel'](this), this['_audio']['play']());
    }, isj4h(0x0, a4jsu, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), isj4h(0x0, a4jsu, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), isj4h(0x0, a4jsu, 'volume', function () {
      return 0x1;
    }, function ($l_8z) {}), m8ep_0['_null'] = void 0x0, m8ep_0;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (dtceop, lzw2x$) {
  'use strict';

  for (var x2kr in Object['defineProperty'](lzw2x$, '__esModule', { 'value': !0x0 }), Laya) {
    var tepcod = Laya[x2kr];tepcod && tepcod['__isclass'] && (lzw2x$[x2kr] = tepcod);
  }
});