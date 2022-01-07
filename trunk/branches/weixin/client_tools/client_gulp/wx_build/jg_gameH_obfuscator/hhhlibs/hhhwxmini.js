var O = wx.$C;
(function (window, document, svgf_n) {
  var kmt5l = svgf_n['un'],
      pc5ou = svgf_n['uns'],
      ktm5lo = svgf_n['static'],
      asyi26 = svgf_n['class'],
      clp8 = svgf_n['getset'],
      wqhdx0 = svgf_n['__newvec'],
      ctlo5 = laya['utils']['Browser'],
      xhwj = laya['events']['Event'],
      q071w = laya['events']['EventDispatcher'],
      sa6y_ = laya['resource']['HTMLImage'],
      _vgs = laya['utils']['Handler'],
      j$r98 = laya['display']['Input'],
      copl5t = laya['net']['Loader'],
      x3 = laya['maths']['Matrix'],
      lo5pu = laya['renders']['Render'],
      wd0xq = laya['utils']['RunDriver'],
      g4f3v1 = laya['media']['Sound'],
      eb6i2 = laya['media']['SoundChannel'],
      v43_ = laya['media']['SoundManager'],
      $cpl5u = laya['display']['Stage'],
      klom = laya['net']['URL'],
      f413q = laya['utils']['Utils'],
      s2iay6 = function () {
    function hwj9dz() {}return asyi26(hwj9dz, 'laya.wx.mini.MiniAdpter'), hwj9dz['getJson'] = function (v314) {
      return JSON['parse'](v314);
    }, hwj9dz['init'] = function (hd0jx, f4137q) {
      hd0jx === void 0x0 && (hd0jx = ![]), f4137q === void 0x0 && (f4137q = ![]);if (hwj9dz['_inited']) return;hwj9dz['window'] = window;if (hwj9dz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hwj9dz['_inited'] = !![], hwj9dz['isZiYu'] = f4137q, hwj9dz['isPosMsgYu'] = hd0jx, hwj9dz['EnvConfig'] = {}, !hwj9dz['isZiYu'] && (yis6a['setNativeFileDir']('/layaairGame'), yis6a['existDir'](yis6a['fileNativeDir'], _vgs['create'](hwj9dz, hwj9dz['onMkdirCallBack']))), hwj9dz['window']['focus'] = function () {}, svgf_n['getUrlPath'] = function () {}, hwj9dz['window']['logtime'] = function (avyns) {}, hwj9dz['window']['alertTimeLog'] = function (lcotm) {}, hwj9dz['window']['resetShareInfo'] = function () {}, hwj9dz['window']['CanvasRenderingContext2D'] = function () {}, hwj9dz['window']['CanvasRenderingContext2D']['prototype'] = hwj9dz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hwj9dz['window']['document']['body']['appendChild'] = function () {}, hwj9dz['EnvConfig']['pixelRatioInt'] = 0x0, wd0xq['getPixelRatio'] = hwj9dz['pixelRatio'], hwj9dz['_preCreateElement'] = ctlo5['createElement'], ctlo5['createElement'] = hwj9dz['createElement'], wd0xq['createShaderCondition'] = hwj9dz['createShaderCondition'], f413q['parseXMLFromString'] = hwj9dz['parseXMLFromString'], j$r98['_createInputElement'] = top5c['_createInputElement'], hwj9dz['EnvConfig']['load'] = copl5t['prototype']['load'], copl5t['prototype']['load'] = qx['prototype']['load'], hwj9dz['isZiYu'] && hd0jx && wx['onMessage'](function (g3f47) {
        g3f47['isLoad'] && (yis6a['ziyuFileData'][g3f47['url']] = g3f47['data']);
      });
    }, hwj9dz['onMkdirCallBack'] = function (v4n_g, ysn_) {
      if (!v4n_g) yis6a['filesListObj'] = JSON['parse'](ysn_['data']);
    }, hwj9dz['pixelRatio'] = function () {
      if (!hwj9dz['EnvConfig']['pixelRatioInt']) try {
        var qf31 = wx['getSystemInfoSync']();return hwj9dz['EnvConfig']['pixelRatioInt'] = qf31['pixelRatio'], qf31 = qf31, qf31['pixelRatio'];
      } catch (sygv_n) {}return hwj9dz['EnvConfig']['pixelRatioInt'];
    }, hwj9dz['createElement'] = function (wh0j9) {
      if (wh0j9 == 'canvas') {
        var n2as6y;return hwj9dz['idx'] == 0x1 ? hwj9dz['isZiYu'] ? (n2as6y = sharedCanvas, n2as6y['style'] = {}) : n2as6y = window['canvas'] : n2as6y = window['wx']['createCanvas'](), hwj9dz['idx']++, n2as6y;
      } else {
        if (wh0j9 == 'textarea' || wh0j9 == 'input') return hwj9dz['onCreateInput'](wh0j9);else {
          if (wh0j9 == 'div') {
            var qhdxw0 = hwj9dz['_preCreateElement'](wh0j9);return qhdxw0['contains'] = function (ai6b2e) {
              return null;
            }, qhdxw0['removeChild'] = function (cu8$r) {}, qhdxw0;
          } else return hwj9dz['_preCreateElement'](wh0j9);
        }
      }
    }, hwj9dz['onCreateInput'] = function (synvg_) {
      var r$j9z = hwj9dz['_preCreateElement'](synvg_);return r$j9z['focus'] = top5c['wxinputFocus'], r$j9z['blur'] = top5c['wxinputblur'], r$j9z['style'] = {}, r$j9z['value'] = 0x0, r$j9z['parentElement'] = {}, r$j9z['placeholder'] = {}, r$j9z['type'] = {}, r$j9z['setColor'] = function (rz98) {}, r$j9z['setType'] = function (u$8zp) {}, r$j9z['setFontFace'] = function (jxd0) {}, r$j9z['addEventListener'] = function (e26ib) {}, r$j9z['contains'] = function (_nsy6a) {
        return null;
      }, r$j9z['removeChild'] = function (oml5t) {}, r$j9z;
    }, hwj9dz['createShaderCondition'] = function (p$c5lu) {
      var $zupr8 = this,
          svyan = function () {
        var ei26b = p$c5lu;return $zupr8[p$c5lu['replace']('this.', '')];
      };return svyan;
    }, hwj9dz['EnvConfig'] = null, hwj9dz['window'] = null, hwj9dz['_preCreateElement'] = null, hwj9dz['_inited'] = ![], hwj9dz['wxRequest'] = null, hwj9dz['systemInfo'] = null, hwj9dz['version'] = '0.0.1', hwj9dz['isZiYu'] = ![], hwj9dz['isPosMsgYu'] = ![], hwj9dz['parseXMLFromString'] = function (rzjh9) {
      var jz$98, ea2b6;rzjh9 = rzjh9['replace'](/>\s+</g, '><');try {
        jz$98 = new window['Parser']['DOMParser']()['parseFromString'](rzjh9, 'text/xml');
      } catch (j$8rz9) {
        throw '需要引入xml解析库文件';
      }return jz$98;
    }, hwj9dz['idx'] = 0x1, hwj9dz;
  }(),
      rzdh = function () {
    function j$89zr() {}asyi26(j$89zr, 'laya.wx.mini.MiniImage');var x7qhw0 = j$89zr['prototype'];return x7qhw0['_loadImage'] = function (w0xdhq) {
      var upc8 = this,
          rp$8u = ![];w0xdhq['indexOf']('layaNativeDir/') == -0x1 && (rp$8u = !![], w0xdhq = klom['formatURL'](w0xdhq));if (!yis6a['getFileInfo'](w0xdhq)) {
        if (w0xdhq['indexOf']('http://') != -0x1 || w0xdhq['indexOf']('https://') != -0x1) yis6a['downImg'](w0xdhq, new _vgs(j$89zr, j$89zr['onDownImgCallBack'], [w0xdhq, upc8]), w0xdhq);else j$89zr['onCreateImage'](w0xdhq, upc8, !![]);
      } else j$89zr['onCreateImage'](w0xdhq, upc8, !rp$8u);
    }, j$89zr['onDownImgCallBack'] = function (up$rc, hqx0d, a2eb) {
      if (!a2eb) j$89zr['onCreateImage'](up$rc, hqx0d);else hqx0d['onError'](null);
    }, j$89zr['onCreateImage'] = function (ysa_n, qdw0hx, cp$ru8) {
      cp$ru8 === void 0x0 && (cp$ru8 = ![]);var v4_fg;if (!cp$ru8) {
        var uocp = yis6a['getFileInfo'](ysa_n),
            _v34gf = uocp['md5'];v4_fg = yis6a['getFileNativePath'](_v34gf);
      } else v4_fg = ysa_n;if (qdw0hx['imgCache'] == null) qdw0hx['imgCache'] = {};var a62byi;function x0jhwd() {
        a62byi['onload'] = null, a62byi['onerror'] = null, delete qdw0hx['imgCache'][ysa_n];
      };var tolc5 = function () {
        x0jhwd(), qdw0hx['onLoaded'](a62byi);
      },
          nfgs_v = function () {
        x0jhwd(), qdw0hx['event']('error', 'Load image failed');
      };qdw0hx['_type'] == 'nativeimage' ? (a62byi = new ctlo5['window']['Image'](), a62byi['crossOrigin'] = '', a62byi['onload'] = tolc5, a62byi['onerror'] = nfgs_v, a62byi['src'] = v4_fg, qdw0hx['imgCache'][ysa_n] = a62byi) : new sa6y_['create'](v4_fg, { 'onload': tolc5, 'onerror': nfgs_v, 'onCreate': function ($5lucp) {
          a62byi = $5lucp, qdw0hx['imgCache'][ysa_n] = $5lucp;
        } });
    }, j$89zr;
  }(),
      top5c = function () {
    function luoc5p() {}return asyi26(luoc5p, 'laya.wx.mini.MiniInput'), luoc5p['_createInputElement'] = function () {
      j$r98['_initInput'](j$r98['area'] = ctlo5['createElement']('textarea')), j$r98['_initInput'](j$r98['input'] = ctlo5['createElement']('input')), j$r98['inputContainer'] = ctlo5['createElement']('div'), j$r98['inputContainer']['style']['position'] = 'absolute', j$r98['inputContainer']['style']['zIndex'] = 0x186a0, ctlo5['container']['appendChild'](j$r98['inputContainer']), j$r98['inputContainer']['setPos'] = function (h09dj, c5tl) {
        j$r98['inputContainer']['style']['left'] = h09dj + 'px', j$r98['inputContainer']['style']['top'] = c5tl + 'px';
      }, svgf_n['stage']['on']('resize', null, luoc5p['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dzr98) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), v43_['_soundClass'] = zp8ru$, v43_['_musicClass'] = zp8ru$;
    }, luoc5p['_onStageResize'] = function () {
      var ur8 = svgf_n['stage']['_canvasTransform']['identity']();ur8['scale'](ctlo5['width'] / lo5pu['canvas']['width'] / wd0xq['getPixelRatio'](), ctlo5['height'] / lo5pu['canvas']['height'] / wd0xq['getPixelRatio']());
    }, luoc5p['wxinputFocus'] = function (e62ib) {
      var dqxwh0 = j$r98['inputElement']['target'];if (dqxwh0 && !dqxwh0['editable']) return;s2iay6['window']['wx']['offKeyboardConfirm'](), s2iay6['window']['wx']['offKeyboardInput'](), s2iay6['window']['wx']['showKeyboard']({ 'defaultValue': dqxwh0['text'], 'maxLength': dqxwh0['maxChars'], 'multiple': dqxwh0['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qx1) {}, 'fail': function (an2s6y) {} }), s2iay6['window']['wx']['onKeyboardConfirm'](function (xh07q) {
        var jwhx = xh07q ? xh07q['value'] : '';dqxwh0['text'] = jwhx, dqxwh0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), s2iay6['window']['wx']['onKeyboardInput'](function (xwq0h7) {
        var d0wj = xwq0h7 ? xwq0h7['value'] : '';if (!dqxwh0['multiline']) {
          if (d0wj['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }dqxwh0['text'] = d0wj, dqxwh0['event']('input');
      });
    }, luoc5p['inputEnter'] = function () {
      j$r98['inputElement']['target']['focus'] = ![];
    }, luoc5p['wxinputblur'] = function () {
      luoc5p['hideKeyboard']();
    }, luoc5p['hideKeyboard'] = function () {
      s2iay6['window']['wx']['offKeyboardConfirm'](), s2iay6['window']['wx']['offKeyboardInput'](), s2iay6['window']['wx']['hideKeyboard']({ 'success': function (ysva_n) {
          console['log']('隐藏键盘');
        }, 'fail': function (p$urc8) {
          console['log']('隐藏键盘出错:' + (p$urc8 ? p$urc8['errMsg'] : ''));
        } });
    }, luoc5p;
  }(),
      qx = function () {
    function ai6s() {}asyi26(ai6s, 'laya.wx.mini.MiniLoader');var rp$z = ai6s['prototype'];return rp$z['load'] = function (iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz) {
      n_svfg === void 0x0 && (n_svfg = !![]), rhdjz === void 0x0 && (rhdjz = ![]);var u8zpr = this;u8zpr['_url'] = iy26sa;if (iy26sa['indexOf']('data:image') === 0x0) u8zpr['_type'] = zu8r9$ = 'image';else u8zpr['_type'] = zu8r9$ || (zu8r9$ = u8zpr['getTypeFromUrl'](iy26sa));u8zpr['_cache'] = n_svfg, u8zpr['_data'] = null;var xhj0dw = 'ascii';if (iy26sa['indexOf']('.fnt') != -0x1) xhj0dw = 'utf8';else zu8r9$ == 'arraybuffer' && (xhj0dw = '');;var rd8z = f413q['getFileExtension'](iy26sa);if (ai6s['_fileTypeArr']['indexOf'](rd8z) != -0x1) s2iay6['EnvConfig']['load']['call'](this, iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz);else {
        if (!yis6a['getFileInfo'](iy26sa)) {
          if (iy26sa['indexOf']('layaNativeDir/') != -0x1) {
            if (s2iay6['isZiYu']) {
              var nys_v = yis6a['ziyuFileData'][iy26sa];u8zpr['onLoaded'](nys_v);return;
            } else {
              cosnole['log']('read read'), yis6a['read'](iy26sa, xhj0dw, new _vgs(ai6s, ai6s['onReadNativeCallBack'], [xhj0dw, iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz, u8zpr]));return;
            }
          }if (klom['rootPath'] == '') var byia62 = iy26sa;else byia62 = iy26sa['split'](klom['rootPath'])[0x0];iy26sa['indexOf']('http://') != -0x1 || iy26sa['indexOf']('https://') != -0x1 ? s2iay6['EnvConfig']['load']['call'](u8zpr, iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz) : yis6a['readFile'](byia62, xhj0dw, new _vgs(ai6s, ai6s['onReadNativeCallBack'], [xhj0dw, iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz, u8zpr]), iy26sa);
        } else s2iay6['EnvConfig']['load']['call'](this, iy26sa, zu8r9$, n_svfg, x7qwh, rhdjz);
      }
    }, rp$z['resMgrLoad'] = function (h0jdw9, zrd89, ys62, gsy, q01xw7, cu8l$p, jz89d) {
      ys62 === void 0x0 && (ys62 = 0x0), gsy === void 0x0 && (gsy = ![]), q01xw7 === void 0x0 && (q01xw7 = ![]), cu8l$p === void 0x0 && (cu8l$p = 0x0), jz89d === void 0x0 && (jz89d = 0x3), h0jdw9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', h0jdw9), s2iay6['EnvConfig']['resMgrLoad'](h0jdw9, (sny_av, j8r9$, jzr$) => {
        ai6s['prototype']['resMgrLoadCallBack'](sny_av, j8r9$, jzr$, zrd89);
      }, ys62, gsy, q01xw7, cu8l$p, jz89d);
    }, rp$z['resMgrLoadCallBack'] = function (a_s6n, aieb62, vns_, ml5to) {
      console['log']('buff:::', a_s6n, vns_, yis6a['fileNativeDir'] + '///' + yis6a['fileListName']), ml5to(a_s6n, aieb62, vns_);
    }, rp$z['clearRes'] = function (bya6, q431f) {
      q431f === void 0x0 && (q431f = ![]);var s2ayn = this;s2ayn['clearRes'](bya6, q431f);var a6yn2 = yis6a['getFileInfo'](bya6);if (a6yn2 && (bya6['indexOf']('http://') != -0x1 || bya6['indexOf']('https://') != -0x1)) {
        var nvgsy_ = a6yn2['md5'],
            ya_s = yis6a['getFileNativePath'](nvgsy_);yis6a['remove'](ya_s);
      }
    }, ai6s['onReadNativeCallBack'] = function (y2bi6, rp8z$u, g4v, jhd0, $z8rj9, b26aie, u8$r9, qw7x01, lct) {
      jhd0 === void 0x0 && (jhd0 = !![]), b26aie === void 0x0 && (b26aie = ![]), qw7x01 === void 0x0 && (qw7x01 = 0x0);if (!qw7x01) {
        var hjwd90;if (g4v == 'json' || g4v == 'atlas') hjwd90 = s2iay6['getJson'](lct['data']);else g4v == 'xml' ? hjwd90 = f413q['parseXMLFromString'](lct['data']) : hjwd90 = lct['data'];u8$r9['onLoaded'](hjwd90), !s2iay6['isZiYu'] && s2iay6['isPosMsgYu'] && g4v != 'arraybuffer' && wx['postMessage']({ 'url': rp8z$u, 'data': hjwd90, 'isLoad': !![] });
      } else qw7x01 == 0x1 && s2iay6['EnvConfig']['load']['call'](u8$r9, rp8z$u, g4v, jhd0, $z8rj9, b26aie);
    }, ktm5lo(ai6s, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ai6s;
  }(),
      yis6a = function (ie6ab) {
    function _an6ys() {
      _an6ys['__super']['call'](this);;
    }return asyi26(_an6ys, 'laya.wx.mini.MiniFileMgr', ie6ab), _an6ys['isLoadFile'] = function (q471f3) {
      return _an6ys['_fileTypeArr']['indexOf'](q471f3) != -0x1 ? !![] : ![];
    }, _an6ys['getFileInfo'] = function (ct5po) {
      var rp$uc8 = ct5po['split']('?')[0x0],
          jwhd90 = _an6ys['filesListObj'][rp$uc8];if (jwhd90 == null) return null;else return jwhd90;return null;
    }, _an6ys['onFileUpdate'] = function (mlkt5, bai2e6) {
      var _sfgv = mlkt5['split']('/'),
          c5puol = _sfgv[_sfgv['length'] - 0x1],
          n6ay_ = _an6ys['getFileInfo'](bai2e6);if (n6ay_ == null) _an6ys['onSaveFile'](bai2e6, c5puol);else {
        if (n6ay_['readyUrl'] != bai2e6) _an6ys['remove'](c5puol, bai2e6);
      }
    }, _an6ys['exits'] = function (lpoc, u$lp5c) {
      var up8r$ = _an6ys['getFileNativePath'](lpoc);_an6ys['fs']['getFileInfo']({ 'filePath': up8r$, 'success': function (fg14v) {
          u$lp5c != null && u$lp5c['runWith']([0x0, fg14v]);
        }, 'fail': function (ysa6_n) {
          u$lp5c != null && u$lp5c['runWith']([0x1, ysa6_n]);
        } });
    }, _an6ys['read'] = function (djzh9w, nva_, xq1734, f4gvn_) {
      nva_ === void 0x0 && (nva_ = 'ascill'), f4gvn_ === void 0x0 && (f4gvn_ = '');var x1qw0;f4gvn_ != '' ? x1qw0 = _an6ys['getFileNativePath'](djzh9w) : x1qw0 = djzh9w, _an6ys['fs']['readFile']({ 'filePath': x1qw0, 'encoding': nva_, 'success': function (_vnsg) {
          xq1734 != null && xq1734['runWith']([0x0, _vnsg]);
        }, 'fail': function ($pu8rc) {
          if ($pu8rc && f4gvn_ != '') _an6ys['down'](f4gvn_, nva_, xq1734, f4gvn_);else xq1734 != null && xq1734['runWith']([0x1]);
        } });
    }, _an6ys['readNativeFile'] = function (x0qw, ltc5p) {
      _an6ys['fs']['readFile']({ 'filePath': x0qw, 'encoding': '', 'success': function (jd09) {
          ltc5p != null && ltc5p['runWith']([0x0]);
        }, 'fail': function (zdh9j) {
          ltc5p != null && ltc5p['runWith']([0x1]);
        } });
    }, _an6ys['down'] = function (_gvf, j9dhw0, gf7413, q307) {
      j9dhw0 === void 0x0 && (j9dhw0 = 'ascill'), q307 === void 0x0 && (q307 = '');var clomt5 = _an6ys['getFileNativePath'](q307),
          n4_gf = _an6ys['wxdown']({ 'url': _gvf, 'filePath': clomt5, 'success': function (ctl5om) {
          if (ctl5om['statusCode'] === 0xc8) _an6ys['readFile'](ctl5om['filePath'], j9dhw0, gf7413, q307);
        }, 'fail': function (vgsnf) {
          gf7413 != null && gf7413['runWith']([0x1, vgsnf]);
        } });n4_gf['onProgressUpdate'](function (tc5om) {
        gf7413 != null && gf7413['runWith']([0x2, tc5om['progress']]);
      });
    }, _an6ys['readFile'] = function (z9rj$, plot5, x413, rjzdh) {
      plot5 === void 0x0 && (plot5 = 'ascill'), rjzdh === void 0x0 && (rjzdh = ''), _an6ys['fs']['readFile']({ 'filePath': z9rj$, 'encoding': plot5, 'success': function (tmklo) {
          if (z9rj$['indexOf']('http://') != -0x1 || z9rj$['indexOf']('https://') != -0x1) _an6ys['onFileUpdate'](z9rj$, rjzdh);x413 != null && x413['runWith']([0x0, tmklo]);
        }, 'fail': function (mt5kl) {
          if (mt5kl) x413 != null && x413['runWith']([0x1, mt5kl]);
        } });
    }, _an6ys['downImg'] = function (dwj9h0, x1473q, aieb2) {
      aieb2 === void 0x0 && (aieb2 = '');var vnfsg = _an6ys['wxdown']({ 'url': dwj9h0, 'success': function (san_) {
          san_['statusCode'] === 0xc8 && _an6ys['copyFile'](san_['tempFilePath'], aieb2, x1473q);
        }, 'fail': function (lu8p) {
          x1473q != null && x1473q['runWith']([0x1, lu8p]);
        } });
    }, _an6ys['copyFile'] = function (xwq0h, sgy, siy26) {
      var y_san6 = xwq0h['split']('/'),
          p$cu5l = y_san6[y_san6['length'] - 0x1],
          zhdw = sgy['split']('?')[0x0],
          yn6as = _an6ys['getFileInfo'](sgy),
          a2n6ys = _an6ys['getFileNativePath'](p$cu5l);_an6ys['fs']['copyFile']({ 'srcPath': xwq0h, 'destPath': a2n6ys, 'success': function (e2) {
          if (!yn6as) _an6ys['onSaveFile'](sgy, p$cu5l), siy26 != null && siy26['runWith']([0x0]);else {
            if (yn6as['readyUrl'] != sgy) _an6ys['remove'](p$cu5l, sgy, siy26);
          }
        }, 'fail': function (y2bia6) {
          siy26 != null && siy26['runWith']([0x1, y2bia6]);
        } });
    }, _an6ys['getFileNativePath'] = function (xq0371) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xq0371;
    }, _an6ys['remove'] = function (nsy6_a, f1734, kmolt5) {
      f1734 === void 0x0 && (f1734 = '');var u8cr$p = _an6ys['getFileInfo'](f1734),
          r9d8zj = _an6ys['getFileNativePath'](u8cr$p['md5']);svgf_n['loader']['clearRes'](u8cr$p['readyUrl']), _an6ys['fs']['unlink']({ 'filePath': r9d8zj, 'success': function (h7w0) {
          if (f1734 != '') _an6ys['onSaveFile'](f1734, nsy6_a);kmolt5 != null && kmolt5['runWith']([0x0]);
        }, 'fail': function (p5tloc) {} });
    }, _an6ys['onSaveFile'] = function (dhj9, svn_gf) {
      var fvns_ = dhj9['split']('?')[0x0];_an6ys['filesListObj'][fvns_] = { 'md5': svn_gf, 'readyUrl': dhj9 }, _an6ys['fs']['writeFile']({ 'filePath': _an6ys['fileNativeDir'] + '/' + _an6ys['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_an6ys['filesListObj']), 'success': function (fng_) {
          console['log']('写入测试测试成功：', fng_);
        }, 'fail': function (qx3710) {
          console['log']('写入测试测试失败：', qx3710);
        } });
    }, _an6ys['existDir'] = function (vn_4fg, w70qx) {
      _an6ys['fs']['mkdir']({ 'dirPath': vn_4fg, 'success': function (fvsg_) {
          w70qx != null && w70qx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (fgnvs) {
          if (fgnvs['errMsg']['indexOf']('file already exists') != -0x1) _an6ys['readSync'](_an6ys['fileListName'], 'utf8', w70qx);else w70qx != null && w70qx['runWith']([0x1, fgnvs]);
        } });
    }, _an6ys['readSync'] = function (oulp5c, c5u$p, klo5m, _4nv) {
      c5u$p === void 0x0 && (c5u$p = 'ascill'), _4nv === void 0x0 && (_4nv = '');var poul = _an6ys['getFileNativePath'](oulp5c),
          tc5ol;try {
        tc5ol = _an6ys['fs']['readFileSync'](poul), klo5m != null && klo5m['runWith']([0x0, { 'data': tc5ol }]);
      } catch (gnsf_v) {
        klo5m != null && klo5m['runWith']([0x1]);
      }
    }, _an6ys['readCache'] = function () {}, _an6ys['writeCache'] = function (qdxhw0) {
      var c8$ = readyUrl['split']('?')[0x0];_an6ys['filesListObj'][c8$] = { 'md5': md5Name, 'readyUrl': readyUrl }, _an6ys['fs']['writeFile']({ 'filePath': _an6ys['fileNativeDir'] + '/' + _an6ys['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_an6ys['filesListObj']), 'success': function (j9h0w) {}, 'fail': function (puz$r8) {} });
    }, _an6ys['setNativeFileDir'] = function (j0wh) {
      _an6ys['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j0wh;
    }, _an6ys['filesListObj'] = {}, _an6ys['fileNativeDir'] = null, _an6ys['fileListName'] = 'layaairfiles.txt', _an6ys['ziyuFileData'] = {}, ktm5lo(_an6ys, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _an6ys;
  }(q071w),
      zp8ru$ = function (vg_3) {
    function w7qx0h() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], w7qx0h['__super']['call'](this), this['_sound'] = w7qx0h['_createSound']();
    }asyi26(w7qx0h, 'laya.wx.mini.MiniSound', vg_3);var pr8cu = w7qx0h['prototype'];return pr8cu['load'] = function (san6y2) {
      var h0jwd9 = this;san6y2 = klom['formatURL'](san6y2), this['url'] = san6y2;if (w7qx0h['_audioCache'][san6y2]) {
        this['event']('complete');return;
      }function cu8$pr() {
        if (w7qx0h['_null'] != undefined) h0jwd9['_sound']['onCanplay'](w7qx0h['_null']), h0jwd9['_sound']['onError'](w7qx0h['_null']);else try {
          h0jwd9['_sound']['onCanplay'](null), h0jwd9['_sound']['onError'](null), w7qx0h['_null'] = null;
        } catch (v_ys) {
          console['warn']('[wxmini] _clearSound:' + v_ys), h0jwd9['_sound']['onCanplay'](y6asn2), h0jwd9['_sound']['onError'](y6asn2), w7qx0h['_null'] = y6asn2;
        }
      }function g34_f() {
        cu8$pr(), gfn_['loaded'] = !![], gfn_['event']('complete'), w7qx0h['_audioCache'][gfn_['url']] = gfn_;
      }function zjr$8(f_4vg3) {
        console['error']('errCode=' + f_4vg3['errCode'] + '  errMsg=' + f_4vg3['errMsg']), cu8$pr(), gfn_['event']('error');
      }function y6asn2() {}this['_sound']['onCanplay'](g34_f), this['_sound']['onError'](zjr$8), this['_sound']['src'] = san6y2;var gfn_ = this;
    }, pr8cu['play'] = function (clp5u$, wjdhz) {
      clp5u$ === void 0x0 && (clp5u$ = 0x0), wjdhz === void 0x0 && (wjdhz = 0x0);var ynavs;if (this['url'] == v43_['_tMusic']) {
        if (!w7qx0h['_musicAudio']) w7qx0h['_musicAudio'] = w7qx0h['_createSound']();ynavs = w7qx0h['_musicAudio'];
      } else ynavs = w7qx0h['_createSound']();ynavs['src'] = this['url'];var isa = new yansv(ynavs);return isa['url'] = this['url'], isa['loops'] = wjdhz, isa['startTime'] = clp5u$, isa['play'](), v43_['addChannel'](isa), isa;
    }, pr8cu['dispose'] = function () {
      var $uc8r = w7qx0h['_audioCache'][this['url']];$uc8r && ($uc8r['src'] = '', delete w7qx0h['_audioCache'][this['url']]);
    }, clp8(0x0, pr8cu, 'duration', function () {
      return this['_sound']['duration'];
    }), w7qx0h['_createSound'] = function () {
      return w7qx0h['_id']++, s2iay6['window']['wx']['createInnerAudioContext']();
    }, w7qx0h['_musicAudio'] = null, w7qx0h['_id'] = 0x0, w7qx0h['_audioCache'] = {}, w7qx0h['_null'] = undefined, w7qx0h;
  }(q071w),
      yansv = function (ucp8l$) {
    function f_vs(gf4713) {
      this['_audio'] = null, this['_onEnd'] = null, f_vs['__super']['call'](this), this['_audio'] = gf4713, this['_onEnd'] = f413q['bind'](this['__onEnd'], this), gf4713['onEnded'](this['_onEnd']);
    }asyi26(f_vs, 'laya.wx.mini.MiniSoundChannel', ucp8l$);var lo5tmk = f_vs['prototype'];return lo5tmk['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (svgf_n['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, lo5tmk['__onNull'] = function () {}, lo5tmk['play'] = function () {
      this['isStopped'] = ![], v43_['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, lo5tmk['stop'] = function () {
      this['isStopped'] = !![], v43_['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (f_vs['_null'] != undefined) this['_audio']['onEnded'](f_vs['_null']);else try {
        this['_audio']['onEnded'](null), f_vs['_null'] = null;
      } catch (vny) {
        console['warn']('[wxmini] stop:' + vny), this['_audio']['onEnded'](f413q['bind'](this['__onNull'], this)), f_vs['_null'] = f413q['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, lo5tmk['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, lo5tmk['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], v43_['addChannel'](this), this['_audio']['play']();
    }, clp8(0x0, lo5tmk, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), clp8(0x0, lo5tmk, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), clp8(0x0, lo5tmk, 'volume', function () {
      return 0x1;
    }, function (potcl5) {}), f_vs['_null'] = undefined, f_vs;
  }(eb6i2);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var luc$5 in Laya) {
    var xdj0wh = Laya[luc$5];xdj0wh && xdj0wh['__isclass'] && (exports[luc$5] = xdj0wh);
  }
});