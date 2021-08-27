var a_ = wx.$d;
!function (ap42u, nheq) {
  nheq['un'], nheq['uns'];var wld7b30 = nheq['static'],
      a8gc_fm = nheq['class'],
      put628 = nheq['getset'];nheq['__newvec'];var p842uc = laya['utils']['Browser'],
      l0ifd = (laya['events']['Event'], laya['events']['EventDispatcher']),
      u2jp6o = laya['resource']['HTMLImage'],
      y1kjo = laya['utils']['Handler'],
      ok1j6ty = laya['display']['Input'],
      s$h5ne = laya['net']['Loader'];laya['maths']['Matrix'];var gcf8ma4 = laya['renders']['Render'],
      ev9qn = laya['utils']['RunDriver'];laya['media']['Sound'];var fc_gz = laya['media']['SoundChannel'],
      ifm_zcg = laya['media']['SoundManager'],
      mguac8 = (laya['display']['Stage'], laya['net']['URL']),
      gm8caf_ = laya['utils']['Utils'],
      v9qy1k = (a8gc_fm(e5svn$, 'laya.wx.mini.MiniAdpter'), e5svn$['getJson'] = function (yqo1j9k) {
    return JSON['parse'](yqo1j9k);
  }, e5svn$['init'] = function (c8apmu, icfmg_) {
    void 0x0 === c8apmu && (c8apmu = !0x1), void 0x0 === icfmg_ && (icfmg_ = !0x1), e5svn$['_inited'] || (e5svn$['window'] = ap42u)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (e5svn$['_inited'] = !0x0, e5svn$['isZiYu'] = icfmg_, e5svn$['isPosMsgYu'] = c8apmu, e5svn$['EnvConfig'] = {}, e5svn$['isZiYu'] || (t6uj2op['setNativeFileDir']('/layaairGame'), t6uj2op['existDir'](t6uj2op['fileNativeDir'], y1kjo['create'](e5svn$, e5svn$['onMkdirCallBack']))), e5svn$['window']['focus'] = function () {}, nheq['getUrlPath'] = function () {}, e5svn$['window']['logtime'] = function (ligfdz) {}, e5svn$['window']['alertTimeLog'] = function (_0zwdl) {}, e5svn$['window']['resetShareInfo'] = function () {}, e5svn$['window']['CanvasRenderingContext2D'] = function () {}, e5svn$['window']['CanvasRenderingContext2D']['prototype'] = e5svn$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e5svn$['window']['document']['body']['appendChild'] = function () {}, e5svn$['EnvConfig']['pixelRatioInt'] = 0x0, ev9qn['getPixelRatio'] = e5svn$['pixelRatio'], e5svn$['_preCreateElement'] = p842uc['createElement'], p842uc['createElement'] = e5svn$['createElement'], ev9qn['createShaderCondition'] = e5svn$['createShaderCondition'], gm8caf_['parseXMLFromString'] = e5svn$['parseXMLFromString'], ok1j6ty['_createInputElement'] = au24p8c['_createInputElement'], e5svn$['EnvConfig']['load'] = s$h5ne['prototype']['load'], s$h5ne['prototype']['load'] = kqv1n9['prototype']['load'], e5svn$['isZiYu'] && c8apmu && wx['onMessage'](function (sv$nh9) {
      sv$nh9['isLoad'] && (t6uj2op['ziyuFileData'][sv$nh9['url']] = sv$nh9['data']);
    }));
  }, e5svn$['onMkdirCallBack'] = function (z_mifcg, xdw30) {
    z_mifcg || (t6uj2op['filesListObj'] = JSON['parse'](xdw30['data']));
  }, e5svn$['pixelRatio'] = function () {
    if (!e5svn$['EnvConfig']['pixelRatioInt']) try {
      var yj2t6ko = wx['getSystemInfoSync']();return e5svn$['EnvConfig']['pixelRatioInt'] = yj2t6ko['pixelRatio'], yj2t6ko['pixelRatio'];
    } catch (f4acgm) {}return e5svn$['EnvConfig']['pixelRatioInt'];
  }, e5svn$['createElement'] = function (zf0li) {
    var b70l3w;if ('canvas' == zf0li) return 0x1 == e5svn$['idx'] ? e5svn$['isZiYu'] ? (b70l3w = sharedCanvas)['style'] = {} : b70l3w = ap42u['canvas'] : b70l3w = ap42u['wx']['createCanvas'](), e5svn$['idx']++, b70l3w;if ('textarea' == zf0li || 'input' == zf0li) return e5svn$['onCreateInput'](zf0li);if ('div' != zf0li) return e5svn$['_preCreateElement'](zf0li);return zf0li = e5svn$['_preCreateElement'](zf0li), (zf0li['contains'] = function (p8t26u4) {
      return null;
    }, zf0li['removeChild'] = function (li_gz) {}, zf0li);
  }, e5svn$['onCreateInput'] = function (h9q1j) {
    return h9q1j = e5svn$['_preCreateElement'](h9q1j), (h9q1j['focus'] = au24p8c['wxinputFocus'], h9q1j['blur'] = au24p8c['wxinputblur'], h9q1j['style'] = {}, h9q1j['value'] = 0x0, h9q1j['parentElement'] = {}, h9q1j['placeholder'] = {}, h9q1j['type'] = {}, h9q1j['setColor'] = function (dzwi_l) {}, h9q1j['setType'] = function (lzif_d0) {}, h9q1j['setFontFace'] = function (zwdl0_) {}, h9q1j['addEventListener'] = function (neq$9v) {}, h9q1j['contains'] = function (uac84p) {
      return null;
    }, h9q1j['removeChild'] = function (a_mz) {}, h9q1j);
  }, e5svn$['createShaderCondition'] = function (wd07lb) {
    var ap4c2u8 = this;return function () {
      return ap4c2u8[wd07lb['replace']('this.', '')];
    };
  }, e5svn$['EnvConfig'] = null, e5svn$['window'] = null, e5svn$['_preCreateElement'] = null, e5svn$['_inited'] = !0x1, e5svn$['wxRequest'] = null, e5svn$['systemInfo'] = null, e5svn$['version'] = '0.0.1', e5svn$['isZiYu'] = !0x1, e5svn$['isPosMsgYu'] = !0x1, e5svn$['parseXMLFromString'] = function (hy1vq9) {
    var _zdgil;hy1vq9 = hy1vq9['replace'](/>\s+</g, '><');try {
      _zdgil = new ap42u['Parser']['DOMParser']()['parseFromString'](hy1vq9, 'text/xml');
    } catch (t2pjyo6) {
      throw '需要引入xml解析库文件';
    }return _zdgil;
  }, e5svn$['idx'] = 0x1, e5svn$);function e5svn$() {}a8gc_fm(o2jtp6y, 'laya.wx.mini.MiniImage'), o2jtp6y['prototype']['_loadImage'] = function (hqn$e) {
    var gfmacz_ = !0x1;-0x1 == hqn$e['indexOf']('layaNativeDir/') && (gfmacz_ = !0x0, hqn$e = mguac8['formatURL'](hqn$e)), t6uj2op['getFileInfo'](hqn$e) ? o2jtp6y['onCreateImage'](hqn$e, this, !gfmacz_) : -0x1 != hqn$e['indexOf']('http://') || -0x1 != hqn$e['indexOf']('https://') ? t6uj2op['downImg'](hqn$e, new y1kjo(o2jtp6y, o2jtp6y['onDownImgCallBack'], [hqn$e, this]), hqn$e) : o2jtp6y['onCreateImage'](hqn$e, this, !0x0);
  }, o2jtp6y['onDownImgCallBack'] = function (sn5$evh, ojyt1q, h1qv9nk) {
    h1qv9nk ? ojyt1q['onError'](null) : o2jtp6y['onCreateImage'](sn5$evh, ojyt1q);
  }, o2jtp6y['onCreateImage'] = function (bd307w, u4p8cm, gcim_zf) {
    var nhes9v$, mzcf_ag;function f_lid0z() {
      mzcf_ag['onload'] = null, mzcf_ag['onerror'] = null, delete u4p8cm['imgCache'][bd307w];
    }nhes9v$ = (gcim_zf = void 0x0 === gcim_zf ? !0x1 : gcim_zf) ? bd307w : (op6jy = t6uj2op['getFileInfo'](bd307w)['md5'], t6uj2op['getFileNativePath'](op6jy)), null == u4p8cm['imgCache'] && (u4p8cm['imgCache'] = {}), gcim_zf = function () {
      f_lid0z(), u4p8cm['onLoaded'](mzcf_ag);
    };var op6jy = function () {
      f_lid0z(), u4p8cm['event']('error', 'Load image failed');
    };'nativeimage' == u4p8cm['_type'] ? ((mzcf_ag = new p842uc['window']['Image']())['crossOrigin'] = '', mzcf_ag['onload'] = gcim_zf, mzcf_ag['onerror'] = op6jy, mzcf_ag['src'] = nhes9v$, u4p8cm['imgCache'][bd307w] = mzcf_ag) : new u2jp6o['create'](nhes9v$, { 'onload': gcim_zf, 'onerror': op6jy, 'onCreate': function (_imlf) {
        mzcf_ag = _imlf, u4p8cm['imgCache'][bd307w] = _imlf;
      } });
  };function o2jtp6y() {}var au24p8c = (a8gc_fm(c4mpua8, 'laya.wx.mini.MiniInput'), c4mpua8['_createInputElement'] = function () {
    ok1j6ty['_initInput'](ok1j6ty['area'] = p842uc['createElement']('textarea')), ok1j6ty['_initInput'](ok1j6ty['input'] = p842uc['createElement']('input')), ok1j6ty['inputContainer'] = p842uc['createElement']('div'), ok1j6ty['inputContainer']['style']['position'] = 'absolute', ok1j6ty['inputContainer']['style']['zIndex'] = 0x186a0, p842uc['container']['appendChild'](ok1j6ty['inputContainer']), ok1j6ty['inputContainer']['setPos'] = function (l_f0zid, fid_l) {
      ok1j6ty['inputContainer']['style']['left'] = l_f0zid + 'px', ok1j6ty['inputContainer']['style']['top'] = fid_l + 'px';
    }, nheq['stage']['on']('resize', null, c4mpua8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hv$ens5) {
      ap42u['dispatchEvent'] && ap42u['dispatchEvent']('resize');
    }), ifm_zcg['_soundClass'] = $h9vns, ifm_zcg['_musicClass'] = $h9vns;
  }, c4mpua8['_onStageResize'] = function () {
    nheq['stage']['_canvasTransform']['identity']()['scale'](p842uc['width'] / gcf8ma4['canvas']['width'] / ev9qn['getPixelRatio'](), p842uc['height'] / gcf8ma4['canvas']['height'] / ev9qn['getPixelRatio']());
  }, c4mpua8['wxinputFocus'] = function (dz_figl) {
    var pc82a = ok1j6ty['inputElement']['target'];pc82a && !pc82a['editable'] || (v9qy1k['window']['wx']['offKeyboardConfirm'](), v9qy1k['window']['wx']['offKeyboardInput'](), v9qy1k['window']['wx']['showKeyboard']({ 'defaultValue': pc82a['text'], 'maxLength': pc82a['maxChars'], 'multiple': pc82a['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (di_zlf0) {}, 'fail': function (v$hn9e) {} }), v9qy1k['window']['wx']['onKeyboardConfirm'](function (k6to1) {
      k6to1 = k6to1 ? k6to1['value'] : '', (pc82a['text'] = k6to1, pc82a['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), v9qy1k['window']['wx']['onKeyboardInput'](function (hvk1) {
      hvk1 = hvk1 ? hvk1['value'] : '', pc82a['multiline'] || -0x1 == hvk1['indexOf']('\x0a') ? (pc82a['text'] = hvk1, pc82a['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, c4mpua8['inputEnter'] = function () {
    ok1j6ty['inputElement']['target']['focus'] = !0x1;
  }, c4mpua8['wxinputblur'] = function () {
    c4mpua8['hideKeyboard']();
  }, c4mpua8['hideKeyboard'] = function () {
    v9qy1k['window']['wx']['offKeyboardConfirm'](), v9qy1k['window']['wx']['offKeyboardInput'](), v9qy1k['window']['wx']['hideKeyboard']({ 'success': function (knv19h) {
        console['log']('隐藏键盘');
      }, 'fail': function (e$nvqh) {
        console['log']('隐藏键盘出错:' + (e$nvqh ? e$nvqh['errMsg'] : ''));
      } });
  }, c4mpua8);function c4mpua8() {}var kqv1n9 = function () {
    function nvse5h() {}a8gc_fm(nvse5h, 'laya.wx.mini.MiniLoader');var yq9jo = nvse5h['prototype'];return yq9jo['load'] = function (uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2) {
      void 0x0 === d7x && (d7x = !0x0), void 0x0 === pty6oj2 && (pty6oj2 = !0x1);var z_lig = this;0x0 === (z_lig['_url'] = uo6tp2j)['indexOf']('data:image') ? z_lig['_type'] = ziw3d0 = 'image' : z_lig['_type'] = ziw3d0 = ziw3d0 || z_lig['getTypeFromUrl'](uo6tp2j), z_lig['_cache'] = d7x, z_lig['_data'] = null;var lizw0d_ = 'ascii';-0x1 != uo6tp2j['indexOf']('.fnt') ? lizw0d_ = 'utf8' : 'arraybuffer' == ziw3d0 && (lizw0d_ = '');var qkhnv9 = gm8caf_['getFileExtension'](uo6tp2j);if (-0x1 != nvse5h['_fileTypeArr']['indexOf'](qkhnv9)) v9qy1k['EnvConfig']['load']['call'](this, uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2);else {
        if (t6uj2op['getFileInfo'](uo6tp2j)) v9qy1k['EnvConfig']['load']['call'](this, uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2);else {
          if (-0x1 != uo6tp2j['indexOf']('layaNativeDir/')) {
            if (v9qy1k['isZiYu']) {
              var $9nvqh = t6uj2op['ziyuFileData'][uo6tp2j];return void z_lig['onLoaded']($9nvqh);
            }return cosnole['log']('read read'), void t6uj2op['read'](uo6tp2j, lizw0d_, new y1kjo(nvse5h, nvse5h['onReadNativeCallBack'], [lizw0d_, uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2, z_lig]));
          }$9nvqh = '' == mguac8['rootPath'] ? uo6tp2j : uo6tp2j['split'](mguac8['rootPath'])[0x0], -0x1 != uo6tp2j['indexOf']('http://') || -0x1 != uo6tp2j['indexOf']('https://') ? v9qy1k['EnvConfig']['load']['call'](z_lig, uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2) : t6uj2op['readFile']($9nvqh, lizw0d_, new y1kjo(nvse5h, nvse5h['onReadNativeCallBack'], [lizw0d_, uo6tp2j, ziw3d0, d7x, jp6u2t, pty6oj2, z_lig]), uo6tp2j);
        }
      }
    }, yq9jo['resMgrLoad'] = function (pa6824u, cm4au8, m_fzgic, k91jhqy, gzlf_, a8mu4pc, qk1hn9v) {
      void 0x0 === m_fzgic && (m_fzgic = 0x0), void 0x0 === k91jhqy && (k91jhqy = !0x1), void 0x0 === gzlf_ && (gzlf_ = !0x1), void 0x0 === a8mu4pc && (a8mu4pc = 0x0), void 0x0 === qk1hn9v && (qk1hn9v = 0x3), -0x1 != pa6824u['indexOf']('mpack') && console['log']('=============resMgrLoad url:', pa6824u), v9qy1k['EnvConfig']['resMgrLoad'](pa6824u, (_id0lz, kj19oy, yk1qot) => {
        nvse5h['prototype']['resMgrLoadCallBack'](_id0lz, kj19oy, yk1qot, cm4au8);
      }, m_fzgic, k91jhqy, gzlf_, a8mu4pc, qk1hn9v);
    }, yq9jo['resMgrLoadCallBack'] = function (khqn91, ag8cm_f, lf_dg, cgi_zm) {
      console['log']('buff:::', khqn91, lf_dg, t6uj2op['fileNativeDir'] + '///' + t6uj2op['fileListName']), cgi_zm(khqn91, ag8cm_f, lf_dg);
    }, yq9jo['clearRes'] = function (nhsev, mpau48) {
      this['clearRes'](nhsev, mpau48 = void 0x0 === mpau48 ? !0x1 : mpau48), mpau48 = t6uj2op['getFileInfo'](nhsev), !mpau48 || -0x1 == nhsev['indexOf']('http://') && -0x1 == nhsev['indexOf']('https://') || (mpau48 = mpau48['md5'], mpau48 = t6uj2op['getFileNativePath'](mpau48), t6uj2op['remove'](mpau48));
    }, nvse5h['onReadNativeCallBack'] = function ($nevrs, p268ua, p2tyo, t2ou6jp, giflz_d, tk16oyj, ga4cu8, nqvh9e, g8m_f) {
      void 0x0 === t2ou6jp && (t2ou6jp = !0x0), void 0x0 === tk16oyj && (tk16oyj = !0x1), (nqvh9e = void 0x0 === nqvh9e ? 0x0 : nqvh9e) ? 0x1 == nqvh9e && v9qy1k['EnvConfig']['load']['call'](ga4cu8, p268ua, p2tyo, t2ou6jp, giflz_d, tk16oyj) : (g8m_f = 'json' == p2tyo || 'atlas' == p2tyo ? v9qy1k['getJson'](g8m_f['data']) : 'xml' == p2tyo ? gm8caf_['parseXMLFromString'](g8m_f['data']) : g8m_f['data'], ga4cu8['onLoaded'](g8m_f), !v9qy1k['isZiYu'] && v9qy1k['isPosMsgYu'] && 'arraybuffer' != p2tyo && wx['postMessage']({ 'url': p268ua, 'data': g8m_f, 'isLoad': !0x0 }));
    }, wld7b30(nvse5h, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), nvse5h;
  }(),
      t6uj2op = (a8gc_fm(au28cp4, 'laya.wx.mini.MiniFileMgr', l0ifd), au28cp4['isLoadFile'] = function (p2auc4) {
    return -0x1 != au28cp4['_fileTypeArr']['indexOf'](p2auc4);
  }, au28cp4['getFileInfo'] = function (snr5ve$) {
    return snr5ve$ = snr5ve$['split']('?')[0x0], snr5ve$ = au28cp4['filesListObj'][snr5ve$], null == snr5ve$ ? null : snr5ve$;
  }, au28cp4['onFileUpdate'] = function (j6tpy, neh5v) {
    var dbl73w = j6tpy['split']('/');j6tpy = dbl73w[dbl73w['length'] - 0x1], dbl73w = au28cp4['getFileInfo'](neh5v), null == dbl73w ? au28cp4['onSaveFile'](neh5v, j6tpy) : dbl73w['readyUrl'] != neh5v && au28cp4['remove'](j6tpy, neh5v);
  }, au28cp4['exits'] = function (jt16kyo, e$9vn) {
    jt16kyo = au28cp4['getFileNativePath'](jt16kyo), au28cp4['fs']['getFileInfo']({ 'filePath': jt16kyo, 'success': function (m4fga8c) {
        null != e$9vn && e$9vn['runWith']([0x0, m4fga8c]);
      }, 'fail': function (cmg4f8a) {
        null != e$9vn && e$9vn['runWith']([0x1, cmg4f8a]);
      } });
  }, au28cp4['read'] = function (kojt62y, mac4p8u, hyqk91, q1kvnh) {
    void 0x0 === mac4p8u && (mac4p8u = 'ascill'), kojt62y = '' != (q1kvnh = void 0x0 === q1kvnh ? '' : q1kvnh) ? au28cp4['getFileNativePath'](kojt62y) : kojt62y, au28cp4['fs']['readFile']({ 'filePath': kojt62y, 'encoding': mac4p8u, 'success': function (a4gucm8) {
        null != hyqk91 && hyqk91['runWith']([0x0, a4gucm8]);
      }, 'fail': function (vk1h9) {
        vk1h9 && '' != q1kvnh ? au28cp4['down'](q1kvnh, mac4p8u, hyqk91, q1kvnh) : null != hyqk91 && hyqk91['runWith']([0x1]);
      } });
  }, au28cp4['readNativeFile'] = function (h1q9y, mup48a) {
    au28cp4['fs']['readFile']({ 'filePath': h1q9y, 'encoding': '', 'success': function (zgdli_f) {
        null != mup48a && mup48a['runWith']([0x0]);
      }, 'fail': function (pu286a4) {
        null != mup48a && mup48a['runWith']([0x1]);
      } });
  }, au28cp4['down'] = function (vqehn$, j2pot6y, yqhkv, bx07dw3) {
    void 0x0 === j2pot6y && (j2pot6y = 'ascill'), void 0x0 === bx07dw3 && (bx07dw3 = '');var cgmfa8_ = au28cp4['getFileNativePath'](bx07dw3);au28cp4['wxdown']({ 'url': vqehn$, 'filePath': cgmfa8_, 'success': function (cg4um8a) {
        0xc8 === cg4um8a['statusCode'] && au28cp4['readFile'](cg4um8a['filePath'], j2pot6y, yqhkv, bx07dw3);
      }, 'fail': function (cm8gua) {
        null != yqhkv && yqhkv['runWith']([0x1, cm8gua]);
      } })['onProgressUpdate'](function (i_mfgzl) {
      null != yqhkv && yqhkv['runWith']([0x2, i_mfgzl['progress']]);
    });
  }, au28cp4['readFile'] = function (k9yq1jh, v9nsh, l07wbd3, p8au642) {
    void 0x0 === p8au642 && (p8au642 = ''), au28cp4['fs']['readFile']({ 'filePath': k9yq1jh, 'encoding': v9nsh = void 0x0 === v9nsh ? 'ascill' : v9nsh, 'success': function (gfizd_) {
        -0x1 == k9yq1jh['indexOf']('http://') && -0x1 == k9yq1jh['indexOf']('https://') || au28cp4['onFileUpdate'](k9yq1jh, p8au642), null != l07wbd3 && l07wbd3['runWith']([0x0, gfizd_]);
      }, 'fail': function (r5ven$) {
        r5ven$ && null != l07wbd3 && l07wbd3['runWith']([0x1, r5ven$]);
      } });
  }, au28cp4['downImg'] = function (zg_cam, bwd30l, caz_mfg) {
    void 0x0 === caz_mfg && (caz_mfg = ''), au28cp4['wxdown']({ 'url': zg_cam, 'success': function (fid_g) {
        0xc8 === fid_g['statusCode'] && au28cp4['copyFile'](fid_g['tempFilePath'], caz_mfg, bwd30l);
      }, 'fail': function (shven5$) {
        null != bwd30l && bwd30l['runWith']([0x1, shven5$]);
      } });
  }, au28cp4['copyFile'] = function (nevs5$h, xd0w7b, l0wd3ib) {
    var fg_mzic = nevs5$h['split']('/'),
        aug8cm4 = fg_mzic[fg_mzic['length'] - 0x1];xd0w7b['split']('?')[0x0];var z_gamc = au28cp4['getFileInfo'](xd0w7b);fg_mzic = au28cp4['getFileNativePath'](aug8cm4), au28cp4['fs']['copyFile']({ 'srcPath': nevs5$h, 'destPath': fg_mzic, 'success': function (acum) {
        z_gamc ? z_gamc['readyUrl'] != xd0w7b && au28cp4['remove'](aug8cm4, xd0w7b, l0wd3ib) : (au28cp4['onSaveFile'](xd0w7b, aug8cm4), null != l0wd3ib && l0wd3ib['runWith']([0x0]));
      }, 'fail': function (uo46tp) {
        null != l0wd3ib && l0wd3ib['runWith']([0x1, uo46tp]);
      } });
  }, au28cp4['getFileNativePath'] = function (dw0zli) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dw0zli;
  }, au28cp4['remove'] = function (aucm, ky9vh1q, cafg_m8) {
    void 0x0 === ky9vh1q && (ky9vh1q = '');var nr$5e = au28cp4['getFileInfo'](ky9vh1q),
        c4a8u2p = au28cp4['getFileNativePath'](nr$5e['md5']);nheq['loader']['clearRes'](nr$5e['readyUrl']), au28cp4['fs']['unlink']({ 'filePath': c4a8u2p, 'success': function (m_igfc) {
        '' != ky9vh1q && au28cp4['onSaveFile'](ky9vh1q, aucm), null != cafg_m8 && cafg_m8['runWith']([0x0]);
      }, 'fail': function (f_lzim) {} });
  }, au28cp4['onSaveFile'] = function (vh$9nqe, kojqy1t) {
    var yk1oqj9 = vh$9nqe['split']('?')[0x0];au28cp4['filesListObj'][yk1oqj9] = { 'md5': kojqy1t, 'readyUrl': vh$9nqe }, au28cp4['fs']['writeFile']({ 'filePath': au28cp4['fileNativeDir'] + '/' + au28cp4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](au28cp4['filesListObj']), 'success': function (tu26p8) {
        console['log']('写入测试测试成功：', tu26p8);
      }, 'fail': function (f0dl_i) {
        console['log']('写入测试测试失败：', f0dl_i);
      } });
  }, au28cp4['existDir'] = function ($5rnsv, dw7b3l) {
    au28cp4['fs']['mkdir']({ 'dirPath': $5rnsv, 'success': function (gmc8f4a) {
        null != dw7b3l && dw7b3l['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (o1j6yt) {
        -0x1 != o1j6yt['errMsg']['indexOf']('file already exists') ? au28cp4['readSync'](au28cp4['fileListName'], 'utf8', dw7b3l) : null != dw7b3l && dw7b3l['runWith']([0x1, o1j6yt]);
      } });
  }, au28cp4['readSync'] = function (lgzmif_, s5h$, $enhv, h9yvq1) {
    void 0x0 === s5h$ && (s5h$ = 'ascill'), void 0x0 === h9yvq1 && (h9yvq1 = ''), lgzmif_ = au28cp4['getFileNativePath'](lgzmif_);var fizgl;try {
      fizgl = au28cp4['fs']['readFileSync'](lgzmif_), null != $enhv && $enhv['runWith']([0x0, { 'data': fizgl }]);
    } catch (kyt1j6o) {
      null != $enhv && $enhv['runWith']([0x1]);
    }
  }, au28cp4['readCache'] = function () {}, au28cp4['writeCache'] = function (yjpto2) {
    var a482uc = readyUrl['split']('?')[0x0];au28cp4['filesListObj'][a482uc] = { 'md5': md5Name, 'readyUrl': readyUrl }, au28cp4['fs']['writeFile']({ 'filePath': au28cp4['fileNativeDir'] + '/' + au28cp4['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](au28cp4['filesListObj']), 'success': function (igflzm) {}, 'fail': function (fm_azc) {} });
  }, au28cp4['setNativeFileDir'] = function (hevs$n9) {
    au28cp4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hevs$n9;
  }, au28cp4['filesListObj'] = {}, au28cp4['fileNativeDir'] = null, au28cp4['fileListName'] = 'layaairfiles.txt', au28cp4['ziyuFileData'] = {}, wld7b30(au28cp4, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), au28cp4);function au28cp4() {
    au28cp4['__super']['call'](this);
  }var $h9vns = function () {
    function jty16o() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, jty16o['__super']['call'](this), this['_sound'] = jty16o['_createSound']();
    }a8gc_fm(jty16o, 'laya.wx.mini.MiniSound', l0ifd);var l3wdzi0 = jty16o['prototype'];return l3wdzi0['load'] = function (widz_) {
      var ot264p = this,
          yk19oqj;function y1otkj() {
        if (null != jty16o['_null']) ot264p['_sound']['onCanplay'](jty16o['_null']), ot264p['_sound']['onError'](jty16o['_null']);else try {
          ot264p['_sound']['onCanplay'](null), ot264p['_sound']['onError'](null), jty16o['_null'] = null;
        } catch (nesv5h$) {
          console['warn']('[wxmini] _clearSound:' + nesv5h$), ot264p['_sound']['onCanplay'](h5vnes), ot264p['_sound']['onError'](h5vnes), jty16o['_null'] = h5vnes;
        }
      }function h5vnes() {}widz_ = mguac8['formatURL'](widz_), this['url'] = widz_, jty16o['_audioCache'][widz_] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        y1otkj(), yk19oqj['loaded'] = !0x0, yk19oqj['event']('complete'), jty16o['_audioCache'][yk19oqj['url']] = yk19oqj;
      }), this['_sound']['onError'](function (tu6j2op) {
        console['error']('errCode=' + tu6j2op['errCode'] + '  errMsg=' + tu6j2op['errMsg']), y1otkj(), yk19oqj['event']('error');
      }), this['_sound']['src'] = widz_, yk19oqj = this);
    }, l3wdzi0['play'] = function (w3dx07b, bi0) {
      void 0x0 === w3dx07b && (w3dx07b = 0x0), void 0x0 === bi0 && (bi0 = 0x0), (nqhk91v = this['url'] == ifm_zcg['_tMusic'] ? (jty16o['_musicAudio'] || (jty16o['_musicAudio'] = jty16o['_createSound']()), jty16o['_musicAudio']) : jty16o['_createSound']())['src'] = this['url'];var nqhk91v = new vn9eh$q(nqhk91v);return nqhk91v['url'] = this['url'], nqhk91v['loops'] = bi0, nqhk91v['startTime'] = w3dx07b, nqhk91v['play'](), ifm_zcg['addChannel'](nqhk91v), nqhk91v;
    }, l3wdzi0['dispose'] = function () {
      var dziglf_ = jty16o['_audioCache'][this['url']];dziglf_ && (dziglf_['src'] = '', delete jty16o['_audioCache'][this['url']]);
    }, put628(0x0, l3wdzi0, 'duration', function () {
      return this['_sound']['duration'];
    }), jty16o['_createSound'] = function () {
      return jty16o['_id']++, v9qy1k['window']['wx']['createInnerAudioContext']();
    }, jty16o['_musicAudio'] = null, jty16o['_id'] = 0x0, jty16o['_audioCache'] = {}, jty16o['_null'] = void 0x0, jty16o;
  }(),
      vn9eh$q = function () {
    function zd0wl_(h9q$ev) {
      this['_audio'] = null, this['_onEnd'] = null, zd0wl_['__super']['call'](this), this['_audio'] = h9q$ev, this['_onEnd'] = gm8caf_['bind'](this['__onEnd'], this), h9q$ev['onEnded'](this['_onEnd']);
    }a8gc_fm(zd0wl_, 'laya.wx.mini.MiniSoundChannel', fc_gz);var hk9v1qn = zd0wl_['prototype'];return hk9v1qn['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (nheq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, hk9v1qn['__onNull'] = function () {}, hk9v1qn['play'] = function () {
      this['isStopped'] = !0x1, ifm_zcg['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, hk9v1qn['stop'] = function () {
      if (this['isStopped'] = !0x0, ifm_zcg['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != zd0wl_['_null']) this['_audio']['onEnded'](zd0wl_['_null']);else try {
          this['_audio']['onEnded'](null), zd0wl_['_null'] = null;
        } catch (q9jo1yk) {
          console['warn']('[wxmini] stop:' + q9jo1yk), this['_audio']['onEnded'](gm8caf_['bind'](this['__onNull'], this)), zd0wl_['_null'] = gm8caf_['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, hk9v1qn['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, hk9v1qn['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, ifm_zcg['addChannel'](this), this['_audio']['play']());
    }, put628(0x0, hk9v1qn, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), put628(0x0, hk9v1qn, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), put628(0x0, hk9v1qn, 'volume', function () {
      return 0x1;
    }, function (jykqot) {}), zd0wl_['_null'] = void 0x0, zd0wl_;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (s$h5ev, qokyj91) {
  'use strict';
  for (var $vnqeh in Object['defineProperty'](qokyj91, '__esModule', { 'value': !0x0 }), Laya) {
    var ibdlw0 = Laya[$vnqeh];ibdlw0 && ibdlw0['__isclass'] && (qokyj91[$vnqeh] = ibdlw0);
  }
});