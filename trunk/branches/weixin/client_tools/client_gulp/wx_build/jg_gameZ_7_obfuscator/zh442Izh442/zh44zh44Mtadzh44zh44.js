var e = wx.$F;
(function (window, document, y8gm3) {
  var ym8ri = y8gm3['un'],
      gymi8 = y8gm3['uns'],
      ygm8 = y8gm3['static'],
      wfz9u1 = y8gm3['class'],
      vq65 = y8gm3['getset'],
      xqo057 = y8gm3['__newvec'],
      y38irm = laya['utils']['Browser'],
      j4dpnc = laya['events']['Event'],
      oq0a5 = laya['events']['EventDispatcher'],
      d4cnpz = laya['resource']['HTMLImage'],
      xr07 = laya['utils']['Handler'],
      jed4n = laya['display']['Input'],
      fl1wu = laya['net']['Loader'],
      cjnp4d = laya['maths']['Matrix'],
      mroi8x = laya['renders']['Render'],
      wfu91z = laya['utils']['RunDriver'],
      nj4cd = laya['media']['Sound'],
      o8mi = laya['media']['SoundChannel'],
      o507 = laya['media']['SoundManager'],
      p_jns = laya['display']['Stage'],
      abv65q = laya['net']['URL'],
      ejp4nd = laya['utils']['Utils'],
      jes_$k = function () {
    function djesn() {}return wfz9u1(djesn, 'laya.wx.mini.MiniAdpter'), djesn['getJson'] = function ($kv_2b) {
      return JSON['parse']($kv_2b);
    }, djesn['init'] = function (esj_$, sn_jp) {
      esj_$ === void 0x0 && (esj_$ = ![]), sn_jp === void 0x0 && (sn_jp = ![]);if (djesn['_inited']) return;djesn['window'] = window;if (djesn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;djesn['_inited'] = !![], djesn['isZiYu'] = sn_jp, djesn['isPosMsgYu'] = esj_$, djesn['EnvConfig'] = {}, !djesn['isZiYu'] && (iym3tg['setNativeFileDir']('/layaairGame'), iym3tg['existDir'](iym3tg['fileNativeDir'], xr07['create'](djesn, djesn['onMkdirCallBack']))), djesn['window']['focus'] = function () {}, y8gm3['getUrlPath'] = function () {}, djesn['window']['logtime'] = function (irxm) {}, djesn['window']['alertTimeLog'] = function (sjdn) {}, djesn['window']['resetShareInfo'] = function () {}, djesn['window']['CanvasRenderingContext2D'] = function () {}, djesn['window']['CanvasRenderingContext2D']['prototype'] = djesn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], djesn['window']['document']['body']['appendChild'] = function () {}, djesn['EnvConfig']['pixelRatioInt'] = 0x0, wfu91z['getPixelRatio'] = djesn['pixelRatio'], djesn['_preCreateElement'] = y38irm['createElement'], y38irm['createElement'] = djesn['createElement'], wfu91z['createShaderCondition'] = djesn['createShaderCondition'], ejp4nd['parseXMLFromString'] = djesn['parseXMLFromString'], jed4n['_createInputElement'] = ao7['_createInputElement'], djesn['EnvConfig']['load'] = fl1wu['prototype']['load'], fl1wu['prototype']['load'] = v$2_s['prototype']['load'], djesn['isZiYu'] && esj_$ && wx['onMessage'](function (jdpc4n) {
        jdpc4n['isLoad'] && (iym3tg['ziyuFileData'][jdpc4n['url']] = jdpc4n['data']);
      });
    }, djesn['onMkdirCallBack'] = function (a50q7o, pjens_) {
      if (!a50q7o) iym3tg['filesListObj'] = JSON['parse'](pjens_['data']);
    }, djesn['pixelRatio'] = function () {
      if (!djesn['EnvConfig']['pixelRatioInt']) try {
        var dcu49 = wx['getSystemInfoSync']();return djesn['EnvConfig']['pixelRatioInt'] = dcu49['pixelRatio'], dcu49 = dcu49, dcu49['pixelRatio'];
      } catch (jk_en) {}return djesn['EnvConfig']['pixelRatioInt'];
    }, djesn['createElement'] = function (_j$es) {
      if (_j$es == 'canvas') {
        var sek_j$;return djesn['idx'] == 0x1 ? djesn['isZiYu'] ? (sek_j$ = sharedCanvas, sek_j$['style'] = {}) : sek_j$ = window['canvas'] : sek_j$ = window['wx']['createCanvas'](), djesn['idx']++, sek_j$;
      } else {
        if (_j$es == 'textarea' || _j$es == 'input') return djesn['onCreateInput'](_j$es);else {
          if (_j$es == 'div') {
            var lfuw19 = djesn['_preCreateElement'](_j$es);return lfuw19['contains'] = function ($26bva) {
              return null;
            }, lfuw19['removeChild'] = function (gyim8) {}, lfuw19;
          } else return djesn['_preCreateElement'](_j$es);
        }
      }
    }, djesn['onCreateInput'] = function (ndespj) {
      var b6v5aq = djesn['_preCreateElement'](ndespj);return b6v5aq['focus'] = ao7['wxinputFocus'], b6v5aq['blur'] = ao7['wxinputblur'], b6v5aq['style'] = {}, b6v5aq['value'] = 0x0, b6v5aq['parentElement'] = {}, b6v5aq['placeholder'] = {}, b6v5aq['type'] = {}, b6v5aq['setColor'] = function (qo57) {}, b6v5aq['setType'] = function (zd9p) {}, b6v5aq['setFontFace'] = function (x0o) {}, b6v5aq['addEventListener'] = function (x8iom) {}, b6v5aq['contains'] = function (ab6$2v) {
        return null;
      }, b6v5aq['removeChild'] = function (abv5q) {}, b6v5aq;
    }, djesn['createShaderCondition'] = function (k_2bv) {
      var n4edj = this,
          qoa5 = function () {
        var jspen_ = k_2bv;return n4edj[k_2bv['replace']('this.', '')];
      };return qoa5;
    }, djesn['EnvConfig'] = null, djesn['window'] = null, djesn['_preCreateElement'] = null, djesn['_inited'] = ![], djesn['wxRequest'] = null, djesn['systemInfo'] = null, djesn['version'] = '0.0.1', djesn['isZiYu'] = ![], djesn['isPosMsgYu'] = ![], djesn['parseXMLFromString'] = function (s_2$vk) {
      var b$62kv, x8ior7;s_2$vk = s_2$vk['replace'](/>\s+</g, '><');try {
        b$62kv = new window['Parser']['DOMParser']()['parseFromString'](s_2$vk, 'text/xml');
      } catch (dnjcp) {
        throw '需要引入xml解析库文件';
      }return b$62kv;
    }, djesn['idx'] = 0x1, djesn;
  }(),
      ro7x = function () {
    function j4ndcp() {}wfz9u1(j4ndcp, 'laya.wx.mini.MiniImage');var mi8orx = j4ndcp['prototype'];return mi8orx['_loadImage'] = function (epnjds) {
      var skje = this,
          z1wu = ![];epnjds['indexOf']('layaNativeDir/') == -0x1 && (z1wu = !![], epnjds = abv65q['formatURL'](epnjds));if (!iym3tg['getFileInfo'](epnjds)) {
        if (epnjds['indexOf']('http://') != -0x1 || epnjds['indexOf']('https://') != -0x1) iym3tg['downImg'](epnjds, new xr07(j4ndcp, j4ndcp['onDownImgCallBack'], [epnjds, skje]), epnjds);else j4ndcp['onCreateImage'](epnjds, skje, !![]);
      } else j4ndcp['onCreateImage'](epnjds, skje, !z1wu);
    }, j4ndcp['onDownImgCallBack'] = function (rx0, q057, ej_$ks) {
      if (!ej_$ks) j4ndcp['onCreateImage'](rx0, q057);else q057['onError'](null);
    }, j4ndcp['onCreateImage'] = function (zw91, sne_j, mxr) {
      mxr === void 0x0 && (mxr = ![]);var sjpnde;if (!mxr) {
        var _ksej$ = iym3tg['getFileInfo'](zw91),
            u1z = _ksej$['md5'];sjpnde = iym3tg['getFileNativePath'](u1z);
      } else sjpnde = zw91;if (sne_j['imgCache'] == null) sne_j['imgCache'] = {};var ks2_$v;function z9cpd() {
        ks2_$v['onload'] = null, ks2_$v['onerror'] = null, delete sne_j['imgCache'][zw91];
      };var c49zw = function () {
        z9cpd(), sne_j['onLoaded'](ks2_$v);
      },
          ym8g3i = function () {
        z9cpd(), sne_j['event']('error', 'Load image failed');
      };sne_j['_type'] == 'nativeimage' ? (ks2_$v = new y38irm['window']['Image'](), ks2_$v['crossOrigin'] = '', ks2_$v['onload'] = c49zw, ks2_$v['onerror'] = ym8g3i, ks2_$v['src'] = sjpnde, sne_j['imgCache'][zw91] = ks2_$v) : new d4cnpz['create'](sjpnde, { 'onload': c49zw, 'onerror': ym8g3i, 'onCreate': function (q5a067) {
          ks2_$v = q5a067, sne_j['imgCache'][zw91] = q5a067;
        } });
    }, j4ndcp;
  }(),
      ao7 = function () {
    function s_2$k() {}return wfz9u1(s_2$k, 'laya.wx.mini.MiniInput'), s_2$k['_createInputElement'] = function () {
      jed4n['_initInput'](jed4n['area'] = y38irm['createElement']('textarea')), jed4n['_initInput'](jed4n['input'] = y38irm['createElement']('input')), jed4n['inputContainer'] = y38irm['createElement']('div'), jed4n['inputContainer']['style']['position'] = 'absolute', jed4n['inputContainer']['style']['zIndex'] = 0x186a0, y38irm['container']['appendChild'](jed4n['inputContainer']), jed4n['inputContainer']['setPos'] = function (xqr0, ke_njs) {
        jed4n['inputContainer']['style']['left'] = xqr0 + 'px', jed4n['inputContainer']['style']['top'] = ke_njs + 'px';
      }, y8gm3['stage']['on']('resize', null, s_2$k['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p49cz) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), o507['_soundClass'] = x7r0oq, o507['_musicClass'] = x7r0oq;
    }, s_2$k['_onStageResize'] = function () {
      var je_pn = y8gm3['stage']['_canvasTransform']['identity']();je_pn['scale'](y38irm['width'] / mroi8x['canvas']['width'] / wfu91z['getPixelRatio'](), y38irm['height'] / mroi8x['canvas']['height'] / wfu91z['getPixelRatio']());
    }, s_2$k['wxinputFocus'] = function ($bav26) {
      var luw9 = jed4n['inputElement']['target'];if (luw9 && !luw9['editable']) return;jes_$k['window']['wx']['offKeyboardConfirm'](), jes_$k['window']['wx']['offKeyboardInput'](), jes_$k['window']['wx']['showKeyboard']({ 'defaultValue': luw9['text'], 'maxLength': luw9['maxChars'], 'multiple': luw9['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (czu94) {}, 'fail': function (npcz) {} }), jes_$k['window']['wx']['onKeyboardConfirm'](function (npc4z) {
        var v526ba = npc4z ? npc4z['value'] : '';luw9['text'] = v526ba, luw9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), jes_$k['window']['wx']['onKeyboardInput'](function (j$s_ek) {
        var xq70 = j$s_ek ? j$s_ek['value'] : '';if (!luw9['multiline']) {
          if (xq70['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }luw9['text'] = xq70, luw9['event']('input');
      });
    }, s_2$k['inputEnter'] = function () {
      jed4n['inputElement']['target']['focus'] = ![];
    }, s_2$k['wxinputblur'] = function () {
      s_2$k['hideKeyboard']();
    }, s_2$k['hideKeyboard'] = function () {
      jes_$k['window']['wx']['offKeyboardConfirm'](), jes_$k['window']['wx']['offKeyboardInput'](), jes_$k['window']['wx']['hideKeyboard']({ 'success': function (npesj_) {
          console['log']('隐藏键盘');
        }, 'fail': function (ioxr7) {
          console['log']('隐藏键盘出错:' + (ioxr7 ? ioxr7['errMsg'] : ''));
        } });
    }, s_2$k;
  }(),
      v$2_s = function () {
    function vb6$2k() {}wfz9u1(vb6$2k, 'laya.wx.mini.MiniLoader');var jpse_ = vb6$2k['prototype'];return jpse_['load'] = function (mitg3y, qb650a, ejp4d, _enjp, jn4pc) {
      ejp4d === void 0x0 && (ejp4d = !![]), jn4pc === void 0x0 && (jn4pc = ![]);var p_se = this;p_se['_url'] = mitg3y;if (mitg3y['indexOf']('data:image') === 0x0) p_se['_type'] = qb650a = 'image';else p_se['_type'] = qb650a || (qb650a = p_se['getTypeFromUrl'](mitg3y));p_se['_cache'] = ejp4d, p_se['_data'] = null;var vs$k = 'ascii';if (mitg3y['indexOf']('.fnt') != -0x1) vs$k = 'utf8';else qb650a == 'arraybuffer' && (vs$k = '');;var $vk_2s = ejp4nd['getFileExtension'](mitg3y);if (vb6$2k['_fileTypeArr']['indexOf']($vk_2s) != -0x1) jes_$k['EnvConfig']['load']['call'](this, mitg3y, qb650a, ejp4d, _enjp, jn4pc);else {
        if (!iym3tg['getFileInfo'](mitg3y)) {
          if (mitg3y['indexOf']('layaNativeDir/') != -0x1) {
            if (jes_$k['isZiYu']) {
              var $ab6 = iym3tg['ziyuFileData'][mitg3y];p_se['onLoaded']($ab6);return;
            } else {
              cosnole['log']('read read'), iym3tg['read'](mitg3y, vs$k, new xr07(vb6$2k, vb6$2k['onReadNativeCallBack'], [vs$k, mitg3y, qb650a, ejp4d, _enjp, jn4pc, p_se]));return;
            }
          }if (abv65q['rootPath'] == '') var yixmr8 = mitg3y;else yixmr8 = mitg3y['split'](abv65q['rootPath'])[0x0];mitg3y['indexOf']('http://') != -0x1 || mitg3y['indexOf']('https://') != -0x1 ? jes_$k['EnvConfig']['load']['call'](p_se, mitg3y, qb650a, ejp4d, _enjp, jn4pc) : iym3tg['readFile'](yixmr8, vs$k, new xr07(vb6$2k, vb6$2k['onReadNativeCallBack'], [vs$k, mitg3y, qb650a, ejp4d, _enjp, jn4pc, p_se]), mitg3y);
        } else jes_$k['EnvConfig']['load']['call'](this, mitg3y, qb650a, ejp4d, _enjp, jn4pc);
      }
    }, jpse_['resMgrLoad'] = function (zd49p, q5o7, zpd4nc, sk_nj, kvs_2, yimrx, c9ud) {
      zpd4nc === void 0x0 && (zpd4nc = 0x0), sk_nj === void 0x0 && (sk_nj = ![]), kvs_2 === void 0x0 && (kvs_2 = ![]), yimrx === void 0x0 && (yimrx = 0x0), c9ud === void 0x0 && (c9ud = 0x3), zd49p['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zd49p), jes_$k['EnvConfig']['resMgrLoad'](zd49p, (k$v62, b_kv2, cz9fu) => {
        vb6$2k['prototype']['resMgrLoadCallBack'](k$v62, b_kv2, cz9fu, q5o7);
      }, zpd4nc, sk_nj, kvs_2, yimrx, c9ud);
    }, jpse_['resMgrLoadCallBack'] = function (zd9c4, fw1zu, fwucz, $62vba) {
      console['log']('buff:::', zd9c4, fwucz, iym3tg['fileNativeDir'] + '///' + iym3tg['fileListName']), $62vba(zd9c4, fw1zu, fwucz);
    }, jpse_['clearRes'] = function (i3m8, qxr0) {
      qxr0 === void 0x0 && (qxr0 = ![]);var ke$sj = this;ke$sj['clearRes'](i3m8, qxr0);var v562b = iym3tg['getFileInfo'](i3m8);if (v562b && (i3m8['indexOf']('http://') != -0x1 || i3m8['indexOf']('https://') != -0x1)) {
        var pd4cz9 = v562b['md5'],
            cwu9f = iym3tg['getFileNativePath'](pd4cz9);iym3tg['remove'](cwu9f);
      }
    }, vb6$2k['onReadNativeCallBack'] = function (enpsdj, czw49, xiorm, e4ndpj, w9uc4z, ncz4p, ke_s$2, gmiyt, a057o) {
      e4ndpj === void 0x0 && (e4ndpj = !![]), ncz4p === void 0x0 && (ncz4p = ![]), gmiyt === void 0x0 && (gmiyt = 0x0);if (!gmiyt) {
        var w49uc;if (xiorm == 'json' || xiorm == 'atlas') w49uc = jes_$k['getJson'](a057o['data']);else xiorm == 'xml' ? w49uc = ejp4nd['parseXMLFromString'](a057o['data']) : w49uc = a057o['data'];ke_s$2['onLoaded'](w49uc), !jes_$k['isZiYu'] && jes_$k['isPosMsgYu'] && xiorm != 'arraybuffer' && wx['postMessage']({ 'url': czw49, 'data': w49uc, 'isLoad': !![] });
      } else gmiyt == 0x1 && jes_$k['EnvConfig']['load']['call'](ke_s$2, czw49, xiorm, e4ndpj, w9uc4z, ncz4p);
    }, ygm8(vb6$2k, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), vb6$2k;
  }(),
      iym3tg = function (nd4jpc) {
    function mig3y8() {
      mig3y8['__super']['call'](this);;
    }return wfz9u1(mig3y8, 'laya.wx.mini.MiniFileMgr', nd4jpc), mig3y8['isLoadFile'] = function (v$bk62) {
      return mig3y8['_fileTypeArr']['indexOf'](v$bk62) != -0x1 ? !![] : ![];
    }, mig3y8['getFileInfo'] = function (ymig) {
      var q670a5 = ymig['split']('?')[0x0],
          zwcf9u = mig3y8['filesListObj'][q670a5];if (zwcf9u == null) return null;else return zwcf9u;return null;
    }, mig3y8['onFileUpdate'] = function (s_$k2e, $b26a) {
      var qa6v5 = s_$k2e['split']('/'),
          ndjpc = qa6v5[qa6v5['length'] - 0x1],
          xy8ri = mig3y8['getFileInfo']($b26a);if (xy8ri == null) mig3y8['onSaveFile']($b26a, ndjpc);else {
        if (xy8ri['readyUrl'] != $b26a) mig3y8['remove'](ndjpc, $b26a);
      }
    }, mig3y8['exits'] = function (mry8xi, fu9z1w) {
      var jdcp4 = mig3y8['getFileNativePath'](mry8xi);mig3y8['fs']['getFileInfo']({ 'filePath': jdcp4, 'success': function (gyi8) {
          fu9z1w != null && fu9z1w['runWith']([0x0, gyi8]);
        }, 'fail': function (_v2ks) {
          fu9z1w != null && fu9z1w['runWith']([0x1, _v2ks]);
        } });
    }, mig3y8['read'] = function (cw94u, dnpjes, k2s$, k_vb2) {
      dnpjes === void 0x0 && (dnpjes = 'ascill'), k_vb2 === void 0x0 && (k_vb2 = '');var ksej_;k_vb2 != '' ? ksej_ = mig3y8['getFileNativePath'](cw94u) : ksej_ = cw94u, mig3y8['fs']['readFile']({ 'filePath': ksej_, 'encoding': dnpjes, 'success': function (pd4z9c) {
          k2s$ != null && k2s$['runWith']([0x0, pd4z9c]);
        }, 'fail': function (k2se$_) {
          if (k2se$_ && k_vb2 != '') mig3y8['down'](k_vb2, dnpjes, k2s$, k_vb2);else k2s$ != null && k2s$['runWith']([0x1]);
        } });
    }, mig3y8['readNativeFile'] = function (cnpjd, q5760a) {
      mig3y8['fs']['readFile']({ 'filePath': cnpjd, 'encoding': '', 'success': function (_se$k2) {
          q5760a != null && q5760a['runWith']([0x0]);
        }, 'fail': function (e_jsnk) {
          q5760a != null && q5760a['runWith']([0x1]);
        } });
    }, mig3y8['down'] = function (gm3, czu4w9, _bv$2k, abqv) {
      czu4w9 === void 0x0 && (czu4w9 = 'ascill'), abqv === void 0x0 && (abqv = '');var g3iym = mig3y8['getFileNativePath'](abqv),
          a$v26 = mig3y8['wxdown']({ 'url': gm3, 'filePath': g3iym, 'success': function (lu9w1f) {
          if (lu9w1f['statusCode'] === 0xc8) mig3y8['readFile'](lu9w1f['filePath'], czu4w9, _bv$2k, abqv);
        }, 'fail': function (iy3t) {
          _bv$2k != null && _bv$2k['runWith']([0x1, iy3t]);
        } });a$v26['onProgressUpdate'](function (q70a) {
        _bv$2k != null && _bv$2k['runWith']([0x2, q70a['progress']]);
      });
    }, mig3y8['readFile'] = function (npdsj, tigym, v6b25a, qxo5) {
      tigym === void 0x0 && (tigym = 'ascill'), qxo5 === void 0x0 && (qxo5 = ''), mig3y8['fs']['readFile']({ 'filePath': npdsj, 'encoding': tigym, 'success': function (e$jks_) {
          if (npdsj['indexOf']('http://') != -0x1 || npdsj['indexOf']('https://') != -0x1) mig3y8['onFileUpdate'](npdsj, qxo5);v6b25a != null && v6b25a['runWith']([0x0, e$jks_]);
        }, 'fail': function (edjspn) {
          if (edjspn) v6b25a != null && v6b25a['runWith']([0x1, edjspn]);
        } });
    }, mig3y8['downImg'] = function (j4, p9c4z, sdjn) {
      sdjn === void 0x0 && (sdjn = '');var x807 = mig3y8['wxdown']({ 'url': j4, 'success': function (snejdp) {
          snejdp['statusCode'] === 0xc8 && mig3y8['copyFile'](snejdp['tempFilePath'], sdjn, p9c4z);
        }, 'fail': function (jdcp4n) {
          p9c4z != null && p9c4z['runWith']([0x1, jdcp4n]);
        } });
    }, mig3y8['copyFile'] = function (ne_sjk, im3tgy, epsjn_) {
      var edpsn = ne_sjk['split']('/'),
          wul = edpsn[edpsn['length'] - 0x1],
          v$6a2 = im3tgy['split']('?')[0x0],
          _$ske2 = mig3y8['getFileInfo'](im3tgy),
          ek2s = mig3y8['getFileNativePath'](wul);mig3y8['fs']['copyFile']({ 'srcPath': ne_sjk, 'destPath': ek2s, 'success': function (iy8x) {
          if (!_$ske2) mig3y8['onSaveFile'](im3tgy, wul), epsjn_ != null && epsjn_['runWith']([0x0]);else {
            if (_$ske2['readyUrl'] != im3tgy) mig3y8['remove'](wul, im3tgy, epsjn_);
          }
        }, 'fail': function ($v_2kb) {
          epsjn_ != null && epsjn_['runWith']([0x1, $v_2kb]);
        } });
    }, mig3y8['getFileNativePath'] = function (myg38i) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + myg38i;
    }, mig3y8['remove'] = function (zdp49c, y3mi8r, pe) {
      y3mi8r === void 0x0 && (y3mi8r = '');var ab56v = mig3y8['getFileInfo'](y3mi8r),
          ro7i = mig3y8['getFileNativePath'](ab56v['md5']);y8gm3['loader']['clearRes'](ab56v['readyUrl']), mig3y8['fs']['unlink']({ 'filePath': ro7i, 'success': function (ufl9) {
          if (y3mi8r != '') mig3y8['onSaveFile'](y3mi8r, zdp49c);pe != null && pe['runWith']([0x0]);
        }, 'fail': function (o50x7q) {} });
    }, mig3y8['onSaveFile'] = function (orx0q7, qv65ab) {
      var qa6bv = orx0q7['split']('?')[0x0];mig3y8['filesListObj'][qa6bv] = { 'md5': qv65ab, 'readyUrl': orx0q7 }, mig3y8['fs']['writeFile']({ 'filePath': mig3y8['fileNativeDir'] + '/' + mig3y8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mig3y8['filesListObj']), 'success': function (_$kvb2) {
          console['log']('写入测试测试成功：', _$kvb2);
        }, 'fail': function (mi8g3) {
          console['log']('写入测试测试失败：', mi8g3);
        } });
    }, mig3y8['existDir'] = function (t3i, xr8i7) {
      mig3y8['fs']['mkdir']({ 'dirPath': t3i, 'success': function (pc4jd) {
          xr8i7 != null && xr8i7['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (iyxr8m) {
          if (iyxr8m['errMsg']['indexOf']('file already exists') != -0x1) mig3y8['readSync'](mig3y8['fileListName'], 'utf8', xr8i7);else xr8i7 != null && xr8i7['runWith']([0x1, iyxr8m]);
        } });
    }, mig3y8['readSync'] = function (d4zuc9, ygt3i, ymigt, pz4ndc) {
      ygt3i === void 0x0 && (ygt3i = 'ascill'), pz4ndc === void 0x0 && (pz4ndc = '');var zd94uc = mig3y8['getFileNativePath'](d4zuc9),
          x8o0r;try {
        x8o0r = mig3y8['fs']['readFileSync'](zd94uc), ymigt != null && ymigt['runWith']([0x0, { 'data': x8o0r }]);
      } catch (jndps) {
        ymigt != null && ymigt['runWith']([0x1]);
      }
    }, mig3y8['readCache'] = function () {}, mig3y8['writeCache'] = function (_$e2ks) {
      var fw91ul = readyUrl['split']('?')[0x0];mig3y8['filesListObj'][fw91ul] = { 'md5': md5Name, 'readyUrl': readyUrl }, mig3y8['fs']['writeFile']({ 'filePath': mig3y8['fileNativeDir'] + '/' + mig3y8['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mig3y8['filesListObj']), 'success': function (q70x5o) {}, 'fail': function (k$b2v) {} });
    }, mig3y8['setNativeFileDir'] = function (v5a6qb) {
      mig3y8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + v5a6qb;
    }, mig3y8['filesListObj'] = {}, mig3y8['fileNativeDir'] = null, mig3y8['fileListName'] = 'layaairfiles.txt', mig3y8['ziyuFileData'] = {}, ygm8(mig3y8, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mig3y8;
  }(oq0a5),
      x7r0oq = function (j_kse$) {
    function qa5o() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qa5o['__super']['call'](this), this['_sound'] = qa5o['_createSound']();
    }wfz9u1(qa5o, 'laya.wx.mini.MiniSound', j_kse$);var _j$s = qa5o['prototype'];return _j$s['load'] = function (m8yi3r) {
      var s_2k$e = this;m8yi3r = abv65q['formatURL'](m8yi3r), this['url'] = m8yi3r;if (qa5o['_audioCache'][m8yi3r]) {
        this['event']('complete');return;
      }function itym() {
        if (qa5o['_null'] != undefined) s_2k$e['_sound']['onCanplay'](qa5o['_null']), s_2k$e['_sound']['onError'](qa5o['_null']);else try {
          s_2k$e['_sound']['onCanplay'](null), s_2k$e['_sound']['onError'](null), qa5o['_null'] = null;
        } catch (kj_$se) {
          console['warn']('[wxmini] _clearSound:' + kj_$se), s_2k$e['_sound']['onCanplay'](r7ox0), s_2k$e['_sound']['onError'](r7ox0), qa5o['_null'] = r7ox0;
        }
      }function epnsdj() {
        itym(), se$2['loaded'] = !![], se$2['event']('complete'), qa5o['_audioCache'][se$2['url']] = se$2;
      }function bq6av5(roq07) {
        console['error']('errCode=' + roq07['errCode'] + '  errMsg=' + roq07['errMsg']), itym(), se$2['event']('error');
      }function r7ox0() {}this['_sound']['onCanplay'](epnsdj), this['_sound']['onError'](bq6av5), this['_sound']['src'] = m8yi3r;var se$2 = this;
    }, _j$s['play'] = function (r7xo8, v2sk) {
      r7xo8 === void 0x0 && (r7xo8 = 0x0), v2sk === void 0x0 && (v2sk = 0x0);var cnpz;if (this['url'] == o507['_tMusic']) {
        if (!qa5o['_musicAudio']) qa5o['_musicAudio'] = qa5o['_createSound']();cnpz = qa5o['_musicAudio'];
      } else cnpz = qa5o['_createSound']();cnpz['src'] = this['url'];var sk2v$_ = new qx(cnpz);return sk2v$_['url'] = this['url'], sk2v$_['loops'] = v2sk, sk2v$_['startTime'] = r7xo8, sk2v$_['play'](), o507['addChannel'](sk2v$_), sk2v$_;
    }, _j$s['dispose'] = function () {
      var irymx = qa5o['_audioCache'][this['url']];irymx && (irymx['src'] = '', delete qa5o['_audioCache'][this['url']]);
    }, vq65(0x0, _j$s, 'duration', function () {
      return this['_sound']['duration'];
    }), qa5o['_createSound'] = function () {
      return qa5o['_id']++, jes_$k['window']['wx']['createInnerAudioContext']();
    }, qa5o['_musicAudio'] = null, qa5o['_id'] = 0x0, qa5o['_audioCache'] = {}, qa5o['_null'] = undefined, qa5o;
  }(oq0a5),
      qx = function (zcwf9) {
    function ti3myg(_jke$) {
      this['_audio'] = null, this['_onEnd'] = null, ti3myg['__super']['call'](this), this['_audio'] = _jke$, this['_onEnd'] = ejp4nd['bind'](this['__onEnd'], this), _jke$['onEnded'](this['_onEnd']);
    }wfz9u1(ti3myg, 'laya.wx.mini.MiniSoundChannel', zcwf9);var ncpj4d = ti3myg['prototype'];return ncpj4d['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (y8gm3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ncpj4d['__onNull'] = function () {}, ncpj4d['play'] = function () {
      this['isStopped'] = ![], o507['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, ncpj4d['stop'] = function () {
      this['isStopped'] = !![], o507['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (ti3myg['_null'] != undefined) this['_audio']['onEnded'](ti3myg['_null']);else try {
        this['_audio']['onEnded'](null), ti3myg['_null'] = null;
      } catch (npjdc4) {
        console['warn']('[wxmini] stop:' + npjdc4), this['_audio']['onEnded'](ejp4nd['bind'](this['__onNull'], this)), ti3myg['_null'] = ejp4nd['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, ncpj4d['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, ncpj4d['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], o507['addChannel'](this), this['_audio']['play']();
    }, vq65(0x0, ncpj4d, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), vq65(0x0, ncpj4d, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), vq65(0x0, ncpj4d, 'volume', function () {
      return 0x1;
    }, function (dcnpj) {}), ti3myg['_null'] = undefined, ti3myg;
  }(o8mi);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dnepj in Laya) {
    var ori8mx = Laya[dnepj];ori8mx && ori8mx['__isclass'] && (exports[dnepj] = ori8mx);
  }
});