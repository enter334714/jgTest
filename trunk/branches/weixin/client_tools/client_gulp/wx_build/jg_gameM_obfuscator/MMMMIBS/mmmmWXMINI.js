var Y = wx.$M;
(function (window, document, l05n$) {
  var krux19 = l05n$['un'],
      idl50 = l05n$['uns'],
      g64so_ = l05n$['static'],
      g8oce = l05n$['class'],
      r9f1kv = l05n$['getset'],
      r1xk = l05n$['__newvec'],
      mj_nh7 = laya['utils']['Browser'],
      u9xk1r = laya['events']['Event'],
      nl5i$ = laya['events']['EventDispatcher'],
      rk9ux = laya['resource']['HTMLImage'],
      goac6s = laya['utils']['Handler'],
      h7j4_m = laya['display']['Input'],
      xu9 = laya['net']['Loader'],
      tp82ze = laya['maths']['Matrix'],
      wdl$0 = laya['renders']['Render'],
      rk1x = laya['utils']['RunDriver'],
      yx91ku = laya['media']['Sound'],
      og8a6 = laya['media']['SoundChannel'],
      s4gao6 = laya['media']['SoundManager'],
      a82egc = laya['display']['Stage'],
      urxk91 = laya['net']['URL'],
      dl0w = laya['utils']['Utils'],
      m47 = function () {
    function ze8t() {}return g8oce(ze8t, 'laya.wx.mini.MiniAdpter'), ze8t['getJson'] = function (_7hn) {
      return JSON['parse'](_7hn);
    }, ze8t['init'] = function (uky3qx, gos6_4) {
      uky3qx === void 0x0 && (uky3qx = ![]), gos6_4 === void 0x0 && (gos6_4 = ![]);if (ze8t['_inited']) return;ze8t['window'] = window;if (ze8t['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ze8t['_inited'] = !![], ze8t['isZiYu'] = gos6_4, ze8t['isPosMsgYu'] = uky3qx, ze8t['EnvConfig'] = {}, !ze8t['isZiYu'] && (vwdf$['setNativeFileDir']('/layaairGame'), vwdf$['existDir'](vwdf$['fileNativeDir'], goac6s['create'](ze8t, ze8t['onMkdirCallBack']))), ze8t['window']['focus'] = function () {}, l05n$['getUrlPath'] = function () {}, ze8t['window']['logtime'] = function (r19uk) {}, ze8t['window']['alertTimeLog'] = function (lwb0d$) {}, ze8t['window']['resetShareInfo'] = function () {}, ze8t['window']['CanvasRenderingContext2D'] = function () {}, ze8t['window']['CanvasRenderingContext2D']['prototype'] = ze8t['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ze8t['window']['document']['body']['appendChild'] = function () {}, ze8t['EnvConfig']['pixelRatioInt'] = 0x0, rk1x['getPixelRatio'] = ze8t['pixelRatio'], ze8t['_preCreateElement'] = mj_nh7['createElement'], mj_nh7['createElement'] = ze8t['createElement'], rk1x['createShaderCondition'] = ze8t['createShaderCondition'], dl0w['parseXMLFromString'] = ze8t['parseXMLFromString'], h7j4_m['_createInputElement'] = a68gc['_createInputElement'], ze8t['EnvConfig']['load'] = xu9['prototype']['load'], xu9['prototype']['load'] = x9['prototype']['load'], ze8t['isZiYu'] && uky3qx && wx['onMessage'](function (ih5n0) {
        ih5n0['isLoad'] && (vwdf$['ziyuFileData'][ih5n0['url']] = ih5n0['data']);
      });
    }, ze8t['onMkdirCallBack'] = function (j7_h4m, jsm74_) {
      if (!j7_h4m) vwdf$['filesListObj'] = JSON['parse'](jsm74_['data']);
    }, ze8t['pixelRatio'] = function () {
      if (!ze8t['EnvConfig']['pixelRatioInt']) try {
        var yxk9u = wx['getSystemInfoSync']();return ze8t['EnvConfig']['pixelRatioInt'] = yxk9u['pixelRatio'], yxk9u = yxk9u, yxk9u['pixelRatio'];
      } catch (b0lw$) {}return ze8t['EnvConfig']['pixelRatioInt'];
    }, ze8t['createElement'] = function (u1xkr9) {
      if (u1xkr9 == 'canvas') {
        var k1xquy;return ze8t['idx'] == 0x1 ? ze8t['isZiYu'] ? (k1xquy = sharedCanvas, k1xquy['style'] = {}) : k1xquy = window['canvas'] : k1xquy = window['wx']['createCanvas'](), ze8t['idx']++, k1xquy;
      } else {
        if (u1xkr9 == 'textarea' || u1xkr9 == 'input') return ze8t['onCreateInput'](u1xkr9);else {
          if (u1xkr9 == 'div') {
            var hj7m4 = ze8t['_preCreateElement'](u1xkr9);return hj7m4['contains'] = function (j7_m) {
              return null;
            }, hj7m4['removeChild'] = function (wvf9r1) {}, hj7m4;
          } else return ze8t['_preCreateElement'](u1xkr9);
        }
      }
    }, ze8t['onCreateInput'] = function (gec2) {
      var v1r9 = ze8t['_preCreateElement'](gec2);return v1r9['focus'] = a68gc['wxinputFocus'], v1r9['blur'] = a68gc['wxinputblur'], v1r9['style'] = {}, v1r9['value'] = 0x0, v1r9['parentElement'] = {}, v1r9['placeholder'] = {}, v1r9['type'] = {}, v1r9['setColor'] = function (kyux3) {}, v1r9['setType'] = function (h_4j7) {}, v1r9['setFontFace'] = function ($fb0w) {}, v1r9['addEventListener'] = function (s6goa) {}, v1r9['contains'] = function (vwrbdf) {
        return null;
      }, v1r9['removeChild'] = function (hj4_) {}, v1r9;
    }, ze8t['createShaderCondition'] = function ($d0i5l) {
      var s6_7j = this,
          mnhl5i = function () {
        var hn5ji = $d0i5l;return s6_7j[$d0i5l['replace']('this.', '')];
      };return mnhl5i;
    }, ze8t['EnvConfig'] = null, ze8t['window'] = null, ze8t['_preCreateElement'] = null, ze8t['_inited'] = ![], ze8t['wxRequest'] = null, ze8t['systemInfo'] = null, ze8t['version'] = '0.0.1', ze8t['isZiYu'] = ![], ze8t['isPosMsgYu'] = ![], ze8t['parseXMLFromString'] = function (ge8c2) {
      var z28cte, bl05$;ge8c2 = ge8c2['replace'](/>\s+</g, '><');try {
        z28cte = new window['Parser']['DOMParser']()['parseFromString'](ge8c2, 'text/xml');
      } catch (a64og) {
        throw '需要引入xml解析库文件';
      }return z28cte;
    }, ze8t['idx'] = 0x1, ze8t;
  }(),
      _74j = function () {
    function og() {}g8oce(og, 'laya.wx.mini.MiniImage');var ao68c = og['prototype'];return ao68c['_loadImage'] = function (te8zc) {
      var gcaeo = this,
          inhm7j = ![];te8zc['indexOf']('layaNativeDir/') == -0x1 && (inhm7j = !![], te8zc = urxk91['formatURL'](te8zc));if (!vwdf$['getFileInfo'](te8zc)) {
        if (te8zc['indexOf']('http://') != -0x1 || te8zc['indexOf']('https://') != -0x1) vwdf$['downImg'](te8zc, new goac6s(og, og['onDownImgCallBack'], [te8zc, gcaeo]), te8zc);else og['onCreateImage'](te8zc, gcaeo, !![]);
      } else og['onCreateImage'](te8zc, gcaeo, !inhm7j);
    }, og['onDownImgCallBack'] = function (lid$5, b9vw, f9wb) {
      if (!f9wb) og['onCreateImage'](lid$5, b9vw);else b9vw['onError'](null);
    }, og['onCreateImage'] = function (xqy3u, f9wrv1, mnh) {
      mnh === void 0x0 && (mnh = ![]);var ih0;if (!mnh) {
        var $5ldb0 = vwdf$['getFileInfo'](xqy3u),
            g82ae = $5ldb0['md5'];ih0 = vwdf$['getFileNativePath'](g82ae);
      } else ih0 = xqy3u;if (f9wrv1['imgCache'] == null) f9wrv1['imgCache'] = {};var v9f1;function fk91() {
        v9f1['onload'] = null, v9f1['onerror'] = null, delete f9wrv1['imgCache'][xqy3u];
      };var lni0$5 = function () {
        fk91(), f9wrv1['onLoaded'](v9f1);
      },
          i5mnhl = function () {
        fk91(), f9wrv1['event']('error', 'Load image failed');
      };f9wrv1['_type'] == 'nativeimage' ? (v9f1 = new mj_nh7['window']['Image'](), v9f1['crossOrigin'] = '', v9f1['onload'] = lni0$5, v9f1['onerror'] = i5mnhl, v9f1['src'] = ih0, f9wrv1['imgCache'][xqy3u] = v9f1) : new rk9ux['create'](ih0, { 'onload': lni0$5, 'onerror': i5mnhl, 'onCreate': function (rfdwv) {
          v9f1 = rfdwv, f9wrv1['imgCache'][xqy3u] = rfdwv;
        } });
    }, og;
  }(),
      a68gc = function () {
    function f$d0bw() {}return g8oce(f$d0bw, 'laya.wx.mini.MiniInput'), f$d0bw['_createInputElement'] = function () {
      h7j4_m['_initInput'](h7j4_m['area'] = mj_nh7['createElement']('textarea')), h7j4_m['_initInput'](h7j4_m['input'] = mj_nh7['createElement']('input')), h7j4_m['inputContainer'] = mj_nh7['createElement']('div'), h7j4_m['inputContainer']['style']['position'] = 'absolute', h7j4_m['inputContainer']['style']['zIndex'] = 0x186a0, mj_nh7['container']['appendChild'](h7j4_m['inputContainer']), h7j4_m['inputContainer']['setPos'] = function (os764_, v91xk) {
        h7j4_m['inputContainer']['style']['left'] = os764_ + 'px', h7j4_m['inputContainer']['style']['top'] = v91xk + 'px';
      }, l05n$['stage']['on']('resize', null, f$d0bw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (asg46) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), s4gao6['_soundClass'] = w$f0d, s4gao6['_musicClass'] = w$f0d;
    }, f$d0bw['_onStageResize'] = function () {
      var oag68c = l05n$['stage']['_canvasTransform']['identity']();oag68c['scale'](mj_nh7['width'] / wdl$0['canvas']['width'] / rk1x['getPixelRatio'](), mj_nh7['height'] / wdl$0['canvas']['height'] / rk1x['getPixelRatio']());
    }, f$d0bw['wxinputFocus'] = function (g86aco) {
      var s6_4go = h7j4_m['inputElement']['target'];if (s6_4go && !s6_4go['editable']) return;m47['window']['wx']['offKeyboardConfirm'](), m47['window']['wx']['offKeyboardInput'](), m47['window']['wx']['showKeyboard']({ 'defaultValue': s6_4go['text'], 'maxLength': s6_4go['maxChars'], 'multiple': s6_4go['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (n0lih5) {}, 'fail': function (di$5) {} }), m47['window']['wx']['onKeyboardConfirm'](function (f1vw9r) {
        var $lb = f1vw9r ? f1vw9r['value'] : '';s6_4go['text'] = $lb, s6_4go['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), m47['window']['wx']['onKeyboardInput'](function (iln5$) {
        var ln0$i = iln5$ ? iln5$['value'] : '';if (!s6_4go['multiline']) {
          if (ln0$i['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s6_4go['text'] = ln0$i, s6_4go['event']('input');
      });
    }, f$d0bw['inputEnter'] = function () {
      h7j4_m['inputElement']['target']['focus'] = ![];
    }, f$d0bw['wxinputblur'] = function () {
      f$d0bw['hideKeyboard']();
    }, f$d0bw['hideKeyboard'] = function () {
      m47['window']['wx']['offKeyboardConfirm'](), m47['window']['wx']['offKeyboardInput'](), m47['window']['wx']['hideKeyboard']({ 'success': function (r9fvb) {
          console['log']('隐藏键盘');
        }, 'fail': function (i5hn) {
          console['log']('隐藏键盘出错:' + (i5hn ? i5hn['errMsg'] : ''));
        } });
    }, f$d0bw;
  }(),
      x9 = function () {
    function $0fw() {}g8oce($0fw, 'laya.wx.mini.MiniLoader');var kux1 = $0fw['prototype'];return kux1['load'] = function (uk1y, x19r, bd0f, $li50n, oacs6) {
      bd0f === void 0x0 && (bd0f = !![]), oacs6 === void 0x0 && (oacs6 = ![]);var l5d$i = this;l5d$i['_url'] = uk1y;if (uk1y['indexOf']('data:image') === 0x0) l5d$i['_type'] = x19r = 'image';else l5d$i['_type'] = x19r || (x19r = l5d$i['getTypeFromUrl'](uk1y));l5d$i['_cache'] = bd0f, l5d$i['_data'] = null;var aec8g2 = 'ascii';if (uk1y['indexOf']('.fnt') != -0x1) aec8g2 = 'utf8';else x19r == 'arraybuffer' && (aec8g2 = '');;var k9y1x = dl0w['getFileExtension'](uk1y);if ($0fw['_fileTypeArr']['indexOf'](k9y1x) != -0x1) m47['EnvConfig']['load']['call'](this, uk1y, x19r, bd0f, $li50n, oacs6);else {
        if (!vwdf$['getFileInfo'](uk1y)) {
          if (uk1y['indexOf']('layaNativeDir/') != -0x1) {
            if (m47['isZiYu']) {
              var v1x9rk = vwdf$['ziyuFileData'][uk1y];l5d$i['onLoaded'](v1x9rk);return;
            } else {
              cosnole['log']('read read'), vwdf$['read'](uk1y, aec8g2, new goac6s($0fw, $0fw['onReadNativeCallBack'], [aec8g2, uk1y, x19r, bd0f, $li50n, oacs6, l5d$i]));return;
            }
          }if (urxk91['rootPath'] == '') var wrbv = uk1y;else wrbv = uk1y['split'](urxk91['rootPath'])[0x0];uk1y['indexOf']('http://') != -0x1 || uk1y['indexOf']('https://') != -0x1 ? m47['EnvConfig']['load']['call'](l5d$i, uk1y, x19r, bd0f, $li50n, oacs6) : vwdf$['readFile'](wrbv, aec8g2, new goac6s($0fw, $0fw['onReadNativeCallBack'], [aec8g2, uk1y, x19r, bd0f, $li50n, oacs6, l5d$i]), uk1y);
        } else m47['EnvConfig']['load']['call'](this, uk1y, x19r, bd0f, $li50n, oacs6);
      }
    }, kux1['resMgrLoad'] = function (mn_hj, vrbwfd, hi5nlm, smj7_, _mjh7, hij5nm, l5n0i$) {
      hi5nlm === void 0x0 && (hi5nlm = 0x0), smj7_ === void 0x0 && (smj7_ = ![]), _mjh7 === void 0x0 && (_mjh7 = ![]), hij5nm === void 0x0 && (hij5nm = 0x0), l5n0i$ === void 0x0 && (l5n0i$ = 0x3), mn_hj['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mn_hj), m47['EnvConfig']['resMgrLoad'](mn_hj, (_m7h, $5lni, bfd$w) => {
        $0fw['prototype']['resMgrLoadCallBack'](_m7h, $5lni, bfd$w, vrbwfd);
      }, hi5nlm, smj7_, _mjh7, hij5nm, l5n0i$);
    }, kux1['resMgrLoadCallBack'] = function (yx1kq, mhn5l, pz28e, j_6s4) {
      console['log']('buff:::', yx1kq, pz28e, vwdf$['fileNativeDir'] + '///' + vwdf$['fileListName']), j_6s4(yx1kq, mhn5l, pz28e);
    }, kux1['clearRes'] = function (wv$bfd, m7n_h) {
      m7n_h === void 0x0 && (m7n_h = ![]);var dl05b = this;dl05b['clearRes'](wv$bfd, m7n_h);var jm7_s = vwdf$['getFileInfo'](wv$bfd);if (jm7_s && (wv$bfd['indexOf']('http://') != -0x1 || wv$bfd['indexOf']('https://') != -0x1)) {
        var _s46j = jm7_s['md5'],
            bdl0w$ = vwdf$['getFileNativePath'](_s46j);vwdf$['remove'](bdl0w$);
      }
    }, $0fw['onReadNativeCallBack'] = function (acog8, m47j_s, wd, ceg28a, kquy3, vrbw9, ao4s6, fbdrvw, ku91x) {
      ceg28a === void 0x0 && (ceg28a = !![]), vrbw9 === void 0x0 && (vrbw9 = ![]), fbdrvw === void 0x0 && (fbdrvw = 0x0);if (!fbdrvw) {
        var _mnjh;if (wd == 'json' || wd == 'atlas') _mnjh = m47['getJson'](ku91x['data']);else wd == 'xml' ? _mnjh = dl0w['parseXMLFromString'](ku91x['data']) : _mnjh = ku91x['data'];ao4s6['onLoaded'](_mnjh), !m47['isZiYu'] && m47['isPosMsgYu'] && wd != 'arraybuffer' && wx['postMessage']({ 'url': m47j_s, 'data': _mnjh, 'isLoad': !![] });
      } else fbdrvw == 0x1 && m47['EnvConfig']['load']['call'](ao4s6, m47j_s, wd, ceg28a, kquy3, vrbw9);
    }, g64so_($0fw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $0fw;
  }(),
      vwdf$ = function (_6s4og) {
    function $i0ln() {
      $i0ln['__super']['call'](this);;
    }return g8oce($i0ln, 'laya.wx.mini.MiniFileMgr', _6s4og), $i0ln['isLoadFile'] = function (bfr) {
      return $i0ln['_fileTypeArr']['indexOf'](bfr) != -0x1 ? !![] : ![];
    }, $i0ln['getFileInfo'] = function ($vfd) {
      var ag2e8c = $vfd['split']('?')[0x0],
          xuqy1k = $i0ln['filesListObj'][ag2e8c];if (xuqy1k == null) return null;else return xuqy1k;return null;
    }, $i0ln['onFileUpdate'] = function (vr1k, qy1ux) {
      var di$l = vr1k['split']('/'),
          b$w0df = di$l[di$l['length'] - 0x1],
          ru1kx = $i0ln['getFileInfo'](qy1ux);if (ru1kx == null) $i0ln['onSaveFile'](qy1ux, b$w0df);else {
        if (ru1kx['readyUrl'] != qy1ux) $i0ln['remove'](b$w0df, qy1ux);
      }
    }, $i0ln['exits'] = function (kq1xuy, fd$0) {
      var s_o76 = $i0ln['getFileNativePath'](kq1xuy);$i0ln['fs']['getFileInfo']({ 'filePath': s_o76, 'success': function (ag2c8e) {
          fd$0 != null && fd$0['runWith']([0x0, ag2c8e]);
        }, 'fail': function (k1xqy) {
          fd$0 != null && fd$0['runWith']([0x1, k1xqy]);
        } });
    }, $i0ln['read'] = function (f0$bw, dwvf$, njhm5i, ze2p8t) {
      dwvf$ === void 0x0 && (dwvf$ = 'ascill'), ze2p8t === void 0x0 && (ze2p8t = '');var as64g;ze2p8t != '' ? as64g = $i0ln['getFileNativePath'](f0$bw) : as64g = f0$bw, $i0ln['fs']['readFile']({ 'filePath': as64g, 'encoding': dwvf$, 'success': function (g4s_6) {
          njhm5i != null && njhm5i['runWith']([0x0, g4s_6]);
        }, 'fail': function (bdwf) {
          if (bdwf && ze2p8t != '') $i0ln['down'](ze2p8t, dwvf$, njhm5i, ze2p8t);else njhm5i != null && njhm5i['runWith']([0x1]);
        } });
    }, $i0ln['readNativeFile'] = function (wb$fvd, v19xr) {
      $i0ln['fs']['readFile']({ 'filePath': wb$fvd, 'encoding': '', 'success': function (_46sj7) {
          v19xr != null && v19xr['runWith']([0x0]);
        }, 'fail': function (s76_4o) {
          v19xr != null && v19xr['runWith']([0x1]);
        } });
    }, $i0ln['down'] = function (s4_j7, n7hjmi, rfkv, e2cat8) {
      n7hjmi === void 0x0 && (n7hjmi = 'ascill'), e2cat8 === void 0x0 && (e2cat8 = '');var wr9f = $i0ln['getFileNativePath'](e2cat8),
          ldwb$ = $i0ln['wxdown']({ 'url': s4_j7, 'filePath': wr9f, 'success': function (t82) {
          if (t82['statusCode'] === 0xc8) $i0ln['readFile'](t82['filePath'], n7hjmi, rfkv, e2cat8);
        }, 'fail': function (n5ilmh) {
          rfkv != null && rfkv['runWith']([0x1, n5ilmh]);
        } });ldwb$['onProgressUpdate'](function (l$0wbd) {
        rfkv != null && rfkv['runWith']([0x2, l$0wbd['progress']]);
      });
    }, $i0ln['readFile'] = function (ih7njm, nmij5, xu91rk, jm_7s4) {
      nmij5 === void 0x0 && (nmij5 = 'ascill'), jm_7s4 === void 0x0 && (jm_7s4 = ''), $i0ln['fs']['readFile']({ 'filePath': ih7njm, 'encoding': nmij5, 'success': function (nhm_7) {
          if (ih7njm['indexOf']('http://') != -0x1 || ih7njm['indexOf']('https://') != -0x1) $i0ln['onFileUpdate'](ih7njm, jm_7s4);xu91rk != null && xu91rk['runWith']([0x0, nhm_7]);
        }, 'fail': function (as4g6) {
          if (as4g6) xu91rk != null && xu91rk['runWith']([0x1, as4g6]);
        } });
    }, $i0ln['downImg'] = function ($dvfwb, gce8oa, mhin) {
      mhin === void 0x0 && (mhin = '');var j7hmin = $i0ln['wxdown']({ 'url': $dvfwb, 'success': function (bwld0$) {
          bwld0$['statusCode'] === 0xc8 && $i0ln['copyFile'](bwld0$['tempFilePath'], mhin, gce8oa);
        }, 'fail': function (js4m_7) {
          gce8oa != null && gce8oa['runWith']([0x1, js4m_7]);
        } });
    }, $i0ln['copyFile'] = function (kr91f, bd5l0, js4_76) {
      var qkyux1 = kr91f['split']('/'),
          rxkv = qkyux1[qkyux1['length'] - 0x1],
          njhmi = bd5l0['split']('?')[0x0],
          jhmn = $i0ln['getFileInfo'](bd5l0),
          f1wrv = $i0ln['getFileNativePath'](rxkv);$i0ln['fs']['copyFile']({ 'srcPath': kr91f, 'destPath': f1wrv, 'success': function (r9u1x) {
          if (!jhmn) $i0ln['onSaveFile'](bd5l0, rxkv), js4_76 != null && js4_76['runWith']([0x0]);else {
            if (jhmn['readyUrl'] != bd5l0) $i0ln['remove'](rxkv, bd5l0, js4_76);
          }
        }, 'fail': function (jm4h_) {
          js4_76 != null && js4_76['runWith']([0x1, jm4h_]);
        } });
    }, $i0ln['getFileNativePath'] = function (yxk91u) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yxk91u;
    }, $i0ln['remove'] = function (vrf9b, kx3q, casg) {
      kx3q === void 0x0 && (kx3q = '');var m7nhj = $i0ln['getFileInfo'](kx3q),
          brf9v = $i0ln['getFileNativePath'](m7nhj['md5']);l05n$['loader']['clearRes'](m7nhj['readyUrl']), $i0ln['fs']['unlink']({ 'filePath': brf9v, 'success': function (yquk1) {
          if (kx3q != '') $i0ln['onSaveFile'](kx3q, vrf9b);casg != null && casg['runWith']([0x0]);
        }, 'fail': function (dvbf$) {} });
    }, $i0ln['onSaveFile'] = function (p82zt, a2te8) {
      var b$lwd0 = p82zt['split']('?')[0x0];$i0ln['filesListObj'][b$lwd0] = { 'md5': a2te8, 'readyUrl': p82zt }, $i0ln['fs']['writeFile']({ 'filePath': $i0ln['fileNativeDir'] + '/' + $i0ln['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($i0ln['filesListObj']), 'success': function (db$0wf) {
          console['log']('写入测试测试成功：', db$0wf);
        }, 'fail': function (id0l5$) {
          console['log']('写入测试测试失败：', id0l5$);
        } });
    }, $i0ln['existDir'] = function (g_46os, n_j7hm) {
      $i0ln['fs']['mkdir']({ 'dirPath': g_46os, 'success': function (b9rwf) {
          n_j7hm != null && n_j7hm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (kuq3y) {
          if (kuq3y['errMsg']['indexOf']('file already exists') != -0x1) $i0ln['readSync']($i0ln['fileListName'], 'utf8', n_j7hm);else n_j7hm != null && n_j7hm['runWith']([0x1, kuq3y]);
        } });
    }, $i0ln['readSync'] = function (f9rw1v, f$0dw, ij7hm, pe28) {
      f$0dw === void 0x0 && (f$0dw = 'ascill'), pe28 === void 0x0 && (pe28 = '');var s46ao = $i0ln['getFileNativePath'](f9rw1v),
          uqy;try {
        uqy = $i0ln['fs']['readFileSync'](s46ao), ij7hm != null && ij7hm['runWith']([0x0, { 'data': uqy }]);
      } catch (aog86) {
        ij7hm != null && ij7hm['runWith']([0x1]);
      }
    }, $i0ln['readCache'] = function () {}, $i0ln['writeCache'] = function (nmihl) {
      var s46a = readyUrl['split']('?')[0x0];$i0ln['filesListObj'][s46a] = { 'md5': md5Name, 'readyUrl': readyUrl }, $i0ln['fs']['writeFile']({ 'filePath': $i0ln['fileNativeDir'] + '/' + $i0ln['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($i0ln['filesListObj']), 'success': function (_4h) {}, 'fail': function (w$dfb0) {} });
    }, $i0ln['setNativeFileDir'] = function (fv9r1k) {
      $i0ln['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + fv9r1k;
    }, $i0ln['filesListObj'] = {}, $i0ln['fileNativeDir'] = null, $i0ln['fileListName'] = 'layaairfiles.txt', $i0ln['ziyuFileData'] = {}, g64so_($i0ln, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $i0ln;
  }(nl5i$),
      w$f0d = function (e8) {
    function os6ca() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], os6ca['__super']['call'](this), this['_sound'] = os6ca['_createSound']();
    }g8oce(os6ca, 'laya.wx.mini.MiniSound', e8);var a6c8 = os6ca['prototype'];return a6c8['load'] = function (fvrd) {
      var q1kuyx = this;fvrd = urxk91['formatURL'](fvrd), this['url'] = fvrd;if (os6ca['_audioCache'][fvrd]) {
        this['event']('complete');return;
      }function l5hn0() {
        if (os6ca['_null'] != undefined) q1kuyx['_sound']['onCanplay'](os6ca['_null']), q1kuyx['_sound']['onError'](os6ca['_null']);else try {
          q1kuyx['_sound']['onCanplay'](null), q1kuyx['_sound']['onError'](null), os6ca['_null'] = null;
        } catch (cg86o) {
          console['warn']('[wxmini] _clearSound:' + cg86o), q1kuyx['_sound']['onCanplay'](hjm_74), q1kuyx['_sound']['onError'](hjm_74), os6ca['_null'] = hjm_74;
        }
      }function bld5$() {
        l5hn0(), w0l['loaded'] = !![], w0l['event']('complete'), os6ca['_audioCache'][w0l['url']] = w0l;
      }function wbfd0(jmhi5) {
        console['error']('errCode=' + jmhi5['errCode'] + '  errMsg=' + jmhi5['errMsg']), l5hn0(), w0l['event']('error');
      }function hjm_74() {}this['_sound']['onCanplay'](bld5$), this['_sound']['onError'](wbfd0), this['_sound']['src'] = fvrd;var w0l = this;
    }, a6c8['play'] = function (t2pez8, o4gas6) {
      t2pez8 === void 0x0 && (t2pez8 = 0x0), o4gas6 === void 0x0 && (o4gas6 = 0x0);var i7njm;if (this['url'] == s4gao6['_tMusic']) {
        if (!os6ca['_musicAudio']) os6ca['_musicAudio'] = os6ca['_createSound']();i7njm = os6ca['_musicAudio'];
      } else i7njm = os6ca['_createSound']();i7njm['src'] = this['url'];var xk9y1 = new $bf0(i7njm);return xk9y1['url'] = this['url'], xk9y1['loops'] = o4gas6, xk9y1['startTime'] = t2pez8, xk9y1['play'](), s4gao6['addChannel'](xk9y1), xk9y1;
    }, a6c8['dispose'] = function () {
      var in5ml = os6ca['_audioCache'][this['url']];in5ml && (in5ml['src'] = '', delete os6ca['_audioCache'][this['url']]);
    }, r9f1kv(0x0, a6c8, 'duration', function () {
      return this['_sound']['duration'];
    }), os6ca['_createSound'] = function () {
      return os6ca['_id']++, m47['window']['wx']['createInnerAudioContext']();
    }, os6ca['_musicAudio'] = null, os6ca['_id'] = 0x0, os6ca['_audioCache'] = {}, os6ca['_null'] = undefined, os6ca;
  }(nl5i$),
      $bf0 = function (t82epz) {
    function gac(nm5j) {
      this['_audio'] = null, this['_onEnd'] = null, gac['__super']['call'](this), this['_audio'] = nm5j, this['_onEnd'] = dl0w['bind'](this['__onEnd'], this), nm5j['onEnded'](this['_onEnd']);
    }g8oce(gac, 'laya.wx.mini.MiniSoundChannel', t82epz);var u9xy = gac['prototype'];return u9xy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (l05n$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, u9xy['__onNull'] = function () {}, u9xy['play'] = function () {
      this['isStopped'] = ![], s4gao6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, u9xy['stop'] = function () {
      this['isStopped'] = !![], s4gao6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (gac['_null'] != undefined) this['_audio']['onEnded'](gac['_null']);else try {
        this['_audio']['onEnded'](null), gac['_null'] = null;
      } catch (o86c) {
        console['warn']('[wxmini] stop:' + o86c), this['_audio']['onEnded'](dl0w['bind'](this['__onNull'], this)), gac['_null'] = dl0w['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, u9xy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, u9xy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], s4gao6['addChannel'](this), this['_audio']['play']();
    }, r9f1kv(0x0, u9xy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), r9f1kv(0x0, u9xy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), r9f1kv(0x0, u9xy, 'volume', function () {
      return 0x1;
    }, function (bwf$0) {}), gac['_null'] = undefined, gac;
  }(og8a6);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var s4_7mj in Laya) {
    var hnmij7 = Laya[s4_7mj];hnmij7 && hnmij7['__isclass'] && (exports[s4_7mj] = hnmij7);
  }
});