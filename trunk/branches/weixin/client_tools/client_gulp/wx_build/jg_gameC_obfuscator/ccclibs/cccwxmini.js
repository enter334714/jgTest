var p = wx.$h;
(function (window, document, j1ft) {
  var j51s = j1ft['un'],
      sdc5t1 = j1ft['uns'],
      o9eiyb = j1ft['static'],
      n_vx = j1ft['class'],
      cd15sm = j1ft['getset'],
      i$y6ke = j1ft['__newvec'],
      nwp4r = laya['utils']['Browser'],
      fp4a73 = laya['events']['Event'],
      xwvr = laya['events']['EventDispatcher'],
      $iek6y = laya['resource']['HTMLImage'],
      qz9bo = laya['utils']['Handler'],
      oy$ibe = laya['display']['Input'],
      anpw2 = laya['net']['Loader'],
      wrxnv = laya['maths']['Matrix'],
      ek6y$i = laya['renders']['Render'],
      yki6 = laya['utils']['RunDriver'],
      _2rvn = laya['media']['Sound'],
      $boe = laya['media']['SoundChannel'],
      s51tj = laya['media']['SoundManager'],
      yzqob9 = laya['display']['Stage'],
      xvgh_0 = laya['net']['URL'],
      t3fjs = laya['utils']['Utils'],
      a4jf37 = function () {
    function vnwrx2() {}return n_vx(vnwrx2, 'laya.wx.mini.MiniAdpter'), vnwrx2['getJson'] = function (t3s1f) {
      return JSON['parse'](t3s1f);
    }, vnwrx2['init'] = function (x_v2n, w2nrv) {
      x_v2n === void 0x0 && (x_v2n = ![]), w2nrv === void 0x0 && (w2nrv = ![]);if (vnwrx2['_inited']) return;vnwrx2['window'] = window;if (vnwrx2['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;vnwrx2['_inited'] = !![], vnwrx2['isZiYu'] = w2nrv, vnwrx2['isPosMsgYu'] = x_v2n, vnwrx2['EnvConfig'] = {}, !vnwrx2['isZiYu'] && (b9yoz['setNativeFileDir']('/layaairGame'), b9yoz['existDir'](b9yoz['fileNativeDir'], qz9bo['create'](vnwrx2, vnwrx2['onMkdirCallBack']))), vnwrx2['window']['focus'] = function () {}, j1ft['getUrlPath'] = function () {}, vnwrx2['window']['logtime'] = function ($yeki) {}, vnwrx2['window']['alertTimeLog'] = function (g2n_vx) {}, vnwrx2['window']['resetShareInfo'] = function () {}, vnwrx2['window']['CanvasRenderingContext2D'] = function () {}, vnwrx2['window']['CanvasRenderingContext2D']['prototype'] = vnwrx2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vnwrx2['window']['document']['body']['appendChild'] = function () {}, vnwrx2['EnvConfig']['pixelRatioInt'] = 0x0, yki6['getPixelRatio'] = vnwrx2['pixelRatio'], vnwrx2['_preCreateElement'] = nwp4r['createElement'], nwp4r['createElement'] = vnwrx2['createElement'], yki6['createShaderCondition'] = vnwrx2['createShaderCondition'], t3fjs['parseXMLFromString'] = vnwrx2['parseXMLFromString'], oy$ibe['_createInputElement'] = xn2r['_createInputElement'], vnwrx2['EnvConfig']['load'] = anpw2['prototype']['load'], anpw2['prototype']['load'] = wap2n['prototype']['load'], vnwrx2['isZiYu'] && x_v2n && wx['onMessage'](function (jf1c) {
        jf1c['isLoad'] && (b9yoz['ziyuFileData'][jf1c['url']] = jf1c['data']);
      });
    }, vnwrx2['onMkdirCallBack'] = function (vg_x02, gn) {
      if (!vg_x02) b9yoz['filesListObj'] = JSON['parse'](gn['data']);
    }, vnwrx2['pixelRatio'] = function () {
      if (!vnwrx2['EnvConfig']['pixelRatioInt']) try {
        var io9zy = wx['getSystemInfoSync']();return vnwrx2['EnvConfig']['pixelRatioInt'] = io9zy['pixelRatio'], io9zy = io9zy, io9zy['pixelRatio'];
      } catch (rwnap2) {}return vnwrx2['EnvConfig']['pixelRatioInt'];
    }, vnwrx2['createElement'] = function (prn4wa) {
      if (prn4wa == 'canvas') {
        var t1j5c;return vnwrx2['idx'] == 0x1 ? vnwrx2['isZiYu'] ? (t1j5c = sharedCanvas, t1j5c['style'] = {}) : t1j5c = window['canvas'] : t1j5c = window['wx']['createCanvas'](), vnwrx2['idx']++, t1j5c;
      } else {
        if (prn4wa == 'textarea' || prn4wa == 'input') return vnwrx2['onCreateInput'](prn4wa);else {
          if (prn4wa == 'div') {
            var ft743j = vnwrx2['_preCreateElement'](prn4wa);return ft743j['contains'] = function (e$by6i) {
              return null;
            }, ft743j['removeChild'] = function (vx0_g) {}, ft743j;
          } else return vnwrx2['_preCreateElement'](prn4wa);
        }
      }
    }, vnwrx2['onCreateInput'] = function (j4af73) {
      var an2pw = vnwrx2['_preCreateElement'](j4af73);return an2pw['focus'] = xn2r['wxinputFocus'], an2pw['blur'] = xn2r['wxinputblur'], an2pw['style'] = {}, an2pw['value'] = 0x0, an2pw['parentElement'] = {}, an2pw['placeholder'] = {}, an2pw['type'] = {}, an2pw['setColor'] = function (n2arpw) {}, an2pw['setType'] = function ($yoi) {}, an2pw['setFontFace'] = function (ybozi) {}, an2pw['addEventListener'] = function (bi9zyo) {}, an2pw['contains'] = function (s51ct) {
        return null;
      }, an2pw['removeChild'] = function (f34jt7) {}, an2pw;
    }, vnwrx2['createShaderCondition'] = function (kie8$6) {
      var gn2x = this,
          oyqzb9 = function () {
        var x2n_v = kie8$6;return gn2x[kie8$6['replace']('this.', '')];
      };return oyqzb9;
    }, vnwrx2['EnvConfig'] = null, vnwrx2['window'] = null, vnwrx2['_preCreateElement'] = null, vnwrx2['_inited'] = ![], vnwrx2['wxRequest'] = null, vnwrx2['systemInfo'] = null, vnwrx2['version'] = '0.0.1', vnwrx2['isZiYu'] = ![], vnwrx2['isPosMsgYu'] = ![], vnwrx2['parseXMLFromString'] = function (naw4p) {
      var n4pr, dcmsl5;naw4p = naw4p['replace'](/>\s+</g, '><');try {
        n4pr = new window['Parser']['DOMParser']()['parseFromString'](naw4p, 'text/xml');
      } catch (h0gxv_) {
        throw '需要引入xml解析库文件';
      }return n4pr;
    }, vnwrx2['idx'] = 0x1, vnwrx2;
  }(),
      v_2ngx = function () {
    function t15sj() {}n_vx(t15sj, 'laya.wx.mini.MiniImage');var $biyoe = t15sj['prototype'];return $biyoe['_loadImage'] = function (rx2vwn) {
      var nxrwp2 = this,
          bie6y$ = ![];rx2vwn['indexOf']('layaNativeDir/') == -0x1 && (bie6y$ = !![], rx2vwn = xvgh_0['formatURL'](rx2vwn));if (!b9yoz['getFileInfo'](rx2vwn)) {
        if (rx2vwn['indexOf']('http://') != -0x1 || rx2vwn['indexOf']('https://') != -0x1) b9yoz['downImg'](rx2vwn, new qz9bo(t15sj, t15sj['onDownImgCallBack'], [rx2vwn, nxrwp2]), rx2vwn);else t15sj['onCreateImage'](rx2vwn, nxrwp2, !![]);
      } else t15sj['onCreateImage'](rx2vwn, nxrwp2, !bie6y$);
    }, t15sj['onDownImgCallBack'] = function (j734ft, ioy$, ieo9yb) {
      if (!ieo9yb) t15sj['onCreateImage'](j734ft, ioy$);else ioy$['onError'](null);
    }, t15sj['onCreateImage'] = function (sfj3, jctf, _80hg) {
      _80hg === void 0x0 && (_80hg = ![]);var $8k06;if (!_80hg) {
        var xrn_2v = b9yoz['getFileInfo'](sfj3),
            wp7a43 = xrn_2v['md5'];$8k06 = b9yoz['getFileNativePath'](wp7a43);
      } else $8k06 = sfj3;if (jctf['imgCache'] == null) jctf['imgCache'] = {};var anrpw;function prw2an() {
        anrpw['onload'] = null, anrpw['onerror'] = null, delete jctf['imgCache'][sfj3];
      };var eky6$ = function () {
        prw2an(), jctf['onLoaded'](anrpw);
      },
          oibe9 = function () {
        prw2an(), jctf['event']('error', 'Load image failed');
      };jctf['_type'] == 'nativeimage' ? (anrpw = new nwp4r['window']['Image'](), anrpw['crossOrigin'] = '', anrpw['onload'] = eky6$, anrpw['onerror'] = oibe9, anrpw['src'] = $8k06, jctf['imgCache'][sfj3] = anrpw) : new $iek6y['create']($8k06, { 'onload': eky6$, 'onerror': oibe9, 'onCreate': function (_x2vrn) {
          anrpw = _x2vrn, jctf['imgCache'][sfj3] = _x2vrn;
        } });
    }, t15sj;
  }(),
      xn2r = function () {
    function b$6eyi() {}return n_vx(b$6eyi, 'laya.wx.mini.MiniInput'), b$6eyi['_createInputElement'] = function () {
      oy$ibe['_initInput'](oy$ibe['area'] = nwp4r['createElement']('textarea')), oy$ibe['_initInput'](oy$ibe['input'] = nwp4r['createElement']('input')), oy$ibe['inputContainer'] = nwp4r['createElement']('div'), oy$ibe['inputContainer']['style']['position'] = 'absolute', oy$ibe['inputContainer']['style']['zIndex'] = 0x186a0, nwp4r['container']['appendChild'](oy$ibe['inputContainer']), oy$ibe['inputContainer']['setPos'] = function (yobei, $yib6) {
        oy$ibe['inputContainer']['style']['left'] = yobei + 'px', oy$ibe['inputContainer']['style']['top'] = $yib6 + 'px';
      }, j1ft['stage']['on']('resize', null, b$6eyi['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s3fj1t) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), s51tj['_soundClass'] = $kh8e, s51tj['_musicClass'] = $kh8e;
    }, b$6eyi['_onStageResize'] = function () {
      var rw4ap7 = j1ft['stage']['_canvasTransform']['identity']();rw4ap7['scale'](nwp4r['width'] / ek6y$i['canvas']['width'] / yki6['getPixelRatio'](), nwp4r['height'] / ek6y$i['canvas']['height'] / yki6['getPixelRatio']());
    }, b$6eyi['wxinputFocus'] = function (t5sc1d) {
      var $eyi6k = oy$ibe['inputElement']['target'];if ($eyi6k && !$eyi6k['editable']) return;a4jf37['window']['wx']['offKeyboardConfirm'](), a4jf37['window']['wx']['offKeyboardInput'](), a4jf37['window']['wx']['showKeyboard']({ 'defaultValue': $eyi6k['text'], 'maxLength': $eyi6k['maxChars'], 'multiple': $eyi6k['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (tc1fj) {}, 'fail': function (gx0h_v) {} }), a4jf37['window']['wx']['onKeyboardConfirm'](function (h860gk) {
        var hx_0vg = h860gk ? h860gk['value'] : '';$eyi6k['text'] = hx_0vg, $eyi6k['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), a4jf37['window']['wx']['onKeyboardInput'](function (cd15st) {
        var $8h6e = cd15st ? cd15st['value'] : '';if (!$eyi6k['multiline']) {
          if ($8h6e['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }$eyi6k['text'] = $8h6e, $eyi6k['event']('input');
      });
    }, b$6eyi['inputEnter'] = function () {
      oy$ibe['inputElement']['target']['focus'] = ![];
    }, b$6eyi['wxinputblur'] = function () {
      b$6eyi['hideKeyboard']();
    }, b$6eyi['hideKeyboard'] = function () {
      a4jf37['window']['wx']['offKeyboardConfirm'](), a4jf37['window']['wx']['offKeyboardInput'](), a4jf37['window']['wx']['hideKeyboard']({ 'success': function (e8$k6i) {
          console['log']('隐藏键盘');
        }, 'fail': function (g68h0k) {
          console['log']('隐藏键盘出错:' + (g68h0k ? g68h0k['errMsg'] : ''));
        } });
    }, b$6eyi;
  }(),
      wap2n = function () {
    function $ye6k() {}n_vx($ye6k, 'laya.wx.mini.MiniLoader');var v_g2nx = $ye6k['prototype'];return v_g2nx['load'] = function (h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r) {
      a3f4j7 === void 0x0 && (a3f4j7 = !![]), xp2r === void 0x0 && (xp2r = ![]);var npra = this;npra['_url'] = h0_g8k;if (h0_g8k['indexOf']('data:image') === 0x0) npra['_type'] = nrwa2p = 'image';else npra['_type'] = nrwa2p || (nrwa2p = npra['getTypeFromUrl'](h0_g8k));npra['_cache'] = a3f4j7, npra['_data'] = null;var awpr4n = 'ascii';if (h0_g8k['indexOf']('.fnt') != -0x1) awpr4n = 'utf8';else nrwa2p == 'arraybuffer' && (awpr4n = '');;var smdc1 = t3fjs['getFileExtension'](h0_g8k);if ($ye6k['_fileTypeArr']['indexOf'](smdc1) != -0x1) a4jf37['EnvConfig']['load']['call'](this, h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r);else {
        if (!b9yoz['getFileInfo'](h0_g8k)) {
          if (h0_g8k['indexOf']('layaNativeDir/') != -0x1) {
            if (a4jf37['isZiYu']) {
              var w2rna = b9yoz['ziyuFileData'][h0_g8k];npra['onLoaded'](w2rna);return;
            } else {
              cosnole['log']('read read'), b9yoz['read'](h0_g8k, awpr4n, new qz9bo($ye6k, $ye6k['onReadNativeCallBack'], [awpr4n, h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r, npra]));return;
            }
          }if (xvgh_0['rootPath'] == '') var fjst1c = h0_g8k;else fjst1c = h0_g8k['split'](xvgh_0['rootPath'])[0x0];h0_g8k['indexOf']('http://') != -0x1 || h0_g8k['indexOf']('https://') != -0x1 ? a4jf37['EnvConfig']['load']['call'](npra, h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r) : b9yoz['readFile'](fjst1c, awpr4n, new qz9bo($ye6k, $ye6k['onReadNativeCallBack'], [awpr4n, h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r, npra]), h0_g8k);
        } else a4jf37['EnvConfig']['load']['call'](this, h0_g8k, nrwa2p, a3f4j7, p74rwa, xp2r);
      }
    }, v_g2nx['resMgrLoad'] = function (ke8$h6, g08k_h, wrnpa, w2rapn, iy$boe, yzqb9, wrx2pn) {
      wrnpa === void 0x0 && (wrnpa = 0x0), w2rapn === void 0x0 && (w2rapn = ![]), iy$boe === void 0x0 && (iy$boe = ![]), yzqb9 === void 0x0 && (yzqb9 = 0x0), wrx2pn === void 0x0 && (wrx2pn = 0x3), ke8$h6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ke8$h6), a4jf37['EnvConfig']['resMgrLoad'](ke8$h6, (f1sjc, n2_vr, cfjts) => {
        $ye6k['prototype']['resMgrLoadCallBack'](f1sjc, n2_vr, cfjts, g08k_h);
      }, wrnpa, w2rapn, iy$boe, yzqb9, wrx2pn);
    }, v_g2nx['resMgrLoadCallBack'] = function (a7f43p, hk8g0, pnw2xr, jf173t) {
      console['log']('buff:::', a7f43p, pnw2xr, b9yoz['fileNativeDir'] + '///' + b9yoz['fileListName']), jf173t(a7f43p, hk8g0, pnw2xr);
    }, v_g2nx['clearRes'] = function (iz9oyb, e6$bi) {
      e6$bi === void 0x0 && (e6$bi = ![]);var wnarp2 = this;wnarp2['clearRes'](iz9oyb, e6$bi);var hg8v0_ = b9yoz['getFileInfo'](iz9oyb);if (hg8v0_ && (iz9oyb['indexOf']('http://') != -0x1 || iz9oyb['indexOf']('https://') != -0x1)) {
        var j1ft73 = hg8v0_['md5'],
            a37wp4 = b9yoz['getFileNativePath'](j1ft73);b9yoz['remove'](a37wp4);
      }
    }, $ye6k['onReadNativeCallBack'] = function (a37wp, nwrxv2, k8h6$e, vg_2xn, cm51d, p73wa4, xvng, yeib, jf3t71) {
      vg_2xn === void 0x0 && (vg_2xn = !![]), p73wa4 === void 0x0 && (p73wa4 = ![]), yeib === void 0x0 && (yeib = 0x0);if (!yeib) {
        var ldcms5;if (k8h6$e == 'json' || k8h6$e == 'atlas') ldcms5 = a4jf37['getJson'](jf3t71['data']);else k8h6$e == 'xml' ? ldcms5 = t3fjs['parseXMLFromString'](jf3t71['data']) : ldcms5 = jf3t71['data'];xvng['onLoaded'](ldcms5), !a4jf37['isZiYu'] && a4jf37['isPosMsgYu'] && k8h6$e != 'arraybuffer' && wx['postMessage']({ 'url': nwrxv2, 'data': ldcms5, 'isLoad': !![] });
      } else yeib == 0x1 && a4jf37['EnvConfig']['load']['call'](xvng, nwrxv2, k8h6$e, vg_2xn, cm51d, p73wa4);
    }, o9eiyb($ye6k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), $ye6k;
  }(),
      b9yoz = function (ds5lc) {
    function h$6e8() {
      h$6e8['__super']['call'](this);;
    }return n_vx(h$6e8, 'laya.wx.mini.MiniFileMgr', ds5lc), h$6e8['isLoadFile'] = function (vgx02_) {
      return h$6e8['_fileTypeArr']['indexOf'](vgx02_) != -0x1 ? !![] : ![];
    }, h$6e8['getFileInfo'] = function (obiy$e) {
      var by$oie = obiy$e['split']('?')[0x0],
          ye$ibo = h$6e8['filesListObj'][by$oie];if (ye$ibo == null) return null;else return ye$ibo;return null;
    }, h$6e8['onFileUpdate'] = function (dt1s, st13jf) {
      var f74j = dt1s['split']('/'),
          $yb6i = f74j[f74j['length'] - 0x1],
          h86$0k = h$6e8['getFileInfo'](st13jf);if (h86$0k == null) h$6e8['onSaveFile'](st13jf, $yb6i);else {
        if (h86$0k['readyUrl'] != st13jf) h$6e8['remove']($yb6i, st13jf);
      }
    }, h$6e8['exits'] = function ($6hke8, td51cs) {
      var g_kh0 = h$6e8['getFileNativePath']($6hke8);h$6e8['fs']['getFileInfo']({ 'filePath': g_kh0, 'success': function (t51sc) {
          td51cs != null && td51cs['runWith']([0x0, t51sc]);
        }, 'fail': function (yeb9io) {
          td51cs != null && td51cs['runWith']([0x1, yeb9io]);
        } });
    }, h$6e8['read'] = function (v_rn2x, iobzy, zbiyo9, zy9oi) {
      iobzy === void 0x0 && (iobzy = 'ascill'), zy9oi === void 0x0 && (zy9oi = '');var n_xgv2;zy9oi != '' ? n_xgv2 = h$6e8['getFileNativePath'](v_rn2x) : n_xgv2 = v_rn2x, h$6e8['fs']['readFile']({ 'filePath': n_xgv2, 'encoding': iobzy, 'success': function (mcd) {
          zbiyo9 != null && zbiyo9['runWith']([0x0, mcd]);
        }, 'fail': function (qy9o) {
          if (qy9o && zy9oi != '') h$6e8['down'](zy9oi, iobzy, zbiyo9, zy9oi);else zbiyo9 != null && zbiyo9['runWith']([0x1]);
        } });
    }, h$6e8['readNativeFile'] = function (iob$, tf31j7) {
      h$6e8['fs']['readFile']({ 'filePath': iob$, 'encoding': '', 'success': function (d15tcs) {
          tf31j7 != null && tf31j7['runWith']([0x0]);
        }, 'fail': function (f73t1) {
          tf31j7 != null && tf31j7['runWith']([0x1]);
        } });
    }, h$6e8['down'] = function (vgh0_x, f731jt, h06g8, hv) {
      f731jt === void 0x0 && (f731jt = 'ascill'), hv === void 0x0 && (hv = '');var stf = h$6e8['getFileNativePath'](hv),
          afp34 = h$6e8['wxdown']({ 'url': vgh0_x, 'filePath': stf, 'success': function (y6e$ib) {
          if (y6e$ib['statusCode'] === 0xc8) h$6e8['readFile'](y6e$ib['filePath'], f731jt, h06g8, hv);
        }, 'fail': function (td15cs) {
          h06g8 != null && h06g8['runWith']([0x1, td15cs]);
        } });afp34['onProgressUpdate'](function (i9) {
        h06g8 != null && h06g8['runWith']([0x2, i9['progress']]);
      });
    }, h$6e8['readFile'] = function (f1t7j, w4a37p, xvrn2, nxpr2) {
      w4a37p === void 0x0 && (w4a37p = 'ascill'), nxpr2 === void 0x0 && (nxpr2 = ''), h$6e8['fs']['readFile']({ 'filePath': f1t7j, 'encoding': w4a37p, 'success': function (v80g_h) {
          if (f1t7j['indexOf']('http://') != -0x1 || f1t7j['indexOf']('https://') != -0x1) h$6e8['onFileUpdate'](f1t7j, nxpr2);xvrn2 != null && xvrn2['runWith']([0x0, v80g_h]);
        }, 'fail': function (r47) {
          if (r47) xvrn2 != null && xvrn2['runWith']([0x1, r47]);
        } });
    }, h$6e8['downImg'] = function (rwa4np, vnwr2, af3j4) {
      af3j4 === void 0x0 && (af3j4 = '');var xvhg = h$6e8['wxdown']({ 'url': rwa4np, 'success': function (wr2pn) {
          wr2pn['statusCode'] === 0xc8 && h$6e8['copyFile'](wr2pn['tempFilePath'], af3j4, vnwr2);
        }, 'fail': function (rvx2_n) {
          vnwr2 != null && vnwr2['runWith']([0x1, rvx2_n]);
        } });
    }, h$6e8['copyFile'] = function (p43wa, rvwn2, y9io) {
      var j1tc5 = p43wa['split']('/'),
          v_x0hg = j1tc5[j1tc5['length'] - 0x1],
          v2xwn = rvwn2['split']('?')[0x0],
          qbzoy = h$6e8['getFileInfo'](rvwn2),
          f743t = h$6e8['getFileNativePath'](v_x0hg);h$6e8['fs']['copyFile']({ 'srcPath': p43wa, 'destPath': f743t, 'success': function (j7tf1) {
          if (!qbzoy) h$6e8['onSaveFile'](rvwn2, v_x0hg), y9io != null && y9io['runWith']([0x0]);else {
            if (qbzoy['readyUrl'] != rvwn2) h$6e8['remove'](v_x0hg, rvwn2, y9io);
          }
        }, 'fail': function (i6eyb$) {
          y9io != null && y9io['runWith']([0x1, i6eyb$]);
        } });
    }, h$6e8['getFileNativePath'] = function (_gx2) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _gx2;
    }, h$6e8['remove'] = function (fcjt1s, _hx0g, t3f4j7) {
      _hx0g === void 0x0 && (_hx0g = '');var xvg_n = h$6e8['getFileInfo'](_hx0g),
          tjs1cf = h$6e8['getFileNativePath'](xvg_n['md5']);j1ft['loader']['clearRes'](xvg_n['readyUrl']), h$6e8['fs']['unlink']({ 'filePath': tjs1cf, 'success': function (rwap) {
          if (_hx0g != '') h$6e8['onSaveFile'](_hx0g, fcjt1s);t3f4j7 != null && t3f4j7['runWith']([0x0]);
        }, 'fail': function (_hv8g0) {} });
    }, h$6e8['onSaveFile'] = function (vg0_2x, jsf3t) {
      var g0_k8 = vg0_2x['split']('?')[0x0];h$6e8['filesListObj'][g0_k8] = { 'md5': jsf3t, 'readyUrl': vg0_2x }, h$6e8['fs']['writeFile']({ 'filePath': h$6e8['fileNativeDir'] + '/' + h$6e8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h$6e8['filesListObj']), 'success': function (k8$he) {
          console['log']('写入测试测试成功：', k8$he);
        }, 'fail': function (g6k8) {
          console['log']('写入测试测试失败：', g6k8);
        } });
    }, h$6e8['existDir'] = function (eik68$, v0gh) {
      h$6e8['fs']['mkdir']({ 'dirPath': eik68$, 'success': function (k06$8) {
          v0gh != null && v0gh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (t31) {
          if (t31['errMsg']['indexOf']('file already exists') != -0x1) h$6e8['readSync'](h$6e8['fileListName'], 'utf8', v0gh);else v0gh != null && v0gh['runWith']([0x1, t31]);
        } });
    }, h$6e8['readSync'] = function (awp2r, rnap, nrxvw2, g_xvn2) {
      rnap === void 0x0 && (rnap = 'ascill'), g_xvn2 === void 0x0 && (g_xvn2 = '');var a4f3j = h$6e8['getFileNativePath'](awp2r),
          f1tsc;try {
        f1tsc = h$6e8['fs']['readFileSync'](a4f3j), nrxvw2 != null && nrxvw2['runWith']([0x0, { 'data': f1tsc }]);
      } catch (nra4pw) {
        nrxvw2 != null && nrxvw2['runWith']([0x1]);
      }
    }, h$6e8['readCache'] = function () {}, h$6e8['writeCache'] = function (l5d) {
      var vwnx2 = readyUrl['split']('?')[0x0];h$6e8['filesListObj'][vwnx2] = { 'md5': md5Name, 'readyUrl': readyUrl }, h$6e8['fs']['writeFile']({ 'filePath': h$6e8['fileNativeDir'] + '/' + h$6e8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h$6e8['filesListObj']), 'success': function (vxng_) {}, 'fail': function (g8k_0h) {} });
    }, h$6e8['setNativeFileDir'] = function (panwr) {
      h$6e8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + panwr;
    }, h$6e8['filesListObj'] = {}, h$6e8['fileNativeDir'] = null, h$6e8['fileListName'] = 'layaairfiles.txt', h$6e8['ziyuFileData'] = {}, o9eiyb(h$6e8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), h$6e8;
  }(xwvr),
      $kh8e = function (ky6ei$) {
    function k06() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], k06['__super']['call'](this), this['_sound'] = k06['_createSound']();
    }n_vx(k06, 'laya.wx.mini.MiniSound', ky6ei$);var yi$6be = k06['prototype'];return yi$6be['load'] = function (aw2n) {
      var f7j34t = this;aw2n = xvgh_0['formatURL'](aw2n), this['url'] = aw2n;if (k06['_audioCache'][aw2n]) {
        this['event']('complete');return;
      }function v2x_g() {
        if (k06['_null'] != undefined) f7j34t['_sound']['onCanplay'](k06['_null']), f7j34t['_sound']['onError'](k06['_null']);else try {
          f7j34t['_sound']['onCanplay'](null), f7j34t['_sound']['onError'](null), k06['_null'] = null;
        } catch (aj3f) {
          console['warn']('[wxmini] _clearSound:' + aj3f), f7j34t['_sound']['onCanplay'](ozi), f7j34t['_sound']['onError'](ozi), k06['_null'] = ozi;
        }
      }function e9obyi() {
        v2x_g(), n2vx_g['loaded'] = !![], n2vx_g['event']('complete'), k06['_audioCache'][n2vx_g['url']] = n2vx_g;
      }function x2rw(nv_r2x) {
        console['error']('errCode=' + nv_r2x['errCode'] + '  errMsg=' + nv_r2x['errMsg']), v2x_g(), n2vx_g['event']('error');
      }function ozi() {}this['_sound']['onCanplay'](e9obyi), this['_sound']['onError'](x2rw), this['_sound']['src'] = aw2n;var n2vx_g = this;
    }, yi$6be['play'] = function (v_nx2r, an4rw) {
      v_nx2r === void 0x0 && (v_nx2r = 0x0), an4rw === void 0x0 && (an4rw = 0x0);var p74wa;if (this['url'] == s51tj['_tMusic']) {
        if (!k06['_musicAudio']) k06['_musicAudio'] = k06['_createSound']();p74wa = k06['_musicAudio'];
      } else p74wa = k06['_createSound']();p74wa['src'] = this['url'];var ei8$k = new k_08h(p74wa);return ei8$k['url'] = this['url'], ei8$k['loops'] = an4rw, ei8$k['startTime'] = v_nx2r, ei8$k['play'](), s51tj['addChannel'](ei8$k), ei8$k;
    }, yi$6be['dispose'] = function () {
      var d15cs = k06['_audioCache'][this['url']];d15cs && (d15cs['src'] = '', delete k06['_audioCache'][this['url']]);
    }, cd15sm(0x0, yi$6be, 'duration', function () {
      return this['_sound']['duration'];
    }), k06['_createSound'] = function () {
      return k06['_id']++, a4jf37['window']['wx']['createInnerAudioContext']();
    }, k06['_musicAudio'] = null, k06['_id'] = 0x0, k06['_audioCache'] = {}, k06['_null'] = undefined, k06;
  }(xwvr),
      k_08h = function ($k6iy) {
    function ybzq(i$86e) {
      this['_audio'] = null, this['_onEnd'] = null, ybzq['__super']['call'](this), this['_audio'] = i$86e, this['_onEnd'] = t3fjs['bind'](this['__onEnd'], this), i$86e['onEnded'](this['_onEnd']);
    }n_vx(ybzq, 'laya.wx.mini.MiniSoundChannel', $k6iy);var s1t3fj = ybzq['prototype'];return s1t3fj['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (j1ft['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, s1t3fj['__onNull'] = function () {}, s1t3fj['play'] = function () {
      this['isStopped'] = ![], s51tj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, s1t3fj['stop'] = function () {
      this['isStopped'] = !![], s51tj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ybzq['_null'] != undefined) this['_audio']['onEnded'](ybzq['_null']);else try {
        this['_audio']['onEnded'](null), ybzq['_null'] = null;
      } catch (iyb9) {
        console['warn']('[wxmini] stop:' + iyb9), this['_audio']['onEnded'](t3fjs['bind'](this['__onNull'], this)), ybzq['_null'] = t3fjs['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, s1t3fj['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, s1t3fj['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], s51tj['addChannel'](this), this['_audio']['play']();
    }, cd15sm(0x0, s1t3fj, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), cd15sm(0x0, s1t3fj, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), cd15sm(0x0, s1t3fj, 'volume', function () {
      return 0x1;
    }, function (rwpa4n) {}), ybzq['_null'] = undefined, ybzq;
  }($boe);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wnarp4 in Laya) {
    var oyiz = Laya[wnarp4];oyiz && oyiz['__isclass'] && (exports[wnarp4] = oyiz);
  }
});