var A = wx.$N;
!function (cndzxs, ryf) {
  ryf['un'], ryf['uns'];var p075q = ryf['static'],
      qi9yp = ryf['class'],
      nsdczx = ryf['getset'];ryf['__newvec'];var qp09j5 = laya['utils']['Browser'],
      k$mh_ = (laya['events']['Event'], laya['events']['EventDispatcher']),
      ab6tw2 = laya['resource']['HTMLImage'],
      irvf = laya['utils']['Handler'],
      pi9yjq = laya['display']['Input'],
      xdkl = laya['net']['Loader'];laya['maths']['Matrix'];var nzdcs = laya['renders']['Render'],
      zxndlm = laya['utils']['RunDriver'];laya['media']['Sound'];var ea3or8 = laya['media']['SoundChannel'],
      $_mh4k = laya['media']['SoundManager'],
      oae3 = (laya['display']['Stage'], laya['net']['URL']),
      hk4u = laya['utils']['Utils'],
      gyrv = (qi9yp(l$mk_h, 'laya.wx.mini.MiniAdpter'), l$mk_h['getJson'] = function (vg8f3) {
    return JSON['parse'](vg8f3);
  }, l$mk_h['init'] = function (kxhlm_, c9p507) {
    void 0x0 === kxhlm_ && (kxhlm_ = !0x1), void 0x0 === c9p507 && (c9p507 = !0x1), l$mk_h['_inited'] || (l$mk_h['window'] = cndzxs)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (l$mk_h['_inited'] = !0x0, l$mk_h['isZiYu'] = c9p507, l$mk_h['isPosMsgYu'] = kxhlm_, l$mk_h['EnvConfig'] = {}, l$mk_h['isZiYu'] || (pqyi9j['setNativeFileDir']('/layaairGame'), pqyi9j['existDir'](pqyi9j['fileNativeDir'], irvf['create'](l$mk_h, l$mk_h['onMkdirCallBack']))), l$mk_h['window']['focus'] = function () {}, ryf['getUrlPath'] = function () {}, l$mk_h['window']['logtime'] = function (grfiyv) {}, l$mk_h['window']['alertTimeLog'] = function (nc570s) {}, l$mk_h['window']['resetShareInfo'] = function () {}, l$mk_h['window']['CanvasRenderingContext2D'] = function () {}, l$mk_h['window']['CanvasRenderingContext2D']['prototype'] = l$mk_h['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l$mk_h['window']['document']['body']['appendChild'] = function () {}, l$mk_h['EnvConfig']['pixelRatioInt'] = 0x0, zxndlm['getPixelRatio'] = l$mk_h['pixelRatio'], l$mk_h['_preCreateElement'] = qp09j5['createElement'], qp09j5['createElement'] = l$mk_h['createElement'], zxndlm['createShaderCondition'] = l$mk_h['createShaderCondition'], hk4u['parseXMLFromString'] = l$mk_h['parseXMLFromString'], pi9yjq['_createInputElement'] = y9pijq['_createInputElement'], l$mk_h['EnvConfig']['load'] = xdkl['prototype']['load'], xdkl['prototype']['load'] = pq905j['prototype']['load'], l$mk_h['isZiYu'] && kxhlm_ && wx['onMessage'](function (jify) {
      jify['isLoad'] && (pqyi9j['ziyuFileData'][jify['url']] = jify['data']);
    }));
  }, l$mk_h['onMkdirCallBack'] = function (o3, fyirv) {
    o3 || (pqyi9j['filesListObj'] = JSON['parse'](fyirv['data']));
  }, l$mk_h['pixelRatio'] = function () {
    if (!l$mk_h['EnvConfig']['pixelRatioInt']) try {
      var a6wtb2 = wx['getSystemInfoSync']();return l$mk_h['EnvConfig']['pixelRatioInt'] = a6wtb2['pixelRatio'], a6wtb2['pixelRatio'];
    } catch (_k$) {}return l$mk_h['EnvConfig']['pixelRatioInt'];
  }, l$mk_h['createElement'] = function (v3ryg) {
    var xdczsn;if ('canvas' == v3ryg) return 0x1 == l$mk_h['idx'] ? l$mk_h['isZiYu'] ? (xdczsn = sharedCanvas)['style'] = {} : xdczsn = cndzxs['canvas'] : xdczsn = cndzxs['wx']['createCanvas'](), l$mk_h['idx']++, xdczsn;if ('textarea' == v3ryg || 'input' == v3ryg) return l$mk_h['onCreateInput'](v3ryg);if ('div' != v3ryg) return l$mk_h['_preCreateElement'](v3ryg);return v3ryg = l$mk_h['_preCreateElement'](v3ryg), (v3ryg['contains'] = function (ns75z) {
      return null;
    }, v3ryg['removeChild'] = function (hlk) {}, v3ryg);
  }, l$mk_h['onCreateInput'] = function (v3gf8r) {
    return v3gf8r = l$mk_h['_preCreateElement'](v3gf8r), (v3gf8r['focus'] = y9pijq['wxinputFocus'], v3gf8r['blur'] = y9pijq['wxinputblur'], v3gf8r['style'] = {}, v3gf8r['value'] = 0x0, v3gf8r['parentElement'] = {}, v3gf8r['placeholder'] = {}, v3gf8r['type'] = {}, v3gf8r['setColor'] = function (lk_mh) {}, v3gf8r['setType'] = function (vgyf3r) {}, v3gf8r['setFontFace'] = function (nmdl) {}, v3gf8r['addEventListener'] = function (zn7dsc) {}, v3gf8r['contains'] = function (g38vr) {
      return null;
    }, v3gf8r['removeChild'] = function (dzxlhm) {}, v3gf8r);
  }, l$mk_h['createShaderCondition'] = function (gqf) {
    var lxmhd = this;return function () {
      return lxmhd[gqf['replace']('this.', '')];
    };
  }, l$mk_h['EnvConfig'] = null, l$mk_h['window'] = null, l$mk_h['_preCreateElement'] = null, l$mk_h['_inited'] = !0x1, l$mk_h['wxRequest'] = null, l$mk_h['systemInfo'] = null, l$mk_h['version'] = '0.0.1', l$mk_h['isZiYu'] = !0x1, l$mk_h['isPosMsgYu'] = !0x1, l$mk_h['parseXMLFromString'] = function (ea8o23) {
    var u1_$k;ea8o23 = ea8o23['replace'](/>\s+</g, '><');try {
      u1_$k = new cndzxs['Parser']['DOMParser']()['parseFromString'](ea8o23, 'text/xml');
    } catch (eao38r) {
      throw '需要引入xml解析库文件';
    }return u1_$k;
  }, l$mk_h['idx'] = 0x1, l$mk_h);function l$mk_h() {}qi9yp(ygvfji, 'laya.wx.mini.MiniImage'), ygvfji['prototype']['_loadImage'] = function (oeaw62) {
    var jyf9qi = !0x1;-0x1 == oeaw62['indexOf']('layaNativeDir/') && (jyf9qi = !0x0, oeaw62 = oae3['formatURL'](oeaw62)), pqyi9j['getFileInfo'](oeaw62) ? ygvfji['onCreateImage'](oeaw62, this, !jyf9qi) : -0x1 != oeaw62['indexOf']('http://') || -0x1 != oeaw62['indexOf']('https://') ? pqyi9j['downImg'](oeaw62, new irvf(ygvfji, ygvfji['onDownImgCallBack'], [oeaw62, this]), oeaw62) : ygvfji['onCreateImage'](oeaw62, this, !0x0);
  }, ygvfji['onDownImgCallBack'] = function (n075c, frgv3, ae62o8) {
    ae62o8 ? frgv3['onError'](null) : ygvfji['onCreateImage'](n075c, frgv3);
  }, ygvfji['onCreateImage'] = function (e3ra8o, lxdkh, mkdhl) {
    var vro8, jifgqy;function _mk$4() {
      jifgqy['onload'] = null, jifgqy['onerror'] = null, delete lxdkh['imgCache'][e3ra8o];
    }vro8 = (mkdhl = void 0x0 === mkdhl ? !0x1 : mkdhl) ? e3ra8o : (km_xhl = pqyi9j['getFileInfo'](e3ra8o)['md5'], pqyi9j['getFileNativePath'](km_xhl)), null == lxdkh['imgCache'] && (lxdkh['imgCache'] = {}), mkdhl = function () {
      _mk$4(), lxdkh['onLoaded'](jifgqy);
    };var km_xhl = function () {
      _mk$4(), lxdkh['event']('error', 'Load image failed');
    };'nativeimage' == lxdkh['_type'] ? ((jifgqy = new qp09j5['window']['Image']())['crossOrigin'] = '', jifgqy['onload'] = mkdhl, jifgqy['onerror'] = km_xhl, jifgqy['src'] = vro8, lxdkh['imgCache'][e3ra8o] = jifgqy) : new ab6tw2['create'](vro8, { 'onload': mkdhl, 'onerror': km_xhl, 'onCreate': function (wta2b6) {
        jifgqy = wta2b6, lxdkh['imgCache'][e3ra8o] = wta2b6;
      } });
  };function ygvfji() {}var y9pijq = (qi9yp(zdscnx, 'laya.wx.mini.MiniInput'), zdscnx['_createInputElement'] = function () {
    pi9yjq['_initInput'](pi9yjq['area'] = qp09j5['createElement']('textarea')), pi9yjq['_initInput'](pi9yjq['input'] = qp09j5['createElement']('input')), pi9yjq['inputContainer'] = qp09j5['createElement']('div'), pi9yjq['inputContainer']['style']['position'] = 'absolute', pi9yjq['inputContainer']['style']['zIndex'] = 0x186a0, qp09j5['container']['appendChild'](pi9yjq['inputContainer']), pi9yjq['inputContainer']['setPos'] = function (a2tb6w, iyvgf) {
      pi9yjq['inputContainer']['style']['left'] = a2tb6w + 'px', pi9yjq['inputContainer']['style']['top'] = iyvgf + 'px';
    }, ryf['stage']['on']('resize', null, zdscnx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($4hku_) {
      cndzxs['dispatchEvent'] && cndzxs['dispatchEvent']('resize');
    }), $_mh4k['_soundClass'] = ndzs7, $_mh4k['_musicClass'] = ndzs7;
  }, zdscnx['_onStageResize'] = function () {
    ryf['stage']['_canvasTransform']['identity']()['scale'](qp09j5['width'] / nzdcs['canvas']['width'] / zxndlm['getPixelRatio'](), qp09j5['height'] / nzdcs['canvas']['height'] / zxndlm['getPixelRatio']());
  }, zdscnx['wxinputFocus'] = function ($hlk_) {
    var zn7cs5 = pi9yjq['inputElement']['target'];zn7cs5 && !zn7cs5['editable'] || (gyrv['window']['wx']['offKeyboardConfirm'](), gyrv['window']['wx']['offKeyboardInput'](), gyrv['window']['wx']['showKeyboard']({ 'defaultValue': zn7cs5['text'], 'maxLength': zn7cs5['maxChars'], 'multiple': zn7cs5['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (vfygr) {}, 'fail': function ($lkhm) {} }), gyrv['window']['wx']['onKeyboardConfirm'](function (tw6ab) {
      tw6ab = tw6ab ? tw6ab['value'] : '', (zn7cs5['text'] = tw6ab, zn7cs5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), gyrv['window']['wx']['onKeyboardInput'](function (qi09pj) {
      qi09pj = qi09pj ? qi09pj['value'] : '', zn7cs5['multiline'] || -0x1 == qi09pj['indexOf']('\x0a') ? (zn7cs5['text'] = qi09pj, zn7cs5['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, zdscnx['inputEnter'] = function () {
    pi9yjq['inputElement']['target']['focus'] = !0x1;
  }, zdscnx['wxinputblur'] = function () {
    zdscnx['hideKeyboard']();
  }, zdscnx['hideKeyboard'] = function () {
    gyrv['window']['wx']['offKeyboardConfirm'](), gyrv['window']['wx']['offKeyboardInput'](), gyrv['window']['wx']['hideKeyboard']({ 'success': function (yr3f) {
        console['log']('隐藏键盘');
      }, 'fail': function (dzxmln) {
        console['log']('隐藏键盘出错:' + (dzxmln ? dzxmln['errMsg'] : ''));
      } });
  }, zdscnx);function zdscnx() {}var pq905j = function () {
    function nzdxml() {}qi9yp(nzdxml, 'laya.wx.mini.MiniLoader');var p9i0q = nzdxml['prototype'];return p9i0q['load'] = function (fvr8g, hxdlm, iqgyjf, fqgj, jifygv) {
      void 0x0 === iqgyjf && (iqgyjf = !0x0), void 0x0 === jifygv && (jifygv = !0x1);var $4h_mk = this;0x0 === ($4h_mk['_url'] = fvr8g)['indexOf']('data:image') ? $4h_mk['_type'] = hxdlm = 'image' : $4h_mk['_type'] = hxdlm = hxdlm || $4h_mk['getTypeFromUrl'](fvr8g), $4h_mk['_cache'] = iqgyjf, $4h_mk['_data'] = null;var sc705 = 'ascii';-0x1 != fvr8g['indexOf']('.fnt') ? sc705 = 'utf8' : 'arraybuffer' == hxdlm && (sc705 = '');var re3a = hk4u['getFileExtension'](fvr8g);if (-0x1 != nzdxml['_fileTypeArr']['indexOf'](re3a)) gyrv['EnvConfig']['load']['call'](this, fvr8g, hxdlm, iqgyjf, fqgj, jifygv);else {
        if (pqyi9j['getFileInfo'](fvr8g)) gyrv['EnvConfig']['load']['call'](this, fvr8g, hxdlm, iqgyjf, fqgj, jifygv);else {
          if (-0x1 != fvr8g['indexOf']('layaNativeDir/')) {
            if (gyrv['isZiYu']) {
              var mxzdn = pqyi9j['ziyuFileData'][fvr8g];return void $4h_mk['onLoaded'](mxzdn);
            }return cosnole['log']('read read'), void pqyi9j['read'](fvr8g, sc705, new irvf(nzdxml, nzdxml['onReadNativeCallBack'], [sc705, fvr8g, hxdlm, iqgyjf, fqgj, jifygv, $4h_mk]));
          }mxzdn = '' == oae3['rootPath'] ? fvr8g : fvr8g['split'](oae3['rootPath'])[0x0], -0x1 != fvr8g['indexOf']('http://') || -0x1 != fvr8g['indexOf']('https://') ? gyrv['EnvConfig']['load']['call']($4h_mk, fvr8g, hxdlm, iqgyjf, fqgj, jifygv) : pqyi9j['readFile'](mxzdn, sc705, new irvf(nzdxml, nzdxml['onReadNativeCallBack'], [sc705, fvr8g, hxdlm, iqgyjf, fqgj, jifygv, $4h_mk]), fvr8g);
        }
      }
    }, p9i0q['resMgrLoad'] = function (mlnzdx, j950, nzdc7s, znlxmd, mh$kl, mzlxd, xnlsz) {
      void 0x0 === nzdc7s && (nzdc7s = 0x0), void 0x0 === znlxmd && (znlxmd = !0x1), void 0x0 === mh$kl && (mh$kl = !0x1), void 0x0 === mzlxd && (mzlxd = 0x0), void 0x0 === xnlsz && (xnlsz = 0x3), -0x1 != mlnzdx['indexOf']('mpack') && console['log']('=============resMgrLoad url:', mlnzdx), gyrv['EnvConfig']['resMgrLoad'](mlnzdx, (_mhk$, yj9ip, kmhxld) => {
        nzdxml['prototype']['resMgrLoadCallBack'](_mhk$, yj9ip, kmhxld, j950);
      }, nzdc7s, znlxmd, mh$kl, mzlxd, xnlsz);
    }, p9i0q['resMgrLoadCallBack'] = function (o3vr, fyiqj, _hlk$m, w62boa) {
      console['log']('buff:::', o3vr, _hlk$m, pqyi9j['fileNativeDir'] + '///' + pqyi9j['fileListName']), w62boa(o3vr, fyiqj, _hlk$m);
    }, p9i0q['clearRes'] = function (q750p, _hkmlx) {
      this['clearRes'](q750p, _hkmlx = void 0x0 === _hkmlx ? !0x1 : _hkmlx), _hkmlx = pqyi9j['getFileInfo'](q750p), !_hkmlx || -0x1 == q750p['indexOf']('http://') && -0x1 == q750p['indexOf']('https://') || (_hkmlx = _hkmlx['md5'], _hkmlx = pqyi9j['getFileNativePath'](_hkmlx), pqyi9j['remove'](_hkmlx));
    }, nzdxml['onReadNativeCallBack'] = function (g3v8re, o8ea, fyigvj, m4h$k, b2tw, nzxld, mk$lh_, oe2aw6, lh_mx) {
      void 0x0 === m4h$k && (m4h$k = !0x0), void 0x0 === nzxld && (nzxld = !0x1), (oe2aw6 = void 0x0 === oe2aw6 ? 0x0 : oe2aw6) ? 0x1 == oe2aw6 && gyrv['EnvConfig']['load']['call'](mk$lh_, o8ea, fyigvj, m4h$k, b2tw, nzxld) : (lh_mx = 'json' == fyigvj || 'atlas' == fyigvj ? gyrv['getJson'](lh_mx['data']) : 'xml' == fyigvj ? hk4u['parseXMLFromString'](lh_mx['data']) : lh_mx['data'], mk$lh_['onLoaded'](lh_mx), !gyrv['isZiYu'] && gyrv['isPosMsgYu'] && 'arraybuffer' != fyigvj && wx['postMessage']({ 'url': o8ea, 'data': lh_mx, 'isLoad': !0x0 }));
    }, p075q(nzdxml, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nzdxml;
  }(),
      pqyi9j = (qi9yp(r8vf, 'laya.wx.mini.MiniFileMgr', k$mh_), r8vf['isLoadFile'] = function (s07) {
    return -0x1 != r8vf['_fileTypeArr']['indexOf'](s07);
  }, r8vf['getFileInfo'] = function (zhlmx) {
    return zhlmx = zhlmx['split']('?')[0x0], zhlmx = r8vf['filesListObj'][zhlmx], null == zhlmx ? null : zhlmx;
  }, r8vf['onFileUpdate'] = function (qif, xmldzn) {
    var orea = qif['split']('/');qif = orea[orea['length'] - 0x1], orea = r8vf['getFileInfo'](xmldzn), null == orea ? r8vf['onSaveFile'](xmldzn, qif) : orea['readyUrl'] != xmldzn && r8vf['remove'](qif, xmldzn);
  }, r8vf['exits'] = function (lxdzmn, j5p0q9) {
    lxdzmn = r8vf['getFileNativePath'](lxdzmn), r8vf['fs']['getFileInfo']({ 'filePath': lxdzmn, 'success': function (k41$) {
        null != j5p0q9 && j5p0q9['runWith']([0x0, k41$]);
      }, 'fail': function (u_k$h) {
        null != j5p0q9 && j5p0q9['runWith']([0x1, u_k$h]);
      } });
  }, r8vf['read'] = function ($_4kuh, w26boa, ps7c50, q90i) {
    void 0x0 === w26boa && (w26boa = 'ascill'), $_4kuh = '' != (q90i = void 0x0 === q90i ? '' : q90i) ? r8vf['getFileNativePath']($_4kuh) : $_4kuh, r8vf['fs']['readFile']({ 'filePath': $_4kuh, 'encoding': w26boa, 'success': function (eor8) {
        null != ps7c50 && ps7c50['runWith']([0x0, eor8]);
      }, 'fail': function (znsx) {
        znsx && '' != q90i ? r8vf['down'](q90i, w26boa, ps7c50, q90i) : null != ps7c50 && ps7c50['runWith']([0x1]);
      } });
  }, r8vf['readNativeFile'] = function (qy9ifj, k$4_u) {
    r8vf['fs']['readFile']({ 'filePath': qy9ifj, 'encoding': '', 'success': function (ijgqyf) {
        null != k$4_u && k$4_u['runWith']([0x0]);
      }, 'fail': function (o832ae) {
        null != k$4_u && k$4_u['runWith']([0x1]);
      } });
  }, r8vf['down'] = function (c7p0s5, nzs, ow6ba, gjvyf) {
    void 0x0 === nzs && (nzs = 'ascill'), void 0x0 === gjvyf && (gjvyf = '');var vyr3f = r8vf['getFileNativePath'](gjvyf);r8vf['wxdown']({ 'url': c7p0s5, 'filePath': vyr3f, 'success': function (_kh$ml) {
        0xc8 === _kh$ml['statusCode'] && r8vf['readFile'](_kh$ml['filePath'], nzs, ow6ba, gjvyf);
      }, 'fail': function (mk_x) {
        null != ow6ba && ow6ba['runWith']([0x1, mk_x]);
      } })['onProgressUpdate'](function (yigfvj) {
      null != ow6ba && ow6ba['runWith']([0x2, yigfvj['progress']]);
    });
  }, r8vf['readFile'] = function (g83vr, _lhkm, e6oa, hk$m4) {
    void 0x0 === hk$m4 && (hk$m4 = ''), r8vf['fs']['readFile']({ 'filePath': g83vr, 'encoding': _lhkm = void 0x0 === _lhkm ? 'ascill' : _lhkm, 'success': function (k$hm4_) {
        -0x1 == g83vr['indexOf']('http://') && -0x1 == g83vr['indexOf']('https://') || r8vf['onFileUpdate'](g83vr, hk$m4), null != e6oa && e6oa['runWith']([0x0, k$hm4_]);
      }, 'fail': function (orv8) {
        orv8 && null != e6oa && e6oa['runWith']([0x1, orv8]);
      } });
  }, r8vf['downImg'] = function (zsldx, b62t, ero8) {
    void 0x0 === ero8 && (ero8 = ''), r8vf['wxdown']({ 'url': zsldx, 'success': function (grv83) {
        0xc8 === grv83['statusCode'] && r8vf['copyFile'](grv83['tempFilePath'], ero8, b62t);
      }, 'fail': function (ob6aw) {
        null != b62t && b62t['runWith']([0x1, ob6aw]);
      } });
  }, r8vf['copyFile'] = function (o2ewa, jpq905, mdzxln) {
    var o3ae = o2ewa['split']('/'),
        nzmdx = o3ae[o3ae['length'] - 0x1];jpq905['split']('?')[0x0];var _khu4 = r8vf['getFileInfo'](jpq905);o3ae = r8vf['getFileNativePath'](nzmdx), r8vf['fs']['copyFile']({ 'srcPath': o2ewa, 'destPath': o3ae, 'success': function (mxhdl) {
        _khu4 ? _khu4['readyUrl'] != jpq905 && r8vf['remove'](nzmdx, jpq905, mdzxln) : (r8vf['onSaveFile'](jpq905, nzmdx), null != mdzxln && mdzxln['runWith']([0x0]));
      }, 'fail': function (bao2w) {
        null != mdzxln && mdzxln['runWith']([0x1, bao2w]);
      } });
  }, r8vf['getFileNativePath'] = function (fgyirv) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fgyirv;
  }, r8vf['remove'] = function (xdmklh, hlmdx, gyifr) {
    void 0x0 === hlmdx && (hlmdx = '');var _4k1 = r8vf['getFileInfo'](hlmdx),
        $klmh = r8vf['getFileNativePath'](_4k1['md5']);ryf['loader']['clearRes'](_4k1['readyUrl']), r8vf['fs']['unlink']({ 'filePath': $klmh, 'success': function (o83ea) {
        '' != hlmdx && r8vf['onSaveFile'](hlmdx, xdmklh), null != gyifr && gyifr['runWith']([0x0]);
      }, 'fail': function (csdn7z) {} });
  }, r8vf['onSaveFile'] = function (mk_4h$, lmdxhk) {
    var pqy9i = mk_4h$['split']('?')[0x0];r8vf['filesListObj'][pqy9i] = { 'md5': lmdxhk, 'readyUrl': mk_4h$ }, r8vf['fs']['writeFile']({ 'filePath': r8vf['fileNativeDir'] + '/' + r8vf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8vf['filesListObj']), 'success': function (c7p05) {
        console['log']('写入测试测试成功：', c7p05);
      }, 'fail': function (ab26t) {
        console['log']('写入测试测试失败：', ab26t);
      } });
  }, r8vf['existDir'] = function (y9iqjp, tbw) {
    r8vf['fs']['mkdir']({ 'dirPath': y9iqjp, 'success': function (ndxzcs) {
        null != tbw && tbw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (gfivy) {
        -0x1 != gfivy['errMsg']['indexOf']('file already exists') ? r8vf['readSync'](r8vf['fileListName'], 'utf8', tbw) : null != tbw && tbw['runWith']([0x1, gfivy]);
      } });
  }, r8vf['readSync'] = function (m_hlx, k$l, rgfiy, hx_) {
    void 0x0 === k$l && (k$l = 'ascill'), void 0x0 === hx_ && (hx_ = ''), m_hlx = r8vf['getFileNativePath'](m_hlx);var mxhlzd;try {
      mxhlzd = r8vf['fs']['readFileSync'](m_hlx), null != rgfiy && rgfiy['runWith']([0x0, { 'data': mxhlzd }]);
    } catch (rgiyfv) {
      null != rgfiy && rgfiy['runWith']([0x1]);
    }
  }, r8vf['readCache'] = function () {}, r8vf['writeCache'] = function (ygifr) {
    var $_ku4h = readyUrl['split']('?')[0x0];r8vf['filesListObj'][$_ku4h] = { 'md5': md5Name, 'readyUrl': readyUrl }, r8vf['fs']['writeFile']({ 'filePath': r8vf['fileNativeDir'] + '/' + r8vf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](r8vf['filesListObj']), 'success': function (grf38) {}, 'fail': function (oer8a) {} });
  }, r8vf['setNativeFileDir'] = function (_mhlx) {
    r8vf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _mhlx;
  }, r8vf['filesListObj'] = {}, r8vf['fileNativeDir'] = null, r8vf['fileListName'] = 'layaairfiles.txt', r8vf['ziyuFileData'] = {}, p075q(r8vf, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), r8vf);function r8vf() {
    r8vf['__super']['call'](this);
  }var ndzs7 = function () {
    function zdnsx() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, zdnsx['__super']['call'](this), this['_sound'] = zdnsx['_createSound']();
    }qi9yp(zdnsx, 'laya.wx.mini.MiniSound', k$mh_);var dklmxh = zdnsx['prototype'];return dklmxh['load'] = function (gjyqi) {
      var dcszx = this,
          yjigfq;function vyf3g() {
        if (null != zdnsx['_null']) dcszx['_sound']['onCanplay'](zdnsx['_null']), dcszx['_sound']['onError'](zdnsx['_null']);else try {
          dcszx['_sound']['onCanplay'](null), dcszx['_sound']['onError'](null), zdnsx['_null'] = null;
        } catch (yjivg) {
          console['warn']('[wxmini] _clearSound:' + yjivg), dcszx['_sound']['onCanplay'](aw2o), dcszx['_sound']['onError'](aw2o), zdnsx['_null'] = aw2o;
        }
      }function aw2o() {}gjyqi = oae3['formatURL'](gjyqi), this['url'] = gjyqi, zdnsx['_audioCache'][gjyqi] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        vyf3g(), yjigfq['loaded'] = !0x0, yjigfq['event']('complete'), zdnsx['_audioCache'][yjigfq['url']] = yjigfq;
      }), this['_sound']['onError'](function (lkxh_) {
        console['error']('errCode=' + lkxh_['errCode'] + '  errMsg=' + lkxh_['errMsg']), vyf3g(), yjigfq['event']('error');
      }), this['_sound']['src'] = gjyqi, yjigfq = this);
    }, dklmxh['play'] = function (w6bo2a, w6abo) {
      void 0x0 === w6bo2a && (w6bo2a = 0x0), void 0x0 === w6abo && (w6abo = 0x0), (hlk_xm = this['url'] == $_mh4k['_tMusic'] ? (zdnsx['_musicAudio'] || (zdnsx['_musicAudio'] = zdnsx['_createSound']()), zdnsx['_musicAudio']) : zdnsx['_createSound']())['src'] = this['url'];var hlk_xm = new ku$1_(hlk_xm);return hlk_xm['url'] = this['url'], hlk_xm['loops'] = w6abo, hlk_xm['startTime'] = w6bo2a, hlk_xm['play'](), $_mh4k['addChannel'](hlk_xm), hlk_xm;
    }, dklmxh['dispose'] = function () {
      var k4u$1_ = zdnsx['_audioCache'][this['url']];k4u$1_ && (k4u$1_['src'] = '', delete zdnsx['_audioCache'][this['url']]);
    }, nsdczx(0x0, dklmxh, 'duration', function () {
      return this['_sound']['duration'];
    }), zdnsx['_createSound'] = function () {
      return zdnsx['_id']++, gyrv['window']['wx']['createInnerAudioContext']();
    }, zdnsx['_musicAudio'] = null, zdnsx['_id'] = 0x0, zdnsx['_audioCache'] = {}, zdnsx['_null'] = void 0x0, zdnsx;
  }(),
      ku$1_ = function () {
    function zxmhl(fvigry) {
      this['_audio'] = null, this['_onEnd'] = null, zxmhl['__super']['call'](this), this['_audio'] = fvigry, this['_onEnd'] = hk4u['bind'](this['__onEnd'], this), fvigry['onEnded'](this['_onEnd']);
    }qi9yp(zxmhl, 'laya.wx.mini.MiniSoundChannel', ea3or8);var mk$4h_ = zxmhl['prototype'];return mk$4h_['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (ryf['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mk$4h_['__onNull'] = function () {}, mk$4h_['play'] = function () {
      this['isStopped'] = !0x1, $_mh4k['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, mk$4h_['stop'] = function () {
      if (this['isStopped'] = !0x0, $_mh4k['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != zxmhl['_null']) this['_audio']['onEnded'](zxmhl['_null']);else try {
          this['_audio']['onEnded'](null), zxmhl['_null'] = null;
        } catch (nlxzd) {
          console['warn']('[wxmini] stop:' + nlxzd), this['_audio']['onEnded'](hk4u['bind'](this['__onNull'], this)), zxmhl['_null'] = hk4u['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, mk$4h_['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, mk$4h_['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $_mh4k['addChannel'](this), this['_audio']['play']());
    }, nsdczx(0x0, mk$4h_, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), nsdczx(0x0, mk$4h_, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), nsdczx(0x0, mk$4h_, 'volume', function () {
      return 0x1;
    }, function (o62ew) {}), zxmhl['_null'] = void 0x0, zxmhl;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (ba6wo2, s7zdc) {
  'use strict';

  for (var j9iqyp in Object['defineProperty'](s7zdc, '__esModule', { 'value': !0x0 }), Laya) {
    var mxln = Laya[j9iqyp];mxln && mxln['__isclass'] && (s7zdc[j9iqyp] = mxln);
  }
});