var v = wx.$d;
!function (ex50d4, t389$n) {
  t389$n['un'], t389$n['uns'];var jyqbaf = t389$n['static'],
      _7p6mz1 = t389$n['class'],
      z67p_ = t389$n['getset'];t389$n['__newvec'];var de0gxo5 = laya['utils']['Browser'],
      qvhfyro = (laya['events']['Event'], laya['events']['EventDispatcher']),
      yvfh = laya['resource']['HTMLImage'],
      m71klu = laya['utils']['Handler'],
      cabuli2 = laya['display']['Input'],
      e3wn9x4 = laya['net']['Loader'];laya['maths']['Matrix'];var xg04 = laya['renders']['Render'],
      jcub2a = laya['utils']['RunDriver'];laya['media']['Sound'];var ibca2j = laya['media']['SoundChannel'],
      n98w4x3 = laya['media']['SoundManager'],
      uk6m1 = (laya['display']['Stage'], laya['net']['URL']),
      a2cuibl = laya['utils']['Utils'],
      ewd0x4 = (_7p6mz1(oqyfrv, 'laya.wx.mini.MiniAdpter'), oqyfrv['getJson'] = function (qjaryvf) {
    return JSON['parse'](qjaryvf);
  }, oqyfrv['init'] = function (zp1k7m6, j2bif) {
    void 0x0 === zp1k7m6 && (zp1k7m6 = !0x1), void 0x0 === j2bif && (j2bif = !0x1), oqyfrv['_inited'] || (oqyfrv['window'] = ex50d4)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (oqyfrv['_inited'] = !0x0, oqyfrv['isZiYu'] = j2bif, oqyfrv['isPosMsgYu'] = zp1k7m6, oqyfrv['EnvConfig'] = {}, oqyfrv['isZiYu'] || (jyfrvh['setNativeFileDir']('/layaairGame'), jyfrvh['existDir'](jyfrvh['fileNativeDir'], m71klu['create'](oqyfrv, oqyfrv['onMkdirCallBack']))), oqyfrv['window']['focus'] = function () {}, t389$n['getUrlPath'] = function () {}, oqyfrv['window']['logtime'] = function (w9nx3e4) {}, oqyfrv['window']['alertTimeLog'] = function (bulck2) {}, oqyfrv['window']['resetShareInfo'] = function () {}, oqyfrv['window']['CanvasRenderingContext2D'] = function () {}, oqyfrv['window']['CanvasRenderingContext2D']['prototype'] = oqyfrv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], oqyfrv['window']['document']['body']['appendChild'] = function () {}, oqyfrv['EnvConfig']['pixelRatioInt'] = 0x0, jcub2a['getPixelRatio'] = oqyfrv['pixelRatio'], oqyfrv['_preCreateElement'] = de0gxo5['createElement'], de0gxo5['createElement'] = oqyfrv['createElement'], jcub2a['createShaderCondition'] = oqyfrv['createShaderCondition'], a2cuibl['parseXMLFromString'] = oqyfrv['parseXMLFromString'], cabuli2['_createInputElement'] = jb2arqf['_createInputElement'], oqyfrv['EnvConfig']['load'] = e3wn9x4['prototype']['load'], e3wn9x4['prototype']['load'] = lu17m['prototype']['load'], oqyfrv['isZiYu'] && zp1k7m6 && wx['onMessage'](function (w3t49) {
      w3t49['isLoad'] && (jyfrvh['ziyuFileData'][w3t49['url']] = w3t49['data']);
    }));
  }, oqyfrv['onMkdirCallBack'] = function (ew0d3x, rvqayj) {
    ew0d3x || (jyfrvh['filesListObj'] = JSON['parse'](rvqayj['data']));
  }, oqyfrv['pixelRatio'] = function () {
    if (!oqyfrv['EnvConfig']['pixelRatioInt']) try {
      var bcklui2 = wx['getSystemInfoSync']();return oqyfrv['EnvConfig']['pixelRatioInt'] = bcklui2['pixelRatio'], bcklui2['pixelRatio'];
    } catch (arfyb) {}return oqyfrv['EnvConfig']['pixelRatioInt'];
  }, oqyfrv['createElement'] = function (cukl17) {
    var bjaicf;if ('canvas' == cukl17) return 0x1 == oqyfrv['idx'] ? oqyfrv['isZiYu'] ? (bjaicf = sharedCanvas)['style'] = {} : bjaicf = ex50d4['canvas'] : bjaicf = ex50d4['wx']['createCanvas'](), oqyfrv['idx']++, bjaicf;if ('textarea' == cukl17 || 'input' == cukl17) return oqyfrv['onCreateInput'](cukl17);if ('div' != cukl17) return oqyfrv['_preCreateElement'](cukl17);return cukl17 = oqyfrv['_preCreateElement'](cukl17), (cukl17['contains'] = function (rqvfjy) {
      return null;
    }, cukl17['removeChild'] = function (c2lki) {}, cukl17);
  }, oqyfrv['onCreateInput'] = function (ik1c2l) {
    return ik1c2l = oqyfrv['_preCreateElement'](ik1c2l), (ik1c2l['focus'] = jb2arqf['wxinputFocus'], ik1c2l['blur'] = jb2arqf['wxinputblur'], ik1c2l['style'] = {}, ik1c2l['value'] = 0x0, ik1c2l['parentElement'] = {}, ik1c2l['placeholder'] = {}, ik1c2l['type'] = {}, ik1c2l['setColor'] = function (vfyhrjq) {}, ik1c2l['setType'] = function (aujib2c) {}, ik1c2l['setFontFace'] = function (frjby) {}, ik1c2l['addEventListener'] = function (qjrbfa) {}, ik1c2l['contains'] = function (w94ne3) {
      return null;
    }, ik1c2l['removeChild'] = function (x9wen4) {}, ik1c2l);
  }, oqyfrv['createShaderCondition'] = function (vjyrhqf) {
    var rofqyv = this;return function () {
      return rofqyv[vjyrhqf['replace']('this.', '')];
    };
  }, oqyfrv['EnvConfig'] = null, oqyfrv['window'] = null, oqyfrv['_preCreateElement'] = null, oqyfrv['_inited'] = !0x1, oqyfrv['wxRequest'] = null, oqyfrv['systemInfo'] = null, oqyfrv['version'] = '0.0.1', oqyfrv['isZiYu'] = !0x1, oqyfrv['isPosMsgYu'] = !0x1, oqyfrv['parseXMLFromString'] = function (lkpm67) {
    var gd50xeo;lkpm67 = lkpm67['replace'](/>\s+</g, '><');try {
      gd50xeo = new ex50d4['Parser']['DOMParser']()['parseFromString'](lkpm67, 'text/xml');
    } catch (w8tn$39) {
      throw '需要引入xml解析库文件';
    }return gd50xeo;
  }, oqyfrv['idx'] = 0x1, oqyfrv);function oqyfrv() {}_7p6mz1(n98t3, 'laya.wx.mini.MiniImage'), n98t3['prototype']['_loadImage'] = function (y5go0v) {
    var lab2icu = !0x1;-0x1 == y5go0v['indexOf']('layaNativeDir/') && (lab2icu = !0x0, y5go0v = uk6m1['formatURL'](y5go0v)), jyfrvh['getFileInfo'](y5go0v) ? n98t3['onCreateImage'](y5go0v, this, !lab2icu) : -0x1 != y5go0v['indexOf']('http://') || -0x1 != y5go0v['indexOf']('https://') ? jyfrvh['downImg'](y5go0v, new m71klu(n98t3, n98t3['onDownImgCallBack'], [y5go0v, this]), y5go0v) : n98t3['onCreateImage'](y5go0v, this, !0x0);
  }, n98t3['onDownImgCallBack'] = function (e9w3dx4, x3948n, vo5yrhq) {
    vo5yrhq ? x3948n['onError'](null) : n98t3['onCreateImage'](e9w3dx4, x3948n);
  }, n98t3['onCreateImage'] = function (n9$t38, ulikm, w3x48) {
    var roqhf, yarjqfb;function mckl17u() {
      yarjqfb['onload'] = null, yarjqfb['onerror'] = null, delete ulikm['imgCache'][n9$t38];
    }roqhf = (w3x48 = void 0x0 === w3x48 ? !0x1 : w3x48) ? n9$t38 : (oxd5 = jyfrvh['getFileInfo'](n9$t38)['md5'], jyfrvh['getFileNativePath'](oxd5)), null == ulikm['imgCache'] && (ulikm['imgCache'] = {}), w3x48 = function () {
      mckl17u(), ulikm['onLoaded'](yarjqfb);
    };var oxd5 = function () {
      mckl17u(), ulikm['event']('error', 'Load image failed');
    };'nativeimage' == ulikm['_type'] ? ((yarjqfb = new de0gxo5['window']['Image']())['crossOrigin'] = '', yarjqfb['onload'] = w3x48, yarjqfb['onerror'] = oxd5, yarjqfb['src'] = roqhf, ulikm['imgCache'][n9$t38] = yarjqfb) : new yvfh['create'](roqhf, { 'onload': w3x48, 'onerror': oxd5, 'onCreate': function (qarfjb2) {
        yarjqfb = qarfjb2, ulikm['imgCache'][n9$t38] = qarfjb2;
      } });
  };function n98t3() {}var jb2arqf = (_7p6mz1(wed49, 'laya.wx.mini.MiniInput'), wed49['_createInputElement'] = function () {
    cabuli2['_initInput'](cabuli2['area'] = de0gxo5['createElement']('textarea')), cabuli2['_initInput'](cabuli2['input'] = de0gxo5['createElement']('input')), cabuli2['inputContainer'] = de0gxo5['createElement']('div'), cabuli2['inputContainer']['style']['position'] = 'absolute', cabuli2['inputContainer']['style']['zIndex'] = 0x186a0, de0gxo5['container']['appendChild'](cabuli2['inputContainer']), cabuli2['inputContainer']['setPos'] = function (xn43we9, rfjq2a) {
      cabuli2['inputContainer']['style']['left'] = xn43we9 + 'px', cabuli2['inputContainer']['style']['top'] = rfjq2a + 'px';
    }, t389$n['stage']['on']('resize', null, wed49['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e0x43w) {
      ex50d4['dispatchEvent'] && ex50d4['dispatchEvent']('resize');
    }), n98w4x3['_soundClass'] = cukbi, n98w4x3['_musicClass'] = cukbi;
  }, wed49['_onStageResize'] = function () {
    t389$n['stage']['_canvasTransform']['identity']()['scale'](de0gxo5['width'] / xg04['canvas']['width'] / jcub2a['getPixelRatio'](), de0gxo5['height'] / xg04['canvas']['height'] / jcub2a['getPixelRatio']());
  }, wed49['wxinputFocus'] = function (w83$9tn) {
    var bikc2lu = cabuli2['inputElement']['target'];bikc2lu && !bikc2lu['editable'] || (ewd0x4['window']['wx']['offKeyboardConfirm'](), ewd0x4['window']['wx']['offKeyboardInput'](), ewd0x4['window']['wx']['showKeyboard']({ 'defaultValue': bikc2lu['text'], 'maxLength': bikc2lu['maxChars'], 'multiple': bikc2lu['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (xw39d) {}, 'fail': function (ulmik) {} }), ewd0x4['window']['wx']['onKeyboardConfirm'](function (oghv5ry) {
      oghv5ry = oghv5ry ? oghv5ry['value'] : '', (bikc2lu['text'] = oghv5ry, bikc2lu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), ewd0x4['window']['wx']['onKeyboardInput'](function (ex043w) {
      ex043w = ex043w ? ex043w['value'] : '', bikc2lu['multiline'] || -0x1 == ex043w['indexOf']('\x0a') ? (bikc2lu['text'] = ex043w, bikc2lu['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, wed49['inputEnter'] = function () {
    cabuli2['inputElement']['target']['focus'] = !0x1;
  }, wed49['wxinputblur'] = function () {
    wed49['hideKeyboard']();
  }, wed49['hideKeyboard'] = function () {
    ewd0x4['window']['wx']['offKeyboardConfirm'](), ewd0x4['window']['wx']['offKeyboardInput'](), ewd0x4['window']['wx']['hideKeyboard']({ 'success': function (v5ghoyr) {
        console['log']('隐藏键盘');
      }, 'fail': function (t$w893n) {
        console['log']('隐藏键盘出错:' + (t$w893n ? t$w893n['errMsg'] : ''));
      } });
  }, wed49);function wed49() {}var lu17m = function () {
    function lm76u() {}_7p6mz1(lm76u, 'laya.wx.mini.MiniLoader');var j2faqrb = lm76u['prototype'];return j2faqrb['load'] = function (m671uk, oryvq, w0xd34, xn9w3e4, bijfa2) {
      void 0x0 === w0xd34 && (w0xd34 = !0x0), void 0x0 === bijfa2 && (bijfa2 = !0x1);var tw$8 = this;0x0 === (tw$8['_url'] = m671uk)['indexOf']('data:image') ? tw$8['_type'] = oryvq = 'image' : tw$8['_type'] = oryvq = oryvq || tw$8['getTypeFromUrl'](m671uk), tw$8['_cache'] = w0xd34, tw$8['_data'] = null;var gx40e5d = 'ascii';-0x1 != m671uk['indexOf']('.fnt') ? gx40e5d = 'utf8' : 'arraybuffer' == oryvq && (gx40e5d = '');var oxgd50e = a2cuibl['getFileExtension'](m671uk);if (-0x1 != lm76u['_fileTypeArr']['indexOf'](oxgd50e)) ewd0x4['EnvConfig']['load']['call'](this, m671uk, oryvq, w0xd34, xn9w3e4, bijfa2);else {
        if (jyfrvh['getFileInfo'](m671uk)) ewd0x4['EnvConfig']['load']['call'](this, m671uk, oryvq, w0xd34, xn9w3e4, bijfa2);else {
          if (-0x1 != m671uk['indexOf']('layaNativeDir/')) {
            if (ewd0x4['isZiYu']) {
              var ogvy0 = jyfrvh['ziyuFileData'][m671uk];return void tw$8['onLoaded'](ogvy0);
            }return cosnole['log']('read read'), void jyfrvh['read'](m671uk, gx40e5d, new m71klu(lm76u, lm76u['onReadNativeCallBack'], [gx40e5d, m671uk, oryvq, w0xd34, xn9w3e4, bijfa2, tw$8]));
          }ogvy0 = '' == uk6m1['rootPath'] ? m671uk : m671uk['split'](uk6m1['rootPath'])[0x0], -0x1 != m671uk['indexOf']('http://') || -0x1 != m671uk['indexOf']('https://') ? ewd0x4['EnvConfig']['load']['call'](tw$8, m671uk, oryvq, w0xd34, xn9w3e4, bijfa2) : jyfrvh['readFile'](ogvy0, gx40e5d, new m71klu(lm76u, lm76u['onReadNativeCallBack'], [gx40e5d, m671uk, oryvq, w0xd34, xn9w3e4, bijfa2, tw$8]), m671uk);
        }
      }
    }, j2faqrb['resMgrLoad'] = function (kz71p6m, dx394w, ry5hoq, f2ajibq, we43xn9, yrjhf, l176mpk) {
      void 0x0 === ry5hoq && (ry5hoq = 0x0), void 0x0 === f2ajibq && (f2ajibq = !0x1), void 0x0 === we43xn9 && (we43xn9 = !0x1), void 0x0 === yrjhf && (yrjhf = 0x0), void 0x0 === l176mpk && (l176mpk = 0x3), -0x1 != kz71p6m['indexOf']('mpack') && console['log']('=============resMgrLoad url:', kz71p6m), ewd0x4['EnvConfig']['resMgrLoad'](kz71p6m, (ew493d, ho50gy, il1ck2u) => {
        lm76u['prototype']['resMgrLoadCallBack'](ew493d, ho50gy, il1ck2u, dx394w);
      }, ry5hoq, f2ajibq, we43xn9, yrjhf, l176mpk);
    }, j2faqrb['resMgrLoadCallBack'] = function (l7k1p6, h5ygov, ubclk2, qyfbarj) {
      console['log']('buff:::', l7k1p6, ubclk2, jyfrvh['fileNativeDir'] + '///' + jyfrvh['fileListName']), qyfbarj(l7k1p6, h5ygov, ubclk2);
    }, j2faqrb['clearRes'] = function (abqif2j, dgohe0) {
      this['clearRes'](abqif2j, dgohe0 = void 0x0 === dgohe0 ? !0x1 : dgohe0), dgohe0 = jyfrvh['getFileInfo'](abqif2j), !dgohe0 || -0x1 == abqif2j['indexOf']('http://') && -0x1 == abqif2j['indexOf']('https://') || (dgohe0 = dgohe0['md5'], dgohe0 = jyfrvh['getFileNativePath'](dgohe0), jyfrvh['remove'](dgohe0));
    }, lm76u['onReadNativeCallBack'] = function (o0ghde5, wnt93$8, yrvhj, ficbja, ged04x3, gh5eo, cbiafj2, xog0d5e, jqfbay) {
      void 0x0 === ficbja && (ficbja = !0x0), void 0x0 === gh5eo && (gh5eo = !0x1), (xog0d5e = void 0x0 === xog0d5e ? 0x0 : xog0d5e) ? 0x1 == xog0d5e && ewd0x4['EnvConfig']['load']['call'](cbiafj2, wnt93$8, yrvhj, ficbja, ged04x3, gh5eo) : (jqfbay = 'json' == yrvhj || 'atlas' == yrvhj ? ewd0x4['getJson'](jqfbay['data']) : 'xml' == yrvhj ? a2cuibl['parseXMLFromString'](jqfbay['data']) : jqfbay['data'], cbiafj2['onLoaded'](jqfbay), !ewd0x4['isZiYu'] && ewd0x4['isPosMsgYu'] && 'arraybuffer' != yrvhj && wx['postMessage']({ 'url': wnt93$8, 'data': jqfbay, 'isLoad': !0x0 }));
    }, jyqbaf(lm76u, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lm76u;
  }(),
      jyfrvh = (_7p6mz1(jfyvqh, 'laya.wx.mini.MiniFileMgr', qvhfyro), jfyvqh['isLoadFile'] = function (nw98$) {
    return -0x1 != jfyvqh['_fileTypeArr']['indexOf'](nw98$);
  }, jfyvqh['getFileInfo'] = function (k1u6ml) {
    return k1u6ml = k1u6ml['split']('?')[0x0], k1u6ml = jfyvqh['filesListObj'][k1u6ml], null == k1u6ml ? null : k1u6ml;
  }, jfyvqh['onFileUpdate'] = function (yr5ghv, qyrfbj) {
    var qovyrfh = yr5ghv['split']('/');yr5ghv = qovyrfh[qovyrfh['length'] - 0x1], qovyrfh = jfyvqh['getFileInfo'](qyrfbj), null == qovyrfh ? jfyvqh['onSaveFile'](qyrfbj, yr5ghv) : qovyrfh['readyUrl'] != qyrfbj && jfyvqh['remove'](yr5ghv, qyrfbj);
  }, jfyvqh['exits'] = function (zmp67k, uk76m) {
    zmp67k = jfyvqh['getFileNativePath'](zmp67k), jfyvqh['fs']['getFileInfo']({ 'filePath': zmp67k, 'success': function (hvrqj) {
        null != uk76m && uk76m['runWith']([0x0, hvrqj]);
      }, 'fail': function (uckilb2) {
        null != uk76m && uk76m['runWith']([0x1, uckilb2]);
      } });
  }, jfyvqh['read'] = function (qv5rho, ic1l2k, vofryqh, l2icuab) {
    void 0x0 === ic1l2k && (ic1l2k = 'ascill'), qv5rho = '' != (l2icuab = void 0x0 === l2icuab ? '' : l2icuab) ? jfyvqh['getFileNativePath'](qv5rho) : qv5rho, jfyvqh['fs']['readFile']({ 'filePath': qv5rho, 'encoding': ic1l2k, 'success': function (abfjic) {
        null != vofryqh && vofryqh['runWith']([0x0, abfjic]);
      }, 'fail': function (w43nx) {
        w43nx && '' != l2icuab ? jfyvqh['down'](l2icuab, ic1l2k, vofryqh, l2icuab) : null != vofryqh && vofryqh['runWith']([0x1]);
      } });
  }, jfyvqh['readNativeFile'] = function (ilb2cu, jfabyqr) {
    jfyvqh['fs']['readFile']({ 'filePath': ilb2cu, 'encoding': '', 'success': function (go0hvy5) {
        null != jfabyqr && jfabyqr['runWith']([0x0]);
      }, 'fail': function (x5eg4d) {
        null != jfabyqr && jfabyqr['runWith']([0x1]);
      } });
  }, jfyvqh['down'] = function (rjqbf, mu17lk6, e50xg4, k1l7cu) {
    void 0x0 === mu17lk6 && (mu17lk6 = 'ascill'), void 0x0 === k1l7cu && (k1l7cu = '');var d9w4e3 = jfyvqh['getFileNativePath'](k1l7cu);jfyvqh['wxdown']({ 'url': rjqbf, 'filePath': d9w4e3, 'success': function (vyjrqfh) {
        0xc8 === vyjrqfh['statusCode'] && jfyvqh['readFile'](vyjrqfh['filePath'], mu17lk6, e50xg4, k1l7cu);
      }, 'fail': function (z_p761) {
        null != e50xg4 && e50xg4['runWith']([0x1, z_p761]);
      } })['onProgressUpdate'](function (qrfhyvj) {
      null != e50xg4 && e50xg4['runWith']([0x2, qrfhyvj['progress']]);
    });
  }, jfyvqh['readFile'] = function (jafbr2q, yh50gv, jifbc2a, kilubc) {
    void 0x0 === kilubc && (kilubc = ''), jfyvqh['fs']['readFile']({ 'filePath': jafbr2q, 'encoding': yh50gv = void 0x0 === yh50gv ? 'ascill' : yh50gv, 'success': function (_pz617) {
        -0x1 == jafbr2q['indexOf']('http://') && -0x1 == jafbr2q['indexOf']('https://') || jfyvqh['onFileUpdate'](jafbr2q, kilubc), null != jifbc2a && jifbc2a['runWith']([0x0, _pz617]);
      }, 'fail': function (exdg504) {
        exdg504 && null != jifbc2a && jifbc2a['runWith']([0x1, exdg504]);
      } });
  }, jfyvqh['downImg'] = function (_6zmp7, jacb2fi, e340xgd) {
    void 0x0 === e340xgd && (e340xgd = ''), jfyvqh['wxdown']({ 'url': _6zmp7, 'success': function (mclkui1) {
        0xc8 === mclkui1['statusCode'] && jfyvqh['copyFile'](mclkui1['tempFilePath'], e340xgd, jacb2fi);
      }, 'fail': function (x04dge3) {
        null != jacb2fi && jacb2fi['runWith']([0x1, x04dge3]);
      } });
  }, jfyvqh['copyFile'] = function (gorvhy, bulkci2, vgyo5h0) {
    var uc1mikl = gorvhy['split']('/'),
        m1k7lc = uc1mikl[uc1mikl['length'] - 0x1];bulkci2['split']('?')[0x0];var kl61u7m = jfyvqh['getFileInfo'](bulkci2);uc1mikl = jfyvqh['getFileNativePath'](m1k7lc), jfyvqh['fs']['copyFile']({ 'srcPath': gorvhy, 'destPath': uc1mikl, 'success': function (qryhfvj) {
        kl61u7m ? kl61u7m['readyUrl'] != bulkci2 && jfyvqh['remove'](m1k7lc, bulkci2, vgyo5h0) : (jfyvqh['onSaveFile'](bulkci2, m1k7lc), null != vgyo5h0 && vgyo5h0['runWith']([0x0]));
      }, 'fail': function (k7l1uc) {
        null != vgyo5h0 && vgyo5h0['runWith']([0x1, k7l1uc]);
      } });
  }, jfyvqh['getFileNativePath'] = function (dho0e) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dho0e;
  }, jfyvqh['remove'] = function (vafjrq, $wt839, xd4w93) {
    void 0x0 === $wt839 && ($wt839 = '');var l1kp7m6 = jfyvqh['getFileInfo']($wt839),
        d0ge34 = jfyvqh['getFileNativePath'](l1kp7m6['md5']);t389$n['loader']['clearRes'](l1kp7m6['readyUrl']), jfyvqh['fs']['unlink']({ 'filePath': d0ge34, 'success': function (icla2ub) {
        '' != $wt839 && jfyvqh['onSaveFile']($wt839, vafjrq), null != xd4w93 && xd4w93['runWith']([0x0]);
      }, 'fail': function (ku21icl) {} });
  }, jfyvqh['onSaveFile'] = function (yjrqav, g5yroh) {
    var exn4w3 = yjrqav['split']('?')[0x0];jfyvqh['filesListObj'][exn4w3] = { 'md5': g5yroh, 'readyUrl': yjrqav }, jfyvqh['fs']['writeFile']({ 'filePath': jfyvqh['fileNativeDir'] + '/' + jfyvqh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jfyvqh['filesListObj']), 'success': function (m6zk71p) {
        console['log']('写入测试测试成功：', m6zk71p);
      }, 'fail': function (lum761) {
        console['log']('写入测试测试失败：', lum761);
      } });
  }, jfyvqh['existDir'] = function (xw9n48, yoq5vh) {
    jfyvqh['fs']['mkdir']({ 'dirPath': xw9n48, 'success': function (uci1k2) {
        null != yoq5vh && yoq5vh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (qo5yrhv) {
        -0x1 != qo5yrhv['errMsg']['indexOf']('file already exists') ? jfyvqh['readSync'](jfyvqh['fileListName'], 'utf8', yoq5vh) : null != yoq5vh && yoq5vh['runWith']([0x1, qo5yrhv]);
      } });
  }, jfyvqh['readSync'] = function (mciul, ed5g0xo, ac2ijb, qjavry) {
    void 0x0 === ed5g0xo && (ed5g0xo = 'ascill'), void 0x0 === qjavry && (qjavry = ''), mciul = jfyvqh['getFileNativePath'](mciul);var lp6km71;try {
      lp6km71 = jfyvqh['fs']['readFileSync'](mciul), null != ac2ijb && ac2ijb['runWith']([0x0, { 'data': lp6km71 }]);
    } catch (mlk76u) {
      null != ac2ijb && ac2ijb['runWith']([0x1]);
    }
  }, jfyvqh['readCache'] = function () {}, jfyvqh['writeCache'] = function (hogd5v) {
    var x30wde4 = readyUrl['split']('?')[0x0];jfyvqh['filesListObj'][x30wde4] = { 'md5': md5Name, 'readyUrl': readyUrl }, jfyvqh['fs']['writeFile']({ 'filePath': jfyvqh['fileNativeDir'] + '/' + jfyvqh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jfyvqh['filesListObj']), 'success': function (ul2bki) {}, 'fail': function (vfjyqr) {} });
  }, jfyvqh['setNativeFileDir'] = function (rfoyqvh) {
    jfyvqh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rfoyqvh;
  }, jfyvqh['filesListObj'] = {}, jfyvqh['fileNativeDir'] = null, jfyvqh['fileListName'] = 'layaairfiles.txt', jfyvqh['ziyuFileData'] = {}, jyqbaf(jfyvqh, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), jfyvqh);function jfyvqh() {
    jfyvqh['__super']['call'](this);
  }var cukbi = function () {
    function lm17uck() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, lm17uck['__super']['call'](this), this['_sound'] = lm17uck['_createSound']();
    }_7p6mz1(lm17uck, 'laya.wx.mini.MiniSound', qvhfyro);var p7ml = lm17uck['prototype'];return p7ml['load'] = function (gxed043) {
      var vyaqfr = this,
          aybjf;function rvoq5hy() {
        if (null != lm17uck['_null']) vyaqfr['_sound']['onCanplay'](lm17uck['_null']), vyaqfr['_sound']['onError'](lm17uck['_null']);else try {
          vyaqfr['_sound']['onCanplay'](null), vyaqfr['_sound']['onError'](null), lm17uck['_null'] = null;
        } catch (hry5vgo) {
          console['warn']('[wxmini] _clearSound:' + hry5vgo), vyaqfr['_sound']['onCanplay'](lmku17), vyaqfr['_sound']['onError'](lmku17), lm17uck['_null'] = lmku17;
        }
      }function lmku17() {}gxed043 = uk6m1['formatURL'](gxed043), this['url'] = gxed043, lm17uck['_audioCache'][gxed043] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        rvoq5hy(), aybjf['loaded'] = !0x0, aybjf['event']('complete'), lm17uck['_audioCache'][aybjf['url']] = aybjf;
      }), this['_sound']['onError'](function (yohrv5) {
        console['error']('errCode=' + yohrv5['errCode'] + '  errMsg=' + yohrv5['errMsg']), rvoq5hy(), aybjf['event']('error');
      }), this['_sound']['src'] = gxed043, aybjf = this);
    }, p7ml['play'] = function (k71uclm, _pm6) {
      void 0x0 === k71uclm && (k71uclm = 0x0), void 0x0 === _pm6 && (_pm6 = 0x0), (qybra = this['url'] == n98w4x3['_tMusic'] ? (lm17uck['_musicAudio'] || (lm17uck['_musicAudio'] = lm17uck['_createSound']()), lm17uck['_musicAudio']) : lm17uck['_createSound']())['src'] = this['url'];var qybra = new ajbqf2i(qybra);return qybra['url'] = this['url'], qybra['loops'] = _pm6, qybra['startTime'] = k71uclm, qybra['play'](), n98w4x3['addChannel'](qybra), qybra;
    }, p7ml['dispose'] = function () {
      var oxge0d5 = lm17uck['_audioCache'][this['url']];oxge0d5 && (oxge0d5['src'] = '', delete lm17uck['_audioCache'][this['url']]);
    }, z67p_(0x0, p7ml, 'duration', function () {
      return this['_sound']['duration'];
    }), lm17uck['_createSound'] = function () {
      return lm17uck['_id']++, ewd0x4['window']['wx']['createInnerAudioContext']();
    }, lm17uck['_musicAudio'] = null, lm17uck['_id'] = 0x0, lm17uck['_audioCache'] = {}, lm17uck['_null'] = void 0x0, lm17uck;
  }(),
      ajbqf2i = function () {
    function yvh5qor(z7pm6k1) {
      this['_audio'] = null, this['_onEnd'] = null, yvh5qor['__super']['call'](this), this['_audio'] = z7pm6k1, this['_onEnd'] = a2cuibl['bind'](this['__onEnd'], this), z7pm6k1['onEnded'](this['_onEnd']);
    }_7p6mz1(yvh5qor, 'laya.wx.mini.MiniSoundChannel', ibca2j);var rqfjyb = yvh5qor['prototype'];return rqfjyb['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (t389$n['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rqfjyb['__onNull'] = function () {}, rqfjyb['play'] = function () {
      this['isStopped'] = !0x1, n98w4x3['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, rqfjyb['stop'] = function () {
      if (this['isStopped'] = !0x0, n98w4x3['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != yvh5qor['_null']) this['_audio']['onEnded'](yvh5qor['_null']);else try {
          this['_audio']['onEnded'](null), yvh5qor['_null'] = null;
        } catch (fabqjr2) {
          console['warn']('[wxmini] stop:' + fabqjr2), this['_audio']['onEnded'](a2cuibl['bind'](this['__onNull'], this)), yvh5qor['_null'] = a2cuibl['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, rqfjyb['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, rqfjyb['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, n98w4x3['addChannel'](this), this['_audio']['play']());
    }, z67p_(0x0, rqfjyb, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), z67p_(0x0, rqfjyb, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), z67p_(0x0, rqfjyb, 'volume', function () {
      return 0x1;
    }, function (lubai2) {}), yvh5qor['_null'] = void 0x0, yvh5qor;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ohfvqyr, cilkm1) {
  'use strict';

  for (var ex30g in Object['defineProperty'](cilkm1, '__esModule', { 'value': !0x0 }), Laya) {
    var yvfajrq = Laya[ex30g];yvfajrq && yvfajrq['__isclass'] && (cilkm1[ex30g] = yvfajrq);
  }
});