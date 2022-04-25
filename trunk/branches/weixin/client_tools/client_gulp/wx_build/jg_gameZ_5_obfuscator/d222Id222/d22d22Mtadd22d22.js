var F = wx.$D;
(function (window, document, amo) {
  var xj6qkw = amo['un'],
      tswev = amo['uns'],
      n1y$8h = amo['static'],
      svwtkq = amo['class'],
      k6xjwa = amo['getset'],
      swt = amo['__newvec'],
      loi5m = laya['utils']['Browser'],
      p3b9uc = laya['events']['Event'],
      t0svce = laya['events']['EventDispatcher'],
      g6kajx = laya['resource']['HTMLImage'],
      xag65 = laya['utils']['Handler'],
      kxga6j = laya['display']['Input'],
      qsve = laya['net']['Loader'],
      _lo5m = laya['maths']['Matrix'],
      xgjak6 = laya['renders']['Render'],
      mg5ol_ = laya['utils']['RunDriver'],
      pu30b = laya['media']['Sound'],
      stvwe = laya['media']['SoundChannel'],
      vse = laya['media']['SoundManager'],
      rh8n12 = laya['display']['Stage'],
      bupf97 = laya['net']['URL'],
      zih2_ = laya['utils']['Utils'],
      ub97pf = function () {
    function fp9b3() {}return svwtkq(fp9b3, 'laya.wx.mini.MiniAdpter'), fp9b3['getJson'] = function (lomg5) {
      return JSON['parse'](lomg5);
    }, fp9b3['init'] = function (gjoa, ubp7) {
      gjoa === void 0x0 && (gjoa = ![]), ubp7 === void 0x0 && (ubp7 = ![]);if (fp9b3['_inited']) return;fp9b3['window'] = window;if (fp9b3['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;fp9b3['_inited'] = !![], fp9b3['isZiYu'] = ubp7, fp9b3['isPosMsgYu'] = gjoa, fp9b3['EnvConfig'] = {}, !fp9b3['isZiYu'] && (fup9b7['setNativeFileDir']('/layaairGame'), fup9b7['existDir'](fup9b7['fileNativeDir'], xag65['create'](fp9b3, fp9b3['onMkdirCallBack']))), fp9b3['window']['focus'] = function () {}, amo['getUrlPath'] = function () {}, fp9b3['window']['logtime'] = function (swvqe) {}, fp9b3['window']['alertTimeLog'] = function (u0c3se) {}, fp9b3['window']['resetShareInfo'] = function () {}, fp9b3['window']['CanvasRenderingContext2D'] = function () {}, fp9b3['window']['CanvasRenderingContext2D']['prototype'] = fp9b3['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fp9b3['window']['document']['body']['appendChild'] = function () {}, fp9b3['EnvConfig']['pixelRatioInt'] = 0x0, mg5ol_['getPixelRatio'] = fp9b3['pixelRatio'], fp9b3['_preCreateElement'] = loi5m['createElement'], loi5m['createElement'] = fp9b3['createElement'], mg5ol_['createShaderCondition'] = fp9b3['createShaderCondition'], zih2_['parseXMLFromString'] = fp9b3['parseXMLFromString'], kxga6j['_createInputElement'] = vtsqew['_createInputElement'], fp9b3['EnvConfig']['load'] = qsve['prototype']['load'], qsve['prototype']['load'] = aj6x['prototype']['load'], fp9b3['isZiYu'] && gjoa && wx['onMessage'](function (jog5m) {
        jog5m['isLoad'] && (fup9b7['ziyuFileData'][jog5m['url']] = jog5m['data']);
      });
    }, fp9b3['onMkdirCallBack'] = function (g_ol5, ojgm) {
      if (!g_ol5) fup9b7['filesListObj'] = JSON['parse'](ojgm['data']);
    }, fp9b3['pixelRatio'] = function () {
      if (!fp9b3['EnvConfig']['pixelRatioInt']) try {
        var olm_5g = wx['getSystemInfoSync']();return fp9b3['EnvConfig']['pixelRatioInt'] = olm_5g['pixelRatio'], olm_5g = olm_5g, olm_5g['pixelRatio'];
      } catch (qk6vxw) {}return fp9b3['EnvConfig']['pixelRatioInt'];
    }, fp9b3['createElement'] = function (wk6xqj) {
      if (wk6xqj == 'canvas') {
        var l_5oi;return fp9b3['idx'] == 0x1 ? fp9b3['isZiYu'] ? (l_5oi = sharedCanvas, l_5oi['style'] = {}) : l_5oi = window['canvas'] : l_5oi = window['wx']['createCanvas'](), fp9b3['idx']++, l_5oi;
      } else {
        if (wk6xqj == 'textarea' || wk6xqj == 'input') return fp9b3['onCreateInput'](wk6xqj);else {
          if (wk6xqj == 'div') {
            var ucbp03 = fp9b3['_preCreateElement'](wk6xqj);return ucbp03['contains'] = function (_ozmli) {
              return null;
            }, ucbp03['removeChild'] = function (ubfp9) {}, ucbp03;
          } else return fp9b3['_preCreateElement'](wk6xqj);
        }
      }
    }, fp9b3['onCreateInput'] = function (f3u9) {
      var bcu0p3 = fp9b3['_preCreateElement'](f3u9);return bcu0p3['focus'] = vtsqew['wxinputFocus'], bcu0p3['blur'] = vtsqew['wxinputblur'], bcu0p3['style'] = {}, bcu0p3['value'] = 0x0, bcu0p3['parentElement'] = {}, bcu0p3['placeholder'] = {}, bcu0p3['type'] = {}, bcu0p3['setColor'] = function (c9up3) {}, bcu0p3['setType'] = function (zirlo_) {}, bcu0p3['setFontFace'] = function (csv) {}, bcu0p3['addEventListener'] = function (bcp0) {}, bcu0p3['contains'] = function (wvqes) {
        return null;
      }, bcu0p3['removeChild'] = function (xkjag) {}, bcu0p3;
    }, fp9b3['createShaderCondition'] = function (akw6xj) {
      var vqewts = this,
          kajgx6 = function () {
        var up93b = akw6xj;return vqewts[akw6xj['replace']('this.', '')];
      };return kajgx6;
    }, fp9b3['EnvConfig'] = null, fp9b3['window'] = null, fp9b3['_preCreateElement'] = null, fp9b3['_inited'] = ![], fp9b3['wxRequest'] = null, fp9b3['systemInfo'] = null, fp9b3['version'] = '0.0.1', fp9b3['isZiYu'] = ![], fp9b3['isPosMsgYu'] = ![], fp9b3['parseXMLFromString'] = function (zi2rl_) {
      var uf9pb7, vesqt;zi2rl_ = zi2rl_['replace'](/>\s+</g, '><');try {
        uf9pb7 = new window['Parser']['DOMParser']()['parseFromString'](zi2rl_, 'text/xml');
      } catch (hzr12) {
        throw '需要引入xml解析库文件';
      }return uf9pb7;
    }, fp9b3['idx'] = 0x1, fp9b3;
  }(),
      w6ajk = function () {
    function evswt() {}svwtkq(evswt, 'laya.wx.mini.MiniImage');var jxakg = evswt['prototype'];return jxakg['_loadImage'] = function (h_izr2) {
      var z2hr_i = this,
          ktqwsv = ![];h_izr2['indexOf']('layaNativeDir/') == -0x1 && (ktqwsv = !![], h_izr2 = bupf97['formatURL'](h_izr2));if (!fup9b7['getFileInfo'](h_izr2)) {
        if (h_izr2['indexOf']('http://') != -0x1 || h_izr2['indexOf']('https://') != -0x1) fup9b7['downImg'](h_izr2, new xag65(evswt, evswt['onDownImgCallBack'], [h_izr2, z2hr_i]), h_izr2);else evswt['onCreateImage'](h_izr2, z2hr_i, !![]);
      } else evswt['onCreateImage'](h_izr2, z2hr_i, !ktqwsv);
    }, evswt['onDownImgCallBack'] = function (p9bfu3, qts0ev, e0st) {
      if (!e0st) evswt['onCreateImage'](p9bfu3, qts0ev);else qts0ev['onError'](null);
    }, evswt['onCreateImage'] = function (ajgm5o, v6qwtk, c93b) {
      c93b === void 0x0 && (c93b = ![]);var aojm5;if (!c93b) {
        var $yhn8 = fup9b7['getFileInfo'](ajgm5o),
            jx6wq = $yhn8['md5'];aojm5 = fup9b7['getFileNativePath'](jx6wq);
      } else aojm5 = ajgm5o;if (v6qwtk['imgCache'] == null) v6qwtk['imgCache'] = {};var qvx6k;function u9b3f() {
        qvx6k['onload'] = null, qvx6k['onerror'] = null, delete v6qwtk['imgCache'][ajgm5o];
      };var ets0c3 = function () {
        u9b3f(), v6qwtk['onLoaded'](qvx6k);
      },
          v0ces = function () {
        u9b3f(), v6qwtk['event']('error', 'Load image failed');
      };v6qwtk['_type'] == 'nativeimage' ? (qvx6k = new loi5m['window']['Image'](), qvx6k['crossOrigin'] = '', qvx6k['onload'] = ets0c3, qvx6k['onerror'] = v0ces, qvx6k['src'] = aojm5, v6qwtk['imgCache'][ajgm5o] = qvx6k) : new g6kajx['create'](aojm5, { 'onload': ets0c3, 'onerror': v0ces, 'onCreate': function (jm5og) {
          qvx6k = jm5og, v6qwtk['imgCache'][ajgm5o] = jm5og;
        } });
    }, evswt;
  }(),
      vtsqew = function () {
    function kq6xwj() {}return svwtkq(kq6xwj, 'laya.wx.mini.MiniInput'), kq6xwj['_createInputElement'] = function () {
      kxga6j['_initInput'](kxga6j['area'] = loi5m['createElement']('textarea')), kxga6j['_initInput'](kxga6j['input'] = loi5m['createElement']('input')), kxga6j['inputContainer'] = loi5m['createElement']('div'), kxga6j['inputContainer']['style']['position'] = 'absolute', kxga6j['inputContainer']['style']['zIndex'] = 0x186a0, loi5m['container']['appendChild'](kxga6j['inputContainer']), kxga6j['inputContainer']['setPos'] = function (mgo_5l, jmoga5) {
        kxga6j['inputContainer']['style']['left'] = mgo_5l + 'px', kxga6j['inputContainer']['style']['top'] = jmoga5 + 'px';
      }, amo['stage']['on']('resize', null, kq6xwj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (b9cp) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vse['_soundClass'] = ilzo_m, vse['_musicClass'] = ilzo_m, window['_videoClass'] = a65gjx;
    }, kq6xwj['_onStageResize'] = function () {
      var csue03 = amo['stage']['_canvasTransform']['identity']();csue03['scale'](loi5m['width'] / xgjak6['canvas']['width'] / mg5ol_['getPixelRatio'](), loi5m['height'] / xgjak6['canvas']['height'] / mg5ol_['getPixelRatio']());
    }, kq6xwj['wxinputFocus'] = function (tcse0v) {
      var zoi_ = kxga6j['inputElement']['target'];if (zoi_ && !zoi_['editable']) return;ub97pf['window']['wx']['offKeyboardConfirm'](), ub97pf['window']['wx']['offKeyboardInput'](), ub97pf['window']['wx']['showKeyboard']({ 'defaultValue': zoi_['text'], 'maxLength': zoi_['maxChars'], 'multiple': zoi_['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y81n$h) {}, 'fail': function (bfup) {} }), ub97pf['window']['wx']['onKeyboardConfirm'](function (wqksv) {
        var esct0v = wqksv ? wqksv['value'] : '';zoi_['text'] = esct0v, zoi_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ub97pf['window']['wx']['onKeyboardInput'](function (f94p7b) {
        var gomla = f94p7b ? f94p7b['value'] : '';if (!zoi_['multiline']) {
          if (gomla['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }zoi_['text'] = gomla, zoi_['event']('input');
      });
    }, kq6xwj['inputEnter'] = function () {
      kxga6j['inputElement']['target']['focus'] = ![];
    }, kq6xwj['wxinputblur'] = function () {
      kq6xwj['hideKeyboard']();
    }, kq6xwj['hideKeyboard'] = function () {
      ub97pf['window']['wx']['offKeyboardConfirm'](), ub97pf['window']['wx']['offKeyboardInput'](), ub97pf['window']['wx']['hideKeyboard']({ 'success': function (p47b) {
          console['log']('隐藏键盘');
        }, 'fail': function (ao5lmg) {
          console['log']('隐藏键盘出错:' + (ao5lmg ? ao5lmg['errMsg'] : ''));
        } });
    }, kq6xwj;
  }(),
      aj6x = function () {
    function qk6xjw() {}svwtkq(qk6xjw, 'laya.wx.mini.MiniLoader');var o5amg = qk6xjw['prototype'];return o5amg['load'] = function (g5m_l, lozir_, cs30eu, vw6qt, setvc) {
      cs30eu === void 0x0 && (cs30eu = !![]), setvc === void 0x0 && (setvc = ![]);var y81$hn = this;y81$hn['_url'] = g5m_l;if (g5m_l['indexOf']('data:image') === 0x0) y81$hn['_type'] = lozir_ = 'image';else y81$hn['_type'] = lozir_ || (lozir_ = y81$hn['getTypeFromUrl'](g5m_l));y81$hn['_cache'] = cs30eu, y81$hn['_data'] = null;var _lrzo = 'ascii';if (g5m_l['indexOf']('.fnt') != -0x1) _lrzo = 'utf8';else lozir_ == 'arraybuffer' && (_lrzo = '');;var kagj6 = zih2_['getFileExtension'](g5m_l);if (qk6xjw['_fileTypeArr']['indexOf'](kagj6) != -0x1) ub97pf['EnvConfig']['load']['call'](this, g5m_l, lozir_, cs30eu, vw6qt, setvc);else {
        if (!fup9b7['getFileInfo'](g5m_l)) {
          if (g5m_l['indexOf']('layaNativeDir/') != -0x1) {
            if (ub97pf['isZiYu']) {
              var vqewt = fup9b7['ziyuFileData'][g5m_l];y81$hn['onLoaded'](vqewt);return;
            } else {
              cosnole['log']('read read'), fup9b7['read'](g5m_l, _lrzo, new xag65(qk6xjw, qk6xjw['onReadNativeCallBack'], [_lrzo, g5m_l, lozir_, cs30eu, vw6qt, setvc, y81$hn]));return;
            }
          }if (bupf97['rootPath'] == '') var og_5 = g5m_l;else og_5 = g5m_l['split'](bupf97['rootPath'])[0x0];g5m_l['indexOf']('http://') != -0x1 || g5m_l['indexOf']('https://') != -0x1 ? ub97pf['EnvConfig']['load']['call'](y81$hn, g5m_l, lozir_, cs30eu, vw6qt, setvc) : fup9b7['readFile'](og_5, _lrzo, new xag65(qk6xjw, qk6xjw['onReadNativeCallBack'], [_lrzo, g5m_l, lozir_, cs30eu, vw6qt, setvc, y81$hn]), g5m_l);
        } else ub97pf['EnvConfig']['load']['call'](this, g5m_l, lozir_, cs30eu, vw6qt, setvc);
      }
    }, o5amg['resMgrLoad'] = function (wkvt, n1r2zh, oglam5, p74f, xkqwj6, wvxq, kx6ag) {
      oglam5 === void 0x0 && (oglam5 = 0x0), p74f === void 0x0 && (p74f = ![]), xkqwj6 === void 0x0 && (xkqwj6 = ![]), wvxq === void 0x0 && (wvxq = 0x0), kx6ag === void 0x0 && (kx6ag = 0x3), wkvt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wkvt), ub97pf['EnvConfig']['resMgrLoad'](wkvt, (bp47, $yh1n8, ewqstv) => {
        qk6xjw['prototype']['resMgrLoadCallBack'](bp47, $yh1n8, ewqstv, n1r2zh);
      }, oglam5, p74f, xkqwj6, wvxq, kx6ag);
    }, o5amg['resMgrLoadCallBack'] = function (qskvt, ct30es, zir21h, lma5g) {
      console['log']('buff:::', qskvt, zir21h, fup9b7['fileNativeDir'] + '///' + fup9b7['fileListName']), lma5g(qskvt, ct30es, zir21h);
    }, o5amg['clearRes'] = function (_2hzi, _izrl2) {
      _izrl2 === void 0x0 && (_izrl2 = ![]);var p0b3cu = this;p0b3cu['clearRes'](_2hzi, _izrl2);var axj6k = fup9b7['getFileInfo'](_2hzi);if (axj6k && (_2hzi['indexOf']('http://') != -0x1 || _2hzi['indexOf']('https://') != -0x1)) {
        var swktvq = axj6k['md5'],
            jmx5 = fup9b7['getFileNativePath'](swktvq);fup9b7['remove'](jmx5);
      }
    }, qk6xjw['onReadNativeCallBack'] = function (z1hr2, e0ctvs, ue3c, vk6tqw, lzoim_, h12rzi, xjgak, jk6g, go_l5m) {
      vk6tqw === void 0x0 && (vk6tqw = !![]), h12rzi === void 0x0 && (h12rzi = ![]), jk6g === void 0x0 && (jk6g = 0x0);if (!jk6g) {
        var g5mxaj;if (ue3c == 'json' || ue3c == 'atlas') g5mxaj = ub97pf['getJson'](go_l5m['data']);else ue3c == 'xml' ? g5mxaj = zih2_['parseXMLFromString'](go_l5m['data']) : g5mxaj = go_l5m['data'];xjgak['onLoaded'](g5mxaj), !ub97pf['isZiYu'] && ub97pf['isPosMsgYu'] && ue3c != 'arraybuffer' && wx['postMessage']({ 'url': e0ctvs, 'data': g5mxaj, 'isLoad': !![] });
      } else jk6g == 0x1 && ub97pf['EnvConfig']['load']['call'](xjgak, e0ctvs, ue3c, vk6tqw, lzoim_, h12rzi);
    }, n1y$8h(qk6xjw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qk6xjw;
  }(),
      fup9b7 = function (b9up3) {
    function n8$() {
      n8$['__super']['call'](this);;
    }return svwtkq(n8$, 'laya.wx.mini.MiniFileMgr', b9up3), n8$['isLoadFile'] = function (_loizm) {
      return n8$['_fileTypeArr']['indexOf'](_loizm) != -0x1 ? !![] : ![];
    }, n8$['getFileInfo'] = function (q6wjkx) {
      var b79fup = q6wjkx['split']('?')[0x0],
          i5mo = n8$['filesListObj'][b79fup];if (i5mo == null) return null;else return i5mo;return null;
    }, n8$['onFileUpdate'] = function (t3s0, hn8r12) {
      var _5og = t3s0['split']('/'),
          tecs3 = _5og[_5og['length'] - 0x1],
          mjg5a = n8$['getFileInfo'](hn8r12);if (mjg5a == null) n8$['onSaveFile'](hn8r12, tecs3);else {
        if (mjg5a['readyUrl'] != hn8r12) n8$['remove'](tecs3, hn8r12);
      }
    }, n8$['exits'] = function (n1r, es3cu0) {
      var w6tvq = n8$['getFileNativePath'](n1r);n8$['fs']['getFileInfo']({ 'filePath': w6tvq, 'success': function (fu3p) {
          es3cu0 != null && es3cu0['runWith']([0x0, fu3p]);
        }, 'fail': function (o5i_l) {
          es3cu0 != null && es3cu0['runWith']([0x1, o5i_l]);
        } });
    }, n8$['read'] = function (qktvws, ny8$, c3ubp0, l_m5g) {
      ny8$ === void 0x0 && (ny8$ = 'ascill'), l_m5g === void 0x0 && (l_m5g = '');var e0tcs3;l_m5g != '' ? e0tcs3 = n8$['getFileNativePath'](qktvws) : e0tcs3 = qktvws, n8$['fs']['readFile']({ 'filePath': e0tcs3, 'encoding': ny8$, 'success': function (sq0t) {
          c3ubp0 != null && c3ubp0['runWith']([0x0, sq0t]);
        }, 'fail': function (k6ag) {
          if (k6ag && l_m5g != '') n8$['down'](l_m5g, ny8$, c3ubp0, l_m5g);else c3ubp0 != null && c3ubp0['runWith']([0x1]);
        } });
    }, n8$['readNativeFile'] = function (qswvt, rh21zi) {
      n8$['fs']['readFile']({ 'filePath': qswvt, 'encoding': '', 'success': function (pcub3) {
          rh21zi != null && rh21zi['runWith']([0x0]);
        }, 'fail': function (h18$ny) {
          rh21zi != null && rh21zi['runWith']([0x1]);
        } });
    }, n8$['down'] = function (g5maj, rnh2z1, p9ufb, kj) {
      rnh2z1 === void 0x0 && (rnh2z1 = 'ascill'), kj === void 0x0 && (kj = '');var _miz = n8$['getFileNativePath'](kj),
          lg5oam = n8$['wxdown']({ 'url': g5maj, 'filePath': _miz, 'success': function (kvqt6w) {
          if (kvqt6w['statusCode'] === 0xc8) n8$['readFile'](kvqt6w['filePath'], rnh2z1, p9ufb, kj);
        }, 'fail': function (mxjg) {
          p9ufb != null && p9ufb['runWith']([0x1, mxjg]);
        } });lg5oam['onProgressUpdate'](function (sqv0te) {
        p9ufb != null && p9ufb['runWith']([0x2, sqv0te['progress']]);
      });
    }, n8$['readFile'] = function (vtsw, sct3e, pcu03e, zloi) {
      sct3e === void 0x0 && (sct3e = 'ascill'), zloi === void 0x0 && (zloi = ''), n8$['fs']['readFile']({ 'filePath': vtsw, 'encoding': sct3e, 'success': function (eu0cs) {
          if (vtsw['indexOf']('http://') != -0x1 || vtsw['indexOf']('https://') != -0x1) n8$['onFileUpdate'](vtsw, zloi);pcu03e != null && pcu03e['runWith']([0x0, eu0cs]);
        }, 'fail': function (g5olm_) {
          if (g5olm_) pcu03e != null && pcu03e['runWith']([0x1, g5olm_]);
        } });
    }, n8$['downImg'] = function (g5jmo, h8n1y, o5gja) {
      o5gja === void 0x0 && (o5gja = '');var k6jaw = n8$['wxdown']({ 'url': g5jmo, 'success': function (izlr2) {
          izlr2['statusCode'] === 0xc8 && n8$['copyFile'](izlr2['tempFilePath'], o5gja, h8n1y);
        }, 'fail': function (jka6xw) {
          h8n1y != null && h8n1y['runWith']([0x1, jka6xw]);
        } });
    }, n8$['copyFile'] = function (uce30p, b9c, pe0c3) {
      var a65xgj = uce30p['split']('/'),
          qvxk = a65xgj[a65xgj['length'] - 0x1],
          l5o_g = b9c['split']('?')[0x0],
          qktw6v = n8$['getFileInfo'](b9c),
          _5gmlo = n8$['getFileNativePath'](qvxk);n8$['fs']['copyFile']({ 'srcPath': uce30p, 'destPath': _5gmlo, 'success': function (oi_m5l) {
          if (!qktw6v) n8$['onSaveFile'](b9c, qvxk), pe0c3 != null && pe0c3['runWith']([0x0]);else {
            if (qktw6v['readyUrl'] != b9c) n8$['remove'](qvxk, b9c, pe0c3);
          }
        }, 'fail': function (qet0) {
          pe0c3 != null && pe0c3['runWith']([0x1, qet0]);
        } });
    }, n8$['getFileNativePath'] = function ($8n2h1) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $8n2h1;
    }, n8$['remove'] = function (r1n2h8, i_h2, bf3p) {
      i_h2 === void 0x0 && (i_h2 = '');var i2lz = n8$['getFileInfo'](i_h2),
          bcp03u = n8$['getFileNativePath'](i2lz['md5']);amo['loader']['clearRes'](i2lz['readyUrl']), n8$['fs']['unlink']({ 'filePath': bcp03u, 'success': function (tqwks) {
          if (i_h2 != '') n8$['onSaveFile'](i_h2, r1n2h8);bf3p != null && bf3p['runWith']([0x0]);
        }, 'fail': function (tk6w) {} });
    }, n8$['onSaveFile'] = function (k6x, log5am) {
      var gmo5_l = k6x['split']('?')[0x0];n8$['filesListObj'][gmo5_l] = { 'md5': log5am, 'readyUrl': k6x }, n8$['fs']['writeFile']({ 'filePath': n8$['fileNativeDir'] + '/' + n8$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n8$['filesListObj']), 'success': function (a6gjxk) {
          console['log']('写入测试测试成功：', a6gjxk);
        }, 'fail': function (e0upc) {
          console['log']('写入测试测试失败：', e0upc);
        } });
    }, n8$['existDir'] = function (eu30cp, n18) {
      n8$['fs']['mkdir']({ 'dirPath': eu30cp, 'success': function (om5agj) {
          n18 != null && n18['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (bcp3u9) {
          if (bcp3u9['errMsg']['indexOf']('file already exists') != -0x1) n8$['readSync'](n8$['fileListName'], 'utf8', n18);else n18 != null && n18['runWith']([0x1, bcp3u9]);
        } });
    }, n8$['readSync'] = function (qkvs, mg5ax, z2rhi_, c9ub3p) {
      mg5ax === void 0x0 && (mg5ax = 'ascill'), c9ub3p === void 0x0 && (c9ub3p = '');var m_io5l = n8$['getFileNativePath'](qkvs),
          _zlri;try {
        _zlri = n8$['fs']['readFileSync'](m_io5l), z2rhi_ != null && z2rhi_['runWith']([0x0, { 'data': _zlri }]);
      } catch (l_2irz) {
        z2rhi_ != null && z2rhi_['runWith']([0x1]);
      }
    }, n8$['readCache'] = function () {}, n8$['writeCache'] = function (m5g_ol) {
      var bpf479 = readyUrl['split']('?')[0x0];n8$['filesListObj'][bpf479] = { 'md5': md5Name, 'readyUrl': readyUrl }, n8$['fs']['writeFile']({ 'filePath': n8$['fileNativeDir'] + '/' + n8$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n8$['filesListObj']), 'success': function (v0sqe) {}, 'fail': function (r1h2n8) {} });
    }, n8$['setNativeFileDir'] = function (rzn12h) {
      n8$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + rzn12h;
    }, n8$['filesListObj'] = {}, n8$['fileNativeDir'] = null, n8$['fileListName'] = 'layaairfiles.txt', n8$['ziyuFileData'] = {}, n1y$8h(n8$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n8$;
  }(t0svce),
      ilzo_m = function (pf4b79) {
    function p47() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], p47['__super']['call'](this), this['_sound'] = p47['_createSound'](), this['_chanell'] = new lzmi_(this['_sound']);
    }svwtkq(p47, 'laya.wx.mini.MiniSound', pf4b79);var qx6kvw = p47['prototype'];return qx6kvw['load'] = function (q0tvse) {
      var ga6x5j = this;q0tvse = bupf97['formatURL'](q0tvse), this['url'] = q0tvse;if (p47['_audioCache'][q0tvse]) {
        this['event']('complete');return;
      }function _li5m() {
        if (p47['_null'] != undefined) ga6x5j['_sound']['onCanplay'](p47['_null']), ga6x5j['_sound']['onError'](p47['_null']);else try {
          ga6x5j['_sound']['onCanplay'](null), ga6x5j['_sound']['onError'](null), p47['_null'] = null;
        } catch (h1yn8) {
          console['warn']('[wxmini] _clearSound:' + h1yn8), ga6x5j['_sound']['onCanplay'](upfb39), ga6x5j['_sound']['onError'](upfb39), p47['_null'] = upfb39;
        }
      }function zh1r2i() {
        vkw6q['loaded'] = !![], vkw6q['event']('complete'), p47['_audioCache'][vkw6q['url']] = vkw6q;
      }function pf39ub(skwqt) {
        console['error']('errCode=' + skwqt['errCode'] + '  errMsg=' + skwqt['errMsg']), vkw6q['event']('error');
      }function upfb39() {}this['_sound']['onCanplay'](zh1r2i), this['_sound']['onError'](pf39ub), this['_sound']['src'] = q0tvse;var vkw6q = this;
    }, qx6kvw['play'] = function (wtqev, stweqv) {
      wtqev === void 0x0 && (wtqev = 0x0), stweqv === void 0x0 && (stweqv = 0x0);var j65gax, gl_m5o;if (this['url'] == vse['_tMusic']) {
        if (!p47['_musicAudio']) p47['_musicAudio'] = this['_sound'];j65gax = p47['_musicAudio'], gl_m5o = this['_chanell'];
      } else j65gax = this['_sound'], gl_m5o = this['_chanell'];return j65gax['src'] = this['url'], j65gax['startTime'] = 0x0, gl_m5o['isStopped'] && (gl_m5o['url'] = this['url'], gl_m5o['loops'] = stweqv, gl_m5o['startTime'] = wtqev, gl_m5o['play'](), vse['addChannel'](gl_m5o)), gl_m5o;
    }, qx6kvw['dispose'] = function () {
      var _l5mog = p47['_audioCache'][this['url']];_l5mog && (_l5mog['src'] = '', delete p47['_audioCache'][this['url']]);
    }, k6xjwa(0x0, qx6kvw, 'duration', function () {
      return this['_sound']['duration'];
    }), p47['_createSound'] = function () {
      p47['_id']++;var tsecv0 = ub97pf['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return tsecv0;
    }, p47['_musicAudio'] = null, p47['_id'] = 0x0, p47['_audioCache'] = {}, p47['_null'] = undefined, p47;
  }(t0svce),
      lzmi_ = function (iml_zo) {
    function lo5_i(c9bp3u) {
      this['_audio'] = null, this['_onEnd'] = null, lo5_i['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = c9bp3u, this['_onEnd'] = zih2_['bind'](this['__onEnd'], this), c9bp3u['onEnded'](this['_onEnd']);
    }svwtkq(lo5_i, 'laya.wx.mini.MiniSoundChannel', iml_zo);var l5oi_m = lo5_i['prototype'];return l5oi_m['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (amo['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, l5oi_m['__onNull'] = function () {}, l5oi_m['play'] = function () {
      this['isStopped'] = ![], vse['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, l5oi_m['stop'] = function () {
      this['isStopped'] = !![], vse['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, l5oi_m['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, l5oi_m['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vse['addChannel'](this), this['_audio']['play']();
    }, k6xjwa(0x0, l5oi_m, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), k6xjwa(0x0, l5oi_m, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), k6xjwa(0x0, l5oi_m, 'volume', function () {
      return 0x1;
    }, function (hn821) {}), lo5_i['_null'] = undefined, lo5_i;
  }(stvwe),
      a65gjx = function () {
    function jwkq6() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = ub97pf['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }svwtkq(jwkq6, 'laya.wx.mini.MiniVideo');var t6wqv = jwkq6['prototype'];return t6wqv['on'] = function (xjmag, kax6g, evwq) {
      if (xjmag == 'loadedmetadata') this['onPlayFunc'] = evwq['bind'](kax6g), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else xjmag == 'ended' && (this['onEndedFunC'] = evwq['bind'](kax6g), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, t6wqv['onTimeUpdateFunc'] = function (z_hir2) {
      this['position'] = z_hir2['position'], this['_duration'] = z_hir2['duration'];
    }, t6wqv['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, t6wqv['onended'] = function (cuep30, vec0st) {
      this['onEndedFunC'] = vec0st['bind'](cuep30), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, t6wqv['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, t6wqv['off'] = function (cst0v, kg6jax, u3c9pb) {
      if (cst0v == 'loadedmetadata') this['onPlayFunc'] = u3c9pb['bind'](kg6jax), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else cst0v == 'ended' && (this['onEndedFunC'] = u3c9pb['bind'](kg6jax), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, t6wqv['load'] = function (etqvs0) {
      if (!this['videoElement']) return;this['videoElement']['src'] = etqvs0;
    }, t6wqv['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, t6wqv['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, t6wqv['size'] = function (sev0tq, jqx6w) {
      if (!this['videoElement']) return;this['videoElement']['width'] = sev0tq, this['videoElement']['height'] = jqx6w;
    }, t6wqv['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, t6wqv['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, k6xjwa(0x0, t6wqv, 'duration', function () {
      return this['_duration'];
    }), k6xjwa(0x0, t6wqv, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (kwqjx) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = kwqjx;
    }), k6xjwa(0x0, t6wqv, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), k6xjwa(0x0, t6wqv, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), k6xjwa(0x0, t6wqv, 'ended', function () {
      return this['videoend'];
    }), k6xjwa(0x0, t6wqv, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (kwjq6) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = kwjq6;
    }), k6xjwa(0x0, t6wqv, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (bupf93) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = bupf93;
    }), k6xjwa(0x0, t6wqv, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (gm5l) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = gm5l;
    }), k6xjwa(0x0, t6wqv, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), k6xjwa(0x0, t6wqv, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (svec0) {
      if (!this['videoElement']) return;this['videoElement']['x'] = svec0;
    }), k6xjwa(0x0, t6wqv, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (vx6w) {
      if (!this['videoElement']) return;this['videoElement']['y'] = vx6w;
    }), k6xjwa(0x0, t6wqv, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), k6xjwa(0x0, t6wqv, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (hriz21) {
      if (!this['videoElement']) return;this['videoElement']['src'] = hriz21;
    }), k6xjwa(0x0, t6wqv, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (_5ml) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = _5ml;
    }), k6xjwa(0x0, t6wqv, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (jgxka6) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = jgxka6;
    }), jwkq6;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var oa5l in Laya) {
    var zh1i = Laya[oa5l];zh1i && zh1i['__isclass'] && (exports[oa5l] = zh1i);
  }
});