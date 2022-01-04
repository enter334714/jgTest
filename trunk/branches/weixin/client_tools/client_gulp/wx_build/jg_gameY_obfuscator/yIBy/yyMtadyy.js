var a = wx.$y;
(function (window, document, tu5m1d) {
  var iq$ng = tu5m1d['un'],
      u4twd1 = tu5m1d['uns'],
      o4wjh = tu5m1d['static'],
      k92 = tu5m1d['class'],
      rz0yx = tu5m1d['getset'],
      _78j = tu5m1d['__newvec'],
      hotw = laya['utils']['Browser'],
      v0y3z = laya['events']['Event'],
      $nk92c = laya['events']['EventDispatcher'],
      y6va3 = laya['resource']['HTMLImage'],
      f4who = laya['utils']['Handler'],
      fjho7_ = laya['display']['Input'],
      j7of_h = laya['net']['Loader'],
      zr0y = laya['maths']['Matrix'],
      kgn2$ = laya['renders']['Render'],
      c9skn2 = laya['utils']['RunDriver'],
      n9g$k = laya['media']['Sound'],
      yx0zr = laya['media']['SoundChannel'],
      k2l9sc = laya['media']['SoundManager'],
      a6y03 = laya['display']['Stage'],
      w4jtoh = laya['net']['URL'],
      ma6v35 = laya['utils']['Utils'],
      of_4j = function () {
    function ojf8_() {}return k92(ojf8_, 'laya.wx.mini.MiniAdpter'), ojf8_['getJson'] = function (i$2qng) {
      return JSON['parse'](i$2qng);
    }, ojf8_['init'] = function (udtw, o7_lf) {
      udtw === void 0x0 && (udtw = ![]), o7_lf === void 0x0 && (o7_lf = ![]);if (ojf8_['_inited']) return;ojf8_['window'] = window;if (ojf8_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ojf8_['_inited'] = !![], ojf8_['isZiYu'] = o7_lf, ojf8_['isPosMsgYu'] = udtw, ojf8_['EnvConfig'] = {}, !ojf8_['isZiYu'] && (fwoh['setNativeFileDir']('/layaairGame'), fwoh['existDir'](fwoh['fileNativeDir'], f4who['create'](ojf8_, ojf8_['onMkdirCallBack']))), ojf8_['window']['focus'] = function () {}, tu5m1d['getUrlPath'] = function () {}, ojf8_['window']['logtime'] = function (dth4wj) {}, ojf8_['window']['alertTimeLog'] = function (ol78_) {}, ojf8_['window']['resetShareInfo'] = function () {}, ojf8_['window']['CanvasRenderingContext2D'] = function () {}, ojf8_['window']['CanvasRenderingContext2D']['prototype'] = ojf8_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ojf8_['window']['document']['body']['appendChild'] = function () {}, ojf8_['EnvConfig']['pixelRatioInt'] = 0x0, c9skn2['getPixelRatio'] = ojf8_['pixelRatio'], ojf8_['_preCreateElement'] = hotw['createElement'], hotw['createElement'] = ojf8_['createElement'], c9skn2['createShaderCondition'] = ojf8_['createShaderCondition'], ma6v35['parseXMLFromString'] = ojf8_['parseXMLFromString'], fjho7_['_createInputElement'] = ohjwf['_createInputElement'], ojf8_['EnvConfig']['load'] = j7of_h['prototype']['load'], j7of_h['prototype']['load'] = w1mudt['prototype']['load'], ojf8_['isZiYu'] && udtw && wx['onMessage'](function (d4jwth) {
        d4jwth['isLoad'] && (fwoh['ziyuFileData'][d4jwth['url']] = d4jwth['data']);
      });
    }, ojf8_['onMkdirCallBack'] = function (s8_l7f, y3va5) {
      if (!s8_l7f) fwoh['filesListObj'] = JSON['parse'](y3va5['data']);
    }, ojf8_['pixelRatio'] = function () {
      if (!ojf8_['EnvConfig']['pixelRatioInt']) try {
        var sk8l = wx['getSystemInfoSync']();return ojf8_['EnvConfig']['pixelRatioInt'] = sk8l['pixelRatio'], sk8l = sk8l, sk8l['pixelRatio'];
      } catch (k9n$c) {}return ojf8_['EnvConfig']['pixelRatioInt'];
    }, ojf8_['createElement'] = function (_s78cl) {
      if (_s78cl == 'canvas') {
        var sk2;return ojf8_['idx'] == 0x1 ? ojf8_['isZiYu'] ? (sk2 = sharedCanvas, sk2['style'] = {}) : sk2 = window['canvas'] : sk2 = window['wx']['createCanvas'](), ojf8_['idx']++, sk2;
      } else {
        if (_s78cl == 'textarea' || _s78cl == 'input') return ojf8_['onCreateInput'](_s78cl);else {
          if (_s78cl == 'div') {
            var fw4hjo = ojf8_['_preCreateElement'](_s78cl);return fw4hjo['contains'] = function (va365m) {
              return null;
            }, fw4hjo['removeChild'] = function (owht4j) {}, fw4hjo;
          } else return ojf8_['_preCreateElement'](_s78cl);
        }
      }
    }, ojf8_['onCreateInput'] = function (dtw14h) {
      var tj4wh = ojf8_['_preCreateElement'](dtw14h);return tj4wh['focus'] = ohjwf['wxinputFocus'], tj4wh['blur'] = ohjwf['wxinputblur'], tj4wh['style'] = {}, tj4wh['value'] = 0x0, tj4wh['parentElement'] = {}, tj4wh['placeholder'] = {}, tj4wh['type'] = {}, tj4wh['setColor'] = function (cs8lk) {}, tj4wh['setType'] = function (rz0vx) {}, tj4wh['setFontFace'] = function (of_87j) {}, tj4wh['addEventListener'] = function (v65) {}, tj4wh['contains'] = function (uma165) {
        return null;
      }, tj4wh['removeChild'] = function (hjw4of) {}, tj4wh;
    }, ojf8_['createShaderCondition'] = function ($kgn92) {
      var u156a = this,
          hwo4f = function () {
        var a0vy36 = $kgn92;return u156a[$kgn92['replace']('this.', '')];
      };return hwo4f;
    }, ojf8_['EnvConfig'] = null, ojf8_['window'] = null, ojf8_['_preCreateElement'] = null, ojf8_['_inited'] = ![], ojf8_['wxRequest'] = null, ojf8_['systemInfo'] = null, ojf8_['version'] = '0.0.1', ojf8_['isZiYu'] = ![], ojf8_['isPosMsgYu'] = ![], ojf8_['parseXMLFromString'] = function (ki2$n) {
      var yrv6, j_4of;ki2$n = ki2$n['replace'](/>\s+</g, '><');try {
        yrv6 = new window['Parser']['DOMParser']()['parseFromString'](ki2$n, 'text/xml');
      } catch (jfw4ho) {
        throw '需要引入xml解析库文件';
      }return yrv6;
    }, ojf8_['idx'] = 0x1, ojf8_;
  }(),
      dtj = function () {
    function i$qn2g() {}k92(i$qn2g, 'laya.wx.mini.MiniImage');var z03yrv = i$qn2g['prototype'];return z03yrv['_loadImage'] = function (c29kns) {
      var hojtw = this,
          _l7cs = ![];c29kns['indexOf']('layaNativeDir/') == -0x1 && (_l7cs = !![], c29kns = w4jtoh['formatURL'](c29kns));if (!fwoh['getFileInfo'](c29kns)) {
        if (c29kns['indexOf']('http://') != -0x1 || c29kns['indexOf']('https://') != -0x1) fwoh['downImg'](c29kns, new f4who(i$qn2g, i$qn2g['onDownImgCallBack'], [c29kns, hojtw]), c29kns);else i$qn2g['onCreateImage'](c29kns, hojtw, !![]);
      } else i$qn2g['onCreateImage'](c29kns, hojtw, !_l7cs);
    }, i$qn2g['onDownImgCallBack'] = function ($2in, c789ls, l9k8c) {
      if (!l9k8c) i$qn2g['onCreateImage']($2in, c789ls);else c789ls['onError'](null);
    }, i$qn2g['onCreateImage'] = function (sk29, gn$2k9, j4owfh) {
      j4owfh === void 0x0 && (j4owfh = ![]);var dtwhj4;if (!j4owfh) {
        var kn9g = fwoh['getFileInfo'](sk29),
            hjfwo = kn9g['md5'];dtwhj4 = fwoh['getFileNativePath'](hjfwo);
      } else dtwhj4 = sk29;if (gn$2k9['imgCache'] == null) gn$2k9['imgCache'] = {};var vrx0zy;function damu() {
        vrx0zy['onload'] = null, vrx0zy['onerror'] = null, delete gn$2k9['imgCache'][sk29];
      };var v06yr = function () {
        damu(), gn$2k9['onLoaded'](vrx0zy);
      },
          ni$2k = function () {
        damu(), gn$2k9['event']('error', 'Load image failed');
      };gn$2k9['_type'] == 'nativeimage' ? (vrx0zy = new hotw['window']['Image'](), vrx0zy['crossOrigin'] = '', vrx0zy['onload'] = v06yr, vrx0zy['onerror'] = ni$2k, vrx0zy['src'] = dtwhj4, gn$2k9['imgCache'][sk29] = vrx0zy) : new y6va3['create'](dtwhj4, { 'onload': v06yr, 'onerror': ni$2k, 'onCreate': function (u61ma5) {
          vrx0zy = u61ma5, gn$2k9['imgCache'][sk29] = u61ma5;
        } });
    }, i$qn2g;
  }(),
      ohjwf = function () {
    function lsc89() {}return k92(lsc89, 'laya.wx.mini.MiniInput'), lsc89['_createInputElement'] = function () {
      fjho7_['_initInput'](fjho7_['area'] = hotw['createElement']('textarea')), fjho7_['_initInput'](fjho7_['input'] = hotw['createElement']('input')), fjho7_['inputContainer'] = hotw['createElement']('div'), fjho7_['inputContainer']['style']['position'] = 'absolute', fjho7_['inputContainer']['style']['zIndex'] = 0x186a0, hotw['container']['appendChild'](fjho7_['inputContainer']), fjho7_['inputContainer']['setPos'] = function (fo8l7, thj4) {
        fjho7_['inputContainer']['style']['left'] = fo8l7 + 'px', fjho7_['inputContainer']['style']['top'] = thj4 + 'px';
      }, tu5m1d['stage']['on']('resize', null, lsc89['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vryz03) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), k2l9sc['_soundClass'] = l92ksc, k2l9sc['_musicClass'] = l92ksc;
    }, lsc89['_onStageResize'] = function () {
      var ma1u5d = tu5m1d['stage']['_canvasTransform']['identity']();ma1u5d['scale'](hotw['width'] / kgn2$['canvas']['width'] / c9skn2['getPixelRatio'](), hotw['height'] / kgn2$['canvas']['height'] / c9skn2['getPixelRatio']());
    }, lsc89['wxinputFocus'] = function (ck8s9l) {
      var nc9ks = fjho7_['inputElement']['target'];if (nc9ks && !nc9ks['editable']) return;of_4j['window']['wx']['offKeyboardConfirm'](), of_4j['window']['wx']['offKeyboardInput'](), of_4j['window']['wx']['showKeyboard']({ 'defaultValue': nc9ks['text'], 'maxLength': nc9ks['maxChars'], 'multiple': nc9ks['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jo4) {}, 'fail': function (wj4of) {} }), of_4j['window']['wx']['onKeyboardConfirm'](function (mtuwd1) {
        var j7ho_ = mtuwd1 ? mtuwd1['value'] : '';nc9ks['text'] = j7ho_, nc9ks['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), of_4j['window']['wx']['onKeyboardInput'](function (u1td) {
        var wo4f = u1td ? u1td['value'] : '';if (!nc9ks['multiline']) {
          if (wo4f['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nc9ks['text'] = wo4f, nc9ks['event']('input');
      });
    }, lsc89['inputEnter'] = function () {
      fjho7_['inputElement']['target']['focus'] = ![];
    }, lsc89['wxinputblur'] = function () {
      lsc89['hideKeyboard']();
    }, lsc89['hideKeyboard'] = function () {
      of_4j['window']['wx']['offKeyboardConfirm'](), of_4j['window']['wx']['offKeyboardInput'](), of_4j['window']['wx']['hideKeyboard']({ 'success': function (ma56v3) {
          console['log']('隐藏键盘');
        }, 'fail': function (md15u) {
          console['log']('隐藏键盘出错:' + (md15u ? md15u['errMsg'] : ''));
        } });
    }, lsc89;
  }(),
      w1mudt = function () {
    function c87sl() {}k92(c87sl, 'laya.wx.mini.MiniLoader');var um53 = c87sl['prototype'];return um53['load'] = function (f_ojh, _fh4oj, y0, $9kng2, utd5m1) {
      y0 === void 0x0 && (y0 = !![]), utd5m1 === void 0x0 && (utd5m1 = ![]);var zxy0v = this;zxy0v['_url'] = f_ojh;if (f_ojh['indexOf']('data:image') === 0x0) zxy0v['_type'] = _fh4oj = 'image';else zxy0v['_type'] = _fh4oj || (_fh4oj = zxy0v['getTypeFromUrl'](f_ojh));zxy0v['_cache'] = y0, zxy0v['_data'] = null;var u6ma53 = 'ascii';if (f_ojh['indexOf']('.fnt') != -0x1) u6ma53 = 'utf8';else _fh4oj == 'arraybuffer' && (u6ma53 = '');;var h_fo = ma6v35['getFileExtension'](f_ojh);if (c87sl['_fileTypeArr']['indexOf'](h_fo) != -0x1) of_4j['EnvConfig']['load']['call'](this, f_ojh, _fh4oj, y0, $9kng2, utd5m1);else {
        if (!fwoh['getFileInfo'](f_ojh)) {
          if (f_ojh['indexOf']('layaNativeDir/') != -0x1) {
            if (of_4j['isZiYu']) {
              var hjo_7f = fwoh['ziyuFileData'][f_ojh];zxy0v['onLoaded'](hjo_7f);return;
            } else {
              cosnole['log']('read read'), fwoh['read'](f_ojh, u6ma53, new f4who(c87sl, c87sl['onReadNativeCallBack'], [u6ma53, f_ojh, _fh4oj, y0, $9kng2, utd5m1, zxy0v]));return;
            }
          }if (w4jtoh['rootPath'] == '') var mdau51 = f_ojh;else mdau51 = f_ojh['split'](w4jtoh['rootPath'])[0x0];f_ojh['indexOf']('http://') != -0x1 || f_ojh['indexOf']('https://') != -0x1 ? of_4j['EnvConfig']['load']['call'](zxy0v, f_ojh, _fh4oj, y0, $9kng2, utd5m1) : fwoh['readFile'](mdau51, u6ma53, new f4who(c87sl, c87sl['onReadNativeCallBack'], [u6ma53, f_ojh, _fh4oj, y0, $9kng2, utd5m1, zxy0v]), f_ojh);
        } else of_4j['EnvConfig']['load']['call'](this, f_ojh, _fh4oj, y0, $9kng2, utd5m1);
      }
    }, um53['resMgrLoad'] = function (w4dh, cs9l7, yv56, am51u6, yvzr03, madu, yx0zer) {
      yv56 === void 0x0 && (yv56 = 0x0), am51u6 === void 0x0 && (am51u6 = ![]), yvzr03 === void 0x0 && (yvzr03 = ![]), madu === void 0x0 && (madu = 0x0), yx0zer === void 0x0 && (yx0zer = 0x3), w4dh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w4dh), of_4j['EnvConfig']['resMgrLoad'](w4dh, (ngk$29, foj7h_, h4oj_) => {
        c87sl['prototype']['resMgrLoadCallBack'](ngk$29, foj7h_, h4oj_, cs9l7);
      }, yv56, am51u6, yvzr03, madu, yx0zer);
    }, um53['resMgrLoadCallBack'] = function (hjwof, mua1d, dwt4j, jot4h) {
      console['log']('buff:::', hjwof, dwt4j, fwoh['fileNativeDir'] + '///' + fwoh['fileListName']), jot4h(hjwof, mua1d, dwt4j);
    }, um53['clearRes'] = function (ngqi$2, owj4fh) {
      owj4fh === void 0x0 && (owj4fh = ![]);var jofw4h = this;jofw4h['clearRes'](ngqi$2, owj4fh);var yav03 = fwoh['getFileInfo'](ngqi$2);if (yav03 && (ngqi$2['indexOf']('http://') != -0x1 || ngqi$2['indexOf']('https://') != -0x1)) {
        var toh4wj = yav03['md5'],
            kn2$g9 = fwoh['getFileNativePath'](toh4wj);fwoh['remove'](kn2$g9);
      }
    }, c87sl['onReadNativeCallBack'] = function (_o78l, v0rz3, w41thd, gik$2n, am3, d41ht, zyre, dm1uwt, jf4woh) {
      gik$2n === void 0x0 && (gik$2n = !![]), d41ht === void 0x0 && (d41ht = ![]), dm1uwt === void 0x0 && (dm1uwt = 0x0);if (!dm1uwt) {
        var q$pni;if (w41thd == 'json' || w41thd == 'atlas') q$pni = of_4j['getJson'](jf4woh['data']);else w41thd == 'xml' ? q$pni = ma6v35['parseXMLFromString'](jf4woh['data']) : q$pni = jf4woh['data'];zyre['onLoaded'](q$pni), !of_4j['isZiYu'] && of_4j['isPosMsgYu'] && w41thd != 'arraybuffer' && wx['postMessage']({ 'url': v0rz3, 'data': q$pni, 'isLoad': !![] });
      } else dm1uwt == 0x1 && of_4j['EnvConfig']['load']['call'](zyre, v0rz3, w41thd, gik$2n, am3, d41ht);
    }, o4wjh(c87sl, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), c87sl;
  }(),
      fwoh = function (k$29n) {
    function ohj7_f() {
      ohj7_f['__super']['call'](this);;
    }return k92(ohj7_f, 'laya.wx.mini.MiniFileMgr', k$29n), ohj7_f['isLoadFile'] = function (f_lo87) {
      return ohj7_f['_fileTypeArr']['indexOf'](f_lo87) != -0x1 ? !![] : ![];
    }, ohj7_f['getFileInfo'] = function (fls7_) {
      var m15udt = fls7_['split']('?')[0x0],
          vr36y0 = ohj7_f['filesListObj'][m15udt];if (vr36y0 == null) return null;else return vr36y0;return null;
    }, ohj7_f['onFileUpdate'] = function (v0y36r, jf_) {
      var _j8of = v0y36r['split']('/'),
          _c7s = _j8of[_j8of['length'] - 0x1],
          rz03vy = ohj7_f['getFileInfo'](jf_);if (rz03vy == null) ohj7_f['onSaveFile'](jf_, _c7s);else {
        if (rz03vy['readyUrl'] != jf_) ohj7_f['remove'](_c7s, jf_);
      }
    }, ohj7_f['exits'] = function (iqngp$, foj7_) {
      var _87 = ohj7_f['getFileNativePath'](iqngp$);ohj7_f['fs']['getFileInfo']({ 'filePath': _87, 'success': function (i2gn$q) {
          foj7_ != null && foj7_['runWith']([0x0, i2gn$q]);
        }, 'fail': function (q2n$) {
          foj7_ != null && foj7_['runWith']([0x1, q2n$]);
        } });
    }, ohj7_f['read'] = function (mt1dw, l978cs, s92cnk, u14twd) {
      l978cs === void 0x0 && (l978cs = 'ascill'), u14twd === void 0x0 && (u14twd = '');var _foj78;u14twd != '' ? _foj78 = ohj7_f['getFileNativePath'](mt1dw) : _foj78 = mt1dw, ohj7_f['fs']['readFile']({ 'filePath': _foj78, 'encoding': l978cs, 'success': function (ojth4w) {
          s92cnk != null && s92cnk['runWith']([0x0, ojth4w]);
        }, 'fail': function (_j4hfo) {
          if (_j4hfo && u14twd != '') ohj7_f['down'](u14twd, l978cs, s92cnk, u14twd);else s92cnk != null && s92cnk['runWith']([0x1]);
        } });
    }, ohj7_f['readNativeFile'] = function (c7l8_s, n$k2c9) {
      ohj7_f['fs']['readFile']({ 'filePath': c7l8_s, 'encoding': '', 'success': function (k2snc9) {
          n$k2c9 != null && n$k2c9['runWith']([0x0]);
        }, 'fail': function (yv36) {
          n$k2c9 != null && n$k2c9['runWith']([0x1]);
        } });
    }, ohj7_f['down'] = function (v60r, utd41w, $gn2i, u5dm1) {
      utd41w === void 0x0 && (utd41w = 'ascill'), u5dm1 === void 0x0 && (u5dm1 = '');var a3m6 = ohj7_f['getFileNativePath'](u5dm1),
          c9l2ks = ohj7_f['wxdown']({ 'url': v60r, 'filePath': a3m6, 'success': function (v6ma) {
          if (v6ma['statusCode'] === 0xc8) ohj7_f['readFile'](v6ma['filePath'], utd41w, $gn2i, u5dm1);
        }, 'fail': function (_jfo78) {
          $gn2i != null && $gn2i['runWith']([0x1, _jfo78]);
        } });c9l2ks['onProgressUpdate'](function (owjht4) {
        $gn2i != null && $gn2i['runWith']([0x2, owjht4['progress']]);
      });
    }, ohj7_f['readFile'] = function (m1tdu, jwfh4o, twd41h, qng$2) {
      jwfh4o === void 0x0 && (jwfh4o = 'ascill'), qng$2 === void 0x0 && (qng$2 = ''), ohj7_f['fs']['readFile']({ 'filePath': m1tdu, 'encoding': jwfh4o, 'success': function (hotwj4) {
          if (m1tdu['indexOf']('http://') != -0x1 || m1tdu['indexOf']('https://') != -0x1) ohj7_f['onFileUpdate'](m1tdu, qng$2);twd41h != null && twd41h['runWith']([0x0, hotwj4]);
        }, 'fail': function (k9l8s) {
          if (k9l8s) twd41h != null && twd41h['runWith']([0x1, k9l8s]);
        } });
    }, ohj7_f['downImg'] = function (fl8_7, s8k9c, pgqni) {
      pgqni === void 0x0 && (pgqni = '');var kn2s = ohj7_f['wxdown']({ 'url': fl8_7, 'success': function (mt1du) {
          mt1du['statusCode'] === 0xc8 && ohj7_f['copyFile'](mt1du['tempFilePath'], pgqni, s8k9c);
        }, 'fail': function (gnpiq) {
          s8k9c != null && s8k9c['runWith']([0x1, gnpiq]);
        } });
    }, ohj7_f['copyFile'] = function (i2kng, n2kg$i, ck9sl) {
      var dhtj4w = i2kng['split']('/'),
          y3rz0 = dhtj4w[dhtj4w['length'] - 0x1],
          v0x = n2kg$i['split']('?')[0x0],
          ck92s = ohj7_f['getFileInfo'](n2kg$i),
          da5mu = ohj7_f['getFileNativePath'](y3rz0);ohj7_f['fs']['copyFile']({ 'srcPath': i2kng, 'destPath': da5mu, 'success': function (yxze0r) {
          if (!ck92s) ohj7_f['onSaveFile'](n2kg$i, y3rz0), ck9sl != null && ck9sl['runWith']([0x0]);else {
            if (ck92s['readyUrl'] != n2kg$i) ohj7_f['remove'](y3rz0, n2kg$i, ck9sl);
          }
        }, 'fail': function (um3) {
          ck9sl != null && ck9sl['runWith']([0x1, um3]);
        } });
    }, ohj7_f['getFileNativePath'] = function (cslk98) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + cslk98;
    }, ohj7_f['remove'] = function (iqg2n, ks8lc9, jw4foh) {
      ks8lc9 === void 0x0 && (ks8lc9 = '');var wfhoj = ohj7_f['getFileInfo'](ks8lc9),
          vm56 = ohj7_f['getFileNativePath'](wfhoj['md5']);tu5m1d['loader']['clearRes'](wfhoj['readyUrl']), ohj7_f['fs']['unlink']({ 'filePath': vm56, 'success': function (t4djhw) {
          if (ks8lc9 != '') ohj7_f['onSaveFile'](ks8lc9, iqg2n);jw4foh != null && jw4foh['runWith']([0x0]);
        }, 'fail': function (g$kn2) {} });
    }, ohj7_f['onSaveFile'] = function (k8lsc9, dma5u) {
      var $n2kc = k8lsc9['split']('?')[0x0];ohj7_f['filesListObj'][$n2kc] = { 'md5': dma5u, 'readyUrl': k8lsc9 }, ohj7_f['fs']['writeFile']({ 'filePath': ohj7_f['fileNativeDir'] + '/' + ohj7_f['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ohj7_f['filesListObj']), 'success': function (s8f_7l) {
          console['log']('写入测试测试成功：', s8f_7l);
        }, 'fail': function (m36u) {
          console['log']('写入测试测试失败：', m36u);
        } });
    }, ohj7_f['existDir'] = function (c2snk9, c8sl_) {
      ohj7_f['fs']['mkdir']({ 'dirPath': c2snk9, 'success': function (v365y) {
          c8sl_ != null && c8sl_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qni2$g) {
          if (qni2$g['errMsg']['indexOf']('file already exists') != -0x1) ohj7_f['readSync'](ohj7_f['fileListName'], 'utf8', c8sl_);else c8sl_ != null && c8sl_['runWith']([0x1, qni2$g]);
        } });
    }, ohj7_f['readSync'] = function (y06vr3, l2cs, sc29k, oh) {
      l2cs === void 0x0 && (l2cs = 'ascill'), oh === void 0x0 && (oh = '');var n$igp = ohj7_f['getFileNativePath'](y06vr3),
          vr0xy;try {
        vr0xy = ohj7_f['fs']['readFileSync'](n$igp), sc29k != null && sc29k['runWith']([0x0, { 'data': vr0xy }]);
      } catch (yrz0ex) {
        sc29k != null && sc29k['runWith']([0x1]);
      }
    }, ohj7_f['readCache'] = function () {}, ohj7_f['writeCache'] = function (lc8k9) {
      var adm51u = readyUrl['split']('?')[0x0];ohj7_f['filesListObj'][adm51u] = { 'md5': md5Name, 'readyUrl': readyUrl }, ohj7_f['fs']['writeFile']({ 'filePath': ohj7_f['fileNativeDir'] + '/' + ohj7_f['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ohj7_f['filesListObj']), 'success': function (w41th) {}, 'fail': function (l2cs9k) {} });
    }, ohj7_f['setNativeFileDir'] = function (um561a) {
      ohj7_f['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + um561a;
    }, ohj7_f['filesListObj'] = {}, ohj7_f['fileNativeDir'] = null, ohj7_f['fileListName'] = 'layaairfiles.txt', ohj7_f['ziyuFileData'] = {}, o4wjh(ohj7_f, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ohj7_f;
  }($nk92c),
      l92ksc = function (c9l78) {
    function w4d1th() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], w4d1th['__super']['call'](this), this['_sound'] = w4d1th['_createSound']();
    }k92(w4d1th, 'laya.wx.mini.MiniSound', c9l78);var l_7f8o = w4d1th['prototype'];return l_7f8o['load'] = function (kg$n) {
      var dw41t = this;kg$n = w4jtoh['formatURL'](kg$n), this['url'] = kg$n;if (w4d1th['_audioCache'][kg$n]) {
        this['event']('complete');return;
      }function o4tjh() {
        if (w4d1th['_null'] != undefined) dw41t['_sound']['onCanplay'](w4d1th['_null']), dw41t['_sound']['onError'](w4d1th['_null']);else try {
          dw41t['_sound']['onCanplay'](null), dw41t['_sound']['onError'](null), w4d1th['_null'] = null;
        } catch (j8_7) {
          console['warn']('[wxmini] _clearSound:' + j8_7), dw41t['_sound']['onCanplay'](s79c8), dw41t['_sound']['onError'](s79c8), w4d1th['_null'] = s79c8;
        }
      }function h4tjwo() {
        o4tjh(), clk2s['loaded'] = !![], clk2s['event']('complete'), w4d1th['_audioCache'][clk2s['url']] = clk2s;
      }function ks9lc(fs87l_) {
        console['error']('errCode=' + fs87l_['errCode'] + '  errMsg=' + fs87l_['errMsg']), o4tjh(), clk2s['event']('error');
      }function s79c8() {}this['_sound']['onCanplay'](h4tjwo), this['_sound']['onError'](ks9lc), this['_sound']['src'] = kg$n;var clk2s = this;
    }, l_7f8o['play'] = function (mt1w, cl_7) {
      mt1w === void 0x0 && (mt1w = 0x0), cl_7 === void 0x0 && (cl_7 = 0x0);var mt5du;if (this['url'] == k2l9sc['_tMusic']) {
        if (!w4d1th['_musicAudio']) w4d1th['_musicAudio'] = w4d1th['_createSound']();mt5du = w4d1th['_musicAudio'];
      } else mt5du = w4d1th['_createSound']();mt5du['src'] = this['url'];var a15udm = new udwtm1(mt5du);return a15udm['url'] = this['url'], a15udm['loops'] = cl_7, a15udm['startTime'] = mt1w, a15udm['play'](), k2l9sc['addChannel'](a15udm), a15udm;
    }, l_7f8o['dispose'] = function () {
      var _f7jh = w4d1th['_audioCache'][this['url']];_f7jh && (_f7jh['src'] = '', delete w4d1th['_audioCache'][this['url']]);
    }, rz0yx(0x0, l_7f8o, 'duration', function () {
      return this['_sound']['duration'];
    }), w4d1th['_createSound'] = function () {
      return w4d1th['_id']++, of_4j['window']['wx']['createInnerAudioContext']();
    }, w4d1th['_musicAudio'] = null, w4d1th['_id'] = 0x0, w4d1th['_audioCache'] = {}, w4d1th['_null'] = undefined, w4d1th;
  }($nk92c),
      udwtm1 = function (thwjd4) {
    function lsf7_8(o8_lf7) {
      this['_audio'] = null, this['_onEnd'] = null, lsf7_8['__super']['call'](this), this['_audio'] = o8_lf7, this['_onEnd'] = ma6v35['bind'](this['__onEnd'], this), o8_lf7['onEnded'](this['_onEnd']);
    }k92(lsf7_8, 'laya.wx.mini.MiniSoundChannel', thwjd4);var d1u5tm = lsf7_8['prototype'];return d1u5tm['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (tu5m1d['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, d1u5tm['__onNull'] = function () {}, d1u5tm['play'] = function () {
      this['isStopped'] = ![], k2l9sc['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, d1u5tm['stop'] = function () {
      this['isStopped'] = !![], k2l9sc['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (lsf7_8['_null'] != undefined) this['_audio']['onEnded'](lsf7_8['_null']);else try {
        this['_audio']['onEnded'](null), lsf7_8['_null'] = null;
      } catch (ck9s2) {
        console['warn']('[wxmini] stop:' + ck9s2), this['_audio']['onEnded'](ma6v35['bind'](this['__onNull'], this)), lsf7_8['_null'] = ma6v35['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, d1u5tm['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, d1u5tm['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], k2l9sc['addChannel'](this), this['_audio']['play']();
    }, rz0yx(0x0, d1u5tm, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), rz0yx(0x0, d1u5tm, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), rz0yx(0x0, d1u5tm, 'volume', function () {
      return 0x1;
    }, function (z0ey) {}), lsf7_8['_null'] = undefined, lsf7_8;
  }(yx0zr);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var fjho4w in Laya) {
    var uwm1 = Laya[fjho4w];uwm1 && uwm1['__isclass'] && (exports[fjho4w] = uwm1);
  }
});