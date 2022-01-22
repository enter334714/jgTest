var F = wx.$D;
(function (window, document, s03tce) {
  var vtsc0e = s03tce['un'],
      lzir_ = s03tce['uns'],
      s3tce = s03tce['static'],
      etv0 = s03tce['class'],
      bpc0u = s03tce['getset'],
      o_rli = s03tce['__newvec'],
      om_lz = laya['utils']['Browser'],
      lz_mi = laya['events']['Event'],
      tvews = laya['events']['EventDispatcher'],
      s0cue = laya['resource']['HTMLImage'],
      b7f94 = laya['utils']['Handler'],
      gja5mo = laya['display']['Input'],
      _liom = laya['net']['Loader'],
      tq = laya['maths']['Matrix'],
      tvw = laya['renders']['Render'],
      u3p9c = laya['utils']['RunDriver'],
      pfbu7 = laya['media']['Sound'],
      qw6v = laya['media']['SoundChannel'],
      jom5ag = laya['media']['SoundManager'],
      f9bpu3 = laya['display']['Stage'],
      jx5mag = laya['net']['URL'],
      upbc39 = laya['utils']['Utils'],
      z1rih2 = function () {
    function g_5mo() {}return etv0(g_5mo, 'laya.wx.mini.MiniAdpter'), g_5mo['getJson'] = function (_i) {
      return JSON['parse'](_i);
    }, g_5mo['init'] = function (lm_oz, a5omjg) {
      lm_oz === void 0x0 && (lm_oz = ![]), a5omjg === void 0x0 && (a5omjg = ![]);if (g_5mo['_inited']) return;g_5mo['window'] = window;if (g_5mo['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g_5mo['_inited'] = !![], g_5mo['isZiYu'] = a5omjg, g_5mo['isPosMsgYu'] = lm_oz, g_5mo['EnvConfig'] = {}, !g_5mo['isZiYu'] && (c0tve['setNativeFileDir']('/layaairGame'), c0tve['existDir'](c0tve['fileNativeDir'], b7f94['create'](g_5mo, g_5mo['onMkdirCallBack']))), g_5mo['window']['focus'] = function () {}, s03tce['getUrlPath'] = function () {}, g_5mo['window']['logtime'] = function (c0u3es) {}, g_5mo['window']['alertTimeLog'] = function (pfb479) {}, g_5mo['window']['resetShareInfo'] = function () {}, g_5mo['window']['CanvasRenderingContext2D'] = function () {}, g_5mo['window']['CanvasRenderingContext2D']['prototype'] = g_5mo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g_5mo['window']['document']['body']['appendChild'] = function () {}, g_5mo['EnvConfig']['pixelRatioInt'] = 0x0, u3p9c['getPixelRatio'] = g_5mo['pixelRatio'], g_5mo['_preCreateElement'] = om_lz['createElement'], om_lz['createElement'] = g_5mo['createElement'], u3p9c['createShaderCondition'] = g_5mo['createShaderCondition'], upbc39['parseXMLFromString'] = g_5mo['parseXMLFromString'], gja5mo['_createInputElement'] = _lmo5['_createInputElement'], g_5mo['EnvConfig']['load'] = _liom['prototype']['load'], _liom['prototype']['load'] = qw6vkt['prototype']['load'], g_5mo['isZiYu'] && lm_oz && wx['onMessage'](function (f7pu9) {
        f7pu9['isLoad'] && (c0tve['ziyuFileData'][f7pu9['url']] = f7pu9['data']);
      });
    }, g_5mo['onMkdirCallBack'] = function (ub9pf7, wvtqk) {
      if (!ub9pf7) c0tve['filesListObj'] = JSON['parse'](wvtqk['data']);
    }, g_5mo['pixelRatio'] = function () {
      if (!g_5mo['EnvConfig']['pixelRatioInt']) try {
        var ecu3 = wx['getSystemInfoSync']();return g_5mo['EnvConfig']['pixelRatioInt'] = ecu3['pixelRatio'], ecu3 = ecu3, ecu3['pixelRatio'];
      } catch (cep0u3) {}return g_5mo['EnvConfig']['pixelRatioInt'];
    }, g_5mo['createElement'] = function (p3ub9c) {
      if (p3ub9c == 'canvas') {
        var wvstqe;return g_5mo['idx'] == 0x1 ? g_5mo['isZiYu'] ? (wvstqe = sharedCanvas, wvstqe['style'] = {}) : wvstqe = window['canvas'] : wvstqe = window['wx']['createCanvas'](), g_5mo['idx']++, wvstqe;
      } else {
        if (p3ub9c == 'textarea' || p3ub9c == 'input') return g_5mo['onCreateInput'](p3ub9c);else {
          if (p3ub9c == 'div') {
            var p4fb = g_5mo['_preCreateElement'](p3ub9c);return p4fb['contains'] = function (wesqvt) {
              return null;
            }, p4fb['removeChild'] = function (zmo_li) {}, p4fb;
          } else return g_5mo['_preCreateElement'](p3ub9c);
        }
      }
    }, g_5mo['onCreateInput'] = function (u93cpb) {
      var u3b0pc = g_5mo['_preCreateElement'](u93cpb);return u3b0pc['focus'] = _lmo5['wxinputFocus'], u3b0pc['blur'] = _lmo5['wxinputblur'], u3b0pc['style'] = {}, u3b0pc['value'] = 0x0, u3b0pc['parentElement'] = {}, u3b0pc['placeholder'] = {}, u3b0pc['type'] = {}, u3b0pc['setColor'] = function (rh8n1) {}, u3b0pc['setType'] = function (mjag) {}, u3b0pc['setFontFace'] = function (z_mio) {}, u3b0pc['addEventListener'] = function (b30upc) {}, u3b0pc['contains'] = function (_zlri) {
        return null;
      }, u3b0pc['removeChild'] = function (_olmi5) {}, u3b0pc;
    }, g_5mo['createShaderCondition'] = function (amog5j) {
      var cbu3 = this,
          _lim5o = function () {
        var ilz_om = amog5j;return cbu3[amog5j['replace']('this.', '')];
      };return _lim5o;
    }, g_5mo['EnvConfig'] = null, g_5mo['window'] = null, g_5mo['_preCreateElement'] = null, g_5mo['_inited'] = ![], g_5mo['wxRequest'] = null, g_5mo['systemInfo'] = null, g_5mo['version'] = '0.0.1', g_5mo['isZiYu'] = ![], g_5mo['isPosMsgYu'] = ![], g_5mo['parseXMLFromString'] = function (c3u) {
      var bp974f, $1y8n;c3u = c3u['replace'](/>\s+</g, '><');try {
        bp974f = new window['Parser']['DOMParser']()['parseFromString'](c3u, 'text/xml');
      } catch (vqw6) {
        throw '需要引入xml解析库文件';
      }return bp974f;
    }, g_5mo['idx'] = 0x1, g_5mo;
  }(),
      cep0 = function () {
    function zoril() {}etv0(zoril, 'laya.wx.mini.MiniImage');var ce0u3s = zoril['prototype'];return ce0u3s['_loadImage'] = function (joga5) {
      var vswk = this,
          p3cub0 = ![];joga5['indexOf']('layaNativeDir/') == -0x1 && (p3cub0 = !![], joga5 = jx5mag['formatURL'](joga5));if (!c0tve['getFileInfo'](joga5)) {
        if (joga5['indexOf']('http://') != -0x1 || joga5['indexOf']('https://') != -0x1) c0tve['downImg'](joga5, new b7f94(zoril, zoril['onDownImgCallBack'], [joga5, vswk]), joga5);else zoril['onCreateImage'](joga5, vswk, !![]);
      } else zoril['onCreateImage'](joga5, vswk, !p3cub0);
    }, zoril['onDownImgCallBack'] = function (_zl2ri, xkgja6, jkgxa6) {
      if (!jkgxa6) zoril['onCreateImage'](_zl2ri, xkgja6);else xkgja6['onError'](null);
    }, zoril['onCreateImage'] = function (gka6xj, loagm, jgma5x) {
      jgma5x === void 0x0 && (jgma5x = ![]);var fu9b3p;if (!jgma5x) {
        var b3puc9 = c0tve['getFileInfo'](gka6xj),
            mjg5o = b3puc9['md5'];fu9b3p = c0tve['getFileNativePath'](mjg5o);
      } else fu9b3p = gka6xj;if (loagm['imgCache'] == null) loagm['imgCache'] = {};var rozi_l;function tsvqe0() {
        rozi_l['onload'] = null, rozi_l['onerror'] = null, delete loagm['imgCache'][gka6xj];
      };var jw6a = function () {
        tsvqe0(), loagm['onLoaded'](rozi_l);
      },
          c0ue = function () {
        tsvqe0(), loagm['event']('error', 'Load image failed');
      };loagm['_type'] == 'nativeimage' ? (rozi_l = new om_lz['window']['Image'](), rozi_l['crossOrigin'] = '', rozi_l['onload'] = jw6a, rozi_l['onerror'] = c0ue, rozi_l['src'] = fu9b3p, loagm['imgCache'][gka6xj] = rozi_l) : new s0cue['create'](fu9b3p, { 'onload': jw6a, 'onerror': c0ue, 'onCreate': function (hrn18) {
          rozi_l = hrn18, loagm['imgCache'][gka6xj] = hrn18;
        } });
    }, zoril;
  }(),
      _lmo5 = function () {
    function ec3u0() {}return etv0(ec3u0, 'laya.wx.mini.MiniInput'), ec3u0['_createInputElement'] = function () {
      gja5mo['_initInput'](gja5mo['area'] = om_lz['createElement']('textarea')), gja5mo['_initInput'](gja5mo['input'] = om_lz['createElement']('input')), gja5mo['inputContainer'] = om_lz['createElement']('div'), gja5mo['inputContainer']['style']['position'] = 'absolute', gja5mo['inputContainer']['style']['zIndex'] = 0x186a0, om_lz['container']['appendChild'](gja5mo['inputContainer']), gja5mo['inputContainer']['setPos'] = function (_zloi, jkq6w) {
        gja5mo['inputContainer']['style']['left'] = _zloi + 'px', gja5mo['inputContainer']['style']['top'] = jkq6w + 'px';
      }, s03tce['stage']['on']('resize', null, ec3u0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nz1r) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jom5ag['_soundClass'] = st, jom5ag['_musicClass'] = st;
    }, ec3u0['_onStageResize'] = function () {
      var n8yh = s03tce['stage']['_canvasTransform']['identity']();n8yh['scale'](om_lz['width'] / tvw['canvas']['width'] / u3p9c['getPixelRatio'](), om_lz['height'] / tvw['canvas']['height'] / u3p9c['getPixelRatio']());
    }, ec3u0['wxinputFocus'] = function (u0pbc3) {
      var q0s = gja5mo['inputElement']['target'];if (q0s && !q0s['editable']) return;z1rih2['window']['wx']['offKeyboardConfirm'](), z1rih2['window']['wx']['offKeyboardInput'](), z1rih2['window']['wx']['showKeyboard']({ 'defaultValue': q0s['text'], 'maxLength': q0s['maxChars'], 'multiple': q0s['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (s0uc3) {}, 'fail': function (i2zhr_) {} }), z1rih2['window']['wx']['onKeyboardConfirm'](function (m_5lg) {
        var h1r2zi = m_5lg ? m_5lg['value'] : '';q0s['text'] = h1r2zi, q0s['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), z1rih2['window']['wx']['onKeyboardInput'](function (qvxw6) {
        var yn18$h = qvxw6 ? qvxw6['value'] : '';if (!q0s['multiline']) {
          if (yn18$h['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }q0s['text'] = yn18$h, q0s['event']('input');
      });
    }, ec3u0['inputEnter'] = function () {
      gja5mo['inputElement']['target']['focus'] = ![];
    }, ec3u0['wxinputblur'] = function () {
      ec3u0['hideKeyboard']();
    }, ec3u0['hideKeyboard'] = function () {
      z1rih2['window']['wx']['offKeyboardConfirm'](), z1rih2['window']['wx']['offKeyboardInput'](), z1rih2['window']['wx']['hideKeyboard']({ 'success': function (z_li) {
          console['log']('隐藏键盘');
        }, 'fail': function (ue0p3) {
          console['log']('隐藏键盘出错:' + (ue0p3 ? ue0p3['errMsg'] : ''));
        } });
    }, ec3u0;
  }(),
      qw6vkt = function () {
    function k6jw() {}etv0(k6jw, 'laya.wx.mini.MiniLoader');var ce30p = k6jw['prototype'];return ce30p['load'] = function (vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj) {
      tc0se === void 0x0 && (tc0se = !![]), xwq6kj === void 0x0 && (xwq6kj = ![]);var om5a = this;om5a['_url'] = vwtk6q;if (vwtk6q['indexOf']('data:image') === 0x0) om5a['_type'] = svtq0e = 'image';else om5a['_type'] = svtq0e || (svtq0e = om5a['getTypeFromUrl'](vwtk6q));om5a['_cache'] = tc0se, om5a['_data'] = null;var q6xwk = 'ascii';if (vwtk6q['indexOf']('.fnt') != -0x1) q6xwk = 'utf8';else svtq0e == 'arraybuffer' && (q6xwk = '');;var ao5lmg = upbc39['getFileExtension'](vwtk6q);if (k6jw['_fileTypeArr']['indexOf'](ao5lmg) != -0x1) z1rih2['EnvConfig']['load']['call'](this, vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj);else {
        if (!c0tve['getFileInfo'](vwtk6q)) {
          if (vwtk6q['indexOf']('layaNativeDir/') != -0x1) {
            if (z1rih2['isZiYu']) {
              var vwstkq = c0tve['ziyuFileData'][vwtk6q];om5a['onLoaded'](vwstkq);return;
            } else {
              cosnole['log']('read read'), c0tve['read'](vwtk6q, q6xwk, new b7f94(k6jw, k6jw['onReadNativeCallBack'], [q6xwk, vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj, om5a]));return;
            }
          }if (jx5mag['rootPath'] == '') var up3b9f = vwtk6q;else up3b9f = vwtk6q['split'](jx5mag['rootPath'])[0x0];vwtk6q['indexOf']('http://') != -0x1 || vwtk6q['indexOf']('https://') != -0x1 ? z1rih2['EnvConfig']['load']['call'](om5a, vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj) : c0tve['readFile'](up3b9f, q6xwk, new b7f94(k6jw, k6jw['onReadNativeCallBack'], [q6xwk, vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj, om5a]), vwtk6q);
        } else z1rih2['EnvConfig']['load']['call'](this, vwtk6q, svtq0e, tc0se, v6xqkw, xwq6kj);
      }
    }, ce30p['resMgrLoad'] = function (p9buf, stc03, qt6vkw, bp93f, skwqvt, rizol, jag56x) {
      qt6vkw === void 0x0 && (qt6vkw = 0x0), bp93f === void 0x0 && (bp93f = ![]), skwqvt === void 0x0 && (skwqvt = ![]), rizol === void 0x0 && (rizol = 0x0), jag56x === void 0x0 && (jag56x = 0x3), p9buf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', p9buf), z1rih2['EnvConfig']['resMgrLoad'](p9buf, ($8hn21, _io5l, h2ri) => {
        k6jw['prototype']['resMgrLoadCallBack']($8hn21, _io5l, h2ri, stc03);
      }, qt6vkw, bp93f, skwqvt, rizol, jag56x);
    }, ce30p['resMgrLoadCallBack'] = function (upce3, u3p0ce, $hn182, i_roz) {
      console['log']('buff:::', upce3, $hn182, c0tve['fileNativeDir'] + '///' + c0tve['fileListName']), i_roz(upce3, u3p0ce, $hn182);
    }, ce30p['clearRes'] = function (_ilzmo, pc3u0b) {
      pc3u0b === void 0x0 && (pc3u0b = ![]);var vk6qxw = this;vk6qxw['clearRes'](_ilzmo, pc3u0b);var x6kjw = c0tve['getFileInfo'](_ilzmo);if (x6kjw && (_ilzmo['indexOf']('http://') != -0x1 || _ilzmo['indexOf']('https://') != -0x1)) {
        var ucpb03 = x6kjw['md5'],
            gkjax6 = c0tve['getFileNativePath'](ucpb03);c0tve['remove'](gkjax6);
      }
    }, k6jw['onReadNativeCallBack'] = function (pf7ub, wvqx, bfu9p7, vtec, ol_5gm, i_r, olz_, tsveq, oli_5m) {
      vtec === void 0x0 && (vtec = !![]), i_r === void 0x0 && (i_r = ![]), tsveq === void 0x0 && (tsveq = 0x0);if (!tsveq) {
        var cubp9;if (bfu9p7 == 'json' || bfu9p7 == 'atlas') cubp9 = z1rih2['getJson'](oli_5m['data']);else bfu9p7 == 'xml' ? cubp9 = upbc39['parseXMLFromString'](oli_5m['data']) : cubp9 = oli_5m['data'];olz_['onLoaded'](cubp9), !z1rih2['isZiYu'] && z1rih2['isPosMsgYu'] && bfu9p7 != 'arraybuffer' && wx['postMessage']({ 'url': wvqx, 'data': cubp9, 'isLoad': !![] });
      } else tsveq == 0x1 && z1rih2['EnvConfig']['load']['call'](olz_, wvqx, bfu9p7, vtec, ol_5gm, i_r);
    }, s3tce(k6jw, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k6jw;
  }(),
      c0tve = function (twvqse) {
    function tqes0() {
      tqes0['__super']['call'](this);;
    }return etv0(tqes0, 'laya.wx.mini.MiniFileMgr', twvqse), tqes0['isLoadFile'] = function (m5gloa) {
      return tqes0['_fileTypeArr']['indexOf'](m5gloa) != -0x1 ? !![] : ![];
    }, tqes0['getFileInfo'] = function (vtsqe) {
      var hy1$n8 = vtsqe['split']('?')[0x0],
          ir_ = tqes0['filesListObj'][hy1$n8];if (ir_ == null) return null;else return ir_;return null;
    }, tqes0['onFileUpdate'] = function (xgm5a, qvesw) {
      var h2i_zr = xgm5a['split']('/'),
          peuc = h2i_zr[h2i_zr['length'] - 0x1],
          mxj = tqes0['getFileInfo'](qvesw);if (mxj == null) tqes0['onSaveFile'](qvesw, peuc);else {
        if (mxj['readyUrl'] != qvesw) tqes0['remove'](peuc, qvesw);
      }
    }, tqes0['exits'] = function (pe3u0c, fub9) {
      var h8ny$1 = tqes0['getFileNativePath'](pe3u0c);tqes0['fs']['getFileInfo']({ 'filePath': h8ny$1, 'success': function (loizr) {
          fub9 != null && fub9['runWith']([0x0, loizr]);
        }, 'fail': function (lr2_z) {
          fub9 != null && fub9['runWith']([0x1, lr2_z]);
        } });
    }, tqes0['read'] = function (hyn$18, rzi_l2, oml_g5, ucpb93) {
      rzi_l2 === void 0x0 && (rzi_l2 = 'ascill'), ucpb93 === void 0x0 && (ucpb93 = '');var wsevtq;ucpb93 != '' ? wsevtq = tqes0['getFileNativePath'](hyn$18) : wsevtq = hyn$18, tqes0['fs']['readFile']({ 'filePath': wsevtq, 'encoding': rzi_l2, 'success': function (ml_g5o) {
          oml_g5 != null && oml_g5['runWith']([0x0, ml_g5o]);
        }, 'fail': function (lmi5_) {
          if (lmi5_ && ucpb93 != '') tqes0['down'](ucpb93, rzi_l2, oml_g5, ucpb93);else oml_g5 != null && oml_g5['runWith']([0x1]);
        } });
    }, tqes0['readNativeFile'] = function (bcp3u9, ir_z) {
      tqes0['fs']['readFile']({ 'filePath': bcp3u9, 'encoding': '', 'success': function (o_zim) {
          ir_z != null && ir_z['runWith']([0x0]);
        }, 'fail': function (liom5_) {
          ir_z != null && ir_z['runWith']([0x1]);
        } });
    }, tqes0['down'] = function (rn218, pcb0u, tsv0ce, f94pb) {
      pcb0u === void 0x0 && (pcb0u = 'ascill'), f94pb === void 0x0 && (f94pb = '');var wktq6v = tqes0['getFileNativePath'](f94pb),
          oim5l = tqes0['wxdown']({ 'url': rn218, 'filePath': wktq6v, 'success': function (up9bc3) {
          if (up9bc3['statusCode'] === 0xc8) tqes0['readFile'](up9bc3['filePath'], pcb0u, tsv0ce, f94pb);
        }, 'fail': function (x6kajg) {
          tsv0ce != null && tsv0ce['runWith']([0x1, x6kajg]);
        } });oim5l['onProgressUpdate'](function (ao5mj) {
        tsv0ce != null && tsv0ce['runWith']([0x2, ao5mj['progress']]);
      });
    }, tqes0['readFile'] = function (rzn12, ogal5m, lmo_z, e0us3) {
      ogal5m === void 0x0 && (ogal5m = 'ascill'), e0us3 === void 0x0 && (e0us3 = ''), tqes0['fs']['readFile']({ 'filePath': rzn12, 'encoding': ogal5m, 'success': function (kqxvw6) {
          if (rzn12['indexOf']('http://') != -0x1 || rzn12['indexOf']('https://') != -0x1) tqes0['onFileUpdate'](rzn12, e0us3);lmo_z != null && lmo_z['runWith']([0x0, kqxvw6]);
        }, 'fail': function (gaxk6) {
          if (gaxk6) lmo_z != null && lmo_z['runWith']([0x1, gaxk6]);
        } });
    }, tqes0['downImg'] = function (pf7bu, zl_i2, h18$2n) {
      h18$2n === void 0x0 && (h18$2n = '');var h82rn1 = tqes0['wxdown']({ 'url': pf7bu, 'success': function (gjm5o) {
          gjm5o['statusCode'] === 0xc8 && tqes0['copyFile'](gjm5o['tempFilePath'], h18$2n, zl_i2);
        }, 'fail': function (lizm_o) {
          zl_i2 != null && zl_i2['runWith']([0x1, lizm_o]);
        } });
    }, tqes0['copyFile'] = function (q6kx, _o5lim, kwqxv) {
      var ajkw = q6kx['split']('/'),
          z1nr2h = ajkw[ajkw['length'] - 0x1],
          olgam = _o5lim['split']('?')[0x0],
          li5m_ = tqes0['getFileInfo'](_o5lim),
          vtwqse = tqes0['getFileNativePath'](z1nr2h);tqes0['fs']['copyFile']({ 'srcPath': q6kx, 'destPath': vtwqse, 'success': function (west) {
          if (!li5m_) tqes0['onSaveFile'](_o5lim, z1nr2h), kwqxv != null && kwqxv['runWith']([0x0]);else {
            if (li5m_['readyUrl'] != _o5lim) tqes0['remove'](z1nr2h, _o5lim, kwqxv);
          }
        }, 'fail': function (hz_2i) {
          kwqxv != null && kwqxv['runWith']([0x1, hz_2i]);
        } });
    }, tqes0['getFileNativePath'] = function (_rzih2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _rzih2;
    }, tqes0['remove'] = function (u30es, c0eu, aj5x6g) {
      c0eu === void 0x0 && (c0eu = '');var c0ub = tqes0['getFileInfo'](c0eu),
          etq0 = tqes0['getFileNativePath'](c0ub['md5']);s03tce['loader']['clearRes'](c0ub['readyUrl']), tqes0['fs']['unlink']({ 'filePath': etq0, 'success': function (y1n$h) {
          if (c0eu != '') tqes0['onSaveFile'](c0eu, u30es);aj5x6g != null && aj5x6g['runWith']([0x0]);
        }, 'fail': function (ub9pf3) {} });
    }, tqes0['onSaveFile'] = function (qwj6x, x6qvw) {
      var ubp3c = qwj6x['split']('?')[0x0];tqes0['filesListObj'][ubp3c] = { 'md5': x6qvw, 'readyUrl': qwj6x }, tqes0['fs']['writeFile']({ 'filePath': tqes0['fileNativeDir'] + '/' + tqes0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tqes0['filesListObj']), 'success': function (tvks) {
          console['log']('写入测试测试成功：', tvks);
        }, 'fail': function (ozr_) {
          console['log']('写入测试测试失败：', ozr_);
        } });
    }, tqes0['existDir'] = function (_io, oglm_) {
      tqes0['fs']['mkdir']({ 'dirPath': _io, 'success': function (_loirz) {
          oglm_ != null && oglm_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (cs03u) {
          if (cs03u['errMsg']['indexOf']('file already exists') != -0x1) tqes0['readSync'](tqes0['fileListName'], 'utf8', oglm_);else oglm_ != null && oglm_['runWith']([0x1, cs03u]);
        } });
    }, tqes0['readSync'] = function (cet3s, h_ir2, s3eu, r82n1) {
      h_ir2 === void 0x0 && (h_ir2 = 'ascill'), r82n1 === void 0x0 && (r82n1 = '');var axmg5j = tqes0['getFileNativePath'](cet3s),
          cep3;try {
        cep3 = tqes0['fs']['readFileSync'](axmg5j), s3eu != null && s3eu['runWith']([0x0, { 'data': cep3 }]);
      } catch (z2nh1) {
        s3eu != null && s3eu['runWith']([0x1]);
      }
    }, tqes0['readCache'] = function () {}, tqes0['writeCache'] = function (mo5l_) {
      var cbp39u = readyUrl['split']('?')[0x0];tqes0['filesListObj'][cbp39u] = { 'md5': md5Name, 'readyUrl': readyUrl }, tqes0['fs']['writeFile']({ 'filePath': tqes0['fileNativeDir'] + '/' + tqes0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tqes0['filesListObj']), 'success': function (s3ceu0) {}, 'fail': function (ecsv0t) {} });
    }, tqes0['setNativeFileDir'] = function (oi_zr) {
      tqes0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oi_zr;
    }, tqes0['filesListObj'] = {}, tqes0['fileNativeDir'] = null, tqes0['fileListName'] = 'layaairfiles.txt', tqes0['ziyuFileData'] = {}, s3tce(tqes0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tqes0;
  }(tvews),
      st = function (gajom) {
    function pb3fu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], pb3fu['__super']['call'](this), this['_sound'] = pb3fu['_createSound']();
    }etv0(pb3fu, 'laya.wx.mini.MiniSound', gajom);var xgjm5 = pb3fu['prototype'];return xgjm5['load'] = function (p9b74) {
      var pu9b3 = this;p9b74 = jx5mag['formatURL'](p9b74), this['url'] = p9b74;if (pb3fu['_audioCache'][p9b74]) {
        this['event']('complete');return;
      }function amxjg() {
        if (pb3fu['_null'] != undefined) pu9b3['_sound']['onCanplay'](pb3fu['_null']), pu9b3['_sound']['onError'](pb3fu['_null']);else try {
          pu9b3['_sound']['onCanplay'](null), pu9b3['_sound']['onError'](null), pb3fu['_null'] = null;
        } catch (w6jxk) {
          console['warn']('[wxmini] _clearSound:' + w6jxk), pu9b3['_sound']['onCanplay'](xw6vq), pu9b3['_sound']['onError'](xw6vq), pb3fu['_null'] = xw6vq;
        }
      }function p9ub() {
        amxjg(), ozirl['loaded'] = !![], ozirl['event']('complete'), pb3fu['_audioCache'][ozirl['url']] = ozirl;
      }function n1$hy(oaj) {
        console['error']('errCode=' + oaj['errCode'] + '  errMsg=' + oaj['errMsg']), amxjg(), ozirl['event']('error');
      }function xw6vq() {}this['_sound']['onCanplay'](p9ub), this['_sound']['onError'](n1$hy), this['_sound']['src'] = p9b74;var ozirl = this;
    }, xgjm5['play'] = function (kvtqws, i2rh) {
      kvtqws === void 0x0 && (kvtqws = 0x0), i2rh === void 0x0 && (i2rh = 0x0);var ecs;if (this['url'] == jom5ag['_tMusic']) {
        if (!pb3fu['_musicAudio']) pb3fu['_musicAudio'] = pb3fu['_createSound']();ecs = pb3fu['_musicAudio'];
      } else ecs = pb3fu['_createSound']();ecs['src'] = this['url'];var cepu = new l_om5g(ecs);return cepu['url'] = this['url'], cepu['loops'] = i2rh, cepu['startTime'] = kvtqws, cepu['play'](), jom5ag['addChannel'](cepu), cepu;
    }, xgjm5['dispose'] = function () {
      var jkgax6 = pb3fu['_audioCache'][this['url']];jkgax6 && (jkgax6['src'] = '', delete pb3fu['_audioCache'][this['url']]);
    }, bpc0u(0x0, xgjm5, 'duration', function () {
      return this['_sound']['duration'];
    }), pb3fu['_createSound'] = function () {
      return pb3fu['_id']++, z1rih2['window']['wx']['createInnerAudioContext']();
    }, pb3fu['_musicAudio'] = null, pb3fu['_id'] = 0x0, pb3fu['_audioCache'] = {}, pb3fu['_null'] = undefined, pb3fu;
  }(tvews),
      l_om5g = function (ojm5a) {
    function jq6(w6jxqk) {
      this['_audio'] = null, this['_onEnd'] = null, jq6['__super']['call'](this), this['_audio'] = w6jxqk, this['_onEnd'] = upbc39['bind'](this['__onEnd'], this), w6jxqk['onEnded'](this['_onEnd']);
    }etv0(jq6, 'laya.wx.mini.MiniSoundChannel', ojm5a);var olm_i5 = jq6['prototype'];return olm_i5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (s03tce['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, olm_i5['__onNull'] = function () {}, olm_i5['play'] = function () {
      this['isStopped'] = ![], jom5ag['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, olm_i5['stop'] = function () {
      this['isStopped'] = !![], jom5ag['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (jq6['_null'] != undefined) this['_audio']['onEnded'](jq6['_null']);else try {
        this['_audio']['onEnded'](null), jq6['_null'] = null;
      } catch (_roizl) {
        console['warn']('[wxmini] stop:' + _roizl), this['_audio']['onEnded'](upbc39['bind'](this['__onNull'], this)), jq6['_null'] = upbc39['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, olm_i5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, olm_i5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jom5ag['addChannel'](this), this['_audio']['play']();
    }, bpc0u(0x0, olm_i5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), bpc0u(0x0, olm_i5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), bpc0u(0x0, olm_i5, 'volume', function () {
      return 0x1;
    }, function (i_rlz) {}), jq6['_null'] = undefined, jq6;
  }(qw6v);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $hy1n in Laya) {
    var ve0qts = Laya[$hy1n];ve0qts && ve0qts['__isclass'] && (exports[$hy1n] = ve0qts);
  }
});