var H = wx.$F;
(function (window, document, m03bq) {
  var $m07bx = m03bq['un'],
      v7zn = m03bq['uns'],
      d4kps = m03bq['static'],
      pus9y = m03bq['class'],
      anz7 = m03bq['getset'],
      q0b3$m = m03bq['__newvec'],
      gch1lw = laya['utils']['Browser'],
      lsc4kd = laya['events']['Event'],
      ds4lc = laya['events']['EventDispatcher'],
      brq0m3 = laya['resource']['HTMLImage'],
      tjn5v8 = laya['utils']['Handler'],
      kdhlc = laya['display']['Input'],
      chkwl = laya['net']['Loader'],
      cl4hdk = laya['maths']['Matrix'],
      mbr = laya['renders']['Render'],
      n8v5j = laya['utils']['RunDriver'],
      cwkhl = laya['media']['Sound'],
      ax7z = laya['media']['SoundChannel'],
      e5j128 = laya['media']['SoundManager'],
      cw21gh = laya['display']['Stage'],
      xaz$7n = laya['net']['URL'],
      gcwlhk = laya['utils']['Utils'],
      hwkcl = function () {
    function w1gh() {}return pus9y(w1gh, 'laya.wx.mini.MiniAdpter'), w1gh['getJson'] = function (hlcgwk) {
      return JSON['parse'](hlcgwk);
    }, w1gh['init'] = function (pd9u4s, b0x$7m) {
      pd9u4s === void 0x0 && (pd9u4s = ![]), b0x$7m === void 0x0 && (b0x$7m = ![]);if (w1gh['_inited']) return;w1gh['window'] = window;if (w1gh['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;w1gh['_inited'] = !![], w1gh['isZiYu'] = b0x$7m, w1gh['isPosMsgYu'] = pd9u4s, w1gh['EnvConfig'] = {}, !w1gh['isZiYu'] && (b$30xm['setNativeFileDir']('/layaairGame'), b$30xm['existDir'](b$30xm['fileNativeDir'], tjn5v8['create'](w1gh, w1gh['onMkdirCallBack']))), w1gh['window']['focus'] = function () {}, m03bq['getUrlPath'] = function () {}, w1gh['window']['logtime'] = function (pk) {}, w1gh['window']['alertTimeLog'] = function (w18ej2) {}, w1gh['window']['resetShareInfo'] = function () {}, w1gh['window']['CanvasRenderingContext2D'] = function () {}, w1gh['window']['CanvasRenderingContext2D']['prototype'] = w1gh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], w1gh['window']['document']['body']['appendChild'] = function () {}, w1gh['EnvConfig']['pixelRatioInt'] = 0x0, n8v5j['getPixelRatio'] = w1gh['pixelRatio'], w1gh['_preCreateElement'] = gch1lw['createElement'], gch1lw['createElement'] = w1gh['createElement'], n8v5j['createShaderCondition'] = w1gh['createShaderCondition'], gcwlhk['parseXMLFromString'] = w1gh['parseXMLFromString'], kdhlc['_createInputElement'] = u4klsd['_createInputElement'], w1gh['EnvConfig']['load'] = chkwl['prototype']['load'], chkwl['prototype']['load'] = h12wg['prototype']['load'], w1gh['isZiYu'] && pd9u4s && wx['onMessage'](function (h4lkd) {
        h4lkd['isLoad'] && (b$30xm['ziyuFileData'][h4lkd['url']] = h4lkd['data']);
      });
    }, w1gh['onMkdirCallBack'] = function (ldksc, xbm7$0) {
      if (!ldksc) b$30xm['filesListObj'] = JSON['parse'](xbm7$0['data']);
    }, w1gh['pixelRatio'] = function () {
      if (!w1gh['EnvConfig']['pixelRatioInt']) try {
        var qbrm03 = wx['getSystemInfoSync']();return w1gh['EnvConfig']['pixelRatioInt'] = qbrm03['pixelRatio'], qbrm03 = qbrm03, qbrm03['pixelRatio'];
      } catch (e81w2j) {}return w1gh['EnvConfig']['pixelRatioInt'];
    }, w1gh['createElement'] = function (b$xz07) {
      if (b$xz07 == 'canvas') {
        var s_ud9;return w1gh['idx'] == 0x1 ? w1gh['isZiYu'] ? (s_ud9 = sharedCanvas, s_ud9['style'] = {}) : s_ud9 = window['canvas'] : s_ud9 = window['wx']['createCanvas'](), w1gh['idx']++, s_ud9;
      } else {
        if (b$xz07 == 'textarea' || b$xz07 == 'input') return w1gh['onCreateInput'](b$xz07);else {
          if (b$xz07 == 'div') {
            var mb3r0q = w1gh['_preCreateElement'](b$xz07);return mb3r0q['contains'] = function (r3mq0) {
              return null;
            }, mb3r0q['removeChild'] = function (dcs4lk) {}, mb3r0q;
          } else return w1gh['_preCreateElement'](b$xz07);
        }
      }
    }, w1gh['onCreateInput'] = function (gwhcl1) {
      var vnt8a = w1gh['_preCreateElement'](gwhcl1);return vnt8a['focus'] = u4klsd['wxinputFocus'], vnt8a['blur'] = u4klsd['wxinputblur'], vnt8a['style'] = {}, vnt8a['value'] = 0x0, vnt8a['parentElement'] = {}, vnt8a['placeholder'] = {}, vnt8a['type'] = {}, vnt8a['setColor'] = function (ckld4) {}, vnt8a['setType'] = function (bmx3$0) {}, vnt8a['setFontFace'] = function (w1cg2) {}, vnt8a['addEventListener'] = function (yo69_i) {}, vnt8a['contains'] = function (ev8j5) {
        return null;
      }, vnt8a['removeChild'] = function (y9o6i_) {}, vnt8a;
    }, w1gh['createShaderCondition'] = function (sy9_p) {
      var p9dsu_ = this,
          c4lksd = function () {
        var u_s9py = sy9_p;return p9dsu_[sy9_p['replace']('this.', '')];
      };return c4lksd;
    }, w1gh['EnvConfig'] = null, w1gh['window'] = null, w1gh['_preCreateElement'] = null, w1gh['_inited'] = ![], w1gh['wxRequest'] = null, w1gh['systemInfo'] = null, w1gh['version'] = '0.0.1', w1gh['isZiYu'] = ![], w1gh['isPosMsgYu'] = ![], w1gh['parseXMLFromString'] = function (lksud4) {
      var wlhgck, bz$ax;lksud4 = lksud4['replace'](/>\s+</g, '><');try {
        wlhgck = new window['Parser']['DOMParser']()['parseFromString'](lksud4, 'text/xml');
      } catch (mrq3) {
        throw '需要引入xml解析库文件';
      }return wlhgck;
    }, w1gh['idx'] = 0x1, w1gh;
  }(),
      bzx0$ = function () {
    function mbx7$() {}pus9y(mbx7$, 'laya.wx.mini.MiniImage');var pdu4 = mbx7$['prototype'];return pdu4['_loadImage'] = function (ulk4sd) {
      var xt7a = this,
          m3r0q = ![];ulk4sd['indexOf']('layaNativeDir/') == -0x1 && (m3r0q = !![], ulk4sd = xaz$7n['formatURL'](ulk4sd));if (!b$30xm['getFileInfo'](ulk4sd)) {
        if (ulk4sd['indexOf']('http://') != -0x1 || ulk4sd['indexOf']('https://') != -0x1) b$30xm['downImg'](ulk4sd, new tjn5v8(mbx7$, mbx7$['onDownImgCallBack'], [ulk4sd, xt7a]), ulk4sd);else mbx7$['onCreateImage'](ulk4sd, xt7a, !![]);
      } else mbx7$['onCreateImage'](ulk4sd, xt7a, !m3r0q);
    }, mbx7$['onDownImgCallBack'] = function (xm07, cw21g, et8v5j) {
      if (!et8v5j) mbx7$['onCreateImage'](xm07, cw21g);else cw21g['onError'](null);
    }, mbx7$['onCreateImage'] = function (mb0r3q, vat7z, bqm) {
      bqm === void 0x0 && (bqm = ![]);var w8e2j1;if (!bqm) {
        var sdu_ = b$30xm['getFileInfo'](mb0r3q),
            zx07$ = sdu_['md5'];w8e2j1 = b$30xm['getFileNativePath'](zx07$);
      } else w8e2j1 = mb0r3q;if (vat7z['imgCache'] == null) vat7z['imgCache'] = {};var lcwgh;function e1hwg2() {
        lcwgh['onload'] = null, lcwgh['onerror'] = null, delete vat7z['imgCache'][mb0r3q];
      };var ks4uld = function () {
        e1hwg2(), vat7z['onLoaded'](lcwgh);
      },
          _ds9pu = function () {
        e1hwg2(), vat7z['event']('error', 'Load image failed');
      };vat7z['_type'] == 'nativeimage' ? (lcwgh = new gch1lw['window']['Image'](), lcwgh['crossOrigin'] = '', lcwgh['onload'] = ks4uld, lcwgh['onerror'] = _ds9pu, lcwgh['src'] = w8e2j1, vat7z['imgCache'][mb0r3q] = lcwgh) : new brq0m3['create'](w8e2j1, { 'onload': ks4uld, 'onerror': _ds9pu, 'onCreate': function (bm0q) {
          lcwgh = bm0q, vat7z['imgCache'][mb0r3q] = bm0q;
        } });
    }, mbx7$;
  }(),
      u4klsd = function () {
    function rq30bm() {}return pus9y(rq30bm, 'laya.wx.mini.MiniInput'), rq30bm['_createInputElement'] = function () {
      kdhlc['_initInput'](kdhlc['area'] = gch1lw['createElement']('textarea')), kdhlc['_initInput'](kdhlc['input'] = gch1lw['createElement']('input')), kdhlc['inputContainer'] = gch1lw['createElement']('div'), kdhlc['inputContainer']['style']['position'] = 'absolute', kdhlc['inputContainer']['style']['zIndex'] = 0x186a0, gch1lw['container']['appendChild'](kdhlc['inputContainer']), kdhlc['inputContainer']['setPos'] = function (up_ds9, je815) {
        kdhlc['inputContainer']['style']['left'] = up_ds9 + 'px', kdhlc['inputContainer']['style']['top'] = je815 + 'px';
      }, m03bq['stage']['on']('resize', null, rq30bm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wg1j2e) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), e5j128['_soundClass'] = kgwhl, e5j128['_musicClass'] = kgwhl;
    }, rq30bm['_onStageResize'] = function () {
      var g2ch1 = m03bq['stage']['_canvasTransform']['identity']();g2ch1['scale'](gch1lw['width'] / mbr['canvas']['width'] / n8v5j['getPixelRatio'](), gch1lw['height'] / mbr['canvas']['height'] / n8v5j['getPixelRatio']());
    }, rq30bm['wxinputFocus'] = function (c2gh) {
      var nvat8 = kdhlc['inputElement']['target'];if (nvat8 && !nvat8['editable']) return;hwkcl['window']['wx']['offKeyboardConfirm'](), hwkcl['window']['wx']['offKeyboardInput'](), hwkcl['window']['wx']['showKeyboard']({ 'defaultValue': nvat8['text'], 'maxLength': nvat8['maxChars'], 'multiple': nvat8['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (l4kd) {}, 'fail': function (b3x0m) {} }), hwkcl['window']['wx']['onKeyboardConfirm'](function (mr0q3) {
        var g2weh1 = mr0q3 ? mr0q3['value'] : '';nvat8['text'] = g2weh1, nvat8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), hwkcl['window']['wx']['onKeyboardInput'](function (av5n) {
        var a7$xbz = av5n ? av5n['value'] : '';if (!nvat8['multiline']) {
          if (a7$xbz['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }nvat8['text'] = a7$xbz, nvat8['event']('input');
      });
    }, rq30bm['inputEnter'] = function () {
      kdhlc['inputElement']['target']['focus'] = ![];
    }, rq30bm['wxinputblur'] = function () {
      rq30bm['hideKeyboard']();
    }, rq30bm['hideKeyboard'] = function () {
      hwkcl['window']['wx']['offKeyboardConfirm'](), hwkcl['window']['wx']['offKeyboardInput'](), hwkcl['window']['wx']['hideKeyboard']({ 'success': function (ioy) {
          console['log']('隐藏键盘');
        }, 'fail': function (lcwhg1) {
          console['log']('隐藏键盘出错:' + (lcwhg1 ? lcwhg1['errMsg'] : ''));
        } });
    }, rq30bm;
  }(),
      h12wg = function () {
    function xnt() {}pus9y(xnt, 'laya.wx.mini.MiniLoader');var z7$0 = xnt['prototype'];return z7$0['load'] = function (q$m0b, e8wj, hd4l, ej1258, h2c1gw) {
      hd4l === void 0x0 && (hd4l = !![]), h2c1gw === void 0x0 && (h2c1gw = ![]);var mx07$ = this;mx07$['_url'] = q$m0b;if (q$m0b['indexOf']('data:image') === 0x0) mx07$['_type'] = e8wj = 'image';else mx07$['_type'] = e8wj || (e8wj = mx07$['getTypeFromUrl'](q$m0b));mx07$['_cache'] = hd4l, mx07$['_data'] = null;var g21hwe = 'ascii';if (q$m0b['indexOf']('.fnt') != -0x1) g21hwe = 'utf8';else e8wj == 'arraybuffer' && (g21hwe = '');;var nzav = gcwlhk['getFileExtension'](q$m0b);if (xnt['_fileTypeArr']['indexOf'](nzav) != -0x1) hwkcl['EnvConfig']['load']['call'](this, q$m0b, e8wj, hd4l, ej1258, h2c1gw);else {
        if (!b$30xm['getFileInfo'](q$m0b)) {
          if (q$m0b['indexOf']('layaNativeDir/') != -0x1) {
            if (hwkcl['isZiYu']) {
              var _o9y = b$30xm['ziyuFileData'][q$m0b];mx07$['onLoaded'](_o9y);return;
            } else {
              cosnole['log']('read read'), b$30xm['read'](q$m0b, g21hwe, new tjn5v8(xnt, xnt['onReadNativeCallBack'], [g21hwe, q$m0b, e8wj, hd4l, ej1258, h2c1gw, mx07$]));return;
            }
          }if (xaz$7n['rootPath'] == '') var r03m = q$m0b;else r03m = q$m0b['split'](xaz$7n['rootPath'])[0x0];q$m0b['indexOf']('http://') != -0x1 || q$m0b['indexOf']('https://') != -0x1 ? hwkcl['EnvConfig']['load']['call'](mx07$, q$m0b, e8wj, hd4l, ej1258, h2c1gw) : b$30xm['readFile'](r03m, g21hwe, new tjn5v8(xnt, xnt['onReadNativeCallBack'], [g21hwe, q$m0b, e8wj, hd4l, ej1258, h2c1gw, mx07$]), q$m0b);
        } else hwkcl['EnvConfig']['load']['call'](this, q$m0b, e8wj, hd4l, ej1258, h2c1gw);
      }
    }, z7$0['resMgrLoad'] = function (z$xn, i9_6y, cw1h2, xn7atz, wklcg, bxza, sckd4) {
      cw1h2 === void 0x0 && (cw1h2 = 0x0), xn7atz === void 0x0 && (xn7atz = ![]), wklcg === void 0x0 && (wklcg = ![]), bxza === void 0x0 && (bxza = 0x0), sckd4 === void 0x0 && (sckd4 = 0x3), z$xn['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z$xn), hwkcl['EnvConfig']['resMgrLoad'](z$xn, (hgw1e, zb7x$a, i9py6_) => {
        xnt['prototype']['resMgrLoadCallBack'](hgw1e, zb7x$a, i9py6_, i9_6y);
      }, cw1h2, xn7atz, wklcg, bxza, sckd4);
    }, z7$0['resMgrLoadCallBack'] = function (oy9i6, dpu, g1c2, xm$3b0) {
      console['log']('buff:::', oy9i6, g1c2, b$30xm['fileNativeDir'] + '///' + b$30xm['fileListName']), xm$3b0(oy9i6, dpu, g1c2);
    }, z7$0['clearRes'] = function (n8v5t, j8evt) {
      j8evt === void 0x0 && (j8evt = ![]);var ve582 = this;ve582['clearRes'](n8v5t, j8evt);var kwhlcg = b$30xm['getFileInfo'](n8v5t);if (kwhlcg && (n8v5t['indexOf']('http://') != -0x1 || n8v5t['indexOf']('https://') != -0x1)) {
        var g1whc2 = kwhlcg['md5'],
            abx$z7 = b$30xm['getFileNativePath'](g1whc2);b$30xm['remove'](abx$z7);
      }
    }, xnt['onReadNativeCallBack'] = function (zan7$, c4dh, b30mq, l4hkdc, x03bm, kc4dsl, sudp, e1j58, l4cks) {
      l4hkdc === void 0x0 && (l4hkdc = !![]), kc4dsl === void 0x0 && (kc4dsl = ![]), e1j58 === void 0x0 && (e1j58 = 0x0);if (!e1j58) {
        var dhclk4;if (b30mq == 'json' || b30mq == 'atlas') dhclk4 = hwkcl['getJson'](l4cks['data']);else b30mq == 'xml' ? dhclk4 = gcwlhk['parseXMLFromString'](l4cks['data']) : dhclk4 = l4cks['data'];sudp['onLoaded'](dhclk4), !hwkcl['isZiYu'] && hwkcl['isPosMsgYu'] && b30mq != 'arraybuffer' && wx['postMessage']({ 'url': c4dh, 'data': dhclk4, 'isLoad': !![] });
      } else e1j58 == 0x1 && hwkcl['EnvConfig']['load']['call'](sudp, c4dh, b30mq, l4hkdc, x03bm, kc4dsl);
    }, d4kps(xnt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), xnt;
  }(),
      b$30xm = function (y69i_) {
    function _pus() {
      _pus['__super']['call'](this);;
    }return pus9y(_pus, 'laya.wx.mini.MiniFileMgr', y69i_), _pus['isLoadFile'] = function (x$07zb) {
      return _pus['_fileTypeArr']['indexOf'](x$07zb) != -0x1 ? !![] : ![];
    }, _pus['getFileInfo'] = function (xbz07) {
      var p_9dus = xbz07['split']('?')[0x0],
          uks4d = _pus['filesListObj'][p_9dus];if (uks4d == null) return null;else return uks4d;return null;
    }, _pus['onFileUpdate'] = function (pk4u, azv7tn) {
      var yip9_ = pk4u['split']('/'),
          lsc = yip9_[yip9_['length'] - 0x1],
          b7$m0x = _pus['getFileInfo'](azv7tn);if (b7$m0x == null) _pus['onSaveFile'](azv7tn, lsc);else {
        if (b7$m0x['readyUrl'] != azv7tn) _pus['remove'](lsc, azv7tn);
      }
    }, _pus['exits'] = function (ejv28, ej852v) {
      var q03b$m = _pus['getFileNativePath'](ejv28);_pus['fs']['getFileInfo']({ 'filePath': q03b$m, 'success': function ($mx0b7) {
          ej852v != null && ej852v['runWith']([0x0, $mx0b7]);
        }, 'fail': function (c1hg) {
          ej852v != null && ej852v['runWith']([0x1, c1hg]);
        } });
    }, _pus['read'] = function (hlc1gw, vj58nt, h4gkcl, lsu4kd) {
      vj58nt === void 0x0 && (vj58nt = 'ascill'), lsu4kd === void 0x0 && (lsu4kd = '');var nzx$7;lsu4kd != '' ? nzx$7 = _pus['getFileNativePath'](hlc1gw) : nzx$7 = hlc1gw, _pus['fs']['readFile']({ 'filePath': nzx$7, 'encoding': vj58nt, 'success': function (sy_p9) {
          h4gkcl != null && h4gkcl['runWith']([0x0, sy_p9]);
        }, 'fail': function (cw21h) {
          if (cw21h && lsu4kd != '') _pus['down'](lsu4kd, vj58nt, h4gkcl, lsu4kd);else h4gkcl != null && h4gkcl['runWith']([0x1]);
        } });
    }, _pus['readNativeFile'] = function (b0mx7$, zatv5n) {
      _pus['fs']['readFile']({ 'filePath': b0mx7$, 'encoding': '', 'success': function (gchl1) {
          zatv5n != null && zatv5n['runWith']([0x0]);
        }, 'fail': function (ud94ps) {
          zatv5n != null && zatv5n['runWith']([0x1]);
        } });
    }, _pus['down'] = function (b0mx$3, n8atv5, ew82j1, xab$z) {
      n8atv5 === void 0x0 && (n8atv5 = 'ascill'), xab$z === void 0x0 && (xab$z = '');var z7$xna = _pus['getFileNativePath'](xab$z),
          ewg1h2 = _pus['wxdown']({ 'url': b0mx$3, 'filePath': z7$xna, 'success': function (v5nt) {
          if (v5nt['statusCode'] === 0xc8) _pus['readFile'](v5nt['filePath'], n8atv5, ew82j1, xab$z);
        }, 'fail': function (gj2) {
          ew82j1 != null && ew82j1['runWith']([0x1, gj2]);
        } });ewg1h2['onProgressUpdate'](function (n$z7) {
        ew82j1 != null && ew82j1['runWith']([0x2, n$z7['progress']]);
      });
    }, _pus['readFile'] = function (w8j2, pskd4, p_96yu, e218jw) {
      pskd4 === void 0x0 && (pskd4 = 'ascill'), e218jw === void 0x0 && (e218jw = ''), _pus['fs']['readFile']({ 'filePath': w8j2, 'encoding': pskd4, 'success': function (s4lkdu) {
          if (w8j2['indexOf']('http://') != -0x1 || w8j2['indexOf']('https://') != -0x1) _pus['onFileUpdate'](w8j2, e218jw);p_96yu != null && p_96yu['runWith']([0x0, s4lkdu]);
        }, 'fail': function (p9_usy) {
          if (p9_usy) p_96yu != null && p_96yu['runWith']([0x1, p9_usy]);
        } });
    }, _pus['downImg'] = function (_iyp6, mb0$3, _pi6y9) {
      _pi6y9 === void 0x0 && (_pi6y9 = '');var w2jg1 = _pus['wxdown']({ 'url': _iyp6, 'success': function (nvt8a5) {
          nvt8a5['statusCode'] === 0xc8 && _pus['copyFile'](nvt8a5['tempFilePath'], _pi6y9, mb0$3);
        }, 'fail': function (nv7zat) {
          mb0$3 != null && mb0$3['runWith']([0x1, nv7zat]);
        } });
    }, _pus['copyFile'] = function (n85ta, u94dps, gch1l) {
      var $b3m0 = n85ta['split']('/'),
          kp4s = $b3m0[$b3m0['length'] - 0x1],
          nz$7a = u94dps['split']('?')[0x0],
          cl4sdk = _pus['getFileInfo'](u94dps),
          anvz5t = _pus['getFileNativePath'](kp4s);_pus['fs']['copyFile']({ 'srcPath': n85ta, 'destPath': anvz5t, 'success': function (an7v) {
          if (!cl4sdk) _pus['onSaveFile'](u94dps, kp4s), gch1l != null && gch1l['runWith']([0x0]);else {
            if (cl4sdk['readyUrl'] != u94dps) _pus['remove'](kp4s, u94dps, gch1l);
          }
        }, 'fail': function (spud94) {
          gch1l != null && gch1l['runWith']([0x1, spud94]);
        } });
    }, _pus['getFileNativePath'] = function ($zax7n) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $zax7n;
    }, _pus['remove'] = function (d49ups, xbm$07, v82) {
      xbm$07 === void 0x0 && (xbm$07 = '');var tzav5 = _pus['getFileInfo'](xbm$07),
          wlkghc = _pus['getFileNativePath'](tzav5['md5']);m03bq['loader']['clearRes'](tzav5['readyUrl']), _pus['fs']['unlink']({ 'filePath': wlkghc, 'success': function (e528) {
          if (xbm$07 != '') _pus['onSaveFile'](xbm$07, d49ups);v82 != null && v82['runWith']([0x0]);
        }, 'fail': function (x0b7m$) {} });
    }, _pus['onSaveFile'] = function (e5tv, h1glw) {
      var wgclk = e5tv['split']('?')[0x0];_pus['filesListObj'][wgclk] = { 'md5': h1glw, 'readyUrl': e5tv }, _pus['fs']['writeFile']({ 'filePath': _pus['fileNativeDir'] + '/' + _pus['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_pus['filesListObj']), 'success': function (bz7x$) {
          console['log']('写入测试测试成功：', bz7x$);
        }, 'fail': function (scd4) {
          console['log']('写入测试测试失败：', scd4);
        } });
    }, _pus['existDir'] = function (x7tnz, xaztn7) {
      _pus['fs']['mkdir']({ 'dirPath': x7tnz, 'success': function ($b3q0m) {
          xaztn7 != null && xaztn7['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hdlck4) {
          if (hdlck4['errMsg']['indexOf']('file already exists') != -0x1) _pus['readSync'](_pus['fileListName'], 'utf8', xaztn7);else xaztn7 != null && xaztn7['runWith']([0x1, hdlck4]);
        } });
    }, _pus['readSync'] = function (_9supd, lhw1gc, glhkw, ge2w1j) {
      lhw1gc === void 0x0 && (lhw1gc = 'ascill'), ge2w1j === void 0x0 && (ge2w1j = '');var bqm3r0 = _pus['getFileNativePath'](_9supd),
          hc4lg;try {
        hc4lg = _pus['fs']['readFileSync'](bqm3r0), glhkw != null && glhkw['runWith']([0x0, { 'data': hc4lg }]);
      } catch (i_6y9) {
        glhkw != null && glhkw['runWith']([0x1]);
      }
    }, _pus['readCache'] = function () {}, _pus['writeCache'] = function (xtn7) {
      var rq3bm0 = readyUrl['split']('?')[0x0];_pus['filesListObj'][rq3bm0] = { 'md5': md5Name, 'readyUrl': readyUrl }, _pus['fs']['writeFile']({ 'filePath': _pus['fileNativeDir'] + '/' + _pus['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](_pus['filesListObj']), 'success': function (je521) {}, 'fail': function (t5vnj8) {} });
    }, _pus['setNativeFileDir'] = function (pi_9y) {
      _pus['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pi_9y;
    }, _pus['filesListObj'] = {}, _pus['fileNativeDir'] = null, _pus['fileListName'] = 'layaairfiles.txt', _pus['ziyuFileData'] = {}, d4kps(_pus, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), _pus;
  }(ds4lc),
      kgwhl = function (uysp) {
    function sl4ukd() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], sl4ukd['__super']['call'](this), this['_sound'] = sl4ukd['_createSound']();
    }pus9y(sl4ukd, 'laya.wx.mini.MiniSound', uysp);var evj = sl4ukd['prototype'];return evj['load'] = function (tavzn7) {
      var wgj2e = this;tavzn7 = xaz$7n['formatURL'](tavzn7), this['url'] = tavzn7;if (sl4ukd['_audioCache'][tavzn7]) {
        this['event']('complete');return;
      }function s4kldc() {
        if (sl4ukd['_null'] != undefined) wgj2e['_sound']['onCanplay'](sl4ukd['_null']), wgj2e['_sound']['onError'](sl4ukd['_null']);else try {
          wgj2e['_sound']['onCanplay'](null), wgj2e['_sound']['onError'](null), sl4ukd['_null'] = null;
        } catch (k4dhl) {
          console['warn']('[wxmini] _clearSound:' + k4dhl), wgj2e['_sound']['onCanplay'](b03qr), wgj2e['_sound']['onError'](b03qr), sl4ukd['_null'] = b03qr;
        }
      }function ldkhc4() {
        s4kldc(), a$zbx['loaded'] = !![], a$zbx['event']('complete'), sl4ukd['_audioCache'][a$zbx['url']] = a$zbx;
      }function klh4dc(ps9u4d) {
        console['error']('errCode=' + ps9u4d['errCode'] + '  errMsg=' + ps9u4d['errMsg']), s4kldc(), a$zbx['event']('error');
      }function b03qr() {}this['_sound']['onCanplay'](ldkhc4), this['_sound']['onError'](klh4dc), this['_sound']['src'] = tavzn7;var a$zbx = this;
    }, evj['play'] = function (sdc4lk, vz7nta) {
      sdc4lk === void 0x0 && (sdc4lk = 0x0), vz7nta === void 0x0 && (vz7nta = 0x0);var _pi;if (this['url'] == e5j128['_tMusic']) {
        if (!sl4ukd['_musicAudio']) sl4ukd['_musicAudio'] = sl4ukd['_createSound']();_pi = sl4ukd['_musicAudio'];
      } else _pi = sl4ukd['_createSound']();_pi['src'] = this['url'];var weg1j = new _i6oy(_pi);return weg1j['url'] = this['url'], weg1j['loops'] = vz7nta, weg1j['startTime'] = sdc4lk, weg1j['play'](), e5j128['addChannel'](weg1j), weg1j;
    }, evj['dispose'] = function () {
      var sk4upd = sl4ukd['_audioCache'][this['url']];sk4upd && (sk4upd['src'] = '', delete sl4ukd['_audioCache'][this['url']]);
    }, anz7(0x0, evj, 'duration', function () {
      return this['_sound']['duration'];
    }), sl4ukd['_createSound'] = function () {
      return sl4ukd['_id']++, hwkcl['window']['wx']['createInnerAudioContext']();
    }, sl4ukd['_musicAudio'] = null, sl4ukd['_id'] = 0x0, sl4ukd['_audioCache'] = {}, sl4ukd['_null'] = undefined, sl4ukd;
  }(ds4lc),
      _i6oy = function (kchd4) {
    function ge2h1(wclhk) {
      this['_audio'] = null, this['_onEnd'] = null, ge2h1['__super']['call'](this), this['_audio'] = wclhk, this['_onEnd'] = gcwlhk['bind'](this['__onEnd'], this), wclhk['onEnded'](this['_onEnd']);
    }pus9y(ge2h1, 'laya.wx.mini.MiniSoundChannel', kchd4);var t7zvan = ge2h1['prototype'];return t7zvan['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (m03bq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, t7zvan['__onNull'] = function () {}, t7zvan['play'] = function () {
      this['isStopped'] = ![], e5j128['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, t7zvan['stop'] = function () {
      this['isStopped'] = !![], e5j128['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ge2h1['_null'] != undefined) this['_audio']['onEnded'](ge2h1['_null']);else try {
        this['_audio']['onEnded'](null), ge2h1['_null'] = null;
      } catch (_syup9) {
        console['warn']('[wxmini] stop:' + _syup9), this['_audio']['onEnded'](gcwlhk['bind'](this['__onNull'], this)), ge2h1['_null'] = gcwlhk['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, t7zvan['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, t7zvan['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], e5j128['addChannel'](this), this['_audio']['play']();
    }, anz7(0x0, t7zvan, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), anz7(0x0, t7zvan, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), anz7(0x0, t7zvan, 'volume', function () {
      return 0x1;
    }, function (dup9) {}), ge2h1['_null'] = undefined, ge2h1;
  }(ax7z);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gwe1h in Laya) {
    var e2j5 = Laya[gwe1h];e2j5 && e2j5['__isclass'] && (exports[gwe1h] = e2j5);
  }
});