var O = wx.$C;
!function (n_di17, ygx25r) {
  ygx25r['un'], ygx25r['uns'];var i07nt4 = ygx25r['static'],
      ry5a = ygx25r['class'],
      epahu = ygx25r['getset'];ygx25r['__newvec'];var o40jz = laya['utils']['Browser'],
      hpkag = (laya['events']['Event'], laya['events']['EventDispatcher']),
      pehka = laya['resource']['HTMLImage'],
      qfwmv = laya['utils']['Handler'],
      o0jt4z = laya['display']['Input'],
      wm8vq = laya['net']['Loader'];laya['maths']['Matrix'];var o$z0j = laya['renders']['Render'],
      _7nd1i = laya['utils']['RunDriver'];laya['media']['Sound'];var y5rga = laya['media']['SoundChannel'],
      $6z8 = laya['media']['SoundManager'],
      ubclh = (laya['display']['Stage'], laya['net']['URL']),
      d147i = laya['utils']['Utils'],
      $oz0tj = (ry5a(arpyg, 'laya.wx.mini.MiniAdpter'), arpyg['getJson'] = function (jo$0tz) {
    return JSON['parse'](jo$0tz);
  }, arpyg['init'] = function (a5gep, vm68f) {
    void 0x0 === a5gep && (a5gep = !0x1), void 0x0 === vm68f && (vm68f = !0x1), arpyg['_inited'] || (arpyg['window'] = n_di17)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (arpyg['_inited'] = !0x0, arpyg['isZiYu'] = vm68f, arpyg['isPosMsgYu'] = a5gep, arpyg['EnvConfig'] = {}, arpyg['isZiYu'] || (gpr['setNativeFileDir']('/layaairGame'), gpr['existDir'](gpr['fileNativeDir'], qfwmv['create'](arpyg, arpyg['onMkdirCallBack']))), arpyg['window']['focus'] = function () {}, ygx25r['getUrlPath'] = function () {}, arpyg['window']['logtime'] = function (uhape) {}, arpyg['window']['alertTimeLog'] = function (eph) {}, arpyg['window']['resetShareInfo'] = function () {}, arpyg['window']['CanvasRenderingContext2D'] = function () {}, arpyg['window']['CanvasRenderingContext2D']['prototype'] = arpyg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], arpyg['window']['document']['body']['appendChild'] = function () {}, arpyg['EnvConfig']['pixelRatioInt'] = 0x0, _7nd1i['getPixelRatio'] = arpyg['pixelRatio'], arpyg['_preCreateElement'] = o40jz['createElement'], o40jz['createElement'] = arpyg['createElement'], _7nd1i['createShaderCondition'] = arpyg['createShaderCondition'], d147i['parseXMLFromString'] = arpyg['parseXMLFromString'], o0jt4z['_createInputElement'] = nt40['_createInputElement'], arpyg['EnvConfig']['load'] = wm8vq['prototype']['load'], wm8vq['prototype']['load'] = qfv8mw['prototype']['load'], arpyg['isZiYu'] && a5gep && wx['onMessage'](function (cdb_93) {
      cdb_93['isLoad'] && (gpr['ziyuFileData'][cdb_93['url']] = cdb_93['data']);
    }));
  }, arpyg['onMkdirCallBack'] = function (clhue, uec9lh) {
    clhue || (gpr['filesListObj'] = JSON['parse'](uec9lh['data']));
  }, arpyg['pixelRatio'] = function () {
    if (!arpyg['EnvConfig']['pixelRatioInt']) try {
      var s8mz$ = wx['getSystemInfoSync']();return arpyg['EnvConfig']['pixelRatioInt'] = s8mz$['pixelRatio'], s8mz$['pixelRatio'];
    } catch (akpgeh) {}return arpyg['EnvConfig']['pixelRatioInt'];
  }, arpyg['createElement'] = function (hu9ke) {
    var s86vw;if ('canvas' == hu9ke) return 0x1 == arpyg['idx'] ? arpyg['isZiYu'] ? (s86vw = sharedCanvas)['style'] = {} : s86vw = n_di17['canvas'] : s86vw = n_di17['wx']['createCanvas'](), arpyg['idx']++, s86vw;if ('textarea' == hu9ke || 'input' == hu9ke) return arpyg['onCreateInput'](hu9ke);if ('div' != hu9ke) return arpyg['_preCreateElement'](hu9ke);return hu9ke = arpyg['_preCreateElement'](hu9ke), (hu9ke['contains'] = function (gaxyr) {
      return null;
    }, hu9ke['removeChild'] = function (cue) {}, hu9ke);
  }, arpyg['onCreateInput'] = function (lc3u9) {
    return lc3u9 = arpyg['_preCreateElement'](lc3u9), (lc3u9['focus'] = nt40['wxinputFocus'], lc3u9['blur'] = nt40['wxinputblur'], lc3u9['style'] = {}, lc3u9['value'] = 0x0, lc3u9['parentElement'] = {}, lc3u9['placeholder'] = {}, lc3u9['type'] = {}, lc3u9['setColor'] = function (lukh) {}, lc3u9['setType'] = function (kepgha) {}, lc3u9['setFontFace'] = function (vwmq8f) {}, lc3u9['addEventListener'] = function (z$6oj) {}, lc3u9['contains'] = function (heklup) {
      return null;
    }, lc3u9['removeChild'] = function (wmfvq) {}, lc3u9);
  }, arpyg['createShaderCondition'] = function (kpgae5) {
    var j4t0on = this;return function () {
      return j4t0on[kpgae5['replace']('this.', '')];
    };
  }, arpyg['EnvConfig'] = null, arpyg['window'] = null, arpyg['_preCreateElement'] = null, arpyg['_inited'] = !0x1, arpyg['wxRequest'] = null, arpyg['systemInfo'] = null, arpyg['version'] = '0.0.1', arpyg['isZiYu'] = !0x1, arpyg['isPosMsgYu'] = !0x1, arpyg['parseXMLFromString'] = function (di417n) {
    var hc9e;di417n = di417n['replace'](/>\s+</g, '><');try {
      hc9e = new n_di17['Parser']['DOMParser']()['parseFromString'](di417n, 'text/xml');
    } catch (db31_c) {
      throw '需要引入xml解析库文件';
    }return hc9e;
  }, arpyg['idx'] = 0x1, arpyg);function arpyg() {}ry5a(lkueh, 'laya.wx.mini.MiniImage'), lkueh['prototype']['_loadImage'] = function (b_d31) {
    var rpg5y = !0x1;-0x1 == b_d31['indexOf']('layaNativeDir/') && (rpg5y = !0x0, b_d31 = ubclh['formatURL'](b_d31)), gpr['getFileInfo'](b_d31) ? lkueh['onCreateImage'](b_d31, this, !rpg5y) : -0x1 != b_d31['indexOf']('http://') || -0x1 != b_d31['indexOf']('https://') ? gpr['downImg'](b_d31, new qfwmv(lkueh, lkueh['onDownImgCallBack'], [b_d31, this]), b_d31) : lkueh['onCreateImage'](b_d31, this, !0x0);
  }, lkueh['onDownImgCallBack'] = function (lhek9, j0n4t, x5agy) {
    x5agy ? j0n4t['onError'](null) : lkueh['onCreateImage'](lhek9, j0n4t);
  }, lkueh['onCreateImage'] = function (s$ozj6, y5xr2, b_1d73) {
    var jotz4, z04jo;function c3l9ub() {
      z04jo['onload'] = null, z04jo['onerror'] = null, delete y5xr2['imgCache'][s$ozj6];
    }jotz4 = (b_1d73 = void 0x0 === b_1d73 ? !0x1 : b_1d73) ? s$ozj6 : (m86$w = gpr['getFileInfo'](s$ozj6)['md5'], gpr['getFileNativePath'](m86$w)), null == y5xr2['imgCache'] && (y5xr2['imgCache'] = {}), b_1d73 = function () {
      c3l9ub(), y5xr2['onLoaded'](z04jo);
    };var m86$w = function () {
      c3l9ub(), y5xr2['event']('error', 'Load image failed');
    };'nativeimage' == y5xr2['_type'] ? ((z04jo = new o40jz['window']['Image']())['crossOrigin'] = '', z04jo['onload'] = b_1d73, z04jo['onerror'] = m86$w, z04jo['src'] = jotz4, y5xr2['imgCache'][s$ozj6] = z04jo) : new pehka['create'](jotz4, { 'onload': b_1d73, 'onerror': m86$w, 'onCreate': function (gkep5a) {
        z04jo = gkep5a, y5xr2['imgCache'][s$ozj6] = gkep5a;
      } });
  };function lkueh() {}var nt40 = (ry5a(b3l9c, 'laya.wx.mini.MiniInput'), b3l9c['_createInputElement'] = function () {
    o0jt4z['_initInput'](o0jt4z['area'] = o40jz['createElement']('textarea')), o0jt4z['_initInput'](o0jt4z['input'] = o40jz['createElement']('input')), o0jt4z['inputContainer'] = o40jz['createElement']('div'), o0jt4z['inputContainer']['style']['position'] = 'absolute', o0jt4z['inputContainer']['style']['zIndex'] = 0x186a0, o40jz['container']['appendChild'](o0jt4z['inputContainer']), o0jt4z['inputContainer']['setPos'] = function (s0zo, oz$6s8) {
      o0jt4z['inputContainer']['style']['left'] = s0zo + 'px', o0jt4z['inputContainer']['style']['top'] = oz$6s8 + 'px';
    }, ygx25r['stage']['on']('resize', null, b3l9c['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vw8ms) {
      n_di17['dispatchEvent'] && n_di17['dispatchEvent']('resize');
    }), $6z8['_soundClass'] = t14in, $6z8['_musicClass'] = t14in;
  }, b3l9c['_onStageResize'] = function () {
    ygx25r['stage']['_canvasTransform']['identity']()['scale'](o40jz['width'] / o$z0j['canvas']['width'] / _7nd1i['getPixelRatio'](), o40jz['height'] / o$z0j['canvas']['height'] / _7nd1i['getPixelRatio']());
  }, b3l9c['wxinputFocus'] = function (i_d137) {
    var cd1_3 = o0jt4z['inputElement']['target'];cd1_3 && !cd1_3['editable'] || ($oz0tj['window']['wx']['offKeyboardConfirm'](), $oz0tj['window']['wx']['offKeyboardInput'](), $oz0tj['window']['wx']['showKeyboard']({ 'defaultValue': cd1_3['text'], 'maxLength': cd1_3['maxChars'], 'multiple': cd1_3['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (g5akrp) {}, 'fail': function (zso8$6) {} }), $oz0tj['window']['wx']['onKeyboardConfirm'](function (y25xg) {
      y25xg = y25xg ? y25xg['value'] : '', (cd1_3['text'] = y25xg, cd1_3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), $oz0tj['window']['wx']['onKeyboardInput'](function (zj0$) {
      zj0$ = zj0$ ? zj0$['value'] : '', cd1_3['multiline'] || -0x1 == zj0$['indexOf']('\x0a') ? (cd1_3['text'] = zj0$, cd1_3['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, b3l9c['inputEnter'] = function () {
    o0jt4z['inputElement']['target']['focus'] = !0x1;
  }, b3l9c['wxinputblur'] = function () {
    b3l9c['hideKeyboard']();
  }, b3l9c['hideKeyboard'] = function () {
    $oz0tj['window']['wx']['offKeyboardConfirm'](), $oz0tj['window']['wx']['offKeyboardInput'](), $oz0tj['window']['wx']['hideKeyboard']({ 'success': function (sm8z$) {
        console['log']('隐藏键盘');
      }, 'fail': function (culb9) {
        console['log']('隐藏键盘出错:' + (culb9 ? culb9['errMsg'] : ''));
      } });
  }, b3l9c);function b3l9c() {}var qfv8mw = function () {
    function t7i() {}ry5a(t7i, 'laya.wx.mini.MiniLoader');var cul9e = t7i['prototype'];return cul9e['load'] = function (o86zs, lbhuc, u9keh, rypga, fwvq8) {
      void 0x0 === u9keh && (u9keh = !0x0), void 0x0 === fwvq8 && (fwvq8 = !0x1);var ryp5ag = this;0x0 === (ryp5ag['_url'] = o86zs)['indexOf']('data:image') ? ryp5ag['_type'] = lbhuc = 'image' : ryp5ag['_type'] = lbhuc = lbhuc || ryp5ag['getTypeFromUrl'](o86zs), ryp5ag['_cache'] = u9keh, ryp5ag['_data'] = null;var ub9lh = 'ascii';-0x1 != o86zs['indexOf']('.fnt') ? ub9lh = 'utf8' : 'arraybuffer' == lbhuc && (ub9lh = '');var _9cd = d147i['getFileExtension'](o86zs);if (-0x1 != t7i['_fileTypeArr']['indexOf'](_9cd)) $oz0tj['EnvConfig']['load']['call'](this, o86zs, lbhuc, u9keh, rypga, fwvq8);else {
        if (gpr['getFileInfo'](o86zs)) $oz0tj['EnvConfig']['load']['call'](this, o86zs, lbhuc, u9keh, rypga, fwvq8);else {
          if (-0x1 != o86zs['indexOf']('layaNativeDir/')) {
            if ($oz0tj['isZiYu']) {
              var blhcu9 = gpr['ziyuFileData'][o86zs];return void ryp5ag['onLoaded'](blhcu9);
            }return cosnole['log']('read read'), void gpr['read'](o86zs, ub9lh, new qfwmv(t7i, t7i['onReadNativeCallBack'], [ub9lh, o86zs, lbhuc, u9keh, rypga, fwvq8, ryp5ag]));
          }blhcu9 = '' == ubclh['rootPath'] ? o86zs : o86zs['split'](ubclh['rootPath'])[0x0], -0x1 != o86zs['indexOf']('http://') || -0x1 != o86zs['indexOf']('https://') ? $oz0tj['EnvConfig']['load']['call'](ryp5ag, o86zs, lbhuc, u9keh, rypga, fwvq8) : gpr['readFile'](blhcu9, ub9lh, new qfwmv(t7i, t7i['onReadNativeCallBack'], [ub9lh, o86zs, lbhuc, u9keh, rypga, fwvq8, ryp5ag]), o86zs);
        }
      }
    }, cul9e['resMgrLoad'] = function (ijtn, $oz0js, zo4jt0, kghaep, kplue, b_dc93, ygx5) {
      void 0x0 === zo4jt0 && (zo4jt0 = 0x0), void 0x0 === kghaep && (kghaep = !0x1), void 0x0 === kplue && (kplue = !0x1), void 0x0 === b_dc93 && (b_dc93 = 0x0), void 0x0 === ygx5 && (ygx5 = 0x3), -0x1 != ijtn['indexOf']('mpack') && console['log']('=============resMgrLoad url:', ijtn), $oz0tj['EnvConfig']['resMgrLoad'](ijtn, (zojs$0, c9elu, s6m$) => {
        t7i['prototype']['resMgrLoadCallBack'](zojs$0, c9elu, s6m$, $oz0js);
      }, zo4jt0, kghaep, kplue, b_dc93, ygx5);
    }, cul9e['resMgrLoadCallBack'] = function (not40, it40jn, pahgk, n1i7_d) {
      console['log']('buff:::', not40, pahgk, gpr['fileNativeDir'] + '///' + gpr['fileListName']), n1i7_d(not40, it40jn, pahgk);
    }, cul9e['clearRes'] = function (jn0o4t, ms86v) {
      this['clearRes'](jn0o4t, ms86v = void 0x0 === ms86v ? !0x1 : ms86v), ms86v = gpr['getFileInfo'](jn0o4t), !ms86v || -0x1 == jn0o4t['indexOf']('http://') && -0x1 == jn0o4t['indexOf']('https://') || (ms86v = ms86v['md5'], ms86v = gpr['getFileNativePath'](ms86v), gpr['remove'](ms86v));
    }, t7i['onReadNativeCallBack'] = function (klphu, gr25yx, db37, b_c93, j$t0o, gyxar5, zs$6m, din17_, c_db9) {
      void 0x0 === b_c93 && (b_c93 = !0x0), void 0x0 === gyxar5 && (gyxar5 = !0x1), (din17_ = void 0x0 === din17_ ? 0x0 : din17_) ? 0x1 == din17_ && $oz0tj['EnvConfig']['load']['call'](zs$6m, gr25yx, db37, b_c93, j$t0o, gyxar5) : (c_db9 = 'json' == db37 || 'atlas' == db37 ? $oz0tj['getJson'](c_db9['data']) : 'xml' == db37 ? d147i['parseXMLFromString'](c_db9['data']) : c_db9['data'], zs$6m['onLoaded'](c_db9), !$oz0tj['isZiYu'] && $oz0tj['isPosMsgYu'] && 'arraybuffer' != db37 && wx['postMessage']({ 'url': gr25yx, 'data': c_db9, 'isLoad': !0x0 }));
    }, i07nt4(t7i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), t7i;
  }(),
      gpr = (ry5a(tj0i4n, 'laya.wx.mini.MiniFileMgr', hpkag), tj0i4n['isLoadFile'] = function (cublh9) {
    return -0x1 != tj0i4n['_fileTypeArr']['indexOf'](cublh9);
  }, tj0i4n['getFileInfo'] = function (nti471) {
    return nti471 = nti471['split']('?')[0x0], nti471 = tj0i4n['filesListObj'][nti471], null == nti471 ? null : nti471;
  }, tj0i4n['onFileUpdate'] = function (os6$j, blhuc9) {
    var lb93c = os6$j['split']('/');os6$j = lb93c[lb93c['length'] - 0x1], lb93c = tj0i4n['getFileInfo'](blhuc9), null == lb93c ? tj0i4n['onSaveFile'](blhuc9, os6$j) : lb93c['readyUrl'] != blhuc9 && tj0i4n['remove'](os6$j, blhuc9);
  }, tj0i4n['exits'] = function (k5gpae, j0o4n) {
    k5gpae = tj0i4n['getFileNativePath'](k5gpae), tj0i4n['fs']['getFileInfo']({ 'filePath': k5gpae, 'success': function (c39b_d) {
        null != j0o4n && j0o4n['runWith']([0x0, c39b_d]);
      }, 'fail': function (c3d1b_) {
        null != j0o4n && j0o4n['runWith']([0x1, c3d1b_]);
      } });
  }, tj0i4n['read'] = function (le9k, wms$6, vfmw86, n1i) {
    void 0x0 === wms$6 && (wms$6 = 'ascill'), le9k = '' != (n1i = void 0x0 === n1i ? '' : n1i) ? tj0i4n['getFileNativePath'](le9k) : le9k, tj0i4n['fs']['readFile']({ 'filePath': le9k, 'encoding': wms$6, 'success': function (kpar5) {
        null != vfmw86 && vfmw86['runWith']([0x0, kpar5]);
      }, 'fail': function (_3id) {
        _3id && '' != n1i ? tj0i4n['down'](n1i, wms$6, vfmw86, n1i) : null != vfmw86 && vfmw86['runWith']([0x1]);
      } });
  }, tj0i4n['readNativeFile'] = function (mf6v8w, gek5pa) {
    tj0i4n['fs']['readFile']({ 'filePath': mf6v8w, 'encoding': '', 'success': function (o4tjn) {
        null != gek5pa && gek5pa['runWith']([0x0]);
      }, 'fail': function (sjz$6) {
        null != gek5pa && gek5pa['runWith']([0x1]);
      } });
  }, tj0i4n['down'] = function (tj0o, ekuha, sojz$0, w$s6m) {
    void 0x0 === ekuha && (ekuha = 'ascill'), void 0x0 === w$s6m && (w$s6m = '');var huel = tj0i4n['getFileNativePath'](w$s6m);tj0i4n['wxdown']({ 'url': tj0o, 'filePath': huel, 'success': function (nt0jo) {
        0xc8 === nt0jo['statusCode'] && tj0i4n['readFile'](nt0jo['filePath'], ekuha, sojz$0, w$s6m);
      }, 'fail': function (otn40j) {
        null != sojz$0 && sojz$0['runWith']([0x1, otn40j]);
      } })['onProgressUpdate'](function (zs$jo6) {
      null != sojz$0 && sojz$0['runWith']([0x2, zs$jo6['progress']]);
    });
  }, tj0i4n['readFile'] = function (bclu39, d3_1bc, mwf68v, hbc9lu) {
    void 0x0 === hbc9lu && (hbc9lu = ''), tj0i4n['fs']['readFile']({ 'filePath': bclu39, 'encoding': d3_1bc = void 0x0 === d3_1bc ? 'ascill' : d3_1bc, 'success': function (hkuap) {
        -0x1 == bclu39['indexOf']('http://') && -0x1 == bclu39['indexOf']('https://') || tj0i4n['onFileUpdate'](bclu39, hbc9lu), null != mwf68v && mwf68v['runWith']([0x0, hkuap]);
      }, 'fail': function (j0in4t) {
        j0in4t && null != mwf68v && mwf68v['runWith']([0x1, j0in4t]);
      } });
  }, tj0i4n['downImg'] = function (pak5ge, c_bd13, hepku) {
    void 0x0 === hepku && (hepku = ''), tj0i4n['wxdown']({ 'url': pak5ge, 'success': function (intj) {
        0xc8 === intj['statusCode'] && tj0i4n['copyFile'](intj['tempFilePath'], hepku, c_bd13);
      }, 'fail': function (pryag5) {
        null != c_bd13 && c_bd13['runWith']([0x1, pryag5]);
      } });
  }, tj0i4n['copyFile'] = function (fm6w8, oz6sj$, c1_3bd) {
    var g5ryxa = fm6w8['split']('/'),
        j0ton = g5ryxa[g5ryxa['length'] - 0x1];oz6sj$['split']('?')[0x0];var z0soj$ = tj0i4n['getFileInfo'](oz6sj$);g5ryxa = tj0i4n['getFileNativePath'](j0ton), tj0i4n['fs']['copyFile']({ 'srcPath': fm6w8, 'destPath': g5ryxa, 'success': function (uhl9ec) {
        z0soj$ ? z0soj$['readyUrl'] != oz6sj$ && tj0i4n['remove'](j0ton, oz6sj$, c1_3bd) : (tj0i4n['onSaveFile'](oz6sj$, j0ton), null != c1_3bd && c1_3bd['runWith']([0x0]));
      }, 'fail': function (rgya5p) {
        null != c1_3bd && c1_3bd['runWith']([0x1, rgya5p]);
      } });
  }, tj0i4n['getFileNativePath'] = function (o$jtz) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o$jtz;
  }, tj0i4n['remove'] = function (l9bhcu, ahpegk, qfmv) {
    void 0x0 === ahpegk && (ahpegk = '');var b_c93l = tj0i4n['getFileInfo'](ahpegk),
        mv6w8 = tj0i4n['getFileNativePath'](b_c93l['md5']);ygx25r['loader']['clearRes'](b_c93l['readyUrl']), tj0i4n['fs']['unlink']({ 'filePath': mv6w8, 'success': function (ya5grp) {
        '' != ahpegk && tj0i4n['onSaveFile'](ahpegk, l9bhcu), null != qfmv && qfmv['runWith']([0x0]);
      }, 'fail': function (b13d_) {} });
  }, tj0i4n['onSaveFile'] = function (rgk, uekplh) {
    var m$6s8 = rgk['split']('?')[0x0];tj0i4n['filesListObj'][m$6s8] = { 'md5': uekplh, 'readyUrl': rgk }, tj0i4n['fs']['writeFile']({ 'filePath': tj0i4n['fileNativeDir'] + '/' + tj0i4n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tj0i4n['filesListObj']), 'success': function (swvm86) {
        console['log']('写入测试测试成功：', swvm86);
      }, 'fail': function (j4tzo) {
        console['log']('写入测试测试失败：', j4tzo);
      } });
  }, tj0i4n['existDir'] = function (so$z86, gkaphe) {
    tj0i4n['fs']['mkdir']({ 'dirPath': so$z86, 'success': function (v6w8f) {
        null != gkaphe && gkaphe['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (he9cl) {
        -0x1 != he9cl['errMsg']['indexOf']('file already exists') ? tj0i4n['readSync'](tj0i4n['fileListName'], 'utf8', gkaphe) : null != gkaphe && gkaphe['runWith']([0x1, he9cl]);
      } });
  }, tj0i4n['readSync'] = function (wqfv8, b9l3c, ukpeah, ax5yrg) {
    void 0x0 === b9l3c && (b9l3c = 'ascill'), void 0x0 === ax5yrg && (ax5yrg = ''), wqfv8 = tj0i4n['getFileNativePath'](wqfv8);var xgy5ar;try {
      xgy5ar = tj0i4n['fs']['readFileSync'](wqfv8), null != ukpeah && ukpeah['runWith']([0x0, { 'data': xgy5ar }]);
    } catch (gap5) {
      null != ukpeah && ukpeah['runWith']([0x1]);
    }
  }, tj0i4n['readCache'] = function () {}, tj0i4n['writeCache'] = function ($mzs68) {
    var uel9h = readyUrl['split']('?')[0x0];tj0i4n['filesListObj'][uel9h] = { 'md5': md5Name, 'readyUrl': readyUrl }, tj0i4n['fs']['writeFile']({ 'filePath': tj0i4n['fileNativeDir'] + '/' + tj0i4n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tj0i4n['filesListObj']), 'success': function (epkga) {}, 'fail': function (gkaehp) {} });
  }, tj0i4n['setNativeFileDir'] = function (u9lbc3) {
    tj0i4n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + u9lbc3;
  }, tj0i4n['filesListObj'] = {}, tj0i4n['fileNativeDir'] = null, tj0i4n['fileListName'] = 'layaairfiles.txt', tj0i4n['ziyuFileData'] = {}, i07nt4(tj0i4n, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), tj0i4n);function tj0i4n() {
    tj0i4n['__super']['call'](this);
  }var t14in = function () {
    function ag5kpr() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, ag5kpr['__super']['call'](this), this['_sound'] = ag5kpr['_createSound']();
    }ry5a(ag5kpr, 'laya.wx.mini.MiniSound', hpkag);var eul9kh = ag5kpr['prototype'];return eul9kh['load'] = function (agp5rk) {
      var y2x = this,
          ni17;function o$0sz() {
        if (null != ag5kpr['_null']) y2x['_sound']['onCanplay'](ag5kpr['_null']), y2x['_sound']['onError'](ag5kpr['_null']);else try {
          y2x['_sound']['onCanplay'](null), y2x['_sound']['onError'](null), ag5kpr['_null'] = null;
        } catch (k5pg) {
          console['warn']('[wxmini] _clearSound:' + k5pg), y2x['_sound']['onCanplay'](_d3bc9), y2x['_sound']['onError'](_d3bc9), ag5kpr['_null'] = _d3bc9;
        }
      }function _d3bc9() {}agp5rk = ubclh['formatURL'](agp5rk), this['url'] = agp5rk, ag5kpr['_audioCache'][agp5rk] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        o$0sz(), ni17['loaded'] = !0x0, ni17['event']('complete'), ag5kpr['_audioCache'][ni17['url']] = ni17;
      }), this['_sound']['onError'](function (ozj$6s) {
        console['error']('errCode=' + ozj$6s['errCode'] + '  errMsg=' + ozj$6s['errMsg']), o$0sz(), ni17['event']('error');
      }), this['_sound']['src'] = agp5rk, ni17 = this);
    }, eul9kh['play'] = function (oj$z, u9hle) {
      void 0x0 === oj$z && (oj$z = 0x0), void 0x0 === u9hle && (u9hle = 0x0), (oz$sj = this['url'] == $6z8['_tMusic'] ? (ag5kpr['_musicAudio'] || (ag5kpr['_musicAudio'] = ag5kpr['_createSound']()), ag5kpr['_musicAudio']) : ag5kpr['_createSound']())['src'] = this['url'];var oz$sj = new d1b_73(oz$sj);return oz$sj['url'] = this['url'], oz$sj['loops'] = u9hle, oz$sj['startTime'] = oj$z, oz$sj['play'](), $6z8['addChannel'](oz$sj), oz$sj;
    }, eul9kh['dispose'] = function () {
      var euah = ag5kpr['_audioCache'][this['url']];euah && (euah['src'] = '', delete ag5kpr['_audioCache'][this['url']]);
    }, epahu(0x0, eul9kh, 'duration', function () {
      return this['_sound']['duration'];
    }), ag5kpr['_createSound'] = function () {
      return ag5kpr['_id']++, $oz0tj['window']['wx']['createInnerAudioContext']();
    }, ag5kpr['_musicAudio'] = null, ag5kpr['_id'] = 0x0, ag5kpr['_audioCache'] = {}, ag5kpr['_null'] = void 0x0, ag5kpr;
  }(),
      d1b_73 = function () {
    function peakuh(ar5k) {
      this['_audio'] = null, this['_onEnd'] = null, peakuh['__super']['call'](this), this['_audio'] = ar5k, this['_onEnd'] = d147i['bind'](this['__onEnd'], this), ar5k['onEnded'](this['_onEnd']);
    }ry5a(peakuh, 'laya.wx.mini.MiniSoundChannel', y5rga);var dbc13_ = peakuh['prototype'];return dbc13_['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (ygx25r['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dbc13_['__onNull'] = function () {}, dbc13_['play'] = function () {
      this['isStopped'] = !0x1, $6z8['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, dbc13_['stop'] = function () {
      if (this['isStopped'] = !0x0, $6z8['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != peakuh['_null']) this['_audio']['onEnded'](peakuh['_null']);else try {
          this['_audio']['onEnded'](null), peakuh['_null'] = null;
        } catch (id147) {
          console['warn']('[wxmini] stop:' + id147), this['_audio']['onEnded'](d147i['bind'](this['__onNull'], this)), peakuh['_null'] = d147i['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, dbc13_['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, dbc13_['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $6z8['addChannel'](this), this['_audio']['play']());
    }, epahu(0x0, dbc13_, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), epahu(0x0, dbc13_, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), epahu(0x0, dbc13_, 'volume', function () {
      return 0x1;
    }, function (qmwvf8) {}), peakuh['_null'] = void 0x0, peakuh;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (g5y2rx, s$8z6o) {
  'use strict';

  for (var uclbh in Object['defineProperty'](s$8z6o, '__esModule', { 'value': !0x0 }), Laya) {
    var d_3i71 = Laya[uclbh];d_3i71 && d_3i71['__isclass'] && (s$8z6o[uclbh] = d_3i71);
  }
});