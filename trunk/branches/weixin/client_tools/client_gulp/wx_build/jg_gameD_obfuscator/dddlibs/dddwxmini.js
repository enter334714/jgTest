var v = wx.$d;
!function (prwv$7, he6njm) {
  he6njm['un'], he6njm['uns'];var $vp = he6njm['static'],
      nmhj46 = he6njm['class'],
      hde6j = he6njm['getset'];he6njm['__newvec'];var dih6e = laya['utils']['Browser'],
      xz81b = (laya['events']['Event'], laya['events']['EventDispatcher']),
      qazk0 = laya['resource']['HTMLImage'],
      kg0qza = laya['utils']['Handler'],
      djmhe6 = laya['display']['Input'],
      ftgqku = laya['net']['Loader'];laya['maths']['Matrix'];var mehjn = laya['renders']['Render'],
      _c349n = laya['utils']['RunDriver'];laya['media']['Sound'];var medhi6 = laya['media']['SoundChannel'],
      gf0kq = laya['media']['SoundManager'],
      feitu = (laya['display']['Stage'], laya['net']['URL']),
      m6idu = laya['utils']['Utils'];nmhj46(hejm, 'laya.wx.mini.MiniAdpter'), hejm['getJson'] = function (_9c35) {
    return JSON['parse'](_9c35);
  }, hejm['init'] = function (o5239, $7rwpv) {
    void 0x0 === o5239 && (o5239 = !0x1), void 0x0 === $7rwpv && ($7rwpv = !0x1), hejm['_inited'] || (hejm['window'] = prwv$7)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (hejm['_inited'] = !0x0, hejm['isZiYu'] = $7rwpv, hejm['isPosMsgYu'] = o5239, hejm['EnvConfig'] = {}, hejm['isZiYu'] || (h94j_['setNativeFileDir']('/layaairGame'), h94j_['existDir'](h94j_['fileNativeDir'], kg0qza['create'](hejm, hejm['onMkdirCallBack']))), hejm['window']['focus'] = function () {}, he6njm['getUrlPath'] = function () {}, hejm['window']['logtime'] = function (ufktdi) {}, hejm['window']['alertTimeLog'] = function (ktguqf) {}, hejm['window']['resetShareInfo'] = function () {}, hejm['window']['CanvasRenderingContext2D'] = function () {}, hejm['window']['CanvasRenderingContext2D']['prototype'] = hejm['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hejm['window']['document']['body']['appendChild'] = function () {}, hejm['EnvConfig']['pixelRatioInt'] = 0x0, _c349n['getPixelRatio'] = hejm['pixelRatio'], hejm['_preCreateElement'] = dih6e['createElement'], dih6e['createElement'] = hejm['createElement'], _c349n['createShaderCondition'] = hejm['createShaderCondition'], m6idu['parseXMLFromString'] = hejm['parseXMLFromString'], djmhe6['_createInputElement'] = oc392['_createInputElement'], hejm['EnvConfig']['load'] = ftgqku['prototype']['load'], ftgqku['prototype']['load'] = d6jeh['prototype']['load'], hejm['isZiYu'] && o5239 && wx['onMessage'](function (aq0bz) {
      aq0bz['isLoad'] && (h94j_['ziyuFileData'][aq0bz['url']] = aq0bz['data']);
    }));
  }, hejm['onMkdirCallBack'] = function (ideu, bz1) {
    ideu || (h94j_['filesListObj'] = JSON['parse'](bz1['data']));
  }, hejm['pixelRatio'] = function () {
    if (!hejm['EnvConfig']['pixelRatioInt']) try {
      var zkgaq = wx['getSystemInfoSync']();return hejm['EnvConfig']['pixelRatioInt'] = zkgaq['pixelRatio'], zkgaq['pixelRatio'];
    } catch (wp$vr) {}return hejm['EnvConfig']['pixelRatioInt'];
  }, hejm['createElement'] = function (v1$wrp) {
    return 'canvas' != v1$wrp ? 'textarea' == v1$wrp || 'input' == v1$wrp ? hejm['onCreateInput'](v1$wrp) : 'div' == v1$wrp ? ((arx8b1 = hejm['_preCreateElement'](v1$wrp))['contains'] = function (gqt0k) {
      return null;
    }, arx8b1['removeChild'] = function (v7ly) {}, arx8b1) : hejm['_preCreateElement'](v1$wrp) : (0x1 == hejm['idx'] ? hejm['isZiYu'] ? (miuetd = sharedCanvas)['style'] = {} : miuetd = prwv$7['canvas'] : miuetd = prwv$7['wx']['createCanvas'](), hejm['idx']++, miuetd);var miuetd, arx8b1;
  }, hejm['onCreateInput'] = function (emh6dj) {
    return emh6dj = hejm['_preCreateElement'](emh6dj), (emh6dj['focus'] = oc392['wxinputFocus'], emh6dj['blur'] = oc392['wxinputblur'], emh6dj['style'] = {}, emh6dj['value'] = 0x0, emh6dj['parentElement'] = {}, emh6dj['placeholder'] = {}, emh6dj['type'] = {}, emh6dj['setColor'] = function (pvy7w) {}, emh6dj['setType'] = function (qga0z) {}, emh6dj['setFontFace'] = function (kg0fz) {}, emh6dj['addEventListener'] = function (tfgki) {}, emh6dj['contains'] = function (zb0ax8) {
      return null;
    }, emh6dj['removeChild'] = function (j6_h) {}, emh6dj);
  }, hejm['createShaderCondition'] = function (tigfuk) {
    var x8abr = this;return function () {
      return x8abr[tigfuk['replace']('this.', '')];
    };
  }, hejm['EnvConfig'] = null, hejm['window'] = null, hejm['_preCreateElement'] = null, hejm['_inited'] = !0x1, hejm['wxRequest'] = null, hejm['systemInfo'] = null, hejm['version'] = '0.0.1', hejm['isZiYu'] = !0x1, hejm['isPosMsgYu'] = !0x1, hejm['parseXMLFromString'] = function (_j43n9) {
    var tudfei;_j43n9 = _j43n9['replace'](/>\s+</g, '><');try {
      tudfei = new prwv$7['Parser']['DOMParser']()['parseFromString'](_j43n9, 'text/xml');
    } catch (itguf) {
      throw '需要引入xml解析库文件';
    }return tudfei;
  }, hejm['idx'] = 0x1;var oc35_9 = hejm;function hejm() {}nmhj46(id6meu, 'laya.wx.mini.MiniImage'), id6meu['prototype']['_loadImage'] = function (rxbw1) {
    var fitug = !0x1;-0x1 == rxbw1['indexOf']('layaNativeDir/') && (fitug = !0x0, rxbw1 = feitu['formatURL'](rxbw1)), h94j_['getFileInfo'](rxbw1) ? id6meu['onCreateImage'](rxbw1, this, !fitug) : -0x1 != rxbw1['indexOf']('http://') || -0x1 != rxbw1['indexOf']('https://') ? h94j_['downImg'](rxbw1, new kg0qza(id6meu, id6meu['onDownImgCallBack'], [rxbw1, this]), rxbw1) : id6meu['onCreateImage'](rxbw1, this, !0x0);
  }, id6meu['onDownImgCallBack'] = function (kf0qz, $8wr, hj6_n4) {
    hj6_n4 ? $8wr['onError'](null) : id6meu['onCreateImage'](kf0qz, $8wr);
  }, id6meu['onCreateImage'] = function (wb18rx, w$8pr, vr1$w) {
    var dkufi;function _o95c() {
      dkufi['onload'] = null, dkufi['onerror'] = null, delete w$8pr['imgCache'][wb18rx];
    }vr1$w = (vr1$w = void 0x0 === vr1$w ? !0x1 : vr1$w) ? wb18rx : (vr1$w = h94j_['getFileInfo'](wb18rx)['md5'], h94j_['getFileNativePath'](vr1$w)), null == w$8pr['imgCache'] && (w$8pr['imgCache'] = {});function deftui() {
      _o95c(), w$8pr['onLoaded'](dkufi);
    }function w7$p() {
      _o95c(), w$8pr['event']('error', 'Load image failed');
    }'nativeimage' == w$8pr['_type'] ? ((dkufi = new dih6e['window']['Image']())['crossOrigin'] = '', dkufi['onload'] = deftui, dkufi['onerror'] = w7$p, dkufi['src'] = vr1$w, w$8pr['imgCache'][wb18rx] = dkufi) : new qazk0['create'](vr1$w, { 'onload': deftui, 'onerror': w7$p, 'onCreate': function (hemj) {
        dkufi = hemj, w$8pr['imgCache'][wb18rx] = hemj;
      } });
  };function id6meu() {}nmhj46(yw7$pv, 'laya.wx.mini.MiniInput'), yw7$pv['_createInputElement'] = function () {
    djmhe6['_initInput'](djmhe6['area'] = dih6e['createElement']('textarea')), djmhe6['_initInput'](djmhe6['input'] = dih6e['createElement']('input')), djmhe6['inputContainer'] = dih6e['createElement']('div'), djmhe6['inputContainer']['style']['position'] = 'absolute', djmhe6['inputContainer']['style']['zIndex'] = 0x186a0, dih6e['container']['appendChild'](djmhe6['inputContainer']), djmhe6['inputContainer']['setPos'] = function (p$wvr, o5_39) {
      djmhe6['inputContainer']['style']['left'] = p$wvr + 'px', djmhe6['inputContainer']['style']['top'] = o5_39 + 'px';
    }, he6njm['stage']['on']('resize', null, yw7$pv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jhe6m) {
      prwv$7['dispatchEvent'] && prwv$7['dispatchEvent']('resize');
    }), gf0kq['_soundClass'] = qgfkz0, gf0kq['_musicClass'] = qgfkz0;
  }, yw7$pv['_onStageResize'] = function () {
    he6njm['stage']['_canvasTransform']['identity']()['scale'](dih6e['width'] / mehjn['canvas']['width'] / _c349n['getPixelRatio'](), dih6e['height'] / mehjn['canvas']['height'] / _c349n['getPixelRatio']());
  }, yw7$pv['wxinputFocus'] = function (bx8ar1) {
    var qf0gk = djmhe6['inputElement']['target'];qf0gk && !qf0gk['editable'] || (oc35_9['window']['wx']['offKeyboardConfirm'](), oc35_9['window']['wx']['offKeyboardInput'](), oc35_9['window']['wx']['showKeyboard']({ 'defaultValue': qf0gk['text'], 'maxLength': qf0gk['maxChars'], 'multiple': qf0gk['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (tiedf) {}, 'fail': function (hmen) {} }), oc35_9['window']['wx']['onKeyboardConfirm'](function (kgqaz) {
      kgqaz = kgqaz ? kgqaz['value'] : '', (qf0gk['text'] = kgqaz, qf0gk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), oc35_9['window']['wx']['onKeyboardInput'](function (tdefi) {
      tdefi = tdefi ? tdefi['value'] : '', qf0gk['multiline'] || -0x1 == tdefi['indexOf']('\x0a') ? (qf0gk['text'] = tdefi, qf0gk['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, yw7$pv['inputEnter'] = function () {
    djmhe6['inputElement']['target']['focus'] = !0x1;
  }, yw7$pv['wxinputblur'] = function () {
    yw7$pv['hideKeyboard']();
  }, yw7$pv['hideKeyboard'] = function () {
    oc35_9['window']['wx']['offKeyboardConfirm'](), oc35_9['window']['wx']['offKeyboardInput'](), oc35_9['window']['wx']['hideKeyboard']({ 'success': function (rwb18) {
        console['log']('隐藏键盘');
      }, 'fail': function (j94hn) {
        console['log']('隐藏键盘出错:' + (j94hn ? j94hn['errMsg'] : ''));
      } });
  };var oc392 = yw7$pv;function yw7$pv() {}nmhj46(j43_9n, 'laya.wx.mini.MiniLoader'), (r8bw1 = j43_9n['prototype'])['load'] = function (agk, kfq0, um6edi, ab18xr, o35_9) {
    void 0x0 === um6edi && (um6edi = !0x0), void 0x0 === o35_9 && (o35_9 = !0x1);var qkut = this;0x0 === (qkut['_url'] = agk)['indexOf']('data:image') ? qkut['_type'] = kfq0 = 'image' : qkut['_type'] = kfq0 = kfq0 || qkut['getTypeFromUrl'](agk), qkut['_cache'] = um6edi, qkut['_data'] = null;var tfiu = 'ascii';-0x1 != agk['indexOf']('.fnt') ? tfiu = 'utf8' : 'arraybuffer' == kfq0 && (tfiu = '');var _94njh = m6idu['getFileExtension'](agk);if (-0x1 != j43_9n['_fileTypeArr']['indexOf'](_94njh)) oc35_9['EnvConfig']['load']['call'](this, agk, kfq0, um6edi, ab18xr, o35_9);else {
      if (h94j_['getFileInfo'](agk)) oc35_9['EnvConfig']['load']['call'](this, agk, kfq0, um6edi, ab18xr, o35_9);else {
        if (-0x1 != agk['indexOf']('layaNativeDir/')) return oc35_9['isZiYu'] ? (_94njh = h94j_['ziyuFileData'][agk], void qkut['onLoaded'](_94njh)) : (cosnole['log']('read read'), void h94j_['read'](agk, tfiu, new kg0qza(j43_9n, j43_9n['onReadNativeCallBack'], [tfiu, agk, kfq0, um6edi, ab18xr, o35_9, qkut])));_94njh = '' == feitu['rootPath'] ? agk : agk['split'](feitu['rootPath'])[0x0], -0x1 != agk['indexOf']('http://') || -0x1 != agk['indexOf']('https://') ? oc35_9['EnvConfig']['load']['call'](qkut, agk, kfq0, um6edi, ab18xr, o35_9) : h94j_['readFile'](_94njh, tfiu, new kg0qza(j43_9n, j43_9n['onReadNativeCallBack'], [tfiu, agk, kfq0, um6edi, ab18xr, o35_9, qkut]), agk);
      }
    }
  }, r8bw1['resMgrLoad'] = function (me6hdi, a8rb, pvwr$1, m6jne, kfuig, udme6i, xr1$8w) {
    void 0x0 === pvwr$1 && (pvwr$1 = 0x0), void 0x0 === m6jne && (m6jne = !0x1), void 0x0 === kfuig && (kfuig = !0x1), void 0x0 === udme6i && (udme6i = 0x0), void 0x0 === xr1$8w && (xr1$8w = 0x3), -0x1 != me6hdi['indexOf']('mpack') && console['log']('=============resMgrLoad url:', me6hdi), oc35_9['EnvConfig']['resMgrLoad'](me6hdi, (iufdet, uikgt, hm6die) => {
      j43_9n['prototype']['resMgrLoadCallBack'](iufdet, uikgt, hm6die, a8rb);
    }, pvwr$1, m6jne, kfuig, udme6i, xr1$8w);
  }, r8bw1['resMgrLoadCallBack'] = function (futgkq, enhj6, pwr7, co23) {
    console['log']('buff:::', futgkq, pwr7, h94j_['fileNativeDir'] + '///' + h94j_['fileListName']), co23(futgkq, enhj6, pwr7);
  }, r8bw1['clearRes'] = function (kg0, ufdeti) {
    this['clearRes'](kg0, ufdeti = void 0x0 === ufdeti ? !0x1 : ufdeti), ufdeti = h94j_['getFileInfo'](kg0), !ufdeti || -0x1 == kg0['indexOf']('http://') && -0x1 == kg0['indexOf']('https://') || (kg0 = ufdeti['md5'], ufdeti = h94j_['getFileNativePath'](kg0), h94j_['remove'](ufdeti));
  }, j43_9n['onReadNativeCallBack'] = function (kga0z, _359, az80x, _349cn, r8xab1, rp$vw7, abzx81, arx1, n4hj6m) {
    void 0x0 === _349cn && (_349cn = !0x0), void 0x0 === rp$vw7 && (rp$vw7 = !0x1), (arx1 = void 0x0 === arx1 ? 0x0 : arx1) ? 0x1 == arx1 && oc35_9['EnvConfig']['load']['call'](abzx81, _359, az80x, _349cn, r8xab1, rp$vw7) : (arx1 = 'json' == az80x || 'atlas' == az80x ? oc35_9['getJson'](n4hj6m['data']) : 'xml' == az80x ? m6idu['parseXMLFromString'](n4hj6m['data']) : n4hj6m['data'], abzx81['onLoaded'](arx1), !oc35_9['isZiYu'] && oc35_9['isPosMsgYu'] && 'arraybuffer' != az80x && wx['postMessage']({ 'url': _359, 'data': arx1, 'isLoad': !0x0 }));
  }, $vp(j43_9n, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var d6jeh = j43_9n;function j43_9n() {}nmhj46(za0gbq, 'laya.wx.mini.MiniFileMgr', xz81b), za0gbq['isLoadFile'] = function (p$ly) {
    return -0x1 != za0gbq['_fileTypeArr']['indexOf'](p$ly);
  }, za0gbq['getFileInfo'] = function (h6emid) {
    return h6emid = h6emid['split']('?')[0x0], h6emid = za0gbq['filesListObj'][h6emid], null == h6emid ? null : h6emid;
  }, za0gbq['onFileUpdate'] = function (axzbq0, bra1x) {
    axzbq0 = axzbq0['split']('/'), axzbq0 = axzbq0[axzbq0['length'] - 0x1];var w1x$ = za0gbq['getFileInfo'](bra1x);null == w1x$ ? za0gbq['onSaveFile'](bra1x, axzbq0) : w1x$['readyUrl'] != bra1x && za0gbq['remove'](axzbq0, bra1x);
  }, za0gbq['exits'] = function (h6dm, p7vy) {
    h6dm = za0gbq['getFileNativePath'](h6dm), za0gbq['fs']['getFileInfo']({ 'filePath': h6dm, 'success': function (kguti) {
        null != p7vy && p7vy['runWith']([0x0, kguti]);
      }, 'fail': function (jhn4_9) {
        null != p7vy && p7vy['runWith']([0x1, jhn4_9]);
      } });
  }, za0gbq['read'] = function (b1r, tfedu, tim, o93c_4) {
    void 0x0 === tfedu && (tfedu = 'ascill'), b1r = '' != (o93c_4 = void 0x0 === o93c_4 ? '' : o93c_4) ? za0gbq['getFileNativePath'](b1r) : b1r, za0gbq['fs']['readFile']({ 'filePath': b1r, 'encoding': tfedu, 'success': function (ud6i) {
        null != tim && tim['runWith']([0x0, ud6i]);
      }, 'fail': function (hdie6m) {
        hdie6m && '' != o93c_4 ? za0gbq['down'](o93c_4, tfedu, tim, o93c_4) : null != tim && tim['runWith']([0x1]);
      } });
  }, za0gbq['readNativeFile'] = function (x80azb, hdm6j) {
    za0gbq['fs']['readFile']({ 'filePath': x80azb, 'encoding': '', 'success': function (j_34n) {
        null != hdm6j && hdm6j['runWith']([0x0]);
      }, 'fail': function (wrb8x) {
        null != hdm6j && hdm6j['runWith']([0x1]);
      } });
  }, za0gbq['down'] = function (tq0kg, _c93o4, j_h9n4, deimu6) {
    void 0x0 === _c93o4 && (_c93o4 = 'ascill'), void 0x0 === deimu6 && (deimu6 = '');var n49c_3 = za0gbq['getFileNativePath'](deimu6);za0gbq['wxdown']({ 'url': tq0kg, 'filePath': n49c_3, 'success': function (ueimt) {
        0xc8 === ueimt['statusCode'] && za0gbq['readFile'](ueimt['filePath'], _c93o4, j_h9n4, deimu6);
      }, 'fail': function (etmidu) {
        null != j_h9n4 && j_h9n4['runWith']([0x1, etmidu]);
      } })['onProgressUpdate'](function (z81xa) {
      null != j_h9n4 && j_h9n4['runWith']([0x2, z81xa['progress']]);
    });
  }, za0gbq['readFile'] = function (h9jn_, x18rba, pwv7y, e6idh) {
    void 0x0 === e6idh && (e6idh = ''), za0gbq['fs']['readFile']({ 'filePath': h9jn_, 'encoding': x18rba = void 0x0 === x18rba ? 'ascill' : x18rba, 'success': function (rw$v1) {
        -0x1 == h9jn_['indexOf']('http://') && -0x1 == h9jn_['indexOf']('https://') || za0gbq['onFileUpdate'](h9jn_, e6idh), null != pwv7y && pwv7y['runWith']([0x0, rw$v1]);
      }, 'fail': function (xrbw1) {
        xrbw1 && null != pwv7y && pwv7y['runWith']([0x1, xrbw1]);
      } });
  }, za0gbq['downImg'] = function (fgz0qk, n6_4, w7pv$r) {
    void 0x0 === w7pv$r && (w7pv$r = ''), za0gbq['wxdown']({ 'url': fgz0qk, 'success': function (a0gzbq) {
        0xc8 === a0gzbq['statusCode'] && za0gbq['copyFile'](a0gzbq['tempFilePath'], w7pv$r, n6_4);
      }, 'fail': function (imhd6) {
        null != n6_4 && n6_4['runWith']([0x1, imhd6]);
      } });
  }, za0gbq['copyFile'] = function (bzqa0g, r8x, w81$pr) {
    var kidtfu = bzqa0g['split']('/'),
        ugtfqk = kidtfu[kidtfu['length'] - 0x1];r8x['split']('?')[0x0];var $wrp81 = za0gbq['getFileInfo'](r8x);kidtfu = za0gbq['getFileNativePath'](ugtfqk), za0gbq['fs']['copyFile']({ 'srcPath': bzqa0g, 'destPath': kidtfu, 'success': function (zab8x0) {
        $wrp81 ? $wrp81['readyUrl'] != r8x && za0gbq['remove'](ugtfqk, r8x, w81$pr) : (za0gbq['onSaveFile'](r8x, ugtfqk), null != w81$pr && w81$pr['runWith']([0x0]));
      }, 'fail': function ($7vpl) {
        null != w81$pr && w81$pr['runWith']([0x1, $7vpl]);
      } });
  }, za0gbq['getFileNativePath'] = function (iemdh) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + iemdh;
  }, za0gbq['remove'] = function (j_h94n, vw7pr, fzqk0) {
    void 0x0 === vw7pr && (vw7pr = '');var ejhm = za0gbq['getFileInfo'](vw7pr),
        tfdki = za0gbq['getFileNativePath'](ejhm['md5']);he6njm['loader']['clearRes'](ejhm['readyUrl']), za0gbq['fs']['unlink']({ 'filePath': tfdki, 'success': function (j6n4_h) {
        '' != vw7pr && za0gbq['onSaveFile'](vw7pr, j_h94n), null != fzqk0 && fzqk0['runWith']([0x0]);
      }, 'fail': function (py$7) {} });
  }, za0gbq['onSaveFile'] = function (r$p7w, tkdfu) {
    var tuidem = r$p7w['split']('?')[0x0];za0gbq['filesListObj'][tuidem] = { 'md5': tkdfu, 'readyUrl': r$p7w }, za0gbq['fs']['writeFile']({ 'filePath': za0gbq['fileNativeDir'] + '/' + za0gbq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](za0gbq['filesListObj']), 'success': function (bzqx0) {
        console['log']('写入测试测试成功：', bzqx0);
      }, 'fail': function (vp$r) {
        console['log']('写入测试测试失败：', vp$r);
      } });
  }, za0gbq['existDir'] = function (uimd, kugtfi) {
    za0gbq['fs']['mkdir']({ 'dirPath': uimd, 'success': function (_6hn4) {
        null != kugtfi && kugtfi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (h6m4nj) {
        -0x1 != h6m4nj['errMsg']['indexOf']('file already exists') ? za0gbq['readSync'](za0gbq['fileListName'], 'utf8', kugtfi) : null != kugtfi && kugtfi['runWith']([0x1, h6m4nj]);
      } });
  }, za0gbq['readSync'] = function (mdti, rx$8, y7$vwp, mde6hi) {
    void 0x0 === rx$8 && (rx$8 = 'ascill'), void 0x0 === mde6hi && (mde6hi = ''), rx$8 = za0gbq['getFileNativePath'](mdti);var gqtf;try {
      gqtf = za0gbq['fs']['readFileSync'](rx$8), null != y7$vwp && y7$vwp['runWith']([0x0, { 'data': gqtf }]);
    } catch (rxa8) {
      null != y7$vwp && y7$vwp['runWith']([0x1]);
    }
  }, za0gbq['readCache'] = function () {}, za0gbq['writeCache'] = function (vyw$7p) {
    var y$7vw = readyUrl['split']('?')[0x0];za0gbq['filesListObj'][y$7vw] = { 'md5': md5Name, 'readyUrl': readyUrl }, za0gbq['fs']['writeFile']({ 'filePath': za0gbq['fileNativeDir'] + '/' + za0gbq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](za0gbq['filesListObj']), 'success': function (pwv$y7) {}, 'fail': function (eiftud) {} });
  }, za0gbq['setNativeFileDir'] = function (uqgfk) {
    za0gbq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uqgfk;
  }, za0gbq['filesListObj'] = {}, za0gbq['fileNativeDir'] = null, za0gbq['fileListName'] = 'layaairfiles.txt', za0gbq['ziyuFileData'] = {}, $vp(za0gbq, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var h94j_ = za0gbq;function za0gbq() {
    za0gbq['__super']['call'](this);
  }nmhj46(kfgtui, 'laya.wx.mini.MiniSound', xz81b), (r8bw1 = kfgtui['prototype'])['load'] = function (he6n) {
    var gba0zq = this,
        qagk0z;function gfkq0t() {
      if (null != kfgtui['_null']) gba0zq['_sound']['onCanplay'](kfgtui['_null']), gba0zq['_sound']['onError'](kfgtui['_null']);else try {
        gba0zq['_sound']['onCanplay'](null), gba0zq['_sound']['onError'](null), kfgtui['_null'] = null;
      } catch (du6) {
        console['warn']('[wxmini] _clearSound:' + du6), gba0zq['_sound']['onCanplay'](_nh46j), gba0zq['_sound']['onError'](_nh46j), kfgtui['_null'] = _nh46j;
      }
    }function _nh46j() {}he6n = feitu['formatURL'](he6n), this['url'] = he6n, kfgtui['_audioCache'][he6n] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      gfkq0t(), qagk0z['loaded'] = !0x0, qagk0z['event']('complete'), kfgtui['_audioCache'][qagk0z['url']] = qagk0z;
    }), this['_sound']['onError'](function (mhjen) {
      console['error']('errCode=' + mhjen['errCode'] + '  errMsg=' + mhjen['errMsg']), gfkq0t(), qagk0z['event']('error');
    }), this['_sound']['src'] = he6n, qagk0z = this);
  }, r8bw1['play'] = function (l7y, tq0k) {
    void 0x0 === l7y && (l7y = 0x0), void 0x0 === tq0k && (tq0k = 0x0), (tfeiu = this['url'] == gf0kq['_tMusic'] ? (kfgtui['_musicAudio'] || (kfgtui['_musicAudio'] = kfgtui['_createSound']()), kfgtui['_musicAudio']) : kfgtui['_createSound']())['src'] = this['url'];var tfeiu = new c9_n34(tfeiu);return tfeiu['url'] = this['url'], tfeiu['loops'] = tq0k, tfeiu['startTime'] = l7y, tfeiu['play'](), gf0kq['addChannel'](tfeiu), tfeiu;
  }, r8bw1['dispose'] = function () {
    var fdet = kfgtui['_audioCache'][this['url']];fdet && (fdet['src'] = '', delete kfgtui['_audioCache'][this['url']]);
  }, hde6j(0x0, r8bw1, 'duration', function () {
    return this['_sound']['duration'];
  }), kfgtui['_createSound'] = function () {
    return kfgtui['_id']++, oc35_9['window']['wx']['createInnerAudioContext']();
  }, kfgtui['_musicAudio'] = null, kfgtui['_id'] = 0x0, kfgtui['_audioCache'] = {}, kfgtui['_null'] = void 0x0;var qgfkz0 = kfgtui;function kfgtui() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, kfgtui['__super']['call'](this), this['_sound'] = kfgtui['_createSound']();
  }var r8bw1;nmhj46(h6_j4n, 'laya.wx.mini.MiniSoundChannel', medhi6), ($vp = h6_j4n['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (he6njm['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, $vp['__onNull'] = function () {}, $vp['play'] = function () {
    this['isStopped'] = !0x1, gf0kq['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, $vp['stop'] = function () {
    if (this['isStopped'] = !0x0, gf0kq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != h6_j4n['_null']) this['_audio']['onEnded'](h6_j4n['_null']);else try {
        this['_audio']['onEnded'](null), h6_j4n['_null'] = null;
      } catch (wbr18x) {
        console['warn']('[wxmini] stop:' + wbr18x), this['_audio']['onEnded'](m6idu['bind'](this['__onNull'], this)), h6_j4n['_null'] = m6idu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, $vp['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, $vp['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, gf0kq['addChannel'](this), this['_audio']['play']());
  }, hde6j(0x0, $vp, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), hde6j(0x0, $vp, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), hde6j(0x0, $vp, 'volume', function () {
    return 0x1;
  }, function (x1ab8z) {}), h6_j4n['_null'] = void 0x0;var c9_n34 = h6_j4n;function h6_j4n(njh_49) {
    this['_audio'] = null, this['_onEnd'] = null, h6_j4n['__super']['call'](this), this['_audio'] = njh_49, this['_onEnd'] = m6idu['bind'](this['__onEnd'], this), njh_49['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($p1rv, rp$1wv) {
  'use strict';

  for (var qgtfuk in Object['defineProperty'](rp$1wv, '__esModule', { 'value': !0x0 }), Laya) {
    var h_n64 = Laya[qgtfuk];h_n64 && h_n64['__isclass'] && (rp$1wv[qgtfuk] = h_n64);
  }
});