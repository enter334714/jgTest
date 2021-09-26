var k = wx.$f;
!function (fumi7b, soyp5) {
  soyp5['un'], soyp5['uns'];var $3zvja = soyp5['static'],
      _rag$ = soyp5['class'],
      jrga$_ = soyp5['getset'];soyp5['__newvec'];var vc6ze4 = laya['utils']['Browser'],
      gb_r7m = (laya['events']['Event'], laya['events']['EventDispatcher']),
      oy1 = laya['resource']['HTMLImage'],
      s2d5p = laya['utils']['Handler'],
      rmbjg_ = laya['display']['Input'],
      psty5 = laya['net']['Loader'];laya['maths']['Matrix'];var jr_m = laya['renders']['Render'],
      gmru = laya['utils']['RunDriver'];laya['media']['Sound'];var p5dos = laya['media']['SoundChannel'],
      e6qc4k = laya['media']['SoundManager'],
      vze = (laya['display']['Stage'], laya['net']['URL']),
      dy582 = laya['utils']['Utils'],
      vcze6 = (_rag$(a3$vj, 'laya.wx.mini.MiniAdpter'), a3$vj['getJson'] = function (ecz4v3) {
    return JSON['parse'](ecz4v3);
  }, a3$vj['init'] = function (d25yps, zec3v4) {
    void 0x0 === d25yps && (d25yps = !0x1), void 0x0 === zec3v4 && (zec3v4 = !0x1), a3$vj['_inited'] || (a3$vj['window'] = fumi7b)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (a3$vj['_inited'] = !0x0, a3$vj['isZiYu'] = zec3v4, a3$vj['isPosMsgYu'] = d25yps, a3$vj['EnvConfig'] = {}, a3$vj['isZiYu'] || ($_3zj['setNativeFileDir']('/layaairGame'), $_3zj['existDir']($_3zj['fileNativeDir'], s2d5p['create'](a3$vj, a3$vj['onMkdirCallBack']))), a3$vj['window']['focus'] = function () {}, soyp5['getUrlPath'] = function () {}, a3$vj['window']['logtime'] = function (_$ja3r) {}, a3$vj['window']['alertTimeLog'] = function (rm_j) {}, a3$vj['window']['resetShareInfo'] = function () {}, a3$vj['window']['CanvasRenderingContext2D'] = function () {}, a3$vj['window']['CanvasRenderingContext2D']['prototype'] = a3$vj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], a3$vj['window']['document']['body']['appendChild'] = function () {}, a3$vj['EnvConfig']['pixelRatioInt'] = 0x0, gmru['getPixelRatio'] = a3$vj['pixelRatio'], a3$vj['_preCreateElement'] = vc6ze4['createElement'], vc6ze4['createElement'] = a3$vj['createElement'], gmru['createShaderCondition'] = a3$vj['createShaderCondition'], dy582['parseXMLFromString'] = a3$vj['parseXMLFromString'], rmbjg_['_createInputElement'] = ifn['_createInputElement'], a3$vj['EnvConfig']['load'] = psty5['prototype']['load'], psty5['prototype']['load'] = zce46['prototype']['load'], a3$vj['isZiYu'] && d25yps && wx['onMessage'](function (h5d2) {
      h5d2['isLoad'] && ($_3zj['ziyuFileData'][h5d2['url']] = h5d2['data']);
    }));
  }, a3$vj['onMkdirCallBack'] = function (t019ox, r$3ja) {
    t019ox || ($_3zj['filesListObj'] = JSON['parse'](r$3ja['data']));
  }, a3$vj['pixelRatio'] = function () {
    if (!a3$vj['EnvConfig']['pixelRatioInt']) try {
      var brm7gu = wx['getSystemInfoSync']();return a3$vj['EnvConfig']['pixelRatioInt'] = brm7gu['pixelRatio'], brm7gu['pixelRatio'];
    } catch (gmj_ar) {}return a3$vj['EnvConfig']['pixelRatioInt'];
  }, a3$vj['createElement'] = function (o0s1) {
    var sotpy;if ('canvas' == o0s1) return 0x1 == a3$vj['idx'] ? a3$vj['isZiYu'] ? (sotpy = sharedCanvas)['style'] = {} : sotpy = fumi7b['canvas'] : sotpy = fumi7b['wx']['createCanvas'](), a3$vj['idx']++, sotpy;if ('textarea' == o0s1 || 'input' == o0s1) return a3$vj['onCreateInput'](o0s1);if ('div' != o0s1) return a3$vj['_preCreateElement'](o0s1);return o0s1 = a3$vj['_preCreateElement'](o0s1), (o0s1['contains'] = function (agm_r) {
      return null;
    }, o0s1['removeChild'] = function (_z3ja$) {}, o0s1);
  }, a3$vj['onCreateInput'] = function (tq910) {
    return tq910 = a3$vj['_preCreateElement'](tq910), (tq910['focus'] = ifn['wxinputFocus'], tq910['blur'] = ifn['wxinputblur'], tq910['style'] = {}, tq910['value'] = 0x0, tq910['parentElement'] = {}, tq910['placeholder'] = {}, tq910['type'] = {}, tq910['setColor'] = function (k0e69) {}, tq910['setType'] = function (pys) {}, tq910['setFontFace'] = function (bgr7_m) {}, tq910['addEventListener'] = function (p2d5s) {}, tq910['contains'] = function (c$z) {
      return null;
    }, tq910['removeChild'] = function (o5) {}, tq910);
  }, a3$vj['createShaderCondition'] = function (ot0) {
    var s52ydp = this;return function () {
      return s52ydp[ot0['replace']('this.', '')];
    };
  }, a3$vj['EnvConfig'] = null, a3$vj['window'] = null, a3$vj['_preCreateElement'] = null, a3$vj['_inited'] = !0x1, a3$vj['wxRequest'] = null, a3$vj['systemInfo'] = null, a3$vj['version'] = '0.0.1', a3$vj['isZiYu'] = !0x1, a3$vj['isPosMsgYu'] = !0x1, a3$vj['parseXMLFromString'] = function (un7wfi) {
    var bm7_rg;un7wfi = un7wfi['replace'](/>\s+</g, '><');try {
      bm7_rg = new fumi7b['Parser']['DOMParser']()['parseFromString'](un7wfi, 'text/xml');
    } catch (pdh) {
      throw '需要引入xml解析库文件';
    }return bm7_rg;
  }, a3$vj['idx'] = 0x1, a3$vj);function a3$vj() {}_rag$(dosyp5, 'laya.wx.mini.MiniImage'), dosyp5['prototype']['_loadImage'] = function (bmufg) {
    var h28dp = !0x1;-0x1 == bmufg['indexOf']('layaNativeDir/') && (h28dp = !0x0, bmufg = vze['formatURL'](bmufg)), $_3zj['getFileInfo'](bmufg) ? dosyp5['onCreateImage'](bmufg, this, !h28dp) : -0x1 != bmufg['indexOf']('http://') || -0x1 != bmufg['indexOf']('https://') ? $_3zj['downImg'](bmufg, new s2d5p(dosyp5, dosyp5['onDownImgCallBack'], [bmufg, this]), bmufg) : dosyp5['onCreateImage'](bmufg, this, !0x0);
  }, dosyp5['onDownImgCallBack'] = function (a$g, xyo1st, tsy1o) {
    tsy1o ? xyo1st['onError'](null) : dosyp5['onCreateImage'](a$g, xyo1st);
  }, dosyp5['onCreateImage'] = function (ck6q, z$acv, vac$z) {
    var c6zv, a$3zc;function kx6q90() {
      a$3zc['onload'] = null, a$3zc['onerror'] = null, delete z$acv['imgCache'][ck6q];
    }c6zv = (vac$z = void 0x0 === vac$z ? !0x1 : vac$z) ? ck6q : (aj$g = $_3zj['getFileInfo'](ck6q)['md5'], $_3zj['getFileNativePath'](aj$g)), null == z$acv['imgCache'] && (z$acv['imgCache'] = {}), vac$z = function () {
      kx6q90(), z$acv['onLoaded'](a$3zc);
    };var aj$g = function () {
      kx6q90(), z$acv['event']('error', 'Load image failed');
    };'nativeimage' == z$acv['_type'] ? ((a$3zc = new vc6ze4['window']['Image']())['crossOrigin'] = '', a$3zc['onload'] = vac$z, a$3zc['onerror'] = aj$g, a$3zc['src'] = c6zv, z$acv['imgCache'][ck6q] = a$3zc) : new oy1['create'](c6zv, { 'onload': vac$z, 'onerror': aj$g, 'onCreate': function (fw7) {
        a$3zc = fw7, z$acv['imgCache'][ck6q] = fw7;
      } });
  };function dosyp5() {}var ifn = (_rag$(bfmg7, 'laya.wx.mini.MiniInput'), bfmg7['_createInputElement'] = function () {
    rmbjg_['_initInput'](rmbjg_['area'] = vc6ze4['createElement']('textarea')), rmbjg_['_initInput'](rmbjg_['input'] = vc6ze4['createElement']('input')), rmbjg_['inputContainer'] = vc6ze4['createElement']('div'), rmbjg_['inputContainer']['style']['position'] = 'absolute', rmbjg_['inputContainer']['style']['zIndex'] = 0x186a0, vc6ze4['container']['appendChild'](rmbjg_['inputContainer']), rmbjg_['inputContainer']['setPos'] = function (_arj, _gmbjr) {
      rmbjg_['inputContainer']['style']['left'] = _arj + 'px', rmbjg_['inputContainer']['style']['top'] = _gmbjr + 'px';
    }, soyp5['stage']['on']('resize', null, bfmg7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_gjmra) {
      fumi7b['dispatchEvent'] && fumi7b['dispatchEvent']('resize');
    }), e6qc4k['_soundClass'] = mg_ja, e6qc4k['_musicClass'] = mg_ja;
  }, bfmg7['_onStageResize'] = function () {
    soyp5['stage']['_canvasTransform']['identity']()['scale'](vc6ze4['width'] / jr_m['canvas']['width'] / gmru['getPixelRatio'](), vc6ze4['height'] / jr_m['canvas']['height'] / gmru['getPixelRatio']());
  }, bfmg7['wxinputFocus'] = function (v4kc6) {
    var x9tq10 = rmbjg_['inputElement']['target'];x9tq10 && !x9tq10['editable'] || (vcze6['window']['wx']['offKeyboardConfirm'](), vcze6['window']['wx']['offKeyboardInput'](), vcze6['window']['wx']['showKeyboard']({ 'defaultValue': x9tq10['text'], 'maxLength': x9tq10['maxChars'], 'multiple': x9tq10['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (n7fu) {}, 'fail': function (guf7mb) {} }), vcze6['window']['wx']['onKeyboardConfirm'](function (q69kx0) {
      q69kx0 = q69kx0 ? q69kx0['value'] : '', (x9tq10['text'] = q69kx0, x9tq10['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), vcze6['window']['wx']['onKeyboardInput'](function (bm7ugf) {
      bm7ugf = bm7ugf ? bm7ugf['value'] : '', x9tq10['multiline'] || -0x1 == bm7ugf['indexOf']('\x0a') ? (x9tq10['text'] = bm7ugf, x9tq10['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, bfmg7['inputEnter'] = function () {
    rmbjg_['inputElement']['target']['focus'] = !0x1;
  }, bfmg7['wxinputblur'] = function () {
    bfmg7['hideKeyboard']();
  }, bfmg7['hideKeyboard'] = function () {
    vcze6['window']['wx']['offKeyboardConfirm'](), vcze6['window']['wx']['offKeyboardInput'](), vcze6['window']['wx']['hideKeyboard']({ 'success': function (tpo1sy) {
        console['log']('隐藏键盘');
      }, 'fail': function (typs) {
        console['log']('隐藏键盘出错:' + (typs ? typs['errMsg'] : ''));
      } });
  }, bfmg7);function bfmg7() {}var zce46 = function () {
    function xo1yst() {}_rag$(xo1yst, 'laya.wx.mini.MiniLoader');var i7fbwu = xo1yst['prototype'];return i7fbwu['load'] = function (a_jg, ysop, xos1, ox10s, if7ubm) {
      void 0x0 === xos1 && (xos1 = !0x0), void 0x0 === if7ubm && (if7ubm = !0x1);var rm7g_b = this;0x0 === (rm7g_b['_url'] = a_jg)['indexOf']('data:image') ? rm7g_b['_type'] = ysop = 'image' : rm7g_b['_type'] = ysop = ysop || rm7g_b['getTypeFromUrl'](a_jg), rm7g_b['_cache'] = xos1, rm7g_b['_data'] = null;var qk649e = 'ascii';-0x1 != a_jg['indexOf']('.fnt') ? qk649e = 'utf8' : 'arraybuffer' == ysop && (qk649e = '');var x10t9 = dy582['getFileExtension'](a_jg);if (-0x1 != xo1yst['_fileTypeArr']['indexOf'](x10t9)) vcze6['EnvConfig']['load']['call'](this, a_jg, ysop, xos1, ox10s, if7ubm);else {
        if ($_3zj['getFileInfo'](a_jg)) vcze6['EnvConfig']['load']['call'](this, a_jg, ysop, xos1, ox10s, if7ubm);else {
          if (-0x1 != a_jg['indexOf']('layaNativeDir/')) {
            if (vcze6['isZiYu']) {
              var $_ja3r = $_3zj['ziyuFileData'][a_jg];return void rm7g_b['onLoaded']($_ja3r);
            }return cosnole['log']('read read'), void $_3zj['read'](a_jg, qk649e, new s2d5p(xo1yst, xo1yst['onReadNativeCallBack'], [qk649e, a_jg, ysop, xos1, ox10s, if7ubm, rm7g_b]));
          }$_ja3r = '' == vze['rootPath'] ? a_jg : a_jg['split'](vze['rootPath'])[0x0], -0x1 != a_jg['indexOf']('http://') || -0x1 != a_jg['indexOf']('https://') ? vcze6['EnvConfig']['load']['call'](rm7g_b, a_jg, ysop, xos1, ox10s, if7ubm) : $_3zj['readFile']($_ja3r, qk649e, new s2d5p(xo1yst, xo1yst['onReadNativeCallBack'], [qk649e, a_jg, ysop, xos1, ox10s, if7ubm, rm7g_b]), a_jg);
        }
      }
    }, i7fbwu['resMgrLoad'] = function (_m7brg, yds5po, aj_rmg, ugf7m, jram_, c43ez, q0kx69) {
      void 0x0 === aj_rmg && (aj_rmg = 0x0), void 0x0 === ugf7m && (ugf7m = !0x1), void 0x0 === jram_ && (jram_ = !0x1), void 0x0 === c43ez && (c43ez = 0x0), void 0x0 === q0kx69 && (q0kx69 = 0x3), -0x1 != _m7brg['indexOf']('mpack') && console['log']('=============resMgrLoad url:', _m7brg), vcze6['EnvConfig']['resMgrLoad'](_m7brg, (rbg_mj, j3$vaz, soxt10) => {
        xo1yst['prototype']['resMgrLoadCallBack'](rbg_mj, j3$vaz, soxt10, yds5po);
      }, aj_rmg, ugf7m, jram_, c43ez, q0kx69);
    }, i7fbwu['resMgrLoadCallBack'] = function (tpys5o, e3zcv4, hd2, ga_r$j) {
      console['log']('buff:::', tpys5o, hd2, $_3zj['fileNativeDir'] + '///' + $_3zj['fileListName']), ga_r$j(tpys5o, e3zcv4, hd2);
    }, i7fbwu['clearRes'] = function (ek06q, br_j) {
      this['clearRes'](ek06q, br_j = void 0x0 === br_j ? !0x1 : br_j), br_j = $_3zj['getFileInfo'](ek06q), !br_j || -0x1 == ek06q['indexOf']('http://') && -0x1 == ek06q['indexOf']('https://') || (br_j = br_j['md5'], br_j = $_3zj['getFileNativePath'](br_j), $_3zj['remove'](br_j));
    }, xo1yst['onReadNativeCallBack'] = function (gbumr, $j_3az, x0qk, x1ys, a_3jr$, d5s, x1syot, zj$3a_, zec64) {
      void 0x0 === x1ys && (x1ys = !0x0), void 0x0 === d5s && (d5s = !0x1), (zj$3a_ = void 0x0 === zj$3a_ ? 0x0 : zj$3a_) ? 0x1 == zj$3a_ && vcze6['EnvConfig']['load']['call'](x1syot, $j_3az, x0qk, x1ys, a_3jr$, d5s) : (zec64 = 'json' == x0qk || 'atlas' == x0qk ? vcze6['getJson'](zec64['data']) : 'xml' == x0qk ? dy582['parseXMLFromString'](zec64['data']) : zec64['data'], x1syot['onLoaded'](zec64), !vcze6['isZiYu'] && vcze6['isPosMsgYu'] && 'arraybuffer' != x0qk && wx['postMessage']({ 'url': $j_3az, 'data': zec64, 'isLoad': !0x0 }));
    }, $3zvja(xo1yst, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xo1yst;
  }(),
      $_3zj = (_rag$(c3v4z, 'laya.wx.mini.MiniFileMgr', gb_r7m), c3v4z['isLoadFile'] = function (mb_jrg) {
    return -0x1 != c3v4z['_fileTypeArr']['indexOf'](mb_jrg);
  }, c3v4z['getFileInfo'] = function (gmar_j) {
    return gmar_j = gmar_j['split']('?')[0x0], gmar_j = c3v4z['filesListObj'][gmar_j], null == gmar_j ? null : gmar_j;
  }, c3v4z['onFileUpdate'] = function (yts1po, q46ce) {
    var t1ox = yts1po['split']('/');yts1po = t1ox[t1ox['length'] - 0x1], t1ox = c3v4z['getFileInfo'](q46ce), null == t1ox ? c3v4z['onSaveFile'](q46ce, yts1po) : t1ox['readyUrl'] != q46ce && c3v4z['remove'](yts1po, q46ce);
  }, c3v4z['exits'] = function (k4eq6, rgam_j) {
    k4eq6 = c3v4z['getFileNativePath'](k4eq6), c3v4z['fs']['getFileInfo']({ 'filePath': k4eq6, 'success': function (jr$3) {
        null != rgam_j && rgam_j['runWith']([0x0, jr$3]);
      }, 'fail': function (av3j$z) {
        null != rgam_j && rgam_j['runWith']([0x1, av3j$z]);
      } });
  }, c3v4z['read'] = function ($vca, xys1, k9q4e6, v3$) {
    void 0x0 === xys1 && (xys1 = 'ascill'), $vca = '' != (v3$ = void 0x0 === v3$ ? '' : v3$) ? c3v4z['getFileNativePath']($vca) : $vca, c3v4z['fs']['readFile']({ 'filePath': $vca, 'encoding': xys1, 'success': function (_$argj) {
        null != k9q4e6 && k9q4e6['runWith']([0x0, _$argj]);
      }, 'fail': function (bmgu7) {
        bmgu7 && '' != v3$ ? c3v4z['down'](v3$, xys1, k9q4e6, v3$) : null != k9q4e6 && k9q4e6['runWith']([0x1]);
      } });
  }, c3v4z['readNativeFile'] = function (xt91o0, pd2h) {
    c3v4z['fs']['readFile']({ 'filePath': xt91o0, 'encoding': '', 'success': function (inf7w) {
        null != pd2h && pd2h['runWith']([0x0]);
      }, 'fail': function (cz34v$) {
        null != pd2h && pd2h['runWith']([0x1]);
      } });
  }, c3v4z['down'] = function (z43ev, ajz_3$, imb, zv$3) {
    void 0x0 === ajz_3$ && (ajz_3$ = 'ascill'), void 0x0 === zv$3 && (zv$3 = '');var pdy852 = c3v4z['getFileNativePath'](zv$3);c3v4z['wxdown']({ 'url': z43ev, 'filePath': pdy852, 'success': function (z3$a_) {
        0xc8 === z3$a_['statusCode'] && c3v4z['readFile'](z3$a_['filePath'], ajz_3$, imb, zv$3);
      }, 'fail': function (wbf7ui) {
        null != imb && imb['runWith']([0x1, wbf7ui]);
      } })['onProgressUpdate'](function (xk6q) {
      null != imb && imb['runWith']([0x2, xk6q['progress']]);
    });
  }, c3v4z['readFile'] = function (gm7r_b, k096eq, _rgmaj, u7wfb) {
    void 0x0 === u7wfb && (u7wfb = ''), c3v4z['fs']['readFile']({ 'filePath': gm7r_b, 'encoding': k096eq = void 0x0 === k096eq ? 'ascill' : k096eq, 'success': function (_$rg) {
        -0x1 == gm7r_b['indexOf']('http://') && -0x1 == gm7r_b['indexOf']('https://') || c3v4z['onFileUpdate'](gm7r_b, u7wfb), null != _rgmaj && _rgmaj['runWith']([0x0, _$rg]);
      }, 'fail': function (_azj$) {
        _azj$ && null != _rgmaj && _rgmaj['runWith']([0x1, _azj$]);
      } });
  }, c3v4z['downImg'] = function (b_grjm, eq64c, ystp) {
    void 0x0 === ystp && (ystp = ''), c3v4z['wxdown']({ 'url': b_grjm, 'success': function (toy1ps) {
        0xc8 === toy1ps['statusCode'] && c3v4z['copyFile'](toy1ps['tempFilePath'], ystp, eq64c);
      }, 'fail': function (ke0q6) {
        null != eq64c && eq64c['runWith']([0x1, ke0q6]);
      } });
  }, c3v4z['copyFile'] = function (sxyo1, wf7biu, kc64) {
    var fubgm7 = sxyo1['split']('/'),
        g$a_rj = fubgm7[fubgm7['length'] - 0x1];wf7biu['split']('?')[0x0];var iuwb = c3v4z['getFileInfo'](wf7biu);fubgm7 = c3v4z['getFileNativePath'](g$a_rj), c3v4z['fs']['copyFile']({ 'srcPath': sxyo1, 'destPath': fubgm7, 'success': function (j_a3r) {
        iuwb ? iuwb['readyUrl'] != wf7biu && c3v4z['remove'](g$a_rj, wf7biu, kc64) : (c3v4z['onSaveFile'](wf7biu, g$a_rj), null != kc64 && kc64['runWith']([0x0]));
      }, 'fail': function (v6ck) {
        null != kc64 && kc64['runWith']([0x1, v6ck]);
      } });
  }, c3v4z['getFileNativePath'] = function (cv6ze4) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cv6ze4;
  }, c3v4z['remove'] = function (ag_$r, g_rmja, mgurb) {
    void 0x0 === g_rmja && (g_rmja = '');var h52p8d = c3v4z['getFileInfo'](g_rmja),
        ag_mjr = c3v4z['getFileNativePath'](h52p8d['md5']);soyp5['loader']['clearRes'](h52p8d['readyUrl']), c3v4z['fs']['unlink']({ 'filePath': ag_mjr, 'success': function (y82pd) {
        '' != g_rmja && c3v4z['onSaveFile'](g_rmja, ag_$r), null != mgurb && mgurb['runWith']([0x0]);
      }, 'fail': function (gu7br) {} });
  }, c3v4z['onSaveFile'] = function (arg_j, gbfum) {
    var osx10 = arg_j['split']('?')[0x0];c3v4z['filesListObj'][osx10] = { 'md5': gbfum, 'readyUrl': arg_j }, c3v4z['fs']['writeFile']({ 'filePath': c3v4z['fileNativeDir'] + '/' + c3v4z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c3v4z['filesListObj']), 'success': function (x0q6k9) {
        console['log']('写入测试测试成功：', x0q6k9);
      }, 'fail': function (iuwn) {
        console['log']('写入测试测试失败：', iuwn);
      } });
  }, c3v4z['existDir'] = function (gaj$_r, ps52) {
    c3v4z['fs']['mkdir']({ 'dirPath': gaj$_r, 'success': function (uimb7f) {
        null != ps52 && ps52['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (dh5p2) {
        -0x1 != dh5p2['errMsg']['indexOf']('file already exists') ? c3v4z['readSync'](c3v4z['fileListName'], 'utf8', ps52) : null != ps52 && ps52['runWith']([0x1, dh5p2]);
      } });
  }, c3v4z['readSync'] = function (e46, jga_rm, v$3j, b7fmg) {
    void 0x0 === jga_rm && (jga_rm = 'ascill'), void 0x0 === b7fmg && (b7fmg = ''), e46 = c3v4z['getFileNativePath'](e46);var u7gmbf;try {
      u7gmbf = c3v4z['fs']['readFileSync'](e46), null != v$3j && v$3j['runWith']([0x0, { 'data': u7gmbf }]);
    } catch (nui7w) {
      null != v$3j && v$3j['runWith']([0x1]);
    }
  }, c3v4z['readCache'] = function () {}, c3v4z['writeCache'] = function (xq0t91) {
    var p5d8h = readyUrl['split']('?')[0x0];c3v4z['filesListObj'][p5d8h] = { 'md5': md5Name, 'readyUrl': readyUrl }, c3v4z['fs']['writeFile']({ 'filePath': c3v4z['fileNativeDir'] + '/' + c3v4z['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](c3v4z['filesListObj']), 'success': function (y52dp8) {}, 'fail': function (ve64z) {} });
  }, c3v4z['setNativeFileDir'] = function (c34zv$) {
    c3v4z['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + c34zv$;
  }, c3v4z['filesListObj'] = {}, c3v4z['fileNativeDir'] = null, c3v4z['fileListName'] = 'layaairfiles.txt', c3v4z['ziyuFileData'] = {}, $3zvja(c3v4z, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), c3v4z);function c3v4z() {
    c3v4z['__super']['call'](this);
  }var mg_ja = function () {
    function gbm7fu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, gbm7fu['__super']['call'](this), this['_sound'] = gbm7fu['_createSound']();
    }_rag$(gbm7fu, 'laya.wx.mini.MiniSound', gb_r7m);var tx90o1 = gbm7fu['prototype'];return tx90o1['load'] = function (xyto1) {
      var $gj_a = this,
          t0o91;function ezvc6() {
        if (null != gbm7fu['_null']) $gj_a['_sound']['onCanplay'](gbm7fu['_null']), $gj_a['_sound']['onError'](gbm7fu['_null']);else try {
          $gj_a['_sound']['onCanplay'](null), $gj_a['_sound']['onError'](null), gbm7fu['_null'] = null;
        } catch (j$a3vz) {
          console['warn']('[wxmini] _clearSound:' + j$a3vz), $gj_a['_sound']['onCanplay'](e4kvc6), $gj_a['_sound']['onError'](e4kvc6), gbm7fu['_null'] = e4kvc6;
        }
      }function e4kvc6() {}xyto1 = vze['formatURL'](xyto1), this['url'] = xyto1, gbm7fu['_audioCache'][xyto1] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        ezvc6(), t0o91['loaded'] = !0x0, t0o91['event']('complete'), gbm7fu['_audioCache'][t0o91['url']] = t0o91;
      }), this['_sound']['onError'](function ($rgaj) {
        console['error']('errCode=' + $rgaj['errCode'] + '  errMsg=' + $rgaj['errMsg']), ezvc6(), t0o91['event']('error');
      }), this['_sound']['src'] = xyto1, t0o91 = this);
    }, tx90o1['play'] = function (py8d52, jr3a$_) {
      void 0x0 === py8d52 && (py8d52 = 0x0), void 0x0 === jr3a$_ && (jr3a$_ = 0x0), (t109o = this['url'] == e6qc4k['_tMusic'] ? (gbm7fu['_musicAudio'] || (gbm7fu['_musicAudio'] = gbm7fu['_createSound']()), gbm7fu['_musicAudio']) : gbm7fu['_createSound']())['src'] = this['url'];var t109o = new mgb7u(t109o);return t109o['url'] = this['url'], t109o['loops'] = jr3a$_, t109o['startTime'] = py8d52, t109o['play'](), e6qc4k['addChannel'](t109o), t109o;
    }, tx90o1['dispose'] = function () {
      var $jra3_ = gbm7fu['_audioCache'][this['url']];$jra3_ && ($jra3_['src'] = '', delete gbm7fu['_audioCache'][this['url']]);
    }, jrga$_(0x0, tx90o1, 'duration', function () {
      return this['_sound']['duration'];
    }), gbm7fu['_createSound'] = function () {
      return gbm7fu['_id']++, vcze6['window']['wx']['createInnerAudioContext']();
    }, gbm7fu['_musicAudio'] = null, gbm7fu['_id'] = 0x0, gbm7fu['_audioCache'] = {}, gbm7fu['_null'] = void 0x0, gbm7fu;
  }(),
      mgb7u = function () {
    function w7biu(za$v3c) {
      this['_audio'] = null, this['_onEnd'] = null, w7biu['__super']['call'](this), this['_audio'] = za$v3c, this['_onEnd'] = dy582['bind'](this['__onEnd'], this), za$v3c['onEnded'](this['_onEnd']);
    }_rag$(w7biu, 'laya.wx.mini.MiniSoundChannel', p5dos);var hd85 = w7biu['prototype'];return hd85['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (soyp5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hd85['__onNull'] = function () {}, hd85['play'] = function () {
      this['isStopped'] = !0x1, e6qc4k['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, hd85['stop'] = function () {
      if (this['isStopped'] = !0x0, e6qc4k['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != w7biu['_null']) this['_audio']['onEnded'](w7biu['_null']);else try {
          this['_audio']['onEnded'](null), w7biu['_null'] = null;
        } catch (x1oys) {
          console['warn']('[wxmini] stop:' + x1oys), this['_audio']['onEnded'](dy582['bind'](this['__onNull'], this)), w7biu['_null'] = dy582['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, hd85['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, hd85['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, e6qc4k['addChannel'](this), this['_audio']['play']());
    }, jrga$_(0x0, hd85, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), jrga$_(0x0, hd85, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), jrga$_(0x0, hd85, 'volume', function () {
      return 0x1;
    }, function (v$c4z3) {}), w7biu['_null'] = void 0x0, w7biu;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (kqe946, p5dh2) {
  'use strict';

  for (var q96x0 in Object['defineProperty'](p5dh2, '__esModule', { 'value': !0x0 }), Laya) {
    var m7grb = Laya[q96x0];m7grb && m7grb['__isclass'] && (p5dh2[q96x0] = m7grb);
  }
});