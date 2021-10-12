var p = wx.$h;
!function (j8ls$, hevy) {
  hevy['un'], hevy['uns'];var ogwc = hevy['static'],
      $s708l = hevy['class'],
      bavd5 = hevy['getset'];hevy['__newvec'];var fjmzs = laya['utils']['Browser'],
      derybv = (laya['events']['Event'], laya['events']['EventDispatcher']),
      vdbery = laya['resource']['HTMLImage'],
      ok21tq = laya['utils']['Handler'],
      yegv9 = laya['display']['Input'],
      ra5ix = laya['net']['Loader'];laya['maths']['Matrix'];var qtf2z = laya['renders']['Render'],
      hwcog9 = laya['utils']['RunDriver'];laya['media']['Sound'];var qok2t1 = laya['media']['SoundChannel'],
      r35ixa = laya['media']['SoundManager'],
      wkho1c = (laya['display']['Stage'], laya['net']['URL']),
      hg9eyv = laya['utils']['Utils'],
      j$8ls0 = ($s708l(gkowch, 'laya.wx.mini.MiniAdpter'), gkowch['getJson'] = function (rvadb) {
    return JSON['parse'](rvadb);
  }, gkowch['init'] = function (h1wcko, xd5a3r) {
    void 0x0 === h1wcko && (h1wcko = !0x1), void 0x0 === xd5a3r && (xd5a3r = !0x1), gkowch['_inited'] || (gkowch['window'] = j8ls$)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (gkowch['_inited'] = !0x0, gkowch['isZiYu'] = xd5a3r, gkowch['isPosMsgYu'] = h1wcko, gkowch['EnvConfig'] = {}, gkowch['isZiYu'] || (pmzf['setNativeFileDir']('/layaairGame'), pmzf['existDir'](pmzf['fileNativeDir'], ok21tq['create'](gkowch, gkowch['onMkdirCallBack']))), gkowch['window']['focus'] = function () {}, hevy['getUrlPath'] = function () {}, gkowch['window']['logtime'] = function (z8s0m) {}, gkowch['window']['alertTimeLog'] = function (fpjqz) {}, gkowch['window']['resetShareInfo'] = function () {}, gkowch['window']['CanvasRenderingContext2D'] = function () {}, gkowch['window']['CanvasRenderingContext2D']['prototype'] = gkowch['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gkowch['window']['document']['body']['appendChild'] = function () {}, gkowch['EnvConfig']['pixelRatioInt'] = 0x0, hwcog9['getPixelRatio'] = gkowch['pixelRatio'], gkowch['_preCreateElement'] = fjmzs['createElement'], fjmzs['createElement'] = gkowch['createElement'], hwcog9['createShaderCondition'] = gkowch['createShaderCondition'], hg9eyv['parseXMLFromString'] = gkowch['parseXMLFromString'], yegv9['_createInputElement'] = pqmz['_createInputElement'], gkowch['EnvConfig']['load'] = ra5ix['prototype']['load'], ra5ix['prototype']['load'] = wtk2o['prototype']['load'], gkowch['isZiYu'] && h1wcko && wx['onMessage'](function (mfszj8) {
      mfszj8['isLoad'] && (pmzf['ziyuFileData'][mfszj8['url']] = mfszj8['data']);
    }));
  }, gkowch['onMkdirCallBack'] = function (z2pfq, mzpqjf) {
    z2pfq || (pmzf['filesListObj'] = JSON['parse'](mzpqjf['data']));
  }, gkowch['pixelRatio'] = function () {
    if (!gkowch['EnvConfig']['pixelRatioInt']) try {
      var rxb5ad = wx['getSystemInfoSync']();return gkowch['EnvConfig']['pixelRatioInt'] = rxb5ad['pixelRatio'], rxb5ad['pixelRatio'];
    } catch (qt1kp) {}return gkowch['EnvConfig']['pixelRatioInt'];
  }, gkowch['createElement'] = function (erad) {
    var ervab;if ('canvas' == erad) return 0x1 == gkowch['idx'] ? gkowch['isZiYu'] ? (ervab = sharedCanvas)['style'] = {} : ervab = j8ls$['canvas'] : ervab = j8ls$['wx']['createCanvas'](), gkowch['idx']++, ervab;if ('textarea' == erad || 'input' == erad) return gkowch['onCreateInput'](erad);if ('div' != erad) return gkowch['_preCreateElement'](erad);return erad = gkowch['_preCreateElement'](erad), (erad['contains'] = function (wghkco) {
      return null;
    }, erad['removeChild'] = function (gc9he) {}, erad);
  }, gkowch['onCreateInput'] = function (vradbe) {
    return vradbe = gkowch['_preCreateElement'](vradbe), (vradbe['focus'] = pqmz['wxinputFocus'], vradbe['blur'] = pqmz['wxinputblur'], vradbe['style'] = {}, vradbe['value'] = 0x0, vradbe['parentElement'] = {}, vradbe['placeholder'] = {}, vradbe['type'] = {}, vradbe['setColor'] = function (e9byvd) {}, vradbe['setType'] = function (nx365) {}, vradbe['setFontFace'] = function (h9gecy) {}, vradbe['addEventListener'] = function (woh) {}, vradbe['contains'] = function (bdvye9) {
      return null;
    }, vradbe['removeChild'] = function (yechg) {}, vradbe);
  }, gkowch['createShaderCondition'] = function (j8$0) {
    var a3x5r = this;return function () {
      return a3x5r[j8$0['replace']('this.', '')];
    };
  }, gkowch['EnvConfig'] = null, gkowch['window'] = null, gkowch['_preCreateElement'] = null, gkowch['_inited'] = !0x1, gkowch['wxRequest'] = null, gkowch['systemInfo'] = null, gkowch['version'] = '0.0.1', gkowch['isZiYu'] = !0x1, gkowch['isPosMsgYu'] = !0x1, gkowch['parseXMLFromString'] = function (zsm) {
    var owkh1;zsm = zsm['replace'](/>\s+</g, '><');try {
      owkh1 = new j8ls$['Parser']['DOMParser']()['parseFromString'](zsm, 'text/xml');
    } catch (s8l70$) {
      throw '需要引入xml解析库文件';
    }return owkh1;
  }, gkowch['idx'] = 0x1, gkowch);function gkowch() {}$s708l(k1chwo, 'laya.wx.mini.MiniImage'), k1chwo['prototype']['_loadImage'] = function (xn5ia) {
    var q21pft = !0x1;-0x1 == xn5ia['indexOf']('layaNativeDir/') && (q21pft = !0x0, xn5ia = wkho1c['formatURL'](xn5ia)), pmzf['getFileInfo'](xn5ia) ? k1chwo['onCreateImage'](xn5ia, this, !q21pft) : -0x1 != xn5ia['indexOf']('http://') || -0x1 != xn5ia['indexOf']('https://') ? pmzf['downImg'](xn5ia, new ok21tq(k1chwo, k1chwo['onDownImgCallBack'], [xn5ia, this]), xn5ia) : k1chwo['onCreateImage'](xn5ia, this, !0x0);
  }, k1chwo['onDownImgCallBack'] = function (ok2q1, heg9vy, x5dbra) {
    x5dbra ? heg9vy['onError'](null) : k1chwo['onCreateImage'](ok2q1, heg9vy);
  }, k1chwo['onCreateImage'] = function (zqpt2f, evbgy9, _740$) {
    var xani5, wh1ok;function pzsmj() {
      wh1ok['onload'] = null, wh1ok['onerror'] = null, delete evbgy9['imgCache'][zqpt2f];
    }xani5 = (_740$ = void 0x0 === _740$ ? !0x1 : _740$) ? zqpt2f : (s0lj$8 = pmzf['getFileInfo'](zqpt2f)['md5'], pmzf['getFileNativePath'](s0lj$8)), null == evbgy9['imgCache'] && (evbgy9['imgCache'] = {}), _740$ = function () {
      pzsmj(), evbgy9['onLoaded'](wh1ok);
    };var s0lj$8 = function () {
      pzsmj(), evbgy9['event']('error', 'Load image failed');
    };'nativeimage' == evbgy9['_type'] ? ((wh1ok = new fjmzs['window']['Image']())['crossOrigin'] = '', wh1ok['onload'] = _740$, wh1ok['onerror'] = s0lj$8, wh1ok['src'] = xani5, evbgy9['imgCache'][zqpt2f] = wh1ok) : new vdbery['create'](xani5, { 'onload': _740$, 'onerror': s0lj$8, 'onCreate': function (jpzfsm) {
        wh1ok = jpzfsm, evbgy9['imgCache'][zqpt2f] = jpzfsm;
      } });
  };function k1chwo() {}var pqmz = ($s708l(tqk2, 'laya.wx.mini.MiniInput'), tqk2['_createInputElement'] = function () {
    yegv9['_initInput'](yegv9['area'] = fjmzs['createElement']('textarea')), yegv9['_initInput'](yegv9['input'] = fjmzs['createElement']('input')), yegv9['inputContainer'] = fjmzs['createElement']('div'), yegv9['inputContainer']['style']['position'] = 'absolute', yegv9['inputContainer']['style']['zIndex'] = 0x186a0, fjmzs['container']['appendChild'](yegv9['inputContainer']), yegv9['inputContainer']['setPos'] = function (y9vhge, $s8) {
      yegv9['inputContainer']['style']['left'] = y9vhge + 'px', yegv9['inputContainer']['style']['top'] = $s8 + 'px';
    }, hevy['stage']['on']('resize', null, tqk2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yrdvb) {
      j8ls$['dispatchEvent'] && j8ls$['dispatchEvent']('resize');
    }), r35ixa['_soundClass'] = kwhcog, r35ixa['_musicClass'] = kwhcog;
  }, tqk2['_onStageResize'] = function () {
    hevy['stage']['_canvasTransform']['identity']()['scale'](fjmzs['width'] / qtf2z['canvas']['width'] / hwcog9['getPixelRatio'](), fjmzs['height'] / qtf2z['canvas']['height'] / hwcog9['getPixelRatio']());
  }, tqk2['wxinputFocus'] = function (sl0j8$) {
    var geh9vy = yegv9['inputElement']['target'];geh9vy && !geh9vy['editable'] || (j$8ls0['window']['wx']['offKeyboardConfirm'](), j$8ls0['window']['wx']['offKeyboardInput'](), j$8ls0['window']['wx']['showKeyboard']({ 'defaultValue': geh9vy['text'], 'maxLength': geh9vy['maxChars'], 'multiple': geh9vy['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (n65x3i) {}, 'fail': function (cokhg) {} }), j$8ls0['window']['wx']['onKeyboardConfirm'](function (xadr5) {
      xadr5 = xadr5 ? xadr5['value'] : '', (geh9vy['text'] = xadr5, geh9vy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), j$8ls0['window']['wx']['onKeyboardInput'](function (hcy9g) {
      hcy9g = hcy9g ? hcy9g['value'] : '', geh9vy['multiline'] || -0x1 == hcy9g['indexOf']('\x0a') ? (geh9vy['text'] = hcy9g, geh9vy['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, tqk2['inputEnter'] = function () {
    yegv9['inputElement']['target']['focus'] = !0x1;
  }, tqk2['wxinputblur'] = function () {
    tqk2['hideKeyboard']();
  }, tqk2['hideKeyboard'] = function () {
    j$8ls0['window']['wx']['offKeyboardConfirm'](), j$8ls0['window']['wx']['offKeyboardInput'](), j$8ls0['window']['wx']['hideKeyboard']({ 'success': function (ev9hgy) {
        console['log']('隐藏键盘');
      }, 'fail': function (bey) {
        console['log']('隐藏键盘出错:' + (bey ? bey['errMsg'] : ''));
      } });
  }, tqk2);function tqk2() {}var wtk2o = function () {
    function s8mj0z() {}$s708l(s8mj0z, 'laya.wx.mini.MiniLoader');var breav = s8mj0z['prototype'];return breav['load'] = function (i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp) {
      void 0x0 === szjmf8 && (szjmf8 = !0x0), void 0x0 === mjqzp && (mjqzp = !0x1);var x3i6n = this;0x0 === (x3i6n['_url'] = i3ax5r)['indexOf']('data:image') ? x3i6n['_type'] = sjm8l0 = 'image' : x3i6n['_type'] = sjm8l0 = sjm8l0 || x3i6n['getTypeFromUrl'](i3ax5r), x3i6n['_cache'] = szjmf8, x3i6n['_data'] = null;var rdybev = 'ascii';-0x1 != i3ax5r['indexOf']('.fnt') ? rdybev = 'utf8' : 'arraybuffer' == sjm8l0 && (rdybev = '');var zs0j8 = hg9eyv['getFileExtension'](i3ax5r);if (-0x1 != s8mj0z['_fileTypeArr']['indexOf'](zs0j8)) j$8ls0['EnvConfig']['load']['call'](this, i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp);else {
        if (pmzf['getFileInfo'](i3ax5r)) j$8ls0['EnvConfig']['load']['call'](this, i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp);else {
          if (-0x1 != i3ax5r['indexOf']('layaNativeDir/')) {
            if (j$8ls0['isZiYu']) {
              var wkt2o1 = pmzf['ziyuFileData'][i3ax5r];return void x3i6n['onLoaded'](wkt2o1);
            }return cosnole['log']('read read'), void pmzf['read'](i3ax5r, rdybev, new ok21tq(s8mj0z, s8mj0z['onReadNativeCallBack'], [rdybev, i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp, x3i6n]));
          }wkt2o1 = '' == wkho1c['rootPath'] ? i3ax5r : i3ax5r['split'](wkho1c['rootPath'])[0x0], -0x1 != i3ax5r['indexOf']('http://') || -0x1 != i3ax5r['indexOf']('https://') ? j$8ls0['EnvConfig']['load']['call'](x3i6n, i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp) : pmzf['readFile'](wkt2o1, rdybev, new ok21tq(s8mj0z, s8mj0z['onReadNativeCallBack'], [rdybev, i3ax5r, sjm8l0, szjmf8, zpjfq, mjqzp, x3i6n]), i3ax5r);
        }
      }
    }, breav['resMgrLoad'] = function (y9hve, sl08jm, gye9c, mpt, b9vd, tq21o, mslj8) {
      void 0x0 === gye9c && (gye9c = 0x0), void 0x0 === mpt && (mpt = !0x1), void 0x0 === b9vd && (b9vd = !0x1), void 0x0 === tq21o && (tq21o = 0x0), void 0x0 === mslj8 && (mslj8 = 0x3), -0x1 != y9hve['indexOf']('mpack') && console['log']('=============resMgrLoad url:', y9hve), j$8ls0['EnvConfig']['resMgrLoad'](y9hve, (mzjs80, s8j$l, ve9ygh) => {
        s8mj0z['prototype']['resMgrLoadCallBack'](mzjs80, s8j$l, ve9ygh, sl08jm);
      }, gye9c, mpt, b9vd, tq21o, mslj8);
    }, breav['resMgrLoadCallBack'] = function (tmzqp, pmfjz, ixa5, vabd) {
      console['log']('buff:::', tmzqp, ixa5, pmzf['fileNativeDir'] + '///' + pmzf['fileListName']), vabd(tmzqp, pmfjz, ixa5);
    }, breav['clearRes'] = function (hwok1c, smzjp) {
      this['clearRes'](hwok1c, smzjp = void 0x0 === smzjp ? !0x1 : smzjp), smzjp = pmzf['getFileInfo'](hwok1c), !smzjp || -0x1 == hwok1c['indexOf']('http://') && -0x1 == hwok1c['indexOf']('https://') || (smzjp = smzjp['md5'], smzjp = pmzf['getFileNativePath'](smzjp), pmzf['remove'](smzjp));
    }, s8mj0z['onReadNativeCallBack'] = function (vy9eg, bgv9, x35ra, sjzfm8, wohgc9, dyrv, wgchk, rbdvae, $l087) {
      void 0x0 === sjzfm8 && (sjzfm8 = !0x0), void 0x0 === dyrv && (dyrv = !0x1), (rbdvae = void 0x0 === rbdvae ? 0x0 : rbdvae) ? 0x1 == rbdvae && j$8ls0['EnvConfig']['load']['call'](wgchk, bgv9, x35ra, sjzfm8, wohgc9, dyrv) : ($l087 = 'json' == x35ra || 'atlas' == x35ra ? j$8ls0['getJson']($l087['data']) : 'xml' == x35ra ? hg9eyv['parseXMLFromString']($l087['data']) : $l087['data'], wgchk['onLoaded']($l087), !j$8ls0['isZiYu'] && j$8ls0['isPosMsgYu'] && 'arraybuffer' != x35ra && wx['postMessage']({ 'url': bgv9, 'data': $l087, 'isLoad': !0x0 }));
    }, ogwc(s8mj0z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s8mj0z;
  }(),
      pmzf = ($s708l(cw9oh, 'laya.wx.mini.MiniFileMgr', derybv), cw9oh['isLoadFile'] = function (xai53r) {
    return -0x1 != cw9oh['_fileTypeArr']['indexOf'](xai53r);
  }, cw9oh['getFileInfo'] = function (cgwokh) {
    return cgwokh = cgwokh['split']('?')[0x0], cgwokh = cw9oh['filesListObj'][cgwokh], null == cgwokh ? null : cgwokh;
  }, cw9oh['onFileUpdate'] = function (yghc9w, cgeyh9) {
    var fpzq = yghc9w['split']('/');yghc9w = fpzq[fpzq['length'] - 0x1], fpzq = cw9oh['getFileInfo'](cgeyh9), null == fpzq ? cw9oh['onSaveFile'](cgeyh9, yghc9w) : fpzq['readyUrl'] != cgeyh9 && cw9oh['remove'](yghc9w, cgeyh9);
  }, cw9oh['exits'] = function (jsfpmz, o9gch) {
    jsfpmz = cw9oh['getFileNativePath'](jsfpmz), cw9oh['fs']['getFileInfo']({ 'filePath': jsfpmz, 'success': function (reydbv) {
        null != o9gch && o9gch['runWith']([0x0, reydbv]);
      }, 'fail': function (whocg9) {
        null != o9gch && o9gch['runWith']([0x1, whocg9]);
      } });
  }, cw9oh['read'] = function (xr3d5a, bdarve, dyrevb, kotw) {
    void 0x0 === bdarve && (bdarve = 'ascill'), xr3d5a = '' != (kotw = void 0x0 === kotw ? '' : kotw) ? cw9oh['getFileNativePath'](xr3d5a) : xr3d5a, cw9oh['fs']['readFile']({ 'filePath': xr3d5a, 'encoding': bdarve, 'success': function (tqf2p) {
        null != dyrevb && dyrevb['runWith']([0x0, tqf2p]);
      }, 'fail': function (yhgec9) {
        yhgec9 && '' != kotw ? cw9oh['down'](kotw, bdarve, dyrevb, kotw) : null != dyrevb && dyrevb['runWith']([0x1]);
      } });
  }, cw9oh['readNativeFile'] = function (iarx53, j8m0l) {
    cw9oh['fs']['readFile']({ 'filePath': iarx53, 'encoding': '', 'success': function (rx5ab) {
        null != j8m0l && j8m0l['runWith']([0x0]);
      }, 'fail': function (chkwo1) {
        null != j8m0l && j8m0l['runWith']([0x1]);
      } });
  }, cw9oh['down'] = function (edvab, ls8j, whckog, mjs8l0) {
    void 0x0 === ls8j && (ls8j = 'ascill'), void 0x0 === mjs8l0 && (mjs8l0 = '');var szj80m = cw9oh['getFileNativePath'](mjs8l0);cw9oh['wxdown']({ 'url': edvab, 'filePath': szj80m, 'success': function (ravbe) {
        0xc8 === ravbe['statusCode'] && cw9oh['readFile'](ravbe['filePath'], ls8j, whckog, mjs8l0);
      }, 'fail': function (dvbye) {
        null != whckog && whckog['runWith']([0x1, dvbye]);
      } })['onProgressUpdate'](function (vrbeyd) {
      null != whckog && whckog['runWith']([0x2, vrbeyd['progress']]);
    });
  }, cw9oh['readFile'] = function (k12cwo, ztqp2, s7l0, r5abv) {
    void 0x0 === r5abv && (r5abv = ''), cw9oh['fs']['readFile']({ 'filePath': k12cwo, 'encoding': ztqp2 = void 0x0 === ztqp2 ? 'ascill' : ztqp2, 'success': function (nx635i) {
        -0x1 == k12cwo['indexOf']('http://') && -0x1 == k12cwo['indexOf']('https://') || cw9oh['onFileUpdate'](k12cwo, r5abv), null != s7l0 && s7l0['runWith']([0x0, nx635i]);
      }, 'fail': function (rdyve) {
        rdyve && null != s7l0 && s7l0['runWith']([0x1, rdyve]);
      } });
  }, cw9oh['downImg'] = function (sfzj8m, ev9dyb, yvbeg) {
    void 0x0 === yvbeg && (yvbeg = ''), cw9oh['wxdown']({ 'url': sfzj8m, 'success': function (zp) {
        0xc8 === zp['statusCode'] && cw9oh['copyFile'](zp['tempFilePath'], yvbeg, ev9dyb);
      }, 'fail': function (vbye9d) {
        null != ev9dyb && ev9dyb['runWith']([0x1, vbye9d]);
      } });
  }, cw9oh['copyFile'] = function (gveyh, qp2ft1, z8mf) {
    var l0j$s = gveyh['split']('/'),
        c9wygh = l0j$s[l0j$s['length'] - 0x1];qp2ft1['split']('?')[0x0];var ydbevr = cw9oh['getFileInfo'](qp2ft1);l0j$s = cw9oh['getFileNativePath'](c9wygh), cw9oh['fs']['copyFile']({ 'srcPath': gveyh, 'destPath': l0j$s, 'success': function (yde9v) {
        ydbevr ? ydbevr['readyUrl'] != qp2ft1 && cw9oh['remove'](c9wygh, qp2ft1, z8mf) : (cw9oh['onSaveFile'](qp2ft1, c9wygh), null != z8mf && z8mf['runWith']([0x0]));
      }, 'fail': function (vda5b) {
        null != z8mf && z8mf['runWith']([0x1, vda5b]);
      } });
  }, cw9oh['getFileNativePath'] = function (bxadr) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + bxadr;
  }, cw9oh['remove'] = function (l8$s0, dbva5r, okhc1) {
    void 0x0 === dbva5r && (dbva5r = '');var n3i5x = cw9oh['getFileInfo'](dbva5r),
        ls08j = cw9oh['getFileNativePath'](n3i5x['md5']);hevy['loader']['clearRes'](n3i5x['readyUrl']), cw9oh['fs']['unlink']({ 'filePath': ls08j, 'success': function (gwcho) {
        '' != dbva5r && cw9oh['onSaveFile'](dbva5r, l8$s0), null != okhc1 && okhc1['runWith']([0x0]);
      }, 'fail': function (yg9ce) {} });
  }, cw9oh['onSaveFile'] = function (mfj8z, c2w) {
    var fp1t2 = mfj8z['split']('?')[0x0];cw9oh['filesListObj'][fp1t2] = { 'md5': c2w, 'readyUrl': mfj8z }, cw9oh['fs']['writeFile']({ 'filePath': cw9oh['fileNativeDir'] + '/' + cw9oh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cw9oh['filesListObj']), 'success': function ($4l0_) {
        console['log']('写入测试测试成功：', $4l0_);
      }, 'fail': function (jl$s80) {
        console['log']('写入测试测试失败：', jl$s80);
      } });
  }, cw9oh['existDir'] = function ($780ls, cowh1k) {
    cw9oh['fs']['mkdir']({ 'dirPath': $780ls, 'success': function (l8sj0m) {
        null != cowh1k && cowh1k['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (bd5x) {
        -0x1 != bd5x['errMsg']['indexOf']('file already exists') ? cw9oh['readSync'](cw9oh['fileListName'], 'utf8', cowh1k) : null != cowh1k && cowh1k['runWith']([0x1, bd5x]);
      } });
  }, cw9oh['readSync'] = function (qpkt1, zsfmj8, vrybd, bye9vd) {
    void 0x0 === zsfmj8 && (zsfmj8 = 'ascill'), void 0x0 === bye9vd && (bye9vd = ''), qpkt1 = cw9oh['getFileNativePath'](qpkt1);var jfspm;try {
      jfspm = cw9oh['fs']['readFileSync'](qpkt1), null != vrybd && vrybd['runWith']([0x0, { 'data': jfspm }]);
    } catch (re) {
      null != vrybd && vrybd['runWith']([0x1]);
    }
  }, cw9oh['readCache'] = function () {}, cw9oh['writeCache'] = function (drbye) {
    var xra5d = readyUrl['split']('?')[0x0];cw9oh['filesListObj'][xra5d] = { 'md5': md5Name, 'readyUrl': readyUrl }, cw9oh['fs']['writeFile']({ 'filePath': cw9oh['fileNativeDir'] + '/' + cw9oh['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cw9oh['filesListObj']), 'success': function (ybve9d) {}, 'fail': function ($47l_) {} });
  }, cw9oh['setNativeFileDir'] = function (a53d) {
    cw9oh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a53d;
  }, cw9oh['filesListObj'] = {}, cw9oh['fileNativeDir'] = null, cw9oh['fileListName'] = 'layaairfiles.txt', cw9oh['ziyuFileData'] = {}, ogwc(cw9oh, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), cw9oh);function cw9oh() {
    cw9oh['__super']['call'](this);
  }var kwhcog = function () {
    function kwgho() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, kwgho['__super']['call'](this), this['_sound'] = kwgho['_createSound']();
    }$s708l(kwgho, 'laya.wx.mini.MiniSound', derybv);var in6x5 = kwgho['prototype'];return in6x5['load'] = function (yhg9e) {
      var $js08l = this,
          hv9gy;function k2cow() {
        if (null != kwgho['_null']) $js08l['_sound']['onCanplay'](kwgho['_null']), $js08l['_sound']['onError'](kwgho['_null']);else try {
          $js08l['_sound']['onCanplay'](null), $js08l['_sound']['onError'](null), kwgho['_null'] = null;
        } catch (kto12q) {
          console['warn']('[wxmini] _clearSound:' + kto12q), $js08l['_sound']['onCanplay'](hecg9y), $js08l['_sound']['onError'](hecg9y), kwgho['_null'] = hecg9y;
        }
      }function hecg9y() {}yhg9e = wkho1c['formatURL'](yhg9e), this['url'] = yhg9e, kwgho['_audioCache'][yhg9e] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        k2cow(), hv9gy['loaded'] = !0x0, hv9gy['event']('complete'), kwgho['_audioCache'][hv9gy['url']] = hv9gy;
      }), this['_sound']['onError'](function (vdab5) {
        console['error']('errCode=' + vdab5['errCode'] + '  errMsg=' + vdab5['errMsg']), k2cow(), hv9gy['event']('error');
      }), this['_sound']['src'] = yhg9e, hv9gy = this);
    }, in6x5['play'] = function (m8jsz0, xda5b) {
      void 0x0 === m8jsz0 && (m8jsz0 = 0x0), void 0x0 === xda5b && (xda5b = 0x0), (y9ed = this['url'] == r35ixa['_tMusic'] ? (kwgho['_musicAudio'] || (kwgho['_musicAudio'] = kwgho['_createSound']()), kwgho['_musicAudio']) : kwgho['_createSound']())['src'] = this['url'];var y9ed = new heg9cy(y9ed);return y9ed['url'] = this['url'], y9ed['loops'] = xda5b, y9ed['startTime'] = m8jsz0, y9ed['play'](), r35ixa['addChannel'](y9ed), y9ed;
    }, in6x5['dispose'] = function () {
      var gbyve = kwgho['_audioCache'][this['url']];gbyve && (gbyve['src'] = '', delete kwgho['_audioCache'][this['url']]);
    }, bavd5(0x0, in6x5, 'duration', function () {
      return this['_sound']['duration'];
    }), kwgho['_createSound'] = function () {
      return kwgho['_id']++, j$8ls0['window']['wx']['createInnerAudioContext']();
    }, kwgho['_musicAudio'] = null, kwgho['_id'] = 0x0, kwgho['_audioCache'] = {}, kwgho['_null'] = void 0x0, kwgho;
  }(),
      heg9cy = function () {
    function pqfmzt(i35n) {
      this['_audio'] = null, this['_onEnd'] = null, pqfmzt['__super']['call'](this), this['_audio'] = i35n, this['_onEnd'] = hg9eyv['bind'](this['__onEnd'], this), i35n['onEnded'](this['_onEnd']);
    }$s708l(pqfmzt, 'laya.wx.mini.MiniSoundChannel', qok2t1);var vrbde = pqfmzt['prototype'];return vrbde['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (hevy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, vrbde['__onNull'] = function () {}, vrbde['play'] = function () {
      this['isStopped'] = !0x1, r35ixa['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, vrbde['stop'] = function () {
      if (this['isStopped'] = !0x0, r35ixa['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != pqfmzt['_null']) this['_audio']['onEnded'](pqfmzt['_null']);else try {
          this['_audio']['onEnded'](null), pqfmzt['_null'] = null;
        } catch (qfp2tz) {
          console['warn']('[wxmini] stop:' + qfp2tz), this['_audio']['onEnded'](hg9eyv['bind'](this['__onNull'], this)), pqfmzt['_null'] = hg9eyv['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, vrbde['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, vrbde['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, r35ixa['addChannel'](this), this['_audio']['play']());
    }, bavd5(0x0, vrbde, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), bavd5(0x0, vrbde, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), bavd5(0x0, vrbde, 'volume', function () {
      return 0x1;
    }, function (jfmzq) {}), pqfmzt['_null'] = void 0x0, pqfmzt;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (mzt, dbx5r) {
  'use strict';

  for (var otq in Object['defineProperty'](dbx5r, '__esModule', { 'value': !0x0 }), Laya) {
    var kto1 = Laya[otq];kto1 && kto1['__isclass'] && (dbx5r[otq] = kto1);
  }
});