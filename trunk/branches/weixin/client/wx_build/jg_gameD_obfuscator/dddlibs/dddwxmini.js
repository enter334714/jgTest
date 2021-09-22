var v = wx.$d;
!function (kqb6n, h9c3ly) {
  h9c3ly['un'], h9c3ly['uns'];var h9yl8 = h9c3ly['static'],
      _gax = h9c3ly['class'],
      zoujid = h9c3ly['getset'];h9c3ly['__newvec'];var idb7z = laya['utils']['Browser'],
      _gx0a2 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      z7k6d = laya['resource']['HTMLImage'],
      _x = laya['utils']['Handler'],
      x0ga_ = laya['display']['Input'],
      p1wvf = laya['net']['Loader'];laya['maths']['Matrix'];var xnmqb6 = laya['renders']['Render'],
      g2_a0x = laya['utils']['RunDriver'];laya['media']['Sound'];var vfpcw1 = laya['media']['SoundChannel'],
      qm2ax = laya['media']['SoundManager'],
      x02m = (laya['display']['Stage'], laya['net']['URL']),
      a0q2 = laya['utils']['Utils'],
      p1wvf4 = (_gax(zjd7ki, 'laya.wx.mini.MiniAdpter'), zjd7ki['getJson'] = function (izb7d) {
    return JSON['parse'](izb7d);
  }, zjd7ki['init'] = function (lvcf1p, ma2x0q) {
    void 0x0 === lvcf1p && (lvcf1p = !0x1), void 0x0 === ma2x0q && (ma2x0q = !0x1), zjd7ki['_inited'] || (zjd7ki['window'] = kqb6n)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (zjd7ki['_inited'] = !0x0, zjd7ki['isZiYu'] = ma2x0q, zjd7ki['isPosMsgYu'] = lvcf1p, zjd7ki['EnvConfig'] = {}, zjd7ki['isZiYu'] || (p1ly['setNativeFileDir']('/layaairGame'), p1ly['existDir'](p1ly['fileNativeDir'], _x['create'](zjd7ki, zjd7ki['onMkdirCallBack']))), zjd7ki['window']['focus'] = function () {}, h9c3ly['getUrlPath'] = function () {}, zjd7ki['window']['logtime'] = function (d5joiu) {}, zjd7ki['window']['alertTimeLog'] = function (wtvf1) {}, zjd7ki['window']['resetShareInfo'] = function () {}, zjd7ki['window']['CanvasRenderingContext2D'] = function () {}, zjd7ki['window']['CanvasRenderingContext2D']['prototype'] = zjd7ki['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zjd7ki['window']['document']['body']['appendChild'] = function () {}, zjd7ki['EnvConfig']['pixelRatioInt'] = 0x0, g2_a0x['getPixelRatio'] = zjd7ki['pixelRatio'], zjd7ki['_preCreateElement'] = idb7z['createElement'], idb7z['createElement'] = zjd7ki['createElement'], g2_a0x['createShaderCondition'] = zjd7ki['createShaderCondition'], a0q2['parseXMLFromString'] = zjd7ki['parseXMLFromString'], x0ga_['_createInputElement'] = v1pf['_createInputElement'], zjd7ki['EnvConfig']['load'] = p1wvf['prototype']['load'], p1wvf['prototype']['load'] = _a02xg['prototype']['load'], zjd7ki['isZiYu'] && lvcf1p && wx['onMessage'](function (mx02a_) {
      mx02a_['isLoad'] && (p1ly['ziyuFileData'][mx02a_['url']] = mx02a_['data']);
    }));
  }, zjd7ki['onMkdirCallBack'] = function (yl8h39, uo5dj) {
    yl8h39 || (p1ly['filesListObj'] = JSON['parse'](uo5dj['data']));
  }, zjd7ki['pixelRatio'] = function () {
    if (!zjd7ki['EnvConfig']['pixelRatioInt']) try {
      var jkzu = wx['getSystemInfoSync']();return zjd7ki['EnvConfig']['pixelRatioInt'] = jkzu['pixelRatio'], jkzu['pixelRatio'];
    } catch (xa20_) {}return zjd7ki['EnvConfig']['pixelRatioInt'];
  }, zjd7ki['createElement'] = function (mn2qax) {
    var hju;if ('canvas' == mn2qax) return 0x1 == zjd7ki['idx'] ? zjd7ki['isZiYu'] ? (hju = sharedCanvas)['style'] = {} : hju = kqb6n['canvas'] : hju = kqb6n['wx']['createCanvas'](), zjd7ki['idx']++, hju;if ('textarea' == mn2qax || 'input' == mn2qax) return zjd7ki['onCreateInput'](mn2qax);if ('div' != mn2qax) return zjd7ki['_preCreateElement'](mn2qax);return mn2qax = zjd7ki['_preCreateElement'](mn2qax), (mn2qax['contains'] = function (q67nk) {
      return null;
    }, mn2qax['removeChild'] = function (we4$tv) {}, mn2qax);
  }, zjd7ki['onCreateInput'] = function (oh53) {
    return oh53 = zjd7ki['_preCreateElement'](oh53), (oh53['focus'] = v1pf['wxinputFocus'], oh53['blur'] = v1pf['wxinputblur'], oh53['style'] = {}, oh53['value'] = 0x0, oh53['parentElement'] = {}, oh53['placeholder'] = {}, oh53['type'] = {}, oh53['setColor'] = function (v4tfw) {}, oh53['setType'] = function (clyfp) {}, oh53['setFontFace'] = function (wf1v) {}, oh53['addEventListener'] = function (dizuo) {}, oh53['contains'] = function (idk7jz) {
      return null;
    }, oh53['removeChild'] = function (z7bkn6) {}, oh53);
  }, zjd7ki['createShaderCondition'] = function (xq26) {
    var w$rte = this;return function () {
      return w$rte[xq26['replace']('this.', '')];
    };
  }, zjd7ki['EnvConfig'] = null, zjd7ki['window'] = null, zjd7ki['_preCreateElement'] = null, zjd7ki['_inited'] = !0x1, zjd7ki['wxRequest'] = null, zjd7ki['systemInfo'] = null, zjd7ki['version'] = '0.0.1', zjd7ki['isZiYu'] = !0x1, zjd7ki['isPosMsgYu'] = !0x1, zjd7ki['parseXMLFromString'] = function ($1vw4t) {
    var _2g0x;$1vw4t = $1vw4t['replace'](/>\s+</g, '><');try {
      _2g0x = new kqb6n['Parser']['DOMParser']()['parseFromString']($1vw4t, 'text/xml');
    } catch (w1vf4p) {
      throw '需要引入xml解析库文件';
    }return _2g0x;
  }, zjd7ki['idx'] = 0x1, zjd7ki);function zjd7ki() {}_gax(ew4t$, 'laya.wx.mini.MiniImage'), ew4t$['prototype']['_loadImage'] = function (djiuo) {
    var vf1w4t = !0x1;-0x1 == djiuo['indexOf']('layaNativeDir/') && (vf1w4t = !0x0, djiuo = x02m['formatURL'](djiuo)), p1ly['getFileInfo'](djiuo) ? ew4t$['onCreateImage'](djiuo, this, !vf1w4t) : -0x1 != djiuo['indexOf']('http://') || -0x1 != djiuo['indexOf']('https://') ? p1ly['downImg'](djiuo, new _x(ew4t$, ew4t$['onDownImgCallBack'], [djiuo, this]), djiuo) : ew4t$['onCreateImage'](djiuo, this, !0x0);
  }, ew4t$['onDownImgCallBack'] = function (jukzi, _mx2a, qmn7) {
    qmn7 ? _mx2a['onError'](null) : ew4t$['onCreateImage'](jukzi, _mx2a);
  }, ew4t$['onCreateImage'] = function (k7q6bn, hyc39, yh3l89) {
    var oiud5j, xnmq6b;function hl38() {
      xnmq6b['onload'] = null, xnmq6b['onerror'] = null, delete hyc39['imgCache'][k7q6bn];
    }oiud5j = (yh3l89 = void 0x0 === yh3l89 ? !0x1 : yh3l89) ? k7q6bn : (z6bnk7 = p1ly['getFileInfo'](k7q6bn)['md5'], p1ly['getFileNativePath'](z6bnk7)), null == hyc39['imgCache'] && (hyc39['imgCache'] = {}), yh3l89 = function () {
      hl38(), hyc39['onLoaded'](xnmq6b);
    };var z6bnk7 = function () {
      hl38(), hyc39['event']('error', 'Load image failed');
    };'nativeimage' == hyc39['_type'] ? ((xnmq6b = new idb7z['window']['Image']())['crossOrigin'] = '', xnmq6b['onload'] = yh3l89, xnmq6b['onerror'] = z6bnk7, xnmq6b['src'] = oiud5j, hyc39['imgCache'][k7q6bn] = xnmq6b) : new z7k6d['create'](oiud5j, { 'onload': yh3l89, 'onerror': z6bnk7, 'onCreate': function (hu8o59) {
        xnmq6b = hu8o59, hyc39['imgCache'][k7q6bn] = hu8o59;
      } });
  };function ew4t$() {}var v1pf = (_gax(ew$4, 'laya.wx.mini.MiniInput'), ew$4['_createInputElement'] = function () {
    x0ga_['_initInput'](x0ga_['area'] = idb7z['createElement']('textarea')), x0ga_['_initInput'](x0ga_['input'] = idb7z['createElement']('input')), x0ga_['inputContainer'] = idb7z['createElement']('div'), x0ga_['inputContainer']['style']['position'] = 'absolute', x0ga_['inputContainer']['style']['zIndex'] = 0x186a0, idb7z['container']['appendChild'](x0ga_['inputContainer']), x0ga_['inputContainer']['setPos'] = function (p3cfy, flpvc1) {
      x0ga_['inputContainer']['style']['left'] = p3cfy + 'px', x0ga_['inputContainer']['style']['top'] = flpvc1 + 'px';
    }, h9c3ly['stage']['on']('resize', null, ew$4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h95u8) {
      kqb6n['dispatchEvent'] && kqb6n['dispatchEvent']('resize');
    }), qm2ax['_soundClass'] = ojid5, qm2ax['_musicClass'] = ojid5;
  }, ew$4['_onStageResize'] = function () {
    h9c3ly['stage']['_canvasTransform']['identity']()['scale'](idb7z['width'] / xnmqb6['canvas']['width'] / g2_a0x['getPixelRatio'](), idb7z['height'] / xnmqb6['canvas']['height'] / g2_a0x['getPixelRatio']());
  }, ew$4['wxinputFocus'] = function (w14$vt) {
    var vp4f1 = x0ga_['inputElement']['target'];vp4f1 && !vp4f1['editable'] || (p1wvf4['window']['wx']['offKeyboardConfirm'](), p1wvf4['window']['wx']['offKeyboardInput'](), p1wvf4['window']['wx']['showKeyboard']({ 'defaultValue': vp4f1['text'], 'maxLength': vp4f1['maxChars'], 'multiple': vp4f1['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (cwpf) {}, 'fail': function (uo98h5) {} }), p1wvf4['window']['wx']['onKeyboardConfirm'](function (m6nqx2) {
      m6nqx2 = m6nqx2 ? m6nqx2['value'] : '', (vp4f1['text'] = m6nqx2, vp4f1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), p1wvf4['window']['wx']['onKeyboardInput'](function (t1wfv) {
      t1wfv = t1wfv ? t1wfv['value'] : '', vp4f1['multiline'] || -0x1 == t1wfv['indexOf']('\x0a') ? (vp4f1['text'] = t1wfv, vp4f1['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ew$4['inputEnter'] = function () {
    x0ga_['inputElement']['target']['focus'] = !0x1;
  }, ew$4['wxinputblur'] = function () {
    ew$4['hideKeyboard']();
  }, ew$4['hideKeyboard'] = function () {
    p1wvf4['window']['wx']['offKeyboardConfirm'](), p1wvf4['window']['wx']['offKeyboardInput'](), p1wvf4['window']['wx']['hideKeyboard']({ 'success': function (iou5dj) {
        console['log']('隐藏键盘');
      }, 'fail': function (ij85) {
        console['log']('隐藏键盘出错:' + (ij85 ? ij85['errMsg'] : ''));
      } });
  }, ew$4);function ew$4() {}var _a02xg = function () {
    function db7k() {}_gax(db7k, 'laya.wx.mini.MiniLoader');var qm67nb = db7k['prototype'];return qm67nb['load'] = function (nzb, z6b7k, wt4e$r, z7nbk6, udijk) {
      void 0x0 === wt4e$r && (wt4e$r = !0x0), void 0x0 === udijk && (udijk = !0x1);var p4f1v = this;0x0 === (p4f1v['_url'] = nzb)['indexOf']('data:image') ? p4f1v['_type'] = z6b7k = 'image' : p4f1v['_type'] = z6b7k = z6b7k || p4f1v['getTypeFromUrl'](nzb), p4f1v['_cache'] = wt4e$r, p4f1v['_data'] = null;var y3lch = 'ascii';-0x1 != nzb['indexOf']('.fnt') ? y3lch = 'utf8' : 'arraybuffer' == z6b7k && (y3lch = '');var f1lpc = a0q2['getFileExtension'](nzb);if (-0x1 != db7k['_fileTypeArr']['indexOf'](f1lpc)) p1wvf4['EnvConfig']['load']['call'](this, nzb, z6b7k, wt4e$r, z7nbk6, udijk);else {
        if (p1ly['getFileInfo'](nzb)) p1wvf4['EnvConfig']['load']['call'](this, nzb, z6b7k, wt4e$r, z7nbk6, udijk);else {
          if (-0x1 != nzb['indexOf']('layaNativeDir/')) {
            if (p1wvf4['isZiYu']) {
              var ioud5j = p1ly['ziyuFileData'][nzb];return void p4f1v['onLoaded'](ioud5j);
            }return cosnole['log']('read read'), void p1ly['read'](nzb, y3lch, new _x(db7k, db7k['onReadNativeCallBack'], [y3lch, nzb, z6b7k, wt4e$r, z7nbk6, udijk, p4f1v]));
          }ioud5j = '' == x02m['rootPath'] ? nzb : nzb['split'](x02m['rootPath'])[0x0], -0x1 != nzb['indexOf']('http://') || -0x1 != nzb['indexOf']('https://') ? p1wvf4['EnvConfig']['load']['call'](p4f1v, nzb, z6b7k, wt4e$r, z7nbk6, udijk) : p1ly['readFile'](ioud5j, y3lch, new _x(db7k, db7k['onReadNativeCallBack'], [y3lch, nzb, z6b7k, wt4e$r, z7nbk6, udijk, p4f1v]), nzb);
        }
      }
    }, qm67nb['resMgrLoad'] = function (cpl39y, g_2, cp1wvf, e4t$wr, hu8oj, p1vwc, p4f1vw) {
      void 0x0 === cp1wvf && (cp1wvf = 0x0), void 0x0 === e4t$wr && (e4t$wr = !0x1), void 0x0 === hu8oj && (hu8oj = !0x1), void 0x0 === p1vwc && (p1vwc = 0x0), void 0x0 === p4f1vw && (p4f1vw = 0x3), -0x1 != cpl39y['indexOf']('mpack') && console['log']('=============resMgrLoad url:', cpl39y), p1wvf4['EnvConfig']['resMgrLoad'](cpl39y, (ycf1lp, ijo8, xnbmq6) => {
        db7k['prototype']['resMgrLoadCallBack'](ycf1lp, ijo8, xnbmq6, g_2);
      }, cp1wvf, e4t$wr, hu8oj, p1vwc, p4f1vw);
    }, qm67nb['resMgrLoadCallBack'] = function (wfcvp1, db76kz, w1cfvp, bqx6m) {
      console['log']('buff:::', wfcvp1, w1cfvp, p1ly['fileNativeDir'] + '///' + p1ly['fileListName']), bqx6m(wfcvp1, db76kz, w1cfvp);
    }, qm67nb['clearRes'] = function (hly93, bmnqx) {
      this['clearRes'](hly93, bmnqx = void 0x0 === bmnqx ? !0x1 : bmnqx), bmnqx = p1ly['getFileInfo'](hly93), !bmnqx || -0x1 == hly93['indexOf']('http://') && -0x1 == hly93['indexOf']('https://') || (bmnqx = bmnqx['md5'], bmnqx = p1ly['getFileNativePath'](bmnqx), p1ly['remove'](bmnqx));
    }, db7k['onReadNativeCallBack'] = function (bkzd7i, n2qxm6, pwc1, _ga02, kdzb6, bk6, trw4e$, ojdzui, xqmb6n) {
      void 0x0 === _ga02 && (_ga02 = !0x0), void 0x0 === bk6 && (bk6 = !0x1), (ojdzui = void 0x0 === ojdzui ? 0x0 : ojdzui) ? 0x1 == ojdzui && p1wvf4['EnvConfig']['load']['call'](trw4e$, n2qxm6, pwc1, _ga02, kdzb6, bk6) : (xqmb6n = 'json' == pwc1 || 'atlas' == pwc1 ? p1wvf4['getJson'](xqmb6n['data']) : 'xml' == pwc1 ? a0q2['parseXMLFromString'](xqmb6n['data']) : xqmb6n['data'], trw4e$['onLoaded'](xqmb6n), !p1wvf4['isZiYu'] && p1wvf4['isPosMsgYu'] && 'arraybuffer' != pwc1 && wx['postMessage']({ 'url': n2qxm6, 'data': xqmb6n, 'isLoad': !0x0 }));
    }, h9yl8(db7k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), db7k;
  }(),
      p1ly = (_gax(h8uo9, 'laya.wx.mini.MiniFileMgr', _gx0a2), h8uo9['isLoadFile'] = function (ypfc1l) {
    return -0x1 != h8uo9['_fileTypeArr']['indexOf'](ypfc1l);
  }, h8uo9['getFileInfo'] = function ($1tw4v) {
    return $1tw4v = $1tw4v['split']('?')[0x0], $1tw4v = h8uo9['filesListObj'][$1tw4v], null == $1tw4v ? null : $1tw4v;
  }, h8uo9['onFileUpdate'] = function (mn2qx6, ve$4t) {
    var kbd7i = mn2qx6['split']('/');mn2qx6 = kbd7i[kbd7i['length'] - 0x1], kbd7i = h8uo9['getFileInfo'](ve$4t), null == kbd7i ? h8uo9['onSaveFile'](ve$4t, mn2qx6) : kbd7i['readyUrl'] != ve$4t && h8uo9['remove'](mn2qx6, ve$4t);
  }, h8uo9['exits'] = function (k67zdb, m2qx0a) {
    k67zdb = h8uo9['getFileNativePath'](k67zdb), h8uo9['fs']['getFileInfo']({ 'filePath': k67zdb, 'success': function (i5uo8j) {
        null != m2qx0a && m2qx0a['runWith']([0x0, i5uo8j]);
      }, 'fail': function (wvt$4) {
        null != m2qx0a && m2qx0a['runWith']([0x1, wvt$4]);
      } });
  }, h8uo9['read'] = function (kdiju, gx2a_0, $4ert, n7k6zb) {
    void 0x0 === gx2a_0 && (gx2a_0 = 'ascill'), kdiju = '' != (n7k6zb = void 0x0 === n7k6zb ? '' : n7k6zb) ? h8uo9['getFileNativePath'](kdiju) : kdiju, h8uo9['fs']['readFile']({ 'filePath': kdiju, 'encoding': gx2a_0, 'success': function (agx20) {
        null != $4ert && $4ert['runWith']([0x0, agx20]);
      }, 'fail': function (r$4tew) {
        r$4tew && '' != n7k6zb ? h8uo9['down'](n7k6zb, gx2a_0, $4ert, n7k6zb) : null != $4ert && $4ert['runWith']([0x1]);
      } });
  }, h8uo9['readNativeFile'] = function (flp3cy, kizdj7) {
    h8uo9['fs']['readFile']({ 'filePath': flp3cy, 'encoding': '', 'success': function (yp3c9l) {
        null != kizdj7 && kizdj7['runWith']([0x0]);
      }, 'fail': function (t1w4fv) {
        null != kizdj7 && kizdj7['runWith']([0x1]);
      } });
  }, h8uo9['down'] = function (py1flc, p1cvlf, zjdiuk, n6m2q) {
    void 0x0 === p1cvlf && (p1cvlf = 'ascill'), void 0x0 === n6m2q && (n6m2q = '');var h3l9y = h8uo9['getFileNativePath'](n6m2q);h8uo9['wxdown']({ 'url': py1flc, 'filePath': h3l9y, 'success': function (fwt14) {
        0xc8 === fwt14['statusCode'] && h8uo9['readFile'](fwt14['filePath'], p1cvlf, zjdiuk, n6m2q);
      }, 'fail': function (ud5ji) {
        null != zjdiuk && zjdiuk['runWith']([0x1, ud5ji]);
      } })['onProgressUpdate'](function (axm02) {
      null != zjdiuk && zjdiuk['runWith']([0x2, axm02['progress']]);
    });
  }, h8uo9['readFile'] = function (bz67n, ertw4$, anxm2, anx) {
    void 0x0 === anx && (anx = ''), h8uo9['fs']['readFile']({ 'filePath': bz67n, 'encoding': ertw4$ = void 0x0 === ertw4$ ? 'ascill' : ertw4$, 'success': function (x6nbqm) {
        -0x1 == bz67n['indexOf']('http://') && -0x1 == bz67n['indexOf']('https://') || h8uo9['onFileUpdate'](bz67n, anx), null != anxm2 && anxm2['runWith']([0x0, x6nbqm]);
      }, 'fail': function (m6nxq) {
        m6nxq && null != anxm2 && anxm2['runWith']([0x1, m6nxq]);
      } });
  }, h8uo9['downImg'] = function (_x2m0, qbn6x, ou5ij8) {
    void 0x0 === ou5ij8 && (ou5ij8 = ''), h8uo9['wxdown']({ 'url': _x2m0, 'success': function (y39hc) {
        0xc8 === y39hc['statusCode'] && h8uo9['copyFile'](y39hc['tempFilePath'], ou5ij8, qbn6x);
      }, 'fail': function (mn6x2) {
        null != qbn6x && qbn6x['runWith']([0x1, mn6x2]);
      } });
  }, h8uo9['copyFile'] = function (vp4wf1, t1$4, zkidb) {
    var qmn2a = vp4wf1['split']('/'),
        m2qxa0 = qmn2a[qmn2a['length'] - 0x1];t1$4['split']('?')[0x0];var pw1v = h8uo9['getFileInfo'](t1$4);qmn2a = h8uo9['getFileNativePath'](m2qxa0), h8uo9['fs']['copyFile']({ 'srcPath': vp4wf1, 'destPath': qmn2a, 'success': function ($tw4e) {
        pw1v ? pw1v['readyUrl'] != t1$4 && h8uo9['remove'](m2qxa0, t1$4, zkidb) : (h8uo9['onSaveFile'](t1$4, m2qxa0), null != zkidb && zkidb['runWith']([0x0]));
      }, 'fail': function (h8935) {
        null != zkidb && zkidb['runWith']([0x1, h8935]);
      } });
  }, h8uo9['getFileNativePath'] = function (f14wt) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f14wt;
  }, h8uo9['remove'] = function (tw1vf4, p1ylf, m2q6xn) {
    void 0x0 === p1ylf && (p1ylf = '');var yhc9l = h8uo9['getFileInfo'](p1ylf),
        _gx20 = h8uo9['getFileNativePath'](yhc9l['md5']);h9c3ly['loader']['clearRes'](yhc9l['readyUrl']), h8uo9['fs']['unlink']({ 'filePath': _gx20, 'success': function (o58juh) {
        '' != p1ylf && h8uo9['onSaveFile'](p1ylf, tw1vf4), null != m2q6xn && m2q6xn['runWith']([0x0]);
      }, 'fail': function (f3lyp) {} });
  }, h8uo9['onSaveFile'] = function (t1wv4, pcl1v) {
    var joui5d = t1wv4['split']('?')[0x0];h8uo9['filesListObj'][joui5d] = { 'md5': pcl1v, 'readyUrl': t1wv4 }, h8uo9['fs']['writeFile']({ 'filePath': h8uo9['fileNativeDir'] + '/' + h8uo9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h8uo9['filesListObj']), 'success': function (fycl1p) {
        console['log']('写入测试测试成功：', fycl1p);
      }, 'fail': function (x0g_) {
        console['log']('写入测试测试失败：', x0g_);
      } });
  }, h8uo9['existDir'] = function (cl9hy3, plcy93) {
    h8uo9['fs']['mkdir']({ 'dirPath': cl9hy3, 'success': function (pfw4v) {
        null != plcy93 && plcy93['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (z6bk7n) {
        -0x1 != z6bk7n['errMsg']['indexOf']('file already exists') ? h8uo9['readSync'](h8uo9['fileListName'], 'utf8', plcy93) : null != plcy93 && plcy93['runWith']([0x1, z6bk7n]);
      } });
  }, h8uo9['readSync'] = function ($wtre4, y58h93, dbkz67, pyc3f) {
    void 0x0 === y58h93 && (y58h93 = 'ascill'), void 0x0 === pyc3f && (pyc3f = ''), $wtre4 = h8uo9['getFileNativePath']($wtre4);var pw41f;try {
      pw41f = h8uo9['fs']['readFileSync']($wtre4), null != dbkz67 && dbkz67['runWith']([0x0, { 'data': pw41f }]);
    } catch (g0a_2x) {
      null != dbkz67 && dbkz67['runWith']([0x1]);
    }
  }, h8uo9['readCache'] = function () {}, h8uo9['writeCache'] = function (zudi) {
    var ft41vw = readyUrl['split']('?')[0x0];h8uo9['filesListObj'][ft41vw] = { 'md5': md5Name, 'readyUrl': readyUrl }, h8uo9['fs']['writeFile']({ 'filePath': h8uo9['fileNativeDir'] + '/' + h8uo9['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h8uo9['filesListObj']), 'success': function (kiz7bd) {}, 'fail': function (qnax) {} });
  }, h8uo9['setNativeFileDir'] = function (n7bzk6) {
    h8uo9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + n7bzk6;
  }, h8uo9['filesListObj'] = {}, h8uo9['fileNativeDir'] = null, h8uo9['fileListName'] = 'layaairfiles.txt', h8uo9['ziyuFileData'] = {}, h9yl8(h8uo9, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), h8uo9);function h8uo9() {
    h8uo9['__super']['call'](this);
  }var ojid5 = function () {
    function nmqb6() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, nmqb6['__super']['call'](this), this['_sound'] = nmqb6['_createSound']();
    }_gax(nmqb6, 'laya.wx.mini.MiniSound', _gx0a2);var a_g02 = nmqb6['prototype'];return a_g02['load'] = function (hyl9c3) {
      var wtv41$ = this,
          zdiuj;function h985uo() {
        if (null != nmqb6['_null']) wtv41$['_sound']['onCanplay'](nmqb6['_null']), wtv41$['_sound']['onError'](nmqb6['_null']);else try {
          wtv41$['_sound']['onCanplay'](null), wtv41$['_sound']['onError'](null), nmqb6['_null'] = null;
        } catch (nqax2m) {
          console['warn']('[wxmini] _clearSound:' + nqax2m), wtv41$['_sound']['onCanplay'](kz6b7), wtv41$['_sound']['onError'](kz6b7), nmqb6['_null'] = kz6b7;
        }
      }function kz6b7() {}hyl9c3 = x02m['formatURL'](hyl9c3), this['url'] = hyl9c3, nmqb6['_audioCache'][hyl9c3] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        h985uo(), zdiuj['loaded'] = !0x0, zdiuj['event']('complete'), nmqb6['_audioCache'][zdiuj['url']] = zdiuj;
      }), this['_sound']['onError'](function ($t4wve) {
        console['error']('errCode=' + $t4wve['errCode'] + '  errMsg=' + $t4wve['errMsg']), h985uo(), zdiuj['event']('error');
      }), this['_sound']['src'] = hyl9c3, zdiuj = this);
    }, a_g02['play'] = function (zd7k6, cp39yl) {
      void 0x0 === zd7k6 && (zd7k6 = 0x0), void 0x0 === cp39yl && (cp39yl = 0x0), (d7kzbi = this['url'] == qm2ax['_tMusic'] ? (nmqb6['_musicAudio'] || (nmqb6['_musicAudio'] = nmqb6['_createSound']()), nmqb6['_musicAudio']) : nmqb6['_createSound']())['src'] = this['url'];var d7kzbi = new diujk(d7kzbi);return d7kzbi['url'] = this['url'], d7kzbi['loops'] = cp39yl, d7kzbi['startTime'] = zd7k6, d7kzbi['play'](), qm2ax['addChannel'](d7kzbi), d7kzbi;
    }, a_g02['dispose'] = function () {
      var vft1w4 = nmqb6['_audioCache'][this['url']];vft1w4 && (vft1w4['src'] = '', delete nmqb6['_audioCache'][this['url']]);
    }, zoujid(0x0, a_g02, 'duration', function () {
      return this['_sound']['duration'];
    }), nmqb6['_createSound'] = function () {
      return nmqb6['_id']++, p1wvf4['window']['wx']['createInnerAudioContext']();
    }, nmqb6['_musicAudio'] = null, nmqb6['_id'] = 0x0, nmqb6['_audioCache'] = {}, nmqb6['_null'] = void 0x0, nmqb6;
  }(),
      diujk = function () {
    function x2m_(vtw4$1) {
      this['_audio'] = null, this['_onEnd'] = null, x2m_['__super']['call'](this), this['_audio'] = vtw4$1, this['_onEnd'] = a0q2['bind'](this['__onEnd'], this), vtw4$1['onEnded'](this['_onEnd']);
    }_gax(x2m_, 'laya.wx.mini.MiniSoundChannel', vfpcw1);var zi7k = x2m_['prototype'];return zi7k['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (h9c3ly['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zi7k['__onNull'] = function () {}, zi7k['play'] = function () {
      this['isStopped'] = !0x1, qm2ax['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, zi7k['stop'] = function () {
      if (this['isStopped'] = !0x0, qm2ax['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != x2m_['_null']) this['_audio']['onEnded'](x2m_['_null']);else try {
          this['_audio']['onEnded'](null), x2m_['_null'] = null;
        } catch (izbkd) {
          console['warn']('[wxmini] stop:' + izbkd), this['_audio']['onEnded'](a0q2['bind'](this['__onNull'], this)), x2m_['_null'] = a0q2['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, zi7k['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, zi7k['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, qm2ax['addChannel'](this), this['_audio']['play']());
    }, zoujid(0x0, zi7k, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), zoujid(0x0, zi7k, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), zoujid(0x0, zi7k, 'volume', function () {
      return 0x1;
    }, function (t1$w4) {}), x2m_['_null'] = void 0x0, x2m_;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (h5y98, b67kd) {
  'use strict';

  for (var h9l38 in Object['defineProperty'](b67kd, '__esModule', { 'value': !0x0 }), Laya) {
    var mbxqn6 = Laya[h9l38];mbxqn6 && mbxqn6['__isclass'] && (b67kd[h9l38] = mbxqn6);
  }
});