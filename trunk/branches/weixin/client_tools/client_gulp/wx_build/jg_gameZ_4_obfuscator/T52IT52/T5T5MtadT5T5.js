var B = wx.$B;
(function (window, document, l0ty$) {
  var r83j5 = l0ty$['un'],
      aepi2w = l0ty$['uns'],
      kvbl4 = l0ty$['static'],
      hng7u = l0ty$['class'],
      m15j = l0ty$['getset'],
      e3i2a = l0ty$['__newvec'],
      lvz0y4 = laya['utils']['Browser'],
      a2ipge = laya['events']['Event'],
      f15jmr = laya['events']['EventDispatcher'],
      u7shng = laya['resource']['HTMLImage'],
      rom15j = laya['utils']['Handler'],
      z49bl = laya['display']['Input'],
      ugns7p = laya['net']['Loader'],
      zblyv = laya['maths']['Matrix'],
      epi2g = laya['renders']['Render'],
      kz4v = laya['utils']['RunDriver'],
      u7gns = laya['media']['Sound'],
      bz9k6h = laya['media']['SoundChannel'],
      f853rj = laya['media']['SoundManager'],
      kz69bh = laya['display']['Stage'],
      epwia2 = laya['net']['URL'],
      wipe = laya['utils']['Utils'],
      gsp7u = function () {
    function ushn7() {}return hng7u(ushn7, 'laya.wx.mini.MiniAdpter'), ushn7['getJson'] = function (h9b7) {
      return JSON['parse'](h9b7);
    }, ushn7['init'] = function (yl4bvz, eui) {
      yl4bvz === void 0x0 && (yl4bvz = ![]), eui === void 0x0 && (eui = ![]);if (ushn7['_inited']) return;ushn7['window'] = window;if (ushn7['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ushn7['_inited'] = !![], ushn7['isZiYu'] = eui, ushn7['isPosMsgYu'] = yl4bvz, ushn7['EnvConfig'] = {}, !ushn7['isZiYu'] && (f8j51r['setNativeFileDir']('/layaairGame'), f8j51r['existDir'](f8j51r['fileNativeDir'], rom15j['create'](ushn7, ushn7['onMkdirCallBack']))), ushn7['window']['focus'] = function () {}, l0ty$['getUrlPath'] = function () {}, ushn7['window']['logtime'] = function (lyt0$) {}, ushn7['window']['alertTimeLog'] = function (nigue) {}, ushn7['window']['resetShareInfo'] = function () {}, ushn7['window']['CanvasRenderingContext2D'] = function () {}, ushn7['window']['CanvasRenderingContext2D']['prototype'] = ushn7['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ushn7['window']['document']['body']['appendChild'] = function () {}, ushn7['EnvConfig']['pixelRatioInt'] = 0x0, kz4v['getPixelRatio'] = ushn7['pixelRatio'], ushn7['_preCreateElement'] = lvz0y4['createElement'], lvz0y4['createElement'] = ushn7['createElement'], kz4v['createShaderCondition'] = ushn7['createShaderCondition'], wipe['parseXMLFromString'] = ushn7['parseXMLFromString'], z49bl['_createInputElement'] = spneg['_createInputElement'], ushn7['EnvConfig']['load'] = ugns7p['prototype']['load'], ugns7p['prototype']['load'] = j1o5r['prototype']['load'], ushn7['isZiYu'] && yl4bvz && wx['onMessage'](function (tyvl0$) {
        tyvl0$['isLoad'] && (f8j51r['ziyuFileData'][tyvl0$['url']] = tyvl0$['data']);
      });
    }, ushn7['onMkdirCallBack'] = function (d_xt0, genpsu) {
      if (!d_xt0) f8j51r['filesListObj'] = JSON['parse'](genpsu['data']);
    }, ushn7['pixelRatio'] = function () {
      if (!ushn7['EnvConfig']['pixelRatioInt']) try {
        var z9hk = wx['getSystemInfoSync']();return ushn7['EnvConfig']['pixelRatioInt'] = z9hk['pixelRatio'], z9hk = z9hk, z9hk['pixelRatio'];
      } catch (jrfm) {}return ushn7['EnvConfig']['pixelRatioInt'];
    }, ushn7['createElement'] = function (ylz0v4) {
      if (ylz0v4 == 'canvas') {
        var vl$t0;return ushn7['idx'] == 0x1 ? ushn7['isZiYu'] ? (vl$t0 = sharedCanvas, vl$t0['style'] = {}) : vl$t0 = window['canvas'] : vl$t0 = window['wx']['createCanvas'](), ushn7['idx']++, vl$t0;
      } else {
        if (ylz0v4 == 'textarea' || ylz0v4 == 'input') return ushn7['onCreateInput'](ylz0v4);else {
          if (ylz0v4 == 'div') {
            var j5f8 = ushn7['_preCreateElement'](ylz0v4);return j5f8['contains'] = function (ia32e) {
              return null;
            }, j5f8['removeChild'] = function (o5jm1r) {}, j5f8;
          } else return ushn7['_preCreateElement'](ylz0v4);
        }
      }
    }, ushn7['onCreateInput'] = function (w3fr85) {
      var r8a3w = ushn7['_preCreateElement'](w3fr85);return r8a3w['focus'] = spneg['wxinputFocus'], r8a3w['blur'] = spneg['wxinputblur'], r8a3w['style'] = {}, r8a3w['value'] = 0x0, r8a3w['parentElement'] = {}, r8a3w['placeholder'] = {}, r8a3w['type'] = {}, r8a3w['setColor'] = function (esgpu) {}, r8a3w['setType'] = function (z49k6b) {}, r8a3w['setFontFace'] = function (j35r) {}, r8a3w['addEventListener'] = function (rawf38) {}, r8a3w['contains'] = function (hbk796) {
        return null;
      }, r8a3w['removeChild'] = function (n67h) {}, r8a3w;
    }, ushn7['createShaderCondition'] = function (hbz) {
      var p2ug = this,
          ns7u6 = function () {
        var d$x_0t = hbz;return p2ug[hbz['replace']('this.', '')];
      };return ns7u6;
    }, ushn7['EnvConfig'] = null, ushn7['window'] = null, ushn7['_preCreateElement'] = null, ushn7['_inited'] = ![], ushn7['wxRequest'] = null, ushn7['systemInfo'] = null, ushn7['version'] = '0.0.1', ushn7['isZiYu'] = ![], ushn7['isPosMsgYu'] = ![], ushn7['parseXMLFromString'] = function (zk9b) {
      var bvlz4y, bvkl4z;zk9b = zk9b['replace'](/>\s+</g, '><');try {
        bvlz4y = new window['Parser']['DOMParser']()['parseFromString'](zk9b, 'text/xml');
      } catch (yvz4lb) {
        throw '需要引入xml解析库文件';
      }return bvlz4y;
    }, ushn7['idx'] = 0x1, ushn7;
  }(),
      eingu = function () {
    function mo1r5j() {}hng7u(mo1r5j, 'laya.wx.mini.MiniImage');var xy$_t = mo1r5j['prototype'];return xy$_t['_loadImage'] = function (t$yx0_) {
      var a8wi3 = this,
          h76u = ![];t$yx0_['indexOf']('layaNativeDir/') == -0x1 && (h76u = !![], t$yx0_ = epwia2['formatURL'](t$yx0_));if (!f8j51r['getFileInfo'](t$yx0_)) {
        if (t$yx0_['indexOf']('http://') != -0x1 || t$yx0_['indexOf']('https://') != -0x1) f8j51r['downImg'](t$yx0_, new rom15j(mo1r5j, mo1r5j['onDownImgCallBack'], [t$yx0_, a8wi3]), t$yx0_);else mo1r5j['onCreateImage'](t$yx0_, a8wi3, !![]);
      } else mo1r5j['onCreateImage'](t$yx0_, a8wi3, !h76u);
    }, mo1r5j['onDownImgCallBack'] = function (p2ue, bzk946, snegup) {
      if (!snegup) mo1r5j['onCreateImage'](p2ue, bzk946);else bzk946['onError'](null);
    }, mo1r5j['onCreateImage'] = function (eipa2g, dqx$_t, jmr51o) {
      jmr51o === void 0x0 && (jmr51o = ![]);var gpai2e;if (!jmr51o) {
        var sgu7n = f8j51r['getFileInfo'](eipa2g),
            y_tx0 = sgu7n['md5'];gpai2e = f8j51r['getFileNativePath'](y_tx0);
      } else gpai2e = eipa2g;if (dqx$_t['imgCache'] == null) dqx$_t['imgCache'] = {};var eap;function n7hs69() {
        eap['onload'] = null, eap['onerror'] = null, delete dqx$_t['imgCache'][eipa2g];
      };var r8wfa = function () {
        n7hs69(), dqx$_t['onLoaded'](eap);
      },
          rfm1j5 = function () {
        n7hs69(), dqx$_t['event']('error', 'Load image failed');
      };dqx$_t['_type'] == 'nativeimage' ? (eap = new lvz0y4['window']['Image'](), eap['crossOrigin'] = '', eap['onload'] = r8wfa, eap['onerror'] = rfm1j5, eap['src'] = gpai2e, dqx$_t['imgCache'][eipa2g] = eap) : new u7shng['create'](gpai2e, { 'onload': r8wfa, 'onerror': rfm1j5, 'onCreate': function (ae3w2) {
          eap = ae3w2, dqx$_t['imgCache'][eipa2g] = ae3w2;
        } });
    }, mo1r5j;
  }(),
      spneg = function () {
    function $40y() {}return hng7u($40y, 'laya.wx.mini.MiniInput'), $40y['_createInputElement'] = function () {
      z49bl['_initInput'](z49bl['area'] = lvz0y4['createElement']('textarea')), z49bl['_initInput'](z49bl['input'] = lvz0y4['createElement']('input')), z49bl['inputContainer'] = lvz0y4['createElement']('div'), z49bl['inputContainer']['style']['position'] = 'absolute', z49bl['inputContainer']['style']['zIndex'] = 0x186a0, lvz0y4['container']['appendChild'](z49bl['inputContainer']), z49bl['inputContainer']['setPos'] = function (aw8rf3, x0yt_$) {
        z49bl['inputContainer']['style']['left'] = aw8rf3 + 'px', z49bl['inputContainer']['style']['top'] = x0yt_$ + 'px';
      }, l0ty$['stage']['on']('resize', null, $40y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (j3f8r) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), f853rj['_soundClass'] = lt0$vy, f853rj['_musicClass'] = lt0$vy;
    }, $40y['_onStageResize'] = function () {
      var fj85 = l0ty$['stage']['_canvasTransform']['identity']();fj85['scale'](lvz0y4['width'] / epi2g['canvas']['width'] / kz4v['getPixelRatio'](), lvz0y4['height'] / epi2g['canvas']['height'] / kz4v['getPixelRatio']());
    }, $40y['wxinputFocus'] = function (gpin) {
      var ei2gup = z49bl['inputElement']['target'];if (ei2gup && !ei2gup['editable']) return;gsp7u['window']['wx']['offKeyboardConfirm'](), gsp7u['window']['wx']['offKeyboardInput'](), gsp7u['window']['wx']['showKeyboard']({ 'defaultValue': ei2gup['text'], 'maxLength': ei2gup['maxChars'], 'multiple': ei2gup['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (su7npg) {}, 'fail': function (a2i3) {} }), gsp7u['window']['wx']['onKeyboardConfirm'](function (af832) {
        var gesnp = af832 ? af832['value'] : '';ei2gup['text'] = gesnp, ei2gup['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), gsp7u['window']['wx']['onKeyboardInput'](function (x$d_0) {
        var tvl0 = x$d_0 ? x$d_0['value'] : '';if (!ei2gup['multiline']) {
          if (tvl0['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ei2gup['text'] = tvl0, ei2gup['event']('input');
      });
    }, $40y['inputEnter'] = function () {
      z49bl['inputElement']['target']['focus'] = ![];
    }, $40y['wxinputblur'] = function () {
      $40y['hideKeyboard']();
    }, $40y['hideKeyboard'] = function () {
      gsp7u['window']['wx']['offKeyboardConfirm'](), gsp7u['window']['wx']['offKeyboardInput'](), gsp7u['window']['wx']['hideKeyboard']({ 'success': function (s7nh96) {
          console['log']('隐藏键盘');
        }, 'fail': function (r5jf1m) {
          console['log']('隐藏键盘出错:' + (r5jf1m ? r5jf1m['errMsg'] : ''));
        } });
    }, $40y;
  }(),
      j1o5r = function () {
    function vyl40z() {}hng7u(vyl40z, 'laya.wx.mini.MiniLoader');var nsuh7 = vyl40z['prototype'];return nsuh7['load'] = function (uinepg, iegap2, pgnus, l04zvy, x$d0t_) {
      pgnus === void 0x0 && (pgnus = !![]), x$d0t_ === void 0x0 && (x$d0t_ = ![]);var xtqd_$ = this;xtqd_$['_url'] = uinepg;if (uinepg['indexOf']('data:image') === 0x0) xtqd_$['_type'] = iegap2 = 'image';else xtqd_$['_type'] = iegap2 || (iegap2 = xtqd_$['getTypeFromUrl'](uinepg));xtqd_$['_cache'] = pgnus, xtqd_$['_data'] = null;var jr15mf = 'ascii';if (uinepg['indexOf']('.fnt') != -0x1) jr15mf = 'utf8';else iegap2 == 'arraybuffer' && (jr15mf = '');;var t0vl$ = wipe['getFileExtension'](uinepg);if (vyl40z['_fileTypeArr']['indexOf'](t0vl$) != -0x1) gsp7u['EnvConfig']['load']['call'](this, uinepg, iegap2, pgnus, l04zvy, x$d0t_);else {
        if (!f8j51r['getFileInfo'](uinepg)) {
          if (uinepg['indexOf']('layaNativeDir/') != -0x1) {
            if (gsp7u['isZiYu']) {
              var r8f3w = f8j51r['ziyuFileData'][uinepg];xtqd_$['onLoaded'](r8f3w);return;
            } else {
              cosnole['log']('read read'), f8j51r['read'](uinepg, jr15mf, new rom15j(vyl40z, vyl40z['onReadNativeCallBack'], [jr15mf, uinepg, iegap2, pgnus, l04zvy, x$d0t_, xtqd_$]));return;
            }
          }if (epwia2['rootPath'] == '') var $0tyvx = uinepg;else $0tyvx = uinepg['split'](epwia2['rootPath'])[0x0];uinepg['indexOf']('http://') != -0x1 || uinepg['indexOf']('https://') != -0x1 ? gsp7u['EnvConfig']['load']['call'](xtqd_$, uinepg, iegap2, pgnus, l04zvy, x$d0t_) : f8j51r['readFile']($0tyvx, jr15mf, new rom15j(vyl40z, vyl40z['onReadNativeCallBack'], [jr15mf, uinepg, iegap2, pgnus, l04zvy, x$d0t_, xtqd_$]), uinepg);
        } else gsp7u['EnvConfig']['load']['call'](this, uinepg, iegap2, pgnus, l04zvy, x$d0t_);
      }
    }, nsuh7['resMgrLoad'] = function (k4vbl, dq$x, z9kb46, d_xt, _y$t0x, r8j1, k49blz) {
      z9kb46 === void 0x0 && (z9kb46 = 0x0), d_xt === void 0x0 && (d_xt = ![]), _y$t0x === void 0x0 && (_y$t0x = ![]), r8j1 === void 0x0 && (r8j1 = 0x0), k49blz === void 0x0 && (k49blz = 0x3), k4vbl['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', k4vbl), gsp7u['EnvConfig']['resMgrLoad'](k4vbl, (enugsp, z4lkvb, r8j3f5) => {
        vyl40z['prototype']['resMgrLoadCallBack'](enugsp, z4lkvb, r8j3f5, dq$x);
      }, z9kb46, d_xt, _y$t0x, r8j1, k49blz);
    }, nsuh7['resMgrLoadCallBack'] = function (zb469k, td$qx_, tq_$d, uhn7sg) {
      console['log']('buff:::', zb469k, tq_$d, f8j51r['fileNativeDir'] + '///' + f8j51r['fileListName']), uhn7sg(zb469k, td$qx_, tq_$d);
    }, nsuh7['clearRes'] = function (e2iaw, jomr15) {
      jomr15 === void 0x0 && (jomr15 = ![]);var _0dxt = this;_0dxt['clearRes'](e2iaw, jomr15);var ns6uh7 = f8j51r['getFileInfo'](e2iaw);if (ns6uh7 && (e2iaw['indexOf']('http://') != -0x1 || e2iaw['indexOf']('https://') != -0x1)) {
        var v4klzb = ns6uh7['md5'],
            inuge = f8j51r['getFileNativePath'](v4klzb);f8j51r['remove'](inuge);
      }
    }, vyl40z['onReadNativeCallBack'] = function (y0$4v, zlbyv4, j3r58f, y_$0, zyb4lv, hg7n, faw38r, vx$ty, upnse) {
      y_$0 === void 0x0 && (y_$0 = !![]), hg7n === void 0x0 && (hg7n = ![]), vx$ty === void 0x0 && (vx$ty = 0x0);if (!vx$ty) {
        var lz4v;if (j3r58f == 'json' || j3r58f == 'atlas') lz4v = gsp7u['getJson'](upnse['data']);else j3r58f == 'xml' ? lz4v = wipe['parseXMLFromString'](upnse['data']) : lz4v = upnse['data'];faw38r['onLoaded'](lz4v), !gsp7u['isZiYu'] && gsp7u['isPosMsgYu'] && j3r58f != 'arraybuffer' && wx['postMessage']({ 'url': zlbyv4, 'data': lz4v, 'isLoad': !![] });
      } else vx$ty == 0x1 && gsp7u['EnvConfig']['load']['call'](faw38r, zlbyv4, j3r58f, y_$0, zyb4lv, hg7n);
    }, kvbl4(vyl40z, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vyl40z;
  }(),
      f8j51r = function ($_tqxd) {
    function ip2awe() {
      ip2awe['__super']['call'](this);;
    }return hng7u(ip2awe, 'laya.wx.mini.MiniFileMgr', $_tqxd), ip2awe['isLoadFile'] = function (snug7h) {
      return ip2awe['_fileTypeArr']['indexOf'](snug7h) != -0x1 ? !![] : ![];
    }, ip2awe['getFileInfo'] = function (epsung) {
      var w3f28a = epsung['split']('?')[0x0],
          zv4kb = ip2awe['filesListObj'][w3f28a];if (zv4kb == null) return null;else return zv4kb;return null;
    }, ip2awe['onFileUpdate'] = function (arf3w8, xy_t0$) {
      var n6su7 = arf3w8['split']('/'),
          guie = n6su7[n6su7['length'] - 0x1],
          rwa8 = ip2awe['getFileInfo'](xy_t0$);if (rwa8 == null) ip2awe['onSaveFile'](xy_t0$, guie);else {
        if (rwa8['readyUrl'] != xy_t0$) ip2awe['remove'](guie, xy_t0$);
      }
    }, ip2awe['exits'] = function (wfar, bz69hk) {
      var ylzbv = ip2awe['getFileNativePath'](wfar);ip2awe['fs']['getFileInfo']({ 'filePath': ylzbv, 'success': function (f3wr58) {
          bz69hk != null && bz69hk['runWith']([0x0, f3wr58]);
        }, 'fail': function (dt$x_) {
          bz69hk != null && bz69hk['runWith']([0x1, dt$x_]);
        } });
    }, ip2awe['read'] = function (wfa83r, iwea, gusnh7, b964k) {
      iwea === void 0x0 && (iwea = 'ascill'), b964k === void 0x0 && (b964k = '');var pigea;b964k != '' ? pigea = ip2awe['getFileNativePath'](wfa83r) : pigea = wfa83r, ip2awe['fs']['readFile']({ 'filePath': pigea, 'encoding': iwea, 'success': function (fa32w8) {
          gusnh7 != null && gusnh7['runWith']([0x0, fa32w8]);
        }, 'fail': function (vbzy4l) {
          if (vbzy4l && b964k != '') ip2awe['down'](b964k, iwea, gusnh7, b964k);else gusnh7 != null && gusnh7['runWith']([0x1]);
        } });
    }, ip2awe['readNativeFile'] = function (ignup, b64k9z) {
      ip2awe['fs']['readFile']({ 'filePath': ignup, 'encoding': '', 'success': function (lvz04y) {
          b64k9z != null && b64k9z['runWith']([0x0]);
        }, 'fail': function (zk9lb) {
          b64k9z != null && b64k9z['runWith']([0x1]);
        } });
    }, ip2awe['down'] = function (vl4y$, pea2g, nh96s, bz6k) {
      pea2g === void 0x0 && (pea2g = 'ascill'), bz6k === void 0x0 && (bz6k = '');var un7gsh = ip2awe['getFileNativePath'](bz6k),
          j83r5 = ip2awe['wxdown']({ 'url': vl4y$, 'filePath': un7gsh, 'success': function (hnu7s6) {
          if (hnu7s6['statusCode'] === 0xc8) ip2awe['readFile'](hnu7s6['filePath'], pea2g, nh96s, bz6k);
        }, 'fail': function (tyx0_) {
          nh96s != null && nh96s['runWith']([0x1, tyx0_]);
        } });j83r5['onProgressUpdate'](function (a2wpe) {
        nh96s != null && nh96s['runWith']([0x2, a2wpe['progress']]);
      });
    }, ip2awe['readFile'] = function (ugipe, kz694b, fmr1j, blkv4z) {
      kz694b === void 0x0 && (kz694b = 'ascill'), blkv4z === void 0x0 && (blkv4z = ''), ip2awe['fs']['readFile']({ 'filePath': ugipe, 'encoding': kz694b, 'success': function (hsgnu) {
          if (ugipe['indexOf']('http://') != -0x1 || ugipe['indexOf']('https://') != -0x1) ip2awe['onFileUpdate'](ugipe, blkv4z);fmr1j != null && fmr1j['runWith']([0x0, hsgnu]);
        }, 'fail': function (h9n) {
          if (h9n) fmr1j != null && fmr1j['runWith']([0x1, h9n]);
        } });
    }, ip2awe['downImg'] = function (sghu, u7nspg, byl) {
      byl === void 0x0 && (byl = '');var d0_t = ip2awe['wxdown']({ 'url': sghu, 'success': function (fj15rm) {
          fj15rm['statusCode'] === 0xc8 && ip2awe['copyFile'](fj15rm['tempFilePath'], byl, u7nspg);
        }, 'fail': function (w823) {
          u7nspg != null && u7nspg['runWith']([0x1, w823]);
        } });
    }, ip2awe['copyFile'] = function ($lvt, n6u7sh, lv04$) {
      var _txdq$ = $lvt['split']('/'),
          bz4vl = _txdq$[_txdq$['length'] - 0x1],
          ie3 = n6u7sh['split']('?')[0x0],
          rj51f8 = ip2awe['getFileInfo'](n6u7sh),
          eg2pui = ip2awe['getFileNativePath'](bz4vl);ip2awe['fs']['copyFile']({ 'srcPath': $lvt, 'destPath': eg2pui, 'success': function (_tqdx$) {
          if (!rj51f8) ip2awe['onSaveFile'](n6u7sh, bz4vl), lv04$ != null && lv04$['runWith']([0x0]);else {
            if (rj51f8['readyUrl'] != n6u7sh) ip2awe['remove'](bz4vl, n6u7sh, lv04$);
          }
        }, 'fail': function (gae2i) {
          lv04$ != null && lv04$['runWith']([0x1, gae2i]);
        } });
    }, ip2awe['getFileNativePath'] = function (f8arw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f8arw;
    }, ip2awe['remove'] = function (weaip, hs76un, s79k6) {
      hs76un === void 0x0 && (hs76un = '');var ly$v04 = ip2awe['getFileInfo'](hs76un),
          dt$0x = ip2awe['getFileNativePath'](ly$v04['md5']);l0ty$['loader']['clearRes'](ly$v04['readyUrl']), ip2awe['fs']['unlink']({ 'filePath': dt$0x, 'success': function (gesnpu) {
          if (hs76un != '') ip2awe['onSaveFile'](hs76un, weaip);s79k6 != null && s79k6['runWith']([0x0]);
        }, 'fail': function ($lv40) {} });
    }, ip2awe['onSaveFile'] = function (s97n6h, k6b9z4) {
      var nuegip = s97n6h['split']('?')[0x0];ip2awe['filesListObj'][nuegip] = { 'md5': k6b9z4, 'readyUrl': s97n6h }, ip2awe['fs']['writeFile']({ 'filePath': ip2awe['fileNativeDir'] + '/' + ip2awe['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ip2awe['filesListObj']), 'success': function (epwi2a) {
          console['log']('写入测试测试成功：', epwi2a);
        }, 'fail': function (k96bh7) {
          console['log']('写入测试测试失败：', k96bh7);
        } });
    }, ip2awe['existDir'] = function (zvk4lb, dt_$q) {
      ip2awe['fs']['mkdir']({ 'dirPath': zvk4lb, 'success': function (bkz469) {
          dt_$q != null && dt_$q['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (lzvb4y) {
          if (lzvb4y['errMsg']['indexOf']('file already exists') != -0x1) ip2awe['readSync'](ip2awe['fileListName'], 'utf8', dt_$q);else dt_$q != null && dt_$q['runWith']([0x1, lzvb4y]);
        } });
    }, ip2awe['readSync'] = function (ungse, w3fa8, zb4lv, h69k7b) {
      w3fa8 === void 0x0 && (w3fa8 = 'ascill'), h69k7b === void 0x0 && (h69k7b = '');var hn976 = ip2awe['getFileNativePath'](ungse),
          wi82a3;try {
        wi82a3 = ip2awe['fs']['readFileSync'](hn976), zb4lv != null && zb4lv['runWith']([0x0, { 'data': wi82a3 }]);
      } catch (t$0xyv) {
        zb4lv != null && zb4lv['runWith']([0x1]);
      }
    }, ip2awe['readCache'] = function () {}, ip2awe['writeCache'] = function (gnhu7s) {
      var ei2wp = readyUrl['split']('?')[0x0];ip2awe['filesListObj'][ei2wp] = { 'md5': md5Name, 'readyUrl': readyUrl }, ip2awe['fs']['writeFile']({ 'filePath': ip2awe['fileNativeDir'] + '/' + ip2awe['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ip2awe['filesListObj']), 'success': function (hk9zb) {}, 'fail': function (xy0_t$) {} });
    }, ip2awe['setNativeFileDir'] = function ($_x) {
      ip2awe['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $_x;
    }, ip2awe['filesListObj'] = {}, ip2awe['fileNativeDir'] = null, ip2awe['fileListName'] = 'layaairfiles.txt', ip2awe['ziyuFileData'] = {}, kvbl4(ip2awe, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ip2awe;
  }(f15jmr),
      lt0$vy = function (iw3ae2) {
    function lz4byv() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], lz4byv['__super']['call'](this), this['_sound'] = lz4byv['_createSound']();
    }hng7u(lz4byv, 'laya.wx.mini.MiniSound', iw3ae2);var aeg2p = lz4byv['prototype'];return aeg2p['load'] = function (gupn) {
      var x$t0y = this;gupn = epwia2['formatURL'](gupn), this['url'] = gupn;if (lz4byv['_audioCache'][gupn]) {
        this['event']('complete');return;
      }function _xd$0() {
        if (lz4byv['_null'] != undefined) x$t0y['_sound']['onCanplay'](lz4byv['_null']), x$t0y['_sound']['onError'](lz4byv['_null']);else try {
          x$t0y['_sound']['onCanplay'](null), x$t0y['_sound']['onError'](null), lz4byv['_null'] = null;
        } catch (ueignp) {
          console['warn']('[wxmini] _clearSound:' + ueignp), x$t0y['_sound']['onCanplay'](fa2w8), x$t0y['_sound']['onError'](fa2w8), lz4byv['_null'] = fa2w8;
        }
      }function y4blzv() {
        _xd$0(), l04yvz['loaded'] = !![], l04yvz['event']('complete'), lz4byv['_audioCache'][l04yvz['url']] = l04yvz;
      }function ns7u6h($0_xy) {
        console['error']('errCode=' + $0_xy['errCode'] + '  errMsg=' + $0_xy['errMsg']), _xd$0(), l04yvz['event']('error');
      }function fa2w8() {}this['_sound']['onCanplay'](y4blzv), this['_sound']['onError'](ns7u6h), this['_sound']['src'] = gupn;var l04yvz = this;
    }, aeg2p['play'] = function (wr8af, dx$_t) {
      wr8af === void 0x0 && (wr8af = 0x0), dx$_t === void 0x0 && (dx$_t = 0x0);var rf3j85;if (this['url'] == f853rj['_tMusic']) {
        if (!lz4byv['_musicAudio']) lz4byv['_musicAudio'] = lz4byv['_createSound']();rf3j85 = lz4byv['_musicAudio'];
      } else rf3j85 = lz4byv['_createSound']();rf3j85['src'] = this['url'];var a3iw8 = new hzk6b9(rf3j85);return a3iw8['url'] = this['url'], a3iw8['loops'] = dx$_t, a3iw8['startTime'] = wr8af, a3iw8['play'](), f853rj['addChannel'](a3iw8), a3iw8;
    }, aeg2p['dispose'] = function () {
      var ytlv0$ = lz4byv['_audioCache'][this['url']];ytlv0$ && (ytlv0$['src'] = '', delete lz4byv['_audioCache'][this['url']]);
    }, m15j(0x0, aeg2p, 'duration', function () {
      return this['_sound']['duration'];
    }), lz4byv['_createSound'] = function () {
      return lz4byv['_id']++, gsp7u['window']['wx']['createInnerAudioContext']();
    }, lz4byv['_musicAudio'] = null, lz4byv['_id'] = 0x0, lz4byv['_audioCache'] = {}, lz4byv['_null'] = undefined, lz4byv;
  }(f15jmr),
      hzk6b9 = function (bkv4zl) {
    function wa8f(d0xt$) {
      this['_audio'] = null, this['_onEnd'] = null, wa8f['__super']['call'](this), this['_audio'] = d0xt$, this['_onEnd'] = wipe['bind'](this['__onEnd'], this), d0xt$['onEnded'](this['_onEnd']);
    }hng7u(wa8f, 'laya.wx.mini.MiniSoundChannel', bkv4zl);var om51j = wa8f['prototype'];return om51j['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (l0ty$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, om51j['__onNull'] = function () {}, om51j['play'] = function () {
      this['isStopped'] = ![], f853rj['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, om51j['stop'] = function () {
      this['isStopped'] = !![], f853rj['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (wa8f['_null'] != undefined) this['_audio']['onEnded'](wa8f['_null']);else try {
        this['_audio']['onEnded'](null), wa8f['_null'] = null;
      } catch (weapi) {
        console['warn']('[wxmini] stop:' + weapi), this['_audio']['onEnded'](wipe['bind'](this['__onNull'], this)), wa8f['_null'] = wipe['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, om51j['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, om51j['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], f853rj['addChannel'](this), this['_audio']['play']();
    }, m15j(0x0, om51j, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), m15j(0x0, om51j, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), m15j(0x0, om51j, 'volume', function () {
      return 0x1;
    }, function (snuh6) {}), wa8f['_null'] = undefined, wa8f;
  }(bz9k6h);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var ei2pg in Laya) {
    var jf358r = Laya[ei2pg];jf358r && jf358r['__isclass'] && (exports[ei2pg] = jf358r);
  }
});