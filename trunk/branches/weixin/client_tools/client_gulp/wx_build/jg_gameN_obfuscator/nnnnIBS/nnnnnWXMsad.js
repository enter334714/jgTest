var A = wx.$N;
!function (xsvcg1, t5cg17) {
  t5cg17['un'], t5cg17['uns'];var csvxi = t5cg17['static'],
      gc7x15 = t5cg17['class'],
      ry9qz = t5cg17['getset'];t5cg17['__newvec'];var o3zry4 = laya['utils']['Browser'],
      bq94$ = (laya['events']['Event'], laya['events']['EventDispatcher']),
      wq6ba = laya['resource']['HTMLImage'],
      ixvck = laya['utils']['Handler'],
      v1sgxc = laya['display']['Input'],
      fm_u8h = laya['net']['Loader'];laya['maths']['Matrix'];var nmuh_8 = laya['renders']['Render'],
      hd_t = laya['utils']['RunDriver'];laya['media']['Sound'];var sxkc1 = laya['media']['SoundChannel'],
      vkx = laya['media']['SoundManager'],
      gx5c = (laya['display']['Stage'], laya['net']['URL']),
      g7x1c5 = laya['utils']['Utils'],
      d85hft = (gc7x15(mhn_u8, 'laya.wx.mini.MiniAdpter'), mhn_u8['getJson'] = function (le30z) {
    return JSON['parse'](le30z);
  }, mhn_u8['init'] = function (h_8muf, wq$b6) {
    void 0x0 === h_8muf && (h_8muf = !0x1), void 0x0 === wq$b6 && (wq$b6 = !0x1), mhn_u8['_inited'] || (mhn_u8['window'] = xsvcg1)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (mhn_u8['_inited'] = !0x0, mhn_u8['isZiYu'] = wq$b6, mhn_u8['isPosMsgYu'] = h_8muf, mhn_u8['EnvConfig'] = {}, mhn_u8['isZiYu'] || (yzqr49['setNativeFileDir']('/layaairGame'), yzqr49['existDir'](yzqr49['fileNativeDir'], ixvck['create'](mhn_u8, mhn_u8['onMkdirCallBack']))), mhn_u8['window']['focus'] = function () {}, t5cg17['getUrlPath'] = function () {}, mhn_u8['window']['logtime'] = function (z30eo) {}, mhn_u8['window']['alertTimeLog'] = function (wq$br9) {}, mhn_u8['window']['resetShareInfo'] = function () {}, mhn_u8['window']['CanvasRenderingContext2D'] = function () {}, mhn_u8['window']['CanvasRenderingContext2D']['prototype'] = mhn_u8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mhn_u8['window']['document']['body']['appendChild'] = function () {}, mhn_u8['EnvConfig']['pixelRatioInt'] = 0x0, hd_t['getPixelRatio'] = mhn_u8['pixelRatio'], mhn_u8['_preCreateElement'] = o3zry4['createElement'], o3zry4['createElement'] = mhn_u8['createElement'], hd_t['createShaderCondition'] = mhn_u8['createShaderCondition'], g7x1c5['parseXMLFromString'] = mhn_u8['parseXMLFromString'], v1sgxc['_createInputElement'] = eo3yl['_createInputElement'], mhn_u8['EnvConfig']['load'] = fm_u8h['prototype']['load'], fm_u8h['prototype']['load'] = vcsgx['prototype']['load'], mhn_u8['isZiYu'] && h_8muf && wx['onMessage'](function (xikcv) {
      xikcv['isLoad'] && (yzqr49['ziyuFileData'][xikcv['url']] = xikcv['data']);
    }));
  }, mhn_u8['onMkdirCallBack'] = function (vpiks2, cvisxk) {
    vpiks2 || (yzqr49['filesListObj'] = JSON['parse'](cvisxk['data']));
  }, mhn_u8['pixelRatio'] = function () {
    if (!mhn_u8['EnvConfig']['pixelRatioInt']) try {
      var r$9wb = wx['getSystemInfoSync']();return mhn_u8['EnvConfig']['pixelRatioInt'] = r$9wb['pixelRatio'], r$9wb['pixelRatio'];
    } catch (oe3zly) {}return mhn_u8['EnvConfig']['pixelRatioInt'];
  }, mhn_u8['createElement'] = function (b6a$w) {
    var $q6wa;if ('canvas' == b6a$w) return 0x1 == mhn_u8['idx'] ? mhn_u8['isZiYu'] ? ($q6wa = sharedCanvas)['style'] = {} : $q6wa = xsvcg1['canvas'] : $q6wa = xsvcg1['wx']['createCanvas'](), mhn_u8['idx']++, $q6wa;if ('textarea' == b6a$w || 'input' == b6a$w) return mhn_u8['onCreateInput'](b6a$w);if ('div' != b6a$w) return mhn_u8['_preCreateElement'](b6a$w);return b6a$w = mhn_u8['_preCreateElement'](b6a$w), (b6a$w['contains'] = function (th8f5) {
      return null;
    }, b6a$w['removeChild'] = function (b9q4$) {}, b6a$w);
  }, mhn_u8['onCreateInput'] = function (csxkv1) {
    return csxkv1 = mhn_u8['_preCreateElement'](csxkv1), (csxkv1['focus'] = eo3yl['wxinputFocus'], csxkv1['blur'] = eo3yl['wxinputblur'], csxkv1['style'] = {}, csxkv1['value'] = 0x0, csxkv1['parentElement'] = {}, csxkv1['placeholder'] = {}, csxkv1['type'] = {}, csxkv1['setColor'] = function (gs71) {}, csxkv1['setType'] = function (elmjn0) {}, csxkv1['setFontFace'] = function (vi2sp) {}, csxkv1['addEventListener'] = function (u8nm_) {}, csxkv1['contains'] = function (j0mnle) {
      return null;
    }, csxkv1['removeChild'] = function (d7fth5) {}, csxkv1);
  }, mhn_u8['createShaderCondition'] = function (q$b49) {
    var uj0_nm = this;return function () {
      return uj0_nm[q$b49['replace']('this.', '')];
    };
  }, mhn_u8['EnvConfig'] = null, mhn_u8['window'] = null, mhn_u8['_preCreateElement'] = null, mhn_u8['_inited'] = !0x1, mhn_u8['wxRequest'] = null, mhn_u8['systemInfo'] = null, mhn_u8['version'] = '0.0.1', mhn_u8['isZiYu'] = !0x1, mhn_u8['isPosMsgYu'] = !0x1, mhn_u8['parseXMLFromString'] = function (t5fdg) {
    var d7tfg;t5fdg = t5fdg['replace'](/>\s+</g, '><');try {
      d7tfg = new xsvcg1['Parser']['DOMParser']()['parseFromString'](t5fdg, 'text/xml');
    } catch (csvxg1) {
      throw '需要引入xml解析库文件';
    }return d7tfg;
  }, mhn_u8['idx'] = 0x1, mhn_u8);function mhn_u8() {}gc7x15(ujm_0, 'laya.wx.mini.MiniImage'), ujm_0['prototype']['_loadImage'] = function (xcsg) {
    var le0m = !0x1;-0x1 == xcsg['indexOf']('layaNativeDir/') && (le0m = !0x0, xcsg = gx5c['formatURL'](xcsg)), yzqr49['getFileInfo'](xcsg) ? ujm_0['onCreateImage'](xcsg, this, !le0m) : -0x1 != xcsg['indexOf']('http://') || -0x1 != xcsg['indexOf']('https://') ? yzqr49['downImg'](xcsg, new ixvck(ujm_0, ujm_0['onDownImgCallBack'], [xcsg, this]), xcsg) : ujm_0['onCreateImage'](xcsg, this, !0x0);
  }, ujm_0['onDownImgCallBack'] = function (kxv2, v1sc, ezl3o) {
    ezl3o ? v1sc['onError'](null) : ujm_0['onCreateImage'](kxv2, v1sc);
  }, ujm_0['onCreateImage'] = function (julnm, lmjn0e, z9o4r) {
    var vx2s, f5dt8h;function _jnu8() {
      f5dt8h['onload'] = null, f5dt8h['onerror'] = null, delete lmjn0e['imgCache'][julnm];
    }vx2s = (z9o4r = void 0x0 === z9o4r ? !0x1 : z9o4r) ? julnm : (zelo3 = yzqr49['getFileInfo'](julnm)['md5'], yzqr49['getFileNativePath'](zelo3)), null == lmjn0e['imgCache'] && (lmjn0e['imgCache'] = {}), z9o4r = function () {
      _jnu8(), lmjn0e['onLoaded'](f5dt8h);
    };var zelo3 = function () {
      _jnu8(), lmjn0e['event']('error', 'Load image failed');
    };'nativeimage' == lmjn0e['_type'] ? ((f5dt8h = new o3zry4['window']['Image']())['crossOrigin'] = '', f5dt8h['onload'] = z9o4r, f5dt8h['onerror'] = zelo3, f5dt8h['src'] = vx2s, lmjn0e['imgCache'][julnm] = f5dt8h) : new wq6ba['create'](vx2s, { 'onload': z9o4r, 'onerror': zelo3, 'onCreate': function (qw6a$b) {
        f5dt8h = qw6a$b, lmjn0e['imgCache'][julnm] = qw6a$b;
      } });
  };function ujm_0() {}var eo3yl = (gc7x15(ivckx, 'laya.wx.mini.MiniInput'), ivckx['_createInputElement'] = function () {
    v1sgxc['_initInput'](v1sgxc['area'] = o3zry4['createElement']('textarea')), v1sgxc['_initInput'](v1sgxc['input'] = o3zry4['createElement']('input')), v1sgxc['inputContainer'] = o3zry4['createElement']('div'), v1sgxc['inputContainer']['style']['position'] = 'absolute', v1sgxc['inputContainer']['style']['zIndex'] = 0x186a0, o3zry4['container']['appendChild'](v1sgxc['inputContainer']), v1sgxc['inputContainer']['setPos'] = function (y3zo4r, brq4) {
      v1sgxc['inputContainer']['style']['left'] = y3zo4r + 'px', v1sgxc['inputContainer']['style']['top'] = brq4 + 'px';
    }, t5cg17['stage']['on']('resize', null, ivckx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f5t7h) {
      xsvcg1['dispatchEvent'] && xsvcg1['dispatchEvent']('resize');
    }), vkx['_soundClass'] = ljo03e, vkx['_musicClass'] = ljo03e;
  }, ivckx['_onStageResize'] = function () {
    t5cg17['stage']['_canvasTransform']['identity']()['scale'](o3zry4['width'] / nmuh_8['canvas']['width'] / hd_t['getPixelRatio'](), o3zry4['height'] / nmuh_8['canvas']['height'] / hd_t['getPixelRatio']());
  }, ivckx['wxinputFocus'] = function (gd5f7) {
    var c1sxvk = v1sgxc['inputElement']['target'];c1sxvk && !c1sxvk['editable'] || (d85hft['window']['wx']['offKeyboardConfirm'](), d85hft['window']['wx']['offKeyboardInput'](), d85hft['window']['wx']['showKeyboard']({ 'defaultValue': c1sxvk['text'], 'maxLength': c1sxvk['maxChars'], 'multiple': c1sxvk['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (cxv1ks) {}, 'fail': function (l0jumn) {} }), d85hft['window']['wx']['onKeyboardConfirm'](function (zq4) {
      zq4 = zq4 ? zq4['value'] : '', (c1sxvk['text'] = zq4, c1sxvk['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), d85hft['window']['wx']['onKeyboardInput'](function (n0jul) {
      n0jul = n0jul ? n0jul['value'] : '', c1sxvk['multiline'] || -0x1 == n0jul['indexOf']('\x0a') ? (c1sxvk['text'] = n0jul, c1sxvk['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, ivckx['inputEnter'] = function () {
    v1sgxc['inputElement']['target']['focus'] = !0x1;
  }, ivckx['wxinputblur'] = function () {
    ivckx['hideKeyboard']();
  }, ivckx['hideKeyboard'] = function () {
    d85hft['window']['wx']['offKeyboardConfirm'](), d85hft['window']['wx']['offKeyboardInput'](), d85hft['window']['wx']['hideKeyboard']({ 'success': function (ujnl0) {
        console['log']('隐藏键盘');
      }, 'fail': function ($rb9q4) {
        console['log']('隐藏键盘出错:' + ($rb9q4 ? $rb9q4['errMsg'] : ''));
      } });
  }, ivckx);function ivckx() {}var vcsgx = function () {
    function ft5gd7() {}gc7x15(ft5gd7, 'laya.wx.mini.MiniLoader');var m_0jn = ft5gd7['prototype'];return m_0jn['load'] = function (qw$rb, u0ml, vicxk, o0jle, g1cs) {
      void 0x0 === vicxk && (vicxk = !0x0), void 0x0 === g1cs && (g1cs = !0x1);var du_8fh = this;0x0 === (du_8fh['_url'] = qw$rb)['indexOf']('data:image') ? du_8fh['_type'] = u0ml = 'image' : du_8fh['_type'] = u0ml = u0ml || du_8fh['getTypeFromUrl'](qw$rb), du_8fh['_cache'] = vicxk, du_8fh['_data'] = null;var g71xc = 'ascii';-0x1 != qw$rb['indexOf']('.fnt') ? g71xc = 'utf8' : 'arraybuffer' == u0ml && (g71xc = '');var jn0lmu = g7x1c5['getFileExtension'](qw$rb);if (-0x1 != ft5gd7['_fileTypeArr']['indexOf'](jn0lmu)) d85hft['EnvConfig']['load']['call'](this, qw$rb, u0ml, vicxk, o0jle, g1cs);else {
        if (yzqr49['getFileInfo'](qw$rb)) d85hft['EnvConfig']['load']['call'](this, qw$rb, u0ml, vicxk, o0jle, g1cs);else {
          if (-0x1 != qw$rb['indexOf']('layaNativeDir/')) {
            if (d85hft['isZiYu']) {
              var g7x1 = yzqr49['ziyuFileData'][qw$rb];return void du_8fh['onLoaded'](g7x1);
            }return cosnole['log']('read read'), void yzqr49['read'](qw$rb, g71xc, new ixvck(ft5gd7, ft5gd7['onReadNativeCallBack'], [g71xc, qw$rb, u0ml, vicxk, o0jle, g1cs, du_8fh]));
          }g7x1 = '' == gx5c['rootPath'] ? qw$rb : qw$rb['split'](gx5c['rootPath'])[0x0], -0x1 != qw$rb['indexOf']('http://') || -0x1 != qw$rb['indexOf']('https://') ? d85hft['EnvConfig']['load']['call'](du_8fh, qw$rb, u0ml, vicxk, o0jle, g1cs) : yzqr49['readFile'](g7x1, g71xc, new ixvck(ft5gd7, ft5gd7['onReadNativeCallBack'], [g71xc, qw$rb, u0ml, vicxk, o0jle, g1cs, du_8fh]), qw$rb);
        }
      }
    }, m_0jn['resMgrLoad'] = function (uhf_m8, ufh8d, r4$qb, t75, yr49zq, dgf57t, df5ht8) {
      void 0x0 === r4$qb && (r4$qb = 0x0), void 0x0 === t75 && (t75 = !0x1), void 0x0 === yr49zq && (yr49zq = !0x1), void 0x0 === dgf57t && (dgf57t = 0x0), void 0x0 === df5ht8 && (df5ht8 = 0x3), -0x1 != uhf_m8['indexOf']('mpack') && console['log']('=============resMgrLoad url:', uhf_m8), d85hft['EnvConfig']['resMgrLoad'](uhf_m8, (s1xcg7, xg5c, b$6aq) => {
        ft5gd7['prototype']['resMgrLoadCallBack'](s1xcg7, xg5c, b$6aq, ufh8d);
      }, r4$qb, t75, yr49zq, dgf57t, df5ht8);
    }, m_0jn['resMgrLoadCallBack'] = function (royz4, u_8fdh, ivskp2, ks2v) {
      console['log']('buff:::', royz4, ivskp2, yzqr49['fileNativeDir'] + '///' + yzqr49['fileListName']), ks2v(royz4, u_8fdh, ivskp2);
    }, m_0jn['clearRes'] = function (_njum8, yzq) {
      this['clearRes'](_njum8, yzq = void 0x0 === yzq ? !0x1 : yzq), yzq = yzqr49['getFileInfo'](_njum8), !yzq || -0x1 == _njum8['indexOf']('http://') && -0x1 == _njum8['indexOf']('https://') || (yzq = yzq['md5'], yzq = yzqr49['getFileNativePath'](yzq), yzqr49['remove'](yzq));
    }, ft5gd7['onReadNativeCallBack'] = function (hufd, _m0n, lz0o, mn_j8, n3elj, s7xc, z30l, r9q4b, gc175) {
      void 0x0 === mn_j8 && (mn_j8 = !0x0), void 0x0 === s7xc && (s7xc = !0x1), (r9q4b = void 0x0 === r9q4b ? 0x0 : r9q4b) ? 0x1 == r9q4b && d85hft['EnvConfig']['load']['call'](z30l, _m0n, lz0o, mn_j8, n3elj, s7xc) : (gc175 = 'json' == lz0o || 'atlas' == lz0o ? d85hft['getJson'](gc175['data']) : 'xml' == lz0o ? g7x1c5['parseXMLFromString'](gc175['data']) : gc175['data'], z30l['onLoaded'](gc175), !d85hft['isZiYu'] && d85hft['isPosMsgYu'] && 'arraybuffer' != lz0o && wx['postMessage']({ 'url': _m0n, 'data': gc175, 'isLoad': !0x0 }));
    }, csvxi(ft5gd7, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), ft5gd7;
  }(),
      yzqr49 = (gc7x15(o43zry, 'laya.wx.mini.MiniFileMgr', bq94$), o43zry['isLoadFile'] = function (zyeo) {
    return -0x1 != o43zry['_fileTypeArr']['indexOf'](zyeo);
  }, o43zry['getFileInfo'] = function (ct5g1) {
    return ct5g1 = ct5g1['split']('?')[0x0], ct5g1 = o43zry['filesListObj'][ct5g1], null == ct5g1 ? null : ct5g1;
  }, o43zry['onFileUpdate'] = function (z4o9r, _m8fu) {
    var th_f8d = z4o9r['split']('/');z4o9r = th_f8d[th_f8d['length'] - 0x1], th_f8d = o43zry['getFileInfo'](_m8fu), null == th_f8d ? o43zry['onSaveFile'](_m8fu, z4o9r) : th_f8d['readyUrl'] != _m8fu && o43zry['remove'](z4o9r, _m8fu);
  }, o43zry['exits'] = function (_thf8, yqb4r9) {
    _thf8 = o43zry['getFileNativePath'](_thf8), o43zry['fs']['getFileInfo']({ 'filePath': _thf8, 'success': function (m_jn8) {
        null != yqb4r9 && yqb4r9['runWith']([0x0, m_jn8]);
      }, 'fail': function (jm_n8u) {
        null != yqb4r9 && yqb4r9['runWith']([0x1, jm_n8u]);
      } });
  }, o43zry['read'] = function (yo4rz9, oyz43r, n3le0, oz34ey) {
    void 0x0 === oyz43r && (oyz43r = 'ascill'), yo4rz9 = '' != (oz34ey = void 0x0 === oz34ey ? '' : oz34ey) ? o43zry['getFileNativePath'](yo4rz9) : yo4rz9, o43zry['fs']['readFile']({ 'filePath': yo4rz9, 'encoding': oyz43r, 'success': function (o3y4zr) {
        null != n3le0 && n3le0['runWith']([0x0, o3y4zr]);
      }, 'fail': function (e0l3n) {
        e0l3n && '' != oz34ey ? o43zry['down'](oz34ey, oyz43r, n3le0, oz34ey) : null != n3le0 && n3le0['runWith']([0x1]);
      } });
  }, o43zry['readNativeFile'] = function (bw$9q6, v1skx) {
    o43zry['fs']['readFile']({ 'filePath': bw$9q6, 'encoding': '', 'success': function (ufh_m) {
        null != v1skx && v1skx['runWith']([0x0]);
      }, 'fail': function (yo43r) {
        null != v1skx && v1skx['runWith']([0x1]);
      } });
  }, o43zry['down'] = function (byq4r, wr9bq, qa6b$, skip) {
    void 0x0 === wr9bq && (wr9bq = 'ascill'), void 0x0 === skip && (skip = '');var w9$bq = o43zry['getFileNativePath'](skip);o43zry['wxdown']({ 'url': byq4r, 'filePath': w9$bq, 'success': function (oze3l0) {
        0xc8 === oze3l0['statusCode'] && o43zry['readFile'](oze3l0['filePath'], wr9bq, qa6b$, skip);
      }, 'fail': function (byq) {
        null != qa6b$ && qa6b$['runWith']([0x1, byq]);
      } })['onProgressUpdate'](function (lezy3o) {
      null != qa6b$ && qa6b$['runWith']([0x2, lezy3o['progress']]);
    });
  }, o43zry['readFile'] = function (f8hmu_, _mnju0, th8d_f, mhun_8) {
    void 0x0 === mhun_8 && (mhun_8 = ''), o43zry['fs']['readFile']({ 'filePath': f8hmu_, 'encoding': _mnju0 = void 0x0 === _mnju0 ? 'ascill' : _mnju0, 'success': function (tf5dg) {
        -0x1 == f8hmu_['indexOf']('http://') && -0x1 == f8hmu_['indexOf']('https://') || o43zry['onFileUpdate'](f8hmu_, mhun_8), null != th8d_f && th8d_f['runWith']([0x0, tf5dg]);
      }, 'fail': function (sicxk) {
        sicxk && null != th8d_f && th8d_f['runWith']([0x1, sicxk]);
      } });
  }, o43zry['downImg'] = function (vxgsc, e0lj3o, xsc1vk) {
    void 0x0 === xsc1vk && (xsc1vk = ''), o43zry['wxdown']({ 'url': vxgsc, 'success': function (uj8_nm) {
        0xc8 === uj8_nm['statusCode'] && o43zry['copyFile'](uj8_nm['tempFilePath'], xsc1vk, e0lj3o);
      }, 'fail': function (t1c5g7) {
        null != e0lj3o && e0lj3o['runWith']([0x1, t1c5g7]);
      } });
  }, o43zry['copyFile'] = function (brq9y, nj8u, ne03l) {
    var cs1vk = brq9y['split']('/'),
        lyzeo = cs1vk[cs1vk['length'] - 0x1];nj8u['split']('?')[0x0];var th5f8d = o43zry['getFileInfo'](nj8u);cs1vk = o43zry['getFileNativePath'](lyzeo), o43zry['fs']['copyFile']({ 'srcPath': brq9y, 'destPath': cs1vk, 'success': function (scvxik) {
        th5f8d ? th5f8d['readyUrl'] != nj8u && o43zry['remove'](lyzeo, nj8u, ne03l) : (o43zry['onSaveFile'](nj8u, lyzeo), null != ne03l && ne03l['runWith']([0x0]));
      }, 'fail': function (hfm8_u) {
        null != ne03l && ne03l['runWith']([0x1, hfm8_u]);
      } });
  }, o43zry['getFileNativePath'] = function (tfg75) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tfg75;
  }, o43zry['remove'] = function (oy3zl, cvxgs1, dfh85) {
    void 0x0 === cvxgs1 && (cvxgs1 = '');var munj_ = o43zry['getFileInfo'](cvxgs1),
        _fhm8u = o43zry['getFileNativePath'](munj_['md5']);t5cg17['loader']['clearRes'](munj_['readyUrl']), o43zry['fs']['unlink']({ 'filePath': _fhm8u, 'success': function (y3z4ro) {
        '' != cvxgs1 && o43zry['onSaveFile'](cvxgs1, oy3zl), null != dfh85 && dfh85['runWith']([0x0]);
      }, 'fail': function (yzo3) {} });
  }, o43zry['onSaveFile'] = function (u0nl, _m8uhf) {
    var cg7s = u0nl['split']('?')[0x0];o43zry['filesListObj'][cg7s] = { 'md5': _m8uhf, 'readyUrl': u0nl }, o43zry['fs']['writeFile']({ 'filePath': o43zry['fileNativeDir'] + '/' + o43zry['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o43zry['filesListObj']), 'success': function (c751tg) {
        console['log']('写入测试测试成功：', c751tg);
      }, 'fail': function (o49) {
        console['log']('写入测试测试失败：', o49);
      } });
  }, o43zry['existDir'] = function (sp2iv, unmlj0) {
    o43zry['fs']['mkdir']({ 'dirPath': sp2iv, 'success': function (o3j0l) {
        null != unmlj0 && unmlj0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (y3ro4z) {
        -0x1 != y3ro4z['errMsg']['indexOf']('file already exists') ? o43zry['readSync'](o43zry['fileListName'], 'utf8', unmlj0) : null != unmlj0 && unmlj0['runWith']([0x1, y3ro4z]);
      } });
  }, o43zry['readSync'] = function (mhu8, u_8d, ksip2, m0n_j) {
    void 0x0 === u_8d && (u_8d = 'ascill'), void 0x0 === m0n_j && (m0n_j = ''), mhu8 = o43zry['getFileNativePath'](mhu8);var lnjm;try {
      lnjm = o43zry['fs']['readFileSync'](mhu8), null != ksip2 && ksip2['runWith']([0x0, { 'data': lnjm }]);
    } catch (b9w6q$) {
      null != ksip2 && ksip2['runWith']([0x1]);
    }
  }, o43zry['readCache'] = function () {}, o43zry['writeCache'] = function (c751t) {
    var wrb9q$ = readyUrl['split']('?')[0x0];o43zry['filesListObj'][wrb9q$] = { 'md5': md5Name, 'readyUrl': readyUrl }, o43zry['fs']['writeFile']({ 'filePath': o43zry['fileNativeDir'] + '/' + o43zry['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o43zry['filesListObj']), 'success': function (h_unm8) {}, 'fail': function (hfu_d) {} });
  }, o43zry['setNativeFileDir'] = function (oeyl) {
    o43zry['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oeyl;
  }, o43zry['filesListObj'] = {}, o43zry['fileNativeDir'] = null, o43zry['fileListName'] = 'layaairfiles.txt', o43zry['ziyuFileData'] = {}, csvxi(o43zry, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), o43zry);function o43zry() {
    o43zry['__super']['call'](this);
  }var ljo03e = function () {
    function isv2x() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, isv2x['__super']['call'](this), this['_sound'] = isv2x['_createSound']();
    }gc7x15(isv2x, 'laya.wx.mini.MiniSound', bq94$);var csv1gx = isv2x['prototype'];return csv1gx['load'] = function (v2iksp) {
      var g7tfd = this,
          b4rq$;function gc517x() {
        if (null != isv2x['_null']) g7tfd['_sound']['onCanplay'](isv2x['_null']), g7tfd['_sound']['onError'](isv2x['_null']);else try {
          g7tfd['_sound']['onCanplay'](null), g7tfd['_sound']['onError'](null), isv2x['_null'] = null;
        } catch (wr9bq$) {
          console['warn']('[wxmini] _clearSound:' + wr9bq$), g7tfd['_sound']['onCanplay'](qwb$r9), g7tfd['_sound']['onError'](qwb$r9), isv2x['_null'] = qwb$r9;
        }
      }function qwb$r9() {}v2iksp = gx5c['formatURL'](v2iksp), this['url'] = v2iksp, isv2x['_audioCache'][v2iksp] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        gc517x(), b4rq$['loaded'] = !0x0, b4rq$['event']('complete'), isv2x['_audioCache'][b4rq$['url']] = b4rq$;
      }), this['_sound']['onError'](function (iscv) {
        console['error']('errCode=' + iscv['errCode'] + '  errMsg=' + iscv['errMsg']), gc517x(), b4rq$['event']('error');
      }), this['_sound']['src'] = v2iksp, b4rq$ = this);
    }, csv1gx['play'] = function (t_, n_j0mu) {
      void 0x0 === t_ && (t_ = 0x0), void 0x0 === n_j0mu && (n_j0mu = 0x0), (vgsxc = this['url'] == vkx['_tMusic'] ? (isv2x['_musicAudio'] || (isv2x['_musicAudio'] = isv2x['_createSound']()), isv2x['_musicAudio']) : isv2x['_createSound']())['src'] = this['url'];var vgsxc = new mn0ulj(vgsxc);return vgsxc['url'] = this['url'], vgsxc['loops'] = n_j0mu, vgsxc['startTime'] = t_, vgsxc['play'](), vkx['addChannel'](vgsxc), vgsxc;
    }, csv1gx['dispose'] = function () {
      var gdt57 = isv2x['_audioCache'][this['url']];gdt57 && (gdt57['src'] = '', delete isv2x['_audioCache'][this['url']]);
    }, ry9qz(0x0, csv1gx, 'duration', function () {
      return this['_sound']['duration'];
    }), isv2x['_createSound'] = function () {
      return isv2x['_id']++, d85hft['window']['wx']['createInnerAudioContext']();
    }, isv2x['_musicAudio'] = null, isv2x['_id'] = 0x0, isv2x['_audioCache'] = {}, isv2x['_null'] = void 0x0, isv2x;
  }(),
      mn0ulj = function () {
    function lme0nj(ne30lj) {
      this['_audio'] = null, this['_onEnd'] = null, lme0nj['__super']['call'](this), this['_audio'] = ne30lj, this['_onEnd'] = g7x1c5['bind'](this['__onEnd'], this), ne30lj['onEnded'](this['_onEnd']);
    }gc7x15(lme0nj, 'laya.wx.mini.MiniSoundChannel', sxkc1);var gtfd57 = lme0nj['prototype'];return gtfd57['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (t5cg17['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, gtfd57['__onNull'] = function () {}, gtfd57['play'] = function () {
      this['isStopped'] = !0x1, vkx['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, gtfd57['stop'] = function () {
      if (this['isStopped'] = !0x0, vkx['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != lme0nj['_null']) this['_audio']['onEnded'](lme0nj['_null']);else try {
          this['_audio']['onEnded'](null), lme0nj['_null'] = null;
        } catch (_u8dhf) {
          console['warn']('[wxmini] stop:' + _u8dhf), this['_audio']['onEnded'](g7x1c5['bind'](this['__onNull'], this)), lme0nj['_null'] = g7x1c5['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, gtfd57['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, gtfd57['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, vkx['addChannel'](this), this['_audio']['play']());
    }, ry9qz(0x0, gtfd57, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), ry9qz(0x0, gtfd57, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), ry9qz(0x0, gtfd57, 'volume', function () {
      return 0x1;
    }, function (k2xi) {}), lme0nj['_null'] = void 0x0, lme0nj;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (mnlu0, s2ikx) {
  'use strict';

  for (var dh75tf in Object['defineProperty'](s2ikx, '__esModule', { 'value': !0x0 }), Laya) {
    var mnj0el = Laya[dh75tf];mnj0el && mnj0el['__isclass'] && (s2ikx[dh75tf] = mnj0el);
  }
});