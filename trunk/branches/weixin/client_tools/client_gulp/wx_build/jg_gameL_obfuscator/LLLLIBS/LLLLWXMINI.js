var W = wx.$l;
(function (window, document, evg6u) {
  var ov1eg = evg6u['un'],
      ove9 = evg6u['uns'],
      zlkjq = evg6u['static'],
      ft5zlq = evg6u['class'],
      qzhl = evg6u['getset'],
      d2jbk = evg6u['__newvec'],
      s$48n = laya['utils']['Browser'],
      jqlzht = laya['events']['Event'],
      gv71 = laya['events']['EventDispatcher'],
      s84n = laya['resource']['HTMLImage'],
      vof791 = laya['utils']['Handler'],
      ug1pe = laya['display']['Input'],
      d8_4s$ = laya['net']['Loader'],
      n4yx_ = laya['maths']['Matrix'],
      g16u = laya['renders']['Render'],
      o5t9f7 = laya['utils']['RunDriver'],
      qkhjzl = laya['media']['Sound'],
      _sn48 = laya['media']['SoundChannel'],
      tzjhl = laya['media']['SoundManager'],
      yn8_4x = laya['display']['Stage'],
      i3crm = laya['net']['URL'],
      eg6pu = laya['utils']['Utils'],
      bs82 = function () {
    function o71v9e() {}return ft5zlq(o71v9e, 'laya.wx.mini.MiniAdpter'), o71v9e['getJson'] = function (zklqh) {
      return JSON['parse'](zklqh);
    }, o71v9e['init'] = function (d2$sab, sdba$2) {
      d2$sab === void 0x0 && (d2$sab = ![]), sdba$2 === void 0x0 && (sdba$2 = ![]);if (o71v9e['_inited']) return;o71v9e['window'] = window;if (o71v9e['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o71v9e['_inited'] = !![], o71v9e['isZiYu'] = sdba$2, o71v9e['isPosMsgYu'] = d2$sab, o71v9e['EnvConfig'] = {}, !o71v9e['isZiYu'] && (q5hzlt['setNativeFileDir']('/layaairGame'), q5hzlt['existDir'](q5hzlt['fileNativeDir'], vof791['create'](o71v9e, o71v9e['onMkdirCallBack']))), o71v9e['window']['focus'] = function () {}, evg6u['getUrlPath'] = function () {}, o71v9e['window']['logtime'] = function (tflqz) {}, o71v9e['window']['alertTimeLog'] = function (x_y84) {}, o71v9e['window']['resetShareInfo'] = function () {}, o71v9e['window']['CanvasRenderingContext2D'] = function () {}, o71v9e['window']['CanvasRenderingContext2D']['prototype'] = o71v9e['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o71v9e['window']['document']['body']['appendChild'] = function () {}, o71v9e['EnvConfig']['pixelRatioInt'] = 0x0, o5t9f7['getPixelRatio'] = o71v9e['pixelRatio'], o71v9e['_preCreateElement'] = s$48n['createElement'], s$48n['createElement'] = o71v9e['createElement'], o5t9f7['createShaderCondition'] = o71v9e['createShaderCondition'], eg6pu['parseXMLFromString'] = o71v9e['parseXMLFromString'], ug1pe['_createInputElement'] = nx0_y3['_createInputElement'], o71v9e['EnvConfig']['load'] = d8_4s$['prototype']['load'], d8_4s$['prototype']['load'] = o5t97['prototype']['load'], o71v9e['isZiYu'] && d2$sab && wx['onMessage'](function (_n8x4y) {
        _n8x4y['isLoad'] && (q5hzlt['ziyuFileData'][_n8x4y['url']] = _n8x4y['data']);
      });
    }, o71v9e['onMkdirCallBack'] = function (fto5, _sn4x) {
      if (!fto5) q5hzlt['filesListObj'] = JSON['parse'](_sn4x['data']);
    }, o71v9e['pixelRatio'] = function () {
      if (!o71v9e['EnvConfig']['pixelRatioInt']) try {
        var dka = wx['getSystemInfoSync']();return o71v9e['EnvConfig']['pixelRatioInt'] = dka['pixelRatio'], dka = dka, dka['pixelRatio'];
      } catch (gve16) {}return o71v9e['EnvConfig']['pixelRatioInt'];
    }, o71v9e['createElement'] = function (dk2ba) {
      if (dk2ba == 'canvas') {
        var fv71o9;return o71v9e['idx'] == 0x1 ? o71v9e['isZiYu'] ? (fv71o9 = sharedCanvas, fv71o9['style'] = {}) : fv71o9 = window['canvas'] : fv71o9 = window['wx']['createCanvas'](), o71v9e['idx']++, fv71o9;
      } else {
        if (dk2ba == 'textarea' || dk2ba == 'input') return o71v9e['onCreateInput'](dk2ba);else {
          if (dk2ba == 'div') {
            var kad2j = o71v9e['_preCreateElement'](dk2ba);return kad2j['contains'] = function (yr3x0) {
              return null;
            }, kad2j['removeChild'] = function (akj2db) {}, kad2j;
          } else return o71v9e['_preCreateElement'](dk2ba);
        }
      }
    }, o71v9e['onCreateInput'] = function (hztq5) {
      var rc30my = o71v9e['_preCreateElement'](hztq5);return rc30my['focus'] = nx0_y3['wxinputFocus'], rc30my['blur'] = nx0_y3['wxinputblur'], rc30my['style'] = {}, rc30my['value'] = 0x0, rc30my['parentElement'] = {}, rc30my['placeholder'] = {}, rc30my['type'] = {}, rc30my['setColor'] = function (fqltz5) {}, rc30my['setType'] = function (nx_0y4) {}, rc30my['setFontFace'] = function (fqz5lt) {}, rc30my['addEventListener'] = function (_$84ds) {}, rc30my['contains'] = function (gv7e1u) {
        return null;
      }, rc30my['removeChild'] = function (f5vo97) {}, rc30my;
    }, o71v9e['createShaderCondition'] = function (cir03) {
      var r3xn = this,
          o79vf5 = function () {
        var ahk2b = cir03;return r3xn[cir03['replace']('this.', '')];
      };return o79vf5;
    }, o71v9e['EnvConfig'] = null, o71v9e['window'] = null, o71v9e['_preCreateElement'] = null, o71v9e['_inited'] = ![], o71v9e['wxRequest'] = null, o71v9e['systemInfo'] = null, o71v9e['version'] = '0.0.1', o71v9e['isZiYu'] = ![], o71v9e['isPosMsgYu'] = ![], o71v9e['parseXMLFromString'] = function (o71gv) {
      var g17vue, bd$2as;o71gv = o71gv['replace'](/>\s+</g, '><');try {
        g17vue = new window['Parser']['DOMParser']()['parseFromString'](o71gv, 'text/xml');
      } catch (azjh) {
        throw '需要引入xml解析库文件';
      }return g17vue;
    }, o71v9e['idx'] = 0x1, o71v9e;
  }(),
      nx30r = function () {
    function a2jbk() {}ft5zlq(a2jbk, 'laya.wx.mini.MiniImage');var pug1e = a2jbk['prototype'];return pug1e['_loadImage'] = function (j2kh) {
      var ri3wm = this,
          y0x_ = ![];j2kh['indexOf']('layaNativeDir/') == -0x1 && (y0x_ = !![], j2kh = i3crm['formatURL'](j2kh));if (!q5hzlt['getFileInfo'](j2kh)) {
        if (j2kh['indexOf']('http://') != -0x1 || j2kh['indexOf']('https://') != -0x1) q5hzlt['downImg'](j2kh, new vof791(a2jbk, a2jbk['onDownImgCallBack'], [j2kh, ri3wm]), j2kh);else a2jbk['onCreateImage'](j2kh, ri3wm, !![]);
      } else a2jbk['onCreateImage'](j2kh, ri3wm, !y0x_);
    }, a2jbk['onDownImgCallBack'] = function (jazhqk, ot97, fv759o) {
      if (!fv759o) a2jbk['onCreateImage'](jazhqk, ot97);else ot97['onError'](null);
    }, a2jbk['onCreateImage'] = function (e61ugp, t79o, y30x_) {
      y30x_ === void 0x0 && (y30x_ = ![]);var eo197v;if (!y30x_) {
        var db$8 = q5hzlt['getFileInfo'](e61ugp),
            habjz = db$8['md5'];eo197v = q5hzlt['getFileNativePath'](habjz);
      } else eo197v = e61ugp;if (t79o['imgCache'] == null) t79o['imgCache'] = {};var _y3x0n;function ov91e7() {
        _y3x0n['onload'] = null, _y3x0n['onerror'] = null, delete t79o['imgCache'][e61ugp];
      };var ug71ve = function () {
        ov91e7(), t79o['onLoaded'](_y3x0n);
      },
          qzhl5 = function () {
        ov91e7(), t79o['event']('error', 'Load image failed');
      };t79o['_type'] == 'nativeimage' ? (_y3x0n = new s$48n['window']['Image'](), _y3x0n['crossOrigin'] = '', _y3x0n['onload'] = ug71ve, _y3x0n['onerror'] = qzhl5, _y3x0n['src'] = eo197v, t79o['imgCache'][e61ugp] = _y3x0n) : new s84n['create'](eo197v, { 'onload': ug71ve, 'onerror': qzhl5, 'onCreate': function (q5lzft) {
          _y3x0n = q5lzft, t79o['imgCache'][e61ugp] = q5lzft;
        } });
    }, a2jbk;
  }(),
      nx0_y3 = function () {
    function c0i() {}return ft5zlq(c0i, 'laya.wx.mini.MiniInput'), c0i['_createInputElement'] = function () {
      ug1pe['_initInput'](ug1pe['area'] = s$48n['createElement']('textarea')), ug1pe['_initInput'](ug1pe['input'] = s$48n['createElement']('input')), ug1pe['inputContainer'] = s$48n['createElement']('div'), ug1pe['inputContainer']['style']['position'] = 'absolute', ug1pe['inputContainer']['style']['zIndex'] = 0x186a0, s$48n['container']['appendChild'](ug1pe['inputContainer']), ug1pe['inputContainer']['setPos'] = function (t95ofl, r3xy) {
        ug1pe['inputContainer']['style']['left'] = t95ofl + 'px', ug1pe['inputContainer']['style']['top'] = r3xy + 'px';
      }, evg6u['stage']['on']('resize', null, c0i['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ov197e) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), tzjhl['_soundClass'] = r3x0, tzjhl['_musicClass'] = r3x0;
    }, c0i['_onStageResize'] = function () {
      var ahjkqz = evg6u['stage']['_canvasTransform']['identity']();ahjkqz['scale'](s$48n['width'] / g16u['canvas']['width'] / o5t9f7['getPixelRatio'](), s$48n['height'] / g16u['canvas']['height'] / o5t9f7['getPixelRatio']());
    }, c0i['wxinputFocus'] = function (c0mr3y) {
      var n_x03 = ug1pe['inputElement']['target'];if (n_x03 && !n_x03['editable']) return;bs82['window']['wx']['offKeyboardConfirm'](), bs82['window']['wx']['offKeyboardInput'](), bs82['window']['wx']['showKeyboard']({ 'defaultValue': n_x03['text'], 'maxLength': n_x03['maxChars'], 'multiple': n_x03['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (k2$bad) {}, 'fail': function (kqzl) {} }), bs82['window']['wx']['onKeyboardConfirm'](function ($s8_n) {
        var s$dab2 = $s8_n ? $s8_n['value'] : '';n_x03['text'] = s$dab2, n_x03['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bs82['window']['wx']['onKeyboardInput'](function (e91o7) {
        var imrc30 = e91o7 ? e91o7['value'] : '';if (!n_x03['multiline']) {
          if (imrc30['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n_x03['text'] = imrc30, n_x03['event']('input');
      });
    }, c0i['inputEnter'] = function () {
      ug1pe['inputElement']['target']['focus'] = ![];
    }, c0i['wxinputblur'] = function () {
      c0i['hideKeyboard']();
    }, c0i['hideKeyboard'] = function () {
      bs82['window']['wx']['offKeyboardConfirm'](), bs82['window']['wx']['offKeyboardInput'](), bs82['window']['wx']['hideKeyboard']({ 'success': function (p61eu) {
          console['log']('隐藏键盘');
        }, 'fail': function (khj2) {
          console['log']('隐藏键盘出错:' + (khj2 ? khj2['errMsg'] : ''));
        } });
    }, c0i;
  }(),
      o5t97 = function () {
    function n0yr3() {}ft5zlq(n0yr3, 'laya.wx.mini.MiniLoader');var d428$ = n0yr3['prototype'];return d428$['load'] = function (t5lz, ak, h2jba, pu1g, hkzqj) {
      h2jba === void 0x0 && (h2jba = !![]), hkzqj === void 0x0 && (hkzqj = ![]);var o5lft = this;o5lft['_url'] = t5lz;if (t5lz['indexOf']('data:image') === 0x0) o5lft['_type'] = ak = 'image';else o5lft['_type'] = ak || (ak = o5lft['getTypeFromUrl'](t5lz));o5lft['_cache'] = h2jba, o5lft['_data'] = null;var a2jb = 'ascii';if (t5lz['indexOf']('.fnt') != -0x1) a2jb = 'utf8';else ak == 'arraybuffer' && (a2jb = '');;var x8s4n = eg6pu['getFileExtension'](t5lz);if (n0yr3['_fileTypeArr']['indexOf'](x8s4n) != -0x1) bs82['EnvConfig']['load']['call'](this, t5lz, ak, h2jba, pu1g, hkzqj);else {
        if (!q5hzlt['getFileInfo'](t5lz)) {
          if (t5lz['indexOf']('layaNativeDir/') != -0x1) {
            if (bs82['isZiYu']) {
              var mcrwi = q5hzlt['ziyuFileData'][t5lz];o5lft['onLoaded'](mcrwi);return;
            } else {
              cosnole['log']('read read'), q5hzlt['read'](t5lz, a2jb, new vof791(n0yr3, n0yr3['onReadNativeCallBack'], [a2jb, t5lz, ak, h2jba, pu1g, hkzqj, o5lft]));return;
            }
          }if (i3crm['rootPath'] == '') var fl95 = t5lz;else fl95 = t5lz['split'](i3crm['rootPath'])[0x0];t5lz['indexOf']('http://') != -0x1 || t5lz['indexOf']('https://') != -0x1 ? bs82['EnvConfig']['load']['call'](o5lft, t5lz, ak, h2jba, pu1g, hkzqj) : q5hzlt['readFile'](fl95, a2jb, new vof791(n0yr3, n0yr3['onReadNativeCallBack'], [a2jb, t5lz, ak, h2jba, pu1g, hkzqj, o5lft]), t5lz);
        } else bs82['EnvConfig']['load']['call'](this, t5lz, ak, h2jba, pu1g, hkzqj);
      }
    }, d428$['resMgrLoad'] = function (r3yc0x, u7vg1e, zhakbj, v7goe, miw3c, hlqjzt, _84nyx) {
      zhakbj === void 0x0 && (zhakbj = 0x0), v7goe === void 0x0 && (v7goe = ![]), miw3c === void 0x0 && (miw3c = ![]), hlqjzt === void 0x0 && (hlqjzt = 0x0), _84nyx === void 0x0 && (_84nyx = 0x3), r3yc0x['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', r3yc0x), bs82['EnvConfig']['resMgrLoad'](r3yc0x, (f719o, v1o97e, qakz) => {
        n0yr3['prototype']['resMgrLoadCallBack'](f719o, v1o97e, qakz, u7vg1e);
      }, zhakbj, v7goe, miw3c, hlqjzt, _84nyx);
    }, d428$['resMgrLoadCallBack'] = function (sn_48x, $8b2sd, zftlq, lht5zq) {
      console['log']('buff:::', sn_48x, zftlq, q5hzlt['fileNativeDir'] + '///' + q5hzlt['fileListName']), lht5zq(sn_48x, $8b2sd, zftlq);
    }, d428$['clearRes'] = function (jhtzlq, hlj) {
      hlj === void 0x0 && (hlj = ![]);var sab$d2 = this;sab$d2['clearRes'](jhtzlq, hlj);var y_30n = q5hzlt['getFileInfo'](jhtzlq);if (y_30n && (jhtzlq['indexOf']('http://') != -0x1 || jhtzlq['indexOf']('https://') != -0x1)) {
        var oe1vg7 = y_30n['md5'],
            ogv7 = q5hzlt['getFileNativePath'](oe1vg7);q5hzlt['remove'](ogv7);
      }
    }, n0yr3['onReadNativeCallBack'] = function (eog1v, o1egv7, xn48, xyn3, oeg17, _y40n, rm0yc3, iwr3c, bhkzj) {
      xyn3 === void 0x0 && (xyn3 = !![]), _y40n === void 0x0 && (_y40n = ![]), iwr3c === void 0x0 && (iwr3c = 0x0);if (!iwr3c) {
        var kjbda;if (xn48 == 'json' || xn48 == 'atlas') kjbda = bs82['getJson'](bhkzj['data']);else xn48 == 'xml' ? kjbda = eg6pu['parseXMLFromString'](bhkzj['data']) : kjbda = bhkzj['data'];rm0yc3['onLoaded'](kjbda), !bs82['isZiYu'] && bs82['isPosMsgYu'] && xn48 != 'arraybuffer' && wx['postMessage']({ 'url': o1egv7, 'data': kjbda, 'isLoad': !![] });
      } else iwr3c == 0x1 && bs82['EnvConfig']['load']['call'](rm0yc3, o1egv7, xn48, xyn3, oeg17, _y40n);
    }, zlkjq(n0yr3, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), n0yr3;
  }(),
      q5hzlt = function (zl5qh) {
    function kqzlhj() {
      kqzlhj['__super']['call'](this);;
    }return ft5zlq(kqzlhj, 'laya.wx.mini.MiniFileMgr', zl5qh), kqzlhj['isLoadFile'] = function (bakhj2) {
      return kqzlhj['_fileTypeArr']['indexOf'](bakhj2) != -0x1 ? !![] : ![];
    }, kqzlhj['getFileInfo'] = function (lht5qz) {
      var t59olf = lht5qz['split']('?')[0x0],
          s_4n8 = kqzlhj['filesListObj'][t59olf];if (s_4n8 == null) return null;else return s_4n8;return null;
    }, kqzlhj['onFileUpdate'] = function (d2b$8, jlqkhz) {
      var nxs84_ = d2b$8['split']('/'),
          lqztf = nxs84_[nxs84_['length'] - 0x1],
          of9t57 = kqzlhj['getFileInfo'](jlqkhz);if (of9t57 == null) kqzlhj['onSaveFile'](jlqkhz, lqztf);else {
        if (of9t57['readyUrl'] != jlqkhz) kqzlhj['remove'](lqztf, jlqkhz);
      }
    }, kqzlhj['exits'] = function (xy4n8_, xnr3y0) {
      var tflq5z = kqzlhj['getFileNativePath'](xy4n8_);kqzlhj['fs']['getFileInfo']({ 'filePath': tflq5z, 'success': function (yxn0_4) {
          xnr3y0 != null && xnr3y0['runWith']([0x0, yxn0_4]);
        }, 'fail': function ($2s4d8) {
          xnr3y0 != null && xnr3y0['runWith']([0x1, $2s4d8]);
        } });
    }, kqzlhj['read'] = function (c0mir3, y3xc0r, absd2, cwirm3) {
      y3xc0r === void 0x0 && (y3xc0r = 'ascill'), cwirm3 === void 0x0 && (cwirm3 = '');var egv17;cwirm3 != '' ? egv17 = kqzlhj['getFileNativePath'](c0mir3) : egv17 = c0mir3, kqzlhj['fs']['readFile']({ 'filePath': egv17, 'encoding': y3xc0r, 'success': function (ab2dj) {
          absd2 != null && absd2['runWith']([0x0, ab2dj]);
        }, 'fail': function (qhzjl) {
          if (qhzjl && cwirm3 != '') kqzlhj['down'](cwirm3, y3xc0r, absd2, cwirm3);else absd2 != null && absd2['runWith']([0x1]);
        } });
    }, kqzlhj['readNativeFile'] = function (fzqt5, tf5lq9) {
      kqzlhj['fs']['readFile']({ 'filePath': fzqt5, 'encoding': '', 'success': function (r3m0cy) {
          tf5lq9 != null && tf5lq9['runWith']([0x0]);
        }, 'fail': function (cmyr0) {
          tf5lq9 != null && tf5lq9['runWith']([0x1]);
        } });
    }, kqzlhj['down'] = function (ue6v1g, sn_x, up16, zlqf5t) {
      sn_x === void 0x0 && (sn_x = 'ascill'), zlqf5t === void 0x0 && (zlqf5t = '');var t95fo7 = kqzlhj['getFileNativePath'](zlqf5t),
          rwi3m = kqzlhj['wxdown']({ 'url': ue6v1g, 'filePath': t95fo7, 'success': function (nrxy) {
          if (nrxy['statusCode'] === 0xc8) kqzlhj['readFile'](nrxy['filePath'], sn_x, up16, zlqf5t);
        }, 'fail': function (g6pu1) {
          up16 != null && up16['runWith']([0x1, g6pu1]);
        } });rwi3m['onProgressUpdate'](function (lqf5tz) {
        up16 != null && up16['runWith']([0x2, lqf5tz['progress']]);
      });
    }, kqzlhj['readFile'] = function (o7g1e, y03rx, xyn0r, khjzab) {
      y03rx === void 0x0 && (y03rx = 'ascill'), khjzab === void 0x0 && (khjzab = ''), kqzlhj['fs']['readFile']({ 'filePath': o7g1e, 'encoding': y03rx, 'success': function (r3mwi) {
          if (o7g1e['indexOf']('http://') != -0x1 || o7g1e['indexOf']('https://') != -0x1) kqzlhj['onFileUpdate'](o7g1e, khjzab);xyn0r != null && xyn0r['runWith']([0x0, r3mwi]);
        }, 'fail': function (xs8n4_) {
          if (xs8n4_) xyn0r != null && xyn0r['runWith']([0x1, xs8n4_]);
        } });
    }, kqzlhj['downImg'] = function (fv19o, $4s, yx_n30) {
      yx_n30 === void 0x0 && (yx_n30 = '');var lhjtq = kqzlhj['wxdown']({ 'url': fv19o, 'success': function (f59l) {
          f59l['statusCode'] === 0xc8 && kqzlhj['copyFile'](f59l['tempFilePath'], yx_n30, $4s);
        }, 'fail': function (x40_ny) {
          $4s != null && $4s['runWith']([0x1, x40_ny]);
        } });
    }, kqzlhj['copyFile'] = function (vue6, r3cx0, gv1ue) {
      var f7o9t = vue6['split']('/'),
          ge1v6 = f7o9t[f7o9t['length'] - 0x1],
          bd$2k = r3cx0['split']('?')[0x0],
          qftl = kqzlhj['getFileInfo'](r3cx0),
          o9t75f = kqzlhj['getFileNativePath'](ge1v6);kqzlhj['fs']['copyFile']({ 'srcPath': vue6, 'destPath': o9t75f, 'success': function (r30cx) {
          if (!qftl) kqzlhj['onSaveFile'](r3cx0, ge1v6), gv1ue != null && gv1ue['runWith']([0x0]);else {
            if (qftl['readyUrl'] != r3cx0) kqzlhj['remove'](ge1v6, r3cx0, gv1ue);
          }
        }, 'fail': function (rcwi) {
          gv1ue != null && gv1ue['runWith']([0x1, rcwi]);
        } });
    }, kqzlhj['getFileNativePath'] = function (s$2b8d) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s$2b8d;
    }, kqzlhj['remove'] = function (o97fv, cyxr30, jhabkz) {
      cyxr30 === void 0x0 && (cyxr30 = '');var zhkja = kqzlhj['getFileInfo'](cyxr30),
          jakdb2 = kqzlhj['getFileNativePath'](zhkja['md5']);evg6u['loader']['clearRes'](zhkja['readyUrl']), kqzlhj['fs']['unlink']({ 'filePath': jakdb2, 'success': function (ahjkb2) {
          if (cyxr30 != '') kqzlhj['onSaveFile'](cyxr30, o97fv);jhabkz != null && jhabkz['runWith']([0x0]);
        }, 'fail': function (bhza) {} });
    }, kqzlhj['onSaveFile'] = function (yn_03x, o19ev7) {
      var cirmw = yn_03x['split']('?')[0x0];kqzlhj['filesListObj'][cirmw] = { 'md5': o19ev7, 'readyUrl': yn_03x }, kqzlhj['fs']['writeFile']({ 'filePath': kqzlhj['fileNativeDir'] + '/' + kqzlhj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kqzlhj['filesListObj']), 'success': function (n3r0x) {
          console['log']('写入测试测试成功：', n3r0x);
        }, 'fail': function (gupe61) {
          console['log']('写入测试测试失败：', gupe61);
        } });
    }, kqzlhj['existDir'] = function (gu1e6v, _n3x0y) {
      kqzlhj['fs']['mkdir']({ 'dirPath': gu1e6v, 'success': function (ftl5qz) {
          _n3x0y != null && _n3x0y['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (zkjqlh) {
          if (zkjqlh['errMsg']['indexOf']('file already exists') != -0x1) kqzlhj['readSync'](kqzlhj['fileListName'], 'utf8', _n3x0y);else _n3x0y != null && _n3x0y['runWith']([0x1, zkjqlh]);
        } });
    }, kqzlhj['readSync'] = function (gpeu61, qzt5lh, _4n, vgu7e1) {
      qzt5lh === void 0x0 && (qzt5lh = 'ascill'), vgu7e1 === void 0x0 && (vgu7e1 = '');var tz5qlf = kqzlhj['getFileNativePath'](gpeu61),
          d$4s82;try {
        d$4s82 = kqzlhj['fs']['readFileSync'](tz5qlf), _4n != null && _4n['runWith']([0x0, { 'data': d$4s82 }]);
      } catch (hlkzjq) {
        _4n != null && _4n['runWith']([0x1]);
      }
    }, kqzlhj['readCache'] = function () {}, kqzlhj['writeCache'] = function (hja2) {
      var kj2d = readyUrl['split']('?')[0x0];kqzlhj['filesListObj'][kj2d] = { 'md5': md5Name, 'readyUrl': readyUrl }, kqzlhj['fs']['writeFile']({ 'filePath': kqzlhj['fileNativeDir'] + '/' + kqzlhj['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kqzlhj['filesListObj']), 'success': function (xr0yn) {}, 'fail': function (eguv6) {} });
    }, kqzlhj['setNativeFileDir'] = function (u6eg1v) {
      kqzlhj['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + u6eg1v;
    }, kqzlhj['filesListObj'] = {}, kqzlhj['fileNativeDir'] = null, kqzlhj['fileListName'] = 'layaairfiles.txt', kqzlhj['ziyuFileData'] = {}, zlkjq(kqzlhj, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), kqzlhj;
  }(gv71),
      r3x0 = function ($82sdb) {
    function $2bsa() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $2bsa['__super']['call'](this), this['_sound'] = $2bsa['_createSound']();
    }ft5zlq($2bsa, 'laya.wx.mini.MiniSound', $82sdb);var qhzt5 = $2bsa['prototype'];return qhzt5['load'] = function (ve6gu) {
      var kb$2ad = this;ve6gu = i3crm['formatURL'](ve6gu), this['url'] = ve6gu;if ($2bsa['_audioCache'][ve6gu]) {
        this['event']('complete');return;
      }function kdbaj() {
        if ($2bsa['_null'] != undefined) kb$2ad['_sound']['onCanplay']($2bsa['_null']), kb$2ad['_sound']['onError']($2bsa['_null']);else try {
          kb$2ad['_sound']['onCanplay'](null), kb$2ad['_sound']['onError'](null), $2bsa['_null'] = null;
        } catch (x3nyr) {
          console['warn']('[wxmini] _clearSound:' + x3nyr), kb$2ad['_sound']['onCanplay'](djak), kb$2ad['_sound']['onError'](djak), $2bsa['_null'] = djak;
        }
      }function icrm30() {
        kdbaj(), of75t9['loaded'] = !![], of75t9['event']('complete'), $2bsa['_audioCache'][of75t9['url']] = of75t9;
      }function sn_4$8(f9tq) {
        console['error']('errCode=' + f9tq['errCode'] + '  errMsg=' + f9tq['errMsg']), kdbaj(), of75t9['event']('error');
      }function djak() {}this['_sound']['onCanplay'](icrm30), this['_sound']['onError'](sn_4$8), this['_sound']['src'] = ve6gu;var of75t9 = this;
    }, qhzt5['play'] = function (jb2d, htz5q) {
      jb2d === void 0x0 && (jb2d = 0x0), htz5q === void 0x0 && (htz5q = 0x0);var vf71o9;if (this['url'] == tzjhl['_tMusic']) {
        if (!$2bsa['_musicAudio']) $2bsa['_musicAudio'] = $2bsa['_createSound']();vf71o9 = $2bsa['_musicAudio'];
      } else vf71o9 = $2bsa['_createSound']();vf71o9['src'] = this['url'];var ajqkz = new uv1g(vf71o9);return ajqkz['url'] = this['url'], ajqkz['loops'] = htz5q, ajqkz['startTime'] = jb2d, ajqkz['play'](), tzjhl['addChannel'](ajqkz), ajqkz;
    }, qhzt5['dispose'] = function () {
      var yr3x0c = $2bsa['_audioCache'][this['url']];yr3x0c && (yr3x0c['src'] = '', delete $2bsa['_audioCache'][this['url']]);
    }, qzhl(0x0, qhzt5, 'duration', function () {
      return this['_sound']['duration'];
    }), $2bsa['_createSound'] = function () {
      return $2bsa['_id']++, bs82['window']['wx']['createInnerAudioContext']();
    }, $2bsa['_musicAudio'] = null, $2bsa['_id'] = 0x0, $2bsa['_audioCache'] = {}, $2bsa['_null'] = undefined, $2bsa;
  }(gv71),
      uv1g = function (p6ueg) {
    function _8n4sx(sn_$8) {
      this['_audio'] = null, this['_onEnd'] = null, _8n4sx['__super']['call'](this), this['_audio'] = sn_$8, this['_onEnd'] = eg6pu['bind'](this['__onEnd'], this), sn_$8['onEnded'](this['_onEnd']);
    }ft5zlq(_8n4sx, 'laya.wx.mini.MiniSoundChannel', p6ueg);var hzl5tq = _8n4sx['prototype'];return hzl5tq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (evg6u['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hzl5tq['__onNull'] = function () {}, hzl5tq['play'] = function () {
      this['isStopped'] = ![], tzjhl['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hzl5tq['stop'] = function () {
      this['isStopped'] = !![], tzjhl['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (_8n4sx['_null'] != undefined) this['_audio']['onEnded'](_8n4sx['_null']);else try {
        this['_audio']['onEnded'](null), _8n4sx['_null'] = null;
      } catch (d28bs$) {
        console['warn']('[wxmini] stop:' + d28bs$), this['_audio']['onEnded'](eg6pu['bind'](this['__onNull'], this)), _8n4sx['_null'] = eg6pu['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hzl5tq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hzl5tq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], tzjhl['addChannel'](this), this['_audio']['play']();
    }, qzhl(0x0, hzl5tq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), qzhl(0x0, hzl5tq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), qzhl(0x0, hzl5tq, 'volume', function () {
      return 0x1;
    }, function (nyrx0) {}), _8n4sx['_null'] = undefined, _8n4sx;
  }(_sn48);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var akqhz in Laya) {
    var azjqk = Laya[akqhz];azjqk && azjqk['__isclass'] && (exports[akqhz] = azjqk);
  }
});