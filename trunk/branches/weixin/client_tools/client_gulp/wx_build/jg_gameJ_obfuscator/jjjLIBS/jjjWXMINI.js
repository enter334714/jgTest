var S = wx.$J;
!function (md70us, $n_xa) {
  $n_xa['un'], $n_xa['uns'];var s0mud7 = $n_xa['static'],
      x82na = $n_xa['class'],
      ryiq3 = $n_xa['getset'];$n_xa['__newvec'];var z9obh = laya['utils']['Browser'],
      k5na_$ = (laya['events']['Event'], laya['events']['EventDispatcher']),
      fg23 = laya['resource']['HTMLImage'],
      oe9hb = laya['utils']['Handler'],
      a$x_n = laya['display']['Input'],
      mudv7 = laya['net']['Loader'];laya['maths']['Matrix'];var lbce91 = laya['renders']['Render'],
      d07ums = laya['utils']['RunDriver'];laya['media']['Sound'];var qf6iyr = laya['media']['SoundChannel'],
      r6ifyq = laya['media']['SoundManager'],
      s7uvd = (laya['display']['Stage'], laya['net']['URL']),
      $_xn2 = laya['utils']['Utils'],
      i3grf = (x82na(bcj1el, 'laya.wx.mini.MiniAdpter'), bcj1el['getJson'] = function (i3x8fg) {
    return JSON['parse'](i3x8fg);
  }, bcj1el['init'] = function (ms07ud, hzso0) {
    void 0x0 === ms07ud && (ms07ud = !0x1), void 0x0 === hzso0 && (hzso0 = !0x1), bcj1el['_inited'] || (bcj1el['window'] = md70us)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (bcj1el['_inited'] = !0x0, bcj1el['isZiYu'] = hzso0, bcj1el['isPosMsgYu'] = ms07ud, bcj1el['EnvConfig'] = {}, bcj1el['isZiYu'] || (kl5$['setNativeFileDir']('/layaairGame'), kl5$['existDir'](kl5$['fileNativeDir'], oe9hb['create'](bcj1el, bcj1el['onMkdirCallBack']))), bcj1el['window']['focus'] = function () {}, $n_xa['getUrlPath'] = function () {}, bcj1el['window']['logtime'] = function (rfqgi) {}, bcj1el['window']['alertTimeLog'] = function (sum7d) {}, bcj1el['window']['resetShareInfo'] = function () {}, bcj1el['window']['CanvasRenderingContext2D'] = function () {}, bcj1el['window']['CanvasRenderingContext2D']['prototype'] = bcj1el['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bcj1el['window']['document']['body']['appendChild'] = function () {}, bcj1el['EnvConfig']['pixelRatioInt'] = 0x0, d07ums['getPixelRatio'] = bcj1el['pixelRatio'], bcj1el['_preCreateElement'] = z9obh['createElement'], z9obh['createElement'] = bcj1el['createElement'], d07ums['createShaderCondition'] = bcj1el['createShaderCondition'], $_xn2['parseXMLFromString'] = bcj1el['parseXMLFromString'], a$x_n['_createInputElement'] = ka5$n['_createInputElement'], bcj1el['EnvConfig']['load'] = mudv7['prototype']['load'], mudv7['prototype']['load'] = o0s['prototype']['load'], bcj1el['isZiYu'] && ms07ud && wx['onMessage'](function (sdvmu) {
      sdvmu['isLoad'] && (kl5$['ziyuFileData'][sdvmu['url']] = sdvmu['data']);
    }));
  }, bcj1el['onMkdirCallBack'] = function (x_n8a2, os0dzh) {
    x_n8a2 || (kl5$['filesListObj'] = JSON['parse'](os0dzh['data']));
  }, bcj1el['pixelRatio'] = function () {
    if (!bcj1el['EnvConfig']['pixelRatioInt']) try {
      var smduv7 = wx['getSystemInfoSync']();return bcj1el['EnvConfig']['pixelRatioInt'] = smduv7['pixelRatio'], smduv7['pixelRatio'];
    } catch (x3fg28) {}return bcj1el['EnvConfig']['pixelRatioInt'];
  }, bcj1el['createElement'] = function (bc1) {
    var $4_5k;if ('canvas' == bc1) return 0x1 == bcj1el['idx'] ? bcj1el['isZiYu'] ? ($4_5k = sharedCanvas)['style'] = {} : $4_5k = md70us['canvas'] : $4_5k = md70us['wx']['createCanvas'](), bcj1el['idx']++, $4_5k;if ('textarea' == bc1 || 'input' == bc1) return bcj1el['onCreateInput'](bc1);if ('div' != bc1) return bcj1el['_preCreateElement'](bc1);return bc1 = bcj1el['_preCreateElement'](bc1), (bc1['contains'] = function (f38x2g) {
      return null;
    }, bc1['removeChild'] = function (nxg23) {}, bc1);
  }, bcj1el['onCreateInput'] = function (e9bzoh) {
    return e9bzoh = bcj1el['_preCreateElement'](e9bzoh), (e9bzoh['focus'] = ka5$n['wxinputFocus'], e9bzoh['blur'] = ka5$n['wxinputblur'], e9bzoh['style'] = {}, e9bzoh['value'] = 0x0, e9bzoh['parentElement'] = {}, e9bzoh['placeholder'] = {}, e9bzoh['type'] = {}, e9bzoh['setColor'] = function (r3qgi) {}, e9bzoh['setType'] = function (tprqy) {}, e9bzoh['setFontFace'] = function (iy6qrt) {}, e9bzoh['addEventListener'] = function (dso0) {}, e9bzoh['contains'] = function (c9eb1h) {
      return null;
    }, e9bzoh['removeChild'] = function (i3y) {}, e9bzoh);
  }, bcj1el['createShaderCondition'] = function ($jk54l) {
    var sm0d7 = this;return function () {
      return sm0d7[$jk54l['replace']('this.', '')];
    };
  }, bcj1el['EnvConfig'] = null, bcj1el['window'] = null, bcj1el['_preCreateElement'] = null, bcj1el['_inited'] = !0x1, bcj1el['wxRequest'] = null, bcj1el['systemInfo'] = null, bcj1el['version'] = '0.0.1', bcj1el['isZiYu'] = !0x1, bcj1el['isPosMsgYu'] = !0x1, bcj1el['parseXMLFromString'] = function (g28xan) {
    var a8_xn2;g28xan = g28xan['replace'](/>\s+</g, '><');try {
      a8_xn2 = new md70us['Parser']['DOMParser']()['parseFromString'](g28xan, 'text/xml');
    } catch (k4$lj5) {
      throw '需要引入xml解析库文件';
    }return a8_xn2;
  }, bcj1el['idx'] = 0x1, bcj1el);function bcj1el() {}x82na(nxg2a8, 'laya.wx.mini.MiniImage'), nxg2a8['prototype']['_loadImage'] = function (udwmv) {
    var lce1b = !0x1;-0x1 == udwmv['indexOf']('layaNativeDir/') && (lce1b = !0x0, udwmv = s7uvd['formatURL'](udwmv)), kl5$['getFileInfo'](udwmv) ? nxg2a8['onCreateImage'](udwmv, this, !lce1b) : -0x1 != udwmv['indexOf']('http://') || -0x1 != udwmv['indexOf']('https://') ? kl5$['downImg'](udwmv, new oe9hb(nxg2a8, nxg2a8['onDownImgCallBack'], [udwmv, this]), udwmv) : nxg2a8['onCreateImage'](udwmv, this, !0x0);
  }, nxg2a8['onDownImgCallBack'] = function (ljk14c, v7udwm, a8g2x) {
    a8g2x ? v7udwm['onError'](null) : nxg2a8['onCreateImage'](ljk14c, v7udwm);
  }, nxg2a8['onCreateImage'] = function (dsumv7, l1je, a2ngx8) {
    var z90so, zh90b;function _j45$() {
      zh90b['onload'] = null, zh90b['onerror'] = null, delete l1je['imgCache'][dsumv7];
    }z90so = (a2ngx8 = void 0x0 === a2ngx8 ? !0x1 : a2ngx8) ? dsumv7 : (n_2a8 = kl5$['getFileInfo'](dsumv7)['md5'], kl5$['getFileNativePath'](n_2a8)), null == l1je['imgCache'] && (l1je['imgCache'] = {}), a2ngx8 = function () {
      _j45$(), l1je['onLoaded'](zh90b);
    };var n_2a8 = function () {
      _j45$(), l1je['event']('error', 'Load image failed');
    };'nativeimage' == l1je['_type'] ? ((zh90b = new z9obh['window']['Image']())['crossOrigin'] = '', zh90b['onload'] = a2ngx8, zh90b['onerror'] = n_2a8, zh90b['src'] = z90so, l1je['imgCache'][dsumv7] = zh90b) : new fg23['create'](z90so, { 'onload': a2ngx8, 'onerror': n_2a8, 'onCreate': function (ej1c4) {
        zh90b = ej1c4, l1je['imgCache'][dsumv7] = ej1c4;
      } });
  };function nxg2a8() {}var ka5$n = (x82na(z0b9oh, 'laya.wx.mini.MiniInput'), z0b9oh['_createInputElement'] = function () {
    a$x_n['_initInput'](a$x_n['area'] = z9obh['createElement']('textarea')), a$x_n['_initInput'](a$x_n['input'] = z9obh['createElement']('input')), a$x_n['inputContainer'] = z9obh['createElement']('div'), a$x_n['inputContainer']['style']['position'] = 'absolute', a$x_n['inputContainer']['style']['zIndex'] = 0x186a0, z9obh['container']['appendChild'](a$x_n['inputContainer']), a$x_n['inputContainer']['setPos'] = function (ryit6q, l1e4j) {
      a$x_n['inputContainer']['style']['left'] = ryit6q + 'px', a$x_n['inputContainer']['style']['top'] = l1e4j + 'px';
    }, $n_xa['stage']['on']('resize', null, z0b9oh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (j_5$4k) {
      md70us['dispatchEvent'] && md70us['dispatchEvent']('resize');
    }), r6ifyq['_soundClass'] = kl4j15, r6ifyq['_musicClass'] = kl4j15;
  }, z0b9oh['_onStageResize'] = function () {
    $n_xa['stage']['_canvasTransform']['identity']()['scale'](z9obh['width'] / lbce91['canvas']['width'] / d07ums['getPixelRatio'](), z9obh['height'] / lbce91['canvas']['height'] / d07ums['getPixelRatio']());
  }, z0b9oh['wxinputFocus'] = function (ag8n2) {
    var boh9z = a$x_n['inputElement']['target'];boh9z && !boh9z['editable'] || (i3grf['window']['wx']['offKeyboardConfirm'](), i3grf['window']['wx']['offKeyboardInput'](), i3grf['window']['wx']['showKeyboard']({ 'defaultValue': boh9z['text'], 'maxLength': boh9z['maxChars'], 'multiple': boh9z['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (e9zobh) {}, 'fail': function (sodzm0) {} }), i3grf['window']['wx']['onKeyboardConfirm'](function (b0z) {
      b0z = b0z ? b0z['value'] : '', (boh9z['text'] = b0z, boh9z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), i3grf['window']['wx']['onKeyboardInput'](function (k5jl$) {
      k5jl$ = k5jl$ ? k5jl$['value'] : '', boh9z['multiline'] || -0x1 == k5jl$['indexOf']('\x0a') ? (boh9z['text'] = k5jl$, boh9z['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, z0b9oh['inputEnter'] = function () {
    a$x_n['inputElement']['target']['focus'] = !0x1;
  }, z0b9oh['wxinputblur'] = function () {
    z0b9oh['hideKeyboard']();
  }, z0b9oh['hideKeyboard'] = function () {
    i3grf['window']['wx']['offKeyboardConfirm'](), i3grf['window']['wx']['offKeyboardInput'](), i3grf['window']['wx']['hideKeyboard']({ 'success': function (behzo) {
        console['log']('隐藏键盘');
      }, 'fail': function (ry6it) {
        console['log']('隐藏键盘出错:' + (ry6it ? ry6it['errMsg'] : ''));
      } });
  }, z0b9oh);function z0b9oh() {}var o0s = function () {
    function z9so0() {}x82na(z9so0, 'laya.wx.mini.MiniLoader');var yqi6fr = z9so0['prototype'];return yqi6fr['load'] = function (ckjl1, l9b1c, uvdm7s, sh09oz, h0b) {
      void 0x0 === uvdm7s && (uvdm7s = !0x0), void 0x0 === h0b && (h0b = !0x1);var j5$4lk = this;0x0 === (j5$4lk['_url'] = ckjl1)['indexOf']('data:image') ? j5$4lk['_type'] = l9b1c = 'image' : j5$4lk['_type'] = l9b1c = l9b1c || j5$4lk['getTypeFromUrl'](ckjl1), j5$4lk['_cache'] = uvdm7s, j5$4lk['_data'] = null;var r6tyqi = 'ascii';-0x1 != ckjl1['indexOf']('.fnt') ? r6tyqi = 'utf8' : 'arraybuffer' == l9b1c && (r6tyqi = '');var zh09bo = $_xn2['getFileExtension'](ckjl1);if (-0x1 != z9so0['_fileTypeArr']['indexOf'](zh09bo)) i3grf['EnvConfig']['load']['call'](this, ckjl1, l9b1c, uvdm7s, sh09oz, h0b);else {
        if (kl5$['getFileInfo'](ckjl1)) i3grf['EnvConfig']['load']['call'](this, ckjl1, l9b1c, uvdm7s, sh09oz, h0b);else {
          if (-0x1 != ckjl1['indexOf']('layaNativeDir/')) {
            if (i3grf['isZiYu']) {
              var lje1cb = kl5$['ziyuFileData'][ckjl1];return void j5$4lk['onLoaded'](lje1cb);
            }return cosnole['log']('read read'), void kl5$['read'](ckjl1, r6tyqi, new oe9hb(z9so0, z9so0['onReadNativeCallBack'], [r6tyqi, ckjl1, l9b1c, uvdm7s, sh09oz, h0b, j5$4lk]));
          }lje1cb = '' == s7uvd['rootPath'] ? ckjl1 : ckjl1['split'](s7uvd['rootPath'])[0x0], -0x1 != ckjl1['indexOf']('http://') || -0x1 != ckjl1['indexOf']('https://') ? i3grf['EnvConfig']['load']['call'](j5$4lk, ckjl1, l9b1c, uvdm7s, sh09oz, h0b) : kl5$['readFile'](lje1cb, r6tyqi, new oe9hb(z9so0, z9so0['onReadNativeCallBack'], [r6tyqi, ckjl1, l9b1c, uvdm7s, sh09oz, h0b, j5$4lk]), ckjl1);
        }
      }
    }, yqi6fr['resMgrLoad'] = function (u70sdm, k$4_j5, lk514, l5kj$, uw7vmd, pq6r, i3grqf) {
      void 0x0 === lk514 && (lk514 = 0x0), void 0x0 === l5kj$ && (l5kj$ = !0x1), void 0x0 === uw7vmd && (uw7vmd = !0x1), void 0x0 === pq6r && (pq6r = 0x0), void 0x0 === i3grqf && (i3grqf = 0x3), -0x1 != u70sdm['indexOf']('mpack') && console['log']('=============resMgrLoad url:', u70sdm), i3grf['EnvConfig']['resMgrLoad'](u70sdm, (i6ryt, sdom0u, n$a_) => {
        z9so0['prototype']['resMgrLoadCallBack'](i6ryt, sdom0u, n$a_, k$4_j5);
      }, lk514, l5kj$, uw7vmd, pq6r, i3grqf);
    }, yqi6fr['resMgrLoadCallBack'] = function (qtyrp, r3figq, if8x, nk$5) {
      console['log']('buff:::', qtyrp, if8x, kl5$['fileNativeDir'] + '///' + kl5$['fileListName']), nk$5(qtyrp, r3figq, if8x);
    }, yqi6fr['clearRes'] = function (os0zhd, k5a_) {
      this['clearRes'](os0zhd, k5a_ = void 0x0 === k5a_ ? !0x1 : k5a_), k5a_ = kl5$['getFileInfo'](os0zhd), !k5a_ || -0x1 == os0zhd['indexOf']('http://') && -0x1 == os0zhd['indexOf']('https://') || (k5a_ = k5a_['md5'], k5a_ = kl5$['getFileNativePath'](k5a_), kl5$['remove'](k5a_));
    }, z9so0['onReadNativeCallBack'] = function (mdsv7u, ryqfi6, g3f2x, u7wvd, ho9bze, xn$a, ifrgq, ob0z9h, $5an_2) {
      void 0x0 === u7wvd && (u7wvd = !0x0), void 0x0 === xn$a && (xn$a = !0x1), (ob0z9h = void 0x0 === ob0z9h ? 0x0 : ob0z9h) ? 0x1 == ob0z9h && i3grf['EnvConfig']['load']['call'](ifrgq, ryqfi6, g3f2x, u7wvd, ho9bze, xn$a) : ($5an_2 = 'json' == g3f2x || 'atlas' == g3f2x ? i3grf['getJson']($5an_2['data']) : 'xml' == g3f2x ? $_xn2['parseXMLFromString']($5an_2['data']) : $5an_2['data'], ifrgq['onLoaded']($5an_2), !i3grf['isZiYu'] && i3grf['isPosMsgYu'] && 'arraybuffer' != g3f2x && wx['postMessage']({ 'url': ryqfi6, 'data': $5an_2, 'isLoad': !0x0 }));
    }, s0mud7(z9so0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), z9so0;
  }(),
      kl5$ = (x82na(an_x2$, 'laya.wx.mini.MiniFileMgr', k5na_$), an_x2$['isLoadFile'] = function (xig) {
    return -0x1 != an_x2$['_fileTypeArr']['indexOf'](xig);
  }, an_x2$['getFileInfo'] = function (_j45) {
    return _j45 = _j45['split']('?')[0x0], _j45 = an_x2$['filesListObj'][_j45], null == _j45 ? null : _j45;
  }, an_x2$['onFileUpdate'] = function (bc, j_54$k) {
    var jclk = bc['split']('/');bc = jclk[jclk['length'] - 0x1], jclk = an_x2$['getFileInfo'](j_54$k), null == jclk ? an_x2$['onSaveFile'](j_54$k, bc) : jclk['readyUrl'] != j_54$k && an_x2$['remove'](bc, j_54$k);
  }, an_x2$['exits'] = function (hbcz9, f3qrgi) {
    hbcz9 = an_x2$['getFileNativePath'](hbcz9), an_x2$['fs']['getFileInfo']({ 'filePath': hbcz9, 'success': function (j1el4) {
        null != f3qrgi && f3qrgi['runWith']([0x0, j1el4]);
      }, 'fail': function ($2xn) {
        null != f3qrgi && f3qrgi['runWith']([0x1, $2xn]);
      } });
  }, an_x2$['read'] = function (o0hdzs, vuw7m, x2n8a_, jl5k) {
    void 0x0 === vuw7m && (vuw7m = 'ascill'), o0hdzs = '' != (jl5k = void 0x0 === jl5k ? '' : jl5k) ? an_x2$['getFileNativePath'](o0hdzs) : o0hdzs, an_x2$['fs']['readFile']({ 'filePath': o0hdzs, 'encoding': vuw7m, 'success': function (f6rqiy) {
        null != x2n8a_ && x2n8a_['runWith']([0x0, f6rqiy]);
      }, 'fail': function (k1l5j) {
        k1l5j && '' != jl5k ? an_x2$['down'](jl5k, vuw7m, x2n8a_, jl5k) : null != x2n8a_ && x2n8a_['runWith']([0x1]);
      } });
  }, an_x2$['readNativeFile'] = function (q3yir, na_$5k) {
    an_x2$['fs']['readFile']({ 'filePath': q3yir, 'encoding': '', 'success': function (rfig) {
        null != na_$5k && na_$5k['runWith']([0x0]);
      }, 'fail': function (vudwm7) {
        null != na_$5k && na_$5k['runWith']([0x1]);
      } });
  }, an_x2$['down'] = function (x2$_an, yr3if, $5k4_j, yptr) {
    void 0x0 === yr3if && (yr3if = 'ascill'), void 0x0 === yptr && (yptr = '');var jck41 = an_x2$['getFileNativePath'](yptr);an_x2$['wxdown']({ 'url': x2$_an, 'filePath': jck41, 'success': function (jk$45_) {
        0xc8 === jk$45_['statusCode'] && an_x2$['readFile'](jk$45_['filePath'], yr3if, $5k4_j, yptr);
      }, 'fail': function (v7dw) {
        null != $5k4_j && $5k4_j['runWith']([0x1, v7dw]);
      } })['onProgressUpdate'](function (zehc) {
      null != $5k4_j && $5k4_j['runWith']([0x2, zehc['progress']]);
    });
  }, an_x2$['readFile'] = function (szod0h, msodz0, fg2, l1j5k) {
    void 0x0 === l1j5k && (l1j5k = ''), an_x2$['fs']['readFile']({ 'filePath': szod0h, 'encoding': msodz0 = void 0x0 === msodz0 ? 'ascill' : msodz0, 'success': function (_kn5a) {
        -0x1 == szod0h['indexOf']('http://') && -0x1 == szod0h['indexOf']('https://') || an_x2$['onFileUpdate'](szod0h, l1j5k), null != fg2 && fg2['runWith']([0x0, _kn5a]);
      }, 'fail': function (ec4l) {
        ec4l && null != fg2 && fg2['runWith']([0x1, ec4l]);
      } });
  }, an_x2$['downImg'] = function (x_2an8, $5k_4a, n$ka) {
    void 0x0 === n$ka && (n$ka = ''), an_x2$['wxdown']({ 'url': x_2an8, 'success': function (gxa) {
        0xc8 === gxa['statusCode'] && an_x2$['copyFile'](gxa['tempFilePath'], n$ka, $5k_4a);
      }, 'fail': function (vdw7mu) {
        null != $5k_4a && $5k_4a['runWith']([0x1, vdw7mu]);
      } });
  }, an_x2$['copyFile'] = function ($_k54, if6r, boh9ez) {
    var k4cj1l = $_k54['split']('/'),
        dvms7u = k4cj1l[k4cj1l['length'] - 0x1];if6r['split']('?')[0x0];var a_$kn = an_x2$['getFileInfo'](if6r);k4cj1l = an_x2$['getFileNativePath'](dvms7u), an_x2$['fs']['copyFile']({ 'srcPath': $_k54, 'destPath': k4cj1l, 'success': function (bez9c) {
        a_$kn ? a_$kn['readyUrl'] != if6r && an_x2$['remove'](dvms7u, if6r, boh9ez) : (an_x2$['onSaveFile'](if6r, dvms7u), null != boh9ez && boh9ez['runWith']([0x0]));
      }, 'fail': function (s9o0) {
        null != boh9ez && boh9ez['runWith']([0x1, s9o0]);
      } });
  }, an_x2$['getFileNativePath'] = function (b09ozh) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + b09ozh;
  }, an_x2$['remove'] = function (svud7m, _n2$5a, clk4) {
    void 0x0 === _n2$5a && (_n2$5a = '');var mvwu7 = an_x2$['getFileInfo'](_n2$5a),
        f2xg = an_x2$['getFileNativePath'](mvwu7['md5']);$n_xa['loader']['clearRes'](mvwu7['readyUrl']), an_x2$['fs']['unlink']({ 'filePath': f2xg, 'success': function (ckl14) {
        '' != _n2$5a && an_x2$['onSaveFile'](_n2$5a, svud7m), null != clk4 && clk4['runWith']([0x0]);
      }, 'fail': function (cbe) {} });
  }, an_x2$['onSaveFile'] = function (l4j1ce, szom0d) {
    var dv7smu = l4j1ce['split']('?')[0x0];an_x2$['filesListObj'][dv7smu] = { 'md5': szom0d, 'readyUrl': l4j1ce }, an_x2$['fs']['writeFile']({ 'filePath': an_x2$['fileNativeDir'] + '/' + an_x2$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](an_x2$['filesListObj']), 'success': function (rqy6it) {
        console['log']('写入测试测试成功：', rqy6it);
      }, 'fail': function (hezbo) {
        console['log']('写入测试测试失败：', hezbo);
      } });
  }, an_x2$['existDir'] = function (x_2n$, yrqi6) {
    an_x2$['fs']['mkdir']({ 'dirPath': x_2n$, 'success': function (n5$_2) {
        null != yrqi6 && yrqi6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (zh9b) {
        -0x1 != zh9b['errMsg']['indexOf']('file already exists') ? an_x2$['readSync'](an_x2$['fileListName'], 'utf8', yrqi6) : null != yrqi6 && yrqi6['runWith']([0x1, zh9b]);
      } });
  }, an_x2$['readSync'] = function (ir8g, riq6fy, j$45, m0ozd) {
    void 0x0 === riq6fy && (riq6fy = 'ascill'), void 0x0 === m0ozd && (m0ozd = ''), ir8g = an_x2$['getFileNativePath'](ir8g);var _k$;try {
      _k$ = an_x2$['fs']['readFileSync'](ir8g), null != j$45 && j$45['runWith']([0x0, { 'data': _k$ }]);
    } catch (e9cbl1) {
      null != j$45 && j$45['runWith']([0x1]);
    }
  }, an_x2$['readCache'] = function () {}, an_x2$['writeCache'] = function (b0zh9) {
    var r6fyqi = readyUrl['split']('?')[0x0];an_x2$['filesListObj'][r6fyqi] = { 'md5': md5Name, 'readyUrl': readyUrl }, an_x2$['fs']['writeFile']({ 'filePath': an_x2$['fileNativeDir'] + '/' + an_x2$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](an_x2$['filesListObj']), 'success': function (ho9zeb) {}, 'fail': function (ob0hz) {} });
  }, an_x2$['setNativeFileDir'] = function (c1l4j) {
    an_x2$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c1l4j;
  }, an_x2$['filesListObj'] = {}, an_x2$['fileNativeDir'] = null, an_x2$['fileListName'] = 'layaairfiles.txt', an_x2$['ziyuFileData'] = {}, s0mud7(an_x2$, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), an_x2$);function an_x2$() {
    an_x2$['__super']['call'](this);
  }var kl4j15 = function () {
    function a28n_() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, a28n_['__super']['call'](this), this['_sound'] = a28n_['_createSound']();
    }x82na(a28n_, 'laya.wx.mini.MiniSound', k5na_$);var a2$_x = a28n_['prototype'];return a2$_x['load'] = function (b09ho) {
      var c41jel = this,
          anx8g;function a28() {
        if (null != a28n_['_null']) c41jel['_sound']['onCanplay'](a28n_['_null']), c41jel['_sound']['onError'](a28n_['_null']);else try {
          c41jel['_sound']['onCanplay'](null), c41jel['_sound']['onError'](null), a28n_['_null'] = null;
        } catch (f32x) {
          console['warn']('[wxmini] _clearSound:' + f32x), c41jel['_sound']['onCanplay'](n2g8a), c41jel['_sound']['onError'](n2g8a), a28n_['_null'] = n2g8a;
        }
      }function n2g8a() {}b09ho = s7uvd['formatURL'](b09ho), this['url'] = b09ho, a28n_['_audioCache'][b09ho] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        a28(), anx8g['loaded'] = !0x0, anx8g['event']('complete'), a28n_['_audioCache'][anx8g['url']] = anx8g;
      }), this['_sound']['onError'](function (szmo0) {
        console['error']('errCode=' + szmo0['errCode'] + '  errMsg=' + szmo0['errMsg']), a28(), anx8g['event']('error');
      }), this['_sound']['src'] = b09ho, anx8g = this);
    }, a2$_x['play'] = function (x3f8, b90z) {
      void 0x0 === x3f8 && (x3f8 = 0x0), void 0x0 === b90z && (b90z = 0x0), (oms = this['url'] == r6ifyq['_tMusic'] ? (a28n_['_musicAudio'] || (a28n_['_musicAudio'] = a28n_['_createSound']()), a28n_['_musicAudio']) : a28n_['_createSound']())['src'] = this['url'];var oms = new _54$a(oms);return oms['url'] = this['url'], oms['loops'] = b90z, oms['startTime'] = x3f8, oms['play'](), r6ifyq['addChannel'](oms), oms;
    }, a2$_x['dispose'] = function () {
      var h0zob = a28n_['_audioCache'][this['url']];h0zob && (h0zob['src'] = '', delete a28n_['_audioCache'][this['url']]);
    }, ryiq3(0x0, a2$_x, 'duration', function () {
      return this['_sound']['duration'];
    }), a28n_['_createSound'] = function () {
      return a28n_['_id']++, i3grf['window']['wx']['createInnerAudioContext']();
    }, a28n_['_musicAudio'] = null, a28n_['_id'] = 0x0, a28n_['_audioCache'] = {}, a28n_['_null'] = void 0x0, a28n_;
  }(),
      _54$a = function () {
    function s0h9(k4$5lj) {
      this['_audio'] = null, this['_onEnd'] = null, s0h9['__super']['call'](this), this['_audio'] = k4$5lj, this['_onEnd'] = $_xn2['bind'](this['__onEnd'], this), k4$5lj['onEnded'](this['_onEnd']);
    }x82na(s0h9, 'laya.wx.mini.MiniSoundChannel', qf6iyr);var _n52 = s0h9['prototype'];return _n52['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && ($n_xa['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _n52['__onNull'] = function () {}, _n52['play'] = function () {
      this['isStopped'] = !0x1, r6ifyq['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, _n52['stop'] = function () {
      if (this['isStopped'] = !0x0, r6ifyq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != s0h9['_null']) this['_audio']['onEnded'](s0h9['_null']);else try {
          this['_audio']['onEnded'](null), s0h9['_null'] = null;
        } catch (dumo0) {
          console['warn']('[wxmini] stop:' + dumo0), this['_audio']['onEnded']($_xn2['bind'](this['__onNull'], this)), s0h9['_null'] = $_xn2['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, _n52['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, _n52['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, r6ifyq['addChannel'](this), this['_audio']['play']());
    }, ryiq3(0x0, _n52, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), ryiq3(0x0, _n52, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), ryiq3(0x0, _n52, 'volume', function () {
      return 0x1;
    }, function (k45$j_) {}), s0h9['_null'] = void 0x0, s0h9;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ezbhc9, _5a$kn) {
  'use strict';

  for (var bh1c9e in Object['defineProperty'](_5a$kn, '__esModule', { 'value': !0x0 }), Laya) {
    var qgifr3 = Laya[bh1c9e];qgifr3 && qgifr3['__isclass'] && (_5a$kn[bh1c9e] = qgifr3);
  }
});