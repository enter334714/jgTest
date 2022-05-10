var g = wx.u$;
(function (window, document, gjy_kn) {
  var wnk_j = gjy_kn['un'],
      yjkw_n = gjy_kn['uns'],
      e8h_s = gjy_kn['static'],
      pig4 = gjy_kn['class'],
      f36rt1 = gjy_kn['getset'],
      drqf65 = gjy_kn['__newvec'],
      cgp4x = laya['utils']['Browser'],
      a8ws = laya['events']['Event'],
      qd56u = laya['events']['EventDispatcher'],
      xpgi = laya['resource']['HTMLImage'],
      nkwj_y = laya['utils']['Handler'],
      $u2 = laya['display']['Input'],
      h8ase0 = laya['net']['Loader'],
      lbz$97 = laya['maths']['Matrix'],
      xpcm = laya['renders']['Render'],
      pcxzm = laya['utils']['RunDriver'],
      poxzc = laya['media']['Sound'],
      gnjy4i = laya['media']['SoundChannel'],
      yni4j = laya['media']['SoundManager'],
      ew_n8 = laya['display']['Stage'],
      d6tr = laya['net']['URL'],
      mlo7$ = laya['utils']['Utils'],
      s_eh8 = function () {
    function hk8_w() {}return pig4(hk8_w, 'laya.wx.mini.MiniAdpter'), hk8_w['getJson'] = function (cz7oml) {
      return JSON['parse'](cz7oml);
    }, hk8_w['init'] = function (jkygin, d6ftr3) {
      jkygin === void 0x0 && (jkygin = ![]), d6ftr3 === void 0x0 && (d6ftr3 = ![]);if (hk8_w['_inited']) return;hk8_w['window'] = window;if (hk8_w['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;hk8_w['_inited'] = !![], hk8_w['isZiYu'] = d6ftr3, hk8_w['isPosMsgYu'] = jkygin, hk8_w['EnvConfig'] = {}, !hk8_w['isZiYu'] && (ixpmc['setNativeFileDir']('/layaairGame'), ixpmc['existDir'](ixpmc['fileNativeDir'], nkwj_y['create'](hk8_w, hk8_w['onMkdirCallBack']))), hk8_w['window']['focus'] = function () {}, gjy_kn['getUrlPath'] = function () {}, hk8_w['window']['logtime'] = function (q65drf) {}, hk8_w['window']['alertTimeLog'] = function (lom7) {}, hk8_w['window']['resetShareInfo'] = function () {}, hk8_w['window']['CanvasRenderingContext2D'] = function () {}, hk8_w['window']['CanvasRenderingContext2D']['prototype'] = hk8_w['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hk8_w['window']['document']['body']['appendChild'] = function () {}, hk8_w['EnvConfig']['pixelRatioInt'] = 0x0, pcxzm['getPixelRatio'] = hk8_w['pixelRatio'], hk8_w['_preCreateElement'] = cgp4x['createElement'], cgp4x['createElement'] = hk8_w['createElement'], pcxzm['createShaderCondition'] = hk8_w['createShaderCondition'], mlo7$['parseXMLFromString'] = hk8_w['parseXMLFromString'], $u2['_createInputElement'] = lcmzo7['_createInputElement'], hk8_w['EnvConfig']['load'] = h8ase0['prototype']['load'], h8ase0['prototype']['load'] = yxgi4['prototype']['load'], hk8_w['isZiYu'] && jkygin && wx['onMessage'](function (pczmol) {
        pczmol['isLoad'] && (ixpmc['ziyuFileData'][pczmol['url']] = pczmol['data']);
      });
    }, hk8_w['onMkdirCallBack'] = function (jngk_, v529ub) {
      if (!jngk_) ixpmc['filesListObj'] = JSON['parse'](v529ub['data']);
    }, hk8_w['pixelRatio'] = function () {
      if (!hk8_w['EnvConfig']['pixelRatioInt']) try {
        var xcgp = wx['getSystemInfoSync']();return hk8_w['EnvConfig']['pixelRatioInt'] = xcgp['pixelRatio'], xcgp = xcgp, xcgp['pixelRatio'];
      } catch (j4iy) {}return hk8_w['EnvConfig']['pixelRatioInt'];
    }, hk8_w['createElement'] = function (vb29u) {
      if (vb29u == 'canvas') {
        var wk8_he;return hk8_w['idx'] == 0x1 ? hk8_w['isZiYu'] ? (wk8_he = sharedCanvas, wk8_he['style'] = {}) : wk8_he = window['canvas'] : wk8_he = window['wx']['createCanvas'](), hk8_w['idx']++, wk8_he;
      } else {
        if (vb29u == 'textarea' || vb29u == 'input') return hk8_w['onCreateInput'](vb29u);else {
          if (vb29u == 'div') {
            var v25ud = hk8_w['_preCreateElement'](vb29u);return v25ud['contains'] = function (n_kg) {
              return null;
            }, v25ud['removeChild'] = function (du2v5q) {}, v25ud;
          } else return hk8_w['_preCreateElement'](vb29u);
        }
      }
    }, hk8_w['onCreateInput'] = function (kj_y) {
      var as8e0 = hk8_w['_preCreateElement'](kj_y);return as8e0['focus'] = lcmzo7['wxinputFocus'], as8e0['blur'] = lcmzo7['wxinputblur'], as8e0['style'] = {}, as8e0['value'] = 0x0, as8e0['parentElement'] = {}, as8e0['placeholder'] = {}, as8e0['type'] = {}, as8e0['setColor'] = function (gj_ynk) {}, as8e0['setType'] = function (x4pig) {}, as8e0['setFontFace'] = function (yjwkn) {}, as8e0['addEventListener'] = function ($ozm7) {}, as8e0['contains'] = function (yjgnki) {
        return null;
      }, as8e0['removeChild'] = function (v2qdu) {}, as8e0;
    }, hk8_w['createShaderCondition'] = function (es_wh) {
      var uvd52 = this,
          jnw_e = function () {
        var mcpi4 = es_wh;return uvd52[es_wh['replace']('this.', '')];
      };return jnw_e;
    }, hk8_w['EnvConfig'] = null, hk8_w['window'] = null, hk8_w['_preCreateElement'] = null, hk8_w['_inited'] = ![], hk8_w['wxRequest'] = null, hk8_w['systemInfo'] = null, hk8_w['version'] = '0.0.1', hk8_w['isZiYu'] = ![], hk8_w['isPosMsgYu'] = ![], hk8_w['parseXMLFromString'] = function (gxy4ip) {
      var zpxom, pyi4;gxy4ip = gxy4ip['replace'](/>\s+</g, '><');try {
        zpxom = new window['Parser']['DOMParser']()['parseFromString'](gxy4ip, 'text/xml');
      } catch (qdtr6) {
        throw '需要引入xml解析库文件';
      }return zpxom;
    }, hk8_w['idx'] = 0x1, hk8_w;
  }(),
      uv9 = function () {
    function k_en8() {}pig4(k_en8, 'laya.wx.mini.MiniImage');var knjew_ = k_en8['prototype'];return knjew_['_loadImage'] = function (w_enkj) {
      var swaeh8 = this,
          lczpo = ![];w_enkj['indexOf']('layaNativeDir/') == -0x1 && (lczpo = !![], w_enkj = d6tr['formatURL'](w_enkj));if (!ixpmc['getFileInfo'](w_enkj)) {
        if (w_enkj['indexOf']('http://') != -0x1 || w_enkj['indexOf']('https://') != -0x1) ixpmc['downImg'](w_enkj, new nkwj_y(k_en8, k_en8['onDownImgCallBack'], [w_enkj, swaeh8]), w_enkj);else k_en8['onCreateImage'](w_enkj, swaeh8, !![]);
      } else k_en8['onCreateImage'](w_enkj, swaeh8, !lczpo);
    }, k_en8['onDownImgCallBack'] = function (o7z$m, r6f5qd, pyg4i) {
      if (!pyg4i) k_en8['onCreateImage'](o7z$m, r6f5qd);else r6f5qd['onError'](null);
    }, k_en8['onCreateImage'] = function (v7b2$, w_jenk, rd56) {
      rd56 === void 0x0 && (rd56 = ![]);var ij4yn;if (!rd56) {
        var jyi4ng = ixpmc['getFileInfo'](v7b2$),
            fqdt6 = jyi4ng['md5'];ij4yn = ixpmc['getFileNativePath'](fqdt6);
      } else ij4yn = v7b2$;if (w_jenk['imgCache'] == null) w_jenk['imgCache'] = {};var opm;function oxpzc() {
        opm['onload'] = null, opm['onerror'] = null, delete w_jenk['imgCache'][v7b2$];
      };var f36t1 = function () {
        oxpzc(), w_jenk['onLoaded'](opm);
      },
          tfrd63 = function () {
        oxpzc(), w_jenk['event']('error', 'Load image failed');
      };w_jenk['_type'] == 'nativeimage' ? (opm = new cgp4x['window']['Image'](), opm['crossOrigin'] = '', opm['onload'] = f36t1, opm['onerror'] = tfrd63, opm['src'] = ij4yn, w_jenk['imgCache'][v7b2$] = opm) : new xpgi['create'](ij4yn, { 'onload': f36t1, 'onerror': tfrd63, 'onCreate': function (lb7$o) {
          opm = lb7$o, w_jenk['imgCache'][v7b2$] = lb7$o;
        } });
    }, k_en8;
  }(),
      lcmzo7 = function () {
    function q5v2u9() {}return pig4(q5v2u9, 'laya.wx.mini.MiniInput'), q5v2u9['_createInputElement'] = function () {
      $u2['_initInput']($u2['area'] = cgp4x['createElement']('textarea')), $u2['_initInput']($u2['input'] = cgp4x['createElement']('input')), $u2['inputContainer'] = cgp4x['createElement']('div'), $u2['inputContainer']['style']['position'] = 'absolute', $u2['inputContainer']['style']['zIndex'] = 0x186a0, cgp4x['container']['appendChild']($u2['inputContainer']), $u2['inputContainer']['setPos'] = function (ocxm, czm7ol) {
        $u2['inputContainer']['style']['left'] = ocxm + 'px', $u2['inputContainer']['style']['top'] = czm7ol + 'px';
      }, gjy_kn['stage']['on']('resize', null, q5v2u9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ygxi4) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), yni4j['_soundClass'] = fud, yni4j['_musicClass'] = fud, window['_videoClass'] = $mz7lo;
    }, q5v2u9['_onStageResize'] = function () {
      var w_ke8n = gjy_kn['stage']['_canvasTransform']['identity']();w_ke8n['scale'](cgp4x['width'] / xpcm['canvas']['width'] / pcxzm['getPixelRatio'](), cgp4x['height'] / xpcm['canvas']['height'] / pcxzm['getPixelRatio']());
    }, q5v2u9['wxinputFocus'] = function (y4gijn) {
      var b$2u = $u2['inputElement']['target'];if (b$2u && !b$2u['editable']) return;s_eh8['window']['wx']['offKeyboardConfirm'](), s_eh8['window']['wx']['offKeyboardInput'](), s_eh8['window']['wx']['showKeyboard']({ 'defaultValue': b$2u['text'], 'maxLength': b$2u['maxChars'], 'multiple': b$2u['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mzl$o) {}, 'fail': function (clpmzo) {} }), s_eh8['window']['wx']['onKeyboardConfirm'](function (p4xm) {
        var j_ewk = p4xm ? p4xm['value'] : '';b$2u['text'] = j_ewk, b$2u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), s_eh8['window']['wx']['onKeyboardInput'](function (k_ne8) {
        var o7cmzl = k_ne8 ? k_ne8['value'] : '';if (!b$2u['multiline']) {
          if (o7cmzl['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }b$2u['text'] = o7cmzl, b$2u['event']('input');
      });
    }, q5v2u9['inputEnter'] = function () {
      $u2['inputElement']['target']['focus'] = ![];
    }, q5v2u9['wxinputblur'] = function () {
      q5v2u9['hideKeyboard']();
    }, q5v2u9['hideKeyboard'] = function () {
      s_eh8['window']['wx']['offKeyboardConfirm'](), s_eh8['window']['wx']['offKeyboardInput'](), s_eh8['window']['wx']['hideKeyboard']({ 'success': function (lo$z7m) {
          console['log']('隐藏键盘');
        }, 'fail': function (_8ekh) {
          console['log']('隐藏键盘出错:' + (_8ekh ? _8ekh['errMsg'] : ''));
        } });
    }, q5v2u9;
  }(),
      yxgi4 = function () {
    function mczo7l() {}pig4(mczo7l, 'laya.wx.mini.MiniLoader');var $b92 = mczo7l['prototype'];return $b92['load'] = function (nj_kwy, hsea0, p4oc, gkynij, f6d5q) {
      p4oc === void 0x0 && (p4oc = !![]), f6d5q === void 0x0 && (f6d5q = ![]);var qdvuf5 = this;qdvuf5['_url'] = nj_kwy;if (nj_kwy['indexOf']('data:image') === 0x0) qdvuf5['_type'] = hsea0 = 'image';else qdvuf5['_type'] = hsea0 || (hsea0 = qdvuf5['getTypeFromUrl'](nj_kwy));qdvuf5['_cache'] = p4oc, qdvuf5['_data'] = null;var fq6du5 = 'ascii';if (nj_kwy['indexOf']('.fnt') != -0x1) fq6du5 = 'utf8';else hsea0 == 'arraybuffer' && (fq6du5 = '');;var q95u = mlo7$['getFileExtension'](nj_kwy);if (mczo7l['_fileTypeArr']['indexOf'](q95u) != -0x1) s_eh8['EnvConfig']['load']['call'](this, nj_kwy, hsea0, p4oc, gkynij, f6d5q);else {
        if (!ixpmc['getFileInfo'](nj_kwy)) {
          if (nj_kwy['indexOf']('layaNativeDir/') != -0x1) {
            if (s_eh8['isZiYu']) {
              var ygp = ixpmc['ziyuFileData'][nj_kwy];qdvuf5['onLoaded'](ygp);return;
            } else {
              cosnole['log']('read read'), ixpmc['read'](nj_kwy, fq6du5, new nkwj_y(mczo7l, mczo7l['onReadNativeCallBack'], [fq6du5, nj_kwy, hsea0, p4oc, gkynij, f6d5q, qdvuf5]));return;
            }
          }if (d6tr['rootPath'] == '') var rfdt3 = nj_kwy;else rfdt3 = nj_kwy['split'](d6tr['rootPath'])[0x0];nj_kwy['indexOf']('http://') != -0x1 || nj_kwy['indexOf']('https://') != -0x1 ? s_eh8['EnvConfig']['load']['call'](qdvuf5, nj_kwy, hsea0, p4oc, gkynij, f6d5q) : ixpmc['readFile'](rfdt3, fq6du5, new nkwj_y(mczo7l, mczo7l['onReadNativeCallBack'], [fq6du5, nj_kwy, hsea0, p4oc, gkynij, f6d5q, qdvuf5]), nj_kwy);
        } else s_eh8['EnvConfig']['load']['call'](this, nj_kwy, hsea0, p4oc, gkynij, f6d5q);
      }
    }, $b92['resMgrLoad'] = function (v92b7$, yjng4i, mocxzp, r63d, $vbu, b7$zo, mo7cz) {
      mocxzp === void 0x0 && (mocxzp = 0x0), r63d === void 0x0 && (r63d = ![]), $vbu === void 0x0 && ($vbu = ![]), b7$zo === void 0x0 && (b7$zo = 0x0), mo7cz === void 0x0 && (mo7cz = 0x3), v92b7$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', v92b7$), s_eh8['EnvConfig']['resMgrLoad'](v92b7$, (z7b$9l, kg_, se08ah) => {
        mczo7l['prototype']['resMgrLoadCallBack'](z7b$9l, kg_, se08ah, yjng4i);
      }, mocxzp, r63d, $vbu, b7$zo, mo7cz);
    }, $b92['resMgrLoadCallBack'] = function (kwyjn, ywjnk, xyig4p, _ykgnj) {
      console['log']('buff:::', kwyjn, xyig4p, ixpmc['fileNativeDir'] + '///' + ixpmc['fileListName']), _ykgnj(kwyjn, ywjnk, xyig4p);
    }, $b92['clearRes'] = function (q2v, r5qfd6) {
      r5qfd6 === void 0x0 && (r5qfd6 = ![]);var coxzm = this;coxzm['clearRes'](q2v, r5qfd6);var vdfqu5 = ixpmc['getFileInfo'](q2v);if (vdfqu5 && (q2v['indexOf']('http://') != -0x1 || q2v['indexOf']('https://') != -0x1)) {
        var q6ud = vdfqu5['md5'],
            zmplo = ixpmc['getFileNativePath'](q6ud);ixpmc['remove'](zmplo);
      }
    }, mczo7l['onReadNativeCallBack'] = function (dr, xzpcm, q5r6d, tqrdf6, jn4i, qudf, v5b2, vqf5u, he0a) {
      tqrdf6 === void 0x0 && (tqrdf6 = !![]), qudf === void 0x0 && (qudf = ![]), vqf5u === void 0x0 && (vqf5u = 0x0);if (!vqf5u) {
        var ozlc7;if (q5r6d == 'json' || q5r6d == 'atlas') ozlc7 = s_eh8['getJson'](he0a['data']);else q5r6d == 'xml' ? ozlc7 = mlo7$['parseXMLFromString'](he0a['data']) : ozlc7 = he0a['data'];v5b2['onLoaded'](ozlc7), !s_eh8['isZiYu'] && s_eh8['isPosMsgYu'] && q5r6d != 'arraybuffer' && wx['postMessage']({ 'url': xzpcm, 'data': ozlc7, 'isLoad': !![] });
      } else vqf5u == 0x1 && s_eh8['EnvConfig']['load']['call'](v5b2, xzpcm, q5r6d, tqrdf6, jn4i, qudf);
    }, e8h_s(mczo7l, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), mczo7l;
  }(),
      ixpmc = function (zxpcom) {
    function moc7() {
      moc7['__super']['call'](this);;
    }return pig4(moc7, 'laya.wx.mini.MiniFileMgr', zxpcom), moc7['isLoadFile'] = function (udf5) {
      return moc7['_fileTypeArr']['indexOf'](udf5) != -0x1 ? !![] : ![];
    }, moc7['getFileInfo'] = function (n8_we) {
      var xpy4gi = n8_we['split']('?')[0x0],
          lzocm = moc7['filesListObj'][xpy4gi];if (lzocm == null) return null;else return lzocm;return null;
    }, moc7['onFileUpdate'] = function (iyjkn, mopzl) {
      var fud56 = iyjkn['split']('/'),
          eas80 = fud56[fud56['length'] - 0x1],
          e8ah = moc7['getFileInfo'](mopzl);if (e8ah == null) moc7['onSaveFile'](mopzl, eas80);else {
        if (e8ah['readyUrl'] != mopzl) moc7['remove'](eas80, mopzl);
      }
    }, moc7['exits'] = function (heas08, new_8) {
      var jwnke_ = moc7['getFileNativePath'](heas08);moc7['fs']['getFileInfo']({ 'filePath': jwnke_, 'success': function (zm7loc) {
          new_8 != null && new_8['runWith']([0x0, zm7loc]);
        }, 'fail': function (kh8w) {
          new_8 != null && new_8['runWith']([0x1, kh8w]);
        } });
    }, moc7['read'] = function ($v2ub, r3tfd6, xpicg, nygjk) {
      r3tfd6 === void 0x0 && (r3tfd6 = 'ascill'), nygjk === void 0x0 && (nygjk = '');var f3t1r;nygjk != '' ? f3t1r = moc7['getFileNativePath']($v2ub) : f3t1r = $v2ub, moc7['fs']['readFile']({ 'filePath': f3t1r, 'encoding': r3tfd6, 'success': function ($2l9b) {
          xpicg != null && xpicg['runWith']([0x0, $2l9b]);
        }, 'fail': function (d65ufq) {
          if (d65ufq && nygjk != '') moc7['down'](nygjk, r3tfd6, xpicg, nygjk);else xpicg != null && xpicg['runWith']([0x1]);
        } });
    }, moc7['readNativeFile'] = function (l7ocmz, w_8khe) {
      moc7['fs']['readFile']({ 'filePath': l7ocmz, 'encoding': '', 'success': function (kw_e) {
          w_8khe != null && w_8khe['runWith']([0x0]);
        }, 'fail': function (v25q9) {
          w_8khe != null && w_8khe['runWith']([0x1]);
        } });
    }, moc7['down'] = function (esh8a, oxmp4, zl7$m, wshe8a) {
      oxmp4 === void 0x0 && (oxmp4 = 'ascill'), wshe8a === void 0x0 && (wshe8a = '');var as80he = moc7['getFileNativePath'](wshe8a),
          mxi4cp = moc7['wxdown']({ 'url': esh8a, 'filePath': as80he, 'success': function (k8) {
          if (k8['statusCode'] === 0xc8) moc7['readFile'](k8['filePath'], oxmp4, zl7$m, wshe8a);
        }, 'fail': function (h8awes) {
          zl7$m != null && zl7$m['runWith']([0x1, h8awes]);
        } });mxi4cp['onProgressUpdate'](function (l7zmc) {
        zl7$m != null && zl7$m['runWith']([0x2, l7zmc['progress']]);
      });
    }, moc7['readFile'] = function (cmlpz, y_wkn, mcz7lo, nwy_j) {
      y_wkn === void 0x0 && (y_wkn = 'ascill'), nwy_j === void 0x0 && (nwy_j = ''), moc7['fs']['readFile']({ 'filePath': cmlpz, 'encoding': y_wkn, 'success': function (he8swa) {
          if (cmlpz['indexOf']('http://') != -0x1 || cmlpz['indexOf']('https://') != -0x1) moc7['onFileUpdate'](cmlpz, nwy_j);mcz7lo != null && mcz7lo['runWith']([0x0, he8swa]);
        }, 'fail': function (om7$l) {
          if (om7$l) mcz7lo != null && mcz7lo['runWith']([0x1, om7$l]);
        } });
    }, moc7['downImg'] = function (r6tfdq, ftdrq, fqrdt) {
      fqrdt === void 0x0 && (fqrdt = '');var lom7cz = moc7['wxdown']({ 'url': r6tfdq, 'success': function (olzpmc) {
          olzpmc['statusCode'] === 0xc8 && moc7['copyFile'](olzpmc['tempFilePath'], fqrdt, ftdrq);
        }, 'fail': function (z79bl) {
          ftdrq != null && ftdrq['runWith']([0x1, z79bl]);
        } });
    }, moc7['copyFile'] = function (l$ozm7, s_hw, omzpx) {
      var mcozl7 = l$ozm7['split']('/'),
          xig4yp = mcozl7[mcozl7['length'] - 0x1],
          tfd6q = s_hw['split']('?')[0x0],
          xygp4 = moc7['getFileInfo'](s_hw),
          ub52 = moc7['getFileNativePath'](xig4yp);moc7['fs']['copyFile']({ 'srcPath': l$ozm7, 'destPath': ub52, 'success': function (zp) {
          if (!xygp4) moc7['onSaveFile'](s_hw, xig4yp), omzpx != null && omzpx['runWith']([0x0]);else {
            if (xygp4['readyUrl'] != s_hw) moc7['remove'](xig4yp, s_hw, omzpx);
          }
        }, 'fail': function (b2u9v) {
          omzpx != null && omzpx['runWith']([0x1, b2u9v]);
        } });
    }, moc7['getFileNativePath'] = function (wekn_) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wekn_;
    }, moc7['remove'] = function (jnkygi, n_wk8e, mlpc) {
      n_wk8e === void 0x0 && (n_wk8e = '');var o7$mz = moc7['getFileInfo'](n_wk8e),
          b72$ = moc7['getFileNativePath'](o7$mz['md5']);gjy_kn['loader']['clearRes'](o7$mz['readyUrl']), moc7['fs']['unlink']({ 'filePath': b72$, 'success': function (dqft6) {
          if (n_wk8e != '') moc7['onSaveFile'](n_wk8e, jnkygi);mlpc != null && mlpc['runWith']([0x0]);
        }, 'fail': function (gnjyik) {} });
    }, moc7['onSaveFile'] = function (yj_nkw, mxzop) {
      var wny = yj_nkw['split']('?')[0x0];moc7['filesListObj'][wny] = { 'md5': mxzop, 'readyUrl': yj_nkw }, moc7['fs']['writeFile']({ 'filePath': moc7['fileNativeDir'] + '/' + moc7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](moc7['filesListObj']), 'success': function (iy4jng) {
          console['log']('写入测试测试成功：', iy4jng);
        }, 'fail': function (u59bv) {
          console['log']('写入测试测试失败：', u59bv);
        } });
    }, moc7['existDir'] = function (iy4jxg, hes8a0) {
      moc7['fs']['mkdir']({ 'dirPath': iy4jxg, 'success': function (yjixg4) {
          hes8a0 != null && hes8a0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (mclo7z) {
          if (mclo7z['errMsg']['indexOf']('file already exists') != -0x1) moc7['readSync'](moc7['fileListName'], 'utf8', hes8a0);else hes8a0 != null && hes8a0['runWith']([0x1, mclo7z]);
        } });
    }, moc7['readSync'] = function ($lbz7, y_jwn, u56, $97lz) {
      y_jwn === void 0x0 && (y_jwn = 'ascill'), $97lz === void 0x0 && ($97lz = '');var ah8 = moc7['getFileNativePath']($lbz7),
          uf6d5;try {
        uf6d5 = moc7['fs']['readFileSync'](ah8), u56 != null && u56['runWith']([0x0, { 'data': uf6d5 }]);
      } catch (i4gxj) {
        u56 != null && u56['runWith']([0x1]);
      }
    }, moc7['readCache'] = function () {}, moc7['writeCache'] = function (ozmcx) {
      var n_ejw = readyUrl['split']('?')[0x0];moc7['filesListObj'][n_ejw] = { 'md5': md5Name, 'readyUrl': readyUrl }, moc7['fs']['writeFile']({ 'filePath': moc7['fileNativeDir'] + '/' + moc7['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](moc7['filesListObj']), 'success': function (mic4x) {}, 'fail': function (qu65) {} });
    }, moc7['setNativeFileDir'] = function (mixpc4) {
      moc7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mixpc4;
    }, moc7['filesListObj'] = {}, moc7['fileNativeDir'] = null, moc7['fileListName'] = 'layaairfiles.txt', moc7['ziyuFileData'] = {}, e8h_s(moc7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), moc7;
  }(qd56u),
      fud = function (ew_kn8) {
    function p4moc() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], p4moc['__super']['call'](this), this['_sound'] = p4moc['_createSound'](), this['_chanell'] = new ftq6d(this['_sound']);
    }pig4(p4moc, 'laya.wx.mini.MiniSound', ew_kn8);var f6td = p4moc['prototype'];return f6td['load'] = function (n_jgyk) {
      var $v92 = this;n_jgyk = d6tr['formatURL'](n_jgyk), this['url'] = n_jgyk;if (p4moc['_audioCache'][n_jgyk]) {
        this['event']('complete');return;
      }function vdqf5() {
        if (p4moc['_null'] != undefined) $v92['_sound']['onCanplay'](p4moc['_null']), $v92['_sound']['onError'](p4moc['_null']);else try {
          $v92['_sound']['onCanplay'](null), $v92['_sound']['onError'](null), p4moc['_null'] = null;
        } catch (i4ygn) {
          console['warn']('[wxmini] _clearSound:' + i4ygn), $v92['_sound']['onCanplay'](e_hs), $v92['_sound']['onError'](e_hs), p4moc['_null'] = e_hs;
        }
      }function wken_j() {
        mi4c['loaded'] = !![], mi4c['event']('complete'), p4moc['_audioCache'][mi4c['url']] = mi4c;
      }function _jwyn($b7zlo) {
        console['error']('errCode=' + $b7zlo['errCode'] + '  errMsg=' + $b7zlo['errMsg']), mi4c['event']('error');
      }function e_hs() {}this['_sound']['onCanplay'](wken_j), this['_sound']['onError'](_jwyn), this['_sound']['src'] = n_jgyk;var mi4c = this;
    }, f6td['play'] = function (lz97$b, bz$97l) {
      lz97$b === void 0x0 && (lz97$b = 0x0), bz$97l === void 0x0 && (bz$97l = 0x0);var eh08, uv52qd;if (this['url'] == yni4j['_tMusic']) {
        if (!p4moc['_musicAudio']) p4moc['_musicAudio'] = this['_sound'];eh08 = p4moc['_musicAudio'], uv52qd = this['_chanell'];
      } else eh08 = this['_sound'], uv52qd = this['_chanell'];return eh08['src'] = this['url'], eh08['startTime'] = 0x0, uv52qd['isStopped'] && (uv52qd['url'] = this['url'], uv52qd['loops'] = bz$97l, uv52qd['startTime'] = lz97$b, uv52qd['play'](), yni4j['addChannel'](uv52qd)), uv52qd;
    }, f6td['dispose'] = function () {
      var rt6df3 = p4moc['_audioCache'][this['url']];rt6df3 && (rt6df3['src'] = '', delete p4moc['_audioCache'][this['url']]);
    }, f36rt1(0x0, f6td, 'duration', function () {
      return this['_sound']['duration'];
    }), p4moc['_createSound'] = function () {
      p4moc['_id']++;var b7loz = s_eh8['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return b7loz;
    }, p4moc['_musicAudio'] = null, p4moc['_id'] = 0x0, p4moc['_audioCache'] = {}, p4moc['_null'] = undefined, p4moc;
  }(qd56u),
      ftq6d = function (e8_nw) {
    function w_enk8(mpolc) {
      this['_audio'] = null, this['_onEnd'] = null, w_enk8['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = mpolc, this['_onEnd'] = mlo7$['bind'](this['__onEnd'], this), mpolc['onEnded'](this['_onEnd']);
    }pig4(w_enk8, 'laya.wx.mini.MiniSoundChannel', e8_nw);var fqr6td = w_enk8['prototype'];return fqr6td['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gjy_kn['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, fqr6td['__onNull'] = function () {}, fqr6td['play'] = function () {
      this['isStopped'] = ![], yni4j['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, fqr6td['stop'] = function () {
      this['isStopped'] = !![], yni4j['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, fqr6td['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, fqr6td['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], yni4j['addChannel'](this), this['_audio']['play']();
    }, f36rt1(0x0, fqr6td, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), f36rt1(0x0, fqr6td, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), f36rt1(0x0, fqr6td, 'volume', function () {
      return 0x1;
    }, function (l$79) {}), w_enk8['_null'] = undefined, w_enk8;
  }(gnjy4i),
      $mz7lo = function () {
    function b$7lz9() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = s_eh8['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }pig4(b$7lz9, 'laya.wx.mini.MiniVideo');var xi4j = b$7lz9['prototype'];return xi4j['on'] = function ($l7b29, q92u5v, uv5dq2) {
      if ($l7b29 == 'loadedmetadata') this['onPlayFunc'] = uv5dq2['bind'](q92u5v), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else $l7b29 == 'ended' && (this['onEndedFunC'] = uv5dq2['bind'](q92u5v), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, xi4j['onTimeUpdateFunc'] = function (mo4pcx) {
      this['position'] = mo4pcx['position'], this['_duration'] = mo4pcx['duration'];
    }, xi4j['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, xi4j['onended'] = function (opmc4x, gyxip4) {
      this['onEndedFunC'] = gyxip4['bind'](opmc4x), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, xi4j['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, xi4j['off'] = function (ikngj, q5ud, h_8sw) {
      if (ikngj == 'loadedmetadata') this['onPlayFunc'] = h_8sw['bind'](q5ud), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ikngj == 'ended' && (this['onEndedFunC'] = h_8sw['bind'](q5ud), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, xi4j['load'] = function (e8kn_w) {
      if (!this['videoElement']) return;this['videoElement']['src'] = e8kn_w;
    }, xi4j['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, xi4j['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, xi4j['size'] = function (zmol7, qfdrt6) {
      if (!this['videoElement']) return;this['videoElement']['width'] = zmol7, this['videoElement']['height'] = qfdrt6;
    }, xi4j['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, xi4j['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, f36rt1(0x0, xi4j, 'duration', function () {
      return this['_duration'];
    }), f36rt1(0x0, xi4j, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (qr56df) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = qr56df;
    }), f36rt1(0x0, xi4j, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), f36rt1(0x0, xi4j, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), f36rt1(0x0, xi4j, 'ended', function () {
      return this['videoend'];
    }), f36rt1(0x0, xi4j, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (xyij4g) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = xyij4g;
    }), f36rt1(0x0, xi4j, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (impc4) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = impc4;
    }), f36rt1(0x0, xi4j, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (a8) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = a8;
    }), f36rt1(0x0, xi4j, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), f36rt1(0x0, xi4j, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (qtdr6) {
      if (!this['videoElement']) return;this['videoElement']['x'] = qtdr6;
    }), f36rt1(0x0, xi4j, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (pyxi) {
      if (!this['videoElement']) return;this['videoElement']['y'] = pyxi;
    }), f36rt1(0x0, xi4j, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), f36rt1(0x0, xi4j, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (c7olmz) {
      if (!this['videoElement']) return;this['videoElement']['src'] = c7olmz;
    }), f36rt1(0x0, xi4j, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (tdrq6f) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = tdrq6f;
    }), f36rt1(0x0, xi4j, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (s0e8ha) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = s0e8ha;
    }), b$7lz9;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gxp in Laya) {
    var dvq2u = Laya[gxp];dvq2u && dvq2u['__isclass'] && (exports[gxp] = dvq2u);
  }
});