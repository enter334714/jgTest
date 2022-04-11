var s = wx.$W;
(function (window, document, l0nt) {
  var u53wz = l0nt['un'],
      _7ya = l0nt['uns'],
      bwu53o = l0nt['static'],
      vh6x = l0nt['class'],
      e18c3 = l0nt['getset'],
      n0pl$ = l0nt['__newvec'],
      inyp0 = laya['utils']['Browser'],
      d4h6vx = laya['events']['Event'],
      p9l0i = laya['events']['EventDispatcher'],
      u8ez1 = laya['resource']['HTMLImage'],
      rjck7 = laya['utils']['Handler'],
      u8ez = laya['display']['Input'],
      i09yn = laya['net']['Loader'],
      j_rya = laya['maths']['Matrix'],
      k7ja = laya['renders']['Render'],
      $inlp = laya['utils']['RunDriver'],
      a8k1e = laya['media']['Sound'],
      jkcr7 = laya['media']['SoundChannel'],
      slnq$t = laya['media']['SoundManager'],
      v5oh = laya['display']['Stage'],
      czke = laya['net']['URL'],
      _ypi09 = laya['utils']['Utils'],
      ftq$l = function () {
    function vm4x6() {}return vh6x(vm4x6, 'laya.wx.mini.MiniAdpter'), vm4x6['getJson'] = function (o5bw6) {
      return JSON['parse'](o5bw6);
    }, vm4x6['init'] = function (_yjr97, ae1k8) {
      _yjr97 === void 0x0 && (_yjr97 = ![]), ae1k8 === void 0x0 && (ae1k8 = ![]);if (vm4x6['_inited']) return;vm4x6['window'] = window;if (vm4x6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vm4x6['_inited'] = !![], vm4x6['isZiYu'] = ae1k8, vm4x6['isPosMsgYu'] = _yjr97, vm4x6['EnvConfig'] = {}, !vm4x6['isZiYu'] && (d5ov6w['setNativeFileDir']('/layaairGame'), d5ov6w['existDir'](d5ov6w['fileNativeDir'], rjck7['create'](vm4x6, vm4x6['onMkdirCallBack']))), vm4x6['window']['focus'] = function () {}, l0nt['getUrlPath'] = function () {}, vm4x6['window']['logtime'] = function (kc7j) {}, vm4x6['window']['alertTimeLog'] = function (tql$ns) {}, vm4x6['window']['resetShareInfo'] = function () {}, vm4x6['window']['CanvasRenderingContext2D'] = function () {}, vm4x6['window']['CanvasRenderingContext2D']['prototype'] = vm4x6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vm4x6['window']['document']['body']['appendChild'] = function () {}, vm4x6['EnvConfig']['pixelRatioInt'] = 0x0, $inlp['getPixelRatio'] = vm4x6['pixelRatio'], vm4x6['_preCreateElement'] = inyp0['createElement'], inyp0['createElement'] = vm4x6['createElement'], $inlp['createShaderCondition'] = vm4x6['createShaderCondition'], _ypi09['parseXMLFromString'] = vm4x6['parseXMLFromString'], u8ez['_createInputElement'] = ry_9['_createInputElement'], vm4x6['EnvConfig']['load'] = i09yn['prototype']['load'], i09yn['prototype']['load'] = i90lpn['prototype']['load'], vm4x6['isZiYu'] && _yjr97 && wx['onMessage'](function (w3u1b) {
        w3u1b['isLoad'] && (d5ov6w['ziyuFileData'][w3u1b['url']] = w3u1b['data']);
      });
    }, vm4x6['onMkdirCallBack'] = function (a7ce8k, u3zbw) {
      if (!a7ce8k) d5ov6w['filesListObj'] = JSON['parse'](u3zbw['data']);
    }, vm4x6['pixelRatio'] = function () {
      if (!vm4x6['EnvConfig']['pixelRatioInt']) try {
        var akc1e8 = wx['getSystemInfoSync']();return vm4x6['EnvConfig']['pixelRatioInt'] = akc1e8['pixelRatio'], akc1e8 = akc1e8, akc1e8['pixelRatio'];
      } catch (y0p_9r) {}return vm4x6['EnvConfig']['pixelRatioInt'];
    }, vm4x6['createElement'] = function (ea18kc) {
      if (ea18kc == 'canvas') {
        var h6vxm;return vm4x6['idx'] == 0x1 ? vm4x6['isZiYu'] ? (h6vxm = sharedCanvas, h6vxm['style'] = {}) : h6vxm = window['canvas'] : h6vxm = window['wx']['createCanvas'](), vm4x6['idx']++, h6vxm;
      } else {
        if (ea18kc == 'textarea' || ea18kc == 'input') return vm4x6['onCreateInput'](ea18kc);else {
          if (ea18kc == 'div') {
            var l$tnqs = vm4x6['_preCreateElement'](ea18kc);return l$tnqs['contains'] = function (j9r7_) {
              return null;
            }, l$tnqs['removeChild'] = function (kja8) {}, l$tnqs;
          } else return vm4x6['_preCreateElement'](ea18kc);
        }
      }
    }, vm4x6['onCreateInput'] = function (z18eu3) {
      var yp0i9_ = vm4x6['_preCreateElement'](z18eu3);return yp0i9_['focus'] = ry_9['wxinputFocus'], yp0i9_['blur'] = ry_9['wxinputblur'], yp0i9_['style'] = {}, yp0i9_['value'] = 0x0, yp0i9_['parentElement'] = {}, yp0i9_['placeholder'] = {}, yp0i9_['type'] = {}, yp0i9_['setColor'] = function (cek87a) {}, yp0i9_['setType'] = function (y_) {}, yp0i9_['setFontFace'] = function (py_9i) {}, yp0i9_['addEventListener'] = function (i9lnp0) {}, yp0i9_['contains'] = function (g4hmvx) {
        return null;
      }, yp0i9_['removeChild'] = function (zce8) {}, yp0i9_;
    }, vm4x6['createShaderCondition'] = function (v6o5dh) {
      var k1ec8z = this,
          hd6o4v = function () {
        var h4vd6x = v6o5dh;return k1ec8z[v6o5dh['replace']('this.', '')];
      };return hd6o4v;
    }, vm4x6['EnvConfig'] = null, vm4x6['window'] = null, vm4x6['_preCreateElement'] = null, vm4x6['_inited'] = ![], vm4x6['wxRequest'] = null, vm4x6['systemInfo'] = null, vm4x6['version'] = '0.0.1', vm4x6['isZiYu'] = ![], vm4x6['isPosMsgYu'] = ![], vm4x6['parseXMLFromString'] = function (r0p_y9) {
      var q$nslt, jpr_y9;r0p_y9 = r0p_y9['replace'](/>\s+</g, '><');try {
        q$nslt = new window['Parser']['DOMParser']()['parseFromString'](r0p_y9, 'text/xml');
      } catch (j7ar) {
        throw '需要引入xml解析库文件';
      }return q$nslt;
    }, vm4x6['idx'] = 0x1, vm4x6;
  }(),
      b65wdo = function () {
    function n$lti0() {}vh6x(n$lti0, 'laya.wx.mini.MiniImage');var u53zw = n$lti0['prototype'];return u53zw['_loadImage'] = function (b6do) {
      var hvmx4g = this,
          vx4hd = ![];b6do['indexOf']('layaNativeDir/') == -0x1 && (vx4hd = !![], b6do = czke['formatURL'](b6do));if (!d5ov6w['getFileInfo'](b6do)) {
        if (b6do['indexOf']('http://') != -0x1 || b6do['indexOf']('https://') != -0x1) d5ov6w['downImg'](b6do, new rjck7(n$lti0, n$lti0['onDownImgCallBack'], [b6do, hvmx4g]), b6do);else n$lti0['onCreateImage'](b6do, hvmx4g, !![]);
      } else n$lti0['onCreateImage'](b6do, hvmx4g, !vx4hd);
    }, n$lti0['onDownImgCallBack'] = function (aec8k1, ezck81, d6ob5) {
      if (!d6ob5) n$lti0['onCreateImage'](aec8k1, ezck81);else ezck81['onError'](null);
    }, n$lti0['onCreateImage'] = function (nlqt$, j9p_y, pi9n0l) {
      pi9n0l === void 0x0 && (pi9n0l = ![]);var qfls$;if (!pi9n0l) {
        var b3eu1 = d5ov6w['getFileInfo'](nlqt$),
            gxhvm4 = b3eu1['md5'];qfls$ = d5ov6w['getFileNativePath'](gxhvm4);
      } else qfls$ = nlqt$;if (j9p_y['imgCache'] == null) j9p_y['imgCache'] = {};var ack7jr;function wuz3b() {
        ack7jr['onload'] = null, ack7jr['onerror'] = null, delete j9p_y['imgCache'][nlqt$];
      };var nils = function () {
        wuz3b(), j9p_y['onLoaded'](ack7jr);
      },
          do6 = function () {
        wuz3b(), j9p_y['event']('error', 'Load image failed');
      };j9p_y['_type'] == 'nativeimage' ? (ack7jr = new inyp0['window']['Image'](), ack7jr['crossOrigin'] = '', ack7jr['onload'] = nils, ack7jr['onerror'] = do6, ack7jr['src'] = qfls$, j9p_y['imgCache'][nlqt$] = ack7jr) : new u8ez1['create'](qfls$, { 'onload': nils, 'onerror': do6, 'onCreate': function (wbzu5) {
          ack7jr = wbzu5, j9p_y['imgCache'][nlqt$] = wbzu5;
        } });
    }, n$lti0;
  }(),
      ry_9 = function () {
    function h6v4xm() {}return vh6x(h6v4xm, 'laya.wx.mini.MiniInput'), h6v4xm['_createInputElement'] = function () {
      u8ez['_initInput'](u8ez['area'] = inyp0['createElement']('textarea')), u8ez['_initInput'](u8ez['input'] = inyp0['createElement']('input')), u8ez['inputContainer'] = inyp0['createElement']('div'), u8ez['inputContainer']['style']['position'] = 'absolute', u8ez['inputContainer']['style']['zIndex'] = 0x186a0, inyp0['container']['appendChild'](u8ez['inputContainer']), u8ez['inputContainer']['setPos'] = function (cz138, o65dbw) {
        u8ez['inputContainer']['style']['left'] = cz138 + 'px', u8ez['inputContainer']['style']['top'] = o65dbw + 'px';
      }, l0nt['stage']['on']('resize', null, h6v4xm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y79j_r) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), slnq$t['_soundClass'] = ils$tn, slnq$t['_musicClass'] = ils$tn;
    }, h6v4xm['_onStageResize'] = function () {
      var x4dh6 = l0nt['stage']['_canvasTransform']['identity']();x4dh6['scale'](inyp0['width'] / k7ja['canvas']['width'] / $inlp['getPixelRatio'](), inyp0['height'] / k7ja['canvas']['height'] / $inlp['getPixelRatio']());
    }, h6v4xm['wxinputFocus'] = function (ke1ca8) {
      var uow35b = u8ez['inputElement']['target'];if (uow35b && !uow35b['editable']) return;ftq$l['window']['wx']['offKeyboardConfirm'](), ftq$l['window']['wx']['offKeyboardInput'](), ftq$l['window']['wx']['showKeyboard']({ 'defaultValue': uow35b['text'], 'maxLength': uow35b['maxChars'], 'multiple': uow35b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (e138zc) {}, 'fail': function (ec1zk) {} }), ftq$l['window']['wx']['onKeyboardConfirm'](function (vhod56) {
        var tqf2 = vhod56 ? vhod56['value'] : '';uow35b['text'] = tqf2, uow35b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ftq$l['window']['wx']['onKeyboardInput'](function (ac7rj) {
        var yj_7ar = ac7rj ? ac7rj['value'] : '';if (!uow35b['multiline']) {
          if (yj_7ar['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uow35b['text'] = yj_7ar, uow35b['event']('input');
      });
    }, h6v4xm['inputEnter'] = function () {
      u8ez['inputElement']['target']['focus'] = ![];
    }, h6v4xm['wxinputblur'] = function () {
      h6v4xm['hideKeyboard']();
    }, h6v4xm['hideKeyboard'] = function () {
      ftq$l['window']['wx']['offKeyboardConfirm'](), ftq$l['window']['wx']['offKeyboardInput'](), ftq$l['window']['wx']['hideKeyboard']({ 'success': function (b13ue) {
          console['log']('隐藏键盘');
        }, 'fail': function (eka81) {
          console['log']('隐藏键盘出错:' + (eka81 ? eka81['errMsg'] : ''));
        } });
    }, h6v4xm;
  }(),
      i90lpn = function () {
    function ya_7jr() {}vh6x(ya_7jr, 'laya.wx.mini.MiniLoader');var bz31u = ya_7jr['prototype'];return bz31u['load'] = function (o5udw, ftsql, c81a, npy0i, m4hxgv) {
      c81a === void 0x0 && (c81a = !![]), m4hxgv === void 0x0 && (m4hxgv = ![]);var wz5u3b = this;wz5u3b['_url'] = o5udw;if (o5udw['indexOf']('data:image') === 0x0) wz5u3b['_type'] = ftsql = 'image';else wz5u3b['_type'] = ftsql || (ftsql = wz5u3b['getTypeFromUrl'](o5udw));wz5u3b['_cache'] = c81a, wz5u3b['_data'] = null;var bw3u = 'ascii';if (o5udw['indexOf']('.fnt') != -0x1) bw3u = 'utf8';else ftsql == 'arraybuffer' && (bw3u = '');;var odw5b6 = _ypi09['getFileExtension'](o5udw);if (ya_7jr['_fileTypeArr']['indexOf'](odw5b6) != -0x1) ftq$l['EnvConfig']['load']['call'](this, o5udw, ftsql, c81a, npy0i, m4hxgv);else {
        if (!d5ov6w['getFileInfo'](o5udw)) {
          if (o5udw['indexOf']('layaNativeDir/') != -0x1) {
            if (ftq$l['isZiYu']) {
              var odvw5 = d5ov6w['ziyuFileData'][o5udw];wz5u3b['onLoaded'](odvw5);return;
            } else {
              cosnole['log']('read read'), d5ov6w['read'](o5udw, bw3u, new rjck7(ya_7jr, ya_7jr['onReadNativeCallBack'], [bw3u, o5udw, ftsql, c81a, npy0i, m4hxgv, wz5u3b]));return;
            }
          }if (czke['rootPath'] == '') var _9yp0r = o5udw;else _9yp0r = o5udw['split'](czke['rootPath'])[0x0];o5udw['indexOf']('http://') != -0x1 || o5udw['indexOf']('https://') != -0x1 ? ftq$l['EnvConfig']['load']['call'](wz5u3b, o5udw, ftsql, c81a, npy0i, m4hxgv) : d5ov6w['readFile'](_9yp0r, bw3u, new rjck7(ya_7jr, ya_7jr['onReadNativeCallBack'], [bw3u, o5udw, ftsql, c81a, npy0i, m4hxgv, wz5u3b]), o5udw);
        } else ftq$l['EnvConfig']['load']['call'](this, o5udw, ftsql, c81a, npy0i, m4hxgv);
      }
    }, bz31u['resMgrLoad'] = function (i$nl0p, rkj7, $slq, p0nyi9, keac87, gx4vm, lsqft$) {
      $slq === void 0x0 && ($slq = 0x0), p0nyi9 === void 0x0 && (p0nyi9 = ![]), keac87 === void 0x0 && (keac87 = ![]), gx4vm === void 0x0 && (gx4vm = 0x0), lsqft$ === void 0x0 && (lsqft$ = 0x3), i$nl0p['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i$nl0p), ftq$l['EnvConfig']['resMgrLoad'](i$nl0p, (ez3c, u8e13, pl0i$) => {
        ya_7jr['prototype']['resMgrLoadCallBack'](ez3c, u8e13, pl0i$, rkj7);
      }, $slq, p0nyi9, keac87, gx4vm, lsqft$);
    }, bz31u['resMgrLoadCallBack'] = function (siln$t, nt$i0, nl0$i, e78kac) {
      console['log']('buff:::', siln$t, nl0$i, d5ov6w['fileNativeDir'] + '///' + d5ov6w['fileListName']), e78kac(siln$t, nt$i0, nl0$i);
    }, bz31u['clearRes'] = function (wzu5, tlsq$n) {
      tlsq$n === void 0x0 && (tlsq$n = ![]);var stq$f = this;stq$f['clearRes'](wzu5, tlsq$n);var mhx64v = d5ov6w['getFileInfo'](wzu5);if (mhx64v && (wzu5['indexOf']('http://') != -0x1 || wzu5['indexOf']('https://') != -0x1)) {
        var h4 = mhx64v['md5'],
            ghxm4 = d5ov6w['getFileNativePath'](h4);d5ov6w['remove'](ghxm4);
      }
    }, ya_7jr['onReadNativeCallBack'] = function (ja87c, c3z81e, d4v6ho, wbu53z, i0p, ft$q, nilp, w3uo5b, ov6wd) {
      wbu53z === void 0x0 && (wbu53z = !![]), ft$q === void 0x0 && (ft$q = ![]), w3uo5b === void 0x0 && (w3uo5b = 0x0);if (!w3uo5b) {
        var ypin0;if (d4v6ho == 'json' || d4v6ho == 'atlas') ypin0 = ftq$l['getJson'](ov6wd['data']);else d4v6ho == 'xml' ? ypin0 = _ypi09['parseXMLFromString'](ov6wd['data']) : ypin0 = ov6wd['data'];nilp['onLoaded'](ypin0), !ftq$l['isZiYu'] && ftq$l['isPosMsgYu'] && d4v6ho != 'arraybuffer' && wx['postMessage']({ 'url': c3z81e, 'data': ypin0, 'isLoad': !![] });
      } else w3uo5b == 0x1 && ftq$l['EnvConfig']['load']['call'](nilp, c3z81e, d4v6ho, wbu53z, i0p, ft$q);
    }, bwu53o(ya_7jr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ya_7jr;
  }(),
      d5ov6w = function (bu5o) {
    function $lti0() {
      $lti0['__super']['call'](this);;
    }return vh6x($lti0, 'laya.wx.mini.MiniFileMgr', bu5o), $lti0['isLoadFile'] = function (dwoub5) {
      return $lti0['_fileTypeArr']['indexOf'](dwoub5) != -0x1 ? !![] : ![];
    }, $lti0['getFileInfo'] = function (c7ka) {
      var ftql$s = c7ka['split']('?')[0x0],
          pinl9 = $lti0['filesListObj'][ftql$s];if (pinl9 == null) return null;else return pinl9;return null;
    }, $lti0['onFileUpdate'] = function (ra7_kj, xhv4m6) {
      var l90pin = ra7_kj['split']('/'),
          hv46do = l90pin[l90pin['length'] - 0x1],
          z5u = $lti0['getFileInfo'](xhv4m6);if (z5u == null) $lti0['onSaveFile'](xhv4m6, hv46do);else {
        if (z5u['readyUrl'] != xhv4m6) $lti0['remove'](hv46do, xhv4m6);
      }
    }, $lti0['exits'] = function (k8aj7c, z38ce) {
      var lti0n$ = $lti0['getFileNativePath'](k8aj7c);$lti0['fs']['getFileInfo']({ 'filePath': lti0n$, 'success': function (wov6d5) {
          z38ce != null && z38ce['runWith']([0x0, wov6d5]);
        }, 'fail': function (ip_y0) {
          z38ce != null && z38ce['runWith']([0x1, ip_y0]);
        } });
    }, $lti0['read'] = function (kar7cj, mgv4, u3z5w, l$isnt) {
      mgv4 === void 0x0 && (mgv4 = 'ascill'), l$isnt === void 0x0 && (l$isnt = '');var hmgv4x;l$isnt != '' ? hmgv4x = $lti0['getFileNativePath'](kar7cj) : hmgv4x = kar7cj, $lti0['fs']['readFile']({ 'filePath': hmgv4x, 'encoding': mgv4, 'success': function (ub3wo5) {
          u3z5w != null && u3z5w['runWith']([0x0, ub3wo5]);
        }, 'fail': function (tnslq$) {
          if (tnslq$ && l$isnt != '') $lti0['down'](l$isnt, mgv4, u3z5w, l$isnt);else u3z5w != null && u3z5w['runWith']([0x1]);
        } });
    }, $lti0['readNativeFile'] = function (bz13u, vd6ho) {
      $lti0['fs']['readFile']({ 'filePath': bz13u, 'encoding': '', 'success': function (z8cke1) {
          vd6ho != null && vd6ho['runWith']([0x0]);
        }, 'fail': function (be31zu) {
          vd6ho != null && vd6ho['runWith']([0x1]);
        } });
    }, $lti0['down'] = function (ek8ca7, gmvh4x, e7a8, t$q2) {
      gmvh4x === void 0x0 && (gmvh4x = 'ascill'), t$q2 === void 0x0 && (t$q2 = '');var mxv = $lti0['getFileNativePath'](t$q2),
          y9p_r = $lti0['wxdown']({ 'url': ek8ca7, 'filePath': mxv, 'success': function (w5ob3u) {
          if (w5ob3u['statusCode'] === 0xc8) $lti0['readFile'](w5ob3u['filePath'], gmvh4x, e7a8, t$q2);
        }, 'fail': function (yj_rp9) {
          e7a8 != null && e7a8['runWith']([0x1, yj_rp9]);
        } });y9p_r['onProgressUpdate'](function (u5z3w) {
        e7a8 != null && e7a8['runWith']([0x2, u5z3w['progress']]);
      });
    }, $lti0['readFile'] = function (y0in9p, inpy09, ni0$, _ja7kr) {
      inpy09 === void 0x0 && (inpy09 = 'ascill'), _ja7kr === void 0x0 && (_ja7kr = ''), $lti0['fs']['readFile']({ 'filePath': y0in9p, 'encoding': inpy09, 'success': function (n90yi) {
          if (y0in9p['indexOf']('http://') != -0x1 || y0in9p['indexOf']('https://') != -0x1) $lti0['onFileUpdate'](y0in9p, _ja7kr);ni0$ != null && ni0$['runWith']([0x0, n90yi]);
        }, 'fail': function (aeck8) {
          if (aeck8) ni0$ != null && ni0$['runWith']([0x1, aeck8]);
        } });
    }, $lti0['downImg'] = function (r7_yj9, e3c81z, eac8k) {
      eac8k === void 0x0 && (eac8k = '');var vxmhg = $lti0['wxdown']({ 'url': r7_yj9, 'success': function (wuzb1) {
          wuzb1['statusCode'] === 0xc8 && $lti0['copyFile'](wuzb1['tempFilePath'], eac8k, e3c81z);
        }, 'fail': function (_0yr9) {
          e3c81z != null && e3c81z['runWith']([0x1, _0yr9]);
        } });
    }, $lti0['copyFile'] = function (vdhx4, cek7a8, lin$ts) {
      var m4gxhv = vdhx4['split']('/'),
          ka7cj = m4gxhv[m4gxhv['length'] - 0x1],
          _9i0yp = cek7a8['split']('?')[0x0],
          jack7 = $lti0['getFileInfo'](cek7a8),
          _pyi09 = $lti0['getFileNativePath'](ka7cj);$lti0['fs']['copyFile']({ 'srcPath': vdhx4, 'destPath': _pyi09, 'success': function (c1ze83) {
          if (!jack7) $lti0['onSaveFile'](cek7a8, ka7cj), lin$ts != null && lin$ts['runWith']([0x0]);else {
            if (jack7['readyUrl'] != cek7a8) $lti0['remove'](ka7cj, cek7a8, lin$ts);
          }
        }, 'fail': function (i_9py0) {
          lin$ts != null && lin$ts['runWith']([0x1, i_9py0]);
        } });
    }, $lti0['getFileNativePath'] = function (kc1ze) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kc1ze;
    }, $lti0['remove'] = function (zbe3u, dvw56o, gxhmv4) {
      dvw56o === void 0x0 && (dvw56o = '');var s$ftlq = $lti0['getFileInfo'](dvw56o),
          $qfts2 = $lti0['getFileNativePath'](s$ftlq['md5']);l0nt['loader']['clearRes'](s$ftlq['readyUrl']), $lti0['fs']['unlink']({ 'filePath': $qfts2, 'success': function (w65dvo) {
          if (dvw56o != '') $lti0['onSaveFile'](dvw56o, zbe3u);gxhmv4 != null && gxhmv4['runWith']([0x0]);
        }, 'fail': function (r_aj7y) {} });
    }, $lti0['onSaveFile'] = function (ez83c1, ghvx4m) {
      var tq$sln = ez83c1['split']('?')[0x0];$lti0['filesListObj'][tq$sln] = { 'md5': ghvx4m, 'readyUrl': ez83c1 }, $lti0['fs']['writeFile']({ 'filePath': $lti0['fileNativeDir'] + '/' + $lti0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($lti0['filesListObj']), 'success': function (ja8c7k) {
          console['log']('写入测试测试成功：', ja8c7k);
        }, 'fail': function (a7ckr) {
          console['log']('写入测试测试失败：', a7ckr);
        } });
    }, $lti0['existDir'] = function (a87c, ue831z) {
      $lti0['fs']['mkdir']({ 'dirPath': a87c, 'success': function (u3ow) {
          ue831z != null && ue831z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (npyi) {
          if (npyi['errMsg']['indexOf']('file already exists') != -0x1) $lti0['readSync']($lti0['fileListName'], 'utf8', ue831z);else ue831z != null && ue831z['runWith']([0x1, npyi]);
        } });
    }, $lti0['readSync'] = function (qf$tl, ckra, $0ti, bo5ud) {
      ckra === void 0x0 && (ckra = 'ascill'), bo5ud === void 0x0 && (bo5ud = '');var yi90 = $lti0['getFileNativePath'](qf$tl),
          slqf$;try {
        slqf$ = $lti0['fs']['readFileSync'](yi90), $0ti != null && $0ti['runWith']([0x0, { 'data': slqf$ }]);
      } catch (_krja) {
        $0ti != null && $0ti['runWith']([0x1]);
      }
    }, $lti0['readCache'] = function () {}, $lti0['writeCache'] = function (isn$) {
      var ez31b = readyUrl['split']('?')[0x0];$lti0['filesListObj'][ez31b] = { 'md5': md5Name, 'readyUrl': readyUrl }, $lti0['fs']['writeFile']({ 'filePath': $lti0['fileNativeDir'] + '/' + $lti0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($lti0['filesListObj']), 'success': function (ho6v5d) {}, 'fail': function (ubz31) {} });
    }, $lti0['setNativeFileDir'] = function (v6h4xm) {
      $lti0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + v6h4xm;
    }, $lti0['filesListObj'] = {}, $lti0['fileNativeDir'] = null, $lti0['fileListName'] = 'layaairfiles.txt', $lti0['ziyuFileData'] = {}, bwu53o($lti0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $lti0;
  }(p9l0i),
      ils$tn = function (y9rp0) {
    function cezk() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cezk['__super']['call'](this), this['_sound'] = cezk['_createSound']();
    }vh6x(cezk, 'laya.wx.mini.MiniSound', y9rp0);var i0n$tl = cezk['prototype'];return i0n$tl['load'] = function (k_arj7) {
      var ln0p9i = this;k_arj7 = czke['formatURL'](k_arj7), this['url'] = k_arj7;if (cezk['_audioCache'][k_arj7]) {
        this['event']('complete');return;
      }function e8a1ck() {
        if (cezk['_null'] != undefined) ln0p9i['_sound']['onCanplay'](cezk['_null']), ln0p9i['_sound']['onError'](cezk['_null']);else try {
          ln0p9i['_sound']['onCanplay'](null), ln0p9i['_sound']['onError'](null), cezk['_null'] = null;
        } catch (cr7a) {
          console['warn']('[wxmini] _clearSound:' + cr7a), ln0p9i['_sound']['onCanplay']($qltsn), ln0p9i['_sound']['onError']($qltsn), cezk['_null'] = $qltsn;
        }
      }function wv56od() {
        e8a1ck(), u1b3e['loaded'] = !![], u1b3e['event']('complete'), cezk['_audioCache'][u1b3e['url']] = u1b3e;
      }function ze3c1(v4hm6) {
        console['error']('errCode=' + v4hm6['errCode'] + '  errMsg=' + v4hm6['errMsg']), e8a1ck(), u1b3e['event']('error');
      }function $qltsn() {}this['_sound']['onCanplay'](wv56od), this['_sound']['onError'](ze3c1), this['_sound']['src'] = k_arj7;var u1b3e = this;
    }, i0n$tl['play'] = function ($2qft, wbo65d) {
      $2qft === void 0x0 && ($2qft = 0x0), wbo65d === void 0x0 && (wbo65d = 0x0);var a78e;if (this['url'] == slnq$t['_tMusic']) {
        if (!cezk['_musicAudio']) cezk['_musicAudio'] = cezk['_createSound']();a78e = cezk['_musicAudio'];
      } else a78e = cezk['_createSound']();a78e['src'] = this['url'];var sfq2$ = new n9ip0l(a78e);return sfq2$['url'] = this['url'], sfq2$['loops'] = wbo65d, sfq2$['startTime'] = $2qft, sfq2$['play'](), slnq$t['addChannel'](sfq2$), sfq2$;
    }, i0n$tl['dispose'] = function () {
      var _p0iy9 = cezk['_audioCache'][this['url']];_p0iy9 && (_p0iy9['src'] = '', delete cezk['_audioCache'][this['url']]);
    }, e18c3(0x0, i0n$tl, 'duration', function () {
      return this['_sound']['duration'];
    }), cezk['_createSound'] = function () {
      return cezk['_id']++, ftq$l['window']['wx']['createInnerAudioContext']();
    }, cezk['_musicAudio'] = null, cezk['_id'] = 0x0, cezk['_audioCache'] = {}, cezk['_null'] = undefined, cezk;
  }(p9l0i),
      n9ip0l = function (p_yi) {
    function mg4vxh(t$snl) {
      this['_audio'] = null, this['_onEnd'] = null, mg4vxh['__super']['call'](this), this['_audio'] = t$snl, this['_onEnd'] = _ypi09['bind'](this['__onEnd'], this), t$snl['onEnded'](this['_onEnd']);
    }vh6x(mg4vxh, 'laya.wx.mini.MiniSoundChannel', p_yi);var y7r9j = mg4vxh['prototype'];return y7r9j['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (l0nt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, y7r9j['__onNull'] = function () {}, y7r9j['play'] = function () {
      this['isStopped'] = ![], slnq$t['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, y7r9j['stop'] = function () {
      this['isStopped'] = !![], slnq$t['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mg4vxh['_null'] != undefined) this['_audio']['onEnded'](mg4vxh['_null']);else try {
        this['_audio']['onEnded'](null), mg4vxh['_null'] = null;
      } catch (y_p09i) {
        console['warn']('[wxmini] stop:' + y_p09i), this['_audio']['onEnded'](_ypi09['bind'](this['__onNull'], this)), mg4vxh['_null'] = _ypi09['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, y7r9j['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, y7r9j['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], slnq$t['addChannel'](this), this['_audio']['play']();
    }, e18c3(0x0, y7r9j, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), e18c3(0x0, y7r9j, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), e18c3(0x0, y7r9j, 'volume', function () {
      return 0x1;
    }, function (sf2) {}), mg4vxh['_null'] = undefined, mg4vxh;
  }(jkcr7);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dov65h in Laya) {
    var zk81e = Laya[dov65h];zk81e && zk81e['__isclass'] && (exports[dov65h] = zk81e);
  }
});