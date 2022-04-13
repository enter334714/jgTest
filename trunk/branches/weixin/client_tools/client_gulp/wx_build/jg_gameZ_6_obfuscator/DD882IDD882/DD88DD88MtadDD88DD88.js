var G = wx.$E;
(function (window, document, $m4b7c) {
  var hgynp9 = $m4b7c['un'],
      cm4b7$ = $m4b7c['uns'],
      q8 = $m4b7c['static'],
      bm4c$7 = $m4b7c['class'],
      ds_t1i = $m4b7c['getset'],
      bf7c = $m4b7c['__newvec'],
      j_1 = laya['utils']['Browser'],
      c4kb$ = laya['events']['Event'],
      ng = laya['events']['EventDispatcher'],
      rhau = laya['resource']['HTMLImage'],
      jkdi65 = laya['utils']['Handler'],
      a9ruqh = laya['display']['Input'],
      _3ts = laya['net']['Loader'],
      t_j = laya['maths']['Matrix'],
      ga9hpu = laya['renders']['Render'],
      nhyplg = laya['utils']['RunDriver'],
      c$4mkb = laya['media']['Sound'],
      m$c47 = laya['media']['SoundChannel'],
      $4mckb = laya['media']['SoundManager'],
      t1i2s_ = laya['display']['Stage'],
      ylpgxn = laya['net']['URL'],
      wbfm78 = laya['utils']['Utils'],
      awqrvu = function () {
    function i_s1d() {}return bm4c$7(i_s1d, 'laya.wx.mini.MiniAdpter'), i_s1d['getJson'] = function (dki) {
      return JSON['parse'](dki);
    }, i_s1d['init'] = function (ik6j, t1s3) {
      ik6j === void 0x0 && (ik6j = ![]), t1s3 === void 0x0 && (t1s3 = ![]);if (i_s1d['_inited']) return;i_s1d['window'] = window;if (i_s1d['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i_s1d['_inited'] = !![], i_s1d['isZiYu'] = t1s3, i_s1d['isPosMsgYu'] = ik6j, i_s1d['EnvConfig'] = {}, !i_s1d['isZiYu'] && (m7bf8w['setNativeFileDir']('/layaairGame'), m7bf8w['existDir'](m7bf8w['fileNativeDir'], jkdi65['create'](i_s1d, i_s1d['onMkdirCallBack']))), i_s1d['window']['focus'] = function () {}, $m4b7c['getUrlPath'] = function () {}, i_s1d['window']['logtime'] = function (ij5d6k) {}, i_s1d['window']['alertTimeLog'] = function (s23t0) {}, i_s1d['window']['resetShareInfo'] = function () {}, i_s1d['window']['CanvasRenderingContext2D'] = function () {}, i_s1d['window']['CanvasRenderingContext2D']['prototype'] = i_s1d['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i_s1d['window']['document']['body']['appendChild'] = function () {}, i_s1d['EnvConfig']['pixelRatioInt'] = 0x0, nhyplg['getPixelRatio'] = i_s1d['pixelRatio'], i_s1d['_preCreateElement'] = j_1['createElement'], j_1['createElement'] = i_s1d['createElement'], nhyplg['createShaderCondition'] = i_s1d['createShaderCondition'], wbfm78['parseXMLFromString'] = i_s1d['parseXMLFromString'], a9ruqh['_createInputElement'] = _ijd1t['_createInputElement'], i_s1d['EnvConfig']['load'] = _3ts['prototype']['load'], _3ts['prototype']['load'] = qwf8r['prototype']['load'], i_s1d['isZiYu'] && ik6j && wx['onMessage'](function (fbm84) {
        fbm84['isLoad'] && (m7bf8w['ziyuFileData'][fbm84['url']] = fbm84['data']);
      });
    }, i_s1d['onMkdirCallBack'] = function (bmf847, v7fwm8) {
      if (!bmf847) m7bf8w['filesListObj'] = JSON['parse'](v7fwm8['data']);
    }, i_s1d['pixelRatio'] = function () {
      if (!i_s1d['EnvConfig']['pixelRatioInt']) try {
        var mf7v8 = wx['getSystemInfoSync']();return i_s1d['EnvConfig']['pixelRatioInt'] = mf7v8['pixelRatio'], mf7v8 = mf7v8, mf7v8['pixelRatio'];
      } catch (s_230t) {}return i_s1d['EnvConfig']['pixelRatioInt'];
    }, i_s1d['createElement'] = function (qhgua9) {
      if (qhgua9 == 'canvas') {
        var pguhy9;return i_s1d['idx'] == 0x1 ? i_s1d['isZiYu'] ? (pguhy9 = sharedCanvas, pguhy9['style'] = {}) : pguhy9 = window['canvas'] : pguhy9 = window['wx']['createCanvas'](), i_s1d['idx']++, pguhy9;
      } else {
        if (qhgua9 == 'textarea' || qhgua9 == 'input') return i_s1d['onCreateInput'](qhgua9);else {
          if (qhgua9 == 'div') {
            var arqw8v = i_s1d['_preCreateElement'](qhgua9);return arqw8v['contains'] = function (frv8q) {
              return null;
            }, arqw8v['removeChild'] = function ($6jk5c) {}, arqw8v;
          } else return i_s1d['_preCreateElement'](qhgua9);
        }
      }
    }, i_s1d['onCreateInput'] = function (ugpah9) {
      var quw = i_s1d['_preCreateElement'](ugpah9);return quw['focus'] = _ijd1t['wxinputFocus'], quw['blur'] = _ijd1t['wxinputblur'], quw['style'] = {}, quw['value'] = 0x0, quw['parentElement'] = {}, quw['placeholder'] = {}, quw['type'] = {}, quw['setColor'] = function (i1sdt_) {}, quw['setType'] = function (bkm4$c) {}, quw['setFontFace'] = function (c7b$4m) {}, quw['addEventListener'] = function (m$b47c) {}, quw['contains'] = function ($k465) {
        return null;
      }, quw['removeChild'] = function (gqu) {}, quw;
    }, i_s1d['createShaderCondition'] = function (hqu9r) {
      var ck6j = this,
          vrw8fq = function () {
        var s_2t30 = hqu9r;return ck6j[hqu9r['replace']('this.', '')];
      };return vrw8fq;
    }, i_s1d['EnvConfig'] = null, i_s1d['window'] = null, i_s1d['_preCreateElement'] = null, i_s1d['_inited'] = ![], i_s1d['wxRequest'] = null, i_s1d['systemInfo'] = null, i_s1d['version'] = '0.0.1', i_s1d['isZiYu'] = ![], i_s1d['isPosMsgYu'] = ![], i_s1d['parseXMLFromString'] = function (bm) {
      var hruaq, jid;bm = bm['replace'](/>\s+</g, '><');try {
        hruaq = new window['Parser']['DOMParser']()['parseFromString'](bm, 'text/xml');
      } catch (h9aug) {
        throw '需要引入xml解析库文件';
      }return hruaq;
    }, i_s1d['idx'] = 0x1, i_s1d;
  }(),
      augq9h = function () {
    function $546k() {}bm4c$7($546k, 'laya.wx.mini.MiniImage');var ditj1_ = $546k['prototype'];return ditj1_['_loadImage'] = function (ji1_5) {
      var tz03s2 = this,
          pnyo = ![];ji1_5['indexOf']('layaNativeDir/') == -0x1 && (pnyo = !![], ji1_5 = ylpgxn['formatURL'](ji1_5));if (!m7bf8w['getFileInfo'](ji1_5)) {
        if (ji1_5['indexOf']('http://') != -0x1 || ji1_5['indexOf']('https://') != -0x1) m7bf8w['downImg'](ji1_5, new jkdi65($546k, $546k['onDownImgCallBack'], [ji1_5, tz03s2]), ji1_5);else $546k['onCreateImage'](ji1_5, tz03s2, !![]);
      } else $546k['onCreateImage'](ji1_5, tz03s2, !pnyo);
    }, $546k['onDownImgCallBack'] = function (nhpg9, ruvqwa, yxpnlo) {
      if (!yxpnlo) $546k['onCreateImage'](nhpg9, ruvqwa);else ruvqwa['onError'](null);
    }, $546k['onCreateImage'] = function (b7fw8m, guah9, dti1) {
      dti1 === void 0x0 && (dti1 = ![]);var m74b8f;if (!dti1) {
        var mvw87 = m7bf8w['getFileInfo'](b7fw8m),
            k5j6$d = mvw87['md5'];m74b8f = m7bf8w['getFileNativePath'](k5j6$d);
      } else m74b8f = b7fw8m;if (guah9['imgCache'] == null) guah9['imgCache'] = {};var is2_t;function dj651i() {
        is2_t['onload'] = null, is2_t['onerror'] = null, delete guah9['imgCache'][b7fw8m];
      };var $cj65k = function () {
        dj651i(), guah9['onLoaded'](is2_t);
      },
          i6j5dk = function () {
        dj651i(), guah9['event']('error', 'Load image failed');
      };guah9['_type'] == 'nativeimage' ? (is2_t = new j_1['window']['Image'](), is2_t['crossOrigin'] = '', is2_t['onload'] = $cj65k, is2_t['onerror'] = i6j5dk, is2_t['src'] = m74b8f, guah9['imgCache'][b7fw8m] = is2_t) : new rhau['create'](m74b8f, { 'onload': $cj65k, 'onerror': i6j5dk, 'onCreate': function (ijdk65) {
          is2_t = ijdk65, guah9['imgCache'][b7fw8m] = ijdk65;
        } });
    }, $546k;
  }(),
      _ijd1t = function () {
    function st_21i() {}return bm4c$7(st_21i, 'laya.wx.mini.MiniInput'), st_21i['_createInputElement'] = function () {
      a9ruqh['_initInput'](a9ruqh['area'] = j_1['createElement']('textarea')), a9ruqh['_initInput'](a9ruqh['input'] = j_1['createElement']('input')), a9ruqh['inputContainer'] = j_1['createElement']('div'), a9ruqh['inputContainer']['style']['position'] = 'absolute', a9ruqh['inputContainer']['style']['zIndex'] = 0x186a0, j_1['container']['appendChild'](a9ruqh['inputContainer']), a9ruqh['inputContainer']['setPos'] = function (xgnpy, _2s1ti) {
        a9ruqh['inputContainer']['style']['left'] = xgnpy + 'px', a9ruqh['inputContainer']['style']['top'] = _2s1ti + 'px';
      }, $m4b7c['stage']['on']('resize', null, st_21i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (lngpyx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $4mckb['_soundClass'] = mbc4f, $4mckb['_musicClass'] = mbc4f, window['_videoClass'] = oxlyp;
    }, st_21i['_onStageResize'] = function () {
      var plno = $m4b7c['stage']['_canvasTransform']['identity']();plno['scale'](j_1['width'] / ga9hpu['canvas']['width'] / nhyplg['getPixelRatio'](), j_1['height'] / ga9hpu['canvas']['height'] / nhyplg['getPixelRatio']());
    }, st_21i['wxinputFocus'] = function (fwvm7) {
      var rquva = a9ruqh['inputElement']['target'];if (rquva && !rquva['editable']) return;awqrvu['window']['wx']['offKeyboardConfirm'](), awqrvu['window']['wx']['offKeyboardInput'](), awqrvu['window']['wx']['showKeyboard']({ 'defaultValue': rquva['text'], 'maxLength': rquva['maxChars'], 'multiple': rquva['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (h9guaq) {}, 'fail': function (w7r8vf) {} }), awqrvu['window']['wx']['onKeyboardConfirm'](function (avqrwu) {
        var m78b4f = avqrwu ? avqrwu['value'] : '';rquva['text'] = m78b4f, rquva['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), awqrvu['window']['wx']['onKeyboardInput'](function ($6c5) {
        var j6dki = $6c5 ? $6c5['value'] : '';if (!rquva['multiline']) {
          if (j6dki['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }rquva['text'] = j6dki, rquva['event']('input');
      });
    }, st_21i['inputEnter'] = function () {
      a9ruqh['inputElement']['target']['focus'] = ![];
    }, st_21i['wxinputblur'] = function () {
      st_21i['hideKeyboard']();
    }, st_21i['hideKeyboard'] = function () {
      awqrvu['window']['wx']['offKeyboardConfirm'](), awqrvu['window']['wx']['offKeyboardInput'](), awqrvu['window']['wx']['hideKeyboard']({ 'success': function (ts1_i) {
          console['log']('隐藏键盘');
        }, 'fail': function (pyxl) {
          console['log']('隐藏键盘出错:' + (pyxl ? pyxl['errMsg'] : ''));
        } });
    }, st_21i;
  }(),
      qwf8r = function () {
    function qgauh9() {}bm4c$7(qgauh9, 'laya.wx.mini.MiniLoader');var ypgn = qgauh9['prototype'];return ypgn['load'] = function (dkji, ravq9, $5k46c, sz30t2, b6$4ck) {
      $5k46c === void 0x0 && ($5k46c = !![]), b6$4ck === void 0x0 && (b6$4ck = ![]);var ji1_5d = this;ji1_5d['_url'] = dkji;if (dkji['indexOf']('data:image') === 0x0) ji1_5d['_type'] = ravq9 = 'image';else ji1_5d['_type'] = ravq9 || (ravq9 = ji1_5d['getTypeFromUrl'](dkji));ji1_5d['_cache'] = $5k46c, ji1_5d['_data'] = null;var hu9aqr = 'ascii';if (dkji['indexOf']('.fnt') != -0x1) hu9aqr = 'utf8';else ravq9 == 'arraybuffer' && (hu9aqr = '');;var b4k6$ = wbfm78['getFileExtension'](dkji);if (qgauh9['_fileTypeArr']['indexOf'](b4k6$) != -0x1) awqrvu['EnvConfig']['load']['call'](this, dkji, ravq9, $5k46c, sz30t2, b6$4ck);else {
        if (!m7bf8w['getFileInfo'](dkji)) {
          if (dkji['indexOf']('layaNativeDir/') != -0x1) {
            if (awqrvu['isZiYu']) {
              var $jc5k6 = m7bf8w['ziyuFileData'][dkji];ji1_5d['onLoaded']($jc5k6);return;
            } else {
              cosnole['log']('read read'), m7bf8w['read'](dkji, hu9aqr, new jkdi65(qgauh9, qgauh9['onReadNativeCallBack'], [hu9aqr, dkji, ravq9, $5k46c, sz30t2, b6$4ck, ji1_5d]));return;
            }
          }if (ylpgxn['rootPath'] == '') var ij65kd = dkji;else ij65kd = dkji['split'](ylpgxn['rootPath'])[0x0];dkji['indexOf']('http://') != -0x1 || dkji['indexOf']('https://') != -0x1 ? awqrvu['EnvConfig']['load']['call'](ji1_5d, dkji, ravq9, $5k46c, sz30t2, b6$4ck) : m7bf8w['readFile'](ij65kd, hu9aqr, new jkdi65(qgauh9, qgauh9['onReadNativeCallBack'], [hu9aqr, dkji, ravq9, $5k46c, sz30t2, b6$4ck, ji1_5d]), dkji);
        } else awqrvu['EnvConfig']['load']['call'](this, dkji, ravq9, $5k46c, sz30t2, b6$4ck);
      }
    }, ypgn['resMgrLoad'] = function (z03t, t023_s, uawvrq, b$k6, c65$k4, _1s23t, bm847) {
      uawvrq === void 0x0 && (uawvrq = 0x0), b$k6 === void 0x0 && (b$k6 = ![]), c65$k4 === void 0x0 && (c65$k4 = ![]), _1s23t === void 0x0 && (_1s23t = 0x0), bm847 === void 0x0 && (bm847 = 0x3), z03t['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z03t), awqrvu['EnvConfig']['resMgrLoad'](z03t, (kmb4, ds1_ti, k564) => {
        qgauh9['prototype']['resMgrLoadCallBack'](kmb4, ds1_ti, k564, t023_s);
      }, uawvrq, b$k6, c65$k4, _1s23t, bm847);
    }, ypgn['resMgrLoadCallBack'] = function (c$jk, its1_, quv9a, zst23) {
      console['log']('buff:::', c$jk, quv9a, m7bf8w['fileNativeDir'] + '///' + m7bf8w['fileListName']), zst23(c$jk, its1_, quv9a);
    }, ypgn['clearRes'] = function (vqwr8, w87vrf) {
      w87vrf === void 0x0 && (w87vrf = ![]);var augp9h = this;augp9h['clearRes'](vqwr8, w87vrf);var id6k = m7bf8w['getFileInfo'](vqwr8);if (id6k && (vqwr8['indexOf']('http://') != -0x1 || vqwr8['indexOf']('https://') != -0x1)) {
        var vw78m = id6k['md5'],
            gpnx = m7bf8w['getFileNativePath'](vw78m);m7bf8w['remove'](gpnx);
      }
    }, qgauh9['onReadNativeCallBack'] = function (_5, fb78m4, z3t0s, bfm874, ijtd1_, $5kc, $kbm4c, $j6d5, s2t31_) {
      bfm874 === void 0x0 && (bfm874 = !![]), $5kc === void 0x0 && ($5kc = ![]), $j6d5 === void 0x0 && ($j6d5 = 0x0);if (!$j6d5) {
        var lynpgh;if (z3t0s == 'json' || z3t0s == 'atlas') lynpgh = awqrvu['getJson'](s2t31_['data']);else z3t0s == 'xml' ? lynpgh = wbfm78['parseXMLFromString'](s2t31_['data']) : lynpgh = s2t31_['data'];$kbm4c['onLoaded'](lynpgh), !awqrvu['isZiYu'] && awqrvu['isPosMsgYu'] && z3t0s != 'arraybuffer' && wx['postMessage']({ 'url': fb78m4, 'data': lynpgh, 'isLoad': !![] });
      } else $j6d5 == 0x1 && awqrvu['EnvConfig']['load']['call']($kbm4c, fb78m4, z3t0s, bfm874, ijtd1_, $5kc);
    }, q8(qgauh9, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qgauh9;
  }(),
      m7bf8w = function (s30_) {
    function ar9q() {
      ar9q['__super']['call'](this);;
    }return bm4c$7(ar9q, 'laya.wx.mini.MiniFileMgr', s30_), ar9q['isLoadFile'] = function (ygnhp) {
      return ar9q['_fileTypeArr']['indexOf'](ygnhp) != -0x1 ? !![] : ![];
    }, ar9q['getFileInfo'] = function (kj6i5d) {
      var pglx = kj6i5d['split']('?')[0x0],
          v8w = ar9q['filesListObj'][pglx];if (v8w == null) return null;else return v8w;return null;
    }, ar9q['onFileUpdate'] = function (xyo, ki6d) {
      var gphln = xyo['split']('/'),
          istd = gphln[gphln['length'] - 0x1],
          $c7m4 = ar9q['getFileInfo'](ki6d);if ($c7m4 == null) ar9q['onSaveFile'](ki6d, istd);else {
        if ($c7m4['readyUrl'] != ki6d) ar9q['remove'](istd, ki6d);
      }
    }, ar9q['exits'] = function (b7w8f, m8fbw) {
      var i51dj6 = ar9q['getFileNativePath'](b7w8f);ar9q['fs']['getFileInfo']({ 'filePath': i51dj6, 'success': function (hpy9n) {
          m8fbw != null && m8fbw['runWith']([0x0, hpy9n]);
        }, 'fail': function (nlpyo) {
          m8fbw != null && m8fbw['runWith']([0x1, nlpyo]);
        } });
    }, ar9q['read'] = function (t_31s2, vfwrq, g9uqa, is2t1) {
      vfwrq === void 0x0 && (vfwrq = 'ascill'), is2t1 === void 0x0 && (is2t1 = '');var cb64$k;is2t1 != '' ? cb64$k = ar9q['getFileNativePath'](t_31s2) : cb64$k = t_31s2, ar9q['fs']['readFile']({ 'filePath': cb64$k, 'encoding': vfwrq, 'success': function (i1_jt) {
          g9uqa != null && g9uqa['runWith']([0x0, i1_jt]);
        }, 'fail': function (zt023s) {
          if (zt023s && is2t1 != '') ar9q['down'](is2t1, vfwrq, g9uqa, is2t1);else g9uqa != null && g9uqa['runWith']([0x1]);
        } });
    }, ar9q['readNativeFile'] = function (aq9hur, i1_dts) {
      ar9q['fs']['readFile']({ 'filePath': aq9hur, 'encoding': '', 'success': function (j_dti) {
          i1_dts != null && i1_dts['runWith']([0x0]);
        }, 'fail': function (hgnpl) {
          i1_dts != null && i1_dts['runWith']([0x1]);
        } });
    }, ar9q['down'] = function (opnlxy, poynl, itsd1_, jdi615) {
      poynl === void 0x0 && (poynl = 'ascill'), jdi615 === void 0x0 && (jdi615 = '');var qhra9u = ar9q['getFileNativePath'](jdi615),
          qra9uh = ar9q['wxdown']({ 'url': opnlxy, 'filePath': qhra9u, 'success': function (mbc4$k) {
          if (mbc4$k['statusCode'] === 0xc8) ar9q['readFile'](mbc4$k['filePath'], poynl, itsd1_, jdi615);
        }, 'fail': function (r8vf7) {
          itsd1_ != null && itsd1_['runWith']([0x1, r8vf7]);
        } });qra9uh['onProgressUpdate'](function (avuq9r) {
        itsd1_ != null && itsd1_['runWith']([0x2, avuq9r['progress']]);
      });
    }, ar9q['readFile'] = function (g9uhpa, hruqa9, t2i, wb7mf8) {
      hruqa9 === void 0x0 && (hruqa9 = 'ascill'), wb7mf8 === void 0x0 && (wb7mf8 = ''), ar9q['fs']['readFile']({ 'filePath': g9uhpa, 'encoding': hruqa9, 'success': function (nph9gy) {
          if (g9uhpa['indexOf']('http://') != -0x1 || g9uhpa['indexOf']('https://') != -0x1) ar9q['onFileUpdate'](g9uhpa, wb7mf8);t2i != null && t2i['runWith']([0x0, nph9gy]);
        }, 'fail': function (mfb7w8) {
          if (mfb7w8) t2i != null && t2i['runWith']([0x1, mfb7w8]);
        } });
    }, ar9q['downImg'] = function (phlyn, ji156, c$65k) {
      c$65k === void 0x0 && (c$65k = '');var qaug9 = ar9q['wxdown']({ 'url': phlyn, 'success': function (dk65ij) {
          dk65ij['statusCode'] === 0xc8 && ar9q['copyFile'](dk65ij['tempFilePath'], c$65k, ji156);
        }, 'fail': function (a8wqrv) {
          ji156 != null && ji156['runWith']([0x1, a8wqrv]);
        } });
    }, ar9q['copyFile'] = function (ruwq, j$k6d5, varq9u) {
      var k6c45 = ruwq['split']('/'),
          cm4$ = k6c45[k6c45['length'] - 0x1],
          gypnx = j$k6d5['split']('?')[0x0],
          _5id = ar9q['getFileInfo'](j$k6d5),
          k6$5c4 = ar9q['getFileNativePath'](cm4$);ar9q['fs']['copyFile']({ 'srcPath': ruwq, 'destPath': k6$5c4, 'success': function (qauv9) {
          if (!_5id) ar9q['onSaveFile'](j$k6d5, cm4$), varq9u != null && varq9u['runWith']([0x0]);else {
            if (_5id['readyUrl'] != j$k6d5) ar9q['remove'](cm4$, j$k6d5, varq9u);
          }
        }, 'fail': function (nh9py) {
          varq9u != null && varq9u['runWith']([0x1, nh9py]);
        } });
    }, ar9q['getFileNativePath'] = function (t_3s2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t_3s2;
    }, ar9q['remove'] = function (a9ur, q9rvu, jk56d) {
      q9rvu === void 0x0 && (q9rvu = '');var olnxp = ar9q['getFileInfo'](q9rvu),
          c7m4b = ar9q['getFileNativePath'](olnxp['md5']);$m4b7c['loader']['clearRes'](olnxp['readyUrl']), ar9q['fs']['unlink']({ 'filePath': c7m4b, 'success': function (j51di_) {
          if (q9rvu != '') ar9q['onSaveFile'](q9rvu, a9ur);jk56d != null && jk56d['runWith']([0x0]);
        }, 'fail': function (jd6i51) {} });
    }, ar9q['onSaveFile'] = function (hn9ypg, ji1d_) {
      var fm487 = hn9ypg['split']('?')[0x0];ar9q['filesListObj'][fm487] = { 'md5': ji1d_, 'readyUrl': hn9ypg }, ar9q['fs']['writeFile']({ 'filePath': ar9q['fileNativeDir'] + '/' + ar9q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ar9q['filesListObj']), 'success': function (onlxpy) {
          console['log']('写入测试测试成功：', onlxpy);
        }, 'fail': function (n9g) {
          console['log']('写入测试测试失败：', n9g);
        } });
    }, ar9q['existDir'] = function (pylnx, _sti2) {
      ar9q['fs']['mkdir']({ 'dirPath': pylnx, 'success': function (ngyplh) {
          _sti2 != null && _sti2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (uaqr) {
          if (uaqr['errMsg']['indexOf']('file already exists') != -0x1) ar9q['readSync'](ar9q['fileListName'], 'utf8', _sti2);else _sti2 != null && _sti2['runWith']([0x1, uaqr]);
        } });
    }, ar9q['readSync'] = function (b7fc4, di561j, j_di1t, vwqr) {
      di561j === void 0x0 && (di561j = 'ascill'), vwqr === void 0x0 && (vwqr = '');var cbmk$ = ar9q['getFileNativePath'](b7fc4),
          t_s21;try {
        t_s21 = ar9q['fs']['readFileSync'](cbmk$), j_di1t != null && j_di1t['runWith']([0x0, { 'data': t_s21 }]);
      } catch (d_5j) {
        j_di1t != null && j_di1t['runWith']([0x1]);
      }
    }, ar9q['readCache'] = function () {}, ar9q['writeCache'] = function (vu9rqa) {
      var s1_2t3 = readyUrl['split']('?')[0x0];ar9q['filesListObj'][s1_2t3] = { 'md5': md5Name, 'readyUrl': readyUrl }, ar9q['fs']['writeFile']({ 'filePath': ar9q['fileNativeDir'] + '/' + ar9q['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ar9q['filesListObj']), 'success': function (nplxoy) {}, 'fail': function (c$b47) {} });
    }, ar9q['setNativeFileDir'] = function (raqvw) {
      ar9q['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + raqvw;
    }, ar9q['filesListObj'] = {}, ar9q['fileNativeDir'] = null, ar9q['fileListName'] = 'layaairfiles.txt', ar9q['ziyuFileData'] = {}, q8(ar9q, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ar9q;
  }(ng),
      mbc4f = function (yopxn) {
    function i5j1_d() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], i5j1_d['__super']['call'](this), this['_sound'] = i5j1_d['_createSound'](), this['_chanell'] = new $cbkm(this['_sound']);
    }bm4c$7(i5j1_d, 'laya.wx.mini.MiniSound', yopxn);var augh9p = i5j1_d['prototype'];return augh9p['load'] = function (k6$bc4) {
      var k5$6 = this;k6$bc4 = ylpgxn['formatURL'](k6$bc4), this['url'] = k6$bc4;if (i5j1_d['_audioCache'][k6$bc4]) {
        this['event']('complete');return;
      }function plgynx() {
        if (i5j1_d['_null'] != undefined) k5$6['_sound']['onCanplay'](i5j1_d['_null']), k5$6['_sound']['onError'](i5j1_d['_null']);else try {
          k5$6['_sound']['onCanplay'](null), k5$6['_sound']['onError'](null), i5j1_d['_null'] = null;
        } catch (b7fwm8) {
          console['warn']('[wxmini] _clearSound:' + b7fwm8), k5$6['_sound']['onCanplay'](ynpolx), k5$6['_sound']['onError'](ynpolx), i5j1_d['_null'] = ynpolx;
        }
      }function wv7m() {
        g9hupy['loaded'] = !![], g9hupy['event']('complete'), i5j1_d['_audioCache'][g9hupy['url']] = g9hupy;
      }function wrvfq(ughy9) {
        console['error']('errCode=' + ughy9['errCode'] + '  errMsg=' + ughy9['errMsg']), g9hupy['event']('error');
      }function ynpolx() {}this['_sound']['onCanplay'](wv7m), this['_sound']['onError'](wrvfq), this['_sound']['src'] = k6$bc4;var g9hupy = this;
    }, augh9p['play'] = function (qu9gha, di6kj) {
      qu9gha === void 0x0 && (qu9gha = 0x0), di6kj === void 0x0 && (di6kj = 0x0);var f7m8b4, wmf87;if (this['url'] == $4mckb['_tMusic']) {
        if (!i5j1_d['_musicAudio']) i5j1_d['_musicAudio'] = this['_sound'];f7m8b4 = i5j1_d['_musicAudio'], wmf87 = this['_chanell'];
      } else f7m8b4 = this['_sound'], wmf87 = this['_chanell'];return f7m8b4['src'] = this['url'], f7m8b4['startTime'] = 0x0, wmf87['isStopped'] && (wmf87['url'] = this['url'], wmf87['loops'] = di6kj, wmf87['startTime'] = qu9gha, wmf87['play'](), $4mckb['addChannel'](wmf87)), wmf87;
    }, augh9p['dispose'] = function () {
      var rf7v8w = i5j1_d['_audioCache'][this['url']];rf7v8w && (rf7v8w['src'] = '', delete i5j1_d['_audioCache'][this['url']]);
    }, ds_t1i(0x0, augh9p, 'duration', function () {
      return this['_sound']['duration'];
    }), i5j1_d['_createSound'] = function () {
      i5j1_d['_id']++;var s3z0 = awqrvu['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return s3z0;
    }, i5j1_d['_musicAudio'] = null, i5j1_d['_id'] = 0x0, i5j1_d['_audioCache'] = {}, i5j1_d['_null'] = undefined, i5j1_d;
  }(ng),
      $cbkm = function (bk4cm) {
    function m$7b4c(rvwf87) {
      this['_audio'] = null, this['_onEnd'] = null, m$7b4c['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = rvwf87, this['_onEnd'] = wbfm78['bind'](this['__onEnd'], this), rvwf87['onEnded'](this['_onEnd']);
    }bm4c$7(m$7b4c, 'laya.wx.mini.MiniSoundChannel', bk4cm);var uhgaq = m$7b4c['prototype'];return uhgaq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($m4b7c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uhgaq['__onNull'] = function () {}, uhgaq['play'] = function () {
      this['isStopped'] = ![], $4mckb['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, uhgaq['stop'] = function () {
      this['isStopped'] = !![], $4mckb['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, uhgaq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, uhgaq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $4mckb['addChannel'](this), this['_audio']['play']();
    }, ds_t1i(0x0, uhgaq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ds_t1i(0x0, uhgaq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ds_t1i(0x0, uhgaq, 'volume', function () {
      return 0x1;
    }, function (b6c$k) {}), m$7b4c['_null'] = undefined, m$7b4c;
  }(m$c47),
      oxlyp = function () {
    function z032st() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = awqrvu['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }bm4c$7(z032st, 'laya.wx.mini.MiniVideo');var _si1t2 = z032st['prototype'];return _si1t2['on'] = function (fvq8, ravu9, c4$6) {
      if (fvq8 == 'loadedmetadata') this['onPlayFunc'] = c4$6['bind'](ravu9), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else fvq8 == 'ended' && (this['onEndedFunC'] = c4$6['bind'](ravu9), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, _si1t2['onTimeUpdateFunc'] = function (phua) {
      this['position'] = phua['position'], this['_duration'] = phua['duration'];
    }, _si1t2['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, _si1t2['onended'] = function (_0s2, mckb$) {
      this['onEndedFunC'] = mckb$['bind'](_0s2), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, _si1t2['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, _si1t2['off'] = function (j5i16, t123_, j1d_i5) {
      if (j5i16 == 'loadedmetadata') this['onPlayFunc'] = j1d_i5['bind'](t123_), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else j5i16 == 'ended' && (this['onEndedFunC'] = j1d_i5['bind'](t123_), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, _si1t2['load'] = function (gylnpx) {
      if (!this['videoElement']) return;this['videoElement']['src'] = gylnpx;
    }, _si1t2['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, _si1t2['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, _si1t2['size'] = function (ts_032, b4m$k) {
      if (!this['videoElement']) return;this['videoElement']['width'] = ts_032, this['videoElement']['height'] = b4m$k;
    }, _si1t2['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, _si1t2['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ds_t1i(0x0, _si1t2, 'duration', function () {
      return this['_duration'];
    }), ds_t1i(0x0, _si1t2, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (s03_) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = s03_;
    }), ds_t1i(0x0, _si1t2, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ds_t1i(0x0, _si1t2, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ds_t1i(0x0, _si1t2, 'ended', function () {
      return this['videoend'];
    }), ds_t1i(0x0, _si1t2, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (yngplx) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = yngplx;
    }), ds_t1i(0x0, _si1t2, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (c4b$6k) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = c4b$6k;
    }), ds_t1i(0x0, _si1t2, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (t3s12_) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = t3s12_;
    }), ds_t1i(0x0, _si1t2, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ds_t1i(0x0, _si1t2, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (n9pyh) {
      if (!this['videoElement']) return;this['videoElement']['x'] = n9pyh;
    }), ds_t1i(0x0, _si1t2, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (yugph) {
      if (!this['videoElement']) return;this['videoElement']['y'] = yugph;
    }), ds_t1i(0x0, _si1t2, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ds_t1i(0x0, _si1t2, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function ($k5c6j) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $k5c6j;
    }), ds_t1i(0x0, _si1t2, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (ypuhg) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = ypuhg;
    }), ds_t1i(0x0, _si1t2, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (f8w7rv) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = f8w7rv;
    }), z032st;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var kj65d$ in Laya) {
    var rwv8 = Laya[kj65d$];rwv8 && rwv8['__isclass'] && (exports[kj65d$] = rwv8);
  }
});