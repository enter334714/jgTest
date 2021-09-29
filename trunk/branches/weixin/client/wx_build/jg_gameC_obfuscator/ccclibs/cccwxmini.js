var p = wx.$h;
!function (wa$6j, w$_hc) {
  w$_hc['un'], w$_hc['uns'];var stc = w$_hc['static'],
      cwth_s = w$_hc['class'],
      xmvoq1 = w$_hc['getset'];w$_hc['__newvec'];var a$scwh = laya['utils']['Browser'],
      o0n3 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      n0i74 = laya['resource']['HTMLImage'],
      n72g4 = laya['utils']['Handler'],
      rsct_8 = laya['display']['Input'],
      wh$jsa = laya['net']['Loader'];laya['maths']['Matrix'];var thcw = laya['renders']['Render'],
      whstc_ = laya['utils']['RunDriver'];laya['media']['Sound'];var s8_rtc = laya['media']['SoundChannel'],
      c_r8dt = laya['media']['SoundManager'],
      w$sja = (laya['display']['Stage'], laya['net']['URL']),
      $phj6 = laya['utils']['Utils'],
      s$haw = (cwth_s(kl4bi2, 'laya.wx.mini.MiniAdpter'), kl4bi2['getJson'] = function ($p6aj) {
    return JSON['parse']($p6aj);
  }, kl4bi2['init'] = function (ctrd_8, jp569) {
    void 0x0 === ctrd_8 && (ctrd_8 = !0x1), void 0x0 === jp569 && (jp569 = !0x1), kl4bi2['_inited'] || (kl4bi2['window'] = wa$6j)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (kl4bi2['_inited'] = !0x0, kl4bi2['isZiYu'] = jp569, kl4bi2['isPosMsgYu'] = ctrd_8, kl4bi2['EnvConfig'] = {}, kl4bi2['isZiYu'] || (qv1mxo['setNativeFileDir']('/layaairGame'), qv1mxo['existDir'](qv1mxo['fileNativeDir'], n72g4['create'](kl4bi2, kl4bi2['onMkdirCallBack']))), kl4bi2['window']['focus'] = function () {}, w$_hc['getUrlPath'] = function () {}, kl4bi2['window']['logtime'] = function (j6a) {}, kl4bi2['window']['alertTimeLog'] = function ($p6a) {}, kl4bi2['window']['resetShareInfo'] = function () {}, kl4bi2['window']['CanvasRenderingContext2D'] = function () {}, kl4bi2['window']['CanvasRenderingContext2D']['prototype'] = kl4bi2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kl4bi2['window']['document']['body']['appendChild'] = function () {}, kl4bi2['EnvConfig']['pixelRatioInt'] = 0x0, whstc_['getPixelRatio'] = kl4bi2['pixelRatio'], kl4bi2['_preCreateElement'] = a$scwh['createElement'], a$scwh['createElement'] = kl4bi2['createElement'], whstc_['createShaderCondition'] = kl4bi2['createShaderCondition'], $phj6['parseXMLFromString'] = kl4bi2['parseXMLFromString'], rsct_8['_createInputElement'] = wsac$['_createInputElement'], kl4bi2['EnvConfig']['load'] = wh$jsa['prototype']['load'], wh$jsa['prototype']['load'] = s_cwht['prototype']['load'], kl4bi2['isZiYu'] && ctrd_8 && wx['onMessage'](function (ebkiy) {
      ebkiy['isLoad'] && (qv1mxo['ziyuFileData'][ebkiy['url']] = ebkiy['data']);
    }));
  }, kl4bi2['onMkdirCallBack'] = function (g3o01, vf1z) {
    g3o01 || (qv1mxo['filesListObj'] = JSON['parse'](vf1z['data']));
  }, kl4bi2['pixelRatio'] = function () {
    if (!kl4bi2['EnvConfig']['pixelRatioInt']) try {
      var o31g0m = wx['getSystemInfoSync']();return kl4bi2['EnvConfig']['pixelRatioInt'] = o31g0m['pixelRatio'], o31g0m['pixelRatio'];
    } catch (hj6$aw) {}return kl4bi2['EnvConfig']['pixelRatioInt'];
  }, kl4bi2['createElement'] = function (_hswct) {
    var sjw;if ('canvas' == _hswct) return 0x1 == kl4bi2['idx'] ? kl4bi2['isZiYu'] ? (sjw = sharedCanvas)['style'] = {} : sjw = wa$6j['canvas'] : sjw = wa$6j['wx']['createCanvas'](), kl4bi2['idx']++, sjw;if ('textarea' == _hswct || 'input' == _hswct) return kl4bi2['onCreateInput'](_hswct);if ('div' != _hswct) return kl4bi2['_preCreateElement'](_hswct);return _hswct = kl4bi2['_preCreateElement'](_hswct), (_hswct['contains'] = function (hcwt_) {
      return null;
    }, _hswct['removeChild'] = function (vom31x) {}, _hswct);
  }, kl4bi2['onCreateInput'] = function (lekybi) {
    return lekybi = kl4bi2['_preCreateElement'](lekybi), (lekybi['focus'] = wsac$['wxinputFocus'], lekybi['blur'] = wsac$['wxinputblur'], lekybi['style'] = {}, lekybi['value'] = 0x0, lekybi['parentElement'] = {}, lekybi['placeholder'] = {}, lekybi['type'] = {}, lekybi['setColor'] = function (asw$c) {}, lekybi['setType'] = function (c8tr_d) {}, lekybi['setFontFace'] = function (swrtc_) {}, lekybi['addEventListener'] = function (n273g0) {}, lekybi['contains'] = function (zfqv1) {
      return null;
    }, lekybi['removeChild'] = function (x1vqz) {}, lekybi);
  }, kl4bi2['createShaderCondition'] = function (pa$9) {
    var yeblk5 = this;return function () {
      return yeblk5[pa$9['replace']('this.', '')];
    };
  }, kl4bi2['EnvConfig'] = null, kl4bi2['window'] = null, kl4bi2['_preCreateElement'] = null, kl4bi2['_inited'] = !0x1, kl4bi2['wxRequest'] = null, kl4bi2['systemInfo'] = null, kl4bi2['version'] = '0.0.1', kl4bi2['isZiYu'] = !0x1, kl4bi2['isPosMsgYu'] = !0x1, kl4bi2['parseXMLFromString'] = function (ikbyel) {
    var as$wch;ikbyel = ikbyel['replace'](/>\s+</g, '><');try {
      as$wch = new wa$6j['Parser']['DOMParser']()['parseFromString'](ikbyel, 'text/xml');
    } catch (e5p9) {
      throw '需要引入xml解析库文件';
    }return as$wch;
  }, kl4bi2['idx'] = 0x1, kl4bi2);function kl4bi2() {}cwth_s(jwsh$, 'laya.wx.mini.MiniImage'), jwsh$['prototype']['_loadImage'] = function (mo30n) {
    var ngo07 = !0x1;-0x1 == mo30n['indexOf']('layaNativeDir/') && (ngo07 = !0x0, mo30n = w$sja['formatURL'](mo30n)), qv1mxo['getFileInfo'](mo30n) ? jwsh$['onCreateImage'](mo30n, this, !ngo07) : -0x1 != mo30n['indexOf']('http://') || -0x1 != mo30n['indexOf']('https://') ? qv1mxo['downImg'](mo30n, new n72g4(jwsh$, jwsh$['onDownImgCallBack'], [mo30n, this]), mo30n) : jwsh$['onCreateImage'](mo30n, this, !0x0);
  }, jwsh$['onDownImgCallBack'] = function (rt_w, w_stch, g027) {
    g027 ? w_stch['onError'](null) : jwsh$['onCreateImage'](rt_w, w_stch);
  }, jwsh$['onCreateImage'] = function (mvox, aph, epb59) {
    var no03mg, ilky;function kl2i74() {
      ilky['onload'] = null, ilky['onerror'] = null, delete aph['imgCache'][mvox];
    }no03mg = (epb59 = void 0x0 === epb59 ? !0x1 : epb59) ? mvox : (e596p = qv1mxo['getFileInfo'](mvox)['md5'], qv1mxo['getFileNativePath'](e596p)), null == aph['imgCache'] && (aph['imgCache'] = {}), epb59 = function () {
      kl2i74(), aph['onLoaded'](ilky);
    };var e596p = function () {
      kl2i74(), aph['event']('error', 'Load image failed');
    };'nativeimage' == aph['_type'] ? ((ilky = new a$scwh['window']['Image']())['crossOrigin'] = '', ilky['onload'] = epb59, ilky['onerror'] = e596p, ilky['src'] = no03mg, aph['imgCache'][mvox] = ilky) : new n0i74['create'](no03mg, { 'onload': epb59, 'onerror': e596p, 'onCreate': function (_cdt) {
        ilky = _cdt, aph['imgCache'][mvox] = _cdt;
      } });
  };function jwsh$() {}var wsac$ = (cwth_s(eib4l, 'laya.wx.mini.MiniInput'), eib4l['_createInputElement'] = function () {
    rsct_8['_initInput'](rsct_8['area'] = a$scwh['createElement']('textarea')), rsct_8['_initInput'](rsct_8['input'] = a$scwh['createElement']('input')), rsct_8['inputContainer'] = a$scwh['createElement']('div'), rsct_8['inputContainer']['style']['position'] = 'absolute', rsct_8['inputContainer']['style']['zIndex'] = 0x186a0, a$scwh['container']['appendChild'](rsct_8['inputContainer']), rsct_8['inputContainer']['setPos'] = function (_hwcs$, ws_t) {
      rsct_8['inputContainer']['style']['left'] = _hwcs$ + 'px', rsct_8['inputContainer']['style']['top'] = ws_t + 'px';
    }, w$_hc['stage']['on']('resize', null, eib4l['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_hwsc) {
      wa$6j['dispatchEvent'] && wa$6j['dispatchEvent']('resize');
    }), c_r8dt['_soundClass'] = $9j6pa, c_r8dt['_musicClass'] = $9j6pa;
  }, eib4l['_onStageResize'] = function () {
    w$_hc['stage']['_canvasTransform']['identity']()['scale'](a$scwh['width'] / thcw['canvas']['width'] / whstc_['getPixelRatio'](), a$scwh['height'] / thcw['canvas']['height'] / whstc_['getPixelRatio']());
  }, eib4l['wxinputFocus'] = function (zxfv1) {
    var ylkb5 = rsct_8['inputElement']['target'];ylkb5 && !ylkb5['editable'] || (s$haw['window']['wx']['offKeyboardConfirm'](), s$haw['window']['wx']['offKeyboardInput'](), s$haw['window']['wx']['showKeyboard']({ 'defaultValue': ylkb5['text'], 'maxLength': ylkb5['maxChars'], 'multiple': ylkb5['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (fvxm1q) {}, 'fail': function (vmog13) {} }), s$haw['window']['wx']['onKeyboardConfirm'](function (cwr_s) {
      cwr_s = cwr_s ? cwr_s['value'] : '', (ylkb5['text'] = cwr_s, ylkb5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), s$haw['window']['wx']['onKeyboardInput'](function (xqomv1) {
      xqomv1 = xqomv1 ? xqomv1['value'] : '', ylkb5['multiline'] || -0x1 == xqomv1['indexOf']('\x0a') ? (ylkb5['text'] = xqomv1, ylkb5['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, eib4l['inputEnter'] = function () {
    rsct_8['inputElement']['target']['focus'] = !0x1;
  }, eib4l['wxinputblur'] = function () {
    eib4l['hideKeyboard']();
  }, eib4l['hideKeyboard'] = function () {
    s$haw['window']['wx']['offKeyboardConfirm'](), s$haw['window']['wx']['offKeyboardInput'](), s$haw['window']['wx']['hideKeyboard']({ 'success': function (t_rdc8) {
        console['log']('隐藏键盘');
      }, 'fail': function (jy9p5) {
        console['log']('隐藏键盘出错:' + (jy9p5 ? jy9p5['errMsg'] : ''));
      } });
  }, eib4l);function eib4l() {}var s_cwht = function () {
    function yj569() {}cwth_s(yj569, 'laya.wx.mini.MiniLoader');var n72i04 = yj569['prototype'];return n72i04['load'] = function (ap$6hj, yleb5, j5p6, mvgo13, o1gm3v) {
      void 0x0 === j5p6 && (j5p6 = !0x0), void 0x0 === o1gm3v && (o1gm3v = !0x1);var elkb5 = this;0x0 === (elkb5['_url'] = ap$6hj)['indexOf']('data:image') ? elkb5['_type'] = yleb5 = 'image' : elkb5['_type'] = yleb5 = yleb5 || elkb5['getTypeFromUrl'](ap$6hj), elkb5['_cache'] = j5p6, elkb5['_data'] = null;var a$jwh = 'ascii';-0x1 != ap$6hj['indexOf']('.fnt') ? a$jwh = 'utf8' : 'arraybuffer' == yleb5 && (a$jwh = '');var _d8cr = $phj6['getFileExtension'](ap$6hj);if (-0x1 != yj569['_fileTypeArr']['indexOf'](_d8cr)) s$haw['EnvConfig']['load']['call'](this, ap$6hj, yleb5, j5p6, mvgo13, o1gm3v);else {
        if (qv1mxo['getFileInfo'](ap$6hj)) s$haw['EnvConfig']['load']['call'](this, ap$6hj, yleb5, j5p6, mvgo13, o1gm3v);else {
          if (-0x1 != ap$6hj['indexOf']('layaNativeDir/')) {
            if (s$haw['isZiYu']) {
              var j$wah6 = qv1mxo['ziyuFileData'][ap$6hj];return void elkb5['onLoaded'](j$wah6);
            }return cosnole['log']('read read'), void qv1mxo['read'](ap$6hj, a$jwh, new n72g4(yj569, yj569['onReadNativeCallBack'], [a$jwh, ap$6hj, yleb5, j5p6, mvgo13, o1gm3v, elkb5]));
          }j$wah6 = '' == w$sja['rootPath'] ? ap$6hj : ap$6hj['split'](w$sja['rootPath'])[0x0], -0x1 != ap$6hj['indexOf']('http://') || -0x1 != ap$6hj['indexOf']('https://') ? s$haw['EnvConfig']['load']['call'](elkb5, ap$6hj, yleb5, j5p6, mvgo13, o1gm3v) : qv1mxo['readFile'](j$wah6, a$jwh, new n72g4(yj569, yj569['onReadNativeCallBack'], [a$jwh, ap$6hj, yleb5, j5p6, mvgo13, o1gm3v, elkb5]), ap$6hj);
        }
      }
    }, n72i04['resMgrLoad'] = function ($6ajwh, bkyl5, vm3g, y6j59, mv3og, xm1fv, y9j) {
      void 0x0 === vm3g && (vm3g = 0x0), void 0x0 === y6j59 && (y6j59 = !0x1), void 0x0 === mv3og && (mv3og = !0x1), void 0x0 === xm1fv && (xm1fv = 0x0), void 0x0 === y9j && (y9j = 0x3), -0x1 != $6ajwh['indexOf']('mpack') && console['log']('=============resMgrLoad url:', $6ajwh), s$haw['EnvConfig']['resMgrLoad']($6ajwh, (ik24l7, hcstw, mngo0) => {
        yj569['prototype']['resMgrLoadCallBack'](ik24l7, hcstw, mngo0, bkyl5);
      }, vm3g, y6j59, mv3og, xm1fv, y9j);
    }, n72i04['resMgrLoadCallBack'] = function (vz1xf, ilbk42, mgo3n0, om1qv) {
      console['log']('buff:::', vz1xf, mgo3n0, qv1mxo['fileNativeDir'] + '///' + qv1mxo['fileListName']), om1qv(vz1xf, ilbk42, mgo3n0);
    }, n72i04['clearRes'] = function (l4ibe, i4n20) {
      this['clearRes'](l4ibe, i4n20 = void 0x0 === i4n20 ? !0x1 : i4n20), i4n20 = qv1mxo['getFileInfo'](l4ibe), !i4n20 || -0x1 == l4ibe['indexOf']('http://') && -0x1 == l4ibe['indexOf']('https://') || (i4n20 = i4n20['md5'], i4n20 = qv1mxo['getFileNativePath'](i4n20), qv1mxo['remove'](i4n20));
    }, yj569['onReadNativeCallBack'] = function (sah$w, cwhs$, _crwst, $h6j, hc_sw$, td_cr8, fxqmv, n7g320, o3gmn0) {
      void 0x0 === $h6j && ($h6j = !0x0), void 0x0 === td_cr8 && (td_cr8 = !0x1), (n7g320 = void 0x0 === n7g320 ? 0x0 : n7g320) ? 0x1 == n7g320 && s$haw['EnvConfig']['load']['call'](fxqmv, cwhs$, _crwst, $h6j, hc_sw$, td_cr8) : (o3gmn0 = 'json' == _crwst || 'atlas' == _crwst ? s$haw['getJson'](o3gmn0['data']) : 'xml' == _crwst ? $phj6['parseXMLFromString'](o3gmn0['data']) : o3gmn0['data'], fxqmv['onLoaded'](o3gmn0), !s$haw['isZiYu'] && s$haw['isPosMsgYu'] && 'arraybuffer' != _crwst && wx['postMessage']({ 'url': cwhs$, 'data': o3gmn0, 'isLoad': !0x0 }));
    }, stc(yj569, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), yj569;
  }(),
      qv1mxo = (cwth_s(om1vxq, 'laya.wx.mini.MiniFileMgr', o0n3), om1vxq['isLoadFile'] = function (i2n0) {
    return -0x1 != om1vxq['_fileTypeArr']['indexOf'](i2n0);
  }, om1vxq['getFileInfo'] = function (nog37) {
    return nog37 = nog37['split']('?')[0x0], nog37 = om1vxq['filesListObj'][nog37], null == nog37 ? null : nog37;
  }, om1vxq['onFileUpdate'] = function (ov1qxm, ox1mqv) {
    var lybei = ov1qxm['split']('/');ov1qxm = lybei[lybei['length'] - 0x1], lybei = om1vxq['getFileInfo'](ox1mqv), null == lybei ? om1vxq['onSaveFile'](ox1mqv, ov1qxm) : lybei['readyUrl'] != ox1mqv && om1vxq['remove'](ov1qxm, ox1mqv);
  }, om1vxq['exits'] = function (ogm3n0, nog07) {
    ogm3n0 = om1vxq['getFileNativePath'](ogm3n0), om1vxq['fs']['getFileInfo']({ 'filePath': ogm3n0, 'success': function (m301o) {
        null != nog07 && nog07['runWith']([0x0, m301o]);
      }, 'fail': function (pja$6) {
        null != nog07 && nog07['runWith']([0x1, pja$6]);
      } });
  }, om1vxq['read'] = function (gmn03o, eyik, n04g, j5yp9) {
    void 0x0 === eyik && (eyik = 'ascill'), gmn03o = '' != (j5yp9 = void 0x0 === j5yp9 ? '' : j5yp9) ? om1vxq['getFileNativePath'](gmn03o) : gmn03o, om1vxq['fs']['readFile']({ 'filePath': gmn03o, 'encoding': eyik, 'success': function (pa96$j) {
        null != n04g && n04g['runWith']([0x0, pa96$j]);
      }, 'fail': function (vmf1) {
        vmf1 && '' != j5yp9 ? om1vxq['down'](j5yp9, eyik, n04g, j5yp9) : null != n04g && n04g['runWith']([0x1]);
      } });
  }, om1vxq['readNativeFile'] = function (vqxz1f, d8c_t) {
    om1vxq['fs']['readFile']({ 'filePath': vqxz1f, 'encoding': '', 'success': function (lbyek5) {
        null != d8c_t && d8c_t['runWith']([0x0]);
      }, 'fail': function (i4lk) {
        null != d8c_t && d8c_t['runWith']([0x1]);
      } });
  }, om1vxq['down'] = function (nomg30, p9e65, p96j5, hp6$) {
    void 0x0 === p9e65 && (p9e65 = 'ascill'), void 0x0 === hp6$ && (hp6$ = '');var hcw = om1vxq['getFileNativePath'](hp6$);om1vxq['wxdown']({ 'url': nomg30, 'filePath': hcw, 'success': function (fm1qxv) {
        0xc8 === fm1qxv['statusCode'] && om1vxq['readFile'](fm1qxv['filePath'], p9e65, p96j5, hp6$);
      }, 'fail': function (jsawh$) {
        null != p96j5 && p96j5['runWith']([0x1, jsawh$]);
      } })['onProgressUpdate'](function (s_rwt) {
      null != p96j5 && p96j5['runWith']([0x2, s_rwt['progress']]);
    });
  }, om1vxq['readFile'] = function (htw_s, wsac$h, wsrct_, ke4ilb) {
    void 0x0 === ke4ilb && (ke4ilb = ''), om1vxq['fs']['readFile']({ 'filePath': htw_s, 'encoding': wsac$h = void 0x0 === wsac$h ? 'ascill' : wsac$h, 'success': function (_whts) {
        -0x1 == htw_s['indexOf']('http://') && -0x1 == htw_s['indexOf']('https://') || om1vxq['onFileUpdate'](htw_s, ke4ilb), null != wsrct_ && wsrct_['runWith']([0x0, _whts]);
      }, 'fail': function (drc8_t) {
        drc8_t && null != wsrct_ && wsrct_['runWith']([0x1, drc8_t]);
      } });
  }, om1vxq['downImg'] = function (e956y, on73g, klb5e) {
    void 0x0 === klb5e && (klb5e = ''), om1vxq['wxdown']({ 'url': e956y, 'success': function (x1zvfq) {
        0xc8 === x1zvfq['statusCode'] && om1vxq['copyFile'](x1zvfq['tempFilePath'], klb5e, on73g);
      }, 'fail': function (in4270) {
        null != on73g && on73g['runWith']([0x1, in4270]);
      } });
  }, om1vxq['copyFile'] = function (e56p, s$a, $jp69) {
    var mog3n0 = e56p['split']('/'),
        o3gm01 = mog3n0[mog3n0['length'] - 0x1];s$a['split']('?')[0x0];var keyb = om1vxq['getFileInfo'](s$a);mog3n0 = om1vxq['getFileNativePath'](o3gm01), om1vxq['fs']['copyFile']({ 'srcPath': e56p, 'destPath': mog3n0, 'success': function (n240g7) {
        keyb ? keyb['readyUrl'] != s$a && om1vxq['remove'](o3gm01, s$a, $jp69) : (om1vxq['onSaveFile'](s$a, o3gm01), null != $jp69 && $jp69['runWith']([0x0]));
      }, 'fail': function (vm1og) {
        null != $jp69 && $jp69['runWith']([0x1, vm1og]);
      } });
  }, om1vxq['getFileNativePath'] = function (j$9ap) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + j$9ap;
  }, om1vxq['remove'] = function (n0g3m, ths_wc, tscr_) {
    void 0x0 === ths_wc && (ths_wc = '');var om30g = om1vxq['getFileInfo'](ths_wc),
        k4lib2 = om1vxq['getFileNativePath'](om30g['md5']);w$_hc['loader']['clearRes'](om30g['readyUrl']), om1vxq['fs']['unlink']({ 'filePath': k4lib2, 'success': function (i2bk4) {
        '' != ths_wc && om1vxq['onSaveFile'](ths_wc, n0g3m), null != tscr_ && tscr_['runWith']([0x0]);
      }, 'fail': function (be5kl) {} });
  }, om1vxq['onSaveFile'] = function (xqfm1, s$hj) {
    var zqxfv1 = xqfm1['split']('?')[0x0];om1vxq['filesListObj'][zqxfv1] = { 'md5': s$hj, 'readyUrl': xqfm1 }, om1vxq['fs']['writeFile']({ 'filePath': om1vxq['fileNativeDir'] + '/' + om1vxq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](om1vxq['filesListObj']), 'success': function ($9jpa) {
        console['log']('写入测试测试成功：', $9jpa);
      }, 'fail': function (wtcr_s) {
        console['log']('写入测试测试失败：', wtcr_s);
      } });
  }, om1vxq['existDir'] = function (ink7, ng7203) {
    om1vxq['fs']['mkdir']({ 'dirPath': ink7, 'success': function (r_cwst) {
        null != ng7203 && ng7203['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (csaw$h) {
        -0x1 != csaw$h['errMsg']['indexOf']('file already exists') ? om1vxq['readSync'](om1vxq['fileListName'], 'utf8', ng7203) : null != ng7203 && ng7203['runWith']([0x1, csaw$h]);
      } });
  }, om1vxq['readSync'] = function (movqx1, tcswh, rwct, b4kl2i) {
    void 0x0 === tcswh && (tcswh = 'ascill'), void 0x0 === b4kl2i && (b4kl2i = ''), movqx1 = om1vxq['getFileNativePath'](movqx1);var $wjhs;try {
      $wjhs = om1vxq['fs']['readFileSync'](movqx1), null != rwct && rwct['runWith']([0x0, { 'data': $wjhs }]);
    } catch (eiklb4) {
      null != rwct && rwct['runWith']([0x1]);
    }
  }, om1vxq['readCache'] = function () {}, om1vxq['writeCache'] = function (qmv1ox) {
    var bei4l = readyUrl['split']('?')[0x0];om1vxq['filesListObj'][bei4l] = { 'md5': md5Name, 'readyUrl': readyUrl }, om1vxq['fs']['writeFile']({ 'filePath': om1vxq['fileNativeDir'] + '/' + om1vxq['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](om1vxq['filesListObj']), 'success': function (p965y) {}, 'fail': function (dc_t8r) {} });
  }, om1vxq['setNativeFileDir'] = function (ov3m) {
    om1vxq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ov3m;
  }, om1vxq['filesListObj'] = {}, om1vxq['fileNativeDir'] = null, om1vxq['fileListName'] = 'layaairfiles.txt', om1vxq['ziyuFileData'] = {}, stc(om1vxq, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), om1vxq);function om1vxq() {
    om1vxq['__super']['call'](this);
  }var $9j6pa = function () {
    function j6a$wh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, j6a$wh['__super']['call'](this), this['_sound'] = j6a$wh['_createSound']();
    }cwth_s(j6a$wh, 'laya.wx.mini.MiniSound', o0n3);var rsct8 = j6a$wh['prototype'];return rsct8['load'] = function (n0g37) {
      var r8c_d = this,
          k2l4b;function lkbei4() {
        if (null != j6a$wh['_null']) r8c_d['_sound']['onCanplay'](j6a$wh['_null']), r8c_d['_sound']['onError'](j6a$wh['_null']);else try {
          r8c_d['_sound']['onCanplay'](null), r8c_d['_sound']['onError'](null), j6a$wh['_null'] = null;
        } catch (cwa$sh) {
          console['warn']('[wxmini] _clearSound:' + cwa$sh), r8c_d['_sound']['onCanplay'](n370og), r8c_d['_sound']['onError'](n370og), j6a$wh['_null'] = n370og;
        }
      }function n370og() {}n0g37 = w$sja['formatURL'](n0g37), this['url'] = n0g37, j6a$wh['_audioCache'][n0g37] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        lkbei4(), k2l4b['loaded'] = !0x0, k2l4b['event']('complete'), j6a$wh['_audioCache'][k2l4b['url']] = k2l4b;
      }), this['_sound']['onError'](function (ebl9y5) {
        console['error']('errCode=' + ebl9y5['errCode'] + '  errMsg=' + ebl9y5['errMsg']), lkbei4(), k2l4b['event']('error');
      }), this['_sound']['src'] = n0g37, k2l4b = this);
    }, rsct8['play'] = function (o1v3gm, g3207n) {
      void 0x0 === o1v3gm && (o1v3gm = 0x0), void 0x0 === g3207n && (g3207n = 0x0), (n7203g = this['url'] == c_r8dt['_tMusic'] ? (j6a$wh['_musicAudio'] || (j6a$wh['_musicAudio'] = j6a$wh['_createSound']()), j6a$wh['_musicAudio']) : j6a$wh['_createSound']())['src'] = this['url'];var n7203g = new p$ja69(n7203g);return n7203g['url'] = this['url'], n7203g['loops'] = g3207n, n7203g['startTime'] = o1v3gm, n7203g['play'](), c_r8dt['addChannel'](n7203g), n7203g;
    }, rsct8['dispose'] = function () {
      var kl247 = j6a$wh['_audioCache'][this['url']];kl247 && (kl247['src'] = '', delete j6a$wh['_audioCache'][this['url']]);
    }, xmvoq1(0x0, rsct8, 'duration', function () {
      return this['_sound']['duration'];
    }), j6a$wh['_createSound'] = function () {
      return j6a$wh['_id']++, s$haw['window']['wx']['createInnerAudioContext']();
    }, j6a$wh['_musicAudio'] = null, j6a$wh['_id'] = 0x0, j6a$wh['_audioCache'] = {}, j6a$wh['_null'] = void 0x0, j6a$wh;
  }(),
      p$ja69 = function () {
    function elb9(_cr8ts) {
      this['_audio'] = null, this['_onEnd'] = null, elb9['__super']['call'](this), this['_audio'] = _cr8ts, this['_onEnd'] = $phj6['bind'](this['__onEnd'], this), _cr8ts['onEnded'](this['_onEnd']);
    }cwth_s(elb9, 'laya.wx.mini.MiniSoundChannel', s8_rtc);var ye956 = elb9['prototype'];return ye956['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (w$_hc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ye956['__onNull'] = function () {}, ye956['play'] = function () {
      this['isStopped'] = !0x1, c_r8dt['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, ye956['stop'] = function () {
      if (this['isStopped'] = !0x0, c_r8dt['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != elb9['_null']) this['_audio']['onEnded'](elb9['_null']);else try {
          this['_audio']['onEnded'](null), elb9['_null'] = null;
        } catch (i4702n) {
          console['warn']('[wxmini] stop:' + i4702n), this['_audio']['onEnded']($phj6['bind'](this['__onNull'], this)), elb9['_null'] = $phj6['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, ye956['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, ye956['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, c_r8dt['addChannel'](this), this['_audio']['play']());
    }, xmvoq1(0x0, ye956, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), xmvoq1(0x0, ye956, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), xmvoq1(0x0, ye956, 'volume', function () {
      return 0x1;
    }, function (kyb5e) {}), elb9['_null'] = void 0x0, elb9;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (zqvfx1, jp6$ha) {
  'use strict';

  for (var m1g3vo in Object['defineProperty'](jp6$ha, '__esModule', { 'value': !0x0 }), Laya) {
    var mvg31 = Laya[m1g3vo];mvg31 && mvg31['__isclass'] && (jp6$ha[m1g3vo] = mvg31);
  }
});