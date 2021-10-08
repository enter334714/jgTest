!function (b3xu7, uzxb7) {
  uzxb7['un'], uzxb7['uns'];var $gj16 = uzxb7['static'],
      lwe98 = uzxb7['class'],
      r$ij6 = uzxb7['getset'];uzxb7['__newvec'];var uvp73b = laya['utils']['Browser'],
      pvo3 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      lg_h6 = laya['resource']['HTMLImage'],
      j6$ri = laya['utils']['Handler'],
      ac245m = laya['display']['Input'],
      qle89w = laya['net']['Loader'];laya['maths']['Matrix'];var xkus7z = laya['renders']['Render'],
      hl96_ = laya['utils']['RunDriver'];laya['media']['Sound'];var tbvqp = laya['media']['SoundChannel'],
      wq8el9 = laya['media']['SoundManager'],
      t3bvp = (laya['display']['Stage'], laya['net']['URL']),
      qeow8 = laya['utils']['Utils'],
      sfk7z = (lwe98(gh$6j, 'laya.wx.mini.MiniAdpter'), gh$6j['getJson'] = function (qwe8t) {
    return JSON['parse'](qwe8t);
  }, gh$6j['init'] = function (welq8, lh8_) {
    void 0x0 === welq8 && (welq8 = !0x1), void 0x0 === lh8_ && (lh8_ = !0x1), gh$6j['_inited'] || (gh$6j['window'] = b3xu7)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (gh$6j['_inited'] = !0x0, gh$6j['isZiYu'] = lh8_, gh$6j['isPosMsgYu'] = welq8, gh$6j['EnvConfig'] = {}, gh$6j['isZiYu'] || (i1ry0['setNativeFileDir']('/layaairGame'), i1ry0['existDir'](i1ry0['fileNativeDir'], j6$ri['create'](gh$6j, gh$6j['onMkdirCallBack']))), gh$6j['window']['focus'] = function () {}, uzxb7['getUrlPath'] = function () {}, gh$6j['window']['logtime'] = function (m452a0) {}, gh$6j['window']['alertTimeLog'] = function (j$yr1i) {}, gh$6j['window']['resetShareInfo'] = function () {}, gh$6j['window']['CanvasRenderingContext2D'] = function () {}, gh$6j['window']['CanvasRenderingContext2D']['prototype'] = gh$6j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gh$6j['window']['document']['body']['appendChild'] = function () {}, gh$6j['EnvConfig']['pixelRatioInt'] = 0x0, hl96_['getPixelRatio'] = gh$6j['pixelRatio'], gh$6j['_preCreateElement'] = uvp73b['createElement'], uvp73b['createElement'] = gh$6j['createElement'], hl96_['createShaderCondition'] = gh$6j['createShaderCondition'], qeow8['parseXMLFromString'] = gh$6j['parseXMLFromString'], ac245m['_createInputElement'] = ubpv73['_createInputElement'], gh$6j['EnvConfig']['load'] = qle89w['prototype']['load'], qle89w['prototype']['load'] = l9h_e8['prototype']['load'], gh$6j['isZiYu'] && welq8 && wx['onMessage'](function (kfsdz) {
      kfsdz['isLoad'] && (i1ry0['ziyuFileData'][kfsdz['url']] = kfsdz['data']);
    }));
  }, gh$6j['onMkdirCallBack'] = function (gj$h_, szu7x3) {
    gj$h_ || (i1ry0['filesListObj'] = JSON['parse'](szu7x3['data']));
  }, gh$6j['pixelRatio'] = function () {
    if (!gh$6j['EnvConfig']['pixelRatioInt']) try {
      var zfkxs7 = wx['getSystemInfoSync']();return gh$6j['EnvConfig']['pixelRatioInt'] = zfkxs7['pixelRatio'], zfkxs7['pixelRatio'];
    } catch (gh_6j) {}return gh$6j['EnvConfig']['pixelRatioInt'];
  }, gh$6j['createElement'] = function (r61j) {
    var jriy1;if ('canvas' == r61j) return 0x1 == gh$6j['idx'] ? gh$6j['isZiYu'] ? (jriy1 = sharedCanvas)['style'] = {} : jriy1 = b3xu7['canvas'] : jriy1 = b3xu7['wx']['createCanvas'](), gh$6j['idx']++, jriy1;if ('textarea' == r61j || 'input' == r61j) return gh$6j['onCreateInput'](r61j);if ('div' != r61j) return gh$6j['_preCreateElement'](r61j);return r61j = gh$6j['_preCreateElement'](r61j), (r61j['contains'] = function (u3xs7z) {
      return null;
    }, r61j['removeChild'] = function (zkxf7) {}, r61j);
  }, gh$6j['onCreateInput'] = function (g8hl) {
    return g8hl = gh$6j['_preCreateElement'](g8hl), (g8hl['focus'] = ubpv73['wxinputFocus'], g8hl['blur'] = ubpv73['wxinputblur'], g8hl['style'] = {}, g8hl['value'] = 0x0, g8hl['parentElement'] = {}, g8hl['placeholder'] = {}, g8hl['type'] = {}, g8hl['setColor'] = function (g_98hl) {}, g8hl['setType'] = function (iy1a0) {}, g8hl['setFontFace'] = function (el_8h9) {}, g8hl['addEventListener'] = function (ji$6) {}, g8hl['contains'] = function (upovb3) {
      return null;
    }, g8hl['removeChild'] = function (j$1iyr) {}, g8hl);
  }, gh$6j['createShaderCondition'] = function (voq) {
    var ij1ry = this;return function () {
      return ij1ry[voq['replace']('this.', '')];
    };
  }, gh$6j['EnvConfig'] = null, gh$6j['window'] = null, gh$6j['_preCreateElement'] = null, gh$6j['_inited'] = !0x1, gh$6j['wxRequest'] = null, gh$6j['systemInfo'] = null, gh$6j['version'] = '0.0.1', gh$6j['isZiYu'] = !0x1, gh$6j['isPosMsgYu'] = !0x1, gh$6j['parseXMLFromString'] = function (bzu7x) {
    var _e89;bzu7x = bzu7x['replace'](/>\s+</g, '><');try {
      _e89 = new b3xu7['Parser']['DOMParser']()['parseFromString'](bzu7x, 'text/xml');
    } catch (b3vou) {
      throw '需要引入xml解析库文件';
    }return _e89;
  }, gh$6j['idx'] = 0x1, gh$6j);function gh$6j() {}lwe98(otp3vb, 'laya.wx.mini.MiniImage'), otp3vb['prototype']['_loadImage'] = function (vbuop) {
    var dfsx = !0x1;-0x1 == vbuop['indexOf']('layaNativeDir/') && (dfsx = !0x0, vbuop = t3bvp['formatURL'](vbuop)), i1ry0['getFileInfo'](vbuop) ? otp3vb['onCreateImage'](vbuop, this, !dfsx) : -0x1 != vbuop['indexOf']('http://') || -0x1 != vbuop['indexOf']('https://') ? i1ry0['downImg'](vbuop, new j6$ri(otp3vb, otp3vb['onDownImgCallBack'], [vbuop, this]), vbuop) : otp3vb['onCreateImage'](vbuop, this, !0x0);
  }, otp3vb['onDownImgCallBack'] = function (zbu7v, lh98e_, ij$r6) {
    ij$r6 ? lh98e_['onError'](null) : otp3vb['onCreateImage'](zbu7v, lh98e_);
  }, otp3vb['onCreateImage'] = function (q9el, tpbqo, qo8et) {
    var l9g_8h, a2540y;function vbtqp() {
      a2540y['onload'] = null, a2540y['onerror'] = null, delete tpbqo['imgCache'][q9el];
    }l9g_8h = (qo8et = void 0x0 === qo8et ? !0x1 : qo8et) ? q9el : (r14ya0 = i1ry0['getFileInfo'](q9el)['md5'], i1ry0['getFileNativePath'](r14ya0)), null == tpbqo['imgCache'] && (tpbqo['imgCache'] = {}), qo8et = function () {
      vbtqp(), tpbqo['onLoaded'](a2540y);
    };var r14ya0 = function () {
      vbtqp(), tpbqo['event']('error', 'Load image failed');
    };'nativeimage' == tpbqo['_type'] ? ((a2540y = new uvp73b['window']['Image']())['crossOrigin'] = '', a2540y['onload'] = qo8et, a2540y['onerror'] = r14ya0, a2540y['src'] = l9g_8h, tpbqo['imgCache'][q9el] = a2540y) : new lg_h6['create'](l9g_8h, { 'onload': qo8et, 'onerror': r14ya0, 'onCreate': function (_9g6h) {
        a2540y = _9g6h, tpbqo['imgCache'][q9el] = _9g6h;
      } });
  };function otp3vb() {}var ubpv73 = (lwe98(bu73x, 'laya.wx.mini.MiniInput'), bu73x['_createInputElement'] = function () {
    ac245m['_initInput'](ac245m['area'] = uvp73b['createElement']('textarea')), ac245m['_initInput'](ac245m['input'] = uvp73b['createElement']('input')), ac245m['inputContainer'] = uvp73b['createElement']('div'), ac245m['inputContainer']['style']['position'] = 'absolute', ac245m['inputContainer']['style']['zIndex'] = 0x186a0, uvp73b['container']['appendChild'](ac245m['inputContainer']), ac245m['inputContainer']['setPos'] = function (j$iy, tlew) {
      ac245m['inputContainer']['style']['left'] = j$iy + 'px', ac245m['inputContainer']['style']['top'] = tlew + 'px';
    }, uzxb7['stage']['on']('resize', null, bu73x['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_9h6l) {
      b3xu7['dispatchEvent'] && b3xu7['dispatchEvent']('resize');
    }), wq8el9['_soundClass'] = tqeow, wq8el9['_musicClass'] = tqeow;
  }, bu73x['_onStageResize'] = function () {
    uzxb7['stage']['_canvasTransform']['identity']()['scale'](uvp73b['width'] / xkus7z['canvas']['width'] / hl96_['getPixelRatio'](), uvp73b['height'] / xkus7z['canvas']['height'] / hl96_['getPixelRatio']());
  }, bu73x['wxinputFocus'] = function (gh6_9l) {
    var i6$g = ac245m['inputElement']['target'];i6$g && !i6$g['editable'] || (sfk7z['window']['wx']['offKeyboardConfirm'](), sfk7z['window']['wx']['offKeyboardInput'](), sfk7z['window']['wx']['showKeyboard']({ 'defaultValue': i6$g['text'], 'maxLength': i6$g['maxChars'], 'multiple': i6$g['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (v7u3z) {}, 'fail': function (ry04a1) {} }), sfk7z['window']['wx']['onKeyboardConfirm'](function (gl89) {
      gl89 = gl89 ? gl89['value'] : '', (i6$g['text'] = gl89, i6$g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), sfk7z['window']['wx']['onKeyboardInput'](function (tv3pob) {
      tv3pob = tv3pob ? tv3pob['value'] : '', i6$g['multiline'] || -0x1 == tv3pob['indexOf']('\x0a') ? (i6$g['text'] = tv3pob, i6$g['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, bu73x['inputEnter'] = function () {
    ac245m['inputElement']['target']['focus'] = !0x1;
  }, bu73x['wxinputblur'] = function () {
    bu73x['hideKeyboard']();
  }, bu73x['hideKeyboard'] = function () {
    sfk7z['window']['wx']['offKeyboardConfirm'](), sfk7z['window']['wx']['offKeyboardInput'](), sfk7z['window']['wx']['hideKeyboard']({ 'success': function (v3pu) {
        console['log']('隐藏键盘');
      }, 'fail': function (dzsxkf) {
        console['log']('隐藏键盘出错:' + (dzsxkf ? dzsxkf['errMsg'] : ''));
      } });
  }, bu73x);function bu73x() {}var l9h_e8 = function () {
    function e_9lw() {}lwe98(e_9lw, 'laya.wx.mini.MiniLoader');var jg$6_h = e_9lw['prototype'];return jg$6_h['load'] = function (i1$jy, $jryi1, ihg$6, obpv3, vqtwpo) {
      void 0x0 === ihg$6 && (ihg$6 = !0x0), void 0x0 === vqtwpo && (vqtwpo = !0x1);var rij1y = this;0x0 === (rij1y['_url'] = i1$jy)['indexOf']('data:image') ? rij1y['_type'] = $jryi1 = 'image' : rij1y['_type'] = $jryi1 = $jryi1 || rij1y['getTypeFromUrl'](i1$jy), rij1y['_cache'] = ihg$6, rij1y['_data'] = null;var fsx7kz = 'ascii';-0x1 != i1$jy['indexOf']('.fnt') ? fsx7kz = 'utf8' : 'arraybuffer' == $jryi1 && (fsx7kz = '');var zx7s3u = qeow8['getFileExtension'](i1$jy);if (-0x1 != e_9lw['_fileTypeArr']['indexOf'](zx7s3u)) sfk7z['EnvConfig']['load']['call'](this, i1$jy, $jryi1, ihg$6, obpv3, vqtwpo);else {
        if (i1ry0['getFileInfo'](i1$jy)) sfk7z['EnvConfig']['load']['call'](this, i1$jy, $jryi1, ihg$6, obpv3, vqtwpo);else {
          if (-0x1 != i1$jy['indexOf']('layaNativeDir/')) {
            if (sfk7z['isZiYu']) {
              var g1i$6 = i1ry0['ziyuFileData'][i1$jy];return void rij1y['onLoaded'](g1i$6);
            }return cosnole['log']('read read'), void i1ry0['read'](i1$jy, fsx7kz, new j6$ri(e_9lw, e_9lw['onReadNativeCallBack'], [fsx7kz, i1$jy, $jryi1, ihg$6, obpv3, vqtwpo, rij1y]));
          }g1i$6 = '' == t3bvp['rootPath'] ? i1$jy : i1$jy['split'](t3bvp['rootPath'])[0x0], -0x1 != i1$jy['indexOf']('http://') || -0x1 != i1$jy['indexOf']('https://') ? sfk7z['EnvConfig']['load']['call'](rij1y, i1$jy, $jryi1, ihg$6, obpv3, vqtwpo) : i1ry0['readFile'](g1i$6, fsx7kz, new j6$ri(e_9lw, e_9lw['onReadNativeCallBack'], [fsx7kz, i1$jy, $jryi1, ihg$6, obpv3, vqtwpo, rij1y]), i1$jy);
        }
      }
    }, jg$6_h['resMgrLoad'] = function (_ghj$, iyr$j, tpqbo, kdfxzs, l89qe, pb3vu7, ar04y) {
      void 0x0 === tpqbo && (tpqbo = 0x0), void 0x0 === kdfxzs && (kdfxzs = !0x1), void 0x0 === l89qe && (l89qe = !0x1), void 0x0 === pb3vu7 && (pb3vu7 = 0x0), void 0x0 === ar04y && (ar04y = 0x3), -0x1 != _ghj$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _ghj$), sfk7z['EnvConfig']['resMgrLoad'](_ghj$, (ri0yj, xkus, woptqe) => {
        e_9lw['prototype']['resMgrLoadCallBack'](ri0yj, xkus, woptqe, iyr$j);
      }, tpqbo, kdfxzs, l89qe, pb3vu7, ar04y);
    }, jg$6_h['resMgrLoadCallBack'] = function (j_$g, sdkzxf, up3v7, wqov) {
      console['log']('buff:::', j_$g, up3v7, i1ry0['fileNativeDir'] + '///' + i1ry0['fileListName']), wqov(j_$g, sdkzxf, up3v7);
    }, jg$6_h['clearRes'] = function (vtqowp, opwtvq) {
      this['clearRes'](vtqowp, opwtvq = void 0x0 === opwtvq ? !0x1 : opwtvq), opwtvq = i1ry0['getFileInfo'](vtqowp), !opwtvq || -0x1 == vtqowp['indexOf']('http://') && -0x1 == vtqowp['indexOf']('https://') || (opwtvq = opwtvq['md5'], opwtvq = i1ry0['getFileNativePath'](opwtvq), i1ry0['remove'](opwtvq));
    }, e_9lw['onReadNativeCallBack'] = function (tbvoqp, te8qow, q8telw, l8h9_, zfx, kfx7, s7z3xu, qteowp, p7vub) {
      void 0x0 === l8h9_ && (l8h9_ = !0x0), void 0x0 === kfx7 && (kfx7 = !0x1), (qteowp = void 0x0 === qteowp ? 0x0 : qteowp) ? 0x1 == qteowp && sfk7z['EnvConfig']['load']['call'](s7z3xu, te8qow, q8telw, l8h9_, zfx, kfx7) : (p7vub = 'json' == q8telw || 'atlas' == q8telw ? sfk7z['getJson'](p7vub['data']) : 'xml' == q8telw ? qeow8['parseXMLFromString'](p7vub['data']) : p7vub['data'], s7z3xu['onLoaded'](p7vub), !sfk7z['isZiYu'] && sfk7z['isPosMsgYu'] && 'arraybuffer' != q8telw && wx['postMessage']({ 'url': te8qow, 'data': p7vub, 'isLoad': !0x0 }));
    }, $gj16(e_9lw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), e_9lw;
  }(),
      i1ry0 = (lwe98(gij, 'laya.wx.mini.MiniFileMgr', pvo3), gij['isLoadFile'] = function (pqtbo) {
    return -0x1 != gij['_fileTypeArr']['indexOf'](pqtbo);
  }, gij['getFileInfo'] = function (kzfdxs) {
    return kzfdxs = kzfdxs['split']('?')[0x0], kzfdxs = gij['filesListObj'][kzfdxs], null == kzfdxs ? null : kzfdxs;
  }, gij['onFileUpdate'] = function (g_6$jh, ow8qte) {
    var vpqto = g_6$jh['split']('/');g_6$jh = vpqto[vpqto['length'] - 0x1], vpqto = gij['getFileInfo'](ow8qte), null == vpqto ? gij['onSaveFile'](ow8qte, g_6$jh) : vpqto['readyUrl'] != ow8qte && gij['remove'](g_6$jh, ow8qte);
  }, gij['exits'] = function (qbpt, g6ij1) {
    qbpt = gij['getFileNativePath'](qbpt), gij['fs']['getFileInfo']({ 'filePath': qbpt, 'success': function (etqw8) {
        null != g6ij1 && g6ij1['runWith']([0x0, etqw8]);
      }, 'fail': function (ir$6j) {
        null != g6ij1 && g6ij1['runWith']([0x1, ir$6j]);
      } });
  }, gij['read'] = function (us37zx, t3obvp, eh_l89, dxfzsk) {
    void 0x0 === t3obvp && (t3obvp = 'ascill'), us37zx = '' != (dxfzsk = void 0x0 === dxfzsk ? '' : dxfzsk) ? gij['getFileNativePath'](us37zx) : us37zx, gij['fs']['readFile']({ 'filePath': us37zx, 'encoding': t3obvp, 'success': function (g$jhi6) {
        null != eh_l89 && eh_l89['runWith']([0x0, g$jhi6]);
      }, 'fail': function (oqv) {
        oqv && '' != dxfzsk ? gij['down'](dxfzsk, t3obvp, eh_l89, dxfzsk) : null != eh_l89 && eh_l89['runWith']([0x1]);
      } });
  }, gij['readNativeFile'] = function (zvbu37, uvb3z7) {
    gij['fs']['readFile']({ 'filePath': zvbu37, 'encoding': '', 'success': function (l_8h9g) {
        null != uvb3z7 && uvb3z7['runWith']([0x0]);
      }, 'fail': function (v73uzb) {
        null != uvb3z7 && uvb3z7['runWith']([0x1]);
      } });
  }, gij['down'] = function (xdfskz, vpu37b, y1irj, owptvq) {
    void 0x0 === vpu37b && (vpu37b = 'ascill'), void 0x0 === owptvq && (owptvq = '');var i1g$6j = gij['getFileNativePath'](owptvq);gij['wxdown']({ 'url': xdfskz, 'filePath': i1g$6j, 'success': function (eqpwto) {
        0xc8 === eqpwto['statusCode'] && gij['readFile'](eqpwto['filePath'], vpu37b, y1irj, owptvq);
      }, 'fail': function (r0yi1) {
        null != y1irj && y1irj['runWith']([0x1, r0yi1]);
      } })['onProgressUpdate'](function (towvpq) {
      null != y1irj && y1irj['runWith']([0x2, towvpq['progress']]);
    });
  }, gij['readFile'] = function (ya0r45, y0542a, zx3b7u, dxszf) {
    void 0x0 === dxszf && (dxszf = ''), gij['fs']['readFile']({ 'filePath': ya0r45, 'encoding': y0542a = void 0x0 === y0542a ? 'ascill' : y0542a, 'success': function (bv37p) {
        -0x1 == ya0r45['indexOf']('http://') && -0x1 == ya0r45['indexOf']('https://') || gij['onFileUpdate'](ya0r45, dxszf), null != zx3b7u && zx3b7u['runWith']([0x0, bv37p]);
      }, 'fail': function (h98_e) {
        h98_e && null != zx3b7u && zx3b7u['runWith']([0x1, h98_e]);
      } });
  }, gij['downImg'] = function (zskdfx, vpqotb, b3oupv) {
    void 0x0 === b3oupv && (b3oupv = ''), gij['wxdown']({ 'url': zskdfx, 'success': function (a524m) {
        0xc8 === a524m['statusCode'] && gij['copyFile'](a524m['tempFilePath'], b3oupv, vpqotb);
      }, 'fail': function (lwqe8) {
        null != vpqotb && vpqotb['runWith']([0x1, lwqe8]);
      } });
  }, gij['copyFile'] = function (e8hl9, tbovpq, g6$h9) {
    var _h98 = e8hl9['split']('/'),
        xbz7 = _h98[_h98['length'] - 0x1];tbovpq['split']('?')[0x0];var j1iry = gij['getFileInfo'](tbovpq);_h98 = gij['getFileNativePath'](xbz7), gij['fs']['copyFile']({ 'srcPath': e8hl9, 'destPath': _h98, 'success': function (a25y40) {
        j1iry ? j1iry['readyUrl'] != tbovpq && gij['remove'](xbz7, tbovpq, g6$h9) : (gij['onSaveFile'](tbovpq, xbz7), null != g6$h9 && g6$h9['runWith']([0x0]));
      }, 'fail': function (uvbp7) {
        null != g6$h9 && g6$h9['runWith']([0x1, uvbp7]);
      } });
  }, gij['getFileNativePath'] = function (g9h6_$) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g9h6_$;
  }, gij['remove'] = function (elw98q, w8qt, twq8oe) {
    void 0x0 === w8qt && (w8qt = '');var h$_j6 = gij['getFileInfo'](w8qt),
        weo8 = gij['getFileNativePath'](h$_j6['md5']);uzxb7['loader']['clearRes'](h$_j6['readyUrl']), gij['fs']['unlink']({ 'filePath': weo8, 'success': function (i1y0ar) {
        '' != w8qt && gij['onSaveFile'](w8qt, elw98q), null != twq8oe && twq8oe['runWith']([0x0]);
      }, 'fail': function (r0i1yj) {} });
  }, gij['onSaveFile'] = function (jr01iy, yr504) {
    var a5402 = jr01iy['split']('?')[0x0];gij['filesListObj'][a5402] = { 'md5': yr504, 'readyUrl': jr01iy }, gij['fs']['writeFile']({ 'filePath': gij['fileNativeDir'] + '/' + gij['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gij['filesListObj']), 'success': function (qtpwv) {
        console['log']('写入测试测试成功：', qtpwv);
      }, 'fail': function (sf7kz) {
        console['log']('写入测试测试失败：', sf7kz);
      } });
  }, gij['existDir'] = function (_he98l, a5c4m2) {
    gij['fs']['mkdir']({ 'dirPath': _he98l, 'success': function ($g6ih) {
        null != a5c4m2 && a5c4m2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (j6g$ih) {
        -0x1 != j6g$ih['errMsg']['indexOf']('file already exists') ? gij['readSync'](gij['fileListName'], 'utf8', a5c4m2) : null != a5c4m2 && a5c4m2['runWith']([0x1, j6g$ih]);
      } });
  }, gij['readSync'] = function (ovwpq, ovbqp, j6h$i, h6gi$) {
    void 0x0 === ovbqp && (ovbqp = 'ascill'), void 0x0 === h6gi$ && (h6gi$ = ''), ovwpq = gij['getFileNativePath'](ovwpq);var szfkx7;try {
      szfkx7 = gij['fs']['readFileSync'](ovwpq), null != j6h$i && j6h$i['runWith']([0x0, { 'data': szfkx7 }]);
    } catch (pewqo) {
      null != j6h$i && j6h$i['runWith']([0x1]);
    }
  }, gij['readCache'] = function () {}, gij['writeCache'] = function (v7zbu3) {
    var ubx3z7 = readyUrl['split']('?')[0x0];gij['filesListObj'][ubx3z7] = { 'md5': md5Name, 'readyUrl': readyUrl }, gij['fs']['writeFile']({ 'filePath': gij['fileNativeDir'] + '/' + gij['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gij['filesListObj']), 'success': function (ub37v) {}, 'fail': function (mc5a42) {} });
  }, gij['setNativeFileDir'] = function (a5042) {
    gij['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a5042;
  }, gij['filesListObj'] = {}, gij['fileNativeDir'] = null, gij['fileListName'] = 'layaairfiles.txt', gij['ziyuFileData'] = {}, $gj16(gij, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), gij);function gij() {
    gij['__super']['call'](this);
  }var tqeow = function () {
    function x7zsu3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, x7zsu3['__super']['call'](this), this['_sound'] = x7zsu3['_createSound']();
    }lwe98(x7zsu3, 'laya.wx.mini.MiniSound', pvo3);var yjir = x7zsu3['prototype'];return yjir['load'] = function ($96_) {
      var tqvpb = this,
          o3vtbp;function tvp3o() {
        if (null != x7zsu3['_null']) tqvpb['_sound']['onCanplay'](x7zsu3['_null']), tqvpb['_sound']['onError'](x7zsu3['_null']);else try {
          tqvpb['_sound']['onCanplay'](null), tqvpb['_sound']['onError'](null), x7zsu3['_null'] = null;
        } catch (pqtowv) {
          console['warn']('[wxmini] _clearSound:' + pqtowv), tqvpb['_sound']['onCanplay'](j61), tqvpb['_sound']['onError'](j61), x7zsu3['_null'] = j61;
        }
      }function j61() {}$96_ = t3bvp['formatURL']($96_), this['url'] = $96_, x7zsu3['_audioCache'][$96_] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        tvp3o(), o3vtbp['loaded'] = !0x0, o3vtbp['event']('complete'), x7zsu3['_audioCache'][o3vtbp['url']] = o3vtbp;
      }), this['_sound']['onError'](function (vwptq) {
        console['error']('errCode=' + vwptq['errCode'] + '  errMsg=' + vwptq['errMsg']), tvp3o(), o3vtbp['event']('error');
      }), this['_sound']['src'] = $96_, o3vtbp = this);
    }, yjir['play'] = function (_$jg6, q8wtl) {
      void 0x0 === _$jg6 && (_$jg6 = 0x0), void 0x0 === q8wtl && (q8wtl = 0x0), (jr0y1 = this['url'] == wq8el9['_tMusic'] ? (x7zsu3['_musicAudio'] || (x7zsu3['_musicAudio'] = x7zsu3['_createSound']()), x7zsu3['_musicAudio']) : x7zsu3['_createSound']())['src'] = this['url'];var jr0y1 = new u3vpob(jr0y1);return jr0y1['url'] = this['url'], jr0y1['loops'] = q8wtl, jr0y1['startTime'] = _$jg6, jr0y1['play'](), wq8el9['addChannel'](jr0y1), jr0y1;
    }, yjir['dispose'] = function () {
      var obpuv = x7zsu3['_audioCache'][this['url']];obpuv && (obpuv['src'] = '', delete x7zsu3['_audioCache'][this['url']]);
    }, r$ij6(0x0, yjir, 'duration', function () {
      return this['_sound']['duration'];
    }), x7zsu3['_createSound'] = function () {
      return x7zsu3['_id']++, sfk7z['window']['wx']['createInnerAudioContext']();
    }, x7zsu3['_musicAudio'] = null, x7zsu3['_id'] = 0x0, x7zsu3['_audioCache'] = {}, x7zsu3['_null'] = void 0x0, x7zsu3;
  }(),
      u3vpob = function () {
    function ub73pv(a24mc5) {
      this['_audio'] = null, this['_onEnd'] = null, ub73pv['__super']['call'](this), this['_audio'] = a24mc5, this['_onEnd'] = qeow8['bind'](this['__onEnd'], this), a24mc5['onEnded'](this['_onEnd']);
    }lwe98(ub73pv, 'laya.wx.mini.MiniSoundChannel', tbvqp);var zukxs = ub73pv['prototype'];return zukxs['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (uzxb7['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zukxs['__onNull'] = function () {}, zukxs['play'] = function () {
      this['isStopped'] = !0x1, wq8el9['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, zukxs['stop'] = function () {
      if (this['isStopped'] = !0x0, wq8el9['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != ub73pv['_null']) this['_audio']['onEnded'](ub73pv['_null']);else try {
          this['_audio']['onEnded'](null), ub73pv['_null'] = null;
        } catch (powqv) {
          console['warn']('[wxmini] stop:' + powqv), this['_audio']['onEnded'](qeow8['bind'](this['__onNull'], this)), ub73pv['_null'] = qeow8['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, zukxs['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, zukxs['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, wq8el9['addChannel'](this), this['_audio']['play']());
    }, r$ij6(0x0, zukxs, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), r$ij6(0x0, zukxs, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), r$ij6(0x0, zukxs, 'volume', function () {
      return 0x1;
    }, function (dkfzsx) {}), ub73pv['_null'] = void 0x0, ub73pv;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (vpub, yr1a0i) {
  'use strict';
  for (var qwe8tl in Object['defineProperty'](yr1a0i, '__esModule', { 'value': !0x0 }), Laya) {
    var c24a5 = Laya[qwe8tl];c24a5 && c24a5['__isclass'] && (yr1a0i[qwe8tl] = c24a5);
  }
});