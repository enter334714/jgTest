var s = wx.$W;
(function (window, document, z1ke8c) {
  var obd5wu = z1ke8c['un'],
      _y7 = z1ke8c['uns'],
      ou5w = z1ke8c['static'],
      b1zu3w = z1ke8c['class'],
      ni$p0 = z1ke8c['getset'],
      uze38 = z1ke8c['__newvec'],
      _ary7j = laya['utils']['Browser'],
      eckz = laya['events']['Event'],
      yp0n = laya['events']['EventDispatcher'],
      il$0n = laya['resource']['HTMLImage'],
      rc7j = laya['utils']['Handler'],
      nqlst = laya['display']['Input'],
      ckraj = laya['net']['Loader'],
      rj_p9 = laya['maths']['Matrix'],
      wu5db = laya['renders']['Render'],
      r_a7y = laya['utils']['RunDriver'],
      cja7 = laya['media']['Sound'],
      v6ho4d = laya['media']['SoundChannel'],
      kajr = laya['media']['SoundManager'],
      t$0i = laya['display']['Stage'],
      t$f2qs = laya['net']['URL'],
      tfqs = laya['utils']['Utils'],
      ezk8c1 = function () {
    function pyi_() {}return b1zu3w(pyi_, 'laya.wx.mini.MiniAdpter'), pyi_['getJson'] = function (udw5o) {
      return JSON['parse'](udw5o);
    }, pyi_['init'] = function (lti$n, k7_raj) {
      lti$n === void 0x0 && (lti$n = ![]), k7_raj === void 0x0 && (k7_raj = ![]);if (pyi_['_inited']) return;pyi_['window'] = window;if (pyi_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pyi_['_inited'] = !![], pyi_['isZiYu'] = k7_raj, pyi_['isPosMsgYu'] = lti$n, pyi_['EnvConfig'] = {}, !pyi_['isZiYu'] && (aj_kr7['setNativeFileDir']('/layaairGame'), aj_kr7['existDir'](aj_kr7['fileNativeDir'], rc7j['create'](pyi_, pyi_['onMkdirCallBack']))), pyi_['window']['focus'] = function () {}, z1ke8c['getUrlPath'] = function () {}, pyi_['window']['logtime'] = function (isntl) {}, pyi_['window']['alertTimeLog'] = function (_yr7a) {}, pyi_['window']['resetShareInfo'] = function () {}, pyi_['window']['CanvasRenderingContext2D'] = function () {}, pyi_['window']['CanvasRenderingContext2D']['prototype'] = pyi_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pyi_['window']['document']['body']['appendChild'] = function () {}, pyi_['EnvConfig']['pixelRatioInt'] = 0x0, r_a7y['getPixelRatio'] = pyi_['pixelRatio'], pyi_['_preCreateElement'] = _ary7j['createElement'], _ary7j['createElement'] = pyi_['createElement'], r_a7y['createShaderCondition'] = pyi_['createShaderCondition'], tfqs['parseXMLFromString'] = pyi_['parseXMLFromString'], nqlst['_createInputElement'] = t0i['_createInputElement'], pyi_['EnvConfig']['load'] = ckraj['prototype']['load'], ckraj['prototype']['load'] = itl0n$['prototype']['load'], pyi_['isZiYu'] && lti$n && wx['onMessage'](function (l0pi$) {
        l0pi$['isLoad'] && (aj_kr7['ziyuFileData'][l0pi$['url']] = l0pi$['data']);
      });
    }, pyi_['onMkdirCallBack'] = function (i0l9np, nits) {
      if (!i0l9np) aj_kr7['filesListObj'] = JSON['parse'](nits['data']);
    }, pyi_['pixelRatio'] = function () {
      if (!pyi_['EnvConfig']['pixelRatioInt']) try {
        var ny09i = wx['getSystemInfoSync']();return pyi_['EnvConfig']['pixelRatioInt'] = ny09i['pixelRatio'], ny09i = ny09i, ny09i['pixelRatio'];
      } catch (h6v4) {}return pyi_['EnvConfig']['pixelRatioInt'];
    }, pyi_['createElement'] = function (py0_i9) {
      if (py0_i9 == 'canvas') {
        var ar7j_;return pyi_['idx'] == 0x1 ? pyi_['isZiYu'] ? (ar7j_ = sharedCanvas, ar7j_['style'] = {}) : ar7j_ = window['canvas'] : ar7j_ = window['wx']['createCanvas'](), pyi_['idx']++, ar7j_;
      } else {
        if (py0_i9 == 'textarea' || py0_i9 == 'input') return pyi_['onCreateInput'](py0_i9);else {
          if (py0_i9 == 'div') {
            var ftq$ls = pyi_['_preCreateElement'](py0_i9);return ftq$ls['contains'] = function (w5d6v) {
              return null;
            }, ftq$ls['removeChild'] = function (sqt$) {}, ftq$ls;
          } else return pyi_['_preCreateElement'](py0_i9);
        }
      }
    }, pyi_['onCreateInput'] = function (jyr79_) {
      var u3w5bo = pyi_['_preCreateElement'](jyr79_);return u3w5bo['focus'] = t0i['wxinputFocus'], u3w5bo['blur'] = t0i['wxinputblur'], u3w5bo['style'] = {}, u3w5bo['value'] = 0x0, u3w5bo['parentElement'] = {}, u3w5bo['placeholder'] = {}, u3w5bo['type'] = {}, u3w5bo['setColor'] = function (p_jry) {}, u3w5bo['setType'] = function (hv6m4x) {}, u3w5bo['setFontFace'] = function (hx4dv) {}, u3w5bo['addEventListener'] = function (duwb5o) {}, u3w5bo['contains'] = function (bwu3z) {
        return null;
      }, u3w5bo['removeChild'] = function (l0$ni) {}, u3w5bo;
    }, pyi_['createShaderCondition'] = function (od5wu) {
      var lqts$n = this,
          vo4h = function () {
        var u5bwd = od5wu;return lqts$n[od5wu['replace']('this.', '')];
      };return vo4h;
    }, pyi_['EnvConfig'] = null, pyi_['window'] = null, pyi_['_preCreateElement'] = null, pyi_['_inited'] = ![], pyi_['wxRequest'] = null, pyi_['systemInfo'] = null, pyi_['version'] = '0.0.1', pyi_['isZiYu'] = ![], pyi_['isPosMsgYu'] = ![], pyi_['parseXMLFromString'] = function (yipn09) {
      var jy9_r, qslft;yipn09 = yipn09['replace'](/>\s+</g, '><');try {
        jy9_r = new window['Parser']['DOMParser']()['parseFromString'](yipn09, 'text/xml');
      } catch (v6hxd) {
        throw '需要引入xml解析库文件';
      }return jy9_r;
    }, pyi_['idx'] = 0x1, pyi_;
  }(),
      o56wvd = function () {
    function ilt0n$() {}b1zu3w(ilt0n$, 'laya.wx.mini.MiniImage');var wu1b3z = ilt0n$['prototype'];return wu1b3z['_loadImage'] = function (np9li0) {
      var zwbu1 = this,
          v56dho = ![];np9li0['indexOf']('layaNativeDir/') == -0x1 && (v56dho = !![], np9li0 = t$f2qs['formatURL'](np9li0));if (!aj_kr7['getFileInfo'](np9li0)) {
        if (np9li0['indexOf']('http://') != -0x1 || np9li0['indexOf']('https://') != -0x1) aj_kr7['downImg'](np9li0, new rc7j(ilt0n$, ilt0n$['onDownImgCallBack'], [np9li0, zwbu1]), np9li0);else ilt0n$['onCreateImage'](np9li0, zwbu1, !![]);
      } else ilt0n$['onCreateImage'](np9li0, zwbu1, !v56dho);
    }, ilt0n$['onDownImgCallBack'] = function (b1uez, int0l$, nl0$) {
      if (!nl0$) ilt0n$['onCreateImage'](b1uez, int0l$);else int0l$['onError'](null);
    }, ilt0n$['onCreateImage'] = function ($qntls, bdo56w, o64v) {
      o64v === void 0x0 && (o64v = ![]);var p09nli;if (!o64v) {
        var jc8 = aj_kr7['getFileInfo']($qntls),
            d6v4 = jc8['md5'];p09nli = aj_kr7['getFileNativePath'](d6v4);
      } else p09nli = $qntls;if (bdo56w['imgCache'] == null) bdo56w['imgCache'] = {};var eak18;function w6dvo5() {
        eak18['onload'] = null, eak18['onerror'] = null, delete bdo56w['imgCache'][$qntls];
      };var _0p9y = function () {
        w6dvo5(), bdo56w['onLoaded'](eak18);
      },
          x4mhv6 = function () {
        w6dvo5(), bdo56w['event']('error', 'Load image failed');
      };bdo56w['_type'] == 'nativeimage' ? (eak18 = new _ary7j['window']['Image'](), eak18['crossOrigin'] = '', eak18['onload'] = _0p9y, eak18['onerror'] = x4mhv6, eak18['src'] = p09nli, bdo56w['imgCache'][$qntls] = eak18) : new il$0n['create'](p09nli, { 'onload': _0p9y, 'onerror': x4mhv6, 'onCreate': function (b3z1ue) {
          eak18 = b3z1ue, bdo56w['imgCache'][$qntls] = b3z1ue;
        } });
    }, ilt0n$;
  }(),
      t0i = function () {
    function w3u1bz() {}return b1zu3w(w3u1bz, 'laya.wx.mini.MiniInput'), w3u1bz['_createInputElement'] = function () {
      nqlst['_initInput'](nqlst['area'] = _ary7j['createElement']('textarea')), nqlst['_initInput'](nqlst['input'] = _ary7j['createElement']('input')), nqlst['inputContainer'] = _ary7j['createElement']('div'), nqlst['inputContainer']['style']['position'] = 'absolute', nqlst['inputContainer']['style']['zIndex'] = 0x186a0, _ary7j['container']['appendChild'](nqlst['inputContainer']), nqlst['inputContainer']['setPos'] = function (np$l0, $2stfq) {
        nqlst['inputContainer']['style']['left'] = np$l0 + 'px', nqlst['inputContainer']['style']['top'] = $2stfq + 'px';
      }, z1ke8c['stage']['on']('resize', null, w3u1bz['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (e1ka8c) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kajr['_soundClass'] = uobdw, kajr['_musicClass'] = uobdw;
    }, w3u1bz['_onStageResize'] = function () {
      var dx6 = z1ke8c['stage']['_canvasTransform']['identity']();dx6['scale'](_ary7j['width'] / wu5db['canvas']['width'] / r_a7y['getPixelRatio'](), _ary7j['height'] / wu5db['canvas']['height'] / r_a7y['getPixelRatio']());
    }, w3u1bz['wxinputFocus'] = function (kr7ajc) {
      var ezu183 = nqlst['inputElement']['target'];if (ezu183 && !ezu183['editable']) return;ezk8c1['window']['wx']['offKeyboardConfirm'](), ezk8c1['window']['wx']['offKeyboardInput'](), ezk8c1['window']['wx']['showKeyboard']({ 'defaultValue': ezu183['text'], 'maxLength': ezu183['maxChars'], 'multiple': ezu183['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (lni$0) {}, 'fail': function (zb3e1u) {} }), ezk8c1['window']['wx']['onKeyboardConfirm'](function (_i09py) {
        var tfql$s = _i09py ? _i09py['value'] : '';ezu183['text'] = tfql$s, ezu183['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ezk8c1['window']['wx']['onKeyboardInput'](function (npl$) {
        var _7yaj = npl$ ? npl$['value'] : '';if (!ezu183['multiline']) {
          if (_7yaj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ezu183['text'] = _7yaj, ezu183['event']('input');
      });
    }, w3u1bz['inputEnter'] = function () {
      nqlst['inputElement']['target']['focus'] = ![];
    }, w3u1bz['wxinputblur'] = function () {
      w3u1bz['hideKeyboard']();
    }, w3u1bz['hideKeyboard'] = function () {
      ezk8c1['window']['wx']['offKeyboardConfirm'](), ezk8c1['window']['wx']['offKeyboardInput'](), ezk8c1['window']['wx']['hideKeyboard']({ 'success': function (v56dh) {
          console['log']('隐藏键盘');
        }, 'fail': function (ack78j) {
          console['log']('隐藏键盘出错:' + (ack78j ? ack78j['errMsg'] : ''));
        } });
    }, w3u1bz;
  }(),
      itl0n$ = function () {
    function _j7ark() {}b1zu3w(_j7ark, 'laya.wx.mini.MiniLoader');var yprj_9 = _j7ark['prototype'];return yprj_9['load'] = function (q2fst, buz, v6hm, a8ke1, mx64vh) {
      v6hm === void 0x0 && (v6hm = !![]), mx64vh === void 0x0 && (mx64vh = ![]);var w35b = this;w35b['_url'] = q2fst;if (q2fst['indexOf']('data:image') === 0x0) w35b['_type'] = buz = 'image';else w35b['_type'] = buz || (buz = w35b['getTypeFromUrl'](q2fst));w35b['_cache'] = v6hm, w35b['_data'] = null;var rajc7 = 'ascii';if (q2fst['indexOf']('.fnt') != -0x1) rajc7 = 'utf8';else buz == 'arraybuffer' && (rajc7 = '');;var do6v4 = tfqs['getFileExtension'](q2fst);if (_j7ark['_fileTypeArr']['indexOf'](do6v4) != -0x1) ezk8c1['EnvConfig']['load']['call'](this, q2fst, buz, v6hm, a8ke1, mx64vh);else {
        if (!aj_kr7['getFileInfo'](q2fst)) {
          if (q2fst['indexOf']('layaNativeDir/') != -0x1) {
            if (ezk8c1['isZiYu']) {
              var h46vxd = aj_kr7['ziyuFileData'][q2fst];w35b['onLoaded'](h46vxd);return;
            } else {
              cosnole['log']('read read'), aj_kr7['read'](q2fst, rajc7, new rc7j(_j7ark, _j7ark['onReadNativeCallBack'], [rajc7, q2fst, buz, v6hm, a8ke1, mx64vh, w35b]));return;
            }
          }if (t$f2qs['rootPath'] == '') var _r7yj = q2fst;else _r7yj = q2fst['split'](t$f2qs['rootPath'])[0x0];q2fst['indexOf']('http://') != -0x1 || q2fst['indexOf']('https://') != -0x1 ? ezk8c1['EnvConfig']['load']['call'](w35b, q2fst, buz, v6hm, a8ke1, mx64vh) : aj_kr7['readFile'](_r7yj, rajc7, new rc7j(_j7ark, _j7ark['onReadNativeCallBack'], [rajc7, q2fst, buz, v6hm, a8ke1, mx64vh, w35b]), q2fst);
        } else ezk8c1['EnvConfig']['load']['call'](this, q2fst, buz, v6hm, a8ke1, mx64vh);
      }
    }, yprj_9['resMgrLoad'] = function (x64hvd, b3uz5, krj7ac, dovh6, $tfql, n0ip$l, $tq2sf) {
      krj7ac === void 0x0 && (krj7ac = 0x0), dovh6 === void 0x0 && (dovh6 = ![]), $tfql === void 0x0 && ($tfql = ![]), n0ip$l === void 0x0 && (n0ip$l = 0x0), $tq2sf === void 0x0 && ($tq2sf = 0x3), x64hvd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x64hvd), ezk8c1['EnvConfig']['resMgrLoad'](x64hvd, (caj, ilp90n, tsl$q) => {
        _j7ark['prototype']['resMgrLoadCallBack'](caj, ilp90n, tsl$q, b3uz5);
      }, krj7ac, dovh6, $tfql, n0ip$l, $tq2sf);
    }, yprj_9['resMgrLoadCallBack'] = function (sq2tf, jakrc7, wbod56, v64xm) {
      console['log']('buff:::', sq2tf, wbod56, aj_kr7['fileNativeDir'] + '///' + aj_kr7['fileListName']), v64xm(sq2tf, jakrc7, wbod56);
    }, yprj_9['clearRes'] = function (vg4mx, pi0$nl) {
      pi0$nl === void 0x0 && (pi0$nl = ![]);var wuz31b = this;wuz31b['clearRes'](vg4mx, pi0$nl);var uz3 = aj_kr7['getFileInfo'](vg4mx);if (uz3 && (vg4mx['indexOf']('http://') != -0x1 || vg4mx['indexOf']('https://') != -0x1)) {
        var a7k8c = uz3['md5'],
            xmhvg4 = aj_kr7['getFileNativePath'](a7k8c);aj_kr7['remove'](xmhvg4);
      }
    }, _j7ark['onReadNativeCallBack'] = function (vghx4m, d6o4v, n0y9pi, ho6, vod5h6, wubo3, ca7j, p9j_r, i0_yp) {
      ho6 === void 0x0 && (ho6 = !![]), wubo3 === void 0x0 && (wubo3 = ![]), p9j_r === void 0x0 && (p9j_r = 0x0);if (!p9j_r) {
        var _9iy0;if (n0y9pi == 'json' || n0y9pi == 'atlas') _9iy0 = ezk8c1['getJson'](i0_yp['data']);else n0y9pi == 'xml' ? _9iy0 = tfqs['parseXMLFromString'](i0_yp['data']) : _9iy0 = i0_yp['data'];ca7j['onLoaded'](_9iy0), !ezk8c1['isZiYu'] && ezk8c1['isPosMsgYu'] && n0y9pi != 'arraybuffer' && wx['postMessage']({ 'url': d6o4v, 'data': _9iy0, 'isLoad': !![] });
      } else p9j_r == 0x1 && ezk8c1['EnvConfig']['load']['call'](ca7j, d6o4v, n0y9pi, ho6, vod5h6, wubo3);
    }, ou5w(_j7ark, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _j7ark;
  }(),
      aj_kr7 = function (d4vx6h) {
    function ltqf$() {
      ltqf$['__super']['call'](this);;
    }return b1zu3w(ltqf$, 'laya.wx.mini.MiniFileMgr', d4vx6h), ltqf$['isLoadFile'] = function (i$p0) {
      return ltqf$['_fileTypeArr']['indexOf'](i$p0) != -0x1 ? !![] : ![];
    }, ltqf$['getFileInfo'] = function (kc8a7e) {
      var wbo3 = kc8a7e['split']('?')[0x0],
          f$tsq = ltqf$['filesListObj'][wbo3];if (f$tsq == null) return null;else return f$tsq;return null;
    }, ltqf$['onFileUpdate'] = function (e8k1, ipn0y9) {
      var $lsitn = e8k1['split']('/'),
          _j7y = $lsitn[$lsitn['length'] - 0x1],
          k7ca8 = ltqf$['getFileInfo'](ipn0y9);if (k7ca8 == null) ltqf$['onSaveFile'](ipn0y9, _j7y);else {
        if (k7ca8['readyUrl'] != ipn0y9) ltqf$['remove'](_j7y, ipn0y9);
      }
    }, ltqf$['exits'] = function (ov56hd, s$qtln) {
      var sintl$ = ltqf$['getFileNativePath'](ov56hd);ltqf$['fs']['getFileInfo']({ 'filePath': sintl$, 'success': function (vo5h) {
          s$qtln != null && s$qtln['runWith']([0x0, vo5h]);
        }, 'fail': function (_rj97y) {
          s$qtln != null && s$qtln['runWith']([0x1, _rj97y]);
        } });
    }, ltqf$['read'] = function (ts$fl, dv65o, h4vdo6, e13ubz) {
      dv65o === void 0x0 && (dv65o = 'ascill'), e13ubz === void 0x0 && (e13ubz = '');var py0_9r;e13ubz != '' ? py0_9r = ltqf$['getFileNativePath'](ts$fl) : py0_9r = ts$fl, ltqf$['fs']['readFile']({ 'filePath': py0_9r, 'encoding': dv65o, 'success': function (ak18e) {
          h4vdo6 != null && h4vdo6['runWith']([0x0, ak18e]);
        }, 'fail': function (npli) {
          if (npli && e13ubz != '') ltqf$['down'](e13ubz, dv65o, h4vdo6, e13ubz);else h4vdo6 != null && h4vdo6['runWith']([0x1]);
        } });
    }, ltqf$['readNativeFile'] = function (oh6dv, linp90) {
      ltqf$['fs']['readFile']({ 'filePath': oh6dv, 'encoding': '', 'success': function (dowb6) {
          linp90 != null && linp90['runWith']([0x0]);
        }, 'fail': function (v6h4) {
          linp90 != null && linp90['runWith']([0x1]);
        } });
    }, ltqf$['down'] = function (e1z8kc, w5uz3b, lnstq, z3) {
      w5uz3b === void 0x0 && (w5uz3b = 'ascill'), z3 === void 0x0 && (z3 = '');var buz31 = ltqf$['getFileNativePath'](z3),
          uze3b = ltqf$['wxdown']({ 'url': e1z8kc, 'filePath': buz31, 'success': function (tlq$n) {
          if (tlq$n['statusCode'] === 0xc8) ltqf$['readFile'](tlq$n['filePath'], w5uz3b, lnstq, z3);
        }, 'fail': function (ay_j7) {
          lnstq != null && lnstq['runWith']([0x1, ay_j7]);
        } });uze3b['onProgressUpdate'](function (kj7ra) {
        lnstq != null && lnstq['runWith']([0x2, kj7ra['progress']]);
      });
    }, ltqf$['readFile'] = function (owv5d, d5owu, eb1u, p9niy0) {
      d5owu === void 0x0 && (d5owu = 'ascill'), p9niy0 === void 0x0 && (p9niy0 = ''), ltqf$['fs']['readFile']({ 'filePath': owv5d, 'encoding': d5owu, 'success': function (tils$n) {
          if (owv5d['indexOf']('http://') != -0x1 || owv5d['indexOf']('https://') != -0x1) ltqf$['onFileUpdate'](owv5d, p9niy0);eb1u != null && eb1u['runWith']([0x0, tils$n]);
        }, 'fail': function (zk81c) {
          if (zk81c) eb1u != null && eb1u['runWith']([0x1, zk81c]);
        } });
    }, ltqf$['downImg'] = function (xg4hvm, kca78j, uw1z3) {
      uw1z3 === void 0x0 && (uw1z3 = '');var o6wv5 = ltqf$['wxdown']({ 'url': xg4hvm, 'success': function (_ra7yj) {
          _ra7yj['statusCode'] === 0xc8 && ltqf$['copyFile'](_ra7yj['tempFilePath'], uw1z3, kca78j);
        }, 'fail': function (pn09) {
          kca78j != null && kca78j['runWith']([0x1, pn09]);
        } });
    }, ltqf$['copyFile'] = function (tflsq$, odwu, y9_0ip) {
      var a8kjc7 = tflsq$['split']('/'),
          t$l0n = a8kjc7[a8kjc7['length'] - 0x1],
          buzw53 = odwu['split']('?')[0x0],
          gx4vmh = ltqf$['getFileInfo'](odwu),
          pjr_y = ltqf$['getFileNativePath'](t$l0n);ltqf$['fs']['copyFile']({ 'srcPath': tflsq$, 'destPath': pjr_y, 'success': function (uwdo) {
          if (!gx4vmh) ltqf$['onSaveFile'](odwu, t$l0n), y9_0ip != null && y9_0ip['runWith']([0x0]);else {
            if (gx4vmh['readyUrl'] != odwu) ltqf$['remove'](t$l0n, odwu, y9_0ip);
          }
        }, 'fail': function (zu3e8) {
          y9_0ip != null && y9_0ip['runWith']([0x1, zu3e8]);
        } });
    }, ltqf$['getFileNativePath'] = function (dv5h) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dv5h;
    }, ltqf$['remove'] = function (vmh4gx, z3ebu, r_p9) {
      z3ebu === void 0x0 && (z3ebu = '');var gmh4v = ltqf$['getFileInfo'](z3ebu),
          i9yp0n = ltqf$['getFileNativePath'](gmh4v['md5']);z1ke8c['loader']['clearRes'](gmh4v['readyUrl']), ltqf$['fs']['unlink']({ 'filePath': i9yp0n, 'success': function (lnti) {
          if (z3ebu != '') ltqf$['onSaveFile'](z3ebu, vmh4gx);r_p9 != null && r_p9['runWith']([0x0]);
        }, 'fail': function (u3bz1e) {} });
    }, ltqf$['onSaveFile'] = function (r7_jay, uob3w5) {
      var z5w = r7_jay['split']('?')[0x0];ltqf$['filesListObj'][z5w] = { 'md5': uob3w5, 'readyUrl': r7_jay }, ltqf$['fs']['writeFile']({ 'filePath': ltqf$['fileNativeDir'] + '/' + ltqf$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ltqf$['filesListObj']), 'success': function (cke7) {
          console['log']('写入测试测试成功：', cke7);
        }, 'fail': function ($iltsn) {
          console['log']('写入测试测试失败：', $iltsn);
        } });
    }, ltqf$['existDir'] = function (dbowu5, xdh6v4) {
      ltqf$['fs']['mkdir']({ 'dirPath': dbowu5, 'success': function (lti$s) {
          xdh6v4 != null && xdh6v4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c1z3e) {
          if (c1z3e['errMsg']['indexOf']('file already exists') != -0x1) ltqf$['readSync'](ltqf$['fileListName'], 'utf8', xdh6v4);else xdh6v4 != null && xdh6v4['runWith']([0x1, c1z3e]);
        } });
    }, ltqf$['readSync'] = function (uwz53, y97, _kra7, il0p9) {
      y97 === void 0x0 && (y97 = 'ascill'), il0p9 === void 0x0 && (il0p9 = '');var v4hgxm = ltqf$['getFileNativePath'](uwz53),
          $qtl;try {
        $qtl = ltqf$['fs']['readFileSync'](v4hgxm), _kra7 != null && _kra7['runWith']([0x0, { 'data': $qtl }]);
      } catch (hdvx6) {
        _kra7 != null && _kra7['runWith']([0x1]);
      }
    }, ltqf$['readCache'] = function () {}, ltqf$['writeCache'] = function (ec8z1k) {
      var y_90pr = readyUrl['split']('?')[0x0];ltqf$['filesListObj'][y_90pr] = { 'md5': md5Name, 'readyUrl': readyUrl }, ltqf$['fs']['writeFile']({ 'filePath': ltqf$['fileNativeDir'] + '/' + ltqf$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ltqf$['filesListObj']), 'success': function (ip0nl$) {}, 'fail': function (zeu3b1) {} });
    }, ltqf$['setNativeFileDir'] = function (lni9p) {
      ltqf$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lni9p;
    }, ltqf$['filesListObj'] = {}, ltqf$['fileNativeDir'] = null, ltqf$['fileListName'] = 'layaairfiles.txt', ltqf$['ziyuFileData'] = {}, ou5w(ltqf$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ltqf$;
  }(yp0n),
      uobdw = function (x6d4hv) {
    function y0n() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], y0n['__super']['call'](this), this['_sound'] = y0n['_createSound']();
    }b1zu3w(y0n, 'laya.wx.mini.MiniSound', x6d4hv);var p0r_ = y0n['prototype'];return p0r_['load'] = function (b1ez3u) {
      var h6vd4o = this;b1ez3u = t$f2qs['formatURL'](b1ez3u), this['url'] = b1ez3u;if (y0n['_audioCache'][b1ez3u]) {
        this['event']('complete');return;
      }function s2ftq() {
        if (y0n['_null'] != undefined) h6vd4o['_sound']['onCanplay'](y0n['_null']), h6vd4o['_sound']['onError'](y0n['_null']);else try {
          h6vd4o['_sound']['onCanplay'](null), h6vd4o['_sound']['onError'](null), y0n['_null'] = null;
        } catch (ka_) {
          console['warn']('[wxmini] _clearSound:' + ka_), h6vd4o['_sound']['onCanplay']($snqlt), h6vd4o['_sound']['onError']($snqlt), y0n['_null'] = $snqlt;
        }
      }function bw5u() {
        s2ftq(), v6xdh4['loaded'] = !![], v6xdh4['event']('complete'), y0n['_audioCache'][v6xdh4['url']] = v6xdh4;
      }function pn0il9(ts2$qf) {
        console['error']('errCode=' + ts2$qf['errCode'] + '  errMsg=' + ts2$qf['errMsg']), s2ftq(), v6xdh4['event']('error');
      }function $snqlt() {}this['_sound']['onCanplay'](bw5u), this['_sound']['onError'](pn0il9), this['_sound']['src'] = b1ez3u;var v6xdh4 = this;
    }, p0r_['play'] = function (pin09y, m4hvgx) {
      pin09y === void 0x0 && (pin09y = 0x0), m4hvgx === void 0x0 && (m4hvgx = 0x0);var d65ho;if (this['url'] == kajr['_tMusic']) {
        if (!y0n['_musicAudio']) y0n['_musicAudio'] = y0n['_createSound']();d65ho = y0n['_musicAudio'];
      } else d65ho = y0n['_createSound']();d65ho['src'] = this['url'];var hxm = new uwb5od(d65ho);return hxm['url'] = this['url'], hxm['loops'] = m4hvgx, hxm['startTime'] = pin09y, hxm['play'](), kajr['addChannel'](hxm), hxm;
    }, p0r_['dispose'] = function () {
      var p9yr_ = y0n['_audioCache'][this['url']];p9yr_ && (p9yr_['src'] = '', delete y0n['_audioCache'][this['url']]);
    }, ni$p0(0x0, p0r_, 'duration', function () {
      return this['_sound']['duration'];
    }), y0n['_createSound'] = function () {
      return y0n['_id']++, ezk8c1['window']['wx']['createInnerAudioContext']();
    }, y0n['_musicAudio'] = null, y0n['_id'] = 0x0, y0n['_audioCache'] = {}, y0n['_null'] = undefined, y0n;
  }(yp0n),
      uwb5od = function (z3eb1u) {
    function k1cea(p_yi) {
      this['_audio'] = null, this['_onEnd'] = null, k1cea['__super']['call'](this), this['_audio'] = p_yi, this['_onEnd'] = tfqs['bind'](this['__onEnd'], this), p_yi['onEnded'](this['_onEnd']);
    }b1zu3w(k1cea, 'laya.wx.mini.MiniSoundChannel', z3eb1u);var k_a7 = k1cea['prototype'];return k_a7['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (z1ke8c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, k_a7['__onNull'] = function () {}, k_a7['play'] = function () {
      this['isStopped'] = ![], kajr['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, k_a7['stop'] = function () {
      this['isStopped'] = !![], kajr['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (k1cea['_null'] != undefined) this['_audio']['onEnded'](k1cea['_null']);else try {
        this['_audio']['onEnded'](null), k1cea['_null'] = null;
      } catch (lnp09) {
        console['warn']('[wxmini] stop:' + lnp09), this['_audio']['onEnded'](tfqs['bind'](this['__onNull'], this)), k1cea['_null'] = tfqs['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, k_a7['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, k_a7['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kajr['addChannel'](this), this['_audio']['play']();
    }, ni$p0(0x0, k_a7, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ni$p0(0x0, k_a7, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ni$p0(0x0, k_a7, 'volume', function () {
      return 0x1;
    }, function ($ilpn0) {}), k1cea['_null'] = undefined, k1cea;
  }(v6ho4d);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hd4 in Laya) {
    var nli09 = Laya[hd4];nli09 && nli09['__isclass'] && (exports[hd4] = nli09);
  }
});