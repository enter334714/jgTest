var a = wx.$y;
(function (window, document, pq$ing) {
  var twd41u = pq$ing['un'],
      sn9c2 = pq$ing['uns'],
      au36m5 = pq$ing['static'],
      v3y0 = pq$ing['class'],
      inqp = pq$ing['getset'],
      ojh = pq$ing['__newvec'],
      dwhjt4 = laya['utils']['Browser'],
      dwt4h1 = laya['events']['Event'],
      n29c$ = laya['events']['EventDispatcher'],
      jdth = laya['resource']['HTMLImage'],
      wu1d = laya['utils']['Handler'],
      oj78_ = laya['display']['Input'],
      wjdh4t = laya['net']['Loader'],
      w1u4 = laya['maths']['Matrix'],
      w4udt = laya['renders']['Render'],
      dut14 = laya['utils']['RunDriver'],
      l_of87 = laya['media']['Sound'],
      x0yzre = laya['media']['SoundChannel'],
      v56a3y = laya['media']['SoundManager'],
      j_fh4 = laya['display']['Stage'],
      dua51 = laya['net']['URL'],
      ipn$g = laya['utils']['Utils'],
      scl879 = function () {
    function tw4joh() {}return v3y0(tw4joh, 'laya.wx.mini.MiniAdpter'), tw4joh['getJson'] = function (fs8_l) {
      return JSON['parse'](fs8_l);
    }, tw4joh['init'] = function (wdjh4t, _j78o) {
      wdjh4t === void 0x0 && (wdjh4t = ![]), _j78o === void 0x0 && (_j78o = ![]);if (tw4joh['_inited']) return;tw4joh['window'] = window;if (tw4joh['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;tw4joh['_inited'] = !![], tw4joh['isZiYu'] = _j78o, tw4joh['isPosMsgYu'] = wdjh4t, tw4joh['EnvConfig'] = {}, !tw4joh['isZiYu'] && (gq2n$i['setNativeFileDir']('/layaairGame'), gq2n$i['existDir'](gq2n$i['fileNativeDir'], wu1d['create'](tw4joh, tw4joh['onMkdirCallBack']))), tw4joh['window']['focus'] = function () {}, pq$ing['getUrlPath'] = function () {}, tw4joh['window']['logtime'] = function (qp$gni) {}, tw4joh['window']['alertTimeLog'] = function (y3zv) {}, tw4joh['window']['resetShareInfo'] = function () {}, tw4joh['window']['CanvasRenderingContext2D'] = function () {}, tw4joh['window']['CanvasRenderingContext2D']['prototype'] = tw4joh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tw4joh['window']['document']['body']['appendChild'] = function () {}, tw4joh['EnvConfig']['pixelRatioInt'] = 0x0, dut14['getPixelRatio'] = tw4joh['pixelRatio'], tw4joh['_preCreateElement'] = dwhjt4['createElement'], dwhjt4['createElement'] = tw4joh['createElement'], dut14['createShaderCondition'] = tw4joh['createShaderCondition'], ipn$g['parseXMLFromString'] = tw4joh['parseXMLFromString'], oj78_['_createInputElement'] = _8l7fs['_createInputElement'], tw4joh['EnvConfig']['load'] = wjdh4t['prototype']['load'], wjdh4t['prototype']['load'] = zyrvx['prototype']['load'], tw4joh['isZiYu'] && wdjh4t && wx['onMessage'](function (c9s7l) {
        c9s7l['isLoad'] && (gq2n$i['ziyuFileData'][c9s7l['url']] = c9s7l['data']);
      });
    }, tw4joh['onMkdirCallBack'] = function (c2$9nk, d1mu5t) {
      if (!c2$9nk) gq2n$i['filesListObj'] = JSON['parse'](d1mu5t['data']);
    }, tw4joh['pixelRatio'] = function () {
      if (!tw4joh['EnvConfig']['pixelRatioInt']) try {
        var tohj4 = wx['getSystemInfoSync']();return tw4joh['EnvConfig']['pixelRatioInt'] = tohj4['pixelRatio'], tohj4 = tohj4, tohj4['pixelRatio'];
      } catch (sl879c) {}return tw4joh['EnvConfig']['pixelRatioInt'];
    }, tw4joh['createElement'] = function ($g9k) {
      if ($g9k == 'canvas') {
        var rzex0y;return tw4joh['idx'] == 0x1 ? tw4joh['isZiYu'] ? (rzex0y = sharedCanvas, rzex0y['style'] = {}) : rzex0y = window['canvas'] : rzex0y = window['wx']['createCanvas'](), tw4joh['idx']++, rzex0y;
      } else {
        if ($g9k == 'textarea' || $g9k == 'input') return tw4joh['onCreateInput']($g9k);else {
          if ($g9k == 'div') {
            var l9ck8s = tw4joh['_preCreateElement']($g9k);return l9ck8s['contains'] = function (_hj4o) {
              return null;
            }, l9ck8s['removeChild'] = function (ry0) {}, l9ck8s;
          } else return tw4joh['_preCreateElement']($g9k);
        }
      }
    }, tw4joh['onCreateInput'] = function (f8jo_7) {
      var vrz30y = tw4joh['_preCreateElement'](f8jo_7);return vrz30y['focus'] = _8l7fs['wxinputFocus'], vrz30y['blur'] = _8l7fs['wxinputblur'], vrz30y['style'] = {}, vrz30y['value'] = 0x0, vrz30y['parentElement'] = {}, vrz30y['placeholder'] = {}, vrz30y['type'] = {}, vrz30y['setColor'] = function (kcn92s) {}, vrz30y['setType'] = function (ojwt4h) {}, vrz30y['setFontFace'] = function (kng2) {}, vrz30y['addEventListener'] = function (y0vzr3) {}, vrz30y['contains'] = function (mud51t) {
        return null;
      }, vrz30y['removeChild'] = function (ol78) {}, vrz30y;
    }, tw4joh['createShaderCondition'] = function (_7hfo) {
      var q2i$gn = this,
          qngi = function () {
        var ojt4w = _7hfo;return q2i$gn[_7hfo['replace']('this.', '')];
      };return qngi;
    }, tw4joh['EnvConfig'] = null, tw4joh['window'] = null, tw4joh['_preCreateElement'] = null, tw4joh['_inited'] = ![], tw4joh['wxRequest'] = null, tw4joh['systemInfo'] = null, tw4joh['version'] = '0.0.1', tw4joh['isZiYu'] = ![], tw4joh['isPosMsgYu'] = ![], tw4joh['parseXMLFromString'] = function (va3y06) {
      var hdtw4j, x0r;va3y06 = va3y06['replace'](/>\s+</g, '><');try {
        hdtw4j = new window['Parser']['DOMParser']()['parseFromString'](va3y06, 'text/xml');
      } catch (wu14) {
        throw '需要引入xml解析库文件';
      }return hdtw4j;
    }, tw4joh['idx'] = 0x1, tw4joh;
  }(),
      c9sl87 = function () {
    function h41d() {}v3y0(h41d, 'laya.wx.mini.MiniImage');var vy306a = h41d['prototype'];return vy306a['_loadImage'] = function (n$92ck) {
      var yxz0 = this,
          tdu5m1 = ![];n$92ck['indexOf']('layaNativeDir/') == -0x1 && (tdu5m1 = !![], n$92ck = dua51['formatURL'](n$92ck));if (!gq2n$i['getFileInfo'](n$92ck)) {
        if (n$92ck['indexOf']('http://') != -0x1 || n$92ck['indexOf']('https://') != -0x1) gq2n$i['downImg'](n$92ck, new wu1d(h41d, h41d['onDownImgCallBack'], [n$92ck, yxz0]), n$92ck);else h41d['onCreateImage'](n$92ck, yxz0, !![]);
      } else h41d['onCreateImage'](n$92ck, yxz0, !tdu5m1);
    }, h41d['onDownImgCallBack'] = function (u1a5dm, m56ua1, s7f_l) {
      if (!s7f_l) h41d['onCreateImage'](u1a5dm, m56ua1);else m56ua1['onError'](null);
    }, h41d['onCreateImage'] = function (dw1tu, mau61, k8sl9c) {
      k8sl9c === void 0x0 && (k8sl9c = ![]);var yr3v06;if (!k8sl9c) {
        var duma15 = gq2n$i['getFileInfo'](dw1tu),
            twu1 = duma15['md5'];yr3v06 = gq2n$i['getFileNativePath'](twu1);
      } else yr3v06 = dw1tu;if (mau61['imgCache'] == null) mau61['imgCache'] = {};var $k9ng2;function $qingp() {
        $k9ng2['onload'] = null, $k9ng2['onerror'] = null, delete mau61['imgCache'][dw1tu];
      };var wd14ht = function () {
        $qingp(), mau61['onLoaded']($k9ng2);
      },
          f7l8s_ = function () {
        $qingp(), mau61['event']('error', 'Load image failed');
      };mau61['_type'] == 'nativeimage' ? ($k9ng2 = new dwhjt4['window']['Image'](), $k9ng2['crossOrigin'] = '', $k9ng2['onload'] = wd14ht, $k9ng2['onerror'] = f7l8s_, $k9ng2['src'] = yr3v06, mau61['imgCache'][dw1tu] = $k9ng2) : new jdth['create'](yr3v06, { 'onload': wd14ht, 'onerror': f7l8s_, 'onCreate': function (dh1t4) {
          $k9ng2 = dh1t4, mau61['imgCache'][dw1tu] = dh1t4;
        } });
    }, h41d;
  }(),
      _8l7fs = function () {
    function htwo4() {}return v3y0(htwo4, 'laya.wx.mini.MiniInput'), htwo4['_createInputElement'] = function () {
      oj78_['_initInput'](oj78_['area'] = dwhjt4['createElement']('textarea')), oj78_['_initInput'](oj78_['input'] = dwhjt4['createElement']('input')), oj78_['inputContainer'] = dwhjt4['createElement']('div'), oj78_['inputContainer']['style']['position'] = 'absolute', oj78_['inputContainer']['style']['zIndex'] = 0x186a0, dwhjt4['container']['appendChild'](oj78_['inputContainer']), oj78_['inputContainer']['setPos'] = function (o7j8f, $iq2gn) {
        oj78_['inputContainer']['style']['left'] = o7j8f + 'px', oj78_['inputContainer']['style']['top'] = $iq2gn + 'px';
      }, pq$ing['stage']['on']('resize', null, htwo4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($giq2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v56a3y['_soundClass'] = n$gi, v56a3y['_musicClass'] = n$gi;
    }, htwo4['_onStageResize'] = function () {
      var r0zyex = pq$ing['stage']['_canvasTransform']['identity']();r0zyex['scale'](dwhjt4['width'] / w4udt['canvas']['width'] / dut14['getPixelRatio'](), dwhjt4['height'] / w4udt['canvas']['height'] / dut14['getPixelRatio']());
    }, htwo4['wxinputFocus'] = function ($i2nqg) {
      var s_8c7 = oj78_['inputElement']['target'];if (s_8c7 && !s_8c7['editable']) return;scl879['window']['wx']['offKeyboardConfirm'](), scl879['window']['wx']['offKeyboardInput'](), scl879['window']['wx']['showKeyboard']({ 'defaultValue': s_8c7['text'], 'maxLength': s_8c7['maxChars'], 'multiple': s_8c7['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (_jof7h) {}, 'fail': function (q$gip) {} }), scl879['window']['wx']['onKeyboardConfirm'](function (k9c2s) {
        var y03v = k9c2s ? k9c2s['value'] : '';s_8c7['text'] = y03v, s_8c7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), scl879['window']['wx']['onKeyboardInput'](function (v3y6r0) {
        var n2sk = v3y6r0 ? v3y6r0['value'] : '';if (!s_8c7['multiline']) {
          if (n2sk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }s_8c7['text'] = n2sk, s_8c7['event']('input');
      });
    }, htwo4['inputEnter'] = function () {
      oj78_['inputElement']['target']['focus'] = ![];
    }, htwo4['wxinputblur'] = function () {
      htwo4['hideKeyboard']();
    }, htwo4['hideKeyboard'] = function () {
      scl879['window']['wx']['offKeyboardConfirm'](), scl879['window']['wx']['offKeyboardInput'](), scl879['window']['wx']['hideKeyboard']({ 'success': function (twdj) {
          console['log']('隐藏键盘');
        }, 'fail': function (d41wu) {
          console['log']('隐藏键盘出错:' + (d41wu ? d41wu['errMsg'] : ''));
        } });
    }, htwo4;
  }(),
      zyrvx = function () {
    function f4woh() {}v3y0(f4woh, 'laya.wx.mini.MiniLoader');var a3u6m5 = f4woh['prototype'];return a3u6m5['load'] = function (u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx) {
      gip$nq === void 0x0 && (gip$nq = !![]), y0zrvx === void 0x0 && (y0zrvx = ![]);var n$i2gk = this;n$i2gk['_url'] = u1wdtm;if (u1wdtm['indexOf']('data:image') === 0x0) n$i2gk['_type'] = qgn$2i = 'image';else n$i2gk['_type'] = qgn$2i || (qgn$2i = n$i2gk['getTypeFromUrl'](u1wdtm));n$i2gk['_cache'] = gip$nq, n$i2gk['_data'] = null;var lsc = 'ascii';if (u1wdtm['indexOf']('.fnt') != -0x1) lsc = 'utf8';else qgn$2i == 'arraybuffer' && (lsc = '');;var zy0vx = ipn$g['getFileExtension'](u1wdtm);if (f4woh['_fileTypeArr']['indexOf'](zy0vx) != -0x1) scl879['EnvConfig']['load']['call'](this, u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx);else {
        if (!gq2n$i['getFileInfo'](u1wdtm)) {
          if (u1wdtm['indexOf']('layaNativeDir/') != -0x1) {
            if (scl879['isZiYu']) {
              var tm1wd = gq2n$i['ziyuFileData'][u1wdtm];n$i2gk['onLoaded'](tm1wd);return;
            } else {
              cosnole['log']('read read'), gq2n$i['read'](u1wdtm, lsc, new wu1d(f4woh, f4woh['onReadNativeCallBack'], [lsc, u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx, n$i2gk]));return;
            }
          }if (dua51['rootPath'] == '') var _o4f = u1wdtm;else _o4f = u1wdtm['split'](dua51['rootPath'])[0x0];u1wdtm['indexOf']('http://') != -0x1 || u1wdtm['indexOf']('https://') != -0x1 ? scl879['EnvConfig']['load']['call'](n$i2gk, u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx) : gq2n$i['readFile'](_o4f, lsc, new wu1d(f4woh, f4woh['onReadNativeCallBack'], [lsc, u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx, n$i2gk]), u1wdtm);
        } else scl879['EnvConfig']['load']['call'](this, u1wdtm, qgn$2i, gip$nq, d1wumt, y0zrvx);
      }
    }, a3u6m5['resMgrLoad'] = function (_4fjo, ma3v6, vy3a56, jwdh4, u14tw, dw, av35m) {
      vy3a56 === void 0x0 && (vy3a56 = 0x0), jwdh4 === void 0x0 && (jwdh4 = ![]), u14tw === void 0x0 && (u14tw = ![]), dw === void 0x0 && (dw = 0x0), av35m === void 0x0 && (av35m = 0x3), _4fjo['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _4fjo), scl879['EnvConfig']['resMgrLoad'](_4fjo, (g$ikn, g2$niq, l87_o) => {
        f4woh['prototype']['resMgrLoadCallBack'](g$ikn, g2$niq, l87_o, ma3v6);
      }, vy3a56, jwdh4, u14tw, dw, av35m);
    }, a3u6m5['resMgrLoadCallBack'] = function (zvx0y, fl_, uwtd14, nk$c9) {
      console['log']('buff:::', zvx0y, uwtd14, gq2n$i['fileNativeDir'] + '///' + gq2n$i['fileListName']), nk$c9(zvx0y, fl_, uwtd14);
    }, a3u6m5['clearRes'] = function (xrzy0e, twu41) {
      twu41 === void 0x0 && (twu41 = ![]);var d1utw4 = this;d1utw4['clearRes'](xrzy0e, twu41);var d1mu = gq2n$i['getFileInfo'](xrzy0e);if (d1mu && (xrzy0e['indexOf']('http://') != -0x1 || xrzy0e['indexOf']('https://') != -0x1)) {
        var jtdwh4 = d1mu['md5'],
            zryv = gq2n$i['getFileNativePath'](jtdwh4);gq2n$i['remove'](zryv);
      }
    }, f4woh['onReadNativeCallBack'] = function (jo_87, c$kn, ig2n$, i2n$gk, v3r06, j_87o, t4hw1, yz0r, l87fo_) {
      i2n$gk === void 0x0 && (i2n$gk = !![]), j_87o === void 0x0 && (j_87o = ![]), yz0r === void 0x0 && (yz0r = 0x0);if (!yz0r) {
        var s7l_;if (ig2n$ == 'json' || ig2n$ == 'atlas') s7l_ = scl879['getJson'](l87fo_['data']);else ig2n$ == 'xml' ? s7l_ = ipn$g['parseXMLFromString'](l87fo_['data']) : s7l_ = l87fo_['data'];t4hw1['onLoaded'](s7l_), !scl879['isZiYu'] && scl879['isPosMsgYu'] && ig2n$ != 'arraybuffer' && wx['postMessage']({ 'url': c$kn, 'data': s7l_, 'isLoad': !![] });
      } else yz0r == 0x1 && scl879['EnvConfig']['load']['call'](t4hw1, c$kn, ig2n$, i2n$gk, v3r06, j_87o);
    }, au36m5(f4woh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f4woh;
  }(),
      gq2n$i = function (gk9n$) {
    function f4jhwo() {
      f4jhwo['__super']['call'](this);;
    }return v3y0(f4jhwo, 'laya.wx.mini.MiniFileMgr', gk9n$), f4jhwo['isLoadFile'] = function (jhfo7_) {
      return f4jhwo['_fileTypeArr']['indexOf'](jhfo7_) != -0x1 ? !![] : ![];
    }, f4jhwo['getFileInfo'] = function (hdw) {
      var qipgn = hdw['split']('?')[0x0],
          nk$9g = f4jhwo['filesListObj'][qipgn];if (nk$9g == null) return null;else return nk$9g;return null;
    }, f4jhwo['onFileUpdate'] = function (z0exr, f_87) {
      var lf_7s8 = z0exr['split']('/'),
          dau = lf_7s8[lf_7s8['length'] - 0x1],
          c8s7 = f4jhwo['getFileInfo'](f_87);if (c8s7 == null) f4jhwo['onSaveFile'](f_87, dau);else {
        if (c8s7['readyUrl'] != f_87) f4jhwo['remove'](dau, f_87);
      }
    }, f4jhwo['exits'] = function (xrzyv0, fo_8) {
      var fj7oh = f4jhwo['getFileNativePath'](xrzyv0);f4jhwo['fs']['getFileInfo']({ 'filePath': fj7oh, 'success': function (yx0rv) {
          fo_8 != null && fo_8['runWith']([0x0, yx0rv]);
        }, 'fail': function (uw14d) {
          fo_8 != null && fo_8['runWith']([0x1, uw14d]);
        } });
    }, f4jhwo['read'] = function (fhojw, ikn$g, l8_7cs, cs8_l7) {
      ikn$g === void 0x0 && (ikn$g = 'ascill'), cs8_l7 === void 0x0 && (cs8_l7 = '');var $inq2;cs8_l7 != '' ? $inq2 = f4jhwo['getFileNativePath'](fhojw) : $inq2 = fhojw, f4jhwo['fs']['readFile']({ 'filePath': $inq2, 'encoding': ikn$g, 'success': function (rv03y6) {
          l8_7cs != null && l8_7cs['runWith']([0x0, rv03y6]);
        }, 'fail': function (k92n$g) {
          if (k92n$g && cs8_l7 != '') f4jhwo['down'](cs8_l7, ikn$g, l8_7cs, cs8_l7);else l8_7cs != null && l8_7cs['runWith']([0x1]);
        } });
    }, f4jhwo['readNativeFile'] = function (klc9s, l7f_o) {
      f4jhwo['fs']['readFile']({ 'filePath': klc9s, 'encoding': '', 'success': function (lc_8s) {
          l7f_o != null && l7f_o['runWith']([0x0]);
        }, 'fail': function (ig$qn2) {
          l7f_o != null && l7f_o['runWith']([0x1]);
        } });
    }, f4jhwo['down'] = function (owt4, iq$2ng, jfo_8, md15ua) {
      iq$2ng === void 0x0 && (iq$2ng = 'ascill'), md15ua === void 0x0 && (md15ua = '');var xzvy0 = f4jhwo['getFileNativePath'](md15ua),
          vry630 = f4jhwo['wxdown']({ 'url': owt4, 'filePath': xzvy0, 'success': function (vy563a) {
          if (vy563a['statusCode'] === 0xc8) f4jhwo['readFile'](vy563a['filePath'], iq$2ng, jfo_8, md15ua);
        }, 'fail': function (v3r60y) {
          jfo_8 != null && jfo_8['runWith']([0x1, v3r60y]);
        } });vry630['onProgressUpdate'](function (du15a) {
        jfo_8 != null && jfo_8['runWith']([0x2, du15a['progress']]);
      });
    }, f4jhwo['readFile'] = function (thjo4w, e0zxry, n$ck29, thw4oj) {
      e0zxry === void 0x0 && (e0zxry = 'ascill'), thw4oj === void 0x0 && (thw4oj = ''), f4jhwo['fs']['readFile']({ 'filePath': thjo4w, 'encoding': e0zxry, 'success': function (eryz) {
          if (thjo4w['indexOf']('http://') != -0x1 || thjo4w['indexOf']('https://') != -0x1) f4jhwo['onFileUpdate'](thjo4w, thw4oj);n$ck29 != null && n$ck29['runWith']([0x0, eryz]);
        }, 'fail': function (tdwjh) {
          if (tdwjh) n$ck29 != null && n$ck29['runWith']([0x1, tdwjh]);
        } });
    }, f4jhwo['downImg'] = function (l_8o, da1um5, g$2kn) {
      g$2kn === void 0x0 && (g$2kn = '');var _sl8c = f4jhwo['wxdown']({ 'url': l_8o, 'success': function (_78fl) {
          _78fl['statusCode'] === 0xc8 && f4jhwo['copyFile'](_78fl['tempFilePath'], g$2kn, da1um5);
        }, 'fail': function (d14ut) {
          da1um5 != null && da1um5['runWith']([0x1, d14ut]);
        } });
    }, f4jhwo['copyFile'] = function (dh4wt1, hoj4tw, jho4f_) {
      var w4ud1 = dh4wt1['split']('/'),
          qngi2 = w4ud1[w4ud1['length'] - 0x1],
          c98ksl = hoj4tw['split']('?')[0x0],
          ohf_j4 = f4jhwo['getFileInfo'](hoj4tw),
          $ng9k2 = f4jhwo['getFileNativePath'](qngi2);f4jhwo['fs']['copyFile']({ 'srcPath': dh4wt1, 'destPath': $ng9k2, 'success': function (uma61) {
          if (!ohf_j4) f4jhwo['onSaveFile'](hoj4tw, qngi2), jho4f_ != null && jho4f_['runWith']([0x0]);else {
            if (ohf_j4['readyUrl'] != hoj4tw) f4jhwo['remove'](qngi2, hoj4tw, jho4f_);
          }
        }, 'fail': function (a156u) {
          jho4f_ != null && jho4f_['runWith']([0x1, a156u]);
        } });
    }, f4jhwo['getFileNativePath'] = function (ignq$p) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ignq$p;
    }, f4jhwo['remove'] = function (yav03, au35, va6y53) {
      au35 === void 0x0 && (au35 = '');var k2ng9 = f4jhwo['getFileInfo'](au35),
          _j7ohf = f4jhwo['getFileNativePath'](k2ng9['md5']);pq$ing['loader']['clearRes'](k2ng9['readyUrl']), f4jhwo['fs']['unlink']({ 'filePath': _j7ohf, 'success': function (pn$qi) {
          if (au35 != '') f4jhwo['onSaveFile'](au35, yav03);va6y53 != null && va6y53['runWith']([0x0]);
        }, 'fail': function (np$iq) {} });
    }, f4jhwo['onSaveFile'] = function (cns2, ohjtw4) {
      var a51m = cns2['split']('?')[0x0];f4jhwo['filesListObj'][a51m] = { 'md5': ohjtw4, 'readyUrl': cns2 }, f4jhwo['fs']['writeFile']({ 'filePath': f4jhwo['fileNativeDir'] + '/' + f4jhwo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f4jhwo['filesListObj']), 'success': function (xry0ze) {
          console['log']('写入测试测试成功：', xry0ze);
        }, 'fail': function (pgiq) {
          console['log']('写入测试测试失败：', pgiq);
        } });
    }, f4jhwo['existDir'] = function (kc$, _4ojh) {
      f4jhwo['fs']['mkdir']({ 'dirPath': kc$, 'success': function (h_4j) {
          _4ojh != null && _4ojh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dtu4w1) {
          if (dtu4w1['errMsg']['indexOf']('file already exists') != -0x1) f4jhwo['readSync'](f4jhwo['fileListName'], 'utf8', _4ojh);else _4ojh != null && _4ojh['runWith']([0x1, dtu4w1]);
        } });
    }, f4jhwo['readSync'] = function (av653m, x0ryzv, ni$2gk, s8_7lf) {
      x0ryzv === void 0x0 && (x0ryzv = 'ascill'), s8_7lf === void 0x0 && (s8_7lf = '');var o7jf_8 = f4jhwo['getFileNativePath'](av653m),
          oh4fj;try {
        oh4fj = f4jhwo['fs']['readFileSync'](o7jf_8), ni$2gk != null && ni$2gk['runWith']([0x0, { 'data': oh4fj }]);
      } catch (du1t4w) {
        ni$2gk != null && ni$2gk['runWith']([0x1]);
      }
    }, f4jhwo['readCache'] = function () {}, f4jhwo['writeCache'] = function (yrz) {
      var slck8 = readyUrl['split']('?')[0x0];f4jhwo['filesListObj'][slck8] = { 'md5': md5Name, 'readyUrl': readyUrl }, f4jhwo['fs']['writeFile']({ 'filePath': f4jhwo['fileNativeDir'] + '/' + f4jhwo['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](f4jhwo['filesListObj']), 'success': function (sck89) {}, 'fail': function (klsc29) {} });
    }, f4jhwo['setNativeFileDir'] = function (yvr06) {
      f4jhwo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + yvr06;
    }, f4jhwo['filesListObj'] = {}, f4jhwo['fileNativeDir'] = null, f4jhwo['fileListName'] = 'layaairfiles.txt', f4jhwo['ziyuFileData'] = {}, au36m5(f4jhwo, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), f4jhwo;
  }(n29c$),
      n$gi = function (ma61u5) {
    function mv63() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], mv63['__super']['call'](this), this['_sound'] = mv63['_createSound']();
    }v3y0(mv63, 'laya.wx.mini.MiniSound', ma61u5);var u1dt4w = mv63['prototype'];return u1dt4w['load'] = function (q$n) {
      var oh4fj_ = this;q$n = dua51['formatURL'](q$n), this['url'] = q$n;if (mv63['_audioCache'][q$n]) {
        this['event']('complete');return;
      }function d4u1w() {
        if (mv63['_null'] != undefined) oh4fj_['_sound']['onCanplay'](mv63['_null']), oh4fj_['_sound']['onError'](mv63['_null']);else try {
          oh4fj_['_sound']['onCanplay'](null), oh4fj_['_sound']['onError'](null), mv63['_null'] = null;
        } catch (p$qing) {
          console['warn']('[wxmini] _clearSound:' + p$qing), oh4fj_['_sound']['onCanplay'](htwd1), oh4fj_['_sound']['onError'](htwd1), mv63['_null'] = htwd1;
        }
      }function _ohf4() {
        d4u1w(), y3a5v6['loaded'] = !![], y3a5v6['event']('complete'), mv63['_audioCache'][y3a5v6['url']] = y3a5v6;
      }function d5t1m(c9n2$k) {
        console['error']('errCode=' + c9n2$k['errCode'] + '  errMsg=' + c9n2$k['errMsg']), d4u1w(), y3a5v6['event']('error');
      }function htwd1() {}this['_sound']['onCanplay'](_ohf4), this['_sound']['onError'](d5t1m), this['_sound']['src'] = q$n;var y3a5v6 = this;
    }, u1dt4w['play'] = function ($29ckn, sl_87) {
      $29ckn === void 0x0 && ($29ckn = 0x0), sl_87 === void 0x0 && (sl_87 = 0x0);var y536av;if (this['url'] == v56a3y['_tMusic']) {
        if (!mv63['_musicAudio']) mv63['_musicAudio'] = mv63['_createSound']();y536av = mv63['_musicAudio'];
      } else y536av = mv63['_createSound']();y536av['src'] = this['url'];var vya5 = new yvzr03(y536av);return vya5['url'] = this['url'], vya5['loops'] = sl_87, vya5['startTime'] = $29ckn, vya5['play'](), v56a3y['addChannel'](vya5), vya5;
    }, u1dt4w['dispose'] = function () {
      var k8csl = mv63['_audioCache'][this['url']];k8csl && (k8csl['src'] = '', delete mv63['_audioCache'][this['url']]);
    }, inqp(0x0, u1dt4w, 'duration', function () {
      return this['_sound']['duration'];
    }), mv63['_createSound'] = function () {
      return mv63['_id']++, scl879['window']['wx']['createInnerAudioContext']();
    }, mv63['_musicAudio'] = null, mv63['_id'] = 0x0, mv63['_audioCache'] = {}, mv63['_null'] = undefined, mv63;
  }(n29c$),
      yvzr03 = function (dt41h) {
    function u65a1m(l_fo8) {
      this['_audio'] = null, this['_onEnd'] = null, u65a1m['__super']['call'](this), this['_audio'] = l_fo8, this['_onEnd'] = ipn$g['bind'](this['__onEnd'], this), l_fo8['onEnded'](this['_onEnd']);
    }v3y0(u65a1m, 'laya.wx.mini.MiniSoundChannel', dt41h);var _sl78 = u65a1m['prototype'];return _sl78['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (pq$ing['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _sl78['__onNull'] = function () {}, _sl78['play'] = function () {
      this['isStopped'] = ![], v56a3y['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _sl78['stop'] = function () {
      this['isStopped'] = !![], v56a3y['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (u65a1m['_null'] != undefined) this['_audio']['onEnded'](u65a1m['_null']);else try {
        this['_audio']['onEnded'](null), u65a1m['_null'] = null;
      } catch (zyr0) {
        console['warn']('[wxmini] stop:' + zyr0), this['_audio']['onEnded'](ipn$g['bind'](this['__onNull'], this)), u65a1m['_null'] = ipn$g['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _sl78['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _sl78['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v56a3y['addChannel'](this), this['_audio']['play']();
    }, inqp(0x0, _sl78, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), inqp(0x0, _sl78, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), inqp(0x0, _sl78, 'volume', function () {
      return 0x1;
    }, function (u3am65) {}), u65a1m['_null'] = undefined, u65a1m;
  }(x0yzre);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var of8_7 in Laya) {
    var cs98l = Laya[of8_7];cs98l && cs98l['__isclass'] && (exports[of8_7] = cs98l);
  }
});