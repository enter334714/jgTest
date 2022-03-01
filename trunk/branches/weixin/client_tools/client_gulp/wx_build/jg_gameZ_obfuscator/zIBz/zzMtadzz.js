var B = wx.$z;
!function (hp9s, o8kdy) {
  o8kdy['un'], o8kdy['uns'];var eaxstz = o8kdy['static'],
      rk5_ = o8kdy['class'],
      e91xsa = o8kdy['getset'];o8kdy['__newvec'];var _k8yb = laya['utils']['Browser'],
      i3m7q = (laya['events']['Event'], laya['events']['EventDispatcher']),
      mi$q = laya['resource']['HTMLImage'],
      nmqi7 = laya['utils']['Handler'],
      g1ph49 = laya['display']['Input'],
      ztesoa = laya['net']['Loader'];laya['maths']['Matrix'];var lf4vg6 = laya['renders']['Render'],
      odteza = laya['utils']['RunDriver'];laya['media']['Sound'];var y_8r = laya['media']['SoundChannel'],
      f6g4lv = laya['media']['SoundManager'],
      r258u_ = (laya['display']['Stage'], laya['net']['URL']),
      dbrk8y = laya['utils']['Utils'];rk5_(s1ha, 'laya.wx.mini.MiniAdpter'), s1ha['getJson'] = function (ozk) {
    return JSON['parse'](ozk);
  }, s1ha['init'] = function (oeydt, _bk85) {
    void 0x0 === oeydt && (oeydt = !0x1), void 0x0 === _bk85 && (_bk85 = !0x1), s1ha['_inited'] || (s1ha['window'] = hp9s)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (s1ha['_inited'] = !0x0, s1ha['isZiYu'] = _bk85, s1ha['isPosMsgYu'] = oeydt, s1ha['EnvConfig'] = {}, s1ha['isZiYu'] || (b8kyr['setNativeFileDir']('/layaairGame'), b8kyr['existDir'](b8kyr['fileNativeDir'], nmqi7['create'](s1ha, s1ha['onMkdirCallBack']))), s1ha['window']['focus'] = function () {}, o8kdy['getUrlPath'] = function () {}, s1ha['window']['logtime'] = function (n64v) {}, s1ha['window']['alertTimeLog'] = function (tzey) {}, s1ha['window']['resetShareInfo'] = function () {}, s1ha['window']['CanvasRenderingContext2D'] = function () {}, s1ha['window']['CanvasRenderingContext2D']['prototype'] = s1ha['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], s1ha['window']['document']['body']['appendChild'] = function () {}, s1ha['EnvConfig']['pixelRatioInt'] = 0x0, odteza['getPixelRatio'] = s1ha['pixelRatio'], s1ha['_preCreateElement'] = _k8yb['createElement'], _k8yb['createElement'] = s1ha['createElement'], odteza['createShaderCondition'] = s1ha['createShaderCondition'], dbrk8y['parseXMLFromString'] = s1ha['parseXMLFromString'], g1ph49['_createInputElement'] = zsxa9['_createInputElement'], s1ha['EnvConfig']['load'] = ztesoa['prototype']['load'], ztesoa['prototype']['load'] = eydzo['prototype']['load'], s1ha['isZiYu'] && oeydt && wx['onMessage'](function (p6h41g) {
      p6h41g['isLoad'] && (b8kyr['ziyuFileData'][p6h41g['url']] = p6h41g['data']);
    }));
  }, s1ha['onMkdirCallBack'] = function (tzsex, ztdoye) {
    tzsex || (b8kyr['filesListObj'] = JSON['parse'](ztdoye['data']));
  }, s1ha['pixelRatio'] = function () {
    if (!s1ha['EnvConfig']['pixelRatioInt']) try {
      var s91xae = wx['getSystemInfoSync']();return s1ha['EnvConfig']['pixelRatioInt'] = s91xae['pixelRatio'], s91xae['pixelRatio'];
    } catch (rd8ybk) {}return s1ha['EnvConfig']['pixelRatioInt'];
  }, s1ha['createElement'] = function (g6pfv) {
    return 'canvas' != g6pfv ? 'textarea' == g6pfv || 'input' == g6pfv ? s1ha['onCreateInput'](g6pfv) : 'div' == g6pfv ? ((w_ru5 = s1ha['_preCreateElement'](g6pfv))['contains'] = function (byd8ko) {
      return null;
    }, w_ru5['removeChild'] = function (rk8_5) {}, w_ru5) : s1ha['_preCreateElement'](g6pfv) : (0x1 == s1ha['idx'] ? s1ha['isZiYu'] ? (b5rk_8 = sharedCanvas)['style'] = {} : b5rk_8 = hp9s['canvas'] : b5rk_8 = hp9s['wx']['createCanvas'](), s1ha['idx']++, b5rk_8);var b5rk_8, w_ru5;
  }, s1ha['onCreateInput'] = function (otzde) {
    return otzde = s1ha['_preCreateElement'](otzde), (otzde['focus'] = zsxa9['wxinputFocus'], otzde['blur'] = zsxa9['wxinputblur'], otzde['style'] = {}, otzde['value'] = 0x0, otzde['parentElement'] = {}, otzde['placeholder'] = {}, otzde['type'] = {}, otzde['setColor'] = function (uw0_5) {}, otzde['setType'] = function (vnli) {}, otzde['setFontFace'] = function (sx19e) {}, otzde['addEventListener'] = function (hg4p61) {}, otzde['contains'] = function (kb8_y) {
      return null;
    }, otzde['removeChild'] = function (oedt) {}, otzde);
  }, s1ha['createShaderCondition'] = function (il7nmv) {
    var vnl7m = this;return function () {
      return vnl7m[il7nmv['replace']('this.', '')];
    };
  }, s1ha['EnvConfig'] = null, s1ha['window'] = null, s1ha['_preCreateElement'] = null, s1ha['_inited'] = !0x1, s1ha['wxRequest'] = null, s1ha['systemInfo'] = null, s1ha['version'] = '0.0.1', s1ha['isZiYu'] = !0x1, s1ha['isPosMsgYu'] = !0x1, s1ha['parseXMLFromString'] = function (mnv) {
    var ydeo;mnv = mnv['replace'](/>\s+</g, '><');try {
      ydeo = new hp9s['Parser']['DOMParser']()['parseFromString'](mnv, 'text/xml');
    } catch (vg6lf4) {
      throw '需要引入xml解析库文件';
    }return ydeo;
  }, s1ha['idx'] = 0x1;var txzas = s1ha;function s1ha() {}rk5_(p64vg, 'laya.wx.mini.MiniImage'), p64vg['prototype']['_loadImage'] = function (i37mnl) {
    var eaozdt = !0x1;-0x1 == i37mnl['indexOf']('layaNativeDir/') && (eaozdt = !0x0, i37mnl = r258u_['formatURL'](i37mnl)), b8kyr['getFileInfo'](i37mnl) ? p64vg['onCreateImage'](i37mnl, this, !eaozdt) : -0x1 != i37mnl['indexOf']('http://') || -0x1 != i37mnl['indexOf']('https://') ? b8kyr['downImg'](i37mnl, new nmqi7(p64vg, p64vg['onDownImgCallBack'], [i37mnl, this]), i37mnl) : p64vg['onCreateImage'](i37mnl, this, !0x0);
  }, p64vg['onDownImgCallBack'] = function (nilm7, zea9s, x9sh) {
    x9sh ? zea9s['onError'](null) : p64vg['onCreateImage'](nilm7, zea9s);
  }, p64vg['onCreateImage'] = function (doteza, qj$m3i, _b8kry) {
    var f64gv;function y8_br() {
      f64gv['onload'] = null, f64gv['onerror'] = null, delete qj$m3i['imgCache'][doteza];
    }_b8kry = (_b8kry = void 0x0 === _b8kry ? !0x1 : _b8kry) ? doteza : (_b8kry = b8kyr['getFileInfo'](doteza)['md5'], b8kyr['getFileNativePath'](_b8kry)), null == qj$m3i['imgCache'] && (qj$m3i['imgCache'] = {});function r2wu() {
      y8_br(), qj$m3i['onLoaded'](f64gv);
    }function dyotez() {
      y8_br(), qj$m3i['event']('error', 'Load image failed');
    }'nativeimage' == qj$m3i['_type'] ? ((f64gv = new _k8yb['window']['Image']())['crossOrigin'] = '', f64gv['onload'] = r2wu, f64gv['onerror'] = dyotez, f64gv['src'] = _b8kry, qj$m3i['imgCache'][doteza] = f64gv) : new mi$q['create'](_b8kry, { 'onload': r2wu, 'onerror': dyotez, 'onCreate': function (zkydo) {
        f64gv = zkydo, qj$m3i['imgCache'][doteza] = zkydo;
      } });
  };function p64vg() {}rk5_(zae, 'laya.wx.mini.MiniInput'), zae['_createInputElement'] = function () {
    g1ph49['_initInput'](g1ph49['area'] = _k8yb['createElement']('textarea')), g1ph49['_initInput'](g1ph49['input'] = _k8yb['createElement']('input')), g1ph49['inputContainer'] = _k8yb['createElement']('div'), g1ph49['inputContainer']['style']['position'] = 'absolute', g1ph49['inputContainer']['style']['zIndex'] = 0x186a0, _k8yb['container']['appendChild'](g1ph49['inputContainer']), g1ph49['inputContainer']['setPos'] = function (ur825, i$37) {
      g1ph49['inputContainer']['style']['left'] = ur825 + 'px', g1ph49['inputContainer']['style']['top'] = i$37 + 'px';
    }, o8kdy['stage']['on']('resize', null, zae['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xh19gp) {
      hp9s['dispatchEvent'] && hp9s['dispatchEvent']('resize');
    }), f6g4lv['_soundClass'] = r2u5_8, f6g4lv['_musicClass'] = r2u5_8;
  }, zae['_onStageResize'] = function () {
    o8kdy['stage']['_canvasTransform']['identity']()['scale'](_k8yb['width'] / lf4vg6['canvas']['width'] / odteza['getPixelRatio'](), _k8yb['height'] / lf4vg6['canvas']['height'] / odteza['getPixelRatio']());
  }, zae['wxinputFocus'] = function (kdb8yo) {
    var mjqi3 = g1ph49['inputElement']['target'];mjqi3 && !mjqi3['editable'] || (txzas['window']['wx']['offKeyboardConfirm'](), txzas['window']['wx']['offKeyboardInput'](), txzas['window']['wx']['showKeyboard']({ 'defaultValue': mjqi3['text'], 'maxLength': mjqi3['maxChars'], 'multiple': mjqi3['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (azoest) {}, 'fail': function (hgfp46) {} }), txzas['window']['wx']['onKeyboardConfirm'](function (kd8yr) {
      kd8yr = kd8yr ? kd8yr['value'] : '', (mjqi3['text'] = kd8yr, mjqi3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), txzas['window']['wx']['onKeyboardInput'](function (g6f4pv) {
      g6f4pv = g6f4pv ? g6f4pv['value'] : '', mjqi3['multiline'] || -0x1 == g6f4pv['indexOf']('\x0a') ? (mjqi3['text'] = g6f4pv, mjqi3['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, zae['inputEnter'] = function () {
    g1ph49['inputElement']['target']['focus'] = !0x1;
  }, zae['wxinputblur'] = function () {
    zae['hideKeyboard']();
  }, zae['hideKeyboard'] = function () {
    txzas['window']['wx']['offKeyboardConfirm'](), txzas['window']['wx']['offKeyboardInput'](), txzas['window']['wx']['hideKeyboard']({ 'success': function (v4pgf6) {
        console['log']('隐藏键盘');
      }, 'fail': function (q$m37) {
        console['log']('隐藏键盘出错:' + (q$m37 ? q$m37['errMsg'] : ''));
      } });
  };var zsxa9 = zae;function zae() {}rk5_(oykb8, 'laya.wx.mini.MiniLoader'), (fvnl64 = oykb8['prototype'])['load'] = function (e9xzs, as91ex, yb_rk8, lfv46, mil3n7) {
    void 0x0 === yb_rk8 && (yb_rk8 = !0x0), void 0x0 === mil3n7 && (mil3n7 = !0x1);var kbo8dy = this;0x0 === (kbo8dy['_url'] = e9xzs)['indexOf']('data:image') ? kbo8dy['_type'] = as91ex = 'image' : kbo8dy['_type'] = as91ex = as91ex || kbo8dy['getTypeFromUrl'](e9xzs), kbo8dy['_cache'] = yb_rk8, kbo8dy['_data'] = null;var sha = 'ascii';-0x1 != e9xzs['indexOf']('.fnt') ? sha = 'utf8' : 'arraybuffer' == as91ex && (sha = '');var p4h61 = dbrk8y['getFileExtension'](e9xzs);if (-0x1 != oykb8['_fileTypeArr']['indexOf'](p4h61)) txzas['EnvConfig']['load']['call'](this, e9xzs, as91ex, yb_rk8, lfv46, mil3n7);else {
      if (b8kyr['getFileInfo'](e9xzs)) txzas['EnvConfig']['load']['call'](this, e9xzs, as91ex, yb_rk8, lfv46, mil3n7);else {
        if (-0x1 != e9xzs['indexOf']('layaNativeDir/')) return txzas['isZiYu'] ? (p4h61 = b8kyr['ziyuFileData'][e9xzs], void kbo8dy['onLoaded'](p4h61)) : (cosnole['log']('read read'), void b8kyr['read'](e9xzs, sha, new nmqi7(oykb8, oykb8['onReadNativeCallBack'], [sha, e9xzs, as91ex, yb_rk8, lfv46, mil3n7, kbo8dy])));p4h61 = '' == r258u_['rootPath'] ? e9xzs : e9xzs['split'](r258u_['rootPath'])[0x0], -0x1 != e9xzs['indexOf']('http://') || -0x1 != e9xzs['indexOf']('https://') ? txzas['EnvConfig']['load']['call'](kbo8dy, e9xzs, as91ex, yb_rk8, lfv46, mil3n7) : b8kyr['readFile'](p4h61, sha, new nmqi7(oykb8, oykb8['onReadNativeCallBack'], [sha, e9xzs, as91ex, yb_rk8, lfv46, mil3n7, kbo8dy]), e9xzs);
      }
    }
  }, fvnl64['resMgrLoad'] = function (zesao, zeto, a1es9x, _r28, n3ml, tosza, doyk8b) {
    void 0x0 === a1es9x && (a1es9x = 0x0), void 0x0 === _r28 && (_r28 = !0x1), void 0x0 === n3ml && (n3ml = !0x1), void 0x0 === tosza && (tosza = 0x0), void 0x0 === doyk8b && (doyk8b = 0x3), -0x1 != zesao['indexOf']('mpack') && console['log']('=============resMgrLoad url:', zesao), txzas['EnvConfig']['resMgrLoad'](zesao, (qim$73, e9ax1, tydoez) => {
      oykb8['prototype']['resMgrLoadCallBack'](qim$73, e9ax1, tydoez, zeto);
    }, a1es9x, _r28, n3ml, tosza, doyk8b);
  }, fvnl64['resMgrLoadCallBack'] = function (zosate, nlm7, gpf4h6, tezsoa) {
    console['log']('buff:::', zosate, gpf4h6, b8kyr['fileNativeDir'] + '///' + b8kyr['fileListName']), tezsoa(zosate, nlm7, gpf4h6);
  }, fvnl64['clearRes'] = function (a9exzs, sh9ax) {
    this['clearRes'](a9exzs, sh9ax = void 0x0 === sh9ax ? !0x1 : sh9ax), sh9ax = b8kyr['getFileInfo'](a9exzs), !sh9ax || -0x1 == a9exzs['indexOf']('http://') && -0x1 == a9exzs['indexOf']('https://') || (a9exzs = sh9ax['md5'], sh9ax = b8kyr['getFileNativePath'](a9exzs), b8kyr['remove'](sh9ax));
  }, oykb8['onReadNativeCallBack'] = function (bdtyo, kdoytb, iq7mn3, rdyk8b, gp1h6, _8rbk, in7l3, b_58r2, ln64f) {
    void 0x0 === rdyk8b && (rdyk8b = !0x0), void 0x0 === _8rbk && (_8rbk = !0x1), (b_58r2 = void 0x0 === b_58r2 ? 0x0 : b_58r2) ? 0x1 == b_58r2 && txzas['EnvConfig']['load']['call'](in7l3, kdoytb, iq7mn3, rdyk8b, gp1h6, _8rbk) : (b_58r2 = 'json' == iq7mn3 || 'atlas' == iq7mn3 ? txzas['getJson'](ln64f['data']) : 'xml' == iq7mn3 ? dbrk8y['parseXMLFromString'](ln64f['data']) : ln64f['data'], in7l3['onLoaded'](b_58r2), !txzas['isZiYu'] && txzas['isPosMsgYu'] && 'arraybuffer' != iq7mn3 && wx['postMessage']({ 'url': kdoytb, 'data': b_58r2, 'isLoad': !0x0 }));
  }, eaxstz(oykb8, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var eydzo = oykb8;function oykb8() {}rk5_(x9a1sh, 'laya.wx.mini.MiniFileMgr', i3m7q), x9a1sh['isLoadFile'] = function (inv7fl) {
    return -0x1 != x9a1sh['_fileTypeArr']['indexOf'](inv7fl);
  }, x9a1sh['getFileInfo'] = function (_u258r) {
    return _u258r = _u258r['split']('?')[0x0], _u258r = x9a1sh['filesListObj'][_u258r], null == _u258r ? null : _u258r;
  }, x9a1sh['onFileUpdate'] = function (fp6gv4, lmni7) {
    fp6gv4 = fp6gv4['split']('/'), fp6gv4 = fp6gv4[fp6gv4['length'] - 0x1];var p64hfg = x9a1sh['getFileInfo'](lmni7);null == p64hfg ? x9a1sh['onSaveFile'](lmni7, fp6gv4) : p64hfg['readyUrl'] != lmni7 && x9a1sh['remove'](fp6gv4, lmni7);
  }, x9a1sh['exits'] = function (r2b8, asez9) {
    r2b8 = x9a1sh['getFileNativePath'](r2b8), x9a1sh['fs']['getFileInfo']({ 'filePath': r2b8, 'success': function (shpx) {
        null != asez9 && asez9['runWith']([0x0, shpx]);
      }, 'fail': function (dtezao) {
        null != asez9 && asez9['runWith']([0x1, dtezao]);
      } });
  }, x9a1sh['read'] = function (zdyet, imqj3$, r2w5u, g1ph4) {
    void 0x0 === imqj3$ && (imqj3$ = 'ascill'), zdyet = '' != (g1ph4 = void 0x0 === g1ph4 ? '' : g1ph4) ? x9a1sh['getFileNativePath'](zdyet) : zdyet, x9a1sh['fs']['readFile']({ 'filePath': zdyet, 'encoding': imqj3$, 'success': function (krdyb8) {
        null != r2w5u && r2w5u['runWith']([0x0, krdyb8]);
      }, 'fail': function (u_205) {
        u_205 && '' != g1ph4 ? x9a1sh['down'](g1ph4, imqj3$, r2w5u, g1ph4) : null != r2w5u && r2w5u['runWith']([0x1]);
      } });
  }, x9a1sh['readNativeFile'] = function (p9hs, n7l6) {
    x9a1sh['fs']['readFile']({ 'filePath': p9hs, 'encoding': '', 'success': function (xg9p1) {
        null != n7l6 && n7l6['runWith']([0x0]);
      }, 'fail': function (p9sx1h) {
        null != n7l6 && n7l6['runWith']([0x1]);
      } });
  }, x9a1sh['down'] = function (_b25r, px1g9h, ydtkob, zaxs) {
    void 0x0 === px1g9h && (px1g9h = 'ascill'), void 0x0 === zaxs && (zaxs = '');var nifv7l = x9a1sh['getFileNativePath'](zaxs);x9a1sh['wxdown']({ 'url': _b25r, 'filePath': nifv7l, 'success': function (x19hg) {
        0xc8 === x19hg['statusCode'] && x9a1sh['readFile'](x19hg['filePath'], px1g9h, ydtkob, zaxs);
      }, 'fail': function (eytd) {
        null != ydtkob && ydtkob['runWith']([0x1, eytd]);
      } })['onProgressUpdate'](function (odkyzt) {
      null != ydtkob && ydtkob['runWith']([0x2, odkyzt['progress']]);
    });
  }, x9a1sh['readFile'] = function (_b28r, zydto, sxeta, otesz) {
    void 0x0 === otesz && (otesz = ''), x9a1sh['fs']['readFile']({ 'filePath': _b28r, 'encoding': zydto = void 0x0 === zydto ? 'ascill' : zydto, 'success': function (exs9a1) {
        -0x1 == _b28r['indexOf']('http://') && -0x1 == _b28r['indexOf']('https://') || x9a1sh['onFileUpdate'](_b28r, otesz), null != sxeta && sxeta['runWith']([0x0, exs9a1]);
      }, 'fail': function (invlf7) {
        invlf7 && null != sxeta && sxeta['runWith']([0x1, invlf7]);
      } });
  }, x9a1sh['downImg'] = function (ij3qm$, fv6g4l, yotez) {
    void 0x0 === yotez && (yotez = ''), x9a1sh['wxdown']({ 'url': ij3qm$, 'success': function (yzoktd) {
        0xc8 === yzoktd['statusCode'] && x9a1sh['copyFile'](yzoktd['tempFilePath'], yotez, fv6g4l);
      }, 'fail': function (vg4p) {
        null != fv6g4l && fv6g4l['runWith']([0x1, vg4p]);
      } });
  }, x9a1sh['copyFile'] = function (ztoykd, aso, h4pf) {
    var w2u50 = ztoykd['split']('/'),
        gvf6p = w2u50[w2u50['length'] - 0x1];aso['split']('?')[0x0];var w0_25 = x9a1sh['getFileInfo'](aso);w2u50 = x9a1sh['getFileNativePath'](gvf6p), x9a1sh['fs']['copyFile']({ 'srcPath': ztoykd, 'destPath': w2u50, 'success': function (_8yrkb) {
        w0_25 ? w0_25['readyUrl'] != aso && x9a1sh['remove'](gvf6p, aso, h4pf) : (x9a1sh['onSaveFile'](aso, gvf6p), null != h4pf && h4pf['runWith']([0x0]));
      }, 'fail': function (gf) {
        null != h4pf && h4pf['runWith']([0x1, gf]);
      } });
  }, x9a1sh['getFileNativePath'] = function (x1h9) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x1h9;
  }, x9a1sh['remove'] = function (kd8rby, ydok, stxeaz) {
    void 0x0 === ydok && (ydok = '');var yd8ob = x9a1sh['getFileInfo'](ydok),
        fghp4 = x9a1sh['getFileNativePath'](yd8ob['md5']);o8kdy['loader']['clearRes'](yd8ob['readyUrl']), x9a1sh['fs']['unlink']({ 'filePath': fghp4, 'success': function (kbdr8y) {
        '' != ydok && x9a1sh['onSaveFile'](ydok, kd8rby), null != stxeaz && stxeaz['runWith']([0x0]);
      }, 'fail': function (hg9x) {} });
  }, x9a1sh['onSaveFile'] = function (stzeax, i3mq) {
    var hp6fg4 = stzeax['split']('?')[0x0];x9a1sh['filesListObj'][hp6fg4] = { 'md5': i3mq, 'readyUrl': stzeax }, x9a1sh['fs']['writeFile']({ 'filePath': x9a1sh['fileNativeDir'] + '/' + x9a1sh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x9a1sh['filesListObj']), 'success': function (ktydob) {
        console['log']('写入测试测试成功：', ktydob);
      }, 'fail': function (odtz) {
        console['log']('写入测试测试失败：', odtz);
      } });
  }, x9a1sh['existDir'] = function (xs91, mlv7in) {
    x9a1sh['fs']['mkdir']({ 'dirPath': xs91, 'success': function (iq7m$3) {
        null != mlv7in && mlv7in['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (xatsez) {
        -0x1 != xatsez['errMsg']['indexOf']('file already exists') ? x9a1sh['readSync'](x9a1sh['fileListName'], 'utf8', mlv7in) : null != mlv7in && mlv7in['runWith']([0x1, xatsez]);
      } });
  }, x9a1sh['readSync'] = function (br_k8y, r_5kb8, _rk85, fv6l) {
    void 0x0 === r_5kb8 && (r_5kb8 = 'ascill'), void 0x0 === fv6l && (fv6l = ''), r_5kb8 = x9a1sh['getFileNativePath'](br_k8y);var i3ln;try {
      i3ln = x9a1sh['fs']['readFileSync'](r_5kb8), null != _rk85 && _rk85['runWith']([0x0, { 'data': i3ln }]);
    } catch (ob8dyk) {
      null != _rk85 && _rk85['runWith']([0x1]);
    }
  }, x9a1sh['readCache'] = function () {}, x9a1sh['writeCache'] = function (v64n) {
    var h91s = readyUrl['split']('?')[0x0];x9a1sh['filesListObj'][h91s] = { 'md5': md5Name, 'readyUrl': readyUrl }, x9a1sh['fs']['writeFile']({ 'filePath': x9a1sh['fileNativeDir'] + '/' + x9a1sh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x9a1sh['filesListObj']), 'success': function (m7l) {}, 'fail': function (esoz) {} });
  }, x9a1sh['setNativeFileDir'] = function (_85bk) {
    x9a1sh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _85bk;
  }, x9a1sh['filesListObj'] = {}, x9a1sh['fileNativeDir'] = null, x9a1sh['fileListName'] = 'layaairfiles.txt', x9a1sh['ziyuFileData'] = {}, eaxstz(x9a1sh, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var b8kyr = x9a1sh;function x9a1sh() {
    x9a1sh['__super']['call'](this);
  }rk5_(aex9, 'laya.wx.mini.MiniSound', i3m7q), (fvnl64 = aex9['prototype'])['load'] = function (ml7vi) {
    var x9p1h = this,
        zaest;function _r8ky() {
      if (null != aex9['_null']) x9p1h['_sound']['onCanplay'](aex9['_null']), x9p1h['_sound']['onError'](aex9['_null']);else try {
        x9p1h['_sound']['onCanplay'](null), x9p1h['_sound']['onError'](null), aex9['_null'] = null;
      } catch (fgp46v) {
        console['warn']('[wxmini] _clearSound:' + fgp46v), x9p1h['_sound']['onCanplay'](f6h), x9p1h['_sound']['onError'](f6h), aex9['_null'] = f6h;
      }
    }function f6h() {}ml7vi = r258u_['formatURL'](ml7vi), this['url'] = ml7vi, aex9['_audioCache'][ml7vi] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      _r8ky(), zaest['loaded'] = !0x0, zaest['event']('complete'), aex9['_audioCache'][zaest['url']] = zaest;
    }), this['_sound']['onError'](function (eoztdy) {
      console['error']('errCode=' + eoztdy['errCode'] + '  errMsg=' + eoztdy['errMsg']), _r8ky(), zaest['event']('error');
    }), this['_sound']['src'] = ml7vi, zaest = this);
  }, fvnl64['play'] = function (oeatdz, $jimq3) {
    void 0x0 === oeatdz && (oeatdz = 0x0), void 0x0 === $jimq3 && ($jimq3 = 0x0), (limv7n = this['url'] == f6g4lv['_tMusic'] ? (aex9['_musicAudio'] || (aex9['_musicAudio'] = aex9['_createSound']()), aex9['_musicAudio']) : aex9['_createSound']())['src'] = this['url'];var limv7n = new _02(limv7n);return limv7n['url'] = this['url'], limv7n['loops'] = $jimq3, limv7n['startTime'] = oeatdz, limv7n['play'](), f6g4lv['addChannel'](limv7n), limv7n;
  }, fvnl64['dispose'] = function () {
    var f6glv4 = aex9['_audioCache'][this['url']];f6glv4 && (f6glv4['src'] = '', delete aex9['_audioCache'][this['url']]);
  }, e91xsa(0x0, fvnl64, 'duration', function () {
    return this['_sound']['duration'];
  }), aex9['_createSound'] = function () {
    return aex9['_id']++, txzas['window']['wx']['createInnerAudioContext']();
  }, aex9['_musicAudio'] = null, aex9['_id'] = 0x0, aex9['_audioCache'] = {}, aex9['_null'] = void 0x0;var r2u5_8 = aex9;function aex9() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, aex9['__super']['call'](this), this['_sound'] = aex9['_createSound']();
  }var fvnl64;rk5_(ax9zes, 'laya.wx.mini.MiniSoundChannel', y_8r), (eaxstz = ax9zes['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (o8kdy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, eaxstz['__onNull'] = function () {}, eaxstz['play'] = function () {
    this['isStopped'] = !0x1, f6g4lv['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, eaxstz['stop'] = function () {
    if (this['isStopped'] = !0x0, f6g4lv['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != ax9zes['_null']) this['_audio']['onEnded'](ax9zes['_null']);else try {
        this['_audio']['onEnded'](null), ax9zes['_null'] = null;
      } catch (todaz) {
        console['warn']('[wxmini] stop:' + todaz), this['_audio']['onEnded'](dbrk8y['bind'](this['__onNull'], this)), ax9zes['_null'] = dbrk8y['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, eaxstz['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, eaxstz['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, f6g4lv['addChannel'](this), this['_audio']['play']());
  }, e91xsa(0x0, eaxstz, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), e91xsa(0x0, eaxstz, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), e91xsa(0x0, eaxstz, 'volume', function () {
    return 0x1;
  }, function (r25_b) {}), ax9zes['_null'] = void 0x0;var _02 = ax9zes;function ax9zes(mjq$3i) {
    this['_audio'] = null, this['_onEnd'] = null, ax9zes['__super']['call'](this), this['_audio'] = mjq$3i, this['_onEnd'] = dbrk8y['bind'](this['__onEnd'], this), mjq$3i['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (yztdko, tdbyk) {
  'use strict';

  for (var v6f4gl in Object['defineProperty'](tdbyk, '__esModule', { 'value': !0x0 }), Laya) {
    var x9g1hp = Laya[v6f4gl];x9g1hp && x9g1hp['__isclass'] && (tdbyk[v6f4gl] = x9g1hp);
  }
});