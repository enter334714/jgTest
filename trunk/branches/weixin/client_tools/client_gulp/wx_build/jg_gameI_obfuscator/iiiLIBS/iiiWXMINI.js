var Q = wx.$I;
(function (window, document, zlgyo0) {
  var irv9m = zlgyo0['un'],
      bj6a = zlgyo0['uns'],
      v9imt = zlgyo0['static'],
      k2useq = zlgyo0['class'],
      ogly0 = zlgyo0['getset'],
      f_ja6 = zlgyo0['__newvec'],
      kebsu7 = laya['utils']['Browser'],
      zlr0i = laya['events']['Event'],
      lz0ir = laya['events']['EventDispatcher'],
      suq2 = laya['resource']['HTMLImage'],
      ja8367 = laya['utils']['Handler'],
      pmv9c1 = laya['display']['Input'],
      pcf_8j = laya['net']['Loader'],
      b6a = laya['maths']['Matrix'],
      m1_p = laya['renders']['Render'],
      kn5w2q = laya['utils']['RunDriver'],
      $r9tvi = laya['media']['Sound'],
      p_fcj = laya['media']['SoundChannel'],
      pj_f8 = laya['media']['SoundManager'],
      cvm1p = laya['display']['Stage'],
      gdyz = laya['net']['URL'],
      lt9$r = laya['utils']['Utils'],
      igl = function () {
    function v91cp() {}return k2useq(v91cp, 'laya.wx.mini.MiniAdpter'), v91cp['getJson'] = function (kqs2) {
      return JSON['parse'](kqs2);
    }, v91cp['init'] = function (fja8, hw52n4) {
      fja8 === void 0x0 && (fja8 = ![]), hw52n4 === void 0x0 && (hw52n4 = ![]);if (v91cp['_inited']) return;v91cp['window'] = window;if (v91cp['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;v91cp['_inited'] = !![], v91cp['isZiYu'] = hw52n4, v91cp['isPosMsgYu'] = fja8, v91cp['EnvConfig'] = {}, !v91cp['isZiYu'] && (hnx4w5['setNativeFileDir']('/layaairGame'), hnx4w5['existDir'](hnx4w5['fileNativeDir'], ja8367['create'](v91cp, v91cp['onMkdirCallBack']))), v91cp['window']['focus'] = function () {}, zlgyo0['getUrlPath'] = function () {}, v91cp['window']['logtime'] = function (cmpfv1) {}, v91cp['window']['alertTimeLog'] = function (fc_pj) {}, v91cp['window']['resetShareInfo'] = function () {}, v91cp['window']['CanvasRenderingContext2D'] = function () {}, v91cp['window']['CanvasRenderingContext2D']['prototype'] = v91cp['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], v91cp['window']['document']['body']['appendChild'] = function () {}, v91cp['EnvConfig']['pixelRatioInt'] = 0x0, kn5w2q['getPixelRatio'] = v91cp['pixelRatio'], v91cp['_preCreateElement'] = kebsu7['createElement'], kebsu7['createElement'] = v91cp['createElement'], kn5w2q['createShaderCondition'] = v91cp['createShaderCondition'], lt9$r['parseXMLFromString'] = v91cp['parseXMLFromString'], pmv9c1['_createInputElement'] = z0ygol['_createInputElement'], v91cp['EnvConfig']['load'] = pcf_8j['prototype']['load'], pcf_8j['prototype']['load'] = b7suk['prototype']['load'], v91cp['isZiYu'] && fja8 && wx['onMessage'](function (cf_18) {
        cf_18['isLoad'] && (hnx4w5['ziyuFileData'][cf_18['url']] = cf_18['data']);
      });
    }, v91cp['onMkdirCallBack'] = function (sbe37, mcv91) {
      if (!sbe37) hnx4w5['filesListObj'] = JSON['parse'](mcv91['data']);
    }, v91cp['pixelRatio'] = function () {
      if (!v91cp['EnvConfig']['pixelRatioInt']) try {
        var l0og$ = wx['getSystemInfoSync']();return v91cp['EnvConfig']['pixelRatioInt'] = l0og$['pixelRatio'], l0og$ = l0og$, l0og$['pixelRatio'];
      } catch (n2kqus) {}return v91cp['EnvConfig']['pixelRatioInt'];
    }, v91cp['createElement'] = function (rlit) {
      if (rlit == 'canvas') {
        var i$lr0z;return v91cp['idx'] == 0x1 ? v91cp['isZiYu'] ? (i$lr0z = sharedCanvas, i$lr0z['style'] = {}) : i$lr0z = window['canvas'] : i$lr0z = window['wx']['createCanvas'](), v91cp['idx']++, i$lr0z;
      } else {
        if (rlit == 'textarea' || rlit == 'input') return v91cp['onCreateInput'](rlit);else {
          if (rlit == 'div') {
            var _fa8j = v91cp['_preCreateElement'](rlit);return _fa8j['contains'] = function (pc1f8) {
              return null;
            }, _fa8j['removeChild'] = function (f8_cp1) {}, _fa8j;
          } else return v91cp['_preCreateElement'](rlit);
        }
      }
    }, v91cp['onCreateInput'] = function (tlzr$i) {
      var a6f = v91cp['_preCreateElement'](tlzr$i);return a6f['focus'] = z0ygol['wxinputFocus'], a6f['blur'] = z0ygol['wxinputblur'], a6f['style'] = {}, a6f['value'] = 0x0, a6f['parentElement'] = {}, a6f['placeholder'] = {}, a6f['type'] = {}, a6f['setColor'] = function (eskuq) {}, a6f['setType'] = function (gzo0l$) {}, a6f['setFontFace'] = function (bkusqe) {}, a6f['addEventListener'] = function (qsk2e) {}, a6f['contains'] = function (li$9) {
        return null;
      }, a6f['removeChild'] = function (ri$9tv) {}, a6f;
    }, v91cp['createShaderCondition'] = function (_pc1f) {
      var zo0y = this,
          fp1mvc = function () {
        var su2qek = _pc1f;return zo0y[_pc1f['replace']('this.', '')];
      };return fp1mvc;
    }, v91cp['EnvConfig'] = null, v91cp['window'] = null, v91cp['_preCreateElement'] = null, v91cp['_inited'] = ![], v91cp['wxRequest'] = null, v91cp['systemInfo'] = null, v91cp['version'] = '0.0.1', v91cp['isZiYu'] = ![], v91cp['isPosMsgYu'] = ![], v91cp['parseXMLFromString'] = function ($i0zgl) {
      var bse3u7, n5x4;$i0zgl = $i0zgl['replace'](/>\s+</g, '><');try {
        bse3u7 = new window['Parser']['DOMParser']()['parseFromString']($i0zgl, 'text/xml');
      } catch (j_8fp) {
        throw '需要引入xml解析库文件';
      }return bse3u7;
    }, v91cp['idx'] = 0x1, v91cp;
  }(),
      f_1c = function () {
    function $9lrit() {}k2useq($9lrit, 'laya.wx.mini.MiniImage');var lgy0o = $9lrit['prototype'];return lgy0o['_loadImage'] = function (_386j) {
      var q5kw = this,
          u2n5qk = ![];_386j['indexOf']('layaNativeDir/') == -0x1 && (u2n5qk = !![], _386j = gdyz['formatURL'](_386j));if (!hnx4w5['getFileInfo'](_386j)) {
        if (_386j['indexOf']('http://') != -0x1 || _386j['indexOf']('https://') != -0x1) hnx4w5['downImg'](_386j, new ja8367($9lrit, $9lrit['onDownImgCallBack'], [_386j, q5kw]), _386j);else $9lrit['onCreateImage'](_386j, q5kw, !![]);
      } else $9lrit['onCreateImage'](_386j, q5kw, !u2n5qk);
    }, $9lrit['onDownImgCallBack'] = function (oglzy0, rli$zt, ue73s) {
      if (!ue73s) $9lrit['onCreateImage'](oglzy0, rli$zt);else rli$zt['onError'](null);
    }, $9lrit['onCreateImage'] = function (ja378, qnw2, ebu7) {
      ebu7 === void 0x0 && (ebu7 = ![]);var vtr9i$;if (!ebu7) {
        var t91mvr = hnx4w5['getFileInfo'](ja378),
            i$zg0 = t91mvr['md5'];vtr9i$ = hnx4w5['getFileNativePath'](i$zg0);
      } else vtr9i$ = ja378;if (qnw2['imgCache'] == null) qnw2['imgCache'] = {};var afp8j_;function faj6_() {
        afp8j_['onload'] = null, afp8j_['onerror'] = null, delete qnw2['imgCache'][ja378];
      };var j683_ = function () {
        faj6_(), qnw2['onLoaded'](afp8j_);
      },
          golz$0 = function () {
        faj6_(), qnw2['event']('error', 'Load image failed');
      };qnw2['_type'] == 'nativeimage' ? (afp8j_ = new kebsu7['window']['Image'](), afp8j_['crossOrigin'] = '', afp8j_['onload'] = j683_, afp8j_['onerror'] = golz$0, afp8j_['src'] = vtr9i$, qnw2['imgCache'][ja378] = afp8j_) : new suq2['create'](vtr9i$, { 'onload': j683_, 'onerror': golz$0, 'onCreate': function (vrm1) {
          afp8j_ = vrm1, qnw2['imgCache'][ja378] = vrm1;
        } });
    }, $9lrit;
  }(),
      z0ygol = function () {
    function c9tmv1() {}return k2useq(c9tmv1, 'laya.wx.mini.MiniInput'), c9tmv1['_createInputElement'] = function () {
      pmv9c1['_initInput'](pmv9c1['area'] = kebsu7['createElement']('textarea')), pmv9c1['_initInput'](pmv9c1['input'] = kebsu7['createElement']('input')), pmv9c1['inputContainer'] = kebsu7['createElement']('div'), pmv9c1['inputContainer']['style']['position'] = 'absolute', pmv9c1['inputContainer']['style']['zIndex'] = 0x186a0, kebsu7['container']['appendChild'](pmv9c1['inputContainer']), pmv9c1['inputContainer']['setPos'] = function (f1mcvp, v1cm9p) {
        pmv9c1['inputContainer']['style']['left'] = f1mcvp + 'px', pmv9c1['inputContainer']['style']['top'] = v1cm9p + 'px';
      }, zlgyo0['stage']['on']('resize', null, c9tmv1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zlo$0g) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), pj_f8['_soundClass'] = bs37eu, pj_f8['_musicClass'] = bs37eu;
    }, c9tmv1['_onStageResize'] = function () {
      var _fpm1c = zlgyo0['stage']['_canvasTransform']['identity']();_fpm1c['scale'](kebsu7['width'] / m1_p['canvas']['width'] / kn5w2q['getPixelRatio'](), kebsu7['height'] / m1_p['canvas']['height'] / kn5w2q['getPixelRatio']());
    }, c9tmv1['wxinputFocus'] = function (n2w4q5) {
      var a8763j = pmv9c1['inputElement']['target'];if (a8763j && !a8763j['editable']) return;igl['window']['wx']['offKeyboardConfirm'](), igl['window']['wx']['offKeyboardInput'](), igl['window']['wx']['showKeyboard']({ 'defaultValue': a8763j['text'], 'maxLength': a8763j['maxChars'], 'multiple': a8763j['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (unqks) {}, 'fail': function (zog0ly) {} }), igl['window']['wx']['onKeyboardConfirm'](function (hw5nx) {
        var g0dyzo = hw5nx ? hw5nx['value'] : '';a8763j['text'] = g0dyzo, a8763j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), igl['window']['wx']['onKeyboardInput'](function (vf1pm) {
        var a68j73 = vf1pm ? vf1pm['value'] : '';if (!a8763j['multiline']) {
          if (a68j73['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }a8763j['text'] = a68j73, a8763j['event']('input');
      });
    }, c9tmv1['inputEnter'] = function () {
      pmv9c1['inputElement']['target']['focus'] = ![];
    }, c9tmv1['wxinputblur'] = function () {
      c9tmv1['hideKeyboard']();
    }, c9tmv1['hideKeyboard'] = function () {
      igl['window']['wx']['offKeyboardConfirm'](), igl['window']['wx']['offKeyboardInput'](), igl['window']['wx']['hideKeyboard']({ 'success': function (eus7bk) {
          console['log']('隐藏键盘');
        }, 'fail': function (fvc1) {
          console['log']('隐藏键盘出错:' + (fvc1 ? fvc1['errMsg'] : ''));
        } });
    }, c9tmv1;
  }(),
      b7suk = function () {
    function li0z$r() {}k2useq(li0z$r, 'laya.wx.mini.MiniLoader');var w4hx5n = li0z$r['prototype'];return w4hx5n['load'] = function (ig$0l, s367, nq524w, gydz0, pf_cj8) {
      nq524w === void 0x0 && (nq524w = !![]), pf_cj8 === void 0x0 && (pf_cj8 = ![]);var z$ilrt = this;z$ilrt['_url'] = ig$0l;if (ig$0l['indexOf']('data:image') === 0x0) z$ilrt['_type'] = s367 = 'image';else z$ilrt['_type'] = s367 || (s367 = z$ilrt['getTypeFromUrl'](ig$0l));z$ilrt['_cache'] = nq524w, z$ilrt['_data'] = null;var wq2n = 'ascii';if (ig$0l['indexOf']('.fnt') != -0x1) wq2n = 'utf8';else s367 == 'arraybuffer' && (wq2n = '');;var b7kue = lt9$r['getFileExtension'](ig$0l);if (li0z$r['_fileTypeArr']['indexOf'](b7kue) != -0x1) igl['EnvConfig']['load']['call'](this, ig$0l, s367, nq524w, gydz0, pf_cj8);else {
        if (!hnx4w5['getFileInfo'](ig$0l)) {
          if (ig$0l['indexOf']('layaNativeDir/') != -0x1) {
            if (igl['isZiYu']) {
              var t1vcm9 = hnx4w5['ziyuFileData'][ig$0l];z$ilrt['onLoaded'](t1vcm9);return;
            } else {
              cosnole['log']('read read'), hnx4w5['read'](ig$0l, wq2n, new ja8367(li0z$r, li0z$r['onReadNativeCallBack'], [wq2n, ig$0l, s367, nq524w, gydz0, pf_cj8, z$ilrt]));return;
            }
          }if (gdyz['rootPath'] == '') var b3j6a = ig$0l;else b3j6a = ig$0l['split'](gdyz['rootPath'])[0x0];ig$0l['indexOf']('http://') != -0x1 || ig$0l['indexOf']('https://') != -0x1 ? igl['EnvConfig']['load']['call'](z$ilrt, ig$0l, s367, nq524w, gydz0, pf_cj8) : hnx4w5['readFile'](b3j6a, wq2n, new ja8367(li0z$r, li0z$r['onReadNativeCallBack'], [wq2n, ig$0l, s367, nq524w, gydz0, pf_cj8, z$ilrt]), ig$0l);
        } else igl['EnvConfig']['load']['call'](this, ig$0l, s367, nq524w, gydz0, pf_cj8);
      }
    }, w4hx5n['resMgrLoad'] = function (mcp9, $lizr0, bqk, l$i0r, hwn25, gz$l0o, v9$ti) {
      bqk === void 0x0 && (bqk = 0x0), l$i0r === void 0x0 && (l$i0r = ![]), hwn25 === void 0x0 && (hwn25 = ![]), gz$l0o === void 0x0 && (gz$l0o = 0x0), v9$ti === void 0x0 && (v9$ti = 0x3), mcp9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mcp9), igl['EnvConfig']['resMgrLoad'](mcp9, (zlg0i, _ja386, mtc19v) => {
        li0z$r['prototype']['resMgrLoadCallBack'](zlg0i, _ja386, mtc19v, $lizr0);
      }, bqk, l$i0r, hwn25, gz$l0o, v9$ti);
    }, w4hx5n['resMgrLoadCallBack'] = function (f8cp_j, iv$9tr, goz$0, $tlri9) {
      console['log']('buff:::', f8cp_j, goz$0, hnx4w5['fileNativeDir'] + '///' + hnx4w5['fileListName']), $tlri9(f8cp_j, iv$9tr, goz$0);
    }, w4hx5n['clearRes'] = function (uske7b, lgzo) {
      lgzo === void 0x0 && (lgzo = ![]);var lr$z0 = this;lr$z0['clearRes'](uske7b, lgzo);var bj63a7 = hnx4w5['getFileInfo'](uske7b);if (bj63a7 && (uske7b['indexOf']('http://') != -0x1 || uske7b['indexOf']('https://') != -0x1)) {
        var pfv1mc = bj63a7['md5'],
            hn4xw5 = hnx4w5['getFileNativePath'](pfv1mc);hnx4w5['remove'](hn4xw5);
      }
    }, li0z$r['onReadNativeCallBack'] = function (s37ue, kuqn2s, whx54, _cfp18, a3876, s36, r$zil0, e7s, p_1c8f) {
      _cfp18 === void 0x0 && (_cfp18 = !![]), s36 === void 0x0 && (s36 = ![]), e7s === void 0x0 && (e7s = 0x0);if (!e7s) {
        var v9imr;if (whx54 == 'json' || whx54 == 'atlas') v9imr = igl['getJson'](p_1c8f['data']);else whx54 == 'xml' ? v9imr = lt9$r['parseXMLFromString'](p_1c8f['data']) : v9imr = p_1c8f['data'];r$zil0['onLoaded'](v9imr), !igl['isZiYu'] && igl['isPosMsgYu'] && whx54 != 'arraybuffer' && wx['postMessage']({ 'url': kuqn2s, 'data': v9imr, 'isLoad': !![] });
      } else e7s == 0x1 && igl['EnvConfig']['load']['call'](r$zil0, kuqn2s, whx54, _cfp18, a3876, s36);
    }, v9imt(li0z$r, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), li0z$r;
  }(),
      hnx4w5 = function (z$tir) {
    function v9cpm() {
      v9cpm['__super']['call'](this);;
    }return k2useq(v9cpm, 'laya.wx.mini.MiniFileMgr', z$tir), v9cpm['isLoadFile'] = function (n5xwh4) {
      return v9cpm['_fileTypeArr']['indexOf'](n5xwh4) != -0x1 ? !![] : ![];
    }, v9cpm['getFileInfo'] = function (m91trv) {
      var uksqn2 = m91trv['split']('?')[0x0],
          p_8fj = v9cpm['filesListObj'][uksqn2];if (p_8fj == null) return null;else return p_8fj;return null;
    }, v9cpm['onFileUpdate'] = function (zir0l, seukqb) {
      var rz0li$ = zir0l['split']('/'),
          rtim9 = rz0li$[rz0li$['length'] - 0x1],
          jaf86_ = v9cpm['getFileInfo'](seukqb);if (jaf86_ == null) v9cpm['onSaveFile'](seukqb, rtim9);else {
        if (jaf86_['readyUrl'] != seukqb) v9cpm['remove'](rtim9, seukqb);
      }
    }, v9cpm['exits'] = function (s3b67e, n42h) {
      var wnh45x = v9cpm['getFileNativePath'](s3b67e);v9cpm['fs']['getFileInfo']({ 'filePath': wnh45x, 'success': function (p1mc_f) {
          n42h != null && n42h['runWith']([0x0, p1mc_f]);
        }, 'fail': function (zli$t) {
          n42h != null && n42h['runWith']([0x1, zli$t]);
        } });
    }, v9cpm['read'] = function (faj8_p, kqn2w, rztl$i, e3u) {
      kqn2w === void 0x0 && (kqn2w = 'ascill'), e3u === void 0x0 && (e3u = '');var gdz;e3u != '' ? gdz = v9cpm['getFileNativePath'](faj8_p) : gdz = faj8_p, v9cpm['fs']['readFile']({ 'filePath': gdz, 'encoding': kqn2w, 'success': function ($ilztr) {
          rztl$i != null && rztl$i['runWith']([0x0, $ilztr]);
        }, 'fail': function (n524w) {
          if (n524w && e3u != '') v9cpm['down'](e3u, kqn2w, rztl$i, e3u);else rztl$i != null && rztl$i['runWith']([0x1]);
        } });
    }, v9cpm['readNativeFile'] = function (u7e3b, ct1v9) {
      v9cpm['fs']['readFile']({ 'filePath': u7e3b, 'encoding': '', 'success': function (uqebk) {
          ct1v9 != null && ct1v9['runWith']([0x0]);
        }, 'fail': function (v$it9r) {
          ct1v9 != null && ct1v9['runWith']([0x1]);
        } });
    }, v9cpm['down'] = function (j_6a3, mvi9, sbku, yd0zog) {
      mvi9 === void 0x0 && (mvi9 = 'ascill'), yd0zog === void 0x0 && (yd0zog = '');var ksqueb = v9cpm['getFileNativePath'](yd0zog),
          zg0y = v9cpm['wxdown']({ 'url': j_6a3, 'filePath': ksqueb, 'success': function (itvr9$) {
          if (itvr9$['statusCode'] === 0xc8) v9cpm['readFile'](itvr9$['filePath'], mvi9, sbku, yd0zog);
        }, 'fail': function (es3u7b) {
          sbku != null && sbku['runWith']([0x1, es3u7b]);
        } });zg0y['onProgressUpdate'](function (g$o0lz) {
        sbku != null && sbku['runWith']([0x2, g$o0lz['progress']]);
      });
    }, v9cpm['readFile'] = function (r$0zl, nwh5, kunq25, vmit9) {
      nwh5 === void 0x0 && (nwh5 = 'ascill'), vmit9 === void 0x0 && (vmit9 = ''), v9cpm['fs']['readFile']({ 'filePath': r$0zl, 'encoding': nwh5, 'success': function (n5kwq2) {
          if (r$0zl['indexOf']('http://') != -0x1 || r$0zl['indexOf']('https://') != -0x1) v9cpm['onFileUpdate'](r$0zl, vmit9);kunq25 != null && kunq25['runWith']([0x0, n5kwq2]);
        }, 'fail': function (a8f_pj) {
          if (a8f_pj) kunq25 != null && kunq25['runWith']([0x1, a8f_pj]);
        } });
    }, v9cpm['downImg'] = function (unskq, p1fcm, fjp_) {
      fjp_ === void 0x0 && (fjp_ = '');var su2qkn = v9cpm['wxdown']({ 'url': unskq, 'success': function ($v9i) {
          $v9i['statusCode'] === 0xc8 && v9cpm['copyFile']($v9i['tempFilePath'], fjp_, p1fcm);
        }, 'fail': function (nqw425) {
          p1fcm != null && p1fcm['runWith']([0x1, nqw425]);
        } });
    }, v9cpm['copyFile'] = function (nx4, g0yzo, n5k2) {
      var i9vr = nx4['split']('/'),
          _cpfm1 = i9vr[i9vr['length'] - 0x1],
          r9l$ = g0yzo['split']('?')[0x0],
          unqsk = v9cpm['getFileInfo'](g0yzo),
          _a8pjf = v9cpm['getFileNativePath'](_cpfm1);v9cpm['fs']['copyFile']({ 'srcPath': nx4, 'destPath': _a8pjf, 'success': function (besuk) {
          if (!unqsk) v9cpm['onSaveFile'](g0yzo, _cpfm1), n5k2 != null && n5k2['runWith']([0x0]);else {
            if (unqsk['readyUrl'] != g0yzo) v9cpm['remove'](_cpfm1, g0yzo, n5k2);
          }
        }, 'fail': function (tc) {
          n5k2 != null && n5k2['runWith']([0x1, tc]);
        } });
    }, v9cpm['getFileNativePath'] = function ($i0lz) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $i0lz;
    }, v9cpm['remove'] = function (izlt$, b3a67e, pf1mcv) {
      b3a67e === void 0x0 && (b3a67e = '');var tirzl = v9cpm['getFileInfo'](b3a67e),
          snk2 = v9cpm['getFileNativePath'](tirzl['md5']);zlgyo0['loader']['clearRes'](tirzl['readyUrl']), v9cpm['fs']['unlink']({ 'filePath': snk2, 'success': function (mt1r9v) {
          if (b3a67e != '') v9cpm['onSaveFile'](b3a67e, izlt$);pf1mcv != null && pf1mcv['runWith']([0x0]);
        }, 'fail': function (ltr$i9) {} });
    }, v9cpm['onSaveFile'] = function (suk2nq, f6_ja8) {
      var eab = suk2nq['split']('?')[0x0];v9cpm['filesListObj'][eab] = { 'md5': f6_ja8, 'readyUrl': suk2nq }, v9cpm['fs']['writeFile']({ 'filePath': v9cpm['fileNativeDir'] + '/' + v9cpm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v9cpm['filesListObj']), 'success': function (vc1mp9) {
          console['log']('写入测试测试成功：', vc1mp9);
        }, 'fail': function (trvi9$) {
          console['log']('写入测试测试失败：', trvi9$);
        } });
    }, v9cpm['existDir'] = function (k2qun5, pvcm19) {
      v9cpm['fs']['mkdir']({ 'dirPath': k2qun5, 'success': function (_8ap) {
          pvcm19 != null && pvcm19['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (pm9v1) {
          if (pm9v1['errMsg']['indexOf']('file already exists') != -0x1) v9cpm['readSync'](v9cpm['fileListName'], 'utf8', pvcm19);else pvcm19 != null && pvcm19['runWith']([0x1, pm9v1]);
        } });
    }, v9cpm['readSync'] = function (su2qn, tl$9ri, af6j_, eba367) {
      tl$9ri === void 0x0 && (tl$9ri = 'ascill'), eba367 === void 0x0 && (eba367 = '');var ajf_8p = v9cpm['getFileNativePath'](su2qn),
          b7ku;try {
        b7ku = v9cpm['fs']['readFileSync'](ajf_8p), af6j_ != null && af6j_['runWith']([0x0, { 'data': b7ku }]);
      } catch (c1tm) {
        af6j_ != null && af6j_['runWith']([0x1]);
      }
    }, v9cpm['readCache'] = function () {}, v9cpm['writeCache'] = function (m_1cfp) {
      var a_68j3 = readyUrl['split']('?')[0x0];v9cpm['filesListObj'][a_68j3] = { 'md5': md5Name, 'readyUrl': readyUrl }, v9cpm['fs']['writeFile']({ 'filePath': v9cpm['fileNativeDir'] + '/' + v9cpm['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](v9cpm['filesListObj']), 'success': function (suqn2k) {}, 'fail': function (cfp_m1) {} });
    }, v9cpm['setNativeFileDir'] = function (ekuqs2) {
      v9cpm['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ekuqs2;
    }, v9cpm['filesListObj'] = {}, v9cpm['fileNativeDir'] = null, v9cpm['fileListName'] = 'layaairfiles.txt', v9cpm['ziyuFileData'] = {}, v9imt(v9cpm, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), v9cpm;
  }(lz0ir),
      bs37eu = function (rlzit$) {
    function nqk2s() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], nqk2s['__super']['call'](this), this['_sound'] = nqk2s['_createSound']();
    }k2useq(nqk2s, 'laya.wx.mini.MiniSound', rlzit$);var zr$0il = nqk2s['prototype'];return zr$0il['load'] = function (cp_jf) {
      var g$0loz = this;cp_jf = gdyz['formatURL'](cp_jf), this['url'] = cp_jf;if (nqk2s['_audioCache'][cp_jf]) {
        this['event']('complete');return;
      }function g$0li() {
        if (nqk2s['_null'] != undefined) g$0loz['_sound']['onCanplay'](nqk2s['_null']), g$0loz['_sound']['onError'](nqk2s['_null']);else try {
          g$0loz['_sound']['onCanplay'](null), g$0loz['_sound']['onError'](null), nqk2s['_null'] = null;
        } catch (p8af) {
          console['warn']('[wxmini] _clearSound:' + p8af), g$0loz['_sound']['onCanplay'](e7s3u), g$0loz['_sound']['onError'](e7s3u), nqk2s['_null'] = e7s3u;
        }
      }function skebuq() {
        g$0li(), e6b37['loaded'] = !![], e6b37['event']('complete'), nqk2s['_audioCache'][e6b37['url']] = e6b37;
      }function rzl0i(e7b3u) {
        console['error']('errCode=' + e7b3u['errCode'] + '  errMsg=' + e7b3u['errMsg']), g$0li(), e6b37['event']('error');
      }function e7s3u() {}this['_sound']['onCanplay'](skebuq), this['_sound']['onError'](rzl0i), this['_sound']['src'] = cp_jf;var e6b37 = this;
    }, zr$0il['play'] = function (keu7sb, n5u) {
      keu7sb === void 0x0 && (keu7sb = 0x0), n5u === void 0x0 && (n5u = 0x0);var ebs37;if (this['url'] == pj_f8['_tMusic']) {
        if (!nqk2s['_musicAudio']) nqk2s['_musicAudio'] = nqk2s['_createSound']();ebs37 = nqk2s['_musicAudio'];
      } else ebs37 = nqk2s['_createSound']();ebs37['src'] = this['url'];var yg0ozd = new mvt9i(ebs37);return yg0ozd['url'] = this['url'], yg0ozd['loops'] = n5u, yg0ozd['startTime'] = keu7sb, yg0ozd['play'](), pj_f8['addChannel'](yg0ozd), yg0ozd;
    }, zr$0il['dispose'] = function () {
      var nk25qw = nqk2s['_audioCache'][this['url']];nk25qw && (nk25qw['src'] = '', delete nqk2s['_audioCache'][this['url']]);
    }, ogly0(0x0, zr$0il, 'duration', function () {
      return this['_sound']['duration'];
    }), nqk2s['_createSound'] = function () {
      return nqk2s['_id']++, igl['window']['wx']['createInnerAudioContext']();
    }, nqk2s['_musicAudio'] = null, nqk2s['_id'] = 0x0, nqk2s['_audioCache'] = {}, nqk2s['_null'] = undefined, nqk2s;
  }(lz0ir),
      mvt9i = function (e37sb6) {
    function uks(a37e6b) {
      this['_audio'] = null, this['_onEnd'] = null, uks['__super']['call'](this), this['_audio'] = a37e6b, this['_onEnd'] = lt9$r['bind'](this['__onEnd'], this), a37e6b['onEnded'](this['_onEnd']);
    }k2useq(uks, 'laya.wx.mini.MiniSoundChannel', e37sb6);var cp9v1 = uks['prototype'];return cp9v1['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (zlgyo0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, cp9v1['__onNull'] = function () {}, cp9v1['play'] = function () {
      this['isStopped'] = ![], pj_f8['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, cp9v1['stop'] = function () {
      this['isStopped'] = !![], pj_f8['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (uks['_null'] != undefined) this['_audio']['onEnded'](uks['_null']);else try {
        this['_audio']['onEnded'](null), uks['_null'] = null;
      } catch (zgi$) {
        console['warn']('[wxmini] stop:' + zgi$), this['_audio']['onEnded'](lt9$r['bind'](this['__onNull'], this)), uks['_null'] = lt9$r['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, cp9v1['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, cp9v1['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], pj_f8['addChannel'](this), this['_audio']['play']();
    }, ogly0(0x0, cp9v1, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), ogly0(0x0, cp9v1, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), ogly0(0x0, cp9v1, 'volume', function () {
      return 0x1;
    }, function (d0ygzo) {}), uks['_null'] = undefined, uks;
  }(p_fcj);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var irt9$l in Laya) {
    var v1cpm9 = Laya[irt9$l];v1cpm9 && v1cpm9['__isclass'] && (exports[irt9$l] = v1cpm9);
  }
});