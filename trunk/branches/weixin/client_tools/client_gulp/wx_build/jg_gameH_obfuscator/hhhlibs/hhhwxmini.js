var O = wx.$C;
(function (window, document, vsnay) {
  var as6yi2 = vsnay['un'],
      fv3g_4 = vsnay['uns'],
      t5lk = vsnay['static'],
      f3471q = vsnay['class'],
      ol5pcu = vsnay['getset'],
      whz9 = vsnay['__newvec'],
      nsa_y = laya['utils']['Browser'],
      byia62 = laya['events']['Event'],
      klmt5o = laya['events']['EventDispatcher'],
      hqx0w = laya['resource']['HTMLImage'],
      s_nv = laya['utils']['Handler'],
      jr98 = laya['display']['Input'],
      qx0w1 = laya['net']['Loader'],
      f73 = laya['maths']['Matrix'],
      _sgvnf = laya['renders']['Render'],
      xq7h0 = laya['utils']['RunDriver'],
      puz8r = laya['media']['Sound'],
      $rupc = laya['media']['SoundChannel'],
      xq43 = laya['media']['SoundManager'],
      xq07w = laya['display']['Stage'],
      h7q0w = laya['net']['URL'],
      hw7qx0 = laya['utils']['Utils'],
      g31v4f = function () {
    function r$8p() {}return f3471q(r$8p, 'laya.wx.mini.MiniAdpter'), r$8p['getJson'] = function (dhw0qx) {
      return JSON['parse'](dhw0qx);
    }, r$8p['init'] = function (iy6s, gsn_yv) {
      iy6s === void 0x0 && (iy6s = ![]), gsn_yv === void 0x0 && (gsn_yv = ![]);if (r$8p['_inited']) return;r$8p['window'] = window;if (r$8p['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;r$8p['_inited'] = !![], r$8p['isZiYu'] = gsn_yv, r$8p['isPosMsgYu'] = iy6s, r$8p['EnvConfig'] = {}, !r$8p['isZiYu'] && (jz$9r['setNativeFileDir']('/layaairGame'), jz$9r['existDir'](jz$9r['fileNativeDir'], s_nv['create'](r$8p, r$8p['onMkdirCallBack']))), r$8p['window']['focus'] = function () {}, vsnay['getUrlPath'] = function () {}, r$8p['window']['logtime'] = function (s2aiy6) {}, r$8p['window']['alertTimeLog'] = function (z98$j) {}, r$8p['window']['resetShareInfo'] = function () {}, r$8p['window']['CanvasRenderingContext2D'] = function () {}, r$8p['window']['CanvasRenderingContext2D']['prototype'] = r$8p['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], r$8p['window']['document']['body']['appendChild'] = function () {}, r$8p['EnvConfig']['pixelRatioInt'] = 0x0, xq7h0['getPixelRatio'] = r$8p['pixelRatio'], r$8p['_preCreateElement'] = nsa_y['createElement'], nsa_y['createElement'] = r$8p['createElement'], xq7h0['createShaderCondition'] = r$8p['createShaderCondition'], hw7qx0['parseXMLFromString'] = r$8p['parseXMLFromString'], jr98['_createInputElement'] = l5tcop['_createInputElement'], r$8p['EnvConfig']['load'] = qx0w1['prototype']['load'], qx0w1['prototype']['load'] = m5cto['prototype']['load'], r$8p['isZiYu'] && iy6s && wx['onMessage'](function (_vgfs) {
        _vgfs['isLoad'] && (jz$9r['ziyuFileData'][_vgfs['url']] = _vgfs['data']);
      });
    }, r$8p['onMkdirCallBack'] = function (v_ysna, q0371) {
      if (!v_ysna) jz$9r['filesListObj'] = JSON['parse'](q0371['data']);
    }, r$8p['pixelRatio'] = function () {
      if (!r$8p['EnvConfig']['pixelRatioInt']) try {
        var w7xhq0 = wx['getSystemInfoSync']();return r$8p['EnvConfig']['pixelRatioInt'] = w7xhq0['pixelRatio'], w7xhq0 = w7xhq0, w7xhq0['pixelRatio'];
      } catch (oclpu5) {}return r$8p['EnvConfig']['pixelRatioInt'];
    }, r$8p['createElement'] = function (_y6n) {
      if (_y6n == 'canvas') {
        var q370;return r$8p['idx'] == 0x1 ? r$8p['isZiYu'] ? (q370 = sharedCanvas, q370['style'] = {}) : q370 = window['canvas'] : q370 = window['wx']['createCanvas'](), r$8p['idx']++, q370;
      } else {
        if (_y6n == 'textarea' || _y6n == 'input') return r$8p['onCreateInput'](_y6n);else {
          if (_y6n == 'div') {
            var fv134 = r$8p['_preCreateElement'](_y6n);return fv134['contains'] = function (p$8urc) {
              return null;
            }, fv134['removeChild'] = function (zjd9w) {}, fv134;
          } else return r$8p['_preCreateElement'](_y6n);
        }
      }
    }, r$8p['onCreateInput'] = function (f371g4) {
      var qhx0wd = r$8p['_preCreateElement'](f371g4);return qhx0wd['focus'] = l5tcop['wxinputFocus'], qhx0wd['blur'] = l5tcop['wxinputblur'], qhx0wd['style'] = {}, qhx0wd['value'] = 0x0, qhx0wd['parentElement'] = {}, qhx0wd['placeholder'] = {}, qhx0wd['type'] = {}, qhx0wd['setColor'] = function (r9zdh) {}, qhx0wd['setType'] = function (hjwd90) {}, qhx0wd['setFontFace'] = function (na62s) {}, qhx0wd['addEventListener'] = function (h0w9j) {}, qhx0wd['contains'] = function (jrz9$) {
        return null;
      }, qhx0wd['removeChild'] = function (nsayv_) {}, qhx0wd;
    }, r$8p['createShaderCondition'] = function (ru8p) {
      var pc8r = this,
          cul5$ = function () {
        var _vyas = ru8p;return pc8r[ru8p['replace']('this.', '')];
      };return cul5$;
    }, r$8p['EnvConfig'] = null, r$8p['window'] = null, r$8p['_preCreateElement'] = null, r$8p['_inited'] = ![], r$8p['wxRequest'] = null, r$8p['systemInfo'] = null, r$8p['version'] = '0.0.1', r$8p['isZiYu'] = ![], r$8p['isPosMsgYu'] = ![], r$8p['parseXMLFromString'] = function (p$8l) {
      var s62ny, r8cpu$;p$8l = p$8l['replace'](/>\s+</g, '><');try {
        s62ny = new window['Parser']['DOMParser']()['parseFromString'](p$8l, 'text/xml');
      } catch (b6eia2) {
        throw '需要引入xml解析库文件';
      }return s62ny;
    }, r$8p['idx'] = 0x1, r$8p;
  }(),
      nfv_sg = function () {
    function hdjrz() {}f3471q(hdjrz, 'laya.wx.mini.MiniImage');var asy_v = hdjrz['prototype'];return asy_v['_loadImage'] = function (q073x) {
      var upl5c$ = this,
          ya_s = ![];q073x['indexOf']('layaNativeDir/') == -0x1 && (ya_s = !![], q073x = h7q0w['formatURL'](q073x));if (!jz$9r['getFileInfo'](q073x)) {
        if (q073x['indexOf']('http://') != -0x1 || q073x['indexOf']('https://') != -0x1) jz$9r['downImg'](q073x, new s_nv(hdjrz, hdjrz['onDownImgCallBack'], [q073x, upl5c$]), q073x);else hdjrz['onCreateImage'](q073x, upl5c$, !![]);
      } else hdjrz['onCreateImage'](q073x, upl5c$, !ya_s);
    }, hdjrz['onDownImgCallBack'] = function (xq0hdw, q341x7, fgv_43) {
      if (!fgv_43) hdjrz['onCreateImage'](xq0hdw, q341x7);else q341x7['onError'](null);
    }, hdjrz['onCreateImage'] = function (wj09d, om5tl, j$r98z) {
      j$r98z === void 0x0 && (j$r98z = ![]);var ng4v_f;if (!j$r98z) {
        var dr9hjz = jz$9r['getFileInfo'](wj09d),
            u5olp = dr9hjz['md5'];ng4v_f = jz$9r['getFileNativePath'](u5olp);
      } else ng4v_f = wj09d;if (om5tl['imgCache'] == null) om5tl['imgCache'] = {};var hwj0x;function w0hjd9() {
        hwj0x['onload'] = null, hwj0x['onerror'] = null, delete om5tl['imgCache'][wj09d];
      };var om5lkt = function () {
        w0hjd9(), om5tl['onLoaded'](hwj0x);
      },
          zu$pr = function () {
        w0hjd9(), om5tl['event']('error', 'Load image failed');
      };om5tl['_type'] == 'nativeimage' ? (hwj0x = new nsa_y['window']['Image'](), hwj0x['crossOrigin'] = '', hwj0x['onload'] = om5lkt, hwj0x['onerror'] = zu$pr, hwj0x['src'] = ng4v_f, om5tl['imgCache'][wj09d] = hwj0x) : new hqx0w['create'](ng4v_f, { 'onload': om5lkt, 'onerror': zu$pr, 'onCreate': function (fv3g14) {
          hwj0x = fv3g14, om5tl['imgCache'][wj09d] = fv3g14;
        } });
    }, hdjrz;
  }(),
      l5tcop = function () {
    function qf3174() {}return f3471q(qf3174, 'laya.wx.mini.MiniInput'), qf3174['_createInputElement'] = function () {
      jr98['_initInput'](jr98['area'] = nsa_y['createElement']('textarea')), jr98['_initInput'](jr98['input'] = nsa_y['createElement']('input')), jr98['inputContainer'] = nsa_y['createElement']('div'), jr98['inputContainer']['style']['position'] = 'absolute', jr98['inputContainer']['style']['zIndex'] = 0x186a0, nsa_y['container']['appendChild'](jr98['inputContainer']), jr98['inputContainer']['setPos'] = function (v_fg4, ocpl5) {
        jr98['inputContainer']['style']['left'] = v_fg4 + 'px', jr98['inputContainer']['style']['top'] = ocpl5 + 'px';
      }, vsnay['stage']['on']('resize', null, qf3174['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (rdzj8) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), xq43['_soundClass'] = v134fg, xq43['_musicClass'] = v134fg, window['_videoClass'] = lou;
    }, qf3174['_onStageResize'] = function () {
      var _vf3g4 = vsnay['stage']['_canvasTransform']['identity']();_vf3g4['scale'](nsa_y['width'] / _sgvnf['canvas']['width'] / xq7h0['getPixelRatio'](), nsa_y['height'] / _sgvnf['canvas']['height'] / xq7h0['getPixelRatio']());
    }, qf3174['wxinputFocus'] = function (_ng4fv) {
      var yb6ia = jr98['inputElement']['target'];if (yb6ia && !yb6ia['editable']) return;g31v4f['window']['wx']['offKeyboardConfirm'](), g31v4f['window']['wx']['offKeyboardInput'](), g31v4f['window']['wx']['showKeyboard']({ 'defaultValue': yb6ia['text'], 'maxLength': yb6ia['maxChars'], 'multiple': yb6ia['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (zrdj8) {}, 'fail': function (topc) {} }), g31v4f['window']['wx']['onKeyboardConfirm'](function ($8clup) {
        var tp5co = $8clup ? $8clup['value'] : '';yb6ia['text'] = tp5co, yb6ia['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), g31v4f['window']['wx']['onKeyboardInput'](function (yvng) {
        var x0137 = yvng ? yvng['value'] : '';if (!yb6ia['multiline']) {
          if (x0137['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }yb6ia['text'] = x0137, yb6ia['event']('input');
      });
    }, qf3174['inputEnter'] = function () {
      jr98['inputElement']['target']['focus'] = ![];
    }, qf3174['wxinputblur'] = function () {
      qf3174['hideKeyboard']();
    }, qf3174['hideKeyboard'] = function () {
      g31v4f['window']['wx']['offKeyboardConfirm'](), g31v4f['window']['wx']['offKeyboardInput'](), g31v4f['window']['wx']['hideKeyboard']({ 'success': function (_fg43v) {
          console['log']('隐藏键盘');
        }, 'fail': function (q01x37) {
          console['log']('隐藏键盘出错:' + (q01x37 ? q01x37['errMsg'] : ''));
        } });
    }, qf3174;
  }(),
      m5cto = function () {
    function ktm5ol() {}f3471q(ktm5ol, 'laya.wx.mini.MiniLoader');var fg3v4 = ktm5ol['prototype'];return fg3v4['load'] = function (_6ys, u$8z9r, $pluc8, zd8r9, d9hzjr) {
      $pluc8 === void 0x0 && ($pluc8 = !![]), d9hzjr === void 0x0 && (d9hzjr = ![]);var r8j9$z = this;r8j9$z['_url'] = _6ys;if (_6ys['indexOf']('data:image') === 0x0) r8j9$z['_type'] = u$8z9r = 'image';else r8j9$z['_type'] = u$8z9r || (u$8z9r = r8j9$z['getTypeFromUrl'](_6ys));r8j9$z['_cache'] = $pluc8, r8j9$z['_data'] = null;var $p8urz = 'ascii';if (_6ys['indexOf']('.fnt') != -0x1) $p8urz = 'utf8';else u$8z9r == 'arraybuffer' && ($p8urz = '');;var y62an = hw7qx0['getFileExtension'](_6ys);if (ktm5ol['_fileTypeArr']['indexOf'](y62an) != -0x1) g31v4f['EnvConfig']['load']['call'](this, _6ys, u$8z9r, $pluc8, zd8r9, d9hzjr);else {
        if (!jz$9r['getFileInfo'](_6ys)) {
          if (_6ys['indexOf']('layaNativeDir/') != -0x1) {
            if (g31v4f['isZiYu']) {
              var p$cr8 = jz$9r['ziyuFileData'][_6ys];r8j9$z['onLoaded'](p$cr8);return;
            } else {
              cosnole['log']('read read'), jz$9r['read'](_6ys, $p8urz, new s_nv(ktm5ol, ktm5ol['onReadNativeCallBack'], [$p8urz, _6ys, u$8z9r, $pluc8, zd8r9, d9hzjr, r8j9$z]));return;
            }
          }if (h7q0w['rootPath'] == '') var k5lo = _6ys;else k5lo = _6ys['split'](h7q0w['rootPath'])[0x0];_6ys['indexOf']('http://') != -0x1 || _6ys['indexOf']('https://') != -0x1 ? g31v4f['EnvConfig']['load']['call'](r8j9$z, _6ys, u$8z9r, $pluc8, zd8r9, d9hzjr) : jz$9r['readFile'](k5lo, $p8urz, new s_nv(ktm5ol, ktm5ol['onReadNativeCallBack'], [$p8urz, _6ys, u$8z9r, $pluc8, zd8r9, d9hzjr, r8j9$z]), _6ys);
        } else g31v4f['EnvConfig']['load']['call'](this, _6ys, u$8z9r, $pluc8, zd8r9, d9hzjr);
      }
    }, fg3v4['resMgrLoad'] = function (cuo, asyi6, z$98rj, d9jw, ns_yav, va_sny, vysn_g) {
      z$98rj === void 0x0 && (z$98rj = 0x0), d9jw === void 0x0 && (d9jw = ![]), ns_yav === void 0x0 && (ns_yav = ![]), va_sny === void 0x0 && (va_sny = 0x0), vysn_g === void 0x0 && (vysn_g = 0x3), cuo['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cuo), g31v4f['EnvConfig']['resMgrLoad'](cuo, (w0qhx7, $8jr9, _gvsyn) => {
        ktm5ol['prototype']['resMgrLoadCallBack'](w0qhx7, $8jr9, _gvsyn, asyi6);
      }, z$98rj, d9jw, ns_yav, va_sny, vysn_g);
    }, fg3v4['resMgrLoadCallBack'] = function (hx0qw7, be2ia6, q0hxw, zw9hd) {
      console['log']('buff:::', hx0qw7, q0hxw, jz$9r['fileNativeDir'] + '///' + jz$9r['fileListName']), zw9hd(hx0qw7, be2ia6, q0hxw);
    }, fg3v4['clearRes'] = function (y6sai, drh9jz) {
      drh9jz === void 0x0 && (drh9jz = ![]);var f41q73 = this;f41q73['clearRes'](y6sai, drh9jz);var vf_sgn = jz$9r['getFileInfo'](y6sai);if (vf_sgn && (y6sai['indexOf']('http://') != -0x1 || y6sai['indexOf']('https://') != -0x1)) {
        var pu5lo = vf_sgn['md5'],
            dhj9rz = jz$9r['getFileNativePath'](pu5lo);jz$9r['remove'](dhj9rz);
      }
    }, ktm5ol['onReadNativeCallBack'] = function (iays6, pr$c, bi2ea, rd9, mco5lt, d0h, gfv43, is6y, g4f371) {
      rd9 === void 0x0 && (rd9 = !![]), d0h === void 0x0 && (d0h = ![]), is6y === void 0x0 && (is6y = 0x0);if (!is6y) {
        var t5molk;if (bi2ea == 'json' || bi2ea == 'atlas') t5molk = g31v4f['getJson'](g4f371['data']);else bi2ea == 'xml' ? t5molk = hw7qx0['parseXMLFromString'](g4f371['data']) : t5molk = g4f371['data'];gfv43['onLoaded'](t5molk), !g31v4f['isZiYu'] && g31v4f['isPosMsgYu'] && bi2ea != 'arraybuffer' && wx['postMessage']({ 'url': pr$c, 'data': t5molk, 'isLoad': !![] });
      } else is6y == 0x1 && g31v4f['EnvConfig']['load']['call'](gfv43, pr$c, bi2ea, rd9, mco5lt, d0h);
    }, t5lk(ktm5ol, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ktm5ol;
  }(),
      jz$9r = function (byia) {
    function ibae62() {
      ibae62['__super']['call'](this);;
    }return f3471q(ibae62, 'laya.wx.mini.MiniFileMgr', byia), ibae62['isLoadFile'] = function (pl5) {
      return ibae62['_fileTypeArr']['indexOf'](pl5) != -0x1 ? !![] : ![];
    }, ibae62['getFileInfo'] = function (r9jd8) {
      var gvsny_ = r9jd8['split']('?')[0x0],
          vfnsg = ibae62['filesListObj'][gvsny_];if (vfnsg == null) return null;else return vfnsg;return null;
    }, ibae62['onFileUpdate'] = function (nsv_f, zru98) {
      var _anvs = nsv_f['split']('/'),
          gsvny_ = _anvs[_anvs['length'] - 0x1],
          t5lmoc = ibae62['getFileInfo'](zru98);if (t5lmoc == null) ibae62['onSaveFile'](zru98, gsvny_);else {
        if (t5lmoc['readyUrl'] != zru98) ibae62['remove'](gsvny_, zru98);
      }
    }, ibae62['exits'] = function (ltp, w0qh7x) {
      var u5p$cl = ibae62['getFileNativePath'](ltp);ibae62['fs']['getFileInfo']({ 'filePath': u5p$cl, 'success': function (pcol) {
          w0qh7x != null && w0qh7x['runWith']([0x0, pcol]);
        }, 'fail': function (pc5lto) {
          w0qh7x != null && w0qh7x['runWith']([0x1, pc5lto]);
        } });
    }, ibae62['read'] = function (w10x7, sny6_, v_yna, w7q0hx) {
      sny6_ === void 0x0 && (sny6_ = 'ascill'), w7q0hx === void 0x0 && (w7q0hx = '');var mloct;w7q0hx != '' ? mloct = ibae62['getFileNativePath'](w10x7) : mloct = w10x7, ibae62['fs']['readFile']({ 'filePath': mloct, 'encoding': sny6_, 'success': function ($pcur8) {
          v_yna != null && v_yna['runWith']([0x0, $pcur8]);
        }, 'fail': function (ruz89$) {
          if (ruz89$ && w7q0hx != '') ibae62['down'](w7q0hx, sny6_, v_yna, w7q0hx);else v_yna != null && v_yna['runWith']([0x1]);
        } });
    }, ibae62['readNativeFile'] = function (hjzrd, cp$l8u) {
      ibae62['fs']['readFile']({ 'filePath': hjzrd, 'encoding': '', 'success': function (q3701) {
          cp$l8u != null && cp$l8u['runWith']([0x0]);
        }, 'fail': function (l5mtok) {
          cp$l8u != null && cp$l8u['runWith']([0x1]);
        } });
    }, ibae62['down'] = function (lco, anv_ys, j9zrhd, _4vgnf) {
      anv_ys === void 0x0 && (anv_ys = 'ascill'), _4vgnf === void 0x0 && (_4vgnf = '');var b2iae6 = ibae62['getFileNativePath'](_4vgnf),
          xqdwh = ibae62['wxdown']({ 'url': lco, 'filePath': b2iae6, 'success': function (tmc5) {
          if (tmc5['statusCode'] === 0xc8) ibae62['readFile'](tmc5['filePath'], anv_ys, j9zrhd, _4vgnf);
        }, 'fail': function (whdx) {
          j9zrhd != null && j9zrhd['runWith']([0x1, whdx]);
        } });xqdwh['onProgressUpdate'](function (fng4_v) {
        j9zrhd != null && j9zrhd['runWith']([0x2, fng4_v['progress']]);
      });
    }, ibae62['readFile'] = function (sia, ktlo5, zu8pr$, zj9dwh) {
      ktlo5 === void 0x0 && (ktlo5 = 'ascill'), zj9dwh === void 0x0 && (zj9dwh = ''), ibae62['fs']['readFile']({ 'filePath': sia, 'encoding': ktlo5, 'success': function (u8$9zr) {
          if (sia['indexOf']('http://') != -0x1 || sia['indexOf']('https://') != -0x1) ibae62['onFileUpdate'](sia, zj9dwh);zu8pr$ != null && zu8pr$['runWith']([0x0, u8$9zr]);
        }, 'fail': function (x1703q) {
          if (x1703q) zu8pr$ != null && zu8pr$['runWith']([0x1, x1703q]);
        } });
    }, ibae62['downImg'] = function (cm5o, tcolp5, lu5cpo) {
      lu5cpo === void 0x0 && (lu5cpo = '');var sy62i = ibae62['wxdown']({ 'url': cm5o, 'success': function (qxd0hw) {
          qxd0hw['statusCode'] === 0xc8 && ibae62['copyFile'](qxd0hw['tempFilePath'], lu5cpo, tcolp5);
        }, 'fail': function (clmo5t) {
          tcolp5 != null && tcolp5['runWith']([0x1, clmo5t]);
        } });
    }, ibae62['copyFile'] = function (sn_vgf, ny2s6a, i62sya) {
      var xh7w = sn_vgf['split']('/'),
          na62y = xh7w[xh7w['length'] - 0x1],
          rdzhj = ny2s6a['split']('?')[0x0],
          ie62a = ibae62['getFileInfo'](ny2s6a),
          jh0xdw = ibae62['getFileNativePath'](na62y);ibae62['fs']['copyFile']({ 'srcPath': sn_vgf, 'destPath': jh0xdw, 'success': function (n2sa6) {
          if (!ie62a) ibae62['onSaveFile'](ny2s6a, na62y), i62sya != null && i62sya['runWith']([0x0]);else {
            if (ie62a['readyUrl'] != ny2s6a) ibae62['remove'](na62y, ny2s6a, i62sya);
          }
        }, 'fail': function (_vgsfn) {
          i62sya != null && i62sya['runWith']([0x1, _vgsfn]);
        } });
    }, ibae62['getFileNativePath'] = function (_vnys) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _vnys;
    }, ibae62['remove'] = function (pt5co, h0wjxd, ru$89) {
      h0wjxd === void 0x0 && (h0wjxd = '');var $9zr8 = ibae62['getFileInfo'](h0wjxd),
          vng_sf = ibae62['getFileNativePath']($9zr8['md5']);vsnay['loader']['clearRes']($9zr8['readyUrl']), ibae62['fs']['unlink']({ 'filePath': vng_sf, 'success': function (yi6b) {
          if (h0wjxd != '') ibae62['onSaveFile'](h0wjxd, pt5co);ru$89 != null && ru$89['runWith']([0x0]);
        }, 'fail': function (nvsy_a) {} });
    }, ibae62['onSaveFile'] = function (i6e2b, a62ei) {
      var qhxwd0 = i6e2b['split']('?')[0x0];ibae62['filesListObj'][qhxwd0] = { 'md5': a62ei, 'readyUrl': i6e2b }, ibae62['fs']['writeFile']({ 'filePath': ibae62['fileNativeDir'] + '/' + ibae62['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ibae62['filesListObj']), 'success': function (nayv_s) {
          console['log']('写入测试测试成功：', nayv_s);
        }, 'fail': function (vg_4fn) {
          console['log']('写入测试测试失败：', vg_4fn);
        } });
    }, ibae62['existDir'] = function (fvgn_s, e26) {
      ibae62['fs']['mkdir']({ 'dirPath': fvgn_s, 'success': function (c8$upr) {
          e26 != null && e26['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (a_6ys) {
          if (a_6ys['errMsg']['indexOf']('file already exists') != -0x1) ibae62['readSync'](ibae62['fileListName'], 'utf8', e26);else e26 != null && e26['runWith']([0x1, a_6ys]);
        } });
    }, ibae62['readSync'] = function (k5mtl, xj0hdw, hwdq0x, lu$p5c) {
      xj0hdw === void 0x0 && (xj0hdw = 'ascill'), lu$p5c === void 0x0 && (lu$p5c = '');var vsfn_ = ibae62['getFileNativePath'](k5mtl),
          jzwdh9;try {
        jzwdh9 = ibae62['fs']['readFileSync'](vsfn_), hwdq0x != null && hwdq0x['runWith']([0x0, { 'data': jzwdh9 }]);
      } catch (s_vfg) {
        hwdq0x != null && hwdq0x['runWith']([0x1]);
      }
    }, ibae62['readCache'] = function () {}, ibae62['writeCache'] = function (tclm5o) {
      var l5mtc = readyUrl['split']('?')[0x0];ibae62['filesListObj'][l5mtc] = { 'md5': md5Name, 'readyUrl': readyUrl }, ibae62['fs']['writeFile']({ 'filePath': ibae62['fileNativeDir'] + '/' + ibae62['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ibae62['filesListObj']), 'success': function (ay6sn_) {}, 'fail': function (fq741) {} });
    }, ibae62['setNativeFileDir'] = function (j8r9$z) {
      ibae62['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j8r9$z;
    }, ibae62['filesListObj'] = {}, ibae62['fileNativeDir'] = null, ibae62['fileListName'] = 'layaairfiles.txt', ibae62['ziyuFileData'] = {}, t5lk(ibae62, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ibae62;
  }(klmt5o),
      v134fg = function (j9rdzh) {
    function iy6ab2() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], iy6ab2['__super']['call'](this), this['_sound'] = iy6ab2['_createSound'](), this['_chanell'] = new w0hdxq(this['_sound']);
    }f3471q(iy6ab2, 'laya.wx.mini.MiniSound', j9rdzh);var gv4nf = iy6ab2['prototype'];return gv4nf['load'] = function ($8zpur) {
      var fg3v_4 = this;$8zpur = h7q0w['formatURL']($8zpur), this['url'] = $8zpur;if (iy6ab2['_audioCache'][$8zpur]) {
        this['event']('complete');return;
      }function $8ur9() {
        if (iy6ab2['_null'] != undefined) fg3v_4['_sound']['onCanplay'](iy6ab2['_null']), fg3v_4['_sound']['onError'](iy6ab2['_null']);else try {
          fg3v_4['_sound']['onCanplay'](null), fg3v_4['_sound']['onError'](null), iy6ab2['_null'] = null;
        } catch (lok5t) {
          console['warn']('[wxmini] _clearSound:' + lok5t), fg3v_4['_sound']['onCanplay'](eb2i), fg3v_4['_sound']['onError'](eb2i), iy6ab2['_null'] = eb2i;
        }
      }function c8ur$() {
        jz98r['loaded'] = !![], jz98r['event']('complete'), iy6ab2['_audioCache'][jz98r['url']] = jz98r;
      }function ay6ib2(locm) {
        console['error']('errCode=' + locm['errCode'] + '  errMsg=' + locm['errMsg']), jz98r['event']('error');
      }function eb2i() {}this['_sound']['onCanplay'](c8ur$), this['_sound']['onError'](ay6ib2), this['_sound']['src'] = $8zpur;var jz98r = this;
    }, gv4nf['play'] = function (dwj0h, fg3v_) {
      dwj0h === void 0x0 && (dwj0h = 0x0), fg3v_ === void 0x0 && (fg3v_ = 0x0);var jzr9d8, c5plot;if (this['url'] == xq43['_tMusic']) {
        if (!iy6ab2['_musicAudio']) iy6ab2['_musicAudio'] = this['_sound'];jzr9d8 = iy6ab2['_musicAudio'], c5plot = this['_chanell'];
      } else jzr9d8 = this['_sound'], c5plot = this['_chanell'];return jzr9d8['src'] = this['url'], jzr9d8['startTime'] = 0x0, c5plot['isStopped'] && (c5plot['url'] = this['url'], c5plot['loops'] = fg3v_, c5plot['startTime'] = dwj0h, c5plot['play'](), xq43['addChannel'](c5plot)), c5plot;
    }, gv4nf['dispose'] = function () {
      var upzr$ = iy6ab2['_audioCache'][this['url']];upzr$ && (upzr$['src'] = '', delete iy6ab2['_audioCache'][this['url']]);
    }, ol5pcu(0x0, gv4nf, 'duration', function () {
      return this['_sound']['duration'];
    }), iy6ab2['_createSound'] = function () {
      iy6ab2['_id']++;var dw0jhx = g31v4f['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return dw0jhx;
    }, iy6ab2['_musicAudio'] = null, iy6ab2['_id'] = 0x0, iy6ab2['_audioCache'] = {}, iy6ab2['_null'] = undefined, iy6ab2;
  }(klmt5o),
      w0hdxq = function (p$u5lc) {
    function yn2(z$rp) {
      this['_audio'] = null, this['_onEnd'] = null, yn2['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z$rp, this['_onEnd'] = hw7qx0['bind'](this['__onEnd'], this), z$rp['onEnded'](this['_onEnd']);
    }f3471q(yn2, 'laya.wx.mini.MiniSoundChannel', p$u5lc);var q74f = yn2['prototype'];return q74f['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (vsnay['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q74f['__onNull'] = function () {}, q74f['play'] = function () {
      this['isStopped'] = ![], xq43['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, q74f['stop'] = function () {
      this['isStopped'] = !![], xq43['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, q74f['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, q74f['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], xq43['addChannel'](this), this['_audio']['play']();
    }, ol5pcu(0x0, q74f, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ol5pcu(0x0, q74f, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ol5pcu(0x0, q74f, 'volume', function () {
      return 0x1;
    }, function (otc5pl) {}), yn2['_null'] = undefined, yn2;
  }($rupc),
      lou = function () {
    function _nsya() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = g31v4f['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }f3471q(_nsya, 'laya.wx.mini.MiniVideo');var jxwhd0 = _nsya['prototype'];return jxwhd0['on'] = function (mlto5, hqx07, rhzjd9) {
      if (mlto5 == 'loadedmetadata') this['onPlayFunc'] = rhzjd9['bind'](hqx07), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else mlto5 == 'ended' && (this['onEndedFunC'] = rhzjd9['bind'](hqx07), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, jxwhd0['onTimeUpdateFunc'] = function (u5c$pl) {
      this['position'] = u5c$pl['position'], this['_duration'] = u5c$pl['duration'];
    }, jxwhd0['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, jxwhd0['onended'] = function (rzh9j, b26ayi) {
      this['onEndedFunC'] = b26ayi['bind'](rzh9j), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, jxwhd0['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, jxwhd0['off'] = function (gv_n, qx7w10, jhd9) {
      if (gv_n == 'loadedmetadata') this['onPlayFunc'] = jhd9['bind'](qx7w10), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else gv_n == 'ended' && (this['onEndedFunC'] = jhd9['bind'](qx7w10), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, jxwhd0['load'] = function (ltmc) {
      if (!this['videoElement']) return;this['videoElement']['src'] = ltmc;
    }, jxwhd0['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, jxwhd0['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, jxwhd0['size'] = function (d9zhj, z8dr9) {
      if (!this['videoElement']) return;this['videoElement']['width'] = d9zhj, this['videoElement']['height'] = z8dr9;
    }, jxwhd0['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, jxwhd0['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, ol5pcu(0x0, jxwhd0, 'duration', function () {
      return this['_duration'];
    }), ol5pcu(0x0, jxwhd0, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (rdjh) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = rdjh;
    }), ol5pcu(0x0, jxwhd0, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), ol5pcu(0x0, jxwhd0, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), ol5pcu(0x0, jxwhd0, 'ended', function () {
      return this['videoend'];
    }), ol5pcu(0x0, jxwhd0, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (zhdjr) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = zhdjr;
    }), ol5pcu(0x0, jxwhd0, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (r$j98) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = r$j98;
    }), ol5pcu(0x0, jxwhd0, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (uz8r$9) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = uz8r$9;
    }), ol5pcu(0x0, jxwhd0, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), ol5pcu(0x0, jxwhd0, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (sy6a_) {
      if (!this['videoElement']) return;this['videoElement']['x'] = sy6a_;
    }), ol5pcu(0x0, jxwhd0, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (pru$c8) {
      if (!this['videoElement']) return;this['videoElement']['y'] = pru$c8;
    }), ol5pcu(0x0, jxwhd0, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), ol5pcu(0x0, jxwhd0, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (q01xw7) {
      if (!this['videoElement']) return;this['videoElement']['src'] = q01xw7;
    }), ol5pcu(0x0, jxwhd0, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (mk5o) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = mk5o;
    }), ol5pcu(0x0, jxwhd0, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function ($rz8p) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = $rz8p;
    }), _nsya;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var poct in Laya) {
    var b26ay = Laya[poct];b26ay && b26ay['__isclass'] && (exports[poct] = b26ay);
  }
});