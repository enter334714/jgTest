var D = wx.$b;
(function (window, document, dlo8s6) {
  var yum = dlo8s6['un'],
      wc1vhp = dlo8s6['uns'],
      j45n = dlo8s6['static'],
      c1yt = dlo8s6['class'],
      tyumc = dlo8s6['getset'],
      p2 = dlo8s6['__newvec'],
      f$j45a = laya['utils']['Browser'],
      ds9o86 = laya['events']['Event'],
      cumyz = laya['events']['EventDispatcher'],
      p_vrh2 = laya['resource']['HTMLImage'],
      tz1m = laya['utils']['Handler'],
      o6d9s = laya['display']['Input'],
      ldso6 = laya['net']['Loader'],
      sr86d9 = laya['maths']['Matrix'],
      a4n$j5 = laya['renders']['Render'],
      wtpv = laya['utils']['RunDriver'],
      yutmzc = laya['media']['Sound'],
      r2_89s = laya['media']['SoundChannel'],
      mcp = laya['media']['SoundManager'],
      n$045j = laya['display']['Stage'],
      ji0n5 = laya['net']['URL'],
      s8d9r2 = laya['utils']['Utils'],
      j450n$ = function () {
    function iuyz0m() {}return c1yt(iuyz0m, 'laya.wx.mini.MiniAdpter'), iuyz0m['getJson'] = function (do98s6) {
      return JSON['parse'](do98s6);
    }, iuyz0m['init'] = function (vhr2p_, h_2vr) {
      vhr2p_ === void 0x0 && (vhr2p_ = ![]), h_2vr === void 0x0 && (h_2vr = ![]);if (iuyz0m['_inited']) return;iuyz0m['window'] = window;if (iuyz0m['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;iuyz0m['_inited'] = !![], iuyz0m['isZiYu'] = h_2vr, iuyz0m['isPosMsgYu'] = vhr2p_, iuyz0m['EnvConfig'] = {}, !iuyz0m['isZiYu'] && (x6klo['setNativeFileDir']('/layaairGame'), x6klo['existDir'](x6klo['fileNativeDir'], tz1m['create'](iuyz0m, iuyz0m['onMkdirCallBack']))), iuyz0m['window']['focus'] = function () {}, dlo8s6['getUrlPath'] = function () {}, iuyz0m['window']['logtime'] = function (tzm) {}, iuyz0m['window']['alertTimeLog'] = function (qklx7) {}, iuyz0m['window']['resetShareInfo'] = function () {}, iuyz0m['window']['CanvasRenderingContext2D'] = function () {}, iuyz0m['window']['CanvasRenderingContext2D']['prototype'] = iuyz0m['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], iuyz0m['window']['document']['body']['appendChild'] = function () {}, iuyz0m['EnvConfig']['pixelRatioInt'] = 0x0, wtpv['getPixelRatio'] = iuyz0m['pixelRatio'], iuyz0m['_preCreateElement'] = f$j45a['createElement'], f$j45a['createElement'] = iuyz0m['createElement'], wtpv['createShaderCondition'] = iuyz0m['createShaderCondition'], s8d9r2['parseXMLFromString'] = iuyz0m['parseXMLFromString'], o6d9s['_createInputElement'] = cyutz['_createInputElement'], iuyz0m['EnvConfig']['load'] = ldso6['prototype']['load'], ldso6['prototype']['load'] = t1cwmz['prototype']['load'], iuyz0m['isZiYu'] && vhr2p_ && wx['onMessage'](function (tcpv) {
        tcpv['isLoad'] && (x6klo['ziyuFileData'][tcpv['url']] = tcpv['data']);
      });
    }, iuyz0m['onMkdirCallBack'] = function (tzymc1, a$j5f4) {
      if (!tzymc1) x6klo['filesListObj'] = JSON['parse'](a$j5f4['data']);
    }, iuyz0m['pixelRatio'] = function () {
      if (!iuyz0m['EnvConfig']['pixelRatioInt']) try {
        var w1vh_ = wx['getSystemInfoSync']();return iuyz0m['EnvConfig']['pixelRatioInt'] = w1vh_['pixelRatio'], w1vh_ = w1vh_, w1vh_['pixelRatio'];
      } catch (r928_s) {}return iuyz0m['EnvConfig']['pixelRatioInt'];
    }, iuyz0m['createElement'] = function (kgxlq7) {
      if (kgxlq7 == 'canvas') {
        var m1ctwp;return iuyz0m['idx'] == 0x1 ? iuyz0m['isZiYu'] ? (m1ctwp = sharedCanvas, m1ctwp['style'] = {}) : m1ctwp = window['canvas'] : m1ctwp = window['wx']['createCanvas'](), iuyz0m['idx']++, m1ctwp;
      } else {
        if (kgxlq7 == 'textarea' || kgxlq7 == 'input') return iuyz0m['onCreateInput'](kgxlq7);else {
          if (kgxlq7 == 'div') {
            var a$f4j5 = iuyz0m['_preCreateElement'](kgxlq7);return a$f4j5['contains'] = function ($5f4) {
              return null;
            }, a$f4j5['removeChild'] = function (ym1ctz) {}, a$f4j5;
          } else return iuyz0m['_preCreateElement'](kgxlq7);
        }
      }
    }, iuyz0m['onCreateInput'] = function (uzymit) {
      var whp2_ = iuyz0m['_preCreateElement'](uzymit);return whp2_['focus'] = cyutz['wxinputFocus'], whp2_['blur'] = cyutz['wxinputblur'], whp2_['style'] = {}, whp2_['value'] = 0x0, whp2_['parentElement'] = {}, whp2_['placeholder'] = {}, whp2_['type'] = {}, whp2_['setColor'] = function (v2_rp) {}, whp2_['setType'] = function (ds68lo) {}, whp2_['setFontFace'] = function (w1z) {}, whp2_['addEventListener'] = function (u0ijyn) {}, whp2_['contains'] = function (ajn5) {
        return null;
      }, whp2_['removeChild'] = function ($f5a) {}, whp2_;
    }, iuyz0m['createShaderCondition'] = function (wzc1t) {
      var hrv_2 = this,
          do86sl = function () {
        var lgxkq7 = wzc1t;return hrv_2[wzc1t['replace']('this.', '')];
      };return do86sl;
    }, iuyz0m['EnvConfig'] = null, iuyz0m['window'] = null, iuyz0m['_preCreateElement'] = null, iuyz0m['_inited'] = ![], iuyz0m['wxRequest'] = null, iuyz0m['systemInfo'] = null, iuyz0m['version'] = '0.0.1', iuyz0m['isZiYu'] = ![], iuyz0m['isPosMsgYu'] = ![], iuyz0m['parseXMLFromString'] = function (czmuy) {
      var kg7qxl, iy0nz;czmuy = czmuy['replace'](/>\s+</g, '><');try {
        kg7qxl = new window['Parser']['DOMParser']()['parseFromString'](czmuy, 'text/xml');
      } catch (tpmcw1) {
        throw '需要引入xml解析库文件';
      }return kg7qxl;
    }, iuyz0m['idx'] = 0x1, iuyz0m;
  }(),
      w_h1v = function () {
    function xqlok() {}c1yt(xqlok, 'laya.wx.mini.MiniImage');var yunji = xqlok['prototype'];return yunji['_loadImage'] = function (ql7xok) {
      var qk37gx = this,
          mzuyi = ![];ql7xok['indexOf']('layaNativeDir/') == -0x1 && (mzuyi = !![], ql7xok = ji0n5['formatURL'](ql7xok));if (!x6klo['getFileInfo'](ql7xok)) {
        if (ql7xok['indexOf']('http://') != -0x1 || ql7xok['indexOf']('https://') != -0x1) x6klo['downImg'](ql7xok, new tz1m(xqlok, xqlok['onDownImgCallBack'], [ql7xok, qk37gx]), ql7xok);else xqlok['onCreateImage'](ql7xok, qk37gx, !![]);
      } else xqlok['onCreateImage'](ql7xok, qk37gx, !mzuyi);
    }, xqlok['onDownImgCallBack'] = function (slo68, iz0m, i04jn5) {
      if (!i04jn5) xqlok['onCreateImage'](slo68, iz0m);else iz0m['onError'](null);
    }, xqlok['onCreateImage'] = function (_29hrs, pvct1, s6ol8) {
      s6ol8 === void 0x0 && (s6ol8 = ![]);var wmc1p;if (!s6ol8) {
        var d9so68 = x6klo['getFileInfo'](_29hrs),
            c1wmpt = d9so68['md5'];wmc1p = x6klo['getFileNativePath'](c1wmpt);
      } else wmc1p = _29hrs;if (pvct1['imgCache'] == null) pvct1['imgCache'] = {};var cmt1p;function j0uni() {
        cmt1p['onload'] = null, cmt1p['onerror'] = null, delete pvct1['imgCache'][_29hrs];
      };var h_w2p = function () {
        j0uni(), pvct1['onLoaded'](cmt1p);
      },
          lxok7 = function () {
        j0uni(), pvct1['event']('error', 'Load image failed');
      };pvct1['_type'] == 'nativeimage' ? (cmt1p = new f$j45a['window']['Image'](), cmt1p['crossOrigin'] = '', cmt1p['onload'] = h_w2p, cmt1p['onerror'] = lxok7, cmt1p['src'] = wmc1p, pvct1['imgCache'][_29hrs] = cmt1p) : new p_vrh2['create'](wmc1p, { 'onload': h_w2p, 'onerror': lxok7, 'onCreate': function (kxolq) {
          cmt1p = kxolq, pvct1['imgCache'][_29hrs] = kxolq;
        } });
    }, xqlok;
  }(),
      cyutz = function () {
    function k6dl8() {}return c1yt(k6dl8, 'laya.wx.mini.MiniInput'), k6dl8['_createInputElement'] = function () {
      o6d9s['_initInput'](o6d9s['area'] = f$j45a['createElement']('textarea')), o6d9s['_initInput'](o6d9s['input'] = f$j45a['createElement']('input')), o6d9s['inputContainer'] = f$j45a['createElement']('div'), o6d9s['inputContainer']['style']['position'] = 'absolute', o6d9s['inputContainer']['style']['zIndex'] = 0x186a0, f$j45a['container']['appendChild'](o6d9s['inputContainer']), o6d9s['inputContainer']['setPos'] = function (_2hvr9, p1m) {
        o6d9s['inputContainer']['style']['left'] = _2hvr9 + 'px', o6d9s['inputContainer']['style']['top'] = p1m + 'px';
      }, dlo8s6['stage']['on']('resize', null, k6dl8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d8osl6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), mcp['_soundClass'] = muzt, mcp['_musicClass'] = muzt, window['_videoClass'] = r9_s2;
    }, k6dl8['_onStageResize'] = function () {
      var aj$5 = dlo8s6['stage']['_canvasTransform']['identity']();aj$5['scale'](f$j45a['width'] / a4n$j5['canvas']['width'] / wtpv['getPixelRatio'](), f$j45a['height'] / a4n$j5['canvas']['height'] / wtpv['getPixelRatio']());
    }, k6dl8['wxinputFocus'] = function (r_9s82) {
      var sr8d2 = o6d9s['inputElement']['target'];if (sr8d2 && !sr8d2['editable']) return;j450n$['window']['wx']['offKeyboardConfirm'](), j450n$['window']['wx']['offKeyboardInput'](), j450n$['window']['wx']['showKeyboard']({ 'defaultValue': sr8d2['text'], 'maxLength': sr8d2['maxChars'], 'multiple': sr8d2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_s89r) {}, 'fail': function (miyzut) {} }), j450n$['window']['wx']['onKeyboardConfirm'](function (l6kdxo) {
        var wtzm = l6kdxo ? l6kdxo['value'] : '';sr8d2['text'] = wtzm, sr8d2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j450n$['window']['wx']['onKeyboardInput'](function (u0ij4) {
        var yzium = u0ij4 ? u0ij4['value'] : '';if (!sr8d2['multiline']) {
          if (yzium['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sr8d2['text'] = yzium, sr8d2['event']('input');
      });
    }, k6dl8['inputEnter'] = function () {
      o6d9s['inputElement']['target']['focus'] = ![];
    }, k6dl8['wxinputblur'] = function () {
      k6dl8['hideKeyboard']();
    }, k6dl8['hideKeyboard'] = function () {
      j450n$['window']['wx']['offKeyboardConfirm'](), j450n$['window']['wx']['offKeyboardInput'](), j450n$['window']['wx']['hideKeyboard']({ 'success': function (uztycm) {
          console['log']('隐藏键盘');
        }, 'fail': function (_h29rs) {
          console['log']('隐藏键盘出错:' + (_h29rs ? _h29rs['errMsg'] : ''));
        } });
    }, k6dl8;
  }(),
      t1cwmz = function () {
    function o6sdl8() {}c1yt(o6sdl8, 'laya.wx.mini.MiniLoader');var ju0niy = o6sdl8['prototype'];return ju0niy['load'] = function (s8dol6, z0niyu, kdol8, v92h, h9_r2s) {
      kdol8 === void 0x0 && (kdol8 = !![]), h9_r2s === void 0x0 && (h9_r2s = ![]);var zytmcu = this;zytmcu['_url'] = s8dol6;if (s8dol6['indexOf']('data:image') === 0x0) zytmcu['_type'] = z0niyu = 'image';else zytmcu['_type'] = z0niyu || (z0niyu = zytmcu['getTypeFromUrl'](s8dol6));zytmcu['_cache'] = kdol8, zytmcu['_data'] = null;var hp_2vw = 'ascii';if (s8dol6['indexOf']('.fnt') != -0x1) hp_2vw = 'utf8';else z0niyu == 'arraybuffer' && (hp_2vw = '');;var h29s_r = s8d9r2['getFileExtension'](s8dol6);if (o6sdl8['_fileTypeArr']['indexOf'](h29s_r) != -0x1) j450n$['EnvConfig']['load']['call'](this, s8dol6, z0niyu, kdol8, v92h, h9_r2s);else {
        if (!x6klo['getFileInfo'](s8dol6)) {
          if (s8dol6['indexOf']('layaNativeDir/') != -0x1) {
            if (j450n$['isZiYu']) {
              var s_r89 = x6klo['ziyuFileData'][s8dol6];zytmcu['onLoaded'](s_r89);return;
            } else {
              cosnole['log']('read read'), x6klo['read'](s8dol6, hp_2vw, new tz1m(o6sdl8, o6sdl8['onReadNativeCallBack'], [hp_2vw, s8dol6, z0niyu, kdol8, v92h, h9_r2s, zytmcu]));return;
            }
          }if (ji0n5['rootPath'] == '') var s829 = s8dol6;else s829 = s8dol6['split'](ji0n5['rootPath'])[0x0];s8dol6['indexOf']('http://') != -0x1 || s8dol6['indexOf']('https://') != -0x1 ? j450n$['EnvConfig']['load']['call'](zytmcu, s8dol6, z0niyu, kdol8, v92h, h9_r2s) : x6klo['readFile'](s829, hp_2vw, new tz1m(o6sdl8, o6sdl8['onReadNativeCallBack'], [hp_2vw, s8dol6, z0niyu, kdol8, v92h, h9_r2s, zytmcu]), s8dol6);
        } else j450n$['EnvConfig']['load']['call'](this, s8dol6, z0niyu, kdol8, v92h, h9_r2s);
      }
    }, ju0niy['resMgrLoad'] = function (j$5a4, _whv2, w1h_vp, r_982, pvch1, l6xo7, lx6ok7) {
      w1h_vp === void 0x0 && (w1h_vp = 0x0), r_982 === void 0x0 && (r_982 = ![]), pvch1 === void 0x0 && (pvch1 = ![]), l6xo7 === void 0x0 && (l6xo7 = 0x0), lx6ok7 === void 0x0 && (lx6ok7 = 0x3), j$5a4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', j$5a4), j450n$['EnvConfig']['resMgrLoad'](j$5a4, (yun0z, pwvh_, twzmc) => {
        o6sdl8['prototype']['resMgrLoadCallBack'](yun0z, pwvh_, twzmc, _whv2);
      }, w1h_vp, r_982, pvch1, l6xo7, lx6ok7);
    }, ju0niy['resMgrLoadCallBack'] = function (zc1mwt, wtm1cp, lodx6, oxlkq) {
      console['log']('buff:::', zc1mwt, lodx6, x6klo['fileNativeDir'] + '///' + x6klo['fileListName']), oxlkq(zc1mwt, wtm1cp, lodx6);
    }, ju0niy['clearRes'] = function (v_ph2r, kxo) {
      kxo === void 0x0 && (kxo = ![]);var dl6o = this;dl6o['clearRes'](v_ph2r, kxo);var n$j4a5 = x6klo['getFileInfo'](v_ph2r);if (n$j4a5 && (v_ph2r['indexOf']('http://') != -0x1 || v_ph2r['indexOf']('https://') != -0x1)) {
        var vwcph1 = n$j4a5['md5'],
            myuzc = x6klo['getFileNativePath'](vwcph1);x6klo['remove'](myuzc);
      }
    }, o6sdl8['onReadNativeCallBack'] = function (q37kgx, lg7qk, gqlkx, nyui0z, $e4af5, r_2hs9, ds6r89, mi0yu, _h2w) {
      nyui0z === void 0x0 && (nyui0z = !![]), r_2hs9 === void 0x0 && (r_2hs9 = ![]), mi0yu === void 0x0 && (mi0yu = 0x0);if (!mi0yu) {
        var ctw;if (gqlkx == 'json' || gqlkx == 'atlas') ctw = j450n$['getJson'](_h2w['data']);else gqlkx == 'xml' ? ctw = s8d9r2['parseXMLFromString'](_h2w['data']) : ctw = _h2w['data'];ds6r89['onLoaded'](ctw), !j450n$['isZiYu'] && j450n$['isPosMsgYu'] && gqlkx != 'arraybuffer' && wx['postMessage']({ 'url': lg7qk, 'data': ctw, 'isLoad': !![] });
      } else mi0yu == 0x1 && j450n$['EnvConfig']['load']['call'](ds6r89, lg7qk, gqlkx, nyui0z, $e4af5, r_2hs9);
    }, j45n(o6sdl8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), o6sdl8;
  }(),
      x6klo = function (tczm1) {
    function $fa54e() {
      $fa54e['__super']['call'](this);;
    }return c1yt($fa54e, 'laya.wx.mini.MiniFileMgr', tczm1), $fa54e['isLoadFile'] = function (xkdol6) {
      return $fa54e['_fileTypeArr']['indexOf'](xkdol6) != -0x1 ? !![] : ![];
    }, $fa54e['getFileInfo'] = function (z1tcm) {
      var izm0uy = z1tcm['split']('?')[0x0],
          rsh92_ = $fa54e['filesListObj'][izm0uy];if (rsh92_ == null) return null;else return rsh92_;return null;
    }, $fa54e['onFileUpdate'] = function ($5j4fa, xolk76) {
      var zmctuy = $5j4fa['split']('/'),
          yuzmi = zmctuy[zmctuy['length'] - 0x1],
          xk6o7 = $fa54e['getFileInfo'](xolk76);if (xk6o7 == null) $fa54e['onSaveFile'](xolk76, yuzmi);else {
        if (xk6o7['readyUrl'] != xolk76) $fa54e['remove'](yuzmi, xolk76);
      }
    }, $fa54e['exits'] = function (_9v2, ox6dlk) {
      var ctyz = $fa54e['getFileNativePath'](_9v2);$fa54e['fs']['getFileInfo']({ 'filePath': ctyz, 'success': function (r98ds2) {
          ox6dlk != null && ox6dlk['runWith']([0x0, r98ds2]);
        }, 'fail': function (zmc) {
          ox6dlk != null && ox6dlk['runWith']([0x1, zmc]);
        } });
    }, $fa54e['read'] = function (wcz1, ni504j, kx76lo, w1_hp) {
      ni504j === void 0x0 && (ni504j = 'ascill'), w1_hp === void 0x0 && (w1_hp = '');var h2r_9s;w1_hp != '' ? h2r_9s = $fa54e['getFileNativePath'](wcz1) : h2r_9s = wcz1, $fa54e['fs']['readFile']({ 'filePath': h2r_9s, 'encoding': ni504j, 'success': function (z0umiy) {
          kx76lo != null && kx76lo['runWith']([0x0, z0umiy]);
        }, 'fail': function (i0u4n) {
          if (i0u4n && w1_hp != '') $fa54e['down'](w1_hp, ni504j, kx76lo, w1_hp);else kx76lo != null && kx76lo['runWith']([0x1]);
        } });
    }, $fa54e['readNativeFile'] = function (zymu0, $n45ja) {
      $fa54e['fs']['readFile']({ 'filePath': zymu0, 'encoding': '', 'success': function (w1ptmc) {
          $n45ja != null && $n45ja['runWith']([0x0]);
        }, 'fail': function (njiu0) {
          $n45ja != null && $n45ja['runWith']([0x1]);
        } });
    }, $fa54e['down'] = function (q7x3kg, twc1vp, ji0, lxd6ok) {
      twc1vp === void 0x0 && (twc1vp = 'ascill'), lxd6ok === void 0x0 && (lxd6ok = '');var ctzmw = $fa54e['getFileNativePath'](lxd6ok),
          $aj54 = $fa54e['wxdown']({ 'url': q7x3kg, 'filePath': ctzmw, 'success': function (zc1ymt) {
          if (zc1ymt['statusCode'] === 0xc8) $fa54e['readFile'](zc1ymt['filePath'], twc1vp, ji0, lxd6ok);
        }, 'fail': function (x6od) {
          ji0 != null && ji0['runWith']([0x1, x6od]);
        } });$aj54['onProgressUpdate'](function (ph2_rv) {
        ji0 != null && ji0['runWith']([0x2, ph2_rv['progress']]);
      });
    }, $fa54e['readFile'] = function (j$05, umtzc, ef, sldo86) {
      umtzc === void 0x0 && (umtzc = 'ascill'), sldo86 === void 0x0 && (sldo86 = ''), $fa54e['fs']['readFile']({ 'filePath': j$05, 'encoding': umtzc, 'success': function (s9) {
          if (j$05['indexOf']('http://') != -0x1 || j$05['indexOf']('https://') != -0x1) $fa54e['onFileUpdate'](j$05, sldo86);ef != null && ef['runWith']([0x0, s9]);
        }, 'fail': function (u0zm) {
          if (u0zm) ef != null && ef['runWith']([0x1, u0zm]);
        } });
    }, $fa54e['downImg'] = function (ldk68o, gq37xk, cwz) {
      cwz === void 0x0 && (cwz = '');var af5e$ = $fa54e['wxdown']({ 'url': ldk68o, 'success': function (nyiu0j) {
          nyiu0j['statusCode'] === 0xc8 && $fa54e['copyFile'](nyiu0j['tempFilePath'], cwz, gq37xk);
        }, 'fail': function (s8dr2) {
          gq37xk != null && gq37xk['runWith']([0x1, s8dr2]);
        } });
    }, $fa54e['copyFile'] = function (af54j$, lgxk7, inyuz) {
      var jfa54$ = af54j$['split']('/'),
          mui0 = jfa54$[jfa54$['length'] - 0x1],
          imyutz = lgxk7['split']('?')[0x0],
          chvwp = $fa54e['getFileInfo'](lgxk7),
          aj4$5 = $fa54e['getFileNativePath'](mui0);$fa54e['fs']['copyFile']({ 'srcPath': af54j$, 'destPath': aj4$5, 'success': function (yc1) {
          if (!chvwp) $fa54e['onSaveFile'](lgxk7, mui0), inyuz != null && inyuz['runWith']([0x0]);else {
            if (chvwp['readyUrl'] != lgxk7) $fa54e['remove'](mui0, lgxk7, inyuz);
          }
        }, 'fail': function (u0inj4) {
          inyuz != null && inyuz['runWith']([0x1, u0inj4]);
        } });
    }, $fa54e['getFileNativePath'] = function (zucm) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + zucm;
    }, $fa54e['remove'] = function (l6o7x, mwtcz, ldok6x) {
      mwtcz === void 0x0 && (mwtcz = '');var kl76xo = $fa54e['getFileInfo'](mwtcz),
          wcm1t = $fa54e['getFileNativePath'](kl76xo['md5']);dlo8s6['loader']['clearRes'](kl76xo['readyUrl']), $fa54e['fs']['unlink']({ 'filePath': wcm1t, 'success': function (wtzcm) {
          if (mwtcz != '') $fa54e['onSaveFile'](mwtcz, l6o7x);ldok6x != null && ldok6x['runWith']([0x0]);
        }, 'fail': function (gkxql7) {} });
    }, $fa54e['onSaveFile'] = function (iyzu0, x73g) {
      var w1tcp = iyzu0['split']('?')[0x0];$fa54e['filesListObj'][w1tcp] = { 'md5': x73g, 'readyUrl': iyzu0 }, $fa54e['fs']['writeFile']({ 'filePath': $fa54e['fileNativeDir'] + '/' + $fa54e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($fa54e['filesListObj']), 'success': function (lqox) {
          console['log']('写入测试测试成功：', lqox);
        }, 'fail': function (j4ni) {
          console['log']('写入测试测试失败：', j4ni);
        } });
    }, $fa54e['existDir'] = function (q37kx, k7g3) {
      $fa54e['fs']['mkdir']({ 'dirPath': q37kx, 'success': function (cw1mtp) {
          k7g3 != null && k7g3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pch1wv) {
          if (pch1wv['errMsg']['indexOf']('file already exists') != -0x1) $fa54e['readSync']($fa54e['fileListName'], 'utf8', k7g3);else k7g3 != null && k7g3['runWith']([0x1, pch1wv]);
        } });
    }, $fa54e['readSync'] = function (glxq, izny, klox76, kdl8o) {
      izny === void 0x0 && (izny = 'ascill'), kdl8o === void 0x0 && (kdl8o = '');var hpw_v = $fa54e['getFileNativePath'](glxq),
          wcpt1;try {
        wcpt1 = $fa54e['fs']['readFileSync'](hpw_v), klox76 != null && klox76['runWith']([0x0, { 'data': wcpt1 }]);
      } catch (d8sr2) {
        klox76 != null && klox76['runWith']([0x1]);
      }
    }, $fa54e['readCache'] = function () {}, $fa54e['writeCache'] = function (f5j4a$) {
      var $j405 = readyUrl['split']('?')[0x0];$fa54e['filesListObj'][$j405] = { 'md5': md5Name, 'readyUrl': readyUrl }, $fa54e['fs']['writeFile']({ 'filePath': $fa54e['fileNativeDir'] + '/' + $fa54e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($fa54e['filesListObj']), 'success': function (i0umyz) {}, 'fail': function (kxlgq) {} });
    }, $fa54e['setNativeFileDir'] = function (nzuyi) {
      $fa54e['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nzuyi;
    }, $fa54e['filesListObj'] = {}, $fa54e['fileNativeDir'] = null, $fa54e['fileListName'] = 'layaairfiles.txt', $fa54e['ziyuFileData'] = {}, j45n($fa54e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $fa54e;
  }(cumyz),
      muzt = function (_v1wp) {
    function o8k6l() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], o8k6l['__super']['call'](this), this['_sound'] = o8k6l['_createSound'](), this['_chanell'] = new pmwct(this['_sound']);
    }c1yt(o8k6l, 'laya.wx.mini.MiniSound', _v1wp);var i4j5n0 = o8k6l['prototype'];return i4j5n0['load'] = function (wv1ph) {
      var l6sod = this;wv1ph = ji0n5['formatURL'](wv1ph), this['url'] = wv1ph;if (o8k6l['_audioCache'][wv1ph]) {
        this['event']('complete');return;
      }function rh_2vp() {
        if (o8k6l['_null'] != undefined) l6sod['_sound']['onCanplay'](o8k6l['_null']), l6sod['_sound']['onError'](o8k6l['_null']);else try {
          l6sod['_sound']['onCanplay'](null), l6sod['_sound']['onError'](null), o8k6l['_null'] = null;
        } catch (h2_rp) {
          console['warn']('[wxmini] _clearSound:' + h2_rp), l6sod['_sound']['onCanplay'](nu0zyi), l6sod['_sound']['onError'](nu0zyi), o8k6l['_null'] = nu0zyi;
        }
      }function mczty() {
        zw1['loaded'] = !![], zw1['event']('complete'), o8k6l['_audioCache'][zw1['url']] = zw1;
      }function vpwct1(r_2vp) {
        console['error']('errCode=' + r_2vp['errCode'] + '  errMsg=' + r_2vp['errMsg']), zw1['event']('error');
      }function nu0zyi() {}this['_sound']['onCanplay'](mczty), this['_sound']['onError'](vpwct1), this['_sound']['src'] = wv1ph;var zw1 = this;
    }, i4j5n0['play'] = function (nj0$45, klq) {
      nj0$45 === void 0x0 && (nj0$45 = 0x0), klq === void 0x0 && (klq = 0x0);var y1mct, o8s6ld;if (this['url'] == mcp['_tMusic']) {
        if (!o8k6l['_musicAudio']) o8k6l['_musicAudio'] = this['_sound'];y1mct = o8k6l['_musicAudio'], o8s6ld = this['_chanell'];
      } else y1mct = this['_sound'], o8s6ld = this['_chanell'];return y1mct['src'] = this['url'], y1mct['startTime'] = 0x0, o8s6ld['isStopped'] && (o8s6ld['url'] = this['url'], o8s6ld['loops'] = klq, o8s6ld['startTime'] = nj0$45, o8s6ld['play'](), mcp['addChannel'](o8s6ld)), o8s6ld;
    }, i4j5n0['dispose'] = function () {
      var wh1_p = o8k6l['_audioCache'][this['url']];wh1_p && (wh1_p['src'] = '', delete o8k6l['_audioCache'][this['url']]);
    }, tyumc(0x0, i4j5n0, 'duration', function () {
      return this['_sound']['duration'];
    }), o8k6l['_createSound'] = function () {
      o8k6l['_id']++;var my1ctz = j450n$['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return my1ctz;
    }, o8k6l['_musicAudio'] = null, o8k6l['_id'] = 0x0, o8k6l['_audioCache'] = {}, o8k6l['_null'] = undefined, o8k6l;
  }(cumyz),
      pmwct = function (qkxol7) {
    function h2pvr(jin54) {
      this['_audio'] = null, this['_onEnd'] = null, h2pvr['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = jin54, this['_onEnd'] = s8d9r2['bind'](this['__onEnd'], this), jin54['onEnded'](this['_onEnd']);
    }c1yt(h2pvr, 'laya.wx.mini.MiniSoundChannel', qkxol7);var s9_r82 = h2pvr['prototype'];return s9_r82['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dlo8s6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, s9_r82['__onNull'] = function () {}, s9_r82['play'] = function () {
      this['isStopped'] = ![], mcp['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, s9_r82['stop'] = function () {
      this['isStopped'] = !![], mcp['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, s9_r82['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, s9_r82['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], mcp['addChannel'](this), this['_audio']['play']();
    }, tyumc(0x0, s9_r82, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tyumc(0x0, s9_r82, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tyumc(0x0, s9_r82, 'volume', function () {
      return 0x1;
    }, function (umzt) {}), h2pvr['_null'] = undefined, h2pvr;
  }(r2_89s),
      r9_s2 = function () {
    function mp1ctw() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = j450n$['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }c1yt(mp1ctw, 'laya.wx.mini.MiniVideo');var uyzim = mp1ctw['prototype'];return uyzim['on'] = function (rp2_, tiymzu, ytumi) {
      if (rp2_ == 'loadedmetadata') this['onPlayFunc'] = ytumi['bind'](tiymzu), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else rp2_ == 'ended' && (this['onEndedFunC'] = ytumi['bind'](tiymzu), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, uyzim['onTimeUpdateFunc'] = function (kd8o) {
      this['position'] = kd8o['position'], this['_duration'] = kd8o['duration'];
    }, uyzim['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, uyzim['onended'] = function (d8rs2, r2ds98) {
      this['onEndedFunC'] = r2ds98['bind'](d8rs2), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, uyzim['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, uyzim['off'] = function (l68os, jniyu, jun4i) {
      if (l68os == 'loadedmetadata') this['onPlayFunc'] = jun4i['bind'](jniyu), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else l68os == 'ended' && (this['onEndedFunC'] = jun4i['bind'](jniyu), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, uyzim['load'] = function (zyiu0n) {
      if (!this['videoElement']) return;this['videoElement']['src'] = zyiu0n;
    }, uyzim['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, uyzim['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, uyzim['size'] = function (aj4f5, l6k7) {
      if (!this['videoElement']) return;this['videoElement']['width'] = aj4f5, this['videoElement']['height'] = l6k7;
    }, uyzim['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, uyzim['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, tyumc(0x0, uyzim, 'duration', function () {
      return this['_duration'];
    }), tyumc(0x0, uyzim, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (czmw1) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = czmw1;
    }), tyumc(0x0, uyzim, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), tyumc(0x0, uyzim, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), tyumc(0x0, uyzim, 'ended', function () {
      return this['videoend'];
    }), tyumc(0x0, uyzim, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (p_vwh) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = p_vwh;
    }), tyumc(0x0, uyzim, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (wp1hv) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = wp1hv;
    }), tyumc(0x0, uyzim, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (wt1v) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = wt1v;
    }), tyumc(0x0, uyzim, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), tyumc(0x0, uyzim, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (r8s2d9) {
      if (!this['videoElement']) return;this['videoElement']['x'] = r8s2d9;
    }), tyumc(0x0, uyzim, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (p1wvh) {
      if (!this['videoElement']) return;this['videoElement']['y'] = p1wvh;
    }), tyumc(0x0, uyzim, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), tyumc(0x0, uyzim, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (pw_h2) {
      if (!this['videoElement']) return;this['videoElement']['src'] = pw_h2;
    }), tyumc(0x0, uyzim, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (klxgq) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = klxgq;
    }), tyumc(0x0, uyzim, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (j4a$) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = j4a$;
    }), mp1ctw;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a4f$5 in Laya) {
    var cvtp1 = Laya[a4f$5];cvtp1 && cvtp1['__isclass'] && (exports[a4f$5] = cvtp1);
  }
});