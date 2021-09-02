var p = wx.$h;
!function (h91drtm, dhm9l1) {
  dhm9l1['un'], dhm9l1['uns'];var _y20nv7 = dhm9l1['static'],
      n82_ = dhm9l1['class'],
      af6wi8 = dhm9l1['getset'];dhm9l1['__newvec'];var o31th = laya['utils']['Browser'],
      xkbs = (laya['events']['Event'], laya['events']['EventDispatcher']),
      g3zej = laya['resource']['HTMLImage'],
      v78cf2 = laya['utils']['Handler'],
      n2_m0yr = laya['display']['Input'],
      n8cv2 = laya['net']['Loader'];laya['maths']['Matrix'];var vy7n8c = laya['renders']['Render'],
      _ynr0 = laya['utils']['RunDriver'];laya['media']['Sound'];var vwn7f = laya['media']['SoundChannel'],
      thd91rm = laya['media']['SoundManager'],
      $kz5pxb = (laya['display']['Stage'], laya['net']['URL']),
      g5xejz = laya['utils']['Utils'],
      faq6 = (n82_(wcifa64, 'laya.wx.mini.MiniAdpter'), wcifa64['getJson'] = function (sgbz) {
    return JSON['parse'](sgbz);
  }, wcifa64['init'] = function (_02yn7v, tmd19hr) {
    void 0x0 === _02yn7v && (_02yn7v = !0x1), void 0x0 === tmd19hr && (tmd19hr = !0x1), wcifa64['_inited'] || (wcifa64['window'] = h91drtm)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (wcifa64['_inited'] = !0x0, wcifa64['isZiYu'] = tmd19hr, wcifa64['isPosMsgYu'] = _02yn7v, wcifa64['EnvConfig'] = {}, wcifa64['isZiYu'] || (sogz['setNativeFileDir']('/layaairGame'), sogz['existDir'](sogz['fileNativeDir'], v78cf2['create'](wcifa64, wcifa64['onMkdirCallBack']))), wcifa64['window']['focus'] = function () {}, dhm9l1['getUrlPath'] = function () {}, wcifa64['window']['logtime'] = function (lhot1e) {}, wcifa64['window']['alertTimeLog'] = function (i6f4qa) {}, wcifa64['window']['resetShareInfo'] = function () {}, wcifa64['window']['CanvasRenderingContext2D'] = function () {}, wcifa64['window']['CanvasRenderingContext2D']['prototype'] = wcifa64['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wcifa64['window']['document']['body']['appendChild'] = function () {}, wcifa64['EnvConfig']['pixelRatioInt'] = 0x0, _ynr0['getPixelRatio'] = wcifa64['pixelRatio'], wcifa64['_preCreateElement'] = o31th['createElement'], o31th['createElement'] = wcifa64['createElement'], _ynr0['createShaderCondition'] = wcifa64['createShaderCondition'], g5xejz['parseXMLFromString'] = wcifa64['parseXMLFromString'], n2_m0yr['_createInputElement'] = l3e1toj['_createInputElement'], wcifa64['EnvConfig']['load'] = n8cv2['prototype']['load'], n8cv2['prototype']['load'] = dym20r_['prototype']['load'], wcifa64['isZiYu'] && _02yn7v && wx['onMessage'](function (eh3tol1) {
      eh3tol1['isLoad'] && (sogz['ziyuFileData'][eh3tol1['url']] = eh3tol1['data']);
    }));
  }, wcifa64['onMkdirCallBack'] = function (tr19m, lto1he) {
    tr19m || (sogz['filesListObj'] = JSON['parse'](lto1he['data']));
  }, wcifa64['pixelRatio'] = function () {
    if (!wcifa64['EnvConfig']['pixelRatioInt']) try {
      var dry0m2_ = wx['getSystemInfoSync']();return wcifa64['EnvConfig']['pixelRatioInt'] = dry0m2_['pixelRatio'], dry0m2_['pixelRatio'];
    } catch (jeg5s3z) {}return wcifa64['EnvConfig']['pixelRatioInt'];
  }, wcifa64['createElement'] = function (kszg5b) {
    var afcw6i4;if ('canvas' == kszg5b) return 0x1 == wcifa64['idx'] ? wcifa64['isZiYu'] ? (afcw6i4 = sharedCanvas)['style'] = {} : afcw6i4 = h91drtm['canvas'] : afcw6i4 = h91drtm['wx']['createCanvas'](), wcifa64['idx']++, afcw6i4;if ('textarea' == kszg5b || 'input' == kszg5b) return wcifa64['onCreateInput'](kszg5b);if ('div' != kszg5b) return wcifa64['_preCreateElement'](kszg5b);return kszg5b = wcifa64['_preCreateElement'](kszg5b), (kszg5b['contains'] = function (sg3zjeo) {
      return null;
    }, kszg5b['removeChild'] = function (a6c7w) {}, kszg5b);
  }, wcifa64['onCreateInput'] = function (nw7v8f) {
    return nw7v8f = wcifa64['_preCreateElement'](nw7v8f), (nw7v8f['focus'] = l3e1toj['wxinputFocus'], nw7v8f['blur'] = l3e1toj['wxinputblur'], nw7v8f['style'] = {}, nw7v8f['value'] = 0x0, nw7v8f['parentElement'] = {}, nw7v8f['placeholder'] = {}, nw7v8f['type'] = {}, nw7v8f['setColor'] = function (jzgsxe5) {}, nw7v8f['setType'] = function (leo31th) {}, nw7v8f['setFontFace'] = function (x$pz5) {}, nw7v8f['addEventListener'] = function (_rm20y) {}, nw7v8f['contains'] = function (ejtl3o) {
      return null;
    }, nw7v8f['removeChild'] = function (jsegzx) {}, nw7v8f);
  }, wcifa64['createShaderCondition'] = function (sz3j) {
    var zgj3ose = this;return function () {
      return zgj3ose[sz3j['replace']('this.', '')];
    };
  }, wcifa64['EnvConfig'] = null, wcifa64['window'] = null, wcifa64['_preCreateElement'] = null, wcifa64['_inited'] = !0x1, wcifa64['wxRequest'] = null, wcifa64['systemInfo'] = null, wcifa64['version'] = '0.0.1', wcifa64['isZiYu'] = !0x1, wcifa64['isPosMsgYu'] = !0x1, wcifa64['parseXMLFromString'] = function (e3sto) {
    var f6i4qa;e3sto = e3sto['replace'](/>\s+</g, '><');try {
      f6i4qa = new h91drtm['Parser']['DOMParser']()['parseFromString'](e3sto, 'text/xml');
    } catch (c6i8w) {
      throw '需要引入xml解析库文件';
    }return f6i4qa;
  }, wcifa64['idx'] = 0x1, wcifa64);function wcifa64() {}n82_(egoj3z, 'laya.wx.mini.MiniImage'), egoj3z['prototype']['_loadImage'] = function (zg5xejs) {
    var v_yr20n = !0x1;-0x1 == zg5xejs['indexOf']('layaNativeDir/') && (v_yr20n = !0x0, zg5xejs = $kz5pxb['formatURL'](zg5xejs)), sogz['getFileInfo'](zg5xejs) ? egoj3z['onCreateImage'](zg5xejs, this, !v_yr20n) : -0x1 != zg5xejs['indexOf']('http://') || -0x1 != zg5xejs['indexOf']('https://') ? sogz['downImg'](zg5xejs, new v78cf2(egoj3z, egoj3z['onDownImgCallBack'], [zg5xejs, this]), zg5xejs) : egoj3z['onCreateImage'](zg5xejs, this, !0x0);
  }, egoj3z['onDownImgCallBack'] = function (yr2v0n, zsejo, l1hmd9t) {
    l1hmd9t ? zsejo['onError'](null) : egoj3z['onCreateImage'](yr2v0n, zsejo);
  }, egoj3z['onCreateImage'] = function (ljtoe31, _ymd02, ot1l9dh) {
    var xbzk5p, l9to13h;function jxszb5g() {
      l9to13h['onload'] = null, l9to13h['onerror'] = null, delete _ymd02['imgCache'][ljtoe31];
    }xbzk5p = (ot1l9dh = void 0x0 === ot1l9dh ? !0x1 : ot1l9dh) ? ljtoe31 : (fwc64ia = sogz['getFileInfo'](ljtoe31)['md5'], sogz['getFileNativePath'](fwc64ia)), null == _ymd02['imgCache'] && (_ymd02['imgCache'] = {}), ot1l9dh = function () {
      jxszb5g(), _ymd02['onLoaded'](l9to13h);
    };var fwc64ia = function () {
      jxszb5g(), _ymd02['event']('error', 'Load image failed');
    };'nativeimage' == _ymd02['_type'] ? ((l9to13h = new o31th['window']['Image']())['crossOrigin'] = '', l9to13h['onload'] = ot1l9dh, l9to13h['onerror'] = fwc64ia, l9to13h['src'] = xbzk5p, _ymd02['imgCache'][ljtoe31] = l9to13h) : new g3zej['create'](xbzk5p, { 'onload': ot1l9dh, 'onerror': fwc64ia, 'onCreate': function (ljs3oet) {
        l9to13h = ljs3oet, _ymd02['imgCache'][ljtoe31] = ljs3oet;
      } });
  };function egoj3z() {}var l3e1toj = (n82_(b5xp$kz, 'laya.wx.mini.MiniInput'), b5xp$kz['_createInputElement'] = function () {
    n2_m0yr['_initInput'](n2_m0yr['area'] = o31th['createElement']('textarea')), n2_m0yr['_initInput'](n2_m0yr['input'] = o31th['createElement']('input')), n2_m0yr['inputContainer'] = o31th['createElement']('div'), n2_m0yr['inputContainer']['style']['position'] = 'absolute', n2_m0yr['inputContainer']['style']['zIndex'] = 0x186a0, o31th['container']['appendChild'](n2_m0yr['inputContainer']), n2_m0yr['inputContainer']['setPos'] = function (q64iawf, wfa46i) {
      n2_m0yr['inputContainer']['style']['left'] = q64iawf + 'px', n2_m0yr['inputContainer']['style']['top'] = wfa46i + 'px';
    }, dhm9l1['stage']['on']('resize', null, b5xp$kz['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (c2n8y7) {
      h91drtm['dispatchEvent'] && h91drtm['dispatchEvent']('resize');
    }), thd91rm['_soundClass'] = c2vy8, thd91rm['_musicClass'] = c2vy8;
  }, b5xp$kz['_onStageResize'] = function () {
    dhm9l1['stage']['_canvasTransform']['identity']()['scale'](o31th['width'] / vy7n8c['canvas']['width'] / _ynr0['getPixelRatio'](), o31th['height'] / vy7n8c['canvas']['height'] / _ynr0['getPixelRatio']());
  }, b5xp$kz['wxinputFocus'] = function (zjgx) {
    var dmht1l9 = n2_m0yr['inputElement']['target'];dmht1l9 && !dmht1l9['editable'] || (faq6['window']['wx']['offKeyboardConfirm'](), faq6['window']['wx']['offKeyboardInput'](), faq6['window']['wx']['showKeyboard']({ 'defaultValue': dmht1l9['text'], 'maxLength': dmht1l9['maxChars'], 'multiple': dmht1l9['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (gloej3s) {}, 'fail': function (r0vn2y_) {} }), faq6['window']['wx']['onKeyboardConfirm'](function (t1doh9l) {
      t1doh9l = t1doh9l ? t1doh9l['value'] : '', (dmht1l9['text'] = t1doh9l, dmht1l9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), faq6['window']['wx']['onKeyboardInput'](function (dy02_) {
      dy02_ = dy02_ ? dy02_['value'] : '', dmht1l9['multiline'] || -0x1 == dy02_['indexOf']('\x0a') ? (dmht1l9['text'] = dy02_, dmht1l9['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, b5xp$kz['inputEnter'] = function () {
    n2_m0yr['inputElement']['target']['focus'] = !0x1;
  }, b5xp$kz['wxinputblur'] = function () {
    b5xp$kz['hideKeyboard']();
  }, b5xp$kz['hideKeyboard'] = function () {
    faq6['window']['wx']['offKeyboardConfirm'](), faq6['window']['wx']['offKeyboardInput'](), faq6['window']['wx']['hideKeyboard']({ 'success': function (vfw8c67) {
        console['log']('隐藏键盘');
      }, 'fail': function (y_2nm) {
        console['log']('隐藏键盘出错:' + (y_2nm ? y_2nm['errMsg'] : ''));
      } });
  }, b5xp$kz);function b5xp$kz() {}var dym20r_ = function () {
    function t91hodl() {}n82_(t91hodl, 'laya.wx.mini.MiniLoader');var icwa4f = t91hodl['prototype'];return icwa4f['load'] = function (fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r) {
      void 0x0 === skxb5g && (skxb5g = !0x0), void 0x0 === mtd1r && (mtd1r = !0x1);var y82n_v7 = this;0x0 === (y82n_v7['_url'] = fn782cv)['indexOf']('data:image') ? y82n_v7['_type'] = ac68w7f = 'image' : y82n_v7['_type'] = ac68w7f = ac68w7f || y82n_v7['getTypeFromUrl'](fn782cv), y82n_v7['_cache'] = skxb5g, y82n_v7['_data'] = null;var cwvfn78 = 'ascii';-0x1 != fn782cv['indexOf']('.fnt') ? cwvfn78 = 'utf8' : 'arraybuffer' == ac68w7f && (cwvfn78 = '');var i4fw6q = g5xejz['getFileExtension'](fn782cv);if (-0x1 != t91hodl['_fileTypeArr']['indexOf'](i4fw6q)) faq6['EnvConfig']['load']['call'](this, fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r);else {
        if (sogz['getFileInfo'](fn782cv)) faq6['EnvConfig']['load']['call'](this, fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r);else {
          if (-0x1 != fn782cv['indexOf']('layaNativeDir/')) {
            if (faq6['isZiYu']) {
              var kxsg5z = sogz['ziyuFileData'][fn782cv];return void y82n_v7['onLoaded'](kxsg5z);
            }return cosnole['log']('read read'), void sogz['read'](fn782cv, cwvfn78, new v78cf2(t91hodl, t91hodl['onReadNativeCallBack'], [cwvfn78, fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r, y82n_v7]));
          }kxsg5z = '' == $kz5pxb['rootPath'] ? fn782cv : fn782cv['split']($kz5pxb['rootPath'])[0x0], -0x1 != fn782cv['indexOf']('http://') || -0x1 != fn782cv['indexOf']('https://') ? faq6['EnvConfig']['load']['call'](y82n_v7, fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r) : sogz['readFile'](kxsg5z, cwvfn78, new v78cf2(t91hodl, t91hodl['onReadNativeCallBack'], [cwvfn78, fn782cv, ac68w7f, skxb5g, o9dhtl, mtd1r, y82n_v7]), fn782cv);
        }
      }
    }, icwa4f['resMgrLoad'] = function (go3jsle, egxsjz5, z5kx$p, xjgbsz5, lt913oh, _n8yv7, w4ci) {
      void 0x0 === z5kx$p && (z5kx$p = 0x0), void 0x0 === xjgbsz5 && (xjgbsz5 = !0x1), void 0x0 === lt913oh && (lt913oh = !0x1), void 0x0 === _n8yv7 && (_n8yv7 = 0x0), void 0x0 === w4ci && (w4ci = 0x3), -0x1 != go3jsle['indexOf']('mpack') && console['log']('=============resMgrLoad url:', go3jsle), faq6['EnvConfig']['resMgrLoad'](go3jsle, (rvny2_, cf6i8wa, y0mr_d9) => {
        t91hodl['prototype']['resMgrLoadCallBack'](rvny2_, cf6i8wa, y0mr_d9, egxsjz5);
      }, z5kx$p, xjgbsz5, lt913oh, _n8yv7, w4ci);
    }, icwa4f['resMgrLoadCallBack'] = function (yv0_rn2, l3eojgs, b5$xzpk, afw678) {
      console['log']('buff:::', yv0_rn2, b5$xzpk, sogz['fileNativeDir'] + '///' + sogz['fileListName']), afw678(yv0_rn2, l3eojgs, b5$xzpk);
    }, icwa4f['clearRes'] = function (fw8c6ai, dh0r) {
      this['clearRes'](fw8c6ai, dh0r = void 0x0 === dh0r ? !0x1 : dh0r), dh0r = sogz['getFileInfo'](fw8c6ai), !dh0r || -0x1 == fw8c6ai['indexOf']('http://') && -0x1 == fw8c6ai['indexOf']('https://') || (dh0r = dh0r['md5'], dh0r = sogz['getFileNativePath'](dh0r), sogz['remove'](dh0r));
    }, t91hodl['onReadNativeCallBack'] = function (sjlet3o, j3tl1, y0rvn, k5p$zxb, ejls3to, nw7fc, i8a6w, mry09d, j3etl1) {
      void 0x0 === k5p$zxb && (k5p$zxb = !0x0), void 0x0 === nw7fc && (nw7fc = !0x1), (mry09d = void 0x0 === mry09d ? 0x0 : mry09d) ? 0x1 == mry09d && faq6['EnvConfig']['load']['call'](i8a6w, j3tl1, y0rvn, k5p$zxb, ejls3to, nw7fc) : (j3etl1 = 'json' == y0rvn || 'atlas' == y0rvn ? faq6['getJson'](j3etl1['data']) : 'xml' == y0rvn ? g5xejz['parseXMLFromString'](j3etl1['data']) : j3etl1['data'], i8a6w['onLoaded'](j3etl1), !faq6['isZiYu'] && faq6['isPosMsgYu'] && 'arraybuffer' != y0rvn && wx['postMessage']({ 'url': j3tl1, 'data': j3etl1, 'isLoad': !0x0 }));
    }, _y20nv7(t91hodl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), t91hodl;
  }(),
      sogz = (n82_(t1ohd, 'laya.wx.mini.MiniFileMgr', xkbs), t1ohd['isLoadFile'] = function (lot1d9) {
    return -0x1 != t1ohd['_fileTypeArr']['indexOf'](lot1d9);
  }, t1ohd['getFileInfo'] = function (rmh_d) {
    return rmh_d = rmh_d['split']('?')[0x0], rmh_d = t1ohd['filesListObj'][rmh_d], null == rmh_d ? null : rmh_d;
  }, t1ohd['onFileUpdate'] = function (h1mdtl9, x$k5pz) {
    var nv_y0r = h1mdtl9['split']('/');h1mdtl9 = nv_y0r[nv_y0r['length'] - 0x1], nv_y0r = t1ohd['getFileInfo'](x$k5pz), null == nv_y0r ? t1ohd['onSaveFile'](x$k5pz, h1mdtl9) : nv_y0r['readyUrl'] != x$k5pz && t1ohd['remove'](h1mdtl9, x$k5pz);
  }, t1ohd['exits'] = function (wvc68, _0d9mry) {
    wvc68 = t1ohd['getFileNativePath'](wvc68), t1ohd['fs']['getFileInfo']({ 'filePath': wvc68, 'success': function (geo3jsl) {
        null != _0d9mry && _0d9mry['runWith']([0x0, geo3jsl]);
      }, 'fail': function (dt1hmr9) {
        null != _0d9mry && _0d9mry['runWith']([0x1, dt1hmr9]);
      } });
  }, t1ohd['read'] = function (fq6w4, zgp5kxb, vyc2n8, v72yc8) {
    void 0x0 === zgp5kxb && (zgp5kxb = 'ascill'), fq6w4 = '' != (v72yc8 = void 0x0 === v72yc8 ? '' : v72yc8) ? t1ohd['getFileNativePath'](fq6w4) : fq6w4, t1ohd['fs']['readFile']({ 'filePath': fq6w4, 'encoding': zgp5kxb, 'success': function (d10m9rh) {
        null != vyc2n8 && vyc2n8['runWith']([0x0, d10m9rh]);
      }, 'fail': function (so3eljg) {
        so3eljg && '' != v72yc8 ? t1ohd['down'](v72yc8, zgp5kxb, vyc2n8, v72yc8) : null != vyc2n8 && vyc2n8['runWith']([0x1]);
      } });
  }, t1ohd['readNativeFile'] = function (leh3to, setjo3l) {
    t1ohd['fs']['readFile']({ 'filePath': leh3to, 'encoding': '', 'success': function (wfaiq6) {
        null != setjo3l && setjo3l['runWith']([0x0]);
      }, 'fail': function (d_2my0r) {
        null != setjo3l && setjo3l['runWith']([0x1]);
      } });
  }, t1ohd['down'] = function (_0y7v2, sgxk5z, d1r9m, ojz3esg) {
    void 0x0 === sgxk5z && (sgxk5z = 'ascill'), void 0x0 === ojz3esg && (ojz3esg = '');var js3g5ze = t1ohd['getFileNativePath'](ojz3esg);t1ohd['wxdown']({ 'url': _0y7v2, 'filePath': js3g5ze, 'success': function (je3lst) {
        0xc8 === je3lst['statusCode'] && t1ohd['readFile'](je3lst['filePath'], sgxk5z, d1r9m, ojz3esg);
      }, 'fail': function (y87_2v) {
        null != d1r9m && d1r9m['runWith']([0x1, y87_2v]);
      } })['onProgressUpdate'](function (te1h3o) {
      null != d1r9m && d1r9m['runWith']([0x2, te1h3o['progress']]);
    });
  }, t1ohd['readFile'] = function (k5$zx, el1o, n8_yv7, d9tm1hl) {
    void 0x0 === d9tm1hl && (d9tm1hl = ''), t1ohd['fs']['readFile']({ 'filePath': k5$zx, 'encoding': el1o = void 0x0 === el1o ? 'ascill' : el1o, 'success': function (r2my0d_) {
        -0x1 == k5$zx['indexOf']('http://') && -0x1 == k5$zx['indexOf']('https://') || t1ohd['onFileUpdate'](k5$zx, d9tm1hl), null != n8_yv7 && n8_yv7['runWith']([0x0, r2my0d_]);
      }, 'fail': function (hoe) {
        hoe && null != n8_yv7 && n8_yv7['runWith']([0x1, hoe]);
      } });
  }, t1ohd['downImg'] = function (y_r0v2n, wca786, zkgxbs) {
    void 0x0 === zkgxbs && (zkgxbs = ''), t1ohd['wxdown']({ 'url': y_r0v2n, 'success': function (w7fc86a) {
        0xc8 === w7fc86a['statusCode'] && t1ohd['copyFile'](w7fc86a['tempFilePath'], zkgxbs, wca786);
      }, 'fail': function (g5xzkbp) {
        null != wca786 && wca786['runWith']([0x1, g5xzkbp]);
      } });
  }, t1ohd['copyFile'] = function (fv7c68, fc86iaw, rn2_) {
    var lth3o9 = fv7c68['split']('/'),
        thlo93 = lth3o9[lth3o9['length'] - 0x1];fc86iaw['split']('?')[0x0];var v_27ny = t1ohd['getFileInfo'](fc86iaw);lth3o9 = t1ohd['getFileNativePath'](thlo93), t1ohd['fs']['copyFile']({ 'srcPath': fv7c68, 'destPath': lth3o9, 'success': function (iafwq) {
        v_27ny ? v_27ny['readyUrl'] != fc86iaw && t1ohd['remove'](thlo93, fc86iaw, rn2_) : (t1ohd['onSaveFile'](fc86iaw, thlo93), null != rn2_ && rn2_['runWith']([0x0]));
      }, 'fail': function (wv7c6f) {
        null != rn2_ && rn2_['runWith']([0x1, wv7c6f]);
      } });
  }, t1ohd['getFileNativePath'] = function (xkbg5p) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xkbg5p;
  }, t1ohd['remove'] = function (cf4w6ia, zogsj3e, rh1mtd9) {
    void 0x0 === zogsj3e && (zogsj3e = '');var m9tr1d = t1ohd['getFileInfo'](zogsj3e),
        zj5e3s = t1ohd['getFileNativePath'](m9tr1d['md5']);dhm9l1['loader']['clearRes'](m9tr1d['readyUrl']), t1ohd['fs']['unlink']({ 'filePath': zj5e3s, 'success': function (j3gs5) {
        '' != zogsj3e && t1ohd['onSaveFile'](zogsj3e, cf4w6ia), null != rh1mtd9 && rh1mtd9['runWith']([0x0]);
      }, 'fail': function (gsje5z) {} });
  }, t1ohd['onSaveFile'] = function (hr9dt1m, zejg) {
    var lestjo3 = hr9dt1m['split']('?')[0x0];t1ohd['filesListObj'][lestjo3] = { 'md5': zejg, 'readyUrl': hr9dt1m }, t1ohd['fs']['writeFile']({ 'filePath': t1ohd['fileNativeDir'] + '/' + t1ohd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t1ohd['filesListObj']), 'success': function (_027vy) {
        console['log']('写入测试测试成功：', _027vy);
      }, 'fail': function (l1oth39) {
        console['log']('写入测试测试失败：', l1oth39);
      } });
  }, t1ohd['existDir'] = function (lgoj3se, jsloge3) {
    t1ohd['fs']['mkdir']({ 'dirPath': lgoj3se, 'success': function (hml9t) {
        null != jsloge3 && jsloge3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (jzs35ge) {
        -0x1 != jzs35ge['errMsg']['indexOf']('file already exists') ? t1ohd['readSync'](t1ohd['fileListName'], 'utf8', jsloge3) : null != jsloge3 && jsloge3['runWith']([0x1, jzs35ge]);
      } });
  }, t1ohd['readSync'] = function (c67wa8f, z5kgxb, b5zgxsj, r_y02n) {
    void 0x0 === z5kgxb && (z5kgxb = 'ascill'), void 0x0 === r_y02n && (r_y02n = ''), c67wa8f = t1ohd['getFileNativePath'](c67wa8f);var vw6f8c7;try {
      vw6f8c7 = t1ohd['fs']['readFileSync'](c67wa8f), null != b5zgxsj && b5zgxsj['runWith']([0x0, { 'data': vw6f8c7 }]);
    } catch (vfwc87n) {
      null != b5zgxsj && b5zgxsj['runWith']([0x1]);
    }
  }, t1ohd['readCache'] = function () {}, t1ohd['writeCache'] = function (zs5xgkb) {
    var qafw6i = readyUrl['split']('?')[0x0];t1ohd['filesListObj'][qafw6i] = { 'md5': md5Name, 'readyUrl': readyUrl }, t1ohd['fs']['writeFile']({ 'filePath': t1ohd['fileNativeDir'] + '/' + t1ohd['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](t1ohd['filesListObj']), 'success': function (aiwf) {}, 'fail': function (cn72vf8) {} });
  }, t1ohd['setNativeFileDir'] = function (t91hld) {
    t1ohd['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + t91hld;
  }, t1ohd['filesListObj'] = {}, t1ohd['fileNativeDir'] = null, t1ohd['fileListName'] = 'layaairfiles.txt', t1ohd['ziyuFileData'] = {}, _y20nv7(t1ohd, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), t1ohd);function t1ohd() {
    t1ohd['__super']['call'](this);
  }var c2vy8 = function () {
    function w6fa7() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, w6fa7['__super']['call'](this), this['_sound'] = w6fa7['_createSound']();
    }n82_(w6fa7, 'laya.wx.mini.MiniSound', xkbs);var lot13eh = w6fa7['prototype'];return lot13eh['load'] = function (e3gjz) {
      var c64wfia = this,
          _0rmn2;function sjg5ex() {
        if (null != w6fa7['_null']) c64wfia['_sound']['onCanplay'](w6fa7['_null']), c64wfia['_sound']['onError'](w6fa7['_null']);else try {
          c64wfia['_sound']['onCanplay'](null), c64wfia['_sound']['onError'](null), w6fa7['_null'] = null;
        } catch (md_h9r0) {
          console['warn']('[wxmini] _clearSound:' + md_h9r0), c64wfia['_sound']['onCanplay'](te3j1ol), c64wfia['_sound']['onError'](te3j1ol), w6fa7['_null'] = te3j1ol;
        }
      }function te3j1ol() {}e3gjz = $kz5pxb['formatURL'](e3gjz), this['url'] = e3gjz, w6fa7['_audioCache'][e3gjz] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        sjg5ex(), _0rmn2['loaded'] = !0x0, _0rmn2['event']('complete'), w6fa7['_audioCache'][_0rmn2['url']] = _0rmn2;
      }), this['_sound']['onError'](function (dmth9r1) {
        console['error']('errCode=' + dmth9r1['errCode'] + '  errMsg=' + dmth9r1['errMsg']), sjg5ex(), _0rmn2['event']('error');
      }), this['_sound']['src'] = e3gjz, _0rmn2 = this);
    }, lot13eh['play'] = function (lejgo3s, doht9l) {
      void 0x0 === lejgo3s && (lejgo3s = 0x0), void 0x0 === doht9l && (doht9l = 0x0), (yv8_27 = this['url'] == thd91rm['_tMusic'] ? (w6fa7['_musicAudio'] || (w6fa7['_musicAudio'] = w6fa7['_createSound']()), w6fa7['_musicAudio']) : w6fa7['_createSound']())['src'] = this['url'];var yv8_27 = new xpz5b$k(yv8_27);return yv8_27['url'] = this['url'], yv8_27['loops'] = doht9l, yv8_27['startTime'] = lejgo3s, yv8_27['play'](), thd91rm['addChannel'](yv8_27), yv8_27;
    }, lot13eh['dispose'] = function () {
      var je31tol = w6fa7['_audioCache'][this['url']];je31tol && (je31tol['src'] = '', delete w6fa7['_audioCache'][this['url']]);
    }, af6wi8(0x0, lot13eh, 'duration', function () {
      return this['_sound']['duration'];
    }), w6fa7['_createSound'] = function () {
      return w6fa7['_id']++, faq6['window']['wx']['createInnerAudioContext']();
    }, w6fa7['_musicAudio'] = null, w6fa7['_id'] = 0x0, w6fa7['_audioCache'] = {}, w6fa7['_null'] = void 0x0, w6fa7;
  }(),
      xpz5b$k = function () {
    function ls3ojge(e5gzsj) {
      this['_audio'] = null, this['_onEnd'] = null, ls3ojge['__super']['call'](this), this['_audio'] = e5gzsj, this['_onEnd'] = g5xejz['bind'](this['__onEnd'], this), e5gzsj['onEnded'](this['_onEnd']);
    }n82_(ls3ojge, 'laya.wx.mini.MiniSoundChannel', vwn7f);var r_02nym = ls3ojge['prototype'];return r_02nym['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (dhm9l1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r_02nym['__onNull'] = function () {}, r_02nym['play'] = function () {
      this['isStopped'] = !0x1, thd91rm['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, r_02nym['stop'] = function () {
      if (this['isStopped'] = !0x0, thd91rm['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != ls3ojge['_null']) this['_audio']['onEnded'](ls3ojge['_null']);else try {
          this['_audio']['onEnded'](null), ls3ojge['_null'] = null;
        } catch (sel3jo) {
          console['warn']('[wxmini] stop:' + sel3jo), this['_audio']['onEnded'](g5xejz['bind'](this['__onNull'], this)), ls3ojge['_null'] = g5xejz['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, r_02nym['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, r_02nym['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, thd91rm['addChannel'](this), this['_audio']['play']());
    }, af6wi8(0x0, r_02nym, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), af6wi8(0x0, r_02nym, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), af6wi8(0x0, r_02nym, 'volume', function () {
      return 0x1;
    }, function (i6awfc4) {}), ls3ojge['_null'] = void 0x0, ls3ojge;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (n0vr_y, w46fai) {
  'use strict';

  for (var v2n07 in Object['defineProperty'](w46fai, '__esModule', { 'value': !0x0 }), Laya) {
    var ncw78 = Laya[v2n07];ncw78 && ncw78['__isclass'] && (w46fai[v2n07] = ncw78);
  }
});