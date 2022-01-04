var Y = wx.$M;
(function (window, document, bwfdvr) {
  var f0wd$b = bwfdvr['un'],
      vxrk = bwfdvr['uns'],
      x9r1ku = bwfdvr['static'],
      yk1x = bwfdvr['class'],
      vdrwf = bwfdvr['getset'],
      lhn = bwfdvr['__newvec'],
      _g6os4 = laya['utils']['Browser'],
      $n0il5 = laya['events']['Event'],
      rvw1 = laya['events']['EventDispatcher'],
      ukx1y9 = laya['resource']['HTMLImage'],
      ukxy = laya['utils']['Handler'],
      ca86go = laya['display']['Input'],
      ga8eo = laya['net']['Loader'],
      dwl$ = laya['maths']['Matrix'],
      j4h_7 = laya['renders']['Render'],
      go4_s6 = laya['utils']['RunDriver'],
      xqy3ku = laya['media']['Sound'],
      njmh_7 = laya['media']['SoundChannel'],
      v1rfk9 = laya['media']['SoundManager'],
      l5b$0d = laya['display']['Stage'],
      mihn5 = laya['net']['URL'],
      yukx1 = laya['utils']['Utils'],
      u1kr9 = function () {
    function n5lhi() {}return yk1x(n5lhi, 'laya.wx.mini.MiniAdpter'), n5lhi['getJson'] = function (c82aet) {
      return JSON['parse'](c82aet);
    }, n5lhi['init'] = function (x3kuqy, z28cet) {
      x3kuqy === void 0x0 && (x3kuqy = ![]), z28cet === void 0x0 && (z28cet = ![]);if (n5lhi['_inited']) return;n5lhi['window'] = window;if (n5lhi['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;n5lhi['_inited'] = !![], n5lhi['isZiYu'] = z28cet, n5lhi['isPosMsgYu'] = x3kuqy, n5lhi['EnvConfig'] = {}, !n5lhi['isZiYu'] && (vdfbw$['setNativeFileDir']('/layaairGame'), vdfbw$['existDir'](vdfbw$['fileNativeDir'], ukxy['create'](n5lhi, n5lhi['onMkdirCallBack']))), n5lhi['window']['focus'] = function () {}, bwfdvr['getUrlPath'] = function () {}, n5lhi['window']['logtime'] = function (s4g6a) {}, n5lhi['window']['alertTimeLog'] = function (o_6g4) {}, n5lhi['window']['resetShareInfo'] = function () {}, n5lhi['window']['CanvasRenderingContext2D'] = function () {}, n5lhi['window']['CanvasRenderingContext2D']['prototype'] = n5lhi['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], n5lhi['window']['document']['body']['appendChild'] = function () {}, n5lhi['EnvConfig']['pixelRatioInt'] = 0x0, go4_s6['getPixelRatio'] = n5lhi['pixelRatio'], n5lhi['_preCreateElement'] = _g6os4['createElement'], _g6os4['createElement'] = n5lhi['createElement'], go4_s6['createShaderCondition'] = n5lhi['createShaderCondition'], yukx1['parseXMLFromString'] = n5lhi['parseXMLFromString'], ca86go['_createInputElement'] = bv['_createInputElement'], n5lhi['EnvConfig']['load'] = ga8eo['prototype']['load'], ga8eo['prototype']['load'] = mhil5n['prototype']['load'], n5lhi['isZiYu'] && x3kuqy && wx['onMessage'](function (gsoc) {
        gsoc['isLoad'] && (vdfbw$['ziyuFileData'][gsoc['url']] = gsoc['data']);
      });
    }, n5lhi['onMkdirCallBack'] = function (w9f, agoce) {
      if (!w9f) vdfbw$['filesListObj'] = JSON['parse'](agoce['data']);
    }, n5lhi['pixelRatio'] = function () {
      if (!n5lhi['EnvConfig']['pixelRatioInt']) try {
        var as4o6g = wx['getSystemInfoSync']();return n5lhi['EnvConfig']['pixelRatioInt'] = as4o6g['pixelRatio'], as4o6g = as4o6g, as4o6g['pixelRatio'];
      } catch (uk3y) {}return n5lhi['EnvConfig']['pixelRatioInt'];
    }, n5lhi['createElement'] = function (hj_) {
      if (hj_ == 'canvas') {
        var tea8c;return n5lhi['idx'] == 0x1 ? n5lhi['isZiYu'] ? (tea8c = sharedCanvas, tea8c['style'] = {}) : tea8c = window['canvas'] : tea8c = window['wx']['createCanvas'](), n5lhi['idx']++, tea8c;
      } else {
        if (hj_ == 'textarea' || hj_ == 'input') return n5lhi['onCreateInput'](hj_);else {
          if (hj_ == 'div') {
            var b0$w = n5lhi['_preCreateElement'](hj_);return b0$w['contains'] = function (l0ih) {
              return null;
            }, b0$w['removeChild'] = function (ukq1x) {}, b0$w;
          } else return n5lhi['_preCreateElement'](hj_);
        }
      }
    }, n5lhi['onCreateInput'] = function (_4j7hm) {
      var d$fwb = n5lhi['_preCreateElement'](_4j7hm);return d$fwb['focus'] = bv['wxinputFocus'], d$fwb['blur'] = bv['wxinputblur'], d$fwb['style'] = {}, d$fwb['value'] = 0x0, d$fwb['parentElement'] = {}, d$fwb['placeholder'] = {}, d$fwb['type'] = {}, d$fwb['setColor'] = function (quyk3x) {}, d$fwb['setType'] = function (vrdfwb) {}, d$fwb['setFontFace'] = function ($50idl) {}, d$fwb['addEventListener'] = function (j_mn7h) {}, d$fwb['contains'] = function (_7) {
        return null;
      }, d$fwb['removeChild'] = function (d$05) {}, d$fwb;
    }, n5lhi['createShaderCondition'] = function (rfvbd) {
      var w9bvrf = this,
          go6c8 = function () {
        var b5l$d0 = rfvbd;return w9bvrf[rfvbd['replace']('this.', '')];
      };return go6c8;
    }, n5lhi['EnvConfig'] = null, n5lhi['window'] = null, n5lhi['_preCreateElement'] = null, n5lhi['_inited'] = ![], n5lhi['wxRequest'] = null, n5lhi['systemInfo'] = null, n5lhi['version'] = '0.0.1', n5lhi['isZiYu'] = ![], n5lhi['isPosMsgYu'] = ![], n5lhi['parseXMLFromString'] = function (b9fwvr) {
      var aec8g2, wdb$vf;b9fwvr = b9fwvr['replace'](/>\s+</g, '><');try {
        aec8g2 = new window['Parser']['DOMParser']()['parseFromString'](b9fwvr, 'text/xml');
      } catch (sm7) {
        throw '需要引入xml解析库文件';
      }return aec8g2;
    }, n5lhi['idx'] = 0x1, n5lhi;
  }(),
      j7m4 = function () {
    function l0w$() {}yk1x(l0w$, 'laya.wx.mini.MiniImage');var hiln = l0w$['prototype'];return hiln['_loadImage'] = function (wb0d$f) {
      var e82a = this,
          kxv1r9 = ![];wb0d$f['indexOf']('layaNativeDir/') == -0x1 && (kxv1r9 = !![], wb0d$f = mihn5['formatURL'](wb0d$f));if (!vdfbw$['getFileInfo'](wb0d$f)) {
        if (wb0d$f['indexOf']('http://') != -0x1 || wb0d$f['indexOf']('https://') != -0x1) vdfbw$['downImg'](wb0d$f, new ukxy(l0w$, l0w$['onDownImgCallBack'], [wb0d$f, e82a]), wb0d$f);else l0w$['onCreateImage'](wb0d$f, e82a, !![]);
      } else l0w$['onCreateImage'](wb0d$f, e82a, !kxv1r9);
    }, l0w$['onDownImgCallBack'] = function (f9r1v, dw$lb0, t2cez8) {
      if (!t2cez8) l0w$['onCreateImage'](f9r1v, dw$lb0);else dw$lb0['onError'](null);
    }, l0w$['onCreateImage'] = function (s6gaoc, os7_64, oa6scg) {
      oa6scg === void 0x0 && (oa6scg = ![]);var fr9w1v;if (!oa6scg) {
        var u3kyx = vdfbw$['getFileInfo'](s6gaoc),
            vrwfbd = u3kyx['md5'];fr9w1v = vdfbw$['getFileNativePath'](vrwfbd);
      } else fr9w1v = s6gaoc;if (os7_64['imgCache'] == null) os7_64['imgCache'] = {};var f9vb;function bf9rw() {
        f9vb['onload'] = null, f9vb['onerror'] = null, delete os7_64['imgCache'][s6gaoc];
      };var yxkuq1 = function () {
        bf9rw(), os7_64['onLoaded'](f9vb);
      },
          bvr9 = function () {
        bf9rw(), os7_64['event']('error', 'Load image failed');
      };os7_64['_type'] == 'nativeimage' ? (f9vb = new _g6os4['window']['Image'](), f9vb['crossOrigin'] = '', f9vb['onload'] = yxkuq1, f9vb['onerror'] = bvr9, f9vb['src'] = fr9w1v, os7_64['imgCache'][s6gaoc] = f9vb) : new ukx1y9['create'](fr9w1v, { 'onload': yxkuq1, 'onerror': bvr9, 'onCreate': function (go8c6) {
          f9vb = go8c6, os7_64['imgCache'][s6gaoc] = go8c6;
        } });
    }, l0w$;
  }(),
      bv = function () {
    function $0di5() {}return yk1x($0di5, 'laya.wx.mini.MiniInput'), $0di5['_createInputElement'] = function () {
      ca86go['_initInput'](ca86go['area'] = _g6os4['createElement']('textarea')), ca86go['_initInput'](ca86go['input'] = _g6os4['createElement']('input')), ca86go['inputContainer'] = _g6os4['createElement']('div'), ca86go['inputContainer']['style']['position'] = 'absolute', ca86go['inputContainer']['style']['zIndex'] = 0x186a0, _g6os4['container']['appendChild'](ca86go['inputContainer']), ca86go['inputContainer']['setPos'] = function (h7n, krxv19) {
        ca86go['inputContainer']['style']['left'] = h7n + 'px', ca86go['inputContainer']['style']['top'] = krxv19 + 'px';
      }, bwfdvr['stage']['on']('resize', null, $0di5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (r9u1kx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v1rfk9['_soundClass'] = s64_7, v1rfk9['_musicClass'] = s64_7;
    }, $0di5['_onStageResize'] = function () {
      var h5il0n = bwfdvr['stage']['_canvasTransform']['identity']();h5il0n['scale'](_g6os4['width'] / j4h_7['canvas']['width'] / go4_s6['getPixelRatio'](), _g6os4['height'] / j4h_7['canvas']['height'] / go4_s6['getPixelRatio']());
    }, $0di5['wxinputFocus'] = function (_7hj4m) {
      var rk9vx = ca86go['inputElement']['target'];if (rk9vx && !rk9vx['editable']) return;u1kr9['window']['wx']['offKeyboardConfirm'](), u1kr9['window']['wx']['offKeyboardInput'](), u1kr9['window']['wx']['showKeyboard']({ 'defaultValue': rk9vx['text'], 'maxLength': rk9vx['maxChars'], 'multiple': rk9vx['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (krf1) {}, 'fail': function (miln5h) {} }), u1kr9['window']['wx']['onKeyboardConfirm'](function (brv) {
        var bf0w$ = brv ? brv['value'] : '';rk9vx['text'] = bf0w$, rk9vx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), u1kr9['window']['wx']['onKeyboardInput'](function (e8ogca) {
        var oga4s6 = e8ogca ? e8ogca['value'] : '';if (!rk9vx['multiline']) {
          if (oga4s6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }rk9vx['text'] = oga4s6, rk9vx['event']('input');
      });
    }, $0di5['inputEnter'] = function () {
      ca86go['inputElement']['target']['focus'] = ![];
    }, $0di5['wxinputblur'] = function () {
      $0di5['hideKeyboard']();
    }, $0di5['hideKeyboard'] = function () {
      u1kr9['window']['wx']['offKeyboardConfirm'](), u1kr9['window']['wx']['offKeyboardInput'](), u1kr9['window']['wx']['hideKeyboard']({ 'success': function (kr19vx) {
          console['log']('隐藏键盘');
        }, 'fail': function (hnij5m) {
          console['log']('隐藏键盘出错:' + (hnij5m ? hnij5m['errMsg'] : ''));
        } });
    }, $0di5;
  }(),
      mhil5n = function () {
    function inj5h() {}yk1x(inj5h, 'laya.wx.mini.MiniLoader');var _7s64 = inj5h['prototype'];return _7s64['load'] = function (rw1f, ao4g6s, g8a6co, ogs46, rv9w) {
      g8a6co === void 0x0 && (g8a6co = !![]), rv9w === void 0x0 && (rv9w = ![]);var w19f = this;w19f['_url'] = rw1f;if (rw1f['indexOf']('data:image') === 0x0) w19f['_type'] = ao4g6s = 'image';else w19f['_type'] = ao4g6s || (ao4g6s = w19f['getTypeFromUrl'](rw1f));w19f['_cache'] = g8a6co, w19f['_data'] = null;var dbfvw$ = 'ascii';if (rw1f['indexOf']('.fnt') != -0x1) dbfvw$ = 'utf8';else ao4g6s == 'arraybuffer' && (dbfvw$ = '');;var ga4o6s = yukx1['getFileExtension'](rw1f);if (inj5h['_fileTypeArr']['indexOf'](ga4o6s) != -0x1) u1kr9['EnvConfig']['load']['call'](this, rw1f, ao4g6s, g8a6co, ogs46, rv9w);else {
        if (!vdfbw$['getFileInfo'](rw1f)) {
          if (rw1f['indexOf']('layaNativeDir/') != -0x1) {
            if (u1kr9['isZiYu']) {
              var g6a8c = vdfbw$['ziyuFileData'][rw1f];w19f['onLoaded'](g6a8c);return;
            } else {
              cosnole['log']('read read'), vdfbw$['read'](rw1f, dbfvw$, new ukxy(inj5h, inj5h['onReadNativeCallBack'], [dbfvw$, rw1f, ao4g6s, g8a6co, ogs46, rv9w, w19f]));return;
            }
          }if (mihn5['rootPath'] == '') var wd$bf = rw1f;else wd$bf = rw1f['split'](mihn5['rootPath'])[0x0];rw1f['indexOf']('http://') != -0x1 || rw1f['indexOf']('https://') != -0x1 ? u1kr9['EnvConfig']['load']['call'](w19f, rw1f, ao4g6s, g8a6co, ogs46, rv9w) : vdfbw$['readFile'](wd$bf, dbfvw$, new ukxy(inj5h, inj5h['onReadNativeCallBack'], [dbfvw$, rw1f, ao4g6s, g8a6co, ogs46, rv9w, w19f]), rw1f);
        } else u1kr9['EnvConfig']['load']['call'](this, rw1f, ao4g6s, g8a6co, ogs46, rv9w);
      }
    }, _7s64['resMgrLoad'] = function (g28ac, hni05l, cage28, qku3x, _o4g6, ld05$, ji7nm) {
      cage28 === void 0x0 && (cage28 = 0x0), qku3x === void 0x0 && (qku3x = ![]), _o4g6 === void 0x0 && (_o4g6 = ![]), ld05$ === void 0x0 && (ld05$ = 0x0), ji7nm === void 0x0 && (ji7nm = 0x3), g28ac['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', g28ac), u1kr9['EnvConfig']['resMgrLoad'](g28ac, (ec2g8a, l5h0in, xu1qky) => {
        inj5h['prototype']['resMgrLoadCallBack'](ec2g8a, l5h0in, xu1qky, hni05l);
      }, cage28, qku3x, _o4g6, ld05$, ji7nm);
    }, _7s64['resMgrLoadCallBack'] = function ($wbdfv, b$w0, s47m, oca8g) {
      console['log']('buff:::', $wbdfv, s47m, vdfbw$['fileNativeDir'] + '///' + vdfbw$['fileListName']), oca8g($wbdfv, b$w0, s47m);
    }, _7s64['clearRes'] = function (sg64, v1rfw) {
      v1rfw === void 0x0 && (v1rfw = ![]);var caeg82 = this;caeg82['clearRes'](sg64, v1rfw);var acte2 = vdfbw$['getFileInfo'](sg64);if (acte2 && (sg64['indexOf']('http://') != -0x1 || sg64['indexOf']('https://') != -0x1)) {
        var $5nil0 = acte2['md5'],
            ln0i$ = vdfbw$['getFileNativePath']($5nil0);vdfbw$['remove'](ln0i$);
      }
    }, inj5h['onReadNativeCallBack'] = function (sj746_, _7mhn, dbvf$, kru19, _s6, t8pze, ate82c, _47os, et2c8) {
      kru19 === void 0x0 && (kru19 = !![]), t8pze === void 0x0 && (t8pze = ![]), _47os === void 0x0 && (_47os = 0x0);if (!_47os) {
        var vkx1r;if (dbvf$ == 'json' || dbvf$ == 'atlas') vkx1r = u1kr9['getJson'](et2c8['data']);else dbvf$ == 'xml' ? vkx1r = yukx1['parseXMLFromString'](et2c8['data']) : vkx1r = et2c8['data'];ate82c['onLoaded'](vkx1r), !u1kr9['isZiYu'] && u1kr9['isPosMsgYu'] && dbvf$ != 'arraybuffer' && wx['postMessage']({ 'url': _7mhn, 'data': vkx1r, 'isLoad': !![] });
      } else _47os == 0x1 && u1kr9['EnvConfig']['load']['call'](ate82c, _7mhn, dbvf$, kru19, _s6, t8pze);
    }, x9r1ku(inj5h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), inj5h;
  }(),
      vdfbw$ = function (xy1k9) {
    function wvfb$d() {
      wvfb$d['__super']['call'](this);;
    }return yk1x(wvfb$d, 'laya.wx.mini.MiniFileMgr', xy1k9), wvfb$d['isLoadFile'] = function (f$0b) {
      return wvfb$d['_fileTypeArr']['indexOf'](f$0b) != -0x1 ? !![] : ![];
    }, wvfb$d['getFileInfo'] = function (h5nj) {
      var o74s6_ = h5nj['split']('?')[0x0],
          fkr91v = wvfb$d['filesListObj'][o74s6_];if (fkr91v == null) return null;else return fkr91v;return null;
    }, wvfb$d['onFileUpdate'] = function (ptz8e2, oce8ga) {
      var wldb$0 = ptz8e2['split']('/'),
          coage = wldb$0[wldb$0['length'] - 0x1],
          zte8 = wvfb$d['getFileInfo'](oce8ga);if (zte8 == null) wvfb$d['onSaveFile'](oce8ga, coage);else {
        if (zte8['readyUrl'] != oce8ga) wvfb$d['remove'](coage, oce8ga);
      }
    }, wvfb$d['exits'] = function (h7_mnj, vrf9w) {
      var bd05l = wvfb$d['getFileNativePath'](h7_mnj);wvfb$d['fs']['getFileInfo']({ 'filePath': bd05l, 'success': function (u91k) {
          vrf9w != null && vrf9w['runWith']([0x0, u91k]);
        }, 'fail': function (r9fbwv) {
          vrf9w != null && vrf9w['runWith']([0x1, r9fbwv]);
        } });
    }, wvfb$d['read'] = function (etc28, c8at, s4o_76, o46_gs) {
      c8at === void 0x0 && (c8at = 'ascill'), o46_gs === void 0x0 && (o46_gs = '');var aoc6g;o46_gs != '' ? aoc6g = wvfb$d['getFileNativePath'](etc28) : aoc6g = etc28, wvfb$d['fs']['readFile']({ 'filePath': aoc6g, 'encoding': c8at, 'success': function (v9k1xr) {
          s4o_76 != null && s4o_76['runWith']([0x0, v9k1xr]);
        }, 'fail': function (m5hi) {
          if (m5hi && o46_gs != '') wvfb$d['down'](o46_gs, c8at, s4o_76, o46_gs);else s4o_76 != null && s4o_76['runWith']([0x1]);
        } });
    }, wvfb$d['readNativeFile'] = function (hlni0, vxr1k9) {
      wvfb$d['fs']['readFile']({ 'filePath': hlni0, 'encoding': '', 'success': function (co6as) {
          vxr1k9 != null && vxr1k9['runWith']([0x0]);
        }, 'fail': function (wfd0b$) {
          vxr1k9 != null && vxr1k9['runWith']([0x1]);
        } });
    }, wvfb$d['down'] = function (k9y1ux, bf0$, acg68, ge2a) {
      bf0$ === void 0x0 && (bf0$ = 'ascill'), ge2a === void 0x0 && (ge2a = '');var rdfv = wvfb$d['getFileNativePath'](ge2a),
          nlhi05 = wvfb$d['wxdown']({ 'url': k9y1ux, 'filePath': rdfv, 'success': function (h_jm7n) {
          if (h_jm7n['statusCode'] === 0xc8) wvfb$d['readFile'](h_jm7n['filePath'], bf0$, acg68, ge2a);
        }, 'fail': function (li5nhm) {
          acg68 != null && acg68['runWith']([0x1, li5nhm]);
        } });nlhi05['onProgressUpdate'](function (z2e8tc) {
        acg68 != null && acg68['runWith']([0x2, z2e8tc['progress']]);
      });
    }, wvfb$d['readFile'] = function (himn5, j_4h, wvb$, il0n$5) {
      j_4h === void 0x0 && (j_4h = 'ascill'), il0n$5 === void 0x0 && (il0n$5 = ''), wvfb$d['fs']['readFile']({ 'filePath': himn5, 'encoding': j_4h, 'success': function (m7_jh) {
          if (himn5['indexOf']('http://') != -0x1 || himn5['indexOf']('https://') != -0x1) wvfb$d['onFileUpdate'](himn5, il0n$5);wvb$ != null && wvb$['runWith']([0x0, m7_jh]);
        }, 'fail': function (in5hl0) {
          if (in5hl0) wvb$ != null && wvb$['runWith']([0x1, in5hl0]);
        } });
    }, wvfb$d['downImg'] = function (xv9k, e28ag, o6c8ga) {
      o6c8ga === void 0x0 && (o6c8ga = '');var $w0bld = wvfb$d['wxdown']({ 'url': xv9k, 'success': function (js7) {
          js7['statusCode'] === 0xc8 && wvfb$d['copyFile'](js7['tempFilePath'], o6c8ga, e28ag);
        }, 'fail': function (jm5ih) {
          e28ag != null && e28ag['runWith']([0x1, jm5ih]);
        } });
    }, wvfb$d['copyFile'] = function (y9xu1k, kvr9f1, y3kuxq) {
      var h74m_j = y9xu1k['split']('/'),
          zp8te2 = h74m_j[h74m_j['length'] - 0x1],
          sgo6c = kvr9f1['split']('?')[0x0],
          dbvf = wvfb$d['getFileInfo'](kvr9f1),
          ux1yqk = wvfb$d['getFileNativePath'](zp8te2);wvfb$d['fs']['copyFile']({ 'srcPath': y9xu1k, 'destPath': ux1yqk, 'success': function (e2ctz) {
          if (!dbvf) wvfb$d['onSaveFile'](kvr9f1, zp8te2), y3kuxq != null && y3kuxq['runWith']([0x0]);else {
            if (dbvf['readyUrl'] != kvr9f1) wvfb$d['remove'](zp8te2, kvr9f1, y3kuxq);
          }
        }, 'fail': function (ct2ez) {
          y3kuxq != null && y3kuxq['runWith']([0x1, ct2ez]);
        } });
    }, wvfb$d['getFileNativePath'] = function (mijn5h) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mijn5h;
    }, wvfb$d['remove'] = function ($d0bl, $wfv, vk91) {
      $wfv === void 0x0 && ($wfv = '');var jm7nh = wvfb$d['getFileInfo']($wfv),
          rux9k1 = wvfb$d['getFileNativePath'](jm7nh['md5']);bwfdvr['loader']['clearRes'](jm7nh['readyUrl']), wvfb$d['fs']['unlink']({ 'filePath': rux9k1, 'success': function (vbrfw) {
          if ($wfv != '') wvfb$d['onSaveFile']($wfv, $d0bl);vk91 != null && vk91['runWith']([0x0]);
        }, 'fail': function (g6_4o) {} });
    }, wvfb$d['onSaveFile'] = function (etz2, x91uy) {
      var quy1 = etz2['split']('?')[0x0];wvfb$d['filesListObj'][quy1] = { 'md5': x91uy, 'readyUrl': etz2 }, wvfb$d['fs']['writeFile']({ 'filePath': wvfb$d['fileNativeDir'] + '/' + wvfb$d['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wvfb$d['filesListObj']), 'success': function (aoec8g) {
          console['log']('写入测试测试成功：', aoec8g);
        }, 'fail': function ($0bfd) {
          console['log']('写入测试测试失败：', $0bfd);
        } });
    }, wvfb$d['existDir'] = function (ln5hm, gscao6) {
      wvfb$d['fs']['mkdir']({ 'dirPath': ln5hm, 'success': function (n5mjh) {
          gscao6 != null && gscao6['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xky1) {
          if (xky1['errMsg']['indexOf']('file already exists') != -0x1) wvfb$d['readSync'](wvfb$d['fileListName'], 'utf8', gscao6);else gscao6 != null && gscao6['runWith']([0x1, xky1]);
        } });
    }, wvfb$d['readSync'] = function (as6cg, vx91kr, _jm47h, h5mlni) {
      vx91kr === void 0x0 && (vx91kr = 'ascill'), h5mlni === void 0x0 && (h5mlni = '');var quyx3 = wvfb$d['getFileNativePath'](as6cg),
          lbd$0;try {
        lbd$0 = wvfb$d['fs']['readFileSync'](quyx3), _jm47h != null && _jm47h['runWith']([0x0, { 'data': lbd$0 }]);
      } catch (hjn_) {
        _jm47h != null && _jm47h['runWith']([0x1]);
      }
    }, wvfb$d['readCache'] = function () {}, wvfb$d['writeCache'] = function (acoeg) {
      var te82cz = readyUrl['split']('?')[0x0];wvfb$d['filesListObj'][te82cz] = { 'md5': md5Name, 'readyUrl': readyUrl }, wvfb$d['fs']['writeFile']({ 'filePath': wvfb$d['fileNativeDir'] + '/' + wvfb$d['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wvfb$d['filesListObj']), 'success': function (bvr9fw) {}, 'fail': function (atc2) {} });
    }, wvfb$d['setNativeFileDir'] = function ($5lb) {
      wvfb$d['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $5lb;
    }, wvfb$d['filesListObj'] = {}, wvfb$d['fileNativeDir'] = null, wvfb$d['fileListName'] = 'layaairfiles.txt', wvfb$d['ziyuFileData'] = {}, x9r1ku(wvfb$d, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), wvfb$d;
  }(rvw1),
      s64_7 = function (s746_o) {
    function r9v1x() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], r9v1x['__super']['call'](this), this['_sound'] = r9v1x['_createSound']();
    }yk1x(r9v1x, 'laya.wx.mini.MiniSound', s746_o);var o4sa6 = r9v1x['prototype'];return o4sa6['load'] = function (jim5nh) {
      var s467j = this;jim5nh = mihn5['formatURL'](jim5nh), this['url'] = jim5nh;if (r9v1x['_audioCache'][jim5nh]) {
        this['event']('complete');return;
      }function rv1f9w() {
        if (r9v1x['_null'] != undefined) s467j['_sound']['onCanplay'](r9v1x['_null']), s467j['_sound']['onError'](r9v1x['_null']);else try {
          s467j['_sound']['onCanplay'](null), s467j['_sound']['onError'](null), r9v1x['_null'] = null;
        } catch (gcoa68) {
          console['warn']('[wxmini] _clearSound:' + gcoa68), s467j['_sound']['onCanplay'](wfvdb), s467j['_sound']['onError'](wfvdb), r9v1x['_null'] = wfvdb;
        }
      }function ogca6() {
        rv1f9w(), e2zct['loaded'] = !![], e2zct['event']('complete'), r9v1x['_audioCache'][e2zct['url']] = e2zct;
      }function xuyq3(kyx1qu) {
        console['error']('errCode=' + kyx1qu['errCode'] + '  errMsg=' + kyx1qu['errMsg']), rv1f9w(), e2zct['event']('error');
      }function wfvdb() {}this['_sound']['onCanplay'](ogca6), this['_sound']['onError'](xuyq3), this['_sound']['src'] = jim5nh;var e2zct = this;
    }, o4sa6['play'] = function (ace8g, ms7j4) {
      ace8g === void 0x0 && (ace8g = 0x0), ms7j4 === void 0x0 && (ms7j4 = 0x0);var v91rwf;if (this['url'] == v1rfk9['_tMusic']) {
        if (!r9v1x['_musicAudio']) r9v1x['_musicAudio'] = r9v1x['_createSound']();v91rwf = r9v1x['_musicAudio'];
      } else v91rwf = r9v1x['_createSound']();v91rwf['src'] = this['url'];var ykxu3 = new rk1ux(v91rwf);return ykxu3['url'] = this['url'], ykxu3['loops'] = ms7j4, ykxu3['startTime'] = ace8g, ykxu3['play'](), v1rfk9['addChannel'](ykxu3), ykxu3;
    }, o4sa6['dispose'] = function () {
      var h47j = r9v1x['_audioCache'][this['url']];h47j && (h47j['src'] = '', delete r9v1x['_audioCache'][this['url']]);
    }, vdrwf(0x0, o4sa6, 'duration', function () {
      return this['_sound']['duration'];
    }), r9v1x['_createSound'] = function () {
      return r9v1x['_id']++, u1kr9['window']['wx']['createInnerAudioContext']();
    }, r9v1x['_musicAudio'] = null, r9v1x['_id'] = 0x0, r9v1x['_audioCache'] = {}, r9v1x['_null'] = undefined, r9v1x;
  }(rvw1),
      rk1ux = function (m_j7nh) {
    function bvd$(b$5d0l) {
      this['_audio'] = null, this['_onEnd'] = null, bvd$['__super']['call'](this), this['_audio'] = b$5d0l, this['_onEnd'] = yukx1['bind'](this['__onEnd'], this), b$5d0l['onEnded'](this['_onEnd']);
    }yk1x(bvd$, 'laya.wx.mini.MiniSoundChannel', m_j7nh);var frdbv = bvd$['prototype'];return frdbv['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (bwfdvr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, frdbv['__onNull'] = function () {}, frdbv['play'] = function () {
      this['isStopped'] = ![], v1rfk9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, frdbv['stop'] = function () {
      this['isStopped'] = !![], v1rfk9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (bvd$['_null'] != undefined) this['_audio']['onEnded'](bvd$['_null']);else try {
        this['_audio']['onEnded'](null), bvd$['_null'] = null;
      } catch (i0l5$) {
        console['warn']('[wxmini] stop:' + i0l5$), this['_audio']['onEnded'](yukx1['bind'](this['__onNull'], this)), bvd$['_null'] = yukx1['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, frdbv['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, frdbv['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v1rfk9['addChannel'](this), this['_audio']['play']();
    }, vdrwf(0x0, frdbv, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vdrwf(0x0, frdbv, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vdrwf(0x0, frdbv, 'volume', function () {
      return 0x1;
    }, function (d$vwfb) {}), bvd$['_null'] = undefined, bvd$;
  }(njmh_7);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bfd$0w in Laya) {
    var lhn50 = Laya[bfd$0w];lhn50 && lhn50['__isclass'] && (exports[bfd$0w] = lhn50);
  }
});