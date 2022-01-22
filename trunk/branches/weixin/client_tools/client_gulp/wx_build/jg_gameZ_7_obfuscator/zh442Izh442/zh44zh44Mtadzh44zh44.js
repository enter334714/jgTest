var e = wx.$F;
(function (window, document, nek_j) {
  var esj_nk = nek_j['un'],
      o0x5q7 = nek_j['uns'],
      zu1w9 = nek_j['static'],
      b2$6av = nek_j['class'],
      j_snep = nek_j['getset'],
      rxiy8 = nek_j['__newvec'],
      o8xi7r = laya['utils']['Browser'],
      wu9z4 = laya['events']['Event'],
      _pns = laya['events']['EventDispatcher'],
      va2$6 = laya['resource']['HTMLImage'],
      dnjeps = laya['utils']['Handler'],
      $es_2 = laya['display']['Input'],
      r8x = laya['net']['Loader'],
      bv65aq = laya['maths']['Matrix'],
      kjse$ = laya['renders']['Render'],
      zu91wf = laya['utils']['RunDriver'],
      rxy8mi = laya['media']['Sound'],
      v2s$_ = laya['media']['SoundChannel'],
      $se = laya['media']['SoundManager'],
      cfwzu = laya['display']['Stage'],
      p_sen = laya['net']['URL'],
      k_2$v = laya['utils']['Utils'],
      ymr83 = function () {
    function jkse$() {}return b2$6av(jkse$, 'laya.wx.mini.MiniAdpter'), jkse$['getJson'] = function ($2_eks) {
      return JSON['parse']($2_eks);
    }, jkse$['init'] = function (a6v2$b, cp94d) {
      a6v2$b === void 0x0 && (a6v2$b = ![]), cp94d === void 0x0 && (cp94d = ![]);if (jkse$['_inited']) return;jkse$['window'] = window;if (jkse$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;jkse$['_inited'] = !![], jkse$['isZiYu'] = cp94d, jkse$['isPosMsgYu'] = a6v2$b, jkse$['EnvConfig'] = {}, !jkse$['isZiYu'] && (xr7io8['setNativeFileDir']('/layaairGame'), xr7io8['existDir'](xr7io8['fileNativeDir'], dnjeps['create'](jkse$, jkse$['onMkdirCallBack']))), jkse$['window']['focus'] = function () {}, nek_j['getUrlPath'] = function () {}, jkse$['window']['logtime'] = function (a7506q) {}, jkse$['window']['alertTimeLog'] = function (o7r8i) {}, jkse$['window']['resetShareInfo'] = function () {}, jkse$['window']['CanvasRenderingContext2D'] = function () {}, jkse$['window']['CanvasRenderingContext2D']['prototype'] = jkse$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], jkse$['window']['document']['body']['appendChild'] = function () {}, jkse$['EnvConfig']['pixelRatioInt'] = 0x0, zu91wf['getPixelRatio'] = jkse$['pixelRatio'], jkse$['_preCreateElement'] = o8xi7r['createElement'], o8xi7r['createElement'] = jkse$['createElement'], zu91wf['createShaderCondition'] = jkse$['createShaderCondition'], k_2$v['parseXMLFromString'] = jkse$['parseXMLFromString'], $es_2['_createInputElement'] = wlfu['_createInputElement'], jkse$['EnvConfig']['load'] = r8x['prototype']['load'], r8x['prototype']['load'] = s2$_['prototype']['load'], jkse$['isZiYu'] && a6v2$b && wx['onMessage'](function (zufw9c) {
        zufw9c['isLoad'] && (xr7io8['ziyuFileData'][zufw9c['url']] = zufw9c['data']);
      });
    }, jkse$['onMkdirCallBack'] = function (ud4c, uwzc4) {
      if (!ud4c) xr7io8['filesListObj'] = JSON['parse'](uwzc4['data']);
    }, jkse$['pixelRatio'] = function () {
      if (!jkse$['EnvConfig']['pixelRatioInt']) try {
        var esnjd = wx['getSystemInfoSync']();return jkse$['EnvConfig']['pixelRatioInt'] = esnjd['pixelRatio'], esnjd = esnjd, esnjd['pixelRatio'];
      } catch (_je$k) {}return jkse$['EnvConfig']['pixelRatioInt'];
    }, jkse$['createElement'] = function (mixy) {
      if (mixy == 'canvas') {
        var _$2se;return jkse$['idx'] == 0x1 ? jkse$['isZiYu'] ? (_$2se = sharedCanvas, _$2se['style'] = {}) : _$2se = window['canvas'] : _$2se = window['wx']['createCanvas'](), jkse$['idx']++, _$2se;
      } else {
        if (mixy == 'textarea' || mixy == 'input') return jkse$['onCreateInput'](mixy);else {
          if (mixy == 'div') {
            var xmriy = jkse$['_preCreateElement'](mixy);return xmriy['contains'] = function (yi8) {
              return null;
            }, xmriy['removeChild'] = function (a076q5) {}, xmriy;
          } else return jkse$['_preCreateElement'](mixy);
        }
      }
    }, jkse$['onCreateInput'] = function (uw) {
      var imyx8 = jkse$['_preCreateElement'](uw);return imyx8['focus'] = wlfu['wxinputFocus'], imyx8['blur'] = wlfu['wxinputblur'], imyx8['style'] = {}, imyx8['value'] = 0x0, imyx8['parentElement'] = {}, imyx8['placeholder'] = {}, imyx8['type'] = {}, imyx8['setColor'] = function (ks_nej) {}, imyx8['setType'] = function (ksnj_e) {}, imyx8['setFontFace'] = function (nc4dp) {}, imyx8['addEventListener'] = function (yimx8r) {}, imyx8['contains'] = function (dncz) {
        return null;
      }, imyx8['removeChild'] = function (ixy8rm) {}, imyx8;
    }, jkse$['createShaderCondition'] = function (ox570) {
      var i3gm8y = this,
          av265b = function () {
        var $2e_s = ox570;return i3gm8y[ox570['replace']('this.', '')];
      };return av265b;
    }, jkse$['EnvConfig'] = null, jkse$['window'] = null, jkse$['_preCreateElement'] = null, jkse$['_inited'] = ![], jkse$['wxRequest'] = null, jkse$['systemInfo'] = null, jkse$['version'] = '0.0.1', jkse$['isZiYu'] = ![], jkse$['isPosMsgYu'] = ![], jkse$['parseXMLFromString'] = function (k$6bv) {
      var skjn_e, x7o0;k$6bv = k$6bv['replace'](/>\s+</g, '><');try {
        skjn_e = new window['Parser']['DOMParser']()['parseFromString'](k$6bv, 'text/xml');
      } catch (kb6v) {
        throw '需要引入xml解析库文件';
      }return skjn_e;
    }, jkse$['idx'] = 0x1, jkse$;
  }(),
      y3gm8 = function () {
    function vb$6k() {}b2$6av(vb$6k, 'laya.wx.mini.MiniImage');var jnped4 = vb$6k['prototype'];return jnped4['_loadImage'] = function (v2kb_) {
      var sk2v$_ = this,
          jspdn = ![];v2kb_['indexOf']('layaNativeDir/') == -0x1 && (jspdn = !![], v2kb_ = p_sen['formatURL'](v2kb_));if (!xr7io8['getFileInfo'](v2kb_)) {
        if (v2kb_['indexOf']('http://') != -0x1 || v2kb_['indexOf']('https://') != -0x1) xr7io8['downImg'](v2kb_, new dnjeps(vb$6k, vb$6k['onDownImgCallBack'], [v2kb_, sk2v$_]), v2kb_);else vb$6k['onCreateImage'](v2kb_, sk2v$_, !![]);
      } else vb$6k['onCreateImage'](v2kb_, sk2v$_, !jspdn);
    }, vb$6k['onDownImgCallBack'] = function (q7a0o, i3gtym, $k2b_) {
      if (!$k2b_) vb$6k['onCreateImage'](q7a0o, i3gtym);else i3gtym['onError'](null);
    }, vb$6k['onCreateImage'] = function (f1z9wu, xq5o, snpedj) {
      snpedj === void 0x0 && (snpedj = ![]);var ioxr7;if (!snpedj) {
        var cfu = xr7io8['getFileInfo'](f1z9wu),
            e4ndpj = cfu['md5'];ioxr7 = xr7io8['getFileNativePath'](e4ndpj);
      } else ioxr7 = f1z9wu;if (xq5o['imgCache'] == null) xq5o['imgCache'] = {};var wfzu;function se2$_() {
        wfzu['onload'] = null, wfzu['onerror'] = null, delete xq5o['imgCache'][f1z9wu];
      };var q56a70 = function () {
        se2$_(), xq5o['onLoaded'](wfzu);
      },
          npdj = function () {
        se2$_(), xq5o['event']('error', 'Load image failed');
      };xq5o['_type'] == 'nativeimage' ? (wfzu = new o8xi7r['window']['Image'](), wfzu['crossOrigin'] = '', wfzu['onload'] = q56a70, wfzu['onerror'] = npdj, wfzu['src'] = ioxr7, xq5o['imgCache'][f1z9wu] = wfzu) : new va2$6['create'](ioxr7, { 'onload': q56a70, 'onerror': npdj, 'onCreate': function (k_jsen) {
          wfzu = k_jsen, xq5o['imgCache'][f1z9wu] = k_jsen;
        } });
    }, vb$6k;
  }(),
      wlfu = function () {
    function xr08() {}return b2$6av(xr08, 'laya.wx.mini.MiniInput'), xr08['_createInputElement'] = function () {
      $es_2['_initInput']($es_2['area'] = o8xi7r['createElement']('textarea')), $es_2['_initInput']($es_2['input'] = o8xi7r['createElement']('input')), $es_2['inputContainer'] = o8xi7r['createElement']('div'), $es_2['inputContainer']['style']['position'] = 'absolute', $es_2['inputContainer']['style']['zIndex'] = 0x186a0, o8xi7r['container']['appendChild']($es_2['inputContainer']), $es_2['inputContainer']['setPos'] = function (jneps, uc9f) {
        $es_2['inputContainer']['style']['left'] = jneps + 'px', $es_2['inputContainer']['style']['top'] = uc9f + 'px';
      }, nek_j['stage']['on']('resize', null, xr08['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dc4u9) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), $se['_soundClass'] = p94cdz, $se['_musicClass'] = p94cdz;
    }, xr08['_onStageResize'] = function () {
      var rx78oi = nek_j['stage']['_canvasTransform']['identity']();rx78oi['scale'](o8xi7r['width'] / kjse$['canvas']['width'] / zu91wf['getPixelRatio'](), o8xi7r['height'] / kjse$['canvas']['height'] / zu91wf['getPixelRatio']());
    }, xr08['wxinputFocus'] = function (zpcd9) {
      var _$bvk2 = $es_2['inputElement']['target'];if (_$bvk2 && !_$bvk2['editable']) return;ymr83['window']['wx']['offKeyboardConfirm'](), ymr83['window']['wx']['offKeyboardInput'](), ymr83['window']['wx']['showKeyboard']({ 'defaultValue': _$bvk2['text'], 'maxLength': _$bvk2['maxChars'], 'multiple': _$bvk2['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (jp4ncd) {}, 'fail': function (c49dpz) {} }), ymr83['window']['wx']['onKeyboardConfirm'](function (mi3yr) {
        var c4d9uz = mi3yr ? mi3yr['value'] : '';_$bvk2['text'] = c4d9uz, _$bvk2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), ymr83['window']['wx']['onKeyboardInput'](function (c9zwf) {
        var vba265 = c9zwf ? c9zwf['value'] : '';if (!_$bvk2['multiline']) {
          if (vba265['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }_$bvk2['text'] = vba265, _$bvk2['event']('input');
      });
    }, xr08['inputEnter'] = function () {
      $es_2['inputElement']['target']['focus'] = ![];
    }, xr08['wxinputblur'] = function () {
      xr08['hideKeyboard']();
    }, xr08['hideKeyboard'] = function () {
      ymr83['window']['wx']['offKeyboardConfirm'](), ymr83['window']['wx']['offKeyboardInput'](), ymr83['window']['wx']['hideKeyboard']({ 'success': function (w49u) {
          console['log']('隐藏键盘');
        }, 'fail': function (dc9z4p) {
          console['log']('隐藏键盘出错:' + (dc9z4p ? dc9z4p['errMsg'] : ''));
        } });
    }, xr08;
  }(),
      s2$_ = function () {
    function iox8r7() {}b2$6av(iox8r7, 'laya.wx.mini.MiniLoader');var oa05q7 = iox8r7['prototype'];return oa05q7['load'] = function (ke$j, q05x7o, uwc4, $k2bv_, v_k2b) {
      uwc4 === void 0x0 && (uwc4 = !![]), v_k2b === void 0x0 && (v_k2b = ![]);var _ks$v = this;_ks$v['_url'] = ke$j;if (ke$j['indexOf']('data:image') === 0x0) _ks$v['_type'] = q05x7o = 'image';else _ks$v['_type'] = q05x7o || (q05x7o = _ks$v['getTypeFromUrl'](ke$j));_ks$v['_cache'] = uwc4, _ks$v['_data'] = null;var dsjpne = 'ascii';if (ke$j['indexOf']('.fnt') != -0x1) dsjpne = 'utf8';else q05x7o == 'arraybuffer' && (dsjpne = '');;var xrq7o0 = k_2$v['getFileExtension'](ke$j);if (iox8r7['_fileTypeArr']['indexOf'](xrq7o0) != -0x1) ymr83['EnvConfig']['load']['call'](this, ke$j, q05x7o, uwc4, $k2bv_, v_k2b);else {
        if (!xr7io8['getFileInfo'](ke$j)) {
          if (ke$j['indexOf']('layaNativeDir/') != -0x1) {
            if (ymr83['isZiYu']) {
              var pje_s = xr7io8['ziyuFileData'][ke$j];_ks$v['onLoaded'](pje_s);return;
            } else {
              cosnole['log']('read read'), xr7io8['read'](ke$j, dsjpne, new dnjeps(iox8r7, iox8r7['onReadNativeCallBack'], [dsjpne, ke$j, q05x7o, uwc4, $k2bv_, v_k2b, _ks$v]));return;
            }
          }if (p_sen['rootPath'] == '') var rox78 = ke$j;else rox78 = ke$j['split'](p_sen['rootPath'])[0x0];ke$j['indexOf']('http://') != -0x1 || ke$j['indexOf']('https://') != -0x1 ? ymr83['EnvConfig']['load']['call'](_ks$v, ke$j, q05x7o, uwc4, $k2bv_, v_k2b) : xr7io8['readFile'](rox78, dsjpne, new dnjeps(iox8r7, iox8r7['onReadNativeCallBack'], [dsjpne, ke$j, q05x7o, uwc4, $k2bv_, v_k2b, _ks$v]), ke$j);
        } else ymr83['EnvConfig']['load']['call'](this, ke$j, q05x7o, uwc4, $k2bv_, v_k2b);
      }
    }, oa05q7['resMgrLoad'] = function (e_$2s, qx5o7, ximor, snjk_, pnjc4, peds, xr80o) {
      ximor === void 0x0 && (ximor = 0x0), snjk_ === void 0x0 && (snjk_ = ![]), pnjc4 === void 0x0 && (pnjc4 = ![]), peds === void 0x0 && (peds = 0x0), xr80o === void 0x0 && (xr80o = 0x3), e_$2s['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', e_$2s), ymr83['EnvConfig']['resMgrLoad'](e_$2s, (djcp, vkb$_, snkej_) => {
        iox8r7['prototype']['resMgrLoadCallBack'](djcp, vkb$_, snkej_, qx5o7);
      }, ximor, snjk_, pnjc4, peds, xr80o);
    }, oa05q7['resMgrLoadCallBack'] = function (v6qa, vb2_$, myri38, flu9) {
      console['log']('buff:::', v6qa, myri38, xr7io8['fileNativeDir'] + '///' + xr7io8['fileListName']), flu9(v6qa, vb2_$, myri38);
    }, oa05q7['clearRes'] = function (zufw1, tmi) {
      tmi === void 0x0 && (tmi = ![]);var b6aqv5 = this;b6aqv5['clearRes'](zufw1, tmi);var t3ymig = xr7io8['getFileInfo'](zufw1);if (t3ymig && (zufw1['indexOf']('http://') != -0x1 || zufw1['indexOf']('https://') != -0x1)) {
        var svk_$ = t3ymig['md5'],
            wu94cz = xr7io8['getFileNativePath'](svk_$);xr7io8['remove'](wu94cz);
      }
    }, iox8r7['onReadNativeCallBack'] = function (q0o7a5, nspj_, nej_ps, fzwu9, s$je_, dzcu4, cp4nd, czwfu9, k2v$s_) {
      fzwu9 === void 0x0 && (fzwu9 = !![]), dzcu4 === void 0x0 && (dzcu4 = ![]), czwfu9 === void 0x0 && (czwfu9 = 0x0);if (!czwfu9) {
        var _pjsen;if (nej_ps == 'json' || nej_ps == 'atlas') _pjsen = ymr83['getJson'](k2v$s_['data']);else nej_ps == 'xml' ? _pjsen = k_2$v['parseXMLFromString'](k2v$s_['data']) : _pjsen = k2v$s_['data'];cp4nd['onLoaded'](_pjsen), !ymr83['isZiYu'] && ymr83['isPosMsgYu'] && nej_ps != 'arraybuffer' && wx['postMessage']({ 'url': nspj_, 'data': _pjsen, 'isLoad': !![] });
      } else czwfu9 == 0x1 && ymr83['EnvConfig']['load']['call'](cp4nd, nspj_, nej_ps, fzwu9, s$je_, dzcu4);
    }, zu1w9(iox8r7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), iox8r7;
  }(),
      xr7io8 = function (mr8i3) {
    function $s_k2v() {
      $s_k2v['__super']['call'](this);;
    }return b2$6av($s_k2v, 'laya.wx.mini.MiniFileMgr', mr8i3), $s_k2v['isLoadFile'] = function (fwl9u1) {
      return $s_k2v['_fileTypeArr']['indexOf'](fwl9u1) != -0x1 ? !![] : ![];
    }, $s_k2v['getFileInfo'] = function (uzw9) {
      var pcnz4 = uzw9['split']('?')[0x0],
          yim = $s_k2v['filesListObj'][pcnz4];if (yim == null) return null;else return yim;return null;
    }, $s_k2v['onFileUpdate'] = function (kvb62$, xio78r) {
      var c9z4wu = kvb62$['split']('/'),
          b6v5aq = c9z4wu[c9z4wu['length'] - 0x1],
          vk2$ = $s_k2v['getFileInfo'](xio78r);if (vk2$ == null) $s_k2v['onSaveFile'](xio78r, b6v5aq);else {
        if (vk2$['readyUrl'] != xio78r) $s_k2v['remove'](b6v5aq, xio78r);
      }
    }, $s_k2v['exits'] = function (ao57q0, s_2v$k) {
      var v2k6$b = $s_k2v['getFileNativePath'](ao57q0);$s_k2v['fs']['getFileInfo']({ 'filePath': v2k6$b, 'success': function (qo0x7) {
          s_2v$k != null && s_2v$k['runWith']([0x0, qo0x7]);
        }, 'fail': function (c4pjd) {
          s_2v$k != null && s_2v$k['runWith']([0x1, c4pjd]);
        } });
    }, $s_k2v['read'] = function (o0qr7, ejn4p, y38rim, i7orx8) {
      ejn4p === void 0x0 && (ejn4p = 'ascill'), i7orx8 === void 0x0 && (i7orx8 = '');var ksj_en;i7orx8 != '' ? ksj_en = $s_k2v['getFileNativePath'](o0qr7) : ksj_en = o0qr7, $s_k2v['fs']['readFile']({ 'filePath': ksj_en, 'encoding': ejn4p, 'success': function (xq0) {
          y38rim != null && y38rim['runWith']([0x0, xq0]);
        }, 'fail': function (x07ro8) {
          if (x07ro8 && i7orx8 != '') $s_k2v['down'](i7orx8, ejn4p, y38rim, i7orx8);else y38rim != null && y38rim['runWith']([0x1]);
        } });
    }, $s_k2v['readNativeFile'] = function (nsepjd, xm) {
      $s_k2v['fs']['readFile']({ 'filePath': nsepjd, 'encoding': '', 'success': function (s_k$j) {
          xm != null && xm['runWith']([0x0]);
        }, 'fail': function (uwfcz) {
          xm != null && xm['runWith']([0x1]);
        } });
    }, $s_k2v['down'] = function (qb6a0, $k2s_, xqo570, np_esj) {
      $k2s_ === void 0x0 && ($k2s_ = 'ascill'), np_esj === void 0x0 && (np_esj = '');var gm38y = $s_k2v['getFileNativePath'](np_esj),
          fu19w = $s_k2v['wxdown']({ 'url': qb6a0, 'filePath': gm38y, 'success': function (ygit) {
          if (ygit['statusCode'] === 0xc8) $s_k2v['readFile'](ygit['filePath'], $k2s_, xqo570, np_esj);
        }, 'fail': function (v$k2s_) {
          xqo570 != null && xqo570['runWith']([0x1, v$k2s_]);
        } });fu19w['onProgressUpdate'](function (wul1) {
        xqo570 != null && xqo570['runWith']([0x2, wul1['progress']]);
      });
    }, $s_k2v['readFile'] = function (np4j, _kv2$s, u1lw9, lw19fu) {
      _kv2$s === void 0x0 && (_kv2$s = 'ascill'), lw19fu === void 0x0 && (lw19fu = ''), $s_k2v['fs']['readFile']({ 'filePath': np4j, 'encoding': _kv2$s, 'success': function (o7) {
          if (np4j['indexOf']('http://') != -0x1 || np4j['indexOf']('https://') != -0x1) $s_k2v['onFileUpdate'](np4j, lw19fu);u1lw9 != null && u1lw9['runWith']([0x0, o7]);
        }, 'fail': function (sdepj) {
          if (sdepj) u1lw9 != null && u1lw9['runWith']([0x1, sdepj]);
        } });
    }, $s_k2v['downImg'] = function (k$sej, $_s2ek, d4jpcn) {
      d4jpcn === void 0x0 && (d4jpcn = '');var pndjc = $s_k2v['wxdown']({ 'url': k$sej, 'success': function (aqv56) {
          aqv56['statusCode'] === 0xc8 && $s_k2v['copyFile'](aqv56['tempFilePath'], d4jpcn, $_s2ek);
        }, 'fail': function (tgmy3) {
          $_s2ek != null && $_s2ek['runWith']([0x1, tgmy3]);
        } });
    }, $s_k2v['copyFile'] = function ($kse2, js$, $sj_ke) {
      var d4c9z = $kse2['split']('/'),
          nj_eps = d4c9z[d4c9z['length'] - 0x1],
          pesn = js$['split']('?')[0x0],
          $v_ = $s_k2v['getFileInfo'](js$),
          ej4dpn = $s_k2v['getFileNativePath'](nj_eps);$s_k2v['fs']['copyFile']({ 'srcPath': $kse2, 'destPath': ej4dpn, 'success': function (abv265) {
          if (!$v_) $s_k2v['onSaveFile'](js$, nj_eps), $sj_ke != null && $sj_ke['runWith']([0x0]);else {
            if ($v_['readyUrl'] != js$) $s_k2v['remove'](nj_eps, js$, $sj_ke);
          }
        }, 'fail': function ($ksv_) {
          $sj_ke != null && $sj_ke['runWith']([0x1, $ksv_]);
        } });
    }, $s_k2v['getFileNativePath'] = function (z49d) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + z49d;
    }, $s_k2v['remove'] = function (x8orm, iymr83, q5ao) {
      iymr83 === void 0x0 && (iymr83 = '');var o87r0x = $s_k2v['getFileInfo'](iymr83),
          j_nske = $s_k2v['getFileNativePath'](o87r0x['md5']);nek_j['loader']['clearRes'](o87r0x['readyUrl']), $s_k2v['fs']['unlink']({ 'filePath': j_nske, 'success': function (k$_sej) {
          if (iymr83 != '') $s_k2v['onSaveFile'](iymr83, x8orm);q5ao != null && q5ao['runWith']([0x0]);
        }, 'fail': function (oqx50) {} });
    }, $s_k2v['onSaveFile'] = function (k_se$2, dz9p) {
      var m8xri = k_se$2['split']('?')[0x0];$s_k2v['filesListObj'][m8xri] = { 'md5': dz9p, 'readyUrl': k_se$2 }, $s_k2v['fs']['writeFile']({ 'filePath': $s_k2v['fileNativeDir'] + '/' + $s_k2v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($s_k2v['filesListObj']), 'success': function (nzc4dp) {
          console['log']('写入测试测试成功：', nzc4dp);
        }, 'fail': function (rxym8) {
          console['log']('写入测试测试失败：', rxym8);
        } });
    }, $s_k2v['existDir'] = function (ym3it, e$_sj) {
      $s_k2v['fs']['mkdir']({ 'dirPath': ym3it, 'success': function (j_kne) {
          e$_sj != null && e$_sj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (qv5a6) {
          if (qv5a6['errMsg']['indexOf']('file already exists') != -0x1) $s_k2v['readSync']($s_k2v['fileListName'], 'utf8', e$_sj);else e$_sj != null && e$_sj['runWith']([0x1, qv5a6]);
        } });
    }, $s_k2v['readSync'] = function (c9dzu4, s2kv$, yix8mr, b5v6) {
      s2kv$ === void 0x0 && (s2kv$ = 'ascill'), b5v6 === void 0x0 && (b5v6 = '');var zfw9 = $s_k2v['getFileNativePath'](c9dzu4),
          s$e_jk;try {
        s$e_jk = $s_k2v['fs']['readFileSync'](zfw9), yix8mr != null && yix8mr['runWith']([0x0, { 'data': s$e_jk }]);
      } catch (imgy3t) {
        yix8mr != null && yix8mr['runWith']([0x1]);
      }
    }, $s_k2v['readCache'] = function () {}, $s_k2v['writeCache'] = function (fwl9) {
      var k2b_v$ = readyUrl['split']('?')[0x0];$s_k2v['filesListObj'][k2b_v$] = { 'md5': md5Name, 'readyUrl': readyUrl }, $s_k2v['fs']['writeFile']({ 'filePath': $s_k2v['fileNativeDir'] + '/' + $s_k2v['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($s_k2v['filesListObj']), 'success': function (i78rxo) {}, 'fail': function (s2ek$) {} });
    }, $s_k2v['setNativeFileDir'] = function (nzd4p) {
      $s_k2v['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nzd4p;
    }, $s_k2v['filesListObj'] = {}, $s_k2v['fileNativeDir'] = null, $s_k2v['fileListName'] = 'layaairfiles.txt', $s_k2v['ziyuFileData'] = {}, zu1w9($s_k2v, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), $s_k2v;
  }(_pns),
      p94cdz = function (timg) {
    function ens_k() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], ens_k['__super']['call'](this), this['_sound'] = ens_k['_createSound']();
    }b2$6av(ens_k, 'laya.wx.mini.MiniSound', timg);var iom8r = ens_k['prototype'];return iom8r['load'] = function (zdp9c) {
      var baqv56 = this;zdp9c = p_sen['formatURL'](zdp9c), this['url'] = zdp9c;if (ens_k['_audioCache'][zdp9c]) {
        this['event']('complete');return;
      }function ao0q() {
        if (ens_k['_null'] != undefined) baqv56['_sound']['onCanplay'](ens_k['_null']), baqv56['_sound']['onError'](ens_k['_null']);else try {
          baqv56['_sound']['onCanplay'](null), baqv56['_sound']['onError'](null), ens_k['_null'] = null;
        } catch (v62$bk) {
          console['warn']('[wxmini] _clearSound:' + v62$bk), baqv56['_sound']['onCanplay'](qo075a), baqv56['_sound']['onError'](qo075a), ens_k['_null'] = qo075a;
        }
      }function kv6$b() {
        ao0q(), pjnsd['loaded'] = !![], pjnsd['event']('complete'), ens_k['_audioCache'][pjnsd['url']] = pjnsd;
      }function ndz4cp($2es) {
        console['error']('errCode=' + $2es['errCode'] + '  errMsg=' + $2es['errMsg']), ao0q(), pjnsd['event']('error');
      }function qo075a() {}this['_sound']['onCanplay'](kv6$b), this['_sound']['onError'](ndz4cp), this['_sound']['src'] = zdp9c;var pjnsd = this;
    }, iom8r['play'] = function (q07a, nep4j) {
      q07a === void 0x0 && (q07a = 0x0), nep4j === void 0x0 && (nep4j = 0x0);var zp4dn;if (this['url'] == $se['_tMusic']) {
        if (!ens_k['_musicAudio']) ens_k['_musicAudio'] = ens_k['_createSound']();zp4dn = ens_k['_musicAudio'];
      } else zp4dn = ens_k['_createSound']();zp4dn['src'] = this['url'];var pjdse = new i8x7(zp4dn);return pjdse['url'] = this['url'], pjdse['loops'] = nep4j, pjdse['startTime'] = q07a, pjdse['play'](), $se['addChannel'](pjdse), pjdse;
    }, iom8r['dispose'] = function () {
      var dneps = ens_k['_audioCache'][this['url']];dneps && (dneps['src'] = '', delete ens_k['_audioCache'][this['url']]);
    }, j_snep(0x0, iom8r, 'duration', function () {
      return this['_sound']['duration'];
    }), ens_k['_createSound'] = function () {
      return ens_k['_id']++, ymr83['window']['wx']['createInnerAudioContext']();
    }, ens_k['_musicAudio'] = null, ens_k['_id'] = 0x0, ens_k['_audioCache'] = {}, ens_k['_null'] = undefined, ens_k;
  }(_pns),
      i8x7 = function (a657q) {
    function $k_2sv(o07rx) {
      this['_audio'] = null, this['_onEnd'] = null, $k_2sv['__super']['call'](this), this['_audio'] = o07rx, this['_onEnd'] = k_2$v['bind'](this['__onEnd'], this), o07rx['onEnded'](this['_onEnd']);
    }b2$6av($k_2sv, 'laya.wx.mini.MiniSoundChannel', a657q);var wf19 = $k_2sv['prototype'];return wf19['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (nek_j['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, wf19['__onNull'] = function () {}, wf19['play'] = function () {
      this['isStopped'] = ![], $se['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, wf19['stop'] = function () {
      this['isStopped'] = !![], $se['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if ($k_2sv['_null'] != undefined) this['_audio']['onEnded']($k_2sv['_null']);else try {
        this['_audio']['onEnded'](null), $k_2sv['_null'] = null;
      } catch (_jsnpe) {
        console['warn']('[wxmini] stop:' + _jsnpe), this['_audio']['onEnded'](k_2$v['bind'](this['__onNull'], this)), $k_2sv['_null'] = k_2$v['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, wf19['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, wf19['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], $se['addChannel'](this), this['_audio']['play']();
    }, j_snep(0x0, wf19, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), j_snep(0x0, wf19, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), j_snep(0x0, wf19, 'volume', function () {
      return 0x1;
    }, function (m8iyr3) {}), $k_2sv['_null'] = undefined, $k_2sv;
  }(v2s$_);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var cw49zu in Laya) {
    var cdpzn = Laya[cw49zu];cdpzn && cdpzn['__isclass'] && (exports[cw49zu] = cdpzn);
  }
});