var E = wx.$p;
(function (window, document, gqdab) {
  var bg8qac = gqdab['un'],
      r72v1 = gqdab['uns'],
      zw30r = gqdab['static'],
      ew35nz = gqdab['class'],
      gq8ab9 = gqdab['getset'],
      z3r = gqdab['__newvec'],
      ijk6y = laya['utils']['Browser'],
      $jik6y = laya['events']['Event'],
      e3nw = laya['events']['EventDispatcher'],
      r2z0v = laya['resource']['HTMLImage'],
      i4hjks = laya['utils']['Handler'],
      $6jik = laya['display']['Input'],
      p4shk = laya['net']['Loader'],
      muoxf = laya['maths']['Matrix'],
      mu_ox = laya['renders']['Render'],
      lskp = laya['utils']['RunDriver'],
      gba8c = laya['media']['Sound'],
      v1y67 = laya['media']['SoundChannel'],
      rv61$7 = laya['media']['SoundManager'],
      r62v1 = laya['display']['Stage'],
      p4kjs = laya['net']['URL'],
      n0z3w5 = laya['utils']['Utils'],
      xt4lu = function () {
    function u_flt() {}return ew35nz(u_flt, 'laya.wx.mini.MiniAdpter'), u_flt['getJson'] = function (cgbd) {
      return JSON['parse'](cgbd);
    }, u_flt['init'] = function (txfum, khjps) {
      txfum === void 0x0 && (txfum = ![]), khjps === void 0x0 && (khjps = ![]);if (u_flt['_inited']) return;u_flt['window'] = window;if (u_flt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;u_flt['_inited'] = !![], u_flt['isZiYu'] = khjps, u_flt['isPosMsgYu'] = txfum, u_flt['EnvConfig'] = {}, !u_flt['isZiYu'] && (z5wn3['setNativeFileDir']('/layaairGame'), z5wn3['existDir'](z5wn3['fileNativeDir'], i4hjks['create'](u_flt, u_flt['onMkdirCallBack']))), u_flt['window']['focus'] = function () {}, gqdab['getUrlPath'] = function () {}, u_flt['window']['logtime'] = function (yv6$71) {}, u_flt['window']['alertTimeLog'] = function ($v1i6) {}, u_flt['window']['resetShareInfo'] = function () {}, u_flt['window']['CanvasRenderingContext2D'] = function () {}, u_flt['window']['CanvasRenderingContext2D']['prototype'] = u_flt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], u_flt['window']['document']['body']['appendChild'] = function () {}, u_flt['EnvConfig']['pixelRatioInt'] = 0x0, lskp['getPixelRatio'] = u_flt['pixelRatio'], u_flt['_preCreateElement'] = ijk6y['createElement'], ijk6y['createElement'] = u_flt['createElement'], lskp['createShaderCondition'] = u_flt['createShaderCondition'], n0z3w5['parseXMLFromString'] = u_flt['parseXMLFromString'], $6jik['_createInputElement'] = y$1['_createInputElement'], u_flt['EnvConfig']['load'] = p4shk['prototype']['load'], p4shk['prototype']['load'] = phtls['prototype']['load'], u_flt['isZiYu'] && txfum && wx['onMessage'](function (fmuo_x) {
        fmuo_x['isLoad'] && (z5wn3['ziyuFileData'][fmuo_x['url']] = fmuo_x['data']);
      });
    }, u_flt['onMkdirCallBack'] = function (kisyhj, tupxl) {
      if (!kisyhj) z5wn3['filesListObj'] = JSON['parse'](tupxl['data']);
    }, u_flt['pixelRatio'] = function () {
      if (!u_flt['EnvConfig']['pixelRatioInt']) try {
        var _umxof = wx['getSystemInfoSync']();return u_flt['EnvConfig']['pixelRatioInt'] = _umxof['pixelRatio'], _umxof = _umxof, _umxof['pixelRatio'];
      } catch (kjphs4) {}return u_flt['EnvConfig']['pixelRatioInt'];
    }, u_flt['createElement'] = function (shpj4) {
      if (shpj4 == 'canvas') {
        var r3z27;return u_flt['idx'] == 0x1 ? u_flt['isZiYu'] ? (r3z27 = sharedCanvas, r3z27['style'] = {}) : r3z27 = window['canvas'] : r3z27 = window['wx']['createCanvas'](), u_flt['idx']++, r3z27;
      } else {
        if (shpj4 == 'textarea' || shpj4 == 'input') return u_flt['onCreateInput'](shpj4);else {
          if (shpj4 == 'div') {
            var kj6$ = u_flt['_preCreateElement'](shpj4);return kj6$['contains'] = function (qneb8) {
              return null;
            }, kj6$['removeChild'] = function (m_ou) {}, kj6$;
          } else return u_flt['_preCreateElement'](shpj4);
        }
      }
    }, u_flt['onCreateInput'] = function (tumf) {
      var ga89b = u_flt['_preCreateElement'](tumf);return ga89b['focus'] = y$1['wxinputFocus'], ga89b['blur'] = y$1['wxinputblur'], ga89b['style'] = {}, ga89b['value'] = 0x0, ga89b['parentElement'] = {}, ga89b['placeholder'] = {}, ga89b['type'] = {}, ga89b['setColor'] = function (nw3ez) {}, ga89b['setType'] = function (l4uxpt) {}, ga89b['setFontFace'] = function (j6$iky) {}, ga89b['addEventListener'] = function (tl4px) {}, ga89b['contains'] = function (hs4l) {
        return null;
      }, ga89b['removeChild'] = function (xtlsp) {}, ga89b;
    }, u_flt['createShaderCondition'] = function (h4ik) {
      var aqe98b = this,
          z032w = function () {
        var y6kij = h4ik;return aqe98b[h4ik['replace']('this.', '')];
      };return z032w;
    }, u_flt['EnvConfig'] = null, u_flt['window'] = null, u_flt['_preCreateElement'] = null, u_flt['_inited'] = ![], u_flt['wxRequest'] = null, u_flt['systemInfo'] = null, u_flt['version'] = '0.0.1', u_flt['isZiYu'] = ![], u_flt['isPosMsgYu'] = ![], u_flt['parseXMLFromString'] = function (tl_fxu) {
      var t4uplx, caq8g;tl_fxu = tl_fxu['replace'](/>\s+</g, '><');try {
        t4uplx = new window['Parser']['DOMParser']()['parseFromString'](tl_fxu, 'text/xml');
      } catch (yj16$i) {
        throw '需要引入xml解析库文件';
      }return t4uplx;
    }, u_flt['idx'] = 0x1, u_flt;
  }(),
      ze35wn = function () {
    function xfm_ou() {}ew35nz(xfm_ou, 'laya.wx.mini.MiniImage');var vy16$ = xfm_ou['prototype'];return vy16$['_loadImage'] = function (yhsi) {
      var h$yjki = this,
          zw5230 = ![];yhsi['indexOf']('layaNativeDir/') == -0x1 && (zw5230 = !![], yhsi = p4kjs['formatURL'](yhsi));if (!z5wn3['getFileInfo'](yhsi)) {
        if (yhsi['indexOf']('http://') != -0x1 || yhsi['indexOf']('https://') != -0x1) z5wn3['downImg'](yhsi, new i4hjks(xfm_ou, xfm_ou['onDownImgCallBack'], [yhsi, h$yjki]), yhsi);else xfm_ou['onCreateImage'](yhsi, h$yjki, !![]);
      } else xfm_ou['onCreateImage'](yhsi, h$yjki, !zw5230);
    }, xfm_ou['onDownImgCallBack'] = function (fx_muo, pxl4tu, jiy$16) {
      if (!jiy$16) xfm_ou['onCreateImage'](fx_muo, pxl4tu);else pxl4tu['onError'](null);
    }, xfm_ou['onCreateImage'] = function (x_ufl, tul_, r$16v) {
      r$16v === void 0x0 && (r$16v = ![]);var a98bg;if (!r$16v) {
        var sihj = z5wn3['getFileInfo'](x_ufl),
            tfxp = sihj['md5'];a98bg = z5wn3['getFileNativePath'](tfxp);
      } else a98bg = x_ufl;if (tul_['imgCache'] == null) tul_['imgCache'] = {};var n530w;function v2r76() {
        n530w['onload'] = null, n530w['onerror'] = null, delete tul_['imgCache'][x_ufl];
      };var aq8e9b = function () {
        v2r76(), tul_['onLoaded'](n530w);
      },
          z2r = function () {
        v2r76(), tul_['event']('error', 'Load image failed');
      };tul_['_type'] == 'nativeimage' ? (n530w = new ijk6y['window']['Image'](), n530w['crossOrigin'] = '', n530w['onload'] = aq8e9b, n530w['onerror'] = z2r, n530w['src'] = a98bg, tul_['imgCache'][x_ufl] = n530w) : new r2z0v['create'](a98bg, { 'onload': aq8e9b, 'onerror': z2r, 'onCreate': function (v76y$1) {
          n530w = v76y$1, tul_['imgCache'][x_ufl] = v76y$1;
        } });
    }, xfm_ou;
  }(),
      y$1 = function () {
    function ux_mtf() {}return ew35nz(ux_mtf, 'laya.wx.mini.MiniInput'), ux_mtf['_createInputElement'] = function () {
      $6jik['_initInput']($6jik['area'] = ijk6y['createElement']('textarea')), $6jik['_initInput']($6jik['input'] = ijk6y['createElement']('input')), $6jik['inputContainer'] = ijk6y['createElement']('div'), $6jik['inputContainer']['style']['position'] = 'absolute', $6jik['inputContainer']['style']['zIndex'] = 0x186a0, ijk6y['container']['appendChild']($6jik['inputContainer']), $6jik['inputContainer']['setPos'] = function (ufmtx_, ulpxft) {
        $6jik['inputContainer']['style']['left'] = ufmtx_ + 'px', $6jik['inputContainer']['style']['top'] = ulpxft + 'px';
      }, gqdab['stage']['on']('resize', null, ux_mtf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k$6yij) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), rv61$7['_soundClass'] = klpsh4, rv61$7['_musicClass'] = klpsh4;
    }, ux_mtf['_onStageResize'] = function () {
      var v61y$7 = gqdab['stage']['_canvasTransform']['identity']();v61y$7['scale'](ijk6y['width'] / mu_ox['canvas']['width'] / lskp['getPixelRatio'](), ijk6y['height'] / mu_ox['canvas']['height'] / lskp['getPixelRatio']());
    }, ux_mtf['wxinputFocus'] = function (y$iv6) {
      var sx4pt = $6jik['inputElement']['target'];if (sx4pt && !sx4pt['editable']) return;xt4lu['window']['wx']['offKeyboardConfirm'](), xt4lu['window']['wx']['offKeyboardInput'](), xt4lu['window']['wx']['showKeyboard']({ 'defaultValue': sx4pt['text'], 'maxLength': sx4pt['maxChars'], 'multiple': sx4pt['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (hlk4) {}, 'fail': function (ihj4ks) {} }), xt4lu['window']['wx']['onKeyboardConfirm'](function ($yi16j) {
        var acbg = $yi16j ? $yi16j['value'] : '';sx4pt['text'] = acbg, sx4pt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), xt4lu['window']['wx']['onKeyboardInput'](function (xmf_ut) {
        var ji4ks = xmf_ut ? xmf_ut['value'] : '';if (!sx4pt['multiline']) {
          if (ji4ks['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }sx4pt['text'] = ji4ks, sx4pt['event']('input');
      });
    }, ux_mtf['inputEnter'] = function () {
      $6jik['inputElement']['target']['focus'] = ![];
    }, ux_mtf['wxinputblur'] = function () {
      ux_mtf['hideKeyboard']();
    }, ux_mtf['hideKeyboard'] = function () {
      xt4lu['window']['wx']['offKeyboardConfirm'](), xt4lu['window']['wx']['offKeyboardInput'](), xt4lu['window']['wx']['hideKeyboard']({ 'success': function (_xult) {
          console['log']('隐藏键盘');
        }, 'fail': function (c8bagq) {
          console['log']('隐藏键盘出错:' + (c8bagq ? c8bagq['errMsg'] : ''));
        } });
    }, ux_mtf;
  }(),
      phtls = function () {
    function lpux4() {}ew35nz(lpux4, 'laya.wx.mini.MiniLoader');var wz05n3 = lpux4['prototype'];return wz05n3['load'] = function (j61$i, qbg89a, cabgq8, yv$761, s4jphk) {
      cabgq8 === void 0x0 && (cabgq8 = !![]), s4jphk === void 0x0 && (s4jphk = ![]);var utx4p = this;utx4p['_url'] = j61$i;if (j61$i['indexOf']('data:image') === 0x0) utx4p['_type'] = qbg89a = 'image';else utx4p['_type'] = qbg89a || (qbg89a = utx4p['getTypeFromUrl'](j61$i));utx4p['_cache'] = cabgq8, utx4p['_data'] = null;var s4kpl = 'ascii';if (j61$i['indexOf']('.fnt') != -0x1) s4kpl = 'utf8';else qbg89a == 'arraybuffer' && (s4kpl = '');;var j$yik6 = n0z3w5['getFileExtension'](j61$i);if (lpux4['_fileTypeArr']['indexOf'](j$yik6) != -0x1) xt4lu['EnvConfig']['load']['call'](this, j61$i, qbg89a, cabgq8, yv$761, s4jphk);else {
        if (!z5wn3['getFileInfo'](j61$i)) {
          if (j61$i['indexOf']('layaNativeDir/') != -0x1) {
            if (xt4lu['isZiYu']) {
              var slxpt4 = z5wn3['ziyuFileData'][j61$i];utx4p['onLoaded'](slxpt4);return;
            } else {
              cosnole['log']('read read'), z5wn3['read'](j61$i, s4kpl, new i4hjks(lpux4, lpux4['onReadNativeCallBack'], [s4kpl, j61$i, qbg89a, cabgq8, yv$761, s4jphk, utx4p]));return;
            }
          }if (p4kjs['rootPath'] == '') var zew5n = j61$i;else zew5n = j61$i['split'](p4kjs['rootPath'])[0x0];j61$i['indexOf']('http://') != -0x1 || j61$i['indexOf']('https://') != -0x1 ? xt4lu['EnvConfig']['load']['call'](utx4p, j61$i, qbg89a, cabgq8, yv$761, s4jphk) : z5wn3['readFile'](zew5n, s4kpl, new i4hjks(lpux4, lpux4['onReadNativeCallBack'], [s4kpl, j61$i, qbg89a, cabgq8, yv$761, s4jphk, utx4p]), j61$i);
        } else xt4lu['EnvConfig']['load']['call'](this, j61$i, qbg89a, cabgq8, yv$761, s4jphk);
      }
    }, wz05n3['resMgrLoad'] = function (w39, nz530, tp4hs, kyjh$i, r3zw0, khjiys, e5nw89) {
      tp4hs === void 0x0 && (tp4hs = 0x0), kyjh$i === void 0x0 && (kyjh$i = ![]), r3zw0 === void 0x0 && (r3zw0 = ![]), khjiys === void 0x0 && (khjiys = 0x0), e5nw89 === void 0x0 && (e5nw89 = 0x3), w39['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w39), xt4lu['EnvConfig']['resMgrLoad'](w39, (v7126r, z0r, tmfu_x) => {
        lpux4['prototype']['resMgrLoadCallBack'](v7126r, z0r, tmfu_x, nz530);
      }, tp4hs, kyjh$i, r3zw0, khjiys, e5nw89);
    }, wz05n3['resMgrLoadCallBack'] = function (jy$6ki, ulfx, lpts4h, kiy$hj) {
      console['log']('buff:::', jy$6ki, lpts4h, z5wn3['fileNativeDir'] + '///' + z5wn3['fileListName']), kiy$hj(jy$6ki, ulfx, lpts4h);
    }, wz05n3['clearRes'] = function (yv$716, viy6$) {
      viy6$ === void 0x0 && (viy6$ = ![]);var txspl = this;txspl['clearRes'](yv$716, viy6$);var p4xts = z5wn3['getFileInfo'](yv$716);if (p4xts && (yv$716['indexOf']('http://') != -0x1 || yv$716['indexOf']('https://') != -0x1)) {
        var yhk$j = p4xts['md5'],
            skhp4l = z5wn3['getFileNativePath'](yhk$j);z5wn3['remove'](skhp4l);
      }
    }, lpux4['onReadNativeCallBack'] = function (tls4x, y6i1j$, ji4skh, lux4t, hltps, n8w95e, spl, n9eb8, futm) {
      lux4t === void 0x0 && (lux4t = !![]), n8w95e === void 0x0 && (n8w95e = ![]), n9eb8 === void 0x0 && (n9eb8 = 0x0);if (!n9eb8) {
        var abgd;if (ji4skh == 'json' || ji4skh == 'atlas') abgd = xt4lu['getJson'](futm['data']);else ji4skh == 'xml' ? abgd = n0z3w5['parseXMLFromString'](futm['data']) : abgd = futm['data'];spl['onLoaded'](abgd), !xt4lu['isZiYu'] && xt4lu['isPosMsgYu'] && ji4skh != 'arraybuffer' && wx['postMessage']({ 'url': y6i1j$, 'data': abgd, 'isLoad': !![] });
      } else n9eb8 == 0x1 && xt4lu['EnvConfig']['load']['call'](spl, y6i1j$, ji4skh, lux4t, hltps, n8w95e);
    }, zw30r(lpux4, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lpux4;
  }(),
      z5wn3 = function (r3w2z0) {
    function p4kjhs() {
      p4kjhs['__super']['call'](this);;
    }return ew35nz(p4kjhs, 'laya.wx.mini.MiniFileMgr', r3w2z0), p4kjhs['isLoadFile'] = function (ij1) {
      return p4kjhs['_fileTypeArr']['indexOf'](ij1) != -0x1 ? !![] : ![];
    }, p4kjhs['getFileInfo'] = function ($yij16) {
      var agcdq = $yij16['split']('?')[0x0],
          j1y$i = p4kjhs['filesListObj'][agcdq];if (j1y$i == null) return null;else return j1y$i;return null;
    }, p4kjhs['onFileUpdate'] = function (up4xlt, tx4ls) {
      var n5we93 = up4xlt['split']('/'),
          $61v7r = n5we93[n5we93['length'] - 0x1],
          ux_ofm = p4kjhs['getFileInfo'](tx4ls);if (ux_ofm == null) p4kjhs['onSaveFile'](tx4ls, $61v7r);else {
        if (ux_ofm['readyUrl'] != tx4ls) p4kjhs['remove']($61v7r, tx4ls);
      }
    }, p4kjhs['exits'] = function (hlkp4, vz0r2) {
      var ufl = p4kjhs['getFileNativePath'](hlkp4);p4kjhs['fs']['getFileInfo']({ 'filePath': ufl, 'success': function (gdab) {
          vz0r2 != null && vz0r2['runWith']([0x0, gdab]);
        }, 'fail': function (r7021v) {
          vz0r2 != null && vz0r2['runWith']([0x1, r7021v]);
        } });
    }, p4kjhs['read'] = function (nw359e, cgqdb, jk$y, lspkh4) {
      cgqdb === void 0x0 && (cgqdb = 'ascill'), lspkh4 === void 0x0 && (lspkh4 = '');var gdbaq;lspkh4 != '' ? gdbaq = p4kjhs['getFileNativePath'](nw359e) : gdbaq = nw359e, p4kjhs['fs']['readFile']({ 'filePath': gdbaq, 'encoding': cgqdb, 'success': function (y$hjki) {
          jk$y != null && jk$y['runWith']([0x0, y$hjki]);
        }, 'fail': function (aeb9) {
          if (aeb9 && lspkh4 != '') p4kjhs['down'](lspkh4, cgqdb, jk$y, lspkh4);else jk$y != null && jk$y['runWith']([0x1]);
        } });
    }, p4kjhs['readNativeFile'] = function (q89eab, lfxtup) {
      p4kjhs['fs']['readFile']({ 'filePath': q89eab, 'encoding': '', 'success': function (r2v10) {
          lfxtup != null && lfxtup['runWith']([0x0]);
        }, 'fail': function (gqa9b) {
          lfxtup != null && lfxtup['runWith']([0x1]);
        } });
    }, p4kjhs['down'] = function (jhski, tl4sx, j$iy1, $7vr16) {
      tl4sx === void 0x0 && (tl4sx = 'ascill'), $7vr16 === void 0x0 && ($7vr16 = '');var slkp4 = p4kjhs['getFileNativePath']($7vr16),
          qc8agb = p4kjhs['wxdown']({ 'url': jhski, 'filePath': slkp4, 'success': function (en53wz) {
          if (en53wz['statusCode'] === 0xc8) p4kjhs['readFile'](en53wz['filePath'], tl4sx, j$iy1, $7vr16);
        }, 'fail': function (zw0n53) {
          j$iy1 != null && j$iy1['runWith']([0x1, zw0n53]);
        } });qc8agb['onProgressUpdate'](function (z32w05) {
        j$iy1 != null && j$iy1['runWith']([0x2, z32w05['progress']]);
      });
    }, p4kjhs['readFile'] = function (a8eq9, qn598, aqg89, v$617) {
      qn598 === void 0x0 && (qn598 = 'ascill'), v$617 === void 0x0 && (v$617 = ''), p4kjhs['fs']['readFile']({ 'filePath': a8eq9, 'encoding': qn598, 'success': function (nw8e) {
          if (a8eq9['indexOf']('http://') != -0x1 || a8eq9['indexOf']('https://') != -0x1) p4kjhs['onFileUpdate'](a8eq9, v$617);aqg89 != null && aqg89['runWith']([0x0, nw8e]);
        }, 'fail': function ($ij6y) {
          if ($ij6y) aqg89 != null && aqg89['runWith']([0x1, $ij6y]);
        } });
    }, p4kjhs['downImg'] = function (plutx4, w3n, wz35en) {
      wz35en === void 0x0 && (wz35en = '');var mf_uo = p4kjhs['wxdown']({ 'url': plutx4, 'success': function (js) {
          js['statusCode'] === 0xc8 && p4kjhs['copyFile'](js['tempFilePath'], wz35en, w3n);
        }, 'fail': function (k$ijh) {
          w3n != null && w3n['runWith']([0x1, k$ijh]);
        } });
    }, p4kjhs['copyFile'] = function ($kjihy, $r1v7, z302r) {
      var $67r1 = $kjihy['split']('/'),
          hsyjik = $67r1[$67r1['length'] - 0x1],
          cagqd = $r1v7['split']('?')[0x0],
          w230r = p4kjhs['getFileInfo']($r1v7),
          bq9n8 = p4kjhs['getFileNativePath'](hsyjik);p4kjhs['fs']['copyFile']({ 'srcPath': $kjihy, 'destPath': bq9n8, 'success': function (umft) {
          if (!w230r) p4kjhs['onSaveFile']($r1v7, hsyjik), z302r != null && z302r['runWith']([0x0]);else {
            if (w230r['readyUrl'] != $r1v7) p4kjhs['remove'](hsyjik, $r1v7, z302r);
          }
        }, 'fail': function (qbdg) {
          z302r != null && z302r['runWith']([0x1, qbdg]);
        } });
    }, p4kjhs['getFileNativePath'] = function (ji6yk) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ji6yk;
    }, p4kjhs['remove'] = function (_utmfx, zn0w, w302z) {
      zn0w === void 0x0 && (zn0w = '');var jkh$i = p4kjhs['getFileInfo'](zn0w),
          xtps = p4kjhs['getFileNativePath'](jkh$i['md5']);gqdab['loader']['clearRes'](jkh$i['readyUrl']), p4kjhs['fs']['unlink']({ 'filePath': xtps, 'success': function ($671) {
          if (zn0w != '') p4kjhs['onSaveFile'](zn0w, _utmfx);w302z != null && w302z['runWith']([0x0]);
        }, 'fail': function (flut_x) {} });
    }, p4kjhs['onSaveFile'] = function (tx_, qcbda) {
      var be8n9q = tx_['split']('?')[0x0];p4kjhs['filesListObj'][be8n9q] = { 'md5': qcbda, 'readyUrl': tx_ }, p4kjhs['fs']['writeFile']({ 'filePath': p4kjhs['fileNativeDir'] + '/' + p4kjhs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](p4kjhs['filesListObj']), 'success': function (bcqa) {
          console['log']('写入测试测试成功：', bcqa);
        }, 'fail': function (y6i1$j) {
          console['log']('写入测试测试失败：', y6i1$j);
        } });
    }, p4kjhs['existDir'] = function (kisyjh, v2r710) {
      p4kjhs['fs']['mkdir']({ 'dirPath': kisyjh, 'success': function (gqa8bc) {
          v2r710 != null && v2r710['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (ijksh4) {
          if (ijksh4['errMsg']['indexOf']('file already exists') != -0x1) p4kjhs['readSync'](p4kjhs['fileListName'], 'utf8', v2r710);else v2r710 != null && v2r710['runWith']([0x1, ijksh4]);
        } });
    }, p4kjhs['readSync'] = function (yjkish, flptu, lu_tfx, txpu4l) {
      flptu === void 0x0 && (flptu = 'ascill'), txpu4l === void 0x0 && (txpu4l = '');var qn8e5 = p4kjhs['getFileNativePath'](yjkish),
          tlpsx4;try {
        tlpsx4 = p4kjhs['fs']['readFileSync'](qn8e5), lu_tfx != null && lu_tfx['runWith']([0x0, { 'data': tlpsx4 }]);
      } catch (futpx) {
        lu_tfx != null && lu_tfx['runWith']([0x1]);
      }
    }, p4kjhs['readCache'] = function () {}, p4kjhs['writeCache'] = function (pkh4s) {
      var umfxt = readyUrl['split']('?')[0x0];p4kjhs['filesListObj'][umfxt] = { 'md5': md5Name, 'readyUrl': readyUrl }, p4kjhs['fs']['writeFile']({ 'filePath': p4kjhs['fileNativeDir'] + '/' + p4kjhs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](p4kjhs['filesListObj']), 'success': function (shjp4k) {}, 'fail': function (wz2350) {} });
    }, p4kjhs['setNativeFileDir'] = function (w30rz) {
      p4kjhs['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w30rz;
    }, p4kjhs['filesListObj'] = {}, p4kjhs['fileNativeDir'] = null, p4kjhs['fileListName'] = 'layaairfiles.txt', p4kjhs['ziyuFileData'] = {}, zw30r(p4kjhs, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), p4kjhs;
  }(e3nw),
      klpsh4 = function (en8bq9) {
    function w9n5e() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], w9n5e['__super']['call'](this), this['_sound'] = w9n5e['_createSound']();
    }ew35nz(w9n5e, 'laya.wx.mini.MiniSound', en8bq9);var jy$kh = w9n5e['prototype'];return jy$kh['load'] = function (z2rw03) {
      var xtlf_ = this;z2rw03 = p4kjs['formatURL'](z2rw03), this['url'] = z2rw03;if (w9n5e['_audioCache'][z2rw03]) {
        this['event']('complete');return;
      }function vr701() {
        if (w9n5e['_null'] != undefined) xtlf_['_sound']['onCanplay'](w9n5e['_null']), xtlf_['_sound']['onError'](w9n5e['_null']);else try {
          xtlf_['_sound']['onCanplay'](null), xtlf_['_sound']['onError'](null), w9n5e['_null'] = null;
        } catch (hps4kj) {
          console['warn']('[wxmini] _clearSound:' + hps4kj), xtlf_['_sound']['onCanplay'](fplut), xtlf_['_sound']['onError'](fplut), w9n5e['_null'] = fplut;
        }
      }function bqc8a() {
        vr701(), $hj['loaded'] = !![], $hj['event']('complete'), w9n5e['_audioCache'][$hj['url']] = $hj;
      }function e89wn(enz3w) {
        console['error']('errCode=' + enz3w['errCode'] + '  errMsg=' + enz3w['errMsg']), vr701(), $hj['event']('error');
      }function fplut() {}this['_sound']['onCanplay'](bqc8a), this['_sound']['onError'](e89wn), this['_sound']['src'] = z2rw03;var $hj = this;
    }, jy$kh['play'] = function (_fxmuo, $yihkj) {
      _fxmuo === void 0x0 && (_fxmuo = 0x0), $yihkj === void 0x0 && ($yihkj = 0x0);var bqen;if (this['url'] == rv61$7['_tMusic']) {
        if (!w9n5e['_musicAudio']) w9n5e['_musicAudio'] = w9n5e['_createSound']();bqen = w9n5e['_musicAudio'];
      } else bqen = w9n5e['_createSound']();bqen['src'] = this['url'];var nb98qe = new e35nw9(bqen);return nb98qe['url'] = this['url'], nb98qe['loops'] = $yihkj, nb98qe['startTime'] = _fxmuo, nb98qe['play'](), rv61$7['addChannel'](nb98qe), nb98qe;
    }, jy$kh['dispose'] = function () {
      var bgacd = w9n5e['_audioCache'][this['url']];bgacd && (bgacd['src'] = '', delete w9n5e['_audioCache'][this['url']]);
    }, gq8ab9(0x0, jy$kh, 'duration', function () {
      return this['_sound']['duration'];
    }), w9n5e['_createSound'] = function () {
      return w9n5e['_id']++, xt4lu['window']['wx']['createInnerAudioContext']();
    }, w9n5e['_musicAudio'] = null, w9n5e['_id'] = 0x0, w9n5e['_audioCache'] = {}, w9n5e['_null'] = undefined, w9n5e;
  }(e3nw),
      e35nw9 = function (n8eb9) {
    function w359e(spk4j) {
      this['_audio'] = null, this['_onEnd'] = null, w359e['__super']['call'](this), this['_audio'] = spk4j, this['_onEnd'] = n0z3w5['bind'](this['__onEnd'], this), spk4j['onEnded'](this['_onEnd']);
    }ew35nz(w359e, 'laya.wx.mini.MiniSoundChannel', n8eb9);var zw5032 = w359e['prototype'];return zw5032['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && (gqdab['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, zw5032['__onNull'] = function () {}, zw5032['play'] = function () {
      this['isStopped'] = ![], rv61$7['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, zw5032['stop'] = function () {
      this['isStopped'] = !![], rv61$7['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (w359e['_null'] != undefined) this['_audio']['onEnded'](w359e['_null']);else try {
        this['_audio']['onEnded'](null), w359e['_null'] = null;
      } catch (vr7261) {
        console['warn']('[wxmini] stop:' + vr7261), this['_audio']['onEnded'](n0z3w5['bind'](this['__onNull'], this)), w359e['_null'] = n0z3w5['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, zw5032['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, zw5032['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], rv61$7['addChannel'](this), this['_audio']['play']();
    }, gq8ab9(0x0, zw5032, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), gq8ab9(0x0, zw5032, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), gq8ab9(0x0, zw5032, 'volume', function () {
      return 0x1;
    }, function (xlpu4t) {}), w359e['_null'] = undefined, w359e;
  }(v1y67);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var aqcdgb in Laya) {
    var txm = Laya[aqcdgb];txm && txm['__isclass'] && (exports[aqcdgb] = txm);
  }
});