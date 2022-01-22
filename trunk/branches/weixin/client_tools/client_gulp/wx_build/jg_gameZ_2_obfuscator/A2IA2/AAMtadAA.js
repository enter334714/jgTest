var d = wx.$A;
(function (window, document, oqb4g) {
  var k3uv8 = oqb4g['un'],
      l6wzh = oqb4g['uns'],
      $enmd = oqb4g['static'],
      qr_ = oqb4g['class'],
      iu13pk = oqb4g['getset'],
      k1u8p3 = oqb4g['__newvec'],
      v$ae0 = laya['utils']['Browser'],
      v80 = laya['events']['Event'],
      ev9m$ = laya['events']['EventDispatcher'],
      p1yxti = laya['resource']['HTMLImage'],
      n$em9d = laya['utils']['Handler'],
      kip3 = laya['display']['Input'],
      g4o_b = laya['net']['Loader'],
      xyikp = laya['maths']['Matrix'],
      bo_tx = laya['renders']['Render'],
      og_r = laya['utils']['RunDriver'],
      f4r7g = laya['media']['Sound'],
      _obgtq = laya['media']['SoundChannel'],
      $08a = laya['media']['SoundManager'],
      qtyib = laya['display']['Stage'],
      tpiy1x = laya['net']['URL'],
      tyxoqb = laya['utils']['Utils'],
      nm$a9e = function () {
    function upki1() {}return qr_(upki1, 'laya.wx.mini.MiniAdpter'), upki1['getJson'] = function (wl6hz) {
      return JSON['parse'](wl6hz);
    }, upki1['init'] = function (q_toxb, rgof4_) {
      q_toxb === void 0x0 && (q_toxb = ![]), rgof4_ === void 0x0 && (rgof4_ = ![]);if (upki1['_inited']) return;upki1['window'] = window;if (upki1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;upki1['_inited'] = !![], upki1['isZiYu'] = rgof4_, upki1['isPosMsgYu'] = q_toxb, upki1['EnvConfig'] = {}, !upki1['isZiYu'] && (q_ogt['setNativeFileDir']('/layaairGame'), q_ogt['existDir'](q_ogt['fileNativeDir'], n$em9d['create'](upki1, upki1['onMkdirCallBack']))), upki1['window']['focus'] = function () {}, oqb4g['getUrlPath'] = function () {}, upki1['window']['logtime'] = function (d$snme) {}, upki1['window']['alertTimeLog'] = function (g4r_q) {}, upki1['window']['resetShareInfo'] = function () {}, upki1['window']['CanvasRenderingContext2D'] = function () {}, upki1['window']['CanvasRenderingContext2D']['prototype'] = upki1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], upki1['window']['document']['body']['appendChild'] = function () {}, upki1['EnvConfig']['pixelRatioInt'] = 0x0, og_r['getPixelRatio'] = upki1['pixelRatio'], upki1['_preCreateElement'] = v$ae0['createElement'], v$ae0['createElement'] = upki1['createElement'], og_r['createShaderCondition'] = upki1['createShaderCondition'], tyxoqb['parseXMLFromString'] = upki1['parseXMLFromString'], kip3['_createInputElement'] = f475gr['_createInputElement'], upki1['EnvConfig']['load'] = g4o_b['prototype']['load'], g4o_b['prototype']['load'] = piyuk['prototype']['load'], upki1['isZiYu'] && q_toxb && wx['onMessage'](function (wlzh) {
        wlzh['isLoad'] && (q_ogt['ziyuFileData'][wlzh['url']] = wlzh['data']);
      });
    }, upki1['onMkdirCallBack'] = function (mdjs6n, yu1ik) {
      if (!mdjs6n) q_ogt['filesListObj'] = JSON['parse'](yu1ik['data']);
    }, upki1['pixelRatio'] = function () {
      if (!upki1['EnvConfig']['pixelRatioInt']) try {
        var nmed9 = wx['getSystemInfoSync']();return upki1['EnvConfig']['pixelRatioInt'] = nmed9['pixelRatio'], nmed9 = nmed9, nmed9['pixelRatio'];
      } catch (upk1y) {}return upki1['EnvConfig']['pixelRatioInt'];
    }, upki1['createElement'] = function (bot) {
      if (bot == 'canvas') {
        var ev0a;return upki1['idx'] == 0x1 ? upki1['isZiYu'] ? (ev0a = sharedCanvas, ev0a['style'] = {}) : ev0a = window['canvas'] : ev0a = window['wx']['createCanvas'](), upki1['idx']++, ev0a;
      } else {
        if (bot == 'textarea' || bot == 'input') return upki1['onCreateInput'](bot);else {
          if (bot == 'div') {
            var sdhjz = upki1['_preCreateElement'](bot);return sdhjz['contains'] = function (a9v0e$) {
              return null;
            }, sdhjz['removeChild'] = function (vem$a9) {}, sdhjz;
          } else return upki1['_preCreateElement'](bot);
        }
      }
    }, upki1['onCreateInput'] = function (q_box) {
      var _bqg4o = upki1['_preCreateElement'](q_box);return _bqg4o['focus'] = f475gr['wxinputFocus'], _bqg4o['blur'] = f475gr['wxinputblur'], _bqg4o['style'] = {}, _bqg4o['value'] = 0x0, _bqg4o['parentElement'] = {}, _bqg4o['placeholder'] = {}, _bqg4o['type'] = {}, _bqg4o['setColor'] = function (ogfr4) {}, _bqg4o['setType'] = function (rf457g) {}, _bqg4o['setFontFace'] = function (nde9m) {}, _bqg4o['addEventListener'] = function (txbiyq) {}, _bqg4o['contains'] = function (f4g_o) {
        return null;
      }, _bqg4o['removeChild'] = function (wl2hj) {}, _bqg4o;
    }, upki1['createShaderCondition'] = function (x1kyip) {
      var pk8u = this,
          mnj6s = function () {
        var tb_qgo = x1kyip;return pk8u[x1kyip['replace']('this.', '')];
      };return mnj6s;
    }, upki1['EnvConfig'] = null, upki1['window'] = null, upki1['_preCreateElement'] = null, upki1['_inited'] = ![], upki1['wxRequest'] = null, upki1['systemInfo'] = null, upki1['version'] = '0.0.1', upki1['isZiYu'] = ![], upki1['isPosMsgYu'] = ![], upki1['parseXMLFromString'] = function (h6lwz) {
      var _xtbq, edm9n$;h6lwz = h6lwz['replace'](/>\s+</g, '><');try {
        _xtbq = new window['Parser']['DOMParser']()['parseFromString'](h6lwz, 'text/xml');
      } catch (u038) {
        throw '需要引入xml解析库文件';
      }return _xtbq;
    }, upki1['idx'] = 0x1, upki1;
  }(),
      qt_bgo = function () {
    function kuyi1p() {}qr_(kuyi1p, 'laya.wx.mini.MiniImage');var nd6em = kuyi1p['prototype'];return nd6em['_loadImage'] = function (yxpt1i) {
      var up13ik = this,
          xqytib = ![];yxpt1i['indexOf']('layaNativeDir/') == -0x1 && (xqytib = !![], yxpt1i = tpiy1x['formatURL'](yxpt1i));if (!q_ogt['getFileInfo'](yxpt1i)) {
        if (yxpt1i['indexOf']('http://') != -0x1 || yxpt1i['indexOf']('https://') != -0x1) q_ogt['downImg'](yxpt1i, new n$em9d(kuyi1p, kuyi1p['onDownImgCallBack'], [yxpt1i, up13ik]), yxpt1i);else kuyi1p['onCreateImage'](yxpt1i, up13ik, !![]);
      } else kuyi1p['onCreateImage'](yxpt1i, up13ik, !xqytib);
    }, kuyi1p['onDownImgCallBack'] = function (o_fgr4, qoxybt, _ofr4g) {
      if (!_ofr4g) kuyi1p['onCreateImage'](o_fgr4, qoxybt);else qoxybt['onError'](null);
    }, kuyi1p['onCreateImage'] = function (ea90v$, jzws6, bo4g_) {
      bo4g_ === void 0x0 && (bo4g_ = ![]);var _o4frg;if (!bo4g_) {
        var fr_4g7 = q_ogt['getFileInfo'](ea90v$),
            txibq = fr_4g7['md5'];_o4frg = q_ogt['getFileNativePath'](txibq);
      } else _o4frg = ea90v$;if (jzws6['imgCache'] == null) jzws6['imgCache'] = {};var g_f7r;function en$a9m() {
        g_f7r['onload'] = null, g_f7r['onerror'] = null, delete jzws6['imgCache'][ea90v$];
      };var puk1y = function () {
        en$a9m(), jzws6['onLoaded'](g_f7r);
      },
          zs6dj = function () {
        en$a9m(), jzws6['event']('error', 'Load image failed');
      };jzws6['_type'] == 'nativeimage' ? (g_f7r = new v$ae0['window']['Image'](), g_f7r['crossOrigin'] = '', g_f7r['onload'] = puk1y, g_f7r['onerror'] = zs6dj, g_f7r['src'] = _o4frg, jzws6['imgCache'][ea90v$] = g_f7r) : new p1yxti['create'](_o4frg, { 'onload': puk1y, 'onerror': zs6dj, 'onCreate': function (gr_of) {
          g_f7r = gr_of, jzws6['imgCache'][ea90v$] = gr_of;
        } });
    }, kuyi1p;
  }(),
      f475gr = function () {
    function lwzj2() {}return qr_(lwzj2, 'laya.wx.mini.MiniInput'), lwzj2['_createInputElement'] = function () {
      kip3['_initInput'](kip3['area'] = v$ae0['createElement']('textarea')), kip3['_initInput'](kip3['input'] = v$ae0['createElement']('input')), kip3['inputContainer'] = v$ae0['createElement']('div'), kip3['inputContainer']['style']['position'] = 'absolute', kip3['inputContainer']['style']['zIndex'] = 0x186a0, v$ae0['container']['appendChild'](kip3['inputContainer']), kip3['inputContainer']['setPos'] = function (pkiu, r4gf57) {
        kip3['inputContainer']['style']['left'] = pkiu + 'px', kip3['inputContainer']['style']['top'] = r4gf57 + 'px';
      }, oqb4g['stage']['on']('resize', null, lwzj2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s6wjzh) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $08a['_soundClass'] = o_bqxt, $08a['_musicClass'] = o_bqxt;
    }, lwzj2['_onStageResize'] = function () {
      var uk03 = oqb4g['stage']['_canvasTransform']['identity']();uk03['scale'](v$ae0['width'] / bo_tx['canvas']['width'] / og_r['getPixelRatio'](), v$ae0['height'] / bo_tx['canvas']['height'] / og_r['getPixelRatio']());
    }, lwzj2['wxinputFocus'] = function (veam9$) {
      var emv9 = kip3['inputElement']['target'];if (emv9 && !emv9['editable']) return;nm$a9e['window']['wx']['offKeyboardConfirm'](), nm$a9e['window']['wx']['offKeyboardInput'](), nm$a9e['window']['wx']['showKeyboard']({ 'defaultValue': emv9['text'], 'maxLength': emv9['maxChars'], 'multiple': emv9['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (gr5f7) {}, 'fail': function (smn6d) {} }), nm$a9e['window']['wx']['onKeyboardConfirm'](function (wlhz2j) {
        var n$9d = wlhz2j ? wlhz2j['value'] : '';emv9['text'] = n$9d, emv9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), nm$a9e['window']['wx']['onKeyboardInput'](function (kuip31) {
        var uykpi = kuip31 ? kuip31['value'] : '';if (!emv9['multiline']) {
          if (uykpi['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }emv9['text'] = uykpi, emv9['event']('input');
      });
    }, lwzj2['inputEnter'] = function () {
      kip3['inputElement']['target']['focus'] = ![];
    }, lwzj2['wxinputblur'] = function () {
      lwzj2['hideKeyboard']();
    }, lwzj2['hideKeyboard'] = function () {
      nm$a9e['window']['wx']['offKeyboardConfirm'](), nm$a9e['window']['wx']['offKeyboardInput'](), nm$a9e['window']['wx']['hideKeyboard']({ 'success': function (lwzj6) {
          console['log']('隐藏键盘');
        }, 'fail': function (ndj6sh) {
          console['log']('隐藏键盘出错:' + (ndj6sh ? ndj6sh['errMsg'] : ''));
        } });
    }, lwzj2;
  }(),
      piyuk = function () {
    function j6zh() {}qr_(j6zh, 'laya.wx.mini.MiniLoader');var _tqobg = j6zh['prototype'];return _tqobg['load'] = function (dem9n, $me, aev$m, g4qb_o, whz6lj) {
      aev$m === void 0x0 && (aev$m = !![]), whz6lj === void 0x0 && (whz6lj = ![]);var uyp1ik = this;uyp1ik['_url'] = dem9n;if (dem9n['indexOf']('data:image') === 0x0) uyp1ik['_type'] = $me = 'image';else uyp1ik['_type'] = $me || ($me = uyp1ik['getTypeFromUrl'](dem9n));uyp1ik['_cache'] = aev$m, uyp1ik['_data'] = null;var f4og_r = 'ascii';if (dem9n['indexOf']('.fnt') != -0x1) f4og_r = 'utf8';else $me == 'arraybuffer' && (f4og_r = '');;var d6snem = tyxoqb['getFileExtension'](dem9n);if (j6zh['_fileTypeArr']['indexOf'](d6snem) != -0x1) nm$a9e['EnvConfig']['load']['call'](this, dem9n, $me, aev$m, g4qb_o, whz6lj);else {
        if (!q_ogt['getFileInfo'](dem9n)) {
          if (dem9n['indexOf']('layaNativeDir/') != -0x1) {
            if (nm$a9e['isZiYu']) {
              var a9ve = q_ogt['ziyuFileData'][dem9n];uyp1ik['onLoaded'](a9ve);return;
            } else {
              cosnole['log']('read read'), q_ogt['read'](dem9n, f4og_r, new n$em9d(j6zh, j6zh['onReadNativeCallBack'], [f4og_r, dem9n, $me, aev$m, g4qb_o, whz6lj, uyp1ik]));return;
            }
          }if (tpiy1x['rootPath'] == '') var hj6dn = dem9n;else hj6dn = dem9n['split'](tpiy1x['rootPath'])[0x0];dem9n['indexOf']('http://') != -0x1 || dem9n['indexOf']('https://') != -0x1 ? nm$a9e['EnvConfig']['load']['call'](uyp1ik, dem9n, $me, aev$m, g4qb_o, whz6lj) : q_ogt['readFile'](hj6dn, f4og_r, new n$em9d(j6zh, j6zh['onReadNativeCallBack'], [f4og_r, dem9n, $me, aev$m, g4qb_o, whz6lj, uyp1ik]), dem9n);
        } else nm$a9e['EnvConfig']['load']['call'](this, dem9n, $me, aev$m, g4qb_o, whz6lj);
      }
    }, _tqobg['resMgrLoad'] = function (txbqyi, dns, pi13ku, k8u01, shn6, yoqbtx, snmed6) {
      pi13ku === void 0x0 && (pi13ku = 0x0), k8u01 === void 0x0 && (k8u01 = ![]), shn6 === void 0x0 && (shn6 = ![]), yoqbtx === void 0x0 && (yoqbtx = 0x0), snmed6 === void 0x0 && (snmed6 = 0x3), txbqyi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', txbqyi), nm$a9e['EnvConfig']['resMgrLoad'](txbqyi, (jw6shz, b_tqox, a09ev) => {
        j6zh['prototype']['resMgrLoadCallBack'](jw6shz, b_tqox, a09ev, dns);
      }, pi13ku, k8u01, shn6, yoqbtx, snmed6);
    }, _tqobg['resMgrLoadCallBack'] = function (rofg, xipytb, ix1k, g74rf_) {
      console['log']('buff:::', rofg, ix1k, q_ogt['fileNativeDir'] + '///' + q_ogt['fileListName']), g74rf_(rofg, xipytb, ix1k);
    }, _tqobg['clearRes'] = function (meva$, z6hwsj) {
      z6hwsj === void 0x0 && (z6hwsj = ![]);var nmj6sd = this;nmj6sd['clearRes'](meva$, z6hwsj);var $89a0v = q_ogt['getFileInfo'](meva$);if ($89a0v && (meva$['indexOf']('http://') != -0x1 || meva$['indexOf']('https://') != -0x1)) {
        var uv308a = $89a0v['md5'],
            iku1p3 = q_ogt['getFileNativePath'](uv308a);q_ogt['remove'](iku1p3);
      }
    }, j6zh['onReadNativeCallBack'] = function (byqoxt, nm6js, ofr4g, u13kip, f4r7g_, e9$nam, or_gf4, wlj6h, zw2ljh) {
      u13kip === void 0x0 && (u13kip = !![]), e9$nam === void 0x0 && (e9$nam = ![]), wlj6h === void 0x0 && (wlj6h = 0x0);if (!wlj6h) {
        var v0e$9;if (ofr4g == 'json' || ofr4g == 'atlas') v0e$9 = nm$a9e['getJson'](zw2ljh['data']);else ofr4g == 'xml' ? v0e$9 = tyxoqb['parseXMLFromString'](zw2ljh['data']) : v0e$9 = zw2ljh['data'];or_gf4['onLoaded'](v0e$9), !nm$a9e['isZiYu'] && nm$a9e['isPosMsgYu'] && ofr4g != 'arraybuffer' && wx['postMessage']({ 'url': nm6js, 'data': v0e$9, 'isLoad': !![] });
      } else wlj6h == 0x1 && nm$a9e['EnvConfig']['load']['call'](or_gf4, nm6js, ofr4g, u13kip, f4r7g_, e9$nam);
    }, $enmd(j6zh, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), j6zh;
  }(),
      q_ogt = function (m$ens) {
    function ibxyqt() {
      ibxyqt['__super']['call'](this);;
    }return qr_(ibxyqt, 'laya.wx.mini.MiniFileMgr', m$ens), ibxyqt['isLoadFile'] = function (rf7g54) {
      return ibxyqt['_fileTypeArr']['indexOf'](rf7g54) != -0x1 ? !![] : ![];
    }, ibxyqt['getFileInfo'] = function (end9$) {
      var j2whzl = end9$['split']('?')[0x0],
          jl6zh = ibxyqt['filesListObj'][j2whzl];if (jl6zh == null) return null;else return jl6zh;return null;
    }, ibxyqt['onFileUpdate'] = function (_bqotg, pk1i3u) {
      var shdz6j = _bqotg['split']('/'),
          v93a0 = shdz6j[shdz6j['length'] - 0x1],
          ns6mde = ibxyqt['getFileInfo'](pk1i3u);if (ns6mde == null) ibxyqt['onSaveFile'](pk1i3u, v93a0);else {
        if (ns6mde['readyUrl'] != pk1i3u) ibxyqt['remove'](v93a0, pk1i3u);
      }
    }, ibxyqt['exits'] = function (v0au38, $av09) {
      var ui1pky = ibxyqt['getFileNativePath'](v0au38);ibxyqt['fs']['getFileInfo']({ 'filePath': ui1pky, 'success': function (sn6mde) {
          $av09 != null && $av09['runWith']([0x0, sn6mde]);
        }, 'fail': function (b4o) {
          $av09 != null && $av09['runWith']([0x1, b4o]);
        } });
    }, ibxyqt['read'] = function (hlwz6, j6hzsw, _botx, v08a93) {
      j6hzsw === void 0x0 && (j6hzsw = 'ascill'), v08a93 === void 0x0 && (v08a93 = '');var n9$aem;v08a93 != '' ? n9$aem = ibxyqt['getFileNativePath'](hlwz6) : n9$aem = hlwz6, ibxyqt['fs']['readFile']({ 'filePath': n9$aem, 'encoding': j6hzsw, 'success': function (tbyxip) {
          _botx != null && _botx['runWith']([0x0, tbyxip]);
        }, 'fail': function (jwhz) {
          if (jwhz && v08a93 != '') ibxyqt['down'](v08a93, j6hzsw, _botx, v08a93);else _botx != null && _botx['runWith']([0x1]);
        } });
    }, ibxyqt['readNativeFile'] = function (kuip3, nae) {
      ibxyqt['fs']['readFile']({ 'filePath': kuip3, 'encoding': '', 'success': function (ne) {
          nae != null && nae['runWith']([0x0]);
        }, 'fail': function (xybtpi) {
          nae != null && nae['runWith']([0x1]);
        } });
    }, ibxyqt['down'] = function (btg_q, r754g, ema9, jzd6s) {
      r754g === void 0x0 && (r754g = 'ascill'), jzd6s === void 0x0 && (jzd6s = '');var xiyqb = ibxyqt['getFileNativePath'](jzd6s),
          iyku1p = ibxyqt['wxdown']({ 'url': btg_q, 'filePath': xiyqb, 'success': function (kv8) {
          if (kv8['statusCode'] === 0xc8) ibxyqt['readFile'](kv8['filePath'], r754g, ema9, jzd6s);
        }, 'fail': function (dmsn$) {
          ema9 != null && ema9['runWith']([0x1, dmsn$]);
        } });iyku1p['onProgressUpdate'](function (anme9) {
        ema9 != null && ema9['runWith']([0x2, anme9['progress']]);
      });
    }, ibxyqt['readFile'] = function (d6shjz, q4gob, xtyqo, btyqxi) {
      q4gob === void 0x0 && (q4gob = 'ascill'), btyqxi === void 0x0 && (btyqxi = ''), ibxyqt['fs']['readFile']({ 'filePath': d6shjz, 'encoding': q4gob, 'success': function (s$nm) {
          if (d6shjz['indexOf']('http://') != -0x1 || d6shjz['indexOf']('https://') != -0x1) ibxyqt['onFileUpdate'](d6shjz, btyqxi);xtyqo != null && xtyqo['runWith']([0x0, s$nm]);
        }, 'fail': function (v$a9me) {
          if (v$a9me) xtyqo != null && xtyqo['runWith']([0x1, v$a9me]);
        } });
    }, ibxyqt['downImg'] = function (nsedm$, wh6sjz, ends6m) {
      ends6m === void 0x0 && (ends6m = '');var i1xpky = ibxyqt['wxdown']({ 'url': nsedm$, 'success': function (of4_r) {
          of4_r['statusCode'] === 0xc8 && ibxyqt['copyFile'](of4_r['tempFilePath'], ends6m, wh6sjz);
        }, 'fail': function (g4_fr7) {
          wh6sjz != null && wh6sjz['runWith']([0x1, g4_fr7]);
        } });
    }, ibxyqt['copyFile'] = function (v9$e0a, bqti, o4gbq) {
      var xt1pi = v9$e0a['split']('/'),
          _fr7g = xt1pi[xt1pi['length'] - 0x1],
          tipyxb = bqti['split']('?')[0x0],
          bo_gq4 = ibxyqt['getFileInfo'](bqti),
          ds6nem = ibxyqt['getFileNativePath'](_fr7g);ibxyqt['fs']['copyFile']({ 'srcPath': v9$e0a, 'destPath': ds6nem, 'success': function (zdjhs) {
          if (!bo_gq4) ibxyqt['onSaveFile'](bqti, _fr7g), o4gbq != null && o4gbq['runWith']([0x0]);else {
            if (bo_gq4['readyUrl'] != bqti) ibxyqt['remove'](_fr7g, bqti, o4gbq);
          }
        }, 'fail': function (rgo4f) {
          o4gbq != null && o4gbq['runWith']([0x1, rgo4f]);
        } });
    }, ibxyqt['getFileNativePath'] = function (js6ndh) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + js6ndh;
    }, ibxyqt['remove'] = function (a$me9v, e6mds, mensd6) {
      e6mds === void 0x0 && (e6mds = '');var qogb_ = ibxyqt['getFileInfo'](e6mds),
          i1u3k = ibxyqt['getFileNativePath'](qogb_['md5']);oqb4g['loader']['clearRes'](qogb_['readyUrl']), ibxyqt['fs']['unlink']({ 'filePath': i1u3k, 'success': function (jmnsd6) {
          if (e6mds != '') ibxyqt['onSaveFile'](e6mds, a$me9v);mensd6 != null && mensd6['runWith']([0x0]);
        }, 'fail': function (nsjm6d) {} });
    }, ibxyqt['onSaveFile'] = function (_or4g, d$es) {
      var roq_4g = _or4g['split']('?')[0x0];ibxyqt['filesListObj'][roq_4g] = { 'md5': d$es, 'readyUrl': _or4g }, ibxyqt['fs']['writeFile']({ 'filePath': ibxyqt['fileNativeDir'] + '/' + ibxyqt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ibxyqt['filesListObj']), 'success': function (zlw2j) {
          console['log']('写入测试测试成功：', zlw2j);
        }, 'fail': function (qoybx) {
          console['log']('写入测试测试失败：', qoybx);
        } });
    }, ibxyqt['existDir'] = function (tbgq, $sdmn) {
      ibxyqt['fs']['mkdir']({ 'dirPath': tbgq, 'success': function (o4g_q) {
          $sdmn != null && $sdmn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (j2lhzw) {
          if (j2lhzw['errMsg']['indexOf']('file already exists') != -0x1) ibxyqt['readSync'](ibxyqt['fileListName'], 'utf8', $sdmn);else $sdmn != null && $sdmn['runWith']([0x1, j2lhzw]);
        } });
    }, ibxyqt['readSync'] = function (dems6n, a89$0v, snjm, ndjhs6) {
      a89$0v === void 0x0 && (a89$0v = 'ascill'), ndjhs6 === void 0x0 && (ndjhs6 = '');var pbxtyi = ibxyqt['getFileNativePath'](dems6n),
          nd$9me;try {
        nd$9me = ibxyqt['fs']['readFileSync'](pbxtyi), snjm != null && snjm['runWith']([0x0, { 'data': nd$9me }]);
      } catch (or_qg4) {
        snjm != null && snjm['runWith']([0x1]);
      }
    }, ibxyqt['readCache'] = function () {}, ibxyqt['writeCache'] = function (o4gqr) {
      var g_qro = readyUrl['split']('?')[0x0];ibxyqt['filesListObj'][g_qro] = { 'md5': md5Name, 'readyUrl': readyUrl }, ibxyqt['fs']['writeFile']({ 'filePath': ibxyqt['fileNativeDir'] + '/' + ibxyqt['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ibxyqt['filesListObj']), 'success': function (oq_r4g) {}, 'fail': function (ae09$) {} });
    }, ibxyqt['setNativeFileDir'] = function (qtg) {
      ibxyqt['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qtg;
    }, ibxyqt['filesListObj'] = {}, ibxyqt['fileNativeDir'] = null, ibxyqt['fileListName'] = 'layaairfiles.txt', ibxyqt['ziyuFileData'] = {}, $enmd(ibxyqt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ibxyqt;
  }(ev9m$),
      o_bqxt = function (u31ipk) {
    function tg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], tg['__super']['call'](this), this['_sound'] = tg['_createSound']();
    }qr_(tg, 'laya.wx.mini.MiniSound', u31ipk);var dhsjz6 = tg['prototype'];return dhsjz6['load'] = function (bqxo) {
      var a3v90 = this;bqxo = tpiy1x['formatURL'](bqxo), this['url'] = bqxo;if (tg['_audioCache'][bqxo]) {
        this['event']('complete');return;
      }function k1pyxi() {
        if (tg['_null'] != undefined) a3v90['_sound']['onCanplay'](tg['_null']), a3v90['_sound']['onError'](tg['_null']);else try {
          a3v90['_sound']['onCanplay'](null), a3v90['_sound']['onError'](null), tg['_null'] = null;
        } catch (txpyib) {
          console['warn']('[wxmini] _clearSound:' + txpyib), a3v90['_sound']['onCanplay'](_g4orq), a3v90['_sound']['onError'](_g4orq), tg['_null'] = _g4orq;
        }
      }function jz6hw() {
        k1pyxi(), s6djz['loaded'] = !![], s6djz['event']('complete'), tg['_audioCache'][s6djz['url']] = s6djz;
      }function txyb(hwjl6) {
        console['error']('errCode=' + hwjl6['errCode'] + '  errMsg=' + hwjl6['errMsg']), k1pyxi(), s6djz['event']('error');
      }function _g4orq() {}this['_sound']['onCanplay'](jz6hw), this['_sound']['onError'](txyb), this['_sound']['src'] = bqxo;var s6djz = this;
    }, dhsjz6['play'] = function (e$d9, a389) {
      e$d9 === void 0x0 && (e$d9 = 0x0), a389 === void 0x0 && (a389 = 0x0);var xiy1kp;if (this['url'] == $08a['_tMusic']) {
        if (!tg['_musicAudio']) tg['_musicAudio'] = tg['_createSound']();xiy1kp = tg['_musicAudio'];
      } else xiy1kp = tg['_createSound']();xiy1kp['src'] = this['url'];var k1pyui = new a$v08(xiy1kp);return k1pyui['url'] = this['url'], k1pyui['loops'] = a389, k1pyui['startTime'] = e$d9, k1pyui['play'](), $08a['addChannel'](k1pyui), k1pyui;
    }, dhsjz6['dispose'] = function () {
      var vu0k8 = tg['_audioCache'][this['url']];vu0k8 && (vu0k8['src'] = '', delete tg['_audioCache'][this['url']]);
    }, iu13pk(0x0, dhsjz6, 'duration', function () {
      return this['_sound']['duration'];
    }), tg['_createSound'] = function () {
      return tg['_id']++, nm$a9e['window']['wx']['createInnerAudioContext']();
    }, tg['_musicAudio'] = null, tg['_id'] = 0x0, tg['_audioCache'] = {}, tg['_null'] = undefined, tg;
  }(ev9m$),
      a$v08 = function (zjw6lh) {
    function to_g(des6mn) {
      this['_audio'] = null, this['_onEnd'] = null, to_g['__super']['call'](this), this['_audio'] = des6mn, this['_onEnd'] = tyxoqb['bind'](this['__onEnd'], this), des6mn['onEnded'](this['_onEnd']);
    }qr_(to_g, 'laya.wx.mini.MiniSoundChannel', zjw6lh);var bq_4o = to_g['prototype'];return bq_4o['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (oqb4g['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, bq_4o['__onNull'] = function () {}, bq_4o['play'] = function () {
      this['isStopped'] = ![], $08a['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, bq_4o['stop'] = function () {
      this['isStopped'] = !![], $08a['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (to_g['_null'] != undefined) this['_audio']['onEnded'](to_g['_null']);else try {
        this['_audio']['onEnded'](null), to_g['_null'] = null;
      } catch (qyotb) {
        console['warn']('[wxmini] stop:' + qyotb), this['_audio']['onEnded'](tyxoqb['bind'](this['__onNull'], this)), to_g['_null'] = tyxoqb['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, bq_4o['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, bq_4o['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $08a['addChannel'](this), this['_audio']['play']();
    }, iu13pk(0x0, bq_4o, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), iu13pk(0x0, bq_4o, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), iu13pk(0x0, bq_4o, 'volume', function () {
      return 0x1;
    }, function (qytox) {}), to_g['_null'] = undefined, to_g;
  }(_obgtq);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var bqtxo_ in Laya) {
    var ed$nm = Laya[bqtxo_];ed$nm && ed$nm['__isclass'] && (exports[bqtxo_] = ed$nm);
  }
});