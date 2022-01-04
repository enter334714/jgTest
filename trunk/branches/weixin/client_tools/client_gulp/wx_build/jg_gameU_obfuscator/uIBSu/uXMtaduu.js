var o = wx.$U;
(function (window, document, ji4h3m) {
  var q7xoli = ji4h3m['un'],
      p3j = ji4h3m['uns'],
      ilxq = ji4h3m['static'],
      t5z9gd = ji4h3m['class'],
      zdw7g9 = ji4h3m['getset'],
      pe4f$u = ji4h3m['__newvec'],
      lox = laya['utils']['Browser'],
      ufe3 = laya['events']['Event'],
      r0168c = laya['events']['EventDispatcher'],
      q7xwg = laya['resource']['HTMLImage'],
      ihqmlo = laya['utils']['Handler'],
      g7x9wl = laya['display']['Input'],
      zdt59g = laya['net']['Loader'],
      eusfp$ = laya['maths']['Matrix'],
      ohqij = laya['renders']['Render'],
      vns$_ = laya['utils']['RunDriver'],
      e_nsv$ = laya['media']['Sound'],
      pj3hm4 = laya['media']['SoundChannel'],
      w9xl7g = laya['media']['SoundManager'],
      mjh43i = laya['display']['Stage'],
      jmohq = laya['net']['URL'],
      x9l7wg = laya['utils']['Utils'],
      j4uf = function () {
    function kanvs() {}return t5z9gd(kanvs, 'laya.wx.mini.MiniAdpter'), kanvs['getJson'] = function (ujf43) {
      return JSON['parse'](ujf43);
    }, kanvs['init'] = function (a6_rck, kn_v) {
      a6_rck === void 0x0 && (a6_rck = ![]), kn_v === void 0x0 && (kn_v = ![]);if (kanvs['_inited']) return;kanvs['window'] = window;if (kanvs['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;kanvs['_inited'] = !![], kanvs['isZiYu'] = kn_v, kanvs['isPosMsgYu'] = a6_rck, kanvs['EnvConfig'] = {}, !kanvs['isZiYu'] && (b81c0['setNativeFileDir']('/layaairGame'), b81c0['existDir'](b81c0['fileNativeDir'], ihqmlo['create'](kanvs, kanvs['onMkdirCallBack']))), kanvs['window']['focus'] = function () {}, ji4h3m['getUrlPath'] = function () {}, kanvs['window']['logtime'] = function (xw9l7) {}, kanvs['window']['alertTimeLog'] = function (p4uf) {}, kanvs['window']['resetShareInfo'] = function () {}, kanvs['window']['CanvasRenderingContext2D'] = function () {}, kanvs['window']['CanvasRenderingContext2D']['prototype'] = kanvs['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kanvs['window']['document']['body']['appendChild'] = function () {}, kanvs['EnvConfig']['pixelRatioInt'] = 0x0, vns$_['getPixelRatio'] = kanvs['pixelRatio'], kanvs['_preCreateElement'] = lox['createElement'], lox['createElement'] = kanvs['createElement'], vns$_['createShaderCondition'] = kanvs['createShaderCondition'], x9l7wg['parseXMLFromString'] = kanvs['parseXMLFromString'], g7x9wl['_createInputElement'] = f3up['_createInputElement'], kanvs['EnvConfig']['load'] = zdt59g['prototype']['load'], zdt59g['prototype']['load'] = snf$e['prototype']['load'], kanvs['isZiYu'] && a6_rck && wx['onMessage'](function (g7xz) {
        g7xz['isLoad'] && (b81c0['ziyuFileData'][g7xz['url']] = g7xz['data']);
      });
    }, kanvs['onMkdirCallBack'] = function (w7oq, skvna) {
      if (!w7oq) b81c0['filesListObj'] = JSON['parse'](skvna['data']);
    }, kanvs['pixelRatio'] = function () {
      if (!kanvs['EnvConfig']['pixelRatioInt']) try {
        var rk6ac_ = wx['getSystemInfoSync']();return kanvs['EnvConfig']['pixelRatioInt'] = rk6ac_['pixelRatio'], rk6ac_ = rk6ac_, rk6ac_['pixelRatio'];
      } catch (g5wd9z) {}return kanvs['EnvConfig']['pixelRatioInt'];
    }, kanvs['createElement'] = function (u$4pe) {
      if (u$4pe == 'canvas') {
        var a6kr0c;return kanvs['idx'] == 0x1 ? kanvs['isZiYu'] ? (a6kr0c = sharedCanvas, a6kr0c['style'] = {}) : a6kr0c = window['canvas'] : a6kr0c = window['wx']['createCanvas'](), kanvs['idx']++, a6kr0c;
      } else {
        if (u$4pe == 'textarea' || u$4pe == 'input') return kanvs['onCreateInput'](u$4pe);else {
          if (u$4pe == 'div') {
            var fp4hj3 = kanvs['_preCreateElement'](u$4pe);return fp4hj3['contains'] = function (xilqm) {
              return null;
            }, fp4hj3['removeChild'] = function (fsp$e) {}, fp4hj3;
          } else return kanvs['_preCreateElement'](u$4pe);
        }
      }
    }, kanvs['onCreateInput'] = function (jf4h) {
      var arck60 = kanvs['_preCreateElement'](jf4h);return arck60['focus'] = f3up['wxinputFocus'], arck60['blur'] = f3up['wxinputblur'], arck60['style'] = {}, arck60['value'] = 0x0, arck60['parentElement'] = {}, arck60['placeholder'] = {}, arck60['type'] = {}, arck60['setColor'] = function (qmilo) {}, arck60['setType'] = function (k6cra) {}, arck60['setFontFace'] = function (hp4f3j) {}, arck60['addEventListener'] = function (j34phf) {}, arck60['contains'] = function (avkn_6) {
        return null;
      }, arck60['removeChild'] = function (rc60a) {}, arck60;
    }, kanvs['createShaderCondition'] = function (esnuv$) {
      var ra0k = this,
          e$fnsu = function () {
        var _cvk6 = esnuv$;return ra0k[esnuv$['replace']('this.', '')];
      };return e$fnsu;
    }, kanvs['EnvConfig'] = null, kanvs['window'] = null, kanvs['_preCreateElement'] = null, kanvs['_inited'] = ![], kanvs['wxRequest'] = null, kanvs['systemInfo'] = null, kanvs['version'] = '0.0.1', kanvs['isZiYu'] = ![], kanvs['isPosMsgYu'] = ![], kanvs['parseXMLFromString'] = function (_av6c) {
      var _an6vk, lxw7g9;_av6c = _av6c['replace'](/>\s+</g, '><');try {
        _an6vk = new window['Parser']['DOMParser']()['parseFromString'](_av6c, 'text/xml');
      } catch (u$fnes) {
        throw '需要引入xml解析库文件';
      }return _an6vk;
    }, kanvs['idx'] = 0x1, kanvs;
  }(),
      oqimhl = function () {
    function b0cr81() {}t5z9gd(b0cr81, 'laya.wx.mini.MiniImage');var hm4ji3 = b0cr81['prototype'];return hm4ji3['_loadImage'] = function (n6kav_) {
      var e_$vn = this,
          a0k6rc = ![];n6kav_['indexOf']('layaNativeDir/') == -0x1 && (a0k6rc = !![], n6kav_ = jmohq['formatURL'](n6kav_));if (!b81c0['getFileInfo'](n6kav_)) {
        if (n6kav_['indexOf']('http://') != -0x1 || n6kav_['indexOf']('https://') != -0x1) b81c0['downImg'](n6kav_, new ihqmlo(b0cr81, b0cr81['onDownImgCallBack'], [n6kav_, e_$vn]), n6kav_);else b0cr81['onCreateImage'](n6kav_, e_$vn, !![]);
      } else b0cr81['onCreateImage'](n6kav_, e_$vn, !a0k6rc);
    }, b0cr81['onDownImgCallBack'] = function (nak_vs, w7xgql, _$ksn) {
      if (!_$ksn) b0cr81['onCreateImage'](nak_vs, w7xgql);else w7xgql['onError'](null);
    }, b0cr81['onCreateImage'] = function (xlq7gw, t5dz2, neufs$) {
      neufs$ === void 0x0 && (neufs$ = ![]);var nvsk_$;if (!neufs$) {
        var c08b1 = b81c0['getFileInfo'](xlq7gw),
            ijmohq = c08b1['md5'];nvsk_$ = b81c0['getFileNativePath'](ijmohq);
      } else nvsk_$ = xlq7gw;if (t5dz2['imgCache'] == null) t5dz2['imgCache'] = {};var j4m3ih;function _ve() {
        j4m3ih['onload'] = null, j4m3ih['onerror'] = null, delete t5dz2['imgCache'][xlq7gw];
      };var ql7xgw = function () {
        _ve(), t5dz2['onLoaded'](j4m3ih);
      },
          o7lx = function () {
        _ve(), t5dz2['event']('error', 'Load image failed');
      };t5dz2['_type'] == 'nativeimage' ? (j4m3ih = new lox['window']['Image'](), j4m3ih['crossOrigin'] = '', j4m3ih['onload'] = ql7xgw, j4m3ih['onerror'] = o7lx, j4m3ih['src'] = nvsk_$, t5dz2['imgCache'][xlq7gw] = j4m3ih) : new q7xwg['create'](nvsk_$, { 'onload': ql7xgw, 'onerror': o7lx, 'onCreate': function (jmi3h4) {
          j4m3ih = jmi3h4, t5dz2['imgCache'][xlq7gw] = jmi3h4;
        } });
    }, b0cr81;
  }(),
      f3up = function () {
    function rack_6() {}return t5z9gd(rack_6, 'laya.wx.mini.MiniInput'), rack_6['_createInputElement'] = function () {
      g7x9wl['_initInput'](g7x9wl['area'] = lox['createElement']('textarea')), g7x9wl['_initInput'](g7x9wl['input'] = lox['createElement']('input')), g7x9wl['inputContainer'] = lox['createElement']('div'), g7x9wl['inputContainer']['style']['position'] = 'absolute', g7x9wl['inputContainer']['style']['zIndex'] = 0x186a0, lox['container']['appendChild'](g7x9wl['inputContainer']), g7x9wl['inputContainer']['setPos'] = function (olxwq, mjh) {
        g7x9wl['inputContainer']['style']['left'] = olxwq + 'px', g7x9wl['inputContainer']['style']['top'] = mjh + 'px';
      }, ji4h3m['stage']['on']('resize', null, rack_6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (m3ojhi) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), w9xl7g['_soundClass'] = olmqhi, w9xl7g['_musicClass'] = olmqhi;
    }, rack_6['_onStageResize'] = function () {
      var kc0ar = ji4h3m['stage']['_canvasTransform']['identity']();kc0ar['scale'](lox['width'] / ohqij['canvas']['width'] / vns$_['getPixelRatio'](), lox['height'] / ohqij['canvas']['height'] / vns$_['getPixelRatio']());
    }, rack_6['wxinputFocus'] = function (wzg7d9) {
      var qw7xlo = g7x9wl['inputElement']['target'];if (qw7xlo && !qw7xlo['editable']) return;j4uf['window']['wx']['offKeyboardConfirm'](), j4uf['window']['wx']['offKeyboardInput'](), j4uf['window']['wx']['showKeyboard']({ 'defaultValue': qw7xlo['text'], 'maxLength': qw7xlo['maxChars'], 'multiple': qw7xlo['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (wlq7gx) {}, 'fail': function (lqix7o) {} }), j4uf['window']['wx']['onKeyboardConfirm'](function (j3imh) {
        var up$ef4 = j3imh ? j3imh['value'] : '';qw7xlo['text'] = up$ef4, qw7xlo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), j4uf['window']['wx']['onKeyboardInput'](function (pf4uj3) {
        var wz97xg = pf4uj3 ? pf4uj3['value'] : '';if (!qw7xlo['multiline']) {
          if (wz97xg['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }qw7xlo['text'] = wz97xg, qw7xlo['event']('input');
      });
    }, rack_6['inputEnter'] = function () {
      g7x9wl['inputElement']['target']['focus'] = ![];
    }, rack_6['wxinputblur'] = function () {
      rack_6['hideKeyboard']();
    }, rack_6['hideKeyboard'] = function () {
      j4uf['window']['wx']['offKeyboardConfirm'](), j4uf['window']['wx']['offKeyboardInput'](), j4uf['window']['wx']['hideKeyboard']({ 'success': function (p34ju) {
          console['log']('隐藏键盘');
        }, 'fail': function (olqmx) {
          console['log']('隐藏键盘出错:' + (olqmx ? olqmx['errMsg'] : ''));
        } });
    }, rack_6;
  }(),
      snf$e = function () {
    function v$nesu() {}t5z9gd(v$nesu, 'laya.wx.mini.MiniLoader');var nuf$s = v$nesu['prototype'];return nuf$s['load'] = function (c806r1, xw7gz, nsv$e, v$euns, hlomiq) {
      nsv$e === void 0x0 && (nsv$e = !![]), hlomiq === void 0x0 && (hlomiq = ![]);var loxqi7 = this;loxqi7['_url'] = c806r1;if (c806r1['indexOf']('data:image') === 0x0) loxqi7['_type'] = xw7gz = 'image';else loxqi7['_type'] = xw7gz || (xw7gz = loxqi7['getTypeFromUrl'](c806r1));loxqi7['_cache'] = nsv$e, loxqi7['_data'] = null;var fjh4p3 = 'ascii';if (c806r1['indexOf']('.fnt') != -0x1) fjh4p3 = 'utf8';else xw7gz == 'arraybuffer' && (fjh4p3 = '');;var _r6ack = x9l7wg['getFileExtension'](c806r1);if (v$nesu['_fileTypeArr']['indexOf'](_r6ack) != -0x1) j4uf['EnvConfig']['load']['call'](this, c806r1, xw7gz, nsv$e, v$euns, hlomiq);else {
        if (!b81c0['getFileInfo'](c806r1)) {
          if (c806r1['indexOf']('layaNativeDir/') != -0x1) {
            if (j4uf['isZiYu']) {
              var nufe = b81c0['ziyuFileData'][c806r1];loxqi7['onLoaded'](nufe);return;
            } else {
              cosnole['log']('read read'), b81c0['read'](c806r1, fjh4p3, new ihqmlo(v$nesu, v$nesu['onReadNativeCallBack'], [fjh4p3, c806r1, xw7gz, nsv$e, v$euns, hlomiq, loxqi7]));return;
            }
          }if (jmohq['rootPath'] == '') var uf34jp = c806r1;else uf34jp = c806r1['split'](jmohq['rootPath'])[0x0];c806r1['indexOf']('http://') != -0x1 || c806r1['indexOf']('https://') != -0x1 ? j4uf['EnvConfig']['load']['call'](loxqi7, c806r1, xw7gz, nsv$e, v$euns, hlomiq) : b81c0['readFile'](uf34jp, fjh4p3, new ihqmlo(v$nesu, v$nesu['onReadNativeCallBack'], [fjh4p3, c806r1, xw7gz, nsv$e, v$euns, hlomiq, loxqi7]), c806r1);
        } else j4uf['EnvConfig']['load']['call'](this, c806r1, xw7gz, nsv$e, v$euns, hlomiq);
      }
    }, nuf$s['resMgrLoad'] = function (gd9z5w, $nsveu, se_v$n, zt25, rac608, $pu, x7wgz) {
      se_v$n === void 0x0 && (se_v$n = 0x0), zt25 === void 0x0 && (zt25 = ![]), rac608 === void 0x0 && (rac608 = ![]), $pu === void 0x0 && ($pu = 0x0), x7wgz === void 0x0 && (x7wgz = 0x3), gd9z5w['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gd9z5w), j4uf['EnvConfig']['resMgrLoad'](gd9z5w, (td259z, nu$fes, jmph) => {
        v$nesu['prototype']['resMgrLoadCallBack'](td259z, nu$fes, jmph, $nsveu);
      }, se_v$n, zt25, rac608, $pu, x7wgz);
    }, nuf$s['resMgrLoadCallBack'] = function (oxwl7q, zxg7w9, _$nsv, xo7ilq) {
      console['log']('buff:::', oxwl7q, _$nsv, b81c0['fileNativeDir'] + '///' + b81c0['fileListName']), xo7ilq(oxwl7q, zxg7w9, _$nsv);
    }, nuf$s['clearRes'] = function (pjm4, iq7l) {
      iq7l === void 0x0 && (iq7l = ![]);var ck6ar_ = this;ck6ar_['clearRes'](pjm4, iq7l);var r0 = b81c0['getFileInfo'](pjm4);if (r0 && (pjm4['indexOf']('http://') != -0x1 || pjm4['indexOf']('https://') != -0x1)) {
        var hm4ij3 = r0['md5'],
            x9l7g = b81c0['getFileNativePath'](hm4ij3);b81c0['remove'](x9l7g);
      }
    }, v$nesu['onReadNativeCallBack'] = function (us$ven, j4u3pf, w7z9gx, e34fup, u3, ry180b, esfp$, vnk6, e$f4up) {
      e34fup === void 0x0 && (e34fup = !![]), ry180b === void 0x0 && (ry180b = ![]), vnk6 === void 0x0 && (vnk6 = 0x0);if (!vnk6) {
        var nue$sv;if (w7z9gx == 'json' || w7z9gx == 'atlas') nue$sv = j4uf['getJson'](e$f4up['data']);else w7z9gx == 'xml' ? nue$sv = x9l7wg['parseXMLFromString'](e$f4up['data']) : nue$sv = e$f4up['data'];esfp$['onLoaded'](nue$sv), !j4uf['isZiYu'] && j4uf['isPosMsgYu'] && w7z9gx != 'arraybuffer' && wx['postMessage']({ 'url': j4u3pf, 'data': nue$sv, 'isLoad': !![] });
      } else vnk6 == 0x1 && j4uf['EnvConfig']['load']['call'](esfp$, j4u3pf, w7z9gx, e34fup, u3, ry180b);
    }, ilxq(v$nesu, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), v$nesu;
  }(),
      b81c0 = function (_knav6) {
    function ak_nvs() {
      ak_nvs['__super']['call'](this);;
    }return t5z9gd(ak_nvs, 'laya.wx.mini.MiniFileMgr', _knav6), ak_nvs['isLoadFile'] = function (kvsn$_) {
      return ak_nvs['_fileTypeArr']['indexOf'](kvsn$_) != -0x1 ? !![] : ![];
    }, ak_nvs['getFileInfo'] = function (jhp3m) {
      var vnu$ = jhp3m['split']('?')[0x0],
          gw7qxl = ak_nvs['filesListObj'][vnu$];if (gw7qxl == null) return null;else return gw7qxl;return null;
    }, ak_nvs['onFileUpdate'] = function (c_6ark, c6_rk) {
      var pu4fe3 = c_6ark['split']('/'),
          rk0ac6 = pu4fe3[pu4fe3['length'] - 0x1],
          oi7lx = ak_nvs['getFileInfo'](c6_rk);if (oi7lx == null) ak_nvs['onSaveFile'](c6_rk, rk0ac6);else {
        if (oi7lx['readyUrl'] != c6_rk) ak_nvs['remove'](rk0ac6, c6_rk);
      }
    }, ak_nvs['exits'] = function (p3feu4, jihm34) {
      var zt9dg5 = ak_nvs['getFileNativePath'](p3feu4);ak_nvs['fs']['getFileInfo']({ 'filePath': zt9dg5, 'success': function (p4$e) {
          jihm34 != null && jihm34['runWith']([0x0, p4$e]);
        }, 'fail': function (_s$nkv) {
          jihm34 != null && jihm34['runWith']([0x1, _s$nkv]);
        } });
    }, ak_nvs['read'] = function (lqwo, mqoxi, zd9t5, ansvk) {
      mqoxi === void 0x0 && (mqoxi = 'ascill'), ansvk === void 0x0 && (ansvk = '');var xoil7q;ansvk != '' ? xoil7q = ak_nvs['getFileNativePath'](lqwo) : xoil7q = lqwo, ak_nvs['fs']['readFile']({ 'filePath': xoil7q, 'encoding': mqoxi, 'success': function (u$4e) {
          zd9t5 != null && zd9t5['runWith']([0x0, u$4e]);
        }, 'fail': function (ka6c_v) {
          if (ka6c_v && ansvk != '') ak_nvs['down'](ansvk, mqoxi, zd9t5, ansvk);else zd9t5 != null && zd9t5['runWith']([0x1]);
        } });
    }, ak_nvs['readNativeFile'] = function (eus$, l7ixq) {
      ak_nvs['fs']['readFile']({ 'filePath': eus$, 'encoding': '', 'success': function (wzg59d) {
          l7ixq != null && l7ixq['runWith']([0x0]);
        }, 'fail': function (ijm3o) {
          l7ixq != null && l7ixq['runWith']([0x1]);
        } });
    }, ak_nvs['down'] = function (r80ac6, es$v_n, olqi7, n_kav6) {
      es$v_n === void 0x0 && (es$v_n = 'ascill'), n_kav6 === void 0x0 && (n_kav6 = '');var e$4pfu = ak_nvs['getFileNativePath'](n_kav6),
          iolqmx = ak_nvs['wxdown']({ 'url': r80ac6, 'filePath': e$4pfu, 'success': function (iqx) {
          if (iqx['statusCode'] === 0xc8) ak_nvs['readFile'](iqx['filePath'], es$v_n, olqi7, n_kav6);
        }, 'fail': function (n_vk$s) {
          olqi7 != null && olqi7['runWith']([0x1, n_vk$s]);
        } });iolqmx['onProgressUpdate'](function (fhp) {
        olqi7 != null && olqi7['runWith']([0x2, fhp['progress']]);
      });
    }, ak_nvs['readFile'] = function (pjfu, euns, limhq, bry018) {
      euns === void 0x0 && (euns = 'ascill'), bry018 === void 0x0 && (bry018 = ''), ak_nvs['fs']['readFile']({ 'filePath': pjfu, 'encoding': euns, 'success': function (p4f$) {
          if (pjfu['indexOf']('http://') != -0x1 || pjfu['indexOf']('https://') != -0x1) ak_nvs['onFileUpdate'](pjfu, bry018);limhq != null && limhq['runWith']([0x0, p4f$]);
        }, 'fail': function (k_6ac) {
          if (k_6ac) limhq != null && limhq['runWith']([0x1, k_6ac]);
        } });
    }, ak_nvs['downImg'] = function (pfj4u3, vsakn_, homi) {
      homi === void 0x0 && (homi = '');var _vne = ak_nvs['wxdown']({ 'url': pfj4u3, 'success': function (v6nk) {
          v6nk['statusCode'] === 0xc8 && ak_nvs['copyFile'](v6nk['tempFilePath'], homi, vsakn_);
        }, 'fail': function (ckr6a_) {
          vsakn_ != null && vsakn_['runWith']([0x1, ckr6a_]);
        } });
    }, ak_nvs['copyFile'] = function (dg5z9w, mjph34, gd79zw) {
      var oihmq = dg5z9w['split']('/'),
          olihqm = oihmq[oihmq['length'] - 0x1],
          g9x7wl = mjph34['split']('?')[0x0],
          nsev$_ = ak_nvs['getFileInfo'](mjph34),
          wg97zd = ak_nvs['getFileNativePath'](olihqm);ak_nvs['fs']['copyFile']({ 'srcPath': dg5z9w, 'destPath': wg97zd, 'success': function (ijmh4) {
          if (!nsev$_) ak_nvs['onSaveFile'](mjph34, olihqm), gd79zw != null && gd79zw['runWith']([0x0]);else {
            if (nsev$_['readyUrl'] != mjph34) ak_nvs['remove'](olihqm, mjph34, gd79zw);
          }
        }, 'fail': function (mjqhio) {
          gd79zw != null && gd79zw['runWith']([0x1, mjqhio]);
        } });
    }, ak_nvs['getFileNativePath'] = function (pfu34j) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pfu34j;
    }, ak_nvs['remove'] = function (uf3j, gd9zw7, li7) {
      gd9zw7 === void 0x0 && (gd9zw7 = '');var e$unvs = ak_nvs['getFileInfo'](gd9zw7),
          nk6_va = ak_nvs['getFileNativePath'](e$unvs['md5']);ji4h3m['loader']['clearRes'](e$unvs['readyUrl']), ak_nvs['fs']['unlink']({ 'filePath': nk6_va, 'success': function (qilox7) {
          if (gd9zw7 != '') ak_nvs['onSaveFile'](gd9zw7, uf3j);li7 != null && li7['runWith']([0x0]);
        }, 'fail': function (akc6_r) {} });
    }, ak_nvs['onSaveFile'] = function (k6r_ac, t52dz) {
      var u4$p = k6r_ac['split']('?')[0x0];ak_nvs['filesListObj'][u4$p] = { 'md5': t52dz, 'readyUrl': k6r_ac }, ak_nvs['fs']['writeFile']({ 'filePath': ak_nvs['fileNativeDir'] + '/' + ak_nvs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ak_nvs['filesListObj']), 'success': function (lwqxo7) {
          console['log']('写入测试测试成功：', lwqxo7);
        }, 'fail': function (car0k) {
          console['log']('写入测试测试失败：', car0k);
        } });
    }, ak_nvs['existDir'] = function (qho, j4mi3h) {
      ak_nvs['fs']['mkdir']({ 'dirPath': qho, 'success': function (ak_v6n) {
          j4mi3h != null && j4mi3h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (dt9g5z) {
          if (dt9g5z['errMsg']['indexOf']('file already exists') != -0x1) ak_nvs['readSync'](ak_nvs['fileListName'], 'utf8', j4mi3h);else j4mi3h != null && j4mi3h['runWith']([0x1, dt9g5z]);
        } });
    }, ak_nvs['readSync'] = function (kvs$_n, _cakv6, j3ph4m, peufs) {
      _cakv6 === void 0x0 && (_cakv6 = 'ascill'), peufs === void 0x0 && (peufs = '');var hj4mp3 = ak_nvs['getFileNativePath'](kvs$_n),
          ep4f3;try {
        ep4f3 = ak_nvs['fs']['readFileSync'](hj4mp3), j3ph4m != null && j3ph4m['runWith']([0x0, { 'data': ep4f3 }]);
      } catch (jp43uf) {
        j3ph4m != null && j3ph4m['runWith']([0x1]);
      }
    }, ak_nvs['readCache'] = function () {}, ak_nvs['writeCache'] = function (w7xg9z) {
      var va_kns = readyUrl['split']('?')[0x0];ak_nvs['filesListObj'][va_kns] = { 'md5': md5Name, 'readyUrl': readyUrl }, ak_nvs['fs']['writeFile']({ 'filePath': ak_nvs['fileNativeDir'] + '/' + ak_nvs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ak_nvs['filesListObj']), 'success': function (qmixl) {}, 'fail': function (z29) {} });
    }, ak_nvs['setNativeFileDir'] = function (oqli7x) {
      ak_nvs['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oqli7x;
    }, ak_nvs['filesListObj'] = {}, ak_nvs['fileNativeDir'] = null, ak_nvs['fileListName'] = 'layaairfiles.txt', ak_nvs['ziyuFileData'] = {}, ilxq(ak_nvs, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), ak_nvs;
  }(r0168c),
      olmqhi = function (w7x9) {
    function t9z5g() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], t9z5g['__super']['call'](this), this['_sound'] = t9z5g['_createSound']();
    }t5z9gd(t9z5g, 'laya.wx.mini.MiniSound', w7x9);var fe43 = t9z5g['prototype'];return fe43['load'] = function (vka6c) {
      var avksn_ = this;vka6c = jmohq['formatURL'](vka6c), this['url'] = vka6c;if (t9z5g['_audioCache'][vka6c]) {
        this['event']('complete');return;
      }function h3jmio() {
        if (t9z5g['_null'] != undefined) avksn_['_sound']['onCanplay'](t9z5g['_null']), avksn_['_sound']['onError'](t9z5g['_null']);else try {
          avksn_['_sound']['onCanplay'](null), avksn_['_sound']['onError'](null), t9z5g['_null'] = null;
        } catch (_ckva6) {
          console['warn']('[wxmini] _clearSound:' + _ckva6), avksn_['_sound']['onCanplay']($u4fpe), avksn_['_sound']['onError']($u4fpe), t9z5g['_null'] = $u4fpe;
        }
      }function lxqw() {
        h3jmio(), hi3jm['loaded'] = !![], hi3jm['event']('complete'), t9z5g['_audioCache'][hi3jm['url']] = hi3jm;
      }function hjmoi3(_v6an) {
        console['error']('errCode=' + _v6an['errCode'] + '  errMsg=' + _v6an['errMsg']), h3jmio(), hi3jm['event']('error');
      }function $u4fpe() {}this['_sound']['onCanplay'](lxqw), this['_sound']['onError'](hjmoi3), this['_sound']['src'] = vka6c;var hi3jm = this;
    }, fe43['play'] = function (nk, oxilmq) {
      nk === void 0x0 && (nk = 0x0), oxilmq === void 0x0 && (oxilmq = 0x0);var kavn_6;if (this['url'] == w9xl7g['_tMusic']) {
        if (!t9z5g['_musicAudio']) t9z5g['_musicAudio'] = t9z5g['_createSound']();kavn_6 = t9z5g['_musicAudio'];
      } else kavn_6 = t9z5g['_createSound']();kavn_6['src'] = this['url'];var xiol7 = new rc80(kavn_6);return xiol7['url'] = this['url'], xiol7['loops'] = oxilmq, xiol7['startTime'] = nk, xiol7['play'](), w9xl7g['addChannel'](xiol7), xiol7;
    }, fe43['dispose'] = function () {
      var vsn_$e = t9z5g['_audioCache'][this['url']];vsn_$e && (vsn_$e['src'] = '', delete t9z5g['_audioCache'][this['url']]);
    }, zdw7g9(0x0, fe43, 'duration', function () {
      return this['_sound']['duration'];
    }), t9z5g['_createSound'] = function () {
      return t9z5g['_id']++, j4uf['window']['wx']['createInnerAudioContext']();
    }, t9z5g['_musicAudio'] = null, t9z5g['_id'] = 0x0, t9z5g['_audioCache'] = {}, t9z5g['_null'] = undefined, t9z5g;
  }(r0168c),
      rc80 = function (u$vne) {
    function fuj3(jo3im) {
      this['_audio'] = null, this['_onEnd'] = null, fuj3['__super']['call'](this), this['_audio'] = jo3im, this['_onEnd'] = x9l7wg['bind'](this['__onEnd'], this), jo3im['onEnded'](this['_onEnd']);
    }t5z9gd(fuj3, 'laya.wx.mini.MiniSoundChannel', u$vne);var a60c8r = fuj3['prototype'];return a60c8r['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ji4h3m['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, a60c8r['__onNull'] = function () {}, a60c8r['play'] = function () {
      this['isStopped'] = ![], w9xl7g['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, a60c8r['stop'] = function () {
      this['isStopped'] = !![], w9xl7g['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (fuj3['_null'] != undefined) this['_audio']['onEnded'](fuj3['_null']);else try {
        this['_audio']['onEnded'](null), fuj3['_null'] = null;
      } catch ($uesv) {
        console['warn']('[wxmini] stop:' + $uesv), this['_audio']['onEnded'](x9l7wg['bind'](this['__onNull'], this)), fuj3['_null'] = x9l7wg['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, a60c8r['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, a60c8r['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], w9xl7g['addChannel'](this), this['_audio']['play']();
    }, zdw7g9(0x0, a60c8r, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), zdw7g9(0x0, a60c8r, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), zdw7g9(0x0, a60c8r, 'volume', function () {
      return 0x1;
    }, function (v$esn) {}), fuj3['_null'] = undefined, fuj3;
  }(pj3hm4);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var rk_ in Laya) {
    var a_c6v = Laya[rk_];a_c6v && a_c6v['__isclass'] && (exports[rk_] = a_c6v);
  }
});