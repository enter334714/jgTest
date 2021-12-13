var D = wx.$b;
(function (window, document, kol6x) {
  var kxlo7 = kol6x['un'],
      qlk = kol6x['uns'],
      wmc1 = kol6x['static'],
      ynuz0i = kol6x['class'],
      p1tmwc = kol6x['getset'],
      r69d = kol6x['__newvec'],
      vwctp = laya['utils']['Browser'],
      _1hpv = laya['events']['Event'],
      uzytmc = laya['events']['EventDispatcher'],
      $na5j = laya['resource']['HTMLImage'],
      cmwz1 = laya['utils']['Handler'],
      $045nj = laya['display']['Input'],
      mzt1y = laya['net']['Loader'],
      p1w_ = laya['maths']['Matrix'],
      ae5f4$ = laya['renders']['Render'],
      whp2v = laya['utils']['RunDriver'],
      cwv1hp = laya['media']['Sound'],
      rv_h92 = laya['media']['SoundChannel'],
      k37xq = laya['media']['SoundManager'],
      mzytcu = laya['display']['Stage'],
      t1c = laya['net']['URL'],
      $fe54 = laya['utils']['Utils'],
      rd92s = function () {
    function pvhr() {}return ynuz0i(pvhr, 'laya.wx.mini.MiniAdpter'), pvhr['getJson'] = function (j54n0i) {
      return JSON['parse'](j54n0i);
    }, pvhr['init'] = function (v_29, _89rs) {
      v_29 === void 0x0 && (v_29 = ![]), _89rs === void 0x0 && (_89rs = ![]);if (pvhr['_inited']) return;pvhr['window'] = window;if (pvhr['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;pvhr['_inited'] = !![], pvhr['isZiYu'] = _89rs, pvhr['isPosMsgYu'] = v_29, pvhr['EnvConfig'] = {}, !pvhr['isZiYu'] && ($j5['setNativeFileDir']('/layaairGame'), $j5['existDir']($j5['fileNativeDir'], cmwz1['create'](pvhr, pvhr['onMkdirCallBack']))), pvhr['window']['focus'] = function () {}, kol6x['getUrlPath'] = function () {}, pvhr['window']['logtime'] = function (nyuiz) {}, pvhr['window']['alertTimeLog'] = function ($fa45e) {}, pvhr['window']['resetShareInfo'] = function () {}, pvhr['window']['CanvasRenderingContext2D'] = function () {}, pvhr['window']['CanvasRenderingContext2D']['prototype'] = pvhr['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pvhr['window']['document']['body']['appendChild'] = function () {}, pvhr['EnvConfig']['pixelRatioInt'] = 0x0, whp2v['getPixelRatio'] = pvhr['pixelRatio'], pvhr['_preCreateElement'] = vwctp['createElement'], vwctp['createElement'] = pvhr['createElement'], whp2v['createShaderCondition'] = pvhr['createShaderCondition'], $fe54['parseXMLFromString'] = pvhr['parseXMLFromString'], $045nj['_createInputElement'] = n0i5['_createInputElement'], pvhr['EnvConfig']['load'] = mzt1y['prototype']['load'], mzt1y['prototype']['load'] = afj45$['prototype']['load'], pvhr['isZiYu'] && v_29 && wx['onMessage'](function (phw2_v) {
        phw2_v['isLoad'] && ($j5['ziyuFileData'][phw2_v['url']] = phw2_v['data']);
      });
    }, pvhr['onMkdirCallBack'] = function (_9s2h, hr9s_) {
      if (!_9s2h) $j5['filesListObj'] = JSON['parse'](hr9s_['data']);
    }, pvhr['pixelRatio'] = function () {
      if (!pvhr['EnvConfig']['pixelRatioInt']) try {
        var l7x6ok = wx['getSystemInfoSync']();return pvhr['EnvConfig']['pixelRatioInt'] = l7x6ok['pixelRatio'], l7x6ok = l7x6ok, l7x6ok['pixelRatio'];
      } catch (doxl6) {}return pvhr['EnvConfig']['pixelRatioInt'];
    }, pvhr['createElement'] = function (qlkox) {
      if (qlkox == 'canvas') {
        var hpvw1;return pvhr['idx'] == 0x1 ? pvhr['isZiYu'] ? (hpvw1 = sharedCanvas, hpvw1['style'] = {}) : hpvw1 = window['canvas'] : hpvw1 = window['wx']['createCanvas'](), pvhr['idx']++, hpvw1;
      } else {
        if (qlkox == 'textarea' || qlkox == 'input') return pvhr['onCreateInput'](qlkox);else {
          if (qlkox == 'div') {
            var _p2vwh = pvhr['_preCreateElement'](qlkox);return _p2vwh['contains'] = function (kqlg7) {
              return null;
            }, _p2vwh['removeChild'] = function (r982ds) {}, _p2vwh;
          } else return pvhr['_preCreateElement'](qlkox);
        }
      }
    }, pvhr['onCreateInput'] = function (c1mwtz) {
      var lo68 = pvhr['_preCreateElement'](c1mwtz);return lo68['focus'] = n0i5['wxinputFocus'], lo68['blur'] = n0i5['wxinputblur'], lo68['style'] = {}, lo68['value'] = 0x0, lo68['parentElement'] = {}, lo68['placeholder'] = {}, lo68['type'] = {}, lo68['setColor'] = function ($j4af5) {}, lo68['setType'] = function (f5e4$) {}, lo68['setFontFace'] = function (r98sd2) {}, lo68['addEventListener'] = function (lsd86) {}, lo68['contains'] = function (xolq) {
        return null;
      }, lo68['removeChild'] = function (o68ls) {}, lo68;
    }, pvhr['createShaderCondition'] = function (pchw1) {
      var j5i4n = this,
          cw1tmz = function () {
        var nj5$0 = pchw1;return j5i4n[pchw1['replace']('this.', '')];
      };return cw1tmz;
    }, pvhr['EnvConfig'] = null, pvhr['window'] = null, pvhr['_preCreateElement'] = null, pvhr['_inited'] = ![], pvhr['wxRequest'] = null, pvhr['systemInfo'] = null, pvhr['version'] = '0.0.1', pvhr['isZiYu'] = ![], pvhr['isPosMsgYu'] = ![], pvhr['parseXMLFromString'] = function (nju04) {
      var v2hr_p, odk6l;nju04 = nju04['replace'](/>\s+</g, '><');try {
        v2hr_p = new window['Parser']['DOMParser']()['parseFromString'](nju04, 'text/xml');
      } catch (tzycu) {
        throw '需要引入xml解析库文件';
      }return v2hr_p;
    }, pvhr['idx'] = 0x1, pvhr;
  }(),
      c1myz = function () {
    function lod6s8() {}ynuz0i(lod6s8, 'laya.wx.mini.MiniImage');var rd689s = lod6s8['prototype'];return rd689s['_loadImage'] = function (l8kd) {
      var ja54n = this,
          u04j = ![];l8kd['indexOf']('layaNativeDir/') == -0x1 && (u04j = !![], l8kd = t1c['formatURL'](l8kd));if (!$j5['getFileInfo'](l8kd)) {
        if (l8kd['indexOf']('http://') != -0x1 || l8kd['indexOf']('https://') != -0x1) $j5['downImg'](l8kd, new cmwz1(lod6s8, lod6s8['onDownImgCallBack'], [l8kd, ja54n]), l8kd);else lod6s8['onCreateImage'](l8kd, ja54n, !![]);
      } else lod6s8['onCreateImage'](l8kd, ja54n, !u04j);
    }, lod6s8['onDownImgCallBack'] = function (na5j$4, zcw1, dk) {
      if (!dk) lod6s8['onCreateImage'](na5j$4, zcw1);else zcw1['onError'](null);
    }, lod6s8['onCreateImage'] = function (cztm, r2_hv9, s_29r) {
      s_29r === void 0x0 && (s_29r = ![]);var kxlo6d;if (!s_29r) {
        var o6lx = $j5['getFileInfo'](cztm),
            muiytz = o6lx['md5'];kxlo6d = $j5['getFileNativePath'](muiytz);
      } else kxlo6d = cztm;if (r2_hv9['imgCache'] == null) r2_hv9['imgCache'] = {};var znuyi0;function v29hr() {
        znuyi0['onload'] = null, znuyi0['onerror'] = null, delete r2_hv9['imgCache'][cztm];
      };var _wp1vh = function () {
        v29hr(), r2_hv9['onLoaded'](znuyi0);
      },
          k67lxo = function () {
        v29hr(), r2_hv9['event']('error', 'Load image failed');
      };r2_hv9['_type'] == 'nativeimage' ? (znuyi0 = new vwctp['window']['Image'](), znuyi0['crossOrigin'] = '', znuyi0['onload'] = _wp1vh, znuyi0['onerror'] = k67lxo, znuyi0['src'] = kxlo6d, r2_hv9['imgCache'][cztm] = znuyi0) : new $na5j['create'](kxlo6d, { 'onload': _wp1vh, 'onerror': k67lxo, 'onCreate': function (v1cph) {
          znuyi0 = v1cph, r2_hv9['imgCache'][cztm] = v1cph;
        } });
    }, lod6s8;
  }(),
      n0i5 = function () {
    function vp_2rh() {}return ynuz0i(vp_2rh, 'laya.wx.mini.MiniInput'), vp_2rh['_createInputElement'] = function () {
      $045nj['_initInput']($045nj['area'] = vwctp['createElement']('textarea')), $045nj['_initInput']($045nj['input'] = vwctp['createElement']('input')), $045nj['inputContainer'] = vwctp['createElement']('div'), $045nj['inputContainer']['style']['position'] = 'absolute', $045nj['inputContainer']['style']['zIndex'] = 0x186a0, vwctp['container']['appendChild']($045nj['inputContainer']), $045nj['inputContainer']['setPos'] = function (twcv1p, iyj0un) {
        $045nj['inputContainer']['style']['left'] = twcv1p + 'px', $045nj['inputContainer']['style']['top'] = iyj0un + 'px';
      }, kol6x['stage']['on']('resize', null, vp_2rh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f4a$5j) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), k37xq['_soundClass'] = os6ld, k37xq['_musicClass'] = os6ld;
    }, vp_2rh['_onStageResize'] = function () {
      var pv1wct = kol6x['stage']['_canvasTransform']['identity']();pv1wct['scale'](vwctp['width'] / ae5f4$['canvas']['width'] / whp2v['getPixelRatio'](), vwctp['height'] / ae5f4$['canvas']['height'] / whp2v['getPixelRatio']());
    }, vp_2rh['wxinputFocus'] = function (izyun0) {
      var t1czmw = $045nj['inputElement']['target'];if (t1czmw && !t1czmw['editable']) return;rd92s['window']['wx']['offKeyboardConfirm'](), rd92s['window']['wx']['offKeyboardInput'](), rd92s['window']['wx']['showKeyboard']({ 'defaultValue': t1czmw['text'], 'maxLength': t1czmw['maxChars'], 'multiple': t1czmw['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (d98r6) {}, 'fail': function (x6ld) {} }), rd92s['window']['wx']['onKeyboardConfirm'](function (mzc1tw) {
        var xl7kgq = mzc1tw ? mzc1tw['value'] : '';t1czmw['text'] = xl7kgq, t1czmw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), rd92s['window']['wx']['onKeyboardInput'](function (dx6lk) {
        var _r982s = dx6lk ? dx6lk['value'] : '';if (!t1czmw['multiline']) {
          if (_r982s['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }t1czmw['text'] = _r982s, t1czmw['event']('input');
      });
    }, vp_2rh['inputEnter'] = function () {
      $045nj['inputElement']['target']['focus'] = ![];
    }, vp_2rh['wxinputblur'] = function () {
      vp_2rh['hideKeyboard']();
    }, vp_2rh['hideKeyboard'] = function () {
      rd92s['window']['wx']['offKeyboardConfirm'](), rd92s['window']['wx']['offKeyboardInput'](), rd92s['window']['wx']['hideKeyboard']({ 'success': function (nju0yi) {
          console['log']('隐藏键盘');
        }, 'fail': function (_h2prv) {
          console['log']('隐藏键盘出错:' + (_h2prv ? _h2prv['errMsg'] : ''));
        } });
    }, vp_2rh;
  }(),
      afj45$ = function () {
    function h_1pv() {}ynuz0i(h_1pv, 'laya.wx.mini.MiniLoader');var gxk7lq = h_1pv['prototype'];return gxk7lq['load'] = function (izty, cpmw1, jin054, a45j$f, iynj0) {
      jin054 === void 0x0 && (jin054 = !![]), iynj0 === void 0x0 && (iynj0 = ![]);var v9h_2r = this;v9h_2r['_url'] = izty;if (izty['indexOf']('data:image') === 0x0) v9h_2r['_type'] = cpmw1 = 'image';else v9h_2r['_type'] = cpmw1 || (cpmw1 = v9h_2r['getTypeFromUrl'](izty));v9h_2r['_cache'] = jin054, v9h_2r['_data'] = null;var w_v1p = 'ascii';if (izty['indexOf']('.fnt') != -0x1) w_v1p = 'utf8';else cpmw1 == 'arraybuffer' && (w_v1p = '');;var jf4 = $fe54['getFileExtension'](izty);if (h_1pv['_fileTypeArr']['indexOf'](jf4) != -0x1) rd92s['EnvConfig']['load']['call'](this, izty, cpmw1, jin054, a45j$f, iynj0);else {
        if (!$j5['getFileInfo'](izty)) {
          if (izty['indexOf']('layaNativeDir/') != -0x1) {
            if (rd92s['isZiYu']) {
              var xkqo7 = $j5['ziyuFileData'][izty];v9h_2r['onLoaded'](xkqo7);return;
            } else {
              cosnole['log']('read read'), $j5['read'](izty, w_v1p, new cmwz1(h_1pv, h_1pv['onReadNativeCallBack'], [w_v1p, izty, cpmw1, jin054, a45j$f, iynj0, v9h_2r]));return;
            }
          }if (t1c['rootPath'] == '') var olkx = izty;else olkx = izty['split'](t1c['rootPath'])[0x0];izty['indexOf']('http://') != -0x1 || izty['indexOf']('https://') != -0x1 ? rd92s['EnvConfig']['load']['call'](v9h_2r, izty, cpmw1, jin054, a45j$f, iynj0) : $j5['readFile'](olkx, w_v1p, new cmwz1(h_1pv, h_1pv['onReadNativeCallBack'], [w_v1p, izty, cpmw1, jin054, a45j$f, iynj0, v9h_2r]), izty);
        } else rd92s['EnvConfig']['load']['call'](this, izty, cpmw1, jin054, a45j$f, iynj0);
      }
    }, gxk7lq['resMgrLoad'] = function (czmyut, zumyt, f4ja5$, yztuc, phv1wc, p1vwch, _pw2v) {
      f4ja5$ === void 0x0 && (f4ja5$ = 0x0), yztuc === void 0x0 && (yztuc = ![]), phv1wc === void 0x0 && (phv1wc = ![]), p1vwch === void 0x0 && (p1vwch = 0x0), _pw2v === void 0x0 && (_pw2v = 0x3), czmyut['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', czmyut), rd92s['EnvConfig']['resMgrLoad'](czmyut, (ziu, k7ol6x, q3k7xg) => {
        h_1pv['prototype']['resMgrLoadCallBack'](ziu, k7ol6x, q3k7xg, zumyt);
      }, f4ja5$, yztuc, phv1wc, p1vwch, _pw2v);
    }, gxk7lq['resMgrLoadCallBack'] = function (n5ji0, pwh1_, zy0mui, s68o9) {
      console['log']('buff:::', n5ji0, zy0mui, $j5['fileNativeDir'] + '///' + $j5['fileListName']), s68o9(n5ji0, pwh1_, zy0mui);
    }, gxk7lq['clearRes'] = function (ajf5$, n40uj) {
      n40uj === void 0x0 && (n40uj = ![]);var dl6ok = this;dl6ok['clearRes'](ajf5$, n40uj);var utcy = $j5['getFileInfo'](ajf5$);if (utcy && (ajf5$['indexOf']('http://') != -0x1 || ajf5$['indexOf']('https://') != -0x1)) {
        var z1twmc = utcy['md5'],
            aj54f$ = $j5['getFileNativePath'](z1twmc);$j5['remove'](aj54f$);
      }
    }, h_1pv['onReadNativeCallBack'] = function (xk7g3q, _ph2vw, a5n$j, $j50, phc, xodkl, r2, vpr_, um0iz) {
      $j50 === void 0x0 && ($j50 = !![]), xodkl === void 0x0 && (xodkl = ![]), vpr_ === void 0x0 && (vpr_ = 0x0);if (!vpr_) {
        var nj0yi;if (a5n$j == 'json' || a5n$j == 'atlas') nj0yi = rd92s['getJson'](um0iz['data']);else a5n$j == 'xml' ? nj0yi = $fe54['parseXMLFromString'](um0iz['data']) : nj0yi = um0iz['data'];r2['onLoaded'](nj0yi), !rd92s['isZiYu'] && rd92s['isPosMsgYu'] && a5n$j != 'arraybuffer' && wx['postMessage']({ 'url': _ph2vw, 'data': nj0yi, 'isLoad': !![] });
      } else vpr_ == 0x1 && rd92s['EnvConfig']['load']['call'](r2, _ph2vw, a5n$j, $j50, phc, xodkl);
    }, wmc1(h_1pv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), h_1pv;
  }(),
      $j5 = function (iyzmut) {
    function n4aj$() {
      n4aj$['__super']['call'](this);;
    }return ynuz0i(n4aj$, 'laya.wx.mini.MiniFileMgr', iyzmut), n4aj$['isLoadFile'] = function (o8ls) {
      return n4aj$['_fileTypeArr']['indexOf'](o8ls) != -0x1 ? !![] : ![];
    }, n4aj$['getFileInfo'] = function (s298_) {
      var hv1wc = s298_['split']('?')[0x0],
          jn5$4 = n4aj$['filesListObj'][hv1wc];if (jn5$4 == null) return null;else return jn5$4;return null;
    }, n4aj$['onFileUpdate'] = function (lk7xqg, v1hc) {
      var tmuyi = lk7xqg['split']('/'),
          oxdl6 = tmuyi[tmuyi['length'] - 0x1],
          yiujn0 = n4aj$['getFileInfo'](v1hc);if (yiujn0 == null) n4aj$['onSaveFile'](v1hc, oxdl6);else {
        if (yiujn0['readyUrl'] != v1hc) n4aj$['remove'](oxdl6, v1hc);
      }
    }, n4aj$['exits'] = function (x7oql, mpctw) {
      var jy0u = n4aj$['getFileNativePath'](x7oql);n4aj$['fs']['getFileInfo']({ 'filePath': jy0u, 'success': function (j45n0i) {
          mpctw != null && mpctw['runWith']([0x0, j45n0i]);
        }, 'fail': function (p1vcwh) {
          mpctw != null && mpctw['runWith']([0x1, p1vcwh]);
        } });
    }, n4aj$['read'] = function (tyzcum, i0y, ymu, $5eaf4) {
      i0y === void 0x0 && (i0y = 'ascill'), $5eaf4 === void 0x0 && ($5eaf4 = '');var uzymit;$5eaf4 != '' ? uzymit = n4aj$['getFileNativePath'](tyzcum) : uzymit = tyzcum, n4aj$['fs']['readFile']({ 'filePath': uzymit, 'encoding': i0y, 'success': function (j45n0) {
          ymu != null && ymu['runWith']([0x0, j45n0]);
        }, 'fail': function (czmt) {
          if (czmt && $5eaf4 != '') n4aj$['down']($5eaf4, i0y, ymu, $5eaf4);else ymu != null && ymu['runWith']([0x1]);
        } });
    }, n4aj$['readNativeFile'] = function (m1ytzc, j5in04) {
      n4aj$['fs']['readFile']({ 'filePath': m1ytzc, 'encoding': '', 'success': function (ymitu) {
          j5in04 != null && j5in04['runWith']([0x0]);
        }, 'fail': function (sdr9) {
          j5in04 != null && j5in04['runWith']([0x1]);
        } });
    }, n4aj$['down'] = function (xklo67, cpt1mw, _s2r8, cwpmt1) {
      cpt1mw === void 0x0 && (cpt1mw = 'ascill'), cwpmt1 === void 0x0 && (cwpmt1 = '');var ztcwm = n4aj$['getFileNativePath'](cwpmt1),
          vw_p1h = n4aj$['wxdown']({ 'url': xklo67, 'filePath': ztcwm, 'success': function (hp2r_) {
          if (hp2r_['statusCode'] === 0xc8) n4aj$['readFile'](hp2r_['filePath'], cpt1mw, _s2r8, cwpmt1);
        }, 'fail': function (_r92vh) {
          _s2r8 != null && _s2r8['runWith']([0x1, _r92vh]);
        } });vw_p1h['onProgressUpdate'](function (rh2_vp) {
        _s2r8 != null && _s2r8['runWith']([0x2, rh2_vp['progress']]);
      });
    }, n4aj$['readFile'] = function (uniy0j, ituzm, a5, hr9v_) {
      ituzm === void 0x0 && (ituzm = 'ascill'), hr9v_ === void 0x0 && (hr9v_ = ''), n4aj$['fs']['readFile']({ 'filePath': uniy0j, 'encoding': ituzm, 'success': function (lk6do) {
          if (uniy0j['indexOf']('http://') != -0x1 || uniy0j['indexOf']('https://') != -0x1) n4aj$['onFileUpdate'](uniy0j, hr9v_);a5 != null && a5['runWith']([0x0, lk6do]);
        }, 'fail': function (osl8d6) {
          if (osl8d6) a5 != null && a5['runWith']([0x1, osl8d6]);
        } });
    }, n4aj$['downImg'] = function (myzct1, ph2vr, d8o6) {
      d8o6 === void 0x0 && (d8o6 = '');var hv_w1p = n4aj$['wxdown']({ 'url': myzct1, 'success': function (rh_9v2) {
          rh_9v2['statusCode'] === 0xc8 && n4aj$['copyFile'](rh_9v2['tempFilePath'], d8o6, ph2vr);
        }, 'fail': function (cwz1tm) {
          ph2vr != null && ph2vr['runWith']([0x1, cwz1tm]);
        } });
    }, n4aj$['copyFile'] = function (unz0, klod6, s896o) {
      var yui0j = unz0['split']('/'),
          wcp1vh = yui0j[yui0j['length'] - 0x1],
          s68r = klod6['split']('?')[0x0],
          hpcv1 = n4aj$['getFileInfo'](klod6),
          srd29 = n4aj$['getFileNativePath'](wcp1vh);n4aj$['fs']['copyFile']({ 'srcPath': unz0, 'destPath': srd29, 'success': function (uzyitm) {
          if (!hpcv1) n4aj$['onSaveFile'](klod6, wcp1vh), s896o != null && s896o['runWith']([0x0]);else {
            if (hpcv1['readyUrl'] != klod6) n4aj$['remove'](wcp1vh, klod6, s896o);
          }
        }, 'fail': function (j4fa$) {
          s896o != null && s896o['runWith']([0x1, j4fa$]);
        } });
    }, n4aj$['getFileNativePath'] = function (c1ptmw) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + c1ptmw;
    }, n4aj$['remove'] = function (zymctu, i5j40, zc1mtw) {
      i5j40 === void 0x0 && (i5j40 = '');var hvc1pw = n4aj$['getFileInfo'](i5j40),
          jin4 = n4aj$['getFileNativePath'](hvc1pw['md5']);kol6x['loader']['clearRes'](hvc1pw['readyUrl']), n4aj$['fs']['unlink']({ 'filePath': jin4, 'success': function (tuimz) {
          if (i5j40 != '') n4aj$['onSaveFile'](i5j40, zymctu);zc1mtw != null && zc1mtw['runWith']([0x0]);
        }, 'fail': function (gx3q) {} });
    }, n4aj$['onSaveFile'] = function (l8kd6o, mwp1) {
      var x7kg = l8kd6o['split']('?')[0x0];n4aj$['filesListObj'][x7kg] = { 'md5': mwp1, 'readyUrl': l8kd6o }, n4aj$['fs']['writeFile']({ 'filePath': n4aj$['fileNativeDir'] + '/' + n4aj$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n4aj$['filesListObj']), 'success': function ($4a5ef) {
          console['log']('写入测试测试成功：', $4a5ef);
        }, 'fail': function (r_9v) {
          console['log']('写入测试测试失败：', r_9v);
        } });
    }, n4aj$['existDir'] = function (juyni, yutcm) {
      n4aj$['fs']['mkdir']({ 'dirPath': juyni, 'success': function (pw1) {
          yutcm != null && yutcm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (xklq7) {
          if (xklq7['errMsg']['indexOf']('file already exists') != -0x1) n4aj$['readSync'](n4aj$['fileListName'], 'utf8', yutcm);else yutcm != null && yutcm['runWith']([0x1, xklq7]);
        } });
    }, n4aj$['readSync'] = function (_p2hv, cvp1w, i50j4, kxo6dl) {
      cvp1w === void 0x0 && (cvp1w = 'ascill'), kxo6dl === void 0x0 && (kxo6dl = '');var d8s2r = n4aj$['getFileNativePath'](_p2hv),
          hpv1w_;try {
        hpv1w_ = n4aj$['fs']['readFileSync'](d8s2r), i50j4 != null && i50j4['runWith']([0x0, { 'data': hpv1w_ }]);
      } catch (yin) {
        i50j4 != null && i50j4['runWith']([0x1]);
      }
    }, n4aj$['readCache'] = function () {}, n4aj$['writeCache'] = function (qoxkl7) {
      var iuytm = readyUrl['split']('?')[0x0];n4aj$['filesListObj'][iuytm] = { 'md5': md5Name, 'readyUrl': readyUrl }, n4aj$['fs']['writeFile']({ 'filePath': n4aj$['fileNativeDir'] + '/' + n4aj$['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](n4aj$['filesListObj']), 'success': function (ctwm1z) {}, 'fail': function (ijny) {} });
    }, n4aj$['setNativeFileDir'] = function (_h29s) {
      n4aj$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _h29s;
    }, n4aj$['filesListObj'] = {}, n4aj$['fileNativeDir'] = null, n4aj$['fileListName'] = 'layaairfiles.txt', n4aj$['ziyuFileData'] = {}, wmc1(n4aj$, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), n4aj$;
  }(uzytmc),
      os6ld = function (k6l8o) {
    function ld86k() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ld86k['__super']['call'](this), this['_sound'] = ld86k['_createSound']();
    }ynuz0i(ld86k, 'laya.wx.mini.MiniSound', k6l8o);var oxdk6 = ld86k['prototype'];return oxdk6['load'] = function (hpwv1_) {
      var j4n$05 = this;hpwv1_ = t1c['formatURL'](hpwv1_), this['url'] = hpwv1_;if (ld86k['_audioCache'][hpwv1_]) {
        this['event']('complete');return;
      }function t1wvp() {
        if (ld86k['_null'] != undefined) j4n$05['_sound']['onCanplay'](ld86k['_null']), j4n$05['_sound']['onError'](ld86k['_null']);else try {
          j4n$05['_sound']['onCanplay'](null), j4n$05['_sound']['onError'](null), ld86k['_null'] = null;
        } catch (cz1y) {
          console['warn']('[wxmini] _clearSound:' + cz1y), j4n$05['_sound']['onCanplay'](_hsr), j4n$05['_sound']['onError'](_hsr), ld86k['_null'] = _hsr;
        }
      }function hrvp_2() {
        t1wvp(), cyztum['loaded'] = !![], cyztum['event']('complete'), ld86k['_audioCache'][cyztum['url']] = cyztum;
      }function rpv_(r8_2) {
        console['error']('errCode=' + r8_2['errCode'] + '  errMsg=' + r8_2['errMsg']), t1wvp(), cyztum['event']('error');
      }function _hsr() {}this['_sound']['onCanplay'](hrvp_2), this['_sound']['onError'](rpv_), this['_sound']['src'] = hpwv1_;var cyztum = this;
    }, oxdk6['play'] = function (l6dxk, s_9hr2) {
      l6dxk === void 0x0 && (l6dxk = 0x0), s_9hr2 === void 0x0 && (s_9hr2 = 0x0);var _1wvph;if (this['url'] == k37xq['_tMusic']) {
        if (!ld86k['_musicAudio']) ld86k['_musicAudio'] = ld86k['_createSound']();_1wvph = ld86k['_musicAudio'];
      } else _1wvph = ld86k['_createSound']();_1wvph['src'] = this['url'];var a$4fe5 = new f5a$e(_1wvph);return a$4fe5['url'] = this['url'], a$4fe5['loops'] = s_9hr2, a$4fe5['startTime'] = l6dxk, a$4fe5['play'](), k37xq['addChannel'](a$4fe5), a$4fe5;
    }, oxdk6['dispose'] = function () {
      var oxk7q = ld86k['_audioCache'][this['url']];oxk7q && (oxk7q['src'] = '', delete ld86k['_audioCache'][this['url']]);
    }, p1tmwc(0x0, oxdk6, 'duration', function () {
      return this['_sound']['duration'];
    }), ld86k['_createSound'] = function () {
      return ld86k['_id']++, rd92s['window']['wx']['createInnerAudioContext']();
    }, ld86k['_musicAudio'] = null, ld86k['_id'] = 0x0, ld86k['_audioCache'] = {}, ld86k['_null'] = undefined, ld86k;
  }(uzytmc),
      f5a$e = function (niu0) {
    function sdr298(pvt1w) {
      this['_audio'] = null, this['_onEnd'] = null, sdr298['__super']['call'](this), this['_audio'] = pvt1w, this['_onEnd'] = $fe54['bind'](this['__onEnd'], this), pvt1w['onEnded'](this['_onEnd']);
    }ynuz0i(sdr298, 'laya.wx.mini.MiniSoundChannel', niu0);var r28ds9 = sdr298['prototype'];return r28ds9['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (kol6x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, r28ds9['__onNull'] = function () {}, r28ds9['play'] = function () {
      this['isStopped'] = ![], k37xq['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, r28ds9['stop'] = function () {
      this['isStopped'] = !![], k37xq['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (sdr298['_null'] != undefined) this['_audio']['onEnded'](sdr298['_null']);else try {
        this['_audio']['onEnded'](null), sdr298['_null'] = null;
      } catch (x6ko) {
        console['warn']('[wxmini] stop:' + x6ko), this['_audio']['onEnded']($fe54['bind'](this['__onNull'], this)), sdr298['_null'] = $fe54['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, r28ds9['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, r28ds9['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], k37xq['addChannel'](this), this['_audio']['play']();
    }, p1tmwc(0x0, r28ds9, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), p1tmwc(0x0, r28ds9, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), p1tmwc(0x0, r28ds9, 'volume', function () {
      return 0x1;
    }, function (o6x7k) {}), sdr298['_null'] = undefined, sdr298;
  }(rv_h92);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var hv_2rp in Laya) {
    var m1ycz = Laya[hv_2rp];m1ycz && m1ycz['__isclass'] && (exports[hv_2rp] = m1ycz);
  }
});