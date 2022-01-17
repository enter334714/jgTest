var H = wx.$F;
(function (window, document, kib3a) {
  var nbi3ae = kib3a['un'],
      mjqs$ = kib3a['uns'],
      q7yg$ = kib3a['static'],
      yqsm$ = kib3a['class'],
      u46pt0 = kib3a['getset'],
      dqmjs = kib3a['__newvec'],
      in3ae = laya['utils']['Browser'],
      bk_via = laya['events']['Event'],
      p0t = laya['events']['EventDispatcher'],
      e3a = laya['resource']['HTMLImage'],
      sdv_5 = laya['utils']['Handler'],
      nia3 = laya['display']['Input'],
      p4lt = laya['net']['Loader'],
      zc2o1h = laya['maths']['Matrix'],
      w0l4x = laya['renders']['Render'],
      qjsm$d = laya['utils']['RunDriver'],
      jvsd_5 = laya['media']['Sound'],
      g$m7y = laya['media']['SoundChannel'],
      binew = laya['media']['SoundManager'],
      wenl3 = laya['display']['Stage'],
      ik3ban = laya['net']['URL'],
      sjqd$m = laya['utils']['Utils'],
      akbi3_ = function () {
    function c8zo1() {}return yqsm$(c8zo1, 'laya.wx.mini.MiniAdpter'), c8zo1['getJson'] = function (q$my) {
      return JSON['parse'](q$my);
    }, c8zo1['init'] = function (b3ai, sdqy) {
      b3ai === void 0x0 && (b3ai = ![]), sdqy === void 0x0 && (sdqy = ![]);if (c8zo1['_inited']) return;c8zo1['window'] = window;if (c8zo1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;c8zo1['_inited'] = !![], c8zo1['isZiYu'] = sdqy, c8zo1['isPosMsgYu'] = b3ai, c8zo1['EnvConfig'] = {}, !c8zo1['isZiYu'] && (oz9['setNativeFileDir']('/layaairGame'), oz9['existDir'](oz9['fileNativeDir'], sdv_5['create'](c8zo1, c8zo1['onMkdirCallBack']))), c8zo1['window']['focus'] = function () {}, kib3a['getUrlPath'] = function () {}, c8zo1['window']['logtime'] = function (_aivk) {}, c8zo1['window']['alertTimeLog'] = function (b3iak_) {}, c8zo1['window']['resetShareInfo'] = function () {}, c8zo1['window']['CanvasRenderingContext2D'] = function () {}, c8zo1['window']['CanvasRenderingContext2D']['prototype'] = c8zo1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], c8zo1['window']['document']['body']['appendChild'] = function () {}, c8zo1['EnvConfig']['pixelRatioInt'] = 0x0, qjsm$d['getPixelRatio'] = c8zo1['pixelRatio'], c8zo1['_preCreateElement'] = in3ae['createElement'], in3ae['createElement'] = c8zo1['createElement'], qjsm$d['createShaderCondition'] = c8zo1['createShaderCondition'], sjqd$m['parseXMLFromString'] = c8zo1['parseXMLFromString'], nia3['_createInputElement'] = zco1h['_createInputElement'], c8zo1['EnvConfig']['load'] = p4lt['prototype']['load'], p4lt['prototype']['load'] = z98or['prototype']['load'], c8zo1['isZiYu'] && b3ai && wx['onMessage'](function (g$dqy) {
        g$dqy['isLoad'] && (oz9['ziyuFileData'][g$dqy['url']] = g$dqy['data']);
      });
    }, c8zo1['onMkdirCallBack'] = function (ewnbi3, o981z) {
      if (!ewnbi3) oz9['filesListObj'] = JSON['parse'](o981z['data']);
    }, c8zo1['pixelRatio'] = function () {
      if (!c8zo1['EnvConfig']['pixelRatioInt']) try {
        var ygqd$m = wx['getSystemInfoSync']();return c8zo1['EnvConfig']['pixelRatioInt'] = ygqd$m['pixelRatio'], ygqd$m = ygqd$m, ygqd$m['pixelRatio'];
      } catch (xuewl0) {}return c8zo1['EnvConfig']['pixelRatioInt'];
    }, c8zo1['createElement'] = function (utp64r) {
      if (utp64r == 'canvas') {
        var jv$5d;return c8zo1['idx'] == 0x1 ? c8zo1['isZiYu'] ? (jv$5d = sharedCanvas, jv$5d['style'] = {}) : jv$5d = window['canvas'] : jv$5d = window['wx']['createCanvas'](), c8zo1['idx']++, jv$5d;
      } else {
        if (utp64r == 'textarea' || utp64r == 'input') return c8zo1['onCreateInput'](utp64r);else {
          if (utp64r == 'div') {
            var t964pr = c8zo1['_preCreateElement'](utp64r);return t964pr['contains'] = function (eiw3nb) {
              return null;
            }, t964pr['removeChild'] = function ($qmd) {}, t964pr;
          } else return c8zo1['_preCreateElement'](utp64r);
        }
      }
    }, c8zo1['onCreateInput'] = function (o819cz) {
      var n3ie = c8zo1['_preCreateElement'](o819cz);return n3ie['focus'] = zco1h['wxinputFocus'], n3ie['blur'] = zco1h['wxinputblur'], n3ie['style'] = {}, n3ie['value'] = 0x0, n3ie['parentElement'] = {}, n3ie['placeholder'] = {}, n3ie['type'] = {}, n3ie['setColor'] = function (j$msdq) {}, n3ie['setType'] = function (ikva_b) {}, n3ie['setFontFace'] = function (ie3x) {}, n3ie['addEventListener'] = function (g$myq7) {}, n3ie['contains'] = function (ut46rp) {
        return null;
      }, n3ie['removeChild'] = function (qdjm$) {}, n3ie;
    }, c8zo1['createShaderCondition'] = function (_svj) {
      var m$5jd = this,
          xulp4 = function () {
        var lp0xu4 = _svj;return m$5jd[_svj['replace']('this.', '')];
      };return xulp4;
    }, c8zo1['EnvConfig'] = null, c8zo1['window'] = null, c8zo1['_preCreateElement'] = null, c8zo1['_inited'] = ![], c8zo1['wxRequest'] = null, c8zo1['systemInfo'] = null, c8zo1['version'] = '0.0.1', c8zo1['isZiYu'] = ![], c8zo1['isPosMsgYu'] = ![], c8zo1['parseXMLFromString'] = function (qymdg$) {
      var _k5, nb3ae;qymdg$ = qymdg$['replace'](/>\s+</g, '><');try {
        _k5 = new window['Parser']['DOMParser']()['parseFromString'](qymdg$, 'text/xml');
      } catch (gy7) {
        throw '需要引入xml解析库文件';
      }return _k5;
    }, c8zo1['idx'] = 0x1, c8zo1;
  }(),
      hco8z1 = function () {
    function oh18() {}yqsm$(oh18, 'laya.wx.mini.MiniImage');var och12 = oh18['prototype'];return och12['_loadImage'] = function (m$ygq7) {
      var ch1oz2 = this,
          qyms = ![];m$ygq7['indexOf']('layaNativeDir/') == -0x1 && (qyms = !![], m$ygq7 = ik3ban['formatURL'](m$ygq7));if (!oz9['getFileInfo'](m$ygq7)) {
        if (m$ygq7['indexOf']('http://') != -0x1 || m$ygq7['indexOf']('https://') != -0x1) oz9['downImg'](m$ygq7, new sdv_5(oh18, oh18['onDownImgCallBack'], [m$ygq7, ch1oz2]), m$ygq7);else oh18['onCreateImage'](m$ygq7, ch1oz2, !![]);
      } else oh18['onCreateImage'](m$ygq7, ch1oz2, !qyms);
    }, oh18['onDownImgCallBack'] = function (wne3b, ex0ulw, rt689) {
      if (!rt689) oh18['onCreateImage'](wne3b, ex0ulw);else ex0ulw['onError'](null);
    }, oh18['onCreateImage'] = function (pt406u, r1o8z9, ymqd$g) {
      ymqd$g === void 0x0 && (ymqd$g = ![]);var bk3ai;if (!ymqd$g) {
        var bv5ak_ = oz9['getFileInfo'](pt406u),
            j5v_sd = bv5ak_['md5'];bk3ai = oz9['getFileNativePath'](j5v_sd);
      } else bk3ai = pt406u;if (r1o8z9['imgCache'] == null) r1o8z9['imgCache'] = {};var $dgm;function avb_k() {
        $dgm['onload'] = null, $dgm['onerror'] = null, delete r1o8z9['imgCache'][pt406u];
      };var pru = function () {
        avb_k(), r1o8z9['onLoaded']($dgm);
      },
          wiexn3 = function () {
        avb_k(), r1o8z9['event']('error', 'Load image failed');
      };r1o8z9['_type'] == 'nativeimage' ? ($dgm = new in3ae['window']['Image'](), $dgm['crossOrigin'] = '', $dgm['onload'] = pru, $dgm['onerror'] = wiexn3, $dgm['src'] = bk3ai, r1o8z9['imgCache'][pt406u] = $dgm) : new e3a['create'](bk3ai, { 'onload': pru, 'onerror': wiexn3, 'onCreate': function (dgym$q) {
          $dgm = dgym$q, r1o8z9['imgCache'][pt406u] = dgym$q;
        } });
    }, oh18;
  }(),
      zco1h = function () {
    function vj5$sd() {}return yqsm$(vj5$sd, 'laya.wx.mini.MiniInput'), vj5$sd['_createInputElement'] = function () {
      nia3['_initInput'](nia3['area'] = in3ae['createElement']('textarea')), nia3['_initInput'](nia3['input'] = in3ae['createElement']('input')), nia3['inputContainer'] = in3ae['createElement']('div'), nia3['inputContainer']['style']['position'] = 'absolute', nia3['inputContainer']['style']['zIndex'] = 0x186a0, in3ae['container']['appendChild'](nia3['inputContainer']), nia3['inputContainer']['setPos'] = function (rtp6, t8r916) {
        nia3['inputContainer']['style']['left'] = rtp6 + 'px', nia3['inputContainer']['style']['top'] = t8r916 + 'px';
      }, kib3a['stage']['on']('resize', null, vj5$sd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xeiwn3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), binew['_soundClass'] = binka, binew['_musicClass'] = binka;
    }, vj5$sd['_onStageResize'] = function () {
      var ik3an = kib3a['stage']['_canvasTransform']['identity']();ik3an['scale'](in3ae['width'] / w0l4x['canvas']['width'] / qjsm$d['getPixelRatio'](), in3ae['height'] / w0l4x['canvas']['height'] / qjsm$d['getPixelRatio']());
    }, vj5$sd['wxinputFocus'] = function (nwe0l) {
      var enwi = nia3['inputElement']['target'];if (enwi && !enwi['editable']) return;akbi3_['window']['wx']['offKeyboardConfirm'](), akbi3_['window']['wx']['offKeyboardInput'](), akbi3_['window']['wx']['showKeyboard']({ 'defaultValue': enwi['text'], 'maxLength': enwi['maxChars'], 'multiple': enwi['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (h8z1o) {}, 'fail': function (rt89p6) {} }), akbi3_['window']['wx']['onKeyboardConfirm'](function (xwl0e) {
        var mj$sqd = xwl0e ? xwl0e['value'] : '';enwi['text'] = mj$sqd, enwi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), akbi3_['window']['wx']['onKeyboardInput'](function (rtu6p) {
        var w4l0x = rtu6p ? rtu6p['value'] : '';if (!enwi['multiline']) {
          if (w4l0x['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }enwi['text'] = w4l0x, enwi['event']('input');
      });
    }, vj5$sd['inputEnter'] = function () {
      nia3['inputElement']['target']['focus'] = ![];
    }, vj5$sd['wxinputblur'] = function () {
      vj5$sd['hideKeyboard']();
    }, vj5$sd['hideKeyboard'] = function () {
      akbi3_['window']['wx']['offKeyboardConfirm'](), akbi3_['window']['wx']['offKeyboardInput'](), akbi3_['window']['wx']['hideKeyboard']({ 'success': function (j_5va) {
          console['log']('隐藏键盘');
        }, 'fail': function (z89o) {
          console['log']('隐藏键盘出错:' + (z89o ? z89o['errMsg'] : ''));
        } });
    }, vj5$sd;
  }(),
      z98or = function () {
    function bka3_() {}yqsm$(bka3_, 'laya.wx.mini.MiniLoader');var abv5k_ = bka3_['prototype'];return abv5k_['load'] = function (b_aikv, ibk_3, d$myq, r9t18, nwi3ex) {
      d$myq === void 0x0 && (d$myq = !![]), nwi3ex === void 0x0 && (nwi3ex = ![]);var elnxw = this;elnxw['_url'] = b_aikv;if (b_aikv['indexOf']('data:image') === 0x0) elnxw['_type'] = ibk_3 = 'image';else elnxw['_type'] = ibk_3 || (ibk_3 = elnxw['getTypeFromUrl'](b_aikv));elnxw['_cache'] = d$myq, elnxw['_data'] = null;var av5bk = 'ascii';if (b_aikv['indexOf']('.fnt') != -0x1) av5bk = 'utf8';else ibk_3 == 'arraybuffer' && (av5bk = '');;var wlxn3 = sjqd$m['getFileExtension'](b_aikv);if (bka3_['_fileTypeArr']['indexOf'](wlxn3) != -0x1) akbi3_['EnvConfig']['load']['call'](this, b_aikv, ibk_3, d$myq, r9t18, nwi3ex);else {
        if (!oz9['getFileInfo'](b_aikv)) {
          if (b_aikv['indexOf']('layaNativeDir/') != -0x1) {
            if (akbi3_['isZiYu']) {
              var _jsvd5 = oz9['ziyuFileData'][b_aikv];elnxw['onLoaded'](_jsvd5);return;
            } else {
              cosnole['log']('read read'), oz9['read'](b_aikv, av5bk, new sdv_5(bka3_, bka3_['onReadNativeCallBack'], [av5bk, b_aikv, ibk_3, d$myq, r9t18, nwi3ex, elnxw]));return;
            }
          }if (ik3ban['rootPath'] == '') var mqy$ = b_aikv;else mqy$ = b_aikv['split'](ik3ban['rootPath'])[0x0];b_aikv['indexOf']('http://') != -0x1 || b_aikv['indexOf']('https://') != -0x1 ? akbi3_['EnvConfig']['load']['call'](elnxw, b_aikv, ibk_3, d$myq, r9t18, nwi3ex) : oz9['readFile'](mqy$, av5bk, new sdv_5(bka3_, bka3_['onReadNativeCallBack'], [av5bk, b_aikv, ibk_3, d$myq, r9t18, nwi3ex, elnxw]), b_aikv);
        } else akbi3_['EnvConfig']['load']['call'](this, b_aikv, ibk_3, d$myq, r9t18, nwi3ex);
      }
    }, abv5k_['resMgrLoad'] = function (s5$v, ptu04, k5js_v, jd$sq, pt8r9, ibv_ka, vka_5) {
      k5js_v === void 0x0 && (k5js_v = 0x0), jd$sq === void 0x0 && (jd$sq = ![]), pt8r9 === void 0x0 && (pt8r9 = ![]), ibv_ka === void 0x0 && (ibv_ka = 0x0), vka_5 === void 0x0 && (vka_5 = 0x3), s5$v['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s5$v), akbi3_['EnvConfig']['resMgrLoad'](s5$v, (ygmq, ho1c8, ltpu4) => {
        bka3_['prototype']['resMgrLoadCallBack'](ygmq, ho1c8, ltpu4, ptu04);
      }, k5js_v, jd$sq, pt8r9, ibv_ka, vka_5);
    }, abv5k_['resMgrLoadCallBack'] = function (wl0xen, x4lwu, kainb, a3_bki) {
      console['log']('buff:::', wl0xen, kainb, oz9['fileNativeDir'] + '///' + oz9['fileListName']), a3_bki(wl0xen, x4lwu, kainb);
    }, abv5k_['clearRes'] = function (dq$jsm, g$mdqy) {
      g$mdqy === void 0x0 && (g$mdqy = ![]);var t69 = this;t69['clearRes'](dq$jsm, g$mdqy);var r8p6t = oz9['getFileInfo'](dq$jsm);if (r8p6t && (dq$jsm['indexOf']('http://') != -0x1 || dq$jsm['indexOf']('https://') != -0x1)) {
        var t4p0u6 = r8p6t['md5'],
            j5dsv = oz9['getFileNativePath'](t4p0u6);oz9['remove'](j5dsv);
      }
    }, bka3_['onReadNativeCallBack'] = function (kb3a_, s$5mjd, zch8o, z8co1h, e3bw, _sk5vj, ba_k5, wnxle, bv_iak) {
      z8co1h === void 0x0 && (z8co1h = !![]), _sk5vj === void 0x0 && (_sk5vj = ![]), wnxle === void 0x0 && (wnxle = 0x0);if (!wnxle) {
        var qsydm$;if (zch8o == 'json' || zch8o == 'atlas') qsydm$ = akbi3_['getJson'](bv_iak['data']);else zch8o == 'xml' ? qsydm$ = sjqd$m['parseXMLFromString'](bv_iak['data']) : qsydm$ = bv_iak['data'];ba_k5['onLoaded'](qsydm$), !akbi3_['isZiYu'] && akbi3_['isPosMsgYu'] && zch8o != 'arraybuffer' && wx['postMessage']({ 'url': s$5mjd, 'data': qsydm$, 'isLoad': !![] });
      } else wnxle == 0x1 && akbi3_['EnvConfig']['load']['call'](ba_k5, s$5mjd, zch8o, z8co1h, e3bw, _sk5vj);
    }, q7yg$(bka3_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bka3_;
  }(),
      oz9 = function (hz2co1) {
    function viak() {
      viak['__super']['call'](this);;
    }return yqsm$(viak, 'laya.wx.mini.MiniFileMgr', hz2co1), viak['isLoadFile'] = function (va5_bk) {
      return viak['_fileTypeArr']['indexOf'](va5_bk) != -0x1 ? !![] : ![];
    }, viak['getFileInfo'] = function (rz9186) {
      var nlw3xe = rz9186['split']('?')[0x0],
          ia_vbk = viak['filesListObj'][nlw3xe];if (ia_vbk == null) return null;else return ia_vbk;return null;
    }, viak['onFileUpdate'] = function (xwn0el, ajvk_) {
      var jqmsd = xwn0el['split']('/'),
          na3ik = jqmsd[jqmsd['length'] - 0x1],
          p0lu4 = viak['getFileInfo'](ajvk_);if (p0lu4 == null) viak['onSaveFile'](ajvk_, na3ik);else {
        if (p0lu4['readyUrl'] != ajvk_) viak['remove'](na3ik, ajvk_);
      }
    }, viak['exits'] = function (t6r8p, xnwie) {
      var ea3n = viak['getFileNativePath'](t6r8p);viak['fs']['getFileInfo']({ 'filePath': ea3n, 'success': function (r9o1z8) {
          xnwie != null && xnwie['runWith']([0x0, r9o1z8]);
        }, 'fail': function (w4lu) {
          xnwie != null && xnwie['runWith']([0x1, w4lu]);
        } });
    }, viak['read'] = function (ka5bv, _ia, v_5ksj, weln3x) {
      _ia === void 0x0 && (_ia = 'ascill'), weln3x === void 0x0 && (weln3x = '');var qsmy$d;weln3x != '' ? qsmy$d = viak['getFileNativePath'](ka5bv) : qsmy$d = ka5bv, viak['fs']['readFile']({ 'filePath': qsmy$d, 'encoding': _ia, 'success': function (mj$ds) {
          v_5ksj != null && v_5ksj['runWith']([0x0, mj$ds]);
        }, 'fail': function (y$qmd) {
          if (y$qmd && weln3x != '') viak['down'](weln3x, _ia, v_5ksj, weln3x);else v_5ksj != null && v_5ksj['runWith']([0x1]);
        } });
    }, viak['readNativeFile'] = function (bniea, vdjs$5) {
      viak['fs']['readFile']({ 'filePath': bniea, 'encoding': '', 'success': function (na3ikb) {
          vdjs$5 != null && vdjs$5['runWith']([0x0]);
        }, 'fail': function (u640tp) {
          vdjs$5 != null && vdjs$5['runWith']([0x1]);
        } });
    }, viak['down'] = function (_a5bkv, luxe0, ibn3k, tp46) {
      luxe0 === void 0x0 && (luxe0 = 'ascill'), tp46 === void 0x0 && (tp46 = '');var c9oz = viak['getFileNativePath'](tp46),
          o8hc1z = viak['wxdown']({ 'url': _a5bkv, 'filePath': c9oz, 'success': function (msqy) {
          if (msqy['statusCode'] === 0xc8) viak['readFile'](msqy['filePath'], luxe0, ibn3k, tp46);
        }, 'fail': function (sj5$md) {
          ibn3k != null && ibn3k['runWith']([0x1, sj5$md]);
        } });o8hc1z['onProgressUpdate'](function (pt4ru) {
        ibn3k != null && ibn3k['runWith']([0x2, pt4ru['progress']]);
      });
    }, viak['readFile'] = function (r18z69, tu046, p0lux, ym7$) {
      tu046 === void 0x0 && (tu046 = 'ascill'), ym7$ === void 0x0 && (ym7$ = ''), viak['fs']['readFile']({ 'filePath': r18z69, 'encoding': tu046, 'success': function (nwbei) {
          if (r18z69['indexOf']('http://') != -0x1 || r18z69['indexOf']('https://') != -0x1) viak['onFileUpdate'](r18z69, ym7$);p0lux != null && p0lux['runWith']([0x0, nwbei]);
        }, 'fail': function (vjs$d5) {
          if (vjs$d5) p0lux != null && p0lux['runWith']([0x1, vjs$d5]);
        } });
    }, viak['downImg'] = function (t98r6, jv5sk_, xulp04) {
      xulp04 === void 0x0 && (xulp04 = '');var m7qg$y = viak['wxdown']({ 'url': t98r6, 'success': function (r4t69p) {
          r4t69p['statusCode'] === 0xc8 && viak['copyFile'](r4t69p['tempFilePath'], xulp04, jv5sk_);
        }, 'fail': function (y$qg) {
          jv5sk_ != null && jv5sk_['runWith']([0x1, y$qg]);
        } });
    }, viak['copyFile'] = function (bai_k, iak_b, kavi) {
      var n3ib = bai_k['split']('/'),
          u40tpl = n3ib[n3ib['length'] - 0x1],
          qsy$dm = iak_b['split']('?')[0x0],
          niba3 = viak['getFileInfo'](iak_b),
          p9r6 = viak['getFileNativePath'](u40tpl);viak['fs']['copyFile']({ 'srcPath': bai_k, 'destPath': p9r6, 'success': function (vajk_) {
          if (!niba3) viak['onSaveFile'](iak_b, u40tpl), kavi != null && kavi['runWith']([0x0]);else {
            if (niba3['readyUrl'] != iak_b) viak['remove'](u40tpl, iak_b, kavi);
          }
        }, 'fail': function (dy$mgq) {
          kavi != null && kavi['runWith']([0x1, dy$mgq]);
        } });
    }, viak['getFileNativePath'] = function (nl) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nl;
    }, viak['remove'] = function (_5djv, bak_i3, ym$dgq) {
      bak_i3 === void 0x0 && (bak_i3 = '');var ja_kv5 = viak['getFileInfo'](bak_i3),
          v5_ka = viak['getFileNativePath'](ja_kv5['md5']);kib3a['loader']['clearRes'](ja_kv5['readyUrl']), viak['fs']['unlink']({ 'filePath': v5_ka, 'success': function (tr8196) {
          if (bak_i3 != '') viak['onSaveFile'](bak_i3, _5djv);ym$dgq != null && ym$dgq['runWith']([0x0]);
        }, 'fail': function (kna3bi) {} });
    }, viak['onSaveFile'] = function (e3binw, d$ygmq) {
      var qdy$mg = e3binw['split']('?')[0x0];viak['filesListObj'][qdy$mg] = { 'md5': d$ygmq, 'readyUrl': e3binw }, viak['fs']['writeFile']({ 'filePath': viak['fileNativeDir'] + '/' + viak['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](viak['filesListObj']), 'success': function (v5sj_d) {
          console['log']('写入测试测试成功：', v5sj_d);
        }, 'fail': function (abni3k) {
          console['log']('写入测试测试失败：', abni3k);
        } });
    }, viak['existDir'] = function (gdmq$y, js5d_) {
      viak['fs']['mkdir']({ 'dirPath': gdmq$y, 'success': function (q$gd) {
          js5d_ != null && js5d_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ewbi3) {
          if (ewbi3['errMsg']['indexOf']('file already exists') != -0x1) viak['readSync'](viak['fileListName'], 'utf8', js5d_);else js5d_ != null && js5d_['runWith']([0x1, ewbi3]);
        } });
    }, viak['readSync'] = function (n3xew, d_5j, sj_vd, pt4u6r) {
      d_5j === void 0x0 && (d_5j = 'ascill'), pt4u6r === void 0x0 && (pt4u6r = '');var avb_ = viak['getFileNativePath'](n3xew),
          o9z18r;try {
        o9z18r = viak['fs']['readFileSync'](avb_), sj_vd != null && sj_vd['runWith']([0x0, { 'data': o9z18r }]);
      } catch (ikbva_) {
        sj_vd != null && sj_vd['runWith']([0x1]);
      }
    }, viak['readCache'] = function () {}, viak['writeCache'] = function (xlew0u) {
      var vsj5$d = readyUrl['split']('?')[0x0];viak['filesListObj'][vsj5$d] = { 'md5': md5Name, 'readyUrl': readyUrl }, viak['fs']['writeFile']({ 'filePath': viak['fileNativeDir'] + '/' + viak['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](viak['filesListObj']), 'success': function (u40xwl) {}, 'fail': function (nikab3) {} });
    }, viak['setNativeFileDir'] = function (ei3ba) {
      viak['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ei3ba;
    }, viak['filesListObj'] = {}, viak['fileNativeDir'] = null, viak['fileListName'] = 'layaairfiles.txt', viak['ziyuFileData'] = {}, q7yg$(viak, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), viak;
  }(p0t),
      binka = function (p49r) {
    function o91c() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], o91c['__super']['call'](this), this['_sound'] = o91c['_createSound']();
    }yqsm$(o91c, 'laya.wx.mini.MiniSound', p49r);var h18zc = o91c['prototype'];return h18zc['load'] = function (sqymd$) {
      var xnl0ew = this;sqymd$ = ik3ban['formatURL'](sqymd$), this['url'] = sqymd$;if (o91c['_audioCache'][sqymd$]) {
        this['event']('complete');return;
      }function qgdym$() {
        if (o91c['_null'] != undefined) xnl0ew['_sound']['onCanplay'](o91c['_null']), xnl0ew['_sound']['onError'](o91c['_null']);else try {
          xnl0ew['_sound']['onCanplay'](null), xnl0ew['_sound']['onError'](null), o91c['_null'] = null;
        } catch (zo189) {
          console['warn']('[wxmini] _clearSound:' + zo189), xnl0ew['_sound']['onCanplay'](pt04u6), xnl0ew['_sound']['onError'](pt04u6), o91c['_null'] = pt04u6;
        }
      }function z2c1ho() {
        qgdym$(), qydsm$['loaded'] = !![], qydsm$['event']('complete'), o91c['_audioCache'][qydsm$['url']] = qydsm$;
      }function x0w4ul(cz9o18) {
        console['error']('errCode=' + cz9o18['errCode'] + '  errMsg=' + cz9o18['errMsg']), qgdym$(), qydsm$['event']('error');
      }function pt04u6() {}this['_sound']['onCanplay'](z2c1ho), this['_sound']['onError'](x0w4ul), this['_sound']['src'] = sqymd$;var qydsm$ = this;
    }, h18zc['play'] = function (zc91o, k_3) {
      zc91o === void 0x0 && (zc91o = 0x0), k_3 === void 0x0 && (k_3 = 0x0);var qym$g7;if (this['url'] == binew['_tMusic']) {
        if (!o91c['_musicAudio']) o91c['_musicAudio'] = o91c['_createSound']();qym$g7 = o91c['_musicAudio'];
      } else qym$g7 = o91c['_createSound']();qym$g7['src'] = this['url'];var ut046p = new jsdm$(qym$g7);return ut046p['url'] = this['url'], ut046p['loops'] = k_3, ut046p['startTime'] = zc91o, ut046p['play'](), binew['addChannel'](ut046p), ut046p;
    }, h18zc['dispose'] = function () {
      var lx3w = o91c['_audioCache'][this['url']];lx3w && (lx3w['src'] = '', delete o91c['_audioCache'][this['url']]);
    }, u46pt0(0x0, h18zc, 'duration', function () {
      return this['_sound']['duration'];
    }), o91c['_createSound'] = function () {
      return o91c['_id']++, akbi3_['window']['wx']['createInnerAudioContext']();
    }, o91c['_musicAudio'] = null, o91c['_id'] = 0x0, o91c['_audioCache'] = {}, o91c['_null'] = undefined, o91c;
  }(p0t),
      jsdm$ = function (js5md) {
    function a_vbi(p96t8) {
      this['_audio'] = null, this['_onEnd'] = null, a_vbi['__super']['call'](this), this['_audio'] = p96t8, this['_onEnd'] = sjqd$m['bind'](this['__onEnd'], this), p96t8['onEnded'](this['_onEnd']);
    }yqsm$(a_vbi, 'laya.wx.mini.MiniSoundChannel', js5md);var bva5_k = a_vbi['prototype'];return bva5_k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kib3a['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bva5_k['__onNull'] = function () {}, bva5_k['play'] = function () {
      this['isStopped'] = ![], binew['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bva5_k['stop'] = function () {
      this['isStopped'] = !![], binew['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a_vbi['_null'] != undefined) this['_audio']['onEnded'](a_vbi['_null']);else try {
        this['_audio']['onEnded'](null), a_vbi['_null'] = null;
      } catch (biena) {
        console['warn']('[wxmini] stop:' + biena), this['_audio']['onEnded'](sjqd$m['bind'](this['__onNull'], this)), a_vbi['_null'] = sjqd$m['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, bva5_k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bva5_k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], binew['addChannel'](this), this['_audio']['play']();
    }, u46pt0(0x0, bva5_k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), u46pt0(0x0, bva5_k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), u46pt0(0x0, bva5_k, 'volume', function () {
      return 0x1;
    }, function (c1oz2) {}), a_vbi['_null'] = undefined, a_vbi;
  }(g$m7y);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var q$mdyg in Laya) {
    var ue0xwl = Laya[q$mdyg];ue0xwl && ue0xwl['__isclass'] && (exports[q$mdyg] = ue0xwl);
  }
});