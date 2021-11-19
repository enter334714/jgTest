var p = wx.$h;
(function (window, document, _v2r) {
  var f1jcst = _v2r['un'],
      ebyo9 = _v2r['uns'],
      be$6yi = _v2r['static'],
      v_gn2 = _v2r['class'],
      ft34 = _v2r['getset'],
      h_80 = _v2r['__newvec'],
      iy9ob = laya['utils']['Browser'],
      keyi6 = laya['events']['Event'],
      j3stf = laya['events']['EventDispatcher'],
      xv2nr_ = laya['resource']['HTMLImage'],
      yk$ie6 = laya['utils']['Handler'],
      vg2xn = laya['display']['Input'],
      i6e8k = laya['net']['Loader'],
      k$068h = laya['maths']['Matrix'],
      k086h$ = laya['renders']['Render'],
      xr_vn = laya['utils']['RunDriver'],
      cd5ml = laya['media']['Sound'],
      oqyz = laya['media']['SoundChannel'],
      pnw4ra = laya['media']['SoundManager'],
      nxrv2_ = laya['display']['Stage'],
      v2_x0g = laya['net']['URL'],
      xg2_nv = laya['utils']['Utils'],
      $6ykie = function () {
    function s51jc() {}return v_gn2(s51jc, 'laya.wx.mini.MiniAdpter'), s51jc['getJson'] = function (a74w3p) {
      return JSON['parse'](a74w3p);
    }, s51jc['init'] = function (wvnx, ykie6) {
      wvnx === void 0x0 && (wvnx = ![]), ykie6 === void 0x0 && (ykie6 = ![]);if (s51jc['_inited']) return;s51jc['window'] = window;if (s51jc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;s51jc['_inited'] = !![], s51jc['isZiYu'] = ykie6, s51jc['isPosMsgYu'] = wvnx, s51jc['EnvConfig'] = {}, !s51jc['isZiYu'] && (eo$yi['setNativeFileDir']('/layaairGame'), eo$yi['existDir'](eo$yi['fileNativeDir'], yk$ie6['create'](s51jc, s51jc['onMkdirCallBack']))), s51jc['window']['focus'] = function () {}, _v2r['getUrlPath'] = function () {}, s51jc['window']['logtime'] = function (ngx_) {}, s51jc['window']['alertTimeLog'] = function (mcdl) {}, s51jc['window']['resetShareInfo'] = function () {}, s51jc['window']['CanvasRenderingContext2D'] = function () {}, s51jc['window']['CanvasRenderingContext2D']['prototype'] = s51jc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], s51jc['window']['document']['body']['appendChild'] = function () {}, s51jc['EnvConfig']['pixelRatioInt'] = 0x0, xr_vn['getPixelRatio'] = s51jc['pixelRatio'], s51jc['_preCreateElement'] = iy9ob['createElement'], iy9ob['createElement'] = s51jc['createElement'], xr_vn['createShaderCondition'] = s51jc['createShaderCondition'], xg2_nv['parseXMLFromString'] = s51jc['parseXMLFromString'], vg2xn['_createInputElement'] = yei6b$['_createInputElement'], s51jc['EnvConfig']['load'] = i6e8k['prototype']['load'], i6e8k['prototype']['load'] = $8ek6h['prototype']['load'], s51jc['isZiYu'] && wvnx && wx['onMessage'](function (t1j5s) {
        t1j5s['isLoad'] && (eo$yi['ziyuFileData'][t1j5s['url']] = t1j5s['data']);
      });
    }, s51jc['onMkdirCallBack'] = function (hg8v_, fjs31t) {
      if (!hg8v_) eo$yi['filesListObj'] = JSON['parse'](fjs31t['data']);
    }, s51jc['pixelRatio'] = function () {
      if (!s51jc['EnvConfig']['pixelRatioInt']) try {
        var y$6ieb = wx['getSystemInfoSync']();return s51jc['EnvConfig']['pixelRatioInt'] = y$6ieb['pixelRatio'], y$6ieb = y$6ieb, y$6ieb['pixelRatio'];
      } catch (e6$by) {}return s51jc['EnvConfig']['pixelRatioInt'];
    }, s51jc['createElement'] = function ($kh608) {
      if ($kh608 == 'canvas') {
        var s51jct;return s51jc['idx'] == 0x1 ? s51jc['isZiYu'] ? (s51jct = sharedCanvas, s51jct['style'] = {}) : s51jct = window['canvas'] : s51jct = window['wx']['createCanvas'](), s51jc['idx']++, s51jct;
      } else {
        if ($kh608 == 'textarea' || $kh608 == 'input') return s51jc['onCreateInput']($kh608);else {
          if ($kh608 == 'div') {
            var x2nwp = s51jc['_preCreateElement']($kh608);return x2nwp['contains'] = function ($k6) {
              return null;
            }, x2nwp['removeChild'] = function (jcsf) {}, x2nwp;
          } else return s51jc['_preCreateElement']($kh608);
        }
      }
    }, s51jc['onCreateInput'] = function (_nxrv) {
      var c1m5 = s51jc['_preCreateElement'](_nxrv);return c1m5['focus'] = yei6b$['wxinputFocus'], c1m5['blur'] = yei6b$['wxinputblur'], c1m5['style'] = {}, c1m5['value'] = 0x0, c1m5['parentElement'] = {}, c1m5['placeholder'] = {}, c1m5['type'] = {}, c1m5['setColor'] = function (bo$iey) {}, c1m5['setType'] = function (w47ar) {}, c1m5['setFontFace'] = function (f4t3j) {}, c1m5['addEventListener'] = function (tc1fs) {}, c1m5['contains'] = function (gh_08k) {
        return null;
      }, c1m5['removeChild'] = function (q9oyz) {}, c1m5;
    }, s51jc['createShaderCondition'] = function (prwn2a) {
      var a3f47p = this,
          r2wna = function () {
        var q9oyb = prwn2a;return a3f47p[prwn2a['replace']('this.', '')];
      };return r2wna;
    }, s51jc['EnvConfig'] = null, s51jc['window'] = null, s51jc['_preCreateElement'] = null, s51jc['_inited'] = ![], s51jc['wxRequest'] = null, s51jc['systemInfo'] = null, s51jc['version'] = '0.0.1', s51jc['isZiYu'] = ![], s51jc['isPosMsgYu'] = ![], s51jc['parseXMLFromString'] = function ($e68hk) {
      var n2wpx, ftj73;$e68hk = $e68hk['replace'](/>\s+</g, '><');try {
        n2wpx = new window['Parser']['DOMParser']()['parseFromString']($e68hk, 'text/xml');
      } catch (x0_gv) {
        throw '需要引入xml解析库文件';
      }return n2wpx;
    }, s51jc['idx'] = 0x1, s51jc;
  }(),
      hgv8_ = function () {
    function tjc5s() {}v_gn2(tjc5s, 'laya.wx.mini.MiniImage');var yib = tjc5s['prototype'];return yib['_loadImage'] = function (_g2xv0) {
      var jt7f = this,
          obzy9i = ![];_g2xv0['indexOf']('layaNativeDir/') == -0x1 && (obzy9i = !![], _g2xv0 = v2_x0g['formatURL'](_g2xv0));if (!eo$yi['getFileInfo'](_g2xv0)) {
        if (_g2xv0['indexOf']('http://') != -0x1 || _g2xv0['indexOf']('https://') != -0x1) eo$yi['downImg'](_g2xv0, new yk$ie6(tjc5s, tjc5s['onDownImgCallBack'], [_g2xv0, jt7f]), _g2xv0);else tjc5s['onCreateImage'](_g2xv0, jt7f, !![]);
      } else tjc5s['onCreateImage'](_g2xv0, jt7f, !obzy9i);
    }, tjc5s['onDownImgCallBack'] = function (w4p73, ekyi6, cjfs) {
      if (!cjfs) tjc5s['onCreateImage'](w4p73, ekyi6);else ekyi6['onError'](null);
    }, tjc5s['onCreateImage'] = function (t5jcs, w74pa, e8i$6) {
      e8i$6 === void 0x0 && (e8i$6 = ![]);var f3a4;if (!e8i$6) {
        var t5j1sc = eo$yi['getFileInfo'](t5jcs),
            ey9ibo = t5j1sc['md5'];f3a4 = eo$yi['getFileNativePath'](ey9ibo);
      } else f3a4 = t5jcs;if (w74pa['imgCache'] == null) w74pa['imgCache'] = {};var rnw4pa;function fj31t() {
        rnw4pa['onload'] = null, rnw4pa['onerror'] = null, delete w74pa['imgCache'][t5jcs];
      };var rpn2a = function () {
        fj31t(), w74pa['onLoaded'](rnw4pa);
      },
          $6k08h = function () {
        fj31t(), w74pa['event']('error', 'Load image failed');
      };w74pa['_type'] == 'nativeimage' ? (rnw4pa = new iy9ob['window']['Image'](), rnw4pa['crossOrigin'] = '', rnw4pa['onload'] = rpn2a, rnw4pa['onerror'] = $6k08h, rnw4pa['src'] = f3a4, w74pa['imgCache'][t5jcs] = rnw4pa) : new xv2nr_['create'](f3a4, { 'onload': rpn2a, 'onerror': $6k08h, 'onCreate': function (w7apr) {
          rnw4pa = w7apr, w74pa['imgCache'][t5jcs] = w7apr;
        } });
    }, tjc5s;
  }(),
      yei6b$ = function () {
    function wprn4a() {}return v_gn2(wprn4a, 'laya.wx.mini.MiniInput'), wprn4a['_createInputElement'] = function () {
      vg2xn['_initInput'](vg2xn['area'] = iy9ob['createElement']('textarea')), vg2xn['_initInput'](vg2xn['input'] = iy9ob['createElement']('input')), vg2xn['inputContainer'] = iy9ob['createElement']('div'), vg2xn['inputContainer']['style']['position'] = 'absolute', vg2xn['inputContainer']['style']['zIndex'] = 0x186a0, iy9ob['container']['appendChild'](vg2xn['inputContainer']), vg2xn['inputContainer']['setPos'] = function (nwap4r, h8gv_0) {
        vg2xn['inputContainer']['style']['left'] = nwap4r + 'px', vg2xn['inputContainer']['style']['top'] = h8gv_0 + 'px';
      }, _v2r['stage']['on']('resize', null, wprn4a['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_rv2nx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pnw4ra['_soundClass'] = b$iy6, pnw4ra['_musicClass'] = b$iy6;
    }, wprn4a['_onStageResize'] = function () {
      var scm15 = _v2r['stage']['_canvasTransform']['identity']();scm15['scale'](iy9ob['width'] / k086h$['canvas']['width'] / xr_vn['getPixelRatio'](), iy9ob['height'] / k086h$['canvas']['height'] / xr_vn['getPixelRatio']());
    }, wprn4a['wxinputFocus'] = function (a7p3) {
      var sj1c5 = vg2xn['inputElement']['target'];if (sj1c5 && !sj1c5['editable']) return;$6ykie['window']['wx']['offKeyboardConfirm'](), $6ykie['window']['wx']['offKeyboardInput'](), $6ykie['window']['wx']['showKeyboard']({ 'defaultValue': sj1c5['text'], 'maxLength': sj1c5['maxChars'], 'multiple': sj1c5['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (iyo$b) {}, 'fail': function (pn4w) {} }), $6ykie['window']['wx']['onKeyboardConfirm'](function (h$ke) {
        var ke68h = h$ke ? h$ke['value'] : '';sj1c5['text'] = ke68h, sj1c5['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), $6ykie['window']['wx']['onKeyboardInput'](function (sj1c) {
        var d1st = sj1c ? sj1c['value'] : '';if (!sj1c5['multiline']) {
          if (d1st['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sj1c5['text'] = d1st, sj1c5['event']('input');
      });
    }, wprn4a['inputEnter'] = function () {
      vg2xn['inputElement']['target']['focus'] = ![];
    }, wprn4a['wxinputblur'] = function () {
      wprn4a['hideKeyboard']();
    }, wprn4a['hideKeyboard'] = function () {
      $6ykie['window']['wx']['offKeyboardConfirm'](), $6ykie['window']['wx']['offKeyboardInput'](), $6ykie['window']['wx']['hideKeyboard']({ 'success': function (rvxnw) {
          console['log']('隐藏键盘');
        }, 'fail': function (qzo9yb) {
          console['log']('隐藏键盘出错:' + (qzo9yb ? qzo9yb['errMsg'] : ''));
        } });
    }, wprn4a;
  }(),
      $8ek6h = function () {
    function vn_() {}v_gn2(vn_, 'laya.wx.mini.MiniLoader');var $h6k = vn_['prototype'];return $h6k['load'] = function (hg8v0_, n_rx2, rnp, _nvx2g, fa734j) {
      rnp === void 0x0 && (rnp = !![]), fa734j === void 0x0 && (fa734j = ![]);var ki8$6e = this;ki8$6e['_url'] = hg8v0_;if (hg8v0_['indexOf']('data:image') === 0x0) ki8$6e['_type'] = n_rx2 = 'image';else ki8$6e['_type'] = n_rx2 || (n_rx2 = ki8$6e['getTypeFromUrl'](hg8v0_));ki8$6e['_cache'] = rnp, ki8$6e['_data'] = null;var nwr2p = 'ascii';if (hg8v0_['indexOf']('.fnt') != -0x1) nwr2p = 'utf8';else n_rx2 == 'arraybuffer' && (nwr2p = '');;var a3w4p7 = xg2_nv['getFileExtension'](hg8v0_);if (vn_['_fileTypeArr']['indexOf'](a3w4p7) != -0x1) $6ykie['EnvConfig']['load']['call'](this, hg8v0_, n_rx2, rnp, _nvx2g, fa734j);else {
        if (!eo$yi['getFileInfo'](hg8v0_)) {
          if (hg8v0_['indexOf']('layaNativeDir/') != -0x1) {
            if ($6ykie['isZiYu']) {
              var d1m = eo$yi['ziyuFileData'][hg8v0_];ki8$6e['onLoaded'](d1m);return;
            } else {
              cosnole['log']('read read'), eo$yi['read'](hg8v0_, nwr2p, new yk$ie6(vn_, vn_['onReadNativeCallBack'], [nwr2p, hg8v0_, n_rx2, rnp, _nvx2g, fa734j, ki8$6e]));return;
            }
          }if (v2_x0g['rootPath'] == '') var dstc15 = hg8v0_;else dstc15 = hg8v0_['split'](v2_x0g['rootPath'])[0x0];hg8v0_['indexOf']('http://') != -0x1 || hg8v0_['indexOf']('https://') != -0x1 ? $6ykie['EnvConfig']['load']['call'](ki8$6e, hg8v0_, n_rx2, rnp, _nvx2g, fa734j) : eo$yi['readFile'](dstc15, nwr2p, new yk$ie6(vn_, vn_['onReadNativeCallBack'], [nwr2p, hg8v0_, n_rx2, rnp, _nvx2g, fa734j, ki8$6e]), hg8v0_);
        } else $6ykie['EnvConfig']['load']['call'](this, hg8v0_, n_rx2, rnp, _nvx2g, fa734j);
      }
    }, $h6k['resMgrLoad'] = function (i6eky$, j43f7a, ibye6, k8h$6e, y9qzbo, b9izo, iy6e) {
      ibye6 === void 0x0 && (ibye6 = 0x0), k8h$6e === void 0x0 && (k8h$6e = ![]), y9qzbo === void 0x0 && (y9qzbo = ![]), b9izo === void 0x0 && (b9izo = 0x0), iy6e === void 0x0 && (iy6e = 0x3), i6eky$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i6eky$), $6ykie['EnvConfig']['resMgrLoad'](i6eky$, (pr2aw, $08h6, oeyib9) => {
        vn_['prototype']['resMgrLoadCallBack'](pr2aw, $08h6, oeyib9, j43f7a);
      }, ibye6, k8h$6e, y9qzbo, b9izo, iy6e);
    }, $h6k['resMgrLoadCallBack'] = function (rw2pnx, oqby9, f73a4j, kh_0g8) {
      console['log']('buff:::', rw2pnx, f73a4j, eo$yi['fileNativeDir'] + '///' + eo$yi['fileListName']), kh_0g8(rw2pnx, oqby9, f73a4j);
    }, $h6k['clearRes'] = function (qbzo9, m5cs1) {
      m5cs1 === void 0x0 && (m5cs1 = ![]);var a4pr = this;a4pr['clearRes'](qbzo9, m5cs1);var j37a4 = eo$yi['getFileInfo'](qbzo9);if (j37a4 && (qbzo9['indexOf']('http://') != -0x1 || qbzo9['indexOf']('https://') != -0x1)) {
        var c15tsd = j37a4['md5'],
            k$ie6 = eo$yi['getFileNativePath'](c15tsd);eo$yi['remove'](k$ie6);
      }
    }, vn_['onReadNativeCallBack'] = function (khg_80, f4j3t7, rpw2n, boy9zq, rna4, t1dsc5, x02_, v_r, byo9ei) {
      boy9zq === void 0x0 && (boy9zq = !![]), t1dsc5 === void 0x0 && (t1dsc5 = ![]), v_r === void 0x0 && (v_r = 0x0);if (!v_r) {
        var ey9oib;if (rpw2n == 'json' || rpw2n == 'atlas') ey9oib = $6ykie['getJson'](byo9ei['data']);else rpw2n == 'xml' ? ey9oib = xg2_nv['parseXMLFromString'](byo9ei['data']) : ey9oib = byo9ei['data'];x02_['onLoaded'](ey9oib), !$6ykie['isZiYu'] && $6ykie['isPosMsgYu'] && rpw2n != 'arraybuffer' && wx['postMessage']({ 'url': f4j3t7, 'data': ey9oib, 'isLoad': !![] });
      } else v_r == 0x1 && $6ykie['EnvConfig']['load']['call'](x02_, f4j3t7, rpw2n, boy9zq, rna4, t1dsc5);
    }, be$6yi(vn_, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vn_;
  }(),
      eo$yi = function (ye$bio) {
    function by6ie() {
      by6ie['__super']['call'](this);;
    }return v_gn2(by6ie, 'laya.wx.mini.MiniFileMgr', ye$bio), by6ie['isLoadFile'] = function (oq9zyb) {
      return by6ie['_fileTypeArr']['indexOf'](oq9zyb) != -0x1 ? !![] : ![];
    }, by6ie['getFileInfo'] = function (xhgv0_) {
      var awrpn = xhgv0_['split']('?')[0x0],
          sc15dt = by6ie['filesListObj'][awrpn];if (sc15dt == null) return null;else return sc15dt;return null;
    }, by6ie['onFileUpdate'] = function (gnx_v, a4nw) {
      var jsct1 = gnx_v['split']('/'),
          l5ds = jsct1[jsct1['length'] - 0x1],
          oi9be = by6ie['getFileInfo'](a4nw);if (oi9be == null) by6ie['onSaveFile'](a4nw, l5ds);else {
        if (oi9be['readyUrl'] != a4nw) by6ie['remove'](l5ds, a4nw);
      }
    }, by6ie['exits'] = function (v0g_x, xrv2n) {
      var i6bey = by6ie['getFileNativePath'](v0g_x);by6ie['fs']['getFileInfo']({ 'filePath': i6bey, 'success': function (io$bye) {
          xrv2n != null && xrv2n['runWith']([0x0, io$bye]);
        }, 'fail': function (oybe) {
          xrv2n != null && xrv2n['runWith']([0x1, oybe]);
        } });
    }, by6ie['read'] = function (_0xvhg, h8g_0, j7tf34, oqby9z) {
      h8g_0 === void 0x0 && (h8g_0 = 'ascill'), oqby9z === void 0x0 && (oqby9z = '');var e8kh$;oqby9z != '' ? e8kh$ = by6ie['getFileNativePath'](_0xvhg) : e8kh$ = _0xvhg, by6ie['fs']['readFile']({ 'filePath': e8kh$, 'encoding': h8g_0, 'success': function (t5sd1) {
          j7tf34 != null && j7tf34['runWith']([0x0, t5sd1]);
        }, 'fail': function (xr2nvw) {
          if (xr2nvw && oqby9z != '') by6ie['down'](oqby9z, h8g_0, j7tf34, oqby9z);else j7tf34 != null && j7tf34['runWith']([0x1]);
        } });
    }, by6ie['readNativeFile'] = function (t3fj, yoi9e) {
      by6ie['fs']['readFile']({ 'filePath': t3fj, 'encoding': '', 'success': function (ibe6$y) {
          yoi9e != null && yoi9e['runWith']([0x0]);
        }, 'fail': function (jf3t71) {
          yoi9e != null && yoi9e['runWith']([0x1]);
        } });
    }, by6ie['down'] = function (eb9, k8$e, eyi$o, p7fa34) {
      k8$e === void 0x0 && (k8$e = 'ascill'), p7fa34 === void 0x0 && (p7fa34 = '');var p4ra7w = by6ie['getFileNativePath'](p7fa34),
          $oebi = by6ie['wxdown']({ 'url': eb9, 'filePath': p4ra7w, 'success': function (eoyb) {
          if (eoyb['statusCode'] === 0xc8) by6ie['readFile'](eoyb['filePath'], k8$e, eyi$o, p7fa34);
        }, 'fail': function (nxr_) {
          eyi$o != null && eyi$o['runWith']([0x1, nxr_]);
        } });$oebi['onProgressUpdate'](function (cd5st1) {
        eyi$o != null && eyi$o['runWith']([0x2, cd5st1['progress']]);
      });
    }, by6ie['readFile'] = function (jft13, h8_gk, ek$8i, k6he$) {
      h8_gk === void 0x0 && (h8_gk = 'ascill'), k6he$ === void 0x0 && (k6he$ = ''), by6ie['fs']['readFile']({ 'filePath': jft13, 'encoding': h8_gk, 'success': function (gv_xn2) {
          if (jft13['indexOf']('http://') != -0x1 || jft13['indexOf']('https://') != -0x1) by6ie['onFileUpdate'](jft13, k6he$);ek$8i != null && ek$8i['runWith']([0x0, gv_xn2]);
        }, 'fail': function (ie$ky) {
          if (ie$ky) ek$8i != null && ek$8i['runWith']([0x1, ie$ky]);
        } });
    }, by6ie['downImg'] = function (x2npwr, h860kg, hk0g_8) {
      hk0g_8 === void 0x0 && (hk0g_8 = '');var h_80k = by6ie['wxdown']({ 'url': x2npwr, 'success': function (fp734) {
          fp734['statusCode'] === 0xc8 && by6ie['copyFile'](fp734['tempFilePath'], hk0g_8, h860kg);
        }, 'fail': function (k8g6h) {
          h860kg != null && h860kg['runWith']([0x1, k8g6h]);
        } });
    }, by6ie['copyFile'] = function (rn_v2x, e6iyk$, boei9) {
      var kyei6$ = rn_v2x['split']('/'),
          ft31j = kyei6$[kyei6$['length'] - 0x1],
          n2pwr = e6iyk$['split']('?')[0x0],
          lsd5cm = by6ie['getFileInfo'](e6iyk$),
          g0xv2_ = by6ie['getFileNativePath'](ft31j);by6ie['fs']['copyFile']({ 'srcPath': rn_v2x, 'destPath': g0xv2_, 'success': function (g860k) {
          if (!lsd5cm) by6ie['onSaveFile'](e6iyk$, ft31j), boei9 != null && boei9['runWith']([0x0]);else {
            if (lsd5cm['readyUrl'] != e6iyk$) by6ie['remove'](ft31j, e6iyk$, boei9);
          }
        }, 'fail': function (n4rapw) {
          boei9 != null && boei9['runWith']([0x1, n4rapw]);
        } });
    }, by6ie['getFileNativePath'] = function (xng_v) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xng_v;
    }, by6ie['remove'] = function (h60k, vr2xwn, t17j3) {
      vr2xwn === void 0x0 && (vr2xwn = '');var x_ng = by6ie['getFileInfo'](vr2xwn),
          sct1j5 = by6ie['getFileNativePath'](x_ng['md5']);_v2r['loader']['clearRes'](x_ng['readyUrl']), by6ie['fs']['unlink']({ 'filePath': sct1j5, 'success': function (i9yzob) {
          if (vr2xwn != '') by6ie['onSaveFile'](vr2xwn, h60k);t17j3 != null && t17j3['runWith']([0x0]);
        }, 'fail': function (rvn_) {} });
    }, by6ie['onSaveFile'] = function (v2_nr, ds5lcm) {
      var v_r2x = v2_nr['split']('?')[0x0];by6ie['filesListObj'][v_r2x] = { 'md5': ds5lcm, 'readyUrl': v2_nr }, by6ie['fs']['writeFile']({ 'filePath': by6ie['fileNativeDir'] + '/' + by6ie['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](by6ie['filesListObj']), 'success': function (bzyo9q) {
          console['log']('写入测试测试成功：', bzyo9q);
        }, 'fail': function (h$k) {
          console['log']('写入测试测试失败：', h$k);
        } });
    }, by6ie['existDir'] = function (w74apr, n2pwa) {
      by6ie['fs']['mkdir']({ 'dirPath': w74apr, 'success': function (p437w) {
          n2pwa != null && n2pwa['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (n_v2xg) {
          if (n_v2xg['errMsg']['indexOf']('file already exists') != -0x1) by6ie['readSync'](by6ie['fileListName'], 'utf8', n2pwa);else n2pwa != null && n2pwa['runWith']([0x1, n_v2xg]);
        } });
    }, by6ie['readSync'] = function (xhgv0, j7f3t, np2ra, yiboz) {
      j7f3t === void 0x0 && (j7f3t = 'ascill'), yiboz === void 0x0 && (yiboz = '');var boqyz = by6ie['getFileNativePath'](xhgv0),
          a2pnr;try {
        a2pnr = by6ie['fs']['readFileSync'](boqyz), np2ra != null && np2ra['runWith']([0x0, { 'data': a2pnr }]);
      } catch (s51cdm) {
        np2ra != null && np2ra['runWith']([0x1]);
      }
    }, by6ie['readCache'] = function () {}, by6ie['writeCache'] = function (s5mcl) {
      var h_k8 = readyUrl['split']('?')[0x0];by6ie['filesListObj'][h_k8] = { 'md5': md5Name, 'readyUrl': readyUrl }, by6ie['fs']['writeFile']({ 'filePath': by6ie['fileNativeDir'] + '/' + by6ie['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](by6ie['filesListObj']), 'success': function (j1cs) {}, 'fail': function (p43af) {} });
    }, by6ie['setNativeFileDir'] = function (mslc5) {
      by6ie['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mslc5;
    }, by6ie['filesListObj'] = {}, by6ie['fileNativeDir'] = null, by6ie['fileListName'] = 'layaairfiles.txt', by6ie['ziyuFileData'] = {}, be$6yi(by6ie, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), by6ie;
  }(j3stf),
      b$iy6 = function (p2xwrn) {
    function $6ki8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $6ki8['__super']['call'](this), this['_sound'] = $6ki8['_createSound']();
    }v_gn2($6ki8, 'laya.wx.mini.MiniSound', p2xwrn);var ap74wr = $6ki8['prototype'];return ap74wr['load'] = function (dc5s1) {
      var _x20g = this;dc5s1 = v2_x0g['formatURL'](dc5s1), this['url'] = dc5s1;if ($6ki8['_audioCache'][dc5s1]) {
        this['event']('complete');return;
      }function eyi() {
        if ($6ki8['_null'] != undefined) _x20g['_sound']['onCanplay']($6ki8['_null']), _x20g['_sound']['onError']($6ki8['_null']);else try {
          _x20g['_sound']['onCanplay'](null), _x20g['_sound']['onError'](null), $6ki8['_null'] = null;
        } catch (ek6i$8) {
          console['warn']('[wxmini] _clearSound:' + ek6i$8), _x20g['_sound']['onCanplay'](j1t3s), _x20g['_sound']['onError'](j1t3s), $6ki8['_null'] = j1t3s;
        }
      }function qb9z() {
        eyi(), wvx2n['loaded'] = !![], wvx2n['event']('complete'), $6ki8['_audioCache'][wvx2n['url']] = wvx2n;
      }function h0xv_g(j74tf3) {
        console['error']('errCode=' + j74tf3['errCode'] + '  errMsg=' + j74tf3['errMsg']), eyi(), wvx2n['event']('error');
      }function j1t3s() {}this['_sound']['onCanplay'](qb9z), this['_sound']['onError'](h0xv_g), this['_sound']['src'] = dc5s1;var wvx2n = this;
    }, ap74wr['play'] = function (b6i$e, k80hg) {
      b6i$e === void 0x0 && (b6i$e = 0x0), k80hg === void 0x0 && (k80hg = 0x0);var r7ap4w;if (this['url'] == pnw4ra['_tMusic']) {
        if (!$6ki8['_musicAudio']) $6ki8['_musicAudio'] = $6ki8['_createSound']();r7ap4w = $6ki8['_musicAudio'];
      } else r7ap4w = $6ki8['_createSound']();r7ap4w['src'] = this['url'];var h0g_8v = new _08gv(r7ap4w);return h0g_8v['url'] = this['url'], h0g_8v['loops'] = k80hg, h0g_8v['startTime'] = b6i$e, h0g_8v['play'](), pnw4ra['addChannel'](h0g_8v), h0g_8v;
    }, ap74wr['dispose'] = function () {
      var oibey = $6ki8['_audioCache'][this['url']];oibey && (oibey['src'] = '', delete $6ki8['_audioCache'][this['url']]);
    }, ft34(0x0, ap74wr, 'duration', function () {
      return this['_sound']['duration'];
    }), $6ki8['_createSound'] = function () {
      return $6ki8['_id']++, $6ykie['window']['wx']['createInnerAudioContext']();
    }, $6ki8['_musicAudio'] = null, $6ki8['_id'] = 0x0, $6ki8['_audioCache'] = {}, $6ki8['_null'] = undefined, $6ki8;
  }(j3stf),
      _08gv = function (ik6$) {
    function r4wpa(n2prwa) {
      this['_audio'] = null, this['_onEnd'] = null, r4wpa['__super']['call'](this), this['_audio'] = n2prwa, this['_onEnd'] = xg2_nv['bind'](this['__onEnd'], this), n2prwa['onEnded'](this['_onEnd']);
    }v_gn2(r4wpa, 'laya.wx.mini.MiniSoundChannel', ik6$);var v2xnr = r4wpa['prototype'];return v2xnr['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (_v2r['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, v2xnr['__onNull'] = function () {}, v2xnr['play'] = function () {
      this['isStopped'] = ![], pnw4ra['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, v2xnr['stop'] = function () {
      this['isStopped'] = !![], pnw4ra['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (r4wpa['_null'] != undefined) this['_audio']['onEnded'](r4wpa['_null']);else try {
        this['_audio']['onEnded'](null), r4wpa['_null'] = null;
      } catch (x2_vnr) {
        console['warn']('[wxmini] stop:' + x2_vnr), this['_audio']['onEnded'](xg2_nv['bind'](this['__onNull'], this)), r4wpa['_null'] = xg2_nv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, v2xnr['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, v2xnr['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pnw4ra['addChannel'](this), this['_audio']['play']();
    }, ft34(0x0, v2xnr, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ft34(0x0, v2xnr, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ft34(0x0, v2xnr, 'volume', function () {
      return 0x1;
    }, function (anrpw2) {}), r4wpa['_null'] = undefined, r4wpa;
  }(oqyz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $h068k in Laya) {
    var cds1t = Laya[$h068k];cds1t && cds1t['__isclass'] && (exports[$h068k] = cds1t);
  }
});