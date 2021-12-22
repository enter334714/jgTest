var a = wx.$y;
(function (window, document, a6y30) {
  var mu516a = a6y30['un'],
      d5am1 = a6y30['uns'],
      ht1d = a6y30['static'],
      v6r0 = a6y30['class'],
      tw1hd4 = a6y30['getset'],
      fhjw4o = a6y30['__newvec'],
      $nk2i = laya['utils']['Browser'],
      mtd5u1 = laya['events']['Event'],
      va36y5 = laya['events']['EventDispatcher'],
      zxery0 = laya['resource']['HTMLImage'],
      a0v6 = laya['utils']['Handler'],
      vyzr0 = laya['display']['Input'],
      ry0xze = laya['net']['Loader'],
      dtwu41 = laya['maths']['Matrix'],
      howjf4 = laya['renders']['Render'],
      fls8 = laya['utils']['RunDriver'],
      w1dtu4 = laya['media']['Sound'],
      r0xeyz = laya['media']['SoundChannel'],
      r6v0 = laya['media']['SoundManager'],
      owt4 = laya['display']['Stage'],
      fj7_ho = laya['net']['URL'],
      inpq = laya['utils']['Utils'],
      twdh = function () {
    function yzr0xe() {}return v6r0(yzr0xe, 'laya.wx.mini.MiniAdpter'), yzr0xe['getJson'] = function (mva3) {
      return JSON['parse'](mva3);
    }, yzr0xe['init'] = function (tw1dm, zxyr0v) {
      tw1dm === void 0x0 && (tw1dm = ![]), zxyr0v === void 0x0 && (zxyr0v = ![]);if (yzr0xe['_inited']) return;yzr0xe['window'] = window;if (yzr0xe['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yzr0xe['_inited'] = !![], yzr0xe['isZiYu'] = zxyr0v, yzr0xe['isPosMsgYu'] = tw1dm, yzr0xe['EnvConfig'] = {}, !yzr0xe['isZiYu'] && (wjhtd4['setNativeFileDir']('/layaairGame'), wjhtd4['existDir'](wjhtd4['fileNativeDir'], a0v6['create'](yzr0xe, yzr0xe['onMkdirCallBack']))), yzr0xe['window']['focus'] = function () {}, a6y30['getUrlPath'] = function () {}, yzr0xe['window']['logtime'] = function (_4fohj) {}, yzr0xe['window']['alertTimeLog'] = function (w1mudt) {}, yzr0xe['window']['resetShareInfo'] = function () {}, yzr0xe['window']['CanvasRenderingContext2D'] = function () {}, yzr0xe['window']['CanvasRenderingContext2D']['prototype'] = yzr0xe['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yzr0xe['window']['document']['body']['appendChild'] = function () {}, yzr0xe['EnvConfig']['pixelRatioInt'] = 0x0, fls8['getPixelRatio'] = yzr0xe['pixelRatio'], yzr0xe['_preCreateElement'] = $nk2i['createElement'], $nk2i['createElement'] = yzr0xe['createElement'], fls8['createShaderCondition'] = yzr0xe['createShaderCondition'], inpq['parseXMLFromString'] = yzr0xe['parseXMLFromString'], vyzr0['_createInputElement'] = tm1wu['_createInputElement'], yzr0xe['EnvConfig']['load'] = ry0xze['prototype']['load'], ry0xze['prototype']['load'] = fjoh_4['prototype']['load'], yzr0xe['isZiYu'] && tw1dm && wx['onMessage'](function (o8f7j_) {
        o8f7j_['isLoad'] && (wjhtd4['ziyuFileData'][o8f7j_['url']] = o8f7j_['data']);
      });
    }, yzr0xe['onMkdirCallBack'] = function (v653ay, j_7fh) {
      if (!v653ay) wjhtd4['filesListObj'] = JSON['parse'](j_7fh['data']);
    }, yzr0xe['pixelRatio'] = function () {
      if (!yzr0xe['EnvConfig']['pixelRatioInt']) try {
        var wj4hfo = wx['getSystemInfoSync']();return yzr0xe['EnvConfig']['pixelRatioInt'] = wj4hfo['pixelRatio'], wj4hfo = wj4hfo, wj4hfo['pixelRatio'];
      } catch (md15t) {}return yzr0xe['EnvConfig']['pixelRatioInt'];
    }, yzr0xe['createElement'] = function (sn2k) {
      if (sn2k == 'canvas') {
        var $2k9nc;return yzr0xe['idx'] == 0x1 ? yzr0xe['isZiYu'] ? ($2k9nc = sharedCanvas, $2k9nc['style'] = {}) : $2k9nc = window['canvas'] : $2k9nc = window['wx']['createCanvas'](), yzr0xe['idx']++, $2k9nc;
      } else {
        if (sn2k == 'textarea' || sn2k == 'input') return yzr0xe['onCreateInput'](sn2k);else {
          if (sn2k == 'div') {
            var vry603 = yzr0xe['_preCreateElement'](sn2k);return vry603['contains'] = function (z3ryv) {
              return null;
            }, vry603['removeChild'] = function (jo4twh) {}, vry603;
          } else return yzr0xe['_preCreateElement'](sn2k);
        }
      }
    }, yzr0xe['onCreateInput'] = function (dmtwu1) {
      var _cls = yzr0xe['_preCreateElement'](dmtwu1);return _cls['focus'] = tm1wu['wxinputFocus'], _cls['blur'] = tm1wu['wxinputblur'], _cls['style'] = {}, _cls['value'] = 0x0, _cls['parentElement'] = {}, _cls['placeholder'] = {}, _cls['type'] = {}, _cls['setColor'] = function (fh4ojw) {}, _cls['setType'] = function (ay6v53) {}, _cls['setFontFace'] = function (tjdw) {}, _cls['addEventListener'] = function (qg2in) {}, _cls['contains'] = function (dmt51) {
        return null;
      }, _cls['removeChild'] = function (o7j_hf) {}, _cls;
    }, yzr0xe['createShaderCondition'] = function (hfjo) {
      var $92c = this,
          m3a56u = function () {
        var fs_7l8 = hfjo;return $92c[hfjo['replace']('this.', '')];
      };return m3a56u;
    }, yzr0xe['EnvConfig'] = null, yzr0xe['window'] = null, yzr0xe['_preCreateElement'] = null, yzr0xe['_inited'] = ![], yzr0xe['wxRequest'] = null, yzr0xe['systemInfo'] = null, yzr0xe['version'] = '0.0.1', yzr0xe['isZiYu'] = ![], yzr0xe['isPosMsgYu'] = ![], yzr0xe['parseXMLFromString'] = function (_s8l7) {
      var _7fo8j, ofhj7;_s8l7 = _s8l7['replace'](/>\s+</g, '><');try {
        _7fo8j = new window['Parser']['DOMParser']()['parseFromString'](_s8l7, 'text/xml');
      } catch (foh4) {
        throw '需要引入xml解析库文件';
      }return _7fo8j;
    }, yzr0xe['idx'] = 0x1, yzr0xe;
  }(),
      xry0z = function () {
    function kc9sn2() {}v6r0(kc9sn2, 'laya.wx.mini.MiniImage');var lksc29 = kc9sn2['prototype'];return lksc29['_loadImage'] = function (vy603) {
      var c9k$n = this,
          mv65a3 = ![];vy603['indexOf']('layaNativeDir/') == -0x1 && (mv65a3 = !![], vy603 = fj7_ho['formatURL'](vy603));if (!wjhtd4['getFileInfo'](vy603)) {
        if (vy603['indexOf']('http://') != -0x1 || vy603['indexOf']('https://') != -0x1) wjhtd4['downImg'](vy603, new a0v6(kc9sn2, kc9sn2['onDownImgCallBack'], [vy603, c9k$n]), vy603);else kc9sn2['onCreateImage'](vy603, c9k$n, !![]);
      } else kc9sn2['onCreateImage'](vy603, c9k$n, !mv65a3);
    }, kc9sn2['onDownImgCallBack'] = function (_fo7jh, amd1u, tdm51) {
      if (!tdm51) kc9sn2['onCreateImage'](_fo7jh, amd1u);else amd1u['onError'](null);
    }, kc9sn2['onCreateImage'] = function (g$inq2, of8l_7, s8lc) {
      s8lc === void 0x0 && (s8lc = ![]);var u4t1d;if (!s8lc) {
        var zyr30 = wjhtd4['getFileInfo'](g$inq2),
            va53m6 = zyr30['md5'];u4t1d = wjhtd4['getFileNativePath'](va53m6);
      } else u4t1d = g$inq2;if (of8l_7['imgCache'] == null) of8l_7['imgCache'] = {};var _oj4f;function yerx0() {
        _oj4f['onload'] = null, _oj4f['onerror'] = null, delete of8l_7['imgCache'][g$inq2];
      };var ho4f_ = function () {
        yerx0(), of8l_7['onLoaded'](_oj4f);
      },
          eyr0z = function () {
        yerx0(), of8l_7['event']('error', 'Load image failed');
      };of8l_7['_type'] == 'nativeimage' ? (_oj4f = new $nk2i['window']['Image'](), _oj4f['crossOrigin'] = '', _oj4f['onload'] = ho4f_, _oj4f['onerror'] = eyr0z, _oj4f['src'] = u4t1d, of8l_7['imgCache'][g$inq2] = _oj4f) : new zxery0['create'](u4t1d, { 'onload': ho4f_, 'onerror': eyr0z, 'onCreate': function (_cs7l) {
          _oj4f = _cs7l, of8l_7['imgCache'][g$inq2] = _cs7l;
        } });
    }, kc9sn2;
  }(),
      tm1wu = function () {
    function f_oh() {}return v6r0(f_oh, 'laya.wx.mini.MiniInput'), f_oh['_createInputElement'] = function () {
      vyzr0['_initInput'](vyzr0['area'] = $nk2i['createElement']('textarea')), vyzr0['_initInput'](vyzr0['input'] = $nk2i['createElement']('input')), vyzr0['inputContainer'] = $nk2i['createElement']('div'), vyzr0['inputContainer']['style']['position'] = 'absolute', vyzr0['inputContainer']['style']['zIndex'] = 0x186a0, $nk2i['container']['appendChild'](vyzr0['inputContainer']), vyzr0['inputContainer']['setPos'] = function (ma53, yvzxr) {
        vyzr0['inputContainer']['style']['left'] = ma53 + 'px', vyzr0['inputContainer']['style']['top'] = yvzxr + 'px';
      }, a6y30['stage']['on']('resize', null, f_oh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_s7cl) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), r6v0['_soundClass'] = whfj4, r6v0['_musicClass'] = whfj4;
    }, f_oh['_onStageResize'] = function () {
      var o7_fl8 = a6y30['stage']['_canvasTransform']['identity']();o7_fl8['scale']($nk2i['width'] / howjf4['canvas']['width'] / fls8['getPixelRatio'](), $nk2i['height'] / howjf4['canvas']['height'] / fls8['getPixelRatio']());
    }, f_oh['wxinputFocus'] = function (uma56) {
      var n2c9s = vyzr0['inputElement']['target'];if (n2c9s && !n2c9s['editable']) return;twdh['window']['wx']['offKeyboardConfirm'](), twdh['window']['wx']['offKeyboardInput'](), twdh['window']['wx']['showKeyboard']({ 'defaultValue': n2c9s['text'], 'maxLength': n2c9s['maxChars'], 'multiple': n2c9s['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (l78c9) {}, 'fail': function (dtu4) {} }), twdh['window']['wx']['onKeyboardConfirm'](function (lf_s) {
        var jt4dwh = lf_s ? lf_s['value'] : '';n2c9s['text'] = jt4dwh, n2c9s['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), twdh['window']['wx']['onKeyboardInput'](function (cs2l9) {
        var ry3v0 = cs2l9 ? cs2l9['value'] : '';if (!n2c9s['multiline']) {
          if (ry3v0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n2c9s['text'] = ry3v0, n2c9s['event']('input');
      });
    }, f_oh['inputEnter'] = function () {
      vyzr0['inputElement']['target']['focus'] = ![];
    }, f_oh['wxinputblur'] = function () {
      f_oh['hideKeyboard']();
    }, f_oh['hideKeyboard'] = function () {
      twdh['window']['wx']['offKeyboardConfirm'](), twdh['window']['wx']['offKeyboardInput'](), twdh['window']['wx']['hideKeyboard']({ 'success': function (md1wut) {
          console['log']('隐藏键盘');
        }, 'fail': function (yrxvz0) {
          console['log']('隐藏键盘出错:' + (yrxvz0 ? yrxvz0['errMsg'] : ''));
        } });
    }, f_oh;
  }(),
      fjoh_4 = function () {
    function hf7jo_() {}v6r0(hf7jo_, 'laya.wx.mini.MiniLoader');var cs9 = hf7jo_['prototype'];return cs9['load'] = function (u15ma6, ayv063, kcls29, jh4otw, eyx0z) {
      kcls29 === void 0x0 && (kcls29 = !![]), eyx0z === void 0x0 && (eyx0z = ![]);var ls92ck = this;ls92ck['_url'] = u15ma6;if (u15ma6['indexOf']('data:image') === 0x0) ls92ck['_type'] = ayv063 = 'image';else ls92ck['_type'] = ayv063 || (ayv063 = ls92ck['getTypeFromUrl'](u15ma6));ls92ck['_cache'] = kcls29, ls92ck['_data'] = null;var wut1d = 'ascii';if (u15ma6['indexOf']('.fnt') != -0x1) wut1d = 'utf8';else ayv063 == 'arraybuffer' && (wut1d = '');;var hfoj7_ = inpq['getFileExtension'](u15ma6);if (hf7jo_['_fileTypeArr']['indexOf'](hfoj7_) != -0x1) twdh['EnvConfig']['load']['call'](this, u15ma6, ayv063, kcls29, jh4otw, eyx0z);else {
        if (!wjhtd4['getFileInfo'](u15ma6)) {
          if (u15ma6['indexOf']('layaNativeDir/') != -0x1) {
            if (twdh['isZiYu']) {
              var j4whot = wjhtd4['ziyuFileData'][u15ma6];ls92ck['onLoaded'](j4whot);return;
            } else {
              cosnole['log']('read read'), wjhtd4['read'](u15ma6, wut1d, new a0v6(hf7jo_, hf7jo_['onReadNativeCallBack'], [wut1d, u15ma6, ayv063, kcls29, jh4otw, eyx0z, ls92ck]));return;
            }
          }if (fj7_ho['rootPath'] == '') var gi2 = u15ma6;else gi2 = u15ma6['split'](fj7_ho['rootPath'])[0x0];u15ma6['indexOf']('http://') != -0x1 || u15ma6['indexOf']('https://') != -0x1 ? twdh['EnvConfig']['load']['call'](ls92ck, u15ma6, ayv063, kcls29, jh4otw, eyx0z) : wjhtd4['readFile'](gi2, wut1d, new a0v6(hf7jo_, hf7jo_['onReadNativeCallBack'], [wut1d, u15ma6, ayv063, kcls29, jh4otw, eyx0z, ls92ck]), u15ma6);
        } else twdh['EnvConfig']['load']['call'](this, u15ma6, ayv063, kcls29, jh4otw, eyx0z);
      }
    }, cs9['resMgrLoad'] = function (k$gn2i, gk$2ni, tu1m5, vr0xyz, tmd51u, ryzxv0, dtjw4h) {
      tu1m5 === void 0x0 && (tu1m5 = 0x0), vr0xyz === void 0x0 && (vr0xyz = ![]), tmd51u === void 0x0 && (tmd51u = ![]), ryzxv0 === void 0x0 && (ryzxv0 = 0x0), dtjw4h === void 0x0 && (dtjw4h = 0x3), k$gn2i['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k$gn2i), twdh['EnvConfig']['resMgrLoad'](k$gn2i, (nk2g9$, v63ma, _l7o8f) => {
        hf7jo_['prototype']['resMgrLoadCallBack'](nk2g9$, v63ma, _l7o8f, gk$2ni);
      }, tu1m5, vr0xyz, tmd51u, ryzxv0, dtjw4h);
    }, cs9['resMgrLoadCallBack'] = function (w1tu4, _8j7o, $q2ni, gq2n) {
      console['log']('buff:::', w1tu4, $q2ni, wjhtd4['fileNativeDir'] + '///' + wjhtd4['fileListName']), gq2n(w1tu4, _8j7o, $q2ni);
    }, cs9['clearRes'] = function (ng$2ki, o_fhj) {
      o_fhj === void 0x0 && (o_fhj = ![]);var a0v3y6 = this;a0v3y6['clearRes'](ng$2ki, o_fhj);var uwm1td = wjhtd4['getFileInfo'](ng$2ki);if (uwm1td && (ng$2ki['indexOf']('http://') != -0x1 || ng$2ki['indexOf']('https://') != -0x1)) {
        var rxv0zy = uwm1td['md5'],
            ck2n9s = wjhtd4['getFileNativePath'](rxv0zy);wjhtd4['remove'](ck2n9s);
      }
    }, hf7jo_['onReadNativeCallBack'] = function (sc_l7, y60vr, d4w1, ojw4fh, wu1md, $q2n, hjow4t, _8fjo, tm1du5) {
      ojw4fh === void 0x0 && (ojw4fh = !![]), $q2n === void 0x0 && ($q2n = ![]), _8fjo === void 0x0 && (_8fjo = 0x0);if (!_8fjo) {
        var kngi2;if (d4w1 == 'json' || d4w1 == 'atlas') kngi2 = twdh['getJson'](tm1du5['data']);else d4w1 == 'xml' ? kngi2 = inpq['parseXMLFromString'](tm1du5['data']) : kngi2 = tm1du5['data'];hjow4t['onLoaded'](kngi2), !twdh['isZiYu'] && twdh['isPosMsgYu'] && d4w1 != 'arraybuffer' && wx['postMessage']({ 'url': y60vr, 'data': kngi2, 'isLoad': !![] });
      } else _8fjo == 0x1 && twdh['EnvConfig']['load']['call'](hjow4t, y60vr, d4w1, ojw4fh, wu1md, $q2n);
    }, ht1d(hf7jo_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), hf7jo_;
  }(),
      wjhtd4 = function (qpgi$) {
    function $2qgin() {
      $2qgin['__super']['call'](this);;
    }return v6r0($2qgin, 'laya.wx.mini.MiniFileMgr', qpgi$), $2qgin['isLoadFile'] = function (ipngq$) {
      return $2qgin['_fileTypeArr']['indexOf'](ipngq$) != -0x1 ? !![] : ![];
    }, $2qgin['getFileInfo'] = function (dt1uwm) {
      var zy3rv0 = dt1uwm['split']('?')[0x0],
          um36a = $2qgin['filesListObj'][zy3rv0];if (um36a == null) return null;else return um36a;return null;
    }, $2qgin['onFileUpdate'] = function (f78_ol, l98s7c) {
      var slc7 = f78_ol['split']('/'),
          va36 = slc7[slc7['length'] - 0x1],
          sklc29 = $2qgin['getFileInfo'](l98s7c);if (sklc29 == null) $2qgin['onSaveFile'](l98s7c, va36);else {
        if (sklc29['readyUrl'] != l98s7c) $2qgin['remove'](va36, l98s7c);
      }
    }, $2qgin['exits'] = function (m165ua, i$gqn) {
      var hwfjo = $2qgin['getFileNativePath'](m165ua);$2qgin['fs']['getFileInfo']({ 'filePath': hwfjo, 'success': function (xey0z) {
          i$gqn != null && i$gqn['runWith']([0x0, xey0z]);
        }, 'fail': function (s_8) {
          i$gqn != null && i$gqn['runWith']([0x1, s_8]);
        } });
    }, $2qgin['read'] = function (cns2k, ht4dw, npgiq, d1u5) {
      ht4dw === void 0x0 && (ht4dw = 'ascill'), d1u5 === void 0x0 && (d1u5 = '');var yva5;d1u5 != '' ? yva5 = $2qgin['getFileNativePath'](cns2k) : yva5 = cns2k, $2qgin['fs']['readFile']({ 'filePath': yva5, 'encoding': ht4dw, 'success': function (dwut1m) {
          npgiq != null && npgiq['runWith']([0x0, dwut1m]);
        }, 'fail': function (nqi) {
          if (nqi && d1u5 != '') $2qgin['down'](d1u5, ht4dw, npgiq, d1u5);else npgiq != null && npgiq['runWith']([0x1]);
        } });
    }, $2qgin['readNativeFile'] = function (h4fj, zxy0v) {
      $2qgin['fs']['readFile']({ 'filePath': h4fj, 'encoding': '', 'success': function (wof4j) {
          zxy0v != null && zxy0v['runWith']([0x0]);
        }, 'fail': function (kn29g$) {
          zxy0v != null && zxy0v['runWith']([0x1]);
        } });
    }, $2qgin['down'] = function (ryxe0z, yrv063, k$nig2, $2nk9g) {
      yrv063 === void 0x0 && (yrv063 = 'ascill'), $2nk9g === void 0x0 && ($2nk9g = '');var wjhot = $2qgin['getFileNativePath']($2nk9g),
          jo4wh = $2qgin['wxdown']({ 'url': ryxe0z, 'filePath': wjhot, 'success': function (l8_cs7) {
          if (l8_cs7['statusCode'] === 0xc8) $2qgin['readFile'](l8_cs7['filePath'], yrv063, k$nig2, $2nk9g);
        }, 'fail': function (k92$n) {
          k$nig2 != null && k$nig2['runWith']([0x1, k92$n]);
        } });jo4wh['onProgressUpdate'](function (gi$npq) {
        k$nig2 != null && k$nig2['runWith']([0x2, gi$npq['progress']]);
      });
    }, $2qgin['readFile'] = function (v65am3, o7_fh, yv06, sl879) {
      o7_fh === void 0x0 && (o7_fh = 'ascill'), sl879 === void 0x0 && (sl879 = ''), $2qgin['fs']['readFile']({ 'filePath': v65am3, 'encoding': o7_fh, 'success': function ($ikgn2) {
          if (v65am3['indexOf']('http://') != -0x1 || v65am3['indexOf']('https://') != -0x1) $2qgin['onFileUpdate'](v65am3, sl879);yv06 != null && yv06['runWith']([0x0, $ikgn2]);
        }, 'fail': function (kcsl89) {
          if (kcsl89) yv06 != null && yv06['runWith']([0x1, kcsl89]);
        } });
    }, $2qgin['downImg'] = function (_f7h, wohfj, qgpni$) {
      qgpni$ === void 0x0 && (qgpni$ = '');var am516 = $2qgin['wxdown']({ 'url': _f7h, 'success': function (zx0eyr) {
          zx0eyr['statusCode'] === 0xc8 && $2qgin['copyFile'](zx0eyr['tempFilePath'], qgpni$, wohfj);
        }, 'fail': function (f78l) {
          wohfj != null && wohfj['runWith']([0x1, f78l]);
        } });
    }, $2qgin['copyFile'] = function (tm5d, ez0ryx, r30y) {
      var ua1d5m = tm5d['split']('/'),
          yzrx0 = ua1d5m[ua1d5m['length'] - 0x1],
          td15m = ez0ryx['split']('?')[0x0],
          um1d = $2qgin['getFileInfo'](ez0ryx),
          o7hfj = $2qgin['getFileNativePath'](yzrx0);$2qgin['fs']['copyFile']({ 'srcPath': tm5d, 'destPath': o7hfj, 'success': function (_lsc87) {
          if (!um1d) $2qgin['onSaveFile'](ez0ryx, yzrx0), r30y != null && r30y['runWith']([0x0]);else {
            if (um1d['readyUrl'] != ez0ryx) $2qgin['remove'](yzrx0, ez0ryx, r30y);
          }
        }, 'fail': function (ofj4hw) {
          r30y != null && r30y['runWith']([0x1, ofj4hw]);
        } });
    }, $2qgin['getFileNativePath'] = function (vz30) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vz30;
    }, $2qgin['remove'] = function (yvxz, s2l, tjd4) {
      s2l === void 0x0 && (s2l = '');var sl87f_ = $2qgin['getFileInfo'](s2l),
          t5umd = $2qgin['getFileNativePath'](sl87f_['md5']);a6y30['loader']['clearRes'](sl87f_['readyUrl']), $2qgin['fs']['unlink']({ 'filePath': t5umd, 'success': function (yr0zvx) {
          if (s2l != '') $2qgin['onSaveFile'](s2l, yvxz);tjd4 != null && tjd4['runWith']([0x0]);
        }, 'fail': function (clsk29) {} });
    }, $2qgin['onSaveFile'] = function (d5aum1, $gi2kn) {
      var t4d1wh = d5aum1['split']('?')[0x0];$2qgin['filesListObj'][t4d1wh] = { 'md5': $gi2kn, 'readyUrl': d5aum1 }, $2qgin['fs']['writeFile']({ 'filePath': $2qgin['fileNativeDir'] + '/' + $2qgin['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($2qgin['filesListObj']), 'success': function (t4whoj) {
          console['log']('写入测试测试成功：', t4whoj);
        }, 'fail': function (a63y0) {
          console['log']('写入测试测试失败：', a63y0);
        } });
    }, $2qgin['existDir'] = function (m1dwtu, a3v60y) {
      $2qgin['fs']['mkdir']({ 'dirPath': m1dwtu, 'success': function (hjdw4t) {
          a3v60y != null && a3v60y['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ma1u6) {
          if (ma1u6['errMsg']['indexOf']('file already exists') != -0x1) $2qgin['readSync']($2qgin['fileListName'], 'utf8', a3v60y);else a3v60y != null && a3v60y['runWith']([0x1, ma1u6]);
        } });
    }, $2qgin['readSync'] = function (cks92n, ck8s9, jo4fhw, jw4fo) {
      ck8s9 === void 0x0 && (ck8s9 = 'ascill'), jw4fo === void 0x0 && (jw4fo = '');var y563v = $2qgin['getFileNativePath'](cks92n),
          d14wtu;try {
        d14wtu = $2qgin['fs']['readFileSync'](y563v), jo4fhw != null && jo4fhw['runWith']([0x0, { 'data': d14wtu }]);
      } catch (d1twh4) {
        jo4fhw != null && jo4fhw['runWith']([0x1]);
      }
    }, $2qgin['readCache'] = function () {}, $2qgin['writeCache'] = function (gnqi2) {
      var uam15 = readyUrl['split']('?')[0x0];$2qgin['filesListObj'][uam15] = { 'md5': md5Name, 'readyUrl': readyUrl }, $2qgin['fs']['writeFile']({ 'filePath': $2qgin['fileNativeDir'] + '/' + $2qgin['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($2qgin['filesListObj']), 'success': function (iqn2g) {}, 'fail': function (c98s7l) {} });
    }, $2qgin['setNativeFileDir'] = function (t4d1wu) {
      $2qgin['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + t4d1wu;
    }, $2qgin['filesListObj'] = {}, $2qgin['fileNativeDir'] = null, $2qgin['fileListName'] = 'layaairfiles.txt', $2qgin['ziyuFileData'] = {}, ht1d($2qgin, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $2qgin;
  }(va36y5),
      whfj4 = function (x0ze) {
    function o_78j() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], o_78j['__super']['call'](this), this['_sound'] = o_78j['_createSound']();
    }v6r0(o_78j, 'laya.wx.mini.MiniSound', x0ze);var kn92g = o_78j['prototype'];return kn92g['load'] = function (yv0rzx) {
      var nig2q$ = this;yv0rzx = fj7_ho['formatURL'](yv0rzx), this['url'] = yv0rzx;if (o_78j['_audioCache'][yv0rzx]) {
        this['event']('complete');return;
      }function r306y() {
        if (o_78j['_null'] != undefined) nig2q$['_sound']['onCanplay'](o_78j['_null']), nig2q$['_sound']['onError'](o_78j['_null']);else try {
          nig2q$['_sound']['onCanplay'](null), nig2q$['_sound']['onError'](null), o_78j['_null'] = null;
        } catch (o87jf) {
          console['warn']('[wxmini] _clearSound:' + o87jf), nig2q$['_sound']['onCanplay'](y53va6), nig2q$['_sound']['onError'](y53va6), o_78j['_null'] = y53va6;
        }
      }function cl9s87() {
        r306y(), o_hj7['loaded'] = !![], o_hj7['event']('complete'), o_78j['_audioCache'][o_hj7['url']] = o_hj7;
      }function wh1(u56) {
        console['error']('errCode=' + u56['errCode'] + '  errMsg=' + u56['errMsg']), r306y(), o_hj7['event']('error');
      }function y53va6() {}this['_sound']['onCanplay'](cl9s87), this['_sound']['onError'](wh1), this['_sound']['src'] = yv0rzx;var o_hj7 = this;
    }, kn92g['play'] = function (t1mwud, ua15m) {
      t1mwud === void 0x0 && (t1mwud = 0x0), ua15m === void 0x0 && (ua15m = 0x0);var $gqin;if (this['url'] == r6v0['_tMusic']) {
        if (!o_78j['_musicAudio']) o_78j['_musicAudio'] = o_78j['_createSound']();$gqin = o_78j['_musicAudio'];
      } else $gqin = o_78j['_createSound']();$gqin['src'] = this['url'];var v6a03 = new muwd1($gqin);return v6a03['url'] = this['url'], v6a03['loops'] = ua15m, v6a03['startTime'] = t1mwud, v6a03['play'](), r6v0['addChannel'](v6a03), v6a03;
    }, kn92g['dispose'] = function () {
      var oht4wj = o_78j['_audioCache'][this['url']];oht4wj && (oht4wj['src'] = '', delete o_78j['_audioCache'][this['url']]);
    }, tw1hd4(0x0, kn92g, 'duration', function () {
      return this['_sound']['duration'];
    }), o_78j['_createSound'] = function () {
      return o_78j['_id']++, twdh['window']['wx']['createInnerAudioContext']();
    }, o_78j['_musicAudio'] = null, o_78j['_id'] = 0x0, o_78j['_audioCache'] = {}, o_78j['_null'] = undefined, o_78j;
  }(va36y5),
      muwd1 = function (k2$g) {
    function mu3a65(dmuwt) {
      this['_audio'] = null, this['_onEnd'] = null, mu3a65['__super']['call'](this), this['_audio'] = dmuwt, this['_onEnd'] = inpq['bind'](this['__onEnd'], this), dmuwt['onEnded'](this['_onEnd']);
    }v6r0(mu3a65, 'laya.wx.mini.MiniSoundChannel', k2$g);var i$n2qg = mu3a65['prototype'];return i$n2qg['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (a6y30['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, i$n2qg['__onNull'] = function () {}, i$n2qg['play'] = function () {
      this['isStopped'] = ![], r6v0['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, i$n2qg['stop'] = function () {
      this['isStopped'] = !![], r6v0['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (mu3a65['_null'] != undefined) this['_audio']['onEnded'](mu3a65['_null']);else try {
        this['_audio']['onEnded'](null), mu3a65['_null'] = null;
      } catch (htjo) {
        console['warn']('[wxmini] stop:' + htjo), this['_audio']['onEnded'](inpq['bind'](this['__onNull'], this)), mu3a65['_null'] = inpq['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, i$n2qg['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, i$n2qg['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], r6v0['addChannel'](this), this['_audio']['play']();
    }, tw1hd4(0x0, i$n2qg, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), tw1hd4(0x0, i$n2qg, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), tw1hd4(0x0, i$n2qg, 'volume', function () {
      return 0x1;
    }, function (u1md5a) {}), mu3a65['_null'] = undefined, mu3a65;
  }(r0xeyz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var king2$ in Laya) {
    var um36a5 = Laya[king2$];um36a5 && um36a5['__isclass'] && (exports[king2$] = um36a5);
  }
});