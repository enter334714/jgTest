var _ = wx.y$;
(function (window, document, dl7g) {
  var d6hswq = dl7g['un'],
      c_mx = dl7g['uns'],
      utei5 = dl7g['static'],
      n2gby4 = dl7g['class'],
      byi24 = dl7g['getset'],
      or03zh = dl7g['__newvec'],
      e42yib = laya['utils']['Browser'],
      kf39r$ = laya['events']['Event'],
      rh0o3z = laya['events']['EventDispatcher'],
      wshdq6 = laya['resource']['HTMLImage'],
      v39k = laya['utils']['Handler'],
      rzohq = laya['display']['Input'],
      wp = laya['net']['Loader'],
      hzoq06 = laya['maths']['Matrix'],
      dplgn = laya['renders']['Render'],
      eyb4i = laya['utils']['RunDriver'],
      e4iuyj = laya['media']['Sound'],
      fv9km$ = laya['media']['SoundChannel'],
      b2y4gn = laya['media']['SoundManager'],
      akmc_ = laya['display']['Stage'],
      i5jut = laya['net']['URL'],
      am8_xc = laya['utils']['Utils'],
      _mvck = function () {
    function o9zr0() {}return n2gby4(o9zr0, 'laya.wx.mini.MiniAdpter'), o9zr0['getJson'] = function (_8amc) {
      return JSON['parse'](_8amc);
    }, o9zr0['init'] = function (lpsdw, qzho) {
      lpsdw === void 0x0 && (lpsdw = ![]), qzho === void 0x0 && (qzho = ![]);if (o9zr0['_inited']) return;o9zr0['window'] = window;if (o9zr0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;o9zr0['_inited'] = !![], o9zr0['isZiYu'] = qzho, o9zr0['isPosMsgYu'] = lpsdw, o9zr0['EnvConfig'] = {}, !o9zr0['isZiYu'] && (l7nd['setNativeFileDir']('/layaairGame'), l7nd['existDir'](l7nd['fileNativeDir'], v39k['create'](o9zr0, o9zr0['onMkdirCallBack']))), o9zr0['window']['focus'] = function () {}, dl7g['getUrlPath'] = function () {}, o9zr0['window']['logtime'] = function (n2b4g) {}, o9zr0['window']['alertTimeLog'] = function (frk9) {}, o9zr0['window']['resetShareInfo'] = function () {}, o9zr0['window']['CanvasRenderingContext2D'] = function () {}, o9zr0['window']['CanvasRenderingContext2D']['prototype'] = o9zr0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o9zr0['window']['document']['body']['appendChild'] = function () {}, o9zr0['EnvConfig']['pixelRatioInt'] = 0x0, eyb4i['getPixelRatio'] = o9zr0['pixelRatio'], o9zr0['_preCreateElement'] = e42yib['createElement'], e42yib['createElement'] = o9zr0['createElement'], eyb4i['createShaderCondition'] = o9zr0['createShaderCondition'], am8_xc['parseXMLFromString'] = o9zr0['parseXMLFromString'], rzohq['_createInputElement'] = yjbi4e['_createInputElement'], o9zr0['EnvConfig']['load'] = wp['prototype']['load'], wp['prototype']['load'] = je4by['prototype']['load'], o9zr0['isZiYu'] && lpsdw && wx['onMessage'](function (nby42) {
        nby42['isLoad'] && (l7nd['ziyuFileData'][nby42['url']] = nby42['data']);
      });
    }, o9zr0['onMkdirCallBack'] = function (z9o0r3, _xma8c) {
      if (!z9o0r3) l7nd['filesListObj'] = JSON['parse'](_xma8c['data']);
    }, o9zr0['pixelRatio'] = function () {
      if (!o9zr0['EnvConfig']['pixelRatioInt']) try {
        var lndg7p = wx['getSystemInfoSync']();return o9zr0['EnvConfig']['pixelRatioInt'] = lndg7p['pixelRatio'], lndg7p = lndg7p, lndg7p['pixelRatio'];
      } catch (z6ohq0) {}return o9zr0['EnvConfig']['pixelRatioInt'];
    }, o9zr0['createElement'] = function (_vmka) {
      if (_vmka == 'canvas') {
        var mac8_;return o9zr0['idx'] == 0x1 ? o9zr0['isZiYu'] ? (mac8_ = sharedCanvas, mac8_['style'] = {}) : mac8_ = window['canvas'] : mac8_ = window['wx']['createCanvas'](), o9zr0['idx']++, mac8_;
      } else {
        if (_vmka == 'textarea' || _vmka == 'input') return o9zr0['onCreateInput'](_vmka);else {
          if (_vmka == 'div') {
            var v$mfka = o9zr0['_preCreateElement'](_vmka);return v$mfka['contains'] = function (sw7p) {
              return null;
            }, v$mfka['removeChild'] = function (w7dsp) {}, v$mfka;
          } else return o9zr0['_preCreateElement'](_vmka);
        }
      }
    }, o9zr0['onCreateInput'] = function (oh6zq) {
      var ax_cv = o9zr0['_preCreateElement'](oh6zq);return ax_cv['focus'] = yjbi4e['wxinputFocus'], ax_cv['blur'] = yjbi4e['wxinputblur'], ax_cv['style'] = {}, ax_cv['value'] = 0x0, ax_cv['parentElement'] = {}, ax_cv['placeholder'] = {}, ax_cv['type'] = {}, ax_cv['setColor'] = function (hzso) {}, ax_cv['setType'] = function (f3v$9k) {}, ax_cv['setFontFace'] = function (b4yin) {}, ax_cv['addEventListener'] = function (uei4jy) {}, ax_cv['contains'] = function (zhwqs6) {
        return null;
      }, ax_cv['removeChild'] = function (pgbn27) {}, ax_cv;
    }, o9zr0['createShaderCondition'] = function (kvf$m9) {
      var lswp7d = this,
          vfk$9 = function () {
        var yjiue5 = kvf$m9;return lswp7d[kvf$m9['replace']('this.', '')];
      };return vfk$9;
    }, o9zr0['EnvConfig'] = null, o9zr0['window'] = null, o9zr0['_preCreateElement'] = null, o9zr0['_inited'] = ![], o9zr0['wxRequest'] = null, o9zr0['systemInfo'] = null, o9zr0['version'] = '0.0.1', o9zr0['isZiYu'] = ![], o9zr0['isPosMsgYu'] = ![], o9zr0['parseXMLFromString'] = function (pl27ng) {
      var os, hqs6z;pl27ng = pl27ng['replace'](/>\s+</g, '><');try {
        os = new window['Parser']['DOMParser']()['parseFromString'](pl27ng, 'text/xml');
      } catch (bgp2n4) {
        throw '需要引入xml解析库文件';
      }return os;
    }, o9zr0['idx'] = 0x1, o9zr0;
  }(),
      acv_km = function () {
    function va_kcm() {}n2gby4(va_kcm, 'laya.wx.mini.MiniImage');var ib4n2 = va_kcm['prototype'];return ib4n2['_loadImage'] = function (y4eij) {
      var bn4y2g = this,
          e42byi = ![];y4eij['indexOf']('layaNativeDir/') == -0x1 && (e42byi = !![], y4eij = i5jut['formatURL'](y4eij));if (!l7nd['getFileInfo'](y4eij)) {
        if (y4eij['indexOf']('http://') != -0x1 || y4eij['indexOf']('https://') != -0x1) l7nd['downImg'](y4eij, new v39k(va_kcm, va_kcm['onDownImgCallBack'], [y4eij, bn4y2g]), y4eij);else va_kcm['onCreateImage'](y4eij, bn4y2g, !![]);
      } else va_kcm['onCreateImage'](y4eij, bn4y2g, !e42byi);
    }, va_kcm['onDownImgCallBack'] = function (yi4eb, ozh6q, n72gbp) {
      if (!n72gbp) va_kcm['onCreateImage'](yi4eb, ozh6q);else ozh6q['onError'](null);
    }, va_kcm['onCreateImage'] = function (gl7wpd, p27nlg, o30hrz) {
      o30hrz === void 0x0 && (o30hrz = ![]);var bie2;if (!o30hrz) {
        var zoq0h6 = l7nd['getFileInfo'](gl7wpd),
            n42gp = zoq0h6['md5'];bie2 = l7nd['getFileNativePath'](n42gp);
      } else bie2 = gl7wpd;if (p27nlg['imgCache'] == null) p27nlg['imgCache'] = {};var _vmk;function _x8a() {
        _vmk['onload'] = null, _vmk['onerror'] = null, delete p27nlg['imgCache'][gl7wpd];
      };var dgplw7 = function () {
        _x8a(), p27nlg['onLoaded'](_vmk);
      },
          jtui = function () {
        _x8a(), p27nlg['event']('error', 'Load image failed');
      };p27nlg['_type'] == 'nativeimage' ? (_vmk = new e42yib['window']['Image'](), _vmk['crossOrigin'] = '', _vmk['onload'] = dgplw7, _vmk['onerror'] = jtui, _vmk['src'] = bie2, p27nlg['imgCache'][gl7wpd] = _vmk) : new wshdq6['create'](bie2, { 'onload': dgplw7, 'onerror': jtui, 'onCreate': function (hszq) {
          _vmk = hszq, p27nlg['imgCache'][gl7wpd] = hszq;
        } });
    }, va_kcm;
  }(),
      yjbi4e = function () {
    function r9fk$() {}return n2gby4(r9fk$, 'laya.wx.mini.MiniInput'), r9fk$['_createInputElement'] = function () {
      rzohq['_initInput'](rzohq['area'] = e42yib['createElement']('textarea')), rzohq['_initInput'](rzohq['input'] = e42yib['createElement']('input')), rzohq['inputContainer'] = e42yib['createElement']('div'), rzohq['inputContainer']['style']['position'] = 'absolute', rzohq['inputContainer']['style']['zIndex'] = 0x186a0, e42yib['container']['appendChild'](rzohq['inputContainer']), rzohq['inputContainer']['setPos'] = function (_vckma, _akmvf) {
        rzohq['inputContainer']['style']['left'] = _vckma + 'px', rzohq['inputContainer']['style']['top'] = _akmvf + 'px';
      }, dl7g['stage']['on']('resize', null, r9fk$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (r0hoz3) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), b2y4gn['_soundClass'] = eui5, b2y4gn['_musicClass'] = eui5, window['_videoClass'] = i2ny4b;
    }, r9fk$['_onStageResize'] = function () {
      var i2e4yb = dl7g['stage']['_canvasTransform']['identity']();i2e4yb['scale'](e42yib['width'] / dplgn['canvas']['width'] / eyb4i['getPixelRatio'](), e42yib['height'] / dplgn['canvas']['height'] / eyb4i['getPixelRatio']());
    }, r9fk$['wxinputFocus'] = function (dqlw6) {
      var uj5iy = rzohq['inputElement']['target'];if (uj5iy && !uj5iy['editable']) return;_mvck['window']['wx']['offKeyboardConfirm'](), _mvck['window']['wx']['offKeyboardInput'](), _mvck['window']['wx']['showKeyboard']({ 'defaultValue': uj5iy['text'], 'maxLength': uj5iy['maxChars'], 'multiple': uj5iy['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (mafkv) {}, 'fail': function (yng42) {} }), _mvck['window']['wx']['onKeyboardConfirm'](function ($3kf9v) {
        var ozr930 = $3kf9v ? $3kf9v['value'] : '';uj5iy['text'] = ozr930, uj5iy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), _mvck['window']['wx']['onKeyboardInput'](function (p72nbg) {
        var shoq6 = p72nbg ? p72nbg['value'] : '';if (!uj5iy['multiline']) {
          if (shoq6['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }uj5iy['text'] = shoq6, uj5iy['event']('input');
      });
    }, r9fk$['inputEnter'] = function () {
      rzohq['inputElement']['target']['focus'] = ![];
    }, r9fk$['wxinputblur'] = function () {
      r9fk$['hideKeyboard']();
    }, r9fk$['hideKeyboard'] = function () {
      _mvck['window']['wx']['offKeyboardConfirm'](), _mvck['window']['wx']['offKeyboardInput'](), _mvck['window']['wx']['hideKeyboard']({ 'success': function (bey4i2) {
          console['log']('隐藏键盘');
        }, 'fail': function (v9mf$) {
          console['log']('隐藏键盘出错:' + (v9mf$ ? v9mf$['errMsg'] : ''));
        } });
    }, r9fk$;
  }(),
      je4by = function () {
    function h3zr() {}n2gby4(h3zr, 'laya.wx.mini.MiniLoader');var gbn2 = h3zr['prototype'];return gbn2['load'] = function (cv_kam, q0rhzo, dlw67, iejy, rzhq) {
      dlw67 === void 0x0 && (dlw67 = !![]), rzhq === void 0x0 && (rzhq = ![]);var ju5tei = this;ju5tei['_url'] = cv_kam;if (cv_kam['indexOf']('data:image') === 0x0) ju5tei['_type'] = q0rhzo = 'image';else ju5tei['_type'] = q0rhzo || (q0rhzo = ju5tei['getTypeFromUrl'](cv_kam));ju5tei['_cache'] = dlw67, ju5tei['_data'] = null;var x_av = 'ascii';if (cv_kam['indexOf']('.fnt') != -0x1) x_av = 'utf8';else q0rhzo == 'arraybuffer' && (x_av = '');;var vca_m = am8_xc['getFileExtension'](cv_kam);if (h3zr['_fileTypeArr']['indexOf'](vca_m) != -0x1) _mvck['EnvConfig']['load']['call'](this, cv_kam, q0rhzo, dlw67, iejy, rzhq);else {
        if (!l7nd['getFileInfo'](cv_kam)) {
          if (cv_kam['indexOf']('layaNativeDir/') != -0x1) {
            if (_mvck['isZiYu']) {
              var zh6oqs = l7nd['ziyuFileData'][cv_kam];ju5tei['onLoaded'](zh6oqs);return;
            } else {
              cosnole['log']('read read'), l7nd['read'](cv_kam, x_av, new v39k(h3zr, h3zr['onReadNativeCallBack'], [x_av, cv_kam, q0rhzo, dlw67, iejy, rzhq, ju5tei]));return;
            }
          }if (i5jut['rootPath'] == '') var wld6qs = cv_kam;else wld6qs = cv_kam['split'](i5jut['rootPath'])[0x0];cv_kam['indexOf']('http://') != -0x1 || cv_kam['indexOf']('https://') != -0x1 ? _mvck['EnvConfig']['load']['call'](ju5tei, cv_kam, q0rhzo, dlw67, iejy, rzhq) : l7nd['readFile'](wld6qs, x_av, new v39k(h3zr, h3zr['onReadNativeCallBack'], [x_av, cv_kam, q0rhzo, dlw67, iejy, rzhq, ju5tei]), cv_kam);
        } else _mvck['EnvConfig']['load']['call'](this, cv_kam, q0rhzo, dlw67, iejy, rzhq);
      }
    }, gbn2['resMgrLoad'] = function (f3$kv9, maxcv_, ejybi, fk$a, ax_mvc, $amvfk, b24iyn) {
      ejybi === void 0x0 && (ejybi = 0x0), fk$a === void 0x0 && (fk$a = ![]), ax_mvc === void 0x0 && (ax_mvc = ![]), $amvfk === void 0x0 && ($amvfk = 0x0), b24iyn === void 0x0 && (b24iyn = 0x3), f3$kv9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f3$kv9), _mvck['EnvConfig']['resMgrLoad'](f3$kv9, (ye24b, _xvmca, f9$vk) => {
        h3zr['prototype']['resMgrLoadCallBack'](ye24b, _xvmca, f9$vk, maxcv_);
      }, ejybi, fk$a, ax_mvc, $amvfk, b24iyn);
    }, gbn2['resMgrLoadCallBack'] = function (_kfv, ds6qw, lwsqd, slqw) {
      console['log']('buff:::', _kfv, lwsqd, l7nd['fileNativeDir'] + '///' + l7nd['fileListName']), slqw(_kfv, ds6qw, lwsqd);
    }, gbn2['clearRes'] = function (v9$f, ie24yb) {
      ie24yb === void 0x0 && (ie24yb = ![]);var h6z0qo = this;h6z0qo['clearRes'](v9$f, ie24yb);var t5iuje = l7nd['getFileInfo'](v9$f);if (t5iuje && (v9$f['indexOf']('http://') != -0x1 || v9$f['indexOf']('https://') != -0x1)) {
        var dwlq6 = t5iuje['md5'],
            yeji4u = l7nd['getFileNativePath'](dwlq6);l7nd['remove'](yeji4u);
      }
    }, h3zr['onReadNativeCallBack'] = function (zhrq, _ca8m, iye2b, e5uyji, lg7npd, n2l7g, vkf, tuje5i, t1u5) {
      e5uyji === void 0x0 && (e5uyji = !![]), n2l7g === void 0x0 && (n2l7g = ![]), tuje5i === void 0x0 && (tuje5i = 0x0);if (!tuje5i) {
        var lp7s;if (iye2b == 'json' || iye2b == 'atlas') lp7s = _mvck['getJson'](t1u5['data']);else iye2b == 'xml' ? lp7s = am8_xc['parseXMLFromString'](t1u5['data']) : lp7s = t1u5['data'];vkf['onLoaded'](lp7s), !_mvck['isZiYu'] && _mvck['isPosMsgYu'] && iye2b != 'arraybuffer' && wx['postMessage']({ 'url': _ca8m, 'data': lp7s, 'isLoad': !![] });
      } else tuje5i == 0x1 && _mvck['EnvConfig']['load']['call'](vkf, _ca8m, iye2b, e5uyji, lg7npd, n2l7g);
    }, utei5(h3zr, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), h3zr;
  }(),
      l7nd = function (r$9f3k) {
    function tje5u1() {
      tje5u1['__super']['call'](this);;
    }return n2gby4(tje5u1, 'laya.wx.mini.MiniFileMgr', r$9f3k), tje5u1['isLoadFile'] = function (eyj5i) {
      return tje5u1['_fileTypeArr']['indexOf'](eyj5i) != -0x1 ? !![] : ![];
    }, tje5u1['getFileInfo'] = function (dgl7) {
      var oqsz = dgl7['split']('?')[0x0],
          o3z9 = tje5u1['filesListObj'][oqsz];if (o3z9 == null) return null;else return o3z9;return null;
    }, tje5u1['onFileUpdate'] = function (swl6d, vf_am) {
      var gnpb27 = swl6d['split']('/'),
          g2b4n = gnpb27[gnpb27['length'] - 0x1],
          hz6wsq = tje5u1['getFileInfo'](vf_am);if (hz6wsq == null) tje5u1['onSaveFile'](vf_am, g2b4n);else {
        if (hz6wsq['readyUrl'] != vf_am) tje5u1['remove'](g2b4n, vf_am);
      }
    }, tje5u1['exits'] = function (shz6qw, d76lsw) {
      var glnp2 = tje5u1['getFileNativePath'](shz6qw);tje5u1['fs']['getFileInfo']({ 'filePath': glnp2, 'success': function (t51je) {
          d76lsw != null && d76lsw['runWith']([0x0, t51je]);
        }, 'fail': function (wp7lds) {
          d76lsw != null && d76lsw['runWith']([0x1, wp7lds]);
        } });
    }, tje5u1['read'] = function (_amcxv, iey4j, gp7lnd, dslqw6) {
      iey4j === void 0x0 && (iey4j = 'ascill'), dslqw6 === void 0x0 && (dslqw6 = '');var x_va;dslqw6 != '' ? x_va = tje5u1['getFileNativePath'](_amcxv) : x_va = _amcxv, tje5u1['fs']['readFile']({ 'filePath': x_va, 'encoding': iey4j, 'success': function (eyjib) {
          gp7lnd != null && gp7lnd['runWith']([0x0, eyjib]);
        }, 'fail': function (bn27) {
          if (bn27 && dslqw6 != '') tje5u1['down'](dslqw6, iey4j, gp7lnd, dslqw6);else gp7lnd != null && gp7lnd['runWith']([0x1]);
        } });
    }, tje5u1['readNativeFile'] = function (ybi2n4, d7wpsl) {
      tje5u1['fs']['readFile']({ 'filePath': ybi2n4, 'encoding': '', 'success': function (r39) {
          d7wpsl != null && d7wpsl['runWith']([0x0]);
        }, 'fail': function (b4p2g) {
          d7wpsl != null && d7wpsl['runWith']([0x1]);
        } });
    }, tje5u1['down'] = function (dw7lpg, mf_akv, _cxm8, g24pbn) {
      mf_akv === void 0x0 && (mf_akv = 'ascill'), g24pbn === void 0x0 && (g24pbn = '');var vacmk_ = tje5u1['getFileNativePath'](g24pbn),
          pds = tje5u1['wxdown']({ 'url': dw7lpg, 'filePath': vacmk_, 'success': function (xma8c_) {
          if (xma8c_['statusCode'] === 0xc8) tje5u1['readFile'](xma8c_['filePath'], mf_akv, _cxm8, g24pbn);
        }, 'fail': function (dlw7s6) {
          _cxm8 != null && _cxm8['runWith']([0x1, dlw7s6]);
        } });pds['onProgressUpdate'](function (fr90$) {
        _cxm8 != null && _cxm8['runWith']([0x2, fr90$['progress']]);
      });
    }, tje5u1['readFile'] = function (yi2be, wsp7dl, frk93, g4bn) {
      wsp7dl === void 0x0 && (wsp7dl = 'ascill'), g4bn === void 0x0 && (g4bn = ''), tje5u1['fs']['readFile']({ 'filePath': yi2be, 'encoding': wsp7dl, 'success': function (kvf_a) {
          if (yi2be['indexOf']('http://') != -0x1 || yi2be['indexOf']('https://') != -0x1) tje5u1['onFileUpdate'](yi2be, g4bn);frk93 != null && frk93['runWith']([0x0, kvf_a]);
        }, 'fail': function (kf9$) {
          if (kf9$) frk93 != null && frk93['runWith']([0x1, kf9$]);
        } });
    }, tje5u1['downImg'] = function (kv3f$, dswql, v_makc) {
      v_makc === void 0x0 && (v_makc = '');var or0hzq = tje5u1['wxdown']({ 'url': kv3f$, 'success': function (gnp7l2) {
          gnp7l2['statusCode'] === 0xc8 && tje5u1['copyFile'](gnp7l2['tempFilePath'], v_makc, dswql);
        }, 'fail': function (x_m) {
          dswql != null && dswql['runWith']([0x1, x_m]);
        } });
    }, tje5u1['copyFile'] = function (kvfa$, f$kv3, fr93$k) {
      var h30ozr = kvfa$['split']('/'),
          r93f = h30ozr[h30ozr['length'] - 0x1],
          wlg7dp = f$kv3['split']('?')[0x0],
          e5yiu = tje5u1['getFileInfo'](f$kv3),
          f3$kv = tje5u1['getFileNativePath'](r93f);tje5u1['fs']['copyFile']({ 'srcPath': kvfa$, 'destPath': f3$kv, 'success': function (wqlds6) {
          if (!e5yiu) tje5u1['onSaveFile'](f$kv3, r93f), fr93$k != null && fr93$k['runWith']([0x0]);else {
            if (e5yiu['readyUrl'] != f$kv3) tje5u1['remove'](r93f, f$kv3, fr93$k);
          }
        }, 'fail': function (q6zho0) {
          fr93$k != null && fr93$k['runWith']([0x1, q6zho0]);
        } });
    }, tje5u1['getFileNativePath'] = function (xa8mc) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xa8mc;
    }, tje5u1['remove'] = function (v$9k3, bn2yi4, r93$o0) {
      bn2yi4 === void 0x0 && (bn2yi4 = '');var rh3 = tje5u1['getFileInfo'](bn2yi4),
          fa$kvm = tje5u1['getFileNativePath'](rh3['md5']);dl7g['loader']['clearRes'](rh3['readyUrl']), tje5u1['fs']['unlink']({ 'filePath': fa$kvm, 'success': function (eij4by) {
          if (bn2yi4 != '') tje5u1['onSaveFile'](bn2yi4, v$9k3);r93$o0 != null && r93$o0['runWith']([0x0]);
        }, 'fail': function (o3$09) {} });
    }, tje5u1['onSaveFile'] = function (zo6hs, m$9fv) {
      var o3$0r9 = zo6hs['split']('?')[0x0];tje5u1['filesListObj'][o3$0r9] = { 'md5': m$9fv, 'readyUrl': zo6hs }, tje5u1['fs']['writeFile']({ 'filePath': tje5u1['fileNativeDir'] + '/' + tje5u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tje5u1['filesListObj']), 'success': function (jeitu) {
          console['log']('写入测试测试成功：', jeitu);
        }, 'fail': function (jue1) {
          console['log']('写入测试测试失败：', jue1);
        } });
    }, tje5u1['existDir'] = function (bij4ye, d6wshq) {
      tje5u1['fs']['mkdir']({ 'dirPath': bij4ye, 'success': function (_fmkav) {
          d6wshq != null && d6wshq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (in2b) {
          if (in2b['errMsg']['indexOf']('file already exists') != -0x1) tje5u1['readSync'](tje5u1['fileListName'], 'utf8', d6wshq);else d6wshq != null && d6wshq['runWith']([0x1, in2b]);
        } });
    }, tje5u1['readSync'] = function (dlqsw, h6sqwd, kav_, lwd7s) {
      h6sqwd === void 0x0 && (h6sqwd = 'ascill'), lwd7s === void 0x0 && (lwd7s = '');var gpldn = tje5u1['getFileNativePath'](dlqsw),
          e4b;try {
        e4b = tje5u1['fs']['readFileSync'](gpldn), kav_ != null && kav_['runWith']([0x0, { 'data': e4b }]);
      } catch (pg27) {
        kav_ != null && kav_['runWith']([0x1]);
      }
    }, tje5u1['readCache'] = function () {}, tje5u1['writeCache'] = function (hsqd6) {
      var a8cm = readyUrl['split']('?')[0x0];tje5u1['filesListObj'][a8cm] = { 'md5': md5Name, 'readyUrl': readyUrl }, tje5u1['fs']['writeFile']({ 'filePath': tje5u1['fileNativeDir'] + '/' + tje5u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](tje5u1['filesListObj']), 'success': function (sdp7l) {}, 'fail': function (hz0orq) {} });
    }, tje5u1['setNativeFileDir'] = function (b2pn) {
      tje5u1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b2pn;
    }, tje5u1['filesListObj'] = {}, tje5u1['fileNativeDir'] = null, tje5u1['fileListName'] = 'layaairfiles.txt', tje5u1['ziyuFileData'] = {}, utei5(tje5u1, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), tje5u1;
  }(rh0o3z),
      eui5 = function (swqhd6) {
    function camv_k() {
      this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], camv_k['__super']['call'](this), this['_sound'] = camv_k['_createSound'](), this['_chanell'] = new u5te1j(this['_sound']);
    }n2gby4(camv_k, 'laya.wx.mini.MiniSound', swqhd6);var vk$a = camv_k['prototype'];return vk$a['load'] = function (vk39$) {
      var ho0r = this;vk39$ = i5jut['formatURL'](vk39$), this['url'] = vk39$;if (camv_k['_audioCache'][vk39$]) {
        this['event']('complete');return;
      }function rqho0() {
        if (camv_k['_null'] != undefined) ho0r['_sound']['onCanplay'](camv_k['_null']), ho0r['_sound']['onError'](camv_k['_null']);else try {
          ho0r['_sound']['onCanplay'](null), ho0r['_sound']['onError'](null), camv_k['_null'] = null;
        } catch (wqd6sh) {
          console['warn']('[wxmini] _clearSound:' + wqd6sh), ho0r['_sound']['onCanplay'](h60qz), ho0r['_sound']['onError'](h60qz), camv_k['_null'] = h60qz;
        }
      }function x8c_m() {
        bn42p['loaded'] = !![], bn42p['event']('complete'), camv_k['_audioCache'][bn42p['url']] = bn42p;
      }function _ac8(byin2) {
        console['error']('errCode=' + byin2['errCode'] + '  errMsg=' + byin2['errMsg']), bn42p['event']('error');
      }function h60qz() {}this['_sound']['onCanplay'](x8c_m), this['_sound']['onError'](_ac8), this['_sound']['src'] = vk39$;var bn42p = this;
    }, vk$a['play'] = function (a$mvkf, z39r) {
      a$mvkf === void 0x0 && (a$mvkf = 0x0), z39r === void 0x0 && (z39r = 0x0);var ln2gp7, lq6wsd;if (this['url'] == b2y4gn['_tMusic']) {
        if (!camv_k['_musicAudio']) camv_k['_musicAudio'] = this['_sound'];ln2gp7 = camv_k['_musicAudio'], lq6wsd = this['_chanell'];
      } else ln2gp7 = this['_sound'], lq6wsd = this['_chanell'];return ln2gp7['src'] = this['url'], ln2gp7['startTime'] = 0x0, lq6wsd['isStopped'] && (lq6wsd['url'] = this['url'], lq6wsd['loops'] = z39r, lq6wsd['startTime'] = a$mvkf, lq6wsd['play'](), b2y4gn['addChannel'](lq6wsd)), lq6wsd;
    }, vk$a['dispose'] = function () {
      var fkam_ = camv_k['_audioCache'][this['url']];fkam_ && (fkam_['src'] = '', delete camv_k['_audioCache'][this['url']]);
    }, byi24(0x0, vk$a, 'duration', function () {
      return this['_sound']['duration'];
    }), camv_k['_createSound'] = function () {
      camv_k['_id']++;var ju5e = _mvck['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });return ju5e;
    }, camv_k['_musicAudio'] = null, camv_k['_id'] = 0x0, camv_k['_audioCache'] = {}, camv_k['_null'] = undefined, camv_k;
  }(rh0o3z),
      u5te1j = function (qhz6sw) {
    function n2yb4i(iuj4ey) {
      this['_audio'] = null, this['_onEnd'] = null, n2yb4i['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = iuj4ey, this['_onEnd'] = am8_xc['bind'](this['__onEnd'], this), iuj4ey['onEnded'](this['_onEnd']);
    }n2gby4(n2yb4i, 'laya.wx.mini.MiniSoundChannel', qhz6sw);var dqws6h = n2yb4i['prototype'];return dqws6h['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (dl7g['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, dqws6h['__onNull'] = function () {}, dqws6h['play'] = function () {
      this['isStopped'] = ![], b2y4gn['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, dqws6h['stop'] = function () {
      this['isStopped'] = !![], b2y4gn['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();
    }, dqws6h['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, dqws6h['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], b2y4gn['addChannel'](this), this['_audio']['play']();
    }, byi24(0x0, dqws6h, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), byi24(0x0, dqws6h, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), byi24(0x0, dqws6h, 'volume', function () {
      return 0x1;
    }, function ($9mkf) {}), n2yb4i['_null'] = undefined, n2yb4i;
  }(fv9km$),
      i2ny4b = function () {
    function np72l() {
      this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _mvck['window']['wx']['createVideo']({ 'showCenterPlayBtn': ![], 'showProgressInControlMode': ![], 'objectFit': 'fill' });
    }n2gby4(np72l, 'laya.wx.mini.MiniVideo');var qw6hsz = np72l['prototype'];return qw6hsz['on'] = function (hoz06, lndgp, ohzq6) {
      if (hoz06 == 'loadedmetadata') this['onPlayFunc'] = ohzq6['bind'](lndgp), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else hoz06 == 'ended' && (this['onEndedFunC'] = ohzq6['bind'](lndgp), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
    }, qw6hsz['onTimeUpdateFunc'] = function (ndl7gp) {
      this['position'] = ndl7gp['position'], this['_duration'] = ndl7gp['duration'];
    }, qw6hsz['onPlayFunction'] = function () {
      if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
    }, qw6hsz['onended'] = function (rkf$3, acx_) {
      this['onEndedFunC'] = acx_['bind'](rkf$3), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
    }, qw6hsz['onEndedFunction'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
    }, qw6hsz['off'] = function (p7slw, p7g2, biyn24) {
      if (p7slw == 'loadedmetadata') this['onPlayFunc'] = biyn24['bind'](p7g2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else p7slw == 'ended' && (this['onEndedFunC'] = biyn24['bind'](p7g2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
    }, qw6hsz['load'] = function (h3ro) {
      if (!this['videoElement']) return;this['videoElement']['src'] = h3ro;
    }, qw6hsz['play'] = function () {
      if (!this['videoElement']) return;this['videoend'] = ![], this['videoElement']['play']();
    }, qw6hsz['pause'] = function () {
      if (!this['videoElement']) return;this['videoend'] = !![], this['videoElement']['pause']();
    }, qw6hsz['size'] = function (uey, vk_m) {
      if (!this['videoElement']) return;this['videoElement']['width'] = uey, this['videoElement']['height'] = vk_m;
    }, qw6hsz['destroy'] = function () {
      if (this['videoElement']) this['videoElement']['destroy']();this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
    }, qw6hsz['reload'] = function () {
      if (!this['videoElement']) return;this['videoElement']['src'] = this['videourl'];
    }, byi24(0x0, qw6hsz, 'duration', function () {
      return this['_duration'];
    }), byi24(0x0, qw6hsz, 'currentTime', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['initialTime'];
    }, function (ca_mvx) {
      if (!this['videoElement']) return;this['videoElement']['initialTime'] = ca_mvx;
    }), byi24(0x0, qw6hsz, 'videoWidth', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['width'];
    }), byi24(0x0, qw6hsz, 'videoHeight', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['height'];
    }), byi24(0x0, qw6hsz, 'ended', function () {
      return this['videoend'];
    }), byi24(0x0, qw6hsz, 'loop', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['loop'];
    }, function (oqrh0) {
      if (!this['videoElement']) return;this['videoElement']['loop'] = oqrh0;
    }), byi24(0x0, qw6hsz, 'playbackRate', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['playbackRate'];
    }, function (bp42n) {
      if (!this['videoElement']) return;this['videoElement']['playbackRate'] = bp42n;
    }), byi24(0x0, qw6hsz, 'muted', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['muted'];
    }, function (bpg2n4) {
      if (!this['videoElement']) return;this['videoElement']['muted'] = bpg2n4;
    }), byi24(0x0, qw6hsz, 'paused', function () {
      if (!this['videoElement']) return ![];return this['videoElement']['paused'];
    }), byi24(0x0, qw6hsz, 'x', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['x'];
    }, function (mcavk) {
      if (!this['videoElement']) return;this['videoElement']['x'] = mcavk;
    }), byi24(0x0, qw6hsz, 'y', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['y'];
    }, function (pg2b7) {
      if (!this['videoElement']) return;this['videoElement']['y'] = pg2b7;
    }), byi24(0x0, qw6hsz, 'currentSrc', function () {
      return this['videoElement']['src'];
    }), byi24(0x0, qw6hsz, 'src', function () {
      if (!this['videoElement']) return 0x0;return this['videoElement']['src'];
    }, function (bjei4y) {
      if (!this['videoElement']) return;this['videoElement']['src'] = bjei4y;
    }), byi24(0x0, qw6hsz, 'controls', function () {
      if (!this['videoElement']) return;return this['videoElement']['controls'];
    }, function (kf3$r) {
      if (!this['videoElement']) return;this['videoElement']['controls'] = kf3$r;
    }), byi24(0x0, qw6hsz, 'autoplay', function () {
      if (!this['videoElement']) return;return this['videoElement']['autoplay'];
    }, function (fvam$k) {
      if (!this['videoElement']) return;this['videoElement']['autoplay'] = fvam$k;
    }), np72l;
  }();
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';
  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var gn2p in Laya) {
    var g27b = Laya[gn2p];g27b && g27b['__isclass'] && (exports[gn2p] = g27b);
  }
});