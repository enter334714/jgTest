var W = wx.$l;
!function (v6mcw1, jnagt) {
  jnagt['un'], jnagt['uns'];var xhi5y = jnagt['static'],
      ruxy2h = jnagt['class'],
      i5jan$ = jnagt['getset'];jnagt['__newvec'];var m6dkws = laya['utils']['Browser'],
      mwvdk6 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      n5$ia0 = laya['resource']['HTMLImage'],
      h2xu0y = laya['utils']['Handler'],
      oq3c14 = laya['display']['Input'],
      v1wd = laya['net']['Loader'];laya['maths']['Matrix'];var ia5n$ = laya['renders']['Render'],
      vq16cw = laya['utils']['RunDriver'];laya['media']['Sound'];var pe978s = laya['media']['SoundChannel'],
      atjgfb = laya['media']['SoundManager'],
      x5y0ih = (laya['display']['Stage'], laya['net']['URL']),
      b8f9ge = laya['utils']['Utils'],
      yruhx = (ruxy2h($5na0, 'laya.wx.mini.MiniAdpter'), $5na0['getJson'] = function (afjbg) {
    return JSON['parse'](afjbg);
  }, $5na0['init'] = function (vq3oc1, h$05xi) {
    void 0x0 === vq3oc1 && (vq3oc1 = !0x1), void 0x0 === h$05xi && (h$05xi = !0x1), $5na0['_inited'] || ($5na0['window'] = v6mcw1)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || ($5na0['_inited'] = !0x0, $5na0['isZiYu'] = h$05xi, $5na0['isPosMsgYu'] = vq3oc1, $5na0['EnvConfig'] = {}, $5na0['isZiYu'] || (jn5$ia['setNativeFileDir']('/layaairGame'), jn5$ia['existDir'](jn5$ia['fileNativeDir'], h2xu0y['create']($5na0, $5na0['onMkdirCallBack']))), $5na0['window']['focus'] = function () {}, jnagt['getUrlPath'] = function () {}, $5na0['window']['logtime'] = function (u2yhx0) {}, $5na0['window']['alertTimeLog'] = function (j$i5n) {}, $5na0['window']['resetShareInfo'] = function () {}, $5na0['window']['CanvasRenderingContext2D'] = function () {}, $5na0['window']['CanvasRenderingContext2D']['prototype'] = $5na0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $5na0['window']['document']['body']['appendChild'] = function () {}, $5na0['EnvConfig']['pixelRatioInt'] = 0x0, vq16cw['getPixelRatio'] = $5na0['pixelRatio'], $5na0['_preCreateElement'] = m6dkws['createElement'], m6dkws['createElement'] = $5na0['createElement'], vq16cw['createShaderCondition'] = $5na0['createShaderCondition'], b8f9ge['parseXMLFromString'] = $5na0['parseXMLFromString'], oq3c14['_createInputElement'] = o3vq1['_createInputElement'], $5na0['EnvConfig']['load'] = v1wd['prototype']['load'], v1wd['prototype']['load'] = pdksm7['prototype']['load'], $5na0['isZiYu'] && vq3oc1 && wx['onMessage'](function (se7pk8) {
      se7pk8['isLoad'] && (jn5$ia['ziyuFileData'][se7pk8['url']] = se7pk8['data']);
    }));
  }, $5na0['onMkdirCallBack'] = function (h50x$i, b9gfte) {
    h50x$i || (jn5$ia['filesListObj'] = JSON['parse'](b9gfte['data']));
  }, $5na0['pixelRatio'] = function () {
    if (!$5na0['EnvConfig']['pixelRatioInt']) try {
      var $5ian = wx['getSystemInfoSync']();return $5na0['EnvConfig']['pixelRatioInt'] = $5ian['pixelRatio'], $5ian['pixelRatio'];
    } catch (_o4l) {}return $5na0['EnvConfig']['pixelRatioInt'];
  }, $5na0['createElement'] = function (c1wv6q) {
    var tajbf;if ('canvas' == c1wv6q) return 0x1 == $5na0['idx'] ? $5na0['isZiYu'] ? (tajbf = sharedCanvas)['style'] = {} : tajbf = v6mcw1['canvas'] : tajbf = v6mcw1['wx']['createCanvas'](), $5na0['idx']++, tajbf;if ('textarea' == c1wv6q || 'input' == c1wv6q) return $5na0['onCreateInput'](c1wv6q);if ('div' != c1wv6q) return $5na0['_preCreateElement'](c1wv6q);return c1wv6q = $5na0['_preCreateElement'](c1wv6q), (c1wv6q['contains'] = function (xh5$) {
      return null;
    }, c1wv6q['removeChild'] = function (e7s98p) {}, c1wv6q);
  }, $5na0['onCreateInput'] = function (nbt) {
    return nbt = $5na0['_preCreateElement'](nbt), (nbt['focus'] = o3vq1['wxinputFocus'], nbt['blur'] = o3vq1['wxinputblur'], nbt['style'] = {}, nbt['value'] = 0x0, nbt['parentElement'] = {}, nbt['placeholder'] = {}, nbt['type'] = {}, nbt['setColor'] = function (c43_qo) {}, nbt['setType'] = function (uh02xy) {}, nbt['setFontFace'] = function (u5x) {}, nbt['addEventListener'] = function (ske8p7) {}, nbt['contains'] = function (_34zo) {
      return null;
    }, nbt['removeChild'] = function (gbajnt) {}, nbt);
  }, $5na0['createShaderCondition'] = function (a$injt) {
    var njg = this;return function () {
      return njg[a$injt['replace']('this.', '')];
    };
  }, $5na0['EnvConfig'] = null, $5na0['window'] = null, $5na0['_preCreateElement'] = null, $5na0['_inited'] = !0x1, $5na0['wxRequest'] = null, $5na0['systemInfo'] = null, $5na0['version'] = '0.0.1', $5na0['isZiYu'] = !0x1, $5na0['isPosMsgYu'] = !0x1, $5na0['parseXMLFromString'] = function (ru2yh) {
    var msk67;ru2yh = ru2yh['replace'](/>\s+</g, '><');try {
      msk67 = new v6mcw1['Parser']['DOMParser']()['parseFromString'](ru2yh, 'text/xml');
    } catch (sd7k6m) {
      throw '需要引入xml解析库文件';
    }return msk67;
  }, $5na0['idx'] = 0x1, $5na0);function $5na0() {}ruxy2h(f8e7p9, 'laya.wx.mini.MiniImage'), f8e7p9['prototype']['_loadImage'] = function (jfbtga) {
    var jgtnab = !0x1;-0x1 == jfbtga['indexOf']('layaNativeDir/') && (jgtnab = !0x0, jfbtga = x5y0ih['formatURL'](jfbtga)), jn5$ia['getFileInfo'](jfbtga) ? f8e7p9['onCreateImage'](jfbtga, this, !jgtnab) : -0x1 != jfbtga['indexOf']('http://') || -0x1 != jfbtga['indexOf']('https://') ? jn5$ia['downImg'](jfbtga, new h2xu0y(f8e7p9, f8e7p9['onDownImgCallBack'], [jfbtga, this]), jfbtga) : f8e7p9['onCreateImage'](jfbtga, this, !0x0);
  }, f8e7p9['onDownImgCallBack'] = function (wv1m6, x05hi$, vm6wk) {
    vm6wk ? x05hi$['onError'](null) : f8e7p9['onCreateImage'](wv1m6, x05hi$);
  }, f8e7p9['onCreateImage'] = function (w61qc, a5$n, oq34l) {
    var $jtn, h0ni;function wdv61() {
      h0ni['onload'] = null, h0ni['onerror'] = null, delete a5$n['imgCache'][w61qc];
    }$jtn = (oq34l = void 0x0 === oq34l ? !0x1 : oq34l) ? w61qc : (ryuxh = jn5$ia['getFileInfo'](w61qc)['md5'], jn5$ia['getFileNativePath'](ryuxh)), null == a5$n['imgCache'] && (a5$n['imgCache'] = {}), oq34l = function () {
      wdv61(), a5$n['onLoaded'](h0ni);
    };var ryuxh = function () {
      wdv61(), a5$n['event']('error', 'Load image failed');
    };'nativeimage' == a5$n['_type'] ? ((h0ni = new m6dkws['window']['Image']())['crossOrigin'] = '', h0ni['onload'] = oq34l, h0ni['onerror'] = ryuxh, h0ni['src'] = $jtn, a5$n['imgCache'][w61qc] = h0ni) : new n5$ia0['create']($jtn, { 'onload': oq34l, 'onerror': ryuxh, 'onCreate': function (mspd7) {
        h0ni = mspd7, a5$n['imgCache'][w61qc] = mspd7;
      } });
  };function f8e7p9() {}var o3vq1 = (ruxy2h(w6kmdv, 'laya.wx.mini.MiniInput'), w6kmdv['_createInputElement'] = function () {
    oq3c14['_initInput'](oq3c14['area'] = m6dkws['createElement']('textarea')), oq3c14['_initInput'](oq3c14['input'] = m6dkws['createElement']('input')), oq3c14['inputContainer'] = m6dkws['createElement']('div'), oq3c14['inputContainer']['style']['position'] = 'absolute', oq3c14['inputContainer']['style']['zIndex'] = 0x186a0, m6dkws['container']['appendChild'](oq3c14['inputContainer']), oq3c14['inputContainer']['setPos'] = function (i5j$a, n5a$j) {
      oq3c14['inputContainer']['style']['left'] = i5j$a + 'px', oq3c14['inputContainer']['style']['top'] = n5a$j + 'px';
    }, jnagt['stage']['on']('resize', null, w6kmdv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_o34lq) {
      v6mcw1['dispatchEvent'] && v6mcw1['dispatchEvent']('resize');
    }), atjgfb['_soundClass'] = jtgabf, atjgfb['_musicClass'] = jtgabf;
  }, w6kmdv['_onStageResize'] = function () {
    jnagt['stage']['_canvasTransform']['identity']()['scale'](m6dkws['width'] / ia5n$['canvas']['width'] / vq16cw['getPixelRatio'](), m6dkws['height'] / ia5n$['canvas']['height'] / vq16cw['getPixelRatio']());
  }, w6kmdv['wxinputFocus'] = function (e7p98s) {
    var dps = oq3c14['inputElement']['target'];dps && !dps['editable'] || (yruhx['window']['wx']['offKeyboardConfirm'](), yruhx['window']['wx']['offKeyboardInput'](), yruhx['window']['wx']['showKeyboard']({ 'defaultValue': dps['text'], 'maxLength': dps['maxChars'], 'multiple': dps['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (cmv16) {}, 'fail': function (msdp7k) {} }), yruhx['window']['wx']['onKeyboardConfirm'](function (y2huxr) {
      y2huxr = y2huxr ? y2huxr['value'] : '', (dps['text'] = y2huxr, dps['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), yruhx['window']['wx']['onKeyboardInput'](function (n5a$i) {
      n5a$i = n5a$i ? n5a$i['value'] : '', dps['multiline'] || -0x1 == n5a$i['indexOf']('\x0a') ? (dps['text'] = n5a$i, dps['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, w6kmdv['inputEnter'] = function () {
    oq3c14['inputElement']['target']['focus'] = !0x1;
  }, w6kmdv['wxinputblur'] = function () {
    w6kmdv['hideKeyboard']();
  }, w6kmdv['hideKeyboard'] = function () {
    yruhx['window']['wx']['offKeyboardConfirm'](), yruhx['window']['wx']['offKeyboardInput'](), yruhx['window']['wx']['hideKeyboard']({ 'success': function (c431) {
        console['log']('隐藏键盘');
      }, 'fail': function (u02yh) {
        console['log']('隐藏键盘出错:' + (u02yh ? u02yh['errMsg'] : ''));
      } });
  }, w6kmdv);function w6kmdv() {}var pdksm7 = function () {
    function ryh2x() {}ruxy2h(ryh2x, 'laya.wx.mini.MiniLoader');var p978es = ryh2x['prototype'];return p978es['load'] = function (afjbt, fegbt, ajnt$i, gfb9e, oc_3) {
      void 0x0 === ajnt$i && (ajnt$i = !0x0), void 0x0 === oc_3 && (oc_3 = !0x1);var abtjg = this;0x0 === (abtjg['_url'] = afjbt)['indexOf']('data:image') ? abtjg['_type'] = fegbt = 'image' : abtjg['_type'] = fegbt = fegbt || abtjg['getTypeFromUrl'](afjbt), abtjg['_cache'] = ajnt$i, abtjg['_data'] = null;var nhi5 = 'ascii';-0x1 != afjbt['indexOf']('.fnt') ? nhi5 = 'utf8' : 'arraybuffer' == fegbt && (nhi5 = '');var b9fe8g = b8f9ge['getFileExtension'](afjbt);if (-0x1 != ryh2x['_fileTypeArr']['indexOf'](b9fe8g)) yruhx['EnvConfig']['load']['call'](this, afjbt, fegbt, ajnt$i, gfb9e, oc_3);else {
        if (jn5$ia['getFileInfo'](afjbt)) yruhx['EnvConfig']['load']['call'](this, afjbt, fegbt, ajnt$i, gfb9e, oc_3);else {
          if (-0x1 != afjbt['indexOf']('layaNativeDir/')) {
            if (yruhx['isZiYu']) {
              var tf9bjg = jn5$ia['ziyuFileData'][afjbt];return void abtjg['onLoaded'](tf9bjg);
            }return cosnole['log']('read read'), void jn5$ia['read'](afjbt, nhi5, new h2xu0y(ryh2x, ryh2x['onReadNativeCallBack'], [nhi5, afjbt, fegbt, ajnt$i, gfb9e, oc_3, abtjg]));
          }tf9bjg = '' == x5y0ih['rootPath'] ? afjbt : afjbt['split'](x5y0ih['rootPath'])[0x0], -0x1 != afjbt['indexOf']('http://') || -0x1 != afjbt['indexOf']('https://') ? yruhx['EnvConfig']['load']['call'](abtjg, afjbt, fegbt, ajnt$i, gfb9e, oc_3) : jn5$ia['readFile'](tf9bjg, nhi5, new h2xu0y(ryh2x, ryh2x['onReadNativeCallBack'], [nhi5, afjbt, fegbt, ajnt$i, gfb9e, oc_3, abtjg]), afjbt);
        }
      }
    }, p978es['resMgrLoad'] = function (sdmkp7, l3z4o, skd6wm, egb8f, $5x, k6wvm, tebfg) {
      void 0x0 === skd6wm && (skd6wm = 0x0), void 0x0 === egb8f && (egb8f = !0x1), void 0x0 === $5x && ($5x = !0x1), void 0x0 === k6wvm && (k6wvm = 0x0), void 0x0 === tebfg && (tebfg = 0x3), -0x1 != sdmkp7['indexOf']('mpack') && console['log']('=============resMgrLoad url:', sdmkp7), yruhx['EnvConfig']['resMgrLoad'](sdmkp7, (tgf9eb, vq61, o1c3q) => {
        ryh2x['prototype']['resMgrLoadCallBack'](tgf9eb, vq61, o1c3q, l3z4o);
      }, skd6wm, egb8f, $5x, k6wvm, tebfg);
    }, p978es['resMgrLoadCallBack'] = function (c4_oq, p98f, ia$n50, s8pkd) {
      console['log']('buff:::', c4_oq, ia$n50, jn5$ia['fileNativeDir'] + '///' + jn5$ia['fileListName']), s8pkd(c4_oq, p98f, ia$n50);
    }, p978es['clearRes'] = function (c1qwv6, xi$h05) {
      this['clearRes'](c1qwv6, xi$h05 = void 0x0 === xi$h05 ? !0x1 : xi$h05), xi$h05 = jn5$ia['getFileInfo'](c1qwv6), !xi$h05 || -0x1 == c1qwv6['indexOf']('http://') && -0x1 == c1qwv6['indexOf']('https://') || (xi$h05 = xi$h05['md5'], xi$h05 = jn5$ia['getFileNativePath'](xi$h05), jn5$ia['remove'](xi$h05));
    }, ryh2x['onReadNativeCallBack'] = function (cqow1, fjt9g, f8e79, o4c3_, mdskp7, zo3l4, vcqw6, p8fe97, ant$ij) {
      void 0x0 === o4c3_ && (o4c3_ = !0x0), void 0x0 === zo3l4 && (zo3l4 = !0x1), (p8fe97 = void 0x0 === p8fe97 ? 0x0 : p8fe97) ? 0x1 == p8fe97 && yruhx['EnvConfig']['load']['call'](vcqw6, fjt9g, f8e79, o4c3_, mdskp7, zo3l4) : (ant$ij = 'json' == f8e79 || 'atlas' == f8e79 ? yruhx['getJson'](ant$ij['data']) : 'xml' == f8e79 ? b8f9ge['parseXMLFromString'](ant$ij['data']) : ant$ij['data'], vcqw6['onLoaded'](ant$ij), !yruhx['isZiYu'] && yruhx['isPosMsgYu'] && 'arraybuffer' != f8e79 && wx['postMessage']({ 'url': fjt9g, 'data': ant$ij, 'isLoad': !0x0 }));
    }, xhi5y(ryh2x, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ryh2x;
  }(),
      jn5$ia = (ruxy2h(o41c3q, 'laya.wx.mini.MiniFileMgr', mwvdk6), o41c3q['isLoadFile'] = function (i$05an) {
    return -0x1 != o41c3q['_fileTypeArr']['indexOf'](i$05an);
  }, o41c3q['getFileInfo'] = function (yih5x0) {
    return yih5x0 = yih5x0['split']('?')[0x0], yih5x0 = o41c3q['filesListObj'][yih5x0], null == yih5x0 ? null : yih5x0;
  }, o41c3q['onFileUpdate'] = function (hixy50, _z3ol4) {
    var a5j$in = hixy50['split']('/');hixy50 = a5j$in[a5j$in['length'] - 0x1], a5j$in = o41c3q['getFileInfo'](_z3ol4), null == a5j$in ? o41c3q['onSaveFile'](_z3ol4, hixy50) : a5j$in['readyUrl'] != _z3ol4 && o41c3q['remove'](hixy50, _z3ol4);
  }, o41c3q['exits'] = function (i$ntj, epsk8) {
    i$ntj = o41c3q['getFileNativePath'](i$ntj), o41c3q['fs']['getFileInfo']({ 'filePath': i$ntj, 'success': function (kdw6mv) {
        null != epsk8 && epsk8['runWith']([0x0, kdw6mv]);
      }, 'fail': function (c31o) {
        null != epsk8 && epsk8['runWith']([0x1, c31o]);
      } });
  }, o41c3q['read'] = function (inh, wkv6dm, aj5in$, ft9ge) {
    void 0x0 === wkv6dm && (wkv6dm = 'ascill'), inh = '' != (ft9ge = void 0x0 === ft9ge ? '' : ft9ge) ? o41c3q['getFileNativePath'](inh) : inh, o41c3q['fs']['readFile']({ 'filePath': inh, 'encoding': wkv6dm, 'success': function (spe) {
        null != aj5in$ && aj5in$['runWith']([0x0, spe]);
      }, 'fail': function (x$ih50) {
        x$ih50 && '' != ft9ge ? o41c3q['down'](ft9ge, wkv6dm, aj5in$, ft9ge) : null != aj5in$ && aj5in$['runWith']([0x1]);
      } });
  }, o41c3q['readNativeFile'] = function (cq34_, gfe98b) {
    o41c3q['fs']['readFile']({ 'filePath': cq34_, 'encoding': '', 'success': function (egbf89) {
        null != gfe98b && gfe98b['runWith']([0x0]);
      }, 'fail': function (cwv) {
        null != gfe98b && gfe98b['runWith']([0x1]);
      } });
  }, o41c3q['down'] = function (etbgf, vw61q, vo3q1c, dk6) {
    void 0x0 === vw61q && (vw61q = 'ascill'), void 0x0 === dk6 && (dk6 = '');var zo4l_ = o41c3q['getFileNativePath'](dk6);o41c3q['wxdown']({ 'url': etbgf, 'filePath': zo4l_, 'success': function (xi05y) {
        0xc8 === xi05y['statusCode'] && o41c3q['readFile'](xi05y['filePath'], vw61q, vo3q1c, dk6);
      }, 'fail': function (s7pdkm) {
        null != vo3q1c && vo3q1c['runWith']([0x1, s7pdkm]);
      } })['onProgressUpdate'](function (zl_43) {
      null != vo3q1c && vo3q1c['runWith']([0x2, zl_43['progress']]);
    });
  }, o41c3q['readFile'] = function (btjnag, wocq1v, q_oc4, jtna$) {
    void 0x0 === jtna$ && (jtna$ = ''), o41c3q['fs']['readFile']({ 'filePath': btjnag, 'encoding': wocq1v = void 0x0 === wocq1v ? 'ascill' : wocq1v, 'success': function (e7p9f) {
        -0x1 == btjnag['indexOf']('http://') && -0x1 == btjnag['indexOf']('https://') || o41c3q['onFileUpdate'](btjnag, jtna$), null != q_oc4 && q_oc4['runWith']([0x0, e7p9f]);
      }, 'fail': function (wk6ds) {
        wk6ds && null != q_oc4 && q_oc4['runWith']([0x1, wk6ds]);
      } });
  }, o41c3q['downImg'] = function (k8es7p, an$jit, $h5x) {
    void 0x0 === $h5x && ($h5x = ''), o41c3q['wxdown']({ 'url': k8es7p, 'success': function (hx0y5) {
        0xc8 === hx0y5['statusCode'] && o41c3q['copyFile'](hx0y5['tempFilePath'], $h5x, an$jit);
      }, 'fail': function (se78) {
        null != an$jit && an$jit['runWith']([0x1, se78]);
      } });
  }, o41c3q['copyFile'] = function (ji$5n, m6swk, najti$) {
    var o_q43l = ji$5n['split']('/'),
        t$nia = o_q43l[o_q43l['length'] - 0x1];m6swk['split']('?')[0x0];var jnbtg = o41c3q['getFileInfo'](m6swk);o_q43l = o41c3q['getFileNativePath'](t$nia), o41c3q['fs']['copyFile']({ 'srcPath': ji$5n, 'destPath': o_q43l, 'success': function (q13o4c) {
        jnbtg ? jnbtg['readyUrl'] != m6swk && o41c3q['remove'](t$nia, m6swk, najti$) : (o41c3q['onSaveFile'](m6swk, t$nia), null != najti$ && najti$['runWith']([0x0]));
      }, 'fail': function ($atgnj) {
        null != najti$ && najti$['runWith']([0x1, $atgnj]);
      } });
  }, o41c3q['getFileNativePath'] = function (anjgb) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + anjgb;
  }, o41c3q['remove'] = function (f9bjg, be, d76msk) {
    void 0x0 === be && (be = '');var sdk6wm = o41c3q['getFileInfo'](be),
        k76msd = o41c3q['getFileNativePath'](sdk6wm['md5']);jnagt['loader']['clearRes'](sdk6wm['readyUrl']), o41c3q['fs']['unlink']({ 'filePath': k76msd, 'success': function ($atijn) {
        '' != be && o41c3q['onSaveFile'](be, f9bjg), null != d76msk && d76msk['runWith']([0x0]);
      }, 'fail': function ($ia5n0) {} });
  }, o41c3q['onSaveFile'] = function (z4l3o_, kdw6ms) {
    var jgtf9b = z4l3o_['split']('?')[0x0];o41c3q['filesListObj'][jgtf9b] = { 'md5': kdw6ms, 'readyUrl': z4l3o_ }, o41c3q['fs']['writeFile']({ 'filePath': o41c3q['fileNativeDir'] + '/' + o41c3q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o41c3q['filesListObj']), 'success': function (tbeg9) {
        console['log']('写入测试测试成功：', tbeg9);
      }, 'fail': function (q_l34o) {
        console['log']('写入测试测试失败：', q_l34o);
      } });
  }, o41c3q['existDir'] = function (h0x$i5, tjf9g) {
    o41c3q['fs']['mkdir']({ 'dirPath': h0x$i5, 'success': function (gantj) {
        null != tjf9g && tjf9g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (wdmkv) {
        -0x1 != wdmkv['errMsg']['indexOf']('file already exists') ? o41c3q['readSync'](o41c3q['fileListName'], 'utf8', tjf9g) : null != tjf9g && tjf9g['runWith']([0x1, wdmkv]);
      } });
  }, o41c3q['readSync'] = function (tjbnga, v1wm6d, ia0$n5, n05ia) {
    void 0x0 === v1wm6d && (v1wm6d = 'ascill'), void 0x0 === n05ia && (n05ia = ''), tjbnga = o41c3q['getFileNativePath'](tjbnga);var dskw6m;try {
      dskw6m = o41c3q['fs']['readFileSync'](tjbnga), null != ia0$n5 && ia0$n5['runWith']([0x0, { 'data': dskw6m }]);
    } catch (vd6mw1) {
      null != ia0$n5 && ia0$n5['runWith']([0x1]);
    }
  }, o41c3q['readCache'] = function () {}, o41c3q['writeCache'] = function (c6vm1) {
    var jtngab = readyUrl['split']('?')[0x0];o41c3q['filesListObj'][jtngab] = { 'md5': md5Name, 'readyUrl': readyUrl }, o41c3q['fs']['writeFile']({ 'filePath': o41c3q['fileNativeDir'] + '/' + o41c3q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o41c3q['filesListObj']), 'success': function (hxy0) {}, 'fail': function (sk7pd8) {} });
  }, o41c3q['setNativeFileDir'] = function ($i5naj) {
    o41c3q['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $i5naj;
  }, o41c3q['filesListObj'] = {}, o41c3q['fileNativeDir'] = null, o41c3q['fileListName'] = 'layaairfiles.txt', o41c3q['ziyuFileData'] = {}, xhi5y(o41c3q, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), o41c3q);function o41c3q() {
    o41c3q['__super']['call'](this);
  }var jtgabf = function () {
    function pe7f9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, pe7f9['__super']['call'](this), this['_sound'] = pe7f9['_createSound']();
    }ruxy2h(pe7f9, 'laya.wx.mini.MiniSound', mwvdk6);var vc1ow = pe7f9['prototype'];return vc1ow['load'] = function (se8k7) {
      var dkp8 = this,
          qoc31v;function w6c1v() {
        if (null != pe7f9['_null']) dkp8['_sound']['onCanplay'](pe7f9['_null']), dkp8['_sound']['onError'](pe7f9['_null']);else try {
          dkp8['_sound']['onCanplay'](null), dkp8['_sound']['onError'](null), pe7f9['_null'] = null;
        } catch (ix5$) {
          console['warn']('[wxmini] _clearSound:' + ix5$), dkp8['_sound']['onCanplay'](p89eb), dkp8['_sound']['onError'](p89eb), pe7f9['_null'] = p89eb;
        }
      }function p89eb() {}se8k7 = x5y0ih['formatURL'](se8k7), this['url'] = se8k7, pe7f9['_audioCache'][se8k7] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        w6c1v(), qoc31v['loaded'] = !0x0, qoc31v['event']('complete'), pe7f9['_audioCache'][qoc31v['url']] = qoc31v;
      }), this['_sound']['onError'](function (vc1) {
        console['error']('errCode=' + vc1['errCode'] + '  errMsg=' + vc1['errMsg']), w6c1v(), qoc31v['event']('error');
      }), this['_sound']['src'] = se8k7, qoc31v = this);
    }, vc1ow['play'] = function (ep978, wv6dm1) {
      void 0x0 === ep978 && (ep978 = 0x0), void 0x0 === wv6dm1 && (wv6dm1 = 0x0), (voq1wc = this['url'] == atjgfb['_tMusic'] ? (pe7f9['_musicAudio'] || (pe7f9['_musicAudio'] = pe7f9['_createSound']()), pe7f9['_musicAudio']) : pe7f9['_createSound']())['src'] = this['url'];var voq1wc = new n05i(voq1wc);return voq1wc['url'] = this['url'], voq1wc['loops'] = wv6dm1, voq1wc['startTime'] = ep978, voq1wc['play'](), atjgfb['addChannel'](voq1wc), voq1wc;
    }, vc1ow['dispose'] = function () {
      var i0n$h = pe7f9['_audioCache'][this['url']];i0n$h && (i0n$h['src'] = '', delete pe7f9['_audioCache'][this['url']]);
    }, i5jan$(0x0, vc1ow, 'duration', function () {
      return this['_sound']['duration'];
    }), pe7f9['_createSound'] = function () {
      return pe7f9['_id']++, yruhx['window']['wx']['createInnerAudioContext']();
    }, pe7f9['_musicAudio'] = null, pe7f9['_id'] = 0x0, pe7f9['_audioCache'] = {}, pe7f9['_null'] = void 0x0, pe7f9;
  }(),
      n05i = function () {
    function begtf(aj$t) {
      this['_audio'] = null, this['_onEnd'] = null, begtf['__super']['call'](this), this['_audio'] = aj$t, this['_onEnd'] = b8f9ge['bind'](this['__onEnd'], this), aj$t['onEnded'](this['_onEnd']);
    }ruxy2h(begtf, 'laya.wx.mini.MiniSoundChannel', pe978s);var p98fb = begtf['prototype'];return p98fb['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (jnagt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, p98fb['__onNull'] = function () {}, p98fb['play'] = function () {
      this['isStopped'] = !0x1, atjgfb['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, p98fb['stop'] = function () {
      if (this['isStopped'] = !0x0, atjgfb['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != begtf['_null']) this['_audio']['onEnded'](begtf['_null']);else try {
          this['_audio']['onEnded'](null), begtf['_null'] = null;
        } catch (it$an) {
          console['warn']('[wxmini] stop:' + it$an), this['_audio']['onEnded'](b8f9ge['bind'](this['__onNull'], this)), begtf['_null'] = b8f9ge['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, p98fb['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, p98fb['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, atjgfb['addChannel'](this), this['_audio']['play']());
    }, i5jan$(0x0, p98fb, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), i5jan$(0x0, p98fb, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), i5jan$(0x0, p98fb, 'volume', function () {
      return 0x1;
    }, function (bntag) {}), begtf['_null'] = void 0x0, begtf;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (e7p8sk, $xh5i0) {
  'use strict';

  for (var x0y5hi in Object['defineProperty']($xh5i0, '__esModule', { 'value': !0x0 }), Laya) {
    var tajn = Laya[x0y5hi];tajn && tajn['__isclass'] && ($xh5i0[x0y5hi] = tajn);
  }
});