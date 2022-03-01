var I = wx.$R;
!function (ixjs2, mkr8wy) {
  mkr8wy['un'], mkr8wy['uns'];var c6fn5d = mkr8wy['static'],
      txjz2s = mkr8wy['class'],
      emr7w = mkr8wy['getset'];mkr8wy['__newvec'];var u$9b1a = laya['utils']['Browser'],
      rgk7 = (laya['events']['Event'], laya['events']['EventDispatcher']),
      sl3ztv = laya['resource']['HTMLImage'],
      _u1ah = laya['utils']['Handler'],
      m8kwyr = laya['display']['Input'],
      $194b = laya['net']['Loader'];laya['maths']['Matrix'];var e7wgm = laya['renders']['Render'],
      nh6f5 = laya['utils']['RunDriver'];laya['media']['Sound'];var mgre7q = laya['media']['SoundChannel'],
      qgrp = laya['media']['SoundManager'],
      yj8oik = (laya['display']['Stage'], laya['net']['URL']),
      tzs3lv = laya['utils']['Utils'];txjz2s(u$1ab9, 'laya.wx.mini.MiniAdpter'), u$1ab9['getJson'] = function (z2tjs) {
    return JSON['parse'](z2tjs);
  }, u$1ab9['init'] = function (ioxzj, ub$9a1) {
    void 0x0 === ioxzj && (ioxzj = !0x1), void 0x0 === ub$9a1 && (ub$9a1 = !0x1), u$1ab9['_inited'] || (u$1ab9['window'] = ixjs2)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (u$1ab9['_inited'] = !0x0, u$1ab9['isZiYu'] = ub$9a1, u$1ab9['isPosMsgYu'] = ioxzj, u$1ab9['EnvConfig'] = {}, u$1ab9['isZiYu'] || (j8oiyx['setNativeFileDir']('/layaairGame'), j8oiyx['existDir'](j8oiyx['fileNativeDir'], _u1ah['create'](u$1ab9, u$1ab9['onMkdirCallBack']))), u$1ab9['window']['focus'] = function () {}, mkr8wy['getUrlPath'] = function () {}, u$1ab9['window']['logtime'] = function (a419$b) {}, u$1ab9['window']['alertTimeLog'] = function (i2jsx) {}, u$1ab9['window']['resetShareInfo'] = function () {}, u$1ab9['window']['CanvasRenderingContext2D'] = function () {}, u$1ab9['window']['CanvasRenderingContext2D']['prototype'] = u$1ab9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], u$1ab9['window']['document']['body']['appendChild'] = function () {}, u$1ab9['EnvConfig']['pixelRatioInt'] = 0x0, nh6f5['getPixelRatio'] = u$1ab9['pixelRatio'], u$1ab9['_preCreateElement'] = u$9b1a['createElement'], u$9b1a['createElement'] = u$1ab9['createElement'], nh6f5['createShaderCondition'] = u$1ab9['createShaderCondition'], tzs3lv['parseXMLFromString'] = u$1ab9['parseXMLFromString'], m8kwyr['_createInputElement'] = xjzi2['_createInputElement'], u$1ab9['EnvConfig']['load'] = $194b['prototype']['load'], $194b['prototype']['load'] = uba_1$['prototype']['load'], u$1ab9['isZiYu'] && ioxzj && wx['onMessage'](function (z3vslt) {
      z3vslt['isLoad'] && (j8oiyx['ziyuFileData'][z3vslt['url']] = z3vslt['data']);
    }));
  }, u$1ab9['onMkdirCallBack'] = function (lv0s3, $49b) {
    lv0s3 || (j8oiyx['filesListObj'] = JSON['parse']($49b['data']));
  }, u$1ab9['pixelRatio'] = function () {
    if (!u$1ab9['EnvConfig']['pixelRatioInt']) try {
      var ltv03 = wx['getSystemInfoSync']();return u$1ab9['EnvConfig']['pixelRatioInt'] = ltv03['pixelRatio'], ltv03['pixelRatio'];
    } catch (ijszx2) {}return u$1ab9['EnvConfig']['pixelRatioInt'];
  }, u$1ab9['createElement'] = function (y2xio) {
    return 'canvas' != y2xio ? 'textarea' == y2xio || 'input' == y2xio ? u$1ab9['onCreateInput'](y2xio) : 'div' == y2xio ? ((qfedg = u$1ab9['_preCreateElement'](y2xio))['contains'] = function (km7wr) {
      return null;
    }, qfedg['removeChild'] = function (hu6_51) {}, qfedg) : u$1ab9['_preCreateElement'](y2xio) : (0x1 == u$1ab9['idx'] ? u$1ab9['isZiYu'] ? (df6cn5 = sharedCanvas)['style'] = {} : df6cn5 = ixjs2['canvas'] : df6cn5 = ixjs2['wx']['createCanvas'](), u$1ab9['idx']++, df6cn5);var df6cn5, qfedg;
  }, u$1ab9['onCreateInput'] = function (gmwer7) {
    return gmwer7 = u$1ab9['_preCreateElement'](gmwer7), (gmwer7['focus'] = xjzi2['wxinputFocus'], gmwer7['blur'] = xjzi2['wxinputblur'], gmwer7['style'] = {}, gmwer7['value'] = 0x0, gmwer7['parentElement'] = {}, gmwer7['placeholder'] = {}, gmwer7['type'] = {}, gmwer7['setColor'] = function (jtsz) {}, gmwer7['setType'] = function (sx2zij) {}, gmwer7['setFontFace'] = function (yjxoi) {}, gmwer7['addEventListener'] = function (a941) {}, gmwer7['contains'] = function (ge7wm) {
      return null;
    }, gmwer7['removeChild'] = function (o8wkym) {}, gmwer7);
  }, u$1ab9['createShaderCondition'] = function (uab1$_) {
    var i8xjy = this;return function () {
      return i8xjy[uab1$_['replace']('this.', '')];
    };
  }, u$1ab9['EnvConfig'] = null, u$1ab9['window'] = null, u$1ab9['_preCreateElement'] = null, u$1ab9['_inited'] = !0x1, u$1ab9['wxRequest'] = null, u$1ab9['systemInfo'] = null, u$1ab9['version'] = '0.0.1', u$1ab9['isZiYu'] = !0x1, u$1ab9['isPosMsgYu'] = !0x1, u$1ab9['parseXMLFromString'] = function (rwy8km) {
    var fn56cd;rwy8km = rwy8km['replace'](/>\s+</g, '><');try {
      fn56cd = new ixjs2['Parser']['DOMParser']()['parseFromString'](rwy8km, 'text/xml');
    } catch (eg7dp) {
      throw '需要引入xml解析库文件';
    }return fn56cd;
  }, u$1ab9['idx'] = 0x1;var hc = u$1ab9;function u$1ab9() {}txjz2s(f5cn, 'laya.wx.mini.MiniImage'), f5cn['prototype']['_loadImage'] = function (r7eqmg) {
    var xizj2s = !0x1;-0x1 == r7eqmg['indexOf']('layaNativeDir/') && (xizj2s = !0x0, r7eqmg = yj8oik['formatURL'](r7eqmg)), j8oiyx['getFileInfo'](r7eqmg) ? f5cn['onCreateImage'](r7eqmg, this, !xizj2s) : -0x1 != r7eqmg['indexOf']('http://') || -0x1 != r7eqmg['indexOf']('https://') ? j8oiyx['downImg'](r7eqmg, new _u1ah(f5cn, f5cn['onDownImgCallBack'], [r7eqmg, this]), r7eqmg) : f5cn['onCreateImage'](r7eqmg, this, !0x0);
  }, f5cn['onDownImgCallBack'] = function (qpdgfe, u_$b, gpdqef) {
    gpdqef ? u_$b['onError'](null) : f5cn['onCreateImage'](qpdgfe, u_$b);
  }, f5cn['onCreateImage'] = function (a14b$9, pfncq, okym) {
    var yoj2xi;function c6f5d() {
      yoj2xi['onload'] = null, yoj2xi['onerror'] = null, delete pfncq['imgCache'][a14b$9];
    }okym = (okym = void 0x0 === okym ? !0x1 : okym) ? a14b$9 : (okym = j8oiyx['getFileInfo'](a14b$9)['md5'], j8oiyx['getFileNativePath'](okym)), null == pfncq['imgCache'] && (pfncq['imgCache'] = {});function _ah16() {
      c6f5d(), pfncq['onLoaded'](yoj2xi);
    }function qgdpe() {
      c6f5d(), pfncq['event']('error', 'Load image failed');
    }'nativeimage' == pfncq['_type'] ? ((yoj2xi = new u$9b1a['window']['Image']())['crossOrigin'] = '', yoj2xi['onload'] = _ah16, yoj2xi['onerror'] = qgdpe, yoj2xi['src'] = okym, pfncq['imgCache'][a14b$9] = yoj2xi) : new sl3ztv['create'](okym, { 'onload': _ah16, 'onerror': qgdpe, 'onCreate': function (xt32z) {
        yoj2xi = xt32z, pfncq['imgCache'][a14b$9] = xt32z;
      } });
  };function f5cn() {}txjz2s(n6h5_, 'laya.wx.mini.MiniInput'), n6h5_['_createInputElement'] = function () {
    m8kwyr['_initInput'](m8kwyr['area'] = u$9b1a['createElement']('textarea')), m8kwyr['_initInput'](m8kwyr['input'] = u$9b1a['createElement']('input')), m8kwyr['inputContainer'] = u$9b1a['createElement']('div'), m8kwyr['inputContainer']['style']['position'] = 'absolute', m8kwyr['inputContainer']['style']['zIndex'] = 0x186a0, u$9b1a['container']['appendChild'](m8kwyr['inputContainer']), m8kwyr['inputContainer']['setPos'] = function (u_ha1b, iz2oxj) {
      m8kwyr['inputContainer']['style']['left'] = u_ha1b + 'px', m8kwyr['inputContainer']['style']['top'] = iz2oxj + 'px';
    }, mkr8wy['stage']['on']('resize', null, n6h5_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (n5d6c) {
      ixjs2['dispatchEvent'] && ixjs2['dispatchEvent']('resize');
    }), qgrp['_soundClass'] = ub$_1a, qgrp['_musicClass'] = ub$_1a;
  }, n6h5_['_onStageResize'] = function () {
    mkr8wy['stage']['_canvasTransform']['identity']()['scale'](u$9b1a['width'] / e7wgm['canvas']['width'] / nh6f5['getPixelRatio'](), u$9b1a['height'] / e7wgm['canvas']['height'] / nh6f5['getPixelRatio']());
  }, n6h5_['wxinputFocus'] = function (_ub$1a) {
    var yowk8 = m8kwyr['inputElement']['target'];yowk8 && !yowk8['editable'] || (hc['window']['wx']['offKeyboardConfirm'](), hc['window']['wx']['offKeyboardInput'](), hc['window']['wx']['showKeyboard']({ 'defaultValue': yowk8['text'], 'maxLength': yowk8['maxChars'], 'multiple': yowk8['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (jixyo2) {}, 'fail': function (dnep) {} }), hc['window']['wx']['onKeyboardConfirm'](function (oz2jix) {
      oz2jix = oz2jix ? oz2jix['value'] : '', (yowk8['text'] = oz2jix, yowk8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), hc['window']['wx']['onKeyboardInput'](function (a_1$bu) {
      a_1$bu = a_1$bu ? a_1$bu['value'] : '', yowk8['multiline'] || -0x1 == a_1$bu['indexOf']('\x0a') ? (yowk8['text'] = a_1$bu, yowk8['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, n6h5_['inputEnter'] = function () {
    m8kwyr['inputElement']['target']['focus'] = !0x1;
  }, n6h5_['wxinputblur'] = function () {
    n6h5_['hideKeyboard']();
  }, n6h5_['hideKeyboard'] = function () {
    hc['window']['wx']['offKeyboardConfirm'](), hc['window']['wx']['offKeyboardInput'](), hc['window']['wx']['hideKeyboard']({ 'success': function (nc6hf5) {
        console['log']('隐藏键盘');
      }, 'fail': function (r7gwme) {
        console['log']('隐藏键盘出错:' + (r7gwme ? r7gwme['errMsg'] : ''));
      } });
  };var xjzi2 = n6h5_;function n6h5_() {}txjz2s(zxts, 'laya.wx.mini.MiniLoader'), (npdfc = zxts['prototype'])['load'] = function (ij2zox, qrep, e7qgrp, rwm, k8r7wm) {
    void 0x0 === e7qgrp && (e7qgrp = !0x0), void 0x0 === k8r7wm && (k8r7wm = !0x1);var s2tz3l = this;0x0 === (s2tz3l['_url'] = ij2zox)['indexOf']('data:image') ? s2tz3l['_type'] = qrep = 'image' : s2tz3l['_type'] = qrep = qrep || s2tz3l['getTypeFromUrl'](ij2zox), s2tz3l['_cache'] = e7qgrp, s2tz3l['_data'] = null;var tls3 = 'ascii';-0x1 != ij2zox['indexOf']('.fnt') ? tls3 = 'utf8' : 'arraybuffer' == qrep && (tls3 = '');var _6chu = tzs3lv['getFileExtension'](ij2zox);if (-0x1 != zxts['_fileTypeArr']['indexOf'](_6chu)) hc['EnvConfig']['load']['call'](this, ij2zox, qrep, e7qgrp, rwm, k8r7wm);else {
      if (j8oiyx['getFileInfo'](ij2zox)) hc['EnvConfig']['load']['call'](this, ij2zox, qrep, e7qgrp, rwm, k8r7wm);else {
        if (-0x1 != ij2zox['indexOf']('layaNativeDir/')) return hc['isZiYu'] ? (_6chu = j8oiyx['ziyuFileData'][ij2zox], void s2tz3l['onLoaded'](_6chu)) : (cosnole['log']('read read'), void j8oiyx['read'](ij2zox, tls3, new _u1ah(zxts, zxts['onReadNativeCallBack'], [tls3, ij2zox, qrep, e7qgrp, rwm, k8r7wm, s2tz3l])));_6chu = '' == yj8oik['rootPath'] ? ij2zox : ij2zox['split'](yj8oik['rootPath'])[0x0], -0x1 != ij2zox['indexOf']('http://') || -0x1 != ij2zox['indexOf']('https://') ? hc['EnvConfig']['load']['call'](s2tz3l, ij2zox, qrep, e7qgrp, rwm, k8r7wm) : j8oiyx['readFile'](_6chu, tls3, new _u1ah(zxts, zxts['onReadNativeCallBack'], [tls3, ij2zox, qrep, e7qgrp, rwm, k8r7wm, s2tz3l]), ij2zox);
      }
    }
  }, npdfc['resMgrLoad'] = function (epgqr, _6h1au, u5h_6, a$b4, f6c5dn, oj8yk, xzj2ts) {
    void 0x0 === u5h_6 && (u5h_6 = 0x0), void 0x0 === a$b4 && (a$b4 = !0x1), void 0x0 === f6c5dn && (f6c5dn = !0x1), void 0x0 === oj8yk && (oj8yk = 0x0), void 0x0 === xzj2ts && (xzj2ts = 0x3), -0x1 != epgqr['indexOf']('mpack') && console['log']('=============resMgrLoad url:', epgqr), hc['EnvConfig']['resMgrLoad'](epgqr, (mg7kr, _1au$b, qegm) => {
      zxts['prototype']['resMgrLoadCallBack'](mg7kr, _1au$b, qegm, _6h1au);
    }, u5h_6, a$b4, f6c5dn, oj8yk, xzj2ts);
  }, npdfc['resMgrLoadCallBack'] = function (wr7km8, qndfep, $ba91u, jixz) {
    console['log']('buff:::', wr7km8, $ba91u, j8oiyx['fileNativeDir'] + '///' + j8oiyx['fileListName']), jixz(wr7km8, qndfep, $ba91u);
  }, npdfc['clearRes'] = function (feqnp, rwgkm7) {
    this['clearRes'](feqnp, rwgkm7 = void 0x0 === rwgkm7 ? !0x1 : rwgkm7), rwgkm7 = j8oiyx['getFileInfo'](feqnp), !rwgkm7 || -0x1 == feqnp['indexOf']('http://') && -0x1 == feqnp['indexOf']('https://') || (feqnp = rwgkm7['md5'], rwgkm7 = j8oiyx['getFileNativePath'](feqnp), j8oiyx['remove'](rwgkm7));
  }, zxts['onReadNativeCallBack'] = function (yoj8xi, t0s3lv, g7mwrk, y8kwo, prq7e, dcfpn, iwo8ky, stx2, mwok) {
    void 0x0 === y8kwo && (y8kwo = !0x0), void 0x0 === dcfpn && (dcfpn = !0x1), (stx2 = void 0x0 === stx2 ? 0x0 : stx2) ? 0x1 == stx2 && hc['EnvConfig']['load']['call'](iwo8ky, t0s3lv, g7mwrk, y8kwo, prq7e, dcfpn) : (stx2 = 'json' == g7mwrk || 'atlas' == g7mwrk ? hc['getJson'](mwok['data']) : 'xml' == g7mwrk ? tzs3lv['parseXMLFromString'](mwok['data']) : mwok['data'], iwo8ky['onLoaded'](stx2), !hc['isZiYu'] && hc['isPosMsgYu'] && 'arraybuffer' != g7mwrk && wx['postMessage']({ 'url': t0s3lv, 'data': stx2, 'isLoad': !0x0 }));
  }, c6fn5d(zxts, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
  }]);var uba_1$ = zxts;function zxts() {}txjz2s(a6h_u1, 'laya.wx.mini.MiniFileMgr', rgk7), a6h_u1['isLoadFile'] = function (egpfq) {
    return -0x1 != a6h_u1['_fileTypeArr']['indexOf'](egpfq);
  }, a6h_u1['getFileInfo'] = function (u_1ah6) {
    return u_1ah6 = u_1ah6['split']('?')[0x0], u_1ah6 = a6h_u1['filesListObj'][u_1ah6], null == u_1ah6 ? null : u_1ah6;
  }, a6h_u1['onFileUpdate'] = function (kyiw8o, uc5) {
    kyiw8o = kyiw8o['split']('/'), kyiw8o = kyiw8o[kyiw8o['length'] - 0x1];var dqenfp = a6h_u1['getFileInfo'](uc5);null == dqenfp ? a6h_u1['onSaveFile'](uc5, kyiw8o) : dqenfp['readyUrl'] != uc5 && a6h_u1['remove'](kyiw8o, uc5);
  }, a6h_u1['exits'] = function (f5dpn, npqde) {
    f5dpn = a6h_u1['getFileNativePath'](f5dpn), a6h_u1['fs']['getFileInfo']({ 'filePath': f5dpn, 'success': function (ztsl3) {
        null != npqde && npqde['runWith']([0x0, ztsl3]);
      }, 'fail': function (meq) {
        null != npqde && npqde['runWith']([0x1, meq]);
      } });
  }, a6h_u1['read'] = function (wk8oym, u9b1, z2xsij, meqrg) {
    void 0x0 === u9b1 && (u9b1 = 'ascill'), wk8oym = '' != (meqrg = void 0x0 === meqrg ? '' : meqrg) ? a6h_u1['getFileNativePath'](wk8oym) : wk8oym, a6h_u1['fs']['readFile']({ 'filePath': wk8oym, 'encoding': u9b1, 'success': function (n5pdf) {
        null != z2xsij && z2xsij['runWith']([0x0, n5pdf]);
      }, 'fail': function (ndef) {
        ndef && '' != meqrg ? a6h_u1['down'](meqrg, u9b1, z2xsij, meqrg) : null != z2xsij && z2xsij['runWith']([0x1]);
      } });
  }, a6h_u1['readNativeFile'] = function (h_uc56, ha_u1) {
    a6h_u1['fs']['readFile']({ 'filePath': h_uc56, 'encoding': '', 'success': function (wrgm7k) {
        null != ha_u1 && ha_u1['runWith']([0x0]);
      }, 'fail': function (qg7pd) {
        null != ha_u1 && ha_u1['runWith']([0x1]);
      } });
  }, a6h_u1['down'] = function (xtz, t2xsj, d6ncf, tlvs0) {
    void 0x0 === t2xsj && (t2xsj = 'ascill'), void 0x0 === tlvs0 && (tlvs0 = '');var t0v3 = a6h_u1['getFileNativePath'](tlvs0);a6h_u1['wxdown']({ 'url': xtz, 'filePath': t0v3, 'success': function (npd5c) {
        0xc8 === npd5c['statusCode'] && a6h_u1['readFile'](npd5c['filePath'], t2xsj, d6ncf, tlvs0);
      }, 'fail': function ($ua1) {
        null != d6ncf && d6ncf['runWith']([0x1, $ua1]);
      } })['onProgressUpdate'](function (buah_) {
      null != d6ncf && d6ncf['runWith']([0x2, buah_['progress']]);
    });
  }, a6h_u1['readFile'] = function (u_1ha6, ymkw8o, m8wyr, ztl3s) {
    void 0x0 === ztl3s && (ztl3s = ''), a6h_u1['fs']['readFile']({ 'filePath': u_1ha6, 'encoding': ymkw8o = void 0x0 === ymkw8o ? 'ascill' : ymkw8o, 'success': function (w8kmo) {
        -0x1 == u_1ha6['indexOf']('http://') && -0x1 == u_1ha6['indexOf']('https://') || a6h_u1['onFileUpdate'](u_1ha6, ztl3s), null != m8wyr && m8wyr['runWith']([0x0, w8kmo]);
      }, 'fail': function (cn6f5d) {
        cn6f5d && null != m8wyr && m8wyr['runWith']([0x1, cn6f5d]);
      } });
  }, a6h_u1['downImg'] = function (szxji2, b_1, u1$_ba) {
    void 0x0 === u1$_ba && (u1$_ba = ''), a6h_u1['wxdown']({ 'url': szxji2, 'success': function (h6fc5) {
        0xc8 === h6fc5['statusCode'] && a6h_u1['copyFile'](h6fc5['tempFilePath'], u1$_ba, b_1);
      }, 'fail': function (nqdcfp) {
        null != b_1 && b_1['runWith']([0x1, nqdcfp]);
      } });
  }, a6h_u1['copyFile'] = function (om8ywk, h1ua6, kywo8) {
    var g7wmre = om8ywk['split']('/'),
        em = g7wmre[g7wmre['length'] - 0x1];h1ua6['split']('?')[0x0];var e7rwm = a6h_u1['getFileInfo'](h1ua6);g7wmre = a6h_u1['getFileNativePath'](em), a6h_u1['fs']['copyFile']({ 'srcPath': om8ywk, 'destPath': g7wmre, 'success': function (zxijs2) {
        e7rwm ? e7rwm['readyUrl'] != h1ua6 && a6h_u1['remove'](em, h1ua6, kywo8) : (a6h_u1['onSaveFile'](h1ua6, em), null != kywo8 && kywo8['runWith']([0x0]));
      }, 'fail': function (pqegfd) {
        null != kywo8 && kywo8['runWith']([0x1, pqegfd]);
      } });
  }, a6h_u1['getFileNativePath'] = function (xij) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xij;
  }, a6h_u1['remove'] = function (tv3z, m7rqge, u$1ab_) {
    void 0x0 === m7rqge && (m7rqge = '');var w8rm7 = a6h_u1['getFileInfo'](m7rqge),
        slvt = a6h_u1['getFileNativePath'](w8rm7['md5']);mkr8wy['loader']['clearRes'](w8rm7['readyUrl']), a6h_u1['fs']['unlink']({ 'filePath': slvt, 'success': function (fcpnqd) {
        '' != m7rqge && a6h_u1['onSaveFile'](m7rqge, tv3z), null != u$1ab_ && u$1ab_['runWith']([0x0]);
      }, 'fail': function (jzix) {} });
  }, a6h_u1['onSaveFile'] = function (abh1u, uc5_6) {
    var r8yw = abh1u['split']('?')[0x0];a6h_u1['filesListObj'][r8yw] = { 'md5': uc5_6, 'readyUrl': abh1u }, a6h_u1['fs']['writeFile']({ 'filePath': a6h_u1['fileNativeDir'] + '/' + a6h_u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](a6h_u1['filesListObj']), 'success': function (reqgm7) {
        console['log']('写入测试测试成功：', reqgm7);
      }, 'fail': function (nfdc56) {
        console['log']('写入测试测试失败：', nfdc56);
      } });
  }, a6h_u1['existDir'] = function (b91$, cf5d6n) {
    a6h_u1['fs']['mkdir']({ 'dirPath': b91$, 'success': function (_bua1h) {
        null != cf5d6n && cf5d6n['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (dqefp) {
        -0x1 != dqefp['errMsg']['indexOf']('file already exists') ? a6h_u1['readSync'](a6h_u1['fileListName'], 'utf8', cf5d6n) : null != cf5d6n && cf5d6n['runWith']([0x1, dqefp]);
      } });
  }, a6h_u1['readSync'] = function (iszjx, ij2sxz, jt2sx, zxis2) {
    void 0x0 === ij2sxz && (ij2sxz = 'ascill'), void 0x0 === zxis2 && (zxis2 = ''), ij2sxz = a6h_u1['getFileNativePath'](iszjx);var zx2sij;try {
      zx2sij = a6h_u1['fs']['readFileSync'](ij2sxz), null != jt2sx && jt2sx['runWith']([0x0, { 'data': zx2sij }]);
    } catch (kw7mg) {
      null != jt2sx && jt2sx['runWith']([0x1]);
    }
  }, a6h_u1['readCache'] = function () {}, a6h_u1['writeCache'] = function (pc5d) {
    var t3szv = readyUrl['split']('?')[0x0];a6h_u1['filesListObj'][t3szv] = { 'md5': md5Name, 'readyUrl': readyUrl }, a6h_u1['fs']['writeFile']({ 'filePath': a6h_u1['fileNativeDir'] + '/' + a6h_u1['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](a6h_u1['filesListObj']), 'success': function (fnd56c) {}, 'fail': function (_1bua) {} });
  }, a6h_u1['setNativeFileDir'] = function (g7mrw) {
    a6h_u1['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + g7mrw;
  }, a6h_u1['filesListObj'] = {}, a6h_u1['fileNativeDir'] = null, a6h_u1['fileListName'] = 'layaairfiles.txt', a6h_u1['ziyuFileData'] = {}, c6fn5d(a6h_u1, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]);var j8oiyx = a6h_u1;function a6h_u1() {
    a6h_u1['__super']['call'](this);
  }txjz2s(fqpncd, 'laya.wx.mini.MiniSound', rgk7), (npdfc = fqpncd['prototype'])['load'] = function (r8kmy) {
    var em7gqr = this,
        _buh;function tsx32z() {
      if (null != fqpncd['_null']) em7gqr['_sound']['onCanplay'](fqpncd['_null']), em7gqr['_sound']['onError'](fqpncd['_null']);else try {
        em7gqr['_sound']['onCanplay'](null), em7gqr['_sound']['onError'](null), fqpncd['_null'] = null;
      } catch (_5huc) {
        console['warn']('[wxmini] _clearSound:' + _5huc), em7gqr['_sound']['onCanplay'](oijx8y), em7gqr['_sound']['onError'](oijx8y), fqpncd['_null'] = oijx8y;
      }
    }function oijx8y() {}r8kmy = yj8oik['formatURL'](r8kmy), this['url'] = r8kmy, fqpncd['_audioCache'][r8kmy] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
      tsx32z(), _buh['loaded'] = !0x0, _buh['event']('complete'), fqpncd['_audioCache'][_buh['url']] = _buh;
    }), this['_sound']['onError'](function (ncpq) {
      console['error']('errCode=' + ncpq['errCode'] + '  errMsg=' + ncpq['errMsg']), tsx32z(), _buh['event']('error');
    }), this['_sound']['src'] = r8kmy, _buh = this);
  }, npdfc['play'] = function (mwge7r, qfenp) {
    void 0x0 === mwge7r && (mwge7r = 0x0), void 0x0 === qfenp && (qfenp = 0x0), (i8yx = this['url'] == qgrp['_tMusic'] ? (fqpncd['_musicAudio'] || (fqpncd['_musicAudio'] = fqpncd['_createSound']()), fqpncd['_musicAudio']) : fqpncd['_createSound']())['src'] = this['url'];var i8yx = new i2zoxj(i8yx);return i8yx['url'] = this['url'], i8yx['loops'] = qfenp, i8yx['startTime'] = mwge7r, i8yx['play'](), qgrp['addChannel'](i8yx), i8yx;
  }, npdfc['dispose'] = function () {
    var cdqp = fqpncd['_audioCache'][this['url']];cdqp && (cdqp['src'] = '', delete fqpncd['_audioCache'][this['url']]);
  }, emr7w(0x0, npdfc, 'duration', function () {
    return this['_sound']['duration'];
  }), fqpncd['_createSound'] = function () {
    return fqpncd['_id']++, hc['window']['wx']['createInnerAudioContext']();
  }, fqpncd['_musicAudio'] = null, fqpncd['_id'] = 0x0, fqpncd['_audioCache'] = {}, fqpncd['_null'] = void 0x0;var ub$_1a = fqpncd;function fqpncd() {
    this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, fqpncd['__super']['call'](this), this['_sound'] = fqpncd['_createSound']();
  }var npdfc;txjz2s(wrm, 'laya.wx.mini.MiniSoundChannel', mgre7q), (c6fn5d = wrm['prototype'])['__onEnd'] = function () {
    if (0x1 == this['loops']) return this['completeHandler'] && (mkr8wy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
  }, c6fn5d['__onNull'] = function () {}, c6fn5d['play'] = function () {
    this['isStopped'] = !0x1, qgrp['addChannel'](this), this['_audio'] && this['_audio']['play']();
  }, c6fn5d['stop'] = function () {
    if (this['isStopped'] = !0x0, qgrp['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
      if (this['_audio']['stop'](), null != wrm['_null']) this['_audio']['onEnded'](wrm['_null']);else try {
        this['_audio']['onEnded'](null), wrm['_null'] = null;
      } catch (lvz3t) {
        console['warn']('[wxmini] stop:' + lvz3t), this['_audio']['onEnded'](tzs3lv['bind'](this['__onNull'], this)), wrm['_null'] = tzs3lv['bind'](this['__onNull'], this);
      }this['_audio'] = null;
    }
  }, c6fn5d['pause'] = function () {
    this['isStopped'] = !0x0, this['_audio']['pause']();
  }, c6fn5d['resume'] = function () {
    this['_audio'] && (this['isStopped'] = !0x1, qgrp['addChannel'](this), this['_audio']['play']());
  }, emr7w(0x0, c6fn5d, 'position', function () {
    return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
  }), emr7w(0x0, c6fn5d, 'duration', function () {
    return this['_audio'] ? this['_audio']['duration'] : 0x0;
  }), emr7w(0x0, c6fn5d, 'volume', function () {
    return 0x1;
  }, function (z2ixj) {}), wrm['_null'] = void 0x0;var i2zoxj = wrm;function wrm(u_1a6) {
    this['_audio'] = null, this['_onEnd'] = null, wrm['__super']['call'](this), this['_audio'] = u_1a6, this['_onEnd'] = tzs3lv['bind'](this['__onEnd'], this), u_1a6['onEnded'](this['_onEnd']);
  }
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (epr7qg, ts0l) {
  'use strict';

  for (var rmy8wk in Object['defineProperty'](ts0l, '__esModule', { 'value': !0x0 }), Laya) {
    var xs3z2t = Laya[rmy8wk];xs3z2t && xs3z2t['__isclass'] && (ts0l[rmy8wk] = xs3z2t);
  }
});