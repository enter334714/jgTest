var b = wx.$e;
!function (buepv, $vb29w) {
  $vb29w['un'], $vb29w['uns'];var pevubn = $vb29w['static'],
      ph0un = $vb29w['class'],
      $q9xw = $vb29w['getset'];$vb29w['__newvec'];var jka3g = laya['utils']['Browser'],
      ga3kdj = (laya['events']['Event'], laya['events']['EventDispatcher']),
      a3g0h8 = laya['resource']['HTMLImage'],
      rdsj = laya['utils']['Handler'],
      jd6ks = laya['display']['Input'],
      j6dsr = laya['net']['Loader'];laya['maths']['Matrix'];var phu8en = laya['renders']['Render'],
      uebnvw = laya['utils']['RunDriver'];laya['media']['Sound'];var m5o_tz = laya['media']['SoundChannel'],
      f1l74 = laya['media']['SoundManager'],
      jkg0a = (laya['display']['Stage'], laya['net']['URL']),
      t4y1i = laya['utils']['Utils'],
      hn8up = (ph0un(d56srk, 'laya.wx.mini.MiniAdpter'), d56srk['getJson'] = function (i4yl1) {
    return JSON['parse'](i4yl1);
  }, d56srk['init'] = function (y74i, vpebu) {
    void 0x0 === y74i && (y74i = !0x1), void 0x0 === vpebu && (vpebu = !0x1), d56srk['_inited'] || (d56srk['window'] = buepv)['navigator']['userAgent']['indexOf']('MiniGame') < 0x0 || (d56srk['_inited'] = !0x0, d56srk['isZiYu'] = vpebu, d56srk['isPosMsgYu'] = y74i, d56srk['EnvConfig'] = {}, d56srk['isZiYu'] || (j3agkd['setNativeFileDir']('/layaairGame'), j3agkd['existDir'](j3agkd['fileNativeDir'], rdsj['create'](d56srk, d56srk['onMkdirCallBack']))), d56srk['window']['focus'] = function () {}, $vb29w['getUrlPath'] = function () {}, d56srk['window']['logtime'] = function (m_ty7o) {}, d56srk['window']['alertTimeLog'] = function (y41i) {}, d56srk['window']['resetShareInfo'] = function () {}, d56srk['window']['CanvasRenderingContext2D'] = function () {}, d56srk['window']['CanvasRenderingContext2D']['prototype'] = d56srk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d56srk['window']['document']['body']['appendChild'] = function () {}, d56srk['EnvConfig']['pixelRatioInt'] = 0x0, uebnvw['getPixelRatio'] = d56srk['pixelRatio'], d56srk['_preCreateElement'] = jka3g['createElement'], jka3g['createElement'] = d56srk['createElement'], uebnvw['createShaderCondition'] = d56srk['createShaderCondition'], t4y1i['parseXMLFromString'] = d56srk['parseXMLFromString'], jd6ks['_createInputElement'] = o4_yt['_createInputElement'], d56srk['EnvConfig']['load'] = j6dsr['prototype']['load'], j6dsr['prototype']['load'] = nph80u['prototype']['load'], d56srk['isZiYu'] && y74i && wx['onMessage'](function (m_5os) {
      m_5os['isLoad'] && (j3agkd['ziyuFileData'][m_5os['url']] = m_5os['data']);
    }));
  }, d56srk['onMkdirCallBack'] = function (g0jk3, h8pu0n) {
    g0jk3 || (j3agkd['filesListObj'] = JSON['parse'](h8pu0n['data']));
  }, d56srk['pixelRatio'] = function () {
    if (!d56srk['EnvConfig']['pixelRatioInt']) try {
      var _zrms = wx['getSystemInfoSync']();return d56srk['EnvConfig']['pixelRatioInt'] = _zrms['pixelRatio'], _zrms['pixelRatio'];
    } catch (nubvpe) {}return d56srk['EnvConfig']['pixelRatioInt'];
  }, d56srk['createElement'] = function (iy4t7) {
    var h083up;if ('canvas' == iy4t7) return 0x1 == d56srk['idx'] ? d56srk['isZiYu'] ? (h083up = sharedCanvas)['style'] = {} : h083up = buepv['canvas'] : h083up = buepv['wx']['createCanvas'](), d56srk['idx']++, h083up;if ('textarea' == iy4t7 || 'input' == iy4t7) return d56srk['onCreateInput'](iy4t7);if ('div' != iy4t7) return d56srk['_preCreateElement'](iy4t7);return iy4t7 = d56srk['_preCreateElement'](iy4t7), (iy4t7['contains'] = function (t_7oy4) {
      return null;
    }, iy4t7['removeChild'] = function (ja038g) {}, iy4t7);
  }, d56srk['onCreateInput'] = function (sr6kd) {
    return sr6kd = d56srk['_preCreateElement'](sr6kd), (sr6kd['focus'] = o4_yt['wxinputFocus'], sr6kd['blur'] = o4_yt['wxinputblur'], sr6kd['style'] = {}, sr6kd['value'] = 0x0, sr6kd['parentElement'] = {}, sr6kd['placeholder'] = {}, sr6kd['type'] = {}, sr6kd['setColor'] = function (j30ka) {}, sr6kd['setType'] = function (o5s_z) {}, sr6kd['setFontFace'] = function (dkr65) {}, sr6kd['addEventListener'] = function (y_t47o) {}, sr6kd['contains'] = function (g30kja) {
      return null;
    }, sr6kd['removeChild'] = function (w2eb) {}, sr6kd);
  }, d56srk['createShaderCondition'] = function ($wbve) {
    var hun0p8 = this;return function () {
      return hun0p8[$wbve['replace']('this.', '')];
    };
  }, d56srk['EnvConfig'] = null, d56srk['window'] = null, d56srk['_preCreateElement'] = null, d56srk['_inited'] = !0x1, d56srk['wxRequest'] = null, d56srk['systemInfo'] = null, d56srk['version'] = '0.0.1', d56srk['isZiYu'] = !0x1, d56srk['isPosMsgYu'] = !0x1, d56srk['parseXMLFromString'] = function (a08j3) {
    var uhp038;a08j3 = a08j3['replace'](/>\s+</g, '><');try {
      uhp038 = new buepv['Parser']['DOMParser']()['parseFromString'](a08j3, 'text/xml');
    } catch (wv$b92) {
      throw '需要引入xml解析库文件';
    }return uhp038;
  }, d56srk['idx'] = 0x1, d56srk);function d56srk() {}ph0un(l7i1y4, 'laya.wx.mini.MiniImage'), l7i1y4['prototype']['_loadImage'] = function (jad3g) {
    var i7t41 = !0x1;-0x1 == jad3g['indexOf']('layaNativeDir/') && (i7t41 = !0x0, jad3g = jkg0a['formatURL'](jad3g)), j3agkd['getFileInfo'](jad3g) ? l7i1y4['onCreateImage'](jad3g, this, !i7t41) : -0x1 != jad3g['indexOf']('http://') || -0x1 != jad3g['indexOf']('https://') ? j3agkd['downImg'](jad3g, new rdsj(l7i1y4, l7i1y4['onDownImgCallBack'], [jad3g, this]), jad3g) : l7i1y4['onCreateImage'](jad3g, this, !0x0);
  }, l7i1y4['onDownImgCallBack'] = function (dkjar, zs5_mo, djark6) {
    djark6 ? zs5_mo['onError'](null) : l7i1y4['onCreateImage'](dkjar, zs5_mo);
  }, l7i1y4['onCreateImage'] = function (g8ah30, h03g8a, b2w$ve) {
    var hp0g, b92v$;function ebvw2() {
      b92v$['onload'] = null, b92v$['onerror'] = null, delete h03g8a['imgCache'][g8ah30];
    }hp0g = (b2w$ve = void 0x0 === b2w$ve ? !0x1 : b2w$ve) ? g8ah30 : (ubehpn = j3agkd['getFileInfo'](g8ah30)['md5'], j3agkd['getFileNativePath'](ubehpn)), null == h03g8a['imgCache'] && (h03g8a['imgCache'] = {}), b2w$ve = function () {
      ebvw2(), h03g8a['onLoaded'](b92v$);
    };var ubehpn = function () {
      ebvw2(), h03g8a['event']('error', 'Load image failed');
    };'nativeimage' == h03g8a['_type'] ? ((b92v$ = new jka3g['window']['Image']())['crossOrigin'] = '', b92v$['onload'] = b2w$ve, b92v$['onerror'] = ubehpn, b92v$['src'] = hp0g, h03g8a['imgCache'][g8ah30] = b92v$) : new a3g0h8['create'](hp0g, { 'onload': b2w$ve, 'onerror': ubehpn, 'onCreate': function (h8enp) {
        b92v$ = h8enp, h03g8a['imgCache'][g8ah30] = h8enp;
      } });
  };function l7i1y4() {}var o4_yt = (ph0un(adk3g, 'laya.wx.mini.MiniInput'), adk3g['_createInputElement'] = function () {
    jd6ks['_initInput'](jd6ks['area'] = jka3g['createElement']('textarea')), jd6ks['_initInput'](jd6ks['input'] = jka3g['createElement']('input')), jd6ks['inputContainer'] = jka3g['createElement']('div'), jd6ks['inputContainer']['style']['position'] = 'absolute', jd6ks['inputContainer']['style']['zIndex'] = 0x186a0, jka3g['container']['appendChild'](jd6ks['inputContainer']), jd6ks['inputContainer']['setPos'] = function (_o7tmy, pg80h) {
      jd6ks['inputContainer']['style']['left'] = _o7tmy + 'px', jd6ks['inputContainer']['style']['top'] = pg80h + 'px';
    }, $vb29w['stage']['on']('resize', null, adk3g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (q$x9w2) {
      buepv['dispatchEvent'] && buepv['dispatchEvent']('resize');
    }), f1l74['_soundClass'] = gk3ad, f1l74['_musicClass'] = gk3ad;
  }, adk3g['_onStageResize'] = function () {
    $vb29w['stage']['_canvasTransform']['identity']()['scale'](jka3g['width'] / phu8en['canvas']['width'] / uebnvw['getPixelRatio'](), jka3g['height'] / phu8en['canvas']['height'] / uebnvw['getPixelRatio']());
  }, adk3g['wxinputFocus'] = function (p803) {
    var $2bvew = jd6ks['inputElement']['target'];$2bvew && !$2bvew['editable'] || (hn8up['window']['wx']['offKeyboardConfirm'](), hn8up['window']['wx']['offKeyboardInput'](), hn8up['window']['wx']['showKeyboard']({ 'defaultValue': $2bvew['text'], 'maxLength': $2bvew['maxChars'], 'multiple': $2bvew['multiline'], 'confirmHold': !0x0, 'confirmType': 'done', 'success': function (phu0) {}, 'fail': function (t7yoi4) {} }), hn8up['window']['wx']['onKeyboardConfirm'](function (oti7y4) {
      oti7y4 = oti7y4 ? oti7y4['value'] : '', ($2bvew['text'] = oti7y4, $2bvew['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']());
    }), hn8up['window']['wx']['onKeyboardInput'](function (skrjd6) {
      skrjd6 = skrjd6 ? skrjd6['value'] : '', $2bvew['multiline'] || -0x1 == skrjd6['indexOf']('\x0a') ? ($2bvew['text'] = skrjd6, $2bvew['event']('input')) : laya['wx']['mini']['MiniInput']['inputEnter']();
    }));
  }, adk3g['inputEnter'] = function () {
    jd6ks['inputElement']['target']['focus'] = !0x1;
  }, adk3g['wxinputblur'] = function () {
    adk3g['hideKeyboard']();
  }, adk3g['hideKeyboard'] = function () {
    hn8up['window']['wx']['offKeyboardConfirm'](), hn8up['window']['wx']['offKeyboardInput'](), hn8up['window']['wx']['hideKeyboard']({ 'success': function (ti17) {
        console['log']('隐藏键盘');
      }, 'fail': function (hup0) {
        console['log']('隐藏键盘出错:' + (hup0 ? hup0['errMsg'] : ''));
      } });
  }, adk3g);function adk3g() {}var nph80u = function () {
    function kdja6g() {}ph0un(kdja6g, 'laya.wx.mini.MiniLoader');var rj6k = kdja6g['prototype'];return rj6k['load'] = function (y1l4i, yt_oz, omz_y, b2$evw, pbhuen) {
      void 0x0 === omz_y && (omz_y = !0x0), void 0x0 === pbhuen && (pbhuen = !0x1);var nuhp0 = this;0x0 === (nuhp0['_url'] = y1l4i)['indexOf']('data:image') ? nuhp0['_type'] = yt_oz = 'image' : nuhp0['_type'] = yt_oz = yt_oz || nuhp0['getTypeFromUrl'](y1l4i), nuhp0['_cache'] = omz_y, nuhp0['_data'] = null;var ms_5 = 'ascii';-0x1 != y1l4i['indexOf']('.fnt') ? ms_5 = 'utf8' : 'arraybuffer' == yt_oz && (ms_5 = '');var djkg = t4y1i['getFileExtension'](y1l4i);if (-0x1 != kdja6g['_fileTypeArr']['indexOf'](djkg)) hn8up['EnvConfig']['load']['call'](this, y1l4i, yt_oz, omz_y, b2$evw, pbhuen);else {
        if (j3agkd['getFileInfo'](y1l4i)) hn8up['EnvConfig']['load']['call'](this, y1l4i, yt_oz, omz_y, b2$evw, pbhuen);else {
          if (-0x1 != y1l4i['indexOf']('layaNativeDir/')) {
            if (hn8up['isZiYu']) {
              var ga6kjd = j3agkd['ziyuFileData'][y1l4i];return void nuhp0['onLoaded'](ga6kjd);
            }return cosnole['log']('read read'), void j3agkd['read'](y1l4i, ms_5, new rdsj(kdja6g, kdja6g['onReadNativeCallBack'], [ms_5, y1l4i, yt_oz, omz_y, b2$evw, pbhuen, nuhp0]));
          }ga6kjd = '' == jkg0a['rootPath'] ? y1l4i : y1l4i['split'](jkg0a['rootPath'])[0x0], -0x1 != y1l4i['indexOf']('http://') || -0x1 != y1l4i['indexOf']('https://') ? hn8up['EnvConfig']['load']['call'](nuhp0, y1l4i, yt_oz, omz_y, b2$evw, pbhuen) : j3agkd['readFile'](ga6kjd, ms_5, new rdsj(kdja6g, kdja6g['onReadNativeCallBack'], [ms_5, y1l4i, yt_oz, omz_y, b2$evw, pbhuen, nuhp0]), y1l4i);
        }
      }
    }, rj6k['resMgrLoad'] = function (jsrd6, zo_5mt, my_oz, bpnu, kg3a0, v$2we, zto5m_) {
      void 0x0 === my_oz && (my_oz = 0x0), void 0x0 === bpnu && (bpnu = !0x1), void 0x0 === kg3a0 && (kg3a0 = !0x1), void 0x0 === v$2we && (v$2we = 0x0), void 0x0 === zto5m_ && (zto5m_ = 0x3), -0x1 != jsrd6['indexOf']('mpack') && console['log']('=============resMgrLoad url:', jsrd6), hn8up['EnvConfig']['resMgrLoad'](jsrd6, (vbuepn, d5rks6, rjkd6s) => {
        kdja6g['prototype']['resMgrLoadCallBack'](vbuepn, d5rks6, rjkd6s, zo_5mt);
      }, my_oz, bpnu, kg3a0, v$2we, zto5m_);
    }, rj6k['resMgrLoadCallBack'] = function (kjad6r, bv$w92, _szo5, o7y4_t) {
      console['log']('buff:::', kjad6r, _szo5, j3agkd['fileNativeDir'] + '///' + j3agkd['fileListName']), o7y4_t(kjad6r, bv$w92, _szo5);
    }, rj6k['clearRes'] = function (dkj6g, pbehnu) {
      this['clearRes'](dkj6g, pbehnu = void 0x0 === pbehnu ? !0x1 : pbehnu), pbehnu = j3agkd['getFileInfo'](dkj6g), !pbehnu || -0x1 == dkj6g['indexOf']('http://') && -0x1 == dkj6g['indexOf']('https://') || (pbehnu = pbehnu['md5'], pbehnu = j3agkd['getFileNativePath'](pbehnu), j3agkd['remove'](pbehnu));
    }, kdja6g['onReadNativeCallBack'] = function (r6d5sz, t74_y, vebnw, y_mzto, mzt_, yti14, upnebv, sd6jk, qw9x$2) {
      void 0x0 === y_mzto && (y_mzto = !0x0), void 0x0 === yti14 && (yti14 = !0x1), (sd6jk = void 0x0 === sd6jk ? 0x0 : sd6jk) ? 0x1 == sd6jk && hn8up['EnvConfig']['load']['call'](upnebv, t74_y, vebnw, y_mzto, mzt_, yti14) : (qw9x$2 = 'json' == vebnw || 'atlas' == vebnw ? hn8up['getJson'](qw9x$2['data']) : 'xml' == vebnw ? t4y1i['parseXMLFromString'](qw9x$2['data']) : qw9x$2['data'], upnebv['onLoaded'](qw9x$2), !hn8up['isZiYu'] && hn8up['isPosMsgYu'] && 'arraybuffer' != vebnw && wx['postMessage']({ 'url': t74_y, 'data': qw9x$2, 'isLoad': !0x0 }));
    }, pevubn(kdja6g, ['_fileTypeArr', function () {
      return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]), kdja6g;
  }(),
      j3agkd = (ph0un(o_y47, 'laya.wx.mini.MiniFileMgr', ga3kdj), o_y47['isLoadFile'] = function (_mz5s) {
    return -0x1 != o_y47['_fileTypeArr']['indexOf'](_mz5s);
  }, o_y47['getFileInfo'] = function (ztoym_) {
    return ztoym_ = ztoym_['split']('?')[0x0], ztoym_ = o_y47['filesListObj'][ztoym_], null == ztoym_ ? null : ztoym_;
  }, o_y47['onFileUpdate'] = function (m_7yo, oz_tm) {
    var vwunbe = m_7yo['split']('/');m_7yo = vwunbe[vwunbe['length'] - 0x1], vwunbe = o_y47['getFileInfo'](oz_tm), null == vwunbe ? o_y47['onSaveFile'](oz_tm, m_7yo) : vwunbe['readyUrl'] != oz_tm && o_y47['remove'](m_7yo, oz_tm);
  }, o_y47['exits'] = function (kd6jra, kgad) {
    kd6jra = o_y47['getFileNativePath'](kd6jra), o_y47['fs']['getFileInfo']({ 'filePath': kd6jra, 'success': function (b9v$2) {
        null != kgad && kgad['runWith']([0x0, b9v$2]);
      }, 'fail': function (wevnbu) {
        null != kgad && kgad['runWith']([0x1, wevnbu]);
      } });
  }, o_y47['read'] = function (u08p3h, rsk6, tzomy, vpenu) {
    void 0x0 === rsk6 && (rsk6 = 'ascill'), u08p3h = '' != (vpenu = void 0x0 === vpenu ? '' : vpenu) ? o_y47['getFileNativePath'](u08p3h) : u08p3h, o_y47['fs']['readFile']({ 'filePath': u08p3h, 'encoding': rsk6, 'success': function (rdkjs6) {
        null != tzomy && tzomy['runWith']([0x0, rdkjs6]);
      }, 'fail': function (s6rdk) {
        s6rdk && '' != vpenu ? o_y47['down'](vpenu, rsk6, tzomy, vpenu) : null != tzomy && tzomy['runWith']([0x1]);
      } });
  }, o_y47['readNativeFile'] = function (z_5sm, dg6aj) {
    o_y47['fs']['readFile']({ 'filePath': z_5sm, 'encoding': '', 'success': function (h0g3a8) {
        null != dg6aj && dg6aj['runWith']([0x0]);
      }, 'fail': function (y_t4o7) {
        null != dg6aj && dg6aj['runWith']([0x1]);
      } });
  }, o_y47['down'] = function (hunebp, s5rm, bnpv, dj6ka) {
    void 0x0 === s5rm && (s5rm = 'ascill'), void 0x0 === dj6ka && (dj6ka = '');var euwvn = o_y47['getFileNativePath'](dj6ka);o_y47['wxdown']({ 'url': hunebp, 'filePath': euwvn, 'success': function (o7mt_) {
        0xc8 === o7mt_['statusCode'] && o_y47['readFile'](o7mt_['filePath'], s5rm, bnpv, dj6ka);
      }, 'fail': function (qv$9) {
        null != bnpv && bnpv['runWith']([0x1, qv$9]);
      } })['onProgressUpdate'](function (uwv) {
      null != bnpv && bnpv['runWith']([0x2, uwv['progress']]);
    });
  }, o_y47['readFile'] = function (npbeuv, l14i7, tmoy_z, mr5sz6) {
    void 0x0 === mr5sz6 && (mr5sz6 = ''), o_y47['fs']['readFile']({ 'filePath': npbeuv, 'encoding': l14i7 = void 0x0 === l14i7 ? 'ascill' : l14i7, 'success': function (up80h) {
        -0x1 == npbeuv['indexOf']('http://') && -0x1 == npbeuv['indexOf']('https://') || o_y47['onFileUpdate'](npbeuv, mr5sz6), null != tmoy_z && tmoy_z['runWith']([0x0, up80h]);
      }, 'fail': function (y71i4) {
        y71i4 && null != tmoy_z && tmoy_z['runWith']([0x1, y71i4]);
      } });
  }, o_y47['downImg'] = function (gkda3, s65k, gakj3d) {
    void 0x0 === gakj3d && (gakj3d = ''), o_y47['wxdown']({ 'url': gkda3, 'success': function (o_5zmt) {
        0xc8 === o_5zmt['statusCode'] && o_y47['copyFile'](o_5zmt['tempFilePath'], gakj3d, s65k);
      }, 'fail': function (s56rkd) {
        null != s65k && s65k['runWith']([0x1, s56rkd]);
      } });
  }, o_y47['copyFile'] = function (my_ot, wv$q2, g0j3k) {
    var k5dsr = my_ot['split']('/'),
        p03u8h = k5dsr[k5dsr['length'] - 0x1];wv$q2['split']('?')[0x0];var h8p3g0 = o_y47['getFileInfo'](wv$q2);k5dsr = o_y47['getFileNativePath'](p03u8h), o_y47['fs']['copyFile']({ 'srcPath': my_ot, 'destPath': k5dsr, 'success': function (il4y) {
        h8p3g0 ? h8p3g0['readyUrl'] != wv$q2 && o_y47['remove'](p03u8h, wv$q2, g0j3k) : (o_y47['onSaveFile'](wv$q2, p03u8h), null != g0j3k && g0j3k['runWith']([0x0]));
      }, 'fail': function (i1y47) {
        null != g0j3k && g0j3k['runWith']([0x1, i1y47]);
      } });
  }, o_y47['getFileNativePath'] = function (y1i47) {
    return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + y1i47;
  }, o_y47['remove'] = function (oms_z, kj03ga, ti17y) {
    void 0x0 === kj03ga && (kj03ga = '');var os_m = o_y47['getFileInfo'](kj03ga),
        akgj0 = o_y47['getFileNativePath'](os_m['md5']);$vb29w['loader']['clearRes'](os_m['readyUrl']), o_y47['fs']['unlink']({ 'filePath': akgj0, 'success': function (rks56d) {
        '' != kj03ga && o_y47['onSaveFile'](kj03ga, oms_z), null != ti17y && ti17y['runWith']([0x0]);
      }, 'fail': function (ajgk6d) {} });
  }, o_y47['onSaveFile'] = function (nh0pu, $veb) {
    var g0j3ka = nh0pu['split']('?')[0x0];o_y47['filesListObj'][g0j3ka] = { 'md5': $veb, 'readyUrl': nh0pu }, o_y47['fs']['writeFile']({ 'filePath': o_y47['fileNativeDir'] + '/' + o_y47['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o_y47['filesListObj']), 'success': function (k5d6s) {
        console['log']('写入测试测试成功：', k5d6s);
      }, 'fail': function (it71) {
        console['log']('写入测试测试失败：', it71);
      } });
  }, o_y47['existDir'] = function (u308h, nvub) {
    o_y47['fs']['mkdir']({ 'dirPath': u308h, 'success': function (_s5) {
        null != nvub && nvub['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
      }, 'fail': function (ka03) {
        -0x1 != ka03['errMsg']['indexOf']('file already exists') ? o_y47['readSync'](o_y47['fileListName'], 'utf8', nvub) : null != nvub && nvub['runWith']([0x1, ka03]);
      } });
  }, o_y47['readSync'] = function (buhne, bw2n, bwe$v2, gj3kda) {
    void 0x0 === bw2n && (bw2n = 'ascill'), void 0x0 === gj3kda && (gj3kda = ''), buhne = o_y47['getFileNativePath'](buhne);var toy_mz;try {
      toy_mz = o_y47['fs']['readFileSync'](buhne), null != bwe$v2 && bwe$v2['runWith']([0x0, { 'data': toy_mz }]);
    } catch (ebw) {
      null != bwe$v2 && bwe$v2['runWith']([0x1]);
    }
  }, o_y47['readCache'] = function () {}, o_y47['writeCache'] = function (d6zs) {
    var _tm7oy = readyUrl['split']('?')[0x0];o_y47['filesListObj'][_tm7oy] = { 'md5': md5Name, 'readyUrl': readyUrl }, o_y47['fs']['writeFile']({ 'filePath': o_y47['fileNativeDir'] + '/' + o_y47['fileListName'], 'encoding': 'utf8', 'data': JSON['stringify'](o_y47['filesListObj']), 'success': function (ymo) {}, 'fail': function (ev$2wb) {} });
  }, o_y47['setNativeFileDir'] = function (gadj3k) {
    o_y47['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gadj3k;
  }, o_y47['filesListObj'] = {}, o_y47['fileNativeDir'] = null, o_y47['fileListName'] = 'layaairfiles.txt', o_y47['ziyuFileData'] = {}, pevubn(o_y47, ['_fileTypeArr', function () {
    return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
  }, 'fs', function () {
    return this['fs'] = wx['getFileSystemManager']();
  }, 'wxdown', function () {
    return this['wxdown'] = wx['downloadFile'];
  }]), o_y47);function o_y47() {
    o_y47['__super']['call'](this);
  }var gk3ad = function () {
    function bvwe$() {
      this['_sound'] = null, this['url'] = null, this['loaded'] = !0x1, bvwe$['__super']['call'](this), this['_sound'] = bvwe$['_createSound']();
    }ph0un(bvwe$, 'laya.wx.mini.MiniSound', ga3kdj);var kajg3d = bvwe$['prototype'];return kajg3d['load'] = function (nbevu) {
      var j3kg0 = this,
          mr5;function nvpub() {
        if (null != bvwe$['_null']) j3kg0['_sound']['onCanplay'](bvwe$['_null']), j3kg0['_sound']['onError'](bvwe$['_null']);else try {
          j3kg0['_sound']['onCanplay'](null), j3kg0['_sound']['onError'](null), bvwe$['_null'] = null;
        } catch (_5zso) {
          console['warn']('[wxmini] _clearSound:' + _5zso), j3kg0['_sound']['onCanplay'](t4oi7y), j3kg0['_sound']['onError'](t4oi7y), bvwe$['_null'] = t4oi7y;
        }
      }function t4oi7y() {}nbevu = jkg0a['formatURL'](nbevu), this['url'] = nbevu, bvwe$['_audioCache'][nbevu] ? this['event']('complete') : (this['_sound']['onCanplay'](function () {
        nvpub(), mr5['loaded'] = !0x0, mr5['event']('complete'), bvwe$['_audioCache'][mr5['url']] = mr5;
      }), this['_sound']['onError'](function (w$x29) {
        console['error']('errCode=' + w$x29['errCode'] + '  errMsg=' + w$x29['errMsg']), nvpub(), mr5['event']('error');
      }), this['_sound']['src'] = nbevu, mr5 = this);
    }, kajg3d['play'] = function (puenh, g03ak) {
      void 0x0 === puenh && (puenh = 0x0), void 0x0 === g03ak && (g03ak = 0x0), (hn08u = this['url'] == f1l74['_tMusic'] ? (bvwe$['_musicAudio'] || (bvwe$['_musicAudio'] = bvwe$['_createSound']()), bvwe$['_musicAudio']) : bvwe$['_createSound']())['src'] = this['url'];var hn08u = new t7o4y(hn08u);return hn08u['url'] = this['url'], hn08u['loops'] = g03ak, hn08u['startTime'] = puenh, hn08u['play'](), f1l74['addChannel'](hn08u), hn08u;
    }, kajg3d['dispose'] = function () {
      var rjka6d = bvwe$['_audioCache'][this['url']];rjka6d && (rjka6d['src'] = '', delete bvwe$['_audioCache'][this['url']]);
    }, $q9xw(0x0, kajg3d, 'duration', function () {
      return this['_sound']['duration'];
    }), bvwe$['_createSound'] = function () {
      return bvwe$['_id']++, hn8up['window']['wx']['createInnerAudioContext']();
    }, bvwe$['_musicAudio'] = null, bvwe$['_id'] = 0x0, bvwe$['_audioCache'] = {}, bvwe$['_null'] = void 0x0, bvwe$;
  }(),
      t7o4y = function () {
    function $we2bv(nubeph) {
      this['_audio'] = null, this['_onEnd'] = null, $we2bv['__super']['call'](this), this['_audio'] = nubeph, this['_onEnd'] = t4y1i['bind'](this['__onEnd'], this), nubeph['onEnded'](this['_onEnd']);
    }ph0un($we2bv, 'laya.wx.mini.MiniSoundChannel', m5o_tz);var ew2nvb = $we2bv['prototype'];return ew2nvb['__onEnd'] = function () {
      if (0x1 == this['loops']) return this['completeHandler'] && ($vb29w['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], !0x1), this['completeHandler'] = null), this['stop'](), void this['event']('complete');0x0 < this['loops'] && this['loops']--, this['startTime'] = 0x0, this['play']();
    }, ew2nvb['__onNull'] = function () {}, ew2nvb['play'] = function () {
      this['isStopped'] = !0x1, f1l74['addChannel'](this), this['_audio'] && this['_audio']['play']();
    }, ew2nvb['stop'] = function () {
      if (this['isStopped'] = !0x0, f1l74['removeChannel'](this), this['completeHandler'] = null, this['_audio']) {
        if (this['_audio']['stop'](), null != $we2bv['_null']) this['_audio']['onEnded']($we2bv['_null']);else try {
          this['_audio']['onEnded'](null), $we2bv['_null'] = null;
        } catch (drzs) {
          console['warn']('[wxmini] stop:' + drzs), this['_audio']['onEnded'](t4y1i['bind'](this['__onNull'], this)), $we2bv['_null'] = t4y1i['bind'](this['__onNull'], this);
        }this['_audio'] = null;
      }
    }, ew2nvb['pause'] = function () {
      this['isStopped'] = !0x0, this['_audio']['pause']();
    }, ew2nvb['resume'] = function () {
      this['_audio'] && (this['isStopped'] = !0x1, f1l74['addChannel'](this), this['_audio']['play']());
    }, $q9xw(0x0, ew2nvb, 'position', function () {
      return this['_audio'] ? this['_audio']['currentTime'] : 0x0;
    }), $q9xw(0x0, ew2nvb, 'duration', function () {
      return this['_audio'] ? this['_audio']['duration'] : 0x0;
    }), $q9xw(0x0, ew2nvb, 'volume', function () {
      return 0x1;
    }, function (_t5zo) {}), $we2bv['_null'] = void 0x0, $we2bv;
  }();
}(window, (document, Laya)), 'function' == typeof define && define['amd'] && define('laya.core', ['require', 'exports'], function (jgkd3, tyom7) {
  'use strict';

  for (var m_to in Object['defineProperty'](tyom7, '__esModule', { 'value': !0x0 }), Laya) {
    var mr_z = Laya[m_to];mr_z && mr_z['__isclass'] && (tyom7[m_to] = mr_z);
  }
});