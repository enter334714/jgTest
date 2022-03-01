var D = wx.$b;
(function (window, document, hcp1w) {
  var o86d9s = hcp1w['un'],
      kl6o7 = hcp1w['uns'],
      fja45$ = hcp1w['static'],
      yj0inu = hcp1w['class'],
      phwc = hcp1w['getset'],
      x6ok = hcp1w['__newvec'],
      d89r2 = laya['utils']['Browser'],
      ja4f$ = laya['events']['Event'],
      xl6kdo = laya['events']['EventDispatcher'],
      x7qkl = laya['resource']['HTMLImage'],
      cwmt1p = laya['utils']['Handler'],
      wvhc1p = laya['display']['Input'],
      wtcz = laya['net']['Loader'],
      r_hv9 = laya['maths']['Matrix'],
      hr_9v2 = laya['renders']['Render'],
      _2vpr = laya['utils']['RunDriver'],
      pctv1 = laya['media']['Sound'],
      jn045i = laya['media']['SoundChannel'],
      vpcw1 = laya['media']['SoundManager'],
      rhp_v = laya['display']['Stage'],
      pcv1t = laya['net']['URL'],
      w_vp1 = laya['utils']['Utils'],
      y1ct = function () {
    function c1mztw() {}return yj0inu(c1mztw, 'laya.wx.mini.MiniAdpter'), c1mztw['getJson'] = function (_r2h) {
      return JSON['parse'](_r2h);
    }, c1mztw['init'] = function (zu0im, n40$5j) {
      zu0im === void 0x0 && (zu0im = ![]), n40$5j === void 0x0 && (n40$5j = ![]);if (c1mztw['_inited']) return;c1mztw['window'] = window;if (c1mztw['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;c1mztw['_inited'] = !![], c1mztw['isZiYu'] = n40$5j, c1mztw['isPosMsgYu'] = zu0im, c1mztw['EnvConfig'] = {}, !c1mztw['isZiYu'] && (xl7qgk['setNativeFileDir']('/layaairGame'), xl7qgk['existDir'](xl7qgk['fileNativeDir'], cwmt1p['create'](c1mztw, c1mztw['onMkdirCallBack']))), c1mztw['window']['focus'] = function () {}, hcp1w['getUrlPath'] = function () {}, c1mztw['window']['logtime'] = function (u0izn) {}, c1mztw['window']['alertTimeLog'] = function (_82sr9) {}, c1mztw['window']['resetShareInfo'] = function () {}, c1mztw['window']['CanvasRenderingContext2D'] = function () {}, c1mztw['window']['CanvasRenderingContext2D']['prototype'] = c1mztw['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], c1mztw['window']['document']['body']['appendChild'] = function () {}, c1mztw['EnvConfig']['pixelRatioInt'] = 0x0, _2vpr['getPixelRatio'] = c1mztw['pixelRatio'], c1mztw['_preCreateElement'] = d89r2['createElement'], d89r2['createElement'] = c1mztw['createElement'], _2vpr['createShaderCondition'] = c1mztw['createShaderCondition'], w_vp1['parseXMLFromString'] = c1mztw['parseXMLFromString'], wvhc1p['_createInputElement'] = a54j['_createInputElement'], c1mztw['EnvConfig']['load'] = wtcz['prototype']['load'], wtcz['prototype']['load'] = ymztc1['prototype']['load'], c1mztw['isZiYu'] && zu0im && wx['onMessage'](function (qolk) {
        qolk['isLoad'] && (xl7qgk['ziyuFileData'][qolk['url']] = qolk['data']);
      });
    }, c1mztw['onMkdirCallBack'] = function (xq7gkl, qkxl7g) {
      if (!xq7gkl) xl7qgk['filesListObj'] = JSON['parse'](qkxl7g['data']);
    }, c1mztw['pixelRatio'] = function () {
      if (!c1mztw['EnvConfig']['pixelRatioInt']) try {
        var q3gx7 = wx['getSystemInfoSync']();return c1mztw['EnvConfig']['pixelRatioInt'] = q3gx7['pixelRatio'], q3gx7 = q3gx7, q3gx7['pixelRatio'];
      } catch (xg) {}return c1mztw['EnvConfig']['pixelRatioInt'];
    }, c1mztw['createElement'] = function (w1phv) {
      if (w1phv == 'canvas') {
        var ph_vw;return c1mztw['idx'] == 0x1 ? c1mztw['isZiYu'] ? (ph_vw = sharedCanvas, ph_vw['style'] = {}) : ph_vw = window['canvas'] : ph_vw = window['wx']['createCanvas'](), c1mztw['idx']++, ph_vw;
      } else {
        if (w1phv == 'textarea' || w1phv == 'input') return c1mztw['onCreateInput'](w1phv);else {
          if (w1phv == 'div') {
            var wvh1cp = c1mztw['_preCreateElement'](w1phv);return wvh1cp['contains'] = function ($5eaf4) {
              return null;
            }, wvh1cp['removeChild'] = function (h9_r2) {}, wvh1cp;
          } else return c1mztw['_preCreateElement'](w1phv);
        }
      }
    }, c1mztw['onCreateInput'] = function (yzumtc) {
      var $f5ja = c1mztw['_preCreateElement'](yzumtc);return $f5ja['focus'] = a54j['wxinputFocus'], $f5ja['blur'] = a54j['wxinputblur'], $f5ja['style'] = {}, $f5ja['value'] = 0x0, $f5ja['parentElement'] = {}, $f5ja['placeholder'] = {}, $f5ja['type'] = {}, $f5ja['setColor'] = function (m0u) {}, $f5ja['setType'] = function (ituzym) {}, $f5ja['setFontFace'] = function (uyct) {}, $f5ja['addEventListener'] = function (cwtv1) {}, $f5ja['contains'] = function (xk6lod) {
        return null;
      }, $f5ja['removeChild'] = function (x7q3) {}, $f5ja;
    }, c1mztw['createShaderCondition'] = function (xgql7) {
      var izu0yn = this,
          wchpv1 = function () {
        var u4j = xgql7;return izu0yn[xgql7['replace']('this.', '')];
      };return wchpv1;
    }, c1mztw['EnvConfig'] = null, c1mztw['window'] = null, c1mztw['_preCreateElement'] = null, c1mztw['_inited'] = ![], c1mztw['wxRequest'] = null, c1mztw['systemInfo'] = null, c1mztw['version'] = '0.0.1', c1mztw['isZiYu'] = ![], c1mztw['isPosMsgYu'] = ![], c1mztw['parseXMLFromString'] = function (k37gqx) {
      var ytmcuz, osd98;k37gqx = k37gqx['replace'](/>\s+</g, '><');try {
        ytmcuz = new window['Parser']['DOMParser']()['parseFromString'](k37gqx, 'text/xml');
      } catch (vp1) {
        throw '需要引入xml解析库文件';
      }return ytmcuz;
    }, c1mztw['idx'] = 0x1, c1mztw;
  }(),
      tpcwm1 = function () {
    function mtziu() {}yj0inu(mtziu, 'laya.wx.mini.MiniImage');var sd86o = mtziu['prototype'];return sd86o['_loadImage'] = function (rh2v_) {
      var kx37q = this,
          l8kd6o = ![];rh2v_['indexOf']('layaNativeDir/') == -0x1 && (l8kd6o = !![], rh2v_ = pcv1t['formatURL'](rh2v_));if (!xl7qgk['getFileInfo'](rh2v_)) {
        if (rh2v_['indexOf']('http://') != -0x1 || rh2v_['indexOf']('https://') != -0x1) xl7qgk['downImg'](rh2v_, new cwmt1p(mtziu, mtziu['onDownImgCallBack'], [rh2v_, kx37q]), rh2v_);else mtziu['onCreateImage'](rh2v_, kx37q, !![]);
      } else mtziu['onCreateImage'](rh2v_, kx37q, !l8kd6o);
    }, mtziu['onDownImgCallBack'] = function (l6odk8, xgk3, od8kl6) {
      if (!od8kl6) mtziu['onCreateImage'](l6odk8, xgk3);else xgk3['onError'](null);
    }, mtziu['onCreateImage'] = function (n45$0, klqx7g, jin0) {
      jin0 === void 0x0 && (jin0 = ![]);var v1pcw;if (!jin0) {
        var n4j5i = xl7qgk['getFileInfo'](n45$0),
            m1tzcw = n4j5i['md5'];v1pcw = xl7qgk['getFileNativePath'](m1tzcw);
      } else v1pcw = n45$0;if (klqx7g['imgCache'] == null) klqx7g['imgCache'] = {};var cwmtz;function vrph2_() {
        cwmtz['onload'] = null, cwmtz['onerror'] = null, delete klqx7g['imgCache'][n45$0];
      };var $aj5n = function () {
        vrph2_(), klqx7g['onLoaded'](cwmtz);
      },
          _hwp = function () {
        vrph2_(), klqx7g['event']('error', 'Load image failed');
      };klqx7g['_type'] == 'nativeimage' ? (cwmtz = new d89r2['window']['Image'](), cwmtz['crossOrigin'] = '', cwmtz['onload'] = $aj5n, cwmtz['onerror'] = _hwp, cwmtz['src'] = v1pcw, klqx7g['imgCache'][n45$0] = cwmtz) : new x7qkl['create'](v1pcw, { 'onload': $aj5n, 'onerror': _hwp, 'onCreate': function (y0inuj) {
          cwmtz = y0inuj, klqx7g['imgCache'][n45$0] = y0inuj;
        } });
    }, mtziu;
  }(),
      a54j = function () {
    function t1mcp() {}return yj0inu(t1mcp, 'laya.wx.mini.MiniInput'), t1mcp['_createInputElement'] = function () {
      wvhc1p['_initInput'](wvhc1p['area'] = d89r2['createElement']('textarea')), wvhc1p['_initInput'](wvhc1p['input'] = d89r2['createElement']('input')), wvhc1p['inputContainer'] = d89r2['createElement']('div'), wvhc1p['inputContainer']['style']['position'] = 'absolute', wvhc1p['inputContainer']['style']['zIndex'] = 0x186a0, d89r2['container']['appendChild'](wvhc1p['inputContainer']), wvhc1p['inputContainer']['setPos'] = function (sr9_, x6kol) {
        wvhc1p['inputContainer']['style']['left'] = sr9_ + 'px', wvhc1p['inputContainer']['style']['top'] = x6kol + 'px';
      }, hcp1w['stage']['on']('resize', null, t1mcp['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (inu40j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vpcw1['_soundClass'] = lkdx, vpcw1['_musicClass'] = lkdx;
    }, t1mcp['_onStageResize'] = function () {
      var myi = hcp1w['stage']['_canvasTransform']['identity']();myi['scale'](d89r2['width'] / hr_9v2['canvas']['width'] / _2vpr['getPixelRatio'](), d89r2['height'] / hr_9v2['canvas']['height'] / _2vpr['getPixelRatio']());
    }, t1mcp['wxinputFocus'] = function (nj45) {
      var ztuyc = wvhc1p['inputElement']['target'];if (ztuyc && !ztuyc['editable']) return;y1ct['window']['wx']['offKeyboardConfirm'](), y1ct['window']['wx']['offKeyboardInput'](), y1ct['window']['wx']['showKeyboard']({ 'defaultValue': ztuyc['text'], 'maxLength': ztuyc['maxChars'], 'multiple': ztuyc['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (j0$45n) {}, 'fail': function (mz1ytc) {} }), y1ct['window']['wx']['onKeyboardConfirm'](function (aj5$n) {
        var pvchw = aj5$n ? aj5$n['value'] : '';ztuyc['text'] = pvchw, ztuyc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), y1ct['window']['wx']['onKeyboardInput'](function (mutcy) {
        var $f5e4 = mutcy ? mutcy['value'] : '';if (!ztuyc['multiline']) {
          if ($f5e4['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ztuyc['text'] = $f5e4, ztuyc['event']('input');
      });
    }, t1mcp['inputEnter'] = function () {
      wvhc1p['inputElement']['target']['focus'] = ![];
    }, t1mcp['wxinputblur'] = function () {
      t1mcp['hideKeyboard']();
    }, t1mcp['hideKeyboard'] = function () {
      y1ct['window']['wx']['offKeyboardConfirm'](), y1ct['window']['wx']['offKeyboardInput'](), y1ct['window']['wx']['hideKeyboard']({ 'success': function (xq7ol) {
          console['log']('隐藏键盘');
        }, 'fail': function (oxk67) {
          console['log']('隐藏键盘出错:' + (oxk67 ? oxk67['errMsg'] : ''));
        } });
    }, t1mcp;
  }(),
      ymztc1 = function () {
    function _1vhwp() {}yj0inu(_1vhwp, 'laya.wx.mini.MiniLoader');var dolx6k = _1vhwp['prototype'];return dolx6k['load'] = function (mwc1, wtmzc, k6d8o, ja$54, n5j0) {
      k6d8o === void 0x0 && (k6d8o = !![]), n5j0 === void 0x0 && (n5j0 = ![]);var o76lxk = this;o76lxk['_url'] = mwc1;if (mwc1['indexOf']('data:image') === 0x0) o76lxk['_type'] = wtmzc = 'image';else o76lxk['_type'] = wtmzc || (wtmzc = o76lxk['getTypeFromUrl'](mwc1));o76lxk['_cache'] = k6d8o, o76lxk['_data'] = null;var d68o9s = 'ascii';if (mwc1['indexOf']('.fnt') != -0x1) d68o9s = 'utf8';else wtmzc == 'arraybuffer' && (d68o9s = '');;var r_82s9 = w_vp1['getFileExtension'](mwc1);if (_1vhwp['_fileTypeArr']['indexOf'](r_82s9) != -0x1) y1ct['EnvConfig']['load']['call'](this, mwc1, wtmzc, k6d8o, ja$54, n5j0);else {
        if (!xl7qgk['getFileInfo'](mwc1)) {
          if (mwc1['indexOf']('layaNativeDir/') != -0x1) {
            if (y1ct['isZiYu']) {
              var j5in04 = xl7qgk['ziyuFileData'][mwc1];o76lxk['onLoaded'](j5in04);return;
            } else {
              cosnole['log']('read read'), xl7qgk['read'](mwc1, d68o9s, new cwmt1p(_1vhwp, _1vhwp['onReadNativeCallBack'], [d68o9s, mwc1, wtmzc, k6d8o, ja$54, n5j0, o76lxk]));return;
            }
          }if (pcv1t['rootPath'] == '') var w1_v = mwc1;else w1_v = mwc1['split'](pcv1t['rootPath'])[0x0];mwc1['indexOf']('http://') != -0x1 || mwc1['indexOf']('https://') != -0x1 ? y1ct['EnvConfig']['load']['call'](o76lxk, mwc1, wtmzc, k6d8o, ja$54, n5j0) : xl7qgk['readFile'](w1_v, d68o9s, new cwmt1p(_1vhwp, _1vhwp['onReadNativeCallBack'], [d68o9s, mwc1, wtmzc, k6d8o, ja$54, n5j0, o76lxk]), mwc1);
        } else y1ct['EnvConfig']['load']['call'](this, mwc1, wtmzc, k6d8o, ja$54, n5j0);
      }
    }, dolx6k['resMgrLoad'] = function (uy0nz, lgq7, e$5a, af$4, s86r9, nu0, yjun) {
      e$5a === void 0x0 && (e$5a = 0x0), af$4 === void 0x0 && (af$4 = ![]), s86r9 === void 0x0 && (s86r9 = ![]), nu0 === void 0x0 && (nu0 = 0x0), yjun === void 0x0 && (yjun = 0x3), uy0nz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', uy0nz), y1ct['EnvConfig']['resMgrLoad'](uy0nz, (n5j4$, v_2w, qkx7ol) => {
        _1vhwp['prototype']['resMgrLoadCallBack'](n5j4$, v_2w, qkx7ol, lgq7);
      }, e$5a, af$4, s86r9, nu0, yjun);
    }, dolx6k['resMgrLoadCallBack'] = function (o8sld, ij5n4, o6l8s, _h9sr2) {
      console['log']('buff:::', o8sld, o6l8s, xl7qgk['fileNativeDir'] + '///' + xl7qgk['fileListName']), _h9sr2(o8sld, ij5n4, o6l8s);
    }, dolx6k['clearRes'] = function (cpm, hv1_p) {
      hv1_p === void 0x0 && (hv1_p = ![]);var f54ja$ = this;f54ja$['clearRes'](cpm, hv1_p);var kg3x7q = xl7qgk['getFileInfo'](cpm);if (kg3x7q && (cpm['indexOf']('http://') != -0x1 || cpm['indexOf']('https://') != -0x1)) {
        var z0ny = kg3x7q['md5'],
            pv1w_h = xl7qgk['getFileNativePath'](z0ny);xl7qgk['remove'](pv1w_h);
      }
    }, _1vhwp['onReadNativeCallBack'] = function (klgxq7, t1cmwz, zuyit, rv_29h, i0uy, wcvhp, h9rv_, _p2hvr, ldkx) {
      rv_29h === void 0x0 && (rv_29h = !![]), wcvhp === void 0x0 && (wcvhp = ![]), _p2hvr === void 0x0 && (_p2hvr = 0x0);if (!_p2hvr) {
        var ui0nzy;if (zuyit == 'json' || zuyit == 'atlas') ui0nzy = y1ct['getJson'](ldkx['data']);else zuyit == 'xml' ? ui0nzy = w_vp1['parseXMLFromString'](ldkx['data']) : ui0nzy = ldkx['data'];h9rv_['onLoaded'](ui0nzy), !y1ct['isZiYu'] && y1ct['isPosMsgYu'] && zuyit != 'arraybuffer' && wx['postMessage']({ 'url': t1cmwz, 'data': ui0nzy, 'isLoad': !![] });
      } else _p2hvr == 0x1 && y1ct['EnvConfig']['load']['call'](h9rv_, t1cmwz, zuyit, rv_29h, i0uy, wcvhp);
    }, fja45$(_1vhwp, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _1vhwp;
  }(),
      xl7qgk = function (qlxo) {
    function miu0yz() {
      miu0yz['__super']['call'](this);;
    }return yj0inu(miu0yz, 'laya.wx.mini.MiniFileMgr', qlxo), miu0yz['isLoadFile'] = function (p1wvt) {
      return miu0yz['_fileTypeArr']['indexOf'](p1wvt) != -0x1 ? !![] : ![];
    }, miu0yz['getFileInfo'] = function (mz1ty) {
      var kl6ox = mz1ty['split']('?')[0x0],
          jn4i = miu0yz['filesListObj'][kl6ox];if (jn4i == null) return null;else return jn4i;return null;
    }, miu0yz['onFileUpdate'] = function (o86lsd, _hv1wp) {
      var xqlk7o = o86lsd['split']('/'),
          _vrph = xqlk7o[xqlk7o['length'] - 0x1],
          nj0$45 = miu0yz['getFileInfo'](_hv1wp);if (nj0$45 == null) miu0yz['onSaveFile'](_hv1wp, _vrph);else {
        if (nj0$45['readyUrl'] != _hv1wp) miu0yz['remove'](_vrph, _hv1wp);
      }
    }, miu0yz['exits'] = function (_29s, pcwv1h) {
      var ny0zi = miu0yz['getFileNativePath'](_29s);miu0yz['fs']['getFileInfo']({ 'filePath': ny0zi, 'success': function (dr29) {
          pcwv1h != null && pcwv1h['runWith']([0x0, dr29]);
        }, 'fail': function (cy1m) {
          pcwv1h != null && pcwv1h['runWith']([0x1, cy1m]);
        } });
    }, miu0yz['read'] = function (s89o6, do68k, s982_, mcztuy) {
      do68k === void 0x0 && (do68k = 'ascill'), mcztuy === void 0x0 && (mcztuy = '');var ld86s;mcztuy != '' ? ld86s = miu0yz['getFileNativePath'](s89o6) : ld86s = s89o6, miu0yz['fs']['readFile']({ 'filePath': ld86s, 'encoding': do68k, 'success': function (r8ds29) {
          s982_ != null && s982_['runWith']([0x0, r8ds29]);
        }, 'fail': function (y0jiu) {
          if (y0jiu && mcztuy != '') miu0yz['down'](mcztuy, do68k, s982_, mcztuy);else s982_ != null && s982_['runWith']([0x1]);
        } });
    }, miu0yz['readNativeFile'] = function (l7qxko, z1yc) {
      miu0yz['fs']['readFile']({ 'filePath': l7qxko, 'encoding': '', 'success': function (wvhc) {
          z1yc != null && z1yc['runWith']([0x0]);
        }, 'fail': function (yizum0) {
          z1yc != null && z1yc['runWith']([0x1]);
        } });
    }, miu0yz['down'] = function ($a45n, pt1w, _2whpv, j40nu) {
      pt1w === void 0x0 && (pt1w = 'ascill'), j40nu === void 0x0 && (j40nu = '');var s_h9r = miu0yz['getFileNativePath'](j40nu),
          _2vprh = miu0yz['wxdown']({ 'url': $a45n, 'filePath': s_h9r, 'success': function (d8) {
          if (d8['statusCode'] === 0xc8) miu0yz['readFile'](d8['filePath'], pt1w, _2whpv, j40nu);
        }, 'fail': function (myutz) {
          _2whpv != null && _2whpv['runWith']([0x1, myutz]);
        } });_2vprh['onProgressUpdate'](function (iy0u) {
        _2whpv != null && _2whpv['runWith']([0x2, iy0u['progress']]);
      });
    }, miu0yz['readFile'] = function (g7klxq, dkl8o6, mtpcw1, kq3gx7) {
      dkl8o6 === void 0x0 && (dkl8o6 = 'ascill'), kq3gx7 === void 0x0 && (kq3gx7 = ''), miu0yz['fs']['readFile']({ 'filePath': g7klxq, 'encoding': dkl8o6, 'success': function (vhwp_) {
          if (g7klxq['indexOf']('http://') != -0x1 || g7klxq['indexOf']('https://') != -0x1) miu0yz['onFileUpdate'](g7klxq, kq3gx7);mtpcw1 != null && mtpcw1['runWith']([0x0, vhwp_]);
        }, 'fail': function (h2_w) {
          if (h2_w) mtpcw1 != null && mtpcw1['runWith']([0x1, h2_w]);
        } });
    }, miu0yz['downImg'] = function (uctmy, lo76kx, s69do8) {
      s69do8 === void 0x0 && (s69do8 = '');var sd698r = miu0yz['wxdown']({ 'url': uctmy, 'success': function (r2hp_v) {
          r2hp_v['statusCode'] === 0xc8 && miu0yz['copyFile'](r2hp_v['tempFilePath'], s69do8, lo76kx);
        }, 'fail': function (o6kx) {
          lo76kx != null && lo76kx['runWith']([0x1, o6kx]);
        } });
    }, miu0yz['copyFile'] = function (xg7qk3, hpc1wv, zmiuyt) {
      var iyutzm = xg7qk3['split']('/'),
          ok6d8 = iyutzm[iyutzm['length'] - 0x1],
          gx7 = hpc1wv['split']('?')[0x0],
          yim0 = miu0yz['getFileInfo'](hpc1wv),
          _phvr2 = miu0yz['getFileNativePath'](ok6d8);miu0yz['fs']['copyFile']({ 'srcPath': xg7qk3, 'destPath': _phvr2, 'success': function (myzctu) {
          if (!yim0) miu0yz['onSaveFile'](hpc1wv, ok6d8), zmiuyt != null && zmiuyt['runWith']([0x0]);else {
            if (yim0['readyUrl'] != hpc1wv) miu0yz['remove'](ok6d8, hpc1wv, zmiuyt);
          }
        }, 'fail': function (rd8s92) {
          zmiuyt != null && zmiuyt['runWith']([0x1, rd8s92]);
        } });
    }, miu0yz['getFileNativePath'] = function (yjn0) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yjn0;
    }, miu0yz['remove'] = function (w_2vph, x6okd, h2_wvp) {
      x6okd === void 0x0 && (x6okd = '');var _rphv2 = miu0yz['getFileInfo'](x6okd),
          kxqo7 = miu0yz['getFileNativePath'](_rphv2['md5']);hcp1w['loader']['clearRes'](_rphv2['readyUrl']), miu0yz['fs']['unlink']({ 'filePath': kxqo7, 'success': function (h1wpc) {
          if (x6okd != '') miu0yz['onSaveFile'](x6okd, w_2vph);h2_wvp != null && h2_wvp['runWith']([0x0]);
        }, 'fail': function (_hpvw) {} });
    }, miu0yz['onSaveFile'] = function (nyz0i, o7xklq) {
      var tymiuz = nyz0i['split']('?')[0x0];miu0yz['filesListObj'][tymiuz] = { 'md5': o7xklq, 'readyUrl': nyz0i }, miu0yz['fs']['writeFile']({ 'filePath': miu0yz['fileNativeDir'] + '/' + miu0yz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](miu0yz['filesListObj']), 'success': function (o6d8ls) {
          console['log']('写入测试测试成功：', o6d8ls);
        }, 'fail': function (v2_h) {
          console['log']('写入测试测试失败：', v2_h);
        } });
    }, miu0yz['existDir'] = function (dslo6, g7qk3x) {
      miu0yz['fs']['mkdir']({ 'dirPath': dslo6, 'success': function (tuzyi) {
          g7qk3x != null && g7qk3x['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function ($jn540) {
          if ($jn540['errMsg']['indexOf']('file already exists') != -0x1) miu0yz['readSync'](miu0yz['fileListName'], 'utf8', g7qk3x);else g7qk3x != null && g7qk3x['runWith']([0x1, $jn540]);
        } });
    }, miu0yz['readSync'] = function (yuzct, ztmw1c, whpvc1, wztc1) {
      ztmw1c === void 0x0 && (ztmw1c = 'ascill'), wztc1 === void 0x0 && (wztc1 = '');var lkx6o7 = miu0yz['getFileNativePath'](yuzct),
          mzucy;try {
        mzucy = miu0yz['fs']['readFileSync'](lkx6o7), whpvc1 != null && whpvc1['runWith']([0x0, { 'data': mzucy }]);
      } catch (g7qk3) {
        whpvc1 != null && whpvc1['runWith']([0x1]);
      }
    }, miu0yz['readCache'] = function () {}, miu0yz['writeCache'] = function (vhp2_w) {
      var h9r2_ = readyUrl['split']('?')[0x0];miu0yz['filesListObj'][h9r2_] = { 'md5': md5Name, 'readyUrl': readyUrl }, miu0yz['fs']['writeFile']({ 'filePath': miu0yz['fileNativeDir'] + '/' + miu0yz['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](miu0yz['filesListObj']), 'success': function (u0zyi) {}, 'fail': function (mtcyz1) {} });
    }, miu0yz['setNativeFileDir'] = function (jn50i) {
      miu0yz['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jn50i;
    }, miu0yz['filesListObj'] = {}, miu0yz['fileNativeDir'] = null, miu0yz['fileListName'] = 'layaairfiles.txt', miu0yz['ziyuFileData'] = {}, fja45$(miu0yz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), miu0yz;
  }(xl6kdo),
      lkdx = function (v_ph1) {
    function jf$45() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], jf$45['__super']['call'](this), this['_sound'] = jf$45['_createSound']();
    }yj0inu(jf$45, 'laya.wx.mini.MiniSound', v_ph1);var nzuiy = jf$45['prototype'];return nzuiy['load'] = function (qlgx7k) {
      var p2_hvr = this;qlgx7k = pcv1t['formatURL'](qlgx7k), this['url'] = qlgx7k;if (jf$45['_audioCache'][qlgx7k]) {
        this['event']('complete');return;
      }function f54e() {
        if (jf$45['_null'] != undefined) p2_hvr['_sound']['onCanplay'](jf$45['_null']), p2_hvr['_sound']['onError'](jf$45['_null']);else try {
          p2_hvr['_sound']['onCanplay'](null), p2_hvr['_sound']['onError'](null), jf$45['_null'] = null;
        } catch (gq7xk) {
          console['warn']('[wxmini] _clearSound:' + gq7xk), p2_hvr['_sound']['onCanplay'](tyzium), p2_hvr['_sound']['onError'](tyzium), jf$45['_null'] = tyzium;
        }
      }function yiumtz() {
        f54e(), nyiu0j['loaded'] = !![], nyiu0j['event']('complete'), jf$45['_audioCache'][nyiu0j['url']] = nyiu0j;
      }function zwtc1m(zymc) {
        console['error']('errCode=' + zymc['errCode'] + '  errMsg=' + zymc['errMsg']), f54e(), nyiu0j['event']('error');
      }function tyzium() {}this['_sound']['onCanplay'](yiumtz), this['_sound']['onError'](zwtc1m), this['_sound']['src'] = qlgx7k;var nyiu0j = this;
    }, nzuiy['play'] = function (vwhpc, _2vhpw) {
      vwhpc === void 0x0 && (vwhpc = 0x0), _2vhpw === void 0x0 && (_2vhpw = 0x0);var wvphc;if (this['url'] == vpcw1['_tMusic']) {
        if (!jf$45['_musicAudio']) jf$45['_musicAudio'] = jf$45['_createSound']();wvphc = jf$45['_musicAudio'];
      } else wvphc = jf$45['_createSound']();wvphc['src'] = this['url'];var tzmui = new drs9(wvphc);return tzmui['url'] = this['url'], tzmui['loops'] = _2vhpw, tzmui['startTime'] = vwhpc, tzmui['play'](), vpcw1['addChannel'](tzmui), tzmui;
    }, nzuiy['dispose'] = function () {
      var yznu0i = jf$45['_audioCache'][this['url']];yznu0i && (yznu0i['src'] = '', delete jf$45['_audioCache'][this['url']]);
    }, phwc(0x0, nzuiy, 'duration', function () {
      return this['_sound']['duration'];
    }), jf$45['_createSound'] = function () {
      return jf$45['_id']++, y1ct['window']['wx']['createInnerAudioContext']();
    }, jf$45['_musicAudio'] = null, jf$45['_id'] = 0x0, jf$45['_audioCache'] = {}, jf$45['_null'] = undefined, jf$45;
  }(xl6kdo),
      drs9 = function (fa$5j4) {
    function qg73kx(p2_) {
      this['_audio'] = null, this['_onEnd'] = null, qg73kx['__super']['call'](this), this['_audio'] = p2_, this['_onEnd'] = w_vp1['bind'](this['__onEnd'], this), p2_['onEnded'](this['_onEnd']);
    }yj0inu(qg73kx, 'laya.wx.mini.MiniSoundChannel', fa$5j4);var cvp = qg73kx['prototype'];return cvp['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (hcp1w['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, cvp['__onNull'] = function () {}, cvp['play'] = function () {
      this['isStopped'] = ![], vpcw1['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, cvp['stop'] = function () {
      this['isStopped'] = !![], vpcw1['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (qg73kx['_null'] != undefined) this['_audio']['onEnded'](qg73kx['_null']);else try {
        this['_audio']['onEnded'](null), qg73kx['_null'] = null;
      } catch (r_29) {
        console['warn']('[wxmini] stop:' + r_29), this['_audio']['onEnded'](w_vp1['bind'](this['__onNull'], this)), qg73kx['_null'] = w_vp1['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, cvp['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, cvp['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vpcw1['addChannel'](this), this['_audio']['play']();
    }, phwc(0x0, cvp, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), phwc(0x0, cvp, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), phwc(0x0, cvp, 'volume', function () {
      return 0x1;
    }, function (ju4in) {}), qg73kx['_null'] = undefined, qg73kx;
  }(jn045i);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $4e5fa in Laya) {
    var yz0ni = Laya[$4e5fa];yz0ni && yz0ni['__isclass'] && (exports[$4e5fa] = yz0ni);
  }
});