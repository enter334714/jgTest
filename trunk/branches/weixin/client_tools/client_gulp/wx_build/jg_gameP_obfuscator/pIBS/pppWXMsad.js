var E = wx.$p;
(function (window, document, qneb8) {
  var r03z2 = qneb8['un'],
      lphts4 = qneb8['uns'],
      gb9q = qneb8['static'],
      tl_fx = qneb8['class'],
      n3zw05 = qneb8['getset'],
      n98b = qneb8['__newvec'],
      ls4pht = laya['utils']['Browser'],
      n98beq = laya['events']['Event'],
      t4lpxs = laya['events']['EventDispatcher'],
      fxptul = laya['resource']['HTMLImage'],
      yjk$6i = laya['utils']['Handler'],
      n985q = laya['display']['Input'],
      h$ykj = laya['net']['Loader'],
      n5w9e = laya['maths']['Matrix'],
      z05wn3 = laya['renders']['Render'],
      xl4tu = laya['utils']['RunDriver'],
      _futm = laya['media']['Sound'],
      pkl = laya['media']['SoundChannel'],
      gcqdba = laya['media']['SoundManager'],
      phtsl4 = laya['display']['Stage'],
      kj4hi = laya['net']['URL'],
      r02 = laya['utils']['Utils'],
      kijy$h = function () {
    function r1$76v() {}return tl_fx(r1$76v, 'laya.wx.mini.MiniAdpter'), r1$76v['getJson'] = function (cbaqg) {
      return JSON['parse'](cbaqg);
    }, r1$76v['init'] = function (z5nw, z023w) {
      z5nw === void 0x0 && (z5nw = ![]), z023w === void 0x0 && (z023w = ![]);if (r1$76v['_inited']) return;r1$76v['window'] = window;if (r1$76v['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;r1$76v['_inited'] = !![], r1$76v['isZiYu'] = z023w, r1$76v['isPosMsgYu'] = z5nw, r1$76v['EnvConfig'] = {}, !r1$76v['isZiYu'] && (wn593['setNativeFileDir']('/layaairGame'), wn593['existDir'](wn593['fileNativeDir'], yjk$6i['create'](r1$76v, r1$76v['onMkdirCallBack']))), r1$76v['window']['focus'] = function () {}, qneb8['getUrlPath'] = function () {}, r1$76v['window']['logtime'] = function (t4pl) {}, r1$76v['window']['alertTimeLog'] = function (e98q5n) {}, r1$76v['window']['resetShareInfo'] = function () {}, r1$76v['window']['CanvasRenderingContext2D'] = function () {}, r1$76v['window']['CanvasRenderingContext2D']['prototype'] = r1$76v['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], r1$76v['window']['document']['body']['appendChild'] = function () {}, r1$76v['EnvConfig']['pixelRatioInt'] = 0x0, xl4tu['getPixelRatio'] = r1$76v['pixelRatio'], r1$76v['_preCreateElement'] = ls4pht['createElement'], ls4pht['createElement'] = r1$76v['createElement'], xl4tu['createShaderCondition'] = r1$76v['createShaderCondition'], r02['parseXMLFromString'] = r1$76v['parseXMLFromString'], n985q['_createInputElement'] = b8e9n['_createInputElement'], r1$76v['EnvConfig']['load'] = h$ykj['prototype']['load'], h$ykj['prototype']['load'] = ihks4['prototype']['load'], r1$76v['isZiYu'] && z5nw && wx['onMessage'](function (lx4put) {
        lx4put['isLoad'] && (wn593['ziyuFileData'][lx4put['url']] = lx4put['data']);
      });
    }, r1$76v['onMkdirCallBack'] = function (eq85n9, e3nw95) {
      if (!eq85n9) wn593['filesListObj'] = JSON['parse'](e3nw95['data']);
    }, r1$76v['pixelRatio'] = function () {
      if (!r1$76v['EnvConfig']['pixelRatioInt']) try {
        var jsph4 = wx['getSystemInfoSync']();return r1$76v['EnvConfig']['pixelRatioInt'] = jsph4['pixelRatio'], jsph4 = jsph4, jsph4['pixelRatio'];
      } catch (_luxtf) {}return r1$76v['EnvConfig']['pixelRatioInt'];
    }, r1$76v['createElement'] = function (_f) {
      if (_f == 'canvas') {
        var plts4x;return r1$76v['idx'] == 0x1 ? r1$76v['isZiYu'] ? (plts4x = sharedCanvas, plts4x['style'] = {}) : plts4x = window['canvas'] : plts4x = window['wx']['createCanvas'](), r1$76v['idx']++, plts4x;
      } else {
        if (_f == 'textarea' || _f == 'input') return r1$76v['onCreateInput'](_f);else {
          if (_f == 'div') {
            var jkps = r1$76v['_preCreateElement'](_f);return jkps['contains'] = function (tux4) {
              return null;
            }, jkps['removeChild'] = function (f_omux) {}, jkps;
          } else return r1$76v['_preCreateElement'](_f);
        }
      }
    }, r1$76v['onCreateInput'] = function (jshk) {
      var xpuf = r1$76v['_preCreateElement'](jshk);return xpuf['focus'] = b8e9n['wxinputFocus'], xpuf['blur'] = b8e9n['wxinputblur'], xpuf['style'] = {}, xpuf['value'] = 0x0, xpuf['parentElement'] = {}, xpuf['placeholder'] = {}, xpuf['type'] = {}, xpuf['setColor'] = function (y$jk) {}, xpuf['setType'] = function (ih$jky) {}, xpuf['setFontFace'] = function (utflp) {}, xpuf['addEventListener'] = function ($iyjk6) {}, xpuf['contains'] = function (z5new) {
        return null;
      }, xpuf['removeChild'] = function (ykhji$) {}, xpuf;
    }, r1$76v['createShaderCondition'] = function (a8gcbq) {
      var xlpt4u = this,
          j$yhi = function () {
        var aeq9 = a8gcbq;return xlpt4u[a8gcbq['replace']('this.', '')];
      };return j$yhi;
    }, r1$76v['EnvConfig'] = null, r1$76v['window'] = null, r1$76v['_preCreateElement'] = null, r1$76v['_inited'] = ![], r1$76v['wxRequest'] = null, r1$76v['systemInfo'] = null, r1$76v['version'] = '0.0.1', r1$76v['isZiYu'] = ![], r1$76v['isPosMsgYu'] = ![], r1$76v['parseXMLFromString'] = function (dg) {
      var y1$76, s4ltx;dg = dg['replace'](/>\s+</g, '><');try {
        y1$76 = new window['Parser']['DOMParser']()['parseFromString'](dg, 'text/xml');
      } catch (tx4lps) {
        throw '需要引入xml解析库文件';
      }return y1$76;
    }, r1$76v['idx'] = 0x1, r1$76v;
  }(),
      v1r072 = function () {
    function jhk$iy() {}tl_fx(jhk$iy, 'laya.wx.mini.MiniImage');var q8ba9e = jhk$iy['prototype'];return q8ba9e['_loadImage'] = function (xtu_l) {
      var $6v1yi = this,
          zew5n3 = ![];xtu_l['indexOf']('layaNativeDir/') == -0x1 && (zew5n3 = !![], xtu_l = kj4hi['formatURL'](xtu_l));if (!wn593['getFileInfo'](xtu_l)) {
        if (xtu_l['indexOf']('http://') != -0x1 || xtu_l['indexOf']('https://') != -0x1) wn593['downImg'](xtu_l, new yjk$6i(jhk$iy, jhk$iy['onDownImgCallBack'], [xtu_l, $6v1yi]), xtu_l);else jhk$iy['onCreateImage'](xtu_l, $6v1yi, !![]);
      } else jhk$iy['onCreateImage'](xtu_l, $6v1yi, !zew5n3);
    }, jhk$iy['onDownImgCallBack'] = function (iskhj4, w53ze, iyh$kj) {
      if (!iyh$kj) jhk$iy['onCreateImage'](iskhj4, w53ze);else w53ze['onError'](null);
    }, jhk$iy['onCreateImage'] = function (xufmt_, tp4uxl, r27zv0) {
      r27zv0 === void 0x0 && (r27zv0 = ![]);var kjhiys;if (!r27zv0) {
        var y1i$6v = wn593['getFileInfo'](xufmt_),
            b8e9aq = y1i$6v['md5'];kjhiys = wn593['getFileNativePath'](b8e9aq);
      } else kjhiys = xufmt_;if (tp4uxl['imgCache'] == null) tp4uxl['imgCache'] = {};var vzr20;function $viy() {
        vzr20['onload'] = null, vzr20['onerror'] = null, delete tp4uxl['imgCache'][xufmt_];
      };var psk4hl = function () {
        $viy(), tp4uxl['onLoaded'](vzr20);
      },
          fmxut = function () {
        $viy(), tp4uxl['event']('error', 'Load image failed');
      };tp4uxl['_type'] == 'nativeimage' ? (vzr20 = new ls4pht['window']['Image'](), vzr20['crossOrigin'] = '', vzr20['onload'] = psk4hl, vzr20['onerror'] = fmxut, vzr20['src'] = kjhiys, tp4uxl['imgCache'][xufmt_] = vzr20) : new fxptul['create'](kjhiys, { 'onload': psk4hl, 'onerror': fmxut, 'onCreate': function (qadbgc) {
          vzr20 = qadbgc, tp4uxl['imgCache'][xufmt_] = qadbgc;
        } });
    }, jhk$iy;
  }(),
      b8e9n = function () {
    function ux_o() {}return tl_fx(ux_o, 'laya.wx.mini.MiniInput'), ux_o['_createInputElement'] = function () {
      n985q['_initInput'](n985q['area'] = ls4pht['createElement']('textarea')), n985q['_initInput'](n985q['input'] = ls4pht['createElement']('input')), n985q['inputContainer'] = ls4pht['createElement']('div'), n985q['inputContainer']['style']['position'] = 'absolute', n985q['inputContainer']['style']['zIndex'] = 0x186a0, ls4pht['container']['appendChild'](n985q['inputContainer']), n985q['inputContainer']['setPos'] = function (u_tmfx, w03zr2) {
        n985q['inputContainer']['style']['left'] = u_tmfx + 'px', n985q['inputContainer']['style']['top'] = w03zr2 + 'px';
      }, qneb8['stage']['on']('resize', null, ux_o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ew) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), gcqdba['_soundClass'] = xtfl_, gcqdba['_musicClass'] = xtfl_;
    }, ux_o['_onStageResize'] = function () {
      var bqcga = qneb8['stage']['_canvasTransform']['identity']();bqcga['scale'](ls4pht['width'] / z05wn3['canvas']['width'] / xl4tu['getPixelRatio'](), ls4pht['height'] / z05wn3['canvas']['height'] / xl4tu['getPixelRatio']());
    }, ux_o['wxinputFocus'] = function (jyi$1) {
      var xstlp4 = n985q['inputElement']['target'];if (xstlp4 && !xstlp4['editable']) return;kijy$h['window']['wx']['offKeyboardConfirm'](), kijy$h['window']['wx']['offKeyboardInput'](), kijy$h['window']['wx']['showKeyboard']({ 'defaultValue': xstlp4['text'], 'maxLength': xstlp4['maxChars'], 'multiple': xstlp4['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (n035wz) {}, 'fail': function (zn3w) {} }), kijy$h['window']['wx']['onKeyboardConfirm'](function (hijks) {
        var ptxfu = hijks ? hijks['value'] : '';xstlp4['text'] = ptxfu, xstlp4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), kijy$h['window']['wx']['onKeyboardInput'](function (i6y1j) {
        var yi6$jk = i6y1j ? i6y1j['value'] : '';if (!xstlp4['multiline']) {
          if (yi6$jk['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }xstlp4['text'] = yi6$jk, xstlp4['event']('input');
      });
    }, ux_o['inputEnter'] = function () {
      n985q['inputElement']['target']['focus'] = ![];
    }, ux_o['wxinputblur'] = function () {
      ux_o['hideKeyboard']();
    }, ux_o['hideKeyboard'] = function () {
      kijy$h['window']['wx']['offKeyboardConfirm'](), kijy$h['window']['wx']['offKeyboardInput'](), kijy$h['window']['wx']['hideKeyboard']({ 'success': function (hkp4sj) {
          console['log']('隐藏键盘');
        }, 'fail': function (p4shl) {
          console['log']('隐藏键盘出错:' + (p4shl ? p4shl['errMsg'] : ''));
        } });
    }, ux_o;
  }(),
      ihks4 = function () {
    function xtlsp() {}tl_fx(xtlsp, 'laya.wx.mini.MiniLoader');var t_fulx = xtlsp['prototype'];return t_fulx['load'] = function (aqeb8, tpslh, fl_xt, i6y1, z053wn) {
      fl_xt === void 0x0 && (fl_xt = !![]), z053wn === void 0x0 && (z053wn = ![]);var ikjyh$ = this;ikjyh$['_url'] = aqeb8;if (aqeb8['indexOf']('data:image') === 0x0) ikjyh$['_type'] = tpslh = 'image';else ikjyh$['_type'] = tpslh || (tpslh = ikjyh$['getTypeFromUrl'](aqeb8));ikjyh$['_cache'] = fl_xt, ikjyh$['_data'] = null;var $khj = 'ascii';if (aqeb8['indexOf']('.fnt') != -0x1) $khj = 'utf8';else tpslh == 'arraybuffer' && ($khj = '');;var khy$i = r02['getFileExtension'](aqeb8);if (xtlsp['_fileTypeArr']['indexOf'](khy$i) != -0x1) kijy$h['EnvConfig']['load']['call'](this, aqeb8, tpslh, fl_xt, i6y1, z053wn);else {
        if (!wn593['getFileInfo'](aqeb8)) {
          if (aqeb8['indexOf']('layaNativeDir/') != -0x1) {
            if (kijy$h['isZiYu']) {
              var bacqd = wn593['ziyuFileData'][aqeb8];ikjyh$['onLoaded'](bacqd);return;
            } else {
              cosnole['log']('read read'), wn593['read'](aqeb8, $khj, new yjk$6i(xtlsp, xtlsp['onReadNativeCallBack'], [$khj, aqeb8, tpslh, fl_xt, i6y1, z053wn, ikjyh$]));return;
            }
          }if (kj4hi['rootPath'] == '') var iy6j$ = aqeb8;else iy6j$ = aqeb8['split'](kj4hi['rootPath'])[0x0];aqeb8['indexOf']('http://') != -0x1 || aqeb8['indexOf']('https://') != -0x1 ? kijy$h['EnvConfig']['load']['call'](ikjyh$, aqeb8, tpslh, fl_xt, i6y1, z053wn) : wn593['readFile'](iy6j$, $khj, new yjk$6i(xtlsp, xtlsp['onReadNativeCallBack'], [$khj, aqeb8, tpslh, fl_xt, i6y1, z053wn, ikjyh$]), aqeb8);
        } else kijy$h['EnvConfig']['load']['call'](this, aqeb8, tpslh, fl_xt, i6y1, z053wn);
      }
    }, t_fulx['resMgrLoad'] = function (xu_of, yjhs, be89, abgcdq, ki$j6y, yihsk, pts4xl) {
      be89 === void 0x0 && (be89 = 0x0), abgcdq === void 0x0 && (abgcdq = ![]), ki$j6y === void 0x0 && (ki$j6y = ![]), yihsk === void 0x0 && (yihsk = 0x0), pts4xl === void 0x0 && (pts4xl = 0x3), xu_of['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xu_of), kijy$h['EnvConfig']['resMgrLoad'](xu_of, ($ikj6, e3z5, cdbag) => {
        xtlsp['prototype']['resMgrLoadCallBack']($ikj6, e3z5, cdbag, yjhs);
      }, be89, abgcdq, ki$j6y, yihsk, pts4xl);
    }, t_fulx['resMgrLoadCallBack'] = function (w5n0, gaqc, _mxuo, e5wzn3) {
      console['log']('buff:::', w5n0, _mxuo, wn593['fileNativeDir'] + '///' + wn593['fileListName']), e5wzn3(w5n0, gaqc, _mxuo);
    }, t_fulx['clearRes'] = function (zv0r2, fmu_o) {
      fmu_o === void 0x0 && (fmu_o = ![]);var jkih = this;jkih['clearRes'](zv0r2, fmu_o);var $khji = wn593['getFileInfo'](zv0r2);if ($khji && (zv0r2['indexOf']('http://') != -0x1 || zv0r2['indexOf']('https://') != -0x1)) {
        var sjh4pk = $khji['md5'],
            ph4skj = wn593['getFileNativePath'](sjh4pk);wn593['remove'](ph4skj);
      }
    }, xtlsp['onReadNativeCallBack'] = function (tl4pxu, u4x, xl, zr72v0, ihjy, cqdabg, tlp4s, b98qga, his4jk) {
      zr72v0 === void 0x0 && (zr72v0 = !![]), cqdabg === void 0x0 && (cqdabg = ![]), b98qga === void 0x0 && (b98qga = 0x0);if (!b98qga) {
        var z3w0r2;if (xl == 'json' || xl == 'atlas') z3w0r2 = kijy$h['getJson'](his4jk['data']);else xl == 'xml' ? z3w0r2 = r02['parseXMLFromString'](his4jk['data']) : z3w0r2 = his4jk['data'];tlp4s['onLoaded'](z3w0r2), !kijy$h['isZiYu'] && kijy$h['isPosMsgYu'] && xl != 'arraybuffer' && wx['postMessage']({ 'url': u4x, 'data': z3w0r2, 'isLoad': !![] });
      } else b98qga == 0x1 && kijy$h['EnvConfig']['load']['call'](tlp4s, u4x, xl, zr72v0, ihjy, cqdabg);
    }, gb9q(xtlsp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xtlsp;
  }(),
      wn593 = function (tspl) {
    function rv1$6() {
      rv1$6['__super']['call'](this);;
    }return tl_fx(rv1$6, 'laya.wx.mini.MiniFileMgr', tspl), rv1$6['isLoadFile'] = function (qg8cab) {
      return rv1$6['_fileTypeArr']['indexOf'](qg8cab) != -0x1 ? !![] : ![];
    }, rv1$6['getFileInfo'] = function (tlxpu4) {
      var ks4hj = tlxpu4['split']('?')[0x0],
          tup4xl = rv1$6['filesListObj'][ks4hj];if (tup4xl == null) return null;else return tup4xl;return null;
    }, rv1$6['onFileUpdate'] = function (yv$716, r7z0v) {
      var z372r = yv$716['split']('/'),
          rv2z07 = z372r[z372r['length'] - 0x1],
          aq8g9 = rv1$6['getFileInfo'](r7z0v);if (aq8g9 == null) rv1$6['onSaveFile'](r7z0v, rv2z07);else {
        if (aq8g9['readyUrl'] != r7z0v) rv1$6['remove'](rv2z07, r7z0v);
      }
    }, rv1$6['exits'] = function (yj$ki6, y$1j) {
      var wz23r = rv1$6['getFileNativePath'](yj$ki6);rv1$6['fs']['getFileInfo']({ 'filePath': wz23r, 'success': function (y$167v) {
          y$1j != null && y$1j['runWith']([0x0, y$167v]);
        }, 'fail': function (k6jy$) {
          y$1j != null && y$1j['runWith']([0x1, k6jy$]);
        } });
    }, rv1$6['read'] = function (dgbac, mxou, putx, e9aqb8) {
      mxou === void 0x0 && (mxou = 'ascill'), e9aqb8 === void 0x0 && (e9aqb8 = '');var psj4k;e9aqb8 != '' ? psj4k = rv1$6['getFileNativePath'](dgbac) : psj4k = dgbac, rv1$6['fs']['readFile']({ 'filePath': psj4k, 'encoding': mxou, 'success': function (a89qb) {
          putx != null && putx['runWith']([0x0, a89qb]);
        }, 'fail': function (_ftux) {
          if (_ftux && e9aqb8 != '') rv1$6['down'](e9aqb8, mxou, putx, e9aqb8);else putx != null && putx['runWith']([0x1]);
        } });
    }, rv1$6['readNativeFile'] = function (w305n, e9q5) {
      rv1$6['fs']['readFile']({ 'filePath': w305n, 'encoding': '', 'success': function (e8qb) {
          e9q5 != null && e9q5['runWith']([0x0]);
        }, 'fail': function (sjkhiy) {
          e9q5 != null && e9q5['runWith']([0x1]);
        } });
    }, rv1$6['down'] = function (q9a8, q95, ij1y$6, dcaqg) {
      q95 === void 0x0 && (q95 = 'ascill'), dcaqg === void 0x0 && (dcaqg = '');var e8q9nb = rv1$6['getFileNativePath'](dcaqg),
          shjp = rv1$6['wxdown']({ 'url': q9a8, 'filePath': e8q9nb, 'success': function (u_ofm) {
          if (u_ofm['statusCode'] === 0xc8) rv1$6['readFile'](u_ofm['filePath'], q95, ij1y$6, dcaqg);
        }, 'fail': function (ps4thl) {
          ij1y$6 != null && ij1y$6['runWith']([0x1, ps4thl]);
        } });shjp['onProgressUpdate'](function (uxlp4t) {
        ij1y$6 != null && ij1y$6['runWith']([0x2, uxlp4t['progress']]);
      });
    }, rv1$6['readFile'] = function (yh$kij, stx4lp, $6yi1j, z0nw35) {
      stx4lp === void 0x0 && (stx4lp = 'ascill'), z0nw35 === void 0x0 && (z0nw35 = ''), rv1$6['fs']['readFile']({ 'filePath': yh$kij, 'encoding': stx4lp, 'success': function (y$6i1j) {
          if (yh$kij['indexOf']('http://') != -0x1 || yh$kij['indexOf']('https://') != -0x1) rv1$6['onFileUpdate'](yh$kij, z0nw35);$6yi1j != null && $6yi1j['runWith']([0x0, y$6i1j]);
        }, 'fail': function (_lxuf) {
          if (_lxuf) $6yi1j != null && $6yi1j['runWith']([0x1, _lxuf]);
        } });
    }, rv1$6['downImg'] = function (gba89q, muxtf, hlt4sp) {
      hlt4sp === void 0x0 && (hlt4sp = '');var qb8ae9 = rv1$6['wxdown']({ 'url': gba89q, 'success': function (kisjhy) {
          kisjhy['statusCode'] === 0xc8 && rv1$6['copyFile'](kisjhy['tempFilePath'], hlt4sp, muxtf);
        }, 'fail': function (lfxup) {
          muxtf != null && muxtf['runWith']([0x1, lfxup]);
        } });
    }, rv1$6['copyFile'] = function (ikjs, f_oux, v2z0) {
      var e9qn5 = ikjs['split']('/'),
          _mufx = e9qn5[e9qn5['length'] - 0x1],
          qcbad = f_oux['split']('?')[0x0],
          r1$76 = rv1$6['getFileInfo'](f_oux),
          lsht = rv1$6['getFileNativePath'](_mufx);rv1$6['fs']['copyFile']({ 'srcPath': ikjs, 'destPath': lsht, 'success': function (uptlx4) {
          if (!r1$76) rv1$6['onSaveFile'](f_oux, _mufx), v2z0 != null && v2z0['runWith']([0x0]);else {
            if (r1$76['readyUrl'] != f_oux) rv1$6['remove'](_mufx, f_oux, v2z0);
          }
        }, 'fail': function (ne359w) {
          v2z0 != null && v2z0['runWith']([0x1, ne359w]);
        } });
    }, rv1$6['getFileNativePath'] = function (vrz0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vrz0;
    }, rv1$6['remove'] = function (j$6yi, i1y6j$, jhsy) {
      i1y6j$ === void 0x0 && (i1y6j$ = '');var r3w0 = rv1$6['getFileInfo'](i1y6j$),
          e8w5 = rv1$6['getFileNativePath'](r3w0['md5']);qneb8['loader']['clearRes'](r3w0['readyUrl']), rv1$6['fs']['unlink']({ 'filePath': e8w5, 'success': function (r216) {
          if (i1y6j$ != '') rv1$6['onSaveFile'](i1y6j$, j$6yi);jhsy != null && jhsy['runWith']([0x0]);
        }, 'fail': function (uxfom) {} });
    }, rv1$6['onSaveFile'] = function (h$kyji, f_lux) {
      var yj$61 = h$kyji['split']('?')[0x0];rv1$6['filesListObj'][yj$61] = { 'md5': f_lux, 'readyUrl': h$kyji }, rv1$6['fs']['writeFile']({ 'filePath': rv1$6['fileNativeDir'] + '/' + rv1$6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rv1$6['filesListObj']), 'success': function (gaqbc) {
          console['log']('写入测试测试成功：', gaqbc);
        }, 'fail': function (s4klhp) {
          console['log']('写入测试测试失败：', s4klhp);
        } });
    }, rv1$6['existDir'] = function (qcagb, s4htl) {
      rv1$6['fs']['mkdir']({ 'dirPath': qcagb, 'success': function (uxltf) {
          s4htl != null && s4htl['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (slptx) {
          if (slptx['errMsg']['indexOf']('file already exists') != -0x1) rv1$6['readSync'](rv1$6['fileListName'], 'utf8', s4htl);else s4htl != null && s4htl['runWith']([0x1, slptx]);
        } });
    }, rv1$6['readSync'] = function (abdgq, fmx_o, vy16i, tfxupl) {
      fmx_o === void 0x0 && (fmx_o = 'ascill'), tfxupl === void 0x0 && (tfxupl = '');var n5z30 = rv1$6['getFileNativePath'](abdgq),
          ijy$kh;try {
        ijy$kh = rv1$6['fs']['readFileSync'](n5z30), vy16i != null && vy16i['runWith']([0x0, { 'data': ijy$kh }]);
      } catch (v2r70) {
        vy16i != null && vy16i['runWith']([0x1]);
      }
    }, rv1$6['readCache'] = function () {}, rv1$6['writeCache'] = function (phl4t) {
      var cabqdg = readyUrl['split']('?')[0x0];rv1$6['filesListObj'][cabqdg] = { 'md5': md5Name, 'readyUrl': readyUrl }, rv1$6['fs']['writeFile']({ 'filePath': rv1$6['fileNativeDir'] + '/' + rv1$6['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rv1$6['filesListObj']), 'success': function (x4tu) {}, 'fail': function (zv72r) {} });
    }, rv1$6['setNativeFileDir'] = function (dcqb) {
      rv1$6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + dcqb;
    }, rv1$6['filesListObj'] = {}, rv1$6['fileNativeDir'] = null, rv1$6['fileListName'] = 'layaairfiles.txt', rv1$6['ziyuFileData'] = {}, gb9q(rv1$6, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rv1$6;
  }(t4lpxs),
      xtfl_ = function (p4lxtu) {
    function ls4tp() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ls4tp['__super']['call'](this), this['_sound'] = ls4tp['_createSound']();
    }tl_fx(ls4tp, 'laya.wx.mini.MiniSound', p4lxtu);var plhs4k = ls4tp['prototype'];return plhs4k['load'] = function (yji6k$) {
      var eqb = this;yji6k$ = kj4hi['formatURL'](yji6k$), this['url'] = yji6k$;if (ls4tp['_audioCache'][yji6k$]) {
        this['event']('complete');return;
      }function ysihjk() {
        if (ls4tp['_null'] != undefined) eqb['_sound']['onCanplay'](ls4tp['_null']), eqb['_sound']['onError'](ls4tp['_null']);else try {
          eqb['_sound']['onCanplay'](null), eqb['_sound']['onError'](null), ls4tp['_null'] = null;
        } catch (tlhp4s) {
          console['warn']('[wxmini] _clearSound:' + tlhp4s), eqb['_sound']['onCanplay'](syjki), eqb['_sound']['onError'](syjki), ls4tp['_null'] = syjki;
        }
      }function f_mx() {
        ysihjk(), $jyk6i['loaded'] = !![], $jyk6i['event']('complete'), ls4tp['_audioCache'][$jyk6i['url']] = $jyk6i;
      }function kishjy(rz270v) {
        console['error']('errCode=' + rz270v['errCode'] + '  errMsg=' + rz270v['errMsg']), ysihjk(), $jyk6i['event']('error');
      }function syjki() {}this['_sound']['onCanplay'](f_mx), this['_sound']['onError'](kishjy), this['_sound']['src'] = yji6k$;var $jyk6i = this;
    }, plhs4k['play'] = function (w58e9n, qe5n8) {
      w58e9n === void 0x0 && (w58e9n = 0x0), qe5n8 === void 0x0 && (qe5n8 = 0x0);var e9wn8;if (this['url'] == gcqdba['_tMusic']) {
        if (!ls4tp['_musicAudio']) ls4tp['_musicAudio'] = ls4tp['_createSound']();e9wn8 = ls4tp['_musicAudio'];
      } else e9wn8 = ls4tp['_createSound']();e9wn8['src'] = this['url'];var o_uf = new xmu_tf(e9wn8);return o_uf['url'] = this['url'], o_uf['loops'] = qe5n8, o_uf['startTime'] = w58e9n, o_uf['play'](), gcqdba['addChannel'](o_uf), o_uf;
    }, plhs4k['dispose'] = function () {
      var adqcb = ls4tp['_audioCache'][this['url']];adqcb && (adqcb['src'] = '', delete ls4tp['_audioCache'][this['url']]);
    }, n3zw05(0x0, plhs4k, 'duration', function () {
      return this['_sound']['duration'];
    }), ls4tp['_createSound'] = function () {
      return ls4tp['_id']++, kijy$h['window']['wx']['createInnerAudioContext']();
    }, ls4tp['_musicAudio'] = null, ls4tp['_id'] = 0x0, ls4tp['_audioCache'] = {}, ls4tp['_null'] = undefined, ls4tp;
  }(t4lpxs),
      xmu_tf = function (jki$y6) {
    function w0253(aqb) {
      this['_audio'] = null, this['_onEnd'] = null, w0253['__super']['call'](this), this['_audio'] = aqb, this['_onEnd'] = r02['bind'](this['__onEnd'], this), aqb['onEnded'](this['_onEnd']);
    }tl_fx(w0253, 'laya.wx.mini.MiniSoundChannel', jki$y6);var hsij4k = w0253['prototype'];return hsij4k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (qneb8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hsij4k['__onNull'] = function () {}, hsij4k['play'] = function () {
      this['isStopped'] = ![], gcqdba['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hsij4k['stop'] = function () {
      this['isStopped'] = !![], gcqdba['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (w0253['_null'] != undefined) this['_audio']['onEnded'](w0253['_null']);else try {
        this['_audio']['onEnded'](null), w0253['_null'] = null;
      } catch (uxltfp) {
        console['warn']('[wxmini] stop:' + uxltfp), this['_audio']['onEnded'](r02['bind'](this['__onNull'], this)), w0253['_null'] = r02['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hsij4k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hsij4k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], gcqdba['addChannel'](this), this['_audio']['play']();
    }, n3zw05(0x0, hsij4k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), n3zw05(0x0, hsij4k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), n3zw05(0x0, hsij4k, 'volume', function () {
      return 0x1;
    }, function (rz30w) {}), w0253['_null'] = undefined, w0253;
  }(pkl);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var iyv1$6 in Laya) {
    var w532z = Laya[iyv1$6];w532z && w532z['__isclass'] && (exports[iyv1$6] = w532z);
  }
});