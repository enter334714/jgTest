var k = wx.$f;
!function (_$2sz, hi36g) {
  hi36g['un'], hi36g['uns'];var p_mc$ = hi36g['static'],
      w2jaxq = hi36g['class'],
      sx_z$c = hi36g['getset'];hi36g['__newvec'];var _p$msc = laya['utils']['Browser'],
      a2jw = (laya['events']['Event'], laya['events']['EventDispatcher']),
      nevy8 = laya['resource']['HTMLImage'],
      fdu4on = laya['utils']['Handler'],
      a2jkqw = laya['display']['Input'],
      ktjb7 = laya['net']['Loader'];laya['maths']['Matrix'];var i9hgm3 = laya['renders']['Render'],
      m9g3p = laya['utils']['RunDriver'];laya['media']['Sound'];var g3ipm9 = laya['media']['SoundChannel'],
      t57ob0 = laya['media']['SoundManager'],
      scz$_x = (laya['display']['Stage'], laya['net']['URL']),
      awk2qj = laya['utils']['Utils'],
      yu4nf = (w2jaxq(ydfv, 'laya.wx.mini.MiniAdpter'), ydfv['getJson'] = function (ynfud4) {
    return JSON['parse'](ynfud4);
  }, ydfv['init'] = function (zsxaq2, _zpsc) {
    void 0x0 === zsxaq2 && (zsxaq2 = !0x1), void 0x0 === _zpsc && (_zpsc = !0x1), ydfv['_inited'] || (ydfv['window'] = _$2sz)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (ydfv['_inited'] = !0x0, ydfv['isZiYu'] = _zpsc, ydfv['isPosMsgYu'] = zsxaq2, ydfv['EnvConfig'] = {}, ydfv['isZiYu'] || (fod45['setNativeFileDir']('/layaairGame'), fod45['existDir'](fod45['fileNativeDir'], fdu4on['create'](ydfv, ydfv['onMkdirCallBack']))), ydfv['window']['focus'] = function () {}, hi36g['getUrlPath'] = function () {}, ydfv['window']['logtime'] = function (axqs) {}, ydfv['window']['alertTimeLog'] = function (y8v1n4) {}, ydfv['window']['resetShareInfo'] = function () {}, ydfv['window']['CanvasRenderingContext2D'] = function () {}, ydfv['window']['CanvasRenderingContext2D']['prototype'] = ydfv['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ydfv['window']['document']['body']['appendChild'] = function () {}, ydfv['EnvConfig']['pixelRatioInt'] = 0x0, m9g3p['getPixelRatio'] = ydfv['pixelRatio'], ydfv['_preCreateElement'] = _p$msc['createElement'], _p$msc['createElement'] = ydfv['createElement'], m9g3p['createShaderCondition'] = ydfv['createShaderCondition'], awk2qj['parseXMLFromString'] = ydfv['parseXMLFromString'], a2jkqw['_createInputElement'] = fnyv['_createInputElement'], ydfv['EnvConfig']['load'] = ktjb7['prototype']['load'], ktjb7['prototype']['load'] = nd8y['prototype']['load'], ydfv['isZiYu'] && zsxaq2 && wx['onMessage'](function (aj0kw) {
      aj0kw['isLoad'] && (fod45['ziyuFileData'][aj0kw['url']] = aj0kw['data']);
    }));
  }, ydfv['onMkdirCallBack'] = function (qjk0w, $2zxq) {
    qjk0w || (fod45['filesListObj'] = JSON['parse']($2zxq['data']));
  }, ydfv['pixelRatio'] = function () {
    if (!ydfv['EnvConfig']['pixelRatioInt']) try {
      var g93cp = wx['getSystemInfoSync']();return ydfv['EnvConfig']['pixelRatioInt'] = g93cp['pixelRatio'], g93cp['pixelRatio'];
    } catch (p3im9g) {}return ydfv['EnvConfig']['pixelRatioInt'];
  }, ydfv['createElement'] = function (g963h) {
    var xqs$2z;if ('canvas' == g963h) return 0x1 == ydfv['idx'] ? ydfv['isZiYu'] ? (xqs$2z = sharedCanvas)['style'] = {} : xqs$2z = _$2sz['canvas'] : xqs$2z = _$2sz['wx']['createCanvas'](), ydfv['idx']++, xqs$2z;if ('textarea' == g963h || 'input' == g963h) return ydfv['onCreateInput'](g963h);if ('div' != g963h) return ydfv['_preCreateElement'](g963h);return g963h = ydfv['_preCreateElement'](g963h), (g963h['contains'] = function ($p_zs) {
      return null;
    }, g963h['removeChild'] = function (bu5o7f) {}, g963h);
  }, ydfv['onCreateInput'] = function (bto5u7) {
    return bto5u7 = ydfv['_preCreateElement'](bto5u7), (bto5u7['focus'] = fnyv['wxinputFocus'], bto5u7['blur'] = fnyv['wxinputblur'], bto5u7['style'] = {}, bto5u7['value'] = 0x0, bto5u7['parentElement'] = {}, bto5u7['placeholder'] = {}, bto5u7['type'] = {}, bto5u7['setColor'] = function (kw) {}, bto5u7['setType'] = function (gh639i) {}, bto5u7['setFontFace'] = function (c3gmp9) {}, bto5u7['addEventListener'] = function (_x2s$) {}, bto5u7['contains'] = function (nvy4) {
      return null;
    }, bto5u7['removeChild'] = function (en8) {}, bto5u7);
  }, ydfv['createShaderCondition'] = function (unf4o) {
    var pmg_ = this;return function () {
      return pmg_[unf4o['replace']('this.', '')];
    };
  }, ydfv['EnvConfig'] = null, ydfv['window'] = null, ydfv['_preCreateElement'] = null, ydfv['_inited'] = !0x1, ydfv['wxRequest'] = null, ydfv['systemInfo'] = null, ydfv['version'] = '0.0.1', ydfv['isZiYu'] = !0x1, ydfv['isPosMsgYu'] = !0x1, ydfv['parseXMLFromString'] = function (h3g69i) {
    var t0wbk;h3g69i = h3g69i['replace'](/>\s+</g, '><');try {
      t0wbk = new _$2sz['Parser']['DOMParser']()['parseFromString'](h3g69i, 'text/xml');
    } catch (udfny4) {
      throw '需要引入xml解析库文件';
    }return t0wbk;
  }, ydfv['idx'] = 0x1, ydfv);function ydfv() {}w2jaxq(n8y14v, 'laya.wx.mini.MiniImage'), n8y14v['prototype']['_loadImage'] = function (fbo75) {
    var $scxz_ = !0x1;-0x1 == fbo75['indexOf']('layaNativeDir/') && ($scxz_ = !0x0, fbo75 = scz$_x['formatURL'](fbo75)), fod45['getFileInfo'](fbo75) ? n8y14v['onCreateImage'](fbo75, this, !$scxz_) : -0x1 != fbo75['indexOf']('http://') || -0x1 != fbo75['indexOf']('https://') ? fod45['downImg'](fbo75, new fdu4on(n8y14v, n8y14v['onDownImgCallBack'], [fbo75, this]), fbo75) : n8y14v['onCreateImage'](fbo75, this, !0x0);
  }, n8y14v['onDownImgCallBack'] = function (_cpmg3, y4n8, pm_gc3) {
    pm_gc3 ? y4n8['onError'](null) : n8y14v['onCreateImage'](_cpmg3, y4n8);
  }, n8y14v['onCreateImage'] = function (du7o, ip3gm, _czs$) {
    var tj0bw, cz$p_s;function uod45f() {
      cz$p_s['onload'] = null, cz$p_s['onerror'] = null, delete ip3gm['imgCache'][du7o];
    }tj0bw = (_czs$ = void 0x0 === _czs$ ? !0x1 : _czs$) ? du7o : (ufo7d = fod45['getFileInfo'](du7o)['md5'], fod45['getFileNativePath'](ufo7d)), null == ip3gm['imgCache'] && (ip3gm['imgCache'] = {}), _czs$ = function () {
      uod45f(), ip3gm['onLoaded'](cz$p_s);
    };var ufo7d = function () {
      uod45f(), ip3gm['event']('error', 'Load image failed');
    };'nativeimage' == ip3gm['_type'] ? ((cz$p_s = new _p$msc['window']['Image']())['crossOrigin'] = '', cz$p_s['onload'] = _czs$, cz$p_s['onerror'] = ufo7d, cz$p_s['src'] = tj0bw, ip3gm['imgCache'][du7o] = cz$p_s) : new nevy8['create'](tj0bw, { 'onload': _czs$, 'onerror': ufo7d, 'onCreate': function (ou5d7f) {
        cz$p_s = ou5d7f, ip3gm['imgCache'][du7o] = ou5d7f;
      } });
  };function n8y14v() {}var fnyv = (w2jaxq(k0btwj, 'laya.wx.mini.MiniInput'), k0btwj['_createInputElement'] = function () {
    a2jkqw['_initInput'](a2jkqw['area'] = _p$msc['createElement']('textarea')), a2jkqw['_initInput'](a2jkqw['input'] = _p$msc['createElement']('input')), a2jkqw['inputContainer'] = _p$msc['createElement']('div'), a2jkqw['inputContainer']['style']['position'] = 'absolute', a2jkqw['inputContainer']['style']['zIndex'] = 0x186a0, _p$msc['container']['appendChild'](a2jkqw['inputContainer']), a2jkqw['inputContainer']['setPos'] = function (qz2xw, ud4nyf) {
      a2jkqw['inputContainer']['style']['left'] = qz2xw + 'px', a2jkqw['inputContainer']['style']['top'] = ud4nyf + 'px';
    }, hi36g['stage']['on']('resize', null, k0btwj['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nduyf4) {
      _$2sz['dispatchEvent'] && _$2sz['dispatchEvent']('resize');
    }), t57ob0['_soundClass'] = w0kaq, t57ob0['_musicClass'] = w0kaq;
  }, k0btwj['_onStageResize'] = function () {
    hi36g['stage']['_canvasTransform']['identity']()['scale'](_p$msc['width'] / i9hgm3['canvas']['width'] / m9g3p['getPixelRatio'](), _p$msc['height'] / i9hgm3['canvas']['height'] / m9g3p['getPixelRatio']());
  }, k0btwj['wxinputFocus'] = function (aw2zxq) {
    var q2wkja = a2jkqw['inputElement']['target'];q2wkja && !q2wkja['editable'] || (yu4nf['window']['wx']['offKeyboardConfirm'](), yu4nf['window']['wx']['offKeyboardInput'](), yu4nf['window']['wx']['showKeyboard']({ 'defaultValue': q2wkja['text'], 'maxLength': q2wkja['maxChars'], 'multiple': q2wkja['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (sp$zc) {}, 'fail': function (doun) {} }), yu4nf['window']['wx']['onKeyboardConfirm'](function (awqx) {
      awqx = awqx ? awqx['value'] : '', (q2wkja['text'] = awqx, q2wkja['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), yu4nf['window']['wx']['onKeyboardInput'](function (zxs$2_) {
      zxs$2_ = zxs$2_ ? zxs$2_['value'] : '', q2wkja['multiline'] || -0x1 == zxs$2_['indexOf']('\x0a') ? (q2wkja['text'] = zxs$2_, q2wkja['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, k0btwj['inputEnter'] = function () {
    a2jkqw['inputElement']['target']['focus'] = !0x1;
  }, k0btwj['wxinputblur'] = function () {
    k0btwj['hideKeyboard']();
  }, k0btwj['hideKeyboard'] = function () {
    yu4nf['window']['wx']['offKeyboardConfirm'](), yu4nf['window']['wx']['offKeyboardInput'](), yu4nf['window']['wx']['hideKeyboard']({ 'success': function (dfyv4) {
        console['log']('隐藏键盘');
      }, 'fail': function (v1ny84) {
        console['log']('隐藏键盘出错:' + (v1ny84 ? v1ny84['errMsg'] : ''));
      } });
  }, k0btwj);function k0btwj() {}var nd8y = function () {
    function zxsq2a() {}w2jaxq(zxsq2a, 'laya.wx.mini.MiniLoader');var ndu4yf = zxsq2a['prototype'];return ndu4yf['load'] = function (ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz) {
      void 0x0 === z2x_s && (z2x_s = !0x0), void 0x0 === $s2xz && ($s2xz = !0x1);var dn4fuy = this;0x0 === (dn4fuy['_url'] = ev8n)['indexOf']('data:image') ? dn4fuy['_type'] = ubt5o7 = 'image' : dn4fuy['_type'] = ubt5o7 = ubt5o7 || dn4fuy['getTypeFromUrl'](ev8n), dn4fuy['_cache'] = z2x_s, dn4fuy['_data'] = null;var dn4of = 'ascii';-0x1 != ev8n['indexOf']('.fnt') ? dn4of = 'utf8' : 'arraybuffer' == ubt5o7 && (dn4of = '');var $2sxzq = awk2qj['getFileExtension'](ev8n);if (-0x1 != zxsq2a['_fileTypeArr']['indexOf']($2sxzq)) yu4nf['EnvConfig']['load']['call'](this, ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz);else {
        if (fod45['getFileInfo'](ev8n)) yu4nf['EnvConfig']['load']['call'](this, ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz);else {
          if (-0x1 != ev8n['indexOf']('layaNativeDir/')) {
            if (yu4nf['isZiYu']) {
              var ut75b = fod45['ziyuFileData'][ev8n];return void dn4fuy['onLoaded'](ut75b);
            }return cosnole['log']('read read'), void fod45['read'](ev8n, dn4of, new fdu4on(zxsq2a, zxsq2a['onReadNativeCallBack'], [dn4of, ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz, dn4fuy]));
          }ut75b = '' == scz$_x['rootPath'] ? ev8n : ev8n['split'](scz$_x['rootPath'])[0x0], -0x1 != ev8n['indexOf']('http://') || -0x1 != ev8n['indexOf']('https://') ? yu4nf['EnvConfig']['load']['call'](dn4fuy, ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz) : fod45['readFile'](ut75b, dn4of, new fdu4on(zxsq2a, zxsq2a['onReadNativeCallBack'], [dn4of, ev8n, ubt5o7, z2x_s, kjaqw0, $s2xz, dn4fuy]), ev8n);
        }
      }
    }, ndu4yf['resMgrLoad'] = function (twkb0j, x2qs, k70b5, dv8y4, nfdo, waqjx, ey1v) {
      void 0x0 === k70b5 && (k70b5 = 0x0), void 0x0 === dv8y4 && (dv8y4 = !0x1), void 0x0 === nfdo && (nfdo = !0x1), void 0x0 === waqjx && (waqjx = 0x0), void 0x0 === ey1v && (ey1v = 0x3), -0x1 != twkb0j['indexOf']('mpack') && console['log']('=============resMgrLoad url:', twkb0j), yu4nf['EnvConfig']['resMgrLoad'](twkb0j, (nd8, bkt5, uo7bt) => {
        zxsq2a['prototype']['resMgrLoadCallBack'](nd8, bkt5, uo7bt, x2qs);
      }, k70b5, dv8y4, nfdo, waqjx, ey1v);
    }, ndu4yf['resMgrLoadCallBack'] = function (u57fd, fo5, kjwq2a, $z_2xs) {
      console['log']('buff:::', u57fd, kjwq2a, fod45['fileNativeDir'] + '///' + fod45['fileListName']), $z_2xs(u57fd, fo5, kjwq2a);
    }, ndu4yf['clearRes'] = function (b5fou, u4ofnd) {
      this['clearRes'](b5fou, u4ofnd = void 0x0 === u4ofnd ? !0x1 : u4ofnd), u4ofnd = fod45['getFileInfo'](b5fou), !u4ofnd || -0x1 == b5fou['indexOf']('http://') && -0x1 == b5fou['indexOf']('https://') || (u4ofnd = u4ofnd['md5'], u4ofnd = fod45['getFileNativePath'](u4ofnd), fod45['remove'](u4ofnd));
    }, zxsq2a['onReadNativeCallBack'] = function (xsqza2, _mpcg3, yvdnf, k0twj, pcs_$, ynfdv4, f5u4, yvd4, m_p$c3) {
      void 0x0 === k0twj && (k0twj = !0x0), void 0x0 === ynfdv4 && (ynfdv4 = !0x1), (yvd4 = void 0x0 === yvd4 ? 0x0 : yvd4) ? 0x1 == yvd4 && yu4nf['EnvConfig']['load']['call'](f5u4, _mpcg3, yvdnf, k0twj, pcs_$, ynfdv4) : (m_p$c3 = 'json' == yvdnf || 'atlas' == yvdnf ? yu4nf['getJson'](m_p$c3['data']) : 'xml' == yvdnf ? awk2qj['parseXMLFromString'](m_p$c3['data']) : m_p$c3['data'], f5u4['onLoaded'](m_p$c3), !yu4nf['isZiYu'] && yu4nf['isPosMsgYu'] && 'arraybuffer' != yvdnf && wx['postMessage']({ 'url': _mpcg3, 'data': m_p$c3, 'isLoad': !0x0 }));
    }, p_mc$(zxsq2a, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), zxsq2a;
  }(),
      fod45 = (w2jaxq(o4dfn, 'laya.wx.mini.MiniFileMgr', a2jw), o4dfn['isLoadFile'] = function (nuf4do) {
    return -0x1 != o4dfn['_fileTypeArr']['indexOf'](nuf4do);
  }, o4dfn['getFileInfo'] = function (q2szx) {
    return q2szx = q2szx['split']('?')[0x0], q2szx = o4dfn['filesListObj'][q2szx], null == q2szx ? null : q2szx;
  }, o4dfn['onFileUpdate'] = function ($mc_s, jt0awk) {
    var t75kb0 = $mc_s['split']('/');$mc_s = t75kb0[t75kb0['length'] - 0x1], t75kb0 = o4dfn['getFileInfo'](jt0awk), null == t75kb0 ? o4dfn['onSaveFile'](jt0awk, $mc_s) : t75kb0['readyUrl'] != jt0awk && o4dfn['remove']($mc_s, jt0awk);
  }, o4dfn['exits'] = function (fn4o, ajkt) {
    fn4o = o4dfn['getFileNativePath'](fn4o), o4dfn['fs']['getFileInfo']({ 'filePath': fn4o, 'success': function (f75dou) {
        null != ajkt && ajkt['runWith']([0x0, f75dou]);
      }, 'fail': function (f5oub) {
        null != ajkt && ajkt['runWith']([0x1, f5oub]);
      } });
  }, o4dfn['read'] = function (aqkj, y8n1ve, btw, u4ndof) {
    void 0x0 === y8n1ve && (y8n1ve = 'ascill'), aqkj = '' != (u4ndof = void 0x0 === u4ndof ? '' : u4ndof) ? o4dfn['getFileNativePath'](aqkj) : aqkj, o4dfn['fs']['readFile']({ 'filePath': aqkj, 'encoding': y8n1ve, 'success': function (tjkb0) {
        null != btw && btw['runWith']([0x0, tjkb0]);
      }, 'fail': function (wzax2q) {
        wzax2q && '' != u4ndof ? o4dfn['down'](u4ndof, y8n1ve, btw, u4ndof) : null != btw && btw['runWith']([0x1]);
      } });
  }, o4dfn['readNativeFile'] = function (c$m_ps, yev1n8) {
    o4dfn['fs']['readFile']({ 'filePath': c$m_ps, 'encoding': '', 'success': function (ndf4y) {
        null != yev1n8 && yev1n8['runWith']([0x0]);
      }, 'fail': function (to7u5b) {
        null != yev1n8 && yev1n8['runWith']([0x1]);
      } });
  }, o4dfn['down'] = function (zawq2x, spm_c$, jqw0a, kjbtw0) {
    void 0x0 === spm_c$ && (spm_c$ = 'ascill'), void 0x0 === kjbtw0 && (kjbtw0 = '');var qkaw2j = o4dfn['getFileNativePath'](kjbtw0);o4dfn['wxdown']({ 'url': zawq2x, 'filePath': qkaw2j, 'success': function (mcg_p) {
        0xc8 === mcg_p['statusCode'] && o4dfn['readFile'](mcg_p['filePath'], spm_c$, jqw0a, kjbtw0);
      }, 'fail': function (yvfdn4) {
        null != jqw0a && jqw0a['runWith']([0x1, yvfdn4]);
      } })['onProgressUpdate'](function (zas2qx) {
      null != jqw0a && jqw0a['runWith']([0x2, zas2qx['progress']]);
    });
  }, o4dfn['readFile'] = function (wq0ajk, akj0wt, zsqx$, xq2z) {
    void 0x0 === xq2z && (xq2z = ''), o4dfn['fs']['readFile']({ 'filePath': wq0ajk, 'encoding': akj0wt = void 0x0 === akj0wt ? 'ascill' : akj0wt, 'success': function ($zp_s) {
        -0x1 == wq0ajk['indexOf']('http://') && -0x1 == wq0ajk['indexOf']('https://') || o4dfn['onFileUpdate'](wq0ajk, xq2z), null != zsqx$ && zsqx$['runWith']([0x0, $zp_s]);
      }, 'fail': function (nfuy4) {
        nfuy4 && null != zsqx$ && zsqx$['runWith']([0x1, nfuy4]);
      } });
  }, o4dfn['downImg'] = function (gh96, cpsm$_, y4vfn) {
    void 0x0 === y4vfn && (y4vfn = ''), o4dfn['wxdown']({ 'url': gh96, 'success': function (_c$zs) {
        0xc8 === _c$zs['statusCode'] && o4dfn['copyFile'](_c$zs['tempFilePath'], y4vfn, cpsm$_);
      }, 'fail': function (gp_m) {
        null != cpsm$_ && cpsm$_['runWith']([0x1, gp_m]);
      } });
  }, o4dfn['copyFile'] = function (u54, mgp93c, xs_$cz) {
    var gm9h = u54['split']('/'),
        gih936 = gm9h[gm9h['length'] - 0x1];mgp93c['split']('?')[0x0];var y481v = o4dfn['getFileInfo'](mgp93c);gm9h = o4dfn['getFileNativePath'](gih936), o4dfn['fs']['copyFile']({ 'srcPath': u54, 'destPath': gm9h, 'success': function (sz$) {
        y481v ? y481v['readyUrl'] != mgp93c && o4dfn['remove'](gih936, mgp93c, xs_$cz) : (o4dfn['onSaveFile'](mgp93c, gih936), null != xs_$cz && xs_$cz['runWith']([0x0]));
      }, 'fail': function (qzwa2x) {
        null != xs_$cz && xs_$cz['runWith']([0x1, qzwa2x]);
      } });
  }, o4dfn['getFileNativePath'] = function (t7o0) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t7o0;
  }, o4dfn['remove'] = function (cpm_s, _m$psc, foud45) {
    void 0x0 === _m$psc && (_m$psc = '');var $xzqs2 = o4dfn['getFileInfo'](_m$psc),
        q2sxza = o4dfn['getFileNativePath']($xzqs2['md5']);hi36g['loader']['clearRes']($xzqs2['readyUrl']), o4dfn['fs']['unlink']({ 'filePath': q2sxza, 'success': function (yr1ev) {
        '' != _m$psc && o4dfn['onSaveFile'](_m$psc, cpm_s), null != foud45 && foud45['runWith']([0x0]);
      }, 'fail': function (xw2za) {} });
  }, o4dfn['onSaveFile'] = function (u45fo, zw2xa) {
    var n41v8 = u45fo['split']('?')[0x0];o4dfn['filesListObj'][n41v8] = { 'md5': zw2xa, 'readyUrl': u45fo }, o4dfn['fs']['writeFile']({ 'filePath': o4dfn['fileNativeDir'] + '/' + o4dfn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o4dfn['filesListObj']), 'success': function (k0jaqw) {
        console['log']('写入测试测试成功：', k0jaqw);
      }, 'fail': function (cszp) {
        console['log']('写入测试测试失败：', cszp);
      } });
  }, o4dfn['existDir'] = function (fvdny4, jk07) {
    o4dfn['fs']['mkdir']({ 'dirPath': fvdny4, 'success': function (pg9mi3) {
        null != jk07 && jk07['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (v8ny1) {
        -0x1 != v8ny1['errMsg']['indexOf']('file already exists') ? o4dfn['readSync'](o4dfn['fileListName'], 'utf8', jk07) : null != jk07 && jk07['runWith']([0x1, v8ny1]);
      } });
  }, o4dfn['readSync'] = function (p$zs_c, xjawq2, to7b05, _$pzcs) {
    void 0x0 === xjawq2 && (xjawq2 = 'ascill'), void 0x0 === _$pzcs && (_$pzcs = ''), p$zs_c = o4dfn['getFileNativePath'](p$zs_c);var azq2sx;try {
      azq2sx = o4dfn['fs']['readFileSync'](p$zs_c), null != to7b05 && to7b05['runWith']([0x0, { 'data': azq2sx }]);
    } catch (pc_) {
      null != to7b05 && to7b05['runWith']([0x1]);
    }
  }, o4dfn['readCache'] = function () {}, o4dfn['writeCache'] = function (dfy4n) {
    var ms_c$p = readyUrl['split']('?')[0x0];o4dfn['filesListObj'][ms_c$p] = { 'md5': md5Name, 'readyUrl': readyUrl }, o4dfn['fs']['writeFile']({ 'filePath': o4dfn['fileNativeDir'] + '/' + o4dfn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o4dfn['filesListObj']), 'success': function (z_$xsc) {}, 'fail': function (gpm3c) {} });
  }, o4dfn['setNativeFileDir'] = function (bktj70) {
    o4dfn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bktj70;
  }, o4dfn['filesListObj'] = {}, o4dfn['fileNativeDir'] = null, o4dfn['fileListName'] = 'layaairfiles.txt', o4dfn['ziyuFileData'] = {}, p_mc$(o4dfn, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), o4dfn);function o4dfn() {
    o4dfn['__super']['call'](this);
  }var w0kaq = function () {
    function $cpzs() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, $cpzs['__super']['call'](this), this['_sound'] = $cpzs['_createSound']();
    }w2jaxq($cpzs, 'laya.wx.mini.MiniSound', a2jw);var ktbjw = $cpzs['prototype'];return ktbjw['load'] = function (x2$szq) {
      var aqjwk0 = this,
          xazw2;function mcps() {
        if (null != $cpzs['_null']) aqjwk0['_sound']['onCanplay']($cpzs['_null']), aqjwk0['_sound']['onError']($cpzs['_null']);else try {
          aqjwk0['_sound']['onCanplay'](null), aqjwk0['_sound']['onError'](null), $cpzs['_null'] = null;
        } catch (zqxs$2) {
          console['warn']('[wxmini] _clearSound:' + zqxs$2), aqjwk0['_sound']['onCanplay'](fy4nv), aqjwk0['_sound']['onError'](fy4nv), $cpzs['_null'] = fy4nv;
        }
      }function fy4nv() {}x2$szq = scz$_x['formatURL'](x2$szq), this['url'] = x2$szq, $cpzs['_audioCache'][x2$szq] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        mcps(), xazw2['loaded'] = !0x0, xazw2['event']('complete'), $cpzs['_audioCache'][xazw2['url']] = xazw2;
      }), this['_sound']['onError'](function (d4o5u) {
        console['error']('errCode=' + d4o5u['errCode'] + '  errMsg=' + d4o5u['errMsg']), mcps(), xazw2['event']('error');
      }), this['_sound']['src'] = x2$szq, xazw2 = this);
    }, ktbjw['play'] = function (msp, vrye1) {
      void 0x0 === msp && (msp = 0x0), void 0x0 === vrye1 && (vrye1 = 0x0), (ny81ve = this['url'] == t57ob0['_tMusic'] ? ($cpzs['_musicAudio'] || ($cpzs['_musicAudio'] = $cpzs['_createSound']()), $cpzs['_musicAudio']) : $cpzs['_createSound']())['src'] = this['url'];var ny81ve = new j0kqwa(ny81ve);return ny81ve['url'] = this['url'], ny81ve['loops'] = vrye1, ny81ve['startTime'] = msp, ny81ve['play'](), t57ob0['addChannel'](ny81ve), ny81ve;
    }, ktbjw['dispose'] = function () {
      var cp_m3 = $cpzs['_audioCache'][this['url']];cp_m3 && (cp_m3['src'] = '', delete $cpzs['_audioCache'][this['url']]);
    }, sx_z$c(0x0, ktbjw, 'duration', function () {
      return this['_sound']['duration'];
    }), $cpzs['_createSound'] = function () {
      return $cpzs['_id']++, yu4nf['window']['wx']['createInnerAudioContext']();
    }, $cpzs['_musicAudio'] = null, $cpzs['_id'] = 0x0, $cpzs['_audioCache'] = {}, $cpzs['_null'] = void 0x0, $cpzs;
  }(),
      j0kqwa = function () {
    function tjk0w(p93gc) {
      this['_audio'] = null, this['_onEnd'] = null, tjk0w['__super']['call'](this), this['_audio'] = p93gc, this['_onEnd'] = awk2qj['bind'](this['__onEnd'], this), p93gc['onEnded'](this['_onEnd']);
    }w2jaxq(tjk0w, 'laya.wx.mini.MiniSoundChannel', g3ipm9);var xjqaw = tjk0w['prototype'];return xjqaw['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (hi36g['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, xjqaw['__onNull'] = function () {}, xjqaw['play'] = function () {
      this['isStopped'] = !0x1, t57ob0['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, xjqaw['stop'] = function () {
      if (this['isStopped'] = !0x0, t57ob0['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != tjk0w['_null']) this['_audio']['onEnded'](tjk0w['_null']);else try {
          this['_audio']['onEnded'](null), tjk0w['_null'] = null;
        } catch ($sxq2) {
          console['warn']('[wxmini] stop:' + $sxq2), this['_audio']['onEnded'](awk2qj['bind'](this['__onNull'], this)), tjk0w['_null'] = awk2qj['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, xjqaw['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, xjqaw['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, t57ob0['addChannel'](this), this['_audio']['play']());
    }, sx_z$c(0x0, xjqaw, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), sx_z$c(0x0, xjqaw, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), sx_z$c(0x0, xjqaw, 'volume', function () {
      return 0x1;
    }, function (xjqw) {}), tjk0w['_null'] = void 0x0, tjk0w;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (fbo7, fd5ou) {
  'use strict';

  for (var g9i3mh in Object['defineProperty'](fd5ou, '__esModule', { 'value': !0x0 }), Laya) {
    var d57uo = Laya[g9i3mh];d57uo && d57uo['__isclass'] && (fd5ou[g9i3mh] = d57uo);
  }
});