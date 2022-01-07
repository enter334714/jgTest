var M = wx.$T;
(function (window, document, m0yq_) {
  var icv2t9 = m0yq_['un'],
      w5368 = m0yq_['uns'],
      rg813n = m0yq_['static'],
      grb3 = m0yq_['class'],
      yh_w5m = m0yq_['getset'],
      kjbgr = m0yq_['__newvec'],
      zof7p = laya['utils']['Browser'],
      _xmy0 = laya['events']['Event'],
      o0q7z = laya['events']['EventDispatcher'],
      fd$zpv = laya['resource']['HTMLImage'],
      gn81r = laya['utils']['Handler'],
      rbganj = laya['display']['Input'],
      jnbgra = laya['net']['Loader'],
      m6h5w = laya['maths']['Matrix'],
      _y0xh = laya['renders']['Render'],
      dv$i9 = laya['utils']['RunDriver'],
      x_w = laya['media']['Sound'],
      p7eo = laya['media']['SoundChannel'],
      yh0x_m = laya['media']['SoundManager'],
      opf7zd = laya['display']['Stage'],
      t$vci = laya['net']['URL'],
      pf$d7z = laya['utils']['Utils'],
      fopz7d = function () {
    function ct294() {}return grb3(ct294, 'laya.wx.mini.MiniAdpter'), ct294['getJson'] = function (x_mwy) {
      return JSON['parse'](x_mwy);
    }, ct294['init'] = function (sujk, jsabku) {
      sujk === void 0x0 && (sujk = ![]), jsabku === void 0x0 && (jsabku = ![]);if (ct294['_inited']) return;ct294['window'] = window;if (ct294['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;ct294['_inited'] = !![], ct294['isZiYu'] = jsabku, ct294['isPosMsgYu'] = sujk, ct294['EnvConfig'] = {}, !ct294['isZiYu'] && (nbagrj['setNativeFileDir']('/layaairGame'), nbagrj['existDir'](nbagrj['fileNativeDir'], gn81r['create'](ct294, ct294['onMkdirCallBack']))), ct294['window']['focus'] = function () {}, m0yq_['getUrlPath'] = function () {}, ct294['window']['logtime'] = function (v$zd) {}, ct294['window']['alertTimeLog'] = function (fpz7e) {}, ct294['window']['resetShareInfo'] = function () {}, ct294['window']['CanvasRenderingContext2D'] = function () {}, ct294['window']['CanvasRenderingContext2D']['prototype'] = ct294['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ct294['window']['document']['body']['appendChild'] = function () {}, ct294['EnvConfig']['pixelRatioInt'] = 0x0, dv$i9['getPixelRatio'] = ct294['pixelRatio'], ct294['_preCreateElement'] = zof7p['createElement'], zof7p['createElement'] = ct294['createElement'], dv$i9['createShaderCondition'] = ct294['createShaderCondition'], pf$d7z['parseXMLFromString'] = ct294['parseXMLFromString'], rbganj['_createInputElement'] = sakjrb['_createInputElement'], ct294['EnvConfig']['load'] = jnbgra['prototype']['load'], jnbgra['prototype']['load'] = yxm0h['prototype']['load'], ct294['isZiYu'] && sujk && wx['onMessage'](function (q_xm0y) {
        q_xm0y['isLoad'] && (nbagrj['ziyuFileData'][q_xm0y['url']] = q_xm0y['data']);
      });
    }, ct294['onMkdirCallBack'] = function (rbgkja, zdfp$v) {
      if (!rbgkja) nbagrj['filesListObj'] = JSON['parse'](zdfp$v['data']);
    }, ct294['pixelRatio'] = function () {
      if (!ct294['EnvConfig']['pixelRatioInt']) try {
        var xwy_h = wx['getSystemInfoSync']();return ct294['EnvConfig']['pixelRatioInt'] = xwy_h['pixelRatio'], xwy_h = xwy_h, xwy_h['pixelRatio'];
      } catch (_5mhwy) {}return ct294['EnvConfig']['pixelRatioInt'];
    }, ct294['createElement'] = function (xm_q) {
      if (xm_q == 'canvas') {
        var z$fv;return ct294['idx'] == 0x1 ? ct294['isZiYu'] ? (z$fv = sharedCanvas, z$fv['style'] = {}) : z$fv = window['canvas'] : z$fv = window['wx']['createCanvas'](), ct294['idx']++, z$fv;
      } else {
        if (xm_q == 'textarea' || xm_q == 'input') return ct294['onCreateInput'](xm_q);else {
          if (xm_q == 'div') {
            var qfze7 = ct294['_preCreateElement'](xm_q);return qfze7['contains'] = function (usabj) {
              return null;
            }, qfze7['removeChild'] = function (dzo7pf) {}, qfze7;
          } else return ct294['_preCreateElement'](xm_q);
        }
      }
    }, ct294['onCreateInput'] = function (sbkaju) {
      var _q0eyx = ct294['_preCreateElement'](sbkaju);return _q0eyx['focus'] = sakjrb['wxinputFocus'], _q0eyx['blur'] = sakjrb['wxinputblur'], _q0eyx['style'] = {}, _q0eyx['value'] = 0x0, _q0eyx['parentElement'] = {}, _q0eyx['placeholder'] = {}, _q0eyx['type'] = {}, _q0eyx['setColor'] = function (f7podz) {}, _q0eyx['setType'] = function (h_6m5w) {}, _q0eyx['setFontFace'] = function (pfd$zv) {}, _q0eyx['addEventListener'] = function (jusa) {}, _q0eyx['contains'] = function (of7pe) {
        return null;
      }, _q0eyx['removeChild'] = function (w5h168) {}, _q0eyx;
    }, ct294['createShaderCondition'] = function (fzv$pd) {
      var vp9$i = this,
          nrag = function () {
        var vdfp9$ = fzv$pd;return vp9$i[fzv$pd['replace']('this.', '')];
      };return nrag;
    }, ct294['EnvConfig'] = null, ct294['window'] = null, ct294['_preCreateElement'] = null, ct294['_inited'] = ![], ct294['wxRequest'] = null, ct294['systemInfo'] = null, ct294['version'] = '0.0.1', ct294['isZiYu'] = ![], ct294['isPosMsgYu'] = ![], ct294['parseXMLFromString'] = function (bsajr) {
      var z7p, wm5_yh;bsajr = bsajr['replace'](/>\s+</g, '><');try {
        z7p = new window['Parser']['DOMParser']()['parseFromString'](bsajr, 'text/xml');
      } catch (n13g) {
        throw '需要引入xml解析库文件';
      }return z7p;
    }, ct294['idx'] = 0x1, ct294;
  }(),
      z7foep = function () {
    function ivc9() {}grb3(ivc9, 'laya.wx.mini.MiniImage');var yo = ivc9['prototype'];return yo['_loadImage'] = function (z7podf) {
      var j3gbrn = this,
          tl2ci = ![];z7podf['indexOf']('layaNativeDir/') == -0x1 && (tl2ci = !![], z7podf = t$vci['formatURL'](z7podf));if (!nbagrj['getFileInfo'](z7podf)) {
        if (z7podf['indexOf']('http://') != -0x1 || z7podf['indexOf']('https://') != -0x1) nbagrj['downImg'](z7podf, new gn81r(ivc9, ivc9['onDownImgCallBack'], [z7podf, j3gbrn]), z7podf);else ivc9['onCreateImage'](z7podf, j3gbrn, !![]);
      } else ivc9['onCreateImage'](z7podf, j3gbrn, !tl2ci);
    }, ivc9['onDownImgCallBack'] = function (pe7z, efopz7, yqe_x0) {
      if (!yqe_x0) ivc9['onCreateImage'](pe7z, efopz7);else efopz7['onError'](null);
    }, ivc9['onCreateImage'] = function (jargb, rjnb, t4i29c) {
      t4i29c === void 0x0 && (t4i29c = ![]);var h5_w;if (!t4i29c) {
        var rkajbs = nbagrj['getFileInfo'](jargb),
            o70 = rkajbs['md5'];h5_w = nbagrj['getFileNativePath'](o70);
      } else h5_w = jargb;if (rjnb['imgCache'] == null) rjnb['imgCache'] = {};var yxe0q;function cv$t() {
        yxe0q['onload'] = null, yxe0q['onerror'] = null, delete rjnb['imgCache'][jargb];
      };var asrbj = function () {
        cv$t(), rjnb['onLoaded'](yxe0q);
      },
          jbuas = function () {
        cv$t(), rjnb['event']('error', 'Load image failed');
      };rjnb['_type'] == 'nativeimage' ? (yxe0q = new zof7p['window']['Image'](), yxe0q['crossOrigin'] = '', yxe0q['onload'] = asrbj, yxe0q['onerror'] = jbuas, yxe0q['src'] = h5_w, rjnb['imgCache'][jargb] = yxe0q) : new fd$zpv['create'](h5_w, { 'onload': asrbj, 'onerror': jbuas, 'onCreate': function (h51mw) {
          yxe0q = h51mw, rjnb['imgCache'][jargb] = h51mw;
        } });
    }, ivc9;
  }(),
      sakjrb = function () {
    function rbkjs() {}return grb3(rbkjs, 'laya.wx.mini.MiniInput'), rbkjs['_createInputElement'] = function () {
      rbganj['_initInput'](rbganj['area'] = zof7p['createElement']('textarea')), rbganj['_initInput'](rbganj['input'] = zof7p['createElement']('input')), rbganj['inputContainer'] = zof7p['createElement']('div'), rbganj['inputContainer']['style']['position'] = 'absolute', rbganj['inputContainer']['style']['zIndex'] = 0x186a0, zof7p['container']['appendChild'](rbganj['inputContainer']), rbganj['inputContainer']['setPos'] = function (vi9t$, _myxh0) {
        rbganj['inputContainer']['style']['left'] = vi9t$ + 'px', rbganj['inputContainer']['style']['top'] = _myxh0 + 'px';
      }, m0yq_['stage']['on']('resize', null, rbkjs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tvci2) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yh0x_m['_soundClass'] = hx_0ym, yh0x_m['_musicClass'] = hx_0ym;
    }, rbkjs['_onStageResize'] = function () {
      var feopz7 = m0yq_['stage']['_canvasTransform']['identity']();feopz7['scale'](zof7p['width'] / _y0xh['canvas']['width'] / dv$i9['getPixelRatio'](), zof7p['height'] / _y0xh['canvas']['height'] / dv$i9['getPixelRatio']());
    }, rbkjs['wxinputFocus'] = function (_m0yx) {
      var id$vc = rbganj['inputElement']['target'];if (id$vc && !id$vc['editable']) return;fopz7d['window']['wx']['offKeyboardConfirm'](), fopz7d['window']['wx']['offKeyboardInput'](), fopz7d['window']['wx']['showKeyboard']({ 'defaultValue': id$vc['text'], 'maxLength': id$vc['maxChars'], 'multiple': id$vc['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (o7eq0z) {}, 'fail': function (_qym0x) {} }), fopz7d['window']['wx']['onKeyboardConfirm'](function ($i9pv) {
        var gnjr38 = $i9pv ? $i9pv['value'] : '';id$vc['text'] = gnjr38, id$vc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), fopz7d['window']['wx']['onKeyboardInput'](function ($vp9id) {
        var qz7o = $vp9id ? $vp9id['value'] : '';if (!id$vc['multiline']) {
          if (qz7o['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }id$vc['text'] = qz7o, id$vc['event']('input');
      });
    }, rbkjs['inputEnter'] = function () {
      rbganj['inputElement']['target']['focus'] = ![];
    }, rbkjs['wxinputblur'] = function () {
      rbkjs['hideKeyboard']();
    }, rbkjs['hideKeyboard'] = function () {
      fopz7d['window']['wx']['offKeyboardConfirm'](), fopz7d['window']['wx']['offKeyboardInput'](), fopz7d['window']['wx']['hideKeyboard']({ 'success': function (i$dv9p) {
          console['log']('隐藏键盘');
        }, 'fail': function (ofze7q) {
          console['log']('隐藏键盘出错:' + (ofze7q ? ofze7q['errMsg'] : ''));
        } });
    }, rbkjs;
  }(),
      yxm0h = function () {
    function m_w6h() {}grb3(m_w6h, 'laya.wx.mini.MiniLoader');var p7$d = m_w6h['prototype'];return p7$d['load'] = function (qof7ze, bkuja, n6g138, z7dp$, gr138n) {
      n6g138 === void 0x0 && (n6g138 = !![]), gr138n === void 0x0 && (gr138n = ![]);var foe7q = this;foe7q['_url'] = qof7ze;if (qof7ze['indexOf']('data:image') === 0x0) foe7q['_type'] = bkuja = 'image';else foe7q['_type'] = bkuja || (bkuja = foe7q['getTypeFromUrl'](qof7ze));foe7q['_cache'] = n6g138, foe7q['_data'] = null;var di$9pv = 'ascii';if (qof7ze['indexOf']('.fnt') != -0x1) di$9pv = 'utf8';else bkuja == 'arraybuffer' && (di$9pv = '');;var n38g1 = pf$d7z['getFileExtension'](qof7ze);if (m_w6h['_fileTypeArr']['indexOf'](n38g1) != -0x1) fopz7d['EnvConfig']['load']['call'](this, qof7ze, bkuja, n6g138, z7dp$, gr138n);else {
        if (!nbagrj['getFileInfo'](qof7ze)) {
          if (qof7ze['indexOf']('layaNativeDir/') != -0x1) {
            if (fopz7d['isZiYu']) {
              var bksaj = nbagrj['ziyuFileData'][qof7ze];foe7q['onLoaded'](bksaj);return;
            } else {
              cosnole['log']('read read'), nbagrj['read'](qof7ze, di$9pv, new gn81r(m_w6h, m_w6h['onReadNativeCallBack'], [di$9pv, qof7ze, bkuja, n6g138, z7dp$, gr138n, foe7q]));return;
            }
          }if (t$vci['rootPath'] == '') var lic4t = qof7ze;else lic4t = qof7ze['split'](t$vci['rootPath'])[0x0];qof7ze['indexOf']('http://') != -0x1 || qof7ze['indexOf']('https://') != -0x1 ? fopz7d['EnvConfig']['load']['call'](foe7q, qof7ze, bkuja, n6g138, z7dp$, gr138n) : nbagrj['readFile'](lic4t, di$9pv, new gn81r(m_w6h, m_w6h['onReadNativeCallBack'], [di$9pv, qof7ze, bkuja, n6g138, z7dp$, gr138n, foe7q]), qof7ze);
        } else fopz7d['EnvConfig']['load']['call'](this, qof7ze, bkuja, n6g138, z7dp$, gr138n);
      }
    }, p7$d['resMgrLoad'] = function (nrbgj3, grjak, c$ivd9, g8nr3j, odfp, oqx0y, agjbr) {
      c$ivd9 === void 0x0 && (c$ivd9 = 0x0), g8nr3j === void 0x0 && (g8nr3j = ![]), odfp === void 0x0 && (odfp = ![]), oqx0y === void 0x0 && (oqx0y = 0x0), agjbr === void 0x0 && (agjbr = 0x3), nrbgj3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nrbgj3), fopz7d['EnvConfig']['resMgrLoad'](nrbgj3, (id$pv9, $vtc, t4ic92) => {
        m_w6h['prototype']['resMgrLoadCallBack'](id$pv9, $vtc, t4ic92, grjak);
      }, c$ivd9, g8nr3j, odfp, oqx0y, agjbr);
    }, p7$d['resMgrLoadCallBack'] = function (ic9d, rng8j, sbjaku, kasbj) {
      console['log']('buff:::', ic9d, sbjaku, nbagrj['fileNativeDir'] + '///' + nbagrj['fileListName']), kasbj(ic9d, rng8j, sbjaku);
    }, p7$d['clearRes'] = function (bgnjar, q0mx_) {
      q0mx_ === void 0x0 && (q0mx_ = ![]);var ng8613 = this;ng8613['clearRes'](bgnjar, q0mx_);var zfe7po = nbagrj['getFileInfo'](bgnjar);if (zfe7po && (bgnjar['indexOf']('http://') != -0x1 || bgnjar['indexOf']('https://') != -0x1)) {
        var h85w1 = zfe7po['md5'],
            m65hw = nbagrj['getFileNativePath'](h85w1);nbagrj['remove'](m65hw);
      }
    }, m_w6h['onReadNativeCallBack'] = function (z$fp7, saujbk, lt42, pf9v, _hmwyx, jrg3bn, g816n, jgnb3, _ymxq0) {
      pf9v === void 0x0 && (pf9v = !![]), jrg3bn === void 0x0 && (jrg3bn = ![]), jgnb3 === void 0x0 && (jgnb3 = 0x0);if (!jgnb3) {
        var dci$9v;if (lt42 == 'json' || lt42 == 'atlas') dci$9v = fopz7d['getJson'](_ymxq0['data']);else lt42 == 'xml' ? dci$9v = pf$d7z['parseXMLFromString'](_ymxq0['data']) : dci$9v = _ymxq0['data'];g816n['onLoaded'](dci$9v), !fopz7d['isZiYu'] && fopz7d['isPosMsgYu'] && lt42 != 'arraybuffer' && wx['postMessage']({ 'url': saujbk, 'data': dci$9v, 'isLoad': !![] });
      } else jgnb3 == 0x1 && fopz7d['EnvConfig']['load']['call'](g816n, saujbk, lt42, pf9v, _hmwyx, jrg3bn);
    }, rg813n(m_w6h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), m_w6h;
  }(),
      nbagrj = function (fz7dpo) {
    function mw_yx() {
      mw_yx['__super']['call'](this);;
    }return grb3(mw_yx, 'laya.wx.mini.MiniFileMgr', fz7dpo), mw_yx['isLoadFile'] = function (gn1r83) {
      return mw_yx['_fileTypeArr']['indexOf'](gn1r83) != -0x1 ? !![] : ![];
    }, mw_yx['getFileInfo'] = function (w6m51h) {
      var $9dpi = w6m51h['split']('?')[0x0],
          jrn3g = mw_yx['filesListObj'][$9dpi];if (jrn3g == null) return null;else return jrn3g;return null;
    }, mw_yx['onFileUpdate'] = function ($cvd9, r8njg3) {
      var rjasb = $cvd9['split']('/'),
          bsaju = rjasb[rjasb['length'] - 0x1],
          ng83r = mw_yx['getFileInfo'](r8njg3);if (ng83r == null) mw_yx['onSaveFile'](r8njg3, bsaju);else {
        if (ng83r['readyUrl'] != r8njg3) mw_yx['remove'](bsaju, r8njg3);
      }
    }, mw_yx['exits'] = function (df$v, ajbnrg) {
      var h0xy = mw_yx['getFileNativePath'](df$v);mw_yx['fs']['getFileInfo']({ 'filePath': h0xy, 'success': function (jn3g8r) {
          ajbnrg != null && ajbnrg['runWith']([0x0, jn3g8r]);
        }, 'fail': function (dof) {
          ajbnrg != null && ajbnrg['runWith']([0x1, dof]);
        } });
    }, mw_yx['read'] = function (xey0q_, ofqz, ivtc9, ofdp7z) {
      ofqz === void 0x0 && (ofqz = 'ascill'), ofdp7z === void 0x0 && (ofdp7z = '');var r1g83;ofdp7z != '' ? r1g83 = mw_yx['getFileNativePath'](xey0q_) : r1g83 = xey0q_, mw_yx['fs']['readFile']({ 'filePath': r1g83, 'encoding': ofqz, 'success': function (p7d) {
          ivtc9 != null && ivtc9['runWith']([0x0, p7d]);
        }, 'fail': function (e07ozq) {
          if (e07ozq && ofdp7z != '') mw_yx['down'](ofdp7z, ofqz, ivtc9, ofdp7z);else ivtc9 != null && ivtc9['runWith']([0x1]);
        } });
    }, mw_yx['readNativeFile'] = function (cl2it4, w18h56) {
      mw_yx['fs']['readFile']({ 'filePath': cl2it4, 'encoding': '', 'success': function (o7zdfp) {
          w18h56 != null && w18h56['runWith']([0x0]);
        }, 'fail': function (grabkj) {
          w18h56 != null && w18h56['runWith']([0x1]);
        } });
    }, mw_yx['down'] = function (ti29vc, c9id, zfd$7p, ct$iv) {
      c9id === void 0x0 && (c9id = 'ascill'), ct$iv === void 0x0 && (ct$iv = '');var grnj38 = mw_yx['getFileNativePath'](ct$iv),
          y_wmh5 = mw_yx['wxdown']({ 'url': ti29vc, 'filePath': grnj38, 'success': function (rsbak) {
          if (rsbak['statusCode'] === 0xc8) mw_yx['readFile'](rsbak['filePath'], c9id, zfd$7p, ct$iv);
        }, 'fail': function (vtc$9) {
          zfd$7p != null && zfd$7p['runWith']([0x1, vtc$9]);
        } });y_wmh5['onProgressUpdate'](function (nb3grj) {
        zfd$7p != null && zfd$7p['runWith']([0x2, nb3grj['progress']]);
      });
    }, mw_yx['readFile'] = function (f7op, $9ivd, q0ym_x, fvd$9) {
      $9ivd === void 0x0 && ($9ivd = 'ascill'), fvd$9 === void 0x0 && (fvd$9 = ''), mw_yx['fs']['readFile']({ 'filePath': f7op, 'encoding': $9ivd, 'success': function (e0qyxo) {
          if (f7op['indexOf']('http://') != -0x1 || f7op['indexOf']('https://') != -0x1) mw_yx['onFileUpdate'](f7op, fvd$9);q0ym_x != null && q0ym_x['runWith']([0x0, e0qyxo]);
        }, 'fail': function (qex70o) {
          if (qex70o) q0ym_x != null && q0ym_x['runWith']([0x1, qex70o]);
        } });
    }, mw_yx['downImg'] = function (d$vp9f, kabjrg, qo7xe) {
      qo7xe === void 0x0 && (qo7xe = '');var xmqy0_ = mw_yx['wxdown']({ 'url': d$vp9f, 'success': function (o0ex7) {
          o0ex7['statusCode'] === 0xc8 && mw_yx['copyFile'](o0ex7['tempFilePath'], qo7xe, kabjrg);
        }, 'fail': function (p7dofz) {
          kabjrg != null && kabjrg['runWith']([0x1, p7dofz]);
        } });
    }, mw_yx['copyFile'] = function (_mhy5, c9t, c$9di) {
      var eq7o0z = _mhy5['split']('/'),
          barkjs = eq7o0z[eq7o0z['length'] - 0x1],
          cvt2 = c9t['split']('?')[0x0],
          xqoe = mw_yx['getFileInfo'](c9t),
          d9piv = mw_yx['getFileNativePath'](barkjs);mw_yx['fs']['copyFile']({ 'srcPath': _mhy5, 'destPath': d9piv, 'success': function (w_5h6) {
          if (!xqoe) mw_yx['onSaveFile'](c9t, barkjs), c$9di != null && c$9di['runWith']([0x0]);else {
            if (xqoe['readyUrl'] != c9t) mw_yx['remove'](barkjs, c9t, c$9di);
          }
        }, 'fail': function (_mh5) {
          c$9di != null && c$9di['runWith']([0x1, _mh5]);
        } });
    }, mw_yx['getFileNativePath'] = function (yo0qx) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + yo0qx;
    }, mw_yx['remove'] = function (sbrk, yqx_0m, litc24) {
      yqx_0m === void 0x0 && (yqx_0m = '');var ezoq = mw_yx['getFileInfo'](yqx_0m),
          skjbua = mw_yx['getFileNativePath'](ezoq['md5']);m0yq_['loader']['clearRes'](ezoq['readyUrl']), mw_yx['fs']['unlink']({ 'filePath': skjbua, 'success': function (ajrskb) {
          if (yqx_0m != '') mw_yx['onSaveFile'](yqx_0m, sbrk);litc24 != null && litc24['runWith']([0x0]);
        }, 'fail': function (myqx0_) {} });
    }, mw_yx['onSaveFile'] = function (brksj, e07qx) {
      var agb = brksj['split']('?')[0x0];mw_yx['filesListObj'][agb] = { 'md5': e07qx, 'readyUrl': brksj }, mw_yx['fs']['writeFile']({ 'filePath': mw_yx['fileNativeDir'] + '/' + mw_yx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mw_yx['filesListObj']), 'success': function (divp9) {
          console['log']('写入测试测试成功：', divp9);
        }, 'fail': function (ye0_xq) {
          console['log']('写入测试测试失败：', ye0_xq);
        } });
    }, mw_yx['existDir'] = function (xmy0h, v$ipd) {
      mw_yx['fs']['mkdir']({ 'dirPath': xmy0h, 'success': function (eyq0xo) {
          v$ipd != null && v$ipd['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (x0eo7q) {
          if (x0eo7q['errMsg']['indexOf']('file already exists') != -0x1) mw_yx['readSync'](mw_yx['fileListName'], 'utf8', v$ipd);else v$ipd != null && v$ipd['runWith']([0x1, x0eo7q]);
        } });
    }, mw_yx['readSync'] = function (n3jg, y_0hxm, _hm5wy, rn831) {
      y_0hxm === void 0x0 && (y_0hxm = 'ascill'), rn831 === void 0x0 && (rn831 = '');var yq_mx0 = mw_yx['getFileNativePath'](n3jg),
          yw5_m;try {
        yw5_m = mw_yx['fs']['readFileSync'](yq_mx0), _hm5wy != null && _hm5wy['runWith']([0x0, { 'data': yw5_m }]);
      } catch (z$) {
        _hm5wy != null && _hm5wy['runWith']([0x1]);
      }
    }, mw_yx['readCache'] = function () {}, mw_yx['writeCache'] = function (e0q) {
      var q7fze = readyUrl['split']('?')[0x0];mw_yx['filesListObj'][q7fze] = { 'md5': md5Name, 'readyUrl': readyUrl }, mw_yx['fs']['writeFile']({ 'filePath': mw_yx['fileNativeDir'] + '/' + mw_yx['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](mw_yx['filesListObj']), 'success': function (fpz$d7) {}, 'fail': function (yqxe0_) {} });
    }, mw_yx['setNativeFileDir'] = function (w65) {
      mw_yx['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w65;
    }, mw_yx['filesListObj'] = {}, mw_yx['fileNativeDir'] = null, mw_yx['fileListName'] = 'layaairfiles.txt', mw_yx['ziyuFileData'] = {}, rg813n(mw_yx, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), mw_yx;
  }(o0q7z),
      hx_0ym = function ($p7df) {
    function _w6() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], _w6['__super']['call'](this), this['_sound'] = _w6['_createSound']();
    }grb3(_w6, 'laya.wx.mini.MiniSound', $p7df);var _xyq0m = _w6['prototype'];return _xyq0m['load'] = function (subak) {
      var x_hymw = this;subak = t$vci['formatURL'](subak), this['url'] = subak;if (_w6['_audioCache'][subak]) {
        this['event']('complete');return;
      }function fqe7() {
        if (_w6['_null'] != undefined) x_hymw['_sound']['onCanplay'](_w6['_null']), x_hymw['_sound']['onError'](_w6['_null']);else try {
          x_hymw['_sound']['onCanplay'](null), x_hymw['_sound']['onError'](null), _w6['_null'] = null;
        } catch (fdpo) {
          console['warn']('[wxmini] _clearSound:' + fdpo), x_hymw['_sound']['onCanplay'](itc294), x_hymw['_sound']['onError'](itc294), _w6['_null'] = itc294;
        }
      }function cit429() {
        fqe7(), krbj['loaded'] = !![], krbj['event']('complete'), _w6['_audioCache'][krbj['url']] = krbj;
      }function o70qx(grbn) {
        console['error']('errCode=' + grbn['errCode'] + '  errMsg=' + grbn['errMsg']), fqe7(), krbj['event']('error');
      }function itc294() {}this['_sound']['onCanplay'](cit429), this['_sound']['onError'](o70qx), this['_sound']['src'] = subak;var krbj = this;
    }, _xyq0m['play'] = function (r8n13g, pidv9) {
      r8n13g === void 0x0 && (r8n13g = 0x0), pidv9 === void 0x0 && (pidv9 = 0x0);var w36851;if (this['url'] == yh0x_m['_tMusic']) {
        if (!_w6['_musicAudio']) _w6['_musicAudio'] = _w6['_createSound']();w36851 = _w6['_musicAudio'];
      } else w36851 = _w6['_createSound']();w36851['src'] = this['url'];var $f9vd = new mhw16(w36851);return $f9vd['url'] = this['url'], $f9vd['loops'] = pidv9, $f9vd['startTime'] = r8n13g, $f9vd['play'](), yh0x_m['addChannel']($f9vd), $f9vd;
    }, _xyq0m['dispose'] = function () {
      var ajkbsu = _w6['_audioCache'][this['url']];ajkbsu && (ajkbsu['src'] = '', delete _w6['_audioCache'][this['url']]);
    }, yh_w5m(0x0, _xyq0m, 'duration', function () {
      return this['_sound']['duration'];
    }), _w6['_createSound'] = function () {
      return _w6['_id']++, fopz7d['window']['wx']['createInnerAudioContext']();
    }, _w6['_musicAudio'] = null, _w6['_id'] = 0x0, _w6['_audioCache'] = {}, _w6['_null'] = undefined, _w6;
  }(o0q7z),
      mhw16 = function (ksarj) {
    function xe_qy($fdz7) {
      this['_audio'] = null, this['_onEnd'] = null, xe_qy['__super']['call'](this), this['_audio'] = $fdz7, this['_onEnd'] = pf$d7z['bind'](this['__onEnd'], this), $fdz7['onEnded'](this['_onEnd']);
    }grb3(xe_qy, 'laya.wx.mini.MiniSoundChannel', ksarj);var g386n = xe_qy['prototype'];return g386n['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (m0yq_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, g386n['__onNull'] = function () {}, g386n['play'] = function () {
      this['isStopped'] = ![], yh0x_m['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, g386n['stop'] = function () {
      this['isStopped'] = !![], yh0x_m['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (xe_qy['_null'] != undefined) this['_audio']['onEnded'](xe_qy['_null']);else try {
        this['_audio']['onEnded'](null), xe_qy['_null'] = null;
      } catch (vdc$) {
        console['warn']('[wxmini] stop:' + vdc$), this['_audio']['onEnded'](pf$d7z['bind'](this['__onNull'], this)), xe_qy['_null'] = pf$d7z['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, g386n['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, g386n['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yh0x_m['addChannel'](this), this['_audio']['play']();
    }, yh_w5m(0x0, g386n, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), yh_w5m(0x0, g386n, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), yh_w5m(0x0, g386n, 'volume', function () {
      return 0x1;
    }, function (_5m6hw) {}), xe_qy['_null'] = undefined, xe_qy;
  }(p7eo);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var w51hm in Laya) {
    var x0yqo = Laya[w51hm];x0yqo && x0yqo['__isclass'] && (exports[w51hm] = x0yqo);
  }
});