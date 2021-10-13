var p = wx.$h;
!function (l0pq3, iok5v) {
  iok5v['un'], iok5v['uns'];var bfzqa = iok5v['static'],
      v9oex = iok5v['class'],
      qlc3f = iok5v['getset'];iok5v['__newvec'];var hg8r2 = laya['utils']['Browser'],
      kiza5 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      j1$7 = laya['resource']['HTMLImage'],
      wpy30l = laya['utils']['Handler'],
      cwzbf = laya['display']['Input'],
      g82r = laya['net']['Loader'];laya['maths']['Matrix'];var s7$dt = laya['renders']['Render'],
      k5oiv9 = laya['utils']['RunDriver'];laya['media']['Sound'];var my14j_ = laya['media']['SoundChannel'],
      ekx = laya['media']['SoundManager'],
      t_$7j = (laya['display']['Stage'], laya['net']['URL']),
      eh89xo = laya['utils']['Utils'],
      wlp0q3 = (v9oex(iko9e, 'laya.wx.mini.MiniAdpter'), iko9e['getJson'] = function (aiz5f) {
    return JSON['parse'](aiz5f);
  }, iko9e['init'] = function (ok5vi9, bfwqc) {
    void 0x0 === ok5vi9 && (ok5vi9 = !0x1), void 0x0 === bfwqc && (bfwqc = !0x1), iko9e['_inited'] || (iko9e['window'] = l0pq3)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (iko9e['_inited'] = !0x0, iko9e['isZiYu'] = bfwqc, iko9e['isPosMsgYu'] = ok5vi9, iko9e['EnvConfig'] = {}, iko9e['isZiYu'] || ($tn_['setNativeFileDir']('/layaairGame'), $tn_['existDir']($tn_['fileNativeDir'], wpy30l['create'](iko9e, iko9e['onMkdirCallBack']))), iko9e['window']['focus'] = function () {}, iok5v['getUrlPath'] = function () {}, iko9e['window']['logtime'] = function (_7$tnj) {}, iko9e['window']['alertTimeLog'] = function (n7_$jt) {}, iko9e['window']['resetShareInfo'] = function () {}, iko9e['window']['CanvasRenderingContext2D'] = function () {}, iko9e['window']['CanvasRenderingContext2D']['prototype'] = iko9e['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], iko9e['window']['document']['body']['appendChild'] = function () {}, iko9e['EnvConfig']['pixelRatioInt'] = 0x0, k5oiv9['getPixelRatio'] = iko9e['pixelRatio'], iko9e['_preCreateElement'] = hg8r2['createElement'], hg8r2['createElement'] = iko9e['createElement'], k5oiv9['createShaderCondition'] = iko9e['createShaderCondition'], eh89xo['parseXMLFromString'] = iko9e['parseXMLFromString'], cwzbf['_createInputElement'] = _$t7nd['_createInputElement'], iko9e['EnvConfig']['load'] = g82r['prototype']['load'], g82r['prototype']['load'] = ivk5['prototype']['load'], iko9e['isZiYu'] && ok5vi9 && wx['onMessage'](function (zba5f) {
      zba5f['isLoad'] && ($tn_['ziyuFileData'][zba5f['url']] = zba5f['data']);
    }));
  }, iko9e['onMkdirCallBack'] = function (v9i5o, yp4l30) {
    v9i5o || ($tn_['filesListObj'] = JSON['parse'](yp4l30['data']));
  }, iko9e['pixelRatio'] = function () {
    if (!iko9e['EnvConfig']['pixelRatioInt']) try {
      var qp = wx['getSystemInfoSync']();return iko9e['EnvConfig']['pixelRatioInt'] = qp['pixelRatio'], qp['pixelRatio'];
    } catch (k5vai) {}return iko9e['EnvConfig']['pixelRatioInt'];
  }, iko9e['createElement'] = function (iva5b) {
    var vo;if ('canvas' == iva5b) return 0x1 == iko9e['idx'] ? iko9e['isZiYu'] ? (vo = sharedCanvas)['style'] = {} : vo = l0pq3['canvas'] : vo = l0pq3['wx']['createCanvas'](), iko9e['idx']++, vo;if ('textarea' == iva5b || 'input' == iva5b) return iko9e['onCreateInput'](iva5b);if ('div' != iva5b) return iko9e['_preCreateElement'](iva5b);return iva5b = iko9e['_preCreateElement'](iva5b), (iva5b['contains'] = function (lfq3cw) {
      return null;
    }, iva5b['removeChild'] = function (fbacz5) {}, iva5b);
  }, iko9e['onCreateInput'] = function (z5kab) {
    return z5kab = iko9e['_preCreateElement'](z5kab), (z5kab['focus'] = _$t7nd['wxinputFocus'], z5kab['blur'] = _$t7nd['wxinputblur'], z5kab['style'] = {}, z5kab['value'] = 0x0, z5kab['parentElement'] = {}, z5kab['placeholder'] = {}, z5kab['type'] = {}, z5kab['setColor'] = function (v5i9k) {}, z5kab['setType'] = function (n7$jt_) {}, z5kab['setFontFace'] = function (q0l3wp) {}, z5kab['addEventListener'] = function (v5iaok) {}, z5kab['contains'] = function (xev8) {
      return null;
    }, z5kab['removeChild'] = function (hx8e) {}, z5kab);
  }, iko9e['createShaderCondition'] = function (p3y40m) {
    var ekvoi = this;return function () {
      return ekvoi[p3y40m['replace']('this.', '')];
    };
  }, iko9e['EnvConfig'] = null, iko9e['window'] = null, iko9e['_preCreateElement'] = null, iko9e['_inited'] = !0x1, iko9e['wxRequest'] = null, iko9e['systemInfo'] = null, iko9e['version'] = '0.0.1', iko9e['isZiYu'] = !0x1, iko9e['isPosMsgYu'] = !0x1, iko9e['parseXMLFromString'] = function (_174j) {
    var tn;_174j = _174j['replace'](/>\s+</g, '><');try {
      tn = new l0pq3['Parser']['DOMParser']()['parseFromString'](_174j, 'text/xml');
    } catch (mj14y_) {
      throw '需要引入xml解析库文件';
    }return tn;
  }, iko9e['idx'] = 0x1, iko9e);function iko9e() {}v9oex(ohe9x8, 'laya.wx.mini.MiniImage'), ohe9x8['prototype']['_loadImage'] = function (h86xr) {
    var bzf5i = !0x1;-0x1 == h86xr['indexOf']('layaNativeDir/') && (bzf5i = !0x0, h86xr = t_$7j['formatURL'](h86xr)), $tn_['getFileInfo'](h86xr) ? ohe9x8['onCreateImage'](h86xr, this, !bzf5i) : -0x1 != h86xr['indexOf']('http://') || -0x1 != h86xr['indexOf']('https://') ? $tn_['downImg'](h86xr, new wpy30l(ohe9x8, ohe9x8['onDownImgCallBack'], [h86xr, this]), h86xr) : ohe9x8['onCreateImage'](h86xr, this, !0x0);
  }, ohe9x8['onDownImgCallBack'] = function (y30wp, _1jm$, k5iabv) {
    k5iabv ? _1jm$['onError'](null) : ohe9x8['onCreateImage'](y30wp, _1jm$);
  }, ohe9x8['onCreateImage'] = function (qlfcw, kvo9i5, dnt_) {
    var bfzwc, t_n$7j;function n$7td_() {
      t_n$7j['onload'] = null, t_n$7j['onerror'] = null, delete kvo9i5['imgCache'][qlfcw];
    }bfzwc = (dnt_ = void 0x0 === dnt_ ? !0x1 : dnt_) ? qlfcw : (_t17$ = $tn_['getFileInfo'](qlfcw)['md5'], $tn_['getFileNativePath'](_t17$)), null == kvo9i5['imgCache'] && (kvo9i5['imgCache'] = {}), dnt_ = function () {
      n$7td_(), kvo9i5['onLoaded'](t_n$7j);
    };var _t17$ = function () {
      n$7td_(), kvo9i5['event']('error', 'Load image failed');
    };'nativeimage' == kvo9i5['_type'] ? ((t_n$7j = new hg8r2['window']['Image']())['crossOrigin'] = '', t_n$7j['onload'] = dnt_, t_n$7j['onerror'] = _t17$, t_n$7j['src'] = bfzwc, kvo9i5['imgCache'][qlfcw] = t_n$7j) : new j1$7['create'](bfzwc, { 'onload': dnt_, 'onerror': _t17$, 'onCreate': function (_jmy) {
        t_n$7j = _jmy, kvo9i5['imgCache'][qlfcw] = _jmy;
      } });
  };function ohe9x8() {}var _$t7nd = (v9oex($1jt7, 'laya.wx.mini.MiniInput'), $1jt7['_createInputElement'] = function () {
    cwzbf['_initInput'](cwzbf['area'] = hg8r2['createElement']('textarea')), cwzbf['_initInput'](cwzbf['input'] = hg8r2['createElement']('input')), cwzbf['inputContainer'] = hg8r2['createElement']('div'), cwzbf['inputContainer']['style']['position'] = 'absolute', cwzbf['inputContainer']['style']['zIndex'] = 0x186a0, hg8r2['container']['appendChild'](cwzbf['inputContainer']), cwzbf['inputContainer']['setPos'] = function (e26, ivek9o) {
      cwzbf['inputContainer']['style']['left'] = e26 + 'px', cwzbf['inputContainer']['style']['top'] = ivek9o + 'px';
    }, iok5v['stage']['on']('resize', null, $1jt7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hex29) {
      l0pq3['dispatchEvent'] && l0pq3['dispatchEvent']('resize');
    }), ekx['_soundClass'] = e98hx2, ekx['_musicClass'] = e98hx2;
  }, $1jt7['_onStageResize'] = function () {
    iok5v['stage']['_canvasTransform']['identity']()['scale'](hg8r2['width'] / s7$dt['canvas']['width'] / k5oiv9['getPixelRatio'](), hg8r2['height'] / s7$dt['canvas']['height'] / k5oiv9['getPixelRatio']());
  }, $1jt7['wxinputFocus'] = function (p14m) {
    var y04l3 = cwzbf['inputElement']['target'];y04l3 && !y04l3['editable'] || (wlp0q3['window']['wx']['offKeyboardConfirm'](), wlp0q3['window']['wx']['offKeyboardInput'](), wlp0q3['window']['wx']['showKeyboard']({ 'defaultValue': y04l3['text'], 'maxLength': y04l3['maxChars'], 'multiple': y04l3['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (_17m$) {}, 'fail': function (wqzfl) {} }), wlp0q3['window']['wx']['onKeyboardConfirm'](function (kai5ov) {
      kai5ov = kai5ov ? kai5ov['value'] : '', (y04l3['text'] = kai5ov, y04l3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), wlp0q3['window']['wx']['onKeyboardInput'](function (l3y4p) {
      l3y4p = l3y4p ? l3y4p['value'] : '', y04l3['multiline'] || -0x1 == l3y4p['indexOf']('\x0a') ? (y04l3['text'] = l3y4p, y04l3['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, $1jt7['inputEnter'] = function () {
    cwzbf['inputElement']['target']['focus'] = !0x1;
  }, $1jt7['wxinputblur'] = function () {
    $1jt7['hideKeyboard']();
  }, $1jt7['hideKeyboard'] = function () {
    wlp0q3['window']['wx']['offKeyboardConfirm'](), wlp0q3['window']['wx']['offKeyboardInput'](), wlp0q3['window']['wx']['hideKeyboard']({ 'success': function (p3l40y) {
        console['log']('隐藏键盘');
      }, 'fail': function (t$7dsn) {
        console['log']('隐藏键盘出错:' + (t$7dsn ? t$7dsn['errMsg'] : ''));
      } });
  }, $1jt7);function $1jt7() {}var ivk5 = function () {
    function aczb() {}v9oex(aczb, 'laya.wx.mini.MiniLoader');var ca5fzb = aczb['prototype'];return ca5fzb['load'] = function (p41m, ex289, cqzfa, mpy10, wbqfcz) {
      void 0x0 === cqzfa && (cqzfa = !0x0), void 0x0 === wbqfcz && (wbqfcz = !0x1);var h89e = this;0x0 === (h89e['_url'] = p41m)['indexOf']('data:image') ? h89e['_type'] = ex289 = 'image' : h89e['_type'] = ex289 = ex289 || h89e['getTypeFromUrl'](p41m), h89e['_cache'] = cqzfa, h89e['_data'] = null;var l0wq3p = 'ascii';-0x1 != p41m['indexOf']('.fnt') ? l0wq3p = 'utf8' : 'arraybuffer' == ex289 && (l0wq3p = '');var q3wp0l = eh89xo['getFileExtension'](p41m);if (-0x1 != aczb['_fileTypeArr']['indexOf'](q3wp0l)) wlp0q3['EnvConfig']['load']['call'](this, p41m, ex289, cqzfa, mpy10, wbqfcz);else {
        if ($tn_['getFileInfo'](p41m)) wlp0q3['EnvConfig']['load']['call'](this, p41m, ex289, cqzfa, mpy10, wbqfcz);else {
          if (-0x1 != p41m['indexOf']('layaNativeDir/')) {
            if (wlp0q3['isZiYu']) {
              var e289hx = $tn_['ziyuFileData'][p41m];return void h89e['onLoaded'](e289hx);
            }return cosnole['log']('read read'), void $tn_['read'](p41m, l0wq3p, new wpy30l(aczb, aczb['onReadNativeCallBack'], [l0wq3p, p41m, ex289, cqzfa, mpy10, wbqfcz, h89e]));
          }e289hx = '' == t_$7j['rootPath'] ? p41m : p41m['split'](t_$7j['rootPath'])[0x0], -0x1 != p41m['indexOf']('http://') || -0x1 != p41m['indexOf']('https://') ? wlp0q3['EnvConfig']['load']['call'](h89e, p41m, ex289, cqzfa, mpy10, wbqfcz) : $tn_['readFile'](e289hx, l0wq3p, new wpy30l(aczb, aczb['onReadNativeCallBack'], [l0wq3p, p41m, ex289, cqzfa, mpy10, wbqfcz, h89e]), p41m);
        }
      }
    }, ca5fzb['resMgrLoad'] = function (_j$m7, e98xho, m_14jy, c5abf, wqlp3, x8hr6, ek9ivo) {
      void 0x0 === m_14jy && (m_14jy = 0x0), void 0x0 === c5abf && (c5abf = !0x1), void 0x0 === wqlp3 && (wqlp3 = !0x1), void 0x0 === x8hr6 && (x8hr6 = 0x0), void 0x0 === ek9ivo && (ek9ivo = 0x3), -0x1 != _j$m7['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _j$m7), wlp0q3['EnvConfig']['resMgrLoad'](_j$m7, (tj1$, lfc3wq, hx8oe) => {
        aczb['prototype']['resMgrLoadCallBack'](tj1$, lfc3wq, hx8oe, e98xho);
      }, m_14jy, c5abf, wqlp3, x8hr6, ek9ivo);
    }, ca5fzb['resMgrLoadCallBack'] = function (lcqzwf, r28g6h, jn$7t, kivo9) {
      console['log']('buff:::', lcqzwf, jn$7t, $tn_['fileNativeDir'] + '///' + $tn_['fileListName']), kivo9(lcqzwf, r28g6h, jn$7t);
    }, ca5fzb['clearRes'] = function (okx9ev, fqbcza) {
      this['clearRes'](okx9ev, fqbcza = void 0x0 === fqbcza ? !0x1 : fqbcza), fqbcza = $tn_['getFileInfo'](okx9ev), !fqbcza || -0x1 == okx9ev['indexOf']('http://') && -0x1 == okx9ev['indexOf']('https://') || (fqbcza = fqbcza['md5'], fqbcza = $tn_['getFileNativePath'](fqbcza), $tn_['remove'](fqbcza));
    }, aczb['onReadNativeCallBack'] = function (fqwlcz, c3wl, vike9, kib5a, _4jy1, clzwq, lw3cqf, vkx9e, jm74_) {
      void 0x0 === kib5a && (kib5a = !0x0), void 0x0 === clzwq && (clzwq = !0x1), (vkx9e = void 0x0 === vkx9e ? 0x0 : vkx9e) ? 0x1 == vkx9e && wlp0q3['EnvConfig']['load']['call'](lw3cqf, c3wl, vike9, kib5a, _4jy1, clzwq) : (jm74_ = 'json' == vike9 || 'atlas' == vike9 ? wlp0q3['getJson'](jm74_['data']) : 'xml' == vike9 ? eh89xo['parseXMLFromString'](jm74_['data']) : jm74_['data'], lw3cqf['onLoaded'](jm74_), !wlp0q3['isZiYu'] && wlp0q3['isPosMsgYu'] && 'arraybuffer' != vike9 && wx['postMessage']({ 'url': c3wl, 'data': jm74_, 'isLoad': !0x0 }));
    }, bfzqa(aczb, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), aczb;
  }(),
      $tn_ = (v9oex(t7$sn, 'laya.wx.mini.MiniFileMgr', kiza5), t7$sn['isLoadFile'] = function (qwl03c) {
    return -0x1 != t7$sn['_fileTypeArr']['indexOf'](qwl03c);
  }, t7$sn['getFileInfo'] = function (kbv5i) {
    return kbv5i = kbv5i['split']('?')[0x0], kbv5i = t7$sn['filesListObj'][kbv5i], null == kbv5i ? null : kbv5i;
  }, t7$sn['onFileUpdate'] = function (cza5f, qflz) {
    var n7t_$ = cza5f['split']('/');cza5f = n7t_$[n7t_$['length'] - 0x1], n7t_$ = t7$sn['getFileInfo'](qflz), null == n7t_$ ? t7$sn['onSaveFile'](qflz, cza5f) : n7t_$['readyUrl'] != qflz && t7$sn['remove'](cza5f, qflz);
  }, t7$sn['exits'] = function (kvie9o, $7ntj_) {
    kvie9o = t7$sn['getFileNativePath'](kvie9o), t7$sn['fs']['getFileInfo']({ 'filePath': kvie9o, 'success': function (o5aik) {
        null != $7ntj_ && $7ntj_['runWith']([0x0, o5aik]);
      }, 'fail': function (wqfl3) {
        null != $7ntj_ && $7ntj_['runWith']([0x1, wqfl3]);
      } });
  }, t7$sn['read'] = function (kexo9, t7$ns, x6h28e, qlfcwz) {
    void 0x0 === t7$ns && (t7$ns = 'ascill'), kexo9 = '' != (qlfcwz = void 0x0 === qlfcwz ? '' : qlfcwz) ? t7$sn['getFileNativePath'](kexo9) : kexo9, t7$sn['fs']['readFile']({ 'filePath': kexo9, 'encoding': t7$ns, 'success': function (dn_t7) {
        null != x6h28e && x6h28e['runWith']([0x0, dn_t7]);
      }, 'fail': function (ex) {
        ex && '' != qlfcwz ? t7$sn['down'](qlfcwz, t7$ns, x6h28e, qlfcwz) : null != x6h28e && x6h28e['runWith']([0x1]);
      } });
  }, t7$sn['readNativeFile'] = function (h6xr8, t$n) {
    t7$sn['fs']['readFile']({ 'filePath': h6xr8, 'encoding': '', 'success': function (qw0lc) {
        null != t$n && t$n['runWith']([0x0]);
      }, 'fail': function (oxvek) {
        null != t$n && t$n['runWith']([0x1]);
      } });
  }, t7$sn['down'] = function (dstn, my4j1p, p40yl, wlfq) {
    void 0x0 === my4j1p && (my4j1p = 'ascill'), void 0x0 === wlfq && (wlfq = '');var azqbcf = t7$sn['getFileNativePath'](wlfq);t7$sn['wxdown']({ 'url': dstn, 'filePath': azqbcf, 'success': function (zcqbf) {
        0xc8 === zcqbf['statusCode'] && t7$sn['readFile'](zcqbf['filePath'], my4j1p, p40yl, wlfq);
      }, 'fail': function (ivoke) {
        null != p40yl && p40yl['runWith']([0x1, ivoke]);
      } })['onProgressUpdate'](function (k5vi9o) {
      null != p40yl && p40yl['runWith']([0x2, k5vi9o['progress']]);
    });
  }, t7$sn['readFile'] = function (kb5, w0y3p, fq3wlc, jp41) {
    void 0x0 === jp41 && (jp41 = ''), t7$sn['fs']['readFile']({ 'filePath': kb5, 'encoding': w0y3p = void 0x0 === w0y3p ? 'ascill' : w0y3p, 'success': function (lqwzf) {
        -0x1 == kb5['indexOf']('http://') && -0x1 == kb5['indexOf']('https://') || t7$sn['onFileUpdate'](kb5, jp41), null != fq3wlc && fq3wlc['runWith']([0x0, lqwzf]);
      }, 'fail': function (wcfqzl) {
        wcfqzl && null != fq3wlc && fq3wlc['runWith']([0x1, wcfqzl]);
      } });
  }, t7$sn['downImg'] = function (tn7$j_, x982e, pwl03q) {
    void 0x0 === pwl03q && (pwl03q = ''), t7$sn['wxdown']({ 'url': tn7$j_, 'success': function (ox8ve9) {
        0xc8 === ox8ve9['statusCode'] && t7$sn['copyFile'](ox8ve9['tempFilePath'], pwl03q, x982e);
      }, 'fail': function (x2e8h) {
        null != x982e && x982e['runWith']([0x1, x2e8h]);
      } });
  }, t7$sn['copyFile'] = function (qw3cfl, fabz5c, l3pyw0) {
    var iabzk5 = qw3cfl['split']('/'),
        o9iek = iabzk5[iabzk5['length'] - 0x1];fabz5c['split']('?')[0x0];var wqzcbf = t7$sn['getFileInfo'](fabz5c);iabzk5 = t7$sn['getFileNativePath'](o9iek), t7$sn['fs']['copyFile']({ 'srcPath': qw3cfl, 'destPath': iabzk5, 'success': function (aib5f) {
        wqzcbf ? wqzcbf['readyUrl'] != fabz5c && t7$sn['remove'](o9iek, fabz5c, l3pyw0) : (t7$sn['onSaveFile'](fabz5c, o9iek), null != l3pyw0 && l3pyw0['runWith']([0x0]));
      }, 'fail': function (i5kzab) {
        null != l3pyw0 && l3pyw0['runWith']([0x1, i5kzab]);
      } });
  }, t7$sn['getFileNativePath'] = function (lp3w0) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lp3w0;
  }, t7$sn['remove'] = function (vki5ao, qp0lw, ym14j) {
    void 0x0 === qp0lw && (qp0lw = '');var ym40p1 = t7$sn['getFileInfo'](qp0lw),
        $j1 = t7$sn['getFileNativePath'](ym40p1['md5']);iok5v['loader']['clearRes'](ym40p1['readyUrl']), t7$sn['fs']['unlink']({ 'filePath': $j1, 'success': function (wy3pl) {
        '' != qp0lw && t7$sn['onSaveFile'](qp0lw, vki5ao), null != ym14j && ym14j['runWith']([0x0]);
      }, 'fail': function (j4m_7) {} });
  }, t7$sn['onSaveFile'] = function (h28xr, cqfbzw) {
    var q0w3 = h28xr['split']('?')[0x0];t7$sn['filesListObj'][q0w3] = { 'md5': cqfbzw, 'readyUrl': h28xr }, t7$sn['fs']['writeFile']({ 'filePath': t7$sn['fileNativeDir'] + '/' + t7$sn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t7$sn['filesListObj']), 'success': function (l0cqw) {
        console['log']('写入测试测试成功：', l0cqw);
      }, 'fail': function (e9ivo) {
        console['log']('写入测试测试失败：', e9ivo);
      } });
  }, t7$sn['existDir'] = function (j7$m1, ivoke9) {
    t7$sn['fs']['mkdir']({ 'dirPath': j7$m1, 'success': function (x8v) {
        null != ivoke9 && ivoke9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (rg8) {
        -0x1 != rg8['errMsg']['indexOf']('file already exists') ? t7$sn['readSync'](t7$sn['fileListName'], 'utf8', ivoke9) : null != ivoke9 && ivoke9['runWith']([0x1, rg8]);
      } });
  }, t7$sn['readSync'] = function (lzqf, wfcl, st7$nd, j74_1) {
    void 0x0 === wfcl && (wfcl = 'ascill'), void 0x0 === j74_1 && (j74_1 = ''), lzqf = t7$sn['getFileNativePath'](lzqf);var n7j$t_;try {
      n7j$t_ = t7$sn['fs']['readFileSync'](lzqf), null != st7$nd && st7$nd['runWith']([0x0, { 'data': n7j$t_ }]);
    } catch (h2rx6) {
      null != st7$nd && st7$nd['runWith']([0x1]);
    }
  }, t7$sn['readCache'] = function () {}, t7$sn['writeCache'] = function (zfaqc) {
    var h68g2 = readyUrl['split']('?')[0x0];t7$sn['filesListObj'][h68g2] = { 'md5': md5Name, 'readyUrl': readyUrl }, t7$sn['fs']['writeFile']({ 'filePath': t7$sn['fileNativeDir'] + '/' + t7$sn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t7$sn['filesListObj']), 'success': function ($s7nd) {}, 'fail': function (y4l3p0) {} });
  }, t7$sn['setNativeFileDir'] = function (m1yjp) {
    t7$sn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m1yjp;
  }, t7$sn['filesListObj'] = {}, t7$sn['fileNativeDir'] = null, t7$sn['fileListName'] = 'layaairfiles.txt', t7$sn['ziyuFileData'] = {}, bfzqa(t7$sn, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), t7$sn);function t7$sn() {
    t7$sn['__super']['call'](this);
  }var e98hx2 = function () {
    function yp40() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, yp40['__super']['call'](this), this['_sound'] = yp40['_createSound']();
    }v9oex(yp40, 'laya.wx.mini.MiniSound', kiza5);var jtn = yp40['prototype'];return jtn['load'] = function (hx8r62) {
      var ki5 = this,
          jm1_7;function yjm_() {
        if (null != yp40['_null']) ki5['_sound']['onCanplay'](yp40['_null']), ki5['_sound']['onError'](yp40['_null']);else try {
          ki5['_sound']['onCanplay'](null), ki5['_sound']['onError'](null), yp40['_null'] = null;
        } catch (r2) {
          console['warn']('[wxmini] _clearSound:' + r2), ki5['_sound']['onCanplay'](ovk9ie), ki5['_sound']['onError'](ovk9ie), yp40['_null'] = ovk9ie;
        }
      }function ovk9ie() {}hx8r62 = t_$7j['formatURL'](hx8r62), this['url'] = hx8r62, yp40['_audioCache'][hx8r62] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        yjm_(), jm1_7['loaded'] = !0x0, jm1_7['event']('complete'), yp40['_audioCache'][jm1_7['url']] = jm1_7;
      }), this['_sound']['onError'](function (cbqa) {
        console['error']('errCode=' + cbqa['errCode'] + '  errMsg=' + cbqa['errMsg']), yjm_(), jm1_7['event']('error');
      }), this['_sound']['src'] = hx8r62, jm1_7 = this);
    }, jtn['play'] = function (ibka, lyp04) {
      void 0x0 === ibka && (ibka = 0x0), void 0x0 === lyp04 && (lyp04 = 0x0), (tdn$_ = this['url'] == ekx['_tMusic'] ? (yp40['_musicAudio'] || (yp40['_musicAudio'] = yp40['_createSound']()), yp40['_musicAudio']) : yp40['_createSound']())['src'] = this['url'];var tdn$_ = new st7d$n(tdn$_);return tdn$_['url'] = this['url'], tdn$_['loops'] = lyp04, tdn$_['startTime'] = ibka, tdn$_['play'](), ekx['addChannel'](tdn$_), tdn$_;
    }, jtn['dispose'] = function () {
      var bqaz = yp40['_audioCache'][this['url']];bqaz && (bqaz['src'] = '', delete yp40['_audioCache'][this['url']]);
    }, qlc3f(0x0, jtn, 'duration', function () {
      return this['_sound']['duration'];
    }), yp40['_createSound'] = function () {
      return yp40['_id']++, wlp0q3['window']['wx']['createInnerAudioContext']();
    }, yp40['_musicAudio'] = null, yp40['_id'] = 0x0, yp40['_audioCache'] = {}, yp40['_null'] = void 0x0, yp40;
  }(),
      st7d$n = function () {
    function m7j_(_7m1) {
      this['_audio'] = null, this['_onEnd'] = null, m7j_['__super']['call'](this), this['_audio'] = _7m1, this['_onEnd'] = eh89xo['bind'](this['__onEnd'], this), _7m1['onEnded'](this['_onEnd']);
    }v9oex(m7j_, 'laya.wx.mini.MiniSoundChannel', my14j_);var kiov59 = m7j_['prototype'];return kiov59['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (iok5v['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, kiov59['__onNull'] = function () {}, kiov59['play'] = function () {
      this['isStopped'] = !0x1, ekx['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, kiov59['stop'] = function () {
      if (this['isStopped'] = !0x0, ekx['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != m7j_['_null']) this['_audio']['onEnded'](m7j_['_null']);else try {
          this['_audio']['onEnded'](null), m7j_['_null'] = null;
        } catch (_n$7d) {
          console['warn']('[wxmini] stop:' + _n$7d), this['_audio']['onEnded'](eh89xo['bind'](this['__onNull'], this)), m7j_['_null'] = eh89xo['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, kiov59['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, kiov59['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ekx['addChannel'](this), this['_audio']['play']());
    }, qlc3f(0x0, kiov59, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), qlc3f(0x0, kiov59, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), qlc3f(0x0, kiov59, 'volume', function () {
      return 0x1;
    }, function (yjmp4) {}), m7j_['_null'] = void 0x0, m7j_;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ziba5k, mj_y1) {
  'use strict';

  for (var v5ik9o in Object['defineProperty'](mj_y1, '__esModule', { 'value': !0x0 }), Laya) {
    var o9h8 = Laya[v5ik9o];o9h8 && o9h8['__isclass'] && (mj_y1[v5ik9o] = o9h8);
  }
});