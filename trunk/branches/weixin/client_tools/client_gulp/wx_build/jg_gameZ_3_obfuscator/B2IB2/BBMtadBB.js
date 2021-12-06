var D = wx.$b;
(function (window, document, m_d0) {
  var isf1mc = m_d0['un'],
      l2eoh = m_d0['uns'],
      krv5 = m_d0['static'],
      f0sm4_ = m_d0['class'],
      s10f_ = m_d0['getset'],
      gkxp = m_d0['__newvec'],
      kv5r = laya['utils']['Browser'],
      t2che = laya['events']['Event'],
      zu$aw = laya['events']['EventDispatcher'],
      gxpkv = laya['resource']['HTMLImage'],
      zay$8u = laya['utils']['Handler'],
      _74fd = laya['display']['Input'],
      ih1mcs = laya['net']['Loader'],
      $auyz8 = laya['maths']['Matrix'],
      mif = laya['renders']['Render'],
      uy8az = laya['utils']['RunDriver'],
      kg9r = laya['media']['Sound'],
      j6ql95 = laya['media']['SoundChannel'],
      jqo = laya['media']['SoundManager'],
      z$8uy = laya['display']['Stage'],
      eqjo = laya['net']['URL'],
      dyw7_4 = laya['utils']['Utils'],
      pgrk6v = function () {
    function g59qj() {}return f0sm4_(g59qj, 'laya.wx.mini.MiniAdpter'), g59qj['getJson'] = function (he2i) {
      return JSON['parse'](he2i);
    }, g59qj['init'] = function (eltho, m1sc0f) {
      eltho === void 0x0 && (eltho = ![]), m1sc0f === void 0x0 && (m1sc0f = ![]);if (g59qj['_inited']) return;g59qj['window'] = window;if (g59qj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;g59qj['_inited'] = !![], g59qj['isZiYu'] = m1sc0f, g59qj['isPosMsgYu'] = eltho, g59qj['EnvConfig'] = {}, !g59qj['isZiYu'] && (adu7yw['setNativeFileDir']('/layaairGame'), adu7yw['existDir'](adu7yw['fileNativeDir'], zay$8u['create'](g59qj, g59qj['onMkdirCallBack']))), g59qj['window']['focus'] = function () {}, m_d0['getUrlPath'] = function () {}, g59qj['window']['logtime'] = function (jql596) {}, g59qj['window']['alertTimeLog'] = function (m4df_0) {}, g59qj['window']['resetShareInfo'] = function () {}, g59qj['window']['CanvasRenderingContext2D'] = function () {}, g59qj['window']['CanvasRenderingContext2D']['prototype'] = g59qj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g59qj['window']['document']['body']['appendChild'] = function () {}, g59qj['EnvConfig']['pixelRatioInt'] = 0x0, uy8az['getPixelRatio'] = g59qj['pixelRatio'], g59qj['_preCreateElement'] = kv5r['createElement'], kv5r['createElement'] = g59qj['createElement'], uy8az['createShaderCondition'] = g59qj['createShaderCondition'], dyw7_4['parseXMLFromString'] = g59qj['parseXMLFromString'], _74fd['_createInputElement'] = g6k5vr['_createInputElement'], g59qj['EnvConfig']['load'] = ih1mcs['prototype']['load'], ih1mcs['prototype']['load'] = t2iche['prototype']['load'], g59qj['isZiYu'] && eltho && wx['onMessage'](function (sfm_4) {
        sfm_4['isLoad'] && (adu7yw['ziyuFileData'][sfm_4['url']] = sfm_4['data']);
      });
    }, g59qj['onMkdirCallBack'] = function (scfm10, wy7d4a) {
      if (!scfm10) adu7yw['filesListObj'] = JSON['parse'](wy7d4a['data']);
    }, g59qj['pixelRatio'] = function () {
      if (!g59qj['EnvConfig']['pixelRatioInt']) try {
        var rg95q = wx['getSystemInfoSync']();return g59qj['EnvConfig']['pixelRatioInt'] = rg95q['pixelRatio'], rg95q = rg95q, rg95q['pixelRatio'];
      } catch (g6vkr) {}return g59qj['EnvConfig']['pixelRatioInt'];
    }, g59qj['createElement'] = function (u$7aw) {
      if (u$7aw == 'canvas') {
        var j6q5g;return g59qj['idx'] == 0x1 ? g59qj['isZiYu'] ? (j6q5g = sharedCanvas, j6q5g['style'] = {}) : j6q5g = window['canvas'] : j6q5g = window['wx']['createCanvas'](), g59qj['idx']++, j6q5g;
      } else {
        if (u$7aw == 'textarea' || u$7aw == 'input') return g59qj['onCreateInput'](u$7aw);else {
          if (u$7aw == 'div') {
            var g65vk = g59qj['_preCreateElement'](u$7aw);return g65vk['contains'] = function (i2ceh) {
              return null;
            }, g65vk['removeChild'] = function ($yu7) {}, g65vk;
          } else return g59qj['_preCreateElement'](u$7aw);
        }
      }
    }, g59qj['onCreateInput'] = function ($yawu) {
      var f_d0m = g59qj['_preCreateElement']($yawu);return f_d0m['focus'] = g6k5vr['wxinputFocus'], f_d0m['blur'] = g6k5vr['wxinputblur'], f_d0m['style'] = {}, f_d0m['value'] = 0x0, f_d0m['parentElement'] = {}, f_d0m['placeholder'] = {}, f_d0m['type'] = {}, f_d0m['setColor'] = function (gv65k) {}, f_d0m['setType'] = function (a$y7u) {}, f_d0m['setFontFace'] = function (mchs1) {}, f_d0m['addEventListener'] = function (wyaz) {}, f_d0m['contains'] = function (xvkg) {
        return null;
      }, f_d0m['removeChild'] = function (hcie2t) {}, f_d0m;
    }, g59qj['createShaderCondition'] = function (fm4_s0) {
      var gvk6p = this,
          gpxvkr = function () {
        var rg9k = fm4_s0;return gvk6p[fm4_s0['replace']('this.', '')];
      };return gpxvkr;
    }, g59qj['EnvConfig'] = null, g59qj['window'] = null, g59qj['_preCreateElement'] = null, g59qj['_inited'] = ![], g59qj['wxRequest'] = null, g59qj['systemInfo'] = null, g59qj['version'] = '0.0.1', g59qj['isZiYu'] = ![], g59qj['isPosMsgYu'] = ![], g59qj['parseXMLFromString'] = function (oh2tl) {
      var wyad7, ti2he;oh2tl = oh2tl['replace'](/>\s+</g, '><');try {
        wyad7 = new window['Parser']['DOMParser']()['parseFromString'](oh2tl, 'text/xml');
      } catch (itoh2) {
        throw '需要引入xml解析库文件';
      }return wyad7;
    }, g59qj['idx'] = 0x1, g59qj;
  }(),
      eo2j = function () {
    function i1h() {}f0sm4_(i1h, 'laya.wx.mini.MiniImage');var kgprxv = i1h['prototype'];return kgprxv['_loadImage'] = function (vk6pr) {
      var jqleo = this,
          rvkpg6 = ![];vk6pr['indexOf']('layaNativeDir/') == -0x1 && (rvkpg6 = !![], vk6pr = eqjo['formatURL'](vk6pr));if (!adu7yw['getFileInfo'](vk6pr)) {
        if (vk6pr['indexOf']('http://') != -0x1 || vk6pr['indexOf']('https://') != -0x1) adu7yw['downImg'](vk6pr, new zay$8u(i1h, i1h['onDownImgCallBack'], [vk6pr, jqleo]), vk6pr);else i1h['onCreateImage'](vk6pr, jqleo, !![]);
      } else i1h['onCreateImage'](vk6pr, jqleo, !rvkpg6);
    }, i1h['onDownImgCallBack'] = function (da7ywu, g56vr, he2ci) {
      if (!he2ci) i1h['onCreateImage'](da7ywu, g56vr);else g56vr['onError'](null);
    }, i1h['onCreateImage'] = function (kpgrv, s4f_, _1m0fs) {
      _1m0fs === void 0x0 && (_1m0fs = ![]);var io2eth;if (!_1m0fs) {
        var qj9eo = adu7yw['getFileInfo'](kpgrv),
            c2the = qj9eo['md5'];io2eth = adu7yw['getFileNativePath'](c2the);
      } else io2eth = kpgrv;if (s4f_['imgCache'] == null) s4f_['imgCache'] = {};var eoj9q;function sc1ifm() {
        eoj9q['onload'] = null, eoj9q['onerror'] = null, delete s4f_['imgCache'][kpgrv];
      };var mihcs = function () {
        sc1ifm(), s4f_['onLoaded'](eoj9q);
      },
          k65g9r = function () {
        sc1ifm(), s4f_['event']('error', 'Load image failed');
      };s4f_['_type'] == 'nativeimage' ? (eoj9q = new kv5r['window']['Image'](), eoj9q['crossOrigin'] = '', eoj9q['onload'] = mihcs, eoj9q['onerror'] = k65g9r, eoj9q['src'] = io2eth, s4f_['imgCache'][kpgrv] = eoj9q) : new gxpkv['create'](io2eth, { 'onload': mihcs, 'onerror': k65g9r, 'onCreate': function (oeqj9) {
          eoj9q = oeqj9, s4f_['imgCache'][kpgrv] = oeqj9;
        } });
    }, i1h;
  }(),
      g6k5vr = function () {
    function ywad74() {}return f0sm4_(ywad74, 'laya.wx.mini.MiniInput'), ywad74['_createInputElement'] = function () {
      _74fd['_initInput'](_74fd['area'] = kv5r['createElement']('textarea')), _74fd['_initInput'](_74fd['input'] = kv5r['createElement']('input')), _74fd['inputContainer'] = kv5r['createElement']('div'), _74fd['inputContainer']['style']['position'] = 'absolute', _74fd['inputContainer']['style']['zIndex'] = 0x186a0, kv5r['container']['appendChild'](_74fd['inputContainer']), _74fd['inputContainer']['setPos'] = function (c21hs, thleo2) {
        _74fd['inputContainer']['style']['left'] = c21hs + 'px', _74fd['inputContainer']['style']['top'] = thleo2 + 'px';
      }, m_d0['stage']['on']('resize', null, ywad74['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f4m0_) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), jqo['_soundClass'] = rkpgv6, jqo['_musicClass'] = rkpgv6;
    }, ywad74['_onStageResize'] = function () {
      var _4df07 = m_d0['stage']['_canvasTransform']['identity']();_4df07['scale'](kv5r['width'] / mif['canvas']['width'] / uy8az['getPixelRatio'](), kv5r['height'] / mif['canvas']['height'] / uy8az['getPixelRatio']());
    }, ywad74['wxinputFocus'] = function (d_wy) {
      var _fs04m = _74fd['inputElement']['target'];if (_fs04m && !_fs04m['editable']) return;pgrk6v['window']['wx']['offKeyboardConfirm'](), pgrk6v['window']['wx']['offKeyboardInput'](), pgrk6v['window']['wx']['showKeyboard']({ 'defaultValue': _fs04m['text'], 'maxLength': _fs04m['maxChars'], 'multiple': _fs04m['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ay$w) {}, 'fail': function (to2el) {} }), pgrk6v['window']['wx']['onKeyboardConfirm'](function (zy$u8a) {
        var uya7 = zy$u8a ? zy$u8a['value'] : '';_fs04m['text'] = uya7, _fs04m['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), pgrk6v['window']['wx']['onKeyboardInput'](function (qjg956) {
        var rpkg = qjg956 ? qjg956['value'] : '';if (!_fs04m['multiline']) {
          if (rpkg['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_fs04m['text'] = rpkg, _fs04m['event']('input');
      });
    }, ywad74['inputEnter'] = function () {
      _74fd['inputElement']['target']['focus'] = ![];
    }, ywad74['wxinputblur'] = function () {
      ywad74['hideKeyboard']();
    }, ywad74['hideKeyboard'] = function () {
      pgrk6v['window']['wx']['offKeyboardConfirm'](), pgrk6v['window']['wx']['offKeyboardInput'](), pgrk6v['window']['wx']['hideKeyboard']({ 'success': function (md4_) {
          console['log']('隐藏键盘');
        }, 'fail': function (fsc10m) {
          console['log']('隐藏键盘出错:' + (fsc10m ? fsc10m['errMsg'] : ''));
        } });
    }, ywad74;
  }(),
      t2iche = function () {
    function u$ywa7() {}f0sm4_(u$ywa7, 'laya.wx.mini.MiniLoader');var g56kr9 = u$ywa7['prototype'];return g56kr9['load'] = function (aywu7$, cishm, sf0cm, a7u, uz83) {
      sf0cm === void 0x0 && (sf0cm = !![]), uz83 === void 0x0 && (uz83 = ![]);var othle2 = this;othle2['_url'] = aywu7$;if (aywu7$['indexOf']('data:image') === 0x0) othle2['_type'] = cishm = 'image';else othle2['_type'] = cishm || (cishm = othle2['getTypeFromUrl'](aywu7$));othle2['_cache'] = sf0cm, othle2['_data'] = null;var hoiet = 'ascii';if (aywu7$['indexOf']('.fnt') != -0x1) hoiet = 'utf8';else cishm == 'arraybuffer' && (hoiet = '');;var jloqt = dyw7_4['getFileExtension'](aywu7$);if (u$ywa7['_fileTypeArr']['indexOf'](jloqt) != -0x1) pgrk6v['EnvConfig']['load']['call'](this, aywu7$, cishm, sf0cm, a7u, uz83);else {
        if (!adu7yw['getFileInfo'](aywu7$)) {
          if (aywu7$['indexOf']('layaNativeDir/') != -0x1) {
            if (pgrk6v['isZiYu']) {
              var dmf = adu7yw['ziyuFileData'][aywu7$];othle2['onLoaded'](dmf);return;
            } else {
              cosnole['log']('read read'), adu7yw['read'](aywu7$, hoiet, new zay$8u(u$ywa7, u$ywa7['onReadNativeCallBack'], [hoiet, aywu7$, cishm, sf0cm, a7u, uz83, othle2]));return;
            }
          }if (eqjo['rootPath'] == '') var q9jeo = aywu7$;else q9jeo = aywu7$['split'](eqjo['rootPath'])[0x0];aywu7$['indexOf']('http://') != -0x1 || aywu7$['indexOf']('https://') != -0x1 ? pgrk6v['EnvConfig']['load']['call'](othle2, aywu7$, cishm, sf0cm, a7u, uz83) : adu7yw['readFile'](q9jeo, hoiet, new zay$8u(u$ywa7, u$ywa7['onReadNativeCallBack'], [hoiet, aywu7$, cishm, sf0cm, a7u, uz83, othle2]), aywu7$);
        } else pgrk6v['EnvConfig']['load']['call'](this, aywu7$, cishm, sf0cm, a7u, uz83);
      }
    }, g56kr9['resMgrLoad'] = function (fc0, w40_d, rgq9, ltoqej, rq65g, rpxvkg, yd7w4a) {
      rgq9 === void 0x0 && (rgq9 = 0x0), ltoqej === void 0x0 && (ltoqej = ![]), rq65g === void 0x0 && (rq65g = ![]), rpxvkg === void 0x0 && (rpxvkg = 0x0), yd7w4a === void 0x0 && (yd7w4a = 0x3), fc0['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fc0), pgrk6v['EnvConfig']['resMgrLoad'](fc0, (msi1ch, zuayw$, m1ich) => {
        u$ywa7['prototype']['resMgrLoadCallBack'](msi1ch, zuayw$, m1ich, w40_d);
      }, rgq9, ltoqej, rq65g, rpxvkg, yd7w4a);
    }, g56kr9['resMgrLoadCallBack'] = function (ljet, wda7uy, etlj2, sh2ci) {
      console['log']('buff:::', ljet, etlj2, adu7yw['fileNativeDir'] + '///' + adu7yw['fileListName']), sh2ci(ljet, wda7uy, etlj2);
    }, g56kr9['clearRes'] = function (qj5l, o2elht) {
      o2elht === void 0x0 && (o2elht = ![]);var $yuaw7 = this;$yuaw7['clearRes'](qj5l, o2elht);var nuz83$ = adu7yw['getFileInfo'](qj5l);if (nuz83$ && (qj5l['indexOf']('http://') != -0x1 || qj5l['indexOf']('https://') != -0x1)) {
        var qjoel = nuz83$['md5'],
            s01fmc = adu7yw['getFileNativePath'](qjoel);adu7yw['remove'](s01fmc);
      }
    }, u$ywa7['onReadNativeCallBack'] = function (zua$y, htcie, thei, oetlq, d0_7w, qjol5, _m0df, s1f0m, wd7_0) {
      oetlq === void 0x0 && (oetlq = !![]), qjol5 === void 0x0 && (qjol5 = ![]), s1f0m === void 0x0 && (s1f0m = 0x0);if (!s1f0m) {
        var to2elj;if (thei == 'json' || thei == 'atlas') to2elj = pgrk6v['getJson'](wd7_0['data']);else thei == 'xml' ? to2elj = dyw7_4['parseXMLFromString'](wd7_0['data']) : to2elj = wd7_0['data'];_m0df['onLoaded'](to2elj), !pgrk6v['isZiYu'] && pgrk6v['isPosMsgYu'] && thei != 'arraybuffer' && wx['postMessage']({ 'url': htcie, 'data': to2elj, 'isLoad': !![] });
      } else s1f0m == 0x1 && pgrk6v['EnvConfig']['load']['call'](_m0df, htcie, thei, oetlq, d0_7w, qjol5);
    }, krv5(u$ywa7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), u$ywa7;
  }(),
      adu7yw = function (u7wda) {
    function eiho2t() {
      eiho2t['__super']['call'](this);;
    }return f0sm4_(eiho2t, 'laya.wx.mini.MiniFileMgr', u7wda), eiho2t['isLoadFile'] = function (j5g6q9) {
      return eiho2t['_fileTypeArr']['indexOf'](j5g6q9) != -0x1 ? !![] : ![];
    }, eiho2t['getFileInfo'] = function (hsmi) {
      var wayu = hsmi['split']('?')[0x0],
          s_fm40 = eiho2t['filesListObj'][wayu];if (s_fm40 == null) return null;else return s_fm40;return null;
    }, eiho2t['onFileUpdate'] = function (elh2t, jote) {
      var zwu$a = elh2t['split']('/'),
          $u83az = zwu$a[zwu$a['length'] - 0x1],
          tejq = eiho2t['getFileInfo'](jote);if (tejq == null) eiho2t['onSaveFile'](jote, $u83az);else {
        if (tejq['readyUrl'] != jote) eiho2t['remove']($u83az, jote);
      }
    }, eiho2t['exits'] = function (oetj, lq96j5) {
      var lhet = eiho2t['getFileNativePath'](oetj);eiho2t['fs']['getFileInfo']({ 'filePath': lhet, 'success': function (f1_m) {
          lq96j5 != null && lq96j5['runWith']([0x0, f1_m]);
        }, 'fail': function (m10fcs) {
          lq96j5 != null && lq96j5['runWith']([0x1, m10fcs]);
        } });
    }, eiho2t['read'] = function (azwyu$, ltho2e, ayu$z, gq69j5) {
      ltho2e === void 0x0 && (ltho2e = 'ascill'), gq69j5 === void 0x0 && (gq69j5 = '');var o2thl;gq69j5 != '' ? o2thl = eiho2t['getFileNativePath'](azwyu$) : o2thl = azwyu$, eiho2t['fs']['readFile']({ 'filePath': o2thl, 'encoding': ltho2e, 'success': function (q9l65j) {
          ayu$z != null && ayu$z['runWith']([0x0, q9l65j]);
        }, 'fail': function (s_m40) {
          if (s_m40 && gq69j5 != '') eiho2t['down'](gq69j5, ltho2e, ayu$z, gq69j5);else ayu$z != null && ayu$z['runWith']([0x1]);
        } });
    }, eiho2t['readNativeFile'] = function (uzw$, pkrgvx) {
      eiho2t['fs']['readFile']({ 'filePath': uzw$, 'encoding': '', 'success': function (k6rgpv) {
          pkrgvx != null && pkrgvx['runWith']([0x0]);
        }, 'fail': function (d_mf40) {
          pkrgvx != null && pkrgvx['runWith']([0x1]);
        } });
    }, eiho2t['down'] = function ($azyu8, jq659, lht2eo, yz$) {
      jq659 === void 0x0 && (jq659 = 'ascill'), yz$ === void 0x0 && (yz$ = '');var $w7auy = eiho2t['getFileNativePath'](yz$),
          prkgvx = eiho2t['wxdown']({ 'url': $azyu8, 'filePath': $w7auy, 'success': function (sm10fc) {
          if (sm10fc['statusCode'] === 0xc8) eiho2t['readFile'](sm10fc['filePath'], jq659, lht2eo, yz$);
        }, 'fail': function (gkrp6) {
          lht2eo != null && lht2eo['runWith']([0x1, gkrp6]);
        } });prkgvx['onProgressUpdate'](function (day7w4) {
        lht2eo != null && lht2eo['runWith']([0x2, day7w4['progress']]);
      });
    }, eiho2t['readFile'] = function (s_1m0, i1cmsh, uyaw, gq6r95) {
      i1cmsh === void 0x0 && (i1cmsh = 'ascill'), gq6r95 === void 0x0 && (gq6r95 = ''), eiho2t['fs']['readFile']({ 'filePath': s_1m0, 'encoding': i1cmsh, 'success': function (wzuay) {
          if (s_1m0['indexOf']('http://') != -0x1 || s_1m0['indexOf']('https://') != -0x1) eiho2t['onFileUpdate'](s_1m0, gq6r95);uyaw != null && uyaw['runWith']([0x0, wzuay]);
        }, 'fail': function (_w47d0) {
          if (_w47d0) uyaw != null && uyaw['runWith']([0x1, _w47d0]);
        } });
    }, eiho2t['downImg'] = function (df7, f1_s, ot2j) {
      ot2j === void 0x0 && (ot2j = '');var m01sc = eiho2t['wxdown']({ 'url': df7, 'success': function (f0m4d_) {
          f0m4d_['statusCode'] === 0xc8 && eiho2t['copyFile'](f0m4d_['tempFilePath'], ot2j, f1_s);
        }, 'fail': function (ithec) {
          f1_s != null && f1_s['runWith']([0x1, ithec]);
        } });
    }, eiho2t['copyFile'] = function (lote2j, cfm0s1, cms1i) {
      var r59g6q = lote2j['split']('/'),
          iheot = r59g6q[r59g6q['length'] - 0x1],
          eho2l = cfm0s1['split']('?')[0x0],
          hoi2te = eiho2t['getFileInfo'](cfm0s1),
          grvpx = eiho2t['getFileNativePath'](iheot);eiho2t['fs']['copyFile']({ 'srcPath': lote2j, 'destPath': grvpx, 'success': function (sm4) {
          if (!hoi2te) eiho2t['onSaveFile'](cfm0s1, iheot), cms1i != null && cms1i['runWith']([0x0]);else {
            if (hoi2te['readyUrl'] != cfm0s1) eiho2t['remove'](iheot, cfm0s1, cms1i);
          }
        }, 'fail': function (_df04m) {
          cms1i != null && cms1i['runWith']([0x1, _df04m]);
        } });
    }, eiho2t['getFileNativePath'] = function (fism1c) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fism1c;
    }, eiho2t['remove'] = function (z$u, jlqoe, q5oj9l) {
      jlqoe === void 0x0 && (jlqoe = '');var grk965 = eiho2t['getFileInfo'](jlqoe),
          a$83 = eiho2t['getFileNativePath'](grk965['md5']);m_d0['loader']['clearRes'](grk965['readyUrl']), eiho2t['fs']['unlink']({ 'filePath': a$83, 'success': function (is1f) {
          if (jlqoe != '') eiho2t['onSaveFile'](jlqoe, z$u);q5oj9l != null && q5oj9l['runWith']([0x0]);
        }, 'fail': function (grq569) {} });
    }, eiho2t['onSaveFile'] = function (t2jleo, cs2i1) {
      var z3a = t2jleo['split']('?')[0x0];eiho2t['filesListObj'][z3a] = { 'md5': cs2i1, 'readyUrl': t2jleo }, eiho2t['fs']['writeFile']({ 'filePath': eiho2t['fileNativeDir'] + '/' + eiho2t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eiho2t['filesListObj']), 'success': function (kxvrg) {
          console['log']('写入测试测试成功：', kxvrg);
        }, 'fail': function (r6vgpk) {
          console['log']('写入测试测试失败：', r6vgpk);
        } });
    }, eiho2t['existDir'] = function (rpkxvg, f10m_s) {
      eiho2t['fs']['mkdir']({ 'dirPath': rpkxvg, 'success': function (_7w4) {
          f10m_s != null && f10m_s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (elt2j) {
          if (elt2j['errMsg']['indexOf']('file already exists') != -0x1) eiho2t['readSync'](eiho2t['fileListName'], 'utf8', f10m_s);else f10m_s != null && f10m_s['runWith']([0x1, elt2j]);
        } });
    }, eiho2t['readSync'] = function (hl2toe, y$a7uw, loq5j, smhci1) {
      y$a7uw === void 0x0 && (y$a7uw = 'ascill'), smhci1 === void 0x0 && (smhci1 = '');var hit1 = eiho2t['getFileNativePath'](hl2toe),
          fism1;try {
        fism1 = eiho2t['fs']['readFileSync'](hit1), loq5j != null && loq5j['runWith']([0x0, { 'data': fism1 }]);
      } catch (uwa$) {
        loq5j != null && loq5j['runWith']([0x1]);
      }
    }, eiho2t['readCache'] = function () {}, eiho2t['writeCache'] = function (d7wya4) {
      var z83ua$ = readyUrl['split']('?')[0x0];eiho2t['filesListObj'][z83ua$] = { 'md5': md5Name, 'readyUrl': readyUrl }, eiho2t['fs']['writeFile']({ 'filePath': eiho2t['fileNativeDir'] + '/' + eiho2t['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](eiho2t['filesListObj']), 'success': function (fm_s40) {}, 'fail': function (_1smf0) {} });
    }, eiho2t['setNativeFileDir'] = function (xvgprk) {
      eiho2t['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xvgprk;
    }, eiho2t['filesListObj'] = {}, eiho2t['fileNativeDir'] = null, eiho2t['fileListName'] = 'layaairfiles.txt', eiho2t['ziyuFileData'] = {}, krv5(eiho2t, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), eiho2t;
  }(zu$aw),
      rkpgv6 = function (ljto2) {
    function dwuy7a() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], dwuy7a['__super']['call'](this), this['_sound'] = dwuy7a['_createSound']();
    }f0sm4_(dwuy7a, 'laya.wx.mini.MiniSound', ljto2);var ms1c0f = dwuy7a['prototype'];return ms1c0f['load'] = function (s2ch1i) {
      var eo2hlt = this;s2ch1i = eqjo['formatURL'](s2ch1i), this['url'] = s2ch1i;if (dwuy7a['_audioCache'][s2ch1i]) {
        this['event']('complete');return;
      }function imch1s() {
        if (dwuy7a['_null'] != undefined) eo2hlt['_sound']['onCanplay'](dwuy7a['_null']), eo2hlt['_sound']['onError'](dwuy7a['_null']);else try {
          eo2hlt['_sound']['onCanplay'](null), eo2hlt['_sound']['onError'](null), dwuy7a['_null'] = null;
        } catch (y4wda) {
          console['warn']('[wxmini] _clearSound:' + y4wda), eo2hlt['_sound']['onCanplay'](_1), eo2hlt['_sound']['onError'](_1), dwuy7a['_null'] = _1;
        }
      }function g5rv() {
        imch1s(), u$3z8['loaded'] = !![], u$3z8['event']('complete'), dwuy7a['_audioCache'][u$3z8['url']] = u$3z8;
      }function $ywa7(ejlot) {
        console['error']('errCode=' + ejlot['errCode'] + '  errMsg=' + ejlot['errMsg']), imch1s(), u$3z8['event']('error');
      }function _1() {}this['_sound']['onCanplay'](g5rv), this['_sound']['onError']($ywa7), this['_sound']['src'] = s2ch1i;var u$3z8 = this;
    }, ms1c0f['play'] = function (o9lqej, kg96) {
      o9lqej === void 0x0 && (o9lqej = 0x0), kg96 === void 0x0 && (kg96 = 0x0);var vrpg6;if (this['url'] == jqo['_tMusic']) {
        if (!dwuy7a['_musicAudio']) dwuy7a['_musicAudio'] = dwuy7a['_createSound']();vrpg6 = dwuy7a['_musicAudio'];
      } else vrpg6 = dwuy7a['_createSound']();vrpg6['src'] = this['url'];var $3nzu = new vpxg(vrpg6);return $3nzu['url'] = this['url'], $3nzu['loops'] = kg96, $3nzu['startTime'] = o9lqej, $3nzu['play'](), jqo['addChannel']($3nzu), $3nzu;
    }, ms1c0f['dispose'] = function () {
      var i1c2th = dwuy7a['_audioCache'][this['url']];i1c2th && (i1c2th['src'] = '', delete dwuy7a['_audioCache'][this['url']]);
    }, s10f_(0x0, ms1c0f, 'duration', function () {
      return this['_sound']['duration'];
    }), dwuy7a['_createSound'] = function () {
      return dwuy7a['_id']++, pgrk6v['window']['wx']['createInnerAudioContext']();
    }, dwuy7a['_musicAudio'] = null, dwuy7a['_id'] = 0x0, dwuy7a['_audioCache'] = {}, dwuy7a['_null'] = undefined, dwuy7a;
  }(zu$aw),
      vpxg = function (c1h2it) {
    function m0f_d4(h2sc1i) {
      this['_audio'] = null, this['_onEnd'] = null, m0f_d4['__super']['call'](this), this['_audio'] = h2sc1i, this['_onEnd'] = dyw7_4['bind'](this['__onEnd'], this), h2sc1i['onEnded'](this['_onEnd']);
    }f0sm4_(m0f_d4, 'laya.wx.mini.MiniSoundChannel', c1h2it);var ol59jq = m0f_d4['prototype'];return ol59jq['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (m_d0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ol59jq['__onNull'] = function () {}, ol59jq['play'] = function () {
      this['isStopped'] = ![], jqo['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ol59jq['stop'] = function () {
      this['isStopped'] = !![], jqo['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (m0f_d4['_null'] != undefined) this['_audio']['onEnded'](m0f_d4['_null']);else try {
        this['_audio']['onEnded'](null), m0f_d4['_null'] = null;
      } catch ($a8yzu) {
        console['warn']('[wxmini] stop:' + $a8yzu), this['_audio']['onEnded'](dyw7_4['bind'](this['__onNull'], this)), m0f_d4['_null'] = dyw7_4['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ol59jq['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ol59jq['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], jqo['addChannel'](this), this['_audio']['play']();
    }, s10f_(0x0, ol59jq, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), s10f_(0x0, ol59jq, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), s10f_(0x0, ol59jq, 'volume', function () {
      return 0x1;
    }, function (d4_7f0) {}), m0f_d4['_null'] = undefined, m0f_d4;
  }(j6ql95);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var lq9e in Laya) {
    var oqljet = Laya[lq9e];oqljet && oqljet['__isclass'] && (exports[lq9e] = oqljet);
  }
});