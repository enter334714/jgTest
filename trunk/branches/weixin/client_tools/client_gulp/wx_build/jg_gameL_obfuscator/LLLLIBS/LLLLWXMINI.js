var W = wx.$l;
!function (_40y, bs2) {
  bs2['un'], bs2['uns'];var zajkqh = bs2['static'],
      tq9lf = bs2['class'],
      _8d4$ = bs2['getset'];bs2['__newvec'];var d2s$ab = laya['utils']['Browser'],
      a2bjh = (laya['events']['Event'], laya['events']['EventDispatcher']),
      $sdba2 = laya['resource']['HTMLImage'],
      n0x_y3 = laya['utils']['Handler'],
      y3xrc0 = laya['display']['Input'],
      htlzj = laya['net']['Loader'];laya['maths']['Matrix'];var akzhjq = laya['renders']['Render'],
      jak2h = laya['utils']['RunDriver'];laya['media']['Sound'];var u7g1e = laya['media']['SoundChannel'],
      cxry30 = laya['media']['SoundManager'],
      ljqzhk = (laya['display']['Stage'], laya['net']['URL']),
      yn_4 = laya['utils']['Utils'];tq9lf(jka2d, 'laya.wx.mini.MiniAdpter'), jka2d['getJson'] = function (wmi3rc) {
    return JSON['parse'](wmi3rc);
  }, jka2d['init'] = function (e71vu, qakhjz) {
    void 0x0 === e71vu && (e71vu = !0x1), void 0x0 === qakhjz && (qakhjz = !0x1), jka2d['_inited'] || (jka2d['window'] = _40y)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (jka2d['_inited'] = !0x0, jka2d['isZiYu'] = qakhjz, jka2d['isPosMsgYu'] = e71vu, jka2d['EnvConfig'] = {}, jka2d['isZiYu'] || (zjqahk['setNativeFileDir']('/layaairGame'), zjqahk['existDir'](zjqahk['fileNativeDir'], n0x_y3['create'](jka2d, jka2d['onMkdirCallBack']))), jka2d['window']['focus'] = function () {}, bs2['getUrlPath'] = function () {}, jka2d['window']['logtime'] = function (jkba2) {}, jka2d['window']['alertTimeLog'] = function (n_x30) {}, jka2d['window']['resetShareInfo'] = function () {}, jka2d['window']['CanvasRenderingContext2D'] = function () {}, jka2d['window']['CanvasRenderingContext2D']['prototype'] = jka2d['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jka2d['window']['document']['body']['appendChild'] = function () {}, jka2d['EnvConfig']['pixelRatioInt'] = 0x0, jak2h['getPixelRatio'] = jka2d['pixelRatio'], jka2d['_preCreateElement'] = d2s$ab['createElement'], d2s$ab['createElement'] = jka2d['createElement'], jak2h['createShaderCondition'] = jka2d['createShaderCondition'], yn_4['parseXMLFromString'] = jka2d['parseXMLFromString'], y3xrc0['_createInputElement'] = lzqjht['_createInputElement'], jka2d['EnvConfig']['load'] = htlzj['prototype']['load'], htlzj['prototype']['load'] = xy_n3['prototype']['load'], jka2d['isZiYu'] && e71vu && wx['onMessage'](function (v971oe) {
      v971oe['isLoad'] && (zjqahk['ziyuFileData'][v971oe['url']] = v971oe['data']);
    }));
  }, jka2d['onMkdirCallBack'] = function (ad$s2b, _s$n48) {
    ad$s2b || (zjqahk['filesListObj'] = JSON['parse'](_s$n48['data']));
  }, jka2d['pixelRatio'] = function () {
    if (!jka2d['EnvConfig']['pixelRatioInt']) try {
      var gv7eu1 = wx['getSystemInfoSync']();return jka2d['EnvConfig']['pixelRatioInt'] = gv7eu1['pixelRatio'], gv7eu1['pixelRatio'];
    } catch (n_x48) {}return jka2d['EnvConfig']['pixelRatioInt'];
  }, jka2d['createElement'] = function (khajqz) {
    return 'canvas' != khajqz ? 'textarea' == khajqz || 'input' == khajqz ? jka2d['onCreateInput'](khajqz) : 'div' == khajqz ? ((_8$4s = jka2d['_preCreateElement'](khajqz))['contains'] = function (f9o57v) {
      return null;
    }, _8$4s['removeChild'] = function (hzqjt) {}, _8$4s) : jka2d['_preCreateElement'](khajqz) : (0x1 == jka2d['idx'] ? jka2d['isZiYu'] ? (htzlj = sharedCanvas)['style'] = {} : htzlj = _40y['canvas'] : htzlj = _40y['wx']['createCanvas'](), jka2d['idx']++, htzlj);var htzlj, _8$4s;
  }, jka2d['onCreateInput'] = function (geu1v) {
    return geu1v = jka2d['_preCreateElement'](geu1v), (geu1v['focus'] = lzqjht['wxinputFocus'], geu1v['blur'] = lzqjht['wxinputblur'], geu1v['style'] = {}, geu1v['value'] = 0x0, geu1v['parentElement'] = {}, geu1v['placeholder'] = {}, geu1v['type'] = {}, geu1v['setColor'] = function (jhlt) {}, geu1v['setType'] = function (mc0ri) {}, geu1v['setFontFace'] = function (hq5zl) {}, geu1v['addEventListener'] = function (hljtqz) {}, geu1v['contains'] = function (zqhjtl) {
      return null;
    }, geu1v['removeChild'] = function (o7tf5) {}, geu1v);
  }, jka2d['createShaderCondition'] = function (go1ev7) {
    var aqzjh = this;return function () {
      return aqzjh[go1ev7['replace']('this.', '')];
    };
  }, jka2d['EnvConfig'] = null, jka2d['window'] = null, jka2d['_preCreateElement'] = null, jka2d['_inited'] = !0x1, jka2d['wxRequest'] = null, jka2d['systemInfo'] = null, jka2d['version'] = '0.0.1', jka2d['isZiYu'] = !0x1, jka2d['isPosMsgYu'] = !0x1, jka2d['parseXMLFromString'] = function (azjqkh) {
    var lt95of;azjqkh = azjqkh['replace'](/>\s+</g, '><');try {
      lt95of = new _40y['Parser']['DOMParser']()['parseFromString'](azjqkh, 'text/xml');
    } catch (o7v1ge) {
      throw '需要引入xml解析库文件';
    }return lt95of;
  }, jka2d['idx'] = 0x1;var f1o7v9 = jka2d;function jka2d() {}tq9lf(d_$s8, 'laya.wx.mini.MiniImage'), d_$s8['prototype']['_loadImage'] = function (o5lf9) {
    var ve71o = !0x1;-0x1 == o5lf9['indexOf']('layaNativeDir/') && (ve71o = !0x0, o5lf9 = ljqzhk['formatURL'](o5lf9)), zjqahk['getFileInfo'](o5lf9) ? d_$s8['onCreateImage'](o5lf9, this, !ve71o) : -0x1 != o5lf9['indexOf']('http://') || -0x1 != o5lf9['indexOf']('https://') ? zjqahk['downImg'](o5lf9, new n0x_y3(d_$s8, d_$s8['onDownImgCallBack'], [o5lf9, this]), o5lf9) : d_$s8['onCreateImage'](o5lf9, this, !0x0);
  }, d_$s8['onDownImgCallBack'] = function (bzha, wimc, $b82) {
    $b82 ? wimc['onError'](null) : d_$s8['onCreateImage'](bzha, wimc);
  }, d_$s8['onCreateImage'] = function (im3rwc, irmc30, u6gv1) {
    var htzlq5;function xr3yc0() {
      htzlq5['onload'] = null, htzlq5['onerror'] = null, delete irmc30['imgCache'][im3rwc];
    }u6gv1 = (u6gv1 = void 0x0 === u6gv1 ? !0x1 : u6gv1) ? im3rwc : (u6gv1 = zjqahk['getFileInfo'](im3rwc)['md5'], zjqahk['getFileNativePath'](u6gv1)), null == irmc30['imgCache'] && (irmc30['imgCache'] = {});function zhjqk() {
      xr3yc0(), irmc30['onLoaded'](htzlq5);
    }function jzhklq() {
      xr3yc0(), irmc30['event']('error', 'Load image failed');
    }'nativeimage' == irmc30['_type'] ? ((htzlq5 = new d2s$ab['window']['Image']())['crossOrigin'] = '', htzlq5['onload'] = zhjqk, htzlq5['onerror'] = jzhklq, htzlq5['src'] = u6gv1, irmc30['imgCache'][im3rwc] = htzlq5) : new $sdba2['create'](u6gv1, { 'onload': zhjqk, 'onerror': jzhklq, 'onCreate': function (yn0x4_) {
        htzlq5 = yn0x4_, irmc30['imgCache'][im3rwc] = yn0x4_;
      } });
  };function d_$s8() {}tq9lf(pu6eg, 'laya.wx.mini.MiniInput'), pu6eg['_createInputElement'] = function () {
    y3xrc0['_initInput'](y3xrc0['area'] = d2s$ab['createElement']('textarea')), y3xrc0['_initInput'](y3xrc0['input'] = d2s$ab['createElement']('input')), y3xrc0['inputContainer'] = d2s$ab['createElement']('div'), y3xrc0['inputContainer']['style']['position'] = 'absolute', y3xrc0['inputContainer']['style']['zIndex'] = 0x186a0, d2s$ab['container']['appendChild'](y3xrc0['inputContainer']), y3xrc0['inputContainer']['setPos'] = function (f5ov9, bd2$a) {
      y3xrc0['inputContainer']['style']['left'] = f5ov9 + 'px', y3xrc0['inputContainer']['style']['top'] = bd2$a + 'px';
    }, bs2['stage']['on']('resize', null, pu6eg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t79o) {
      _40y['dispatchEvent'] && _40y['dispatchEvent']('resize');
    }), cxry30['_soundClass'] = miwc, cxry30['_musicClass'] = miwc, _40y['_videoClass'] = $kba2d;
  }, pu6eg['_onStageResize'] = function () {
    bs2['stage']['_canvasTransform']['identity']()['scale'](d2s$ab['width'] / akzhjq['canvas']['width'] / jak2h['getPixelRatio'](), d2s$ab['height'] / akzhjq['canvas']['height'] / jak2h['getPixelRatio']());
  }, pu6eg['wxinputFocus'] = function (kqzjha) {
    var r0ycx3 = y3xrc0['inputElement']['target'];r0ycx3 && !r0ycx3['editable'] || (f1o7v9['window']['wx']['offKeyboardConfirm'](), f1o7v9['window']['wx']['offKeyboardInput'](), f1o7v9['window']['wx']['showKeyboard']({ 'defaultValue': r0ycx3['text'], 'maxLength': r0ycx3['maxChars'], 'multiple': r0ycx3['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (zqkhja) {}, 'fail': function (fo9v1) {} }), f1o7v9['window']['wx']['onKeyboardConfirm'](function (f5l9t) {
      f5l9t = f5l9t ? f5l9t['value'] : '', (r0ycx3['text'] = f5l9t, r0ycx3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), f1o7v9['window']['wx']['onKeyboardInput'](function (ycrx03) {
      ycrx03 = ycrx03 ? ycrx03['value'] : '', r0ycx3['multiline'] || -0x1 == ycrx03['indexOf']('\x0a') ? (r0ycx3['text'] = ycrx03, r0ycx3['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, pu6eg['inputEnter'] = function () {
    y3xrc0['inputElement']['target']['focus'] = !0x1;
  }, pu6eg['wxinputblur'] = function () {
    pu6eg['hideKeyboard']();
  }, pu6eg['hideKeyboard'] = function () {
    f1o7v9['window']['wx']['offKeyboardConfirm'](), f1o7v9['window']['wx']['offKeyboardInput'](), f1o7v9['window']['wx']['hideKeyboard']({ 'success': function (fz5tql) {
        console['log']('隐藏键盘');
      }, 'fail': function (dabs) {
        console['log']('隐藏键盘出错:' + (dabs ? dabs['errMsg'] : ''));
      } });
  };var lzqjht = pu6eg;function pu6eg() {}tq9lf(n$8s4_, 'laya.wx.mini.MiniLoader'), (cy3r0 = n$8s4_['prototype'])['load'] = function (zfq, ov17e, f7ov, htl5qz, jkqhaz) {
    void 0x0 === f7ov && (f7ov = !0x0), void 0x0 === jkqhaz && (jkqhaz = !0x1);var ry0cm3 = this;0x0 === (ry0cm3['_url'] = zfq)['indexOf']('data:image') ? ry0cm3['_type'] = ov17e = 'image' : ry0cm3['_type'] = ov17e = ov17e || ry0cm3['getTypeFromUrl'](zfq), ry0cm3['_cache'] = f7ov, ry0cm3['_data'] = null;var hjazqk = 'ascii';-0x1 != zfq['indexOf']('.fnt') ? hjazqk = 'utf8' : 'arraybuffer' == ov17e && (hjazqk = '');var tl5o = yn_4['getFileExtension'](zfq);if (-0x1 != n$8s4_['_fileTypeArr']['indexOf'](tl5o)) f1o7v9['EnvConfig']['load']['call'](this, zfq, ov17e, f7ov, htl5qz, jkqhaz);else {
      if (zjqahk['getFileInfo'](zfq)) f1o7v9['EnvConfig']['load']['call'](this, zfq, ov17e, f7ov, htl5qz, jkqhaz);else {
        if (-0x1 != zfq['indexOf']('layaNativeDir/')) return f1o7v9['isZiYu'] ? (tl5o = zjqahk['ziyuFileData'][zfq], void ry0cm3['onLoaded'](tl5o)) : (cosnole['log']('read read'), void zjqahk['read'](zfq, hjazqk, new n0x_y3(n$8s4_, n$8s4_['onReadNativeCallBack'], [hjazqk, zfq, ov17e, f7ov, htl5qz, jkqhaz, ry0cm3])));tl5o = '' == ljqzhk['rootPath'] ? zfq : zfq['split'](ljqzhk['rootPath'])[0x0], -0x1 != zfq['indexOf']('http://') || -0x1 != zfq['indexOf']('https://') ? f1o7v9['EnvConfig']['load']['call'](ry0cm3, zfq, ov17e, f7ov, htl5qz, jkqhaz) : zjqahk['readFile'](tl5o, hjazqk, new n0x_y3(n$8s4_, n$8s4_['onReadNativeCallBack'], [hjazqk, zfq, ov17e, f7ov, htl5qz, jkqhaz, ry0cm3]), zfq);
      }
    }
  }, cy3r0['resMgrLoad'] = function ($2bkd, v7e1u, a2kbdj, gpu6e, l5zftq, zth, lhjqzt) {
    void 0x0 === a2kbdj && (a2kbdj = 0x0), void 0x0 === gpu6e && (gpu6e = !0x1), void 0x0 === l5zftq && (l5zftq = !0x1), void 0x0 === zth && (zth = 0x0), void 0x0 === lhjqzt && (lhjqzt = 0x3), -0x1 != $2bkd['indexOf']('mpack') && console['log']('=============resMgrLoad url:', $2bkd), f1o7v9['EnvConfig']['resMgrLoad']($2bkd, (f95to, f71o, vu1g7e) => {
      n$8s4_['prototype']['resMgrLoadCallBack'](f95to, f71o, vu1g7e, v7e1u);
    }, a2kbdj, gpu6e, l5zftq, zth, lhjqzt);
  }, cy3r0['resMgrLoadCallBack'] = function (qjht, ym3, jhkzaq, $sdab2) {
    console['log']('buff:::', qjht, jhkzaq, zjqahk['fileNativeDir'] + '///' + zjqahk['fileListName']), $sdab2(qjht, ym3, jhkzaq);
  }, cy3r0['clearRes'] = function (hzjqt, uv1g6) {
    this['clearRes'](hzjqt, uv1g6 = void 0x0 === uv1g6 ? !0x1 : uv1g6), uv1g6 = zjqahk['getFileInfo'](hzjqt), !uv1g6 || -0x1 == hzjqt['indexOf']('http://') && -0x1 == hzjqt['indexOf']('https://') || (hzjqt = uv1g6['md5'], uv1g6 = zjqahk['getFileNativePath'](hzjqt), zjqahk['remove'](uv1g6));
  }, n$8s4_['onReadNativeCallBack'] = function (eo7v19, zhjqkl, vu7e, kjaqh, rim03, _y8xn4, _xs8n4, zkjl, xy_48n) {
    void 0x0 === kjaqh && (kjaqh = !0x0), void 0x0 === _y8xn4 && (_y8xn4 = !0x1), (zkjl = void 0x0 === zkjl ? 0x0 : zkjl) ? 0x1 == zkjl && f1o7v9['EnvConfig']['load']['call'](_xs8n4, zhjqkl, vu7e, kjaqh, rim03, _y8xn4) : (zkjl = 'json' == vu7e || 'atlas' == vu7e ? f1o7v9['getJson'](xy_48n['data']) : 'xml' == vu7e ? yn_4['parseXMLFromString'](xy_48n['data']) : xy_48n['data'], _xs8n4['onLoaded'](zkjl), !f1o7v9['isZiYu'] && f1o7v9['isPosMsgYu'] && 'arraybuffer' != vu7e && wx['postMessage']({ 'url': zhjqkl, 'data': zkjl, 'isLoad': !0x0 }));
  }, zajkqh(n$8s4_, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var xy_n3 = n$8s4_;function n$8s4_() {}tq9lf(bhkja2, 'laya.wx.mini.MiniFileMgr', a2bjh), bhkja2['isLoadFile'] = function (xnry3) {
    return -0x1 != bhkja2['_fileTypeArr']['indexOf'](xnry3);
  }, bhkja2['getFileInfo'] = function (guv71e) {
    return guv71e = guv71e['split']('?')[0x0], guv71e = bhkja2['filesListObj'][guv71e], null == guv71e ? null : guv71e;
  }, bhkja2['onFileUpdate'] = function (bds8$, zhqlk) {
    bds8$ = bds8$['split']('/'), bds8$ = bds8$[bds8$['length'] - 0x1];var euv16 = bhkja2['getFileInfo'](zhqlk);null == euv16 ? bhkja2['onSaveFile'](zhqlk, bds8$) : euv16['readyUrl'] != zhqlk && bhkja2['remove'](bds8$, zhqlk);
  }, bhkja2['exits'] = function (zajkbh, r3icwm) {
    zajkbh = bhkja2['getFileNativePath'](zajkbh), bhkja2['fs']['getFileInfo']({ 'filePath': zajkbh, 'success': function (mcy3) {
        null != r3icwm && r3icwm['runWith']([0x0, mcy3]);
      }, 'fail': function (n_8$4) {
        null != r3icwm && r3icwm['runWith']([0x1, n_8$4]);
      } });
  }, bhkja2['read'] = function (c3ymr, s2b8d$, f9o5v7, qtlh) {
    void 0x0 === s2b8d$ && (s2b8d$ = 'ascill'), c3ymr = '' != (qtlh = void 0x0 === qtlh ? '' : qtlh) ? bhkja2['getFileNativePath'](c3ymr) : c3ymr, bhkja2['fs']['readFile']({ 'filePath': c3ymr, 'encoding': s2b8d$, 'success': function (hak2bj) {
        null != f9o5v7 && f9o5v7['runWith']([0x0, hak2bj]);
      }, 'fail': function (kjabz) {
        kjabz && '' != qtlh ? bhkja2['down'](qtlh, s2b8d$, f9o5v7, qtlh) : null != f9o5v7 && f9o5v7['runWith']([0x1]);
      } });
  }, bhkja2['readNativeFile'] = function (_ns$84, bdjak2) {
    bhkja2['fs']['readFile']({ 'filePath': _ns$84, 'encoding': '', 'success': function (bak2) {
        null != bdjak2 && bdjak2['runWith']([0x0]);
      }, 'fail': function (x_0n4y) {
        null != bdjak2 && bdjak2['runWith']([0x1]);
      } });
  }, bhkja2['down'] = function (t5f7, of5l, d$sb28, cwimr3) {
    void 0x0 === of5l && (of5l = 'ascill'), void 0x0 === cwimr3 && (cwimr3 = '');var ajhz = bhkja2['getFileNativePath'](cwimr3);bhkja2['wxdown']({ 'url': t5f7, 'filePath': ajhz, 'success': function (go71) {
        0xc8 === go71['statusCode'] && bhkja2['readFile'](go71['filePath'], of5l, d$sb28, cwimr3);
      }, 'fail': function (u6eg1p) {
        null != d$sb28 && d$sb28['runWith']([0x1, u6eg1p]);
      } })['onProgressUpdate'](function (yc03xr) {
      null != d$sb28 && d$sb28['runWith']([0x2, yc03xr['progress']]);
    });
  }, bhkja2['readFile'] = function (dsab2$, ab$2s, $d4s8_, evog1) {
    void 0x0 === evog1 && (evog1 = ''), bhkja2['fs']['readFile']({ 'filePath': dsab2$, 'encoding': ab$2s = void 0x0 === ab$2s ? 'ascill' : ab$2s, 'success': function (ztjqlh) {
        -0x1 == dsab2$['indexOf']('http://') && -0x1 == dsab2$['indexOf']('https://') || bhkja2['onFileUpdate'](dsab2$, evog1), null != $d4s8_ && $d4s8_['runWith']([0x0, ztjqlh]);
      }, 'fail': function (_s4n$) {
        _s4n$ && null != $d4s8_ && $d4s8_['runWith']([0x1, _s4n$]);
      } });
  }, bhkja2['downImg'] = function ($n48s, jklzq, ym3c0r) {
    void 0x0 === ym3c0r && (ym3c0r = ''), bhkja2['wxdown']({ 'url': $n48s, 'success': function ($s48_) {
        0xc8 === $s48_['statusCode'] && bhkja2['copyFile']($s48_['tempFilePath'], ym3c0r, jklzq);
      }, 'fail': function (bhazj) {
        null != jklzq && jklzq['runWith']([0x1, bhazj]);
      } });
  }, bhkja2['copyFile'] = function ($82sd4, ft5qlz, kb2da) {
    var jbkh2a = $82sd4['split']('/'),
        a2sd = jbkh2a[jbkh2a['length'] - 0x1];ft5qlz['split']('?')[0x0];var f5t9lq = bhkja2['getFileInfo'](ft5qlz);jbkh2a = bhkja2['getFileNativePath'](a2sd), bhkja2['fs']['copyFile']({ 'srcPath': $82sd4, 'destPath': jbkh2a, 'success': function (kazqj) {
        f5t9lq ? f5t9lq['readyUrl'] != ft5qlz && bhkja2['remove'](a2sd, ft5qlz, kb2da) : (bhkja2['onSaveFile'](ft5qlz, a2sd), null != kb2da && kb2da['runWith']([0x0]));
      }, 'fail': function (kqzja) {
        null != kb2da && kb2da['runWith']([0x1, kqzja]);
      } });
  }, bhkja2['getFileNativePath'] = function (ft79) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ft79;
  }, bhkja2['remove'] = function (r3xcy0, fzql5, tqfl59) {
    void 0x0 === fzql5 && (fzql5 = '');var hqljz = bhkja2['getFileInfo'](fzql5),
        g17eov = bhkja2['getFileNativePath'](hqljz['md5']);bs2['loader']['clearRes'](hqljz['readyUrl']), bhkja2['fs']['unlink']({ 'filePath': g17eov, 'success': function (nr3x0) {
        '' != fzql5 && bhkja2['onSaveFile'](fzql5, r3xcy0), null != tqfl59 && tqfl59['runWith']([0x0]);
      }, 'fail': function (fo75v) {} });
  }, bhkja2['onSaveFile'] = function (qklhj, yx3c) {
    var _s4$8d = qklhj['split']('?')[0x0];bhkja2['filesListObj'][_s4$8d] = { 'md5': yx3c, 'readyUrl': qklhj }, bhkja2['fs']['writeFile']({ 'filePath': bhkja2['fileNativeDir'] + '/' + bhkja2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bhkja2['filesListObj']), 'success': function (kzjahb) {
        console['log']('写入测试测试成功：', kzjahb);
      }, 'fail': function (g71uv) {
        console['log']('写入测试测试失败：', g71uv);
      } });
  }, bhkja2['existDir'] = function (u7, _yn30) {
    bhkja2['fs']['mkdir']({ 'dirPath': u7, 'success': function (tqf9) {
        null != _yn30 && _yn30['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (tl9f) {
        -0x1 != tl9f['errMsg']['indexOf']('file already exists') ? bhkja2['readSync'](bhkja2['fileListName'], 'utf8', _yn30) : null != _yn30 && _yn30['runWith']([0x1, tl9f]);
      } });
  }, bhkja2['readSync'] = function (u1pge, qlthjz, c0irm3, n$s_84) {
    void 0x0 === qlthjz && (qlthjz = 'ascill'), void 0x0 === n$s_84 && (n$s_84 = ''), qlthjz = bhkja2['getFileNativePath'](u1pge);var e9v1o;try {
      e9v1o = bhkja2['fs']['readFileSync'](qlthjz), null != c0irm3 && c0irm3['runWith']([0x0, { 'data': e9v1o }]);
    } catch (bjkhaz) {
      null != c0irm3 && c0irm3['runWith']([0x1]);
    }
  }, bhkja2['readCache'] = function () {}, bhkja2['writeCache'] = function (lhjkq) {
    var gpeu = readyUrl['split']('?')[0x0];bhkja2['filesListObj'][gpeu] = { 'md5': md5Name, 'readyUrl': readyUrl }, bhkja2['fs']['writeFile']({ 'filePath': bhkja2['fileNativeDir'] + '/' + bhkja2['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bhkja2['filesListObj']), 'success': function ($asdb) {}, 'fail': function (f1ov9) {} });
  }, bhkja2['setNativeFileDir'] = function (puge16) {
    bhkja2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + puge16;
  }, bhkja2['filesListObj'] = {}, bhkja2['fileNativeDir'] = null, bhkja2['fileListName'] = 'layaairfiles.txt', bhkja2['ziyuFileData'] = {}, zajkqh(bhkja2, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var zjqahk = bhkja2;function bhkja2() {
    bhkja2['__super']['call'](this);
  }tq9lf(ad$bs, 'laya.wx.mini.MiniSound', a2bjh), (cy3r0 = ad$bs['prototype'])['load'] = function (g1e7ov) {
    var x4n8s_ = this,
        ft5ol;function vo7f() {
      if (null != ad$bs['_null']) x4n8s_['_sound']['onCanplay'](ad$bs['_null']), x4n8s_['_sound']['onError'](ad$bs['_null']);else try {
        x4n8s_['_sound']['onCanplay'](null), x4n8s_['_sound']['onError'](null), ad$bs['_null'] = null;
      } catch (qh5) {
        console['warn']('[wxmini] _clearSound:' + qh5), x4n8s_['_sound']['onCanplay'](gu6ve), x4n8s_['_sound']['onError'](gu6ve), ad$bs['_null'] = gu6ve;
      }
    }function gu6ve() {}g1e7ov = ljqzhk['formatURL'](g1e7ov), this['url'] = g1e7ov, ad$bs['_audioCache'][g1e7ov] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      vo7f(), ft5ol['loaded'] = !0x0, ft5ol['event']('complete'), ad$bs['_audioCache'][ft5ol['url']] = ft5ol;
    }), this['_sound']['onError'](function (cymr) {
      console['error']('errCode=' + cymr['errCode'] + '  errMsg=' + cymr['errMsg']), vo7f(), ft5ol['event']('error');
    }), this['_sound']['src'] = g1e7ov, ft5ol = this);
  }, cy3r0['play'] = function (yn04_x, tzjq) {
    void 0x0 === yn04_x && (yn04_x = 0x0), void 0x0 === tzjq && (tzjq = 0x0), (o59vf7 = this['url'] == cxry30['_tMusic'] ? (ad$bs['_musicAudio'] || (ad$bs['_musicAudio'] = ad$bs['_createSound']()), ad$bs['_musicAudio']) : ad$bs['_createSound']())['src'] = this['url'];var o59vf7 = new fql9(o59vf7);return o59vf7['url'] = this['url'], o59vf7['loops'] = tzjq, o59vf7['startTime'] = yn04_x, o59vf7['play'](), cxry30['addChannel'](o59vf7), o59vf7;
  }, cy3r0['dispose'] = function () {
    var ov79f1 = ad$bs['_audioCache'][this['url']];ov79f1 && (ov79f1['src'] = '', delete ad$bs['_audioCache'][this['url']]);
  }, _8d4$(0x0, cy3r0, 'duration', function () {
    return this['_sound']['duration'];
  }), ad$bs['_createSound'] = function () {
    return ad$bs['_id']++, f1o7v9['window']['wx']['createInnerAudioContext']();
  }, ad$bs['_musicAudio'] = null, ad$bs['_id'] = 0x0, ad$bs['_audioCache'] = {}, ad$bs['_null'] = void 0x0;var miwc = ad$bs;function ad$bs() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, ad$bs['__super']['call'](this), this['_sound'] = ad$bs['_createSound']();
  }var cy3r0;tq9lf(y03_n, 'laya.wx.mini.MiniSoundChannel', u7g1e), (zajkqh = y03_n['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (bs2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, zajkqh['__onNull'] = function () {}, zajkqh['play'] = function () {
    this['isStopped'] = !0x1, cxry30['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, zajkqh['stop'] = function () {
    if (this['isStopped'] = !0x0, cxry30['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != y03_n['_null']) this['_audio']['onEnded'](y03_n['_null']);else try {
        this['_audio']['onEnded'](null), y03_n['_null'] = null;
      } catch (z5ht) {
        console['warn']('[wxmini] stop:' + z5ht), this['_audio']['onEnded'](yn_4['bind'](this['__onNull'], this)), y03_n['_null'] = yn_4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, zajkqh['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, zajkqh['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, cxry30['addChannel'](this), this['_audio']['play']());
  }, _8d4$(0x0, zajkqh, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), _8d4$(0x0, zajkqh, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), _8d4$(0x0, zajkqh, 'volume', function () {
    return 0x1;
  }, function (xy3rc) {}), y03_n['_null'] = void 0x0;var fql9 = y03_n;function y03_n(lqkhzj) {
    this['_audio'] = null, this['_onEnd'] = null, y03_n['__super']['call'](this), this['_audio'] = lqkhzj, this['_onEnd'] = yn_4['bind'](this['__onEnd'], this), lqkhzj['onEnded'](this['_onEnd']);
  }tq9lf(_03, 'laya.wx.mini.MiniVideo'), (a2bjh = _03['prototype'])['on'] = function (s28b$d, y48xn_, $adbs) {
    'loadedmetadata' == s28b$d ? (this['onPlayFunc'] = $adbs['bind'](y48xn_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this)) : 'ended' == s28b$d && (this['onEndedFunC'] = $adbs['bind'](y48xn_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this)), this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
  }, a2bjh['onTimeUpdateFunc'] = function (ev91) {
    this['position'] = ev91['position'], this['_duration'] = ev91['duration'];
  }, a2bjh['onPlayFunction'] = function () {
    this['videoElement'] && (this['videoElement']['readyState'] = 0xc8), console['log']('=====视频加载完成========'), null != this['onPlayFunc'] && this['onPlayFunc']();
  }, a2bjh['onended'] = function (s$28, n0_3x) {
    this['onEndedFunC'] = n0_3x['bind'](s$28), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
  }, a2bjh['onEndedFunction'] = function () {
    this['videoElement'] && (this['videoend'] = !0x0, console['log']('=====视频播放完毕========'), null != this['onEndedFunC'] && this['onEndedFunC']());
  }, a2bjh['off'] = function (qht5, qtfl95, xn04y_) {
    'loadedmetadata' == qht5 ? (this['onPlayFunc'] = xn04y_['bind'](qtfl95), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this)) : 'ended' == qht5 && (this['onEndedFunC'] = xn04y_['bind'](qtfl95), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
  }, a2bjh['load'] = function (y30r) {
    this['videoElement'] && (this['videoElement']['src'] = y30r);
  }, a2bjh['play'] = function () {
    this['videoElement'] && (this['videoend'] = !0x1, this['videoElement']['play']());
  }, a2bjh['pause'] = function () {
    this['videoElement'] && (this['videoend'] = !0x0, this['videoElement']['pause']());
  }, a2bjh['size'] = function (xyn03r, lqhj) {
    this['videoElement'] && (this['videoElement']['width'] = xyn03r, this['videoElement']['height'] = lqhj);
  }, a2bjh['destroy'] = function () {
    this['videoElement'] && this['videoElement']['destroy'](), this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = !0x1, this['videourl'] = null;
  }, a2bjh['reload'] = function () {
    this['videoElement'] && (this['videoElement']['src'] = this['videourl']);
  }, _8d4$(0x0, a2bjh, 'duration', function () {
    return this['_duration'];
  }), _8d4$(0x0, a2bjh, 'currentTime', function () {
    return this['videoElement'] ? this['videoElement']['initialTime'] : 0x0;
  }, function (s$8n4) {
    this['videoElement'] && (this['videoElement']['initialTime'] = s$8n4);
  }), _8d4$(0x0, a2bjh, 'videoWidth', function () {
    return this['videoElement'] ? this['videoElement']['width'] : 0x0;
  }), _8d4$(0x0, a2bjh, 'videoHeight', function () {
    return this['videoElement'] ? this['videoElement']['height'] : 0x0;
  }), _8d4$(0x0, a2bjh, 'ended', function () {
    return this['videoend'];
  }), _8d4$(0x0, a2bjh, 'loop', function () {
    return !!this['videoElement'] && this['videoElement']['loop'];
  }, function (i0r3mc) {
    this['videoElement'] && (this['videoElement']['loop'] = i0r3mc);
  }), _8d4$(0x0, a2bjh, 'playbackRate', function () {
    return this['videoElement'] ? this['videoElement']['playbackRate'] : 0x0;
  }, function (_48xs) {
    this['videoElement'] && (this['videoElement']['playbackRate'] = _48xs);
  }), _8d4$(0x0, a2bjh, 'muted', function () {
    return !!this['videoElement'] && this['videoElement']['muted'];
  }, function (o719fv) {
    this['videoElement'] && (this['videoElement']['muted'] = o719fv);
  }), _8d4$(0x0, a2bjh, 'paused', function () {
    return !!this['videoElement'] && this['videoElement']['paused'];
  }), _8d4$(0x0, a2bjh, 'x', function () {
    return this['videoElement'] ? this['videoElement']['x'] : 0x0;
  }, function (yx30cr) {
    this['videoElement'] && (this['videoElement']['x'] = yx30cr);
  }), _8d4$(0x0, a2bjh, 'y', function () {
    return this['videoElement'] ? this['videoElement']['y'] : 0x0;
  }, function (cw3ri) {
    this['videoElement'] && (this['videoElement']['y'] = cw3ri);
  }), _8d4$(0x0, a2bjh, 'currentSrc', function () {
    return this['videoElement']['src'];
  }), _8d4$(0x0, a2bjh, 'src', function () {
    return this['videoElement'] ? this['videoElement']['src'] : 0x0;
  }, function (bas$d2) {
    this['videoElement'] && (this['videoElement']['src'] = bas$d2);
  }), _8d4$(0x0, a2bjh, 'controls', function () {
    if (this['videoElement']) return this['videoElement']['controls'];
  }, function (t59fo) {
    this['videoElement'] && (this['videoElement']['controls'] = t59fo);
  }), _8d4$(0x0, a2bjh, 'autoplay', function () {
    if (this['videoElement']) return this['videoElement']['autoplay'];
  }, function (dk2jb) {
    this['videoElement'] && (this['videoElement']['autoplay'] = dk2jb);
  });var $kba2d = _03;function _03() {
    this['videoend'] = !0x1, this['videourl'] = '', this['videoElement'] = f1o7v9['window']['wx']['createVideo']({ 'showCenterPlayBtn': !0x1, 'showProgressInControlMode': !0x1, 'objectFit': 'fill' });
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (hakzb, kb$ad2) {
  'use strict';

  for (var rx30y in Object['defineProperty'](kb$ad2, '__esModule', { 'value': !0x0 }), Laya) {
    var m0y3r = Laya[rx30y];m0y3r && m0y3r['__isclass'] && (kb$ad2[rx30y] = m0y3r);
  }
});