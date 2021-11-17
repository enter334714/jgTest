var k = wx.$f;
(function (window, document, sxwdne) {
  var nwsjxd = sxwdne['un'],
      y$r73 = sxwdne['uns'],
      esxndw = sxwdne['static'],
      ft5qh0 = sxwdne['class'],
      thf0m = sxwdne['getset'],
      qt5k = sxwdne['__newvec'],
      hfq0t5 = laya['utils']['Browser'],
      bvui1m = laya['events']['Event'],
      k2_q54 = laya['events']['EventDispatcher'],
      y$73p = laya['resource']['HTMLImage'],
      kq450 = laya['utils']['Handler'],
      fqmt0 = laya['display']['Input'],
      iumbvf = laya['net']['Loader'],
      k5hq_0 = laya['maths']['Matrix'],
      xren8z = laya['renders']['Render'],
      ok6_2 = laya['utils']['RunDriver'],
      g9vu1b = laya['media']['Sound'],
      cnswdj = laya['media']['SoundChannel'],
      dswj = laya['media']['SoundManager'],
      xnewzs = laya['display']['Stage'],
      _4ok62 = laya['net']['URL'],
      xjdsw = laya['utils']['Utils'],
      htqfm = function () {
    function docj6s() {}return ft5qh0(docj6s, 'laya.wx.mini.MiniAdpter'), docj6s['getJson'] = function (xzrne8) {
      return JSON['parse'](xzrne8);
    }, docj6s['init'] = function (kq405_, fmuvib) {
      kq405_ === void 0x0 && (kq405_ = ![]), fmuvib === void 0x0 && (fmuvib = ![]);if (docj6s['_inited']) return;docj6s['window'] = window;if (docj6s['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;docj6s['_inited'] = !![], docj6s['isZiYu'] = fmuvib, docj6s['isPosMsgYu'] = kq405_, docj6s['EnvConfig'] = {}, !docj6s['isZiYu'] && (k0_hq['setNativeFileDir']('/layaairGame'), k0_hq['existDir'](k0_hq['fileNativeDir'], kq450['create'](docj6s, docj6s['onMkdirCallBack']))), docj6s['window']['focus'] = function () {}, sxwdne['getUrlPath'] = function () {}, docj6s['window']['logtime'] = function (z8xenr) {}, docj6s['window']['alertTimeLog'] = function (itb) {}, docj6s['window']['resetShareInfo'] = function () {}, docj6s['window']['CanvasRenderingContext2D'] = function () {}, docj6s['window']['CanvasRenderingContext2D']['prototype'] = docj6s['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], docj6s['window']['document']['body']['appendChild'] = function () {}, docj6s['EnvConfig']['pixelRatioInt'] = 0x0, ok6_2['getPixelRatio'] = docj6s['pixelRatio'], docj6s['_preCreateElement'] = hfq0t5['createElement'], hfq0t5['createElement'] = docj6s['createElement'], ok6_2['createShaderCondition'] = docj6s['createShaderCondition'], xjdsw['parseXMLFromString'] = docj6s['parseXMLFromString'], fqmt0['_createInputElement'] = bfih['_createInputElement'], docj6s['EnvConfig']['load'] = iumbvf['prototype']['load'], iumbvf['prototype']['load'] = wdsxe['prototype']['load'], docj6s['isZiYu'] && kq405_ && wx['onMessage'](function (u1b9gv) {
        u1b9gv['isLoad'] && (k0_hq['ziyuFileData'][u1b9gv['url']] = u1b9gv['data']);
      });
    }, docj6s['onMkdirCallBack'] = function (vg1u9b, htibmf) {
      if (!vg1u9b) k0_hq['filesListObj'] = JSON['parse'](htibmf['data']);
    }, docj6s['pixelRatio'] = function () {
      if (!docj6s['EnvConfig']['pixelRatioInt']) try {
        var t0q5kh = wx['getSystemInfoSync']();return docj6s['EnvConfig']['pixelRatioInt'] = t0q5kh['pixelRatio'], t0q5kh = t0q5kh, t0q5kh['pixelRatio'];
      } catch (fvmitb) {}return docj6s['EnvConfig']['pixelRatioInt'];
    }, docj6s['createElement'] = function (qt05k) {
      if (qt05k == 'canvas') {
        var zer$;return docj6s['idx'] == 0x1 ? docj6s['isZiYu'] ? (zer$ = sharedCanvas, zer$['style'] = {}) : zer$ = window['canvas'] : zer$ = window['wx']['createCanvas'](), docj6s['idx']++, zer$;
      } else {
        if (qt05k == 'textarea' || qt05k == 'input') return docj6s['onCreateInput'](qt05k);else {
          if (qt05k == 'div') {
            var dcwj = docj6s['_preCreateElement'](qt05k);return dcwj['contains'] = function (ibmv) {
              return null;
            }, dcwj['removeChild'] = function (_0k5q4) {}, dcwj;
          } else return docj6s['_preCreateElement'](qt05k);
        }
      }
    }, docj6s['onCreateInput'] = function (rxezn8) {
      var ay$37r = docj6s['_preCreateElement'](rxezn8);return ay$37r['focus'] = bfih['wxinputFocus'], ay$37r['blur'] = bfih['wxinputblur'], ay$37r['style'] = {}, ay$37r['value'] = 0x0, ay$37r['parentElement'] = {}, ay$37r['placeholder'] = {}, ay$37r['type'] = {}, ay$37r['setColor'] = function (u1vi9) {}, ay$37r['setType'] = function (hmbtf) {}, ay$37r['setFontFace'] = function (ry$3) {}, ay$37r['addEventListener'] = function (y$a37p) {}, ay$37r['contains'] = function (tmhqf) {
        return null;
      }, ay$37r['removeChild'] = function (iftm0) {}, ay$37r;
    }, docj6s['createShaderCondition'] = function (k62o) {
      var ok62 = this,
          vugb19 = function () {
        var sxwezn = k62o;return ok62[k62o['replace']('this.', '')];
      };return vugb19;
    }, docj6s['EnvConfig'] = null, docj6s['window'] = null, docj6s['_preCreateElement'] = null, docj6s['_inited'] = ![], docj6s['wxRequest'] = null, docj6s['systemInfo'] = null, docj6s['version'] = '0.0.1', docj6s['isZiYu'] = ![], docj6s['isPosMsgYu'] = ![], docj6s['parseXMLFromString'] = function (mfqht0) {
      var zxe8nr, imb1uv;mfqht0 = mfqht0['replace'](/>\s+</g, '><');try {
        zxe8nr = new window['Parser']['DOMParser']()['parseFromString'](mfqht0, 'text/xml');
      } catch (a3r$) {
        throw '需要引入xml解析库文件';
      }return zxe8nr;
    }, docj6s['idx'] = 0x1, docj6s;
  }(),
      uv1mib = function () {
    function zxnwes() {}ft5qh0(zxnwes, 'laya.wx.mini.MiniImage');var tvmif = zxnwes['prototype'];return tvmif['_loadImage'] = function (qkht50) {
      var vbi1u9 = this,
          o6k4_2 = ![];qkht50['indexOf']('layaNativeDir/') == -0x1 && (o6k4_2 = !![], qkht50 = _4ok62['formatURL'](qkht50));if (!k0_hq['getFileInfo'](qkht50)) {
        if (qkht50['indexOf']('http://') != -0x1 || qkht50['indexOf']('https://') != -0x1) k0_hq['downImg'](qkht50, new kq450(zxnwes, zxnwes['onDownImgCallBack'], [qkht50, vbi1u9]), qkht50);else zxnwes['onCreateImage'](qkht50, vbi1u9, !![]);
      } else zxnwes['onCreateImage'](qkht50, vbi1u9, !o6k4_2);
    }, zxnwes['onDownImgCallBack'] = function (c2o6d, tk5hq0, ojd2c6) {
      if (!ojd2c6) zxnwes['onCreateImage'](c2o6d, tk5hq0);else tk5hq0['onError'](null);
    }, zxnwes['onCreateImage'] = function (q5, kthq, oj246) {
      oj246 === void 0x0 && (oj246 = ![]);var cwndj;if (!oj246) {
        var b1uv = k0_hq['getFileInfo'](q5),
            sdjwo = b1uv['md5'];cwndj = k0_hq['getFileNativePath'](sdjwo);
      } else cwndj = q5;if (kthq['imgCache'] == null) kthq['imgCache'] = {};var ze8wnx;function fvmbi() {
        ze8wnx['onload'] = null, ze8wnx['onerror'] = null, delete kthq['imgCache'][q5];
      };var hqk_50 = function () {
        fvmbi(), kthq['onLoaded'](ze8wnx);
      },
          k5q_04 = function () {
        fvmbi(), kthq['event']('error', 'Load image failed');
      };kthq['_type'] == 'nativeimage' ? (ze8wnx = new hfq0t5['window']['Image'](), ze8wnx['crossOrigin'] = '', ze8wnx['onload'] = hqk_50, ze8wnx['onerror'] = k5q_04, ze8wnx['src'] = cwndj, kthq['imgCache'][q5] = ze8wnx) : new y$73p['create'](cwndj, { 'onload': hqk_50, 'onerror': k5q_04, 'onCreate': function (fhbim) {
          ze8wnx = fhbim, kthq['imgCache'][q5] = fhbim;
        } });
    }, zxnwes;
  }(),
      bfih = function () {
    function k42o6_() {}return ft5qh0(k42o6_, 'laya.wx.mini.MiniInput'), k42o6_['_createInputElement'] = function () {
      fqmt0['_initInput'](fqmt0['area'] = hfq0t5['createElement']('textarea')), fqmt0['_initInput'](fqmt0['input'] = hfq0t5['createElement']('input')), fqmt0['inputContainer'] = hfq0t5['createElement']('div'), fqmt0['inputContainer']['style']['position'] = 'absolute', fqmt0['inputContainer']['style']['zIndex'] = 0x186a0, hfq0t5['container']['appendChild'](fqmt0['inputContainer']), fqmt0['inputContainer']['setPos'] = function (zrx8, s6djco) {
        fqmt0['inputContainer']['style']['left'] = zrx8 + 'px', fqmt0['inputContainer']['style']['top'] = s6djco + 'px';
      }, sxwdne['stage']['on']('resize', null, k42o6_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ndjsxw) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dswj['_soundClass'] = jcdow, dswj['_musicClass'] = jcdow;
    }, k42o6_['_onStageResize'] = function () {
      var $e87zr = sxwdne['stage']['_canvasTransform']['identity']();$e87zr['scale'](hfq0t5['width'] / xren8z['canvas']['width'] / ok6_2['getPixelRatio'](), hfq0t5['height'] / xren8z['canvas']['height'] / ok6_2['getPixelRatio']());
    }, k42o6_['wxinputFocus'] = function (hfit) {
      var hmi = fqmt0['inputElement']['target'];if (hmi && !hmi['editable']) return;htqfm['window']['wx']['offKeyboardConfirm'](), htqfm['window']['wx']['offKeyboardInput'](), htqfm['window']['wx']['showKeyboard']({ 'defaultValue': hmi['text'], 'maxLength': hmi['maxChars'], 'multiple': hmi['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (bvim) {}, 'fail': function (ez8xw) {} }), htqfm['window']['wx']['onKeyboardConfirm'](function (k6o_4) {
        var dsjoc6 = k6o_4 ? k6o_4['value'] : '';hmi['text'] = dsjoc6, hmi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), htqfm['window']['wx']['onKeyboardInput'](function (f5qt0h) {
        var _o2c4 = f5qt0h ? f5qt0h['value'] : '';if (!hmi['multiline']) {
          if (_o2c4['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }hmi['text'] = _o2c4, hmi['event']('input');
      });
    }, k42o6_['inputEnter'] = function () {
      fqmt0['inputElement']['target']['focus'] = ![];
    }, k42o6_['wxinputblur'] = function () {
      k42o6_['hideKeyboard']();
    }, k42o6_['hideKeyboard'] = function () {
      htqfm['window']['wx']['offKeyboardConfirm'](), htqfm['window']['wx']['offKeyboardInput'](), htqfm['window']['wx']['hideKeyboard']({ 'success': function (kq54_2) {
          console['log']('隐藏键盘');
        }, 'fail': function (fmtqh) {
          console['log']('隐藏键盘出错:' + (fmtqh ? fmtqh['errMsg'] : ''));
        } });
    }, k42o6_;
  }(),
      wdsxe = function () {
    function jsd6() {}ft5qh0(jsd6, 'laya.wx.mini.MiniLoader');var ows = jsd6['prototype'];return ows['load'] = function (exr7, h5_qk0, v1mb, p7y$3, xw8ez) {
      v1mb === void 0x0 && (v1mb = !![]), xw8ez === void 0x0 && (xw8ez = ![]);var r7e8z = this;r7e8z['_url'] = exr7;if (exr7['indexOf']('data:image') === 0x0) r7e8z['_type'] = h5_qk0 = 'image';else r7e8z['_type'] = h5_qk0 || (h5_qk0 = r7e8z['getTypeFromUrl'](exr7));r7e8z['_cache'] = v1mb, r7e8z['_data'] = null;var e$8r = 'ascii';if (exr7['indexOf']('.fnt') != -0x1) e$8r = 'utf8';else h5_qk0 == 'arraybuffer' && (e$8r = '');;var hbm = xjdsw['getFileExtension'](exr7);if (jsd6['_fileTypeArr']['indexOf'](hbm) != -0x1) htqfm['EnvConfig']['load']['call'](this, exr7, h5_qk0, v1mb, p7y$3, xw8ez);else {
        if (!k0_hq['getFileInfo'](exr7)) {
          if (exr7['indexOf']('layaNativeDir/') != -0x1) {
            if (htqfm['isZiYu']) {
              var cdos6j = k0_hq['ziyuFileData'][exr7];r7e8z['onLoaded'](cdos6j);return;
            } else {
              cosnole['log']('read read'), k0_hq['read'](exr7, e$8r, new kq450(jsd6, jsd6['onReadNativeCallBack'], [e$8r, exr7, h5_qk0, v1mb, p7y$3, xw8ez, r7e8z]));return;
            }
          }if (_4ok62['rootPath'] == '') var zxre8n = exr7;else zxre8n = exr7['split'](_4ok62['rootPath'])[0x0];exr7['indexOf']('http://') != -0x1 || exr7['indexOf']('https://') != -0x1 ? htqfm['EnvConfig']['load']['call'](r7e8z, exr7, h5_qk0, v1mb, p7y$3, xw8ez) : k0_hq['readFile'](zxre8n, e$8r, new kq450(jsd6, jsd6['onReadNativeCallBack'], [e$8r, exr7, h5_qk0, v1mb, p7y$3, xw8ez, r7e8z]), exr7);
        } else htqfm['EnvConfig']['load']['call'](this, exr7, h5_qk0, v1mb, p7y$3, xw8ez);
      }
    }, ows['resMgrLoad'] = function (vug9b1, eszw, fmtbv, v9g1bu, fbumv, ko_46, ug19v) {
      fmtbv === void 0x0 && (fmtbv = 0x0), v9g1bu === void 0x0 && (v9g1bu = ![]), fbumv === void 0x0 && (fbumv = ![]), ko_46 === void 0x0 && (ko_46 = 0x0), ug19v === void 0x0 && (ug19v = 0x3), vug9b1['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vug9b1), htqfm['EnvConfig']['resMgrLoad'](vug9b1, (dojs, _5kq2, wdjcos) => {
        jsd6['prototype']['resMgrLoadCallBack'](dojs, _5kq2, wdjcos, eszw);
      }, fmtbv, v9g1bu, fbumv, ko_46, ug19v);
    }, ows['resMgrLoadCallBack'] = function (biu91, d6oscj, o2_, ug9b) {
      console['log']('buff:::', biu91, o2_, k0_hq['fileNativeDir'] + '///' + k0_hq['fileListName']), ug9b(biu91, d6oscj, o2_);
    }, ows['clearRes'] = function (qtmfh, hk0) {
      hk0 === void 0x0 && (hk0 = ![]);var r7y$a = this;r7y$a['clearRes'](qtmfh, hk0);var bi19uv = k0_hq['getFileInfo'](qtmfh);if (bi19uv && (qtmfh['indexOf']('http://') != -0x1 || qtmfh['indexOf']('https://') != -0x1)) {
        var dnswc = bi19uv['md5'],
            f5hq0 = k0_hq['getFileNativePath'](dnswc);k0_hq['remove'](f5hq0);
      }
    }, jsd6['onReadNativeCallBack'] = function (qthf50, _04kq5, bumivf, y7ap3$, jwsndx, t5h, ex78, $e7z8r, $37y8r) {
      y7ap3$ === void 0x0 && (y7ap3$ = !![]), t5h === void 0x0 && (t5h = ![]), $e7z8r === void 0x0 && ($e7z8r = 0x0);if (!$e7z8r) {
        var mivubf;if (bumivf == 'json' || bumivf == 'atlas') mivubf = htqfm['getJson']($37y8r['data']);else bumivf == 'xml' ? mivubf = xjdsw['parseXMLFromString']($37y8r['data']) : mivubf = $37y8r['data'];ex78['onLoaded'](mivubf), !htqfm['isZiYu'] && htqfm['isPosMsgYu'] && bumivf != 'arraybuffer' && wx['postMessage']({ 'url': _04kq5, 'data': mivubf, 'isLoad': !![] });
      } else $e7z8r == 0x1 && htqfm['EnvConfig']['load']['call'](ex78, _04kq5, bumivf, y7ap3$, jwsndx, t5h);
    }, esxndw(jsd6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), jsd6;
  }(),
      k0_hq = function (cj42o) {
    function k4q0() {
      k4q0['__super']['call'](this);;
    }return ft5qh0(k4q0, 'laya.wx.mini.MiniFileMgr', cj42o), k4q0['isLoadFile'] = function (h0itm) {
      return k4q0['_fileTypeArr']['indexOf'](h0itm) != -0x1 ? !![] : ![];
    }, k4q0['getFileInfo'] = function (q0h5k) {
      var ncsw = q0h5k['split']('?')[0x0],
          tmihf0 = k4q0['filesListObj'][ncsw];if (tmihf0 == null) return null;else return tmihf0;return null;
    }, k4q0['onFileUpdate'] = function (_62o4c, qfht0m) {
      var _542qk = _62o4c['split']('/'),
          fvbmiu = _542qk[_542qk['length'] - 0x1],
          sjnxd = k4q0['getFileInfo'](qfht0m);if (sjnxd == null) k4q0['onSaveFile'](qfht0m, fvbmiu);else {
        if (sjnxd['readyUrl'] != qfht0m) k4q0['remove'](fvbmiu, qfht0m);
      }
    }, k4q0['exits'] = function (jodcw, py$3a) {
      var fimth0 = k4q0['getFileNativePath'](jodcw);k4q0['fs']['getFileInfo']({ 'filePath': fimth0, 'success': function (t0mqhf) {
          py$3a != null && py$3a['runWith']([0x0, t0mqhf]);
        }, 'fail': function (bimfht) {
          py$3a != null && py$3a['runWith']([0x1, bimfht]);
        } });
    }, k4q0['read'] = function (jnwdxs, ewzxs, fhtibm, bifumv) {
      ewzxs === void 0x0 && (ewzxs = 'ascill'), bifumv === void 0x0 && (bifumv = '');var ubvi19;bifumv != '' ? ubvi19 = k4q0['getFileNativePath'](jnwdxs) : ubvi19 = jnwdxs, k4q0['fs']['readFile']({ 'filePath': ubvi19, 'encoding': ewzxs, 'success': function (zer$87) {
          fhtibm != null && fhtibm['runWith']([0x0, zer$87]);
        }, 'fail': function (f0thmq) {
          if (f0thmq && bifumv != '') k4q0['down'](bifumv, ewzxs, fhtibm, bifumv);else fhtibm != null && fhtibm['runWith']([0x1]);
        } });
    }, k4q0['readNativeFile'] = function (exdnw, k62o4_) {
      k4q0['fs']['readFile']({ 'filePath': exdnw, 'encoding': '', 'success': function (hk0q5t) {
          k62o4_ != null && k62o4_['runWith']([0x0]);
        }, 'fail': function (uivbm) {
          k62o4_ != null && k62o4_['runWith']([0x1]);
        } });
    }, k4q0['down'] = function (q_2k, umbifv, xrn, ui9v1) {
      umbifv === void 0x0 && (umbifv = 'ascill'), ui9v1 === void 0x0 && (ui9v1 = '');var $re8z = k4q0['getFileNativePath'](ui9v1),
          hbmf = k4q0['wxdown']({ 'url': q_2k, 'filePath': $re8z, 'success': function (q5hk) {
          if (q5hk['statusCode'] === 0xc8) k4q0['readFile'](q5hk['filePath'], umbifv, xrn, ui9v1);
        }, 'fail': function (a7$r3y) {
          xrn != null && xrn['runWith']([0x1, a7$r3y]);
        } });hbmf['onProgressUpdate'](function (y$37ap) {
        xrn != null && xrn['runWith']([0x2, y$37ap['progress']]);
      });
    }, k4q0['readFile'] = function (swojc, z73$r8, wcsjo, nzex) {
      z73$r8 === void 0x0 && (z73$r8 = 'ascill'), nzex === void 0x0 && (nzex = ''), k4q0['fs']['readFile']({ 'filePath': swojc, 'encoding': z73$r8, 'success': function (swcndj) {
          if (swojc['indexOf']('http://') != -0x1 || swojc['indexOf']('https://') != -0x1) k4q0['onFileUpdate'](swojc, nzex);wcsjo != null && wcsjo['runWith']([0x0, swcndj]);
        }, 'fail': function (wznex8) {
          if (wznex8) wcsjo != null && wcsjo['runWith']([0x1, wznex8]);
        } });
    }, k4q0['downImg'] = function (mbhti, rnex, o264cj) {
      o264cj === void 0x0 && (o264cj = '');var $8z37r = k4q0['wxdown']({ 'url': mbhti, 'success': function (iu1vmb) {
          iu1vmb['statusCode'] === 0xc8 && k4q0['copyFile'](iu1vmb['tempFilePath'], o264cj, rnex);
        }, 'fail': function (r8exn) {
          rnex != null && rnex['runWith']([0x1, r8exn]);
        } });
    }, k4q0['copyFile'] = function (jswod, en8, co24j) {
      var r8nxz = jswod['split']('/'),
          iu91b = r8nxz[r8nxz['length'] - 0x1],
          xze87r = en8['split']('?')[0x0],
          ubifm = k4q0['getFileInfo'](en8),
          xsenwz = k4q0['getFileNativePath'](iu91b);k4q0['fs']['copyFile']({ 'srcPath': jswod, 'destPath': xsenwz, 'success': function (o_46k2) {
          if (!ubifm) k4q0['onSaveFile'](en8, iu91b), co24j != null && co24j['runWith']([0x0]);else {
            if (ubifm['readyUrl'] != en8) k4q0['remove'](iu91b, en8, co24j);
          }
        }, 'fail': function ($a3p7y) {
          co24j != null && co24j['runWith']([0x1, $a3p7y]);
        } });
    }, k4q0['getFileNativePath'] = function (wjdscn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wjdscn;
    }, k4q0['remove'] = function (ivmfbt, m1vb, x8znw) {
      m1vb === void 0x0 && (m1vb = '');var vg1b = k4q0['getFileInfo'](m1vb),
          j46c = k4q0['getFileNativePath'](vg1b['md5']);sxwdne['loader']['clearRes'](vg1b['readyUrl']), k4q0['fs']['unlink']({ 'filePath': j46c, 'success': function (swdnjx) {
          if (m1vb != '') k4q0['onSaveFile'](m1vb, ivmfbt);x8znw != null && x8znw['runWith']([0x0]);
        }, 'fail': function ($7ra3) {} });
    }, k4q0['onSaveFile'] = function (htfq05, nx8w) {
      var wsen = htfq05['split']('?')[0x0];k4q0['filesListObj'][wsen] = { 'md5': nx8w, 'readyUrl': htfq05 }, k4q0['fs']['writeFile']({ 'filePath': k4q0['fileNativeDir'] + '/' + k4q0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k4q0['filesListObj']), 'success': function (jocd62) {
          console['log']('写入测试测试成功：', jocd62);
        }, 'fail': function (ew8xnz) {
          console['log']('写入测试测试失败：', ew8xnz);
        } });
    }, k4q0['existDir'] = function (o4_c62, tfvbim) {
      k4q0['fs']['mkdir']({ 'dirPath': o4_c62, 'success': function (khq5_) {
          tfvbim != null && tfvbim['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (sxnwj) {
          if (sxnwj['errMsg']['indexOf']('file already exists') != -0x1) k4q0['readSync'](k4q0['fileListName'], 'utf8', tfvbim);else tfvbim != null && tfvbim['runWith']([0x1, sxnwj]);
        } });
    }, k4q0['readSync'] = function (qtkh0, hm0it, wjscnd, ktq50) {
      hm0it === void 0x0 && (hm0it = 'ascill'), ktq50 === void 0x0 && (ktq50 = '');var zenxr = k4q0['getFileNativePath'](qtkh0),
          ay73$p;try {
        ay73$p = k4q0['fs']['readFileSync'](zenxr), wjscnd != null && wjscnd['runWith']([0x0, { 'data': ay73$p }]);
      } catch (uvb) {
        wjscnd != null && wjscnd['runWith']([0x1]);
      }
    }, k4q0['readCache'] = function () {}, k4q0['writeCache'] = function (k25_4q) {
      var ezrn8x = readyUrl['split']('?')[0x0];k4q0['filesListObj'][ezrn8x] = { 'md5': md5Name, 'readyUrl': readyUrl }, k4q0['fs']['writeFile']({ 'filePath': k4q0['fileNativeDir'] + '/' + k4q0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k4q0['filesListObj']), 'success': function (k5ht0) {}, 'fail': function (_2ko46) {} });
    }, k4q0['setNativeFileDir'] = function (mtbh) {
      k4q0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mtbh;
    }, k4q0['filesListObj'] = {}, k4q0['fileNativeDir'] = null, k4q0['fileListName'] = 'layaairfiles.txt', k4q0['ziyuFileData'] = {}, esxndw(k4q0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), k4q0;
  }(k2_q54),
      jcdow = function (mitbfh) {
    function hq50kt() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hq50kt['__super']['call'](this), this['_sound'] = hq50kt['_createSound']();
    }ft5qh0(hq50kt, 'laya.wx.mini.MiniSound', mitbfh);var vibuf = hq50kt['prototype'];return vibuf['load'] = function (sdjwnx) {
      var jcndsw = this;sdjwnx = _4ok62['formatURL'](sdjwnx), this['url'] = sdjwnx;if (hq50kt['_audioCache'][sdjwnx]) {
        this['event']('complete');return;
      }function jcnwd() {
        if (hq50kt['_null'] != undefined) jcndsw['_sound']['onCanplay'](hq50kt['_null']), jcndsw['_sound']['onError'](hq50kt['_null']);else try {
          jcndsw['_sound']['onCanplay'](null), jcndsw['_sound']['onError'](null), hq50kt['_null'] = null;
        } catch (ftmhbi) {
          console['warn']('[wxmini] _clearSound:' + ftmhbi), jcndsw['_sound']['onCanplay'](hk05), jcndsw['_sound']['onError'](hk05), hq50kt['_null'] = hk05;
        }
      }function ewdsxn() {
        jcnwd(), q45_0k['loaded'] = !![], q45_0k['event']('complete'), hq50kt['_audioCache'][q45_0k['url']] = q45_0k;
      }function mft(q_h5k0) {
        console['error']('errCode=' + q_h5k0['errCode'] + '  errMsg=' + q_h5k0['errMsg']), jcnwd(), q45_0k['event']('error');
      }function hk05() {}this['_sound']['onCanplay'](ewdsxn), this['_sound']['onError'](mft), this['_sound']['src'] = sdjwnx;var q45_0k = this;
    }, vibuf['play'] = function (nexs, g19v) {
      nexs === void 0x0 && (nexs = 0x0), g19v === void 0x0 && (g19v = 0x0);var ojsc6d;if (this['url'] == dswj['_tMusic']) {
        if (!hq50kt['_musicAudio']) hq50kt['_musicAudio'] = hq50kt['_createSound']();ojsc6d = hq50kt['_musicAudio'];
      } else ojsc6d = hq50kt['_createSound']();ojsc6d['src'] = this['url'];var $ry837 = new f5hqt(ojsc6d);return $ry837['url'] = this['url'], $ry837['loops'] = g19v, $ry837['startTime'] = nexs, $ry837['play'](), dswj['addChannel']($ry837), $ry837;
    }, vibuf['dispose'] = function () {
      var nxzw8 = hq50kt['_audioCache'][this['url']];nxzw8 && (nxzw8['src'] = '', delete hq50kt['_audioCache'][this['url']]);
    }, thf0m(0x0, vibuf, 'duration', function () {
      return this['_sound']['duration'];
    }), hq50kt['_createSound'] = function () {
      return hq50kt['_id']++, htqfm['window']['wx']['createInnerAudioContext']();
    }, hq50kt['_musicAudio'] = null, hq50kt['_id'] = 0x0, hq50kt['_audioCache'] = {}, hq50kt['_null'] = undefined, hq50kt;
  }(k2_q54),
      f5hqt = function (e$87) {
    function qk_(j2c4o) {
      this['_audio'] = null, this['_onEnd'] = null, qk_['__super']['call'](this), this['_audio'] = j2c4o, this['_onEnd'] = xjdsw['bind'](this['__onEnd'], this), j2c4o['onEnded'](this['_onEnd']);
    }ft5qh0(qk_, 'laya.wx.mini.MiniSoundChannel', e$87);var mifbth = qk_['prototype'];return mifbth['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (sxwdne['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, mifbth['__onNull'] = function () {}, mifbth['play'] = function () {
      this['isStopped'] = ![], dswj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, mifbth['stop'] = function () {
      this['isStopped'] = !![], dswj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qk_['_null'] != undefined) this['_audio']['onEnded'](qk_['_null']);else try {
        this['_audio']['onEnded'](null), qk_['_null'] = null;
      } catch (ne8zx) {
        console['warn']('[wxmini] stop:' + ne8zx), this['_audio']['onEnded'](xjdsw['bind'](this['__onNull'], this)), qk_['_null'] = xjdsw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, mifbth['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, mifbth['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dswj['addChannel'](this), this['_audio']['play']();
    }, thf0m(0x0, mifbth, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), thf0m(0x0, mifbth, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), thf0m(0x0, mifbth, 'volume', function () {
      return 0x1;
    }, function ($rz8e7) {}), qk_['_null'] = undefined, qk_;
  }(cnswdj);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var q5htk0 in Laya) {
    var ner = Laya[q5htk0];ner && ner['__isclass'] && (exports[q5htk0] = ner);
  }
});