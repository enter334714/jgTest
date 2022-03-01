var g = wx.$Q;
!function (wj1hs8, rtzkc) {
  rtzkc['un'], rtzkc['uns'];var bai = rtzkc['static'],
      plf0x = rtzkc['class'],
      ydktc = rtzkc['getset'];rtzkc['__newvec'];var j8ushw = laya['utils']['Browser'],
      kdt5cy = (laya['events']['Event'], laya['events']['EventDispatcher']),
      uj8 = laya['resource']['HTMLImage'],
      zc$td = laya['utils']['Handler'],
      m9n = laya['display']['Input'],
      a0f = laya['net']['Loader'];laya['maths']['Matrix'];var j1mh8 = laya['renders']['Render'],
      z$eo_9 = laya['utils']['RunDriver'];laya['media']['Sound'];var x23k5y = laya['media']['SoundChannel'],
      _zc$dr = laya['media']['SoundManager'],
      tzcrk = (laya['display']['Stage'], laya['net']['URL']),
      ytx5k3 = laya['utils']['Utils'];plf0x(gflp0a, 'laya.wx.mini.MiniAdpter'), gflp0a['getJson'] = function (on6_e) {
    return JSON['parse'](on6_e);
  }, gflp0a['init'] = function (pglabf, cyktdr) {
    void 0x0 === pglabf && (pglabf = !0x1), void 0x0 === cyktdr && (cyktdr = !0x1), gflp0a['_inited'] || (gflp0a['window'] = wj1hs8)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (gflp0a['_inited'] = !0x0, gflp0a['isZiYu'] = cyktdr, gflp0a['isPosMsgYu'] = pglabf, gflp0a['EnvConfig'] = {}, gflp0a['isZiYu'] || (rtykdc['setNativeFileDir']('/layaairGame'), rtykdc['existDir'](rtykdc['fileNativeDir'], zc$td['create'](gflp0a, gflp0a['onMkdirCallBack']))), gflp0a['window']['focus'] = function () {}, rtzkc['getUrlPath'] = function () {}, gflp0a['window']['logtime'] = function (xf032p) {}, gflp0a['window']['alertTimeLog'] = function (jqwu8s) {}, gflp0a['window']['resetShareInfo'] = function () {}, gflp0a['window']['CanvasRenderingContext2D'] = function () {}, gflp0a['window']['CanvasRenderingContext2D']['prototype'] = gflp0a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gflp0a['window']['document']['body']['appendChild'] = function () {}, gflp0a['EnvConfig']['pixelRatioInt'] = 0x0, z$eo_9['getPixelRatio'] = gflp0a['pixelRatio'], gflp0a['_preCreateElement'] = j8ushw['createElement'], j8ushw['createElement'] = gflp0a['createElement'], z$eo_9['createShaderCondition'] = gflp0a['createShaderCondition'], ytx5k3['parseXMLFromString'] = gflp0a['parseXMLFromString'], m9n['_createInputElement'] = _zdr$['_createInputElement'], gflp0a['EnvConfig']['load'] = a0f['prototype']['load'], a0f['prototype']['load'] = h8s4j['prototype']['load'], gflp0a['isZiYu'] && pglabf && wx['onMessage'](function (xl2p0) {
      xl2p0['isLoad'] && (rtykdc['ziyuFileData'][xl2p0['url']] = xl2p0['data']);
    }));
  }, gflp0a['onMkdirCallBack'] = function (qusj8, m4jh8) {
    qusj8 || (rtykdc['filesListObj'] = JSON['parse'](m4jh8['data']));
  }, gflp0a['pixelRatio'] = function () {
    if (!gflp0a['EnvConfig']['pixelRatioInt']) try {
      var af0pgl = wx['getSystemInfoSync']();return gflp0a['EnvConfig']['pixelRatioInt'] = af0pgl['pixelRatio'], af0pgl['pixelRatio'];
    } catch (plfa0) {}return gflp0a['EnvConfig']['pixelRatioInt'];
  }, gflp0a['createElement'] = function (rdckz) {
    return 'canvas' != rdckz ? 'textarea' == rdckz || 'input' == rdckz ? gflp0a['onCreateInput'](rdckz) : 'div' == rdckz ? ((neo_96 = gflp0a['_preCreateElement'](rdckz))['contains'] = function (gv7iab) {
      return null;
    }, neo_96['removeChild'] = function (wh8s1) {}, neo_96) : gflp0a['_preCreateElement'](rdckz) : (0x1 == gflp0a['idx'] ? gflp0a['isZiYu'] ? (h8s14j = sharedCanvas)['style'] = {} : h8s14j = wj1hs8['canvas'] : h8s14j = wj1hs8['wx']['createCanvas'](), gflp0a['idx']++, h8s14j);var h8s14j, neo_96;
  }, gflp0a['onCreateInput'] = function (_9oe6) {
    return _9oe6 = gflp0a['_preCreateElement'](_9oe6), (_9oe6['focus'] = _zdr$['wxinputFocus'], _9oe6['blur'] = _zdr$['wxinputblur'], _9oe6['style'] = {}, _9oe6['value'] = 0x0, _9oe6['parentElement'] = {}, _9oe6['placeholder'] = {}, _9oe6['type'] = {}, _9oe6['setColor'] = function (d$er_z) {}, _9oe6['setType'] = function (bgiva) {}, _9oe6['setFontFace'] = function (tc53k) {}, _9oe6['addEventListener'] = function (dczr_) {}, _9oe6['contains'] = function (_e$z9) {
      return null;
    }, _9oe6['removeChild'] = function (yxk3) {}, _9oe6);
  }, gflp0a['createShaderCondition'] = function (gbfapl) {
    var al0gf = this;return function () {
      return al0gf[gbfapl['replace']('this.', '')];
    };
  }, gflp0a['EnvConfig'] = null, gflp0a['window'] = null, gflp0a['_preCreateElement'] = null, gflp0a['_inited'] = !0x1, gflp0a['wxRequest'] = null, gflp0a['systemInfo'] = null, gflp0a['version'] = '0.0.1', gflp0a['isZiYu'] = !0x1, gflp0a['isPosMsgYu'] = !0x1, gflp0a['parseXMLFromString'] = function (_zc$r) {
    var qj8uw;_zc$r = _zc$r['replace'](/>\s+</g, '><');try {
      qj8uw = new wj1hs8['Parser']['DOMParser']()['parseFromString'](_zc$r, 'text/xml');
    } catch (dzr_e$) {
      throw '需要引入xml解析库文件';
    }return qj8uw;
  }, gflp0a['idx'] = 0x1;var e96mon = gflp0a;function gflp0a() {}plf0x(x2f50, 'laya.wx.mini.MiniImage'), x2f50['prototype']['_loadImage'] = function (e_z$d) {
    var u8wjq = !0x1;-0x1 == e_z$d['indexOf']('layaNativeDir/') && (u8wjq = !0x0, e_z$d = tzcrk['formatURL'](e_z$d)), rtykdc['getFileInfo'](e_z$d) ? x2f50['onCreateImage'](e_z$d, this, !u8wjq) : -0x1 != e_z$d['indexOf']('http://') || -0x1 != e_z$d['indexOf']('https://') ? rtykdc['downImg'](e_z$d, new zc$td(x2f50, x2f50['onDownImgCallBack'], [e_z$d, this]), e_z$d) : x2f50['onCreateImage'](e_z$d, this, !0x0);
  }, x2f50['onDownImgCallBack'] = function (f0x2lp, zcrdtk, paglbf) {
    paglbf ? zcrdtk['onError'](null) : x2f50['onCreateImage'](f0x2lp, zcrdtk);
  }, x2f50['onCreateImage'] = function (t5kcyd, red$z, nh461m) {
    var fx0532;function kyx3t5() {
      fx0532['onload'] = null, fx0532['onerror'] = null, delete red$z['imgCache'][t5kcyd];
    }nh461m = (nh461m = void 0x0 === nh461m ? !0x1 : nh461m) ? t5kcyd : (nh461m = rtykdc['getFileInfo'](t5kcyd)['md5'], rtykdc['getFileNativePath'](nh461m)), null == red$z['imgCache'] && (red$z['imgCache'] = {});function nmo6e9() {
      kyx3t5(), red$z['onLoaded'](fx0532);
    }function plx02f() {
      kyx3t5(), red$z['event']('error', 'Load image failed');
    }'nativeimage' == red$z['_type'] ? ((fx0532 = new j8ushw['window']['Image']())['crossOrigin'] = '', fx0532['onload'] = nmo6e9, fx0532['onerror'] = plx02f, fx0532['src'] = nh461m, red$z['imgCache'][t5kcyd] = fx0532) : new uj8['create'](nh461m, { 'onload': nmo6e9, 'onerror': plx02f, 'onCreate': function (ckdrzt) {
        fx0532 = ckdrzt, red$z['imgCache'][t5kcyd] = ckdrzt;
      } });
  };function x2f50() {}plf0x(e6on_9, 'laya.wx.mini.MiniInput'), e6on_9['_createInputElement'] = function () {
    m9n['_initInput'](m9n['area'] = j8ushw['createElement']('textarea')), m9n['_initInput'](m9n['input'] = j8ushw['createElement']('input')), m9n['inputContainer'] = j8ushw['createElement']('div'), m9n['inputContainer']['style']['position'] = 'absolute', m9n['inputContainer']['style']['zIndex'] = 0x186a0, j8ushw['container']['appendChild'](m9n['inputContainer']), m9n['inputContainer']['setPos'] = function (c$r_d, paglf) {
      m9n['inputContainer']['style']['left'] = c$r_d + 'px', m9n['inputContainer']['style']['top'] = paglf + 'px';
    }, rtzkc['stage']['on']('resize', null, e6on_9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (omn694) {
      wj1hs8['dispatchEvent'] && wj1hs8['dispatchEvent']('resize');
    }), _zc$dr['_soundClass'] = rze$d, _zc$dr['_musicClass'] = rze$d;
  }, e6on_9['_onStageResize'] = function () {
    rtzkc['stage']['_canvasTransform']['identity']()['scale'](j8ushw['width'] / j1mh8['canvas']['width'] / z$eo_9['getPixelRatio'](), j8ushw['height'] / j1mh8['canvas']['height'] / z$eo_9['getPixelRatio']());
  }, e6on_9['wxinputFocus'] = function (mno694) {
    var xk2 = m9n['inputElement']['target'];xk2 && !xk2['editable'] || (e96mon['window']['wx']['offKeyboardConfirm'](), e96mon['window']['wx']['offKeyboardInput'](), e96mon['window']['wx']['showKeyboard']({ 'defaultValue': xk2['text'], 'maxLength': xk2['maxChars'], 'multiple': xk2['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (labvig) {}, 'fail': function (fx253) {} }), e96mon['window']['wx']['onKeyboardConfirm'](function (z$cdr_) {
      z$cdr_ = z$cdr_ ? z$cdr_['value'] : '', (xk2['text'] = z$cdr_, xk2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), e96mon['window']['wx']['onKeyboardInput'](function (bv7a) {
      bv7a = bv7a ? bv7a['value'] : '', xk2['multiline'] || -0x1 == bv7a['indexOf']('\x0a') ? (xk2['text'] = bv7a, xk2['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, e6on_9['inputEnter'] = function () {
    m9n['inputElement']['target']['focus'] = !0x1;
  }, e6on_9['wxinputblur'] = function () {
    e6on_9['hideKeyboard']();
  }, e6on_9['hideKeyboard'] = function () {
    e96mon['window']['wx']['offKeyboardConfirm'](), e96mon['window']['wx']['offKeyboardInput'](), e96mon['window']['wx']['hideKeyboard']({ 'success': function (ipbalg) {
        console['log']('隐藏键盘');
      }, 'fail': function (cty35k) {
        console['log']('隐藏键盘出错:' + (cty35k ? cty35k['errMsg'] : ''));
      } });
  };var _zdr$ = e6on_9;function e6on_9() {}plf0x(dtcy, 'laya.wx.mini.MiniLoader'), ($ctrdz = dtcy['prototype'])['load'] = function (kx5y23, uswq, cdrzkt, tzkdrc, k5tcd) {
    void 0x0 === cdrzkt && (cdrzkt = !0x0), void 0x0 === k5tcd && (k5tcd = !0x1);var n1hm46 = this;0x0 === (n1hm46['_url'] = kx5y23)['indexOf']('data:image') ? n1hm46['_type'] = uswq = 'image' : n1hm46['_type'] = uswq = uswq || n1hm46['getTypeFromUrl'](kx5y23), n1hm46['_cache'] = cdrzkt, n1hm46['_data'] = null;var rtczd = 'ascii';-0x1 != kx5y23['indexOf']('.fnt') ? rtczd = 'utf8' : 'arraybuffer' == uswq && (rtczd = '');var zrd_ = ytx5k3['getFileExtension'](kx5y23);if (-0x1 != dtcy['_fileTypeArr']['indexOf'](zrd_)) e96mon['EnvConfig']['load']['call'](this, kx5y23, uswq, cdrzkt, tzkdrc, k5tcd);else {
      if (rtykdc['getFileInfo'](kx5y23)) e96mon['EnvConfig']['load']['call'](this, kx5y23, uswq, cdrzkt, tzkdrc, k5tcd);else {
        if (-0x1 != kx5y23['indexOf']('layaNativeDir/')) return e96mon['isZiYu'] ? (zrd_ = rtykdc['ziyuFileData'][kx5y23], void n1hm46['onLoaded'](zrd_)) : (cosnole['log']('read read'), void rtykdc['read'](kx5y23, rtczd, new zc$td(dtcy, dtcy['onReadNativeCallBack'], [rtczd, kx5y23, uswq, cdrzkt, tzkdrc, k5tcd, n1hm46])));zrd_ = '' == tzcrk['rootPath'] ? kx5y23 : kx5y23['split'](tzcrk['rootPath'])[0x0], -0x1 != kx5y23['indexOf']('http://') || -0x1 != kx5y23['indexOf']('https://') ? e96mon['EnvConfig']['load']['call'](n1hm46, kx5y23, uswq, cdrzkt, tzkdrc, k5tcd) : rtykdc['readFile'](zrd_, rtczd, new zc$td(dtcy, dtcy['onReadNativeCallBack'], [rtczd, kx5y23, uswq, cdrzkt, tzkdrc, k5tcd, n1hm46]), kx5y23);
      }
    }
  }, $ctrdz['resMgrLoad'] = function ($_9zeo, re_d$, vi7gb, hsj41, aiv7gb, ze$d_r, o6mn14) {
    void 0x0 === vi7gb && (vi7gb = 0x0), void 0x0 === hsj41 && (hsj41 = !0x1), void 0x0 === aiv7gb && (aiv7gb = !0x1), void 0x0 === ze$d_r && (ze$d_r = 0x0), void 0x0 === o6mn14 && (o6mn14 = 0x3), -0x1 != $_9zeo['indexOf']('mpack') && console['log']('=============resMgrLoad url:', $_9zeo), e96mon['EnvConfig']['resMgrLoad']($_9zeo, (j8mh4, shjwu8, lxp20f) => {
      dtcy['prototype']['resMgrLoadCallBack'](j8mh4, shjwu8, lxp20f, re_d$);
    }, vi7gb, hsj41, aiv7gb, ze$d_r, o6mn14);
  }, $ctrdz['resMgrLoadCallBack'] = function (d5tck, n496m, y2kx3, agil) {
    console['log']('buff:::', d5tck, y2kx3, rtykdc['fileNativeDir'] + '///' + rtykdc['fileListName']), agil(d5tck, n496m, y2kx3);
  }, $ctrdz['clearRes'] = function ($zerd_, rcd_$) {
    this['clearRes']($zerd_, rcd_$ = void 0x0 === rcd_$ ? !0x1 : rcd_$), rcd_$ = rtykdc['getFileInfo']($zerd_), !rcd_$ || -0x1 == $zerd_['indexOf']('http://') && -0x1 == $zerd_['indexOf']('https://') || ($zerd_ = rcd_$['md5'], rcd_$ = rtykdc['getFileNativePath']($zerd_), rtykdc['remove'](rcd_$));
  }, dtcy['onReadNativeCallBack'] = function (_ne, o9_e$, ujw8hs, p0fal, kytx35, m6h4n, $crz, kyx, j8wsuh) {
    void 0x0 === p0fal && (p0fal = !0x0), void 0x0 === m6h4n && (m6h4n = !0x1), (kyx = void 0x0 === kyx ? 0x0 : kyx) ? 0x1 == kyx && e96mon['EnvConfig']['load']['call']($crz, o9_e$, ujw8hs, p0fal, kytx35, m6h4n) : (kyx = 'json' == ujw8hs || 'atlas' == ujw8hs ? e96mon['getJson'](j8wsuh['data']) : 'xml' == ujw8hs ? ytx5k3['parseXMLFromString'](j8wsuh['data']) : j8wsuh['data'], $crz['onLoaded'](kyx), !e96mon['isZiYu'] && e96mon['isPosMsgYu'] && 'arraybuffer' != ujw8hs && wx['postMessage']({ 'url': o9_e$, 'data': kyx, 'isLoad': !0x0 }));
  }, bai(dtcy, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var h8s4j = dtcy;function dtcy() {}plf0x(gbailp, 'laya.wx.mini.MiniFileMgr', kdt5cy), gbailp['isLoadFile'] = function (s1j8h4) {
    return -0x1 != gbailp['_fileTypeArr']['indexOf'](s1j8h4);
  }, gbailp['getFileInfo'] = function (pfal0g) {
    return pfal0g = pfal0g['split']('?')[0x0], pfal0g = gbailp['filesListObj'][pfal0g], null == pfal0g ? null : pfal0g;
  }, gbailp['onFileUpdate'] = function (yt35k, ytkx5) {
    yt35k = yt35k['split']('/'), yt35k = yt35k[yt35k['length'] - 0x1];var ilbavg = gbailp['getFileInfo'](ytkx5);null == ilbavg ? gbailp['onSaveFile'](ytkx5, yt35k) : ilbavg['readyUrl'] != ytkx5 && gbailp['remove'](yt35k, ytkx5);
  }, gbailp['exits'] = function (z_9re$, h846) {
    z_9re$ = gbailp['getFileNativePath'](z_9re$), gbailp['fs']['getFileInfo']({ 'filePath': z_9re$, 'success': function (f20x) {
        null != h846 && h846['runWith']([0x0, f20x]);
      }, 'fail': function (e6on9) {
        null != h846 && h846['runWith']([0x1, e6on9]);
      } });
  }, gbailp['read'] = function (dktrcy, zrdk, pxf, hm1j) {
    void 0x0 === zrdk && (zrdk = 'ascill'), dktrcy = '' != (hm1j = void 0x0 === hm1j ? '' : hm1j) ? gbailp['getFileNativePath'](dktrcy) : dktrcy, gbailp['fs']['readFile']({ 'filePath': dktrcy, 'encoding': zrdk, 'success': function (a0fg) {
        null != pxf && pxf['runWith']([0x0, a0fg]);
      }, 'fail': function (f0glp) {
        f0glp && '' != hm1j ? gbailp['down'](hm1j, zrdk, pxf, hm1j) : null != pxf && pxf['runWith']([0x1]);
      } });
  }, gbailp['readNativeFile'] = function (lfa2, c3ykt5) {
    gbailp['fs']['readFile']({ 'filePath': lfa2, 'encoding': '', 'success': function (z$9e_o) {
        null != c3ykt5 && c3ykt5['runWith']([0x0]);
      }, 'fail': function (c_$rzd) {
        null != c3ykt5 && c3ykt5['runWith']([0x1]);
      } });
  }, gbailp['down'] = function (falbp, ib, ibgalv, ryt) {
    void 0x0 === ib && (ib = 'ascill'), void 0x0 === ryt && (ryt = '');var sjh8u = gbailp['getFileNativePath'](ryt);gbailp['wxdown']({ 'url': falbp, 'filePath': sjh8u, 'success': function (o9$_ze) {
        0xc8 === o9$_ze['statusCode'] && gbailp['readFile'](o9$_ze['filePath'], ib, ibgalv, ryt);
      }, 'fail': function (z$9eo) {
        null != ibgalv && ibgalv['runWith']([0x1, z$9eo]);
      } })['onProgressUpdate'](function (bvigla) {
      null != ibgalv && ibgalv['runWith']([0x2, bvigla['progress']]);
    });
  }, gbailp['readFile'] = function (px23f0, apgfl0, hjw1s, y5ktc) {
    void 0x0 === y5ktc && (y5ktc = ''), gbailp['fs']['readFile']({ 'filePath': px23f0, 'encoding': apgfl0 = void 0x0 === apgfl0 ? 'ascill' : apgfl0, 'success': function (h41s8j) {
        -0x1 == px23f0['indexOf']('http://') && -0x1 == px23f0['indexOf']('https://') || gbailp['onFileUpdate'](px23f0, y5ktc), null != hjw1s && hjw1s['runWith']([0x0, h41s8j]);
      }, 'fail': function (yk253) {
        yk253 && null != hjw1s && hjw1s['runWith']([0x1, yk253]);
      } });
  }, gbailp['downImg'] = function (o1n4m, e_r$z9, vlibga) {
    void 0x0 === vlibga && (vlibga = ''), gbailp['wxdown']({ 'url': o1n4m, 'success': function (dzrkt) {
        0xc8 === dzrkt['statusCode'] && gbailp['copyFile'](dzrkt['tempFilePath'], vlibga, e_r$z9);
      }, 'fail': function (glavib) {
        null != e_r$z9 && e_r$z9['runWith']([0x1, glavib]);
      } });
  }, gbailp['copyFile'] = function (blaipg, $n9eo, z$_r9e) {
    var sjq8w = blaipg['split']('/'),
        pfx20 = sjq8w[sjq8w['length'] - 0x1];$n9eo['split']('?')[0x0];var e_dzr$ = gbailp['getFileInfo']($n9eo);sjq8w = gbailp['getFileNativePath'](pfx20), gbailp['fs']['copyFile']({ 'srcPath': blaipg, 'destPath': sjq8w, 'success': function (x2y530) {
        e_dzr$ ? e_dzr$['readyUrl'] != $n9eo && gbailp['remove'](pfx20, $n9eo, z$_r9e) : (gbailp['onSaveFile']($n9eo, pfx20), null != z$_r9e && z$_r9e['runWith']([0x0]));
      }, 'fail': function (pafbg) {
        null != z$_r9e && z$_r9e['runWith']([0x1, pafbg]);
      } });
  }, gbailp['getFileNativePath'] = function (y5x302) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y5x302;
  }, gbailp['remove'] = function (y3t, ibglv, pibgal) {
    void 0x0 === ibglv && (ibglv = '');var w8usj = gbailp['getFileInfo'](ibglv),
        lafp2 = gbailp['getFileNativePath'](w8usj['md5']);rtzkc['loader']['clearRes'](w8usj['readyUrl']), gbailp['fs']['unlink']({ 'filePath': lafp2, 'success': function (bagv7i) {
        '' != ibglv && gbailp['onSaveFile'](ibglv, y3t), null != pibgal && pibgal['runWith']([0x0]);
      }, 'fail': function (vblgia) {} });
  }, gbailp['onSaveFile'] = function (balfg, zeo$9) {
    var _69o = balfg['split']('?')[0x0];gbailp['filesListObj'][_69o] = { 'md5': zeo$9, 'readyUrl': balfg }, gbailp['fs']['writeFile']({ 'filePath': gbailp['fileNativeDir'] + '/' + gbailp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gbailp['filesListObj']), 'success': function (h81wjs) {
        console['log']('写入测试测试成功：', h81wjs);
      }, 'fail': function (x5yk3) {
        console['log']('写入测试测试失败：', x5yk3);
      } });
  }, gbailp['existDir'] = function (tyrdck, nh6m41) {
    gbailp['fs']['mkdir']({ 'dirPath': tyrdck, 'success': function ($r9z_) {
        null != nh6m41 && nh6m41['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (dyc) {
        -0x1 != dyc['errMsg']['indexOf']('file already exists') ? gbailp['readSync'](gbailp['fileListName'], 'utf8', nh6m41) : null != nh6m41 && nh6m41['runWith']([0x1, dyc]);
      } });
  }, gbailp['readSync'] = function (_dz$c, rcdtzk, ilabv, o_e6n9) {
    void 0x0 === rcdtzk && (rcdtzk = 'ascill'), void 0x0 === o_e6n9 && (o_e6n9 = ''), rcdtzk = gbailp['getFileNativePath'](_dz$c);var yc5k;try {
      yc5k = gbailp['fs']['readFileSync'](rcdtzk), null != ilabv && ilabv['runWith']([0x0, { 'data': yc5k }]);
    } catch ($9oz_) {
      null != ilabv && ilabv['runWith']([0x1]);
    }
  }, gbailp['readCache'] = function () {}, gbailp['writeCache'] = function (alpf20) {
    var qjwu = readyUrl['split']('?')[0x0];gbailp['filesListObj'][qjwu] = { 'md5': md5Name, 'readyUrl': readyUrl }, gbailp['fs']['writeFile']({ 'filePath': gbailp['fileNativeDir'] + '/' + gbailp['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](gbailp['filesListObj']), 'success': function (n6_9) {}, 'fail': function (zer_$) {} });
  }, gbailp['setNativeFileDir'] = function (yk5dt) {
    gbailp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yk5dt;
  }, gbailp['filesListObj'] = {}, gbailp['fileNativeDir'] = null, gbailp['fileListName'] = 'layaairfiles.txt', gbailp['ziyuFileData'] = {}, bai(gbailp, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var rtykdc = gbailp;function gbailp() {
    gbailp['__super']['call'](this);
  }plf0x(hjws18, 'laya.wx.mini.MiniSound', kdt5cy), ($ctrdz = hjws18['prototype'])['load'] = function (blgaip) {
    var w8qsj = this,
        h4j8s1;function fgap0() {
      if (null != hjws18['_null']) w8qsj['_sound']['onCanplay'](hjws18['_null']), w8qsj['_sound']['onError'](hjws18['_null']);else try {
        w8qsj['_sound']['onCanplay'](null), w8qsj['_sound']['onError'](null), hjws18['_null'] = null;
      } catch (xy2053) {
        console['warn']('[wxmini] _clearSound:' + xy2053), w8qsj['_sound']['onCanplay'](r$_dez), w8qsj['_sound']['onError'](r$_dez), hjws18['_null'] = r$_dez;
      }
    }function r$_dez() {}blgaip = tzcrk['formatURL'](blgaip), this['url'] = blgaip, hjws18['_audioCache'][blgaip] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      fgap0(), h4j8s1['loaded'] = !0x0, h4j8s1['event']('complete'), hjws18['_audioCache'][h4j8s1['url']] = h4j8s1;
    }), this['_sound']['onError'](function (xkyt53) {
      console['error']('errCode=' + xkyt53['errCode'] + '  errMsg=' + xkyt53['errMsg']), fgap0(), h4j8s1['event']('error');
    }), this['_sound']['src'] = blgaip, h4j8s1 = this);
  }, $ctrdz['play'] = function (lgbiva, sh1j48) {
    void 0x0 === lgbiva && (lgbiva = 0x0), void 0x0 === sh1j48 && (sh1j48 = 0x0), (gblfp = this['url'] == _zc$dr['_tMusic'] ? (hjws18['_musicAudio'] || (hjws18['_musicAudio'] = hjws18['_createSound']()), hjws18['_musicAudio']) : hjws18['_createSound']())['src'] = this['url'];var gblfp = new $_rdzc(gblfp);return gblfp['url'] = this['url'], gblfp['loops'] = sh1j48, gblfp['startTime'] = lgbiva, gblfp['play'](), _zc$dr['addChannel'](gblfp), gblfp;
  }, $ctrdz['dispose'] = function () {
    var $zre_d = hjws18['_audioCache'][this['url']];$zre_d && ($zre_d['src'] = '', delete hjws18['_audioCache'][this['url']]);
  }, ydktc(0x0, $ctrdz, 'duration', function () {
    return this['_sound']['duration'];
  }), hjws18['_createSound'] = function () {
    return hjws18['_id']++, e96mon['window']['wx']['createInnerAudioContext']();
  }, hjws18['_musicAudio'] = null, hjws18['_id'] = 0x0, hjws18['_audioCache'] = {}, hjws18['_null'] = void 0x0;var rze$d = hjws18;function hjws18() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, hjws18['__super']['call'](this), this['_sound'] = hjws18['_createSound']();
  }var $ctrdz;plf0x(juqws, 'laya.wx.mini.MiniSoundChannel', x23k5y), (bai = juqws['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (rtzkc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, bai['__onNull'] = function () {}, bai['play'] = function () {
    this['isStopped'] = !0x1, _zc$dr['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, bai['stop'] = function () {
    if (this['isStopped'] = !0x0, _zc$dr['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != juqws['_null']) this['_audio']['onEnded'](juqws['_null']);else try {
        this['_audio']['onEnded'](null), juqws['_null'] = null;
      } catch (zr_d$c) {
        console['warn']('[wxmini] stop:' + zr_d$c), this['_audio']['onEnded'](ytx5k3['bind'](this['__onNull'], this)), juqws['_null'] = ytx5k3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, bai['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, bai['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, _zc$dr['addChannel'](this), this['_audio']['play']());
  }, ydktc(0x0, bai, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), ydktc(0x0, bai, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), ydktc(0x0, bai, 'volume', function () {
    return 0x1;
  }, function (aivb) {}), juqws['_null'] = void 0x0;var $_rdzc = juqws;function juqws(mneo96) {
    this['_audio'] = null, this['_onEnd'] = null, juqws['__super']['call'](this), this['_audio'] = mneo96, this['_onEnd'] = ytx5k3['bind'](this['__onEnd'], this), mneo96['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (m48j1h, hsw1j) {
  'use strict';

  for (var p3f0x in Object['defineProperty'](hsw1j, '__esModule', { 'value': !0x0 }), Laya) {
    var qj8 = Laya[p3f0x];qj8 && qj8['__isclass'] && (hsw1j[p3f0x] = qj8);
  }
});