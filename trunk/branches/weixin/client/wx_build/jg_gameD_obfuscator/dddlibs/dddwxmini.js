var v = wx.$d;
!function ($ykejo5, _z7phdw) {
  _z7phdw['un'], _z7phdw['uns'];var ivgft = _z7phdw['static'],
      xnw7zp = _z7phdw['class'],
      vg8ai = _z7phdw['getset'];_z7phdw['__newvec'];var ok5$ry = laya['utils']['Browser'],
      l0_pnxz = (laya['events']['Event'], laya['events']['EventDispatcher']),
      z7xpl = laya['resource']['HTMLImage'],
      ex$_n0 = laya['utils']['Handler'],
      _l7npxz = laya['display']['Input'],
      jyg = laya['net']['Loader'];laya['maths']['Matrix'];var aycrgij = laya['renders']['Render'],
      d9hw26 = laya['utils']['RunDriver'];laya['media']['Sound'];var h2ub9d = laya['media']['SoundChannel'],
      f8gcviq = laya['media']['SoundManager'],
      $or5jy = (laya['display']['Stage'], laya['net']['URL']),
      e05$oyk = laya['utils']['Utils'],
      f341mq = (xnw7zp(vqfi38, 'laya.wx.mini.MiniAdpter'), vqfi38['getJson'] = function (ph7bdw6) {
    return JSON['parse'](ph7bdw6);
  }, vqfi38['init'] = function (ryjakcg, rgjaciy) {
    void 0x0 === ryjakcg && (ryjakcg = !0x1), void 0x0 === rgjaciy && (rgjaciy = !0x1), vqfi38['_inited'] || (vqfi38['window'] = $ykejo5)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (vqfi38['_inited'] = !0x0, vqfi38['isZiYu'] = rgjaciy, vqfi38['isPosMsgYu'] = ryjakcg, vqfi38['EnvConfig'] = {}, vqfi38['isZiYu'] || (w6hd72b['setNativeFileDir']('/layaairGame'), w6hd72b['existDir'](w6hd72b['fileNativeDir'], ex$_n0['create'](vqfi38, vqfi38['onMkdirCallBack']))), vqfi38['window']['focus'] = function () {}, _z7phdw['getUrlPath'] = function () {}, vqfi38['window']['logtime'] = function (zlp_xn0) {}, vqfi38['window']['alertTimeLog'] = function ($n0_x) {}, vqfi38['window']['resetShareInfo'] = function () {}, vqfi38['window']['CanvasRenderingContext2D'] = function () {}, vqfi38['window']['CanvasRenderingContext2D']['prototype'] = vqfi38['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], vqfi38['window']['document']['body']['appendChild'] = function () {}, vqfi38['EnvConfig']['pixelRatioInt'] = 0x0, d9hw26['getPixelRatio'] = vqfi38['pixelRatio'], vqfi38['_preCreateElement'] = ok5$ry['createElement'], ok5$ry['createElement'] = vqfi38['createElement'], d9hw26['createShaderCondition'] = vqfi38['createShaderCondition'], e05$oyk['parseXMLFromString'] = vqfi38['parseXMLFromString'], _l7npxz['_createInputElement'] = i38fqvt['_createInputElement'], vqfi38['EnvConfig']['load'] = jyg['prototype']['load'], jyg['prototype']['load'] = oryja5k['prototype']['load'], vqfi38['isZiYu'] && ryjakcg && wx['onMessage'](function (gc8vfi) {
      gc8vfi['isLoad'] && (w6hd72b['ziyuFileData'][gc8vfi['url']] = gc8vfi['data']);
    }));
  }, vqfi38['onMkdirCallBack'] = function (gkjrayc, lpnx7z_) {
    gkjrayc || (w6hd72b['filesListObj'] = JSON['parse'](lpnx7z_['data']));
  }, vqfi38['pixelRatio'] = function () {
    if (!vqfi38['EnvConfig']['pixelRatioInt']) try {
      var jkyoar = wx['getSystemInfoSync']();return vqfi38['EnvConfig']['pixelRatioInt'] = jkyoar['pixelRatio'], jkyoar['pixelRatio'];
    } catch (garyij) {}return vqfi38['EnvConfig']['pixelRatioInt'];
  }, vqfi38['createElement'] = function (v8gir) {
    var jigrc;if ('canvas' == v8gir) return 0x1 == vqfi38['idx'] ? vqfi38['isZiYu'] ? (jigrc = sharedCanvas)['style'] = {} : jigrc = $ykejo5['canvas'] : jigrc = $ykejo5['wx']['createCanvas'](), vqfi38['idx']++, jigrc;if ('textarea' == v8gir || 'input' == v8gir) return vqfi38['onCreateInput'](v8gir);if ('div' != v8gir) return vqfi38['_preCreateElement'](v8gir);return v8gir = vqfi38['_preCreateElement'](v8gir), (v8gir['contains'] = function (hwb7dz) {
      return null;
    }, v8gir['removeChild'] = function (j$o5kyr) {}, v8gir);
  }, vqfi38['onCreateInput'] = function (rk5acyj) {
    return rk5acyj = vqfi38['_preCreateElement'](rk5acyj), (rk5acyj['focus'] = i38fqvt['wxinputFocus'], rk5acyj['blur'] = i38fqvt['wxinputblur'], rk5acyj['style'] = {}, rk5acyj['value'] = 0x0, rk5acyj['parentElement'] = {}, rk5acyj['placeholder'] = {}, rk5acyj['type'] = {}, rk5acyj['setColor'] = function (ao5kjr) {}, rk5acyj['setType'] = function (xznl0_e) {}, rk5acyj['setFontFace'] = function (_xlp7nz) {}, rk5acyj['addEventListener'] = function (zbwdp7h) {}, rk5acyj['contains'] = function (yjcagkr) {
      return null;
    }, rk5acyj['removeChild'] = function (kyr5$) {}, rk5acyj);
  }, vqfi38['createShaderCondition'] = function (rayko) {
    var vqm34ft = this;return function () {
      return vqm34ft[rayko['replace']('this.', '')];
    };
  }, vqfi38['EnvConfig'] = null, vqfi38['window'] = null, vqfi38['_preCreateElement'] = null, vqfi38['_inited'] = !0x1, vqfi38['wxRequest'] = null, vqfi38['systemInfo'] = null, vqfi38['version'] = '0.0.1', vqfi38['isZiYu'] = !0x1, vqfi38['isPosMsgYu'] = !0x1, vqfi38['parseXMLFromString'] = function (vcifa) {
    var e05no;vcifa = vcifa['replace'](/>\s+</g, '><');try {
      e05no = new $ykejo5['Parser']['DOMParser']()['parseFromString'](vcifa, 'text/xml');
    } catch (b2wdh69) {
      throw '需要引入xml解析库文件';
    }return e05no;
  }, vqfi38['idx'] = 0x1, vqfi38);function vqfi38() {}xnw7zp(gcif8va, 'laya.wx.mini.MiniImage'), gcif8va['prototype']['_loadImage'] = function (z0xnlp) {
    var fcvai8 = !0x1;-0x1 == z0xnlp['indexOf']('layaNativeDir/') && (fcvai8 = !0x0, z0xnlp = $or5jy['formatURL'](z0xnlp)), w6hd72b['getFileInfo'](z0xnlp) ? gcif8va['onCreateImage'](z0xnlp, this, !fcvai8) : -0x1 != z0xnlp['indexOf']('http://') || -0x1 != z0xnlp['indexOf']('https://') ? w6hd72b['downImg'](z0xnlp, new ex$_n0(gcif8va, gcif8va['onDownImgCallBack'], [z0xnlp, this]), z0xnlp) : gcif8va['onCreateImage'](z0xnlp, this, !0x0);
  }, gcif8va['onDownImgCallBack'] = function (o5l$n0e, _lnzxp, phz_7x) {
    phz_7x ? _lnzxp['onError'](null) : gcif8va['onCreateImage'](o5l$n0e, _lnzxp);
  }, gcif8va['onCreateImage'] = function (e$yo50k, dphbzw7, n0lz_x) {
    var rjkycg, b26wd7h;function fva8gic() {
      b26wd7h['onload'] = null, b26wd7h['onerror'] = null, delete dphbzw7['imgCache'][e$yo50k];
    }rjkycg = (n0lz_x = void 0x0 === n0lz_x ? !0x1 : n0lz_x) ? e$yo50k : (gcvfi8q = w6hd72b['getFileInfo'](e$yo50k)['md5'], w6hd72b['getFileNativePath'](gcvfi8q)), null == dphbzw7['imgCache'] && (dphbzw7['imgCache'] = {}), n0lz_x = function () {
      fva8gic(), dphbzw7['onLoaded'](b26wd7h);
    };var gcvfi8q = function () {
      fva8gic(), dphbzw7['event']('error', 'Load image failed');
    };'nativeimage' == dphbzw7['_type'] ? ((b26wd7h = new ok5$ry['window']['Image']())['crossOrigin'] = '', b26wd7h['onload'] = n0lz_x, b26wd7h['onerror'] = gcvfi8q, b26wd7h['src'] = rjkycg, dphbzw7['imgCache'][e$yo50k] = b26wd7h) : new z7xpl['create'](rjkycg, { 'onload': n0lz_x, 'onerror': gcvfi8q, 'onCreate': function ($5nl0o) {
        b26wd7h = $5nl0o, dphbzw7['imgCache'][e$yo50k] = $5nl0o;
      } });
  };function gcif8va() {}var i38fqvt = (xnw7zp(hd96bw2, 'laya.wx.mini.MiniInput'), hd96bw2['_createInputElement'] = function () {
    _l7npxz['_initInput'](_l7npxz['area'] = ok5$ry['createElement']('textarea')), _l7npxz['_initInput'](_l7npxz['input'] = ok5$ry['createElement']('input')), _l7npxz['inputContainer'] = ok5$ry['createElement']('div'), _l7npxz['inputContainer']['style']['position'] = 'absolute', _l7npxz['inputContainer']['style']['zIndex'] = 0x186a0, ok5$ry['container']['appendChild'](_l7npxz['inputContainer']), _l7npxz['inputContainer']['setPos'] = function (it8vgq, $0n5o) {
      _l7npxz['inputContainer']['style']['left'] = it8vgq + 'px', _l7npxz['inputContainer']['style']['top'] = $0n5o + 'px';
    }, _z7phdw['stage']['on']('resize', null, hd96bw2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qmvf43) {
      $ykejo5['dispatchEvent'] && $ykejo5['dispatchEvent']('resize');
    }), f8gcviq['_soundClass'] = db7hw6p, f8gcviq['_musicClass'] = db7hw6p;
  }, hd96bw2['_onStageResize'] = function () {
    _z7phdw['stage']['_canvasTransform']['identity']()['scale'](ok5$ry['width'] / aycrgij['canvas']['width'] / d9hw26['getPixelRatio'](), ok5$ry['height'] / aycrgij['canvas']['height'] / d9hw26['getPixelRatio']());
  }, hd96bw2['wxinputFocus'] = function (v8q43) {
    var zhw7bdp = _l7npxz['inputElement']['target'];zhw7bdp && !zhw7bdp['editable'] || (f341mq['window']['wx']['offKeyboardConfirm'](), f341mq['window']['wx']['offKeyboardInput'](), f341mq['window']['wx']['showKeyboard']({ 'defaultValue': zhw7bdp['text'], 'maxLength': zhw7bdp['maxChars'], 'multiple': zhw7bdp['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (jacry) {}, 'fail': function (r$5kjo) {} }), f341mq['window']['wx']['onKeyboardConfirm'](function (cgraijy) {
      cgraijy = cgraijy ? cgraijy['value'] : '', (zhw7bdp['text'] = cgraijy, zhw7bdp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), f341mq['window']['wx']['onKeyboardInput'](function (nxl7_p) {
      nxl7_p = nxl7_p ? nxl7_p['value'] : '', zhw7bdp['multiline'] || -0x1 == nxl7_p['indexOf']('\x0a') ? (zhw7bdp['text'] = nxl7_p, zhw7bdp['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, hd96bw2['inputEnter'] = function () {
    _l7npxz['inputElement']['target']['focus'] = !0x1;
  }, hd96bw2['wxinputblur'] = function () {
    hd96bw2['hideKeyboard']();
  }, hd96bw2['hideKeyboard'] = function () {
    f341mq['window']['wx']['offKeyboardConfirm'](), f341mq['window']['wx']['offKeyboardInput'](), f341mq['window']['wx']['hideKeyboard']({ 'success': function (fv48t) {
        console['log']('隐藏键盘');
      }, 'fail': function (hzbdw) {
        console['log']('隐藏键盘出错:' + (hzbdw ? hzbdw['errMsg'] : ''));
      } });
  }, hd96bw2);function hd96bw2() {}var oryja5k = function () {
    function qg8iftv() {}xnw7zp(qg8iftv, 'laya.wx.mini.MiniLoader');var yjackg = qg8iftv['prototype'];return yjackg['load'] = function (yijracg, xn_0$, j5aory, lnp0_z, nlzxe) {
      void 0x0 === j5aory && (j5aory = !0x0), void 0x0 === nlzxe && (nlzxe = !0x1);var gr8avci = this;0x0 === (gr8avci['_url'] = yijracg)['indexOf']('data:image') ? gr8avci['_type'] = xn_0$ = 'image' : gr8avci['_type'] = xn_0$ = xn_0$ || gr8avci['getTypeFromUrl'](yijracg), gr8avci['_cache'] = j5aory, gr8avci['_data'] = null;var xp7nzl_ = 'ascii';-0x1 != yijracg['indexOf']('.fnt') ? xp7nzl_ = 'utf8' : 'arraybuffer' == xn_0$ && (xp7nzl_ = '');var qvt3i8f = e05$oyk['getFileExtension'](yijracg);if (-0x1 != qg8iftv['_fileTypeArr']['indexOf'](qvt3i8f)) f341mq['EnvConfig']['load']['call'](this, yijracg, xn_0$, j5aory, lnp0_z, nlzxe);else {
        if (w6hd72b['getFileInfo'](yijracg)) f341mq['EnvConfig']['load']['call'](this, yijracg, xn_0$, j5aory, lnp0_z, nlzxe);else {
          if (-0x1 != yijracg['indexOf']('layaNativeDir/')) {
            if (f341mq['isZiYu']) {
              var ro$yj5k = w6hd72b['ziyuFileData'][yijracg];return void gr8avci['onLoaded'](ro$yj5k);
            }return cosnole['log']('read read'), void w6hd72b['read'](yijracg, xp7nzl_, new ex$_n0(qg8iftv, qg8iftv['onReadNativeCallBack'], [xp7nzl_, yijracg, xn_0$, j5aory, lnp0_z, nlzxe, gr8avci]));
          }ro$yj5k = '' == $or5jy['rootPath'] ? yijracg : yijracg['split']($or5jy['rootPath'])[0x0], -0x1 != yijracg['indexOf']('http://') || -0x1 != yijracg['indexOf']('https://') ? f341mq['EnvConfig']['load']['call'](gr8avci, yijracg, xn_0$, j5aory, lnp0_z, nlzxe) : w6hd72b['readFile'](ro$yj5k, xp7nzl_, new ex$_n0(qg8iftv, qg8iftv['onReadNativeCallBack'], [xp7nzl_, yijracg, xn_0$, j5aory, lnp0_z, nlzxe, gr8avci]), yijracg);
        }
      }
    }, yjackg['resMgrLoad'] = function (m43qtf1, gyjacir, _h7zwd, x0_zln, y0ko$5e, hdwb26, $0enl5o) {
      void 0x0 === _h7zwd && (_h7zwd = 0x0), void 0x0 === x0_zln && (x0_zln = !0x1), void 0x0 === y0ko$5e && (y0ko$5e = !0x1), void 0x0 === hdwb26 && (hdwb26 = 0x0), void 0x0 === $0enl5o && ($0enl5o = 0x3), -0x1 != m43qtf1['indexOf']('mpack') && console['log']('=============resMgrLoad url:', m43qtf1), f341mq['EnvConfig']['resMgrLoad'](m43qtf1, (_e0xn, _znwp, vq8cfig) => {
        qg8iftv['prototype']['resMgrLoadCallBack'](_e0xn, _znwp, vq8cfig, gyjacir);
      }, _h7zwd, x0_zln, y0ko$5e, hdwb26, $0enl5o);
    }, yjackg['resMgrLoadCallBack'] = function (xz_nl0e, pw7_dh, gifv8c, pn7zw) {
      console['log']('buff:::', xz_nl0e, gifv8c, w6hd72b['fileNativeDir'] + '///' + w6hd72b['fileListName']), pn7zw(xz_nl0e, pw7_dh, gifv8c);
    }, yjackg['clearRes'] = function (w27hd6, c5ryjk) {
      this['clearRes'](w27hd6, c5ryjk = void 0x0 === c5ryjk ? !0x1 : c5ryjk), c5ryjk = w6hd72b['getFileInfo'](w27hd6), !c5ryjk || -0x1 == w27hd6['indexOf']('http://') && -0x1 == w27hd6['indexOf']('https://') || (c5ryjk = c5ryjk['md5'], c5ryjk = w6hd72b['getFileNativePath'](c5ryjk), w6hd72b['remove'](c5ryjk));
    }, qg8iftv['onReadNativeCallBack'] = function (enlxo0$, yriac, rc8ij, tfqiv3, h2d9, fq1t4m, ci8rgav, d62h7wb, ok0$l5) {
      void 0x0 === tfqiv3 && (tfqiv3 = !0x0), void 0x0 === fq1t4m && (fq1t4m = !0x1), (d62h7wb = void 0x0 === d62h7wb ? 0x0 : d62h7wb) ? 0x1 == d62h7wb && f341mq['EnvConfig']['load']['call'](ci8rgav, yriac, rc8ij, tfqiv3, h2d9, fq1t4m) : (ok0$l5 = 'json' == rc8ij || 'atlas' == rc8ij ? f341mq['getJson'](ok0$l5['data']) : 'xml' == rc8ij ? e05$oyk['parseXMLFromString'](ok0$l5['data']) : ok0$l5['data'], ci8rgav['onLoaded'](ok0$l5), !f341mq['isZiYu'] && f341mq['isPosMsgYu'] && 'arraybuffer' != rc8ij && wx['postMessage']({ 'url': yriac, 'data': ok0$l5, 'isLoad': !0x0 }));
    }, ivgft(qg8iftv, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), qg8iftv;
  }(),
      w6hd72b = (xnw7zp(cvigaf, 'laya.wx.mini.MiniFileMgr', l0_pnxz), cvigaf['isLoadFile'] = function (wpx_7zn) {
    return -0x1 != cvigaf['_fileTypeArr']['indexOf'](wpx_7zn);
  }, cvigaf['getFileInfo'] = function (icgr8j) {
    return icgr8j = icgr8j['split']('?')[0x0], icgr8j = cvigaf['filesListObj'][icgr8j], null == icgr8j ? null : icgr8j;
  }, cvigaf['onFileUpdate'] = function (_lnzx0e, c8gfivq) {
    var vg8raic = _lnzx0e['split']('/');_lnzx0e = vg8raic[vg8raic['length'] - 0x1], vg8raic = cvigaf['getFileInfo'](c8gfivq), null == vg8raic ? cvigaf['onSaveFile'](c8gfivq, _lnzx0e) : vg8raic['readyUrl'] != c8gfivq && cvigaf['remove'](_lnzx0e, c8gfivq);
  }, cvigaf['exits'] = function (eonl0x, f4vq8) {
    eonl0x = cvigaf['getFileNativePath'](eonl0x), cvigaf['fs']['getFileInfo']({ 'filePath': eonl0x, 'success': function (cqfv8g) {
        null != f4vq8 && f4vq8['runWith']([0x0, cqfv8g]);
      }, 'fail': function (aykgjr) {
        null != f4vq8 && f4vq8['runWith']([0x1, aykgjr]);
      } });
  }, cvigaf['read'] = function (acgv8r, akcy5, jgrc8i, itv8qf) {
    void 0x0 === akcy5 && (akcy5 = 'ascill'), acgv8r = '' != (itv8qf = void 0x0 === itv8qf ? '' : itv8qf) ? cvigaf['getFileNativePath'](acgv8r) : acgv8r, cvigaf['fs']['readFile']({ 'filePath': acgv8r, 'encoding': akcy5, 'success': function (_zl0p) {
        null != jgrc8i && jgrc8i['runWith']([0x0, _zl0p]);
      }, 'fail': function (en$_x0) {
        en$_x0 && '' != itv8qf ? cvigaf['down'](itv8qf, akcy5, jgrc8i, itv8qf) : null != jgrc8i && jgrc8i['runWith']([0x1]);
      } });
  }, cvigaf['readNativeFile'] = function (nlx0oe$, ragi) {
    cvigaf['fs']['readFile']({ 'filePath': nlx0oe$, 'encoding': '', 'success': function (ia8cjgr) {
        null != ragi && ragi['runWith']([0x0]);
      }, 'fail': function (krya5jc) {
        null != ragi && ragi['runWith']([0x1]);
      } });
  }, cvigaf['down'] = function (qf3vm, _nx$e0, gcivf8q, i8ragvc) {
    void 0x0 === _nx$e0 && (_nx$e0 = 'ascill'), void 0x0 === i8ragvc && (i8ragvc = '');var cqv8igf = cvigaf['getFileNativePath'](i8ragvc);cvigaf['wxdown']({ 'url': qf3vm, 'filePath': cqv8igf, 'success': function (ph6wb7) {
        0xc8 === ph6wb7['statusCode'] && cvigaf['readFile'](ph6wb7['filePath'], _nx$e0, gcivf8q, i8ragvc);
      }, 'fail': function (o$0l5n) {
        null != gcivf8q && gcivf8q['runWith']([0x1, o$0l5n]);
      } })['onProgressUpdate'](function (i8gcrva) {
      null != gcivf8q && gcivf8q['runWith']([0x2, i8gcrva['progress']]);
    });
  }, cvigaf['readFile'] = function (kycajrg, lzn0e_x, b6hwp7, kjyarc) {
    void 0x0 === kjyarc && (kjyarc = ''), cvigaf['fs']['readFile']({ 'filePath': kycajrg, 'encoding': lzn0e_x = void 0x0 === lzn0e_x ? 'ascill' : lzn0e_x, 'success': function (arkcjy5) {
        -0x1 == kycajrg['indexOf']('http://') && -0x1 == kycajrg['indexOf']('https://') || cvigaf['onFileUpdate'](kycajrg, kjyarc), null != b6hwp7 && b6hwp7['runWith']([0x0, arkcjy5]);
      }, 'fail': function (hbu962) {
        hbu962 && null != b6hwp7 && b6hwp7['runWith']([0x1, hbu962]);
      } });
  }, cvigaf['downImg'] = function (z7pwbdh, l_e0x, cjgayr) {
    void 0x0 === cjgayr && (cjgayr = ''), cvigaf['wxdown']({ 'url': z7pwbdh, 'success': function (tqf8gi) {
        0xc8 === tqf8gi['statusCode'] && cvigaf['copyFile'](tqf8gi['tempFilePath'], cjgayr, l_e0x);
      }, 'fail': function (xn0oe$) {
        null != l_e0x && l_e0x['runWith']([0x1, xn0oe$]);
      } });
  }, cvigaf['copyFile'] = function (_px7nz, d7p6bhw, kora) {
    var pbzw7dh = _px7nz['split']('/'),
        cyijgra = pbzw7dh[pbzw7dh['length'] - 0x1];d7p6bhw['split']('?')[0x0];var w6bhd27 = cvigaf['getFileInfo'](d7p6bhw);pbzw7dh = cvigaf['getFileNativePath'](cyijgra), cvigaf['fs']['copyFile']({ 'srcPath': _px7nz, 'destPath': pbzw7dh, 'success': function (x_7plz) {
        w6bhd27 ? w6bhd27['readyUrl'] != d7p6bhw && cvigaf['remove'](cyijgra, d7p6bhw, kora) : (cvigaf['onSaveFile'](d7p6bhw, cyijgra), null != kora && kora['runWith']([0x0]));
      }, 'fail': function (dp7hz_) {
        null != kora && kora['runWith']([0x1, dp7hz_]);
      } });
  }, cvigaf['getFileNativePath'] = function (dz_7phw) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dz_7phw;
  }, cvigaf['remove'] = function (jy5oe$k, ey5j$o, carykj) {
    void 0x0 === ey5j$o && (ey5j$o = '');var xlnze_0 = cvigaf['getFileInfo'](ey5j$o),
        carvg8 = cvigaf['getFileNativePath'](xlnze_0['md5']);_z7phdw['loader']['clearRes'](xlnze_0['readyUrl']), cvigaf['fs']['unlink']({ 'filePath': carvg8, 'success': function (jakr) {
        '' != ey5j$o && cvigaf['onSaveFile'](ey5j$o, jy5oe$k), null != carykj && carykj['runWith']([0x0]);
      }, 'fail': function (w6d92h) {} });
  }, cvigaf['onSaveFile'] = function (jy$eok5, b7dpzwh) {
    var w62b9h = jy$eok5['split']('?')[0x0];cvigaf['filesListObj'][w62b9h] = { 'md5': b7dpzwh, 'readyUrl': jy$eok5 }, cvigaf['fs']['writeFile']({ 'filePath': cvigaf['fileNativeDir'] + '/' + cvigaf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cvigaf['filesListObj']), 'success': function (aoy5rj) {
        console['log']('写入测试测试成功：', aoy5rj);
      }, 'fail': function (ft483) {
        console['log']('写入测试测试失败：', ft483);
      } });
  }, cvigaf['existDir'] = function (k$elo50, a8vgcif) {
    cvigaf['fs']['mkdir']({ 'dirPath': k$elo50, 'success': function (x0$le) {
        null != a8vgcif && a8vgcif['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (x0$lne) {
        -0x1 != x0$lne['errMsg']['indexOf']('file already exists') ? cvigaf['readSync'](cvigaf['fileListName'], 'utf8', a8vgcif) : null != a8vgcif && a8vgcif['runWith']([0x1, x0$lne]);
      } });
  }, cvigaf['readSync'] = function (j5eo$ky, c8griv, npl0_z, wb672d) {
    void 0x0 === c8griv && (c8griv = 'ascill'), void 0x0 === wb672d && (wb672d = ''), j5eo$ky = cvigaf['getFileNativePath'](j5eo$ky);var w6db92h;try {
      w6db92h = cvigaf['fs']['readFileSync'](j5eo$ky), null != npl0_z && npl0_z['runWith']([0x0, { 'data': w6db92h }]);
    } catch (yokj5a) {
      null != npl0_z && npl0_z['runWith']([0x1]);
    }
  }, cvigaf['readCache'] = function () {}, cvigaf['writeCache'] = function (gcarjyk) {
    var gijyr = readyUrl['split']('?')[0x0];cvigaf['filesListObj'][gijyr] = { 'md5': md5Name, 'readyUrl': readyUrl }, cvigaf['fs']['writeFile']({ 'filePath': cvigaf['fileNativeDir'] + '/' + cvigaf['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](cvigaf['filesListObj']), 'success': function ($05oel) {}, 'fail': function (hw7pdb) {} });
  }, cvigaf['setNativeFileDir'] = function (whd7b2) {
    cvigaf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + whd7b2;
  }, cvigaf['filesListObj'] = {}, cvigaf['fileNativeDir'] = null, cvigaf['fileListName'] = 'layaairfiles.txt', cvigaf['ziyuFileData'] = {}, ivgft(cvigaf, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), cvigaf);function cvigaf() {
    cvigaf['__super']['call'](this);
  }var db7hw6p = function () {
    function xn0z_p() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, xn0z_p['__super']['call'](this), this['_sound'] = xn0z_p['_createSound']();
    }xnw7zp(xn0z_p, 'laya.wx.mini.MiniSound', l0_pnxz);var joye5k$ = xn0z_p['prototype'];return joye5k$['load'] = function ($5eky0o) {
      var jckrya = this,
          pn7xz_l;function kjo5$e() {
        if (null != xn0z_p['_null']) jckrya['_sound']['onCanplay'](xn0z_p['_null']), jckrya['_sound']['onError'](xn0z_p['_null']);else try {
          jckrya['_sound']['onCanplay'](null), jckrya['_sound']['onError'](null), xn0z_p['_null'] = null;
        } catch (wz7_dp) {
          console['warn']('[wxmini] _clearSound:' + wz7_dp), jckrya['_sound']['onCanplay'](h_d7zp), jckrya['_sound']['onError'](h_d7zp), xn0z_p['_null'] = h_d7zp;
        }
      }function h_d7zp() {}$5eky0o = $or5jy['formatURL']($5eky0o), this['url'] = $5eky0o, xn0z_p['_audioCache'][$5eky0o] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        kjo5$e(), pn7xz_l['loaded'] = !0x0, pn7xz_l['event']('complete'), xn0z_p['_audioCache'][pn7xz_l['url']] = pn7xz_l;
      }), this['_sound']['onError'](function (ti83fvq) {
        console['error']('errCode=' + ti83fvq['errCode'] + '  errMsg=' + ti83fvq['errMsg']), kjo5$e(), pn7xz_l['event']('error');
      }), this['_sound']['src'] = $5eky0o, pn7xz_l = this);
    }, joye5k$['play'] = function (gajric8, jyoak5r) {
      void 0x0 === gajric8 && (gajric8 = 0x0), void 0x0 === jyoak5r && (jyoak5r = 0x0), (d7_hzw = this['url'] == f8gcviq['_tMusic'] ? (xn0z_p['_musicAudio'] || (xn0z_p['_musicAudio'] = xn0z_p['_createSound']()), xn0z_p['_musicAudio']) : xn0z_p['_createSound']())['src'] = this['url'];var d7_hzw = new igcaf8(d7_hzw);return d7_hzw['url'] = this['url'], d7_hzw['loops'] = jyoak5r, d7_hzw['startTime'] = gajric8, d7_hzw['play'](), f8gcviq['addChannel'](d7_hzw), d7_hzw;
    }, joye5k$['dispose'] = function () {
      var b26d9hu = xn0z_p['_audioCache'][this['url']];b26d9hu && (b26d9hu['src'] = '', delete xn0z_p['_audioCache'][this['url']]);
    }, vg8ai(0x0, joye5k$, 'duration', function () {
      return this['_sound']['duration'];
    }), xn0z_p['_createSound'] = function () {
      return xn0z_p['_id']++, f341mq['window']['wx']['createInnerAudioContext']();
    }, xn0z_p['_musicAudio'] = null, xn0z_p['_id'] = 0x0, xn0z_p['_audioCache'] = {}, xn0z_p['_null'] = void 0x0, xn0z_p;
  }(),
      igcaf8 = function () {
    function vagc8ri(kr5jyc) {
      this['_audio'] = null, this['_onEnd'] = null, vagc8ri['__super']['call'](this), this['_audio'] = kr5jyc, this['_onEnd'] = e05$oyk['bind'](this['__onEnd'], this), kr5jyc['onEnded'](this['_onEnd']);
    }xnw7zp(vagc8ri, 'laya.wx.mini.MiniSoundChannel', h2ub9d);var rok$j5 = vagc8ri['prototype'];return rok$j5['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (_z7phdw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, rok$j5['__onNull'] = function () {}, rok$j5['play'] = function () {
      this['isStopped'] = !0x1, f8gcviq['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, rok$j5['stop'] = function () {
      if (this['isStopped'] = !0x0, f8gcviq['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != vagc8ri['_null']) this['_audio']['onEnded'](vagc8ri['_null']);else try {
          this['_audio']['onEnded'](null), vagc8ri['_null'] = null;
        } catch (v8iacfg) {
          console['warn']('[wxmini] stop:' + v8iacfg), this['_audio']['onEnded'](e05$oyk['bind'](this['__onNull'], this)), vagc8ri['_null'] = e05$oyk['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, rok$j5['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, rok$j5['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, f8gcviq['addChannel'](this), this['_audio']['play']());
    }, vg8ai(0x0, rok$j5, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), vg8ai(0x0, rok$j5, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), vg8ai(0x0, rok$j5, 'volume', function () {
      return 0x1;
    }, function (wd7pz_h) {}), vagc8ri['_null'] = void 0x0, vagc8ri;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (no5e$, okyaj5r) {
  'use strict';

  for (var f3m4vq in Object['defineProperty'](okyaj5r, '__esModule', { 'value': !0x0 }), Laya) {
    var jkgrcy = Laya[f3m4vq];jkgrcy && jkgrcy['__isclass'] && (okyaj5r[f3m4vq] = jkgrcy);
  }
});