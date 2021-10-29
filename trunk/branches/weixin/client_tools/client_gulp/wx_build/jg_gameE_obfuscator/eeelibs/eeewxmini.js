var b = wx.$e;
(function (window, document, $odw) {
  var ua3kv = $odw['un'],
      muv36w = $odw['uns'],
      $o5nd = $odw['static'],
      bieq = $odw['class'],
      z4fh_s = $odw['getset'],
      xvauk3 = $odw['__newvec'],
      r0j81 = laya['utils']['Browser'],
      kam3u = laya['events']['Event'],
      by2qp = laya['events']['EventDispatcher'],
      d5rno = laya['resource']['HTMLImage'],
      bei2yq = laya['utils']['Handler'],
      kxgl_ = laya['display']['Input'],
      wmn$d6 = laya['net']['Loader'],
      hlg4_ = laya['maths']['Matrix'],
      eqb2i = laya['renders']['Render'],
      akuvm3 = laya['utils']['RunDriver'],
      amku3v = laya['media']['Sound'],
      kxglah = laya['media']['SoundChannel'],
      z4fst9 = laya['media']['SoundManager'],
      i29etq = laya['display']['Stage'],
      iqby = laya['net']['URL'],
      $n6dw = laya['utils']['Utils'],
      l4_gs = function () {
    function mw6u() {}return bieq(mw6u, 'laya.wx.mini.MiniAdpter'), mw6u['getJson'] = function (hlx4g_) {
      return JSON['parse'](hlx4g_);
    }, mw6u['init'] = function (akglx, l_kgx) {
      akglx === void 0x0 && (akglx = ![]), l_kgx === void 0x0 && (l_kgx = ![]);if (mw6u['_inited']) return;mw6u['window'] = window;if (mw6u['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;mw6u['_inited'] = !![], mw6u['isZiYu'] = l_kgx, mw6u['isPosMsgYu'] = akglx, mw6u['EnvConfig'] = {}, !mw6u['isZiYu'] && (uwv3['setNativeFileDir']('/layaairGame'), uwv3['existDir'](uwv3['fileNativeDir'], bei2yq['create'](mw6u, mw6u['onMkdirCallBack']))), mw6u['window']['focus'] = function () {}, $odw['getUrlPath'] = function () {}, mw6u['window']['logtime'] = function (z49s_) {}, mw6u['window']['alertTimeLog'] = function (_zhsf) {}, mw6u['window']['resetShareInfo'] = function () {}, mw6u['window']['CanvasRenderingContext2D'] = function () {}, mw6u['window']['CanvasRenderingContext2D']['prototype'] = mw6u['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mw6u['window']['document']['body']['appendChild'] = function () {}, mw6u['EnvConfig']['pixelRatioInt'] = 0x0, akuvm3['getPixelRatio'] = mw6u['pixelRatio'], mw6u['_preCreateElement'] = r0j81['createElement'], r0j81['createElement'] = mw6u['createElement'], akuvm3['createShaderCondition'] = mw6u['createShaderCondition'], $n6dw['parseXMLFromString'] = mw6u['parseXMLFromString'], kxgl_['_createInputElement'] = awvm3u['_createInputElement'], mw6u['EnvConfig']['load'] = wmn$d6['prototype']['load'], wmn$d6['prototype']['load'] = _94['prototype']['load'], mw6u['isZiYu'] && akglx && wx['onMessage'](function (ak3vgx) {
        ak3vgx['isLoad'] && (uwv3['ziyuFileData'][ak3vgx['url']] = ak3vgx['data']);
      });
    }, mw6u['onMkdirCallBack'] = function (uvwm, wdnm6$) {
      if (!uvwm) uwv3['filesListObj'] = JSON['parse'](wdnm6$['data']);
    }, mw6u['pixelRatio'] = function () {
      if (!mw6u['EnvConfig']['pixelRatioInt']) try {
        var dr5o = wx['getSystemInfoSync']();return mw6u['EnvConfig']['pixelRatioInt'] = dr5o['pixelRatio'], dr5o = dr5o, dr5o['pixelRatio'];
      } catch (xlkah) {}return mw6u['EnvConfig']['pixelRatioInt'];
    }, mw6u['createElement'] = function (dn6m$w) {
      if (dn6m$w == 'canvas') {
        var wu3m$;return mw6u['idx'] == 0x1 ? mw6u['isZiYu'] ? (wu3m$ = sharedCanvas, wu3m$['style'] = {}) : wu3m$ = window['canvas'] : wu3m$ = window['wx']['createCanvas'](), mw6u['idx']++, wu3m$;
      } else {
        if (dn6m$w == 'textarea' || dn6m$w == 'input') return mw6u['onCreateInput'](dn6m$w);else {
          if (dn6m$w == 'div') {
            var xkav3 = mw6u['_preCreateElement'](dn6m$w);return xkav3['contains'] = function (y2tqei) {
              return null;
            }, xkav3['removeChild'] = function (on5rd) {}, xkav3;
          } else return mw6u['_preCreateElement'](dn6m$w);
        }
      }
    }, mw6u['onCreateInput'] = function (gkavlx) {
      var $d5nr = mw6u['_preCreateElement'](gkavlx);return $d5nr['focus'] = awvm3u['wxinputFocus'], $d5nr['blur'] = awvm3u['wxinputblur'], $d5nr['style'] = {}, $d5nr['value'] = 0x0, $d5nr['parentElement'] = {}, $d5nr['placeholder'] = {}, $d5nr['type'] = {}, $d5nr['setColor'] = function (xgk_l) {}, $d5nr['setType'] = function (uav3km) {}, $d5nr['setFontFace'] = function (tsfze9) {}, $d5nr['addEventListener'] = function (qtzfe9) {}, $d5nr['contains'] = function (dr51) {
        return null;
      }, $d5nr['removeChild'] = function (i2pbqy) {}, $d5nr;
    }, mw6u['createShaderCondition'] = function (tfqe9z) {
      var zft9 = this,
          _hlgs = function () {
        var r705o1 = tfqe9z;return zft9[tfqe9z['replace']('this.', '')];
      };return _hlgs;
    }, mw6u['EnvConfig'] = null, mw6u['window'] = null, mw6u['_preCreateElement'] = null, mw6u['_inited'] = ![], mw6u['wxRequest'] = null, mw6u['systemInfo'] = null, mw6u['version'] = '0.0.1', mw6u['isZiYu'] = ![], mw6u['isPosMsgYu'] = ![], mw6u['parseXMLFromString'] = function (jr8017) {
      var uam3kv, gklxah;jr8017 = jr8017['replace'](/>\s+</g, '><');try {
        uam3kv = new window['Parser']['DOMParser']()['parseFromString'](jr8017, 'text/xml');
      } catch (j710r5) {
        throw '需要引入xml解析库文件';
      }return uam3kv;
    }, mw6u['idx'] = 0x1, mw6u;
  }(),
      kxalhg = function () {
    function f4zst9() {}bieq(f4zst9, 'laya.wx.mini.MiniImage');var _4lxhg = f4zst9['prototype'];return _4lxhg['_loadImage'] = function (jr7801) {
      var zsfh_4 = this,
          $6d5 = ![];jr7801['indexOf']('layaNativeDir/') == -0x1 && ($6d5 = !![], jr7801 = iqby['formatURL'](jr7801));if (!uwv3['getFileInfo'](jr7801)) {
        if (jr7801['indexOf']('http://') != -0x1 || jr7801['indexOf']('https://') != -0x1) uwv3['downImg'](jr7801, new bei2yq(f4zst9, f4zst9['onDownImgCallBack'], [jr7801, zsfh_4]), jr7801);else f4zst9['onCreateImage'](jr7801, zsfh_4, !![]);
      } else f4zst9['onCreateImage'](jr7801, zsfh_4, !$6d5);
    }, f4zst9['onDownImgCallBack'] = function (d5no$6, s94z_, z4tf9s) {
      if (!z4tf9s) f4zst9['onCreateImage'](d5no$6, s94z_);else s94z_['onError'](null);
    }, f4zst9['onCreateImage'] = function (gkxva, vau3k, mnu$) {
      mnu$ === void 0x0 && (mnu$ = ![]);var hxga;if (!mnu$) {
        var do015r = uwv3['getFileInfo'](gkxva),
            axgvkl = do015r['md5'];hxga = uwv3['getFileNativePath'](axgvkl);
      } else hxga = gkxva;if (vau3k['imgCache'] == null) vau3k['imgCache'] = {};var qef92;function dwn6m$() {
        qef92['onload'] = null, qef92['onerror'] = null, delete vau3k['imgCache'][gkxva];
      };var qi2te = function () {
        dwn6m$(), vau3k['onLoaded'](qef92);
      },
          it2ye = function () {
        dwn6m$(), vau3k['event']('error', 'Load image failed');
      };vau3k['_type'] == 'nativeimage' ? (qef92 = new r0j81['window']['Image'](), qef92['crossOrigin'] = '', qef92['onload'] = qi2te, qef92['onerror'] = it2ye, qef92['src'] = hxga, vau3k['imgCache'][gkxva] = qef92) : new d5rno['create'](hxga, { 'onload': qi2te, 'onerror': it2ye, 'onCreate': function (etf9sz) {
          qef92 = etf9sz, vau3k['imgCache'][gkxva] = etf9sz;
        } });
    }, f4zst9;
  }(),
      awvm3u = function () {
    function b2iye() {}return bieq(b2iye, 'laya.wx.mini.MiniInput'), b2iye['_createInputElement'] = function () {
      kxgl_['_initInput'](kxgl_['area'] = r0j81['createElement']('textarea')), kxgl_['_initInput'](kxgl_['input'] = r0j81['createElement']('input')), kxgl_['inputContainer'] = r0j81['createElement']('div'), kxgl_['inputContainer']['style']['position'] = 'absolute', kxgl_['inputContainer']['style']['zIndex'] = 0x186a0, r0j81['container']['appendChild'](kxgl_['inputContainer']), kxgl_['inputContainer']['setPos'] = function (vka3xu, tf9e) {
        kxgl_['inputContainer']['style']['left'] = vka3xu + 'px', kxgl_['inputContainer']['style']['top'] = tf9e + 'px';
      }, $odw['stage']['on']('resize', null, b2iye['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($m63u) {
        window['dispatchEvent'] && window['dispatchEvent']('resize');
      }), z4fst9['_soundClass'] = sztf4, z4fst9['_musicClass'] = sztf4;
    }, b2iye['_onStageResize'] = function () {
      var e2tqi9 = $odw['stage']['_canvasTransform']['identity']();e2tqi9['scale'](r0j81['width'] / eqb2i['canvas']['width'] / akuvm3['getPixelRatio'](), r0j81['height'] / eqb2i['canvas']['height'] / akuvm3['getPixelRatio']());
    }, b2iye['wxinputFocus'] = function (zh4ls_) {
      var gk_hx = kxgl_['inputElement']['target'];if (gk_hx && !gk_hx['editable']) return;l4_gs['window']['wx']['offKeyboardConfirm'](), l4_gs['window']['wx']['offKeyboardInput'](), l4_gs['window']['wx']['showKeyboard']({ 'defaultValue': gk_hx['text'], 'maxLength': gk_hx['maxChars'], 'multiple': gk_hx['multiline'], 'confirmHold': !![], 'confirmType': 'done', 'success': function (f9st4) {}, 'fail': function (xgkha) {} }), l4_gs['window']['wx']['onKeyboardConfirm'](function (j7501r) {
        var gh_x = j7501r ? j7501r['value'] : '';gk_hx['text'] = gh_x, gk_hx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
      }), l4_gs['window']['wx']['onKeyboardInput'](function (_lzh4s) {
        var i2tqye = _lzh4s ? _lzh4s['value'] : '';if (!gk_hx['multiline']) {
          if (i2tqye['indexOf']('\x0a') != -0x1) {
            laya['wx']['mini']['MiniInput']['inputEnter']();return;
          }
        }gk_hx['text'] = i2tqye, gk_hx['event']('input');
      });
    }, b2iye['inputEnter'] = function () {
      kxgl_['inputElement']['target']['focus'] = ![];
    }, b2iye['wxinputblur'] = function () {
      b2iye['hideKeyboard']();
    }, b2iye['hideKeyboard'] = function () {
      l4_gs['window']['wx']['offKeyboardConfirm'](), l4_gs['window']['wx']['offKeyboardInput'](), l4_gs['window']['wx']['hideKeyboard']({ 'success': function (_lzsh4) {
          console['log']('隐藏键盘');
        }, 'fail': function (sh_l4g) {
          console['log']('隐藏键盘出错:' + (sh_l4g ? sh_l4g['errMsg'] : ''));
        } });
    }, b2iye;
  }(),
      _94 = function () {
    function es9fzt() {}bieq(es9fzt, 'laya.wx.mini.MiniLoader');var t9ezqf = es9fzt['prototype'];return t9ezqf['load'] = function (uk3vx, eszft, r108j7, sz_fh4, r8j701) {
      r108j7 === void 0x0 && (r108j7 = !![]), r8j701 === void 0x0 && (r8j701 = ![]);var zf9st = this;zf9st['_url'] = uk3vx;if (uk3vx['indexOf']('data:image') === 0x0) zf9st['_type'] = eszft = 'image';else zf9st['_type'] = eszft || (eszft = zf9st['getTypeFromUrl'](uk3vx));zf9st['_cache'] = r108j7, zf9st['_data'] = null;var alkhg = 'ascii';if (uk3vx['indexOf']('.fnt') != -0x1) alkhg = 'utf8';else eszft == 'arraybuffer' && (alkhg = '');;var uax = $n6dw['getFileExtension'](uk3vx);if (es9fzt['_fileTypeArr']['indexOf'](uax) != -0x1) l4_gs['EnvConfig']['load']['call'](this, uk3vx, eszft, r108j7, sz_fh4, r8j701);else {
        if (!uwv3['getFileInfo'](uk3vx)) {
          if (uk3vx['indexOf']('layaNativeDir/') != -0x1) {
            if (l4_gs['isZiYu']) {
              var _h4sfz = uwv3['ziyuFileData'][uk3vx];zf9st['onLoaded'](_h4sfz);return;
            } else {
              cosnole['log']('read read'), uwv3['read'](uk3vx, alkhg, new bei2yq(es9fzt, es9fzt['onReadNativeCallBack'], [alkhg, uk3vx, eszft, r108j7, sz_fh4, r8j701, zf9st]));return;
            }
          }if (iqby['rootPath'] == '') var xglh_4 = uk3vx;else xglh_4 = uk3vx['split'](iqby['rootPath'])[0x0];uk3vx['indexOf']('http://') != -0x1 || uk3vx['indexOf']('https://') != -0x1 ? l4_gs['EnvConfig']['load']['call'](zf9st, uk3vx, eszft, r108j7, sz_fh4, r8j701) : uwv3['readFile'](xglh_4, alkhg, new bei2yq(es9fzt, es9fzt['onReadNativeCallBack'], [alkhg, uk3vx, eszft, r108j7, sz_fh4, r8j701, zf9st]), uk3vx);
        } else l4_gs['EnvConfig']['load']['call'](this, uk3vx, eszft, r108j7, sz_fh4, r8j701);
      }
    }, t9ezqf['resMgrLoad'] = function (d5r1o, _f4hsz, qtfze, h_lx, lkaxhg, iby2qp, b2iqp) {
      qtfze === void 0x0 && (qtfze = 0x0), h_lx === void 0x0 && (h_lx = ![]), lkaxhg === void 0x0 && (lkaxhg = ![]), iby2qp === void 0x0 && (iby2qp = 0x0), b2iqp === void 0x0 && (b2iqp = 0x3), d5r1o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d5r1o), l4_gs['EnvConfig']['resMgrLoad'](d5r1o, (g_lxh4, fts94, n$o6) => {
        es9fzt['prototype']['resMgrLoadCallBack'](g_lxh4, fts94, n$o6, _f4hsz);
      }, qtfze, h_lx, lkaxhg, iby2qp, b2iqp);
    }, t9ezqf['resMgrLoadCallBack'] = function (f9qet, hsz4, lxvka, hkagxl) {
      console['log']('buff:::', f9qet, lxvka, uwv3['fileNativeDir'] + '///' + uwv3['fileListName']), hkagxl(f9qet, hsz4, lxvka);
    }, t9ezqf['clearRes'] = function (g4_xl, qt2ef9) {
      qt2ef9 === void 0x0 && (qt2ef9 = ![]);var o15r70 = this;o15r70['clearRes'](g4_xl, qt2ef9);var kx3vau = uwv3['getFileInfo'](g4_xl);if (kx3vau && (g4_xl['indexOf']('http://') != -0x1 || g4_xl['indexOf']('https://') != -0x1)) {
        var ro0d5 = kx3vau['md5'],
            h4gl = uwv3['getFileNativePath'](ro0d5);uwv3['remove'](h4gl);
      }
    }, es9fzt['onReadNativeCallBack'] = function (h4_gls, mavuk3, z4fsh_, $mwu6, efq9zt, xgaklv, ft2e9, t2ef, eq2yit) {
      $mwu6 === void 0x0 && ($mwu6 = !![]), xgaklv === void 0x0 && (xgaklv = ![]), t2ef === void 0x0 && (t2ef = 0x0);if (!t2ef) {
        var $3mu6;if (z4fsh_ == 'json' || z4fsh_ == 'atlas') $3mu6 = l4_gs['getJson'](eq2yit['data']);else z4fsh_ == 'xml' ? $3mu6 = $n6dw['parseXMLFromString'](eq2yit['data']) : $3mu6 = eq2yit['data'];ft2e9['onLoaded']($3mu6), !l4_gs['isZiYu'] && l4_gs['isPosMsgYu'] && z4fsh_ != 'arraybuffer' && wx['postMessage']({ 'url': mavuk3, 'data': $3mu6, 'isLoad': !![] });
      } else t2ef == 0x1 && l4_gs['EnvConfig']['load']['call'](ft2e9, mavuk3, z4fsh_, $mwu6, efq9zt, xgaklv);
    }, $o5nd(es9fzt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), es9fzt;
  }(),
      uwv3 = function (eby2q) {
    function k3uxav() {
      k3uxav['__super']['call'](this);;
    }return bieq(k3uxav, 'laya.wx.mini.MiniFileMgr', eby2q), k3uxav['isLoadFile'] = function (xhgk) {
      return k3uxav['_fileTypeArr']['indexOf'](xhgk) != -0x1 ? !![] : ![];
    }, k3uxav['getFileInfo'] = function (r01od5) {
      var eq9tfz = r01od5['split']('?')[0x0],
          lghk_ = k3uxav['filesListObj'][eq9tfz];if (lghk_ == null) return null;else return lghk_;return null;
    }, k3uxav['onFileUpdate'] = function (kxh_gl, v6um3) {
      var alxgkv = kxh_gl['split']('/'),
          zt9f = alxgkv[alxgkv['length'] - 0x1],
          r7j81 = k3uxav['getFileInfo'](v6um3);if (r7j81 == null) k3uxav['onSaveFile'](v6um3, zt9f);else {
        if (r7j81['readyUrl'] != v6um3) k3uxav['remove'](zt9f, v6um3);
      }
    }, k3uxav['exits'] = function (r1o57, va3u) {
      var _4xlg = k3uxav['getFileNativePath'](r1o57);k3uxav['fs']['getFileInfo']({ 'filePath': _4xlg, 'success': function (d50or) {
          va3u != null && va3u['runWith']([0x0, d50or]);
        }, 'fail': function (_lgx) {
          va3u != null && va3u['runWith']([0x1, _lgx]);
        } });
    }, k3uxav['read'] = function (sfz9e, qt29e, z4f, yp2bi) {
      qt29e === void 0x0 && (qt29e = 'ascill'), yp2bi === void 0x0 && (yp2bi = '');var _9f;yp2bi != '' ? _9f = k3uxav['getFileNativePath'](sfz9e) : _9f = sfz9e, k3uxav['fs']['readFile']({ 'filePath': _9f, 'encoding': qt29e, 'success': function (lhxak) {
          z4f != null && z4f['runWith']([0x0, lhxak]);
        }, 'fail': function (u6nm$) {
          if (u6nm$ && yp2bi != '') k3uxav['down'](yp2bi, qt29e, z4f, yp2bi);else z4f != null && z4f['runWith']([0x1]);
        } });
    }, k3uxav['readNativeFile'] = function (eity, j801r7) {
      k3uxav['fs']['readFile']({ 'filePath': eity, 'encoding': '', 'success': function (f9etsz) {
          j801r7 != null && j801r7['runWith']([0x0]);
        }, 'fail': function (hx4_) {
          j801r7 != null && j801r7['runWith']([0x1]);
        } });
    }, k3uxav['down'] = function (l_hgx, un6m, $mw36, lkg_hx) {
      un6m === void 0x0 && (un6m = 'ascill'), lkg_hx === void 0x0 && (lkg_hx = '');var $56n = k3uxav['getFileNativePath'](lkg_hx),
          qft2e = k3uxav['wxdown']({ 'url': l_hgx, 'filePath': $56n, 'success': function (o$6n) {
          if (o$6n['statusCode'] === 0xc8) k3uxav['readFile'](o$6n['filePath'], un6m, $mw36, lkg_hx);
        }, 'fail': function (gkxa) {
          $mw36 != null && $mw36['runWith']([0x1, gkxa]);
        } });qft2e['onProgressUpdate'](function (hlk_g) {
        $mw36 != null && $mw36['runWith']([0x2, hlk_g['progress']]);
      });
    }, k3uxav['readFile'] = function (nwdm$, g_xkh, q29e, sgh_l4) {
      g_xkh === void 0x0 && (g_xkh = 'ascill'), sgh_l4 === void 0x0 && (sgh_l4 = ''), k3uxav['fs']['readFile']({ 'filePath': nwdm$, 'encoding': g_xkh, 'success': function (um6n) {
          if (nwdm$['indexOf']('http://') != -0x1 || nwdm$['indexOf']('https://') != -0x1) k3uxav['onFileUpdate'](nwdm$, sgh_l4);q29e != null && q29e['runWith']([0x0, um6n]);
        }, 'fail': function (l4sg_) {
          if (l4sg_) q29e != null && q29e['runWith']([0x1, l4sg_]);
        } });
    }, k3uxav['downImg'] = function (_klxg, wvaum, h_4zsf) {
      h_4zsf === void 0x0 && (h_4zsf = '');var zetfs9 = k3uxav['wxdown']({ 'url': _klxg, 'success': function (z4s_lh) {
          z4s_lh['statusCode'] === 0xc8 && k3uxav['copyFile'](z4s_lh['tempFilePath'], h_4zsf, wvaum);
        }, 'fail': function (l_g) {
          wvaum != null && wvaum['runWith']([0x1, l_g]);
        } });
    }, k3uxav['copyFile'] = function (e2yqib, lz_, dwo6$) {
      var va3uk = e2yqib['split']('/'),
          vlxakg = va3uk[va3uk['length'] - 0x1],
          mw3uav = lz_['split']('?')[0x0],
          v3uwm6 = k3uxav['getFileInfo'](lz_),
          m3ku = k3uxav['getFileNativePath'](vlxakg);k3uxav['fs']['copyFile']({ 'srcPath': e2yqib, 'destPath': m3ku, 'success': function (qet9i2) {
          if (!v3uwm6) k3uxav['onSaveFile'](lz_, vlxakg), dwo6$ != null && dwo6$['runWith']([0x0]);else {
            if (v3uwm6['readyUrl'] != lz_) k3uxav['remove'](vlxakg, lz_, dwo6$);
          }
        }, 'fail': function (w$do6) {
          dwo6$ != null && dwo6$['runWith']([0x1, w$do6]);
        } });
    }, k3uxav['getFileNativePath'] = function (qie92) {
      return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qie92;
    }, k3uxav['remove'] = function (z_s49f, bye2q, m6$u) {
      bye2q === void 0x0 && (bye2q = '');var vklga = k3uxav['getFileInfo'](bye2q),
          ro751 = k3uxav['getFileNativePath'](vklga['md5']);$odw['loader']['clearRes'](vklga['readyUrl']), k3uxav['fs']['unlink']({ 'filePath': ro751, 'success': function (kg3vax) {
          if (bye2q != '') k3uxav['onSaveFile'](bye2q, z_s49f);m6$u != null && m6$u['runWith']([0x0]);
        }, 'fail': function (jr0187) {} });
    }, k3uxav['onSaveFile'] = function (hxlg4, o$n6d) {
      var gx_lh4 = hxlg4['split']('?')[0x0];k3uxav['filesListObj'][gx_lh4] = { 'md5': o$n6d, 'readyUrl': hxlg4 }, k3uxav['fs']['writeFile']({ 'filePath': k3uxav['fileNativeDir'] + '/' + k3uxav['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k3uxav['filesListObj']), 'success': function (szl_4h) {
          console['log']('写入测试测试成功：', szl_4h);
        }, 'fail': function (d6n$o) {
          console['log']('写入测试测试失败：', d6n$o);
        } });
    }, k3uxav['existDir'] = function (alghkx, tz94fs) {
      k3uxav['fs']['mkdir']({ 'dirPath': alghkx, 'success': function (a3wuv) {
          tz94fs != null && tz94fs['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
        }, 'fail': function (hf_sz4) {
          if (hf_sz4['errMsg']['indexOf']('file already exists') != -0x1) k3uxav['readSync'](k3uxav['fileListName'], 'utf8', tz94fs);else tz94fs != null && tz94fs['runWith']([0x1, hf_sz4]);
        } });
    }, k3uxav['readSync'] = function (hg_4sl, eqi, _z4lh, j8701r) {
      eqi === void 0x0 && (eqi = 'ascill'), j8701r === void 0x0 && (j8701r = '');var vwau = k3uxav['getFileNativePath'](hg_4sl),
          k3vaum;try {
        k3vaum = k3uxav['fs']['readFileSync'](vwau), _z4lh != null && _z4lh['runWith']([0x0, { 'data': k3vaum }]);
      } catch (tesf) {
        _z4lh != null && _z4lh['runWith']([0x1]);
      }
    }, k3uxav['readCache'] = function () {}, k3uxav['writeCache'] = function (vgka3) {
      var f_4shz = readyUrl['split']('?')[0x0];k3uxav['filesListObj'][f_4shz] = { 'md5': md5Name, 'readyUrl': readyUrl }, k3uxav['fs']['writeFile']({ 'filePath': k3uxav['fileNativeDir'] + '/' + k3uxav['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](k3uxav['filesListObj']), 'success': function (lhgaxk) {}, 'fail': function (iyq2t) {} });
    }, k3uxav['setNativeFileDir'] = function (vuam3w) {
      k3uxav['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vuam3w;
    }, k3uxav['filesListObj'] = {}, k3uxav['fileNativeDir'] = null, k3uxav['fileListName'] = 'layaairfiles.txt', k3uxav['ziyuFileData'] = {}, $o5nd(k3uxav, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this['fs'] = wx['getFileSystemManager']();
    }, 'wxdown', function () {
      return this['wxdown'] = wx['downloadFile'];
    }]), k3uxav;
  }(by2qp),
      sztf4 = function (s_g4lh) {
    function $dwnm6() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = ![], $dwnm6['__super']['call'](this), this['_sound'] = $dwnm6['_createSound']();
    }bieq($dwnm6, 'laya.wx.mini.MiniSound', s_g4lh);var nd$w6m = $dwnm6['prototype'];return nd$w6m['load'] = function (hlsz_) {
      var dor0n5 = this;hlsz_ = iqby['formatURL'](hlsz_), this['url'] = hlsz_;if ($dwnm6['_audioCache'][hlsz_]) {
        this['event']('complete');return;
      }function kghxl() {
        if ($dwnm6['_null'] != undefined) dor0n5['_sound']['onCanplay']($dwnm6['_null']), dor0n5['_sound']['onError']($dwnm6['_null']);else try {
          dor0n5['_sound']['onCanplay'](null), dor0n5['_sound']['onError'](null), $dwnm6['_null'] = null;
        } catch (j57r10) {
          console['warn']('[wxmini] _clearSound:' + j57r10), dor0n5['_sound']['onCanplay'](r10o7), dor0n5['_sound']['onError'](r10o7), $dwnm6['_null'] = r10o7;
        }
      }function etfq29() {
        kghxl(), uxa3kv['loaded'] = !![], uxa3kv['event']('complete'), $dwnm6['_audioCache'][uxa3kv['url']] = uxa3kv;
      }function wnm6$u(p2yiqb) {
        console['error']('errCode=' + p2yiqb['errCode'] + '  errMsg=' + p2yiqb['errMsg']), kghxl(), uxa3kv['event']('error');
      }function r10o7() {}this['_sound']['onCanplay'](etfq29), this['_sound']['onError'](wnm6$u), this['_sound']['src'] = hlsz_;var uxa3kv = this;
    }, nd$w6m['play'] = function (fz9tes, dno56) {
      fz9tes === void 0x0 && (fz9tes = 0x0), dno56 === void 0x0 && (dno56 = 0x0);var q2t9ei;if (this['url'] == z4fst9['_tMusic']) {
        if (!$dwnm6['_musicAudio']) $dwnm6['_musicAudio'] = $dwnm6['_createSound']();q2t9ei = $dwnm6['_musicAudio'];
      } else q2t9ei = $dwnm6['_createSound']();q2t9ei['src'] = this['url'];var mw6nu = new hsl_4g(q2t9ei);return mw6nu['url'] = this['url'], mw6nu['loops'] = dno56, mw6nu['startTime'] = fz9tes, mw6nu['play'](), z4fst9['addChannel'](mw6nu), mw6nu;
    }, nd$w6m['dispose'] = function () {
      var $5nrdo = $dwnm6['_audioCache'][this['url']];$5nrdo && ($5nrdo['src'] = '', delete $dwnm6['_audioCache'][this['url']]);
    }, z4fh_s(0x0, nd$w6m, 'duration', function () {
      return this['_sound']['duration'];
    }), $dwnm6['_createSound'] = function () {
      return $dwnm6['_id']++, l4_gs['window']['wx']['createInnerAudioContext']();
    }, $dwnm6['_musicAudio'] = null, $dwnm6['_id'] = 0x0, $dwnm6['_audioCache'] = {}, $dwnm6['_null'] = undefined, $dwnm6;
  }(by2qp),
      hsl_4g = function (yq2eb) {
    function vamk3(lkgh_) {
      this['_audio'] = null, this['_onEnd'] = null, vamk3['__super']['call'](this), this['_audio'] = lkgh_, this['_onEnd'] = $n6dw['bind'](this['__onEnd'], this), lkgh_['onEnded'](this['_onEnd']);
    }bieq(vamk3, 'laya.wx.mini.MiniSoundChannel', yq2eb);var z_s4hl = vamk3['prototype'];return z_s4hl['__onEnd'] = function () {
      if (this['loops'] == 0x1) {
        this['completeHandler'] && ($odw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);this['stop'](), this['event']('complete');return;
      }this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, z_s4hl['__onNull'] = function () {}, z_s4hl['play'] = function () {
      this['isStopped'] = ![], z4fst9['addChannel'](this);if (this['_audio']) this['_audio']['play']();
    }, z_s4hl['stop'] = function () {
      this['isStopped'] = !![], z4fst9['removeChannel'](this), this['completeHandler'] = null;if (!this['_audio']) return;this['_audio']['stop']();if (vamk3['_null'] != undefined) this['_audio']['onEnded'](vamk3['_null']);else try {
        this['_audio']['onEnded'](null), vamk3['_null'] = null;
      } catch ($mw3u) {
        console['warn']('[wxmini] stop:' + $mw3u), this['_audio']['onEnded']($n6dw['bind'](this['__onNull'], this)), vamk3['_null'] = $n6dw['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }, z_s4hl['pause'] = function () {
      this['isStopped'] = !![], this['_audio']['pause']();
    }, z_s4hl['resume'] = function () {
      if (!this['_audio']) return;this['isStopped'] = ![], z4fst9['addChannel'](this), this['_audio']['play']();
    }, z4fh_s(0x0, z_s4hl, 'position', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['currentTime'];
    }), z4fh_s(0x0, z_s4hl, 'duration', function () {
      if (!this['_audio']) return 0x0;return this['_audio']['duration'];
    }), z4fh_s(0x0, z_s4hl, 'volume', function () {
      return 0x1;
    }, function (u6mw$3) {}), vamk3['_null'] = undefined, vamk3;
  }(kxglah);
})(window, document, Laya);typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });for (var dro$n5 in Laya) {
    var fq2te = Laya[dro$n5];fq2te && fq2te['__isclass'] && (exports[dro$n5] = fq2te);
  }
});