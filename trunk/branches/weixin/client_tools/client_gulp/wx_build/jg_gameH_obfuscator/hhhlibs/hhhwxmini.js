var O = wx.$C;
(function (window, document, ngys) {
  var ayi2s = ngys['un'],
      p8ul$c = ngys['uns'],
      lm5otc = ngys['static'],
      klmot5 = ngys['class'],
      s6yia = ngys['getset'],
      wdh90j = ngys['__newvec'],
      nvsgf = laya['utils']['Browser'],
      nsay2 = laya['events']['Event'],
      as26iy = laya['events']['EventDispatcher'],
      octl5p = laya['resource']['HTMLImage'],
      g_vsnf = laya['utils']['Handler'],
      rd8z9j = laya['display']['Input'],
      s_fvgn = laya['net']['Loader'],
      f_nsv = laya['maths']['Matrix'],
      fvn = laya['renders']['Render'],
      vy_ans = laya['utils']['RunDriver'],
      lp$c = laya['media']['Sound'],
      _snvg = laya['media']['SoundChannel'],
      jw09dh = laya['media']['SoundManager'],
      hjwdz = laya['display']['Stage'],
      whzd9j = laya['net']['URL'],
      x17w0q = laya['utils']['Utils'],
      gy_nsv = function () {
    function zhd9r() {}return klmot5(zhd9r, 'laya.wx.mini.MiniAdpter'), zhd9r['getJson'] = function (a2siy) {
      return JSON['parse'](a2siy);
    }, zhd9r['init'] = function (nays_v, dj98zr) {
      nays_v === void 0x0 && (nays_v = ![]), dj98zr === void 0x0 && (dj98zr = ![]);if (zhd9r['_inited']) return;zhd9r['window'] = window;if (zhd9r['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;zhd9r['_inited'] = !![], zhd9r['isZiYu'] = dj98zr, zhd9r['isPosMsgYu'] = nays_v, zhd9r['EnvConfig'] = {}, !zhd9r['isZiYu'] && (nyv_s['setNativeFileDir']('/layaairGame'), nyv_s['existDir'](nyv_s['fileNativeDir'], g_vsnf['create'](zhd9r, zhd9r['onMkdirCallBack']))), zhd9r['window']['focus'] = function () {}, ngys['getUrlPath'] = function () {}, zhd9r['window']['logtime'] = function (zj9) {}, zhd9r['window']['alertTimeLog'] = function (ay_6ns) {}, zhd9r['window']['resetShareInfo'] = function () {}, zhd9r['window']['CanvasRenderingContext2D'] = function () {}, zhd9r['window']['CanvasRenderingContext2D']['prototype'] = zhd9r['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zhd9r['window']['document']['body']['appendChild'] = function () {}, zhd9r['EnvConfig']['pixelRatioInt'] = 0x0, vy_ans['getPixelRatio'] = zhd9r['pixelRatio'], zhd9r['_preCreateElement'] = nvsgf['createElement'], nvsgf['createElement'] = zhd9r['createElement'], vy_ans['createShaderCondition'] = zhd9r['createShaderCondition'], x17w0q['parseXMLFromString'] = zhd9r['parseXMLFromString'], rd8z9j['_createInputElement'] = hq0w['_createInputElement'], zhd9r['EnvConfig']['load'] = s_fvgn['prototype']['load'], s_fvgn['prototype']['load'] = _nvsgf['prototype']['load'], zhd9r['isZiYu'] && nays_v && wx['onMessage'](function ($5ulc) {
        $5ulc['isLoad'] && (nyv_s['ziyuFileData'][$5ulc['url']] = $5ulc['data']);
      });
    }, zhd9r['onMkdirCallBack'] = function (clmt5o, _yvgs) {
      if (!clmt5o) nyv_s['filesListObj'] = JSON['parse'](_yvgs['data']);
    }, zhd9r['pixelRatio'] = function () {
      if (!zhd9r['EnvConfig']['pixelRatioInt']) try {
        var ai26ys = wx['getSystemInfoSync']();return zhd9r['EnvConfig']['pixelRatioInt'] = ai26ys['pixelRatio'], ai26ys = ai26ys, ai26ys['pixelRatio'];
      } catch (pucr8) {}return zhd9r['EnvConfig']['pixelRatioInt'];
    }, zhd9r['createElement'] = function (f7134q) {
      if (f7134q == 'canvas') {
        var $z8upr;return zhd9r['idx'] == 0x1 ? zhd9r['isZiYu'] ? ($z8upr = sharedCanvas, $z8upr['style'] = {}) : $z8upr = window['canvas'] : $z8upr = window['wx']['createCanvas'](), zhd9r['idx']++, $z8upr;
      } else {
        if (f7134q == 'textarea' || f7134q == 'input') return zhd9r['onCreateInput'](f7134q);else {
          if (f7134q == 'div') {
            var mtc5l = zhd9r['_preCreateElement'](f7134q);return mtc5l['contains'] = function (jzr89) {
              return null;
            }, mtc5l['removeChild'] = function (f43g17) {}, mtc5l;
          } else return zhd9r['_preCreateElement'](f7134q);
        }
      }
    }, zhd9r['onCreateInput'] = function (svfg_) {
      var s6yna2 = zhd9r['_preCreateElement'](svfg_);return s6yna2['focus'] = hq0w['wxinputFocus'], s6yna2['blur'] = hq0w['wxinputblur'], s6yna2['style'] = {}, s6yna2['value'] = 0x0, s6yna2['parentElement'] = {}, s6yna2['placeholder'] = {}, s6yna2['type'] = {}, s6yna2['setColor'] = function (x0h7) {}, s6yna2['setType'] = function (u$l5cp) {}, s6yna2['setFontFace'] = function (n4_f) {}, s6yna2['addEventListener'] = function (q73f) {}, s6yna2['contains'] = function (l$u5) {
        return null;
      }, s6yna2['removeChild'] = function (d8j9z) {}, s6yna2;
    }, zhd9r['createShaderCondition'] = function (nyas26) {
      var mtkl = this,
          sgyvn_ = function () {
        var zupr8$ = nyas26;return mtkl[nyas26['replace']('this.', '')];
      };return sgyvn_;
    }, zhd9r['EnvConfig'] = null, zhd9r['window'] = null, zhd9r['_preCreateElement'] = null, zhd9r['_inited'] = ![], zhd9r['wxRequest'] = null, zhd9r['systemInfo'] = null, zhd9r['version'] = '0.0.1', zhd9r['isZiYu'] = ![], zhd9r['isPosMsgYu'] = ![], zhd9r['parseXMLFromString'] = function (r89uz) {
      var v13f4, luc8;r89uz = r89uz['replace'](/>\s+</g, '><');try {
        v13f4 = new window['Parser']['DOMParser']()['parseFromString'](r89uz, 'text/xml');
      } catch (z9d8r) {
        throw '需要引入xml解析库文件';
      }return v13f4;
    }, zhd9r['idx'] = 0x1, zhd9r;
  }(),
      hxw0dq = function () {
    function j$8zr() {}klmot5(j$8zr, 'laya.wx.mini.MiniImage');var hjxw = j$8zr['prototype'];return hjxw['_loadImage'] = function (upcr8) {
      var q0hx7w = this,
          dzh9jr = ![];upcr8['indexOf']('layaNativeDir/') == -0x1 && (dzh9jr = !![], upcr8 = whzd9j['formatURL'](upcr8));if (!nyv_s['getFileInfo'](upcr8)) {
        if (upcr8['indexOf']('http://') != -0x1 || upcr8['indexOf']('https://') != -0x1) nyv_s['downImg'](upcr8, new g_vsnf(j$8zr, j$8zr['onDownImgCallBack'], [upcr8, q0hx7w]), upcr8);else j$8zr['onCreateImage'](upcr8, q0hx7w, !![]);
      } else j$8zr['onCreateImage'](upcr8, q0hx7w, !dzh9jr);
    }, j$8zr['onDownImgCallBack'] = function (q7f34, vs_nay, _sfgnv) {
      if (!_sfgnv) j$8zr['onCreateImage'](q7f34, vs_nay);else vs_nay['onError'](null);
    }, j$8zr['onCreateImage'] = function (hxw, p8ucl$, x7hw) {
      x7hw === void 0x0 && (x7hw = ![]);var sgyv_n;if (!x7hw) {
        var r$89j = nyv_s['getFileInfo'](hxw),
            r89$zu = r$89j['md5'];sgyv_n = nyv_s['getFileNativePath'](r89$zu);
      } else sgyv_n = hxw;if (p8ucl$['imgCache'] == null) p8ucl$['imgCache'] = {};var $j9z8r;function nyva() {
        $j9z8r['onload'] = null, $j9z8r['onerror'] = null, delete p8ucl$['imgCache'][hxw];
      };var wd0q = function () {
        nyva(), p8ucl$['onLoaded']($j9z8r);
      },
          snya2 = function () {
        nyva(), p8ucl$['event']('error', 'Load image failed');
      };p8ucl$['_type'] == 'nativeimage' ? ($j9z8r = new nvsgf['window']['Image'](), $j9z8r['crossOrigin'] = '', $j9z8r['onload'] = wd0q, $j9z8r['onerror'] = snya2, $j9z8r['src'] = sgyv_n, p8ucl$['imgCache'][hxw] = $j9z8r) : new octl5p['create'](sgyv_n, { 'onload': wd0q, 'onerror': snya2, 'onCreate': function (bai6) {
          $j9z8r = bai6, p8ucl$['imgCache'][hxw] = bai6;
        } });
    }, j$8zr;
  }(),
      hq0w = function () {
    function ab2e6() {}return klmot5(ab2e6, 'laya.wx.mini.MiniInput'), ab2e6['_createInputElement'] = function () {
      rd8z9j['_initInput'](rd8z9j['area'] = nvsgf['createElement']('textarea')), rd8z9j['_initInput'](rd8z9j['input'] = nvsgf['createElement']('input')), rd8z9j['inputContainer'] = nvsgf['createElement']('div'), rd8z9j['inputContainer']['style']['position'] = 'absolute', rd8z9j['inputContainer']['style']['zIndex'] = 0x186a0, nvsgf['container']['appendChild'](rd8z9j['inputContainer']), rd8z9j['inputContainer']['setPos'] = function (cpul5$, ysv_an) {
        rd8z9j['inputContainer']['style']['left'] = cpul5$ + 'px', rd8z9j['inputContainer']['style']['top'] = ysv_an + 'px';
      }, ngys['stage']['on']('resize', null, ab2e6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d8zjr) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jw09dh['_soundClass'] = h0xqdw, jw09dh['_musicClass'] = h0xqdw;
    }, ab2e6['_onStageResize'] = function () {
      var y6n_as = ngys['stage']['_canvasTransform']['identity']();y6n_as['scale'](nvsgf['width'] / fvn['canvas']['width'] / vy_ans['getPixelRatio'](), nvsgf['height'] / fvn['canvas']['height'] / vy_ans['getPixelRatio']());
    }, ab2e6['wxinputFocus'] = function (snya6) {
      var n_fgvs = rd8z9j['inputElement']['target'];if (n_fgvs && !n_fgvs['editable']) return;gy_nsv['window']['wx']['offKeyboardConfirm'](), gy_nsv['window']['wx']['offKeyboardInput'](), gy_nsv['window']['wx']['showKeyboard']({ 'defaultValue': n_fgvs['text'], 'maxLength': n_fgvs['maxChars'], 'multiple': n_fgvs['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (rd9h) {}, 'fail': function (x7hqw0) {} }), gy_nsv['window']['wx']['onKeyboardConfirm'](function (e2) {
        var $cu8p = e2 ? e2['value'] : '';n_fgvs['text'] = $cu8p, n_fgvs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gy_nsv['window']['wx']['onKeyboardInput'](function (g143f) {
        var lupo5c = g143f ? g143f['value'] : '';if (!n_fgvs['multiline']) {
          if (lupo5c['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }n_fgvs['text'] = lupo5c, n_fgvs['event']('input');
      });
    }, ab2e6['inputEnter'] = function () {
      rd8z9j['inputElement']['target']['focus'] = ![];
    }, ab2e6['wxinputblur'] = function () {
      ab2e6['hideKeyboard']();
    }, ab2e6['hideKeyboard'] = function () {
      gy_nsv['window']['wx']['offKeyboardConfirm'](), gy_nsv['window']['wx']['offKeyboardInput'](), gy_nsv['window']['wx']['hideKeyboard']({ 'success': function (zrdj9h) {
          console['log']('隐藏键盘');
        }, 'fail': function (hjdxw0) {
          console['log']('隐藏键盘出错:' + (hjdxw0 ? hjdxw0['errMsg'] : ''));
        } });
    }, ab2e6;
  }(),
      _nvsgf = function () {
    function _snyg() {}klmot5(_snyg, 'laya.wx.mini.MiniLoader');var sfnvg_ = _snyg['prototype'];return sfnvg_['load'] = function (qf714, q3x14, b62iy, ru$8, jhdzr9) {
      b62iy === void 0x0 && (b62iy = !![]), jhdzr9 === void 0x0 && (jhdzr9 = ![]);var s26i = this;s26i['_url'] = qf714;if (qf714['indexOf']('data:image') === 0x0) s26i['_type'] = q3x14 = 'image';else s26i['_type'] = q3x14 || (q3x14 = s26i['getTypeFromUrl'](qf714));s26i['_cache'] = b62iy, s26i['_data'] = null;var say6n2 = 'ascii';if (qf714['indexOf']('.fnt') != -0x1) say6n2 = 'utf8';else q3x14 == 'arraybuffer' && (say6n2 = '');;var g_vfn = x17w0q['getFileExtension'](qf714);if (_snyg['_fileTypeArr']['indexOf'](g_vfn) != -0x1) gy_nsv['EnvConfig']['load']['call'](this, qf714, q3x14, b62iy, ru$8, jhdzr9);else {
        if (!nyv_s['getFileInfo'](qf714)) {
          if (qf714['indexOf']('layaNativeDir/') != -0x1) {
            if (gy_nsv['isZiYu']) {
              var l8up$ = nyv_s['ziyuFileData'][qf714];s26i['onLoaded'](l8up$);return;
            } else {
              cosnole['log']('read read'), nyv_s['read'](qf714, say6n2, new g_vsnf(_snyg, _snyg['onReadNativeCallBack'], [say6n2, qf714, q3x14, b62iy, ru$8, jhdzr9, s26i]));return;
            }
          }if (whzd9j['rootPath'] == '') var h7xw = qf714;else h7xw = qf714['split'](whzd9j['rootPath'])[0x0];qf714['indexOf']('http://') != -0x1 || qf714['indexOf']('https://') != -0x1 ? gy_nsv['EnvConfig']['load']['call'](s26i, qf714, q3x14, b62iy, ru$8, jhdzr9) : nyv_s['readFile'](h7xw, say6n2, new g_vsnf(_snyg, _snyg['onReadNativeCallBack'], [say6n2, qf714, q3x14, b62iy, ru$8, jhdzr9, s26i]), qf714);
        } else gy_nsv['EnvConfig']['load']['call'](this, qf714, q3x14, b62iy, ru$8, jhdzr9);
      }
    }, sfnvg_['resMgrLoad'] = function (vf_gn4, l$c5p, yasv, wqxdh0, vgnf_s, ai2be6, zhr9j) {
      yasv === void 0x0 && (yasv = 0x0), wqxdh0 === void 0x0 && (wqxdh0 = ![]), vgnf_s === void 0x0 && (vgnf_s = ![]), ai2be6 === void 0x0 && (ai2be6 = 0x0), zhr9j === void 0x0 && (zhr9j = 0x3), vf_gn4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vf_gn4), gy_nsv['EnvConfig']['resMgrLoad'](vf_gn4, (g4f13, mokt, fngv_s) => {
        _snyg['prototype']['resMgrLoadCallBack'](g4f13, mokt, fngv_s, l$c5p);
      }, yasv, wqxdh0, vgnf_s, ai2be6, zhr9j);
    }, sfnvg_['resMgrLoadCallBack'] = function (mt5olc, wh0qd, zur$8p, nv_g) {
      console['log']('buff:::', mt5olc, zur$8p, nyv_s['fileNativeDir'] + '///' + nyv_s['fileListName']), nv_g(mt5olc, wh0qd, zur$8p);
    }, sfnvg_['clearRes'] = function (yna_s, as_6n) {
      as_6n === void 0x0 && (as_6n = ![]);var dw9j0h = this;dw9j0h['clearRes'](yna_s, as_6n);var xw1q0 = nyv_s['getFileInfo'](yna_s);if (xw1q0 && (yna_s['indexOf']('http://') != -0x1 || yna_s['indexOf']('https://') != -0x1)) {
        var t5mk = xw1q0['md5'],
            z$8r = nyv_s['getFileNativePath'](t5mk);nyv_s['remove'](z$8r);
      }
    }, _snyg['onReadNativeCallBack'] = function (rj8z$9, q1037, g4vn_f, fn4g_v, _fnsgv, dr8j9z, wdqh, jh09dw, b2yai6) {
      fn4g_v === void 0x0 && (fn4g_v = !![]), dr8j9z === void 0x0 && (dr8j9z = ![]), jh09dw === void 0x0 && (jh09dw = 0x0);if (!jh09dw) {
        var v_g4;if (g4vn_f == 'json' || g4vn_f == 'atlas') v_g4 = gy_nsv['getJson'](b2yai6['data']);else g4vn_f == 'xml' ? v_g4 = x17w0q['parseXMLFromString'](b2yai6['data']) : v_g4 = b2yai6['data'];wdqh['onLoaded'](v_g4), !gy_nsv['isZiYu'] && gy_nsv['isPosMsgYu'] && g4vn_f != 'arraybuffer' && wx['postMessage']({ 'url': q1037, 'data': v_g4, 'isLoad': !![] });
      } else jh09dw == 0x1 && gy_nsv['EnvConfig']['load']['call'](wdqh, q1037, g4vn_f, fn4g_v, _fnsgv, dr8j9z);
    }, lm5otc(_snyg, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _snyg;
  }(),
      nyv_s = function (zr8u9$) {
    function i2bya6() {
      i2bya6['__super']['call'](this);;
    }return klmot5(i2bya6, 'laya.wx.mini.MiniFileMgr', zr8u9$), i2bya6['isLoadFile'] = function (s_yna) {
      return i2bya6['_fileTypeArr']['indexOf'](s_yna) != -0x1 ? !![] : ![];
    }, i2bya6['getFileInfo'] = function (a6ns_y) {
      var y6sna_ = a6ns_y['split']('?')[0x0],
          f34_vg = i2bya6['filesListObj'][y6sna_];if (f34_vg == null) return null;else return f34_vg;return null;
    }, i2bya6['onFileUpdate'] = function (rpc8$u, a2ys) {
      var e2i = rpc8$u['split']('/'),
          lt = e2i[e2i['length'] - 0x1],
          c5mlt = i2bya6['getFileInfo'](a2ys);if (c5mlt == null) i2bya6['onSaveFile'](a2ys, lt);else {
        if (c5mlt['readyUrl'] != a2ys) i2bya6['remove'](lt, a2ys);
      }
    }, i2bya6['exits'] = function (uz8$, j0h9d) {
      var p8u$cl = i2bya6['getFileNativePath'](uz8$);i2bya6['fs']['getFileInfo']({ 'filePath': p8u$cl, 'success': function (w0hxd) {
          j0h9d != null && j0h9d['runWith']([0x0, w0hxd]);
        }, 'fail': function (_nsav) {
          j0h9d != null && j0h9d['runWith']([0x1, _nsav]);
        } });
    }, i2bya6['read'] = function (i6sy2a, x0wh7, xhwdq0, jzh9dw) {
      x0wh7 === void 0x0 && (x0wh7 = 'ascill'), jzh9dw === void 0x0 && (jzh9dw = '');var oct;jzh9dw != '' ? oct = i2bya6['getFileNativePath'](i6sy2a) : oct = i6sy2a, i2bya6['fs']['readFile']({ 'filePath': oct, 'encoding': x0wh7, 'success': function (v_ngy) {
          xhwdq0 != null && xhwdq0['runWith']([0x0, v_ngy]);
        }, 'fail': function (z8$9r) {
          if (z8$9r && jzh9dw != '') i2bya6['down'](jzh9dw, x0wh7, xhwdq0, jzh9dw);else xhwdq0 != null && xhwdq0['runWith']([0x1]);
        } });
    }, i2bya6['readNativeFile'] = function (c$p5, _nvgsy) {
      i2bya6['fs']['readFile']({ 'filePath': c$p5, 'encoding': '', 'success': function (ctlom5) {
          _nvgsy != null && _nvgsy['runWith']([0x0]);
        }, 'fail': function (tmlok5) {
          _nvgsy != null && _nvgsy['runWith']([0x1]);
        } });
    }, i2bya6['down'] = function (ngs_fv, gnfs_, f41q73, lmcto5) {
      gnfs_ === void 0x0 && (gnfs_ = 'ascill'), lmcto5 === void 0x0 && (lmcto5 = '');var _vg43f = i2bya6['getFileNativePath'](lmcto5),
          n_fgv4 = i2bya6['wxdown']({ 'url': ngs_fv, 'filePath': _vg43f, 'success': function (yns_g) {
          if (yns_g['statusCode'] === 0xc8) i2bya6['readFile'](yns_g['filePath'], gnfs_, f41q73, lmcto5);
        }, 'fail': function (aiyb62) {
          f41q73 != null && f41q73['runWith']([0x1, aiyb62]);
        } });n_fgv4['onProgressUpdate'](function (aynsv) {
        f41q73 != null && f41q73['runWith']([0x2, aynsv['progress']]);
      });
    }, i2bya6['readFile'] = function ($uz8p, fv3, s2i6a, ebi26a) {
      fv3 === void 0x0 && (fv3 = 'ascill'), ebi26a === void 0x0 && (ebi26a = ''), i2bya6['fs']['readFile']({ 'filePath': $uz8p, 'encoding': fv3, 'success': function (r9djzh) {
          if ($uz8p['indexOf']('http://') != -0x1 || $uz8p['indexOf']('https://') != -0x1) i2bya6['onFileUpdate']($uz8p, ebi26a);s2i6a != null && s2i6a['runWith']([0x0, r9djzh]);
        }, 'fail': function (z8rup) {
          if (z8rup) s2i6a != null && s2i6a['runWith']([0x1, z8rup]);
        } });
    }, i2bya6['downImg'] = function (w0xhqd, fg_4n, ays2) {
      ays2 === void 0x0 && (ays2 = '');var _sngvf = i2bya6['wxdown']({ 'url': w0xhqd, 'success': function (aybi2) {
          aybi2['statusCode'] === 0xc8 && i2bya6['copyFile'](aybi2['tempFilePath'], ays2, fg_4n);
        }, 'fail': function (nsyv_a) {
          fg_4n != null && fg_4n['runWith']([0x1, nsyv_a]);
        } });
    }, i2bya6['copyFile'] = function (ouc5p, j9$r, _6ay) {
      var u5c$pl = ouc5p['split']('/'),
          ya6b2i = u5c$pl[u5c$pl['length'] - 0x1],
          y_gvs = j9$r['split']('?')[0x0],
          xdqw0 = i2bya6['getFileInfo'](j9$r),
          _f4nv = i2bya6['getFileNativePath'](ya6b2i);i2bya6['fs']['copyFile']({ 'srcPath': ouc5p, 'destPath': _f4nv, 'success': function (nfv4_g) {
          if (!xdqw0) i2bya6['onSaveFile'](j9$r, ya6b2i), _6ay != null && _6ay['runWith']([0x0]);else {
            if (xdqw0['readyUrl'] != j9$r) i2bya6['remove'](ya6b2i, j9$r, _6ay);
          }
        }, 'fail': function (jdh) {
          _6ay != null && _6ay['runWith']([0x1, jdh]);
        } });
    }, i2bya6['getFileNativePath'] = function (s6yi2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s6yi2;
    }, i2bya6['remove'] = function (p5lct, pcol5u, cmlot5) {
      pcol5u === void 0x0 && (pcol5u = '');var w7x10q = i2bya6['getFileInfo'](pcol5u),
          $puc5 = i2bya6['getFileNativePath'](w7x10q['md5']);ngys['loader']['clearRes'](w7x10q['readyUrl']), i2bya6['fs']['unlink']({ 'filePath': $puc5, 'success': function (ya2b6i) {
          if (pcol5u != '') i2bya6['onSaveFile'](pcol5u, p5lct);cmlot5 != null && cmlot5['runWith']([0x0]);
        }, 'fail': function ($z98) {} });
    }, i2bya6['onSaveFile'] = function (nav_ys, kml5o) {
      var v43gf = nav_ys['split']('?')[0x0];i2bya6['filesListObj'][v43gf] = { 'md5': kml5o, 'readyUrl': nav_ys }, i2bya6['fs']['writeFile']({ 'filePath': i2bya6['fileNativeDir'] + '/' + i2bya6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i2bya6['filesListObj']), 'success': function (nayv) {
          console['log']('写入测试测试成功：', nayv);
        }, 'fail': function (x70wqh) {
          console['log']('写入测试测试失败：', x70wqh);
        } });
    }, i2bya6['existDir'] = function (fv_43, n_4fg) {
      i2bya6['fs']['mkdir']({ 'dirPath': fv_43, 'success': function (x0h7q) {
          n_4fg != null && n_4fg['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_ya6sn) {
          if (_ya6sn['errMsg']['indexOf']('file already exists') != -0x1) i2bya6['readSync'](i2bya6['fileListName'], 'utf8', n_4fg);else n_4fg != null && n_4fg['runWith']([0x1, _ya6sn]);
        } });
    }, i2bya6['readSync'] = function (lkmo, z8u9, ie6ba2, ay26bi) {
      z8u9 === void 0x0 && (z8u9 = 'ascill'), ay26bi === void 0x0 && (ay26bi = '');var h9rzd = i2bya6['getFileNativePath'](lkmo),
          jxhdw0;try {
        jxhdw0 = i2bya6['fs']['readFileSync'](h9rzd), ie6ba2 != null && ie6ba2['runWith']([0x0, { 'data': jxhdw0 }]);
      } catch (zdhjw9) {
        ie6ba2 != null && ie6ba2['runWith']([0x1]);
      }
    }, i2bya6['readCache'] = function () {}, i2bya6['writeCache'] = function (xwhqd0) {
      var f13v4g = readyUrl['split']('?')[0x0];i2bya6['filesListObj'][f13v4g] = { 'md5': md5Name, 'readyUrl': readyUrl }, i2bya6['fs']['writeFile']({ 'filePath': i2bya6['fileNativeDir'] + '/' + i2bya6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i2bya6['filesListObj']), 'success': function (tcl5p) {}, 'fail': function (fq341) {} });
    }, i2bya6['setNativeFileDir'] = function (y62ai) {
      i2bya6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + y62ai;
    }, i2bya6['filesListObj'] = {}, i2bya6['fileNativeDir'] = null, i2bya6['fileListName'] = 'layaairfiles.txt', i2bya6['ziyuFileData'] = {}, lm5otc(i2bya6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), i2bya6;
  }(as26iy),
      h0xqdw = function (urz98$) {
    function v_yg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], v_yg['__super']['call'](this), this['_sound'] = v_yg['_createSound']();
    }klmot5(v_yg, 'laya.wx.mini.MiniSound', urz98$);var b62ae = v_yg['prototype'];return b62ae['load'] = function (aei6b) {
      var oml5c = this;aei6b = whzd9j['formatURL'](aei6b), this['url'] = aei6b;if (v_yg['_audioCache'][aei6b]) {
        this['event']('complete');return;
      }function ur$cp8() {
        if (v_yg['_null'] != undefined) oml5c['_sound']['onCanplay'](v_yg['_null']), oml5c['_sound']['onError'](v_yg['_null']);else try {
          oml5c['_sound']['onCanplay'](null), oml5c['_sound']['onError'](null), v_yg['_null'] = null;
        } catch (g3vf1) {
          console['warn']('[wxmini] _clearSound:' + g3vf1), oml5c['_sound']['onCanplay'](jzhw9d), oml5c['_sound']['onError'](jzhw9d), v_yg['_null'] = jzhw9d;
        }
      }function nyav_() {
        ur$cp8(), $zrup8['loaded'] = !![], $zrup8['event']('complete'), v_yg['_audioCache'][$zrup8['url']] = $zrup8;
      }function q3f1(lcp$u5) {
        console['error']('errCode=' + lcp$u5['errCode'] + '  errMsg=' + lcp$u5['errMsg']), ur$cp8(), $zrup8['event']('error');
      }function jzhw9d() {}this['_sound']['onCanplay'](nyav_), this['_sound']['onError'](q3f1), this['_sound']['src'] = aei6b;var $zrup8 = this;
    }, b62ae['play'] = function (w01xq7, g4_f3) {
      w01xq7 === void 0x0 && (w01xq7 = 0x0), g4_f3 === void 0x0 && (g4_f3 = 0x0);var dwh0xj;if (this['url'] == jw09dh['_tMusic']) {
        if (!v_yg['_musicAudio']) v_yg['_musicAudio'] = v_yg['_createSound']();dwh0xj = v_yg['_musicAudio'];
      } else dwh0xj = v_yg['_createSound']();dwh0xj['src'] = this['url'];var r8zd9j = new n2ays6(dwh0xj);return r8zd9j['url'] = this['url'], r8zd9j['loops'] = g4_f3, r8zd9j['startTime'] = w01xq7, r8zd9j['play'](), jw09dh['addChannel'](r8zd9j), r8zd9j;
    }, b62ae['dispose'] = function () {
      var o5ucpl = v_yg['_audioCache'][this['url']];o5ucpl && (o5ucpl['src'] = '', delete v_yg['_audioCache'][this['url']]);
    }, s6yia(0x0, b62ae, 'duration', function () {
      return this['_sound']['duration'];
    }), v_yg['_createSound'] = function () {
      return v_yg['_id']++, gy_nsv['window']['wx']['createInnerAudioContext']();
    }, v_yg['_musicAudio'] = null, v_yg['_id'] = 0x0, v_yg['_audioCache'] = {}, v_yg['_null'] = undefined, v_yg;
  }(as26iy),
      n2ays6 = function (v_nsya) {
    function eia6b(p5uolc) {
      this['_audio'] = null, this['_onEnd'] = null, eia6b['__super']['call'](this), this['_audio'] = p5uolc, this['_onEnd'] = x17w0q['bind'](this['__onEnd'], this), p5uolc['onEnded'](this['_onEnd']);
    }klmot5(eia6b, 'laya.wx.mini.MiniSoundChannel', v_nsya);var g_fv34 = eia6b['prototype'];return g_fv34['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ngys['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g_fv34['__onNull'] = function () {}, g_fv34['play'] = function () {
      this['isStopped'] = ![], jw09dh['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g_fv34['stop'] = function () {
      this['isStopped'] = !![], jw09dh['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (eia6b['_null'] != undefined) this['_audio']['onEnded'](eia6b['_null']);else try {
        this['_audio']['onEnded'](null), eia6b['_null'] = null;
      } catch (q70x) {
        console['warn']('[wxmini] stop:' + q70x), this['_audio']['onEnded'](x17w0q['bind'](this['__onNull'], this)), eia6b['_null'] = x17w0q['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g_fv34['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g_fv34['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jw09dh['addChannel'](this), this['_audio']['play']();
    }, s6yia(0x0, g_fv34, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), s6yia(0x0, g_fv34, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), s6yia(0x0, g_fv34, 'volume', function () {
      return 0x1;
    }, function (nvsa_y) {}), eia6b['_null'] = undefined, eia6b;
  }(_snvg);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var tok in Laya) {
    var n_sv = Laya[tok];n_sv && n_sv['__isclass'] && (exports[tok] = n_sv);
  }
});