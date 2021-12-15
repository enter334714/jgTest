var a = wx.$y;
(function (window, document, y063a) {
  var o4_f = y063a['un'],
      n$gqp = y063a['uns'],
      u3a5 = y063a['static'],
      $ngi = y063a['class'],
      ryv630 = y063a['getset'],
      thjwo4 = y063a['__newvec'],
      of8_j7 = laya['utils']['Browser'],
      hjd4t = laya['events']['Event'],
      au36 = laya['events']['EventDispatcher'],
      oh = laya['resource']['HTMLImage'],
      zxvr = laya['utils']['Handler'],
      v03 = laya['display']['Input'],
      ngk29 = laya['net']['Loader'],
      au65m1 = laya['maths']['Matrix'],
      lks = laya['renders']['Render'],
      ks9n2 = laya['utils']['RunDriver'],
      mdwut1 = laya['media']['Sound'],
      cn2 = laya['media']['SoundChannel'],
      htjd4w = laya['media']['SoundManager'],
      m1udtw = laya['display']['Stage'],
      $2qgi = laya['net']['URL'],
      mt1u5d = laya['utils']['Utils'],
      fhwj4o = function () {
    function d1wut4() {}return $ngi(d1wut4, 'laya.wx.mini.MiniAdpter'), d1wut4['getJson'] = function (s9l8kc) {
      return JSON['parse'](s9l8kc);
    }, d1wut4['init'] = function (d4tw, ry03v6) {
      d4tw === void 0x0 && (d4tw = ![]), ry03v6 === void 0x0 && (ry03v6 = ![]);if (d1wut4['_inited']) return;d1wut4['window'] = window;if (d1wut4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;d1wut4['_inited'] = !![], d1wut4['isZiYu'] = ry03v6, d1wut4['isPosMsgYu'] = d4tw, d1wut4['EnvConfig'] = {}, !d1wut4['isZiYu'] && (s29klc['setNativeFileDir']('/layaairGame'), s29klc['existDir'](s29klc['fileNativeDir'], zxvr['create'](d1wut4, d1wut4['onMkdirCallBack']))), d1wut4['window']['focus'] = function () {}, y063a['getUrlPath'] = function () {}, d1wut4['window']['logtime'] = function (ipqg$n) {}, d1wut4['window']['alertTimeLog'] = function (wj4hof) {}, d1wut4['window']['resetShareInfo'] = function () {}, d1wut4['window']['CanvasRenderingContext2D'] = function () {}, d1wut4['window']['CanvasRenderingContext2D']['prototype'] = d1wut4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d1wut4['window']['document']['body']['appendChild'] = function () {}, d1wut4['EnvConfig']['pixelRatioInt'] = 0x0, ks9n2['getPixelRatio'] = d1wut4['pixelRatio'], d1wut4['_preCreateElement'] = of8_j7['createElement'], of8_j7['createElement'] = d1wut4['createElement'], ks9n2['createShaderCondition'] = d1wut4['createShaderCondition'], mt1u5d['parseXMLFromString'] = d1wut4['parseXMLFromString'], v03['_createInputElement'] = jwhd4['_createInputElement'], d1wut4['EnvConfig']['load'] = ngk29['prototype']['load'], ngk29['prototype']['load'] = avy63['prototype']['load'], d1wut4['isZiYu'] && d4tw && wx['onMessage'](function (yrzex0) {
        yrzex0['isLoad'] && (s29klc['ziyuFileData'][yrzex0['url']] = yrzex0['data']);
      });
    }, d1wut4['onMkdirCallBack'] = function (jhw4fo, rz3yv0) {
      if (!jhw4fo) s29klc['filesListObj'] = JSON['parse'](rz3yv0['data']);
    }, d1wut4['pixelRatio'] = function () {
      if (!d1wut4['EnvConfig']['pixelRatioInt']) try {
        var m15td = wx['getSystemInfoSync']();return d1wut4['EnvConfig']['pixelRatioInt'] = m15td['pixelRatio'], m15td = m15td, m15td['pixelRatio'];
      } catch (twmd1) {}return d1wut4['EnvConfig']['pixelRatioInt'];
    }, d1wut4['createElement'] = function (mva563) {
      if (mva563 == 'canvas') {
        var s7fl8;return d1wut4['idx'] == 0x1 ? d1wut4['isZiYu'] ? (s7fl8 = sharedCanvas, s7fl8['style'] = {}) : s7fl8 = window['canvas'] : s7fl8 = window['wx']['createCanvas'](), d1wut4['idx']++, s7fl8;
      } else {
        if (mva563 == 'textarea' || mva563 == 'input') return d1wut4['onCreateInput'](mva563);else {
          if (mva563 == 'div') {
            var ohwj = d1wut4['_preCreateElement'](mva563);return ohwj['contains'] = function (sl897) {
              return null;
            }, ohwj['removeChild'] = function (e0ry) {}, ohwj;
          } else return d1wut4['_preCreateElement'](mva563);
        }
      }
    }, d1wut4['onCreateInput'] = function (toh4) {
      var f4jwho = d1wut4['_preCreateElement'](toh4);return f4jwho['focus'] = jwhd4['wxinputFocus'], f4jwho['blur'] = jwhd4['wxinputblur'], f4jwho['style'] = {}, f4jwho['value'] = 0x0, f4jwho['parentElement'] = {}, f4jwho['placeholder'] = {}, f4jwho['type'] = {}, f4jwho['setColor'] = function (ojwf) {}, f4jwho['setType'] = function (c9$kn) {}, f4jwho['setFontFace'] = function (rxey0z) {}, f4jwho['addEventListener'] = function (s7l_c) {}, f4jwho['contains'] = function (johf4w) {
        return null;
      }, f4jwho['removeChild'] = function (s_lc87) {}, f4jwho;
    }, d1wut4['createShaderCondition'] = function ($ngiqp) {
      var sf_l7 = this,
          wd1th4 = function () {
        var c2ksn = $ngiqp;return sf_l7[$ngiqp['replace']('this.', '')];
      };return wd1th4;
    }, d1wut4['EnvConfig'] = null, d1wut4['window'] = null, d1wut4['_preCreateElement'] = null, d1wut4['_inited'] = ![], d1wut4['wxRequest'] = null, d1wut4['systemInfo'] = null, d1wut4['version'] = '0.0.1', d1wut4['isZiYu'] = ![], d1wut4['isPosMsgYu'] = ![], d1wut4['parseXMLFromString'] = function (r0zxe) {
      var duwtm1, $2c9n;r0zxe = r0zxe['replace'](/>\s+</g, '><');try {
        duwtm1 = new window['Parser']['DOMParser']()['parseFromString'](r0zxe, 'text/xml');
      } catch (ua1dm5) {
        throw '需要引入xml解析库文件';
      }return duwtm1;
    }, d1wut4['idx'] = 0x1, d1wut4;
  }(),
      fjho4 = function () {
    function yxzr0() {}$ngi(yxzr0, 'laya.wx.mini.MiniImage');var v3a56 = yxzr0['prototype'];return v3a56['_loadImage'] = function (j4_fho) {
      var k$2in = this,
          h7of = ![];j4_fho['indexOf']('layaNativeDir/') == -0x1 && (h7of = !![], j4_fho = $2qgi['formatURL'](j4_fho));if (!s29klc['getFileInfo'](j4_fho)) {
        if (j4_fho['indexOf']('http://') != -0x1 || j4_fho['indexOf']('https://') != -0x1) s29klc['downImg'](j4_fho, new zxvr(yxzr0, yxzr0['onDownImgCallBack'], [j4_fho, k$2in]), j4_fho);else yxzr0['onCreateImage'](j4_fho, k$2in, !![]);
      } else yxzr0['onCreateImage'](j4_fho, k$2in, !h7of);
    }, yxzr0['onDownImgCallBack'] = function (rzy0xe, ry3zv0, adm5u) {
      if (!adm5u) yxzr0['onCreateImage'](rzy0xe, ry3zv0);else ry3zv0['onError'](null);
    }, yxzr0['onCreateImage'] = function (dt1um5, c7ls8_, u65m) {
      u65m === void 0x0 && (u65m = ![]);var $igqp;if (!u65m) {
        var k98lcs = s29klc['getFileInfo'](dt1um5),
            td1m5 = k98lcs['md5'];$igqp = s29klc['getFileNativePath'](td1m5);
      } else $igqp = dt1um5;if (c7ls8_['imgCache'] == null) c7ls8_['imgCache'] = {};var s8k9c;function k8c9ls() {
        s8k9c['onload'] = null, s8k9c['onerror'] = null, delete c7ls8_['imgCache'][dt1um5];
      };var dwt1u4 = function () {
        k8c9ls(), c7ls8_['onLoaded'](s8k9c);
      },
          s978l = function () {
        k8c9ls(), c7ls8_['event']('error', 'Load image failed');
      };c7ls8_['_type'] == 'nativeimage' ? (s8k9c = new of8_j7['window']['Image'](), s8k9c['crossOrigin'] = '', s8k9c['onload'] = dwt1u4, s8k9c['onerror'] = s978l, s8k9c['src'] = $igqp, c7ls8_['imgCache'][dt1um5] = s8k9c) : new oh['create']($igqp, { 'onload': dwt1u4, 'onerror': s978l, 'onCreate': function (wj4tho) {
          s8k9c = wj4tho, c7ls8_['imgCache'][dt1um5] = wj4tho;
        } });
    }, yxzr0;
  }(),
      jwhd4 = function () {
    function _of7h() {}return $ngi(_of7h, 'laya.wx.mini.MiniInput'), _of7h['_createInputElement'] = function () {
      v03['_initInput'](v03['area'] = of8_j7['createElement']('textarea')), v03['_initInput'](v03['input'] = of8_j7['createElement']('input')), v03['inputContainer'] = of8_j7['createElement']('div'), v03['inputContainer']['style']['position'] = 'absolute', v03['inputContainer']['style']['zIndex'] = 0x186a0, of8_j7['container']['appendChild'](v03['inputContainer']), v03['inputContainer']['setPos'] = function (a5mu61, lo7) {
        v03['inputContainer']['style']['left'] = a5mu61 + 'px', v03['inputContainer']['style']['top'] = lo7 + 'px';
      }, y063a['stage']['on']('resize', null, _of7h['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f_o78j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), htjd4w['_soundClass'] = ginp, htjd4w['_musicClass'] = ginp;
    }, _of7h['_onStageResize'] = function () {
      var foh_4j = y063a['stage']['_canvasTransform']['identity']();foh_4j['scale'](of8_j7['width'] / lks['canvas']['width'] / ks9n2['getPixelRatio'](), of8_j7['height'] / lks['canvas']['height'] / ks9n2['getPixelRatio']());
    }, _of7h['wxinputFocus'] = function (wdht14) {
      var c98lsk = v03['inputElement']['target'];if (c98lsk && !c98lsk['editable']) return;fhwj4o['window']['wx']['offKeyboardConfirm'](), fhwj4o['window']['wx']['offKeyboardInput'](), fhwj4o['window']['wx']['showKeyboard']({ 'defaultValue': c98lsk['text'], 'maxLength': c98lsk['maxChars'], 'multiple': c98lsk['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (cl89) {}, 'fail': function (_of7j) {} }), fhwj4o['window']['wx']['onKeyboardConfirm'](function (_lcs) {
        var fo8j = _lcs ? _lcs['value'] : '';c98lsk['text'] = fo8j, c98lsk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fhwj4o['window']['wx']['onKeyboardInput'](function (k2ign$) {
        var ng$i2q = k2ign$ ? k2ign$['value'] : '';if (!c98lsk['multiline']) {
          if (ng$i2q['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }c98lsk['text'] = ng$i2q, c98lsk['event']('input');
      });
    }, _of7h['inputEnter'] = function () {
      v03['inputElement']['target']['focus'] = ![];
    }, _of7h['wxinputblur'] = function () {
      _of7h['hideKeyboard']();
    }, _of7h['hideKeyboard'] = function () {
      fhwj4o['window']['wx']['offKeyboardConfirm'](), fhwj4o['window']['wx']['offKeyboardInput'](), fhwj4o['window']['wx']['hideKeyboard']({ 'success': function (y30zv) {
          console['log']('隐藏键盘');
        }, 'fail': function (mau15) {
          console['log']('隐藏键盘出错:' + (mau15 ? mau15['errMsg'] : ''));
        } });
    }, _of7h;
  }(),
      avy63 = function () {
    function ngk2$() {}$ngi(ngk2$, 'laya.wx.mini.MiniLoader');var t4hwo = ngk2$['prototype'];return t4hwo['load'] = function (a653yv, jthw, n$2gqi, k2slc9, h4towj) {
      n$2gqi === void 0x0 && (n$2gqi = !![]), h4towj === void 0x0 && (h4towj = ![]);var kn9$ = this;kn9$['_url'] = a653yv;if (a653yv['indexOf']('data:image') === 0x0) kn9$['_type'] = jthw = 'image';else kn9$['_type'] = jthw || (jthw = kn9$['getTypeFromUrl'](a653yv));kn9$['_cache'] = n$2gqi, kn9$['_data'] = null;var $ngip = 'ascii';if (a653yv['indexOf']('.fnt') != -0x1) $ngip = 'utf8';else jthw == 'arraybuffer' && ($ngip = '');;var k9sc2l = mt1u5d['getFileExtension'](a653yv);if (ngk2$['_fileTypeArr']['indexOf'](k9sc2l) != -0x1) fhwj4o['EnvConfig']['load']['call'](this, a653yv, jthw, n$2gqi, k2slc9, h4towj);else {
        if (!s29klc['getFileInfo'](a653yv)) {
          if (a653yv['indexOf']('layaNativeDir/') != -0x1) {
            if (fhwj4o['isZiYu']) {
              var hjwot = s29klc['ziyuFileData'][a653yv];kn9$['onLoaded'](hjwot);return;
            } else {
              cosnole['log']('read read'), s29klc['read'](a653yv, $ngip, new zxvr(ngk2$, ngk2$['onReadNativeCallBack'], [$ngip, a653yv, jthw, n$2gqi, k2slc9, h4towj, kn9$]));return;
            }
          }if ($2qgi['rootPath'] == '') var jfho = a653yv;else jfho = a653yv['split']($2qgi['rootPath'])[0x0];a653yv['indexOf']('http://') != -0x1 || a653yv['indexOf']('https://') != -0x1 ? fhwj4o['EnvConfig']['load']['call'](kn9$, a653yv, jthw, n$2gqi, k2slc9, h4towj) : s29klc['readFile'](jfho, $ngip, new zxvr(ngk2$, ngk2$['onReadNativeCallBack'], [$ngip, a653yv, jthw, n$2gqi, k2slc9, h4towj, kn9$]), a653yv);
        } else fhwj4o['EnvConfig']['load']['call'](this, a653yv, jthw, n$2gqi, k2slc9, h4towj);
      }
    }, t4hwo['resMgrLoad'] = function (_s7cl8, $c9kn2, nqi$, k8s9cl, gni2k, k2ng$9, o4fjwh) {
      nqi$ === void 0x0 && (nqi$ = 0x0), k8s9cl === void 0x0 && (k8s9cl = ![]), gni2k === void 0x0 && (gni2k = ![]), k2ng$9 === void 0x0 && (k2ng$9 = 0x0), o4fjwh === void 0x0 && (o4fjwh = 0x3), _s7cl8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _s7cl8), fhwj4o['EnvConfig']['resMgrLoad'](_s7cl8, (yr0vz, c87l_, tjowh4) => {
        ngk2$['prototype']['resMgrLoadCallBack'](yr0vz, c87l_, tjowh4, $c9kn2);
      }, nqi$, k8s9cl, gni2k, k2ng$9, o4fjwh);
    }, t4hwo['resMgrLoadCallBack'] = function (kni2$, eyzx, o7hfj, oj87f) {
      console['log']('buff:::', kni2$, o7hfj, s29klc['fileNativeDir'] + '///' + s29klc['fileListName']), oj87f(kni2$, eyzx, o7hfj);
    }, t4hwo['clearRes'] = function (fj8, whd4jt) {
      whd4jt === void 0x0 && (whd4jt = ![]);var ikn = this;ikn['clearRes'](fj8, whd4jt);var owh4tj = s29klc['getFileInfo'](fj8);if (owh4tj && (fj8['indexOf']('http://') != -0x1 || fj8['indexOf']('https://') != -0x1)) {
        var rzxvy0 = owh4tj['md5'],
            dwmt1 = s29klc['getFileNativePath'](rzxvy0);s29klc['remove'](dwmt1);
      }
    }, ngk2$['onReadNativeCallBack'] = function (zex0, _ojh, uwt14, f_oh4j, dhw4, n9ks2c, s7f_l8, u1d5t, _f4j) {
      f_oh4j === void 0x0 && (f_oh4j = !![]), n9ks2c === void 0x0 && (n9ks2c = ![]), u1d5t === void 0x0 && (u1d5t = 0x0);if (!u1d5t) {
        var $pgnqi;if (uwt14 == 'json' || uwt14 == 'atlas') $pgnqi = fhwj4o['getJson'](_f4j['data']);else uwt14 == 'xml' ? $pgnqi = mt1u5d['parseXMLFromString'](_f4j['data']) : $pgnqi = _f4j['data'];s7f_l8['onLoaded']($pgnqi), !fhwj4o['isZiYu'] && fhwj4o['isPosMsgYu'] && uwt14 != 'arraybuffer' && wx['postMessage']({ 'url': _ojh, 'data': $pgnqi, 'isLoad': !![] });
      } else u1d5t == 0x1 && fhwj4o['EnvConfig']['load']['call'](s7f_l8, _ojh, uwt14, f_oh4j, dhw4, n9ks2c);
    }, u3a5(ngk2$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ngk2$;
  }(),
      s29klc = function (gi2q$n) {
    function z0rexy() {
      z0rexy['__super']['call'](this);;
    }return $ngi(z0rexy, 'laya.wx.mini.MiniFileMgr', gi2q$n), z0rexy['isLoadFile'] = function (ol_87) {
      return z0rexy['_fileTypeArr']['indexOf'](ol_87) != -0x1 ? !![] : ![];
    }, z0rexy['getFileInfo'] = function ($gipq) {
      var l87_o = $gipq['split']('?')[0x0],
          fh_jo7 = z0rexy['filesListObj'][l87_o];if (fh_jo7 == null) return null;else return fh_jo7;return null;
    }, z0rexy['onFileUpdate'] = function (pni$q, twh14d) {
      var l8s7f = pni$q['split']('/'),
          dw4t1 = l8s7f[l8s7f['length'] - 0x1],
          damu51 = z0rexy['getFileInfo'](twh14d);if (damu51 == null) z0rexy['onSaveFile'](twh14d, dw4t1);else {
        if (damu51['readyUrl'] != twh14d) z0rexy['remove'](dw4t1, twh14d);
      }
    }, z0rexy['exits'] = function (csl98k, kl9cs2) {
      var umda15 = z0rexy['getFileNativePath'](csl98k);z0rexy['fs']['getFileInfo']({ 'filePath': umda15, 'success': function (cl8k9s) {
          kl9cs2 != null && kl9cs2['runWith']([0x0, cl8k9s]);
        }, 'fail': function (x0yrv) {
          kl9cs2 != null && kl9cs2['runWith']([0x1, x0yrv]);
        } });
    }, z0rexy['read'] = function (xe0ry, gn2i$, qn$g2i, wd1um) {
      gn2i$ === void 0x0 && (gn2i$ = 'ascill'), wd1um === void 0x0 && (wd1um = '');var v6ya;wd1um != '' ? v6ya = z0rexy['getFileNativePath'](xe0ry) : v6ya = xe0ry, z0rexy['fs']['readFile']({ 'filePath': v6ya, 'encoding': gn2i$, 'success': function (ikg$n2) {
          qn$g2i != null && qn$g2i['runWith']([0x0, ikg$n2]);
        }, 'fail': function (thwj4o) {
          if (thwj4o && wd1um != '') z0rexy['down'](wd1um, gn2i$, qn$g2i, wd1um);else qn$g2i != null && qn$g2i['runWith']([0x1]);
        } });
    }, z0rexy['readNativeFile'] = function (tdwh41, gpi$n) {
      z0rexy['fs']['readFile']({ 'filePath': tdwh41, 'encoding': '', 'success': function (s_c7l8) {
          gpi$n != null && gpi$n['runWith']([0x0]);
        }, 'fail': function (jo78f) {
          gpi$n != null && gpi$n['runWith']([0x1]);
        } });
    }, z0rexy['down'] = function (xyzvr0, f_sl8, $ik2, u4dwt) {
      f_sl8 === void 0x0 && (f_sl8 = 'ascill'), u4dwt === void 0x0 && (u4dwt = '');var ls29c = z0rexy['getFileNativePath'](u4dwt),
          i$qgn2 = z0rexy['wxdown']({ 'url': xyzvr0, 'filePath': ls29c, 'success': function (pnig) {
          if (pnig['statusCode'] === 0xc8) z0rexy['readFile'](pnig['filePath'], f_sl8, $ik2, u4dwt);
        }, 'fail': function (vr0z) {
          $ik2 != null && $ik2['runWith']([0x1, vr0z]);
        } });i$qgn2['onProgressUpdate'](function (xr0zy) {
        $ik2 != null && $ik2['runWith']([0x2, xr0zy['progress']]);
      });
    }, z0rexy['readFile'] = function (jo_fh7, _87scl, jdw4ht, ofj7h) {
      _87scl === void 0x0 && (_87scl = 'ascill'), ofj7h === void 0x0 && (ofj7h = ''), z0rexy['fs']['readFile']({ 'filePath': jo_fh7, 'encoding': _87scl, 'success': function (fs8l7) {
          if (jo_fh7['indexOf']('http://') != -0x1 || jo_fh7['indexOf']('https://') != -0x1) z0rexy['onFileUpdate'](jo_fh7, ofj7h);jdw4ht != null && jdw4ht['runWith']([0x0, fs8l7]);
        }, 'fail': function (yzr) {
          if (yzr) jdw4ht != null && jdw4ht['runWith']([0x1, yzr]);
        } });
    }, z0rexy['downImg'] = function (ojf_78, nc2k, dw4th) {
      dw4th === void 0x0 && (dw4th = '');var ma5 = z0rexy['wxdown']({ 'url': ojf_78, 'success': function (kn9c2s) {
          kn9c2s['statusCode'] === 0xc8 && z0rexy['copyFile'](kn9c2s['tempFilePath'], dw4th, nc2k);
        }, 'fail': function (of_4j) {
          nc2k != null && nc2k['runWith']([0x1, of_4j]);
        } });
    }, z0rexy['copyFile'] = function (_l87fs, zr03vy, du1mwt) {
      var l9s2k = _l87fs['split']('/'),
          z30r = l9s2k[l9s2k['length'] - 0x1],
          f_oj7 = zr03vy['split']('?')[0x0],
          fo_l78 = z0rexy['getFileInfo'](zr03vy),
          _fho = z0rexy['getFileNativePath'](z30r);z0rexy['fs']['copyFile']({ 'srcPath': _l87fs, 'destPath': _fho, 'success': function (g$ikn) {
          if (!fo_l78) z0rexy['onSaveFile'](zr03vy, z30r), du1mwt != null && du1mwt['runWith']([0x0]);else {
            if (fo_l78['readyUrl'] != zr03vy) z0rexy['remove'](z30r, zr03vy, du1mwt);
          }
        }, 'fail': function (s_78c) {
          du1mwt != null && du1mwt['runWith']([0x1, s_78c]);
        } });
    }, z0rexy['getFileNativePath'] = function (w4htjo) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + w4htjo;
    }, z0rexy['remove'] = function (sf_7l8, t4jdw, va56y3) {
      t4jdw === void 0x0 && (t4jdw = '');var w4d1u = z0rexy['getFileInfo'](t4jdw),
          cl89ks = z0rexy['getFileNativePath'](w4d1u['md5']);y063a['loader']['clearRes'](w4d1u['readyUrl']), z0rexy['fs']['unlink']({ 'filePath': cl89ks, 'success': function (slc98) {
          if (t4jdw != '') z0rexy['onSaveFile'](t4jdw, sf_7l8);va56y3 != null && va56y3['runWith']([0x0]);
        }, 'fail': function (u563ma) {} });
    }, z0rexy['onSaveFile'] = function (wjht4d, k2l9cs) {
      var c8s97l = wjht4d['split']('?')[0x0];z0rexy['filesListObj'][c8s97l] = { 'md5': k2l9cs, 'readyUrl': wjht4d }, z0rexy['fs']['writeFile']({ 'filePath': z0rexy['fileNativeDir'] + '/' + z0rexy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z0rexy['filesListObj']), 'success': function (o87f_l) {
          console['log']('写入测试测试成功：', o87f_l);
        }, 'fail': function (rvz0) {
          console['log']('写入测试测试失败：', rvz0);
        } });
    }, z0rexy['existDir'] = function (l98skc, yrvz) {
      z0rexy['fs']['mkdir']({ 'dirPath': l98skc, 'success': function (a36vm) {
          yrvz != null && yrvz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (n2$kc) {
          if (n2$kc['errMsg']['indexOf']('file already exists') != -0x1) z0rexy['readSync'](z0rexy['fileListName'], 'utf8', yrvz);else yrvz != null && yrvz['runWith']([0x1, n2$kc]);
        } });
    }, z0rexy['readSync'] = function (kcs2, wtu1m, l9s87c, j4twhd) {
      wtu1m === void 0x0 && (wtu1m = 'ascill'), j4twhd === void 0x0 && (j4twhd = '');var d5mua1 = z0rexy['getFileNativePath'](kcs2),
          ls78_c;try {
        ls78_c = z0rexy['fs']['readFileSync'](d5mua1), l9s87c != null && l9s87c['runWith']([0x0, { 'data': ls78_c }]);
      } catch (n$qi2g) {
        l9s87c != null && l9s87c['runWith']([0x1]);
      }
    }, z0rexy['readCache'] = function () {}, z0rexy['writeCache'] = function (slc89) {
      var l7sc_8 = readyUrl['split']('?')[0x0];z0rexy['filesListObj'][l7sc_8] = { 'md5': md5Name, 'readyUrl': readyUrl }, z0rexy['fs']['writeFile']({ 'filePath': z0rexy['fileNativeDir'] + '/' + z0rexy['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](z0rexy['filesListObj']), 'success': function (c9lk) {}, 'fail': function (rz0y3) {} });
    }, z0rexy['setNativeFileDir'] = function (a36um) {
      z0rexy['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a36um;
    }, z0rexy['filesListObj'] = {}, z0rexy['fileNativeDir'] = null, z0rexy['fileListName'] = 'layaairfiles.txt', z0rexy['ziyuFileData'] = {}, u3a5(z0rexy, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), z0rexy;
  }(au36),
      ginp = function (ng$ki) {
    function ckls98() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ckls98['__super']['call'](this), this['_sound'] = ckls98['_createSound']();
    }$ngi(ckls98, 'laya.wx.mini.MiniSound', ng$ki);var c_ = ckls98['prototype'];return c_['load'] = function (c92kl) {
      var yv6a = this;c92kl = $2qgi['formatURL'](c92kl), this['url'] = c92kl;if (ckls98['_audioCache'][c92kl]) {
        this['event']('complete');return;
      }function sn9() {
        if (ckls98['_null'] != undefined) yv6a['_sound']['onCanplay'](ckls98['_null']), yv6a['_sound']['onError'](ckls98['_null']);else try {
          yv6a['_sound']['onCanplay'](null), yv6a['_sound']['onError'](null), ckls98['_null'] = null;
        } catch (pn$ig) {
          console['warn']('[wxmini] _clearSound:' + pn$ig), yv6a['_sound']['onCanplay']($qi2gn), yv6a['_sound']['onError']($qi2gn), ckls98['_null'] = $qi2gn;
        }
      }function a5() {
        sn9(), oj8['loaded'] = !![], oj8['event']('complete'), ckls98['_audioCache'][oj8['url']] = oj8;
      }function foj_4h(kc$) {
        console['error']('errCode=' + kc$['errCode'] + '  errMsg=' + kc$['errMsg']), sn9(), oj8['event']('error');
      }function $qi2gn() {}this['_sound']['onCanplay'](a5), this['_sound']['onError'](foj_4h), this['_sound']['src'] = c92kl;var oj8 = this;
    }, c_['play'] = function (f7ohj_, wd4tj) {
      f7ohj_ === void 0x0 && (f7ohj_ = 0x0), wd4tj === void 0x0 && (wd4tj = 0x0);var dhtj;if (this['url'] == htjd4w['_tMusic']) {
        if (!ckls98['_musicAudio']) ckls98['_musicAudio'] = ckls98['_createSound']();dhtj = ckls98['_musicAudio'];
      } else dhtj = ckls98['_createSound']();dhtj['src'] = this['url'];var t4woh = new l79sc8(dhtj);return t4woh['url'] = this['url'], t4woh['loops'] = wd4tj, t4woh['startTime'] = f7ohj_, t4woh['play'](), htjd4w['addChannel'](t4woh), t4woh;
    }, c_['dispose'] = function () {
      var t4du = ckls98['_audioCache'][this['url']];t4du && (t4du['src'] = '', delete ckls98['_audioCache'][this['url']]);
    }, ryv630(0x0, c_, 'duration', function () {
      return this['_sound']['duration'];
    }), ckls98['_createSound'] = function () {
      return ckls98['_id']++, fhwj4o['window']['wx']['createInnerAudioContext']();
    }, ckls98['_musicAudio'] = null, ckls98['_id'] = 0x0, ckls98['_audioCache'] = {}, ckls98['_null'] = undefined, ckls98;
  }(au36),
      l79sc8 = function (xeyr) {
    function yv0zxr(yav0) {
      this['_audio'] = null, this['_onEnd'] = null, yv0zxr['__super']['call'](this), this['_audio'] = yav0, this['_onEnd'] = mt1u5d['bind'](this['__onEnd'], this), yav0['onEnded'](this['_onEnd']);
    }$ngi(yv0zxr, 'laya.wx.mini.MiniSoundChannel', xeyr);var c8s_ = yv0zxr['prototype'];return c8s_['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (y063a['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, c8s_['__onNull'] = function () {}, c8s_['play'] = function () {
      this['isStopped'] = ![], htjd4w['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, c8s_['stop'] = function () {
      this['isStopped'] = !![], htjd4w['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (yv0zxr['_null'] != undefined) this['_audio']['onEnded'](yv0zxr['_null']);else try {
        this['_audio']['onEnded'](null), yv0zxr['_null'] = null;
      } catch (m3v5) {
        console['warn']('[wxmini] stop:' + m3v5), this['_audio']['onEnded'](mt1u5d['bind'](this['__onNull'], this)), yv0zxr['_null'] = mt1u5d['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, c8s_['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, c8s_['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], htjd4w['addChannel'](this), this['_audio']['play']();
    }, ryv630(0x0, c8s_, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ryv630(0x0, c8s_, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ryv630(0x0, c8s_, 'volume', function () {
      return 0x1;
    }, function (vzy0r) {}), yv0zxr['_null'] = undefined, yv0zxr;
  }(cn2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var m51a6u in Laya) {
    var $ik2gn = Laya[m51a6u];$ik2gn && $ik2gn['__isclass'] && (exports[m51a6u] = $ik2gn);
  }
});