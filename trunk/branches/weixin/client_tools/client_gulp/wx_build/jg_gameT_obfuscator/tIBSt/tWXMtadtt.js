var M = wx.$T;
!function (z7p$fd, yx0mq) {
  yx0mq['un'], yx0mq['uns'];var tc$i = yx0mq['static'],
      $pvzf = yx0mq['class'],
      x0_ym = yx0mq['getset'];yx0mq['__newvec'];var q_0xye = laya['utils']['Browser'],
      sjkrba = (laya['events']['Event'], laya['events']['EventDispatcher']),
      d9i$vc = laya['resource']['HTMLImage'],
      dp$z = laya['utils']['Handler'],
      wh_6m5 = laya['display']['Input'],
      n816g = laya['net']['Loader'];laya['maths']['Matrix'];var kbrjs = laya['renders']['Render'],
      eoq7z0 = laya['utils']['RunDriver'];laya['media']['Sound'];var n8651 = laya['media']['SoundChannel'],
      abksjr = laya['media']['SoundManager'],
      w61853 = (laya['display']['Stage'], laya['net']['URL']),
      brakg = laya['utils']['Utils'];$pvzf(kbrs, 'laya.wx.mini.MiniAdpter'), kbrs['getJson'] = function (x0yq_m) {
    return JSON['parse'](x0yq_m);
  }, kbrs['init'] = function (fp7zeo, jskbra) {
    void 0x0 === fp7zeo && (fp7zeo = !0x1), void 0x0 === jskbra && (jskbra = !0x1), kbrs['_inited'] || (kbrs['window'] = z7p$fd)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (kbrs['_inited'] = !0x0, kbrs['isZiYu'] = jskbra, kbrs['isPosMsgYu'] = fp7zeo, kbrs['EnvConfig'] = {}, kbrs['isZiYu'] || (_56hwm['setNativeFileDir']('/layaairGame'), _56hwm['existDir'](_56hwm['fileNativeDir'], dp$z['create'](kbrs, kbrs['onMkdirCallBack']))), kbrs['window']['focus'] = function () {}, yx0mq['getUrlPath'] = function () {}, kbrs['window']['logtime'] = function (m_xy0) {}, kbrs['window']['alertTimeLog'] = function (bajngr) {}, kbrs['window']['resetShareInfo'] = function () {}, kbrs['window']['CanvasRenderingContext2D'] = function () {}, kbrs['window']['CanvasRenderingContext2D']['prototype'] = kbrs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kbrs['window']['document']['body']['appendChild'] = function () {}, kbrs['EnvConfig']['pixelRatioInt'] = 0x0, eoq7z0['getPixelRatio'] = kbrs['pixelRatio'], kbrs['_preCreateElement'] = q_0xye['createElement'], q_0xye['createElement'] = kbrs['createElement'], eoq7z0['createShaderCondition'] = kbrs['createShaderCondition'], brakg['parseXMLFromString'] = kbrs['parseXMLFromString'], wh_6m5['_createInputElement'] = y_h0xm['_createInputElement'], kbrs['EnvConfig']['load'] = n816g['prototype']['load'], n816g['prototype']['load'] = usbajk['prototype']['load'], kbrs['isZiYu'] && fp7zeo && wx['onMessage'](function (n8gr3j) {
      n8gr3j['isLoad'] && (_56hwm['ziyuFileData'][n8gr3j['url']] = n8gr3j['data']);
    }));
  }, kbrs['onMkdirCallBack'] = function (ukas, y_0hx) {
    ukas || (_56hwm['filesListObj'] = JSON['parse'](y_0hx['data']));
  }, kbrs['pixelRatio'] = function () {
    if (!kbrs['EnvConfig']['pixelRatioInt']) try {
      var x_0ymh = wx['getSystemInfoSync']();return kbrs['EnvConfig']['pixelRatioInt'] = x_0ymh['pixelRatio'], x_0ymh['pixelRatio'];
    } catch (zdo7p) {}return kbrs['EnvConfig']['pixelRatioInt'];
  }, kbrs['createElement'] = function (c9i2v) {
    return 'canvas' != c9i2v ? 'textarea' == c9i2v || 'input' == c9i2v ? kbrs['onCreateInput'](c9i2v) : 'div' == c9i2v ? ((aksbju = kbrs['_preCreateElement'](c9i2v))['contains'] = function (kjsau) {
      return null;
    }, aksbju['removeChild'] = function (g86n13) {}, aksbju) : kbrs['_preCreateElement'](c9i2v) : (0x1 == kbrs['idx'] ? kbrs['isZiYu'] ? (df9v$p = sharedCanvas)['style'] = {} : df9v$p = z7p$fd['canvas'] : df9v$p = z7p$fd['wx']['createCanvas'](), kbrs['idx']++, df9v$p);var df9v$p, aksbju;
  }, kbrs['onCreateInput'] = function (rg8j3) {
    return rg8j3 = kbrs['_preCreateElement'](rg8j3), (rg8j3['focus'] = y_h0xm['wxinputFocus'], rg8j3['blur'] = y_h0xm['wxinputblur'], rg8j3['style'] = {}, rg8j3['value'] = 0x0, rg8j3['parentElement'] = {}, rg8j3['placeholder'] = {}, rg8j3['type'] = {}, rg8j3['setColor'] = function (vi$9c) {}, rg8j3['setType'] = function (bargjk) {}, rg8j3['setFontFace'] = function (dofz7) {}, rg8j3['addEventListener'] = function (p7foez) {}, rg8j3['contains'] = function (jabksu) {
      return null;
    }, rg8j3['removeChild'] = function (oezpf7) {}, rg8j3);
  }, kbrs['createShaderCondition'] = function (w81365) {
    var v9cdi$ = this;return function () {
      return v9cdi$[w81365['replace']('this.', '')];
    };
  }, kbrs['EnvConfig'] = null, kbrs['window'] = null, kbrs['_preCreateElement'] = null, kbrs['_inited'] = !0x1, kbrs['wxRequest'] = null, kbrs['systemInfo'] = null, kbrs['version'] = '0.0.1', kbrs['isZiYu'] = !0x1, kbrs['isPosMsgYu'] = !0x1, kbrs['parseXMLFromString'] = function (g6813) {
    var jask;g6813 = g6813['replace'](/>\s+</g, '><');try {
      jask = new z7p$fd['Parser']['DOMParser']()['parseFromString'](g6813, 'text/xml');
    } catch (rg31) {
      throw '需要引入xml解析库文件';
    }return jask;
  }, kbrs['idx'] = 0x1;var kbjsa = kbrs;function kbrs() {}$pvzf(z7dop, 'laya.wx.mini.MiniImage'), z7dop['prototype']['_loadImage'] = function (d9iv$) {
    var zq7of = !0x1;-0x1 == d9iv$['indexOf']('layaNativeDir/') && (zq7of = !0x0, d9iv$ = w61853['formatURL'](d9iv$)), _56hwm['getFileInfo'](d9iv$) ? z7dop['onCreateImage'](d9iv$, this, !zq7of) : -0x1 != d9iv$['indexOf']('http://') || -0x1 != d9iv$['indexOf']('https://') ? _56hwm['downImg'](d9iv$, new dp$z(z7dop, z7dop['onDownImgCallBack'], [d9iv$, this]), d9iv$) : z7dop['onCreateImage'](d9iv$, this, !0x0);
  }, z7dop['onDownImgCallBack'] = function (brkga, ti29c4, m_hw6) {
    m_hw6 ? ti29c4['onError'](null) : z7dop['onCreateImage'](brkga, ti29c4);
  }, z7dop['onCreateImage'] = function (odpzf7, f7zep, rbag) {
    var dvp$f9;function $pivd9() {
      dvp$f9['onload'] = null, dvp$f9['onerror'] = null, delete f7zep['imgCache'][odpzf7];
    }rbag = (rbag = void 0x0 === rbag ? !0x1 : rbag) ? odpzf7 : (rbag = _56hwm['getFileInfo'](odpzf7)['md5'], _56hwm['getFileNativePath'](rbag)), null == f7zep['imgCache'] && (f7zep['imgCache'] = {});function dpz7o() {
      $pivd9(), f7zep['onLoaded'](dvp$f9);
    }function $dpzf7() {
      $pivd9(), f7zep['event']('error', 'Load image failed');
    }'nativeimage' == f7zep['_type'] ? ((dvp$f9 = new q_0xye['window']['Image']())['crossOrigin'] = '', dvp$f9['onload'] = dpz7o, dvp$f9['onerror'] = $dpzf7, dvp$f9['src'] = rbag, f7zep['imgCache'][odpzf7] = dvp$f9) : new d9i$vc['create'](rbag, { 'onload': dpz7o, 'onerror': $dpzf7, 'onCreate': function (_0hxy) {
        dvp$f9 = _0hxy, f7zep['imgCache'][odpzf7] = _0hxy;
      } });
  };function z7dop() {}$pvzf(fpdz$7, 'laya.wx.mini.MiniInput'), fpdz$7['_createInputElement'] = function () {
    wh_6m5['_initInput'](wh_6m5['area'] = q_0xye['createElement']('textarea')), wh_6m5['_initInput'](wh_6m5['input'] = q_0xye['createElement']('input')), wh_6m5['inputContainer'] = q_0xye['createElement']('div'), wh_6m5['inputContainer']['style']['position'] = 'absolute', wh_6m5['inputContainer']['style']['zIndex'] = 0x186a0, q_0xye['container']['appendChild'](wh_6m5['inputContainer']), wh_6m5['inputContainer']['setPos'] = function (kgbra, ti2c4l) {
      wh_6m5['inputContainer']['style']['left'] = kgbra + 'px', wh_6m5['inputContainer']['style']['top'] = ti2c4l + 'px';
    }, yx0mq['stage']['on']('resize', null, fpdz$7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fp7oez) {
      z7p$fd['dispatchEvent'] && z7p$fd['dispatchEvent']('resize');
    }), abksjr['_soundClass'] = rnbja, abksjr['_musicClass'] = rnbja, z7p$fd['_videoClass'] = mqx_0y;
  }, fpdz$7['_onStageResize'] = function () {
    yx0mq['stage']['_canvasTransform']['identity']()['scale'](q_0xye['width'] / kbrjs['canvas']['width'] / eoq7z0['getPixelRatio'](), q_0xye['height'] / kbrjs['canvas']['height'] / eoq7z0['getPixelRatio']());
  }, fpdz$7['wxinputFocus'] = function (q0eo) {
    var hm5wy = wh_6m5['inputElement']['target'];hm5wy && !hm5wy['editable'] || (kbjsa['window']['wx']['offKeyboardConfirm'](), kbjsa['window']['wx']['offKeyboardInput'](), kbjsa['window']['wx']['showKeyboard']({ 'defaultValue': hm5wy['text'], 'maxLength': hm5wy['maxChars'], 'multiple': hm5wy['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function ($pfzvd) {}, 'fail': function (suk) {} }), kbjsa['window']['wx']['onKeyboardConfirm'](function (_65mw) {
      _65mw = _65mw ? _65mw['value'] : '', (hm5wy['text'] = _65mw, hm5wy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), kbjsa['window']['wx']['onKeyboardInput'](function (f7eoz) {
      f7eoz = f7eoz ? f7eoz['value'] : '', hm5wy['multiline'] || -0x1 == f7eoz['indexOf']('\x0a') ? (hm5wy['text'] = f7eoz, hm5wy['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, fpdz$7['inputEnter'] = function () {
    wh_6m5['inputElement']['target']['focus'] = !0x1;
  }, fpdz$7['wxinputblur'] = function () {
    fpdz$7['hideKeyboard']();
  }, fpdz$7['hideKeyboard'] = function () {
    kbjsa['window']['wx']['offKeyboardConfirm'](), kbjsa['window']['wx']['offKeyboardInput'](), kbjsa['window']['wx']['hideKeyboard']({ 'success': function (basjuk) {
        console['log']('隐藏键盘');
      }, 'fail': function (fd$pv9) {
        console['log']('隐藏键盘出错:' + (fd$pv9 ? fd$pv9['errMsg'] : ''));
      } });
  };var y_h0xm = fpdz$7;function fpdz$7() {}$pvzf(h_m5y, 'laya.wx.mini.MiniLoader'), (hym0 = h_m5y['prototype'])['load'] = function (v$fdpz, qofe, w68h15, f7zq, jgbark) {
    void 0x0 === w68h15 && (w68h15 = !0x0), void 0x0 === jgbark && (jgbark = !0x1);var vz$pd = this;0x0 === (vz$pd['_url'] = v$fdpz)['indexOf']('data:image') ? vz$pd['_type'] = qofe = 'image' : vz$pd['_type'] = qofe = qofe || vz$pd['getTypeFromUrl'](v$fdpz), vz$pd['_cache'] = w68h15, vz$pd['_data'] = null;var exyqo0 = 'ascii';-0x1 != v$fdpz['indexOf']('.fnt') ? exyqo0 = 'utf8' : 'arraybuffer' == qofe && (exyqo0 = '');var ofqez = brakg['getFileExtension'](v$fdpz);if (-0x1 != h_m5y['_fileTypeArr']['indexOf'](ofqez)) kbjsa['EnvConfig']['load']['call'](this, v$fdpz, qofe, w68h15, f7zq, jgbark);else {
      if (_56hwm['getFileInfo'](v$fdpz)) kbjsa['EnvConfig']['load']['call'](this, v$fdpz, qofe, w68h15, f7zq, jgbark);else {
        if (-0x1 != v$fdpz['indexOf']('layaNativeDir/')) return kbjsa['isZiYu'] ? (ofqez = _56hwm['ziyuFileData'][v$fdpz], void vz$pd['onLoaded'](ofqez)) : (cosnole['log']('read read'), void _56hwm['read'](v$fdpz, exyqo0, new dp$z(h_m5y, h_m5y['onReadNativeCallBack'], [exyqo0, v$fdpz, qofe, w68h15, f7zq, jgbark, vz$pd])));ofqez = '' == w61853['rootPath'] ? v$fdpz : v$fdpz['split'](w61853['rootPath'])[0x0], -0x1 != v$fdpz['indexOf']('http://') || -0x1 != v$fdpz['indexOf']('https://') ? kbjsa['EnvConfig']['load']['call'](vz$pd, v$fdpz, qofe, w68h15, f7zq, jgbark) : _56hwm['readFile'](ofqez, exyqo0, new dp$z(h_m5y, h_m5y['onReadNativeCallBack'], [exyqo0, v$fdpz, qofe, w68h15, f7zq, jgbark, vz$pd]), v$fdpz);
      }
    }
  }, hym0['resMgrLoad'] = function (hm_w, h658, vd$f9p, sjukab, tc4i92, buajk, fp7) {
    void 0x0 === vd$f9p && (vd$f9p = 0x0), void 0x0 === sjukab && (sjukab = !0x1), void 0x0 === tc4i92 && (tc4i92 = !0x1), void 0x0 === buajk && (buajk = 0x0), void 0x0 === fp7 && (fp7 = 0x3), -0x1 != hm_w['indexOf']('mpack') && console['log']('=============resMgrLoad url:', hm_w), kbjsa['EnvConfig']['resMgrLoad'](hm_w, (dzp7o, vpd9$i, o7pezf) => {
      h_m5y['prototype']['resMgrLoadCallBack'](dzp7o, vpd9$i, o7pezf, h658);
    }, vd$f9p, sjukab, tc4i92, buajk, fp7);
  }, hym0['resMgrLoadCallBack'] = function (qeoy0, ubskja, w5h, ozdfp7) {
    console['log']('buff:::', qeoy0, w5h, _56hwm['fileNativeDir'] + '///' + _56hwm['fileListName']), ozdfp7(qeoy0, ubskja, w5h);
  }, hym0['clearRes'] = function (_hxy0, q0eoz) {
    this['clearRes'](_hxy0, q0eoz = void 0x0 === q0eoz ? !0x1 : q0eoz), q0eoz = _56hwm['getFileInfo'](_hxy0), !q0eoz || -0x1 == _hxy0['indexOf']('http://') && -0x1 == _hxy0['indexOf']('https://') || (_hxy0 = q0eoz['md5'], q0eoz = _56hwm['getFileNativePath'](_hxy0), _56hwm['remove'](q0eoz));
  }, h_m5y['onReadNativeCallBack'] = function (m_65, d$9vf, fpoez7, fv$zd, jgrnb, hmy_0, q0z7o, r31n8g, oxe7q0) {
    void 0x0 === fv$zd && (fv$zd = !0x0), void 0x0 === hmy_0 && (hmy_0 = !0x1), (r31n8g = void 0x0 === r31n8g ? 0x0 : r31n8g) ? 0x1 == r31n8g && kbjsa['EnvConfig']['load']['call'](q0z7o, d$9vf, fpoez7, fv$zd, jgrnb, hmy_0) : (r31n8g = 'json' == fpoez7 || 'atlas' == fpoez7 ? kbjsa['getJson'](oxe7q0['data']) : 'xml' == fpoez7 ? brakg['parseXMLFromString'](oxe7q0['data']) : oxe7q0['data'], q0z7o['onLoaded'](r31n8g), !kbjsa['isZiYu'] && kbjsa['isPosMsgYu'] && 'arraybuffer' != fpoez7 && wx['postMessage']({ 'url': d$9vf, 'data': r31n8g, 'isLoad': !0x0 }));
  }, tc$i(h_m5y, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var usbajk = h_m5y;function h_m5y() {}$pvzf(y0_x, 'laya.wx.mini.MiniFileMgr', sjkrba), y0_x['isLoadFile'] = function (gn18r3) {
    return -0x1 != y0_x['_fileTypeArr']['indexOf'](gn18r3);
  }, y0_x['getFileInfo'] = function (zpef7) {
    return zpef7 = zpef7['split']('?')[0x0], zpef7 = y0_x['filesListObj'][zpef7], null == zpef7 ? null : zpef7;
  }, y0_x['onFileUpdate'] = function (pz7fod, t2cv) {
    pz7fod = pz7fod['split']('/'), pz7fod = pz7fod[pz7fod['length'] - 0x1];var t24cil = y0_x['getFileInfo'](t2cv);null == t24cil ? y0_x['onSaveFile'](t2cv, pz7fod) : t24cil['readyUrl'] != t2cv && y0_x['remove'](pz7fod, t2cv);
  }, y0_x['exits'] = function (ngbr, zf$d) {
    ngbr = y0_x['getFileNativePath'](ngbr), y0_x['fs']['getFileInfo']({ 'filePath': ngbr, 'success': function (f9$pd) {
        null != zf$d && zf$d['runWith']([0x0, f9$pd]);
      }, 'fail': function (d9i$c) {
        null != zf$d && zf$d['runWith']([0x1, d9i$c]);
      } });
  }, y0_x['read'] = function (ajkus, abuk, $d9ci, m0hy) {
    void 0x0 === abuk && (abuk = 'ascill'), ajkus = '' != (m0hy = void 0x0 === m0hy ? '' : m0hy) ? y0_x['getFileNativePath'](ajkus) : ajkus, y0_x['fs']['readFile']({ 'filePath': ajkus, 'encoding': abuk, 'success': function (m0x_yh) {
        null != $d9ci && $d9ci['runWith']([0x0, m0x_yh]);
      }, 'fail': function (jskaub) {
        jskaub && '' != m0hy ? y0_x['down'](m0hy, abuk, $d9ci, m0hy) : null != $d9ci && $d9ci['runWith']([0x1]);
      } });
  }, y0_x['readNativeFile'] = function (fodzp7, _yxq0e) {
    y0_x['fs']['readFile']({ 'filePath': fodzp7, 'encoding': '', 'success': function (zfope) {
        null != _yxq0e && _yxq0e['runWith']([0x0]);
      }, 'fail': function (q70ze) {
        null != _yxq0e && _yxq0e['runWith']([0x1]);
      } });
  }, y0_x['down'] = function (fp7oe, agjbkr, w136, _0qye) {
    void 0x0 === agjbkr && (agjbkr = 'ascill'), void 0x0 === _0qye && (_0qye = '');var yoeqx0 = y0_x['getFileNativePath'](_0qye);y0_x['wxdown']({ 'url': fp7oe, 'filePath': yoeqx0, 'success': function (h6w_5) {
        0xc8 === h6w_5['statusCode'] && y0_x['readFile'](h6w_5['filePath'], agjbkr, w136, _0qye);
      }, 'fail': function (bgarjk) {
        null != w136 && w136['runWith']([0x1, bgarjk]);
      } })['onProgressUpdate'](function (yq0x_m) {
      null != w136 && w136['runWith']([0x2, yq0x_m['progress']]);
    });
  }, y0_x['readFile'] = function (f7od, mywh_, eoz7q, ez70oq) {
    void 0x0 === ez70oq && (ez70oq = ''), y0_x['fs']['readFile']({ 'filePath': f7od, 'encoding': mywh_ = void 0x0 === mywh_ ? 'ascill' : mywh_, 'success': function ($ic9t) {
        -0x1 == f7od['indexOf']('http://') && -0x1 == f7od['indexOf']('https://') || y0_x['onFileUpdate'](f7od, ez70oq), null != eoz7q && eoz7q['runWith']([0x0, $ic9t]);
      }, 'fail': function (qeoz7) {
        qeoz7 && null != eoz7q && eoz7q['runWith']([0x1, qeoz7]);
      } });
  }, y0_x['downImg'] = function (dz$, cvd$, l2cit4) {
    void 0x0 === l2cit4 && (l2cit4 = ''), y0_x['wxdown']({ 'url': dz$, 'success': function (bjkuas) {
        0xc8 === bjkuas['statusCode'] && y0_x['copyFile'](bjkuas['tempFilePath'], l2cit4, cvd$);
      }, 'fail': function (y_xmq) {
        null != cvd$ && cvd$['runWith']([0x1, y_xmq]);
      } });
  }, y0_x['copyFile'] = function (_yxm0q, anbjgr, w5683) {
    var z0q7eo = _yxm0q['split']('/'),
        df7p$ = z0q7eo[z0q7eo['length'] - 0x1];anbjgr['split']('?')[0x0];var ksrab = y0_x['getFileInfo'](anbjgr);z0q7eo = y0_x['getFileNativePath'](df7p$), y0_x['fs']['copyFile']({ 'srcPath': _yxm0q, 'destPath': z0q7eo, 'success': function (suak) {
        ksrab ? ksrab['readyUrl'] != anbjgr && y0_x['remove'](df7p$, anbjgr, w5683) : (y0_x['onSaveFile'](anbjgr, df7p$), null != w5683 && w5683['runWith']([0x0]));
      }, 'fail': function (yxmh0) {
        null != w5683 && w5683['runWith']([0x1, yxmh0]);
      } });
  }, y0_x['getFileNativePath'] = function (zf7pe) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zf7pe;
  }, y0_x['remove'] = function (rgj38, zqo7e, ci294) {
    void 0x0 === zqo7e && (zqo7e = '');var cdv$i9 = y0_x['getFileInfo'](zqo7e),
        y_wmhx = y0_x['getFileNativePath'](cdv$i9['md5']);yx0mq['loader']['clearRes'](cdv$i9['readyUrl']), y0_x['fs']['unlink']({ 'filePath': y_wmhx, 'success': function (n8356) {
        '' != zqo7e && y0_x['onSaveFile'](zqo7e, rgj38), null != ci294 && ci294['runWith']([0x0]);
      }, 'fail': function (oez70q) {} });
  }, y0_x['onSaveFile'] = function (qo70e, m6_5hw) {
    var $9fvd = qo70e['split']('?')[0x0];y0_x['filesListObj'][$9fvd] = { 'md5': m6_5hw, 'readyUrl': qo70e }, y0_x['fs']['writeFile']({ 'filePath': y0_x['fileNativeDir'] + '/' + y0_x['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y0_x['filesListObj']), 'success': function (zfe7op) {
        console['log']('写入测试测试成功：', zfe7op);
      }, 'fail': function (tv9$) {
        console['log']('写入测试测试失败：', tv9$);
      } });
  }, y0_x['existDir'] = function (skjrab, n85163) {
    y0_x['fs']['mkdir']({ 'dirPath': skjrab, 'success': function (wh6m5) {
        null != n85163 && n85163['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (jgrn) {
        -0x1 != jgrn['errMsg']['indexOf']('file already exists') ? y0_x['readSync'](y0_x['fileListName'], 'utf8', n85163) : null != n85163 && n85163['runWith']([0x1, jgrn]);
      } });
  }, y0_x['readSync'] = function (n8, wmy_5, cvi29t, l24i) {
    void 0x0 === wmy_5 && (wmy_5 = 'ascill'), void 0x0 === l24i && (l24i = ''), wmy_5 = y0_x['getFileNativePath'](n8);var p9fv$;try {
      p9fv$ = y0_x['fs']['readFileSync'](wmy_5), null != cvi29t && cvi29t['runWith']([0x0, { 'data': p9fv$ }]);
    } catch (abrjgn) {
      null != cvi29t && cvi29t['runWith']([0x1]);
    }
  }, y0_x['readCache'] = function () {}, y0_x['writeCache'] = function (_y0mx) {
    var hxmy0_ = readyUrl['split']('?')[0x0];y0_x['filesListObj'][hxmy0_] = { 'md5': md5Name, 'readyUrl': readyUrl }, y0_x['fs']['writeFile']({ 'filePath': y0_x['fileNativeDir'] + '/' + y0_x['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](y0_x['filesListObj']), 'success': function (asju) {}, 'fail': function (w5h6_) {} });
  }, y0_x['setNativeFileDir'] = function (vzp$d) {
    y0_x['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vzp$d;
  }, y0_x['filesListObj'] = {}, y0_x['fileNativeDir'] = null, y0_x['fileListName'] = 'layaairfiles.txt', y0_x['ziyuFileData'] = {}, tc$i(y0_x, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var _56hwm = y0_x;function y0_x() {
    y0_x['__super']['call'](this);
  }$pvzf(q0_y, 'laya.wx.mini.MiniSound', sjkrba), (hym0 = q0_y['prototype'])['load'] = function (gbnjra) {
    var f$z7p = this,
        gjrb;function hyw5_m() {
      if (null != q0_y['_null']) f$z7p['_sound']['onCanplay'](q0_y['_null']), f$z7p['_sound']['onError'](q0_y['_null']);else try {
        f$z7p['_sound']['onCanplay'](null), f$z7p['_sound']['onError'](null), q0_y['_null'] = null;
      } catch (v9pi) {
        console['warn']('[wxmini] _clearSound:' + v9pi), f$z7p['_sound']['onCanplay'](fdp$v), f$z7p['_sound']['onError'](fdp$v), q0_y['_null'] = fdp$v;
      }
    }function fdp$v() {}gbnjra = w61853['formatURL'](gbnjra), this['url'] = gbnjra, q0_y['_audioCache'][gbnjra] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      hyw5_m(), gjrb['loaded'] = !0x0, gjrb['event']('complete'), q0_y['_audioCache'][gjrb['url']] = gjrb;
    }), this['_sound']['onError'](function (o0qex) {
      console['error']('errCode=' + o0qex['errCode'] + '  errMsg=' + o0qex['errMsg']), hyw5_m(), gjrb['event']('error');
    }), this['_sound']['src'] = gbnjra, gjrb = this);
  }, hym0['play'] = function (gnjr83, _w5mh6) {
    void 0x0 === gnjr83 && (gnjr83 = 0x0), void 0x0 === _w5mh6 && (_w5mh6 = 0x0), (zeoqf7 = this['url'] == abksjr['_tMusic'] ? (q0_y['_musicAudio'] || (q0_y['_musicAudio'] = q0_y['_createSound']()), q0_y['_musicAudio']) : q0_y['_createSound']())['src'] = this['url'];var zeoqf7 = new _mh0(zeoqf7);return zeoqf7['url'] = this['url'], zeoqf7['loops'] = _w5mh6, zeoqf7['startTime'] = gnjr83, zeoqf7['play'](), abksjr['addChannel'](zeoqf7), zeoqf7;
  }, hym0['dispose'] = function () {
    var l4c2it = q0_y['_audioCache'][this['url']];l4c2it && (l4c2it['src'] = '', delete q0_y['_audioCache'][this['url']]);
  }, x0_ym(0x0, hym0, 'duration', function () {
    return this['_sound']['duration'];
  }), q0_y['_createSound'] = function () {
    return q0_y['_id']++, kbjsa['window']['wx']['createInnerAudioContext']();
  }, q0_y['_musicAudio'] = null, q0_y['_id'] = 0x0, q0_y['_audioCache'] = {}, q0_y['_null'] = void 0x0;var rnbja = q0_y;function q0_y() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, q0_y['__super']['call'](this), this['_sound'] = q0_y['_createSound']();
  }var hym0;$pvzf(zp7$df, 'laya.wx.mini.MiniSoundChannel', n8651), (tc$i = zp7$df['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (yx0mq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, tc$i['__onNull'] = function () {}, tc$i['play'] = function () {
    this['isStopped'] = !0x1, abksjr['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, tc$i['stop'] = function () {
    if (this['isStopped'] = !0x0, abksjr['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != zp7$df['_null']) this['_audio']['onEnded'](zp7$df['_null']);else try {
        this['_audio']['onEnded'](null), zp7$df['_null'] = null;
      } catch (w_yhm) {
        console['warn']('[wxmini] stop:' + w_yhm), this['_audio']['onEnded'](brakg['bind'](this['__onNull'], this)), zp7$df['_null'] = brakg['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, tc$i['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, tc$i['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, abksjr['addChannel'](this), this['_audio']['play']());
  }, x0_ym(0x0, tc$i, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), x0_ym(0x0, tc$i, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), x0_ym(0x0, tc$i, 'volume', function () {
    return 0x1;
  }, function (qm0_) {}), zp7$df['_null'] = void 0x0;var _mh0 = zp7$df;function zp7$df(dpfzo7) {
    this['_audio'] = null, this['_onEnd'] = null, zp7$df['__super']['call'](this), this['_audio'] = dpfzo7, this['_onEnd'] = brakg['bind'](this['__onEnd'], this), dpfzo7['onEnded'](this['_onEnd']);
  }$pvzf(_6w5h, 'laya.wx.mini.MiniVideo'), (sjkrba = _6w5h['prototype'])['on'] = function (rsbak, $v9dp, hxy_0) {
    'loadedmetadata' == rsbak ? (this['onPlayFunc'] = hxy_0['bind']($v9dp), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this)) : 'ended' == rsbak && (this['onEndedFunC'] = hxy_0['bind']($v9dp), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this)), this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
  }, sjkrba['onTimeUpdateFunc'] = function (i2ct4l) {
    this['position'] = i2ct4l['position'], this['_duration'] = i2ct4l['duration'];
  }, sjkrba['onPlayFunction'] = function () {
    this['videoElement'] && (this['videoElement']['readyState'] = 0xc8), console['log']('=====视频加载完成========'), null != this['onPlayFunc'] && this['onPlayFunc']();
  }, sjkrba['onended'] = function (bragnj, ksrja) {
    this['onEndedFunC'] = ksrja['bind'](bragnj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
  }, sjkrba['onEndedFunction'] = function () {
    this['videoElement'] && (this['videoend'] = !0x0, console['log']('=====视频播放完毕========'), null != this['onEndedFunC'] && this['onEndedFunC']());
  }, sjkrba['off'] = function (ct$i9v, h18w5, poef7) {
    'loadedmetadata' == ct$i9v ? (this['onPlayFunc'] = poef7['bind'](h18w5), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this)) : 'ended' == ct$i9v && (this['onEndedFunC'] = poef7['bind'](h18w5), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
  }, sjkrba['load'] = function (asbr) {
    this['videoElement'] && (this['videoElement']['src'] = asbr);
  }, sjkrba['play'] = function () {
    this['videoElement'] && (this['videoend'] = !0x1, this['videoElement']['play']());
  }, sjkrba['pause'] = function () {
    this['videoElement'] && (this['videoend'] = !0x0, this['videoElement']['pause']());
  }, sjkrba['size'] = function (y5h_, qxey0_) {
    this['videoElement'] && (this['videoElement']['width'] = y5h_, this['videoElement']['height'] = qxey0_);
  }, sjkrba['destroy'] = function () {
    this['videoElement'] && this['videoElement']['destroy'](), this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = !0x1, this['videourl'] = null;
  }, sjkrba['reload'] = function () {
    this['videoElement'] && (this['videoElement']['src'] = this['videourl']);
  }, x0_ym(0x0, sjkrba, 'duration', function () {
    return this['_duration'];
  }), x0_ym(0x0, sjkrba, 'currentTime', function () {
    return this['videoElement'] ? this['videoElement']['initialTime'] : 0x0;
  }, function (hm6w15) {
    this['videoElement'] && (this['videoElement']['initialTime'] = hm6w15);
  }), x0_ym(0x0, sjkrba, 'videoWidth', function () {
    return this['videoElement'] ? this['videoElement']['width'] : 0x0;
  }), x0_ym(0x0, sjkrba, 'videoHeight', function () {
    return this['videoElement'] ? this['videoElement']['height'] : 0x0;
  }), x0_ym(0x0, sjkrba, 'ended', function () {
    return this['videoend'];
  }), x0_ym(0x0, sjkrba, 'loop', function () {
    return !!this['videoElement'] && this['videoElement']['loop'];
  }, function (yhmxw) {
    this['videoElement'] && (this['videoElement']['loop'] = yhmxw);
  }), x0_ym(0x0, sjkrba, 'playbackRate', function () {
    return this['videoElement'] ? this['videoElement']['playbackRate'] : 0x0;
  }, function (zfp) {
    this['videoElement'] && (this['videoElement']['playbackRate'] = zfp);
  }), x0_ym(0x0, sjkrba, 'muted', function () {
    return !!this['videoElement'] && this['videoElement']['muted'];
  }, function (n83r1g) {
    this['videoElement'] && (this['videoElement']['muted'] = n83r1g);
  }), x0_ym(0x0, sjkrba, 'paused', function () {
    return !!this['videoElement'] && this['videoElement']['paused'];
  }), x0_ym(0x0, sjkrba, 'x', function () {
    return this['videoElement'] ? this['videoElement']['x'] : 0x0;
  }, function (eyq0_x) {
    this['videoElement'] && (this['videoElement']['x'] = eyq0_x);
  }), x0_ym(0x0, sjkrba, 'y', function () {
    return this['videoElement'] ? this['videoElement']['y'] : 0x0;
  }, function (d$p9fv) {
    this['videoElement'] && (this['videoElement']['y'] = d$p9fv);
  }), x0_ym(0x0, sjkrba, 'currentSrc', function () {
    return this['videoElement']['src'];
  }), x0_ym(0x0, sjkrba, 'src', function () {
    return this['videoElement'] ? this['videoElement']['src'] : 0x0;
  }, function (fpzdv$) {
    this['videoElement'] && (this['videoElement']['src'] = fpzdv$);
  }), x0_ym(0x0, sjkrba, 'controls', function () {
    if (this['videoElement']) return this['videoElement']['controls'];
  }, function (e7qfoz) {
    this['videoElement'] && (this['videoElement']['controls'] = e7qfoz);
  }), x0_ym(0x0, sjkrba, 'autoplay', function () {
    if (this['videoElement']) return this['videoElement']['autoplay'];
  }, function (zo7pf) {
    this['videoElement'] && (this['videoElement']['autoplay'] = zo7pf);
  });var mqx_0y = _6w5h;function _6w5h() {
    this['videoend'] = !0x1, this['videourl'] = '', this['videoElement'] = kbjsa['window']['wx']['createVideo']({ 'showCenterPlayBtn': !0x1, 'showProgressInControlMode': !0x1, 'objectFit': 'fill' });
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (rajbkg, $cvt9) {
  'use strict';

  for (var eq_yx0 in Object['defineProperty']($cvt9, '__esModule', { 'value': !0x0 }), Laya) {
    var f7oq = Laya[eq_yx0];f7oq && f7oq['__isclass'] && ($cvt9[eq_yx0] = f7oq);
  }
});