var c = wx.$o;
(function (window, document, pmrct5) {
  var czbho8 = pmrct5['un'],
      u_3v = pmrct5['uns'],
      w19xif = pmrct5['static'],
      y3enu = pmrct5['class'],
      p5trmq = pmrct5['getset'],
      gf94w = pmrct5['__newvec'],
      zoh8c = laya['utils']['Browser'],
      ald6i = laya['events']['Event'],
      bog = laya['events']['EventDispatcher'],
      i2wd61 = laya['resource']['HTMLImage'],
      bhzco = laya['utils']['Handler'],
      d6v3la = laya['display']['Input'],
      rtsm = laya['net']['Loader'],
      t5mrp = laya['maths']['Matrix'],
      bzcph8 = laya['renders']['Render'],
      zgo8hb = laya['utils']['RunDriver'],
      cz8pb = laya['media']['Sound'],
      hpcrz = laya['media']['SoundChannel'],
      pqrm = laya['media']['SoundManager'],
      l3nva = laya['display']['Stage'],
      mt5srq = laya['net']['URL'],
      j0ke$y = laya['utils']['Utils'],
      z8chbo = function () {
    function o8hzgb() {}return y3enu(o8hzgb, 'laya.wx.mini.MiniAdpter'), o8hzgb['getJson'] = function (zh8bg) {
      return JSON['parse'](zh8bg);
    }, o8hzgb['init'] = function (rm5cp8, b94xo) {
      rm5cp8 === void 0x0 && (rm5cp8 = ![]), b94xo === void 0x0 && (b94xo = ![]);if (o8hzgb['_inited']) return;o8hzgb['window'] = window;if (o8hzgb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o8hzgb['_inited'] = !![], o8hzgb['isZiYu'] = b94xo, o8hzgb['isPosMsgYu'] = rm5cp8, o8hzgb['EnvConfig'] = {}, !o8hzgb['isZiYu'] && (bo94gx['setNativeFileDir']('/layaairGame'), bo94gx['existDir'](bo94gx['fileNativeDir'], bhzco['create'](o8hzgb, o8hzgb['onMkdirCallBack']))), o8hzgb['window']['focus'] = function () {}, pmrct5['getUrlPath'] = function () {}, o8hzgb['window']['logtime'] = function (wd12f) {}, o8hzgb['window']['alertTimeLog'] = function (u3lav) {}, o8hzgb['window']['resetShareInfo'] = function () {}, o8hzgb['window']['CanvasRenderingContext2D'] = function () {}, o8hzgb['window']['CanvasRenderingContext2D']['prototype'] = o8hzgb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o8hzgb['window']['document']['body']['appendChild'] = function () {}, o8hzgb['EnvConfig']['pixelRatioInt'] = 0x0, zgo8hb['getPixelRatio'] = o8hzgb['pixelRatio'], o8hzgb['_preCreateElement'] = zoh8c['createElement'], zoh8c['createElement'] = o8hzgb['createElement'], zgo8hb['createShaderCondition'] = o8hzgb['createShaderCondition'], j0ke$y['parseXMLFromString'] = o8hzgb['parseXMLFromString'], d6v3la['_createInputElement'] = oz4ghb['_createInputElement'], o8hzgb['EnvConfig']['load'] = rtsm['prototype']['load'], rtsm['prototype']['load'] = ye_3u['prototype']['load'], o8hzgb['isZiYu'] && rm5cp8 && wx['onMessage'](function (oxhgb4) {
        oxhgb4['isLoad'] && (bo94gx['ziyuFileData'][oxhgb4['url']] = oxhgb4['data']);
      });
    }, o8hzgb['onMkdirCallBack'] = function (czh8b, hz8bg) {
      if (!czh8b) bo94gx['filesListObj'] = JSON['parse'](hz8bg['data']);
    }, o8hzgb['pixelRatio'] = function () {
      if (!o8hzgb['EnvConfig']['pixelRatioInt']) try {
        var v3ad = wx['getSystemInfoSync']();return o8hzgb['EnvConfig']['pixelRatioInt'] = v3ad['pixelRatio'], v3ad = v3ad, v3ad['pixelRatio'];
      } catch (rtp5c) {}return o8hzgb['EnvConfig']['pixelRatioInt'];
    }, o8hzgb['createElement'] = function (o94gb) {
      if (o94gb == 'canvas') {
        var _y3nu;return o8hzgb['idx'] == 0x1 ? o8hzgb['isZiYu'] ? (_y3nu = sharedCanvas, _y3nu['style'] = {}) : _y3nu = window['canvas'] : _y3nu = window['wx']['createCanvas'](), o8hzgb['idx']++, _y3nu;
      } else {
        if (o94gb == 'textarea' || o94gb == 'input') return o8hzgb['onCreateInput'](o94gb);else {
          if (o94gb == 'div') {
            var mc8p5 = o8hzgb['_preCreateElement'](o94gb);return mc8p5['contains'] = function (pzrhc) {
              return null;
            }, mc8p5['removeChild'] = function (bozhg8) {}, mc8p5;
          } else return o8hzgb['_preCreateElement'](o94gb);
        }
      }
    }, o8hzgb['onCreateInput'] = function (wf291i) {
      var _nyv = o8hzgb['_preCreateElement'](wf291i);return _nyv['focus'] = oz4ghb['wxinputFocus'], _nyv['blur'] = oz4ghb['wxinputblur'], _nyv['style'] = {}, _nyv['value'] = 0x0, _nyv['parentElement'] = {}, _nyv['placeholder'] = {}, _nyv['type'] = {}, _nyv['setColor'] = function (mcp8) {}, _nyv['setType'] = function (q5ptrm) {}, _nyv['setFontFace'] = function (en_y) {}, _nyv['addEventListener'] = function (gzh4ob) {}, _nyv['contains'] = function (_$yek) {
        return null;
      }, _nyv['removeChild'] = function (rz8h) {}, _nyv;
    }, o8hzgb['createShaderCondition'] = function (wf491x) {
      var g8zbh = this,
          zhb4g = function () {
        var d6ia21 = wf491x;return g8zbh[wf491x['replace']('this.', '')];
      };return zhb4g;
    }, o8hzgb['EnvConfig'] = null, o8hzgb['window'] = null, o8hzgb['_preCreateElement'] = null, o8hzgb['_inited'] = ![], o8hzgb['wxRequest'] = null, o8hzgb['systemInfo'] = null, o8hzgb['version'] = '0.0.1', o8hzgb['isZiYu'] = ![], o8hzgb['isPosMsgYu'] = ![], o8hzgb['parseXMLFromString'] = function (k$j0e) {
      var boh8g, unye_k;k$j0e = k$j0e['replace'](/>\s+</g, '><');try {
        boh8g = new window['Parser']['DOMParser']()['parseFromString'](k$j0e, 'text/xml');
      } catch (rzhcp) {
        throw '需要引入xml解析库文件';
      }return boh8g;
    }, o8hzgb['idx'] = 0x1, o8hzgb;
  }(),
      an3ulv = function () {
    function mcpr85() {}y3enu(mcpr85, 'laya.wx.mini.MiniImage');var _u3en = mcpr85['prototype'];return _u3en['_loadImage'] = function (_vl3u) {
      var w291 = this,
          mzcp = ![];_vl3u['indexOf']('layaNativeDir/') == -0x1 && (mzcp = !![], _vl3u = mt5srq['formatURL'](_vl3u));if (!bo94gx['getFileInfo'](_vl3u)) {
        if (_vl3u['indexOf']('http://') != -0x1 || _vl3u['indexOf']('https://') != -0x1) bo94gx['downImg'](_vl3u, new bhzco(mcpr85, mcpr85['onDownImgCallBack'], [_vl3u, w291]), _vl3u);else mcpr85['onCreateImage'](_vl3u, w291, !![]);
      } else mcpr85['onCreateImage'](_vl3u, w291, !mzcp);
    }, mcpr85['onDownImgCallBack'] = function (boh8zc, e_un3, c8hboz) {
      if (!c8hboz) mcpr85['onCreateImage'](boh8zc, e_un3);else e_un3['onError'](null);
    }, mcpr85['onCreateImage'] = function (q5s, r5mc, l_v3nu) {
      l_v3nu === void 0x0 && (l_v3nu = ![]);var x9gob;if (!l_v3nu) {
        var czbo8h = bo94gx['getFileInfo'](q5s),
            e_y$0 = czbo8h['md5'];x9gob = bo94gx['getFileNativePath'](e_y$0);
      } else x9gob = q5s;if (r5mc['imgCache'] == null) r5mc['imgCache'] = {};var g4oxb;function z8bgoh() {
        g4oxb['onload'] = null, g4oxb['onerror'] = null, delete r5mc['imgCache'][q5s];
      };var h8bcoz = function () {
        z8bgoh(), r5mc['onLoaded'](g4oxb);
      },
          rzcm8p = function () {
        z8bgoh(), r5mc['event']('error', 'Load image failed');
      };r5mc['_type'] == 'nativeimage' ? (g4oxb = new zoh8c['window']['Image'](), g4oxb['crossOrigin'] = '', g4oxb['onload'] = h8bcoz, g4oxb['onerror'] = rzcm8p, g4oxb['src'] = x9gob, r5mc['imgCache'][q5s] = g4oxb) : new i2wd61['create'](x9gob, { 'onload': h8bcoz, 'onerror': rzcm8p, 'onCreate': function (e$y_0) {
          g4oxb = e$y_0, r5mc['imgCache'][q5s] = e$y_0;
        } });
    }, mcpr85;
  }(),
      oz4ghb = function () {
    function ynuke() {}return y3enu(ynuke, 'laya.wx.mini.MiniInput'), ynuke['_createInputElement'] = function () {
      d6v3la['_initInput'](d6v3la['area'] = zoh8c['createElement']('textarea')), d6v3la['_initInput'](d6v3la['input'] = zoh8c['createElement']('input')), d6v3la['inputContainer'] = zoh8c['createElement']('div'), d6v3la['inputContainer']['style']['position'] = 'absolute', d6v3la['inputContainer']['style']['zIndex'] = 0x186a0, zoh8c['container']['appendChild'](d6v3la['inputContainer']), d6v3la['inputContainer']['setPos'] = function (dla62v, w1i26d) {
        d6v3la['inputContainer']['style']['left'] = dla62v + 'px', d6v3la['inputContainer']['style']['top'] = w1i26d + 'px';
      }, pmrct5['stage']['on']('resize', null, ynuke['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (w1fx) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pqrm['_soundClass'] = zcb8o, pqrm['_musicClass'] = zcb8o;
    }, ynuke['_onStageResize'] = function () {
      var ob8zh = pmrct5['stage']['_canvasTransform']['identity']();ob8zh['scale'](zoh8c['width'] / bzcph8['canvas']['width'] / zgo8hb['getPixelRatio'](), zoh8c['height'] / bzcph8['canvas']['height'] / zgo8hb['getPixelRatio']());
    }, ynuke['wxinputFocus'] = function (d1wfi2) {
      var vyu = d6v3la['inputElement']['target'];if (vyu && !vyu['editable']) return;z8chbo['window']['wx']['offKeyboardConfirm'](), z8chbo['window']['wx']['offKeyboardInput'](), z8chbo['window']['wx']['showKeyboard']({ 'defaultValue': vyu['text'], 'maxLength': vyu['maxChars'], 'multiple': vyu['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (qptr5) {}, 'fail': function (f9xgo4) {} }), z8chbo['window']['wx']['onKeyboardConfirm'](function (q5msr) {
        var ldva36 = q5msr ? q5msr['value'] : '';vyu['text'] = ldva36, vyu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), z8chbo['window']['wx']['onKeyboardInput'](function (rczp8h) {
        var fw9xi1 = rczp8h ? rczp8h['value'] : '';if (!vyu['multiline']) {
          if (fw9xi1['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }vyu['text'] = fw9xi1, vyu['event']('input');
      });
    }, ynuke['inputEnter'] = function () {
      d6v3la['inputElement']['target']['focus'] = ![];
    }, ynuke['wxinputblur'] = function () {
      ynuke['hideKeyboard']();
    }, ynuke['hideKeyboard'] = function () {
      z8chbo['window']['wx']['offKeyboardConfirm'](), z8chbo['window']['wx']['offKeyboardInput'](), z8chbo['window']['wx']['hideKeyboard']({ 'success': function (cmp85r) {
          console['log']('隐藏键盘');
        }, 'fail': function (nuke_) {
          console['log']('隐藏键盘出错:' + (nuke_ ? nuke_['errMsg'] : ''));
        } });
    }, ynuke;
  }(),
      ye_3u = function () {
    function la63d() {}y3enu(la63d, 'laya.wx.mini.MiniLoader');var qrtms5 = la63d['prototype'];return qrtms5['load'] = function (kye0_u, y0eu_, oh4g, di1w62, yken) {
      oh4g === void 0x0 && (oh4g = !![]), yken === void 0x0 && (yken = ![]);var x19iwf = this;x19iwf['_url'] = kye0_u;if (kye0_u['indexOf']('data:image') === 0x0) x19iwf['_type'] = y0eu_ = 'image';else x19iwf['_type'] = y0eu_ || (y0eu_ = x19iwf['getTypeFromUrl'](kye0_u));x19iwf['_cache'] = oh4g, x19iwf['_data'] = null;var gfo9x = 'ascii';if (kye0_u['indexOf']('.fnt') != -0x1) gfo9x = 'utf8';else y0eu_ == 'arraybuffer' && (gfo9x = '');;var dav2l = j0ke$y['getFileExtension'](kye0_u);if (la63d['_fileTypeArr']['indexOf'](dav2l) != -0x1) z8chbo['EnvConfig']['load']['call'](this, kye0_u, y0eu_, oh4g, di1w62, yken);else {
        if (!bo94gx['getFileInfo'](kye0_u)) {
          if (kye0_u['indexOf']('layaNativeDir/') != -0x1) {
            if (z8chbo['isZiYu']) {
              var uyek_n = bo94gx['ziyuFileData'][kye0_u];x19iwf['onLoaded'](uyek_n);return;
            } else {
              cosnole['log']('read read'), bo94gx['read'](kye0_u, gfo9x, new bhzco(la63d, la63d['onReadNativeCallBack'], [gfo9x, kye0_u, y0eu_, oh4g, di1w62, yken, x19iwf]));return;
            }
          }if (mt5srq['rootPath'] == '') var key$j0 = kye0_u;else key$j0 = kye0_u['split'](mt5srq['rootPath'])[0x0];kye0_u['indexOf']('http://') != -0x1 || kye0_u['indexOf']('https://') != -0x1 ? z8chbo['EnvConfig']['load']['call'](x19iwf, kye0_u, y0eu_, oh4g, di1w62, yken) : bo94gx['readFile'](key$j0, gfo9x, new bhzco(la63d, la63d['onReadNativeCallBack'], [gfo9x, kye0_u, y0eu_, oh4g, di1w62, yken, x19iwf]), kye0_u);
        } else z8chbo['EnvConfig']['load']['call'](this, kye0_u, y0eu_, oh4g, di1w62, yken);
      }
    }, qrtms5['resMgrLoad'] = function (qmts7, la62di, v3lan6, e0jyk, i2ad, u3_ey, y3neu_) {
      v3lan6 === void 0x0 && (v3lan6 = 0x0), e0jyk === void 0x0 && (e0jyk = ![]), i2ad === void 0x0 && (i2ad = ![]), u3_ey === void 0x0 && (u3_ey = 0x0), y3neu_ === void 0x0 && (y3neu_ = 0x3), qmts7['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', qmts7), z8chbo['EnvConfig']['resMgrLoad'](qmts7, (yu_3vn, eu0k_, bzphc8) => {
        la63d['prototype']['resMgrLoadCallBack'](yu_3vn, eu0k_, bzphc8, la62di);
      }, v3lan6, e0jyk, i2ad, u3_ey, y3neu_);
    }, qrtms5['resMgrLoadCallBack'] = function (anulv3, d261iw, iwf1x9, gbohz4) {
      console['log']('buff:::', anulv3, iwf1x9, bo94gx['fileNativeDir'] + '///' + bo94gx['fileListName']), gbohz4(anulv3, d261iw, iwf1x9);
    }, qrtms5['clearRes'] = function (_yk0e$, ny_u3v) {
      ny_u3v === void 0x0 && (ny_u3v = ![]);var xghb4 = this;xghb4['clearRes'](_yk0e$, ny_u3v);var id6l2a = bo94gx['getFileInfo'](_yk0e$);if (id6l2a && (_yk0e$['indexOf']('http://') != -0x1 || _yk0e$['indexOf']('https://') != -0x1)) {
        var mqrp5 = id6l2a['md5'],
            $_ek0y = bo94gx['getFileNativePath'](mqrp5);bo94gx['remove']($_ek0y);
      }
    }, la63d['onReadNativeCallBack'] = function (ek0$_y, rtpcm5, uk_, di2fw1, hozg4, r5cpm, uv_yn, u_l3v, og9xf) {
      di2fw1 === void 0x0 && (di2fw1 = !![]), r5cpm === void 0x0 && (r5cpm = ![]), u_l3v === void 0x0 && (u_l3v = 0x0);if (!u_l3v) {
        var yvn3;if (uk_ == 'json' || uk_ == 'atlas') yvn3 = z8chbo['getJson'](og9xf['data']);else uk_ == 'xml' ? yvn3 = j0ke$y['parseXMLFromString'](og9xf['data']) : yvn3 = og9xf['data'];uv_yn['onLoaded'](yvn3), !z8chbo['isZiYu'] && z8chbo['isPosMsgYu'] && uk_ != 'arraybuffer' && wx['postMessage']({ 'url': rtpcm5, 'data': yvn3, 'isLoad': !![] });
      } else u_l3v == 0x1 && z8chbo['EnvConfig']['load']['call'](uv_yn, rtpcm5, uk_, di2fw1, hozg4, r5cpm);
    }, w19xif(la63d, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), la63d;
  }(),
      bo94gx = function (hpb8z) {
    function i1w9f() {
      i1w9f['__super']['call'](this);;
    }return y3enu(i1w9f, 'laya.wx.mini.MiniFileMgr', hpb8z), i1w9f['isLoadFile'] = function (qp5r) {
      return i1w9f['_fileTypeArr']['indexOf'](qp5r) != -0x1 ? !![] : ![];
    }, i1w9f['getFileInfo'] = function (zhobg) {
      var da6lv = zhobg['split']('?')[0x0],
          di2w1f = i1w9f['filesListObj'][da6lv];if (di2w1f == null) return null;else return di2w1f;return null;
    }, i1w9f['onFileUpdate'] = function (ho4gbz, fw94g) {
      var y3_v = ho4gbz['split']('/'),
          bog9 = y3_v[y3_v['length'] - 0x1],
          g4fw9x = i1w9f['getFileInfo'](fw94g);if (g4fw9x == null) i1w9f['onSaveFile'](fw94g, bog9);else {
        if (g4fw9x['readyUrl'] != fw94g) i1w9f['remove'](bog9, fw94g);
      }
    }, i1w9f['exits'] = function (rmsqt, cbhz8) {
      var lva3un = i1w9f['getFileNativePath'](rmsqt);i1w9f['fs']['getFileInfo']({ 'filePath': lva3un, 'success': function (r8pcm) {
          cbhz8 != null && cbhz8['runWith']([0x0, r8pcm]);
        }, 'fail': function (nvu_) {
          cbhz8 != null && cbhz8['runWith']([0x1, nvu_]);
        } });
    }, i1w9f['read'] = function (tm5rq, nu_eyk, w9x14, al2id6) {
      nu_eyk === void 0x0 && (nu_eyk = 'ascill'), al2id6 === void 0x0 && (al2id6 = '');var yuke0_;al2id6 != '' ? yuke0_ = i1w9f['getFileNativePath'](tm5rq) : yuke0_ = tm5rq, i1w9f['fs']['readFile']({ 'filePath': yuke0_, 'encoding': nu_eyk, 'success': function (kuye) {
          w9x14 != null && w9x14['runWith']([0x0, kuye]);
        }, 'fail': function (obg94x) {
          if (obg94x && al2id6 != '') i1w9f['down'](al2id6, nu_eyk, w9x14, al2id6);else w9x14 != null && w9x14['runWith']([0x1]);
        } });
    }, i1w9f['readNativeFile'] = function (og4xb, ila26) {
      i1w9f['fs']['readFile']({ 'filePath': og4xb, 'encoding': '', 'success': function (qrm5st) {
          ila26 != null && ila26['runWith']([0x0]);
        }, 'fail': function (a6ldi2) {
          ila26 != null && ila26['runWith']([0x1]);
        } });
    }, i1w9f['down'] = function (dal6v2, pr5c8, wi291, naul3) {
      pr5c8 === void 0x0 && (pr5c8 = 'ascill'), naul3 === void 0x0 && (naul3 = '');var dwi6 = i1w9f['getFileNativePath'](naul3),
          v36dla = i1w9f['wxdown']({ 'url': dal6v2, 'filePath': dwi6, 'success': function (tmr5pq) {
          if (tmr5pq['statusCode'] === 0xc8) i1w9f['readFile'](tmr5pq['filePath'], pr5c8, wi291, naul3);
        }, 'fail': function (czrmp8) {
          wi291 != null && wi291['runWith']([0x1, czrmp8]);
        } });v36dla['onProgressUpdate'](function (hbgz8) {
        wi291 != null && wi291['runWith']([0x2, hbgz8['progress']]);
      });
    }, i1w9f['readFile'] = function (rsq5mt, kye$, l_n3v, p8zcm) {
      kye$ === void 0x0 && (kye$ = 'ascill'), p8zcm === void 0x0 && (p8zcm = ''), i1w9f['fs']['readFile']({ 'filePath': rsq5mt, 'encoding': kye$, 'success': function (e0k_) {
          if (rsq5mt['indexOf']('http://') != -0x1 || rsq5mt['indexOf']('https://') != -0x1) i1w9f['onFileUpdate'](rsq5mt, p8zcm);l_n3v != null && l_n3v['runWith']([0x0, e0k_]);
        }, 'fail': function (ochz8b) {
          if (ochz8b) l_n3v != null && l_n3v['runWith']([0x1, ochz8b]);
        } });
    }, i1w9f['downImg'] = function (g8ozh, mp8zcr, r5mptq) {
      r5mptq === void 0x0 && (r5mptq = '');var v36da = i1w9f['wxdown']({ 'url': g8ozh, 'success': function (c85rmp) {
          c85rmp['statusCode'] === 0xc8 && i1w9f['copyFile'](c85rmp['tempFilePath'], r5mptq, mp8zcr);
        }, 'fail': function (chpz8b) {
          mp8zcr != null && mp8zcr['runWith']([0x1, chpz8b]);
        } });
    }, i1w9f['copyFile'] = function (uye_3n, bh4ogx, ogz4b) {
      var rqm5st = uye_3n['split']('/'),
          xofg = rqm5st[rqm5st['length'] - 0x1],
          o4hgbz = bh4ogx['split']('?')[0x0],
          w91ixf = i1w9f['getFileInfo'](bh4ogx),
          ke0$y = i1w9f['getFileNativePath'](xofg);i1w9f['fs']['copyFile']({ 'srcPath': uye_3n, 'destPath': ke0$y, 'success': function (ptr5cm) {
          if (!w91ixf) i1w9f['onSaveFile'](bh4ogx, xofg), ogz4b != null && ogz4b['runWith']([0x0]);else {
            if (w91ixf['readyUrl'] != bh4ogx) i1w9f['remove'](xofg, bh4ogx, ogz4b);
          }
        }, 'fail': function (yu0k) {
          ogz4b != null && ogz4b['runWith']([0x1, yu0k]);
        } });
    }, i1w9f['getFileNativePath'] = function (nval36) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nval36;
    }, i1w9f['remove'] = function (pzc8bh, og9x4, x4hgo) {
      og9x4 === void 0x0 && (og9x4 = '');var w94x = i1w9f['getFileInfo'](og9x4),
          a6l2 = i1w9f['getFileNativePath'](w94x['md5']);pmrct5['loader']['clearRes'](w94x['readyUrl']), i1w9f['fs']['unlink']({ 'filePath': a6l2, 'success': function (fd) {
          if (og9x4 != '') i1w9f['onSaveFile'](og9x4, pzc8bh);x4hgo != null && x4hgo['runWith']([0x0]);
        }, 'fail': function (z8crph) {} });
    }, i1w9f['onSaveFile'] = function (ualnv3, iadl6) {
      var e_ny = ualnv3['split']('?')[0x0];i1w9f['filesListObj'][e_ny] = { 'md5': iadl6, 'readyUrl': ualnv3 }, i1w9f['fs']['writeFile']({ 'filePath': i1w9f['fileNativeDir'] + '/' + i1w9f['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i1w9f['filesListObj']), 'success': function (hbxog) {
          console['log']('写入测试测试成功：', hbxog);
        }, 'fail': function (nv_uy3) {
          console['log']('写入测试测试失败：', nv_uy3);
        } });
    }, i1w9f['existDir'] = function (c8prm, yeku) {
      i1w9f['fs']['mkdir']({ 'dirPath': c8prm, 'success': function (k_yen) {
          yeku != null && yeku['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (g4bx) {
          if (g4bx['errMsg']['indexOf']('file already exists') != -0x1) i1w9f['readSync'](i1w9f['fileListName'], 'utf8', yeku);else yeku != null && yeku['runWith']([0x1, g4bx]);
        } });
    }, i1w9f['readSync'] = function (crp, rcp58m, m5rts, prtc5m) {
      rcp58m === void 0x0 && (rcp58m = 'ascill'), prtc5m === void 0x0 && (prtc5m = '');var h8ozbg = i1w9f['getFileNativePath'](crp),
          l6a2dv;try {
        l6a2dv = i1w9f['fs']['readFileSync'](h8ozbg), m5rts != null && m5rts['runWith']([0x0, { 'data': l6a2dv }]);
      } catch (zh4ob) {
        m5rts != null && m5rts['runWith']([0x1]);
      }
    }, i1w9f['readCache'] = function () {}, i1w9f['writeCache'] = function (i2ad1) {
      var d2il6 = readyUrl['split']('?')[0x0];i1w9f['filesListObj'][d2il6] = { 'md5': md5Name, 'readyUrl': readyUrl }, i1w9f['fs']['writeFile']({ 'filePath': i1w9f['fileNativeDir'] + '/' + i1w9f['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](i1w9f['filesListObj']), 'success': function (if1w29) {}, 'fail': function (ln3vu_) {} });
    }, i1w9f['setNativeFileDir'] = function (di21fw) {
      i1w9f['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + di21fw;
    }, i1w9f['filesListObj'] = {}, i1w9f['fileNativeDir'] = null, i1w9f['fileListName'] = 'layaairfiles.txt', i1w9f['ziyuFileData'] = {}, w19xif(i1w9f, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), i1w9f;
  }(bog),
      zcb8o = function (d21a6) {
    function $ky() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $ky['__super']['call'](this), this['_sound'] = $ky['_createSound']();
    }y3enu($ky, 'laya.wx.mini.MiniSound', d21a6);var avnu3l = $ky['prototype'];return avnu3l['load'] = function (ai6ld2) {
      var _n3yeu = this;ai6ld2 = mt5srq['formatURL'](ai6ld2), this['url'] = ai6ld2;if ($ky['_audioCache'][ai6ld2]) {
        this['event']('complete');return;
      }function ul3v() {
        if ($ky['_null'] != undefined) _n3yeu['_sound']['onCanplay']($ky['_null']), _n3yeu['_sound']['onError']($ky['_null']);else try {
          _n3yeu['_sound']['onCanplay'](null), _n3yeu['_sound']['onError'](null), $ky['_null'] = null;
        } catch (fw914x) {
          console['warn']('[wxmini] _clearSound:' + fw914x), _n3yeu['_sound']['onCanplay'](anul3), _n3yeu['_sound']['onError'](anul3), $ky['_null'] = anul3;
        }
      }function trm5qs() {
        ul3v(), xgob49['loaded'] = !![], xgob49['event']('complete'), $ky['_audioCache'][xgob49['url']] = xgob49;
      }function u3y(id162) {
        console['error']('errCode=' + id162['errCode'] + '  errMsg=' + id162['errMsg']), ul3v(), xgob49['event']('error');
      }function anul3() {}this['_sound']['onCanplay'](trm5qs), this['_sound']['onError'](u3y), this['_sound']['src'] = ai6ld2;var xgob49 = this;
    }, avnu3l['play'] = function ($_0ke, n63lv) {
      $_0ke === void 0x0 && ($_0ke = 0x0), n63lv === void 0x0 && (n63lv = 0x0);var ob4x;if (this['url'] == pqrm['_tMusic']) {
        if (!$ky['_musicAudio']) $ky['_musicAudio'] = $ky['_createSound']();ob4x = $ky['_musicAudio'];
      } else ob4x = $ky['_createSound']();ob4x['src'] = this['url'];var cbp8h = new if2w91(ob4x);return cbp8h['url'] = this['url'], cbp8h['loops'] = n63lv, cbp8h['startTime'] = $_0ke, cbp8h['play'](), pqrm['addChannel'](cbp8h), cbp8h;
    }, avnu3l['dispose'] = function () {
      var _ek0yu = $ky['_audioCache'][this['url']];_ek0yu && (_ek0yu['src'] = '', delete $ky['_audioCache'][this['url']]);
    }, p5trmq(0x0, avnu3l, 'duration', function () {
      return this['_sound']['duration'];
    }), $ky['_createSound'] = function () {
      return $ky['_id']++, z8chbo['window']['wx']['createInnerAudioContext']();
    }, $ky['_musicAudio'] = null, $ky['_id'] = 0x0, $ky['_audioCache'] = {}, $ky['_null'] = undefined, $ky;
  }(bog),
      if2w91 = function (lv63n) {
    function r5m8p(bchz8o) {
      this['_audio'] = null, this['_onEnd'] = null, r5m8p['__super']['call'](this), this['_audio'] = bchz8o, this['_onEnd'] = j0ke$y['bind'](this['__onEnd'], this), bchz8o['onEnded'](this['_onEnd']);
    }y3enu(r5m8p, 'laya.wx.mini.MiniSoundChannel', lv63n);var q7mts5 = r5m8p['prototype'];return q7mts5['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (pmrct5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, q7mts5['__onNull'] = function () {}, q7mts5['play'] = function () {
      this['isStopped'] = ![], pqrm['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, q7mts5['stop'] = function () {
      this['isStopped'] = !![], pqrm['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (r5m8p['_null'] != undefined) this['_audio']['onEnded'](r5m8p['_null']);else try {
        this['_audio']['onEnded'](null), r5m8p['_null'] = null;
      } catch (ynkue) {
        console['warn']('[wxmini] stop:' + ynkue), this['_audio']['onEnded'](j0ke$y['bind'](this['__onNull'], this)), r5m8p['_null'] = j0ke$y['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, q7mts5['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, q7mts5['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pqrm['addChannel'](this), this['_audio']['play']();
    }, p5trmq(0x0, q7mts5, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p5trmq(0x0, q7mts5, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p5trmq(0x0, q7mts5, 'volume', function () {
      return 0x1;
    }, function (qtr5) {}), r5m8p['_null'] = undefined, r5m8p;
  }(hpcrz);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var vu3y_n in Laya) {
    var lnv63 = Laya[vu3y_n];lnv63 && lnv63['__isclass'] && (exports[vu3y_n] = lnv63);
  }
});