var Q = wx.$I;
(function (window, document, b67) {
  var t$r9v = b67['un'],
      s7ueb3 = b67['uns'],
      queb = b67['static'],
      vti$9r = b67['class'],
      ogzdy0 = b67['getset'],
      r$zi0l = b67['__newvec'],
      x5nhw4 = laya['utils']['Browser'],
      r$tiz = laya['events']['Event'],
      quek = laya['events']['EventDispatcher'],
      $i9tv = laya['resource']['HTMLImage'],
      j8376 = laya['utils']['Handler'],
      li$tr = laya['display']['Input'],
      f8_pj = laya['net']['Loader'],
      cmv1pf = laya['maths']['Matrix'],
      vrmti9 = laya['renders']['Render'],
      qn5kw = laya['utils']['RunDriver'],
      f86j_ = laya['media']['Sound'],
      kqsub = laya['media']['SoundChannel'],
      f_c18p = laya['media']['SoundManager'],
      c1pm = laya['display']['Stage'],
      qsek = laya['net']['URL'],
      fp_m = laya['utils']['Utils'],
      mtc1v9 = function () {
    function t9vrmi() {}return vti$9r(t9vrmi, 'laya.wx.mini.MiniAdpter'), t9vrmi['getJson'] = function (yl0o) {
      return JSON['parse'](yl0o);
    }, t9vrmi['init'] = function (bsuke7, _jc8f) {
      bsuke7 === void 0x0 && (bsuke7 = ![]), _jc8f === void 0x0 && (_jc8f = ![]);if (t9vrmi['_inited']) return;t9vrmi['window'] = window;if (t9vrmi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;t9vrmi['_inited'] = !![], t9vrmi['isZiYu'] = _jc8f, t9vrmi['isPosMsgYu'] = bsuke7, t9vrmi['EnvConfig'] = {}, !t9vrmi['isZiYu'] && (cmp19v['setNativeFileDir']('/layaairGame'), cmp19v['existDir'](cmp19v['fileNativeDir'], j8376['create'](t9vrmi, t9vrmi['onMkdirCallBack']))), t9vrmi['window']['focus'] = function () {}, b67['getUrlPath'] = function () {}, t9vrmi['window']['logtime'] = function ($zglo0) {}, t9vrmi['window']['alertTimeLog'] = function ($lti9r) {}, t9vrmi['window']['resetShareInfo'] = function () {}, t9vrmi['window']['CanvasRenderingContext2D'] = function () {}, t9vrmi['window']['CanvasRenderingContext2D']['prototype'] = t9vrmi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], t9vrmi['window']['document']['body']['appendChild'] = function () {}, t9vrmi['EnvConfig']['pixelRatioInt'] = 0x0, qn5kw['getPixelRatio'] = t9vrmi['pixelRatio'], t9vrmi['_preCreateElement'] = x5nhw4['createElement'], x5nhw4['createElement'] = t9vrmi['createElement'], qn5kw['createShaderCondition'] = t9vrmi['createShaderCondition'], fp_m['parseXMLFromString'] = t9vrmi['parseXMLFromString'], li$tr['_createInputElement'] = _fmp['_createInputElement'], t9vrmi['EnvConfig']['load'] = f8_pj['prototype']['load'], f8_pj['prototype']['load'] = j_cp['prototype']['load'], t9vrmi['isZiYu'] && bsuke7 && wx['onMessage'](function (ea63) {
        ea63['isLoad'] && (cmp19v['ziyuFileData'][ea63['url']] = ea63['data']);
      });
    }, t9vrmi['onMkdirCallBack'] = function (nq5k2w, fj6_a8) {
      if (!nq5k2w) cmp19v['filesListObj'] = JSON['parse'](fj6_a8['data']);
    }, t9vrmi['pixelRatio'] = function () {
      if (!t9vrmi['EnvConfig']['pixelRatioInt']) try {
        var wq25nk = wx['getSystemInfoSync']();return t9vrmi['EnvConfig']['pixelRatioInt'] = wq25nk['pixelRatio'], wq25nk = wq25nk, wq25nk['pixelRatio'];
      } catch (aj_386) {}return t9vrmi['EnvConfig']['pixelRatioInt'];
    }, t9vrmi['createElement'] = function ($it9lr) {
      if ($it9lr == 'canvas') {
        var _a8j;return t9vrmi['idx'] == 0x1 ? t9vrmi['isZiYu'] ? (_a8j = sharedCanvas, _a8j['style'] = {}) : _a8j = window['canvas'] : _a8j = window['wx']['createCanvas'](), t9vrmi['idx']++, _a8j;
      } else {
        if ($it9lr == 'textarea' || $it9lr == 'input') return t9vrmi['onCreateInput']($it9lr);else {
          if ($it9lr == 'div') {
            var i$tl9 = t9vrmi['_preCreateElement']($it9lr);return i$tl9['contains'] = function (pj_cf) {
              return null;
            }, i$tl9['removeChild'] = function (l0g$zo) {}, i$tl9;
          } else return t9vrmi['_preCreateElement']($it9lr);
        }
      }
    }, t9vrmi['onCreateInput'] = function (eqbsku) {
      var _f68 = t9vrmi['_preCreateElement'](eqbsku);return _f68['focus'] = _fmp['wxinputFocus'], _f68['blur'] = _fmp['wxinputblur'], _f68['style'] = {}, _f68['value'] = 0x0, _f68['parentElement'] = {}, _f68['placeholder'] = {}, _f68['type'] = {}, _f68['setColor'] = function (ub7ek) {}, _f68['setType'] = function (_3aj86) {}, _f68['setFontFace'] = function (uqn5k2) {}, _f68['addEventListener'] = function (k2unq5) {}, _f68['contains'] = function (bk7eu) {
        return null;
      }, _f68['removeChild'] = function (sk7ue) {}, _f68;
    }, t9vrmi['createShaderCondition'] = function ($lrt9) {
      var w5nxh4 = this,
          beusk = function () {
        var zo$l0g = $lrt9;return w5nxh4[$lrt9['replace']('this.', '')];
      };return beusk;
    }, t9vrmi['EnvConfig'] = null, t9vrmi['window'] = null, t9vrmi['_preCreateElement'] = null, t9vrmi['_inited'] = ![], t9vrmi['wxRequest'] = null, t9vrmi['systemInfo'] = null, t9vrmi['version'] = '0.0.1', t9vrmi['isZiYu'] = ![], t9vrmi['isPosMsgYu'] = ![], t9vrmi['parseXMLFromString'] = function (m9rtiv) {
      var jcf8p_, ogd0zy;m9rtiv = m9rtiv['replace'](/>\s+</g, '><');try {
        jcf8p_ = new window['Parser']['DOMParser']()['parseFromString'](m9rtiv, 'text/xml');
      } catch (p9m1c) {
        throw '需要引入xml解析库文件';
      }return jcf8p_;
    }, t9vrmi['idx'] = 0x1, t9vrmi;
  }(),
      eubks = function () {
    function _fjc() {}vti$9r(_fjc, 'laya.wx.mini.MiniImage');var vitmr = _fjc['prototype'];return vitmr['_loadImage'] = function (ke7bsu) {
      var ap8_jf = this,
          mvtr9 = ![];ke7bsu['indexOf']('layaNativeDir/') == -0x1 && (mvtr9 = !![], ke7bsu = qsek['formatURL'](ke7bsu));if (!cmp19v['getFileInfo'](ke7bsu)) {
        if (ke7bsu['indexOf']('http://') != -0x1 || ke7bsu['indexOf']('https://') != -0x1) cmp19v['downImg'](ke7bsu, new j8376(_fjc, _fjc['onDownImgCallBack'], [ke7bsu, ap8_jf]), ke7bsu);else _fjc['onCreateImage'](ke7bsu, ap8_jf, !![]);
      } else _fjc['onCreateImage'](ke7bsu, ap8_jf, !mvtr9);
    }, _fjc['onDownImgCallBack'] = function (li, r9imv, cvm9p) {
      if (!cvm9p) _fjc['onCreateImage'](li, r9imv);else r9imv['onError'](null);
    }, _fjc['onCreateImage'] = function (v9$rit, bk7, o0lg$z) {
      o0lg$z === void 0x0 && (o0lg$z = ![]);var mf1vpc;if (!o0lg$z) {
        var p9v1c = cmp19v['getFileInfo'](v9$rit),
            su2qke = p9v1c['md5'];mf1vpc = cmp19v['getFileNativePath'](su2qke);
      } else mf1vpc = v9$rit;if (bk7['imgCache'] == null) bk7['imgCache'] = {};var itmr9v;function cp8f() {
        itmr9v['onload'] = null, itmr9v['onerror'] = null, delete bk7['imgCache'][v9$rit];
      };var fap_8 = function () {
        cp8f(), bk7['onLoaded'](itmr9v);
      },
          a38j6 = function () {
        cp8f(), bk7['event']('error', 'Load image failed');
      };bk7['_type'] == 'nativeimage' ? (itmr9v = new x5nhw4['window']['Image'](), itmr9v['crossOrigin'] = '', itmr9v['onload'] = fap_8, itmr9v['onerror'] = a38j6, itmr9v['src'] = mf1vpc, bk7['imgCache'][v9$rit] = itmr9v) : new $i9tv['create'](mf1vpc, { 'onload': fap_8, 'onerror': a38j6, 'onCreate': function (ebuk) {
          itmr9v = ebuk, bk7['imgCache'][v9$rit] = ebuk;
        } });
    }, _fjc;
  }(),
      _fmp = function () {
    function cm9vt1() {}return vti$9r(cm9vt1, 'laya.wx.mini.MiniInput'), cm9vt1['_createInputElement'] = function () {
      li$tr['_initInput'](li$tr['area'] = x5nhw4['createElement']('textarea')), li$tr['_initInput'](li$tr['input'] = x5nhw4['createElement']('input')), li$tr['inputContainer'] = x5nhw4['createElement']('div'), li$tr['inputContainer']['style']['position'] = 'absolute', li$tr['inputContainer']['style']['zIndex'] = 0x186a0, x5nhw4['container']['appendChild'](li$tr['inputContainer']), li$tr['inputContainer']['setPos'] = function (wn5q, n54hw2) {
        li$tr['inputContainer']['style']['left'] = wn5q + 'px', li$tr['inputContainer']['style']['top'] = n54hw2 + 'px';
      }, b67['stage']['on']('resize', null, cm9vt1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hw25) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), f_c18p['_soundClass'] = zl$0ri, f_c18p['_musicClass'] = zl$0ri;
    }, cm9vt1['_onStageResize'] = function () {
      var afj_68 = b67['stage']['_canvasTransform']['identity']();afj_68['scale'](x5nhw4['width'] / vrmti9['canvas']['width'] / qn5kw['getPixelRatio'](), x5nhw4['height'] / vrmti9['canvas']['height'] / qn5kw['getPixelRatio']());
    }, cm9vt1['wxinputFocus'] = function (mtv1r) {
      var yogz = li$tr['inputElement']['target'];if (yogz && !yogz['editable']) return;mtc1v9['window']['wx']['offKeyboardConfirm'](), mtc1v9['window']['wx']['offKeyboardInput'](), mtc1v9['window']['wx']['showKeyboard']({ 'defaultValue': yogz['text'], 'maxLength': yogz['maxChars'], 'multiple': yogz['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mp1c_f) {}, 'fail': function (pf8jc) {} }), mtc1v9['window']['wx']['onKeyboardConfirm'](function (ba736e) {
        var se2q = ba736e ? ba736e['value'] : '';yogz['text'] = se2q, yogz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), mtc1v9['window']['wx']['onKeyboardInput'](function (z0yodg) {
        var $ilrzt = z0yodg ? z0yodg['value'] : '';if (!yogz['multiline']) {
          if ($ilrzt['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yogz['text'] = $ilrzt, yogz['event']('input');
      });
    }, cm9vt1['inputEnter'] = function () {
      li$tr['inputElement']['target']['focus'] = ![];
    }, cm9vt1['wxinputblur'] = function () {
      cm9vt1['hideKeyboard']();
    }, cm9vt1['hideKeyboard'] = function () {
      mtc1v9['window']['wx']['offKeyboardConfirm'](), mtc1v9['window']['wx']['offKeyboardInput'](), mtc1v9['window']['wx']['hideKeyboard']({ 'success': function (aj738) {
          console['log']('隐藏键盘');
        }, 'fail': function (ct9m1v) {
          console['log']('隐藏键盘出错:' + (ct9m1v ? ct9m1v['errMsg'] : ''));
        } });
    }, cm9vt1;
  }(),
      j_cp = function () {
    function vit9$() {}vti$9r(vit9$, 'laya.wx.mini.MiniLoader');var z$0ol = vit9$['prototype'];return z$0ol['load'] = function (jp8fc, s6b7e3, mv91p, o0yz, f8_paj) {
      mv91p === void 0x0 && (mv91p = !![]), f8_paj === void 0x0 && (f8_paj = ![]);var bke = this;bke['_url'] = jp8fc;if (jp8fc['indexOf']('data:image') === 0x0) bke['_type'] = s6b7e3 = 'image';else bke['_type'] = s6b7e3 || (s6b7e3 = bke['getTypeFromUrl'](jp8fc));bke['_cache'] = mv91p, bke['_data'] = null;var t91m = 'ascii';if (jp8fc['indexOf']('.fnt') != -0x1) t91m = 'utf8';else s6b7e3 == 'arraybuffer' && (t91m = '');;var use3b7 = fp_m['getFileExtension'](jp8fc);if (vit9$['_fileTypeArr']['indexOf'](use3b7) != -0x1) mtc1v9['EnvConfig']['load']['call'](this, jp8fc, s6b7e3, mv91p, o0yz, f8_paj);else {
        if (!cmp19v['getFileInfo'](jp8fc)) {
          if (jp8fc['indexOf']('layaNativeDir/') != -0x1) {
            if (mtc1v9['isZiYu']) {
              var f18_ = cmp19v['ziyuFileData'][jp8fc];bke['onLoaded'](f18_);return;
            } else {
              cosnole['log']('read read'), cmp19v['read'](jp8fc, t91m, new j8376(vit9$, vit9$['onReadNativeCallBack'], [t91m, jp8fc, s6b7e3, mv91p, o0yz, f8_paj, bke]));return;
            }
          }if (qsek['rootPath'] == '') var qsukn = jp8fc;else qsukn = jp8fc['split'](qsek['rootPath'])[0x0];jp8fc['indexOf']('http://') != -0x1 || jp8fc['indexOf']('https://') != -0x1 ? mtc1v9['EnvConfig']['load']['call'](bke, jp8fc, s6b7e3, mv91p, o0yz, f8_paj) : cmp19v['readFile'](qsukn, t91m, new j8376(vit9$, vit9$['onReadNativeCallBack'], [t91m, jp8fc, s6b7e3, mv91p, o0yz, f8_paj, bke]), jp8fc);
        } else mtc1v9['EnvConfig']['load']['call'](this, jp8fc, s6b7e3, mv91p, o0yz, f8_paj);
      }
    }, z$0ol['resMgrLoad'] = function (zg$0il, _c18fp, il$r0, yzgd, mcpf1, e2u, ba36j7) {
      il$r0 === void 0x0 && (il$r0 = 0x0), yzgd === void 0x0 && (yzgd = ![]), mcpf1 === void 0x0 && (mcpf1 = ![]), e2u === void 0x0 && (e2u = 0x0), ba36j7 === void 0x0 && (ba36j7 = 0x3), zg$0il['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zg$0il), mtc1v9['EnvConfig']['resMgrLoad'](zg$0il, (w5qn, kbe7su, _8af6j) => {
        vit9$['prototype']['resMgrLoadCallBack'](w5qn, kbe7su, _8af6j, _c18fp);
      }, il$r0, yzgd, mcpf1, e2u, ba36j7);
    }, z$0ol['resMgrLoadCallBack'] = function (fmp1_, i$tzlr, h25n4w, tzr$i) {
      console['log']('buff:::', fmp1_, h25n4w, cmp19v['fileNativeDir'] + '///' + cmp19v['fileListName']), tzr$i(fmp1_, i$tzlr, h25n4w);
    }, z$0ol['clearRes'] = function ($r0zi, dyog) {
      dyog === void 0x0 && (dyog = ![]);var fa_j86 = this;fa_j86['clearRes']($r0zi, dyog);var n2w5q4 = cmp19v['getFileInfo']($r0zi);if (n2w5q4 && ($r0zi['indexOf']('http://') != -0x1 || $r0zi['indexOf']('https://') != -0x1)) {
        var mrti9 = n2w5q4['md5'],
            _fpm1 = cmp19v['getFileNativePath'](mrti9);cmp19v['remove'](_fpm1);
      }
    }, vit9$['onReadNativeCallBack'] = function (w5nq2k, _638j, n5ku, e3su, zoyd0, m9irtv, gzloy, a73b6j, g0lzo$) {
      e3su === void 0x0 && (e3su = !![]), m9irtv === void 0x0 && (m9irtv = ![]), a73b6j === void 0x0 && (a73b6j = 0x0);if (!a73b6j) {
        var a3j_86;if (n5ku == 'json' || n5ku == 'atlas') a3j_86 = mtc1v9['getJson'](g0lzo$['data']);else n5ku == 'xml' ? a3j_86 = fp_m['parseXMLFromString'](g0lzo$['data']) : a3j_86 = g0lzo$['data'];gzloy['onLoaded'](a3j_86), !mtc1v9['isZiYu'] && mtc1v9['isPosMsgYu'] && n5ku != 'arraybuffer' && wx['postMessage']({ 'url': _638j, 'data': a3j_86, 'isLoad': !![] });
      } else a73b6j == 0x1 && mtc1v9['EnvConfig']['load']['call'](gzloy, _638j, n5ku, e3su, zoyd0, m9irtv);
    }, queb(vit9$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vit9$;
  }(),
      cmp19v = function (h25w4n) {
    function sbqke() {
      sbqke['__super']['call'](this);;
    }return vti$9r(sbqke, 'laya.wx.mini.MiniFileMgr', h25w4n), sbqke['isLoadFile'] = function (x4w5nh) {
      return sbqke['_fileTypeArr']['indexOf'](x4w5nh) != -0x1 ? !![] : ![];
    }, sbqke['getFileInfo'] = function (zt$r) {
      var vpcf1m = zt$r['split']('?')[0x0],
          _3a = sbqke['filesListObj'][vpcf1m];if (_3a == null) return null;else return _3a;return null;
    }, sbqke['onFileUpdate'] = function (i9vrt$, cfmp1) {
      var kun25 = i9vrt$['split']('/'),
          _cpj = kun25[kun25['length'] - 0x1],
          af6j8 = sbqke['getFileInfo'](cfmp1);if (af6j8 == null) sbqke['onSaveFile'](cfmp1, _cpj);else {
        if (af6j8['readyUrl'] != cfmp1) sbqke['remove'](_cpj, cfmp1);
      }
    }, sbqke['exits'] = function (uk7esb, z$o) {
      var mp1v = sbqke['getFileNativePath'](uk7esb);sbqke['fs']['getFileInfo']({ 'filePath': mp1v, 'success': function (hn42w5) {
          z$o != null && z$o['runWith']([0x0, hn42w5]);
        }, 'fail': function (_cf1p8) {
          z$o != null && z$o['runWith']([0x1, _cf1p8]);
        } });
    }, sbqke['read'] = function (vri$t9, $9rtli, b3a76e, rt$ilz) {
      $9rtli === void 0x0 && ($9rtli = 'ascill'), rt$ilz === void 0x0 && (rt$ilz = '');var qbes;rt$ilz != '' ? qbes = sbqke['getFileNativePath'](vri$t9) : qbes = vri$t9, sbqke['fs']['readFile']({ 'filePath': qbes, 'encoding': $9rtli, 'success': function (itr$z) {
          b3a76e != null && b3a76e['runWith']([0x0, itr$z]);
        }, 'fail': function (it9lr$) {
          if (it9lr$ && rt$ilz != '') sbqke['down'](rt$ilz, $9rtli, b3a76e, rt$ilz);else b3a76e != null && b3a76e['runWith']([0x1]);
        } });
    }, sbqke['readNativeFile'] = function (_f1p8, r9$tvi) {
      sbqke['fs']['readFile']({ 'filePath': _f1p8, 'encoding': '', 'success': function (euqks2) {
          r9$tvi != null && r9$tvi['runWith']([0x0]);
        }, 'fail': function (j38a7) {
          r9$tvi != null && r9$tvi['runWith']([0x1]);
        } });
    }, sbqke['down'] = function (qseub, l$ztr, p_a8, tmvir9) {
      l$ztr === void 0x0 && (l$ztr = 'ascill'), tmvir9 === void 0x0 && (tmvir9 = '');var t1cmv9 = sbqke['getFileNativePath'](tmvir9),
          i9mtrv = sbqke['wxdown']({ 'url': qseub, 'filePath': t1cmv9, 'success': function (uk7sbe) {
          if (uk7sbe['statusCode'] === 0xc8) sbqke['readFile'](uk7sbe['filePath'], l$ztr, p_a8, tmvir9);
        }, 'fail': function (kbeusq) {
          p_a8 != null && p_a8['runWith']([0x1, kbeusq]);
        } });i9mtrv['onProgressUpdate'](function (jb63) {
        p_a8 != null && p_a8['runWith']([0x2, jb63['progress']]);
      });
    }, sbqke['readFile'] = function (zlg0$i, mrt1v, mcv19, sebuk7) {
      mrt1v === void 0x0 && (mrt1v = 'ascill'), sebuk7 === void 0x0 && (sebuk7 = ''), sbqke['fs']['readFile']({ 'filePath': zlg0$i, 'encoding': mrt1v, 'success': function (mcfpv) {
          if (zlg0$i['indexOf']('http://') != -0x1 || zlg0$i['indexOf']('https://') != -0x1) sbqke['onFileUpdate'](zlg0$i, sebuk7);mcv19 != null && mcv19['runWith']([0x0, mcfpv]);
        }, 'fail': function (i9rvt) {
          if (i9rvt) mcv19 != null && mcv19['runWith']([0x1, i9rvt]);
        } });
    }, sbqke['downImg'] = function (u7kbe, hn5x4, a86_3j) {
      a86_3j === void 0x0 && (a86_3j = '');var $tizr = sbqke['wxdown']({ 'url': u7kbe, 'success': function (pc1_f8) {
          pc1_f8['statusCode'] === 0xc8 && sbqke['copyFile'](pc1_f8['tempFilePath'], a86_3j, hn5x4);
        }, 'fail': function (f_p1c) {
          hn5x4 != null && hn5x4['runWith']([0x1, f_p1c]);
        } });
    }, sbqke['copyFile'] = function (qk2nw5, eb3us7, timvr) {
      var e2squk = qk2nw5['split']('/'),
          m1pf_c = e2squk[e2squk['length'] - 0x1],
          il0zg$ = eb3us7['split']('?')[0x0],
          ygod = sbqke['getFileInfo'](eb3us7),
          t9rv$ = sbqke['getFileNativePath'](m1pf_c);sbqke['fs']['copyFile']({ 'srcPath': qk2nw5, 'destPath': t9rv$, 'success': function (_a68) {
          if (!ygod) sbqke['onSaveFile'](eb3us7, m1pf_c), timvr != null && timvr['runWith']([0x0]);else {
            if (ygod['readyUrl'] != eb3us7) sbqke['remove'](m1pf_c, eb3us7, timvr);
          }
        }, 'fail': function (u5kq2n) {
          timvr != null && timvr['runWith']([0x1, u5kq2n]);
        } });
    }, sbqke['getFileNativePath'] = function (s7e3b) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s7e3b;
    }, sbqke['remove'] = function (sun2, jap8_f, ns2k) {
      jap8_f === void 0x0 && (jap8_f = '');var _p81c = sbqke['getFileInfo'](jap8_f),
          dzo0y = sbqke['getFileNativePath'](_p81c['md5']);b67['loader']['clearRes'](_p81c['readyUrl']), sbqke['fs']['unlink']({ 'filePath': dzo0y, 'success': function (z0gylo) {
          if (jap8_f != '') sbqke['onSaveFile'](jap8_f, sun2);ns2k != null && ns2k['runWith']([0x0]);
        }, 'fail': function (fa6j8_) {} });
    }, sbqke['onSaveFile'] = function (kn25, zylgo0) {
      var n25wh4 = kn25['split']('?')[0x0];sbqke['filesListObj'][n25wh4] = { 'md5': zylgo0, 'readyUrl': kn25 }, sbqke['fs']['writeFile']({ 'filePath': sbqke['fileNativeDir'] + '/' + sbqke['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sbqke['filesListObj']), 'success': function ($gl0z) {
          console['log']('写入测试测试成功：', $gl0z);
        }, 'fail': function (z0ig$) {
          console['log']('写入测试测试失败：', z0ig$);
        } });
    }, sbqke['existDir'] = function (af8_p, vt9c1) {
      sbqke['fs']['mkdir']({ 'dirPath': af8_p, 'success': function (quseb) {
          vt9c1 != null && vt9c1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mc19vp) {
          if (mc19vp['errMsg']['indexOf']('file already exists') != -0x1) sbqke['readSync'](sbqke['fileListName'], 'utf8', vt9c1);else vt9c1 != null && vt9c1['runWith']([0x1, mc19vp]);
        } });
    }, sbqke['readSync'] = function (c_fp, xh4n, es2qu, aj768) {
      xh4n === void 0x0 && (xh4n = 'ascill'), aj768 === void 0x0 && (aj768 = '');var kesb7u = sbqke['getFileNativePath'](c_fp),
          ueksqb;try {
        ueksqb = sbqke['fs']['readFileSync'](kesb7u), es2qu != null && es2qu['runWith']([0x0, { 'data': ueksqb }]);
      } catch (gyolz0) {
        es2qu != null && es2qu['runWith']([0x1]);
      }
    }, sbqke['readCache'] = function () {}, sbqke['writeCache'] = function (ueb7s3) {
      var ri$zt = readyUrl['split']('?')[0x0];sbqke['filesListObj'][ri$zt] = { 'md5': md5Name, 'readyUrl': readyUrl }, sbqke['fs']['writeFile']({ 'filePath': sbqke['fileNativeDir'] + '/' + sbqke['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](sbqke['filesListObj']), 'success': function (g0$ilz) {}, 'fail': function (i9mvrt) {} });
    }, sbqke['setNativeFileDir'] = function (iltr9$) {
      sbqke['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + iltr9$;
    }, sbqke['filesListObj'] = {}, sbqke['fileNativeDir'] = null, sbqke['fileListName'] = 'layaairfiles.txt', sbqke['ziyuFileData'] = {}, queb(sbqke, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), sbqke;
  }(quek),
      zl$0ri = function (f1pcv) {
    function m_cf1p() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], m_cf1p['__super']['call'](this), this['_sound'] = m_cf1p['_createSound']();
    }vti$9r(m_cf1p, 'laya.wx.mini.MiniSound', f1pcv);var bj637a = m_cf1p['prototype'];return bj637a['load'] = function (esuk2) {
      var gdz0yo = this;esuk2 = qsek['formatURL'](esuk2), this['url'] = esuk2;if (m_cf1p['_audioCache'][esuk2]) {
        this['event']('complete');return;
      }function i$0glz() {
        if (m_cf1p['_null'] != undefined) gdz0yo['_sound']['onCanplay'](m_cf1p['_null']), gdz0yo['_sound']['onError'](m_cf1p['_null']);else try {
          gdz0yo['_sound']['onCanplay'](null), gdz0yo['_sound']['onError'](null), m_cf1p['_null'] = null;
        } catch (e6ba37) {
          console['warn']('[wxmini] _clearSound:' + e6ba37), gdz0yo['_sound']['onCanplay'](knsqu2), gdz0yo['_sound']['onError'](knsqu2), m_cf1p['_null'] = knsqu2;
        }
      }function kbquse() {
        i$0glz(), eb37us['loaded'] = !![], eb37us['event']('complete'), m_cf1p['_audioCache'][eb37us['url']] = eb37us;
      }function pvm1(k7use) {
        console['error']('errCode=' + k7use['errCode'] + '  errMsg=' + k7use['errMsg']), i$0glz(), eb37us['event']('error');
      }function knsqu2() {}this['_sound']['onCanplay'](kbquse), this['_sound']['onError'](pvm1), this['_sound']['src'] = esuk2;var eb37us = this;
    }, bj637a['play'] = function (i9mvr, r9m1) {
      i9mvr === void 0x0 && (i9mvr = 0x0), r9m1 === void 0x0 && (r9m1 = 0x0);var zgod0y;if (this['url'] == f_c18p['_tMusic']) {
        if (!m_cf1p['_musicAudio']) m_cf1p['_musicAudio'] = m_cf1p['_createSound']();zgod0y = m_cf1p['_musicAudio'];
      } else zgod0y = m_cf1p['_createSound']();zgod0y['src'] = this['url'];var af8j_6 = new se36(zgod0y);return af8j_6['url'] = this['url'], af8j_6['loops'] = r9m1, af8j_6['startTime'] = i9mvr, af8j_6['play'](), f_c18p['addChannel'](af8j_6), af8j_6;
    }, bj637a['dispose'] = function () {
      var ap_j8f = m_cf1p['_audioCache'][this['url']];ap_j8f && (ap_j8f['src'] = '', delete m_cf1p['_audioCache'][this['url']]);
    }, ogzdy0(0x0, bj637a, 'duration', function () {
      return this['_sound']['duration'];
    }), m_cf1p['_createSound'] = function () {
      return m_cf1p['_id']++, mtc1v9['window']['wx']['createInnerAudioContext']();
    }, m_cf1p['_musicAudio'] = null, m_cf1p['_id'] = 0x0, m_cf1p['_audioCache'] = {}, m_cf1p['_null'] = undefined, m_cf1p;
  }(quek),
      se36 = function (ebuskq) {
    function m9cvt($ztli) {
      this['_audio'] = null, this['_onEnd'] = null, m9cvt['__super']['call'](this), this['_audio'] = $ztli, this['_onEnd'] = fp_m['bind'](this['__onEnd'], this), $ztli['onEnded'](this['_onEnd']);
    }vti$9r(m9cvt, 'laya.wx.mini.MiniSoundChannel', ebuskq);var _f18pc = m9cvt['prototype'];return _f18pc['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (b67['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _f18pc['__onNull'] = function () {}, _f18pc['play'] = function () {
      this['isStopped'] = ![], f_c18p['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _f18pc['stop'] = function () {
      this['isStopped'] = !![], f_c18p['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (m9cvt['_null'] != undefined) this['_audio']['onEnded'](m9cvt['_null']);else try {
        this['_audio']['onEnded'](null), m9cvt['_null'] = null;
      } catch (pmfvc1) {
        console['warn']('[wxmini] stop:' + pmfvc1), this['_audio']['onEnded'](fp_m['bind'](this['__onNull'], this)), m9cvt['_null'] = fp_m['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _f18pc['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _f18pc['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], f_c18p['addChannel'](this), this['_audio']['play']();
    }, ogzdy0(0x0, _f18pc, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ogzdy0(0x0, _f18pc, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ogzdy0(0x0, _f18pc, 'volume', function () {
      return 0x1;
    }, function (c19v) {}), m9cvt['_null'] = undefined, m9cvt;
  }(kqsub);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bea673 in Laya) {
    var _pa8j = Laya[bea673];_pa8j && _pa8j['__isclass'] && (exports[bea673] = _pa8j);
  }
});