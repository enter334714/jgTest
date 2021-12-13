var u = wx.$x;
(function (window, document, smziox) {
  var cfljn9 = smziox['un'],
      vujdnc = smziox['uns'],
      ngdvj = smziox['static'],
      jf9cu = smziox['class'],
      qhr_ap = smziox['getset'],
      vu4dn = smziox['__newvec'],
      m526zo = laya['utils']['Browser'],
      vjundg = laya['events']['Event'],
      mzs5x = laya['events']['EventDispatcher'],
      dgisx = laya['resource']['HTMLImage'],
      zxsm5 = laya['utils']['Handler'],
      uncvj = laya['display']['Input'],
      dnj = laya['net']['Loader'],
      gundv4 = laya['maths']['Matrix'],
      xs4moi = laya['renders']['Render'],
      z5om2s = laya['utils']['RunDriver'],
      fjnlc9 = laya['media']['Sound'],
      o5zxm = laya['media']['SoundChannel'],
      dugiv = laya['media']['SoundManager'],
      ufjn9 = laya['display']['Stage'],
      so5z2m = laya['net']['URL'],
      y7l$98 = laya['utils']['Utils'],
      lc89f7 = function () {
    function undvjc() {}return jf9cu(undvjc, 'laya.wx.mini.MiniAdpter'), undvjc['getJson'] = function (ismg) {
      return JSON['parse'](ismg);
    }, undvjc['init'] = function (gd4uiv, ktw361) {
      gd4uiv === void 0x0 && (gd4uiv = ![]), ktw361 === void 0x0 && (ktw361 = ![]);if (undvjc['_inited']) return;undvjc['window'] = window;if (undvjc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;undvjc['_inited'] = !![], undvjc['isZiYu'] = ktw361, undvjc['isPosMsgYu'] = gd4uiv, undvjc['EnvConfig'] = {}, !undvjc['isZiYu'] && (mso['setNativeFileDir']('/layaairGame'), mso['existDir'](mso['fileNativeDir'], zxsm5['create'](undvjc, undvjc['onMkdirCallBack']))), undvjc['window']['focus'] = function () {}, smziox['getUrlPath'] = function () {}, undvjc['window']['logtime'] = function (hqrap_) {}, undvjc['window']['alertTimeLog'] = function (hepk0b) {}, undvjc['window']['resetShareInfo'] = function () {}, undvjc['window']['CanvasRenderingContext2D'] = function () {}, undvjc['window']['CanvasRenderingContext2D']['prototype'] = undvjc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], undvjc['window']['document']['body']['appendChild'] = function () {}, undvjc['EnvConfig']['pixelRatioInt'] = 0x0, z5om2s['getPixelRatio'] = undvjc['pixelRatio'], undvjc['_preCreateElement'] = m526zo['createElement'], m526zo['createElement'] = undvjc['createElement'], z5om2s['createShaderCondition'] = undvjc['createShaderCondition'], y7l$98['parseXMLFromString'] = undvjc['parseXMLFromString'], uncvj['_createInputElement'] = wk1b03['_createInputElement'], undvjc['EnvConfig']['load'] = dnj['prototype']['load'], dnj['prototype']['load'] = ae_pq['prototype']['load'], undvjc['isZiYu'] && gd4uiv && wx['onMessage'](function (qehp) {
        qehp['isLoad'] && (mso['ziyuFileData'][qehp['url']] = qehp['data']);
      });
    }, undvjc['onMkdirCallBack'] = function (l9$87, dix4) {
      if (!l9$87) mso['filesListObj'] = JSON['parse'](dix4['data']);
    }, undvjc['pixelRatio'] = function () {
      if (!undvjc['EnvConfig']['pixelRatioInt']) try {
        var fl87y9 = wx['getSystemInfoSync']();return undvjc['EnvConfig']['pixelRatioInt'] = fl87y9['pixelRatio'], fl87y9 = fl87y9, fl87y9['pixelRatio'];
      } catch (smgx4i) {}return undvjc['EnvConfig']['pixelRatioInt'];
    }, undvjc['createElement'] = function (bkw31t) {
      if (bkw31t == 'canvas') {
        var p_heaq;return undvjc['idx'] == 0x1 ? undvjc['isZiYu'] ? (p_heaq = sharedCanvas, p_heaq['style'] = {}) : p_heaq = window['canvas'] : p_heaq = window['wx']['createCanvas'](), undvjc['idx']++, p_heaq;
      } else {
        if (bkw31t == 'textarea' || bkw31t == 'input') return undvjc['onCreateInput'](bkw31t);else {
          if (bkw31t == 'div') {
            var vudi4g = undvjc['_preCreateElement'](bkw31t);return vudi4g['contains'] = function (dvu4g) {
              return null;
            }, vudi4g['removeChild'] = function (ph0b) {}, vudi4g;
          } else return undvjc['_preCreateElement'](bkw31t);
        }
      }
    }, undvjc['onCreateInput'] = function (w0ebk1) {
      var t1bw3k = undvjc['_preCreateElement'](w0ebk1);return t1bw3k['focus'] = wk1b03['wxinputFocus'], t1bw3k['blur'] = wk1b03['wxinputblur'], t1bw3k['style'] = {}, t1bw3k['value'] = 0x0, t1bw3k['parentElement'] = {}, t1bw3k['placeholder'] = {}, t1bw3k['type'] = {}, t1bw3k['setColor'] = function (ncudv) {}, t1bw3k['setType'] = function (jdng) {}, t1bw3k['setFontFace'] = function (zt3562) {}, t1bw3k['addEventListener'] = function (h_ea) {}, t1bw3k['contains'] = function (p0b) {
        return null;
      }, t1bw3k['removeChild'] = function (e_ha) {}, t1bw3k;
    }, undvjc['createShaderCondition'] = function (t5z62o) {
      var wk10 = this,
          jung = function () {
        var ly$79 = t5z62o;return wk10[t5z62o['replace']('this.', '')];
      };return jung;
    }, undvjc['EnvConfig'] = null, undvjc['window'] = null, undvjc['_preCreateElement'] = null, undvjc['_inited'] = ![], undvjc['wxRequest'] = null, undvjc['systemInfo'] = null, undvjc['version'] = '0.0.1', undvjc['isZiYu'] = ![], undvjc['isPosMsgYu'] = ![], undvjc['parseXMLFromString'] = function (s5mox) {
      var mo5s, gix4s;s5mox = s5mox['replace'](/>\s+</g, '><');try {
        mo5s = new window['Parser']['DOMParser']()['parseFromString'](s5mox, 'text/xml');
      } catch (bp0he) {
        throw '需要引入xml解析库文件';
      }return mo5s;
    }, undvjc['idx'] = 0x1, undvjc;
  }(),
      ucjnvf = function () {
    function t6z35() {}jf9cu(t6z35, 'laya.wx.mini.MiniImage');var pa_e = t6z35['prototype'];return pa_e['_loadImage'] = function (t3kw6) {
      var epqh_a = this,
          xm4osi = ![];t3kw6['indexOf']('layaNativeDir/') == -0x1 && (xm4osi = !![], t3kw6 = so5z2m['formatURL'](t3kw6));if (!mso['getFileInfo'](t3kw6)) {
        if (t3kw6['indexOf']('http://') != -0x1 || t3kw6['indexOf']('https://') != -0x1) mso['downImg'](t3kw6, new zxsm5(t6z35, t6z35['onDownImgCallBack'], [t3kw6, epqh_a]), t3kw6);else t6z35['onCreateImage'](t3kw6, epqh_a, !![]);
      } else t6z35['onCreateImage'](t3kw6, epqh_a, !xm4osi);
    }, t6z35['onDownImgCallBack'] = function (sozxmi, kbw0he, l879fc) {
      if (!l879fc) t6z35['onCreateImage'](sozxmi, kbw0he);else kbw0he['onError'](null);
    }, t6z35['onCreateImage'] = function (g4uvn, b03w, udjvcn) {
      udjvcn === void 0x0 && (udjvcn = ![]);var ahp_e;if (!udjvcn) {
        var jfc7 = mso['getFileInfo'](g4uvn),
            so25 = jfc7['md5'];ahp_e = mso['getFileNativePath'](so25);
      } else ahp_e = g4uvn;if (b03w['imgCache'] == null) b03w['imgCache'] = {};var zt6253;function disx4() {
        zt6253['onload'] = null, zt6253['onerror'] = null, delete b03w['imgCache'][g4uvn];
      };var mxiso4 = function () {
        disx4(), b03w['onLoaded'](zt6253);
      },
          l98cf7 = function () {
        disx4(), b03w['event']('error', 'Load image failed');
      };b03w['_type'] == 'nativeimage' ? (zt6253 = new m526zo['window']['Image'](), zt6253['crossOrigin'] = '', zt6253['onload'] = mxiso4, zt6253['onerror'] = l98cf7, zt6253['src'] = ahp_e, b03w['imgCache'][g4uvn] = zt6253) : new dgisx['create'](ahp_e, { 'onload': mxiso4, 'onerror': l98cf7, 'onCreate': function (ngd4) {
          zt6253 = ngd4, b03w['imgCache'][g4uvn] = ngd4;
        } });
    }, t6z35;
  }(),
      wk1b03 = function () {
    function idu4gv() {}return jf9cu(idu4gv, 'laya.wx.mini.MiniInput'), idu4gv['_createInputElement'] = function () {
      uncvj['_initInput'](uncvj['area'] = m526zo['createElement']('textarea')), uncvj['_initInput'](uncvj['input'] = m526zo['createElement']('input')), uncvj['inputContainer'] = m526zo['createElement']('div'), uncvj['inputContainer']['style']['position'] = 'absolute', uncvj['inputContainer']['style']['zIndex'] = 0x186a0, m526zo['container']['appendChild'](uncvj['inputContainer']), uncvj['inputContainer']['setPos'] = function (gixsd, t5z6o2) {
        uncvj['inputContainer']['style']['left'] = gixsd + 'px', uncvj['inputContainer']['style']['top'] = t5z6o2 + 'px';
      }, smziox['stage']['on']('resize', null, idu4gv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sxm5zo) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), dugiv['_soundClass'] = wk3t61, dugiv['_musicClass'] = wk3t61;
    }, idu4gv['_onStageResize'] = function () {
      var h0pea = smziox['stage']['_canvasTransform']['identity']();h0pea['scale'](m526zo['width'] / xs4moi['canvas']['width'] / z5om2s['getPixelRatio'](), m526zo['height'] / xs4moi['canvas']['height'] / z5om2s['getPixelRatio']());
    }, idu4gv['wxinputFocus'] = function (jvdnc) {
      var c89lf = uncvj['inputElement']['target'];if (c89lf && !c89lf['editable']) return;lc89f7['window']['wx']['offKeyboardConfirm'](), lc89f7['window']['wx']['offKeyboardInput'](), lc89f7['window']['wx']['showKeyboard']({ 'defaultValue': c89lf['text'], 'maxLength': c89lf['maxChars'], 'multiple': c89lf['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ljf9nc) {}, 'fail': function (jnvdg) {} }), lc89f7['window']['wx']['onKeyboardConfirm'](function (h0bkp) {
        var sxzimo = h0bkp ? h0bkp['value'] : '';c89lf['text'] = sxzimo, c89lf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), lc89f7['window']['wx']['onKeyboardInput'](function (eah0pq) {
        var xi4sd = eah0pq ? eah0pq['value'] : '';if (!c89lf['multiline']) {
          if (xi4sd['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }c89lf['text'] = xi4sd, c89lf['event']('input');
      });
    }, idu4gv['inputEnter'] = function () {
      uncvj['inputElement']['target']['focus'] = ![];
    }, idu4gv['wxinputblur'] = function () {
      idu4gv['hideKeyboard']();
    }, idu4gv['hideKeyboard'] = function () {
      lc89f7['window']['wx']['offKeyboardConfirm'](), lc89f7['window']['wx']['offKeyboardInput'](), lc89f7['window']['wx']['hideKeyboard']({ 'success': function (heb0p) {
          console['log']('隐藏键盘');
        }, 'fail': function (bhepk0) {
          console['log']('隐藏键盘出错:' + (bhepk0 ? bhepk0['errMsg'] : ''));
        } });
    }, idu4gv;
  }(),
      ae_pq = function () {
    function eph0ba() {}jf9cu(eph0ba, 'laya.wx.mini.MiniLoader');var k1t6w3 = eph0ba['prototype'];return k1t6w3['load'] = function (gud4n, hek0bw, fvucj, hpe0qa, e_pqah) {
      fvucj === void 0x0 && (fvucj = !![]), e_pqah === void 0x0 && (e_pqah = ![]);var dug4vn = this;dug4vn['_url'] = gud4n;if (gud4n['indexOf']('data:image') === 0x0) dug4vn['_type'] = hek0bw = 'image';else dug4vn['_type'] = hek0bw || (hek0bw = dug4vn['getTypeFromUrl'](gud4n));dug4vn['_cache'] = fvucj, dug4vn['_data'] = null;var ndjgv = 'ascii';if (gud4n['indexOf']('.fnt') != -0x1) ndjgv = 'utf8';else hek0bw == 'arraybuffer' && (ndjgv = '');;var vgu4dn = y7l$98['getFileExtension'](gud4n);if (eph0ba['_fileTypeArr']['indexOf'](vgu4dn) != -0x1) lc89f7['EnvConfig']['load']['call'](this, gud4n, hek0bw, fvucj, hpe0qa, e_pqah);else {
        if (!mso['getFileInfo'](gud4n)) {
          if (gud4n['indexOf']('layaNativeDir/') != -0x1) {
            if (lc89f7['isZiYu']) {
              var vg4ud = mso['ziyuFileData'][gud4n];dug4vn['onLoaded'](vg4ud);return;
            } else {
              cosnole['log']('read read'), mso['read'](gud4n, ndjgv, new zxsm5(eph0ba, eph0ba['onReadNativeCallBack'], [ndjgv, gud4n, hek0bw, fvucj, hpe0qa, e_pqah, dug4vn]));return;
            }
          }if (so5z2m['rootPath'] == '') var igvxd = gud4n;else igvxd = gud4n['split'](so5z2m['rootPath'])[0x0];gud4n['indexOf']('http://') != -0x1 || gud4n['indexOf']('https://') != -0x1 ? lc89f7['EnvConfig']['load']['call'](dug4vn, gud4n, hek0bw, fvucj, hpe0qa, e_pqah) : mso['readFile'](igvxd, ndjgv, new zxsm5(eph0ba, eph0ba['onReadNativeCallBack'], [ndjgv, gud4n, hek0bw, fvucj, hpe0qa, e_pqah, dug4vn]), gud4n);
        } else lc89f7['EnvConfig']['load']['call'](this, gud4n, hek0bw, fvucj, hpe0qa, e_pqah);
      }
    }, k1t6w3['resMgrLoad'] = function (bpe0ha, p0ehaq, lc7f98, y8lf, ujfn, epab0h, gd4vui) {
      lc7f98 === void 0x0 && (lc7f98 = 0x0), y8lf === void 0x0 && (y8lf = ![]), ujfn === void 0x0 && (ujfn = ![]), epab0h === void 0x0 && (epab0h = 0x0), gd4vui === void 0x0 && (gd4vui = 0x3), bpe0ha['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bpe0ha), lc89f7['EnvConfig']['resMgrLoad'](bpe0ha, (yl$7, x4som, hep0k) => {
        eph0ba['prototype']['resMgrLoadCallBack'](yl$7, x4som, hep0k, p0ehaq);
      }, lc7f98, y8lf, ujfn, epab0h, gd4vui);
    }, k1t6w3['resMgrLoadCallBack'] = function (gvd4x, w10ebk, o2m6, h0peab) {
      console['log']('buff:::', gvd4x, o2m6, mso['fileNativeDir'] + '///' + mso['fileListName']), h0peab(gvd4x, w10ebk, o2m6);
    }, k1t6w3['clearRes'] = function (bh0ape, c9jl7f) {
      c9jl7f === void 0x0 && (c9jl7f = ![]);var jundvg = this;jundvg['clearRes'](bh0ape, c9jl7f);var t312w = mso['getFileInfo'](bh0ape);if (t312w && (bh0ape['indexOf']('http://') != -0x1 || bh0ape['indexOf']('https://') != -0x1)) {
        var cjfvn = t312w['md5'],
            duvg4 = mso['getFileNativePath'](cjfvn);mso['remove'](duvg4);
      }
    }, eph0ba['onReadNativeCallBack'] = function (l9ncjf, beap0h, zmos5, judvng, y87l9$, w1t3b, u9cn, cj9nfl, smxoi4) {
      judvng === void 0x0 && (judvng = !![]), w1t3b === void 0x0 && (w1t3b = ![]), cj9nfl === void 0x0 && (cj9nfl = 0x0);if (!cj9nfl) {
        var kep;if (zmos5 == 'json' || zmos5 == 'atlas') kep = lc89f7['getJson'](smxoi4['data']);else zmos5 == 'xml' ? kep = y7l$98['parseXMLFromString'](smxoi4['data']) : kep = smxoi4['data'];u9cn['onLoaded'](kep), !lc89f7['isZiYu'] && lc89f7['isPosMsgYu'] && zmos5 != 'arraybuffer' && wx['postMessage']({ 'url': beap0h, 'data': kep, 'isLoad': !![] });
      } else cj9nfl == 0x1 && lc89f7['EnvConfig']['load']['call'](u9cn, beap0h, zmos5, judvng, y87l9$, w1t3b);
    }, ngdvj(eph0ba, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), eph0ba;
  }(),
      mso = function (zmo2s) {
    function lyf879() {
      lyf879['__super']['call'](this);;
    }return jf9cu(lyf879, 'laya.wx.mini.MiniFileMgr', zmo2s), lyf879['isLoadFile'] = function (zmis) {
      return lyf879['_fileTypeArr']['indexOf'](zmis) != -0x1 ? !![] : ![];
    }, lyf879['getFileInfo'] = function (qaph_r) {
      var divgu = qaph_r['split']('?')[0x0],
          xg4sm = lyf879['filesListObj'][divgu];if (xg4sm == null) return null;else return xg4sm;return null;
    }, lyf879['onFileUpdate'] = function (hbea0p, gsmxi) {
      var o5xzs = hbea0p['split']('/'),
          dv4gnu = o5xzs[o5xzs['length'] - 0x1],
          ehabp = lyf879['getFileInfo'](gsmxi);if (ehabp == null) lyf879['onSaveFile'](gsmxi, dv4gnu);else {
        if (ehabp['readyUrl'] != gsmxi) lyf879['remove'](dv4gnu, gsmxi);
      }
    }, lyf879['exits'] = function (eb0kw, so2mz) {
      var phbk = lyf879['getFileNativePath'](eb0kw);lyf879['fs']['getFileInfo']({ 'filePath': phbk, 'success': function (ucnvjf) {
          so2mz != null && so2mz['runWith']([0x0, ucnvjf]);
        }, 'fail': function (cl79f) {
          so2mz != null && so2mz['runWith']([0x1, cl79f]);
        } });
    }, lyf879['read'] = function (c87l9, l7cf89, xi4dgs, jnugd) {
      l7cf89 === void 0x0 && (l7cf89 = 'ascill'), jnugd === void 0x0 && (jnugd = '');var w63tk1;jnugd != '' ? w63tk1 = lyf879['getFileNativePath'](c87l9) : w63tk1 = c87l9, lyf879['fs']['readFile']({ 'filePath': w63tk1, 'encoding': l7cf89, 'success': function (jnuvg) {
          xi4dgs != null && xi4dgs['runWith']([0x0, jnuvg]);
        }, 'fail': function (jndcvu) {
          if (jndcvu && jnugd != '') lyf879['down'](jnugd, l7cf89, xi4dgs, jnugd);else xi4dgs != null && xi4dgs['runWith']([0x1]);
        } });
    }, lyf879['readNativeFile'] = function (mszxo5, y79lf) {
      lyf879['fs']['readFile']({ 'filePath': mszxo5, 'encoding': '', 'success': function (lcj9nf) {
          y79lf != null && y79lf['runWith']([0x0]);
        }, 'fail': function (fju9cn) {
          y79lf != null && y79lf['runWith']([0x1]);
        } });
    }, lyf879['down'] = function (u9cnj, j9cfu, keh0w, t562zo) {
      j9cfu === void 0x0 && (j9cfu = 'ascill'), t562zo === void 0x0 && (t562zo = '');var p0kbhe = lyf879['getFileNativePath'](t562zo),
          w361kt = lyf879['wxdown']({ 'url': u9cnj, 'filePath': p0kbhe, 'success': function (sdx4) {
          if (sdx4['statusCode'] === 0xc8) lyf879['readFile'](sdx4['filePath'], j9cfu, keh0w, t562zo);
        }, 'fail': function (s2ozm5) {
          keh0w != null && keh0w['runWith']([0x1, s2ozm5]);
        } });w361kt['onProgressUpdate'](function (jvdncu) {
        keh0w != null && keh0w['runWith']([0x2, jvdncu['progress']]);
      });
    }, lyf879['readFile'] = function (vfj, ra_ph, _ape, dvg4un) {
      ra_ph === void 0x0 && (ra_ph = 'ascill'), dvg4un === void 0x0 && (dvg4un = ''), lyf879['fs']['readFile']({ 'filePath': vfj, 'encoding': ra_ph, 'success': function (tw1b3k) {
          if (vfj['indexOf']('http://') != -0x1 || vfj['indexOf']('https://') != -0x1) lyf879['onFileUpdate'](vfj, dvg4un);_ape != null && _ape['runWith']([0x0, tw1b3k]);
        }, 'fail': function (jc9f7) {
          if (jc9f7) _ape != null && _ape['runWith']([0x1, jc9f7]);
        } });
    }, lyf879['downImg'] = function (k013bw, rah_p, b3t1k) {
      b3t1k === void 0x0 && (b3t1k = '');var tb1k3 = lyf879['wxdown']({ 'url': k013bw, 'success': function (b3tk) {
          b3tk['statusCode'] === 0xc8 && lyf879['copyFile'](b3tk['tempFilePath'], b3t1k, rah_p);
        }, 'fail': function (lfj7c) {
          rah_p != null && rah_p['runWith']([0x1, lfj7c]);
        } });
    }, lyf879['copyFile'] = function (soz52, gsmi4, dxs4gi) {
      var p0hq = soz52['split']('/'),
          o4mi = p0hq[p0hq['length'] - 0x1],
          m6z2 = gsmi4['split']('?')[0x0],
          z256t3 = lyf879['getFileInfo'](gsmi4),
          z652ot = lyf879['getFileNativePath'](o4mi);lyf879['fs']['copyFile']({ 'srcPath': soz52, 'destPath': z652ot, 'success': function (qrhap) {
          if (!z256t3) lyf879['onSaveFile'](gsmi4, o4mi), dxs4gi != null && dxs4gi['runWith']([0x0]);else {
            if (z256t3['readyUrl'] != gsmi4) lyf879['remove'](o4mi, gsmi4, dxs4gi);
          }
        }, 'fail': function (ae0phq) {
          dxs4gi != null && dxs4gi['runWith']([0x1, ae0phq]);
        } });
    }, lyf879['getFileNativePath'] = function (v4xgi) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v4xgi;
    }, lyf879['remove'] = function (nuf, hra_qp, to625) {
      hra_qp === void 0x0 && (hra_qp = '');var idx4gv = lyf879['getFileInfo'](hra_qp),
          k103 = lyf879['getFileNativePath'](idx4gv['md5']);smziox['loader']['clearRes'](idx4gv['readyUrl']), lyf879['fs']['unlink']({ 'filePath': k103, 'success': function (hbpek0) {
          if (hra_qp != '') lyf879['onSaveFile'](hra_qp, nuf);to625 != null && to625['runWith']([0x0]);
        }, 'fail': function (xi4mso) {} });
    }, lyf879['onSaveFile'] = function (e0bhw, paqeh0) {
      var epaq0 = e0bhw['split']('?')[0x0];lyf879['filesListObj'][epaq0] = { 'md5': paqeh0, 'readyUrl': e0bhw }, lyf879['fs']['writeFile']({ 'filePath': lyf879['fileNativeDir'] + '/' + lyf879['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lyf879['filesListObj']), 'success': function (pr) {
          console['log']('写入测试测试成功：', pr);
        }, 'fail': function (zo25m6) {
          console['log']('写入测试测试失败：', zo25m6);
        } });
    }, lyf879['existDir'] = function (soz2m5, hw0bke) {
      lyf879['fs']['mkdir']({ 'dirPath': soz2m5, 'success': function (ivgd4x) {
          hw0bke != null && hw0bke['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g4undv) {
          if (g4undv['errMsg']['indexOf']('file already exists') != -0x1) lyf879['readSync'](lyf879['fileListName'], 'utf8', hw0bke);else hw0bke != null && hw0bke['runWith']([0x1, g4undv]);
        } });
    }, lyf879['readSync'] = function (kt61w3, fc9l78, z6t32, gx4isd) {
      fc9l78 === void 0x0 && (fc9l78 = 'ascill'), gx4isd === void 0x0 && (gx4isd = '');var a_eqph = lyf879['getFileNativePath'](kt61w3),
          hwk0e;try {
        hwk0e = lyf879['fs']['readFileSync'](a_eqph), z6t32 != null && z6t32['runWith']([0x0, { 'data': hwk0e }]);
      } catch (ea0qph) {
        z6t32 != null && z6t32['runWith']([0x1]);
      }
    }, lyf879['readCache'] = function () {}, lyf879['writeCache'] = function (aphqe0) {
      var cdn = readyUrl['split']('?')[0x0];lyf879['filesListObj'][cdn] = { 'md5': md5Name, 'readyUrl': readyUrl }, lyf879['fs']['writeFile']({ 'filePath': lyf879['fileNativeDir'] + '/' + lyf879['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](lyf879['filesListObj']), 'success': function (k3t16) {}, 'fail': function (ew0b1k) {} });
    }, lyf879['setNativeFileDir'] = function (epk0b) {
      lyf879['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + epk0b;
    }, lyf879['filesListObj'] = {}, lyf879['fileNativeDir'] = null, lyf879['fileListName'] = 'layaairfiles.txt', lyf879['ziyuFileData'] = {}, ngdvj(lyf879, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), lyf879;
  }(mzs5x),
      wk3t61 = function (l$978) {
    function sozix() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sozix['__super']['call'](this), this['_sound'] = sozix['_createSound']();
    }jf9cu(sozix, 'laya.wx.mini.MiniSound', l$978);var zo6t52 = sozix['prototype'];return zo6t52['load'] = function (ims4gx) {
      var ixgms4 = this;ims4gx = so5z2m['formatURL'](ims4gx), this['url'] = ims4gx;if (sozix['_audioCache'][ims4gx]) {
        this['event']('complete');return;
      }function tbk3w1() {
        if (sozix['_null'] != undefined) ixgms4['_sound']['onCanplay'](sozix['_null']), ixgms4['_sound']['onError'](sozix['_null']);else try {
          ixgms4['_sound']['onCanplay'](null), ixgms4['_sound']['onError'](null), sozix['_null'] = null;
        } catch (xsim) {
          console['warn']('[wxmini] _clearSound:' + xsim), ixgms4['_sound']['onCanplay'](hqrp_), ixgms4['_sound']['onError'](hqrp_), sozix['_null'] = hqrp_;
        }
      }function ncduj() {
        tbk3w1(), jvncud['loaded'] = !![], jvncud['event']('complete'), sozix['_audioCache'][jvncud['url']] = jvncud;
      }function ah_eq(qa0hpe) {
        console['error']('errCode=' + qa0hpe['errCode'] + '  errMsg=' + qa0hpe['errMsg']), tbk3w1(), jvncud['event']('error');
      }function hqrp_() {}this['_sound']['onCanplay'](ncduj), this['_sound']['onError'](ah_eq), this['_sound']['src'] = ims4gx;var jvncud = this;
    }, zo6t52['play'] = function (khbpe0, bpe) {
      khbpe0 === void 0x0 && (khbpe0 = 0x0), bpe === void 0x0 && (bpe = 0x0);var xm4isg;if (this['url'] == dugiv['_tMusic']) {
        if (!sozix['_musicAudio']) sozix['_musicAudio'] = sozix['_createSound']();xm4isg = sozix['_musicAudio'];
      } else xm4isg = sozix['_createSound']();xm4isg['src'] = this['url'];var z56o2t = new vjnudg(xm4isg);return z56o2t['url'] = this['url'], z56o2t['loops'] = bpe, z56o2t['startTime'] = khbpe0, z56o2t['play'](), dugiv['addChannel'](z56o2t), z56o2t;
    }, zo6t52['dispose'] = function () {
      var ncvu = sozix['_audioCache'][this['url']];ncvu && (ncvu['src'] = '', delete sozix['_audioCache'][this['url']]);
    }, qhr_ap(0x0, zo6t52, 'duration', function () {
      return this['_sound']['duration'];
    }), sozix['_createSound'] = function () {
      return sozix['_id']++, lc89f7['window']['wx']['createInnerAudioContext']();
    }, sozix['_musicAudio'] = null, sozix['_id'] = 0x0, sozix['_audioCache'] = {}, sozix['_null'] = undefined, sozix;
  }(mzs5x),
      vjnudg = function (so25mz) {
    function wk30b(w03k1) {
      this['_audio'] = null, this['_onEnd'] = null, wk30b['__super']['call'](this), this['_audio'] = w03k1, this['_onEnd'] = y7l$98['bind'](this['__onEnd'], this), w03k1['onEnded'](this['_onEnd']);
    }jf9cu(wk30b, 'laya.wx.mini.MiniSoundChannel', so25mz);var ugjnv = wk30b['prototype'];return ugjnv['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (smziox['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ugjnv['__onNull'] = function () {}, ugjnv['play'] = function () {
      this['isStopped'] = ![], dugiv['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ugjnv['stop'] = function () {
      this['isStopped'] = !![], dugiv['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wk30b['_null'] != undefined) this['_audio']['onEnded'](wk30b['_null']);else try {
        this['_audio']['onEnded'](null), wk30b['_null'] = null;
      } catch (uvnjfc) {
        console['warn']('[wxmini] stop:' + uvnjfc), this['_audio']['onEnded'](y7l$98['bind'](this['__onNull'], this)), wk30b['_null'] = y7l$98['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ugjnv['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ugjnv['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], dugiv['addChannel'](this), this['_audio']['play']();
    }, qhr_ap(0x0, ugjnv, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qhr_ap(0x0, ugjnv, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qhr_ap(0x0, ugjnv, 'volume', function () {
      return 0x1;
    }, function (fcjl97) {}), wk30b['_null'] = undefined, wk30b;
  }(o5zxm);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ly89$ in Laya) {
    var e_hqa = Laya[ly89$];e_hqa && e_hqa['__isclass'] && (exports[ly89$] = e_hqa);
  }
});