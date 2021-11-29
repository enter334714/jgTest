var p = wx.$h;
(function (window, document, ke) {
  var i9ybeo = ke['un'],
      arnw4 = ke['uns'],
      c1tfs = ke['static'],
      kh0_8 = ke['class'],
      ei9oy = ke['getset'],
      xw2vr = ke['__newvec'],
      yiz = laya['utils']['Browser'],
      $ky6i = laya['events']['Event'],
      $8kh6e = laya['events']['EventDispatcher'],
      gh_0k8 = laya['resource']['HTMLImage'],
      nr2pa = laya['utils']['Handler'],
      qoz = laya['display']['Input'],
      e6yki$ = laya['net']['Loader'],
      aj4f73 = laya['maths']['Matrix'],
      obe9 = laya['renders']['Render'],
      jf3st = laya['utils']['RunDriver'],
      w4arp = laya['media']['Sound'],
      ioz9b = laya['media']['SoundChannel'],
      vg20_ = laya['media']['SoundManager'],
      wnar2p = laya['display']['Stage'],
      w2p = laya['net']['URL'],
      wap43 = laya['utils']['Utils'],
      arp = function () {
    function j17() {}return kh0_8(j17, 'laya.wx.mini.MiniAdpter'), j17['getJson'] = function (e8ki) {
      return JSON['parse'](e8ki);
    }, j17['init'] = function (sdc1, h8v0) {
      sdc1 === void 0x0 && (sdc1 = ![]), h8v0 === void 0x0 && (h8v0 = ![]);if (j17['_inited']) return;j17['window'] = window;if (j17['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;j17['_inited'] = !![], j17['isZiYu'] = h8v0, j17['isPosMsgYu'] = sdc1, j17['EnvConfig'] = {}, !j17['isZiYu'] && (fj173['setNativeFileDir']('/layaairGame'), fj173['existDir'](fj173['fileNativeDir'], nr2pa['create'](j17, j17['onMkdirCallBack']))), j17['window']['focus'] = function () {}, ke['getUrlPath'] = function () {}, j17['window']['logtime'] = function (nrpw) {}, j17['window']['alertTimeLog'] = function (a73w) {}, j17['window']['resetShareInfo'] = function () {}, j17['window']['CanvasRenderingContext2D'] = function () {}, j17['window']['CanvasRenderingContext2D']['prototype'] = j17['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], j17['window']['document']['body']['appendChild'] = function () {}, j17['EnvConfig']['pixelRatioInt'] = 0x0, jf3st['getPixelRatio'] = j17['pixelRatio'], j17['_preCreateElement'] = yiz['createElement'], yiz['createElement'] = j17['createElement'], jf3st['createShaderCondition'] = j17['createShaderCondition'], wap43['parseXMLFromString'] = j17['parseXMLFromString'], qoz['_createInputElement'] = ja47['_createInputElement'], j17['EnvConfig']['load'] = e6yki$['prototype']['load'], e6yki$['prototype']['load'] = n2rwa['prototype']['load'], j17['isZiYu'] && sdc1 && wx['onMessage'](function (iy9eb) {
        iy9eb['isLoad'] && (fj173['ziyuFileData'][iy9eb['url']] = iy9eb['data']);
      });
    }, j17['onMkdirCallBack'] = function (s5dtc, pawrn) {
      if (!s5dtc) fj173['filesListObj'] = JSON['parse'](pawrn['data']);
    }, j17['pixelRatio'] = function () {
      if (!j17['EnvConfig']['pixelRatioInt']) try {
        var mdsc5 = wx['getSystemInfoSync']();return j17['EnvConfig']['pixelRatioInt'] = mdsc5['pixelRatio'], mdsc5 = mdsc5, mdsc5['pixelRatio'];
      } catch (ybe9o) {}return j17['EnvConfig']['pixelRatioInt'];
    }, j17['createElement'] = function (oebiy$) {
      if (oebiy$ == 'canvas') {
        var _gkh80;return j17['idx'] == 0x1 ? j17['isZiYu'] ? (_gkh80 = sharedCanvas, _gkh80['style'] = {}) : _gkh80 = window['canvas'] : _gkh80 = window['wx']['createCanvas'](), j17['idx']++, _gkh80;
      } else {
        if (oebiy$ == 'textarea' || oebiy$ == 'input') return j17['onCreateInput'](oebiy$);else {
          if (oebiy$ == 'div') {
            var o9iey = j17['_preCreateElement'](oebiy$);return o9iey['contains'] = function (k6yi$e) {
              return null;
            }, o9iey['removeChild'] = function (xvr_) {}, o9iey;
          } else return j17['_preCreateElement'](oebiy$);
        }
      }
    }, j17['onCreateInput'] = function (gx2v0) {
      var zbqy = j17['_preCreateElement'](gx2v0);return zbqy['focus'] = ja47['wxinputFocus'], zbqy['blur'] = ja47['wxinputblur'], zbqy['style'] = {}, zbqy['value'] = 0x0, zbqy['parentElement'] = {}, zbqy['placeholder'] = {}, zbqy['type'] = {}, zbqy['setColor'] = function (wnv2rx) {}, zbqy['setType'] = function (ctjs51) {}, zbqy['setFontFace'] = function (s5m1cd) {}, zbqy['addEventListener'] = function (hv_x) {}, zbqy['contains'] = function (vx2w) {
        return null;
      }, zbqy['removeChild'] = function (tj15) {}, zbqy;
    }, j17['createShaderCondition'] = function (k68eh$) {
      var x_v0 = this,
          tf437 = function () {
        var yi9ob = k68eh$;return x_v0[k68eh$['replace']('this.', '')];
      };return tf437;
    }, j17['EnvConfig'] = null, j17['window'] = null, j17['_preCreateElement'] = null, j17['_inited'] = ![], j17['wxRequest'] = null, j17['systemInfo'] = null, j17['version'] = '0.0.1', j17['isZiYu'] = ![], j17['isPosMsgYu'] = ![], j17['parseXMLFromString'] = function ($kei68) {
      var iybz9o, t71f3j;$kei68 = $kei68['replace'](/>\s+</g, '><');try {
        iybz9o = new window['Parser']['DOMParser']()['parseFromString']($kei68, 'text/xml');
      } catch (eb$) {
        throw '需要引入xml解析库文件';
      }return iybz9o;
    }, j17['idx'] = 0x1, j17;
  }(),
      y9bieo = function () {
    function xg2n_() {}kh0_8(xg2n_, 'laya.wx.mini.MiniImage');var i68k$ = xg2n_['prototype'];return i68k$['_loadImage'] = function (xvnw2r) {
      var rwap74 = this,
          g_v8h = ![];xvnw2r['indexOf']('layaNativeDir/') == -0x1 && (g_v8h = !![], xvnw2r = w2p['formatURL'](xvnw2r));if (!fj173['getFileInfo'](xvnw2r)) {
        if (xvnw2r['indexOf']('http://') != -0x1 || xvnw2r['indexOf']('https://') != -0x1) fj173['downImg'](xvnw2r, new nr2pa(xg2n_, xg2n_['onDownImgCallBack'], [xvnw2r, rwap74]), xvnw2r);else xg2n_['onCreateImage'](xvnw2r, rwap74, !![]);
      } else xg2n_['onCreateImage'](xvnw2r, rwap74, !g_v8h);
    }, xg2n_['onDownImgCallBack'] = function (jt4f, sj3f, pra74w) {
      if (!pra74w) xg2n_['onCreateImage'](jt4f, sj3f);else sj3f['onError'](null);
    }, xg2n_['onCreateImage'] = function (ey$k6, ra4n, c15mds) {
      c15mds === void 0x0 && (c15mds = ![]);var ct51s;if (!c15mds) {
        var kyei6$ = fj173['getFileInfo'](ey$k6),
            mcsd = kyei6$['md5'];ct51s = fj173['getFileNativePath'](mcsd);
      } else ct51s = ey$k6;if (ra4n['imgCache'] == null) ra4n['imgCache'] = {};var nvr;function _rvnx() {
        nvr['onload'] = null, nvr['onerror'] = null, delete ra4n['imgCache'][ey$k6];
      };var d51tsc = function () {
        _rvnx(), ra4n['onLoaded'](nvr);
      },
          qbyz9o = function () {
        _rvnx(), ra4n['event']('error', 'Load image failed');
      };ra4n['_type'] == 'nativeimage' ? (nvr = new yiz['window']['Image'](), nvr['crossOrigin'] = '', nvr['onload'] = d51tsc, nvr['onerror'] = qbyz9o, nvr['src'] = ct51s, ra4n['imgCache'][ey$k6] = nvr) : new gh_0k8['create'](ct51s, { 'onload': d51tsc, 'onerror': qbyz9o, 'onCreate': function (gkh_80) {
          nvr = gkh_80, ra4n['imgCache'][ey$k6] = gkh_80;
        } });
    }, xg2n_;
  }(),
      ja47 = function () {
    function ts3j() {}return kh0_8(ts3j, 'laya.wx.mini.MiniInput'), ts3j['_createInputElement'] = function () {
      qoz['_initInput'](qoz['area'] = yiz['createElement']('textarea')), qoz['_initInput'](qoz['input'] = yiz['createElement']('input')), qoz['inputContainer'] = yiz['createElement']('div'), qoz['inputContainer']['style']['position'] = 'absolute', qoz['inputContainer']['style']['zIndex'] = 0x186a0, yiz['container']['appendChild'](qoz['inputContainer']), qoz['inputContainer']['setPos'] = function (obzi9y, o9yebi) {
        qoz['inputContainer']['style']['left'] = obzi9y + 'px', qoz['inputContainer']['style']['top'] = o9yebi + 'px';
      }, ke['stage']['on']('resize', null, ts3j['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (w4nra) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), vg20_['_soundClass'] = ctd15, vg20_['_musicClass'] = ctd15;
    }, ts3j['_onStageResize'] = function () {
      var eyib$o = ke['stage']['_canvasTransform']['identity']();eyib$o['scale'](yiz['width'] / obe9['canvas']['width'] / jf3st['getPixelRatio'](), yiz['height'] / obe9['canvas']['height'] / jf3st['getPixelRatio']());
    }, ts3j['wxinputFocus'] = function (wnpra4) {
      var ebio9y = qoz['inputElement']['target'];if (ebio9y && !ebio9y['editable']) return;arp['window']['wx']['offKeyboardConfirm'](), arp['window']['wx']['offKeyboardInput'](), arp['window']['wx']['showKeyboard']({ 'defaultValue': ebio9y['text'], 'maxLength': ebio9y['maxChars'], 'multiple': ebio9y['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (j13t7f) {}, 'fail': function (cs1dt5) {} }), arp['window']['wx']['onKeyboardConfirm'](function (yoe9ib) {
        var bioey9 = yoe9ib ? yoe9ib['value'] : '';ebio9y['text'] = bioey9, ebio9y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), arp['window']['wx']['onKeyboardInput'](function (k860h) {
        var pwnr = k860h ? k860h['value'] : '';if (!ebio9y['multiline']) {
          if (pwnr['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ebio9y['text'] = pwnr, ebio9y['event']('input');
      });
    }, ts3j['inputEnter'] = function () {
      qoz['inputElement']['target']['focus'] = ![];
    }, ts3j['wxinputblur'] = function () {
      ts3j['hideKeyboard']();
    }, ts3j['hideKeyboard'] = function () {
      arp['window']['wx']['offKeyboardConfirm'](), arp['window']['wx']['offKeyboardInput'](), arp['window']['wx']['hideKeyboard']({ 'success': function (sl5dm) {
          console['log']('隐藏键盘');
        }, 'fail': function (g2xvn_) {
          console['log']('隐藏键盘出错:' + (g2xvn_ ? g2xvn_['errMsg'] : ''));
        } });
    }, ts3j;
  }(),
      n2rwa = function () {
    function mdsc51() {}kh0_8(mdsc51, 'laya.wx.mini.MiniLoader');var o9bei = mdsc51['prototype'];return o9bei['load'] = function (o9ib, byoi, wa4prn, napw2r, m15dc) {
      wa4prn === void 0x0 && (wa4prn = !![]), m15dc === void 0x0 && (m15dc = ![]);var e6ki = this;e6ki['_url'] = o9ib;if (o9ib['indexOf']('data:image') === 0x0) e6ki['_type'] = byoi = 'image';else e6ki['_type'] = byoi || (byoi = e6ki['getTypeFromUrl'](o9ib));e6ki['_cache'] = wa4prn, e6ki['_data'] = null;var e8k$6h = 'ascii';if (o9ib['indexOf']('.fnt') != -0x1) e8k$6h = 'utf8';else byoi == 'arraybuffer' && (e8k$6h = '');;var j713t = wap43['getFileExtension'](o9ib);if (mdsc51['_fileTypeArr']['indexOf'](j713t) != -0x1) arp['EnvConfig']['load']['call'](this, o9ib, byoi, wa4prn, napw2r, m15dc);else {
        if (!fj173['getFileInfo'](o9ib)) {
          if (o9ib['indexOf']('layaNativeDir/') != -0x1) {
            if (arp['isZiYu']) {
              var pnrwa2 = fj173['ziyuFileData'][o9ib];e6ki['onLoaded'](pnrwa2);return;
            } else {
              cosnole['log']('read read'), fj173['read'](o9ib, e8k$6h, new nr2pa(mdsc51, mdsc51['onReadNativeCallBack'], [e8k$6h, o9ib, byoi, wa4prn, napw2r, m15dc, e6ki]));return;
            }
          }if (w2p['rootPath'] == '') var ye9ibo = o9ib;else ye9ibo = o9ib['split'](w2p['rootPath'])[0x0];o9ib['indexOf']('http://') != -0x1 || o9ib['indexOf']('https://') != -0x1 ? arp['EnvConfig']['load']['call'](e6ki, o9ib, byoi, wa4prn, napw2r, m15dc) : fj173['readFile'](ye9ibo, e8k$6h, new nr2pa(mdsc51, mdsc51['onReadNativeCallBack'], [e8k$6h, o9ib, byoi, wa4prn, napw2r, m15dc, e6ki]), o9ib);
        } else arp['EnvConfig']['load']['call'](this, o9ib, byoi, wa4prn, napw2r, m15dc);
      }
    }, o9bei['resMgrLoad'] = function (g0hk6, iby9o, b6ye$i, oi$, $6h8k, e$byio, vn_2x) {
      b6ye$i === void 0x0 && (b6ye$i = 0x0), oi$ === void 0x0 && (oi$ = ![]), $6h8k === void 0x0 && ($6h8k = ![]), e$byio === void 0x0 && (e$byio = 0x0), vn_2x === void 0x0 && (vn_2x = 0x3), g0hk6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', g0hk6), arp['EnvConfig']['resMgrLoad'](g0hk6, (fj473a, k6$i8, mc5sd) => {
        mdsc51['prototype']['resMgrLoadCallBack'](fj473a, k6$i8, mc5sd, iby9o);
      }, b6ye$i, oi$, $6h8k, e$byio, vn_2x);
    }, o9bei['resMgrLoadCallBack'] = function (oy9qz, g0_8, gv_08h, x_n2vg) {
      console['log']('buff:::', oy9qz, gv_08h, fj173['fileNativeDir'] + '///' + fj173['fileListName']), x_n2vg(oy9qz, g0_8, gv_08h);
    }, o9bei['clearRes'] = function (ye6b$, iz9oy) {
      iz9oy === void 0x0 && (iz9oy = ![]);var ebiy6 = this;ebiy6['clearRes'](ye6b$, iz9oy);var v_ghx0 = fj173['getFileInfo'](ye6b$);if (v_ghx0 && (ye6b$['indexOf']('http://') != -0x1 || ye6b$['indexOf']('https://') != -0x1)) {
        var b$eioy = v_ghx0['md5'],
            t371jf = fj173['getFileNativePath'](b$eioy);fj173['remove'](t371jf);
      }
    }, mdsc51['onReadNativeCallBack'] = function (v_nx2g, _8hv0, pa3w4, ei8$6, _8v0gh, r_x, jfcts1, np4wr, g_h0xv) {
      ei8$6 === void 0x0 && (ei8$6 = !![]), r_x === void 0x0 && (r_x = ![]), np4wr === void 0x0 && (np4wr = 0x0);if (!np4wr) {
        var xvg20_;if (pa3w4 == 'json' || pa3w4 == 'atlas') xvg20_ = arp['getJson'](g_h0xv['data']);else pa3w4 == 'xml' ? xvg20_ = wap43['parseXMLFromString'](g_h0xv['data']) : xvg20_ = g_h0xv['data'];jfcts1['onLoaded'](xvg20_), !arp['isZiYu'] && arp['isPosMsgYu'] && pa3w4 != 'arraybuffer' && wx['postMessage']({ 'url': _8hv0, 'data': xvg20_, 'isLoad': !![] });
      } else np4wr == 0x1 && arp['EnvConfig']['load']['call'](jfcts1, _8hv0, pa3w4, ei8$6, _8v0gh, r_x);
    }, c1tfs(mdsc51, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mdsc51;
  }(),
      fj173 = function (hgxv) {
    function rxvw2n() {
      rxvw2n['__super']['call'](this);;
    }return kh0_8(rxvw2n, 'laya.wx.mini.MiniFileMgr', hgxv), rxvw2n['isLoadFile'] = function (eyi6$b) {
      return rxvw2n['_fileTypeArr']['indexOf'](eyi6$b) != -0x1 ? !![] : ![];
    }, rxvw2n['getFileInfo'] = function (b$iey) {
      var t51cds = b$iey['split']('?')[0x0],
          j73t1f = rxvw2n['filesListObj'][t51cds];if (j73t1f == null) return null;else return j73t1f;return null;
    }, rxvw2n['onFileUpdate'] = function (r2wnx, bo9zyq) {
      var aw47pr = r2wnx['split']('/'),
          f3p47 = aw47pr[aw47pr['length'] - 0x1],
          _vnr2x = rxvw2n['getFileInfo'](bo9zyq);if (_vnr2x == null) rxvw2n['onSaveFile'](bo9zyq, f3p47);else {
        if (_vnr2x['readyUrl'] != bo9zyq) rxvw2n['remove'](f3p47, bo9zyq);
      }
    }, rxvw2n['exits'] = function (oybi, _g80kh) {
      var md15sc = rxvw2n['getFileNativePath'](oybi);rxvw2n['fs']['getFileInfo']({ 'filePath': md15sc, 'success': function (oyzb9i) {
          _g80kh != null && _g80kh['runWith']([0x0, oyzb9i]);
        }, 'fail': function (p4arnw) {
          _g80kh != null && _g80kh['runWith']([0x1, p4arnw]);
        } });
    }, rxvw2n['read'] = function (n4ap, lcm5, dc5sl, dmsc) {
      lcm5 === void 0x0 && (lcm5 = 'ascill'), dmsc === void 0x0 && (dmsc = '');var b$6e;dmsc != '' ? b$6e = rxvw2n['getFileNativePath'](n4ap) : b$6e = n4ap, rxvw2n['fs']['readFile']({ 'filePath': b$6e, 'encoding': lcm5, 'success': function (nx2vr_) {
          dc5sl != null && dc5sl['runWith']([0x0, nx2vr_]);
        }, 'fail': function (g8h0k) {
          if (g8h0k && dmsc != '') rxvw2n['down'](dmsc, lcm5, dc5sl, dmsc);else dc5sl != null && dc5sl['runWith']([0x1]);
        } });
    }, rxvw2n['readNativeFile'] = function (t1sd5, boz9yi) {
      rxvw2n['fs']['readFile']({ 'filePath': t1sd5, 'encoding': '', 'success': function (j47tf3) {
          boz9yi != null && boz9yi['runWith']([0x0]);
        }, 'fail': function (f7j34) {
          boz9yi != null && boz9yi['runWith']([0x1]);
        } });
    }, rxvw2n['down'] = function (e6iky, h6$8k0, e9yio, rx2wp) {
      h6$8k0 === void 0x0 && (h6$8k0 = 'ascill'), rx2wp === void 0x0 && (rx2wp = '');var khe8$ = rxvw2n['getFileNativePath'](rx2wp),
          boq = rxvw2n['wxdown']({ 'url': e6iky, 'filePath': khe8$, 'success': function (n2ra) {
          if (n2ra['statusCode'] === 0xc8) rxvw2n['readFile'](n2ra['filePath'], h6$8k0, e9yio, rx2wp);
        }, 'fail': function (_r2xvn) {
          e9yio != null && e9yio['runWith']([0x1, _r2xvn]);
        } });boq['onProgressUpdate'](function (x_2gnv) {
        e9yio != null && e9yio['runWith']([0x2, x_2gnv['progress']]);
      });
    }, rxvw2n['readFile'] = function (td5c1s, hg08k, gh80k, f1tcs) {
      hg08k === void 0x0 && (hg08k = 'ascill'), f1tcs === void 0x0 && (f1tcs = ''), rxvw2n['fs']['readFile']({ 'filePath': td5c1s, 'encoding': hg08k, 'success': function (iy6e$b) {
          if (td5c1s['indexOf']('http://') != -0x1 || td5c1s['indexOf']('https://') != -0x1) rxvw2n['onFileUpdate'](td5c1s, f1tcs);gh80k != null && gh80k['runWith']([0x0, iy6e$b]);
        }, 'fail': function ($8kei6) {
          if ($8kei6) gh80k != null && gh80k['runWith']([0x1, $8kei6]);
        } });
    }, rxvw2n['downImg'] = function (af74j, hk6$8, k8i6) {
      k8i6 === void 0x0 && (k8i6 = '');var $y6i = rxvw2n['wxdown']({ 'url': af74j, 'success': function (biy9o) {
          biy9o['statusCode'] === 0xc8 && rxvw2n['copyFile'](biy9o['tempFilePath'], k8i6, hk6$8);
        }, 'fail': function (tj3f) {
          hk6$8 != null && hk6$8['runWith']([0x1, tj3f]);
        } });
    }, rxvw2n['copyFile'] = function (_2vrx, p4a, h8_vg) {
      var rxn_ = _2vrx['split']('/'),
          f3j = rxn_[rxn_['length'] - 0x1],
          ye6ki$ = p4a['split']('?')[0x0],
          w47ra = rxvw2n['getFileInfo'](p4a),
          rw2n = rxvw2n['getFileNativePath'](f3j);rxvw2n['fs']['copyFile']({ 'srcPath': _2vrx, 'destPath': rw2n, 'success': function (fpa4) {
          if (!w47ra) rxvw2n['onSaveFile'](p4a, f3j), h8_vg != null && h8_vg['runWith']([0x0]);else {
            if (w47ra['readyUrl'] != p4a) rxvw2n['remove'](f3j, p4a, h8_vg);
          }
        }, 'fail': function (pw3a) {
          h8_vg != null && h8_vg['runWith']([0x1, pw3a]);
        } });
    }, rxvw2n['getFileNativePath'] = function (i6$) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + i6$;
    }, rxvw2n['remove'] = function (arnp, p3w7, g8_h) {
      p3w7 === void 0x0 && (p3w7 = '');var n2rawp = rxvw2n['getFileInfo'](p3w7),
          g0_hvx = rxvw2n['getFileNativePath'](n2rawp['md5']);ke['loader']['clearRes'](n2rawp['readyUrl']), rxvw2n['fs']['unlink']({ 'filePath': g0_hvx, 'success': function (f4j3a7) {
          if (p3w7 != '') rxvw2n['onSaveFile'](p3w7, arnp);g8_h != null && g8_h['runWith']([0x0]);
        }, 'fail': function (cdml5) {} });
    }, rxvw2n['onSaveFile'] = function (v2g, rnv) {
      var f34t7j = v2g['split']('?')[0x0];rxvw2n['filesListObj'][f34t7j] = { 'md5': rnv, 'readyUrl': v2g }, rxvw2n['fs']['writeFile']({ 'filePath': rxvw2n['fileNativeDir'] + '/' + rxvw2n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rxvw2n['filesListObj']), 'success': function (bo$) {
          console['log']('写入测试测试成功：', bo$);
        }, 'fail': function ($h06k) {
          console['log']('写入测试测试失败：', $h06k);
        } });
    }, rxvw2n['existDir'] = function ($oiye, npaw2r) {
      rxvw2n['fs']['mkdir']({ 'dirPath': $oiye, 'success': function (eyi9ob) {
          npaw2r != null && npaw2r['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (_v2n) {
          if (_v2n['errMsg']['indexOf']('file already exists') != -0x1) rxvw2n['readSync'](rxvw2n['fileListName'], 'utf8', npaw2r);else npaw2r != null && npaw2r['runWith']([0x1, _v2n]);
        } });
    }, rxvw2n['readSync'] = function (st5j, h0_gk, x2_g0, w7pa4) {
      h0_gk === void 0x0 && (h0_gk = 'ascill'), w7pa4 === void 0x0 && (w7pa4 = '');var s1ftjc = rxvw2n['getFileNativePath'](st5j),
          vrn2_;try {
        vrn2_ = rxvw2n['fs']['readFileSync'](s1ftjc), x2_g0 != null && x2_g0['runWith']([0x0, { 'data': vrn2_ }]);
      } catch (j1s3f) {
        x2_g0 != null && x2_g0['runWith']([0x1]);
      }
    }, rxvw2n['readCache'] = function () {}, rxvw2n['writeCache'] = function (pa4rw) {
      var y6k$i = readyUrl['split']('?')[0x0];rxvw2n['filesListObj'][y6k$i] = { 'md5': md5Name, 'readyUrl': readyUrl }, rxvw2n['fs']['writeFile']({ 'filePath': rxvw2n['fileNativeDir'] + '/' + rxvw2n['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](rxvw2n['filesListObj']), 'success': function (xhvg0_) {}, 'fail': function (h8$k) {} });
    }, rxvw2n['setNativeFileDir'] = function (iye9o) {
      rxvw2n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + iye9o;
    }, rxvw2n['filesListObj'] = {}, rxvw2n['fileNativeDir'] = null, rxvw2n['fileListName'] = 'layaairfiles.txt', rxvw2n['ziyuFileData'] = {}, c1tfs(rxvw2n, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), rxvw2n;
  }($8kh6e),
      ctd15 = function (ye9bo) {
    function izy9b() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], izy9b['__super']['call'](this), this['_sound'] = izy9b['_createSound']();
    }kh0_8(izy9b, 'laya.wx.mini.MiniSound', ye9bo);var xgv0 = izy9b['prototype'];return xgv0['load'] = function (h8k0g6) {
      var x_g20v = this;h8k0g6 = w2p['formatURL'](h8k0g6), this['url'] = h8k0g6;if (izy9b['_audioCache'][h8k0g6]) {
        this['event']('complete');return;
      }function naw2rp() {
        if (izy9b['_null'] != undefined) x_g20v['_sound']['onCanplay'](izy9b['_null']), x_g20v['_sound']['onError'](izy9b['_null']);else try {
          x_g20v['_sound']['onCanplay'](null), x_g20v['_sound']['onError'](null), izy9b['_null'] = null;
        } catch (a4p7w) {
          console['warn']('[wxmini] _clearSound:' + a4p7w), x_g20v['_sound']['onCanplay']($86k0), x_g20v['_sound']['onError']($86k0), izy9b['_null'] = $86k0;
        }
      }function j4t7f3() {
        naw2rp(), csdm15['loaded'] = !![], csdm15['event']('complete'), izy9b['_audioCache'][csdm15['url']] = csdm15;
      }function $h068(p4r7) {
        console['error']('errCode=' + p4r7['errCode'] + '  errMsg=' + p4r7['errMsg']), naw2rp(), csdm15['event']('error');
      }function $86k0() {}this['_sound']['onCanplay'](j4t7f3), this['_sound']['onError']($h068), this['_sound']['src'] = h8k0g6;var csdm15 = this;
    }, xgv0['play'] = function (yqozb, jsc5) {
      yqozb === void 0x0 && (yqozb = 0x0), jsc5 === void 0x0 && (jsc5 = 0x0);var jst51c;if (this['url'] == vg20_['_tMusic']) {
        if (!izy9b['_musicAudio']) izy9b['_musicAudio'] = izy9b['_createSound']();jst51c = izy9b['_musicAudio'];
      } else jst51c = izy9b['_createSound']();jst51c['src'] = this['url'];var n_gx = new j37ft(jst51c);return n_gx['url'] = this['url'], n_gx['loops'] = jsc5, n_gx['startTime'] = yqozb, n_gx['play'](), vg20_['addChannel'](n_gx), n_gx;
    }, xgv0['dispose'] = function () {
      var gh0v8_ = izy9b['_audioCache'][this['url']];gh0v8_ && (gh0v8_['src'] = '', delete izy9b['_audioCache'][this['url']]);
    }, ei9oy(0x0, xgv0, 'duration', function () {
      return this['_sound']['duration'];
    }), izy9b['_createSound'] = function () {
      return izy9b['_id']++, arp['window']['wx']['createInnerAudioContext']();
    }, izy9b['_musicAudio'] = null, izy9b['_id'] = 0x0, izy9b['_audioCache'] = {}, izy9b['_null'] = undefined, izy9b;
  }($8kh6e),
      j37ft = function (vxg20_) {
    function e$iob($ei6yb) {
      this['_audio'] = null, this['_onEnd'] = null, e$iob['__super']['call'](this), this['_audio'] = $ei6yb, this['_onEnd'] = wap43['bind'](this['__onEnd'], this), $ei6yb['onEnded'](this['_onEnd']);
    }kh0_8(e$iob, 'laya.wx.mini.MiniSoundChannel', vxg20_);var fa73 = e$iob['prototype'];return fa73['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ke['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fa73['__onNull'] = function () {}, fa73['play'] = function () {
      this['isStopped'] = ![], vg20_['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fa73['stop'] = function () {
      this['isStopped'] = !![], vg20_['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (e$iob['_null'] != undefined) this['_audio']['onEnded'](e$iob['_null']);else try {
        this['_audio']['onEnded'](null), e$iob['_null'] = null;
      } catch (pa347) {
        console['warn']('[wxmini] stop:' + pa347), this['_audio']['onEnded'](wap43['bind'](this['__onNull'], this)), e$iob['_null'] = wap43['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, fa73['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fa73['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], vg20_['addChannel'](this), this['_audio']['play']();
    }, ei9oy(0x0, fa73, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ei9oy(0x0, fa73, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ei9oy(0x0, fa73, 'volume', function () {
      return 0x1;
    }, function (kh6g8) {}), e$iob['_null'] = undefined, e$iob;
  }(ioz9b);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var wr4p in Laya) {
    var bi$ye6 = Laya[wr4p];bi$ye6 && bi$ye6['__isclass'] && (exports[wr4p] = bi$ye6);
  }
});