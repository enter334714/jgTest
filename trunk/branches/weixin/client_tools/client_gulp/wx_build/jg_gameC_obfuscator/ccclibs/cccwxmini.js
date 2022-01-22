var p = wx.$h;
(function (window, document, x0_hgv) {
  var rn4paw = x0_hgv['un'],
      gn2x = x0_hgv['uns'],
      r_vx2 = x0_hgv['static'],
      ap7 = x0_hgv['class'],
      js1ft = x0_hgv['getset'],
      tjf17 = x0_hgv['__newvec'],
      ibey$ = laya['utils']['Browser'],
      wa347p = laya['events']['Event'],
      d5slm = laya['events']['EventDispatcher'],
      e8kh$ = laya['resource']['HTMLImage'],
      rawp7 = laya['utils']['Handler'],
      sd5 = laya['display']['Input'],
      $y6ek = laya['net']['Loader'],
      _g2xv0 = laya['maths']['Matrix'],
      ctfjs1 = laya['renders']['Render'],
      $6ieky = laya['utils']['RunDriver'],
      ioybe9 = laya['media']['Sound'],
      ra4p7w = laya['media']['SoundChannel'],
      pxwr2 = laya['media']['SoundManager'],
      _02xvg = laya['display']['Stage'],
      $6yike = laya['net']['URL'],
      $yeik = laya['utils']['Utils'],
      e$8hk6 = function () {
    function k6iye() {}return ap7(k6iye, 'laya.wx.mini.MiniAdpter'), k6iye['getJson'] = function (boqz9) {
      return JSON['parse'](boqz9);
    }, k6iye['init'] = function (y6ibe$, j3s1ft) {
      y6ibe$ === void 0x0 && (y6ibe$ = ![]), j3s1ft === void 0x0 && (j3s1ft = ![]);if (k6iye['_inited']) return;k6iye['window'] = window;if (k6iye['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;k6iye['_inited'] = !![], k6iye['isZiYu'] = j3s1ft, k6iye['isPosMsgYu'] = y6ibe$, k6iye['EnvConfig'] = {}, !k6iye['isZiYu'] && (bq9zyo['setNativeFileDir']('/layaairGame'), bq9zyo['existDir'](bq9zyo['fileNativeDir'], rawp7['create'](k6iye, k6iye['onMkdirCallBack']))), k6iye['window']['focus'] = function () {}, x0_hgv['getUrlPath'] = function () {}, k6iye['window']['logtime'] = function (rpn2) {}, k6iye['window']['alertTimeLog'] = function (k68eh) {}, k6iye['window']['resetShareInfo'] = function () {}, k6iye['window']['CanvasRenderingContext2D'] = function () {}, k6iye['window']['CanvasRenderingContext2D']['prototype'] = k6iye['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], k6iye['window']['document']['body']['appendChild'] = function () {}, k6iye['EnvConfig']['pixelRatioInt'] = 0x0, $6ieky['getPixelRatio'] = k6iye['pixelRatio'], k6iye['_preCreateElement'] = ibey$['createElement'], ibey$['createElement'] = k6iye['createElement'], $6ieky['createShaderCondition'] = k6iye['createShaderCondition'], $yeik['parseXMLFromString'] = k6iye['parseXMLFromString'], sd5['_createInputElement'] = wr7a4p['_createInputElement'], k6iye['EnvConfig']['load'] = $y6ek['prototype']['load'], $y6ek['prototype']['load'] = a4j73['prototype']['load'], k6iye['isZiYu'] && y6ibe$ && wx['onMessage'](function ($y6ike) {
        $y6ike['isLoad'] && (bq9zyo['ziyuFileData'][$y6ike['url']] = $y6ike['data']);
      });
    }, k6iye['onMkdirCallBack'] = function (p34w7a, byzoi9) {
      if (!p34w7a) bq9zyo['filesListObj'] = JSON['parse'](byzoi9['data']);
    }, k6iye['pixelRatio'] = function () {
      if (!k6iye['EnvConfig']['pixelRatioInt']) try {
        var p4ran = wx['getSystemInfoSync']();return k6iye['EnvConfig']['pixelRatioInt'] = p4ran['pixelRatio'], p4ran = p4ran, p4ran['pixelRatio'];
      } catch (ghx0_) {}return k6iye['EnvConfig']['pixelRatioInt'];
    }, k6iye['createElement'] = function (j4t73f) {
      if (j4t73f == 'canvas') {
        var ja37f4;return k6iye['idx'] == 0x1 ? k6iye['isZiYu'] ? (ja37f4 = sharedCanvas, ja37f4['style'] = {}) : ja37f4 = window['canvas'] : ja37f4 = window['wx']['createCanvas'](), k6iye['idx']++, ja37f4;
      } else {
        if (j4t73f == 'textarea' || j4t73f == 'input') return k6iye['onCreateInput'](j4t73f);else {
          if (j4t73f == 'div') {
            var tfs1j3 = k6iye['_preCreateElement'](j4t73f);return tfs1j3['contains'] = function (oy9ieb) {
              return null;
            }, tfs1j3['removeChild'] = function (hgx0_v) {}, tfs1j3;
          } else return k6iye['_preCreateElement'](j4t73f);
        }
      }
    }, k6iye['onCreateInput'] = function (pa4wr7) {
      var v2xnrw = k6iye['_preCreateElement'](pa4wr7);return v2xnrw['focus'] = wr7a4p['wxinputFocus'], v2xnrw['blur'] = wr7a4p['wxinputblur'], v2xnrw['style'] = {}, v2xnrw['value'] = 0x0, v2xnrw['parentElement'] = {}, v2xnrw['placeholder'] = {}, v2xnrw['type'] = {}, v2xnrw['setColor'] = function (tf1sc) {}, v2xnrw['setType'] = function (d15sc) {}, v2xnrw['setFontFace'] = function (ds51m) {}, v2xnrw['addEventListener'] = function (r47a) {}, v2xnrw['contains'] = function (y$ike) {
        return null;
      }, v2xnrw['removeChild'] = function (kh6e$) {}, v2xnrw;
    }, k6iye['createShaderCondition'] = function (f7a43p) {
      var p4aw73 = this,
          tf4j3 = function () {
        var v0_g2x = f7a43p;return p4aw73[f7a43p['replace']('this.', '')];
      };return tf4j3;
    }, k6iye['EnvConfig'] = null, k6iye['window'] = null, k6iye['_preCreateElement'] = null, k6iye['_inited'] = ![], k6iye['wxRequest'] = null, k6iye['systemInfo'] = null, k6iye['version'] = '0.0.1', k6iye['isZiYu'] = ![], k6iye['isPosMsgYu'] = ![], k6iye['parseXMLFromString'] = function (d51sct) {
      var eib$y6, b9yoz;d51sct = d51sct['replace'](/>\s+</g, '><');try {
        eib$y6 = new window['Parser']['DOMParser']()['parseFromString'](d51sct, 'text/xml');
      } catch (gh8_) {
        throw '需要引入xml解析库文件';
      }return eib$y6;
    }, k6iye['idx'] = 0x1, k6iye;
  }(),
      ozbi9y = function () {
    function cmsld5() {}ap7(cmsld5, 'laya.wx.mini.MiniImage');var gx_2 = cmsld5['prototype'];return gx_2['_loadImage'] = function (b6$y) {
      var t43f7 = this,
          ybi6e = ![];b6$y['indexOf']('layaNativeDir/') == -0x1 && (ybi6e = !![], b6$y = $6yike['formatURL'](b6$y));if (!bq9zyo['getFileInfo'](b6$y)) {
        if (b6$y['indexOf']('http://') != -0x1 || b6$y['indexOf']('https://') != -0x1) bq9zyo['downImg'](b6$y, new rawp7(cmsld5, cmsld5['onDownImgCallBack'], [b6$y, t43f7]), b6$y);else cmsld5['onCreateImage'](b6$y, t43f7, !![]);
      } else cmsld5['onCreateImage'](b6$y, t43f7, !ybi6e);
    }, cmsld5['onDownImgCallBack'] = function (hk0$68, v2xg_, $eky) {
      if (!$eky) cmsld5['onCreateImage'](hk0$68, v2xg_);else v2xg_['onError'](null);
    }, cmsld5['onCreateImage'] = function (h6k0, pr74aw, sc1jt) {
      sc1jt === void 0x0 && (sc1jt = ![]);var rnaw4;if (!sc1jt) {
        var g2v0 = bq9zyo['getFileInfo'](h6k0),
            apf743 = g2v0['md5'];rnaw4 = bq9zyo['getFileNativePath'](apf743);
      } else rnaw4 = h6k0;if (pr74aw['imgCache'] == null) pr74aw['imgCache'] = {};var ey6i$k;function v80_gh() {
        ey6i$k['onload'] = null, ey6i$k['onerror'] = null, delete pr74aw['imgCache'][h6k0];
      };var xwr2np = function () {
        v80_gh(), pr74aw['onLoaded'](ey6i$k);
      },
          mc = function () {
        v80_gh(), pr74aw['event']('error', 'Load image failed');
      };pr74aw['_type'] == 'nativeimage' ? (ey6i$k = new ibey$['window']['Image'](), ey6i$k['crossOrigin'] = '', ey6i$k['onload'] = xwr2np, ey6i$k['onerror'] = mc, ey6i$k['src'] = rnaw4, pr74aw['imgCache'][h6k0] = ey6i$k) : new e8kh$['create'](rnaw4, { 'onload': xwr2np, 'onerror': mc, 'onCreate': function (rwnp) {
          ey6i$k = rwnp, pr74aw['imgCache'][h6k0] = rwnp;
        } });
    }, cmsld5;
  }(),
      wr7a4p = function () {
    function v2x0_() {}return ap7(v2x0_, 'laya.wx.mini.MiniInput'), v2x0_['_createInputElement'] = function () {
      sd5['_initInput'](sd5['area'] = ibey$['createElement']('textarea')), sd5['_initInput'](sd5['input'] = ibey$['createElement']('input')), sd5['inputContainer'] = ibey$['createElement']('div'), sd5['inputContainer']['style']['position'] = 'absolute', sd5['inputContainer']['style']['zIndex'] = 0x186a0, ibey$['container']['appendChild'](sd5['inputContainer']), sd5['inputContainer']['setPos'] = function (tfs1cj, eboy$i) {
        sd5['inputContainer']['style']['left'] = tfs1cj + 'px', sd5['inputContainer']['style']['top'] = eboy$i + 'px';
      }, x0_hgv['stage']['on']('resize', null, v2x0_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f1c) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pxwr2['_soundClass'] = cdts1, pxwr2['_musicClass'] = cdts1;
    }, v2x0_['_onStageResize'] = function () {
      var ar4nw = x0_hgv['stage']['_canvasTransform']['identity']();ar4nw['scale'](ibey$['width'] / ctfjs1['canvas']['width'] / $6ieky['getPixelRatio'](), ibey$['height'] / ctfjs1['canvas']['height'] / $6ieky['getPixelRatio']());
    }, v2x0_['wxinputFocus'] = function (p4w73a) {
      var gxn_v = sd5['inputElement']['target'];if (gxn_v && !gxn_v['editable']) return;e$8hk6['window']['wx']['offKeyboardConfirm'](), e$8hk6['window']['wx']['offKeyboardInput'](), e$8hk6['window']['wx']['showKeyboard']({ 'defaultValue': gxn_v['text'], 'maxLength': gxn_v['maxChars'], 'multiple': gxn_v['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (csdl5) {}, 'fail': function (fsj1t3) {} }), e$8hk6['window']['wx']['onKeyboardConfirm'](function (oiy9b) {
        var npa2r = oiy9b ? oiy9b['value'] : '';gxn_v['text'] = npa2r, gxn_v['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), e$8hk6['window']['wx']['onKeyboardInput'](function (p4wna) {
        var hg_0k8 = p4wna ? p4wna['value'] : '';if (!gxn_v['multiline']) {
          if (hg_0k8['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gxn_v['text'] = hg_0k8, gxn_v['event']('input');
      });
    }, v2x0_['inputEnter'] = function () {
      sd5['inputElement']['target']['focus'] = ![];
    }, v2x0_['wxinputblur'] = function () {
      v2x0_['hideKeyboard']();
    }, v2x0_['hideKeyboard'] = function () {
      e$8hk6['window']['wx']['offKeyboardConfirm'](), e$8hk6['window']['wx']['offKeyboardInput'](), e$8hk6['window']['wx']['hideKeyboard']({ 'success': function (dsct51) {
          console['log']('隐藏键盘');
        }, 'fail': function (zo9q) {
          console['log']('隐藏键盘出错:' + (zo9q ? zo9q['errMsg'] : ''));
        } });
    }, v2x0_;
  }(),
      a4j73 = function () {
    function cts5j() {}ap7(cts5j, 'laya.wx.mini.MiniLoader');var $yiob = cts5j['prototype'];return $yiob['load'] = function (nr2a, ei$yb6, l5cs, byei$, a4pf73) {
      l5cs === void 0x0 && (l5cs = !![]), a4pf73 === void 0x0 && (a4pf73 = ![]);var rxvw = this;rxvw['_url'] = nr2a;if (nr2a['indexOf']('data:image') === 0x0) rxvw['_type'] = ei$yb6 = 'image';else rxvw['_type'] = ei$yb6 || (ei$yb6 = rxvw['getTypeFromUrl'](nr2a));rxvw['_cache'] = l5cs, rxvw['_data'] = null;var yo$i = 'ascii';if (nr2a['indexOf']('.fnt') != -0x1) yo$i = 'utf8';else ei$yb6 == 'arraybuffer' && (yo$i = '');;var h0g8k6 = $yeik['getFileExtension'](nr2a);if (cts5j['_fileTypeArr']['indexOf'](h0g8k6) != -0x1) e$8hk6['EnvConfig']['load']['call'](this, nr2a, ei$yb6, l5cs, byei$, a4pf73);else {
        if (!bq9zyo['getFileInfo'](nr2a)) {
          if (nr2a['indexOf']('layaNativeDir/') != -0x1) {
            if (e$8hk6['isZiYu']) {
              var e6$8k = bq9zyo['ziyuFileData'][nr2a];rxvw['onLoaded'](e6$8k);return;
            } else {
              cosnole['log']('read read'), bq9zyo['read'](nr2a, yo$i, new rawp7(cts5j, cts5j['onReadNativeCallBack'], [yo$i, nr2a, ei$yb6, l5cs, byei$, a4pf73, rxvw]));return;
            }
          }if ($6yike['rootPath'] == '') var npw2ar = nr2a;else npw2ar = nr2a['split']($6yike['rootPath'])[0x0];nr2a['indexOf']('http://') != -0x1 || nr2a['indexOf']('https://') != -0x1 ? e$8hk6['EnvConfig']['load']['call'](rxvw, nr2a, ei$yb6, l5cs, byei$, a4pf73) : bq9zyo['readFile'](npw2ar, yo$i, new rawp7(cts5j, cts5j['onReadNativeCallBack'], [yo$i, nr2a, ei$yb6, l5cs, byei$, a4pf73, rxvw]), nr2a);
        } else e$8hk6['EnvConfig']['load']['call'](this, nr2a, ei$yb6, l5cs, byei$, a4pf73);
      }
    }, $yiob['resMgrLoad'] = function (e8$6k, ldmsc5, n2xvr, k$8i6, p43aw, a73, f74p) {
      n2xvr === void 0x0 && (n2xvr = 0x0), k$8i6 === void 0x0 && (k$8i6 = ![]), p43aw === void 0x0 && (p43aw = ![]), a73 === void 0x0 && (a73 = 0x0), f74p === void 0x0 && (f74p = 0x3), e8$6k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e8$6k), e$8hk6['EnvConfig']['resMgrLoad'](e8$6k, (iek$y, vh8g_0, cdslm) => {
        cts5j['prototype']['resMgrLoadCallBack'](iek$y, vh8g_0, cdslm, ldmsc5);
      }, n2xvr, k$8i6, p43aw, a73, f74p);
    }, $yiob['resMgrLoadCallBack'] = function (tj5, csfjt, f7a4p3, tj7f13) {
      console['log']('buff:::', tj5, f7a4p3, bq9zyo['fileNativeDir'] + '///' + bq9zyo['fileListName']), tj7f13(tj5, csfjt, f7a4p3);
    }, $yiob['clearRes'] = function (j374t, xv_gn) {
      xv_gn === void 0x0 && (xv_gn = ![]);var td51sc = this;td51sc['clearRes'](j374t, xv_gn);var nx2rv = bq9zyo['getFileInfo'](j374t);if (nx2rv && (j374t['indexOf']('http://') != -0x1 || j374t['indexOf']('https://') != -0x1)) {
        var kh$86e = nx2rv['md5'],
            vhx_0g = bq9zyo['getFileNativePath'](kh$86e);bq9zyo['remove'](vhx_0g);
      }
    }, cts5j['onReadNativeCallBack'] = function (mcsdl5, e8k6, yb$eo, g_v8, g_x20v, g0_vx, g80k6h, _2vxgn, xg_0) {
      g_v8 === void 0x0 && (g_v8 = !![]), g0_vx === void 0x0 && (g0_vx = ![]), _2vxgn === void 0x0 && (_2vxgn = 0x0);if (!_2vxgn) {
        var a347p;if (yb$eo == 'json' || yb$eo == 'atlas') a347p = e$8hk6['getJson'](xg_0['data']);else yb$eo == 'xml' ? a347p = $yeik['parseXMLFromString'](xg_0['data']) : a347p = xg_0['data'];g80k6h['onLoaded'](a347p), !e$8hk6['isZiYu'] && e$8hk6['isPosMsgYu'] && yb$eo != 'arraybuffer' && wx['postMessage']({ 'url': e8k6, 'data': a347p, 'isLoad': !![] });
      } else _2vxgn == 0x1 && e$8hk6['EnvConfig']['load']['call'](g80k6h, e8k6, yb$eo, g_v8, g_x20v, g0_vx);
    }, r_vx2(cts5j, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), cts5j;
  }(),
      bq9zyo = function (byozi9) {
    function $kh8e() {
      $kh8e['__super']['call'](this);;
    }return ap7($kh8e, 'laya.wx.mini.MiniFileMgr', byozi9), $kh8e['isLoadFile'] = function (prn2wa) {
      return $kh8e['_fileTypeArr']['indexOf'](prn2wa) != -0x1 ? !![] : ![];
    }, $kh8e['getFileInfo'] = function (vgh_0x) {
      var gh068 = vgh_0x['split']('?')[0x0],
          oyibe9 = $kh8e['filesListObj'][gh068];if (oyibe9 == null) return null;else return oyibe9;return null;
    }, $kh8e['onFileUpdate'] = function (iby6, slcd) {
      var hvg0_8 = iby6['split']('/'),
          $keh6 = hvg0_8[hvg0_8['length'] - 0x1],
          by9e = $kh8e['getFileInfo'](slcd);if (by9e == null) $kh8e['onSaveFile'](slcd, $keh6);else {
        if (by9e['readyUrl'] != slcd) $kh8e['remove']($keh6, slcd);
      }
    }, $kh8e['exits'] = function (i6y$b, tfs1) {
      var k$ = $kh8e['getFileNativePath'](i6y$b);$kh8e['fs']['getFileInfo']({ 'filePath': k$, 'success': function (_kgh08) {
          tfs1 != null && tfs1['runWith']([0x0, _kgh08]);
        }, 'fail': function (xvnw) {
          tfs1 != null && tfs1['runWith']([0x1, xvnw]);
        } });
    }, $kh8e['read'] = function (z9bio, p4a37w, nprw2, _0vgh) {
      p4a37w === void 0x0 && (p4a37w = 'ascill'), _0vgh === void 0x0 && (_0vgh = '');var _h8k0g;_0vgh != '' ? _h8k0g = $kh8e['getFileNativePath'](z9bio) : _h8k0g = z9bio, $kh8e['fs']['readFile']({ 'filePath': _h8k0g, 'encoding': p4a37w, 'success': function (c5std) {
          nprw2 != null && nprw2['runWith']([0x0, c5std]);
        }, 'fail': function (g0_8k) {
          if (g0_8k && _0vgh != '') $kh8e['down'](_0vgh, p4a37w, nprw2, _0vgh);else nprw2 != null && nprw2['runWith']([0x1]);
        } });
    }, $kh8e['readNativeFile'] = function (v08g_h, _ng2v) {
      $kh8e['fs']['readFile']({ 'filePath': v08g_h, 'encoding': '', 'success': function (rvn2_x) {
          _ng2v != null && _ng2v['runWith']([0x0]);
        }, 'fail': function (ey$i6k) {
          _ng2v != null && _ng2v['runWith']([0x1]);
        } });
    }, $kh8e['down'] = function (yibo9z, $8k6he, d1cm5, y9zboi) {
      $8k6he === void 0x0 && ($8k6he = 'ascill'), y9zboi === void 0x0 && (y9zboi = '');var arwn2p = $kh8e['getFileNativePath'](y9zboi),
          stjf3 = $kh8e['wxdown']({ 'url': yibo9z, 'filePath': arwn2p, 'success': function (g86k0h) {
          if (g86k0h['statusCode'] === 0xc8) $kh8e['readFile'](g86k0h['filePath'], $8k6he, d1cm5, y9zboi);
        }, 'fail': function (a473w) {
          d1cm5 != null && d1cm5['runWith']([0x1, a473w]);
        } });stjf3['onProgressUpdate'](function (yzib) {
        d1cm5 != null && d1cm5['runWith']([0x2, yzib['progress']]);
      });
    }, $kh8e['readFile'] = function (mcdl5s, ftj1sc, j34fa, ar4w7p) {
      ftj1sc === void 0x0 && (ftj1sc = 'ascill'), ar4w7p === void 0x0 && (ar4w7p = ''), $kh8e['fs']['readFile']({ 'filePath': mcdl5s, 'encoding': ftj1sc, 'success': function (wrn2xp) {
          if (mcdl5s['indexOf']('http://') != -0x1 || mcdl5s['indexOf']('https://') != -0x1) $kh8e['onFileUpdate'](mcdl5s, ar4w7p);j34fa != null && j34fa['runWith']([0x0, wrn2xp]);
        }, 'fail': function (i9zbyo) {
          if (i9zbyo) j34fa != null && j34fa['runWith']([0x1, i9zbyo]);
        } });
    }, $kh8e['downImg'] = function (gvn_x, _k0g8h, e$yb6) {
      e$yb6 === void 0x0 && (e$yb6 = '');var n2vx_g = $kh8e['wxdown']({ 'url': gvn_x, 'success': function (a7p3w) {
          a7p3w['statusCode'] === 0xc8 && $kh8e['copyFile'](a7p3w['tempFilePath'], e$yb6, _k0g8h);
        }, 'fail': function (hxg0v) {
          _k0g8h != null && _k0g8h['runWith']([0x1, hxg0v]);
        } });
    }, $kh8e['copyFile'] = function (b$ei, i6bey$, f47t) {
      var gxv2n_ = b$ei['split']('/'),
          j3tfs1 = gxv2n_[gxv2n_['length'] - 0x1],
          $0hk86 = i6bey$['split']('?')[0x0],
          v0_g2 = $kh8e['getFileInfo'](i6bey$),
          xnpw = $kh8e['getFileNativePath'](j3tfs1);$kh8e['fs']['copyFile']({ 'srcPath': b$ei, 'destPath': xnpw, 'success': function (ki6ye$) {
          if (!v0_g2) $kh8e['onSaveFile'](i6bey$, j3tfs1), f47t != null && f47t['runWith']([0x0]);else {
            if (v0_g2['readyUrl'] != i6bey$) $kh8e['remove'](j3tfs1, i6bey$, f47t);
          }
        }, 'fail': function (iyob$) {
          f47t != null && f47t['runWith']([0x1, iyob$]);
        } });
    }, $kh8e['getFileNativePath'] = function (_0g8kh) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _0g8kh;
    }, $kh8e['remove'] = function (cld5, f13tjs, wn4pr) {
      f13tjs === void 0x0 && (f13tjs = '');var _hx0v = $kh8e['getFileInfo'](f13tjs),
          ik$8e = $kh8e['getFileNativePath'](_hx0v['md5']);x0_hgv['loader']['clearRes'](_hx0v['readyUrl']), $kh8e['fs']['unlink']({ 'filePath': ik$8e, 'success': function (o9zyi) {
          if (f13tjs != '') $kh8e['onSaveFile'](f13tjs, cld5);wn4pr != null && wn4pr['runWith']([0x0]);
        }, 'fail': function (wp4ar7) {} });
    }, $kh8e['onSaveFile'] = function (r4p7, c1jft) {
      var n_2xg = r4p7['split']('?')[0x0];$kh8e['filesListObj'][n_2xg] = { 'md5': c1jft, 'readyUrl': r4p7 }, $kh8e['fs']['writeFile']({ 'filePath': $kh8e['fileNativeDir'] + '/' + $kh8e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($kh8e['filesListObj']), 'success': function (tcfsj1) {
          console['log']('写入测试测试成功：', tcfsj1);
        }, 'fail': function (m5d1c) {
          console['log']('写入测试测试失败：', m5d1c);
        } });
    }, $kh8e['existDir'] = function (xgvn_, gx_) {
      $kh8e['fs']['mkdir']({ 'dirPath': xgvn_, 'success': function (c5mdl) {
          gx_ != null && gx_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (rapw7) {
          if (rapw7['errMsg']['indexOf']('file already exists') != -0x1) $kh8e['readSync']($kh8e['fileListName'], 'utf8', gx_);else gx_ != null && gx_['runWith']([0x1, rapw7]);
        } });
    }, $kh8e['readSync'] = function (x_0v, h86k$0, f37aj4, iyo9z) {
      h86k$0 === void 0x0 && (h86k$0 = 'ascill'), iyo9z === void 0x0 && (iyo9z = '');var tfj374 = $kh8e['getFileNativePath'](x_0v),
          oqbyz;try {
        oqbyz = $kh8e['fs']['readFileSync'](tfj374), f37aj4 != null && f37aj4['runWith']([0x0, { 'data': oqbyz }]);
      } catch (cmlds5) {
        f37aj4 != null && f37aj4['runWith']([0x1]);
      }
    }, $kh8e['readCache'] = function () {}, $kh8e['writeCache'] = function (sj51) {
      var d1s5ct = readyUrl['split']('?')[0x0];$kh8e['filesListObj'][d1s5ct] = { 'md5': md5Name, 'readyUrl': readyUrl }, $kh8e['fs']['writeFile']({ 'filePath': $kh8e['fileNativeDir'] + '/' + $kh8e['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($kh8e['filesListObj']), 'success': function (oeiby9) {}, 'fail': function (t51js) {} });
    }, $kh8e['setNativeFileDir'] = function (xvg2_n) {
      $kh8e['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xvg2_n;
    }, $kh8e['filesListObj'] = {}, $kh8e['fileNativeDir'] = null, $kh8e['fileListName'] = 'layaairfiles.txt', $kh8e['ziyuFileData'] = {}, r_vx2($kh8e, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $kh8e;
  }(d5slm),
      cdts1 = function (pn2xr) {
    function oyeb9() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], oyeb9['__super']['call'](this), this['_sound'] = oyeb9['_createSound']();
    }ap7(oyeb9, 'laya.wx.mini.MiniSound', pn2xr);var sldcm = oyeb9['prototype'];return sldcm['load'] = function (jftcs1) {
      var ie$by6 = this;jftcs1 = $6yike['formatURL'](jftcs1), this['url'] = jftcs1;if (oyeb9['_audioCache'][jftcs1]) {
        this['event']('complete');return;
      }function eoyib() {
        if (oyeb9['_null'] != undefined) ie$by6['_sound']['onCanplay'](oyeb9['_null']), ie$by6['_sound']['onError'](oyeb9['_null']);else try {
          ie$by6['_sound']['onCanplay'](null), ie$by6['_sound']['onError'](null), oyeb9['_null'] = null;
        } catch (t3sf1) {
          console['warn']('[wxmini] _clearSound:' + t3sf1), ie$by6['_sound']['onCanplay'](tj1sf), ie$by6['_sound']['onError'](tj1sf), oyeb9['_null'] = tj1sf;
        }
      }function scm15d() {
        eoyib(), _2n['loaded'] = !![], _2n['event']('complete'), oyeb9['_audioCache'][_2n['url']] = _2n;
      }function j5ts1c(d1m) {
        console['error']('errCode=' + d1m['errCode'] + '  errMsg=' + d1m['errMsg']), eoyib(), _2n['event']('error');
      }function tj1sf() {}this['_sound']['onCanplay'](scm15d), this['_sound']['onError'](j5ts1c), this['_sound']['src'] = jftcs1;var _2n = this;
    }, sldcm['play'] = function (_v2g0x, be$6iy) {
      _v2g0x === void 0x0 && (_v2g0x = 0x0), be$6iy === void 0x0 && (be$6iy = 0x0);var k0hg6;if (this['url'] == pxwr2['_tMusic']) {
        if (!oyeb9['_musicAudio']) oyeb9['_musicAudio'] = oyeb9['_createSound']();k0hg6 = oyeb9['_musicAudio'];
      } else k0hg6 = oyeb9['_createSound']();k0hg6['src'] = this['url'];var h06 = new an4wrp(k0hg6);return h06['url'] = this['url'], h06['loops'] = be$6iy, h06['startTime'] = _v2g0x, h06['play'](), pxwr2['addChannel'](h06), h06;
    }, sldcm['dispose'] = function () {
      var kg_0h8 = oyeb9['_audioCache'][this['url']];kg_0h8 && (kg_0h8['src'] = '', delete oyeb9['_audioCache'][this['url']]);
    }, js1ft(0x0, sldcm, 'duration', function () {
      return this['_sound']['duration'];
    }), oyeb9['_createSound'] = function () {
      return oyeb9['_id']++, e$8hk6['window']['wx']['createInnerAudioContext']();
    }, oyeb9['_musicAudio'] = null, oyeb9['_id'] = 0x0, oyeb9['_audioCache'] = {}, oyeb9['_null'] = undefined, oyeb9;
  }(d5slm),
      an4wrp = function (s3tfj1) {
    function $io(mcdsl) {
      this['_audio'] = null, this['_onEnd'] = null, $io['__super']['call'](this), this['_audio'] = mcdsl, this['_onEnd'] = $yeik['bind'](this['__onEnd'], this), mcdsl['onEnded'](this['_onEnd']);
    }ap7($io, 'laya.wx.mini.MiniSoundChannel', s3tfj1);var j7ft4 = $io['prototype'];return j7ft4['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (x0_hgv['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, j7ft4['__onNull'] = function () {}, j7ft4['play'] = function () {
      this['isStopped'] = ![], pxwr2['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, j7ft4['stop'] = function () {
      this['isStopped'] = !![], pxwr2['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($io['_null'] != undefined) this['_audio']['onEnded']($io['_null']);else try {
        this['_audio']['onEnded'](null), $io['_null'] = null;
      } catch (zqy9b) {
        console['warn']('[wxmini] stop:' + zqy9b), this['_audio']['onEnded']($yeik['bind'](this['__onNull'], this)), $io['_null'] = $yeik['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, j7ft4['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, j7ft4['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pxwr2['addChannel'](this), this['_audio']['play']();
    }, js1ft(0x0, j7ft4, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), js1ft(0x0, j7ft4, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), js1ft(0x0, j7ft4, 'volume', function () {
      return 0x1;
    }, function (mcd) {}), $io['_null'] = undefined, $io;
  }(ra4p7w);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var t47jf in Laya) {
    var vw2xnr = Laya[t47jf];vw2xnr && vw2xnr['__isclass'] && (exports[t47jf] = vw2xnr);
  }
});