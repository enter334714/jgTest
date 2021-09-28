var O = wx.$c;
!function (c3f5k, m96igx) {
  m96igx['un'], m96igx['uns'];var l$datw = m96igx['static'],
      lbadt = m96igx['class'],
      szvj_y = m96igx['getset'];m96igx['__newvec'];var cuf = laya['utils']['Browser'],
      gx6m1 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      kcq7f3 = laya['resource']['HTMLImage'],
      i69mg = laya['utils']['Handler'],
      hatl = laya['display']['Input'],
      q42o = laya['net']['Loader'];laya['maths']['Matrix'];var ngxm9 = laya['renders']['Render'],
      cuk8f = laya['utils']['RunDriver'];laya['media']['Sound'];var lbdha = laya['media']['SoundChannel'],
      ofe = laya['media']['SoundManager'],
      vys4_ = (laya['display']['Stage'], laya['net']['URL']),
      r$atw = laya['utils']['Utils'],
      o0q42 = (lbadt(x6u85, 'laya.wx.mini.MiniAdpter'), x6u85['getJson'] = function (wld$t) {
    return JSON['parse'](wld$t);
  }, x6u85['init'] = function (i6x89, jsvy) {
    void 0x0 === i6x89 && (i6x89 = !0x1), void 0x0 === jsvy && (jsvy = !0x1), x6u85['_inited'] || (x6u85['window'] = c3f5k)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (x6u85['_inited'] = !0x0, x6u85['isZiYu'] = jsvy, x6u85['isPosMsgYu'] = i6x89, x6u85['EnvConfig'] = {}, x6u85['isZiYu'] || (o2q4e0['setNativeFileDir']('/layaairGame'), o2q4e0['existDir'](o2q4e0['fileNativeDir'], i69mg['create'](x6u85, x6u85['onMkdirCallBack']))), x6u85['window']['focus'] = function () {}, m96igx['getUrlPath'] = function () {}, x6u85['window']['logtime'] = function (qo30e) {}, x6u85['window']['alertTimeLog'] = function (s_4) {}, x6u85['window']['resetShareInfo'] = function () {}, x6u85['window']['CanvasRenderingContext2D'] = function () {}, x6u85['window']['CanvasRenderingContext2D']['prototype'] = x6u85['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], x6u85['window']['document']['body']['appendChild'] = function () {}, x6u85['EnvConfig']['pixelRatioInt'] = 0x0, cuk8f['getPixelRatio'] = x6u85['pixelRatio'], x6u85['_preCreateElement'] = cuf['createElement'], cuf['createElement'] = x6u85['createElement'], cuk8f['createShaderCondition'] = x6u85['createShaderCondition'], r$atw['parseXMLFromString'] = x6u85['parseXMLFromString'], hatl['_createInputElement'] = xu9ig['_createInputElement'], x6u85['EnvConfig']['load'] = q42o['prototype']['load'], q42o['prototype']['load'] = f3qo['prototype']['load'], x6u85['isZiYu'] && i6x89 && wx['onMessage'](function ($datw) {
      $datw['isLoad'] && (o2q4e0['ziyuFileData'][$datw['url']] = $datw['data']);
    }));
  }, x6u85['onMkdirCallBack'] = function (nh1bg, kc578f) {
    nh1bg || (o2q4e0['filesListObj'] = JSON['parse'](kc578f['data']));
  }, x6u85['pixelRatio'] = function () {
    if (!x6u85['EnvConfig']['pixelRatioInt']) try {
      var nb1g9m = wx['getSystemInfoSync']();return x6u85['EnvConfig']['pixelRatioInt'] = nb1g9m['pixelRatio'], nb1g9m['pixelRatio'];
    } catch (jvsz_) {}return x6u85['EnvConfig']['pixelRatioInt'];
  }, x6u85['createElement'] = function (fc5k73) {
    var e20sv4;if ('canvas' == fc5k73) return 0x1 == x6u85['idx'] ? x6u85['isZiYu'] ? (e20sv4 = sharedCanvas)['style'] = {} : e20sv4 = c3f5k['canvas'] : e20sv4 = c3f5k['wx']['createCanvas'](), x6u85['idx']++, e20sv4;if ('textarea' == fc5k73 || 'input' == fc5k73) return x6u85['onCreateInput'](fc5k73);if ('div' != fc5k73) return x6u85['_preCreateElement'](fc5k73);return fc5k73 = x6u85['_preCreateElement'](fc5k73), (fc5k73['contains'] = function (ocf3q) {
      return null;
    }, fc5k73['removeChild'] = function (tlrwa$) {}, fc5k73);
  }, x6u85['onCreateInput'] = function (c8k5) {
    return c8k5 = x6u85['_preCreateElement'](c8k5), (c8k5['focus'] = xu9ig['wxinputFocus'], c8k5['blur'] = xu9ig['wxinputblur'], c8k5['style'] = {}, c8k5['value'] = 0x0, c8k5['parentElement'] = {}, c8k5['placeholder'] = {}, c8k5['type'] = {}, c8k5['setColor'] = function (u9g6xi) {}, c8k5['setType'] = function (hmgb1n) {}, c8k5['setFontFace'] = function (nbm1g9) {}, c8k5['addEventListener'] = function (e2s4v) {}, c8k5['contains'] = function (zy4s_v) {
      return null;
    }, c8k5['removeChild'] = function (xu6i89) {}, c8k5);
  }, x6u85['createShaderCondition'] = function (s24zv_) {
    var zjvy = this;return function () {
      return zjvy[s24zv_['replace']('this.', '')];
    };
  }, x6u85['EnvConfig'] = null, x6u85['window'] = null, x6u85['_preCreateElement'] = null, x6u85['_inited'] = !0x1, x6u85['wxRequest'] = null, x6u85['systemInfo'] = null, x6u85['version'] = '0.0.1', x6u85['isZiYu'] = !0x1, x6u85['isPosMsgYu'] = !0x1, x6u85['parseXMLFromString'] = function (fckq7) {
    var tbhadn;fckq7 = fckq7['replace'](/>\s+</g, '><');try {
      tbhadn = new c3f5k['Parser']['DOMParser']()['parseFromString'](fckq7, 'text/xml');
    } catch (cfku58) {
      throw '需要引入xml解析库文件';
    }return tbhadn;
  }, x6u85['idx'] = 0x1, x6u85);function x6u85() {}lbadt(x6ug9, 'laya.wx.mini.MiniImage'), x6ug9['prototype']['_loadImage'] = function (mx19g6) {
    var $r = !0x1;-0x1 == mx19g6['indexOf']('layaNativeDir/') && ($r = !0x0, mx19g6 = vys4_['formatURL'](mx19g6)), o2q4e0['getFileInfo'](mx19g6) ? x6ug9['onCreateImage'](mx19g6, this, !$r) : -0x1 != mx19g6['indexOf']('http://') || -0x1 != mx19g6['indexOf']('https://') ? o2q4e0['downImg'](mx19g6, new i69mg(x6ug9, x6ug9['onDownImgCallBack'], [mx19g6, this]), mx19g6) : x6ug9['onCreateImage'](mx19g6, this, !0x0);
  }, x6ug9['onDownImgCallBack'] = function (fe37, voe402, qf3kc) {
    qf3kc ? voe402['onError'](null) : x6ug9['onCreateImage'](fe37, voe402);
  }, x6ug9['onCreateImage'] = function (kcf5u, tawdh, o3qcf) {
    var i6ug, a$tlr;function xu68i() {
      a$tlr['onload'] = null, a$tlr['onerror'] = null, delete tawdh['imgCache'][kcf5u];
    }i6ug = (o3qcf = void 0x0 === o3qcf ? !0x1 : o3qcf) ? kcf5u : (hd1nab = o2q4e0['getFileInfo'](kcf5u)['md5'], o2q4e0['getFileNativePath'](hd1nab)), null == tawdh['imgCache'] && (tawdh['imgCache'] = {}), o3qcf = function () {
      xu68i(), tawdh['onLoaded'](a$tlr);
    };var hd1nab = function () {
      xu68i(), tawdh['event']('error', 'Load image failed');
    };'nativeimage' == tawdh['_type'] ? ((a$tlr = new cuf['window']['Image']())['crossOrigin'] = '', a$tlr['onload'] = o3qcf, a$tlr['onerror'] = hd1nab, a$tlr['src'] = i6ug, tawdh['imgCache'][kcf5u] = a$tlr) : new kcq7f3['create'](i6ug, { 'onload': o3qcf, 'onerror': hd1nab, 'onCreate': function (zvys) {
        a$tlr = zvys, tawdh['imgCache'][kcf5u] = zvys;
      } });
  };function x6ug9() {}var xu9ig = (lbadt(mix96g, 'laya.wx.mini.MiniInput'), mix96g['_createInputElement'] = function () {
    hatl['_initInput'](hatl['area'] = cuf['createElement']('textarea')), hatl['_initInput'](hatl['input'] = cuf['createElement']('input')), hatl['inputContainer'] = cuf['createElement']('div'), hatl['inputContainer']['style']['position'] = 'absolute', hatl['inputContainer']['style']['zIndex'] = 0x186a0, cuf['container']['appendChild'](hatl['inputContainer']), hatl['inputContainer']['setPos'] = function (ves042, _svj) {
      hatl['inputContainer']['style']['left'] = ves042 + 'px', hatl['inputContainer']['style']['top'] = _svj + 'px';
    }, m96igx['stage']['on']('resize', null, mix96g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hbm) {
      c3f5k['dispatchEvent'] && c3f5k['dispatchEvent']('resize');
    }), ofe['_soundClass'] = adhnbt, ofe['_musicClass'] = adhnbt;
  }, mix96g['_onStageResize'] = function () {
    m96igx['stage']['_canvasTransform']['identity']()['scale'](cuf['width'] / ngxm9['canvas']['width'] / cuk8f['getPixelRatio'](), cuf['height'] / ngxm9['canvas']['height'] / cuk8f['getPixelRatio']());
  }, mix96g['wxinputFocus'] = function (vs0e4) {
    var qfeo = hatl['inputElement']['target'];qfeo && !qfeo['editable'] || (o0q42['window']['wx']['offKeyboardConfirm'](), o0q42['window']['wx']['offKeyboardInput'](), o0q42['window']['wx']['showKeyboard']({ 'defaultValue': qfeo['text'], 'maxLength': qfeo['maxChars'], 'multiple': qfeo['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (i98ux6) {}, 'fail': function (d1mhb) {} }), o0q42['window']['wx']['onKeyboardConfirm'](function (watr$) {
      watr$ = watr$ ? watr$['value'] : '', (qfeo['text'] = watr$, qfeo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), o0q42['window']['wx']['onKeyboardInput'](function (zsvy4) {
      zsvy4 = zsvy4 ? zsvy4['value'] : '', qfeo['multiline'] || -0x1 == zsvy4['indexOf']('\x0a') ? (qfeo['text'] = zsvy4, qfeo['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, mix96g['inputEnter'] = function () {
    hatl['inputElement']['target']['focus'] = !0x1;
  }, mix96g['wxinputblur'] = function () {
    mix96g['hideKeyboard']();
  }, mix96g['hideKeyboard'] = function () {
    o0q42['window']['wx']['offKeyboardConfirm'](), o0q42['window']['wx']['offKeyboardInput'](), o0q42['window']['wx']['hideKeyboard']({ 'success': function (bdha1) {
        console['log']('隐藏键盘');
      }, 'fail': function (hd1na) {
        console['log']('隐藏键盘出错:' + (hd1na ? hd1na['errMsg'] : ''));
      } });
  }, mix96g);function mix96g() {}var f3qo = function () {
    function k8i5u() {}lbadt(k8i5u, 'laya.wx.mini.MiniLoader');var s0z42 = k8i5u['prototype'];return s0z42['load'] = function (ltra$, m91ngx, atnbdh, v2sz4, dnhmb) {
      void 0x0 === atnbdh && (atnbdh = !0x0), void 0x0 === dnhmb && (dnhmb = !0x1);var tnhad = this;0x0 === (tnhad['_url'] = ltra$)['indexOf']('data:image') ? tnhad['_type'] = m91ngx = 'image' : tnhad['_type'] = m91ngx = m91ngx || tnhad['getTypeFromUrl'](ltra$), tnhad['_cache'] = atnbdh, tnhad['_data'] = null;var hltdaw = 'ascii';-0x1 != ltra$['indexOf']('.fnt') ? hltdaw = 'utf8' : 'arraybuffer' == m91ngx && (hltdaw = '');var q70o3 = r$atw['getFileExtension'](ltra$);if (-0x1 != k8i5u['_fileTypeArr']['indexOf'](q70o3)) o0q42['EnvConfig']['load']['call'](this, ltra$, m91ngx, atnbdh, v2sz4, dnhmb);else {
        if (o2q4e0['getFileInfo'](ltra$)) o0q42['EnvConfig']['load']['call'](this, ltra$, m91ngx, atnbdh, v2sz4, dnhmb);else {
          if (-0x1 != ltra$['indexOf']('layaNativeDir/')) {
            if (o0q42['isZiYu']) {
              var i5k68 = o2q4e0['ziyuFileData'][ltra$];return void tnhad['onLoaded'](i5k68);
            }return cosnole['log']('read read'), void o2q4e0['read'](ltra$, hltdaw, new i69mg(k8i5u, k8i5u['onReadNativeCallBack'], [hltdaw, ltra$, m91ngx, atnbdh, v2sz4, dnhmb, tnhad]));
          }i5k68 = '' == vys4_['rootPath'] ? ltra$ : ltra$['split'](vys4_['rootPath'])[0x0], -0x1 != ltra$['indexOf']('http://') || -0x1 != ltra$['indexOf']('https://') ? o0q42['EnvConfig']['load']['call'](tnhad, ltra$, m91ngx, atnbdh, v2sz4, dnhmb) : o2q4e0['readFile'](i5k68, hltdaw, new i69mg(k8i5u, k8i5u['onReadNativeCallBack'], [hltdaw, ltra$, m91ngx, atnbdh, v2sz4, dnhmb, tnhad]), ltra$);
        }
      }
    }, s0z42['resMgrLoad'] = function (q0e37, i9x6mg, vz_sy, syv_j, lhdba, y_sv4, thlaw) {
      void 0x0 === vz_sy && (vz_sy = 0x0), void 0x0 === syv_j && (syv_j = !0x1), void 0x0 === lhdba && (lhdba = !0x1), void 0x0 === y_sv4 && (y_sv4 = 0x0), void 0x0 === thlaw && (thlaw = 0x3), -0x1 != q0e37['indexOf']('mpack') && console['log']('=============resMgrLoad url:', q0e37), o0q42['EnvConfig']['resMgrLoad'](q0e37, (hbalt, wladt, z40vs2) => {
        k8i5u['prototype']['resMgrLoadCallBack'](hbalt, wladt, z40vs2, i9x6mg);
      }, vz_sy, syv_j, lhdba, y_sv4, thlaw);
    }, s0z42['resMgrLoadCallBack'] = function (bnhdm1, k5cuf8, qfkc3, k3fc5) {
      console['log']('buff:::', bnhdm1, qfkc3, o2q4e0['fileNativeDir'] + '///' + o2q4e0['fileListName']), k3fc5(bnhdm1, k5cuf8, qfkc3);
    }, s0z42['clearRes'] = function (v20se, u5kc8i) {
      this['clearRes'](v20se, u5kc8i = void 0x0 === u5kc8i ? !0x1 : u5kc8i), u5kc8i = o2q4e0['getFileInfo'](v20se), !u5kc8i || -0x1 == v20se['indexOf']('http://') && -0x1 == v20se['indexOf']('https://') || (u5kc8i = u5kc8i['md5'], u5kc8i = o2q4e0['getFileNativePath'](u5kc8i), o2q4e0['remove'](u5kc8i));
    }, k8i5u['onReadNativeCallBack'] = function (cf7k35, k7f5c8, dwl$, fck, _jysv, _jzys, s0v42z, kcf8, f8cuk5) {
      void 0x0 === fck && (fck = !0x0), void 0x0 === _jzys && (_jzys = !0x1), (kcf8 = void 0x0 === kcf8 ? 0x0 : kcf8) ? 0x1 == kcf8 && o0q42['EnvConfig']['load']['call'](s0v42z, k7f5c8, dwl$, fck, _jysv, _jzys) : (f8cuk5 = 'json' == dwl$ || 'atlas' == dwl$ ? o0q42['getJson'](f8cuk5['data']) : 'xml' == dwl$ ? r$atw['parseXMLFromString'](f8cuk5['data']) : f8cuk5['data'], s0v42z['onLoaded'](f8cuk5), !o0q42['isZiYu'] && o0q42['isPosMsgYu'] && 'arraybuffer' != dwl$ && wx['postMessage']({ 'url': k7f5c8, 'data': f8cuk5, 'isLoad': !0x0 }));
    }, l$datw(k8i5u, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k8i5u;
  }(),
      o2q4e0 = (lbadt(nh1ab, 'laya.wx.mini.MiniFileMgr', gx6m1), nh1ab['isLoadFile'] = function (ldawt$) {
    return -0x1 != nh1ab['_fileTypeArr']['indexOf'](ldawt$);
  }, nh1ab['getFileInfo'] = function (lwrt$a) {
    return lwrt$a = lwrt$a['split']('?')[0x0], lwrt$a = nh1ab['filesListObj'][lwrt$a], null == lwrt$a ? null : lwrt$a;
  }, nh1ab['onFileUpdate'] = function ($ltwar, ui58k6) {
    var mbn9g = $ltwar['split']('/');$ltwar = mbn9g[mbn9g['length'] - 0x1], mbn9g = nh1ab['getFileInfo'](ui58k6), null == mbn9g ? nh1ab['onSaveFile'](ui58k6, $ltwar) : mbn9g['readyUrl'] != ui58k6 && nh1ab['remove']($ltwar, ui58k6);
  }, nh1ab['exits'] = function (igxu69, i6x9mg) {
    igxu69 = nh1ab['getFileNativePath'](igxu69), nh1ab['fs']['getFileInfo']({ 'filePath': igxu69, 'success': function (nm9gb) {
        null != i6x9mg && i6x9mg['runWith']([0x0, nm9gb]);
      }, 'fail': function (kcu5) {
        null != i6x9mg && i6x9mg['runWith']([0x1, kcu5]);
      } });
  }, nh1ab['read'] = function (hmgbn1, nhm1d, hba1d, ev24o) {
    void 0x0 === nhm1d && (nhm1d = 'ascill'), hmgbn1 = '' != (ev24o = void 0x0 === ev24o ? '' : ev24o) ? nh1ab['getFileNativePath'](hmgbn1) : hmgbn1, nh1ab['fs']['readFile']({ 'filePath': hmgbn1, 'encoding': nhm1d, 'success': function (ck7q3f) {
        null != hba1d && hba1d['runWith']([0x0, ck7q3f]);
      }, 'fail': function (s_yj) {
        s_yj && '' != ev24o ? nh1ab['down'](ev24o, nhm1d, hba1d, ev24o) : null != hba1d && hba1d['runWith']([0x1]);
      } });
  }, nh1ab['readNativeFile'] = function (kq7, q73kc) {
    nh1ab['fs']['readFile']({ 'filePath': kq7, 'encoding': '', 'success': function (ix8u9) {
        null != q73kc && q73kc['runWith']([0x0]);
      }, 'fail': function (eov204) {
        null != q73kc && q73kc['runWith']([0x1]);
      } });
  }, nh1ab['down'] = function (b9mn, j_y, s2_zv4, q7ofe) {
    void 0x0 === j_y && (j_y = 'ascill'), void 0x0 === q7ofe && (q7ofe = '');var qo7e3 = nh1ab['getFileNativePath'](q7ofe);nh1ab['wxdown']({ 'url': b9mn, 'filePath': qo7e3, 'success': function (btdahn) {
        0xc8 === btdahn['statusCode'] && nh1ab['readFile'](btdahn['filePath'], j_y, s2_zv4, q7ofe);
      }, 'fail': function (lawhdt) {
        null != s2_zv4 && s2_zv4['runWith']([0x1, lawhdt]);
      } })['onProgressUpdate'](function (bahlt) {
      null != s2_zv4 && s2_zv4['runWith']([0x2, bahlt['progress']]);
    });
  }, nh1ab['readFile'] = function (iu8k65, at$rlw, yzvjs_, dtablh) {
    void 0x0 === dtablh && (dtablh = ''), nh1ab['fs']['readFile']({ 'filePath': iu8k65, 'encoding': at$rlw = void 0x0 === at$rlw ? 'ascill' : at$rlw, 'success': function (blthad) {
        -0x1 == iu8k65['indexOf']('http://') && -0x1 == iu8k65['indexOf']('https://') || nh1ab['onFileUpdate'](iu8k65, dtablh), null != yzvjs_ && yzvjs_['runWith']([0x0, blthad]);
      }, 'fail': function (qf7oc3) {
        qf7oc3 && null != yzvjs_ && yzvjs_['runWith']([0x1, qf7oc3]);
      } });
  }, nh1ab['downImg'] = function (ng9mx1, eo370q, kfc78) {
    void 0x0 === kfc78 && (kfc78 = ''), nh1ab['wxdown']({ 'url': ng9mx1, 'success': function (i9mg) {
        0xc8 === i9mg['statusCode'] && nh1ab['copyFile'](i9mg['tempFilePath'], kfc78, eo370q);
      }, 'fail': function (f7kcq3) {
        null != eo370q && eo370q['runWith']([0x1, f7kcq3]);
      } });
  }, nh1ab['copyFile'] = function (j_zyv, lhtabd, u58xi6) {
    var n1x9 = j_zyv['split']('/'),
        s024e = n1x9[n1x9['length'] - 0x1];lhtabd['split']('?')[0x0];var a$tldw = nh1ab['getFileInfo'](lhtabd);n1x9 = nh1ab['getFileNativePath'](s024e), nh1ab['fs']['copyFile']({ 'srcPath': j_zyv, 'destPath': n1x9, 'success': function (v0e42o) {
        a$tldw ? a$tldw['readyUrl'] != lhtabd && nh1ab['remove'](s024e, lhtabd, u58xi6) : (nh1ab['onSaveFile'](lhtabd, s024e), null != u58xi6 && u58xi6['runWith']([0x0]));
      }, 'fail': function (l$rtwa) {
        null != u58xi6 && u58xi6['runWith']([0x1, l$rtwa]);
      } });
  }, nh1ab['getFileNativePath'] = function (q3k) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + q3k;
  }, nh1ab['remove'] = function (ysjzv, ki8u6, xgm96i) {
    void 0x0 === ki8u6 && (ki8u6 = '');var zys_j = nh1ab['getFileInfo'](ki8u6),
        k587fc = nh1ab['getFileNativePath'](zys_j['md5']);m96igx['loader']['clearRes'](zys_j['readyUrl']), nh1ab['fs']['unlink']({ 'filePath': k587fc, 'success': function (v0se4) {
        '' != ki8u6 && nh1ab['onSaveFile'](ki8u6, ysjzv), null != xgm96i && xgm96i['runWith']([0x0]);
      }, 'fail': function (v2z0s4) {} });
  }, nh1ab['onSaveFile'] = function (ukc85i, iuk5c) {
    var o02ve = ukc85i['split']('?')[0x0];nh1ab['filesListObj'][o02ve] = { 'md5': iuk5c, 'readyUrl': ukc85i }, nh1ab['fs']['writeFile']({ 'filePath': nh1ab['fileNativeDir'] + '/' + nh1ab['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nh1ab['filesListObj']), 'success': function (qc3fo) {
        console['log']('写入测试测试成功：', qc3fo);
      }, 'fail': function (ev40o2) {
        console['log']('写入测试测试失败：', ev40o2);
      } });
  }, nh1ab['existDir'] = function (mgn1x9, tdawl$) {
    nh1ab['fs']['mkdir']({ 'dirPath': mgn1x9, 'success': function (ig9x6u) {
        null != tdawl$ && tdawl$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (e30o7) {
        -0x1 != e30o7['errMsg']['indexOf']('file already exists') ? nh1ab['readSync'](nh1ab['fileListName'], 'utf8', tdawl$) : null != tdawl$ && tdawl$['runWith']([0x1, e30o7]);
      } });
  }, nh1ab['readSync'] = function (tw$rla, qfe, ci8uk, gm91bn) {
    void 0x0 === qfe && (qfe = 'ascill'), void 0x0 === gm91bn && (gm91bn = ''), tw$rla = nh1ab['getFileNativePath'](tw$rla);var yvs4;try {
      yvs4 = nh1ab['fs']['readFileSync'](tw$rla), null != ci8uk && ci8uk['runWith']([0x0, { 'data': yvs4 }]);
    } catch (ahtdlb) {
      null != ci8uk && ci8uk['runWith']([0x1]);
    }
  }, nh1ab['readCache'] = function () {}, nh1ab['writeCache'] = function (nbhd1a) {
    var zs_4y = readyUrl['split']('?')[0x0];nh1ab['filesListObj'][zs_4y] = { 'md5': md5Name, 'readyUrl': readyUrl }, nh1ab['fs']['writeFile']({ 'filePath': nh1ab['fileNativeDir'] + '/' + nh1ab['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nh1ab['filesListObj']), 'success': function (zs4v0) {}, 'fail': function (tldab) {} });
  }, nh1ab['setNativeFileDir'] = function (xu56) {
    nh1ab['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xu56;
  }, nh1ab['filesListObj'] = {}, nh1ab['fileNativeDir'] = null, nh1ab['fileListName'] = 'layaairfiles.txt', nh1ab['ziyuFileData'] = {}, l$datw(nh1ab, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), nh1ab);function nh1ab() {
    nh1ab['__super']['call'](this);
  }var adhnbt = function () {
    function nbh1g() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, nbh1g['__super']['call'](this), this['_sound'] = nbh1g['_createSound']();
    }lbadt(nbh1g, 'laya.wx.mini.MiniSound', gx6m1);var bmhdn = nbh1g['prototype'];return bmhdn['load'] = function (e40oq2) {
      var qo20e4 = this,
          eov402;function uk586i() {
        if (null != nbh1g['_null']) qo20e4['_sound']['onCanplay'](nbh1g['_null']), qo20e4['_sound']['onError'](nbh1g['_null']);else try {
          qo20e4['_sound']['onCanplay'](null), qo20e4['_sound']['onError'](null), nbh1g['_null'] = null;
        } catch (bdlht) {
          console['warn']('[wxmini] _clearSound:' + bdlht), qo20e4['_sound']['onCanplay'](gnx9m), qo20e4['_sound']['onError'](gnx9m), nbh1g['_null'] = gnx9m;
        }
      }function gnx9m() {}e40oq2 = vys4_['formatURL'](e40oq2), this['url'] = e40oq2, nbh1g['_audioCache'][e40oq2] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        uk586i(), eov402['loaded'] = !0x0, eov402['event']('complete'), nbh1g['_audioCache'][eov402['url']] = eov402;
      }), this['_sound']['onError'](function (gmxn1) {
        console['error']('errCode=' + gmxn1['errCode'] + '  errMsg=' + gmxn1['errMsg']), uk586i(), eov402['event']('error');
      }), this['_sound']['src'] = e40oq2, eov402 = this);
    }, bmhdn['play'] = function (tbdanh, fk3qc7) {
      void 0x0 === tbdanh && (tbdanh = 0x0), void 0x0 === fk3qc7 && (fk3qc7 = 0x0), (zy4v = this['url'] == ofe['_tMusic'] ? (nbh1g['_musicAudio'] || (nbh1g['_musicAudio'] = nbh1g['_createSound']()), nbh1g['_musicAudio']) : nbh1g['_createSound']())['src'] = this['url'];var zy4v = new o73cf(zy4v);return zy4v['url'] = this['url'], zy4v['loops'] = fk3qc7, zy4v['startTime'] = tbdanh, zy4v['play'](), ofe['addChannel'](zy4v), zy4v;
    }, bmhdn['dispose'] = function () {
      var twd$a = nbh1g['_audioCache'][this['url']];twd$a && (twd$a['src'] = '', delete nbh1g['_audioCache'][this['url']]);
    }, szvj_y(0x0, bmhdn, 'duration', function () {
      return this['_sound']['duration'];
    }), nbh1g['_createSound'] = function () {
      return nbh1g['_id']++, o0q42['window']['wx']['createInnerAudioContext']();
    }, nbh1g['_musicAudio'] = null, nbh1g['_id'] = 0x0, nbh1g['_audioCache'] = {}, nbh1g['_null'] = void 0x0, nbh1g;
  }(),
      o73cf = function () {
    function hbm1(ckf573) {
      this['_audio'] = null, this['_onEnd'] = null, hbm1['__super']['call'](this), this['_audio'] = ckf573, this['_onEnd'] = r$atw['bind'](this['__onEnd'], this), ckf573['onEnded'](this['_onEnd']);
    }lbadt(hbm1, 'laya.wx.mini.MiniSoundChannel', lbdha);var mdb = hbm1['prototype'];return mdb['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (m96igx['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mdb['__onNull'] = function () {}, mdb['play'] = function () {
      this['isStopped'] = !0x1, ofe['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, mdb['stop'] = function () {
      if (this['isStopped'] = !0x0, ofe['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != hbm1['_null']) this['_audio']['onEnded'](hbm1['_null']);else try {
          this['_audio']['onEnded'](null), hbm1['_null'] = null;
        } catch (gx16m9) {
          console['warn']('[wxmini] stop:' + gx16m9), this['_audio']['onEnded'](r$atw['bind'](this['__onNull'], this)), hbm1['_null'] = r$atw['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, mdb['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, mdb['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ofe['addChannel'](this), this['_audio']['play']());
    }, szvj_y(0x0, mdb, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), szvj_y(0x0, mdb, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), szvj_y(0x0, mdb, 'volume', function () {
      return 0x1;
    }, function (yz4v_s) {}), hbm1['_null'] = void 0x0, hbm1;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (tdhlab, nxg19) {
  'use strict';

  for (var eqf3o in Object['defineProperty'](nxg19, '__esModule', { 'value': !0x0 }), Laya) {
    var q420eo = Laya[eqf3o];q420eo && q420eo['__isclass'] && (nxg19[eqf3o] = q420eo);
  }
});