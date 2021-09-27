var m = wx.$g;
!function (ve4lc, ky_gtp) {
  ky_gtp['un'], ky_gtp['uns'];var axzjm = ky_gtp['static'],
      ptk1gy = ky_gtp['class'],
      rh9fl = ky_gtp['getset'];ky_gtp['__newvec'];var zmi = laya['utils']['Browser'],
      f6l4hr = (laya['events']['Event'], laya['events']['EventDispatcher']),
      so7$18 = laya['resource']['HTMLImage'],
      xiaj = laya['utils']['Handler'],
      lefc6 = laya['display']['Input'],
      o$six = laya['net']['Loader'];laya['maths']['Matrix'];var ix8jm = laya['renders']['Render'],
      pwytg_ = laya['utils']['RunDriver'];laya['media']['Sound'];var os$ = laya['media']['SoundChannel'],
      c26 = laya['media']['SoundManager'],
      q3u5w = (laya['display']['Stage'], laya['net']['URL']),
      q2uv3e = laya['utils']['Utils'],
      m$8xai = (ptk1gy(is$ox, 'laya.wx.mini.MiniAdpter'), is$ox['getJson'] = function (asix$8) {
    return JSON['parse'](asix$8);
  }, is$ox['init'] = function (ce2uv, pyktg_) {
    void 0x0 === ce2uv && (ce2uv = !0x1), void 0x0 === pyktg_ && (pyktg_ = !0x1), is$ox['_inited'] || (is$ox['window'] = ve4lc)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (is$ox['_inited'] = !0x0, is$ox['isZiYu'] = pyktg_, is$ox['isPosMsgYu'] = ce2uv, is$ox['EnvConfig'] = {}, is$ox['isZiYu'] || (t_wygp['setNativeFileDir']('/layaairGame'), t_wygp['existDir'](t_wygp['fileNativeDir'], xiaj['create'](is$ox, is$ox['onMkdirCallBack']))), is$ox['window']['focus'] = function () {}, ky_gtp['getUrlPath'] = function () {}, is$ox['window']['logtime'] = function (vlc4e) {}, is$ox['window']['alertTimeLog'] = function (axmzji) {}, is$ox['window']['resetShareInfo'] = function () {}, is$ox['window']['CanvasRenderingContext2D'] = function () {}, is$ox['window']['CanvasRenderingContext2D']['prototype'] = is$ox['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], is$ox['window']['document']['body']['appendChild'] = function () {}, is$ox['EnvConfig']['pixelRatioInt'] = 0x0, pwytg_['getPixelRatio'] = is$ox['pixelRatio'], is$ox['_preCreateElement'] = zmi['createElement'], zmi['createElement'] = is$ox['createElement'], pwytg_['createShaderCondition'] = is$ox['createShaderCondition'], q2uv3e['parseXMLFromString'] = is$ox['parseXMLFromString'], lefc6['_createInputElement'] = t5w3q['_createInputElement'], is$ox['EnvConfig']['load'] = o$six['prototype']['load'], o$six['prototype']['load'] = cu3ev2['prototype']['load'], is$ox['isZiYu'] && ce2uv && wx['onMessage'](function (gyko71) {
      gyko71['isLoad'] && (t_wygp['ziyuFileData'][gyko71['url']] = gyko71['data']);
    }));
  }, is$ox['onMkdirCallBack'] = function (s7o1yk, i$8axm) {
    s7o1yk || (t_wygp['filesListObj'] = JSON['parse'](i$8axm['data']));
  }, is$ox['pixelRatio'] = function () {
    if (!is$ox['EnvConfig']['pixelRatioInt']) try {
      var ygt_k = wx['getSystemInfoSync']();return is$ox['EnvConfig']['pixelRatioInt'] = ygt_k['pixelRatio'], ygt_k['pixelRatio'];
    } catch ($xais8) {}return is$ox['EnvConfig']['pixelRatioInt'];
  }, is$ox['createElement'] = function (tw5q_p) {
    var s$1k7o;if ('canvas' == tw5q_p) return 0x1 == is$ox['idx'] ? is$ox['isZiYu'] ? (s$1k7o = sharedCanvas)['style'] = {} : s$1k7o = ve4lc['canvas'] : s$1k7o = ve4lc['wx']['createCanvas'](), is$ox['idx']++, s$1k7o;if ('textarea' == tw5q_p || 'input' == tw5q_p) return is$ox['onCreateInput'](tw5q_p);if ('div' != tw5q_p) return is$ox['_preCreateElement'](tw5q_p);return tw5q_p = is$ox['_preCreateElement'](tw5q_p), (tw5q_p['contains'] = function (w_t3) {
      return null;
    }, tw5q_p['removeChild'] = function (i$am8x) {}, tw5q_p);
  }, is$ox['onCreateInput'] = function (w35q) {
    return w35q = is$ox['_preCreateElement'](w35q), (w35q['focus'] = t5w3q['wxinputFocus'], w35q['blur'] = t5w3q['wxinputblur'], w35q['style'] = {}, w35q['value'] = 0x0, w35q['parentElement'] = {}, w35q['placeholder'] = {}, w35q['type'] = {}, w35q['setColor'] = function (gt_ywp) {}, w35q['setType'] = function (jxaizm) {}, w35q['setFontFace'] = function (i8m$xa) {}, w35q['addEventListener'] = function (f4rl6h) {}, w35q['contains'] = function ($m8ai) {
      return null;
    }, w35q['removeChild'] = function (yk7so) {}, w35q);
  }, is$ox['createShaderCondition'] = function (jx8ami) {
    var dh0r9 = this;return function () {
      return dh0r9[jx8ami['replace']('this.', '')];
    };
  }, is$ox['EnvConfig'] = null, is$ox['window'] = null, is$ox['_preCreateElement'] = null, is$ox['_inited'] = !0x1, is$ox['wxRequest'] = null, is$ox['systemInfo'] = null, is$ox['version'] = '0.0.1', is$ox['isZiYu'] = !0x1, is$ox['isPosMsgYu'] = !0x1, is$ox['parseXMLFromString'] = function (q_p5w) {
    var kys7o1;q_p5w = q_p5w['replace'](/>\s+</g, '><');try {
      kys7o1 = new ve4lc['Parser']['DOMParser']()['parseFromString'](q_p5w, 'text/xml');
    } catch (p5wqt_) {
      throw '需要引入xml解析库文件';
    }return kys7o1;
  }, is$ox['idx'] = 0x1, is$ox);function is$ox() {}ptk1gy(ktpy, 'laya.wx.mini.MiniImage'), ktpy['prototype']['_loadImage'] = function (c4vel6) {
    var iaxm8 = !0x1;-0x1 == c4vel6['indexOf']('layaNativeDir/') && (iaxm8 = !0x0, c4vel6 = q3u5w['formatURL'](c4vel6)), t_wygp['getFileInfo'](c4vel6) ? ktpy['onCreateImage'](c4vel6, this, !iaxm8) : -0x1 != c4vel6['indexOf']('http://') || -0x1 != c4vel6['indexOf']('https://') ? t_wygp['downImg'](c4vel6, new xiaj(ktpy, ktpy['onDownImgCallBack'], [c4vel6, this]), c4vel6) : ktpy['onCreateImage'](c4vel6, this, !0x0);
  }, ktpy['onDownImgCallBack'] = function (sok$71, wgtp_5, wgt_) {
    wgt_ ? wgtp_5['onError'](null) : ktpy['onCreateImage'](sok$71, wgtp_5);
  }, ktpy['onCreateImage'] = function (lf6r0, g_ywp, ec6lv4) {
    var y_pgwt, h4clf6;function pg_wt() {
      h4clf6['onload'] = null, h4clf6['onerror'] = null, delete g_ywp['imgCache'][lf6r0];
    }y_pgwt = (ec6lv4 = void 0x0 === ec6lv4 ? !0x1 : ec6lv4) ? lf6r0 : (w_5tq = t_wygp['getFileInfo'](lf6r0)['md5'], t_wygp['getFileNativePath'](w_5tq)), null == g_ywp['imgCache'] && (g_ywp['imgCache'] = {}), ec6lv4 = function () {
      pg_wt(), g_ywp['onLoaded'](h4clf6);
    };var w_5tq = function () {
      pg_wt(), g_ywp['event']('error', 'Load image failed');
    };'nativeimage' == g_ywp['_type'] ? ((h4clf6 = new zmi['window']['Image']())['crossOrigin'] = '', h4clf6['onload'] = ec6lv4, h4clf6['onerror'] = w_5tq, h4clf6['src'] = y_pgwt, g_ywp['imgCache'][lf6r0] = h4clf6) : new so7$18['create'](y_pgwt, { 'onload': ec6lv4, 'onerror': w_5tq, 'onCreate': function (gw_py) {
        h4clf6 = gw_py, g_ywp['imgCache'][lf6r0] = gw_py;
      } });
  };function ktpy() {}var t5w3q = (ptk1gy(o$s71, 'laya.wx.mini.MiniInput'), o$s71['_createInputElement'] = function () {
    lefc6['_initInput'](lefc6['area'] = zmi['createElement']('textarea')), lefc6['_initInput'](lefc6['input'] = zmi['createElement']('input')), lefc6['inputContainer'] = zmi['createElement']('div'), lefc6['inputContainer']['style']['position'] = 'absolute', lefc6['inputContainer']['style']['zIndex'] = 0x186a0, zmi['container']['appendChild'](lefc6['inputContainer']), lefc6['inputContainer']['setPos'] = function (so7yk, u2v5q3) {
      lefc6['inputContainer']['style']['left'] = so7yk + 'px', lefc6['inputContainer']['style']['top'] = u2v5q3 + 'px';
    }, ky_gtp['stage']['on']('resize', null, o$s71['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (l64ec) {
      ve4lc['dispatchEvent'] && ve4lc['dispatchEvent']('resize');
    }), c26['_soundClass'] = lhfc64, c26['_musicClass'] = lhfc64;
  }, o$s71['_onStageResize'] = function () {
    ky_gtp['stage']['_canvasTransform']['identity']()['scale'](zmi['width'] / ix8jm['canvas']['width'] / pwytg_['getPixelRatio'](), zmi['height'] / ix8jm['canvas']['height'] / pwytg_['getPixelRatio']());
  }, o$s71['wxinputFocus'] = function (yt1pgk) {
    var uq532w = lefc6['inputElement']['target'];uq532w && !uq532w['editable'] || (m$8xai['window']['wx']['offKeyboardConfirm'](), m$8xai['window']['wx']['offKeyboardInput'](), m$8xai['window']['wx']['showKeyboard']({ 'defaultValue': uq532w['text'], 'maxLength': uq532w['maxChars'], 'multiple': uq532w['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (ky1g7) {}, 'fail': function (w_5t3q) {} }), m$8xai['window']['wx']['onKeyboardConfirm'](function (o8s17$) {
      o8s17$ = o8s17$ ? o8s17$['value'] : '', (uq532w['text'] = o8s17$, uq532w['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), m$8xai['window']['wx']['onKeyboardInput'](function (h4f6c) {
      h4f6c = h4f6c ? h4f6c['value'] : '', uq532w['multiline'] || -0x1 == h4f6c['indexOf']('\x0a') ? (uq532w['text'] = h4f6c, uq532w['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, o$s71['inputEnter'] = function () {
    lefc6['inputElement']['target']['focus'] = !0x1;
  }, o$s71['wxinputblur'] = function () {
    o$s71['hideKeyboard']();
  }, o$s71['hideKeyboard'] = function () {
    m$8xai['window']['wx']['offKeyboardConfirm'](), m$8xai['window']['wx']['offKeyboardInput'](), m$8xai['window']['wx']['hideKeyboard']({ 'success': function (lhrf) {
        console['log']('隐藏键盘');
      }, 'fail': function (rb0d9h) {
        console['log']('隐藏键盘出错:' + (rb0d9h ? rb0d9h['errMsg'] : ''));
      } });
  }, o$s71);function o$s71() {}var cu3ev2 = function () {
    function lfc6h() {}ptk1gy(lfc6h, 'laya.wx.mini.MiniLoader');var _5gpw = lfc6h['prototype'];return _5gpw['load'] = function (l4ev, efc6l, x$s8io, rh64fl, t5qpw_) {
      void 0x0 === x$s8io && (x$s8io = !0x0), void 0x0 === t5qpw_ && (t5qpw_ = !0x1);var axmzj = this;0x0 === (axmzj['_url'] = l4ev)['indexOf']('data:image') ? axmzj['_type'] = efc6l = 'image' : axmzj['_type'] = efc6l = efc6l || axmzj['getTypeFromUrl'](l4ev), axmzj['_cache'] = x$s8io, axmzj['_data'] = null;var ceu3v = 'ascii';-0x1 != l4ev['indexOf']('.fnt') ? ceu3v = 'utf8' : 'arraybuffer' == efc6l && (ceu3v = '');var $sio = q2uv3e['getFileExtension'](l4ev);if (-0x1 != lfc6h['_fileTypeArr']['indexOf']($sio)) m$8xai['EnvConfig']['load']['call'](this, l4ev, efc6l, x$s8io, rh64fl, t5qpw_);else {
        if (t_wygp['getFileInfo'](l4ev)) m$8xai['EnvConfig']['load']['call'](this, l4ev, efc6l, x$s8io, rh64fl, t5qpw_);else {
          if (-0x1 != l4ev['indexOf']('layaNativeDir/')) {
            if (m$8xai['isZiYu']) {
              var mi$a = t_wygp['ziyuFileData'][l4ev];return void axmzj['onLoaded'](mi$a);
            }return cosnole['log']('read read'), void t_wygp['read'](l4ev, ceu3v, new xiaj(lfc6h, lfc6h['onReadNativeCallBack'], [ceu3v, l4ev, efc6l, x$s8io, rh64fl, t5qpw_, axmzj]));
          }mi$a = '' == q3u5w['rootPath'] ? l4ev : l4ev['split'](q3u5w['rootPath'])[0x0], -0x1 != l4ev['indexOf']('http://') || -0x1 != l4ev['indexOf']('https://') ? m$8xai['EnvConfig']['load']['call'](axmzj, l4ev, efc6l, x$s8io, rh64fl, t5qpw_) : t_wygp['readFile'](mi$a, ceu3v, new xiaj(lfc6h, lfc6h['onReadNativeCallBack'], [ceu3v, l4ev, efc6l, x$s8io, rh64fl, t5qpw_, axmzj]), l4ev);
        }
      }
    }, _5gpw['resMgrLoad'] = function (w_gypt, pgy1kt, f9dr0h, h9db0r, k_gtpy, ajim8x, ev2u) {
      void 0x0 === f9dr0h && (f9dr0h = 0x0), void 0x0 === h9db0r && (h9db0r = !0x1), void 0x0 === k_gtpy && (k_gtpy = !0x1), void 0x0 === ajim8x && (ajim8x = 0x0), void 0x0 === ev2u && (ev2u = 0x3), -0x1 != w_gypt['indexOf']('mpack') && console['log']('=============resMgrLoad url:', w_gypt), m$8xai['EnvConfig']['resMgrLoad'](w_gypt, (e64lf, br9d, sy1ko7) => {
        lfc6h['prototype']['resMgrLoadCallBack'](e64lf, br9d, sy1ko7, pgy1kt);
      }, f9dr0h, h9db0r, k_gtpy, ajim8x, ev2u);
    }, _5gpw['resMgrLoadCallBack'] = function (ptyg, ptw_5, pt5wq_, _w3qt5) {
      console['log']('buff:::', ptyg, pt5wq_, t_wygp['fileNativeDir'] + '///' + t_wygp['fileListName']), _w3qt5(ptyg, ptw_5, pt5wq_);
    }, _5gpw['clearRes'] = function (w5_tpg, h9lr0f) {
      this['clearRes'](w5_tpg, h9lr0f = void 0x0 === h9lr0f ? !0x1 : h9lr0f), h9lr0f = t_wygp['getFileInfo'](w5_tpg), !h9lr0f || -0x1 == w5_tpg['indexOf']('http://') && -0x1 == w5_tpg['indexOf']('https://') || (h9lr0f = h9lr0f['md5'], h9lr0f = t_wygp['getFileNativePath'](h9lr0f), t_wygp['remove'](h9lr0f));
    }, lfc6h['onReadNativeCallBack'] = function (bhr09d, v3uce2, d09hrb, uq3w2, uv32q, mxjia8, cf4l, aj8mi, u3vc2) {
      void 0x0 === uq3w2 && (uq3w2 = !0x0), void 0x0 === mxjia8 && (mxjia8 = !0x1), (aj8mi = void 0x0 === aj8mi ? 0x0 : aj8mi) ? 0x1 == aj8mi && m$8xai['EnvConfig']['load']['call'](cf4l, v3uce2, d09hrb, uq3w2, uv32q, mxjia8) : (u3vc2 = 'json' == d09hrb || 'atlas' == d09hrb ? m$8xai['getJson'](u3vc2['data']) : 'xml' == d09hrb ? q2uv3e['parseXMLFromString'](u3vc2['data']) : u3vc2['data'], cf4l['onLoaded'](u3vc2), !m$8xai['isZiYu'] && m$8xai['isPosMsgYu'] && 'arraybuffer' != d09hrb && wx['postMessage']({ 'url': v3uce2, 'data': u3vc2, 'isLoad': !0x0 }));
    }, axzjm(lfc6h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), lfc6h;
  }(),
      t_wygp = (ptk1gy(wpqt_, 'laya.wx.mini.MiniFileMgr', f6l4hr), wpqt_['isLoadFile'] = function ($a8mxi) {
    return -0x1 != wpqt_['_fileTypeArr']['indexOf']($a8mxi);
  }, wpqt_['getFileInfo'] = function (flch64) {
    return flch64 = flch64['split']('?')[0x0], flch64 = wpqt_['filesListObj'][flch64], null == flch64 ? null : flch64;
  }, wpqt_['onFileUpdate'] = function (f0lrh, eu3qv) {
    var gpyt_k = f0lrh['split']('/');f0lrh = gpyt_k[gpyt_k['length'] - 0x1], gpyt_k = wpqt_['getFileInfo'](eu3qv), null == gpyt_k ? wpqt_['onSaveFile'](eu3qv, f0lrh) : gpyt_k['readyUrl'] != eu3qv && wpqt_['remove'](f0lrh, eu3qv);
  }, wpqt_['exits'] = function (lrf06, xma8$) {
    lrf06 = wpqt_['getFileNativePath'](lrf06), wpqt_['fs']['getFileInfo']({ 'filePath': lrf06, 'success': function (o87is$) {
        null != xma8$ && xma8$['runWith']([0x0, o87is$]);
      }, 'fail': function (_q3w5t) {
        null != xma8$ && xma8$['runWith']([0x1, _q3w5t]);
      } });
  }, wpqt_['read'] = function (i8jm, pq5t_w, t1ygp, s8xoi$) {
    void 0x0 === pq5t_w && (pq5t_w = 'ascill'), i8jm = '' != (s8xoi$ = void 0x0 === s8xoi$ ? '' : s8xoi$) ? wpqt_['getFileNativePath'](i8jm) : i8jm, wpqt_['fs']['readFile']({ 'filePath': i8jm, 'encoding': pq5t_w, 'success': function (_wpgyt) {
        null != t1ygp && t1ygp['runWith']([0x0, _wpgyt]);
      }, 'fail': function ($o1s8) {
        $o1s8 && '' != s8xoi$ ? wpqt_['down'](s8xoi$, pq5t_w, t1ygp, s8xoi$) : null != t1ygp && t1ygp['runWith']([0x1]);
      } });
  }, wpqt_['readNativeFile'] = function (am8i$, $oxis8) {
    wpqt_['fs']['readFile']({ 'filePath': am8i$, 'encoding': '', 'success': function (eqvu23) {
        null != $oxis8 && $oxis8['runWith']([0x0]);
      }, 'fail': function (si$o78) {
        null != $oxis8 && $oxis8['runWith']([0x1]);
      } });
  }, wpqt_['down'] = function (w_pq5, s8$oix, _qwu, q2uv5) {
    void 0x0 === s8$oix && (s8$oix = 'ascill'), void 0x0 === q2uv5 && (q2uv5 = '');var ma$x8 = wpqt_['getFileNativePath'](q2uv5);wpqt_['wxdown']({ 'url': w_pq5, 'filePath': ma$x8, 'success': function (og1k7y) {
        0xc8 === og1k7y['statusCode'] && wpqt_['readFile'](og1k7y['filePath'], s8$oix, _qwu, q2uv5);
      }, 'fail': function (rl9f) {
        null != _qwu && _qwu['runWith']([0x1, rl9f]);
      } })['onProgressUpdate'](function (s817o) {
      null != _qwu && _qwu['runWith']([0x2, s817o['progress']]);
    });
  }, wpqt_['readFile'] = function (gtp_5, _3, c6lf4, $s18o) {
    void 0x0 === $s18o && ($s18o = ''), wpqt_['fs']['readFile']({ 'filePath': gtp_5, 'encoding': _3 = void 0x0 === _3 ? 'ascill' : _3, 'success': function (r0lfh9) {
        -0x1 == gtp_5['indexOf']('http://') && -0x1 == gtp_5['indexOf']('https://') || wpqt_['onFileUpdate'](gtp_5, $s18o), null != c6lf4 && c6lf4['runWith']([0x0, r0lfh9]);
      }, 'fail': function (ve23uq) {
        ve23uq && null != c6lf4 && c6lf4['runWith']([0x1, ve23uq]);
      } });
  }, wpqt_['downImg'] = function (evu3q, ytw_g, x8iamj) {
    void 0x0 === x8iamj && (x8iamj = ''), wpqt_['wxdown']({ 'url': evu3q, 'success': function (rbd90) {
        0xc8 === rbd90['statusCode'] && wpqt_['copyFile'](rbd90['tempFilePath'], x8iamj, ytw_g);
      }, 'fail': function (tp1gk) {
        null != ytw_g && ytw_g['runWith']([0x1, tp1gk]);
      } });
  }, wpqt_['copyFile'] = function (k7y1gp, ykos7, _q35u) {
    var jmzaxi = k7y1gp['split']('/'),
        soi8$x = jmzaxi[jmzaxi['length'] - 0x1];ykos7['split']('?')[0x0];var wtgp5 = wpqt_['getFileInfo'](ykos7);jmzaxi = wpqt_['getFileNativePath'](soi8$x), wpqt_['fs']['copyFile']({ 'srcPath': k7y1gp, 'destPath': jmzaxi, 'success': function (l9rf0h) {
        wtgp5 ? wtgp5['readyUrl'] != ykos7 && wpqt_['remove'](soi8$x, ykos7, _q35u) : (wpqt_['onSaveFile'](ykos7, soi8$x), null != _q35u && _q35u['runWith']([0x0]));
      }, 'fail': function (gtyk1p) {
        null != _q35u && _q35u['runWith']([0x1, gtyk1p]);
      } });
  }, wpqt_['getFileNativePath'] = function (_kpgyt) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _kpgyt;
  }, wpqt_['remove'] = function (s78$o1, _pqw, k1so7) {
    void 0x0 === _pqw && (_pqw = '');var jxmzai = wpqt_['getFileInfo'](_pqw),
        frl60 = wpqt_['getFileNativePath'](jxmzai['md5']);ky_gtp['loader']['clearRes'](jxmzai['readyUrl']), wpqt_['fs']['unlink']({ 'filePath': frl60, 'success': function (uc42) {
        '' != _pqw && wpqt_['onSaveFile'](_pqw, s78$o1), null != k1so7 && k1so7['runWith']([0x0]);
      }, 'fail': function (v2q53) {} });
  }, wpqt_['onSaveFile'] = function (tq5w3_, v46ce2) {
    var c23v = tq5w3_['split']('?')[0x0];wpqt_['filesListObj'][c23v] = { 'md5': v46ce2, 'readyUrl': tq5w3_ }, wpqt_['fs']['writeFile']({ 'filePath': wpqt_['fileNativeDir'] + '/' + wpqt_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wpqt_['filesListObj']), 'success': function (sxi8$) {
        console['log']('写入测试测试成功：', sxi8$);
      }, 'fail': function ($ix8) {
        console['log']('写入测试测试失败：', $ix8);
      } });
  }, wpqt_['existDir'] = function (k7$o1s, v23cue) {
    wpqt_['fs']['mkdir']({ 'dirPath': k7$o1s, 'success': function (g_5t) {
        null != v23cue && v23cue['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (t_5pqw) {
        -0x1 != t_5pqw['errMsg']['indexOf']('file already exists') ? wpqt_['readSync'](wpqt_['fileListName'], 'utf8', v23cue) : null != v23cue && v23cue['runWith']([0x1, t_5pqw]);
      } });
  }, wpqt_['readSync'] = function (uc23e, k7$os1, kgy7o1, rf90l) {
    void 0x0 === k7$os1 && (k7$os1 = 'ascill'), void 0x0 === rf90l && (rf90l = ''), uc23e = wpqt_['getFileNativePath'](uc23e);var zija;try {
      zija = wpqt_['fs']['readFileSync'](uc23e), null != kgy7o1 && kgy7o1['runWith']([0x0, { 'data': zija }]);
    } catch (cu32v) {
      null != kgy7o1 && kgy7o1['runWith']([0x1]);
    }
  }, wpqt_['readCache'] = function () {}, wpqt_['writeCache'] = function (ks7$1) {
    var ajizxm = readyUrl['split']('?')[0x0];wpqt_['filesListObj'][ajizxm] = { 'md5': md5Name, 'readyUrl': readyUrl }, wpqt_['fs']['writeFile']({ 'filePath': wpqt_['fileNativeDir'] + '/' + wpqt_['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](wpqt_['filesListObj']), 'success': function (hl0fr6) {}, 'fail': function (w_t5gp) {} });
  }, wpqt_['setNativeFileDir'] = function (gp_ky) {
    wpqt_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gp_ky;
  }, wpqt_['filesListObj'] = {}, wpqt_['fileNativeDir'] = null, wpqt_['fileListName'] = 'layaairfiles.txt', wpqt_['ziyuFileData'] = {}, axzjm(wpqt_, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), wpqt_);function wpqt_() {
    wpqt_['__super']['call'](this);
  }var lhfc64 = function () {
    function g7o() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, g7o['__super']['call'](this), this['_sound'] = g7o['_createSound']();
    }ptk1gy(g7o, 'laya.wx.mini.MiniSound', f6l4hr);var kg7y = g7o['prototype'];return kg7y['load'] = function (i$xam) {
      var _qwpt5 = this,
          ix8mja;function mxaj8() {
        if (null != g7o['_null']) _qwpt5['_sound']['onCanplay'](g7o['_null']), _qwpt5['_sound']['onError'](g7o['_null']);else try {
          _qwpt5['_sound']['onCanplay'](null), _qwpt5['_sound']['onError'](null), g7o['_null'] = null;
        } catch (pktg_) {
          console['warn']('[wxmini] _clearSound:' + pktg_), _qwpt5['_sound']['onCanplay'](k_ygt), _qwpt5['_sound']['onError'](k_ygt), g7o['_null'] = k_ygt;
        }
      }function k_ygt() {}i$xam = q3u5w['formatURL'](i$xam), this['url'] = i$xam, g7o['_audioCache'][i$xam] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        mxaj8(), ix8mja['loaded'] = !0x0, ix8mja['event']('complete'), g7o['_audioCache'][ix8mja['url']] = ix8mja;
      }), this['_sound']['onError'](function (rhlf90) {
        console['error']('errCode=' + rhlf90['errCode'] + '  errMsg=' + rhlf90['errMsg']), mxaj8(), ix8mja['event']('error');
      }), this['_sound']['src'] = i$xam, ix8mja = this);
    }, kg7y['play'] = function (_3wqu, pykg_) {
      void 0x0 === _3wqu && (_3wqu = 0x0), void 0x0 === pykg_ && (pykg_ = 0x0), (_tgypk = this['url'] == c26['_tMusic'] ? (g7o['_musicAudio'] || (g7o['_musicAudio'] = g7o['_createSound']()), g7o['_musicAudio']) : g7o['_createSound']())['src'] = this['url'];var _tgypk = new e3c2uv(_tgypk);return _tgypk['url'] = this['url'], _tgypk['loops'] = pykg_, _tgypk['startTime'] = _3wqu, _tgypk['play'](), c26['addChannel'](_tgypk), _tgypk;
    }, kg7y['dispose'] = function () {
      var ys71k = g7o['_audioCache'][this['url']];ys71k && (ys71k['src'] = '', delete g7o['_audioCache'][this['url']]);
    }, rh9fl(0x0, kg7y, 'duration', function () {
      return this['_sound']['duration'];
    }), g7o['_createSound'] = function () {
      return g7o['_id']++, m$8xai['window']['wx']['createInnerAudioContext']();
    }, g7o['_musicAudio'] = null, g7o['_id'] = 0x0, g7o['_audioCache'] = {}, g7o['_null'] = void 0x0, g7o;
  }(),
      e3c2uv = function () {
    function t_kypg(ia8x$s) {
      this['_audio'] = null, this['_onEnd'] = null, t_kypg['__super']['call'](this), this['_audio'] = ia8x$s, this['_onEnd'] = q2uv3e['bind'](this['__onEnd'], this), ia8x$s['onEnded'](this['_onEnd']);
    }ptk1gy(t_kypg, 'laya.wx.mini.MiniSoundChannel', os$);var gpk_yt = t_kypg['prototype'];return gpk_yt['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (ky_gtp['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gpk_yt['__onNull'] = function () {}, gpk_yt['play'] = function () {
      this['isStopped'] = !0x1, c26['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, gpk_yt['stop'] = function () {
      if (this['isStopped'] = !0x0, c26['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != t_kypg['_null']) this['_audio']['onEnded'](t_kypg['_null']);else try {
          this['_audio']['onEnded'](null), t_kypg['_null'] = null;
        } catch (ax8mj) {
          console['warn']('[wxmini] stop:' + ax8mj), this['_audio']['onEnded'](q2uv3e['bind'](this['__onNull'], this)), t_kypg['_null'] = q2uv3e['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, gpk_yt['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, gpk_yt['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, c26['addChannel'](this), this['_audio']['play']());
    }, rh9fl(0x0, gpk_yt, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), rh9fl(0x0, gpk_yt, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), rh9fl(0x0, gpk_yt, 'volume', function () {
      return 0x1;
    }, function (c64vl) {}), t_kypg['_null'] = void 0x0, t_kypg;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function ($7s1o8, w5tp_) {
  'use strict';

  for (var mx8a$i in Object['defineProperty'](w5tp_, '__esModule', { 'value': !0x0 }), Laya) {
    var f4ce6l = Laya[mx8a$i];f4ce6l && f4ce6l['__isclass'] && (w5tp_[mx8a$i] = f4ce6l);
  }
});