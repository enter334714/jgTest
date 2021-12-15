var p = wx.$h;
(function (window, document, yik6$e) {
  var _vgn2x = yik6$e['un'],
      nxwrv2 = yik6$e['uns'],
      xhg_v = yik6$e['static'],
      vw2nrx = yik6$e['class'],
      xwv = yik6$e['getset'],
      v2n_g = yik6$e['__newvec'],
      prawn4 = laya['utils']['Browser'],
      ey$6k = laya['events']['Event'],
      cmld5 = laya['events']['EventDispatcher'],
      rawp74 = laya['resource']['HTMLImage'],
      i$eyo = laya['utils']['Handler'],
      $ek86 = laya['display']['Input'],
      e$6iky = laya['net']['Loader'],
      ybe$io = laya['maths']['Matrix'],
      i6yk$ = laya['renders']['Render'],
      wrnx2p = laya['utils']['RunDriver'],
      f4p7 = laya['media']['Sound'],
      $6kyi = laya['media']['SoundChannel'],
      eik = laya['media']['SoundManager'],
      xrvn = laya['display']['Stage'],
      ki6$ = laya['net']['URL'],
      mc5dsl = laya['utils']['Utils'],
      nx_v2g = function () {
    function k6$0h8() {}return vw2nrx(k6$0h8, 'laya.wx.mini.MiniAdpter'), k6$0h8['getJson'] = function (eik8) {
      return JSON['parse'](eik8);
    }, k6$0h8['init'] = function (i$k86, hke) {
      i$k86 === void 0x0 && (i$k86 = ![]), hke === void 0x0 && (hke = ![]);if (k6$0h8['_inited']) return;k6$0h8['window'] = window;if (k6$0h8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k6$0h8['_inited'] = !![], k6$0h8['isZiYu'] = hke, k6$0h8['isPosMsgYu'] = i$k86, k6$0h8['EnvConfig'] = {}, !k6$0h8['isZiYu'] && (wr2na['setNativeFileDir']('/layaairGame'), wr2na['existDir'](wr2na['fileNativeDir'], i$eyo['create'](k6$0h8, k6$0h8['onMkdirCallBack']))), k6$0h8['window']['focus'] = function () {}, yik6$e['getUrlPath'] = function () {}, k6$0h8['window']['logtime'] = function (z9byio) {}, k6$0h8['window']['alertTimeLog'] = function (i$b6) {}, k6$0h8['window']['resetShareInfo'] = function () {}, k6$0h8['window']['CanvasRenderingContext2D'] = function () {}, k6$0h8['window']['CanvasRenderingContext2D']['prototype'] = k6$0h8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k6$0h8['window']['document']['body']['appendChild'] = function () {}, k6$0h8['EnvConfig']['pixelRatioInt'] = 0x0, wrnx2p['getPixelRatio'] = k6$0h8['pixelRatio'], k6$0h8['_preCreateElement'] = prawn4['createElement'], prawn4['createElement'] = k6$0h8['createElement'], wrnx2p['createShaderCondition'] = k6$0h8['createShaderCondition'], mc5dsl['parseXMLFromString'] = k6$0h8['parseXMLFromString'], $ek86['_createInputElement'] = wn2vx['_createInputElement'], k6$0h8['EnvConfig']['load'] = e$6iky['prototype']['load'], e$6iky['prototype']['load'] = r2wpa['prototype']['load'], k6$0h8['isZiYu'] && i$k86 && wx['onMessage'](function (xgv0) {
        xgv0['isLoad'] && (wr2na['ziyuFileData'][xgv0['url']] = xgv0['data']);
      });
    }, k6$0h8['onMkdirCallBack'] = function (by$6, g2vn_x) {
      if (!by$6) wr2na['filesListObj'] = JSON['parse'](g2vn_x['data']);
    }, k6$0h8['pixelRatio'] = function () {
      if (!k6$0h8['EnvConfig']['pixelRatioInt']) try {
        var vg_2x = wx['getSystemInfoSync']();return k6$0h8['EnvConfig']['pixelRatioInt'] = vg_2x['pixelRatio'], vg_2x = vg_2x, vg_2x['pixelRatio'];
      } catch (_g8h0k) {}return k6$0h8['EnvConfig']['pixelRatioInt'];
    }, k6$0h8['createElement'] = function (b9io) {
      if (b9io == 'canvas') {
        var dt5sc1;return k6$0h8['idx'] == 0x1 ? k6$0h8['isZiYu'] ? (dt5sc1 = sharedCanvas, dt5sc1['style'] = {}) : dt5sc1 = window['canvas'] : dt5sc1 = window['wx']['createCanvas'](), k6$0h8['idx']++, dt5sc1;
      } else {
        if (b9io == 'textarea' || b9io == 'input') return k6$0h8['onCreateInput'](b9io);else {
          if (b9io == 'div') {
            var pn4ar = k6$0h8['_preCreateElement'](b9io);return pn4ar['contains'] = function (mc5sd) {
              return null;
            }, pn4ar['removeChild'] = function (ib9oyz) {}, pn4ar;
          } else return k6$0h8['_preCreateElement'](b9io);
        }
      }
    }, k6$0h8['onCreateInput'] = function (qzob) {
      var d1scm = k6$0h8['_preCreateElement'](qzob);return d1scm['focus'] = wn2vx['wxinputFocus'], d1scm['blur'] = wn2vx['wxinputblur'], d1scm['style'] = {}, d1scm['value'] = 0x0, d1scm['parentElement'] = {}, d1scm['placeholder'] = {}, d1scm['type'] = {}, d1scm['setColor'] = function (f1tj3s) {}, d1scm['setType'] = function (tf7j43) {}, d1scm['setFontFace'] = function (c5smdl) {}, d1scm['addEventListener'] = function (sdc1) {}, d1scm['contains'] = function (mdl5c) {
        return null;
      }, d1scm['removeChild'] = function (ap) {}, d1scm;
    }, k6$0h8['createShaderCondition'] = function (zyob9i) {
      var p7r4w = this,
          cs1fjt = function () {
        var gk8_ = zyob9i;return p7r4w[zyob9i['replace']('this.', '')];
      };return cs1fjt;
    }, k6$0h8['EnvConfig'] = null, k6$0h8['window'] = null, k6$0h8['_preCreateElement'] = null, k6$0h8['_inited'] = ![], k6$0h8['wxRequest'] = null, k6$0h8['systemInfo'] = null, k6$0h8['version'] = '0.0.1', k6$0h8['isZiYu'] = ![], k6$0h8['isPosMsgYu'] = ![], k6$0h8['parseXMLFromString'] = function (dc5ls) {
      var dl5m, gnxv2_;dc5ls = dc5ls['replace'](/>\s+</g, '><');try {
        dl5m = new window['Parser']['DOMParser']()['parseFromString'](dc5ls, 'text/xml');
      } catch (k6ie$) {
        throw '需要引入xml解析库文件';
      }return dl5m;
    }, k6$0h8['idx'] = 0x1, k6$0h8;
  }(),
      r_2vxn = function () {
    function $6ie8() {}vw2nrx($6ie8, 'laya.wx.mini.MiniImage');var r74pwa = $6ie8['prototype'];return r74pwa['_loadImage'] = function (s5ldc) {
      var sf3tj = this,
          prw4 = ![];s5ldc['indexOf']('layaNativeDir/') == -0x1 && (prw4 = !![], s5ldc = ki6$['formatURL'](s5ldc));if (!wr2na['getFileInfo'](s5ldc)) {
        if (s5ldc['indexOf']('http://') != -0x1 || s5ldc['indexOf']('https://') != -0x1) wr2na['downImg'](s5ldc, new i$eyo($6ie8, $6ie8['onDownImgCallBack'], [s5ldc, sf3tj]), s5ldc);else $6ie8['onCreateImage'](s5ldc, sf3tj, !![]);
      } else $6ie8['onCreateImage'](s5ldc, sf3tj, !prw4);
    }, $6ie8['onDownImgCallBack'] = function (t5j1s, t7f3j1, i6k$ye) {
      if (!i6k$ye) $6ie8['onCreateImage'](t5j1s, t7f3j1);else t7f3j1['onError'](null);
    }, $6ie8['onCreateImage'] = function (ozqyb9, dsmc5l, dtc1s5) {
      dtc1s5 === void 0x0 && (dtc1s5 = ![]);var boyi9;if (!dtc1s5) {
        var g0 = wr2na['getFileInfo'](ozqyb9),
            bozy9q = g0['md5'];boyi9 = wr2na['getFileNativePath'](bozy9q);
      } else boyi9 = ozqyb9;if (dsmc5l['imgCache'] == null) dsmc5l['imgCache'] = {};var eyoib9;function _gh08v() {
        eyoib9['onload'] = null, eyoib9['onerror'] = null, delete dsmc5l['imgCache'][ozqyb9];
      };var k6$h80 = function () {
        _gh08v(), dsmc5l['onLoaded'](eyoib9);
      },
          cftsj1 = function () {
        _gh08v(), dsmc5l['event']('error', 'Load image failed');
      };dsmc5l['_type'] == 'nativeimage' ? (eyoib9 = new prawn4['window']['Image'](), eyoib9['crossOrigin'] = '', eyoib9['onload'] = k6$h80, eyoib9['onerror'] = cftsj1, eyoib9['src'] = boyi9, dsmc5l['imgCache'][ozqyb9] = eyoib9) : new rawp74['create'](boyi9, { 'onload': k6$h80, 'onerror': cftsj1, 'onCreate': function (sj1tcf) {
          eyoib9 = sj1tcf, dsmc5l['imgCache'][ozqyb9] = sj1tcf;
        } });
    }, $6ie8;
  }(),
      wn2vx = function () {
    function k8he6() {}return vw2nrx(k8he6, 'laya.wx.mini.MiniInput'), k8he6['_createInputElement'] = function () {
      $ek86['_initInput']($ek86['area'] = prawn4['createElement']('textarea')), $ek86['_initInput']($ek86['input'] = prawn4['createElement']('input')), $ek86['inputContainer'] = prawn4['createElement']('div'), $ek86['inputContainer']['style']['position'] = 'absolute', $ek86['inputContainer']['style']['zIndex'] = 0x186a0, prawn4['container']['appendChild']($ek86['inputContainer']), $ek86['inputContainer']['setPos'] = function (rwpx2, qoz9yb) {
        $ek86['inputContainer']['style']['left'] = rwpx2 + 'px', $ek86['inputContainer']['style']['top'] = qoz9yb + 'px';
      }, yik6$e['stage']['on']('resize', null, k8he6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ek$h86) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), eik['_soundClass'] = b9zio, eik['_musicClass'] = b9zio;
    }, k8he6['_onStageResize'] = function () {
      var x_g2v0 = yik6$e['stage']['_canvasTransform']['identity']();x_g2v0['scale'](prawn4['width'] / i6yk$['canvas']['width'] / wrnx2p['getPixelRatio'](), prawn4['height'] / i6yk$['canvas']['height'] / wrnx2p['getPixelRatio']());
    }, k8he6['wxinputFocus'] = function (izoby) {
      var ey9b = $ek86['inputElement']['target'];if (ey9b && !ey9b['editable']) return;nx_v2g['window']['wx']['offKeyboardConfirm'](), nx_v2g['window']['wx']['offKeyboardInput'](), nx_v2g['window']['wx']['showKeyboard']({ 'defaultValue': ey9b['text'], 'maxLength': ey9b['maxChars'], 'multiple': ey9b['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function ($6bey) {}, 'fail': function (msc5l) {} }), nx_v2g['window']['wx']['onKeyboardConfirm'](function (x2rnp) {
        var _8kg0h = x2rnp ? x2rnp['value'] : '';ey9b['text'] = _8kg0h, ey9b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nx_v2g['window']['wx']['onKeyboardInput'](function (yio9z) {
        var ehk$68 = yio9z ? yio9z['value'] : '';if (!ey9b['multiline']) {
          if (ehk$68['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ey9b['text'] = ehk$68, ey9b['event']('input');
      });
    }, k8he6['inputEnter'] = function () {
      $ek86['inputElement']['target']['focus'] = ![];
    }, k8he6['wxinputblur'] = function () {
      k8he6['hideKeyboard']();
    }, k8he6['hideKeyboard'] = function () {
      nx_v2g['window']['wx']['offKeyboardConfirm'](), nx_v2g['window']['wx']['offKeyboardInput'](), nx_v2g['window']['wx']['hideKeyboard']({ 'success': function (g68hk0) {
          console['log']('隐藏键盘');
        }, 'fail': function (nw2pxr) {
          console['log']('隐藏键盘出错:' + (nw2pxr ? nw2pxr['errMsg'] : ''));
        } });
    }, k8he6;
  }(),
      r2wpa = function () {
    function f43ap() {}vw2nrx(f43ap, 'laya.wx.mini.MiniLoader');var ibo9 = f43ap['prototype'];return ibo9['load'] = function (eb$6, cds5lm, beoiy9, ra74wp, h8$e6) {
      beoiy9 === void 0x0 && (beoiy9 = !![]), h8$e6 === void 0x0 && (h8$e6 = ![]);var e$6h8k = this;e$6h8k['_url'] = eb$6;if (eb$6['indexOf']('data:image') === 0x0) e$6h8k['_type'] = cds5lm = 'image';else e$6h8k['_type'] = cds5lm || (cds5lm = e$6h8k['getTypeFromUrl'](eb$6));e$6h8k['_cache'] = beoiy9, e$6h8k['_data'] = null;var $8ike6 = 'ascii';if (eb$6['indexOf']('.fnt') != -0x1) $8ike6 = 'utf8';else cds5lm == 'arraybuffer' && ($8ike6 = '');;var xwrv2 = mc5dsl['getFileExtension'](eb$6);if (f43ap['_fileTypeArr']['indexOf'](xwrv2) != -0x1) nx_v2g['EnvConfig']['load']['call'](this, eb$6, cds5lm, beoiy9, ra74wp, h8$e6);else {
        if (!wr2na['getFileInfo'](eb$6)) {
          if (eb$6['indexOf']('layaNativeDir/') != -0x1) {
            if (nx_v2g['isZiYu']) {
              var cmd51 = wr2na['ziyuFileData'][eb$6];e$6h8k['onLoaded'](cmd51);return;
            } else {
              cosnole['log']('read read'), wr2na['read'](eb$6, $8ike6, new i$eyo(f43ap, f43ap['onReadNativeCallBack'], [$8ike6, eb$6, cds5lm, beoiy9, ra74wp, h8$e6, e$6h8k]));return;
            }
          }if (ki6$['rootPath'] == '') var js3f1 = eb$6;else js3f1 = eb$6['split'](ki6$['rootPath'])[0x0];eb$6['indexOf']('http://') != -0x1 || eb$6['indexOf']('https://') != -0x1 ? nx_v2g['EnvConfig']['load']['call'](e$6h8k, eb$6, cds5lm, beoiy9, ra74wp, h8$e6) : wr2na['readFile'](js3f1, $8ike6, new i$eyo(f43ap, f43ap['onReadNativeCallBack'], [$8ike6, eb$6, cds5lm, beoiy9, ra74wp, h8$e6, e$6h8k]), eb$6);
        } else nx_v2g['EnvConfig']['load']['call'](this, eb$6, cds5lm, beoiy9, ra74wp, h8$e6);
      }
    }, ibo9['resMgrLoad'] = function (cjs51, oy$ib, k6e$8i, vxg20_, gv_20, _h08, boyqz9) {
      k6e$8i === void 0x0 && (k6e$8i = 0x0), vxg20_ === void 0x0 && (vxg20_ = ![]), gv_20 === void 0x0 && (gv_20 = ![]), _h08 === void 0x0 && (_h08 = 0x0), boyqz9 === void 0x0 && (boyqz9 = 0x3), cjs51['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', cjs51), nx_v2g['EnvConfig']['resMgrLoad'](cjs51, (paw4r, hg0x_v, h8_g0) => {
        f43ap['prototype']['resMgrLoadCallBack'](paw4r, hg0x_v, h8_g0, oy$ib);
      }, k6e$8i, vxg20_, gv_20, _h08, boyqz9);
    }, ibo9['resMgrLoadCallBack'] = function (ek8i$, c5t1, k6e8$h, d5tc1s) {
      console['log']('buff:::', ek8i$, k6e8$h, wr2na['fileNativeDir'] + '///' + wr2na['fileListName']), d5tc1s(ek8i$, c5t1, k6e8$h);
    }, ibo9['clearRes'] = function (jt1cs, v80g_h) {
      v80g_h === void 0x0 && (v80g_h = ![]);var nvxwr2 = this;nvxwr2['clearRes'](jt1cs, v80g_h);var p7f3a = wr2na['getFileInfo'](jt1cs);if (p7f3a && (jt1cs['indexOf']('http://') != -0x1 || jt1cs['indexOf']('https://') != -0x1)) {
        var e$86k = p7f3a['md5'],
            gv2xn = wr2na['getFileNativePath'](e$86k);wr2na['remove'](gv2xn);
      }
    }, f43ap['onReadNativeCallBack'] = function (jt71f3, k6g0h8, i$6e8k, n2vw, zb9iy, y9ib, f7ap3, hg0_, prw4a) {
      n2vw === void 0x0 && (n2vw = !![]), y9ib === void 0x0 && (y9ib = ![]), hg0_ === void 0x0 && (hg0_ = 0x0);if (!hg0_) {
        var xv_nr2;if (i$6e8k == 'json' || i$6e8k == 'atlas') xv_nr2 = nx_v2g['getJson'](prw4a['data']);else i$6e8k == 'xml' ? xv_nr2 = mc5dsl['parseXMLFromString'](prw4a['data']) : xv_nr2 = prw4a['data'];f7ap3['onLoaded'](xv_nr2), !nx_v2g['isZiYu'] && nx_v2g['isPosMsgYu'] && i$6e8k != 'arraybuffer' && wx['postMessage']({ 'url': k6g0h8, 'data': xv_nr2, 'isLoad': !![] });
      } else hg0_ == 0x1 && nx_v2g['EnvConfig']['load']['call'](f7ap3, k6g0h8, i$6e8k, n2vw, zb9iy, y9ib);
    }, xhg_v(f43ap, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), f43ap;
  }(),
      wr2na = function (p34aw) {
    function oieby() {
      oieby['__super']['call'](this);;
    }return vw2nrx(oieby, 'laya.wx.mini.MiniFileMgr', p34aw), oieby['isLoadFile'] = function (c5j1) {
      return oieby['_fileTypeArr']['indexOf'](c5j1) != -0x1 ? !![] : ![];
    }, oieby['getFileInfo'] = function (wnvxr) {
      var tfjs = wnvxr['split']('?')[0x0],
          nw2 = oieby['filesListObj'][tfjs];if (nw2 == null) return null;else return nw2;return null;
    }, oieby['onFileUpdate'] = function (a4f7j3, x_r2vn) {
      var hg608k = a4f7j3['split']('/'),
          kg068h = hg608k[hg608k['length'] - 0x1],
          sfj1t3 = oieby['getFileInfo'](x_r2vn);if (sfj1t3 == null) oieby['onSaveFile'](x_r2vn, kg068h);else {
        if (sfj1t3['readyUrl'] != x_r2vn) oieby['remove'](kg068h, x_r2vn);
      }
    }, oieby['exits'] = function (vr, pw2a) {
      var _8kh = oieby['getFileNativePath'](vr);oieby['fs']['getFileInfo']({ 'filePath': _8kh, 'success': function (o9yqb) {
          pw2a != null && pw2a['runWith']([0x0, o9yqb]);
        }, 'fail': function (k$h8e6) {
          pw2a != null && pw2a['runWith']([0x1, k$h8e6]);
        } });
    }, oieby['read'] = function (t1sj, nar2, $eh6k, b9zyqo) {
      nar2 === void 0x0 && (nar2 = 'ascill'), b9zyqo === void 0x0 && (b9zyqo = '');var ap4nw;b9zyqo != '' ? ap4nw = oieby['getFileNativePath'](t1sj) : ap4nw = t1sj, oieby['fs']['readFile']({ 'filePath': ap4nw, 'encoding': nar2, 'success': function (p7fa) {
          $eh6k != null && $eh6k['runWith']([0x0, p7fa]);
        }, 'fail': function (tj5sc1) {
          if (tj5sc1 && b9zyqo != '') oieby['down'](b9zyqo, nar2, $eh6k, b9zyqo);else $eh6k != null && $eh6k['runWith']([0x1]);
        } });
    }, oieby['readNativeFile'] = function (p4wr, v0_8gh) {
      oieby['fs']['readFile']({ 'filePath': p4wr, 'encoding': '', 'success': function (ftjs31) {
          v0_8gh != null && v0_8gh['runWith']([0x0]);
        }, 'fail': function (vrx_n) {
          v0_8gh != null && v0_8gh['runWith']([0x1]);
        } });
    }, oieby['down'] = function (j5stc, iyeob$, aj34f7, npr4) {
      iyeob$ === void 0x0 && (iyeob$ = 'ascill'), npr4 === void 0x0 && (npr4 = '');var aw4rpn = oieby['getFileNativePath'](npr4),
          k0$ = oieby['wxdown']({ 'url': j5stc, 'filePath': aw4rpn, 'success': function (_8hgv0) {
          if (_8hgv0['statusCode'] === 0xc8) oieby['readFile'](_8hgv0['filePath'], iyeob$, aj34f7, npr4);
        }, 'fail': function (g0_2x) {
          aj34f7 != null && aj34f7['runWith']([0x1, g0_2x]);
        } });k0$['onProgressUpdate'](function (byei$o) {
        aj34f7 != null && aj34f7['runWith']([0x2, byei$o['progress']]);
      });
    }, oieby['readFile'] = function (dsml5, e$6b, $iboe, b$6ey) {
      e$6b === void 0x0 && (e$6b = 'ascill'), b$6ey === void 0x0 && (b$6ey = ''), oieby['fs']['readFile']({ 'filePath': dsml5, 'encoding': e$6b, 'success': function (wap347) {
          if (dsml5['indexOf']('http://') != -0x1 || dsml5['indexOf']('https://') != -0x1) oieby['onFileUpdate'](dsml5, b$6ey);$iboe != null && $iboe['runWith']([0x0, wap347]);
        }, 'fail': function (xwvn) {
          if (xwvn) $iboe != null && $iboe['runWith']([0x1, xwvn]);
        } });
    }, oieby['downImg'] = function (g80kh_, oiy9, yie$ob) {
      yie$ob === void 0x0 && (yie$ob = '');var _2gxvn = oieby['wxdown']({ 'url': g80kh_, 'success': function (vgh80) {
          vgh80['statusCode'] === 0xc8 && oieby['copyFile'](vgh80['tempFilePath'], yie$ob, oiy9);
        }, 'fail': function (bye9oi) {
          oiy9 != null && oiy9['runWith']([0x1, bye9oi]);
        } });
    }, oieby['copyFile'] = function (byozi, j3a47f, zo9yib) {
      var byoi9e = byozi['split']('/'),
          rwnpx = byoi9e[byoi9e['length'] - 0x1],
          h6k80g = j3a47f['split']('?')[0x0],
          cts1f = oieby['getFileInfo'](j3a47f),
          yz9bq = oieby['getFileNativePath'](rwnpx);oieby['fs']['copyFile']({ 'srcPath': byozi, 'destPath': yz9bq, 'success': function (k$i8e) {
          if (!cts1f) oieby['onSaveFile'](j3a47f, rwnpx), zo9yib != null && zo9yib['runWith']([0x0]);else {
            if (cts1f['readyUrl'] != j3a47f) oieby['remove'](rwnpx, j3a47f, zo9yib);
          }
        }, 'fail': function (fj1tcs) {
          zo9yib != null && zo9yib['runWith']([0x1, fj1tcs]);
        } });
    }, oieby['getFileNativePath'] = function (o9qybz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o9qybz;
    }, oieby['remove'] = function (oy$eib, j7af34, _2xnv) {
      j7af34 === void 0x0 && (j7af34 = '');var yib6e = oieby['getFileInfo'](j7af34),
          e$6iyk = oieby['getFileNativePath'](yib6e['md5']);yik6$e['loader']['clearRes'](yib6e['readyUrl']), oieby['fs']['unlink']({ 'filePath': e$6iyk, 'success': function (nrx_) {
          if (j7af34 != '') oieby['onSaveFile'](j7af34, oy$eib);_2xnv != null && _2xnv['runWith']([0x0]);
        }, 'fail': function (nrwa2p) {} });
    }, oieby['onSaveFile'] = function ($ek8h, bei$y6) {
      var _ghv80 = $ek8h['split']('?')[0x0];oieby['filesListObj'][_ghv80] = { 'md5': bei$y6, 'readyUrl': $ek8h }, oieby['fs']['writeFile']({ 'filePath': oieby['fileNativeDir'] + '/' + oieby['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](oieby['filesListObj']), 'success': function (f13jts) {
          console['log']('写入测试测试成功：', f13jts);
        }, 'fail': function (p2rwa) {
          console['log']('写入测试测试失败：', p2rwa);
        } });
    }, oieby['existDir'] = function (p43a7w, _8hkg0) {
      oieby['fs']['mkdir']({ 'dirPath': p43a7w, 'success': function (fa74p) {
          _8hkg0 != null && _8hkg0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (h$e8) {
          if (h$e8['errMsg']['indexOf']('file already exists') != -0x1) oieby['readSync'](oieby['fileListName'], 'utf8', _8hkg0);else _8hkg0 != null && _8hkg0['runWith']([0x1, h$e8]);
        } });
    }, oieby['readSync'] = function (d5mls, eyib$o, nw2xp, ib6$y) {
      eyib$o === void 0x0 && (eyib$o = 'ascill'), ib6$y === void 0x0 && (ib6$y = '');var oibz9y = oieby['getFileNativePath'](d5mls),
          w4rpn;try {
        w4rpn = oieby['fs']['readFileSync'](oibz9y), nw2xp != null && nw2xp['runWith']([0x0, { 'data': w4rpn }]);
      } catch (beo$yi) {
        nw2xp != null && nw2xp['runWith']([0x1]);
      }
    }, oieby['readCache'] = function () {}, oieby['writeCache'] = function (z9iyo) {
      var gv0h_x = readyUrl['split']('?')[0x0];oieby['filesListObj'][gv0h_x] = { 'md5': md5Name, 'readyUrl': readyUrl }, oieby['fs']['writeFile']({ 'filePath': oieby['fileNativeDir'] + '/' + oieby['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](oieby['filesListObj']), 'success': function (v0_xgh) {}, 'fail': function (pan4r) {} });
    }, oieby['setNativeFileDir'] = function (lm5csd) {
      oieby['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lm5csd;
    }, oieby['filesListObj'] = {}, oieby['fileNativeDir'] = null, oieby['fileListName'] = 'layaairfiles.txt', oieby['ziyuFileData'] = {}, xhg_v(oieby, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), oieby;
  }(cmld5),
      b9zio = function (h8k$) {
    function bziy9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], bziy9['__super']['call'](this), this['_sound'] = bziy9['_createSound']();
    }vw2nrx(bziy9, 'laya.wx.mini.MiniSound', h8k$);var sd15c = bziy9['prototype'];return sd15c['load'] = function (gv8_0h) {
      var d5ts = this;gv8_0h = ki6$['formatURL'](gv8_0h), this['url'] = gv8_0h;if (bziy9['_audioCache'][gv8_0h]) {
        this['event']('complete');return;
      }function aw374() {
        if (bziy9['_null'] != undefined) d5ts['_sound']['onCanplay'](bziy9['_null']), d5ts['_sound']['onError'](bziy9['_null']);else try {
          d5ts['_sound']['onCanplay'](null), d5ts['_sound']['onError'](null), bziy9['_null'] = null;
        } catch (oybie) {
          console['warn']('[wxmini] _clearSound:' + oybie), d5ts['_sound']['onCanplay'](_8h), d5ts['_sound']['onError'](_8h), bziy9['_null'] = _8h;
        }
      }function sj15ct() {
        aw374(), n2_vxr['loaded'] = !![], n2_vxr['event']('complete'), bziy9['_audioCache'][n2_vxr['url']] = n2_vxr;
      }function v_rn2x(l5sdc) {
        console['error']('errCode=' + l5sdc['errCode'] + '  errMsg=' + l5sdc['errMsg']), aw374(), n2_vxr['event']('error');
      }function _8h() {}this['_sound']['onCanplay'](sj15ct), this['_sound']['onError'](v_rn2x), this['_sound']['src'] = gv8_0h;var n2_vxr = this;
    }, sd15c['play'] = function (npw, nra2w) {
      npw === void 0x0 && (npw = 0x0), nra2w === void 0x0 && (nra2w = 0x0);var wp4r7a;if (this['url'] == eik['_tMusic']) {
        if (!bziy9['_musicAudio']) bziy9['_musicAudio'] = bziy9['_createSound']();wp4r7a = bziy9['_musicAudio'];
      } else wp4r7a = bziy9['_createSound']();wp4r7a['src'] = this['url'];var f13s = new q9ozb(wp4r7a);return f13s['url'] = this['url'], f13s['loops'] = nra2w, f13s['startTime'] = npw, f13s['play'](), eik['addChannel'](f13s), f13s;
    }, sd15c['dispose'] = function () {
      var r2pwna = bziy9['_audioCache'][this['url']];r2pwna && (r2pwna['src'] = '', delete bziy9['_audioCache'][this['url']]);
    }, xwv(0x0, sd15c, 'duration', function () {
      return this['_sound']['duration'];
    }), bziy9['_createSound'] = function () {
      return bziy9['_id']++, nx_v2g['window']['wx']['createInnerAudioContext']();
    }, bziy9['_musicAudio'] = null, bziy9['_id'] = 0x0, bziy9['_audioCache'] = {}, bziy9['_null'] = undefined, bziy9;
  }(cmld5),
      q9ozb = function (ye6$ib) {
    function yizob9($68eh) {
      this['_audio'] = null, this['_onEnd'] = null, yizob9['__super']['call'](this), this['_audio'] = $68eh, this['_onEnd'] = mc5dsl['bind'](this['__onEnd'], this), $68eh['onEnded'](this['_onEnd']);
    }vw2nrx(yizob9, 'laya.wx.mini.MiniSoundChannel', ye6$ib);var v_hg80 = yizob9['prototype'];return v_hg80['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (yik6$e['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, v_hg80['__onNull'] = function () {}, v_hg80['play'] = function () {
      this['isStopped'] = ![], eik['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, v_hg80['stop'] = function () {
      this['isStopped'] = !![], eik['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (yizob9['_null'] != undefined) this['_audio']['onEnded'](yizob9['_null']);else try {
        this['_audio']['onEnded'](null), yizob9['_null'] = null;
      } catch (ftscj1) {
        console['warn']('[wxmini] stop:' + ftscj1), this['_audio']['onEnded'](mc5dsl['bind'](this['__onNull'], this)), yizob9['_null'] = mc5dsl['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, v_hg80['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, v_hg80['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], eik['addChannel'](this), this['_audio']['play']();
    }, xwv(0x0, v_hg80, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), xwv(0x0, v_hg80, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), xwv(0x0, v_hg80, 'volume', function () {
      return 0x1;
    }, function ($oi) {}), yizob9['_null'] = undefined, yizob9;
  }($6kyi);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var h60$k in Laya) {
    var wrvn2x = Laya[h60$k];wrvn2x && wrvn2x['__isclass'] && (exports[h60$k] = wrvn2x);
  }
});