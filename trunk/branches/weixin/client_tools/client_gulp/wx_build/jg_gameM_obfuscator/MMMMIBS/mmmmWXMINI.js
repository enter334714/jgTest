var Y = wx.$M;
(function (window, document, x1u9rk) {
  var e2zc8t = x1u9rk['un'],
      j7inmh = x1u9rk['uns'],
      _s6j = x1u9rk['static'],
      hl5n0i = x1u9rk['class'],
      ykxu19 = x1u9rk['getset'],
      d5b$l0 = x1u9rk['__newvec'],
      d$bwf = laya['utils']['Browser'],
      gec8o = laya['events']['Event'],
      et82ca = laya['events']['EventDispatcher'],
      a8t2c = laya['resource']['HTMLImage'],
      ca8ge = laya['utils']['Handler'],
      hijm7n = laya['display']['Input'],
      ce28ag = laya['net']['Loader'],
      $dwl = laya['maths']['Matrix'],
      m5inj = laya['renders']['Render'],
      j_hm4 = laya['utils']['RunDriver'],
      rv19x = laya['media']['Sound'],
      j74mh_ = laya['media']['SoundChannel'],
      ect2a = laya['media']['SoundManager'],
      h7_jm4 = laya['display']['Stage'],
      dl$5b = laya['net']['URL'],
      dwv$ = laya['utils']['Utils'],
      i5nhl = function () {
    function vw91rf() {}return hl5n0i(vw91rf, 'laya.wx.mini.MiniAdpter'), vw91rf['getJson'] = function (h0n) {
      return JSON['parse'](h0n);
    }, vw91rf['init'] = function (s4j_m7, jhmi7n) {
      s4j_m7 === void 0x0 && (s4j_m7 = ![]), jhmi7n === void 0x0 && (jhmi7n = ![]);if (vw91rf['_inited']) return;vw91rf['window'] = window;if (vw91rf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vw91rf['_inited'] = !![], vw91rf['isZiYu'] = jhmi7n, vw91rf['isPosMsgYu'] = s4j_m7, vw91rf['EnvConfig'] = {}, !vw91rf['isZiYu'] && (vbw$['setNativeFileDir']('/layaairGame'), vbw$['existDir'](vbw$['fileNativeDir'], ca8ge['create'](vw91rf, vw91rf['onMkdirCallBack']))), vw91rf['window']['focus'] = function () {}, x1u9rk['getUrlPath'] = function () {}, vw91rf['window']['logtime'] = function (t8pe) {}, vw91rf['window']['alertTimeLog'] = function (jimhn5) {}, vw91rf['window']['resetShareInfo'] = function () {}, vw91rf['window']['CanvasRenderingContext2D'] = function () {}, vw91rf['window']['CanvasRenderingContext2D']['prototype'] = vw91rf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vw91rf['window']['document']['body']['appendChild'] = function () {}, vw91rf['EnvConfig']['pixelRatioInt'] = 0x0, j_hm4['getPixelRatio'] = vw91rf['pixelRatio'], vw91rf['_preCreateElement'] = d$bwf['createElement'], d$bwf['createElement'] = vw91rf['createElement'], j_hm4['createShaderCondition'] = vw91rf['createShaderCondition'], dwv$['parseXMLFromString'] = vw91rf['parseXMLFromString'], hijm7n['_createInputElement'] = wvb9fr['_createInputElement'], vw91rf['EnvConfig']['load'] = ce28ag['prototype']['load'], ce28ag['prototype']['load'] = ca8go6['prototype']['load'], vw91rf['isZiYu'] && s4j_m7 && wx['onMessage'](function (fdvr) {
        fdvr['isLoad'] && (vbw$['ziyuFileData'][fdvr['url']] = fdvr['data']);
      });
    }, vw91rf['onMkdirCallBack'] = function (jm_n, l$id5) {
      if (!jm_n) vbw$['filesListObj'] = JSON['parse'](l$id5['data']);
    }, vw91rf['pixelRatio'] = function () {
      if (!vw91rf['EnvConfig']['pixelRatioInt']) try {
        var n_7mhj = wx['getSystemInfoSync']();return vw91rf['EnvConfig']['pixelRatioInt'] = n_7mhj['pixelRatio'], n_7mhj = n_7mhj, n_7mhj['pixelRatio'];
      } catch (ceao) {}return vw91rf['EnvConfig']['pixelRatioInt'];
    }, vw91rf['createElement'] = function (g6o) {
      if (g6o == 'canvas') {
        var og_s64;return vw91rf['idx'] == 0x1 ? vw91rf['isZiYu'] ? (og_s64 = sharedCanvas, og_s64['style'] = {}) : og_s64 = window['canvas'] : og_s64 = window['wx']['createCanvas'](), vw91rf['idx']++, og_s64;
      } else {
        if (g6o == 'textarea' || g6o == 'input') return vw91rf['onCreateInput'](g6o);else {
          if (g6o == 'div') {
            var gs6a4o = vw91rf['_preCreateElement'](g6o);return gs6a4o['contains'] = function (fwrv9b) {
              return null;
            }, gs6a4o['removeChild'] = function (os67_4) {}, gs6a4o;
          } else return vw91rf['_preCreateElement'](g6o);
        }
      }
    }, vw91rf['onCreateInput'] = function (s6oc) {
      var fdwrv = vw91rf['_preCreateElement'](s6oc);return fdwrv['focus'] = wvb9fr['wxinputFocus'], fdwrv['blur'] = wvb9fr['wxinputblur'], fdwrv['style'] = {}, fdwrv['value'] = 0x0, fdwrv['parentElement'] = {}, fdwrv['placeholder'] = {}, fdwrv['type'] = {}, fdwrv['setColor'] = function (nmh_) {}, fdwrv['setType'] = function (hi5l) {}, fdwrv['setFontFace'] = function (h5nj) {}, fdwrv['addEventListener'] = function (qyxu) {}, fdwrv['contains'] = function (k9u) {
        return null;
      }, fdwrv['removeChild'] = function (coag) {}, fdwrv;
    }, vw91rf['createShaderCondition'] = function (wv$dfb) {
      var tac8 = this,
          in5mlh = function () {
        var tz2p8 = wv$dfb;return tac8[wv$dfb['replace']('this.', '')];
      };return in5mlh;
    }, vw91rf['EnvConfig'] = null, vw91rf['window'] = null, vw91rf['_preCreateElement'] = null, vw91rf['_inited'] = ![], vw91rf['wxRequest'] = null, vw91rf['systemInfo'] = null, vw91rf['version'] = '0.0.1', vw91rf['isZiYu'] = ![], vw91rf['isPosMsgYu'] = ![], vw91rf['parseXMLFromString'] = function (js_476) {
      var h0in5, s7mj4;js_476 = js_476['replace'](/>\s+</g, '><');try {
        h0in5 = new window['Parser']['DOMParser']()['parseFromString'](js_476, 'text/xml');
      } catch (g6o4s_) {
        throw '需要引入xml解析库文件';
      }return h0in5;
    }, vw91rf['idx'] = 0x1, vw91rf;
  }(),
      vrwfdb = function () {
    function e8ac2g() {}hl5n0i(e8ac2g, 'laya.wx.mini.MiniImage');var jm_nh = e8ac2g['prototype'];return jm_nh['_loadImage'] = function (wf0$b) {
      var mnhi5j = this,
          v9kr = ![];wf0$b['indexOf']('layaNativeDir/') == -0x1 && (v9kr = !![], wf0$b = dl$5b['formatURL'](wf0$b));if (!vbw$['getFileInfo'](wf0$b)) {
        if (wf0$b['indexOf']('http://') != -0x1 || wf0$b['indexOf']('https://') != -0x1) vbw$['downImg'](wf0$b, new ca8ge(e8ac2g, e8ac2g['onDownImgCallBack'], [wf0$b, mnhi5j]), wf0$b);else e8ac2g['onCreateImage'](wf0$b, mnhi5j, !![]);
      } else e8ac2g['onCreateImage'](wf0$b, mnhi5j, !v9kr);
    }, e8ac2g['onDownImgCallBack'] = function (qky3x, sa6cog, y3qukx) {
      if (!y3qukx) e8ac2g['onCreateImage'](qky3x, sa6cog);else sa6cog['onError'](null);
    }, e8ac2g['onCreateImage'] = function (him5l, m_7s, wv9rbf) {
      wv9rbf === void 0x0 && (wv9rbf = ![]);var agc6o;if (!wv9rbf) {
        var ykqux = vbw$['getFileInfo'](him5l),
            oga46 = ykqux['md5'];agc6o = vbw$['getFileNativePath'](oga46);
      } else agc6o = him5l;if (m_7s['imgCache'] == null) m_7s['imgCache'] = {};var e82cz;function wrvdbf() {
        e82cz['onload'] = null, e82cz['onerror'] = null, delete m_7s['imgCache'][him5l];
      };var g6aso4 = function () {
        wrvdbf(), m_7s['onLoaded'](e82cz);
      },
          j5inmh = function () {
        wrvdbf(), m_7s['event']('error', 'Load image failed');
      };m_7s['_type'] == 'nativeimage' ? (e82cz = new d$bwf['window']['Image'](), e82cz['crossOrigin'] = '', e82cz['onload'] = g6aso4, e82cz['onerror'] = j5inmh, e82cz['src'] = agc6o, m_7s['imgCache'][him5l] = e82cz) : new a8t2c['create'](agc6o, { 'onload': g6aso4, 'onerror': j5inmh, 'onCreate': function (quy3) {
          e82cz = quy3, m_7s['imgCache'][him5l] = quy3;
        } });
    }, e8ac2g;
  }(),
      wvb9fr = function () {
    function i5l0n() {}return hl5n0i(i5l0n, 'laya.wx.mini.MiniInput'), i5l0n['_createInputElement'] = function () {
      hijm7n['_initInput'](hijm7n['area'] = d$bwf['createElement']('textarea')), hijm7n['_initInput'](hijm7n['input'] = d$bwf['createElement']('input')), hijm7n['inputContainer'] = d$bwf['createElement']('div'), hijm7n['inputContainer']['style']['position'] = 'absolute', hijm7n['inputContainer']['style']['zIndex'] = 0x186a0, d$bwf['container']['appendChild'](hijm7n['inputContainer']), hijm7n['inputContainer']['setPos'] = function (hmn_, dbrv) {
        hijm7n['inputContainer']['style']['left'] = hmn_ + 'px', hijm7n['inputContainer']['style']['top'] = dbrv + 'px';
      }, x1u9rk['stage']['on']('resize', null, i5l0n['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ga82ec) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), ect2a['_soundClass'] = tc2e8, ect2a['_musicClass'] = tc2e8;
    }, i5l0n['_onStageResize'] = function () {
      var _s4j7m = x1u9rk['stage']['_canvasTransform']['identity']();_s4j7m['scale'](d$bwf['width'] / m5inj['canvas']['width'] / j_hm4['getPixelRatio'](), d$bwf['height'] / m5inj['canvas']['height'] / j_hm4['getPixelRatio']());
    }, i5l0n['wxinputFocus'] = function (z28tep) {
      var y1qxu = hijm7n['inputElement']['target'];if (y1qxu && !y1qxu['editable']) return;i5nhl['window']['wx']['offKeyboardConfirm'](), i5nhl['window']['wx']['offKeyboardInput'](), i5nhl['window']['wx']['showKeyboard']({ 'defaultValue': y1qxu['text'], 'maxLength': y1qxu['maxChars'], 'multiple': y1qxu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (nmihj) {}, 'fail': function (_m47js) {} }), i5nhl['window']['wx']['onKeyboardConfirm'](function (h5mnl) {
        var u1xky = h5mnl ? h5mnl['value'] : '';y1qxu['text'] = u1xky, y1qxu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), i5nhl['window']['wx']['onKeyboardInput'](function (nij) {
        var p2et = nij ? nij['value'] : '';if (!y1qxu['multiline']) {
          if (p2et['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y1qxu['text'] = p2et, y1qxu['event']('input');
      });
    }, i5l0n['inputEnter'] = function () {
      hijm7n['inputElement']['target']['focus'] = ![];
    }, i5l0n['wxinputblur'] = function () {
      i5l0n['hideKeyboard']();
    }, i5l0n['hideKeyboard'] = function () {
      i5nhl['window']['wx']['offKeyboardConfirm'](), i5nhl['window']['wx']['offKeyboardInput'](), i5nhl['window']['wx']['hideKeyboard']({ 'success': function (e82pzt) {
          console['log']('隐藏键盘');
        }, 'fail': function (qyk1) {
          console['log']('隐藏键盘出错:' + (qyk1 ? qyk1['errMsg'] : ''));
        } });
    }, i5l0n;
  }(),
      ca8go6 = function () {
    function s74_6o() {}hl5n0i(s74_6o, 'laya.wx.mini.MiniLoader');var ago6sc = s74_6o['prototype'];return ago6sc['load'] = function (aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf) {
      lhm5n === void 0x0 && (lhm5n = !![]), dvrbwf === void 0x0 && (dvrbwf = ![]);var m5nli = this;m5nli['_url'] = aso4g6;if (aso4g6['indexOf']('data:image') === 0x0) m5nli['_type'] = ac8goe = 'image';else m5nli['_type'] = ac8goe || (ac8goe = m5nli['getTypeFromUrl'](aso4g6));m5nli['_cache'] = lhm5n, m5nli['_data'] = null;var y9ukx1 = 'ascii';if (aso4g6['indexOf']('.fnt') != -0x1) y9ukx1 = 'utf8';else ac8goe == 'arraybuffer' && (y9ukx1 = '');;var $d0lwb = dwv$['getFileExtension'](aso4g6);if (s74_6o['_fileTypeArr']['indexOf']($d0lwb) != -0x1) i5nhl['EnvConfig']['load']['call'](this, aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf);else {
        if (!vbw$['getFileInfo'](aso4g6)) {
          if (aso4g6['indexOf']('layaNativeDir/') != -0x1) {
            if (i5nhl['isZiYu']) {
              var q1xkyu = vbw$['ziyuFileData'][aso4g6];m5nli['onLoaded'](q1xkyu);return;
            } else {
              cosnole['log']('read read'), vbw$['read'](aso4g6, y9ukx1, new ca8ge(s74_6o, s74_6o['onReadNativeCallBack'], [y9ukx1, aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf, m5nli]));return;
            }
          }if (dl$5b['rootPath'] == '') var $b0dl = aso4g6;else $b0dl = aso4g6['split'](dl$5b['rootPath'])[0x0];aso4g6['indexOf']('http://') != -0x1 || aso4g6['indexOf']('https://') != -0x1 ? i5nhl['EnvConfig']['load']['call'](m5nli, aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf) : vbw$['readFile']($b0dl, y9ukx1, new ca8ge(s74_6o, s74_6o['onReadNativeCallBack'], [y9ukx1, aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf, m5nli]), aso4g6);
        } else i5nhl['EnvConfig']['load']['call'](this, aso4g6, ac8goe, lhm5n, bdw$vf, dvrbwf);
      }
    }, ago6sc['resMgrLoad'] = function (nhjm, mj7hin, bl5$d0, ms_j7, tc8, vrfwdb, kxy) {
      bl5$d0 === void 0x0 && (bl5$d0 = 0x0), ms_j7 === void 0x0 && (ms_j7 = ![]), tc8 === void 0x0 && (tc8 = ![]), vrfwdb === void 0x0 && (vrfwdb = 0x0), kxy === void 0x0 && (kxy = 0x3), nhjm['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nhjm), i5nhl['EnvConfig']['resMgrLoad'](nhjm, (vdwb, wl0$d, rukx9) => {
        s74_6o['prototype']['resMgrLoadCallBack'](vdwb, wl0$d, rukx9, mj7hin);
      }, bl5$d0, ms_j7, tc8, vrfwdb, kxy);
    }, ago6sc['resMgrLoadCallBack'] = function (z28pet, wrdb, t2z8pe, jmh4_7) {
      console['log']('buff:::', z28pet, t2z8pe, vbw$['fileNativeDir'] + '///' + vbw$['fileListName']), jmh4_7(z28pet, wrdb, t2z8pe);
    }, ago6sc['clearRes'] = function (ceaog, bl0w$d) {
      bl0w$d === void 0x0 && (bl0w$d = ![]);var xkvr = this;xkvr['clearRes'](ceaog, bl0w$d);var i5l0$ = vbw$['getFileInfo'](ceaog);if (i5l0$ && (ceaog['indexOf']('http://') != -0x1 || ceaog['indexOf']('https://') != -0x1)) {
        var xqkuy = i5l0$['md5'],
            ace82 = vbw$['getFileNativePath'](xqkuy);vbw$['remove'](ace82);
      }
    }, s74_6o['onReadNativeCallBack'] = function (mn7j_h, asoc, czet28, x3ukqy, o8a, egaco, hmln5, m_4s7, mn5ih) {
      x3ukqy === void 0x0 && (x3ukqy = !![]), egaco === void 0x0 && (egaco = ![]), m_4s7 === void 0x0 && (m_4s7 = 0x0);if (!m_4s7) {
        var blw$d0;if (czet28 == 'json' || czet28 == 'atlas') blw$d0 = i5nhl['getJson'](mn5ih['data']);else czet28 == 'xml' ? blw$d0 = dwv$['parseXMLFromString'](mn5ih['data']) : blw$d0 = mn5ih['data'];hmln5['onLoaded'](blw$d0), !i5nhl['isZiYu'] && i5nhl['isPosMsgYu'] && czet28 != 'arraybuffer' && wx['postMessage']({ 'url': asoc, 'data': blw$d0, 'isLoad': !![] });
      } else m_4s7 == 0x1 && i5nhl['EnvConfig']['load']['call'](hmln5, asoc, czet28, x3ukqy, o8a, egaco);
    }, _s6j(s74_6o, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), s74_6o;
  }(),
      vbw$ = function (e2cg8) {
    function eao8() {
      eao8['__super']['call'](this);;
    }return hl5n0i(eao8, 'laya.wx.mini.MiniFileMgr', e2cg8), eao8['isLoadFile'] = function (xykq3u) {
      return eao8['_fileTypeArr']['indexOf'](xykq3u) != -0x1 ? !![] : ![];
    }, eao8['getFileInfo'] = function (fdb) {
      var fdvbrw = fdb['split']('?')[0x0],
          n7ihjm = eao8['filesListObj'][fdvbrw];if (n7ihjm == null) return null;else return n7ihjm;return null;
    }, eao8['onFileUpdate'] = function (ec8aog, f$d0wb) {
      var dwfbv$ = ec8aog['split']('/'),
          xu3k = dwfbv$[dwfbv$['length'] - 0x1],
          _74so = eao8['getFileInfo'](f$d0wb);if (_74so == null) eao8['onSaveFile'](f$d0wb, xu3k);else {
        if (_74so['readyUrl'] != f$d0wb) eao8['remove'](xu3k, f$d0wb);
      }
    }, eao8['exits'] = function (tec2a8, jh_7) {
      var vf91 = eao8['getFileNativePath'](tec2a8);eao8['fs']['getFileInfo']({ 'filePath': vf91, 'success': function (w1vr9) {
          jh_7 != null && jh_7['runWith']([0x0, w1vr9]);
        }, 'fail': function (jm_7nh) {
          jh_7 != null && jh_7['runWith']([0x1, jm_7nh]);
        } });
    }, eao8['read'] = function (cat8e, gc6aos, $b0d5l, nmi5jh) {
      gc6aos === void 0x0 && (gc6aos = 'ascill'), nmi5jh === void 0x0 && (nmi5jh = '');var k9xuy;nmi5jh != '' ? k9xuy = eao8['getFileNativePath'](cat8e) : k9xuy = cat8e, eao8['fs']['readFile']({ 'filePath': k9xuy, 'encoding': gc6aos, 'success': function (_7sj4) {
          $b0d5l != null && $b0d5l['runWith']([0x0, _7sj4]);
        }, 'fail': function (agsoc) {
          if (agsoc && nmi5jh != '') eao8['down'](nmi5jh, gc6aos, $b0d5l, nmi5jh);else $b0d5l != null && $b0d5l['runWith']([0x1]);
        } });
    }, eao8['readNativeFile'] = function (mj4s7, l5hi) {
      eao8['fs']['readFile']({ 'filePath': mj4s7, 'encoding': '', 'success': function (gc6ao8) {
          l5hi != null && l5hi['runWith']([0x0]);
        }, 'fail': function (lb$0dw) {
          l5hi != null && l5hi['runWith']([0x1]);
        } });
    }, eao8['down'] = function (vrf91, nhl5im, _m7sj, krx9v1) {
      nhl5im === void 0x0 && (nhl5im = 'ascill'), krx9v1 === void 0x0 && (krx9v1 = '');var t8ez2 = eao8['getFileNativePath'](krx9v1),
          cte8a = eao8['wxdown']({ 'url': vrf91, 'filePath': t8ez2, 'success': function (z2c8t) {
          if (z2c8t['statusCode'] === 0xc8) eao8['readFile'](z2c8t['filePath'], nhl5im, _m7sj, krx9v1);
        }, 'fail': function (yku1) {
          _m7sj != null && _m7sj['runWith']([0x1, yku1]);
        } });cte8a['onProgressUpdate'](function (krux19) {
        _m7sj != null && _m7sj['runWith']([0x2, krux19['progress']]);
      });
    }, eao8['readFile'] = function (nhl50i, dfrbwv, b$w0df, o4sg6) {
      dfrbwv === void 0x0 && (dfrbwv = 'ascill'), o4sg6 === void 0x0 && (o4sg6 = ''), eao8['fs']['readFile']({ 'filePath': nhl50i, 'encoding': dfrbwv, 'success': function (eg82c) {
          if (nhl50i['indexOf']('http://') != -0x1 || nhl50i['indexOf']('https://') != -0x1) eao8['onFileUpdate'](nhl50i, o4sg6);b$w0df != null && b$w0df['runWith']([0x0, eg82c]);
        }, 'fail': function (aoce) {
          if (aoce) b$w0df != null && b$w0df['runWith']([0x1, aoce]);
        } });
    }, eao8['downImg'] = function (vr91k, o74s, _4hm) {
      _4hm === void 0x0 && (_4hm = '');var hm7n = eao8['wxdown']({ 'url': vr91k, 'success': function (sa46o) {
          sa46o['statusCode'] === 0xc8 && eao8['copyFile'](sa46o['tempFilePath'], _4hm, o74s);
        }, 'fail': function (y1uqkx) {
          o74s != null && o74s['runWith']([0x1, y1uqkx]);
        } });
    }, eao8['copyFile'] = function (im5nlh, ni5hml, j_4h7) {
      var inh7 = im5nlh['split']('/'),
          a82cte = inh7[inh7['length'] - 0x1],
          hmij7 = ni5hml['split']('?')[0x0],
          e8z2p = eao8['getFileInfo'](ni5hml),
          _os746 = eao8['getFileNativePath'](a82cte);eao8['fs']['copyFile']({ 'srcPath': im5nlh, 'destPath': _os746, 'success': function (s_go4) {
          if (!e8z2p) eao8['onSaveFile'](ni5hml, a82cte), j_4h7 != null && j_4h7['runWith']([0x0]);else {
            if (e8z2p['readyUrl'] != ni5hml) eao8['remove'](a82cte, ni5hml, j_4h7);
          }
        }, 'fail': function (njm7h_) {
          j_4h7 != null && j_4h7['runWith']([0x1, njm7h_]);
        } });
    }, eao8['getFileNativePath'] = function (s_67) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s_67;
    }, eao8['remove'] = function (a82ecg, xr1v, mh47j) {
      xr1v === void 0x0 && (xr1v = '');var ezpt = eao8['getFileInfo'](xr1v),
          ni$l50 = eao8['getFileNativePath'](ezpt['md5']);x1u9rk['loader']['clearRes'](ezpt['readyUrl']), eao8['fs']['unlink']({ 'filePath': ni$l50, 'success': function (g28ec) {
          if (xr1v != '') eao8['onSaveFile'](xr1v, a82ecg);mh47j != null && mh47j['runWith']([0x0]);
        }, 'fail': function (c2gae8) {} });
    }, eao8['onSaveFile'] = function (aog4s, n$5i0l) {
      var uxyq1 = aog4s['split']('?')[0x0];eao8['filesListObj'][uxyq1] = { 'md5': n$5i0l, 'readyUrl': aog4s }, eao8['fs']['writeFile']({ 'filePath': eao8['fileNativeDir'] + '/' + eao8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eao8['filesListObj']), 'success': function (d0f$b) {
          console['log']('写入测试测试成功：', d0f$b);
        }, 'fail': function (xkq1y) {
          console['log']('写入测试测试失败：', xkq1y);
        } });
    }, eao8['existDir'] = function (xkr1v, scago6) {
      eao8['fs']['mkdir']({ 'dirPath': xkr1v, 'success': function (_ms7j4) {
          scago6 != null && scago6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (f0d$) {
          if (f0d$['errMsg']['indexOf']('file already exists') != -0x1) eao8['readSync'](eao8['fileListName'], 'utf8', scago6);else scago6 != null && scago6['runWith']([0x1, f0d$]);
        } });
    }, eao8['readSync'] = function (s_476j, sg_o4, hnmj_7, vkf) {
      sg_o4 === void 0x0 && (sg_o4 = 'ascill'), vkf === void 0x0 && (vkf = '');var tcea2 = eao8['getFileNativePath'](s_476j),
          d0b$wf;try {
        d0b$wf = eao8['fs']['readFileSync'](tcea2), hnmj_7 != null && hnmj_7['runWith']([0x0, { 'data': d0b$wf }]);
      } catch (zc28t) {
        hnmj_7 != null && hnmj_7['runWith']([0x1]);
      }
    }, eao8['readCache'] = function () {}, eao8['writeCache'] = function (os_g6) {
      var r9 = readyUrl['split']('?')[0x0];eao8['filesListObj'][r9] = { 'md5': md5Name, 'readyUrl': readyUrl }, eao8['fs']['writeFile']({ 'filePath': eao8['fileNativeDir'] + '/' + eao8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eao8['filesListObj']), 'success': function (oasg6) {}, 'fail': function (jin7h) {} });
    }, eao8['setNativeFileDir'] = function (ogca86) {
      eao8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ogca86;
    }, eao8['filesListObj'] = {}, eao8['fileNativeDir'] = null, eao8['fileListName'] = 'layaairfiles.txt', eao8['ziyuFileData'] = {}, _s6j(eao8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), eao8;
  }(et82ca),
      tc2e8 = function (_s4o7) {
    function k3qxyu() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], k3qxyu['__super']['call'](this), this['_sound'] = k3qxyu['_createSound']();
    }hl5n0i(k3qxyu, 'laya.wx.mini.MiniSound', _s4o7);var $b5d0l = k3qxyu['prototype'];return $b5d0l['load'] = function (wb$0ld) {
      var v1krx9 = this;wb$0ld = dl$5b['formatURL'](wb$0ld), this['url'] = wb$0ld;if (k3qxyu['_audioCache'][wb$0ld]) {
        this['event']('complete');return;
      }function frk1v9() {
        if (k3qxyu['_null'] != undefined) v1krx9['_sound']['onCanplay'](k3qxyu['_null']), v1krx9['_sound']['onError'](k3qxyu['_null']);else try {
          v1krx9['_sound']['onCanplay'](null), v1krx9['_sound']['onError'](null), k3qxyu['_null'] = null;
        } catch (drvbf) {
          console['warn']('[wxmini] _clearSound:' + drvbf), v1krx9['_sound']['onCanplay'](f0db), v1krx9['_sound']['onError'](f0db), k3qxyu['_null'] = f0db;
        }
      }function qky3() {
        frk1v9(), tz2c['loaded'] = !![], tz2c['event']('complete'), k3qxyu['_audioCache'][tz2c['url']] = tz2c;
      }function yqu1(o6c) {
        console['error']('errCode=' + o6c['errCode'] + '  errMsg=' + o6c['errMsg']), frk1v9(), tz2c['event']('error');
      }function f0db() {}this['_sound']['onCanplay'](qky3), this['_sound']['onError'](yqu1), this['_sound']['src'] = wb$0ld;var tz2c = this;
    }, $b5d0l['play'] = function (q1xky, y3xqu) {
      q1xky === void 0x0 && (q1xky = 0x0), y3xqu === void 0x0 && (y3xqu = 0x0);var vdwrbf;if (this['url'] == ect2a['_tMusic']) {
        if (!k3qxyu['_musicAudio']) k3qxyu['_musicAudio'] = k3qxyu['_createSound']();vdwrbf = k3qxyu['_musicAudio'];
      } else vdwrbf = k3qxyu['_createSound']();vdwrbf['src'] = this['url'];var t2e8p = new hl(vdwrbf);return t2e8p['url'] = this['url'], t2e8p['loops'] = y3xqu, t2e8p['startTime'] = q1xky, t2e8p['play'](), ect2a['addChannel'](t2e8p), t2e8p;
    }, $b5d0l['dispose'] = function () {
      var yx9k = k3qxyu['_audioCache'][this['url']];yx9k && (yx9k['src'] = '', delete k3qxyu['_audioCache'][this['url']]);
    }, ykxu19(0x0, $b5d0l, 'duration', function () {
      return this['_sound']['duration'];
    }), k3qxyu['_createSound'] = function () {
      return k3qxyu['_id']++, i5nhl['window']['wx']['createInnerAudioContext']();
    }, k3qxyu['_musicAudio'] = null, k3qxyu['_id'] = 0x0, k3qxyu['_audioCache'] = {}, k3qxyu['_null'] = undefined, k3qxyu;
  }(et82ca),
      hl = function (w$0fd) {
    function vfbr9(te2ac8) {
      this['_audio'] = null, this['_onEnd'] = null, vfbr9['__super']['call'](this), this['_audio'] = te2ac8, this['_onEnd'] = dwv$['bind'](this['__onEnd'], this), te2ac8['onEnded'](this['_onEnd']);
    }hl5n0i(vfbr9, 'laya.wx.mini.MiniSoundChannel', w$0fd);var $li0n = vfbr9['prototype'];return $li0n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x1u9rk['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $li0n['__onNull'] = function () {}, $li0n['play'] = function () {
      this['isStopped'] = ![], ect2a['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $li0n['stop'] = function () {
      this['isStopped'] = !![], ect2a['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (vfbr9['_null'] != undefined) this['_audio']['onEnded'](vfbr9['_null']);else try {
        this['_audio']['onEnded'](null), vfbr9['_null'] = null;
      } catch (rfv9b) {
        console['warn']('[wxmini] stop:' + rfv9b), this['_audio']['onEnded'](dwv$['bind'](this['__onNull'], this)), vfbr9['_null'] = dwv$['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, $li0n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $li0n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], ect2a['addChannel'](this), this['_audio']['play']();
    }, ykxu19(0x0, $li0n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ykxu19(0x0, $li0n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ykxu19(0x0, $li0n, 'volume', function () {
      return 0x1;
    }, function (_s7j4m) {}), vfbr9['_null'] = undefined, vfbr9;
  }(j74mh_);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h7m4_j in Laya) {
    var l50$in = Laya[h7m4_j];l50$in && l50$in['__isclass'] && (exports[h7m4_j] = l50$in);
  }
});