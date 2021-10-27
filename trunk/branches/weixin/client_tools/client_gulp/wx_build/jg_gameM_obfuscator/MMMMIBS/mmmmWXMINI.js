var Y = wx.$M;
!function (zp_hi7, k1q0d) {
  k1q0d['un'], k1q0d['uns'];var pm_ihz = k1q0d['static'],
      rdu9ke = k1q0d['class'],
      r4s692 = k1q0d['getset'];k1q0d['__newvec'];var gnoxc = laya['utils']['Browser'],
      xv3njg = (laya['events']['Event'], laya['events']['EventDispatcher']),
      dequk = laya['resource']['HTMLImage'],
      oc5xjg = laya['utils']['Handler'],
      m_zl = laya['display']['Input'],
      t1yq$0 = laya['net']['Loader'];laya['maths']['Matrix'];var o3ngx = laya['renders']['Render'],
      d0qku1 = laya['utils']['RunDriver'];laya['media']['Sound'];var d$1q0t = laya['media']['SoundChannel'],
      nwg83v = laya['media']['SoundManager'],
      bh7fa = (laya['display']['Stage'], laya['net']['URL']),
      n8w4 = laya['utils']['Utils'],
      onxjgc = (rdu9ke(f$yta, 'laya.wx.mini.MiniAdpter'), f$yta['getJson'] = function (f$t0a) {
    return JSON['parse'](f$t0a);
  }, f$yta['init'] = function (jn8v3, gwnv) {
    void 0x0 === jn8v3 && (jn8v3 = !0x1), void 0x0 === gwnv && (gwnv = !0x1), f$yta['_inited'] || (f$yta['window'] = zp_hi7)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (f$yta['_inited'] = !0x0, f$yta['isZiYu'] = gwnv, f$yta['isPosMsgYu'] = jn8v3, f$yta['EnvConfig'] = {}, f$yta['isZiYu'] || (s629r4['setNativeFileDir']('/layaairGame'), s629r4['existDir'](s629r4['fileNativeDir'], oc5xjg['create'](f$yta, f$yta['onMkdirCallBack']))), f$yta['window']['focus'] = function () {}, k1q0d['getUrlPath'] = function () {}, f$yta['window']['logtime'] = function (u9e62) {}, f$yta['window']['alertTimeLog'] = function (r2w6s) {}, f$yta['window']['resetShareInfo'] = function () {}, f$yta['window']['CanvasRenderingContext2D'] = function () {}, f$yta['window']['CanvasRenderingContext2D']['prototype'] = f$yta['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f$yta['window']['document']['body']['appendChild'] = function () {}, f$yta['EnvConfig']['pixelRatioInt'] = 0x0, d0qku1['getPixelRatio'] = f$yta['pixelRatio'], f$yta['_preCreateElement'] = gnoxc['createElement'], gnoxc['createElement'] = f$yta['createElement'], d0qku1['createShaderCondition'] = f$yta['createShaderCondition'], n8w4['parseXMLFromString'] = f$yta['parseXMLFromString'], m_zl['_createInputElement'] = fpb7h_['_createInputElement'], f$yta['EnvConfig']['load'] = t1yq$0['prototype']['load'], t1yq$0['prototype']['load'] = ws4862['prototype']['load'], f$yta['isZiYu'] && jn8v3 && wx['onMessage'](function (td01q) {
      td01q['isLoad'] && (s629r4['ziyuFileData'][td01q['url']] = td01q['data']);
    }));
  }, f$yta['onMkdirCallBack'] = function (p7ahb, gvj8n3) {
    p7ahb || (s629r4['filesListObj'] = JSON['parse'](gvj8n3['data']));
  }, f$yta['pixelRatio'] = function () {
    if (!f$yta['EnvConfig']['pixelRatioInt']) try {
      var hm_p = wx['getSystemInfoSync']();return f$yta['EnvConfig']['pixelRatioInt'] = hm_p['pixelRatio'], hm_p['pixelRatio'];
    } catch (u69er) {}return f$yta['EnvConfig']['pixelRatioInt'];
  }, f$yta['createElement'] = function (d$q10) {
    var bfpha;if ('canvas' == d$q10) return 0x1 == f$yta['idx'] ? f$yta['isZiYu'] ? (bfpha = sharedCanvas)['style'] = {} : bfpha = zp_hi7['canvas'] : bfpha = zp_hi7['wx']['createCanvas'](), f$yta['idx']++, bfpha;if ('textarea' == d$q10 || 'input' == d$q10) return f$yta['onCreateInput'](d$q10);if ('div' != d$q10) return f$yta['_preCreateElement'](d$q10);return d$q10 = f$yta['_preCreateElement'](d$q10), (d$q10['contains'] = function (lmh_iz) {
      return null;
    }, d$q10['removeChild'] = function (jn3gox) {}, d$q10);
  }, f$yta['onCreateInput'] = function (oxg5j) {
    return oxg5j = f$yta['_preCreateElement'](oxg5j), (oxg5j['focus'] = fpb7h_['wxinputFocus'], oxg5j['blur'] = fpb7h_['wxinputblur'], oxg5j['style'] = {}, oxg5j['value'] = 0x0, oxg5j['parentElement'] = {}, oxg5j['placeholder'] = {}, oxg5j['type'] = {}, oxg5j['setColor'] = function (keur9d) {}, oxg5j['setType'] = function (d9qke) {}, oxg5j['setFontFace'] = function (es96r) {}, oxg5j['addEventListener'] = function (s824w6) {}, oxg5j['contains'] = function ($dt01) {
      return null;
    }, oxg5j['removeChild'] = function (pib_7h) {}, oxg5j);
  }, f$yta['createShaderCondition'] = function (at$y1) {
    var ybtaf$ = this;return function () {
      return ybtaf$[at$y1['replace']('this.', '')];
    };
  }, f$yta['EnvConfig'] = null, f$yta['window'] = null, f$yta['_preCreateElement'] = null, f$yta['_inited'] = !0x1, f$yta['wxRequest'] = null, f$yta['systemInfo'] = null, f$yta['version'] = '0.0.1', f$yta['isZiYu'] = !0x1, f$yta['isPosMsgYu'] = !0x1, f$yta['parseXMLFromString'] = function (p_h7i) {
    var a7bpfh;p_h7i = p_h7i['replace'](/>\s+</g, '><');try {
      a7bpfh = new zp_hi7['Parser']['DOMParser']()['parseFromString'](p_h7i, 'text/xml');
    } catch (y$0a1) {
      throw '需要引入xml解析库文件';
    }return a7bpfh;
  }, f$yta['idx'] = 0x1, f$yta);function f$yta() {}rdu9ke(hb_ip, 'laya.wx.mini.MiniImage'), hb_ip['prototype']['_loadImage'] = function ($k10d) {
    var es29r6 = !0x1;-0x1 == $k10d['indexOf']('layaNativeDir/') && (es29r6 = !0x0, $k10d = bh7fa['formatURL']($k10d)), s629r4['getFileInfo']($k10d) ? hb_ip['onCreateImage']($k10d, this, !es29r6) : -0x1 != $k10d['indexOf']('http://') || -0x1 != $k10d['indexOf']('https://') ? s629r4['downImg']($k10d, new oc5xjg(hb_ip, hb_ip['onDownImgCallBack'], [$k10d, this]), $k10d) : hb_ip['onCreateImage']($k10d, this, !0x0);
  }, hb_ip['onDownImgCallBack'] = function (f$tby, $fat0, g5cox) {
    g5cox ? $fat0['onError'](null) : hb_ip['onCreateImage'](f$tby, $fat0);
  }, hb_ip['onCreateImage'] = function ($01tdq, oxjgn, t7aybf) {
    var s29er, u10;function jvn8g() {
      u10['onload'] = null, u10['onerror'] = null, delete oxjgn['imgCache'][$01tdq];
    }s29er = (t7aybf = void 0x0 === t7aybf ? !0x1 : t7aybf) ? $01tdq : (jg3xno = s629r4['getFileInfo']($01tdq)['md5'], s629r4['getFileNativePath'](jg3xno)), null == oxjgn['imgCache'] && (oxjgn['imgCache'] = {}), t7aybf = function () {
      jvn8g(), oxjgn['onLoaded'](u10);
    };var jg3xno = function () {
      jvn8g(), oxjgn['event']('error', 'Load image failed');
    };'nativeimage' == oxjgn['_type'] ? ((u10 = new gnoxc['window']['Image']())['crossOrigin'] = '', u10['onload'] = t7aybf, u10['onerror'] = jg3xno, u10['src'] = s29er, oxjgn['imgCache'][$01tdq] = u10) : new dequk['create'](s29er, { 'onload': t7aybf, 'onerror': jg3xno, 'onCreate': function (hzmi) {
        u10 = hzmi, oxjgn['imgCache'][$01tdq] = hzmi;
      } });
  };function hb_ip() {}var fpb7h_ = (rdu9ke(y$, 'laya.wx.mini.MiniInput'), y$['_createInputElement'] = function () {
    m_zl['_initInput'](m_zl['area'] = gnoxc['createElement']('textarea')), m_zl['_initInput'](m_zl['input'] = gnoxc['createElement']('input')), m_zl['inputContainer'] = gnoxc['createElement']('div'), m_zl['inputContainer']['style']['position'] = 'absolute', m_zl['inputContainer']['style']['zIndex'] = 0x186a0, gnoxc['container']['appendChild'](m_zl['inputContainer']), m_zl['inputContainer']['setPos'] = function (v4nw, ekd1) {
      m_zl['inputContainer']['style']['left'] = v4nw + 'px', m_zl['inputContainer']['style']['top'] = ekd1 + 'px';
    }, k1q0d['stage']['on']('resize', null, y$['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f$aty0) {
      zp_hi7['dispatchEvent'] && zp_hi7['dispatchEvent']('resize');
    }), nwg83v['_soundClass'] = fyp7, nwg83v['_musicClass'] = fyp7;
  }, y$['_onStageResize'] = function () {
    k1q0d['stage']['_canvasTransform']['identity']()['scale'](gnoxc['width'] / o3ngx['canvas']['width'] / d0qku1['getPixelRatio'](), gnoxc['height'] / o3ngx['canvas']['height'] / d0qku1['getPixelRatio']());
  }, y$['wxinputFocus'] = function (du9qe) {
    var gj8n3 = m_zl['inputElement']['target'];gj8n3 && !gj8n3['editable'] || (onxjgc['window']['wx']['offKeyboardConfirm'](), onxjgc['window']['wx']['offKeyboardInput'](), onxjgc['window']['wx']['showKeyboard']({ 'defaultValue': gj8n3['text'], 'maxLength': gj8n3['maxChars'], 'multiple': gj8n3['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (jngv3x) {}, 'fail': function (vs4w38) {} }), onxjgc['window']['wx']['onKeyboardConfirm'](function (xgcjn) {
      xgcjn = xgcjn ? xgcjn['value'] : '', (gj8n3['text'] = xgcjn, gj8n3['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), onxjgc['window']['wx']['onKeyboardInput'](function (t$y10q) {
      t$y10q = t$y10q ? t$y10q['value'] : '', gj8n3['multiline'] || -0x1 == t$y10q['indexOf']('\x0a') ? (gj8n3['text'] = t$y10q, gj8n3['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, y$['inputEnter'] = function () {
    m_zl['inputElement']['target']['focus'] = !0x1;
  }, y$['wxinputblur'] = function () {
    y$['hideKeyboard']();
  }, y$['hideKeyboard'] = function () {
    onxjgc['window']['wx']['offKeyboardConfirm'](), onxjgc['window']['wx']['offKeyboardInput'](), onxjgc['window']['wx']['hideKeyboard']({ 'success': function (ox5j) {
        console['log']('隐藏键盘');
      }, 'fail': function (xjonc) {
        console['log']('隐藏键盘出错:' + (xjonc ? xjonc['errMsg'] : ''));
      } });
  }, y$);function y$() {}var ws4862 = function () {
    function bpfya7() {}rdu9ke(bpfya7, 'laya.wx.mini.MiniLoader');var ngjxo = bpfya7['prototype'];return ngjxo['load'] = function (m_iz, x5cjo, gnoxj, ogc5x, qu10dk) {
      void 0x0 === gnoxj && (gnoxj = !0x0), void 0x0 === qu10dk && (qu10dk = !0x1);var tabyf$ = this;0x0 === (tabyf$['_url'] = m_iz)['indexOf']('data:image') ? tabyf$['_type'] = x5cjo = 'image' : tabyf$['_type'] = x5cjo = x5cjo || tabyf$['getTypeFromUrl'](m_iz), tabyf$['_cache'] = gnoxj, tabyf$['_data'] = null;var d0q$k1 = 'ascii';-0x1 != m_iz['indexOf']('.fnt') ? d0q$k1 = 'utf8' : 'arraybuffer' == x5cjo && (d0q$k1 = '');var edkr9 = n8w4['getFileExtension'](m_iz);if (-0x1 != bpfya7['_fileTypeArr']['indexOf'](edkr9)) onxjgc['EnvConfig']['load']['call'](this, m_iz, x5cjo, gnoxj, ogc5x, qu10dk);else {
        if (s629r4['getFileInfo'](m_iz)) onxjgc['EnvConfig']['load']['call'](this, m_iz, x5cjo, gnoxj, ogc5x, qu10dk);else {
          if (-0x1 != m_iz['indexOf']('layaNativeDir/')) {
            if (onxjgc['isZiYu']) {
              var u26r9 = s629r4['ziyuFileData'][m_iz];return void tabyf$['onLoaded'](u26r9);
            }return cosnole['log']('read read'), void s629r4['read'](m_iz, d0q$k1, new oc5xjg(bpfya7, bpfya7['onReadNativeCallBack'], [d0q$k1, m_iz, x5cjo, gnoxj, ogc5x, qu10dk, tabyf$]));
          }u26r9 = '' == bh7fa['rootPath'] ? m_iz : m_iz['split'](bh7fa['rootPath'])[0x0], -0x1 != m_iz['indexOf']('http://') || -0x1 != m_iz['indexOf']('https://') ? onxjgc['EnvConfig']['load']['call'](tabyf$, m_iz, x5cjo, gnoxj, ogc5x, qu10dk) : s629r4['readFile'](u26r9, d0q$k1, new oc5xjg(bpfya7, bpfya7['onReadNativeCallBack'], [d0q$k1, m_iz, x5cjo, gnoxj, ogc5x, qu10dk, tabyf$]), m_iz);
        }
      }
    }, ngjxo['resMgrLoad'] = function (ft7b, t$q1y, q1kd0u, vx3gnj, sw624r, hlm_iz, dq1$t0) {
      void 0x0 === q1kd0u && (q1kd0u = 0x0), void 0x0 === vx3gnj && (vx3gnj = !0x1), void 0x0 === sw624r && (sw624r = !0x1), void 0x0 === hlm_iz && (hlm_iz = 0x0), void 0x0 === dq1$t0 && (dq1$t0 = 0x3), -0x1 != ft7b['indexOf']('mpack') && console['log']('=============resMgrLoad url:', ft7b), onxjgc['EnvConfig']['resMgrLoad'](ft7b, (bpi7_, tyabf7, nvjgx) => {
        bpfya7['prototype']['resMgrLoadCallBack'](bpi7_, tyabf7, nvjgx, t$q1y);
      }, q1kd0u, vx3gnj, sw624r, hlm_iz, dq1$t0);
    }, ngjxo['resMgrLoadCallBack'] = function (_iz7p, erud9k, t$ybaf, qk1deu) {
      console['log']('buff:::', _iz7p, t$ybaf, s629r4['fileNativeDir'] + '///' + s629r4['fileListName']), qk1deu(_iz7p, erud9k, t$ybaf);
    }, ngjxo['clearRes'] = function (onx3jg, fh_b) {
      this['clearRes'](onx3jg, fh_b = void 0x0 === fh_b ? !0x1 : fh_b), fh_b = s629r4['getFileInfo'](onx3jg), !fh_b || -0x1 == onx3jg['indexOf']('http://') && -0x1 == onx3jg['indexOf']('https://') || (fh_b = fh_b['md5'], fh_b = s629r4['getFileNativePath'](fh_b), s629r4['remove'](fh_b));
    }, bpfya7['onReadNativeCallBack'] = function (btf7y, q$1t, rw2, imhp_, apf7h, gc5xjo, jg3v, zip7_h, n3v4) {
      void 0x0 === imhp_ && (imhp_ = !0x0), void 0x0 === gc5xjo && (gc5xjo = !0x1), (zip7_h = void 0x0 === zip7_h ? 0x0 : zip7_h) ? 0x1 == zip7_h && onxjgc['EnvConfig']['load']['call'](jg3v, q$1t, rw2, imhp_, apf7h, gc5xjo) : (n3v4 = 'json' == rw2 || 'atlas' == rw2 ? onxjgc['getJson'](n3v4['data']) : 'xml' == rw2 ? n8w4['parseXMLFromString'](n3v4['data']) : n3v4['data'], jg3v['onLoaded'](n3v4), !onxjgc['isZiYu'] && onxjgc['isPosMsgYu'] && 'arraybuffer' != rw2 && wx['postMessage']({ 'url': q$1t, 'data': n3v4, 'isLoad': !0x0 }));
    }, pm_ihz(bpfya7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), bpfya7;
  }(),
      s629r4 = (rdu9ke(w83gvn, 'laya.wx.mini.MiniFileMgr', xv3njg), w83gvn['isLoadFile'] = function (yt1q0$) {
    return -0x1 != w83gvn['_fileTypeArr']['indexOf'](yt1q0$);
  }, w83gvn['getFileInfo'] = function (ngjvx) {
    return ngjvx = ngjvx['split']('?')[0x0], ngjvx = w83gvn['filesListObj'][ngjvx], null == ngjvx ? null : ngjvx;
  }, w83gvn['onFileUpdate'] = function (gj5cxo, qe9u) {
    var imzh_ = gj5cxo['split']('/');gj5cxo = imzh_[imzh_['length'] - 0x1], imzh_ = w83gvn['getFileInfo'](qe9u), null == imzh_ ? w83gvn['onSaveFile'](qe9u, gj5cxo) : imzh_['readyUrl'] != qe9u && w83gvn['remove'](gj5cxo, qe9u);
  }, w83gvn['exits'] = function (hfa7, vngx3) {
    hfa7 = w83gvn['getFileNativePath'](hfa7), w83gvn['fs']['getFileInfo']({ 'filePath': hfa7, 'success': function (p7afyb) {
        null != vngx3 && vngx3['runWith']([0x0, p7afyb]);
      }, 'fail': function ($qt01) {
        null != vngx3 && vngx3['runWith']([0x1, $qt01]);
      } });
  }, w83gvn['read'] = function (uqk0d1, ph7_, vj83g, gncjxo) {
    void 0x0 === ph7_ && (ph7_ = 'ascill'), uqk0d1 = '' != (gncjxo = void 0x0 === gncjxo ? '' : gncjxo) ? w83gvn['getFileNativePath'](uqk0d1) : uqk0d1, w83gvn['fs']['readFile']({ 'filePath': uqk0d1, 'encoding': ph7_, 'success': function (l_mihz) {
        null != vj83g && vj83g['runWith']([0x0, l_mihz]);
      }, 'fail': function (v4ws83) {
        v4ws83 && '' != gncjxo ? w83gvn['down'](gncjxo, ph7_, vj83g, gncjxo) : null != vj83g && vj83g['runWith']([0x1]);
      } });
  }, w83gvn['readNativeFile'] = function (j3ngo, eru926) {
    w83gvn['fs']['readFile']({ 'filePath': j3ngo, 'encoding': '', 'success': function (bpi_) {
        null != eru926 && eru926['runWith']([0x0]);
      }, 'fail': function (y1tq) {
        null != eru926 && eru926['runWith']([0x1]);
      } });
  }, w83gvn['down'] = function ($q0d1k, jcg5o, s9r26, bfay7) {
    void 0x0 === jcg5o && (jcg5o = 'ascill'), void 0x0 === bfay7 && (bfay7 = '');var ure629 = w83gvn['getFileNativePath'](bfay7);w83gvn['wxdown']({ 'url': $q0d1k, 'filePath': ure629, 'success': function (hml_zi) {
        0xc8 === hml_zi['statusCode'] && w83gvn['readFile'](hml_zi['filePath'], jcg5o, s9r26, bfay7);
      }, 'fail': function (kq9eu) {
        null != s9r26 && s9r26['runWith']([0x1, kq9eu]);
      } })['onProgressUpdate'](function (eur2k) {
      null != s9r26 && s9r26['runWith']([0x2, eur2k['progress']]);
    });
  }, w83gvn['readFile'] = function (gjon3, er92s6, hm_, oxjg3n) {
    void 0x0 === oxjg3n && (oxjg3n = ''), w83gvn['fs']['readFile']({ 'filePath': gjon3, 'encoding': er92s6 = void 0x0 === er92s6 ? 'ascill' : er92s6, 'success': function (pb_i) {
        -0x1 == gjon3['indexOf']('http://') && -0x1 == gjon3['indexOf']('https://') || w83gvn['onFileUpdate'](gjon3, oxjg3n), null != hm_ && hm_['runWith']([0x0, pb_i]);
      }, 'fail': function (jg8nv3) {
        jg8nv3 && null != hm_ && hm_['runWith']([0x1, jg8nv3]);
      } });
  }, w83gvn['downImg'] = function (n8wvg, xong3j, v834ws) {
    void 0x0 === v834ws && (v834ws = ''), w83gvn['wxdown']({ 'url': n8wvg, 'success': function (yt01q) {
        0xc8 === yt01q['statusCode'] && w83gvn['copyFile'](yt01q['tempFilePath'], v834ws, xong3j);
      }, 'fail': function (qk1edu) {
        null != xong3j && xong3j['runWith']([0x1, qk1edu]);
      } });
  }, w83gvn['copyFile'] = function (p_bhf, wv843s, byaft) {
    var phb7f = p_bhf['split']('/'),
        nv3g8j = phb7f[phb7f['length'] - 0x1];wv843s['split']('?')[0x0];var i_zhm = w83gvn['getFileInfo'](wv843s);phb7f = w83gvn['getFileNativePath'](nv3g8j), w83gvn['fs']['copyFile']({ 'srcPath': p_bhf, 'destPath': phb7f, 'success': function (ngoj) {
        i_zhm ? i_zhm['readyUrl'] != wv843s && w83gvn['remove'](nv3g8j, wv843s, byaft) : (w83gvn['onSaveFile'](wv843s, nv3g8j), null != byaft && byaft['runWith']([0x0]));
      }, 'fail': function (dku1q) {
        null != byaft && byaft['runWith']([0x1, dku1q]);
      } });
  }, w83gvn['getFileNativePath'] = function (xjncgo) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xjncgo;
  }, w83gvn['remove'] = function (ih_pzm, $d01kq, j3xvg) {
    void 0x0 === $d01kq && ($d01kq = '');var cjxg = w83gvn['getFileInfo']($d01kq),
        xcngjo = w83gvn['getFileNativePath'](cjxg['md5']);k1q0d['loader']['clearRes'](cjxg['readyUrl']), w83gvn['fs']['unlink']({ 'filePath': xcngjo, 'success': function (nvxjg) {
        '' != $d01kq && w83gvn['onSaveFile']($d01kq, ih_pzm), null != j3xvg && j3xvg['runWith']([0x0]);
      }, 'fail': function (yt0q$) {} });
  }, w83gvn['onSaveFile'] = function (xjong, bh7a) {
    var $ya01t = xjong['split']('?')[0x0];w83gvn['filesListObj'][$ya01t] = { 'md5': bh7a, 'readyUrl': xjong }, w83gvn['fs']['writeFile']({ 'filePath': w83gvn['fileNativeDir'] + '/' + w83gvn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w83gvn['filesListObj']), 'success': function (bp7ih_) {
        console['log']('写入测试测试成功：', bp7ih_);
      }, 'fail': function (g8vwn3) {
        console['log']('写入测试测试失败：', g8vwn3);
      } });
  }, w83gvn['existDir'] = function (wgn3, $qy0) {
    w83gvn['fs']['mkdir']({ 'dirPath': wgn3, 'success': function (s6w24r) {
        null != $qy0 && $qy0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (w834n) {
        -0x1 != w834n['errMsg']['indexOf']('file already exists') ? w83gvn['readSync'](w83gvn['fileListName'], 'utf8', $qy0) : null != $qy0 && $qy0['runWith']([0x1, w834n]);
      } });
  }, w83gvn['readSync'] = function (_mizl, zihl_, btyaf$, nvgjx) {
    void 0x0 === zihl_ && (zihl_ = 'ascill'), void 0x0 === nvgjx && (nvgjx = ''), _mizl = w83gvn['getFileNativePath'](_mizl);var py;try {
      py = w83gvn['fs']['readFileSync'](_mizl), null != btyaf$ && btyaf$['runWith']([0x0, { 'data': py }]);
    } catch (ws64v8) {
      null != btyaf$ && btyaf$['runWith']([0x1]);
    }
  }, w83gvn['readCache'] = function () {}, w83gvn['writeCache'] = function (xocjg5) {
    var qud1ke = readyUrl['split']('?')[0x0];w83gvn['filesListObj'][qud1ke] = { 'md5': md5Name, 'readyUrl': readyUrl }, w83gvn['fs']['writeFile']({ 'filePath': w83gvn['fileNativeDir'] + '/' + w83gvn['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](w83gvn['filesListObj']), 'success': function ($0ytaf) {}, 'fail': function (tdq$01) {} });
  }, w83gvn['setNativeFileDir'] = function (r2s49) {
    w83gvn['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + r2s49;
  }, w83gvn['filesListObj'] = {}, w83gvn['fileNativeDir'] = null, w83gvn['fileListName'] = 'layaairfiles.txt', w83gvn['ziyuFileData'] = {}, pm_ihz(w83gvn, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), w83gvn);function w83gvn() {
    w83gvn['__super']['call'](this);
  }var fyp7 = function () {
    function y7bat() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, y7bat['__super']['call'](this), this['_sound'] = y7bat['_createSound']();
    }rdu9ke(y7bat, 'laya.wx.mini.MiniSound', xv3njg);var phzi_ = y7bat['prototype'];return phzi_['load'] = function (w246sr) {
      var $abt = this,
          mpzi_h;function wv3gn8() {
        if (null != y7bat['_null']) $abt['_sound']['onCanplay'](y7bat['_null']), $abt['_sound']['onError'](y7bat['_null']);else try {
          $abt['_sound']['onCanplay'](null), $abt['_sound']['onError'](null), y7bat['_null'] = null;
        } catch (ogxc) {
          console['warn']('[wxmini] _clearSound:' + ogxc), $abt['_sound']['onCanplay'](a7ytbf), $abt['_sound']['onError'](a7ytbf), y7bat['_null'] = a7ytbf;
        }
      }function a7ytbf() {}w246sr = bh7fa['formatURL'](w246sr), this['url'] = w246sr, y7bat['_audioCache'][w246sr] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        wv3gn8(), mpzi_h['loaded'] = !0x0, mpzi_h['event']('complete'), y7bat['_audioCache'][mpzi_h['url']] = mpzi_h;
      }), this['_sound']['onError'](function (vj3) {
        console['error']('errCode=' + vj3['errCode'] + '  errMsg=' + vj3['errMsg']), wv3gn8(), mpzi_h['event']('error');
      }), this['_sound']['src'] = w246sr, mpzi_h = this);
    }, phzi_['play'] = function (_pb7ih, ab7ph) {
      void 0x0 === _pb7ih && (_pb7ih = 0x0), void 0x0 === ab7ph && (ab7ph = 0x0), (nx3jg = this['url'] == nwg83v['_tMusic'] ? (y7bat['_musicAudio'] || (y7bat['_musicAudio'] = y7bat['_createSound']()), y7bat['_musicAudio']) : y7bat['_createSound']())['src'] = this['url'];var nx3jg = new xj3ong(nx3jg);return nx3jg['url'] = this['url'], nx3jg['loops'] = ab7ph, nx3jg['startTime'] = _pb7ih, nx3jg['play'](), nwg83v['addChannel'](nx3jg), nx3jg;
    }, phzi_['dispose'] = function () {
      var dq$k10 = y7bat['_audioCache'][this['url']];dq$k10 && (dq$k10['src'] = '', delete y7bat['_audioCache'][this['url']]);
    }, r4s692(0x0, phzi_, 'duration', function () {
      return this['_sound']['duration'];
    }), y7bat['_createSound'] = function () {
      return y7bat['_id']++, onxjgc['window']['wx']['createInnerAudioContext']();
    }, y7bat['_musicAudio'] = null, y7bat['_id'] = 0x0, y7bat['_audioCache'] = {}, y7bat['_null'] = void 0x0, y7bat;
  }(),
      xj3ong = function () {
    function t1y0a(ws46r2) {
      this['_audio'] = null, this['_onEnd'] = null, t1y0a['__super']['call'](this), this['_audio'] = ws46r2, this['_onEnd'] = n8w4['bind'](this['__onEnd'], this), ws46r2['onEnded'](this['_onEnd']);
    }rdu9ke(t1y0a, 'laya.wx.mini.MiniSoundChannel', d$1q0t);var gx3njv = t1y0a['prototype'];return gx3njv['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (k1q0d['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gx3njv['__onNull'] = function () {}, gx3njv['play'] = function () {
      this['isStopped'] = !0x1, nwg83v['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, gx3njv['stop'] = function () {
      if (this['isStopped'] = !0x0, nwg83v['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != t1y0a['_null']) this['_audio']['onEnded'](t1y0a['_null']);else try {
          this['_audio']['onEnded'](null), t1y0a['_null'] = null;
        } catch (ayt$bf) {
          console['warn']('[wxmini] stop:' + ayt$bf), this['_audio']['onEnded'](n8w4['bind'](this['__onNull'], this)), t1y0a['_null'] = n8w4['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, gx3njv['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, gx3njv['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, nwg83v['addChannel'](this), this['_audio']['play']());
    }, r4s692(0x0, gx3njv, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), r4s692(0x0, gx3njv, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), r4s692(0x0, gx3njv, 'volume', function () {
      return 0x1;
    }, function (dqk10$) {}), t1y0a['_null'] = void 0x0, t1y0a;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (dkq9e, nvgx3j) {
  'use strict';

  for (var him_pz in Object['defineProperty'](nvgx3j, '__esModule', { 'value': !0x0 }), Laya) {
    var wrs42 = Laya[him_pz];wrs42 && wrs42['__isclass'] && (nvgx3j[him_pz] = wrs42);
  }
});