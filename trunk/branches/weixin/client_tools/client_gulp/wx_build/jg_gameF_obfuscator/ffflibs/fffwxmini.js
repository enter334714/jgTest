var k = wx.$f;
!function (knug3e, x52) {
  x52['un'], x52['uns'];var bvpr = x52['static'],
      cw_ofk = x52['class'],
      $p6brv = x52['getset'];x52['__newvec'];var eu3ng = laya['utils']['Browser'],
      e3ungs = (laya['events']['Event'], laya['events']['EventDispatcher']),
      dy78 = laya['resource']['HTMLImage'],
      ekung3 = laya['utils']['Handler'],
      x2gsje = laya['display']['Input'],
      p$vr4 = laya['net']['Loader'];laya['maths']['Matrix'];var bp$r6v = laya['renders']['Render'],
      brp4 = laya['utils']['RunDriver'];laya['media']['Sound'];var bv4$r = laya['media']['SoundChannel'],
      f1waz = laya['media']['SoundManager'],
      d709 = (laya['display']['Stage'], laya['net']['URL']),
      qfo_ = laya['utils']['Utils'],
      p97r6 = (cw_ofk($5mvt4, 'laya.wx.mini.MiniAdpter'), $5mvt4['getJson'] = function (negu3) {
    return JSON['parse'](negu3);
  }, $5mvt4['init'] = function (pbr6$v, b$vrp6) {
    void 0x0 === pbr6$v && (pbr6$v = !0x1), void 0x0 === b$vrp6 && (b$vrp6 = !0x1), $5mvt4['_inited'] || ($5mvt4['window'] = knug3e)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || ($5mvt4['_inited'] = !0x0, $5mvt4['isZiYu'] = b$vrp6, $5mvt4['isPosMsgYu'] = pbr6$v, $5mvt4['EnvConfig'] = {}, $5mvt4['isZiYu'] || (wco_kf['setNativeFileDir']('/layaairGame'), wco_kf['existDir'](wco_kf['fileNativeDir'], ekung3['create']($5mvt4, $5mvt4['onMkdirCallBack']))), $5mvt4['window']['focus'] = function () {}, x52['getUrlPath'] = function () {}, $5mvt4['window']['logtime'] = function (c3nuo) {}, $5mvt4['window']['alertTimeLog'] = function (wofqz) {}, $5mvt4['window']['resetShareInfo'] = function () {}, $5mvt4['window']['CanvasRenderingContext2D'] = function () {}, $5mvt4['window']['CanvasRenderingContext2D']['prototype'] = $5mvt4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $5mvt4['window']['document']['body']['appendChild'] = function () {}, $5mvt4['EnvConfig']['pixelRatioInt'] = 0x0, brp4['getPixelRatio'] = $5mvt4['pixelRatio'], $5mvt4['_preCreateElement'] = eu3ng['createElement'], eu3ng['createElement'] = $5mvt4['createElement'], brp4['createShaderCondition'] = $5mvt4['createShaderCondition'], qfo_['parseXMLFromString'] = $5mvt4['parseXMLFromString'], x2gsje['_createInputElement'] = xg32['_createInputElement'], $5mvt4['EnvConfig']['load'] = p$vr4['prototype']['load'], p$vr4['prototype']['load'] = c3nuko['prototype']['load'], $5mvt4['isZiYu'] && pbr6$v && wx['onMessage'](function ($vr6pb) {
      $vr6pb['isLoad'] && (wco_kf['ziyuFileData'][$vr6pb['url']] = $vr6pb['data']);
    }));
  }, $5mvt4['onMkdirCallBack'] = function (onc_f, fwqoz) {
    onc_f || (wco_kf['filesListObj'] = JSON['parse'](fwqoz['data']));
  }, $5mvt4['pixelRatio'] = function () {
    if (!$5mvt4['EnvConfig']['pixelRatioInt']) try {
      var jm45$t = wx['getSystemInfoSync']();return $5mvt4['EnvConfig']['pixelRatioInt'] = jm45$t['pixelRatio'], jm45$t['pixelRatio'];
    } catch (b$6pvr) {}return $5mvt4['EnvConfig']['pixelRatioInt'];
  }, $5mvt4['createElement'] = function (b$pr6) {
    var ih80y;if ('canvas' == b$pr6) return 0x1 == $5mvt4['idx'] ? $5mvt4['isZiYu'] ? (ih80y = sharedCanvas)['style'] = {} : ih80y = knug3e['canvas'] : ih80y = knug3e['wx']['createCanvas'](), $5mvt4['idx']++, ih80y;if ('textarea' == b$pr6 || 'input' == b$pr6) return $5mvt4['onCreateInput'](b$pr6);if ('div' != b$pr6) return $5mvt4['_preCreateElement'](b$pr6);return b$pr6 = $5mvt4['_preCreateElement'](b$pr6), (b$pr6['contains'] = function (wqz_f) {
      return null;
    }, b$pr6['removeChild'] = function (v$mt5) {}, b$pr6);
  }, $5mvt4['onCreateInput'] = function (sx2gjt) {
    return sx2gjt = $5mvt4['_preCreateElement'](sx2gjt), (sx2gjt['focus'] = xg32['wxinputFocus'], sx2gjt['blur'] = xg32['wxinputblur'], sx2gjt['style'] = {}, sx2gjt['value'] = 0x0, sx2gjt['parentElement'] = {}, sx2gjt['placeholder'] = {}, sx2gjt['type'] = {}, sx2gjt['setColor'] = function (vbrp4) {}, sx2gjt['setType'] = function (zqwa_f) {}, sx2gjt['setFontFace'] = function (tmj45) {}, sx2gjt['addEventListener'] = function (wcz_fo) {}, sx2gjt['contains'] = function (uesg3n) {
      return null;
    }, sx2gjt['removeChild'] = function (nkco) {}, sx2gjt);
  }, $5mvt4['createShaderCondition'] = function (yhd0i8) {
    var _kcof = this;return function () {
      return _kcof[yhd0i8['replace']('this.', '')];
    };
  }, $5mvt4['EnvConfig'] = null, $5mvt4['window'] = null, $5mvt4['_preCreateElement'] = null, $5mvt4['_inited'] = !0x1, $5mvt4['wxRequest'] = null, $5mvt4['systemInfo'] = null, $5mvt4['version'] = '0.0.1', $5mvt4['isZiYu'] = !0x1, $5mvt4['isPosMsgYu'] = !0x1, $5mvt4['parseXMLFromString'] = function (wfqa_z) {
    var j5mt2;wfqa_z = wfqa_z['replace'](/>\s+</g, '><');try {
      j5mt2 = new knug3e['Parser']['DOMParser']()['parseFromString'](wfqa_z, 'text/xml');
    } catch (knof) {
      throw '需要引入xml解析库文件';
    }return j5mt2;
  }, $5mvt4['idx'] = 0x1, $5mvt4);function $5mvt4() {}cw_ofk(ueg, 'laya.wx.mini.MiniImage'), ueg['prototype']['_loadImage'] = function (tm45) {
    var fk_woc = !0x1;-0x1 == tm45['indexOf']('layaNativeDir/') && (fk_woc = !0x0, tm45 = d709['formatURL'](tm45)), wco_kf['getFileInfo'](tm45) ? ueg['onCreateImage'](tm45, this, !fk_woc) : -0x1 != tm45['indexOf']('http://') || -0x1 != tm45['indexOf']('https://') ? wco_kf['downImg'](tm45, new ekung3(ueg, ueg['onDownImgCallBack'], [tm45, this]), tm45) : ueg['onCreateImage'](tm45, this, !0x0);
  }, ueg['onDownImgCallBack'] = function (xst2j, j$4t5m, dy8097) {
    dy8097 ? j$4t5m['onError'](null) : ueg['onCreateImage'](xst2j, j$4t5m);
  }, ueg['onCreateImage'] = function (r$pm, z1wqa, mj24t) {
    var g2xs3, b7y68;function gune3() {
      b7y68['onload'] = null, b7y68['onerror'] = null, delete z1wqa['imgCache'][r$pm];
    }g2xs3 = (mj24t = void 0x0 === mj24t ? !0x1 : mj24t) ? r$pm : (okfc = wco_kf['getFileInfo'](r$pm)['md5'], wco_kf['getFileNativePath'](okfc)), null == z1wqa['imgCache'] && (z1wqa['imgCache'] = {}), mj24t = function () {
      gune3(), z1wqa['onLoaded'](b7y68);
    };var okfc = function () {
      gune3(), z1wqa['event']('error', 'Load image failed');
    };'nativeimage' == z1wqa['_type'] ? ((b7y68 = new eu3ng['window']['Image']())['crossOrigin'] = '', b7y68['onload'] = mj24t, b7y68['onerror'] = okfc, b7y68['src'] = g2xs3, z1wqa['imgCache'][r$pm] = b7y68) : new dy78['create'](g2xs3, { 'onload': mj24t, 'onerror': okfc, 'onCreate': function (br9p7) {
        b7y68 = br9p7, z1wqa['imgCache'][r$pm] = br9p7;
      } });
  };function ueg() {}var xg32 = (cw_ofk(s23ge, 'laya.wx.mini.MiniInput'), s23ge['_createInputElement'] = function () {
    x2gsje['_initInput'](x2gsje['area'] = eu3ng['createElement']('textarea')), x2gsje['_initInput'](x2gsje['input'] = eu3ng['createElement']('input')), x2gsje['inputContainer'] = eu3ng['createElement']('div'), x2gsje['inputContainer']['style']['position'] = 'absolute', x2gsje['inputContainer']['style']['zIndex'] = 0x186a0, eu3ng['container']['appendChild'](x2gsje['inputContainer']), x2gsje['inputContainer']['setPos'] = function (okc_un, pb) {
      x2gsje['inputContainer']['style']['left'] = okc_un + 'px', x2gsje['inputContainer']['style']['top'] = pb + 'px';
    }, x52['stage']['on']('resize', null, s23ge['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wo_zc) {
      knug3e['dispatchEvent'] && knug3e['dispatchEvent']('resize');
    }), f1waz['_soundClass'] = _zaqfw, f1waz['_musicClass'] = _zaqfw;
  }, s23ge['_onStageResize'] = function () {
    x52['stage']['_canvasTransform']['identity']()['scale'](eu3ng['width'] / bp$r6v['canvas']['width'] / brp4['getPixelRatio'](), eu3ng['height'] / bp$r6v['canvas']['height'] / brp4['getPixelRatio']());
  }, s23ge['wxinputFocus'] = function ($5vm4) {
    var vt4$5m = x2gsje['inputElement']['target'];vt4$5m && !vt4$5m['editable'] || (p97r6['window']['wx']['offKeyboardConfirm'](), p97r6['window']['wx']['offKeyboardInput'](), p97r6['window']['wx']['showKeyboard']({ 'defaultValue': vt4$5m['text'], 'maxLength': vt4$5m['maxChars'], 'multiple': vt4$5m['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ue3gk) {}, 'fail': function (p9br) {} }), p97r6['window']['wx']['onKeyboardConfirm'](function (zwa_q) {
      zwa_q = zwa_q ? zwa_q['value'] : '', (vt4$5m['text'] = zwa_q, vt4$5m['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), p97r6['window']['wx']['onKeyboardInput'](function (s32gex) {
      s32gex = s32gex ? s32gex['value'] : '', vt4$5m['multiline'] || -0x1 == s32gex['indexOf']('\x0a') ? (vt4$5m['text'] = s32gex, vt4$5m['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, s23ge['inputEnter'] = function () {
    x2gsje['inputElement']['target']['focus'] = !0x1;
  }, s23ge['wxinputblur'] = function () {
    s23ge['hideKeyboard']();
  }, s23ge['hideKeyboard'] = function () {
    p97r6['window']['wx']['offKeyboardConfirm'](), p97r6['window']['wx']['offKeyboardInput'](), p97r6['window']['wx']['hideKeyboard']({ 'success': function (s5j2xt) {
        console['log']('隐藏键盘');
      }, 'fail': function (_wcofk) {
        console['log']('隐藏键盘出错:' + (_wcofk ? _wcofk['errMsg'] : ''));
      } });
  }, s23ge);function s23ge() {}var c3nuko = function () {
    function p54mv() {}cw_ofk(p54mv, 'laya.wx.mini.MiniLoader');var hy0d8 = p54mv['prototype'];return hy0d8['load'] = function (r769pb, mv54t, g2se3, $rbp6, hi08) {
      void 0x0 === g2se3 && (g2se3 = !0x0), void 0x0 === hi08 && (hi08 = !0x1);var hdy0i = this;0x0 === (hdy0i['_url'] = r769pb)['indexOf']('data:image') ? hdy0i['_type'] = mv54t = 'image' : hdy0i['_type'] = mv54t = mv54t || hdy0i['getTypeFromUrl'](r769pb), hdy0i['_cache'] = g2se3, hdy0i['_data'] = null;var v54$m = 'ascii';-0x1 != r769pb['indexOf']('.fnt') ? v54$m = 'utf8' : 'arraybuffer' == mv54t && (v54$m = '');var rbp$ = qfo_['getFileExtension'](r769pb);if (-0x1 != p54mv['_fileTypeArr']['indexOf'](rbp$)) p97r6['EnvConfig']['load']['call'](this, r769pb, mv54t, g2se3, $rbp6, hi08);else {
        if (wco_kf['getFileInfo'](r769pb)) p97r6['EnvConfig']['load']['call'](this, r769pb, mv54t, g2se3, $rbp6, hi08);else {
          if (-0x1 != r769pb['indexOf']('layaNativeDir/')) {
            if (p97r6['isZiYu']) {
              var kne3gu = wco_kf['ziyuFileData'][r769pb];return void hdy0i['onLoaded'](kne3gu);
            }return cosnole['log']('read read'), void wco_kf['read'](r769pb, v54$m, new ekung3(p54mv, p54mv['onReadNativeCallBack'], [v54$m, r769pb, mv54t, g2se3, $rbp6, hi08, hdy0i]));
          }kne3gu = '' == d709['rootPath'] ? r769pb : r769pb['split'](d709['rootPath'])[0x0], -0x1 != r769pb['indexOf']('http://') || -0x1 != r769pb['indexOf']('https://') ? p97r6['EnvConfig']['load']['call'](hdy0i, r769pb, mv54t, g2se3, $rbp6, hi08) : wco_kf['readFile'](kne3gu, v54$m, new ekung3(p54mv, p54mv['onReadNativeCallBack'], [v54$m, r769pb, mv54t, g2se3, $rbp6, hi08, hdy0i]), r769pb);
        }
      }
    }, hy0d8['resMgrLoad'] = function (m$j54t, ekgn, x25mt, ts5j2, b6r879, bpv$6r, jx25ts) {
      void 0x0 === x25mt && (x25mt = 0x0), void 0x0 === ts5j2 && (ts5j2 = !0x1), void 0x0 === b6r879 && (b6r879 = !0x1), void 0x0 === bpv$6r && (bpv$6r = 0x0), void 0x0 === jx25ts && (jx25ts = 0x3), -0x1 != m$j54t['indexOf']('mpack') && console['log']('=============resMgrLoad url:', m$j54t), p97r6['EnvConfig']['resMgrLoad'](m$j54t, (q_zw, y867d9, iyhd0) => {
        p54mv['prototype']['resMgrLoadCallBack'](q_zw, y867d9, iyhd0, ekgn);
      }, x25mt, ts5j2, b6r879, bpv$6r, jx25ts);
    }, hy0d8['resMgrLoadCallBack'] = function (owfzq_, $m4vp, x52js, sugx3e) {
      console['log']('buff:::', owfzq_, x52js, wco_kf['fileNativeDir'] + '///' + wco_kf['fileListName']), sugx3e(owfzq_, $m4vp, x52js);
    }, hy0d8['clearRes'] = function (uexs3, pv4r) {
      this['clearRes'](uexs3, pv4r = void 0x0 === pv4r ? !0x1 : pv4r), pv4r = wco_kf['getFileInfo'](uexs3), !pv4r || -0x1 == uexs3['indexOf']('http://') && -0x1 == uexs3['indexOf']('https://') || (pv4r = pv4r['md5'], pv4r = wco_kf['getFileNativePath'](pv4r), wco_kf['remove'](pv4r));
    }, p54mv['onReadNativeCallBack'] = function (rpv$b, mxt5, fwqaz, b$rv4, q1af, _cwo, p$vm4, ex, afwq_) {
      void 0x0 === b$rv4 && (b$rv4 = !0x0), void 0x0 === _cwo && (_cwo = !0x1), (ex = void 0x0 === ex ? 0x0 : ex) ? 0x1 == ex && p97r6['EnvConfig']['load']['call'](p$vm4, mxt5, fwqaz, b$rv4, q1af, _cwo) : (afwq_ = 'json' == fwqaz || 'atlas' == fwqaz ? p97r6['getJson'](afwq_['data']) : 'xml' == fwqaz ? qfo_['parseXMLFromString'](afwq_['data']) : afwq_['data'], p$vm4['onLoaded'](afwq_), !p97r6['isZiYu'] && p97r6['isPosMsgYu'] && 'arraybuffer' != fwqaz && wx['postMessage']({ 'url': mxt5, 'data': afwq_, 'isLoad': !0x0 }));
    }, bvpr(p54mv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), p54mv;
  }(),
      wco_kf = (cw_ofk(e3ngus, 'laya.wx.mini.MiniFileMgr', e3ungs), e3ngus['isLoadFile'] = function (p4m$v) {
    return -0x1 != e3ngus['_fileTypeArr']['indexOf'](p4m$v);
  }, e3ngus['getFileInfo'] = function (xjesg) {
    return xjesg = xjesg['split']('?')[0x0], xjesg = e3ngus['filesListObj'][xjesg], null == xjesg ? null : xjesg;
  }, e3ngus['onFileUpdate'] = function (_kunc, r86) {
    var ek3u = _kunc['split']('/');_kunc = ek3u[ek3u['length'] - 0x1], ek3u = e3ngus['getFileInfo'](r86), null == ek3u ? e3ngus['onSaveFile'](r86, _kunc) : ek3u['readyUrl'] != r86 && e3ngus['remove'](_kunc, r86);
  }, e3ngus['exits'] = function (vbr$p4, cn3ok) {
    vbr$p4 = e3ngus['getFileNativePath'](vbr$p4), e3ngus['fs']['getFileInfo']({ 'filePath': vbr$p4, 'success': function (r96b8) {
        null != cn3ok && cn3ok['runWith']([0x0, r96b8]);
      }, 'fail': function (r6$bpv) {
        null != cn3ok && cn3ok['runWith']([0x1, r6$bpv]);
      } });
  }, e3ngus['read'] = function (ugxe3s, cu_nok, mtx5j, ofc_) {
    void 0x0 === cu_nok && (cu_nok = 'ascill'), ugxe3s = '' != (ofc_ = void 0x0 === ofc_ ? '' : ofc_) ? e3ngus['getFileNativePath'](ugxe3s) : ugxe3s, e3ngus['fs']['readFile']({ 'filePath': ugxe3s, 'encoding': cu_nok, 'success': function (ofkw) {
        null != mtx5j && mtx5j['runWith']([0x0, ofkw]);
      }, 'fail': function (kc_u) {
        kc_u && '' != ofc_ ? e3ngus['down'](ofc_, cu_nok, mtx5j, ofc_) : null != mtx5j && mtx5j['runWith']([0x1]);
      } });
  }, e3ngus['readNativeFile'] = function (yd9678, wf_coz) {
    e3ngus['fs']['readFile']({ 'filePath': yd9678, 'encoding': '', 'success': function (b768y) {
        null != wf_coz && wf_coz['runWith']([0x0]);
      }, 'fail': function (_kcwf) {
        null != wf_coz && wf_coz['runWith']([0x1]);
      } });
  }, e3ngus['down'] = function (b79r, t5jm42, negus, oc_fk) {
    void 0x0 === t5jm42 && (t5jm42 = 'ascill'), void 0x0 === oc_fk && (oc_fk = '');var fwkc_ = e3ngus['getFileNativePath'](oc_fk);e3ngus['wxdown']({ 'url': b79r, 'filePath': fwkc_, 'success': function (a1qzwf) {
        0xc8 === a1qzwf['statusCode'] && e3ngus['readFile'](a1qzwf['filePath'], t5jm42, negus, oc_fk);
      }, 'fail': function (ge3x2s) {
        null != negus && negus['runWith']([0x1, ge3x2s]);
      } })['onProgressUpdate'](function (je2sxg) {
      null != negus && negus['runWith']([0x2, je2sxg['progress']]);
    });
  }, e3ngus['readFile'] = function (e3nu, yb976, ocwk_, qza1wf) {
    void 0x0 === qza1wf && (qza1wf = ''), e3ngus['fs']['readFile']({ 'filePath': e3nu, 'encoding': yb976 = void 0x0 === yb976 ? 'ascill' : yb976, 'success': function (vrp$m) {
        -0x1 == e3nu['indexOf']('http://') && -0x1 == e3nu['indexOf']('https://') || e3ngus['onFileUpdate'](e3nu, qza1wf), null != ocwk_ && ocwk_['runWith']([0x0, vrp$m]);
      }, 'fail': function (pv54$) {
        pv54$ && null != ocwk_ && ocwk_['runWith']([0x1, pv54$]);
      } });
  }, e3ngus['downImg'] = function (knu3g, $jtm54, prmv$) {
    void 0x0 === prmv$ && (prmv$ = ''), e3ngus['wxdown']({ 'url': knu3g, 'success': function (bvpr6$) {
        0xc8 === bvpr6$['statusCode'] && e3ngus['copyFile'](bvpr6$['tempFilePath'], prmv$, $jtm54);
      }, 'fail': function (uo_cn) {
        null != $jtm54 && $jtm54['runWith']([0x1, uo_cn]);
      } });
  }, e3ngus['copyFile'] = function (kenuc, r967b, co3u) {
    var y807id = kenuc['split']('/'),
        useg3n = y807id[y807id['length'] - 0x1];r967b['split']('?')[0x0];var ge32xs = e3ngus['getFileInfo'](r967b);y807id = e3ngus['getFileNativePath'](useg3n), e3ngus['fs']['copyFile']({ 'srcPath': kenuc, 'destPath': y807id, 'success': function (ugens) {
        ge32xs ? ge32xs['readyUrl'] != r967b && e3ngus['remove'](useg3n, r967b, co3u) : (e3ngus['onSaveFile'](r967b, useg3n), null != co3u && co3u['runWith']([0x0]));
      }, 'fail': function ($jmt4) {
        null != co3u && co3u['runWith']([0x1, $jmt4]);
      } });
  }, e3ngus['getFileNativePath'] = function (cfn) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cfn;
  }, e3ngus['remove'] = function (sx3e, bvrp, jm$) {
    void 0x0 === bvrp && (bvrp = '');var x2js5t = e3ngus['getFileInfo'](bvrp),
        _oncu = e3ngus['getFileNativePath'](x2js5t['md5']);x52['loader']['clearRes'](x2js5t['readyUrl']), e3ngus['fs']['unlink']({ 'filePath': _oncu, 'success': function (jstgx2) {
        '' != bvrp && e3ngus['onSaveFile'](bvrp, sx3e), null != jm$ && jm$['runWith']([0x0]);
      }, 'fail': function (aqf1wz) {} });
  }, e3ngus['onSaveFile'] = function (q_faw, r96b) {
    var tvm45 = q_faw['split']('?')[0x0];e3ngus['filesListObj'][tvm45] = { 'md5': r96b, 'readyUrl': q_faw }, e3ngus['fs']['writeFile']({ 'filePath': e3ngus['fileNativeDir'] + '/' + e3ngus['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e3ngus['filesListObj']), 'success': function (cou3kn) {
        console['log']('写入测试测试成功：', cou3kn);
      }, 'fail': function (rvm$) {
        console['log']('写入测试测试失败：', rvm$);
      } });
  }, e3ngus['existDir'] = function (wafq1, _qwfo) {
    e3ngus['fs']['mkdir']({ 'dirPath': wafq1, 'success': function (m4vr$) {
        null != _qwfo && _qwfo['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (nou_c) {
        -0x1 != nou_c['errMsg']['indexOf']('file already exists') ? e3ngus['readSync'](e3ngus['fileListName'], 'utf8', _qwfo) : null != _qwfo && _qwfo['runWith']([0x1, nou_c]);
      } });
  }, e3ngus['readSync'] = function ($t45mv, y86b97, kfow_c, y987) {
    void 0x0 === y86b97 && (y86b97 = 'ascill'), void 0x0 === y987 && (y987 = ''), $t45mv = e3ngus['getFileNativePath']($t45mv);var j$mt4;try {
      j$mt4 = e3ngus['fs']['readFileSync']($t45mv), null != kfow_c && kfow_c['runWith']([0x0, { 'data': j$mt4 }]);
    } catch (v4tm) {
      null != kfow_c && kfow_c['runWith']([0x1]);
    }
  }, e3ngus['readCache'] = function () {}, e3ngus['writeCache'] = function (cn3oku) {
    var wcfk = readyUrl['split']('?')[0x0];e3ngus['filesListObj'][wcfk] = { 'md5': md5Name, 'readyUrl': readyUrl }, e3ngus['fs']['writeFile']({ 'filePath': e3ngus['fileNativeDir'] + '/' + e3ngus['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](e3ngus['filesListObj']), 'success': function (fco_nk) {}, 'fail': function (dy80i) {} });
  }, e3ngus['setNativeFileDir'] = function (zfw_oc) {
    e3ngus['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zfw_oc;
  }, e3ngus['filesListObj'] = {}, e3ngus['fileNativeDir'] = null, e3ngus['fileListName'] = 'layaairfiles.txt', e3ngus['ziyuFileData'] = {}, bvpr(e3ngus, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), e3ngus);function e3ngus() {
    e3ngus['__super']['call'](this);
  }var _zaqfw = function () {
    function _f() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, _f['__super']['call'](this), this['_sound'] = _f['_createSound']();
    }cw_ofk(_f, 'laya.wx.mini.MiniSound', e3ungs);var esxjg2 = _f['prototype'];return esxjg2['load'] = function (ko3n) {
      var t5v4m = this,
          c_wofk;function d708i() {
        if (null != _f['_null']) t5v4m['_sound']['onCanplay'](_f['_null']), t5v4m['_sound']['onError'](_f['_null']);else try {
          t5v4m['_sound']['onCanplay'](null), t5v4m['_sound']['onError'](null), _f['_null'] = null;
        } catch (ge3ku) {
          console['warn']('[wxmini] _clearSound:' + ge3ku), t5v4m['_sound']['onCanplay'](j4m$t), t5v4m['_sound']['onError'](j4m$t), _f['_null'] = j4m$t;
        }
      }function j4m$t() {}ko3n = d709['formatURL'](ko3n), this['url'] = ko3n, _f['_audioCache'][ko3n] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        d708i(), c_wofk['loaded'] = !0x0, c_wofk['event']('complete'), _f['_audioCache'][c_wofk['url']] = c_wofk;
      }), this['_sound']['onError'](function ($tjm) {
        console['error']('errCode=' + $tjm['errCode'] + '  errMsg=' + $tjm['errMsg']), d708i(), c_wofk['event']('error');
      }), this['_sound']['src'] = ko3n, c_wofk = this);
    }, esxjg2['play'] = function (xtjgs, fkcn) {
      void 0x0 === xtjgs && (xtjgs = 0x0), void 0x0 === fkcn && (fkcn = 0x0), (s2xej = this['url'] == f1waz['_tMusic'] ? (_f['_musicAudio'] || (_f['_musicAudio'] = _f['_createSound']()), _f['_musicAudio']) : _f['_createSound']())['src'] = this['url'];var s2xej = new x2es3(s2xej);return s2xej['url'] = this['url'], s2xej['loops'] = fkcn, s2xej['startTime'] = xtjgs, s2xej['play'](), f1waz['addChannel'](s2xej), s2xej;
    }, esxjg2['dispose'] = function () {
      var gusne3 = _f['_audioCache'][this['url']];gusne3 && (gusne3['src'] = '', delete _f['_audioCache'][this['url']]);
    }, $p6brv(0x0, esxjg2, 'duration', function () {
      return this['_sound']['duration'];
    }), _f['_createSound'] = function () {
      return _f['_id']++, p97r6['window']['wx']['createInnerAudioContext']();
    }, _f['_musicAudio'] = null, _f['_id'] = 0x0, _f['_audioCache'] = {}, _f['_null'] = void 0x0, _f;
  }(),
      x2es3 = function () {
    function y698(pr796) {
      this['_audio'] = null, this['_onEnd'] = null, y698['__super']['call'](this), this['_audio'] = pr796, this['_onEnd'] = qfo_['bind'](this['__onEnd'], this), pr796['onEnded'](this['_onEnd']);
    }cw_ofk(y698, 'laya.wx.mini.MiniSoundChannel', bv4$r);var xj2tgs = y698['prototype'];return xj2tgs['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (x52['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xj2tgs['__onNull'] = function () {}, xj2tgs['play'] = function () {
      this['isStopped'] = !0x1, f1waz['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, xj2tgs['stop'] = function () {
      if (this['isStopped'] = !0x0, f1waz['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != y698['_null']) this['_audio']['onEnded'](y698['_null']);else try {
          this['_audio']['onEnded'](null), y698['_null'] = null;
        } catch (y08dih) {
          console['warn']('[wxmini] stop:' + y08dih), this['_audio']['onEnded'](qfo_['bind'](this['__onNull'], this)), y698['_null'] = qfo_['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, xj2tgs['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, xj2tgs['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, f1waz['addChannel'](this), this['_audio']['play']());
    }, $p6brv(0x0, xj2tgs, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), $p6brv(0x0, xj2tgs, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), $p6brv(0x0, xj2tgs, 'volume', function () {
      return 0x1;
    }, function (j25st) {}), y698['_null'] = void 0x0, y698;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (qofwz_, t5x2j) {
  'use strict';

  for (var mjt245 in Object['defineProperty'](t5x2j, '__esModule', { 'value': !0x0 }), Laya) {
    var _qfaw = Laya[mjt245];_qfaw && _qfaw['__isclass'] && (t5x2j[mjt245] = _qfaw);
  }
});