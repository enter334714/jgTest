var Q = wx.$I;
!function (b9jy, arsk87) {
  arsk87['un'], arsk87['uns'];var h3ed = arsk87['static'],
      n_m9y5 = arsk87['class'],
      w8aksr = arsk87['getset'];arsk87['__newvec'];var ybjip9 = laya['utils']['Browser'],
      jebl6i = (laya['events']['Event'], laya['events']['EventDispatcher']),
      h63oed = laya['resource']['HTMLImage'],
      np_9 = laya['utils']['Handler'],
      x7sfk8 = laya['display']['Input'],
      x4vq$ = laya['net']['Loader'];laya['maths']['Matrix'];var e6jlb = laya['renders']['Render'],
      bilpj6 = laya['utils']['RunDriver'];laya['media']['Sound'];var bpy_ = laya['media']['SoundChannel'],
      p9lbj = laya['media']['SoundManager'],
      n_m59 = (laya['display']['Stage'], laya['net']['URL']),
      cauwk = laya['utils']['Utils'],
      xq$vgf = (n_m9y5(pli9, 'laya.wx.mini.MiniAdpter'), pli9['getJson'] = function (vxq$gf) {
    return JSON['parse'](vxq$gf);
  }, pli9['init'] = function (z0utc2, swk8ar) {
    void 0x0 === z0utc2 && (z0utc2 = !0x1), void 0x0 === swk8ar && (swk8ar = !0x1), pli9['_inited'] || (pli9['window'] = b9jy)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (pli9['_inited'] = !0x0, pli9['isZiYu'] = swk8ar, pli9['isPosMsgYu'] = z0utc2, pli9['EnvConfig'] = {}, pli9['isZiYu'] || (h6jelo['setNativeFileDir']('/layaairGame'), h6jelo['existDir'](h6jelo['fileNativeDir'], np_9['create'](pli9, pli9['onMkdirCallBack']))), pli9['window']['focus'] = function () {}, arsk87['getUrlPath'] = function () {}, pli9['window']['logtime'] = function (kwu8ra) {}, pli9['window']['alertTimeLog'] = function (m0t21) {}, pli9['window']['resetShareInfo'] = function () {}, pli9['window']['CanvasRenderingContext2D'] = function () {}, pli9['window']['CanvasRenderingContext2D']['prototype'] = pli9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], pli9['window']['document']['body']['appendChild'] = function () {}, pli9['EnvConfig']['pixelRatioInt'] = 0x0, bilpj6['getPixelRatio'] = pli9['pixelRatio'], pli9['_preCreateElement'] = ybjip9['createElement'], ybjip9['createElement'] = pli9['createElement'], bilpj6['createShaderCondition'] = pli9['createShaderCondition'], cauwk['parseXMLFromString'] = pli9['parseXMLFromString'], x7sfk8['_createInputElement'] = fxq7['_createInputElement'], pli9['EnvConfig']['load'] = x4vq$['prototype']['load'], x4vq$['prototype']['load'] = rka7['prototype']['load'], pli9['isZiYu'] && z0utc2 && wx['onMessage'](function (zacrwu) {
      zacrwu['isLoad'] && (h6jelo['ziyuFileData'][zacrwu['url']] = zacrwu['data']);
    }));
  }, pli9['onMkdirCallBack'] = function (deo36, kr78sf) {
    deo36 || (h6jelo['filesListObj'] = JSON['parse'](kr78sf['data']));
  }, pli9['pixelRatio'] = function () {
    if (!pli9['EnvConfig']['pixelRatioInt']) try {
      var qvxf$g = wx['getSystemInfoSync']();return pli9['EnvConfig']['pixelRatioInt'] = qvxf$g['pixelRatio'], qvxf$g['pixelRatio'];
    } catch (sk78x) {}return pli9['EnvConfig']['pixelRatioInt'];
  }, pli9['createElement'] = function (_y51mn) {
    var wrcu;if ('canvas' == _y51mn) return 0x1 == pli9['idx'] ? pli9['isZiYu'] ? (wrcu = sharedCanvas)['style'] = {} : wrcu = b9jy['canvas'] : wrcu = b9jy['wx']['createCanvas'](), pli9['idx']++, wrcu;if ('textarea' == _y51mn || 'input' == _y51mn) return pli9['onCreateInput'](_y51mn);if ('div' != _y51mn) return pli9['_preCreateElement'](_y51mn);return _y51mn = pli9['_preCreateElement'](_y51mn), (_y51mn['contains'] = function (l6joeh) {
      return null;
    }, _y51mn['removeChild'] = function (rckuw) {}, _y51mn);
  }, pli9['onCreateInput'] = function (xq7$fg) {
    return xq7$fg = pli9['_preCreateElement'](xq7$fg), (xq7$fg['focus'] = fxq7['wxinputFocus'], xq7$fg['blur'] = fxq7['wxinputblur'], xq7$fg['style'] = {}, xq7$fg['value'] = 0x0, xq7$fg['parentElement'] = {}, xq7$fg['placeholder'] = {}, xq7$fg['type'] = {}, xq7$fg['setColor'] = function (cwaur) {}, xq7$fg['setType'] = function (m5021t) {}, xq7$fg['setFontFace'] = function (mn15y_) {}, xq7$fg['addEventListener'] = function (yb9_i) {}, xq7$fg['contains'] = function (o6hel) {
      return null;
    }, xq7$fg['removeChild'] = function (n_m1y5) {}, xq7$fg);
  }, pli9['createShaderCondition'] = function (xk8fs7) {
    var f$g7xs = this;return function () {
      return f$g7xs[xk8fs7['replace']('this.', '')];
    };
  }, pli9['EnvConfig'] = null, pli9['window'] = null, pli9['_preCreateElement'] = null, pli9['_inited'] = !0x1, pli9['wxRequest'] = null, pli9['systemInfo'] = null, pli9['version'] = '0.0.1', pli9['isZiYu'] = !0x1, pli9['isPosMsgYu'] = !0x1, pli9['parseXMLFromString'] = function (wu8k) {
    var arcwz;wu8k = wu8k['replace'](/>\s+</g, '><');try {
      arcwz = new b9jy['Parser']['DOMParser']()['parseFromString'](wu8k, 'text/xml');
    } catch (r78kfs) {
      throw '需要引入xml解析库文件';
    }return arcwz;
  }, pli9['idx'] = 0x1, pli9);function pli9() {}n_m9y5(zc0, 'laya.wx.mini.MiniImage'), zc0['prototype']['_loadImage'] = function (b9jyp) {
    var yn59m_ = !0x1;-0x1 == b9jyp['indexOf']('layaNativeDir/') && (yn59m_ = !0x0, b9jyp = n_m59['formatURL'](b9jyp)), h6jelo['getFileInfo'](b9jyp) ? zc0['onCreateImage'](b9jyp, this, !yn59m_) : -0x1 != b9jyp['indexOf']('http://') || -0x1 != b9jyp['indexOf']('https://') ? h6jelo['downImg'](b9jyp, new np_9(zc0, zc0['onDownImgCallBack'], [b9jyp, this]), b9jyp) : zc0['onCreateImage'](b9jyp, this, !0x0);
  }, zc0['onDownImgCallBack'] = function (i6bje, fks8r7, xs7fg$) {
    xs7fg$ ? fks8r7['onError'](null) : zc0['onCreateImage'](i6bje, fks8r7);
  }, zc0['onCreateImage'] = function (s7gx$f, uzwa0c, z0tuw) {
    var ijeh6, ohl6e3;function ed3h6o() {
      ohl6e3['onload'] = null, ohl6e3['onerror'] = null, delete uzwa0c['imgCache'][s7gx$f];
    }ijeh6 = (z0tuw = void 0x0 === z0tuw ? !0x1 : z0tuw) ? s7gx$f : (tzc0u2 = h6jelo['getFileInfo'](s7gx$f)['md5'], h6jelo['getFileNativePath'](tzc0u2)), null == uzwa0c['imgCache'] && (uzwa0c['imgCache'] = {}), z0tuw = function () {
      ed3h6o(), uzwa0c['onLoaded'](ohl6e3);
    };var tzc0u2 = function () {
      ed3h6o(), uzwa0c['event']('error', 'Load image failed');
    };'nativeimage' == uzwa0c['_type'] ? ((ohl6e3 = new ybjip9['window']['Image']())['crossOrigin'] = '', ohl6e3['onload'] = z0tuw, ohl6e3['onerror'] = tzc0u2, ohl6e3['src'] = ijeh6, uzwa0c['imgCache'][s7gx$f] = ohl6e3) : new h63oed['create'](ijeh6, { 'onload': z0tuw, 'onerror': tzc0u2, 'onCreate': function (wuzcra) {
        ohl6e3 = wuzcra, uzwa0c['imgCache'][s7gx$f] = wuzcra;
      } });
  };function zc0() {}var fxq7 = (n_m9y5(tc201, 'laya.wx.mini.MiniInput'), tc201['_createInputElement'] = function () {
    x7sfk8['_initInput'](x7sfk8['area'] = ybjip9['createElement']('textarea')), x7sfk8['_initInput'](x7sfk8['input'] = ybjip9['createElement']('input')), x7sfk8['inputContainer'] = ybjip9['createElement']('div'), x7sfk8['inputContainer']['style']['position'] = 'absolute', x7sfk8['inputContainer']['style']['zIndex'] = 0x186a0, ybjip9['container']['appendChild'](x7sfk8['inputContainer']), x7sfk8['inputContainer']['setPos'] = function (wcuarz, e6ijlh) {
      x7sfk8['inputContainer']['style']['left'] = wcuarz + 'px', x7sfk8['inputContainer']['style']['top'] = e6ijlh + 'px';
    }, arsk87['stage']['on']('resize', null, tc201['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bip6l) {
      b9jy['dispatchEvent'] && b9jy['dispatchEvent']('resize');
    }), p9lbj['_soundClass'] = gxsf, p9lbj['_musicClass'] = gxsf;
  }, tc201['_onStageResize'] = function () {
    arsk87['stage']['_canvasTransform']['identity']()['scale'](ybjip9['width'] / e6jlb['canvas']['width'] / bilpj6['getPixelRatio'](), ybjip9['height'] / e6jlb['canvas']['height'] / bilpj6['getPixelRatio']());
  }, tc201['wxinputFocus'] = function (w8au) {
    var ihlj6 = x7sfk8['inputElement']['target'];ihlj6 && !ihlj6['editable'] || (xq$vgf['window']['wx']['offKeyboardConfirm'](), xq$vgf['window']['wx']['offKeyboardInput'](), xq$vgf['window']['wx']['showKeyboard']({ 'defaultValue': ihlj6['text'], 'maxLength': ihlj6['maxChars'], 'multiple': ihlj6['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (bp9il) {}, 'fail': function (i9ypbj) {} }), xq$vgf['window']['wx']['onKeyboardConfirm'](function (bj9ipy) {
      bj9ipy = bj9ipy ? bj9ipy['value'] : '', (ihlj6['text'] = bj9ipy, ihlj6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), xq$vgf['window']['wx']['onKeyboardInput'](function (m9y_) {
      m9y_ = m9y_ ? m9y_['value'] : '', ihlj6['multiline'] || -0x1 == m9y_['indexOf']('\x0a') ? (ihlj6['text'] = m9y_, ihlj6['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, tc201['inputEnter'] = function () {
    x7sfk8['inputElement']['target']['focus'] = !0x1;
  }, tc201['wxinputblur'] = function () {
    tc201['hideKeyboard']();
  }, tc201['hideKeyboard'] = function () {
    xq$vgf['window']['wx']['offKeyboardConfirm'](), xq$vgf['window']['wx']['offKeyboardInput'](), xq$vgf['window']['wx']['hideKeyboard']({ 'success': function (wkr8sa) {
        console['log']('隐藏键盘');
      }, 'fail': function (zra) {
        console['log']('隐藏键盘出错:' + (zra ? zra['errMsg'] : ''));
      } });
  }, tc201);function tc201() {}var rka7 = function () {
    function y_m9n() {}n_m9y5(y_m9n, 'laya.wx.mini.MiniLoader');var m2tn15 = y_m9n['prototype'];return m2tn15['load'] = function (r7skf, o6lehj, d6o3eh, fksr7, edoh36) {
      void 0x0 === d6o3eh && (d6o3eh = !0x0), void 0x0 === edoh36 && (edoh36 = !0x1);var uzwrca = this;0x0 === (uzwrca['_url'] = r7skf)['indexOf']('data:image') ? uzwrca['_type'] = o6lehj = 'image' : uzwrca['_type'] = o6lehj = o6lehj || uzwrca['getTypeFromUrl'](r7skf), uzwrca['_cache'] = d6o3eh, uzwrca['_data'] = null;var jehl6 = 'ascii';-0x1 != r7skf['indexOf']('.fnt') ? jehl6 = 'utf8' : 'arraybuffer' == o6lehj && (jehl6 = '');var xgfq$ = cauwk['getFileExtension'](r7skf);if (-0x1 != y_m9n['_fileTypeArr']['indexOf'](xgfq$)) xq$vgf['EnvConfig']['load']['call'](this, r7skf, o6lehj, d6o3eh, fksr7, edoh36);else {
        if (h6jelo['getFileInfo'](r7skf)) xq$vgf['EnvConfig']['load']['call'](this, r7skf, o6lehj, d6o3eh, fksr7, edoh36);else {
          if (-0x1 != r7skf['indexOf']('layaNativeDir/')) {
            if (xq$vgf['isZiYu']) {
              var piljb6 = h6jelo['ziyuFileData'][r7skf];return void uzwrca['onLoaded'](piljb6);
            }return cosnole['log']('read read'), void h6jelo['read'](r7skf, jehl6, new np_9(y_m9n, y_m9n['onReadNativeCallBack'], [jehl6, r7skf, o6lehj, d6o3eh, fksr7, edoh36, uzwrca]));
          }piljb6 = '' == n_m59['rootPath'] ? r7skf : r7skf['split'](n_m59['rootPath'])[0x0], -0x1 != r7skf['indexOf']('http://') || -0x1 != r7skf['indexOf']('https://') ? xq$vgf['EnvConfig']['load']['call'](uzwrca, r7skf, o6lehj, d6o3eh, fksr7, edoh36) : h6jelo['readFile'](piljb6, jehl6, new np_9(y_m9n, y_m9n['onReadNativeCallBack'], [jehl6, r7skf, o6lehj, d6o3eh, fksr7, edoh36, uzwrca]), r7skf);
        }
      }
    }, m2tn15['resMgrLoad'] = function (rwsa, uw0za, yn15m_, fs7gx$, $qv4, wzrc, s$87xf) {
      void 0x0 === yn15m_ && (yn15m_ = 0x0), void 0x0 === fs7gx$ && (fs7gx$ = !0x1), void 0x0 === $qv4 && ($qv4 = !0x1), void 0x0 === wzrc && (wzrc = 0x0), void 0x0 === s$87xf && (s$87xf = 0x3), -0x1 != rwsa['indexOf']('mpack') && console['log']('=============resMgrLoad url:', rwsa), xq$vgf['EnvConfig']['resMgrLoad'](rwsa, (g4q, uzt0, pbjiy9) => {
        y_m9n['prototype']['resMgrLoadCallBack'](g4q, uzt0, pbjiy9, uw0za);
      }, yn15m_, fs7gx$, $qv4, wzrc, s$87xf);
    }, m2tn15['resMgrLoadCallBack'] = function (x$q4g, ljip6, ckaur, lj6ibe) {
      console['log']('buff:::', x$q4g, ckaur, h6jelo['fileNativeDir'] + '///' + h6jelo['fileListName']), lj6ibe(x$q4g, ljip6, ckaur);
    }, m2tn15['clearRes'] = function (leih6j, cawzur) {
      this['clearRes'](leih6j, cawzur = void 0x0 === cawzur ? !0x1 : cawzur), cawzur = h6jelo['getFileInfo'](leih6j), !cawzur || -0x1 == leih6j['indexOf']('http://') && -0x1 == leih6j['indexOf']('https://') || (cawzur = cawzur['md5'], cawzur = h6jelo['getFileNativePath'](cawzur), h6jelo['remove'](cawzur));
    }, y_m9n['onReadNativeCallBack'] = function (qfg$7, xsfg, py5_9n, c02ut, zrawcu, wrcuza, h3doe6, xgq$f7, m5n1) {
      void 0x0 === c02ut && (c02ut = !0x0), void 0x0 === wrcuza && (wrcuza = !0x1), (xgq$f7 = void 0x0 === xgq$f7 ? 0x0 : xgq$f7) ? 0x1 == xgq$f7 && xq$vgf['EnvConfig']['load']['call'](h3doe6, xsfg, py5_9n, c02ut, zrawcu, wrcuza) : (m5n1 = 'json' == py5_9n || 'atlas' == py5_9n ? xq$vgf['getJson'](m5n1['data']) : 'xml' == py5_9n ? cauwk['parseXMLFromString'](m5n1['data']) : m5n1['data'], h3doe6['onLoaded'](m5n1), !xq$vgf['isZiYu'] && xq$vgf['isPosMsgYu'] && 'arraybuffer' != py5_9n && wx['postMessage']({ 'url': xsfg, 'data': m5n1, 'isLoad': !0x0 }));
    }, h3ed(y_m9n, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), y_m9n;
  }(),
      h6jelo = (n_m9y5(kx7fs, 'laya.wx.mini.MiniFileMgr', jebl6i), kx7fs['isLoadFile'] = function (nm_12) {
    return -0x1 != kx7fs['_fileTypeArr']['indexOf'](nm_12);
  }, kx7fs['getFileInfo'] = function (raks78) {
    return raks78 = raks78['split']('?')[0x0], raks78 = kx7fs['filesListObj'][raks78], null == raks78 ? null : raks78;
  }, kx7fs['onFileUpdate'] = function (xfs8k7, q7$fg) {
    var nm_15y = xfs8k7['split']('/');xfs8k7 = nm_15y[nm_15y['length'] - 0x1], nm_15y = kx7fs['getFileInfo'](q7$fg), null == nm_15y ? kx7fs['onSaveFile'](q7$fg, xfs8k7) : nm_15y['readyUrl'] != q7$fg && kx7fs['remove'](xfs8k7, q7$fg);
  }, kx7fs['exits'] = function (ny9p_5, aksr8w) {
    ny9p_5 = kx7fs['getFileNativePath'](ny9p_5), kx7fs['fs']['getFileInfo']({ 'filePath': ny9p_5, 'success': function (xf$7s8) {
        null != aksr8w && aksr8w['runWith']([0x0, xf$7s8]);
      }, 'fail': function (o3edh) {
        null != aksr8w && aksr8w['runWith']([0x1, o3edh]);
      } });
  }, kx7fs['read'] = function (o6, rukwa, crakw, ska8w) {
    void 0x0 === rukwa && (rukwa = 'ascill'), o6 = '' != (ska8w = void 0x0 === ska8w ? '' : ska8w) ? kx7fs['getFileNativePath'](o6) : o6, kx7fs['fs']['readFile']({ 'filePath': o6, 'encoding': rukwa, 'success': function ($f8x7s) {
        null != crakw && crakw['runWith']([0x0, $f8x7s]);
      }, 'fail': function (ho6ej) {
        ho6ej && '' != ska8w ? kx7fs['down'](ska8w, rukwa, crakw, ska8w) : null != crakw && crakw['runWith']([0x1]);
      } });
  }, kx7fs['readNativeFile'] = function (od63, ut20) {
    kx7fs['fs']['readFile']({ 'filePath': od63, 'encoding': '', 'success': function (ijbp9) {
        null != ut20 && ut20['runWith']([0x0]);
      }, 'fail': function (krfs7) {
        null != ut20 && ut20['runWith']([0x1]);
      } });
  }, kx7fs['down'] = function (c2t0zu, ua0wz, y5n_m9, $q7gf) {
    void 0x0 === ua0wz && (ua0wz = 'ascill'), void 0x0 === $q7gf && ($q7gf = '');var ac0uw = kx7fs['getFileNativePath']($q7gf);kx7fs['wxdown']({ 'url': c2t0zu, 'filePath': ac0uw, 'success': function (bpjl6) {
        0xc8 === bpjl6['statusCode'] && kx7fs['readFile'](bpjl6['filePath'], ua0wz, y5n_m9, $q7gf);
      }, 'fail': function (bji6e) {
        null != y5n_m9 && y5n_m9['runWith']([0x1, bji6e]);
      } })['onProgressUpdate'](function (kauc) {
      null != y5n_m9 && y5n_m9['runWith']([0x2, kauc['progress']]);
    });
  }, kx7fs['readFile'] = function (ypnb_, t520m1, ile6hj, f7$qxg) {
    void 0x0 === f7$qxg && (f7$qxg = ''), kx7fs['fs']['readFile']({ 'filePath': ypnb_, 'encoding': t520m1 = void 0x0 === t520m1 ? 'ascill' : t520m1, 'success': function (_9ny5m) {
        -0x1 == ypnb_['indexOf']('http://') && -0x1 == ypnb_['indexOf']('https://') || kx7fs['onFileUpdate'](ypnb_, f7$qxg), null != ile6hj && ile6hj['runWith']([0x0, _9ny5m]);
      }, 'fail': function (lho6j) {
        lho6j && null != ile6hj && ile6hj['runWith']([0x1, lho6j]);
      } });
  }, kx7fs['downImg'] = function (cw0tuz, m5nt12, m5t201) {
    void 0x0 === m5t201 && (m5t201 = ''), kx7fs['wxdown']({ 'url': cw0tuz, 'success': function (mn25_) {
        0xc8 === mn25_['statusCode'] && kx7fs['copyFile'](mn25_['tempFilePath'], m5t201, m5nt12);
      }, 'fail': function (s8x7$) {
        null != m5nt12 && m5nt12['runWith']([0x1, s8x7$]);
      } });
  }, kx7fs['copyFile'] = function (cu0wt, wuark8, x$7f) {
    var uc0zwt = cu0wt['split']('/'),
        oeh6d = uc0zwt[uc0zwt['length'] - 0x1];wuark8['split']('?')[0x0];var fsx7k8 = kx7fs['getFileInfo'](wuark8);uc0zwt = kx7fs['getFileNativePath'](oeh6d), kx7fs['fs']['copyFile']({ 'srcPath': cu0wt, 'destPath': uc0zwt, 'success': function (el3) {
        fsx7k8 ? fsx7k8['readyUrl'] != wuark8 && kx7fs['remove'](oeh6d, wuark8, x$7f) : (kx7fs['onSaveFile'](wuark8, oeh6d), null != x$7f && x$7f['runWith']([0x0]));
      }, 'fail': function (w8as) {
        null != x$7f && x$7f['runWith']([0x1, w8as]);
      } });
  }, kx7fs['getFileNativePath'] = function (acrz) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + acrz;
  }, kx7fs['remove'] = function (b_9py, ehjl, wsark8) {
    void 0x0 === ehjl && (ehjl = '');var cwuzt0 = kx7fs['getFileInfo'](ehjl),
        sk7xf = kx7fs['getFileNativePath'](cwuzt0['md5']);arsk87['loader']['clearRes'](cwuzt0['readyUrl']), kx7fs['fs']['unlink']({ 'filePath': sk7xf, 'success': function (hoejl6) {
        '' != ehjl && kx7fs['onSaveFile'](ehjl, b_9py), null != wsark8 && wsark8['runWith']([0x0]);
      }, 'fail': function (m0zt12) {} });
  }, kx7fs['onSaveFile'] = function (g$7s, rakwu8) {
    var iejh = g$7s['split']('?')[0x0];kx7fs['filesListObj'][iejh] = { 'md5': rakwu8, 'readyUrl': g$7s }, kx7fs['fs']['writeFile']({ 'filePath': kx7fs['fileNativeDir'] + '/' + kx7fs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kx7fs['filesListObj']), 'success': function (by9ip_) {
        console['log']('写入测试测试成功：', by9ip_);
      }, 'fail': function (h6eilj) {
        console['log']('写入测试测试失败：', h6eilj);
      } });
  }, kx7fs['existDir'] = function (fks78r, y_b9pn) {
    kx7fs['fs']['mkdir']({ 'dirPath': fks78r, 'success': function (mz1t02) {
        null != y_b9pn && y_b9pn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (sk8a7) {
        -0x1 != sk8a7['errMsg']['indexOf']('file already exists') ? kx7fs['readSync'](kx7fs['fileListName'], 'utf8', y_b9pn) : null != y_b9pn && y_b9pn['runWith']([0x1, sk8a7]);
      } });
  }, kx7fs['readSync'] = function (hjole6, wr8s, h6eloj, l6ihj) {
    void 0x0 === wr8s && (wr8s = 'ascill'), void 0x0 === l6ihj && (l6ihj = ''), hjole6 = kx7fs['getFileNativePath'](hjole6);var _5m2n1;try {
      _5m2n1 = kx7fs['fs']['readFileSync'](hjole6), null != h6eloj && h6eloj['runWith']([0x0, { 'data': _5m2n1 }]);
    } catch (blpj9) {
      null != h6eloj && h6eloj['runWith']([0x1]);
    }
  }, kx7fs['readCache'] = function () {}, kx7fs['writeCache'] = function (e36) {
    var z1c02t = readyUrl['split']('?')[0x0];kx7fs['filesListObj'][z1c02t] = { 'md5': md5Name, 'readyUrl': readyUrl }, kx7fs['fs']['writeFile']({ 'filePath': kx7fs['fileNativeDir'] + '/' + kx7fs['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](kx7fs['filesListObj']), 'success': function (jeol6) {}, 'fail': function (vfx$qg) {} });
  }, kx7fs['setNativeFileDir'] = function (nym15) {
    kx7fs['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nym15;
  }, kx7fs['filesListObj'] = {}, kx7fs['fileNativeDir'] = null, kx7fs['fileListName'] = 'layaairfiles.txt', kx7fs['ziyuFileData'] = {}, h3ed(kx7fs, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), kx7fs);function kx7fs() {
    kx7fs['__super']['call'](this);
  }var gxsf = function () {
    function cwrkau() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, cwrkau['__super']['call'](this), this['_sound'] = cwrkau['_createSound']();
    }n_m9y5(cwrkau, 'laya.wx.mini.MiniSound', jebl6i);var mt20 = cwrkau['prototype'];return mt20['load'] = function (lbiej6) {
      var jei6b = this,
          f7xk8s;function pn_y95() {
        if (null != cwrkau['_null']) jei6b['_sound']['onCanplay'](cwrkau['_null']), jei6b['_sound']['onError'](cwrkau['_null']);else try {
          jei6b['_sound']['onCanplay'](null), jei6b['_sound']['onError'](null), cwrkau['_null'] = null;
        } catch (qg$x7) {
          console['warn']('[wxmini] _clearSound:' + qg$x7), jei6b['_sound']['onCanplay'](qg7$xf), jei6b['_sound']['onError'](qg7$xf), cwrkau['_null'] = qg7$xf;
        }
      }function qg7$xf() {}lbiej6 = n_m59['formatURL'](lbiej6), this['url'] = lbiej6, cwrkau['_audioCache'][lbiej6] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        pn_y95(), f7xk8s['loaded'] = !0x0, f7xk8s['event']('complete'), cwrkau['_audioCache'][f7xk8s['url']] = f7xk8s;
      }), this['_sound']['onError'](function (p9ny_b) {
        console['error']('errCode=' + p9ny_b['errCode'] + '  errMsg=' + p9ny_b['errMsg']), pn_y95(), f7xk8s['event']('error');
      }), this['_sound']['src'] = lbiej6, f7xk8s = this);
    }, mt20['play'] = function (m_5y9, rk8was) {
      void 0x0 === m_5y9 && (m_5y9 = 0x0), void 0x0 === rk8was && (rk8was = 0x0), (saw8k = this['url'] == p9lbj['_tMusic'] ? (cwrkau['_musicAudio'] || (cwrkau['_musicAudio'] = cwrkau['_createSound']()), cwrkau['_musicAudio']) : cwrkau['_createSound']())['src'] = this['url'];var saw8k = new arwzc(saw8k);return saw8k['url'] = this['url'], saw8k['loops'] = rk8was, saw8k['startTime'] = m_5y9, saw8k['play'](), p9lbj['addChannel'](saw8k), saw8k;
    }, mt20['dispose'] = function () {
      var ruwck = cwrkau['_audioCache'][this['url']];ruwck && (ruwck['src'] = '', delete cwrkau['_audioCache'][this['url']]);
    }, w8aksr(0x0, mt20, 'duration', function () {
      return this['_sound']['duration'];
    }), cwrkau['_createSound'] = function () {
      return cwrkau['_id']++, xq$vgf['window']['wx']['createInnerAudioContext']();
    }, cwrkau['_musicAudio'] = null, cwrkau['_id'] = 0x0, cwrkau['_audioCache'] = {}, cwrkau['_null'] = void 0x0, cwrkau;
  }(),
      arwzc = function () {
    function pl6j(mt102) {
      this['_audio'] = null, this['_onEnd'] = null, pl6j['__super']['call'](this), this['_audio'] = mt102, this['_onEnd'] = cauwk['bind'](this['__onEnd'], this), mt102['onEnded'](this['_onEnd']);
    }n_m9y5(pl6j, 'laya.wx.mini.MiniSoundChannel', bpy_);var jiy9p = pl6j['prototype'];return jiy9p['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (arsk87['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, jiy9p['__onNull'] = function () {}, jiy9p['play'] = function () {
      this['isStopped'] = !0x1, p9lbj['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, jiy9p['stop'] = function () {
      if (this['isStopped'] = !0x0, p9lbj['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != pl6j['_null']) this['_audio']['onEnded'](pl6j['_null']);else try {
          this['_audio']['onEnded'](null), pl6j['_null'] = null;
        } catch (e6jb) {
          console['warn']('[wxmini] stop:' + e6jb), this['_audio']['onEnded'](cauwk['bind'](this['__onNull'], this)), pl6j['_null'] = cauwk['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, jiy9p['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, jiy9p['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, p9lbj['addChannel'](this), this['_audio']['play']());
    }, w8aksr(0x0, jiy9p, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), w8aksr(0x0, jiy9p, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), w8aksr(0x0, jiy9p, 'volume', function () {
      return 0x1;
    }, function (jbiy) {}), pl6j['_null'] = void 0x0, pl6j;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (srkaw8, ak7s8r) {
  'use strict';

  for (var nm_y95 in Object['defineProperty'](ak7s8r, '__esModule', { 'value': !0x0 }), Laya) {
    var _5n9ym = Laya[nm_y95];_5n9ym && _5n9ym['__isclass'] && (ak7s8r[nm_y95] = _5n9ym);
  }
});