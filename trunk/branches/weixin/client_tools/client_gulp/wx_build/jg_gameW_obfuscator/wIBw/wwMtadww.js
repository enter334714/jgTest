var s = wx.$W;
!function (nil9p0, zw5ub) {
  zw5ub['un'], zw5ub['uns'];var a1ce = zw5ub['static'],
      z3uwb = zw5ub['class'],
      woudb = zw5ub['getset'];zw5ub['__newvec'];var sitl = laya['utils']['Browser'],
      $qtns = (laya['events']['Event'], laya['events']['EventDispatcher']),
      cz31 = laya['resource']['HTMLImage'],
      $f2 = laya['utils']['Handler'],
      d6v = laya['display']['Input'],
      k8ae7c = laya['net']['Loader'];laya['maths']['Matrix'];var il90 = laya['renders']['Render'],
      b5o6w = laya['utils']['RunDriver'];laya['media']['Sound'];var y0_9ip = laya['media']['SoundChannel'],
      uo35 = laya['media']['SoundManager'],
      $li0np = (laya['display']['Stage'], laya['net']['URL']),
      jka7cr = laya['utils']['Utils'],
      bouw = (z3uwb($tlsqn, 'laya.wx.mini.MiniAdpter'), $tlsqn['getJson'] = function (ezu813) {
    return JSON['parse'](ezu813);
  }, $tlsqn['init'] = function (b56dow, ezu81) {
    void 0x0 === b56dow && (b56dow = !0x1), void 0x0 === ezu81 && (ezu81 = !0x1), $tlsqn['_inited'] || ($tlsqn['window'] = nil9p0)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || ($tlsqn['_inited'] = !0x0, $tlsqn['isZiYu'] = ezu81, $tlsqn['isPosMsgYu'] = b56dow, $tlsqn['EnvConfig'] = {}, $tlsqn['isZiYu'] || (cze13['setNativeFileDir']('/layaairGame'), cze13['existDir'](cze13['fileNativeDir'], $f2['create']($tlsqn, $tlsqn['onMkdirCallBack']))), $tlsqn['window']['focus'] = function () {}, zw5ub['getUrlPath'] = function () {}, $tlsqn['window']['logtime'] = function (lqnts) {}, $tlsqn['window']['alertTimeLog'] = function (k1z8ec) {}, $tlsqn['window']['resetShareInfo'] = function () {}, $tlsqn['window']['CanvasRenderingContext2D'] = function () {}, $tlsqn['window']['CanvasRenderingContext2D']['prototype'] = $tlsqn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $tlsqn['window']['document']['body']['appendChild'] = function () {}, $tlsqn['EnvConfig']['pixelRatioInt'] = 0x0, b5o6w['getPixelRatio'] = $tlsqn['pixelRatio'], $tlsqn['_preCreateElement'] = sitl['createElement'], sitl['createElement'] = $tlsqn['createElement'], b5o6w['createShaderCondition'] = $tlsqn['createShaderCondition'], jka7cr['parseXMLFromString'] = $tlsqn['parseXMLFromString'], d6v['_createInputElement'] = nsi$tl['_createInputElement'], $tlsqn['EnvConfig']['load'] = k8ae7c['prototype']['load'], k8ae7c['prototype']['load'] = wbo35['prototype']['load'], $tlsqn['isZiYu'] && b56dow && wx['onMessage'](function (r7j_9y) {
      r7j_9y['isLoad'] && (cze13['ziyuFileData'][r7j_9y['url']] = r7j_9y['data']);
    }));
  }, $tlsqn['onMkdirCallBack'] = function (o56vh, b3ow5u) {
    o56vh || (cze13['filesListObj'] = JSON['parse'](b3ow5u['data']));
  }, $tlsqn['pixelRatio'] = function () {
    if (!$tlsqn['EnvConfig']['pixelRatioInt']) try {
      var ek18zc = wx['getSystemInfoSync']();return $tlsqn['EnvConfig']['pixelRatioInt'] = ek18zc['pixelRatio'], ek18zc['pixelRatio'];
    } catch (akj_r) {}return $tlsqn['EnvConfig']['pixelRatioInt'];
  }, $tlsqn['createElement'] = function (y7ra) {
    var hv6m4x;if ('canvas' == y7ra) return 0x1 == $tlsqn['idx'] ? $tlsqn['isZiYu'] ? (hv6m4x = sharedCanvas)['style'] = {} : hv6m4x = nil9p0['canvas'] : hv6m4x = nil9p0['wx']['createCanvas'](), $tlsqn['idx']++, hv6m4x;if ('textarea' == y7ra || 'input' == y7ra) return $tlsqn['onCreateInput'](y7ra);if ('div' != y7ra) return $tlsqn['_preCreateElement'](y7ra);return y7ra = $tlsqn['_preCreateElement'](y7ra), (y7ra['contains'] = function (yp0ni) {
      return null;
    }, y7ra['removeChild'] = function (e8kac7) {}, y7ra);
  }, $tlsqn['onCreateInput'] = function (jk87) {
    return jk87 = $tlsqn['_preCreateElement'](jk87), (jk87['focus'] = nsi$tl['wxinputFocus'], jk87['blur'] = nsi$tl['wxinputblur'], jk87['style'] = {}, jk87['value'] = 0x0, jk87['parentElement'] = {}, jk87['placeholder'] = {}, jk87['type'] = {}, jk87['setColor'] = function (k78jca) {}, jk87['setType'] = function (ce31) {}, jk87['setFontFace'] = function (jcrka) {}, jk87['addEventListener'] = function (ze138c) {}, jk87['contains'] = function (dhvx) {
      return null;
    }, jk87['removeChild'] = function (xv46h) {}, jk87);
  }, $tlsqn['createShaderCondition'] = function (r_jyp9) {
    var n$lp0i = this;return function () {
      return n$lp0i[r_jyp9['replace']('this.', '')];
    };
  }, $tlsqn['EnvConfig'] = null, $tlsqn['window'] = null, $tlsqn['_preCreateElement'] = null, $tlsqn['_inited'] = !0x1, $tlsqn['wxRequest'] = null, $tlsqn['systemInfo'] = null, $tlsqn['version'] = '0.0.1', $tlsqn['isZiYu'] = !0x1, $tlsqn['isPosMsgYu'] = !0x1, $tlsqn['parseXMLFromString'] = function (lsntq) {
    var j7y;lsntq = lsntq['replace'](/>\s+</g, '><');try {
      j7y = new nil9p0['Parser']['DOMParser']()['parseFromString'](lsntq, 'text/xml');
    } catch (inp9l0) {
      throw '需要引入xml解析库文件';
    }return j7y;
  }, $tlsqn['idx'] = 0x1, $tlsqn);function $tlsqn() {}z3uwb(pyi0_, 'laya.wx.mini.MiniImage'), pyi0_['prototype']['_loadImage'] = function (z1e83c) {
    var bduwo = !0x1;-0x1 == z1e83c['indexOf']('layaNativeDir/') && (bduwo = !0x0, z1e83c = $li0np['formatURL'](z1e83c)), cze13['getFileInfo'](z1e83c) ? pyi0_['onCreateImage'](z1e83c, this, !bduwo) : -0x1 != z1e83c['indexOf']('http://') || -0x1 != z1e83c['indexOf']('https://') ? cze13['downImg'](z1e83c, new $f2(pyi0_, pyi0_['onDownImgCallBack'], [z1e83c, this]), z1e83c) : pyi0_['onCreateImage'](z1e83c, this, !0x0);
  }, pyi0_['onDownImgCallBack'] = function (a1ce8k, ak81ec, l$ints) {
    l$ints ? ak81ec['onError'](null) : pyi0_['onCreateImage'](a1ce8k, ak81ec);
  }, pyi0_['onCreateImage'] = function (hv4mxg, $lnits, _jayr) {
    var a8ck7, $t0il;function $t2fsq() {
      $t0il['onload'] = null, $t0il['onerror'] = null, delete $lnits['imgCache'][hv4mxg];
    }a8ck7 = (_jayr = void 0x0 === _jayr ? !0x1 : _jayr) ? hv4mxg : (ck8e1a = cze13['getFileInfo'](hv4mxg)['md5'], cze13['getFileNativePath'](ck8e1a)), null == $lnits['imgCache'] && ($lnits['imgCache'] = {}), _jayr = function () {
      $t2fsq(), $lnits['onLoaded']($t0il);
    };var ck8e1a = function () {
      $t2fsq(), $lnits['event']('error', 'Load image failed');
    };'nativeimage' == $lnits['_type'] ? (($t0il = new sitl['window']['Image']())['crossOrigin'] = '', $t0il['onload'] = _jayr, $t0il['onerror'] = ck8e1a, $t0il['src'] = a8ck7, $lnits['imgCache'][hv4mxg] = $t0il) : new cz31['create'](a8ck7, { 'onload': _jayr, 'onerror': ck8e1a, 'onCreate': function (d5vh6) {
        $t0il = d5vh6, $lnits['imgCache'][hv4mxg] = d5vh6;
      } });
  };function pyi0_() {}var nsi$tl = (z3uwb(hgv4mx, 'laya.wx.mini.MiniInput'), hgv4mx['_createInputElement'] = function () {
    d6v['_initInput'](d6v['area'] = sitl['createElement']('textarea')), d6v['_initInput'](d6v['input'] = sitl['createElement']('input')), d6v['inputContainer'] = sitl['createElement']('div'), d6v['inputContainer']['style']['position'] = 'absolute', d6v['inputContainer']['style']['zIndex'] = 0x186a0, sitl['container']['appendChild'](d6v['inputContainer']), d6v['inputContainer']['setPos'] = function (lt$f, $0til) {
      d6v['inputContainer']['style']['left'] = lt$f + 'px', d6v['inputContainer']['style']['top'] = $0til + 'px';
    }, zw5ub['stage']['on']('resize', null, hgv4mx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (cak8j7) {
      nil9p0['dispatchEvent'] && nil9p0['dispatchEvent']('resize');
    }), uo35['_soundClass'] = ja, uo35['_musicClass'] = ja;
  }, hgv4mx['_onStageResize'] = function () {
    zw5ub['stage']['_canvasTransform']['identity']()['scale'](sitl['width'] / il90['canvas']['width'] / b5o6w['getPixelRatio'](), sitl['height'] / il90['canvas']['height'] / b5o6w['getPixelRatio']());
  }, hgv4mx['wxinputFocus'] = function (w1z3ub) {
    var $lnt0i = d6v['inputElement']['target'];$lnt0i && !$lnt0i['editable'] || (bouw['window']['wx']['offKeyboardConfirm'](), bouw['window']['wx']['offKeyboardInput'](), bouw['window']['wx']['showKeyboard']({ 'defaultValue': $lnt0i['text'], 'maxLength': $lnt0i['maxChars'], 'multiple': $lnt0i['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (t$2sq) {}, 'fail': function (v6hm) {} }), bouw['window']['wx']['onKeyboardConfirm'](function (cez83) {
      cez83 = cez83 ? cez83['value'] : '', ($lnt0i['text'] = cez83, $lnt0i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), bouw['window']['wx']['onKeyboardInput'](function (w5o3u) {
      w5o3u = w5o3u ? w5o3u['value'] : '', $lnt0i['multiline'] || -0x1 == w5o3u['indexOf']('\x0a') ? ($lnt0i['text'] = w5o3u, $lnt0i['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, hgv4mx['inputEnter'] = function () {
    d6v['inputElement']['target']['focus'] = !0x1;
  }, hgv4mx['wxinputblur'] = function () {
    hgv4mx['hideKeyboard']();
  }, hgv4mx['hideKeyboard'] = function () {
    bouw['window']['wx']['offKeyboardConfirm'](), bouw['window']['wx']['offKeyboardInput'](), bouw['window']['wx']['hideKeyboard']({ 'success': function (wu5z) {
        console['log']('隐藏键盘');
      }, 'fail': function (w1bz3u) {
        console['log']('隐藏键盘出错:' + (w1bz3u ? w1bz3u['errMsg'] : ''));
      } });
  }, hgv4mx);function hgv4mx() {}var wbo35 = function () {
    function cz1e3() {}z3uwb(cz1e3, 'laya.wx.mini.MiniLoader');var r_7 = cz1e3['prototype'];return r_7['load'] = function (kaj_7, v6d4xh, npi0y9, wvo56, yar7_) {
      void 0x0 === npi0y9 && (npi0y9 = !0x0), void 0x0 === yar7_ && (yar7_ = !0x1);var _9y7jr = this;0x0 === (_9y7jr['_url'] = kaj_7)['indexOf']('data:image') ? _9y7jr['_type'] = v6d4xh = 'image' : _9y7jr['_type'] = v6d4xh = v6d4xh || _9y7jr['getTypeFromUrl'](kaj_7), _9y7jr['_cache'] = npi0y9, _9y7jr['_data'] = null;var u1e8z = 'ascii';-0x1 != kaj_7['indexOf']('.fnt') ? u1e8z = 'utf8' : 'arraybuffer' == v6d4xh && (u1e8z = '');var $lni0 = jka7cr['getFileExtension'](kaj_7);if (-0x1 != cz1e3['_fileTypeArr']['indexOf']($lni0)) bouw['EnvConfig']['load']['call'](this, kaj_7, v6d4xh, npi0y9, wvo56, yar7_);else {
        if (cze13['getFileInfo'](kaj_7)) bouw['EnvConfig']['load']['call'](this, kaj_7, v6d4xh, npi0y9, wvo56, yar7_);else {
          if (-0x1 != kaj_7['indexOf']('layaNativeDir/')) {
            if (bouw['isZiYu']) {
              var qsnl$ = cze13['ziyuFileData'][kaj_7];return void _9y7jr['onLoaded'](qsnl$);
            }return cosnole['log']('read read'), void cze13['read'](kaj_7, u1e8z, new $f2(cz1e3, cz1e3['onReadNativeCallBack'], [u1e8z, kaj_7, v6d4xh, npi0y9, wvo56, yar7_, _9y7jr]));
          }qsnl$ = '' == $li0np['rootPath'] ? kaj_7 : kaj_7['split']($li0np['rootPath'])[0x0], -0x1 != kaj_7['indexOf']('http://') || -0x1 != kaj_7['indexOf']('https://') ? bouw['EnvConfig']['load']['call'](_9y7jr, kaj_7, v6d4xh, npi0y9, wvo56, yar7_) : cze13['readFile'](qsnl$, u1e8z, new $f2(cz1e3, cz1e3['onReadNativeCallBack'], [u1e8z, kaj_7, v6d4xh, npi0y9, wvo56, yar7_, _9y7jr]), kaj_7);
        }
      }
    }, r_7['resMgrLoad'] = function (kca87j, i0py9_, z8e1u, uez, h4dxv, $tsnli, sqnt$) {
      void 0x0 === z8e1u && (z8e1u = 0x0), void 0x0 === uez && (uez = !0x1), void 0x0 === h4dxv && (h4dxv = !0x1), void 0x0 === $tsnli && ($tsnli = 0x0), void 0x0 === sqnt$ && (sqnt$ = 0x3), -0x1 != kca87j['indexOf']('mpack') && console['log']('=============resMgrLoad url:', kca87j), bouw['EnvConfig']['resMgrLoad'](kca87j, (y_7ajr, gmv4h, slitn) => {
        cz1e3['prototype']['resMgrLoadCallBack'](y_7ajr, gmv4h, slitn, i0py9_);
      }, z8e1u, uez, h4dxv, $tsnli, sqnt$);
    }, r_7['resMgrLoadCallBack'] = function (c1kz8, fsqt$, ckz18e, wobu) {
      console['log']('buff:::', c1kz8, ckz18e, cze13['fileNativeDir'] + '///' + cze13['fileListName']), wobu(c1kz8, fsqt$, ckz18e);
    }, r_7['clearRes'] = function (v6dw5, h4v6dx) {
      this['clearRes'](v6dw5, h4v6dx = void 0x0 === h4v6dx ? !0x1 : h4v6dx), h4v6dx = cze13['getFileInfo'](v6dw5), !h4v6dx || -0x1 == v6dw5['indexOf']('http://') && -0x1 == v6dw5['indexOf']('https://') || (h4v6dx = h4v6dx['md5'], h4v6dx = cze13['getFileNativePath'](h4v6dx), cze13['remove'](h4v6dx));
    }, cz1e3['onReadNativeCallBack'] = function (ke8a7, _ipy09, t2qf$, n$il0t, c7k8j, e81c3, eak81, l$snqt, fqlt$) {
      void 0x0 === n$il0t && (n$il0t = !0x0), void 0x0 === e81c3 && (e81c3 = !0x1), (l$snqt = void 0x0 === l$snqt ? 0x0 : l$snqt) ? 0x1 == l$snqt && bouw['EnvConfig']['load']['call'](eak81, _ipy09, t2qf$, n$il0t, c7k8j, e81c3) : (fqlt$ = 'json' == t2qf$ || 'atlas' == t2qf$ ? bouw['getJson'](fqlt$['data']) : 'xml' == t2qf$ ? jka7cr['parseXMLFromString'](fqlt$['data']) : fqlt$['data'], eak81['onLoaded'](fqlt$), !bouw['isZiYu'] && bouw['isPosMsgYu'] && 'arraybuffer' != t2qf$ && wx['postMessage']({ 'url': _ipy09, 'data': fqlt$, 'isLoad': !0x0 }));
    }, a1ce(cz1e3, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), cz1e3;
  }(),
      cze13 = (z3uwb(wb5uz3, 'laya.wx.mini.MiniFileMgr', $qtns), wb5uz3['isLoadFile'] = function (y0i9_) {
    return -0x1 != wb5uz3['_fileTypeArr']['indexOf'](y0i9_);
  }, wb5uz3['getFileInfo'] = function (od5h) {
    return od5h = od5h['split']('?')[0x0], od5h = wb5uz3['filesListObj'][od5h], null == od5h ? null : od5h;
  }, wb5uz3['onFileUpdate'] = function (w53bz, $stnli) {
    var m4hgv = w53bz['split']('/');w53bz = m4hgv[m4hgv['length'] - 0x1], m4hgv = wb5uz3['getFileInfo']($stnli), null == m4hgv ? wb5uz3['onSaveFile']($stnli, w53bz) : m4hgv['readyUrl'] != $stnli && wb5uz3['remove'](w53bz, $stnli);
  }, wb5uz3['exits'] = function (hgmx4, t2s) {
    hgmx4 = wb5uz3['getFileNativePath'](hgmx4), wb5uz3['fs']['getFileInfo']({ 'filePath': hgmx4, 'success': function (k1ezc8) {
        null != t2s && t2s['runWith']([0x0, k1ezc8]);
      }, 'fail': function (ka8ec) {
        null != t2s && t2s['runWith']([0x1, ka8ec]);
      } });
  }, wb5uz3['read'] = function (yjr_, arjy_7, stf$2, uw1z) {
    void 0x0 === arjy_7 && (arjy_7 = 'ascill'), yjr_ = '' != (uw1z = void 0x0 === uw1z ? '' : uw1z) ? wb5uz3['getFileNativePath'](yjr_) : yjr_, wb5uz3['fs']['readFile']({ 'filePath': yjr_, 'encoding': arjy_7, 'success': function (e8ack1) {
        null != stf$2 && stf$2['runWith']([0x0, e8ack1]);
      }, 'fail': function (wd5ob) {
        wd5ob && '' != uw1z ? wb5uz3['down'](uw1z, arjy_7, stf$2, uw1z) : null != stf$2 && stf$2['runWith']([0x1]);
      } });
  }, wb5uz3['readNativeFile'] = function (r79_j, uez31) {
    wb5uz3['fs']['readFile']({ 'filePath': r79_j, 'encoding': '', 'success': function (li0t$) {
        null != uez31 && uez31['runWith']([0x0]);
      }, 'fail': function (dx4v) {
        null != uez31 && uez31['runWith']([0x1]);
      } });
  }, wb5uz3['down'] = function (aj_yr7, bud5ow, ue138, t$2sqf) {
    void 0x0 === bud5ow && (bud5ow = 'ascill'), void 0x0 === t$2sqf && (t$2sqf = '');var _jak7 = wb5uz3['getFileNativePath'](t$2sqf);wb5uz3['wxdown']({ 'url': aj_yr7, 'filePath': _jak7, 'success': function (jy_97) {
        0xc8 === jy_97['statusCode'] && wb5uz3['readFile'](jy_97['filePath'], bud5ow, ue138, t$2sqf);
      }, 'fail': function (v5d6oh) {
        null != ue138 && ue138['runWith']([0x1, v5d6oh]);
      } })['onProgressUpdate'](function (vhd6o) {
      null != ue138 && ue138['runWith']([0x2, vhd6o['progress']]);
    });
  }, wb5uz3['readFile'] = function (kc81, j7cka, qnls$, v4xm6h) {
    void 0x0 === v4xm6h && (v4xm6h = ''), wb5uz3['fs']['readFile']({ 'filePath': kc81, 'encoding': j7cka = void 0x0 === j7cka ? 'ascill' : j7cka, 'success': function (ke7ac) {
        -0x1 == kc81['indexOf']('http://') && -0x1 == kc81['indexOf']('https://') || wb5uz3['onFileUpdate'](kc81, v4xm6h), null != qnls$ && qnls$['runWith']([0x0, ke7ac]);
      }, 'fail': function (nl$0ip) {
        nl$0ip && null != qnls$ && qnls$['runWith']([0x1, nl$0ip]);
      } });
  }, wb5uz3['downImg'] = function (ka87cj, y9p0, e3u1z8) {
    void 0x0 === e3u1z8 && (e3u1z8 = ''), wb5uz3['wxdown']({ 'url': ka87cj, 'success': function (b5u3zw) {
        0xc8 === b5u3zw['statusCode'] && wb5uz3['copyFile'](b5u3zw['tempFilePath'], e3u1z8, y9p0);
      }, 'fail': function (wb5zu) {
        null != y9p0 && y9p0['runWith']([0x1, wb5zu]);
      } });
  }, wb5uz3['copyFile'] = function (bz1e3u, $til0n, r_y0) {
    var ipnl$ = bz1e3u['split']('/'),
        rp9j_ = ipnl$[ipnl$['length'] - 0x1];$til0n['split']('?')[0x0];var ra_ = wb5uz3['getFileInfo']($til0n);ipnl$ = wb5uz3['getFileNativePath'](rp9j_), wb5uz3['fs']['copyFile']({ 'srcPath': bz1e3u, 'destPath': ipnl$, 'success': function (v6d) {
        ra_ ? ra_['readyUrl'] != $til0n && wb5uz3['remove'](rp9j_, $til0n, r_y0) : (wb5uz3['onSaveFile']($til0n, rp9j_), null != r_y0 && r_y0['runWith']([0x0]));
      }, 'fail': function (i9p_0y) {
        null != r_y0 && r_y0['runWith']([0x1, i9p_0y]);
      } });
  }, wb5uz3['getFileNativePath'] = function (nlqst$) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nlqst$;
  }, wb5uz3['remove'] = function (ow6vd, gxm4h, xh4vd6) {
    void 0x0 === gxm4h && (gxm4h = '');var nt0i$l = wb5uz3['getFileInfo'](gxm4h),
        qs$n = wb5uz3['getFileNativePath'](nt0i$l['md5']);zw5ub['loader']['clearRes'](nt0i$l['readyUrl']), wb5uz3['fs']['unlink']({ 'filePath': qs$n, 'success': function (wu1bz) {
        '' != gxm4h && wb5uz3['onSaveFile'](gxm4h, ow6vd), null != xh4vd6 && xh4vd6['runWith']([0x0]);
      }, 'fail': function (hgmvx4) {} });
  }, wb5uz3['onSaveFile'] = function (xvmg4, o6h) {
    var mhx6v4 = xvmg4['split']('?')[0x0];wb5uz3['filesListObj'][mhx6v4] = { 'md5': o6h, 'readyUrl': xvmg4 }, wb5uz3['fs']['writeFile']({ 'filePath': wb5uz3['fileNativeDir'] + '/' + wb5uz3['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wb5uz3['filesListObj']), 'success': function (k7aec) {
        console['log']('写入测试测试成功：', k7aec);
      }, 'fail': function (b3ouw5) {
        console['log']('写入测试测试失败：', b3ouw5);
      } });
  }, wb5uz3['existDir'] = function (ka81c, itnl$s) {
    wb5uz3['fs']['mkdir']({ 'dirPath': ka81c, 'success': function (jckr) {
        null != itnl$s && itnl$s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (wv56o) {
        -0x1 != wv56o['errMsg']['indexOf']('file already exists') ? wb5uz3['readSync'](wb5uz3['fileListName'], 'utf8', itnl$s) : null != itnl$s && itnl$s['runWith']([0x1, wv56o]);
      } });
  }, wb5uz3['readSync'] = function (s2ft$q, _9iy0, ftlq$, c3z8e1) {
    void 0x0 === _9iy0 && (_9iy0 = 'ascill'), void 0x0 === c3z8e1 && (c3z8e1 = ''), s2ft$q = wb5uz3['getFileNativePath'](s2ft$q);var e1kc8a;try {
      e1kc8a = wb5uz3['fs']['readFileSync'](s2ft$q), null != ftlq$ && ftlq$['runWith']([0x0, { 'data': e1kc8a }]);
    } catch (stlqn) {
      null != ftlq$ && ftlq$['runWith']([0x1]);
    }
  }, wb5uz3['readCache'] = function () {}, wb5uz3['writeCache'] = function (sf$tql) {
    var y9 = readyUrl['split']('?')[0x0];wb5uz3['filesListObj'][y9] = { 'md5': md5Name, 'readyUrl': readyUrl }, wb5uz3['fs']['writeFile']({ 'filePath': wb5uz3['fileNativeDir'] + '/' + wb5uz3['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wb5uz3['filesListObj']), 'success': function (v6d4) {}, 'fail': function (z138c) {} });
  }, wb5uz3['setNativeFileDir'] = function (lit$ns) {
    wb5uz3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lit$ns;
  }, wb5uz3['filesListObj'] = {}, wb5uz3['fileNativeDir'] = null, wb5uz3['fileListName'] = 'layaairfiles.txt', wb5uz3['ziyuFileData'] = {}, a1ce(wb5uz3, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), wb5uz3);function wb5uz3() {
    wb5uz3['__super']['call'](this);
  }var ja = function () {
    function _0ry() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, _0ry['__super']['call'](this), this['_sound'] = _0ry['_createSound']();
    }z3uwb(_0ry, 'laya.wx.mini.MiniSound', $qtns);var pj_9ry = _0ry['prototype'];return pj_9ry['load'] = function (ls$nqt) {
      var $qst2f = this,
          _yj97r;function ob5wd() {
        if (null != _0ry['_null']) $qst2f['_sound']['onCanplay'](_0ry['_null']), $qst2f['_sound']['onError'](_0ry['_null']);else try {
          $qst2f['_sound']['onCanplay'](null), $qst2f['_sound']['onError'](null), _0ry['_null'] = null;
        } catch (itn$l0) {
          console['warn']('[wxmini] _clearSound:' + itn$l0), $qst2f['_sound']['onCanplay'](ow65db), $qst2f['_sound']['onError'](ow65db), _0ry['_null'] = ow65db;
        }
      }function ow65db() {}ls$nqt = $li0np['formatURL'](ls$nqt), this['url'] = ls$nqt, _0ry['_audioCache'][ls$nqt] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        ob5wd(), _yj97r['loaded'] = !0x0, _yj97r['event']('complete'), _0ry['_audioCache'][_yj97r['url']] = _yj97r;
      }), this['_sound']['onError'](function (ze81c3) {
        console['error']('errCode=' + ze81c3['errCode'] + '  errMsg=' + ze81c3['errMsg']), ob5wd(), _yj97r['event']('error');
      }), this['_sound']['src'] = ls$nqt, _yj97r = this);
    }, pj_9ry['play'] = function (yr9p_0, intls) {
      void 0x0 === yr9p_0 && (yr9p_0 = 0x0), void 0x0 === intls && (intls = 0x0), (ac18 = this['url'] == uo35['_tMusic'] ? (_0ry['_musicAudio'] || (_0ry['_musicAudio'] = _0ry['_createSound']()), _0ry['_musicAudio']) : _0ry['_createSound']())['src'] = this['url'];var ac18 = new l0pi9(ac18);return ac18['url'] = this['url'], ac18['loops'] = intls, ac18['startTime'] = yr9p_0, ac18['play'](), uo35['addChannel'](ac18), ac18;
    }, pj_9ry['dispose'] = function () {
      var v4xg = _0ry['_audioCache'][this['url']];v4xg && (v4xg['src'] = '', delete _0ry['_audioCache'][this['url']]);
    }, woudb(0x0, pj_9ry, 'duration', function () {
      return this['_sound']['duration'];
    }), _0ry['_createSound'] = function () {
      return _0ry['_id']++, bouw['window']['wx']['createInnerAudioContext']();
    }, _0ry['_musicAudio'] = null, _0ry['_id'] = 0x0, _0ry['_audioCache'] = {}, _0ry['_null'] = void 0x0, _0ry;
  }(),
      l0pi9 = function () {
    function mvxhg(wb5odu) {
      this['_audio'] = null, this['_onEnd'] = null, mvxhg['__super']['call'](this), this['_audio'] = wb5odu, this['_onEnd'] = jka7cr['bind'](this['__onEnd'], this), wb5odu['onEnded'](this['_onEnd']);
    }z3uwb(mvxhg, 'laya.wx.mini.MiniSoundChannel', y0_9ip);var hx4dv6 = mvxhg['prototype'];return hx4dv6['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (zw5ub['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hx4dv6['__onNull'] = function () {}, hx4dv6['play'] = function () {
      this['isStopped'] = !0x1, uo35['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, hx4dv6['stop'] = function () {
      if (this['isStopped'] = !0x0, uo35['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != mvxhg['_null']) this['_audio']['onEnded'](mvxhg['_null']);else try {
          this['_audio']['onEnded'](null), mvxhg['_null'] = null;
        } catch (uz3bw1) {
          console['warn']('[wxmini] stop:' + uz3bw1), this['_audio']['onEnded'](jka7cr['bind'](this['__onNull'], this)), mvxhg['_null'] = jka7cr['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, hx4dv6['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, hx4dv6['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, uo35['addChannel'](this), this['_audio']['play']());
    }, woudb(0x0, hx4dv6, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), woudb(0x0, hx4dv6, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), woudb(0x0, hx4dv6, 'volume', function () {
      return 0x1;
    }, function (w6o) {}), mvxhg['_null'] = void 0x0, mvxhg;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (o4vdh, tq$2fs) {
  'use strict';

  for (var yip9n in Object['defineProperty'](tq$2fs, '__esModule', { 'value': !0x0 }), Laya) {
    var uzw5b = Laya[yip9n];uzw5b && uzw5b['__isclass'] && (tq$2fs[yip9n] = uzw5b);
  }
});