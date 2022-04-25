var Q = wx.$v;
(function (window, document, vwp5x) {
  var uqb8e = vwp5x['un'],
      pwgx = vwp5x['uns'],
      n423_t = vwp5x['static'],
      z68yu = vwp5x['class'],
      _612 = vwp5x['getset'],
      elbu8 = vwp5x['__newvec'],
      $9fir = laya['utils']['Browser'],
      wg5xv = laya['events']['Event'],
      _y6hz1 = laya['events']['EventDispatcher'],
      bz6l8 = laya['resource']['HTMLImage'],
      uhlz = laya['utils']['Handler'],
      o2n3 = laya['display']['Input'],
      blez8 = laya['net']['Loader'],
      oifs4$ = laya['maths']['Matrix'],
      j0dmac = laya['renders']['Render'],
      l8bequ = laya['utils']['RunDriver'],
      gxv5wp = laya['media']['Sound'],
      kdcmj = laya['media']['SoundChannel'],
      kj0d = laya['media']['SoundManager'],
      ios9$f = laya['display']['Stage'],
      fri = laya['net']['URL'],
      z6lu8 = laya['utils']['Utils'],
      y1hl6 = function () {
    function zelu8() {}return z68yu(zelu8, 'laya.wx.mini.MiniAdpter'), zelu8['getJson'] = function (i3o4) {
      return JSON['parse'](i3o4);
    }, zelu8['init'] = function (adcj, qpxwg) {
      adcj === void 0x0 && (adcj = ![]), qpxwg === void 0x0 && (qpxwg = ![]);if (zelu8['_inited']) return;zelu8['window'] = window;if (zelu8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zelu8['_inited'] = !![], zelu8['isZiYu'] = qpxwg, zelu8['isPosMsgYu'] = adcj, zelu8['EnvConfig'] = {}, !zelu8['isZiYu'] && (a0cmjd['setNativeFileDir']('/layaairGame'), a0cmjd['existDir'](a0cmjd['fileNativeDir'], uhlz['create'](zelu8, zelu8['onMkdirCallBack']))), zelu8['window']['focus'] = function () {}, vwp5x['getUrlPath'] = function () {}, zelu8['window']['logtime'] = function (gpxv) {}, zelu8['window']['alertTimeLog'] = function (ty2h1) {}, zelu8['window']['resetShareInfo'] = function () {}, zelu8['window']['CanvasRenderingContext2D'] = function () {}, zelu8['window']['CanvasRenderingContext2D']['prototype'] = zelu8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zelu8['window']['document']['body']['appendChild'] = function () {}, zelu8['EnvConfig']['pixelRatioInt'] = 0x0, l8bequ['getPixelRatio'] = zelu8['pixelRatio'], zelu8['_preCreateElement'] = $9fir['createElement'], $9fir['createElement'] = zelu8['createElement'], l8bequ['createShaderCondition'] = zelu8['createShaderCondition'], z6lu8['parseXMLFromString'] = zelu8['parseXMLFromString'], o2n3['_createInputElement'] = kdmc7['_createInputElement'], zelu8['EnvConfig']['load'] = blez8['prototype']['load'], blez8['prototype']['load'] = eqxbwg['prototype']['load'], zelu8['isZiYu'] && adcj && wx['onMessage'](function (_2t3n1) {
        _2t3n1['isLoad'] && (a0cmjd['ziyuFileData'][_2t3n1['url']] = _2t3n1['data']);
      });
    }, zelu8['onMkdirCallBack'] = function (i9sfr, o4is) {
      if (!i9sfr) a0cmjd['filesListObj'] = JSON['parse'](o4is['data']);
    }, zelu8['pixelRatio'] = function () {
      if (!zelu8['EnvConfig']['pixelRatioInt']) try {
        var i4f$ = wx['getSystemInfoSync']();return zelu8['EnvConfig']['pixelRatioInt'] = i4f$['pixelRatio'], i4f$ = i4f$, i4f$['pixelRatio'];
      } catch (xwqbe) {}return zelu8['EnvConfig']['pixelRatioInt'];
    }, zelu8['createElement'] = function (h1_y) {
      if (h1_y == 'canvas') {
        var eqxwg;return zelu8['idx'] == 0x1 ? zelu8['isZiYu'] ? (eqxwg = sharedCanvas, eqxwg['style'] = {}) : eqxwg = window['canvas'] : eqxwg = window['wx']['createCanvas'](), zelu8['idx']++, eqxwg;
      } else {
        if (h1_y == 'textarea' || h1_y == 'input') return zelu8['onCreateInput'](h1_y);else {
          if (h1_y == 'div') {
            var thn2 = zelu8['_preCreateElement'](h1_y);return thn2['contains'] = function (kvx57p) {
              return null;
            }, thn2['removeChild'] = function (el8ub) {}, thn2;
          } else return zelu8['_preCreateElement'](h1_y);
        }
      }
    }, zelu8['onCreateInput'] = function (geqbxw) {
      var jmk0d = zelu8['_preCreateElement'](geqbxw);return jmk0d['focus'] = kdmc7['wxinputFocus'], jmk0d['blur'] = kdmc7['wxinputblur'], jmk0d['style'] = {}, jmk0d['value'] = 0x0, jmk0d['parentElement'] = {}, jmk0d['placeholder'] = {}, jmk0d['type'] = {}, jmk0d['setColor'] = function (i$of) {}, jmk0d['setType'] = function (uz86yl) {}, jmk0d['setFontFace'] = function (gvpw5x) {}, jmk0d['addEventListener'] = function (yhlu6z) {}, jmk0d['contains'] = function (blq8u) {
        return null;
      }, jmk0d['removeChild'] = function (i$s9rf) {}, jmk0d;
    }, zelu8['createShaderCondition'] = function (w5vxgp) {
      var we8qbu = this,
          bq8wg = function () {
        var ofis4$ = w5vxgp;return we8qbu[w5vxgp['replace']('this.', '')];
      };return bq8wg;
    }, zelu8['EnvConfig'] = null, zelu8['window'] = null, zelu8['_preCreateElement'] = null, zelu8['_inited'] = ![], zelu8['wxRequest'] = null, zelu8['systemInfo'] = null, zelu8['version'] = '0.0.1', zelu8['isZiYu'] = ![], zelu8['isPosMsgYu'] = ![], zelu8['parseXMLFromString'] = function (c0am) {
      var ly6zhu, kv5c;c0am = c0am['replace'](/>\s+</g, '><');try {
        ly6zhu = new window['Parser']['DOMParser']()['parseFromString'](c0am, 'text/xml');
      } catch (eqb8wg) {
        throw '需要引入xml解析库文件';
      }return ly6zhu;
    }, zelu8['idx'] = 0x1, zelu8;
  }(),
      zlbue8 = function () {
    function kc057() {}z68yu(kc057, 'laya.wx.mini.MiniImage');var soi3 = kc057['prototype'];return soi3['_loadImage'] = function (i$o34) {
      var vgxw5 = this,
          o43$s = ![];i$o34['indexOf']('layaNativeDir/') == -0x1 && (o43$s = !![], i$o34 = fri['formatURL'](i$o34));if (!a0cmjd['getFileInfo'](i$o34)) {
        if (i$o34['indexOf']('http://') != -0x1 || i$o34['indexOf']('https://') != -0x1) a0cmjd['downImg'](i$o34, new uhlz(kc057, kc057['onDownImgCallBack'], [i$o34, vgxw5]), i$o34);else kc057['onCreateImage'](i$o34, vgxw5, !![]);
      } else kc057['onCreateImage'](i$o34, vgxw5, !o43$s);
    }, kc057['onDownImgCallBack'] = function (hnt2, pgxv57, s9$foi) {
      if (!s9$foi) kc057['onCreateImage'](hnt2, pgxv57);else pgxv57['onError'](null);
    }, kc057['onCreateImage'] = function (_1ht2n, xbwegq, x7vkp) {
      x7vkp === void 0x0 && (x7vkp = ![]);var _6;if (!x7vkp) {
        var rifs9$ = a0cmjd['getFileInfo'](_1ht2n),
            ton$34 = rifs9$['md5'];_6 = a0cmjd['getFileNativePath'](ton$34);
      } else _6 = _1ht2n;if (xbwegq['imgCache'] == null) xbwegq['imgCache'] = {};var damc0j;function eqgpw() {
        damc0j['onload'] = null, damc0j['onerror'] = null, delete xbwegq['imgCache'][_1ht2n];
      };var xgep = function () {
        eqgpw(), xbwegq['onLoaded'](damc0j);
      },
          g75x = function () {
        eqgpw(), xbwegq['event']('error', 'Load image failed');
      };xbwegq['_type'] == 'nativeimage' ? (damc0j = new $9fir['window']['Image'](), damc0j['crossOrigin'] = '', damc0j['onload'] = xgep, damc0j['onerror'] = g75x, damc0j['src'] = _6, xbwegq['imgCache'][_1ht2n] = damc0j) : new bz6l8['create'](_6, { 'onload': xgep, 'onerror': g75x, 'onCreate': function (not43) {
          damc0j = not43, xbwegq['imgCache'][_1ht2n] = not43;
        } });
    }, kc057;
  }(),
      kdmc7 = function () {
    function lzb68u() {}return z68yu(lzb68u, 'laya.wx.mini.MiniInput'), lzb68u['_createInputElement'] = function () {
      o2n3['_initInput'](o2n3['area'] = $9fir['createElement']('textarea')), o2n3['_initInput'](o2n3['input'] = $9fir['createElement']('input')), o2n3['inputContainer'] = $9fir['createElement']('div'), o2n3['inputContainer']['style']['position'] = 'absolute', o2n3['inputContainer']['style']['zIndex'] = 0x186a0, $9fir['container']['appendChild'](o2n3['inputContainer']), o2n3['inputContainer']['setPos'] = function (qbule8, vk5p) {
        o2n3['inputContainer']['style']['left'] = qbule8 + 'px', o2n3['inputContainer']['style']['top'] = vk5p + 'px';
      }, vwp5x['stage']['on']('resize', null, lzb68u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vw5xpg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kj0d['_soundClass'] = xk5v, kj0d['_musicClass'] = xk5v, window['_videoClass'] = cjmkd0;
    }, lzb68u['_onStageResize'] = function () {
      var c5k07v = vwp5x['stage']['_canvasTransform']['identity']();c5k07v['scale']($9fir['width'] / j0dmac['canvas']['width'] / l8bequ['getPixelRatio'](), $9fir['height'] / j0dmac['canvas']['height'] / l8bequ['getPixelRatio']());
    }, lzb68u['wxinputFocus'] = function (wqgep) {
      var e8bwuq = o2n3['inputElement']['target'];if (e8bwuq && !e8bwuq['editable']) return;y1hl6['window']['wx']['offKeyboardConfirm'](), y1hl6['window']['wx']['offKeyboardInput'](), y1hl6['window']['wx']['showKeyboard']({ 'defaultValue': e8bwuq['text'], 'maxLength': e8bwuq['maxChars'], 'multiple': e8bwuq['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (fisr9) {}, 'fail': function (bq8wge) {} }), y1hl6['window']['wx']['onKeyboardConfirm'](function (c07mk) {
        var bqwue8 = c07mk ? c07mk['value'] : '';e8bwuq['text'] = bqwue8, e8bwuq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), y1hl6['window']['wx']['onKeyboardInput'](function (yz_h1) {
        var euq8wb = yz_h1 ? yz_h1['value'] : '';if (!e8bwuq['multiline']) {
          if (euq8wb['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }e8bwuq['text'] = euq8wb, e8bwuq['event']('input');
      });
    }, lzb68u['inputEnter'] = function () {
      o2n3['inputElement']['target']['focus'] = ![];
    }, lzb68u['wxinputblur'] = function () {
      lzb68u['hideKeyboard']();
    }, lzb68u['hideKeyboard'] = function () {
      y1hl6['window']['wx']['offKeyboardConfirm'](), y1hl6['window']['wx']['offKeyboardInput'](), y1hl6['window']['wx']['hideKeyboard']({ 'success': function (zylh6u) {
          console['log']('隐藏键盘');
        }, 'fail': function (xqwpgv) {
          console['log']('隐藏键盘出错:' + (xqwpgv ? xqwpgv['errMsg'] : ''));
        } });
    }, lzb68u;
  }(),
      eqxbwg = function () {
    function k057cv() {}z68yu(k057cv, 'laya.wx.mini.MiniLoader');var xepgw = k057cv['prototype'];return xepgw['load'] = function (thy12_, lu68z, am0cj, bzl68, ma0cj) {
      am0cj === void 0x0 && (am0cj = !![]), ma0cj === void 0x0 && (ma0cj = ![]);var n1t2h = this;n1t2h['_url'] = thy12_;if (thy12_['indexOf']('data:image') === 0x0) n1t2h['_type'] = lu68z = 'image';else n1t2h['_type'] = lu68z || (lu68z = n1t2h['getTypeFromUrl'](thy12_));n1t2h['_cache'] = am0cj, n1t2h['_data'] = null;var qlu8e = 'ascii';if (thy12_['indexOf']('.fnt') != -0x1) qlu8e = 'utf8';else lu68z == 'arraybuffer' && (qlu8e = '');;var j0cam = z6lu8['getFileExtension'](thy12_);if (k057cv['_fileTypeArr']['indexOf'](j0cam) != -0x1) y1hl6['EnvConfig']['load']['call'](this, thy12_, lu68z, am0cj, bzl68, ma0cj);else {
        if (!a0cmjd['getFileInfo'](thy12_)) {
          if (thy12_['indexOf']('layaNativeDir/') != -0x1) {
            if (y1hl6['isZiYu']) {
              var gv5wp = a0cmjd['ziyuFileData'][thy12_];n1t2h['onLoaded'](gv5wp);return;
            } else {
              cosnole['log']('read read'), a0cmjd['read'](thy12_, qlu8e, new uhlz(k057cv, k057cv['onReadNativeCallBack'], [qlu8e, thy12_, lu68z, am0cj, bzl68, ma0cj, n1t2h]));return;
            }
          }if (fri['rootPath'] == '') var oi3$ = thy12_;else oi3$ = thy12_['split'](fri['rootPath'])[0x0];thy12_['indexOf']('http://') != -0x1 || thy12_['indexOf']('https://') != -0x1 ? y1hl6['EnvConfig']['load']['call'](n1t2h, thy12_, lu68z, am0cj, bzl68, ma0cj) : a0cmjd['readFile'](oi3$, qlu8e, new uhlz(k057cv, k057cv['onReadNativeCallBack'], [qlu8e, thy12_, lu68z, am0cj, bzl68, ma0cj, n1t2h]), thy12_);
        } else y1hl6['EnvConfig']['load']['call'](this, thy12_, lu68z, am0cj, bzl68, ma0cj);
      }
    }, xepgw['resMgrLoad'] = function (h1nt_2, io4s3, xwqegb, lyz, uwe8b, y2_61h, v7p50k) {
      xwqegb === void 0x0 && (xwqegb = 0x0), lyz === void 0x0 && (lyz = ![]), uwe8b === void 0x0 && (uwe8b = ![]), y2_61h === void 0x0 && (y2_61h = 0x0), v7p50k === void 0x0 && (v7p50k = 0x3), h1nt_2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', h1nt_2), y1hl6['EnvConfig']['resMgrLoad'](h1nt_2, (u6l8, ublze8, n2h_) => {
        k057cv['prototype']['resMgrLoadCallBack'](u6l8, ublze8, n2h_, io4s3);
      }, xwqegb, lyz, uwe8b, y2_61h, v7p50k);
    }, xepgw['resMgrLoadCallBack'] = function (n_13, huy6lz, xqbgew, t_324) {
      console['log']('buff:::', n_13, xqbgew, a0cmjd['fileNativeDir'] + '///' + a0cmjd['fileListName']), t_324(n_13, huy6lz, xqbgew);
    }, xepgw['clearRes'] = function (_6zy1, qeg8wb) {
      qeg8wb === void 0x0 && (qeg8wb = ![]);var $9isr = this;$9isr['clearRes'](_6zy1, qeg8wb);var so$f9i = a0cmjd['getFileInfo'](_6zy1);if (so$f9i && (_6zy1['indexOf']('http://') != -0x1 || _6zy1['indexOf']('https://') != -0x1)) {
        var u6lz8b = so$f9i['md5'],
            geqxw = a0cmjd['getFileNativePath'](u6lz8b);a0cmjd['remove'](geqxw);
      }
    }, k057cv['onReadNativeCallBack'] = function (q8eb, $4tn, yz_h, i3$os, _t12hn, l6yh1z, sif4$o, t1nh_2, eb8uw) {
      i3$os === void 0x0 && (i3$os = !![]), l6yh1z === void 0x0 && (l6yh1z = ![]), t1nh_2 === void 0x0 && (t1nh_2 = 0x0);if (!t1nh_2) {
        var g5vx;if (yz_h == 'json' || yz_h == 'atlas') g5vx = y1hl6['getJson'](eb8uw['data']);else yz_h == 'xml' ? g5vx = z6lu8['parseXMLFromString'](eb8uw['data']) : g5vx = eb8uw['data'];sif4$o['onLoaded'](g5vx), !y1hl6['isZiYu'] && y1hl6['isPosMsgYu'] && yz_h != 'arraybuffer' && wx['postMessage']({ 'url': $4tn, 'data': g5vx, 'isLoad': !![] });
      } else t1nh_2 == 0x1 && y1hl6['EnvConfig']['load']['call'](sif4$o, $4tn, yz_h, i3$os, _t12hn, l6yh1z);
    }, n423_t(k057cv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), k057cv;
  }(),
      a0cmjd = function (qxvpg) {
    function $sf9i() {
      $sf9i['__super']['call'](this);;
    }return z68yu($sf9i, 'laya.wx.mini.MiniFileMgr', qxvpg), $sf9i['isLoadFile'] = function (tn432o) {
      return $sf9i['_fileTypeArr']['indexOf'](tn432o) != -0x1 ? !![] : ![];
    }, $sf9i['getFileInfo'] = function (mc7) {
      var cd0km = mc7['split']('?')[0x0],
          ewqxpg = $sf9i['filesListObj'][cd0km];if (ewqxpg == null) return null;else return ewqxpg;return null;
    }, $sf9i['onFileUpdate'] = function (gpqwvx, l8zueb) {
      var yzul = gpqwvx['split']('/'),
          v705p = yzul[yzul['length'] - 0x1],
          o3$is = $sf9i['getFileInfo'](l8zueb);if (o3$is == null) $sf9i['onSaveFile'](l8zueb, v705p);else {
        if (o3$is['readyUrl'] != l8zueb) $sf9i['remove'](v705p, l8zueb);
      }
    }, $sf9i['exits'] = function (ifr$9, hy1z6) {
      var l8yz6u = $sf9i['getFileNativePath'](ifr$9);$sf9i['fs']['getFileInfo']({ 'filePath': l8yz6u, 'success': function (xwepgq) {
          hy1z6 != null && hy1z6['runWith']([0x0, xwepgq]);
        }, 'fail': function (f9s$) {
          hy1z6 != null && hy1z6['runWith']([0x1, f9s$]);
        } });
    }, $sf9i['read'] = function (e8uzl, qwvxg, eulbz, o4sf$i) {
      qwvxg === void 0x0 && (qwvxg = 'ascill'), o4sf$i === void 0x0 && (o4sf$i = '');var $i9rs;o4sf$i != '' ? $i9rs = $sf9i['getFileNativePath'](e8uzl) : $i9rs = e8uzl, $sf9i['fs']['readFile']({ 'filePath': $i9rs, 'encoding': qwvxg, 'success': function (qxwpe) {
          eulbz != null && eulbz['runWith']([0x0, qxwpe]);
        }, 'fail': function (xvwqg) {
          if (xvwqg && o4sf$i != '') $sf9i['down'](o4sf$i, qwvxg, eulbz, o4sf$i);else eulbz != null && eulbz['runWith']([0x1]);
        } });
    }, $sf9i['readNativeFile'] = function (lbuq8, t1_hy) {
      $sf9i['fs']['readFile']({ 'filePath': lbuq8, 'encoding': '', 'success': function (zu8ly) {
          t1_hy != null && t1_hy['runWith']([0x0]);
        }, 'fail': function (n123_) {
          t1_hy != null && t1_hy['runWith']([0x1]);
        } });
    }, $sf9i['down'] = function (l8ebz, ueqb, e8zlu, bl6) {
      ueqb === void 0x0 && (ueqb = 'ascill'), bl6 === void 0x0 && (bl6 = '');var _yhz61 = $sf9i['getFileNativePath'](bl6),
          b6l8u = $sf9i['wxdown']({ 'url': l8ebz, 'filePath': _yhz61, 'success': function (yz1_h) {
          if (yz1_h['statusCode'] === 0xc8) $sf9i['readFile'](yz1_h['filePath'], ueqb, e8zlu, bl6);
        }, 'fail': function (kd07mc) {
          e8zlu != null && e8zlu['runWith']([0x1, kd07mc]);
        } });b6l8u['onProgressUpdate'](function (vgw) {
        e8zlu != null && e8zlu['runWith']([0x2, vgw['progress']]);
      });
    }, $sf9i['readFile'] = function (vxp7g5, so4fi, sn4o3$, hz16_y) {
      so4fi === void 0x0 && (so4fi = 'ascill'), hz16_y === void 0x0 && (hz16_y = ''), $sf9i['fs']['readFile']({ 'filePath': vxp7g5, 'encoding': so4fi, 'success': function (ewq8) {
          if (vxp7g5['indexOf']('http://') != -0x1 || vxp7g5['indexOf']('https://') != -0x1) $sf9i['onFileUpdate'](vxp7g5, hz16_y);sn4o3$ != null && sn4o3$['runWith']([0x0, ewq8]);
        }, 'fail': function (k05mc7) {
          if (k05mc7) sn4o3$ != null && sn4o3$['runWith']([0x1, k05mc7]);
        } });
    }, $sf9i['downImg'] = function (blzu8e, soi3$, bweg8q) {
      bweg8q === void 0x0 && (bweg8q = '');var wvpx5 = $sf9i['wxdown']({ 'url': blzu8e, 'success': function (k7v5xp) {
          k7v5xp['statusCode'] === 0xc8 && $sf9i['copyFile'](k7v5xp['tempFilePath'], bweg8q, soi3$);
        }, 'fail': function (f9i$s) {
          soi3$ != null && soi3$['runWith']([0x1, f9i$s]);
        } });
    }, $sf9i['copyFile'] = function (_61yhz, v0k7, bzlu68) {
      var t_12n = _61yhz['split']('/'),
          d70c = t_12n[t_12n['length'] - 0x1],
          dcm0 = v0k7['split']('?')[0x0],
          pkvx = $sf9i['getFileInfo'](v0k7),
          $of4is = $sf9i['getFileNativePath'](d70c);$sf9i['fs']['copyFile']({ 'srcPath': _61yhz, 'destPath': $of4is, 'success': function (zuebl8) {
          if (!pkvx) $sf9i['onSaveFile'](v0k7, d70c), bzlu68 != null && bzlu68['runWith']([0x0]);else {
            if (pkvx['readyUrl'] != v0k7) $sf9i['remove'](d70c, v0k7, bzlu68);
          }
        }, 'fail': function (vkx5) {
          bzlu68 != null && bzlu68['runWith']([0x1, vkx5]);
        } });
    }, $sf9i['getFileNativePath'] = function (ot24) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ot24;
    }, $sf9i['remove'] = function (wqxvpg, zuelb, x7g5v) {
      zuelb === void 0x0 && (zuelb = '');var djmk0c = $sf9i['getFileInfo'](zuelb),
          ub8z6 = $sf9i['getFileNativePath'](djmk0c['md5']);vwp5x['loader']['clearRes'](djmk0c['readyUrl']), $sf9i['fs']['unlink']({ 'filePath': ub8z6, 'success': function (qe8wbg) {
          if (zuelb != '') $sf9i['onSaveFile'](zuelb, wqxvpg);x7g5v != null && x7g5v['runWith']([0x0]);
        }, 'fail': function (lh1yz) {} });
    }, $sf9i['onSaveFile'] = function (hl, o4s) {
      var yz16_h = hl['split']('?')[0x0];$sf9i['filesListObj'][yz16_h] = { 'md5': o4s, 'readyUrl': hl }, $sf9i['fs']['writeFile']({ 'filePath': $sf9i['fileNativeDir'] + '/' + $sf9i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($sf9i['filesListObj']), 'success': function (pk5v0) {
          console['log']('写入测试测试成功：', pk5v0);
        }, 'fail': function (xwpvqg) {
          console['log']('写入测试测试失败：', xwpvqg);
        } });
    }, $sf9i['existDir'] = function (bxwg, e8zlub) {
      $sf9i['fs']['mkdir']({ 'dirPath': bxwg, 'success': function (xbwqg) {
          e8zlub != null && e8zlub['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_t132n) {
          if (_t132n['errMsg']['indexOf']('file already exists') != -0x1) $sf9i['readSync']($sf9i['fileListName'], 'utf8', e8zlub);else e8zlub != null && e8zlub['runWith']([0x1, _t132n]);
        } });
    }, $sf9i['readSync'] = function (_y16zh, s$foi9, q8ubew, vkp57x) {
      s$foi9 === void 0x0 && (s$foi9 = 'ascill'), vkp57x === void 0x0 && (vkp57x = '');var ont3 = $sf9i['getFileNativePath'](_y16zh),
          lbe8qu;try {
        lbe8qu = $sf9i['fs']['readFileSync'](ont3), q8ubew != null && q8ubew['runWith']([0x0, { 'data': lbe8qu }]);
      } catch (cjkmd0) {
        q8ubew != null && q8ubew['runWith']([0x1]);
      }
    }, $sf9i['readCache'] = function () {}, $sf9i['writeCache'] = function (x7k5pv) {
      var wvpxqg = readyUrl['split']('?')[0x0];$sf9i['filesListObj'][wvpxqg] = { 'md5': md5Name, 'readyUrl': readyUrl }, $sf9i['fs']['writeFile']({ 'filePath': $sf9i['fileNativeDir'] + '/' + $sf9i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($sf9i['filesListObj']), 'success': function (ot23) {}, 'fail': function (q8bewu) {} });
    }, $sf9i['setNativeFileDir'] = function (pexwq) {
      $sf9i['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pexwq;
    }, $sf9i['filesListObj'] = {}, $sf9i['fileNativeDir'] = null, $sf9i['fileListName'] = 'layaairfiles.txt', $sf9i['ziyuFileData'] = {}, n423_t($sf9i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $sf9i;
  }(_y6hz1),
      xk5v = function (dmk7) {
    function lbu8z() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], lbu8z['__super']['call'](this), this['_sound'] = lbu8z['_createSound'](), this['_chanell'] = new uyzhl(this['_sound']);
    }z68yu(lbu8z, 'laya.wx.mini.MiniSound', dmk7);var _htn12 = lbu8z['prototype'];return _htn12['load'] = function (_h2ty1) {
      var u8bzle = this;_h2ty1 = fri['formatURL'](_h2ty1), this['url'] = _h2ty1;if (lbu8z['_audioCache'][_h2ty1]) {
        this['event']('complete');return;
      }function osi4() {
        if (lbu8z['_null'] != undefined) u8bzle['_sound']['onCanplay'](lbu8z['_null']), u8bzle['_sound']['onError'](lbu8z['_null']);else try {
          u8bzle['_sound']['onCanplay'](null), u8bzle['_sound']['onError'](null), lbu8z['_null'] = null;
        } catch (pv705) {
          console['warn']('[wxmini] _clearSound:' + pv705), u8bzle['_sound']['onCanplay'](vx7pg5), u8bzle['_sound']['onError'](vx7pg5), lbu8z['_null'] = vx7pg5;
        }
      }function yz1h6l() {
        wbe8g['loaded'] = !![], wbe8g['event']('complete'), lbu8z['_audioCache'][wbe8g['url']] = wbe8g;
      }function fsio(y86ul) {
        console['error']('errCode=' + y86ul['errCode'] + '  errMsg=' + y86ul['errMsg']), wbe8g['event']('error');
      }function vx7pg5() {}this['_sound']['onCanplay'](yz1h6l), this['_sound']['onError'](fsio), this['_sound']['src'] = _h2ty1;var wbe8g = this;
    }, _htn12['play'] = function (is$o4f, hyuzl) {
      is$o4f === void 0x0 && (is$o4f = 0x0), hyuzl === void 0x0 && (hyuzl = 0x0);var t1_h, gxwqvp;if (this['url'] == kj0d['_tMusic']) {
        if (!lbu8z['_musicAudio']) lbu8z['_musicAudio'] = this['_sound'];t1_h = lbu8z['_musicAudio'], gxwqvp = this['_chanell'];
      } else t1_h = this['_sound'], gxwqvp = this['_chanell'];return t1_h['src'] = this['url'], t1_h['startTime'] = 0x0, gxwqvp['isStopped'] && (gxwqvp['url'] = this['url'], gxwqvp['loops'] = hyuzl, gxwqvp['startTime'] = is$o4f, gxwqvp['play'](), kj0d['addChannel'](gxwqvp)), gxwqvp;
    }, _htn12['dispose'] = function () {
      var wpeqg = lbu8z['_audioCache'][this['url']];wpeqg && (wpeqg['src'] = '', delete lbu8z['_audioCache'][this['url']]);
    }, _612(0x0, _htn12, 'duration', function () {
      return this['_sound']['duration'];
    }), lbu8z['_createSound'] = function () {
      lbu8z['_id']++;var lbu68 = y1hl6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return lbu68;
    }, lbu8z['_musicAudio'] = null, lbu8z['_id'] = 0x0, lbu8z['_audioCache'] = {}, lbu8z['_null'] = undefined, lbu8z;
  }(_y6hz1),
      uyzhl = function (n3to) {
    function $o4fs(u8eqw) {
      this['_audio'] = null, this['_onEnd'] = null, $o4fs['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = u8eqw, this['_onEnd'] = z6lu8['bind'](this['__onEnd'], this), u8eqw['onEnded'](this['_onEnd']);
    }z68yu($o4fs, 'laya.wx.mini.MiniSoundChannel', n3to);var $9fsio = $o4fs['prototype'];return $9fsio['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vwp5x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, $9fsio['__onNull'] = function () {}, $9fsio['play'] = function () {
      this['isStopped'] = ![], kj0d['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, $9fsio['stop'] = function () {
      this['isStopped'] = !![], kj0d['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, $9fsio['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, $9fsio['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kj0d['addChannel'](this), this['_audio']['play']();
    }, _612(0x0, $9fsio, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), _612(0x0, $9fsio, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), _612(0x0, $9fsio, 'volume', function () {
      return 0x1;
    }, function (k0mdc) {}), $o4fs['_null'] = undefined, $o4fs;
  }(kdcmj),
      cjmkd0 = function () {
    function qbewg() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = y1hl6['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }z68yu(qbewg, 'laya.wx.mini.MiniVideo');var s$ofi9 = qbewg['prototype'];return s$ofi9['on'] = function (webq, hly1z6, t_y) {
      if (webq == 'loadedmetadata') this['onPlayFunc'] = t_y['bind'](hly1z6), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else webq == 'ended' && (this['onEndedFunC'] = t_y['bind'](hly1z6), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, s$ofi9['onTimeUpdateFunc'] = function (wp5xvg) {
      this['position'] = wp5xvg['position'], this['_duration'] = wp5xvg['duration'];
    }, s$ofi9['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, s$ofi9['onended'] = function (xk7vp, ns43$) {
      this['onEndedFunC'] = ns43$['bind'](xk7vp), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, s$ofi9['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, s$ofi9['off'] = function (o4fis$, m0dajc, zl1h6) {
      if (o4fis$ == 'loadedmetadata') this['onPlayFunc'] = zl1h6['bind'](m0dajc), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else o4fis$ == 'ended' && (this['onEndedFunC'] = zl1h6['bind'](m0dajc), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, s$ofi9['load'] = function (buz6l) {
      if (!this['videoElement']) return;this['videoElement']['src'] = buz6l;
    }, s$ofi9['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, s$ofi9['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, s$ofi9['size'] = function (uqweb8, zyhul) {
      if (!this['videoElement']) return;this['videoElement']['width'] = uqweb8, this['videoElement']['height'] = zyhul;
    }, s$ofi9['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, s$ofi9['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, _612(0x0, s$ofi9, 'duration', function () {
      return this['_duration'];
    }), _612(0x0, s$ofi9, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (zbelu8) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = zbelu8;
    }), _612(0x0, s$ofi9, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), _612(0x0, s$ofi9, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), _612(0x0, s$ofi9, 'ended', function () {
      return this['videoend'];
    }), _612(0x0, s$ofi9, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (ewbqu) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = ewbqu;
    }), _612(0x0, s$ofi9, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (gbqe) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = gbqe;
    }), _612(0x0, s$ofi9, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (_t2nh) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = _t2nh;
    }), _612(0x0, s$ofi9, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), _612(0x0, s$ofi9, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (f$rsi) {
      if (!this['videoElement']) return;this['videoElement']['x'] = f$rsi;
    }), _612(0x0, s$ofi9, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (y_t12h) {
      if (!this['videoElement']) return;this['videoElement']['y'] = y_t12h;
    }), _612(0x0, s$ofi9, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), _612(0x0, s$ofi9, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (eg8qwb) {
      if (!this['videoElement']) return;this['videoElement']['src'] = eg8qwb;
    }), _612(0x0, s$ofi9, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (qgwep) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = qgwep;
    }), _612(0x0, s$ofi9, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (_61hz) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = _61hz;
    }), qbewg;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var y1h_z in Laya) {
    var $ifos = Laya[y1h_z];$ifos && $ifos['__isclass'] && (exports[y1h_z] = $ifos);
  }
});