var F = wx.$D;
(function (window, document, o_zlmi) {
  var ec0tsv = o_zlmi['un'],
      veq0 = o_zlmi['uns'],
      stvqwk = o_zlmi['static'],
      xk6g = o_zlmi['class'],
      rio_lz = o_zlmi['getset'],
      l_2z = o_zlmi['__newvec'],
      h2nrz = laya['utils']['Browser'],
      i1r2 = laya['events']['Event'],
      p9fbu = laya['events']['EventDispatcher'],
      qkt6vw = laya['resource']['HTMLImage'],
      q6vkx = laya['utils']['Handler'],
      _iozrl = laya['display']['Input'],
      io_lmz = laya['net']['Loader'],
      z2_ihr = laya['maths']['Matrix'],
      zli_2 = laya['renders']['Render'],
      a56jx = laya['utils']['RunDriver'],
      _h2i = laya['media']['Sound'],
      r_2ilz = laya['media']['SoundChannel'],
      il_zm = laya['media']['SoundManager'],
      uf39p = laya['display']['Stage'],
      ts03e = laya['net']['URL'],
      rzi2_ = laya['utils']['Utils'],
      upbf93 = function () {
    function qx6vwk() {}return xk6g(qx6vwk, 'laya.wx.mini.MiniAdpter'), qx6vwk['getJson'] = function (nr21h8) {
      return JSON['parse'](nr21h8);
    }, qx6vwk['init'] = function (u9p3f, h2_z) {
      u9p3f === void 0x0 && (u9p3f = ![]), h2_z === void 0x0 && (h2_z = ![]);if (qx6vwk['_inited']) return;qx6vwk['window'] = window;if (qx6vwk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;qx6vwk['_inited'] = !![], qx6vwk['isZiYu'] = h2_z, qx6vwk['isPosMsgYu'] = u9p3f, qx6vwk['EnvConfig'] = {}, !qx6vwk['isZiYu'] && (nyh8$['setNativeFileDir']('/layaairGame'), nyh8$['existDir'](nyh8$['fileNativeDir'], q6vkx['create'](qx6vwk, qx6vwk['onMkdirCallBack']))), qx6vwk['window']['focus'] = function () {}, o_zlmi['getUrlPath'] = function () {}, qx6vwk['window']['logtime'] = function (z2i_lr) {}, qx6vwk['window']['alertTimeLog'] = function (a5lgm) {}, qx6vwk['window']['resetShareInfo'] = function () {}, qx6vwk['window']['CanvasRenderingContext2D'] = function () {}, qx6vwk['window']['CanvasRenderingContext2D']['prototype'] = qx6vwk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qx6vwk['window']['document']['body']['appendChild'] = function () {}, qx6vwk['EnvConfig']['pixelRatioInt'] = 0x0, a56jx['getPixelRatio'] = qx6vwk['pixelRatio'], qx6vwk['_preCreateElement'] = h2nrz['createElement'], h2nrz['createElement'] = qx6vwk['createElement'], a56jx['createShaderCondition'] = qx6vwk['createShaderCondition'], rzi2_['parseXMLFromString'] = qx6vwk['parseXMLFromString'], _iozrl['_createInputElement'] = om_5li['_createInputElement'], qx6vwk['EnvConfig']['load'] = io_lmz['prototype']['load'], io_lmz['prototype']['load'] = jkx6wa['prototype']['load'], qx6vwk['isZiYu'] && u9p3f && wx['onMessage'](function (qxwv) {
        qxwv['isLoad'] && (nyh8$['ziyuFileData'][qxwv['url']] = qxwv['data']);
      });
    }, qx6vwk['onMkdirCallBack'] = function (ior_z, amog5) {
      if (!ior_z) nyh8$['filesListObj'] = JSON['parse'](amog5['data']);
    }, qx6vwk['pixelRatio'] = function () {
      if (!qx6vwk['EnvConfig']['pixelRatioInt']) try {
        var setc30 = wx['getSystemInfoSync']();return qx6vwk['EnvConfig']['pixelRatioInt'] = setc30['pixelRatio'], setc30 = setc30, setc30['pixelRatio'];
      } catch (lo_mg) {}return qx6vwk['EnvConfig']['pixelRatioInt'];
    }, qx6vwk['createElement'] = function (stqw) {
      if (stqw == 'canvas') {
        var wv6qk;return qx6vwk['idx'] == 0x1 ? qx6vwk['isZiYu'] ? (wv6qk = sharedCanvas, wv6qk['style'] = {}) : wv6qk = window['canvas'] : wv6qk = window['wx']['createCanvas'](), qx6vwk['idx']++, wv6qk;
      } else {
        if (stqw == 'textarea' || stqw == 'input') return qx6vwk['onCreateInput'](stqw);else {
          if (stqw == 'div') {
            var ajom = qx6vwk['_preCreateElement'](stqw);return ajom['contains'] = function (t0seqv) {
              return null;
            }, ajom['removeChild'] = function (qxwvk) {}, ajom;
          } else return qx6vwk['_preCreateElement'](stqw);
        }
      }
    }, qx6vwk['onCreateInput'] = function (bpuc0) {
      var oz = qx6vwk['_preCreateElement'](bpuc0);return oz['focus'] = om_5li['wxinputFocus'], oz['blur'] = om_5li['wxinputblur'], oz['style'] = {}, oz['value'] = 0x0, oz['parentElement'] = {}, oz['placeholder'] = {}, oz['type'] = {}, oz['setColor'] = function (y8$n) {}, oz['setType'] = function (_lmo5) {}, oz['setFontFace'] = function (kajx6g) {}, oz['addEventListener'] = function (gamj5) {}, oz['contains'] = function (oj) {
        return null;
      }, oz['removeChild'] = function (tqk6wv) {}, oz;
    }, qx6vwk['createShaderCondition'] = function ($2h1n8) {
      var n1h28$ = this,
          $128 = function () {
        var pu0cb = $2h1n8;return n1h28$[$2h1n8['replace']('this.', '')];
      };return $128;
    }, qx6vwk['EnvConfig'] = null, qx6vwk['window'] = null, qx6vwk['_preCreateElement'] = null, qx6vwk['_inited'] = ![], qx6vwk['wxRequest'] = null, qx6vwk['systemInfo'] = null, qx6vwk['version'] = '0.0.1', qx6vwk['isZiYu'] = ![], qx6vwk['isPosMsgYu'] = ![], qx6vwk['parseXMLFromString'] = function (vtesq0) {
      var nz2h1r, c93bpu;vtesq0 = vtesq0['replace'](/>\s+</g, '><');try {
        nz2h1r = new window['Parser']['DOMParser']()['parseFromString'](vtesq0, 'text/xml');
      } catch (xwkj) {
        throw '需要引入xml解析库文件';
      }return nz2h1r;
    }, qx6vwk['idx'] = 0x1, qx6vwk;
  }(),
      ri_2h = function () {
    function zi2l_() {}xk6g(zi2l_, 'laya.wx.mini.MiniImage');var il_z2r = zi2l_['prototype'];return il_z2r['_loadImage'] = function (il_moz) {
      var mog_ = this,
          jqw = ![];il_moz['indexOf']('layaNativeDir/') == -0x1 && (jqw = !![], il_moz = ts03e['formatURL'](il_moz));if (!nyh8$['getFileInfo'](il_moz)) {
        if (il_moz['indexOf']('http://') != -0x1 || il_moz['indexOf']('https://') != -0x1) nyh8$['downImg'](il_moz, new q6vkx(zi2l_, zi2l_['onDownImgCallBack'], [il_moz, mog_]), il_moz);else zi2l_['onCreateImage'](il_moz, mog_, !![]);
      } else zi2l_['onCreateImage'](il_moz, mog_, !jqw);
    }, zi2l_['onDownImgCallBack'] = function (j6xkga, e3su0, xw6qk) {
      if (!xw6qk) zi2l_['onCreateImage'](j6xkga, e3su0);else e3su0['onError'](null);
    }, zi2l_['onCreateImage'] = function (e3p0c, o5glm_, bpuf) {
      bpuf === void 0x0 && (bpuf = ![]);var mao5;if (!bpuf) {
        var b39 = nyh8$['getFileInfo'](e3p0c),
            lzir_o = b39['md5'];mao5 = nyh8$['getFileNativePath'](lzir_o);
      } else mao5 = e3p0c;if (o5glm_['imgCache'] == null) o5glm_['imgCache'] = {};var u0sc3;function m5lag() {
        u0sc3['onload'] = null, u0sc3['onerror'] = null, delete o5glm_['imgCache'][e3p0c];
      };var almo5 = function () {
        m5lag(), o5glm_['onLoaded'](u0sc3);
      },
          aglmo5 = function () {
        m5lag(), o5glm_['event']('error', 'Load image failed');
      };o5glm_['_type'] == 'nativeimage' ? (u0sc3 = new h2nrz['window']['Image'](), u0sc3['crossOrigin'] = '', u0sc3['onload'] = almo5, u0sc3['onerror'] = aglmo5, u0sc3['src'] = mao5, o5glm_['imgCache'][e3p0c] = u0sc3) : new qkt6vw['create'](mao5, { 'onload': almo5, 'onerror': aglmo5, 'onCreate': function (wqxv6) {
          u0sc3 = wqxv6, o5glm_['imgCache'][e3p0c] = wqxv6;
        } });
    }, zi2l_;
  }(),
      om_5li = function () {
    function jma5go() {}return xk6g(jma5go, 'laya.wx.mini.MiniInput'), jma5go['_createInputElement'] = function () {
      _iozrl['_initInput'](_iozrl['area'] = h2nrz['createElement']('textarea')), _iozrl['_initInput'](_iozrl['input'] = h2nrz['createElement']('input')), _iozrl['inputContainer'] = h2nrz['createElement']('div'), _iozrl['inputContainer']['style']['position'] = 'absolute', _iozrl['inputContainer']['style']['zIndex'] = 0x186a0, h2nrz['container']['appendChild'](_iozrl['inputContainer']), _iozrl['inputContainer']['setPos'] = function (epcu, xgj56) {
        _iozrl['inputContainer']['style']['left'] = epcu + 'px', _iozrl['inputContainer']['style']['top'] = xgj56 + 'px';
      }, o_zlmi['stage']['on']('resize', null, jma5go['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (goma5l) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), il_zm['_soundClass'] = ojmag, il_zm['_musicClass'] = ojmag;
    }, jma5go['_onStageResize'] = function () {
      var w6akx = o_zlmi['stage']['_canvasTransform']['identity']();w6akx['scale'](h2nrz['width'] / zli_2['canvas']['width'] / a56jx['getPixelRatio'](), h2nrz['height'] / zli_2['canvas']['height'] / a56jx['getPixelRatio']());
    }, jma5go['wxinputFocus'] = function (q0evts) {
      var kq6jx = _iozrl['inputElement']['target'];if (kq6jx && !kq6jx['editable']) return;upbf93['window']['wx']['offKeyboardConfirm'](), upbf93['window']['wx']['offKeyboardInput'](), upbf93['window']['wx']['showKeyboard']({ 'defaultValue': kq6jx['text'], 'maxLength': kq6jx['maxChars'], 'multiple': kq6jx['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mol5ga) {}, 'fail': function ($y8h1n) {} }), upbf93['window']['wx']['onKeyboardConfirm'](function (qtkwv6) {
        var u0s3c = qtkwv6 ? qtkwv6['value'] : '';kq6jx['text'] = u0s3c, kq6jx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), upbf93['window']['wx']['onKeyboardInput'](function (qvste) {
        var wtsveq = qvste ? qvste['value'] : '';if (!kq6jx['multiline']) {
          if (wtsveq['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kq6jx['text'] = wtsveq, kq6jx['event']('input');
      });
    }, jma5go['inputEnter'] = function () {
      _iozrl['inputElement']['target']['focus'] = ![];
    }, jma5go['wxinputblur'] = function () {
      jma5go['hideKeyboard']();
    }, jma5go['hideKeyboard'] = function () {
      upbf93['window']['wx']['offKeyboardConfirm'](), upbf93['window']['wx']['offKeyboardInput'](), upbf93['window']['wx']['hideKeyboard']({ 'success': function (lzor) {
          console['log']('隐藏键盘');
        }, 'fail': function (qt6k) {
          console['log']('隐藏键盘出错:' + (qt6k ? qt6k['errMsg'] : ''));
        } });
    }, jma5go;
  }(),
      jkx6wa = function () {
    function r1hz2i() {}xk6g(r1hz2i, 'laya.wx.mini.MiniLoader');var stevqw = r1hz2i['prototype'];return stevqw['load'] = function (kj6q, x56ajg, g_lmo, b3c0p, xmjg5) {
      g_lmo === void 0x0 && (g_lmo = !![]), xmjg5 === void 0x0 && (xmjg5 = ![]);var ilm5_o = this;ilm5_o['_url'] = kj6q;if (kj6q['indexOf']('data:image') === 0x0) ilm5_o['_type'] = x56ajg = 'image';else ilm5_o['_type'] = x56ajg || (x56ajg = ilm5_o['getTypeFromUrl'](kj6q));ilm5_o['_cache'] = g_lmo, ilm5_o['_data'] = null;var pfbu3 = 'ascii';if (kj6q['indexOf']('.fnt') != -0x1) pfbu3 = 'utf8';else x56ajg == 'arraybuffer' && (pfbu3 = '');;var n12r8h = rzi2_['getFileExtension'](kj6q);if (r1hz2i['_fileTypeArr']['indexOf'](n12r8h) != -0x1) upbf93['EnvConfig']['load']['call'](this, kj6q, x56ajg, g_lmo, b3c0p, xmjg5);else {
        if (!nyh8$['getFileInfo'](kj6q)) {
          if (kj6q['indexOf']('layaNativeDir/') != -0x1) {
            if (upbf93['isZiYu']) {
              var cue30s = nyh8$['ziyuFileData'][kj6q];ilm5_o['onLoaded'](cue30s);return;
            } else {
              cosnole['log']('read read'), nyh8$['read'](kj6q, pfbu3, new q6vkx(r1hz2i, r1hz2i['onReadNativeCallBack'], [pfbu3, kj6q, x56ajg, g_lmo, b3c0p, xmjg5, ilm5_o]));return;
            }
          }if (ts03e['rootPath'] == '') var xkw6ja = kj6q;else xkw6ja = kj6q['split'](ts03e['rootPath'])[0x0];kj6q['indexOf']('http://') != -0x1 || kj6q['indexOf']('https://') != -0x1 ? upbf93['EnvConfig']['load']['call'](ilm5_o, kj6q, x56ajg, g_lmo, b3c0p, xmjg5) : nyh8$['readFile'](xkw6ja, pfbu3, new q6vkx(r1hz2i, r1hz2i['onReadNativeCallBack'], [pfbu3, kj6q, x56ajg, g_lmo, b3c0p, xmjg5, ilm5_o]), kj6q);
        } else upbf93['EnvConfig']['load']['call'](this, kj6q, x56ajg, g_lmo, b3c0p, xmjg5);
      }
    }, stevqw['resMgrLoad'] = function (wtvq, cpu3, zi_2hr, wev, rzi_, bup97f, ces3u0) {
      zi_2hr === void 0x0 && (zi_2hr = 0x0), wev === void 0x0 && (wev = ![]), rzi_ === void 0x0 && (rzi_ = ![]), bup97f === void 0x0 && (bup97f = 0x0), ces3u0 === void 0x0 && (ces3u0 = 0x3), wtvq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wtvq), upbf93['EnvConfig']['resMgrLoad'](wtvq, (e0qtsv, up03ce, n$h1) => {
        r1hz2i['prototype']['resMgrLoadCallBack'](e0qtsv, up03ce, n$h1, cpu3);
      }, zi_2hr, wev, rzi_, bup97f, ces3u0);
    }, stevqw['resMgrLoadCallBack'] = function (bcu03p, e03pc, jmg5o, vkstq) {
      console['log']('buff:::', bcu03p, jmg5o, nyh8$['fileNativeDir'] + '///' + nyh8$['fileListName']), vkstq(bcu03p, e03pc, jmg5o);
    }, stevqw['clearRes'] = function (fu93p, tswkvq) {
      tswkvq === void 0x0 && (tswkvq = ![]);var cvest0 = this;cvest0['clearRes'](fu93p, tswkvq);var cse = nyh8$['getFileInfo'](fu93p);if (cse && (fu93p['indexOf']('http://') != -0x1 || fu93p['indexOf']('https://') != -0x1)) {
        var jgkx = cse['md5'],
            vtks = nyh8$['getFileNativePath'](jgkx);nyh8$['remove'](vtks);
      }
    }, r1hz2i['onReadNativeCallBack'] = function (vwt6, rn12zh, yh18, hz1ir2, twesvq, m5_oi, esc03, r8n12, j5xag) {
      hz1ir2 === void 0x0 && (hz1ir2 = !![]), m5_oi === void 0x0 && (m5_oi = ![]), r8n12 === void 0x0 && (r8n12 = 0x0);if (!r8n12) {
        var v6xqk;if (yh18 == 'json' || yh18 == 'atlas') v6xqk = upbf93['getJson'](j5xag['data']);else yh18 == 'xml' ? v6xqk = rzi2_['parseXMLFromString'](j5xag['data']) : v6xqk = j5xag['data'];esc03['onLoaded'](v6xqk), !upbf93['isZiYu'] && upbf93['isPosMsgYu'] && yh18 != 'arraybuffer' && wx['postMessage']({ 'url': rn12zh, 'data': v6xqk, 'isLoad': !![] });
      } else r8n12 == 0x1 && upbf93['EnvConfig']['load']['call'](esc03, rn12zh, yh18, hz1ir2, twesvq, m5_oi);
    }, stvqwk(r1hz2i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), r1hz2i;
  }(),
      nyh8$ = function (gjxk6a) {
    function bpu3c0() {
      bpu3c0['__super']['call'](this);;
    }return xk6g(bpu3c0, 'laya.wx.mini.MiniFileMgr', gjxk6a), bpu3c0['isLoadFile'] = function (_g5) {
      return bpu3c0['_fileTypeArr']['indexOf'](_g5) != -0x1 ? !![] : ![];
    }, bpu3c0['getFileInfo'] = function (zm_lio) {
      var wetqsv = zm_lio['split']('?')[0x0],
          wtkv = bpu3c0['filesListObj'][wetqsv];if (wtkv == null) return null;else return wtkv;return null;
    }, bpu3c0['onFileUpdate'] = function (lag5om, puf93) {
      var kaw = lag5om['split']('/'),
          ilzr_ = kaw[kaw['length'] - 0x1],
          i2lr_ = bpu3c0['getFileInfo'](puf93);if (i2lr_ == null) bpu3c0['onSaveFile'](puf93, ilzr_);else {
        if (i2lr_['readyUrl'] != puf93) bpu3c0['remove'](ilzr_, puf93);
      }
    }, bpu3c0['exits'] = function ($h8yn, n1$8hy) {
      var bpf39u = bpu3c0['getFileNativePath']($h8yn);bpu3c0['fs']['getFileInfo']({ 'filePath': bpf39u, 'success': function (pf94b) {
          n1$8hy != null && n1$8hy['runWith']([0x0, pf94b]);
        }, 'fail': function (p79b4) {
          n1$8hy != null && n1$8hy['runWith']([0x1, p79b4]);
        } });
    }, bpu3c0['read'] = function (sc0vte, tsv0c, iz_r, h$82n) {
      tsv0c === void 0x0 && (tsv0c = 'ascill'), h$82n === void 0x0 && (h$82n = '');var $82n;h$82n != '' ? $82n = bpu3c0['getFileNativePath'](sc0vte) : $82n = sc0vte, bpu3c0['fs']['readFile']({ 'filePath': $82n, 'encoding': tsv0c, 'success': function (vqk6t) {
          iz_r != null && iz_r['runWith']([0x0, vqk6t]);
        }, 'fail': function (tqvse0) {
          if (tqvse0 && h$82n != '') bpu3c0['down'](h$82n, tsv0c, iz_r, h$82n);else iz_r != null && iz_r['runWith']([0x1]);
        } });
    }, bpu3c0['readNativeFile'] = function (tkv6, axj6wk) {
      bpu3c0['fs']['readFile']({ 'filePath': tkv6, 'encoding': '', 'success': function (_5gmlo) {
          axj6wk != null && axj6wk['runWith']([0x0]);
        }, 'fail': function (svtce0) {
          axj6wk != null && axj6wk['runWith']([0x1]);
        } });
    }, bpu3c0['down'] = function (k6tvw, p3c9b, uc03se, qte) {
      p3c9b === void 0x0 && (p3c9b = 'ascill'), qte === void 0x0 && (qte = '');var $h1n = bpu3c0['getFileNativePath'](qte),
          cevts = bpu3c0['wxdown']({ 'url': k6tvw, 'filePath': $h1n, 'success': function (g5ja6x) {
          if (g5ja6x['statusCode'] === 0xc8) bpu3c0['readFile'](g5ja6x['filePath'], p3c9b, uc03se, qte);
        }, 'fail': function (_o5) {
          uc03se != null && uc03se['runWith']([0x1, _o5]);
        } });cevts['onProgressUpdate'](function (g5omj) {
        uc03se != null && uc03se['runWith']([0x2, g5omj['progress']]);
      });
    }, bpu3c0['readFile'] = function (eqsvwt, gmxja5, qtk6wv, stwkvq) {
      gmxja5 === void 0x0 && (gmxja5 = 'ascill'), stwkvq === void 0x0 && (stwkvq = ''), bpu3c0['fs']['readFile']({ 'filePath': eqsvwt, 'encoding': gmxja5, 'success': function (e0vtsc) {
          if (eqsvwt['indexOf']('http://') != -0x1 || eqsvwt['indexOf']('https://') != -0x1) bpu3c0['onFileUpdate'](eqsvwt, stwkvq);qtk6wv != null && qtk6wv['runWith']([0x0, e0vtsc]);
        }, 'fail': function (_hzi2) {
          if (_hzi2) qtk6wv != null && qtk6wv['runWith']([0x1, _hzi2]);
        } });
    }, bpu3c0['downImg'] = function (ec03, wvqts, _i2lzr) {
      _i2lzr === void 0x0 && (_i2lzr = '');var ksvwqt = bpu3c0['wxdown']({ 'url': ec03, 'success': function (hrn12z) {
          hrn12z['statusCode'] === 0xc8 && bpu3c0['copyFile'](hrn12z['tempFilePath'], _i2lzr, wvqts);
        }, 'fail': function (p47bf9) {
          wvqts != null && wvqts['runWith']([0x1, p47bf9]);
        } });
    }, bpu3c0['copyFile'] = function (z_moli, wsvktq, lori_) {
      var tec0v = z_moli['split']('/'),
          puec30 = tec0v[tec0v['length'] - 0x1],
          z1h2rn = wsvktq['split']('?')[0x0],
          kw6qjx = bpu3c0['getFileInfo'](wsvktq),
          eqswtv = bpu3c0['getFileNativePath'](puec30);bpu3c0['fs']['copyFile']({ 'srcPath': z_moli, 'destPath': eqswtv, 'success': function (tvqew) {
          if (!kw6qjx) bpu3c0['onSaveFile'](wsvktq, puec30), lori_ != null && lori_['runWith']([0x0]);else {
            if (kw6qjx['readyUrl'] != wsvktq) bpu3c0['remove'](puec30, wsvktq, lori_);
          }
        }, 'fail': function (qjwkx) {
          lori_ != null && lori_['runWith']([0x1, qjwkx]);
        } });
    }, bpu3c0['getFileNativePath'] = function (_olimz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _olimz;
    }, bpu3c0['remove'] = function (wseqvt, scet, tvq0) {
      scet === void 0x0 && (scet = '');var tvkwqs = bpu3c0['getFileInfo'](scet),
          e3t = bpu3c0['getFileNativePath'](tvkwqs['md5']);o_zlmi['loader']['clearRes'](tvkwqs['readyUrl']), bpu3c0['fs']['unlink']({ 'filePath': e3t, 'success': function (xakwj) {
          if (scet != '') bpu3c0['onSaveFile'](scet, wseqvt);tvq0 != null && tvq0['runWith']([0x0]);
        }, 'fail': function (ma5log) {} });
    }, bpu3c0['onSaveFile'] = function (hn2r18, $18nhy) {
      var om5i_l = hn2r18['split']('?')[0x0];bpu3c0['filesListObj'][om5i_l] = { 'md5': $18nhy, 'readyUrl': hn2r18 }, bpu3c0['fs']['writeFile']({ 'filePath': bpu3c0['fileNativeDir'] + '/' + bpu3c0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bpu3c0['filesListObj']), 'success': function (e3puc) {
          console['log']('写入测试测试成功：', e3puc);
        }, 'fail': function (pu9cb3) {
          console['log']('写入测试测试失败：', pu9cb3);
        } });
    }, bpu3c0['existDir'] = function (j5oma, sue) {
      bpu3c0['fs']['mkdir']({ 'dirPath': j5oma, 'success': function (estq0v) {
          sue != null && sue['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (c0sv) {
          if (c0sv['errMsg']['indexOf']('file already exists') != -0x1) bpu3c0['readSync'](bpu3c0['fileListName'], 'utf8', sue);else sue != null && sue['runWith']([0x1, c0sv]);
        } });
    }, bpu3c0['readSync'] = function (z_ilor, ue03s, uf7p9, om_i) {
      ue03s === void 0x0 && (ue03s = 'ascill'), om_i === void 0x0 && (om_i = '');var wteqvs = bpu3c0['getFileNativePath'](z_ilor),
          oz_lim;try {
        oz_lim = bpu3c0['fs']['readFileSync'](wteqvs), uf7p9 != null && uf7p9['runWith']([0x0, { 'data': oz_lim }]);
      } catch (_lzro) {
        uf7p9 != null && uf7p9['runWith']([0x1]);
      }
    }, bpu3c0['readCache'] = function () {}, bpu3c0['writeCache'] = function (h8n$21) {
      var qwvks = readyUrl['split']('?')[0x0];bpu3c0['filesListObj'][qwvks] = { 'md5': md5Name, 'readyUrl': readyUrl }, bpu3c0['fs']['writeFile']({ 'filePath': bpu3c0['fileNativeDir'] + '/' + bpu3c0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](bpu3c0['filesListObj']), 'success': function (vqt6kw) {}, 'fail': function (m5gjoa) {} });
    }, bpu3c0['setNativeFileDir'] = function (zhr2i_) {
      bpu3c0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zhr2i_;
    }, bpu3c0['filesListObj'] = {}, bpu3c0['fileNativeDir'] = null, bpu3c0['fileListName'] = 'layaairfiles.txt', bpu3c0['ziyuFileData'] = {}, stvqwk(bpu3c0, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), bpu3c0;
  }(p9fbu),
      ojmag = function (kjwq6) {
    function qstew() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qstew['__super']['call'](this), this['_sound'] = qstew['_createSound']();
    }xk6g(qstew, 'laya.wx.mini.MiniSound', kjwq6);var up0c3e = qstew['prototype'];return up0c3e['load'] = function (h8rn2) {
      var u7b9fp = this;h8rn2 = ts03e['formatURL'](h8rn2), this['url'] = h8rn2;if (qstew['_audioCache'][h8rn2]) {
        this['event']('complete');return;
      }function h$18y() {
        if (qstew['_null'] != undefined) u7b9fp['_sound']['onCanplay'](qstew['_null']), u7b9fp['_sound']['onError'](qstew['_null']);else try {
          u7b9fp['_sound']['onCanplay'](null), u7b9fp['_sound']['onError'](null), qstew['_null'] = null;
        } catch (fp3b) {
          console['warn']('[wxmini] _clearSound:' + fp3b), u7b9fp['_sound']['onCanplay'](mo5gaj), u7b9fp['_sound']['onError'](mo5gaj), qstew['_null'] = mo5gaj;
        }
      }function ecs30t() {
        h$18y(), l2_zir['loaded'] = !![], l2_zir['event']('complete'), qstew['_audioCache'][l2_zir['url']] = l2_zir;
      }function pb39c(u0c3pe) {
        console['error']('errCode=' + u0c3pe['errCode'] + '  errMsg=' + u0c3pe['errMsg']), h$18y(), l2_zir['event']('error');
      }function mo5gaj() {}this['_sound']['onCanplay'](ecs30t), this['_sound']['onError'](pb39c), this['_sound']['src'] = h8rn2;var l2_zir = this;
    }, up0c3e['play'] = function (_2rhiz, c3e0t) {
      _2rhiz === void 0x0 && (_2rhiz = 0x0), c3e0t === void 0x0 && (c3e0t = 0x0);var gmo5l_;if (this['url'] == il_zm['_tMusic']) {
        if (!qstew['_musicAudio']) qstew['_musicAudio'] = qstew['_createSound']();gmo5l_ = qstew['_musicAudio'];
      } else gmo5l_ = qstew['_createSound']();gmo5l_['src'] = this['url'];var b93cp = new qx6kj(gmo5l_);return b93cp['url'] = this['url'], b93cp['loops'] = c3e0t, b93cp['startTime'] = _2rhiz, b93cp['play'](), il_zm['addChannel'](b93cp), b93cp;
    }, up0c3e['dispose'] = function () {
      var qwsvet = qstew['_audioCache'][this['url']];qwsvet && (qwsvet['src'] = '', delete qstew['_audioCache'][this['url']]);
    }, rio_lz(0x0, up0c3e, 'duration', function () {
      return this['_sound']['duration'];
    }), qstew['_createSound'] = function () {
      return qstew['_id']++, upbf93['window']['wx']['createInnerAudioContext']();
    }, qstew['_musicAudio'] = null, qstew['_id'] = 0x0, qstew['_audioCache'] = {}, qstew['_null'] = undefined, qstew;
  }(p9fbu),
      qx6kj = function (ub30pc) {
    function kstv(_oilrz) {
      this['_audio'] = null, this['_onEnd'] = null, kstv['__super']['call'](this), this['_audio'] = _oilrz, this['_onEnd'] = rzi2_['bind'](this['__onEnd'], this), _oilrz['onEnded'](this['_onEnd']);
    }xk6g(kstv, 'laya.wx.mini.MiniSoundChannel', ub30pc);var hr12i = kstv['prototype'];return hr12i['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (o_zlmi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hr12i['__onNull'] = function () {}, hr12i['play'] = function () {
      this['isStopped'] = ![], il_zm['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hr12i['stop'] = function () {
      this['isStopped'] = !![], il_zm['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (kstv['_null'] != undefined) this['_audio']['onEnded'](kstv['_null']);else try {
        this['_audio']['onEnded'](null), kstv['_null'] = null;
      } catch (buc03) {
        console['warn']('[wxmini] stop:' + buc03), this['_audio']['onEnded'](rzi2_['bind'](this['__onNull'], this)), kstv['_null'] = rzi2_['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hr12i['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hr12i['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], il_zm['addChannel'](this), this['_audio']['play']();
    }, rio_lz(0x0, hr12i, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rio_lz(0x0, hr12i, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rio_lz(0x0, hr12i, 'volume', function () {
      return 0x1;
    }, function (sev0q) {}), kstv['_null'] = undefined, kstv;
  }(r_2ilz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var g5jxa6 in Laya) {
    var tkqwvs = Laya[g5jxa6];tkqwvs && tkqwvs['__isclass'] && (exports[g5jxa6] = tkqwvs);
  }
});