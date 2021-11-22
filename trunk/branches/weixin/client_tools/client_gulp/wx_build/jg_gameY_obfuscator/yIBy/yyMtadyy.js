var a = wx.$y;
(function (window, document, mdu51t) {
  var i$nk2 = mdu51t['un'],
      jtoh4 = mdu51t['uns'],
      tm5du1 = mdu51t['static'],
      g2ik = mdu51t['class'],
      dmt1wu = mdu51t['getset'],
      h_jo4 = mdu51t['__newvec'],
      c98ks = laya['utils']['Browser'],
      htw4oj = laya['events']['Event'],
      hofwj = laya['events']['EventDispatcher'],
      y0zerx = laya['resource']['HTMLImage'],
      qpnig$ = laya['utils']['Handler'],
      j_fh = laya['display']['Input'],
      ma15d = laya['net']['Loader'],
      tdm5 = laya['maths']['Matrix'],
      i2gn$q = laya['renders']['Render'],
      d5a1 = laya['utils']['RunDriver'],
      cls879 = laya['media']['Sound'],
      ma6u51 = laya['media']['SoundChannel'],
      gki$2n = laya['media']['SoundManager'],
      k9$cn = laya['display']['Stage'],
      fo7_h = laya['net']['URL'],
      q$gni2 = laya['utils']['Utils'],
      gi2k$ = function () {
    function zey() {}return g2ik(zey, 'laya.wx.mini.MiniAdpter'), zey['getJson'] = function (n$2igq) {
      return JSON['parse'](n$2igq);
    }, zey['init'] = function (a6v35m, aum156) {
      a6v35m === void 0x0 && (a6v35m = ![]), aum156 === void 0x0 && (aum156 = ![]);if (zey['_inited']) return;zey['window'] = window;if (zey['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zey['_inited'] = !![], zey['isZiYu'] = aum156, zey['isPosMsgYu'] = a6v35m, zey['EnvConfig'] = {}, !zey['isZiYu'] && (oj7f8['setNativeFileDir']('/layaairGame'), oj7f8['existDir'](oj7f8['fileNativeDir'], qpnig$['create'](zey, zey['onMkdirCallBack']))), zey['window']['focus'] = function () {}, mdu51t['getUrlPath'] = function () {}, zey['window']['logtime'] = function (fhwo) {}, zey['window']['alertTimeLog'] = function (hwj4d) {}, zey['window']['resetShareInfo'] = function () {}, zey['window']['CanvasRenderingContext2D'] = function () {}, zey['window']['CanvasRenderingContext2D']['prototype'] = zey['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zey['window']['document']['body']['appendChild'] = function () {}, zey['EnvConfig']['pixelRatioInt'] = 0x0, d5a1['getPixelRatio'] = zey['pixelRatio'], zey['_preCreateElement'] = c98ks['createElement'], c98ks['createElement'] = zey['createElement'], d5a1['createShaderCondition'] = zey['createShaderCondition'], q$gni2['parseXMLFromString'] = zey['parseXMLFromString'], j_fh['_createInputElement'] = ojhf['_createInputElement'], zey['EnvConfig']['load'] = ma15d['prototype']['load'], ma15d['prototype']['load'] = m1udtw['prototype']['load'], zey['isZiYu'] && a6v35m && wx['onMessage'](function (v6y03) {
        v6y03['isLoad'] && (oj7f8['ziyuFileData'][v6y03['url']] = v6y03['data']);
      });
    }, zey['onMkdirCallBack'] = function (n92k$, i2$kng) {
      if (!n92k$) oj7f8['filesListObj'] = JSON['parse'](i2$kng['data']);
    }, zey['pixelRatio'] = function () {
      if (!zey['EnvConfig']['pixelRatioInt']) try {
        var zeyr0 = wx['getSystemInfoSync']();return zey['EnvConfig']['pixelRatioInt'] = zeyr0['pixelRatio'], zeyr0 = zeyr0, zeyr0['pixelRatio'];
      } catch (gi2) {}return zey['EnvConfig']['pixelRatioInt'];
    }, zey['createElement'] = function (qg2i$n) {
      if (qg2i$n == 'canvas') {
        var h4fwjo;return zey['idx'] == 0x1 ? zey['isZiYu'] ? (h4fwjo = sharedCanvas, h4fwjo['style'] = {}) : h4fwjo = window['canvas'] : h4fwjo = window['wx']['createCanvas'](), zey['idx']++, h4fwjo;
      } else {
        if (qg2i$n == 'textarea' || qg2i$n == 'input') return zey['onCreateInput'](qg2i$n);else {
          if (qg2i$n == 'div') {
            var fjo_4h = zey['_preCreateElement'](qg2i$n);return fjo_4h['contains'] = function (dwth4j) {
              return null;
            }, fjo_4h['removeChild'] = function (s87_cl) {}, fjo_4h;
          } else return zey['_preCreateElement'](qg2i$n);
        }
      }
    }, zey['onCreateInput'] = function (q$ni2g) {
      var k$n9 = zey['_preCreateElement'](q$ni2g);return k$n9['focus'] = ojhf['wxinputFocus'], k$n9['blur'] = ojhf['wxinputblur'], k$n9['style'] = {}, k$n9['value'] = 0x0, k$n9['parentElement'] = {}, k$n9['placeholder'] = {}, k$n9['type'] = {}, k$n9['setColor'] = function (d51t) {}, k$n9['setType'] = function (lo78_f) {}, k$n9['setFontFace'] = function (_lfs78) {}, k$n9['addEventListener'] = function ($9gn) {}, k$n9['contains'] = function (cn9$k2) {
        return null;
      }, k$n9['removeChild'] = function (y0x) {}, k$n9;
    }, zey['createShaderCondition'] = function (n2giq$) {
      var s_7l8f = this,
          ho_7j = function () {
        var cs78_l = n2giq$;return s_7l8f[n2giq$['replace']('this.', '')];
      };return ho_7j;
    }, zey['EnvConfig'] = null, zey['window'] = null, zey['_preCreateElement'] = null, zey['_inited'] = ![], zey['wxRequest'] = null, zey['systemInfo'] = null, zey['version'] = '0.0.1', zey['isZiYu'] = ![], zey['isPosMsgYu'] = ![], zey['parseXMLFromString'] = function (c9$nk) {
      var $iq2g, r0v;c9$nk = c9$nk['replace'](/>\s+</g, '><');try {
        $iq2g = new window['Parser']['DOMParser']()['parseFromString'](c9$nk, 'text/xml');
      } catch (lc9ks2) {
        throw '需要引入xml解析库文件';
      }return $iq2g;
    }, zey['idx'] = 0x1, zey;
  }(),
      wumd1t = function () {
    function oh_7j() {}g2ik(oh_7j, 'laya.wx.mini.MiniImage');var jwdh4 = oh_7j['prototype'];return jwdh4['_loadImage'] = function (lof8_7) {
      var a6m5v3 = this,
          cls9k2 = ![];lof8_7['indexOf']('layaNativeDir/') == -0x1 && (cls9k2 = !![], lof8_7 = fo7_h['formatURL'](lof8_7));if (!oj7f8['getFileInfo'](lof8_7)) {
        if (lof8_7['indexOf']('http://') != -0x1 || lof8_7['indexOf']('https://') != -0x1) oj7f8['downImg'](lof8_7, new qpnig$(oh_7j, oh_7j['onDownImgCallBack'], [lof8_7, a6m5v3]), lof8_7);else oh_7j['onCreateImage'](lof8_7, a6m5v3, !![]);
      } else oh_7j['onCreateImage'](lof8_7, a6m5v3, !cls9k2);
    }, oh_7j['onDownImgCallBack'] = function (fj_7o, s29nck, td41wh) {
      if (!td41wh) oh_7j['onCreateImage'](fj_7o, s29nck);else s29nck['onError'](null);
    }, oh_7j['onCreateImage'] = function (ofh4w, _87cs, mtd5u) {
      mtd5u === void 0x0 && (mtd5u = ![]);var a3m6;if (!mtd5u) {
        var n$9c = oj7f8['getFileInfo'](ofh4w),
            jwdt = n$9c['md5'];a3m6 = oj7f8['getFileNativePath'](jwdt);
      } else a3m6 = ofh4w;if (_87cs['imgCache'] == null) _87cs['imgCache'] = {};var giq2$;function r63v0y() {
        giq2$['onload'] = null, giq2$['onerror'] = null, delete _87cs['imgCache'][ofh4w];
      };var dwm1 = function () {
        r63v0y(), _87cs['onLoaded'](giq2$);
      },
          mt5u1d = function () {
        r63v0y(), _87cs['event']('error', 'Load image failed');
      };_87cs['_type'] == 'nativeimage' ? (giq2$ = new c98ks['window']['Image'](), giq2$['crossOrigin'] = '', giq2$['onload'] = dwm1, giq2$['onerror'] = mt5u1d, giq2$['src'] = a3m6, _87cs['imgCache'][ofh4w] = giq2$) : new y0zerx['create'](a3m6, { 'onload': dwm1, 'onerror': mt5u1d, 'onCreate': function (av53m6) {
          giq2$ = av53m6, _87cs['imgCache'][ofh4w] = av53m6;
        } });
    }, oh_7j;
  }(),
      ojhf = function () {
    function gi$2kn() {}return g2ik(gi$2kn, 'laya.wx.mini.MiniInput'), gi$2kn['_createInputElement'] = function () {
      j_fh['_initInput'](j_fh['area'] = c98ks['createElement']('textarea')), j_fh['_initInput'](j_fh['input'] = c98ks['createElement']('input')), j_fh['inputContainer'] = c98ks['createElement']('div'), j_fh['inputContainer']['style']['position'] = 'absolute', j_fh['inputContainer']['style']['zIndex'] = 0x186a0, c98ks['container']['appendChild'](j_fh['inputContainer']), j_fh['inputContainer']['setPos'] = function (_7ofhj, of_h7) {
        j_fh['inputContainer']['style']['left'] = _7ofhj + 'px', j_fh['inputContainer']['style']['top'] = of_h7 + 'px';
      }, mdu51t['stage']['on']('resize', null, gi$2kn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (m5va6) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gki$2n['_soundClass'] = d4htjw, gki$2n['_musicClass'] = d4htjw;
    }, gi$2kn['_onStageResize'] = function () {
      var of7l8 = mdu51t['stage']['_canvasTransform']['identity']();of7l8['scale'](c98ks['width'] / i2gn$q['canvas']['width'] / d5a1['getPixelRatio'](), c98ks['height'] / i2gn$q['canvas']['height'] / d5a1['getPixelRatio']());
    }, gi$2kn['wxinputFocus'] = function (qg2n) {
      var y0rex = j_fh['inputElement']['target'];if (y0rex && !y0rex['editable']) return;gi2k$['window']['wx']['offKeyboardConfirm'](), gi2k$['window']['wx']['offKeyboardInput'](), gi2k$['window']['wx']['showKeyboard']({ 'defaultValue': y0rex['text'], 'maxLength': y0rex['maxChars'], 'multiple': y0rex['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (kn9cs2) {}, 'fail': function (l9sk) {} }), gi2k$['window']['wx']['onKeyboardConfirm'](function ($q2n) {
        var ry3v06 = $q2n ? $q2n['value'] : '';y0rex['text'] = ry3v06, y0rex['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gi2k$['window']['wx']['onKeyboardInput'](function (flo7_8) {
        var qigpn = flo7_8 ? flo7_8['value'] : '';if (!y0rex['multiline']) {
          if (qigpn['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }y0rex['text'] = qigpn, y0rex['event']('input');
      });
    }, gi$2kn['inputEnter'] = function () {
      j_fh['inputElement']['target']['focus'] = ![];
    }, gi$2kn['wxinputblur'] = function () {
      gi$2kn['hideKeyboard']();
    }, gi$2kn['hideKeyboard'] = function () {
      gi2k$['window']['wx']['offKeyboardConfirm'](), gi2k$['window']['wx']['offKeyboardInput'](), gi2k$['window']['wx']['hideKeyboard']({ 'success': function (a5v63y) {
          console['log']('隐藏键盘');
        }, 'fail': function (dt1wh4) {
          console['log']('隐藏键盘出错:' + (dt1wh4 ? dt1wh4['errMsg'] : ''));
        } });
    }, gi$2kn;
  }(),
      m1udtw = function () {
    function h7j_fo() {}g2ik(h7j_fo, 'laya.wx.mini.MiniLoader');var hojtw = h7j_fo['prototype'];return hojtw['load'] = function (vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v) {
      ma5d === void 0x0 && (ma5d = !![]), a0y36v === void 0x0 && (a0y36v = ![]);var a5vy63 = this;a5vy63['_url'] = vzy0xr;if (vzy0xr['indexOf']('data:image') === 0x0) a5vy63['_type'] = o4fwjh = 'image';else a5vy63['_type'] = o4fwjh || (o4fwjh = a5vy63['getTypeFromUrl'](vzy0xr));a5vy63['_cache'] = ma5d, a5vy63['_data'] = null;var fjw = 'ascii';if (vzy0xr['indexOf']('.fnt') != -0x1) fjw = 'utf8';else o4fwjh == 'arraybuffer' && (fjw = '');;var c9$kn = q$gni2['getFileExtension'](vzy0xr);if (h7j_fo['_fileTypeArr']['indexOf'](c9$kn) != -0x1) gi2k$['EnvConfig']['load']['call'](this, vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v);else {
        if (!oj7f8['getFileInfo'](vzy0xr)) {
          if (vzy0xr['indexOf']('layaNativeDir/') != -0x1) {
            if (gi2k$['isZiYu']) {
              var zv30 = oj7f8['ziyuFileData'][vzy0xr];a5vy63['onLoaded'](zv30);return;
            } else {
              cosnole['log']('read read'), oj7f8['read'](vzy0xr, fjw, new qpnig$(h7j_fo, h7j_fo['onReadNativeCallBack'], [fjw, vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v, a5vy63]));return;
            }
          }if (fo7_h['rootPath'] == '') var ig2nk = vzy0xr;else ig2nk = vzy0xr['split'](fo7_h['rootPath'])[0x0];vzy0xr['indexOf']('http://') != -0x1 || vzy0xr['indexOf']('https://') != -0x1 ? gi2k$['EnvConfig']['load']['call'](a5vy63, vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v) : oj7f8['readFile'](ig2nk, fjw, new qpnig$(h7j_fo, h7j_fo['onReadNativeCallBack'], [fjw, vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v, a5vy63]), vzy0xr);
        } else gi2k$['EnvConfig']['load']['call'](this, vzy0xr, o4fwjh, ma5d, wt14ud, a0y36v);
      }
    }, hojtw['resMgrLoad'] = function (oj8_, g29, gikn$2, mv3a, nq$p, l9s78c, w4fhoj) {
      gikn$2 === void 0x0 && (gikn$2 = 0x0), mv3a === void 0x0 && (mv3a = ![]), nq$p === void 0x0 && (nq$p = ![]), l9s78c === void 0x0 && (l9s78c = 0x0), w4fhoj === void 0x0 && (w4fhoj = 0x3), oj8_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', oj8_), gi2k$['EnvConfig']['resMgrLoad'](oj8_, (d4hwt, v03a6, yav53) => {
        h7j_fo['prototype']['resMgrLoadCallBack'](d4hwt, v03a6, yav53, g29);
      }, gikn$2, mv3a, nq$p, l9s78c, w4fhoj);
    }, hojtw['resMgrLoadCallBack'] = function (t4owj, a6m5v, _f4h, jh4f_o) {
      console['log']('buff:::', t4owj, _f4h, oj7f8['fileNativeDir'] + '///' + oj7f8['fileListName']), jh4f_o(t4owj, a6m5v, _f4h);
    }, hojtw['clearRes'] = function (k2$9g, rvx) {
      rvx === void 0x0 && (rvx = ![]);var v6am3 = this;v6am3['clearRes'](k2$9g, rvx);var tum5d1 = oj7f8['getFileInfo'](k2$9g);if (tum5d1 && (k2$9g['indexOf']('http://') != -0x1 || k2$9g['indexOf']('https://') != -0x1)) {
        var htj4ow = tum5d1['md5'],
            d15 = oj7f8['getFileNativePath'](htj4ow);oj7f8['remove'](d15);
      }
    }, h7j_fo['onReadNativeCallBack'] = function (ma5u1, h_jof, _8lfo, a36v0y, rxzv0y, u5a3m6, w4ojth, djwth, u1t4d) {
      a36v0y === void 0x0 && (a36v0y = !![]), u5a3m6 === void 0x0 && (u5a3m6 = ![]), djwth === void 0x0 && (djwth = 0x0);if (!djwth) {
        var l98sk;if (_8lfo == 'json' || _8lfo == 'atlas') l98sk = gi2k$['getJson'](u1t4d['data']);else _8lfo == 'xml' ? l98sk = q$gni2['parseXMLFromString'](u1t4d['data']) : l98sk = u1t4d['data'];w4ojth['onLoaded'](l98sk), !gi2k$['isZiYu'] && gi2k$['isPosMsgYu'] && _8lfo != 'arraybuffer' && wx['postMessage']({ 'url': h_jof, 'data': l98sk, 'isLoad': !![] });
      } else djwth == 0x1 && gi2k$['EnvConfig']['load']['call'](w4ojth, h_jof, _8lfo, a36v0y, rxzv0y, u5a3m6);
    }, tm5du1(h7j_fo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), h7j_fo;
  }(),
      oj7f8 = function (vr3y6) {
    function m65ua() {
      m65ua['__super']['call'](this);;
    }return g2ik(m65ua, 'laya.wx.mini.MiniFileMgr', vr3y6), m65ua['isLoadFile'] = function (m356) {
      return m65ua['_fileTypeArr']['indexOf'](m356) != -0x1 ? !![] : ![];
    }, m65ua['getFileInfo'] = function (aum16) {
      var u1dwtm = aum16['split']('?')[0x0],
          twd1h4 = m65ua['filesListObj'][u1dwtm];if (twd1h4 == null) return null;else return twd1h4;return null;
    }, m65ua['onFileUpdate'] = function (jf4ho_, ik) {
      var s9nc2 = jf4ho_['split']('/'),
          wj4oth = s9nc2[s9nc2['length'] - 0x1],
          tdw1h4 = m65ua['getFileInfo'](ik);if (tdw1h4 == null) m65ua['onSaveFile'](ik, wj4oth);else {
        if (tdw1h4['readyUrl'] != ik) m65ua['remove'](wj4oth, ik);
      }
    }, m65ua['exits'] = function (sc78l9, p$gqin) {
      var n$qi2 = m65ua['getFileNativePath'](sc78l9);m65ua['fs']['getFileInfo']({ 'filePath': n$qi2, 'success': function (vx0yr) {
          p$gqin != null && p$gqin['runWith']([0x0, vx0yr]);
        }, 'fail': function (d4htwj) {
          p$gqin != null && p$gqin['runWith']([0x1, d4htwj]);
        } });
    }, m65ua['read'] = function (v56ay, mut5, y06v3r, w4dt1) {
      mut5 === void 0x0 && (mut5 = 'ascill'), w4dt1 === void 0x0 && (w4dt1 = '');var mua165;w4dt1 != '' ? mua165 = m65ua['getFileNativePath'](v56ay) : mua165 = v56ay, m65ua['fs']['readFile']({ 'filePath': mua165, 'encoding': mut5, 'success': function (zyrx0e) {
          y06v3r != null && y06v3r['runWith']([0x0, zyrx0e]);
        }, 'fail': function (skl2c) {
          if (skl2c && w4dt1 != '') m65ua['down'](w4dt1, mut5, y06v3r, w4dt1);else y06v3r != null && y06v3r['runWith']([0x1]);
        } });
    }, m65ua['readNativeFile'] = function (z0yre, jo78_) {
      m65ua['fs']['readFile']({ 'filePath': z0yre, 'encoding': '', 'success': function ($g2qin) {
          jo78_ != null && jo78_['runWith']([0x0]);
        }, 'fail': function (y0rvz3) {
          jo78_ != null && jo78_['runWith']([0x1]);
        } });
    }, m65ua['down'] = function (ginpq$, $c9k2n, jwdt4h, ma165u) {
      $c9k2n === void 0x0 && ($c9k2n = 'ascill'), ma165u === void 0x0 && (ma165u = '');var vm365a = m65ua['getFileNativePath'](ma165u),
          cs2l9 = m65ua['wxdown']({ 'url': ginpq$, 'filePath': vm365a, 'success': function (_87lf) {
          if (_87lf['statusCode'] === 0xc8) m65ua['readFile'](_87lf['filePath'], $c9k2n, jwdt4h, ma165u);
        }, 'fail': function (ayv3) {
          jwdt4h != null && jwdt4h['runWith']([0x1, ayv3]);
        } });cs2l9['onProgressUpdate'](function (twmd) {
        jwdt4h != null && jwdt4h['runWith']([0x2, twmd['progress']]);
      });
    }, m65ua['readFile'] = function (yez0r, c9k8l, l2ck9, l9kc) {
      c9k8l === void 0x0 && (c9k8l = 'ascill'), l9kc === void 0x0 && (l9kc = ''), m65ua['fs']['readFile']({ 'filePath': yez0r, 'encoding': c9k8l, 'success': function (adu5m1) {
          if (yez0r['indexOf']('http://') != -0x1 || yez0r['indexOf']('https://') != -0x1) m65ua['onFileUpdate'](yez0r, l9kc);l2ck9 != null && l2ck9['runWith']([0x0, adu5m1]);
        }, 'fail': function (x0) {
          if (x0) l2ck9 != null && l2ck9['runWith']([0x1, x0]);
        } });
    }, m65ua['downImg'] = function (dh41t, vay630, howj) {
      howj === void 0x0 && (howj = '');var _f7oj8 = m65ua['wxdown']({ 'url': dh41t, 'success': function (l78fs) {
          l78fs['statusCode'] === 0xc8 && m65ua['copyFile'](l78fs['tempFilePath'], howj, vay630);
        }, 'fail': function (ht41wd) {
          vay630 != null && vay630['runWith']([0x1, ht41wd]);
        } });
    }, m65ua['copyFile'] = function (k92ls, t4jwo, jwto4h) {
      var udm1tw = k92ls['split']('/'),
          hdj4tw = udm1tw[udm1tw['length'] - 0x1],
          nck$2 = t4jwo['split']('?')[0x0],
          nk9$c = m65ua['getFileInfo'](t4jwo),
          in$g2 = m65ua['getFileNativePath'](hdj4tw);m65ua['fs']['copyFile']({ 'srcPath': k92ls, 'destPath': in$g2, 'success': function (uw4td) {
          if (!nk9$c) m65ua['onSaveFile'](t4jwo, hdj4tw), jwto4h != null && jwto4h['runWith']([0x0]);else {
            if (nk9$c['readyUrl'] != t4jwo) m65ua['remove'](hdj4tw, t4jwo, jwto4h);
          }
        }, 'fail': function (ofj87_) {
          jwto4h != null && jwto4h['runWith']([0x1, ofj87_]);
        } });
    }, m65ua['getFileNativePath'] = function (y0rxze) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y0rxze;
    }, m65ua['remove'] = function (y0av63, jo8_f, l_f87o) {
      jo8_f === void 0x0 && (jo8_f = '');var kn2sc9 = m65ua['getFileInfo'](jo8_f),
          wd4h1 = m65ua['getFileNativePath'](kn2sc9['md5']);mdu51t['loader']['clearRes'](kn2sc9['readyUrl']), m65ua['fs']['unlink']({ 'filePath': wd4h1, 'success': function (k$ng92) {
          if (jo8_f != '') m65ua['onSaveFile'](jo8_f, y0av63);l_f87o != null && l_f87o['runWith']([0x0]);
        }, 'fail': function (fjho7_) {} });
    }, m65ua['onSaveFile'] = function (tho, f_7joh) {
      var n2$g9 = tho['split']('?')[0x0];m65ua['filesListObj'][n2$g9] = { 'md5': f_7joh, 'readyUrl': tho }, m65ua['fs']['writeFile']({ 'filePath': m65ua['fileNativeDir'] + '/' + m65ua['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](m65ua['filesListObj']), 'success': function (w1ht4d) {
          console['log']('写入测试测试成功：', w1ht4d);
        }, 'fail': function (td1w4u) {
          console['log']('写入测试测试失败：', td1w4u);
        } });
    }, m65ua['existDir'] = function (_j4fo, n2kcs9) {
      m65ua['fs']['mkdir']({ 'dirPath': _j4fo, 'success': function (yzrex) {
          n2kcs9 != null && n2kcs9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (vry3) {
          if (vry3['errMsg']['indexOf']('file already exists') != -0x1) m65ua['readSync'](m65ua['fileListName'], 'utf8', n2kcs9);else n2kcs9 != null && n2kcs9['runWith']([0x1, vry3]);
        } });
    }, m65ua['readSync'] = function (mw1dut, j7f8o_, cnk2$9, $k9c2n) {
      j7f8o_ === void 0x0 && (j7f8o_ = 'ascill'), $k9c2n === void 0x0 && ($k9c2n = '');var n92c$ = m65ua['getFileNativePath'](mw1dut),
          towh;try {
        towh = m65ua['fs']['readFileSync'](n92c$), cnk2$9 != null && cnk2$9['runWith']([0x0, { 'data': towh }]);
      } catch (y356av) {
        cnk2$9 != null && cnk2$9['runWith']([0x1]);
      }
    }, m65ua['readCache'] = function () {}, m65ua['writeCache'] = function (g29$) {
      var owj4 = readyUrl['split']('?')[0x0];m65ua['filesListObj'][owj4] = { 'md5': md5Name, 'readyUrl': readyUrl }, m65ua['fs']['writeFile']({ 'filePath': m65ua['fileNativeDir'] + '/' + m65ua['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](m65ua['filesListObj']), 'success': function (t4duw1) {}, 'fail': function (tu41) {} });
    }, m65ua['setNativeFileDir'] = function (ni$gpq) {
      m65ua['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ni$gpq;
    }, m65ua['filesListObj'] = {}, m65ua['fileNativeDir'] = null, m65ua['fileListName'] = 'layaairfiles.txt', m65ua['ziyuFileData'] = {}, tm5du1(m65ua, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), m65ua;
  }(hofwj),
      d4htjw = function (l98skc) {
    function a563mv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], a563mv['__super']['call'](this), this['_sound'] = a563mv['_createSound']();
    }g2ik(a563mv, 'laya.wx.mini.MiniSound', l98skc);var a1d5mu = a563mv['prototype'];return a1d5mu['load'] = function (xry0vz) {
      var jo_7f = this;xry0vz = fo7_h['formatURL'](xry0vz), this['url'] = xry0vz;if (a563mv['_audioCache'][xry0vz]) {
        this['event']('complete');return;
      }function u51td() {
        if (a563mv['_null'] != undefined) jo_7f['_sound']['onCanplay'](a563mv['_null']), jo_7f['_sound']['onError'](a563mv['_null']);else try {
          jo_7f['_sound']['onCanplay'](null), jo_7f['_sound']['onError'](null), a563mv['_null'] = null;
        } catch (t5m1ud) {
          console['warn']('[wxmini] _clearSound:' + t5m1ud), jo_7f['_sound']['onCanplay'](h4wof), jo_7f['_sound']['onError'](h4wof), a563mv['_null'] = h4wof;
        }
      }function oh4fw() {
        u51td(), dm5ua['loaded'] = !![], dm5ua['event']('complete'), a563mv['_audioCache'][dm5ua['url']] = dm5ua;
      }function hf_j7o(v60a) {
        console['error']('errCode=' + v60a['errCode'] + '  errMsg=' + v60a['errMsg']), u51td(), dm5ua['event']('error');
      }function h4wof() {}this['_sound']['onCanplay'](oh4fw), this['_sound']['onError'](hf_j7o), this['_sound']['src'] = xry0vz;var dm5ua = this;
    }, a1d5mu['play'] = function (_l8o7f, k9n) {
      _l8o7f === void 0x0 && (_l8o7f = 0x0), k9n === void 0x0 && (k9n = 0x0);var ua5m61;if (this['url'] == gki$2n['_tMusic']) {
        if (!a563mv['_musicAudio']) a563mv['_musicAudio'] = a563mv['_createSound']();ua5m61 = a563mv['_musicAudio'];
      } else ua5m61 = a563mv['_createSound']();ua5m61['src'] = this['url'];var hw41td = new y603a(ua5m61);return hw41td['url'] = this['url'], hw41td['loops'] = k9n, hw41td['startTime'] = _l8o7f, hw41td['play'](), gki$2n['addChannel'](hw41td), hw41td;
    }, a1d5mu['dispose'] = function () {
      var j_o78f = a563mv['_audioCache'][this['url']];j_o78f && (j_o78f['src'] = '', delete a563mv['_audioCache'][this['url']]);
    }, dmt1wu(0x0, a1d5mu, 'duration', function () {
      return this['_sound']['duration'];
    }), a563mv['_createSound'] = function () {
      return a563mv['_id']++, gi2k$['window']['wx']['createInnerAudioContext']();
    }, a563mv['_musicAudio'] = null, a563mv['_id'] = 0x0, a563mv['_audioCache'] = {}, a563mv['_null'] = undefined, a563mv;
  }(hofwj),
      y603a = function (vzxyr0) {
    function skl8c(wh4d) {
      this['_audio'] = null, this['_onEnd'] = null, skl8c['__super']['call'](this), this['_audio'] = wh4d, this['_onEnd'] = q$gni2['bind'](this['__onEnd'], this), wh4d['onEnded'](this['_onEnd']);
    }g2ik(skl8c, 'laya.wx.mini.MiniSoundChannel', vzxyr0);var h_4j = skl8c['prototype'];return h_4j['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (mdu51t['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, h_4j['__onNull'] = function () {}, h_4j['play'] = function () {
      this['isStopped'] = ![], gki$2n['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, h_4j['stop'] = function () {
      this['isStopped'] = !![], gki$2n['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (skl8c['_null'] != undefined) this['_audio']['onEnded'](skl8c['_null']);else try {
        this['_audio']['onEnded'](null), skl8c['_null'] = null;
      } catch (sl8c) {
        console['warn']('[wxmini] stop:' + sl8c), this['_audio']['onEnded'](q$gni2['bind'](this['__onNull'], this)), skl8c['_null'] = q$gni2['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, h_4j['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, h_4j['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gki$2n['addChannel'](this), this['_audio']['play']();
    }, dmt1wu(0x0, h_4j, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), dmt1wu(0x0, h_4j, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), dmt1wu(0x0, h_4j, 'volume', function () {
      return 0x1;
    }, function (c9$2n) {}), skl8c['_null'] = undefined, skl8c;
  }(ma6u51);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var twohj4 in Laya) {
    var va630y = Laya[twohj4];va630y && va630y['__isclass'] && (exports[twohj4] = va630y);
  }
});