var m = wx.$g;
!function (ml4aco, hbe1p3) {
  hbe1p3['un'], hbe1p3['uns'];var y2e = hbe1p3['static'],
      wjqxz = hbe1p3['class'],
      lovmc = hbe1p3['getset'];hbe1p3['__newvec'];var h6p19 = laya['utils']['Browser'],
      $jxwq = (laya['events']['Event'], laya['events']['EventDispatcher']),
      girxfk = laya['resource']['HTMLImage'],
      z2swq = laya['utils']['Handler'],
      mo4lt = laya['display']['Input'],
      ixgrfk = laya['net']['Loader'];laya['maths']['Matrix'];var szw5qj = laya['renders']['Render'],
      l69t4 = laya['utils']['RunDriver'];laya['media']['Sound'];var s52zwq = laya['media']['SoundChannel'],
      bhp931 = laya['media']['SoundManager'],
      vocl = (laya['display']['Stage'], laya['net']['URL']),
      ml4ocv = laya['utils']['Utils'],
      $kfg = (wjqxz(t49a6p, 'laya.wx.mini.MiniAdpter'), t49a6p['getJson'] = function (y082s5) {
    return JSON['parse'](y082s5);
  }, t49a6p['init'] = function (ifkxg$, frgu) {
    void 0x0 === ifkxg$ && (ifkxg$ = !0x1), void 0x0 === frgu && (frgu = !0x1), t49a6p['_inited'] || (t49a6p['window'] = ml4aco)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (t49a6p['_inited'] = !0x0, t49a6p['isZiYu'] = frgu, t49a6p['isPosMsgYu'] = ifkxg$, t49a6p['EnvConfig'] = {}, t49a6p['isZiYu'] || (s2w58z['setNativeFileDir']('/layaairGame'), s2w58z['existDir'](s2w58z['fileNativeDir'], z2swq['create'](t49a6p, t49a6p['onMkdirCallBack']))), t49a6p['window']['focus'] = function () {}, hbe1p3['getUrlPath'] = function () {}, t49a6p['window']['logtime'] = function (l4ta69) {}, t49a6p['window']['alertTimeLog'] = function (olm4ca) {}, t49a6p['window']['resetShareInfo'] = function () {}, t49a6p['window']['CanvasRenderingContext2D'] = function () {}, t49a6p['window']['CanvasRenderingContext2D']['prototype'] = t49a6p['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t49a6p['window']['document']['body']['appendChild'] = function () {}, t49a6p['EnvConfig']['pixelRatioInt'] = 0x0, l69t4['getPixelRatio'] = t49a6p['pixelRatio'], t49a6p['_preCreateElement'] = h6p19['createElement'], h6p19['createElement'] = t49a6p['createElement'], l69t4['createShaderCondition'] = t49a6p['createShaderCondition'], ml4ocv['parseXMLFromString'] = t49a6p['parseXMLFromString'], mo4lt['_createInputElement'] = omtl['_createInputElement'], t49a6p['EnvConfig']['load'] = ixgrfk['prototype']['load'], ixgrfk['prototype']['load'] = olac4m['prototype']['load'], t49a6p['isZiYu'] && ifkxg$ && wx['onMessage'](function (ye82d0) {
      ye82d0['isLoad'] && (s2w58z['ziyuFileData'][ye82d0['url']] = ye82d0['data']);
    }));
  }, t49a6p['onMkdirCallBack'] = function (mc4ao, ltmo) {
    mc4ao || (s2w58z['filesListObj'] = JSON['parse'](ltmo['data']));
  }, t49a6p['pixelRatio'] = function () {
    if (!t49a6p['EnvConfig']['pixelRatioInt']) try {
      var h3epb = wx['getSystemInfoSync']();return t49a6p['EnvConfig']['pixelRatioInt'] = h3epb['pixelRatio'], h3epb['pixelRatio'];
    } catch (aom4c) {}return t49a6p['EnvConfig']['pixelRatioInt'];
  }, t49a6p['createElement'] = function (xf$kji) {
    var wj5s;if ('canvas' == xf$kji) return 0x1 == t49a6p['idx'] ? t49a6p['isZiYu'] ? (wj5s = sharedCanvas)['style'] = {} : wj5s = ml4aco['canvas'] : wj5s = ml4aco['wx']['createCanvas'](), t49a6p['idx']++, wj5s;if ('textarea' == xf$kji || 'input' == xf$kji) return t49a6p['onCreateInput'](xf$kji);if ('div' != xf$kji) return t49a6p['_preCreateElement'](xf$kji);return xf$kji = t49a6p['_preCreateElement'](xf$kji), (xf$kji['contains'] = function ($kjfx) {
      return null;
    }, xf$kji['removeChild'] = function (g$xifk) {}, xf$kji);
  }, t49a6p['onCreateInput'] = function (jix) {
    return jix = t49a6p['_preCreateElement'](jix), (jix['focus'] = omtl['wxinputFocus'], jix['blur'] = omtl['wxinputblur'], jix['style'] = {}, jix['value'] = 0x0, jix['parentElement'] = {}, jix['placeholder'] = {}, jix['type'] = {}, jix['setColor'] = function (e83yd0) {}, jix['setType'] = function (gk$if) {}, jix['setFontFace'] = function (s5zy82) {}, jix['addEventListener'] = function (kf7gru) {}, jix['contains'] = function (s$zwqj) {
      return null;
    }, jix['removeChild'] = function (d85y20) {}, jix);
  }, t49a6p['createShaderCondition'] = function (q$sz) {
    var apt64 = this;return function () {
      return apt64[q$sz['replace']('this.', '')];
    };
  }, t49a6p['EnvConfig'] = null, t49a6p['window'] = null, t49a6p['_preCreateElement'] = null, t49a6p['_inited'] = !0x1, t49a6p['wxRequest'] = null, t49a6p['systemInfo'] = null, t49a6p['version'] = '0.0.1', t49a6p['isZiYu'] = !0x1, t49a6p['isPosMsgYu'] = !0x1, t49a6p['parseXMLFromString'] = function (y8d25) {
    var kgfir;y8d25 = y8d25['replace'](/>\s+</g, '><');try {
      kgfir = new ml4aco['Parser']['DOMParser']()['parseFromString'](y8d25, 'text/xml');
    } catch (amtol) {
      throw '需要引入xml解析库文件';
    }return kgfir;
  }, t49a6p['idx'] = 0x1, t49a6p);function t49a6p() {}wjqxz($sqjw, 'laya.wx.mini.MiniImage'), $sqjw['prototype']['_loadImage'] = function (zsw5) {
    var qjz5 = !0x1;-0x1 == zsw5['indexOf']('layaNativeDir/') && (qjz5 = !0x0, zsw5 = vocl['formatURL'](zsw5)), s2w58z['getFileInfo'](zsw5) ? $sqjw['onCreateImage'](zsw5, this, !qjz5) : -0x1 != zsw5['indexOf']('http://') || -0x1 != zsw5['indexOf']('https://') ? s2w58z['downImg'](zsw5, new z2swq($sqjw, $sqjw['onDownImgCallBack'], [zsw5, this]), zsw5) : $sqjw['onCreateImage'](zsw5, this, !0x0);
  }, $sqjw['onDownImgCallBack'] = function (i$gfk, ifk$j, p9h3b) {
    p9h3b ? ifk$j['onError'](null) : $sqjw['onCreateImage'](i$gfk, ifk$j);
  }, $sqjw['onCreateImage'] = function (j5qwzs, jsq5z, t694pa) {
    var d301eh, xwjz$q;function hp69bt() {
      xwjz$q['onload'] = null, xwjz$q['onerror'] = null, delete jsq5z['imgCache'][j5qwzs];
    }d301eh = (t694pa = void 0x0 === t694pa ? !0x1 : t694pa) ? j5qwzs : (eh3p1b = s2w58z['getFileInfo'](j5qwzs)['md5'], s2w58z['getFileNativePath'](eh3p1b)), null == jsq5z['imgCache'] && (jsq5z['imgCache'] = {}), t694pa = function () {
      hp69bt(), jsq5z['onLoaded'](xwjz$q);
    };var eh3p1b = function () {
      hp69bt(), jsq5z['event']('error', 'Load image failed');
    };'nativeimage' == jsq5z['_type'] ? ((xwjz$q = new h6p19['window']['Image']())['crossOrigin'] = '', xwjz$q['onload'] = t694pa, xwjz$q['onerror'] = eh3p1b, xwjz$q['src'] = d301eh, jsq5z['imgCache'][j5qwzs] = xwjz$q) : new girxfk['create'](d301eh, { 'onload': t694pa, 'onerror': eh3p1b, 'onCreate': function (ugk7f) {
        xwjz$q = ugk7f, jsq5z['imgCache'][j5qwzs] = ugk7f;
      } });
  };function $sqjw() {}var omtl = (wjqxz(deb3h1, 'laya.wx.mini.MiniInput'), deb3h1['_createInputElement'] = function () {
    mo4lt['_initInput'](mo4lt['area'] = h6p19['createElement']('textarea')), mo4lt['_initInput'](mo4lt['input'] = h6p19['createElement']('input')), mo4lt['inputContainer'] = h6p19['createElement']('div'), mo4lt['inputContainer']['style']['position'] = 'absolute', mo4lt['inputContainer']['style']['zIndex'] = 0x186a0, h6p19['container']['appendChild'](mo4lt['inputContainer']), mo4lt['inputContainer']['setPos'] = function (jx$zw, gfkrx) {
      mo4lt['inputContainer']['style']['left'] = jx$zw + 'px', mo4lt['inputContainer']['style']['top'] = gfkrx + 'px';
    }, hbe1p3['stage']['on']('resize', null, deb3h1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($xzwj) {
      ml4aco['dispatchEvent'] && ml4aco['dispatchEvent']('resize');
    }), bhp931['_soundClass'] = zs25wq, bhp931['_musicClass'] = zs25wq;
  }, deb3h1['_onStageResize'] = function () {
    hbe1p3['stage']['_canvasTransform']['identity']()['scale'](h6p19['width'] / szw5qj['canvas']['width'] / l69t4['getPixelRatio'](), h6p19['height'] / szw5qj['canvas']['height'] / l69t4['getPixelRatio']());
  }, deb3h1['wxinputFocus'] = function (fgixk$) {
    var e01h = mo4lt['inputElement']['target'];e01h && !e01h['editable'] || ($kfg['window']['wx']['offKeyboardConfirm'](), $kfg['window']['wx']['offKeyboardInput'](), $kfg['window']['wx']['showKeyboard']({ 'defaultValue': e01h['text'], 'maxLength': e01h['maxChars'], 'multiple': e01h['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (jxqw$) {}, 'fail': function (b19hp3) {} }), $kfg['window']['wx']['onKeyboardConfirm'](function ($fgikx) {
      $fgikx = $fgikx ? $fgikx['value'] : '', (e01h['text'] = $fgikx, e01h['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $kfg['window']['wx']['onKeyboardInput'](function (peh1b) {
      peh1b = peh1b ? peh1b['value'] : '', e01h['multiline'] || -0x1 == peh1b['indexOf']('\x0a') ? (e01h['text'] = peh1b, e01h['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, deb3h1['inputEnter'] = function () {
    mo4lt['inputElement']['target']['focus'] = !0x1;
  }, deb3h1['wxinputblur'] = function () {
    deb3h1['hideKeyboard']();
  }, deb3h1['hideKeyboard'] = function () {
    $kfg['window']['wx']['offKeyboardConfirm'](), $kfg['window']['wx']['offKeyboardInput'](), $kfg['window']['wx']['hideKeyboard']({ 'success': function (pa9b6t) {
        console['log']('隐藏键盘');
      }, 'fail': function (tp964a) {
        console['log']('隐藏键盘出错:' + (tp964a ? tp964a['errMsg'] : ''));
      } });
  }, deb3h1);function deb3h1() {}var olac4m = function () {
    function ifjqx() {}wjqxz(ifjqx, 'laya.wx.mini.MiniLoader');var b619 = ifjqx['prototype'];return b619['load'] = function (s8z5w, zjq5s, coalm, vlcm4o, a94t) {
      void 0x0 === coalm && (coalm = !0x0), void 0x0 === a94t && (a94t = !0x1);var l4mv = this;0x0 === (l4mv['_url'] = s8z5w)['indexOf']('data:image') ? l4mv['_type'] = zjq5s = 'image' : l4mv['_type'] = zjq5s = zjq5s || l4mv['getTypeFromUrl'](s8z5w), l4mv['_cache'] = coalm, l4mv['_data'] = null;var th69pb = 'ascii';-0x1 != s8z5w['indexOf']('.fnt') ? th69pb = 'utf8' : 'arraybuffer' == zjq5s && (th69pb = '');var ikgxf$ = ml4ocv['getFileExtension'](s8z5w);if (-0x1 != ifjqx['_fileTypeArr']['indexOf'](ikgxf$)) $kfg['EnvConfig']['load']['call'](this, s8z5w, zjq5s, coalm, vlcm4o, a94t);else {
        if (s2w58z['getFileInfo'](s8z5w)) $kfg['EnvConfig']['load']['call'](this, s8z5w, zjq5s, coalm, vlcm4o, a94t);else {
          if (-0x1 != s8z5w['indexOf']('layaNativeDir/')) {
            if ($kfg['isZiYu']) {
              var bp196 = s2w58z['ziyuFileData'][s8z5w];return void l4mv['onLoaded'](bp196);
            }return cosnole['log']('read read'), void s2w58z['read'](s8z5w, th69pb, new z2swq(ifjqx, ifjqx['onReadNativeCallBack'], [th69pb, s8z5w, zjq5s, coalm, vlcm4o, a94t, l4mv]));
          }bp196 = '' == vocl['rootPath'] ? s8z5w : s8z5w['split'](vocl['rootPath'])[0x0], -0x1 != s8z5w['indexOf']('http://') || -0x1 != s8z5w['indexOf']('https://') ? $kfg['EnvConfig']['load']['call'](l4mv, s8z5w, zjq5s, coalm, vlcm4o, a94t) : s2w58z['readFile'](bp196, th69pb, new z2swq(ifjqx, ifjqx['onReadNativeCallBack'], [th69pb, s8z5w, zjq5s, coalm, vlcm4o, a94t, l4mv]), s8z5w);
        }
      }
    }, b619['resMgrLoad'] = function (hp39b1, p913, fugki, rgu_7k, lt4ao, ukrgf7, zjwq$) {
      void 0x0 === fugki && (fugki = 0x0), void 0x0 === rgu_7k && (rgu_7k = !0x1), void 0x0 === lt4ao && (lt4ao = !0x1), void 0x0 === ukrgf7 && (ukrgf7 = 0x0), void 0x0 === zjwq$ && (zjwq$ = 0x3), -0x1 != hp39b1['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hp39b1), $kfg['EnvConfig']['resMgrLoad'](hp39b1, (js$, y08de3, igfk) => {
        ifjqx['prototype']['resMgrLoadCallBack'](js$, y08de3, igfk, p913);
      }, fugki, rgu_7k, lt4ao, ukrgf7, zjwq$);
    }, b619['resMgrLoadCallBack'] = function (d0ye1, m6l4a, h91pb3, mac4) {
      console['log']('buff:::', d0ye1, h91pb3, s2w58z['fileNativeDir'] + '///' + s2w58z['fileListName']), mac4(d0ye1, m6l4a, h91pb3);
    }, b619['clearRes'] = function (caml4, k7ru_) {
      this['clearRes'](caml4, k7ru_ = void 0x0 === k7ru_ ? !0x1 : k7ru_), k7ru_ = s2w58z['getFileInfo'](caml4), !k7ru_ || -0x1 == caml4['indexOf']('http://') && -0x1 == caml4['indexOf']('https://') || (k7ru_ = k7ru_['md5'], k7ru_ = s2w58z['getFileNativePath'](k7ru_), s2w58z['remove'](k7ru_));
    }, ifjqx['onReadNativeCallBack'] = function (kgixfr, e30y8d, p9t4a, p6hb1, h1d0e3, wzq$s, dh30e1, krig, alm46) {
      void 0x0 === p6hb1 && (p6hb1 = !0x0), void 0x0 === wzq$s && (wzq$s = !0x1), (krig = void 0x0 === krig ? 0x0 : krig) ? 0x1 == krig && $kfg['EnvConfig']['load']['call'](dh30e1, e30y8d, p9t4a, p6hb1, h1d0e3, wzq$s) : (alm46 = 'json' == p9t4a || 'atlas' == p9t4a ? $kfg['getJson'](alm46['data']) : 'xml' == p9t4a ? ml4ocv['parseXMLFromString'](alm46['data']) : alm46['data'], dh30e1['onLoaded'](alm46), !$kfg['isZiYu'] && $kfg['isPosMsgYu'] && 'arraybuffer' != p9t4a && wx['postMessage']({ 'url': e30y8d, 'data': alm46, 'isLoad': !0x0 }));
    }, y2e(ifjqx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ifjqx;
  }(),
      s2w58z = (wjqxz(frkg7, 'laya.wx.mini.MiniFileMgr', $jxwq), frkg7['isLoadFile'] = function (phe) {
    return -0x1 != frkg7['_fileTypeArr']['indexOf'](phe);
  }, frkg7['getFileInfo'] = function (k7rugf) {
    return k7rugf = k7rugf['split']('?')[0x0], k7rugf = frkg7['filesListObj'][k7rugf], null == k7rugf ? null : k7rugf;
  }, frkg7['onFileUpdate'] = function (ap469, rigukf) {
    var o4ltam = ap469['split']('/');ap469 = o4ltam[o4ltam['length'] - 0x1], o4ltam = frkg7['getFileInfo'](rigukf), null == o4ltam ? frkg7['onSaveFile'](rigukf, ap469) : o4ltam['readyUrl'] != rigukf && frkg7['remove'](ap469, rigukf);
  }, frkg7['exits'] = function (xfkji$, sjz5wq) {
    xfkji$ = frkg7['getFileNativePath'](xfkji$), frkg7['fs']['getFileInfo']({ 'filePath': xfkji$, 'success': function ($qjfix) {
        null != sjz5wq && sjz5wq['runWith']([0x0, $qjfix]);
      }, 'fail': function (xrkfgi) {
        null != sjz5wq && sjz5wq['runWith']([0x1, xrkfgi]);
      } });
  }, frkg7['read'] = function (atb69p, ab9, xwj$qz, tmaol) {
    void 0x0 === ab9 && (ab9 = 'ascill'), atb69p = '' != (tmaol = void 0x0 === tmaol ? '' : tmaol) ? frkg7['getFileNativePath'](atb69p) : atb69p, frkg7['fs']['readFile']({ 'filePath': atb69p, 'encoding': ab9, 'success': function (qszwj5) {
        null != xwj$qz && xwj$qz['runWith']([0x0, qszwj5]);
      }, 'fail': function (de0y8) {
        de0y8 && '' != tmaol ? frkg7['down'](tmaol, ab9, xwj$qz, tmaol) : null != xwj$qz && xwj$qz['runWith']([0x1]);
      } });
  }, frkg7['readNativeFile'] = function (dh301, b96h) {
    frkg7['fs']['readFile']({ 'filePath': dh301, 'encoding': '', 'success': function (gurif) {
        null != b96h && b96h['runWith']([0x0]);
      }, 'fail': function ($wqjzs) {
        null != b96h && b96h['runWith']([0x1]);
      } });
  }, frkg7['down'] = function (qxfj$, u_rg7k, q$ijw, rfkxg) {
    void 0x0 === u_rg7k && (u_rg7k = 'ascill'), void 0x0 === rfkxg && (rfkxg = '');var ku7rfg = frkg7['getFileNativePath'](rfkxg);frkg7['wxdown']({ 'url': qxfj$, 'filePath': ku7rfg, 'success': function (dbeh31) {
        0xc8 === dbeh31['statusCode'] && frkg7['readFile'](dbeh31['filePath'], u_rg7k, q$ijw, rfkxg);
      }, 'fail': function (b3p91h) {
        null != q$ijw && q$ijw['runWith']([0x1, b3p91h]);
      } })['onProgressUpdate'](function (_kg) {
      null != q$ijw && q$ijw['runWith']([0x2, _kg['progress']]);
    });
  }, frkg7['readFile'] = function (olcmv, yd83, $jwqz, wjz$x) {
    void 0x0 === wjz$x && (wjz$x = ''), frkg7['fs']['readFile']({ 'filePath': olcmv, 'encoding': yd83 = void 0x0 === yd83 ? 'ascill' : yd83, 'success': function (jq$ixf) {
        -0x1 == olcmv['indexOf']('http://') && -0x1 == olcmv['indexOf']('https://') || frkg7['onFileUpdate'](olcmv, wjz$x), null != $jwqz && $jwqz['runWith']([0x0, jq$ixf]);
      }, 'fail': function (wqjs5) {
        wqjs5 && null != $jwqz && $jwqz['runWith']([0x1, wqjs5]);
      } });
  }, frkg7['downImg'] = function (btp9a6, ws8z, zw52sq) {
    void 0x0 === zw52sq && (zw52sq = ''), frkg7['wxdown']({ 'url': btp9a6, 'success': function (p1b9) {
        0xc8 === p1b9['statusCode'] && frkg7['copyFile'](p1b9['tempFilePath'], zw52sq, ws8z);
      }, 'fail': function (ed2y0) {
        null != ws8z && ws8z['runWith']([0x1, ed2y0]);
      } });
  }, frkg7['copyFile'] = function (qxwzj, h9bp6, a64mlt) {
    var dh3e1 = qxwzj['split']('/'),
        u_k7 = dh3e1[dh3e1['length'] - 0x1];h9bp6['split']('?')[0x0];var p9b6h = frkg7['getFileInfo'](h9bp6);dh3e1 = frkg7['getFileNativePath'](u_k7), frkg7['fs']['copyFile']({ 'srcPath': qxwzj, 'destPath': dh3e1, 'success': function (j5szwq) {
        p9b6h ? p9b6h['readyUrl'] != h9bp6 && frkg7['remove'](u_k7, h9bp6, a64mlt) : (frkg7['onSaveFile'](h9bp6, u_k7), null != a64mlt && a64mlt['runWith']([0x0]));
      }, 'fail': function (mlt46) {
        null != a64mlt && a64mlt['runWith']([0x1, mlt46]);
      } });
  }, frkg7['getFileNativePath'] = function (sy0825) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sy0825;
  }, frkg7['remove'] = function (qws25, b19h3, y308) {
    void 0x0 === b19h3 && (b19h3 = '');var lom4ac = frkg7['getFileInfo'](b19h3),
        $xfjk = frkg7['getFileNativePath'](lom4ac['md5']);hbe1p3['loader']['clearRes'](lom4ac['readyUrl']), frkg7['fs']['unlink']({ 'filePath': $xfjk, 'success': function (kug_r7) {
        '' != b19h3 && frkg7['onSaveFile'](b19h3, qws25), null != y308 && y308['runWith']([0x0]);
      }, 'fail': function (kfurgi) {} });
  }, frkg7['onSaveFile'] = function (rfu7kg, z5w2s) {
    var q5w2zs = rfu7kg['split']('?')[0x0];frkg7['filesListObj'][q5w2zs] = { 'md5': z5w2s, 'readyUrl': rfu7kg }, frkg7['fs']['writeFile']({ 'filePath': frkg7['fileNativeDir'] + '/' + frkg7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](frkg7['filesListObj']), 'success': function ($zwjq) {
        console['log']('写入测试测试成功：', $zwjq);
      }, 'fail': function (f$xkg) {
        console['log']('写入测试测试失败：', f$xkg);
      } });
  }, frkg7['existDir'] = function (qzw$sj, w2qs5z) {
    frkg7['fs']['mkdir']({ 'dirPath': qzw$sj, 'success': function (volcm) {
        null != w2qs5z && w2qs5z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (b3d1eh) {
        -0x1 != b3d1eh['errMsg']['indexOf']('file already exists') ? frkg7['readSync'](frkg7['fileListName'], 'utf8', w2qs5z) : null != w2qs5z && w2qs5z['runWith']([0x1, b3d1eh]);
      } });
  }, frkg7['readSync'] = function (qsjwz, w5jq, fk$xgi, fqi) {
    void 0x0 === w5jq && (w5jq = 'ascill'), void 0x0 === fqi && (fqi = ''), qsjwz = frkg7['getFileNativePath'](qsjwz);var jqw5zs;try {
      jqw5zs = frkg7['fs']['readFileSync'](qsjwz), null != fk$xgi && fk$xgi['runWith']([0x0, { 'data': jqw5zs }]);
    } catch (qs2w5) {
      null != fk$xgi && fk$xgi['runWith']([0x1]);
    }
  }, frkg7['readCache'] = function () {}, frkg7['writeCache'] = function (grfkx) {
    var de8 = readyUrl['split']('?')[0x0];frkg7['filesListObj'][de8] = { 'md5': md5Name, 'readyUrl': readyUrl }, frkg7['fs']['writeFile']({ 'filePath': frkg7['fileNativeDir'] + '/' + frkg7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](frkg7['filesListObj']), 'success': function (ikgfru) {}, 'fail': function (e3hdb) {} });
  }, frkg7['setNativeFileDir'] = function (x$fkj) {
    frkg7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x$fkj;
  }, frkg7['filesListObj'] = {}, frkg7['fileNativeDir'] = null, frkg7['fileListName'] = 'layaairfiles.txt', frkg7['ziyuFileData'] = {}, y2e(frkg7, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), frkg7);function frkg7() {
    frkg7['__super']['call'](this);
  }var zs25wq = function () {
    function tpb9h6() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, tpb9h6['__super']['call'](this), this['_sound'] = tpb9h6['_createSound']();
    }wjqxz(tpb9h6, 'laya.wx.mini.MiniSound', $jxwq);var gfuk7 = tpb9h6['prototype'];return gfuk7['load'] = function (j$iq) {
      var w5sq2 = this,
          _rkug;function hp916() {
        if (null != tpb9h6['_null']) w5sq2['_sound']['onCanplay'](tpb9h6['_null']), w5sq2['_sound']['onError'](tpb9h6['_null']);else try {
          w5sq2['_sound']['onCanplay'](null), w5sq2['_sound']['onError'](null), tpb9h6['_null'] = null;
        } catch (zwq5j) {
          console['warn']('[wxmini] _clearSound:' + zwq5j), w5sq2['_sound']['onCanplay'](kgxrfi), w5sq2['_sound']['onError'](kgxrfi), tpb9h6['_null'] = kgxrfi;
        }
      }function kgxrfi() {}j$iq = vocl['formatURL'](j$iq), this['url'] = j$iq, tpb9h6['_audioCache'][j$iq] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        hp916(), _rkug['loaded'] = !0x0, _rkug['event']('complete'), tpb9h6['_audioCache'][_rkug['url']] = _rkug;
      }), this['_sound']['onError'](function (q2wsz) {
        console['error']('errCode=' + q2wsz['errCode'] + '  errMsg=' + q2wsz['errMsg']), hp916(), _rkug['event']('error');
      }), this['_sound']['src'] = j$iq, _rkug = this);
    }, gfuk7['play'] = function (bt9p, q$sw) {
      void 0x0 === bt9p && (bt9p = 0x0), void 0x0 === q$sw && (q$sw = 0x0), (t69al = this['url'] == bhp931['_tMusic'] ? (tpb9h6['_musicAudio'] || (tpb9h6['_musicAudio'] = tpb9h6['_createSound']()), tpb9h6['_musicAudio']) : tpb9h6['_createSound']())['src'] = this['url'];var t69al = new ml64at(t69al);return t69al['url'] = this['url'], t69al['loops'] = q$sw, t69al['startTime'] = bt9p, t69al['play'](), bhp931['addChannel'](t69al), t69al;
    }, gfuk7['dispose'] = function () {
      var b3ph9 = tpb9h6['_audioCache'][this['url']];b3ph9 && (b3ph9['src'] = '', delete tpb9h6['_audioCache'][this['url']]);
    }, lovmc(0x0, gfuk7, 'duration', function () {
      return this['_sound']['duration'];
    }), tpb9h6['_createSound'] = function () {
      return tpb9h6['_id']++, $kfg['window']['wx']['createInnerAudioContext']();
    }, tpb9h6['_musicAudio'] = null, tpb9h6['_id'] = 0x0, tpb9h6['_audioCache'] = {}, tpb9h6['_null'] = void 0x0, tpb9h6;
  }(),
      ml64at = function () {
    function rixf(rfkg) {
      this['_audio'] = null, this['_onEnd'] = null, rixf['__super']['call'](this), this['_audio'] = rfkg, this['_onEnd'] = ml4ocv['bind'](this['__onEnd'], this), rfkg['onEnded'](this['_onEnd']);
    }wjqxz(rixf, 'laya.wx.mini.MiniSoundChannel', s52zwq);var lo4vm = rixf['prototype'];return lo4vm['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (hbe1p3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, lo4vm['__onNull'] = function () {}, lo4vm['play'] = function () {
      this['isStopped'] = !0x1, bhp931['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, lo4vm['stop'] = function () {
      if (this['isStopped'] = !0x0, bhp931['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != rixf['_null']) this['_audio']['onEnded'](rixf['_null']);else try {
          this['_audio']['onEnded'](null), rixf['_null'] = null;
        } catch (s58) {
          console['warn']('[wxmini] stop:' + s58), this['_audio']['onEnded'](ml4ocv['bind'](this['__onNull'], this)), rixf['_null'] = ml4ocv['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, lo4vm['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, lo4vm['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, bhp931['addChannel'](this), this['_audio']['play']());
    }, lovmc(0x0, lo4vm, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), lovmc(0x0, lo4vm, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), lovmc(0x0, lo4vm, 'volume', function () {
      return 0x1;
    }, function (wjxiq$) {}), rixf['_null'] = void 0x0, rixf;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($jfik, pbta) {
  'use strict';

  for (var lo4a in Object['defineProperty'](pbta, '__esModule', { 'value': !0x0 }), Laya) {
    var h13peb = Laya[lo4a];h13peb && h13peb['__isclass'] && (pbta[lo4a] = h13peb);
  }
});