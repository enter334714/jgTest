var K = wx.$S;
(function (window, document, zo3urv) {
  var a5yhsd = zo3urv['un'],
      c0wi_x = zo3urv['uns'],
      _xim0c = zo3urv['static'],
      vz3rk = zo3urv['class'],
      ru3zv = zo3urv['getset'],
      ck9w0 = zo3urv['__newvec'],
      uzor = laya['utils']['Browser'],
      gb1j68 = laya['events']['Event'],
      a5$4de = laya['events']['EventDispatcher'],
      r$e4u3 = laya['resource']['HTMLImage'],
      r4u3$ = laya['utils']['Handler'],
      ci2 = laya['display']['Input'],
      ad45h = laya['net']['Loader'],
      phdys5 = laya['maths']['Matrix'],
      q5phs = laya['renders']['Render'],
      phys5d = laya['utils']['RunDriver'],
      j6bl8 = laya['media']['Sound'],
      x_ic = laya['media']['SoundChannel'],
      ouve3 = laya['media']['SoundManager'],
      tmnx2i = laya['display']['Stage'],
      $ud4ae = laya['net']['URL'],
      gb861j = laya['utils']['Utils'],
      jl61b = function () {
    function i09cw_() {}return vz3rk(i09cw_, 'laya.wx.mini.MiniAdpter'), i09cw_['getJson'] = function (vou3zr) {
      return JSON['parse'](vou3zr);
    }, i09cw_['init'] = function (okv3z, $4uer) {
      okv3z === void 0x0 && (okv3z = ![]), $4uer === void 0x0 && ($4uer = ![]);if (i09cw_['_inited']) return;i09cw_['window'] = window;if (i09cw_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;i09cw_['_inited'] = !![], i09cw_['isZiYu'] = $4uer, i09cw_['isPosMsgYu'] = okv3z, i09cw_['EnvConfig'] = {}, !i09cw_['isZiYu'] && (jg8b1q['setNativeFileDir']('/layaairGame'), jg8b1q['existDir'](jg8b1q['fileNativeDir'], r4u3$['create'](i09cw_, i09cw_['onMkdirCallBack']))), i09cw_['window']['focus'] = function () {}, zo3urv['getUrlPath'] = function () {}, i09cw_['window']['logtime'] = function (xnitm2) {}, i09cw_['window']['alertTimeLog'] = function (nm2i_x) {}, i09cw_['window']['resetShareInfo'] = function () {}, i09cw_['window']['CanvasRenderingContext2D'] = function () {}, i09cw_['window']['CanvasRenderingContext2D']['prototype'] = i09cw_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i09cw_['window']['document']['body']['appendChild'] = function () {}, i09cw_['EnvConfig']['pixelRatioInt'] = 0x0, phys5d['getPixelRatio'] = i09cw_['pixelRatio'], i09cw_['_preCreateElement'] = uzor['createElement'], uzor['createElement'] = i09cw_['createElement'], phys5d['createShaderCondition'] = i09cw_['createShaderCondition'], gb861j['parseXMLFromString'] = i09cw_['parseXMLFromString'], ci2['_createInputElement'] = hsyd5['_createInputElement'], i09cw_['EnvConfig']['load'] = ad45h['prototype']['load'], ad45h['prototype']['load'] = dha54$['prototype']['load'], i09cw_['isZiYu'] && okv3z && wx['onMessage'](function (bjqg81) {
        bjqg81['isLoad'] && (jg8b1q['ziyuFileData'][bjqg81['url']] = bjqg81['data']);
      });
    }, i09cw_['onMkdirCallBack'] = function (w0_ixc, u4are$) {
      if (!w0_ixc) jg8b1q['filesListObj'] = JSON['parse'](u4are$['data']);
    }, i09cw_['pixelRatio'] = function () {
      if (!i09cw_['EnvConfig']['pixelRatioInt']) try {
        var mx7nt = wx['getSystemInfoSync']();return i09cw_['EnvConfig']['pixelRatioInt'] = mx7nt['pixelRatio'], mx7nt = mx7nt, mx7nt['pixelRatio'];
      } catch (mnxi_) {}return i09cw_['EnvConfig']['pixelRatioInt'];
    }, i09cw_['createElement'] = function (d4a) {
      if (d4a == 'canvas') {
        var gsjq1;return i09cw_['idx'] == 0x1 ? i09cw_['isZiYu'] ? (gsjq1 = sharedCanvas, gsjq1['style'] = {}) : gsjq1 = window['canvas'] : gsjq1 = window['wx']['createCanvas'](), i09cw_['idx']++, gsjq1;
      } else {
        if (d4a == 'textarea' || d4a == 'input') return i09cw_['onCreateInput'](d4a);else {
          if (d4a == 'div') {
            var hgyps = i09cw_['_preCreateElement'](d4a);return hgyps['contains'] = function (l6f1) {
              return null;
            }, hgyps['removeChild'] = function (k9zo3) {}, hgyps;
          } else return i09cw_['_preCreateElement'](d4a);
        }
      }
    }, i09cw_['onCreateInput'] = function (tnm2x7) {
      var j1pqgs = i09cw_['_preCreateElement'](tnm2x7);return j1pqgs['focus'] = hsyd5['wxinputFocus'], j1pqgs['blur'] = hsyd5['wxinputblur'], j1pqgs['style'] = {}, j1pqgs['value'] = 0x0, j1pqgs['parentElement'] = {}, j1pqgs['placeholder'] = {}, j1pqgs['type'] = {}, j1pqgs['setColor'] = function (wokvz9) {}, j1pqgs['setType'] = function (ourv3z) {}, j1pqgs['setFontFace'] = function (t2nx7m) {}, j1pqgs['addEventListener'] = function (c_xi0w) {}, j1pqgs['contains'] = function (nm27x) {
        return null;
      }, j1pqgs['removeChild'] = function (jl861b) {}, j1pqgs;
    }, i09cw_['createShaderCondition'] = function (z3kov) {
      var e34ru$ = this,
          qph = function () {
        var i0mcx_ = z3kov;return e34ru$[z3kov['replace']('this.', '')];
      };return qph;
    }, i09cw_['EnvConfig'] = null, i09cw_['window'] = null, i09cw_['_preCreateElement'] = null, i09cw_['_inited'] = ![], i09cw_['wxRequest'] = null, i09cw_['systemInfo'] = null, i09cw_['version'] = '0.0.1', i09cw_['isZiYu'] = ![], i09cw_['isPosMsgYu'] = ![], i09cw_['parseXMLFromString'] = function (m7xn) {
      var hqpsgy, wvok9;m7xn = m7xn['replace'](/>\s+</g, '><');try {
        hqpsgy = new window['Parser']['DOMParser']()['parseFromString'](m7xn, 'text/xml');
      } catch (yjqgp) {
        throw '需要引入xml解析库文件';
      }return hqpsgy;
    }, i09cw_['idx'] = 0x1, i09cw_;
  }(),
      g18qj = function () {
    function l6b8f() {}vz3rk(l6b8f, 'laya.wx.mini.MiniImage');var imt = l6b8f['prototype'];return imt['_loadImage'] = function (r3uoe) {
      var c0kz9 = this,
          gb8q1j = ![];r3uoe['indexOf']('layaNativeDir/') == -0x1 && (gb8q1j = !![], r3uoe = $ud4ae['formatURL'](r3uoe));if (!jg8b1q['getFileInfo'](r3uoe)) {
        if (r3uoe['indexOf']('http://') != -0x1 || r3uoe['indexOf']('https://') != -0x1) jg8b1q['downImg'](r3uoe, new r4u3$(l6b8f, l6b8f['onDownImgCallBack'], [r3uoe, c0kz9]), r3uoe);else l6b8f['onCreateImage'](r3uoe, c0kz9, !![]);
      } else l6b8f['onCreateImage'](r3uoe, c0kz9, !gb8q1j);
    }, l6b8f['onDownImgCallBack'] = function (xm2, cxi_0, cw9_0i) {
      if (!cw9_0i) l6b8f['onCreateImage'](xm2, cxi_0);else cxi_0['onError'](null);
    }, l6b8f['onCreateImage'] = function (qyhgs, qpjg1s, ru4e) {
      ru4e === void 0x0 && (ru4e = ![]);var wv90;if (!ru4e) {
        var a$r4u = jg8b1q['getFileInfo'](qyhgs),
            ue4ad = a$r4u['md5'];wv90 = jg8b1q['getFileNativePath'](ue4ad);
      } else wv90 = qyhgs;if (qpjg1s['imgCache'] == null) qpjg1s['imgCache'] = {};var ni2tm;function k90_wc() {
        ni2tm['onload'] = null, ni2tm['onerror'] = null, delete qpjg1s['imgCache'][qyhgs];
      };var xic0m = function () {
        k90_wc(), qpjg1s['onLoaded'](ni2tm);
      },
          asdh = function () {
        k90_wc(), qpjg1s['event']('error', 'Load image failed');
      };qpjg1s['_type'] == 'nativeimage' ? (ni2tm = new uzor['window']['Image'](), ni2tm['crossOrigin'] = '', ni2tm['onload'] = xic0m, ni2tm['onerror'] = asdh, ni2tm['src'] = wv90, qpjg1s['imgCache'][qyhgs] = ni2tm) : new r$e4u3['create'](wv90, { 'onload': xic0m, 'onerror': asdh, 'onCreate': function (hd45) {
          ni2tm = hd45, qpjg1s['imgCache'][qyhgs] = hd45;
        } });
    }, l6b8f;
  }(),
      hsyd5 = function () {
    function nmi_2() {}return vz3rk(nmi_2, 'laya.wx.mini.MiniInput'), nmi_2['_createInputElement'] = function () {
      ci2['_initInput'](ci2['area'] = uzor['createElement']('textarea')), ci2['_initInput'](ci2['input'] = uzor['createElement']('input')), ci2['inputContainer'] = uzor['createElement']('div'), ci2['inputContainer']['style']['position'] = 'absolute', ci2['inputContainer']['style']['zIndex'] = 0x186a0, uzor['container']['appendChild'](ci2['inputContainer']), ci2['inputContainer']['setPos'] = function (mn2it, xi_m0) {
        ci2['inputContainer']['style']['left'] = mn2it + 'px', ci2['inputContainer']['style']['top'] = xi_m0 + 'px';
      }, zo3urv['stage']['on']('resize', null, nmi_2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qspgj1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ouve3['_soundClass'] = psyq5h, ouve3['_musicClass'] = psyq5h;
    }, nmi_2['_onStageResize'] = function () {
      var $34re = zo3urv['stage']['_canvasTransform']['identity']();$34re['scale'](uzor['width'] / q5phs['canvas']['width'] / phys5d['getPixelRatio'](), uzor['height'] / q5phs['canvas']['height'] / phys5d['getPixelRatio']());
    }, nmi_2['wxinputFocus'] = function (jqsyg) {
      var b6j8g1 = ci2['inputElement']['target'];if (b6j8g1 && !b6j8g1['editable']) return;jl61b['window']['wx']['offKeyboardConfirm'](), jl61b['window']['wx']['offKeyboardInput'](), jl61b['window']['wx']['showKeyboard']({ 'defaultValue': b6j8g1['text'], 'maxLength': b6j8g1['maxChars'], 'multiple': b6j8g1['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_w0xc) {}, 'fail': function (oe4u) {} }), jl61b['window']['wx']['onKeyboardConfirm'](function (x2i_mc) {
        var q8bg = x2i_mc ? x2i_mc['value'] : '';b6j8g1['text'] = q8bg, b6j8g1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jl61b['window']['wx']['onKeyboardInput'](function (vuor) {
        var l61f8b = vuor ? vuor['value'] : '';if (!b6j8g1['multiline']) {
          if (l61f8b['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }b6j8g1['text'] = l61f8b, b6j8g1['event']('input');
      });
    }, nmi_2['inputEnter'] = function () {
      ci2['inputElement']['target']['focus'] = ![];
    }, nmi_2['wxinputblur'] = function () {
      nmi_2['hideKeyboard']();
    }, nmi_2['hideKeyboard'] = function () {
      jl61b['window']['wx']['offKeyboardConfirm'](), jl61b['window']['wx']['offKeyboardInput'](), jl61b['window']['wx']['hideKeyboard']({ 'success': function (u$ea4) {
          console['log']('隐藏键盘');
        }, 'fail': function (it2mxn) {
          console['log']('隐藏键盘出错:' + (it2mxn ? it2mxn['errMsg'] : ''));
        } });
    }, nmi_2;
  }(),
      dha54$ = function () {
    function phyd5() {}vz3rk(phyd5, 'laya.wx.mini.MiniLoader');var g1q8pj = phyd5['prototype'];return g1q8pj['load'] = function (u4re3, vzrk, zk0vw9, l68bj1, uead4) {
      zk0vw9 === void 0x0 && (zk0vw9 = !![]), uead4 === void 0x0 && (uead4 = ![]);var e4oru3 = this;e4oru3['_url'] = u4re3;if (u4re3['indexOf']('data:image') === 0x0) e4oru3['_type'] = vzrk = 'image';else e4oru3['_type'] = vzrk || (vzrk = e4oru3['getTypeFromUrl'](u4re3));e4oru3['_cache'] = zk0vw9, e4oru3['_data'] = null;var b8l1 = 'ascii';if (u4re3['indexOf']('.fnt') != -0x1) b8l1 = 'utf8';else vzrk == 'arraybuffer' && (b8l1 = '');;var s5yphq = gb861j['getFileExtension'](u4re3);if (phyd5['_fileTypeArr']['indexOf'](s5yphq) != -0x1) jl61b['EnvConfig']['load']['call'](this, u4re3, vzrk, zk0vw9, l68bj1, uead4);else {
        if (!jg8b1q['getFileInfo'](u4re3)) {
          if (u4re3['indexOf']('layaNativeDir/') != -0x1) {
            if (jl61b['isZiYu']) {
              var $eu3 = jg8b1q['ziyuFileData'][u4re3];e4oru3['onLoaded']($eu3);return;
            } else {
              cosnole['log']('read read'), jg8b1q['read'](u4re3, b8l1, new r4u3$(phyd5, phyd5['onReadNativeCallBack'], [b8l1, u4re3, vzrk, zk0vw9, l68bj1, uead4, e4oru3]));return;
            }
          }if ($ud4ae['rootPath'] == '') var qs5phy = u4re3;else qs5phy = u4re3['split']($ud4ae['rootPath'])[0x0];u4re3['indexOf']('http://') != -0x1 || u4re3['indexOf']('https://') != -0x1 ? jl61b['EnvConfig']['load']['call'](e4oru3, u4re3, vzrk, zk0vw9, l68bj1, uead4) : jg8b1q['readFile'](qs5phy, b8l1, new r4u3$(phyd5, phyd5['onReadNativeCallBack'], [b8l1, u4re3, vzrk, zk0vw9, l68bj1, uead4, e4oru3]), u4re3);
        } else jl61b['EnvConfig']['load']['call'](this, u4re3, vzrk, zk0vw9, l68bj1, uead4);
      }
    }, g1q8pj['resMgrLoad'] = function (vozu, r3vzok, yh5ps, aedu$, c0xm, psyd, kzr3v) {
      yh5ps === void 0x0 && (yh5ps = 0x0), aedu$ === void 0x0 && (aedu$ = ![]), c0xm === void 0x0 && (c0xm = ![]), psyd === void 0x0 && (psyd = 0x0), kzr3v === void 0x0 && (kzr3v = 0x3), vozu['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vozu), jl61b['EnvConfig']['resMgrLoad'](vozu, (g1b8q, qyph5, r$a4eu) => {
        phyd5['prototype']['resMgrLoadCallBack'](g1b8q, qyph5, r$a4eu, r3vzok);
      }, yh5ps, aedu$, c0xm, psyd, kzr3v);
    }, g1q8pj['resMgrLoadCallBack'] = function (jb186, e$34u, gq1jps, sa5hd) {
      console['log']('buff:::', jb186, gq1jps, jg8b1q['fileNativeDir'] + '///' + jg8b1q['fileListName']), sa5hd(jb186, e$34u, gq1jps);
    }, g1q8pj['clearRes'] = function (c0k_9, n_i2) {
      n_i2 === void 0x0 && (n_i2 = ![]);var b681lj = this;b681lj['clearRes'](c0k_9, n_i2);var zwc0k = jg8b1q['getFileInfo'](c0k_9);if (zwc0k && (c0k_9['indexOf']('http://') != -0x1 || c0k_9['indexOf']('https://') != -0x1)) {
        var bf16 = zwc0k['md5'],
            b81gq = jg8b1q['getFileNativePath'](bf16);jg8b1q['remove'](b81gq);
      }
    }, phyd5['onReadNativeCallBack'] = function (gjpq1s, ix, sh5a, g8bqj1, _0wci9, mix_, mxi2tn, c2_imx, wkv9oz) {
      g8bqj1 === void 0x0 && (g8bqj1 = !![]), mix_ === void 0x0 && (mix_ = ![]), c2_imx === void 0x0 && (c2_imx = 0x0);if (!c2_imx) {
        var i2xnm;if (sh5a == 'json' || sh5a == 'atlas') i2xnm = jl61b['getJson'](wkv9oz['data']);else sh5a == 'xml' ? i2xnm = gb861j['parseXMLFromString'](wkv9oz['data']) : i2xnm = wkv9oz['data'];mxi2tn['onLoaded'](i2xnm), !jl61b['isZiYu'] && jl61b['isPosMsgYu'] && sh5a != 'arraybuffer' && wx['postMessage']({ 'url': ix, 'data': i2xnm, 'isLoad': !![] });
      } else c2_imx == 0x1 && jl61b['EnvConfig']['load']['call'](mxi2tn, ix, sh5a, g8bqj1, _0wci9, mix_);
    }, _xim0c(phyd5, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), phyd5;
  }(),
      jg8b1q = function (pjgs) {
    function v3eou() {
      v3eou['__super']['call'](this);;
    }return vz3rk(v3eou, 'laya.wx.mini.MiniFileMgr', pjgs), v3eou['isLoadFile'] = function (x_min) {
      return v3eou['_fileTypeArr']['indexOf'](x_min) != -0x1 ? !![] : ![];
    }, v3eou['getFileInfo'] = function (j18gqp) {
      var t2nxm = j18gqp['split']('?')[0x0],
          j6bl81 = v3eou['filesListObj'][t2nxm];if (j6bl81 == null) return null;else return j6bl81;return null;
    }, v3eou['onFileUpdate'] = function ($3e4ur, $du4a) {
      var uo3rvz = $3e4ur['split']('/'),
          $dh4a5 = uo3rvz[uo3rvz['length'] - 0x1],
          x2ntmi = v3eou['getFileInfo']($du4a);if (x2ntmi == null) v3eou['onSaveFile']($du4a, $dh4a5);else {
        if (x2ntmi['readyUrl'] != $du4a) v3eou['remove']($dh4a5, $du4a);
      }
    }, v3eou['exits'] = function (i09w, w_ci9) {
      var aer4$ = v3eou['getFileNativePath'](i09w);v3eou['fs']['getFileInfo']({ 'filePath': aer4$, 'success': function (ah5$4d) {
          w_ci9 != null && w_ci9['runWith']([0x0, ah5$4d]);
        }, 'fail': function (mni2_) {
          w_ci9 != null && w_ci9['runWith']([0x1, mni2_]);
        } });
    }, v3eou['read'] = function (e$4rua, kzo3v, vr3ok, ero3u4) {
      kzo3v === void 0x0 && (kzo3v = 'ascill'), ero3u4 === void 0x0 && (ero3u4 = '');var v9wz0;ero3u4 != '' ? v9wz0 = v3eou['getFileNativePath'](e$4rua) : v9wz0 = e$4rua, v3eou['fs']['readFile']({ 'filePath': v9wz0, 'encoding': kzo3v, 'success': function (eoruv3) {
          vr3ok != null && vr3ok['runWith']([0x0, eoruv3]);
        }, 'fail': function (psdyh) {
          if (psdyh && ero3u4 != '') v3eou['down'](ero3u4, kzo3v, vr3ok, ero3u4);else vr3ok != null && vr3ok['runWith']([0x1]);
        } });
    }, v3eou['readNativeFile'] = function (gqpsj, zkwo9v) {
      v3eou['fs']['readFile']({ 'filePath': gqpsj, 'encoding': '', 'success': function (c0i) {
          zkwo9v != null && zkwo9v['runWith']([0x0]);
        }, 'fail': function (z9ok3) {
          zkwo9v != null && zkwo9v['runWith']([0x1]);
        } });
    }, v3eou['down'] = function (cwix0_, oru3zv, x2_mni, dy5ph) {
      oru3zv === void 0x0 && (oru3zv = 'ascill'), dy5ph === void 0x0 && (dy5ph = '');var u$4dea = v3eou['getFileNativePath'](dy5ph),
          ko9vw = v3eou['wxdown']({ 'url': cwix0_, 'filePath': u$4dea, 'success': function (rv3u) {
          if (rv3u['statusCode'] === 0xc8) v3eou['readFile'](rv3u['filePath'], oru3zv, x2_mni, dy5ph);
        }, 'fail': function (ti2x) {
          x2_mni != null && x2_mni['runWith']([0x1, ti2x]);
        } });ko9vw['onProgressUpdate'](function (rvzko3) {
        x2_mni != null && x2_mni['runWith']([0x2, rvzko3['progress']]);
      });
    }, v3eou['readFile'] = function (h$5dy, adeu$4, gb1jq, b8f1) {
      adeu$4 === void 0x0 && (adeu$4 = 'ascill'), b8f1 === void 0x0 && (b8f1 = ''), v3eou['fs']['readFile']({ 'filePath': h$5dy, 'encoding': adeu$4, 'success': function (ude4$a) {
          if (h$5dy['indexOf']('http://') != -0x1 || h$5dy['indexOf']('https://') != -0x1) v3eou['onFileUpdate'](h$5dy, b8f1);gb1jq != null && gb1jq['runWith']([0x0, ude4$a]);
        }, 'fail': function (z9okvw) {
          if (z9okvw) gb1jq != null && gb1jq['runWith']([0x1, z9okvw]);
        } });
    }, v3eou['downImg'] = function (sp5hy, i0mx_, i0m_xc) {
      i0m_xc === void 0x0 && (i0m_xc = '');var ue3$r = v3eou['wxdown']({ 'url': sp5hy, 'success': function (kowv9z) {
          kowv9z['statusCode'] === 0xc8 && v3eou['copyFile'](kowv9z['tempFilePath'], i0m_xc, i0mx_);
        }, 'fail': function (b1f86) {
          i0mx_ != null && i0mx_['runWith']([0x1, b1f86]);
        } });
    }, v3eou['copyFile'] = function (e3ru4, d$ue, cixw0_) {
      var w0_9k = e3ru4['split']('/'),
          v9wok = w0_9k[w0_9k['length'] - 0x1],
          z3vur = d$ue['split']('?')[0x0],
          sadhy = v3eou['getFileInfo'](d$ue),
          yasd5 = v3eou['getFileNativePath'](v9wok);v3eou['fs']['copyFile']({ 'srcPath': e3ru4, 'destPath': yasd5, 'success': function (dh$ya) {
          if (!sadhy) v3eou['onSaveFile'](d$ue, v9wok), cixw0_ != null && cixw0_['runWith']([0x0]);else {
            if (sadhy['readyUrl'] != d$ue) v3eou['remove'](v9wok, d$ue, cixw0_);
          }
        }, 'fail': function (cw0k9_) {
          cixw0_ != null && cixw0_['runWith']([0x1, cw0k9_]);
        } });
    }, v3eou['getFileNativePath'] = function (ay$h) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ay$h;
    }, v3eou['remove'] = function (pjsgq1, g18pjq, gj1psq) {
      g18pjq === void 0x0 && (g18pjq = '');var uo3z = v3eou['getFileInfo'](g18pjq),
          gpsqh = v3eou['getFileNativePath'](uo3z['md5']);zo3urv['loader']['clearRes'](uo3z['readyUrl']), v3eou['fs']['unlink']({ 'filePath': gpsqh, 'success': function (e4ar$u) {
          if (g18pjq != '') v3eou['onSaveFile'](g18pjq, pjsgq1);gj1psq != null && gj1psq['runWith']([0x0]);
        }, 'fail': function (vzwo9) {} });
    }, v3eou['onSaveFile'] = function (kvo93, zw9k0v) {
      var ruo3z = kvo93['split']('?')[0x0];v3eou['filesListObj'][ruo3z] = { 'md5': zw9k0v, 'readyUrl': kvo93 }, v3eou['fs']['writeFile']({ 'filePath': v3eou['fileNativeDir'] + '/' + v3eou['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v3eou['filesListObj']), 'success': function (imx) {
          console['log']('写入测试测试成功：', imx);
        }, 'fail': function (d$y) {
          console['log']('写入测试测试失败：', d$y);
        } });
    }, v3eou['existDir'] = function (lbj861, mc_i0x) {
      v3eou['fs']['mkdir']({ 'dirPath': lbj861, 'success': function ($43u) {
          mc_i0x != null && mc_i0x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (wo9vzk) {
          if (wo9vzk['errMsg']['indexOf']('file already exists') != -0x1) v3eou['readSync'](v3eou['fileListName'], 'utf8', mc_i0x);else mc_i0x != null && mc_i0x['runWith']([0x1, wo9vzk]);
        } });
    }, v3eou['readSync'] = function (sh5y, pys5h, e4a5$d, ys5hpq) {
      pys5h === void 0x0 && (pys5h = 'ascill'), ys5hpq === void 0x0 && (ys5hpq = '');var q1j8pg = v3eou['getFileNativePath'](sh5y),
          phgqy;try {
        phgqy = v3eou['fs']['readFileSync'](q1j8pg), e4a5$d != null && e4a5$d['runWith']([0x0, { 'data': phgqy }]);
      } catch (_2mxn) {
        e4a5$d != null && e4a5$d['runWith']([0x1]);
      }
    }, v3eou['readCache'] = function () {}, v3eou['writeCache'] = function (m2x_ci) {
      var ps1j = readyUrl['split']('?')[0x0];v3eou['filesListObj'][ps1j] = { 'md5': md5Name, 'readyUrl': readyUrl }, v3eou['fs']['writeFile']({ 'filePath': v3eou['fileNativeDir'] + '/' + v3eou['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v3eou['filesListObj']), 'success': function (wk9ovz) {}, 'fail': function (pgqj81) {} });
    }, v3eou['setNativeFileDir'] = function (bgq81j) {
      v3eou['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bgq81j;
    }, v3eou['filesListObj'] = {}, v3eou['fileNativeDir'] = null, v3eou['fileListName'] = 'layaairfiles.txt', v3eou['ziyuFileData'] = {}, _xim0c(v3eou, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v3eou;
  }(a5$4de),
      psyq5h = function (wc0_) {
    function veru3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], veru3['__super']['call'](this), this['_sound'] = veru3['_createSound']();
    }vz3rk(veru3, 'laya.wx.mini.MiniSound', wc0_);var vo3ruz = veru3['prototype'];return vo3ruz['load'] = function (vor3e) {
      var z3k9v = this;vor3e = $ud4ae['formatURL'](vor3e), this['url'] = vor3e;if (veru3['_audioCache'][vor3e]) {
        this['event']('complete');return;
      }function $4dea() {
        if (veru3['_null'] != undefined) z3k9v['_sound']['onCanplay'](veru3['_null']), z3k9v['_sound']['onError'](veru3['_null']);else try {
          z3k9v['_sound']['onCanplay'](null), z3k9v['_sound']['onError'](null), veru3['_null'] = null;
        } catch (uo4e3) {
          console['warn']('[wxmini] _clearSound:' + uo4e3), z3k9v['_sound']['onCanplay'](m2n7tx), z3k9v['_sound']['onError'](m2n7tx), veru3['_null'] = m2n7tx;
        }
      }function ahsyd5() {
        $4dea(), m_ci0x['loaded'] = !![], m_ci0x['event']('complete'), veru3['_audioCache'][m_ci0x['url']] = m_ci0x;
      }function l168jb(jbgq8) {
        console['error']('errCode=' + jbgq8['errCode'] + '  errMsg=' + jbgq8['errMsg']), $4dea(), m_ci0x['event']('error');
      }function m2n7tx() {}this['_sound']['onCanplay'](ahsyd5), this['_sound']['onError'](l168jb), this['_sound']['src'] = vor3e;var m_ci0x = this;
    }, vo3ruz['play'] = function (sphyd5, vor3z) {
      sphyd5 === void 0x0 && (sphyd5 = 0x0), vor3z === void 0x0 && (vor3z = 0x0);var ur3vzo;if (this['url'] == ouve3['_tMusic']) {
        if (!veru3['_musicAudio']) veru3['_musicAudio'] = veru3['_createSound']();ur3vzo = veru3['_musicAudio'];
      } else ur3vzo = veru3['_createSound']();ur3vzo['src'] = this['url'];var qpsygj = new $ad5yh(ur3vzo);return qpsygj['url'] = this['url'], qpsygj['loops'] = vor3z, qpsygj['startTime'] = sphyd5, qpsygj['play'](), ouve3['addChannel'](qpsygj), qpsygj;
    }, vo3ruz['dispose'] = function () {
      var yh5q = veru3['_audioCache'][this['url']];yh5q && (yh5q['src'] = '', delete veru3['_audioCache'][this['url']]);
    }, ru3zv(0x0, vo3ruz, 'duration', function () {
      return this['_sound']['duration'];
    }), veru3['_createSound'] = function () {
      return veru3['_id']++, jl61b['window']['wx']['createInnerAudioContext']();
    }, veru3['_musicAudio'] = null, veru3['_id'] = 0x0, veru3['_audioCache'] = {}, veru3['_null'] = undefined, veru3;
  }(a5$4de),
      $ad5yh = function (jbg81q) {
    function urove3(q5sphy) {
      this['_audio'] = null, this['_onEnd'] = null, urove3['__super']['call'](this), this['_audio'] = q5sphy, this['_onEnd'] = gb861j['bind'](this['__onEnd'], this), q5sphy['onEnded'](this['_onEnd']);
    }vz3rk(urove3, 'laya.wx.mini.MiniSoundChannel', jbg81q);var ouzrv3 = urove3['prototype'];return ouzrv3['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zo3urv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ouzrv3['__onNull'] = function () {}, ouzrv3['play'] = function () {
      this['isStopped'] = ![], ouve3['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ouzrv3['stop'] = function () {
      this['isStopped'] = !![], ouve3['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (urove3['_null'] != undefined) this['_audio']['onEnded'](urove3['_null']);else try {
        this['_audio']['onEnded'](null), urove3['_null'] = null;
      } catch (zv90) {
        console['warn']('[wxmini] stop:' + zv90), this['_audio']['onEnded'](gb861j['bind'](this['__onNull'], this)), urove3['_null'] = gb861j['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ouzrv3['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ouzrv3['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ouve3['addChannel'](this), this['_audio']['play']();
    }, ru3zv(0x0, ouzrv3, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ru3zv(0x0, ouzrv3, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ru3zv(0x0, ouzrv3, 'volume', function () {
      return 0x1;
    }, function (u$aed) {}), urove3['_null'] = undefined, urove3;
  }(x_ic);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var x_c0mi in Laya) {
    var b1l6 = Laya[x_c0mi];b1l6 && b1l6['__isclass'] && (exports[x_c0mi] = b1l6);
  }
});