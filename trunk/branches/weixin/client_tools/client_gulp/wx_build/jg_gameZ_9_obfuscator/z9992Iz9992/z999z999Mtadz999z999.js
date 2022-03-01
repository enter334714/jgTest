var H = wx.$F;
(function (window, document, dksc4) {
  var sp94ud = dksc4['un'],
      w1h2cg = dksc4['uns'],
      kl4s = dksc4['static'],
      rq0m3b = dksc4['class'],
      p9iy_ = dksc4['getset'],
      x$anz = dksc4['__newvec'],
      klc4s = laya['utils']['Browser'],
      udp_s = laya['events']['Event'],
      xb7m0 = laya['events']['EventDispatcher'],
      wlcg1h = laya['resource']['HTMLImage'],
      m0b3$ = laya['utils']['Handler'],
      lk4chd = laya['display']['Input'],
      vtj58n = laya['net']['Loader'],
      $mb03x = laya['maths']['Matrix'],
      s4kdlu = laya['renders']['Render'],
      a7v = laya['utils']['RunDriver'],
      o_9iy6 = laya['media']['Sound'],
      gw2eh = laya['media']['SoundChannel'],
      t8nj5v = laya['media']['SoundManager'],
      uspy = laya['display']['Stage'],
      $nx7az = laya['net']['URL'],
      _6y9o = laya['utils']['Utils'],
      u_9dsp = function () {
    function p9_ds() {}return rq0m3b(p9_ds, 'laya.wx.mini.MiniAdpter'), p9_ds['getJson'] = function (m3b0x$) {
      return JSON['parse'](m3b0x$);
    }, p9_ds['init'] = function (j85e12, oyi_) {
      j85e12 === void 0x0 && (j85e12 = ![]), oyi_ === void 0x0 && (oyi_ = ![]);if (p9_ds['_inited']) return;p9_ds['window'] = window;if (p9_ds['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;p9_ds['_inited'] = !![], p9_ds['isZiYu'] = oyi_, p9_ds['isPosMsgYu'] = j85e12, p9_ds['EnvConfig'] = {}, !p9_ds['isZiYu'] && (txanz['setNativeFileDir']('/layaairGame'), txanz['existDir'](txanz['fileNativeDir'], m0b3$['create'](p9_ds, p9_ds['onMkdirCallBack']))), p9_ds['window']['focus'] = function () {}, dksc4['getUrlPath'] = function () {}, p9_ds['window']['logtime'] = function (d4clh) {}, p9_ds['window']['alertTimeLog'] = function (va7tzn) {}, p9_ds['window']['resetShareInfo'] = function () {}, p9_ds['window']['CanvasRenderingContext2D'] = function () {}, p9_ds['window']['CanvasRenderingContext2D']['prototype'] = p9_ds['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], p9_ds['window']['document']['body']['appendChild'] = function () {}, p9_ds['EnvConfig']['pixelRatioInt'] = 0x0, a7v['getPixelRatio'] = p9_ds['pixelRatio'], p9_ds['_preCreateElement'] = klc4s['createElement'], klc4s['createElement'] = p9_ds['createElement'], a7v['createShaderCondition'] = p9_ds['createShaderCondition'], _6y9o['parseXMLFromString'] = p9_ds['parseXMLFromString'], lk4chd['_createInputElement'] = upds94['_createInputElement'], p9_ds['EnvConfig']['load'] = vtj58n['prototype']['load'], vtj58n['prototype']['load'] = g2wc1['prototype']['load'], p9_ds['isZiYu'] && j85e12 && wx['onMessage'](function (u4psdk) {
        u4psdk['isLoad'] && (txanz['ziyuFileData'][u4psdk['url']] = u4psdk['data']);
      });
    }, p9_ds['onMkdirCallBack'] = function (mb3r0, uy_9sp) {
      if (!mb3r0) txanz['filesListObj'] = JSON['parse'](uy_9sp['data']);
    }, p9_ds['pixelRatio'] = function () {
      if (!p9_ds['EnvConfig']['pixelRatioInt']) try {
        var wh1c2g = wx['getSystemInfoSync']();return p9_ds['EnvConfig']['pixelRatioInt'] = wh1c2g['pixelRatio'], wh1c2g = wh1c2g, wh1c2g['pixelRatio'];
      } catch (a$zb) {}return p9_ds['EnvConfig']['pixelRatioInt'];
    }, p9_ds['createElement'] = function ($z0b7x) {
      if ($z0b7x == 'canvas') {
        var v5antz;return p9_ds['idx'] == 0x1 ? p9_ds['isZiYu'] ? (v5antz = sharedCanvas, v5antz['style'] = {}) : v5antz = window['canvas'] : v5antz = window['wx']['createCanvas'](), p9_ds['idx']++, v5antz;
      } else {
        if ($z0b7x == 'textarea' || $z0b7x == 'input') return p9_ds['onCreateInput']($z0b7x);else {
          if ($z0b7x == 'div') {
            var cd4sl = p9_ds['_preCreateElement']($z0b7x);return cd4sl['contains'] = function (tn7vaz) {
              return null;
            }, cd4sl['removeChild'] = function (p9_6yu) {}, cd4sl;
          } else return p9_ds['_preCreateElement']($z0b7x);
        }
      }
    }, p9_ds['onCreateInput'] = function (mxb$03) {
      var clhgkw = p9_ds['_preCreateElement'](mxb$03);return clhgkw['focus'] = upds94['wxinputFocus'], clhgkw['blur'] = upds94['wxinputblur'], clhgkw['style'] = {}, clhgkw['value'] = 0x0, clhgkw['parentElement'] = {}, clhgkw['placeholder'] = {}, clhgkw['type'] = {}, clhgkw['setColor'] = function (e1hw2) {}, clhgkw['setType'] = function (ksu4d) {}, clhgkw['setFontFace'] = function (m70$) {}, clhgkw['addEventListener'] = function (gc2wh) {}, clhgkw['contains'] = function ($3qm0b) {
        return null;
      }, clhgkw['removeChild'] = function (skl4ud) {}, clhgkw;
    }, p9_ds['createShaderCondition'] = function (yo96) {
      var y6p9i_ = this,
          n$z7 = function () {
        var gklch4 = yo96;return y6p9i_[yo96['replace']('this.', '')];
      };return n$z7;
    }, p9_ds['EnvConfig'] = null, p9_ds['window'] = null, p9_ds['_preCreateElement'] = null, p9_ds['_inited'] = ![], p9_ds['wxRequest'] = null, p9_ds['systemInfo'] = null, p9_ds['version'] = '0.0.1', p9_ds['isZiYu'] = ![], p9_ds['isPosMsgYu'] = ![], p9_ds['parseXMLFromString'] = function (kl4u) {
      var zxn7ta, oi_9y;kl4u = kl4u['replace'](/>\s+</g, '><');try {
        zxn7ta = new window['Parser']['DOMParser']()['parseFromString'](kl4u, 'text/xml');
      } catch (k4dlc) {
        throw '需要引入xml解析库文件';
      }return zxn7ta;
    }, p9_ds['idx'] = 0x1, p9_ds;
  }(),
      clg1wh = function () {
    function jw2() {}rq0m3b(jw2, 'laya.wx.mini.MiniImage');var hclg4 = jw2['prototype'];return hclg4['_loadImage'] = function (hcd4lk) {
      var yo_i9 = this,
          va7nt = ![];hcd4lk['indexOf']('layaNativeDir/') == -0x1 && (va7nt = !![], hcd4lk = $nx7az['formatURL'](hcd4lk));if (!txanz['getFileInfo'](hcd4lk)) {
        if (hcd4lk['indexOf']('http://') != -0x1 || hcd4lk['indexOf']('https://') != -0x1) txanz['downImg'](hcd4lk, new m0b3$(jw2, jw2['onDownImgCallBack'], [hcd4lk, yo_i9]), hcd4lk);else jw2['onCreateImage'](hcd4lk, yo_i9, !![]);
      } else jw2['onCreateImage'](hcd4lk, yo_i9, !va7nt);
    }, jw2['onDownImgCallBack'] = function (jte85, vt5a, gc4hl) {
      if (!gc4hl) jw2['onCreateImage'](jte85, vt5a);else vt5a['onError'](null);
    }, jw2['onCreateImage'] = function (iy_9o, jv85et, tv8e5j) {
      tv8e5j === void 0x0 && (tv8e5j = ![]);var zb$a;if (!tv8e5j) {
        var _y6pi9 = txanz['getFileInfo'](iy_9o),
            pd9u4 = _y6pi9['md5'];zb$a = txanz['getFileNativePath'](pd9u4);
      } else zb$a = iy_9o;if (jv85et['imgCache'] == null) jv85et['imgCache'] = {};var dsul4k;function nztav() {
        dsul4k['onload'] = null, dsul4k['onerror'] = null, delete jv85et['imgCache'][iy_9o];
      };var gw2hc = function () {
        nztav(), jv85et['onLoaded'](dsul4k);
      },
          je521 = function () {
        nztav(), jv85et['event']('error', 'Load image failed');
      };jv85et['_type'] == 'nativeimage' ? (dsul4k = new klc4s['window']['Image'](), dsul4k['crossOrigin'] = '', dsul4k['onload'] = gw2hc, dsul4k['onerror'] = je521, dsul4k['src'] = zb$a, jv85et['imgCache'][iy_9o] = dsul4k) : new wlcg1h['create'](zb$a, { 'onload': gw2hc, 'onerror': je521, 'onCreate': function (w2j1eg) {
          dsul4k = w2j1eg, jv85et['imgCache'][iy_9o] = w2j1eg;
        } });
    }, jw2;
  }(),
      upds94 = function () {
    function hgckl() {}return rq0m3b(hgckl, 'laya.wx.mini.MiniInput'), hgckl['_createInputElement'] = function () {
      lk4chd['_initInput'](lk4chd['area'] = klc4s['createElement']('textarea')), lk4chd['_initInput'](lk4chd['input'] = klc4s['createElement']('input')), lk4chd['inputContainer'] = klc4s['createElement']('div'), lk4chd['inputContainer']['style']['position'] = 'absolute', lk4chd['inputContainer']['style']['zIndex'] = 0x186a0, klc4s['container']['appendChild'](lk4chd['inputContainer']), lk4chd['inputContainer']['setPos'] = function (pu4skd, hkcwl) {
        lk4chd['inputContainer']['style']['left'] = pu4skd + 'px', lk4chd['inputContainer']['style']['top'] = hkcwl + 'px';
      }, dksc4['stage']['on']('resize', null, hgckl['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ew2hg) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), t8nj5v['_soundClass'] = lhcwg, t8nj5v['_musicClass'] = lhcwg;
    }, hgckl['_onStageResize'] = function () {
      var b3x0$ = dksc4['stage']['_canvasTransform']['identity']();b3x0$['scale'](klc4s['width'] / s4kdlu['canvas']['width'] / a7v['getPixelRatio'](), klc4s['height'] / s4kdlu['canvas']['height'] / a7v['getPixelRatio']());
    }, hgckl['wxinputFocus'] = function (y_o9i6) {
      var kdus4l = lk4chd['inputElement']['target'];if (kdus4l && !kdus4l['editable']) return;u_9dsp['window']['wx']['offKeyboardConfirm'](), u_9dsp['window']['wx']['offKeyboardInput'](), u_9dsp['window']['wx']['showKeyboard']({ 'defaultValue': kdus4l['text'], 'maxLength': kdus4l['maxChars'], 'multiple': kdus4l['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (c1gwlh) {}, 'fail': function (m0qrb) {} }), u_9dsp['window']['wx']['onKeyboardConfirm'](function (lkhgw) {
        var z$7 = lkhgw ? lkhgw['value'] : '';kdus4l['text'] = z$7, kdus4l['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), u_9dsp['window']['wx']['onKeyboardInput'](function (ta7nxz) {
        var x7$azn = ta7nxz ? ta7nxz['value'] : '';if (!kdus4l['multiline']) {
          if (x7$azn['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }kdus4l['text'] = x7$azn, kdus4l['event']('input');
      });
    }, hgckl['inputEnter'] = function () {
      lk4chd['inputElement']['target']['focus'] = ![];
    }, hgckl['wxinputblur'] = function () {
      hgckl['hideKeyboard']();
    }, hgckl['hideKeyboard'] = function () {
      u_9dsp['window']['wx']['offKeyboardConfirm'](), u_9dsp['window']['wx']['offKeyboardInput'](), u_9dsp['window']['wx']['hideKeyboard']({ 'success': function (ew1g2) {
          console['log']('隐藏键盘');
        }, 'fail': function (pus9_d) {
          console['log']('隐藏键盘出错:' + (pus9_d ? pus9_d['errMsg'] : ''));
        } });
    }, hgckl;
  }(),
      g2wc1 = function () {
    function us9_pd() {}rq0m3b(us9_pd, 'laya.wx.mini.MiniLoader');var vjte = us9_pd['prototype'];return vjte['load'] = function (t7vnaz, p4sudk, jte58, t5nz, dusk4l) {
      jte58 === void 0x0 && (jte58 = !![]), dusk4l === void 0x0 && (dusk4l = ![]);var vtzan7 = this;vtzan7['_url'] = t7vnaz;if (t7vnaz['indexOf']('data:image') === 0x0) vtzan7['_type'] = p4sudk = 'image';else vtzan7['_type'] = p4sudk || (p4sudk = vtzan7['getTypeFromUrl'](t7vnaz));vtzan7['_cache'] = jte58, vtzan7['_data'] = null;var jtve58 = 'ascii';if (t7vnaz['indexOf']('.fnt') != -0x1) jtve58 = 'utf8';else p4sudk == 'arraybuffer' && (jtve58 = '');;var bx$3m0 = _6y9o['getFileExtension'](t7vnaz);if (us9_pd['_fileTypeArr']['indexOf'](bx$3m0) != -0x1) u_9dsp['EnvConfig']['load']['call'](this, t7vnaz, p4sudk, jte58, t5nz, dusk4l);else {
        if (!txanz['getFileInfo'](t7vnaz)) {
          if (t7vnaz['indexOf']('layaNativeDir/') != -0x1) {
            if (u_9dsp['isZiYu']) {
              var je1gw = txanz['ziyuFileData'][t7vnaz];vtzan7['onLoaded'](je1gw);return;
            } else {
              cosnole['log']('read read'), txanz['read'](t7vnaz, jtve58, new m0b3$(us9_pd, us9_pd['onReadNativeCallBack'], [jtve58, t7vnaz, p4sudk, jte58, t5nz, dusk4l, vtzan7]));return;
            }
          }if ($nx7az['rootPath'] == '') var dpus9 = t7vnaz;else dpus9 = t7vnaz['split']($nx7az['rootPath'])[0x0];t7vnaz['indexOf']('http://') != -0x1 || t7vnaz['indexOf']('https://') != -0x1 ? u_9dsp['EnvConfig']['load']['call'](vtzan7, t7vnaz, p4sudk, jte58, t5nz, dusk4l) : txanz['readFile'](dpus9, jtve58, new m0b3$(us9_pd, us9_pd['onReadNativeCallBack'], [jtve58, t7vnaz, p4sudk, jte58, t5nz, dusk4l, vtzan7]), t7vnaz);
        } else u_9dsp['EnvConfig']['load']['call'](this, t7vnaz, p4sudk, jte58, t5nz, dusk4l);
      }
    }, vjte['resMgrLoad'] = function (xazb, hgcl1, uks4dl, i9_py, j8ve5, dk4us, su4ldk) {
      uks4dl === void 0x0 && (uks4dl = 0x0), i9_py === void 0x0 && (i9_py = ![]), j8ve5 === void 0x0 && (j8ve5 = ![]), dk4us === void 0x0 && (dk4us = 0x0), su4ldk === void 0x0 && (su4ldk = 0x3), xazb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xazb), u_9dsp['EnvConfig']['resMgrLoad'](xazb, (x$an7z, m0b$3q, n8jt5v) => {
        us9_pd['prototype']['resMgrLoadCallBack'](x$an7z, m0b$3q, n8jt5v, hgcl1);
      }, uks4dl, i9_py, j8ve5, dk4us, su4ldk);
    }, vjte['resMgrLoadCallBack'] = function (a7$z, x$07m, a8nvt5, zabx) {
      console['log']('buff:::', a7$z, a8nvt5, txanz['fileNativeDir'] + '///' + txanz['fileListName']), zabx(a7$z, x$07m, a8nvt5);
    }, vjte['clearRes'] = function (_suy, ldu4sk) {
      ldu4sk === void 0x0 && (ldu4sk = ![]);var $x0zb7 = this;$x0zb7['clearRes'](_suy, ldu4sk);var usd9p4 = txanz['getFileInfo'](_suy);if (usd9p4 && (_suy['indexOf']('http://') != -0x1 || _suy['indexOf']('https://') != -0x1)) {
        var _p9y6 = usd9p4['md5'],
            j1w8e = txanz['getFileNativePath'](_p9y6);txanz['remove'](j1w8e);
      }
    }, us9_pd['onReadNativeCallBack'] = function (y_us9p, nvta58, gclhw, avt8, at5nz, b0x$z, ve82j, w2hc1g, sp9u_d) {
      avt8 === void 0x0 && (avt8 = !![]), b0x$z === void 0x0 && (b0x$z = ![]), w2hc1g === void 0x0 && (w2hc1g = 0x0);if (!w2hc1g) {
        var c4klh;if (gclhw == 'json' || gclhw == 'atlas') c4klh = u_9dsp['getJson'](sp9u_d['data']);else gclhw == 'xml' ? c4klh = _6y9o['parseXMLFromString'](sp9u_d['data']) : c4klh = sp9u_d['data'];ve82j['onLoaded'](c4klh), !u_9dsp['isZiYu'] && u_9dsp['isPosMsgYu'] && gclhw != 'arraybuffer' && wx['postMessage']({ 'url': nvta58, 'data': c4klh, 'isLoad': !![] });
      } else w2hc1g == 0x1 && u_9dsp['EnvConfig']['load']['call'](ve82j, nvta58, gclhw, avt8, at5nz, b0x$z);
    }, kl4s(us9_pd, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), us9_pd;
  }(),
      txanz = function (d4skl) {
    function jte58v() {
      jte58v['__super']['call'](this);;
    }return rq0m3b(jte58v, 'laya.wx.mini.MiniFileMgr', d4skl), jte58v['isLoadFile'] = function (u_9pys) {
      return jte58v['_fileTypeArr']['indexOf'](u_9pys) != -0x1 ? !![] : ![];
    }, jte58v['getFileInfo'] = function (dkscl4) {
      var v7tna = dkscl4['split']('?')[0x0],
          tavn7 = jte58v['filesListObj'][v7tna];if (tavn7 == null) return null;else return tavn7;return null;
    }, jte58v['onFileUpdate'] = function (luksd4, q$b03m) {
      var vtj8n5 = luksd4['split']('/'),
          cdks4 = vtj8n5[vtj8n5['length'] - 0x1],
          bq0m3r = jte58v['getFileInfo'](q$b03m);if (bq0m3r == null) jte58v['onSaveFile'](q$b03m, cdks4);else {
        if (bq0m3r['readyUrl'] != q$b03m) jte58v['remove'](cdks4, q$b03m);
      }
    }, jte58v['exits'] = function (cl1hwg, an8) {
      var b3$m = jte58v['getFileNativePath'](cl1hwg);jte58v['fs']['getFileInfo']({ 'filePath': b3$m, 'success': function (jt) {
          an8 != null && an8['runWith']([0x0, jt]);
        }, 'fail': function (k4psd) {
          an8 != null && an8['runWith']([0x1, k4psd]);
        } });
    }, jte58v['read'] = function (a$zx7b, l4kscd, ej5v, e2w1gh) {
      l4kscd === void 0x0 && (l4kscd = 'ascill'), e2w1gh === void 0x0 && (e2w1gh = '');var _yup96;e2w1gh != '' ? _yup96 = jte58v['getFileNativePath'](a$zx7b) : _yup96 = a$zx7b, jte58v['fs']['readFile']({ 'filePath': _yup96, 'encoding': l4kscd, 'success': function (az7$bx) {
          ej5v != null && ej5v['runWith']([0x0, az7$bx]);
        }, 'fail': function (hwcgl1) {
          if (hwcgl1 && e2w1gh != '') jte58v['down'](e2w1gh, l4kscd, ej5v, e2w1gh);else ej5v != null && ej5v['runWith']([0x1]);
        } });
    }, jte58v['readNativeFile'] = function (s9pdu_, bqm3$) {
      jte58v['fs']['readFile']({ 'filePath': s9pdu_, 'encoding': '', 'success': function (nz7xa$) {
          bqm3$ != null && bqm3$['runWith']([0x0]);
        }, 'fail': function (kl4sud) {
          bqm3$ != null && bqm3$['runWith']([0x1]);
        } });
    }, jte58v['down'] = function ($m70x, _s9pud, g12ehw, znx$a7) {
      _s9pud === void 0x0 && (_s9pud = 'ascill'), znx$a7 === void 0x0 && (znx$a7 = '');var z$0b = jte58v['getFileNativePath'](znx$a7),
          $a7nx = jte58v['wxdown']({ 'url': $m70x, 'filePath': z$0b, 'success': function (_o69i) {
          if (_o69i['statusCode'] === 0xc8) jte58v['readFile'](_o69i['filePath'], _s9pud, g12ehw, znx$a7);
        }, 'fail': function (za7bx) {
          g12ehw != null && g12ehw['runWith']([0x1, za7bx]);
        } });$a7nx['onProgressUpdate'](function (xzn$7) {
        g12ehw != null && g12ehw['runWith']([0x2, xzn$7['progress']]);
      });
    }, jte58v['readFile'] = function ($m0x7, lsk4cd, _oy9i6, $bx7a) {
      lsk4cd === void 0x0 && (lsk4cd = 'ascill'), $bx7a === void 0x0 && ($bx7a = ''), jte58v['fs']['readFile']({ 'filePath': $m0x7, 'encoding': lsk4cd, 'success': function (v2j85) {
          if ($m0x7['indexOf']('http://') != -0x1 || $m0x7['indexOf']('https://') != -0x1) jte58v['onFileUpdate']($m0x7, $bx7a);_oy9i6 != null && _oy9i6['runWith']([0x0, v2j85]);
        }, 'fail': function (yo9_i) {
          if (yo9_i) _oy9i6 != null && _oy9i6['runWith']([0x1, yo9_i]);
        } });
    }, jte58v['downImg'] = function (bq$m03, b7a$, nvzt5a) {
      nvzt5a === void 0x0 && (nvzt5a = '');var nz7ax = jte58v['wxdown']({ 'url': bq$m03, 'success': function (y9_oi6) {
          y9_oi6['statusCode'] === 0xc8 && jte58v['copyFile'](y9_oi6['tempFilePath'], nvzt5a, b7a$);
        }, 'fail': function (p9su_d) {
          b7a$ != null && b7a$['runWith']([0x1, p9su_d]);
        } });
    }, jte58v['copyFile'] = function (vej, s9_pdu, clkdh4) {
      var lckhd = vej['split']('/'),
          _u6yp = lckhd[lckhd['length'] - 0x1],
          sldc = s9_pdu['split']('?')[0x0],
          lwgc1h = jte58v['getFileInfo'](s9_pdu),
          du4ksp = jte58v['getFileNativePath'](_u6yp);jte58v['fs']['copyFile']({ 'srcPath': vej, 'destPath': du4ksp, 'success': function (rm0qb3) {
          if (!lwgc1h) jte58v['onSaveFile'](s9_pdu, _u6yp), clkdh4 != null && clkdh4['runWith']([0x0]);else {
            if (lwgc1h['readyUrl'] != s9_pdu) jte58v['remove'](_u6yp, s9_pdu, clkdh4);
          }
        }, 'fail': function (ys_pu9) {
          clkdh4 != null && clkdh4['runWith']([0x1, ys_pu9]);
        } });
    }, jte58v['getFileNativePath'] = function (usy_p9) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + usy_p9;
    }, jte58v['remove'] = function (s4dku, zxt7n, gj21we) {
      zxt7n === void 0x0 && (zxt7n = '');var d_s9u = jte58v['getFileInfo'](zxt7n),
          $m7x = jte58v['getFileNativePath'](d_s9u['md5']);dksc4['loader']['clearRes'](d_s9u['readyUrl']), jte58v['fs']['unlink']({ 'filePath': $m7x, 'success': function (lsckd4) {
          if (zxt7n != '') jte58v['onSaveFile'](zxt7n, s4dku);gj21we != null && gj21we['runWith']([0x0]);
        }, 'fail': function (hc4kl) {} });
    }, jte58v['onSaveFile'] = function (j182e, j258ev) {
      var yusp_ = j182e['split']('?')[0x0];jte58v['filesListObj'][yusp_] = { 'md5': j258ev, 'readyUrl': j182e }, jte58v['fs']['writeFile']({ 'filePath': jte58v['fileNativeDir'] + '/' + jte58v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jte58v['filesListObj']), 'success': function (i69p_) {
          console['log']('写入测试测试成功：', i69p_);
        }, 'fail': function (zb0) {
          console['log']('写入测试测试失败：', zb0);
        } });
    }, jte58v['existDir'] = function (m30, spd9u) {
      jte58v['fs']['mkdir']({ 'dirPath': m30, 'success': function (e581j2) {
          spd9u != null && spd9u['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (clk4hd) {
          if (clk4hd['errMsg']['indexOf']('file already exists') != -0x1) jte58v['readSync'](jte58v['fileListName'], 'utf8', spd9u);else spd9u != null && spd9u['runWith']([0x1, clk4hd]);
        } });
    }, jte58v['readSync'] = function (x$0mb7, ve5j8t, x7m0, kcdsl) {
      ve5j8t === void 0x0 && (ve5j8t = 'ascill'), kcdsl === void 0x0 && (kcdsl = '');var ntazx7 = jte58v['getFileNativePath'](x$0mb7),
          a5vz;try {
        a5vz = jte58v['fs']['readFileSync'](ntazx7), x7m0 != null && x7m0['runWith']([0x0, { 'data': a5vz }]);
      } catch (vj8te5) {
        x7m0 != null && x7m0['runWith']([0x1]);
      }
    }, jte58v['readCache'] = function () {}, jte58v['writeCache'] = function (pu94sd) {
      var y9_o = readyUrl['split']('?')[0x0];jte58v['filesListObj'][y9_o] = { 'md5': md5Name, 'readyUrl': readyUrl }, jte58v['fs']['writeFile']({ 'filePath': jte58v['fileNativeDir'] + '/' + jte58v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](jte58v['filesListObj']), 'success': function (lwgkc) {}, 'fail': function (j852e1) {} });
    }, jte58v['setNativeFileDir'] = function (bqrm30) {
      jte58v['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bqrm30;
    }, jte58v['filesListObj'] = {}, jte58v['fileNativeDir'] = null, jte58v['fileListName'] = 'layaairfiles.txt', jte58v['ziyuFileData'] = {}, kl4s(jte58v, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), jte58v;
  }(xb7m0),
      lhcwg = function (mb03x$) {
    function nvt5a8() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nvt5a8['__super']['call'](this), this['_sound'] = nvt5a8['_createSound']();
    }rq0m3b(nvt5a8, 'laya.wx.mini.MiniSound', mb03x$);var mq0b3r = nvt5a8['prototype'];return mq0b3r['load'] = function (ab7$zx) {
      var dl4hc = this;ab7$zx = $nx7az['formatURL'](ab7$zx), this['url'] = ab7$zx;if (nvt5a8['_audioCache'][ab7$zx]) {
        this['event']('complete');return;
      }function mb0x$() {
        if (nvt5a8['_null'] != undefined) dl4hc['_sound']['onCanplay'](nvt5a8['_null']), dl4hc['_sound']['onError'](nvt5a8['_null']);else try {
          dl4hc['_sound']['onCanplay'](null), dl4hc['_sound']['onError'](null), nvt5a8['_null'] = null;
        } catch (e5tjv) {
          console['warn']('[wxmini] _clearSound:' + e5tjv), dl4hc['_sound']['onCanplay'](duk4p), dl4hc['_sound']['onError'](duk4p), nvt5a8['_null'] = duk4p;
        }
      }function _iy96p() {
        mb0x$(), i9y6_p['loaded'] = !![], i9y6_p['event']('complete'), nvt5a8['_audioCache'][i9y6_p['url']] = i9y6_p;
      }function ls4ck(za$xn) {
        console['error']('errCode=' + za$xn['errCode'] + '  errMsg=' + za$xn['errMsg']), mb0x$(), i9y6_p['event']('error');
      }function duk4p() {}this['_sound']['onCanplay'](_iy96p), this['_sound']['onError'](ls4ck), this['_sound']['src'] = ab7$zx;var i9y6_p = this;
    }, mq0b3r['play'] = function (y_6u9p, uks4dp) {
      y_6u9p === void 0x0 && (y_6u9p = 0x0), uks4dp === void 0x0 && (uks4dp = 0x0);var z7ntax;if (this['url'] == t8nj5v['_tMusic']) {
        if (!nvt5a8['_musicAudio']) nvt5a8['_musicAudio'] = nvt5a8['_createSound']();z7ntax = nvt5a8['_musicAudio'];
      } else z7ntax = nvt5a8['_createSound']();z7ntax['src'] = this['url'];var azn$x = new x$7zba(z7ntax);return azn$x['url'] = this['url'], azn$x['loops'] = uks4dp, azn$x['startTime'] = y_6u9p, azn$x['play'](), t8nj5v['addChannel'](azn$x), azn$x;
    }, mq0b3r['dispose'] = function () {
      var dsukl = nvt5a8['_audioCache'][this['url']];dsukl && (dsukl['src'] = '', delete nvt5a8['_audioCache'][this['url']]);
    }, p9iy_(0x0, mq0b3r, 'duration', function () {
      return this['_sound']['duration'];
    }), nvt5a8['_createSound'] = function () {
      return nvt5a8['_id']++, u_9dsp['window']['wx']['createInnerAudioContext']();
    }, nvt5a8['_musicAudio'] = null, nvt5a8['_id'] = 0x0, nvt5a8['_audioCache'] = {}, nvt5a8['_null'] = undefined, nvt5a8;
  }(xb7m0),
      x$7zba = function (w28ej) {
    function hkwlgc(ew21gj) {
      this['_audio'] = null, this['_onEnd'] = null, hkwlgc['__super']['call'](this), this['_audio'] = ew21gj, this['_onEnd'] = _6y9o['bind'](this['__onEnd'], this), ew21gj['onEnded'](this['_onEnd']);
    }rq0m3b(hkwlgc, 'laya.wx.mini.MiniSoundChannel', w28ej);var hc4kdl = hkwlgc['prototype'];return hc4kdl['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dksc4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hc4kdl['__onNull'] = function () {}, hc4kdl['play'] = function () {
      this['isStopped'] = ![], t8nj5v['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, hc4kdl['stop'] = function () {
      this['isStopped'] = !![], t8nj5v['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (hkwlgc['_null'] != undefined) this['_audio']['onEnded'](hkwlgc['_null']);else try {
        this['_audio']['onEnded'](null), hkwlgc['_null'] = null;
      } catch (b$m70x) {
        console['warn']('[wxmini] stop:' + b$m70x), this['_audio']['onEnded'](_6y9o['bind'](this['__onNull'], this)), hkwlgc['_null'] = _6y9o['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, hc4kdl['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, hc4kdl['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], t8nj5v['addChannel'](this), this['_audio']['play']();
    }, p9iy_(0x0, hc4kdl, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p9iy_(0x0, hc4kdl, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p9iy_(0x0, hc4kdl, 'volume', function () {
      return 0x1;
    }, function (s_py9) {}), hkwlgc['_null'] = undefined, hkwlgc;
  }(gw2eh);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var $7zxb0 in Laya) {
    var xabz$7 = Laya[$7zxb0];xabz$7 && xabz$7['__isclass'] && (exports[$7zxb0] = xabz$7);
  }
});