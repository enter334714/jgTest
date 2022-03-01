var O = wx.$C;
!function (hwd0x, _nyav) {
  _nyav['un'], _nyav['uns'];var pc$8 = _nyav['static'],
      $pu8z = _nyav['class'],
      t5ocm = _nyav['getset'];_nyav['__newvec'];var sg_nfv = laya['utils']['Browser'],
      d9rz8 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      a2n6 = laya['resource']['HTMLImage'],
      hwq0 = laya['utils']['Handler'],
      ltopc5 = laya['display']['Input'],
      _6sna = laya['net']['Loader'];laya['maths']['Matrix'];var ys62 = laya['renders']['Render'],
      jw0hdx = laya['utils']['RunDriver'];laya['media']['Sound'];var bi2ya6 = laya['media']['SoundChannel'],
      rjz8$9 = laya['media']['SoundManager'],
      ae2ib6 = (laya['display']['Stage'], laya['net']['URL']),
      x17q = laya['utils']['Utils'];$pu8z(f_4vgn, 'laya.wx.mini.MiniAdpter'), f_4vgn['getJson'] = function (v_syng) {
    return JSON['parse'](v_syng);
  }, f_4vgn['init'] = function (v_nfg, u8rc$p) {
    void 0x0 === v_nfg && (v_nfg = !0x1), void 0x0 === u8rc$p && (u8rc$p = !0x1), f_4vgn['_inited'] || (f_4vgn['window'] = hwd0x)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (f_4vgn['_inited'] = !0x0, f_4vgn['isZiYu'] = u8rc$p, f_4vgn['isPosMsgYu'] = v_nfg, f_4vgn['EnvConfig'] = {}, f_4vgn['isZiYu'] || (y2i6ab['setNativeFileDir']('/layaairGame'), y2i6ab['existDir'](y2i6ab['fileNativeDir'], hwq0['create'](f_4vgn, f_4vgn['onMkdirCallBack']))), f_4vgn['window']['focus'] = function () {}, _nyav['getUrlPath'] = function () {}, f_4vgn['window']['logtime'] = function (n4vgf_) {}, f_4vgn['window']['alertTimeLog'] = function (prz$8u) {}, f_4vgn['window']['resetShareInfo'] = function () {}, f_4vgn['window']['CanvasRenderingContext2D'] = function () {}, f_4vgn['window']['CanvasRenderingContext2D']['prototype'] = f_4vgn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f_4vgn['window']['document']['body']['appendChild'] = function () {}, f_4vgn['EnvConfig']['pixelRatioInt'] = 0x0, jw0hdx['getPixelRatio'] = f_4vgn['pixelRatio'], f_4vgn['_preCreateElement'] = sg_nfv['createElement'], sg_nfv['createElement'] = f_4vgn['createElement'], jw0hdx['createShaderCondition'] = f_4vgn['createShaderCondition'], x17q['parseXMLFromString'] = f_4vgn['parseXMLFromString'], ltopc5['_createInputElement'] = h0w['_createInputElement'], f_4vgn['EnvConfig']['load'] = _6sna['prototype']['load'], _6sna['prototype']['load'] = n_f4['prototype']['load'], f_4vgn['isZiYu'] && v_nfg && wx['onMessage'](function (x713q) {
      x713q['isLoad'] && (y2i6ab['ziyuFileData'][x713q['url']] = x713q['data']);
    }));
  }, f_4vgn['onMkdirCallBack'] = function (bi6ae, fq34) {
    bi6ae || (y2i6ab['filesListObj'] = JSON['parse'](fq34['data']));
  }, f_4vgn['pixelRatio'] = function () {
    if (!f_4vgn['EnvConfig']['pixelRatioInt']) try {
      var p$r = wx['getSystemInfoSync']();return f_4vgn['EnvConfig']['pixelRatioInt'] = p$r['pixelRatio'], p$r['pixelRatio'];
    } catch (sav_y) {}return f_4vgn['EnvConfig']['pixelRatioInt'];
  }, f_4vgn['createElement'] = function (dw0j9) {
    return 'canvas' != dw0j9 ? 'textarea' == dw0j9 || 'input' == dw0j9 ? f_4vgn['onCreateInput'](dw0j9) : 'div' == dw0j9 ? ((cpl$5u = f_4vgn['_preCreateElement'](dw0j9))['contains'] = function (u$pl5) {
      return null;
    }, cpl$5u['removeChild'] = function (kt5ml) {}, cpl$5u) : f_4vgn['_preCreateElement'](dw0j9) : (0x1 == f_4vgn['idx'] ? f_4vgn['isZiYu'] ? (ul$c5 = sharedCanvas)['style'] = {} : ul$c5 = hwd0x['canvas'] : ul$c5 = hwd0x['wx']['createCanvas'](), f_4vgn['idx']++, ul$c5);var ul$c5, cpl$5u;
  }, f_4vgn['onCreateInput'] = function (zr9u) {
    return zr9u = f_4vgn['_preCreateElement'](zr9u), (zr9u['focus'] = h0w['wxinputFocus'], zr9u['blur'] = h0w['wxinputblur'], zr9u['style'] = {}, zr9u['value'] = 0x0, zr9u['parentElement'] = {}, zr9u['placeholder'] = {}, zr9u['type'] = {}, zr9u['setColor'] = function (dxwq0) {}, zr9u['setType'] = function (ny_sg) {}, zr9u['setFontFace'] = function (b6eia2) {}, zr9u['addEventListener'] = function (jr89dz) {}, zr9u['contains'] = function (_vnys) {
      return null;
    }, zr9u['removeChild'] = function (dz9rjh) {}, zr9u);
  }, f_4vgn['createShaderCondition'] = function (ayn6_) {
    var aybi = this;return function () {
      return aybi[ayn6_['replace']('this.', '')];
    };
  }, f_4vgn['EnvConfig'] = null, f_4vgn['window'] = null, f_4vgn['_preCreateElement'] = null, f_4vgn['_inited'] = !0x1, f_4vgn['wxRequest'] = null, f_4vgn['systemInfo'] = null, f_4vgn['version'] = '0.0.1', f_4vgn['isZiYu'] = !0x1, f_4vgn['isPosMsgYu'] = !0x1, f_4vgn['parseXMLFromString'] = function ($u5pc) {
    var $9ur8;$u5pc = $u5pc['replace'](/>\s+</g, '><');try {
      $9ur8 = new hwd0x['Parser']['DOMParser']()['parseFromString']($u5pc, 'text/xml');
    } catch (yn2s6) {
      throw '需要引入xml解析库文件';
    }return $9ur8;
  }, f_4vgn['idx'] = 0x1;var opl5u = f_4vgn;function f_4vgn() {}$pu8z(jzr$98, 'laya.wx.mini.MiniImage'), jzr$98['prototype']['_loadImage'] = function (s2ya6i) {
    var p8r$c = !0x1;-0x1 == s2ya6i['indexOf']('layaNativeDir/') && (p8r$c = !0x0, s2ya6i = ae2ib6['formatURL'](s2ya6i)), y2i6ab['getFileInfo'](s2ya6i) ? jzr$98['onCreateImage'](s2ya6i, this, !p8r$c) : -0x1 != s2ya6i['indexOf']('http://') || -0x1 != s2ya6i['indexOf']('https://') ? y2i6ab['downImg'](s2ya6i, new hwq0(jzr$98, jzr$98['onDownImgCallBack'], [s2ya6i, this]), s2ya6i) : jzr$98['onCreateImage'](s2ya6i, this, !0x0);
  }, jzr$98['onDownImgCallBack'] = function (hdz9r, djhz, x43q) {
    x43q ? djhz['onError'](null) : jzr$98['onCreateImage'](hdz9r, djhz);
  }, jzr$98['onCreateImage'] = function (dw9j, cru$p, gv34) {
    var r8cp;function hxqd0() {
      r8cp['onload'] = null, r8cp['onerror'] = null, delete cru$p['imgCache'][dw9j];
    }gv34 = (gv34 = void 0x0 === gv34 ? !0x1 : gv34) ? dw9j : (gv34 = y2i6ab['getFileInfo'](dw9j)['md5'], y2i6ab['getFileNativePath'](gv34)), null == cru$p['imgCache'] && (cru$p['imgCache'] = {});function gv413f() {
      hxqd0(), cru$p['onLoaded'](r8cp);
    }function v_4fgn() {
      hxqd0(), cru$p['event']('error', 'Load image failed');
    }'nativeimage' == cru$p['_type'] ? ((r8cp = new sg_nfv['window']['Image']())['crossOrigin'] = '', r8cp['onload'] = gv413f, r8cp['onerror'] = v_4fgn, r8cp['src'] = gv34, cru$p['imgCache'][dw9j] = r8cp) : new a2n6['create'](gv34, { 'onload': gv413f, 'onerror': v_4fgn, 'onCreate': function (hxdwj) {
        r8cp = hxdwj, cru$p['imgCache'][dw9j] = hxdwj;
      } });
  };function jzr$98() {}$pu8z(pcl5u, 'laya.wx.mini.MiniInput'), pcl5u['_createInputElement'] = function () {
    ltopc5['_initInput'](ltopc5['area'] = sg_nfv['createElement']('textarea')), ltopc5['_initInput'](ltopc5['input'] = sg_nfv['createElement']('input')), ltopc5['inputContainer'] = sg_nfv['createElement']('div'), ltopc5['inputContainer']['style']['position'] = 'absolute', ltopc5['inputContainer']['style']['zIndex'] = 0x186a0, sg_nfv['container']['appendChild'](ltopc5['inputContainer']), ltopc5['inputContainer']['setPos'] = function (_savn, mcl5to) {
      ltopc5['inputContainer']['style']['left'] = _savn + 'px', ltopc5['inputContainer']['style']['top'] = mcl5to + 'px';
    }, _nyav['stage']['on']('resize', null, pcl5u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gy_sn) {
      hwd0x['dispatchEvent'] && hwd0x['dispatchEvent']('resize');
    }), rjz8$9['_soundClass'] = wj0h9d, rjz8$9['_musicClass'] = wj0h9d;
  }, pcl5u['_onStageResize'] = function () {
    _nyav['stage']['_canvasTransform']['identity']()['scale'](sg_nfv['width'] / ys62['canvas']['width'] / jw0hdx['getPixelRatio'](), sg_nfv['height'] / ys62['canvas']['height'] / jw0hdx['getPixelRatio']());
  }, pcl5u['wxinputFocus'] = function (s62ai) {
    var na6ys = ltopc5['inputElement']['target'];na6ys && !na6ys['editable'] || (opl5u['window']['wx']['offKeyboardConfirm'](), opl5u['window']['wx']['offKeyboardInput'](), opl5u['window']['wx']['showKeyboard']({ 'defaultValue': na6ys['text'], 'maxLength': na6ys['maxChars'], 'multiple': na6ys['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (g4fv_n) {}, 'fail': function (lpu$c8) {} }), opl5u['window']['wx']['onKeyboardConfirm'](function (y6na2s) {
      y6na2s = y6na2s ? y6na2s['value'] : '', (na6ys['text'] = y6na2s, na6ys['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), opl5u['window']['wx']['onKeyboardInput'](function (dj09) {
      dj09 = dj09 ? dj09['value'] : '', na6ys['multiline'] || -0x1 == dj09['indexOf']('\x0a') ? (na6ys['text'] = dj09, na6ys['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, pcl5u['inputEnter'] = function () {
    ltopc5['inputElement']['target']['focus'] = !0x1;
  }, pcl5u['wxinputblur'] = function () {
    pcl5u['hideKeyboard']();
  }, pcl5u['hideKeyboard'] = function () {
    opl5u['window']['wx']['offKeyboardConfirm'](), opl5u['window']['wx']['offKeyboardInput'](), opl5u['window']['wx']['hideKeyboard']({ 'success': function (fg_4n) {
        console['log']('隐藏键盘');
      }, 'fail': function ($8r9uz) {
        console['log']('隐藏键盘出错:' + ($8r9uz ? $8r9uz['errMsg'] : ''));
      } });
  };var h0w = pcl5u;function pcl5u() {}$pu8z(rh9j, 'laya.wx.mini.MiniLoader'), (v1g4f = rh9j['prototype'])['load'] = function (r8$zj, wdxh0q, gv341, jdw0h9, lp$u8) {
    void 0x0 === gv341 && (gv341 = !0x0), void 0x0 === lp$u8 && (lp$u8 = !0x1);var w0dhq = this;0x0 === (w0dhq['_url'] = r8$zj)['indexOf']('data:image') ? w0dhq['_type'] = wdxh0q = 'image' : w0dhq['_type'] = wdxh0q = wdxh0q || w0dhq['getTypeFromUrl'](r8$zj), w0dhq['_cache'] = gv341, w0dhq['_data'] = null;var ie2a6b = 'ascii';-0x1 != r8$zj['indexOf']('.fnt') ? ie2a6b = 'utf8' : 'arraybuffer' == wdxh0q && (ie2a6b = '');var zrpu8 = x17q['getFileExtension'](r8$zj);if (-0x1 != rh9j['_fileTypeArr']['indexOf'](zrpu8)) opl5u['EnvConfig']['load']['call'](this, r8$zj, wdxh0q, gv341, jdw0h9, lp$u8);else {
      if (y2i6ab['getFileInfo'](r8$zj)) opl5u['EnvConfig']['load']['call'](this, r8$zj, wdxh0q, gv341, jdw0h9, lp$u8);else {
        if (-0x1 != r8$zj['indexOf']('layaNativeDir/')) return opl5u['isZiYu'] ? (zrpu8 = y2i6ab['ziyuFileData'][r8$zj], void w0dhq['onLoaded'](zrpu8)) : (cosnole['log']('read read'), void y2i6ab['read'](r8$zj, ie2a6b, new hwq0(rh9j, rh9j['onReadNativeCallBack'], [ie2a6b, r8$zj, wdxh0q, gv341, jdw0h9, lp$u8, w0dhq])));zrpu8 = '' == ae2ib6['rootPath'] ? r8$zj : r8$zj['split'](ae2ib6['rootPath'])[0x0], -0x1 != r8$zj['indexOf']('http://') || -0x1 != r8$zj['indexOf']('https://') ? opl5u['EnvConfig']['load']['call'](w0dhq, r8$zj, wdxh0q, gv341, jdw0h9, lp$u8) : y2i6ab['readFile'](zrpu8, ie2a6b, new hwq0(rh9j, rh9j['onReadNativeCallBack'], [ie2a6b, r8$zj, wdxh0q, gv341, jdw0h9, lp$u8, w0dhq]), r8$zj);
      }
    }
  }, v1g4f['resMgrLoad'] = function (f_3gv4, gns_vy, x7013, s6an_, j$9r8, vgfn, $pl8uc) {
    void 0x0 === x7013 && (x7013 = 0x0), void 0x0 === s6an_ && (s6an_ = !0x1), void 0x0 === j$9r8 && (j$9r8 = !0x1), void 0x0 === vgfn && (vgfn = 0x0), void 0x0 === $pl8uc && ($pl8uc = 0x3), -0x1 != f_3gv4['indexOf']('mpack') && console['log']('=============resMgrLoad url:', f_3gv4), opl5u['EnvConfig']['resMgrLoad'](f_3gv4, (z$9u8r, w9zjh, nvsg_f) => {
      rh9j['prototype']['resMgrLoadCallBack'](z$9u8r, w9zjh, nvsg_f, gns_vy);
    }, x7013, s6an_, j$9r8, vgfn, $pl8uc);
  }, v1g4f['resMgrLoadCallBack'] = function (z$8u9r, z9jdhw, clopt5, vs_fng) {
    console['log']('buff:::', z$8u9r, clopt5, y2i6ab['fileNativeDir'] + '///' + y2i6ab['fileListName']), vs_fng(z$8u9r, z9jdhw, clopt5);
  }, v1g4f['clearRes'] = function (m5clot, $lpcu8) {
    this['clearRes'](m5clot, $lpcu8 = void 0x0 === $lpcu8 ? !0x1 : $lpcu8), $lpcu8 = y2i6ab['getFileInfo'](m5clot), !$lpcu8 || -0x1 == m5clot['indexOf']('http://') && -0x1 == m5clot['indexOf']('https://') || (m5clot = $lpcu8['md5'], $lpcu8 = y2i6ab['getFileNativePath'](m5clot), y2i6ab['remove']($lpcu8));
  }, rh9j['onReadNativeCallBack'] = function (e6ba2i, a6i2y, ea62bi, wzdh, o5lcpt, rdj98, fnv_4g, tomk, fs) {
    void 0x0 === wzdh && (wzdh = !0x0), void 0x0 === rdj98 && (rdj98 = !0x1), (tomk = void 0x0 === tomk ? 0x0 : tomk) ? 0x1 == tomk && opl5u['EnvConfig']['load']['call'](fnv_4g, a6i2y, ea62bi, wzdh, o5lcpt, rdj98) : (tomk = 'json' == ea62bi || 'atlas' == ea62bi ? opl5u['getJson'](fs['data']) : 'xml' == ea62bi ? x17q['parseXMLFromString'](fs['data']) : fs['data'], fnv_4g['onLoaded'](tomk), !opl5u['isZiYu'] && opl5u['isPosMsgYu'] && 'arraybuffer' != ea62bi && wx['postMessage']({ 'url': a6i2y, 'data': tomk, 'isLoad': !0x0 }));
  }, pc$8(rh9j, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var n_f4 = rh9j;function rh9j() {}$pu8z(x41q37, 'laya.wx.mini.MiniFileMgr', d9rz8), x41q37['isLoadFile'] = function (locm5t) {
    return -0x1 != x41q37['_fileTypeArr']['indexOf'](locm5t);
  }, x41q37['getFileInfo'] = function (dhjw0x) {
    return dhjw0x = dhjw0x['split']('?')[0x0], dhjw0x = x41q37['filesListObj'][dhjw0x], null == dhjw0x ? null : dhjw0x;
  }, x41q37['onFileUpdate'] = function (ocplu5, na6s2) {
    ocplu5 = ocplu5['split']('/'), ocplu5 = ocplu5[ocplu5['length'] - 0x1];var i2y6ab = x41q37['getFileInfo'](na6s2);null == i2y6ab ? x41q37['onSaveFile'](na6s2, ocplu5) : i2y6ab['readyUrl'] != na6s2 && x41q37['remove'](ocplu5, na6s2);
  }, x41q37['exits'] = function (w7q0h, v4g31f) {
    w7q0h = x41q37['getFileNativePath'](w7q0h), x41q37['fs']['getFileInfo']({ 'filePath': w7q0h, 'success': function (ysia2) {
        null != v4g31f && v4g31f['runWith']([0x0, ysia2]);
      }, 'fail': function (xdw0h) {
        null != v4g31f && v4g31f['runWith']([0x1, xdw0h]);
      } });
  }, x41q37['read'] = function (aybi62, iby6a, ysnvg_, okmtl) {
    void 0x0 === iby6a && (iby6a = 'ascill'), aybi62 = '' != (okmtl = void 0x0 === okmtl ? '' : okmtl) ? x41q37['getFileNativePath'](aybi62) : aybi62, x41q37['fs']['readFile']({ 'filePath': aybi62, 'encoding': iby6a, 'success': function (is26ya) {
        null != ysnvg_ && ysnvg_['runWith']([0x0, is26ya]);
      }, 'fail': function (sgyv_) {
        sgyv_ && '' != okmtl ? x41q37['down'](okmtl, iby6a, ysnvg_, okmtl) : null != ysnvg_ && ysnvg_['runWith']([0x1]);
      } });
  }, x41q37['readNativeFile'] = function (okmt5, vngsf) {
    x41q37['fs']['readFile']({ 'filePath': okmt5, 'encoding': '', 'success': function (w0x7q) {
        null != vngsf && vngsf['runWith']([0x0]);
      }, 'fail': function (yng_vs) {
        null != vngsf && vngsf['runWith']([0x1]);
      } });
  }, x41q37['down'] = function (c$8u, jwd, cpo5lt, lmotk5) {
    void 0x0 === jwd && (jwd = 'ascill'), void 0x0 === lmotk5 && (lmotk5 = '');var u98$rz = x41q37['getFileNativePath'](lmotk5);x41q37['wxdown']({ 'url': c$8u, 'filePath': u98$rz, 'success': function (asv_yn) {
        0xc8 === asv_yn['statusCode'] && x41q37['readFile'](asv_yn['filePath'], jwd, cpo5lt, lmotk5);
      }, 'fail': function (ayvsn_) {
        null != cpo5lt && cpo5lt['runWith']([0x1, ayvsn_]);
      } })['onProgressUpdate'](function ($8upc) {
      null != cpo5lt && cpo5lt['runWith']([0x2, $8upc['progress']]);
    });
  }, x41q37['readFile'] = function (jz9$r8, zj$r89, fv4_, $ur8) {
    void 0x0 === $ur8 && ($ur8 = ''), x41q37['fs']['readFile']({ 'filePath': jz9$r8, 'encoding': zj$r89 = void 0x0 === zj$r89 ? 'ascill' : zj$r89, 'success': function (xwhqd0) {
        -0x1 == jz9$r8['indexOf']('http://') && -0x1 == jz9$r8['indexOf']('https://') || x41q37['onFileUpdate'](jz9$r8, $ur8), null != fv4_ && fv4_['runWith']([0x0, xwhqd0]);
      }, 'fail': function (wd0hjx) {
        wd0hjx && null != fv4_ && fv4_['runWith']([0x1, wd0hjx]);
      } });
  }, x41q37['downImg'] = function (_6na, z8j9r$, ruc8$) {
    void 0x0 === ruc8$ && (ruc8$ = ''), x41q37['wxdown']({ 'url': _6na, 'success': function (y_6asn) {
        0xc8 === y_6asn['statusCode'] && x41q37['copyFile'](y_6asn['tempFilePath'], ruc8$, z8j9r$);
      }, 'fail': function (vngy) {
        null != z8j9r$ && z8j9r$['runWith']([0x1, vngy]);
      } });
  }, x41q37['copyFile'] = function (vg314, _s6, _n6a) {
    var avs = vg314['split']('/'),
        cu5$p = avs[avs['length'] - 0x1];_s6['split']('?')[0x0];var $pru8z = x41q37['getFileInfo'](_s6);avs = x41q37['getFileNativePath'](cu5$p), x41q37['fs']['copyFile']({ 'srcPath': vg314, 'destPath': avs, 'success': function (h9wzj) {
        $pru8z ? $pru8z['readyUrl'] != _s6 && x41q37['remove'](cu5$p, _s6, _n6a) : (x41q37['onSaveFile'](_s6, cu5$p), null != _n6a && _n6a['runWith']([0x0]));
      }, 'fail': function (g_fn4) {
        null != _n6a && _n6a['runWith']([0x1, g_fn4]);
      } });
  }, x41q37['getFileNativePath'] = function (uc8l$p) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + uc8l$p;
  }, x41q37['remove'] = function (jz9$8, fv4_3, t5kom) {
    void 0x0 === fv4_3 && (fv4_3 = '');var p5luco = x41q37['getFileInfo'](fv4_3),
        qx7h0w = x41q37['getFileNativePath'](p5luco['md5']);_nyav['loader']['clearRes'](p5luco['readyUrl']), x41q37['fs']['unlink']({ 'filePath': qx7h0w, 'success': function (vnsy_g) {
        '' != fv4_3 && x41q37['onSaveFile'](fv4_3, jz9$8), null != t5kom && t5kom['runWith']([0x0]);
      }, 'fail': function (z$9rj8) {} });
  }, x41q37['onSaveFile'] = function (pcu8l$, ko5t) {
    var upc$8r = pcu8l$['split']('?')[0x0];x41q37['filesListObj'][upc$8r] = { 'md5': ko5t, 'readyUrl': pcu8l$ }, x41q37['fs']['writeFile']({ 'filePath': x41q37['fileNativeDir'] + '/' + x41q37['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x41q37['filesListObj']), 'success': function (x10q73) {
        console['log']('写入测试测试成功：', x10q73);
      }, 'fail': function (pculo) {
        console['log']('写入测试测试失败：', pculo);
      } });
  }, x41q37['existDir'] = function (abie, abiy2) {
    x41q37['fs']['mkdir']({ 'dirPath': abie, 'success': function (w0qx7) {
        null != abiy2 && abiy2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (c8ur$) {
        -0x1 != c8ur$['errMsg']['indexOf']('file already exists') ? x41q37['readSync'](x41q37['fileListName'], 'utf8', abiy2) : null != abiy2 && abiy2['runWith']([0x1, c8ur$]);
      } });
  }, x41q37['readSync'] = function (w701, wh7xq, x071, v14f3g) {
    void 0x0 === wh7xq && (wh7xq = 'ascill'), void 0x0 === v14f3g && (v14f3g = ''), wh7xq = x41q37['getFileNativePath'](w701);var yn2sa6;try {
      yn2sa6 = x41q37['fs']['readFileSync'](wh7xq), null != x071 && x071['runWith']([0x0, { 'data': yn2sa6 }]);
    } catch (yn6as_) {
      null != x071 && x071['runWith']([0x1]);
    }
  }, x41q37['readCache'] = function () {}, x41q37['writeCache'] = function (j0dxw) {
    var whzjd9 = readyUrl['split']('?')[0x0];x41q37['filesListObj'][whzjd9] = { 'md5': md5Name, 'readyUrl': readyUrl }, x41q37['fs']['writeFile']({ 'filePath': x41q37['fileNativeDir'] + '/' + x41q37['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](x41q37['filesListObj']), 'success': function (hjw9zd) {}, 'fail': function ($p8luc) {} });
  }, x41q37['setNativeFileDir'] = function (x0qdwh) {
    x41q37['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x0qdwh;
  }, x41q37['filesListObj'] = {}, x41q37['fileNativeDir'] = null, x41q37['fileListName'] = 'layaairfiles.txt', x41q37['ziyuFileData'] = {}, pc$8(x41q37, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var y2i6ab = x41q37;function x41q37() {
    x41q37['__super']['call'](this);
  }$pu8z(fsvn_g, 'laya.wx.mini.MiniSound', d9rz8), (v1g4f = fsvn_g['prototype'])['load'] = function (p$cl) {
    var w9 = this,
        c5oltm;function omclt5() {
      if (null != fsvn_g['_null']) w9['_sound']['onCanplay'](fsvn_g['_null']), w9['_sound']['onError'](fsvn_g['_null']);else try {
        w9['_sound']['onCanplay'](null), w9['_sound']['onError'](null), fsvn_g['_null'] = null;
      } catch (mo5ct) {
        console['warn']('[wxmini] _clearSound:' + mo5ct), w9['_sound']['onCanplay'](lupoc), w9['_sound']['onError'](lupoc), fsvn_g['_null'] = lupoc;
      }
    }function lupoc() {}p$cl = ae2ib6['formatURL'](p$cl), this['url'] = p$cl, fsvn_g['_audioCache'][p$cl] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      omclt5(), c5oltm['loaded'] = !0x0, c5oltm['event']('complete'), fsvn_g['_audioCache'][c5oltm['url']] = c5oltm;
    }), this['_sound']['onError'](function (n6s2ay) {
      console['error']('errCode=' + n6s2ay['errCode'] + '  errMsg=' + n6s2ay['errMsg']), omclt5(), c5oltm['event']('error');
    }), this['_sound']['src'] = p$cl, c5oltm = this);
  }, v1g4f['play'] = function (rjd98, v43g) {
    void 0x0 === rjd98 && (rjd98 = 0x0), void 0x0 === v43g && (v43g = 0x0), (nvfgs = this['url'] == rjz8$9['_tMusic'] ? (fsvn_g['_musicAudio'] || (fsvn_g['_musicAudio'] = fsvn_g['_createSound']()), fsvn_g['_musicAudio']) : fsvn_g['_createSound']())['src'] = this['url'];var nvfgs = new sy6na2(nvfgs);return nvfgs['url'] = this['url'], nvfgs['loops'] = v43g, nvfgs['startTime'] = rjd98, nvfgs['play'](), rjz8$9['addChannel'](nvfgs), nvfgs;
  }, v1g4f['dispose'] = function () {
    var lopuc = fsvn_g['_audioCache'][this['url']];lopuc && (lopuc['src'] = '', delete fsvn_g['_audioCache'][this['url']]);
  }, t5ocm(0x0, v1g4f, 'duration', function () {
    return this['_sound']['duration'];
  }), fsvn_g['_createSound'] = function () {
    return fsvn_g['_id']++, opl5u['window']['wx']['createInnerAudioContext']();
  }, fsvn_g['_musicAudio'] = null, fsvn_g['_id'] = 0x0, fsvn_g['_audioCache'] = {}, fsvn_g['_null'] = void 0x0;var wj0h9d = fsvn_g;function fsvn_g() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, fsvn_g['__super']['call'](this), this['_sound'] = fsvn_g['_createSound']();
  }var v1g4f;$pu8z(f4vng, 'laya.wx.mini.MiniSoundChannel', bi2ya6), (pc$8 = f4vng['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (_nyav['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, pc$8['__onNull'] = function () {}, pc$8['play'] = function () {
    this['isStopped'] = !0x1, rjz8$9['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, pc$8['stop'] = function () {
    if (this['isStopped'] = !0x0, rjz8$9['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != f4vng['_null']) this['_audio']['onEnded'](f4vng['_null']);else try {
        this['_audio']['onEnded'](null), f4vng['_null'] = null;
      } catch (ansy_6) {
        console['warn']('[wxmini] stop:' + ansy_6), this['_audio']['onEnded'](x17q['bind'](this['__onNull'], this)), f4vng['_null'] = x17q['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, pc$8['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, pc$8['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, rjz8$9['addChannel'](this), this['_audio']['play']());
  }, t5ocm(0x0, pc$8, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), t5ocm(0x0, pc$8, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), t5ocm(0x0, pc$8, 'volume', function () {
    return 0x1;
  }, function (o5tcpl) {}), f4vng['_null'] = void 0x0;var sy6na2 = f4vng;function f4vng(xq341) {
    this['_audio'] = null, this['_onEnd'] = null, f4vng['__super']['call'](this), this['_audio'] = xq341, this['_onEnd'] = x17q['bind'](this['__onEnd'], this), xq341['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (djxh0w, u8pl$) {
  'use strict';

  for (var l$p8c in Object['defineProperty'](u8pl$, '__esModule', { 'value': !0x0 }), Laya) {
    var wzjdh = Laya[l$p8c];wzjdh && wzjdh['__isclass'] && (u8pl$[l$p8c] = wzjdh);
  }
});