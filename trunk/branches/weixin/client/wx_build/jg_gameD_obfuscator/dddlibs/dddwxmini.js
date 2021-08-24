var a_ = wx.$d;
!function (uojinf, yvacr05) {
  yvacr05['un'], yvacr05['uns'];var y5ra4v0 = yvacr05['static'],
      law4r5q = yvacr05['class'],
      r45va0 = yvacr05['getset'];yvacr05['__newvec'];var vycr5a0 = laya['utils']['Browser'],
      rk4law = (laya['events']['Event'], laya['events']['EventDispatcher']),
      w4rlqak = laya['resource']['HTMLImage'],
      ifnoj = laya['utils']['Handler'],
      nhtiufj = laya['display']['Input'],
      rw45qav = laya['net']['Loader'];laya['maths']['Matrix'];var f1z7t8 = laya['renders']['Render'],
      bsecx = laya['utils']['RunDriver'];laya['media']['Sound'];var w5a4rvq = laya['media']['SoundChannel'],
      z7td8$1 = laya['media']['SoundManager'],
      ujtfihn = (laya['display']['Stage'], laya['net']['URL']),
      ojnuif = laya['utils']['Utils'],
      thuj7fn = (law4r5q(gmp_63, 'laya.wx.mini.MiniAdpter'), gmp_63['getJson'] = function (rqv45w) {
    return JSON['parse'](rqv45w);
  }, gmp_63['init'] = function (lwraq, bc90sey) {
    void 0x0 === lwraq && (lwraq = !0x1), void 0x0 === bc90sey && (bc90sey = !0x1), gmp_63['_inited'] || (gmp_63['window'] = uojinf)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (gmp_63['_inited'] = !0x0, gmp_63['isZiYu'] = bc90sey, gmp_63['isPosMsgYu'] = lwraq, gmp_63['EnvConfig'] = {}, gmp_63['isZiYu'] || (bs9yv['setNativeFileDir']('/layaairGame'), bs9yv['existDir'](bs9yv['fileNativeDir'], ifnoj['create'](gmp_63, gmp_63['onMkdirCallBack']))), gmp_63['window']['focus'] = function () {}, yvacr05['getUrlPath'] = function () {}, gmp_63['window']['logtime'] = function (zf17ntd) {}, gmp_63['window']['alertTimeLog'] = function (pglk263) {}, gmp_63['window']['resetShareInfo'] = function () {}, gmp_63['window']['CanvasRenderingContext2D'] = function () {}, gmp_63['window']['CanvasRenderingContext2D']['prototype'] = gmp_63['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gmp_63['window']['document']['body']['appendChild'] = function () {}, gmp_63['EnvConfig']['pixelRatioInt'] = 0x0, bsecx['getPixelRatio'] = gmp_63['pixelRatio'], gmp_63['_preCreateElement'] = vycr5a0['createElement'], vycr5a0['createElement'] = gmp_63['createElement'], bsecx['createShaderCondition'] = gmp_63['createShaderCondition'], ojnuif['parseXMLFromString'] = gmp_63['parseXMLFromString'], nhtiufj['_createInputElement'] = pw43klq['_createInputElement'], gmp_63['EnvConfig']['load'] = rw45qav['prototype']['load'], rw45qav['prototype']['load'] = qw4kpl3['prototype']['load'], gmp_63['isZiYu'] && lwraq && wx['onMessage'](function (cv0a5ry) {
      cv0a5ry['isLoad'] && (bs9yv['ziyuFileData'][cv0a5ry['url']] = cv0a5ry['data']);
    }));
  }, gmp_63['onMkdirCallBack'] = function (_6p2g3m, _zd71$) {
    _6p2g3m || (bs9yv['filesListObj'] = JSON['parse'](_zd71$['data']));
  }, gmp_63['pixelRatio'] = function () {
    if (!gmp_63['EnvConfig']['pixelRatioInt']) try {
      var juft7nh = wx['getSystemInfoSync']();return gmp_63['EnvConfig']['pixelRatioInt'] = juft7nh['pixelRatio'], juft7nh['pixelRatio'];
    } catch (lp4w) {}return gmp_63['EnvConfig']['pixelRatioInt'];
  }, gmp_63['createElement'] = function ($_g82zm) {
    var z17dnf;if ('canvas' == $_g82zm) return 0x1 == gmp_63['idx'] ? gmp_63['isZiYu'] ? (z17dnf = sharedCanvas)['style'] = {} : z17dnf = uojinf['canvas'] : z17dnf = uojinf['wx']['createCanvas'](), gmp_63['idx']++, z17dnf;if ('textarea' == $_g82zm || 'input' == $_g82zm) return gmp_63['onCreateInput']($_g82zm);if ('div' != $_g82zm) return gmp_63['_preCreateElement']($_g82zm);return $_g82zm = gmp_63['_preCreateElement']($_g82zm), ($_g82zm['contains'] = function (r4wqav5) {
      return null;
    }, $_g82zm['removeChild'] = function (f18t7) {}, $_g82zm);
  }, gmp_63['onCreateInput'] = function (eb0sxc9) {
    return eb0sxc9 = gmp_63['_preCreateElement'](eb0sxc9), (eb0sxc9['focus'] = pw43klq['wxinputFocus'], eb0sxc9['blur'] = pw43klq['wxinputblur'], eb0sxc9['style'] = {}, eb0sxc9['value'] = 0x0, eb0sxc9['parentElement'] = {}, eb0sxc9['placeholder'] = {}, eb0sxc9['type'] = {}, eb0sxc9['setColor'] = function (bc5y09) {}, eb0sxc9['setType'] = function (_m$gz82) {}, eb0sxc9['setFontFace'] = function (jftihnu) {}, eb0sxc9['addEventListener'] = function (mpg632_) {}, eb0sxc9['contains'] = function (n7zdf1t) {
      return null;
    }, eb0sxc9['removeChild'] = function (v9byc05) {}, eb0sxc9);
  }, gmp_63['createShaderCondition'] = function (w4rqa5l) {
    var n1jf7d = this;return function () {
      return n1jf7d[w4rqa5l['replace']('this.', '')];
    };
  }, gmp_63['EnvConfig'] = null, gmp_63['window'] = null, gmp_63['_preCreateElement'] = null, gmp_63['_inited'] = !0x1, gmp_63['wxRequest'] = null, gmp_63['systemInfo'] = null, gmp_63['version'] = '0.0.1', gmp_63['isZiYu'] = !0x1, gmp_63['isPosMsgYu'] = !0x1, gmp_63['parseXMLFromString'] = function (ntdj1) {
    var _z812;ntdj1 = ntdj1['replace'](/>\s+</g, '><');try {
      _z812 = new uojinf['Parser']['DOMParser']()['parseFromString'](ntdj1, 'text/xml');
    } catch (hfjn7ut) {
      throw '需要引入xml解析库文件';
    }return _z812;
  }, gmp_63['idx'] = 0x1, gmp_63);function gmp_63() {}law4r5q(yra0cv, 'laya.wx.mini.MiniImage'), yra0cv['prototype']['_loadImage'] = function (vr405) {
    var y50bv9c = !0x1;-0x1 == vr405['indexOf']('layaNativeDir/') && (y50bv9c = !0x0, vr405 = ujtfihn['formatURL'](vr405)), bs9yv['getFileInfo'](vr405) ? yra0cv['onCreateImage'](vr405, this, !y50bv9c) : -0x1 != vr405['indexOf']('http://') || -0x1 != vr405['indexOf']('https://') ? bs9yv['downImg'](vr405, new ifnoj(yra0cv, yra0cv['onDownImgCallBack'], [vr405, this]), vr405) : yra0cv['onCreateImage'](vr405, this, !0x0);
  }, yra0cv['onDownImgCallBack'] = function (ujhtn, u7fdtn, yr50a4) {
    yr50a4 ? u7fdtn['onError'](null) : yra0cv['onCreateImage'](ujhtn, u7fdtn);
  }, yra0cv['onCreateImage'] = function (ftnd71j, g28m$_6, d1ztf) {
    var pw6g3kl, dt7zn;function q54aw() {
      dt7zn['onload'] = null, dt7zn['onerror'] = null, delete g28m$_6['imgCache'][ftnd71j];
    }pw6g3kl = (d1ztf = void 0x0 === d1ztf ? !0x1 : d1ztf) ? ftnd71j : (vy0ar54 = bs9yv['getFileInfo'](ftnd71j)['md5'], bs9yv['getFileNativePath'](vy0ar54)), null == g28m$_6['imgCache'] && (g28m$_6['imgCache'] = {}), d1ztf = function () {
      q54aw(), g28m$_6['onLoaded'](dt7zn);
    };var vy0ar54 = function () {
      q54aw(), g28m$_6['event']('error', 'Load image failed');
    };'nativeimage' == g28m$_6['_type'] ? ((dt7zn = new vycr5a0['window']['Image']())['crossOrigin'] = '', dt7zn['onload'] = d1ztf, dt7zn['onerror'] = vy0ar54, dt7zn['src'] = pw6g3kl, g28m$_6['imgCache'][ftnd71j] = dt7zn) : new w4rlqak['create'](pw6g3kl, { 'onload': d1ztf, 'onerror': vy0ar54, 'onCreate': function (cy950) {
        dt7zn = cy950, g28m$_6['imgCache'][ftnd71j] = cy950;
      } });
  };function yra0cv() {}var pw43klq = (law4r5q(bxs90ce, 'laya.wx.mini.MiniInput'), bxs90ce['_createInputElement'] = function () {
    nhtiufj['_initInput'](nhtiufj['area'] = vycr5a0['createElement']('textarea')), nhtiufj['_initInput'](nhtiufj['input'] = vycr5a0['createElement']('input')), nhtiufj['inputContainer'] = vycr5a0['createElement']('div'), nhtiufj['inputContainer']['style']['position'] = 'absolute', nhtiufj['inputContainer']['style']['zIndex'] = 0x186a0, vycr5a0['container']['appendChild'](nhtiufj['inputContainer']), nhtiufj['inputContainer']['setPos'] = function (ihjuo, wk4r) {
      nhtiufj['inputContainer']['style']['left'] = ihjuo + 'px', nhtiufj['inputContainer']['style']['top'] = wk4r + 'px';
    }, yvacr05['stage']['on']('resize', null, bxs90ce['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zm$281_) {
      uojinf['dispatchEvent'] && uojinf['dispatchEvent']('resize');
    }), z7td8$1['_soundClass'] = bv95y, z7td8$1['_musicClass'] = bv95y;
  }, bxs90ce['_onStageResize'] = function () {
    yvacr05['stage']['_canvasTransform']['identity']()['scale'](vycr5a0['width'] / f1z7t8['canvas']['width'] / bsecx['getPixelRatio'](), vycr5a0['height'] / f1z7t8['canvas']['height'] / bsecx['getPixelRatio']());
  }, bxs90ce['wxinputFocus'] = function (cby9vs0) {
    var z2_gm$8 = nhtiufj['inputElement']['target'];z2_gm$8 && !z2_gm$8['editable'] || (thuj7fn['window']['wx']['offKeyboardConfirm'](), thuj7fn['window']['wx']['offKeyboardInput'](), thuj7fn['window']['wx']['showKeyboard']({ 'defaultValue': z2_gm$8['text'], 'maxLength': z2_gm$8['maxChars'], 'multiple': z2_gm$8['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ztfd781) {}, 'fail': function (ryq45v) {} }), thuj7fn['window']['wx']['onKeyboardConfirm'](function (dz187ft) {
      dz187ft = dz187ft ? dz187ft['value'] : '', (z2_gm$8['text'] = dz187ft, z2_gm$8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), thuj7fn['window']['wx']['onKeyboardInput'](function (tujfi) {
      tujfi = tujfi ? tujfi['value'] : '', z2_gm$8['multiline'] || -0x1 == tujfi['indexOf']('\x0a') ? (z2_gm$8['text'] = tujfi, z2_gm$8['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, bxs90ce['inputEnter'] = function () {
    nhtiufj['inputElement']['target']['focus'] = !0x1;
  }, bxs90ce['wxinputblur'] = function () {
    bxs90ce['hideKeyboard']();
  }, bxs90ce['hideKeyboard'] = function () {
    thuj7fn['window']['wx']['offKeyboardConfirm'](), thuj7fn['window']['wx']['offKeyboardInput'](), thuj7fn['window']['wx']['hideKeyboard']({ 'success': function (e0sb9yc) {
        console['log']('隐藏键盘');
      }, 'fail': function (v90ac) {
        console['log']('隐藏键盘出错:' + (v90ac ? v90ac['errMsg'] : ''));
      } });
  }, bxs90ce);function bxs90ce() {}var qw4kpl3 = function () {
    function uhijfnt() {}law4r5q(uhijfnt, 'laya.wx.mini.MiniLoader');var m1dz$_ = uhijfnt['prototype'];return m1dz$_['load'] = function (b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7) {
      void 0x0 === _z2m$18 && (_z2m$18 = !0x0), void 0x0 === dtn1z7 && (dtn1z7 = !0x1);var zf7tdn1 = this;0x0 === (zf7tdn1['_url'] = b09cexs)['indexOf']('data:image') ? zf7tdn1['_type'] = nufdtj = 'image' : zf7tdn1['_type'] = nufdtj = nufdtj || zf7tdn1['getTypeFromUrl'](b09cexs), zf7tdn1['_cache'] = _z2m$18, zf7tdn1['_data'] = null;var rpwqkl = 'ascii';-0x1 != b09cexs['indexOf']('.fnt') ? rpwqkl = 'utf8' : 'arraybuffer' == nufdtj && (rpwqkl = '');var p26m_3 = ojnuif['getFileExtension'](b09cexs);if (-0x1 != uhijfnt['_fileTypeArr']['indexOf'](p26m_3)) thuj7fn['EnvConfig']['load']['call'](this, b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7);else {
        if (bs9yv['getFileInfo'](b09cexs)) thuj7fn['EnvConfig']['load']['call'](this, b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7);else {
          if (-0x1 != b09cexs['indexOf']('layaNativeDir/')) {
            if (thuj7fn['isZiYu']) {
              var ryca0v5 = bs9yv['ziyuFileData'][b09cexs];return void zf7tdn1['onLoaded'](ryca0v5);
            }return cosnole['log']('read read'), void bs9yv['read'](b09cexs, rpwqkl, new ifnoj(uhijfnt, uhijfnt['onReadNativeCallBack'], [rpwqkl, b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7, zf7tdn1]));
          }ryca0v5 = '' == ujtfihn['rootPath'] ? b09cexs : b09cexs['split'](ujtfihn['rootPath'])[0x0], -0x1 != b09cexs['indexOf']('http://') || -0x1 != b09cexs['indexOf']('https://') ? thuj7fn['EnvConfig']['load']['call'](zf7tdn1, b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7) : bs9yv['readFile'](ryca0v5, rpwqkl, new ifnoj(uhijfnt, uhijfnt['onReadNativeCallBack'], [rpwqkl, b09cexs, nufdtj, _z2m$18, lpw4qk, dtn1z7, zf7tdn1]), b09cexs);
        }
      }
    }, m1dz$_['resMgrLoad'] = function (dz817_$, mgk36p2, g$m_z, dtjnu7f, z81$dm_, vcb9y, l4qpk3) {
      void 0x0 === g$m_z && (g$m_z = 0x0), void 0x0 === dtjnu7f && (dtjnu7f = !0x1), void 0x0 === z81$dm_ && (z81$dm_ = !0x1), void 0x0 === vcb9y && (vcb9y = 0x0), void 0x0 === l4qpk3 && (l4qpk3 = 0x3), -0x1 != dz817_$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', dz817_$), thuj7fn['EnvConfig']['resMgrLoad'](dz817_$, (q4wav5r, ohijnu, d7_$) => {
        uhijfnt['prototype']['resMgrLoadCallBack'](q4wav5r, ohijnu, d7_$, mgk36p2);
      }, g$m_z, dtjnu7f, z81$dm_, vcb9y, l4qpk3);
    }, m1dz$_['resMgrLoadCallBack'] = function (a0y9v, $_z78, j7tdnfu, lkrpw4q) {
      console['log']('buff:::', a0y9v, j7tdnfu, bs9yv['fileNativeDir'] + '///' + bs9yv['fileListName']), lkrpw4q(a0y9v, $_z78, j7tdnfu);
    }, m1dz$_['clearRes'] = function (q5wvar4, g26mp_3) {
      this['clearRes'](q5wvar4, g26mp_3 = void 0x0 === g26mp_3 ? !0x1 : g26mp_3), g26mp_3 = bs9yv['getFileInfo'](q5wvar4), !g26mp_3 || -0x1 == q5wvar4['indexOf']('http://') && -0x1 == q5wvar4['indexOf']('https://') || (g26mp_3 = g26mp_3['md5'], g26mp_3 = bs9yv['getFileNativePath'](g26mp_3), bs9yv['remove'](g26mp_3));
    }, uhijfnt['onReadNativeCallBack'] = function (fjiutnh, r5yq4, wkl63pg, kp4wlq3, tz17fd, m6g2_$8, zt1df87, kp43qw, nzf1t7d) {
      void 0x0 === kp4wlq3 && (kp4wlq3 = !0x0), void 0x0 === m6g2_$8 && (m6g2_$8 = !0x1), (kp43qw = void 0x0 === kp43qw ? 0x0 : kp43qw) ? 0x1 == kp43qw && thuj7fn['EnvConfig']['load']['call'](zt1df87, r5yq4, wkl63pg, kp4wlq3, tz17fd, m6g2_$8) : (nzf1t7d = 'json' == wkl63pg || 'atlas' == wkl63pg ? thuj7fn['getJson'](nzf1t7d['data']) : 'xml' == wkl63pg ? ojnuif['parseXMLFromString'](nzf1t7d['data']) : nzf1t7d['data'], zt1df87['onLoaded'](nzf1t7d), !thuj7fn['isZiYu'] && thuj7fn['isPosMsgYu'] && 'arraybuffer' != wkl63pg && wx['postMessage']({ 'url': r5yq4, 'data': nzf1t7d, 'isLoad': !0x0 }));
    }, y5ra4v0(uhijfnt, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), uhijfnt;
  }(),
      bs9yv = (law4r5q(pmk6g32, 'laya.wx.mini.MiniFileMgr', rk4law), pmk6g32['isLoadFile'] = function (rwplk) {
    return -0x1 != pmk6g32['_fileTypeArr']['indexOf'](rwplk);
  }, pmk6g32['getFileInfo'] = function (r5waq4) {
    return r5waq4 = r5waq4['split']('?')[0x0], r5waq4 = pmk6g32['filesListObj'][r5waq4], null == r5waq4 ? null : r5waq4;
  }, pmk6g32['onFileUpdate'] = function (pkw3q4l, ntfd7j1) {
    var bc95vy0 = pkw3q4l['split']('/');pkw3q4l = bc95vy0[bc95vy0['length'] - 0x1], bc95vy0 = pmk6g32['getFileInfo'](ntfd7j1), null == bc95vy0 ? pmk6g32['onSaveFile'](ntfd7j1, pkw3q4l) : bc95vy0['readyUrl'] != ntfd7j1 && pmk6g32['remove'](pkw3q4l, ntfd7j1);
  }, pmk6g32['exits'] = function (g8_$mz2, z7td1$) {
    g8_$mz2 = pmk6g32['getFileNativePath'](g8_$mz2), pmk6g32['fs']['getFileInfo']({ 'filePath': g8_$mz2, 'success': function (f7tn1jd) {
        null != z7td1$ && z7td1$['runWith']([0x0, f7tn1jd]);
      }, 'fail': function (bs9cy0v) {
        null != z7td1$ && z7td1$['runWith']([0x1, bs9cy0v]);
      } });
  }, pmk6g32['read'] = function (d18$z_, noj, d71z8t$, hufntij) {
    void 0x0 === noj && (noj = 'ascill'), d18$z_ = '' != (hufntij = void 0x0 === hufntij ? '' : hufntij) ? pmk6g32['getFileNativePath'](d18$z_) : d18$z_, pmk6g32['fs']['readFile']({ 'filePath': d18$z_, 'encoding': noj, 'success': function (dzm8$_) {
        null != d71z8t$ && d71z8t$['runWith']([0x0, dzm8$_]);
      }, 'fail': function (x9s0eb) {
        x9s0eb && '' != hufntij ? pmk6g32['down'](hufntij, noj, d71z8t$, hufntij) : null != d71z8t$ && d71z8t$['runWith']([0x1]);
      } });
  }, pmk6g32['readNativeFile'] = function (nf7utjd, l6k23p) {
    pmk6g32['fs']['readFile']({ 'filePath': nf7utjd, 'encoding': '', 'success': function (m82z_1$) {
        null != l6k23p && l6k23p['runWith']([0x0]);
      }, 'fail': function (a9y5cv) {
        null != l6k23p && l6k23p['runWith']([0x1]);
      } });
  }, pmk6g32['down'] = function (sb9c0ex, wv5q4a, hfjtniu, _mz$g8) {
    void 0x0 === wv5q4a && (wv5q4a = 'ascill'), void 0x0 === _mz$g8 && (_mz$g8 = '');var pg6l3 = pmk6g32['getFileNativePath'](_mz$g8);pmk6g32['wxdown']({ 'url': sb9c0ex, 'filePath': pg6l3, 'success': function (juinh) {
        0xc8 === juinh['statusCode'] && pmk6g32['readFile'](juinh['filePath'], wv5q4a, hfjtniu, _mz$g8);
      }, 'fail': function (kqlpw43) {
        null != hfjtniu && hfjtniu['runWith']([0x1, kqlpw43]);
      } })['onProgressUpdate'](function (z1$7_8d) {
      null != hfjtniu && hfjtniu['runWith']([0x2, z1$7_8d['progress']]);
    });
  }, pmk6g32['readFile'] = function (lgwpk36, e0cbs9, fn1t7dj, rlk4qpw) {
    void 0x0 === rlk4qpw && (rlk4qpw = ''), pmk6g32['fs']['readFile']({ 'filePath': lgwpk36, 'encoding': e0cbs9 = void 0x0 === e0cbs9 ? 'ascill' : e0cbs9, 'success': function (ntdf7u) {
        -0x1 == lgwpk36['indexOf']('http://') && -0x1 == lgwpk36['indexOf']('https://') || pmk6g32['onFileUpdate'](lgwpk36, rlk4qpw), null != fn1t7dj && fn1t7dj['runWith']([0x0, ntdf7u]);
      }, 'fail': function (pgwkl6) {
        pgwkl6 && null != fn1t7dj && fn1t7dj['runWith']([0x1, pgwkl6]);
      } });
  }, pmk6g32['downImg'] = function (kqplw6, nf17jdt, kpq36w) {
    void 0x0 === kpq36w && (kpq36w = ''), pmk6g32['wxdown']({ 'url': kqplw6, 'success': function (bcyv0) {
        0xc8 === bcyv0['statusCode'] && pmk6g32['copyFile'](bcyv0['tempFilePath'], kpq36w, nf17jdt);
      }, 'fail': function (mz82_g) {
        null != nf17jdt && nf17jdt['runWith']([0x1, mz82_g]);
      } });
  }, pmk6g32['copyFile'] = function (r4qvy, a9c5vy0, rwka4lq) {
    var tun7fhj = r4qvy['split']('/'),
        c59v0ya = tun7fhj[tun7fhj['length'] - 0x1];a9c5vy0['split']('?')[0x0];var va5yr0 = pmk6g32['getFileInfo'](a9c5vy0);tun7fhj = pmk6g32['getFileNativePath'](c59v0ya), pmk6g32['fs']['copyFile']({ 'srcPath': r4qvy, 'destPath': tun7fhj, 'success': function (pl3kq6w) {
        va5yr0 ? va5yr0['readyUrl'] != a9c5vy0 && pmk6g32['remove'](c59v0ya, a9c5vy0, rwka4lq) : (pmk6g32['onSaveFile'](a9c5vy0, c59v0ya), null != rwka4lq && rwka4lq['runWith']([0x0]));
      }, 'fail': function (k6pg2m3) {
        null != rwka4lq && rwka4lq['runWith']([0x1, k6pg2m3]);
      } });
  }, pmk6g32['getFileNativePath'] = function ($6g_m2) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $6g_m2;
  }, pmk6g32['remove'] = function (jhfu7nt, $mz2, vqy5a4r) {
    void 0x0 === $mz2 && ($mz2 = '');var dzf718t = pmk6g32['getFileInfo']($mz2),
        y5vca9 = pmk6g32['getFileNativePath'](dzf718t['md5']);yvacr05['loader']['clearRes'](dzf718t['readyUrl']), pmk6g32['fs']['unlink']({ 'filePath': y5vca9, 'success': function (uijhntf) {
        '' != $mz2 && pmk6g32['onSaveFile']($mz2, jhfu7nt), null != vqy5a4r && vqy5a4r['runWith']([0x0]);
      }, 'fail': function (ay9v5) {} });
  }, pmk6g32['onSaveFile'] = function (ce90ysb, t1d87) {
    var cxsb90 = ce90ysb['split']('?')[0x0];pmk6g32['filesListObj'][cxsb90] = { 'md5': t1d87, 'readyUrl': ce90ysb }, pmk6g32['fs']['writeFile']({ 'filePath': pmk6g32['fileNativeDir'] + '/' + pmk6g32['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pmk6g32['filesListObj']), 'success': function (b0c9yv5) {
        console['log']('写入测试测试成功：', b0c9yv5);
      }, 'fail': function (zt781fd) {
        console['log']('写入测试测试失败：', zt781fd);
      } });
  }, pmk6g32['existDir'] = function (avy5r0, $g6m_28) {
    pmk6g32['fs']['mkdir']({ 'dirPath': avy5r0, 'success': function (c0b9yv) {
        null != $g6m_28 && $g6m_28['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (v5b9yc) {
        -0x1 != v5b9yc['errMsg']['indexOf']('file already exists') ? pmk6g32['readSync'](pmk6g32['fileListName'], 'utf8', $g6m_28) : null != $g6m_28 && $g6m_28['runWith']([0x1, v5b9yc]);
      } });
  }, pmk6g32['readSync'] = function (_m2g8z, v5qr4wa, junohif, ybc50v9) {
    void 0x0 === v5qr4wa && (v5qr4wa = 'ascill'), void 0x0 === ybc50v9 && (ybc50v9 = ''), _m2g8z = pmk6g32['getFileNativePath'](_m2g8z);var n7udt;try {
      n7udt = pmk6g32['fs']['readFileSync'](_m2g8z), null != junohif && junohif['runWith']([0x0, { 'data': n7udt }]);
    } catch (z8_$gm) {
      null != junohif && junohif['runWith']([0x1]);
    }
  }, pmk6g32['readCache'] = function () {}, pmk6g32['writeCache'] = function (gl236pk) {
    var m1_z8$ = readyUrl['split']('?')[0x0];pmk6g32['filesListObj'][m1_z8$] = { 'md5': md5Name, 'readyUrl': readyUrl }, pmk6g32['fs']['writeFile']({ 'filePath': pmk6g32['fileNativeDir'] + '/' + pmk6g32['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](pmk6g32['filesListObj']), 'success': function (cv5yar0) {}, 'fail': function (bcv90ys) {} });
  }, pmk6g32['setNativeFileDir'] = function (v4yq5ra) {
    pmk6g32['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + v4yq5ra;
  }, pmk6g32['filesListObj'] = {}, pmk6g32['fileNativeDir'] = null, pmk6g32['fileListName'] = 'layaairfiles.txt', pmk6g32['ziyuFileData'] = {}, y5ra4v0(pmk6g32, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), pmk6g32);function pmk6g32() {
    pmk6g32['__super']['call'](this);
  }var bv95y = function () {
    function _862m$g() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, _862m$g['__super']['call'](this), this['_sound'] = _862m$g['_createSound']();
    }law4r5q(_862m$g, 'laya.wx.mini.MiniSound', rk4law);var svb0yc = _862m$g['prototype'];return svb0yc['load'] = function (qpw3lk4) {
      var m$826_ = this,
          vwqar;function m$6_g() {
        if (null != _862m$g['_null']) m$826_['_sound']['onCanplay'](_862m$g['_null']), m$826_['_sound']['onError'](_862m$g['_null']);else try {
          m$826_['_sound']['onCanplay'](null), m$826_['_sound']['onError'](null), _862m$g['_null'] = null;
        } catch (hnjofi) {
          console['warn']('[wxmini] _clearSound:' + hnjofi), m$826_['_sound']['onCanplay'](lkgwp36), m$826_['_sound']['onError'](lkgwp36), _862m$g['_null'] = lkgwp36;
        }
      }function lkgwp36() {}qpw3lk4 = ujtfihn['formatURL'](qpw3lk4), this['url'] = qpw3lk4, _862m$g['_audioCache'][qpw3lk4] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        m$6_g(), vwqar['loaded'] = !0x0, vwqar['event']('complete'), _862m$g['_audioCache'][vwqar['url']] = vwqar;
      }), this['_sound']['onError'](function (zgm_$28) {
        console['error']('errCode=' + zgm_$28['errCode'] + '  errMsg=' + zgm_$28['errMsg']), m$6_g(), vwqar['event']('error');
      }), this['_sound']['src'] = qpw3lk4, vwqar = this);
    }, svb0yc['play'] = function (pqkw36l, pgk32l6) {
      void 0x0 === pqkw36l && (pqkw36l = 0x0), void 0x0 === pgk32l6 && (pgk32l6 = 0x0), (esbcy0 = this['url'] == z7td8$1['_tMusic'] ? (_862m$g['_musicAudio'] || (_862m$g['_musicAudio'] = _862m$g['_createSound']()), _862m$g['_musicAudio']) : _862m$g['_createSound']())['src'] = this['url'];var esbcy0 = new xb9ces0(esbcy0);return esbcy0['url'] = this['url'], esbcy0['loops'] = pgk32l6, esbcy0['startTime'] = pqkw36l, esbcy0['play'](), z7td8$1['addChannel'](esbcy0), esbcy0;
    }, svb0yc['dispose'] = function () {
      var z7_1$ = _862m$g['_audioCache'][this['url']];z7_1$ && (z7_1$['src'] = '', delete _862m$g['_audioCache'][this['url']]);
    }, r45va0(0x0, svb0yc, 'duration', function () {
      return this['_sound']['duration'];
    }), _862m$g['_createSound'] = function () {
      return _862m$g['_id']++, thuj7fn['window']['wx']['createInnerAudioContext']();
    }, _862m$g['_musicAudio'] = null, _862m$g['_id'] = 0x0, _862m$g['_audioCache'] = {}, _862m$g['_null'] = void 0x0, _862m$g;
  }(),
      xb9ces0 = function () {
    function p43wqlk(xs0cb9) {
      this['_audio'] = null, this['_onEnd'] = null, p43wqlk['__super']['call'](this), this['_audio'] = xs0cb9, this['_onEnd'] = ojnuif['bind'](this['__onEnd'], this), xs0cb9['onEnded'](this['_onEnd']);
    }law4r5q(p43wqlk, 'laya.wx.mini.MiniSoundChannel', w5a4rvq);var qya45v = p43wqlk['prototype'];return qya45v['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (yvacr05['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, qya45v['__onNull'] = function () {}, qya45v['play'] = function () {
      this['isStopped'] = !0x1, z7td8$1['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, qya45v['stop'] = function () {
      if (this['isStopped'] = !0x0, z7td8$1['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != p43wqlk['_null']) this['_audio']['onEnded'](p43wqlk['_null']);else try {
          this['_audio']['onEnded'](null), p43wqlk['_null'] = null;
        } catch (lrkpw4) {
          console['warn']('[wxmini] stop:' + lrkpw4), this['_audio']['onEnded'](ojnuif['bind'](this['__onNull'], this)), p43wqlk['_null'] = ojnuif['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, qya45v['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, qya45v['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, z7td8$1['addChannel'](this), this['_audio']['play']());
    }, r45va0(0x0, qya45v, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), r45va0(0x0, qya45v, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), r45va0(0x0, qya45v, 'volume', function () {
      return 0x1;
    }, function (wqalk) {}), p43wqlk['_null'] = void 0x0, p43wqlk;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (g6pm2_, iofjn) {
  'use strict';

  for (var q63pwlk in Object['defineProperty'](iofjn, '__esModule', { 'value': !0x0 }), Laya) {
    var $8_mg26 = Laya[q63pwlk];$8_mg26 && $8_mg26['__isclass'] && (iofjn[q63pwlk] = $8_mg26);
  }
});