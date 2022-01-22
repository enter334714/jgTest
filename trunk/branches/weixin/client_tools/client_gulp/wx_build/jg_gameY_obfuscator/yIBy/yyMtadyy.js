var a = wx.$y;
(function (window, document, w4tj) {
  var t4wdu = w4tj['un'],
      nk9g$ = w4tj['uns'],
      _7fo8l = w4tj['static'],
      v3a6 = w4tj['class'],
      jh4tow = w4tj['getset'],
      g$9 = w4tj['__newvec'],
      am53v6 = laya['utils']['Browser'],
      tdh4w1 = laya['events']['Event'],
      t1dwu4 = laya['events']['EventDispatcher'],
      kn9c2 = laya['resource']['HTMLImage'],
      tw4du = laya['utils']['Handler'],
      cnk29 = laya['display']['Input'],
      lo7_8f = laya['net']['Loader'],
      rzy0xe = laya['maths']['Matrix'],
      w1t4u = laya['renders']['Render'],
      z3yrv = laya['utils']['RunDriver'],
      _h4jf = laya['media']['Sound'],
      whd4 = laya['media']['SoundChannel'],
      yv3r0z = laya['media']['SoundManager'],
      n$kig2 = laya['display']['Stage'],
      dw4jht = laya['net']['URL'],
      mt5du = laya['utils']['Utils'],
      _slf8 = function () {
    function l87_of() {}return v3a6(l87_of, 'laya.wx.mini.MiniAdpter'), l87_of['getJson'] = function (tmud15) {
      return JSON['parse'](tmud15);
    }, l87_of['init'] = function (hof4jw, utw4) {
      hof4jw === void 0x0 && (hof4jw = ![]), utw4 === void 0x0 && (utw4 = ![]);if (l87_of['_inited']) return;l87_of['window'] = window;if (l87_of['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;l87_of['_inited'] = !![], l87_of['isZiYu'] = utw4, l87_of['isPosMsgYu'] = hof4jw, l87_of['EnvConfig'] = {}, !l87_of['isZiYu'] && (u5d1mt['setNativeFileDir']('/layaairGame'), u5d1mt['existDir'](u5d1mt['fileNativeDir'], tw4du['create'](l87_of, l87_of['onMkdirCallBack']))), l87_of['window']['focus'] = function () {}, w4tj['getUrlPath'] = function () {}, l87_of['window']['logtime'] = function (rzvy03) {}, l87_of['window']['alertTimeLog'] = function (ngk$29) {}, l87_of['window']['resetShareInfo'] = function () {}, l87_of['window']['CanvasRenderingContext2D'] = function () {}, l87_of['window']['CanvasRenderingContext2D']['prototype'] = l87_of['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], l87_of['window']['document']['body']['appendChild'] = function () {}, l87_of['EnvConfig']['pixelRatioInt'] = 0x0, z3yrv['getPixelRatio'] = l87_of['pixelRatio'], l87_of['_preCreateElement'] = am53v6['createElement'], am53v6['createElement'] = l87_of['createElement'], z3yrv['createShaderCondition'] = l87_of['createShaderCondition'], mt5du['parseXMLFromString'] = l87_of['parseXMLFromString'], cnk29['_createInputElement'] = f_o8j['_createInputElement'], l87_of['EnvConfig']['load'] = lo7_8f['prototype']['load'], lo7_8f['prototype']['load'] = _7l8['prototype']['load'], l87_of['isZiYu'] && hof4jw && wx['onMessage'](function (ud15tm) {
        ud15tm['isLoad'] && (u5d1mt['ziyuFileData'][ud15tm['url']] = ud15tm['data']);
      });
    }, l87_of['onMkdirCallBack'] = function (gi$q, mva365) {
      if (!gi$q) u5d1mt['filesListObj'] = JSON['parse'](mva365['data']);
    }, l87_of['pixelRatio'] = function () {
      if (!l87_of['EnvConfig']['pixelRatioInt']) try {
        var zx0ry = wx['getSystemInfoSync']();return l87_of['EnvConfig']['pixelRatioInt'] = zx0ry['pixelRatio'], zx0ry = zx0ry, zx0ry['pixelRatio'];
      } catch (fo7_l) {}return l87_of['EnvConfig']['pixelRatioInt'];
    }, l87_of['createElement'] = function (tjo4h) {
      if (tjo4h == 'canvas') {
        var gk2i$;return l87_of['idx'] == 0x1 ? l87_of['isZiYu'] ? (gk2i$ = sharedCanvas, gk2i$['style'] = {}) : gk2i$ = window['canvas'] : gk2i$ = window['wx']['createCanvas'](), l87_of['idx']++, gk2i$;
      } else {
        if (tjo4h == 'textarea' || tjo4h == 'input') return l87_of['onCreateInput'](tjo4h);else {
          if (tjo4h == 'div') {
            var v35ya = l87_of['_preCreateElement'](tjo4h);return v35ya['contains'] = function (dm1au5) {
              return null;
            }, v35ya['removeChild'] = function (ezxyr0) {}, v35ya;
          } else return l87_of['_preCreateElement'](tjo4h);
        }
      }
    }, l87_of['onCreateInput'] = function (o78_f) {
      var _jhfo = l87_of['_preCreateElement'](o78_f);return _jhfo['focus'] = f_o8j['wxinputFocus'], _jhfo['blur'] = f_o8j['wxinputblur'], _jhfo['style'] = {}, _jhfo['value'] = 0x0, _jhfo['parentElement'] = {}, _jhfo['placeholder'] = {}, _jhfo['type'] = {}, _jhfo['setColor'] = function (m63av5) {}, _jhfo['setType'] = function (q2ngi) {}, _jhfo['setFontFace'] = function (kcls8) {}, _jhfo['addEventListener'] = function (um651a) {}, _jhfo['contains'] = function (tuw1d4) {
        return null;
      }, _jhfo['removeChild'] = function (ud4wt1) {}, _jhfo;
    }, l87_of['createShaderCondition'] = function (ry0z3v) {
      var g2nq$i = this,
          l2ck9s = function () {
        var umt1d5 = ry0z3v;return g2nq$i[ry0z3v['replace']('this.', '')];
      };return l2ck9s;
    }, l87_of['EnvConfig'] = null, l87_of['window'] = null, l87_of['_preCreateElement'] = null, l87_of['_inited'] = ![], l87_of['wxRequest'] = null, l87_of['systemInfo'] = null, l87_of['version'] = '0.0.1', l87_of['isZiYu'] = ![], l87_of['isPosMsgYu'] = ![], l87_of['parseXMLFromString'] = function (tw4djh) {
      var ud5t1, sl78_;tw4djh = tw4djh['replace'](/>\s+</g, '><');try {
        ud5t1 = new window['Parser']['DOMParser']()['parseFromString'](tw4djh, 'text/xml');
      } catch (jhdw) {
        throw '需要引入xml解析库文件';
      }return ud5t1;
    }, l87_of['idx'] = 0x1, l87_of;
  }(),
      gk$n9 = function () {
    function ck$n29() {}v3a6(ck$n29, 'laya.wx.mini.MiniImage');var zrx0 = ck$n29['prototype'];return zrx0['_loadImage'] = function (_7fs) {
      var vy56a3 = this,
          sc9l2k = ![];_7fs['indexOf']('layaNativeDir/') == -0x1 && (sc9l2k = !![], _7fs = dw4jht['formatURL'](_7fs));if (!u5d1mt['getFileInfo'](_7fs)) {
        if (_7fs['indexOf']('http://') != -0x1 || _7fs['indexOf']('https://') != -0x1) u5d1mt['downImg'](_7fs, new tw4du(ck$n29, ck$n29['onDownImgCallBack'], [_7fs, vy56a3]), _7fs);else ck$n29['onCreateImage'](_7fs, vy56a3, !![]);
      } else ck$n29['onCreateImage'](_7fs, vy56a3, !sc9l2k);
    }, ck$n29['onDownImgCallBack'] = function (xzryv, s7l9c8, mu56a3) {
      if (!mu56a3) ck$n29['onCreateImage'](xzryv, s7l9c8);else s7l9c8['onError'](null);
    }, ck$n29['onCreateImage'] = function (otjhw, $kngi2, v5a36y) {
      v5a36y === void 0x0 && (v5a36y = ![]);var v65ay;if (!v5a36y) {
        var mva653 = u5d1mt['getFileInfo'](otjhw),
            xyz0r = mva653['md5'];v65ay = u5d1mt['getFileNativePath'](xyz0r);
      } else v65ay = otjhw;if ($kngi2['imgCache'] == null) $kngi2['imgCache'] = {};var hojtw4;function ck98l() {
        hojtw4['onload'] = null, hojtw4['onerror'] = null, delete $kngi2['imgCache'][otjhw];
      };var s9l8 = function () {
        ck98l(), $kngi2['onLoaded'](hojtw4);
      },
          rv03 = function () {
        ck98l(), $kngi2['event']('error', 'Load image failed');
      };$kngi2['_type'] == 'nativeimage' ? (hojtw4 = new am53v6['window']['Image'](), hojtw4['crossOrigin'] = '', hojtw4['onload'] = s9l8, hojtw4['onerror'] = rv03, hojtw4['src'] = v65ay, $kngi2['imgCache'][otjhw] = hojtw4) : new kn9c2['create'](v65ay, { 'onload': s9l8, 'onerror': rv03, 'onCreate': function ($2nik) {
          hojtw4 = $2nik, $kngi2['imgCache'][otjhw] = $2nik;
        } });
    }, ck$n29;
  }(),
      f_o8j = function () {
    function o8jf7_() {}return v3a6(o8jf7_, 'laya.wx.mini.MiniInput'), o8jf7_['_createInputElement'] = function () {
      cnk29['_initInput'](cnk29['area'] = am53v6['createElement']('textarea')), cnk29['_initInput'](cnk29['input'] = am53v6['createElement']('input')), cnk29['inputContainer'] = am53v6['createElement']('div'), cnk29['inputContainer']['style']['position'] = 'absolute', cnk29['inputContainer']['style']['zIndex'] = 0x186a0, am53v6['container']['appendChild'](cnk29['inputContainer']), cnk29['inputContainer']['setPos'] = function (tjdhw, zy3vr) {
        cnk29['inputContainer']['style']['left'] = tjdhw + 'px', cnk29['inputContainer']['style']['top'] = zy3vr + 'px';
      }, w4tj['stage']['on']('resize', null, o8jf7_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (h_7f) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yv3r0z['_soundClass'] = jhdtw, yv3r0z['_musicClass'] = jhdtw;
    }, o8jf7_['_onStageResize'] = function () {
      var wt1du = w4tj['stage']['_canvasTransform']['identity']();wt1du['scale'](am53v6['width'] / w1t4u['canvas']['width'] / z3yrv['getPixelRatio'](), am53v6['height'] / w1t4u['canvas']['height'] / z3yrv['getPixelRatio']());
    }, o8jf7_['wxinputFocus'] = function (n2q$) {
      var skcl8 = cnk29['inputElement']['target'];if (skcl8 && !skcl8['editable']) return;_slf8['window']['wx']['offKeyboardConfirm'](), _slf8['window']['wx']['offKeyboardInput'](), _slf8['window']['wx']['showKeyboard']({ 'defaultValue': skcl8['text'], 'maxLength': skcl8['maxChars'], 'multiple': skcl8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (y03rv6) {}, 'fail': function (s9knc) {} }), _slf8['window']['wx']['onKeyboardConfirm'](function (cn9) {
        var clk98s = cn9 ? cn9['value'] : '';skcl8['text'] = clk98s, skcl8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _slf8['window']['wx']['onKeyboardInput'](function (scl2k9) {
        var f8ol_ = scl2k9 ? scl2k9['value'] : '';if (!skcl8['multiline']) {
          if (f8ol_['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }skcl8['text'] = f8ol_, skcl8['event']('input');
      });
    }, o8jf7_['inputEnter'] = function () {
      cnk29['inputElement']['target']['focus'] = ![];
    }, o8jf7_['wxinputblur'] = function () {
      o8jf7_['hideKeyboard']();
    }, o8jf7_['hideKeyboard'] = function () {
      _slf8['window']['wx']['offKeyboardConfirm'](), _slf8['window']['wx']['offKeyboardInput'](), _slf8['window']['wx']['hideKeyboard']({ 'success': function (wjh) {
          console['log']('隐藏键盘');
        }, 'fail': function (m53av) {
          console['log']('隐藏键盘出错:' + (m53av ? m53av['errMsg'] : ''));
        } });
    }, o8jf7_;
  }(),
      _7l8 = function () {
    function umtwd() {}v3a6(umtwd, 'laya.wx.mini.MiniLoader');var lk8c9 = umtwd['prototype'];return lk8c9['load'] = function (uwtm1d, _4ohf, _4oh, m65, _slc) {
      _4oh === void 0x0 && (_4oh = !![]), _slc === void 0x0 && (_slc = ![]);var sf_78l = this;sf_78l['_url'] = uwtm1d;if (uwtm1d['indexOf']('data:image') === 0x0) sf_78l['_type'] = _4ohf = 'image';else sf_78l['_type'] = _4ohf || (_4ohf = sf_78l['getTypeFromUrl'](uwtm1d));sf_78l['_cache'] = _4oh, sf_78l['_data'] = null;var csn2 = 'ascii';if (uwtm1d['indexOf']('.fnt') != -0x1) csn2 = 'utf8';else _4ohf == 'arraybuffer' && (csn2 = '');;var wtmud1 = mt5du['getFileExtension'](uwtm1d);if (umtwd['_fileTypeArr']['indexOf'](wtmud1) != -0x1) _slf8['EnvConfig']['load']['call'](this, uwtm1d, _4ohf, _4oh, m65, _slc);else {
        if (!u5d1mt['getFileInfo'](uwtm1d)) {
          if (uwtm1d['indexOf']('layaNativeDir/') != -0x1) {
            if (_slf8['isZiYu']) {
              var t4dwu = u5d1mt['ziyuFileData'][uwtm1d];sf_78l['onLoaded'](t4dwu);return;
            } else {
              cosnole['log']('read read'), u5d1mt['read'](uwtm1d, csn2, new tw4du(umtwd, umtwd['onReadNativeCallBack'], [csn2, uwtm1d, _4ohf, _4oh, m65, _slc, sf_78l]));return;
            }
          }if (dw4jht['rootPath'] == '') var ls_78f = uwtm1d;else ls_78f = uwtm1d['split'](dw4jht['rootPath'])[0x0];uwtm1d['indexOf']('http://') != -0x1 || uwtm1d['indexOf']('https://') != -0x1 ? _slf8['EnvConfig']['load']['call'](sf_78l, uwtm1d, _4ohf, _4oh, m65, _slc) : u5d1mt['readFile'](ls_78f, csn2, new tw4du(umtwd, umtwd['onReadNativeCallBack'], [csn2, uwtm1d, _4ohf, _4oh, m65, _slc, sf_78l]), uwtm1d);
        } else _slf8['EnvConfig']['load']['call'](this, uwtm1d, _4ohf, _4oh, m65, _slc);
      }
    }, lk8c9['resMgrLoad'] = function (pgqn$, slc_7, _c7s8l, pgq, _foh, o_f7jh, qg2ni$) {
      _c7s8l === void 0x0 && (_c7s8l = 0x0), pgq === void 0x0 && (pgq = ![]), _foh === void 0x0 && (_foh = ![]), o_f7jh === void 0x0 && (o_f7jh = 0x0), qg2ni$ === void 0x0 && (qg2ni$ = 0x3), pgqn$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pgqn$), _slf8['EnvConfig']['resMgrLoad'](pgqn$, (tum1dw, hwt14d, nqgi$p) => {
        umtwd['prototype']['resMgrLoadCallBack'](tum1dw, hwt14d, nqgi$p, slc_7);
      }, _c7s8l, pgq, _foh, o_f7jh, qg2ni$);
    }, lk8c9['resMgrLoadCallBack'] = function (g$qpn, hj4o_, zxeyr, j8o7f) {
      console['log']('buff:::', g$qpn, zxeyr, u5d1mt['fileNativeDir'] + '///' + u5d1mt['fileListName']), j8o7f(g$qpn, hj4o_, zxeyr);
    }, lk8c9['clearRes'] = function (jhof4_, vzx) {
      vzx === void 0x0 && (vzx = ![]);var f_7s8l = this;f_7s8l['clearRes'](jhof4_, vzx);var v36a0y = u5d1mt['getFileInfo'](jhof4_);if (v36a0y && (jhof4_['indexOf']('http://') != -0x1 || jhof4_['indexOf']('https://') != -0x1)) {
        var v36ay = v36a0y['md5'],
            dthw4 = u5d1mt['getFileNativePath'](v36ay);u5d1mt['remove'](dthw4);
      }
    }, umtwd['onReadNativeCallBack'] = function (s78fl, k92csl, mdau5, d1u5ma, d4uw, i$gpnq, $kn9c2, ry306, wjoth) {
      d1u5ma === void 0x0 && (d1u5ma = !![]), i$gpnq === void 0x0 && (i$gpnq = ![]), ry306 === void 0x0 && (ry306 = 0x0);if (!ry306) {
        var w1u4t;if (mdau5 == 'json' || mdau5 == 'atlas') w1u4t = _slf8['getJson'](wjoth['data']);else mdau5 == 'xml' ? w1u4t = mt5du['parseXMLFromString'](wjoth['data']) : w1u4t = wjoth['data'];$kn9c2['onLoaded'](w1u4t), !_slf8['isZiYu'] && _slf8['isPosMsgYu'] && mdau5 != 'arraybuffer' && wx['postMessage']({ 'url': k92csl, 'data': w1u4t, 'isLoad': !![] });
      } else ry306 == 0x1 && _slf8['EnvConfig']['load']['call']($kn9c2, k92csl, mdau5, d1u5ma, d4uw, i$gpnq);
    }, _7fo8l(umtwd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), umtwd;
  }(),
      u5d1mt = function (nq$2gi) {
    function kng$i() {
      kng$i['__super']['call'](this);;
    }return v3a6(kng$i, 'laya.wx.mini.MiniFileMgr', nq$2gi), kng$i['isLoadFile'] = function (vzxy) {
      return kng$i['_fileTypeArr']['indexOf'](vzxy) != -0x1 ? !![] : ![];
    }, kng$i['getFileInfo'] = function (thw4) {
      var $pgqni = thw4['split']('?')[0x0],
          n2c9 = kng$i['filesListObj'][$pgqni];if (n2c9 == null) return null;else return n2c9;return null;
    }, kng$i['onFileUpdate'] = function (cs9k8l, z30rvy) {
      var hj4_f = cs9k8l['split']('/'),
          in$p = hj4_f[hj4_f['length'] - 0x1],
          _78fs = kng$i['getFileInfo'](z30rvy);if (_78fs == null) kng$i['onSaveFile'](z30rvy, in$p);else {
        if (_78fs['readyUrl'] != z30rvy) kng$i['remove'](in$p, z30rvy);
      }
    }, kng$i['exits'] = function (d5am1u, lk8c) {
      var ex0ry = kng$i['getFileNativePath'](d5am1u);kng$i['fs']['getFileInfo']({ 'filePath': ex0ry, 'success': function (zxrv) {
          lk8c != null && lk8c['runWith']([0x0, zxrv]);
        }, 'fail': function (ng$ki2) {
          lk8c != null && lk8c['runWith']([0x1, ng$ki2]);
        } });
    }, kng$i['read'] = function (i2gkn, _ls7f8, eryx0, m61ua5) {
      _ls7f8 === void 0x0 && (_ls7f8 = 'ascill'), m61ua5 === void 0x0 && (m61ua5 = '');var kig$2;m61ua5 != '' ? kig$2 = kng$i['getFileNativePath'](i2gkn) : kig$2 = i2gkn, kng$i['fs']['readFile']({ 'filePath': kig$2, 'encoding': _ls7f8, 'success': function (nig$2q) {
          eryx0 != null && eryx0['runWith']([0x0, nig$2q]);
        }, 'fail': function (yv0xrz) {
          if (yv0xrz && m61ua5 != '') kng$i['down'](m61ua5, _ls7f8, eryx0, m61ua5);else eryx0 != null && eryx0['runWith']([0x1]);
        } });
    }, kng$i['readNativeFile'] = function (ngi$k2, y5va63) {
      kng$i['fs']['readFile']({ 'filePath': ngi$k2, 'encoding': '', 'success': function (ngq$pi) {
          y5va63 != null && y5va63['runWith']([0x0]);
        }, 'fail': function (hj4wto) {
          y5va63 != null && y5va63['runWith']([0x1]);
        } });
    }, kng$i['down'] = function (d1a, zeryx0, zyv3, ma35) {
      zeryx0 === void 0x0 && (zeryx0 = 'ascill'), ma35 === void 0x0 && (ma35 = '');var l_sc = kng$i['getFileNativePath'](ma35),
          sfl_ = kng$i['wxdown']({ 'url': d1a, 'filePath': l_sc, 'success': function (dwt14u) {
          if (dwt14u['statusCode'] === 0xc8) kng$i['readFile'](dwt14u['filePath'], zeryx0, zyv3, ma35);
        }, 'fail': function (ks9c2l) {
          zyv3 != null && zyv3['runWith']([0x1, ks9c2l]);
        } });sfl_['onProgressUpdate'](function (t5mu1) {
        zyv3 != null && zyv3['runWith']([0x2, t5mu1['progress']]);
      });
    }, kng$i['readFile'] = function (am15d, j7ohf, l_o7f, vxr0z) {
      j7ohf === void 0x0 && (j7ohf = 'ascill'), vxr0z === void 0x0 && (vxr0z = ''), kng$i['fs']['readFile']({ 'filePath': am15d, 'encoding': j7ohf, 'success': function (jwt4dh) {
          if (am15d['indexOf']('http://') != -0x1 || am15d['indexOf']('https://') != -0x1) kng$i['onFileUpdate'](am15d, vxr0z);l_o7f != null && l_o7f['runWith']([0x0, jwt4dh]);
        }, 'fail': function (_f) {
          if (_f) l_o7f != null && l_o7f['runWith']([0x1, _f]);
        } });
    }, kng$i['downImg'] = function (h4jwf, zv0yr3, $npgqi) {
      $npgqi === void 0x0 && ($npgqi = '');var z3r0yv = kng$i['wxdown']({ 'url': h4jwf, 'success': function (vyz30) {
          vyz30['statusCode'] === 0xc8 && kng$i['copyFile'](vyz30['tempFilePath'], $npgqi, zv0yr3);
        }, 'fail': function (r0yzv) {
          zv0yr3 != null && zv0yr3['runWith']([0x1, r0yzv]);
        } });
    }, kng$i['copyFile'] = function (zv0y, q$np, $gqpn) {
      var vz3ry = zv0y['split']('/'),
          kgn92$ = vz3ry[vz3ry['length'] - 0x1],
          a6m1u5 = q$np['split']('?')[0x0],
          f7ojh = kng$i['getFileInfo'](q$np),
          tdmu1w = kng$i['getFileNativePath'](kgn92$);kng$i['fs']['copyFile']({ 'srcPath': zv0y, 'destPath': tdmu1w, 'success': function (f7_o8l) {
          if (!f7ojh) kng$i['onSaveFile'](q$np, kgn92$), $gqpn != null && $gqpn['runWith']([0x0]);else {
            if (f7ojh['readyUrl'] != q$np) kng$i['remove'](kgn92$, q$np, $gqpn);
          }
        }, 'fail': function (csn) {
          $gqpn != null && $gqpn['runWith']([0x1, csn]);
        } });
    }, kng$i['getFileNativePath'] = function (v0x) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v0x;
    }, kng$i['remove'] = function (l8s9kc, h4ofjw, $k92cn) {
      h4ofjw === void 0x0 && (h4ofjw = '');var yx0r = kng$i['getFileInfo'](h4ofjw),
          y0rxv = kng$i['getFileNativePath'](yx0r['md5']);w4tj['loader']['clearRes'](yx0r['readyUrl']), kng$i['fs']['unlink']({ 'filePath': y0rxv, 'success': function (jo4fh_) {
          if (h4ofjw != '') kng$i['onSaveFile'](h4ofjw, l8s9kc);$k92cn != null && $k92cn['runWith']([0x0]);
        }, 'fail': function (d5mua) {} });
    }, kng$i['onSaveFile'] = function (yz0xre, l8sf7) {
      var wt4u1d = yz0xre['split']('?')[0x0];kng$i['filesListObj'][wt4u1d] = { 'md5': l8sf7, 'readyUrl': yz0xre }, kng$i['fs']['writeFile']({ 'filePath': kng$i['fileNativeDir'] + '/' + kng$i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kng$i['filesListObj']), 'success': function (n$igp) {
          console['log']('写入测试测试成功：', n$igp);
        }, 'fail': function (jowf) {
          console['log']('写入测试测试失败：', jowf);
        } });
    }, kng$i['existDir'] = function (csk92l, wmu1) {
      kng$i['fs']['mkdir']({ 'dirPath': csk92l, 'success': function (f8_7ol) {
          wmu1 != null && wmu1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g$i2n) {
          if (g$i2n['errMsg']['indexOf']('file already exists') != -0x1) kng$i['readSync'](kng$i['fileListName'], 'utf8', wmu1);else wmu1 != null && wmu1['runWith']([0x1, g$i2n]);
        } });
    }, kng$i['readSync'] = function (k2n9sc, d5t1mu, u41td, x0zyre) {
      d5t1mu === void 0x0 && (d5t1mu = 'ascill'), x0zyre === void 0x0 && (x0zyre = '');var sf87_l = kng$i['getFileNativePath'](k2n9sc),
          g9$n2k;try {
        g9$n2k = kng$i['fs']['readFileSync'](sf87_l), u41td != null && u41td['runWith']([0x0, { 'data': g9$n2k }]);
      } catch (wthjo) {
        u41td != null && u41td['runWith']([0x1]);
      }
    }, kng$i['readCache'] = function () {}, kng$i['writeCache'] = function (_hfo4j) {
      var erzxy = readyUrl['split']('?')[0x0];kng$i['filesListObj'][erzxy] = { 'md5': md5Name, 'readyUrl': readyUrl }, kng$i['fs']['writeFile']({ 'filePath': kng$i['fileNativeDir'] + '/' + kng$i['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kng$i['filesListObj']), 'success': function (aud15m) {}, 'fail': function (ns2kc) {} });
    }, kng$i['setNativeFileDir'] = function (d15umt) {
      kng$i['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d15umt;
    }, kng$i['filesListObj'] = {}, kng$i['fileNativeDir'] = null, kng$i['fileListName'] = 'layaairfiles.txt', kng$i['ziyuFileData'] = {}, _7fo8l(kng$i, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kng$i;
  }(t1dwu4),
      jhdtw = function (k2ng9) {
    function sc78_l() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sc78_l['__super']['call'](this), this['_sound'] = sc78_l['_createSound']();
    }v3a6(sc78_l, 'laya.wx.mini.MiniSound', k2ng9);var $k2gin = sc78_l['prototype'];return $k2gin['load'] = function (y0ezx) {
      var a5ud1m = this;y0ezx = dw4jht['formatURL'](y0ezx), this['url'] = y0ezx;if (sc78_l['_audioCache'][y0ezx]) {
        this['event']('complete');return;
      }function r0zxye() {
        if (sc78_l['_null'] != undefined) a5ud1m['_sound']['onCanplay'](sc78_l['_null']), a5ud1m['_sound']['onError'](sc78_l['_null']);else try {
          a5ud1m['_sound']['onCanplay'](null), a5ud1m['_sound']['onError'](null), sc78_l['_null'] = null;
        } catch (l7sf_8) {
          console['warn']('[wxmini] _clearSound:' + l7sf_8), a5ud1m['_sound']['onCanplay'](i$gnk2), a5ud1m['_sound']['onError'](i$gnk2), sc78_l['_null'] = i$gnk2;
        }
      }function xyv0z() {
        r0zxye(), fl7s_8['loaded'] = !![], fl7s_8['event']('complete'), sc78_l['_audioCache'][fl7s_8['url']] = fl7s_8;
      }function iqngp(jt4h) {
        console['error']('errCode=' + jt4h['errCode'] + '  errMsg=' + jt4h['errMsg']), r0zxye(), fl7s_8['event']('error');
      }function i$gnk2() {}this['_sound']['onCanplay'](xyv0z), this['_sound']['onError'](iqngp), this['_sound']['src'] = y0ezx;var fl7s_8 = this;
    }, $k2gin['play'] = function (c_s87l, t15md) {
      c_s87l === void 0x0 && (c_s87l = 0x0), t15md === void 0x0 && (t15md = 0x0);var ikg2n;if (this['url'] == yv3r0z['_tMusic']) {
        if (!sc78_l['_musicAudio']) sc78_l['_musicAudio'] = sc78_l['_createSound']();ikg2n = sc78_l['_musicAudio'];
      } else ikg2n = sc78_l['_createSound']();ikg2n['src'] = this['url'];var r3vy0z = new hjwfo(ikg2n);return r3vy0z['url'] = this['url'], r3vy0z['loops'] = t15md, r3vy0z['startTime'] = c_s87l, r3vy0z['play'](), yv3r0z['addChannel'](r3vy0z), r3vy0z;
    }, $k2gin['dispose'] = function () {
      var s89ck = sc78_l['_audioCache'][this['url']];s89ck && (s89ck['src'] = '', delete sc78_l['_audioCache'][this['url']]);
    }, jh4tow(0x0, $k2gin, 'duration', function () {
      return this['_sound']['duration'];
    }), sc78_l['_createSound'] = function () {
      return sc78_l['_id']++, _slf8['window']['wx']['createInnerAudioContext']();
    }, sc78_l['_musicAudio'] = null, sc78_l['_id'] = 0x0, sc78_l['_audioCache'] = {}, sc78_l['_null'] = undefined, sc78_l;
  }(t1dwu4),
      hjwfo = function (xz) {
    function c7l8s(jthw) {
      this['_audio'] = null, this['_onEnd'] = null, c7l8s['__super']['call'](this), this['_audio'] = jthw, this['_onEnd'] = mt5du['bind'](this['__onEnd'], this), jthw['onEnded'](this['_onEnd']);
    }v3a6(c7l8s, 'laya.wx.mini.MiniSoundChannel', xz);var hf_oj = c7l8s['prototype'];return hf_oj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (w4tj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hf_oj['__onNull'] = function () {}, hf_oj['play'] = function () {
      this['isStopped'] = ![], yv3r0z['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hf_oj['stop'] = function () {
      this['isStopped'] = !![], yv3r0z['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (c7l8s['_null'] != undefined) this['_audio']['onEnded'](c7l8s['_null']);else try {
        this['_audio']['onEnded'](null), c7l8s['_null'] = null;
      } catch (fj_h) {
        console['warn']('[wxmini] stop:' + fj_h), this['_audio']['onEnded'](mt5du['bind'](this['__onNull'], this)), c7l8s['_null'] = mt5du['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hf_oj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hf_oj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yv3r0z['addChannel'](this), this['_audio']['play']();
    }, jh4tow(0x0, hf_oj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), jh4tow(0x0, hf_oj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), jh4tow(0x0, hf_oj, 'volume', function () {
      return 0x1;
    }, function ($2k9ng) {}), c7l8s['_null'] = undefined, c7l8s;
  }(whd4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wf4hoj in Laya) {
    var ki2$n = Laya[wf4hoj];ki2$n && ki2$n['__isclass'] && (exports[wf4hoj] = ki2$n);
  }
});