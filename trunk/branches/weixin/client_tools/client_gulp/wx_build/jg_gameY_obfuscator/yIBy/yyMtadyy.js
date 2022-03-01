var a = wx.$y;
(function (window, document, vz3y0) {
  var r6y0v = vz3y0['un'],
      lcs89k = vz3y0['uns'],
      fo_j4h = vz3y0['static'],
      vma635 = vz3y0['class'],
      qign = vz3y0['getset'],
      _hfo4j = vz3y0['__newvec'],
      i$nq = laya['utils']['Browser'],
      du4t = laya['events']['Event'],
      fh4 = laya['events']['EventDispatcher'],
      ua536m = laya['resource']['HTMLImage'],
      u16a5 = laya['utils']['Handler'],
      m6au1 = laya['display']['Input'],
      yvrz3 = laya['net']['Loader'],
      ig2q = laya['maths']['Matrix'],
      wjh4o = laya['renders']['Render'],
      u1d4tw = laya['utils']['RunDriver'],
      o4j_hf = laya['media']['Sound'],
      ayv03 = laya['media']['SoundChannel'],
      u5ma6 = laya['media']['SoundManager'],
      a536vy = laya['display']['Stage'],
      v0yrz = laya['net']['URL'],
      _oh4jf = laya['utils']['Utils'],
      o8_fj = function () {
    function jfo8_() {}return vma635(jfo8_, 'laya.wx.mini.MiniAdpter'), jfo8_['getJson'] = function (v6m35) {
      return JSON['parse'](v6m35);
    }, jfo8_['init'] = function (yva653, s8_f) {
      yva653 === void 0x0 && (yva653 = ![]), s8_f === void 0x0 && (s8_f = ![]);if (jfo8_['_inited']) return;jfo8_['window'] = window;if (jfo8_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;jfo8_['_inited'] = !![], jfo8_['isZiYu'] = s8_f, jfo8_['isPosMsgYu'] = yva653, jfo8_['EnvConfig'] = {}, !jfo8_['isZiYu'] && (whtj['setNativeFileDir']('/layaairGame'), whtj['existDir'](whtj['fileNativeDir'], u16a5['create'](jfo8_, jfo8_['onMkdirCallBack']))), jfo8_['window']['focus'] = function () {}, vz3y0['getUrlPath'] = function () {}, jfo8_['window']['logtime'] = function (a15m6) {}, jfo8_['window']['alertTimeLog'] = function (lof8) {}, jfo8_['window']['resetShareInfo'] = function () {}, jfo8_['window']['CanvasRenderingContext2D'] = function () {}, jfo8_['window']['CanvasRenderingContext2D']['prototype'] = jfo8_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jfo8_['window']['document']['body']['appendChild'] = function () {}, jfo8_['EnvConfig']['pixelRatioInt'] = 0x0, u1d4tw['getPixelRatio'] = jfo8_['pixelRatio'], jfo8_['_preCreateElement'] = i$nq['createElement'], i$nq['createElement'] = jfo8_['createElement'], u1d4tw['createShaderCondition'] = jfo8_['createShaderCondition'], _oh4jf['parseXMLFromString'] = jfo8_['parseXMLFromString'], m6au1['_createInputElement'] = j8o_7f['_createInputElement'], jfo8_['EnvConfig']['load'] = yvrz3['prototype']['load'], yvrz3['prototype']['load'] = yx0rez['prototype']['load'], jfo8_['isZiYu'] && yva653 && wx['onMessage'](function (u5a6m1) {
        u5a6m1['isLoad'] && (whtj['ziyuFileData'][u5a6m1['url']] = u5a6m1['data']);
      });
    }, jfo8_['onMkdirCallBack'] = function (rz0ex, fh4w) {
      if (!rz0ex) whtj['filesListObj'] = JSON['parse'](fh4w['data']);
    }, jfo8_['pixelRatio'] = function () {
      if (!jfo8_['EnvConfig']['pixelRatioInt']) try {
        var w1dh = wx['getSystemInfoSync']();return jfo8_['EnvConfig']['pixelRatioInt'] = w1dh['pixelRatio'], w1dh = w1dh, w1dh['pixelRatio'];
      } catch (slkc89) {}return jfo8_['EnvConfig']['pixelRatioInt'];
    }, jfo8_['createElement'] = function (gk2$in) {
      if (gk2$in == 'canvas') {
        var wmudt1;return jfo8_['idx'] == 0x1 ? jfo8_['isZiYu'] ? (wmudt1 = sharedCanvas, wmudt1['style'] = {}) : wmudt1 = window['canvas'] : wmudt1 = window['wx']['createCanvas'](), jfo8_['idx']++, wmudt1;
      } else {
        if (gk2$in == 'textarea' || gk2$in == 'input') return jfo8_['onCreateInput'](gk2$in);else {
          if (gk2$in == 'div') {
            var y36va5 = jfo8_['_preCreateElement'](gk2$in);return y36va5['contains'] = function (w4oh) {
              return null;
            }, y36va5['removeChild'] = function (cs98l7) {}, y36va5;
          } else return jfo8_['_preCreateElement'](gk2$in);
        }
      }
    }, jfo8_['onCreateInput'] = function (wojf) {
      var sc7_ = jfo8_['_preCreateElement'](wojf);return sc7_['focus'] = j8o_7f['wxinputFocus'], sc7_['blur'] = j8o_7f['wxinputblur'], sc7_['style'] = {}, sc7_['value'] = 0x0, sc7_['parentElement'] = {}, sc7_['placeholder'] = {}, sc7_['type'] = {}, sc7_['setColor'] = function (du51a) {}, sc7_['setType'] = function (mud1t5) {}, sc7_['setFontFace'] = function (pgq$) {}, sc7_['addEventListener'] = function (vm536a) {}, sc7_['contains'] = function (fj4) {
        return null;
      }, sc7_['removeChild'] = function (g$29) {}, sc7_;
    }, jfo8_['createShaderCondition'] = function (tow4jh) {
      var n2$9kc = this,
          au61m = function () {
        var dut5 = tow4jh;return n2$9kc[tow4jh['replace']('this.', '')];
      };return au61m;
    }, jfo8_['EnvConfig'] = null, jfo8_['window'] = null, jfo8_['_preCreateElement'] = null, jfo8_['_inited'] = ![], jfo8_['wxRequest'] = null, jfo8_['systemInfo'] = null, jfo8_['version'] = '0.0.1', jfo8_['isZiYu'] = ![], jfo8_['isPosMsgYu'] = ![], jfo8_['parseXMLFromString'] = function (l29c) {
      var a1m5ud, wdt1h4;l29c = l29c['replace'](/>\s+</g, '><');try {
        a1m5ud = new window['Parser']['DOMParser']()['parseFromString'](l29c, 'text/xml');
      } catch (h4fowj) {
        throw '需要引入xml解析库文件';
      }return a1m5ud;
    }, jfo8_['idx'] = 0x1, jfo8_;
  }(),
      o78f_ = function () {
    function jwdht() {}vma635(jwdht, 'laya.wx.mini.MiniImage');var iqpg = jwdht['prototype'];return iqpg['_loadImage'] = function (h1t) {
      var c2s9kn = this,
          thwoj = ![];h1t['indexOf']('layaNativeDir/') == -0x1 && (thwoj = !![], h1t = v0yrz['formatURL'](h1t));if (!whtj['getFileInfo'](h1t)) {
        if (h1t['indexOf']('http://') != -0x1 || h1t['indexOf']('https://') != -0x1) whtj['downImg'](h1t, new u16a5(jwdht, jwdht['onDownImgCallBack'], [h1t, c2s9kn]), h1t);else jwdht['onCreateImage'](h1t, c2s9kn, !![]);
      } else jwdht['onCreateImage'](h1t, c2s9kn, !thwoj);
    }, jwdht['onDownImgCallBack'] = function (ns29, dtwh, cs89lk) {
      if (!cs89lk) jwdht['onCreateImage'](ns29, dtwh);else dtwh['onError'](null);
    }, jwdht['onCreateImage'] = function (s_lc8, q$gni2, _oh7jf) {
      _oh7jf === void 0x0 && (_oh7jf = ![]);var va03;if (!_oh7jf) {
        var yx0er = whtj['getFileInfo'](s_lc8),
            gn29k$ = yx0er['md5'];va03 = whtj['getFileNativePath'](gn29k$);
      } else va03 = s_lc8;if (q$gni2['imgCache'] == null) q$gni2['imgCache'] = {};var of7j;function du15mt() {
        of7j['onload'] = null, of7j['onerror'] = null, delete q$gni2['imgCache'][s_lc8];
      };var q$pin = function () {
        du15mt(), q$gni2['onLoaded'](of7j);
      },
          l87_sf = function () {
        du15mt(), q$gni2['event']('error', 'Load image failed');
      };q$gni2['_type'] == 'nativeimage' ? (of7j = new i$nq['window']['Image'](), of7j['crossOrigin'] = '', of7j['onload'] = q$pin, of7j['onerror'] = l87_sf, of7j['src'] = va03, q$gni2['imgCache'][s_lc8] = of7j) : new ua536m['create'](va03, { 'onload': q$pin, 'onerror': l87_sf, 'onCreate': function (l8c9ks) {
          of7j = l8c9ks, q$gni2['imgCache'][s_lc8] = l8c9ks;
        } });
    }, jwdht;
  }(),
      j8o_7f = function () {
    function zyr0xe() {}return vma635(zyr0xe, 'laya.wx.mini.MiniInput'), zyr0xe['_createInputElement'] = function () {
      m6au1['_initInput'](m6au1['area'] = i$nq['createElement']('textarea')), m6au1['_initInput'](m6au1['input'] = i$nq['createElement']('input')), m6au1['inputContainer'] = i$nq['createElement']('div'), m6au1['inputContainer']['style']['position'] = 'absolute', m6au1['inputContainer']['style']['zIndex'] = 0x186a0, i$nq['container']['appendChild'](m6au1['inputContainer']), m6au1['inputContainer']['setPos'] = function (rz0yxv, yvz30r) {
        m6au1['inputContainer']['style']['left'] = rz0yxv + 'px', m6au1['inputContainer']['style']['top'] = yvz30r + 'px';
      }, vz3y0['stage']['on']('resize', null, zyr0xe['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jo_4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), u5ma6['_soundClass'] = mtu15, u5ma6['_musicClass'] = mtu15;
    }, zyr0xe['_onStageResize'] = function () {
      var udma51 = vz3y0['stage']['_canvasTransform']['identity']();udma51['scale'](i$nq['width'] / wjh4o['canvas']['width'] / u1d4tw['getPixelRatio'](), i$nq['height'] / wjh4o['canvas']['height'] / u1d4tw['getPixelRatio']());
    }, zyr0xe['wxinputFocus'] = function (c78sl9) {
      var va3y0 = m6au1['inputElement']['target'];if (va3y0 && !va3y0['editable']) return;o8_fj['window']['wx']['offKeyboardConfirm'](), o8_fj['window']['wx']['offKeyboardInput'](), o8_fj['window']['wx']['showKeyboard']({ 'defaultValue': va3y0['text'], 'maxLength': va3y0['maxChars'], 'multiple': va3y0['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wdtm1u) {}, 'fail': function (zey0x) {} }), o8_fj['window']['wx']['onKeyboardConfirm'](function ($nki2g) {
        var f7_s = $nki2g ? $nki2g['value'] : '';va3y0['text'] = f7_s, va3y0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), o8_fj['window']['wx']['onKeyboardInput'](function (_fho7j) {
        var gnpq$i = _fho7j ? _fho7j['value'] : '';if (!va3y0['multiline']) {
          if (gnpq$i['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }va3y0['text'] = gnpq$i, va3y0['event']('input');
      });
    }, zyr0xe['inputEnter'] = function () {
      m6au1['inputElement']['target']['focus'] = ![];
    }, zyr0xe['wxinputblur'] = function () {
      zyr0xe['hideKeyboard']();
    }, zyr0xe['hideKeyboard'] = function () {
      o8_fj['window']['wx']['offKeyboardConfirm'](), o8_fj['window']['wx']['offKeyboardInput'](), o8_fj['window']['wx']['hideKeyboard']({ 'success': function ($n29gk) {
          console['log']('隐藏键盘');
        }, 'fail': function (ya6v35) {
          console['log']('隐藏键盘出错:' + (ya6v35 ? ya6v35['errMsg'] : ''));
        } });
    }, zyr0xe;
  }(),
      yx0rez = function () {
    function tdw41u() {}vma635(tdw41u, 'laya.wx.mini.MiniLoader');var _fjo87 = tdw41u['prototype'];return _fjo87['load'] = function (ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_) {
      t14dhw === void 0x0 && (t14dhw = !![]), oj4hf_ === void 0x0 && (oj4hf_ = ![]);var foj4h_ = this;foj4h_['_url'] = ns9c2k;if (ns9c2k['indexOf']('data:image') === 0x0) foj4h_['_type'] = f7hoj = 'image';else foj4h_['_type'] = f7hoj || (f7hoj = foj4h_['getTypeFromUrl'](ns9c2k));foj4h_['_cache'] = t14dhw, foj4h_['_data'] = null;var wht4d = 'ascii';if (ns9c2k['indexOf']('.fnt') != -0x1) wht4d = 'utf8';else f7hoj == 'arraybuffer' && (wht4d = '');;var yv036a = _oh4jf['getFileExtension'](ns9c2k);if (tdw41u['_fileTypeArr']['indexOf'](yv036a) != -0x1) o8_fj['EnvConfig']['load']['call'](this, ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_);else {
        if (!whtj['getFileInfo'](ns9c2k)) {
          if (ns9c2k['indexOf']('layaNativeDir/') != -0x1) {
            if (o8_fj['isZiYu']) {
              var l8fo_7 = whtj['ziyuFileData'][ns9c2k];foj4h_['onLoaded'](l8fo_7);return;
            } else {
              cosnole['log']('read read'), whtj['read'](ns9c2k, wht4d, new u16a5(tdw41u, tdw41u['onReadNativeCallBack'], [wht4d, ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_, foj4h_]));return;
            }
          }if (v0yrz['rootPath'] == '') var inpq$ = ns9c2k;else inpq$ = ns9c2k['split'](v0yrz['rootPath'])[0x0];ns9c2k['indexOf']('http://') != -0x1 || ns9c2k['indexOf']('https://') != -0x1 ? o8_fj['EnvConfig']['load']['call'](foj4h_, ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_) : whtj['readFile'](inpq$, wht4d, new u16a5(tdw41u, tdw41u['onReadNativeCallBack'], [wht4d, ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_, foj4h_]), ns9c2k);
        } else o8_fj['EnvConfig']['load']['call'](this, ns9c2k, f7hoj, t14dhw, i2n$kg, oj4hf_);
      }
    }, _fjo87['resMgrLoad'] = function (ma65v, rvx0y, kn2$9g, au1m65, n$i2q, $qgn, k9ncs2) {
      kn2$9g === void 0x0 && (kn2$9g = 0x0), au1m65 === void 0x0 && (au1m65 = ![]), n$i2q === void 0x0 && (n$i2q = ![]), $qgn === void 0x0 && ($qgn = 0x0), k9ncs2 === void 0x0 && (k9ncs2 = 0x3), ma65v['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ma65v), o8_fj['EnvConfig']['resMgrLoad'](ma65v, (w41dth, lcs897, yv603) => {
        tdw41u['prototype']['resMgrLoadCallBack'](w41dth, lcs897, yv603, rvx0y);
      }, kn2$9g, au1m65, n$i2q, $qgn, k9ncs2);
    }, _fjo87['resMgrLoadCallBack'] = function (mdtw1, hjf_7o, $n2kig, c9lsk) {
      console['log']('buff:::', mdtw1, $n2kig, whtj['fileNativeDir'] + '///' + whtj['fileListName']), c9lsk(mdtw1, hjf_7o, $n2kig);
    }, _fjo87['clearRes'] = function (cs2n, j87o_) {
      j87o_ === void 0x0 && (j87o_ = ![]);var sl_c = this;sl_c['clearRes'](cs2n, j87o_);var _8of = whtj['getFileInfo'](cs2n);if (_8of && (cs2n['indexOf']('http://') != -0x1 || cs2n['indexOf']('https://') != -0x1)) {
        var hjo7f_ = _8of['md5'],
            $qgn2 = whtj['getFileNativePath'](hjo7f_);whtj['remove']($qgn2);
      }
    }, tdw41u['onReadNativeCallBack'] = function (j_o7fh, kg9$n, s98lc7, jf4owh, t4wdhj, y3av5, lf_s8, hw4oj, h4wtd) {
      jf4owh === void 0x0 && (jf4owh = !![]), y3av5 === void 0x0 && (y3av5 = ![]), hw4oj === void 0x0 && (hw4oj = 0x0);if (!hw4oj) {
        var va06;if (s98lc7 == 'json' || s98lc7 == 'atlas') va06 = o8_fj['getJson'](h4wtd['data']);else s98lc7 == 'xml' ? va06 = _oh4jf['parseXMLFromString'](h4wtd['data']) : va06 = h4wtd['data'];lf_s8['onLoaded'](va06), !o8_fj['isZiYu'] && o8_fj['isPosMsgYu'] && s98lc7 != 'arraybuffer' && wx['postMessage']({ 'url': kg9$n, 'data': va06, 'isLoad': !![] });
      } else hw4oj == 0x1 && o8_fj['EnvConfig']['load']['call'](lf_s8, kg9$n, s98lc7, jf4owh, t4wdhj, y3av5);
    }, fo_j4h(tdw41u, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), tdw41u;
  }(),
      whtj = function (h4wjdt) {
    function n2g9k$() {
      n2g9k$['__super']['call'](this);;
    }return vma635(n2g9k$, 'laya.wx.mini.MiniFileMgr', h4wjdt), n2g9k$['isLoadFile'] = function (u1dmt5) {
      return n2g9k$['_fileTypeArr']['indexOf'](u1dmt5) != -0x1 ? !![] : ![];
    }, n2g9k$['getFileInfo'] = function (dtjwh4) {
      var l9c2ks = dtjwh4['split']('?')[0x0],
          s87_lf = n2g9k$['filesListObj'][l9c2ks];if (s87_lf == null) return null;else return s87_lf;return null;
    }, n2g9k$['onFileUpdate'] = function (o7_l8f, z0r) {
      var $2ck = o7_l8f['split']('/'),
          dw14tu = $2ck[$2ck['length'] - 0x1],
          k2ign$ = n2g9k$['getFileInfo'](z0r);if (k2ign$ == null) n2g9k$['onSaveFile'](z0r, dw14tu);else {
        if (k2ign$['readyUrl'] != z0r) n2g9k$['remove'](dw14tu, z0r);
      }
    }, n2g9k$['exits'] = function (s_7cl8, of_7hj) {
      var _sf8l = n2g9k$['getFileNativePath'](s_7cl8);n2g9k$['fs']['getFileInfo']({ 'filePath': _sf8l, 'success': function (rz0vx) {
          of_7hj != null && of_7hj['runWith']([0x0, rz0vx]);
        }, 'fail': function (_jfh4) {
          of_7hj != null && of_7hj['runWith']([0x1, _jfh4]);
        } });
    }, n2g9k$['read'] = function (udtw1, htoj4w, w1dutm, ezxry) {
      htoj4w === void 0x0 && (htoj4w = 'ascill'), ezxry === void 0x0 && (ezxry = '');var gk9n;ezxry != '' ? gk9n = n2g9k$['getFileNativePath'](udtw1) : gk9n = udtw1, n2g9k$['fs']['readFile']({ 'filePath': gk9n, 'encoding': htoj4w, 'success': function (y63r0) {
          w1dutm != null && w1dutm['runWith']([0x0, y63r0]);
        }, 'fail': function (ns9k) {
          if (ns9k && ezxry != '') n2g9k$['down'](ezxry, htoj4w, w1dutm, ezxry);else w1dutm != null && w1dutm['runWith']([0x1]);
        } });
    }, n2g9k$['readNativeFile'] = function (h_jo4, t4ud) {
      n2g9k$['fs']['readFile']({ 'filePath': h_jo4, 'encoding': '', 'success': function (vyz0rx) {
          t4ud != null && t4ud['runWith']([0x0]);
        }, 'fail': function ($ngiq2) {
          t4ud != null && t4ud['runWith']([0x1]);
        } });
    }, n2g9k$['down'] = function (fhjw, yxrz0e, r0xzv, c2sk9) {
      yxrz0e === void 0x0 && (yxrz0e = 'ascill'), c2sk9 === void 0x0 && (c2sk9 = '');var jdh4tw = n2g9k$['getFileNativePath'](c2sk9),
          u41dtw = n2g9k$['wxdown']({ 'url': fhjw, 'filePath': jdh4tw, 'success': function (wjfho4) {
          if (wjfho4['statusCode'] === 0xc8) n2g9k$['readFile'](wjfho4['filePath'], yxrz0e, r0xzv, c2sk9);
        }, 'fail': function (scn) {
          r0xzv != null && r0xzv['runWith']([0x1, scn]);
        } });u41dtw['onProgressUpdate'](function (gqnp$) {
        r0xzv != null && r0xzv['runWith']([0x2, gqnp$['progress']]);
      });
    }, n2g9k$['readFile'] = function (h4dj, a036vy, s_8f7, j_fo4) {
      a036vy === void 0x0 && (a036vy = 'ascill'), j_fo4 === void 0x0 && (j_fo4 = ''), n2g9k$['fs']['readFile']({ 'filePath': h4dj, 'encoding': a036vy, 'success': function (l9sk2) {
          if (h4dj['indexOf']('http://') != -0x1 || h4dj['indexOf']('https://') != -0x1) n2g9k$['onFileUpdate'](h4dj, j_fo4);s_8f7 != null && s_8f7['runWith']([0x0, l9sk2]);
        }, 'fail': function (sclk) {
          if (sclk) s_8f7 != null && s_8f7['runWith']([0x1, sclk]);
        } });
    }, n2g9k$['downImg'] = function (nigk2$, dt15, c9ns2) {
      c9ns2 === void 0x0 && (c9ns2 = '');var hdt4j = n2g9k$['wxdown']({ 'url': nigk2$, 'success': function (wt4jd) {
          wt4jd['statusCode'] === 0xc8 && n2g9k$['copyFile'](wt4jd['tempFilePath'], c9ns2, dt15);
        }, 'fail': function (c87s) {
          dt15 != null && dt15['runWith']([0x1, c87s]);
        } });
    }, n2g9k$['copyFile'] = function (d5ut1, lo78, v63m5a) {
      var _hjo7 = d5ut1['split']('/'),
          s7_fl8 = _hjo7[_hjo7['length'] - 0x1],
          lof7 = lo78['split']('?')[0x0],
          joh4wf = n2g9k$['getFileInfo'](lo78),
          ipqng$ = n2g9k$['getFileNativePath'](s7_fl8);n2g9k$['fs']['copyFile']({ 'srcPath': d5ut1, 'destPath': ipqng$, 'success': function (ma651u) {
          if (!joh4wf) n2g9k$['onSaveFile'](lo78, s7_fl8), v63m5a != null && v63m5a['runWith']([0x0]);else {
            if (joh4wf['readyUrl'] != lo78) n2g9k$['remove'](s7_fl8, lo78, v63m5a);
          }
        }, 'fail': function (ni2q) {
          v63m5a != null && v63m5a['runWith']([0x1, ni2q]);
        } });
    }, n2g9k$['getFileNativePath'] = function (ay563v) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ay563v;
    }, n2g9k$['remove'] = function (_4hojf, _sl7f, j4_oh) {
      _sl7f === void 0x0 && (_sl7f = '');var igk2n = n2g9k$['getFileInfo'](_sl7f),
          cn$k = n2g9k$['getFileNativePath'](igk2n['md5']);vz3y0['loader']['clearRes'](igk2n['readyUrl']), n2g9k$['fs']['unlink']({ 'filePath': cn$k, 'success': function (h4oj_f) {
          if (_sl7f != '') n2g9k$['onSaveFile'](_sl7f, _4hojf);j4_oh != null && j4_oh['runWith']([0x0]);
        }, 'fail': function (j_o7) {} });
    }, n2g9k$['onSaveFile'] = function (ua5m16, fho4) {
      var v3y5a = ua5m16['split']('?')[0x0];n2g9k$['filesListObj'][v3y5a] = { 'md5': fho4, 'readyUrl': ua5m16 }, n2g9k$['fs']['writeFile']({ 'filePath': n2g9k$['fileNativeDir'] + '/' + n2g9k$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n2g9k$['filesListObj']), 'success': function (ol7f8) {
          console['log']('写入测试测试成功：', ol7f8);
        }, 'fail': function (v6y03) {
          console['log']('写入测试测试失败：', v6y03);
        } });
    }, n2g9k$['existDir'] = function (ud1wm, yvz) {
      n2g9k$['fs']['mkdir']({ 'dirPath': ud1wm, 'success': function (g2qni$) {
          yvz != null && yvz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ol7_) {
          if (ol7_['errMsg']['indexOf']('file already exists') != -0x1) n2g9k$['readSync'](n2g9k$['fileListName'], 'utf8', yvz);else yvz != null && yvz['runWith']([0x1, ol7_]);
        } });
    }, n2g9k$['readSync'] = function (v36y, g2n9k$, g9kn2$, adum15) {
      g2n9k$ === void 0x0 && (g2n9k$ = 'ascill'), adum15 === void 0x0 && (adum15 = '');var ryzv0x = n2g9k$['getFileNativePath'](v36y),
          kig$n;try {
        kig$n = n2g9k$['fs']['readFileSync'](ryzv0x), g9kn2$ != null && g9kn2$['runWith']([0x0, { 'data': kig$n }]);
      } catch (owt4j) {
        g9kn2$ != null && g9kn2$['runWith']([0x1]);
      }
    }, n2g9k$['readCache'] = function () {}, n2g9k$['writeCache'] = function (lck92) {
      var y0xzv = readyUrl['split']('?')[0x0];n2g9k$['filesListObj'][y0xzv] = { 'md5': md5Name, 'readyUrl': readyUrl }, n2g9k$['fs']['writeFile']({ 'filePath': n2g9k$['fileNativeDir'] + '/' + n2g9k$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n2g9k$['filesListObj']), 'success': function (_ofj7h) {}, 'fail': function (udmt15) {} });
    }, n2g9k$['setNativeFileDir'] = function ($pi) {
      n2g9k$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $pi;
    }, n2g9k$['filesListObj'] = {}, n2g9k$['fileNativeDir'] = null, n2g9k$['fileListName'] = 'layaairfiles.txt', n2g9k$['ziyuFileData'] = {}, fo_j4h(n2g9k$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n2g9k$;
  }(fh4),
      mtu15 = function (vz3ry0) {
    function toj4w() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], toj4w['__super']['call'](this), this['_sound'] = toj4w['_createSound']();
    }vma635(toj4w, 'laya.wx.mini.MiniSound', vz3ry0);var u6m5a1 = toj4w['prototype'];return u6m5a1['load'] = function (ofw4hj) {
      var k$ng29 = this;ofw4hj = v0yrz['formatURL'](ofw4hj), this['url'] = ofw4hj;if (toj4w['_audioCache'][ofw4hj]) {
        this['event']('complete');return;
      }function ngi$pq() {
        if (toj4w['_null'] != undefined) k$ng29['_sound']['onCanplay'](toj4w['_null']), k$ng29['_sound']['onError'](toj4w['_null']);else try {
          k$ng29['_sound']['onCanplay'](null), k$ng29['_sound']['onError'](null), toj4w['_null'] = null;
        } catch (vam36) {
          console['warn']('[wxmini] _clearSound:' + vam36), k$ng29['_sound']['onCanplay'](t41h), k$ng29['_sound']['onError'](t41h), toj4w['_null'] = t41h;
        }
      }function lk8sc() {
        ngi$pq(), y0zrex['loaded'] = !![], y0zrex['event']('complete'), toj4w['_audioCache'][y0zrex['url']] = y0zrex;
      }function j7o_fh(hjwf4o) {
        console['error']('errCode=' + hjwf4o['errCode'] + '  errMsg=' + hjwf4o['errMsg']), ngi$pq(), y0zrex['event']('error');
      }function t41h() {}this['_sound']['onCanplay'](lk8sc), this['_sound']['onError'](j7o_fh), this['_sound']['src'] = ofw4hj;var y0zrex = this;
    }, u6m5a1['play'] = function (m65, ksc9l) {
      m65 === void 0x0 && (m65 = 0x0), ksc9l === void 0x0 && (ksc9l = 0x0);var oh_4;if (this['url'] == u5ma6['_tMusic']) {
        if (!toj4w['_musicAudio']) toj4w['_musicAudio'] = toj4w['_createSound']();oh_4 = toj4w['_musicAudio'];
      } else oh_4 = toj4w['_createSound']();oh_4['src'] = this['url'];var pgiq = new _78ojf(oh_4);return pgiq['url'] = this['url'], pgiq['loops'] = ksc9l, pgiq['startTime'] = m65, pgiq['play'](), u5ma6['addChannel'](pgiq), pgiq;
    }, u6m5a1['dispose'] = function () {
      var sc9n2 = toj4w['_audioCache'][this['url']];sc9n2 && (sc9n2['src'] = '', delete toj4w['_audioCache'][this['url']]);
    }, qign(0x0, u6m5a1, 'duration', function () {
      return this['_sound']['duration'];
    }), toj4w['_createSound'] = function () {
      return toj4w['_id']++, o8_fj['window']['wx']['createInnerAudioContext']();
    }, toj4w['_musicAudio'] = null, toj4w['_id'] = 0x0, toj4w['_audioCache'] = {}, toj4w['_null'] = undefined, toj4w;
  }(fh4),
      _78ojf = function (cl78s9) {
    function a635yv(fo7_l) {
      this['_audio'] = null, this['_onEnd'] = null, a635yv['__super']['call'](this), this['_audio'] = fo7_l, this['_onEnd'] = _oh4jf['bind'](this['__onEnd'], this), fo7_l['onEnded'](this['_onEnd']);
    }vma635(a635yv, 'laya.wx.mini.MiniSoundChannel', cl78s9);var j4hwo = a635yv['prototype'];return j4hwo['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vz3y0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, j4hwo['__onNull'] = function () {}, j4hwo['play'] = function () {
      this['isStopped'] = ![], u5ma6['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, j4hwo['stop'] = function () {
      this['isStopped'] = !![], u5ma6['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a635yv['_null'] != undefined) this['_audio']['onEnded'](a635yv['_null']);else try {
        this['_audio']['onEnded'](null), a635yv['_null'] = null;
      } catch (tw4h1) {
        console['warn']('[wxmini] stop:' + tw4h1), this['_audio']['onEnded'](_oh4jf['bind'](this['__onNull'], this)), a635yv['_null'] = _oh4jf['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, j4hwo['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, j4hwo['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], u5ma6['addChannel'](this), this['_audio']['play']();
    }, qign(0x0, j4hwo, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qign(0x0, j4hwo, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qign(0x0, j4hwo, 'volume', function () {
      return 0x1;
    }, function (h_ojf) {}), a635yv['_null'] = undefined, a635yv;
  }(ayv03);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var u41t in Laya) {
    var a6y03 = Laya[u41t];a6y03 && a6y03['__isclass'] && (exports[u41t] = a6y03);
  }
});