var b = wx.$e;
(function (window, document, bk96s) {
  var lgth$x = bk96s['un'],
      lzhyfr = bk96s['uns'],
      ghrtzl = bk96s['static'],
      zfrv = bk96s['class'],
      tgjx$i = bk96s['getset'],
      d0k5b6 = bk96s['__newvec'],
      uksn = laya['utils']['Browser'],
      xtj$i = laya['events']['Event'],
      x$3ig = laya['events']['EventDispatcher'],
      nijuq3 = laya['resource']['HTMLImage'],
      $3jg = laya['utils']['Handler'],
      wbd05 = laya['display']['Input'],
      ltgi = laya['net']['Loader'],
      w1d852 = laya['maths']['Matrix'],
      oap7cm = laya['renders']['Render'],
      _v47y = laya['utils']['RunDriver'],
      c7oma_ = laya['media']['Sound'],
      nk96 = laya['media']['SoundChannel'],
      $i3g = laya['media']['SoundManager'],
      $xitg = laya['display']['Stage'],
      uj3iq = laya['net']['URL'],
      _yf7v4 = laya['utils']['Utils'],
      tlgxhr = function () {
    function snq93() {}return zfrv(snq93, 'laya.wx.mini.MiniAdpter'), snq93['getJson'] = function (yv_f4z) {
      return JSON['parse'](yv_f4z);
    }, snq93['init'] = function (am74, unjqs3) {
      am74 === void 0x0 && (am74 = ![]), unjqs3 === void 0x0 && (unjqs3 = ![]);if (snq93['_inited']) return;snq93['window'] = window;if (snq93['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;snq93['_inited'] = !![], snq93['isZiYu'] = unjqs3, snq93['isPosMsgYu'] = am74, snq93['EnvConfig'] = {}, !snq93['isZiYu'] && (rhtgz['setNativeFileDir']('/layaairGame'), rhtgz['existDir'](rhtgz['fileNativeDir'], $3jg['create'](snq93, snq93['onMkdirCallBack']))), snq93['window']['focus'] = function () {}, bk96s['getUrlPath'] = function () {}, snq93['window']['logtime'] = function (dw2518) {}, snq93['window']['alertTimeLog'] = function (b5d680) {}, snq93['window']['resetShareInfo'] = function () {}, snq93['window']['CanvasRenderingContext2D'] = function () {}, snq93['window']['CanvasRenderingContext2D']['prototype'] = snq93['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], snq93['window']['document']['body']['appendChild'] = function () {}, snq93['EnvConfig']['pixelRatioInt'] = 0x0, _v47y['getPixelRatio'] = snq93['pixelRatio'], snq93['_preCreateElement'] = uksn['createElement'], uksn['createElement'] = snq93['createElement'], _v47y['createShaderCondition'] = snq93['createShaderCondition'], _yf7v4['parseXMLFromString'] = snq93['parseXMLFromString'], wbd05['_createInputElement'] = rvy4zf['_createInputElement'], snq93['EnvConfig']['load'] = ltgi['prototype']['load'], ltgi['prototype']['load'] = ryhfl['prototype']['load'], snq93['isZiYu'] && am74 && wx['onMessage'](function (skn9q) {
        skn9q['isLoad'] && (rhtgz['ziyuFileData'][skn9q['url']] = skn9q['data']);
      });
    }, snq93['onMkdirCallBack'] = function (ijn3, rgzhl) {
      if (!ijn3) rhtgz['filesListObj'] = JSON['parse'](rgzhl['data']);
    }, snq93['pixelRatio'] = function () {
      if (!snq93['EnvConfig']['pixelRatioInt']) try {
        var ksub = wx['getSystemInfoSync']();return snq93['EnvConfig']['pixelRatioInt'] = ksub['pixelRatio'], ksub = ksub, ksub['pixelRatio'];
      } catch (trgh) {}return snq93['EnvConfig']['pixelRatioInt'];
    }, snq93['createElement'] = function (fvyhr) {
      if (fvyhr == 'canvas') {
        var bu9k6;return snq93['idx'] == 0x1 ? snq93['isZiYu'] ? (bu9k6 = sharedCanvas, bu9k6['style'] = {}) : bu9k6 = window['canvas'] : bu9k6 = window['wx']['createCanvas'](), snq93['idx']++, bu9k6;
      } else {
        if (fvyhr == 'textarea' || fvyhr == 'input') return snq93['onCreateInput'](fvyhr);else {
          if (fvyhr == 'div') {
            var r4zv = snq93['_preCreateElement'](fvyhr);return r4zv['contains'] = function (gi3j) {
              return null;
            }, r4zv['removeChild'] = function (rlztgh) {}, r4zv;
          } else return snq93['_preCreateElement'](fvyhr);
        }
      }
    }, snq93['onCreateInput'] = function (suk6b9) {
      var yz4fvr = snq93['_preCreateElement'](suk6b9);return yz4fvr['focus'] = rvy4zf['wxinputFocus'], yz4fvr['blur'] = rvy4zf['wxinputblur'], yz4fvr['style'] = {}, yz4fvr['value'] = 0x0, yz4fvr['parentElement'] = {}, yz4fvr['placeholder'] = {}, yz4fvr['type'] = {}, yz4fvr['setColor'] = function (tl$ig) {}, yz4fvr['setType'] = function (wb58d0) {}, yz4fvr['setFontFace'] = function (oemac) {}, yz4fvr['addEventListener'] = function (v4zf_y) {}, yz4fvr['contains'] = function (skn) {
        return null;
      }, yz4fvr['removeChild'] = function (hytl) {}, yz4fvr;
    }, snq93['createShaderCondition'] = function (gji3x) {
      var wd5812 = this,
          co7_am = function () {
        var n9sk6u = gji3x;return wd5812[gji3x['replace']('this.', '')];
      };return co7_am;
    }, snq93['EnvConfig'] = null, snq93['window'] = null, snq93['_preCreateElement'] = null, snq93['_inited'] = ![], snq93['wxRequest'] = null, snq93['systemInfo'] = null, snq93['version'] = '0.0.1', snq93['isZiYu'] = ![], snq93['isPosMsgYu'] = ![], snq93['parseXMLFromString'] = function (qj$) {
      var zlth, thrxlg;qj$ = qj$['replace'](/>\s+</g, '><');try {
        zlth = new window['Parser']['DOMParser']()['parseFromString'](qj$, 'text/xml');
      } catch (w5b0d) {
        throw '需要引入xml解析库文件';
      }return zlth;
    }, snq93['idx'] = 0x1, snq93;
  }(),
      g$jxit = function () {
    function qsjn3() {}zfrv(qsjn3, 'laya.wx.mini.MiniImage');var nsqu3 = qsjn3['prototype'];return nsqu3['_loadImage'] = function (i$jqx3) {
      var snujq = this,
          rvyhf = ![];i$jqx3['indexOf']('layaNativeDir/') == -0x1 && (rvyhf = !![], i$jqx3 = uj3iq['formatURL'](i$jqx3));if (!rhtgz['getFileInfo'](i$jqx3)) {
        if (i$jqx3['indexOf']('http://') != -0x1 || i$jqx3['indexOf']('https://') != -0x1) rhtgz['downImg'](i$jqx3, new $3jg(qsjn3, qsjn3['onDownImgCallBack'], [i$jqx3, snujq]), i$jqx3);else qsjn3['onCreateImage'](i$jqx3, snujq, !![]);
      } else qsjn3['onCreateImage'](i$jqx3, snujq, !rvyhf);
    }, qsjn3['onDownImgCallBack'] = function (d21w58, w5280d, _4f7av) {
      if (!_4f7av) qsjn3['onCreateImage'](d21w58, w5280d);else w5280d['onError'](null);
    }, qsjn3['onCreateImage'] = function (x3igj$, lx$h, ix3j$g) {
      ix3j$g === void 0x0 && (ix3j$g = ![]);var i$3nj;if (!ix3j$g) {
        var tzhryl = rhtgz['getFileInfo'](x3igj$),
            s6bu9k = tzhryl['md5'];i$3nj = rhtgz['getFileNativePath'](s6bu9k);
      } else i$3nj = x3igj$;if (lx$h['imgCache'] == null) lx$h['imgCache'] = {};var ilx$g;function q3xj() {
        ilx$g['onload'] = null, ilx$g['onerror'] = null, delete lx$h['imgCache'][x3igj$];
      };var d6b5k = function () {
        q3xj(), lx$h['onLoaded'](ilx$g);
      },
          sn3ju = function () {
        q3xj(), lx$h['event']('error', 'Load image failed');
      };lx$h['_type'] == 'nativeimage' ? (ilx$g = new uksn['window']['Image'](), ilx$g['crossOrigin'] = '', ilx$g['onload'] = d6b5k, ilx$g['onerror'] = sn3ju, ilx$g['src'] = i$3nj, lx$h['imgCache'][x3igj$] = ilx$g) : new nijuq3['create'](i$3nj, { 'onload': d6b5k, 'onerror': sn3ju, 'onCreate': function (a4c7_m) {
          ilx$g = a4c7_m, lx$h['imgCache'][x3igj$] = a4c7_m;
        } });
    }, qsjn3;
  }(),
      rvy4zf = function () {
    function un3qs() {}return zfrv(un3qs, 'laya.wx.mini.MiniInput'), un3qs['_createInputElement'] = function () {
      wbd05['_initInput'](wbd05['area'] = uksn['createElement']('textarea')), wbd05['_initInput'](wbd05['input'] = uksn['createElement']('input')), wbd05['inputContainer'] = uksn['createElement']('div'), wbd05['inputContainer']['style']['position'] = 'absolute', wbd05['inputContainer']['style']['zIndex'] = 0x186a0, uksn['container']['appendChild'](wbd05['inputContainer']), wbd05['inputContainer']['setPos'] = function (gtxij, jxq3i$) {
        wbd05['inputContainer']['style']['left'] = gtxij + 'px', wbd05['inputContainer']['style']['top'] = jxq3i$ + 'px';
      }, bk96s['stage']['on']('resize', null, un3qs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (b05wd8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $i3g['_soundClass'] = d0w52, $i3g['_musicClass'] = d0w52, window['_videoClass'] = ampeoc;
    }, un3qs['_onStageResize'] = function () {
      var zfryv4 = bk96s['stage']['_canvasTransform']['identity']();zfryv4['scale'](uksn['width'] / oap7cm['canvas']['width'] / _v47y['getPixelRatio'](), uksn['height'] / oap7cm['canvas']['height'] / _v47y['getPixelRatio']());
    }, un3qs['wxinputFocus'] = function (hzrvf) {
      var ht$x = wbd05['inputElement']['target'];if (ht$x && !ht$x['editable']) return;tlgxhr['window']['wx']['offKeyboardConfirm'](), tlgxhr['window']['wx']['offKeyboardInput'](), tlgxhr['window']['wx']['showKeyboard']({ 'defaultValue': ht$x['text'], 'maxLength': ht$x['maxChars'], 'multiple': ht$x['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lhx$t) {}, 'fail': function (unsq3j) {} }), tlgxhr['window']['wx']['onKeyboardConfirm'](function (q3ns9) {
        var hyzlf = q3ns9 ? q3ns9['value'] : '';ht$x['text'] = hyzlf, ht$x['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), tlgxhr['window']['wx']['onKeyboardInput'](function (rgzhlt) {
        var v4zyfr = rgzhlt ? rgzhlt['value'] : '';if (!ht$x['multiline']) {
          if (v4zyfr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ht$x['text'] = v4zyfr, ht$x['event']('input');
      });
    }, un3qs['inputEnter'] = function () {
      wbd05['inputElement']['target']['focus'] = ![];
    }, un3qs['wxinputblur'] = function () {
      un3qs['hideKeyboard']();
    }, un3qs['hideKeyboard'] = function () {
      tlgxhr['window']['wx']['offKeyboardConfirm'](), tlgxhr['window']['wx']['offKeyboardInput'](), tlgxhr['window']['wx']['hideKeyboard']({ 'success': function (cm7_a4) {
          console['log']('隐藏键盘');
        }, 'fail': function (xj$tig) {
          console['log']('隐藏键盘出错:' + (xj$tig ? xj$tig['errMsg'] : ''));
        } });
    }, un3qs;
  }(),
      ryhfl = function () {
    function b9d6() {}zfrv(b9d6, 'laya.wx.mini.MiniLoader');var y7_f = b9d6['prototype'];return y7_f['load'] = function (aoc7pm, bs6uk9, aopcem, dw208, cmapo7) {
      aopcem === void 0x0 && (aopcem = !![]), cmapo7 === void 0x0 && (cmapo7 = ![]);var uq9k = this;uq9k['_url'] = aoc7pm;if (aoc7pm['indexOf']('data:image') === 0x0) uq9k['_type'] = bs6uk9 = 'image';else uq9k['_type'] = bs6uk9 || (bs6uk9 = uq9k['getTypeFromUrl'](aoc7pm));uq9k['_cache'] = aopcem, uq9k['_data'] = null;var mv7_a = 'ascii';if (aoc7pm['indexOf']('.fnt') != -0x1) mv7_a = 'utf8';else bs6uk9 == 'arraybuffer' && (mv7_a = '');;var b6508 = _yf7v4['getFileExtension'](aoc7pm);if (b9d6['_fileTypeArr']['indexOf'](b6508) != -0x1) tlgxhr['EnvConfig']['load']['call'](this, aoc7pm, bs6uk9, aopcem, dw208, cmapo7);else {
        if (!rhtgz['getFileInfo'](aoc7pm)) {
          if (aoc7pm['indexOf']('layaNativeDir/') != -0x1) {
            if (tlgxhr['isZiYu']) {
              var zfhly = rhtgz['ziyuFileData'][aoc7pm];uq9k['onLoaded'](zfhly);return;
            } else {
              cosnole['log']('read read'), rhtgz['read'](aoc7pm, mv7_a, new $3jg(b9d6, b9d6['onReadNativeCallBack'], [mv7_a, aoc7pm, bs6uk9, aopcem, dw208, cmapo7, uq9k]));return;
            }
          }if (uj3iq['rootPath'] == '') var zvfh = aoc7pm;else zvfh = aoc7pm['split'](uj3iq['rootPath'])[0x0];aoc7pm['indexOf']('http://') != -0x1 || aoc7pm['indexOf']('https://') != -0x1 ? tlgxhr['EnvConfig']['load']['call'](uq9k, aoc7pm, bs6uk9, aopcem, dw208, cmapo7) : rhtgz['readFile'](zvfh, mv7_a, new $3jg(b9d6, b9d6['onReadNativeCallBack'], [mv7_a, aoc7pm, bs6uk9, aopcem, dw208, cmapo7, uq9k]), aoc7pm);
        } else tlgxhr['EnvConfig']['load']['call'](this, aoc7pm, bs6uk9, aopcem, dw208, cmapo7);
      }
    }, y7_f['resMgrLoad'] = function (m7ocap, qsu3nj, va7f, uq3ijn, rfzyv4, vy_f, knqs9u) {
      va7f === void 0x0 && (va7f = 0x0), uq3ijn === void 0x0 && (uq3ijn = ![]), rfzyv4 === void 0x0 && (rfzyv4 = ![]), vy_f === void 0x0 && (vy_f = 0x0), knqs9u === void 0x0 && (knqs9u = 0x3), m7ocap['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m7ocap), tlgxhr['EnvConfig']['resMgrLoad'](m7ocap, (gjxt$, ti$xjg, d850w2) => {
        b9d6['prototype']['resMgrLoadCallBack'](gjxt$, ti$xjg, d850w2, qsu3nj);
      }, va7f, uq3ijn, rfzyv4, vy_f, knqs9u);
    }, y7_f['resMgrLoadCallBack'] = function (uks69b, mo_c7, lgzhr, $lhgt) {
      console['log']('buff:::', uks69b, lgzhr, rhtgz['fileNativeDir'] + '///' + rhtgz['fileListName']), $lhgt(uks69b, mo_c7, lgzhr);
    }, y7_f['clearRes'] = function (d8521w, s93qu) {
      s93qu === void 0x0 && (s93qu = ![]);var y_74fv = this;y_74fv['clearRes'](d8521w, s93qu);var vzyf4_ = rhtgz['getFileInfo'](d8521w);if (vzyf4_ && (d8521w['indexOf']('http://') != -0x1 || d8521w['indexOf']('https://') != -0x1)) {
        var li$ = vzyf4_['md5'],
            b9u6k = rhtgz['getFileNativePath'](li$);rhtgz['remove'](b9u6k);
      }
    }, b9d6['onReadNativeCallBack'] = function (kns69, ltrgxh, yrlfz, iqx3, i3xjg, _f7v4a, ma_c7, kd50b6, q3$ni) {
      iqx3 === void 0x0 && (iqx3 = !![]), _f7v4a === void 0x0 && (_f7v4a = ![]), kd50b6 === void 0x0 && (kd50b6 = 0x0);if (!kd50b6) {
        var xig$;if (yrlfz == 'json' || yrlfz == 'atlas') xig$ = tlgxhr['getJson'](q3$ni['data']);else yrlfz == 'xml' ? xig$ = _yf7v4['parseXMLFromString'](q3$ni['data']) : xig$ = q3$ni['data'];ma_c7['onLoaded'](xig$), !tlgxhr['isZiYu'] && tlgxhr['isPosMsgYu'] && yrlfz != 'arraybuffer' && wx['postMessage']({ 'url': ltrgxh, 'data': xig$, 'isLoad': !![] });
      } else kd50b6 == 0x1 && tlgxhr['EnvConfig']['load']['call'](ma_c7, ltrgxh, yrlfz, iqx3, i3xjg, _f7v4a);
    }, ghrtzl(b9d6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), b9d6;
  }(),
      rhtgz = function (qnjui3) {
    function f4_va7() {
      f4_va7['__super']['call'](this);;
    }return zfrv(f4_va7, 'laya.wx.mini.MiniFileMgr', qnjui3), f4_va7['isLoadFile'] = function (dw251) {
      return f4_va7['_fileTypeArr']['indexOf'](dw251) != -0x1 ? !![] : ![];
    }, f4_va7['getFileInfo'] = function (u3jns) {
      var qj3sn = u3jns['split']('?')[0x0],
          o_ac7m = f4_va7['filesListObj'][qj3sn];if (o_ac7m == null) return null;else return o_ac7m;return null;
    }, f4_va7['onFileUpdate'] = function (txg, bks90) {
      var zythlr = txg['split']('/'),
          bd5 = zythlr[zythlr['length'] - 0x1],
          f47_ = f4_va7['getFileInfo'](bks90);if (f47_ == null) f4_va7['onSaveFile'](bks90, bd5);else {
        if (f47_['readyUrl'] != bks90) f4_va7['remove'](bd5, bks90);
      }
    }, f4_va7['exits'] = function (fyz_v4, lhfy) {
      var rvhz = f4_va7['getFileNativePath'](fyz_v4);f4_va7['fs']['getFileInfo']({ 'filePath': rvhz, 'success': function (gltz) {
          lhfy != null && lhfy['runWith']([0x0, gltz]);
        }, 'fail': function (yfz4rv) {
          lhfy != null && lhfy['runWith']([0x1, yfz4rv]);
        } });
    }, f4_va7['read'] = function (av_f7, jxi$, bw5, v4a7_f) {
      jxi$ === void 0x0 && (jxi$ = 'ascill'), v4a7_f === void 0x0 && (v4a7_f = '');var yztrhl;v4a7_f != '' ? yztrhl = f4_va7['getFileNativePath'](av_f7) : yztrhl = av_f7, f4_va7['fs']['readFile']({ 'filePath': yztrhl, 'encoding': jxi$, 'success': function (cmaoep) {
          bw5 != null && bw5['runWith']([0x0, cmaoep]);
        }, 'fail': function (lhyzfr) {
          if (lhyzfr && v4a7_f != '') f4_va7['down'](v4a7_f, jxi$, bw5, v4a7_f);else bw5 != null && bw5['runWith']([0x1]);
        } });
    }, f4_va7['readNativeFile'] = function (tg$h, compa) {
      f4_va7['fs']['readFile']({ 'filePath': tg$h, 'encoding': '', 'success': function (uiqnj) {
          compa != null && compa['runWith']([0x0]);
        }, 'fail': function (vryhfz) {
          compa != null && compa['runWith']([0x1]);
        } });
    }, f4_va7['down'] = function (k6ns, j$q3i, hlzyrt, hvrfz) {
      j$q3i === void 0x0 && (j$q3i = 'ascill'), hvrfz === void 0x0 && (hvrfz = '');var g3$jxi = f4_va7['getFileNativePath'](hvrfz),
          fr4zy = f4_va7['wxdown']({ 'url': k6ns, 'filePath': g3$jxi, 'success': function (tzrl) {
          if (tzrl['statusCode'] === 0xc8) f4_va7['readFile'](tzrl['filePath'], j$q3i, hlzyrt, hvrfz);
        }, 'fail': function (zfrvy4) {
          hlzyrt != null && hlzyrt['runWith']([0x1, zfrvy4]);
        } });fr4zy['onProgressUpdate'](function (_c4ma) {
        hlzyrt != null && hlzyrt['runWith']([0x2, _c4ma['progress']]);
      });
    }, f4_va7['readFile'] = function (v4_zyf, ij3n$, k6d5b0, d8b65) {
      ij3n$ === void 0x0 && (ij3n$ = 'ascill'), d8b65 === void 0x0 && (d8b65 = ''), f4_va7['fs']['readFile']({ 'filePath': v4_zyf, 'encoding': ij3n$, 'success': function (fy7) {
          if (v4_zyf['indexOf']('http://') != -0x1 || v4_zyf['indexOf']('https://') != -0x1) f4_va7['onFileUpdate'](v4_zyf, d8b65);k6d5b0 != null && k6d5b0['runWith']([0x0, fy7]);
        }, 'fail': function (lght$x) {
          if (lght$x) k6d5b0 != null && k6d5b0['runWith']([0x1, lght$x]);
        } });
    }, f4_va7['downImg'] = function (n3$ij, vfzyrh, gtxi$j) {
      gtxi$j === void 0x0 && (gtxi$j = '');var n3jiuq = f4_va7['wxdown']({ 'url': n3$ij, 'success': function (xhgrtl) {
          xhgrtl['statusCode'] === 0xc8 && f4_va7['copyFile'](xhgrtl['tempFilePath'], gtxi$j, vfzyrh);
        }, 'fail': function (q9us) {
          vfzyrh != null && vfzyrh['runWith']([0x1, q9us]);
        } });
    }, f4_va7['copyFile'] = function (ij3qn, vryhf, tlyhr) {
      var tigxl$ = ij3qn['split']('/'),
          wd085 = tigxl$[tigxl$['length'] - 0x1],
          zf_vy = vryhf['split']('?')[0x0],
          sjnqu3 = f4_va7['getFileInfo'](vryhf),
          zhlgrt = f4_va7['getFileNativePath'](wd085);f4_va7['fs']['copyFile']({ 'srcPath': ij3qn, 'destPath': zhlgrt, 'success': function (fyrvz) {
          if (!sjnqu3) f4_va7['onSaveFile'](vryhf, wd085), tlyhr != null && tlyhr['runWith']([0x0]);else {
            if (sjnqu3['readyUrl'] != vryhf) f4_va7['remove'](wd085, vryhf, tlyhr);
          }
        }, 'fail': function (n3q9s) {
          tlyhr != null && tlyhr['runWith']([0x1, n3q9s]);
        } });
    }, f4_va7['getFileNativePath'] = function (ghlz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ghlz;
    }, f4_va7['remove'] = function (u69snk, g$thxl, jn3q$) {
      g$thxl === void 0x0 && (g$thxl = '');var gjtix$ = f4_va7['getFileInfo'](g$thxl),
          i$qj = f4_va7['getFileNativePath'](gjtix$['md5']);bk96s['loader']['clearRes'](gjtix$['readyUrl']), f4_va7['fs']['unlink']({ 'filePath': i$qj, 'success': function (w5d82) {
          if (g$thxl != '') f4_va7['onSaveFile'](g$thxl, u69snk);jn3q$ != null && jn3q$['runWith']([0x0]);
        }, 'fail': function (bw8d05) {} });
    }, f4_va7['onSaveFile'] = function (nuq3i, jqsn3) {
      var _a7v4 = nuq3i['split']('?')[0x0];f4_va7['filesListObj'][_a7v4] = { 'md5': jqsn3, 'readyUrl': nuq3i }, f4_va7['fs']['writeFile']({ 'filePath': f4_va7['fileNativeDir'] + '/' + f4_va7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f4_va7['filesListObj']), 'success': function (w85d20) {
          console['log']('写入测试测试成功：', w85d20);
        }, 'fail': function (ukn9q) {
          console['log']('写入测试测试失败：', ukn9q);
        } });
    }, f4_va7['existDir'] = function (v_zf, hlxgtr) {
      f4_va7['fs']['mkdir']({ 'dirPath': v_zf, 'success': function (yvhzfr) {
          hlxgtr != null && hlxgtr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (tghrlz) {
          if (tghrlz['errMsg']['indexOf']('file already exists') != -0x1) f4_va7['readSync'](f4_va7['fileListName'], 'utf8', hlxgtr);else hlxgtr != null && hlxgtr['runWith']([0x1, tghrlz]);
        } });
    }, f4_va7['readSync'] = function (txi$lg, us69nk, v4fzry, hlztg) {
      us69nk === void 0x0 && (us69nk = 'ascill'), hlztg === void 0x0 && (hlztg = '');var grtlh = f4_va7['getFileNativePath'](txi$lg),
          ltrx;try {
        ltrx = f4_va7['fs']['readFileSync'](grtlh), v4fzry != null && v4fzry['runWith']([0x0, { 'data': ltrx }]);
      } catch (t$jxi) {
        v4fzry != null && v4fzry['runWith']([0x1]);
      }
    }, f4_va7['readCache'] = function () {}, f4_va7['writeCache'] = function (fyhvrz) {
      var frzy4v = readyUrl['split']('?')[0x0];f4_va7['filesListObj'][frzy4v] = { 'md5': md5Name, 'readyUrl': readyUrl }, f4_va7['fs']['writeFile']({ 'filePath': f4_va7['fileNativeDir'] + '/' + f4_va7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f4_va7['filesListObj']), 'success': function (w258d0) {}, 'fail': function (gx3ji) {} });
    }, f4_va7['setNativeFileDir'] = function (ks6n) {
      f4_va7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ks6n;
    }, f4_va7['filesListObj'] = {}, f4_va7['fileNativeDir'] = null, f4_va7['fileListName'] = 'layaairfiles.txt', f4_va7['ziyuFileData'] = {}, ghrtzl(f4_va7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), f4_va7;
  }(x$3ig),
      d0w52 = function (un3jq) {
    function jqns() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], jqns['__super']['call'](this), this['_sound'] = jqns['_createSound'](), this['_chanell'] = new ujqn3s(this['_sound']);
    }zfrv(jqns, 'laya.wx.mini.MiniSound', un3jq);var tyzr = jqns['prototype'];return tyzr['load'] = function (b9d0k) {
      var _c7 = this;b9d0k = uj3iq['formatURL'](b9d0k), this['url'] = b9d0k;if (jqns['_audioCache'][b9d0k]) {
        this['event']('complete');return;
      }function gtxlr() {
        if (jqns['_null'] != undefined) _c7['_sound']['onCanplay'](jqns['_null']), _c7['_sound']['onError'](jqns['_null']);else try {
          _c7['_sound']['onCanplay'](null), _c7['_sound']['onError'](null), jqns['_null'] = null;
        } catch (jg$xt) {
          console['warn']('[wxmini] _clearSound:' + jg$xt), _c7['_sound']['onCanplay'](zylrf), _c7['_sound']['onError'](zylrf), jqns['_null'] = zylrf;
        }
      }function eoacm() {
        _yzv4f['loaded'] = !![], _yzv4f['event']('complete'), jqns['_audioCache'][_yzv4f['url']] = _yzv4f;
      }function vyr4zf(n93u) {
        console['error']('errCode=' + n93u['errCode'] + '  errMsg=' + n93u['errMsg']), _yzv4f['event']('error');
      }function zylrf() {}this['_sound']['onCanplay'](eoacm), this['_sound']['onError'](vyr4zf), this['_sound']['src'] = b9d0k;var _yzv4f = this;
    }, tyzr['play'] = function (nj3us, zf4vy) {
      nj3us === void 0x0 && (nj3us = 0x0), zf4vy === void 0x0 && (zf4vy = 0x0);var zrthgl, v4ma;if (this['url'] == $i3g['_tMusic']) {
        if (!jqns['_musicAudio']) jqns['_musicAudio'] = this['_sound'];zrthgl = jqns['_musicAudio'], v4ma = this['_chanell'];
      } else zrthgl = this['_sound'], v4ma = this['_chanell'];return zrthgl['src'] = this['url'], zrthgl['startTime'] = 0x0, v4ma['isStopped'] && (v4ma['url'] = this['url'], v4ma['loops'] = zf4vy, v4ma['startTime'] = nj3us, v4ma['play'](), $i3g['addChannel'](v4ma)), v4ma;
    }, tyzr['dispose'] = function () {
      var htx$gl = jqns['_audioCache'][this['url']];htx$gl && (htx$gl['src'] = '', delete jqns['_audioCache'][this['url']]);
    }, tgjx$i(0x0, tyzr, 'duration', function () {
      return this['_sound']['duration'];
    }), jqns['_createSound'] = function () {
      jqns['_id']++;var $lgxht = tlgxhr['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return $lgxht;
    }, jqns['_musicAudio'] = null, jqns['_id'] = 0x0, jqns['_audioCache'] = {}, jqns['_null'] = undefined, jqns;
  }(x$3ig),
      ujqn3s = function (ma_7) {
    function jgxi3(z_vf4) {
      this['_audio'] = null, this['_onEnd'] = null, jgxi3['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z_vf4, this['_onEnd'] = _yf7v4['bind'](this['__onEnd'], this), z_vf4['onEnded'](this['_onEnd']);
    }zfrv(jgxi3, 'laya.wx.mini.MiniSoundChannel', ma_7);var tgx$hl = jgxi3['prototype'];return tgx$hl['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bk96s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, tgx$hl['__onNull'] = function () {}, tgx$hl['play'] = function () {
      this['isStopped'] = ![], $i3g['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, tgx$hl['stop'] = function () {
      this['isStopped'] = !![], $i3g['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, tgx$hl['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, tgx$hl['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $i3g['addChannel'](this), this['_audio']['play']();
    }, tgjx$i(0x0, tgx$hl, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tgjx$i(0x0, tgx$hl, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tgjx$i(0x0, tgx$hl, 'volume', function () {
      return 0x1;
    }, function (lix$g) {}), jgxi3['_null'] = undefined, jgxi3;
  }(nk96),
      ampeoc = function () {
    function ns3u() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tlgxhr['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }zfrv(ns3u, 'laya.wx.mini.MiniVideo');var htyz = ns3u['prototype'];return htyz['on'] = function (d08wb, tlg$i, tyrzh) {
      if (d08wb == 'loadedmetadata') this['onPlayFunc'] = tyrzh['bind'](tlg$i), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else d08wb == 'ended' && (this['onEndedFunC'] = tyrzh['bind'](tlg$i), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, htyz['onTimeUpdateFunc'] = function (jgt) {
      this['position'] = jgt['position'], this['_duration'] = jgt['duration'];
    }, htyz['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, htyz['onended'] = function (zgrhl, vfyzh) {
      this['onEndedFunC'] = vfyzh['bind'](zgrhl), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, htyz['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, htyz['off'] = function (k9db60, usqn9k, zf4vyr) {
      if (k9db60 == 'loadedmetadata') this['onPlayFunc'] = zf4vyr['bind'](usqn9k), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else k9db60 == 'ended' && (this['onEndedFunC'] = zf4vyr['bind'](usqn9k), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, htyz['load'] = function (uin3) {
      if (!this['videoElement']) return;this['videoElement']['src'] = uin3;
    }, htyz['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, htyz['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, htyz['size'] = function (xhglt, m7c_ao) {
      if (!this['videoElement']) return;this['videoElement']['width'] = xhglt, this['videoElement']['height'] = m7c_ao;
    }, htyz['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, htyz['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, tgjx$i(0x0, htyz, 'duration', function () {
      return this['_duration'];
    }), tgjx$i(0x0, htyz, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (n$i) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = n$i;
    }), tgjx$i(0x0, htyz, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), tgjx$i(0x0, htyz, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), tgjx$i(0x0, htyz, 'ended', function () {
      return this['videoend'];
    }), tgjx$i(0x0, htyz, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (z4yv_f) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = z4yv_f;
    }), tgjx$i(0x0, htyz, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (juq3i) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = juq3i;
    }), tgjx$i(0x0, htyz, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (k096d) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = k096d;
    }), tgjx$i(0x0, htyz, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), tgjx$i(0x0, htyz, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (k96usn) {
      if (!this['videoElement']) return;this['videoElement']['x'] = k96usn;
    }), tgjx$i(0x0, htyz, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (sb60k) {
      if (!this['videoElement']) return;this['videoElement']['y'] = sb60k;
    }), tgjx$i(0x0, htyz, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), tgjx$i(0x0, htyz, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (n69ku) {
      if (!this['videoElement']) return;this['videoElement']['src'] = n69ku;
    }), tgjx$i(0x0, htyz, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (a_f47) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = a_f47;
    }), tgjx$i(0x0, htyz, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (yhzlt) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = yhzlt;
    }), ns3u;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var su9qnk in Laya) {
    var ijg$t = Laya[su9qnk];ijg$t && ijg$t['__isclass'] && (exports[su9qnk] = ijg$t);
  }
});