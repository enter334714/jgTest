var v = wx.$d;
!function ($mgoua, q20vxl8) {
  q20vxl8['un'], q20vxl8['uns'];var zj31n = q20vxl8['static'],
      a_3uez6 = q20vxl8['class'],
      b_a$u6o = q20vxl8['getset'];q20vxl8['__newvec'];var w5l8c42 = laya['utils']['Browser'],
      l2wc495 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      xlvq20 = laya['resource']['HTMLImage'],
      q80xlv2 = laya['utils']['Handler'],
      zetn316 = laya['display']['Input'],
      b_$aom = laya['net']['Loader'];laya['maths']['Matrix'];var gb7pom = laya['renders']['Render'],
      om$buag = laya['utils']['RunDriver'];laya['media']['Sound'];var jk3ftn = laya['media']['SoundChannel'],
      $oe6_a = laya['media']['SoundManager'],
      _uoeaz6 = (laya['display']['Stage'], laya['net']['URL']),
      y7mgpb9 = laya['utils']['Utils'],
      khfjtr1 = (a_3uez6(e_ou6za, 'laya.wx.mini.MiniAdpter'), e_ou6za['getJson'] = function (l8qv02) {
    return JSON['parse'](l8qv02);
  }, e_ou6za['init'] = function (tfknhj1, kf1htn) {
    void 0x0 === tfknhj1 && (tfknhj1 = !0x1), void 0x0 === kf1htn && (kf1htn = !0x1), e_ou6za['_inited'] || (e_ou6za['window'] = $mgoua)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (e_ou6za['_inited'] = !0x0, e_ou6za['isZiYu'] = kf1htn, e_ou6za['isPosMsgYu'] = tfknhj1, e_ou6za['EnvConfig'] = {}, e_ou6za['isZiYu'] || (o$uea_['setNativeFileDir']('/layaairGame'), o$uea_['existDir'](o$uea_['fileNativeDir'], q80xlv2['create'](e_ou6za, e_ou6za['onMkdirCallBack']))), e_ou6za['window']['focus'] = function () {}, q20vxl8['getUrlPath'] = function () {}, e_ou6za['window']['logtime'] = function (mobpg) {}, e_ou6za['window']['alertTimeLog'] = function (oma$g) {}, e_ou6za['window']['resetShareInfo'] = function () {}, e_ou6za['window']['CanvasRenderingContext2D'] = function () {}, e_ou6za['window']['CanvasRenderingContext2D']['prototype'] = e_ou6za['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e_ou6za['window']['document']['body']['appendChild'] = function () {}, e_ou6za['EnvConfig']['pixelRatioInt'] = 0x0, om$buag['getPixelRatio'] = e_ou6za['pixelRatio'], e_ou6za['_preCreateElement'] = w5l8c42['createElement'], w5l8c42['createElement'] = e_ou6za['createElement'], om$buag['createShaderCondition'] = e_ou6za['createShaderCondition'], y7mgpb9['parseXMLFromString'] = e_ou6za['parseXMLFromString'], zetn316['_createInputElement'] = bpm79yg['_createInputElement'], e_ou6za['EnvConfig']['load'] = b_$aom['prototype']['load'], b_$aom['prototype']['load'] = vdq2x['prototype']['load'], e_ou6za['isZiYu'] && tfknhj1 && wx['onMessage'](function (en63z1t) {
      en63z1t['isLoad'] && (o$uea_['ziyuFileData'][en63z1t['url']] = en63z1t['data']);
    }));
  }, e_ou6za['onMkdirCallBack'] = function (cl4y9w5, te31zn6) {
    cl4y9w5 || (o$uea_['filesListObj'] = JSON['parse'](te31zn6['data']));
  }, e_ou6za['pixelRatio'] = function () {
    if (!e_ou6za['EnvConfig']['pixelRatioInt']) try {
      var u_n6ze = wx['getSystemInfoSync']();return e_ou6za['EnvConfig']['pixelRatioInt'] = u_n6ze['pixelRatio'], u_n6ze['pixelRatio'];
    } catch (ywp975) {}return e_ou6za['EnvConfig']['pixelRatioInt'];
  }, e_ou6za['createElement'] = function (wgymp7) {
    var wm79ygp;if ('canvas' == wgymp7) return 0x1 == e_ou6za['idx'] ? e_ou6za['isZiYu'] ? (wm79ygp = sharedCanvas)['style'] = {} : wm79ygp = $mgoua['canvas'] : wm79ygp = $mgoua['wx']['createCanvas'](), e_ou6za['idx']++, wm79ygp;if ('textarea' == wgymp7 || 'input' == wgymp7) return e_ou6za['onCreateInput'](wgymp7);if ('div' != wgymp7) return e_ou6za['_preCreateElement'](wgymp7);return wgymp7 = e_ou6za['_preCreateElement'](wgymp7), (wgymp7['contains'] = function (l842xc5) {
      return null;
    }, wgymp7['removeChild'] = function (cy4597w) {}, wgymp7);
  }, e_ou6za['onCreateInput'] = function (lcx52) {
    return lcx52 = e_ou6za['_preCreateElement'](lcx52), (lcx52['focus'] = bpm79yg['wxinputFocus'], lcx52['blur'] = bpm79yg['wxinputblur'], lcx52['style'] = {}, lcx52['value'] = 0x0, lcx52['parentElement'] = {}, lcx52['placeholder'] = {}, lcx52['type'] = {}, lcx52['setColor'] = function (lc4w5y) {}, lcx52['setType'] = function (cql4x82) {}, lcx52['setFontFace'] = function (z_neu6) {}, lcx52['addEventListener'] = function (zu6e3a_) {}, lcx52['contains'] = function (a6bu$_o) {
      return null;
    }, lcx52['removeChild'] = function (bm9y7) {}, lcx52);
  }, e_ou6za['createShaderCondition'] = function (xq0l48) {
    var l2qvx = this;return function () {
      return l2qvx[xq0l48['replace']('this.', '')];
    };
  }, e_ou6za['EnvConfig'] = null, e_ou6za['window'] = null, e_ou6za['_preCreateElement'] = null, e_ou6za['_inited'] = !0x1, e_ou6za['wxRequest'] = null, e_ou6za['systemInfo'] = null, e_ou6za['version'] = '0.0.1', e_ou6za['isZiYu'] = !0x1, e_ou6za['isPosMsgYu'] = !0x1, e_ou6za['parseXMLFromString'] = function (gm$pby) {
    var thnkf;gm$pby = gm$pby['replace'](/>\s+</g, '><');try {
      thnkf = new $mgoua['Parser']['DOMParser']()['parseFromString'](gm$pby, 'text/xml');
    } catch (jk1hfrt) {
      throw '需要引入xml解析库文件';
    }return thnkf;
  }, e_ou6za['idx'] = 0x1, e_ou6za);function e_ou6za() {}a_3uez6(pmybg$, 'laya.wx.mini.MiniImage'), pmybg$['prototype']['_loadImage'] = function ($6u_o) {
    var gbmy$7 = !0x1;-0x1 == $6u_o['indexOf']('layaNativeDir/') && (gbmy$7 = !0x0, $6u_o = _uoeaz6['formatURL']($6u_o)), o$uea_['getFileInfo']($6u_o) ? pmybg$['onCreateImage']($6u_o, this, !gbmy$7) : -0x1 != $6u_o['indexOf']('http://') || -0x1 != $6u_o['indexOf']('https://') ? o$uea_['downImg']($6u_o, new q80xlv2(pmybg$, pmybg$['onDownImgCallBack'], [$6u_o, this]), $6u_o) : pmybg$['onCreateImage']($6u_o, this, !0x0);
  }, pmybg$['onDownImgCallBack'] = function ($au_e, p7cy95w, eau_$o) {
    eau_$o ? p7cy95w['onError'](null) : pmybg$['onCreateImage']($au_e, p7cy95w);
  }, pmybg$['onCreateImage'] = function (trjfk, fnj1hkt, kjthfr1) {
    var qvx2d0, t36nze1;function m9y7wgp() {
      t36nze1['onload'] = null, t36nze1['onerror'] = null, delete fnj1hkt['imgCache'][trjfk];
    }qvx2d0 = (kjthfr1 = void 0x0 === kjthfr1 ? !0x1 : kjthfr1) ? trjfk : (ae6uo$ = o$uea_['getFileInfo'](trjfk)['md5'], o$uea_['getFileNativePath'](ae6uo$)), null == fnj1hkt['imgCache'] && (fnj1hkt['imgCache'] = {}), kjthfr1 = function () {
      m9y7wgp(), fnj1hkt['onLoaded'](t36nze1);
    };var ae6uo$ = function () {
      m9y7wgp(), fnj1hkt['event']('error', 'Load image failed');
    };'nativeimage' == fnj1hkt['_type'] ? ((t36nze1 = new w5l8c42['window']['Image']())['crossOrigin'] = '', t36nze1['onload'] = kjthfr1, t36nze1['onerror'] = ae6uo$, t36nze1['src'] = qvx2d0, fnj1hkt['imgCache'][trjfk] = t36nze1) : new xlvq20['create'](qvx2d0, { 'onload': kjthfr1, 'onerror': ae6uo$, 'onCreate': function (wy59p7c) {
        t36nze1 = wy59p7c, fnj1hkt['imgCache'][trjfk] = wy59p7c;
      } });
  };function pmybg$() {}var bpm79yg = (a_3uez6(uza6o_e, 'laya.wx.mini.MiniInput'), uza6o_e['_createInputElement'] = function () {
    zetn316['_initInput'](zetn316['area'] = w5l8c42['createElement']('textarea')), zetn316['_initInput'](zetn316['input'] = w5l8c42['createElement']('input')), zetn316['inputContainer'] = w5l8c42['createElement']('div'), zetn316['inputContainer']['style']['position'] = 'absolute', zetn316['inputContainer']['style']['zIndex'] = 0x186a0, w5l8c42['container']['appendChild'](zetn316['inputContainer']), zetn316['inputContainer']['setPos'] = function (_6abo, ao$umb) {
      zetn316['inputContainer']['style']['left'] = _6abo + 'px', zetn316['inputContainer']['style']['top'] = ao$umb + 'px';
    }, q20vxl8['stage']['on']('resize', null, uza6o_e['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (m$a_ou) {
      $mgoua['dispatchEvent'] && $mgoua['dispatchEvent']('resize');
    }), $oe6_a['_soundClass'] = gw59py7, $oe6_a['_musicClass'] = gw59py7;
  }, uza6o_e['_onStageResize'] = function () {
    q20vxl8['stage']['_canvasTransform']['identity']()['scale'](w5l8c42['width'] / gb7pom['canvas']['width'] / om$buag['getPixelRatio'](), w5l8c42['height'] / gb7pom['canvas']['height'] / om$buag['getPixelRatio']());
  }, uza6o_e['wxinputFocus'] = function (a$uom_) {
    var lc4yw = zetn316['inputElement']['target'];lc4yw && !lc4yw['editable'] || (khfjtr1['window']['wx']['offKeyboardConfirm'](), khfjtr1['window']['wx']['offKeyboardInput'](), khfjtr1['window']['wx']['showKeyboard']({ 'defaultValue': lc4yw['text'], 'maxLength': lc4yw['maxChars'], 'multiple': lc4yw['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (khi1j) {}, 'fail': function (c95l2w4) {} }), khfjtr1['window']['wx']['onKeyboardConfirm'](function (_nez6) {
      _nez6 = _nez6 ? _nez6['value'] : '', (lc4yw['text'] = _nez6, lc4yw['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), khfjtr1['window']['wx']['onKeyboardInput'](function (_mu$b) {
      _mu$b = _mu$b ? _mu$b['value'] : '', lc4yw['multiline'] || -0x1 == _mu$b['indexOf']('\x0a') ? (lc4yw['text'] = _mu$b, lc4yw['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, uza6o_e['inputEnter'] = function () {
    zetn316['inputElement']['target']['focus'] = !0x1;
  }, uza6o_e['wxinputblur'] = function () {
    uza6o_e['hideKeyboard']();
  }, uza6o_e['hideKeyboard'] = function () {
    khfjtr1['window']['wx']['offKeyboardConfirm'](), khfjtr1['window']['wx']['offKeyboardInput'](), khfjtr1['window']['wx']['hideKeyboard']({ 'success': function (ub$a_o) {
        console['log']('隐藏键盘');
      }, 'fail': function (fjnzt13) {
        console['log']('隐藏键盘出错:' + (fjnzt13 ? fjnzt13['errMsg'] : ''));
      } });
  }, uza6o_e);function uza6o_e() {}var vdq2x = function () {
    function m_obua() {}a_3uez6(m_obua, 'laya.wx.mini.MiniLoader');var x2qlv = m_obua['prototype'];return x2qlv['load'] = function (_a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5) {
      void 0x0 === o$7mpbg && (o$7mpbg = !0x0), void 0x0 === pc7wy5 && (pc7wy5 = !0x1);var mpbo$ = this;0x0 === (mpbo$['_url'] = _a6obu$)['indexOf']('data:image') ? mpbo$['_type'] = zn36u_e = 'image' : mpbo$['_type'] = zn36u_e = zn36u_e || mpbo$['getTypeFromUrl'](_a6obu$), mpbo$['_cache'] = o$7mpbg, mpbo$['_data'] = null;var gbmyp$ = 'ascii';-0x1 != _a6obu$['indexOf']('.fnt') ? gbmyp$ = 'utf8' : 'arraybuffer' == zn36u_e && (gbmyp$ = '');var ypg5w = y7mgpb9['getFileExtension'](_a6obu$);if (-0x1 != m_obua['_fileTypeArr']['indexOf'](ypg5w)) khfjtr1['EnvConfig']['load']['call'](this, _a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5);else {
        if (o$uea_['getFileInfo'](_a6obu$)) khfjtr1['EnvConfig']['load']['call'](this, _a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5);else {
          if (-0x1 != _a6obu$['indexOf']('layaNativeDir/')) {
            if (khfjtr1['isZiYu']) {
              var x028vqd = o$uea_['ziyuFileData'][_a6obu$];return void mpbo$['onLoaded'](x028vqd);
            }return cosnole['log']('read read'), void o$uea_['read'](_a6obu$, gbmyp$, new q80xlv2(m_obua, m_obua['onReadNativeCallBack'], [gbmyp$, _a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5, mpbo$]));
          }x028vqd = '' == _uoeaz6['rootPath'] ? _a6obu$ : _a6obu$['split'](_uoeaz6['rootPath'])[0x0], -0x1 != _a6obu$['indexOf']('http://') || -0x1 != _a6obu$['indexOf']('https://') ? khfjtr1['EnvConfig']['load']['call'](mpbo$, _a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5) : o$uea_['readFile'](x028vqd, gbmyp$, new q80xlv2(m_obua, m_obua['onReadNativeCallBack'], [gbmyp$, _a6obu$, zn36u_e, o$7mpbg, $ugamb, pc7wy5, mpbo$]), _a6obu$);
        }
      }
    }, x2qlv['resMgrLoad'] = function (qdx08, o6_a$e, _enzu6, yw57p9, g7w9ymp, e6ozua, m9pgby7) {
      void 0x0 === _enzu6 && (_enzu6 = 0x0), void 0x0 === yw57p9 && (yw57p9 = !0x1), void 0x0 === g7w9ymp && (g7w9ymp = !0x1), void 0x0 === e6ozua && (e6ozua = 0x0), void 0x0 === m9pgby7 && (m9pgby7 = 0x3), -0x1 != qdx08['indexOf']('mpack') && console['log']('=============resMgrLoad url:', qdx08), khfjtr1['EnvConfig']['resMgrLoad'](qdx08, (fjn31, m$y7pbg, zn_6e) => {
        m_obua['prototype']['resMgrLoadCallBack'](fjn31, m$y7pbg, zn_6e, o6_a$e);
      }, _enzu6, yw57p9, g7w9ymp, e6ozua, m9pgby7);
    }, x2qlv['resMgrLoadCallBack'] = function (bpm7og$, aob6_$, z3tefn, aobmu$_) {
      console['log']('buff:::', bpm7og$, z3tefn, o$uea_['fileNativeDir'] + '///' + o$uea_['fileListName']), aobmu$_(bpm7og$, aob6_$, z3tefn);
    }, x2qlv['clearRes'] = function (xq802v, q048x2l) {
      this['clearRes'](xq802v, q048x2l = void 0x0 === q048x2l ? !0x1 : q048x2l), q048x2l = o$uea_['getFileInfo'](xq802v), !q048x2l || -0x1 == xq802v['indexOf']('http://') && -0x1 == xq802v['indexOf']('https://') || (q048x2l = q048x2l['md5'], q048x2l = o$uea_['getFileNativePath'](q048x2l), o$uea_['remove'](q048x2l));
    }, m_obua['onReadNativeCallBack'] = function (yg9pb7, oabmgu, bgm7yp9, t1khjrf, ne3zft, y7c945w, xqv8l2, lxcq4, hf1nk) {
      void 0x0 === t1khjrf && (t1khjrf = !0x0), void 0x0 === y7c945w && (y7c945w = !0x1), (lxcq4 = void 0x0 === lxcq4 ? 0x0 : lxcq4) ? 0x1 == lxcq4 && khfjtr1['EnvConfig']['load']['call'](xqv8l2, oabmgu, bgm7yp9, t1khjrf, ne3zft, y7c945w) : (hf1nk = 'json' == bgm7yp9 || 'atlas' == bgm7yp9 ? khfjtr1['getJson'](hf1nk['data']) : 'xml' == bgm7yp9 ? y7mgpb9['parseXMLFromString'](hf1nk['data']) : hf1nk['data'], xqv8l2['onLoaded'](hf1nk), !khfjtr1['isZiYu'] && khfjtr1['isPosMsgYu'] && 'arraybuffer' != bgm7yp9 && wx['postMessage']({ 'url': oabmgu, 'data': hf1nk, 'isLoad': !0x0 }));
    }, zj31n(m_obua, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), m_obua;
  }(),
      o$uea_ = (a_3uez6($moagbu, 'laya.wx.mini.MiniFileMgr', l2wc495), $moagbu['isLoadFile'] = function (thj1fr) {
    return -0x1 != $moagbu['_fileTypeArr']['indexOf'](thj1fr);
  }, $moagbu['getFileInfo'] = function (lxvq20) {
    return lxvq20 = lxvq20['split']('?')[0x0], lxvq20 = $moagbu['filesListObj'][lxvq20], null == lxvq20 ? null : lxvq20;
  }, $moagbu['onFileUpdate'] = function (xqv8l20, uoea_$6) {
    var pym9w7g = xqv8l20['split']('/');xqv8l20 = pym9w7g[pym9w7g['length'] - 0x1], pym9w7g = $moagbu['getFileInfo'](uoea_$6), null == pym9w7g ? $moagbu['onSaveFile'](uoea_$6, xqv8l20) : pym9w7g['readyUrl'] != uoea_$6 && $moagbu['remove'](xqv8l20, uoea_$6);
  }, $moagbu['exits'] = function (cql4x28, m7pb$g) {
    cql4x28 = $moagbu['getFileNativePath'](cql4x28), $moagbu['fs']['getFileInfo']({ 'filePath': cql4x28, 'success': function (g7y9p) {
        null != m7pb$g && m7pb$g['runWith']([0x0, g7y9p]);
      }, 'fail': function (c2qxl) {
        null != m7pb$g && m7pb$g['runWith']([0x1, c2qxl]);
      } });
  }, $moagbu['read'] = function (tnh1fjk, ftzen, a$m_uo, y794wc) {
    void 0x0 === ftzen && (ftzen = 'ascill'), tnh1fjk = '' != (y794wc = void 0x0 === y794wc ? '' : y794wc) ? $moagbu['getFileNativePath'](tnh1fjk) : tnh1fjk, $moagbu['fs']['readFile']({ 'filePath': tnh1fjk, 'encoding': ftzen, 'success': function (tkfjh1n) {
        null != a$m_uo && a$m_uo['runWith']([0x0, tkfjh1n]);
      }, 'fail': function (znte3_6) {
        znte3_6 && '' != y794wc ? $moagbu['down'](y794wc, ftzen, a$m_uo, y794wc) : null != a$m_uo && a$m_uo['runWith']([0x1]);
      } });
  }, $moagbu['readNativeFile'] = function (zu6_e, z3jfnt1) {
    $moagbu['fs']['readFile']({ 'filePath': zu6_e, 'encoding': '', 'success': function (cw452l8) {
        null != z3jfnt1 && z3jfnt1['runWith']([0x0]);
      }, 'fail': function (cq4x2l) {
        null != z3jfnt1 && z3jfnt1['runWith']([0x1]);
      } });
  }, $moagbu['down'] = function (fet31z, e6zu_ao, mabp$, oubagm$) {
    void 0x0 === e6zu_ao && (e6zu_ao = 'ascill'), void 0x0 === oubagm$ && (oubagm$ = '');var q0v8d2 = $moagbu['getFileNativePath'](oubagm$);$moagbu['wxdown']({ 'url': fet31z, 'filePath': q0v8d2, 'success': function (c9l24w) {
        0xc8 === c9l24w['statusCode'] && $moagbu['readFile'](c9l24w['filePath'], e6zu_ao, mabp$, oubagm$);
      }, 'fail': function (zf13e) {
        null != mabp$ && mabp$['runWith']([0x1, zf13e]);
      } })['onProgressUpdate'](function (ou_ba$) {
      null != mabp$ && mabp$['runWith']([0x2, ou_ba$['progress']]);
    });
  }, $moagbu['readFile'] = function (yg9bm, t3zne, _$eao6u, bm9y) {
    void 0x0 === bm9y && (bm9y = ''), $moagbu['fs']['readFile']({ 'filePath': yg9bm, 'encoding': t3zne = void 0x0 === t3zne ? 'ascill' : t3zne, 'success': function (v8x2lq) {
        -0x1 == yg9bm['indexOf']('http://') && -0x1 == yg9bm['indexOf']('https://') || $moagbu['onFileUpdate'](yg9bm, bm9y), null != _$eao6u && _$eao6u['runWith']([0x0, v8x2lq]);
      }, 'fail': function (q2c84lx) {
        q2c84lx && null != _$eao6u && _$eao6u['runWith']([0x1, q2c84lx]);
      } });
  }, $moagbu['downImg'] = function (w5479y, mb9gpy7, l82c5x4) {
    void 0x0 === l82c5x4 && (l82c5x4 = ''), $moagbu['wxdown']({ 'url': w5479y, 'success': function (kf1rhj) {
        0xc8 === kf1rhj['statusCode'] && $moagbu['copyFile'](kf1rhj['tempFilePath'], l82c5x4, mb9gpy7);
      }, 'fail': function (uba$6_o) {
        null != mb9gpy7 && mb9gpy7['runWith']([0x1, uba$6_o]);
      } });
  }, $moagbu['copyFile'] = function (pbgy$, cl4wy59, nf1jht) {
    var _abo6 = pbgy$['split']('/'),
        jnkf3t1 = _abo6[_abo6['length'] - 0x1];cl4wy59['split']('?')[0x0];var yw957c = $moagbu['getFileInfo'](cl4wy59);_abo6 = $moagbu['getFileNativePath'](jnkf3t1), $moagbu['fs']['copyFile']({ 'srcPath': pbgy$, 'destPath': _abo6, 'success': function (k1rjfi) {
        yw957c ? yw957c['readyUrl'] != cl4wy59 && $moagbu['remove'](jnkf3t1, cl4wy59, nf1jht) : ($moagbu['onSaveFile'](cl4wy59, jnkf3t1), null != nf1jht && nf1jht['runWith']([0x0]));
      }, 'fail': function (ntkf31j) {
        null != nf1jht && nf1jht['runWith']([0x1, ntkf31j]);
      } });
  }, $moagbu['getFileNativePath'] = function (ouae$6) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ouae$6;
  }, $moagbu['remove'] = function (e3tz6_n, z_36un, ypg7b$m) {
    void 0x0 === z_36un && (z_36un = '');var xl8254c = $moagbu['getFileInfo'](z_36un),
        n3ft1j = $moagbu['getFileNativePath'](xl8254c['md5']);q20vxl8['loader']['clearRes'](xl8254c['readyUrl']), $moagbu['fs']['unlink']({ 'filePath': n3ft1j, 'success': function (l2459) {
        '' != z_36un && $moagbu['onSaveFile'](z_36un, e3tz6_n), null != ypg7b$m && ypg7b$m['runWith']([0x0]);
      }, 'fail': function (gy7pw) {} });
  }, $moagbu['onSaveFile'] = function (c95y, nuz6e3_) {
    var mwg7py9 = c95y['split']('?')[0x0];$moagbu['filesListObj'][mwg7py9] = { 'md5': nuz6e3_, 'readyUrl': c95y }, $moagbu['fs']['writeFile']({ 'filePath': $moagbu['fileNativeDir'] + '/' + $moagbu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($moagbu['filesListObj']), 'success': function (gub) {
        console['log']('写入测试测试成功：', gub);
      }, 'fail': function ($obam) {
        console['log']('写入测试测试失败：', $obam);
      } });
  }, $moagbu['existDir'] = function (by9g7mp, wl4c825) {
    $moagbu['fs']['mkdir']({ 'dirPath': by9g7mp, 'success': function (pg59wy) {
        null != wl4c825 && wl4c825['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (e6uz3a) {
        -0x1 != e6uz3a['errMsg']['indexOf']('file already exists') ? $moagbu['readSync']($moagbu['fileListName'], 'utf8', wl4c825) : null != wl4c825 && wl4c825['runWith']([0x1, e6uz3a]);
      } });
  }, $moagbu['readSync'] = function (fnjtk1h, e_3z6au, uoba_m, bgamu) {
    void 0x0 === e_3z6au && (e_3z6au = 'ascill'), void 0x0 === bgamu && (bgamu = ''), fnjtk1h = $moagbu['getFileNativePath'](fnjtk1h);var y9wg7m;try {
      y9wg7m = $moagbu['fs']['readFileSync'](fnjtk1h), null != uoba_m && uoba_m['runWith']([0x0, { 'data': y9wg7m }]);
    } catch (muobg$) {
      null != uoba_m && uoba_m['runWith']([0x1]);
    }
  }, $moagbu['readCache'] = function () {}, $moagbu['writeCache'] = function (vq28lx0) {
    var ypw75 = readyUrl['split']('?')[0x0];$moagbu['filesListObj'][ypw75] = { 'md5': md5Name, 'readyUrl': readyUrl }, $moagbu['fs']['writeFile']({ 'filePath': $moagbu['fileNativeDir'] + '/' + $moagbu['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify']($moagbu['filesListObj']), 'success': function (nz63ue) {}, 'fail': function (_e3uza) {} });
  }, $moagbu['setNativeFileDir'] = function (u36az) {
    $moagbu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + u36az;
  }, $moagbu['filesListObj'] = {}, $moagbu['fileNativeDir'] = null, $moagbu['fileListName'] = 'layaairfiles.txt', $moagbu['ziyuFileData'] = {}, zj31n($moagbu, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), $moagbu);function $moagbu() {
    $moagbu['__super']['call'](this);
  }var gw59py7 = function () {
    function fj1knt3() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, fj1knt3['__super']['call'](this), this['_sound'] = fj1knt3['_createSound']();
    }a_3uez6(fj1knt3, 'laya.wx.mini.MiniSound', l2wc495);var p9wc5 = fj1knt3['prototype'];return p9wc5['load'] = function (_aeu$o) {
      var yw75c94 = this,
          c5wy9p;function p7bym9() {
        if (null != fj1knt3['_null']) yw75c94['_sound']['onCanplay'](fj1knt3['_null']), yw75c94['_sound']['onError'](fj1knt3['_null']);else try {
          yw75c94['_sound']['onCanplay'](null), yw75c94['_sound']['onError'](null), fj1knt3['_null'] = null;
        } catch (nz13te6) {
          console['warn']('[wxmini] _clearSound:' + nz13te6), yw75c94['_sound']['onCanplay'](ef1t3n), yw75c94['_sound']['onError'](ef1t3n), fj1knt3['_null'] = ef1t3n;
        }
      }function ef1t3n() {}_aeu$o = _uoeaz6['formatURL'](_aeu$o), this['url'] = _aeu$o, fj1knt3['_audioCache'][_aeu$o] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        p7bym9(), c5wy9p['loaded'] = !0x0, c5wy9p['event']('complete'), fj1knt3['_audioCache'][c5wy9p['url']] = c5wy9p;
      }), this['_sound']['onError'](function (m$po7) {
        console['error']('errCode=' + m$po7['errCode'] + '  errMsg=' + m$po7['errMsg']), p7bym9(), c5wy9p['event']('error');
      }), this['_sound']['src'] = _aeu$o, c5wy9p = this);
    }, p9wc5['play'] = function (lcwy45, lx4cq2) {
      void 0x0 === lcwy45 && (lcwy45 = 0x0), void 0x0 === lx4cq2 && (lx4cq2 = 0x0), (th1fnkj = this['url'] == $oe6_a['_tMusic'] ? (fj1knt3['_musicAudio'] || (fj1knt3['_musicAudio'] = fj1knt3['_createSound']()), fj1knt3['_musicAudio']) : fj1knt3['_createSound']())['src'] = this['url'];var th1fnkj = new x0q24l8(th1fnkj);return th1fnkj['url'] = this['url'], th1fnkj['loops'] = lx4cq2, th1fnkj['startTime'] = lcwy45, th1fnkj['play'](), $oe6_a['addChannel'](th1fnkj), th1fnkj;
    }, p9wc5['dispose'] = function () {
      var l82x4qc = fj1knt3['_audioCache'][this['url']];l82x4qc && (l82x4qc['src'] = '', delete fj1knt3['_audioCache'][this['url']]);
    }, b_a$u6o(0x0, p9wc5, 'duration', function () {
      return this['_sound']['duration'];
    }), fj1knt3['_createSound'] = function () {
      return fj1knt3['_id']++, khfjtr1['window']['wx']['createInnerAudioContext']();
    }, fj1knt3['_musicAudio'] = null, fj1knt3['_id'] = 0x0, fj1knt3['_audioCache'] = {}, fj1knt3['_null'] = void 0x0, fj1knt3;
  }(),
      x0q24l8 = function () {
    function _unz6e3(_3eu6n) {
      this['_audio'] = null, this['_onEnd'] = null, _unz6e3['__super']['call'](this), this['_audio'] = _3eu6n, this['_onEnd'] = y7mgpb9['bind'](this['__onEnd'], this), _3eu6n['onEnded'](this['_onEnd']);
    }a_3uez6(_unz6e3, 'laya.wx.mini.MiniSoundChannel', jk3ftn);var gopb7m = _unz6e3['prototype'];return gopb7m['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (q20vxl8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gopb7m['__onNull'] = function () {}, gopb7m['play'] = function () {
      this['isStopped'] = !0x1, $oe6_a['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, gopb7m['stop'] = function () {
      if (this['isStopped'] = !0x0, $oe6_a['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != _unz6e3['_null']) this['_audio']['onEnded'](_unz6e3['_null']);else try {
          this['_audio']['onEnded'](null), _unz6e3['_null'] = null;
        } catch (r1htjk) {
          console['warn']('[wxmini] stop:' + r1htjk), this['_audio']['onEnded'](y7mgpb9['bind'](this['__onNull'], this)), _unz6e3['_null'] = y7mgpb9['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, gopb7m['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, gopb7m['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, $oe6_a['addChannel'](this), this['_audio']['play']());
    }, b_a$u6o(0x0, gopb7m, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), b_a$u6o(0x0, gopb7m, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), b_a$u6o(0x0, gopb7m, 'volume', function () {
      return 0x1;
    }, function (_eu36z) {}), _unz6e3['_null'] = void 0x0, _unz6e3;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (_ezaou, x2v80) {
  'use strict';

  for (var gp7$bm in Object['defineProperty'](x2v80, '__esModule', { 'value': !0x0 }), Laya) {
    var ao$6ub_ = Laya[gp7$bm];ao$6ub_ && ao$6ub_['__isclass'] && (x2v80[gp7$bm] = ao$6ub_);
  }
});