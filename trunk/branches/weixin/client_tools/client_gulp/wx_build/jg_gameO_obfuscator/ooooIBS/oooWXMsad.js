var c = wx.$o;
(function (window, document, smtq5r) {
  var fog4x9 = smtq5r['un'],
      gfxw = smtq5r['uns'],
      f2i19 = smtq5r['static'],
      xbgo4 = smtq5r['class'],
      h8rpzc = smtq5r['getset'],
      pcb = smtq5r['__newvec'],
      eyku0_ = laya['utils']['Browser'],
      rmc5t = laya['events']['Event'],
      mprt = laya['events']['EventDispatcher'],
      _nuv = laya['resource']['HTMLImage'],
      kyj0$e = laya['utils']['Handler'],
      un3e = laya['display']['Input'],
      n36vl = laya['net']['Loader'],
      c8oz = laya['maths']['Matrix'],
      pcmr = laya['renders']['Render'],
      n3v_lu = laya['utils']['RunDriver'],
      van3u = laya['media']['Sound'],
      pcr58 = laya['media']['SoundChannel'],
      k_yuen = laya['media']['SoundManager'],
      yenu3_ = laya['display']['Stage'],
      $y0k_e = laya['net']['URL'],
      ny_u3 = laya['utils']['Utils'],
      bogx4h = function () {
    function h8prc() {}return xbgo4(h8prc, 'laya.wx.mini.MiniAdpter'), h8prc['getJson'] = function (rqtm) {
      return JSON['parse'](rqtm);
    }, h8prc['init'] = function (rcmzp8, vyu3n_) {
      rcmzp8 === void 0x0 && (rcmzp8 = ![]), vyu3n_ === void 0x0 && (vyu3n_ = ![]);if (h8prc['_inited']) return;h8prc['window'] = window;if (h8prc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;h8prc['_inited'] = !![], h8prc['isZiYu'] = vyu3n_, h8prc['isPosMsgYu'] = rcmzp8, h8prc['EnvConfig'] = {}, !h8prc['isZiYu'] && (och8b['setNativeFileDir']('/layaairGame'), och8b['existDir'](och8b['fileNativeDir'], kyj0$e['create'](h8prc, h8prc['onMkdirCallBack']))), h8prc['window']['focus'] = function () {}, smtq5r['getUrlPath'] = function () {}, h8prc['window']['logtime'] = function (l_) {}, h8prc['window']['alertTimeLog'] = function (w491x) {}, h8prc['window']['resetShareInfo'] = function () {}, h8prc['window']['CanvasRenderingContext2D'] = function () {}, h8prc['window']['CanvasRenderingContext2D']['prototype'] = h8prc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h8prc['window']['document']['body']['appendChild'] = function () {}, h8prc['EnvConfig']['pixelRatioInt'] = 0x0, n3v_lu['getPixelRatio'] = h8prc['pixelRatio'], h8prc['_preCreateElement'] = eyku0_['createElement'], eyku0_['createElement'] = h8prc['createElement'], n3v_lu['createShaderCondition'] = h8prc['createShaderCondition'], ny_u3['parseXMLFromString'] = h8prc['parseXMLFromString'], un3e['_createInputElement'] = rpt5cm['_createInputElement'], h8prc['EnvConfig']['load'] = n36vl['prototype']['load'], n36vl['prototype']['load'] = ifxw['prototype']['load'], h8prc['isZiYu'] && rcmzp8 && wx['onMessage'](function (bogz) {
        bogz['isLoad'] && (och8b['ziyuFileData'][bogz['url']] = bogz['data']);
      });
    }, h8prc['onMkdirCallBack'] = function (f49gw, vlad63) {
      if (!f49gw) och8b['filesListObj'] = JSON['parse'](vlad63['data']);
    }, h8prc['pixelRatio'] = function () {
      if (!h8prc['EnvConfig']['pixelRatioInt']) try {
        var cmzp = wx['getSystemInfoSync']();return h8prc['EnvConfig']['pixelRatioInt'] = cmzp['pixelRatio'], cmzp = cmzp, cmzp['pixelRatio'];
      } catch (o8ghbz) {}return h8prc['EnvConfig']['pixelRatioInt'];
    }, h8prc['createElement'] = function (k0y$) {
      if (k0y$ == 'canvas') {
        var g94xfo;return h8prc['idx'] == 0x1 ? h8prc['isZiYu'] ? (g94xfo = sharedCanvas, g94xfo['style'] = {}) : g94xfo = window['canvas'] : g94xfo = window['wx']['createCanvas'](), h8prc['idx']++, g94xfo;
      } else {
        if (k0y$ == 'textarea' || k0y$ == 'input') return h8prc['onCreateInput'](k0y$);else {
          if (k0y$ == 'div') {
            var rms = h8prc['_preCreateElement'](k0y$);return rms['contains'] = function (rmt5qs) {
              return null;
            }, rms['removeChild'] = function (lan63) {}, rms;
          } else return h8prc['_preCreateElement'](k0y$);
        }
      }
    }, h8prc['onCreateInput'] = function (i2d6w) {
      var y$ej = h8prc['_preCreateElement'](i2d6w);return y$ej['focus'] = rpt5cm['wxinputFocus'], y$ej['blur'] = rpt5cm['wxinputblur'], y$ej['style'] = {}, y$ej['value'] = 0x0, y$ej['parentElement'] = {}, y$ej['placeholder'] = {}, y$ej['type'] = {}, y$ej['setColor'] = function (_kyn) {}, y$ej['setType'] = function (l3avnu) {}, y$ej['setFontFace'] = function (chzpr8) {}, y$ej['addEventListener'] = function (a3lvn) {}, y$ej['contains'] = function (pqtmr) {
        return null;
      }, y$ej['removeChild'] = function (g8zhbo) {}, y$ej;
    }, h8prc['createShaderCondition'] = function (a3l6nv) {
      var og9bx = this,
          v3nlau = function () {
        var n3ey_ = a3l6nv;return og9bx[a3l6nv['replace']('this.', '')];
      };return v3nlau;
    }, h8prc['EnvConfig'] = null, h8prc['window'] = null, h8prc['_preCreateElement'] = null, h8prc['_inited'] = ![], h8prc['wxRequest'] = null, h8prc['systemInfo'] = null, h8prc['version'] = '0.0.1', h8prc['isZiYu'] = ![], h8prc['isPosMsgYu'] = ![], h8prc['parseXMLFromString'] = function (r5tmqp) {
      var rqmp5t, crh8zp;r5tmqp = r5tmqp['replace'](/>\s+</g, '><');try {
        rqmp5t = new window['Parser']['DOMParser']()['parseFromString'](r5tmqp, 'text/xml');
      } catch (w62d) {
        throw '需要引入xml解析库文件';
      }return rqmp5t;
    }, h8prc['idx'] = 0x1, h8prc;
  }(),
      k0ejy = function () {
    function l36n() {}xbgo4(l36n, 'laya.wx.mini.MiniImage');var v6a3n = l36n['prototype'];return v6a3n['_loadImage'] = function (_vn3uy) {
      var i2ad61 = this,
          _y$e0k = ![];_vn3uy['indexOf']('layaNativeDir/') == -0x1 && (_y$e0k = !![], _vn3uy = $y0k_e['formatURL'](_vn3uy));if (!och8b['getFileInfo'](_vn3uy)) {
        if (_vn3uy['indexOf']('http://') != -0x1 || _vn3uy['indexOf']('https://') != -0x1) och8b['downImg'](_vn3uy, new kyj0$e(l36n, l36n['onDownImgCallBack'], [_vn3uy, i2ad61]), _vn3uy);else l36n['onCreateImage'](_vn3uy, i2ad61, !![]);
      } else l36n['onCreateImage'](_vn3uy, i2ad61, !_y$e0k);
    }, l36n['onDownImgCallBack'] = function (v3lu_n, rpmc58, lanvu3) {
      if (!lanvu3) l36n['onCreateImage'](v3lu_n, rpmc58);else rpmc58['onError'](null);
    }, l36n['onCreateImage'] = function (zg4ho, n3uvy_, w91f) {
      w91f === void 0x0 && (w91f = ![]);var va36l;if (!w91f) {
        var y_k$0e = och8b['getFileInfo'](zg4ho),
            i1fdw2 = y_k$0e['md5'];va36l = och8b['getFileNativePath'](i1fdw2);
      } else va36l = zg4ho;if (n3uvy_['imgCache'] == null) n3uvy_['imgCache'] = {};var al62di;function cr58p() {
        al62di['onload'] = null, al62di['onerror'] = null, delete n3uvy_['imgCache'][zg4ho];
      };var k_yn = function () {
        cr58p(), n3uvy_['onLoaded'](al62di);
      },
          $eyj0k = function () {
        cr58p(), n3uvy_['event']('error', 'Load image failed');
      };n3uvy_['_type'] == 'nativeimage' ? (al62di = new eyku0_['window']['Image'](), al62di['crossOrigin'] = '', al62di['onload'] = k_yn, al62di['onerror'] = $eyj0k, al62di['src'] = va36l, n3uvy_['imgCache'][zg4ho] = al62di) : new _nuv['create'](va36l, { 'onload': k_yn, 'onerror': $eyj0k, 'onCreate': function (z8oghb) {
          al62di = z8oghb, n3uvy_['imgCache'][zg4ho] = z8oghb;
        } });
    }, l36n;
  }(),
      rpt5cm = function () {
    function srm() {}return xbgo4(srm, 'laya.wx.mini.MiniInput'), srm['_createInputElement'] = function () {
      un3e['_initInput'](un3e['area'] = eyku0_['createElement']('textarea')), un3e['_initInput'](un3e['input'] = eyku0_['createElement']('input')), un3e['inputContainer'] = eyku0_['createElement']('div'), un3e['inputContainer']['style']['position'] = 'absolute', un3e['inputContainer']['style']['zIndex'] = 0x186a0, eyku0_['container']['appendChild'](un3e['inputContainer']), un3e['inputContainer']['setPos'] = function (ky_uen, oh4zg) {
        un3e['inputContainer']['style']['left'] = ky_uen + 'px', un3e['inputContainer']['style']['top'] = oh4zg + 'px';
      }, smtq5r['stage']['on']('resize', null, srm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tpm5rq) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), k_yuen['_soundClass'] = zbh4o, k_yuen['_musicClass'] = zbh4o;
    }, srm['_onStageResize'] = function () {
      var pzhr = smtq5r['stage']['_canvasTransform']['identity']();pzhr['scale'](eyku0_['width'] / pcmr['canvas']['width'] / n3v_lu['getPixelRatio'](), eyku0_['height'] / pcmr['canvas']['height'] / n3v_lu['getPixelRatio']());
    }, srm['wxinputFocus'] = function (mrtsq) {
      var o8hc = un3e['inputElement']['target'];if (o8hc && !o8hc['editable']) return;bogx4h['window']['wx']['offKeyboardConfirm'](), bogx4h['window']['wx']['offKeyboardInput'](), bogx4h['window']['wx']['showKeyboard']({ 'defaultValue': o8hc['text'], 'maxLength': o8hc['maxChars'], 'multiple': o8hc['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (en_y) {}, 'fail': function (r58pmc) {} }), bogx4h['window']['wx']['onKeyboardConfirm'](function (n3y_ue) {
        var advl = n3y_ue ? n3y_ue['value'] : '';o8hc['text'] = advl, o8hc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), bogx4h['window']['wx']['onKeyboardInput'](function (nulva3) {
        var _u0eky = nulva3 ? nulva3['value'] : '';if (!o8hc['multiline']) {
          if (_u0eky['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }o8hc['text'] = _u0eky, o8hc['event']('input');
      });
    }, srm['inputEnter'] = function () {
      un3e['inputElement']['target']['focus'] = ![];
    }, srm['wxinputblur'] = function () {
      srm['hideKeyboard']();
    }, srm['hideKeyboard'] = function () {
      bogx4h['window']['wx']['offKeyboardConfirm'](), bogx4h['window']['wx']['offKeyboardInput'](), bogx4h['window']['wx']['hideKeyboard']({ 'success': function (u_kyne) {
          console['log']('隐藏键盘');
        }, 'fail': function (n_lv) {
          console['log']('隐藏键盘出错:' + (n_lv ? n_lv['errMsg'] : ''));
        } });
    }, srm;
  }(),
      ifxw = function () {
    function w1d2if() {}xbgo4(w1d2if, 'laya.wx.mini.MiniLoader');var bho4gz = w1d2if['prototype'];return bho4gz['load'] = function (gf94w, iad16, tm75s, dav6l2, f49wg) {
      tm75s === void 0x0 && (tm75s = !![]), f49wg === void 0x0 && (f49wg = ![]);var iwdf2 = this;iwdf2['_url'] = gf94w;if (gf94w['indexOf']('data:image') === 0x0) iwdf2['_type'] = iad16 = 'image';else iwdf2['_type'] = iad16 || (iad16 = iwdf2['getTypeFromUrl'](gf94w));iwdf2['_cache'] = tm75s, iwdf2['_data'] = null;var xg9 = 'ascii';if (gf94w['indexOf']('.fnt') != -0x1) xg9 = 'utf8';else iad16 == 'arraybuffer' && (xg9 = '');;var phzc = ny_u3['getFileExtension'](gf94w);if (w1d2if['_fileTypeArr']['indexOf'](phzc) != -0x1) bogx4h['EnvConfig']['load']['call'](this, gf94w, iad16, tm75s, dav6l2, f49wg);else {
        if (!och8b['getFileInfo'](gf94w)) {
          if (gf94w['indexOf']('layaNativeDir/') != -0x1) {
            if (bogx4h['isZiYu']) {
              var cz8pb = och8b['ziyuFileData'][gf94w];iwdf2['onLoaded'](cz8pb);return;
            } else {
              cosnole['log']('read read'), och8b['read'](gf94w, xg9, new kyj0$e(w1d2if, w1d2if['onReadNativeCallBack'], [xg9, gf94w, iad16, tm75s, dav6l2, f49wg, iwdf2]));return;
            }
          }if ($y0k_e['rootPath'] == '') var phc8rz = gf94w;else phc8rz = gf94w['split']($y0k_e['rootPath'])[0x0];gf94w['indexOf']('http://') != -0x1 || gf94w['indexOf']('https://') != -0x1 ? bogx4h['EnvConfig']['load']['call'](iwdf2, gf94w, iad16, tm75s, dav6l2, f49wg) : och8b['readFile'](phc8rz, xg9, new kyj0$e(w1d2if, w1d2if['onReadNativeCallBack'], [xg9, gf94w, iad16, tm75s, dav6l2, f49wg, iwdf2]), gf94w);
        } else bogx4h['EnvConfig']['load']['call'](this, gf94w, iad16, tm75s, dav6l2, f49wg);
      }
    }, bho4gz['resMgrLoad'] = function (e3yn, ye3nu_, ad612, euny_3, _$0yke, wfxi91, zr8hp) {
      ad612 === void 0x0 && (ad612 = 0x0), euny_3 === void 0x0 && (euny_3 = ![]), _$0yke === void 0x0 && (_$0yke = ![]), wfxi91 === void 0x0 && (wfxi91 = 0x0), zr8hp === void 0x0 && (zr8hp = 0x3), e3yn['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e3yn), bogx4h['EnvConfig']['resMgrLoad'](e3yn, (ob4xg, if9xw1, zo8bhc) => {
        w1d2if['prototype']['resMgrLoadCallBack'](ob4xg, if9xw1, zo8bhc, ye3nu_);
      }, ad612, euny_3, _$0yke, wfxi91, zr8hp);
    }, bho4gz['resMgrLoadCallBack'] = function (vu3l_n, ida61, if1w, czrpm8) {
      console['log']('buff:::', vu3l_n, if1w, och8b['fileNativeDir'] + '///' + och8b['fileListName']), czrpm8(vu3l_n, ida61, if1w);
    }, bho4gz['clearRes'] = function (a2d1, al3d6) {
      al3d6 === void 0x0 && (al3d6 = ![]);var cbh8pz = this;cbh8pz['clearRes'](a2d1, al3d6);var y$0_ke = och8b['getFileInfo'](a2d1);if (y$0_ke && (a2d1['indexOf']('http://') != -0x1 || a2d1['indexOf']('https://') != -0x1)) {
        var iwd2 = y$0_ke['md5'],
            zcp8h = och8b['getFileNativePath'](iwd2);och8b['remove'](zcp8h);
      }
    }, w1d2if['onReadNativeCallBack'] = function (ghz4ob, x9fw14, $0ekyj, navul3, i216da, x9o4g, ek$j0, yvnu, f1w) {
      navul3 === void 0x0 && (navul3 = !![]), x9o4g === void 0x0 && (x9o4g = ![]), yvnu === void 0x0 && (yvnu = 0x0);if (!yvnu) {
        var ukyne;if ($0ekyj == 'json' || $0ekyj == 'atlas') ukyne = bogx4h['getJson'](f1w['data']);else $0ekyj == 'xml' ? ukyne = ny_u3['parseXMLFromString'](f1w['data']) : ukyne = f1w['data'];ek$j0['onLoaded'](ukyne), !bogx4h['isZiYu'] && bogx4h['isPosMsgYu'] && $0ekyj != 'arraybuffer' && wx['postMessage']({ 'url': x9fw14, 'data': ukyne, 'isLoad': !![] });
      } else yvnu == 0x1 && bogx4h['EnvConfig']['load']['call'](ek$j0, x9fw14, $0ekyj, navul3, i216da, x9o4g);
    }, f2i19(w1d2if, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), w1d2if;
  }(),
      och8b = function (d2li6) {
    function przcm8() {
      przcm8['__super']['call'](this);;
    }return xbgo4(przcm8, 'laya.wx.mini.MiniFileMgr', d2li6), przcm8['isLoadFile'] = function (nl3u_v) {
      return przcm8['_fileTypeArr']['indexOf'](nl3u_v) != -0x1 ? !![] : ![];
    }, przcm8['getFileInfo'] = function (o4bhzg) {
      var i162wd = o4bhzg['split']('?')[0x0],
          ct5mr = przcm8['filesListObj'][i162wd];if (ct5mr == null) return null;else return ct5mr;return null;
    }, przcm8['onFileUpdate'] = function (pr8zh, zpcmr8) {
      var go4z = pr8zh['split']('/'),
          mr5qts = go4z[go4z['length'] - 0x1],
          rtmqs5 = przcm8['getFileInfo'](zpcmr8);if (rtmqs5 == null) przcm8['onSaveFile'](zpcmr8, mr5qts);else {
        if (rtmqs5['readyUrl'] != zpcmr8) przcm8['remove'](mr5qts, zpcmr8);
      }
    }, przcm8['exits'] = function (key_nu, hzbgo8) {
      var nvu3a = przcm8['getFileNativePath'](key_nu);przcm8['fs']['getFileInfo']({ 'filePath': nvu3a, 'success': function (_eu3ny) {
          hzbgo8 != null && hzbgo8['runWith']([0x0, _eu3ny]);
        }, 'fail': function (c8zmpr) {
          hzbgo8 != null && hzbgo8['runWith']([0x1, c8zmpr]);
        } });
    }, przcm8['read'] = function (h8ogz, w2idf, m57tqs, bzc8) {
      w2idf === void 0x0 && (w2idf = 'ascill'), bzc8 === void 0x0 && (bzc8 = '');var xbg49;bzc8 != '' ? xbg49 = przcm8['getFileNativePath'](h8ogz) : xbg49 = h8ogz, przcm8['fs']['readFile']({ 'filePath': xbg49, 'encoding': w2idf, 'success': function (oxh4g) {
          m57tqs != null && m57tqs['runWith']([0x0, oxh4g]);
        }, 'fail': function (hpczr8) {
          if (hpczr8 && bzc8 != '') przcm8['down'](bzc8, w2idf, m57tqs, bzc8);else m57tqs != null && m57tqs['runWith']([0x1]);
        } });
    }, przcm8['readNativeFile'] = function (vulan, x9i1w) {
      przcm8['fs']['readFile']({ 'filePath': vulan, 'encoding': '', 'success': function (d62lai) {
          x9i1w != null && x9i1w['runWith']([0x0]);
        }, 'fail': function (qmptr5) {
          x9i1w != null && x9i1w['runWith']([0x1]);
        } });
    }, przcm8['down'] = function (mt5qrs, nuk, zg8bo, msrqt) {
      nuk === void 0x0 && (nuk = 'ascill'), msrqt === void 0x0 && (msrqt = '');var prct5 = przcm8['getFileNativePath'](msrqt),
          zbc8h = przcm8['wxdown']({ 'url': mt5qrs, 'filePath': prct5, 'success': function (zbh4) {
          if (zbh4['statusCode'] === 0xc8) przcm8['readFile'](zbh4['filePath'], nuk, zg8bo, msrqt);
        }, 'fail': function (pbh) {
          zg8bo != null && zg8bo['runWith']([0x1, pbh]);
        } });zbc8h['onProgressUpdate'](function (hczpb) {
        zg8bo != null && zg8bo['runWith']([0x2, hczpb['progress']]);
      });
    }, przcm8['readFile'] = function (ad6vl2, i12, ogbx4, b4xg9o) {
      i12 === void 0x0 && (i12 = 'ascill'), b4xg9o === void 0x0 && (b4xg9o = ''), przcm8['fs']['readFile']({ 'filePath': ad6vl2, 'encoding': i12, 'success': function (mpq5tr) {
          if (ad6vl2['indexOf']('http://') != -0x1 || ad6vl2['indexOf']('https://') != -0x1) przcm8['onFileUpdate'](ad6vl2, b4xg9o);ogbx4 != null && ogbx4['runWith']([0x0, mpq5tr]);
        }, 'fail': function (d6iw) {
          if (d6iw) ogbx4 != null && ogbx4['runWith']([0x1, d6iw]);
        } });
    }, przcm8['downImg'] = function (a6ln3, n3_yv, fw94g) {
      fw94g === void 0x0 && (fw94g = '');var r5mptq = przcm8['wxdown']({ 'url': a6ln3, 'success': function (qm75ts) {
          qm75ts['statusCode'] === 0xc8 && przcm8['copyFile'](qm75ts['tempFilePath'], fw94g, n3_yv);
        }, 'fail': function (u3e_yn) {
          n3_yv != null && n3_yv['runWith']([0x1, u3e_yn]);
        } });
    }, przcm8['copyFile'] = function (h8bzg, t7mq5s, pm5tcr) {
      var oz8bhg = h8bzg['split']('/'),
          g8ob = oz8bhg[oz8bhg['length'] - 0x1],
          w1f9 = t7mq5s['split']('?')[0x0],
          rms5 = przcm8['getFileInfo'](t7mq5s),
          nykeu_ = przcm8['getFileNativePath'](g8ob);przcm8['fs']['copyFile']({ 'srcPath': h8bzg, 'destPath': nykeu_, 'success': function (e$0yk_) {
          if (!rms5) przcm8['onSaveFile'](t7mq5s, g8ob), pm5tcr != null && pm5tcr['runWith']([0x0]);else {
            if (rms5['readyUrl'] != t7mq5s) przcm8['remove'](g8ob, t7mq5s, pm5tcr);
          }
        }, 'fail': function (uvl) {
          pm5tcr != null && pm5tcr['runWith']([0x1, uvl]);
        } });
    }, przcm8['getFileNativePath'] = function (h8bcp) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + h8bcp;
    }, przcm8['remove'] = function (kueyn, iw2df, x19f4) {
      iw2df === void 0x0 && (iw2df = '');var r8hpz = przcm8['getFileInfo'](iw2df),
          d3vla6 = przcm8['getFileNativePath'](r8hpz['md5']);smtq5r['loader']['clearRes'](r8hpz['readyUrl']), przcm8['fs']['unlink']({ 'filePath': d3vla6, 'success': function (fw1i) {
          if (iw2df != '') przcm8['onSaveFile'](iw2df, kueyn);x19f4 != null && x19f4['runWith']([0x0]);
        }, 'fail': function (qptm) {} });
    }, przcm8['onSaveFile'] = function (z4obgh, bhzc8o) {
      var hgbo4z = z4obgh['split']('?')[0x0];przcm8['filesListObj'][hgbo4z] = { 'md5': bhzc8o, 'readyUrl': z4obgh }, przcm8['fs']['writeFile']({ 'filePath': przcm8['fileNativeDir'] + '/' + przcm8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](przcm8['filesListObj']), 'success': function (ey0$) {
          console['log']('写入测试测试成功：', ey0$);
        }, 'fail': function (xbog9) {
          console['log']('写入测试测试失败：', xbog9);
        } });
    }, przcm8['existDir'] = function (zbh4og, _ye0uk) {
      przcm8['fs']['mkdir']({ 'dirPath': zbh4og, 'success': function (ek_ynu) {
          _ye0uk != null && _ye0uk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (f9og) {
          if (f9og['errMsg']['indexOf']('file already exists') != -0x1) przcm8['readSync'](przcm8['fileListName'], 'utf8', _ye0uk);else _ye0uk != null && _ye0uk['runWith']([0x1, f9og]);
        } });
    }, przcm8['readSync'] = function (v6da2l, _$e0ky, vn3yu, fgx) {
      _$e0ky === void 0x0 && (_$e0ky = 'ascill'), fgx === void 0x0 && (fgx = '');var m57stq = przcm8['getFileNativePath'](v6da2l),
          w621d;try {
        w621d = przcm8['fs']['readFileSync'](m57stq), vn3yu != null && vn3yu['runWith']([0x0, { 'data': w621d }]);
      } catch (zh8ogb) {
        vn3yu != null && vn3yu['runWith']([0x1]);
      }
    }, przcm8['readCache'] = function () {}, przcm8['writeCache'] = function (dw21if) {
      var m85pr = readyUrl['split']('?')[0x0];przcm8['filesListObj'][m85pr] = { 'md5': md5Name, 'readyUrl': readyUrl }, przcm8['fs']['writeFile']({ 'filePath': przcm8['fileNativeDir'] + '/' + przcm8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](przcm8['filesListObj']), 'success': function (pzbh) {}, 'fail': function (d2a16i) {} });
    }, przcm8['setNativeFileDir'] = function (di6la) {
      przcm8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + di6la;
    }, przcm8['filesListObj'] = {}, przcm8['fileNativeDir'] = null, przcm8['fileListName'] = 'layaairfiles.txt', przcm8['ziyuFileData'] = {}, f2i19(przcm8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), przcm8;
  }(mprt),
      zbh4o = function (ey_0uk) {
    function go4bxh() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], go4bxh['__super']['call'](this), this['_sound'] = go4bxh['_createSound']();
    }xbgo4(go4bxh, 'laya.wx.mini.MiniSound', ey_0uk);var a2vl6d = go4bxh['prototype'];return a2vl6d['load'] = function (_v3nlu) {
      var vunl = this;_v3nlu = $y0k_e['formatURL'](_v3nlu), this['url'] = _v3nlu;if (go4bxh['_audioCache'][_v3nlu]) {
        this['event']('complete');return;
      }function i91xw() {
        if (go4bxh['_null'] != undefined) vunl['_sound']['onCanplay'](go4bxh['_null']), vunl['_sound']['onError'](go4bxh['_null']);else try {
          vunl['_sound']['onCanplay'](null), vunl['_sound']['onError'](null), go4bxh['_null'] = null;
        } catch (rhcp8z) {
          console['warn']('[wxmini] _clearSound:' + rhcp8z), vunl['_sound']['onCanplay'](wd6i12), vunl['_sound']['onError'](wd6i12), go4bxh['_null'] = wd6i12;
        }
      }function fiw1d() {
        i91xw(), fwi291['loaded'] = !![], fwi291['event']('complete'), go4bxh['_audioCache'][fwi291['url']] = fwi291;
      }function dl3v6a(rm5c) {
        console['error']('errCode=' + rm5c['errCode'] + '  errMsg=' + rm5c['errMsg']), i91xw(), fwi291['event']('error');
      }function wd6i12() {}this['_sound']['onCanplay'](fiw1d), this['_sound']['onError'](dl3v6a), this['_sound']['src'] = _v3nlu;var fwi291 = this;
    }, a2vl6d['play'] = function (zbhog4, bx4go9) {
      zbhog4 === void 0x0 && (zbhog4 = 0x0), bx4go9 === void 0x0 && (bx4go9 = 0x0);var vun3y_;if (this['url'] == k_yuen['_tMusic']) {
        if (!go4bxh['_musicAudio']) go4bxh['_musicAudio'] = go4bxh['_createSound']();vun3y_ = go4bxh['_musicAudio'];
      } else vun3y_ = go4bxh['_createSound']();vun3y_['src'] = this['url'];var j$yk0e = new t5m7s(vun3y_);return j$yk0e['url'] = this['url'], j$yk0e['loops'] = bx4go9, j$yk0e['startTime'] = zbhog4, j$yk0e['play'](), k_yuen['addChannel'](j$yk0e), j$yk0e;
    }, a2vl6d['dispose'] = function () {
      var bpz = go4bxh['_audioCache'][this['url']];bpz && (bpz['src'] = '', delete go4bxh['_audioCache'][this['url']]);
    }, h8rpzc(0x0, a2vl6d, 'duration', function () {
      return this['_sound']['duration'];
    }), go4bxh['_createSound'] = function () {
      return go4bxh['_id']++, bogx4h['window']['wx']['createInnerAudioContext']();
    }, go4bxh['_musicAudio'] = null, go4bxh['_id'] = 0x0, go4bxh['_audioCache'] = {}, go4bxh['_null'] = undefined, go4bxh;
  }(mprt),
      t5m7s = function (i62al) {
    function t5qm(u3n_yv) {
      this['_audio'] = null, this['_onEnd'] = null, t5qm['__super']['call'](this), this['_audio'] = u3n_yv, this['_onEnd'] = ny_u3['bind'](this['__onEnd'], this), u3n_yv['onEnded'](this['_onEnd']);
    }xbgo4(t5qm, 'laya.wx.mini.MiniSoundChannel', i62al);var _uey0k = t5qm['prototype'];return _uey0k['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (smtq5r['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, _uey0k['__onNull'] = function () {}, _uey0k['play'] = function () {
      this['isStopped'] = ![], k_yuen['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, _uey0k['stop'] = function () {
      this['isStopped'] = !![], k_yuen['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (t5qm['_null'] != undefined) this['_audio']['onEnded'](t5qm['_null']);else try {
        this['_audio']['onEnded'](null), t5qm['_null'] = null;
      } catch (bo9xg) {
        console['warn']('[wxmini] stop:' + bo9xg), this['_audio']['onEnded'](ny_u3['bind'](this['__onNull'], this)), t5qm['_null'] = ny_u3['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, _uey0k['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, _uey0k['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], k_yuen['addChannel'](this), this['_audio']['play']();
    }, h8rpzc(0x0, _uey0k, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), h8rpzc(0x0, _uey0k, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), h8rpzc(0x0, _uey0k, 'volume', function () {
      return 0x1;
    }, function ($eyk_) {}), t5qm['_null'] = undefined, t5qm;
  }(pcr58);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var i6adl in Laya) {
    var e3nyu_ = Laya[i6adl];e3nyu_ && e3nyu_['__isclass'] && (exports[i6adl] = e3nyu_);
  }
});