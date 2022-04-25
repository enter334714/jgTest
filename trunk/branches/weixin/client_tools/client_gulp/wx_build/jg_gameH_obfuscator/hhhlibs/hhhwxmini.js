var O = wx.$C;
(function (window, document, lcu8p) {
  var xq31 = lcu8p['un'],
      yvgns = lcu8p['uns'],
      _nas6y = lcu8p['static'],
      j89rzd = lcu8p['class'],
      f34g_ = lcu8p['getset'],
      l8p$uc = lcu8p['__newvec'],
      q7f31 = laya['utils']['Browser'],
      wq0dxh = laya['events']['Event'],
      dx0hwj = laya['events']['EventDispatcher'],
      vg_34f = laya['resource']['HTMLImage'],
      $9zu8 = laya['utils']['Handler'],
      x31q0 = laya['display']['Input'],
      clmot = laya['net']['Loader'],
      i62ays = laya['maths']['Matrix'],
      _asvyn = laya['renders']['Render'],
      upr$z8 = laya['utils']['RunDriver'],
      $rcu = laya['media']['Sound'],
      pcul5 = laya['media']['SoundChannel'],
      f34 = laya['media']['SoundManager'],
      moct = laya['display']['Stage'],
      yvsn_g = laya['net']['URL'],
      x43q17 = laya['utils']['Utils'],
      aeib = function () {
    function f3gv() {}return j89rzd(f3gv, 'laya.wx.mini.MiniAdpter'), f3gv['getJson'] = function (s_ng) {
      return JSON['parse'](s_ng);
    }, f3gv['init'] = function (ysa2n6, jhd0w9) {
      ysa2n6 === void 0x0 && (ysa2n6 = ![]), jhd0w9 === void 0x0 && (jhd0w9 = ![]);if (f3gv['_inited']) return;f3gv['window'] = window;if (f3gv['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;f3gv['_inited'] = !![], f3gv['isZiYu'] = jhd0w9, f3gv['isPosMsgYu'] = ysa2n6, f3gv['EnvConfig'] = {}, !f3gv['isZiYu'] && (fgv13['setNativeFileDir']('/layaairGame'), fgv13['existDir'](fgv13['fileNativeDir'], $9zu8['create'](f3gv, f3gv['onMkdirCallBack']))), f3gv['window']['focus'] = function () {}, lcu8p['getUrlPath'] = function () {}, f3gv['window']['logtime'] = function (svfng) {}, f3gv['window']['alertTimeLog'] = function (n6sya) {}, f3gv['window']['resetShareInfo'] = function () {}, f3gv['window']['CanvasRenderingContext2D'] = function () {}, f3gv['window']['CanvasRenderingContext2D']['prototype'] = f3gv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f3gv['window']['document']['body']['appendChild'] = function () {}, f3gv['EnvConfig']['pixelRatioInt'] = 0x0, upr$z8['getPixelRatio'] = f3gv['pixelRatio'], f3gv['_preCreateElement'] = q7f31['createElement'], q7f31['createElement'] = f3gv['createElement'], upr$z8['createShaderCondition'] = f3gv['createShaderCondition'], x43q17['parseXMLFromString'] = f3gv['parseXMLFromString'], x31q0['_createInputElement'] = x170qw['_createInputElement'], f3gv['EnvConfig']['load'] = clmot['prototype']['load'], clmot['prototype']['load'] = q14f73['prototype']['load'], f3gv['isZiYu'] && ysa2n6 && wx['onMessage'](function (_3g4f) {
        _3g4f['isLoad'] && (fgv13['ziyuFileData'][_3g4f['url']] = _3g4f['data']);
      });
    }, f3gv['onMkdirCallBack'] = function (hx7q0, olkmt) {
      if (!hx7q0) fgv13['filesListObj'] = JSON['parse'](olkmt['data']);
    }, f3gv['pixelRatio'] = function () {
      if (!f3gv['EnvConfig']['pixelRatioInt']) try {
        var h07qx = wx['getSystemInfoSync']();return f3gv['EnvConfig']['pixelRatioInt'] = h07qx['pixelRatio'], h07qx = h07qx, h07qx['pixelRatio'];
      } catch (d9rhzj) {}return f3gv['EnvConfig']['pixelRatioInt'];
    }, f3gv['createElement'] = function (l$8uc) {
      if (l$8uc == 'canvas') {
        var tlomc5;return f3gv['idx'] == 0x1 ? f3gv['isZiYu'] ? (tlomc5 = sharedCanvas, tlomc5['style'] = {}) : tlomc5 = window['canvas'] : tlomc5 = window['wx']['createCanvas'](), f3gv['idx']++, tlomc5;
      } else {
        if (l$8uc == 'textarea' || l$8uc == 'input') return f3gv['onCreateInput'](l$8uc);else {
          if (l$8uc == 'div') {
            var zd8j = f3gv['_preCreateElement'](l$8uc);return zd8j['contains'] = function (vgf_s) {
              return null;
            }, zd8j['removeChild'] = function (nv4g_) {}, zd8j;
          } else return f3gv['_preCreateElement'](l$8uc);
        }
      }
    }, f3gv['onCreateInput'] = function (plu5o) {
      var to5clp = f3gv['_preCreateElement'](plu5o);return to5clp['focus'] = x170qw['wxinputFocus'], to5clp['blur'] = x170qw['wxinputblur'], to5clp['style'] = {}, to5clp['value'] = 0x0, to5clp['parentElement'] = {}, to5clp['placeholder'] = {}, to5clp['type'] = {}, to5clp['setColor'] = function (_nygsv) {}, to5clp['setType'] = function (nfg4v_) {}, to5clp['setFontFace'] = function (b62yi) {}, to5clp['addEventListener'] = function (ei2ab6) {}, to5clp['contains'] = function (v4g3) {
        return null;
      }, to5clp['removeChild'] = function (nsay_v) {}, to5clp;
    }, f3gv['createShaderCondition'] = function (w0dxqh) {
      var r8$z9u = this,
          vg_yn = function () {
        var jzwd9 = w0dxqh;return r8$z9u[w0dxqh['replace']('this.', '')];
      };return vg_yn;
    }, f3gv['EnvConfig'] = null, f3gv['window'] = null, f3gv['_preCreateElement'] = null, f3gv['_inited'] = ![], f3gv['wxRequest'] = null, f3gv['systemInfo'] = null, f3gv['version'] = '0.0.1', f3gv['isZiYu'] = ![], f3gv['isPosMsgYu'] = ![], f3gv['parseXMLFromString'] = function (f_g4) {
      var upc5l$, $c5lup;f_g4 = f_g4['replace'](/>\s+</g, '><');try {
        upc5l$ = new window['Parser']['DOMParser']()['parseFromString'](f_g4, 'text/xml');
      } catch (f31q) {
        throw '需要引入xml解析库文件';
      }return upc5l$;
    }, f3gv['idx'] = 0x1, f3gv;
  }(),
      g_vysn = function () {
    function rj89z() {}j89rzd(rj89z, 'laya.wx.mini.MiniImage');var n_6y = rj89z['prototype'];return n_6y['_loadImage'] = function (_nysa) {
      var vgyn = this,
          hz9jd = ![];_nysa['indexOf']('layaNativeDir/') == -0x1 && (hz9jd = !![], _nysa = yvsn_g['formatURL'](_nysa));if (!fgv13['getFileInfo'](_nysa)) {
        if (_nysa['indexOf']('http://') != -0x1 || _nysa['indexOf']('https://') != -0x1) fgv13['downImg'](_nysa, new $9zu8(rj89z, rj89z['onDownImgCallBack'], [_nysa, vgyn]), _nysa);else rj89z['onCreateImage'](_nysa, vgyn, !![]);
      } else rj89z['onCreateImage'](_nysa, vgyn, !hz9jd);
    }, rj89z['onDownImgCallBack'] = function (a2b6y, dzrj9, d9zjh) {
      if (!d9zjh) rj89z['onCreateImage'](a2b6y, dzrj9);else dzrj9['onError'](null);
    }, rj89z['onCreateImage'] = function (na6sy, tlo5p, qd) {
      qd === void 0x0 && (qd = ![]);var a6e2b;if (!qd) {
        var isya = fgv13['getFileInfo'](na6sy),
            wj0hdx = isya['md5'];a6e2b = fgv13['getFileNativePath'](wj0hdx);
      } else a6e2b = na6sy;if (tlo5p['imgCache'] == null) tlo5p['imgCache'] = {};var hw07qx;function r$c8u() {
        hw07qx['onload'] = null, hw07qx['onerror'] = null, delete tlo5p['imgCache'][na6sy];
      };var gf1v4 = function () {
        r$c8u(), tlo5p['onLoaded'](hw07qx);
      },
          ctl5m = function () {
        r$c8u(), tlo5p['event']('error', 'Load image failed');
      };tlo5p['_type'] == 'nativeimage' ? (hw07qx = new q7f31['window']['Image'](), hw07qx['crossOrigin'] = '', hw07qx['onload'] = gf1v4, hw07qx['onerror'] = ctl5m, hw07qx['src'] = a6e2b, tlo5p['imgCache'][na6sy] = hw07qx) : new vg_34f['create'](a6e2b, { 'onload': gf1v4, 'onerror': ctl5m, 'onCreate': function (zr$u8p) {
          hw07qx = zr$u8p, tlo5p['imgCache'][na6sy] = zr$u8p;
        } });
    }, rj89z;
  }(),
      x170qw = function () {
    function p$8ruc() {}return j89rzd(p$8ruc, 'laya.wx.mini.MiniInput'), p$8ruc['_createInputElement'] = function () {
      x31q0['_initInput'](x31q0['area'] = q7f31['createElement']('textarea')), x31q0['_initInput'](x31q0['input'] = q7f31['createElement']('input')), x31q0['inputContainer'] = q7f31['createElement']('div'), x31q0['inputContainer']['style']['position'] = 'absolute', x31q0['inputContainer']['style']['zIndex'] = 0x186a0, q7f31['container']['appendChild'](x31q0['inputContainer']), x31q0['inputContainer']['setPos'] = function (t5ocml, x714q3) {
        x31q0['inputContainer']['style']['left'] = t5ocml + 'px', x31q0['inputContainer']['style']['top'] = x714q3 + 'px';
      }, lcu8p['stage']['on']('resize', null, p$8ruc['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (n_6ya) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), f34['_soundClass'] = rjz9$8, f34['_musicClass'] = rjz9$8, window['_videoClass'] = q0731;
    }, p$8ruc['_onStageResize'] = function () {
      var dr = lcu8p['stage']['_canvasTransform']['identity']();dr['scale'](q7f31['width'] / _asvyn['canvas']['width'] / upr$z8['getPixelRatio'](), q7f31['height'] / _asvyn['canvas']['height'] / upr$z8['getPixelRatio']());
    }, p$8ruc['wxinputFocus'] = function (f_g4vn) {
      var _ysvg = x31q0['inputElement']['target'];if (_ysvg && !_ysvg['editable']) return;aeib['window']['wx']['offKeyboardConfirm'](), aeib['window']['wx']['offKeyboardInput'](), aeib['window']['wx']['showKeyboard']({ 'defaultValue': _ysvg['text'], 'maxLength': _ysvg['maxChars'], 'multiple': _ysvg['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($cu5p) {}, 'fail': function (whdqx0) {} }), aeib['window']['wx']['onKeyboardConfirm'](function (x1073) {
        var fq371 = x1073 ? x1073['value'] : '';_ysvg['text'] = fq371, _ysvg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), aeib['window']['wx']['onKeyboardInput'](function (jrd) {
        var $5upl = jrd ? jrd['value'] : '';if (!_ysvg['multiline']) {
          if ($5upl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_ysvg['text'] = $5upl, _ysvg['event']('input');
      });
    }, p$8ruc['inputEnter'] = function () {
      x31q0['inputElement']['target']['focus'] = ![];
    }, p$8ruc['wxinputblur'] = function () {
      p$8ruc['hideKeyboard']();
    }, p$8ruc['hideKeyboard'] = function () {
      aeib['window']['wx']['offKeyboardConfirm'](), aeib['window']['wx']['offKeyboardInput'](), aeib['window']['wx']['hideKeyboard']({ 'success': function (l5cto) {
          console['log']('隐藏键盘');
        }, 'fail': function (gf1v) {
          console['log']('隐藏键盘出错:' + (gf1v ? gf1v['errMsg'] : ''));
        } });
    }, p$8ruc;
  }(),
      q14f73 = function () {
    function j0wdh() {}j89rzd(j0wdh, 'laya.wx.mini.MiniLoader');var w7h0xq = j0wdh['prototype'];return w7h0xq['load'] = function (dhxw0j, aysv_, na_s6, sn6a, cp5o) {
      na_s6 === void 0x0 && (na_s6 = !![]), cp5o === void 0x0 && (cp5o = ![]);var olmk = this;olmk['_url'] = dhxw0j;if (dhxw0j['indexOf']('data:image') === 0x0) olmk['_type'] = aysv_ = 'image';else olmk['_type'] = aysv_ || (aysv_ = olmk['getTypeFromUrl'](dhxw0j));olmk['_cache'] = na_s6, olmk['_data'] = null;var yn_s6 = 'ascii';if (dhxw0j['indexOf']('.fnt') != -0x1) yn_s6 = 'utf8';else aysv_ == 'arraybuffer' && (yn_s6 = '');;var q713 = x43q17['getFileExtension'](dhxw0j);if (j0wdh['_fileTypeArr']['indexOf'](q713) != -0x1) aeib['EnvConfig']['load']['call'](this, dhxw0j, aysv_, na_s6, sn6a, cp5o);else {
        if (!fgv13['getFileInfo'](dhxw0j)) {
          if (dhxw0j['indexOf']('layaNativeDir/') != -0x1) {
            if (aeib['isZiYu']) {
              var ktmlo5 = fgv13['ziyuFileData'][dhxw0j];olmk['onLoaded'](ktmlo5);return;
            } else {
              cosnole['log']('read read'), fgv13['read'](dhxw0j, yn_s6, new $9zu8(j0wdh, j0wdh['onReadNativeCallBack'], [yn_s6, dhxw0j, aysv_, na_s6, sn6a, cp5o, olmk]));return;
            }
          }if (yvsn_g['rootPath'] == '') var h9dw0j = dhxw0j;else h9dw0j = dhxw0j['split'](yvsn_g['rootPath'])[0x0];dhxw0j['indexOf']('http://') != -0x1 || dhxw0j['indexOf']('https://') != -0x1 ? aeib['EnvConfig']['load']['call'](olmk, dhxw0j, aysv_, na_s6, sn6a, cp5o) : fgv13['readFile'](h9dw0j, yn_s6, new $9zu8(j0wdh, j0wdh['onReadNativeCallBack'], [yn_s6, dhxw0j, aysv_, na_s6, sn6a, cp5o, olmk]), dhxw0j);
        } else aeib['EnvConfig']['load']['call'](this, dhxw0j, aysv_, na_s6, sn6a, cp5o);
      }
    }, w7h0xq['resMgrLoad'] = function (c8lu$p, _vfngs, qx3701, _6ay, xw710, o5ltpc, lc$up8) {
      qx3701 === void 0x0 && (qx3701 = 0x0), _6ay === void 0x0 && (_6ay = ![]), xw710 === void 0x0 && (xw710 = ![]), o5ltpc === void 0x0 && (o5ltpc = 0x0), lc$up8 === void 0x0 && (lc$up8 = 0x3), c8lu$p['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', c8lu$p), aeib['EnvConfig']['resMgrLoad'](c8lu$p, (n_gf4v, jdw, oucpl5) => {
        j0wdh['prototype']['resMgrLoadCallBack'](n_gf4v, jdw, oucpl5, _vfngs);
      }, qx3701, _6ay, xw710, o5ltpc, lc$up8);
    }, w7h0xq['resMgrLoadCallBack'] = function (qxwh0, g31f47, h7wq0x, n6ys2a) {
      console['log']('buff:::', qxwh0, h7wq0x, fgv13['fileNativeDir'] + '///' + fgv13['fileListName']), n6ys2a(qxwh0, g31f47, h7wq0x);
    }, w7h0xq['clearRes'] = function (ptol5, zdw9jh) {
      zdw9jh === void 0x0 && (zdw9jh = ![]);var rz$8j9 = this;rz$8j9['clearRes'](ptol5, zdw9jh);var qx0w71 = fgv13['getFileInfo'](ptol5);if (qx0w71 && (ptol5['indexOf']('http://') != -0x1 || ptol5['indexOf']('https://') != -0x1)) {
        var z$8j9r = qx0w71['md5'],
            vfg4n = fgv13['getFileNativePath'](z$8j9r);fgv13['remove'](vfg4n);
      }
    }, j0wdh['onReadNativeCallBack'] = function (gv4n, ny_asv, iya26, j8z9rd, z9$jr, dhqw0, qf, q0xw7, $8upc) {
      j8z9rd === void 0x0 && (j8z9rd = !![]), dhqw0 === void 0x0 && (dhqw0 = ![]), q0xw7 === void 0x0 && (q0xw7 = 0x0);if (!q0xw7) {
        var ru$z9;if (iya26 == 'json' || iya26 == 'atlas') ru$z9 = aeib['getJson']($8upc['data']);else iya26 == 'xml' ? ru$z9 = x43q17['parseXMLFromString']($8upc['data']) : ru$z9 = $8upc['data'];qf['onLoaded'](ru$z9), !aeib['isZiYu'] && aeib['isPosMsgYu'] && iya26 != 'arraybuffer' && wx['postMessage']({ 'url': ny_asv, 'data': ru$z9, 'isLoad': !![] });
      } else q0xw7 == 0x1 && aeib['EnvConfig']['load']['call'](qf, ny_asv, iya26, j8z9rd, z9$jr, dhqw0);
    }, _nas6y(j0wdh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), j0wdh;
  }(),
      fgv13 = function (h0xwq7) {
    function nys_g() {
      nys_g['__super']['call'](this);;
    }return j89rzd(nys_g, 'laya.wx.mini.MiniFileMgr', h0xwq7), nys_g['isLoadFile'] = function (cru8$) {
      return nys_g['_fileTypeArr']['indexOf'](cru8$) != -0x1 ? !![] : ![];
    }, nys_g['getFileInfo'] = function ($u5p) {
      var r89zu$ = $u5p['split']('?')[0x0],
          hzr9d = nys_g['filesListObj'][r89zu$];if (hzr9d == null) return null;else return hzr9d;return null;
    }, nys_g['onFileUpdate'] = function (a6yi2b, _f3g) {
      var ulo = a6yi2b['split']('/'),
          tlmc5o = ulo[ulo['length'] - 0x1],
          whz9d = nys_g['getFileInfo'](_f3g);if (whz9d == null) nys_g['onSaveFile'](_f3g, tlmc5o);else {
        if (whz9d['readyUrl'] != _f3g) nys_g['remove'](tlmc5o, _f3g);
      }
    }, nys_g['exits'] = function (yb6ia2, g_ny) {
      var s2nya6 = nys_g['getFileNativePath'](yb6ia2);nys_g['fs']['getFileInfo']({ 'filePath': s2nya6, 'success': function (cto5ml) {
          g_ny != null && g_ny['runWith']([0x0, cto5ml]);
        }, 'fail': function (n_6sa) {
          g_ny != null && g_ny['runWith']([0x1, n_6sa]);
        } });
    }, nys_g['read'] = function (fsvn_g, yas_, nysv_, pu$l5) {
      yas_ === void 0x0 && (yas_ = 'ascill'), pu$l5 === void 0x0 && (pu$l5 = '');var opcl5;pu$l5 != '' ? opcl5 = nys_g['getFileNativePath'](fsvn_g) : opcl5 = fsvn_g, nys_g['fs']['readFile']({ 'filePath': opcl5, 'encoding': yas_, 'success': function (rjz$8) {
          nysv_ != null && nysv_['runWith']([0x0, rjz$8]);
        }, 'fail': function (hxwq7) {
          if (hxwq7 && pu$l5 != '') nys_g['down'](pu$l5, yas_, nysv_, pu$l5);else nysv_ != null && nysv_['runWith']([0x1]);
        } });
    }, nys_g['readNativeFile'] = function (w1xq0, d8j9z) {
      nys_g['fs']['readFile']({ 'filePath': w1xq0, 'encoding': '', 'success': function ($8uz9r) {
          d8j9z != null && d8j9z['runWith']([0x0]);
        }, 'fail': function ($8zrpu) {
          d8j9z != null && d8j9z['runWith']([0x1]);
        } });
    }, nys_g['down'] = function (_avny, $8j9rz, sfgn_, sy6n2) {
      $8j9rz === void 0x0 && ($8j9rz = 'ascill'), sy6n2 === void 0x0 && (sy6n2 = '');var v_nfg = nys_g['getFileNativePath'](sy6n2),
          zu8r9$ = nys_g['wxdown']({ 'url': _avny, 'filePath': v_nfg, 'success': function (hxw7) {
          if (hxw7['statusCode'] === 0xc8) nys_g['readFile'](hxw7['filePath'], $8j9rz, sfgn_, sy6n2);
        }, 'fail': function (u5lpco) {
          sfgn_ != null && sfgn_['runWith']([0x1, u5lpco]);
        } });zu8r9$['onProgressUpdate'](function (fg134v) {
        sfgn_ != null && sfgn_['runWith']([0x2, fg134v['progress']]);
      });
    }, nys_g['readFile'] = function (s6_nya, dwh0qx, _3gf, tclo5) {
      dwh0qx === void 0x0 && (dwh0qx = 'ascill'), tclo5 === void 0x0 && (tclo5 = ''), nys_g['fs']['readFile']({ 'filePath': s6_nya, 'encoding': dwh0qx, 'success': function (zp8ur) {
          if (s6_nya['indexOf']('http://') != -0x1 || s6_nya['indexOf']('https://') != -0x1) nys_g['onFileUpdate'](s6_nya, tclo5);_3gf != null && _3gf['runWith']([0x0, zp8ur]);
        }, 'fail': function (fv_n) {
          if (fv_n) _3gf != null && _3gf['runWith']([0x1, fv_n]);
        } });
    }, nys_g['downImg'] = function (_yvasn, jr$8z9, rcp8$u) {
      rcp8$u === void 0x0 && (rcp8$u = '');var g4nf = nys_g['wxdown']({ 'url': _yvasn, 'success': function (zdhw9j) {
          zdhw9j['statusCode'] === 0xc8 && nys_g['copyFile'](zdhw9j['tempFilePath'], rcp8$u, jr$8z9);
        }, 'fail': function (wzj9d) {
          jr$8z9 != null && jr$8z9['runWith']([0x1, wzj9d]);
        } });
    }, nys_g['copyFile'] = function (vgn_f4, y2isa, qx4) {
      var gnvs_y = vgn_f4['split']('/'),
          qf7 = gnvs_y[gnvs_y['length'] - 0x1],
          rz89 = y2isa['split']('?')[0x0],
          z9dhr = nys_g['getFileInfo'](y2isa),
          _vs = nys_g['getFileNativePath'](qf7);nys_g['fs']['copyFile']({ 'srcPath': vgn_f4, 'destPath': _vs, 'success': function (x31) {
          if (!z9dhr) nys_g['onSaveFile'](y2isa, qf7), qx4 != null && qx4['runWith']([0x0]);else {
            if (z9dhr['readyUrl'] != y2isa) nys_g['remove'](qf7, y2isa, qx4);
          }
        }, 'fail': function (d0wqx) {
          qx4 != null && qx4['runWith']([0x1, d0wqx]);
        } });
    }, nys_g['getFileNativePath'] = function (v_ayn) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + v_ayn;
    }, nys_g['remove'] = function (vngy_s, topl, zp$u) {
      topl === void 0x0 && (topl = '');var cp5lou = nys_g['getFileInfo'](topl),
          rz8$ = nys_g['getFileNativePath'](cp5lou['md5']);lcu8p['loader']['clearRes'](cp5lou['readyUrl']), nys_g['fs']['unlink']({ 'filePath': rz8$, 'success': function (as_vyn) {
          if (topl != '') nys_g['onSaveFile'](topl, vngy_s);zp$u != null && zp$u['runWith']([0x0]);
        }, 'fail': function (zrhd) {} });
    }, nys_g['onSaveFile'] = function ($8zrup, h0jw9d) {
      var f4gv_n = $8zrup['split']('?')[0x0];nys_g['filesListObj'][f4gv_n] = { 'md5': h0jw9d, 'readyUrl': $8zrup }, nys_g['fs']['writeFile']({ 'filePath': nys_g['fileNativeDir'] + '/' + nys_g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nys_g['filesListObj']), 'success': function (vf_n4) {
          console['log']('写入测试测试成功：', vf_n4);
        }, 'fail': function (jhr9z) {
          console['log']('写入测试测试失败：', jhr9z);
        } });
    }, nys_g['existDir'] = function (x43q, mklot5) {
      nys_g['fs']['mkdir']({ 'dirPath': x43q, 'success': function (gf_vns) {
          mklot5 != null && mklot5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (uol5cp) {
          if (uol5cp['errMsg']['indexOf']('file already exists') != -0x1) nys_g['readSync'](nys_g['fileListName'], 'utf8', mklot5);else mklot5 != null && mklot5['runWith']([0x1, uol5cp]);
        } });
    }, nys_g['readSync'] = function (say6n2, g_vf4, u98r$, _vgf43) {
      g_vf4 === void 0x0 && (g_vf4 = 'ascill'), _vgf43 === void 0x0 && (_vgf43 = '');var dxqwh = nys_g['getFileNativePath'](say6n2),
          _vg4fn;try {
        _vg4fn = nys_g['fs']['readFileSync'](dxqwh), u98r$ != null && u98r$['runWith']([0x0, { 'data': _vg4fn }]);
      } catch (bia62) {
        u98r$ != null && u98r$['runWith']([0x1]);
      }
    }, nys_g['readCache'] = function () {}, nys_g['writeCache'] = function (any_6s) {
      var hd0w9j = readyUrl['split']('?')[0x0];nys_g['filesListObj'][hd0w9j] = { 'md5': md5Name, 'readyUrl': readyUrl }, nys_g['fs']['writeFile']({ 'filePath': nys_g['fileNativeDir'] + '/' + nys_g['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](nys_g['filesListObj']), 'success': function (s_vany) {}, 'fail': function (z8pu$r) {} });
    }, nys_g['setNativeFileDir'] = function (b62ayi) {
      nys_g['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b62ayi;
    }, nys_g['filesListObj'] = {}, nys_g['fileNativeDir'] = null, nys_g['fileListName'] = 'layaairfiles.txt', nys_g['ziyuFileData'] = {}, _nas6y(nys_g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), nys_g;
  }(dx0hwj),
      rjz9$8 = function (n6a) {
    function f_gvns() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], f_gvns['__super']['call'](this), this['_sound'] = f_gvns['_createSound'](), this['_chanell'] = new yvg(this['_sound']);
    }j89rzd(f_gvns, 'laya.wx.mini.MiniSound', n6a);var rjd89 = f_gvns['prototype'];return rjd89['load'] = function (djzr9h) {
      var hj9 = this;djzr9h = yvsn_g['formatURL'](djzr9h), this['url'] = djzr9h;if (f_gvns['_audioCache'][djzr9h]) {
        this['event']('complete');return;
      }function z$pu() {
        if (f_gvns['_null'] != undefined) hj9['_sound']['onCanplay'](f_gvns['_null']), hj9['_sound']['onError'](f_gvns['_null']);else try {
          hj9['_sound']['onCanplay'](null), hj9['_sound']['onError'](null), f_gvns['_null'] = null;
        } catch (z8u9r) {
          console['warn']('[wxmini] _clearSound:' + z8u9r), hj9['_sound']['onCanplay'](qw7hx0), hj9['_sound']['onError'](qw7hx0), f_gvns['_null'] = qw7hx0;
        }
      }function jrzd9h() {
        yas62['loaded'] = !![], yas62['event']('complete'), f_gvns['_audioCache'][yas62['url']] = yas62;
      }function d0qxwh(lcpu) {
        console['error']('errCode=' + lcpu['errCode'] + '  errMsg=' + lcpu['errMsg']), yas62['event']('error');
      }function qw7hx0() {}this['_sound']['onCanplay'](jrzd9h), this['_sound']['onError'](d0qxwh), this['_sound']['src'] = djzr9h;var yas62 = this;
    }, rjd89['play'] = function (v3f_g4, wdz9j) {
      v3f_g4 === void 0x0 && (v3f_g4 = 0x0), wdz9j === void 0x0 && (wdz9j = 0x0);var wz9hjd, xhq;if (this['url'] == f34['_tMusic']) {
        if (!f_gvns['_musicAudio']) f_gvns['_musicAudio'] = this['_sound'];wz9hjd = f_gvns['_musicAudio'], xhq = this['_chanell'];
      } else wz9hjd = this['_sound'], xhq = this['_chanell'];return wz9hjd['src'] = this['url'], wz9hjd['startTime'] = 0x0, xhq['isStopped'] && (xhq['url'] = this['url'], xhq['loops'] = wdz9j, xhq['startTime'] = v3f_g4, xhq['play'](), f34['addChannel'](xhq)), xhq;
    }, rjd89['dispose'] = function () {
      var uz8p = f_gvns['_audioCache'][this['url']];uz8p && (uz8p['src'] = '', delete f_gvns['_audioCache'][this['url']]);
    }, f34g_(0x0, rjd89, 'duration', function () {
      return this['_sound']['duration'];
    }), f_gvns['_createSound'] = function () {
      f_gvns['_id']++;var omlc5t = aeib['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return omlc5t;
    }, f_gvns['_musicAudio'] = null, f_gvns['_id'] = 0x0, f_gvns['_audioCache'] = {}, f_gvns['_null'] = undefined, f_gvns;
  }(dx0hwj),
      yvg = function (be62i) {
    function dwq(z$89ru) {
      this['_audio'] = null, this['_onEnd'] = null, dwq['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z$89ru, this['_onEnd'] = x43q17['bind'](this['__onEnd'], this), z$89ru['onEnded'](this['_onEnd']);
    }j89rzd(dwq, 'laya.wx.mini.MiniSoundChannel', be62i);var dj9wh = dwq['prototype'];return dj9wh['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (lcu8p['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dj9wh['__onNull'] = function () {}, dj9wh['play'] = function () {
      this['isStopped'] = ![], f34['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, dj9wh['stop'] = function () {
      this['isStopped'] = !![], f34['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, dj9wh['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, dj9wh['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], f34['addChannel'](this), this['_audio']['play']();
    }, f34g_(0x0, dj9wh, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f34g_(0x0, dj9wh, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f34g_(0x0, dj9wh, 'volume', function () {
      return 0x1;
    }, function (q01w7) {}), dwq['_null'] = undefined, dwq;
  }(pcul5),
      q0731 = function () {
    function u9r$() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = aeib['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }j89rzd(u9r$, 'laya.wx.mini.MiniVideo');var p8uc$ = u9r$['prototype'];return p8uc$['on'] = function (lotp, dj8rz, oplc) {
      if (lotp == 'loadedmetadata') this['onPlayFunc'] = oplc['bind'](dj8rz), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else lotp == 'ended' && (this['onEndedFunC'] = oplc['bind'](dj8rz), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, p8uc$['onTimeUpdateFunc'] = function (h0x7w) {
      this['position'] = h0x7w['position'], this['_duration'] = h0x7w['duration'];
    }, p8uc$['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, p8uc$['onended'] = function (p5coul, m5co) {
      this['onEndedFunC'] = m5co['bind'](p5coul), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, p8uc$['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, p8uc$['off'] = function (rzd8j, loc5mt, eai26b) {
      if (rzd8j == 'loadedmetadata') this['onPlayFunc'] = eai26b['bind'](loc5mt), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else rzd8j == 'ended' && (this['onEndedFunC'] = eai26b['bind'](loc5mt), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, p8uc$['load'] = function (ru$cp8) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ru$cp8;
    }, p8uc$['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, p8uc$['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, p8uc$['size'] = function (xj0d, a6b2y) {
      if (!this['videoElement']) return;this['videoElement']['width'] = xj0d, this['videoElement']['height'] = a6b2y;
    }, p8uc$['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, p8uc$['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, f34g_(0x0, p8uc$, 'duration', function () {
      return this['_duration'];
    }), f34g_(0x0, p8uc$, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (z$98jr) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = z$98jr;
    }), f34g_(0x0, p8uc$, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), f34g_(0x0, p8uc$, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), f34g_(0x0, p8uc$, 'ended', function () {
      return this['videoend'];
    }), f34g_(0x0, p8uc$, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (x17w0) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = x17w0;
    }), f34g_(0x0, p8uc$, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (x37q) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = x37q;
    }), f34g_(0x0, p8uc$, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (ng4fv) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = ng4fv;
    }), f34g_(0x0, p8uc$, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), f34g_(0x0, p8uc$, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (g1743f) {
      if (!this['videoElement']) return;this['videoElement']['x'] = g1743f;
    }), f34g_(0x0, p8uc$, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (hjx) {
      if (!this['videoElement']) return;this['videoElement']['y'] = hjx;
    }), f34g_(0x0, p8uc$, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), f34g_(0x0, p8uc$, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function ($rup8) {
      if (!this['videoElement']) return;this['videoElement']['src'] = $rup8;
    }), f34g_(0x0, p8uc$, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (dj0h9w) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = dj0h9w;
    }), f34g_(0x0, p8uc$, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (urz8$p) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = urz8$p;
    }), u9r$;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var a2ysn6 in Laya) {
    var nfgv_ = Laya[a2ysn6];nfgv_ && nfgv_['__isclass'] && (exports[a2ysn6] = nfgv_);
  }
});