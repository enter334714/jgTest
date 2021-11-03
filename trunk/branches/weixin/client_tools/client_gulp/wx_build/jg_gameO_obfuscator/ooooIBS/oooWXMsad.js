var c = wx.$o;
!function (zhgob8, bog9x) {
  bog9x['un'], bog9x['uns'];var pzc8r = bog9x['static'],
      rmc58p = bog9x['class'],
      o8czhb = bog9x['getset'];bog9x['__newvec'];var b8zg = laya['utils']['Browser'],
      hzb8c = (laya['events']['Event'], laya['events']['EventDispatcher']),
      kunye_ = laya['resource']['HTMLImage'],
      hgzb4 = laya['utils']['Handler'],
      nuk_e = laya['display']['Input'],
      lva63n = laya['net']['Loader'];laya['maths']['Matrix'];var f4w91 = laya['renders']['Render'],
      ue_3yn = laya['utils']['RunDriver'];laya['media']['Sound'];var rmp5qt = laya['media']['SoundChannel'],
      k$_e0y = laya['media']['SoundManager'],
      nua3vl = (laya['display']['Stage'], laya['net']['URL']),
      yuv3_ = laya['utils']['Utils'],
      l26 = (rmc58p(rtm5qp, 'laya.wx.mini.MiniAdpter'), rtm5qp['getJson'] = function (pbc8) {
    return JSON['parse'](pbc8);
  }, rtm5qp['init'] = function (r5p, r5ptq) {
    void 0x0 === r5p && (r5p = !0x1), void 0x0 === r5ptq && (r5ptq = !0x1), rtm5qp['_inited'] || (rtm5qp['window'] = zhgob8)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (rtm5qp['_inited'] = !0x0, rtm5qp['isZiYu'] = r5ptq, rtm5qp['isPosMsgYu'] = r5p, rtm5qp['EnvConfig'] = {}, rtm5qp['isZiYu'] || (v3dal['setNativeFileDir']('/layaairGame'), v3dal['existDir'](v3dal['fileNativeDir'], hgzb4['create'](rtm5qp, rtm5qp['onMkdirCallBack']))), rtm5qp['window']['focus'] = function () {}, bog9x['getUrlPath'] = function () {}, rtm5qp['window']['logtime'] = function (luvn_3) {}, rtm5qp['window']['alertTimeLog'] = function (xo4gb9) {}, rtm5qp['window']['resetShareInfo'] = function () {}, rtm5qp['window']['CanvasRenderingContext2D'] = function () {}, rtm5qp['window']['CanvasRenderingContext2D']['prototype'] = rtm5qp['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], rtm5qp['window']['document']['body']['appendChild'] = function () {}, rtm5qp['EnvConfig']['pixelRatioInt'] = 0x0, ue_3yn['getPixelRatio'] = rtm5qp['pixelRatio'], rtm5qp['_preCreateElement'] = b8zg['createElement'], b8zg['createElement'] = rtm5qp['createElement'], ue_3yn['createShaderCondition'] = rtm5qp['createShaderCondition'], yuv3_['parseXMLFromString'] = rtm5qp['parseXMLFromString'], nuk_e['_createInputElement'] = a3dv['_createInputElement'], rtm5qp['EnvConfig']['load'] = lva63n['prototype']['load'], lva63n['prototype']['load'] = strq['prototype']['load'], rtm5qp['isZiYu'] && r5p && wx['onMessage'](function (x19wfi) {
      x19wfi['isLoad'] && (v3dal['ziyuFileData'][x19wfi['url']] = x19wfi['data']);
    }));
  }, rtm5qp['onMkdirCallBack'] = function (xb4go, a63nv) {
    xb4go || (v3dal['filesListObj'] = JSON['parse'](a63nv['data']));
  }, rtm5qp['pixelRatio'] = function () {
    if (!rtm5qp['EnvConfig']['pixelRatioInt']) try {
      var smrtq5 = wx['getSystemInfoSync']();return rtm5qp['EnvConfig']['pixelRatioInt'] = smrtq5['pixelRatio'], smrtq5['pixelRatio'];
    } catch (zog8) {}return rtm5qp['EnvConfig']['pixelRatioInt'];
  }, rtm5qp['createElement'] = function (b8czph) {
    var l3vd6a;if ('canvas' == b8czph) return 0x1 == rtm5qp['idx'] ? rtm5qp['isZiYu'] ? (l3vd6a = sharedCanvas)['style'] = {} : l3vd6a = zhgob8['canvas'] : l3vd6a = zhgob8['wx']['createCanvas'](), rtm5qp['idx']++, l3vd6a;if ('textarea' == b8czph || 'input' == b8czph) return rtm5qp['onCreateInput'](b8czph);if ('div' != b8czph) return rtm5qp['_preCreateElement'](b8czph);return b8czph = rtm5qp['_preCreateElement'](b8czph), (b8czph['contains'] = function (r85pcm) {
      return null;
    }, b8czph['removeChild'] = function (a2i6l) {}, b8czph);
  }, rtm5qp['onCreateInput'] = function (r5qptm) {
    return r5qptm = rtm5qp['_preCreateElement'](r5qptm), (r5qptm['focus'] = a3dv['wxinputFocus'], r5qptm['blur'] = a3dv['wxinputblur'], r5qptm['style'] = {}, r5qptm['value'] = 0x0, r5qptm['parentElement'] = {}, r5qptm['placeholder'] = {}, r5qptm['type'] = {}, r5qptm['setColor'] = function (ad62vl) {}, r5qptm['setType'] = function (n3vyu) {}, r5qptm['setFontFace'] = function (i2w6d1) {}, r5qptm['addEventListener'] = function (yn_ku) {}, r5qptm['contains'] = function (n_uv3y) {
      return null;
    }, r5qptm['removeChild'] = function (m8r) {}, r5qptm);
  }, rtm5qp['createShaderCondition'] = function (m7sq5) {
    var nu3alv = this;return function () {
      return nu3alv[m7sq5['replace']('this.', '')];
    };
  }, rtm5qp['EnvConfig'] = null, rtm5qp['window'] = null, rtm5qp['_preCreateElement'] = null, rtm5qp['_inited'] = !0x1, rtm5qp['wxRequest'] = null, rtm5qp['systemInfo'] = null, rtm5qp['version'] = '0.0.1', rtm5qp['isZiYu'] = !0x1, rtm5qp['isPosMsgYu'] = !0x1, rtm5qp['parseXMLFromString'] = function (mc8zr) {
    var cz8o;mc8zr = mc8zr['replace'](/>\s+</g, '><');try {
      cz8o = new zhgob8['Parser']['DOMParser']()['parseFromString'](mc8zr, 'text/xml');
    } catch (e$0y) {
      throw '需要引入xml解析库文件';
    }return cz8o;
  }, rtm5qp['idx'] = 0x1, rtm5qp);function rtm5qp() {}rmc58p(zoh8c, 'laya.wx.mini.MiniImage'), zoh8c['prototype']['_loadImage'] = function (d6va2) {
    var m5tqp = !0x1;-0x1 == d6va2['indexOf']('layaNativeDir/') && (m5tqp = !0x0, d6va2 = nua3vl['formatURL'](d6va2)), v3dal['getFileInfo'](d6va2) ? zoh8c['onCreateImage'](d6va2, this, !m5tqp) : -0x1 != d6va2['indexOf']('http://') || -0x1 != d6va2['indexOf']('https://') ? v3dal['downImg'](d6va2, new hgzb4(zoh8c, zoh8c['onDownImgCallBack'], [d6va2, this]), d6va2) : zoh8c['onCreateImage'](d6va2, this, !0x0);
  }, zoh8c['onDownImgCallBack'] = function (ph8rc, xgw4f9, f1i2d) {
    f1i2d ? xgw4f9['onError'](null) : zoh8c['onCreateImage'](ph8rc, xgw4f9);
  }, zoh8c['onCreateImage'] = function (_nke, cbo8h, l3d6av) {
    var h8cz, f2w9i1;function k$ye0() {
      f2w9i1['onload'] = null, f2w9i1['onerror'] = null, delete cbo8h['imgCache'][_nke];
    }h8cz = (l3d6av = void 0x0 === l3d6av ? !0x1 : l3d6av) ? _nke : (g9o4xb = v3dal['getFileInfo'](_nke)['md5'], v3dal['getFileNativePath'](g9o4xb)), null == cbo8h['imgCache'] && (cbo8h['imgCache'] = {}), l3d6av = function () {
      k$ye0(), cbo8h['onLoaded'](f2w9i1);
    };var g9o4xb = function () {
      k$ye0(), cbo8h['event']('error', 'Load image failed');
    };'nativeimage' == cbo8h['_type'] ? ((f2w9i1 = new b8zg['window']['Image']())['crossOrigin'] = '', f2w9i1['onload'] = l3d6av, f2w9i1['onerror'] = g9o4xb, f2w9i1['src'] = h8cz, cbo8h['imgCache'][_nke] = f2w9i1) : new kunye_['create'](h8cz, { 'onload': l3d6av, 'onerror': g9o4xb, 'onCreate': function (kun_) {
        f2w9i1 = kun_, cbo8h['imgCache'][_nke] = kun_;
      } });
  };function zoh8c() {}var a3dv = (rmc58p(mp5rc8, 'laya.wx.mini.MiniInput'), mp5rc8['_createInputElement'] = function () {
    nuk_e['_initInput'](nuk_e['area'] = b8zg['createElement']('textarea')), nuk_e['_initInput'](nuk_e['input'] = b8zg['createElement']('input')), nuk_e['inputContainer'] = b8zg['createElement']('div'), nuk_e['inputContainer']['style']['position'] = 'absolute', nuk_e['inputContainer']['style']['zIndex'] = 0x186a0, b8zg['container']['appendChild'](nuk_e['inputContainer']), nuk_e['inputContainer']['setPos'] = function (auvnl, xbh4o) {
      nuk_e['inputContainer']['style']['left'] = auvnl + 'px', nuk_e['inputContainer']['style']['top'] = xbh4o + 'px';
    }, bog9x['stage']['on']('resize', null, mp5rc8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wfg) {
      zhgob8['dispatchEvent'] && zhgob8['dispatchEvent']('resize');
    }), k$_e0y['_soundClass'] = vaul3, k$_e0y['_musicClass'] = vaul3;
  }, mp5rc8['_onStageResize'] = function () {
    bog9x['stage']['_canvasTransform']['identity']()['scale'](b8zg['width'] / f4w91['canvas']['width'] / ue_3yn['getPixelRatio'](), b8zg['height'] / f4w91['canvas']['height'] / ue_3yn['getPixelRatio']());
  }, mp5rc8['wxinputFocus'] = function (v36na) {
    var cb8hzp = nuk_e['inputElement']['target'];cb8hzp && !cb8hzp['editable'] || (l26['window']['wx']['offKeyboardConfirm'](), l26['window']['wx']['offKeyboardInput'](), l26['window']['wx']['showKeyboard']({ 'defaultValue': cb8hzp['text'], 'maxLength': cb8hzp['maxChars'], 'multiple': cb8hzp['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (hc8oz) {}, 'fail': function (yukn) {} }), l26['window']['wx']['onKeyboardConfirm'](function (j0$y) {
      j0$y = j0$y ? j0$y['value'] : '', (cb8hzp['text'] = j0$y, cb8hzp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), l26['window']['wx']['onKeyboardInput'](function (b8hzog) {
      b8hzog = b8hzog ? b8hzog['value'] : '', cb8hzp['multiline'] || -0x1 == b8hzog['indexOf']('\x0a') ? (cb8hzp['text'] = b8hzog, cb8hzp['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, mp5rc8['inputEnter'] = function () {
    nuk_e['inputElement']['target']['focus'] = !0x1;
  }, mp5rc8['wxinputblur'] = function () {
    mp5rc8['hideKeyboard']();
  }, mp5rc8['hideKeyboard'] = function () {
    l26['window']['wx']['offKeyboardConfirm'](), l26['window']['wx']['offKeyboardInput'](), l26['window']['wx']['hideKeyboard']({ 'success': function (_lu3v) {
        console['log']('隐藏键盘');
      }, 'fail': function (vlu3_) {
        console['log']('隐藏键盘出错:' + (vlu3_ ? vlu3_['errMsg'] : ''));
      } });
  }, mp5rc8);function mp5rc8() {}var strq = function () {
    function pmcrz() {}rmc58p(pmcrz, 'laya.wx.mini.MiniLoader');var d2v6a = pmcrz['prototype'];return d2v6a['load'] = function (st75mq, gozb, uavn, nkeyu, cp5tmr) {
      void 0x0 === uavn && (uavn = !0x0), void 0x0 === cp5tmr && (cp5tmr = !0x1);var mrp5c8 = this;0x0 === (mrp5c8['_url'] = st75mq)['indexOf']('data:image') ? mrp5c8['_type'] = gozb = 'image' : mrp5c8['_type'] = gozb = gozb || mrp5c8['getTypeFromUrl'](st75mq), mrp5c8['_cache'] = uavn, mrp5c8['_data'] = null;var w2d6 = 'ascii';-0x1 != st75mq['indexOf']('.fnt') ? w2d6 = 'utf8' : 'arraybuffer' == gozb && (w2d6 = '');var ky$_e = yuv3_['getFileExtension'](st75mq);if (-0x1 != pmcrz['_fileTypeArr']['indexOf'](ky$_e)) l26['EnvConfig']['load']['call'](this, st75mq, gozb, uavn, nkeyu, cp5tmr);else {
        if (v3dal['getFileInfo'](st75mq)) l26['EnvConfig']['load']['call'](this, st75mq, gozb, uavn, nkeyu, cp5tmr);else {
          if (-0x1 != st75mq['indexOf']('layaNativeDir/')) {
            if (l26['isZiYu']) {
              var v62dla = v3dal['ziyuFileData'][st75mq];return void mrp5c8['onLoaded'](v62dla);
            }return cosnole['log']('read read'), void v3dal['read'](st75mq, w2d6, new hgzb4(pmcrz, pmcrz['onReadNativeCallBack'], [w2d6, st75mq, gozb, uavn, nkeyu, cp5tmr, mrp5c8]));
          }v62dla = '' == nua3vl['rootPath'] ? st75mq : st75mq['split'](nua3vl['rootPath'])[0x0], -0x1 != st75mq['indexOf']('http://') || -0x1 != st75mq['indexOf']('https://') ? l26['EnvConfig']['load']['call'](mrp5c8, st75mq, gozb, uavn, nkeyu, cp5tmr) : v3dal['readFile'](v62dla, w2d6, new hgzb4(pmcrz, pmcrz['onReadNativeCallBack'], [w2d6, st75mq, gozb, uavn, nkeyu, cp5tmr, mrp5c8]), st75mq);
        }
      }
    }, d2v6a['resMgrLoad'] = function (jyke0$, z8cpbh, na3uv, rp58, nuy3, di21wf, jkey0) {
      void 0x0 === na3uv && (na3uv = 0x0), void 0x0 === rp58 && (rp58 = !0x1), void 0x0 === nuy3 && (nuy3 = !0x1), void 0x0 === di21wf && (di21wf = 0x0), void 0x0 === jkey0 && (jkey0 = 0x3), -0x1 != jyke0$['indexOf']('mpack') && console['log']('=============resMgrLoad url:', jyke0$), l26['EnvConfig']['resMgrLoad'](jyke0$, (rhcp8z, vlda26, y$e0j) => {
        pmcrz['prototype']['resMgrLoadCallBack'](rhcp8z, vlda26, y$e0j, z8cpbh);
      }, na3uv, rp58, nuy3, di21wf, jkey0);
    }, d2v6a['resMgrLoadCallBack'] = function (dai6l, crpz8m, _$e0k, e$yjk) {
      console['log']('buff:::', dai6l, _$e0k, v3dal['fileNativeDir'] + '///' + v3dal['fileListName']), e$yjk(dai6l, crpz8m, _$e0k);
    }, d2v6a['clearRes'] = function (f219wi, c5mtpr) {
      this['clearRes'](f219wi, c5mtpr = void 0x0 === c5mtpr ? !0x1 : c5mtpr), c5mtpr = v3dal['getFileInfo'](f219wi), !c5mtpr || -0x1 == f219wi['indexOf']('http://') && -0x1 == f219wi['indexOf']('https://') || (c5mtpr = c5mtpr['md5'], c5mtpr = v3dal['getFileNativePath'](c5mtpr), v3dal['remove'](c5mtpr));
    }, pmcrz['onReadNativeCallBack'] = function (qmp5rt, d6w2, cp5t, _ykue0, lnu3a, f9og4x, sqtm5, chbo, zgh8bo) {
      void 0x0 === _ykue0 && (_ykue0 = !0x0), void 0x0 === f9og4x && (f9og4x = !0x1), (chbo = void 0x0 === chbo ? 0x0 : chbo) ? 0x1 == chbo && l26['EnvConfig']['load']['call'](sqtm5, d6w2, cp5t, _ykue0, lnu3a, f9og4x) : (zgh8bo = 'json' == cp5t || 'atlas' == cp5t ? l26['getJson'](zgh8bo['data']) : 'xml' == cp5t ? yuv3_['parseXMLFromString'](zgh8bo['data']) : zgh8bo['data'], sqtm5['onLoaded'](zgh8bo), !l26['isZiYu'] && l26['isPosMsgYu'] && 'arraybuffer' != cp5t && wx['postMessage']({ 'url': d6w2, 'data': zgh8bo, 'isLoad': !0x0 }));
    }, pzc8r(pmcrz, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), pmcrz;
  }(),
      v3dal = (rmc58p(ey$_k0, 'laya.wx.mini.MiniFileMgr', hzb8c), ey$_k0['isLoadFile'] = function (a2lvd) {
    return -0x1 != ey$_k0['_fileTypeArr']['indexOf'](a2lvd);
  }, ey$_k0['getFileInfo'] = function (c8pbh) {
    return c8pbh = c8pbh['split']('?')[0x0], c8pbh = ey$_k0['filesListObj'][c8pbh], null == c8pbh ? null : c8pbh;
  }, ey$_k0['onFileUpdate'] = function (v3nl6a, bcp8) {
    var n_keuy = v3nl6a['split']('/');v3nl6a = n_keuy[n_keuy['length'] - 0x1], n_keuy = ey$_k0['getFileInfo'](bcp8), null == n_keuy ? ey$_k0['onSaveFile'](bcp8, v3nl6a) : n_keuy['readyUrl'] != bcp8 && ey$_k0['remove'](v3nl6a, bcp8);
  }, ey$_k0['exits'] = function (rcm5p8, mpt5rq) {
    rcm5p8 = ey$_k0['getFileNativePath'](rcm5p8), ey$_k0['fs']['getFileInfo']({ 'filePath': rcm5p8, 'success': function (e_yu) {
        null != mpt5rq && mpt5rq['runWith']([0x0, e_yu]);
      }, 'fail': function (w261di) {
        null != mpt5rq && mpt5rq['runWith']([0x1, w261di]);
      } });
  }, ey$_k0['read'] = function (obg94, fw4, qp5tmr, gozh4) {
    void 0x0 === fw4 && (fw4 = 'ascill'), obg94 = '' != (gozh4 = void 0x0 === gozh4 ? '' : gozh4) ? ey$_k0['getFileNativePath'](obg94) : obg94, ey$_k0['fs']['readFile']({ 'filePath': obg94, 'encoding': fw4, 'success': function (g8obh) {
        null != qp5tmr && qp5tmr['runWith']([0x0, g8obh]);
      }, 'fail': function (rmtp) {
        rmtp && '' != gozh4 ? ey$_k0['down'](gozh4, fw4, qp5tmr, gozh4) : null != qp5tmr && qp5tmr['runWith']([0x1]);
      } });
  }, ey$_k0['readNativeFile'] = function (wif12, ozg4) {
    ey$_k0['fs']['readFile']({ 'filePath': wif12, 'encoding': '', 'success': function (b4ohxg) {
        null != ozg4 && ozg4['runWith']([0x0]);
      }, 'fail': function (a6nv) {
        null != ozg4 && ozg4['runWith']([0x1]);
      } });
  }, ey$_k0['down'] = function ($e_0y, lv3a6d, wd61i, w94fg) {
    void 0x0 === lv3a6d && (lv3a6d = 'ascill'), void 0x0 === w94fg && (w94fg = '');var f4og9 = ey$_k0['getFileNativePath'](w94fg);ey$_k0['wxdown']({ 'url': $e_0y, 'filePath': f4og9, 'success': function (rmz8pc) {
        0xc8 === rmz8pc['statusCode'] && ey$_k0['readFile'](rmz8pc['filePath'], lv3a6d, wd61i, w94fg);
      }, 'fail': function (r8cpzm) {
        null != wd61i && wd61i['runWith']([0x1, r8cpzm]);
      } })['onProgressUpdate'](function (y$0jk) {
      null != wd61i && wd61i['runWith']([0x2, y$0jk['progress']]);
    });
  }, ey$_k0['readFile'] = function (chr, nuv_l, r8p5, oz8hg) {
    void 0x0 === oz8hg && (oz8hg = ''), ey$_k0['fs']['readFile']({ 'filePath': chr, 'encoding': nuv_l = void 0x0 === nuv_l ? 'ascill' : nuv_l, 'success': function (xfwg9) {
        -0x1 == chr['indexOf']('http://') && -0x1 == chr['indexOf']('https://') || ey$_k0['onFileUpdate'](chr, oz8hg), null != r8p5 && r8p5['runWith']([0x0, xfwg9]);
      }, 'fail': function (prmqt) {
        prmqt && null != r8p5 && r8p5['runWith']([0x1, prmqt]);
      } });
  }, ey$_k0['downImg'] = function (o94xbg, f9x4g, n_eyku) {
    void 0x0 === n_eyku && (n_eyku = ''), ey$_k0['wxdown']({ 'url': o94xbg, 'success': function (q7mts) {
        0xc8 === q7mts['statusCode'] && ey$_k0['copyFile'](q7mts['tempFilePath'], n_eyku, f9x4g);
      }, 'fail': function (k_0y) {
        null != f9x4g && f9x4g['runWith']([0x1, k_0y]);
      } });
  }, ey$_k0['copyFile'] = function (bxo49, d6av2l, _kneuy) {
    var ad21i6 = bxo49['split']('/'),
        c8rhpz = ad21i6[ad21i6['length'] - 0x1];d6av2l['split']('?')[0x0];var zh8rcp = ey$_k0['getFileInfo'](d6av2l);ad21i6 = ey$_k0['getFileNativePath'](c8rhpz), ey$_k0['fs']['copyFile']({ 'srcPath': bxo49, 'destPath': ad21i6, 'success': function (kj0$e) {
        zh8rcp ? zh8rcp['readyUrl'] != d6av2l && ey$_k0['remove'](c8rhpz, d6av2l, _kneuy) : (ey$_k0['onSaveFile'](d6av2l, c8rhpz), null != _kneuy && _kneuy['runWith']([0x0]));
      }, 'fail': function (f9w2i1) {
        null != _kneuy && _kneuy['runWith']([0x1, f9w2i1]);
      } });
  }, ey$_k0['getFileNativePath'] = function (u_y3n) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + u_y3n;
  }, ey$_k0['remove'] = function (yen3u, r85mc, fwi1) {
    void 0x0 === r85mc && (r85mc = '');var ey3n_u = ey$_k0['getFileInfo'](r85mc),
        vl2 = ey$_k0['getFileNativePath'](ey3n_u['md5']);bog9x['loader']['clearRes'](ey3n_u['readyUrl']), ey$_k0['fs']['unlink']({ 'filePath': vl2, 'success': function (q5mt) {
        '' != r85mc && ey$_k0['onSaveFile'](r85mc, yen3u), null != fwi1 && fwi1['runWith']([0x0]);
      }, 'fail': function (mctr5p) {} });
  }, ey$_k0['onSaveFile'] = function (u_v3ln, zcp8hr) {
    var i2a16 = u_v3ln['split']('?')[0x0];ey$_k0['filesListObj'][i2a16] = { 'md5': zcp8hr, 'readyUrl': u_v3ln }, ey$_k0['fs']['writeFile']({ 'filePath': ey$_k0['fileNativeDir'] + '/' + ey$_k0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ey$_k0['filesListObj']), 'success': function (f49x1) {
        console['log']('写入测试测试成功：', f49x1);
      }, 'fail': function (og9f4x) {
        console['log']('写入测试测试失败：', og9f4x);
      } });
  }, ey$_k0['existDir'] = function (h4bzg, _nyuek) {
    ey$_k0['fs']['mkdir']({ 'dirPath': h4bzg, 'success': function (xgh4b) {
        null != _nyuek && _nyuek['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (gz8o) {
        -0x1 != gz8o['errMsg']['indexOf']('file already exists') ? ey$_k0['readSync'](ey$_k0['fileListName'], 'utf8', _nyuek) : null != _nyuek && _nyuek['runWith']([0x1, gz8o]);
      } });
  }, ey$_k0['readSync'] = function (w21i, gbohz, fdi1w2, _$0ky) {
    void 0x0 === gbohz && (gbohz = 'ascill'), void 0x0 === _$0ky && (_$0ky = ''), w21i = ey$_k0['getFileNativePath'](w21i);var kyu;try {
      kyu = ey$_k0['fs']['readFileSync'](w21i), null != fdi1w2 && fdi1w2['runWith']([0x0, { 'data': kyu }]);
    } catch (m5pqr) {
      null != fdi1w2 && fdi1w2['runWith']([0x1]);
    }
  }, ey$_k0['readCache'] = function () {}, ey$_k0['writeCache'] = function (va6ld2) {
    var r5p8c = readyUrl['split']('?')[0x0];ey$_k0['filesListObj'][r5p8c] = { 'md5': md5Name, 'readyUrl': readyUrl }, ey$_k0['fs']['writeFile']({ 'filePath': ey$_k0['fileNativeDir'] + '/' + ey$_k0['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](ey$_k0['filesListObj']), 'success': function (n_y3uv) {}, 'fail': function (mrcpt5) {} });
  }, ey$_k0['setNativeFileDir'] = function (m5s7qt) {
    ey$_k0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m5s7qt;
  }, ey$_k0['filesListObj'] = {}, ey$_k0['fileNativeDir'] = null, ey$_k0['fileListName'] = 'layaairfiles.txt', ey$_k0['ziyuFileData'] = {}, pzc8r(ey$_k0, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), ey$_k0);function ey$_k0() {
    ey$_k0['__super']['call'](this);
  }var vaul3 = function () {
    function ue_0() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, ue_0['__super']['call'](this), this['_sound'] = ue_0['_createSound']();
    }rmc58p(ue_0, 'laya.wx.mini.MiniSound', hzb8c);var d62wi = ue_0['prototype'];return d62wi['load'] = function ($kj0) {
      var gxfw = this,
          jeyk;function ohg8zb() {
        if (null != ue_0['_null']) gxfw['_sound']['onCanplay'](ue_0['_null']), gxfw['_sound']['onError'](ue_0['_null']);else try {
          gxfw['_sound']['onCanplay'](null), gxfw['_sound']['onError'](null), ue_0['_null'] = null;
        } catch (lua) {
          console['warn']('[wxmini] _clearSound:' + lua), gxfw['_sound']['onCanplay'](zmr8c), gxfw['_sound']['onError'](zmr8c), ue_0['_null'] = zmr8c;
        }
      }function zmr8c() {}$kj0 = nua3vl['formatURL']($kj0), this['url'] = $kj0, ue_0['_audioCache'][$kj0] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        ohg8zb(), jeyk['loaded'] = !0x0, jeyk['event']('complete'), ue_0['_audioCache'][jeyk['url']] = jeyk;
      }), this['_sound']['onError'](function (uyk_e0) {
        console['error']('errCode=' + uyk_e0['errCode'] + '  errMsg=' + uyk_e0['errMsg']), ohg8zb(), jeyk['event']('error');
      }), this['_sound']['src'] = $kj0, jeyk = this);
    }, d62wi['play'] = function (rsqm5, n3a6v) {
      void 0x0 === rsqm5 && (rsqm5 = 0x0), void 0x0 === n3a6v && (n3a6v = 0x0), (zrph8c = this['url'] == k$_e0y['_tMusic'] ? (ue_0['_musicAudio'] || (ue_0['_musicAudio'] = ue_0['_createSound']()), ue_0['_musicAudio']) : ue_0['_createSound']())['src'] = this['url'];var zrph8c = new xfiw9(zrph8c);return zrph8c['url'] = this['url'], zrph8c['loops'] = n3a6v, zrph8c['startTime'] = rsqm5, zrph8c['play'](), k$_e0y['addChannel'](zrph8c), zrph8c;
    }, d62wi['dispose'] = function () {
      var lad6v3 = ue_0['_audioCache'][this['url']];lad6v3 && (lad6v3['src'] = '', delete ue_0['_audioCache'][this['url']]);
    }, o8czhb(0x0, d62wi, 'duration', function () {
      return this['_sound']['duration'];
    }), ue_0['_createSound'] = function () {
      return ue_0['_id']++, l26['window']['wx']['createInnerAudioContext']();
    }, ue_0['_musicAudio'] = null, ue_0['_id'] = 0x0, ue_0['_audioCache'] = {}, ue_0['_null'] = void 0x0, ue_0;
  }(),
      xfiw9 = function () {
    function gh(tqrm5) {
      this['_audio'] = null, this['_onEnd'] = null, gh['__super']['call'](this), this['_audio'] = tqrm5, this['_onEnd'] = yuv3_['bind'](this['__onEnd'], this), tqrm5['onEnded'](this['_onEnd']);
    }rmc58p(gh, 'laya.wx.mini.MiniSoundChannel', rmp5qt);var uky0 = gh['prototype'];return uky0['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && (bog9x['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, uky0['__onNull'] = function () {}, uky0['play'] = function () {
      this['isStopped'] = !0x1, k$_e0y['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, uky0['stop'] = function () {
      if (this['isStopped'] = !0x0, k$_e0y['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != gh['_null']) this['_audio']['onEnded'](gh['_null']);else try {
          this['_audio']['onEnded'](null), gh['_null'] = null;
        } catch (bp8hz) {
          console['warn']('[wxmini] stop:' + bp8hz), this['_audio']['onEnded'](yuv3_['bind'](this['__onNull'], this)), gh['_null'] = yuv3_['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, uky0['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, uky0['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, k$_e0y['addChannel'](this), this['_audio']['play']());
    }, o8czhb(0x0, uky0, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), o8czhb(0x0, uky0, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), o8czhb(0x0, uky0, 'volume', function () {
      return 0x1;
    }, function (tmqs5) {}), gh['_null'] = void 0x0, gh;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (fogx, ohz8b) {
  'use strict';

  for (var w2fi1 in Object['defineProperty'](ohz8b, '__esModule', { 'value': !0x0 }), Laya) {
    var fix91w = Laya[w2fi1];fix91w && fix91w['__isclass'] && (ohz8b[w2fi1] = fix91w);
  }
});