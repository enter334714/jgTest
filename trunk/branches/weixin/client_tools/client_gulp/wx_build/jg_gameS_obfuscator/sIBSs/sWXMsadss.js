var K = wx.$S;
(function (window, document, ovzr3) {
  var z9k3o = ovzr3['un'],
      ya5s = ovzr3['uns'],
      sqpg = ovzr3['static'],
      m72xn = ovzr3['class'],
      c0mx = ovzr3['getset'],
      hd45$a = ovzr3['__newvec'],
      mnx_i = laya['utils']['Browser'],
      eor4u3 = laya['events']['Event'],
      jqpg81 = laya['events']['EventDispatcher'],
      c9kw0_ = laya['resource']['HTMLImage'],
      zvok93 = laya['utils']['Handler'],
      gjqsy = laya['display']['Input'],
      qhpsy5 = laya['net']['Loader'],
      ysh5q = laya['maths']['Matrix'],
      c9z0kw = laya['renders']['Render'],
      b6g81 = laya['utils']['RunDriver'],
      phd5sy = laya['media']['Sound'],
      phgqsy = laya['media']['SoundChannel'],
      kzc09w = laya['media']['SoundManager'],
      gpjq = laya['display']['Stage'],
      dyha = laya['net']['URL'],
      x_in = laya['utils']['Utils'],
      iw_90c = function () {
    function yh5$() {}return m72xn(yh5$, 'laya.wx.mini.MiniAdpter'), yh5$['getJson'] = function (ozr) {
      return JSON['parse'](ozr);
    }, yh5$['init'] = function (ic_mx, yhsad5) {
      ic_mx === void 0x0 && (ic_mx = ![]), yhsad5 === void 0x0 && (yhsad5 = ![]);if (yh5$['_inited']) return;yh5$['window'] = window;if (yh5$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;yh5$['_inited'] = !![], yh5$['isZiYu'] = yhsad5, yh5$['isPosMsgYu'] = ic_mx, yh5$['EnvConfig'] = {}, !yh5$['isZiYu'] && (lbf68['setNativeFileDir']('/layaairGame'), lbf68['existDir'](lbf68['fileNativeDir'], zvok93['create'](yh5$, yh5$['onMkdirCallBack']))), yh5$['window']['focus'] = function () {}, ovzr3['getUrlPath'] = function () {}, yh5$['window']['logtime'] = function (oer3u4) {}, yh5$['window']['alertTimeLog'] = function (r4$3) {}, yh5$['window']['resetShareInfo'] = function () {}, yh5$['window']['CanvasRenderingContext2D'] = function () {}, yh5$['window']['CanvasRenderingContext2D']['prototype'] = yh5$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yh5$['window']['document']['body']['appendChild'] = function () {}, yh5$['EnvConfig']['pixelRatioInt'] = 0x0, b6g81['getPixelRatio'] = yh5$['pixelRatio'], yh5$['_preCreateElement'] = mnx_i['createElement'], mnx_i['createElement'] = yh5$['createElement'], b6g81['createShaderCondition'] = yh5$['createShaderCondition'], x_in['parseXMLFromString'] = yh5$['parseXMLFromString'], gjqsy['_createInputElement'] = f1l86['_createInputElement'], yh5$['EnvConfig']['load'] = qhpsy5['prototype']['load'], qhpsy5['prototype']['load'] = r34['prototype']['load'], yh5$['isZiYu'] && ic_mx && wx['onMessage'](function ($ad45) {
        $ad45['isLoad'] && (lbf68['ziyuFileData'][$ad45['url']] = $ad45['data']);
      });
    }, yh5$['onMkdirCallBack'] = function (ok3vz9, sphygq) {
      if (!ok3vz9) lbf68['filesListObj'] = JSON['parse'](sphygq['data']);
    }, yh5$['pixelRatio'] = function () {
      if (!yh5$['EnvConfig']['pixelRatioInt']) try {
        var _0cxiw = wx['getSystemInfoSync']();return yh5$['EnvConfig']['pixelRatioInt'] = _0cxiw['pixelRatio'], _0cxiw = _0cxiw, _0cxiw['pixelRatio'];
      } catch (yhp5sd) {}return yh5$['EnvConfig']['pixelRatioInt'];
    }, yh5$['createElement'] = function (qshpyg) {
      if (qshpyg == 'canvas') {
        var au4$re;return yh5$['idx'] == 0x1 ? yh5$['isZiYu'] ? (au4$re = sharedCanvas, au4$re['style'] = {}) : au4$re = window['canvas'] : au4$re = window['wx']['createCanvas'](), yh5$['idx']++, au4$re;
      } else {
        if (qshpyg == 'textarea' || qshpyg == 'input') return yh5$['onCreateInput'](qshpyg);else {
          if (qshpyg == 'div') {
            var e34ur = yh5$['_preCreateElement'](qshpyg);return e34ur['contains'] = function (ha4$5d) {
              return null;
            }, e34ur['removeChild'] = function (hyd$a5) {}, e34ur;
          } else return yh5$['_preCreateElement'](qshpyg);
        }
      }
    }, yh5$['onCreateInput'] = function (pjgq1) {
      var m_0i = yh5$['_preCreateElement'](pjgq1);return m_0i['focus'] = f1l86['wxinputFocus'], m_0i['blur'] = f1l86['wxinputblur'], m_0i['style'] = {}, m_0i['value'] = 0x0, m_0i['parentElement'] = {}, m_0i['placeholder'] = {}, m_0i['type'] = {}, m_0i['setColor'] = function (ya5dsh) {}, m_0i['setType'] = function (ue3ro4) {}, m_0i['setFontFace'] = function (ruveo) {}, m_0i['addEventListener'] = function (j816b) {}, m_0i['contains'] = function (b86g) {
        return null;
      }, m_0i['removeChild'] = function (ysqhp) {}, m_0i;
    }, yh5$['createShaderCondition'] = function (zv3uo) {
      var roe3v = this,
          au4$er = function () {
        var v3ozru = zv3uo;return roe3v[zv3uo['replace']('this.', '')];
      };return au4$er;
    }, yh5$['EnvConfig'] = null, yh5$['window'] = null, yh5$['_preCreateElement'] = null, yh5$['_inited'] = ![], yh5$['wxRequest'] = null, yh5$['systemInfo'] = null, yh5$['version'] = '0.0.1', yh5$['isZiYu'] = ![], yh5$['isPosMsgYu'] = ![], yh5$['parseXMLFromString'] = function (qj1gb) {
      var zw09c, mic2_x;qj1gb = qj1gb['replace'](/>\s+</g, '><');try {
        zw09c = new window['Parser']['DOMParser']()['parseFromString'](qj1gb, 'text/xml');
      } catch (_cxm0) {
        throw '需要引入xml解析库文件';
      }return zw09c;
    }, yh5$['idx'] = 0x1, yh5$;
  }(),
      d5$4ea = function () {
    function rkozv3() {}m72xn(rkozv3, 'laya.wx.mini.MiniImage');var m2n_x = rkozv3['prototype'];return m2n_x['_loadImage'] = function (vork) {
      var $4h5da = this,
          z9ck0w = ![];vork['indexOf']('layaNativeDir/') == -0x1 && (z9ck0w = !![], vork = dyha['formatURL'](vork));if (!lbf68['getFileInfo'](vork)) {
        if (vork['indexOf']('http://') != -0x1 || vork['indexOf']('https://') != -0x1) lbf68['downImg'](vork, new zvok93(rkozv3, rkozv3['onDownImgCallBack'], [vork, $4h5da]), vork);else rkozv3['onCreateImage'](vork, $4h5da, !![]);
      } else rkozv3['onCreateImage'](vork, $4h5da, !z9ck0w);
    }, rkozv3['onDownImgCallBack'] = function (psq1, _0icxm, o3vu) {
      if (!o3vu) rkozv3['onCreateImage'](psq1, _0icxm);else _0icxm['onError'](null);
    }, rkozv3['onCreateImage'] = function (ysgqjp, zkwov9, $r4eau) {
      $r4eau === void 0x0 && ($r4eau = ![]);var vw09zk;if (!$r4eau) {
        var qjps1g = lbf68['getFileInfo'](ysgqjp),
            c0ix_w = qjps1g['md5'];vw09zk = lbf68['getFileNativePath'](c0ix_w);
      } else vw09zk = ysgqjp;if (zkwov9['imgCache'] == null) zkwov9['imgCache'] = {};var kzv3or;function s5dp() {
        kzv3or['onload'] = null, kzv3or['onerror'] = null, delete zkwov9['imgCache'][ysgqjp];
      };var kz9v3o = function () {
        s5dp(), zkwov9['onLoaded'](kzv3or);
      },
          ypgqsh = function () {
        s5dp(), zkwov9['event']('error', 'Load image failed');
      };zkwov9['_type'] == 'nativeimage' ? (kzv3or = new mnx_i['window']['Image'](), kzv3or['crossOrigin'] = '', kzv3or['onload'] = kz9v3o, kzv3or['onerror'] = ypgqsh, kzv3or['src'] = vw09zk, zkwov9['imgCache'][ysgqjp] = kzv3or) : new c9kw0_['create'](vw09zk, { 'onload': kz9v3o, 'onerror': ypgqsh, 'onCreate': function (uoe3) {
          kzv3or = uoe3, zkwov9['imgCache'][ysgqjp] = uoe3;
        } });
    }, rkozv3;
  }(),
      f1l86 = function () {
    function xt27() {}return m72xn(xt27, 'laya.wx.mini.MiniInput'), xt27['_createInputElement'] = function () {
      gjqsy['_initInput'](gjqsy['area'] = mnx_i['createElement']('textarea')), gjqsy['_initInput'](gjqsy['input'] = mnx_i['createElement']('input')), gjqsy['inputContainer'] = mnx_i['createElement']('div'), gjqsy['inputContainer']['style']['position'] = 'absolute', gjqsy['inputContainer']['style']['zIndex'] = 0x186a0, mnx_i['container']['appendChild'](gjqsy['inputContainer']), gjqsy['inputContainer']['setPos'] = function (t7x2n, pqjgy) {
        gjqsy['inputContainer']['style']['left'] = t7x2n + 'px', gjqsy['inputContainer']['style']['top'] = pqjgy + 'px';
      }, ovzr3['stage']['on']('resize', null, xt27['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sgjq1) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), kzc09w['_soundClass'] = ou4r, kzc09w['_musicClass'] = ou4r;
    }, xt27['_onStageResize'] = function () {
      var our3 = ovzr3['stage']['_canvasTransform']['identity']();our3['scale'](mnx_i['width'] / c9z0kw['canvas']['width'] / b6g81['getPixelRatio'](), mnx_i['height'] / c9z0kw['canvas']['height'] / b6g81['getPixelRatio']());
    }, xt27['wxinputFocus'] = function (w90i_) {
      var ovru = gjqsy['inputElement']['target'];if (ovru && !ovru['editable']) return;iw_90c['window']['wx']['offKeyboardConfirm'](), iw_90c['window']['wx']['offKeyboardInput'](), iw_90c['window']['wx']['showKeyboard']({ 'defaultValue': ovru['text'], 'maxLength': ovru['maxChars'], 'multiple': ovru['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (ro3eu4) {}, 'fail': function (ov3zk9) {} }), iw_90c['window']['wx']['onKeyboardConfirm'](function (ixw0) {
        var e$d4 = ixw0 ? ixw0['value'] : '';ovru['text'] = e$d4, ovru['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), iw_90c['window']['wx']['onKeyboardInput'](function (z9wck0) {
        var voz3ur = z9wck0 ? z9wck0['value'] : '';if (!ovru['multiline']) {
          if (voz3ur['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }ovru['text'] = voz3ur, ovru['event']('input');
      });
    }, xt27['inputEnter'] = function () {
      gjqsy['inputElement']['target']['focus'] = ![];
    }, xt27['wxinputblur'] = function () {
      xt27['hideKeyboard']();
    }, xt27['hideKeyboard'] = function () {
      iw_90c['window']['wx']['offKeyboardConfirm'](), iw_90c['window']['wx']['offKeyboardInput'](), iw_90c['window']['wx']['hideKeyboard']({ 'success': function (hy$a) {
          console['log']('隐藏键盘');
        }, 'fail': function (zovwk9) {
          console['log']('隐藏键盘出错:' + (zovwk9 ? zovwk9['errMsg'] : ''));
        } });
    }, xt27;
  }(),
      r34 = function () {
    function _cm2x() {}m72xn(_cm2x, 'laya.wx.mini.MiniLoader');var _0ckw9 = _cm2x['prototype'];return _0ckw9['load'] = function (w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure) {
      b8l1f6 === void 0x0 && (b8l1f6 = !![]), o3vure === void 0x0 && (o3vure = ![]);var mn_x2 = this;mn_x2['_url'] = w_09c;if (w_09c['indexOf']('data:image') === 0x0) mn_x2['_type'] = a$5hyd = 'image';else mn_x2['_type'] = a$5hyd || (a$5hyd = mn_x2['getTypeFromUrl'](w_09c));mn_x2['_cache'] = b8l1f6, mn_x2['_data'] = null;var bj68g = 'ascii';if (w_09c['indexOf']('.fnt') != -0x1) bj68g = 'utf8';else a$5hyd == 'arraybuffer' && (bj68g = '');;var n27t = x_in['getFileExtension'](w_09c);if (_cm2x['_fileTypeArr']['indexOf'](n27t) != -0x1) iw_90c['EnvConfig']['load']['call'](this, w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure);else {
        if (!lbf68['getFileInfo'](w_09c)) {
          if (w_09c['indexOf']('layaNativeDir/') != -0x1) {
            if (iw_90c['isZiYu']) {
              var hd5syp = lbf68['ziyuFileData'][w_09c];mn_x2['onLoaded'](hd5syp);return;
            } else {
              cosnole['log']('read read'), lbf68['read'](w_09c, bj68g, new zvok93(_cm2x, _cm2x['onReadNativeCallBack'], [bj68g, w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure, mn_x2]));return;
            }
          }if (dyha['rootPath'] == '') var $dhy = w_09c;else $dhy = w_09c['split'](dyha['rootPath'])[0x0];w_09c['indexOf']('http://') != -0x1 || w_09c['indexOf']('https://') != -0x1 ? iw_90c['EnvConfig']['load']['call'](mn_x2, w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure) : lbf68['readFile']($dhy, bj68g, new zvok93(_cm2x, _cm2x['onReadNativeCallBack'], [bj68g, w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure, mn_x2]), w_09c);
        } else iw_90c['EnvConfig']['load']['call'](this, w_09c, a$5hyd, b8l1f6, qgs1pj, o3vure);
      }
    }, _0ckw9['resMgrLoad'] = function (yd5as, zvo3k, _nim, ck9w0_, e$34ur, x7tnm, hqsyg) {
      _nim === void 0x0 && (_nim = 0x0), ck9w0_ === void 0x0 && (ck9w0_ = ![]), e$34ur === void 0x0 && (e$34ur = ![]), x7tnm === void 0x0 && (x7tnm = 0x0), hqsyg === void 0x0 && (hqsyg = 0x3), yd5as['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yd5as), iw_90c['EnvConfig']['resMgrLoad'](yd5as, (x_0cw, da45h, zrov3k) => {
        _cm2x['prototype']['resMgrLoadCallBack'](x_0cw, da45h, zrov3k, zvo3k);
      }, _nim, ck9w0_, e$34ur, x7tnm, hqsyg);
    }, _0ckw9['resMgrLoadCallBack'] = function (v3krzo, er$34u, ntm7x, dhs5yp) {
      console['log']('buff:::', v3krzo, ntm7x, lbf68['fileNativeDir'] + '///' + lbf68['fileListName']), dhs5yp(v3krzo, er$34u, ntm7x);
    }, _0ckw9['clearRes'] = function (c_xmi2, $45dae) {
      $45dae === void 0x0 && ($45dae = ![]);var rzv3k = this;rzv3k['clearRes'](c_xmi2, $45dae);var kc_w = lbf68['getFileInfo'](c_xmi2);if (kc_w && (c_xmi2['indexOf']('http://') != -0x1 || c_xmi2['indexOf']('https://') != -0x1)) {
        var okrz = kc_w['md5'],
            xc0m_ = lbf68['getFileNativePath'](okrz);lbf68['remove'](xc0m_);
      }
    }, _cm2x['onReadNativeCallBack'] = function (l18j6b, j1bg86, oz9wk, zw9v0k, $aru4e, hd45a$, e$4ru3, u34e$, sh5dy) {
      zw9v0k === void 0x0 && (zw9v0k = !![]), hd45a$ === void 0x0 && (hd45a$ = ![]), u34e$ === void 0x0 && (u34e$ = 0x0);if (!u34e$) {
        var uzvor3;if (oz9wk == 'json' || oz9wk == 'atlas') uzvor3 = iw_90c['getJson'](sh5dy['data']);else oz9wk == 'xml' ? uzvor3 = x_in['parseXMLFromString'](sh5dy['data']) : uzvor3 = sh5dy['data'];e$4ru3['onLoaded'](uzvor3), !iw_90c['isZiYu'] && iw_90c['isPosMsgYu'] && oz9wk != 'arraybuffer' && wx['postMessage']({ 'url': j1bg86, 'data': uzvor3, 'isLoad': !![] });
      } else u34e$ == 0x1 && iw_90c['EnvConfig']['load']['call'](e$4ru3, j1bg86, oz9wk, zw9v0k, $aru4e, hd45a$);
    }, sqpg(_cm2x, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), _cm2x;
  }(),
      lbf68 = function (gjsy) {
    function h45() {
      h45['__super']['call'](this);;
    }return m72xn(h45, 'laya.wx.mini.MiniFileMgr', gjsy), h45['isLoadFile'] = function (sqghy) {
      return h45['_fileTypeArr']['indexOf'](sqghy) != -0x1 ? !![] : ![];
    }, h45['getFileInfo'] = function (icw0_) {
      var zkw09 = icw0_['split']('?')[0x0],
          rokvz = h45['filesListObj'][zkw09];if (rokvz == null) return null;else return rokvz;return null;
    }, h45['onFileUpdate'] = function (v3zuo, xin2m) {
      var _m2ni = v3zuo['split']('/'),
          jgqb8 = _m2ni[_m2ni['length'] - 0x1],
          mi_xc2 = h45['getFileInfo'](xin2m);if (mi_xc2 == null) h45['onSaveFile'](xin2m, jgqb8);else {
        if (mi_xc2['readyUrl'] != xin2m) h45['remove'](jgqb8, xin2m);
      }
    }, h45['exits'] = function (k39voz, da$e5) {
      var cz9w0k = h45['getFileNativePath'](k39voz);h45['fs']['getFileInfo']({ 'filePath': cz9w0k, 'success': function (j8g1q) {
          da$e5 != null && da$e5['runWith']([0x0, j8g1q]);
        }, 'fail': function (kcw0_9) {
          da$e5 != null && da$e5['runWith']([0x1, kcw0_9]);
        } });
    }, h45['read'] = function (lbf816, qbg18, y$a5h, z3k9vo) {
      qbg18 === void 0x0 && (qbg18 = 'ascill'), z3k9vo === void 0x0 && (z3k9vo = '');var kr3ozv;z3k9vo != '' ? kr3ozv = h45['getFileNativePath'](lbf816) : kr3ozv = lbf816, h45['fs']['readFile']({ 'filePath': kr3ozv, 'encoding': qbg18, 'success': function (uer34) {
          y$a5h != null && y$a5h['runWith']([0x0, uer34]);
        }, 'fail': function (qygj) {
          if (qygj && z3k9vo != '') h45['down'](z3k9vo, qbg18, y$a5h, z3k9vo);else y$a5h != null && y$a5h['runWith']([0x1]);
        } });
    }, h45['readNativeFile'] = function (w_cix, qjpsyg) {
      h45['fs']['readFile']({ 'filePath': w_cix, 'encoding': '', 'success': function (h$ay5) {
          qjpsyg != null && qjpsyg['runWith']([0x0]);
        }, 'fail': function (eu$r34) {
          qjpsyg != null && qjpsyg['runWith']([0x1]);
        } });
    }, h45['down'] = function (or3kzv, j6bl1, r$aue4, yh$ad5) {
      j6bl1 === void 0x0 && (j6bl1 = 'ascill'), yh$ad5 === void 0x0 && (yh$ad5 = '');var zkc90 = h45['getFileNativePath'](yh$ad5),
          u4de$a = h45['wxdown']({ 'url': or3kzv, 'filePath': zkc90, 'success': function (vuzr) {
          if (vuzr['statusCode'] === 0xc8) h45['readFile'](vuzr['filePath'], j6bl1, r$aue4, yh$ad5);
        }, 'fail': function (c90zw) {
          r$aue4 != null && r$aue4['runWith']([0x1, c90zw]);
        } });u4de$a['onProgressUpdate'](function (v3o9z) {
        r$aue4 != null && r$aue4['runWith']([0x2, v3o9z['progress']]);
      });
    }, h45['readFile'] = function (_ixnm, qsp5h, ouv3e, wzkv9o) {
      qsp5h === void 0x0 && (qsp5h = 'ascill'), wzkv9o === void 0x0 && (wzkv9o = ''), h45['fs']['readFile']({ 'filePath': _ixnm, 'encoding': qsp5h, 'success': function (f86l) {
          if (_ixnm['indexOf']('http://') != -0x1 || _ixnm['indexOf']('https://') != -0x1) h45['onFileUpdate'](_ixnm, wzkv9o);ouv3e != null && ouv3e['runWith']([0x0, f86l]);
        }, 'fail': function (jgysqp) {
          if (jgysqp) ouv3e != null && ouv3e['runWith']([0x1, jgysqp]);
        } });
    }, h45['downImg'] = function (vzo3k, y5adsh, w9k_) {
      w9k_ === void 0x0 && (w9k_ = '');var hdya5s = h45['wxdown']({ 'url': vzo3k, 'success': function (g6j18b) {
          g6j18b['statusCode'] === 0xc8 && h45['copyFile'](g6j18b['tempFilePath'], w9k_, y5adsh);
        }, 'fail': function (syp5hq) {
          y5adsh != null && y5adsh['runWith']([0x1, syp5hq]);
        } });
    }, h45['copyFile'] = function (kzov39, dshy5, iw9) {
      var cw0ix_ = kzov39['split']('/'),
          v3k9oz = cw0ix_[cw0ix_['length'] - 0x1],
          e$54 = dshy5['split']('?')[0x0],
          x_wi = h45['getFileInfo'](dshy5),
          rzv3u = h45['getFileNativePath'](v3k9oz);h45['fs']['copyFile']({ 'srcPath': kzov39, 'destPath': rzv3u, 'success': function (jb8l61) {
          if (!x_wi) h45['onSaveFile'](dshy5, v3k9oz), iw9 != null && iw9['runWith']([0x0]);else {
            if (x_wi['readyUrl'] != dshy5) h45['remove'](v3k9oz, dshy5, iw9);
          }
        }, 'fail': function (bf18l) {
          iw9 != null && iw9['runWith']([0x1, bf18l]);
        } });
    }, h45['getFileNativePath'] = function (sdyha5) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + sdyha5;
    }, h45['remove'] = function (hpgs, w90vkz, z0c9) {
      w90vkz === void 0x0 && (w90vkz = '');var qgj8b1 = h45['getFileInfo'](w90vkz),
          b68g1 = h45['getFileNativePath'](qgj8b1['md5']);ovzr3['loader']['clearRes'](qgj8b1['readyUrl']), h45['fs']['unlink']({ 'filePath': b68g1, 'success': function (eru3ov) {
          if (w90vkz != '') h45['onSaveFile'](w90vkz, hpgs);z0c9 != null && z0c9['runWith']([0x0]);
        }, 'fail': function (wc_i0) {} });
    }, h45['onSaveFile'] = function (bj1, uoe34) {
      var w_9c0 = bj1['split']('?')[0x0];h45['filesListObj'][w_9c0] = { 'md5': uoe34, 'readyUrl': bj1 }, h45['fs']['writeFile']({ 'filePath': h45['fileNativeDir'] + '/' + h45['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h45['filesListObj']), 'success': function (mi_xc) {
          console['log']('写入测试测试成功：', mi_xc);
        }, 'fail': function (b16f) {
          console['log']('写入测试测试失败：', b16f);
        } });
    }, h45['existDir'] = function (uo3r, pgjsyq) {
      h45['fs']['mkdir']({ 'dirPath': uo3r, 'success': function (gbj8q1) {
          pgjsyq != null && pgjsyq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ura4) {
          if (ura4['errMsg']['indexOf']('file already exists') != -0x1) h45['readSync'](h45['fileListName'], 'utf8', pgjsyq);else pgjsyq != null && pgjsyq['runWith']([0x1, ura4]);
        } });
    }, h45['readSync'] = function (kzovr3, f61b, ea$ru4, u43er$) {
      f61b === void 0x0 && (f61b = 'ascill'), u43er$ === void 0x0 && (u43er$ = '');var sp5qy = h45['getFileNativePath'](kzovr3),
          hdya5$;try {
        hdya5$ = h45['fs']['readFileSync'](sp5qy), ea$ru4 != null && ea$ru4['runWith']([0x0, { 'data': hdya5$ }]);
      } catch (ue$3) {
        ea$ru4 != null && ea$ru4['runWith']([0x1]);
      }
    }, h45['readCache'] = function () {}, h45['writeCache'] = function (dua4e) {
      var e4$uad = readyUrl['split']('?')[0x0];h45['filesListObj'][e4$uad] = { 'md5': md5Name, 'readyUrl': readyUrl }, h45['fs']['writeFile']({ 'filePath': h45['fileNativeDir'] + '/' + h45['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](h45['filesListObj']), 'success': function (yahd5$) {}, 'fail': function (b18gjq) {} });
    }, h45['setNativeFileDir'] = function (b68j) {
      h45['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + b68j;
    }, h45['filesListObj'] = {}, h45['fileNativeDir'] = null, h45['fileListName'] = 'layaairfiles.txt', h45['ziyuFileData'] = {}, sqpg(h45, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), h45;
  }(jqpg81),
      ou4r = function (ix0wc) {
    function hqpg() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], hqpg['__super']['call'](this), this['_sound'] = hqpg['_createSound']();
    }m72xn(hqpg, 'laya.wx.mini.MiniSound', ix0wc);var gjqspy = hqpg['prototype'];return gjqspy['load'] = function (veo3u) {
      var bfl816 = this;veo3u = dyha['formatURL'](veo3u), this['url'] = veo3u;if (hqpg['_audioCache'][veo3u]) {
        this['event']('complete');return;
      }function gyqs() {
        if (hqpg['_null'] != undefined) bfl816['_sound']['onCanplay'](hqpg['_null']), bfl816['_sound']['onError'](hqpg['_null']);else try {
          bfl816['_sound']['onCanplay'](null), bfl816['_sound']['onError'](null), hqpg['_null'] = null;
        } catch (phsd) {
          console['warn']('[wxmini] _clearSound:' + phsd), bfl816['_sound']['onCanplay'](roe4), bfl816['_sound']['onError'](roe4), hqpg['_null'] = roe4;
        }
      }function a5e4() {
        gyqs(), gp8qj1['loaded'] = !![], gp8qj1['event']('complete'), hqpg['_audioCache'][gp8qj1['url']] = gp8qj1;
      }function a5$h4(zvwo) {
        console['error']('errCode=' + zvwo['errCode'] + '  errMsg=' + zvwo['errMsg']), gyqs(), gp8qj1['event']('error');
      }function roe4() {}this['_sound']['onCanplay'](a5e4), this['_sound']['onError'](a5$h4), this['_sound']['src'] = veo3u;var gp8qj1 = this;
    }, gjqspy['play'] = function (c09wz, v3zo) {
      c09wz === void 0x0 && (c09wz = 0x0), v3zo === void 0x0 && (v3zo = 0x0);var dah$;if (this['url'] == kzc09w['_tMusic']) {
        if (!hqpg['_musicAudio']) hqpg['_musicAudio'] = hqpg['_createSound']();dah$ = hqpg['_musicAudio'];
      } else dah$ = hqpg['_createSound']();dah$['src'] = this['url'];var ntxmi2 = new u$aed(dah$);return ntxmi2['url'] = this['url'], ntxmi2['loops'] = v3zo, ntxmi2['startTime'] = c09wz, ntxmi2['play'](), kzc09w['addChannel'](ntxmi2), ntxmi2;
    }, gjqspy['dispose'] = function () {
      var pyhqg = hqpg['_audioCache'][this['url']];pyhqg && (pyhqg['src'] = '', delete hqpg['_audioCache'][this['url']]);
    }, c0mx(0x0, gjqspy, 'duration', function () {
      return this['_sound']['duration'];
    }), hqpg['_createSound'] = function () {
      return hqpg['_id']++, iw_90c['window']['wx']['createInnerAudioContext']();
    }, hqpg['_musicAudio'] = null, hqpg['_id'] = 0x0, hqpg['_audioCache'] = {}, hqpg['_null'] = undefined, hqpg;
  }(jqpg81),
      u$aed = function (e4$5) {
    function a5d4$h(x0cm) {
      this['_audio'] = null, this['_onEnd'] = null, a5d4$h['__super']['call'](this), this['_audio'] = x0cm, this['_onEnd'] = x_in['bind'](this['__onEnd'], this), x0cm['onEnded'](this['_onEnd']);
    }m72xn(a5d4$h, 'laya.wx.mini.MiniSoundChannel', e4$5);var sgqjpy = a5d4$h['prototype'];return sgqjpy['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (ovzr3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, sgqjpy['__onNull'] = function () {}, sgqjpy['play'] = function () {
      this['isStopped'] = ![], kzc09w['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, sgqjpy['stop'] = function () {
      this['isStopped'] = !![], kzc09w['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (a5d4$h['_null'] != undefined) this['_audio']['onEnded'](a5d4$h['_null']);else try {
        this['_audio']['onEnded'](null), a5d4$h['_null'] = null;
      } catch (qp5yhs) {
        console['warn']('[wxmini] stop:' + qp5yhs), this['_audio']['onEnded'](x_in['bind'](this['__onNull'], this)), a5d4$h['_null'] = x_in['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, sgqjpy['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, sgqjpy['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], kzc09w['addChannel'](this), this['_audio']['play']();
    }, c0mx(0x0, sgqjpy, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), c0mx(0x0, sgqjpy, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), c0mx(0x0, sgqjpy, 'volume', function () {
      return 0x1;
    }, function (l6f81b) {}), a5d4$h['_null'] = undefined, a5d4$h;
  }(phgqsy);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var jgsqy in Laya) {
    var wk0v9 = Laya[jgsqy];wk0v9 && wk0v9['__isclass'] && (exports[jgsqy] = wk0v9);
  }
});